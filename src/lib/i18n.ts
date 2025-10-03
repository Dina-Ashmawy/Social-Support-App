import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      appTitle: "Social Support Application",
      stepXofY: "Step {{x}} of {{y}}",

      // Step 1
      personalInfo: "Personal Information",
      name: "Name",
      nationalId: "National ID",
      dob: "Date of Birth",
      gender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      address: "Address",
      city: "City",
      state: "State / Province",
      country: "Country",
      phone: "Phone",
      email: "Email",

      // Step 2
      familyFinancialInfo: "Family and Financial Info",
      maritalStatus: "Marital Status",
      dependents: "Dependents",
      employmentStatus: "Employment Status",
      monthlyIncome: "Monthly Income",
      housingStatus: "Housing Status",
      single: "Single",
      married: "Married",
      divorced: "Divorced",
      widowed: "Widowed",
      employed: "Employed",
      unemployed: "Unemployed",
      selfEmployed: "Self-employed",
      student: "Student",
      retired: "Retired",
      rent: "Rent",
      own: "Own",
      withFamily: "With Family",
      otherHousing: "Other",

      // step 3
      situationDescriptions: "Situation Descriptions",
      currentFinancialSituation: "Current Financial Situation",
      employmentCircumstances: "Employment Circumstances",
      reasonForApplying: "Reason for Applying",

      // Actions
      back: "Back",
      next: "Next",
      saveDraft: "Save Draft",
      submit: "Submit",

      // Validation
      //step1
      error_message_required: "This field is required",
      error_message_min2: "Please enter at least 2 characters",
      error_message_nationalId: "National ID must be at least 6 characters",
      error_message_dob: "Date of birth is required",
      error_message_gender: "Please select gender",
      error_message_address: "Please enter a valid address",
      error_message_city: "Please enter a valid city",
      error_message_state: "Please enter a valid state or province",
      error_message_country: "Please enter a valid country",
      error_message_phone: "Please enter a valid phone number",
      error_message_email: "Please enter a valid email address",
      //step2
      error_message_maritalStatus: "Please select your marital status",
      error_message_dependents: "Please enter the number of dependents",
      error_message_employmentStatus: "Please select your employment status",
      error_message_monthlyIncome: "Please enter your monthly income",
      error_message_housingStatus: "Please select your housing status",
      error_message_number: "Please enter a valid number",
      error_message_nonNegative: "Value cannot be negative",
      //step3
      error_message_minChars20: "Please provide at least 20 characters",
      error_message_situationCurrent:
        "Please describe your current financial situation",
      error_message_employmentCircumstances:
        "Please describe your employment circumstances",
      error_message_reasonApplying: "Please explain your reason for applying",

      //HelpMe component keys
      helpMeWrite: "Help Me Write",
      ai_suggestion: "AI Suggestion",
      ai_edit_before_accept:
        "You can edit the suggested text before accepting.",
      ai_loading: "Generating suggestion...",
      accept: "Accept",
      discard: "Discard",
      ai_error_generic: "Could not get a suggestion. Please try again.",
      ai_user_notes_prefix: "User notes:",
      ai_prompt_template:
        'Write a clear, well-structured paragraph about "{{topic}}". Keep it concise (120–180 words), respectful, and avoid sensitive details. Use short sentences.',
      edit: "Edit",
      ai_edit_mode: "You can now edit the suggestion.",
      charCount: "{{count}} characters",

      //submit API keys
      submit_success_title: "Application submitted successfully",
      submit_success_subtitle:
        "Your application ID is {{id}}. We’ve sent you a confirmation email.",
      start_new_application: "Start a New Application",
      submit_error_title: "Submission failed",
      submit_error_subtitle:
        "We couldn’t submit your application. Please try again.",
      back_to_start: "Back to Start",
      retry: "Retry",
      ai_error_title: "AI Suggestion Error",

      //Home screen
      createNewApp: "Create New Application",
      savedDrafts: "Saved Drafts",
      noDrafts: "No drafts yet.",
      draft: "Draft",
      step: "Step",
      savedAt: "Saved",
      resume: "Resume",
      delete: "Delete",
      deleteDraft: "Delete draft?",
      draftSaved: "Draft saved.",
      draftUpdated: "Draft updated.",
      ok: "OK",
      cancel: "Cancel",
      draftLoaded: "Draft loaded",
      draftCreated: "Draft created",
      submitted: "Submitted",

      switchToEnglish: "Switch to English",
      switchToArabic: "Switch to Arabic",

      go_home: "Go to Home",
    },
  },
  ar: {
    translation: {
      appTitle: "طلب دعم اجتماعي",
      stepXofY: "الخطوة {{x}} من {{y}}",

      // Step 1
      personalInfo: "البيانات الشخصية",
      name: "الاسم",
      nationalId: "الرقم القومي",
      dob: "تاريخ الميلاد",
      gender: "النوع",
      male: "ذكر",
      female: "أنثى",
      other: "آخر",
      address: "العنوان",
      city: "المدينة",
      state: "المحافظة",
      country: "الدولة",
      phone: "الهاتف",
      email: "البريد الإلكتروني",

      // Step 2
      familyFinancialInfo: "المعلومات العائلية والمالية",
      maritalStatus: "الحالة الاجتماعية",
      dependents: "المعالون",
      employmentStatus: "حالة العمل",
      monthlyIncome: "الدخل الشهري",
      housingStatus: "السكن",
      single: "أعزب",
      married: "متزوج",
      divorced: "مطلق",
      widowed: "أرمل",
      employed: "موظف",
      unemployed: "غير موظف",
      selfEmployed: "عمل حر",
      student: "طالب",
      retired: "متقاعد",
      rent: "إيجار",
      own: "تمليك",
      withFamily: "مع الأسرة",
      otherHousing: "آخر",

      //step3
      situationDescriptions: "وصف الحالة",
      currentFinancialSituation: "الوضع المالي الحالي",
      employmentCircumstances: "ظروف العمل",
      reasonForApplying: "سبب التقديم",

      // Actions
      back: "السابق",
      next: "التالي",
      saveDraft: "حفظ المسودة",
      submit: "إرسال",

      // Validation
      //step1
      error_message_required: "هذا الحقل مطلوب",
      error_message_min2: "الرجاء إدخال حرفين على الأقل",
      error_message_nationalId: "يجب أن لا يقل الرقم القومي عن 6 أرقام",
      error_message_dob: "تاريخ الميلاد مطلوب",
      error_message_gender: "يرجى اختيار النوع",
      error_message_address: "يرجى إدخال عنوان صحيح",
      error_message_city: "يرجى إدخال مدينة صحيحة",
      error_message_state: "يرجى إدخال محافظة أو ولاية صحيحة",
      error_message_country: "يرجى إدخال دولة صحيحة",
      error_message_phone: "يرجى إدخال رقم هاتف صحيح",
      error_message_email: "يرجى إدخال بريد إلكتروني صحيح",
      //step2
      error_message_maritalStatus: "يرجى اختيار الحالة الاجتماعية",
      error_message_dependents: "يرجى إدخال عدد المعالين",
      error_message_employmentStatus: "يرجى اختيار حالة العمل",
      error_message_monthlyIncome: "يرجى إدخال الدخل الشهري",
      error_message_housingStatus: "يرجى اختيار حالة السكن",
      error_message_number: "الرجاء إدخال رقم صحيح",
      error_message_nonNegative: "لا يمكن أن تكون القيمة سالبة",
      //step3
      error_message_minChars20: "يرجى إدخال 20 حرفًا على الأقل",
      error_message_situationCurrent: "يرجى وصف وضعك المالي الحالي",
      error_message_employmentCircumstances: "يرجى وصف ظروف عملك",
      error_message_reasonApplying: "يرجى توضيح سبب تقديم الطلب",

      //HelpMe component keys
      helpMeWrite: "ساعدني في الكتابة",
      ai_suggestion: "اقتراح من الذكاء الاصطناعي",
      ai_edit_before_accept: "يمكنك تعديل النص المقترح قبل اعتماده.",
      ai_loading: "جاري إنشاء الاقتراح...",
      accept: "اعتماد",
      discard: "تجاهل",
      ai_error_generic: "تعذر الحصول على اقتراح. يرجى المحاولة مرة أخرى.",
      ai_user_notes_prefix: "ملاحظات المستخدم:",
      ai_prompt_template:
        'اكتب فقرة واضحة ومنظمة حول "{{topic}}". اجعلها موجزة (120-180 كلمة) وبنبرة محترمة، وبدون معلومات حساسة. استخدم جملاً قصيرة.',
      edit: "تعديل",
      ai_edit_mode: "يمكنك الآن تعديل الاقتراح.",
      charCount: "{{count}} حرف",

      //submit API keys
      submit_success_title: "تم إرسال الطلب بنجاح",
      submit_success_subtitle:
        "رقم طلبك هو {{id}}. تم إرسال رسالة تأكيد إلى بريدك.",
      start_new_application: "بدء طلب جديد",
      submit_error_title: "فشل الإرسال",
      submit_error_subtitle: "تعذر إرسال طلبك. يرجى المحاولة مرة أخرى.",
      back_to_start: "العودة إلى البداية",
      retry: "إعادة المحاولة",
      ai_error_title: "خطأ في اقتراح الذكاء الاصطناعي",

      //Home screen
      createNewApp: "إنشاء طلب جديد",
      savedDrafts: "المسودات المحفوظة",
      noDrafts: "لا توجد مسودات",
      draft: "مسودة",
      step: "الخطوة",
      savedAt: "تم الحفظ",
      resume: "متابعة",
      delete: "حذف",
      deleteDraft: "حذف المسودة؟",
      draftSaved: "تم حفظ المسودة.",
      draftUpdated: "تم تحديث المسودة.",
      draftLoaded: "تم تحميل المسودة",
      draftCreated: "تم إنشاء مسودة جديدة",
      draftDeleted: "تم حذف المسودة",
      submitted: "تم الإرسال",

      switchToEnglish: "التبديل إلى الإنجليزية",
      switchToArabic: "التبديل إلى العربية",
      ok: "موافق",
      cancel: "إلغاء",

      go_home: "الصفحة الرئيسية",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: { order: ["querystring", "localStorage", "navigator"] },
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).i18next = i18n;

export function safeTranslate(key: string, fallback?: string): string {
  try {
    // i18next.t already returns the key when missing; we add optional fallback
    const v = i18n.t(key);
    if (typeof v === "string" && v !== key) return v;
    return fallback ?? key;
  } catch {
    return fallback ?? key;
  }
}

export default i18n;
