const byId = id => document.getElementById(id);
const itemId = (course, item) => course.id + '/' + item.id;
const trackable = course => course.items.filter(item => item.track !== false);
const known = new Set(courses.flatMap(course => trackable(course).map(item => itemId(course, item))));
const completed = new Set();
const storageMessage = byId('storage-message');
const courseLinks = new Map();
const linkCounts = new Map();
const catalog = byId('catalog');
const search = byId('search');
const filters = [...document.querySelectorAll('[data-filter]')];
let filter = 'all';
let activeCourse;
let storageAvailable = true;

function loadProgress() {
  try {
    for (const id of known) {
      if (localStorage.getItem(progressTools.storageKey(id)) === '1') completed.add(id);
    }
  } catch {
    storageAvailable = false;
    storageMessage.textContent = '浏览器暂时无法保存进度。请导出备份，避免关闭页面后丢失。';
  }
}

function saveItem(id, checked) {
  if (checked) completed.add(id);
  else completed.delete(id);

  try {
    const key = progressTools.storageKey(id);
    if (checked) localStorage.setItem(key, '1');
    else localStorage.removeItem(key);
    storageAvailable = true;
  } catch {
    storageAvailable = false;
    storageMessage.textContent = '浏览器暂时无法保存进度。请导出备份，避免关闭页面后丢失。';
  }
}

function node(tag, className, content) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content !== undefined) element.textContent = content;
  return element;
}

function externalLink({ href, label }) {
  const anchor = node('a', '', label + ' ↗');
  anchor.href = href;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  return anchor;
}

function updateCounts() {
  byId('overall').textContent = completed.size + ' / ' + known.size;
  byId('overall-bar').max = known.size;
  byId('overall-bar').value = completed.size;

  for (const course of courses) {
    const items = trackable(course);
    const done = items.filter(item => completed.has(itemId(course, item))).length;
    linkCounts.get(course.id).textContent = done + '/' + items.length;
    if (course === activeCourse) {
      byId('course-count').textContent = '已完成 ' + done + ' / ' + items.length
        + ' 项 · ' + Math.round(100 * done / items.length) + '%';
      byId('course-bar').max = items.length;
      byId('course-bar').value = done;
    }
  }
}

function renderDirectory(focusIndex) {
  const query = search.value.trim().toLocaleLowerCase();
  const list = document.createDocumentFragment();
  const visible = activeCourse.items.filter(item => {
    const done = completed.has(itemId(activeCourse, item));
    const matchingStatus = filter === 'all' || (item.track !== false && done === (filter === 'done'));
    return matchingStatus && [item.title, item.label, item.meta, item.group, item.kind]
      .some(value => value?.toLocaleLowerCase().includes(query));
  });

  let group;
  for (const item of visible) {
    if (item.group !== group) {
      group = item.group;
      if (group) list.append(node('h3', 'group', group));
    }

    const row = node('div', 'item');
    const id = itemId(activeCourse, item);
    const checkable = item.track !== false;
    const title = node(checkable ? 'label' : 'span', 'item-label');
    const detail = node('span', 'detail');
    detail.append(node('span', 'item-code', item.label), node('span', 'item-title', item.title));
    if (checkable) {
      const checkbox = node('input');
      checkbox.type = 'checkbox';
      checkbox.dataset.item = id;
      checkbox.checked = completed.has(id);
      title.append(checkbox);
    } else {
      row.classList.add('reference');
    }
    title.append(detail);
    row.append(title);
    const trailing = node('div', 'item-extra');
    trailing.append(node('span', 'item-meta', item.meta));
    if (item.link) trailing.append(externalLink(item.link));
    row.append(trailing);
    list.append(row);
  }
  catalog.replaceChildren(list);
  byId('empty').hidden = visible.length > 0;

  if (focusIndex !== undefined) {
    const checkboxes = catalog.querySelectorAll('input');
    (checkboxes[Math.min(focusIndex, checkboxes.length - 1)] || search).focus();
  }
}

function setFilter(value) {
  filter = value;
  for (const button of filters) button.setAttribute('aria-pressed', String(button.dataset.filter === value));
}

function selectCourse() {
  const course = courses.find(entry => '#' + entry.id === location.hash) || courses[0];
  if (course === activeCourse) return;
  const navigating = Boolean(activeCourse);
  activeCourse = course;
  for (const [id, link] of courseLinks) {
    if (id === course.id) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  byId('category').textContent = course.category;
  byId('course-heading').textContent = course.name;
  byId('description').textContent = course.description;
  byId('links').replaceChildren(...course.links.map(externalLink));
  search.value = '';
  setFilter('all');
  updateCounts();
  renderDirectory();
  if (navigating) byId('course-heading').focus();
}

for (const course of courses) {
  const anchor = node('a', 'course-link');
  anchor.href = '#' + course.id;
  const count = node('span', 'small-count');
  anchor.append(node('span', '', course.name), count);
  courseLinks.set(course.id, anchor);
  linkCounts.set(course.id, count);
  byId('courses').append(anchor);
}

catalog.addEventListener('change', event => {
  const box = event.target;
  if (!box.dataset.item) return;
  saveItem(box.dataset.item, box.checked);
  updateCounts();
  if (filter !== 'all') renderDirectory([...catalog.querySelectorAll('input')].indexOf(box));
});

window.addEventListener('hashchange', selectCourse);
document.querySelector('.skip').addEventListener('click', event => {
  event.preventDefault();
  byId('course-heading').focus();
});
window.addEventListener('storage', event => {
  if (event.key !== null && !event.key.startsWith(progressTools.storageKey(''))) return;
  completed.clear();
  loadProgress();
  updateCounts();
  renderDirectory();
});
search.addEventListener('input', () => renderDirectory());
for (const button of filters) {
  button.addEventListener('click', () => {
    setFilter(button.dataset.filter);
    renderDirectory();
  });
}

byId('export').addEventListener('click', () => {
  const data = JSON.stringify({ version: 1, completed: [...completed].sort() }, null, 2);
  const url = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
  const anchor = node('a');
  anchor.href = url;
  anchor.download = 'study-guide-progress.json';
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

const backupFile = byId('backup-file');
byId('import').addEventListener('click', () => backupFile.click());
backupFile.addEventListener('change', async () => {
  const file = backupFile.files[0];
  backupFile.value = '';
  if (!file) return;
  let imported;
  try {
    imported = progressTools.readBackup(JSON.parse(await file.text()), known);
  } catch {
    // The status message below also covers unreadable JSON.
  }
  if (!imported) {
    storageMessage.textContent = '无法读取这份进度备份。';
    return;
  }
  const before = completed.size;
  for (const id of imported) saveItem(id, true);
  updateCounts();
  renderDirectory();
  if (storageAvailable) storageMessage.textContent = '已合并进度，新增 ' + (completed.size - before) + ' 项。';
});

loadProgress();
selectCourse();
