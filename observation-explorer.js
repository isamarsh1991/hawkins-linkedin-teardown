(() => {
  const data = OPE_DATA;
  const labels = {editorial:'Individual reading',candidate:'Provisional match','image-review':'Needs image review',serious:'Non-comic / promotional',reshare:'Reshare — review needed',unresolved:'Unresolved'};
  const button = document.createElement('button');
  button.textContent = 'Observation → premise → execution';
  button.dataset.t = 'ope';
  document.querySelector('#nav').insertBefore(button, document.querySelector('[data-t="lb"]'));
  const section = document.createElement('section');
  section.id = 'ope';
  document.querySelector('main').append(section);
  const style = document.createElement('style');
  style.textContent = '.ope-filters{display:flex;gap:10px;flex-wrap:wrap;margin:20px 0}.ope-filters input{flex:1;min-width:200px}.ope-filters select{max-width:100%}.ope-post{margin:14px 0;padding:20px;border:1px solid #ddd;border-radius:12px;background:white}.ope-post summary{cursor:pointer;font-weight:650;line-height:1.5}.ope-post dl{display:grid;grid-template-columns:110px 1fr;gap:12px;margin:20px 0}.ope-post dt{font-weight:700}.ope-post dd{margin:0;white-space:pre-wrap}.ope-post img{max-width:100%;max-height:500px;object-fit:contain;margin-top:12px}.ope-caption{white-space:pre-wrap;padding:16px;background:#f5f5f2;border-radius:8px}.ope-meta{color:#666;font-size:13px;margin:10px 0}.ope-counts{display:flex;flex-wrap:wrap;gap:8px}.ope-counts span{background:#eee;padding:6px 10px;border-radius:6px}@media(max-width:600px){.ope-post dl{grid-template-columns:1fr;gap:6px}.ope-post dd{margin-bottom:12px}}';
  document.head.append(style);
  section.innerHTML = `<div class="card"><h2>Industry observations</h2><p><b>Observation:</b> what happens in the industry. <b>Comic premise:</b> the imagined situation that makes it funny. <b>Execution:</b> the words and visual used to deliver it.</p><p>Keep the observation reusable. One observation can lead to several premises, and each premise can be expressed in different formats.</p><p class="mut">This is a work in progress across the 1,500 posts in the saved report. Individual readings use captions and inherited image notes; not every original image has been re-inspected. Provisional matches are clearly separated. Popularity shows audience response, not that an observation is factually true.</p><div class="ope-counts">${Object.entries(data.coverage).map(([s,n])=>`<span>${n} ${esc(labels[s])}</span>`).join('')}</div><p><a href="analysis/hawkins-post-analysis.csv" download>Download all entries (CSV)</a> · <a href="analysis/hawkins-post-analysis.json" download>Download linked database (JSON)</a></p></div><div class="ope-filters"><input id="ope-search" aria-label="Search observations and posts" placeholder="Search observations, premises or captions"><select id="ope-status" aria-label="Review status"><option value="editorial">Individual readings</option><option value="">All review statuses</option>${Object.entries(labels).filter(([s])=>s!=='editorial').map(([s,l])=>`<option value="${s}">${esc(l)}</option>`).join('')}</select><select id="ope-observation" aria-label="Observation"><option value="">All observations</option>${data.observations.map(o=>`<option value="${o.id}">${o.id}: ${esc(o.observation)}</option>`).join('')}</select></div><p id="ope-total" class="mut"></p><div id="ope-results"></div><button id="ope-more">Show 40 more</button>`;
  let limit = 40;
  function renderOpe() {
    const q = document.querySelector('#ope-search').value.toLowerCase().trim();
    const status = document.querySelector('#ope-status').value;
    const oid = document.querySelector('#ope-observation').value;
    const posts = data.posts.filter(p=>(!status || p.status===status)&&(!oid || p.observation_id===oid)&&(!q || [p.observation,p.comic_premise,p.execution.caption,p.execution.image_description].join(' ').toLowerCase().includes(q))).sort((a,b)=>b.metrics.ratio_to_year_median-a.metrics.ratio_to_year_median);
    document.querySelector('#ope-total').textContent = `${posts.length} matching posts · strongest response relative to the author's year first`;
    document.querySelector('#ope-results').innerHTML = posts.slice(0,limit).map(p=>`<details class="ope-post"><summary>${esc(p.execution.caption.slice(0,160)||p.execution.image_description||'Image-led post')}</summary><div class="ope-meta">${esc(labels[p.status])} · ${esc(p.date)} · ${p.metrics.likes.toLocaleString()} likes · ${p.metrics.ratio_to_year_median}× year median</div><dl><dt>Observation</dt><dd>${esc(p.observation||'Not assigned — see review note.')}</dd><dt>Comic premise</dt><dd>${esc(p.comic_premise||'Not assigned. A comic premise is not assumed for every post.')}</dd><dt>Execution</dt><dd>${esc(p.execution.format)}${p.execution.image_description?'\nVisual: '+esc(p.execution.image_description):''}</dd></dl><div class="ope-caption">${esc(p.execution.caption||'(No caption)')}</div>${p.execution.image_path?`<img loading="lazy" src="img/${p.post_id}.jpg" alt="Saved image for the post">`:''}<p class="ope-meta">${esc(p.review_note)}</p><a href="${esc(p.source_url)}" target="_blank" rel="noopener">Original LinkedIn post ↗</a></details>`).join('');
    document.querySelector('#ope-more').hidden = posts.length <= limit;
  }
  section.querySelectorAll('input,select').forEach(e=>e.addEventListener('input',()=>{limit=40;renderOpe()}));
  document.querySelector('#ope-more').onclick = ()=>{limit+=40;renderOpe()};
  button.onclick = ()=>{
    document.querySelectorAll('nav button,main>section').forEach(e=>e.classList.remove('on'));
    button.classList.add('on');section.classList.add('on');history.replaceState(null,'','#observations');window.scrollTo(0,0);
  };
  renderOpe();
  if(location.hash==='#observations') button.click();
})();
