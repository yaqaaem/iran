
const $ = (id) => document.getElementById(id);

const currencyPresets = {
  USD: [5, 10, 20, 50, 100, 250],
  IQD: [1000, 5000, 10000, 25000, 50000, 100000],
  EUR: [5, 10, 20, 50, 100, 200]
};

const FX_USD_ESTIMATE = { USD: 1, EUR: 1.09, IQD: 0.00076 };

const agents = {
  1: { contact: "07702952583", zain: "07702952583", master: "7130833309", qr: "/qr/agent1-qr.png" },
  2: { contact: "07701234567", zain: "07701234567", master: "5266123412", qr: "/qr/agent2-qr.png" }
};

const countryAliases = {
  "United States": ["United States", "USA", "United States of America", "US"],
  "United Kingdom": ["United Kingdom", "UK", "Britain", "Great Britain"],
  Iraq: ["Iraq", "Republic of Iraq"],
  Iran: ["Iran", "Islamic Republic of Iran"],
  Turkey: ["Turkey", "Türkiye"],
  Germany: ["Germany", "Federal Republic of Germany"],
  France: ["France", "French Republic"],
  Pakistan: ["Pakistan", "Islamic Republic of Pakistan"],
  Brazil: ["Brazil", "Federative Republic of Brazil"],
  Spain: ["Spain", "Kingdom of Spain"],
  Afghanistan: ["Afghanistan", "Islamic Emirate of Afghanistan"],
  Lebanon: ["Lebanon", "Lebanese Republic"]
};

const baseFa = {
  dir:"rtl", heroBadge:"پلتفرم حمایتی چندزبانه", title:"جمع آوری کمکهای مردمی به انقلاب اسلامی ایران", subtitle:"برای حمایت، ارز، مبلغ و وکیل دریافت‌کننده را انتخاب کنید و سپس در صورت تمایل گزارش پرداخت خود را ثبت نمایید.",
  feature1Title:"پوشش بین‌المللی", feature1Text:"پشتیبانی از ۹ زبان برای مخاطبان جهانی", feature2Title:"پرداخت واقعی", feature2Text:"نمایش اطلاعات واقعی دو وکیل مستقل", feature3Title:"گزارش زنده", feature3Text:"۲۰ گزارش آخر و پراکندگی کشوری از D1",
  heroStat1:"زبان‌های فعال", heroStat2:"وکلای فعال", heroStat3:"گزارش‌های ثبت‌شده",
  heroDonateBtn:"شروع ثبت حمایت", heroReportsBtn:"مشاهده گزارشات", heroSideKicker:"چرا مبالغ خرد مهم‌اند؟", heroSideTitle:"اثر جمعی پرداخت‌های کوچک، بسیار بزرگ است", heroSideText:"هزار دینار عراق به‌تنهایی عدد کوچکی است، اما وقتی همین مشارکت کوچک بارها تکرار شود، جمع کل می‌تواند بسیار معنادار و اثرگذار شود.", microPill:"مشارکت خرد، اثر بزرگ", microExample:"۱۰۰۰ دینار × ۱۰۰۰ نفر = ۱٬۰۰۰٬۰۰۰ دینار", microExampleNote:"در آمار تجمیعی، مبالغ با برآورد دلاری نمایش داده می‌شوند تا تفاوت ارزها باعث خطای برداشت نشود.",
  trust1Title:"چندزبانه و عمومی", trust1Text:"مناسب برای مشارکت مخاطبان منطقه‌ای و بین‌المللی", trust2Title:"دو مسیر دریافت مستقل", trust2Text:"تماس، زین‌کاش، مسترکارت و QR برای هر وکیل", trust3Title:"گزارش‌گیری شفاف", trust3Text:"ثبت گزارش‌ها و نمایش تجمیعی با لحاظ ارزش تقریبی ارزی",
  amountTitle:"انتخاب مبلغ و ارز", amountSubtitle:"هر دو وکیل همه ارزها را می‌پذیرند.", customAmountLabel:"مبلغ دلخواه", amountNotice:"برای مبالغ بالا بهتر است پیش از ثبت نهایی هماهنگی انجام شود.", conversionTitle:"نمایش تجمیعی هوشمند", conversionText:"برای جلوگیری از خطای برداشت میان ارزها، آمار کل و نقشه بر اساس برآورد دلاری محاسبه می‌شوند؛ اما مبلغ اصلی هر گزارش با ارز خودش حفظ می‌شود.",
  agentTitle:"انتخاب وکیل دریافت‌کننده", agentSubtitle:"اطلاعات پرداخت هر وکیل مستقل است.", agent1Badge:"وکیل ۱", agent2Badge:"وکیل ۲",
  paymentTitle:"اطلاعات پرداخت", paymentSubtitle:"اطلاعات زیر بر اساس وکیل انتخاب‌شده نمایش داده می‌شود.", selectedCurrencyLabel:"ارز انتخابی", selectedAmountLabel:"مبلغ انتخابی", selectedAgentLabel:"وکیل انتخابی", contactLabel:"تماس", zainLabel:"زين كاش", masterLabel:"ماستر كارد", qrLabel:"QR", qrHint:"", copy:"کپی", copied:"کپی شد", showReportBtn:"اعلام پرداخت", callAgentBtn:"تماس با وکیل", paymentHelper:"پس از پرداخت، روی «اعلام پرداخت» بزنید تا گزارش شما ثبت شود.",
  step1Title:"انتخاب ارز و مبلغ", step1Text:"پکیج‌های سریع یا مبلغ دلخواه", step2Title:"انتخاب وکیل", step2Text:"هر وکیل مسیر پرداخت مستقل دارد", step3Title:"ثبت گزارش", step3Text:"برای شفافیت آماری و نمایش عمومی",
  reportTitle:"ثبت گزارش پرداخت", reportSubtitle:"این فرم مستقیماً در پایگاه داده D1 ذخیره می‌شود.", payerContactLabel:"شماره تماس / پیام‌رسان", payerContactPlaceholder:"مثلاً 0770...", countryLabel:"کشور", reportDisplayNameLabel:"نام ثبت‌شونده", reportDisplayNameHint:"نوشتن نام الزامی نیست؛ می‌تواند خالی بماند یا با نام مستعار تکمیل شود.", reportDisplayPlaceholder:"محمد علی محسن - به نیابت از : شهید آیت الله العظمی امام خامنه ای", noteLabel:"توضیحات", notePlaceholder:"زمان پرداخت، توضیح کوتاه، توضیحات تکمیلی...", submitReportBtn:"ثبت اطلاعات", successTitle:"گزارش با موفقیت ثبت شد", successText:"اطلاعات شما در پایگاه داده ذخیره شد و در بخش گزارشات نیز بازتاب پیدا می‌کند.",
  reportsTitle:"گزارشات", reportsSubtitle:"۲۰ گزارش آخر و پراکندگی کشوری از پایگاه داده D1", statReportsLabel:"کل گزارشات", statCountriesLabel:"کشورهای مشارکت‌کننده", statAmountLabel:"مجموع مبالغ (برآورد دلاری)", countryReportTitle:"گزارش کشوری", countryReportSubtitle:"نقشه حرارتی تعاملی: شدت رنگ بر اساس برآورد دلاری مجموع مبالغ، کلیک روی کشور برای دیدن گزارش‌های همان کشور.", recentReportsTitle:"۲۰ گزارش آخر", recentReportsSubtitle:"آخرین گزارش‌های ثبت‌شده در پایگاه داده", tableCountry:"کشور", tableCount:"تعداد", tableAmount:"جمع مبلغ", footerText:'توسعه داده شده توسط <a href="http://t.me/mohsenzadeh2" target="_blank" rel="noopener noreferrer">@mohsenzadeh2</a> تحت اشراف <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">جامعة المصطفی العالمیة - نمایندگی عراق</a>', buildVersionLabel:"نسخه استقرار:", reportCountry:"کشور", reportAmount:"مبلغ", reportAgent:"وکیل", reportTime:"زمان", noReports:"هنوز گزارشی ثبت نشده است.", noNote:"بدون توضیح", allCountries:"فیلتر کشور: همه", clearAll:"نمایش همه", estimatedUsd:"برآورد دلاری"
};

const i18n = {
  fa: baseFa,
  ur: {...baseFa, title:"ایران کے اسلامی انقلاب کے لیے عوامی عطیات", dir:"rtl"},
  fr: {...baseFa, dir:"ltr", title:"Dons publics pour la Révolution islamique d'Iran"},
  de: {...baseFa, dir:"ltr", title:"Öffentliche Spenden für die Islamische Revolution im Iran"},
  es: {...baseFa, dir:"ltr", title:"Donaciones públicas para la Revolución Islámica de Irán"},
  pt: {...baseFa, dir:"ltr", title:"Doações públicas para a Revolução Islâmica do Irã"},
  tr: {...baseFa, dir:"ltr", title:"İran İslam Devrimi için halk bağışları"},
  ar: {...baseFa, dir:"rtl", heroBadge:"منصة دعم متعددة اللغات", title:"جمع التبرعات الشعبية للثورة الإسلامية في إيران", subtitle:"اختر العملة والمبلغ والوكيل المستلم، ثم يمكنك تسجيل تقرير الدفع إذا رغبت.", feature1Title:"تغطية دولية", feature1Text:"دعم 9 لغات لمخاطبين من أنحاء العالم", feature2Title:"دفع حقيقي", feature2Text:"عرض معلومات حقيقية لوكيلين مستقلين", feature3Title:"تقارير مباشرة", feature3Text:"آخر 20 تقريراً والتوزع الجغرافي من D1", heroStat1:"اللغات النشطة", heroStat2:"الوكلاء النشطون", heroStat3:"التقارير المسجلة", heroDonateBtn:"ابدأ تسجيل الدعم", heroReportsBtn:"عرض التقارير", heroSideKicker:"لماذا المساهمات الصغيرة مهمة؟", heroSideTitle:"الأثر الجماعي للمبالغ الصغيرة كبير جداً", heroSideText:"ألف دينار عراقي وحده مبلغ صغير، لكن تكرار هذه المشاركة الصغيرة مرات كثيرة يصنع حصيلة ذات معنى وأثر واضح.", microPill:"مساهمة صغيرة، أثر كبير", microExample:"1000 دينار × 1000 شخص = 1,000,000 دينار", microExampleNote:"في الإحصاءات المجمّعة، تُعرض المبالغ وفق تقدير دولاري حتى لا تسبّب فروق العملات انطباعاً مضللاً.", trust1Title:"منصة عامة ومتعددة اللغات", trust1Text:"ملائمة لمشاركة جمهور إقليمي ودولي", trust2Title:"مساران مستقلان للاستلام", trust2Text:"اتصال، زين كاش، ماستر كارد وQR لكل وكيل", trust3Title:"شفافية في التقارير", trust3Text:"تسجيل التقارير مع عرض تجميعي يراعي القيمة التقريبية للعملات", amountTitle:"اختيار المبلغ والعملة", amountSubtitle:"كلا الوكيلين يقبلان جميع العملات.", customAmountLabel:"مبلغ مخصص", amountNotice:"بالنسبة للمبالغ الكبيرة يُفضّل التنسيق قبل التسجيل النهائي.", conversionTitle:"عرض تجميعي ذكي", conversionText:"لتجنّب سوء الفهم بين العملات المختلفة، يتم احتساب الإحصاءات العامة والخريطة وفق تقدير دولاري، مع حفظ المبلغ الأصلي لكل تقرير بعملته نفسها.", agentTitle:"اختيار الوكيل المستلم", agentSubtitle:"معلومات الدفع لكل وكيل مستقلة.", agent1Badge:"الوكيل 1", agent2Badge:"الوكيل 2", paymentTitle:"معلومات الدفع", paymentSubtitle:"تُعرض المعلومات التالية بحسب الوكيل المختار.", selectedCurrencyLabel:"العملة المختارة", selectedAmountLabel:"المبلغ المختار", selectedAgentLabel:"الوكيل المختار", contactLabel:"الاتصال", copy:"نسخ", copied:"تم النسخ", showReportBtn:"إبلاغ بالدفع", callAgentBtn:"الاتصال بالوكيل", paymentHelper:"بعد الدفع، اضغط على «إبلاغ بالدفع» لتسجيل تقريرك.", step1Title:"اختيار العملة والمبلغ", step1Text:"باقات سريعة أو مبلغ مخصص", step2Title:"اختيار الوكيل", step2Text:"لكل وكيل مسار دفع مستقل", step3Title:"تسجيل التقرير", step3Text:"للشفافية الإحصائية والعرض العام", reportTitle:"تسجيل تقرير الدفع", reportSubtitle:"هذا النموذج يُحفظ مباشرة في قاعدة بيانات D1.", payerContactLabel:"رقم الاتصال / المراسلة", payerContactPlaceholder:"مثلاً 0770...", countryLabel:"الدولة", reportDisplayNameLabel:"الاسم المسجل", reportDisplayNameHint:"كتابة الاسم ليست إلزامية؛ ويمكن تركه فارغاً أو استخدام اسم مستعار.", reportDisplayPlaceholder:"محمد علي محسن - نيابةً عن : الشهيد آية الله العظمى الإمام الخامنئي", noteLabel:"ملاحظات", notePlaceholder:"وقت الدفع، ملاحظة قصيرة، تفاصيل إضافية...", submitReportBtn:"تسجيل المعلومات", successTitle:"تم تسجيل التقرير بنجاح", successText:"تم حفظ معلوماتك في قاعدة البيانات وستنعكس في قسم التقارير.", reportsTitle:"التقارير", reportsSubtitle:"آخر 20 تقريراً والتوزع الجغرافي من قاعدة بيانات D1", statReportsLabel:"إجمالي التقارير", statCountriesLabel:"الدول المشاركة", statAmountLabel:"مجموع المبالغ (تقدير دولاري)", countryReportTitle:"التقرير حسب الدولة", countryReportSubtitle:"خريطة حرارية تفاعلية: شدة اللون بحسب التقدير الدولاري لمجموع المبالغ، والنقر على الدولة يعرض تقاريرها.", recentReportsTitle:"آخر 20 تقريراً", recentReportsSubtitle:"أحدث التقارير المسجلة في قاعدة البيانات", tableCountry:"الدولة", tableCount:"العدد", tableAmount:"مجموع المبلغ", footerText:'تم التطوير بواسطة <a href="http://t.me/mohsenzadeh2" target="_blank" rel="noopener noreferrer">@mohsenzadeh2</a> تحت اشراف <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">جامعة المصطفى العالمية - ممثلية العراق</a>', buildVersionLabel:"نسخة النشر:", reportCountry:"الدولة", reportAmount:"المبلغ", reportAgent:"الوكيل", reportTime:"الوقت", noReports:"لا توجد تقارير بعد.", noNote:"بلا ملاحظات", allCountries:"تصفية الدولة: الكل", clearAll:"عرض الكل", estimatedUsd:"التقدير الدولاري" },
  en: {...baseFa, dir:"ltr", heroBadge:"Multilingual support platform", title:"Public Donations for the Islamic Revolution of Iran", subtitle:"Choose currency, amount, and receiving agent, then optionally submit your payment report.", feature1Title:"International reach", feature1Text:"Support for 9 languages and global audiences", feature2Title:"Real payment data", feature2Text:"Real details for two independent agents", feature3Title:"Live reports", feature3Text:"Latest 20 reports and country distribution from D1", heroStat1:"Active languages", heroStat2:"Active agents", heroStat3:"Saved reports", heroDonateBtn:"Start support flow", heroReportsBtn:"View reports", heroSideKicker:"Why do small donations matter?", heroSideTitle:"The collective impact of small payments is huge", heroSideText:"1,000 Iraqi dinars alone is a small amount, but repeated across many supporters it becomes a meaningful and visible total.", microPill:"Small support, big effect", microExample:"1,000 IQD × 1,000 people = 1,000,000 IQD", microExampleNote:"In aggregate statistics, amounts are shown with an estimated USD value so currency differences do not create misleading impressions.", trust1Title:"Public and multilingual", trust1Text:"Suitable for regional and international audiences", trust2Title:"Two independent receiving channels", trust2Text:"Contact, ZainCash, MasterCard and QR for each agent", trust3Title:"Transparent reporting", trust3Text:"Reports are saved while totals account for approximate cross-currency value", amountTitle:"Choose amount and currency", amountSubtitle:"Both agents accept all currencies.", customAmountLabel:"Custom amount", amountNotice:"Large amounts are better confirmed before final submission.", conversionTitle:"Smart aggregate display", conversionText:"To avoid misleading comparisons between currencies, summary statistics and the heatmap are calculated with an estimated USD basis, while each original report keeps its native currency amount.", agentTitle:"Choose receiving agent", agentSubtitle:"Each agent has independent payment details.", agent1Badge:"Agent 1", agent2Badge:"Agent 2", paymentTitle:"Payment information", paymentSubtitle:"The details below change based on the selected agent.", selectedCurrencyLabel:"Selected currency", selectedAmountLabel:"Selected amount", selectedAgentLabel:"Selected agent", contactLabel:"Contact", copy:"Copy", copied:"Copied", showReportBtn:"Report payment", callAgentBtn:"Call agent", paymentHelper:"After payment, click “Report payment” to submit your report.", step1Title:"Choose currency and amount", step1Text:"Quick packages or a custom amount", step2Title:"Choose agent", step2Text:"Each agent has an independent payment route", step3Title:"Submit report", step3Text:"For public transparency and reporting", reportTitle:"Submit payment report", reportSubtitle:"This form is stored directly in the D1 database.", payerContactLabel:"Phone / messenger", payerContactPlaceholder:"e.g. 0770...", countryLabel:"Country", reportDisplayNameLabel:"Recorded name", reportDisplayNameHint:"Entering a name is optional; it may stay empty or use a pseudonym.", reportDisplayPlaceholder:"Mohammad Ali Mohsen - On behalf of: Martyr Grand Ayatollah Imam Khamenei", noteLabel:"Notes", notePlaceholder:"Payment time, short note, extra details...", submitReportBtn:"Submit information", successTitle:"Report submitted successfully", successText:"Your information has been saved to the database and reflected in the reports section.", reportsTitle:"Reports", reportsSubtitle:"Latest 20 reports and country distribution from the D1 database", statReportsLabel:"Total reports", statCountriesLabel:"Participating countries", statAmountLabel:"Total amount (estimated USD)", countryReportTitle:"Country report", countryReportSubtitle:"Interactive heatmap: color intensity follows the estimated USD value of totals; click a country to filter its reports.", recentReportsTitle:"Latest 20 reports", recentReportsSubtitle:"Most recent reports stored in the database", tableCountry:"Country", tableCount:"Count", tableAmount:"Total amount", footerText:'Developed by <a href="http://t.me/mohsenzadeh2" target="_blank" rel="noopener noreferrer">@mohsenzadeh2</a> under the supervision of <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">Al-Mustafa International University - Iraq Office</a>', buildVersionLabel:"Deployment version:", reportCountry:"Country", reportAmount:"Amount", reportAgent:"Agent", reportTime:"Time", noReports:"No reports yet.", noNote:"No note", allCountries:"Country filter: All", clearAll:"Show all", estimatedUsd:"Estimated USD" }
};

const buildVersion = document.querySelector('meta[name="build-version"]')?.content || "";
$("buildVersion").textContent = buildVersion;

let currentLang = "fa";
let selectedCurrency = "USD";
let selectedAmount = currencyPresets.USD[0];
let selectedAgent = 1;
let activeCountry = null;
let reportCache = { recent: [], countries: [], stats: {} };
let countryAmountMap = new Map();
const reportDisplayInput = $("reportDisplayName");

function normalizeName(name){ return String(name || "").trim().toLowerCase(); }
function agentName(id){ return $(id===1 ? "agent1Name" : "agent2Name").textContent; }
function estimatedUsd(amount, currency){ return Number(amount || 0) * (FX_USD_ESTIMATE[currency] || 1); }
function localeFor(lang){ return lang === "fa" ? "fa-IR" : lang === "ar" ? "ar-IQ" : "en-US"; }
function formatAmount(amount, currency){ return `${new Intl.NumberFormat(localeFor(currentLang)).format(amount)} ${currency}`; }
function formatUsdEstimate(value){ return `${new Intl.NumberFormat(localeFor(currentLang), { maximumFractionDigits: 2 }).format(value)} USD`; }
function effectiveAmount(){ const custom = Number($("customAmount").value); return custom > 0 ? custom : selectedAmount; }
function setPlaceholderField(el, value){ if (el) el.placeholder = value || ""; }

function applyLanguage(lang){
  currentLang = i18n[lang] ? lang : "fa";
  const t = i18n[currentLang];
  document.documentElement.lang = currentLang;
  document.documentElement.dir = t.dir;
  document.body.dir = t.dir;
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === currentLang));
  document.querySelectorAll("[id]").forEach(el => { if (Object.prototype.hasOwnProperty.call(t, el.id)) el.innerHTML = t[el.id]; });
  setPlaceholderField($("payerContact"), t.payerContactPlaceholder);
  setPlaceholderField($("reportDisplayName"), t.reportDisplayPlaceholder);
  setPlaceholderField($("note"), t.notePlaceholder);
  renderAmounts();
  updatePaymentInfo();
  renderReports();
  updateMapColors();
}

function renderAmounts(){
  const grid = $("amountGrid");
  grid.innerHTML = "";
  for (const amount of currencyPresets[selectedCurrency]) {
    const btn = document.createElement("button");
    btn.className = "amount-btn" + (selectedAmount === amount ? " active" : "");
    btn.textContent = formatAmount(amount, selectedCurrency);
    btn.onclick = () => { selectedAmount = amount; $("customAmount").value = ""; renderAmounts(); updatePaymentInfo(); };
    grid.appendChild(btn);
  }
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
  $("qrHint").textContent = i18n[currentLang].qrHint || "";
}

document.querySelectorAll(".currency-btn").forEach(btn => btn.onclick = () => {
  selectedCurrency = btn.dataset.currency;
  selectedAmount = currencyPresets[selectedCurrency][0];
  $("customAmount").value = "";
  document.querySelectorAll(".currency-btn").forEach(b => b.classList.toggle("active", b === btn));
  renderAmounts();
  updatePaymentInfo();
  renderReports();
});

document.querySelectorAll(".agent-card").forEach(card => card.onclick = () => {
  selectedAgent = Number(card.dataset.agent);
  document.querySelectorAll(".agent-card").forEach(c => c.classList.toggle("active", c === card));
  updatePaymentInfo();
});

$("customAmount").addEventListener("input", updatePaymentInfo);

document.querySelectorAll(".copy-btn").forEach(btn => btn.onclick = async () => {
  const target = $(btn.dataset.copyTarget), original = i18n[currentLang].copy;
  try {
    await navigator.clipboard.writeText(target.textContent.trim());
    btn.textContent = i18n[currentLang].copied;
    setTimeout(() => btn.textContent = original, 1200);
  } catch {
    alert(target.textContent.trim());
  }
});

$("heroDonateBtn").onclick = () => $("amountSection").scrollIntoView({behavior:"smooth", block:"start"});
$("heroReportsBtn").onclick = () => $("reportsSection").scrollIntoView({behavior:"smooth", block:"start"});
$("showReportBtn").onclick = () => {
  $("reportSection").classList.remove("hidden");
  $("pageLoadedAt").value = String(Date.now());
  $("reportSection").scrollIntoView({behavior:"smooth", block:"start"});
};
$("callAgentBtn").onclick = () => {
  const phone = agents[selectedAgent].contact.replace(/\s+/g, "");
  window.location.href = `tel:${phone}`;
};
$("clearCountryFilter").onclick = () => {
  activeCountry = null;
  $("activeCountryLabel").textContent = i18n[currentLang].allCountries;
  renderReports();
  updateMapColors();
};

function renderCountryTable(rows){
  const tbody = $("countryTableBody");
  tbody.innerHTML = "";
  rows.forEach(row => {
    const tr = document.createElement("tr");
    const amountLabel = row.currency_mix_label ? `${formatUsdEstimate(Number(row.amount_usd_estimate || 0))}` : formatAmount(Number(row.amount || 0), selectedCurrency);
    tr.innerHTML = `<td>${escapeHtml(row.country)}</td><td>${row.count}</td><td>${amountLabel}</td>`;
    tbody.appendChild(tr);
  });
}

function getFilteredRecent(){
  const recent = reportCache.recent || [];
  return activeCountry ? recent.filter(r => r.country === activeCountry) : recent;
}

function renderRecent(items){
  const holder = $("recentList");
  holder.innerHTML = "";
  if (!items.length) {
    holder.innerHTML = `<div class="report-item"><div class="report-note">${i18n[currentLang].noReports}</div></div>`;
    return;
  }
  items.forEach(item => {
    const node = document.createElement("article");
    node.className = "report-item";
    const usdHint = item.amount_usd_estimate ? `<span class="report-tag">${i18n[currentLang].estimatedUsd}: ${formatUsdEstimate(Number(item.amount_usd_estimate || 0))}</span>` : "";
    node.innerHTML = `
      <div class="report-item-top">
        <div><div class="report-name">${escapeHtml(item.display_name || "-")}</div><div class="report-meta">${i18n[currentLang].reportCountry}: ${escapeHtml(item.country || "-")}</div></div>
        <div class="report-meta">${i18n[currentLang].reportTime}: ${escapeHtml(item.created_at || "-")}</div>
      </div>
      <div class="report-tags">
        <span class="report-tag">${i18n[currentLang].reportAmount}: ${formatAmount(Number(item.amount || 0), item.currency || selectedCurrency)}</span>
        ${usdHint}
        <span class="report-tag">${i18n[currentLang].reportAgent}: ${agentName(Number(item.agent_id || 1))}</span>
      </div>
      <div class="report-note">${escapeHtml(item.note || i18n[currentLang].noNote)}</div>`;
    holder.appendChild(node);
  });
}

function renderStats(stats){
  $("statReports").textContent = stats.total_reports ?? 0;
  $("statCountries").textContent = stats.countries_count ?? 0;
  $("statAmount").textContent = formatUsdEstimate(Number(stats.total_amount_usd_estimate || 0));
  $("heroReportsCount").textContent = stats.total_reports ?? 0;
}

function buildCountryAmountMap(rows){
  countryAmountMap = new Map();
  rows.forEach(row => {
    const aliases = countryAliases[row.country] || [row.country];
    aliases.forEach(a => countryAmountMap.set(normalizeName(a), { country: row.country, amount: Number(row.amount_usd_estimate || 0), count: Number(row.count || 0) }));
  });
}

async function initWorldMap(){
  try {
    const res = await fetch("/world-map.svg");
    const text = await res.text();
    $("worldMapContainer").innerHTML = text;
    bindMapEvents();
    updateMapColors();
  } catch (e) {
    console.error("map load failed", e);
    $("worldMapContainer").innerHTML = '<div class="report-note">Map failed to load.</div>';
  }
}

function getMapItemByFeatureName(featureName){
  return countryAmountMap.get(normalizeName(featureName));
}

function updateMapColors(){
  const svg = document.querySelector("#worldMapContainer svg");
  if (!svg) return;
  const values = [...new Set([...countryAmountMap.values()].map(v => v.amount))];
  const max = values.length ? Math.max(...values) : 0;
  function lerp(a,b,t){ return Math.round(a + (b-a)*t); }
  function colorFor(value){
    if (!max) return "#e7edf7";
    const t = Math.max(0, Math.min(1, value / max));
    const r = lerp(232, 200, t), g = lerp(238, 164, t), b = lerp(247, 93, t);
    return `rgb(${r},${g},${b})`;
  }
  svg.querySelectorAll(".map-country").forEach(el => {
    const item = getMapItemByFeatureName(el.dataset.name || "");
    el.setAttribute("fill", item ? colorFor(item.amount) : "#edf2fa");
    if (activeCountry && item?.country === activeCountry) el.classList.add("active-country");
    else el.classList.remove("active-country");
  });
}

function bindMapEvents(){
  const wrap = $("worldMapContainer");
  const tooltip = $("mapTooltip");
  const svg = wrap.querySelector("svg");
  if (!svg) return;
  svg.querySelectorAll(".map-country").forEach(el => {
    el.addEventListener("mousemove", (event) => {
      const item = getMapItemByFeatureName(el.dataset.name || "");
      const cname = item?.country || (el.dataset.name || "");
      const count = item?.count || 0;
      const amount = item?.amount || 0;
      const rect = wrap.getBoundingClientRect();
      tooltip.classList.remove("hidden");
      tooltip.style.left = `${event.clientX - rect.left + 18}px`;
      tooltip.style.top = `${event.clientY - rect.top + 18}px`;
      tooltip.innerHTML = `<strong>${escapeHtml(cname)}</strong><br>${i18n[currentLang].tableCount}: ${count}<br>${i18n[currentLang].estimatedUsd}: ${formatUsdEstimate(amount)}`;
    });
    el.addEventListener("mouseleave", () => tooltip.classList.add("hidden"));
    el.addEventListener("click", () => {
      const item = getMapItemByFeatureName(el.dataset.name || "");
      activeCountry = item?.country || null;
      $("activeCountryLabel").textContent = activeCountry ? `${i18n[currentLang].reportCountry}: ${activeCountry}` : i18n[currentLang].allCountries;
      renderReports();
      updateMapColors();
    });
  });
}

function renderReports(){
  renderCountryTable(reportCache.countries || []);
  renderRecent(getFilteredRecent());
  renderStats(reportCache.stats || { total_reports: 0, total_amount_usd_estimate: 0, countries_count: 0 });
  buildCountryAmountMap(reportCache.countries || []);
  updateMapColors();
}

async function loadReports(){
  try {
    const [recentRes, countryRes, statsRes] = await Promise.all([fetch("/api/reports?limit=20"), fetch("/api/countries"), fetch("/api/stats")]);
    if (!recentRes.ok || !countryRes.ok || !statsRes.ok) throw new Error("api");
    reportCache.recent = await recentRes.json();
    reportCache.countries = await countryRes.json();
    reportCache.stats = await statsRes.json();
  } catch (e) {
    console.error(e);
  }
  renderReports();
  updateMapColors();
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
    build_version: buildVersion
  };
  const res = await fetch("/api/report", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
  if (!res.ok) {
    const text = await res.text();
    alert(text || "Submission failed");
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
  $("successBox").scrollIntoView({ behavior:"smooth", block:"nearest" });
});

function escapeHtml(value){ return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"); }

applyLanguage("fa");
updatePaymentInfo();
$("pageLoadedAt").value = String(Date.now());
loadReports();
initWorldMap();
document.querySelectorAll(".lang-btn").forEach(btn => btn.addEventListener("click", () => applyLanguage(btn.dataset.lang)));
