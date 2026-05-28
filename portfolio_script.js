// Year
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------------- THEME ---------------- */
const modeBtn = document.getElementById("modeBtn");

function setTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
if(savedTheme) setTheme(savedTheme);

modeBtn.addEventListener("click", () => {
  const cur = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(cur === "light" ? "dark" : "light");
});

/* ---------------- LANGUAGE (FR/EN) ---------------- */
const langBtn = document.getElementById("langBtn");

const i18n = {
  fr: {
    meta: { title: "Portfolio — Réseaux & Télécom" },
    brand: { name: "Ainul Malik", phon: "prononciation : aï-noul" },
    nav: { about:"À propos", projects:"Projets", skills:"Compétences", languages:"Langues", contact:"Contact" },

    hero: {
      hand: "bienvenue ♡",
      subtitle: "Réseaux & Télécommunications • Recherche de stage en France",
      appleTitle: "NETWORK NOTES",
      appleLine: "Routing • Switching • Services • Troubleshooting",
      cvBtn: "Télécharger CV",
      linkedinBtn: "LinkedIn",
      chip1: "Switching",
      chip2: "Routing",
      chip3: "Troubleshooting",
      note: "Site interactif : cartes qui se soulèvent au survol, tooltips, animations au scroll, et mode FR/EN + clair/sombre."
    },

    about: {
      tag: "à propos",
      hello: "Hello",
      name: "Ainul Nafisah BINTI ABD MALIK",
      title: "Ainul Nafisah BINTI ABD MALIK",
      desc:
        "Étudiante en BUT Réseaux & Télécommunications originaire de Malaisie, je suis passionnée par les technologies réseau, la communication et la création de projets interactifs. Curieuse et créative, j’aime comprendre le fonctionnement des systèmes tout en cherchant des façons simples et humaines de les rendre accessibles. En dehors de la technique, j’apprécie la création de contenu, le design visuel et le storytelling..",
      trait1: "rigoureuse",
      trait2: "curieuse",
      trait3: "organisée",
      email: "ainulsmz06@gmail.com",
      social: "LinkedIn",
      location: "France",
      cta1: "Voir les projets",
      cta2: "Me contacter"
    },

    projects: {
      title: "Projets",
      subtitle: "Survoler = lift • Cliquer = détails",
      newSubtitle: "Projets techniques et créatifs qui reflètent à la fois mes compétences en ingénierie et en communication.",
      hint: "Cliquer pour les détails →",
      objectif: "Objectif",
      whatIdid: "Ce que j'ai fait",
      skills: "Compétences",
      context: "Contexte",
      tools: "Outils",
      transferable: "Compétences transférables",
      visitSite: "Visiter le site ↗",
      openProof: "Voir la topologie ↗",
      visitChannel: "Voir la chaîne ↗",
      open: "Ouvrir ↗",
      what: { title: "Ce que j'ai fait" },
      p1: {
        title: "Interactive Portfolio Website",
        desc: "Portfolio bilingue responsive conçu et développé en HTML, CSS et JavaScript.",
        objective: "Créer un portfolio interactif et bilingue pour présenter mon profil à des recruteurs en France.",
        b1: "Design responsive + animations scroll + flip cards",
        b2: "Mode bilingue FR/EN + thème clair/sombre",
        b3: "Déploiement GitHub Pages"
      },
      p2: {
        title: "Enterprise Network Admin",
        desc: "Design et configuration d'une infrastructure réseau segmentée avec VLANs et routage.",
        context: "Simulation d'une entreprise avec plusieurs départements et politiques d'accès différentes.",
        b1: "VLANs + trunking + routage inter-VLAN",
        b2: "NAT statique + PAT clients + DMZ services",
        b3: "ACLs + tests ping/traceroute/show commands"
      },
      p3: {
        title: "YouTube Content Creation",
        desc: "Contenu lifestyle et storytelling axé sur la régularité et l'engagement.",
        b1: "Communication claire et storytelling visuel",
        b2: "Régularité, planification, gestion de contenu",
        b3: "Montage vidéo + compréhension de l'audience",
        s1: "Créativité",
        s2: "Rigueur",
        s3: "Confiance"
      }
    },

    skills: {
      title: "Compétences",
      subtitle: "Survoler les stickers pour voir des détails.",
      net: { title: "Réseaux", c1:"Switching", c2:"Routing", c3:"Services" },
      tools: { title: "Outils", c1:"Packet Tracer", c2:"Wireshark", c3:"Linux" },
      soft: { title: "Pro", c1:"Documentation", c2:"Méthode", c3:"Collaboration" }
    },

    lang: {
      title: "Langues",
      subtitle: "Communication claire pour la documentation, les tickets et le travail en équipe.",
      french:{
        title:"Français",
        level:"Niveau : B1 (objectif B2+ en mai)",
        point1:"Rédaction de rapports techniques et compréhension en réunion.",
        point2:"À l’aise en communication quotidienne."
      },
      english:{
        title:"Anglais",
        level:"Niveau : C1 (professionnel)",
        point1:"Documentation technique, présentations et communication par e-mail.",
        point2:"À l’aise en équipe internationale."
      },
      malay:{
        title:"Malais",
        level:"Langue maternelle",
        point1:"Expression orale et écrite native."
      }
    },

    contact: {
      title: "Contact",
      subtitle: "Simple, rapide, recruteur-friendly.",
      cardTitle: "Let’s talk ✿",
      cardDesc: "Ouverte aux opportunités de stage en Réseaux & Télécom en France. Disponible pour échanger et envoyer mon CV.",
      emailBtn: "M’envoyer un email",
      cvBtn: "Voir le CV (PDF)"
    },

    footer: { name: "Ainul Nafisah BINTI ABD MALIK", note: "apple theme scrapbook — interactif • FR/EN • clair/sombre" }
  },

  en: {
    meta: { title: "Portfolio — Networks & Telecom" },
    brand: { name: "Ainul Malik", phon: "pronounced: eye-nool" },
    nav: { about:"About", projects:"Projects", skills:"Skills", languages:"Languages", contact:"Contact" },

    hero: {
      hand: "grab yours ♡",
      subtitle: "Networks & Telecommunications • Seeking an internship in France",
      appleTitle: "NETWORK NOTES",
      appleLine: "Routing • Switching • Services • Troubleshooting",
      cvBtn: "Download CV",
      linkedinBtn: "LinkedIn",
      chip1: "Switching",
      chip2: "Routing",
      chip3: "Troubleshooting",
      note: "Interactive site: lift-on-hover cards, tooltips, scroll animations, plus FR/EN and light/dark themes."
    },

    about: {
      tag: "about",
      hello: "Hello",
      name: "Ainul Nafisah BINTI ABD MALIK",
      title: "Ainul Nafisah BINTI ABD MALIK",
      desc:
        "I’m a Networks & Telecommunications Engineering student building strong fundamentals in routing, switching, network services, and troubleshooting (Packet Tracer, Wireshark, Linux). I’m looking for an internship in France where I can contribute to real network operations, documentation, and service reliability.",
      trait1: "reliable",
      trait2: "curious",
      trait3: "organized",
      email: "ainulsmz06@gmail.com",
      social: "LinkedIn",
      location: "France",
      cta1: "See projects",
      cta2: "Contact me"
    },

    projects: {
      title: "Projects",
      subtitle: "Hover = lift • Click = details",
      newSubtitle: "Technical and creative projects reflecting both my engineering and communication skills.",
      hint: "Click for details →",
      objectif: "Objective",
      whatIdid: "What I did",
      skills: "Skills",
      context: "Context",
      tools: "Tools",
      transferable: "Transferable skills",
      visitSite: "Visit live website ↗",
      openProof: "View topology ↗",
      visitChannel: "Visit channel ↗",
      open: "Open ↗",
      what: { title: "What I did" },
      p1: {
        title: "Interactive Portfolio Website",
        desc: "Responsive bilingual portfolio designed and built with HTML, CSS and JavaScript.",
        objective: "Build an interactive bilingual portfolio to showcase my profile to recruiters in France.",
        b1: "Responsive design + scroll animations + flip cards",
        b2: "Bilingual FR/EN mode + light/dark theme toggle",
        b3: "Deployed on GitHub Pages"
      },
      p2: {
        title: "Enterprise Network Admin",
        desc: "Design and configuration of a segmented network infrastructure using VLANs and routing.",
        context: "Simulated company with multiple departments requiring different access policies.",
        b1: "VLANs + trunking + inter-VLAN routing",
        b2: "Static NAT (server) + PAT (clients) + DMZ services",
        b3: "ACLs + ping/traceroute/show commands testing"
      },
      p3: {
        title: "YouTube Content Creation",
        desc: "Lifestyle and storytelling content focused on consistency and audience engagement.",
        b1: "Clear communication and visual storytelling",
        b2: "Consistency, content planning and management",
        b3: "Video editing + audience understanding",
        s1: "Creativity",
        s2: "Rigour",
        s3: "Confidence"
      }
    },

    skills: {
      title: "Skills",
      subtitle: "Hover the stickers to see details.",
      net: { title: "Networking", c1:"Switching", c2:"Routing", c3:"Services" },
      tools: { title: "Tools", c1:"Packet Tracer", c2:"Wireshark", c3:"Linux" },
      soft: { title: "Professional", c1:"Documentation", c2:"Method", c3:"Collaboration" }
    },

    lang: {
      title: "Languages",
      subtitle: "Clear communication for documentation, tickets, and teamwork.",
      french:{
        title:"French",
        level:"Level: B1 (target B2+ in May)",
        point1:"Can write technical reports and follow meetings.",
        point2:"Comfortable with daily communication."
      },
      english:{
        title:"English",
        level:"Level: C1 (professional)",
        point1:"Technical documentation, presentations, and email communication.",
        point2:"Comfortable collaborating in international teams."
      },
      malay:{
        title:"Malay",
        level:"Native",
        point1:"Native-level speaking and writing."
      }
    },

    contact: {
      title: "Contact",
      subtitle: "Simple, fast, recruiter-friendly.",
      cardTitle: "Let’s talk ✿",
      cardDesc: "Open to Networks & Telecom internship opportunities in France. Happy to connect and share my CV.",
      emailBtn: "Email me",
      cvBtn: "View CV (PDF)"
    },

    footer: { name: "Ainul Nafisah BINTI ABD MALIK", note: "apple theme scrapbook — interactive • FR/EN • light/dark" }
  }
};

function applyI18n(lang){
  document.documentElement.setAttribute("data-lang", lang);
  document.documentElement.lang = lang === "fr" ? "fr" : "en";
  localStorage.setItem("lang", lang);
  langBtn.textContent = lang.toUpperCase();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const parts = key.split(".");
    let value = i18n[lang];
    for(const p of parts) value = value?.[p];
    if(typeof value === "string") el.textContent = value;
  });
}

const savedLang = localStorage.getItem("lang") || "fr";
applyI18n(savedLang);

langBtn.addEventListener("click", () => {
  const cur = document.documentElement.getAttribute("data-lang") || "fr";
  applyI18n(cur === "fr" ? "en" : "fr");
});

/* ---------------- REVEAL ON SCROLL ---------------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ---------------- PROJECT CARDS (old + new) ---------------- */
document.querySelectorAll(".flip, .flip3").forEach(card => {
  const toggle = () => card.classList.toggle("is-flipped");
  card.addEventListener("click", toggle);
  card.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); toggle(); }
  });
});

/* ---------------- TOOLTIP (language-aware) ---------------- */
const tooltip = document.getElementById("tooltip");

function showTip(text, x, y){
  tooltip.textContent = text;
  tooltip.classList.add("show");
  tooltip.style.transform = `translate(${x + 14}px, ${y + 14}px)`;
}
function hideTip(){
  tooltip.classList.remove("show");
  tooltip.style.transform = `translate(-999px, -999px)`;
}

function getTipText(el){
  const lang = document.documentElement.getAttribute("data-lang") || "fr";
  const attr = lang === "fr" ? "data-pop-fr" : "data-pop-en";
  return el.getAttribute(attr) || el.getAttribute("data-pop-fr") || el.getAttribute("data-pop-en") || "";
}

document.querySelectorAll("[data-pop-fr], [data-pop-en]").forEach(el => {
  el.addEventListener("mousemove", (ev) => {
    const text = getTipText(el);
    if(text) showTip(text, ev.clientX, ev.clientY);
  });
  el.addEventListener("mouseenter", (ev) => {
    const text = getTipText(el);
    if(text) showTip(text, ev.clientX, ev.clientY);
  });
  el.addEventListener("mouseleave", hideTip);
});

/* ---------------- SUBTLE TILT FOLLOW ---------------- */
document.querySelectorAll("[data-tilt]").forEach(el => {
  let rect;
  el.addEventListener("mouseenter", () => rect = el.getBoundingClientRect());
  el.addEventListener("mousemove", (e) => {
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * 6;
    const ry = (x - 0.5) * 8;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "";
  });
});

/* ---------------- SCROLL PROGRESS ---------------- */
const progressBar = document.getElementById("progressBar");
function updateProgress(){
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

/* ---------------- PREMIUM MOBILE MENU ---------------- */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("menuOverlay");

function openMenu(){
  navMenu.classList.add("open");
  hamburger.classList.add("active");
  overlay.classList.add("show");
  document.body.classList.add("menu-open");
}
function closeMenu(){
  navMenu.classList.remove("open");
  hamburger.classList.remove("active");
  overlay.classList.remove("show");
  document.body.classList.remove("menu-open");
}

hamburger.addEventListener("click", () => {
  if(navMenu.classList.contains("open")) closeMenu();
  else openMenu();
});
overlay.addEventListener("click", closeMenu);
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", closeMenu));
window.addEventListener("scroll", () => { if(navMenu.classList.contains("open")) closeMenu(); }, { passive:true });