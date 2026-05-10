/* ============================================================
   CONFIG
   Set ENABLE_CLAUDE_API = true once your backend is running.
   ============================================================ */

const ENABLE_CLAUDE_API = false;
const API_URL           = 'http://localhost:3001/api/roast';

/* ============================================================
   DATA
   ============================================================ */

const TIERS = [
  { max: 2,        id: 'critical',    label: 'Critical'    },
  { max: 5,        id: 'urgent',      label: 'Urgent'      },
  { max: 11,       id: 'tight',       label: 'Tight'       },
  { max: 23,       id: 'moderate',    label: 'Moderate'    },
  { max: 47,       id: 'comfortable', label: 'Comfortable' },
  { max: Infinity, id: 'strong',      label: 'Strong'      },
];

const NICKNAMES = {
  stable:      'The Financially Unbothered',
  critical:    'The Free-Fall Spender',
  urgent:      'The Pre-Broke Professional',
  tight:       'The Comfortable Risk-Taker',
  moderate:    'The Almost-Responsible Adult',
  comfortable: 'The Secretly Sensible One',
  strong:      'The Suspiciously Prepared Person',
};

const ROASTS = {
  stable: {
    gentle: "Your income covers your spending — your savings are protected at current levels. That's not luck. That's a choice.",
    spicy:  "Income covers spending? That's called a surplus. Look at you, actually adulting like a functional person.",
    savage: "Your income covers your spending entirely. Some of us are hemorrhaging money and you're just... fine? Rude. Well done.",
  },
  critical: {
    gentle: "Your runway is very short. The good news: finding this calculator was already the smartest financial decision in this data.",
    spicy:  "You're not running out of money — you already have. Bold financial strategy. Very now. Very you.",
    savage: "This isn't a savings account. This is a savings moment. A brief, beautiful, rapidly-concluding moment.",
  },
  urgent: {
    gentle: "A few months of breathing room. Worth making some changes this week — not next Monday. This week.",
    spicy:  "Pre-broke. It's a vibe. An expensive, unsustainable vibe that now has a specific end date.",
    savage: "That's not a runway — it's a driveway. A short one. With a speed bump at the end and no garage in sight.",
  },
  tight: {
    gentle: "Under a year. Stable-ish, but worth building a bigger buffer before life decides to get interesting.",
    spicy:  "Less than a year. Not broke, not fine. Somewhere scenic in the middle with a slightly elevated heart rate.",
    savage: "That's not a financial runway. That's a financial hallway. Narrow. Slightly downhill. Door at the end you haven't opened yet.",
  },
  moderate: {
    gentle: "About a year or two. You're doing okay — now imagine doing slightly better. That's what the tips are for.",
    spicy:  "Respectable. For someone who definitely has a subscription they forgot about three months ago.",
    savage: "Solid! Still not quite enough to stop mentally calculating your share before the waiter arrives.",
  },
  comfortable: {
    gentle: "Nearly 3 years of runway. You're in genuinely solid shape. The tips below are almost optional at this point.",
    spicy:  "Look at you, being financially responsible and somehow still anxious enough to open a roast calculator.",
    savage: "Years of runway and you're here, at this hour, stress-testing a comedy calculator. Therapy is also an investment.",
  },
  strong: {
    gentle: "4+ years of savings. You're doing genuinely well. The tips below are basically homework for an A student.",
    spicy:  "4 years of runway. You came here to feel smug about yourself. It worked. We're complicit. Congratulations.",
    savage: "You don't need a roast. You need a yacht, an exit strategy, and possibly a nemesis to stay motivated.",
  },
};

const TIPS = {
  stable: [
    "Move excess savings into a high-yield account — cash in checking loses value to inflation every month.",
    "Max your employer's pension or 401k match if available. It is literally free money.",
    "Consider speaking to a financial advisor about where to put the surplus to work.",
  ],
  critical: [
    "Call your bank today and pause every non-essential direct debit.",
    "List every subscription you pay for — cancel anything you haven't opened this month.",
    "Look into gig income: even $200/month buys you meaningful extra weeks of runway.",
  ],
  urgent: [
    "Cut your 3 biggest discretionary spends starting this week, not next.",
    "Cook at home at least 4 nights this week — it adds up faster than you think.",
    "Set up an automatic $50/week savings transfer the day you get paid and forget it exists.",
  ],
  tight: [
    "Review subscriptions and cancel 2 you forgot about — you definitely have them.",
    "Meal plan for the week. It cuts grocery bills by roughly 25% with almost no effort.",
    "Redirect any windfalls (refund, bonus, gift) straight to savings before you spend them.",
  ],
  moderate: [
    "Start investing — even $50/month into an index fund compounds meaningfully over time.",
    "Build a proper 3-month emergency fund if you haven't already, then invest the rest.",
    "Audit your insurance policies — there's a good chance you're overpaying somewhere.",
  ],
  comfortable: [
    "Move excess savings to a high-yield account — cash sitting in checking loses value to inflation.",
    "Max your employer's pension match if available. It is free money you are currently leaving on the table.",
    "Diversify — don't hold all your savings in cash when inflation is quietly eating at it.",
  ],
  strong: [
    "Make sure your savings are in a high-yield account, not a basic checking account.",
    "Consider speaking to a financial advisor about deploying the excess more productively.",
    "Help a friend calculate their runway — they probably need this more than you do.",
  ],
};

const LOADING_LINES = [
  "Running the numbers…",
  "Calculating your runway…",
  "Assessing the situation…",
  "Finding the right words…",
  "This might sting a little…",
  "Almost ready…",
];

const FAQS = [
  {
    q: "How is this calculated?",
    a: "We calculate your net monthly burn rate — spending minus income. Then we divide your savings by that number to get your months of runway. Simple division, brutal truth.",
  },
  {
    q: "What does adding monthly income change?",
    a: "Income reduces your net burn rate. If you earn $3,000 per month and spend $3,000 per month, your burn is zero — your savings last indefinitely at current levels.",
  },
  {
    q: "Does this account for inflation or investment returns?",
    a: "No. This is a simple linear projection. Inflation, investment growth, and life events are not factored in. Think of it as a baseline snapshot of your current trajectory, not a financial forecast.",
  },
  {
    q: "Is my data saved anywhere?",
    a: "No. All calculations happen in your browser. Nothing is sent to a server, stored, or tracked. Your numbers stay your numbers.",
  },
  {
    q: "What is the difference between roast levels?",
    a: "Gentle gives you honest feedback without the sting. Spicy adds sarcasm. Savage is dramatic and absurdist — but still punching the situation, not the person. Same numbers, very different delivery.",
  },
  {
    q: "Is this financial advice?",
    a: "No. This tool is for general estimation and entertainment only. The roasts are jokes. The tips are general guidance. For decisions involving significant money, please speak to a qualified financial advisor.",
  },
];

/* ============================================================
   STATE
   ============================================================ */

let currentLevel       = 'gentle';
let lastResult         = null;
let sessionCalcCount   = 0;
let hasStarted         = false;

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initRoastToggle();
  initForm();
  initInputFormatting();
  renderFAQ();
});

/* ============================================================
   ROAST TOGGLE
   ============================================================ */

function initRoastToggle() {
  document.querySelectorAll('.roast-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.roast-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      currentLevel = btn.dataset.level;
    });
  });
}

/* ============================================================
   INPUT FORMATTING
   ============================================================ */

function initInputFormatting() {
  ['savings', 'spending', 'income'].forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener('input', () => {
      formatCurrencyInput(input);
      // Clear field error as user corrects their input
      input.closest('.input-wrapper').classList.remove('has-error');
      const errorEl = document.getElementById('error-msg');
      if (errorEl.classList.contains('visible')) errorEl.classList.remove('visible');
    });
    input.addEventListener('focus', () => {
      if (!hasStarted) {
        hasStarted = true;
        Analytics.track('calculator_started', { roast_level: currentLevel });
      }
    });
  });
}

function formatCurrencyInput(input) {
  const raw     = input.value.replace(/[^0-9.]/g, '');
  const parts   = raw.split('.');
  const integer = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  input.value   = parts.length > 1
    ? `${integer}.${parts[1].slice(0, 2)}`
    : integer;
}

function parseAmount(id) {
  const val = document.getElementById(id).value.replace(/,/g, '');
  return parseFloat(val) || 0;
}

/* ============================================================
   CALCULATION  (pure function — easy to test)
   ============================================================ */

function calculate(savings, spending, income) {
  const burn = spending - income;

  if (burn <= 0) {
    return { stable: true, burn, savings, spending, income };
  }

  const months     = Math.floor(savings / burn);
  const runOutDate = new Date();
  runOutDate.setMonth(runOutDate.getMonth() + months);

  return {
    stable: false,
    months,
    burn,
    savings,
    spending,
    income,
    runOutDate,
    runOutLabel: runOutDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
  };
}

function getTierId(months, isStable) {
  if (isStable) return 'stable';
  return TIERS.find(t => months <= t.max).id;
}

/* ============================================================
   FORM
   ============================================================ */

function initForm() {
  document.getElementById('calculator-form').addEventListener('submit', e => {
    e.preventDefault();
    handleSubmit();
  });
}

function handleSubmit() {
  const savingsEl  = document.getElementById('savings');
  const spendingEl = document.getElementById('spending');
  const incomeEl   = document.getElementById('income');
  const errorEl    = document.getElementById('error-msg');

  // Clear all previous error states
  errorEl.classList.remove('visible');
  [savingsEl, spendingEl, incomeEl].forEach(el =>
    el.closest('.input-wrapper').classList.remove('has-error')
  );

  const savingsRaw  = savingsEl.value.replace(/,/g, '').trim();
  const spendingRaw = spendingEl.value.replace(/,/g, '').trim();
  const incomeRaw   = incomeEl.value.replace(/,/g, '').trim();

  const savings  = parseFloat(savingsRaw)  || 0;
  const spending = parseFloat(spendingRaw) || 0;
  const income   = parseFloat(incomeRaw)   || 0;

  let errorMsg   = '';
  let errorField = null;

  if (savingsRaw === '') {
    errorMsg   = 'Enter your current savings — use 0 if you have nothing saved yet.';
    errorField = savingsEl;
  } else if (savings < 0) {
    errorMsg   = 'Savings can\'t be negative. Enter 0 or more.';
    errorField = savingsEl;
  } else if (spendingRaw === '' || spending <= 0) {
    errorMsg   = 'Monthly spending must be greater than zero — that\'s what determines your burn rate.';
    errorField = spendingEl;
  } else if (income < 0) {
    errorMsg   = 'Monthly income can\'t be negative. Leave it blank or enter 0 if you have no income right now.';
    errorField = incomeEl;
  }

  if (errorMsg) {
    errorEl.textContent = errorMsg;
    errorEl.classList.add('visible');
    if (errorField) {
      errorField.closest('.input-wrapper').classList.add('has-error');
      errorField.focus();
    }
    Analytics.track('form_error', { reason: 'validation_failed' });
    return;
  }

  Analytics.track('calculator_submitted', {
    roast_level: currentLevel,
    has_income:  income > 0,
    is_stable:   spending <= income,
  });

  const result = calculate(savings, spending, income);
  lastResult   = { result, level: currentLevel };
  sessionCalcCount++;

  if (ENABLE_CLAUDE_API) {
    renderLoadingState(result);
    fetchFromAPI(result, currentLevel);
  } else {
    renderResult(result, buildStaticContent(result, currentLevel));
  }
}

/* ============================================================
   STATIC CONTENT BUILDER
   ============================================================ */

function buildStaticContent(result, level) {
  const tierId = getTierId(result.months, result.stable);
  return {
    nickname: NICKNAMES[tierId],
    roast:    ROASTS[tierId][level],
    tips:     TIPS[tierId],
  };
}

/* ============================================================
   CLAUDE API FETCH
   ============================================================ */

async function fetchFromAPI(result, level) {
  const tierId = getTierId(result.months, result.stable);
  const start  = Date.now();

  try {
    const res = await fetch(API_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        savings:     result.savings,
        spending:    result.spending,
        income:      result.income,
        roastLevel:  level,
        monthsLeft:  result.stable ? null : result.months,
        runOutDate:  result.stable ? null : result.runOutLabel,
        netBurn:     result.burn,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();

    Analytics.track('result_viewed', {
      roast_level:    level,
      tier:           tierId,
      api_success:    true,
      api_ms:         Date.now() - start,
      calc_count:     sessionCalcCount,
    });

    renderResult(result, {
      nickname: data.nickname,
      roast:    data.roast,
      tips:     data.tips,
    });

  } catch {
    Analytics.track('result_viewed', {
      roast_level: level,
      tier:        tierId,
      api_success: false,
      calc_count:  sessionCalcCount,
    });
    renderResult(result, buildStaticContent(result, level));
  }
}

/* ============================================================
   LOADING STATE
   ============================================================ */

function renderLoadingState(result) {
  const section = document.getElementById('results');
  const card    = document.getElementById('result-card');

  // Show section
  section.classList.remove('visible');
  void section.offsetWidth;
  section.classList.add('visible');

  // Inject loading skeleton
  card.dataset.level = currentLevel;
  document.getElementById('result-nickname').textContent = '';
  document.getElementById('stat-grid').innerHTML         = buildStatGrid(result);
  document.getElementById('result-roast').textContent    = '';
  document.getElementById('result-tips').innerHTML       = '';

  // Animate loading lines in the roast area
  let i = 0;
  const roastEl = document.getElementById('result-roast');
  roastEl.style.opacity = '0.5';
  roastEl.style.fontStyle = 'normal';
  roastEl.textContent = LOADING_LINES[0];

  const interval = setInterval(() => {
    i = (i + 1) % LOADING_LINES.length;
    roastEl.textContent = LOADING_LINES[i];
  }, 600);

  card._loadingInterval = interval;

  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============================================================
   RENDER RESULT
   ============================================================ */

function renderResult(result, content) {
  const section   = document.getElementById('results');
  const card      = document.getElementById('result-card');
  const nickEl    = document.getElementById('result-nickname');
  const roastEl   = document.getElementById('result-roast');
  const tipsEl    = document.getElementById('result-tips');
  const statGrid  = document.getElementById('stat-grid');

  // Clear any loading interval
  if (card._loadingInterval) {
    clearInterval(card._loadingInterval);
    card._loadingInterval = null;
  }

  // Restore roast style
  roastEl.style.opacity   = '1';
  roastEl.style.fontStyle = 'italic';

  // Set content
  card.dataset.level    = currentLevel;
  nickEl.textContent    = `“${content.nickname}”`;
  roastEl.textContent   = content.roast;
  statGrid.innerHTML    = buildStatGrid(result);
  tipsEl.innerHTML      = content.tips
    .slice(0, 3)
    .map(tip => `<li>${escapeHTML(tip)}</li>`)
    .join('');

  // Animate in
  section.classList.remove('visible');
  void section.offsetWidth;
  section.classList.add('visible');

  if (!ENABLE_CLAUDE_API) {
    Analytics.track('result_viewed', {
      roast_level: currentLevel,
      tier:        getTierId(result.months, result.stable),
      api_success: false,
      calc_count:  sessionCalcCount,
    });
  }

  requestAnimationFrame(() => {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function buildStatGrid(result) {
  if (result.stable) {
    return `
      <div class="stat-box stat-full">
        <span class="stat-value">∞</span>
        <span class="stat-label">Months remaining</span>
      </div>
      <div class="stat-box stat-full">
        <span class="stat-value">Stable</span>
        <span class="stat-label">Income covers spending</span>
      </div>
    `;
  }

  const dateStyle = result.months >= 10
    ? 'font-size: clamp(14px, 4vw, 22px)'
    : '';

  return `
    <div class="stat-box">
      <span class="stat-value">${result.months}</span>
      <span class="stat-label">Months left</span>
    </div>
    <div class="stat-box">
      <span class="stat-value" style="${dateStyle}">${result.runOutLabel}</span>
      <span class="stat-label">Broke by</span>
    </div>
  `;
}

/* ============================================================
   SHARE / COPY
   ============================================================ */

function buildFullCopyText() {
  if (!lastResult) return '';
  const { result, level } = lastResult;
  const nickname = document.getElementById('result-nickname').textContent;
  const roast    = document.getElementById('result-roast').textContent;
  const tips     = [...document.querySelectorAll('#result-tips li')]
    .map((li, i) => `${i + 1}. ${li.textContent}`)
    .join('\n');

  const stats = result.stable
    ? 'Runway: Stable — income covers spending'
    : `Runway: ${result.months} months · Broke by: ${result.runOutLabel}`;

  return [
    '✦ MY SAVINGS RUNWAY',
    nickname,
    '',
    stats,
    '',
    `“${roast}”`,
    '',
    '💡 What I’m doing about it:',
    tips,
    '',
    'savingsroast.com',
  ].join('\n');
}

function buildShortCopyText() {
  if (!lastResult) return '';
  const { result } = lastResult;
  const roast = document.getElementById('result-roast').textContent;
  const intro = result.stable
    ? 'just found out my income covers my spending \u{1F9EA}'
    : `just found out my savings last ${result.months} month${result.months !== 1 ? 's' : ''} 💩`;

  return `${intro}\n\n“${roast}”\n\nsavingsroast.com`;
}

function copyResult() {
  const text = buildFullCopyText();
  const btn  = document.getElementById('copy-btn');

  writeToClipboard(text, () => {
    btn.textContent = '✅ Copied!';
    showToast('Copied. Your financial trauma is now ready to share.');
    setTimeout(() => { btn.innerHTML = '&#128203; Copy My Result'; }, 2500);
    Analytics.track('copy_result_clicked', {
      roast_level: currentLevel,
      tier:        lastResult ? getTierId(lastResult.result.months, lastResult.result.stable) : null,
    });
  });
}

function copyRoast() {
  const text = buildShortCopyText();
  const btn  = document.getElementById('copy-roast-btn');

  writeToClipboard(text, () => {
    btn.textContent = '✅ Copied!';
    showToast('Roast copied. Choose your victim wisely.');
    setTimeout(() => { btn.innerHTML = '&#9988;&#65039; Copy the Roast'; }, 2500);
    Analytics.track('copy_roast_clicked', {
      roast_level: currentLevel,
    });
  });
}

function tweetResult() {
  if (!lastResult) return;
  const { result } = lastResult;
  const nickname   = document.getElementById('result-nickname').textContent;

  const stats = result.stable
    ? 'My income covers my spending 👀'
    : `My savings last ${result.months} month${result.months !== 1 ? 's' : ''} 💩`;

  const tweet = `${stats} — I’m ${nickname}\n\nHow long do yours last?\nsavingsroast.com\n\n#SavingsRunway`;

  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`,
    '_blank',
    'noopener,noreferrer'
  );

  Analytics.track('share_clicked', {
    destination: 'twitter',
    roast_level: currentLevel,
  });
}

function resetForm() {
  const prevTier = lastResult
    ? getTierId(lastResult.result.months, lastResult.result.stable)
    : null;

  Analytics.track('try_again_clicked', {
    session_calc_count: sessionCalcCount,
    previous_tier:      prevTier,
  });

  document.getElementById('results').classList.remove('visible');
  ['savings', 'spending', 'income'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('error-msg').classList.remove('visible');
  lastResult = null;

  document.getElementById('calculator').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function writeToClipboard(text, onSuccess) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(fallback);
  } else {
    fallback();
    onSuccess();
  }

  function fallback() {
    const ta       = document.createElement('textarea');
    ta.value       = text;
    ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
}

/* ============================================================
   TOAST
   ============================================================ */

let toastTimer = null;

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%) translateY(80px);
      background: #1E2235;
      color: #F8FAFC;
      padding: 12px 20px;
      border-radius: 12px;
      font-family: var(--font);
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 8px 30px rgba(0,0,0,0.4);
      border: 1px solid rgba(148,163,184,0.15);
      z-index: 9999;
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 0;
      white-space: nowrap;
      max-width: calc(100vw - 48px);
      text-align: center;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;

  // Slide in
  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity   = '1';
  });

  // Auto-dismiss
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(80px)';
    toast.style.opacity   = '0';
  }, 3000);
}

/* ============================================================
   FAQ
   ============================================================ */

function renderFAQ() {
  const list   = document.getElementById('faq-list');
  list.innerHTML = FAQS.map((item, i) => `
    <div class="faq-item" id="faq-${i}">
      <button
        class="faq-question"
        aria-expanded="false"
        aria-controls="faq-answer-${i}"
        onclick="toggleFAQ(${i})"
      >
        ${escapeHTML(item.q)}
        <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      <div class="faq-answer" id="faq-answer-${i}" role="region">
        ${escapeHTML(item.a)}
      </div>
    </div>
  `).join('');
}

function toggleFAQ(index) {
  const item   = document.getElementById(`faq-${index}`);
  const btn    = item.querySelector('.faq-question');
  const isOpen = item.classList.contains('open');

  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
  });

  if (!isOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

/* ============================================================
   ANALYTICS  (lightweight — swap console.log for gtag/plausible)
   ============================================================ */

const Analytics = {
  track(event, props = {}) {
    const payload = { event, ...props, ts: new Date().toISOString() };

    // GA4 (uncomment when ready)
    // if (typeof gtag !== 'undefined') gtag('event', event, props);

    // Plausible (uncomment when ready)
    // if (typeof plausible !== 'undefined') plausible(event, { props });

    if (location.hostname === 'localhost' || location.protocol === 'file:') {
      console.log('%c[analytics]', 'color:#818CF8;font-weight:bold', event, props);
    }
  },
};

/* ============================================================
   UTILS
   ============================================================ */

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
