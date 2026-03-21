
const BUILD_VERSION = document.getElementById("buildVersion").textContent.trim();

const countryMeta = {
  Iraq: { flag: "🇮🇶", x: 625, y: 205 },
  Iran: { flag: "🇮🇷", x: 655, y: 200 },
  Germany: { flag: "🇩🇪", x: 505, y: 155 },
  France: { flag: "🇫🇷", x: 485, y: 170 },
  Turkey: { flag: "🇹🇷", x: 565, y: 180 },
  Pakistan: { flag: "🇵🇰", x: 700, y: 228 },
  Brazil: { flag: "🇧🇷", x: 275, y: 360 },
  Spain: { flag: "🇪🇸", x: 455, y: 182 },
  "United States": { flag: "🇺🇸", x: 188, y: 165 },
  "United Kingdom": { flag: "🇬🇧", x: 470, y: 150 },
  Afghanistan: { flag: "🇦🇫", x: 678, y: 212 },
  Lebanon: { flag: "🇱🇧", x: 592, y: 198 }
};

const currencyPresets = {
  USD: [10, 25, 50, 100, 250, 500],
  IQD: [10000, 25000, 50000, 100000, 250000, 500000],
  EUR: [10, 20, 50, 100, 200, 500]
};

const agents = {
  1: {
    name: {
      fa: "سيد جاسم الجزائري",
      ar: "سيد جاسم الجزائري",
      en: "Sayyid Jasim Al-Jazairi",
      ur: "سید جاسم الجزائری",
      fr: "Sayyid Jasim Al-Jazairi",
      de: "Sayyid Jasim Al-Jazairi",
      es: "Sayyid Jasim Al-Jazairi",
      pt: "Sayyid Jasim Al-Jazairi",
      tr: "Seyyid Casim el-Cezairi"
    },
    desc: {
      fa: "اتصال مباشر، زين كاش و ماستر كارد",
      ar: "اتصال مباشر، زين كاش و ماستر كارد",
      en: "Direct contact, ZainCash and MasterCard",
      ur: "براہ راست رابطہ، زین کیش اور ماسٹر کارڈ",
      fr: "Contact direct, ZainCash et MasterCard",
      de: "Direkter Kontakt, ZainCash und MasterCard",
      es: "Contacto directo, ZainCash y MasterCard",
      pt: "Contato direto, ZainCash e MasterCard",
      tr: "Doğrudan iletişim, ZainCash ve MasterCard"
    },
    contact: "0773 003 5844",
    zain: "07812010483",
    master: "9037487221",
    qr: "/qr/agent1-qr.png"
  },
  2: {
    name: {
      fa: "الشيخ علي الكاظمي",
      ar: "الشيخ علي الكاظمي",
      en: "Sheikh Ali Al-Kadhimi",
      ur: "شیخ علی الکاظمی",
      fr: "Cheikh Ali Al-Kadhimi",
      de: "Scheich Ali Al-Kadhimi",
      es: "Sheij Ali Al-Kadhimi",
      pt: "Sheikh Ali Al-Kadhimi",
      tr: "Şeyh Ali el-Kazımi"
    },
    desc: {
      fa: "للتواصل، زين كاش و ماستر كارد",
      ar: "للتواصل، زين كاش و ماستر كارد",
      en: "Contact, ZainCash and MasterCard",
      ur: "رابطہ، زین کیش اور ماسٹر کارڈ",
      fr: "Contact, ZainCash et MasterCard",
      de: "Kontakt, ZainCash und MasterCard",
      es: "Contacto, ZainCash y MasterCard",
      pt: "Contato, ZainCash e MasterCard",
      tr: "İletişim, ZainCash ve MasterCard"
    },
    contact: "07702952583",
    zain: "07702952583",
    master: "7130833309",
    qr: "/qr/agent2-qr.png"
  }
};

const i18n = {
  fa: {
    dir:"rtl", title:"جمع آوری کمکهای مردمی به انقلاب اسلامی ایران",
    heroBadge:"پلتفرم حمایتی چندزبانه", heroRibbon:"حمایت مردمی، همبستگی جهانی، و گزارش‌پذیری شفاف",
    subtitle:"برای حمایت، مبلغ مورد نظر، ارز و وکیل دریافت‌کننده را انتخاب کنید و در صورت تمایل گزارش پرداخت خود را ثبت نمایید.",
    feature1Title:"چندزبانه", feature1Text:"پشتیبانی از 9 زبان برای مخاطبان جهانی",
    feature2Title:"چندمسیره", feature2Text:"دو وکیل مستقل با اطلاعات پرداخت واقعی",
    feature3Title:"گزارش‌محور", feature3Text:"گزارشات زنده، 20 مورد اخیر و آمار کشوری",
    heroStat1Label:"زبان‌های فعال", heroStat2Label:"وکلای فعال", heroStat3Label:"گزارش‌های اخیر",
    amountTitle:"انتخاب مبلغ و ارز", amountSubtitle:"ارز را انتخاب کنید؛ هر دو وکیل همه ارزها را می‌پذیرند.",
    customAmountLabel:"مبلغ دلخواه", amountNotice:"مبالغ بالاتر از سقف‌های متعارف بهتر است پس از هماهنگی نهایی ثبت شوند.",
    agentTitle:"انتخاب وکیل دریافت‌کننده", agentSubtitle:"هر وکیل اطلاعات پرداخت مستقل خود را دارد و همه ارزها را می‌پذیرد.",
    agent1Badge:"وکیل ۱", agent2Badge:"وکیل ۲",
    paymentInfoTitle:"اطلاعات پرداخت", paymentInfoSubtitle:"اطلاعات زیر بر اساس وکیل و ارز انتخاب‌شده نمایش داده می‌شود.",
    selectedCurrencyLabel:"ارز انتخابی", selectedAmountLabel:"مبلغ انتخابی", selectedAgentLabel:"وکیل انتخابی",
    contactLabel:"اتصال مباشر / تماس", zainLabel:"زين كاش", masterLabel:"ماستر كارد", qrLabel:"QR", qrHint:"فایل‌های QR باید در پوشه public/qr قرار بگیرند.",
    copy:"کپی", copied:"کپی شد",
    dedicationLabel:"نام شخص / نام اهدایی",
    dedicationPlaceholder:"محمد علی محسن - به نیابت از : شهید آیت الله العظمی امام خامنه ای",
    dedicationHint:"نوشتن نام الزامی نیست؛ می‌تواند خالی بماند یا با نام مستعار تکمیل شود.",
    showReportBtn:"اعلام پرداخت", callAgentBtn:"تماس با وکیل", paymentHelper:"پس از پرداخت، روی «اعلام پرداخت» بزنید تا گزارش شما ثبت شود.",
    reportTitle:"ثبت گزارش پرداخت", reportSubtitle:"این فرم مستقیماً در پایگاه داده D1 ذخیره می‌شود.",
    payerNameLabel:"نام پرداخت‌کننده", payerNamePlaceholder:"نام شما",
    payerContactLabel:"شماره تماس / پیام‌رسان", payerContactPlaceholder:"مثلاً 0770...",
    countryLabel:"کشور", reportDisplayNameLabel:"نام ثبت‌شونده",
    noteLabel:"توضیحات", notePlaceholder:"زمان پرداخت، توضیح کوتاه، توضیحات تکمیلی...",
    submitReportBtn:"ثبت اطلاعات", successTitle:"گزارش با موفقیت ثبت شد", successText:"اطلاعات شما در پایگاه داده ذخیره شد و در بخش گزارشات نیز بازتاب پیدا می‌کند.",
    reportsTitle:"گزارشات", reportsSubtitle:"۲۰ گزارش آخر و پراکندگی کشوری از پایگاه داده D1",
    statReportsLabel:"کل گزارشات", statCountriesLabel:"کشورهای مشارکت‌کننده", statAmountLabel:"مجموع مبالغ",
    countryReportTitle:"گزارش کشوری", countryReportSubtitle:"کشورهای ثبت‌شده روی نقشه و در جدول زیر نمایش داده می‌شوند.",
    recentReportsTitle:"۲۰ گزارش آخر", recentReportsSubtitle:"آخرین گزارش‌های ثبت‌شده در پایگاه داده",
    tableCountry:"کشور", tableCount:"تعداد", tableAmount:"جمع مبلغ",
    footerText:'توسعه داده شده توسط: <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">جامعة المصطفی العالمیة - نمایندگی عراق</a>',
    buildVersionLabel:"نسخه استقرار:",
    reportCountry:"کشور", reportAmount:"مبلغ", reportAgent:"وکیل", reportTime:"زمان", noReports:"هنوز گزارشی ثبت نشده است.", noNote:"بدون توضیح"
  },
  ar: {
    dir:"rtl", title:"جمع التبرعات الشعبية للثورة الإسلامية في إيران",
    heroBadge:"منصة دعم متعددة اللغات", heroRibbon:"دعم شعبي، تضامن عالمي، وشفافية في التقارير",
    subtitle:"يرجى اختيار المبلغ والعملة والوكيل المستلم، ثم يمكنك تسجيل تقرير الدفع إذا رغبت.",
    feature1Title:"متعددة اللغات", feature1Text:"دعم 9 لغات للمخاطبين حول العالم",
    feature2Title:"متعددة المسارات", feature2Text:"وكيلان مستقلان بمعلومات دفع حقيقية",
    feature3Title:"قائمة على التقارير", feature3Text:"تقارير حية وآخر 20 تقريراً وتوزع جغرافي",
    heroStat1Label:"اللغات النشطة", heroStat2Label:"الوكلاء النشطون", heroStat3Label:"التقارير الأخيرة",
    amountTitle:"اختيار المبلغ والعملة", amountSubtitle:"اختر العملة؛ كلا الوكيلين يقبلان جميع العملات.",
    customAmountLabel:"مبلغ مخصص", amountNotice:"المبالغ الكبيرة يُفضّل تثبيتها بعد التنسيق النهائي.",
    agentTitle:"اختيار الوكيل المستلم", agentSubtitle:"لكل وكيل معلومات دفع مستقلة ويقبل جميع العملات.",
    agent1Badge:"الوكيل 1", agent2Badge:"الوكيل 2",
    paymentInfoTitle:"معلومات الدفع", paymentInfoSubtitle:"تُعرض المعلومات التالية بحسب الوكيل والعملة المختارين.",
    selectedCurrencyLabel:"العملة المختارة", selectedAmountLabel:"المبلغ المختار", selectedAgentLabel:"الوكيل المختار",
    contactLabel:"الاتصال المباشر", zainLabel:"زين كاش", masterLabel:"ماستر كارد", qrLabel:"QR", qrHint:"يجب وضع ملفات QR داخل public/qr.",
    copy:"نسخ", copied:"تم النسخ",
    dedicationLabel:"اسم الشخص / الاسم الإهدائي",
    dedicationPlaceholder:"محمد علي محسن - نيابةً عن : الشهيد آية الله العظمى الإمام الخامنئي",
    dedicationHint:"كتابة الاسم ليست إلزامية؛ ويمكن تركه فارغاً أو استخدام اسم مستعار.",
    showReportBtn:"إبلاغ بالدفع", callAgentBtn:"الاتصال بالوكيل", paymentHelper:"بعد الدفع، اضغط على «إبلاغ بالدفع» لتسجيل تقريرك.",
    reportTitle:"تسجيل تقرير الدفع", reportSubtitle:"يتم حفظ هذا النموذج مباشرة في قاعدة بيانات D1.",
    payerNameLabel:"اسم الدافع", payerNamePlaceholder:"اسمك",
    payerContactLabel:"رقم الاتصال / المراسلة", payerContactPlaceholder:"مثلاً 0770...",
    countryLabel:"الدولة", reportDisplayNameLabel:"الاسم المسجل",
    noteLabel:"ملاحظات", notePlaceholder:"وقت الدفع، ملاحظة قصيرة، تفاصيل إضافية...",
    submitReportBtn:"تسجيل المعلومات", successTitle:"تم تسجيل التقرير بنجاح", successText:"تم حفظ معلوماتك في قاعدة البيانات وستنعكس في قسم التقارير.",
    reportsTitle:"التقارير", reportsSubtitle:"آخر 20 تقريراً والتوزع الجغرافي من قاعدة بيانات D1",
    statReportsLabel:"إجمالي التقارير", statCountriesLabel:"الدول المشاركة", statAmountLabel:"مجموع المبالغ",
    countryReportTitle:"التقرير حسب الدولة", countryReportSubtitle:"الدول المسجلة تظهر على الخريطة وفي الجدول أدناه.",
    recentReportsTitle:"آخر 20 تقريراً", recentReportsSubtitle:"أحدث التقارير المسجلة في قاعدة البيانات",
    tableCountry:"الدولة", tableCount:"العدد", tableAmount:"مجموع المبلغ",
    footerText:'تم التطوير بواسطة: <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">جامعة المصطفى العالمية - ممثلية العراق</a>',
    buildVersionLabel:"نسخة النشر:",
    reportCountry:"الدولة", reportAmount:"المبلغ", reportAgent:"الوكيل", reportTime:"الوقت", noReports:"لا توجد تقارير بعد.", noNote:"بلا ملاحظات"
  },
  en: {
    dir:"ltr", title:"Public Donations for the Islamic Revolution of Iran",
    heroBadge:"Multilingual support platform", heroRibbon:"Public support, global solidarity, and transparent reporting",
    subtitle:"Choose the amount, currency, and receiving agent, then optionally submit your payment report.",
    feature1Title:"Multilingual", feature1Text:"Support for 9 languages and global audiences",
    feature2Title:"Multi-route", feature2Text:"Two independent agents with real payment details",
    feature3Title:"Report-driven", feature3Text:"Live reports, latest 20 entries, and country analytics",
    heroStat1Label:"Active languages", heroStat2Label:"Active agents", heroStat3Label:"Recent reports",
    amountTitle:"Choose amount and currency", amountSubtitle:"Select a currency; both agents accept all currencies.",
    customAmountLabel:"Custom amount", amountNotice:"Large amounts are better confirmed after final coordination.",
    agentTitle:"Choose receiving agent", agentSubtitle:"Each agent has independent payment details and accepts all currencies.",
    agent1Badge:"Agent 1", agent2Badge:"Agent 2",
    paymentInfoTitle:"Payment information", paymentInfoSubtitle:"The details below change based on the selected agent and currency.",
    selectedCurrencyLabel:"Selected currency", selectedAmountLabel:"Selected amount", selectedAgentLabel:"Selected agent",
    contactLabel:"Direct contact", zainLabel:"ZainCash", masterLabel:"MasterCard", qrLabel:"QR", qrHint:"QR files must exist in public/qr.",
    copy:"Copy", copied:"Copied",
    dedicationLabel:"Display / dedication name",
    dedicationPlaceholder:"Mohammad Ali Mohsen - On behalf of: Martyr Grand Ayatollah Imam Khamenei",
    dedicationHint:"Entering a name is optional; it may stay empty or use a pseudonym.",
    showReportBtn:"Report payment", callAgentBtn:"Call agent", paymentHelper:"After paying, click “Report payment” to submit your report.",
    reportTitle:"Submit payment report", reportSubtitle:"This form is stored directly in the D1 database.",
    payerNameLabel:"Payer name", payerNamePlaceholder:"Your name",
    payerContactLabel:"Phone / messenger", payerContactPlaceholder:"e.g. 0770...",
    countryLabel:"Country", reportDisplayNameLabel:"Recorded name",
    noteLabel:"Notes", notePlaceholder:"Payment time, short note, extra details...",
    submitReportBtn:"Submit information", successTitle:"Report submitted successfully", successText:"Your information has been saved to the database and reflected in the reports section.",
    reportsTitle:"Reports", reportsSubtitle:"Latest 20 reports and country distribution from D1",
    statReportsLabel:"Total reports", statCountriesLabel:"Participating countries", statAmountLabel:"Total amount",
    countryReportTitle:"Country report", countryReportSubtitle:"Registered countries are shown on the map and in the table below.",
    recentReportsTitle:"Latest 20 reports", recentReportsSubtitle:"Most recent reports stored in the database",
    tableCountry:"Country", tableCount:"Count", tableAmount:"Total amount",
    footerText:'Developed by: <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">Al-Mustafa International University - Iraq Office</a>',
    buildVersionLabel:"Deployment version:",
    reportCountry:"Country", reportAmount:"Amount", reportAgent:"Agent", reportTime:"Time", noReports:"No reports yet.", noNote:"No note"
  }
};

const fallback = i18n.en;
for (const code of ["ur","fr","de","es","pt","tr"]) i18n[code] = {...fallback, dir: code==="ur" ? "rtl":"ltr"};

let currentLang = "fa";
let selectedCurrency = "USD";
let selectedAmount = currencyPresets.USD[0];
let selectedAgent = 1;
let reportCache = { recent: [], countries: [], stats: { total_reports: 0, total_amount: 0, countries_count: 0 } };

const $ = (id) => document.getElementById(id);
const dedicationInput = $("dedicationName");
const reportDisplayName = $("reportDisplayName");

function agentName(id){ return agents[id].name[currentLang] || agents[id].name.en; }
function agentDesc(id){ return agents[id].desc[currentLang] || agents[id].desc.en; }

function setPlaceholderBehavior(el, placeholderText){
  el.value = "";
  el.placeholder = placeholderText;
  el.dataset.firstFocus = "1";
  el.addEventListener("focus", () => {
    if (el.dataset.firstFocus === "1") {
      el.value = "";
      el.dataset.firstFocus = "0";
    }
  });
}

function applyLanguage(lang){
  currentLang = i18n[lang] ? lang : "en";
  const t = i18n[currentLang];
  document.documentElement.lang = currentLang;
  document.documentElement.dir = t.dir;
  document.body.dir = t.dir;
  document.title = t.title;

  const map = {
    heroBadge:"heroBadge", heroRibbon:"heroRibbon", title:"title", subtitle:"subtitle",
    feature1Title:"feature1Title", feature1Text:"feature1Text",
    feature2Title:"feature2Title", feature2Text:"feature2Text",
    feature3Title:"feature3Title", feature3Text:"feature3Text",
    heroStat1Label:"heroStat1Label", heroStat2Label:"heroStat2Label", heroStat3Label:"heroStat3Label",
    amountTitle:"amountTitle", amountSubtitle:"amountSubtitle", customAmountLabel:"customAmountLabel",
    amountNotice:"amountNotice", agentTitle:"agentTitle", agentSubtitle:"agentSubtitle",
    agent1Badge:"agent1Badge", agent2Badge:"agent2Badge", paymentInfoTitle:"paymentInfoTitle",
    paymentInfoSubtitle:"paymentInfoSubtitle", selectedCurrencyLabel:"selectedCurrencyLabel",
    selectedAmountLabel:"selectedAmountLabel", selectedAgentLabel:"selectedAgentLabel",
    contactLabel:"contactLabel", zainLabel:"zainLabel", masterLabel:"masterLabel", qrLabel:"qrLabel",
    qrHint:"qrHint", dedicationLabel:"dedicationLabel", dedicationHint:"dedicationHint",
    showReportBtn:"showReportBtn", callAgentBtn:"callAgentBtn", paymentHelper:"paymentHelper",
    reportTitle:"reportTitle", reportSubtitle:"reportSubtitle", payerNameLabel:"payerNameLabel",
    payerContactLabel:"payerContactLabel", countryLabel:"countryLabel", reportDisplayNameLabel:"reportDisplayNameLabel",
    noteLabel:"noteLabel", submitReportBtn:"submitReportBtn", successTitle:"successTitle", successText:"successText",
    reportsTitle:"reportsTitle", reportsSubtitle:"reportsSubtitle", statReportsLabel:"statReportsLabel",
    statCountriesLabel:"statCountriesLabel", statAmountLabel:"statAmountLabel", countryReportTitle:"countryReportTitle",
    countryReportSubtitle:"countryReportSubtitle", recentReportsTitle:"recentReportsTitle",
    recentReportsSubtitle:"recentReportsSubtitle", tableCountry:"tableCountry", tableCount:"tableCount",
    tableAmount:"tableAmount", buildVersionLabel:"buildVersionLabel"
  };
  Object.entries(map).forEach(([key, id]) => { const el = $(id); if (el) el.textContent = t[key]; });
  $("footerText").innerHTML = t.footerText;
  $("agent1Name").textContent = agentName(1);
  $("agent2Name").textContent = agentName(2);
  $("agent1Desc").textContent = agentDesc(1);
  $("agent2Desc").textContent = agentDesc(2);

  $("customAmount").placeholder = t.customAmountLabel;
  $("payerName").placeholder = t.payerNamePlaceholder;
  $("payerContact").placeholder = t.payerContactPlaceholder;
  $("note").placeholder = t.notePlaceholder;
  setPlaceholderBehavior(dedicationInput, t.dedicationPlaceholder);
  setPlaceholderBehavior(reportDisplayName, t.dedicationPlaceholder);

  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === currentLang));
  document.querySelectorAll(".copy-btn").forEach(btn => btn.textContent = t.copy);
  renderAmounts();
  updatePaymentInfo();
  renderReports();
}

function renderAmounts(){
  const grid = $("amountGrid");
  grid.innerHTML = "";
  for (const amount of currencyPresets[selectedCurrency]) {
    const btn = document.createElement("button");
    btn.className = "amount-btn" + (selectedAmount === amount ? " active" : "");
    btn.dataset.amount = String(amount);
    btn.textContent = formatAmount(amount, selectedCurrency);
    btn.addEventListener("click", () => {
      selectedAmount = amount;
      $("customAmount").value = "";
      renderAmounts();
      updatePaymentInfo();
    });
    grid.appendChild(btn);
  }
}

function formatAmount(amount, currency){
  return `${new Intl.NumberFormat(currentLang === "fa" ? "fa-IR" : "en-US").format(amount)} ${currency}`;
}

function effectiveAmount(){
  const custom = Number($("customAmount").value);
  return custom > 0 ? custom : selectedAmount;
}

function updatePaymentInfo(){
  const agent = agents[selectedAgent];
  $("selectedCurrency").textContent = selectedCurrency;
  $("selectedAmount").textContent = formatAmount(effectiveAmount(), selectedCurrency);
  $("selectedAgent").textContent = agentName(selectedAgent);
  $("contactValue").textContent = agent.contact;
  $("zainValue").textContent = agent.zain;
  $("masterValue").textContent = agent.master;
  $("qrImage").src = agent.qr;
  $("qrImage").alt = agentName(selectedAgent);
}

async function copyText(text){
  await navigator.clipboard.writeText(text);
}

document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", async () => {
    const target = $(btn.dataset.copyTarget);
    const original = i18n[currentLang].copy;
    try {
      await copyText(target.textContent.trim());
      btn.textContent = i18n[currentLang].copied;
      setTimeout(() => btn.textContent = original, 1200);
    } catch {
      alert(target.textContent.trim());
    }
  });
});

document.querySelectorAll(".currency-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedCurrency = btn.dataset.currency;
    selectedAmount = currencyPresets[selectedCurrency][0];
    $("customAmount").value = "";
    document.querySelectorAll(".currency-btn").forEach(b => b.classList.toggle("active", b === btn));
    renderAmounts();
    updatePaymentInfo();
  });
});

document.querySelectorAll(".agent-card").forEach(card => {
  card.addEventListener("click", () => {
    selectedAgent = Number(card.dataset.agent);
    document.querySelectorAll(".agent-card").forEach(c => c.classList.toggle("active", c === card));
    updatePaymentInfo();
  });
});

$("customAmount").addEventListener("input", updatePaymentInfo);

$("showReportBtn").addEventListener("click", () => {
  $("reportSection").classList.remove("hidden");
  reportDisplayName.value = dedicationInput.value || "";
  $("reportSection").scrollIntoView({ behavior:"smooth", block:"start" });
});

$("callAgentBtn").addEventListener("click", () => {
  const phone = agents[selectedAgent].contact.replace(/\s+/g, "");
  window.location.href = `tel:${phone}`;
});

function renderCountryTable(countryRows){
  const tbody = $("countryTableBody");
  tbody.innerHTML = "";
  countryRows.forEach(row => {
    const meta = countryMeta[row.country] || { flag:"🌍" };
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${meta.flag} ${row.country}</td><td>${row.count}</td><td>${formatAmount(row.amount, selectedCurrency)}</td>`;
    tbody.appendChild(tr);
  });
}

function renderMapMarkers(countryRows){
  const holder = $("mapMarkers");
  holder.innerHTML = "";
  countryRows.forEach(row => {
    const meta = countryMeta[row.country];
    if (!meta) return;
    const g = document.createElementNS("http://www.w3.org/2000/svg","g");
    g.setAttribute("class","map-marker");

    const c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx", meta.x); c.setAttribute("cy", meta.y); c.setAttribute("r", 10);

    const t = document.createElementNS("http://www.w3.org/2000/svg","text");
    t.setAttribute("x", meta.x + 15); t.setAttribute("y", meta.y + 4);
    t.textContent = `${meta.flag} ${row.count}`;

    g.appendChild(c); g.appendChild(t); holder.appendChild(g);
  });
}

function renderRecentList(items){
  const holder = $("recentList");
  holder.innerHTML = "";
  if (!items.length) {
    holder.innerHTML = `<div class="report-item"><div class="report-note">${i18n[currentLang].noReports}</div></div>`;
    return;
  }
  items.forEach(item => {
    const meta = countryMeta[item.country] || { flag:"🌍" };
    const node = document.createElement("article");
    node.className = "report-item";
    node.innerHTML = `
      <div class="report-item-top">
        <div>
          <div class="report-name">${escapeHtml(item.display_name || item.payer_name || "-")}</div>
          <div class="report-meta">${meta.flag} ${i18n[currentLang].reportCountry}: ${escapeHtml(item.country || "-")}</div>
        </div>
        <div class="report-meta">${i18n[currentLang].reportTime}: ${escapeHtml(item.created_at || "-")}</div>
      </div>
      <div class="report-tags">
        <span class="report-tag">${i18n[currentLang].reportAmount}: ${formatAmount(item.amount || 0, item.currency || selectedCurrency)}</span>
        <span class="report-tag">${i18n[currentLang].reportAgent}: ${agentName(Number(item.agent_id || 1))}</span>
      </div>
      <div class="report-note">${escapeHtml(item.note || i18n[currentLang].noNote)}</div>
    `;
    holder.appendChild(node);
  });
}

function renderStats(stats){
  $("statReports").textContent = stats.total_reports ?? 0;
  $("statCountries").textContent = stats.countries_count ?? 0;
  $("statAmount").textContent = formatAmount(stats.total_amount ?? 0, selectedCurrency);
  $("heroReportsCount").textContent = stats.total_reports ?? 0;
}

function renderReports(){
  renderRecentList(reportCache.recent || []);
  renderCountryTable(reportCache.countries || []);
  renderMapMarkers(reportCache.countries || []);
  renderStats(reportCache.stats || { total_reports:0, total_amount:0, countries_count:0 });
}

function escapeHtml(value){
  return String(value)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#39;");
}

async function loadReports(){
  try {
    const [recentRes, countryRes, statsRes] = await Promise.all([
      fetch("/api/reports?limit=20"),
      fetch("/api/countries"),
      fetch("/api/stats")
    ]);
    if (!recentRes.ok || !countryRes.ok || !statsRes.ok) throw new Error("API error");
    reportCache.recent = await recentRes.json();
    reportCache.countries = await countryRes.json();
    reportCache.stats = await statsRes.json();
  } catch (err) {
    console.error(err);
  }
  renderReports();
}

$("reportForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const payload = {
    payer_name: $("payerName").value.trim(),
    payer_contact: $("payerContact").value.trim(),
    country: $("country").value,
    display_name: $("reportDisplayName").value.trim(),
    note: $("note").value.trim(),
    amount: effectiveAmount(),
    currency: selectedCurrency,
    agent_id: selectedAgent,
    build_version: BUILD_VERSION
  };
  const res = await fetch("/api/report", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const text = await res.text();
    alert(text || 'Failed to save report');
    return;
  }

  $("successBox").classList.remove("hidden");
  $("reportForm").reset();
  setPlaceholderBehavior(dedicationInput, i18n[currentLang].dedicationPlaceholder);
  setPlaceholderBehavior(reportDisplayName, i18n[currentLang].dedicationPlaceholder);
  selectedAmount = currencyPresets[selectedCurrency][0];
  $("customAmount").value = "";
  renderAmounts();
  updatePaymentInfo();
  await loadReports();
  $("successBox").scrollIntoView({ behavior:"smooth", block:"nearest" });
});

applyLanguage("fa");
updatePaymentInfo();
loadReports();
