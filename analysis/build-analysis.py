"""Build a traceable first-pass O/P/E index from the saved report and editorial overrides.
No external model calls. Rule-assisted candidates are not silently promoted to reviewed.
"""
import csv, json, re, collections
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
s=(ROOT/'index.html').read_text()
source=json.loads(re.search(r'const DATA=(.*?);const P=DATA.posts;',s).group(1))
posts=source['posts']
def tsv(name):
 with (ROOT/'analysis'/name).open() as f:return list(csv.DictReader(f,delimiter='\t'))
observations=tsv('observation-catalog.tsv')
obs={x['id']:x for x in observations}
overrides={x['post_id']:x for x in tsv('reviewed-posts.tsv')}
noncomic={x['post_id']:x for x in tsv('non-comic-posts.tsv')}
# Narrow motifs first; this is an explicitly provisional aid for the long tail.
rules=[
('O01',r'great.circle|grand canyon|route.*straight|straight.*route|route lines|bainbridge|energy crisis|cars.*float','An enthusiast presents an apparent shortcut as an AI breakthrough while overlooking the constraint or existing solution.'),
('O40',r'contract.*(?:salesforce|renewal|breakup)|salesforce.*(?:contract|breakup)|doesn.t end.*salesforce','Treat an enterprise subscription as an obligation that cannot be escaped.'),
('O41',r'ai sdr|cold email|cold.pitch|outreach|lead.gen','Exaggerate the gap between a sender’s supposed personalization and the recipient’s actual reason to care.'),
('O44',r'do not hallucinate|zero errors|make no mistakes','Treat a demand for perfection as if writing it into a prompt guarantees the outcome.'),
('O04',r'refactor|diff|lines of code|review.*code|code.*review','Celebrate rapid code generation while exposing the review or repair burden imposed on others.'),
('O08',r'token.*(?:spend|bill|cost|salary)|(?:spend|bill|cost|salary).*token|token consumption|token.*quota','Turn AI consumption into an absurd financial burden or a status achievement.'),
('O49',r'usage limit|usage window|outage|limits.*claude|claude.*limits','Make an AI outage or quota reset determine whether ordinary life and work can proceed.'),
('O11',r'sycophan|absolutely right|validates|conspiracy validation|how impressive','Make automatic agreement look like useful judgment or emotional support.'),
('O51',r'talking to.*(?:claude|cto)|texting.*cto|not just|it.s not.*it.s|large.language model','Move recognizable AI phrasing into a human conversation or expose it in supposedly personal communication.'),
('O27',r'interview.*process|process.*interview|cheating.*interview|hiring.*red flag|red flag.*hiring','Escalate a supposedly sensible hiring safeguard or requirement until it prevents sensible hiring.'),
('O38',r'sunday.*team|team.*sunday|holiday weekend|weekend.*plans','Present an intrusion into employee time as a considerate act of leadership.'),
('O16',r'any update|senior management|promot.*(?:message|call)|salary progression','Make a low-substance workplace behavior the qualification for promotion or high pay.'),
('O15',r'stanford|stealth startup|yc.*(?:hoodie|name|nda)|drop.out|dropout','Treat an easily imitated credential or affiliation as a shortcut to founder credibility.'),
('O26',r'\barr\b|\bmrr\b|tam|seven.figures|7.figures|diagonal saas|datacat','Use superficially plausible arithmetic or definitions to manufacture startup scale.'),
('O09',r'data.center|data center|water.*(?:ai|agent)|(?:ai|agent).*water','Apply AI maximalism so literally that people or ordinary resources become subordinate to compute.'),
('O30',r'microsoft teams|copilot','Treat ordinary enterprise software use as an ordeal or praise its failures as innovations.'),
('O02',r'quick call|quick chat|hop on|hopping on','Insert an unwanted quick call into a context where its interruption becomes absurd.'),
('O06',r'synerg|paradigm|low.hanging|boil.*ocean|ducks.*row','Take empty workplace language literally or let it substitute for an actual activity.'),
('O21',r'\b(?:daughter|son|kid|toddler|child|baby|wife|husband|marry)\b','Bring adult technology or workplace logic into family life and let the mismatch carry the joke.'),
('O54',r'pay package|compensation|meta.*(?:offer|salary)|offer.*(?:meta|openai)|salary.*million','Push AI-era compensation and negotiating signals beyond ordinary workplace logic.'),
('O33',r'oracle|docusign|clone.*(?:company|enterprise)|lawyer','Clone or literalize an incumbent’s stereotype instead of merely reproducing its software.'),
('O12',r'proud to announce|excited to share|pleased to announce|certification|celebration','Give a trivial or absurd event the ceremonial treatment of a professional milestone.'),
('O43',r'\.ai domain|chief ai officer|podcasts|billboard|domain name|dark mode','Treat the accessories of being a startup as if they were the business itself.'),
('O34',r'over.engineer|mac studio|mac mini|first.class|business.class|expensive flight|dinner|lunch','Optimize an ordinary task so aggressively that the solution costs more than the problem.'),
('O55',r'follow me|passive income|financial advice|finanical|life hack|path to wealth|billionaire','Frame an obvious, dubious or impossible shortcut as authoritative success advice.'),
('O25',r'996|997|9.9.6|dedicat|armchair founder|competitor.*cable','Escalate the expected proof of founder commitment past any reasonable boundary.'),
('O35',r'data warehouse|data mansion|polishing cloth|remote.*tv|founder.*found|linked.list|pointer','Take a technical name, idiom or category literally to create an absurd second meaning.'),
('O37',r'agent.*(?:calendar|permission|wedding|negotia|job|assistant)|assistant.*(?:family|home)|autonomous','Give an AI assistant agency that extends beyond the intended task and creates human consequences.'),
('O46',r'committee|approval|all.hands|standup|stakeholder|meeting','Expand the ceremony around doing a task until it crowds out the task itself.'),
('O52',r'hallucinat|contradict|ai fail|2005|wrong answer','Expose an AI’s confidence through a plainly wrong or self-contradictory answer.'),
('O42',r'zero customers|0 customers|something people want|product.market fit','Accelerate product building without supplying the customer demand that makes it a business.'),
('O50',r'what.*(?:built|shipped)|use cases|neither used|what prompt','Expose the gap between sounding fluent in AI and demonstrating useful work.'),
('O53',r'\brto\b|return.to.office|hybrid|in.office|remote work','Present a workplace policy’s stated benefit alongside the inconvenience it actually imposes.'),
('O60',r'framework|optimal ai setup|setup.*workflow|workflow.*setup','Make choosing and configuring productivity tools become the work itself.'),
]
compiled=[(oid,re.compile(rx,re.I|re.S),prem) for oid,rx,prem in rules]
common_recipe=collections.Counter(p['rec'] for p in posts)
entries=[]
for p in posts:
 text=' '.join(str(p.get(k) or '') for k in ['t','idesc','dn'])
 override=overrides.get(p['id'])
 is_reshare=p['f']=='quote-post' or p['th']=='reshare / quote-post'
 is_serious=p['th']=='serious: company-building/announcement' or bool(re.search(r'warning: serious|serious post incoming|actually non-meme',p['t'],re.I))
 status='candidate'; oid=None; premise=None; note='Rule-assisted interpretation. Check the caption and image before using this observation.'
 if override:
  oid=override['observation_id'];premise=override['comic_premise'];status='editorial';note='Editorial reading of the saved caption and existing image notes. Original pixels have not all been re-inspected.'
 elif p['id'] in noncomic:
  status='serious';note=noncomic[p['id']]['purpose']+': '+noncomic[p['id']]['observation']
 elif is_reshare:
  status='reshare'; note='Reshare/quote-post: assess the author’s added text separately from the quoted material. No comic premise forced from format alone.'
 elif is_serious:
  status='serious'; note='Primarily a serious update or operating argument. Comic premise is not applicable unless a specific joke is identified.'
 else:
  for ob,rx,pr in compiled:
   m=rx.search(text)
   if m:
    oid=ob;premise=pr;break
  # Sparse image metadata cannot support a specific interpretation, even if an old theme exists.
  if len(p['t'].split())<12 and len((p.get('dn') or p.get('idesc') or '').split())<8:
   status='image-review';oid=None;premise=None;note='The caption/image notes are too sparse to reverse-engineer reliably. Inspect the original image; do not infer an observation from the old theme label.'
  elif not oid:
   status='unresolved';note='No defensible observation assigned in the first pass. Full source retained for individual review.'
 image_desc=p.get('dn') or p.get('idesc')
 entry={
  'post_id':p['id'],'source_url':p['u'],'date':p['d'],'source_theme':p['th'],
  'status':status,'observation_id':oid,'observation':obs[oid]['observation'] if oid else None,
  'comic_premise':premise,
  'execution':{'format':p['f'],'caption':p['t'],'image_description':image_desc,'image_path':f"../img/{p['id']}.jpg" if p['img'] else None,'hook':p['hk'],'humor_tags':p['hu']},
  'source_analysis':{'depth':p['dp'],'recipe':p['rec'],'recipe_reused_count':common_recipe[p['rec']],'image_note_basis':'inherited report annotation, not new visual inspection'},
  'review_note':note,'metrics':{'likes':p['l'],'comments':p['c'],'reposts':p['r'],'ratio_to_year_median':p['x']},
  'interpretation_confidence':'editorial hypothesis' if status=='editorial' else 'provisional' if status=='candidate' else 'not assigned'
 }
 entries.append(entry)
# The observation database is normalized: one observation can link to many premises/posts.
for o in observations:
 o['audiences']=['technology founders','software teams']
 o['evidence_status']='hypothesis'
 o['editorially_linked_posts']=[e['post_id'] for e in entries if e['observation_id']==o['id'] and e['status']=='editorial']
 o['candidate_posts']=[e['post_id'] for e in entries if e['observation_id']==o['id'] and e['status']=='candidate']
 o['provenance']='Editorial synthesis of Hawkins satire. A joke is evidence of an angle, not proof of an industry-wide factual claim.'
 o['created']='2026-10-25'
counts=dict(collections.Counter(e['status'] for e in entries))
out={'schema_version':1,'title':'Hawkins: observation → comic premise → execution','scope':'All 1,500 posts in the supplied report, 2024-06-15 through 2026-10-24. Not a fresh LinkedIn scrape.','coverage':counts,'observations':observations,'posts':entries}
(ROOT/'analysis'/'hawkins-post-analysis.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
(ROOT/'analysis-data.js').write_text('const OPE_DATA = '+json.dumps(out,ensure_ascii=False,separators=(',',':'))+';\n')
with (ROOT/'analysis'/'hawkins-post-analysis.csv').open('w') as f:
 w=csv.DictWriter(f,fieldnames=['post_id','source_url','date','status','observation_id','observation','comic_premise','format','caption','image_description','review_note']);w.writeheader()
 for e in entries:w.writerow({**{k:e[k] for k in ['post_id','source_url','date','status','observation_id','observation','comic_premise','review_note']},**{k:e['execution'][k] for k in ['format','caption','image_description']}})
print(json.dumps(counts,indent=2))
assert len(entries)==1500 and len(set(e['post_id'] for e in entries))==1500
assert all(x in {p['id'] for p in posts} for x in overrides)
