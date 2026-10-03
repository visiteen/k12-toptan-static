(function(){
  const programs=[
    {label:"Future Days",href:"/program-future-days.html"},
    {label:"InnoTeen",href:"/program-innoteen.html"},
    {label:"InnoHub",href:"/program-innohub.html"}
  ];
  function norm(s){return (s||"").replace(/\s+/g," ").trim()}
  function findCard(label){
    const leaves=[...document.querySelectorAll("body *")].filter(el=>{
      const t=norm(el.textContent);
      return t.startsWith(label) && t.length<90;
    });
    let leaf=leaves.find(el=>norm(el.textContent)===label)||leaves[0];
    if(!leaf) return null;
    let node=leaf;
    while(node.parentElement && node.parentElement!==document.body){
      const pt=norm(node.parentElement.textContent);
      if(pt.length>190 || programs.some(p=>p.label!==label && pt.includes(p.label))) break;
      node=node.parentElement;
    }
    return node;
  }
  function enhance(){
    programs.forEach(p=>{
      const card=findCard(p.label);
      if(!card || card.dataset.k12ProgramLink) return;
      card.dataset.k12ProgramLink="1";
      card.setAttribute("role","link");
      card.setAttribute("tabindex","0");
      card.setAttribute("aria-label",p.label+" program detayını aç");
      card.style.cursor="pointer";
      card.style.transition="transform .18s ease, box-shadow .18s ease, border-color .18s ease";
      const open=()=>{location.href=p.href};
      card.addEventListener("click",open);
      card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}});
      card.addEventListener("mouseenter",()=>{card.style.transform="translateY(-3px)";card.style.boxShadow="0 14px 32px rgba(6,27,66,.10)";card.style.borderColor="rgba(255,100,0,.55)"});
      card.addEventListener("mouseleave",()=>{card.style.transform="";card.style.boxShadow="";card.style.borderColor=""});
      const marker=document.createElement("span");
      marker.textContent="Detayları Gör  →";
      marker.style.cssText="display:block;margin-top:9px;color:#ff6400;font-size:12px;font-weight:800;letter-spacing:.01em";
      const host=card.querySelector("div:last-child")||card;
      if(!norm(card.textContent).includes("Detayları Gör")) host.appendChild(marker);
    });
    const headings=[...document.querySelectorAll("h1,h2,h3,h4,div,p")];
    const programHeading=headings.find(el=>norm(el.textContent)==="Yetkinlik Geliştirme Programları");
    if(programHeading){
      programHeading.id="programlar";
      programHeading.style.scrollMarginTop="125px";
    }
    if(location.hash==="#programlar" && programHeading){
      setTimeout(()=>programHeading.scrollIntoView({behavior:"smooth",block:"start"}),180);
    }
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",enhance);
  else setTimeout(enhance,0);
})();