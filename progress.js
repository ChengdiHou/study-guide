const progressTools = {
  storageKey(id) {
    return 'study-guide:v1:' + id;
  },

  readBackup(data, known) {
    if (data?.version !== 1 || !Array.isArray(data.completed)
        || data.completed.some(id => typeof id !== 'string')) {
      return null;
    }
    return new Set(data.completed.filter(id => known.has(id)));
  }
};

if (typeof module !== 'undefined') module.exports = progressTools;
