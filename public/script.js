
const countryMeta = {
  Iraq: { flag: "🇮🇶", x: 62.5, y: 41.0 },
  Iran: { flag: "🇮🇷", x: 65.5, y: 40.0 },
  Germany: { flag: "🇩🇪", x: 49.0, y: 24.0 },
  France: { flag: "🇫🇷", x: 47.0, y: 27.0 },
  Turkey: { flag: "🇹🇷", x: 57.0, y: 34.0 },
  Pakistan: { flag: "🇵🇰", x: 69.0, y: 45.0 },
  Brazil: { flag: "🇧🇷", x: 29.5, y: 68.0 },
  Spain: { flag: "🇪🇸", x: 44.0, y: 30.0 },
  "United States": { flag: "🇺🇸", x: 20.0, y: 30.0 },
  "United Kingdom": { flag: "🇬🇧", x: 46.0, y: 22.0 },
  Afghanistan: { flag: "🇦🇫", x: 67.0, y: 42.0 },
  Lebanon: { flag: "🇱🇧", x: 59.0, y: 38.0 }
};

const currencyPresets = {
  USD: [10, 25, 50, 100, 250, 500],
  IQD: [10000, 25000, 50000, 100000, 250000, 500000],
  EUR: [10, 20, 50, 100, 200, 500]
};

const agents = {
  1: {
    name: {
      fa: "الشيخ علي الكاظمي", ar: "الشيخ علي الكاظمي", en: "Sheikh Ali Al-Kadhimi",
      ur: "شیخ علی الکاظمی", fr: "Cheikh Ali Al-Kadhimi", de: "Scheich Ali Al-Kadhimi",
      es: "Sheij Ali Al-Kadhimi", pt: "Sheikh Ali Al-Kadhimi", tr: "Şeyh Ali el-Kazımi"
    },
    desc: {
      fa: "للتواصل، زين كاش و ماستر كارد", ar: "للتواصل، زين كاش و ماستر كارد", en: "Contact, ZainCash and MasterCard",
      ur: "رابطہ، زین کیش اور ماسٹر کارڈ", fr: "Contact, ZainCash et MasterCard", de: "Kontakt, ZainCash und MasterCard",
      es: "Contacto, ZainCash y MasterCard", pt: "Contato, ZainCash e MasterCard", tr: "İletişim, ZainCash ve MasterCard"
    },
    contact: "07702952583", zain: "07702952583", master: "7130833309", qr: "/qr/agent1-qr.png"
  },
  2: {
    name: {
      fa: "سيد جاسم الجزائري", ar: "سيد جاسم الجزائري", en: "Sayyid Jasim Al-Jazairi",
      ur: "سید جاسم الجزائری", fr: "Sayyid Jasim Al-Jazairi", de: "Sayyid Jasim Al-Jazairi",
      es: "Sayyid Jasim Al-Jazairi", pt: "Sayyid Jasim Al-Jazairi", tr: "Seyyid Casim el-Cezairi"
    },
    desc: {
      fa: "اتصال مباشر، زين كاش و ماستر كارد", ar: "اتصال مباشر، زين كاش و ماستر كارد", en: "Direct contact, ZainCash and MasterCard",
      ur: "براہ راست رابطہ، زین کیش اور ماسٹر کارڈ", fr: "Contact direct, ZainCash et MasterCard", de: "Direkter Kontakt, ZainCash und MasterCard",
      es: "Contacto directo, ZainCash y MasterCard", pt: "Contato direto, ZainCash e MasterCard", tr: "Doğrudan iletişim, ZainCash ve MasterCard"
    },
    contact: "0773 003 5844", zain: "07812010483", master: "9037487221", qr: "/qr/agent2-qr.png"
  }
};

const baseFa = {
  dir:"rtl",
  heroBadge:"پلتفرم حمایتی چندزبانه",
  title:"جمع آوری کمکهای مردمی به انقلاب اسلامی ایران",
  subtitle:"برای حمایت، ارز، مبلغ و وکیل دریافت‌کننده را انتخاب کنید و سپس در صورت تمایل گزارش پرداخت خود را ثبت نمایید.",
  feature1Title:"پوشش بین‌المللی", feature1Text:"پشتیبانی از ۹ زبان برای مخاطبان جهانی",
  feature2Title:"پرداخت واقعی", feature2Text:"نمایش اطلاعات واقعی دو وکیل مستقل",
  feature3Title:"گزارش زنده", feature3Text:"۲۰ گزارش آخر و پراکندگی کشوری از D1",
  heroStat1:"زبان‌های فعال", heroStat2:"وکلای فعال", heroStat3:"گزارش‌های ثبت‌شده",
  amountTitle:"انتخاب مبلغ و ارز", amountSubtitle:"هر دو وکیل همه ارزها را می‌پذیرند.",
  customAmountLabel:"مبلغ دلخواه", amountNotice:"برای مبالغ خیلی بزرگ بهتر است پیش از ثبت نهایی هماهنگی انجام شود.",
  agentTitle:"انتخاب وکیل دریافت‌کننده", agentSubtitle:"اطلاعات پرداخت هر وکیل مستقل است.",
  agent1Badge:"وکیل ۱", agent2Badge:"وکیل ۲",
  paymentTitle:"اطلاعات پرداخت", paymentSubtitle:"اطلاعات زیر بر اساس وکیل انتخاب‌شده نمایش داده می‌شود.",
  selectedCurrencyLabel:"ارز انتخابی", selectedAmountLabel:"مبلغ انتخابی", selectedAgentLabel:"وکیل انتخابی",
  contactLabel:"تماس", zainLabel:"زين كاش", masterLabel:"ماستر كارد", qrLabel:"QR", qrHint:"فایل‌های QR باید در پوشه public/qr قرار بگیرند.",
  copy:"کپی", copied:"کپی شد",
  showReportBtn:"اعلام پرداخت", callAgentBtn:"تماس با وکیل", paymentHelper:"پس از پرداخت، روی «اعلام پرداخت» بزنید تا گزارش شما ثبت شود.",
  reportTitle:"ثبت گزارش پرداخت", reportSubtitle:"این فرم مستقیماً در پایگاه داده D1 ذخیره می‌شود.",
  payerContactLabel:"شماره تماس / پیام‌رسان", payerContactPlaceholder:"مثلاً 0770...",
  countryLabel:"کشور", reportDisplayNameLabel:"نام ثبت‌شونده", reportDisplayNameHint:"نوشتن نام الزامی نیست؛ می‌تواند خالی بماند یا با نام مستعار تکمیل شود.",
  reportDisplayPlaceholder:"محمد علی محسن - به نیابت از : شهید آیت الله العظمی امام خامنه ای",
  noteLabel:"توضیحات", notePlaceholder:"زمان پرداخت، توضیح کوتاه، توضیحات تکمیلی...",
  submitReportBtn:"ثبت اطلاعات", successTitle:"گزارش با موفقیت ثبت شد", successText:"اطلاعات شما در پایگاه داده ذخیره شد و در بخش گزارشات نیز بازتاب پیدا می‌کند.",
  reportsTitle:"گزارشات", reportsSubtitle:"۲۰ گزارش آخر و پراکندگی کشوری از پایگاه داده D1",
  statReportsLabel:"کل گزارشات", statCountriesLabel:"کشورهای مشارکت‌کننده", statAmountLabel:"مجموع مبالغ",
  countryReportTitle:"گزارش کشوری", countryReportSubtitle:"کشورهای ثبت‌شده روی نقشه و در جدول زیر نمایش داده می‌شوند.",
  recentReportsTitle:"۲۰ گزارش آخر", recentReportsSubtitle:"آخرین گزارش‌های ثبت‌شده در پایگاه داده",
  tableCountry:"کشور", tableCount:"تعداد", tableAmount:"جمع مبلغ",
  footerText:'توسعه داده شده توسط: <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">جامعة المصطفی العالمیة - نمایندگی عراق</a>',
  buildVersionLabel:"نسخه استقرار:",
  reportCountry:"کشور", reportAmount:"مبلغ", reportAgent:"وکیل", reportTime:"زمان", noReports:"هنوز گزارشی ثبت نشده است.", noNote:"بدون توضیح",
  spamTooFast:"خیلی سریع فرم را ارسال کرده‌اید. چند ثانیه بعد دوباره تلاش کنید.",
  spamDuplicate:"درخواست تکراری شناسایی شد."
};

const baseAr = {
  ...baseFa, dir:"rtl",
  heroBadge:"منصة دعم متعددة اللغات",
  title:"جمع التبرعات الشعبية للثورة الإسلامية في إيران",
  subtitle:"اختر العملة والمبلغ والوكيل المستلم، ثم يمكنك تسجيل تقرير الدفع إذا رغبت.",
  feature1Title:"تغطية دولية", feature1Text:"دعم 9 لغات لمخاطبين من أنحاء العالم",
  feature2Title:"دفع حقيقي", feature2Text:"عرض معلومات حقيقية لوكيلين مستقلين",
  feature3Title:"تقارير مباشرة", feature3Text:"آخر 20 تقريراً والتوزع الجغرافي من D1",
  heroStat1:"اللغات النشطة", heroStat2:"الوكلاء النشطون", heroStat3:"التقارير المسجلة",
  amountTitle:"اختيار المبلغ والعملة", amountSubtitle:"كلا الوكيلين يقبلان جميع العملات.",
  customAmountLabel:"مبلغ مخصص", amountNotice:"بالنسبة للمبالغ الكبيرة يُفضّل التنسيق قبل التسجيل النهائي.",
  agentTitle:"اختيار الوكيل المستلم", agentSubtitle:"معلومات الدفع لكل وكيل مستقلة.",
  agent1Badge:"الوكيل 1", agent2Badge:"الوكيل 2",
  paymentTitle:"معلومات الدفع", paymentSubtitle:"تُعرض المعلومات التالية بحسب الوكيل المختار.",
  selectedCurrencyLabel:"العملة المختارة", selectedAmountLabel:"المبلغ المختار", selectedAgentLabel:"الوكيل المختار",
  contactLabel:"الاتصال", qrHint:"يجب وضع ملفات QR داخل public/qr.",
  copy:"نسخ", copied:"تم النسخ",
  showReportBtn:"إبلاغ بالدفع", callAgentBtn:"الاتصال بالوكيل", paymentHelper:"بعد الدفع، اضغط على «إبلاغ بالدفع» لتسجيل تقريرك.",
  reportTitle:"تسجيل تقرير الدفع", reportSubtitle:"هذا النموذج يُحفظ مباشرة في قاعدة بيانات D1.",
  payerContactLabel:"رقم الاتصال / المراسلة", payerContactPlaceholder:"مثلاً 0770...",
  countryLabel:"الدولة", reportDisplayNameLabel:"الاسم المسجل", reportDisplayNameHint:"كتابة الاسم ليست إلزامية؛ ويمكن تركه فارغاً أو استخدام اسم مستعار.",
  reportDisplayPlaceholder:"محمد علي محسن - نيابةً عن : الشهيد آية الله العظمى الإمام الخامنئي",
  noteLabel:"ملاحظات", notePlaceholder:"وقت الدفع، ملاحظة قصيرة، تفاصيل إضافية...",
  submitReportBtn:"تسجيل المعلومات", successTitle:"تم تسجيل التقرير بنجاح", successText:"تم حفظ معلوماتك في قاعدة البيانات وستنعكس في قسم التقارير.",
  reportsTitle:"التقارير", reportsSubtitle:"آخر 20 تقريراً والتوزع الجغرافي من قاعدة بيانات D1",
  statReportsLabel:"إجمالي التقارير", statCountriesLabel:"الدول المشاركة", statAmountLabel:"مجموع المبالغ",
  countryReportTitle:"التقرير حسب الدولة", countryReportSubtitle:"الدول المسجلة تظهر على الخريطة وفي الجدول أدناه.",
  recentReportsTitle:"آخر 20 تقريراً", recentReportsSubtitle:"أحدث التقارير المسجلة في قاعدة البيانات",
  tableCountry:"الدولة", tableCount:"العدد", tableAmount:"مجموع المبلغ",
  footerText:'تم التطوير بواسطة: <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">جامعة المصطفى العالمية - ممثلية العراق</a>',
  buildVersionLabel:"نسخة النشر:",
  reportCountry:"الدولة", reportAmount:"المبلغ", reportAgent:"الوكيل", reportTime:"الوقت", noReports:"لا توجد تقارير بعد.", noNote:"بلا ملاحظات",
  spamTooFast:"تم إرسال النموذج بسرعة كبيرة. حاول بعد بضع ثوانٍ.",
  spamDuplicate:"تم اكتشاف طلب مكرر."
};

const baseEn = {
  dir:"ltr",
  heroBadge:"Multilingual support platform",
  title:"Public Donations for the Islamic Revolution of Iran",
  subtitle:"Choose currency, amount, and receiving agent, then optionally submit your payment report.",
  feature1Title:"International reach", feature1Text:"Support for 9 languages and global audiences",
  feature2Title:"Real payment data", feature2Text:"Real details for two independent agents",
  feature3Title:"Live reports", feature3Text:"Latest 20 reports and country distribution from D1",
  heroStat1:"Active languages", heroStat2:"Active agents", heroStat3:"Saved reports",
  amountTitle:"Choose amount and currency", amountSubtitle:"Both agents accept all currencies.",
  customAmountLabel:"Custom amount", amountNotice:"Large amounts are better confirmed before final submission.",
  agentTitle:"Choose receiving agent", agentSubtitle:"Each agent has independent payment details.",
  agent1Badge:"Agent 1", agent2Badge:"Agent 2",
  paymentTitle:"Payment information", paymentSubtitle:"The details below change based on the selected agent.",
  selectedCurrencyLabel:"Selected currency", selectedAmountLabel:"Selected amount", selectedAgentLabel:"Selected agent",
  contactLabel:"Contact", zainLabel:"ZainCash", masterLabel:"MasterCard", qrLabel:"QR", qrHint:"QR files must be placed in public/qr.",
  copy:"Copy", copied:"Copied",
  showReportBtn:"Report payment", callAgentBtn:"Call agent", paymentHelper:"After payment, click “Report payment” to submit your report.",
  reportTitle:"Submit payment report", reportSubtitle:"This form is stored directly in the D1 database.",
  payerContactLabel:"Phone / messenger", payerContactPlaceholder:"e.g. 0770...",
  countryLabel:"Country", reportDisplayNameLabel:"Recorded name", reportDisplayNameHint:"Entering a name is optional; it may stay empty or use a pseudonym.",
  reportDisplayPlaceholder:"Mohammad Ali Mohsen - On behalf of: Martyr Grand Ayatollah Imam Khamenei",
  noteLabel:"Notes", notePlaceholder:"Payment time, short note, extra details...",
  submitReportBtn:"Submit information", successTitle:"Report submitted successfully", successText:"Your information has been saved to the database and reflected in the reports section.",
  reportsTitle:"Reports", reportsSubtitle:"Latest 20 reports and country distribution from the D1 database",
  statReportsLabel:"Total reports", statCountriesLabel:"Participating countries", statAmountLabel:"Total amount",
  countryReportTitle:"Country report", countryReportSubtitle:"Registered countries are shown on the map and in the table below.",
  recentReportsTitle:"Latest 20 reports", recentReportsSubtitle:"Most recent reports stored in the database",
  tableCountry:"Country", tableCount:"Count", tableAmount:"Total amount",
  footerText:'Developed by: <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">Al-Mustafa International University - Iraq Office</a>',
  buildVersionLabel:"Deployment version:",
  reportCountry:"Country", reportAmount:"Amount", reportAgent:"Agent", reportTime:"Time", noReports:"No reports yet.", noNote:"No note",
  spamTooFast:"You submitted too quickly. Please try again in a few seconds.",
  spamDuplicate:"Duplicate submission detected."
};

const i18n = { fa: baseFa, ar: baseAr, en: baseEn };
for (const code of ["ur","fr","de","es","pt","tr"]) i18n[code] = { ...baseEn, dir: code === "ur" ? "rtl" : "ltr" };

let currentLang = "fa";
let selectedCurrency = "USD";
let selectedAmount = currencyPresets.USD[0];
let selectedAgent = 1;
let reportCache = { recent: [], countries: [], stats: { total_reports: 0, total_amount: 0, countries_count: 0 } };

const $ = (id) => document.getElementById(id);
const reportDisplayInput = $("reportDisplayName");

function agentName(id){ return agents[id].name[currentLang] || agents[id].name.en; }
function agentDesc(id){ return agents[id].desc[currentLang] || agents[id].desc.en; }

function setPlaceholderField(el, text) {
  el.value = "";
  el.placeholder = text;
  el.dataset.firstFocus = "1";
  el.onfocus = () => {
    if (el.dataset.firstFocus === "1") {
      el.value = "";
      el.dataset.firstFocus = "0";
    }
  };
}

function applyLanguage(lang){
  currentLang = i18n[lang] ? lang : "en";
  const t = i18n[currentLang];
  document.documentElement.lang = currentLang;
  document.documentElement.dir = t.dir;
  document.body.dir = t.dir;
  document.title = t.title;

  const map = {
    heroBadge:"heroBadge", title:"title", subtitle:"subtitle",
    feature1Title:"feature1Title", feature1Text:"feature1Text",
    feature2Title:"feature2Title", feature2Text:"feature2Text",
    feature3Title:"feature3Title", feature3Text:"feature3Text",
    heroStat1:"heroStat1", heroStat2:"heroStat2", heroStat3:"heroStat3",
    amountTitle:"amountTitle", amountSubtitle:"amountSubtitle", customAmountLabel:"customAmountLabel",
    amountNotice:"amountNotice", agentTitle:"agentTitle", agentSubtitle:"agentSubtitle",
    agent1Badge:"agent1Badge", agent2Badge:"agent2Badge",
    paymentTitle:"paymentTitle", paymentSubtitle:"paymentSubtitle",
    selectedCurrencyLabel:"selectedCurrencyLabel", selectedAmountLabel:"selectedAmountLabel", selectedAgentLabel:"selectedAgentLabel",
    contactLabel:"contactLabel", zainLabel:"zainLabel", masterLabel:"masterLabel", qrLabel:"qrLabel", qrHint:"qrHint",
    showReportBtn:"showReportBtn", callAgentBtn:"callAgentBtn", paymentHelper:"paymentHelper",
    reportTitle:"reportTitle", reportSubtitle:"reportSubtitle", payerContactLabel:"payerContactLabel",
    countryLabel:"countryLabel", reportDisplayNameLabel:"reportDisplayNameLabel", reportDisplayNameHint:"reportDisplayNameHint",
    noteLabel:"noteLabel", submitReportBtn:"submitReportBtn", successTitle:"successTitle", successText:"successText",
    reportsTitle:"reportsTitle", reportsSubtitle:"reportsSubtitle", statReportsLabel:"statReportsLabel",
    statCountriesLabel:"statCountriesLabel", statAmountLabel:"statAmountLabel",
    countryReportTitle:"countryReportTitle", countryReportSubtitle:"countryReportSubtitle",
    recentReportsTitle:"recentReportsTitle", recentReportsSubtitle:"recentReportsSubtitle",
    tableCountry:"tableCountry", tableCount:"tableCount", tableAmount:"tableAmount",
    buildVersionLabel:"buildVersionLabel"
  };

  for (const [id, key] of Object.entries(map)) {
    const el = $(id);
    if (el) el.textContent = t[key];
  }

  $("footerText").innerHTML = t.footerText;
  $("agent1Name").textContent = agentName(1);
  $("agent2Name").textContent = agentName(2);
  $("agent1Desc").textContent = agentDesc(1);
  $("agent2Desc").textContent = agentDesc(2);

  $("customAmount").placeholder = t.customAmountLabel;
  $("payerContact").placeholder = t.payerContactPlaceholder;
  $("note").placeholder = t.notePlaceholder;
  setPlaceholderField(reportDisplayInput, t.reportDisplayPlaceholder);

  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === currentLang));
  document.querySelectorAll(".copy-btn").forEach(btn => btn.textContent = t.copy);

  renderAmounts();
  updatePaymentInfo();
  renderReports();
}

function formatAmount(amount, currency){
  const locale = currentLang === "fa" ? "fa-IR" : currentLang === "ar" ? "ar-IQ" : "en-US";
  return `${new Intl.NumberFormat(locale).format(amount)} ${currency}`;
}

function renderAmounts(){
  const grid = $("amountGrid");
  grid.innerHTML = "";
  for (const amount of currencyPresets[selectedCurrency]) {
    const btn = document.createElement("button");
    btn.className = "amount-btn" + (selectedAmount === amount ? " active" : "");
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

document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", async () => {
    const target = $(btn.dataset.copyTarget);
    const original = i18n[currentLang].copy;
    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      btn.textContent = i18n[currentLang].copied;
      setTimeout(() => btn.textContent = original, 1200);
    } catch {
      alert(target.textContent.trim());
    }
  });
});

$("showReportBtn").addEventListener("click", () => {
  $("reportSection").classList.remove("hidden");
  setPlaceholderField(reportDisplayInput, i18n[currentLang].reportDisplayPlaceholder);
  $("pageLoadedAt").value = String(Date.now());
  $("reportSection").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("callAgentBtn").addEventListener("click", () => {
  const phone = agents[selectedAgent].contact.replace(/\s+/g, "");
  window.location.href = `tel:${phone}`;
});

function renderCountryTable(rows){
  const tbody = $("countryTableBody");
  tbody.innerHTML = "";
  for (const row of rows) {
    const meta = countryMeta[row.country] || { flag: "🌍" };
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${meta.flag} ${escapeHtml(row.country)}</td><td>${row.count}</td><td>${formatAmount(Number(row.amount || 0), row.currency || selectedCurrency)}</td>`;
    tbody.appendChild(tr);
  }
}

function renderMapMarkers(rows){
  const holder = $("mapMarkers");
  holder.innerHTML = "";
  for (const row of rows) {
    const meta = countryMeta[row.country];
    if (!meta) continue;
    const wrap = document.createElement("div");
    wrap.className = "map-marker";
    wrap.style.left = meta.x + "%";
    wrap.style.top = meta.y + "%";
    wrap.innerHTML = `<span class="map-dot"></span><span class="map-label">${meta.flag} ${row.count}</span>`;
    holder.appendChild(wrap);
  }
}

function renderRecent(items){
  const holder = $("recentList");
  holder.innerHTML = "";
  if (!items.length) {
    holder.innerHTML = `<div class="report-item"><div class="report-note">${i18n[currentLang].noReports}</div></div>`;
    return;
  }
  for (const item of items) {
    const meta = countryMeta[item.country] || { flag: "🌍" };
    const node = document.createElement("article");
    node.className = "report-item";
    node.innerHTML = `
      <div class="report-item-top">
        <div>
          <div class="report-name">${escapeHtml(item.display_name || "-")}</div>
          <div class="report-meta">${meta.flag} ${i18n[currentLang].reportCountry}: ${escapeHtml(item.country || "-")}</div>
        </div>
        <div class="report-meta">${i18n[currentLang].reportTime}: ${escapeHtml(item.created_at || "-")}</div>
      </div>
      <div class="report-tags">
        <span class="report-tag">${i18n[currentLang].reportAmount}: ${formatAmount(Number(item.amount || 0), item.currency || selectedCurrency)}</span>
        <span class="report-tag">${i18n[currentLang].reportAgent}: ${agentName(Number(item.agent_id || 1))}</span>
      </div>
      <div class="report-note">${escapeHtml(item.note || i18n[currentLang].noNote)}</div>
    `;
    holder.appendChild(node);
  }
}

function renderStats(stats){
  $("statReports").textContent = stats.total_reports ?? 0;
  $("statCountries").textContent = stats.countries_count ?? 0;
  $("statAmount").textContent = formatAmount(Number(stats.total_amount || 0), selectedCurrency);
  $("heroReportsCount").textContent = stats.total_reports ?? 0;
}

function renderReports(){
  renderRecent(reportCache.recent || []);
  renderCountryTable(reportCache.countries || []);
  renderMapMarkers(reportCache.countries || []);
  renderStats(reportCache.stats || { total_reports: 0, total_amount: 0, countries_count: 0 });
}

async function loadReports(){
  try {
    const [recentRes, countryRes, statsRes] = await Promise.all([
      fetch("/api/reports?limit=20"),
      fetch("/api/countries"),
      fetch("/api/stats")
    ]);
    if (!recentRes.ok || !countryRes.ok || !statsRes.ok) throw new Error("api");
    reportCache.recent = await recentRes.json();
    reportCache.countries = await countryRes.json();
    reportCache.stats = await statsRes.json();
  } catch (e) {
    console.error(e);
  }
  renderReports();
}

$("reportForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const payload = {
    payer_contact: $("payerContact").value.trim(),
    country: $("country").value,
    display_name: $("reportDisplayName").value.trim(),
    note: $("note").value.trim(),
    amount: effectiveAmount(),
    currency: selectedCurrency,
    agent_id: selectedAgent,
    website: $("website").value,
    page_loaded_at: Number($("pageLoadedAt").value || Date.now()),
    build_version: document.querySelector('meta[name="build-version"]').content
  };

  const res = await fetch("/api/report", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const text = await res.text();
    alert(text || i18n[currentLang].spamTooFast);
    return;
  }

  $("successBox").classList.remove("hidden");
  $("reportForm").reset();
  setPlaceholderField(reportDisplayInput, i18n[currentLang].reportDisplayPlaceholder);
  $("pageLoadedAt").value = String(Date.now());
  selectedAmount = currencyPresets[selectedCurrency][0];
  $("customAmount").value = "";
  renderAmounts();
  updatePaymentInfo();
  await loadReports();
  $("successBox").scrollIntoView({ behavior: "smooth", block: "nearest" });
});

function escapeHtml(value){
  return String(value)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#39;");
}

applyLanguage("fa");
updatePaymentInfo();
$("pageLoadedAt").value = String(Date.now());
loadReports();
