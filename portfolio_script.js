// Year
document.getElementById("year").textContent = new Date().getFullYear();

/* ---- THEME ---- */
const modeBtn = document.getElementById("modeBtn");
function setTheme(t){ document.documentElement.setAttribute("data-theme",t); localStorage.setItem("theme",t); }
const savedTheme = localStorage.getItem("theme");
if(savedTheme) setTheme(savedTheme);
modeBtn.addEventListener("click",()=>{
  const cur = document.documentElement.getAttribute("data-theme")||"dark";
  setTheme(cur==="light"?"dark":"light");
});

/* ---- LANGUAGE ---- */
const langBtn = document.getElementById("langBtn");

const i18n = {
  fr: {
    meta:  { title:"Portfolio — Réseaux & Télécom" },
    brand: { name:"Ainul Malik", phon:"prononciation : aï-noul" },
    nav:   { home:"Accueil", about:"À propos", projects:"Projets", skills:"Compétences", languages:"Langues", contact:"Contact" },

    hero: {
      eyebrow:    "BUT Réseaux & Télécommunications",
      h1a:        "Étudiante internationale en",
      h1b:        "Réseaux & Télécommunications",
      desc:       "Malaisienne en France, je construis mes bases en routage, switching et services réseau tout en développant ma créativité à travers la conception web et la création de contenu. Je recherche un stage pour contribuer à des opérations réseau réelles.",
      btnProjects:"Voir mes projets",
      btnCV:      "Télécharger mon CV",
      loc:        "France",
      origin:     "Malaisie",
      captionSub: "Réseaux & Télécom ✿"
    },

    strip: { net:"Networking", web:"Front-End", content:"Création de contenu", intl:"International" },

    about: {
      sectionTitle:"À propos",
      sectionSub:  "Qui suis-je ?",
      tag:"à propos", hello:"Hello ✿",
      name:"Ainul Nafisah BINTI ABD MALIK",
      title:"Ainul Nafisah BINTI ABD MALIK",
      desc:"Malaisienne passionnée par la découverte du monde, j'ai choisi de poursuivre mes études en France pour m'ouvrir à de nouvelles cultures et relever de nouveaux défis. Étudiante en BUT Réseaux & Télécommunications, je construis progressivement mon expertise en routage, switching et services réseau. Curieuse et motivée, j'aime combiner compétences techniques et créativité à travers la conception web et la création de contenu numérique. En dehors de mes études, je gère une chaîne YouTube consacrée à mon quotidien, ce qui me permet de développer mes compétences en communication, en montage vidéo et en gestion de projets personnels. À la recherche d'un stage en administration des réseaux, je souhaite mettre mes connaissances en pratique et contribuer à des infrastructures réseau performantes.",
      trait1:"rigoureuse", trait2:"curieuse", trait3:"organisée",
      email:"ainulsmz06@gmail.com", social:"LinkedIn", location:"France",
      cta1:"Voir les projets", cta2:"Me contacter"
    },

    projects: {
      title:"Projets",
      newSubtitle:"Projets techniques et créatifs qui reflètent à la fois mes compétences en ingénierie et en communication.",
      hint:"Cliquer pour les détails →",
      objectif:"Objectif", whatIdid:"Ce que j'ai fait", skills:"Compétences",
      context:"Contexte", tools:"Outils", transferable:"Compétences transférables",
      visitSite:"Visiter le site ↗", openProof:"Voir la topologie ↗", visitChannel:"Voir la chaîne ↗",
      presentation:"Présentation & enjeux", competences:"Compétences mises en œuvre", avis:"Mon point de vue",
      p1:{
        title:"Création d'un site web portfolio",
        desc:"Site web personnel interactif et bilingue, conçu pour présenter mon profil à des recruteurs.",
        presentation:"En tant qu'étudiante internationale en recherche de stage en France, j'avais besoin d'un outil de communication professionnel accessible à des recruteurs francophones et anglophones. L'enjeu était double : démontrer mes compétences techniques en développement web tout en reflétant ma personnalité.",
        b1:"Conçu et développé un portfolio en HTML, CSS et JavaScript pur",
        b2:"Intégré un mode bilingue FR/EN et un thème clair/sombre",
        b3:"Déployé sur GitHub Pages avec animations et cartes interactives",
        competences:"Développement front-end · UI/UX · Git/GitHub · Résolution de problèmes · Autonomie",
        avis:"Ce projet m'a appris à transformer une idée créative en produit fonctionnel et professionnel. Il m'a montré l'importance de penser à l'utilisateur final — ici, le recruteur — à chaque décision de design. Ce qui me plaît particulièrement, c'est de pouvoir modifier et améliorer mon portfolio en continu : c'est quelque chose de concret qui me représente vraiment."
      },
      p2:{
        title:"Enterprise Network Admin",
        desc:"Design et configuration d'une infrastructure réseau segmentée avec VLANs et routage.",
        context:"Simulation d'une entreprise avec plusieurs départements et politiques d'accès différentes.",
        b1:"VLANs + trunking + routage inter-VLAN",
        b2:"NAT statique + PAT clients + DMZ services",
        b3:"ACLs + tests ping/traceroute/show commands"
      },
      p3:{
        title:"YouTube Content Creation",
        desc:"Création de contenu lifestyle et storytelling, axée sur la régularité et l'engagement.",
        presentation:"Je gère une chaîne YouTube depuis plusieurs années. L'enjeu principal est de maintenir une régularité de publication tout en construisant une relation authentique avec mon audience, dans un environnement entièrement autonome et autodidacte.",
        b1:"Planifié, filmé et monté des vidéos de manière régulière et autonome",
        b2:"Développé une ligne éditoriale cohérente autour du storytelling personnel",
        b3:"Géré tous les aspects de la production : script, tournage, montage, publication",
        competences:"Communication · Storytelling visuel · Créativité · Rigueur · Planification · Confiance en soi",
        avis:"Ce projet m'a permis de développer ma créativité et ma discipline de manière concrète. J'ai compris que communiquer clairement — dans une vidéo ou un rapport technique — repose sur les mêmes qualités : structure, clarté et engagement. YouTube est aussi pour moi une plateforme d'expression personnelle : c'est l'endroit où je partage librement mes opinions et ma façon de voir les choses.",
        s1:"Créativité", s2:"Rigueur", s3:"Confiance"
      }
    },

    skills:{
      title:"Compétences", subtitle:"Survoler les tags pour voir les détails.",
      net:{ title:"Réseaux",  c1:"Switching", c2:"Routing", c3:"Services" },
      tools:{ title:"Outils", c1:"Packet Tracer", c2:"Wireshark", c3:"Linux" },
      soft:{ title:"Pro",     c1:"Documentation", c2:"Méthode", c3:"Collaboration" }
    },

    lang:{
      title:"Langues",
      subtitle:"Communication claire pour la documentation, les tickets et le travail en équipe.",
      french:{ title:"Français", level:"Niveau : B1 (objectif B2+ en mai)", point1:"Rédaction de rapports techniques et compréhension en réunion.", point2:"À l'aise en communication quotidienne." },
      english:{ title:"Anglais",  level:"Niveau : C1 (professionnel)", point1:"Documentation technique, présentations et communication par e-mail.", point2:"À l'aise en équipe internationale." },
      malay:{ title:"Malais", level:"Langue maternelle", point1:"Expression orale et écrite native." },
      intlNote:"Étudiante malaisienne poursuivant ses études en France dans un environnement international et multiculturel."
    },

    yt:{ sub:"Création de contenu · storytelling · régularité", desc:"Je crée du contenu lifestyle et personnel, partageant des moments de ma vie quotidienne et de ma créativité. Cela reflète ma régularité, mon sens du storytelling et ma communication.", btn:"Voir la chaîne" },

    contact:{
      eyebrow:"Intéressé(e) par mon profil ?",
      h2:"Discutons ensemble.",
      desc:"Je suis actuellement à la recherche d'un stage dans le domaine des réseaux et télécommunications en France.",
      emailBtn:"M'envoyer un email",
      cvBtn:"Télécharger CV"
    },

    footer:{ name:"Ainul Nafisah BINTI ABD MALIK" }
  },

  en: {
    meta:  { title:"Portfolio — Networks & Telecom" },
    brand: { name:"Ainul Malik", phon:"pronounced: eye-nool" },
    nav:   { home:"Home", about:"About", projects:"Projects", skills:"Skills", languages:"Languages", contact:"Contact" },

    hero: {
      eyebrow:    "BUT Networks & Telecommunications",
      h1a:        "International student in",
      h1b:        "Networks & Telecommunications",
      desc:       "Malaysian student in France, building strong fundamentals in routing, switching and network services while developing creativity through web design and content creation. Looking for an internship to contribute to real network operations.",
      btnProjects:"See my projects",
      btnCV:      "Download CV",
      loc:        "France",
      origin:     "Malaysia",
      captionSub: "Networks & Telecom ✿"
    },

    strip: { net:"Networking", web:"Front-End", content:"Content Creation", intl:"International" },

    about:{
      sectionTitle:"About",
      sectionSub:  "Who am I?",
      tag:"about", hello:"Hello ✿",
      name:"Ainul Nafisah BINTI ABD MALIK",
      title:"Ainul Nafisah BINTI ABD MALIK",
      desc:"Originally from Malaysia, I chose to come to France to discover the world, embrace new cultures and challenge myself in an international environment. I am currently studying Networks & Telecommunications, building strong fundamentals in routing, switching and network services. Curious and motivated, I enjoy combining technical skills with creativity through web design and digital content creation. Outside of my studies, I run a YouTube channel which helps me develop my communication, video editing and project management skills. I am looking for an internship in network administration to put my knowledge into practice and contribute to real infrastructure projects.",
      trait1:"reliable", trait2:"curious", trait3:"organized",
      email:"ainulsmz06@gmail.com", social:"LinkedIn", location:"France",
      cta1:"See projects", cta2:"Contact me"
    },

    projects:{
      title:"Projects",
      newSubtitle:"Technical and creative projects reflecting both my engineering and communication skills.",
      hint:"Click for details →",
      objectif:"Objective", whatIdid:"What I did", skills:"Skills",
      context:"Context", tools:"Tools", transferable:"Transferable skills",
      visitSite:"Visit live website ↗", openProof:"View topology ↗", visitChannel:"Visit channel ↗",
      presentation:"Context & stakes", competences:"Skills demonstrated", avis:"My take",
      p1:{
        title:"Portfolio Website",
        desc:"Personal interactive bilingual website built to present my profile to recruiters.",
        presentation:"As an international student looking for an internship in France, I needed a professional communication tool for both French and English-speaking recruiters. The challenge was twofold: demonstrate my technical web skills while reflecting my personality.",
        b1:"Designed and built a portfolio in HTML, CSS and pure JavaScript",
        b2:"Integrated FR/EN bilingual mode and light/dark theme",
        b3:"Deployed on GitHub Pages with animations and interactive cards",
        competences:"Front-end development · UI/UX · Git/GitHub · Problem solving · Autonomy",
        avis:"This project taught me to turn a creative idea into a functional, professional product. It showed me the importance of thinking about the end user — the recruiter — in every design decision. What I enjoy most is continuously editing and improving it: it's something concrete that genuinely represents who I am."
      },
      p2:{
        title:"Enterprise Network Admin",
        desc:"Design and configuration of a segmented network infrastructure using VLANs and routing.",
        context:"Simulated company with multiple departments requiring different access policies.",
        b1:"VLANs + trunking + inter-VLAN routing",
        b2:"Static NAT (server) + PAT (clients) + DMZ services",
        b3:"ACLs + ping/traceroute/show commands testing"
      },
      p3:{
        title:"YouTube Content Creation",
        desc:"Lifestyle and storytelling content creation, focused on consistency and engagement.",
        presentation:"I have been managing a YouTube channel for several years. The main challenge is maintaining a consistent publishing schedule while building an authentic relationship with my audience, in a fully self-taught and autonomous environment.",
        b1:"Planned, filmed and edited videos consistently and independently",
        b2:"Developed a coherent editorial line around personal storytelling",
        b3:"Managed all aspects of production: script, filming, editing, publishing",
        competences:"Communication · Visual storytelling · Creativity · Rigour · Planning · Self-confidence",
        avis:"This project helped me develop my creativity and discipline in a concrete way. I realised that communicating clearly — in a video or a technical report — relies on the same qualities: structure, clarity and engagement. YouTube is also a platform for me to express my opinions freely and share my personal perspective with the world.",
        s1:"Creativity", s2:"Rigour", s3:"Confidence"
      }
    },

    skills:{
      title:"Skills", subtitle:"Hover the tags to see details.",
      net:{ title:"Networking", c1:"Switching", c2:"Routing", c3:"Services" },
      tools:{ title:"Tools", c1:"Packet Tracer", c2:"Wireshark", c3:"Linux" },
      soft:{ title:"Professional", c1:"Documentation", c2:"Method", c3:"Collaboration" }
    },

    lang:{
      title:"Languages",
      subtitle:"Clear communication for documentation, tickets, and teamwork.",
      french:{ title:"French", level:"Level: B1 (target B2+ in May)", point1:"Can write technical reports and follow meetings.", point2:"Comfortable with daily communication." },
      english:{ title:"English", level:"Level: C1 (professional)", point1:"Technical documentation, presentations, and email communication.", point2:"Comfortable collaborating in international teams." },
      malay:{ title:"Malay", level:"Native", point1:"Native-level speaking and writing." },
      intlNote:"Malaysian student pursuing studies in France in an international and multicultural environment."
    },

    yt:{ sub:"Content creation · storytelling · consistency", desc:"I create lifestyle and personal content, sharing moments of my daily life and creativity. This reflects my consistency, storytelling, and communication skills.", btn:"Visit Channel" },

    contact:{
      eyebrow:"Interested in my profile?",
      h2:"Let's talk.",
      desc:"I am currently looking for an internship in networks and telecommunications in France.",
      emailBtn:"Email me",
      cvBtn:"Download CV"
    },

    footer:{ name:"Ainul Nafisah BINTI ABD MALIK" }
  }
};

function applyI18n(lang){
  document.documentElement.setAttribute("data-lang", lang);
  document.documentElement.lang = lang==="fr"?"fr":"en";
  localStorage.setItem("lang", lang);
  langBtn.textContent = lang.toUpperCase();
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const parts = key.split(".");
    let value = i18n[lang];
    for(const p of parts) value = value?.[p];
    if(typeof value==="string") el.textContent = value;
  });
}
const savedLang = localStorage.getItem("lang")||"fr";
applyI18n(savedLang);
langBtn.addEventListener("click",()=>{
  const cur = document.documentElement.getAttribute("data-lang")||"fr";
  applyI18n(cur==="fr"?"en":"fr");
});

/* ---- REVEAL ON SCROLL ---- */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("in"); });
},{ threshold:0.10 });
document.querySelectorAll(".reveal,.reveal-right,.reveal-up").forEach(el=>io.observe(el));

/* ---- PROJECT CARDS ---- */
document.querySelectorAll(".flip3").forEach(card=>{
  const toggle = ()=>card.classList.toggle("is-flipped");
  card.addEventListener("click", toggle);
  card.addEventListener("keydown",(ev)=>{ if(ev.key==="Enter"||ev.key===" "){ ev.preventDefault(); toggle(); } });
});

/* ---- TOOLTIP ---- */
const tooltip = document.getElementById("tooltip");
function showTip(text,x,y){ tooltip.textContent=text; tooltip.classList.add("show"); tooltip.style.transform=`translate(${x+14}px,${y+14}px)`; }
function hideTip(){ tooltip.classList.remove("show"); tooltip.style.transform="translate(-999px,-999px)"; }
function getTipText(el){ const lang=document.documentElement.getAttribute("data-lang")||"fr"; const attr=lang==="fr"?"data-pop-fr":"data-pop-en"; return el.getAttribute(attr)||el.getAttribute("data-pop-fr")||el.getAttribute("data-pop-en")||""; }
document.querySelectorAll("[data-pop-fr],[data-pop-en]").forEach(el=>{
  el.addEventListener("mousemove",(ev)=>{ const t=getTipText(el); if(t) showTip(t,ev.clientX,ev.clientY); });
  el.addEventListener("mouseenter",(ev)=>{ const t=getTipText(el); if(t) showTip(t,ev.clientX,ev.clientY); });
  el.addEventListener("mouseleave", hideTip);
});

/* ---- TILT ---- */
document.querySelectorAll("[data-tilt]").forEach(el=>{
  let rect;
  el.addEventListener("mouseenter",()=>rect=el.getBoundingClientRect());
  el.addEventListener("mousemove",(e)=>{
    if(!rect) return;
    const x=(e.clientX-rect.left)/rect.width;
    const y=(e.clientY-rect.top)/rect.height;
    const rx=(0.5-y)*6, ry=(x-0.5)*8;
    el.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  });
  el.addEventListener("mouseleave",()=>{ el.style.transform=""; });
});

/* ---- SCROLL PROGRESS ---- */
const progressBar = document.getElementById("progressBar");
function updateProgress(){
  const doc=document.documentElement;
  const scrollTop=doc.scrollTop||document.body.scrollTop;
  const scrollHeight=doc.scrollHeight-doc.clientHeight;
  progressBar.style.width=`${scrollHeight>0?(scrollTop/scrollHeight)*100:0}%`;
}
window.addEventListener("scroll",updateProgress,{passive:true});
window.addEventListener("resize",updateProgress);
updateProgress();

/* ---- MOBILE MENU ---- */
const hamburger=document.getElementById("hamburger");
const navMenu=document.getElementById("navMenu");
const overlay=document.getElementById("menuOverlay");
function openMenu(){ navMenu.classList.add("open"); hamburger.classList.add("active"); overlay.classList.add("show"); document.body.classList.add("menu-open"); }
function closeMenu(){ navMenu.classList.remove("open"); hamburger.classList.remove("active"); overlay.classList.remove("show"); document.body.classList.remove("menu-open"); }
hamburger.addEventListener("click",()=>{ if(navMenu.classList.contains("open")) closeMenu(); else openMenu(); });
overlay.addEventListener("click", closeMenu);
document.querySelectorAll(".nav a").forEach(link=>link.addEventListener("click",closeMenu));
window.addEventListener("scroll",()=>{ if(navMenu.classList.contains("open")) closeMenu(); },{passive:true});
