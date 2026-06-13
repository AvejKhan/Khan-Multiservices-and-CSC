/* ===================================================================
   Khan MultiServices & CSC Center — Interactive Logic & Datastore
   =================================================================== */

// ========== Services Datastore ==========
const SERVICES_DATA = [
  {
    id: "aadhaar",
    title: "Aadhaar Services",
    category: "government",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0 0 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>`,
    desc: "Biometric updates, demographic corrections, mobile linking, and e-Aadhaar downloads.",
    documents: ["Identity Proof (PAN Card, Passport, etc.)", "Address Proof (Voter Card, Electricity Bill)", "Active Mobile Number (for OTP)"],
    fee: "As per UIDAI guidelines",
    duration: "3 - 7 Working Days",
    details: "We assist with new Aadhaar enrollment guidance, mandatory biometric updates, address corrections, name/date of birth edits, mobile number linking, and instant PVC card printing."
  },
  {
    id: "pan-card",
    title: "PAN Card Services",
    category: "government",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h5M7 16h8"/></svg>`,
    desc: "Instant E-PAN, new applications, corrections, reprints, and Aadhaar linking.",
    documents: ["Aadhaar Card", "Proof of Date of Birth (Birth Certificate, School Leaving)", "2 Recent Passport Size Photos (for physical cards)"],
    fee: "Official NSDL fees + minimal processing charges",
    duration: "Instant E-PAN / 10-15 Days for Physical Card",
    details: "Apply for a new Permanent Account Number (PAN) card for individuals, partners, or businesses. We also handle correction of misspelled names, signature mismatches, reprint of lost cards, and Aadhaar linking."
  },
  {
    id: "voter-id",
    title: "Voter ID Services",
    category: "government",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    desc: "New voter registrations, corrections, card shifts, and digital voter card downloads.",
    documents: ["Aadhaar Card", "Age Proof (School Certificate or PAN)", "Address Proof (Ration Card or Light Bill)", "1 passport size photo"],
    fee: "Free Govt Service (Processing charges apply for PVC print)",
    duration: "15 - 30 Working Days",
    details: "Get registered in the voter lists. We assist in filling Form 6 (new voter), Form 8 (corrections, address shifts, photo replacements), and downloadable digital e-EPIC cards on official NVSP portals."
  },
  {
    id: "passport",
    title: "Passport Assistance",
    category: "government",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    desc: "Fresh passport application, renewals, document checklist, and slot booking.",
    documents: ["Aadhaar Card", "PAN Card", "10th Class Marksheet/Passing Certificate", "Recent Address Proof (Bank Passbook, Electricity Bill)"],
    fee: "Govt. fee paid online + consultation charges",
    duration: "Slot booking in 2 days. Issue time depends on Police Verification.",
    details: "Hassle-free application for Fresh and Re-issue of Passports under Normal and Tatkaal categories. We handle form filling, document checklist creation, payment execution, and appointment slot booking at PSK."
  },
  {
    id: "certificates",
    title: "Income/Caste/Domicile",
    category: "government",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    desc: "Official state certificates for domicile, income declaration, caste status, and non-creamy layer.",
    documents: ["Ration Card", "School Leaving Certificate", "Self-Declaration / Affidavit", "Talasildar Income Report (for Income)", "Father's Caste Certificate (for Caste)"],
    fee: "As per MahaOnline rates",
    duration: "7 - 15 Working Days",
    details: "Apply for standard government certificates issued by Revenue Department. These certificates are crucial for educational admissions, scholarships, and reservation benefits."
  },
  {
    id: "birth-death-cert",
    title: "Birth & Death Certificate",
    category: "government",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22a7 7 0 0 0 5-11.83 8 8 0 0 0-10 0A7 7 0 0 0 12 22z"/><path d="M12 2v4M12 10v4M12 18v2"/></svg>`,
    desc: "Assistance in municipal/panchayat registrations and retrieving certificates.",
    documents: ["Hospital discharge card/report", "Aadhaar Card of parents/deceased", "Address proof of birth/death location"],
    fee: "Standard government fees + portal charges",
    duration: "5 - 10 Working Days",
    details: "We guide you in submitting applications for registering births and deaths at local administrative bodies, correcting minor spelling errors, and fetching digital prints of certified records."
  },
  {
    id: "govt-schemes",
    title: "Government Schemes",
    category: "government",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    desc: "Applications for PM-Kisan, Sanjay Gandhi Niradhar, Ration Card, and E-Shram.",
    documents: ["Aadhaar Card", "Ration Card", "Bank Passbook Details", "Land Documents (7/12 transcript for Farmers)", "Income Proof"],
    fee: "Minimal processing charges",
    duration: "Varies by department approvals",
    details: "Help in applying and checking statuses for major central & state schemes like PM-Kisan Samman Nidhi, MahaDBT, Pradhan Mantri Awas Yojana, Ayushman Bharat health card, and E-Shram registrations."
  },
  {
    id: "banking-aeps",
    title: "AEPS & Micro ATM",
    category: "banking",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
    desc: "Cash withdrawals, balance enquiry, and mini statements using Aadhaar verification.",
    documents: ["Aadhaar Card (linked with bank account)", "Account Holder must be physically present for fingerprint authentication"],
    fee: "Zero charge for standard withdrawals",
    duration: "Instant Cash Payout",
    details: "Withdraw cash safely using Aadhaar Enabled Payment System (AEPS) and Micro-ATM services. No need to visit distant bank branches; carry out basic banking operations instantly in your local neighborhood."
  },
  {
    id: "money-transfer",
    title: "Money Transfer",
    category: "banking",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3L21 7L17 11M21 7H9M7 21L3 17L7 13M3 17H15"/></svg>`,
    desc: "Instant domestic money transfers to any bank branch in India, 24/7.",
    documents: ["Beneficiary Bank Name", "Account Number", "IFSC Code", "Sender's Mobile Number"],
    fee: "Standard banking IMPS charges (slab-based)",
    duration: "Instant Settlement (1 - 2 Minutes)",
    details: "Send money instantly to your family, suppliers, or business accounts anywhere in India. Transactions are processed via IMPS/DMT gateways ensuring highest security and receipt generation."
  },
  {
    id: "insurance",
    title: "Insurance Services",
    category: "banking",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    desc: "Two-wheeler, four-wheeler, health, life, and crop insurance policies.",
    documents: ["Previous Policy Copy (for renewal)", "Vehicle Registration Certificate (RC Book)", "Aadhaar / PAN of owner"],
    fee: "Premium based on policy selection",
    duration: "Instant Policy Generation (10 - 20 Minutes)",
    details: "Protect your assets. We compare and issue instant vehicle insurance (third party & comprehensive), health plans, and crop insurance renewals to safeguard local agricultural investments."
  },
  {
    id: "utility-bills",
    title: "Utility Bill Payments",
    category: "digital",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
    desc: "Electricity, water, cooking gas, broadband, and post-paid billing payments.",
    documents: ["Consumer Account Number (MSEB, Gas etc.)", "Previous Bill Copy"],
    fee: "Zero convenience fees",
    duration: "Instant Payment Receipt",
    details: "Pay electricity bills (MSEDCL/MSEB), piped gas, water tax, DTH, landline, and broadband bills online. Avoid long queues and late payment penalties with instant confirmation."
  },
  {
    id: "recharge",
    title: "Mobile & DTH Recharge",
    category: "digital",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,
    desc: "Super fast recharges for Jio, Airtel, Vi, BSNL, Tata Play, Dish TV, and Airtel DTH.",
    documents: ["Mobile / DTH Customer Number", "Operator Name"],
    fee: "Direct plan pricing",
    duration: "Instant Active Recharge",
    details: "Instant recharges with real-time plan exploration. We help select the best value-added packs, data plans, international roaming, and DTH annual vouchers."
  },
  {
    id: "scholarships",
    title: "Scholarship Applications",
    category: "digital",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>`,
    desc: "MahaDBT, Pre-metric, Post-metric, and National scholarship form submissions.",
    documents: ["Aadhaar Card", "Caste Certificate", "Income Certificate (Tehsildar signed)", "Previous Year Marksheet", "College Fee Receipt & Bonafide Certificate"],
    fee: "Form submission charges apply",
    duration: "Within 24 Hours",
    details: "We handle step-by-step applications for MahaDBT portal, National Scholarship Portal (NSP), minority scholarships, and specialized fellowships to ensure students don't miss out on educational aid."
  },
  {
    id: "exam-forms",
    title: "Exam & Admission Forms",
    category: "digital",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
    desc: "Online forms for SSC, HSC, NEET, JEE, CET, and university admissions.",
    documents: ["Academic Marksheets", "Recent Photograph (Digitized)", "Signature (Digitized)", "Caste/EWS certificate (if applicable)"],
    fee: "Exam Fee (Actuals) + Online portal processing fee",
    duration: "Immediate execution and printout",
    details: "Avoid mistakes in competitive exam registrations. We accurately submit forms for NEET, JEE, MH-CET, Police Bharti, Railway exams, and regional college admissions."
  },
  {
    id: "xerox-print",
    title: "Printing & Photocopy",
    category: "desktop",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
    desc: "High quality black-and-white, color printing, photocopy (Xerox), and bulk prints.",
    documents: ["Digital documents (PDF, Doc, Jpeg) via Email/WhatsApp/USB"],
    fee: "Per-page pricing (Very economical)",
    duration: "Instant delivery",
    details: "Get high-speed double-sided photocopies, premium color brochures, legal drafts, resume printing, study material copies, and project documentation printed on premium paper sheets."
  },
  {
    id: "scanning",
    title: "Document Scanning",
    category: "desktop",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>`,
    desc: "PDF creation, image resizing, and scanning certificates for online submissions.",
    documents: ["Physical papers/certificates to scan"],
    fee: "Per-document nominal rates",
    duration: "Instant digital delivery",
    details: "We scan educational marksheets, blueprints, land documents, and signatures into crystal clear PDFs or JPEG images. We also compress file sizes to comply with government upload thresholds."
  },
  {
    id: "lamination",
    title: "Lamination Services",
    category: "desktop",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M12 8v8M8 12h8"/></svg>`,
    desc: "Protect your crucial identity cards, marksheets, and legal papers from damage.",
    documents: ["Physical cards/marksheet/agreements"],
    fee: "Nominal fees based on paper size",
    duration: "Instant (2 - 5 Minutes)",
    details: "Premium lamination using thick, waterproof pouches. Safeguard your Aadhaar cards, PAN cards, degree certificates, and agricultural transcripts (7/12) from moisture and wear."
  },
  {
    id: "online-registrations",
    title: "Online Registrations",
    category: "digital",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    desc: "Shop Act licences, Food (FSSAI) licences, Udyam registration, and digital signatures.",
    documents: ["Aadhaar Card", "PAN Card", "Business Location Proof (Light bill/Rent agreement)", "Bank Account Info"],
    fee: "Consultation + official government registration fees",
    duration: "3 - 7 Working Days",
    details: "Legal business registrations for shops, retail centers, and small cottage units. Get your Udyam registration, Shop Act licenses, and GST application filings managed cleanly."
  }
];

// ========== Initialize Core Interactions ==========
document.addEventListener('DOMContentLoaded', () => {

  // ---------- Theme Toggle (Light/Dark Mode) ----------
  const savedTheme = localStorage.getItem('khan-theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }

  const themeToggleBtn = document.getElementById('themeToggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      localStorage.setItem('khan-theme', isLight ? 'light' : 'dark');
    });
  }

  // ---------- Sticky Header ----------
  const navbar = document.querySelector('.navbar');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // ---------- Back to Top Button ----------
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- Mobile Menu Drawer Toggle ----------
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobileMenu = document.getElementById('closeMobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('open');
    });

    const closeHandler = () => {
      mobileMenu.classList.remove('open');
    };

    if (closeMobileMenu) {
      closeMobileMenu.addEventListener('click', closeHandler);
    }

    // Close on link clicks
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => link.addEventListener('click', closeHandler));
  }

  // ---------- FAQ Accordion Handlers ----------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close other FAQs
      faqItems.forEach(i => {
        i.classList.remove('active');
        const ans = i.querySelector('.faq-answer');
        if (ans) ans.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // ---------- Enquiry Form Handler ----------
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic fields extraction
      const name = document.getElementById('formName').value.trim();
      const phone = document.getElementById('formPhone').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const service = document.getElementById('formService').value;
      const message = document.getElementById('formMessage').value.trim();

      if (!name || !phone || !service || !message) {
        alert("Please fill in all the required fields.");
        return;
      }

      // Action Button Loading State
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending Enquiry...</span>`;

      // Simulating a network fetch request
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        
        if (formSuccess) {
          formSuccess.style.display = 'flex';
          setTimeout(() => {
            formSuccess.style.display = 'none';
          }, 6000);
        }
      }, 1500);
    });
  }

  // ---------- Lightbox Handlers (Gallery Page) ----------
  const galleryCards = document.querySelectorAll('.gallery-card');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxCaption = document.getElementById('lightboxCaption');

  if (lightboxModal && galleryCards.length > 0) {
    galleryCards.forEach(card => {
      card.addEventListener('click', () => {
        const imgSrc = card.querySelector('img').src;
        const caption = card.querySelector('.gallery-title').innerText;
        
        lightboxImg.src = imgSrc;
        lightboxCaption.innerText = caption;
        lightboxModal.classList.add('open');
      });
    });

    const closeLightbox = () => {
      lightboxModal.classList.remove('open');
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // ---------- Active Page Navigation Highlighter ----------
  const currentPath = window.location.pathname.split("/").pop();
  const highlightLinks = (linkClass) => {
    const links = document.querySelectorAll(linkClass);
    links.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };
  highlightLinks('.nav-link');
  highlightLinks('.mobile-nav-link');

  // ---------- Dynamic Rendering logic on Services & Details Page ----------
  initializeDynamicPages();
});

// ========== Dynamic Page Script Loaders ==========
function initializeDynamicPages() {
  const currentFile = window.location.pathname.split("/").pop();

  // 1. SERVICES PAGE FILTER & SEARCH
  if (currentFile === "services.html") {
    const servicesGrid = document.getElementById('servicesGrid');
    const searchInput = document.getElementById('searchInput');
    const filterTabs = document.querySelectorAll('.filter-tab');
    let activeCategory = "all";
    let searchQuery = "";

    // Initial load
    renderServices(SERVICES_DATA);

    // Tab Clicks
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeCategory = tab.dataset.category;
        applyFilters();
      });
    });

    // Search input typing
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        applyFilters();
      });
    }

    function applyFilters() {
      const filtered = SERVICES_DATA.filter(service => {
        const matchesCategory = (activeCategory === "all" || service.category === activeCategory);
        const matchesSearch = (
          service.title.toLowerCase().includes(searchQuery) ||
          service.desc.toLowerCase().includes(searchQuery) ||
          service.details.toLowerCase().includes(searchQuery)
        );
        return matchesCategory && matchesSearch;
      });
      renderServices(filtered);
    }

    function renderServices(data) {
      if (!servicesGrid) return;
      
      if (data.length === 0) {
        servicesGrid.innerHTML = `
          <div class="col-span-full" style="grid-column: 1 / -1; text-align: center; padding: 40px 0; color: var(--clr-text-muted);">
            <svg style="margin: 0 auto 16px; width: 48px; height: 48px;" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <h3>No services found matching your criteria.</h3>
            <p style="margin-top: 8px;">Try adjusting your search terms or filters.</p>
          </div>
        `;
        return;
      }

      servicesGrid.innerHTML = data.map(service => `
        <div class="card-premium">
          <div class="card-icon-container">
            ${service.icon}
          </div>
          <h3 class="footer-title" style="margin-bottom: 12px; font-family: var(--font-title); font-size: 1.25rem;">${service.title}</h3>
          <p style="color: var(--clr-text-muted); font-size: 0.92rem; margin-bottom: 24px; flex-grow: 1;">${service.desc}</p>
          <div style="display: flex; gap: 12px; margin-top: auto;">
            <a href="service-details.html?id=${service.id}" class="btn btn-secondary" style="padding: 10px 18px; font-size: 0.85rem; flex-grow: 1;">
              View Details
            </a>
            <a href="${getWhatsAppLink(service.title)}" target="_blank" rel="noopener" class="btn btn-primary" style="padding: 10px; width: 40px; height: 40px; border-radius: var(--radius-sm); font-size: 1.1rem; box-shadow: none;" aria-label="Query on WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style="transform: translateY(1px);"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      `).join('');
    }
  }

  // 2. DYNAMIC SERVICE DETAILS PAGE
  if (currentFile === "service-details.html") {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');

    // Default to first service if id not found
    const service = SERVICES_DATA.find(s => s.id === serviceId) || SERVICES_DATA[0];

    // Render elements dynamically
    document.getElementById('serviceDetailsTitle').innerText = service.title;
    document.getElementById('serviceBreadcrumb').innerText = service.title;
    document.getElementById('serviceMainTitle').innerText = service.title;
    document.getElementById('serviceMetaFee').innerText = service.fee;
    document.getElementById('serviceMetaDuration').innerText = service.duration;
    document.getElementById('serviceDetailsDesc').innerText = service.details;
    
    // Icon
    const iconWrapper = document.getElementById('serviceDetailsIcon');
    if (iconWrapper) iconWrapper.innerHTML = service.icon;

    // Document checklist
    const docList = document.getElementById('serviceDetailsDocs');
    if (docList) {
      docList.innerHTML = service.documents.map(doc => `
        <li class="details-list-item">
          <span class="bullet">✓</span>
          <span>${doc}</span>
        </li>
      `).join('');
    }

    // Dynamic WhatsApp Button for details page
    const waDetailsBtn = document.getElementById('waDetailsBtn');
    if (waDetailsBtn) {
      waDetailsBtn.href = getWhatsAppLink(service.title);
    }

    // Sidebar items rendering
    const sidebarList = document.getElementById('sidebarServicesList');
    if (sidebarList) {
      sidebarList.innerHTML = SERVICES_DATA.map(s => `
        <li>
          <a href="service-details.html?id=${s.id}" class="service-nav-link ${s.id === service.id ? 'active' : ''}">
            ${s.title}
          </a>
        </li>
      `).join('');
    }
  }
}

// ========== WhatsApp API Link Builder ==========
function getWhatsAppLink(serviceName) {
  const number = "9960011736"; // Registered number
  const prefix = "91"; // Country Code for India
  const message = `Hi Khan MultiServices & CSC Center! I need assistance with *${serviceName}*. Please guide me on the documents, charges, and process. Thanks!`;
  return `https://wa.me/${prefix}${number}?text=${encodeURIComponent(message)}`;
}


