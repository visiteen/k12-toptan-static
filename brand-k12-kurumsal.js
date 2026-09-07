(function(){
  const BRAND_FROM = 'K12 Toptan';
  const BRAND_TO = 'K12 Kurumsal';
  const DOMAIN = 'https://k12kurumsal.com/';

  function replaceText(value){
    if (typeof value !== 'string') return value;
    return value
      .replaceAll('K12 Toptan', 'K12 Kurumsal')
      .replaceAll('K12 TOPTAN', 'K12 KURUMSAL')
      .replaceAll('K12 TOPTAN', 'K12 KURUMSAL')
      .replaceAll('>TOPTAN<', '>KURUMSAL<');
  }

  function patchTextNode(node){
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const next = replaceText(node.nodeValue);
    if (next !== node.nodeValue) node.nodeValue = next;
  }

  function patchElement(el){
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return;
    ['aria-label','title','alt','placeholder'].forEach(attr => {
      if (el.hasAttribute && el.hasAttribute(attr)) {
        const current = el.getAttribute(attr);
        const next = replaceText(current);
        if (next !== current) el.setAttribute(attr,next);
      }
    });

    if (el.tagName === 'A' && el.hasAttribute('href')) {
      const href = el.getAttribute('href');
      if (href === 'https://k12toptan.com' || href === 'https://www.k12toptan.com' || href === 'https://k12-toptan.vercel.app' || href === 'https://k12-toptan.vercel.app/') {
        el.setAttribute('href', DOMAIN);
      }
    }
  }

  function patchTree(root){
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) patchTextNode(root);
    if (root.nodeType === Node.ELEMENT_NODE) patchElement(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) patchTextNode(node);
      else patchElement(node);
    }
  }

  function ensureMeta(selector, attrs){
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement(attrs.tag || 'meta');
      document.head.appendChild(el);
    }
    Object.entries(attrs).forEach(([k,v]) => {
      if (k !== 'tag') el.setAttribute(k,v);
    });
    return el;
  }

  function patchSeo(){
    document.title = replaceText(document.title || 'K12 Kurumsal — Kurumsal Eğitim Çözümleri ve Yönetim Merkezi');

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = DOMAIN;

    ensureMeta('meta[property="og:site_name"]',{tag:'meta',property:'og:site_name',content:'K12 Kurumsal'});
    ensureMeta('meta[property="og:url"]',{tag:'meta',property:'og:url',content:DOMAIN});
    const ogTitle = document.head.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = replaceText(ogTitle.content);
    const twTitle = document.head.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.content = replaceText(twTitle.content);
  }

  function patchRuntimeFunctions(){
    if (typeof window.buildLeadPayload === 'function' && !window.__k12BrandPayloadPatched) {
      const original = window.buildLeadPayload;
      window.buildLeadPayload = function(){
        const payload = original.apply(this, arguments);
        if (payload && typeof payload === 'object') {
          payload.source = 'K12 Kurumsal Web Lead Motoru V15';
          payload.sourcePage = location.href;
        }
        return payload;
      };
      window.__k12BrandPayloadPatched = true;
    }

    if (typeof window.leadSummaryText === 'function' && !window.__k12BrandSummaryPatched) {
      const originalSummary = window.leadSummaryText;
      window.leadSummaryText = function(){
        return replaceText(originalSummary.apply(this, arguments));
      };
      window.__k12BrandSummaryPatched = true;
    }
  }

  function run(){
    patchSeo();
    patchTree(document.documentElement);
    patchRuntimeFunctions();

    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.type === 'characterData') patchTextNode(mutation.target);
        mutation.addedNodes.forEach(patchTree);
      }
      patchSeo();
      patchRuntimeFunctions();
    });
    observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true});
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',run,{once:true});
  else run();
})();
