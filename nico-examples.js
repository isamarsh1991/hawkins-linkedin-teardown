const NICO_EXAMPLES = [
  {
    "id": "route",
    "source": "7389360688948748288",
    "title": "The AI that fixes the metric",
    "audience": "Founders · sales leaders · RevOps",
    "mechanism": "Hawkins draws a “better” flight path that ignores geography. Keep the impressive optimization claim, then reveal that the system removed the thing the metric was supposed to measure.",
    "caption": "AI has completely transformed our forecasting.",
    "copy": "Asked our AI agent to eliminate deals slipping into next quarter.\n\nIt deleted next quarter.\n\nEverything is now closing this month.\n\nBoard deck looks incredible.",
    "alt": "We asked AI to shorten our sales cycle.\n\nIt moved every open opportunity to closed lost.\n\nAverage time to close: 4 seconds.",
    "kind": "dashboard",
    "mocktitle": "Forecast optimization complete",
    "rows": [
      [
        "Deals slipping",
        "0"
      ],
      [
        "Close dates",
        "All set to this month"
      ],
      [
        "Next quarter",
        "Deleted"
      ]
    ],
    "brief": "A fictional CRM change log. One green success banner, two sensible-looking rows, then “Next quarter: Deleted.” The final row is the reveal. No real customer names or results.",
    "why": "The founder sees board-reporting theater; the operator sees a metric being optimized at the expense of reality.",
    "follow": "A separate operator post on what actually makes a forecast trustworthy."
  },
  {
    "id": "workflow",
    "source": "7465839491128279040",
    "title": "The beautiful workflow that does nothing",
    "audience": "GTM engineers · RevOps · technical founders",
    "mechanism": "Hawkins builds up the scale of an AI refactor before admitting it does not work. Swap code volume for workflow complexity and land on an embarrassingly basic output.",
    "caption": "The future of GTM is here.",
    "copy": "Rebuilt our outbound engine with AI.\n\n14 agents.\n9 enrichment sources.\nReal-time intent scoring.\n\nFirst email: “Hi {{first_name}}.”",
    "alt": "Our new GTM workflow has 83 steps.\n\n82 prepare the data.\n\nThe last one sends it to someone who left the company in March.",
    "kind": "log",
    "mocktitle": "Outbound engine / first production run",
    "rows": [
      [
        "Enrichment",
        "✓ Complete"
      ],
      [
        "Intent model",
        "✓ Complete"
      ],
      [
        "Personalization",
        "✓ Complete"
      ],
      [
        "Email preview",
        "Hi {{first_name}},"
      ]
    ],
    "brief": "A dark run log with three green checks above a large email preview. Make the unresolved first-name variable readable at phone size; omit decorative node spaghetti.",
    "why": "It rewards technical recognition while keeping the failure understandable to a founder or salesperson.",
    "follow": "What Nico checks before a workflow goes into production."
  },
  {
    "id": "calendar",
    "source": "7475201624227905536",
    "title": "The calendar that explains the pipeline",
    "audience": "Founders · revenue leaders · sales",
    "mechanism": "Hawkins turns workplace jargon into an absurdly full day. Make the calendar itself show how internal activity crowds out selling.",
    "caption": "We’re a customer-obsessed company.",
    "copy": "“Why aren’t reps spending more time with customers?”\n\nTheir calendar:",
    "alt": "Booked solid all week.\n\nMostly discussing why we haven’t booked anything.",
    "kind": "calendar",
    "mocktitle": "Account executive / Monday",
    "rows": [
      [
        "09:00",
        "Pipeline review"
      ],
      [
        "10:00",
        "Forecast alignment"
      ],
      [
        "11:00",
        "CRM hygiene workshop"
      ],
      [
        "13:00",
        "Sales productivity sync"
      ],
      [
        "14:00",
        "Customer call — declined: conflict"
      ],
      [
        "15:00",
        "Why is activity down?"
      ]
    ],
    "brief": "A single-day calendar, not a tiny five-day grid. Internal meetings fill the day. The only customer call is visibly declined. Keep the calendar fictional.",
    "why": "Salespeople feel seen, while leadership recognizes a problem it can change. The joke targets the schedule, not lazy reps.",
    "follow": "How to remove administrative work without losing useful sales context."
  },
  {
    "id": "announcement",
    "source": "7491146555262013440",
    "title": "The very small transformation announcement",
    "audience": "RevOps · founders · revenue leaders",
    "mechanism": "Hawkins gives a trivial saving the language of a major announcement. Use the same gap between ceremonial language and mundane reality.",
    "caption": "A huge milestone for the team.",
    "copy": "Delighted to announce our new single source of truth.\n\nIt joins our four existing single sources of truth.",
    "alt": "After six months of cross-functional collaboration, we have aligned on the definition of a qualified lead.\n\nSales was not in the meeting.",
    "kind": "directory",
    "mocktitle": "Revenue team / shared files",
    "rows": [
      [
        "📄",
        "Single source of truth"
      ],
      [
        "📄",
        "Single source of truth FINAL"
      ],
      [
        "📄",
        "Single source of truth FINAL v2"
      ],
      [
        "📄",
        "Actual numbers — ask Sarah"
      ]
    ],
    "brief": "A simple fictional shared-folder screenshot with four contradictory file names. Alternatively publish either written version alone; it does not need an image to work.",
    "why": "Both buyers and builders recognize the coordination failure immediately. The tiny achievement carries the joke without a technical explanation.",
    "follow": "How to assign ownership of definitions and data across revenue teams."
  },
  {
    "id": "chat",
    "source": "7447659917408272384",
    "title": "The agent asks the question nobody answered",
    "audience": "GTM engineers · RevOps · founders",
    "mechanism": "Hawkins uses an extremely simple AI response to puncture grand ambitions. Give Nico’s agent one basic clarification that exposes missing business judgment.",
    "caption": "The agent has hit a technical limitation.",
    "copy": "Me: Prioritize our best-fit accounts.\nAgent: What makes an account a good fit?\nMe: Use our ICP.\nAgent: Where is it?\nMe: Can you just be more agentic?",
    "alt": "Founder: Build an autonomous outbound engine.\nAgent: Who should we target?\nFounder: Companies likely to buy.\nAgent: What makes them likely to buy?\nFounder: I thought this was autonomous.",
    "kind": "chat",
    "mocktitle": "GTM assistant",
    "rows": [
      [
        "You",
        "Prioritize our best-fit accounts."
      ],
      [
        "Agent",
        "What makes an account a good fit?"
      ],
      [
        "You",
        "Use our ICP."
      ],
      [
        "Agent",
        "Where is it?"
      ],
      [
        "You",
        "Can you just be more agentic?"
      ]
    ],
    "brief": "Five short chat bubbles. Use a generic assistant interface; the punchline is the last human message. Keep the caption outside the screenshot.",
    "why": "This is close to TRA’s actual point of view: automation still requires explicit business decisions. The humor comes from the evasive human.",
    "follow": "The decisions a team needs to make before building account scoring."
  },
  {
    "id": "hiring",
    "source": "7282048406556971009",
    "title": "The impossible GTM engineer",
    "audience": "GTM engineers · RevOps · hiring founders",
    "mechanism": "Hawkins parodies “by age 30” achievement lists. Replace tech status symbols with the contradictory expectations placed on a single GTM hire.",
    "caption": "Exciting opportunity to wear multiple hats.",
    "copy": "By your second week as a GTM engineer, you should have:\n\n– rebuilt the CRM\n– fixed attribution\n– launched outbound\n– aligned sales and marketing\n– received access to the CRM",
    "alt": "Hiring our first GTM engineer.\n\nMust own data engineering, outbound, RevOps, analytics and sales strategy.\n\nEntry-level role.\n\nReports to whoever asked most recently.",
    "kind": "job",
    "mocktitle": "GTM engineer · Entry level",
    "rows": [
      [
        "Scope",
        "Data + outbound + RevOps + analytics"
      ],
      [
        "Ownership",
        "All revenue systems"
      ],
      [
        "Decision rights",
        "None"
      ],
      [
        "Reports to",
        "It depends"
      ]
    ],
    "brief": "A fictional job listing with an ordinary title and compact requirements. “Decision rights: None” is the visual reveal. Text-only is also a strong option.",
    "why": "Practitioners recognize the impossible job, and founders can see why hiring one person does not resolve unclear ownership.",
    "follow": "How Nico scopes a GTM engineering role and decides who it reports to."
  },
  {
    "id": "headline",
    "source": "7272264378157076480",
    "title": "The AI SDR gets promoted",
    "audience": "Sales leaders · founders · GTM engineers",
    "mechanism": "Hawkins promotes a robot for learning a corporate status-ping phrase. Swap the robot’s workplace behavior for sales theater.",
    "caption": "They grow up so fast.",
    "copy": "AI SDR promoted to sales manager after asking “any update on this?” 400 times without reading the replies.",
    "alt": "AI SDR achieves perfect CRM hygiene by marking every unanswered email as “nurture.”\n\nPromoted to Head of Revenue Operations.",
    "kind": "headline",
    "mocktitle": "The Pipeline Times · Fictional satire",
    "rows": [
      [
        "BREAKING",
        "AI SDR promoted after asking “any update on this?” 400 times"
      ],
      [
        "Performance review",
        "Strong leadership potential."
      ]
    ],
    "brief": "An invented trade-publication headline, with a small “Fictional satire” label. No real publication masthead or executive photo. Use the first version as the headline and the short caption above.",
    "why": "It exaggerates a recognizable behavior without claiming that a real AI vendor or company did this.",
    "follow": "Which sales tasks are worth automating, and where a human needs to take over."
  },
  {
    "id": "obstacles",
    "source": null,
    "title": "The obstacle course we built ourselves",
    "audience": "Sales · RevOps · B2B SaaS founders",
    "mechanism": "Your Adam Karpiak reference: a company complains about an outcome, then the image reveals the process causing it. This is an additional reference, not a Hawkins dataset post.",
    "caption": "Use the two-line setup as the entire post.",
    "copy": "companies: “our inbound leads never convert”\n\ntheir demo booking process:",
    "alt": "companies: “our reps need to spend more time selling”\n\nwhat they have to do to log a call:",
    "kind": "steps",
    "mocktitle": "Before you can see the product…",
    "rows": [
      [
        "1",
        "Complete 14 required fields"
      ],
      [
        "2",
        "Book a qualification call"
      ],
      [
        "3",
        "Repeat everything to an AE"
      ],
      [
        "4",
        "Book a separate demo"
      ],
      [
        "5",
        "“Why did they ghost us?”"
      ]
    ],
    "brief": "Option A: use an obstacle-course visual in the style of the supplied reference, with one of the two setups above it. Option B: build a fictional demo-booking wizard with a growing stack of prerequisites; final step says “Book another call.” The adjacent preview shows the wizard direction.",
    "why": "The visual communicates friction instantly. The demo version addresses buyers and founders; the call-logging version is closer to rep productivity.",
    "follow": "A specific walkthrough of where a demo request stalls, or how to simplify rep administration."
  }
];
function nicoMock(e){return `<div class="nico-mock ${e.kind}"><div class="mock-bar"><span>● ● ●</span> ${esc(e.mocktitle)}</div><div class="mock-body">${e.rows.map(([a,b])=>`<div class="mock-row"><strong>${esc(a)}</strong><span>${esc(b)}</span></div>`).join('')}</div><div class="mock-label">CONCEPT PREVIEW · FICTIONAL</div></div>`}
function nicoCard(e){return `<article class="card nico-card" id="nico-${e.id}"><div class="nico-eyebrow">${esc(e.audience)}</div><h3>${esc(e.title)}</h3><p>${esc(e.mechanism)}</p>${e.source?`<button class="nico-source" data-open="${e.source}">Inspect the Hawkins original ↗</button>`:'<p class="mut">Additional reference: Adam Karpiak obstacle-course meme supplied in this chat.</p>'}<div class="nico-columns"><div><h4>Written version A</h4><div class="nico-copy">${esc(e.copy)}</div><h4>Written version B</h4><div class="nico-copy">${esc(e.alt)}</div><p><b>Optional image caption:</b> ${esc(e.caption)}</p></div><div><h4>Mock screenshot direction</h4>${nicoMock(e)}<p>${esc(e.brief)}</p></div></div><div class="nico-footer"><p><b>Why this fits Nico:</b> ${esc(e.why)}</p><p><b>Separate serious follow-up:</b> ${esc(e.follow)}</p></div></article>`}
document.querySelector('#nico-examples').innerHTML=NICO_EXAMPLES.map(nicoCard).join('');
const originalOpenP=openP;
openP=function(id){originalOpenP(id);const e=NICO_EXAMPLES.find(e=>e.source===id);if(!e)return;const block=document.createElement('div');block.className='card nico-drawer';block.innerHTML=`<h3>Adapt this for Nico</h3><p class="nico-eyebrow">${esc(e.audience)}</p><div class="nico-copy">${esc(e.copy)}</div><h4>Second written option</h4><div class="nico-copy">${esc(e.alt)}</div><p><b>Mock screenshot:</b> ${esc(e.brief)}</p><button class="nico-source" data-nico-jump="${e.id}">View the full Nico concept →</button>`;document.querySelector('#dp').insertBefore(block,document.querySelector('#dp .tags').nextSibling)};
document.addEventListener('click',e=>{const b=e.target.closest('[data-nico-jump]');if(!b)return;document.querySelector('#drawer').classList.remove('on');document.querySelector('nav button[data-t="ni"]').click();document.querySelector('#nico-'+b.dataset.nicoJump).scrollIntoView({block:'start'});});
if(location.hash==='#nico')document.querySelector('nav button[data-t="ni"]').click();
