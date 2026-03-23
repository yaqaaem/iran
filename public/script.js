
const $ = (id) => document.getElementById(id);

const currencyPresets = {
  USD: [5, 10, 20, 50, 100, 250],
  IQD: [10000, 25000, 50000, 100000, 250000, 500000],
  EUR: [5, 10, 20, 50, 100, 200]
};

const minAmountByCurrency = { USD: 5, IQD: 10000, EUR: 5 };

const FX_USD_ESTIMATE = { USD: 1, EUR: 1.09, IQD: 0.00076 };

const agents = {
  1: { contact: "07702952583", zain: "07702952583", master: "7130833309", qr: "./qr/agent1-qr.png" },
  2: { contact: "07701234567", zain: "07701234567", master: "5266123412", qr: "./qr/agent2-qr.png" }
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
  heroDonateBtn:"شروع ثبت حمایت", heroReportsBtn:"مشاهده گزارشات", heroSideKicker:"چرا مبالغ خرد مهم‌اند؟", heroSideTitle:"اثر جمعی پرداخت‌های کوچک، بسیار بزرگ است", heroSideText:"ده هزار دینار عراق به‌تنهایی مبلغ بزرگی نیست، اما وقتی همین مشارکت کوچک بارها تکرار شود، جمع کل می‌تواند بسیار معنادار، واقعی و اثرگذار شود.", microPill:"مشارکت خرد، اثر بزرگ", microExample:"۱۰٬۰۰۰ دینار × ۱۰۰۰ نفر = ۱۰٬۰۰۰٬۰۰۰ دینار", microExampleNote:"در آمار تجمیعی، مبالغ با برآورد دلاری نمایش داده می‌شوند تا تفاوت ارزها باعث خطای برداشت نشود.", institutionKicker:"بستر رسمی و چندزبانه", institutionTitle:"سامانه پشتیبانی و ثبت گزارش‌های مردمی", institutionSubtitle:"طراحی‌شده با زبان بصری رسمی، اعتمادساز و مناسب برای کمپین‌های عمومی و بین‌المللی", institutionChipLanguages:"9 زبان فعال", institutionChipAgents:"2 وکیل مستقل",
  trust1Title:"چندزبانه و عمومی", trust1Text:"مناسب برای مشارکت مخاطبان منطقه‌ای و بین‌المللی", trust2Title:"دو مسیر دریافت مستقل", trust2Text:"تماس، زین‌کاش، مسترکارت و QR برای هر وکیل", trust3Title:"گزارش‌گیری شفاف", trust3Text:"ثبت گزارش‌ها و نمایش تجمیعی با لحاظ ارزش تقریبی ارزی",
  amountTitle:"انتخاب مبلغ و ارز", amountSubtitle:"هر دو وکیل همه ارزها را می‌پذیرند.", customAmountLabel:"مبلغ دلخواه", amountNotice:"برای مبالغ بالا بهتر است پیش از ثبت نهایی هماهنگی انجام شود.", conversionTitle:"نمایش تجمیعی هوشمند", conversionText:"برای جلوگیری از خطای برداشت میان ارزها، آمار کل و نقشه بر اساس برآورد دلاری محاسبه می‌شوند؛ اما مبلغ اصلی هر گزارش با ارز خودش حفظ می‌شود.",
  agentTitle:"انتخاب وکیل دریافت‌کننده", agentSubtitle:"اطلاعات پرداخت هر وکیل مستقل است.", agent1Badge:"وکیل ۱", agent2Badge:"وکیل ۲",
  paymentTitle:"اطلاعات پرداخت", paymentSubtitle:"اطلاعات زیر بر اساس وکیل انتخاب‌شده نمایش داده می‌شود.", selectedCurrencyLabel:"ارز انتخابی", selectedAmountLabel:"مبلغ انتخابی", selectedAgentLabel:"وکیل انتخابی", contactLabel:"تماس", zainLabel:"زين كاش", masterLabel:"ماستر كارد", qrLabel:"QR", qrHint:"", copy:"کپی", copied:"کپی شد", showReportBtn:"اعلام پرداخت", callAgentBtn:"تماس با وکیل", paymentHelper:"پس از پرداخت، روی «اعلام پرداخت» بزنید تا گزارش شما ثبت شود.",
  step1Title:"انتخاب ارز و مبلغ", step1Text:"پکیج‌های سریع یا مبلغ دلخواه", step2Title:"انتخاب وکیل", step2Text:"هر وکیل مسیر پرداخت مستقل دارد", step3Title:"ثبت گزارش", step3Text:"برای شفافیت آماری و نمایش عمومی",
  currencyLabelUSD:"USD - دلار", currencyLabelIQD:"IQD - دینار عراق", currencyLabelEUR:"EUR - یورو", reportTitle:"ثبت گزارش پرداخت", reportSubtitle:"این فرم مستقیماً در پایگاه داده D1 ذخیره می‌شود.", payerContactLabel:"شماره تماس / پیام‌رسان", payerContactPlaceholder:"مثلاً 0770...", countryLabel:"کشور", reportDisplayNameLabel:"نام ثبت‌شونده", reportDisplayNameHint:"نوشتن نام الزامی نیست؛ می‌تواند خالی بماند یا با نام مستعار تکمیل شود.", reportDisplayPlaceholder:"محمد علی محسن - به نیابت از : شهید آیت الله العظمی امام خامنه ای", noteLabel:"توضیحات", notePlaceholder:"زمان پرداخت، توضیح کوتاه، توضیحات تکمیلی...", submitReportBtn:"ثبت اطلاعات", successTitle:"گزارش با موفقیت ثبت شد", successText:"اطلاعات شما در پایگاه داده ذخیره شد و در بخش گزارشات نیز بازتاب پیدا می‌کند.",
  reportsTitle:"گزارشات", reportsSubtitle:"۲۰ گزارش آخر و پراکندگی کشوری از پایگاه داده D1", statReportsLabel:"کل گزارشات", statCountriesLabel:"کشورهای مشارکت‌کننده", statAmountLabel:"مجموع مبالغ (برآورد دلاری)", countryReportTitle:"گزارش کشوری", countryReportSubtitle:"نقشه حرارتی تعاملی: شدت رنگ بر اساس برآورد دلاری مجموع مبالغ، کلیک روی کشور برای دیدن گزارش‌های همان کشور.", recentReportsTitle:"۲۰ گزارش آخر", recentReportsSubtitle:"آخرین گزارش‌های ثبت‌شده در پایگاه داده", tableCountry:"کشور", tableCount:"تعداد", tableAmount:"جمع مبلغ", footerText:'توسعه داده شده توسط <a href="http://t.me/mohsenzadeh2" target="_blank" rel="noopener noreferrer">@mohsenzadeh2</a> تحت اشراف <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">جامعة المصطفی العالمیة - نمایندگی عراق</a>', buildVersionLabel:"نسخه استقرار:", reportCountry:"کشور", reportAmount:"مبلغ", reportAgent:"وکیل", reportTime:"زمان", noReports:"هنوز گزارشی ثبت نشده است.", noNote:"بدون توضیح", allCountries:"فیلتر کشور: همه", clearAll:"نمایش همه", estimatedUsd:"برآورد دلاری"
};

const baseEn = {
  dir:"ltr", heroBadge:"Multilingual support platform", title:"Public Donations for the Islamic Revolution of Iran", subtitle:"Choose currency, amount, and receiving agent, then optionally submit your payment report.",
  feature1Title:"International reach", feature1Text:"Support for 9 languages and global audiences", feature2Title:"Real payment data", feature2Text:"Real details for two independent agents", feature3Title:"Live reports", feature3Text:"Latest 20 reports and country distribution from D1",
  heroStat1:"Active languages", heroStat2:"Active agents", heroStat3:"Saved reports",
  heroDonateBtn:"Start support flow", heroReportsBtn:"View reports", heroSideKicker:"Why do small donations matter?", heroSideTitle:"The collective impact of small payments is huge", heroSideText:"10,000 Iraqi dinars alone is not a large amount, but repeated across many supporters it becomes a meaningful and visible total.", microPill:"Small support, big effect", microExample:"10,000 IQD × 1,000 people = 10,000,000 IQD", microExampleNote:"In aggregate statistics, amounts are shown with an estimated USD value so currency differences do not create misleading impressions.", institutionKicker:"Official multilingual platform", institutionTitle:"Public support and reporting system", institutionSubtitle:"Designed with a formal, trust-building visual language suitable for public and international campaigns", institutionChipLanguages:"9 active languages", institutionChipAgents:"2 independent agents",
  trust1Title:"Public and multilingual", trust1Text:"Suitable for regional and international audiences", trust2Title:"Two independent receiving channels", trust2Text:"Contact, ZainCash, MasterCard and QR for each agent", trust3Title:"Transparent reporting", trust3Text:"Reports are saved while totals account for approximate cross-currency value",
  amountTitle:"Choose amount and currency", amountSubtitle:"Both agents accept all currencies.", customAmountLabel:"Custom amount", amountNotice:"Large amounts are better confirmed before final submission.", conversionTitle:"Smart aggregate display", conversionText:"To avoid misleading comparisons between currencies, summary statistics and the heatmap are calculated with an estimated USD basis, while each original report keeps its native currency amount.",
  agentTitle:"Choose receiving agent", agentSubtitle:"Each agent has independent payment details.", agent1Badge:"Agent 1", agent2Badge:"Agent 2", agent1Desc:"Contact, ZainCash and MasterCard", agent2Desc:"Direct contact, ZainCash and MasterCard",
  paymentTitle:"Payment information", paymentSubtitle:"The details below change based on the selected agent.", selectedCurrencyLabel:"Selected currency", selectedAmountLabel:"Selected amount", selectedAgentLabel:"Selected agent", contactLabel:"Contact", zainLabel:"ZainCash", masterLabel:"MasterCard", qrLabel:"QR", qrHint:"", copy:"Copy", copied:"Copied", showReportBtn:"Report payment", callAgentBtn:"Call agent", paymentHelper:"After payment, click “Report payment” to submit your report.",
  step1Title:"Choose currency and amount", step1Text:"Quick packages or a custom amount", step2Title:"Choose agent", step2Text:"Each agent has an independent payment route", step3Title:"Submit report", step3Text:"For public transparency and reporting",
  currencyLabelUSD:"USD - Dollar", currencyLabelIQD:"IQD - Iraqi Dinar", currencyLabelEUR:"EUR - Euro", reportTitle:"Submit payment report", reportSubtitle:"This form is stored directly in the D1 database.", payerContactLabel:"Phone / messenger", payerContactPlaceholder:"e.g. 0770...", countryLabel:"Country", reportDisplayNameLabel:"Recorded name", reportDisplayNameHint:"Entering a name is optional; it may stay empty or use a pseudonym.", reportDisplayPlaceholder:"Mohammad Ali Mohsen - On behalf of: Martyr Grand Ayatollah Imam Khamenei", noteLabel:"Notes", notePlaceholder:"Payment time, short note, extra details...", submitReportBtn:"Submit information", successTitle:"Report submitted successfully", successText:"Your information has been saved to the database and reflected in the reports section.",
  reportsTitle:"Reports", reportsSubtitle:"Latest 20 reports and country distribution from the D1 database", statReportsLabel:"Total reports", statCountriesLabel:"Participating countries", statAmountLabel:"Total amount (estimated USD)", countryReportTitle:"Country report", countryReportSubtitle:"Interactive heatmap: color intensity follows the estimated USD value of totals; click a country to filter its reports.", recentReportsTitle:"Latest 20 reports", recentReportsSubtitle:"Most recent reports stored in the database", tableCountry:"Country", tableCount:"Count", tableAmount:"Total amount", footerText:'Developed by <a href="http://t.me/mohsenzadeh2" target="_blank" rel="noopener noreferrer">@mohsenzadeh2</a> under the supervision of <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">Al-Mustafa International University - Iraq Office</a>', buildVersionLabel:"Deployment version:", reportCountry:"Country", reportAmount:"Amount", reportAgent:"Agent", reportTime:"Time", noReports:"No reports yet.", noNote:"No note", allCountries:"Country filter: All", clearAll:"Show all", estimatedUsd:"Estimated USD"
};

const i18n = {
  fa: baseFa,
  ar: {...baseFa, dir:"rtl", institutionKicker:"منصة رسمية ومتعددة اللغات", institutionTitle:"منظومة دعم عامة وتسجيل للتقارير", institutionSubtitle:"مصممة بلغة بصرية رسمية وموثوقة ومناسبة للحملات العامة والدولية", institutionChipLanguages:"9 لغات نشطة", institutionChipAgents:"2 وكيلان مستقلان", heroBadge:"منصة دعم متعددة اللغات", title:"جمع التبرعات الشعبية للثورة الإسلامية في إيران", subtitle:"اختر العملة والمبلغ والوكيل المستلم، ثم يمكنك تسجيل تقرير الدفع إذا رغبت.", feature1Title:"تغطية دولية", feature1Text:"دعم 9 لغات لمخاطبين من أنحاء العالم", feature2Title:"دفع حقيقي", feature2Text:"عرض معلومات حقيقية لوكيلين مستقلين", feature3Title:"تقارير مباشرة", feature3Text:"آخر 20 تقريراً والتوزع الجغرافي من D1", heroStat1:"اللغات النشطة", heroStat2:"الوكلاء النشطون", heroStat3:"التقارير المسجلة", heroDonateBtn:"ابدأ تسجيل الدعم", heroReportsBtn:"عرض التقارير", heroSideKicker:"لماذا المساهمات الصغيرة مهمة؟", heroSideTitle:"الأثر الجماعي للمبالغ الصغيرة كبير جداً", heroSideText:"عشرة آلاف دينار عراقي وحدها ليست مبلغاً كبيراً، لكن تكرار هذه المشاركة الصغيرة مرات كثيرة يصنع حصيلة ذات معنى وأثر واضح.", microPill:"مساهمة صغيرة، أثر كبير", microExample:"10,000 دينار × 1000 شخص = 10,000,000 دينار", microExampleNote:"في الإحصاءات المجمّعة، تُعرض المبالغ وفق تقدير دولاري حتى لا تسبّب فروق العملات انطباعاً مضللاً.", trust1Title:"منصة عامة ومتعددة اللغات", trust1Text:"ملائمة لمشاركة جمهور إقليمي ودولي", trust2Title:"مساران مستقلان للاستلام", trust2Text:"اتصال، زين كاش، ماستر كارد وQR لكل وكيل", trust3Title:"شفافية في التقارير", trust3Text:"تسجيل التقارير مع عرض تجميعي يراعي القيمة التقريبية للعملات", amountTitle:"اختيار المبلغ والعملة", amountSubtitle:"كلا الوكيلين يقبلان جميع العملات.", customAmountLabel:"مبلغ مخصص", amountNotice:"بالنسبة للمبالغ الكبيرة يُفضّل التنسيق قبل التسجيل النهائي.", conversionTitle:"عرض تجميعي ذكي", conversionText:"لتجنّب سوء الفهم بين العملات المختلفة، يتم احتساب الإحصاءات العامة والخريطة وفق تقدير دولاري، مع حفظ المبلغ الأصلي لكل تقرير بعملته نفسها.", agentTitle:"اختيار الوكيل المستلم", agentSubtitle:"معلومات الدفع لكل وكيل مستقلة.", agent1Badge:"الوكيل 1", agent2Badge:"الوكيل 2", agent1Desc:"للتواصل، زين كاش وماستر كارد", agent2Desc:"اتصال مباشر، زين كاش وماستر كارد", paymentTitle:"معلومات الدفع", paymentSubtitle:"تُعرض المعلومات التالية بحسب الوكيل المختار.", selectedCurrencyLabel:"العملة المختارة", selectedAmountLabel:"المبلغ المختار", selectedAgentLabel:"الوكيل المختار", contactLabel:"الاتصال", copy:"نسخ", copied:"تم النسخ", showReportBtn:"إبلاغ بالدفع", callAgentBtn:"الاتصال بالوكيل", paymentHelper:"بعد الدفع، اضغط على «إبلاغ بالدفع» لتسجيل تقريرك.", step1Title:"اختيار العملة والمبلغ", step1Text:"باقات سريعة أو مبلغ مخصص", step2Title:"اختيار الوكيل", step2Text:"لكل وكيل مسار دفع مستقل", step3Title:"تسجيل التقرير", step3Text:"للشفافية الإحصائية والعرض العام", currencyLabelUSD:"USD - دولار", currencyLabelIQD:"IQD - دينار عراقي", currencyLabelEUR:"EUR - يورو", reportTitle:"تسجيل تقرير الدفع", reportSubtitle:"هذا النموذج يُحفظ مباشرة في قاعدة بيانات D1.", payerContactLabel:"رقم الاتصال / المراسلة", payerContactPlaceholder:"مثلاً 0770...", countryLabel:"الدولة", reportDisplayNameLabel:"الاسم المسجل", reportDisplayNameHint:"كتابة الاسم ليست إلزامية؛ ويمكن تركه فارغاً أو استخدام اسم مستعار.", reportDisplayPlaceholder:"محمد علي محسن - نيابةً عن : الشهيد آية الله العظمى الإمام الخامنئي", noteLabel:"ملاحظات", notePlaceholder:"وقت الدفع، ملاحظة قصيرة، تفاصيل إضافية...", submitReportBtn:"تسجيل المعلومات", successTitle:"تم تسجيل التقرير بنجاح", successText:"تم حفظ معلوماتك في قاعدة البيانات وستنعكس في قسم التقارير.", reportsTitle:"التقارير", reportsSubtitle:"آخر 20 تقريراً والتوزع الجغرافي من قاعدة بيانات D1", statReportsLabel:"إجمالي التقارير", statCountriesLabel:"الدول المشاركة", statAmountLabel:"مجموع المبالغ (تقدير دولاري)", countryReportTitle:"التقرير حسب الدولة", countryReportSubtitle:"خريطة حرارية تفاعلية: شدة اللون بحسب التقدير الدولاري لمجموع المبالغ، والنقر على الدولة يعرض تقاريرها.", recentReportsTitle:"آخر 20 تقريراً", recentReportsSubtitle:"أحدث التقارير المسجلة في قاعدة البيانات", tableCountry:"الدولة", tableCount:"العدد", tableAmount:"مجموع المبلغ", footerText:'تم التطوير بواسطة <a href="http://t.me/mohsenzadeh2" target="_blank" rel="noopener noreferrer">@mohsenzadeh2</a> تحت اشراف <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">جامعة المصطفى العالمية - ممثلية العراق</a>', buildVersionLabel:"نسخة النشر:", reportCountry:"الدولة", reportAmount:"المبلغ", reportAgent:"الوكيل", reportTime:"الوقت", noReports:"لا توجد تقارير بعد.", noNote:"بلا ملاحظات", allCountries:"تصفية الدولة: الكل", clearAll:"عرض الكل", estimatedUsd:"التقدير الدولاري" },
  en: baseEn,
  ur: {...baseEn, dir:"rtl", heroBadge:"کثیر لسانی امدادی پلیٹ فارم", title:"ایران کے اسلامی انقلاب کے لیے عوامی عطیات", subtitle:"کرنسی، رقم اور وصول کنندہ نمائندہ منتخب کریں، پھر چاہیں تو اپنی ادائیگی کی رپورٹ درج کریں.", feature1Title:"بین الاقوامی رسائی", feature1Text:"9 زبانوں اور عالمی سامعین کی معاونت", feature2Title:"حقیقی ادائیگی کی معلومات", feature2Text:"دو آزاد نمائندوں کی حقیقی تفصیلات", feature3Title:"براہِ راست رپورٹس", feature3Text:"D1 سے آخری 20 رپورٹس اور ممالک کی تقسیم", heroStat1:"فعال زبانیں", heroStat2:"فعال نمائندے", heroStat3:"محفوظ رپورٹس", heroDonateBtn:"مدد کا عمل شروع کریں", heroReportsBtn:"رپورٹس دیکھیں", heroSideKicker:"چھوٹی رقوم کیوں اہم ہیں؟", heroSideTitle:"چھوٹی ادائیگیوں کا اجتماعی اثر بہت بڑا ہوتا ہے", heroSideText:"صرف دس ہزار عراقی دینار کوئی بڑی رقم نہیں، لیکن جب یہی چھوٹی شراکت بہت سے افراد بار بار کریں تو مجموعی رقم بامعنی، حقیقی اور مؤثر بن جاتی ہے.", microPill:"چھوٹی شراکت، بڑا اثر", microExample:"10,000 عراقی دینار × 1,000 افراد = 10,000,000 عراقی دینار", microExampleNote:"مجموعی اعدادوشمار میں رقوم کو تخمینی امریکی ڈالر کی بنیاد پر دکھایا جاتا ہے تاکہ مختلف کرنسیوں کا فرق گمراہ کن تاثر پیدا نہ کرے.", institutionKicker:"سرکاری اور کثیر لسانی پلیٹ فارم", institutionTitle:"عوامی حمایت اور رپورٹ رجسٹریشن کا نظام", institutionSubtitle:"ایک رسمی، قابلِ اعتماد بصری شناخت کے ساتھ، جو عوامی اور بین الاقوامی مہمات کے لیے موزوں ہو", institutionChipLanguages:"9 فعال زبانیں", institutionChipAgents:"2 آزاد نمائندے", trust1Title:"عوامی اور کثیر لسانی", trust1Text:"علاقائی اور بین الاقوامی ناظرین کے لیے موزوں", trust2Title:"وصولی کے دو آزاد راستے", trust2Text:"ہر نمائندے کے لیے رابطہ، زین کیش، ماسٹر کارڈ اور QR", trust3Title:"شفاف رپورٹنگ", trust3Text:"رپورٹس محفوظ ہوتی ہیں اور مجموعی اعداد تقریباً ہم قدر زرِ مبادلہ کو ملحوظ رکھتے ہیں", amountTitle:"رقم اور کرنسی منتخب کریں", amountSubtitle:"دونوں نمائندے تمام کرنسیاں قبول کرتے ہیں.", customAmountLabel:"دلخواه رقم", amountNotice:"بڑی رقوم کے لیے آخری اندراج سے پہلے رابطہ بہتر ہے.", conversionTitle:"ذہین مجموعی نمائش", conversionText:"مختلف کرنسیوں کے درمیان غلط تاثر سے بچنے کے لیے مجموعی اعدادوشمار اور نقشہ تخمینی امریکی ڈالر کی بنیاد پر شمار کیے جاتے ہیں، جبکہ ہر رپورٹ اپنی اصل کرنسی میں محفوظ رہتی ہے.", agentTitle:"وصول کنندہ نمائندہ منتخب کریں", agentSubtitle:"ہر نمائندے کی ادائیگی کی معلومات الگ ہیں.", agent1Badge:"نمائندہ 1", agent2Badge:"نمائندہ 2", agent1Desc:"رابطہ، زین کیش اور ماسٹر کارڈ", agent2Desc:"براہِ راست رابطہ، زین کیش اور ماسٹر کارڈ", paymentTitle:"ادائیگی کی معلومات", paymentSubtitle:"نیچے دی گئی معلومات منتخب نمائندے کے مطابق بدلتی ہیں.", selectedCurrencyLabel:"منتخب کرنسی", selectedAmountLabel:"منتخب رقم", selectedAgentLabel:"منتخب نمائندہ", contactLabel:"رابطہ", zainLabel:"زین کیش", masterLabel:"ماسٹر کارڈ", copy:"کاپی", copied:"کاپی ہو گیا", showReportBtn:"ادائیگی رپورٹ کریں", callAgentBtn:"نمائندے کو کال کریں", paymentHelper:"ادائیگی کے بعد ‘Report payment’ پر کلک کر کے اپنی رپورٹ درج کریں.", step1Title:"کرنسی اور رقم منتخب کریں", step1Text:"فوری پیکیجز یا دلخواه رقم", step2Title:"نمائندہ منتخب کریں", step2Text:"ہر نمائندے کا ادائیگی راستہ الگ ہے", step3Title:"رپورٹ جمع کریں", step3Text:"عوامی شفافیت اور رپورٹنگ کے لیے", currencyLabelUSD:"USD - امریکی ڈالر", currencyLabelIQD:"IQD - عراقی دینار", currencyLabelEUR:"EUR - یورو", reportTitle:"ادائیگی کی رپورٹ جمع کریں", reportSubtitle:"یہ فارم براہِ راست D1 ڈیٹا بیس میں محفوظ ہوتا ہے.", payerContactLabel:"فون / میسنجر", payerContactPlaceholder:"مثلاً 0770...", countryLabel:"ملک", reportDisplayNameLabel:"درج شدہ نام", reportDisplayNameHint:"نام لکھنا لازمی نہیں؛ اسے خالی بھی چھوڑا جا سکتا ہے یا فرضی نام استعمال کیا جا سکتا ہے.", reportDisplayPlaceholder:"محمد علی محسن - بطور نیابت: شہید آیت اللہ العظمیٰ امام خامنہ ای", noteLabel:"نوٹس", notePlaceholder:"ادائیگی کا وقت، مختصر نوٹ، اضافی تفصیلات...", submitReportBtn:"معلومات جمع کریں", successTitle:"رپورٹ کامیابی سے جمع ہو گئی", successText:"آپ کی معلومات ڈیٹا بیس میں محفوظ ہو گئی ہیں اور رپورٹس کے حصے میں ظاہر ہوں گی.", reportsTitle:"رپورٹس", reportsSubtitle:"D1 ڈیٹا بیس سے آخری 20 رپورٹس اور ممالک کی تقسیم", statReportsLabel:"کل رپورٹس", statCountriesLabel:"شریک ممالک", statAmountLabel:"کل رقم (تخمینی USD)", countryReportTitle:"ملکی رپورٹ", countryReportSubtitle:"تعاملی ہیٹ میپ: رنگ کی شدت مجموعی رقم کی تخمینی امریکی ڈالر قدر کے مطابق ہے؛ کسی ملک پر کلک کریں تاکہ اسی ملک کی رپورٹس فلٹر ہوں.", recentReportsTitle:"آخری 20 رپورٹس", recentReportsSubtitle:"ڈیٹا بیس میں محفوظ تازہ ترین رپورٹس", tableCountry:"ملک", tableCount:"تعداد", tableAmount:"کل رقم", footerText:'ترقی دی گئی توسط <a href="http://t.me/mohsenzadeh2" target="_blank" rel="noopener noreferrer">@mohsenzadeh2</a> زیرِ اشراف <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">جامعة المصطفی العالمیة - عراق دفتر</a>', buildVersionLabel:"اشاعتی نسخہ:", reportCountry:"ملک", reportAmount:"رقم", reportAgent:"نمائندہ", reportTime:"وقت", noReports:"ابھی تک کوئی رپورٹ نہیں.", noNote:"کوئی نوٹ نہیں", allCountries:"ملک فلٹر: سب", clearAll:"سب دکھائیں", estimatedUsd:"تخمینی USD"},
  fr: {...baseEn, title:"Dons publics pour la Révolution islamique d'Iran", heroBadge:"Plateforme multilingue de soutien", subtitle:"Choisissez la devise, le montant et l’agent destinataire, puis enregistrez votre paiement si vous le souhaitez.", feature1Title:"Portée internationale", feature1Text:"Prise en charge de 9 langues pour un public mondial", feature2Title:"Données de paiement réelles", feature2Text:"Informations réelles pour deux agents indépendants", feature3Title:"Rapports en direct", feature3Text:"Les 20 derniers rapports et la répartition par pays depuis D1", heroStat1:"Langues actives", heroStat2:"Agents actifs", heroStat3:"Rapports enregistrés", heroDonateBtn:"Commencer le soutien", heroReportsBtn:"Voir les rapports", heroSideKicker:"Pourquoi les petits montants comptent-ils ?", heroSideTitle:"L'effet collectif des petites contributions est immense", heroSideText:"Dix mille dinars irakiens ne représentent pas, à eux seuls, une grande somme. Mais lorsque cette petite contribution est répétée par de nombreux soutiens, le total devient réellement significatif et visible.", microPill:"Petit soutien, grand effet", microExample:"10.000 IQD × 1.000 personnes = 10.000.000 IQD", microExampleNote:"Dans les statistiques agrégées, les montants sont affichés selon une estimation en dollars américains afin d'éviter toute lecture trompeuse entre devises.", institutionKicker:"Plateforme officielle et multilingue", institutionTitle:"Système public de soutien et d’enregistrement des rapports", institutionSubtitle:"Conçu avec un langage visuel officiel et rassurant, adapté aux campagnes publiques et internationales", institutionChipLanguages:"9 langues actives", institutionChipAgents:"2 agents indépendants", trust1Title:"Public et multilingue", trust1Text:"Adapté à un public régional et international", trust2Title:"Deux canaux de réception indépendants", trust2Text:"Contact, ZainCash, MasterCard et QR pour chaque agent", trust3Title:"Rapports transparents", trust3Text:"Les rapports sont enregistrés et les totaux tiennent compte d’une valeur monétaire approximative", amountTitle:"Choisir le montant et la devise", amountSubtitle:"Les deux agents acceptent toutes les devises.", customAmountLabel:"Montant personnalisé", amountNotice:"Pour les montants élevés, il est préférable de confirmer avant l’envoi final.", conversionTitle:"Affichage agrégé intelligent", conversionText:"Afin d’éviter les comparaisons trompeuses entre devises, les statistiques globales et la carte thermique sont calculées sur une base estimée en USD, tandis que chaque rapport conserve son montant dans sa devise d’origine.", agentTitle:"Choisir l’agent destinataire", agentSubtitle:"Chaque agent dispose de ses propres informations de paiement.", agent1Badge:"Agent 1", agent2Badge:"Agent 2", agent1Desc:"Contact, ZainCash et MasterCard", agent2Desc:"Contact direct, ZainCash et MasterCard", paymentTitle:"Informations de paiement", paymentSubtitle:"Les détails ci-dessous changent selon l’agent sélectionné.", selectedCurrencyLabel:"Devise sélectionnée", selectedAmountLabel:"Montant sélectionné", selectedAgentLabel:"Agent sélectionné", contactLabel:"Contact", zainLabel:"ZainCash", masterLabel:"MasterCard", copy:"Copier", copied:"Copié", showReportBtn:"Signaler le paiement", callAgentBtn:"Appeler l’agent", paymentHelper:"Après le paiement, cliquez sur « Signaler le paiement » pour envoyer votre rapport.", step1Title:"Choisir la devise et le montant", step1Text:"Montants rapides ou montant personnalisé", step2Title:"Choisir l’agent", step2Text:"Chaque agent dispose d’un canal de paiement indépendant", step3Title:"Envoyer le rapport", step3Text:"Pour la transparence publique et le suivi", currencyLabelUSD:"USD - Dollar", currencyLabelIQD:"IQD - Dinar irakien", currencyLabelEUR:"EUR - Euro", reportTitle:"Envoyer un rapport de paiement", reportSubtitle:"Ce formulaire est enregistré directement dans la base de données D1.", payerContactLabel:"Téléphone / messagerie", payerContactPlaceholder:"par ex. 0770...", countryLabel:"Pays", reportDisplayNameLabel:"Nom affiché", reportDisplayNameHint:"Le nom est facultatif ; il peut rester vide ou être remplacé par un pseudonyme.", reportDisplayPlaceholder:"Mohammad Ali Mohsen - Au nom de : Martyr Grand Ayatollah Imam Khamenei", noteLabel:"Notes", notePlaceholder:"Heure du paiement, note courte, détails supplémentaires...", submitReportBtn:"Envoyer les informations", successTitle:"Rapport envoyé avec succès", successText:"Vos informations ont été enregistrées dans la base de données et reflétées dans la section des rapports.", reportsTitle:"Rapports", reportsSubtitle:"Les 20 derniers rapports et la répartition par pays depuis la base D1", statReportsLabel:"Total des rapports", statCountriesLabel:"Pays participants", statAmountLabel:"Montant total (USD estimé)", countryReportTitle:"Rapport par pays", countryReportSubtitle:"Carte thermique interactive : l’intensité de la couleur suit la valeur totale estimée en USD ; cliquez sur un pays pour filtrer ses rapports.", recentReportsTitle:"Les 20 derniers rapports", recentReportsSubtitle:"Les rapports les plus récents enregistrés dans la base", tableCountry:"Pays", tableCount:"Nombre", tableAmount:"Montant total", footerText:'Développé par <a href="http://t.me/mohsenzadeh2" target="_blank" rel="noopener noreferrer">@mohsenzadeh2</a> sous la supervision de <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">l’Université internationale Al-Mustafa - Bureau d’Irak</a>', buildVersionLabel:"Version de déploiement :", reportCountry:"Pays", reportAmount:"Montant", reportAgent:"Agent", reportTime:"Heure", noReports:"Aucun rapport pour le moment.", noNote:"Sans note", allCountries:"Filtre pays : Tous", clearAll:"Tout afficher", estimatedUsd:"USD estimé"},
  de: {...baseEn, title:"Öffentliche Spenden für die Islamische Revolution im Iran", heroBadge:"Mehrsprachige Unterstützungsplattform", subtitle:"Wählen Sie Währung, Betrag und empfangenden Bevollmächtigten und senden Sie auf Wunsch anschließend Ihren Zahlungsbericht.", feature1Title:"Internationale Reichweite", feature1Text:"Unterstützung für 9 Sprachen und ein globales Publikum", feature2Title:"Reale Zahlungsdaten", feature2Text:"Reale Angaben für zwei unabhängige Bevollmächtigte", feature3Title:"Live-Berichte", feature3Text:"Die letzten 20 Berichte und die Länderverteilung aus D1", heroStat1:"Aktive Sprachen", heroStat2:"Aktive Bevollmächtigte", heroStat3:"Gespeicherte Berichte", heroDonateBtn:"Unterstützung starten", heroReportsBtn:"Berichte ansehen", heroSideKicker:"Warum sind kleine Beträge wichtig?", heroSideTitle:"Die gemeinsame Wirkung kleiner Zahlungen ist enorm", heroSideText:"10.000 irakische Dinar sind für sich genommen kein großer Betrag. Wenn sich diese kleine Unterstützung jedoch vielfach wiederholt, entsteht in der Summe ein sichtbar bedeutender Beitrag.", microPill:"Kleiner Beitrag, große Wirkung", microExample:"10.000 IQD × 1.000 Personen = 10.000.000 IQD", microExampleNote:"In den zusammengefassten Statistiken werden Beträge auf geschätzter USD-Basis angezeigt, damit Währungsunterschiede keinen irreführenden Eindruck erzeugen.", institutionKicker:"Offizielle mehrsprachige Plattform", institutionTitle:"System für öffentliche Unterstützung und Berichtsregistrierung", institutionSubtitle:"Mit einer offiziellen, vertrauensbildenden Bildsprache gestaltet – geeignet für öffentliche und internationale Kampagnen", institutionChipLanguages:"9 aktive Sprachen", institutionChipAgents:"2 unabhängige Bevollmächtigte", trust1Title:"Öffentlich und mehrsprachig", trust1Text:"Geeignet für regionale und internationale Zielgruppen", trust2Title:"Zwei unabhängige Empfangswege", trust2Text:"Kontakt, ZainCash, MasterCard und QR für jeden Bevollmächtigten", trust3Title:"Transparente Berichte", trust3Text:"Berichte werden gespeichert, während Summen einen ungefähren Währungswert berücksichtigen", amountTitle:"Betrag und Währung wählen", amountSubtitle:"Beide Bevollmächtigten akzeptieren alle Währungen.", customAmountLabel:"Eigener Betrag", amountNotice:"Bei größeren Beträgen ist eine Bestätigung vor der endgültigen Übermittlung sinnvoll.", conversionTitle:"Intelligente Gesamtdarstellung", conversionText:"Um irreführende Vergleiche zwischen Währungen zu vermeiden, werden Gesamtstatistik und Heatmap auf Basis eines geschätzten USD-Werts berechnet, während jeder Bericht seinen Originalbetrag in der jeweiligen Währung behält.", agentTitle:"Empfangenden Bevollmächtigten wählen", agentSubtitle:"Jeder Bevollmächtigte hat eigene Zahlungsdaten.", agent1Badge:"Bevollmächtigter 1", agent2Badge:"Bevollmächtigter 2", agent1Desc:"Kontakt, ZainCash und MasterCard", agent2Desc:"Direktkontakt, ZainCash und MasterCard", paymentTitle:"Zahlungsinformationen", paymentSubtitle:"Die folgenden Angaben ändern sich je nach ausgewähltem Bevollmächtigten.", selectedCurrencyLabel:"Gewählte Währung", selectedAmountLabel:"Gewählter Betrag", selectedAgentLabel:"Gewählter Bevollmächtigter", contactLabel:"Kontakt", zainLabel:"ZainCash", masterLabel:"MasterCard", copy:"Kopieren", copied:"Kopiert", showReportBtn:"Zahlung melden", callAgentBtn:"Bevollmächtigten anrufen", paymentHelper:"Klicken Sie nach der Zahlung auf „Zahlung melden“, um Ihren Bericht einzureichen.", step1Title:"Währung und Betrag wählen", step1Text:"Schnellpakete oder eigener Betrag", step2Title:"Bevollmächtigten wählen", step2Text:"Jeder Bevollmächtigte hat einen eigenen Zahlungsweg", step3Title:"Bericht absenden", step3Text:"Für öffentliche Transparenz und Berichterstattung", currencyLabelUSD:"USD - Dollar", currencyLabelIQD:"IQD - Irakischer Dinar", currencyLabelEUR:"EUR - Euro", reportTitle:"Zahlungsbericht senden", reportSubtitle:"Dieses Formular wird direkt in der D1-Datenbank gespeichert.", payerContactLabel:"Telefon / Messenger", payerContactPlaceholder:"z. B. 0770...", countryLabel:"Land", reportDisplayNameLabel:"Angezeigter Name", reportDisplayNameHint:"Die Angabe eines Namens ist optional; das Feld kann leer bleiben oder mit einem Pseudonym ausgefüllt werden.", reportDisplayPlaceholder:"Mohammad Ali Mohsen - Im Namen von: Märtyrer Großajatollah Imam Khamenei", noteLabel:"Hinweise", notePlaceholder:"Zahlungszeit, kurze Notiz, zusätzliche Details...", submitReportBtn:"Informationen senden", successTitle:"Bericht erfolgreich gesendet", successText:"Ihre Informationen wurden in der Datenbank gespeichert und im Berichtsbereich übernommen.", reportsTitle:"Berichte", reportsSubtitle:"Die letzten 20 Berichte und die Länderverteilung aus der D1-Datenbank", statReportsLabel:"Berichte gesamt", statCountriesLabel:"Teilnehmende Länder", statAmountLabel:"Gesamtbetrag (geschätzte USD)", countryReportTitle:"Länderbericht", countryReportSubtitle:"Interaktive Heatmap: Die Farbintensität richtet sich nach dem geschätzten Gesamtwert in USD; klicken Sie auf ein Land, um dessen Berichte zu filtern.", recentReportsTitle:"Die letzten 20 Berichte", recentReportsSubtitle:"Die zuletzt in der Datenbank gespeicherten Berichte", tableCountry:"Land", tableCount:"Anzahl", tableAmount:"Gesamtbetrag", footerText:'Entwickelt von <a href="http://t.me/mohsenzadeh2" target="_blank" rel="noopener noreferrer">@mohsenzadeh2</a> unter der Aufsicht der <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">Al-Mustafa International University – Irak-Büro</a>', buildVersionLabel:"Bereitstellungsversion:", reportCountry:"Land", reportAmount:"Betrag", reportAgent:"Bevollmächtigter", reportTime:"Zeit", noReports:"Noch keine Berichte.", noNote:"Keine Notiz", allCountries:"Länderfilter: Alle", clearAll:"Alle anzeigen", estimatedUsd:"Geschätzte USD"},
  es: {...baseEn, title:"Donaciones públicas para la Revolución Islámica de Irán", heroBadge:"Plataforma multilingüe de apoyo", subtitle:"Elige la moneda, el monto y el agente receptor; luego, si lo deseas, registra tu pago.", feature1Title:"Alcance internacional", feature1Text:"Compatibilidad con 9 idiomas y público global", feature2Title:"Datos reales de pago", feature2Text:"Información real de dos agentes independientes", feature3Title:"Reportes en vivo", feature3Text:"Los 20 reportes más recientes y la distribución por países desde D1", heroStat1:"Idiomas activos", heroStat2:"Agentes activos", heroStat3:"Reportes guardados", heroDonateBtn:"Iniciar apoyo", heroReportsBtn:"Ver reportes", heroSideKicker:"¿Por qué importan los aportes pequeños?", heroSideTitle:"El impacto colectivo de los pagos pequeños es enorme", heroSideText:"Diez mil dinares iraquíes por sí solos no parecen una gran cantidad, pero cuando esta pequeña contribución se repite entre muchos colaboradores, el total se vuelve significativo, real y visible.", microPill:"Aporte pequeño, gran efecto", microExample:"10.000 IQD × 1.000 personas = 10.000.000 IQD", microExampleNote:"En las estadísticas agregadas, los importes se muestran con una estimación en USD para que las diferencias entre monedas no generen una impresión engañosa.", institutionKicker:"Plataforma oficial y multilingüe", institutionTitle:"Sistema público de apoyo y registro de reportes", institutionSubtitle:"Diseñado con un lenguaje visual oficial y confiable, adecuado para campañas públicas e internacionales", institutionChipLanguages:"9 idiomas activos", institutionChipAgents:"2 agentes independientes", trust1Title:"Público y multilingüe", trust1Text:"Adecuado para audiencias regionales e internacionales", trust2Title:"Dos canales independientes de recepción", trust2Text:"Contacto, ZainCash, MasterCard y QR para cada agente", trust3Title:"Reportes transparentes", trust3Text:"Los reportes se guardan mientras los totales consideran un valor cambiario aproximado", amountTitle:"Elegir monto y moneda", amountSubtitle:"Ambos agentes aceptan todas las monedas.", customAmountLabel:"Monto personalizado", amountNotice:"Para montos grandes, es mejor confirmar antes del envío final.", conversionTitle:"Visualización agregada inteligente", conversionText:"Para evitar comparaciones engañosas entre monedas, las estadísticas generales y el mapa de calor se calculan con una base estimada en USD, mientras que cada reporte conserva su monto en la moneda original.", agentTitle:"Elegir agente receptor", agentSubtitle:"Cada agente tiene sus propios datos de pago.", agent1Badge:"Agente 1", agent2Badge:"Agente 2", agent1Desc:"Contacto, ZainCash y MasterCard", agent2Desc:"Contacto directo, ZainCash y MasterCard", paymentTitle:"Información de pago", paymentSubtitle:"Los detalles siguientes cambian según el agente seleccionado.", selectedCurrencyLabel:"Moneda seleccionada", selectedAmountLabel:"Monto seleccionado", selectedAgentLabel:"Agente seleccionado", contactLabel:"Contacto", zainLabel:"ZainCash", masterLabel:"MasterCard", copy:"Copiar", copied:"Copiado", showReportBtn:"Reportar pago", callAgentBtn:"Llamar al agente", paymentHelper:"Después del pago, haz clic en “Reportar pago” para enviar tu reporte.", step1Title:"Elegir moneda y monto", step1Text:"Paquetes rápidos o monto personalizado", step2Title:"Elegir agente", step2Text:"Cada agente tiene una vía de pago independiente", step3Title:"Enviar reporte", step3Text:"Para transparencia pública y seguimiento", currencyLabelUSD:"USD - Dólar", currencyLabelIQD:"IQD - Dinar iraquí", currencyLabelEUR:"EUR - Euro", reportTitle:"Enviar reporte de pago", reportSubtitle:"Este formulario se guarda directamente en la base de datos D1.", payerContactLabel:"Teléfono / mensajería", payerContactPlaceholder:"por ejemplo 0770...", countryLabel:"País", reportDisplayNameLabel:"Nombre mostrado", reportDisplayNameHint:"Es opcional escribir un nombre; puede dejarse vacío o completarse con un seudónimo.", reportDisplayPlaceholder:"Mohammad Ali Mohsen - En nombre de: Mártir Gran Ayatolá Imam Jamenei", noteLabel:"Notas", notePlaceholder:"Hora del pago, nota breve, detalles adicionales...", submitReportBtn:"Enviar información", successTitle:"Reporte enviado correctamente", successText:"Tu información se ha guardado en la base de datos y se refleja en la sección de reportes.", reportsTitle:"Reportes", reportsSubtitle:"Los 20 reportes más recientes y la distribución por países desde la base D1", statReportsLabel:"Total de reportes", statCountriesLabel:"Países participantes", statAmountLabel:"Monto total (USD estimado)", countryReportTitle:"Reporte por país", countryReportSubtitle:"Mapa de calor interactivo: la intensidad del color sigue el valor total estimado en USD; haz clic en un país para filtrar sus reportes.", recentReportsTitle:"Los 20 reportes más recientes", recentReportsSubtitle:"Los reportes más recientes guardados en la base de datos", tableCountry:"País", tableCount:"Cantidad", tableAmount:"Monto total", footerText:'Desarrollado por <a href="http://t.me/mohsenzadeh2" target="_blank" rel="noopener noreferrer">@mohsenzadeh2</a> bajo la supervisión de <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">la Universidad Internacional Al-Mustafa - Oficina de Irak</a>', buildVersionLabel:"Versión de despliegue:", reportCountry:"País", reportAmount:"Monto", reportAgent:"Agente", reportTime:"Hora", noReports:"Aún no hay reportes.", noNote:"Sin nota", allCountries:"Filtro de país: Todos", clearAll:"Mostrar todo", estimatedUsd:"USD estimado"},
  pt: {...baseEn, title:"Doações públicas para a Revolução Islâmica do Irã", heroBadge:"Plataforma multilíngue de apoio", subtitle:"Escolha a moeda, o valor e o agente recebedor; depois, se desejar, registre o seu pagamento.", feature1Title:"Alcance internacional", feature1Text:"Suporte a 9 idiomas e público global", feature2Title:"Dados reais de pagamento", feature2Text:"Informações reais de dois agentes independentes", feature3Title:"Relatórios ao vivo", feature3Text:"Os 20 relatórios mais recentes e a distribuição por países a partir do D1", heroStat1:"Idiomas ativos", heroStat2:"Agentes ativos", heroStat3:"Relatórios salvos", heroDonateBtn:"Iniciar apoio", heroReportsBtn:"Ver relatórios", heroSideKicker:"Por que pequenas contribuições importam?", heroSideTitle:"O impacto coletivo dos pequenos pagamentos é enorme", heroSideText:"Dez mil dinares iraquianos, sozinhos, não representam um grande valor. Mas quando essa pequena contribuição se repete entre muitos apoiadores, o total se torna significativo, real e visível.", microPill:"Pequena contribuição, grande efeito", microExample:"10.000 IQD × 1.000 pessoas = 10.000.000 IQD", microExampleNote:"Nas estatísticas agregadas, os valores são exibidos com uma estimativa em USD para que as diferenças entre moedas não gerem uma impressão enganosa.", institutionKicker:"Plataforma oficial e multilíngue", institutionTitle:"Sistema público de apoio e registro de relatórios", institutionSubtitle:"Desenvolvido com uma linguagem visual oficial e confiável, adequada para campanhas públicas e internacionais", institutionChipLanguages:"9 idiomas ativos", institutionChipAgents:"2 agentes independentes", trust1Title:"Público e multilíngue", trust1Text:"Adequado para públicos regionais e internacionais", trust2Title:"Dois canais independentes de recebimento", trust2Text:"Contato, ZainCash, MasterCard e QR para cada agente", trust3Title:"Relatórios transparentes", trust3Text:"Os relatórios são salvos enquanto os totais consideram um valor cambial aproximado", amountTitle:"Escolher valor e moeda", amountSubtitle:"Ambos os agentes aceitam todas as moedas.", customAmountLabel:"Valor personalizado", amountNotice:"Para valores altos, é melhor confirmar antes do envio final.", conversionTitle:"Exibição agregada inteligente", conversionText:"Para evitar comparações enganosas entre moedas, as estatísticas gerais e o mapa de calor são calculados com base em uma estimativa em USD, enquanto cada relatório mantém o seu valor na moeda original.", agentTitle:"Escolher agente recebedor", agentSubtitle:"Cada agente possui dados de pagamento independentes.", agent1Badge:"Agente 1", agent2Badge:"Agente 2", agent1Desc:"Contato, ZainCash e MasterCard", agent2Desc:"Contato direto, ZainCash e MasterCard", paymentTitle:"Informações de pagamento", paymentSubtitle:"Os detalhes abaixo mudam conforme o agente selecionado.", selectedCurrencyLabel:"Moeda selecionada", selectedAmountLabel:"Valor selecionado", selectedAgentLabel:"Agente selecionado", contactLabel:"Contato", zainLabel:"ZainCash", masterLabel:"MasterCard", copy:"Copiar", copied:"Copiado", showReportBtn:"Informar pagamento", callAgentBtn:"Ligar para o agente", paymentHelper:"Após o pagamento, clique em “Informar pagamento” para enviar o seu relatório.", step1Title:"Escolher moeda e valor", step1Text:"Pacotes rápidos ou valor personalizado", step2Title:"Escolher agente", step2Text:"Cada agente possui uma rota de pagamento independente", step3Title:"Enviar relatório", step3Text:"Para transparência pública e acompanhamento", currencyLabelUSD:"USD - Dólar", currencyLabelIQD:"IQD - Dinar iraquiano", currencyLabelEUR:"EUR - Euro", reportTitle:"Enviar relatório de pagamento", reportSubtitle:"Este formulário é armazenado diretamente no banco de dados D1.", payerContactLabel:"Telefone / mensageiro", payerContactPlaceholder:"ex.: 0770...", countryLabel:"País", reportDisplayNameLabel:"Nome exibido", reportDisplayNameHint:"Informar um nome é opcional; o campo pode ficar vazio ou usar um pseudônimo.", reportDisplayPlaceholder:"Mohammad Ali Mohsen - Em nome de: Mártir Grande Aiatolá Imam Khamenei", noteLabel:"Observações", notePlaceholder:"Hora do pagamento, nota curta, detalhes adicionais...", submitReportBtn:"Enviar informações", successTitle:"Relatório enviado com sucesso", successText:"Suas informações foram salvas no banco de dados e refletidas na seção de relatórios.", reportsTitle:"Relatórios", reportsSubtitle:"Os 20 relatórios mais recentes e a distribuição por países a partir do banco D1", statReportsLabel:"Total de relatórios", statCountriesLabel:"Países participantes", statAmountLabel:"Valor total (USD estimado)", countryReportTitle:"Relatório por país", countryReportSubtitle:"Mapa de calor interativo: a intensidade da cor segue o valor total estimado em USD; clique em um país para filtrar seus relatórios.", recentReportsTitle:"Os 20 relatórios mais recentes", recentReportsSubtitle:"Os relatórios mais recentes salvos no banco de dados", tableCountry:"País", tableCount:"Quantidade", tableAmount:"Valor total", footerText:'Desenvolvido por <a href="http://t.me/mohsenzadeh2" target="_blank" rel="noopener noreferrer">@mohsenzadeh2</a> sob a supervisão da <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">Universidade Internacional Al-Mustafa - Escritório do Iraque</a>', buildVersionLabel:"Versão de implantação:", reportCountry:"País", reportAmount:"Valor", reportAgent:"Agente", reportTime:"Hora", noReports:"Ainda não há relatórios.", noNote:"Sem observação", allCountries:"Filtro de país: Todos", clearAll:"Mostrar tudo", estimatedUsd:"USD estimado"},
  tr: {...baseEn, title:"İran İslam Devrimi için halk bağışları", heroBadge:"Çok dilli destek platformu", subtitle:"Para birimini, tutarı ve alıcı temsilciyi seçin; ardından isterseniz ödeme bildiriminizi gönderin.", feature1Title:"Uluslararası erişim", feature1Text:"9 dil ve küresel kitle desteği", feature2Title:"Gerçek ödeme bilgileri", feature2Text:"İki bağımsız temsilci için gerçek bilgiler", feature3Title:"Canlı raporlar", feature3Text:"D1’den son 20 rapor ve ülke dağılımı", heroStat1:"Aktif diller", heroStat2:"Aktif temsilciler", heroStat3:"Kayıtlı raporlar", heroDonateBtn:"Destek sürecini başlat", heroReportsBtn:"Raporları görüntüle", heroSideKicker:"Küçük ödemeler neden önemlidir?", heroSideTitle:"Küçük ödemelerin kolektif etkisi çok büyüktür", heroSideText:"10.000 Irak dinarı tek başına büyük bir tutar değildir. Ancak bu küçük katkı çok sayıda destekçi tarafından tekrarlandığında, toplam miktar anlamlı ve görünür bir etkiye dönüşür.", microPill:"Küçük katkı, büyük etki", microExample:"10.000 IQD × 1.000 kişi = 10.000.000 IQD", microExampleNote:"Toplu istatistiklerde tutarlar, para birimi farklarının yanıltıcı bir izlenim oluşturmaması için tahmini USD değeriyle gösterilir.", institutionKicker:"Resmî ve çok dilli platform", institutionTitle:"Kamu destek ve raporlama sistemi", institutionSubtitle:"Kamusal ve uluslararası kampanyalara uygun, resmî ve güven veren bir görsel dille tasarlandı", institutionChipLanguages:"9 aktif dil", institutionChipAgents:"2 bağımsız temsilci", trust1Title:"Kamusal ve çok dilli", trust1Text:"Bölgesel ve uluslararası kitleler için uygundur", trust2Title:"İki bağımsız tahsilat kanalı", trust2Text:"Her temsilci için iletişim, ZainCash, MasterCard ve QR", trust3Title:"Şeffaf raporlama", trust3Text:"Raporlar kaydedilirken toplamlar yaklaşık kur değerini de dikkate alır", amountTitle:"Tutar ve para birimi seçin", amountSubtitle:"Her iki temsilci de tüm para birimlerini kabul eder.", customAmountLabel:"Özel tutar", amountNotice:"Yüksek tutarlar için son gönderimden önce teyit edilmesi daha uygundur.", conversionTitle:"Akıllı toplu gösterim", conversionText:"Farklı para birimleri arasında yanıltıcı karşılaştırmaları önlemek için genel istatistikler ve ısı haritası tahmini USD temeline göre hesaplanır; her rapor ise kendi para birimindeki asıl tutarı korur.", agentTitle:"Alıcı temsilciyi seçin", agentSubtitle:"Her temsilcinin ödeme bilgileri ayrıdır.", agent1Badge:"Temsilci 1", agent2Badge:"Temsilci 2", agent1Desc:"İletişim, ZainCash ve MasterCard", agent2Desc:"Doğrudan iletişim, ZainCash ve MasterCard", paymentTitle:"Ödeme bilgileri", paymentSubtitle:"Aşağıdaki bilgiler seçilen temsilciye göre değişir.", selectedCurrencyLabel:"Seçilen para birimi", selectedAmountLabel:"Seçilen tutar", selectedAgentLabel:"Seçilen temsilci", contactLabel:"İletişim", zainLabel:"ZainCash", masterLabel:"MasterCard", copy:"Kopyala", copied:"Kopyalandı", showReportBtn:"Ödemeyi bildir", callAgentBtn:"Temsilciyi ara", paymentHelper:"Ödemeden sonra raporunuzu göndermek için “Ödemeyi bildir” düğmesine tıklayın.", step1Title:"Para birimi ve tutar seçin", step1Text:"Hızlı paketler veya özel tutar", step2Title:"Temsilci seçin", step2Text:"Her temsilcinin bağımsız bir ödeme yolu vardır", step3Title:"Rapor gönder", step3Text:"Kamusal şeffaflık ve raporlama için", currencyLabelUSD:"USD - Dolar", currencyLabelIQD:"IQD - Irak Dinarı", currencyLabelEUR:"EUR - Euro", reportTitle:"Ödeme raporu gönder", reportSubtitle:"Bu form doğrudan D1 veritabanında saklanır.", payerContactLabel:"Telefon / mesajlaşma", payerContactPlaceholder:"ör. 0770...", countryLabel:"Ülke", reportDisplayNameLabel:"Görünen ad", reportDisplayNameHint:"Ad girmek zorunlu değildir; alan boş bırakılabilir veya takma ad kullanılabilir.", reportDisplayPlaceholder:"Mohammad Ali Mohsen - Şehit Büyük Ayetullah İmam Hamaney adına", noteLabel:"Notlar", notePlaceholder:"Ödeme zamanı, kısa not, ek ayrıntılar...", submitReportBtn:"Bilgileri gönder", successTitle:"Rapor başarıyla gönderildi", successText:"Bilgileriniz veritabanına kaydedildi ve raporlar bölümüne yansıtıldı.", reportsTitle:"Raporlar", reportsSubtitle:"D1 veritabanından son 20 rapor ve ülke dağılımı", statReportsLabel:"Toplam rapor", statCountriesLabel:"Katılan ülkeler", statAmountLabel:"Toplam tutar (tahmini USD)", countryReportTitle:"Ülke raporu", countryReportSubtitle:"Etkileşimli ısı haritası: renk yoğunluğu toplamların tahmini USD değerini izler; bir ülkeye tıklayarak o ülkenin raporlarını filtreleyin.", recentReportsTitle:"Son 20 rapor", recentReportsSubtitle:"Veritabanına kaydedilen en son raporlar", tableCountry:"Ülke", tableCount:"Sayı", tableAmount:"Toplam tutar", footerText:'<a href="http://t.me/mohsenzadeh2" target="_blank" rel="noopener noreferrer">@mohsenzadeh2</a> tarafından geliştirildi; <a href="https://t.me/miuiraq" target="_blank" rel="noopener noreferrer">Al-Mustafa Uluslararası Üniversitesi - Irak Ofisi</a> gözetiminde', buildVersionLabel:"Yayın sürümü:", reportCountry:"Ülke", reportAmount:"Tutar", reportAgent:"Temsilci", reportTime:"Zaman", noReports:"Henüz rapor yok.", noNote:"Not yok", allCountries:"Ülke filtresi: Tümü", clearAll:"Tümünü göster", estimatedUsd:"Tahmini USD"}
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
function getCurrencyLabel(code){ const t = i18n[currentLang] || i18n.fa; return t[`currencyLabel${code}`] || code; }
function updateCurrencyButtons(){
  document.querySelectorAll(".currency-btn").forEach(btn => {
    btn.textContent = getCurrencyLabel(btn.dataset.currency);
    btn.classList.toggle("active", btn.dataset.currency === selectedCurrency);
  });
  $("customAmount").min = String(minAmountByCurrency[selectedCurrency] || 1);
}
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
  updateCurrencyButtons();
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
  $("selectedCurrency").textContent = getCurrencyLabel(selectedCurrency);
  $("selectedAmount").textContent = formatAmount(effectiveAmount(), selectedCurrency);
  $("selectedAgent").textContent = agentName(selectedAgent);
  $("contactValue").textContent = agent.contact;
  $("zainValue").textContent = agent.zain;
  $("masterValue").textContent = agent.master;
  $("qrImage").src = agent.qr;
  $("qrImage").alt = agentName(selectedAgent);
  $("qrHint").textContent = i18n[currentLang].qrHint || "";
}


function initRevealAnimations(){
  const items = document.querySelectorAll('.reveal-up');
  if (!('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('is-visible')); return; }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(el => observer.observe(el));
}

document.querySelectorAll(".currency-btn").forEach(btn => btn.onclick = () => {
  selectedCurrency = btn.dataset.currency;
  selectedAmount = currencyPresets[selectedCurrency][0];
  $("customAmount").value = "";
  updateCurrencyButtons();
  renderAmounts();
  updatePaymentInfo();
  renderReports();
});

document.querySelectorAll(".agent-card").forEach(card => card.onclick = () => {
  selectedAgent = Number(card.dataset.agent);
  document.querySelectorAll(".agent-card").forEach(c => c.classList.toggle("active", c === card));
  updatePaymentInfo();
});

$("customAmount").addEventListener("input", () => {
  const min = minAmountByCurrency[selectedCurrency] || 1;
  const val = Number($("customAmount").value || 0);
  if (val > 0 && val < min) {
    $("customAmount").setCustomValidity(`Minimum amount for ${selectedCurrency} is ${min}`);
  } else {
    $("customAmount").setCustomValidity("");
  }
  updatePaymentInfo();
});

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
    const res = await fetch("./world-map.svg");
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
  const bg = svg.querySelector("rect");
  if (bg) bg.setAttribute("fill", "#e6edf7");
  const values = [...new Set([...countryAmountMap.values()].map(v => v.amount))];
  const max = values.length ? Math.max(...values) : 0;
  function lerp(a,b,t){ return Math.round(a + (b-a)*t); }
  function colorFor(value){
    if (!max) return "#d5dfef";
    const t = Math.max(0.06, Math.min(1, value / max));
    const r = lerp(222, 200, t), g = lerp(230, 164, t), b = lerp(242, 93, t);
    return `rgb(${r},${g},${b})`;
  }
  svg.querySelectorAll(".map-country").forEach(el => {
    const item = getMapItemByFeatureName(el.dataset.name || "");
    el.setAttribute("fill", item ? colorFor(item.amount) : "#d9e3f1");
    el.setAttribute("stroke", item ? "#a8b9d4" : "#bccbdf");
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
    const [recentRes, countryRes, statsRes] = await Promise.all([fetch("./api/reports?limit=20"), fetch("./api/countries"), fetch("./api/stats")]);
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
  const min = minAmountByCurrency[selectedCurrency] || 1;
  if (effectiveAmount() < min) {
    alert(`Minimum ${selectedCurrency} amount is ${min}.`);
    return;
  }
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
  const res = await fetch("./api/report", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
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

if (window.innerWidth > 760) { document.documentElement.classList.add("js-motion"); initRevealAnimations(); } else { document.querySelectorAll(".reveal-up").forEach(el => el.classList.add("is-visible")); }
applyLanguage("fa");
updatePaymentInfo();
$("pageLoadedAt").value = String(Date.now());
loadReports();
initWorldMap();
document.querySelectorAll(".lang-btn").forEach(btn => btn.addEventListener("click", () => applyLanguage(btn.dataset.lang)));


/* ===== Mobile stability patch for reports/map section ===== */
function __safeRepaintReportsSection() {
  try {
    const list = $("recentList");
    const map = $("worldMapContainer");
    const table = $("countryTableBody");
    const reportsLayout = document.querySelector(".reports-layout");

    if (reportsLayout) {
      reportsLayout.style.display = "grid";
      void reportsLayout.offsetHeight;
    }

    if (typeof renderReports === "function") {
      renderReports();
    }
    if (typeof updateMapColors === "function") {
      updateMapColors();
    }
    if (typeof bindMapEvents === "function") {
      bindMapEvents();
    }

    if (map) {
      map.style.display = "none";
      void map.offsetHeight;
      map.style.display = "block";
    }

    if (list && !list.children.length && typeof renderRecent === "function") {
      renderRecent(getFilteredRecent());
    }

    if (table && !table.children.length && typeof renderCountryTable === "function") {
      renderCountryTable(reportCache.countries || []);
    }
  } catch (e) {
    console.error("mobile reports repaint failed", e);
  }
}

window.addEventListener("pageshow", () => {
  setTimeout(__safeRepaintReportsSection, 120);
  setTimeout(__safeRepaintReportsSection, 450);
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    setTimeout(__safeRepaintReportsSection, 120);
  }
});

window.addEventListener("orientationchange", () => {
  setTimeout(__safeRepaintReportsSection, 180);
});

window.addEventListener("scroll", () => {
  clearTimeout(window.__reportsScrollTimer);
  window.__reportsScrollTimer = setTimeout(__safeRepaintReportsSection, 120);
}, { passive: true });

