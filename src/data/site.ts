export type Locale = 'en' | 'zh';
export type View =
  'home' | 'projects' | 'notes' | 'about' | 'skillfit' | 'device-agent-arena';

export const routes: Record<View, string> = {
  home: '',
  projects: 'projects/',
  notes: 'notes/',
  about: 'about/',
  skillfit: 'projects/skillfit/',
  'device-agent-arena': 'projects/device-agent-arena/',
};
export const pathFor = (view: View, locale: Locale) =>
  `/${locale === 'zh' ? 'zh/' : ''}${routes[view]}`;

export const profile = {
  github: 'https://github.com/remote-controlled-man',
  email: 'huangshuaidi666@gmail.com',
  linkedin: 'https://www.linkedin.com/in/steven-sidi-huang/',
};

export const copy = {
  en: {
    home: 'Home',
    work: 'Work',
    notes: 'Notes',
    about: 'About',
    skip: 'Skip to content',
    language: '中文',
    languageLabel: 'Read this page in Chinese',
    theme: 'Switch to dark theme',
    heroLabel: 'COMPUTER SCIENCE · HONG KONG',
    heroTitle: 'Building & evaluating AI agents.',
    intro:
      'I’m a CS master’s student at the University of Hong Kong. I build agent tools, run evaluations, and write down what I learn.',
    interests: 'Harnesses / Evaluation / Learning from feedback',
    explore: 'Explore my work',
    aboutLink: 'A little about me',
    desk: 'THE WORKBENCH',
    deskCaption: 'A familiar face from my GitHub.',
    artAlt: 'Pixel-art character at a desk with books, a lamp, and a computer',
    selected: 'Selected work',
    selectedIntro: 'Tools and experiments I’m working on.',
    allWork: 'All work',
    openSource: 'Small fixes, shared upstream.',
    openSourceIntro: 'Selected contributions to tools I use and care about.',
    pr: 'Merged PR',
    fullHistory: 'Contribution history',
    notesHeading: 'From the notebook',
    notesIntro: 'Reading, references, and things worth keeping.',
    allNotes: 'All notes',
    contact: 'Get in touch.',
    contactIntro: 'For a question about my work, or to exchange ideas.',
    projectsTitle: 'Work, with the details.',
    projectsIntro:
      'Two projects around how agents run, how we evaluate them, and what their results actually tell us.',
    notesTitle: 'An open notebook.',
    notesPageIntro:
      'A small collection of public reading notes and references. The original repositories keep the complete material.',
    aboutTitle: 'Hi, I’m Steven.',
    aboutIntro:
      'A computer science master’s student at the University of Hong Kong, interested in the systems around AI agents.',
    aboutInterestTitle: 'What I’m exploring',
    aboutInterest:
      'How should an agent interact with tools? What belongs in its harness? How can evaluations distinguish a useful improvement from a lucky run? These are the questions behind my current projects.',
    aboutApproachTitle: 'How I work',
    aboutApproach:
      'I like turning a concrete problem into a small tool or experiment, keeping the evidence and limitations close to the result. I also contribute fixes and features to open-source projects I find useful.',
    aboutOutsideTitle: 'Around here',
    aboutOutside:
      'This site brings together my projects, selected upstream contributions, and public notes. The pixel-art desk is a small link back to my GitHub profile.',
    education: 'EDUCATION',
    degree: 'M.Sc. in Computer Science',
    university: 'The University of Hong Kong',
    focus: 'CURRENT INTERESTS',
    focusItems: [
      'Agent harnesses & tool use',
      'Evaluation & reproducibility',
      'Learning from feedback',
    ],
    back: 'Back to work',
    overview: 'The problem',
    approach: 'The approach',
    evidence: 'Evidence & scope',
    resources: 'Explore the project',
    code: 'Source code',
    readCase: 'Read the case study',
    noteExternal: 'Read the original',
    footer: 'A personal collection of work and notes.',
    notFound: 'This page wandered off.',
    notFoundBody:
      'The address may have changed. You can head back to the workbench.',
    returnHome: 'Back to home',
  },
  zh: {
    home: '首页',
    work: '项目',
    notes: '笔记',
    about: '关于',
    skip: '跳到正文',
    language: 'EN',
    languageLabel: 'Read this page in English',
    theme: '切换到深色主题',
    heroLabel: '计算机科学 · 香港',
    heroTitle: '构建 Agent，也认真评测它。',
    intro:
      '我在香港大学读计算机科学硕士。平时做一些 Agent 工具和评测实验，也把过程中的发现记下来。',
    interests: 'Harness / 评测 / 从反馈中改进',
    explore: '看看我的项目',
    aboutLink: '更多关于我',
    desk: '我的工作台',
    deskCaption: 'GitHub 上的老面孔，在这里留个位置。',
    artAlt: '像素风人物坐在书桌前，旁边有书、台灯和电脑',
    selected: '正在做的事',
    selectedIntro: '围绕 Agent 的工具与实验。',
    allWork: '全部项目',
    openSource: '把改动带回上游。',
    openSourceIntro: '给自己使用和关注的开源项目做的一些贡献。',
    pr: '已合并 PR',
    fullHistory: '查看贡献记录',
    notesHeading: '翻翻笔记本',
    notesIntro: '阅读、参考资料，以及想留下的发现。',
    allNotes: '全部笔记',
    contact: '保持联系。',
    contactIntro: '可以聊聊项目里的问题，也欢迎交换想法。',
    projectsTitle: '项目，以及背后的细节。',
    projectsIntro:
      '两个关于 Agent 如何执行、如何被评测，以及结果能说明什么的项目。',
    notesTitle: '一本公开的笔记。',
    notesPageIntro:
      '已有的公开阅读笔记和参考资料。完整内容保留在原始仓库与站点中。',
    aboutTitle: '你好，我是 Steven。',
    aboutIntro: '我在香港大学读计算机科学硕士，关注 AI Agent 背后的系统设计。',
    aboutInterestTitle: '在探索的问题',
    aboutInterest:
      'Agent 应该怎样使用工具？哪些能力适合放进 Harness？怎样通过评测判断一次改动确实有用，而不是恰好跑得更好？这些问题贯穿了我目前做的项目。',
    aboutApproachTitle: '做事的方式',
    aboutApproach:
      '我喜欢从具体问题出发，做成一个小工具或实验，把证据和局限一起留下来。也会给自己使用和关注的开源项目修问题、加功能。',
    aboutOutsideTitle: '关于这里',
    aboutOutside:
      '这里收集我的项目、部分上游贡献和公开笔记。像素风书桌来自我的 GitHub 主页，在新网站里保留一点熟悉的感觉。',
    education: '教育背景',
    degree: '计算机科学硕士',
    university: '香港大学',
    focus: '目前关注',
    focusItems: ['Agent Harness 与工具使用', '评测与可复现性', '从反馈中改进'],
    back: '返回项目',
    overview: '想解决的问题',
    approach: '做法',
    evidence: '证据与边界',
    resources: '继续了解',
    code: '项目代码',
    readCase: '看看项目细节',
    noteExternal: '阅读原文',
    footer: '一些项目，一些笔记。',
    notFound: '这一页走丢了。',
    notFoundBody: '地址可能已经改变，可以先回工作台看看。',
    returnHome: '返回首页',
  },
} as const;

export const projects = [
  {
    id: 'skillfit' as const,
    number: '01',
    kind: 'TOOLING · EVALUATION',
    tags: ['TypeScript', 'CLI', 'Paired evaluation'],
    github: 'https://github.com/remote-controlled-man/skillfit',
    en: {
      title: 'skillfit',
      subtitle: 'Put agent configurations to the test.',
      summary:
        'Compare Skills, rules, and MCP setups on the same tasks. Keep quality, trigger behavior, and token cost in view.',
      problem:
        'Adding a Skill or changing an agent rule can sound useful without improving the work. Comparing configurations needs the same tasks, explicit checks, and a record of what actually happened.',
      approach:
        'skillfit compares a baseline and a treatment through paired runs. Reports keep verification results, configuration behavior, token costs, and measurement limits together. It is available as an npm CLI.',
      evidence:
        'The repository includes replayable case studies, verifier checks, and evaluation reports. Small pilots and negative results remain visible; a working measurement pipeline does not establish that a configuration is beneficial.',
      links: ['Case study', 'Measurement methodology', 'Evaluation reports'],
    },
    zh: {
      title: 'skillfit',
      subtitle: '让 Agent 配置接受检验。',
      summary:
        '在相同任务上比较 Skill、规则和 MCP 配置，同时看任务质量、触发行为与 Token 成本。',
      problem:
        '增加一个 Skill，或改一条 Agent 规则，听起来有用，并不意味着能改善任务结果。比较配置需要相同的任务、明确的检查，以及完整的过程记录。',
      approach:
        'skillfit 用配对实验比较基线与改动后的配置。报告同时保留验证结果、配置行为、Token 成本和测量边界，可通过 npm 安装使用。',
      evidence:
        '仓库包含可回放的案例、验证器检查和评测报告。小规模试验与负面结果也保留下来；测量流程能够运行，并不能证明某项配置有效。',
      links: ['复现案例', '评测方法', '评测报告'],
    },
    urls: [
      'https://github.com/remote-controlled-man/skillfit/blob/main/benches/contrib/oss-mcp-use-utf8/README.md',
      'https://github.com/remote-controlled-man/skillfit/blob/main/docs/reference/metrics.md',
      'https://github.com/remote-controlled-man/skillfit/blob/main/docs/reference/evaluation-reports.md',
    ],
  },
  {
    id: 'device-agent-arena' as const,
    number: '02',
    kind: 'HARNESS · TOOL USE',
    tags: ['Python', 'Stateful tasks', 'Reproducibility'],
    github: 'https://github.com/remote-controlled-man/device-agent-arena',
    en: {
      title: 'DeviceAgent Arena',
      subtitle: 'Evaluate the whole trajectory.',
      summary:
        'A testbed for Chinese tool-use agents, where actions change the next state. Check both the outcome and the path taken.',
      problem:
        'Choosing the right function is only part of tool use. An agent also needs to handle state changes, missing information, failures, and safe stopping conditions over a sequence of actions.',
      approach:
        'A bounded harness runs tasks in a deterministic text simulator with state transitions and fault injection. Graders inspect the final world state and the complete action trajectory. The project also explores small-model training and compound execution.',
      evidence:
        'Experiment reports and a reproduction guide document the setup and its limits. The development suite is small and shares instruction templates with training; its results describe that environment and do not establish production performance.',
      links: ['Experiment report', 'Reproduction guide', 'Architecture'],
    },
    zh: {
      title: 'DeviceAgent Arena',
      subtitle: '把整个执行过程纳入评测。',
      summary:
        '用于评测中文工具调用 Agent 的实验环境。操作会改变后续状态，评测同时检查最终结果与执行轨迹。',
      problem:
        '选对一个函数只是工具使用的一部分。Agent 还需要在连续操作中处理状态变化、信息缺失、故障，以及合理的停止条件。',
      approach:
        '通过有边界的 Harness，在确定性的文本模拟环境中运行状态转换与故障注入。评测检查最终世界状态和完整执行轨迹，也探索小模型训练与组合执行。',
      evidence:
        '实验报告和复现指南记录了环境设置与局限。开发集规模较小，并与训练任务共享指令模板；结果描述的是这个实验环境，不能直接推断生产表现。',
      links: ['实验报告', '复现指南', '系统设计'],
    },
    urls: [
      'https://github.com/remote-controlled-man/device-agent-arena/blob/main/docs/V2_7_LAYERED_EXPERIMENT_REPORT.md',
      'https://github.com/remote-controlled-man/device-agent-arena/blob/main/docs/REPRODUCING_V2_7.md',
      'https://github.com/remote-controlled-man/device-agent-arena/blob/main/docs/ARCHITECTURE_V2_7.md',
    ],
  },
];

export const contributions = [
  {
    project: 'AgentField',
    number: '#1069',
    url: 'https://github.com/Agent-Field/agentfield/pull/1069',
    en: 'Check harness providers before launching an agent.',
    zh: '在 Agent 启动前检查 Harness Provider。',
    category: 'HARNESS',
  },
  {
    project: 'MCP-Use',
    number: '#2632',
    url: 'https://github.com/mcp-use/mcp-use/pull/2632',
    en: 'Render Chinese text and emoji correctly in MCP Apps.',
    zh: '让 MCP App 正确显示中文和 Emoji。',
    category: 'TOOLING',
  },
  {
    project: 'LLM',
    number: '#1845',
    url: 'https://github.com/simonw/llm/pull/1845',
    en: 'Keep endpoint configuration valid when updating YAML lists.',
    zh: '更新端点时，保持 YAML 列表配置有效。',
    category: 'RELIABILITY',
  },
];

export const notes = [
  {
    number: '01',
    kind: 'READING NOTES',
    url: 'https://github.com/remote-controlled-man/llm-paper-wiki',
    en: {
      title: 'LLM Paper Wiki',
      summary:
        'Public paper-reading notes and references around large language models.',
    },
    zh: {
      title: 'LLM Paper Wiki',
      summary: '围绕大语言模型整理的公开论文阅读笔记与参考资料。',
    },
  },
  {
    number: '02',
    kind: 'EARLIER READING',
    url: 'https://remote-controlled-man.github.io/agent-context-memory-guide/',
    en: {
      title: 'Agent Context & Memory',
      summary:
        'Earlier reading notes on context management and memory in agent systems.',
    },
    zh: {
      title: 'Agent 上下文与记忆',
      summary: '关于 Agent 系统上下文管理和记忆机制的早期阅读笔记。',
    },
  },
];
