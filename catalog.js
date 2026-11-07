const courses = [
  {
    "id": "mspm0",
    "name": "TI MSPM0 开发板",
    "category": "电赛",
    "description": "基础、小车与云台。按视频学习，配合实操与调试。基础目录的原始截图缺少第 3 节。",
    "items": [
      {
        "id": "基础-合集介绍",
        "label": "合集介绍",
        "title": "电赛教程持续更新；小白备战电赛、代码开源",
        "meta": "01:33",
        "kind": "视频",
        "group": "基础"
      },
      {
        "id": "基础-基础 #1",
        "label": "基础 #1",
        "title": "环境配置和资料获取；VSCode与AI辅助编写代码",
        "meta": "25:24",
        "kind": "视频",
        "group": "基础"
      },
      {
        "id": "基础-补充答疑",
        "label": "补充答疑",
        "title": "CCS环境搭建、环境配置答疑、VSCode与AI编写代码",
        "meta": "08:33",
        "kind": "视频",
        "group": "基础"
      },
      {
        "id": "基础-基础 #2",
        "label": "基础 #2",
        "title": "时钟加速、代码提速",
        "meta": "20:50",
        "kind": "视频",
        "group": "基础"
      },
      {
        "id": "基础-基础 #4",
        "label": "基础 #4",
        "title": "代码调试与模块化编程",
        "meta": "14:54",
        "kind": "视频",
        "group": "基础"
      },
      {
        "id": "基础-基础 #5",
        "label": "基础 #5",
        "title": "驱动OLED屏幕",
        "meta": "15:04",
        "kind": "视频",
        "group": "基础"
      },
      {
        "id": "基础-基础 #6",
        "label": "基础 #6",
        "title": "串口通信，与任何设备通信",
        "meta": "14:04",
        "kind": "视频",
        "group": "基础"
      },
      {
        "id": "基础-基础 #7",
        "label": "基础 #7",
        "title": "PCB绘制入门",
        "meta": "11:21",
        "kind": "视频",
        "group": "基础"
      },
      {
        "id": "基础-基础 #8",
        "label": "基础 #8",
        "title": "状态机、按键、ADC；电赛真题解析",
        "meta": "32:37",
        "kind": "视频",
        "group": "基础"
      },
      {
        "id": "基础-基础 #9",
        "label": "基础 #9",
        "title": "驱动舵机，认识PWM；封面另标有电机主题",
        "meta": "22:07",
        "kind": "视频",
        "group": "基础"
      },
      {
        "id": "云台-云台 #1",
        "label": "云台 #1",
        "title": "闭环步进电机选型建议",
        "meta": "03:48",
        "kind": "视频",
        "group": "云台"
      },
      {
        "id": "云台-云台 #2",
        "label": "云台 #2",
        "title": "步进电机驱动",
        "meta": "14:58",
        "kind": "视频",
        "group": "云台"
      },
      {
        "id": "云台-云台 #3",
        "label": "云台 #3",
        "title": "步进电机速度、角度控制",
        "meta": "22:52",
        "kind": "视频",
        "group": "云台"
      },
      {
        "id": "云台-云台 #4",
        "label": "云台 #4",
        "title": "闭环步进电机驱动；串口42闭环",
        "meta": "17:25",
        "kind": "视频",
        "group": "云台"
      },
      {
        "id": "云台-云台 #5",
        "label": "云台 #5",
        "title": "屏幕代码移植；OLED、SPI",
        "meta": "20:00",
        "kind": "视频",
        "group": "云台"
      },
      {
        "id": "云台-云台 #6",
        "label": "云台 #6",
        "title": "自制激光模块、防止争议",
        "meta": "09:34",
        "kind": "视频",
        "group": "云台"
      },
      {
        "id": "云台-云台 #7",
        "label": "云台 #7",
        "title": "激光控制、长按控制激光",
        "meta": "12:57",
        "kind": "视频",
        "group": "云台"
      },
      {
        "id": "云台-云台 #8",
        "label": "云台 #8",
        "title": "按键遥控步进云台／激光云台",
        "meta": "20:52",
        "kind": "视频",
        "group": "云台"
      },
      {
        "id": "小车-小车 #1",
        "label": "小车 #1",
        "title": "直流电机PID控制",
        "meta": "23:15",
        "kind": "视频",
        "group": "小车"
      },
      {
        "id": "小车-小车 #2",
        "label": "小车 #2",
        "title": "电机PID闭环",
        "meta": "32:51",
        "kind": "视频",
        "group": "小车"
      },
      {
        "id": "小车-小车 #3",
        "label": "小车 #3",
        "title": "动手做循迹小车",
        "meta": "49:35",
        "kind": "视频",
        "group": "小车"
      },
      {
        "id": "小车-小车 #4",
        "label": "小车 #4",
        "title": "M0驱动MPU6050",
        "meta": "27:50",
        "kind": "视频",
        "group": "小车"
      },
      {
        "id": "小车-小车 #5",
        "label": "小车 #5",
        "title": "小车底板PCB绘制",
        "meta": "01:07:27",
        "kind": "视频",
        "group": "小车"
      },
      {
        "id": "小车-开源介绍",
        "label": "开源介绍",
        "title": "小车底板PCB开源；标题“太乱了，真受不了了”",
        "meta": "02:48",
        "kind": "视频",
        "group": "小车"
      },
      {
        "id": "小车-小车 #6",
        "label": "小车 #6",
        "title": "串口读取陀螺仪数据",
        "meta": "26:09",
        "kind": "视频",
        "group": "小车"
      }
    ],
    "links": [
      {
        "label": "B 站课程作者",
        "href": "https://space.bilibili.com/568468320/dynamic"
      }
    ]
  },
  {
    "id": "opencv",
    "name": "OpenCV 电赛视觉",
    "category": "电赛",
    "description": "按既定顺序，完成 MSPM0 后开始。",
    "items": [
      {
        "id": "课程预告",
        "label": "课程预告",
        "title": "电赛视觉教程、速成OpenCV，各种派通用",
        "meta": "05:45",
        "kind": "视频"
      },
      {
        "id": "视觉 #0",
        "label": "视觉 #0",
        "title": "认识泰山派及各种派",
        "meta": "06:15",
        "kind": "视频"
      },
      {
        "id": "视觉 #1",
        "label": "视觉 #1",
        "title": "泰山派OpenCV开发环境配置",
        "meta": "19:13",
        "kind": "视频"
      },
      {
        "id": "补充安装教程",
        "label": "补充安装教程",
        "title": "各种派OpenCV环境配置、安装OpenCV",
        "meta": "21:40",
        "kind": "视频"
      },
      {
        "id": "视觉 #2",
        "label": "视觉 #2",
        "title": "捕获图像并上传、画面实时预览",
        "meta": "11:53",
        "kind": "视频"
      },
      {
        "id": "视觉 #3",
        "label": "视觉 #3",
        "title": "Python速成",
        "meta": "13:50",
        "kind": "视频"
      },
      {
        "id": "视觉 #4",
        "label": "视觉 #4",
        "title": "OpenCV指定摄像头、绘制基本图像",
        "meta": "13:52",
        "kind": "视频"
      },
      {
        "id": "视觉 #5",
        "label": "视觉 #5",
        "title": "矩形识别与OpenCV图像二值化",
        "meta": "19:01",
        "kind": "视频"
      },
      {
        "id": "视觉 #6",
        "label": "视觉 #6",
        "title": "激光点与色块识别",
        "meta": "09:41",
        "kind": "视频"
      },
      {
        "id": "视觉 #7",
        "label": "视觉 #7",
        "title": "代码封装复用，同时识别矩形和激光",
        "meta": "14:15",
        "kind": "视频"
      },
      {
        "id": "视觉 #8",
        "label": "视觉 #8",
        "title": "OpenCV代码调试、BUG排查",
        "meta": "13:24",
        "kind": "视频"
      },
      {
        "id": "视觉 #9",
        "label": "视觉 #9",
        "title": "泰山派GPIO输出；RGB三色灯、激光笔驱动",
        "meta": "13:32",
        "kind": "视频"
      },
      {
        "id": "视觉 #10",
        "label": "视觉 #10",
        "title": "按键切换任务",
        "meta": "15:39",
        "kind": "视频"
      },
      {
        "id": "视觉 #11",
        "label": "视觉 #11",
        "title": "串口通信与收发数据",
        "meta": "13:18",
        "kind": "视频"
      },
      {
        "id": "视觉 #12",
        "label": "视觉 #12",
        "title": "屏幕使用、开机自动运行",
        "meta": "17:41",
        "kind": "视频"
      },
      {
        "id": "视觉 #13",
        "label": "视觉 #13",
        "title": "驱动闭环步进云台",
        "meta": "14:23",
        "kind": "视频"
      },
      {
        "id": "视觉 #14",
        "label": "视觉 #14",
        "title": "泰山派运行YOLO、自定义神经网络",
        "meta": "22:33",
        "kind": "视频"
      }
    ],
    "links": [
      {
        "label": "B 站课程作者",
        "href": "https://space.bilibili.com/568468320/dynamic"
      }
    ]
  },
  {
    "id": "genai",
    "name": "生成式 AI 导论 2024",
    "category": "人工智能",
    "description": "李宏毅 · 人工智能第一阶段",
    "items": [
      {
        "id": "第0讲",
        "label": "第0讲",
        "title": "课程说明（标题注有17:15有芙莉莲雷）",
        "meta": "25:40",
        "kind": "视频"
      },
      {
        "id": "第1讲",
        "label": "第1讲",
        "title": "生成式AI是什么？",
        "meta": "29:29",
        "kind": "视频"
      },
      {
        "id": "第2讲",
        "label": "第2讲",
        "title": "今日的生成式人工智能厉害在哪里？从“工具”变为“工具人”",
        "meta": "26:06",
        "kind": "视频"
      },
      {
        "id": "第3讲",
        "label": "第3讲",
        "title": "训练不了人工智能？你可以训练你自己（上）——神奇咒语与提供更多资讯",
        "meta": "34:35",
        "kind": "视频"
      },
      {
        "id": "第4讲",
        "label": "第4讲",
        "title": "训练不了人工智能？你可以训练你自己（中）——拆解问题与使用工具",
        "meta": "47:22",
        "kind": "视频"
      },
      {
        "id": "第5讲",
        "label": "第5讲",
        "title": "训练不了人工智能？你可以训练你自己（下）——让语言彼此合作，把一个人活成一个团队（标题有剧透提示）",
        "meta": "25:20",
        "kind": "视频"
      },
      {
        "id": "第6讲",
        "label": "第6讲",
        "title": "大型语言模型修炼史——第一阶段：自我学习，累积实力（标题注明熟悉机器学习者可从15:00开始）",
        "meta": "34:26",
        "kind": "视频"
      },
      {
        "id": "第7讲",
        "label": "第7讲",
        "title": "大型语言模型修炼史——第二阶段：名师指点，发挥潜力（兼谈对ChatGPT做逆向工程与LLaMA时代的开始）",
        "meta": "38:19",
        "kind": "视频"
      },
      {
        "id": "第8讲",
        "label": "第8讲",
        "title": "大型语言模型修炼史——第三阶段：参与实战，打磨技巧（Reinforcement Learning from Human Feedback，RLHF）",
        "meta": "36:59",
        "kind": "视频"
      },
      {
        "id": "第9讲",
        "label": "第9讲",
        "title": "以大型语言模型打造的AI Agent（标题另有14:50开始的芙莉莲相关示例说明）",
        "meta": "24:46",
        "kind": "视频"
      },
      {
        "id": "第10讲",
        "label": "第10讲",
        "title": "今日的语言模型是如何做文字接龙的——浅谈Transformer（已熟悉Transformer的同学可略过本讲）",
        "meta": "38:16",
        "kind": "视频"
      },
      {
        "id": "第11讲",
        "label": "第11讲",
        "title": "大型语言模型在“想”什么呢？——浅谈大型语言模型的可解释性",
        "meta": "45:16",
        "kind": "视频"
      },
      {
        "id": "第12讲",
        "label": "第12讲",
        "title": "浅谈检定大型语言模型能力的各种方式",
        "meta": "46:12",
        "kind": "视频"
      },
      {
        "id": "第13讲",
        "label": "第13讲",
        "title": "浅谈大型语言模型相关的安全性议题（上）——亡羊补牢、语言模型的偏见、有多少人用ChatGPT写论文审查意见",
        "meta": "32:04",
        "kind": "视频"
      },
      {
        "id": "第14讲",
        "label": "第14讲",
        "title": "浅谈大型语言模型相关的安全性议题（下）——欺骗大型语言模型",
        "meta": "15:32",
        "kind": "视频"
      },
      {
        "id": "第15讲",
        "label": "第15讲",
        "title": "为什么语言模型用文字接龙，图片生成不用像素接龙呢？——浅谈生成式人工智能的生成策略",
        "meta": "45:27",
        "kind": "视频"
      },
      {
        "id": "第16讲",
        "label": "第16讲",
        "title": "可以加速所有语言模型生成速度的神奇外挂——Speculative Decoding",
        "meta": "12:42",
        "kind": "视频"
      },
      {
        "id": "第17讲",
        "label": "第17讲",
        "title": "有关影像的生成式AI（上）——AI如何产生图片和影片（Sora背后可能用的原理）",
        "meta": "49:30",
        "kind": "视频"
      },
      {
        "id": "第18讲",
        "label": "第18讲",
        "title": "有关影像的生成式AI（下）——快速导读经典影像生成方法（VAE、Flow、Diffusion、GAN）以及与生成的影片互动",
        "meta": "37:01",
        "kind": "视频"
      },
      {
        "id": "补充视频",
        "label": "补充视频",
        "title": "GPT-4o背后可能的语音技术猜测",
        "meta": "38:13",
        "kind": "视频"
      }
    ],
    "links": [
      {
        "label": "课程主页",
        "href": "https://speech.ee.ntu.edu.tw/~hylee/genai/2024-spring.php"
      },
      {
        "label": "YouTube 播放列表",
        "href": "https://www.youtube.com/playlist?list=PLJV_el3uVTsPz6CTopeRp2L2t4aL_Kgil"
      }
    ]
  },
  {
    "id": "ml",
    "name": "机器学习 2021",
    "category": "人工智能",
    "description": "李宏毅 · 中文版 · 人工智能第一阶段",
    "items": [
      {
        "id": "1",
        "label": "1",
        "title": "预测本频道观看人数（上）——机器学习基本概念简介",
        "meta": "19:59",
        "kind": "视频"
      },
      {
        "id": "2",
        "label": "2",
        "title": "预测本频道观看人数（下）——深度学习基本概念简介",
        "meta": "58:35",
        "kind": "视频"
      },
      {
        "id": "3",
        "label": "3",
        "title": "机器学习任务攻略",
        "meta": "51:23",
        "kind": "视频"
      },
      {
        "id": "4",
        "label": "4",
        "title": "类神经网络训练不起来怎么办（一）：局部最小值（local minima）与鞍点（saddle point）",
        "meta": "33:45",
        "kind": "视频"
      },
      {
        "id": "5",
        "label": "5",
        "title": "类神经网络训练不起来怎么办（二）：批次（batch）与动量（momentum）",
        "meta": "30:59",
        "kind": "视频"
      },
      {
        "id": "6",
        "label": "6",
        "title": "类神经网络训练不起来怎么办（三）：自动调整学习率（Learning Rate）",
        "meta": "37:42",
        "kind": "视频"
      },
      {
        "id": "7",
        "label": "7",
        "title": "类神经网络训练不起来怎么办（四）：损失函数（Loss）也可能有影响",
        "meta": "19:27",
        "kind": "视频"
      },
      {
        "id": "8",
        "label": "8",
        "title": "类神经网络训练不起来怎么办（五）：批次标准化（Batch Normalization）简介",
        "meta": "30:56",
        "kind": "视频"
      },
      {
        "id": "9",
        "label": "9",
        "title": "卷积神经网络（Convolutional Neural Networks，CNN）",
        "meta": "55:39",
        "kind": "视频"
      },
      {
        "id": "10",
        "label": "10",
        "title": "自注意力机制（Self-attention）（上）",
        "meta": "28:18",
        "kind": "视频"
      },
      {
        "id": "11",
        "label": "11",
        "title": "自注意力机制（Self-attention）（下）",
        "meta": "45:58",
        "kind": "视频"
      },
      {
        "id": "12",
        "label": "12",
        "title": "Transformer（上）",
        "meta": "32:48",
        "kind": "视频"
      },
      {
        "id": "13",
        "label": "13",
        "title": "Transformer（下）",
        "meta": "01:00:34",
        "kind": "视频"
      },
      {
        "id": "14",
        "label": "14",
        "title": "生成式对抗网络（Generative Adversarial Network，GAN）（一）——基本概念介绍",
        "meta": "39:08",
        "kind": "视频"
      },
      {
        "id": "15",
        "label": "15",
        "title": "生成式对抗网络（GAN）（二）——理论介绍与WGAN",
        "meta": "46:40",
        "kind": "视频"
      },
      {
        "id": "16",
        "label": "16",
        "title": "生成式对抗网络（GAN）（三）——生成器效能评估与条件式生成",
        "meta": "49:47",
        "kind": "视频"
      },
      {
        "id": "17",
        "label": "17",
        "title": "生成式对抗网络（GAN）（四）——Cycle GAN",
        "meta": "23:41",
        "kind": "视频"
      },
      {
        "id": "18",
        "label": "18",
        "title": "自监督式学习（Self-supervised Learning）（一）——芝麻街与进击的巨人",
        "meta": "07:10",
        "kind": "视频"
      },
      {
        "id": "19",
        "label": "19",
        "title": "自监督式学习（Self-supervised Learning）（二）——BERT简介",
        "meta": "50:41",
        "kind": "视频"
      },
      {
        "id": "20",
        "label": "20",
        "title": "自监督式学习（Self-supervised Learning）（三）——BERT的奇闻轶事",
        "meta": "24:14",
        "kind": "视频"
      },
      {
        "id": "21",
        "label": "21",
        "title": "自监督式学习（Self-supervised Learning）（四）——GPT的野望",
        "meta": "17:03",
        "kind": "视频"
      },
      {
        "id": "22",
        "label": "22",
        "title": "自编码器（Auto-encoder）（上）——基本概念",
        "meta": "19:00",
        "kind": "视频"
      },
      {
        "id": "23",
        "label": "23",
        "title": "自编码器（Auto-encoder）（下）——领结变声器与更多应用",
        "meta": "30:35",
        "kind": "视频"
      },
      {
        "id": "24",
        "label": "24",
        "title": "来自人类的恶意攻击（Adversarial Attack）（上）——基本概念",
        "meta": "29:49",
        "kind": "视频"
      },
      {
        "id": "25",
        "label": "25",
        "title": "来自人类的恶意攻击（Adversarial Attack）（下）——类神经网络能否躲过人类深不见底的恶意？",
        "meta": "46:33",
        "kind": "视频"
      },
      {
        "id": "26",
        "label": "26",
        "title": "机器学习模型的可解释性（Explainable ML）（上）——为什么类神经网络可以正确分辨宝可梦和数码宝贝呢？",
        "meta": "49:08",
        "kind": "视频"
      },
      {
        "id": "27",
        "label": "27",
        "title": "机器学习模型的可解释性（Explainable ML）（下）——机器心中的猫长什么样子？",
        "meta": "22:45",
        "kind": "视频"
      },
      {
        "id": "28",
        "label": "28",
        "title": "概述领域自适应（Domain Adaptation）",
        "meta": "34:33",
        "kind": "视频"
      },
      {
        "id": "29",
        "label": "29",
        "title": "概述增强式学习（Reinforcement Learning，RL）（一）——增强式学习跟机器学习一样都是三个步骤",
        "meta": "45:02",
        "kind": "视频"
      },
      {
        "id": "30",
        "label": "30",
        "title": "概述增强式学习（RL）（二）——Policy Gradient与修课心情",
        "meta": "41:14",
        "kind": "视频"
      },
      {
        "id": "31",
        "label": "31",
        "title": "概述增强式学习（RL）（三）——Actor-Critic",
        "meta": "34:41",
        "kind": "视频"
      },
      {
        "id": "32",
        "label": "32",
        "title": "概述增强式学习（RL）（四）——回馈非常罕见的时候怎么办？机器的望梅止渴",
        "meta": "17:35",
        "kind": "视频"
      },
      {
        "id": "33",
        "label": "33",
        "title": "概述增强式学习（RL）（五）——如何从示范中学习？逆向增强式学习（Inverse RL）",
        "meta": "27:08",
        "kind": "视频"
      },
      {
        "id": "34",
        "label": "34",
        "title": "机器终身学习（Life Long Learning，LL）（一）——为什么今日的人工智能无法成为天网？灾难性遗忘（Catastrophic Forgetting）",
        "meta": "32:00",
        "kind": "视频"
      },
      {
        "id": "35",
        "label": "35",
        "title": "机器终身学习（LL）（二）——灾难性遗忘（Catastrophic Forgetting）的克服之道",
        "meta": "36:39",
        "kind": "视频"
      },
      {
        "id": "36",
        "label": "36",
        "title": "神经网络压缩（Network Compression）（一）——类神经网络剪枝（Pruning）与大乐透假说（Lottery Ticket Hypothesis）",
        "meta": "29:32",
        "kind": "视频"
      },
      {
        "id": "37",
        "label": "37",
        "title": "神经网络压缩（Network Compression）（二）——从各种不同的面向来压缩神经网络",
        "meta": "56:46",
        "kind": "视频"
      },
      {
        "id": "38",
        "label": "38",
        "title": "元学习（Meta Learning）（一）——元学习跟机器学习一样也是三个步骤",
        "meta": "46:20",
        "kind": "视频"
      },
      {
        "id": "39",
        "label": "39",
        "title": "元学习（Meta Learning）（二）——万物皆可Meta",
        "meta": "31:37",
        "kind": "视频"
      },
      {
        "id": "40",
        "label": "40",
        "title": "课程结语——最后的业配并改编《为学一首示子侄》作结",
        "meta": "27:41",
        "kind": "视频"
      }
    ],
    "links": [
      {
        "label": "课程资料",
        "href": "https://speech.ee.ntu.edu.tw/~hylee/ml/2021-spring.html"
      }
    ]
  },
  {
    "id": "d2l",
    "name": "动手学深度学习",
    "category": "人工智能",
    "description": "李沐 · PyTorch 版 · 人工智能第一阶段",
    "items": [
      {
        "id": "00",
        "label": "00",
        "title": "预告",
        "meta": "03:13",
        "kind": "视频"
      },
      {
        "id": "01",
        "label": "01",
        "title": "课程安排",
        "meta": "08:08",
        "kind": "视频"
      },
      {
        "id": "02",
        "label": "02",
        "title": "深度学习介绍",
        "meta": "22:57",
        "kind": "视频"
      },
      {
        "id": "03",
        "label": "03",
        "title": "安装",
        "meta": "19:57",
        "kind": "视频"
      },
      {
        "id": "04",
        "label": "04",
        "title": "数据操作＋数据预处理",
        "meta": "34:18",
        "kind": "视频"
      },
      {
        "id": "05",
        "label": "05",
        "title": "线性代数",
        "meta": "41:34",
        "kind": "视频"
      },
      {
        "id": "06",
        "label": "06",
        "title": "矩阵计算",
        "meta": "14:35",
        "kind": "视频"
      },
      {
        "id": "07",
        "label": "07",
        "title": "自动求导",
        "meta": "24:27",
        "kind": "视频"
      },
      {
        "id": "08",
        "label": "08",
        "title": "线性回归＋基础优化算法",
        "meta": "01:09:44",
        "kind": "视频"
      },
      {
        "id": "09",
        "label": "09",
        "title": "Softmax回归＋损失函数＋图片分类数据集",
        "meta": "01:20:06",
        "kind": "视频"
      },
      {
        "id": "10",
        "label": "10",
        "title": "多层感知机＋代码实现",
        "meta": "01:11:45",
        "kind": "视频"
      },
      {
        "id": "11",
        "label": "11",
        "title": "模型选择＋过拟合和欠拟合",
        "meta": "01:27:10",
        "kind": "视频"
      },
      {
        "id": "12",
        "label": "12",
        "title": "权重衰退",
        "meta": "37:11",
        "kind": "视频"
      },
      {
        "id": "13",
        "label": "13",
        "title": "丢弃法",
        "meta": "49:07",
        "kind": "视频"
      },
      {
        "id": "14",
        "label": "14",
        "title": "数值稳定性＋模型初始化和激活函数",
        "meta": "01:01:53",
        "kind": "视频"
      },
      {
        "id": "15",
        "label": "15",
        "title": "实战：Kaggle房价预测＋课程竞赛：加州2020年房价预测",
        "meta": "26:30",
        "kind": "视频"
      },
      {
        "id": "16",
        "label": "16",
        "title": "PyTorch神经网络基础",
        "meta": "53:09",
        "kind": "视频"
      },
      {
        "id": "17",
        "label": "17",
        "title": "使用和购买GPU",
        "meta": "30:31",
        "kind": "视频"
      },
      {
        "id": "18",
        "label": "18",
        "title": "预测房价竞赛总结",
        "meta": "42:42",
        "kind": "视频"
      },
      {
        "id": "19",
        "label": "19",
        "title": "卷积层",
        "meta": "43:54",
        "kind": "视频"
      },
      {
        "id": "20",
        "label": "20",
        "title": "卷积层里的填充和步幅",
        "meta": "43:10",
        "kind": "视频"
      },
      {
        "id": "21",
        "label": "21",
        "title": "卷积层里的多输入多输出通道",
        "meta": "45:26",
        "kind": "视频"
      },
      {
        "id": "22",
        "label": "22",
        "title": "池化层",
        "meta": "27:07",
        "kind": "视频"
      },
      {
        "id": "23",
        "label": "23",
        "title": "经典卷积神经网络LeNet",
        "meta": "01:00:26",
        "kind": "视频"
      },
      {
        "id": "24",
        "label": "24",
        "title": "深度卷积神经网络AlexNet",
        "meta": "01:02:01",
        "kind": "视频"
      },
      {
        "id": "25",
        "label": "25",
        "title": "使用块的网络VGG",
        "meta": "20:43",
        "kind": "视频"
      },
      {
        "id": "26",
        "label": "26",
        "title": "网络中的网络NiN",
        "meta": "37:38",
        "kind": "视频"
      },
      {
        "id": "27",
        "label": "27",
        "title": "含并行连结的网络GoogLeNet／Inception V3",
        "meta": "50:42",
        "kind": "视频"
      },
      {
        "id": "28",
        "label": "28",
        "title": "批量归一化",
        "meta": "46:11",
        "kind": "视频"
      },
      {
        "id": "29",
        "label": "29",
        "title": "残差网络ResNet",
        "meta": "34:09",
        "kind": "视频"
      },
      {
        "id": "29.2",
        "label": "29.2",
        "title": "ResNet为什么能训练出1000层的模型",
        "meta": "10:39",
        "kind": "视频"
      },
      {
        "id": "30",
        "label": "30",
        "title": "第二部分完结竞赛：图片分类",
        "meta": "06:37",
        "kind": "视频"
      },
      {
        "id": "31",
        "label": "31",
        "title": "深度学习硬件：CPU和GPU",
        "meta": "01:32:09",
        "kind": "视频"
      },
      {
        "id": "32",
        "label": "32",
        "title": "深度学习硬件：TPU和其他",
        "meta": "01:06:37",
        "kind": "视频"
      },
      {
        "id": "33",
        "label": "33",
        "title": "单机多卡并行",
        "meta": "10:55",
        "kind": "视频"
      },
      {
        "id": "34",
        "label": "34",
        "title": "多GPU训练实现",
        "meta": "54:14",
        "kind": "视频"
      },
      {
        "id": "35",
        "label": "35",
        "title": "分布式训练",
        "meta": "30:45",
        "kind": "视频"
      },
      {
        "id": "36",
        "label": "36",
        "title": "数据增广",
        "meta": "55:00",
        "kind": "视频"
      },
      {
        "id": "37",
        "label": "37",
        "title": "微调",
        "meta": "34:21",
        "kind": "视频"
      },
      {
        "id": "38",
        "label": "38",
        "title": "第二次竞赛：树叶分类结果",
        "meta": "05:31",
        "kind": "视频"
      },
      {
        "id": "39",
        "label": "39",
        "title": "实战Kaggle比赛：图像分类（CIFAR-10）",
        "meta": "45:43",
        "kind": "视频"
      },
      {
        "id": "40",
        "label": "40",
        "title": "实战Kaggle比赛：狗的品种识别（ImageNet Dogs）",
        "meta": "34:25",
        "kind": "视频"
      },
      {
        "id": "41",
        "label": "41",
        "title": "物体检测和数据集",
        "meta": "35:40",
        "kind": "视频"
      },
      {
        "id": "42",
        "label": "42",
        "title": "锚框",
        "meta": "52:53",
        "kind": "视频"
      },
      {
        "id": "43",
        "label": "43",
        "title": "树叶分类竞赛技术总结",
        "meta": "26:29",
        "kind": "视频"
      },
      {
        "id": "44",
        "label": "44",
        "title": "物体检测算法：R-CNN、SSD、YOLO",
        "meta": "58:29",
        "kind": "视频"
      },
      {
        "id": "45",
        "label": "45",
        "title": "SSD实现",
        "meta": "01:29:43",
        "kind": "视频"
      },
      {
        "id": "46",
        "label": "46",
        "title": "语义分割和数据集",
        "meta": "55:10",
        "kind": "视频"
      },
      {
        "id": "47",
        "label": "47",
        "title": "转置卷积",
        "meta": "31:58",
        "kind": "视频"
      },
      {
        "id": "47.2",
        "label": "47.2",
        "title": "转置卷积是一种卷积",
        "meta": "09:39",
        "kind": "视频"
      },
      {
        "id": "48",
        "label": "48",
        "title": "全连接卷积神经网络FCN",
        "meta": "26:55",
        "kind": "视频"
      },
      {
        "id": "49",
        "label": "49",
        "title": "样式迁移",
        "meta": "32:48",
        "kind": "视频"
      },
      {
        "id": "50",
        "label": "50",
        "title": "课程竞赛：牛仔行头检测",
        "meta": "11:04",
        "kind": "视频"
      },
      {
        "id": "51",
        "label": "51",
        "title": "序列模型",
        "meta": "54:11",
        "kind": "视频"
      },
      {
        "id": "52",
        "label": "52",
        "title": "文本预处理",
        "meta": "20:30",
        "kind": "视频"
      },
      {
        "id": "53",
        "label": "53",
        "title": "语言模型",
        "meta": "51:13",
        "kind": "视频"
      },
      {
        "id": "54",
        "label": "54",
        "title": "循环神经网络RNN",
        "meta": "34:04",
        "kind": "视频"
      },
      {
        "id": "55",
        "label": "55",
        "title": "循环神经网络RNN的实现",
        "meta": "01:26:25",
        "kind": "视频"
      },
      {
        "id": "56",
        "label": "56",
        "title": "门控循环单元GRU",
        "meta": "39:49",
        "kind": "视频"
      },
      {
        "id": "57",
        "label": "57",
        "title": "长短期记忆网络LSTM",
        "meta": "17:55",
        "kind": "视频"
      },
      {
        "id": "58",
        "label": "58",
        "title": "深度循环神经网络",
        "meta": "13:19",
        "kind": "视频"
      },
      {
        "id": "59",
        "label": "59",
        "title": "双向循环神经网络",
        "meta": "13:54",
        "kind": "视频"
      },
      {
        "id": "60",
        "label": "60",
        "title": "机器翻译数据集",
        "meta": "10:16",
        "kind": "视频"
      },
      {
        "id": "61",
        "label": "61",
        "title": "编码器－解码器架构",
        "meta": "06:17",
        "kind": "视频"
      },
      {
        "id": "62",
        "label": "62",
        "title": "序列到序列学习（seq2seq）",
        "meta": "48:46",
        "kind": "视频"
      },
      {
        "id": "63",
        "label": "63",
        "title": "束搜索",
        "meta": "11:44",
        "kind": "视频"
      },
      {
        "id": "64",
        "label": "64",
        "title": "注意力机制",
        "meta": "23:58",
        "kind": "视频"
      },
      {
        "id": "65",
        "label": "65",
        "title": "注意力分数",
        "meta": "30:47",
        "kind": "视频"
      },
      {
        "id": "66",
        "label": "66",
        "title": "使用注意力机制的seq2seq",
        "meta": "30:37",
        "kind": "视频"
      },
      {
        "id": "67",
        "label": "67",
        "title": "自注意力",
        "meta": "37:44",
        "kind": "视频"
      },
      {
        "id": "68",
        "label": "68",
        "title": "Transformer",
        "meta": "51:53",
        "kind": "视频"
      },
      {
        "id": "69",
        "label": "69",
        "title": "BERT预训练",
        "meta": "57:14",
        "kind": "视频"
      },
      {
        "id": "70",
        "label": "70",
        "title": "BERT微调",
        "meta": "31:26",
        "kind": "视频"
      },
      {
        "id": "71",
        "label": "71",
        "title": "目标检测竞赛总结",
        "meta": "23:58",
        "kind": "视频"
      },
      {
        "id": "72",
        "label": "72",
        "title": "优化算法",
        "meta": "43:17",
        "kind": "视频"
      },
      {
        "id": "73",
        "label": "73",
        "title": "课程总结和进阶学习（完结）",
        "meta": "27:55",
        "kind": "视频"
      }
    ],
    "links": [
      {
        "label": "B 站课程视频",
        "href": "https://www.bilibili.com/list/1567748478?bvid=BV1if4y147hS&oid=289532467"
      },
      {
        "label": "中文教材",
        "href": "https://zh.d2l.ai/"
      }
    ]
  },
  {
    "id": "ds",
    "name": "数据结构",
    "category": "计算机基础",
    "description": "浙江大学 · 陈越 · 原目录含课程视频与习题讲解。",
    "items": [
      {
        "id": "1",
        "label": "1",
        "title": "1.1.1 关于数据组织-例_图书摆放",
        "meta": "09:28",
        "kind": "视频"
      },
      {
        "id": "2",
        "label": "2",
        "title": "1.1.2 关于空间使用-例_PrintN函数实现",
        "meta": "04:09",
        "kind": "视频"
      },
      {
        "id": "3",
        "label": "3",
        "title": "1.1.3 关于算法效率-例_计算多项式值",
        "meta": "10:18",
        "kind": "视频"
      },
      {
        "id": "4",
        "label": "4",
        "title": "1.1.4 抽象数据类型",
        "meta": "08:55",
        "kind": "视频"
      },
      {
        "id": "5",
        "label": "5",
        "title": "1.2.1 算法的定义",
        "meta": "04:48",
        "kind": "视频"
      },
      {
        "id": "6",
        "label": "6",
        "title": "1.2.2 什么是好的算法",
        "meta": "09:02",
        "kind": "视频"
      },
      {
        "id": "7",
        "label": "7",
        "title": "1.2.3 复杂度的渐进表示",
        "meta": "08:55",
        "kind": "视频"
      },
      {
        "id": "8",
        "label": "8",
        "title": "1.3.1 应用实例-算法1 & 2",
        "meta": "06:00",
        "kind": "视频"
      },
      {
        "id": "9",
        "label": "9",
        "title": "1.3.2 应用实例-算法3",
        "meta": "07:55",
        "kind": "视频"
      },
      {
        "id": "10",
        "label": "10",
        "title": "1.3.3 应用实例-算法4",
        "meta": "06:11",
        "kind": "视频"
      },
      {
        "id": "11",
        "label": "11",
        "title": "“中国高校计算机大赛-团体程序设计天梯赛”酷炫视频",
        "meta": "03:08",
        "kind": "视频"
      },
      {
        "id": "12",
        "label": "12",
        "title": "2.1.1 引子_多项式表示",
        "meta": "09:34",
        "kind": "视频"
      },
      {
        "id": "13",
        "label": "13",
        "title": "2.1.2 线性表及顺序存储",
        "meta": "06:53",
        "kind": "视频"
      },
      {
        "id": "14",
        "label": "14",
        "title": "2.1.3 顺序存储的插入和删除",
        "meta": "05:31",
        "kind": "视频"
      },
      {
        "id": "15",
        "label": "15",
        "title": "2.1.4 链式存储及查找",
        "meta": "06:05",
        "kind": "视频"
      },
      {
        "id": "16",
        "label": "16",
        "title": "2.1.5 链式存储的插入和删除",
        "meta": "07:10",
        "kind": "视频"
      },
      {
        "id": "17",
        "label": "17",
        "title": "2.1.6 广义表与多重链表",
        "meta": "09:59",
        "kind": "视频"
      },
      {
        "id": "18",
        "label": "18",
        "title": "2.2.1 什么是堆栈",
        "meta": "10:47",
        "kind": "视频"
      },
      {
        "id": "19",
        "label": "19",
        "title": "2.2.2 堆栈的顺序存储实现",
        "meta": "10:13",
        "kind": "视频"
      },
      {
        "id": "20",
        "label": "20",
        "title": "2.2.3 堆栈的链式存储实现",
        "meta": "07:08",
        "kind": "视频"
      },
      {
        "id": "21",
        "label": "21",
        "title": "2.2.4 堆栈应用_表达式求值",
        "meta": "11:47",
        "kind": "视频"
      },
      {
        "id": "22",
        "label": "22",
        "title": "2.3.1 队列及顺序存储实现",
        "meta": "11:07",
        "kind": "视频"
      },
      {
        "id": "23",
        "label": "23",
        "title": "2.3.2 队列的链式存储实现",
        "meta": "04:40",
        "kind": "视频"
      },
      {
        "id": "24",
        "label": "24",
        "title": "2.4 多项式的加法运算实现",
        "meta": "10:30",
        "kind": "视频"
      },
      {
        "id": "25",
        "label": "25",
        "title": "1.题意理解与多项式表示",
        "meta": "08:10",
        "kind": "视频"
      },
      {
        "id": "26",
        "label": "26",
        "title": "2.程序框架及读入多项式",
        "meta": "08:41",
        "kind": "视频"
      },
      {
        "id": "27",
        "label": "27",
        "title": "3.加法、乘法运算及多项式输出",
        "meta": "10:55",
        "kind": "视频"
      },
      {
        "id": "28",
        "label": "28",
        "title": "3.1.1 引子(顺序查找)",
        "meta": "08:53",
        "kind": "视频"
      },
      {
        "id": "29",
        "label": "29",
        "title": "3.1.2 引子(二分查找例子)",
        "meta": "08:16",
        "kind": "视频"
      },
      {
        "id": "30",
        "label": "30",
        "title": "3.1.3 引子(二分查找实现)",
        "meta": "08:13",
        "kind": "视频"
      },
      {
        "id": "31",
        "label": "31",
        "title": "3.1.4 树的定义和术语",
        "meta": "07:29",
        "kind": "视频"
      },
      {
        "id": "32",
        "label": "32",
        "title": "3.1.5 树的表示",
        "meta": "06:10",
        "kind": "视频"
      },
      {
        "id": "33",
        "label": "33",
        "title": "3.2.1 二叉树的定义及性质",
        "meta": "09:58",
        "kind": "视频"
      },
      {
        "id": "34",
        "label": "34",
        "title": "3.2.2 二叉树的存储结构",
        "meta": "06:44",
        "kind": "视频"
      },
      {
        "id": "35",
        "label": "35",
        "title": "3.3.1 先序中序后序遍历",
        "meta": "10:14",
        "kind": "视频"
      },
      {
        "id": "36",
        "label": "36",
        "title": "3.3.2 中序非递归遍历",
        "meta": "08:50",
        "kind": "视频"
      },
      {
        "id": "37",
        "label": "37",
        "title": "3.3.3 层序遍历",
        "meta": "07:42",
        "kind": "视频"
      },
      {
        "id": "38",
        "label": "38",
        "title": "3.3.4 遍历应用例子",
        "meta": "10:20",
        "kind": "视频"
      },
      {
        "id": "39",
        "label": "39",
        "title": "1.题意理解及二叉树表示",
        "meta": "09:56",
        "kind": "视频"
      },
      {
        "id": "40",
        "label": "40",
        "title": "2.程序框架、建树及同构判别",
        "meta": "07:35",
        "kind": "视频"
      },
      {
        "id": "41",
        "label": "41",
        "title": "4.1.1 二叉搜索树及查找",
        "meta": "08:01",
        "kind": "视频"
      },
      {
        "id": "42",
        "label": "42",
        "title": "4.1.2 二叉搜索树的插入",
        "meta": "06:22",
        "kind": "视频"
      },
      {
        "id": "43",
        "label": "43",
        "title": "4.1.3 二叉搜索树的删除",
        "meta": "06:38",
        "kind": "视频"
      },
      {
        "id": "44",
        "label": "44",
        "title": "4.2.1 什么是平衡二叉树",
        "meta": "11:20",
        "kind": "视频"
      },
      {
        "id": "45",
        "label": "45",
        "title": "4.2.2 平衡二叉树的调整",
        "meta": "11:36",
        "kind": "视频"
      },
      {
        "id": "46",
        "label": "46",
        "title": "1.题意理解及搜索树表示",
        "meta": "07:15",
        "kind": "视频"
      },
      {
        "id": "47",
        "label": "47",
        "title": "2.程序框架及建树",
        "meta": "05:58",
        "kind": "视频"
      },
      {
        "id": "48",
        "label": "48",
        "title": "3.搜索树是否一样的判别",
        "meta": "09:31",
        "kind": "视频"
      },
      {
        "id": "49",
        "label": "49",
        "title": "线形结构习题.1 什么是抽象的链表",
        "meta": "04:08",
        "kind": "视频"
      },
      {
        "id": "50",
        "label": "50",
        "title": "线形结构习题.2 链表逆转算法",
        "meta": "06:24",
        "kind": "视频"
      },
      {
        "id": "51",
        "label": "51",
        "title": "线性结构习题.3 测试数据",
        "meta": "02:40",
        "kind": "视频"
      },
      {
        "id": "52",
        "label": "52",
        "title": "5.1.1 什么是堆",
        "meta": "09:40",
        "kind": "视频"
      },
      {
        "id": "53",
        "label": "53",
        "title": "5.1.2 堆的插入",
        "meta": "09:11",
        "kind": "视频"
      },
      {
        "id": "54",
        "label": "54",
        "title": "5.1.3 堆的删除",
        "meta": "06:43",
        "kind": "视频"
      },
      {
        "id": "55",
        "label": "55",
        "title": "5.1.4 堆的建立",
        "meta": "04:35",
        "kind": "视频"
      },
      {
        "id": "56",
        "label": "56",
        "title": "5.2.1 什么是哈夫曼树",
        "meta": "06:43",
        "kind": "视频"
      },
      {
        "id": "57",
        "label": "57",
        "title": "5.2.2 哈夫曼树的构造",
        "meta": "05:24",
        "kind": "视频"
      },
      {
        "id": "58",
        "label": "58",
        "title": "5.2.3 哈夫曼编码",
        "meta": "07:49",
        "kind": "视频"
      },
      {
        "id": "59",
        "label": "59",
        "title": "5.3.1 集合的表示及查找",
        "meta": "07:24",
        "kind": "视频"
      },
      {
        "id": "60",
        "label": "60",
        "title": "5.3.2 集合的并运算",
        "meta": "05:24",
        "kind": "视频"
      },
      {
        "id": "61",
        "label": "61",
        "title": "堆中的路径",
        "meta": "07:52",
        "kind": "视频"
      },
      {
        "id": "62",
        "label": "62",
        "title": "小白-FT.1 集合的简化表示",
        "meta": "08:36",
        "kind": "视频"
      },
      {
        "id": "63",
        "label": "63",
        "title": "小白-FT.2 题意理解与TSSN的实现",
        "meta": "09:45",
        "kind": "视频"
      },
      {
        "id": "64",
        "label": "64",
        "title": "小白-FT.3 按秩归并",
        "meta": "10:45",
        "kind": "视频"
      },
      {
        "id": "65",
        "label": "65",
        "title": "小白-FT.4 路径压缩",
        "meta": "13:42",
        "kind": "视频"
      },
      {
        "id": "66",
        "label": "66",
        "title": "6.1.1 什么是图-定义",
        "meta": "08:21",
        "kind": "视频"
      },
      {
        "id": "67",
        "label": "67",
        "title": "6.1.2 什么是图-邻接矩阵表示法",
        "meta": "10:00",
        "kind": "视频"
      },
      {
        "id": "68",
        "label": "68",
        "title": "6.1.3 什么是图-邻接表表示法",
        "meta": "05:45",
        "kind": "视频"
      },
      {
        "id": "69",
        "label": "69",
        "title": "6.2.1 图的遍历-DFS",
        "meta": "06:44",
        "kind": "视频"
      },
      {
        "id": "70",
        "label": "70",
        "title": "6.2.2 图的遍历-BFS",
        "meta": "03:28",
        "kind": "视频"
      },
      {
        "id": "71",
        "label": "71",
        "title": "6.2.3 图的遍历-为什么需要两种遍历",
        "meta": "04:04",
        "kind": "视频"
      },
      {
        "id": "72",
        "label": "72",
        "title": "6.2.4 图的遍历-图不连通怎么办",
        "meta": "08:10",
        "kind": "视频"
      },
      {
        "id": "73",
        "label": "73",
        "title": "6.3 应用实例_拯救007",
        "meta": "14:41",
        "kind": "视频"
      },
      {
        "id": "74",
        "label": "74",
        "title": "6.4 应用实例_六度空间",
        "meta": "08:07",
        "kind": "视频"
      },
      {
        "id": "75",
        "label": "75",
        "title": "小白-BG.1 邻接矩阵表示的图结点的结构",
        "meta": "04:14",
        "kind": "视频"
      },
      {
        "id": "76",
        "label": "76",
        "title": "小白-BG.2 邻接矩阵表示的图-初始化",
        "meta": "02:25",
        "kind": "视频"
      },
      {
        "id": "77",
        "label": "77",
        "title": "小白-BG.3 邻接矩阵表示的图-插入边",
        "meta": "02:21",
        "kind": "视频"
      },
      {
        "id": "78",
        "label": "78",
        "title": "小白-BG.4 邻接矩阵表示的图-建立图",
        "meta": "03:40",
        "kind": "视频"
      },
      {
        "id": "79",
        "label": "79",
        "title": "小白-BG.5 邻接表表示的图结点的结构",
        "meta": "03:51",
        "kind": "视频"
      },
      {
        "id": "80",
        "label": "80",
        "title": "小白-BG.6 邻接表表示的图-建立图",
        "meta": "03:59",
        "kind": "视频"
      },
      {
        "id": "81",
        "label": "81",
        "title": "树习题-TTA.1 题意理解",
        "meta": "03:59",
        "kind": "视频"
      },
      {
        "id": "82",
        "label": "82",
        "title": "树习题-TTA.2 核心算法",
        "meta": "08:20",
        "kind": "视频"
      },
      {
        "id": "83",
        "label": "83",
        "title": "树习题-CBST.1 数据结构的选择",
        "meta": "05:43",
        "kind": "视频"
      },
      {
        "id": "84",
        "label": "84",
        "title": "树习题-CBST.2 核心算法",
        "meta": "13:14",
        "kind": "视频"
      },
      {
        "id": "85",
        "label": "85",
        "title": "树习题-CBST.3 计算左子树的规模",
        "meta": "06:53",
        "kind": "视频"
      },
      {
        "id": "86",
        "label": "86",
        "title": "树习题-HC.1 题意理解",
        "meta": "08:18",
        "kind": "视频"
      },
      {
        "id": "87",
        "label": "87",
        "title": "树习题-HC.2 计算最优编码长度",
        "meta": "03:59",
        "kind": "视频"
      },
      {
        "id": "88",
        "label": "88",
        "title": "树习题-HC.3 检查编码",
        "meta": "05:58",
        "kind": "视频"
      },
      {
        "id": "89",
        "label": "89",
        "title": "7.1.1 概述",
        "meta": "06:00",
        "kind": "视频"
      },
      {
        "id": "90",
        "label": "90",
        "title": "7.1.2 无权图的单源最短路",
        "meta": "10:54",
        "kind": "视频"
      },
      {
        "id": "91",
        "label": "91",
        "title": "7.1.2-s 无权图的单源最短路示例",
        "meta": "07:11",
        "kind": "视频"
      },
      {
        "id": "92",
        "label": "92",
        "title": "7.1.3 有权图的单源最短路",
        "meta": "16:54",
        "kind": "视频"
      },
      {
        "id": "93",
        "label": "93",
        "title": "7.1.3-s 有权图的单源最短路示例",
        "meta": "08:28",
        "kind": "视频"
      },
      {
        "id": "94",
        "label": "94",
        "title": "7.1.4 多源最短路算法",
        "meta": "07:19",
        "kind": "视频"
      },
      {
        "id": "95",
        "label": "95",
        "title": "小白-HP.1题意理解",
        "meta": "06:47",
        "kind": "视频"
      },
      {
        "id": "96",
        "label": "96",
        "title": "小白-HP.2 程序框架搭建",
        "meta": "03:02",
        "kind": "视频"
      },
      {
        "id": "97",
        "label": "97",
        "title": "小白-HP.3 选择动物",
        "meta": "04:23",
        "kind": "视频"
      },
      {
        "id": "98",
        "label": "98",
        "title": "小白-HP-4 模块的引用与裁剪",
        "meta": "04:35",
        "kind": "视频"
      },
      {
        "id": "99",
        "label": "99",
        "title": "8.1.1 Prim算法",
        "meta": "13:25",
        "kind": "视频"
      },
      {
        "id": "100",
        "label": "100",
        "title": "8.1.2 Kruskal算法",
        "meta": "06:53",
        "kind": "视频"
      },
      {
        "id": "101",
        "label": "101",
        "title": "8.2.1 拓扑排序",
        "meta": "14:46",
        "kind": "视频"
      },
      {
        "id": "102",
        "label": "102",
        "title": "8.2.2 关键路径",
        "meta": "13:13",
        "kind": "视频"
      },
      {
        "id": "103",
        "label": "103",
        "title": "图习题.1 核心算法",
        "meta": "04:55",
        "kind": "视频"
      },
      {
        "id": "104",
        "label": "104",
        "title": "图习题.2 其他推广",
        "meta": "03:57",
        "kind": "视频"
      },
      {
        "id": "105",
        "label": "105",
        "title": "9.1.1 概述",
        "meta": "05:16",
        "kind": "视频"
      },
      {
        "id": "106",
        "label": "106",
        "title": "9.1.2 冒泡排序",
        "meta": "07:05",
        "kind": "视频"
      },
      {
        "id": "107",
        "label": "107",
        "title": "9.1.3 插入排序",
        "meta": "06:21",
        "kind": "视频"
      },
      {
        "id": "108",
        "label": "108",
        "title": "9.1.4 时间复杂度下界",
        "meta": "04:50",
        "kind": "视频"
      },
      {
        "id": "109",
        "label": "109",
        "title": "9.2 希尔排序",
        "meta": "09:30",
        "kind": "视频"
      },
      {
        "id": "110",
        "label": "110",
        "title": "9.3.1 选择排序",
        "meta": "03:00",
        "kind": "视频"
      },
      {
        "id": "111",
        "label": "111",
        "title": "9.3.2 堆排序",
        "meta": "07:29",
        "kind": "视频"
      },
      {
        "id": "112",
        "label": "112",
        "title": "9.4.1 有序子列的归并",
        "meta": "07:57",
        "kind": "视频"
      },
      {
        "id": "113",
        "label": "113",
        "title": "9.4.2 递归算法",
        "meta": "10:37",
        "kind": "视频"
      },
      {
        "id": "114",
        "label": "114",
        "title": "9.4.3 非递归算法",
        "meta": "09:51",
        "kind": "视频"
      },
      {
        "id": "115",
        "label": "115",
        "title": "10.1.1 算法概述",
        "meta": "04:55",
        "kind": "视频"
      },
      {
        "id": "116",
        "label": "116",
        "title": "10.1.2 选主元",
        "meta": "05:44",
        "kind": "视频"
      },
      {
        "id": "117",
        "label": "117",
        "title": "10.1.3 子集划分",
        "meta": "09:03",
        "kind": "视频"
      },
      {
        "id": "118",
        "label": "118",
        "title": "10.1.4 算法实现",
        "meta": "05:48",
        "kind": "视频"
      },
      {
        "id": "119",
        "label": "119",
        "title": "10.2.1 算法概述",
        "meta": "06:22",
        "kind": "视频"
      },
      {
        "id": "120",
        "label": "120",
        "title": "10.2.2 物理排序",
        "meta": "06:22",
        "kind": "视频"
      },
      {
        "id": "121",
        "label": "121",
        "title": "10.3.1 桶排序",
        "meta": "03:44",
        "kind": "视频"
      },
      {
        "id": "122",
        "label": "122",
        "title": "10.3.2 基数排序",
        "meta": "05:28",
        "kind": "视频"
      },
      {
        "id": "123",
        "label": "123",
        "title": "10.3.3 多关键字的排序",
        "meta": "03:05",
        "kind": "视频"
      },
      {
        "id": "124",
        "label": "124",
        "title": "10.4 排序算法的比较",
        "meta": "04:03",
        "kind": "视频"
      },
      {
        "id": "125",
        "label": "125",
        "title": "11.1.1 引子_散列的基本思路",
        "meta": "07:35",
        "kind": "视频"
      },
      {
        "id": "126",
        "label": "126",
        "title": "11.1.2 什么是散列表",
        "meta": "06:10",
        "kind": "视频"
      },
      {
        "id": "127",
        "label": "127",
        "title": "11.2.1 数字关键词的散列函数构造",
        "meta": "06:04",
        "kind": "视频"
      },
      {
        "id": "128",
        "label": "128",
        "title": "11.2.2 字符串关键词的散列函数构造",
        "meta": "07:03",
        "kind": "视频"
      },
      {
        "id": "129",
        "label": "129",
        "title": "11.3.1 开放定址法",
        "meta": "03:55",
        "kind": "视频"
      },
      {
        "id": "130",
        "label": "130",
        "title": "11.3.2 线性探测",
        "meta": "09:35",
        "kind": "视频"
      },
      {
        "id": "131",
        "label": "131",
        "title": "11.3.3 线性探测—字符串的例子",
        "meta": "03:51",
        "kind": "视频"
      },
      {
        "id": "132",
        "label": "132",
        "title": "11.3.4 平方探测法",
        "meta": "05:45",
        "kind": "视频"
      },
      {
        "id": "133",
        "label": "133",
        "title": "11.3.5 平方探测法的实现",
        "meta": "09:56",
        "kind": "视频"
      },
      {
        "id": "134",
        "label": "134",
        "title": "11.3.6 分离链接法",
        "meta": "03:31",
        "kind": "视频"
      },
      {
        "id": "135",
        "label": "135",
        "title": "11.4 散列表的性能分析",
        "meta": "10:27",
        "kind": "视频"
      },
      {
        "id": "136",
        "label": "136",
        "title": "11.5 文件中单词词频统计",
        "meta": "06:02",
        "kind": "视频"
      },
      {
        "id": "137",
        "label": "137",
        "title": "小白-PM.1题意理解与解法分析",
        "meta": "11:20",
        "kind": "视频"
      },
      {
        "id": "138",
        "label": "138",
        "title": "小白-PM.2 程序框架搭建",
        "meta": "04:09",
        "kind": "视频"
      },
      {
        "id": "139",
        "label": "139",
        "title": "小白-PM.3 输出狂人",
        "meta": "03:22",
        "kind": "视频"
      },
      {
        "id": "140",
        "label": "140",
        "title": "小白-PM-4 模块的引用与裁剪",
        "meta": "05:13",
        "kind": "视频"
      },
      {
        "id": "141",
        "label": "141",
        "title": "习题-IOM.1 插入排序的判断",
        "meta": "03:30",
        "kind": "视频"
      },
      {
        "id": "142",
        "label": "142",
        "title": "习题-IOM.2 归并段的判断",
        "meta": "08:23",
        "kind": "视频"
      },
      {
        "id": "143",
        "label": "143",
        "title": "习题-SWS.1 环的分类",
        "meta": "05:30",
        "kind": "视频"
      },
      {
        "id": "144",
        "label": "144",
        "title": "习题-SWS.2 算法示例",
        "meta": "05:38",
        "kind": "视频"
      },
      {
        "id": "145",
        "label": "145",
        "title": "习题-HHV 算法思路概述",
        "meta": "07:17",
        "kind": "视频"
      }
    ],
    "links": [
      {
        "label": "中国大学 MOOC",
        "href": "https://www.icourse163.org/course/ZJU-93001"
      },
      {
        "label": "PTA 起步自测",
        "href": "https://pintia.cn/problem-sets/17/problems"
      }
    ]
  },
  {
    "id": "cs231n",
    "name": "CS231n · 深度学习与计算机视觉",
    "category": "人工智能",
    "description": "Stanford · 2026 春季 · 日期按原课表列出。课程录像入口为 Stanford Canvas。",
    "items": [
      {
        "id": "L1",
        "label": "讲课 1",
        "title": "计算机视觉与课程导论",
        "meta": "03/31",
        "kind": "讲课",
        "group": "3 月",
        "link": {
          "label": "讲义",
          "href": "https://cs231n.stanford.edu/slides/2026/lecture_1_part_1.pdf"
        }
      },
      {
        "id": "L2",
        "label": "讲课 2",
        "title": "图像分类与线性分类器",
        "meta": "04/02",
        "kind": "讲课",
        "group": "4 月",
        "link": {
          "label": "讲义",
          "href": "https://cs231n.stanford.edu/slides/2026/lecture_2.pdf"
        }
      },
      {
        "id": "R1",
        "label": "复习与讨论 1",
        "title": "Python 与 NumPy 复习",
        "meta": "04/03",
        "kind": "复习与讨论",
        "group": "4 月"
      },
      {
        "id": "L3",
        "label": "讲课 3",
        "title": "正则化与优化方法",
        "meta": "04/07",
        "kind": "讲课",
        "group": "4 月"
      },
      {
        "id": "L4",
        "label": "讲课 4",
        "title": "神经网络与反向传播",
        "meta": "04/09",
        "kind": "讲课",
        "group": "4 月"
      },
      {
        "id": "R2",
        "label": "复习与讨论 2",
        "title": "反向传播复习",
        "meta": "04/10",
        "kind": "复习与讨论",
        "group": "4 月"
      },
      {
        "id": "L5",
        "label": "讲课 5",
        "title": "卷积神经网络与图像分类",
        "meta": "04/14",
        "kind": "讲课",
        "group": "4 月"
      },
      {
        "id": "L6",
        "label": "讲课 6",
        "title": "CNN 架构、批量归一化与迁移学习",
        "meta": "04/16",
        "kind": "讲课",
        "group": "4 月"
      },
      {
        "id": "A1",
        "label": "作业 1",
        "title": "作业 1 · 图像分类与全连接网络",
        "meta": "04/16 · 原截止",
        "kind": "作业",
        "group": "4 月",
        "link": {
          "label": "官方资料",
          "href": "https://cs231n.stanford.edu/assignments.html"
        }
      },
      {
        "id": "R3",
        "label": "复习与讨论 3",
        "title": "期末项目说明",
        "meta": "04/17",
        "kind": "复习与讨论",
        "group": "4 月"
      },
      {
        "id": "L7",
        "label": "讲课 7",
        "title": "循环神经网络与图像描述",
        "meta": "04/21",
        "kind": "讲课",
        "group": "4 月"
      },
      {
        "id": "L8",
        "label": "讲课 8",
        "title": "注意力机制与 Transformer",
        "meta": "04/23",
        "kind": "讲课",
        "group": "4 月"
      },
      {
        "id": "P1",
        "label": "项目 1",
        "title": "项目提案",
        "meta": "04/23 · 原截止",
        "kind": "项目",
        "group": "4 月",
        "link": {
          "label": "官方资料",
          "href": "https://cs231n.stanford.edu/project.html"
        }
      },
      {
        "id": "R4",
        "label": "复习与讨论 4",
        "title": "PyTorch 复习",
        "meta": "04/24",
        "kind": "复习与讨论",
        "group": "4 月"
      },
      {
        "id": "L9",
        "label": "讲课 9",
        "title": "目标检测、图像分割与模型可视化",
        "meta": "04/28",
        "kind": "讲课",
        "group": "4 月"
      },
      {
        "id": "L10",
        "label": "讲课 10",
        "title": "视频理解",
        "meta": "04/30",
        "kind": "讲课",
        "group": "4 月"
      },
      {
        "id": "R5",
        "label": "复习与讨论 5",
        "title": "RNN 与 Transformer 讨论",
        "meta": "05/01",
        "kind": "复习与讨论",
        "group": "5 月"
      },
      {
        "id": "L11",
        "label": "讲课 11",
        "title": "大规模分布式训练",
        "meta": "05/05",
        "kind": "讲课",
        "group": "5 月"
      },
      {
        "id": "L12",
        "label": "讲课 12",
        "title": "自监督学习",
        "meta": "05/07",
        "kind": "讲课",
        "group": "5 月"
      },
      {
        "id": "R6",
        "label": "复习与讨论 6",
        "title": "期中复习",
        "meta": "05/08",
        "kind": "复习与讨论",
        "group": "5 月"
      },
      {
        "id": "A2",
        "label": "作业 2",
        "title": "作业 2 · CNN、网络可视化与图像描述",
        "meta": "05/08 · 原截止",
        "kind": "作业",
        "group": "5 月",
        "link": {
          "label": "官方资料",
          "href": "https://cs231n.stanford.edu/assignments.html"
        }
      },
      {
        "id": "E1",
        "label": "考试 1",
        "title": "期中考试",
        "meta": "05/12",
        "kind": "考试",
        "group": "5 月"
      },
      {
        "id": "L13",
        "label": "讲课 13",
        "title": "生成模型（一）· VAE、GAN 与自回归",
        "meta": "05/14",
        "kind": "讲课",
        "group": "5 月"
      },
      {
        "id": "P2",
        "label": "项目 2",
        "title": "项目进度检查 1",
        "meta": "05/15 · 原截止",
        "kind": "项目",
        "group": "5 月",
        "link": {
          "label": "官方资料",
          "href": "https://cs231n.stanford.edu/project.html"
        }
      },
      {
        "id": "L14",
        "label": "讲课 14",
        "title": "生成模型（二）· 扩散模型",
        "meta": "05/19",
        "kind": "讲课",
        "group": "5 月"
      },
      {
        "id": "L15",
        "label": "讲课 15",
        "title": "三维视觉",
        "meta": "05/21",
        "kind": "讲课",
        "group": "5 月"
      },
      {
        "id": "P3",
        "label": "项目 3",
        "title": "项目进度检查 2",
        "meta": "05/22 · 原截止",
        "kind": "项目",
        "group": "5 月",
        "link": {
          "label": "官方资料",
          "href": "https://cs231n.stanford.edu/project.html"
        }
      },
      {
        "id": "L16",
        "label": "讲课 16",
        "title": "视觉与语言",
        "meta": "05/26",
        "kind": "讲课",
        "group": "5 月"
      },
      {
        "id": "L17",
        "label": "讲课 17",
        "title": "世界建模",
        "meta": "05/28",
        "kind": "讲课",
        "group": "5 月"
      },
      {
        "id": "A3",
        "label": "作业 3",
        "title": "作业 3 · 图像描述、自监督学习、扩散模型与 CLIP/DINO",
        "meta": "05/28 · 原截止",
        "kind": "作业",
        "group": "5 月",
        "link": {
          "label": "官方资料",
          "href": "https://cs231n.stanford.edu/assignments.html"
        }
      },
      {
        "id": "P4",
        "label": "项目 4",
        "title": "项目进度检查 3",
        "meta": "05/29 · 原截止",
        "kind": "项目",
        "group": "5 月",
        "link": {
          "label": "官方资料",
          "href": "https://cs231n.stanford.edu/project.html"
        }
      },
      {
        "id": "L18",
        "label": "讲课 18",
        "title": "以人为中心的人工智能",
        "meta": "06/02",
        "kind": "讲课",
        "group": "6 月"
      },
      {
        "id": "P5",
        "label": "项目 5",
        "title": "期末项目报告",
        "meta": "06/05 · 原截止",
        "kind": "项目",
        "group": "6 月",
        "link": {
          "label": "官方资料",
          "href": "https://cs231n.stanford.edu/project.html"
        }
      },
      {
        "id": "P6",
        "label": "项目 6",
        "title": "期末项目海报展示",
        "meta": "06/10",
        "kind": "项目",
        "group": "6 月",
        "link": {
          "label": "官方资料",
          "href": "https://cs231n.stanford.edu/project.html"
        }
      }
    ],
    "links": [
      {
        "label": "官方课表",
        "href": "https://cs231n.stanford.edu/schedule.html"
      },
      {
        "label": "课程主页",
        "href": "https://cs231n.stanford.edu/2026/index.html"
      },
      {
        "label": "公开笔记",
        "href": "https://cs231n.github.io/"
      },
      {
        "label": "官方作业",
        "href": "https://cs231n.stanford.edu/assignments.html"
      }
    ]
  },
  {
    "id": "cs61a",
    "name": "CS61A · 计算机程序的构造与解释",
    "category": "计算机基础",
    "description": "UC Berkeley · 2026 秋季 · 日期按原课表列出。公开讲解视频随官方课表提供。",
    "items": [
      {
        "id": "L1",
        "label": "讲课 1",
        "title": "课程导论",
        "meta": "08/26",
        "kind": "讲课",
        "group": "第 1 周",
        "link": {
          "label": "讲义",
          "href": "https://cs61a.org/fa26/lectures/01-welcome/"
        }
      },
      {
        "id": "D0",
        "label": "讨论 0",
        "title": "课程入门",
        "meta": "08/26",
        "kind": "讨论",
        "group": "第 1 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/discussions/disc00/"
        }
      },
      {
        "id": "B0",
        "label": "实验 0",
        "title": "环境配置与入门",
        "meta": "08/26 · 原截止 09/02",
        "kind": "实验",
        "group": "第 1 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/labs/lab00/"
        }
      },
      {
        "id": "L2",
        "label": "讲课 2",
        "title": "函数",
        "meta": "08/28",
        "kind": "讲课",
        "group": "第 1 周"
      },
      {
        "id": "H1",
        "label": "作业 1",
        "title": "函数",
        "meta": "08/28 · 原截止 09/03",
        "kind": "作业",
        "group": "第 1 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/hw/hw01/"
        }
      },
      {
        "id": "L3",
        "label": "讲课 3",
        "title": "控制流",
        "meta": "08/31",
        "kind": "讲课",
        "group": "第 2 周"
      },
      {
        "id": "B1",
        "label": "实验 1",
        "title": "函数与控制流",
        "meta": "08/31 · 原截止 09/02",
        "kind": "实验",
        "group": "第 2 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/labs/lab01/"
        }
      },
      {
        "id": "L4",
        "label": "讲课 4",
        "title": "高阶函数",
        "meta": "09/02",
        "kind": "讲课",
        "group": "第 2 周"
      },
      {
        "id": "D1",
        "label": "讨论 1",
        "title": "控制流与环境图",
        "meta": "09/02",
        "kind": "讨论",
        "group": "第 2 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/discussions/disc01/"
        }
      },
      {
        "id": "L5",
        "label": "讲课 5",
        "title": "执行环境",
        "meta": "09/04",
        "kind": "讲课",
        "group": "第 2 周"
      },
      {
        "id": "H2",
        "label": "作业 2",
        "title": "高阶函数",
        "meta": "09/04 · 原截止 09/10",
        "kind": "作业",
        "group": "第 2 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/hw/hw02/"
        }
      },
      {
        "id": "P1",
        "label": "项目 1",
        "title": "Hog 骰子游戏",
        "meta": "09/04 · 原截止 09/17 · 检查点 09/10",
        "kind": "项目",
        "group": "第 2 周",
        "link": {
          "label": "项目资料",
          "href": "https://cs61a.org/fa26/projects/hog/"
        }
      },
      {
        "id": "X1",
        "label": "假期",
        "title": "劳动节假期",
        "meta": "09/07",
        "kind": "假期",
        "group": "第 3 周",
        "track": false
      },
      {
        "id": "Q1",
        "label": "小测 1",
        "title": "函数",
        "meta": "09/08",
        "kind": "小测",
        "group": "第 3 周"
      },
      {
        "id": "B2",
        "label": "实验 2",
        "title": "高阶函数",
        "meta": "09/08 · 原截止 09/09",
        "kind": "实验",
        "group": "第 3 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/labs/lab02/"
        }
      },
      {
        "id": "L6",
        "label": "讲课 6",
        "title": "抽象",
        "meta": "09/09",
        "kind": "讲课",
        "group": "第 3 周"
      },
      {
        "id": "D2",
        "label": "讨论 2",
        "title": "环境图与高阶函数",
        "meta": "09/09",
        "kind": "讨论",
        "group": "第 3 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/discussions/disc02/"
        }
      },
      {
        "id": "L7",
        "label": "讲课 7",
        "title": "函数实例",
        "meta": "09/11",
        "kind": "讲课",
        "group": "第 3 周"
      },
      {
        "id": "E1",
        "label": "考试 1",
        "title": "期中考试 1",
        "meta": "09/14",
        "kind": "考试",
        "group": "第 4 周"
      },
      {
        "id": "L8",
        "label": "讲课 8",
        "title": "期中考试 1 复习",
        "meta": "09/14",
        "kind": "讲课",
        "group": "第 4 周"
      },
      {
        "id": "L9",
        "label": "讲课 9",
        "title": "递归",
        "meta": "09/16",
        "kind": "讲课",
        "group": "第 4 周"
      },
      {
        "id": "D3",
        "label": "讨论 3",
        "title": "递归",
        "meta": "09/16",
        "kind": "讨论",
        "group": "第 4 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/discussions/disc03/"
        }
      },
      {
        "id": "L10",
        "label": "讲课 10",
        "title": "树形递归",
        "meta": "09/18",
        "kind": "讲课",
        "group": "第 4 周"
      },
      {
        "id": "H3",
        "label": "作业 3",
        "title": "递归",
        "meta": "09/18 · 原截止 09/24",
        "kind": "作业",
        "group": "第 4 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/hw/hw03/"
        }
      },
      {
        "id": "L11",
        "label": "讲课 11",
        "title": "序列",
        "meta": "09/21",
        "kind": "讲课",
        "group": "第 5 周"
      },
      {
        "id": "Q2",
        "label": "小测 2",
        "title": "高阶函数",
        "meta": "09/21",
        "kind": "小测",
        "group": "第 5 周"
      },
      {
        "id": "B3",
        "label": "实验 3",
        "title": "列表",
        "meta": "09/21 · 原截止 09/23",
        "kind": "实验",
        "group": "第 5 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/labs/lab03/"
        }
      },
      {
        "id": "P2",
        "label": "项目 2",
        "title": "Cats 打字练习系统",
        "meta": "09/21 · 原截止 10/02 · 检查点 09/28",
        "kind": "项目",
        "group": "第 5 周",
        "link": {
          "label": "项目资料",
          "href": "https://cs61a.org/fa26/projects/cats/"
        }
      },
      {
        "id": "L12",
        "label": "讲课 12",
        "title": "容器",
        "meta": "09/23",
        "kind": "讲课",
        "group": "第 5 周"
      },
      {
        "id": "D4",
        "label": "讨论 4",
        "title": "树形递归",
        "meta": "09/23",
        "kind": "讨论",
        "group": "第 5 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/discussions/disc04/"
        }
      },
      {
        "id": "L13",
        "label": "讲课 13",
        "title": "对象",
        "meta": "09/25",
        "kind": "讲课",
        "group": "第 5 周"
      },
      {
        "id": "L14",
        "label": "讲课 14",
        "title": "链表",
        "meta": "09/28",
        "kind": "讲课",
        "group": "第 6 周"
      },
      {
        "id": "Q3",
        "label": "小测 3",
        "title": "递归",
        "meta": "09/28",
        "kind": "小测",
        "group": "第 6 周"
      },
      {
        "id": "B4",
        "label": "实验 4",
        "title": "链表",
        "meta": "09/28 · 原截止 09/30",
        "kind": "实验",
        "group": "第 6 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/labs/lab04/"
        }
      },
      {
        "id": "C1",
        "label": "竞赛 1",
        "title": "Hog 策略竞赛（选做）",
        "meta": "09/28 · 原截止 10/12",
        "kind": "竞赛",
        "group": "第 6 周",
        "track": false
      },
      {
        "id": "L15",
        "label": "讲课 15",
        "title": "树",
        "meta": "09/30",
        "kind": "讲课",
        "group": "第 6 周"
      },
      {
        "id": "D5",
        "label": "讨论 5",
        "title": "树",
        "meta": "09/30",
        "kind": "讨论",
        "group": "第 6 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/discussions/disc05/"
        }
      },
      {
        "id": "L16",
        "label": "讲课 16",
        "title": "期中考试 2 复习",
        "meta": "10/02",
        "kind": "讲课",
        "group": "第 6 周"
      },
      {
        "id": "H4",
        "label": "作业 4",
        "title": "递归数据",
        "meta": "10/02 · 原截止 10/08",
        "kind": "作业",
        "group": "第 6 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/hw/hw04/"
        }
      },
      {
        "id": "E2",
        "label": "考试 2",
        "title": "期中考试 2",
        "meta": "10/05–10/09",
        "kind": "考试",
        "group": "第 7 周"
      },
      {
        "id": "L17",
        "label": "讲课 17",
        "title": "问题求解",
        "meta": "10/05",
        "kind": "讲课",
        "group": "第 7 周"
      },
      {
        "id": "B5",
        "label": "实验 5",
        "title": "树",
        "meta": "10/05 · 原截止 10/07",
        "kind": "实验",
        "group": "第 7 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/labs/lab05/"
        }
      },
      {
        "id": "L18",
        "label": "讲课 18",
        "title": "可变对象",
        "meta": "10/07",
        "kind": "讲课",
        "group": "第 7 周"
      },
      {
        "id": "L19",
        "label": "讲课 19",
        "title": "类",
        "meta": "10/09",
        "kind": "讲课",
        "group": "第 7 周"
      },
      {
        "id": "H5",
        "label": "作业 5",
        "title": "列表修改",
        "meta": "10/09 · 原截止 10/15",
        "kind": "作业",
        "group": "第 7 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/hw/hw05/"
        }
      },
      {
        "id": "L20",
        "label": "讲课 20",
        "title": "属性",
        "meta": "10/12",
        "kind": "讲课",
        "group": "第 8 周"
      },
      {
        "id": "Q4",
        "label": "小测 4",
        "title": "递归数据",
        "meta": "10/12",
        "kind": "小测",
        "group": "第 8 周"
      },
      {
        "id": "B6",
        "label": "实验 6",
        "title": "可变对象",
        "meta": "10/12 · 原截止 10/14",
        "kind": "实验",
        "group": "第 8 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/labs/lab06/"
        }
      },
      {
        "id": "P3",
        "label": "项目 3",
        "title": "Ants 塔防游戏",
        "meta": "10/12 · 原截止 10/23 · 检查点 10/16、10/21",
        "kind": "项目",
        "group": "第 8 周",
        "link": {
          "label": "项目资料",
          "href": "https://cs61a.org/fa26/projects/ants/"
        }
      },
      {
        "id": "L21",
        "label": "讲课 21",
        "title": "继承",
        "meta": "10/14",
        "kind": "讲课",
        "group": "第 8 周"
      },
      {
        "id": "D6",
        "label": "讨论 6",
        "title": "类",
        "meta": "10/14",
        "kind": "讨论",
        "group": "第 8 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/discussions/disc06/"
        }
      },
      {
        "id": "L22",
        "label": "讲课 22",
        "title": "迭代器",
        "meta": "10/16",
        "kind": "讲课",
        "group": "第 8 周"
      },
      {
        "id": "H6",
        "label": "作业 6",
        "title": "类",
        "meta": "10/16 · 原截止 10/22",
        "kind": "作业",
        "group": "第 8 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/hw/hw06/"
        }
      },
      {
        "id": "L23",
        "label": "讲课 23",
        "title": "生成器",
        "meta": "10/19",
        "kind": "讲课",
        "group": "第 9 周"
      },
      {
        "id": "Q5",
        "label": "小测 5",
        "title": "可变对象",
        "meta": "10/19",
        "kind": "小测",
        "group": "第 9 周"
      },
      {
        "id": "B7",
        "label": "实验 7",
        "title": "迭代器与生成器",
        "meta": "10/19 · 原截止 10/21",
        "kind": "实验",
        "group": "第 9 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/labs/lab07/"
        }
      },
      {
        "id": "L24",
        "label": "讲课 24",
        "title": "效率分析",
        "meta": "10/21",
        "kind": "讲课",
        "group": "第 9 周"
      },
      {
        "id": "D7",
        "label": "讨论 7",
        "title": "生成器",
        "meta": "10/21",
        "kind": "讨论",
        "group": "第 9 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/discussions/disc07/"
        }
      },
      {
        "id": "L25",
        "label": "讲课 25",
        "title": "对象实例",
        "meta": "10/23",
        "kind": "讲课",
        "group": "第 9 周"
      },
      {
        "id": "L26",
        "label": "讲课 26",
        "title": "期中考试 3 复习",
        "meta": "10/26",
        "kind": "讲课",
        "group": "第 10 周"
      },
      {
        "id": "E3",
        "label": "考试 3",
        "title": "期中考试 3",
        "meta": "10/27",
        "kind": "考试",
        "group": "第 10 周"
      },
      {
        "id": "L27",
        "label": "讲课 27",
        "title": "函数式编程",
        "meta": "10/28",
        "kind": "讲课",
        "group": "第 10 周"
      },
      {
        "id": "D8",
        "label": "讨论 8",
        "title": "Gleam",
        "meta": "10/28",
        "kind": "讨论",
        "group": "第 10 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/discussions/disc08/"
        }
      },
      {
        "id": "L28",
        "label": "讲课 28",
        "title": "代数数据类型",
        "meta": "10/30",
        "kind": "讲课",
        "group": "第 10 周"
      },
      {
        "id": "H7",
        "label": "作业 7",
        "title": "Gleam",
        "meta": "10/30 · 原截止 11/05",
        "kind": "作业",
        "group": "第 10 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/hw/hw07/"
        }
      },
      {
        "id": "L29",
        "label": "讲课 29",
        "title": "不可变数据",
        "meta": "11/02",
        "kind": "讲课",
        "group": "第 11 周"
      },
      {
        "id": "B8",
        "label": "实验 8",
        "title": "Gleam 列表",
        "meta": "11/02 · 原截止 11/04",
        "kind": "实验",
        "group": "第 11 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/labs/lab08/"
        }
      },
      {
        "id": "L30",
        "label": "讲课 30",
        "title": "解释器",
        "meta": "11/04",
        "kind": "讲课",
        "group": "第 11 周"
      },
      {
        "id": "D9",
        "label": "讨论 9",
        "title": "Gleam 数据",
        "meta": "11/04",
        "kind": "讨论",
        "group": "第 11 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/discussions/disc09/"
        }
      },
      {
        "id": "E4",
        "label": "考试 4",
        "title": "期中考试 2 补考",
        "meta": "11/05–11/06",
        "kind": "考试",
        "group": "第 11 周",
        "track": false
      },
      {
        "id": "L31",
        "label": "讲课 31",
        "title": "视频自学（当天无现场讲课）",
        "meta": "11/06",
        "kind": "讲课",
        "group": "第 11 周"
      },
      {
        "id": "H8",
        "label": "作业 8",
        "title": "解释器",
        "meta": "11/06 · 原截止 11/12",
        "kind": "作业",
        "group": "第 11 周",
        "link": {
          "label": "练习资料",
          "href": "https://cs61a.org/fa26/hw/hw08/"
        }
      },
      {
        "id": "P4",
        "label": "项目 4",
        "title": "Animator 动画项目（含 TypeScript 选项）",
        "meta": "11/06 · 原截止 12/02 · 检查点 11/19、11/24",
        "kind": "项目",
        "group": "第 11 周",
        "link": {
          "label": "项目资料",
          "href": "https://cs61a.org/fa26/projects/animator/"
        }
      },
      {
        "id": "L32",
        "label": "讲课 32",
        "title": "浏览器",
        "meta": "11/09",
        "kind": "讲课",
        "group": "第 12 周"
      },
      {
        "id": "Q6",
        "label": "小测 6",
        "title": "Gleam",
        "meta": "11/09",
        "kind": "小测",
        "group": "第 12 周"
      },
      {
        "id": "B9",
        "label": "实验 9",
        "title": "编程智能体",
        "meta": "11/09 · 原截止 11/11",
        "kind": "实验",
        "group": "第 12 周"
      },
      {
        "id": "X2",
        "label": "假期",
        "title": "退伍军人节假期",
        "meta": "11/11",
        "kind": "假期",
        "group": "第 12 周",
        "track": false
      },
      {
        "id": "D10",
        "label": "讨论 10",
        "title": "解释器",
        "meta": "11/11",
        "kind": "讨论",
        "group": "第 12 周"
      },
      {
        "id": "L33",
        "label": "讲课 33",
        "title": "应用程序",
        "meta": "11/13",
        "kind": "讲课",
        "group": "第 12 周"
      },
      {
        "id": "L34",
        "label": "讲课 34",
        "title": "数据表",
        "meta": "11/16",
        "kind": "讲课",
        "group": "第 13 周"
      },
      {
        "id": "Q7",
        "label": "小测 7",
        "title": "Gleam 数据",
        "meta": "11/16",
        "kind": "小测",
        "group": "第 13 周"
      },
      {
        "id": "B10",
        "label": "实验 10",
        "title": "SQL",
        "meta": "11/16 · 原截止 11/18",
        "kind": "实验",
        "group": "第 13 周"
      },
      {
        "id": "L35",
        "label": "讲课 35",
        "title": "SQL",
        "meta": "11/18",
        "kind": "讲课",
        "group": "第 13 周"
      },
      {
        "id": "D11",
        "label": "讨论 11",
        "title": "SQL",
        "meta": "11/18",
        "kind": "讨论",
        "group": "第 13 周"
      },
      {
        "id": "L36",
        "label": "讲课 36",
        "title": "聚合",
        "meta": "11/20",
        "kind": "讲课",
        "group": "第 13 周"
      },
      {
        "id": "H9",
        "label": "作业 9",
        "title": "SQL",
        "meta": "11/20 · 原截止 11/29",
        "kind": "作业",
        "group": "第 13 周"
      },
      {
        "id": "L37",
        "label": "讲课 37",
        "title": "软件测试",
        "meta": "11/23",
        "kind": "讲课",
        "group": "第 14 周"
      },
      {
        "id": "X3",
        "label": "假期",
        "title": "感恩节假期",
        "meta": "11/25",
        "kind": "假期",
        "group": "第 14 周",
        "track": false
      },
      {
        "id": "X4",
        "label": "假期",
        "title": "感恩节假期",
        "meta": "11/27",
        "kind": "假期",
        "group": "第 14 周",
        "track": false
      },
      {
        "id": "L38",
        "label": "讲课 38",
        "title": "软件执行追踪",
        "meta": "11/30",
        "kind": "讲课",
        "group": "第 15 周"
      },
      {
        "id": "Q8",
        "label": "小测 8",
        "title": "SQL",
        "meta": "11/30",
        "kind": "小测",
        "group": "第 15 周"
      },
      {
        "id": "B11",
        "label": "实验 11",
        "title": "测试",
        "meta": "11/30 · 原截止 12/02",
        "kind": "实验",
        "group": "第 15 周"
      },
      {
        "id": "L39",
        "label": "讲课 39",
        "title": "伦理",
        "meta": "12/02",
        "kind": "讲课",
        "group": "第 15 周"
      },
      {
        "id": "D12",
        "label": "讨论 12",
        "title": "项目 4 展示",
        "meta": "12/02",
        "kind": "讨论",
        "group": "第 15 周"
      },
      {
        "id": "L40",
        "label": "讲课 40",
        "title": "课程总结",
        "meta": "12/04",
        "kind": "讲课",
        "group": "第 15 周"
      },
      {
        "id": "H10",
        "label": "作业 10",
        "title": "结课作业",
        "meta": "12/04 · 原截止 12/13",
        "kind": "作业",
        "group": "第 15 周"
      },
      {
        "id": "E5",
        "label": "期末考试",
        "title": "期末考试",
        "meta": "12/18 · 11:30–14:30（当地）",
        "kind": "考试",
        "group": "期末考试周",
        "link": {
          "label": "课程大纲",
          "href": "https://cs61a.org/fa26/syllabus/#exams"
        }
      }
    ],
    "links": [
      {
        "label": "官方课表",
        "href": "https://cs61a.org/fa26/"
      },
      {
        "label": "教材 Composing Programs",
        "href": "https://www.composingprograms.com/"
      },
      {
        "label": "课程讲解视频",
        "href": "https://www.youtube.com/playlist?list=PL6BsET-8jgYULSxiV2garZ0FxbnXR08MP"
      }
    ]
  },
  {
    id: "ros2",
    name: "ROS 2",
    category: "机器人",
    description: "共 171 节，按课次编号记录。",
    items: Array.from({ length: 171 }, (_, index) => ({
      id: String(index + 1),
      title: `第 ${index + 1} 节`
    })),
    links: []
  },
  {
    id: "linux",
    name: "Linux 命令行入门",
    category: "计算机基础",
    description: "Ubuntu 官方入门教程。按原文目录学习，每项都可跳转到对应章节。",
    items: [
      ["opening-a-terminal", "打开终端与理解路径"],
      ["creating-folders-and-files", "创建目录与文件"],
      ["moving-and-manipulating-files", "移动、复制与删除文件"],
      ["a-bit-of-plumbing", "使用管道组合命令"],
      ["the-command-line-and-the-superuser", "超级用户、sudo 与软件安装"],
      ["hidden-files", "查看与操作隐藏文件"],
      ["cleaning-up", "清理练习文件并退出终端"],
      ["further-reading", "延伸阅读"]
    ].map(([id, title], index) => ({
      id,
      label: "第 " + (index + 1) + " 章",
      title,
      link: { label: "Ubuntu 原文", href: "https://ubuntu.com/desktop/docs/en/latest/tutorial/the-linux-command-line-for-beginners/#" + id }
    })),
    links: [{ label: "Ubuntu 官方教程", href: "https://ubuntu.com/desktop/docs/en/latest/tutorial/the-linux-command-line-for-beginners/" }]
  }
];
