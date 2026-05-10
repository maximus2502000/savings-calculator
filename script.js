/* ============================================================
   CONFIG
   ============================================================ */

const ENABLE_CLAUDE_API = false;
const API_URL           = 'http://localhost:3001/api/roast';

/* ============================================================
   DATA — TIERS
   ============================================================ */

const TIERS = [
  { id: 'zero',     maxMonths: 0    },
  { id: 'critical', maxMonths: 1    },
  { id: 'urgent',   maxMonths: 3    },
  { id: 'tight',    maxMonths: 6    },
  { id: 'moderate', maxMonths: 12   },
  { id: 'strong',   maxMonths: Infinity },
];

/* ============================================================
   DATA — LABELS
   ============================================================ */

const STATUS_LABELS = {
  stable:   'Income Positive',
  zero:     'Financial Fire Drill',
  critical: 'Financial Fire Drill',
  urgent:   'Budget Danger Zone',
  tight:    'Limited Runway',
  moderate: 'Breathing Room',
  strong:   'Runway Royalty',
};

const NICKNAMES = {
  stable:   'The Financially Unbothered',
  zero:     'The Living-on-Vibes Visionary',
  critical: 'The Free-Fall Spender',
  urgent:   'The Pre-Broke Professional',
  tight:    'The Comfortable Risk-Taker',
  moderate: 'The Almost-Responsible Adult',
  strong:   'The Suspiciously Prepared Person',
};

/* ============================================================
   DATA — ROAST TEMPLATES  (arrays — one is picked at random)
   ============================================================ */

const ROASTS = {
  stable: [
    "Your income covers your spending entirely. Some of us are hemorrhaging money and you're just... fine? Rude. Well done.",
    "You're not burning savings — you're growing them. This calculator is no place for you. Yet here you are.",
    "Income covers spending. You opened a roast calculator for fun. That's a level of financial security most only dream about.",
    "Your savings aren't running out — they're running up. Disgusting. We love it for you.",
  ],
  zero: [
    "Your savings account is not a runway; it's a welcome mat.",
    "Zero months of runway. You're not living paycheck to paycheck — you're living vibe to vibe.",
    "Your emergency fund has the life expectancy of a houseplant in a dark closet.",
    "Bold strategy: saving nothing and hoping for the best. Chaotic. Committed. Genuinely terrifying.",
  ],
  critical: [
    "Your savings won't survive the month. That's not a runway — it's a very short hallway with the exit blocked.",
    "Less than a month of runway. Your financial safety net is more of a financial sticky note.",
    "Your savings account has the life expectancy of a phone battery at 2%. And you're nowhere near a charger.",
    "Weeks, not months. This is the universe's very direct way of saying the changes start today, not next Monday.",
  ],
  urgent: [
    "Your savings are giving 'I'll figure it out' energy. The deadline for figuring it out is extremely close.",
    "You're not broke, but your budget is sending smoke signals.",
    "1 to 3 months of runway. That's enough time to fix this — if 'soon' means today, not eventually.",
    "Your savings have more optimism than runway. That's both a compliment and a structural warning.",
  ],
  tight: [
    "Honestly, not bad. Your savings have more stability than most group chats.",
    "You're in the yellow zone. Not red, not green — just anxiously, responsibly yellow.",
    "A few months of runway sounds comfortable until you realise that's one unexpected bill away from drama.",
    "Your budget has breathing room, but it's the kind where you're still holding your breath a little.",
  ],
  moderate: [
    "Your finances are stable-ish. Like a table with three legs — functional, but don't lean on it too hard.",
    "Almost a year of runway. You're doing okay. You've also definitely got a subscription you forgot about.",
    "You're financially okay — which in this economy genuinely deserves a round of applause.",
    "9 months of runway. Respectable. For someone who definitely orders delivery more than they admit to.",
  ],
  strong: [
    "A year-plus of runway. You came here to feel smug, and honestly, you earned it.",
    "Your savings have real staying power. Your emergency fund is doing its job. Now you're just showing off.",
    "Over 12 months of runway. You don't need a roast. You need a yacht and an exit strategy.",
    "Your financial runway is an actual runway. Others are working with a driveway.",
  ],
};

/* ============================================================
   DATA — COACH MESSAGES  (arrays — one is picked at random)
   ============================================================ */

const COACH_MESSAGES = {
  stable: [
    "Your income covers your spending — your savings are protected and growing. Now the question is: are they working as hard as they could be?",
    "You've built the foundation. This is the moment to move from maintenance mode into growth mode.",
  ],
  zero: [
    "The most important move right now is any income source you can activate quickly — even $200 extra per month buys you meaningful time and breathing room.",
    "Zero runway is a clear starting point. The goal this week is small: create any margin at all. Even a thin one changes everything.",
  ],
  critical: [
    "Less than a month of runway means this week's decisions really matter. Focus on immediate income and cutting the single biggest expense you can touch.",
    "You've caught this at the right moment — there's still time to act. The goal right now is buying yourself another 30 days.",
  ],
  urgent: [
    "A few months of runway is tight but workable. Small, concrete cuts starting this week can meaningfully extend your timeline.",
    "You're in the yellow zone, not the red. A few deliberate changes now could add months to your runway without turning your life upside down.",
  ],
  tight: [
    "3 to 6 months is a functional buffer — use this breathing room to push toward 6 months, not to relax.",
    "You have real options right now. That's exactly when to make changes — before your back is against the wall.",
  ],
  moderate: [
    "6 to 12 months of runway is solid. This is the time to optimise, not scramble — small wins here compound significantly.",
    "You're in a strong position relative to most. Now's the time to push toward 12 months and start making the surplus work for you.",
  ],
  strong: [
    "With 12+ months of runway, the question shifts from survival to optimisation. Are your savings working as hard as you did to accumulate them?",
    "You've built genuine financial resilience. Now's the time to think about investing, tax efficiency, and long-term goals.",
  ],
};

/* ============================================================
   DATA — TIPS
   ============================================================ */

const TIPS = {
  stable: [
    "Move excess savings into a high-yield account — cash in a basic checking account loses value to inflation every month.",
    "Max your employer's pension or 401k match if available — it's literally free money.",
    "Consider speaking to a financial advisor about where to deploy the surplus more productively.",
  ],
  zero: [
    "Call your bank today and pause every non-essential recurring charge — subscriptions, memberships, anything you don't use weekly.",
    "List every subscription you pay for and cancel anything you haven't opened in the last 30 days.",
    "Any income source helps right now: freelance work, gig work, or selling unused items online can buy you meaningful extra time.",
  ],
  critical: [
    "Pause every non-essential direct debit and subscription — even small recurring charges add up fast.",
    "Look into gig or freelance income immediately: even $200 extra per month changes your runway meaningfully.",
    "Contact any service providers about hardship options — many will defer or reduce payments if you ask.",
  ],
  urgent: [
    "Cut your 3 biggest discretionary spends starting this week, not next week.",
    "Cook at home at least 4 nights this week — it adds up faster than most people realise.",
    "Set up an automatic transfer to savings the day you get paid, before you can spend it.",
  ],
  tight: [
    "Review your subscriptions and cancel 2 you've forgotten about — they're almost certainly there.",
    "Meal plan for the week — it typically cuts grocery bills by around 25% with minimal effort.",
    "Redirect any windfalls (refund, bonus, gift) straight to savings before they disappear into spending.",
  ],
  moderate: [
    "Start investing — even $50 per month into a low-cost index fund compounds meaningfully over time.",
    "Build a 3-month emergency fund if you haven't already, then put anything extra to work.",
    "Audit your insurance policies — there's a good chance you're overpaying somewhere.",
  ],
  strong: [
    "Make sure your savings are in a high-yield account, not sitting in a basic checking account losing value.",
    "Consider speaking to a financial advisor about deploying the excess more productively.",
    "Help a friend calculate their runway — they probably need this more than you do right now.",
  ],
};

/* ============================================================
   DATA — BADGES / RANK SYSTEM
   ============================================================ */

const BADGES = {
  stable:   { emoji: '💰', label: 'Cash Flow Champion'        },
  zero:     { emoji: '🛡️', label: 'Wallet Witness Protection' },
  critical: { emoji: '👻', label: 'Financial Jump Scare'       },
  urgent:   { emoji: '👺', label: 'Budget Goblin'              },
  tight:    { emoji: '🌱', label: 'Breathing Room Beginner'    },
  moderate: { emoji: '🏆', label: 'Savings Survivor'           },
  strong:   { emoji: '👑', label: 'Runway Royalty'             },
};

/* ============================================================
   DATA — LOADING LINES
   ============================================================ */

const LOADING_LINES = [
  "Running the numbers…",
  "Calculating your runway…",
  "Assessing the situation…",
  "Finding the right words…",
  "This might sting a little…",
  "Almost ready…",
];

/* FAQ content is now static HTML in index.html for SEO indexability.
   toggleFAQ() below handles accordion behaviour. */

/* ============================================================
   STATE
   ============================================================ */

let currentMode      = 'both';   // 'roast' | 'coach' | 'both'
let lastResult       = null;
let sessionCalcCount = 0;
let hasStarted       = false;

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initModeToggle();
  initForm();
  initInputFormatting();
  // FAQ is static HTML — no renderFAQ() needed
});

/* ============================================================
   MODE TOGGLE
   ============================================================ */

function initModeToggle() {
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      currentMode = btn.dataset.mode;
      trackEvent('tone_selected', { mode: currentMode });
    });
  });
}

/* ============================================================
   INPUT FORMATTING
   ============================================================ */

function initInputFormatting() {
  ['savings', 'spending', 'income'].forEach(id => {
    const input = document.getElementById(id);
    if (!input) return;
    input.addEventListener('input', () => {
      formatCurrencyInput(input);
      input.closest('.input-wrapper').classList.remove('has-error');
      const errorEl = document.getElementById('error-msg');
      if (errorEl) errorEl.classList.remove('visible');
    });
    input.addEventListener('focus', () => {
      if (!hasStarted) {
        hasStarted = true;
        Analytics.track('calculator_started', { mode: currentMode });
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
  const el = document.getElementById(id);
  if (!el) return 0;
  return parseFloat(el.value.replace(/,/g, '')) || 0;
}

/* ============================================================
   CALCULATION  (pure, decimal — no Math.floor)
   ============================================================ */

function calculate(savings, spending, income) {
  const burn = spending - income;

  if (burn <= 0) {
    return { stable: true, burn, savings, spending, income };
  }

  const months     = savings / burn;                  // Keep decimal
  const runOutDate = new Date();
  runOutDate.setMonth(runOutDate.getMonth() + Math.round(months));

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
  if (isStable)      return 'stable';
  if (months <= 0)   return 'zero';
  if (months < 1)    return 'critical';
  if (months < 3)    return 'urgent';
  if (months < 6)    return 'tight';
  if (months < 12)   return 'moderate';
  return 'strong';
}

function getSeverity(tierId) {
  if (['zero', 'critical', 'urgent'].includes(tierId)) return 'danger';
  if (['tight', 'moderate'].includes(tierId))          return 'caution';
  return 'good';
}

/* ============================================================
   FORMAT DURATION  (intelligent display)
   ============================================================ */

function formatDuration(months) {
  if (months <= 0) return '0 months';

  if (months < 0.25) {
    const days = Math.round(months * 30.44);
    return `about ${days} day${days !== 1 ? 's' : ''}`;
  }

  if (months < 1) {
    const weeks = Math.round(months * 4.33);
    return `about ${weeks} week${weeks !== 1 ? 's' : ''}`;
  }

  if (months <= 24) {
    const rounded = Math.round(months * 10) / 10;
    return `${rounded} month${rounded !== 1 ? 's' : ''}`;
  }

  const years = Math.floor(months / 12);
  const rem   = Math.round(months % 12);
  if (rem === 0) return `${years} year${years !== 1 ? 's' : ''}`;
  return `${years} year${years !== 1 ? 's' : ''} and ${rem} month${rem !== 1 ? 's' : ''}`;
}

/* ============================================================
   RANDOM TEMPLATE PICKER
   ============================================================ */

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* ============================================================
   FORM
   ============================================================ */

function initForm() {
  const form = document.getElementById('calculator-form');
  if (form) form.addEventListener('submit', e => { e.preventDefault(); handleSubmit(); });
}

function handleSubmit() {
  const savingsEl  = document.getElementById('savings');
  const spendingEl = document.getElementById('spending');
  const incomeEl   = document.getElementById('income');
  const errorEl    = document.getElementById('error-msg');

  // Clear all previous error states and aria-invalid
  if (errorEl) errorEl.classList.remove('visible');
  [savingsEl, spendingEl, incomeEl].filter(Boolean).forEach(el => {
    el.closest('.input-wrapper').classList.remove('has-error');
    el.removeAttribute('aria-invalid');
  });

  const savingsRaw  = savingsEl  ? savingsEl.value.replace(/,/g, '').trim()  : '';
  const spendingRaw = spendingEl ? spendingEl.value.replace(/,/g, '').trim() : '';
  const incomeRaw   = incomeEl   ? incomeEl.value.replace(/,/g, '').trim()   : '';

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
    if (errorEl) { errorEl.textContent = errorMsg; errorEl.classList.add('visible'); }
    if (errorField) {
      errorField.closest('.input-wrapper').classList.add('has-error');
      errorField.setAttribute('aria-invalid', 'true');
      errorField.focus();
    }
    Analytics.track('form_error', { reason: 'validation_failed' });
    return;
  }

  Analytics.track('calculator_submitted', {
    mode:      currentMode,
    has_income: income > 0,
    is_stable:  spending <= income,
  });

  const result = calculate(savings, spending, income);
  lastResult   = { result, mode: currentMode };
  sessionCalcCount++;

  if (ENABLE_CLAUDE_API) {
    renderLoadingState(result);
    fetchFromAPI(result, currentMode);
  } else {
    renderResult(result, buildStaticContent(result, currentMode));
  }
}

/* ============================================================
   STATIC CONTENT BUILDER
   ============================================================ */

function buildStaticContent(result, mode) {
  const tierId = getTierId(result.months, result.stable);
  return {
    nickname:     NICKNAMES[tierId]                || NICKNAMES.moderate,
    roast:        randomFrom(ROASTS[tierId]        || ROASTS.moderate),
    coachMessage: randomFrom(COACH_MESSAGES[tierId]|| COACH_MESSAGES.moderate),
    tips:         TIPS[tierId]                     || TIPS.moderate,
  };
}

/* ============================================================
   CLAUDE API FETCH
   ============================================================ */

async function fetchFromAPI(result, mode) {
  const tierId = getTierId(result.months, result.stable);
  const start  = Date.now();

  try {
    const res = await fetch(API_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        savings:    result.savings,
        spending:   result.spending,
        income:     result.income,
        mode,
        monthsLeft: result.stable ? null : result.months,
        runOutDate: result.stable ? null : result.runOutLabel,
        netBurn:    result.burn,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    Analytics.track('result_viewed', {
      mode,
      tier:        tierId,
      api_success: true,
      api_ms:      Date.now() - start,
      calc_count:  sessionCalcCount,
    });

    renderResult(result, {
      nickname:     data.nickname,
      roast:        data.roast,
      coachMessage: data.coachMessage || '',
      tips:         data.tips,
    });

  } catch {
    Analytics.track('result_viewed', {
      mode,
      tier:        tierId,
      api_success: false,
      calc_count:  sessionCalcCount,
    });
    renderResult(result, buildStaticContent(result, mode));
  }
}

/* ============================================================
   LOADING STATE
   ============================================================ */

function renderLoadingState(result) {
  const section = document.getElementById('results');
  const card    = document.getElementById('result-card');
  if (!section || !card) return;

  section.classList.remove('visible');
  void section.offsetWidth;
  section.classList.add('visible');

  card.dataset.tier     = getTierId(result.months, result.stable);
  card.dataset.severity = getSeverity(card.dataset.tier);

  const durationEl = document.getElementById('result-duration');
  const roastEl    = document.getElementById('result-roast');
  if (durationEl) durationEl.textContent = '';
  if (roastEl)    roastEl.textContent    = LOADING_LINES[0];

  let i = 0;
  const interval = setInterval(() => {
    i = (i + 1) % LOADING_LINES.length;
    if (roastEl) roastEl.textContent = LOADING_LINES[i];
  }, 600);
  card._loadingInterval = interval;

  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============================================================
   RENDER RESULT
   ============================================================ */

function renderResult(result, content) {
  const section    = document.getElementById('results');
  const card       = document.getElementById('result-card');
  if (!section || !card) return;

  if (card._loadingInterval) {
    clearInterval(card._loadingInterval);
    card._loadingInterval = null;
  }

  const tierId   = getTierId(result.months, result.stable);
  const severity = getSeverity(tierId);

  card.dataset.tier     = tierId;
  card.dataset.severity = severity;

  // Headline + duration
  const headlineEl = document.getElementById('result-headline');
  const durationEl = document.getElementById('result-duration');
  const statusEl   = document.getElementById('result-status-badge');
  const nickEl     = document.getElementById('result-nickname');
  const roastEl    = document.getElementById('result-roast');
  const coachEl    = document.getElementById('coach-intro');
  const tipsEl     = document.getElementById('result-tips');
  const statGrid   = document.getElementById('stat-grid');
  const roastBlock = document.getElementById('roast-block');
  const coachBlock = document.getElementById('coach-block');

  if (result.stable) {
    if (headlineEl) headlineEl.textContent = "Your income covers your spending";
    if (durationEl) durationEl.textContent = "indefinitely 🎉";
  } else {
    if (headlineEl) headlineEl.textContent = "Your savings will last about";
    if (durationEl) durationEl.textContent = formatDuration(result.months);
  }

  if (statusEl) statusEl.textContent = STATUS_LABELS[tierId] || '';
  if (nickEl)   nickEl.textContent   = `”${content.nickname}”`;
  if (statGrid) statGrid.innerHTML   = buildStatGrid(result);

  // Badge / rank
  const badge        = BADGES[tierId];
  const badgeEmojiEl = document.getElementById('result-badge-emoji');
  const badgeLabelEl = document.getElementById('result-badge-label');
  if (badgeEmojiEl && badge) badgeEmojiEl.textContent = badge.emoji;
  if (badgeLabelEl && badge) badgeLabelEl.textContent = badge.label;

  // Roast
  if (roastEl) {
    roastEl.textContent  = content.roast || '';
    roastEl.style.fontStyle = 'italic';
    roastEl.style.opacity   = '1';
  }

  // Coach intro
  if (coachEl) coachEl.textContent = content.coachMessage || '';

  // Tips
  if (tipsEl) {
    tipsEl.innerHTML = (content.tips || [])
      .slice(0, 3)
      .map(tip => `<li>${escapeHTML(tip)}</li>`)
      .join('');
  }

  // Show / hide blocks by mode
  if (roastBlock) roastBlock.style.display = currentMode === 'coach' ? 'none' : '';
  if (coachBlock) coachBlock.style.display = currentMode === 'roast' ? 'none' : '';

  // Hide the calc-prompt
  const prompt = document.getElementById('calc-prompt');
  if (prompt) prompt.style.display = 'none';

  // Render What-If section
  renderWhatIf(result);

  // Render savings projection graph
  renderSavingsGraph(result);

  // Animate in
  section.classList.remove('visible');
  void section.offsetWidth;
  section.classList.add('visible');

  Analytics.track('result_viewed', {
    mode:       currentMode,
    tier:       tierId,
    calc_count: sessionCalcCount,
  });
  trackEvent('result_generated', { tier: tierId, mode: currentMode });

  requestAnimationFrame(() => {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ============================================================
   STAT GRID
   ============================================================ */

function buildStatGrid(result) {
  if (result.stable) {
    const surplus = Math.round(result.income - result.spending).toLocaleString();
    return `
      <div class="stat-box">
        <span class="stat-value">+$${surplus}</span>
        <span class="stat-label">Monthly surplus</span>
      </div>
      <div class="stat-box">
        <span class="stat-value" style="font-size:clamp(18px,4vw,26px)">Growing &#10003;</span>
        <span class="stat-label">Savings status</span>
      </div>
    `;
  }

  if (result.months <= 0) {
    return `
      <div class="stat-box stat-full">
        <span class="stat-value" style="color:var(--accent-savage)">Act now</span>
        <span class="stat-label">Runway is exhausted</span>
      </div>
    `;
  }

  const burnDisplay = `$${Math.round(result.burn).toLocaleString()}`;
  const dateStyle   = result.runOutLabel && result.runOutLabel.length > 12
    ? 'font-size:clamp(13px,3.5vw,20px)'
    : '';

  return `
    <div class="stat-box">
      <span class="stat-value">${burnDisplay}</span>
      <span class="stat-label">Monthly burn</span>
    </div>
    <div class="stat-box">
      <span class="stat-value" style="${dateStyle}">${result.runOutLabel}</span>
      <span class="stat-label">Estimated run-out</span>
    </div>
  `;
}

/* ============================================================
   SHARE / COPY
   ============================================================ */

function buildFullCopyText() {
  if (!lastResult) return '';
  const { result } = lastResult;
  const nickname   = document.getElementById('result-nickname')?.textContent || '';
  const duration   = document.getElementById('result-duration')?.textContent || '';
  const roastEl    = document.getElementById('result-roast');
  const roast      = roastEl && roastEl.closest('#roast-block')?.style.display !== 'none'
    ? roastEl.textContent
    : '';
  const tips = [...document.querySelectorAll('#result-tips li')]
    .map((li, i) => `${i + 1}. ${li.textContent}`)
    .join('\n');

  const stats = result.stable
    ? 'Status: Income covers spending'
    : `Runway: ${duration} · Run-out: ${result.runOutLabel}`;

  return [
    '✦ MY SAVINGS RUNWAY',
    nickname,
    '',
    stats,
    roast ? `\n"${roast}"` : '',
    '',
    '💡 What I’m doing about it:',
    tips,
    '',
    'savingsroast.com',
  ].filter(l => l !== undefined).join('\n');
}

function buildShortCopyText() {
  if (!lastResult) return '';
  const { result } = lastResult;
  const duration   = document.getElementById('result-duration')?.textContent || '';
  const roastEl    = document.getElementById('result-roast');
  const roast      = roastEl && roastEl.closest('#roast-block')?.style.display !== 'none'
    ? (roastEl.textContent || '') : '';
  const tierId     = getTierId(result.months, result.stable);
  const badge      = BADGES[tierId];

  const runwayLine = result.stable
    ? `My income covers my spending — I'm a ${badge?.label || 'Cash Flow Champion'} ${badge?.emoji || '💰'}`
    : `My savings will last about ${duration}`;

  const roastLine = roast
    ? `\n\nSavings Roast says: "${roast.length > 120 ? roast.slice(0, 117) + '…' : roast}"`
    : '';

  return `${runwayLine}.${roastLine}\n\nTry yours at savingsroast.com`;
}

function copyResult() {
  const text = buildFullCopyText();
  const btn  = document.getElementById('copy-btn');
  writeToClipboard(text, () => {
    if (btn) btn.textContent = '✅ Copied!';
    showToast('Copied. Your financial situation is now ready to share.');
    setTimeout(() => { if (btn) btn.innerHTML = '&#128203; Copy My Result'; }, 2500);
    Analytics.track('copy_result_clicked', { mode: currentMode });
  });
}

function copyRoast() {
  const text = buildShortCopyText();
  const btn  = document.getElementById('copy-roast-btn');
  writeToClipboard(text, () => {
    if (btn) btn.textContent = '✅ Copied!';
    showToast('Roast copied. Choose your victim wisely.');
    setTimeout(() => { if (btn) btn.innerHTML = '&#9988;&#65039; Copy the Roast'; }, 2500);
    Analytics.track('copy_roast_clicked', { mode: currentMode });
  });
}

function tweetResult() {
  if (!lastResult) return;
  const { result }   = lastResult;
  const nickname     = document.getElementById('result-nickname')?.textContent || '';
  const duration     = document.getElementById('result-duration')?.textContent || '';

  const stats = result.stable
    ? 'My income covers my spending 👀'
    : `My savings last ${duration} 💩`;

  const tweet = `${stats} — I’m ${nickname}\n\nHow long do yours last?\nsavingsroast.com\n\n#SavingsRunway`;

  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`,
    '_blank',
    'noopener,noreferrer'
  );

  Analytics.track('share_clicked', { destination: 'twitter', mode: currentMode });
}

function resetForm() {
  const prevTier = lastResult
    ? getTierId(lastResult.result.months, lastResult.result.stable)
    : null;

  Analytics.track('try_again_clicked', {
    session_calc_count: sessionCalcCount,
    previous_tier:      prevTier,
  });

  document.getElementById('results')?.classList.remove('visible');
  ['savings', 'spending', 'income'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('error-msg')?.classList.remove('visible');
  lastResult = null;

  // Restore calc-prompt, hide what-if and projection
  const prompt  = document.getElementById('calc-prompt');
  if (prompt) prompt.style.display = '';
  const whatif  = document.getElementById('whatif-section');
  if (whatif) whatif.style.display = 'none';
  const proj    = document.getElementById('projection-section');
  if (proj) proj.style.display = 'none';

  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function writeToClipboard(text, onSuccess) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(fallback);
  } else {
    fallback();
    onSuccess();
  }

  function fallback() {
    const ta         = document.createElement('textarea');
    ta.value         = text;
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
      position:fixed;bottom:24px;left:50%;
      transform:translateX(-50%) translateY(80px);
      background:#1E2235;color:#F8FAFC;
      padding:12px 20px;border-radius:12px;
      font-family:var(--font);font-size:14px;font-weight:500;
      box-shadow:0 8px 30px rgba(0,0,0,0.4);
      border:1px solid rgba(148,163,184,0.15);
      z-index:9999;transition:transform 0.3s ease,opacity 0.3s ease;
      opacity:0;white-space:nowrap;
      max-width:calc(100vw - 48px);text-align:center;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity   = '1';
  });
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(80px)';
    toast.style.opacity   = '0';
  }, 3000);
}

/* ============================================================
   ANALYTICS — PUBLIC API
   ============================================================ */

// trackEvent is a clean public wrapper — swap Analytics.track for any provider
function trackEvent(eventName, props = {}) {
  Analytics.track(eventName, props);
}

/* ============================================================
   FAQ ACCORDION  (content is static HTML; JS handles open/close)
   ============================================================ */

function toggleFAQ(index) {
  const item   = document.getElementById(`faq-${index}`);
  const btn    = item?.querySelector('.faq-question');
  const isOpen = item?.classList.contains('open');

  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
  });

  if (!isOpen && item && btn) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

/* ============================================================
   ANALYTICS
   ============================================================ */

const Analytics = {
  track(event, props = {}) {
    // GA4  — uncomment when ready:
    // if (typeof gtag !== 'undefined') gtag('event', event, props);
    // Plausible:
    // if (typeof plausible !== 'undefined') plausible(event, { props });
    if (location.hostname === 'localhost' || location.protocol === 'file:') {
      console.log('%c[analytics]', 'color:#818CF8;font-weight:bold', event, props);
    }
  },
};

/* ============================================================
   SAVINGS PROJECTION GRAPH
   ============================================================ */

/**
 * generateSavingsProjection
 * Returns an array of { month, balance } data points.
 * - burn > 0 : savings decrease → project until $0 (max 36 months)
 * - burn = 0 : flat line → 12 months
 * - burn < 0 : savings grow  → 12 months
 * Balance is always clamped to 0 (never negative).
 */
function generateSavingsProjection(savings, spending, income) {
  const burn   = spending - income;
  const points = [];

  if (savings <= 0 && burn >= 0) {
    // Already at $0 and still burning — flat at zero
    return [{ month: 0, balance: 0 }, { month: 6, balance: 0 }, { month: 12, balance: 0 }];
  }

  if (burn > 0) {
    const naturalEnd = Math.ceil(savings / burn);
    const maxM       = Math.min(naturalEnd, 36);
    for (let m = 0; m <= maxM; m++) {
      const bal = Math.max(0, savings - burn * m);
      points.push({ month: m, balance: Math.round(bal) });
      if (bal <= 0) break;
    }
  } else if (burn === 0) {
    for (let m = 0; m <= 12; m++) {
      points.push({ month: m, balance: Math.round(savings) });
    }
  } else {
    const surplus = Math.abs(burn);
    for (let m = 0; m <= 12; m++) {
      points.push({ month: m, balance: Math.round(savings + surplus * m) });
    }
  }

  return points;
}

/** Linear-interpolate (or clamp) to find balance at an arbitrary target month. */
function getMilestoneBalance(points, targetMonth) {
  const exact = points.find(p => p.month === targetMonth);
  if (exact !== undefined) return exact.balance;

  const last = points[points.length - 1];
  if (targetMonth > last.month) return last.balance; // clamped at end

  const before = [...points].reverse().find(p => p.month <= targetMonth);
  const after  = points.find(p => p.month >= targetMonth);
  if (!before || !after || before.month === after.month) return before?.balance ?? 0;
  const ratio = (targetMonth - before.month) / (after.month - before.month);
  return Math.max(0, Math.round(before.balance + ratio * (after.balance - before.balance)));
}

/** Entry point — populates the graph card. */
function renderSavingsGraph(result) {
  const section   = document.getElementById('projection-section');
  const svgEl     = document.getElementById('projection-svg');
  const summaryEl = document.getElementById('projection-summary');
  const milestEl  = document.getElementById('projection-milestones');
  if (!section || !svgEl) return;

  const { savings, spending, income } = result;
  const burn   = spending - income;
  const points = generateSavingsProjection(savings, spending, income);

  // SVG chart
  svgEl.innerHTML = buildSVGChart(points, burn);

  // Plain-English summary (accessible text alternative to chart)
  if (summaryEl) {
    summaryEl.textContent         = buildProjectionSummary(savings, burn, points);
    summaryEl.style.borderLeftColor = burn > 0 ? 'var(--accent-savage)'
      : burn < 0  ? 'var(--accent-gentle)'
      :               'var(--accent)';
    summaryEl.style.background    = burn > 0 ? '#FEF2F2'
      : burn < 0  ? '#F0FDF4'
      :               '#F5F3FF';
  }

  // Milestone cards (3, 6, 12 months)
  if (milestEl) {
    milestEl.innerHTML = [3, 6, 12].map(m => {
      const bal = getMilestoneBalance(points, m);
      return `<div class="milestone-card">
        <span class="milestone-month">In ${m} months</span>
        <span class="milestone-balance">$${bal.toLocaleString()}</span>
      </div>`;
    }).join('');
  }

  section.style.display = '';
}

/** Plain-English summary string. */
function buildProjectionSummary(savings, burn, points) {
  const fmt = n => `$${Math.round(Math.abs(n)).toLocaleString()}`;

  if (savings <= 0 && burn >= 0) {
    return 'Your savings are already at $0. Without income that covers your spending, any expenses will require borrowing.';
  }
  if (burn > 0) {
    const last = points[points.length - 1];
    const mo   = last.month;
    return `Based on your current numbers, your savings are projected to fall from ${fmt(savings)} to $0 in about ${mo} month${mo !== 1 ? 's' : ''}.`;
  }
  if (burn === 0) {
    return `Your income exactly covers your spending, so your savings are projected to stay steady at ${fmt(savings)}.`;
  }
  return `Your income exceeds your spending, so your savings are projected to grow by about ${fmt(Math.abs(burn))}/month.`;
}

/** Build the SVG markup as a string — no external libraries. */
function buildSVGChart(points, burn) {
  const W   = 540, H = 220;
  const PAD = { top: 20, right: 20, bottom: 38, left: 60 };
  const cW  = W - PAD.left - PAD.right;
  const cH  = H - PAD.top  - PAD.bottom;

  const maxBal  = Math.max(...points.map(p => p.balance), 1);
  const maxMo   = Math.max(points[points.length - 1].month, 1);

  const sx = m => PAD.left + (m / maxMo) * cW;
  const sy = b => PAD.top  + cH - (b / maxBal) * cH;

  const colour = burn > 0 ? '#EF4444' : burn < 0 ? '#22C55E' : '#6366F1';

  // Line and fill paths
  const linePath = points.map((p, i) =>
    `${i === 0 ? 'M' : 'L'}${sx(p.month).toFixed(1)},${sy(p.balance).toFixed(1)}`
  ).join(' ');
  const fillPath = `${linePath} L${sx(maxMo).toFixed(1)},${(PAD.top + cH).toFixed(1)} L${PAD.left},${(PAD.top + cH).toFixed(1)} Z`;

  // Y-axis ticks (5 levels from 0 to max)
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map(f => Math.round(maxBal * f));
  const fmtY   = v => {
    if (v === 0) return '$0';
    if (v >= 10000) return `$${Math.round(v / 1000)}k`;
    if (v >= 1000)  return `$${(v / 1000).toFixed(1).replace(/\.0$/, '')}k`;
    return `$${v}`;
  };

  // X-axis ticks — spacing adapts to range
  const xStep  = maxMo <= 6 ? 1 : maxMo <= 12 ? 2 : maxMo <= 24 ? 4 : 6;
  const xTicks = [];
  for (let m = 0; m <= maxMo; m += xStep) xTicks.push(m);
  if (xTicks[xTicks.length - 1] !== maxMo) xTicks.push(maxMo);

  const gridLines = yTicks.map(v =>
    `<line x1="${PAD.left}" y1="${sy(v).toFixed(1)}" x2="${W - PAD.right}" y2="${sy(v).toFixed(1)}" stroke="#E5E7EB" stroke-width="1" stroke-dasharray="3,3"/>`
  ).join('');

  const yLabels = yTicks.map(v =>
    `<text x="${PAD.left - 6}" y="${sy(v).toFixed(1)}" text-anchor="end" dominant-baseline="middle" font-family="Arial,sans-serif" font-size="11" fill="#9CA3AF">${fmtY(v)}</text>`
  ).join('');

  const xLabels = xTicks.map(m =>
    `<text x="${sx(m).toFixed(1)}" y="${(PAD.top + cH + 16).toFixed(1)}" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" fill="#9CA3AF">${m}mo</text>`
  ).join('');

  // Endpoint dots (start + end of line)
  const first = points[0];
  const last  = points[points.length - 1];
  const dots  = [
    `<circle cx="${sx(first.month).toFixed(1)}" cy="${sy(first.balance).toFixed(1)}" r="4" fill="${colour}" stroke="white" stroke-width="2"/>`,
    `<circle cx="${sx(last.month).toFixed(1)}"  cy="${sy(last.balance).toFixed(1)}"  r="5" fill="${colour}" stroke="white" stroke-width="2"/>`,
  ].join('');

  return `<defs>
    <linearGradient id="projGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="${colour}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${colour}" stop-opacity="0.01"/>
    </linearGradient>
  </defs>
  ${gridLines}
  <path d="${fillPath}" fill="url(#projGrad)"/>
  <path d="${linePath}" fill="none" stroke="${colour}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  ${dots}
  ${yLabels}
  ${xLabels}`;
}

/* ============================================================
   COPY LINK
   ============================================================ */

function copyLink() {
  writeToClipboard('https://savingsroast.com', () => {
    showToast('Link copied! Share savingsroast.com with a friend.');
    Analytics.track('copy_link_clicked');
  });
}

/* ============================================================
   WHAT-IF SIMULATOR
   ============================================================ */

function renderWhatIf(result) {
  const section = document.getElementById('whatif-section');
  const grid    = document.getElementById('whatif-grid');
  if (!section || !grid) return;

  const scenarios = [
    { label: '✂️ Cut $100/mo',  newSpend: result.spending - 100, newIncome: result.income       },
    { label: '✂️ Cut $250/mo',  newSpend: result.spending - 250, newIncome: result.income       },
    { label: '✂️ Cut $500/mo',  newSpend: result.spending - 500, newIncome: result.income       },
    { label: '💼 +$100 income', newSpend: result.spending,       newIncome: result.income + 100 },
    { label: '💼 +$250 income', newSpend: result.spending,       newIncome: result.income + 250 },
    { label: '💼 +$500 income', newSpend: result.spending,       newIncome: result.income + 500 },
  ];

  grid.innerHTML = scenarios.map(s => {
    const effSpend = Math.max(0, s.newSpend);
    const newBurn  = effSpend - s.newIncome;
    let impact     = '';
    let positive   = false;

    if (result.stable) {
      // Already stable — show extra monthly savings
      const adj    = Math.abs(s.newSpend < result.spending
        ? result.spending - s.newSpend
        : s.newIncome - result.income);
      impact   = `+$${adj.toLocaleString()}/mo more saved`;
      positive = true;

    } else if (newBurn <= 0) {
      impact   = 'Income covers spending! 🎉';
      positive = true;

    } else {
      const newMonths = result.savings / newBurn;
      const extra     = newMonths - result.months;
      if (extra < 0.1) {
        impact   = 'Less than a week extra';
        positive = false;
      } else {
        impact   = `+${formatDuration(extra)} extra`;
        positive = true;
      }
    }

    return `
      <div class="whatif-item${positive ? ' whatif-item--positive' : ''}">
        <span class="whatif-label">${escapeHTML(s.label)}</span>
        <span class="whatif-impact">${escapeHTML(impact)}</span>
      </div>`;
  }).join('');

  section.style.display = '';
}

/* ============================================================
   DOWNLOAD SHARE CARD  (HTML Canvas — no dependencies)
   ============================================================ */

function downloadShareCard() {
  if (!lastResult) { showToast('Calculate your runway first!'); return; }

  const { result } = lastResult;
  const tierId     = getTierId(result.months, result.stable);
  const badge      = BADGES[tierId];
  const duration   = result.stable ? 'Indefinitely' : formatDuration(result.months);
  const roastEl    = document.getElementById('result-roast');
  const rawRoast   = roastEl && roastEl.closest('#roast-block')?.style.display !== 'none'
    ? (roastEl.textContent || '').trim() : '';
  const roast      = rawRoast.length > 110 ? rawRoast.slice(0, 107) + '…' : rawRoast;

  const SIZE   = 800;
  const canvas = document.createElement('canvas');
  canvas.width  = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext('2d');

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, SIZE, SIZE);
  grad.addColorStop(0, '#2D1B69');
  grad.addColorStop(1, '#4C1D95');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, SIZE, SIZE);

  // Glow orb (top-right)
  const glow = ctx.createRadialGradient(650, 100, 0, 650, 100, 320);
  glow.addColorStop(0, 'rgba(139, 92, 246, 0.28)');
  glow.addColorStop(1, 'rgba(139, 92, 246, 0)');
  ctx.fillStyle = glow;
  ctx.beginPath(); ctx.arc(650, 100, 320, 0, Math.PI * 2); ctx.fill();

  ctx.textAlign    = 'center';
  ctx.textBaseline = 'middle';

  // Brand label
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font      = 'bold 18px Arial, sans-serif';
  ctx.fillText('SAVINGS ROAST', SIZE / 2, 56);

  // Badge emoji
  ctx.font = '68px Arial, sans-serif';
  ctx.fillText(badge.emoji, SIZE / 2, 150);

  // Badge label
  ctx.fillStyle = '#FCD34D';
  ctx.font      = 'bold 26px Arial, sans-serif';
  ctx.fillText(badge.label.toUpperCase(), SIZE / 2, 214);

  // Duration (big number — shrink if too wide)
  ctx.fillStyle = '#FFFFFF';
  let fontSize  = 92;
  ctx.font      = `900 ${fontSize}px Arial, sans-serif`;
  const maxW    = SIZE - 80;
  while (ctx.measureText(duration).width > maxW && fontSize > 36) {
    fontSize -= 4;
    ctx.font = `900 ${fontSize}px Arial, sans-serif`;
  }
  ctx.fillText(duration, SIZE / 2, 330);

  // Sub-label under duration
  ctx.fillStyle = 'rgba(255,255,255,0.48)';
  ctx.font      = '600 20px Arial, sans-serif';
  const subLabel = result.stable ? 'Your income covers your spending' : 'of savings runway';
  ctx.fillText(subLabel, SIZE / 2, 388);

  // Divider
  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.lineWidth   = 1;
  ctx.beginPath();
  ctx.moveTo(80, 424); ctx.lineTo(720, 424);
  ctx.stroke();

  // Roast quote (wrapped text)
  if (roast) {
    ctx.fillStyle = 'rgba(255,255,255,0.78)';
    ctx.font      = 'italic 22px Arial, sans-serif';
    wrapCanvasText(ctx, `"${roast}"`, SIZE / 2, 478, maxW - 40, 32);
  }

  // URL
  ctx.fillStyle = 'rgba(255,255,255,0.32)';
  ctx.font      = 'bold 20px Arial, sans-serif';
  ctx.fillText('savingsroast.com', SIZE / 2, 752);

  // Download the image
  canvas.toBlob(blob => {
    if (!blob) return;
    const url  = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'savings-roast-card.png';
    link.href     = url;
    link.click();
    URL.revokeObjectURL(url);
  }, 'image/png');

  showToast('Card downloaded! Share it anywhere. 🎉');
  Analytics.track('share_card_downloaded', { tier: tierId });
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const words     = text.split(' ');
  let   line      = '';
  let   currentY  = y;
  for (const word of words) {
    const test = line ? line + ' ' + word : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line      = word;
      currentY += lineHeight;
    } else {
      line = test;
    }
  }
  if (line) ctx.fillText(line, x, currentY);
}

/* ============================================================
   UTILS
   ============================================================ */

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
