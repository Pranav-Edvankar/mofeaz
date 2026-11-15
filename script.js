/**
 * MOFEAZ — Cycle-Synced Seed Nutrition
 * JavaScript Controller: Lenis Smooth Scroll, Splash Screen Reveal, Cart System,
 * Bento Interactive Calculator, Quick View Modal, and Parallax.
 */

// ==========================================================================
// 1. PRODUCT DATABASE (All 6 Signature Mofeaz Products)
// ==========================================================================
const MOFEAZ_PRODUCTS = {
  'prod-kit-28': {
    id: 'prod-kit-28',
    title: 'The Complete 28-Day Seed Cycling Kit',
    category: 'FULL 28-DAY CYCLE // 28 BARS (2x 14-BAR BOXES)',
    price: 1329,
    comparePrice: 1661,
    image: 'assets/images/mockup-ritual-kit-box-transparent.png',
    tag: 'SIGNATURE RITUAL',
    phase: 'Dual Phase (Follicular & Luteal)',
    description: 'The complete monthly hormone balance system formulated by clinical nutritionist Swetta Sharma. Includes 14 Follicular Bars (Flax & Pumpkin) and 14 Luteal Bars (Sesame & Sunflower) in our signature tactile dual-box dispenser set.',
    ingredients: 'Flaxseeds, Pumpkin Seeds, Sesame Seeds, Sunflower Seeds, Raw Cacao (70%), Medjool Dates, Coffee, Ceylon Cinnamon, Fleur de Sel.',
    nutrition: '100% whole seeds cold-milled below 38°C. Delivers 1 full clinical tablespoon of functional seeds per day (high in Zinc, Selenium, Lignans & Omega-3s). 0g added sugar.',
    pcosBenefit: 'Optimal for irregular cycles, PCOS, post-birth control transition, or perimenopause balance.'
  },
  'prod-foll-cacao': {
    id: 'prod-foll-cacao',
    title: 'Follicular Chocolate Bar (50g)',
    category: 'PHASE 01 // DAYS 1–14',
    price: 1329,
    comparePrice: 1661,
    image: 'assets/images/mockup-follicular-bar-transparent.png',
    tag: 'ESTROGEN HARMONY',
    phase: 'Phase 01: Follicular',
    description: 'Formulated with organic cold-milled golden flax and toasted green pumpkin seeds blended with 70% dark raw cacao. Supports follicle maturation, healthy estrogen production, and radiant skin.',
    ingredients: 'Cold-pressed Golden Flaxseeds, Roasted Pumpkin Seeds, 70% Raw Cacao, Medjool Dates, Pink Himalayan Salt.',
    nutrition: 'Per 50g bar: 6.5g Plant Protein, 5.2mg Zinc (52% RDA), 2400mg Omega-3 ALA, 0g Added Sugar.',
    pcosBenefit: 'Flax lignans bind excess estrogen while pumpkin zinc supports healthy ovulation.'
  },
  'prod-lute-sesame': {
    id: 'prod-lute-sesame',
    title: 'Luteal Chocolate Bar (50g)',
    category: 'PHASE 02 // DAYS 15–28',
    price: 1329,
    comparePrice: 1661,
    image: 'assets/images/mockup-luteal-bar-transparent.png',
    tag: 'PROGESTERONE CALM',
    phase: 'Phase 02: Luteal',
    description: 'Formulated with toasted white and black sesame seeds and crunchy sunflower kernels in rich dark cacao. Packed with natural selenium and vitamin E to nurture progesterone levels, calm pre-period irritability, and banish cramps.',
    ingredients: 'Toasted White Sesame Seeds, Black Sesame Seeds, Sunflower Seeds, 70% Dark Cacao, Medjool Dates, Flaky Sea Salt.',
    nutrition: 'Per 50g bar: 7g Plant Protein, 30mcg Selenium (55% RDA), 6.5mg Vitamin E, High Calcium.',
    pcosBenefit: 'Sesame phytosterols and sunflower selenium nurture corpus luteum progesterone production.'
  },
  'prod-foll-espresso': {
    id: 'prod-foll-espresso',
    title: 'Follicular Coffee Bar (50g)',
    category: 'PHASE 01 // MORNING VITALITY',
    price: 1329,
    comparePrice: 1661,
    image: 'assets/images/mockup-follicular-coffee.png',
    tag: 'MORNING VITALITY',
    phase: 'Phase 01: Follicular',
    description: 'A morning ritual essential. Cold-milled flax and pumpkin seeds ground with shade-grown aromatic coffee. Delivers alert focus without spiking stress cortisol.',
    ingredients: 'Organic Pumpkin Seeds, Golden Flaxseeds, Roasted Arabica Coffee, Medjool Dates.',
    nutrition: 'Per 50g bar: 6g Protein, 40mg Gentle Natural Caffeine, High Zinc & Magnesium.',
    pcosBenefit: 'Clean metabolic stimulation without the caffeine-induced blood sugar spike.'
  },
  'prod-lute-almond': {
    id: 'prod-lute-almond',
    title: 'Luteal Coffee Bar (50g)',
    category: 'PHASE 02 // PMS SOOTHER',
    price: 1329,
    comparePrice: 1661,
    image: 'assets/images/mockup-luteal-coffee.png',
    tag: 'PMS & CRAMP DEFENSE',
    phase: 'Phase 02: Luteal',
    description: 'Raw sesame and sunflower seeds paired with roasted coffee, dark chocolate, and Ceylon cinnamon. High magnesium content helps relax uterine contractions and ease mood swings.',
    ingredients: 'Sunflower Seeds, Sesame Seeds, Roasted Coffee, Ceylon Cinnamon, Medjool Dates.',
    nutrition: 'Per 50g bar: 7.2g Protein, 98mg Bioavailable Magnesium (26% RDA), Vitamin B6.',
    pcosBenefit: 'Magnesium and Vitamin B6 synergistically soothe bloating and water retention.'
  },
  'prod-cycle-duo': {
    id: 'prod-cycle-duo',
    title: 'The 28-Day Cycle Ritual Duo (2x 50g)',
    category: '2-PHASE FOUNDATIONAL COMPANION // 2X 50G',
    price: 398,
    comparePrice: 498,
    image: 'assets/images/mockup-cycle-duo-bars.png',
    tag: 'FOUNDATIONAL DUO',
    phase: 'Dual Phase (Follicular & Luteal)',
    description: 'The essential starter pair. Includes one Follicular Phase Cacao Bar (50g) and one Luteal Phase Sesame-Sunflower Bar (50g) in individual presentation boxes.',
    ingredients: 'Flaxseeds, Pumpkin Seeds, Sesame Seeds, Sunflower Seeds, 70% Raw Cacao, Medjool Dates.',
    nutrition: '100% whole cold-milled seeds. Zero added sugar. 2 full 50g functional dark chocolate bars.',
    pcosBenefit: 'Experience the tactile ritual of cycle syncing before committing to full multi-pack kits.'
  },
  'prod-coffee-duo': {
    id: 'prod-coffee-duo',
    title: 'Functional Coffee Ritual Duo (2x 50g)',
    category: 'COFFEE LINE // 2X 50G',
    price: 398,
    comparePrice: 498,
    image: 'assets/images/mockup-coffee-duo.png',
    tag: 'MORNING COFFEE DUO',
    phase: 'Dual Phase Coffee Ritual',
    description: 'Morning energy perfectly cycle-synced. Includes Follicular Espresso Bar (50g) and Luteal Roasted Coffee Bar (50g) in individual presentation boxes.',
    ingredients: 'Pumpkin Seeds, Flaxseeds, Sunflower Seeds, Sesame Seeds, Roasted Arabica Coffee, Medjool Dates.',
    nutrition: 'Clean plant energy with gentle slow-release caffeine and whole hormone-balancing seeds.',
    pcosBenefit: 'Prevents morning cortisol spikes while nourishing endocrine pathways.'
  },
  'prod-box-14-foll': {
    id: 'prod-box-14-foll',
    title: '14-Bar Follicular Ritual Box (490g)',
    category: 'PHASE 01 DISPENSER // 14 BARS',
    price: 1329,
    comparePrice: 1661,
    image: 'assets/images/mockup-14bar-follicular-box.png',
    tag: '14-DAY DISPENSER',
    phase: 'Phase 01: Days 1–14',
    description: 'Front-tuck counter dispenser box in Sacred Forest Green with gold foil engraving. Holds 14 individually wrapped daily Follicular bars (35g each) formulated with organic pumpkin and flax seeds.',
    ingredients: 'Cold-pressed Golden Flaxseeds, Roasted Pumpkin Seeds, 70% Raw Cacao, Medjool Dates, Pink Himalayan Salt.',
    nutrition: '14 daily clinical doses. High in Zinc, Lignans, and plant Omega-3 ALA.',
    pcosBenefit: 'Effortless counter dispenser ensures zero missed days during estrogen building.'
  },
  'prod-box-14-lute': {
    id: 'prod-box-14-lute',
    title: '14-Bar Luteal Ritual Box (490g)',
    category: 'PHASE 02 DISPENSER // 14 BARS',
    price: 1329,
    comparePrice: 1661,
    image: 'assets/images/mockup-14bar-luteal-box.png',
    tag: '14-DAY DISPENSER',
    phase: 'Phase 02: Days 15–28',
    description: 'Front-tuck counter dispenser box in Terracotta Clay with copper foil engraving. Holds 14 individually wrapped daily Luteal bars (35g each) formulated with sesame and sunflower seeds.',
    ingredients: 'Toasted White Sesame Seeds, Black Sesame Seeds, Sunflower Seeds, 70% Dark Cacao, Medjool Dates, Flaky Sea Salt.',
    nutrition: '14 daily clinical doses. High in bioavailable Selenium, Vitamin E, and Magnesium.',
    pcosBenefit: 'Maintains progesterone stability to relieve PMS mood swings and cramps.'
  },
  'prod-sub-3mo': {
    id: 'prod-sub-3mo',
    title: '3 Months Subscription — Mofeaz Seed Cycling Kit',
    category: 'FULL 3-CYCLE RESET // 84 BARS (6x 14-BAR BOXES)',
    price: 8555,
    comparePrice: 9966,
    image: 'assets/images/mockup-ritual-kit-box-transparent.png',
    tag: 'TRANSFORMATION RITUAL',
    phase: 'Full 90-Day Follicular & Luteal Reset',
    description: 'The complete 3-cycle clinical protocol (84 fresh seed bars). Ovarian follicles take 90 days to develop; a 3-month commitment delivers the deepest hormonal regulation, cycle predictability, and PMS relief.',
    ingredients: 'Flaxseeds, Pumpkin Seeds, Sesame Seeds, Sunflower Seeds, Raw Cacao, Coffee, Ceylon Cinnamon, Medjool Dates.',
    nutrition: 'Delivered in 3 fresh monthly batches. 100% whole cold-milled seeds. 0g added sugar.',
    pcosBenefit: 'Clinical gold standard for reversing chronic cycle irregularity and balancing LH/FSH ratios.'
  }
};

// ==========================================================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================================================
let cart = [];

try {
  const savedCart = localStorage.getItem('mofeaz_cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
} catch (e) {
  cart = [];
}

function saveCart() {
  try {
    localStorage.setItem('mofeaz_cart', JSON.stringify(cart));
  } catch (e) {}
}

// ==========================================================================
// 3. INITIALIZATION & LENIS SMOOTH SCROLL
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initLenis();
  initSplashReveal();
  initHeroRusticoParallax();
  initCartUI();
  initBentoFilters();
  initBentoInteractiveTool();
  initModals();
  initParallax();
  initFAQ();
  initHeaderScroll();
  initCustomCursor();
  initScrollParallax();
  initVideoReviews();
  initFounderParallax();
  initMoonCycleMap();
  initWhatsAppWidget();
  
  // Re-run Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

let lenis = null;
function initLenis() {
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}

// ==========================================================================
// 4. SUIT CREATIVE STYLE SPLASH REEL ANIMATION (Reference: pin.it/81AGG1mst)
// Rapid product photographic stream masked through giant Bodoni Moda MOFEAZ text,
// followed by a slow, ultra-smooth center curtain parting reveal.
// ==========================================================================
const SPLASH_REEL = [
  'assets/images/splash-reel-1-follicular.jpg',
  'assets/images/splash-reel-2-luteal.jpg',
  'assets/images/splash-reel-3-coffee-foll.jpg',
  'assets/images/splash-reel-4-coffee-lute.jpg',
  'assets/images/splash-reel-5-14bar-foll.jpg',
  'assets/images/splash-reel-6-14bar-lute.jpg',
  'assets/images/splash-reel-7-master-kit.jpg'
];

let splashAnimFrame = null;
let splashActive = false;

function initSplashReveal() {
  const splash = document.getElementById('splashScreen');
  const wordmarks = document.querySelectorAll('.suit-masked-wordmark');

  if (!splash) return;

  // Preload all product reel images in memory so transitions are instantaneous
  SPLASH_REEL.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  const urlParams = new URLSearchParams(window.location.search);
  const skipSplash = urlParams.has('nosplash') || urlParams.has('skip');

  if (skipSplash) {
    hideSplashScreen(true);
    return;
  }

  splashActive = true;
  document.body.classList.add('loading-locked');

  let currentFrameIdx = 0;
  const totalFrames = SPLASH_REEL.length;
  const frameIntervalMs = 280; // ~280ms per product frame for rich visual clarity
  const totalDuration = totalFrames * frameIntervalMs;
  let startTime = null;

  // Set initial product background image on both halves of the split wordmark
  wordmarks.forEach(wm => {
    wm.style.backgroundImage = `url('${SPLASH_REEL[0]}')`;
  });

  function stepReel(timestamp) {
    if (!splashActive) return;
    if (!startTime) startTime = timestamp;

    const elapsed = timestamp - startTime;
    const progress = Math.min(1, elapsed / totalDuration);

    // Switch product image frame synchronously across both curtain wordmark clones
    const frame = Math.min(totalFrames - 1, Math.floor(progress * totalFrames));
    if (frame !== currentFrameIdx) {
      currentFrameIdx = frame;
      wordmarks.forEach(wm => {
        wm.style.backgroundImage = `url('${SPLASH_REEL[currentFrameIdx]}')`;
      });
    }

    if (progress < 1) {
      splashAnimFrame = requestAnimationFrame(stepReel);
    } else {
      // Completed product reel sequence -> brief elegant hold, then trigger smooth slow split reveal
      setTimeout(() => {
        triggerSplitReveal();
      }, 300);
    }
  }

  splashAnimFrame = requestAnimationFrame(stepReel);

  // Click anywhere on splash screen to trigger split reveal immediately
  splash.addEventListener('click', () => {
    triggerSplitReveal();
  });
}

/**
 * Triggers the theatrical split-screen reveal parting smoothly from center
 * Curtains glide outward over 1.95s with zero middle dividing line
 */
function triggerSplitReveal() {
  const splash = document.getElementById('splashScreen');
  if (!splash || !splashActive) return;

  splashActive = false;
  if (splashAnimFrame) {
    cancelAnimationFrame(splashAnimFrame);
  }

  splash.classList.add('is-splitting');

  // Smoothly unlock scrolling as the doors part
  setTimeout(() => {
    document.body.classList.remove('loading-locked');
  }, 1100);

  // Once curtains have completely cleared the screen (1.95s transition)
  setTimeout(() => {
    splash.classList.add('splash-hidden');
    splash.style.display = 'none';
  }, 2000);
}

function hideSplashScreen(instant = false) {
  const splash = document.getElementById('splashScreen');
  if (!splash) return;

  splashActive = false;
  if (splashAnimFrame) {
    cancelAnimationFrame(splashAnimFrame);
  }

  sessionStorage.setItem('mofeaz_splash_seen', 'true');
  document.body.classList.remove('loading-locked');

  if (instant) {
    splash.classList.add('splash-hidden');
    splash.style.display = 'none';
  } else {
    triggerSplitReveal();
  }
}

// Function to replay splash intro from FAQ or footer
window.replaySplashIntro = function() {
  const splash = document.getElementById('splashScreen');
  if (!splash) return;
  sessionStorage.removeItem('mofeaz_splash_seen');
  splash.classList.remove('is-splitting', 'splash-hidden');
  splash.style.display = 'block';
  document.body.classList.add('loading-locked');

  const wordmarks = document.querySelectorAll('.suit-masked-wordmark');
  wordmarks.forEach(wm => {
    wm.style.backgroundImage = `url('${SPLASH_REEL[0]}')`;
  });

  initSplashReveal();
};

const replayBtn = document.getElementById('faqReplayIntroBtn');
if (replayBtn) {
  replayBtn.addEventListener('click', window.replaySplashIntro);
}

// ==========================================================================
// 5. RUSTICO HERO CUTOUT PARALLAX INTERACTION
// Smooth 3D mouse parallax on background-free product cutouts
// ==========================================================================
function initHeroRusticoParallax() {
  const heroSection = document.querySelector('.hero-rustico-section');
  const cutout1 = document.getElementById('heroCutout1');
  const cutout2 = document.getElementById('heroCutout2');

  if (!heroSection || !cutout1 || !cutout2) return;

  let mouseX = 0, mouseY = 0;
  let currentX1 = 0, currentY1 = 0;
  let currentX2 = 0, currentY2 = 0;
  let scrollCutoutY1 = 0, scrollCutoutY2 = 0;
  let rafId = null;

  window.setHeroCutoutScrollOffset = function(y1, y2) {
    scrollCutoutY1 = y1;
    scrollCutoutY2 = y2;
    if (!rafId) {
      rafId = requestAnimationFrame(updateCutoutPositions);
    }
  };

  function updateCutoutPositions() {
    currentX1 += (mouseX * -24 - currentX1) * 0.08;
    currentY1 += (mouseY * -18 - currentY1) * 0.08;

    currentX2 += (mouseX * 28 - currentX2) * 0.08;
    currentY2 += (mouseY * 22 - currentY2) * 0.08;

    cutout1.style.transform = `translate3d(${currentX1}px, ${(currentY1 + scrollCutoutY1).toFixed(1)}px, 0) rotate(${-10 + mouseX * 4}deg)`;
    cutout2.style.transform = `translate3d(${currentX2}px, ${(currentY2 + scrollCutoutY2).toFixed(1)}px, 0) rotate(${12 + mouseX * -4}deg)`;

    const diff1 = Math.abs(currentX1 - mouseX * -24) + Math.abs(currentY1 - mouseY * -18);
    const diff2 = Math.abs(currentX2 - mouseX * 28) + Math.abs(currentY2 - mouseY * 22);

    if (diff1 > 0.1 || diff2 > 0.1) {
      rafId = requestAnimationFrame(updateCutoutPositions);
    } else {
      rafId = null;
    }
  }

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX = (e.clientX - centerX) / (rect.width / 2);
    mouseY = (e.clientY - centerY) / (rect.height / 2);

    if (!rafId) {
      rafId = requestAnimationFrame(updateCutoutPositions);
    }
  });

  heroSection.addEventListener('mouseleave', () => {
    mouseX = 0;
    mouseY = 0;
    if (!rafId) {
      rafId = requestAnimationFrame(updateCutoutPositions);
    }
  });
}

// ==========================================================================
// 6. PARALLAX FLOATING ELEMENTS
// ==========================================================================
function initParallax() {
  const parallaxItems = document.querySelectorAll('.parallax-seed');
  if (!parallaxItems.length) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    parallaxItems.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed') || '0.1');
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });
}

// ==========================================================================
// 6. HEADER SCROLL EFFECT
// ==========================================================================
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > 100) {
      header.style.boxShadow = '0 4px 20px rgba(35, 28, 24, 0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // Mobile drawer toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
    });
  }
  if (mobileCloseBtn && mobileDrawer) {
    mobileCloseBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  }
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
    });
  });
}

// ==========================================================================
// 7. BENTO GRID FILTERS & DROPDOWN TOGGLE
// ==========================================================================
function initBentoFilters() {
  const dropdownBtn = document.getElementById('subFilterDropdownBtn');
  const dropdownMenu = document.getElementById('subFilterDropdownMenu');
  const filterChips = document.querySelectorAll('.filter-chip');
  const subTabs = document.querySelectorAll('.sub-filter-tab');
  const cards = document.querySelectorAll('.bento-master-grid .bento-card');

  // Toggle filter drawer
  if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener('click', () => {
      const isOpen = dropdownMenu.classList.contains('open');
      if (isOpen) {
        dropdownMenu.classList.remove('open');
        dropdownBtn.innerHTML = '<span>filter +</span>';
      } else {
        dropdownMenu.classList.add('open');
        dropdownBtn.innerHTML = '<span>filter &minus;</span>';
      }
    });
  }

  // Filter chips
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filterVal = chip.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all') {
          card.style.display = '';
          card.style.opacity = '1';
        } else if (cat === filterVal) {
          card.style.display = '';
          card.style.opacity = '1';
        } else if (filterVal === 'starter' && (cat === 'starter' || cat === 'sub')) {
          card.style.display = '';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Bestsellers vs Our Choice sub-tabs
  subTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      subTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterType = tab.getAttribute('data-bento-filter');
      cards.forEach(card => {
        card.style.display = '';
        card.style.opacity = '1';
      });

      if (filterType === 'bestsellers') {
        // Highlight top rated
        const bestsellers = ['prod-foll-cacao', 'prod-kit-28', 'prod-lute-sesame'];
        cards.forEach(card => {
          const id = card.getAttribute('data-product-id');
          if (bestsellers.includes(id)) {
            card.style.backgroundColor = '#FFFDF9';
          } else {
            card.style.backgroundColor = '';
          }
        });
      } else {
        // Our choice highlights
        cards.forEach(card => card.style.backgroundColor = '');
      }
    });
  });
}

// ==========================================================================
// 8. INTERACTIVE BENTO TOOL // "WHAT SHOULD YOU SNACK ON TODAY?"
// ==========================================================================
function initBentoInteractiveTool() {
  const slider = document.getElementById('bentoCycleDayInput');
  const valBadge = document.getElementById('bentoSliderVal');
  const phaseBadge = document.getElementById('bentoOutputPhase');
  const titleBadge = document.getElementById('bentoOutputTitle');
  const noteBadge = document.getElementById('bentoOutputNote');
  const actionBtn = document.getElementById('bentoToolCta');

  if (!slider) return;

  function updateTool(day) {
    if (valBadge) valBadge.textContent = day;

    if (day <= 14) {
      // Phase 1 Follicular
      if (phaseBadge) {
        phaseBadge.textContent = 'PHASE 01 // FOLLICULAR (DAYS 1–14)';
        phaseBadge.style.color = '#84472B';
      }
      if (titleBadge) {
        titleBadge.textContent = 'Raw Cacao & Pumpkin Seed Bar';
      }
      if (noteBadge) {
        noteBadge.textContent = `Day ${day}: Your body is preparing the follicle. Cold-milled flaxseeds & pumpkin seeds provide zinc and lignans to support balanced estrogen elevation.`;
      }
      if (actionBtn) {
        actionBtn.setAttribute('data-target-prod', 'prod-foll-cacao');
      }
    } else {
      // Phase 2 Luteal
      if (phaseBadge) {
        phaseBadge.textContent = 'PHASE 02 // LUTEAL (DAYS 15–28)';
        phaseBadge.style.color = '#C99454';
      }
      if (titleBadge) {
        titleBadge.textContent = 'Toasted Sesame & Sea Salt Crunch Bar';
      }
      if (noteBadge) {
        noteBadge.textContent = `Day ${day}: Progesterone is dominant. Roasted sesame & sunflower seeds deliver bioavailable selenium and vitamin E to eliminate PMS cramps and mood dips.`;
      }
      if (actionBtn) {
        actionBtn.setAttribute('data-target-prod', 'prod-lute-sesame');
      }
    }
  }

  slider.addEventListener('input', (e) => {
    updateTool(parseInt(e.target.value, 10));
  });

  if (actionBtn) {
    actionBtn.addEventListener('click', () => {
      const prodId = actionBtn.getAttribute('data-target-prod') || 'prod-foll-cacao';
      window.addToCart(prodId);
    });
  }

  // Subscription Plan Selector (1 Month vs 3 Months as on mofeaz.com)
  const planBtns = document.querySelectorAll('#kitPlanSelector .plan-btn');
  const heroKitPrice = document.getElementById('heroKitPrice');
  const heroKitCompare = document.getElementById('heroKitCompare');
  const heroKitSub = document.getElementById('heroKitSub');
  const heroKitAddBtn = document.getElementById('heroKitAddBtn');

  planBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      planBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const planType = btn.getAttribute('data-plan-type');
      const price = btn.getAttribute('data-plan-price');
      const compare = btn.getAttribute('data-compare-price');
      const sub = btn.getAttribute('data-plan-sub');

      if (heroKitPrice) heroKitPrice.textContent = `₹${parseInt(price, 10).toLocaleString('en-IN')}`;
      if (heroKitCompare) heroKitCompare.textContent = `₹${parseInt(compare, 10).toLocaleString('en-IN')}`;
      if (heroKitSub) heroKitSub.textContent = sub;

      if (heroKitAddBtn) {
        if (planType === 'sub3') {
          heroKitAddBtn.setAttribute('data-add-id', 'prod-sub-3mo');
        } else {
          heroKitAddBtn.setAttribute('data-add-id', 'prod-kit-28');
        }
      }
    });
  });
}

// ==========================================================================
// 9. CART DRAWER & SHOPPING BAG SYSTEM
// ==========================================================================
function initCartUI() {
  const toggleBtn = document.getElementById('cartToggleBtn');
  const closeBtn = document.getElementById('cartCloseBtn');
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', window.openCart);
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', window.closeCart);
  }
  if (overlay) {
    overlay.addEventListener('click', window.closeCart);
  }

  // Delegate add to ritual buttons
  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.btn-add-ritual');
    if (addBtn) {
      const prodId = addBtn.getAttribute('data-add-id');
      if (prodId) {
        window.addToCart(prodId);
      }
    }

    const quickBtn = e.target.closest('.btn-quick-view');
    if (quickBtn) {
      const prodId = quickBtn.getAttribute('data-quick-id');
      if (prodId) {
        window.openQuickView(prodId);
      }
    }
  });

  renderCart();
}

window.openCart = function() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('open');
  }
};

window.closeCart = function() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  }
};

window.addToCart = function(productId, qty = 1) {
  const product = MOFEAZ_PRODUCTS[productId];
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      id: productId,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: qty
    });
  }

  saveCart();
  renderCart();
  showToast(`Added "${product.title}" to your ritual bag`);
  window.openCart();
};

window.updateCartQty = function(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCart();
  renderCart();
};

window.removeFromCart = function(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  renderCart();
};

function renderCart() {
  const listEl = document.getElementById('cartItemsList');
  const badge = document.getElementById('cartCountBadge');
  const countText = document.getElementById('cartItemsCountText');
  const subtotalVal = document.getElementById('cartSubtotalVal');
  const meterFill = document.getElementById('shippingMeterFill');
  const meterText = document.getElementById('shippingMeterText');
  const emptyState = document.getElementById('emptyCartState');
  const footer = document.getElementById('cartDrawerFooter');

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (badge) badge.textContent = `( ${totalCount} )`;
  if (countText) countText.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
  if (subtotalVal) subtotalVal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;

  // Free shipping threshold = ₹1200
  const freeThreshold = 1200;
  if (meterFill && meterText) {
    if (subtotal >= freeThreshold) {
      meterFill.style.width = '100%';
      meterText.innerHTML = '🎉 You qualify for <strong>Complimentary Nationwide Shipping!</strong>';
    } else {
      const pct = Math.min(100, (subtotal / freeThreshold) * 100);
      meterFill.style.width = pct + '%';
      meterText.textContent = `Add ₹${(freeThreshold - subtotal).toLocaleString('en-IN')} more for complimentary shipping!`;
    }
  }

  if (!listEl) return;

  if (cart.length === 0) {
    listEl.innerHTML = `
      <div class="empty-cart-state">
        <i data-lucide="shopping-bag" class="empty-icon"></i>
        <p class="empty-title">Your ritual bag is empty</p>
        <p class="empty-sub">Choose whole, functional seed snacks synced to your cycle rhythm.</p>
        <button class="btn-primary" onclick="window.closeCart(); window.location.hash='#bentoGrid';">
          <span>EXPLORE ESSENTIALS</span>
        </button>
      </div>
    `;
    if (footer) footer.style.display = 'none';
  } else {
    if (footer) footer.style.display = 'block';
    listEl.innerHTML = cart.map(item => `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        <div class="cart-item-info">
          <div>
            <span class="cart-item-sub">${item.category}</span>
            <h4 class="cart-item-title">${item.title}</h4>
          </div>
          <div class="cart-qty-controls">
            <button class="qty-btn" onclick="window.updateCartQty('${item.id}', -1)">-</button>
            <span class="qty-num">${item.quantity}</span>
            <button class="qty-btn" onclick="window.updateCartQty('${item.id}', 1)">+</button>
          </div>
        </div>
        <div class="cart-item-price-col">
          <span class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
          <button class="cart-remove-btn" onclick="window.removeFromCart('${item.id}')">Remove</button>
        </div>
      </div>
    `).join('');
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Toast notification
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ==========================================================================
// 10. MODALS (QUICK VIEW & CYCLE FINDER)
// ==========================================================================
function initModals() {
  const quickModal = document.getElementById('quickViewModal');
  const quickOverlay = document.getElementById('quickViewOverlay');
  const quickClose = document.getElementById('quickViewCloseBtn');

  function closeQuickView() {
    if (quickModal) quickModal.classList.remove('open');
    if (quickOverlay) quickOverlay.classList.remove('open');
  }

  if (quickClose) quickClose.addEventListener('click', closeQuickView);
  if (quickOverlay) quickOverlay.addEventListener('click', closeQuickView);

  window.openQuickView = function(productId) {
    const product = MOFEAZ_PRODUCTS[productId];
    if (!product || !quickModal) return;

    const content = document.getElementById('quickViewContent');
    content.innerHTML = `
      <div class="modal-img-col">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="modal-info-col">
        <span class="sku-category">${product.category}</span>
        <h3 class="product-title" style="font-size: 1.8rem;">${product.title}</h3>
        <div class="price-current" style="font-size: 1.6rem; color: var(--color-terracotta);">₹${product.price.toLocaleString('en-IN')}</div>
        <p class="product-summary">${product.description}</p>
        
        <div style="background: var(--color-surface); padding: 14px; border: 1px solid var(--color-border); border-radius: 4px;">
          <strong style="font-size: 0.76rem; color: var(--color-espresso); display: block; margin-bottom: 4px;">INGREDIENTS &amp; PURITY:</strong>
          <span style="font-size: 0.78rem; color: var(--color-espresso-subtle);">${product.ingredients}</span>
        </div>

        <div style="background: var(--color-terracotta-light); padding: 14px; border: 1px solid var(--color-terracotta); border-radius: 4px;">
          <strong style="font-size: 0.76rem; color: var(--color-terracotta-dark); display: block; margin-bottom: 4px;">WOMEN'S HORMONAL BENEFIT:</strong>
          <span style="font-size: 0.78rem; color: var(--color-espresso);">${product.pcosBenefit}</span>
        </div>

        <button class="btn-primary" style="margin-top: 10px;" onclick="window.addToCart('${product.id}'); document.getElementById('quickViewCloseBtn').click();">
          <span>ADD TO RITUAL BAG — ₹${product.price}</span>
          <i data-lucide="plus"></i>
        </button>
      </div>
    `;

    quickModal.classList.add('open');
    if (quickOverlay) quickOverlay.classList.add('open');
    if (window.lucide) window.lucide.createIcons();
  };

  // Cycle Finder Modal
  const finderBtn = document.getElementById('openCycleFinderBtn');
  const footerFinderTrigger = document.getElementById('footerCalcTrigger');
  const mobilePhaseBtn = document.getElementById('mobilePhaseBtn');
  const heroQuizBtn = document.getElementById('heroQuickQuizBtn');
  const finderModal = document.getElementById('cycleFinderModal');
  const finderOverlay = document.getElementById('cycleFinderOverlay');
  const finderClose = document.getElementById('cycleFinderCloseBtn');

  function openFinder() {
    if (finderModal && finderOverlay) {
      finderModal.classList.add('open');
      finderOverlay.classList.add('open');
    }
  }

  function closeFinder() {
    if (finderModal && finderOverlay) {
      finderModal.classList.remove('open');
      finderOverlay.classList.remove('open');
    }
  }

  if (finderBtn) finderBtn.addEventListener('click', openFinder);
  if (footerFinderTrigger) footerFinderTrigger.addEventListener('click', (e) => { e.preventDefault(); openFinder(); });
  if (mobilePhaseBtn) mobilePhaseBtn.addEventListener('click', openFinder);
  if (heroQuizBtn) heroQuizBtn.addEventListener('click', openFinder);
  if (finderClose) finderClose.addEventListener('click', closeFinder);
  if (finderOverlay) finderOverlay.addEventListener('click', closeFinder);

  // Concierge / Contact Modal
  const contactNavBtn = document.getElementById('contactNavTrigger');
  const conciergeModal = document.getElementById('conciergeModal');
  const conciergeOverlay = document.getElementById('conciergeOverlay');
  const conciergeClose = document.getElementById('conciergeCloseBtn');

  function openConcierge(e) {
    if (e) e.preventDefault();
    if (conciergeModal && conciergeOverlay) {
      conciergeModal.classList.add('open');
      conciergeOverlay.classList.add('open');
    }
  }

  function closeConcierge() {
    if (conciergeModal && conciergeOverlay) {
      conciergeModal.classList.remove('open');
      conciergeOverlay.classList.remove('open');
    }
  }

  if (contactNavBtn) contactNavBtn.addEventListener('click', openConcierge);
  document.querySelectorAll('.concierge-nav-trigger').forEach(trigger => {
    trigger.addEventListener('click', openConcierge);
  });
  if (conciergeClose) conciergeClose.addEventListener('click', closeConcierge);
  if (conciergeOverlay) conciergeOverlay.addEventListener('click', closeConcierge);

  // Favorites Modal
  const favBtn = document.getElementById('favoritesBtn');
  const favModal = document.getElementById('favoritesModal');
  const favOverlay = document.getElementById('favoritesOverlay');
  const favClose = document.getElementById('favoritesCloseBtn');
  const favList = document.getElementById('favoritesList');

  function openFavorites() {
    if (favModal && favOverlay) {
      if (favList) {
        favList.innerHTML = `
          <div style="text-align: center; padding: 30px 10px;">
            <i data-lucide="sparkles" style="width: 36px; height: 36px; color: var(--color-terracotta); margin-bottom: 12px;"></i>
            <h4 style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--color-espresso); margin-bottom: 6px;">Your Cycle Favorites</h4>
            <p style="font-size: 0.82rem; color: var(--color-taupe); margin-bottom: 20px;">Explore all 6 signature hormone-syncing essentials in the collection.</p>
            <button class="btn-primary" onclick="document.getElementById('favoritesCloseBtn').click(); window.location.hash='#bentoGrid';">
              <span>EXPLORE ALL ESSENTIALS</span>
            </button>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
      }
      favModal.classList.add('open');
      favOverlay.classList.add('open');
    }
  }

  function closeFavorites() {
    if (favModal && favOverlay) {
      favModal.classList.remove('open');
      favOverlay.classList.remove('open');
    }
  }

  if (favBtn) favBtn.addEventListener('click', openFavorites);
  if (favClose) favClose.addEventListener('click', closeFavorites);
  if (favOverlay) favOverlay.addEventListener('click', closeFavorites);

  // Set default date to 8 days ago
  const dateInput = document.getElementById('lastPeriodDate');
  if (dateInput) {
    const today = new Date();
    today.setDate(today.getDate() - 7);
    dateInput.value = today.toISOString().split('T')[0];
  }
}

// Cycle Phase Calculation Algorithm
window.calculateCyclePhase = function() {
  const dateInput = document.getElementById('lastPeriodDate').value;
  const cycleLength = document.getElementById('cycleLengthInput').value;
  const resultDiv = document.getElementById('finderResult');

  if (!dateInput) return;

  const startDate = new Date(dateInput);
  const now = new Date();
  const diffTime = Math.abs(now - startDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let cycleDay = 1;
  let isFollicular = true;

  if (cycleLength === 'irregular') {
    // Lunar phase heuristic: Days 1-14 New Moon (Follicular), Days 15-28 Full Moon (Luteal)
    cycleDay = (diffDays % 28) + 1;
    isFollicular = cycleDay <= 14;
  } else {
    const len = parseInt(cycleLength, 10) || 28;
    cycleDay = (diffDays % len) + 1;
    const midPoint = Math.floor(len / 2);
    isFollicular = cycleDay <= midPoint;
  }

  const phaseTitle = document.getElementById('resPhaseTitle');
  const dayCount = document.getElementById('resDayCount');
  const hormone = document.getElementById('resHormone');
  const explanation = document.getElementById('resExplanation');
  const recContainer = document.getElementById('resProductRecommendation');

  if (isFollicular) {
    phaseTitle.textContent = 'Phase 01: Follicular Rhythm';
    phaseTitle.style.color = '#84472B';
    dayCount.textContent = `You are approximately on Day ${cycleDay} of your cycle`;
    hormone.textContent = 'Dominant Hormone: Estrogen (Building)';
    explanation.textContent = 'Your ovaries are maturing follicles. Your body requires cold-milled pumpkin seeds and flaxseeds rich in zinc and phytoestrogens to gently support healthy estrogen levels and vibrant daytime energy.';
    recContainer.innerHTML = `
      <div style="display: flex; align-items: center; gap: 16px; margin-top: 12px; background: #FFF; padding: 12px; border: 1px solid var(--color-border); border-radius: 4px;">
        <img src="assets/images/mockup-follicular-bar-transparent.png" style="width: 50px; height: 50px; object-fit: contain; border-radius: 4px;">
        <div style="flex-grow: 1;">
          <h5 style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--color-espresso); margin-bottom: 2px;">Follicular Chocolate Bar (50g)</h5>
          <span style="font-size: 0.72rem; color: var(--color-taupe);">Prescribed for Days 1 to 14</span>
        </div>
        <button class="btn-primary" style="padding: 8px 14px; font-size: 0.72rem;" onclick="window.addToCart('prod-foll-cacao'); document.getElementById('cycleFinderCloseBtn').click();">
          <span>ADD ₹1,329</span>
        </button>
      </div>
    `;
  } else {
    phaseTitle.textContent = 'Phase 02: Luteal Harmony';
    phaseTitle.style.color = '#C99454';
    dayCount.textContent = `You are approximately on Day ${cycleDay} of your cycle`;
    hormone.textContent = 'Dominant Hormone: Progesterone (Sustaining)';
    explanation.textContent = 'Post-ovulation, progesterone must remain stable to prevent pre-period irritability, water retention, and sleep disruption. Sunflower seeds and sesame seeds deliver bioavailable selenium, vitamin E, and magnesium.';
    recContainer.innerHTML = `
      <div style="display: flex; align-items: center; gap: 16px; margin-top: 12px; background: #FFF; padding: 12px; border: 1px solid var(--color-border); border-radius: 4px;">
        <img src="assets/images/mockup-luteal-bar-transparent.png" style="width: 50px; height: 50px; object-fit: contain; border-radius: 4px;">
        <div style="flex-grow: 1;">
          <h5 style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--color-espresso); margin-bottom: 2px;">Luteal Chocolate Bar (50g)</h5>
          <span style="font-size: 0.72rem; color: var(--color-taupe);">Prescribed for Days 15 to 28</span>
        </div>
        <button class="btn-primary" style="padding: 8px 14px; font-size: 0.72rem;" onclick="window.addToCart('prod-lute-sesame'); document.getElementById('cycleFinderCloseBtn').click();">
          <span>ADD ₹1,329</span>
        </button>
      </div>
    `;
  }

  resultDiv.style.display = 'block';
};

// ==========================================================================
// 11. FAQ ACCORDION
// ==========================================================================
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });

  // Back to top button
  const btt = document.getElementById('footerBackToTop');
  if (btt) {
    btt.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ==========================================================================
// 12. NEWSLETTER FORM HANDLERS
// ==========================================================================
window.handleNewsletter = function() {
  const emailInput = document.getElementById('newsletterEmail');
  if (emailInput && emailInput.value) {
    showToast(`Welcome to The Cycle Club! 15% voucher sent to ${emailInput.value}`);
    emailInput.value = '';
  }
};

window.handleNewsletterSubmit = function(form) {
  const input = form.querySelector('input[type="email"]');
  if (input && input.value) {
    showToast(`Welcome to Mofeaz Secret Circle! 15% voucher sent to ${input.value}`);
    input.value = '';
  }
};

// ==========================================================================
// 13. CUBERTO-STYLE CUSTOM CURSOR MICRO-INTERACTION (Reference: pin.it/2lxuNHozE)
// Smooth spring-damped lerp follower, magnetic button snapping, tactile
// click feedback, contextual "VIEW"/"EXPLORE" badges, and typography blend.
// ==========================================================================
function initCustomCursor() {
  // Gracefully disable on touch screens or devices without fine pointer
  if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) {
    return;
  }

  const cursor = document.getElementById('customCursor');
  const follower = document.getElementById('cursorFollower');
  const dot = document.getElementById('cursorDot');
  const cursorText = document.getElementById('cursorText');
  const cursorArrow = document.getElementById('cursorArrow');

  if (!cursor || !follower || !dot) return;

  document.body.classList.add('cursor-enabled');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let dotX = mouseX;
  let dotY = mouseY;
  let followerX = mouseX;
  let followerY = mouseY;
  let targetFollowerX = mouseX;
  let targetFollowerY = mouseY;

  let isVisible = false;
  let isDown = false;
  let activeMagneticEl = null;
  let magneticPullX = 0;
  let magneticPullY = 0;
  let targetPullX = 0;
  let targetPullY = 0;

  // Damping factors for signature luxury organic motion
  const FOLLOWER_EASE = 0.16;
  const DOT_EASE = 0.75;

  // Track mouse coordinates
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      cursor.classList.add('cursor-visible');
      cursor.classList.remove('cursor-hidden');
      dotX = mouseX;
      dotY = mouseY;
      followerX = mouseX;
      followerY = mouseY;
    }

    if (activeMagneticEl) {
      const rect = activeMagneticEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      targetPullX = (mouseX - centerX) * 0.25;
      targetPullY = (mouseY - centerY) * 0.25;
    }
  }, { passive: true });

  window.addEventListener('mousedown', () => {
    isDown = true;
    cursor.classList.add('cursor-down');
  });

  window.addEventListener('mouseup', () => {
    isDown = false;
    cursor.classList.remove('cursor-down');
  });

  document.addEventListener('mouseleave', () => {
    isVisible = false;
    cursor.classList.add('cursor-hidden');
    cursor.classList.remove('cursor-visible');
    releaseMagnetic();
  });

  document.addEventListener('mouseenter', () => {
    isVisible = true;
    cursor.classList.remove('cursor-hidden');
    cursor.classList.add('cursor-visible');
  });

  function releaseMagnetic() {
    if (activeMagneticEl) {
      activeMagneticEl.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      activeMagneticEl.style.transform = '';
      const elToReset = activeMagneticEl;
      setTimeout(() => {
        if (elToReset) elToReset.style.transition = '';
      }, 400);
      activeMagneticEl = null;
    }
    magneticPullX = 0;
    magneticPullY = 0;
    targetPullX = 0;
    targetPullY = 0;
  }

  // Event Delegation for Contextual Cursor States
  document.addEventListener('mouseover', (e) => {
    const target = e.target;

    // 1. Text badge on product cards & cutouts
    const textTarget = target.closest('[data-cursor-text], .bento-card-media, .hero-product-cutout, .sku-card-hero');
    if (textTarget) {
      releaseMagnetic();
      cursor.classList.remove('cursor-magnetic', 'cursor-dark', 'cursor-blend', 'cursor-input');
      cursor.classList.add('cursor-text');
      const customLabel = textTarget.getAttribute('data-cursor-text') || 
        (textTarget.classList.contains('hero-product-cutout') ? 'EXPLORE' : 'VIEW');
      if (cursorText) cursorText.textContent = customLabel;
      return;
    }

    // 2. Blend / Exclusion mode on giant typographic headers
    const blendTarget = target.closest('.hero-rustico-heading-block, .suit-masked-wordmark');
    if (blendTarget) {
      releaseMagnetic();
      cursor.classList.remove('cursor-magnetic', 'cursor-dark', 'cursor-text', 'cursor-input');
      cursor.classList.add('cursor-blend');
      return;
    }

    // 3. Dark circle on hamburger menu
    const darkTarget = target.closest('.mobile-menu-btn');
    if (darkTarget) {
      activeMagneticEl = darkTarget;
      cursor.classList.remove('cursor-text', 'cursor-blend', 'cursor-input');
      cursor.classList.add('cursor-magnetic', 'cursor-dark');
      return;
    }

    // 4. Magnetic button snapping
    const magneticTarget = target.closest(`
      .header-nav-link,
      .header-action-link,
      .header-logo-link,
      .ref-social-link,
      .sub-filter-tab,
      .filter-chip,
      .sub-filter-dropdown-btn,
      .btn-add-ritual,
      .btn-quick-view,
      .btn-primary,
      .btn-outline,
      .cart-checkout-btn,
      .cart-close-btn,
      .modal-close-btn,
      .footer-ref-submit-btn,
      .footer-back-to-top,
      .faq-question,
      .hero-nav-pill,
      [data-cursor-stick]
    `);
    if (magneticTarget) {
      activeMagneticEl = magneticTarget;
      cursor.classList.remove('cursor-text', 'cursor-dark', 'cursor-blend', 'cursor-input');
      cursor.classList.add('cursor-magnetic');
      return;
    }

    // 5. Input fields (I-beam mode)
    const inputTarget = target.closest('input[type="text"], input[type="email"], textarea');
    if (inputTarget) {
      releaseMagnetic();
      cursor.classList.remove('cursor-magnetic', 'cursor-dark', 'cursor-blend', 'cursor-text');
      cursor.classList.add('cursor-input');
      return;
    }

    // Default state: reset all modifier classes
    releaseMagnetic();
    cursor.classList.remove('cursor-magnetic', 'cursor-dark', 'cursor-text', 'cursor-blend', 'cursor-input');
  });

  // Animation Loop via requestAnimationFrame
  function renderCursor() {
    // Smooth responsive dot
    dotX += (mouseX - dotX) * DOT_EASE;
    dotY += (mouseY - dotY) * DOT_EASE;

    // Follower target calculation
    if (activeMagneticEl) {
      const rect = activeMagneticEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      targetFollowerX = centerX + (mouseX - centerX) * 0.22;
      targetFollowerY = centerY + (mouseY - centerY) * 0.22;

      // Magnetic physical spring displacement on the element itself
      magneticPullX += (targetPullX - magneticPullX) * 0.2;
      magneticPullY += (targetPullY - magneticPullY) * 0.2;
      activeMagneticEl.style.transform = `translate3d(${magneticPullX.toFixed(2)}px, ${magneticPullY.toFixed(2)}px, 0)`;
    } else {
      targetFollowerX = mouseX;
      targetFollowerY = mouseY;
    }

    followerX += (targetFollowerX - followerX) * FOLLOWER_EASE;
    followerY += (targetFollowerY - followerY) * FOLLOWER_EASE;

    // Set CSS custom properties for transform
    cursor.style.setProperty('--dx', `${dotX.toFixed(1)}px`);
    cursor.style.setProperty('--dy', `${dotY.toFixed(1)}px`);
    cursor.style.setProperty('--fx', `${followerX.toFixed(1)}px`);
    cursor.style.setProperty('--fy', `${followerY.toFixed(1)}px`);

    dot.style.transform = `translate3d(${dotX.toFixed(1)}px, ${dotY.toFixed(1)}px, 0)`;
    follower.style.transform = `translate3d(${followerX.toFixed(1)}px, ${followerY.toFixed(1)}px, 0)`;

    requestAnimationFrame(renderCursor);
  }

  requestAnimationFrame(renderCursor);
}

// ==========================================================================
// 14. KINETIC SCROLL PARALLAX TEXT ANIMATION (Reference: pin.it/2UhDXgPwD)
// Multi-directional horizontal text drift, scroll-velocity motion blur,
// and differential depth on typography & still-life product compositions.
// ==========================================================================
function initScrollParallax() {
  const editorialSection = document.getElementById('editorialParallax');
  const heroSection = document.getElementById('hero');
  const heroLetter1 = document.querySelector('.letter-part-1');
  const heroLetter2 = document.querySelector('.letter-part-2');
  const heroLetter3 = document.querySelector('.letter-part-3');
  const textRows = document.querySelectorAll('.parallax-text-row');
  const centerCard = document.querySelector('.parallax-editorial-card');
  const generalParallaxElements = document.querySelectorAll('[data-scroll-parallax]');

  let targetScroll = window.scrollY || 0;
  let smoothVelocity = 0;
  let targetVelocity = 0;
  let isRunning = false;

  function updateParallaxFrame() {
    const vh = window.innerHeight || 800;

    // Smooth velocity decay (ensures motion blur smoothly settles to 0)
    smoothVelocity += (targetVelocity - smoothVelocity) * 0.22;
    targetVelocity *= 0.82;

    const absVel = Math.min(Math.abs(smoothVelocity), 28);
    const motionBlur = (absVel * 0.16).toFixed(1);
    const skewDeg = (Math.max(Math.min(smoothVelocity * 0.08, 4), -4)).toFixed(2);

    // 1. HERO SECTION: Differential Syllable Parallax & Cutout Depth
    if (heroSection) {
      const heroRect = heroSection.getBoundingClientRect();
      if (heroRect.bottom > 0 && heroRect.top < vh) {
        const heroProgress = Math.max(0, -heroRect.top / (heroRect.height || 1));

        // Outward horizontal drift on syllables
        if (heroLetter1) {
          heroLetter1.style.transform = `translate3d(${-heroProgress * 110}px, ${heroProgress * 30}px, 0)`;
        }
        if (heroLetter2) {
          heroLetter2.style.transform = `translate3d(0, ${heroProgress * 18}px, 0)`;
        }
        if (heroLetter3) {
          heroLetter3.style.transform = `translate3d(${heroProgress * 110}px, ${heroProgress * 30}px, 0)`;
        }

        // Float the cutouts with differential depth
        if (window.setHeroCutoutScrollOffset) {
          window.setHeroCutoutScrollOffset(heroProgress * 85, heroProgress * 115);
        }
      }
    }

    // 2. EDITORIAL PARALLAX SECTION: Multi-directional Text Drift + Velocity Blur
    if (editorialSection) {
      const editRect = editorialSection.getBoundingClientRect();
      if (editRect.bottom > -150 && editRect.top < vh + 150) {
        // Normalized progress: -1 entering from bottom, 0 centered, +1 exiting top
        const centerOffset = (editRect.top + editRect.height / 2) - vh / 2;
        const progress = -centerOffset / (vh / 2);

        textRows.forEach((row) => {
          const speed = parseFloat(row.dataset.speed || '0.5');
          const translateX = (progress * speed * 260).toFixed(1);

          row.style.transform = `translate3d(${translateX}px, 0, 0) skewX(${skewDeg}deg)`;

          // Dynamic velocity motion blur
          if (absVel > 1.2) {
            row.style.filter = `blur(${motionBlur}px)`;
          } else {
            row.style.filter = '';
          }
        });

        // Center still life card vertical parallax & subtle scale
        if (centerCard) {
          const cardY = (progress * -55).toFixed(1);
          const cardScale = (1 + Math.max(0, 1 - Math.abs(progress)) * 0.05).toFixed(3);
          centerCard.style.transform = `translate3d(0, ${cardY}px, 0) scale(${cardScale})`;
        }
      }
    }

    // 3. GENERAL PARALLAX HEADINGS (e.g. SHOP ALL)
    generalParallaxElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < vh) {
        const offset = (rect.top - vh / 2) * parseFloat(el.dataset.scrollParallax || '0.08');
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      }
    });

    // Continue frame loop if velocity has not settled or user is scrolling
    if (Math.abs(smoothVelocity) > 0.05 || Math.abs(targetVelocity) > 0.05) {
      requestAnimationFrame(updateParallaxFrame);
    } else {
      isRunning = false;
      // Ensure blur is cleanly cleared
      textRows.forEach((row) => { row.style.filter = ''; });
    }
  }

  function triggerUpdate(scroll, vel) {
    targetScroll = scroll;
    targetVelocity = vel;
    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(updateParallaxFrame);
    }
  }

  // Connect to Lenis smooth scroll if present
  if (typeof lenis !== 'undefined' && lenis) {
    lenis.on('scroll', (e) => {
      triggerUpdate(e.scroll, e.velocity);
    });
  } else {
    // Native scroll fallback with calculated velocity
    let lastY = window.scrollY;
    let lastTime = performance.now();

    window.addEventListener('scroll', () => {
      const now = performance.now();
      const currentY = window.scrollY;
      const dt = Math.max(now - lastTime, 16);
      const dy = currentY - lastY;
      const vel = (dy / dt) * 16;

      lastY = currentY;
      lastTime = now;

      triggerUpdate(currentY, vel);
    }, { passive: true });
  }

  // Initial calculation on page load
  triggerUpdate(window.scrollY, 0);
}

// ==========================================================================
// 16. AUTHENTIC VIDEO REELS & CUSTOMER REVIEWS (Company Reference Site Scraped)
// ==========================================================================
const MOFEAZ_VIDEO_REVIEWS = [
  {
    id: 318008,
    name: "Meenakshi K.",
    role: "Verified Customer",
    location: "Bengaluru",
    category: "regularity",
    categoryLabel: "Cycle Regularity",
    duration: "0:46",
    stars: 5,
    thumb: "assets/images/reviews/review_thumb_318008.jpg",
    shortVideo: "assets/videos/review_short_318008.mp4",
    fullVideo: "assets/videos/review_full_318008.mp4",
    headline: "“My cycle normalized to 28 days without morning mess”",
    quote: "I used to experience irregular 45+ day cycles and extreme fatigue. Having the Phase 1 & 2 bars every day completely regulated my cycle without the morning mess of seed grinding. It is rich in protein and pure whole seeds — an effortless habit.",
    productId: "prod-kit-28",
    productTitle: "28-Day Complete Cycle Kit",
    productPrice: "₹1,999",
    productCompare: "₹2,499",
    productImg: "assets/images/mockup-28day-master-kit.png"
  },
  {
    id: 318007,
    name: "Ritu Sharma",
    role: "Verified Customer",
    location: "Delhi-NCR",
    category: "pcos",
    categoryLabel: "PCOS & Energy",
    duration: "0:53",
    stars: 5,
    thumb: "assets/images/reviews/review_thumb_318007.jpg",
    shortVideo: "assets/videos/review_short_318007.mp4",
    fullVideo: "assets/videos/review_full_318007.mp4",
    headline: "“Sustained energy with zero caffeine crashes”",
    quote: "Living with PCOS meant awful brain fog and midday crashes. Fulfilling my daily seed cycling requirements with whole-seed bioactive chocolate bars restored my natural stamina and hormonal balance.",
    productId: "prod-box-14-foll",
    productTitle: "14-Day Follicular Ritual Box",
    productPrice: "₹1,149",
    productCompare: "₹1,399",
    productImg: "assets/images/mockup-14bar-follicular-box.png"
  },
  {
    id: 318009,
    name: "Kavita Joshi",
    role: "Verified Customer",
    location: "Pune",
    category: "pms",
    categoryLabel: "PMS Relief & Coffee",
    duration: "0:51",
    stars: 5,
    thumb: "assets/images/reviews/review_thumb_318009.jpg",
    shortVideo: "assets/videos/review_short_318009.mp4",
    fullVideo: "assets/videos/review_full_318009.mp4",
    headline: "“No more relying on painkillers each month”",
    quote: "I love coffee and seed cycling. Having these whole-seed bars with my morning coffee stopped my severe pre-period cramps completely. It is the most enjoyable functional snack I have ever added to my wellness routine.",
    productId: "prod-box-14-lute",
    productTitle: "14-Day Luteal Ritual Box",
    productPrice: "₹1,149",
    productCompare: "₹1,399",
    productImg: "assets/images/mockup-14bar-luteal-box.png"
  },
  {
    id: 315907,
    name: "Sunita Verma",
    role: "Verified Customer",
    location: "Mumbai",
    category: "regularity",
    categoryLabel: "Gut & Digestion",
    duration: "0:31",
    stars: 5,
    thumb: "assets/images/reviews/review_thumb_315907.jpg",
    shortVideo: "assets/videos/review_short_315907.mp4",
    fullVideo: "assets/videos/review_full_315907.mp4",
    headline: "“Earthy, deeply satisfying & gentle on gut”",
    quote: "Taking seed cycling in this bar format has been the most convenient change. The seeds are so gentle on digestion, with zero bloating, and genuine peace of mind knowing it's 100% natural seed nutrition.",
    productId: "prod-kit-28",
    productTitle: "28-Day Complete Cycle Kit",
    productPrice: "₹1,999",
    productCompare: "₹2,499",
    productImg: "assets/images/mockup-28day-master-kit.png"
  },
  {
    id: 315908,
    name: "Neelam Kapoor",
    role: "Verified Customer",
    location: "Hyderabad",
    category: "perimenopause",
    categoryLabel: "Perimenopause Ease",
    duration: "0:37",
    stars: 5,
    thumb: "assets/images/reviews/review_thumb_315908.jpg",
    shortVideo: "assets/videos/review_short_315908.mp4",
    fullVideo: "assets/videos/review_full_315908.mp4",
    headline: "“Essential hormone grounding in my late 40s”",
    quote: "Perimenopause hot flashes and unpredictable cycle intervals were exhausting. Mofeaz gave me an easy, natural way to restore hormonal rhythm and emotional stability every single day.",
    productId: "prod-cycle-duo",
    productTitle: "Follicular & Luteal Artisan Bar Duo",
    productPrice: "₹349",
    productCompare: "₹399",
    productImg: "assets/images/mockup-cycle-duo-bars.png"
  }
];

function initVideoReviews() {
  const scrollTrack = document.getElementById('reviewsScrollTrack');
  const stickyStage = document.getElementById('reviewsStickyStage');
  const diagonalStream = document.getElementById('reviewsDiagonalStream');
  const cards = Array.from(document.querySelectorAll('.review-diagonal-card'));
  const parallaxBg = document.getElementById('reviewsParallaxBg');
  const audioToggle = document.getElementById('reviewsAudioToggle');
  const audioToggleLabel = document.getElementById('audioToggleLabel');
  const progressFill = document.getElementById('reviewsProgressFill');
  const pips = Array.from(document.querySelectorAll('.progress-pips .pip'));

  // Live HUD elements
  const hudStepCount = document.getElementById('hudStepCount');
  const hudBenefitTag = document.getElementById('hudBenefitTag');
  const hudReviewerTitle = document.getElementById('hudReviewerTitle');
  const hudQuote = document.getElementById('hudQuote');
  const hudProductName = document.getElementById('hudProductName');
  const hudProductPrice = document.getElementById('hudProductPrice');
  const hudProductAddBtn = document.getElementById('hudProductAddBtn');

  // Modal elements
  const modal = document.getElementById('reviewVideoModal');
  const overlay = document.getElementById('reviewModalOverlay');
  const closeBtn = document.getElementById('reviewModalClose');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');
  const modalLoader = document.getElementById('modalVideoLoader');
  const modalReviewerName = document.getElementById('modalReviewerName');
  const modalReviewerCity = document.getElementById('modalReviewerCity');
  const modalBenefitBadge = document.getElementById('modalBenefitBadge');
  const modalQuoteText = document.getElementById('modalQuoteText');
  const modalProductImg = document.getElementById('modalProductImg');
  const modalProductTitle = document.getElementById('modalProductTitle');
  const modalProductPrice = document.getElementById('modalProductPrice');
  const modalProductCompare = document.getElementById('modalProductCompare');
  const modalProductAddBtn = document.getElementById('modalProductAddBtn');
  const prevReelBtn = document.getElementById('modalPrevReelBtn');
  const nextReelBtn = document.getElementById('modalNextReelBtn');
  const modalReelCounter = document.getElementById('modalReelCounter');

  if (!scrollTrack || cards.length === 0) return;

  const N = cards.length; // 5 cards
  const sectionReviews = document.getElementById('reviews') || (scrollTrack ? scrollTrack.closest('.section-reviews') : null);
  const storyTicker = document.getElementById('reviewsStoryTicker');
  const storyCounter = document.getElementById('reviewsStoryCounter');
  const tickerPips = Array.from(document.querySelectorAll('.ticker-pip'));
  const completionPill = document.getElementById('reviewsCompletionPill');

  let activeIndex = 0;
  let mobileActiveIdx = 0;
  let isWheelThrottled = false;
  let isAudioMuted = true;
  let currentReelModalIdx = 0;
  let isTicking = false;

  // Initialize all card videos to start paused, muted, and preloaded
  cards.forEach((card) => {
    const video = card.querySelector('.card-video');
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.pause();
    }
  });

  // ========================================================================
  // ========================================================================
  // DISCRETE MOBILE CARD CAROUSEL
  // User scrolls through all 5 video reviews.
  // Once all 5 are explored (or while on Video 5 going down / Video 1 going up):
  // NATURAL PAGE SCROLLING IS TURNED ON for the product review section,
  // allowing the user to naturally and effortlessly scroll down or up!
  // ========================================================================
  let hasExploredAllReviews = false;

  function goToMobileCard(targetIdx) {
    if (targetIdx < 0 || targetIdx >= N) return;
    mobileActiveIdx = targetIdx;

    if (mobileActiveIdx === N - 1) {
      hasExploredAllReviews = true;
    }

    // Lock Lenis smooth scroll on mobile while cycling through videos.
    // Once all videos are explored, unlock completely so the user can naturally scroll.
    if (sectionReviews) {
      if (!hasExploredAllReviews) {
        sectionReviews.setAttribute('data-lenis-prevent', 'true');
      } else {
        sectionReviews.removeAttribute('data-lenis-prevent');
        sectionReviews.classList.add('reviews-unlocked');
      }
    }

    cards.forEach((card, i) => {
      const delta = i - mobileActiveIdx;
      const video = card.querySelector('.card-video');

      if (delta === 0) {
        // Focal Card (Center of viewport)
        card.style.transform = 'translate3d(0, 0, 0) scale(1) rotate(0deg)';
        card.style.opacity = '1';
        card.style.zIndex = '30';
        card.style.pointerEvents = 'auto';
        card.classList.add('is-active-focal');
        if (video) {
          video.muted = isAudioMuted;
          if (video.paused && (!modal || !modal.classList.contains('active'))) {
            const p = video.play();
            if (p) p.catch(() => {});
          }
        }
      } else if (delta < 0) {
        // Past Cards (Moved up and out)
        card.style.transform = 'translate3d(0, -118%, -60px) scale(0.85) rotate(-3deg)';
        card.style.opacity = '0';
        card.style.zIndex = '10';
        card.style.pointerEvents = 'none';
        card.classList.remove('is-active-focal');
        if (video && !video.paused) {
          video.pause();
        }
      } else {
        // Future Cards (Waiting below)
        card.style.transform = 'translate3d(0, 118%, -60px) scale(0.85) rotate(3deg)';
        card.style.opacity = '0';
        card.style.zIndex = '10';
        card.style.pointerEvents = 'none';
        card.classList.remove('is-active-focal');
        if (video && !video.paused) {
          video.pause();
        }
      }
    });

    // Subtle parallax typography drift on mobile
    if (parallaxBg) {
      const row1 = parallaxBg.querySelector('.row-1');
      const row2 = parallaxBg.querySelector('.row-2');
      const p = mobileActiveIdx / (N - 1);
      if (row1) row1.style.transform = `translate3d(${(-p * 180).toFixed(1)}px, 0, 0)`;
      if (row2) row2.style.transform = `translate3d(${(p * 180).toFixed(1)}px, 0, 0)`;
    }

    // Update ticker pips & counter
    tickerPips.forEach((pip, idx) => {
      pip.classList.toggle('active', idx === mobileActiveIdx);
    });
    if (storyCounter) {
      storyCounter.textContent = `STORY 0${mobileActiveIdx + 1} // 0${N}`;
    }

    // Completion pill: reveal when final card (Story 5) is reached
    if (completionPill) {
      if (mobileActiveIdx === N - 1) {
        completionPill.classList.add('is-complete');
      } else {
        completionPill.classList.remove('is-complete');
      }
    }
  }

  // Ticker Pip click support on mobile
  tickerPips.forEach((pip) => {
    pip.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetIdx = parseInt(pip.getAttribute('data-index'), 10);
      if (!isNaN(targetIdx)) {
        goToMobileCard(targetIdx);
      }
    });
  });

  // Tap on completion pill smoothly scrolls to philosophy section
  if (completionPill) {
    completionPill.addEventListener('click', (e) => {
      e.stopPropagation();
      const philosophySec = document.getElementById('philosophy');
      if (philosophySec) {
        if (lenis) {
          lenis.scrollTo(philosophySec, { duration: 1.1, lock: false });
        } else {
          philosophySec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  // ========================================================================
  // MOBILE GESTURE-BASED SCROLL INTERCEPTION
  // - While cycling through stories 1 to 4: swipes advance to the next story.
  // - On Story 1: swiping DOWN allows natural page scrolling UP to bento grid.
  // - On Story 5 (or once all are explored): NATURAL PAGE SCROLLING IS TURNED ON!
  //   Swiping or scrolling down/up directly moves the page down/up with native physics.
  // ========================================================================
  let gestureStartY = 0;
  let gestureStartX = 0;
  let isInteracting = false;
  let isMouseMode = false;
  let hasDragged = false;
  let wheelAccumulator = 0;

  function isReviewsInActiveView() {
    if (!sectionReviews) return false;
    const rect = sectionReviews.getBoundingClientRect();
    const vh = window.innerHeight || 667;
    return rect.top < vh * 0.75 && rect.bottom > vh * 0.25;
  }

  if (sectionReviews) {
    // 1. TOUCH SWIPES (Mobile Phones & Tablets - iPhone SE & all mobile viewports)
    sectionReviews.addEventListener('touchstart', (e) => {
      if (window.innerWidth > 768) return;
      if (e.touches && e.touches.length) {
        gestureStartY = e.touches[0].clientY;
        gestureStartX = e.touches[0].clientX;
        isInteracting = true;
        isMouseMode = false;
        hasDragged = false;
      }
    }, { passive: true });

    sectionReviews.addEventListener('touchmove', (e) => {
      if (window.innerWidth > 768 || !isInteracting || isMouseMode) return;
      if (!e.touches || !e.touches.length) return;

      const currentY = e.touches[0].clientY;
      const currentX = e.touches[0].clientX;
      const diffY = currentY - gestureStartY;
      const diffX = currentX - gestureStartX;

      if (Math.abs(diffY) > 8 || Math.abs(diffX) > 8) {
        hasDragged = true;
      }

      // If all videos have been explored, or currently on the last video (Story 5):
      // NATURAL SCROLLING IS TURNED ON! Do NOT prevent default!
      if (hasExploredAllReviews || mobileActiveIdx === N - 1) {
        if (sectionReviews) {
          sectionReviews.removeAttribute('data-lenis-prevent');
        }
        return; // Allow native page scroll to freely roll down to #philosophy or up to #bentoGrid!
      }

      if (isReviewsInActiveView() && Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 8) {
        if (diffY < -8) {
          // Swiping UP: advance video while incomplete
          if (mobileActiveIdx < N - 1) {
            e.preventDefault();
          }
        } else if (diffY > 8) {
          // Swiping DOWN: retreat video, or allow natural page scroll up if on first video
          if (mobileActiveIdx > 0) {
            e.preventDefault();
          } else {
            // On Story 1 swiping down -> turn on natural scroll up to #bentoGrid!
            if (sectionReviews) {
              sectionReviews.removeAttribute('data-lenis-prevent');
            }
          }
        }
      }
    }, { passive: false });

    sectionReviews.addEventListener('touchend', (e) => {
      if (window.innerWidth > 768 || !isInteracting || isMouseMode) return;
      isInteracting = false;
      if (!e.changedTouches || !e.changedTouches.length) return;

      if (hasExploredAllReviews || mobileActiveIdx === N - 1) {
        setTimeout(() => { hasDragged = false; }, 80);
        return;
      }

      const endY = e.changedTouches[0].clientY;
      const endX = e.changedTouches[0].clientX;
      const diffY = endY - gestureStartY;
      const diffX = endX - gestureStartX;

      if (isReviewsInActiveView() && Math.abs(diffY) > 20 && Math.abs(diffY) > Math.abs(diffX)) {
        if (diffY < -20) {
          if (mobileActiveIdx < N - 1) {
            goToMobileCard(mobileActiveIdx + 1);
          }
        } else if (diffY > 20) {
          if (mobileActiveIdx > 0) {
            goToMobileCard(mobileActiveIdx - 1);
          }
        }
      }
      setTimeout(() => { hasDragged = false; }, 80);
    }, { passive: true });

    // 2. MOUSE CLICK-AND-DRAG GESTURE
    sectionReviews.addEventListener('mousedown', (e) => {
      if (window.innerWidth > 768 || hasExploredAllReviews || mobileActiveIdx === N - 1) return;
      if (e.button !== 0) return;

      isInteracting = true;
      isMouseMode = true;
      hasDragged = false;
      gestureStartY = e.clientY;
      gestureStartX = e.clientX;
      sectionReviews.classList.add('is-dragging');
    });

    window.addEventListener('mousemove', (e) => {
      if (window.innerWidth > 768 || !isInteracting || !isMouseMode || hasExploredAllReviews || mobileActiveIdx === N - 1) return;

      const diffY = e.clientY - gestureStartY;
      const diffX = e.clientX - gestureStartX;

      if (Math.abs(diffY) > 8 || Math.abs(diffX) > 8) {
        hasDragged = true;
      }

      if (isReviewsInActiveView() && Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 8) {
        if (diffY < -8 && mobileActiveIdx < N - 1) {
          e.preventDefault();
        } else if (diffY > 8 && mobileActiveIdx > 0) {
          e.preventDefault();
        }
      }
    }, { passive: false });

    window.addEventListener('mouseup', (e) => {
      if (!isInteracting || !isMouseMode) return;
      isInteracting = false;
      isMouseMode = false;
      sectionReviews.classList.remove('is-dragging');

      if (window.innerWidth > 768 || hasExploredAllReviews || mobileActiveIdx === N - 1) return;

      const diffY = e.clientY - gestureStartY;
      const diffX = e.clientX - gestureStartX;

      if (isReviewsInActiveView() && Math.abs(diffY) > 20 && Math.abs(diffY) > Math.abs(diffX)) {
        if (diffY < -20 && mobileActiveIdx < N - 1) {
          goToMobileCard(mobileActiveIdx + 1);
        } else if (diffY > 20 && mobileActiveIdx > 0) {
          goToMobileCard(mobileActiveIdx - 1);
        }
      }
      setTimeout(() => { hasDragged = false; }, 80);
    });

    // 3. MOUSE WHEEL / TRACKPAD SCROLL GESTURE
    function handleMobileWheel(e) {
      if (window.innerWidth > 768) return;
      if (!isReviewsInActiveView()) return;

      if (hasExploredAllReviews || mobileActiveIdx === N - 1) {
        if (sectionReviews) {
          sectionReviews.removeAttribute('data-lenis-prevent');
        }
        return; // Natural wheel scrolling is ON!
      }

      if (e.deltaY > 0) {
        // Rolling wheel DOWN (wants to see next video)
        if (mobileActiveIdx < N - 1) {
          e.preventDefault();
          e.stopPropagation();
          wheelAccumulator += Math.abs(e.deltaY);

          if (!isWheelThrottled && wheelAccumulator >= 16) {
            isWheelThrottled = true;
            wheelAccumulator = 0;
            goToMobileCard(mobileActiveIdx + 1);
            setTimeout(() => {
              isWheelThrottled = false;
              wheelAccumulator = 0;
            }, 380);
          }
        }
      } else if (e.deltaY < 0) {
        // Rolling wheel UP (wants to see previous video or scroll back up)
        if (mobileActiveIdx > 0) {
          e.preventDefault();
          e.stopPropagation();
          wheelAccumulator += Math.abs(e.deltaY);

          if (!isWheelThrottled && wheelAccumulator >= 16) {
            isWheelThrottled = true;
            wheelAccumulator = 0;
            goToMobileCard(mobileActiveIdx - 1);
            setTimeout(() => {
              isWheelThrottled = false;
              wheelAccumulator = 0;
            }, 380);
          }
        } else {
          // mobileActiveIdx === 0: Allow natural wheel scroll back up to #bentoGrid
          if (sectionReviews) {
            sectionReviews.removeAttribute('data-lenis-prevent');
          }
        }
      }
    }

    sectionReviews.addEventListener('wheel', handleMobileWheel, { passive: false });
    window.addEventListener('wheel', (e) => {
      if (window.innerWidth <= 768 && isReviewsInActiveView()) {
        handleMobileWheel(e);
      }
    }, { passive: false });
  }

  // Calculate card position along diagonal vector matching pin.it/THpXwdmzm (Desktop Only)
  // Trajectory: bottom-right to top-left (~34 deg)
  function updateDiagonalStage() {
    if (window.innerWidth <= 768) return; // Handled via discrete mobile gesture locking
    const rect = scrollTrack.getBoundingClientRect();
    const trackH = scrollTrack.offsetHeight - window.innerHeight;
    const scrolled = Math.max(0, Math.min(trackH, -rect.top));
    const progress = trackH > 0 ? scrolled / trackH : 0;
    
    // Virtual position parameter: t from 0 to N-1
    const t = progress * (N - 1);
    const newActiveIdx = Math.max(0, Math.min(N - 1, Math.round(t)));

    // Viewport-aware step vectors
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024 && !isMobile;
    
    // On mobile screens, cards travel directly through center (stepX = 0)
    // so no video is flung off to the side, and all 5 scroll into view sequentially
    const stepX = isMobile ? 0 : (isTablet ? 320 : 390);
    const stepY = isMobile ? Math.min(window.innerHeight * 0.76, 450) : (isTablet ? 250 : 265);

    // 1. Update diagonal video cards
    cards.forEach((card, i) => {
      const delta = i - t; // 0 = exactly centered
      const dist = Math.abs(delta);
      const video = card.querySelector('.card-video');

      // Coordinate on diagonal trajectory
      const x = delta * stepX;
      const y = delta * stepY;
      const zTranslate = -dist * (isMobile ? 35 : 60);

      // Organic dynamic rotation: 0deg when focal, slight organic tilt when away
      const rot = isMobile 
        ? Math.max(-4, Math.min(4, delta * 3)) 
        : Math.max(-8, Math.min(8, delta * 5.5));

      // Scaling and opacity
      const scale = isMobile 
        ? Math.max(0.85, 1.05 - dist * 0.22)
        : Math.max(0.84, 1.14 - dist * 0.28);
        
      const opacity = isMobile
        ? Math.max(0, 1.0 - Math.pow(dist, 1.4))
        : Math.max(0.18, 1.0 - Math.pow(dist / 2.4, 1.6));
        
      const zIndex = Math.round(50 - dist * 10);

      card.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, ${zTranslate.toFixed(1)}px) rotate(${rot.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
      card.style.opacity = opacity.toFixed(3);
      card.style.zIndex = zIndex;
      card.style.pointerEvents = dist < 0.6 ? 'auto' : 'none';

      // Active state classes and video playback
      if (i === newActiveIdx) {
        if (!card.classList.contains('is-active-focal')) {
          card.classList.add('is-active-focal');
        }
        if (video) {
          video.muted = isAudioMuted;
          if (video.paused && (!modal || !modal.classList.contains('active'))) {
            const p = video.play();
            if (p) p.catch(() => {});
          }
        }
      } else {
        if (card.classList.contains('is-active-focal')) {
          card.classList.remove('is-active-focal');
        }
        if (video && !video.paused) {
          video.pause();
        }
      }
    });

    // 2. Multi-layered Parallax Typography Drift (Counter-direction kinetic marquee)
    if (parallaxBg) {
      const row1 = parallaxBg.querySelector('.row-1');
      const row2 = parallaxBg.querySelector('.row-2');
      if (row1) row1.style.transform = `translate3d(${(-progress * 280).toFixed(1)}px, 0, 0)`;
      if (row2) row2.style.transform = `translate3d(${(progress * 280).toFixed(1)}px, 0, 0)`;
    }

    // 4. Progress bar fill & Pips
    if (progressFill) {
      progressFill.style.width = `${((newActiveIdx + 1) / N) * 100}%`;
    }
    pips.forEach((pip, idx) => {
      pip.classList.toggle('active', idx === newActiveIdx);
    });

    // 5. Update Live HUD on active card transition
    if (newActiveIdx !== activeIndex) {
      activeIndex = newActiveIdx;
      updateLiveHud(activeIndex);
    }
  }

  function updateLiveHud(idx) {
    const data = MOFEAZ_VIDEO_REVIEWS[idx];
    if (!data) return;

    if (hudStepCount) hudStepCount.textContent = `STORY 0${idx + 1} // 0${N}`;
    if (hudBenefitTag) hudBenefitTag.textContent = data.categoryLabel;
    if (hudReviewerTitle) {
      hudReviewerTitle.innerHTML = `${data.name} <span class="hud-city">${data.location}</span>`;
    }
    if (hudQuote) {
      hudQuote.textContent = `“${data.headline.replace(/^[“”"]+|[“”"]+$/g, '')}”`;
    }
    if (hudProductName) hudProductName.textContent = data.productTitle;
    if (hudProductPrice) hudProductPrice.textContent = data.productPrice;

    if (hudProductAddBtn) {
      hudProductAddBtn.onclick = (e) => {
        e.stopPropagation();
        if (typeof window.addToBag === 'function') {
          window.addToBag(data.productId);
        }
      };
    }
  }

  // Initial HUD setup
  updateLiveHud(0);

  // Viewport resize and init handler
  function handleResizeOrInit() {
    if (window.innerWidth <= 768) {
      goToMobileCard(mobileActiveIdx);
    } else {
      cards.forEach(card => {
        card.style.transition = '';
      });
      updateDiagonalStage();
    }
  }

  // Scroll listener with requestAnimationFrame throttling (Desktop only)
  function onScroll() {
    if (window.innerWidth <= 768) return;
    if (!isTicking) {
      requestAnimationFrame(() => {
        updateDiagonalStage();
        isTicking = false;
      });
      isTicking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', handleResizeOrInit, { passive: true });
  if (typeof lenis !== 'undefined' && lenis) {
    lenis.on('scroll', onScroll);
  }
  // Trigger initial placement
  handleResizeOrInit();

  // Audio Toggle Button
  if (audioToggle) {
    audioToggle.addEventListener('click', () => {
      isAudioMuted = !isAudioMuted;
      audioToggle.classList.toggle('audio-active', !isAudioMuted);
      if (audioToggleLabel) {
        audioToggleLabel.textContent = isAudioMuted ? 'AUDIO OFF' : 'AUDIO ON';
      }

      // Apply audio setting to currently focal card video
      cards.forEach((card, i) => {
        const video = card.querySelector('.card-video');
        if (video) {
          if (i === activeIndex) {
            video.muted = isAudioMuted;
            video.volume = 1.0;
            if (!isAudioMuted && video.paused) {
              const p = video.play();
              if (p) p.catch(() => {});
            }
          } else {
            video.muted = true;
          }
        }
      });
    });
  }

  // Pip Navigation: Click pip to smoothly glide to that card's scroll position (Desktop)
  pips.forEach((pip, targetIdx) => {
    pip.addEventListener('click', () => {
      const trackH = scrollTrack.offsetHeight - window.innerHeight;
      const targetProgress = targetIdx / (N - 1);
      const targetY = scrollTrack.offsetTop + targetProgress * trackH;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
  });

  // Card Clicks:
  // - On mobile: click inactive card to view it, click active card to open full reel modal.
  // - On desktop: click inactive card to scroll to it, click active card to open full reel modal.
  cards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      // If user was dragging via touch or mouse, suppress click
      if (hasDragged) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (window.innerWidth <= 768) {
        if (idx !== mobileActiveIdx) {
          goToMobileCard(idx);
        } else {
          openReelModal(idx);
        }
        return;
      }
      if (idx !== activeIndex) {
        const trackH = scrollTrack.offsetHeight - window.innerHeight;
        const targetProgress = idx / (N - 1);
        const targetY = scrollTrack.offsetTop + targetProgress * trackH;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      } else {
        openReelModal(idx);
      }
    });

    const playBtn = card.querySelector('.card-play-btn');
    if (playBtn) {
      playBtn.addEventListener('click', (e) => {
        if (hasDragged) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        e.stopPropagation();
        openReelModal(idx);
      });
    }
  });

  // ========================================================================
  // REEL MODAL PLAYER (Full Immersive Video Experience with High-Fidelity Audio)
  // ========================================================================
  function openReelModal(index) {
    const data = MOFEAZ_VIDEO_REVIEWS[index];
    if (!data || !modal) return;

    currentReelModalIdx = index;

    // Pause all background cards while modal is active
    cards.forEach((card) => {
      const v = card.querySelector('.card-video');
      if (v) v.pause();
    });

    if (modalReviewerName) modalReviewerName.textContent = data.name;
    if (modalReviewerCity) modalReviewerCity.textContent = `${data.role} • ${data.location}`;
    if (modalBenefitBadge) modalBenefitBadge.textContent = data.categoryLabel;
    if (modalQuoteText) modalQuoteText.textContent = `“${data.quote}”`;
    if (modalProductTitle) modalProductTitle.textContent = data.productTitle;
    if (modalProductPrice) modalProductPrice.textContent = data.productPrice;
    if (modalProductCompare) modalProductCompare.textContent = data.productCompare;
    if (modalProductImg) {
      modalProductImg.src = data.productImg;
      modalProductImg.alt = data.productTitle;
    }
    if (modalReelCounter) {
      modalReelCounter.textContent = `${index + 1} / ${MOFEAZ_VIDEO_REVIEWS.length}`;
    }

    if (modalProductAddBtn) {
      modalProductAddBtn.onclick = () => {
        if (typeof window.addToBag === 'function') {
          window.addToBag(data.productId);
        }
        closeReelModal();
      };
    }

    if (videoPlayer) {
      if (modalLoader) modalLoader.style.display = 'block';
      videoPlayer.src = data.fullVideo || data.shortVideo;
      videoPlayer.muted = false;
      videoPlayer.volume = 1.0;
      videoPlayer.oncanplay = () => {
        if (modalLoader) modalLoader.style.display = 'none';
        const p = videoPlayer.play();
        if (p) p.catch(() => {});
      };
      videoPlayer.load();
    }

    modal.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeReelModal() {
    if (!modal) return;
    if (videoPlayer) {
      videoPlayer.pause();
      videoPlayer.removeAttribute('src');
      videoPlayer.load();
    }
    modal.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';

    // Resume the active focal card
    const focalCard = cards[activeIndex];
    if (focalCard) {
      const v = focalCard.querySelector('.card-video');
      if (v) {
        v.muted = isAudioMuted;
        const p = v.play();
        if (p) p.catch(() => {});
      }
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeReelModal);
  if (overlay) overlay.addEventListener('click', closeReelModal);

  if (prevReelBtn) {
    prevReelBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prevIdx = (currentReelModalIdx - 1 + MOFEAZ_VIDEO_REVIEWS.length) % MOFEAZ_VIDEO_REVIEWS.length;
      openReelModal(prevIdx);
    });
  }

  if (nextReelBtn) {
    nextReelBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const nextIdx = (currentReelModalIdx + 1) % MOFEAZ_VIDEO_REVIEWS.length;
      openReelModal(nextIdx);
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') {
      closeReelModal();
    } else if (e.key === 'ArrowLeft') {
      const prevIdx = (currentReelModalIdx - 1 + MOFEAZ_VIDEO_REVIEWS.length) % MOFEAZ_VIDEO_REVIEWS.length;
      openReelModal(prevIdx);
    } else if (e.key === 'ArrowRight') {
      const nextIdx = (currentReelModalIdx + 1) % MOFEAZ_VIDEO_REVIEWS.length;
      openReelModal(nextIdx);
    }
  });

  window.openReviewModal = openReelModal;
  window.closeReviewModal = closeReelModal;
}


// ==========================================================================
// 14. FOUNDER STAGE IMAGE CURSOR INTERACTION (Reference: pin.it/5IluAuAKC)
// Ultra-smooth boundary transitions, continuous lerp physics, and phone gestures
// Supports desktop cursor tracking, mobile touch drag/pan, and gyroscope tilt
// ==========================================================================
function initFounderParallax() {
  const section = document.getElementById('founder');
  const imageCursor = document.getElementById('founderCursorImage');
  const typoCanvas = document.getElementById('founderTypoCanvas');
  if (!section || !imageCursor) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let targetRotX = 0, targetRotY = 0, targetRotZ = 0;
  let currentRotX = 0, currentRotY = 0, currentRotZ = 0;
  let targetOpacity = 0, currentOpacity = 0;
  let targetScale = 0.88, currentScale = 0.88;
  let isInside = false;
  let lastClientX = null, lastClientY = null;
  let lastMouseX = 0, lastMouseY = 0;
  let velX = 0, velY = 0;

  // Phone gesture & sensor states
  let isTouching = false;
  let lastTouchX = 0, lastTouchY = 0;
  let gyroOffsetX = 0, gyroOffsetY = 0;
  let gyroRotX = 0, gyroRotY = 0, gyroRotZ = 0;

  // Track global client coordinates for scroll calculations
  window.addEventListener('mousemove', function(e) {
    lastClientX = e.clientX;
    lastClientY = e.clientY;
  }, { passive: true });

  // Mobile Device Orientation / Gyroscope tilt interaction
  window.addEventListener('deviceorientation', function(e) {
    if (e.gamma !== null && e.beta !== null) {
      const gamma = Math.max(-30, Math.min(30, e.gamma || 0));
      const beta = Math.max(-25, Math.min(25, (e.beta || 45) - 45));
      gyroOffsetX = (gamma / 30) * 35;
      gyroOffsetY = (beta / 25) * 28;
      gyroRotY = (gamma / 30) * 12;
      gyroRotX = (-beta / 25) * 10;
      gyroRotZ = (gamma / 30) * 5;
    }
  }, { passive: true });

  // Helper to calculate bounded coordinates within text arena
  function computeBoundedTarget(mouseX, mouseY) {
    if (!typoCanvas) return { x: mouseX, y: mouseY, normX: 0, normY: 0, rawDx: 0, rawDy: 0 };

    const secRect = section.getBoundingClientRect();
    const typoRect = typoCanvas.getBoundingClientRect();

    const textMinX = typoRect.left - secRect.left;
    const textMaxX = typoRect.right - secRect.left;
    const textMinY = typoRect.top - secRect.top;
    const textMaxY = typoRect.bottom - secRect.top;

    // Generous buffer slightly outside the text part
    const isMobile = window.innerWidth <= 768;
    const paddingX = isMobile ? 40 : 75;
    const paddingY = isMobile ? 35 : 50;

    const boundMinX = textMinX - paddingX;
    const boundMaxX = textMaxX + paddingX;
    const boundMinY = textMinY - paddingY;
    const boundMaxY = textMaxY + paddingY;

    const boundedX = Math.max(boundMinX, Math.min(boundMaxX, mouseX));
    const boundedY = Math.max(boundMinY, Math.min(boundMaxY, mouseY));

    const textCenterX = (textMinX + textMaxX) / 2;
    const textCenterY = (textMinY + textMaxY) / 2;
    const spanX = ((boundMaxX - boundMinX) / 2) || 1;
    const spanY = ((boundMaxY - boundMinY) / 2) || 1;

    const normX = Math.max(-1, Math.min(1, (boundedX - textCenterX) / spanX));
    const normY = Math.max(-1, Math.min(1, (boundedY - textCenterY) / spanY));

    const rawDx = mouseX - boundedX;
    const rawDy = mouseY - boundedY;

    return { x: boundedX, y: boundedY, normX, normY, rawDx, rawDy };
  }

  function onMouseEnter(e) {
    isInside = true;
    targetOpacity = 1;
    targetScale = 1.0;

    lastClientX = e.clientX;
    lastClientY = e.clientY;

    const secRect = section.getBoundingClientRect();
    const mouseX = e.clientX - secRect.left;
    const mouseY = e.clientY - secRect.top;

    const bounded = computeBoundedTarget(mouseX, mouseY);
    targetX = bounded.x;
    targetY = bounded.y;

    if (currentOpacity < 0.08) {
      currentX = bounded.x;
      currentY = bounded.y;
      currentRotX = 0;
      currentRotY = 0;
      currentRotZ = 0;
    }

    lastMouseX = mouseX;
    lastMouseY = mouseY;
  }

  function onMouseMove(e) {
    lastClientX = e.clientX;
    lastClientY = e.clientY;

    if (!isInside) {
      isInside = true;
      targetOpacity = 1;
      targetScale = 1.0;
    }

    const secRect = section.getBoundingClientRect();
    const mouseX = e.clientX - secRect.left;
    const mouseY = e.clientY - secRect.top;

    const bounded = computeBoundedTarget(mouseX, mouseY);
    targetX = bounded.x;
    targetY = bounded.y;

    velX = mouseX - lastMouseX;
    velY = mouseY - lastMouseY;
    lastMouseX = mouseX;
    lastMouseY = mouseY;
  }

  function onMouseLeave() {
    isInside = false;
    targetOpacity = 0;
    targetScale = 0.88;
    targetRotX = 0;
    targetRotY = 0;
    targetRotZ = 0;
    document.body.classList.remove('cursor-in-founder');
  }

  // Mobile Touch Gestures (drag/pan across founder section)
  function onTouchStart(e) {
    if (!e.touches || e.touches.length === 0) return;
    isTouching = true;
    isInside = true;
    targetOpacity = 1;
    targetScale = 1.06;

    const touch = e.touches[0];
    const secRect = section.getBoundingClientRect();
    const tx = touch.clientX - secRect.left;
    const ty = touch.clientY - secRect.top;

    lastTouchX = tx;
    lastTouchY = ty;
    velX = 0;
    velY = 0;

    const bounded = computeBoundedTarget(tx, ty);
    targetX = bounded.x;
    targetY = bounded.y;

    if (currentOpacity < 0.08) {
      currentX = bounded.x;
      currentY = bounded.y;
    }
  }

  function onTouchMove(e) {
    if (!isTouching || !e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];
    const secRect = section.getBoundingClientRect();
    const tx = touch.clientX - secRect.left;
    const ty = touch.clientY - secRect.top;

    velX = tx - lastTouchX;
    velY = ty - lastTouchY;
    lastTouchX = tx;
    lastTouchY = ty;

    const bounded = computeBoundedTarget(tx, ty);
    targetX = bounded.x;
    targetY = bounded.y;

    targetRotZ = Math.max(-12, Math.min(12, velX * 0.45));
    targetRotY = Math.max(-14, Math.min(14, velX * 0.55));
    targetRotX = Math.max(-12, Math.min(12, -velY * 0.45));
  }

  function onTouchEnd() {
    isTouching = false;
    targetScale = 1.0;
    targetRotZ = 0;
    targetRotX = 0;
    targetRotY = 0;
  }

  // Scroll awareness: gracefully transition when scrolling in or out of the section
  function onScrollCheck() {
    const secRect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      const inView = secRect.top < vh * 0.75 && secRect.bottom > vh * 0.25;
      if (inView) {
        if (!isInside) {
          isInside = true;
          targetOpacity = 1;
          targetScale = 1.0;
        }
      } else {
        if (isInside && !isTouching) {
          isInside = false;
          targetOpacity = 0;
          targetScale = 0.88;
        }
      }
      return;
    }

    if (lastClientX === null || lastClientY === null) return;
    const insideNow = (
      lastClientX >= secRect.left &&
      lastClientX <= secRect.right &&
      lastClientY >= secRect.top &&
      lastClientY <= secRect.bottom
    );

    if (insideNow) {
      if (!isInside) {
        isInside = true;
        targetOpacity = 1;
        targetScale = 1.0;
      }
      const mouseX = lastClientX - secRect.left;
      const mouseY = lastClientY - secRect.top;
      const bounded = computeBoundedTarget(mouseX, mouseY);
      targetX = bounded.x;
      targetY = bounded.y;
    } else {
      if (isInside) {
        isInside = false;
        targetOpacity = 0;
        targetScale = 0.88;
        targetRotX = 0;
        targetRotY = 0;
        targetRotZ = 0;
        document.body.classList.remove('cursor-in-founder');
      }
    }
  }

  section.addEventListener('mouseenter', onMouseEnter);
  section.addEventListener('mousemove', onMouseMove, { passive: true });
  section.addEventListener('mouseleave', onMouseLeave);
  section.addEventListener('touchstart', onTouchStart, { passive: true });
  section.addEventListener('touchmove', onTouchMove, { passive: true });
  section.addEventListener('touchend', onTouchEnd, { passive: true });
  section.addEventListener('touchcancel', onTouchEnd, { passive: true });
  window.addEventListener('scroll', onScrollCheck, { passive: true });

  // 60fps render loop with continuous smooth easing
  function updateImageCursor() {
    const isMobile = window.innerWidth <= 768;

    // On mobile, when visible and not actively touching, provide organic ambient floating
    if (isMobile && isInside && !isTouching) {
      const secRect = section.getBoundingClientRect();
      const typoRect = typoCanvas ? typoCanvas.getBoundingClientRect() : secRect;
      const textCenterX = (typoRect.left - secRect.left + typoRect.right - secRect.left) / 2;
      const textCenterY = (typoRect.top - secRect.top + typoRect.bottom - secRect.top) / 2;

      const now = performance.now();
      const idleFloatX = Math.sin(now * 0.0016) * 16 + gyroOffsetX;
      const idleFloatY = Math.cos(now * 0.0020) * 12 + gyroOffsetY;
      const idleRotZ = Math.sin(now * 0.0014) * 2.5 + gyroRotZ;

      targetX = textCenterX + idleFloatX;
      targetY = textCenterY + idleFloatY;
      targetRotX = gyroRotX;
      targetRotY = gyroRotY;
      targetRotZ = idleRotZ;
    }

    // 1. Smoothly interpolate opacity & scale
    const fadeEase = isInside ? 0.12 : 0.08;
    currentOpacity += (targetOpacity - currentOpacity) * fadeEase;
    currentScale += (targetScale - currentScale) * fadeEase;

    // Control visibility to avoid rendering when completely invisible
    if (currentOpacity > 0.005) {
      imageCursor.style.visibility = 'visible';
      imageCursor.style.opacity = currentOpacity.toFixed(3);
    } else {
      imageCursor.style.visibility = 'hidden';
      imageCursor.style.opacity = '0';
    }

    // 2. Smoothly interpolate position & 3D rotation
    const ease = isMobile ? 0.14 : 0.12;
    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;

    const bounded = computeBoundedTarget(currentX, currentY);

    if (isInside && !isMobile) {
      // Toggle custom cursor: active when within text arena
      if (Math.abs(bounded.rawDx) > 18 || Math.abs(bounded.rawDy) > 18) {
        document.body.classList.remove('cursor-in-founder');
      } else {
        document.body.classList.add('cursor-in-founder');
      }

      // 3D perspective tilt with natural lean towards cursor position
      const pullLeanY = Math.max(-6, Math.min(6, bounded.rawDx * 0.025));
      const pullLeanX = Math.max(-6, Math.min(6, -bounded.rawDy * 0.025));

      targetRotX = (-bounded.normY * 8) + pullLeanX;
      targetRotY = (bounded.normX * 10) + pullLeanY;
      targetRotZ = Math.max(-9, Math.min(9, velX * 0.18));

      velX *= 0.86;
      velY *= 0.86;
    }

    const rotEase = 0.09;
    currentRotX += (targetRotX - currentRotX) * rotEase;
    currentRotY += (targetRotY - currentRotY) * rotEase;
    currentRotZ += (targetRotZ - currentRotZ) * rotEase;

    // Apply coordinates and 3D transforms
    imageCursor.style.left = `${currentX.toFixed(1)}px`;
    imageCursor.style.top = `${currentY.toFixed(1)}px`;
    imageCursor.style.transform = `translate(-50%, -50%) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) rotateZ(${currentRotZ.toFixed(2)}deg) scale(${currentScale.toFixed(3)})`;

    // Subtle counter-parallax on centered behind text
    if (typoCanvas) {
      const textShiftX = isInside ? (-bounded.normX * (isMobile ? 6 : 12)).toFixed(1) : 0;
      const textShiftY = isInside ? (-bounded.normY * (isMobile ? 4 : 8)).toFixed(1) : 0;
      typoCanvas.style.transform = `translate3d(${textShiftX}px, ${textShiftY}px, 0)`;
    }

    requestAnimationFrame(updateImageCursor);
  }

  requestAnimationFrame(updateImageCursor);
}


  // ==========================================================================
  // ==========================================================================
  // ==========================================================================
  // 16. MOON CYCLE MAP // PITCH BLACK SPACE, PHOTOREALISTIC MOON & PIN MOTION
  // Smooth mathematical terminator shader, 60fps canvas, and floating typography
  // ==========================================================================
  function initMoonCycleMap() {
    const section = document.getElementById('howItWorks');
    const track = document.getElementById('moonScrollTrack');
    const viewport = document.getElementById('moonStickyViewport');
    const canvas = document.getElementById('moonCanvas');
    const halo = document.getElementById('moonAmbientGlow');
    const dayCounter = document.getElementById('moonCycleDayCounter');

    if (!section || !track || !viewport || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load authentic high-resolution NASA lunar photograph
    const moonImg = new Image();
    let imgLoaded = false;
    moonImg.onload = () => {
      imgLoaded = true;
    };
    moonImg.src = 'assets/images/real-bright-full-moon.png';
    if (moonImg.complete) {
      imgLoaded = true;
    }

    // Editorial Floating Words (pin.it/59D8NXaLg style)
    const wordTopRight = document.getElementById('wordTopRight');
    const wordMidLeft = document.getElementById('wordMidLeft');
    const wordBottomLeft = document.getElementById('wordBottomLeft');
    const wordBottomRight = document.getElementById('wordBottomRight');
    const allWords = [wordTopRight, wordMidLeft, wordBottomLeft, wordBottomRight];

    const CYCLE_PHASES = [
      {
        threshold: 0.20,
        dayRange: 'DAYS 1–5',
        moonLabel: 'NEW MOON',
        words: {
          topRight: 'Rhythm',
          midLeft: 'Release &',
          bottomLeft: 'Renew',
          bottomRight: 'With Zinc & Lignans'
        }
      },
      {
        threshold: 0.48,
        dayRange: 'DAYS 6–13',
        moonLabel: 'WAXING MOON',
        words: {
          topRight: 'Energy',
          midLeft: 'Natural',
          bottomLeft: 'Estrogen',
          bottomRight: 'Balance & Clarity'
        }
      },
      {
        threshold: 0.58,
        dayRange: 'DAYS 14–15',
        moonLabel: 'FULL MOON',
        words: {
          topRight: 'Glow',
          midLeft: 'The Peak',
          bottomLeft: 'Of Radiance',
          bottomRight: 'Cellular Protection'
        }
      },
      {
        threshold: 1.01,
        dayRange: 'DAYS 16–28',
        moonLabel: 'WANING MOON',
        words: {
          topRight: 'Calm',
          midLeft: 'Deep Sleep',
          bottomLeft: '& Zero',
          bottomRight: 'PMS Cravings'
        }
      }
    ];

    let currentPhaseIndex = 0;
    let isTransitioning = false;
    let targetProgress = 0;
    let smoothProgress = 0;

    // Mobile gesture & mouse interaction state
    const mobileTicker = document.getElementById('moonMobileTicker');
    const tickerFill = document.getElementById('moonTickerFill');
    const mobileCounter = document.getElementById('moonMobileCounter');
    const completionPill = document.getElementById('moonCompletionPill');

    let mobileMoonProgress = 0.0;
    let hasExploredAllMoon = false;
    let isInteracting = false;
    let isMouseMode = false;
    let gestureStartY = 0;
    let gestureStartX = 0;
    let hasDragged = false;
    let wheelAccumulator = 0;
    let isWheelThrottled = false;

    function isMoonInActiveView() {
      if (!section) return false;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 667;
      return rect.top < vh * 0.75 && rect.bottom > vh * 0.25;
    }

    function updateMobileMoonProgress(newProg) {
      mobileMoonProgress = Math.max(0, Math.min(1.0, newProg));

      if (mobileMoonProgress >= 0.98) {
        hasExploredAllMoon = true;
      }

      // Lock Lenis smooth scroll while moon cycle is incomplete; unlock completely when explored
      if (section) {
        if (!hasExploredAllMoon && mobileMoonProgress < 0.98) {
          section.setAttribute('data-lenis-prevent', 'true');
        } else {
          section.removeAttribute('data-lenis-prevent');
          section.classList.add('moon-unlocked');
        }
      }

      // Update ticker fill
      if (tickerFill) {
        tickerFill.style.width = `${Math.max(4, mobileMoonProgress * 100)}%`;
      }

      // Update day counter
      const currentDay = Math.min(28, Math.max(1, Math.round(1 + mobileMoonProgress * 27)));
      const padDay = currentDay < 10 ? `0${currentDay}` : currentDay;
      let phaseLabel = 'NEW MOON';
      if (mobileMoonProgress < 0.20) phaseLabel = 'NEW MOON';
      else if (mobileMoonProgress < 0.48) phaseLabel = 'WAXING MOON';
      else if (mobileMoonProgress < 0.58) phaseLabel = 'FULL MOON';
      else if (mobileMoonProgress < 0.98) phaseLabel = 'WANING MOON';
      else phaseLabel = 'FULL CYCLE';

      if (mobileCounter) {
        mobileCounter.textContent = `DAY ${padDay} OF 28 • ${phaseLabel}`;
      }

      // Reveal completion pill when full cycle reached
      if (completionPill) {
        if (mobileMoonProgress >= 0.98) {
          completionPill.classList.add('is-complete');
        } else {
          completionPill.classList.remove('is-complete');
        }
      }
    }

    // Set initial Lenis lock until full 28-day cycle is finished
    if (section && !hasExploredAllMoon) {
      section.setAttribute('data-lenis-prevent', 'true');
    }

    // Completion pill click: smooth scroll to next section (#faq)
    if (completionPill) {
      completionPill.addEventListener('click', (e) => {
        e.stopPropagation();
        const faqSec = document.getElementById('faq');
        if (faqSec) {
          if (lenis) {
            lenis.scrollTo(faqSec, { duration: 1.1, lock: false });
          } else {
            faqSec.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }

    // 1. TOUCH SWIPES (Mobile Phones, Tablets & Touch Screens)
    section.addEventListener('touchstart', (e) => {
      if (window.innerWidth > 768) return;
      if (e.touches && e.touches.length) {
        gestureStartY = e.touches[0].clientY;
        gestureStartX = e.touches[0].clientX;
        isInteracting = true;
        isMouseMode = false;
        hasDragged = false;
      }
    }, { passive: true });

    section.addEventListener('touchmove', (e) => {
      if (window.innerWidth > 768 || !isInteracting || isMouseMode) return;
      if (!e.touches || !e.touches.length) return;

      const currentY = e.touches[0].clientY;
      const currentX = e.touches[0].clientX;
      const diffY = currentY - gestureStartY;
      const diffX = currentX - gestureStartX;

      if (Math.abs(diffY) > 8 || Math.abs(diffX) > 8) {
        hasDragged = true;
      }

      // If full 28-day cycle has been explored, or currently on Day 28:
      // NATURAL SCROLLING IS TURNED ON! Do NOT prevent default!
      if (hasExploredAllMoon || mobileMoonProgress >= 0.98) {
        if (section) {
          section.removeAttribute('data-lenis-prevent');
        }
        return; // Allow native page scroll to freely roll down to #faq or up to #philosophy!
      }

      if (isMoonInActiveView() && Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 8) {
        if (diffY < -8) {
          // Swiping UP: advance moon cycle while incomplete
          if (mobileMoonProgress < 0.98) {
            e.preventDefault();
          }
        } else if (diffY > 8) {
          // Swiping DOWN: retreat moon cycle, or allow natural page scroll up if on Day 1
          if (mobileMoonProgress > 0.05) {
            e.preventDefault();
          } else {
            // On Day 1 swiping down -> turn on natural scroll up to #philosophy!
            if (section) {
              section.removeAttribute('data-lenis-prevent');
            }
          }
        }
      }
    }, { passive: false });

    section.addEventListener('touchend', (e) => {
      if (window.innerWidth > 768 || !isInteracting || isMouseMode) return;
      isInteracting = false;
      if (!e.changedTouches || !e.changedTouches.length) return;

      if (hasExploredAllMoon || mobileMoonProgress >= 0.98) {
        setTimeout(() => { hasDragged = false; }, 80);
        return;
      }

      const endY = e.changedTouches[0].clientY;
      const endX = e.changedTouches[0].clientX;
      const diffY = endY - gestureStartY;
      const diffX = endX - gestureStartX;

      if (isMoonInActiveView() && Math.abs(diffY) > 20 && Math.abs(diffY) > Math.abs(diffX)) {
        if (diffY < -20) {
          // Swipe UP: advance by 0.25 (one clinical phase per swipe)
          if (mobileMoonProgress < 0.98) {
            updateMobileMoonProgress(mobileMoonProgress + 0.25);
          }
        } else if (diffY > 20) {
          // Swipe DOWN: retreat by 0.25
          if (mobileMoonProgress > 0.05) {
            updateMobileMoonProgress(mobileMoonProgress - 0.25);
          }
        }
      }
      setTimeout(() => { hasDragged = false; }, 80);
    }, { passive: true });

    // 2. MOUSE CLICK-AND-DRAG GESTURE (For testing in mobile device emulator / mouse on mobile & desktop)
    section.addEventListener('mousedown', (e) => {
      if (window.innerWidth > 768 || hasExploredAllMoon || mobileMoonProgress >= 0.98) return;
      if (e.button !== 0) return; // Left mouse button only

      isInteracting = true;
      isMouseMode = true;
      hasDragged = false;
      gestureStartY = e.clientY;
      gestureStartX = e.clientX;
      section.classList.add('is-dragging');
    });

    window.addEventListener('mousemove', (e) => {
      if (window.innerWidth > 768 || !isInteracting || !isMouseMode || hasExploredAllMoon || mobileMoonProgress >= 0.98) return;

      const diffY = e.clientY - gestureStartY;
      const diffX = e.clientX - gestureStartX;

      if (Math.abs(diffY) > 8 || Math.abs(diffX) > 8) {
        hasDragged = true;
      }

      if (isMoonInActiveView() && Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 8) {
        if (diffY < -8 && mobileMoonProgress < 0.98) {
          e.preventDefault();
        } else if (diffY > 8 && mobileMoonProgress > 0.05) {
          e.preventDefault();
        }
      }
    }, { passive: false });

    window.addEventListener('mouseup', (e) => {
      if (!isInteracting || !isMouseMode) return;
      isInteracting = false;
      isMouseMode = false;
      section.classList.remove('is-dragging');

      if (window.innerWidth > 768 || hasExploredAllMoon || mobileMoonProgress >= 0.98) return;

      const diffY = e.clientY - gestureStartY;
      const diffX = e.clientX - gestureStartX;

      if (isMoonInActiveView() && Math.abs(diffY) > 20 && Math.abs(diffY) > Math.abs(diffX)) {
        if (diffY < -20 && mobileMoonProgress < 0.98) {
          updateMobileMoonProgress(mobileMoonProgress + 0.25);
        } else if (diffY > 20 && mobileMoonProgress > 0.05) {
          updateMobileMoonProgress(mobileMoonProgress - 0.25);
        }
      }
      setTimeout(() => { hasDragged = false; }, 80);
    });

    // 3. MOUSE WHEEL / TRACKPAD SCROLL GESTURE
    function handleMoonWheel(e) {
      if (window.innerWidth > 768) return;
      if (!isMoonInActiveView()) return;

      if (hasExploredAllMoon || mobileMoonProgress >= 0.98) {
        if (section) {
          section.removeAttribute('data-lenis-prevent');
        }
        return; // Natural wheel scrolling is ON!
      }

      if (e.deltaY > 0) {
        // Rolling wheel DOWN
        if (mobileMoonProgress < 0.98) {
          e.preventDefault();
          e.stopPropagation();
          wheelAccumulator += Math.abs(e.deltaY);

          if (!isWheelThrottled && wheelAccumulator >= 16) {
            isWheelThrottled = true;
            wheelAccumulator = 0;
            updateMobileMoonProgress(mobileMoonProgress + 0.25);
            setTimeout(() => {
              isWheelThrottled = false;
              wheelAccumulator = 0;
            }, 380);
          }
        }
      } else if (e.deltaY < 0) {
        // Rolling wheel UP
        if (mobileMoonProgress > 0.05) {
          e.preventDefault();
          e.stopPropagation();
          wheelAccumulator += Math.abs(e.deltaY);

          if (!isWheelThrottled && wheelAccumulator >= 16) {
            isWheelThrottled = true;
            wheelAccumulator = 0;
            updateMobileMoonProgress(mobileMoonProgress - 0.25);
            setTimeout(() => {
              isWheelThrottled = false;
              wheelAccumulator = 0;
            }, 380);
          }
        } else {
          // At start of cycle rolling up -> allow natural wheel scroll back up to #philosophy!
          if (section) {
            section.removeAttribute('data-lenis-prevent');
          }
        }
      }
    }

    section.addEventListener('wheel', handleMoonWheel, { passive: false });
    window.addEventListener('wheel', (e) => {
      if (isMoonInActiveView()) {
        handleMoonWheel(e);
      }
    }, { passive: false });

    window.addEventListener('resize', () => {
      if (mobileMoonProgress < 0.98 && section) {
        section.setAttribute('data-lenis-prevent', 'true');
      } else if (section) {
        section.removeAttribute('data-lenis-prevent');
      }
    }, { passive: true });

    // 3D perspective mouse tilt
    let mouseX = 0, mouseY = 0;
    let rotX = 0, rotY = 0;

    viewport.addEventListener('mousemove', (e) => {
      const vRect = viewport.getBoundingClientRect();
      mouseX = ((e.clientX - vRect.left) / vRect.width - 0.5) * 2;
      mouseY = ((e.clientY - vRect.top) / vRect.height - 0.5) * 2;
    }, { passive: true });

    viewport.addEventListener('mouseleave', () => {
      mouseX = 0;
      mouseY = 0;
    });

    // Update floating words with smooth staggered fade
    function updateWords(phaseIdx) {
      if (currentPhaseIndex === phaseIdx || isTransitioning) return;
      currentPhaseIndex = phaseIdx;
      isTransitioning = true;

      const data = CYCLE_PHASES[phaseIdx];
      if (!data) return;

      allWords.forEach(w => w && w.classList.add('updating'));

      setTimeout(() => {
        if (wordTopRight) wordTopRight.innerHTML = `<span class="word-text">${data.words.topRight}</span>`;
        if (wordMidLeft) wordMidLeft.innerHTML = `<span class="word-text">${data.words.midLeft}</span>`;
        if (wordBottomLeft) wordBottomLeft.innerHTML = `<span class="word-text">${data.words.bottomLeft}</span>`;
        if (wordBottomRight) wordBottomRight.innerHTML = `<span class="word-text">${data.words.bottomRight}</span>`;

        allWords.forEach(w => w && w.classList.remove('updating'));
        isTransitioning = false;
      }, 160);
    }

    // Mathematical Terminator Shader (100% Continuous Fluid Illumination on Canvas)
    function drawMoon(p) {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const R = 307; // Exact photographic lunar radius (prevents canvas edge spill)

      ctx.clearRect(0, 0, w, h);

      if (!imgLoaded) return;

      // 1. Faint Earthshine on Unlit Moon Body (Telescopic realism in pitch black space)
      // Strictly clipped inside circular lunar disk of radius R
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();
      ctx.globalAlpha = 0.08;
      ctx.drawImage(moonImg, 0, 0, w, h);
      ctx.fillStyle = 'rgba(2, 2, 6, 0.90)';
      ctx.fillRect(0, 0, w, h);
      ctx.restore();

      // 2. Exact Mathematical Terminator Geometry for Illuminated Lunar Phase
      const prog = Math.max(0.001, Math.min(0.999, p));
      const theta = 2.0 * Math.PI * prog;
      const rx = Math.max(0.1, Math.abs(R * Math.cos(theta)));

      ctx.save();
      ctx.beginPath();

      if (prog <= 0.5) {
        // Waxing (Right side illuminated)
        ctx.arc(cx, cy, R, -Math.PI / 2, Math.PI / 2, false);
        if (prog < 0.25) {
          // Crescent: curves right through 0 deg
          ctx.ellipse(cx, cy, rx, R, 0, Math.PI / 2, -Math.PI / 2, true);
        } else {
          // Gibbous: curves left through 180 deg
          ctx.ellipse(cx, cy, rx, R, 0, Math.PI / 2, -Math.PI / 2, false);
        }
      } else {
        // Waning (Left side illuminated)
        ctx.arc(cx, cy, R, Math.PI / 2, -Math.PI / 2, false);
        if (prog < 0.75) {
          // Gibbous: curves right through 0 deg
          ctx.ellipse(cx, cy, rx, R, 0, -Math.PI / 2, Math.PI / 2, false);
        } else {
          // Crescent: curves left through 180 deg
          ctx.ellipse(cx, cy, rx, R, 0, -Math.PI / 2, Math.PI / 2, true);
        }
      }

      ctx.closePath();
      ctx.clip();

      // 3. Draw Real Bright Photographic Moon
      ctx.globalAlpha = 1.0;
      ctx.drawImage(moonImg, 0, 0, w, h);

      // 4. Subtle Surface Bloom on illuminated disk as it approaches Full Moon
      // Stays 100% inside the circular terminator clip!
      const fullMoonProximity = 1 - Math.min(1, Math.abs(p - 0.5) * 3.5);
      if (fullMoonProximity > 0.02) {
        ctx.globalCompositeOperation = 'screen';
        ctx.globalAlpha = fullMoonProximity * 0.32;
        const innerGlow = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R);
        innerGlow.addColorStop(0, 'rgba(255, 252, 245, 0.45)');
        innerGlow.addColorStop(0.7, 'rgba(245, 230, 210, 0.22)');
        innerGlow.addColorStop(1, 'rgba(220, 205, 185, 0.0)');
        ctx.fillStyle = innerGlow;
        ctx.fillRect(0, 0, w, h);
      }

      ctx.restore();
    }

    // 60fps render loop
    function renderFrame() {
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight || 800;

      if (rect.bottom > 0 && rect.top < vh) {
        targetProgress = mobileMoonProgress;

        // Responsive 60fps continuous easing - stays synchronized with gestures/wheel
        smoothProgress += (targetProgress - smoothProgress) * 0.24;
        if (Math.abs(targetProgress - smoothProgress) < 0.002) {
          smoothProgress = targetProgress;
        }

        // Current Cycle Day (1 to 28)
        const currentDay = Math.min(28, Math.max(1, Math.round(1 + smoothProgress * 27)));
        const padDay = currentDay < 10 ? `0${currentDay}` : currentDay;

        // Render mathematical moon shader
        drawMoon(smoothProgress);

        // Determine active clinical phase
        let phaseIdx = 0;
        if (smoothProgress < 0.20) phaseIdx = 0;
        else if (smoothProgress < 0.48) phaseIdx = 1;
        else if (smoothProgress < 0.58) phaseIdx = 2;
        else phaseIdx = 3;

        updateWords(phaseIdx);

        // Update day counter
        const phaseData = CYCLE_PHASES[phaseIdx];
        if (dayCounter) {
          dayCounter.textContent = `DAY ${padDay} OF 28 • ${phaseData.moonLabel}`;
        }

        // Parallax drift on floating editorial words (Reference: pin.it/59D8NXaLg)
        const isMobileScreen = window.innerWidth <= 768;
        const travelMultiplier = isMobileScreen ? 18 : 80;
        const travel = (smoothProgress - 0.5) * travelMultiplier;
        if (wordTopRight) {
          wordTopRight.style.transform = `translate3d(${(travel * 0.75 + mouseX * 16).toFixed(1)}px, ${(-travel * 0.35 + mouseY * 12).toFixed(1)}px, 0)`;
        }
        if (wordMidLeft) {
          wordMidLeft.style.transform = `translate3d(${(-travel * 1.05 + mouseX * -20).toFixed(1)}px, ${(travel * 0.25 + mouseY * 14).toFixed(1)}px, 0)`;
        }
        if (wordBottomLeft) {
          wordBottomLeft.style.transform = `translate3d(${(-travel * 0.65 + mouseX * -15).toFixed(1)}px, ${(travel * 0.45 + mouseY * 18).toFixed(1)}px, 0)`;
        }
        if (wordBottomRight) {
          wordBottomRight.style.transform = `translate3d(${(travel * 0.85 + mouseX * 22).toFixed(1)}px, ${(travel * 0.35 + mouseY * -12).toFixed(1)}px, 0)`;
        }

        // Ambient glow pulse (Expansive circular lunar bloom around Full Moon)
        if (halo) {
          const fullMoonProximity = 1 - Math.min(1, Math.abs(smoothProgress - 0.5) * 3.5);
          const glowScale = 1 + fullMoonProximity * 0.42;
          const glowOpacity = Math.max(0.20, 0.25 + fullMoonProximity * 0.75).toFixed(2);
          halo.style.transform = `translate(-50%, -50%) scale(${glowScale.toFixed(3)})`;
          halo.style.opacity = glowOpacity;
        }

        // 3D perspective tilt
        rotX += (-mouseY * 8 - rotX) * 0.08;
        rotY += (mouseX * 8 - rotY) * 0.08;
        canvas.style.transform = `perspective(900px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
      }

      requestAnimationFrame(renderFrame);
    }

    requestAnimationFrame(renderFrame);
  }

  // ==========================================================================
  // 17. STICKY VERTICAL WHATSAPP CONTACT TAB & CONCIERGE POPUP
  // Features: Full-text intro -> auto-fade text -> shrink to icon -> retract to edge
  // Curious user interaction: drag/swipe left or tap to reveal popup with nudge animation
  // ==========================================================================
  function initWhatsAppWidget() {
    const tab = document.getElementById('whatsappStickyTab');
    const popup = document.getElementById('whatsappStickyPopup');
    const closeBtn = document.getElementById('whatsappPopupClose');
    const directLink = document.getElementById('whatsappDirectLink');
    const chips = document.querySelectorAll('.whatsapp-chip');

    if (!tab || !popup) return;

    let autoShrinkTimer = null;
    let nudgeInterval = null;

    function openPopup() {
      popup.classList.add('open');
      tab.classList.add('active');
      tab.classList.remove('retracted');
      tab.classList.remove('nudge');
      tab.setAttribute('aria-expanded', 'true');
    }

    function closePopup() {
      popup.classList.remove('open');
      tab.classList.remove('active');
      tab.setAttribute('aria-expanded', 'false');
      // After closing, keep tab tucked into edge to keep screen 100% visible
      setTimeout(retractTab, 300);
    }

    function shrinkToIcon() {
      if (popup.classList.contains('open')) return;
      tab.classList.add('icon-only');
    }

    function retractTab() {
      if (popup.classList.contains('open')) return;
      tab.classList.add('icon-only');
      tab.classList.add('retracted');
    }

    function revealTab() {
      tab.classList.remove('retracted');
      tab.classList.remove('nudge');
    }

    // Phase 1: At the start, user sees text & icon to know what it means
    // Phase 2: After 3.5s, fade the text, shrink the tab to icon only, and tuck into screen edge
    autoShrinkTimer = setTimeout(() => {
      if (!popup.classList.contains('open')) {
        shrinkToIcon();
        setTimeout(retractTab, 400);
      }
    }, 3500);

    // Periodic gentle nudge animation every 11 seconds to invite curious visitors
    nudgeInterval = setInterval(() => {
      if (tab.classList.contains('retracted') && !popup.classList.contains('open')) {
        tab.classList.add('nudge');
        setTimeout(() => {
          tab.classList.remove('nudge');
        }, 1600);
      }
    }, 11000);

    // Desktop hover reveal
    tab.addEventListener('mouseenter', () => {
      if (!popup.classList.contains('open')) {
        revealTab();
      }
    });

    tab.addEventListener('mouseleave', () => {
      if (!popup.classList.contains('open') && tab.classList.contains('icon-only')) {
        setTimeout(() => {
          if (!popup.classList.contains('open') && !tab.matches(':hover')) {
            retractTab();
          }
        }, 1200);
      }
    });

    // Tap / Click handling: if retracted or closed, reveals and opens popup
    tab.addEventListener('click', function(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      clearTimeout(autoShrinkTimer);
      if (popup.classList.contains('open')) {
        closePopup();
      } else {
        openPopup();
      }
    });

    // Touch drag / swipe-left gesture support (drag from edge to reveal popup)
    let touchStartX = 0;
    let touchStartY = 0;
    let isSwiping = false;

    tab.addEventListener('touchstart', function(e) {
      if (e.touches && e.touches.length) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isSwiping = false;
      }
    }, { passive: true });

    tab.addEventListener('touchmove', function(e) {
      if (e.touches && e.touches.length) {
        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = Math.abs(e.touches[0].clientY - touchStartY);
        // Swiping left towards the screen content
        if (deltaX < -10 && deltaY < 35) {
          isSwiping = true;
          revealTab();
        }
      }
    }, { passive: true });

    tab.addEventListener('touchend', function() {
      if (isSwiping) {
        openPopup();
        isSwiping = false;
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closePopup();
      });
    }

    // Quick Consult Topic Chips: update link with customized query and launch WhatsApp
    chips.forEach(chip => {
      chip.addEventListener('click', function(e) {
        e.stopPropagation();
        const msg = this.getAttribute('data-msg');
        if (msg) {
          const url = 'https://wa.me/919876543210?text=' + encodeURIComponent(msg);
          if (directLink) directLink.href = url;
          window.open(url, '_blank', 'noopener,noreferrer');
          closePopup();
        }
      });
    });

    // Close when clicking outside widget
    document.addEventListener('click', function(e) {
      if (popup.classList.contains('open')) {
        const widget = document.getElementById('whatsappStickyWidget');
        if (widget && !widget.contains(e.target)) {
          closePopup();
        }
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && popup.classList.contains('open')) {
        closePopup();
      }
    });
  }

