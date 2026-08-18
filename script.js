const translations = {
  en: {
    "nav.home":"Homepage","nav.about":"About Me","nav.research":"Research","nav.projects":"Projects","nav.publications":"Publications","nav.contact":"Contact",
    "home.eyebrow":"ACADEMIC HOMEPAGE / 01","home.name":"Zheng Li","home.role":"PhD Student","home.lead":"Researching autonomous robotic systems, nonlinear control, and intelligent motion planning for fixed-wing UAVs.","home.button":"About Me <span>↘</span>","home.contact":"Contact <span>→</span>",
    "about.label":"02 / ABOUT ME","about.title":"About Me","about.p1":"Zheng Li is currently pursuing the Doctor of Philosophy degree at School of Artificial Intelligence and Robotics, Hunan University, Changsha, China. He received his Bachelor of Engineering degree in Robotics and Intelligence Devices (RIDS) from the Maynooth International Engineering College (MIEC), Fuzhou University, Fuzhou, China, in 2024.","about.p2":"His current research interests primarily focus on fixed-wing unmanned aerial vehicle (UAV) systems, guiding vector field-based motion planning, diffusion-based robot path planning, non-harmonic robotic systems, and nonlinear system modeling and control. His research centers on advanced planning and control theories for autonomous robotic systems, aiming to enhance the autonomy, robustness, and adaptability of fixed-wing UAVs in complex dynamic environments.",
    "research.label":"03 / RESEARCH","research.title":"Research Interests","research.note":"From mathematical modeling to embodied intelligence, I study autonomous systems that are explainable, robust, and deployable.","research.r1.title":"Fixed-wing UAV Systems","research.r1.text":"Motion planning, guidance, and control for autonomous fixed-wing aerial vehicles.","research.r2.title":"Diffusion-based Robot Planning","research.r2.text":"Learning-based path planning and intelligent navigation in complex environments.","research.r3.title":"Nonlinear Systems","research.r3.text":"Modeling, stability analysis, and control of complex dynamic systems.",
    "projects.label":"04 / PROJECTS","projects.title":"Research Projects","projects.placeholder":"Project details coming soon","publications.label":"05 / PUBLICATIONS","publications.title":"Publications","publications.paper":"A Singularity-Free Vector-Field-Based Framework for Safe Distributed Motion Coordination of Multi-Robot Systems","publications.meta":"IEEE Transactions on Robotics (T-RO) · JCR Q1 · CAS Q1 · IF 10.0","publications.fixed":"Fixed-wing UAV Systems","publications.diffusion":"Diffusion-based Robot Planning","publications.nonlinear":"Nonlinear Systems","publications.placeholder":"Publication details coming soon","publications.view":"View paper ↗","contact.label":"06 / CONTACT","contact.title":"Let's Connect","contact.text":"lizheng2024@hnu.edu.cn","contact.button":"lizheng2024@hnu.edu.cn","footer.text":"Academic Homepage"
  },
  zh: {
    "nav.home":"主页","nav.about":"关于我","nav.research":"研究方向","nav.projects":"科研项目","nav.publications":"论文成果","nav.contact":"联系方式",
    "home.eyebrow":"学术个人主页 / 01","home.name":"李政","home.role":"博士生","home.lead":"专注于自主机器人系统、非线性控制，以及面向固定翼无人机的智能运动规划。","home.button":"关于我 <span>↘</span>","home.contact":"联系我 <span>→</span>",
    "about.label":"02 / 关于我","about.title":"关于我","about.p1":"李政现就读于湖南大学人工智能与机器人学院，攻读博士学位。2024年，他毕业于福州大学梅努斯国际工程学院机器人与智能器件专业，获工学学士学位。","about.p2":"目前主要研究固定翼无人机系统、基于引导矢量场的运动规划、基于扩散模型的机器人路径规划、非谐机器人系统，以及非线性系统建模与控制。研究聚焦于自主机器人系统的先进规划与控制理论，旨在提升固定翼无人机在复杂动态环境中的自主性、鲁棒性与适应性。",
    "research.label":"03 / 研究方向","research.title":"研究方向","research.note":"从数学建模到具身智能，关注可解释、稳健且能够实际部署的自主系统。","research.r1.title":"非线性系统","research.r1.text":"复杂动态系统的建模、稳定性分析与控制。","research.r2.title":"固定翼无人机系统","research.r2.text":"面向自主飞行器的运动规划、制导与控制。","research.r3.title":"基于扩散模型的机器人规划","research.r3.text":"复杂环境中的学习型路径规划与智能导航。",
    "projects.label":"04 / 科研项目","projects.title":"科研项目","projects.placeholder":"项目详情即将更新","publications.label":"05 / 论文成果","publications.title":"论文成果","publications.paper":"A Singularity-Free Vector-Field-Based Framework for Safe Distributed Motion Coordination of Multi-Robot Systems","publications.meta":"IEEE Transactions on Robotics (T-RO) · JCR Q1 · 中科院一区 · IF 10.0","publications.fixed":"固定翼无人机系统","publications.diffusion":"基于扩散模型的机器人规划","publications.nonlinear":"非线性系统","publications.placeholder":"论文详情即将更新","publications.view":"查看论文 ↗","contact.label":"06 / 联系方式","contact.title":"保持联系","contact.text":"lizheng2024@hnu.edu.cn","contact.button":"lizheng2024@hnu.edu.cn","footer.text":"学术个人主页"
  }
};

let currentLanguage = "en";
const languageButton = document.querySelector('.language-button');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

function addPublicationRows() {
  const section = document.querySelector('#publications');
  const first = section.querySelector('.publication-feature');
  [['publications.diffusion','PAPER'],['publications.nonlinear','PAPER']].forEach(([key, label]) => {
    const row = document.createElement('div');
    row.className = 'publication-feature';
    row.innerHTML = `<span class="pub-year">${label}</span><div><h3 data-i18n="${key}"></h3><p data-i18n="publications.placeholder"></p></div>`;
    section.appendChild(row);
  });
}

function orderResearchRows() {
  const list = document.querySelector('.research-list');
  const rows = Array.from(list.querySelectorAll('article'));
  [rows[1], rows[2], rows[0]].forEach((row, index) => {
    row.querySelector('.index').textContent = String(index + 1).padStart(2, '0');
    list.appendChild(row);
  });
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  const publicationMeta = document.querySelector('#publications .publication-feature p');
  if (publicationMeta) publicationMeta.textContent = translations[language]['publications.meta'];
  languageButton.textContent = language === 'en' ? '中文' : 'EN';
}

languageButton.addEventListener('click', () => applyLanguage(currentLanguage === 'en' ? 'zh' : 'en'));
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));
orderResearchRows();
applyLanguage('en');
const emailButton = document.querySelector('#contact .button');
emailButton.href = 'mailto:lizheng2024@hnu.edu.cn';
