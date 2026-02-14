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
      hand: "grab yours ♡",
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
      photo: "your photo",
      name: "Ainul Nafisah BINTI ABD MALIK",
      title: "Ainul Nafisah BINTI ABD MALIK",
      desc:
        "Étudiante en Réseaux & Télécommunications, je consolide mes bases en routage, switching, services réseau et dépannage (Packet Tracer, Wireshark, Linux). Je recherche un stage en France afin de contribuer à des opérations réseau réelles, à la documentation et à la fiabilité des services.",
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
      subtitle: "Survoler = lift • Cliquer = détails (flip)",
      open: "Ouvrir ↗",
      what: { title: "Ce que j’ai fait" },
      p1: {
        title: "Topologie VLAN + inter-VLAN + ACL",
        desc: "Segmentation LAN, politiques d’accès, et vérifications.",
        b1: "Création VLANs + trunking + inter-VLAN routing",
        b2: "ACLs (autoriser/refuser selon besoins)",
        b3: "Tests : ping, traceroute, show vlan / show ip int br"
      },
      p2: {
        title: "NAT/PAT + DMZ (DNS/FTP/HTTP)",
        desc: "Accès externe contrôlé + services en DMZ.",
        b1: "NAT statique pour serveur, PAT pour clients",
        b2: "Configuration DNS + FTP/HTTP + sécurité de base",
        b3: "Vérif : show ip nat translations, ping, telnet/ftp"
      },
      p3: {
        title: "Analyse Wireshark (DNS + HTTP)",
        desc: "Comprendre une communication bout-à-bout.",
        b1: "Filtrage, inspection trames, handshake TCP",
        b2: "Résolution DNS + requêtes HTTP",
        b3: "Conclusion : causes possibles & bonnes pratiques"
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
      photo: "your photo",
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
      subtitle: "Hover = lift • Click = details (flip)",
      open: "Open ↗",
      what: { title: "What I did" },
      p1: {
        title: "VLAN topology + inter-VLAN + ACL",
        desc: "LAN segmentation, access policies, and verification.",
        b1: "Built VLANs + trunking + inter-VLAN routing",
        b2: "Implemented ACL policies (allow/deny)",
        b3: "Tests: ping, traceroute, show vlan / show ip int br"
      },
      p2: {
        title: "NAT/PAT + DMZ (DNS/FTP/HTTP)",
        desc: "Controlled external access + services in DMZ.",
        b1: "Static NAT for server, PAT for clients",
        b2: "Configured DNS + FTP/HTTP + basic security",
        b3: "Verify: show ip nat translations, ping, telnet/ftp"
      },
      p3: {
        title: "Wireshark analysis (DNS + HTTP)",
        desc: "Understanding end-to-end communication.",
        b1: "Filters, frame inspection, TCP handshake",
        b2: "DNS resolution + HTTP requests",
        b3: "Conclusion: likely causes & best practices"
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

/* ---------------- FLIP CARDS ---------------- */
document.querySelectorAll(".flip").forEach(card => {
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

/* ---------------- SUBTLE TILT FOLLOW (optional) ---------------- */
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
