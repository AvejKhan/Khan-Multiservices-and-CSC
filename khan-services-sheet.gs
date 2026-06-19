// ===================================================================
// Khan MultiServices & CSC Center — Google Apps Script
// ===================================================================
// INSTRUCTIONS:
// 1. Create a new Google Sheet (go to sheets.new) and name it "Khan Services CMS".
// 2. In the top menu of the sheet, click Extensions > Apps Script.
// 3. Paste this ENTIRE code in the Apps Script editor (replace any existing code).
// 4. Click the Save icon (or Ctrl+S).
// 5. Select the function "createTemplateSheet" from the dropdown menu at the top and click "Run" (▶).
//    - It will ask for permissions. Click "Review Permissions", select your Google account, 
//      click "Advanced" (bottom left), then "Go to Untitled project (unsafe)", and click "Allow".
//    - This will automatically create the "Khan Services" sheet tab and prefill all 25 services!
// 6. Next, click the blue "Deploy" button at the top-right and select "New Deployment".
//    - Click the gear icon (Select type) and choose "Web App".
//    - Set Description to: "Khan Services API".
//    - Set "Execute as": "Me".
//    - Set "Who has access": "Anyone". (CRITICAL: Do not set to "Only myself" or the site cannot load the data).
//    - Click "Deploy", allow permissions again if prompted.
// 7. Copy the "Web App URL" (ends with /exec) and paste it into the Sheet Setup section of your Admin Panel!
// ===================================================================

// --------------- MAIN API FUNCTION ---------------
// This runs when the website fetches data from your sheet
function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Khan Services');

    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ error: 'Sheet "Khan Services" not found. Please run createTemplateSheet() first.' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const data = sheet.getDataRange().getValues();
    if (data.length < 2) {
      return ContentService
        .createTextOutput(JSON.stringify([]))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const headers = data[0].map(h => h.toString().trim());
    const services = [];

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (!row[0] || row[0].toString().trim() === '') continue;

      const service = {};
      headers.forEach((header, idx) => {
        service[header] = row[idx] !== undefined ? row[idx].toString().trim() : '';
      });

      // Skip inactive services
      if (service['active'] && service['active'].toLowerCase() === 'false') continue;

      // Parse documents from pipe-separated string to array
      if (service['documents']) {
        service['documents'] = service['documents'].split('|').map(d => d.trim()).filter(d => d.length > 0);
      } else {
        service['documents'] = [];
      }

      services.push(service);
    }

    const response = JSON.stringify(services);
    return ContentService.createTextOutput(response).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}


// --------------- SETUP FUNCTION (Run once!) ---------------
// Run this function ONCE to create and pre-fill your sheet with all current services
function createTemplateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Khan Services');

  if (!sheet) {
    sheet = ss.insertSheet('Khan Services');
  } else {
    sheet.clear();
  }

  // Column Headers
  const headers = [
    'id', 'title', 'category', 'photo', 'logo', 'desc', 'fee', 'duration', 'details', 'documents', 'active'
  ];
  sheet.appendRow(headers);

  // Style the header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#1e3a8a');
  headerRange.setFontColor('#ffffff');
  headerRange.setFontWeight('bold');
  headerRange.setFontSize(11);
  headerRange.setHorizontalAlignment('center');

  // All 25 Services Data (id, title, category, photo, logo, desc, fee, duration, details, documents, active)
  const services = [
    [
      'aadhaar', 'Aadhaar Services', 'government',
      'images/aadhaar_demo.png',
      'https://upload.wikimedia.org/wikipedia/commons/c/cf/Aadhaar_Logo.svg',
      'Biometric updates, demographic corrections, mobile linking, and e-Aadhaar downloads.',
      'As per UIDAI guidelines', '3 - 7 Working Days',
      'We assist with new Aadhaar enrollment guidance, mandatory biometric updates, address corrections, name/date of birth edits, mobile number linking, and instant PVC card printing.',
      'Identity Proof (PAN Card, Passport, etc.)|Address Proof (Voter Card, Electricity Bill)|Active Mobile Number (for OTP)',
      'TRUE'
    ],
    [
      'pan-card', 'PAN Card Services', 'government',
      'images/pan_demo.png',
      'https://upload.wikimedia.org/wikipedia/commons/0/07/Income_Tax_Department_India.png',
      'Instant E-PAN, new applications, corrections, reprints, and Aadhaar linking.',
      'Official NSDL fees + minimal processing charges', 'Instant E-PAN / 10-15 Days for Physical Card',
      'Apply for a new Permanent Account Number (PAN) card for individuals, partners, or businesses. We also handle correction of misspelled names, signature mismatches, reprint of lost cards, and Aadhaar linking.',
      'Aadhaar Card|Proof of Date of Birth (Birth Certificate, School Leaving)|2 Recent Passport Size Photos (for physical cards)',
      'TRUE'
    ],
    [
      'voter-id', 'Voter ID Services', 'government',
      'images/voter_id_demo.png',
      'https://upload.wikimedia.org/wikipedia/commons/1/1b/ECI_Logo.svg',
      'New voter registrations, corrections, card shifts, and digital voter card downloads.',
      'Free Govt Service (Processing charges apply for PVC print)', '15 - 30 Working Days',
      'Get registered in the voter lists. We assist in filling Form 6 (new voter), Form 8 (corrections, address shifts, photo replacements), and downloadable digital e-EPIC cards on official NVSP portals.',
      'Aadhaar Card|Age Proof (School Certificate or PAN)|Address Proof (Ration Card or Light Bill)|1 passport size photo',
      'TRUE'
    ],
    [
      'passport', 'Passport Assistance', 'government',
      'images/passport_demo.png',
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Emblem_of_India.svg',
      'Fresh passport application, renewals, document checklist, and slot booking.',
      'Govt. fee paid online + consultation charges', 'Slot booking in 2 days. Issue time depends on Police Verification.',
      'Hassle-free application for Fresh and Re-issue of Passports under Normal and Tatkaal categories. We handle form filling, document checklist creation, payment execution, and appointment slot booking at PSK.',
      'Aadhaar Card|PAN Card|10th Class Marksheet/Passing Certificate|Recent Address Proof (Bank Passbook, Electricity Bill)',
      'TRUE'
    ],
    [
      'certificates', 'Income/Caste/Domicile', 'government',
      'images/caste_cert_demo.png',
      'https://upload.wikimedia.org/wikipedia/commons/2/23/Seal_of_Maharashtra.svg',
      'Official state certificates for domicile, income declaration, caste status, and non-creamy layer.',
      'As per MahaOnline rates', '7 - 15 Working Days',
      'Apply for standard government certificates issued by Revenue Department. These certificates are crucial for educational admissions, scholarships, and reservation benefits.',
      'Ration Card|School Leaving Certificate|Self-Declaration / Affidavit|Talasildar Income Report (for Income)|Father\'s Caste Certificate (for Caste)',
      'TRUE'
    ],
    [
      'birth-death-cert', 'Birth & Death Certificate', 'government',
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Emblem_of_India.svg',
      'Assistance in municipal/panchayat registrations and retrieving certificates.',
      'Standard government fees + portal charges', '5 - 10 Working Days',
      'We guide you in submitting applications for registering births and deaths at local administrative bodies, correcting minor spelling errors, and fetching digital prints of certified records.',
      'Hospital discharge card/report|Aadhaar Card of parents/deceased|Address proof of birth/death location',
      'TRUE'
    ],
    [
      'govt-schemes', 'Government Schemes', 'government',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80',
      'https://upload.wikimedia.org/wikipedia/commons/9/9f/Digital_India_logo.svg',
      'Applications for PM-Kisan, Sanjay Gandhi Niradhar, Ration Card, and E-Shram.',
      'Minimal processing charges', 'Varies by department approvals',
      'Help in applying and checking statuses for major central & state schemes like PM-Kisan Samman Nidhi, MahaDBT, Pradhan Mantri Awas Yojana, Ayushman Bharat health card, and E-Shram registrations.',
      'Aadhaar Card|Ration Card|Bank Passbook Details|Land Documents (7/12 transcript for Farmers)|Income Proof',
      'TRUE'
    ],
    [
      'banking-aeps', 'AEPS & Micro ATM', 'banking',
      'images/aeps_demo.png',
      'https://upload.wikimedia.org/wikipedia/commons/e/e4/NPCI_logo.svg',
      'Cash withdrawals, balance enquiry, and mini statements using Aadhaar verification.',
      'Zero charge for standard withdrawals', 'Instant Cash Payout',
      'Withdraw cash safely using Aadhaar Enabled Payment System (AEPS) and Micro-ATM services. No need to visit distant bank branches; carry out basic banking operations instantly in your local neighborhood.',
      'Aadhaar Card (linked with bank account)|Account Holder must be physically present for fingerprint authentication',
      'TRUE'
    ],
    [
      'money-transfer', 'Money Transfer', 'banking',
      'images/money_transfer_demo.png',
      'https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg',
      'Instant domestic money transfers to any bank branch in India, 24/7.',
      'Standard banking IMPS charges (slab-based)', 'Instant Settlement (1 - 2 Minutes)',
      'Send money instantly to your family, suppliers, or business accounts anywhere in India. Transactions are processed via IMPS/DMT gateways ensuring highest security and receipt generation.',
      'Beneficiary Bank Name|Account Number|IFSC Code|Sender\'s Mobile Number',
      'TRUE'
    ],
    [
      'insurance', 'Insurance Services', 'banking',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Emblem_of_India.svg',
      'Two-wheeler, four-wheeler, health, life, and crop insurance policies.',
      'Premium based on policy selection', 'Instant Policy Generation (10 - 20 Minutes)',
      'Protect your assets. We compare and issue instant vehicle insurance (third party & comprehensive), health plans, and crop insurance renewals to safeguard local agricultural investments.',
      'Previous Policy Copy (for renewal)|Vehicle Registration Certificate (RC Book)|Aadhaar / PAN of owner',
      'TRUE'
    ],
    [
      'utility-bills', 'Utility Bill Payments', 'digital',
      'images/utility_bills_demo.png',
      'https://upload.wikimedia.org/wikipedia/commons/b/b5/Bharat_BillPay_logo.svg',
      'Electricity, water, cooking gas, broadband, and post-paid billing payments.',
      'Zero convenience fees', 'Instant Payment Receipt',
      'Pay electricity bills (MSEDCL/MSEB), piped gas, water tax, DTH, landline, and broadband bills online. Avoid long queues and late payment penalties with instant confirmation.',
      'Consumer Account Number (MSEB, Gas etc.)|Previous Bill Copy',
      'TRUE'
    ],
    [
      'recharge', 'Mobile & DTH Recharge', 'digital',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
      '',
      'Super fast recharges for Jio, Airtel, Vi, BSNL, Tata Play, Dish TV, and Airtel DTH.',
      'Direct plan pricing', 'Instant Active Recharge',
      'Instant recharges with real-time plan exploration. We help select the best value-added packs, data plans, international roaming, and DTH annual vouchers.',
      'Mobile / DTH Customer Number|Operator Name',
      'TRUE'
    ],
    [
      'scholarships', 'Scholarship Applications', 'digital',
      'images/scholarship_demo.png',
      'https://upload.wikimedia.org/wikipedia/commons/9/9f/Digital_India_logo.svg',
      'MahaDBT, Pre-metric, Post-metric, and National scholarship form submissions.',
      'Form submission charges apply', 'Within 24 Hours',
      'We handle step-by-step applications for MahaDBT portal, National Scholarship Portal (NSP), minority scholarships, and specialized fellowships to ensure students don\'t miss out on educational aid.',
      'Aadhaar Card|Caste Certificate|Income Certificate (Tehsildar signed)|Previous Year Marksheet|College Fee Receipt & Bonafide Certificate',
      'TRUE'
    ],
    [
      'exam-forms', 'Exam & Admission Forms', 'digital',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Emblem_of_India.svg',
      'Online forms for SSC, HSC, NEET, JEE, CET, and university admissions.',
      'Exam Fee (Actuals) + Online portal processing fee', 'Immediate execution and printout',
      'Avoid mistakes in competitive exam registrations. We accurately submit forms for NEET, JEE, MH-CET, Police Bharti, Railway exams, and regional college admissions.',
      'Academic Marksheets|Recent Photograph (Digitized)|Signature (Digitized)|Caste/EWS certificate (if applicable)',
      'TRUE'
    ],
    [
      'xerox-print', 'Printing & Photocopy', 'desktop',
      'https://images.unsplash.com/photo-1612832021455-245704c6755a?auto=format&fit=crop&w=800&q=80',
      '',
      'High quality black-and-white, color printing, photocopy (Xerox), and bulk prints.',
      'Per-page pricing (Very economical)', 'Instant delivery',
      'Get high-speed double-sided photocopies, premium color brochures, legal drafts, resume printing, study material copies, and project documentation printed on premium paper sheets.',
      'Digital documents (PDF, Doc, Jpeg) via Email/WhatsApp/USB',
      'TRUE'
    ],
    [
      'scanning', 'Document Scanning', 'desktop',
      'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80',
      '',
      'PDF creation, image resizing, and scanning certificates for online submissions.',
      'Per-document nominal rates', 'Instant digital delivery',
      'We scan educational marksheets, blueprints, land documents, and signatures into crystal clear PDFs or JPEG images. We also compress file sizes to comply with government upload thresholds.',
      'Physical papers/certificates to scan',
      'TRUE'
    ],
    [
      'lamination', 'Lamination Services', 'desktop',
      'https://images.unsplash.com/photo-1601597111158-2fceff270190?auto=format&fit=crop&w=800&q=80',
      '',
      'Protect your crucial identity cards, marksheets, and legal papers from damage.',
      'Nominal fees based on paper size', 'Instant (2 - 5 Minutes)',
      'Premium lamination using thick, waterproof pouches. Safeguard your Aadhaar cards, PAN cards, degree certificates, and agricultural transcripts (7/12) from moisture and wear.',
      'Physical cards/marksheet/agreements',
      'TRUE'
    ],
    [
      'online-registrations', 'Online Registrations', 'digital',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Emblem_of_India.svg',
      'Shop Act licences, Food (FSSAI) licences, Udyam registration, and digital signatures.',
      'Consultation + official government registration fees', '3 - 7 Working Days',
      'Legal business registrations for shops, retail centers, and small cottage units. Get your Udyam registration, Shop Act licenses, and GST application filings managed cleanly.',
      'Aadhaar Card|PAN Card|Business Location Proof (Light bill/Rent agreement)|Bank Account Info',
      'TRUE'
    ],
    [
      'rto-services', 'Driving License & RTO', 'government',
      'images/driving_license_demo.png',
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Emblem_of_India.svg',
      'Learner\'s test booking, fresh driving licenses, renewals, and RC book reprints.',
      'Govt charges + RTO processing fees', '15 - 30 Working Days',
      'Complete RTO support: online application for learner\'s license, slot booking for physical driving tests, permanent license applications, address updates on RC/License, and smart-card replacement assistance.',
      'Aadhaar Card|Age Proof (School Leaving Certificate or Birth Certificate)|Physical Fitness Self-Declaration (Form 1)|Recent Passport Size Photos',
      'TRUE'
    ],
    [
      'ration-card', 'Ration Card Services', 'government',
      'images/ration_card_demo.png',
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Emblem_of_India.svg',
      'New Ration Card applications, member addition or deletion, and corrections.',
      'Nominal online portal charges', '15 - 30 Working Days',
      'Apply for new ration cards (yellow, saffron, white) or modify existing cards. We support adding new members (spouse/newborns), deleting members (due to death/migration), splitting family cards, and shop transfers.',
      'Aadhaar Cards of all family members|Income Certificate from Talasildar|Gas Connection book details|Self-Declaration Form|Electricity Bill (Address Proof)',
      'TRUE'
    ],
    [
      'itr-gst', 'ITR & GST Filing', 'banking',
      'images/itr_gst_demo.png',
      'https://upload.wikimedia.org/wikipedia/commons/0/07/Income_Tax_Department_India.png',
      'Income Tax filing for individuals, salaried employees, and GST return submissions.',
      'Consultation based on filing complexity', '2 - 3 Working Days',
      'Stay compliant with digital tax filing. We assist local merchants, salaried professionals, and farmers in Badnapur to file their annual Income Tax Returns (ITR) and process monthly/quarterly GST returns securely.',
      'PAN Card & Aadhaar Card|Form 16 & Form 26AS|Bank Accounts statements (12 months)|Business Sale/Purchase details (for GST filing)',
      'TRUE'
    ],
    [
      'epfo-services', 'EPF & Pension Services', 'banking',
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Emblem_of_India.svg',
      'PF balance checks, KYC updates, online withdrawals, and life certificates (Jeevan Pramaan).',
      'Nominal portal processing fees', 'Claim settlements in 7 - 15 days',
      'EPFO employee portal services: check balance sheets, merge multiple PF accounts, update missing bank KYC/signatures, file online claims for advance/full PF withdrawal, and submit digital Jeevan Pramaan life certificates for pensioners.',
      'Universal Account Number (UAN)|Aadhaar Card linked with active mobile|Bank account Passbook/Cancelled cheque|PAN Card',
      'TRUE'
    ],
    [
      'travel-booking', 'Travel Ticket Booking', 'digital',
      'images/travel_demo.png',
      '',
      'Confirmed Train ticket bookings (IRCTC), flight reservations, and long-distance bus tickets.',
      'Ticket fare + nominal reservation charges', 'Instant ticket delivery',
      'Get confirmed reservations instantly. We book rail tickets (general and Tatkaal quotas via authorized IRCTC portals), domestic/international flight boarding passes, and sleeper bus reservations.',
      'Passenger Details (Names, Age, Gender)|Valid Government ID Proof (for travel verification)',
      'TRUE'
    ],
    [
      'gas-booking', 'Gas Cylinder Services', 'digital',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      '',
      'New connection registration and fast refill bookings for Bharat, HP, and Indane gas.',
      'Refill cylinder cost + minimal booking fee', 'Refill booking is instant. New connections take 5-7 days.',
      'Avoid subsidy delays. We book monthly LPG cylinder refills, apply for new gas connections under government schemes, link bank accounts/Aadhaar for subsidy transfers, and check subsidy payment histories.',
      'Aadhaar Card|Ration Card copy|Gas consumer booklet / previous bill|Bank Passbook (for subsidy linking)',
      'TRUE'
    ],
    [
      'digital-signature', 'Digital Signature (DSC)', 'digital',
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80',
      'https://upload.wikimedia.org/wikipedia/commons/9/9f/Digital_India_logo.svg',
      'Class 3 Digital Signature Certificate tokens for e-tendering, income tax, and company registration.',
      'DSC token fee + registration charges', '24 - 48 Hours',
      'Obtain secure Class 3 cryptographic digital signatures with USB tokens. Essential for submitting government e-tenders, registering new companies with Ministry of Corporate Affairs, and professional tax filings.',
      'Aadhaar Card (linked with mobile number)|PAN Card|A 1-minute video verification link completion',
      'TRUE'
    ]
  ];

  // Add all services to the sheet
  services.forEach(service => sheet.appendRow(service));

  // Style data rows with alternating colors
  for (let i = 2; i <= services.length + 1; i++) {
    const rowRange = sheet.getRange(i, 1, 1, headers.length);
    if (i % 2 === 0) {
      rowRange.setBackground('#f0f4ff');
    } else {
      rowRange.setBackground('#ffffff');
    }
  }

  // Set column widths for readability
  sheet.setColumnWidth(1, 130);  // id
  sheet.setColumnWidth(2, 180);  // title
  sheet.setColumnWidth(3, 110);  // category
  sheet.setColumnWidth(4, 280);  // photo
  sheet.setColumnWidth(5, 280);  // logo
  sheet.setColumnWidth(6, 320);  // desc
  sheet.setColumnWidth(7, 200);  // fee
  sheet.setColumnWidth(8, 200);  // duration
  sheet.setColumnWidth(9, 400);  // details
  sheet.setColumnWidth(10, 400); // documents
  sheet.setColumnWidth(11, 80);  // active

  // Freeze header and first column
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(1);

  // Add data validation for category column
  const categoryRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['government', 'banking', 'digital', 'desktop'], true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange(2, 3, services.length, 1).setDataValidation(categoryRule);

  // Add data validation for active column
  const activeRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['TRUE', 'FALSE'], true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange(2, 11, services.length, 1).setDataValidation(activeRule);

  // Add helper notes to header cells
  sheet.getRange(1, 1).setNote('Unique ID slug (no spaces, use hyphens). e.g., aadhaar, pan-card');
  sheet.getRange(1, 3).setNote('Choose from: government, banking, digital, desktop');
  sheet.getRange(1, 4).setNote('Image URL or local path like images/aadhaar_demo.png. Use any public image URL from the web.');
  sheet.getRange(1, 10).setNote('Separate each document with a pipe character |   Example: Aadhaar Card|PAN Card|Passport Photo');
  sheet.getRange(1, 11).setNote('Set to FALSE to hide a service from the website without deleting it');

  SpreadsheetApp.flush();

  Logger.log('✅ Sheet "Khan Services" created with all 25 services!');
  Logger.log('👉 Now go to Deploy > New Deployment > Web App to get your API URL.');

  // Show a popup message in the sheet UI
  SpreadsheetApp.getUi().alert(
    '✅ Khan Services Sheet Created!',
    'All 25 services have been added to the "Khan Services" sheet.\n\n' +
    'Next Step:\n' +
    '1. Click Extensions > Apps Script\n' +
    '2. Click Deploy > New Deployment\n' +
    '3. Choose "Web App"\n' +
    '4. Set "Who has access" to "Anyone"\n' +
    '5. Click Deploy and copy the URL\n' +
    '6. Paste that URL in the admin-panel.html file on your website',
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

// --------------- HELPER: Add a new service row ---------------
// This adds an empty template row at the bottom of the sheet
function addNewServiceRow() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Khan Services');
  if (!sheet) {
    SpreadsheetApp.getUi().alert('Sheet not found. Please run createTemplateSheet() first.');
    return;
  }
  sheet.appendRow(['new-service-id', 'New Service Name', 'government', '', '', 'Short description here', 'Fee details', 'Processing time', 'Full detailed description here', 'Document 1|Document 2|Document 3', 'TRUE']);
  SpreadsheetApp.getUi().alert('✅ New empty row added at the bottom. Fill in the details!');
}

// --------------- MENU: Adds a custom menu to the sheet ---------------
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🔧 Khan Services')
    .addItem('📋 Setup Template (Run Once)', 'createTemplateSheet')
    .addItem('➕ Add New Service Row', 'addNewServiceRow')
    .addSeparator()
    .addItem('📖 View Instructions', 'showInstructions')
    .addToUi();
}

function showInstructions() {
  SpreadsheetApp.getUi().alert(
    '📖 How to Use This Sheet',
    'COLUMNS GUIDE:\n' +
    '• id: URL slug (no spaces, use hyphens)\n' +
    '• title: Service display name\n' +
    '• category: government / banking / digital / desktop\n' +
    '• photo: Image URL (or images/filename.png for local)\n' +
    '• logo: Official logo URL (optional)\n' +
    '• desc: Short 1-2 line description\n' +
    '• fee: Fee information\n' +
    '• duration: Processing time\n' +
    '• details: Full paragraph description\n' +
    '• documents: Items separated by | character\n' +
    '• active: TRUE to show, FALSE to hide\n\n' +
    'ADDING PHOTOS:\n' +
    'Use any public image URL like:\n' +
    'https://images.unsplash.com/photo-ID?w=800\n\n' +
    'To use your own photos, upload them to your website\'s images/ folder,\n' +
    'then use: images/your-photo.png\n\n' +
    'AFTER EDITING: The website will automatically show your changes!',
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}
