// ============================================================================
// Coach Gino - Lead Magnet & Fitness Assessment System Pro
// Biomechanics, Custom Questionnaire, Cookie Session Tracking, CMS & CRM
// ============================================================================

// Default Settings & CMS Content
const DEFAULT_COACH_PHONE = '972507707197';
const DEFAULT_INSTAGRAM_HANDLE = '@coach.gino1';
const DEFAULT_INSTAGRAM_LINK = 'https://www.instagram.com/coach.gino1';
const DEFAULT_LANDING_BADGE = 'אבחון כושר מבוסס AI & ביומכניקה';
const DEFAULT_HEADLINE = 'תוכנית אימונים בשווי מאות שקלים בחינם!';
const DEFAULT_LANDING_SUBHEADLINE = 'קבל תוכנית אימונים מקצועית, מעמיקה ומותאמת אישית בתוך 2 דקות, בהתאם למטרות, לציוד ולמבנה הגוף שלך.';
const DEFAULT_BULLET_1_TITLE = 'דיוק ביומכני ומניעת פציעות';
const DEFAULT_BULLET_1_DESC = 'התייחסות אישית למגבלות פיזיות, פציעות עבר ורגישויות.';
const DEFAULT_BULLET_2_TITLE = 'תוכנית אימונים אישית מלאה';
const DEFAULT_BULLET_2_DESC = 'חלוקת ימים, סטים, חזרות, זמני מנוחה, סרטוני הדגמה ותמונות ביצוע.';
const DEFAULT_BULLET_3_TITLE = '100% שליטה ומגע אישי';
const DEFAULT_BULLET_3_DESC = 'הוסף נוסח והערות אישיות משלך בכל שלב של השאלון.';
const DEFAULT_LANDING_BTN_TEXT = 'התחל באבחון המהיר';
const DEFAULT_LANDING_SUBTEXT = 'ללא עלות • אבחון של 2 דקות בלבד';


const DEFAULT_COACH_GENDER_SETTINGS = {
    male: {
        consultationQuote: 'זה נכון שהשאלון שלי מתאים לכל סוגי המתאמנים אך מגבלות פיזיות ופציעות הן עניין רציני ודורשות התייחסות מיוחדת ומקצועית בכדי לא להשאיר מקום לספק , קבע איתי שיחת יעוץ (זה בחינם לגמרי).',
        consultationBtnText: 'קבע איתי שיחת ייעוץ אישית בוואטסאפ (בחינם לגמרי) 🚀',
        upsellTitle: 'יש לך תוכנית מעולה ביד.',
        upsellSubtitle: 'עכשיו, איך מוודאים שאתה לא נתקע?',
        upsellBody: 'תוכנית אימונים טובה היא התחלה. כדי לייצר התקדמות אמיתית לאורך זמן צריך לדעת לנהל עומסים נכון, לדייק את הטכניקה ולפתח שגרת תזונה עצמאית ומדויקת , הגיע הזמן להפסיק לנחש ולהיות תלוי באוויר.',
        upsellBtnText: 'קבע איתי שיחת התאמה אישית בוואטסאפ 🚀',
        whatsappPlanMsg: 'היי אורי, מילאתי את השאלון וקיבלתי את תוכנית האימונים שלי! אשמח לשמוע על תוכנית הליווי האישי שלך 1-על-1.',
        whatsappConsultationMsg: 'היי אורי, מילאתי את השאלון שלך ויש לי פציעה/מגבלה רפואית. בהתאם להמלצתך בשאלון, אשמח לקבוע שיחת ייעוץ אישית קצרה ללא עלות.',
        resultsHeadline: 'תוכנית האימונים שלך מוכנה! 🎉',
        resultsSubheadline: 'תוכנית מותאמת אישית ברמת דיוק ביומכנית גבוהה שנבנתה על ידי Coach Gino:',
        resultsWelcomeNote: ''
    },
    female: {
        consultationQuote: 'זה נכון שהשאלון שלי מתאים לכל סוגי המתאמנים אך מגבלות פיזיות ופציעות הן עניין רציני ודורשות התייחסות מיוחדת ומקצועית בכדי לא להשאיר מקום לספק , קבעי איתי שיחת יעוץ (זה בחינם לגמרי).',
        consultationBtnText: 'קבעי איתי שיחת ייעוץ אישית בוואטסאפ (בחינם לגמרי) 🚀',
        pregnancyConsultationQuote: 'הריון הוא תקופה מיוחדת ומרגשת, אך ישנם סוגי הריונות ודגשים ביומכניים שונים ואי אפשר לזרוק תוכנית כללית על כל הריון. הבטיחות שלך ושל העובר היא מעל הכל – קבעי איתי שיחת ייעוץ אישית ונתאים מתווה מדויק ובטוח (זה בחינם לגמרי).',
        upsellTitle: 'יש לך תוכנית מעולה ביד.',
        upsellSubtitle: 'עכשיו, איך מוודאים שאת לא נתקעת?',
        upsellBody: 'תוכנית אימונים טובה היא התחלה. כדי לייצר התקדמות אמיתית לאורך זמן צריך לדעת לנהל עומסים נכון, לדייק את הטכניקה ולפתח שגרת תזונה עצמאית ומדויקת , הגיע הזמן להפסיק לנחש ולהיות תלויה באוויר.',
        upsellBtnText: 'קבעי איתי שיחת התאמה אישית בוואטסאפ 🚀',
        whatsappPlanMsg: 'היי אורי, מילאתי את השאלון וקיבלתי את תוכנית האימונים שלי! אשמח לשמוע על תוכנית הליווי האישי שלך 1-על-1.',
        whatsappConsultationMsg: 'היי אורי, מילאתי את השאלון שלך ויש לי פציעה/מגבלה רפואית. בהתאם להמלצתך בשאלון, אשמח לקבוע שיחת ייעוץ אישית קצרה ללא עלות.',
        whatsappPregnancyMsg: 'היי אורי, מילאתי את השאלון שלך וציינתי שאני בהריון. בהתאם להמלצתך בשאלון, אשמח לקבוע שיחת ייעוץ אישית קצרה ללא עלות.',
        resultsHeadline: 'תוכנית האימונים שלך מוכנה! 🎉',
        resultsSubheadline: 'תוכנית מותאמת אישית ברמת דיוק ביומכנית גבוהה שנבנתה על ידי Coach Gino:',
        resultsWelcomeNote: ''
    }
};

const DEFAULT_CONSULTATION_QUOTE = DEFAULT_COACH_GENDER_SETTINGS.male.consultationQuote;
const DEFAULT_PREGNANCY_CONSULTATION_QUOTE = DEFAULT_COACH_GENDER_SETTINGS.female.pregnancyConsultationQuote;
const DEFAULT_UPSELL_TITLE = DEFAULT_COACH_GENDER_SETTINGS.male.upsellTitle;
const DEFAULT_UPSELL_SUBTITLE = DEFAULT_COACH_GENDER_SETTINGS.male.upsellSubtitle;
const DEFAULT_UPSELL_BODY = DEFAULT_COACH_GENDER_SETTINGS.male.upsellBody;
const DEFAULT_WHATSAPP_PLAN_MSG = DEFAULT_COACH_GENDER_SETTINGS.male.whatsappPlanMsg;
const DEFAULT_WHATSAPP_CONSULTATION_MSG = DEFAULT_COACH_GENDER_SETTINGS.male.whatsappConsultationMsg;
const DEFAULT_WHATSAPP_PREGNANCY_MSG = DEFAULT_COACH_GENDER_SETTINGS.female.whatsappPregnancyMsg;
const DEFAULT_RESULTS_HEADLINE = DEFAULT_COACH_GENDER_SETTINGS.male.resultsHeadline;
const DEFAULT_RESULTS_SUBHEADLINE = DEFAULT_COACH_GENDER_SETTINGS.male.resultsSubheadline;
const DEFAULT_RESULTS_WELCOME_NOTE = '';

// Load Coach Settings
function getCoachSettings(gender) {
    const targetGender = gender ? (gender === 'female' ? 'female' : 'male') : ((typeof state !== 'undefined' && state && state.answers && state.answers.gender === 'female') ? 'female' : 'male');
    const baseGender = DEFAULT_COACH_GENDER_SETTINGS[targetGender];
    let custom = {};
    try {
        const saved = localStorage.getItem('gino_coach_settings');
        if (saved) {
            custom = JSON.parse(saved);
        }
    } catch (e) {}

    const byGen = (custom.byGender && custom.byGender[targetGender]) || {};

    return {
        phone: custom.phone || DEFAULT_COACH_PHONE,
        instagramHandle: custom.instagramHandle || DEFAULT_INSTAGRAM_HANDLE,
        instagramLink: custom.instagramLink || DEFAULT_INSTAGRAM_LINK,
        badge: custom.badge || DEFAULT_LANDING_BADGE,
        headline: custom.headline || DEFAULT_HEADLINE,
        subheadline: custom.subheadline || DEFAULT_LANDING_SUBHEADLINE,
        bullet1Title: custom.bullet1Title || DEFAULT_BULLET_1_TITLE,
        bullet1Desc: custom.bullet1Desc || DEFAULT_BULLET_1_DESC,
        bullet2Title: custom.bullet2Title || DEFAULT_BULLET_2_TITLE,
        bullet2Desc: custom.bullet2Desc || DEFAULT_BULLET_2_DESC,
        bullet3Title: custom.bullet3Title || DEFAULT_BULLET_3_TITLE,
        bullet3Desc: custom.bullet3Desc || DEFAULT_BULLET_3_DESC,
        landingBtnText: custom.landingBtnText || DEFAULT_LANDING_BTN_TEXT,
        landingSubtext: custom.landingSubtext || DEFAULT_LANDING_SUBTEXT,

        webhookUrl: custom.webhookUrl || '',
        avatarUrl: custom.avatarUrl || localStorage.getItem('gino_coach_avatar') || '',
        
        consultationQuote: byGen.consultationQuote || (targetGender === 'male' ? (custom.consultationQuote || baseGender.consultationQuote) : baseGender.consultationQuote),
        consultationBtnText: byGen.consultationBtnText || baseGender.consultationBtnText,
        pregnancyConsultationQuote: custom.pregnancyConsultationQuote || byGen.pregnancyConsultationQuote || DEFAULT_COACH_GENDER_SETTINGS.female.pregnancyConsultationQuote,
        upsellTitle: byGen.upsellTitle || custom.upsellTitle || baseGender.upsellTitle,
        upsellSubtitle: byGen.upsellSubtitle || (targetGender === 'male' ? (custom.upsellSubtitle || baseGender.upsellSubtitle) : baseGender.upsellSubtitle),
        upsellBody: byGen.upsellBody || (targetGender === 'male' ? (custom.upsellBody || baseGender.upsellBody) : baseGender.upsellBody),
        upsellBtnText: byGen.upsellBtnText || baseGender.upsellBtnText,
        whatsappPlanMsg: byGen.whatsappPlanMsg || custom.whatsappPlanMsg || baseGender.whatsappPlanMsg,
        whatsappConsultationMsg: byGen.whatsappConsultationMsg || custom.whatsappConsultationMsg || baseGender.whatsappConsultationMsg,
        whatsappPregnancyMsg: custom.whatsappPregnancyMsg || DEFAULT_COACH_GENDER_SETTINGS.female.whatsappPregnancyMsg,
        resultsHeadline: byGen.resultsHeadline || custom.resultsHeadline || baseGender.resultsHeadline,
        resultsSubheadline: byGen.resultsSubheadline || custom.resultsSubheadline || baseGender.resultsSubheadline,
        resultsWelcomeNote: byGen.resultsWelcomeNote !== undefined ? byGen.resultsWelcomeNote : (targetGender === 'male' ? (custom.resultsWelcomeNote || '') : '')
    };
}

// Application State
const state = {
    currentStep: 0,
    theme: 'green',
    answers: {
        gender: '',
        height: '',
        weight: '',
        age: '',
        noteAge: '',
        activity: '',
        activityOther: '',
        noteActivity: '',
        goal: '',
        goalOther: '',
        noteGoal: '',
        experience: '',
        experienceOther: '',
        noteExperience: '',
        frequency: '',
        frequencyOther: '',
        noteFrequency: '',
        injuries: [],
        injuryDetail: '',
        noteInjuries: '',
        equipment: '',
        equipmentOther: '',
        noteEquipment: '',
        challenge: '',
        challengeOther: '',
        noteChallenge: '',
        isPregnant: '',
        pregnancyTrimester: '',
        pregnancyNotes: ''
    },
    lead: {
        fullName: '',
        phone: '',
        instagram: '',
        mailingApproved: false
    },
    generatedPlan: null,
    sessionId: null
};
window.state = state;

let coachSettings = getCoachSettings();

const genderNames = {
    'male': 'גבר ♂',
    'female': 'אישה ♀'
};

const trimesterNames = {
    'trimester_1': 'שליש ראשון (שבועות 1-13)',
    'trimester_2': 'שליש שני (שבועות 14-27)',
    'trimester_3': 'שליש שלישי (שבועות 28+)',
    'first': 'שליש ראשון (שבועות 1-13)',
    'second': 'שליש שני (שבועות 14-27)',
    'third': 'שליש שלישי (שבועות 28+)'
};

// Wizard Steps
const steps = ['step-0', 'step-1', 'step-2', 'step-3', 'step-4', 'step-5', 'step-6'];
const stepNamesHebrew = [
    'עמוד נחיתה ראשי',
    'שלב 1 - פרופיל ואורח חיים',
    'שלב 2 - ניסיון, פציעות ומבנה אימונים',
    'שלב 3 - הקושי והאתגר המרכזי',
    'שלב 4 - שער איסוף הליד',
    'שלב 5 - עיבוד AI ביומכני',
    'שלב 6 - הצגת תוכנית האימונים'
];

// Display Mappings
const goalNames = {
    'mass': 'עלייה במסת שריר (מסה נקייה)',
    'shred': 'חיטוב וירידה באחוזי שומן',
    'strength': 'שיפור כוח וביצועים ספורטיביים',
    'recomp': 'חיטוב ושינוי הרכב הגוף (Recomposition)',
    'other': 'מטרה מותאמת אישית'
};

const activityNames = {
    'office': 'עבודה משרדית / ישיבה ממושכת לאורך היום',
    'light': 'עבודה בתנועה קלה / עמידה',
    'heavy': 'עבודה פיזית מאומצת',
    'other': 'אופי תעסוקה מותאם אישית'
};

const experienceNames = {
    'beginner': 'מתחיל לגמרי (פחות מ-6 חודשים)',
    'active': 'מתאמן פעיל (חצי שנה עד שנתיים)',
    'advanced': 'מתקדם (מעל שנתיים)',
    'other': 'רקע וניסיון מותאם אישית'
};

const frequencyNames = {
    '2-3': '2-3 פעמים בשבוע',
    '4+': '4+ ימים בשבוע',
    '4': '4+ ימים בשבוע',
    '5-6': '4+ ימים בשבוע',
    'other': 'תדירות מותאמת אישית'
};

const equipmentNames = {
    'gym': 'חדר כושר מלא ומאובזר',
    'bodyweight': 'משקל גוף בלבד (קליסטניקס)',
    'home': 'משקל גוף בלבד (קליסטניקס)',
    'other': 'ציוד מותאם אישית'
};

const injuryNames = {
    'back': 'גב תחתון / פריצת דיסק',
    'shoulders': 'כתפיים / שרוול מסובב',
    'knees': 'ברכיים / רצועות / צולבת',
    'elbows': 'מרפקים / שורש כף יד',
    'none': 'אין מגבלות מיוחדות'
};

const challengeNames = {
    'load': 'ניהול עומסים והתקדמות במשקלים בלי להיתקע',
    'consistency': 'קושי בהתמדה וביצירת שגרה קבועה',
    'technique': 'חוסר ביטחון בטכניקה ובבחירת התרגילים הנכונים',
    'nutrition': 'קושי לשלב נכון בין התזונה לתוכנית האימונים',
    'results': 'איטיות בתוצאות וחוסר הבנה למה אני לא מתקדם',
    'other': 'אתגר מותאם אישית'
};

// ============================================================================
// MULTI-STAGE EXERCISE DEMONSTRATION LIBRARY (SETUP, MOVEMENT, LOCKOUT)
// ============================================================================
const DEFAULT_STAGE_IMAGES = {
    chest: {
        stage1: {
            title: 'שלב 1: עמדת מוצא והכנה',
            image: '',
            defaultCues: 'נעילת שכמות לאחור ולמטה, קשת מותנית טבעית, יציבות עקבים בקרקע ואחיזה מאוזנת ברוחב כתפיים פלוס.'
        },
        stage2: {
            title: 'שלב 2: ירידה ותנועה (מאמץ שיא)',
            image: '',
            defaultCues: 'הורדה מבוקרת של 2-3 שניות, מרפקים ב-45-60 מעלות ביחס לטורסו (מישור השכמה) למניעת צביטה בכתף, מתח שרירי רציף.'
        },
        stage3: {
            title: 'שלב 3: כיווץ שיא ונעילה מבוקרת',
            image: '',
            defaultCues: 'דחיפה מתפרצת תוך נשיפה, קירוב מרפקים לכיווץ מקסימלי של סיבי החזה, ללא פריקת מתח וללא פתיחת שכמות.'
        }
    },
    back: {
        stage1: {
            title: 'שלב 1: עמדת מוצא והכנה',
            image: '',
            defaultCues: 'מתיחה מבוקרת של הרחב גבי, חזה מורם (חזה גאה), ברכיים רכות וקיבוע יציב של האגן והליבה.'
        },
        stage2: {
            title: 'שלב 2: ירידה ותנועה (מאמץ שיא)',
            image: '',
            defaultCues: 'משיכה דרך המרפקים לכיוון המותניים (ולא בכוח האמות), קירוב שכמות אקטיבי ונשיפה במאמץ.'
        },
        stage3: {
            title: 'שלב 3: כיווץ שיא ונעילה מבוקרת',
            image: '',
            defaultCues: 'כיווץ שיא של הרחב גבי והטרפזים למשך שנייה מלאה, בית חזה מורם וללא תנופת מומנטום של הגב.'
        }
    },
    legs: {
        stage1: {
            title: 'שלב 1: עמדת מוצא והכנה',
            image: '',
            defaultCues: 'עמידה ברוחב כתפיים, בהונות מופנות קלות החוצה (15-30 מעלות), נעילת ליבה (Bracing) ושמירה על גב ניטרלי.'
        },
        stage2: {
            title: 'שלב 2: ירידה ותנועה (מאמץ שיא)',
            image: '',
            defaultCues: 'ירידה מבוקרת לעומק מקביל תוך פתיחת ברכיים בכיוון הבהונות ושמירה על מרכז כובד באמצע כף הרגל.'
        },
        stage3: {
            title: 'שלב 3: כיווץ שיא ונעילה מבוקרת',
            image: '',
            defaultCues: 'דחיפה חזקה דרך העקבים תוך יישור מפרקי הירך והברך וכיווץ גלוטס מבוקר בראש התנועה ללא נעילת יתר.'
        }
    },
    shoulders: {
        stage1: {
            title: 'שלב 1: עמדת מוצא והכנה',
            image: '',
            defaultCues: 'עמידה או ישיבה יציבה, ליבה דרוכה, מרפקים מעט לפנים (Scapular Plane) ואחיזה בטוחה.'
        },
        stage2: {
            title: 'שלב 2: ירידה ותנועה (מאמץ שיא)',
            image: '',
            defaultCues: 'לחיצה או הרחקה מבוקרת ללא עזרת תנופת הגוף וללא הקשתת יתר של הגב התחתון.'
        },
        stage3: {
            title: 'שלב 3: כיווץ שיא ונעילה מבוקרת',
            image: '',
            defaultCues: 'הגעה לשיא התנועה תוך כיווץ הדלתואיד, החזקה קצרה וחזרה שלילית איטית ומבוקרת.'
        }
    },
    arms: {
        stage1: {
            title: 'שלב 1: עמדת מוצא והכנה',
            image: '',
            defaultCues: 'מרפקים צמודים לקו הגוף ומקובעים במקומם, שורש כף יד ישר וניטרלי, מתיחה ראשונית.'
        },
        stage2: {
            title: 'שלב 2: ירידה ותנועה (מאמץ שיא)',
            image: '',
            defaultCues: 'בידוד מלא של שריר היעד (בייספס/טרייספס), תנועה נקייה ללא נדנוד גו וללא תנועת כתפיים.'
        },
        stage3: {
            title: 'שלב 3: כיווץ שיא ונעילה מבוקרת',
            image: '',
            defaultCues: 'כיווץ שיא מודגש לשנייה בנקודת השיא, ואז חזרה שלילית איטית ומבוקרת של 3 שניות.'
        }
    },
    core: {
        stage1: {
            title: 'שלב 1: עמדת מוצא והכנה',
            image: '',
            defaultCues: 'כיווץ שרירי הבטן העמוקים (Bracing), קיבוע האגן וסגירת קשת הגב התחתון כנגד הקרקע.'
        },
        stage2: {
            title: 'שלב 2: ירידה ותנועה (מאמץ שיא)',
            image: '',
            defaultCues: 'קירוב בית חזה לאגן או החזקת מתח סטטי מוחלט, תוך נשיפה יזומה וריכוז מנטלי בליבה.'
        },
        stage3: {
            title: 'שלב 3: כיווץ שיא ונעילה מבוקרת',
            image: '',
            defaultCues: 'החזקה ודחיקת האוויר החוצה, כיווץ דופן הבטן וסיום מבוקר ללא שחרור פתאומי של המתח.'
        }
    }
};

function ensureExerciseStages(exercise) {
    if (!exercise) return null;
    const muscle = exercise.muscle || 'chest';
    const defaults = DEFAULT_STAGE_IMAGES[muscle] || DEFAULT_STAGE_IMAGES.chest;
    
    // If stages already exist and is a valid array of 3 items
    if (Array.isArray(exercise.stages) && exercise.stages.length >= 3) {
        // Strip out any legacy Unsplash links from cached entries
        exercise.stages.forEach(st => {
            if (st.image && st.image.includes('unsplash.com')) {
                st.image = '';
            }
        });
        if (exercise.image && exercise.image.includes('unsplash.com')) {
            exercise.image = '';
        }
        return exercise;
    }
    
    const cleanExImage = (exercise.image && !exercise.image.includes('unsplash.com')) ? exercise.image : '';
    const st1Img = cleanExImage || defaults.stage1.image || '';
    const st2Img = defaults.stage2.image || '';
    const st3Img = defaults.stage3.image || '';
    const exNotes = exercise.notes || '';
    
    exercise.stages = [
        {
            stageNumber: 1,
            title: defaults.stage1.title,
            image: st1Img,
            cues: `עמדת מוצא עבור ${exercise.name}: ${defaults.stage1.defaultCues}`
        },
        {
            stageNumber: 2,
            title: defaults.stage2.title,
            image: st2Img,
            cues: exNotes ? `${exNotes}` : defaults.stage2.defaultCues
        },
        {
            stageNumber: 3,
            title: defaults.stage3.title,
            image: st3Img,
            cues: defaults.stage3.defaultCues
        }
    ];
    
    exercise.image = cleanExImage;
    
    return exercise;
}

// ============================================================================
// COMPREHENSIVE EXERCISE BANK (64 PROFESSIONALLY CURATED & ANATOMICALLY ANNOTATED EXERCISES)
// ============================================================================
const DEFAULT_EXERCISE_BANK = [
    // ==========================================
    // 1. חזה (CHEST)
    // ==========================================
    {
        id: 'ex_chest_inc_db',
        name: 'לחיצת חזה עם משקולות יד בשיפוע חיובי (Incline DB Press)',
        muscle: 'chest',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: '8iPEnn-ltC8',
        image: '',
        notes: 'שיפוע ספסל 30-45 מעלות למיקוד בסיבי החזה העליון (Clavicular Head). הורדה מבוקרת עם מרפקים ב-45-60 מעלות ביחס לטורסו (Scapular Plane) למניעת צביטה במפרק הכתף. שמירה על שכמות נעולות לאחור ולמטה.',
        contraindications: ['shoulders']
    },
    {
        id: 'ex_chest_barbell_bench',
        name: 'לחיצת חזה קלאסית במוט על ספה שטוחה (Flat Barbell Bench Press)',
        muscle: 'chest',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'rT7DgCr-3pg',
        image: '',
        notes: 'דחיפה יציבה דרך העקבים (Leg Drive), אחיזה ברוחב כתפיים פלוס. נחיתת המוט במרכז עצם החזה תוך קשת מותנית טבעית (ללא הקשתת יתר). מבוטל בהריון עקב שכיבה שטוחה ממושכת.',
        contraindications: ['pregnancy', 'shoulders']
    },
    {
        id: 'ex_chest_db_bench',
        name: 'לחיצת חזה כנגד משקולות יד בספה שטוחה (Flat Dumbbell Press)',
        muscle: 'chest',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'VmB1G1K7v94',
        image: '',
        notes: 'טווח תנועה עמוק יותר ממוט ללא נעילה של פרק כף היד. קירוב המשקולות במעלה התנועה ללא התנגשות ביניהן. שליטה מלאה בחזרה השלילית (3 שניות ירידה).',
        contraindications: ['pregnancy']
    },
    {
        id: 'ex_chest_cable_crossover',
        name: 'קירוב קרוס-אובר כנגד כבלים בגובה אמצעי (Cable Chest Fly)',
        muscle: 'chest',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'taI4XduLpBe',
        image: '',
        notes: 'מתח מכני רציף לאורך כל מסלול התנועה. כיפוף קל וקבוע במרפקים לאורך כל התנועה (תנועת חיבוק חבית), כיווץ שיא אקטיבי לשנייה בנקודת הסגירה.',
        contraindications: []
    },
    {
        id: 'ex_chest_pushups',
        name: 'שכיבות סמיכה קלאסיות מבוקרות (Standard Push-ups)',
        muscle: 'chest',
        equipment: 'bodyweight',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'IODxDxX7oi4',
        image: '',
        notes: 'גוף בקו ישר אחד (ליבה אסופה, אגן ניטרלי). מרפקים נשלחים לאחור ב-45 מעלות ביחס לגוף ולא לצדדים להגנה על המפרק. מגע חזה מבוקר ברצפה ודחיפה מלאה.',
        contraindications: []
    },
    {
        id: 'ex_chest_incline_pushups',
        name: 'שכיבות סמיכה מוגבהות על ספסל או קיר (Incline Push-ups)',
        muscle: 'chest',
        equipment: 'bodyweight',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'Z0bRiVhnO8Q',
        image: '',
        notes: 'תרגיל אידיאלי למתחילים ולנשים בהריון! מפחית לחץ תוך-בטני ומאפשר עבודת חזה וכתפיים בטוחה ללא שכיבה על הרצפה או עומס כבידה מלא.',
        contraindications: []
    },
    {
        id: 'ex_chest_dips',
        name: 'מקבילים עם הטיה לפנים בדגש חזה (Chest Dips)',
        muscle: 'chest',
        equipment: 'bodyweight',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: '2z8JmcrW-As',
        image: '',
        notes: 'הטיית פלג גוף עליון של כ-30 מעלות לפנים ופתיחת מרפקים מתונה לגיוס סיבי החזה התחתון. ירידה עד 90 מעלות במרפק למניעת עומס מתיחה על הקפסולה הקדמית.',
        contraindications: ['shoulders']
    },
    {
        id: 'ex_chest_machine_press',
        name: 'לחיצת חזה בישיבה במכונה (Seated Chest Press Machine)',
        muscle: 'chest',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'xUm0BiZCWlQ',
        image: '',
        notes: 'מסלול תנועה מיוצב ומוגן. התאמת גובה המושב כך שהידיות יהיו בגובה מרכז החזה. בית חזה פתוח, שכמות צמודות למשענת, הוצאת אוויר בשלב הדחיפה.',
        contraindications: []
    },
    {
        id: 'ex_chest_floor_press_db',
        name: 'לחיצת חזה עם משקולות על הרצפה (Dumbbell Floor Press)',
        muscle: 'chest',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'uUGDRwge4F8',
        image: '',
        notes: 'הרצפה בולמת את תנועת הזרוע ב-90 מעלות, מונעת מתיחת יתר של הכתף ומתאימה לאימונים ביתיים ללא ספסל כושר. אסור בהריון מתקדם עקב שכיבה שטוחה.',
        contraindications: ['pregnancy']
    },
    {
        id: 'ex_chest_pec_deck',
        name: 'פרפר במכונת פק-דק (Pec Deck Machine Flyes)',
        muscle: 'chest',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'eGjt4lkGeZ4',
        image: '',
        notes: 'בידוד מלא של שריר החזה הגדול (Pectoralis Major). כוונון מושב בגובה הכתף, מרפקים בגובה בית החזה ועצירה מבוקרת לפני קו הגו.',
        contraindications: ['shoulders']
    },

    // ==========================================
    // 2. גב (BACK)
    // ==========================================
    {
        id: 'ex_back_lat_pulldown',
        name: 'משיכת פולי עליון באחיזה רחבה לפנים (Wide-Grip Lat Pulldown)',
        muscle: 'back',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'CAwf7n6Luuc',
        image: '',
        notes: 'הובלת התנועה דרך המרפקים מטה ואחורה ולא דרך משיכת האמות. משיכה עד קו עצם הבריח (Clavicle) תוך קירוב והורדת שכמות אקטיבית. איסור מוחלט על משיכה מאחורי הצוואר.',
        contraindications: []
    },
    {
        id: 'ex_back_seated_cable_row',
        name: 'חתירה בישיבה בכבלים עם ידית V (Seated Cable Row)',
        muscle: 'back',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'GZbfZ033f74',
        image: '',
        notes: 'ברכיים כפופות קלות, עמוד שדרה ניטרלי וזקוף. משיכה מבוקרת לכיוון הטבור עם קירוב שכמות מלא (Scapular Retraction) ללא נדנודי גו.',
        contraindications: []
    },
    {
        id: 'ex_back_one_arm_db_row',
        name: 'חתירה במשקולת יד בתמיכת ספסל (One-Arm Dumbbell Row)',
        muscle: 'back',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות לכל צד',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'roCP6wCXPqo',
        image: '',
        notes: 'תמיכת יד וברך נגדית בספסל מנטרלת עומס על הגב התחתון. משיכת המשקולת במסלול קשתי עדין אל עבר המותן (Pocket Path) למיקוד שיא ברחב-גבי.',
        contraindications: []
    },
    {
        id: 'ex_back_pullups',
        name: 'עליות מתח באחיזה רחבה או צרה (Pull-ups & Chin-ups)',
        muscle: 'back',
        equipment: 'bodyweight',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'eGo4IYlbE5g',
        image: '',
        notes: 'התרגיל המלך לפיתוח מסה ורוחב גב במשקל גוף. התחלת התנועה בהורדת שכמות (Depression) ואז כפיפת מרפקים. גוף אסוף וללא תנופה.',
        contraindications: []
    },
    {
        id: 'ex_back_tbar_row',
        name: 'חתירת טי-באר בתמיכת חזה (Chest-Supported T-Bar Row)',
        muscle: 'back',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'j3Igk5nyZE4',
        image: '',
        notes: 'תמיכת החזה מנטרלת לחלוטין עומס גזירה מעמוד השדרה הלומברי - מעולה לסובלים מרגישות ופריצות דיסק בגב התחתון. משיכה ממוקדת לגב העליון והרחב גבי.',
        contraindications: []
    },
    {
        id: 'ex_back_bent_over_bb_row',
        name: 'חתירה בהטיית גו כנגד מוט (Bent-Over Barbell Row)',
        muscle: 'back',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'FWJR5Ve8gkQ',
        image: '',
        notes: 'אחיזה ברוחב כתפיים, גו בהטיה קבועה של 45 מעלות. עומס סטטי גבוה על זוקפי הגב. אסור בפריצות דיסק ובכאבי גב תחתון פעילים.',
        contraindications: ['back']
    },
    {
        id: 'ex_back_straight_arm_pulldown',
        name: 'פולאובר כנגד כבל בעמידה בזרועות ישרות (Straight-Arm Lat Pulldown)',
        muscle: 'back',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'G9J_iPpeqY8',
        image: '',
        notes: 'בידוד מלא של הרחב-גבי (Lats) ללא שימוש בשריר היד הקדמית. מרפקים נעולים בכפיפה קלה של 10 מעלות, משיכה בקשת רחבה עד המותניים.',
        contraindications: []
    },
    {
        id: 'ex_back_db_shrugs',
        name: 'הרמת שכמות במשקולות יד לטרפזים (Dumbbell Shrugs)',
        muscle: 'back',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'g6qbq4Cu1tE',
        image: '',
        notes: 'הרמה אנכית טהורה של השכמות לעבר האוזניים. איסור גלגול כתפיים (העלול לפגוע במפרק ה-AC). עצירה לשנייה בכיווץ שיא עליון.',
        contraindications: []
    },
    {
        id: 'ex_back_hyperextension',
        name: 'פשיטות גב בכיסא רומי 45 מעלות (45° Hyperextension)',
        muscle: 'back',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'ph3pddpKzzw',
        image: '',
        notes: 'חיזוק זוקפי הגב, ישבן והמסטרינגס. עלייה עד קו הגוף בלבד (הימנעות מהקשתת יתר של עמוד השדרה הלומברי).',
        contraindications: ['back']
    },
    {
        id: 'ex_back_mcgill_bird_dog',
        name: 'בירד-דוג מבוקר לפי ד"ר מקגיל (McGill Bird-Dog)',
        muscle: 'back',
        equipment: 'bodyweight',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות לכל צד',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'wiFNA3sqjCA',
        image: '',
        notes: 'פרוטוקול זהב רפואי וביומכני לשיקום כאבי גב ופריצות דיסק ומצוין גם בהריון! שילוח יד ורגל נגדית במקביל לרצפה תוך שמירה על אגן יציב ומאוזן לחלוטין ללא שקיעת בטן.',
        contraindications: []
    },
    {
        id: 'ex_back_inverted_row',
        name: 'חתירה הפוכה במשקל גוף (Inverted Row)',
        muscle: 'back',
        equipment: 'bodyweight',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'hXTc1mDnZCw',
        image: '',
        notes: 'אחיזה במוט נמוך או טבעות, עקבים בקרקע. משיכת החזה למוט תוך סחיטת שכמות. בטוח מאוד לגב התחתון ומתאים לכל מתאמן ביתי.',
        contraindications: []
    },
    {
        id: 'ex_back_deadlift_conventional',
        name: 'דדליפט קלאסי כנגד מוט (Conventional Barbell Deadlift)',
        muscle: 'back',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'op9kVnSso6Q',
        image: '',
        notes: 'תרגיל כוח רב-מפרקי עליון. שמירה על מוט צמוד לשוקיים, נעילת לטים, דחיפת הרצפה. אסור בפריצות דיסק או כאבי גב ובהריון עקב עומס ציר ודחיסה גבוהים.',
        contraindications: ['back', 'pregnancy']
    },

    // ==========================================
    // 3. רגליים וישבן (LEGS & GLUTES)
    // ==========================================
    {
        id: 'ex_legs_barbell_squat',
        name: 'סקוואט חופשי עם מוט על הגב (Barbell Back Squat)',
        muscle: 'legs',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'SW_C1A-Mhg8',
        image: '',
        notes: 'המוט מונח על הטרפזים (High Bar), ירידה מבוקרת עם ברכיים בקו הבהונות. עומס דחיסה גבוה על עמוד השדרה והברכיים. אסור בקרע צולבת פעיל או פריצת דיסק חריפה.',
        contraindications: ['acl', 'back']
    },
    {
        id: 'ex_legs_goblet_squat',
        name: 'סקוואט גובלט בעמידה רחבה עם דאמבל (Goblet Squat)',
        muscle: 'legs',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'MeIiIdhvXT4',
        image: '',
        notes: 'המשקולת צמודה לבית החזה ומאפשרת שמירה קלה על גב זקוף ומפחיתה עומס מגב תחתון. מעולה למתאמנים ביתיים, לנשים ולשיפור מוביליטי בירכיים.',
        contraindications: []
    },
    {
        id: 'ex_legs_box_squat',
        name: 'סקוואט קופסה או ספסל מבוקר (Box Squat)',
        muscle: 'legs',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'uL_zlg_yU10',
        image: '',
        notes: 'ישיבה מבוקרת לקופסה או ספסל בגובה 90 מעלות, עצירה קצרה לעצירת המומנטום ודחיפה חזרה. התאמה מעולה להריון 🤰 ולשיקום פציעות ברכיים ו-ACL.',
        contraindications: []
    },
    {
        id: 'ex_legs_leg_press',
        name: 'לחיצת רגליים במכונה (45° Leg Press Machine)',
        muscle: 'legs',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'IZxyjW7MPJQ',
        image: '',
        notes: 'מיקום כפות הרגליים במרכז הפלטה ברוחב כתפיים. חובה לשמור על אגן צמוד למשענת ולמנוע כניסת אגן לסיבוב לאחור (Butt Wink). אין לנעול ברכיים בסיום!',
        contraindications: ['acl']
    },
    {
        id: 'ex_legs_bulgarian_split_squat',
        name: 'ספליט סקוואט בולגרי עם משקולות יד (Bulgarian Split Squat)',
        muscle: 'legs',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות לכל רגל',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: '2C-uNgKwPLE',
        image: '',
        notes: 'רגל אחורית מוגבהת על ספסל. דגש עצום על ישבן (Gluteus Maximus) וארבע-ראשי. הטיה קלה לפנים של הטורסו מעבירה את עיקר העומס אל הישבן.',
        contraindications: ['acl']
    },
    {
        id: 'ex_legs_romanian_deadlift_db',
        name: 'דדליפט רומני עם דאמבלים (Dumbbell Romanian Deadlift - RDL)',
        muscle: 'legs',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'JCXUYuzwNrM',
        image: '',
        notes: 'תנועת ציר ירך (Hip Hinge) טהורה. דחיפת האגן לאחור תוך שמירה על שוקיים כמעט אנכיות ומתיחה מלאה של ההמסטרינגס. המשקולות גולשות צמודות לירך.',
        contraindications: []
    },
    {
        id: 'ex_legs_barbell_hip_thrust',
        name: 'היפ תראסט כנגד מוט על ספסל (Barbell Hip Thrust)',
        muscle: 'legs',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'SEdqd1n0cvg',
        image: '',
        notes: 'תרגיל הדגל לעיצוב ובניית מסת שריר בישבן. שכמות נשענות על ספסל, דחיפה עוצמתית דרך העקבים וכיווץ שיא בישבן במקביל לרצפה. סנטר מורכן לפנים.',
        contraindications: []
    },
    {
        id: 'ex_legs_glute_bridge_floor',
        name: 'גשר ישבן מבוקר על הרצפה (Floor Glute Bridge)',
        muscle: 'legs',
        equipment: 'bodyweight',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: '8bbE64NuDTU',
        image: '',
        notes: 'בטוח לחלוטין לכל מצב! מחזק את השרשרת האחורית ורצפת האגן ללא שום עומס על עמוד השדרה או הברכיים. מצוין להריון ולשיקום כאבי גב.',
        contraindications: []
    },
    {
        id: 'ex_legs_lying_leg_curl',
        name: 'כפיפת ברכיים במכונה בשכיבה (Lying Leg Curl)',
        muscle: 'legs',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'ELOCsoDSmrg',
        image: '',
        notes: 'בידוד ישיר של שרירי מיתר הברך (Hamstrings). שמירה על אגן מהודק למזרן ומניעת הקפצות, שליטה מלאה בשלב הירידה השלילי.',
        contraindications: ['pregnancy']
    },
    {
        id: 'ex_legs_seated_leg_curl',
        name: 'כפיפת ברכיים במכונה בישיבה (Seated Leg Curl)',
        muscle: 'legs',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'F488V659Y7g',
        image: '',
        notes: 'מנח ישיבה מייצר מתיחה מוקדמת של שרירי ההמסטרינגס ומאפשר גירוי היפרטרופי מעולה. מתאים יותר מגרסת השכיבה לנשים בהריון.',
        contraindications: []
    },
    {
        id: 'ex_legs_leg_extension',
        name: 'פשיטת ברכיים במכונה בישיבה (Leg Extension)',
        muscle: 'legs',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'YyvSfVjQeL0',
        image: '',
        notes: 'בידוד של הארבע-ראשי. אסור בהחלט בקרע ברצועה צולבת (ACL) עקב עומס גזירה קדמי חריג על הטיביה. עצירה לשנייה בכיווץ שיא.',
        contraindications: ['acl']
    },
    {
        id: 'ex_legs_seated_calf_raise',
        name: 'הרמת עקבים בישיבה במכונה (Seated Calf Raise)',
        muscle: 'legs',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'JbyjNymZOt0',
        image: '',
        notes: 'בידוד שריר הסולאוס (Soleus) של השוק הודות לכיפוף הברך ב-90 מעלות. מתיחה מלאה בתחתית ועצירה בכיווץ מלא למעלה.',
        contraindications: []
    },
    {
        id: 'ex_legs_standing_calf_raise',
        name: 'הרמת עקבים בעמידה במדרגה או משקולת (Standing Calf Raise)',
        muscle: 'legs',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'gwLzBJYoWlI',
        image: '',
        notes: 'ממקד את שריר התאומים (Gastrocnemius). ירידה איטית לעומק המתיחה מתחת לגובה המדרגה ועלייה עוצמתית על כריות הבהונות.',
        contraindications: []
    },
    {
        id: 'ex_legs_cable_glute_kickback',
        name: 'פשיטת ירך בכבלים לישבן (Cable Glute Kickback)',
        muscle: 'legs',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות לכל צד',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: '2s_uM4Vb28c',
        image: '',
        notes: 'רצועת קרסול מחוברת לפולי תחתון, הטיית גו של 30-45 מעלות. בעיטה מבוקרת לאחור ולמעלה עם כיווץ שיא של הישבן ללא קישות בגב.',
        contraindications: []
    },
    {
        id: 'ex_legs_hip_abduction_machine',
        name: 'הרחקת ירכיים בישיבה במכונה (Seated Hip Abduction)',
        muscle: 'legs',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'x_bKekCq-jE',
        image: '',
        notes: 'בידוד מצוין לשריר הישבן התיכון (Gluteus Medius). יציבה זקופה או הטיה קלה לפנים, פתיחה מקסימלית ועצירה מבוקרת.',
        contraindications: []
    },

    // ==========================================
    // 4. כתפיים (SHOULDERS)
    // ==========================================
    {
        id: 'ex_sh_seated_db_press',
        name: 'לחיצת כתפיים בישיבה עם דאמבלים (Seated DB Shoulder Press)',
        muscle: 'shoulders',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'qEwKCR5JCog',
        image: '',
        notes: 'מרפקים ממוקמים במישור השכמה (Scapular Plane - כ-30 מעלות לפנים מהגוף) ולא פרוסים לחלוטין לצדדים, למניעת שחיקה וחיכוך תת-אקרומיאלי בכתף.',
        contraindications: ['shoulders']
    },
    {
        id: 'ex_sh_standing_ohp',
        name: 'לחיצת כתפיים בעמידה כנגד מוט (Overhead Press - OHP)',
        muscle: 'shoulders',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: '2yjwXTZQDDI',
        image: '',
        notes: 'תרגיל כוח פונקציונלי קלאסי. בטן אסופה ואגן מכווץ למניעת הקשתת יתר בגב התחתון. לחיצה במסלול אנכי ישר תוך הכנסת הראש קדימה בסיום.',
        contraindications: ['back', 'shoulders']
    },
    {
        id: 'ex_sh_db_lateral_raise',
        name: 'הרחקת זרועות לצדדים במשקולות יד (Dumbbell Lateral Raise)',
        muscle: 'shoulders',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: '3VcKaXpzqRo',
        image: '',
        notes: 'בניית רוחב הכתפיים (דלתואיד אמצעי). הטיית גו קלה של 10 מעלות קדימה, הרמה עד גובה הכתפיים בלבד ללא שימוש בתנופה.',
        contraindications: []
    },
    {
        id: 'ex_sh_cable_lateral_raise',
        name: 'הרחקת זרוע לצד בכבלים מפולי תחתון (Cable Lateral Raise)',
        muscle: 'shoulders',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות לכל צד',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'PPrzBWZDOhA',
        image: '',
        notes: 'הכבל מספק מתח רציף לאורך כל טווח התנועה, במיוחד בתחילת התנועה שבה משקולת חופשית אינה מייצרת מומנט.',
        contraindications: []
    },
    {
        id: 'ex_sh_face_pull',
        name: 'פייס-פול בכבלים עם חבל לכתף אחורית ורוטטור (Face Pulls)',
        muscle: 'shoulders',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'rep-qVOkqgk',
        image: '',
        notes: 'תרגיל זהב בריאותי לכתפיים! מחזק את שריר הכתף האחורית (Rear Delt) והשרוול המסובב (Infraspinatus). משיכת החבל לגובה המצח תוך סיבוב חיצוני של הזרועות.',
        contraindications: []
    },
    {
        id: 'ex_sh_rear_delt_fly_db',
        name: 'הרחקת זרועות בהטיית גו לדלתואיד אחורי (Bent-Over DB Rear Delt Fly)',
        muscle: 'shoulders',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: '0GSu6Z-Oj7U',
        image: '',
        notes: 'הטיית גב של 45-60 מעלות עם גב ישר. הרמת המרפקים לצדדים תוך התמקדות בכתף האחורית ללא נעילת שכמות אגרסיבית.',
        contraindications: []
    },
    {
        id: 'ex_sh_reverse_pec_deck',
        name: 'פרפר הפוך במכונה (Reverse Pec Deck Machine)',
        muscle: 'shoulders',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: '5YPe_uYwZ6I',
        image: '',
        notes: 'בידוד נוח ויעיל לכתף האחורית ולטרפז האמצעי. מנח חזה צמוד למשענת, תנועה מבוקרת ללא משיכה פתאומית.',
        contraindications: []
    },
    {
        id: 'ex_sh_arnold_press',
        name: 'לחיצת ארנולד במשקולות יד (Arnold Press)',
        muscle: 'shoulders',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: '3ml7BH7mNwQ',
        image: '',
        notes: 'שילוב של סיבוב זרוע (Pronation to Supination) לאורך הלחיצה לגיוס סיבי הדלתואיד הקדמי והאמצעי.',
        contraindications: ['shoulders']
    },
    {
        id: 'ex_sh_db_front_raise',
        name: 'הרמת זרועות לפנים במשקולות יד (Dumbbell Front Raise)',
        muscle: 'shoulders',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: '-t7fuZ453_0',
        image: '',
        notes: 'בידוד הדלתואיד הקדמי. הרמה עד גובה עיניים בקצב מבוקר, מניעת הטיית הגו לאחור.',
        contraindications: []
    },

    // ==========================================
    // 5. ידיים (ARMS)
    // ==========================================
    {
        id: 'ex_arms_bicep_ez_bar',
        name: 'כפיפת מרפקים בעמידה עם מוט דאבליו (Standing EZ-Bar Curl)',
        muscle: 'arms',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'ykJmrZ5v0Oo',
        image: '',
        notes: 'מוט ה-EZ מפחית עומס פיתול ממפרק כף היד. מרפקים צמודים למותניים ללא תנועת מומנטום קדימה ואחורה.',
        contraindications: []
    },
    {
        id: 'ex_arms_db_hammer_curl',
        name: 'כפיפת מרפקים בסגנון פטישים (Dumbbell Hammer Curls)',
        muscle: 'arms',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'zC3nLlEvin4',
        image: '',
        notes: 'אחיזה ניטרלית (כפות ידיים פונות זו לזו) המפתחת את שריר הברכיאליס (Brachialis) ושרירי האמה לעובי זרוע מירבי.',
        contraindications: []
    },
    {
        id: 'ex_arms_incline_db_curl',
        name: 'כפיפת מרפקים במשקולות בספה בשיפוע (Incline DB Curl)',
        muscle: 'arms',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'soxrZlIl35U',
        image: '',
        notes: 'הזרוע נמשכת לאחור ביחס לטורסו, מה שמייצר מתיחה עמוקה של הראש הארוך (Long Head) של הבייספס.',
        contraindications: []
    },
    {
        id: 'ex_arms_preacher_curl',
        name: 'כפיפת מרפקים בספת כמר (Preacher Curl)',
        muscle: 'arms',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'GKGc_Xncy58',
        image: '',
        notes: 'בידוד אבסולוטי המונע כל תנופה או מעורבות שרירי עזר. עצירה לפני נעילה מלאה בתחתית להגנה על גיד הבייספס.',
        contraindications: []
    },
    {
        id: 'ex_arms_tricep_rope_pushdown',
        name: 'פשיטת מרפקים בפולי עליון עם חבל (Tricep Rope Pushdown)',
        muscle: 'arms',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: '2-LAMcpzODU',
        image: '',
        notes: 'מרפקים נעולים לצידי הגוף, פתיחת קצות החבל החוצה בתחתית לכיווץ מקסימלי של הראש הצידי והמדיאלי של הטרייספס.',
        contraindications: []
    },
    {
        id: 'ex_arms_skull_crushers',
        name: 'לחיצה צרפתית בשכיבה עם מוט EZ (EZ-Bar Skull Crushers)',
        muscle: 'arms',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'd_KZxkY_0aw',
        image: '',
        notes: 'הורדת המוט לכיוון המצח או מעבר לקודקוד הראש למתיחה של הראש הארוך של הטרייספס. שמירה על מרפקים יציבים.',
        contraindications: ['pregnancy']
    },
    {
        id: 'ex_arms_overhead_db_tricep',
        name: 'פשיטת מרפקים עם משקולת מעל הראש בישיבה (Seated Overhead DB Extension)',
        muscle: 'arms',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: '_gsUokN_Mgg',
        image: '',
        notes: 'מתיחה מירבית של הראש הארוך של היד האחורית. ישיבה עם גב זקוף ובטן מוחזקת.',
        contraindications: ['shoulders']
    },
    {
        id: 'ex_arms_bench_dips',
        name: 'פשיטת מרפקים כנגד ספסל (Bench Dips)',
        muscle: 'arms',
        equipment: 'bodyweight',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: '0326dy_-CzM',
        image: '',
        notes: 'אימון מצוין לטרייספס בבית ללא ציוד. ירידה עד 90 מעלות במרפק, גב צמוד לקו הספסל.',
        contraindications: ['shoulders']
    },
    {
        id: 'ex_arms_close_grip_bench',
        name: 'לחיצת חזה באחיזה צרה לטרייספס (Close-Grip Bench Press)',
        muscle: 'arms',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'nEF0bv2FW94',
        image: '',
        notes: 'אחיזה ברוחב כתפיים (לא צרה מדי למניעת כאבי מפרק כף היד), מרפקים צמודים לגוף בדחיפה.',
        contraindications: ['pregnancy']
    },
    {
        id: 'ex_arms_cable_bicep_curl',
        name: 'כפיפת מרפקים בכבלים מפולי תחתון (Cable Bicep Curl)',
        muscle: 'arms',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'rU_gPfg_72U',
        image: '',
        notes: 'מתח קבוע לכל אורך טווח התנועה. עמידה יציבה וכיווץ רציף של שריר הזרוע הדו-ראשי.',
        contraindications: []
    },

    // ==========================================
    // 6. בטן וליבה (CORE & ABS)
    // ==========================================
    {
        id: 'ex_core_plank',
        name: 'פלאנק סטטי מבוקר (Core Plank)',
        muscle: 'core',
        equipment: 'bodyweight',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות (או 45-60 שניות)',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'ASdvN_XEl_c',
        image: '',
        notes: 'שמירה על גוף בקו ישר אחד: עקבים, ישבן, שכמות ועורף. איסוף אקטיבי של הבטן (Bracing) ומניעת שקיעת אגן כלפי מטה.',
        contraindications: []
    },
    {
        id: 'ex_core_side_plank',
        name: 'פלאנק צידי לייצוב אלכסונים וירך (Side Plank)',
        muscle: 'core',
        equipment: 'bodyweight',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות לכל צד',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'wqzrb67Dwf8',
        image: '',
        notes: 'חיזוק שריר ה-Quadratus Lumborum ושרירי הליבה הצדיים. שמירה על מרפק ישירות מתחת לקו הכתף ואגן מורם.',
        contraindications: []
    },
    {
        id: 'ex_core_deadbug',
        name: 'דד-באג לייצוב עמוד שדרה ומניעת הקשתה (Dead Bug)',
        muscle: 'core',
        equipment: 'bodyweight',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות לכל צד',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'g_by6_AIdc4',
        image: '',
        notes: 'שכיבה על הגב תוך הצמדת הגב התחתון למזרן (Posterior Pelvic Tilt). הורדת יד ורגל נגדית ללא ניתוק הגב התחתון מהרצפה.',
        contraindications: ['pregnancy']
    },
    {
        id: 'ex_core_hanging_leg_raise',
        name: 'הרמת ברכיים או רגליים בתלייה על מתח (Hanging Leg Raise)',
        muscle: 'core',
        equipment: 'bodyweight',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'hdng3Nm1x_E',
        image: '',
        notes: 'עבודה על שריר הבטן הישר התחתון וכופפי הירך. גלגול האגן מעלה לעבר בית החזה למניעת נדנוד של הגוף.',
        contraindications: ['pregnancy', 'back']
    },
    {
        id: 'ex_core_cable_woodchopper',
        name: 'חטיבת עצים בכבלים לאלכסונים (Cable Woodchopper)',
        muscle: 'core',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות לכל צד',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'pAplQXk3dkU',
        image: '',
        notes: 'תנועה אלכסונית פונקציונלית של הטורסו. סיבוב מבוקר דרך הירך ושרירי הבטן האלכסוניים ללא סיבוב אגרסיבי של הגב התחתון.',
        contraindications: ['back']
    },
    {
        id: 'ex_core_ab_wheel',
        name: 'גלגל בטן מבוקר (Ab Wheel Rollout)',
        muscle: 'core',
        equipment: 'home',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: 'rqiTPdK1cWg',
        image: '',
        notes: 'תרגיל אנטי-אקסטנשן עוצמתי. גלגול קדימה תוך שמירה על גב מעוגל קלות ואגן מוכנס. אסור למי שסובל מפריצות דיסק פעילות.',
        contraindications: ['back', 'pregnancy']
    },
    {
        id: 'ex_core_cable_crunch',
        name: 'כפיפות בטן בכבלים בברכיים (Kneeling Cable Crunch)',
        muscle: 'core',
        equipment: 'gym',
        defaultSetsReps: '2-3 סטים x 6-12 חזרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: '2fORO4ngQp0',
        image: '',
        notes: 'תנועת כפיפה של עמוד השדרה על ידי כיווץ הישר-בטני ולא תנועת ירך. אסור בהריון ובפריצת דיסק גבית!',
        contraindications: ['back', 'pregnancy']
    },
    {
        id: 'ex_core_diaphragmatic_pelvic',
        name: 'נשימה סרעפתית והידוק רצפת אגן בעמידה או בישיבה (Pelvic & Diaphragmatic Core)',
        muscle: 'core',
        equipment: 'bodyweight',
        defaultSetsReps: '2-3 סטים x 6-12 נשימות מבוקרות',
        rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: '_s_N5s7vQ_s',
        image: '',
        notes: 'פרוטוקול זהב לנשים בהריון ואחרי לידה! שאיפה לבטן תוך הרפיית רצפת האגן ונשיפה איטית תוך איסוף עדין של הבטן התחתונה ורצפת האגן.',
        contraindications: []
    }
];

const BANK_STORAGE_KEY = 'gino_exercise_bank';
const BANK_VERSION_KEY = 'gino_bank_v9_clean_bidi_typos';

function getExerciseBank() {
    let list = DEFAULT_EXERCISE_BANK;
    try {
        const isLoaded = localStorage.getItem(BANK_VERSION_KEY);
        if (!isLoaded) {
            localStorage.setItem(BANK_STORAGE_KEY, JSON.stringify(DEFAULT_EXERCISE_BANK));
            localStorage.setItem(BANK_VERSION_KEY, 'true');
            list = DEFAULT_EXERCISE_BANK;
        } else {
            const saved = localStorage.getItem(BANK_STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) list = parsed;
            }
        }
    } catch (e) {
        list = DEFAULT_EXERCISE_BANK;
    }
    return (list || DEFAULT_EXERCISE_BANK).map(ex => ensureExerciseStages(ex));
}

// ============================================================================
// DYNAMIC THEME SWITCHING (PINK FOR WOMAN, GREEN FOR MAN)
// ============================================================================
function setTheme(theme) {
    state.theme = theme;
    if (theme === 'pink') {
        document.body.classList.add('theme-pink');
    } else {
        document.body.classList.remove('theme-pink');
    }
}

function adaptTextToGender(text, gender) {
    if (!text || typeof text !== 'string') return text;
    if (gender !== 'female') return text;

    const hebWord = (w) => new RegExp('(?<![\\u0590-\\u05FF])' + w + '(?![\\u0590-\\u05FF])', 'g');

    return text
        .replace(/ספר לנו עליך/g, 'ספרי לנו עלייך')
        .replace(/ספר לנו/g, 'ספרי לנו')
        .replace(/שאתה רוצה/g, 'שאת רוצה')
        .replace(/שאתה לא נשאר/g, 'שאת לא נשארת')
        .replace(/שאתה לא/g, 'שאת לא')
        .replace(/שאתה/g, 'שאת')
        .replace(/איך מוודאים שאתה לא נתקע/g, 'איך מוודאים שאת לא נתקעת')
        .replace(/שאתה לא נתקע/g, 'שאת לא נתקעת')
        .replace(/אתה לא נתקע/g, 'את לא נתקעת')
        .replace(/אתה לא/g, 'את לא')
        .replace(/תלוי באוויר/g, 'תלויה באוויר')
        .replace(/אני לא יודע/g, 'אני לא יודעת')
        .replace(/אני לא מתקדם/g, 'אני לא מתקדמת')
        .replace(/למה אני לא מתקדם/g, 'למה אני לא מתקדמת')
        .replace(hebWord('מתאמן פעיל'), 'מתאמנת פעילה')
        .replace(hebWord('מתאמן'), 'מתאמנת')
        .replace(hebWord('מתחיל'), 'מתחילה')
        .replace(hebWord('מתקדם'), 'מתקדמת')
        .replace(/פרט את/g, 'פרטי את')
        .replace(/פרט כאן/g, 'פרטי כאן')
        .replace(/פרט בעצמך/g, 'פרטי בעצמך')
        .replace(/הגדר בעצמך/g, 'הגדירי בעצמך')
        .replace(hebWord('תשאף'), 'תשאפי')
        .replace(/רשום כל אימון/g, 'רשמי כל אימון')
        .replace(hebWord('רשום'), 'רשמי')
        .replace(/הקפד על/g, 'הקפידי על')
        .replace(hebWord('הקפד'), 'הקפידי')
        .replace(/התמקד בשלב/g, 'התמקדי בשלב')
        .replace(hebWord('התמקד'), 'התמקדי')
        .replace(/שים לב/g, 'שימי לב')
        .replace(/שמור על/g, 'שמרי על')
        .replace(hebWord('שמור'), 'שמרי')
        .replace(hebWord('וודא'), 'וודאי')
        .replace(/קבע איתי/g, 'קבעי איתי')
        .replace(/הפק לי/g, 'הפיקי לי')
        .replace(/המשך לשלב הבא/g, 'המשיכי לשלב הבא')
        .replace(/השלם אבחון ועבור/g, 'השלימי אבחון ועברי')
        .replace(/העתק תוכנית/g, 'העתיקי תוכנית')
        .replace(/אני מאשר\/ת/g, 'אני מאשרת')
        .replace(/\*שם המתאמן:\*/g, '*שם המתאמנת:*')
        .replace(/מתאמן\/ת:/g, 'מתאמנת:')
        .replace(/מתאמן:/g, 'מתאמנת:');
}

function updateQuestionnaireGenderText(gender) {
    applyQuestionnaireConfigToDOM(gender);
}

function selectGender(gender) {
    state.answers.gender = gender;
    const maleBtn = document.getElementById('gender-male-btn');
    const femaleBtn = document.getElementById('gender-female-btn');
    const errorEl = document.getElementById('gender-error');
    if (errorEl) errorEl.classList.add('hidden');

    const pregWrapper = document.getElementById('wrapper-pregnancy-question');

    if (gender === 'female') {
        if (femaleBtn) femaleBtn.classList.add('selected-female');
        if (maleBtn) maleBtn.classList.remove('selected-male');
        setTheme('pink');
        if (pregWrapper) {
            pregWrapper.classList.remove('hidden');
        }
    } else {
        if (maleBtn) maleBtn.classList.add('selected-male');
        if (femaleBtn) femaleBtn.classList.remove('selected-female');
        setTheme('green');
        if (pregWrapper) {
            pregWrapper.classList.add('hidden');
        }
        state.answers.isPregnant = 'no';
        state.answers.pregnancyTrimester = '';
        state.answers.pregnancyNotes = '';
        const pregErr = document.getElementById('pregnancy-error');
        if (pregErr) pregErr.classList.add('hidden');
        const noBtn = document.getElementById('pregnancy-no-btn');
        const yesBtn = document.getElementById('pregnancy-yes-btn');
        if (noBtn) noBtn.classList.remove('selected');
        if (yesBtn) yesBtn.classList.remove('selected');
        const pregDetails = document.getElementById('wrapper-pregnancy-details');
        if (pregDetails) pregDetails.classList.add('hidden');
        const notesInput = document.getElementById('input-pregnancy-notes');
        if (notesInput) notesInput.value = '';
        document.querySelectorAll('.trimester-btn').forEach(b => b.classList.remove('selected'));
    }
    updateQuestionnaireGenderText(gender);
    recordStepProgress(state.currentStep);
}

function selectPregnancy(val) {
    state.answers.isPregnant = val;
    const noBtn = document.getElementById('pregnancy-no-btn');
    const yesBtn = document.getElementById('pregnancy-yes-btn');
    const details = document.getElementById('wrapper-pregnancy-details');
    const err = document.getElementById('pregnancy-error');
    if (err) err.classList.add('hidden');

    if (val === 'yes') {
        if (yesBtn) yesBtn.classList.add('selected');
        if (noBtn) noBtn.classList.remove('selected');
        if (details) details.classList.remove('hidden');
    } else {
        if (noBtn) noBtn.classList.add('selected');
        if (yesBtn) yesBtn.classList.remove('selected');
        if (details) details.classList.add('hidden');
        state.answers.pregnancyTrimester = '';
        state.answers.pregnancyNotes = '';
        const notesInput = document.getElementById('input-pregnancy-notes');
        if (notesInput) notesInput.value = '';
        document.querySelectorAll('.trimester-btn').forEach(b => b.classList.remove('selected'));
    }
    recordStepProgress(state.currentStep);
}

function selectPregnancyTrimester(trimester) {
    state.answers.pregnancyTrimester = trimester;
    document.querySelectorAll('.trimester-btn').forEach(b => {
        if (b.getAttribute('data-trimester') === trimester) {
            b.classList.add('selected');
        } else {
            b.classList.remove('selected');
        }
    });
    recordStepProgress(state.currentStep);
}

// ============================================================================
// MASTER QUESTIONNAIRE CMS CONFIG (Full Admin Control Over Questions & Options)
// ============================================================================

const DEFAULT_QUESTIONNAIRE_CONFIG_MALE = {
    steps: {
        step1: {
            title: 'פרופיל אישי ומדדי גוף',
            subtitle: 'ספר לנו עליך ועל שגרת היום-יום שלך (ניתן לפרט בכל שאלה).'
        },
        step2: {
            title: 'ניסיון, פציעות ומבנה אימונים',
            subtitle: 'במידה וקיימת מגבלה או פציעה, נפנה אותך לשיחת ייעוץ אישית ומקצועית.'
        },
        step3: {
            title: 'האתגר המרכזי שלך',
            subtitle: 'מה הכי תוקע אותך מלהשיג את התוצאות שאתה רוצה?'
        },
        step4: {
            title: 'האבחון הושלם! ⚡',
            subtitle: 'לאן לשלוח לך את התוצאות וההתאמה האישית?'
        }
    },
    buttons: {
        step1Next: 'המשך לשלב הבא',
        step2Next: 'המשך לשלב הבא',
        step3Next: 'השלם אבחון ועבור לתוצאות',
        step4Submit: 'הפק לי תוכנית אימונים מותאמת אישית ⚡',
        copyProgram: 'העתק תוכנית אימונים מלאה 📋',
        leadCompliance: 'אני מאשר קבלת תוכן מקצועי, עדכונים והצעות שיווקיות מ-Coach Gino בוואטסאפ ובאינסטגרם בהתאם לתנאי השימוש ומדיניות הפרטיות.'
    },
    genderQuestion: {
        title: '1. הגדרת מגדר:',
        maleLabel: 'גבר',
        femaleLabel: 'אישה'
    },
    pregnancyQuestion: {
        title: 'האם את כרגע בהריון או לאחר לידה?',
        noLabel: 'לא',
        yesLabel: 'כן, אני בהריון 🤰'
    },
    bodyMetricsQuestion: {
        title: '2. גיל ומדדי גוף (גובה ומשקל):',
        ageLabel: 'גיל:',
        heightLabel: 'גובה (ס"מ):',
        weightLabel: 'משקל (ק"ג):',
        notePlaceholder: 'הערה או דגש אישי שלך לגבי הגיל, הגובה או המצב הגופני (אופציונלי)...'
    },
    activityQuestion: {
        title: '3. אופי התעסוקה ורמת הפעילות היומית:',
        options: [
            { id: 'office', title: 'עבודה משרדית / סטודנט / ישיבה ממושכת לאורך היום', desc: 'מרבית שעות היום בלימודים או בישיבה מול מסך, מעט מאוד תנועה יומיומית' },
            { id: 'light', title: 'עבודה בתנועה קלה / עמידה', desc: 'עבודה בעמידה, הליכה מתונה (מוכרים, מורים וכו\')' },
            { id: 'heavy', title: 'עבודה פיזית מאומצת', desc: 'הרמת משקלים, עבודת כפיים, תנועה מרובה ללא הפסקה' }
        ],
        otherLabel: 'אחר (הגדר בעצמך)',
        otherPlaceholder: 'פרט את אופי העבודה והפעילות שלך...',
        notePlaceholder: 'הערה או דגש אישי נוסף לגבי העבודה ושגרת היום שלך (אופציונלי)...'
    },
    goalQuestion: {
        title: '4. מטרת העל שלך:',
        options: [
            { id: 'mass', title: 'עלייה במסת שריר (מסה נקייה)' },
            { id: 'shred', title: 'חיטוב וירידה באחוזי שומן' },
            { id: 'strength', title: 'שיפור כוח וביצועים ספורטיביים' },
            { id: 'recomp', title: 'חיטוב ושינוי הרכב הגוף (Recomposition)' }
        ],
        otherLabel: 'אחר (הגדר בעצמך)',
        otherPlaceholder: 'פרט את מטרת העל המדויקת שלך (למשל: שיקום פציעה, הכנה למבחן כושר)...',
        notePlaceholder: 'הערה או דגש אישי נוסף לגבי המטרה שלך (אופציונלי)...'
    },
    experienceQuestion: {
        title: '5. רמת ניסיון באימוני כוח:',
        options: [
            { id: 'beginner', title: 'מתחיל', desc: 'פחות מ-6 חודשים' },
            { id: 'active', title: 'מתאמן פעיל', desc: 'חצי שנה עד שנתיים' },
            { id: 'advanced', title: 'מתקדם', desc: 'מעל שנתיים' }
        ],
        otherLabel: 'אחר',
        otherSub: 'פרט בעצמך',
        otherPlaceholder: 'פרט את הרקע והניסיון שלך באימונים...',
        notePlaceholder: 'הערה אישית לגבי ניסיון קודם או הפסקות ארוכות באימונים...'
    },
    frequencyQuestion: {
        title: '6. תדירות אימונים שבועית מועדפת:',
        options: [
            { id: '2-3', title: '2-3 פעמים בשבוע', desc: '' },
            { id: '4+', title: '4+ ימים בשבוע', desc: '' }
        ],
        otherLabel: 'אחר',
        otherPlaceholder: 'פרט את ימי האימון או האילוצים שלך...',
        notePlaceholder: 'הערה אישית לגבי זמני אימון או התאוששות...'
    },
    injuriesQuestion: {
        title: '7. פציעות קודמות, רגישויות או מגבלות תנועה:',
        warning: 'פציעות דורשות התייחסות מיוחדת כדי למנוע החמרה ונזק',
        options: [
            { id: 'back', label: 'גב תחתון / פריצת דיסק' },
            { id: 'shoulders', label: 'כתפיים / שרוול מסובב' },
            { id: 'knees', label: 'ברכיים / רצועות / צולבת' },
            { id: 'elbows', label: 'מרפקים / שורש כף יד' }
        ],
        noneLabel: 'אין מגבלות מיוחדות 👌',
        detailLabel: 'פירוט מדויק של הפציעה או המגבלה:',
        detailPlaceholder: 'פרט כאן במדויק: לדוגמה \'קרע ברצועה צולבת בברך\', \'קרע במיניסקוס\', \'פריצת דיסק L4-L5\', ניתוחים קודמים או הנחיות מרופא...',
        notePlaceholder: 'הערה אישית נוספת לגבי תנועות שגורמות לך לכאב (אופציונלי)...'
    },
    equipmentQuestion: {
        title: '8. ציוד זמין לאימון:',
        options: [
            { id: 'gym', title: 'חדר כושר מלא ומאובזר' },
            { id: 'bodyweight', title: 'משקל גוף בלבד (קליסטניקס)' }
        ],
        otherLabel: 'אחר (פארק כושר, TRX, גומיות וכו\')',
        otherPlaceholder: 'פרט את הציוד המדויק שיש ברשותך...',
        notePlaceholder: 'הערה אישית נוספת לגבי הציוד...'
    },
    challengeQuestion: {
        title: '9. הקושי הכי גדול שלך כיום באימונים ובתוכניות קודמות:',
        options: [
            { id: 'load', text: '"אני לא יודע איך לנהל עומסים ולהתקדם במשקלים בלי להיתקע"' },
            { id: 'consistency', text: '"קושי בהתמדה וביצירת שגרה קבועה"' },
            { id: 'technique', text: '"חוסר ביטחון בטכניקה ובבחירת התרגילים הנכונים"' },
            { id: 'nutrition', text: '"קושי לשלב נכון בין התזונה לתוכנית האימונים"' },
            { id: 'results', text: '"איטיות בתוצאות וחוסר הבנה למה אני לא מתקדם"' }
        ],
        otherLabel: 'אחר (פרט את האתגר שלך במילים שלך)',
        otherPlaceholder: 'פרט כאן את האתגר הייחודי שמעכב אותך...',
        notePlaceholder: 'מה עוד חשוב ש-Coach Gino יידע על הקושי או המטרות שלך? (אופציונלי)...'
    }
};

const DEFAULT_QUESTIONNAIRE_CONFIG_FEMALE = {
    steps: {
        step1: {
            title: 'פרופיל אישי ומדדי גוף',
            subtitle: 'ספרי לנו עלייך ועל שגרת היום-יום שלך (ניתן לפרט בכל שאלה).'
        },
        step2: {
            title: 'ניסיון, פציעות ומבנה אימונים',
            subtitle: 'במידה וקיימת מגבלה או פציעה, נפנה אותך לשיחת ייעוץ אישית ומקצועית.'
        },
        step3: {
            title: 'האתגר המרכזי שלך',
            subtitle: 'מה הכי תוקע אותך מלהשיג את התוצאות שאת רוצה?'
        },
        step4: {
            title: 'האבחון הושלם! ⚡',
            subtitle: 'לאן לשלוח לך את התוצאות וההתאמה האישית?'
        }
    },
    buttons: {
        step1Next: 'המשיכי לשלב הבא',
        step2Next: 'המשיכי לשלב הבא',
        step3Next: 'השלימי אבחון ועברי לתוצאות',
        step4Submit: 'הפיקי לי תוכנית אימונים מותאמת אישית ⚡',
        copyProgram: 'העתיקי תוכנית אימונים מלאה 📋',
        leadCompliance: 'אני מאשרת קבלת תוכן מקצועי, עדכונים והצעות שיווקיות מ-Coach Gino בוואטסאפ ובאינסטגרם בהתאם לתנאי השימוש ומדיניות הפרטיות.'
    },
    genderQuestion: {
        title: '1. הגדרת מגדר:',
        maleLabel: 'גבר',
        femaleLabel: 'אישה'
    },
    pregnancyQuestion: {
        title: 'האם את כרגע בהריון או לאחר לידה?',
        noLabel: 'לא',
        yesLabel: 'כן, אני בהריון 🤰'
    },
    bodyMetricsQuestion: {
        title: '2. גיל ומדדי גוף (גובה ומשקל):',
        ageLabel: 'גיל:',
        heightLabel: 'גובה (ס"מ):',
        weightLabel: 'משקל (ק"ג):',
        notePlaceholder: 'הערה או דגש אישי שלך לגבי הגיל, הגובה או המצב הגופני (אופציונלי)...'
    },
    activityQuestion: {
        title: '3. אופי התעסוקה ורמת הפעילות היומית:',
        options: [
            { id: 'office', title: 'עבודה משרדית / סטודנטית / ישיבה ממושכת לאורך היום', desc: 'מרבית שעות היום בלימודים או בישיבה מול מסך, מעט מאוד תנועה יומיומית' },
            { id: 'light', title: 'עבודה בתנועה קלה / עמידה', desc: 'עבודה בעמידה, הליכה מתונה (מוכרות, מורות וכו\')' },
            { id: 'heavy', title: 'עבודה פיזית מאומצת', desc: 'הרמת משקלים, עבודת כפיים, תנועה מרובה ללא הפסקה' }
        ],
        otherLabel: 'אחר (הגדירי בעצמך)',
        otherPlaceholder: 'פרטי את אופי העבודה והפעילות שלך...',
        notePlaceholder: 'הערה או דגש אישי נוסף לגבי העבודה ושגרת היום שלך (אופציונלי)...'
    },
    goalQuestion: {
        title: '4. מטרת העל שלך:',
        options: [
            { id: 'mass', title: 'עלייה במסת שריר (חיטוב ומיצוק / מסה נקייה)' },
            { id: 'shred', title: 'חיטוב וירידה באחוזי שומן' },
            { id: 'strength', title: 'שיפור כוח וביצועים ספורטיביים' },
            { id: 'recomp', title: 'חיטוב ושינוי הרכב הגוף (Recomposition)' }
        ],
        otherLabel: 'אחר (הגדירי בעצמך)',
        otherPlaceholder: 'פרטי את מטרת העל המדויקת שלך (למשל: שיקום פציעה, הכנה למבחן כושר)...',
        notePlaceholder: 'הערה או דגש אישי נוסף לגבי המטרה שלך (אופציונלי)...'
    },
    experienceQuestion: {
        title: '5. רמת ניסיון באימוני כוח:',
        options: [
            { id: 'beginner', title: 'מתחילה', desc: 'פחות מ-6 חודשים' },
            { id: 'active', title: 'מתאמנת פעילה', desc: 'חצי שנה עד שנתיים' },
            { id: 'advanced', title: 'מתקדמת', desc: 'מעל שנתיים' }
        ],
        otherLabel: 'אחר',
        otherSub: 'פרטי בעצמך',
        otherPlaceholder: 'פרטי את הרקע והניסיון שלך באימונים...',
        notePlaceholder: 'הערה אישית לגבי ניסיון קודם או הפסקות ארוכות באימונים...'
    },
    frequencyQuestion: {
        title: '6. תדירות אימונים שבועית מועדפת:',
        options: [
            { id: '2-3', title: '2-3 פעמים בשבוע', desc: '' },
            { id: '4+', title: '4+ ימים בשבוע', desc: '' }
        ],
        otherLabel: 'אחר',
        otherPlaceholder: 'פרטי את ימי האימון או האילוצים שלך...',
        notePlaceholder: 'הערה אישית לגבי זמני אימון או התאוששות...'
    },
    injuriesQuestion: {
        title: '7. פציעות קודמות, רגישויות או מגבלות תנועה:',
        warning: 'פציעות דורשות התייחסות מיוחדת כדי למנוע החמרה ונזק',
        options: [
            { id: 'back', label: 'גב תחתון / פריצת דיסק' },
            { id: 'shoulders', label: 'כתפיים / שרוול מסובב' },
            { id: 'knees', label: 'ברכיים / רצועות / צולבת' },
            { id: 'elbows', label: 'מרפקים / שורש כף יד' }
        ],
        noneLabel: 'אין מגבלות מיוחדות 👌',
        detailLabel: 'פירוט מדויק של הפציעה או המגבלה:',
        detailPlaceholder: 'פרטי כאן במדויק: לדוגמה \'קרע ברצועה צולבת בברך\', \'קרע במיניסקוס\', \'פריצת דיסק L4-L5\', ניתוחים קודמים או הנחיות מרופא...',
        notePlaceholder: 'הערה אישית נוספת לגבי תנועות שגורמות לך לכאב (אופציונלי)...'
    },
    equipmentQuestion: {
        title: '8. ציוד זמין לאימון:',
        options: [
            { id: 'gym', title: 'חדר כושר מלא ומאובזר' },
            { id: 'bodyweight', title: 'משקל גוף בלבד (קליסטניקס)' }
        ],
        otherLabel: 'אחר (פארק כושר, TRX, גומיות וכו\')',
        otherPlaceholder: 'פרטי את הציוד המדויק שיש ברשותך...',
        notePlaceholder: 'הערה אישית נוספת לגבי הציוד...'
    },
    challengeQuestion: {
        title: '9. הקושי הכי גדול שלך כיום באימונים ובתוכניות קודמות:',
        options: [
            { id: 'load', text: '"אני לא יודעת איך לנהל עומסים ולהתקדם במשקלים בלי להיתקע"' },
            { id: 'consistency', text: '"קושי בהתמדה וביצירת שגרה קבועה"' },
            { id: 'technique', text: '"חוסר ביטחון בטכניקה ובבחירת התרגילים הנכונים"' },
            { id: 'nutrition', text: '"קושי לשלב נכון בין התזונה לתוכנית האימונים"' },
            { id: 'results', text: '"איטיות בתוצאות וחוסר הבנה למה אני לא מתקדמת"' }
        ],
        otherLabel: 'אחר (פרטי את האתגר שלך במילים שלך)',
        otherPlaceholder: 'פרטי כאן את האתגר הייחודי שמעכב אותך...',
        notePlaceholder: 'מה עוד חשוב ש-Coach Gino יידע על הקושי או המטרות שלך? (אופציונלי)...'
    }
};

const DEFAULT_QUESTIONNAIRE_CONFIG = {
    male: DEFAULT_QUESTIONNAIRE_CONFIG_MALE,
    female: DEFAULT_QUESTIONNAIRE_CONFIG_FEMALE
};

let questionnaireConfig = getQuestionnaireConfig();

function getQuestionnaireConfig(gender) {
    const targetGender = (gender === 'female' || (typeof state !== 'undefined' && state && state.answers && state.answers.gender === 'female')) ? 'female' : 'male';
    const baseDefault = targetGender === 'female' ? DEFAULT_QUESTIONNAIRE_CONFIG_FEMALE : DEFAULT_QUESTIONNAIRE_CONFIG_MALE;
    function sanitizeConfig(cfg) {
        if (cfg && cfg.frequencyQuestion && Array.isArray(cfg.frequencyQuestion.options)) {
            const opt23 = cfg.frequencyQuestion.options.find(o => o.id === '2-3');
            const opt4Plus = cfg.frequencyQuestion.options.find(o => o.id === '4+' || o.id === '4' || o.id === '5-6');
            cfg.frequencyQuestion.options = [
                { id: '2-3', title: opt23?.title || '2-3 פעמים בשבוע', desc: '' },
                { id: '4+', title: opt4Plus?.title || '4+ ימים בשבוע', desc: '' }
            ];
        }
        if (cfg && cfg.equipmentQuestion && Array.isArray(cfg.equipmentQuestion.options)) {
            const optGym = cfg.equipmentQuestion.options.find(o => o.id === 'gym');
            const optBw = cfg.equipmentQuestion.options.find(o => o.id === 'bodyweight');
            cfg.equipmentQuestion.options = [
                { id: 'gym', title: optGym?.title || 'חדר כושר מלא ומאובזר' },
                { id: 'bodyweight', title: optBw?.title || 'משקל גוף בלבד (קליסטניקס)' }
            ];
        }
        return cfg;
    }

    try {
        const QC_VERSION_KEY = 'gino_qc_v7_two_equipment_options';
        if (!localStorage.getItem(QC_VERSION_KEY)) {
            localStorage.removeItem('gino_questionnaire_config');
            localStorage.setItem(QC_VERSION_KEY, 'true');
        }
        const saved = localStorage.getItem('gino_questionnaire_config');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed.male || parsed.female) {
                return sanitizeConfig(Object.assign({}, baseDefault, parsed[targetGender] || {}));
            }
            // Backwards compatibility with old flat config: treat as male
            if (targetGender === 'female') {
                return sanitizeConfig(JSON.parse(JSON.stringify(DEFAULT_QUESTIONNAIRE_CONFIG_FEMALE)));
            } else {
                return sanitizeConfig(Object.assign({}, DEFAULT_QUESTIONNAIRE_CONFIG_MALE, parsed));
            }
        }
    } catch (e) {}
    return sanitizeConfig(JSON.parse(JSON.stringify(baseDefault)));
}

function applyQuestionnaireConfigToDOM(gender) {
    const targetGender = gender ? (gender === 'female' ? 'female' : 'male') : ((typeof state !== 'undefined' && state && state.answers && state.answers.gender === 'female') ? 'female' : 'male');
    questionnaireConfig = getQuestionnaireConfig(targetGender);
    const cfg = questionnaireConfig;
    const isFemale = targetGender === 'female';

    const setTxt = (id, txt) => {
        const el = document.getElementById(id);
        if (el && txt !== undefined) el.innerText = txt;
    };
    const setPlaceholder = (id, pl) => {
        const el = document.getElementById(id);
        if (el && pl !== undefined) el.placeholder = pl;
    };

    // Step 1
    if (cfg.steps && cfg.steps.step1) {
        setTxt('step-1-title', cfg.steps.step1.title);
        setTxt('step-1-subtitle', cfg.steps.step1.subtitle);
    }
    if (cfg.genderQuestion) {
        setTxt('label-gender-question', cfg.genderQuestion.title);
        setTxt('label-gender-male', cfg.genderQuestion.maleLabel);
        setTxt('label-gender-female', cfg.genderQuestion.femaleLabel);
    }
    if (cfg.pregnancyQuestion) {
        setTxt('label-pregnancy-question', cfg.pregnancyQuestion.title);
        setTxt('label-pregnancy-no', cfg.pregnancyQuestion.noLabel);
        setTxt('label-pregnancy-yes', cfg.pregnancyQuestion.yesLabel);
    }
    if (cfg.bodyMetricsQuestion) {
        setTxt('label-metrics-question', cfg.bodyMetricsQuestion.title);
        setTxt('label-input-age', cfg.bodyMetricsQuestion.ageLabel);
        setTxt('label-input-height', cfg.bodyMetricsQuestion.heightLabel);
        setTxt('label-input-weight', cfg.bodyMetricsQuestion.weightLabel);
        setPlaceholder('note-age', cfg.bodyMetricsQuestion.notePlaceholder);
    }
    if (cfg.activityQuestion) {
        setTxt('label-activity-question', cfg.activityQuestion.title);
        setTxt('label-activity-other', cfg.activityQuestion.otherLabel);
        setPlaceholder('note-activity', cfg.activityQuestion.notePlaceholder);
        setPlaceholder('input-activity-other', cfg.activityQuestion.otherPlaceholder);
        (cfg.activityQuestion.options || []).forEach(opt => {
            const tEl = document.querySelector(`[data-opt-title="${opt.id}"]`);
            if (tEl) tEl.innerText = opt.title;
            const dEl = document.querySelector(`[data-opt-desc="${opt.id}"]`);
            if (dEl && opt.desc) dEl.innerText = opt.desc;
        });
    }
    if (cfg.goalQuestion) {
        setTxt('label-goal-question', cfg.goalQuestion.title);
        setTxt('label-goal-other', cfg.goalQuestion.otherLabel);
        setPlaceholder('note-goal', cfg.goalQuestion.notePlaceholder);
        setPlaceholder('input-goal-other', cfg.goalQuestion.otherPlaceholder);
        (cfg.goalQuestion.options || []).forEach(opt => {
            const tEl = document.querySelector(`[data-opt-title="${opt.id}"]`);
            if (tEl) tEl.innerText = opt.title;
        });
    }
    setTxt('btn-step1-next-text', (cfg.buttons && cfg.buttons.step1Next) || (isFemale ? 'המשיכי לשלב הבא' : 'המשך לשלב הבא'));

    // Step 2
    if (cfg.steps && cfg.steps.step2) {
        setTxt('step-2-title', cfg.steps.step2.title);
        setTxt('step-2-subtitle', cfg.steps.step2.subtitle);
    }
    if (cfg.experienceQuestion) {
        setTxt('label-experience-question', cfg.experienceQuestion.title);
        setTxt('label-experience-other', cfg.experienceQuestion.otherLabel);
        setTxt('label-experience-other-sub', cfg.experienceQuestion.otherSub || (isFemale ? 'פרטי בעצמך' : 'פרט בעצמך'));
        setPlaceholder('note-experience', cfg.experienceQuestion.notePlaceholder);
        setPlaceholder('input-experience-other', cfg.experienceQuestion.otherPlaceholder);
        (cfg.experienceQuestion.options || []).forEach(opt => {
            const tEl = document.querySelector(`[data-opt-title="${opt.id}"]`);
            if (tEl) tEl.innerText = opt.title;
            const dEl = document.querySelector(`[data-opt-desc="${opt.id}"]`);
            if (dEl && opt.desc) dEl.innerText = opt.desc;
        });
    }
    if (cfg.frequencyQuestion) {
        setTxt('label-frequency-question', cfg.frequencyQuestion.title);
        setTxt('label-frequency-other', cfg.frequencyQuestion.otherLabel);
        setPlaceholder('note-frequency', cfg.frequencyQuestion.notePlaceholder);
        setPlaceholder('input-frequency-other', cfg.frequencyQuestion.otherPlaceholder);
        (cfg.frequencyQuestion.options || []).forEach(opt => {
            const tEl = document.querySelector(`[data-opt-title="${opt.id}"]`);
            if (tEl) tEl.innerText = opt.title;
            const dEl = document.querySelector(`[data-opt-desc="${opt.id}"]`);
            if (dEl) dEl.innerText = opt.desc || '';
        });
    }
    if (cfg.injuriesQuestion) {
        setTxt('label-injuries-question', cfg.injuriesQuestion.title);
        setTxt('label-injuries-warning', cfg.injuriesQuestion.warning);
        setTxt('label-injuries-none', cfg.injuriesQuestion.noneLabel);
        setTxt('label-injuries-detail', cfg.injuriesQuestion.detailLabel);
        setPlaceholder('input-injury-detail', cfg.injuriesQuestion.detailPlaceholder);
        setPlaceholder('note-injuries', cfg.injuriesQuestion.notePlaceholder);
        (cfg.injuriesQuestion.options || []).forEach(opt => {
            const lEl = document.querySelector(`[data-injury-label="${opt.id}"]`);
            if (lEl) lEl.innerText = opt.label;
        });
    }
    if (cfg.equipmentQuestion) {
        setTxt('label-equipment-question', cfg.equipmentQuestion.title);
        setTxt('label-equipment-other', cfg.equipmentQuestion.otherLabel);
        setPlaceholder('note-equipment', cfg.equipmentQuestion.notePlaceholder);
        setPlaceholder('input-equipment-other', cfg.equipmentQuestion.otherPlaceholder);
        (cfg.equipmentQuestion.options || []).forEach(opt => {
            const tEl = document.querySelector(`[data-opt-title="${opt.id}"]`);
            if (tEl) tEl.innerText = opt.title;
        });
    }
    setTxt('btn-step2-next-text', (cfg.buttons && cfg.buttons.step2Next) || (isFemale ? 'המשיכי לשלב הבא' : 'המשך לשלב הבא'));

    // Step 3
    if (cfg.steps && cfg.steps.step3) {
        setTxt('step-3-title', cfg.steps.step3.title);
        setTxt('step-3-subtitle', cfg.steps.step3.subtitle);
    }
    if (cfg.challengeQuestion) {
        setTxt('label-challenge-question', cfg.challengeQuestion.title);
        setTxt('label-challenge-other', cfg.challengeQuestion.otherLabel);
        setPlaceholder('note-challenge', cfg.challengeQuestion.notePlaceholder);
        setPlaceholder('input-challenge-other', cfg.challengeQuestion.otherPlaceholder);
        (cfg.challengeQuestion.options || []).forEach(opt => {
            const tEl = document.querySelector(`[data-opt-title="${opt.id}"]`);
            if (tEl) tEl.innerText = opt.text;
        });
    }
    setTxt('btn-step3-next-text', (cfg.buttons && cfg.buttons.step3Next) || (isFemale ? 'השלימי אבחון ועברי לתוצאות' : 'השלם אבחון ועבור לתוצאות'));

    // Step 4
    if (cfg.steps && cfg.steps.step4) {
        setTxt('step-4-title', cfg.steps.step4.title);
        setTxt('step-4-subtitle', cfg.steps.step4.subtitle);
    }
    setPlaceholder('lead-name', isFemale ? 'ישראלה ישראלית' : 'ישראל ישראלי');
    setTxt('label-lead-compliance-text', (cfg.buttons && cfg.buttons.leadCompliance) || (isFemale 
        ? 'אני מאשרת קבלת תוכן מקצועי, עדכונים והצעות שיווקיות מ-Coach Gino בוואטסאפ ובאינסטגרם בהתאם לתנאי השימוש ומדיניות הפרטיות.'
        : 'אני מאשר קבלת תוכן מקצועי, עדכונים והצעות שיווקיות מ-Coach Gino בוואטסאפ ובאינסטגרם בהתאם לתנאי השימוש ומדיניות הפרטיות.'));
    setTxt('btn-step4-submit-text', (cfg.buttons && cfg.buttons.step4Submit) || (isFemale ? 'הפיקי לי תוכנית אימונים מותאמת אישית ⚡' : 'הפק לי תוכנית אימונים מותאמת אישית ⚡'));
    setTxt('copy-text', (cfg.buttons && cfg.buttons.copyProgram) || (isFemale ? 'העתיקי תוכנית אימונים מלאה 📋' : 'העתק תוכנית אימונים מלאה 📋'));
    setTxt('btn-download-pdf-text', isFemale ? 'הורידי תוכנית אימונים כקובץ PDF 📥' : 'הורד תוכנית אימונים כקובץ PDF 📥');

    // Refresh Settings text per active gender
    const gSettings = getCoachSettings(targetGender);
    setTxt('upsell-subtitle-display', gSettings.upsellSubtitle);
    setTxt('upsell-body-display', gSettings.upsellBody);
    setTxt('upsell-whatsapp-btn-text', gSettings.upsellBtnText);
    setTxt('consultation-btn-text', gSettings.consultationBtnText);
    setTxt('consultation-quote-display', `"${gSettings.consultationQuote}"`);
}


// ============================================================================
// COOKIE & SESSION TRACKING (Drop-off & Duration Measurement)
// ============================================================================
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
}

function initSessionTracking() {
    let sessionId = getCookie('gino_session_id');
    if (!sessionId) {
        sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
        setCookie('gino_session_id', sessionId, 30);
    }
    state.sessionId = sessionId;

    let sessions = [];
    try {
        sessions = JSON.parse(localStorage.getItem('gino_sessions') || '[]');
    } catch (e) {}

    let currentSession = sessions.find(s => s.id === sessionId);
    if (!currentSession) {
        currentSession = {
            id: sessionId,
            startTime: Date.now(),
            startTimeFormatted: new Date().toLocaleString('he-IL'),
            lastActive: Date.now(),
            durationSeconds: 0,
            currentStep: 0,
            stepName: stepNamesHebrew[0],
            status: 'abandoned', // changes to 'converted' once lead is submitted
            partialAnswers: {},
            lead: null
        };
        sessions.push(currentSession);
        localStorage.setItem('gino_sessions', JSON.stringify(sessions));
    }

    // Heartbeat: count duration every 5 seconds
    setInterval(() => {
        updateSessionDuration();
    }, 5000);
}

function updateSessionDuration() {
    try {
        let sessions = JSON.parse(localStorage.getItem('gino_sessions') || '[]');
        let currentSession = sessions.find(s => s.id === state.sessionId);
        if (currentSession) {
            currentSession.lastActive = Date.now();
            currentSession.durationSeconds = Math.round((Date.now() - currentSession.startTime) / 1000);
            localStorage.setItem('gino_sessions', JSON.stringify(sessions));
        }
    } catch (e) {}
}

function recordStepProgress(stepIndex) {
    try {
        let sessions = JSON.parse(localStorage.getItem('gino_sessions') || '[]');
        let currentSession = sessions.find(s => s.id === state.sessionId);
        if (currentSession) {
            currentSession.currentStep = stepIndex;
            currentSession.stepName = stepNamesHebrew[stepIndex] || `שלב ${stepIndex}`;
            currentSession.lastActive = Date.now();
            currentSession.durationSeconds = Math.round((Date.now() - currentSession.startTime) / 1000);
            // Snapshot partial answers
            currentSession.partialAnswers = JSON.parse(JSON.stringify(state.answers));
            localStorage.setItem('gino_sessions', JSON.stringify(sessions));
        }
    } catch (e) {}
}

function markSessionConverted(leadInfo) {
    try {
        let sessions = JSON.parse(localStorage.getItem('gino_sessions') || '[]');
        let currentSession = sessions.find(s => s.id === state.sessionId);
        if (currentSession) {
            currentSession.status = 'converted';
            currentSession.lead = leadInfo;
            currentSession.lastActive = Date.now();
            currentSession.durationSeconds = Math.round((Date.now() - currentSession.startTime) / 1000);
            localStorage.setItem('gino_sessions', JSON.stringify(sessions));
        }
    } catch (e) {}
}

function formatDuration(seconds) {
    if (!seconds || seconds < 1) return 'פחות מדקה';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    if (m === 0) return `${s} שנ׳`;
    return `${m} דק׳ ו-${s} שנ׳`;
}

// ============================================================================
// APP INITIALIZATION & COOKIE CONSENT
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initSessionTracking();
    checkCookieConsent();
    applyCoachSettingsToDOM();
    applyQuestionnaireConfigToDOM();
    setupSelectionButtons();
    setupCheckboxButtons();
    setupBackButton();
    setupInputListeners();
    setupAdminTrigger();
});

// Legal Cookie Consent Handler
function checkCookieConsent() {
    try {
        const consent = localStorage.getItem('gino_cookie_consent');
        const banner = document.getElementById('cookie-consent-banner');
        if (!consent && banner) {
            banner.classList.remove('hidden');
        }
    } catch (e) {}
}

function acceptCookieConsent() {
    try {
        localStorage.setItem('gino_cookie_consent', 'true');
    } catch (e) {}
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) {
        banner.classList.add('hidden');
    }
}

function applyCoachSettingsToDOM() {
    coachSettings = getCoachSettings();
    
    // 1. Landing Page Texts:
    const badgeEl = document.getElementById('landing-badge-text');
    if (badgeEl) badgeEl.innerText = coachSettings.badge || DEFAULT_LANDING_BADGE;

    const headlineEl = document.getElementById('landing-headline');
    if (headlineEl) headlineEl.innerText = coachSettings.headline || DEFAULT_HEADLINE;

    const subheadlineEl = document.getElementById('landing-subheadline');
    if (subheadlineEl) subheadlineEl.innerText = coachSettings.subheadline || DEFAULT_LANDING_SUBHEADLINE;

    const b1TitleEl = document.getElementById('bullet-1-title');
    if (b1TitleEl) b1TitleEl.innerText = coachSettings.bullet1Title || DEFAULT_BULLET_1_TITLE;

    const b1DescEl = document.getElementById('bullet-1-desc');
    if (b1DescEl) b1DescEl.innerText = coachSettings.bullet1Desc || DEFAULT_BULLET_1_DESC;

    const b2TitleEl = document.getElementById('bullet-2-title');
    if (b2TitleEl) b2TitleEl.innerText = coachSettings.bullet2Title || DEFAULT_BULLET_2_TITLE;

    const b2DescEl = document.getElementById('bullet-2-desc');
    if (b2DescEl) b2DescEl.innerText = coachSettings.bullet2Desc || DEFAULT_BULLET_2_DESC;

    const b3TitleEl = document.getElementById('bullet-3-title');
    if (b3TitleEl) b3TitleEl.innerText = coachSettings.bullet3Title || DEFAULT_BULLET_3_TITLE;

    const b3DescEl = document.getElementById('bullet-3-desc');
    if (b3DescEl) b3DescEl.innerText = coachSettings.bullet3Desc || DEFAULT_BULLET_3_DESC;

    const btnTextEl = document.getElementById('landing-btn-text');
    if (btnTextEl) btnTextEl.innerText = coachSettings.landingBtnText || DEFAULT_LANDING_BTN_TEXT;

    const subtextEl = document.getElementById('landing-subtext');
    if (subtextEl) subtextEl.innerText = coachSettings.landingSubtext || DEFAULT_LANDING_SUBTEXT;


    // Footer Instagram
    const igHandleEl = document.getElementById('footer-instagram-handle');
    if (igHandleEl) igHandleEl.innerText = coachSettings.instagramHandle || DEFAULT_INSTAGRAM_HANDLE;

    const igLinkEl = document.getElementById('footer-instagram-link');
    if (igLinkEl) igLinkEl.href = coachSettings.instagramLink || DEFAULT_INSTAGRAM_LINK;

    // Consultation Quote
    const quoteEl = document.getElementById('consultation-quote-display');
    if (quoteEl) quoteEl.innerText = `"${coachSettings.consultationQuote || DEFAULT_CONSULTATION_QUOTE}"`;

    // Upsell Card
    const upTitleEl = document.getElementById('upsell-title-display');
    if (upTitleEl) upTitleEl.innerText = coachSettings.upsellTitle || DEFAULT_UPSELL_TITLE;

    const upSubtitleEl = document.getElementById('upsell-subtitle-display');
    if (upSubtitleEl) upSubtitleEl.innerText = coachSettings.upsellSubtitle || DEFAULT_UPSELL_SUBTITLE;

    const upBodyEl = document.getElementById('upsell-body-display');
    if (upBodyEl) upBodyEl.innerText = coachSettings.upsellBody || DEFAULT_UPSELL_BODY;

    // Coach Avatar / Profile Picture
    renderCoachAvatar();
}


// Setup Option Buttons (Radio style + "Other" toggle)
function setupSelectionButtons() {
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const field = btn.getAttribute('data-field');
            const value = btn.getAttribute('data-value');
            
            // Remove selected class from siblings in same field
            document.querySelectorAll(`.option-btn[data-field="${field}"]`).forEach(sibling => {
                sibling.classList.remove('selected');
            });
            
            // Add selected class to clicked
            btn.classList.add('selected');
            state.answers[field] = value;
            
            // Reveal or hide custom "Other" text input
            const otherWrapper = document.getElementById(`wrapper-${field}-other`);
            if (otherWrapper) {
                if (value === 'other') {
                    otherWrapper.classList.remove('hidden');
                    const otherInput = document.getElementById(`input-${field}-other`);
                    if (otherInput) otherInput.focus();
                } else {
                    otherWrapper.classList.add('hidden');
                }
            }

            // Remove error borders
            if (btn.parentElement) {
                btn.parentElement.classList.remove('border-red-500');
            }
        });
    });
}

// Setup Checkbox Buttons for Injuries
function setupCheckboxButtons() {
    const injuryButtons = document.querySelectorAll('.checkbox-btn[data-injury]');
    const noInjuryBtn = document.getElementById('no-injury-btn');
    
    injuryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const injury = btn.getAttribute('data-injury');
            
            if (btn.classList.contains('selected')) {
                btn.classList.remove('selected');
                state.answers.injuries = state.answers.injuries.filter(i => i !== injury);
            } else {
                btn.classList.add('selected');
                state.answers.injuries.push(injury);
                // Unselect "None"
                noInjuryBtn.classList.remove('selected');
                state.answers.injuries = state.answers.injuries.filter(i => i !== 'none');
            }
        });
    });
    
    noInjuryBtn.addEventListener('click', () => {
        if (noInjuryBtn.classList.contains('selected')) {
            noInjuryBtn.classList.remove('selected');
            state.answers.injuries = [];
        } else {
            noInjuryBtn.classList.add('selected');
            injuryButtons.forEach(btn => btn.classList.remove('selected'));
            state.answers.injuries = ['none'];
        }
    });
}

function setupBackButton() {
    document.getElementById('back-btn').addEventListener('click', () => {
        if (state.currentStep > 0) prevStep();
    });
}

function setupInputListeners() {
    const ageInput = document.getElementById('input-age');
    if (ageInput) {
        ageInput.addEventListener('input', () => {
            if (ageInput.value >= 12 && ageInput.value <= 100) {
                document.getElementById('age-error').classList.add('hidden');
                ageInput.classList.remove('border-red-500');
            }
        });
    }

    const heightInput = document.getElementById('input-height');
    if (heightInput) {
        heightInput.addEventListener('input', () => {
            const h = parseInt(heightInput.value);
            if (!isNaN(h) && h >= 100 && h <= 250) {
                document.getElementById('height-error').classList.add('hidden');
                heightInput.classList.remove('border-red-500');
            }
        });
    }

    const weightInput = document.getElementById('input-weight');
    if (weightInput) {
        weightInput.addEventListener('input', () => {
            const w = parseFloat(weightInput.value);
            if (!isNaN(w) && w >= 30 && w <= 300) {
                document.getElementById('weight-error').classList.add('hidden');
                weightInput.classList.remove('border-red-500');
            }
        });
    }

    const nameInput = document.getElementById('lead-name');
    if (nameInput) {
        nameInput.addEventListener('input', () => {
            if (nameInput.value.trim().length >= 2) {
                document.getElementById('name-error').classList.add('hidden');
                nameInput.classList.remove('border-red-500');
            }
        });
    }

    const phoneInput = document.getElementById('lead-phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', () => {
            const phone = phoneInput.value.trim();
            if (validateIsraeliPhone(phone)) {
                document.getElementById('phone-error').classList.add('hidden');
                phoneInput.classList.remove('border-red-500');
            }
        });
    }

    const complianceInput = document.getElementById('lead-compliance');
    if (complianceInput) {
        complianceInput.addEventListener('change', () => {
            if (complianceInput.checked) {
                document.getElementById('compliance-error').classList.add('hidden');
                complianceInput.parentElement.classList.remove('text-red-500');
            }
        });
    }
}

function validateIsraeliPhone(phone) {
    const cleaned = phone.replace(/[- ]/g, '');
    const mobileRegex = /^(05\d{8}|05\d-\d{7}|\+9725\d{8}|9725\d{8})$/;
    return mobileRegex.test(cleaned);
}

function normalizePhoneForWhatsapp(phone) {
    let cleaned = phone.replace(/[- ]/g, '');
    if (cleaned.startsWith('05')) return '972' + cleaned.slice(1);
    if (cleaned.startsWith('+972')) return cleaned.slice(1);
    return cleaned;
}

// Navigation
function nextStep() {
    if (state.currentStep < steps.length - 1) {
        state.currentStep++;
        updateStepUI();
        recordStepProgress(state.currentStep);
    }
}

function prevStep() {
    if (state.currentStep > 0) {
        state.currentStep--;
        updateStepUI();
        recordStepProgress(state.currentStep);
    }
}

function updateStepUI() {
    const stepId = steps[state.currentStep];
    
    document.querySelectorAll('.step-card').forEach(card => {
        card.classList.add('hidden');
        card.classList.remove('active');
    });
    
    const activeCard = document.getElementById(stepId);
    activeCard.classList.remove('hidden');
    activeCard.offsetHeight;
    activeCard.classList.add('active');
    
    const header = document.getElementById('app-header');
    if (state.currentStep === 0 || state.currentStep >= 5) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
        const displayStep = state.currentStep;
        document.getElementById('current-step-display').innerText = displayStep;
        document.getElementById('total-steps-display').innerText = '4';
        const progressPercent = (displayStep / 4) * 100;
        document.getElementById('progress-bar').style.width = `${progressPercent}%`;
    }
    
    lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Step Validations & Notes Capture
function validateStep1() {
    let isValid = true;
    
    // 1. Gender & Pregnancy (Conditional for women)
    if (!state.answers.gender) {
        const genderErr = document.getElementById('gender-error');
        if (genderErr) genderErr.classList.remove('hidden');
        isValid = false;
    } else {
        const genderErr = document.getElementById('gender-error');
        if (genderErr) genderErr.classList.add('hidden');

        if (state.answers.gender === 'female') {
            if (!state.answers.isPregnant) {
                const pregErr = document.getElementById('pregnancy-error');
                if (pregErr) pregErr.classList.remove('hidden');
                isValid = false;
            } else {
                const pregErr = document.getElementById('pregnancy-error');
                if (pregErr) pregErr.classList.add('hidden');
                if (state.answers.isPregnant === 'yes') {
                    const notesEl = document.getElementById('input-pregnancy-notes');
                    state.answers.pregnancyNotes = notesEl ? notesEl.value.trim() : '';
                }
            }
        } else {
            state.answers.isPregnant = 'no';
            state.answers.pregnancyTrimester = '';
            state.answers.pregnancyNotes = '';
        }
    }

    // 2. Age
    const ageInput = document.getElementById('input-age');
    const age = parseInt(ageInput.value);
    if (isNaN(age) || age < 12 || age > 100) {
        document.getElementById('age-error').classList.remove('hidden');
        ageInput.classList.add('border-red-500');
        isValid = false;
    } else {
        state.answers.age = age;
        document.getElementById('age-error').classList.add('hidden');
        ageInput.classList.remove('border-red-500');
    }

    // 3. Height (100 - 250 cm)
    const heightInput = document.getElementById('input-height');
    const height = parseInt(heightInput.value);
    if (isNaN(height) || height < 100 || height > 250) {
        document.getElementById('height-error').classList.remove('hidden');
        heightInput.classList.add('border-red-500');
        isValid = false;
    } else {
        state.answers.height = height;
        document.getElementById('height-error').classList.add('hidden');
        heightInput.classList.remove('border-red-500');
    }

    // 4. Weight (30 - 300 kg)
    const weightInput = document.getElementById('input-weight');
    const weight = parseFloat(weightInput.value);
    if (isNaN(weight) || weight < 30 || weight > 300) {
        document.getElementById('weight-error').classList.remove('hidden');
        weightInput.classList.add('border-red-500');
        isValid = false;
    } else {
        state.answers.weight = weight;
        document.getElementById('weight-error').classList.add('hidden');
        weightInput.classList.remove('border-red-500');
    }

    state.answers.noteAge = document.getElementById('note-age').value.trim();
    
    // 5. Activity
    if (!state.answers.activity) {
        const container = document.querySelector('[data-field="activity"]').parentElement;
        container.classList.add('border', 'border-red-500', 'p-2', 'rounded-xl');
        isValid = false;
        setTimeout(() => container.classList.remove('border', 'border-red-500', 'p-2'), 4000);
    }
    if (state.answers.activity === 'other') {
        state.answers.activityOther = document.getElementById('input-activity-other').value.trim();
    }
    state.answers.noteActivity = document.getElementById('note-activity').value.trim();
    
    // 6. Goal
    if (!state.answers.goal) {
        const container = document.querySelector('[data-field="goal"]').parentElement;
        container.classList.add('border', 'border-red-500', 'p-2', 'rounded-xl');
        isValid = false;
        setTimeout(() => container.classList.remove('border', 'border-red-500', 'p-2'), 4000);
    }
    if (state.answers.goal === 'other') {
        state.answers.goalOther = document.getElementById('input-goal-other').value.trim();
    }
    state.answers.noteGoal = document.getElementById('note-goal').value.trim();
    
    return isValid;
}

function validateStep2() {
    let isValid = true;
    
    // 4. Experience
    if (!state.answers.experience) {
        const container = document.querySelector('[data-field="experience"]').parentElement;
        container.classList.add('border', 'border-red-500', 'p-2', 'rounded-xl');
        isValid = false;
        setTimeout(() => container.classList.remove('border', 'border-red-500', 'p-2'), 4000);
    }
    if (state.answers.experience === 'other') {
        state.answers.experienceOther = document.getElementById('input-experience-other').value.trim();
    }
    state.answers.noteExperience = document.getElementById('note-experience').value.trim();
    
    // 5. Frequency
    if (!state.answers.frequency) {
        const container = document.querySelector('[data-field="frequency"]').parentElement;
        container.classList.add('border', 'border-red-500', 'p-2', 'rounded-xl');
        isValid = false;
        setTimeout(() => container.classList.remove('border', 'border-red-500', 'p-2'), 4000);
    }
    if (state.answers.frequency === 'other') {
        const freqOtherInput = document.getElementById('input-frequency-other');
        state.answers.frequencyOther = freqOtherInput ? freqOtherInput.value.trim() : '';
    }
    const noteFreqEl = document.getElementById('note-frequency');
    state.answers.noteFrequency = noteFreqEl ? noteFreqEl.value.trim() : '';
    
    // 6. Injuries
    if (state.answers.injuries.length === 0) {
        state.answers.injuries = ['none'];
        document.getElementById('no-injury-btn').classList.add('selected');
    }
    state.answers.injuryDetail = document.getElementById('input-injury-detail').value.trim();
    state.answers.noteInjuries = document.getElementById('note-injuries').value.trim();
    
    // 7. Equipment
    if (!state.answers.equipment) {
        const container = document.querySelector('[data-field="equipment"]').parentElement;
        container.classList.add('border', 'border-red-500', 'p-2', 'rounded-xl');
        isValid = false;
        setTimeout(() => container.classList.remove('border', 'border-red-500', 'p-2'), 4000);
    }
    if (state.answers.equipment === 'other') {
        state.answers.equipmentOther = document.getElementById('input-equipment-other').value.trim();
    }
    state.answers.noteEquipment = document.getElementById('note-equipment').value.trim();
    
    return isValid;
}

function validateStep3() {
    let isValid = true;
    
    // 8. Challenge
    if (!state.answers.challenge) {
        const container = document.querySelector('[data-field="challenge"]').parentElement;
        container.classList.add('border', 'border-red-500', 'p-2', 'rounded-xl');
        isValid = false;
        setTimeout(() => container.classList.remove('border', 'border-red-500', 'p-2'), 4000);
    }
    if (state.answers.challenge === 'other') {
        state.answers.challengeOther = document.getElementById('input-challenge-other').value.trim();
    }
    state.answers.noteChallenge = document.getElementById('note-challenge').value.trim();
    
    return isValid;
}

// ============================================================================
// LEAD SUBMISSION & LOCALSTORAGE DATABASE
// ============================================================================
function submitLead() {
    let isValid = true;
    
    const nameInput = document.getElementById('lead-name');
    const phoneInput = document.getElementById('lead-phone');
    const instaInput = document.getElementById('lead-instagram');
    const complianceInput = document.getElementById('lead-compliance');
    
    const fullName = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const instagram = instaInput.value.trim();
    const mailingApproved = complianceInput.checked;
    
    if (fullName.length < 2) {
        document.getElementById('name-error').classList.remove('hidden');
        nameInput.classList.add('border-red-500');
        isValid = false;
    } else {
        state.lead.fullName = fullName;
    }
    
    if (!validateIsraeliPhone(phone)) {
        document.getElementById('phone-error').classList.remove('hidden');
        phoneInput.classList.add('border-red-500');
        isValid = false;
    } else {
        state.lead.phone = phone;
    }
    
    if (!mailingApproved) {
        document.getElementById('compliance-error').classList.remove('hidden');
        complianceInput.parentElement.classList.add('text-red-500');
        isValid = false;
    } else {
        state.lead.mailingApproved = true;
    }
    
    state.lead.instagram = instagram;
    
    if (!isValid) return;
    
    // Mark session as converted
    markSessionConverted(state.lead);
    
    // Save Lead to LocalStorage CRM
    saveLeadToDatabase();
    
    // Send external Webhook if configured
    sendLeadToWebhook();
    
    // Check if trainee requires direct 1-on-1 consultation (injury or pregnancy)
    const consultationStatus = checkNeedsConsultation();
    if (consultationStatus.needsConsultation) {
        showConsultationStep(consultationStatus);
    } else {
        // Uninjured and not pregnant: Go to Processing & Biomechanics analysis
        nextStep();
        runAIGeneratorSimulation();
    }
}

// Check if trainee marked pregnancy
function checkIsPregnant() {
    return state.answers.gender === 'female' && state.answers.isPregnant === 'yes';
}

// Injury Assessment Check
function checkHasInjuries() {
    const inj = state.answers.injuries || [];
    const hasLimitation = inj.some(i => i && i !== 'none');
    const hasDetail = !!(state.answers.injuryDetail && state.answers.injuryDetail.trim());
    const hasNote = !!(state.answers.noteInjuries && state.answers.noteInjuries.trim());
    return hasLimitation || hasDetail || hasNote;
}

// Check if trainee requires direct 1-on-1 coach consultation
function checkNeedsConsultation() {
    const hasInjury = checkHasInjuries();
    const isPregnant = checkIsPregnant();
    return {
        needsConsultation: hasInjury || isPregnant,
        hasInjury,
        isPregnant
    };
}

// Direct 1-on-1 Consultation Transition for Injured or Pregnant Trainees
function showConsultationStep(consultationStatus) {
    if (!consultationStatus) {
        consultationStatus = checkNeedsConsultation();
    }
    const isPregnant = consultationStatus.isPregnant;
    const hasInjury = consultationStatus.hasInjury;

    document.querySelectorAll('.step-card').forEach(card => {
        card.classList.add('hidden');
        card.classList.remove('active');
    });
    
    const consultCard = document.getElementById('step-consultation');
    if (consultCard) {
        consultCard.classList.remove('hidden');
        consultCard.offsetHeight;
        consultCard.classList.add('active');
    }
    
    const header = document.getElementById('app-header');
    if (header) header.classList.add('hidden');

    // DOM Elements for dynamic styling & messaging
    const headerBox = document.getElementById('consultation-header-box');
    const headerIconContainer = document.getElementById('consultation-header-icon-container');
    const headerTitle = document.getElementById('consultation-header-title');
    const headerSubtitle = document.getElementById('consultation-header-subtitle');
    const avatarBox = document.getElementById('consultation-avatar-box');
    const coachIconContainer = document.getElementById('consultation-coach-icon-container');
    const quoteEl = document.getElementById('consultation-quote-display');
    const summaryLabel = document.getElementById('consultation-summary-label');
    const summaryEl = document.getElementById('consultation-injury-summary');
    const descText = document.getElementById('consultation-desc-text');
    const btnText = document.getElementById('consultation-btn-text');
    const waLink = document.getElementById('consultation-whatsapp-link');

    // Build summaries
    let injuryList = [];
    const inj = state.answers.injuries || [];
    inj.forEach(i => {
        if (i && i !== 'none') {
            injuryList.push(injuryNames[i] || i);
        }
    });
    if (state.answers.injuryDetail && state.answers.injuryDetail.trim()) {
        injuryList.push(`פירוט: ${state.answers.injuryDetail.trim()}`);
    }
    if (state.answers.noteInjuries && state.answers.noteInjuries.trim()) {
        injuryList.push(`הערה אישית: ${state.answers.noteInjuries.trim()}`);
    }
    const injurySummaryText = injuryList.length > 0 ? injuryList.join(' • ') : 'מגבלה פיזית / פציעה שהוזנה בשאלון';

    let pregnancySummaryParts = [];
    if (isPregnant) {
        const trimName = trimesterNames[state.answers.pregnancyTrimester] || state.answers.pregnancyTrimester || 'שלב הריון פעיל';
        pregnancySummaryParts.push(`הריון (${trimName})`);
        if (state.answers.pregnancyNotes && state.answers.pregnancyNotes.trim()) {
            pregnancySummaryParts.push(`הערה: ${state.answers.pregnancyNotes.trim()}`);
        }
    }
    const pregnancySummaryText = pregnancySummaryParts.join(' • ');

    const activeCoachSettings = getCoachSettings(state.answers.gender);
    const phone = activeCoachSettings.phone || DEFAULT_COACH_PHONE;

    if (isPregnant && hasInjury) {
        // Both pregnant and injured
        if (headerBox) {
            headerBox.className = 'bg-gradient-to-l from-purple-500/15 to-transparent p-4 rounded-xl border-r-4 border-purple-500 space-y-1';
        }
        if (headerIconContainer) {
            headerIconContainer.innerHTML = '<i data-lucide="shield-alert" id="consultation-header-icon" class="w-5 h-5 text-purple-400"></i>';
        }
        if (headerTitle) {
            headerTitle.innerText = 'אובחנו הריון ומגבלות פיזיות הדורשים התייחסות אישית 🤰🩺';
        }
        if (headerSubtitle) {
            headerSubtitle.innerText = 'הבריאות שלך ושל העובר וההגנה על המפרקים הן מעל הכל. הנה ההמלצה המקצועית של Coach Gino:';
        }
        if (avatarBox) {
            avatarBox.className = 'w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold shrink-0';
        }
        if (coachIconContainer) {
            coachIconContainer.innerHTML = '<i data-lucide="stethoscope" id="consultation-coach-icon" class="w-6 h-6"></i>';
        }
        if (quoteEl) {
            quoteEl.innerText = `"${activeCoachSettings.pregnancyConsultationQuote || DEFAULT_PREGNANCY_CONSULTATION_QUOTE}"`;
        }
        if (summaryLabel) {
            summaryLabel.innerText = 'ההריון והמגבלות שציינת בשאלון:';
        }
        const fullSummary = `${pregnancySummaryText} | ${injurySummaryText}`;
        if (summaryEl) {
            summaryEl.innerText = fullSummary;
        }
        if (descText) {
            descText.innerText = 'בשיחה קצרה ואישית נעבור יחד על שלב ההריון והמגבלה הפיזית, נבין בדיוק מה מותר ומה אסור לעשות, ונתאים לך מתווה אימונים מותאם, מדויק ובטוח שישמור עלייך ועל העובר.';
        }
        if (btnText) {
            btnText.innerText = activeCoachSettings.consultationBtnText || 'קבעי איתי שיחת ייעוץ אישית בוואטסאפ (בחינם לגמרי) 🚀';
        }
        if (waLink) {
            const baseMsg = activeCoachSettings.whatsappPregnancyMsg || DEFAULT_WHATSAPP_PREGNANCY_MSG;
            const fullMsg = `${baseMsg}\n\n*שם המתאמנת:* ${state.lead.fullName}\n*טלפון:* ${state.lead.phone}\n*סטטוס הריון ומגבלות:* ${fullSummary}`;
            waLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(fullMsg)}`;
        }
    } else if (isPregnant) {
        // Pregnant only
        if (headerBox) {
            headerBox.className = 'bg-gradient-to-l from-pink-500/15 to-transparent p-4 rounded-xl border-r-4 border-pink-500 space-y-1';
        }
        if (headerIconContainer) {
            headerIconContainer.innerHTML = '<i data-lucide="heart-pulse" id="consultation-header-icon" class="w-5 h-5 text-pink-400"></i>';
        }
        if (headerTitle) {
            headerTitle.innerText = 'הריון דורש התאמה ביומכנית אישית ובטוחה 🤰';
        }
        if (headerSubtitle) {
            headerSubtitle.innerText = 'הבריאות שלך ושל העובר היא מעל הכל. הנה ההמלצה המקצועית של Coach Gino:';
        }
        if (avatarBox) {
            avatarBox.className = 'w-12 h-12 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold shrink-0';
        }
        if (coachIconContainer) {
            coachIconContainer.innerHTML = '<i data-lucide="baby" id="consultation-coach-icon" class="w-6 h-6"></i>';
        }
        if (quoteEl) {
            quoteEl.innerText = `"${activeCoachSettings.pregnancyConsultationQuote || DEFAULT_PREGNANCY_CONSULTATION_QUOTE}"`;
        }
        if (summaryLabel) {
            summaryLabel.innerText = 'סטטוס הריון שציינת בשאלון:';
        }
        if (summaryEl) {
            summaryEl.innerText = pregnancySummaryText || 'הריון';
        }
        if (descText) {
            descText.innerText = 'בשיחה קצרה ואישית של 10 דקות נבין יחד את שלב ההריון, רמת הפעילות וההנחיות הרפואיות שלך, ונתאים מתווה אימונים מותאם, מדויק ובטוח שישמור עלייך ועל העובר.';
        }
        if (btnText) {
            btnText.innerText = 'קבעי איתי שיחת ייעוץ אישית בוואטסאפ (בחינם לגמרי) 🤰';
        }
        if (waLink) {
            const baseMsg = activeCoachSettings.whatsappPregnancyMsg || DEFAULT_WHATSAPP_PREGNANCY_MSG;
            const fullMsg = `${baseMsg}\n\n*שם המתאמנת:* ${state.lead.fullName}\n*טלפון:* ${state.lead.phone}\n*שלב הריון:* ${pregnancySummaryText || 'הריון'}`;
            waLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(fullMsg)}`;
        }
    } else {
        // Injured only
        if (headerBox) {
            headerBox.className = 'bg-gradient-to-l from-red-500/15 to-transparent p-4 rounded-xl border-r-4 border-red-500 space-y-1';
        }
        if (headerIconContainer) {
            headerIconContainer.innerHTML = '<i data-lucide="shield-alert" id="consultation-header-icon" class="w-5 h-5 text-red-400"></i>';
        }
        if (headerTitle) {
            headerTitle.innerText = 'אובחנה מגבלה פיזית הדורשת התייחסות אישית 🩺';
        }
        if (headerSubtitle) {
            headerSubtitle.innerText = 'הבריאות והבטיחות שלך הן הדבר החשוב ביותר. הנה ההמלצה המקצועית של Coach Gino:';
        }
        if (avatarBox) {
            avatarBox.className = 'w-12 h-12 rounded-full bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-lime-400 font-bold shrink-0';
        }
        if (coachIconContainer) {
            coachIconContainer.innerHTML = '<i data-lucide="stethoscope" id="consultation-coach-icon" class="w-6 h-6"></i>';
        }
        if (quoteEl) {
            quoteEl.innerText = `"${activeCoachSettings.consultationQuote || DEFAULT_CONSULTATION_QUOTE}"`;
        }
        if (summaryLabel) {
            summaryLabel.innerText = 'המגבלות שציינת בשאלון:';
        }
        if (summaryEl) {
            summaryEl.innerText = injurySummaryText;
        }
        if (descText) {
            descText.innerText = 'בשיחה קצרה ואישית של 10 דקות נעבור יחד על הפציעה, נבין בדיוק מה מותר ומה אסור לעשות, ונתאים לך מתווה אימונים בטוח שיקדם אותך מבלי לפגוע במפרקים.';
        }
        if (btnText) {
            btnText.innerText = activeCoachSettings.consultationBtnText || (state.answers.gender === 'female' 
                ? 'קבעי איתי שיחת ייעוץ אישית בוואטסאפ (בחינם לגמרי) 🚀' 
                : 'קבע איתי שיחת ייעוץ אישית בוואטסאפ (בחינם לגמרי) 🚀');
        }
        if (waLink) {
            const baseMsg = activeCoachSettings.whatsappConsultationMsg || DEFAULT_WHATSAPP_CONSULTATION_MSG;
            const traineeLabel = state.answers.gender === 'female' ? '*שם המתאמת:*' : '*שם המתאמן:*';
            const fullMsg = `${baseMsg}\n\n${traineeLabel} ${state.lead.fullName}\n*טלפון:* ${state.lead.phone}\n*מגבלה/פציעה שצוינה:* ${injurySummaryText}`;
            waLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(fullMsg)}`;
        }
    }
    
    lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function saveLeadToDatabase() {
    try {
        const leads = JSON.parse(localStorage.getItem('gino_leads') || '[]');
        
        // Calculate total session time spent
        let sessions = JSON.parse(localStorage.getItem('gino_sessions') || '[]');
        let currentSession = sessions.find(s => s.id === state.sessionId);
        let durationSec = currentSession ? currentSession.durationSeconds : 0;
        
        const isInjured = checkHasInjuries();
        const isPregnant = checkIsPregnant();
        const needsConsultation = isInjured || isPregnant;

        let leadType = 'תוכנית אימונים אוטומטית';
        if (isPregnant && isInjured) {
            leadType = 'שיחת ייעוץ (הריון + פציעה)';
        } else if (isPregnant) {
            leadType = 'שיחת ייעוץ (הריון 🤰)';
        } else if (isInjured) {
            leadType = 'שיחת ייעוץ (פציעה/מגבלה)';
        }

        let bmi = null;
        let bmiFormatted = 'לא חושב';
        if (state.answers.height && state.answers.weight) {
            const hM = state.answers.height / 100;
            const bmiCalc = (state.answers.weight / (hM * hM)).toFixed(1);
            bmi = parseFloat(bmiCalc);
            let cat = '';
            if (bmi < 18.5) cat = '(תת משקל)';
            else if (bmi < 25) cat = '(משקל תקין)';
            else if (bmi < 30) cat = '(עודף משקל)';
            else cat = '(השמנה)';
            bmiFormatted = `${bmi} ${cat}`;
        }

        const newLead = {
            id: 'lead_' + Date.now(),
            sessionId: state.sessionId,
            timestamp: new Date().toLocaleString('he-IL'),
            durationSeconds: durationSec,
            durationFormatted: formatDuration(durationSec),
            fullName: state.lead.fullName,
            phone: state.lead.phone,
            instagram: state.lead.instagram || 'לא צוין',
            mailingApproved: state.lead.mailingApproved,
            isInjured: isInjured,
            isPregnant: isPregnant,
            needsConsultation: needsConsultation,
            leadType: leadType,
            answers: JSON.parse(JSON.stringify(state.answers)),
            bmi: bmi,
            bmiFormatted: bmiFormatted,
            customPlan: null // Can be edited directly by Coach Gino in the CRM
        };
        leads.push(newLead);
        localStorage.setItem('gino_leads', JSON.stringify(leads));
    } catch (e) {
        console.error("Error saving lead to database:", e);
    }
}

function sendLeadToWebhook() {
    if (!coachSettings.webhookUrl) return;
    const payload = {
        timestamp: new Date().toISOString(),
        lead: state.lead,
        assessment: state.answers,
        sessionId: state.sessionId
    };
    fetch(coachSettings.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).catch(err => console.error('Error sending webhook:', err));
}

// Animated Loading Screen
function runAIGeneratorSimulation() {
    const loadingTexts = [
        "מנתח את מטרות האימון ופרופיל אורח החיים שלך...",
        "מבצע סריקה ביומכנית מלאה של פציעות ומגבלות גוף...",
        "פוסל תרגילי סיכון ומתאים חלופות שיקום בטוחות...",
        "משלב את הדגשים וההערות האישיות שהזנת בשאלון...",
        "מפיק תוכנית אימונים אופטימלית וחוקי התקדמות פרוגרסיבית..."
    ];
    
    const textEl = document.getElementById('loading-text');
    const barInner = document.getElementById('loading-inner-bar');
    
    setTimeout(() => { barInner.style.width = '100%'; }, 100);
    
    let textIndex = 0;
    textEl.innerText = loadingTexts[0];
    
    const textInterval = setInterval(() => {
        textIndex++;
        if (textIndex < loadingTexts.length) {
            textEl.style.opacity = '0';
            setTimeout(() => {
                textEl.innerText = loadingTexts[textIndex];
                textEl.style.opacity = '1';
            }, 300);
        } else {
            clearInterval(textInterval);
        }
    }, 1000);
    
    setTimeout(() => {
        generateFitnessPlan();
        nextStep();
    }, 5000);
}

// ============================================================================
// DEEP BIOMECHANICAL & REHABILITATION ENGINE
// ============================================================================
function analyzeBiomechanicsAndSafety(answers) {
    // Combine all free texts into a single string for natural language analysis
    const allText = [
        answers.injuryDetail,
        answers.noteInjuries,
        answers.activityOther,
        answers.goalOther,
        answers.experienceOther,
        answers.equipmentOther,
        answers.challengeOther,
        answers.noteAge,
        answers.noteActivity,
        answers.noteGoal,
        answers.noteExperience,
        answers.noteFrequency,
        answers.noteEquipment,
        answers.noteChallenge,
        answers.pregnancyNotes
    ].filter(Boolean).join(' ').toLowerCase();

    // Condition Scanners
    const isACL = /צולבת|acl|קרע בצולבת|רצועה צולבת|רצועות ברך|צולבת קדמית|שחזור צולבת/i.test(allText);
    const isMeniscus = /מיניסקוס|מניסקוס|meniscus/i.test(allText);
    const isKnee = isACL || isMeniscus || answers.injuries.includes('knees') || /ברכיים|ברך|פיקה|patella|שחיקת סחוס בברך/i.test(allText);
    
    const isDisc = /פריצת דיסק|בלט דיסק|בקע דיסק|בלט|סיאטיקה|אישיאס|l4-l5|l5-s1|דיסק/i.test(allText) || answers.injuries.includes('back');
    const isShoulder = /שרוול מסובב|קרע בכתף|צביטה בכתף|פריקת כתף|רוטטור|כתף|כתפיים|סופראספינטוס/i.test(allText) || answers.injuries.includes('shoulders');
    const isElbow = /מרפק|מרפקים|טניס אלבו|גולף אלבו|שורש כף יד/i.test(allText) || answers.injuries.includes('elbows');

    const isPregnant = answers.gender === 'female' && answers.isPregnant === 'yes';

    return {
        isACL,
        isMeniscus,
        isKnee,
        isDisc,
        isShoulder,
        isElbow,
        isPregnant,
        pregnancyTrimester: answers.pregnancyTrimester,
        pregnancyNotes: answers.pregnancyNotes,
        allText
    };
}

// Main AI Plan Generation
function generateFitnessPlan() {
    const { age, activity, activityOther, goal, goalOther, experience, frequency, frequencyOther, injuries, injuryDetail, equipment, equipmentOther, challenge, challengeOther } = state.answers;
    const name = state.lead.fullName;
    
    // 1. Analyze Biomechanics
    const bio = analyzeBiomechanicsAndSafety(state.answers);
    
    // 2. Goal, Frequency & Custom Matched Plan
    let goalTitle = goalNames[goal] || goal;
    if (goal === 'other' && goalOther) goalTitle = goalOther;

    const freqDisplay = frequency === 'other' && frequencyOther ? frequencyOther : (frequencyNames[frequency] || frequency || 'תדירות מותאמת אישית');
    
    // Find matching custom workout plan created by Coach Gino
    const customMatchedPlan = findMatchingCustomPlan(bio, state.answers);
    let splitName = (customMatchedPlan && customMatchedPlan.title) ? customMatchedPlan.title : freqDisplay;
    let splitDescription = (customMatchedPlan && customMatchedPlan.description) ? customMatchedPlan.description : '';

    // 3. Write summary cards
    let genderDisplay = genderNames[state.answers.gender] || (state.answers.gender === 'female' ? 'אישה ♀' : (state.answers.gender === 'male' ? 'גבר ♂' : '-'));
    if (bio.isPregnant) {
        genderDisplay = `אישה ♀ (בהריון 🤰${bio.pregnancyTrimester ? ' - ' + (trimesterNames[bio.pregnancyTrimester] || bio.pregnancyTrimester) : ''})`;
    }
    const genderAgeEl = document.getElementById('summary-gender-age');
    if (genderAgeEl) genderAgeEl.innerText = `${genderDisplay}, גיל ${age}`;

    const heightWeightEl = document.getElementById('summary-height-weight');
    if (heightWeightEl) heightWeightEl.innerText = `${state.answers.height ? state.answers.height + ' ס"מ' : '-'} / ${state.answers.weight ? state.answers.weight + ' ק"ג' : '-'}`;

    const bmiEl = document.getElementById('summary-bmi');
    if (bmiEl) {
        if (state.answers.height && state.answers.weight) {
            const h = state.answers.height / 100;
            const b = (state.answers.weight / (h * h)).toFixed(1);
            let cat = '';
            if (b < 18.5) cat = '(תת-משקל)';
            else if (b < 25) cat = '(תקין)';
            else if (b < 30) cat = '(עודף משקל)';
            else cat = '(השמנה)';
            bmiEl.innerText = `${b} ${cat}`;
        } else {
            bmiEl.innerText = '-';
        }
    }

    document.getElementById('summary-goal').innerText = goalTitle;
    document.getElementById('summary-split').innerText = splitName;
    document.getElementById('summary-equip').innerText = equipment === 'other' && equipmentOther ? equipmentOther : (equipmentNames[equipment] || equipment);
    
    let injuryDisplay = injuries.map(i => injuryNames[i] || i).join(', ');
    if (injuryDetail) injuryDisplay += ` (${injuryDetail})`;
    document.getElementById('summary-injuries').innerText = injuryDisplay;

    // Display personal notes summary if user wrote any
    const personalNotesContainer = document.getElementById('summary-personal-notes');
    const personalNotesContent = document.getElementById('summary-notes-content');
    const collectedNotes = [
        state.answers.noteAge && `• גיל ומצב גופני: "${state.answers.noteAge}"`,
        state.answers.pregnancyNotes && `• דגש והנחיות הריון: "${state.answers.pregnancyNotes}"`,
        state.answers.noteActivity && `• עבודה: "${state.answers.noteActivity}"`,
        state.answers.noteGoal && `• מטרה: "${state.answers.noteGoal}"`,
        state.answers.noteExperience && `• ניסיון: "${state.answers.noteExperience}"`,
        state.answers.noteFrequency && `• זמני אימון: "${state.answers.noteFrequency}"`,
        state.answers.noteInjuries && `• פציעות/הנחיות רפואיות: "${state.answers.noteInjuries}"`,
        state.answers.noteEquipment && `• ציוד: "${state.answers.noteEquipment}"`,
        state.answers.noteChallenge && `• אתגר מרכזי: "${state.answers.noteChallenge}"`
    ].filter(Boolean);

    if (collectedNotes.length > 0) {
        personalNotesContainer.classList.remove('hidden');
        personalNotesContent.innerHTML = collectedNotes.map(n => `<div>${n}</div>`).join('');
    } else {
        personalNotesContainer.classList.add('hidden');
    }

    // 4. MEDICAL ALERT BOX (Strict Prenatal, ACL & Disc Protection Alerts)
    const alertBox = document.getElementById('medical-alert-box');
    if (bio.isPregnant) {
        alertBox.classList.remove('hidden');
        alertBox.className = 'p-4 rounded-xl border border-pink-500/60 bg-pink-950/25 text-xs space-y-2 medical-alert-pulse';
        alertBox.innerHTML = `
            <div class="flex items-start gap-2.5">
                <span class="w-7 h-7 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 mt-0.5">
                    <i data-lucide="baby" class="w-4 h-4"></i>
                </span>
                <div class="space-y-1.5 text-right">
                    <span class="font-extrabold text-sm text-pink-300 block">
                        הופעל פרוטוקול אימון הריוני מותאם ובטוח (Prenatal Fitness Protocol) 🤰
                        ${bio.pregnancyTrimester ? `<span class="text-xs text-pink-400 font-medium">(${trimesterNames[bio.pregnancyTrimester] || bio.pregnancyTrimester})</span>` : ''}
                    </span>
                    <p class="text-zinc-300 text-xs leading-relaxed">
                        <strong>הנחיות ביומכניות ובטיחותיות קריטיות:</strong> הוסרו לחלוטין תרגילים בשכיבה שטוחה וממושכת על הגב (Supine Position) כדי למנוע לחץ על הוריד הנבוב התחתון (Vena Cava Compression) וירידה בזרימת הדם. כמו כן בוטלו תרגילי כפיפות בטן (Crunches) ועומסי דחיסה תוך-בטניים מוגברים למניעת היפרדות שרירי הבטן (Diastasis Recti).
                    </p>
                    <p class="text-pink-400 text-xs font-semibold leading-relaxed">
                        <strong>התאמת התוכנית:</strong> תרגילי לחיצה מתבצעים בשיפוע חיובי (Incline) או בישיבה, סקוואטים בעמידה רחבה ותומכת אגן, ותרגילי ליבה מיוצבים (Bird Dog, גשר ישבן מתון ונשימה סרעפתית מסונכרנת). עצימות העבודה הוגבלה ל-RPE 6-7 (מאמץ מתון המאפשר שיחה חופשית).
                        ${bio.pregnancyNotes ? `<br><span class="text-zinc-200"><strong>דגש אישי שהוזן:</strong> "${bio.pregnancyNotes}"</span>` : ''}
                    </p>
                    <p class="text-[11px] text-zinc-400 italic">
                        * הערה רפואית: חובה לקבל אישור רפואי מרופא הנשים המלווה לפני תחילת פעילות גופנית בעת הריון.
                    </p>
                </div>
            </div>
        `;
    } else if (bio.isACL) {
        alertBox.classList.remove('hidden');
        alertBox.className = 'p-4 rounded-xl border border-red-500/60 bg-red-950/20 text-xs space-y-2 medical-alert-pulse';
        alertBox.innerHTML = `
            <div class="flex items-start gap-2.5">
                <i data-lucide="alert-triangle" class="w-5 h-5 text-red-400 shrink-0 mt-0.5"></i>
                <div class="space-y-1">
                    <span class="font-extrabold text-sm text-red-300 block">
                        הופעל פרוטוקול שיקום ביומכני מוגן: זוהה קרע ברצועה צולבת (ACL) / רצועות הברך!
                    </span>
                    <p class="text-zinc-300 text-xs leading-relaxed">
                        <strong>איסור מוחלט (Strict Contraindication):</strong> הוסרו לחלוטין כל סוגי הסקוואטים העמוקים, לאנג'ים ומכונות פשיטת ברכיים (Leg Extension), אשר מייצרות עומס גזירה קדמי (Anterior Tibial Shear) מסוכן שמותח ועלול לקרוע את הרצועה.
                    </p>
                    <p class="text-lime-400 text-xs font-semibold leading-relaxed">
                        <strong>התוכנית החלופית שהותאמה עבורך:</strong> מבוססת באופן מלא על חיזוק השרשרת האחורית והמסטרינגס (האגוניסטים הראשיים המקבעים את הברך ומגנים על ה-ACL), גשר ישבן מיוצב, ותרגילי ארבע-ראשי איזומטריים במפרק נעול (Straight Leg Raises).
                    </p>
                </div>
            </div>
        `;
    } else if (bio.isDisc) {
        alertBox.classList.remove('hidden');
        alertBox.className = 'p-4 rounded-xl border border-yellow-500/60 bg-yellow-950/20 text-xs space-y-2 medical-alert-pulse';
        alertBox.innerHTML = `
            <div class="flex items-start gap-2.5">
                <i data-lucide="shield-alert" class="w-5 h-5 text-yellow-400 shrink-0 mt-0.5"></i>
                <div class="space-y-1">
                    <span class="font-extrabold text-sm text-yellow-300 block">
                        הופעל פרוטוקול עמוד שדרה מוגן: זוהתה פריצת דיסק / רגישות בגב תחתון
                    </span>
                    <p class="text-zinc-300 text-xs leading-relaxed">
                        <strong>התאמה ביומכנית:</strong> בוטלו כל עומסי הדחיסה האנכית הישירה על חוליות הגב (ללא סקוואט עם מוט על העורף וללא דדליפט קלאסי חופשי). כל תרגילי המשיכה הוחלפו בתמיכת חזה (Chest Supported) למניעת עומס שחיקה.
                    </p>
                </div>
            </div>
        `;
    } else {
        alertBox.classList.add('hidden');
    }

    // 5. Direct Response to Core Challenge & Personal Notes
    let challengeText = '';
    const challengeKey = challenge;
    
    if (challengeKey === 'load') {
        challengeText = `היי ${name}, שיתפת שהאתגר המרכזי שלך הוא ניהול עומסים והתקדמות במשקלים בלי להיתקע. זו הסיבה העיקרית למחסומי התקדמות (Plateau). בתוכנית שהרכבנו לך הושם דגש על ניהול עומס פרוגרסיבי מבוקר (Progressive Overload) שמאפשר לגוף להתאושש ומונע פציעות, תוך התקדמות הדרגתית של שבוע לשבוע.`;
    } else if (challengeKey === 'consistency') {
        challengeText = `היי ${name}, שיתפת שקשה לך להתמיד וליצור שגרה קבועה. התוכנית שלך תוכננה להיות ממוקדת ויעילה בזמן, ללא תרגילי סרק. המפתח להתמדה הוא לא לחפש "אימון מושלם", אלא לבנות רצף של הצלחות קטנות. עדיף לבצע אימון מקוצר של 35 דקות מאשר לוותר לגמרי.`;
    } else if (challengeKey === 'technique') {
        challengeText = `היי ${name}, חוסר ביטחון בטכניקה מגביל את היכולת שלך להעמיס משקלים ומגביר סיכון לפציעות. התוכנית שלך בנויה מתרגילים בעלי יציבות ביומכנית גבוהה, וליד כל תרגיל צירפנו סרטון הדגמה, תמונת הדגמה אישית של Coach Gino והנחיות שלב-אחר-שלב. התמקד בשלב הירידה (אקסצנטרי של 3 שניות) לשליטה מרבית.`;
    } else if (challengeKey === 'nutrition') {
        challengeText = `היי ${name}, שילוב בין תזונה לאימונים הוא המנוע של התוצאות שלך. עבור המטרה שלך (${goalTitle}), חובה לתמוך בגוף עם כ-1.6 עד 2.2 גרם חלבון לכל ק"ג משקל גוף, ומאזן קלורי מדויק. ללא דלק מתאים, התוכנית תייצר עייפות במקום תוצאות.`;
    } else if (challengeKey === 'results') {
        challengeText = `היי ${name}, תחושת איטיות בתוצאות נובעת לרוב מחוסר מעקב או מעומס שלא משתנה. בתוכנית זו נקבעו עקרונות התקדמות מוגדרים: תעוד של כל אימון ועלייה בנפח המאמץ השבועי, כדי לאלץ את סיבי השריר להסתגל ולייצר שינוי הרכב גוף מהיר.`;
    } else {
        challengeText = `היי ${name}, רשמת שהאתגר הייחודי שלך הוא: "${challengeOther || 'שיפור הכושר והביצועים'}". התוכנית הותאמה כדי לתת מענה ישיר למחסום זה, תוך שימת דגש על עצמאות מוחלטת בניהול האימון.`;
    }

    if (bio.isPregnant) {
        challengeText = `<div class="mb-3 p-3 bg-pink-950/30 border border-pink-500/30 rounded-xl text-pink-300 leading-relaxed text-xs">
            <span class="font-bold block text-pink-200 mb-1">🤰 דגש מיוחד מ-Coach Gino לאימון מותאם בהריון:</span>
            שלום ${name}, ברכות חמות על ההריון! פעילות גופנית ואימוני כוח מותאמים בהריון הם המפתח לשמירה על יציבה נכונה, מניעת כאבי גב ואגן (עקב שינוי מרכז הכובד), והכנת הגוף ללידה. התוכנית שלך הותאמה בעדינות ובדייקנות ביומכנית כדי לאפשר לך להתאמן בבטחה מלאה.
        </div>` + challengeText;
    }

    if (state.answers.noteChallenge) {
        challengeText += `<br><br><strong class="text-lime-400">התייחסות לדגש האישי שלך:</strong> לקחנו בחשבון את שרשמת ("${state.answers.noteChallenge}") ובנינו את נפח העבודה והמנוחות בהתאם.`;
    }
    
    if (state.answers.gender === 'female') {
        challengeText = adaptTextToGender(challengeText, 'female');
    }

    document.getElementById('result-challenge-response').innerHTML = challengeText;

    let workouts = [];
    if (customMatchedPlan && Array.isArray(customMatchedPlan.days) && customMatchedPlan.days.length > 0) {
        workouts = customMatchedPlan.days;
    } else {
        workouts = buildPersonalizedWorkouts(bio, equipment, frequency);
    }
    state.generatedWorkouts = workouts;

    // Dynamic Header Title & Subtitle for "תוכנית האימון שלך מוכנה"
    const activeCoachSettings = getCoachSettings(state.answers.gender);
    let resultsTitle = (customMatchedPlan && customMatchedPlan.resultsTitle && customMatchedPlan.resultsTitle.trim()) || activeCoachSettings.resultsHeadline || DEFAULT_RESULTS_HEADLINE;
    let resultsSubtitle = (customMatchedPlan && customMatchedPlan.resultsSubtitle && customMatchedPlan.resultsSubtitle.trim()) || activeCoachSettings.resultsSubheadline || DEFAULT_RESULTS_SUBHEADLINE;
    if (state.answers.gender === 'female') {
        resultsTitle = adaptTextToGender(resultsTitle, 'female');
        resultsSubtitle = adaptTextToGender(resultsSubtitle, 'female');
    }
    const resTitleEl = document.getElementById('results-headline-display');
    if (resTitleEl) resTitleEl.innerText = resultsTitle;
    const resSubEl = document.getElementById('results-subheadline-display');
    if (resSubEl) resSubEl.innerText = resultsSubtitle;

    // Helper for formatting personalized placeholders
    function formatPlaceholders(text, ctx) {
        if (!text) return '';
        return text
            .replace(/\{name\}/g, ctx.name || (state.answers.gender === 'female' ? 'מתאמנת' : 'מתאמן'))
            .replace(/\{goal\}/g, ctx.goalTitle || '')
            .replace(/\{split\}/g, ctx.splitName || '')
            .replace(/\{height\}/g, ctx.height ? ctx.height + ' ס"מ' : '')
            .replace(/\{weight\}/g, ctx.weight ? ctx.weight + ' ק"ג' : '')
            .replace(/\{age\}/g, ctx.age || '')
            .replace(/\{gender\}/g, ctx.genderDisplay || '');
    }

    // Personalized Coach Gino Message Box
    const personalMsg = (customMatchedPlan && customMatchedPlan.customMessage && customMatchedPlan.customMessage.trim()) || (activeCoachSettings.resultsWelcomeNote && activeCoachSettings.resultsWelcomeNote.trim()) || '';
    const customMsgBox = document.getElementById('results-custom-message-box');
    const customMsgContent = document.getElementById('results-custom-message-content');
    if (customMsgBox && customMsgContent) {
        if (personalMsg) {
            let formattedMsg = formatPlaceholders(personalMsg, {
                name,
                goalTitle,
                splitName,
                height: state.answers.height,
                weight: state.answers.weight,
                age,
                genderDisplay
            });
            if (state.answers.gender === 'female') {
                formattedMsg = adaptTextToGender(formattedMsg, 'female');
            }
            customMsgContent.innerHTML = formattedMsg.replace(/\n/g, '<br>');
            customMsgBox.classList.remove('hidden');
        } else {
            customMsgBox.classList.add('hidden');
        }
    }

    // Render Workouts HTML
    let htmlWorkout = '';
    if (customMatchedPlan && customMatchedPlan.title) {
        htmlWorkout += `
        <div class="mb-4 p-3.5 bg-lime-950/40 border border-lime-500/40 rounded-xl flex items-center justify-between text-xs">
            <div class="space-y-0.5">
                <span class="text-[10px] text-lime-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <i data-lucide="award" class="w-3.5 h-3.5"></i>
                    תוכנית אימון מותאמת אישית מאת Coach Gino
                </span>
                <span class="font-black text-white text-sm block">${customMatchedPlan.title}</span>
                ${customMatchedPlan.description ? `<p class="text-[11px] text-zinc-300 mt-0.5">${customMatchedPlan.description}</p>` : ''}
            </div>
            <span class="text-[11px] bg-lime-500 text-black px-2.5 py-1 rounded-lg font-black shrink-0 shadow-sm">
                התאמה מלאה 🎯
            </span>
        </div>
        `;
    }
    workouts.forEach(w => {
        htmlWorkout += `
        <div class="space-y-3 mb-6 last:mb-0">
            <h5 class="text-xs font-extrabold text-lime-400 bg-zinc-900/80 px-3 py-1.5 rounded-lg border-r-2 border-lime-500 flex items-center justify-between">
                <span>${w.dayName}</span>
                <span class="text-[10px] text-zinc-400 font-normal">נפח: ${w.exercises.length} תרגילים</span>
            </h5>
            <div class="space-y-2.5">
        `;
        
        w.exercises.forEach((ex, idx) => {
            const escapedExName = ex.name.replace(/'/g, "\\'");
            const escapedNotes = (ex.notes || '').replace(/'/g, "\\'");
            const imageUrl = ex.image || '';
            const exIntensity = ex.intensity || (customMatchedPlan && customMatchedPlan.intensityRule ? customMatchedPlan.intensityRule : '');
            
            htmlWorkout += `
                <div class="bg-zinc-900/40 p-3.5 rounded-xl border border-zinc-800/40 hover:border-zinc-750 transition-colors">
                    <div class="flex justify-between items-start gap-2 mb-1.5">
                        <div class="font-bold text-zinc-100 text-xs leading-snug">
                            ${idx + 1}. ${ex.name}
                        </div>
                        <div class="flex items-center gap-1.5 shrink-0">
                            <!-- View Multi-Stage Exercise Demonstration Lightbox -->
                            <button type="button" onclick="openExerciseStagesModal('${ex.id || escapedExName}')" class="py-1 px-2.5 rounded-lg bg-zinc-850 hover:bg-zinc-800 text-lime-450 border border-lime-500/30 flex items-center gap-1 transition-all text-[11px] font-bold shadow-sm" title="הדגמת שלבי ביצוע התרגיל">
                                <i data-lucide="camera" class="w-3.5 h-3.5 text-cyan-400"></i>
                                <span>שלבי ביצוע 📸</span>
                            </button>
                            <span class="px-2 py-0.5 rounded-md bg-zinc-800 text-[10px] text-zinc-300 font-bold">${ex.setsReps || '2-3 סטים x 6-12 חזרות'}</span>
                        </div>
                    </div>
                    <div class="text-[11px] text-zinc-300 mt-1 leading-relaxed bg-zinc-950/40 p-2 rounded-lg border border-zinc-850/50">
                        <span class="text-lime-400 font-semibold">דגש ביצוע ביומכני:</span> ${ex.notes}
                    </div>
                    <div class="text-[10px] text-zinc-500 mt-1.5 flex justify-between items-center">
                        <span>זמן מנוחה: ${ex.rest || '90-120 שניות (ניתן גם יותר במידת הצורך)'}</span>
                        ${exIntensity ? `<span class="text-lime-400 font-medium">עצימות: ${exIntensity}</span>` : ''}
                    </div>
                </div>
            `;
        });
        
        htmlWorkout += `
            </div>
        </div>
        `;
    });
    
    document.getElementById('result-workout-plan').innerHTML = htmlWorkout;

    // 7. Progressive Overload Guidelines (Tab 3)
    const isFemale = state.answers.gender === 'female';
    const guidelines = [
        {
            title: "חוק העומס הפרוגרסיבי (Progressive Overload):",
            desc: isFemale
                ? "בכל אימון, תשאפי להשתפר לפחות בפרמטר אחד קטן: הוספת 0.5-1 ק\"ג, ביצוע חזרה אחת יותר באותו משקל, או האטת שלב הירידה (טמפו מבוקר). רשמי כל אימון כדי לוודא שאת לא נשארת באותו עומס שבועות ברצף."
                : "בכל אימון, תשאף להשתפר לפחות בפרמטר אחד קטן: הוספת 0.5-1 ק\"ג, ביצוע חזרה אחת יותר באותו משקל, או האטת שלב הירידה (טמפו מבוקר). רשום כל אימון כדי לוודא שאתה לא נשאר באותו עומס שבועות ברצף."
        },
        {
            title: "התאוששות ובנייה שרירית:",
            desc: isFemale
                ? "האימון עצמו רק מייצר גירוי ופציעות מיקרוסקופיות - השריר גדל ונבנה במנוחה! הקפידי על לפחות 7-8 שעות שינה, צריכת חלבון מספקת (לפחות 1.6 גרם לכל ק\"ג), ורווח של 48 שעות לפני אימון חוזר של אותה קבוצת שריר."
                : "האימון עצמו רק מייצר גירוי ופציעות מיקרוסקופיות - השריר גדל ונבנה במנוחה! הקפד על לפחות 7-8 שעות שינה, צריכת חלבון מספקת (לפחות 1.6 גרם לכל ק\"ג), ורווח של 48 שעות לפני אימון חוזר של אותה קבוצת שריר."
        }
    ];

    // Intensity / Muscle Failure Rule ONLY added if explicitly defined by coach in plan:
    if (customMatchedPlan && customMatchedPlan.intensityRule && customMatchedPlan.intensityRule.trim()) {
        const rawRule = customMatchedPlan.intensityRule.trim();
        guidelines.splice(1, 0, {
            title: "הנחיית עצימות וכשל שריר (הוגדר בתוכנית על ידי Coach Gino):",
            desc: isFemale ? adaptTextToGender(rawRule, 'female') : rawRule
        });
    }

    if (bio.isPregnant) {
        guidelines.unshift({
            title: "בטיחות, נשימה סרעפתית ועצימות בהריון 🤰:",
            desc: "איסור מוחלט על עצירת נשימה בזמן מאמץ (מניעת תמרון ולסלבה - Valsalva). נשפי במאמץ (בשלב הלחיצה/העלייה) ושאפי בירידה. עבדי בעצימות מבוקרת של RPE 6-7 ('מבחן הדיבור' - קצב המאפשר שיחה חופשית מבלי להתנשף). שמרי על שתיית מים מרובה והקשיבי לגוף בכל שלב."
        });
    }

    if (customMatchedPlan && customMatchedPlan.guidelines && customMatchedPlan.guidelines.trim()) {
        const rawCustomGuidelines = customMatchedPlan.guidelines.trim();
        guidelines.unshift({
            title: `דגשים מיוחדים עבור ${customMatchedPlan.title}:`,
            desc: isFemale ? adaptTextToGender(rawCustomGuidelines, 'female') : rawCustomGuidelines
        });
    }
    
    let htmlGuidelines = '';
    guidelines.forEach((g, idx) => {
        htmlGuidelines += `
            <div class="bg-zinc-900/40 p-3 rounded-lg border border-zinc-800/40">
                <h5 class="font-bold text-xs text-zinc-100 mb-1 flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-lime-500/10 text-lime-400 flex items-center justify-center text-[10px] font-black shrink-0">${idx + 1}</span>
                    <span>${g.title}</span>
                </h5>
                <p class="text-[11px] text-zinc-400 leading-relaxed">${g.desc}</p>
            </div>
        `;
    });
    document.getElementById('result-guidelines').innerHTML = htmlGuidelines;

    // 8. Coach Gino WhatsApp Redirect URL
    const coachPhone = activeCoachSettings.phone || DEFAULT_COACH_PHONE;
    const basePlanMsg = activeCoachSettings.whatsappPlanMsg || DEFAULT_WHATSAPP_PLAN_MSG;
    const traineeLabel = isFemale ? '*שם המתאמת:*' : '*שם המתאמן:*';
    let exactMessage = `${basePlanMsg}\n\n${traineeLabel} ${name}\n*מטרה:* ${goalTitle}`;
    if (bio.isPregnant) {
        exactMessage = `${basePlanMsg}\n\n*שם המתאמת:* ${name}\n*סטטוס:* הריון (${trimesterNames[bio.pregnancyTrimester] || 'מותאם להריון'}) 🤰\n*מטרה:* ${goalTitle}`;
    }
    document.getElementById('whatsapp-link').href = `https://wa.me/${coachPhone}?text=${encodeURIComponent(exactMessage)}`;

    // Upsell text & WhatsApp button adaptation
    const upsellSubEl = document.getElementById('upsell-subtitle-display');
    if (upsellSubEl) {
        upsellSubEl.innerText = activeCoachSettings.upsellSubtitle;
    }
    const upsellBodyEl = document.getElementById('upsell-body-display');
    if (upsellBodyEl) {
        upsellBodyEl.innerText = activeCoachSettings.upsellBody;
    }
    const upsellBtnText = document.getElementById('upsell-whatsapp-btn-text');
    if (upsellBtnText) {
        upsellBtnText.innerText = activeCoachSettings.upsellBtnText;
    }

    // Save compiled text plan for clipboard
    const bmiValText = (state.answers.height && state.answers.weight) ? `${(state.answers.weight / Math.pow(state.answers.height / 100, 2)).toFixed(1)}` : 'לא חושב';
    const traineeHeader = isFemale ? 'מתאמנת:' : 'מתאמן:';
    state.generatedPlan = `=== תוכנית אימונים מותאמת אישית | Coach Gino ===
${traineeHeader} ${name}
מין: ${genderDisplay}
גיל: ${age} | גובה: ${state.answers.height ? state.answers.height + ' ס"מ' : '-'} | משקל: ${state.answers.weight ? state.answers.weight + ' ק"ג' : '-'} | BMI: ${bmiValText}
מטרה: ${goalTitle}
תדירות שבועית: ${freqDisplay}
${customMatchedPlan ? `תוכנית מותאמת אישית: ${splitName}\n` : `תדירות וחלוקה: ${splitName}\n`}ציוד זמין: ${equipment === 'other' ? equipmentOther : equipmentNames[equipment]}
מגבלות גופניות: ${injuryDisplay}
${bio.isPregnant ? '\n🤰 הופעל פרוטוקול אימון הריוני מותאם ובטוח: הוסרו שכיבה שטוחה על הגב ותרגילי כפיפות בטן ישירים למניעת היפרדות בטנית ולחץ על וריד נבוב!\n' : ''}${bio.isACL ? '\n⚠️ הופעל פרוטוקול שיקום ביומכני מוגן: הוסרו לחלוטין כל סוגי הסקוואטים, לאנג\'ים ומכונות פשיטת ברכיים למניעת עומס גזירה על ה-ACL!\n' : ''}
${personalMsg ? `\nהתאמה אישית מאת Coach Gino:\n${formatPlaceholders(personalMsg, { name, goalTitle, splitName, height: state.answers.height, weight: state.answers.weight, age, genderDisplay })}\n` : ''}
ניתוח ביומכני ומענה לאתגר:
${challengeText.replace(/<br>/g, '\n').replace(/<\/?[^>]+(>|$)/g, "")}

תוכנית האימונים:
${workouts.map(w => {
    return `\n[ ${w.dayName} ]\n` + w.exercises.map((ex, idx) => {
        return `${idx + 1}. ${ex.name} | ${ex.setsReps} | מנוחה: ${ex.rest}\n   דגש ביומכני: ${ex.notes}`;
    }).join('\n');
}).join('\n')}

חוקי התקדמות:
${guidelines.map((g, idx) => `${idx + 1}. ${g.title}\n   ${g.desc}`).join('\n\n')}

כל הזכויות שמורות © Coach Gino 2026.`;

    // Refresh icons
    lucide.createIcons();
}

// Biomechanical Workout Builder (Strict ACL / Knee / Spine / Pregnancy Safety)
function buildPersonalizedWorkouts(bio, equipment, frequency) {
    const bank = getExerciseBank();
    const workouts = [];

    // Helper: find exercise from bank, prioritizing safe ones
    function findExercise(muscle, preferId, fallbackName) {
        if (preferId) {
            const found = bank.find(e => e.id === preferId);
            if (found) return { name: found.name, setsReps: found.defaultSetsReps, rest: found.rest, video: found.video, image: found.image, notes: found.notes };
        }
        const filtered = bank.filter(e => {
            if (e.muscle !== muscle) return false;
            const bans = Array.isArray(e.contraindications) ? e.contraindications : [];
            // Strict Pregnancy ban
            if (bio.isPregnant && (bans.includes('pregnancy') || /שכיבה שטוחה|bench press|לחיצת חזה עם מוט|crunch|כפיפות בטן|sit-up/i.test(e.name))) return false;
            // Strict ACL ban
            if (bio.isACL && (bans.includes('acl') || /סקוואט|squat|לאנג|lunge|leg extension|פשיטת ברכיים/i.test(e.name))) return false;
            // Strict Disc ban
            if (bio.isDisc && (bans.includes('back') || /back squat|deadlift חופשי|סקוואט חופשי/i.test(e.name))) return false;
            // Strict Shoulder ban
            if (bio.isShoulder && bans.includes('shoulders')) return false;
            return true;
        });

        if (filtered.length > 0) {
            const ex = filtered[0];
            return { name: ex.name, setsReps: ex.defaultSetsReps, rest: ex.rest, video: ex.video, image: ex.image, notes: ex.notes };
        }

        const defaultSetsReps = bio.isPregnant ? '2-3 סטים x 6-12 חזרות (RPE 6-7)' : '2-3 סטים x 6-12 חזרות';
        const defaultRest = '90-120 שניות (ניתן גם יותר במידת הצורך)';
        return { name: fallbackName, setsReps: defaultSetsReps, rest: defaultRest, video: 'gcNh17Cwlco', image: '', notes: 'ביצוע איטי ומבוקר.' };
    }

    // Determine Leg Exercises based on Pregnancy / ACL / Knee status
    let legExercise1, legExercise2, legExercise3;
    if (bio.isPregnant) {
        // PRENATAL LEG PROTOCOL: Avoid heavy compressive spinal loading and high pelvic instability
        legExercise1 = findExercise('legs', 'ex_box_squat', 'סקוואט קופסה בעמידה רחבה מתונה (Box Squat - תומך אגן ובטוח להריון)');
        legExercise2 = findExercise('legs', 'ex_glute_bridge', 'גשר ישבן מבוקר (Glute Bridge - חיזוק שרשרת אחורית ורצפת אגן)');
        legExercise3 = findExercise('legs', 'ex_hamstring_curl', 'כפיפת ברכיים במכונה בישיבה (חיזוק המסטרינגס ללא עומס בטני)');
    } else if (bio.isACL) {
        // STRICT ACL PROTOCOL: NO SQUATS, NO LUNGES, NO EXTENSION
        legExercise1 = findExercise('legs', 'ex_glute_bridge', 'גשר ישבן או היפ-תראסט מיוצב (ACL Safe)');
        legExercise2 = findExercise('legs', 'ex_hamstring_curl', 'כפיפת ברכיים במכונה (חיזוק המסטרינגס מייצבי צולבת)');
        legExercise3 = findExercise('legs', 'ex_straight_leg_raise', 'הרמת רגל ישרה לפנים (חיזוק ארבע ראשי ללא גזירה)');
    } else if (bio.isKnee) {
        legExercise1 = findExercise('legs', 'ex_box_squat', 'סקוואט קופסה גבוה מבוקר (Box Squat)');
        legExercise2 = findExercise('legs', 'ex_glute_bridge', 'גשר ישבן או היפ-תראסט מיוצב');
        legExercise3 = findExercise('legs', 'ex_hamstring_curl', 'כפיפת ברכיים במכונה');
    } else {
        legExercise1 = findExercise('legs', 'ex_back_squat', 'סקוואט עם מוט (Back Squat)');
        legExercise2 = findExercise('legs', 'ex_rdl', 'דדליפט רומני (Romanian Deadlift)');
        legExercise3 = findExercise('legs', 'ex_leg_press', 'לחיצת רגליים במכונה');
    }

    // Determine Chest Exercises (Pregnancy avoids flat bench)
    const chestExercise = bio.isPregnant
        ? findExercise('chest', 'ex_incline_db_press', 'לחיצת חזה בשיפוע חיובי בדאמבלים (Incline DB Press - בטוח להריון, ללא שכיבה שטוחה)')
        : (bio.isShoulder
            ? findExercise('chest', 'ex_neutral_db_press', 'לחיצת חזה בדאמבלים באחיזה נייטרלית')
            : findExercise('chest', 'ex_bench_press', 'לחיצת חזה עם מוט (Bench Press)'));

    // Determine Back Exercises
    const backRow = bio.isDisc
        ? findExercise('back', 'ex_chest_supported_row', 'חתירה עם תמיכת חזה במכונה')
        : findExercise('back', 'ex_seated_cable_row', 'חתירה בכבלים בישיבה');

    const latPull = findExercise('back', 'ex_lat_pulldown', 'פולי עליון באחיזה רחבה');

    // Determine Shoulder Exercises
    const shoulderEx = bio.isShoulder
        ? findExercise('shoulders', 'ex_facepulls', 'פייספולס בכבלים (חיזוק מסובבי הכתף)')
        : findExercise('shoulders', 'ex_lateral_raise', 'הרחקת זרועות לצדדים עם דאמבלים');

    // Arms
    const armBicep = findExercise('arms', 'ex_hammer_curl', 'כפיפת מרפקים באחיזת פטיש');
    const armTricep = findExercise('arms', 'ex_rope_pushdown', 'פשיטת מרפקים בכבל עם חבל');
    const coreEx = bio.isPregnant
        ? findExercise('core', 'ex_bird_dog', 'בירד דוג מבוקר על ארבע (McGill Bird-Dog - שמירה על יציבות אגן ורצפת אגן ללא עומס תוך-בטני)')
        : findExercise('core', 'ex_bird_dog', 'בירד דוג מבוקר (McGill Core)');

    // Build Routine Days based on frequency
    if (frequency === '2-3') {
        const dayAExercises = [legExercise1, chestExercise, latPull, shoulderEx, legExercise2, bio.isPregnant ? coreEx : armBicep];
        const dayBExercises = [legExercise3, findExercise('chest', 'ex_incline_db_press', 'לחיצת חזה בשיפוע חיובי (Incline DB Press)'), backRow, findExercise('shoulders', 'ex_facepulls', 'פייספולס בכבלים'), bio.isPregnant ? coreEx : findExercise('legs', 'ex_calf_raise', 'לחיצת תאומים במכונה'), armTricep];
        workouts.push({
            dayName: bio.isPregnant ? 'אימון A (מותאם להריון)' : 'אימון A',
            exercises: dayAExercises
        });
        workouts.push({
            dayName: bio.isPregnant ? 'אימון B (מותאם להריון)' : 'אימון B',
            exercises: dayBExercises
        });
    } else {
        // 4+ Days a week split (Upper / Lower)
        workouts.push({
            dayName: 'אימון A - פלג גוף עליון',
            exercises: [chestExercise, latPull, findExercise('chest', 'ex_incline_db_press', 'לחיצת חזה בשיפוע חיובי'), backRow, shoulderEx, armBicep]
        });
        workouts.push({
            dayName: 'אימון B - פלג גוף תחתון וליבה',
            exercises: [legExercise1, legExercise2, legExercise3, findExercise('legs', 'ex_calf_raise', 'לחיצת תאומים במכונה'), coreEx]
        });
    }

    return workouts;
}

// ============================================================================
// LIGHTBOX MODALS: VIDEO & COACH DEMO PHOTOS
// ============================================================================
function playExerciseVideo(videoId) {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.classList.remove('hidden');
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-iframe');
    iframe.src = '';
    modal.classList.add('hidden');
}

let activeDemoExercise = null;
let activeDemoStageIndex = 0;

function openExerciseStagesModal(exIdOrObj) {
    let ex = null;
    if (typeof exIdOrObj === 'object' && exIdOrObj !== null) {
        ex = exIdOrObj;
    } else if (typeof exIdOrObj === 'string') {
        const bank = getExerciseBank();
        ex = bank.find(e => e.id === exIdOrObj || e.name === exIdOrObj);
        if (!ex && state.generatedWorkouts) {
            for (const w of state.generatedWorkouts) {
                const found = (w.exercises || []).find(e => e.id === exIdOrObj || e.name === exIdOrObj);
                if (found) { ex = found; break; }
            }
        }
    }
    
    if (!ex) {
        ex = {
            id: 'demo_' + Date.now(),
            name: typeof exIdOrObj === 'string' ? exIdOrObj : 'הדגמת תרגיל',
            muscle: 'chest',
            notes: 'הקפד על שליטה מבוקרת, נשימה סדירה ודיוק ביומכני.'
        };
    }
    
    activeDemoExercise = ensureExerciseStages(JSON.parse(JSON.stringify(ex)));
    activeDemoStageIndex = 0;
    
    const titleEl = document.getElementById('image-modal-title');
    if (titleEl) titleEl.innerText = activeDemoExercise.name || 'הדגמת תרגיל';
    
    const badgeMuscle = document.getElementById('image-modal-badge-muscle');
    const muscleMap = { legs: 'רגליים', chest: 'חזה', back: 'גב', shoulders: 'כתפיים', arms: 'ידיים', core: 'בטן וליבה' };
    if (badgeMuscle) badgeMuscle.innerText = muscleMap[activeDemoExercise.muscle] || activeDemoExercise.muscle || 'תרגיל';
    
    renderActiveDemoStage();
    
    const modal = document.getElementById('image-modal');
    if (modal) modal.classList.remove('hidden');
    if (window.lucide && typeof window.lucide.createIcons === 'function') lucide.createIcons();
}

function selectDemoStage(stageIndex) {
    if (!activeDemoExercise || !activeDemoExercise.stages) return;
    if (stageIndex < 0 || stageIndex >= activeDemoExercise.stages.length) return;
    activeDemoStageIndex = stageIndex;
    renderActiveDemoStage();
}

function prevDemoStage() {
    if (!activeDemoExercise || !activeDemoExercise.stages) return;
    const len = activeDemoExercise.stages.length;
    activeDemoStageIndex = (activeDemoStageIndex - 1 + len) % len;
    renderActiveDemoStage();
}

function nextDemoStage() {
    if (!activeDemoExercise || !activeDemoExercise.stages) return;
    const len = activeDemoExercise.stages.length;
    activeDemoStageIndex = (activeDemoStageIndex + 1) % len;
    renderActiveDemoStage();
}

function renderActiveDemoStage() {
    if (!activeDemoExercise || !activeDemoExercise.stages) return;
    const stages = activeDemoExercise.stages;
    const stage = stages[activeDemoStageIndex];
    if (!stage) return;
    
    const imgEl = document.getElementById('image-modal-src');
    const emptyEl = document.getElementById('image-modal-empty-state');
    const hasImage = stage.image && stage.image.trim() && !stage.image.includes('unsplash.com');
    
    if (hasImage) {
        if (imgEl) {
            imgEl.src = stage.image;
            imgEl.alt = `${activeDemoExercise.name} - ${stage.title}`;
            imgEl.classList.remove('hidden');
        }
        if (emptyEl) {
            emptyEl.classList.add('hidden');
            emptyEl.classList.remove('flex');
        }
    } else {
        if (imgEl) {
            imgEl.src = '';
            imgEl.classList.add('hidden');
        }
        if (emptyEl) {
            emptyEl.classList.remove('hidden');
            emptyEl.classList.add('flex');
        }
    }
    
    const stepLabel = document.getElementById('image-modal-step-label');
    if (stepLabel) stepLabel.innerText = `שלב ${activeDemoStageIndex + 1} מתוך ${stages.length}`;
    
    const stageTitle = document.getElementById('image-modal-stage-title');
    if (stageTitle) stageTitle.innerText = stage.title || `דגש ביצוע: שלב ${activeDemoStageIndex + 1}`;
    
    const stageCues = document.getElementById('image-modal-cues');
    if (stageCues) stageCues.innerText = stage.cues || 'הקפד על שליטה מבוקרת, נשימה סדירה ודיוק ביומכני.';
    
    // Update Tabs
    [0, 1, 2].forEach(i => {
        const tabBtn = document.getElementById(`stage-tab-${i}`);
        const dot = document.getElementById(`dot-${i}`);
        if (tabBtn) {
            if (i === activeDemoStageIndex) {
                tabBtn.className = 'stage-tab py-2 px-1 rounded-lg text-center transition-all bg-lime-500 text-black shadow-sm font-bold active-stage';
            } else {
                tabBtn.className = 'stage-tab py-2 px-1 rounded-lg text-center transition-all text-zinc-400 hover:text-white';
            }
        }
        if (dot) {
            if (i === activeDemoStageIndex) {
                dot.className = 'w-2.5 h-2.5 rounded-full bg-lime-400 transition-all';
            } else {
                dot.className = 'w-2 h-2 rounded-full bg-zinc-700 transition-all';
            }
        }
    });
}

function openExerciseImage(imgUrl, exName, cues) {
    // Backward compatibility wrapper
    openExerciseStagesModal({
        name: exName || 'תרגיל',
        image: imgUrl,
        notes: cues
    });
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    if (modal) modal.classList.add('hidden');
}

// Window bindings for lightbox
window.openExerciseStagesModal = openExerciseStagesModal;
window.selectDemoStage = selectDemoStage;
window.prevDemoStage = prevDemoStage;
window.nextDemoStage = nextDemoStage;
window.openExerciseImage = openExerciseImage;
window.closeImageModal = closeImageModal;

// Tab Switching (Results Screen)
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
    document.getElementById(tabId).classList.remove('hidden');
    
    ['tab-overview', 'tab-exercises', 'tab-guidelines'].forEach(t => {
        const btn = document.getElementById(`btn-${t}`);
        if (t === tabId) {
            btn.classList.add('bg-lime-500', 'text-black');
            btn.classList.remove('text-zinc-400', 'hover:text-white');
        } else {
            btn.classList.remove('bg-lime-500', 'text-black');
            btn.classList.add('text-zinc-400', 'hover:text-white');
        }
    });
}

function copyToClipboard() {
    if (!state.generatedPlan) return;
    navigator.clipboard.writeText(state.generatedPlan).then(() => {
        const btnText = document.getElementById('copy-text');
        const btnIcon = document.getElementById('copy-icon');
        btnText.innerText = 'התוכנית הועתקה בהצלחה!  ';
        btnIcon.setAttribute('data-lucide', 'check');
        lucide.createIcons();
        setTimeout(() => {
            btnText.innerText = 'העתק תוכנית אימונים מלאה 📋';
            btnIcon.setAttribute('data-lucide', 'copy');
            lucide.createIcons();
        }, 3000);
    }).catch(err => {
        alert('העתקה נכשלה. אנא העתק את הטקסט באופן ידני.');
    });
}

// ============================================================================
// MASTER ADMIN CMS & CRM (TRIPLE CLICK ON ⚡, PASSWORD: orihagai55)
// ============================================================================
function setupAdminTrigger() {
    const trigger = document.getElementById('admin-trigger');
    if (!trigger) return;
    
    let clickCount = 0;
    let clickTimer;
    
    trigger.addEventListener('click', () => {
        clickCount++;
        clearTimeout(clickTimer);
        
        if (clickCount === 3) {
            clickCount = 0;
            openAdminPasswordModal();
        } else {
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 1000);
        }
    });
}

function openAdminPasswordModal() {
    document.getElementById('admin-password-input').value = '';
    document.getElementById('admin-login-error').classList.add('hidden');
    document.getElementById('admin-password-modal').classList.remove('hidden');
    document.getElementById('admin-password-input').focus();
}

function closeAdminPasswordModal() {
    document.getElementById('admin-password-modal').classList.add('hidden');
}

function submitAdminPassword() {
    const passwordInput = document.getElementById('admin-password-input');
    const errorEl = document.getElementById('admin-login-error');
    
    if (passwordInput.value === 'orihagai55') {
        errorEl.classList.add('hidden');
        closeAdminPasswordModal();
        openAdminDashboard();
    } else {
        errorEl.classList.remove('hidden');
        passwordInput.focus();
    }
}

function openAdminDashboard() {
    document.getElementById('admin-dashboard-modal').classList.remove('hidden');
    renderAdminLeads();
    renderAdminSessions();
    renderAdminQuestionnaireEditor();
    renderCmsExercises();
    renderAdminPlans();
    renderPersonalCloudGallery();
    loadSettingsIntoAdmin();
    switchAdminTab('admin-leads-tab');
    lucide.createIcons();
}

function closeAdminDashboard() {
    document.getElementById('admin-dashboard-modal').classList.add('hidden');
}

function switchAdminTab(tabId) {
    document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.add('hidden'));
    const targetEl = document.getElementById(tabId);
    if (targetEl) targetEl.classList.remove('hidden');
    
    const tabs = ['admin-leads-tab', 'admin-sessions-tab', 'admin-questionnaire-tab', 'admin-cms-tab', 'admin-settings-tab', 'admin-plans-tab'];
    tabs.forEach(t => {
        const btn = document.getElementById(`btn-${t}`);
        if (btn) {
            if (t === tabId) {
                btn.classList.add('bg-lime-500', 'text-black');
                btn.classList.remove('bg-zinc-900', 'text-zinc-400');
            } else {
                btn.classList.remove('bg-lime-500', 'text-black');
                btn.classList.add('bg-zinc-900', 'text-zinc-400');
            }
        }
    });
    if (tabId === 'admin-questionnaire-tab') {
        switchAdminQuestionnaireGender(adminQuestionnaireCurrentGender || 'male');
    }
    if (tabId === 'admin-settings-tab') {
        switchAdminSettingsGender(adminSettingsCurrentGender || 'male');
    }
    if (tabId === 'admin-cms-tab') {
        renderCmsExercises();
    }
    if (tabId === 'admin-plans-tab') {
        renderAdminPlans();
    }
    if (tabId === 'admin-cloud-tab') {
        renderPersonalCloudGallery();
    }
    lucide.createIcons();
}

// TAB 1: RENDER LEADS TABLE
function renderAdminLeads() {
    const leads = JSON.parse(localStorage.getItem('gino_leads') || '[]');
    const tbody = document.getElementById('admin-leads-tbody');
    const searchVal = (document.getElementById('admin-search-input').value || '').trim().toLowerCase();
    
    tbody.innerHTML = '';
    
    const filteredLeads = leads.filter(l => {
        return l.fullName.toLowerCase().includes(searchVal) || l.phone.includes(searchVal);
    }).reverse();
    
    document.getElementById('admin-total-leads').innerText = leads.length;
    document.getElementById('badge-leads-count').innerText = leads.length;
    const mailingCount = leads.filter(l => l.mailingApproved).length;
    document.getElementById('admin-approved-mailing').innerText = mailingCount;
    
    if (filteredLeads.length === 0) {
        document.getElementById('no-leads-message').classList.remove('hidden');
        return;
    }
    
    document.getElementById('no-leads-message').classList.add('hidden');
    
    filteredLeads.forEach(lead => {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-zinc-900 hover:bg-zinc-900/40 transition-colors';
        
        let typeBadge = '<span class="text-zinc-500 text-[10px]">אוטומטית</span>';
        const isPreg = lead.isPregnant || (lead.answers && lead.answers.gender === 'female' && lead.answers.isPregnant === 'yes');
        if (isPreg && lead.isInjured) {
            typeBadge = '<span class="px-1.5 py-0.5 rounded text-[9px] bg-purple-950/60 text-purple-300 border border-purple-900/50 font-bold">שיחת ייעוץ (הריון + פציעה)</span>';
        } else if (isPreg) {
            typeBadge = '<span class="px-1.5 py-0.5 rounded text-[9px] bg-pink-950/60 text-pink-300 border border-pink-900/50 font-bold">שיחת ייעוץ (הריון 🤰)</span>';
        } else if (lead.isInjured) {
            typeBadge = '<span class="px-1.5 py-0.5 rounded text-[9px] bg-red-950/60 text-red-400 border border-red-900/50 font-bold">שיחת ייעוץ (פציעה)</span>';
        } else if (lead.customPlan) {
            typeBadge = '<span class="px-1.5 py-0.5 rounded text-[9px] bg-lime-500/10 text-lime-400 border border-lime-500/20 font-bold">נערכה ידנית</span>';
        }
        
        tr.innerHTML = `
            <td class="p-3 text-zinc-400 text-[11px]">${lead.timestamp.split(',')[0]}</td>
            <td class="p-3 font-semibold text-zinc-100">${lead.fullName}</td>
            <td class="p-3 text-zinc-300 ltr">${lead.phone}</td>
            <td class="p-3 text-zinc-300">${lead.instagram || '-'}</td>
            <td class="p-3 text-zinc-400">${lead.durationFormatted || 'פחות מדקה'}</td>
            <td class="p-3">${typeBadge}</td>
            <td class="p-3 text-center flex items-center justify-center gap-1.5">
                <button onclick="viewLeadDetail('${lead.id}')" class="p-1 px-2 bg-zinc-800 hover:bg-zinc-700 text-lime-450 border border-zinc-750 rounded transition-colors" title="כרטיס מתאמן מלא">
                    <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                </button>
                <button onclick="openWhatsAppChat('${lead.phone}')" class="p-1 px-2 bg-lime-500/10 hover:bg-lime-500/20 text-lime-400 border border-lime-500/25 rounded transition-colors" title="שלח וואטסאפ מהיר">
                    <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
                </button>
                <button onclick="deleteLead('${lead.id}')" class="p-1 px-2 bg-red-950/20 hover:bg-red-950/40 text-red-400 border border-red-900/30 rounded transition-colors" title="מחק ליד">
                    <i data-lucide="trash" class="w-3.5 h-3.5"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    lucide.createIcons();
}

// View Lead Detail Modal (with "Edit Plan" button)
let currentlyViewingLead = null;

function viewLeadDetail(leadId) {
    const leads = JSON.parse(localStorage.getItem('gino_leads') || '[]');
    const lead = leads.find(l => l.id === leadId);
    if (!lead) return;
    
    currentlyViewingLead = lead;
    
    document.getElementById('detail-fullName').innerText = lead.fullName;
    document.getElementById('detail-phone').innerText = lead.phone;
    document.getElementById('detail-instagram').innerText = lead.instagram || 'לא צוין';
    document.getElementById('detail-compliance').innerHTML = lead.mailingApproved 
        ? '<span class="text-lime-400 font-bold">כן (מאשר קבלת דיוור)</span>' 
        : '<span class="text-red-400 font-bold">לא מאשר דיוור</span>';
    
    const ans = lead.answers || {};

    const genderEl = document.getElementById('detail-gender');
    if (genderEl) {
        genderEl.innerText = genderNames[ans.gender] || (ans.gender === 'female' ? 'אישה ♀' : (ans.gender === 'male' ? 'גבר ♂' : 'לא צוין'));
    }

    const metricsEl = document.getElementById('detail-metrics');
    if (metricsEl) {
        const parts = [];
        if (ans.age) parts.push(`גיל: ${ans.age}`);
        if (ans.height) parts.push(`גובה: ${ans.height} ס"מ`);
        if (ans.weight) parts.push(`משקל: ${ans.weight} ק"ג`);
        metricsEl.innerText = parts.length > 0 ? parts.join(' | ') : 'לא צוין';
    }

    const bmiEl = document.getElementById('detail-bmi');
    if (bmiEl) {
        if (lead.bmiFormatted) {
            bmiEl.innerText = lead.bmiFormatted;
        } else if (ans.height && ans.weight) {
            const h = ans.height / 100;
            const b = (ans.weight / (h * h)).toFixed(1);
            let cat = '';
            if (b < 18.5) cat = '(תת-משקל)';
            else if (b < 25) cat = '(משקל תקין)';
            else if (b < 30) cat = '(עודף משקל)';
            else cat = '(השמנה)';
            bmiEl.innerText = `${b} ${cat}`;
        } else {
            bmiEl.innerText = 'לא ניתן לחישוב';
        }
    }
    
    const leadTypeEl = document.getElementById('detail-leadType');
    if (leadTypeEl) {
        const isPreg = lead.isPregnant || (ans.gender === 'female' && ans.isPregnant === 'yes');
        if (isPreg && lead.isInjured) {
            leadTypeEl.innerHTML = '<span class="text-purple-400 font-bold">הופנה לשיחת ייעוץ אישית (הריון + פציעה/מגבלה) 🤰🩺</span>';
        } else if (isPreg) {
            leadTypeEl.innerHTML = '<span class="text-pink-400 font-bold">הופנה לשיחת ייעוץ אישית (הריון) 🤰</span>';
        } else if (lead.isInjured) {
            leadTypeEl.innerHTML = '<span class="text-amber-400 font-bold">הופנה לשיחת ייעוץ אישית (פציעה/מגבלה רפואית) 🩺</span>';
        } else {
            leadTypeEl.innerHTML = '<span class="text-lime-400 font-bold">תוכנית אימונים אוטומטית</span>';
        }
    }
    
    document.getElementById('detail-duration').innerText = lead.durationFormatted || 'פחות מדקה';
    document.getElementById('detail-timestamp').innerText = lead.timestamp;
    
    const container = document.getElementById('detail-answers-container');
    container.innerHTML = '';
    
    const bmiText = (ans.height && ans.weight) ? `${(ans.weight / Math.pow(ans.height / 100, 2)).toFixed(1)}` : '-';
    const items = [
        { label: 'מין:', val: genderNames[ans.gender] || (ans.gender === 'female' ? 'אישה ♀' : (ans.gender === 'male' ? 'גבר ♂' : 'לא צוין')) },
        ...(ans.gender === 'female' ? [{
            label: 'סטטוס הריון:',
            val: ans.isPregnant === 'yes' ? `כן 🤰 (${trimesterNames[ans.pregnancyTrimester] || ans.pregnancyTrimester || 'שלב לא צוין'})` : 'לא',
            note: ans.pregnancyNotes
        }] : []),
        { label: 'מדדי גוף:', val: `גיל: ${ans.age || '-'} | גובה: ${ans.height ? ans.height + ' ס"מ' : '-'} | משקל: ${ans.weight ? ans.weight + ' ק"ג' : '-'} | BMI: ${bmiText}`, note: ans.noteAge },
        { label: 'אופי תעסוקה:', val: ans.activity === 'other' ? `אחר: ${ans.activityOther}` : (activityNames[ans.activity] || ans.activity), note: ans.noteActivity },
        { label: 'מטרת על:', val: ans.goal === 'other' ? `אחר: ${ans.goalOther}` : (goalNames[ans.goal] || ans.goal), note: ans.noteGoal },
        { label: 'ניסיון אימונים:', val: ans.experience === 'other' ? `אחר: ${ans.experienceOther}` : (experienceNames[ans.experience] || ans.experience), note: ans.noteExperience },
        { label: 'תדירות מועדפת:', val: ans.frequency === 'other' ? `אחר: ${ans.frequencyOther}` : (frequencyNames[ans.frequency] || ans.frequency), note: ans.noteFrequency },
        { label: 'מגבלות גופניות:', val: (ans.injuries || []).map(i => injuryNames[i] || i).join(', '), note: ans.noteInjuries },
        { label: 'פירוט פציעות שהוזן:', val: ans.injuryDetail || 'אין פירוט נוסף' },
        { label: 'ציוד זמין:', val: ans.equipment === 'other' ? `אחר: ${ans.equipmentOther}` : (equipmentNames[ans.equipment] || ans.equipment), note: ans.noteEquipment },
        { label: 'האתגר המרכזי:', val: ans.challenge === 'other' ? `אחר: ${ans.challengeOther}` : (challengeNames[ans.challenge] || ans.challenge), note: ans.noteChallenge }
    ];
    
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'border-b border-zinc-900 pb-1.5 last:border-0';
        div.innerHTML = `
            <span class="text-zinc-500 font-medium block">${item.label}</span>
            <span class="text-zinc-100 font-semibold">${item.val}</span>
            ${item.note ? `<div class="text-lime-400 text-[10px] mt-0.5 bg-zinc-950 p-1 rounded border border-zinc-850">דגש אישי של המתאמן: "${item.note}"</div>` : ''}
        `;
        container.appendChild(div);
    });
    
    // Bind Edit Plan button
    document.getElementById('detail-btn-edit-plan').onclick = () => {
        openEditPlanModal(lead);
    };
    
    document.getElementById('detail-btn-whatsapp').onclick = () => {
        openWhatsAppChat(lead.phone);
    };
    
    document.getElementById('lead-details-modal').classList.remove('hidden');
    lucide.createIcons();
}

function closeLeadDetailsModal() {
    document.getElementById('lead-details-modal').classList.add('hidden');
}

// Custom Plan Editor for Coach Gino
function openEditPlanModal(lead) {
    document.getElementById('edit-plan-lead-name').innerText = lead.fullName;
    const planTextarea = document.getElementById('edit-plan-textarea');
    
    // Use custom plan if already edited, or default generated text
    planTextarea.value = lead.customPlan || state.generatedPlan || `תוכנית אימונים מותאמת אישית עבור ${lead.fullName}:\n\n- אימון A:\n...\n- אימון B:\n...`;
    
    document.getElementById('edit-plan-modal').classList.remove('hidden');
}

function closeEditPlanModal() {
    document.getElementById('edit-plan-modal').classList.add('hidden');
}

function saveCustomPlanForLead() {
    if (!currentlyViewingLead) return;
    const newPlanText = document.getElementById('edit-plan-textarea').value.trim();
    
    let leads = JSON.parse(localStorage.getItem('gino_leads') || '[]');
    const leadIndex = leads.findIndex(l => l.id === currentlyViewingLead.id);
    if (leadIndex !== -1) {
        leads[leadIndex].customPlan = newPlanText;
        localStorage.setItem('gino_leads', JSON.stringify(leads));
        currentlyViewingLead.customPlan = newPlanText;
        alert(`התוכנית המותאמת עבור ${currentlyViewingLead.fullName} עודכנה ונשמרה בהצלחה!`);
    }
    
    closeEditPlanModal();
    renderAdminLeads();
}

function openWhatsAppChat(phone) {
    const whatsappNum = normalizePhoneForWhatsapp(phone);
    window.open(`https://wa.me/${whatsappNum}`, '_blank');
}

function deleteLead(leadId) {
    if (confirm("האם אתה בטוח שברצונך למחוק ליד זה?")) {
        let leads = JSON.parse(localStorage.getItem('gino_leads') || '[]');
        leads = leads.filter(l => l.id !== leadId);
        localStorage.setItem('gino_leads', JSON.stringify(leads));
        renderAdminLeads();
    }
}

function clearAllLeads() {
    if (confirm("אזהרה: האם אתה בטוח שברצונך למחוק את כל הלידים? פעולה זו בלתי הפיכה!")) {
        if (confirm("אישור סופי: למחוק הכל?")) {
            localStorage.removeItem('gino_leads');
            renderAdminLeads();
        }
    }
}

function exportToCSV() {
    const leads = JSON.parse(localStorage.getItem('gino_leads') || '[]');
    if (leads.length === 0) {
        alert("אין לידים לייצוא.");
        return;
    }
    
    let csvContent = "\uFEFF"; // UTF-8 BOM for Hebrew Excel
    const headers = [
        "תאריך הרשמה", "זמן גלישה", "שם מלא", "מין", "האם בהריון", "שלב והערות הריון", "טלפון", "אינסטגרם", "אישור דיוור", 
        "גיל", "הערת גיל ומדדים", "גובה (ס\"מ)", "משקל (ק\"ג)", "מדד מסת גוף (BMI)", 
        "אופי פעילות", "פירוט פעילות", "הערת פעילות", 
        "מטרת על", "פירוט מטרה", "הערת מטרה", "ניסיון כוח", "הערת ניסיון", 
        "תדירות אימונים", "הערת תדירות", "מגבלות גופניות", "פירוט פציעות מלא", 
        "הערת פציעות", "ציוד זמין", "הערת ציוד", "אתגר מרכזי", "הערת אתגר"
    ];
    csvContent += headers.join(",") + "\n";
    
    leads.forEach(lead => {
        const a = lead.answers || {};
        const bmiVal = (a.height && a.weight) ? (a.weight / Math.pow(a.height / 100, 2)).toFixed(1) : (lead.bmi || '');
        const isPregStr = a.gender === 'female' ? (a.isPregnant === 'yes' ? 'כן' : 'לא') : 'לא רלוונטי (גבר)';
        const pregDetailsStr = a.gender === 'female' && a.isPregnant === 'yes' ? `${trimesterNames[a.pregnancyTrimester] || a.pregnancyTrimester || ''}${a.pregnancyNotes ? ' | ' + a.pregnancyNotes : ''}` : '';
        const row = [
            `"${(lead.timestamp || '').replace(/"/g, '""')}"`,
            `"${(lead.durationFormatted || '').replace(/"/g, '""')}"`,
            `"${(lead.fullName || '').replace(/"/g, '""')}"`,
            `"${(genderNames[a.gender] || a.gender || '').replace(/"/g, '""')}"`,
            `"${isPregStr.replace(/"/g, '""')}"`,
            `"${pregDetailsStr.replace(/"/g, '""')}"`,
            `"${(lead.phone || '').replace(/"/g, '""')}"`,
            `"${(lead.instagram || '').replace(/"/g, '""')}"`,
            `"${lead.mailingApproved ? 'כן' : 'לא'}"`,
            `"${a.age || ''}"`,
            `"${(a.noteAge || '').replace(/"/g, '""')}"`,
            `"${a.height || ''}"`,
            `"${a.weight || ''}"`,
            `"${bmiVal}"`,
            `"${(activityNames[a.activity] || a.activity || '').replace(/"/g, '""')}"`,
            `"${(a.activityOther || '').replace(/"/g, '""')}"`,
            `"${(a.noteActivity || '').replace(/"/g, '""')}"`,
            `"${(goalNames[a.goal] || a.goal || '').replace(/"/g, '""')}"`,
            `"${(a.goalOther || '').replace(/"/g, '""')}"`,
            `"${(a.noteGoal || '').replace(/"/g, '""')}"`,
            `"${(experienceNames[a.experience] || a.experience || '').replace(/"/g, '""')}"`,
            `"${(a.noteExperience || '').replace(/"/g, '""')}"`,
            `"${(frequencyNames[a.frequency] || a.frequency || '').replace(/"/g, '""')}"`,
            `"${(a.noteFrequency || '').replace(/"/g, '""')}"`,
            `"${(a.injuries || []).map(i => injuryNames[i] || i).join('; ')}"`,
            `"${(a.injuryDetail || '').replace(/"/g, '""')}"`,
            `"${(a.noteInjuries || '').replace(/"/g, '""')}"`,
            `"${(equipmentNames[a.equipment] || a.equipment || '').replace(/"/g, '""')}"`,
            `"${(a.noteEquipment || '').replace(/"/g, '""')}"`,
            `"${(challengeNames[a.challenge] || a.challenge || '').replace(/"/g, '""')}"`,
            `"${(a.noteChallenge || '').replace(/"/g, '""')}"`
        ];
        csvContent += row.join(",") + "\n";
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Coach_Gino_Leads_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ============================================================================
// TAB 2: SESSIONS & ABANDONMENT ANALYTICS (COOKIES)
// ============================================================================
function renderAdminSessions() {
    const sessions = JSON.parse(localStorage.getItem('gino_sessions') || '[]');
    const tbody = document.getElementById('admin-sessions-tbody');
    tbody.innerHTML = '';
    
    document.getElementById('admin-total-sessions').innerText = sessions.length;
    document.getElementById('badge-sessions-count').innerText = sessions.length;
    
    const converted = sessions.filter(s => s.status === 'converted').length;
    const abandoned = sessions.filter(s => s.status !== 'converted').length;
    
    document.getElementById('admin-converted-sessions').innerText = converted;
    document.getElementById('admin-abandoned-sessions').innerText = abandoned;
    
    sessions.slice().reverse().forEach(sess => {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-zinc-900 hover:bg-zinc-900/40 transition-colors';
        
        const isConverted = sess.status === 'converted';
        const badge = isConverted
            ? '<span class="px-2 py-0.5 rounded text-[10px] bg-lime-500/10 text-lime-400 font-bold border border-lime-500/20">הושלם (ליד מלא)</span>'
            : '<span class="px-2 py-0.5 rounded text-[10px] bg-orange-500/10 text-orange-400 font-bold border border-orange-500/20">נטש באמצע</span>';
            
        tr.innerHTML = `
            <td class="p-3 text-zinc-400 font-mono text-[10px] ltr">${sess.id}</td>
            <td class="p-3 text-zinc-300 text-[11px]">${sess.startTimeFormatted}</td>
            <td class="p-3 text-zinc-200 font-semibold">${formatDuration(sess.durationSeconds)}</td>
            <td class="p-3 text-zinc-300">${sess.stepName}</td>
            <td class="p-3">${badge}</td>
            <td class="p-3 text-center">
                <button onclick="viewSessionPartialAnswers('${sess.id}')" class="py-1 px-2.5 bg-zinc-800 hover:bg-zinc-700 text-lime-400 rounded-lg text-xs transition-all flex items-center justify-center gap-1 mx-auto">
                    <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                    <span>צפה בתשובות</span>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    lucide.createIcons();
}

function viewSessionPartialAnswers(sessionId) {
    const sessions = JSON.parse(localStorage.getItem('gino_sessions') || '[]');
    const sess = sessions.find(s => s.id === sessionId);
    if (!sess) return;
    
    const container = document.getElementById('session-modal-content');
    container.innerHTML = `
        <div class="bg-zinc-950 p-2.5 rounded-lg border border-zinc-850 space-y-1 mb-2 text-xs">
            <div><span class="text-zinc-500">שעת כניסה:</span> ${sess.startTimeFormatted}</div>
            <div><span class="text-zinc-500">זמן שהייה:</span> ${formatDuration(sess.durationSeconds)}</div>
            <div><span class="text-zinc-500">שלב אחרון:</span> ${sess.stepName}</div>
            <div><span class="text-zinc-500">סטטוס:</span> ${sess.status === 'converted' ? 'הושלם בהצלחה' : 'נטש בשאלון'}</div>
            ${sess.lead ? `<div><span class="text-lime-400 font-bold">ליד:</span> ${sess.lead.fullName} (${sess.lead.phone})</div>` : ''}
        </div>
        <h5 class="font-bold text-xs text-lime-400">נתונים שהמשתמש הספיק להזין:</h5>
    `;
    
    const ans = sess.partialAnswers || {};
    if (Object.keys(ans).length === 0 || (!ans.gender && !ans.age && !ans.activity && !ans.goal)) {
        container.innerHTML += `<p class="text-zinc-500 text-xs py-2">הגולש עזב מבלי להזין נתונים.</p>`;
    } else {
        const ul = document.createElement('div');
        ul.className = 'space-y-1.5 text-xs bg-zinc-950/60 p-2.5 rounded-lg border border-zinc-850';
        if (ans.gender) ul.innerHTML += `<div><strong>מין:</strong> ${genderNames[ans.gender] || ans.gender}</div>`;
        if (ans.gender === 'female' && ans.isPregnant) {
            ul.innerHTML += `<div><strong>הריון:</strong> ${ans.isPregnant === 'yes' ? `כן 🤰 (${trimesterNames[ans.pregnancyTrimester] || ans.pregnancyTrimester || 'שלב לא צוין'})` : 'לא'} ${ans.pregnancyNotes ? `(הערה: ${ans.pregnancyNotes})` : ''}</div>`;
        }
        if (ans.age) ul.innerHTML += `<div><strong>גיל:</strong> ${ans.age} ${ans.noteAge ? `(דגש: ${ans.noteAge})` : ''}</div>`;
        if (ans.height) ul.innerHTML += `<div><strong>גובה:</strong> ${ans.height} ס"מ</div>`;
        if (ans.weight) ul.innerHTML += `<div><strong>משקל:</strong> ${ans.weight} ק"ג</div>`;
        if (ans.height && ans.weight) {
            const b = (ans.weight / Math.pow(ans.height / 100, 2)).toFixed(1);
            ul.innerHTML += `<div><strong>מדד BMI:</strong> ${b}</div>`;
        }
        if (ans.activity) ul.innerHTML += `<div><strong>פעילות:</strong> ${ans.activityOther || activityNames[ans.activity] || ans.activity}</div>`;
        if (ans.goal) ul.innerHTML += `<div><strong>מטרה:</strong> ${ans.goalOther || goalNames[ans.goal] || ans.goal}</div>`;
        if (ans.experience) ul.innerHTML += `<div><strong>ניסיון:</strong> ${ans.experienceOther || experienceNames[ans.experience] || ans.experience}</div>`;
        if (ans.frequency) ul.innerHTML += `<div><strong>תדירות:</strong> ${ans.frequencyOther || frequencyNames[ans.frequency] || ans.frequency}</div>`;
        if (ans.injuries && ans.injuries.length) ul.innerHTML += `<div><strong>פציעות:</strong> ${ans.injuries.map(i => injuryNames[i] || i).join(', ')}</div>`;
        if (ans.injuryDetail) ul.innerHTML += `<div><strong>פירוט פציעות:</strong> ${ans.injuryDetail}</div>`;
        if (ans.equipment) ul.innerHTML += `<div><strong>ציוד:</strong> ${ans.equipmentOther || equipmentNames[ans.equipment] || ans.equipment}</div>`;
        if (ans.challenge) ul.innerHTML += `<div><strong>אתגר:</strong> ${ans.challengeOther || challengeNames[ans.challenge] || ans.challenge}</div>`;
        container.appendChild(ul);
    }
    
    document.getElementById('session-details-modal').classList.remove('hidden');
    lucide.createIcons();
}

function closeSessionDetailsModal() {
    document.getElementById('session-details-modal').classList.add('hidden');
}

// ============================================================================
// TAB 3: EXERCISE BANK CMS
// ============================================================================
function renderCmsExercises() {
    const bank = getExerciseBank();
    const countBadge = document.getElementById('cms-bank-count-badge');
    if (countBadge) countBadge.innerText = `${bank.length} תרגילים במאגר`;

    const tbody = document.getElementById('admin-cms-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const searchVal = (document.getElementById('cms-search-input')?.value || '').trim().toLowerCase();
    const filterMuscle = document.getElementById('cms-filter-muscle')?.value || 'all';
    const filterEquip = document.getElementById('cms-filter-equip')?.value || 'all';
    const filterBan = document.getElementById('cms-filter-ban')?.value || 'all';

    const filtered = bank.filter(ex => {
        if (searchVal) {
            const matchName = (ex.name || '').toLowerCase().includes(searchVal);
            const matchNotes = (ex.notes || '').toLowerCase().includes(searchVal);
            if (!matchName && !matchNotes) return false;
        }
        if (filterMuscle !== 'all' && ex.muscle !== filterMuscle) return false;
        if (filterEquip !== 'all' && ex.equipment !== filterEquip) return false;
        if (filterBan !== 'all') {
            const bans = Array.isArray(ex.contraindications) ? ex.contraindications : [];
            if (filterBan === 'safe_pregnancy' && bans.includes('pregnancy')) return false;
            if (filterBan === 'safe_acl' && bans.includes('acl')) return false;
            if (filterBan === 'safe_back' && bans.includes('back')) return false;
            if (filterBan === 'safe_shoulder' && bans.includes('shoulders')) return false;
        }
        return true;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="p-8 text-center text-zinc-400">
                    <div class="flex flex-col items-center justify-center gap-2">
                        <i data-lucide="dumbbell" class="w-8 h-8 text-lime-400/50"></i>
                        <span class="font-bold text-sm text-zinc-200">לא נמצאו תרגילים התואמים לסינון</span>
                        <span class="text-xs text-zinc-500 max-w-md">נסה לשנות את מילות החיפוש או לאפס את הסינונים למעלה.</span>
                    </div>
                </td>
            </tr>
        `;
        if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
        return;
    }
    
    const muscleNames = {
        legs: 'רגליים וישבן',
        chest: 'חזה',
        back: 'גב',
        shoulders: 'כתפיים',
        arms: 'ידיים',
        core: 'בטן וליבה'
    };
    const equipNames = {
        gym: 'חדר כושר',
        home: 'משקולות ביתיות',
        bodyweight: 'משקל גוף'
    };
    const banLabels = {
        acl: 'ברכיים / ACL',
        back: 'גב / דיסק',
        shoulders: 'פציעת כתף',
        pregnancy: 'הריון 🤰'
    };

    filtered.forEach(ex => {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-zinc-900 hover:bg-zinc-900/40 transition-colors';
        
        const bansList = Array.isArray(ex.contraindications) ? ex.contraindications : [];
        const bans = bansList.map(b => `<span class="inline-block px-1.5 py-0.5 rounded text-[10px] ${b === 'pregnancy' ? 'bg-pink-950/50 text-pink-300 border-pink-900/50' : 'bg-red-950/50 text-red-400 border-red-900/50'} border font-medium">אסור ב-${banLabels[b] || b}</span>`).join(' ') || '<span class="text-lime-400/80 text-[10px] font-medium bg-lime-950/20 px-1.5 py-0.5 rounded border border-lime-500/20">בטוח לכולם 👌</span>';
        
        const safeName = (ex.name || '').replace(/'/g, "\\'");
        const safeNotes = (ex.notes || '').replace(/'/g, "\\'");

        tr.innerHTML = `
            <td class="p-3">
                <div class="font-bold text-zinc-100 text-xs">${ex.name || ''}</div>
                ${ex.notes ? `<div class="text-[10px] text-zinc-400 mt-0.5 line-clamp-1 max-w-xs" title="${safeNotes}">${ex.notes}</div>` : ''}
            </td>
            <td class="p-3 text-zinc-300 font-medium">${muscleNames[ex.muscle] || ex.muscle || 'רגליים'}</td>
            <td class="p-3 text-zinc-400 font-medium">
                <span class="px-1.5 py-0.5 bg-zinc-900 rounded border border-zinc-800 text-[10px]">${equipNames[ex.equipment] || ex.equipment || 'חדר כושר'}</span>
            </td>
            <td class="p-3 text-zinc-300 font-mono text-[11px]">${ex.defaultSetsReps || '3 סטים x 10'}</td>
            <td class="p-3">
                <div class="flex items-center gap-1.5">
                    ${ex.video ? `<button type="button" onclick="playExerciseVideo('${ex.video}')" class="text-lime-400 hover:text-lime-300 text-xs flex items-center gap-1 bg-lime-950/30 px-1.5 py-0.5 rounded border border-lime-500/30 transition-colors" title="צפה בוידאו"><i data-lucide="video" class="w-3 h-3"></i> וידאו</button>` : ''}
                    ${ex.image ? `<button type="button" onclick="openExerciseImage('${ex.image}', '${safeName}', '${safeNotes}')" class="text-cyan-400 hover:text-cyan-300 text-xs flex items-center gap-1 bg-cyan-950/30 px-1.5 py-0.5 rounded border border-cyan-500/30 transition-colors" title="צפה בתמונה"><i data-lucide="image" class="w-3 h-3"></i> תמונה</button>` : ''}
                    ${!ex.video && !ex.image ? `<span class="text-zinc-600 text-xs">-</span>` : ''}
                </div>
            </td>
            <td class="p-3">${bans}</td>
            <td class="p-3 text-center">
                <div class="flex items-center justify-center gap-1.5">
                    <button type="button" onclick="openEditExerciseModal('${ex.id}')" class="p-1 px-2.5 bg-zinc-800 hover:bg-zinc-700 text-lime-400 rounded transition-colors text-xs flex items-center gap-1" title="ערוך תרגיל">
                        <i data-lucide="edit-2" class="w-3 h-3"></i>
                        <span>ערוך</span>
                    </button>
                    <button type="button" onclick="deleteCmsExercise('${ex.id}')" class="p-1 px-2 bg-red-950/20 hover:bg-red-950/50 text-red-400 rounded transition-colors text-xs flex items-center gap-1" title="מחק תרגיל">
                        <i data-lucide="trash" class="w-3 h-3"></i>
                        <span>מחק</span>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
}

function previewCmsStageImage(stageNum) {
    const input = document.getElementById(`cms-stage${stageNum}-image`);
    const wrap = document.getElementById(`cms-stage${stageNum}-preview-wrap`);
    const img = document.getElementById(`cms-stage${stageNum}-preview`);
    const val = input ? input.value.trim() : '';
    if (val && wrap && img) {
        img.src = val;
        wrap.classList.remove('hidden');
    } else if (wrap) {
        wrap.classList.add('hidden');
    }
}

function handleStageFileUpload(stageNum, fileInput) {
    if (!fileInput.files || !fileInput.files[0]) return;
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const dataUrl = e.target.result;
        const imgInput = document.getElementById(`cms-stage${stageNum}-image`);
        if (imgInput) {
            imgInput.value = dataUrl;
            previewCmsStageImage(stageNum);
        }
        // Also save to personal cloud media
        saveMediaItemToPersonalCloud({
            id: 'cloud_' + Date.now() + '_' + stageNum,
            title: file.name.replace(/\.[^/.]+$/, '') + ` (שלב ${stageNum})`,
            url: dataUrl,
            muscle: document.getElementById('cms-ex-muscle')?.value || 'general',
            uploadedAt: new Date().toLocaleDateString('he-IL')
        });
    };
    reader.readAsDataURL(file);
}

function clearCmsStageImage(stageNum) {
    const imgInput = document.getElementById(`cms-stage${stageNum}-image`);
    if (imgInput) imgInput.value = '';
    previewCmsStageImage(stageNum);
}

function openAddExerciseModal() {
    const titleEl = document.getElementById('cms-modal-title');
    if (titleEl) titleEl.innerText = 'הוסף תרגיל חדש למאגר';

    const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = val !== undefined ? val : '';
    };
    const setChecked = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.checked = !!val;
    };

    setVal('cms-ex-id', '');
    setVal('cms-ex-name', '');
    setVal('cms-ex-muscle', 'legs');
    setVal('cms-ex-equip', 'gym');
    setVal('cms-ex-setsreps', '2-3 סטים x 6-12 חזרות');
    setVal('cms-ex-rest', '90-120 שניות (ניתן גם יותר במידת הצורך)');
    setVal('cms-ex-video', '');
    setVal('cms-ex-image', '');
    setVal('cms-ex-notes', '');

    // Reset stages
    setVal('cms-stage1-image', '');
    setVal('cms-stage1-cues', '');
    previewCmsStageImage(1);
    setVal('cms-stage2-image', '');
    setVal('cms-stage2-cues', '');
    previewCmsStageImage(2);
    setVal('cms-stage3-image', '');
    setVal('cms-stage3-cues', '');
    previewCmsStageImage(3);

    setChecked('cms-ban-acl', false);
    setChecked('cms-ban-back', false);
    setChecked('cms-ban-shoulder', false);
    setChecked('cms-ban-pregnancy', false);
    
    const modal = document.getElementById('cms-exercise-modal');
    if (modal) modal.classList.remove('hidden');
    if (window.lucide && typeof window.lucide.createIcons === 'function') lucide.createIcons();
}

function openEditExerciseModal(exId) {
    const bank = getExerciseBank();
    const ex = bank.find(e => e.id === exId);
    if (!ex) return;
    
    const titleEl = document.getElementById('cms-modal-title');
    if (titleEl) titleEl.innerText = `ערוך תרגיל: ${ex.name}`;

    const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = val !== undefined ? val : '';
    };
    const setChecked = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.checked = !!val;
    };

    setVal('cms-ex-id', ex.id || '');
    setVal('cms-ex-name', ex.name || '');
    setVal('cms-ex-muscle', ex.muscle || 'legs');
    setVal('cms-ex-equip', ex.equipment || 'gym');
    setVal('cms-ex-setsreps', ex.defaultSetsReps || '2-3 סטים x 6-12 חזרות');
    setVal('cms-ex-rest', ex.rest || '90-120 שניות (ניתן גם יותר במידת הצורך)');
    setVal('cms-ex-video', ex.video || '');
    setVal('cms-ex-image', ex.image || '');
    setVal('cms-ex-notes', ex.notes || '');

    const withStages = ensureExerciseStages(JSON.parse(JSON.stringify(ex)));
    if (withStages && withStages.stages) {
        setVal('cms-stage1-image', withStages.stages[0]?.image || '');
        setVal('cms-stage1-cues', withStages.stages[0]?.cues || '');
        previewCmsStageImage(1);
        setVal('cms-stage2-image', withStages.stages[1]?.image || '');
        setVal('cms-stage2-cues', withStages.stages[1]?.cues || '');
        previewCmsStageImage(2);
        setVal('cms-stage3-image', withStages.stages[2]?.image || '');
        setVal('cms-stage3-cues', withStages.stages[2]?.cues || '');
        previewCmsStageImage(3);
    }
    
    const bans = Array.isArray(ex.contraindications) ? ex.contraindications : [];
    setChecked('cms-ban-acl', bans.includes('acl'));
    setChecked('cms-ban-back', bans.includes('back'));
    setChecked('cms-ban-shoulder', bans.includes('shoulders'));
    setChecked('cms-ban-pregnancy', bans.includes('pregnancy'));
    
    const modal = document.getElementById('cms-exercise-modal');
    if (modal) modal.classList.remove('hidden');
    if (window.lucide && typeof window.lucide.createIcons === 'function') lucide.createIcons();
}

function closeCmsExerciseModal() {
    const modal = document.getElementById('cms-exercise-modal');
    if (modal) modal.classList.add('hidden');
}

function saveCmsExercise() {
    const idEl = document.getElementById('cms-ex-id');
    const exId = idEl ? idEl.value.trim() : '';

    const nameEl = document.getElementById('cms-ex-name');
    const name = nameEl ? nameEl.value.trim() : '';
    if (!name) {
        alert("נא להזין שם תרגיל.");
        if (nameEl) nameEl.focus();
        return;
    }
    
    const isChecked = id => {
        const el = document.getElementById(id);
        return el ? el.checked : false;
    };

    const getVal = id => {
        const el = document.getElementById(id);
        return el ? el.value.trim() : '';
    };

    const bans = [];
    if (isChecked('cms-ban-acl')) bans.push('acl');
    if (isChecked('cms-ban-back')) bans.push('back');
    if (isChecked('cms-ban-shoulder')) bans.push('shoulders');
    if (isChecked('cms-ban-pregnancy')) bans.push('pregnancy');

    const muscle = document.getElementById('cms-ex-muscle') ? document.getElementById('cms-ex-muscle').value : 'legs';
    const defaults = DEFAULT_STAGE_IMAGES[muscle] || DEFAULT_STAGE_IMAGES.chest;

    const stage1Img = getVal('cms-stage1-image') || defaults.stage1.image;
    const stage2Img = getVal('cms-stage2-image') || defaults.stage2.image;
    const stage3Img = getVal('cms-stage3-image') || defaults.stage3.image;

    const stages = [
        {
            stageNumber: 1,
            title: 'שלב 1: עמדת מוצא והכנה',
            image: stage1Img,
            cues: getVal('cms-stage1-cues') || `עמדת מוצא עבור ${name}: ${defaults.stage1.defaultCues}`
        },
        {
            stageNumber: 2,
            title: 'שלב 2: ירידה ותנועה (מאמץ שיא)',
            image: stage2Img,
            cues: getVal('cms-stage2-cues') || (getVal('cms-ex-notes') || defaults.stage2.defaultCues)
        },
        {
            stageNumber: 3,
            title: 'שלב 3: כיווץ שיא ונעילה מבוקרת',
            image: stage3Img,
            cues: getVal('cms-stage3-cues') || defaults.stage3.defaultCues
        }
    ];

    const exerciseData = {
        name,
        muscle,
        equipment: document.getElementById('cms-ex-equip') ? document.getElementById('cms-ex-equip').value : 'gym',
        defaultSetsReps: getVal('cms-ex-setsreps') || '2-3 סטים x 6-12 חזרות',
        rest: getVal('cms-ex-rest') || '90-120 שניות (ניתן גם יותר במידת הצורך)',
        video: getVal('cms-ex-video'),
        image: stage1Img,
        stages: stages,
        notes: getVal('cms-ex-notes'),
        contraindications: bans
    };
    
    let bank = getExerciseBank();
    
    if (exId) {
        // Edit existing exercise
        const idx = bank.findIndex(e => e.id === exId);
        if (idx !== -1) {
            bank[idx] = { ...bank[idx], ...exerciseData };
        } else {
            bank.push({ id: exId, ...exerciseData });
        }
    } else {
        // Add new exercise
        bank.push({
            id: 'ex_' + Date.now(),
            ...exerciseData
        });
    }
    
    localStorage.setItem('gino_exercise_bank', JSON.stringify(bank));
    closeCmsExerciseModal();
    renderCmsExercises();
}

function deleteCmsExercise(exId) {
    if (confirm("האם למחוק תרגיל זה מהמאגר?")) {
        let bank = getExerciseBank();
        bank = bank.filter(e => e.id !== exId);
        localStorage.setItem('gino_exercise_bank', JSON.stringify(bank));
        renderCmsExercises();
    }
}

function resetExerciseBankToDefaults() {
    if (confirm("האם לאפס את כל התרגילים להגדרות ברירת המחדל?")) {
        localStorage.setItem('gino_exercise_bank', JSON.stringify(DEFAULT_EXERCISE_BANK));
        renderCmsExercises();
    }
}

// ============================================================================
// PERSONAL CLOUD MEDIA BANK (Coach Gino Cloud Storage)
// ============================================================================
const CLOUD_STORAGE_KEY = 'gino_personal_cloud_media';

const DEFAULT_CLOUD_MEDIA = [];

function getPersonalCloudMedia() {
    try {
        const raw = localStorage.getItem(CLOUD_STORAGE_KEY);
        if (raw) {
            let parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
                // Filter out any legacy Unsplash images from user cache
                const cleaned = parsed.filter(item => item && item.url && !item.url.includes('unsplash.com'));
                if (cleaned.length !== parsed.length) {
                    localStorage.setItem(CLOUD_STORAGE_KEY, JSON.stringify(cleaned));
                }
                return cleaned;
            }
        }
        return [];
    } catch (e) {
        return [];
    }
}

function savePersonalCloudMedia(items) {
    try {
        localStorage.setItem(CLOUD_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
        console.warn("Could not save to localStorage, storage might be full", e);
    }
    updateCloudBadges();
}

function saveMediaItemToPersonalCloud(item) {
    const items = getPersonalCloudMedia();
    items.unshift(item);
    savePersonalCloudMedia(items);
    renderPersonalCloudGallery();
}

function updateCloudBadges() {
    const items = getPersonalCloudMedia();
    const badge = document.getElementById('badge-cloud-count');
    if (badge) badge.innerText = items.length;
    const display = document.getElementById('admin-cloud-count-display');
    if (display) display.innerText = items.length;
}

function handleDirectCloudUpload(fileInput) {
    if (!fileInput.files || !fileInput.files[0]) return;
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const dataUrl = e.target.result;
        const cleanName = file.name.replace(/\.[^/.]+$/, '');
        const muscle = prompt("לאיזו קבוצת שריר לשייך תמונה זו בענן? (legs / chest / back / shoulders / arms / core / general):", "general") || "general";
        saveMediaItemToPersonalCloud({
            id: 'cloud_' + Date.now(),
            title: cleanName,
            url: dataUrl,
            muscle: muscle.trim().toLowerCase(),
            uploadedAt: new Date().toLocaleDateString('he-IL')
        });
        alert(`התמונה "${cleanName}" הועלתה בהצלחה לענן האישי שלך! ☁️`);
    };
    reader.readAsDataURL(file);
}

function promptAddCloudImageByUrl() {
    const url = prompt("הזן קישור ישיר לתמונה (URL):");
    if (!url || !url.trim()) return;
    const title = prompt("כותרת / תיאור לתמונה:", "תמונת הדגמה אישית") || "תמונת הדגמה";
    const muscle = prompt("קבוצת שריר (legs / chest / back / shoulders / arms / core / general):", "general") || "general";
    saveMediaItemToPersonalCloud({
        id: 'cloud_' + Date.now(),
        title: title.trim(),
        url: url.trim(),
        muscle: muscle.trim().toLowerCase(),
        uploadedAt: new Date().toLocaleDateString('he-IL')
    });
    alert("התמונה נוספה בהצלחה לענן האישי!");
}

function loadDefaultCloudMedia(force = false) {
    if (force) {
        localStorage.setItem(CLOUD_STORAGE_KEY, JSON.stringify([]));
        renderPersonalCloudGallery();
        alert("ענן המדיה האישי נוקה בהצלחה! כעת באפשרותך להעלות את התמונות האישיות שלך.");
    }
}

function deleteCloudMedia(id) {
    if (confirm("האם למחוק תמונה זו מהענן האישי שלך?")) {
        let items = getPersonalCloudMedia();
        items = items.filter(m => m.id !== id);
        savePersonalCloudMedia(items);
        renderPersonalCloudGallery();
    }
}

function copyCloudMediaUrl(url) {
    navigator.clipboard.writeText(url).then(() => {
        alert("הקישור הועתק ללוח! 📋\nניתן להדביק אותו בשלבי הביצוע של כל תרגיל.");
    }).catch(() => {
        prompt("העתק את כתובת התמונה:", url);
    });
}

function applyCloudMediaToCmsStage(url, stageNum) {
    const input = document.getElementById(`cms-stage${stageNum}-image`);
    if (input) {
        input.value = url;
        previewCmsStageImage(stageNum);
        alert(`התמונה שובצה בהצלחה לשלב ${stageNum}! 📸`);
    } else {
        copyCloudMediaUrl(url);
    }
}

function renderPersonalCloudGallery() {
    updateCloudBadges();
    const container = document.getElementById('admin-cloud-gallery');
    if (!container) return;

    const items = getPersonalCloudMedia();
    const searchVal = (document.getElementById('admin-cloud-search')?.value || '').trim().toLowerCase();
    const filterMuscle = document.getElementById('admin-cloud-filter-muscle')?.value || 'all';

    const filtered = items.filter(m => {
        if (searchVal && !m.title.toLowerCase().includes(searchVal)) return false;
        if (filterMuscle !== 'all' && m.muscle !== filterMuscle) return false;
        return true;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="col-span-full py-10 text-center text-zinc-400 bg-zinc-900/20 rounded-2xl border border-zinc-900 space-y-2">
                <i data-lucide="image-off" class="w-8 h-8 text-cyan-400/50 mx-auto"></i>
                <div class="font-bold text-sm text-white">לא נמצאו תמונות בענן האישי</div>
                <div class="text-xs text-zinc-500">העלה תמונה מהמכשיר או הזן קישור כדי להתחיל לבנות את המאגר האישי שלך.</div>
            </div>
        `;
        if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
        return;
    }

    const muscleMap = { legs: 'רגליים', chest: 'חזה', back: 'גב', shoulders: 'כתפיים', arms: 'ידיים', core: 'בטן', general: 'כללי' };

    container.innerHTML = filtered.map(m => {
        const safeUrl = m.url.replace(/'/g, "\\'");
        const safeTitle = (m.title || 'תמונת ענן').replace(/'/g, "\\'");
        return `
            <div class="bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden group hover:border-cyan-500/50 transition-all flex flex-col justify-between">
                <div class="relative w-full h-32 bg-zinc-950 overflow-hidden">
                    <img src="${m.url}" alt="${safeTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
                    <span class="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 text-cyan-300 text-[9px] font-bold border border-zinc-700">
                        ${muscleMap[m.muscle] || m.muscle}
                    </span>
                    <button type="button" onclick="deleteCloudMedia('${m.id}')" class="absolute top-1.5 left-1.5 bg-black/80 hover:bg-red-600 text-zinc-400 hover:text-white p-1 rounded-full text-xs transition-colors" title="מחק מהענן">
                        <i data-lucide="trash-2" class="w-3 h-3"></i>
                    </button>
                </div>
                <div class="p-2.5 space-y-1.5 flex-1 flex flex-col justify-between">
                    <div>
                        <h5 class="text-xs font-bold text-white truncate" title="${safeTitle}">${m.title}</h5>
                        <div class="text-[10px] text-zinc-500">${m.uploadedAt || 'בענן האישי'}</div>
                    </div>
                    <div class="pt-1 border-t border-zinc-800/80 flex flex-col gap-1">
                        <button type="button" onclick="copyCloudMediaUrl('${safeUrl}')" class="w-full py-1 px-2 bg-zinc-800 hover:bg-zinc-750 text-cyan-300 text-[10px] font-bold rounded flex items-center justify-center gap-1 transition-colors">
                            <i data-lucide="copy" class="w-3 h-3"></i>
                            <span>העתק קישור</span>
                        </button>
                        <div class="grid grid-cols-3 gap-1">
                            <button type="button" onclick="applyCloudMediaToCmsStage('${safeUrl}', 1)" class="py-0.5 bg-zinc-950 hover:bg-lime-500 hover:text-black text-zinc-400 text-[9px] rounded border border-zinc-800 transition-colors" title="הזן לשלב 1 בעורך התרגילים">שלב 1</button>
                            <button type="button" onclick="applyCloudMediaToCmsStage('${safeUrl}', 2)" class="py-0.5 bg-zinc-950 hover:bg-lime-500 hover:text-black text-zinc-400 text-[9px] rounded border border-zinc-800 transition-colors" title="הזן לשלב 2 בעורך התרגילים">שלב 2</button>
                            <button type="button" onclick="applyCloudMediaToCmsStage('${safeUrl}', 3)" class="py-0.5 bg-zinc-950 hover:bg-lime-500 hover:text-black text-zinc-400 text-[9px] rounded border border-zinc-800 transition-colors" title="הזן לשלב 3 בעורך התרגילים">שלב 3</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
}

// ============================================================================
// PDF EXPORT SYSTEM (html2pdf & window.print fallback)
// ============================================================================
function cleanHebrewTextForPdf(str) {
    if (!str || typeof str !== 'string') return '';
    let s = str;

    // 1. Common user typos, glued words, and missing spaces
    const wordReplacements = [
        ['מותאמתאישית', 'מותאמת אישית'],
        ['ספהשטוחה', 'ספה שטוחה'],
        ['כדורבוסו', 'כדור בוסו'],
        ['עלהצוואר', 'על הצוואר'],
        ['מבוקרתעם', 'מבוקרת עם'],
        ['הרגלייםמעט', 'הרגליים מעט'],
        ['שלשרירי', 'של שרירי'],
        ['ממצבשבו', 'ממצב שבו'],
        ['המכונהבצורה', 'המכונה בצורה'],
        ['יושבעל', 'יושב על'],
        ['חזקהעל', 'חזקה על'],
        ['ידיכף', 'ידי כף'],
        ['רחבהמרוחב', 'רחבה מרוחב'],
        ['דרךמשיכת', 'דרך משיכת'],
        ['גבנשאר', 'גב נשאר'],
        ['כיפוףקל', 'כיפוף קל'],
        ['כושרמאובזר', 'כושר מאובזר'],
        ['מגבלותגופניור', 'מגבלות גופניות'],
        ['בהתאמהביומכנית', 'בהתאמה ביומכנית'],
        ['התנגדות=להוריד', 'התנגדות: להוריד'],
        ['כיוותר', 'ביותר'],
        ['או שמשמחזיקים', 'או שמחזיקים'],
        ['תוקפשת', 'קשת'],
        ['שנ\'', 'שניות'],
        ['שנ׳', 'שניות'],
        ['והתחבצע', 'והביצוע'],
        ['פיקוח מרוחב, הכתפיים', 'פישוק ברוחב הכתפיים'],
        ['פיקוח מרוחב', 'פישוק ברוחב'],
        ['נוחות, מיותרת', 'נוחות מיותרת'],
        ['מנת להבטיח', 'על מנת להבטיח'],
        ['לקו ,הברכיים', 'קרוב לקו הברכיים'],
        ['המתיחה, עליה מתחת', 'המתיחה מתחת'],
        ['דגש:ביומכני', ''],
        ['דגש ביומכני:', ''],
        ['דגש ביומכני', '']
    ];
    wordReplacements.forEach(([from, to]) => {
        s = s.split(from).join(to);
    });

    // Strip stray English noise artifacts inside Hebrew text
    s = s.replace(/\b(Baligh|Dikse)\b/gi, '');

    // Fix inverted leading period on Hebrew words (e.g. .תנועה -> תנועה, .אקטיבית -> אקטיבית)
    s = s.replace(/(^|\s)\.([א-ת]+)/g, '$1$2');

    // 2. Fix corrupt parentheses sequences from user input
    s = s.replace(/דלתואיד\)\s*\.?\s*\(אמצעי/g, '(דלתואיד אמצעי)');
    s = s.replace(/קו\)\s*\(פטמות/g, '(קו פטמות)');
    s = s.replace(/ללא\)\s*הקשתת\s*\.?\(יתר/g, 'ללא הקשתת יתר');
    s = s.replace(/החלק\)\s*,\s*\(הגבוה/g, '(החלק הגבוה)');
    s = s.replace(/שלב\)\s*,\s*\(אקסצנטרי/g, '(שלב אקסצנטרי)');

    // 3. Clean slashes and backslashes into Hebrew 'או'
    s = s.replace(/\\+/g, ' או ');
    s = s.replace(/\s*\/\s*/g, ' או ');

    // 4. Clean dots between words like בחדר.הכושר
    s = s.replace(/([א-ת])\.([א-ת])/g, '$1 $2');

    // 5. Inverted period before final word: e.g. .בלבד -> בלבד.
    s = s.replace(/\s*\.\s*(בלבד|אותו|התנועה|משקל|מבוקרת|נוספים)(\s*|$)/g, ' $1. ');

    // 6. Space between Hebrew letters and numbers: e.g. של10 -> של 10, מעל90 -> מעל 90
    s = s.replace(/([א-ת])(\d+)/g, '$1 $2');
    s = s.replace(/(\d+)([א-ת])/g, '$1 $2');

    // 7. Clean comma / period spacing: no space before, one space after
    s = s.replace(/\s+([,.:;?!])/g, '$1');
    s = s.replace(/([,.:;?!])([א-תA-Za-z0-9])/g, '$1 $2');

    // 8. Clean multiple spaces
    s = s.replace(/\s{2,}/g, ' ').trim();

    return s;
}

function generatePdfPrintableHtml(traineeName, isFemale, answers, coach, workouts) {
    const goalMap = {
        shred: 'חיטוב וירידה באחוזי שומן',
        mass: 'עלייה במסת שריר',
        recomp: 'חיטוב ושינוי הרכב הגוף',
        strength: 'שיפור כוח וביצועים'
    };
    const equipMap = {
        gym: 'חדר כושר מאובזר',
        home: 'משקולות ביתיות',
        bodyweight: 'משקל גוף (קליסטניקס)'
    };
    const freqMap = {
        '2-3': '2-3 ימים בשבוע',
        '4': '4 ימים בשבוע',
        '5-6': '5-6 ימים בשבוע'
    };

    // Hebrew spacer: replaces ASCII spaces with inline spacer span
    // and strips trailing periods to eliminate RTL punctuation inversion
    const sp = (str) => {
        if (!str || typeof str !== 'string') return '';
        let s = cleanHebrewTextForPdf(str);
        
        // Translate technical terms to pure Hebrew
        s = s.replace(/\(Scapular Plane\)/gi, 'מישור השכמה ב-45 מעלות קדימה')
             .replace(/\(Clavicular Head\)/gi, 'סיבי חזה עליון')
             .replace(/\(Scapular Retraction\)/gi, 'קירוב שכמות מלא')
             .replace(/\(Tempo\)/gi, 'קצב תנועה')
             .replace(/\(RPE\)/gi, 'דירוג מאמץ')
             .replace(/\(RIR 1-2\)/gi, '1-2 חזרות לפני כשל')
             .replace(/\(Hinge\)/gi, '(ציר ירך)')
             .replace(/\bHinge\b/gi, 'ציר ירך')
             .replace(/Coach Gino/g, 'Coach Gino');

        // Clean common typos and word glued bugs
        s = s.replace(/מהרפקים/g, 'מהמרפקים')
             .replace(/\(ניתן גם יותר במידת הצורך\)/g, '- לפי הצורך');

        // Strip trailing period so it cannot invert in RTL
        s = s.replace(/\s*\.+$/, '');
        
        // Clean comma spacing
        s = s.replace(/\s*,\s*/g, ', ');

        return s.trim().split(/\s+/).join('<span style="display:inline-block; width:5px;"> </span>');
    };

    const targetGoal = goalMap[answers.goal] || answers.goal || 'חיטוב ובניית כושר';
    const targetEquip = equipMap[answers.equipment] || answers.equipmentOther || 'חדר כושר מאובזר';
    const targetFreq = freqMap[answers.frequency] || (answers.frequency ? answers.frequency + ' ימים בשבוע' : '3 ימים בשבוע');
    const traineeNameSafe = traineeName || (isFemale ? 'מתאמנת' : 'מתאמן');
    
    // Calculate BMI
    let bmiDisplay = '-';
    let bmiCategory = '';
    const h = parseFloat(answers.height);
    const w = parseFloat(answers.weight);
    if (h > 0 && w > 0) {
        const hm = h / 100;
        const bmiVal = (w / (hm * hm)).toFixed(1);
        bmiDisplay = bmiVal;
        if (bmiVal < 18.5) bmiCategory = 'תת-משקל';
        else if (bmiVal < 25) bmiCategory = 'משקל תקין';
        else if (bmiVal < 30) bmiCategory = 'עודף משקל';
        else bmiCategory = 'השמנה';
    }

    const limitationMap = {
        knees: 'רגישות או פציעה בברכיים (רצועה צולבת או סחוס)',
        back: 'רגישות או כאב בגב התחתון (בלט או פריצת דיסק)',
        shoulders: 'רגישות או כאב בכתפיים (צביטה או שרוול מסובב)',
        none: 'ללא מגבלות גופניות'
    };
    let limitationsStr = (answers.injuries || []).map(i => limitationMap[i] || i).join(', ') || 'ללא מגבלות מדווחות';
    if (answers.pregnancyTrimester) {
        limitationsStr += ` | הריון (שליש ${answers.pregnancyTrimester})`;
    }

    const dateStr = new Date().toLocaleDateString('he-IL');

    const formatExerciseTitle = (rawName) => {
        let cleaned = cleanHebrewTextForPdf(rawName);
        const match = cleaned.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
        if (match && /[A-Za-z]/.test(match[2])) {
            return {
                heb: sp(match[1].trim()),
                eng: match[2].trim()
            };
        }
        return { heb: sp(cleaned), eng: '' };
    };

    let workoutsCardsHtml = '';
    workouts.forEach((w, wIdx) => {
        let exercisesHtml = '';
        (w.exercises || []).forEach((ex, idx) => {
            const titleObj = formatExerciseTitle(ex.name);
            
            let rawNotes = (ex.notes && ex.notes.trim()) ? ex.notes.trim() : (isFemale ? 'הקפידי על שליטה מבוקרת, נשימה סדירה ודיוק ביומכני.' : 'הקפד על שליטה מבוקרת, נשימה סדירה ודיוק ביומכני.');
            if (isFemale) {
                rawNotes = rawNotes.replace(/\bהקפד\b/g, 'הקפידי')
                                   .replace(/\bשמור\b/g, 'שמרי')
                                   .replace(/\bבצע\b/g, 'בצעי')
                                   .replace(/\bהימנע\b/g, 'הימנעי')
                                   .replace(/\bשאף\b/g, 'שאפי');
            }
            const exNotes = sp(rawNotes);

            let setsRepsClean = cleanHebrewTextForPdf(ex.setsReps || '2-3 סטים | 6-12 חזרות').replace(/[xX×]/g, ' | ');
            const setsRepsFormatted = sp(setsRepsClean);
            
            let rawRest = ex.rest || '90-120 שניות';
            rawRest = rawRest.replace(/\(ניתן גם יותר במידת הצורך\)/g, '- לפי הצורך');
            const restFormatted = sp(rawRest);
            
            exercisesHtml += `
            <div class="pdf-card" style="background: #18181b; border: 1px solid #27272a; border-radius: 9px; padding: 9px 13px; margin-bottom: 8px; page-break-inside: avoid; break-inside: avoid; box-sizing: border-box; width: 100%;">
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 6px;">
                    <tr>
                        <td style="text-align: right; vertical-align: middle;">
                            <div style="font-size: 13px; font-weight: 800; color: #ffffff; line-height: 1.35;">
                                <span style="color: #a3e635; font-weight: 900; margin-left: 5px;">${idx + 1}.</span>${titleObj.heb}
                            </div>
                            ${titleObj.eng ? `<div dir="ltr" style="font-size: 10px; color: #a1a1aa; font-weight: 600; text-align: right; margin-top: 2px;">(${titleObj.eng})</div>` : ''}
                        </td>
                        <td style="text-align: left; vertical-align: middle; width: auto; white-space: nowrap; padding-left: 2px;">
                            <div style="display: inline-block; background: #27272a; border: 1px solid #3f3f46; color: #a3e635; font-size: 10.5px; font-weight: 700; padding: 3px 8px; border-radius: 6px; white-space: nowrap;">
                                ${setsRepsFormatted}
                            </div>
                        </td>
                    </tr>
                </table>
                <div style="background: #09090b; border: 1px solid #27272a; border-radius: 7px; padding: 7px 11px; margin-bottom: 6px; font-size: 10.5px; color: #d4d4d8; line-height: 1.5; text-align: right;">
                    <strong style="color: #a3e635; margin-left: 5px;">${sp('דגש ביצוע ביומכני -')}</strong>${exNotes}
                </div>
                <div style="font-size: 10px; color: #a1a1aa; text-align: right; padding: 0 2px;">
                    <span style="color: #71717a; margin-left: 4px;">${sp('זמן מנוחה -')}</span><strong style="color: #ffffff;">${restFormatted}</strong>
                </div>
            </div>
            `;
        });

        // Add page break before subsequent workout days to keep each day organized on its page
        const pageBreakStyle = wIdx > 0 ? 'page-break-before: always; break-before: page;' : '';

        workoutsCardsHtml += `
        <div class="pdf-day-block" style="${pageBreakStyle} margin-bottom: 14px; page-break-inside: avoid; break-inside: avoid; width: 100%; box-sizing: border-box;">
            <table style="width: 100%; border-collapse: collapse; background: #18181b; border-right: 4px solid #84cc16; border-radius: 8px; margin-bottom: 9px; padding: 8px 13px;">
                <tr>
                    <td style="text-align: right; font-size: 13.5px; font-weight: 800; color: #a3e635; padding: 8px 13px;">
                        ${sp(w.dayName)}
                    </td>
                    <td style="text-align: left; font-size: 10.5px; color: #a1a1aa; font-weight: 600; padding: 8px 13px; width: 130px; white-space: nowrap;">
                        ${sp(`נפח - ${(w.exercises || []).length} תרגילים`)}
                    </td>
                </tr>
            </table>
            ${exercisesHtml}
        </div>
        `;
    });

    return `
    <div id="pdf-cards-export-root" style="width: 100%; min-width: 0; max-width: 100%; margin: 0; background: #09090b; color: #fafafa; font-family: Arial, Tahoma, 'Segoe UI', sans-serif; line-height: 1.5; direction: rtl; text-align: right; box-sizing: border-box; padding: 14px 18px; overflow: hidden;">
        <!-- TOP HEADER -->
        <table style="width: 100%; table-layout: fixed; border-collapse: collapse; border-bottom: 2px solid #27272a; padding-bottom: 10px; margin-bottom: 12px;">
            <tr>
                <td style="text-align: right; vertical-align: top; width: 68%;">
                    <div style="display: inline-block; background: rgba(132, 204, 22, 0.15); border: 1px solid rgba(132, 204, 22, 0.4); color: #a3e635; font-weight: 900; font-size: 10px; padding: 3px 8px; border-radius: 6px; margin-bottom: 5px;">COACH GINO PRO ASSESSMENT</div>
                    <div style="font-size: 20px; font-weight: 900; color: #ffffff; line-height: 1.2; margin-bottom: 4px;">${sp('תוכנית אימונים מותאמת אישית')}</div>
                    <div style="font-size: 10.5px; color: #a1a1aa;">${sp('נבנה בהתאמה ביומכנית מלאה עבור')} <strong style="color: #ffffff;">${sp(traineeNameSafe)}</strong> | ${sp('תאריך הפקה -')} <span dir="ltr" style="font-weight: 600; color: #ffffff;">${dateStr}</span></div>
                </td>
                <td style="text-align: left; vertical-align: top; width: 32%;" dir="ltr">
                    <div style="font-weight: 900; color: #ffffff; font-size: 14px; margin-bottom: 3px; text-align: left;">COACH GINO</div>
                    <div style="font-size: 10.5px; color: #a1a1aa; line-height: 1.5; text-align: left;">Instagram: <span style="font-weight: 700; color: #a3e635;">@coach.gino1</span></div>
                    <div style="font-size: 10.5px; color: #a1a1aa; line-height: 1.5; text-align: left;">WhatsApp: <span style="font-weight: 700; color: #ffffff;">050-770-7197</span></div>
                </td>
            </tr>
        </table>

        <!-- TRAINEE PROFILE -->
        <div style="background: #18181b; border: 1px solid #27272a; border-radius: 9px; padding: 9px 13px; margin-bottom: 11px; box-sizing: border-box;">
            <div style="font-size: 11.5px; font-weight: 800; color: #ffffff; margin-bottom: 5px; border-bottom: 1px solid #27272a; padding-bottom: 3px;">
                <span style="color: #a3e635;">■</span> ${sp(`פרופיל אישי והגדרות יעד (${isFemale ? 'מתאמנת' : 'מתאמן'})`)}
            </div>
            <table style="width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 10.5px; line-height: 1.6; text-align: right;">
                <tr>
                    <td style="width: 33%; padding: 2px 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><span style="color: #71717a;">${sp('שם מלא -')}</span> <strong style="color: #ffffff;">${sp(traineeNameSafe)}</strong></td>
                    <td style="width: 33%; padding: 2px 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><span style="color: #71717a;">${sp('מגדר -')}</span> <strong style="color: #ffffff;">${sp(isFemale ? 'אישה' : 'גבר')}</strong></td>
                    <td style="width: 34%; padding: 2px 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><span style="color: #71717a;">${sp('מטרת על -')}</span> <strong style="color: #a3e635;">${sp(targetGoal)}</strong></td>
                </tr>
                <tr>
                    <td style="padding: 2px 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><span style="color: #71717a;">${sp('מדדים -')}</span> <strong style="color: #ffffff;">${sp(`גובה ${answers.height || '-'} ס"מ | משקל ${answers.weight || '-'} ק"ג`)}</strong></td>
                    <td style="padding: 2px 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><span style="color: #71717a;">${sp('מדד מסת גוף -')}</span> <strong style="color: #ffffff;">${sp(`BMI ${bmiDisplay}${bmiCategory ? ' - ' + bmiCategory : ''}`)}</strong></td>
                    <td style="padding: 2px 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><span style="color: #71717a;">${sp('תדירות שבועית -')}</span> <strong style="color: #ffffff;">${sp(targetFreq)}</strong></td>
                </tr>
                <tr>
                    <td style="padding: 2px 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><span style="color: #71717a;">${sp('ציוד זמין -')}</span> <strong style="color: #ffffff;">${sp(targetEquip)}</strong></td>
                    <td colspan="2" style="padding: 2px 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><span style="color: #71717a;">${sp('מגבלות גופניות -')}</span> <strong style="color: #ffffff;">${sp(limitationsStr)}</strong></td>
                </tr>
            </table>
        </div>

        <!-- COACH WELCOME NOTE -->
        <div style="background: #18181b; border-right: 4px solid #84cc16; border-radius: 8px; padding: 9px 13px; margin-bottom: 12px; font-size: 10.5px; color: #d4d4d8; line-height: 1.55; box-sizing: border-box;">
            <strong style="color: #a3e635;">${sp('הערת המאמן Coach Gino -')}</strong>
            ${sp(isFemale 
                ? 'התוכנית שלפנייך מתוכננת בקפידה עם טווח עבודה של 2 עד 3 סטים איכותיים לכל תרגיל, טווח אפקטיבי של 6 עד 12 חזרות, וזמני מנוחה מלאים של 90 עד 120 שניות להתאוששות מלאה. הקפידי על ביצוע מדויק של כל שלבי התנועה - עמדת מוצא, ירידה מבוקרת וכיווץ שיא'
                : 'התוכנית שלפניך מתוכננת בקפידה עם טווח עבודה של 2 עד 3 סטים איכותיים לכל תרגיל, טווח אפקטיבי של 6 עד 12 חזרות, וזמני מנוחה מלאים של 90 עד 120 שניות להתאוששות מלאה. הקפד על ביצוע מדויק של כל שלבי התנועה - עמדת מוצא, ירידה מבוקרת וכיווץ שיא'
            )}
        </div>

        <!-- WORKOUT DAYS & CARDS -->
        ${workoutsCardsHtml}

        <!-- PROGRESSIVE OVERLOAD -->
        <div style="background: #18181b; border: 1px solid #27272a; border-radius: 9px; padding: 11px 14px; margin-top: 12px; page-break-inside: avoid; break-inside: avoid; box-sizing: border-box;">
            <div style="font-size: 11.5px; font-weight: 800; color: #a3e635; margin-bottom: 7px; border-bottom: 1px solid #27272a; padding-bottom: 4px;">
                ■ ${sp('חוקי ברזל להתקדמות פרוגרסיבית')}
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 10px; color: #d4d4d8; line-height: 1.55; text-align: right;">
                <tr>
                    <td style="vertical-align: top; width: 14px; color: #a3e635; padding: 2px 0;">•</td>
                    <td style="padding: 2px 4px;">
                        <strong style="color: #ffffff;">${sp('עומס פרוגרסיבי -')}</strong> 
                        ${sp(isFemale 
                            ? 'שאפי להשתפר בכל שבוע: חזרה אחת נוספת באותו המשקל, שיפור קל בדיוק הטכני או העלאת משקל עבודה מזערית'
                            : 'שאף להשתפר בכל שבוע: חזרה אחת נוספת באותו המשקל, שיפור קל בדיוק הטכני או העלאת משקל עבודה מזערית'
                        )}
                    </td>
                </tr>
                <tr>
                    <td style="vertical-align: top; width: 14px; color: #a3e635; padding: 2px 0;">•</td>
                    <td style="padding: 2px 4px;">
                        <strong style="color: #ffffff;">${sp('זמני מנוחה -')}</strong> 
                        ${sp('90-120 שניות בין סטים. מנוחה מלאה מאפשרת גיוס מקסימלי של יחידות מוטוריות בכל סט מחדש')}
                    </td>
                </tr>
                <tr>
                    <td style="vertical-align: top; width: 14px; color: #a3e635; padding: 2px 0;">•</td>
                    <td style="padding: 2px 4px;">
                        <strong style="color: #ffffff;">${sp('שליטה בקצב תנועה -')}</strong> 
                        ${sp(isFemale 
                            ? '2-3 שניות בירידה (שלב אקסצנטרי), שנייה אחת בשיא הכיווץ. הימנעי משימוש בתנופה כדי לשמור על עומס שרירי ממוקד'
                            : '2-3 שניות בירידה (שלב אקסצנטרי), שנייה אחת בשיא הכיווץ. הימנע משימוש בתנופה כדי לשמור על עומס שרירי ממוקד'
                        )}
                    </td>
                </tr>
                <tr>
                    <td style="vertical-align: top; width: 14px; color: #a3e635; padding: 2px 0;">•</td>
                    <td style="padding: 2px 4px;">
                        <strong style="color: #ffffff;">${sp('עצימות וקרבה לכשל -')}</strong> 
                        ${sp(isFemale 
                            ? 'שמרי על 1-2 חזרות לפני כשל מוחלט (RIR 1-2) כדי למקסם גירוי שרירי איכותי ולמנוע עומס יתר על המפרקים'
                            : 'שמור על 1-2 חזרות לפני כשל מוחלט (RIR 1-2) כדי למקסם גירוי שרירי איכותי ולמנוע עומס יתר על המפרקים'
                        )}
                    </td>
                </tr>
                <tr>
                    <td style="vertical-align: top; width: 14px; color: #a3e635; padding: 2px 0;">•</td>
                    <td style="padding: 2px 4px;">
                        <strong style="color: #ffffff;">${sp('התאוששות ותזונה -')}</strong> 
                        ${sp('הגוף והשרירים נבנים במנוחה, בשינה איכותית ובהקפדה על חלבון יומי מספק (1.6-2.2 גרם לכל ק"ג משקל גוף)')}
                    </td>
                </tr>
            </table>
        </div>

        <!-- FOOTER -->
        <table style="width: 100%; table-layout: fixed; border-collapse: collapse; border-top: 1px solid #27272a; margin-top: 12px; padding-top: 6px; font-size: 10px; color: #71717a;">
            <tr>
                <td style="text-align: right; padding: 4px 0; width: 65%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${sp('כל הזכויות שמורות ל-Coach Gino 2026 | תוכנית אישית בהתאמה ביומכנית')}</td>
                <td style="text-align: left; padding: 4px 0; width: 35%; white-space: nowrap;">${sp('לשאלות והתייעצות בוואטסאפ -')} <span dir="ltr" style="font-weight: 700; color: #a3e635;">050-770-7197</span></td>
            </tr>
        </table>
    </div>
    `;
}

async function downloadPlanPDF() {
    const btn = document.getElementById('btn-download-pdf');
    const btnText = document.getElementById('btn-download-pdf-text');
    const origHtml = btnText ? btnText.innerHTML : '';
    
    if (btnText) {
        btnText.innerHTML = `מפיק קובץ PDF מעוצב... ⏳`;
    }
    if (btn) btn.disabled = true;

    const prevScrollX = window.scrollX || window.pageXOffset || 0;
    const prevScrollY = window.scrollY || window.pageYOffset || 0;

    const container = document.getElementById('pdf-printable-container');

    try {
        const answers = (state && state.answers) || {};
        const isFemale = answers.gender === 'female';
        const traineeName = (state.lead && state.lead.fullName && state.lead.fullName.trim()) || 
                            (answers.fullName && answers.fullName.trim()) || 
                            (isFemale ? 'מתאמנת' : 'מתאמן');
        const coach = getCoachSettings(answers.gender || 'male');
        
        let workouts = state.generatedWorkouts;
        if (!workouts || workouts.length === 0) {
            const bio = analyzeBiomechanicsAndSafety(answers);
            const customMatchedPlan = findMatchingCustomPlan(bio, answers);
            if (customMatchedPlan && Array.isArray(customMatchedPlan.days) && customMatchedPlan.days.length > 0) {
                workouts = customMatchedPlan.days;
            } else {
                workouts = buildPersonalizedWorkouts(bio, answers.equipment || 'gym', answers.frequency || '3');
            }
        }
        
        if (!container) {
            if (btn) btn.disabled = false;
            if (btnText) btnText.innerHTML = origHtml;
            return;
        }

        // Ensure stages for all exercises
        const enrichedWorkouts = workouts.map(w => ({
            ...w,
            exercises: (w.exercises || []).map(ex => ensureExerciseStages(JSON.parse(JSON.stringify(ex))) || ex)
        }));

        const htmlString = generatePdfPrintableHtml(traineeName, isFemale, answers, coach, enrichedWorkouts);
        container.innerHTML = htmlString;
        container.style.display = 'block';
        container.classList.remove('hidden');

        window.scrollTo(0, 0);

        if (typeof html2pdf === 'function') {
            const opt = {
                margin: [6, 6, 6, 6],
                filename: `תוכנית אימונים - ${cleanHebrewTextForPdf(traineeName)} - Coach Gino.pdf`,
                image: { type: 'jpeg', quality: 1.0 },
                html2canvas: { 
                    scale: 2, 
                    backgroundColor: '#09090b',
                    useCORS: true, 
                    logging: false,
                    allowTaint: true
                },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                pagebreak: { 
                    mode: ['css', 'legacy'],
                    avoid: ['.pdf-card', '.pdf-day-block', '.pdf-no-break']
                }
            };

            if (document.fonts && typeof document.fonts.ready === 'object') {
                try { await document.fonts.ready; } catch (_) {}
            }

            await html2pdf().set(opt).from(container.firstElementChild || container).save();
            cleanupPdfExport(btn, btnText, origHtml, container, true, prevScrollX, prevScrollY);
        } else {
            fallbackPrintPdf(btn, btnText, origHtml, container, prevScrollX, prevScrollY);
        }
    } catch (e) {
        console.error("Error generating PDF:", e);
        fallbackPrintPdf(btn, btnText, origHtml, container, prevScrollX, prevScrollY);
    }
}

function fallbackPrintPdf(btn, btnText, origHtml, container, prevScrollX = 0, prevScrollY = 0) {
    if (container) {
        container.style.display = 'block';
        container.classList.remove('hidden');
        container.classList.add('rendering-pdf');
    }
    if (typeof window.print === 'function') {
        window.print();
    }
    setTimeout(() => {
        cleanupPdfExport(btn, btnText, origHtml, container, true, prevScrollX, prevScrollY);
    }, 1000);
}

function cleanupPdfExport(btn, btnText, origHtml, container, success, prevScrollX = 0, prevScrollY = 0) {
    if (container) {
        container.style.display = 'none';
        container.classList.remove('rendering-pdf');
        container.classList.add('hidden');
        container.innerHTML = '';
    }
    if (typeof window.scrollTo === 'function') {
        window.scrollTo(prevScrollX, prevScrollY);
    }
    if (btn) btn.disabled = false;
    if (btnText) {
        btnText.innerHTML = origHtml || (state.answers && state.answers.gender === 'female' ? 'הורידי תוכנית אימונים כקובץ PDF 📥' : 'הורד תוכנית אימונים כקובץ PDF 📥');
    }
}

function handlePlanExerciseFileUpload(dayIdx, exIdx, fileInput) {
    if (!fileInput.files || !fileInput.files[0]) return;
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const dataUrl = e.target.result;
        collectPlanInputsFromDOM();
        if (currentEditingPlan && currentEditingPlan.days && currentEditingPlan.days[dayIdx] && currentEditingPlan.days[dayIdx].exercises[exIdx]) {
            currentEditingPlan.days[dayIdx].exercises[exIdx].image = dataUrl;
            renderPlanDaysEditor();
        }
        saveMediaItemToPersonalCloud({
            id: 'cloud_' + Date.now(),
            title: file.name.replace(/\.[^/.]+$/, ''),
            url: dataUrl,
            muscle: 'general',
            uploadedAt: new Date().toLocaleDateString('he-IL')
        });
    };
    reader.readAsDataURL(file);
}

// Bind to window for absolute reliability
window.renderCmsExercises = renderCmsExercises;
window.openAddExerciseModal = openAddExerciseModal;
window.openEditExerciseModal = openEditExerciseModal;
window.closeCmsExerciseModal = closeCmsExerciseModal;
window.saveCmsExercise = saveCmsExercise;
window.deleteCmsExercise = deleteCmsExercise;
window.resetExerciseBankToDefaults = resetExerciseBankToDefaults;
window.previewCmsStageImage = previewCmsStageImage;
window.handleStageFileUpload = handleStageFileUpload;
window.clearCmsStageImage = clearCmsStageImage;
window.getPersonalCloudMedia = getPersonalCloudMedia;
window.savePersonalCloudMedia = savePersonalCloudMedia;
window.handleDirectCloudUpload = handleDirectCloudUpload;
window.promptAddCloudImageByUrl = promptAddCloudImageByUrl;
window.loadDefaultCloudMedia = loadDefaultCloudMedia;
window.deleteCloudMedia = deleteCloudMedia;
window.copyCloudMediaUrl = copyCloudMediaUrl;
window.applyCloudMediaToCmsStage = applyCloudMediaToCmsStage;
window.renderPersonalCloudGallery = renderPersonalCloudGallery;
window.downloadPlanPDF = downloadPlanPDF;
window.handlePlanExerciseFileUpload = handlePlanExerciseFileUpload;

// ============================================================================
// TAB 4: COACH SETTINGS & CMS CONTENT CONTROL (DUAL GENDER SUPPORT)
// ============================================================================
let adminSettingsCurrentGender = 'male';

function switchAdminSettingsGender(gender) {
    adminSettingsCurrentGender = gender === 'female' ? 'female' : 'male';
    const maleBtn = document.getElementById('btn-admin-settings-gender-male');
    const femaleBtn = document.getElementById('btn-admin-settings-gender-female');
    const indicator = document.getElementById('admin-settings-gender-indicator');

    if (maleBtn && femaleBtn) {
        if (adminSettingsCurrentGender === 'female') {
            femaleBtn.className = 'py-1.5 px-4 rounded-lg bg-pink-500 text-white font-extrabold text-xs flex items-center gap-2 transition-all shadow-lg shadow-pink-950/40';
            maleBtn.className = 'py-1.5 px-4 rounded-lg text-zinc-400 hover:text-white font-extrabold text-xs flex items-center gap-2 transition-all';
        } else {
            maleBtn.className = 'py-1.5 px-4 rounded-lg bg-lime-500 text-black font-extrabold text-xs flex items-center gap-2 transition-all shadow-lg shadow-lime-950/40';
            femaleBtn.className = 'py-1.5 px-4 rounded-lg text-zinc-400 hover:text-white font-extrabold text-xs flex items-center gap-2 transition-all';
        }
    }
    if (indicator) {
        if (adminSettingsCurrentGender === 'female') {
            indicator.innerHTML = 'עריכת תוכן עבור: <span class="text-pink-400 font-bold">אישה ♀️ (פנייה בלשון נקבה)</span>';
        } else {
            indicator.innerHTML = 'עריכת תוכן עבור: <span class="text-lime-400 font-bold">גבר ♂️ (פנייה בלשון זכר)</span>';
        }
    }
    loadSettingsIntoAdmin(adminSettingsCurrentGender);
    lucide.createIcons();
}

function loadSettingsIntoAdmin(targetGender) {
    const currentGender = targetGender || adminSettingsCurrentGender || 'male';
    const activeSettings = getCoachSettings(currentGender);
    
    const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = val !== undefined ? val : '';
    };

    // Home Screen Texts:
    setVal('cms-landing-badge', activeSettings.badge);
    setVal('cms-landing-headline', activeSettings.headline);
    setVal('cms-landing-subheadline', activeSettings.subheadline);
    setVal('cms-bullet-1-title', activeSettings.bullet1Title);
    setVal('cms-bullet-1-desc', activeSettings.bullet1Desc);
    setVal('cms-bullet-2-title', activeSettings.bullet2Title);
    setVal('cms-bullet-2-desc', activeSettings.bullet2Desc);
    setVal('cms-bullet-3-title', activeSettings.bullet3Title);
    setVal('cms-bullet-3-desc', activeSettings.bullet3Desc);
    setVal('cms-landing-btn-text', activeSettings.landingBtnText);
    setVal('cms-landing-subtext', activeSettings.landingSubtext);

    setVal('cms-consultation-quote', activeSettings.consultationQuote);
    setVal('cms-pregnancy-consultation-quote', activeSettings.pregnancyConsultationQuote);
    setVal('cms-upsell-title', activeSettings.upsellTitle);
    setVal('cms-upsell-subtitle', activeSettings.upsellSubtitle);
    setVal('cms-upsell-body', activeSettings.upsellBody);
    setVal('cms-whatsapp-plan', activeSettings.whatsappPlanMsg);
    setVal('cms-whatsapp-consultation', activeSettings.whatsappConsultationMsg);
    setVal('cms-whatsapp-pregnancy', activeSettings.whatsappPregnancyMsg);
    setVal('cms-results-headline', activeSettings.resultsHeadline);
    setVal('cms-results-subheadline', activeSettings.resultsSubheadline);
    setVal('cms-results-welcome-note', activeSettings.resultsWelcomeNote);
    
    setVal('setting-phone', activeSettings.phone);
    setVal('setting-instagram-handle', activeSettings.instagramHandle);
    setVal('setting-instagram-link', activeSettings.instagramLink);
    setVal('setting-webhook-url', activeSettings.webhookUrl);
    renderCoachAvatar();
}


function saveAllCmsContent() {
    const getVal = (id, fallback) => {
        const el = document.getElementById(id);
        return el && el.value.trim() ? el.value.trim() : fallback;
    };

    const targetGender = adminSettingsCurrentGender || 'male';
    const baseGenderDefaults = DEFAULT_COACH_GENDER_SETTINGS[targetGender];

    let custom = {};
    try {
        const saved = localStorage.getItem('gino_coach_settings');
        if (saved) custom = JSON.parse(saved);
    } catch (e) {}

    if (!custom.byGender) {
        custom.byGender = { male: {}, female: {} };
    }
    if (!custom.byGender.male) custom.byGender.male = {};
    if (!custom.byGender.female) custom.byGender.female = {};

    const genObj = {
        consultationQuote: getVal('cms-consultation-quote', baseGenderDefaults.consultationQuote),
        consultationBtnText: baseGenderDefaults.consultationBtnText,
        upsellTitle: getVal('cms-upsell-title', baseGenderDefaults.upsellTitle),
        upsellSubtitle: getVal('cms-upsell-subtitle', baseGenderDefaults.upsellSubtitle),
        upsellBody: getVal('cms-upsell-body', baseGenderDefaults.upsellBody),
        upsellBtnText: baseGenderDefaults.upsellBtnText,
        whatsappPlanMsg: getVal('cms-whatsapp-plan', baseGenderDefaults.whatsappPlanMsg),
        whatsappConsultationMsg: getVal('cms-whatsapp-consultation', baseGenderDefaults.whatsappConsultationMsg),
        resultsHeadline: getVal('cms-results-headline', baseGenderDefaults.resultsHeadline),
        resultsSubheadline: getVal('cms-results-subheadline', baseGenderDefaults.resultsSubheadline),
        resultsWelcomeNote: getVal('cms-results-welcome-note', '')
    };

    custom.byGender[targetGender] = genObj;

    // Global Home Screen settings:
    custom.badge = getVal('cms-landing-badge', DEFAULT_LANDING_BADGE);
    custom.headline = getVal('cms-landing-headline', DEFAULT_HEADLINE);
    custom.subheadline = getVal('cms-landing-subheadline', DEFAULT_LANDING_SUBHEADLINE);
    custom.bullet1Title = getVal('cms-bullet-1-title', DEFAULT_BULLET_1_TITLE);
    custom.bullet1Desc = getVal('cms-bullet-1-desc', DEFAULT_BULLET_1_DESC);
    custom.bullet2Title = getVal('cms-bullet-2-title', DEFAULT_BULLET_2_TITLE);
    custom.bullet2Desc = getVal('cms-bullet-2-desc', DEFAULT_BULLET_2_DESC);
    custom.bullet3Title = getVal('cms-bullet-3-title', DEFAULT_BULLET_3_TITLE);
    custom.bullet3Desc = getVal('cms-bullet-3-desc', DEFAULT_BULLET_3_DESC);
    custom.landingBtnText = getVal('cms-landing-btn-text', DEFAULT_LANDING_BTN_TEXT);
    custom.landingSubtext = getVal('cms-landing-subtext', DEFAULT_LANDING_SUBTEXT);

    // Global contact & legal settings:
    custom.pregnancyConsultationQuote = getVal('cms-pregnancy-consultation-quote', DEFAULT_COACH_GENDER_SETTINGS.female.pregnancyConsultationQuote);
    custom.whatsappPregnancyMsg = getVal('cms-whatsapp-pregnancy', DEFAULT_COACH_GENDER_SETTINGS.female.whatsappPregnancyMsg);
    custom.phone = getVal('setting-phone', DEFAULT_COACH_PHONE);
    custom.instagramHandle = getVal('setting-instagram-handle', DEFAULT_INSTAGRAM_HANDLE);
    custom.instagramLink = getVal('setting-instagram-link', DEFAULT_INSTAGRAM_LINK);
    custom.webhookUrl = getVal('setting-webhook-url', '');


    // For backwards compatibility, mirror top-level fields if editing male
    if (targetGender === 'male') {
        Object.assign(custom, genObj);
    }

    localStorage.setItem('gino_coach_settings', JSON.stringify(custom));
    coachSettings = getCoachSettings(state.answers.gender || 'male');
    applyCoachSettingsToDOM();
    applyQuestionnaireConfigToDOM(state.answers.gender || 'male');

    const genderHeb = targetGender === 'female' ? 'נשים ♀️' : 'גברים ♂️';
    alert(`כל התכנים וההגדרות עבור ${genderHeb} נשמרו בהצלחה ועודכנו באפליקציה!`);
}

function saveCoachSettings() {
    saveAllCmsContent();
}

// ============================================================================
// TAB 5: QUESTIONNAIRE CMS EDITOR & CONFIG MANAGEMENT (DUAL GENDER SUPPORT)
// ============================================================================
let adminQuestionnaireCurrentGender = 'male';

function switchAdminQuestionnaireGender(gender) {
    adminQuestionnaireCurrentGender = gender === 'female' ? 'female' : 'male';
    const maleBtn = document.getElementById('btn-admin-qc-gender-male');
    const femaleBtn = document.getElementById('btn-admin-qc-gender-female');
    const indicator = document.getElementById('admin-qc-gender-indicator');

    if (maleBtn && femaleBtn) {
        if (adminQuestionnaireCurrentGender === 'female') {
            femaleBtn.className = 'py-1.5 px-4 rounded-lg bg-pink-500 text-white font-extrabold text-xs flex items-center gap-2 transition-all shadow-lg shadow-pink-950/40';
            maleBtn.className = 'py-1.5 px-4 rounded-lg text-zinc-400 hover:text-white font-extrabold text-xs flex items-center gap-2 transition-all';
        } else {
            maleBtn.className = 'py-1.5 px-4 rounded-lg bg-lime-500 text-black font-extrabold text-xs flex items-center gap-2 transition-all shadow-lg shadow-lime-950/40';
            femaleBtn.className = 'py-1.5 px-4 rounded-lg text-zinc-400 hover:text-white font-extrabold text-xs flex items-center gap-2 transition-all';
        }
    }
    if (indicator) {
        if (adminQuestionnaireCurrentGender === 'female') {
            indicator.innerHTML = 'עריכת תוכן עבור: <span class="text-pink-400 font-bold">אישה ♀️ (פנייה בלשון נקבה)</span>';
        } else {
            indicator.innerHTML = 'עריכת תוכן עבור: <span class="text-lime-400 font-bold">גבר ♂️ (פנייה בלשון זכר)</span>';
        }
    }
    renderAdminQuestionnaireEditor(adminQuestionnaireCurrentGender);
    lucide.createIcons();
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function renderAdminQuestionnaireEditor(targetGender) {
    const container = document.getElementById('admin-questionnaire-editor-container');
    if (!container) return;
    const currentGender = targetGender || adminQuestionnaireCurrentGender || 'male';
    const cfg = getQuestionnaireConfig(currentGender);
    const isFemale = currentGender === 'female';

    let html = `
        <!-- Gender Mode Banner -->
        <div class="p-3 rounded-xl ${isFemale ? 'bg-pink-950/30 border border-pink-500/40 text-pink-300' : 'bg-lime-950/30 border border-lime-500/40 text-lime-300'} text-xs flex items-center justify-between">
            <div class="flex items-center gap-2 font-bold">
                <i data-lucide="${isFemale ? 'heart' : 'user'}" class="w-4 h-4"></i>
                <span>עריכת תכני השאלון עבור: <strong>${isFemale ? 'אישה ♀️ (ניסוח מלא בלשון נקבה)' : 'גבר ♂️ (ניסוח מלא בלשון זכר)'}</strong></span>
            </div>
            <span class="text-[10px] px-2 py-0.5 rounded font-mono uppercase ${isFemale ? 'bg-pink-500/20 text-pink-200' : 'bg-lime-500/20 text-lime-200'}">
                ${isFemale ? 'FEMALE PROFILE' : 'MALE PROFILE'}
            </span>
        </div>

        <!-- Section: Wizard Steps Titles -->
        <div class="bg-zinc-950/80 p-4 rounded-xl border border-zinc-850 space-y-4">
            <h5 class="font-extrabold text-sm text-lime-400 flex items-center gap-2 border-b border-zinc-850 pb-2">
                <i data-lucide="layers" class="w-4 h-4"></i>
                <span>כותרות ותתי-כותרות של שלבי השאלון (Steps Titles)</span>
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div class="space-y-2 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                    <span class="font-bold text-zinc-200 block">שלב 1:</span>
                    <label class="block text-zinc-400 text-[11px]">כותרת:</label>
                    <input type="text" id="qc-step1-title" value="${escapeHtml(cfg.steps?.step1?.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                    <label class="block text-zinc-400 text-[11px]">תת-כותרת:</label>
                    <input type="text" id="qc-step1-subtitle" value="${escapeHtml(cfg.steps?.step1?.subtitle || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
                <div class="space-y-2 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                    <span class="font-bold text-zinc-200 block">שלב 2:</span>
                    <label class="block text-zinc-400 text-[11px]">כותרת:</label>
                    <input type="text" id="qc-step2-title" value="${escapeHtml(cfg.steps?.step2?.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                    <label class="block text-zinc-400 text-[11px]">תת-כותרת:</label>
                    <input type="text" id="qc-step2-subtitle" value="${escapeHtml(cfg.steps?.step2?.subtitle || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
                <div class="space-y-2 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                    <span class="font-bold text-zinc-200 block">שלב 3:</span>
                    <label class="block text-zinc-400 text-[11px]">כותרת:</label>
                    <input type="text" id="qc-step3-title" value="${escapeHtml(cfg.steps?.step3?.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                    <label class="block text-zinc-400 text-[11px]">תת-כותרת:</label>
                    <input type="text" id="qc-step3-subtitle" value="${escapeHtml(cfg.steps?.step3?.subtitle || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
                <div class="space-y-2 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                    <span class="font-bold text-zinc-200 block">שלב 4:</span>
                    <label class="block text-zinc-400 text-[11px]">כותרת:</label>
                    <input type="text" id="qc-step4-title" value="${escapeHtml(cfg.steps?.step4?.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                    <label class="block text-zinc-400 text-[11px]">תת-כותרת:</label>
                    <input type="text" id="qc-step4-subtitle" value="${escapeHtml(cfg.steps?.step4?.subtitle || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
            </div>
        </div>

        <!-- Question 1: Gender -->
        <div class="bg-zinc-950/80 p-4 rounded-xl border border-zinc-850 space-y-3">
            <h5 class="font-extrabold text-sm text-lime-400 flex items-center gap-2 border-b border-zinc-850 pb-2">
                <i data-lucide="user-check" class="w-4 h-4"></i>
                <span>שאלה 1 - מגדר</span>
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div>
                    <label class="block text-zinc-400 text-[11px]">כותרת השאלה:</label>
                    <input type="text" id="qc-gender-title" value="${escapeHtml(cfg.genderQuestion?.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
                <div>
                    <label class="block text-zinc-400 text-[11px]">תווית כפתור גבר:</label>
                    <input type="text" id="qc-gender-male" value="${escapeHtml(cfg.genderQuestion?.maleLabel || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
                <div>
                    <label class="block text-zinc-400 text-[11px]">תווית כפתור אישה:</label>
                    <input type="text" id="qc-gender-female" value="${escapeHtml(cfg.genderQuestion?.femaleLabel || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
            </div>
        </div>

        <!-- Question 1.5: Pregnancy -->
        <div class="bg-zinc-950/80 p-4 rounded-xl border border-pink-500/30 space-y-3">
            <h5 class="font-extrabold text-sm text-pink-400 flex items-center gap-2 border-b border-zinc-850 pb-2">
                <i data-lucide="baby" class="w-4 h-4"></i>
                <span>שאלה 1.5 - הריון</span>
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div>
                    <label class="block text-zinc-400 text-[11px]">כותרת:</label>
                    <input type="text" id="qc-preg-title" value="${escapeHtml(cfg.pregnancyQuestion?.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
                <div>
                    <label class="block text-zinc-400 text-[11px]">כפתור לא:</label>
                    <input type="text" id="qc-preg-no" value="${escapeHtml(cfg.pregnancyQuestion?.noLabel || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
                <div>
                    <label class="block text-zinc-400 text-[11px]">כפתור כן:</label>
                    <input type="text" id="qc-preg-yes" value="${escapeHtml(cfg.pregnancyQuestion?.yesLabel || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
            </div>
        </div>

        <!-- Question 2: Body Metrics -->
        <div class="bg-zinc-950/80 p-4 rounded-xl border border-zinc-850 space-y-3">
            <h5 class="font-extrabold text-sm text-lime-400 flex items-center gap-2 border-b border-zinc-850 pb-2">
                <i data-lucide="scale" class="w-4 h-4"></i>
                <span>שאלה 2 - מדדי גוף (גיל, גובה, משקל)</span>
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="space-y-2">
                    <label class="block text-zinc-400 text-[11px]">כותרת השאלה:</label>
                    <input type="text" id="qc-metrics-title" value="${escapeHtml(cfg.bodyMetricsQuestion?.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
                <div class="grid grid-cols-3 gap-2">
                    <div>
                        <label class="block text-zinc-400 text-[11px]">תווית גיל:</label>
                        <input type="text" id="qc-metrics-age" value="${escapeHtml(cfg.bodyMetricsQuestion?.ageLabel || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                    </div>
                    <div>
                        <label class="block text-zinc-400 text-[11px]">תווית גובה:</label>
                        <input type="text" id="qc-metrics-height" value="${escapeHtml(cfg.bodyMetricsQuestion?.heightLabel || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                    </div>
                    <div>
                        <label class="block text-zinc-400 text-[11px]">תווית משקל:</label>
                        <input type="text" id="qc-metrics-weight" value="${escapeHtml(cfg.bodyMetricsQuestion?.weightLabel || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                    </div>
                </div>
            </div>
            <div>
                <label class="block text-zinc-400 text-[11px]">Placeholder לשדה הערה אישית:</label>
                <input type="text" id="qc-metrics-note-ph" value="${escapeHtml(cfg.bodyMetricsQuestion?.notePlaceholder || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white text-xs">
            </div>
        </div>

        <!-- Question 3: Activity Level -->
        <div class="bg-zinc-950/80 p-4 rounded-xl border border-zinc-850 space-y-3">
            <h5 class="font-extrabold text-sm text-lime-400 flex items-center gap-2 border-b border-zinc-850 pb-2">
                <i data-lucide="briefcase" class="w-4 h-4"></i>
                <span>שאלה 3 - אופי התעסוקה ורמת הפעילות היומית</span>
            </h5>
            <div class="space-y-3 text-xs">
                <div>
                    <label class="block text-zinc-400 text-[11px]">כותרת השאלה:</label>
                    <input type="text" id="qc-activity-title" value="${escapeHtml(cfg.activityQuestion?.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    ${(cfg.activityQuestion?.options || []).map((opt, i) => `
                        <div class="bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-800 space-y-1.5">
                            <span class="font-bold text-zinc-300">אופציה (${opt.id}):</span>
                            <label class="block text-zinc-400 text-[10px]">כותרת:</label>
                            <input type="text" id="qc-activity-opt-${opt.id}-title" value="${escapeHtml(opt.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded p-1.5 text-white text-xs">
                            <label class="block text-zinc-400 text-[10px]">הסבר:</label>
                            <input type="text" id="qc-activity-opt-${opt.id}-desc" value="${escapeHtml(opt.desc || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded p-1.5 text-white text-xs">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <!-- Question 4: Goals -->
        <div class="bg-zinc-950/80 p-4 rounded-xl border border-zinc-850 space-y-3">
            <h5 class="font-extrabold text-sm text-lime-400 flex items-center gap-2 border-b border-zinc-850 pb-2">
                <i data-lucide="target" class="w-4 h-4"></i>
                <span>שאלה 4 - מטרת העל</span>
            </h5>
            <div class="space-y-3 text-xs">
                <div>
                    <label class="block text-zinc-400 text-[11px]">כותרת השאלה:</label>
                    <input type="text" id="qc-goal-title" value="${escapeHtml(cfg.goalQuestion?.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    ${(cfg.goalQuestion?.options || []).map((opt, i) => `
                        <div class="bg-zinc-900/60 p-2 rounded-lg border border-zinc-800 space-y-1">
                            <span class="font-bold text-zinc-300">מטרה (${opt.id}):</span>
                            <input type="text" id="qc-goal-opt-${opt.id}-title" value="${escapeHtml(opt.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded p-1.5 text-white text-xs">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <!-- Question 5: Experience -->
        <div class="bg-zinc-950/80 p-4 rounded-xl border border-zinc-850 space-y-3">
            <h5 class="font-extrabold text-sm text-lime-400 flex items-center gap-2 border-b border-zinc-850 pb-2">
                <i data-lucide="award" class="w-4 h-4"></i>
                <span>שאלה 5 - ניסיון באימוני כוח</span>
            </h5>
            <div class="space-y-3 text-xs">
                <div>
                    <label class="block text-zinc-400 text-[11px]">כותרת השאלה:</label>
                    <input type="text" id="qc-exp-title" value="${escapeHtml(cfg.experienceQuestion?.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    ${(cfg.experienceQuestion?.options || []).map((opt, i) => `
                        <div class="bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-800 space-y-1.5">
                            <span class="font-bold text-zinc-300">אופציה (${opt.id}):</span>
                            <label class="block text-zinc-400 text-[10px]">כותרת:</label>
                            <input type="text" id="qc-exp-opt-${opt.id}-title" value="${escapeHtml(opt.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded p-1.5 text-white text-xs">
                            <label class="block text-zinc-400 text-[10px]">הסבר:</label>
                            <input type="text" id="qc-exp-opt-${opt.id}-desc" value="${escapeHtml(opt.desc || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded p-1.5 text-white text-xs">
                        </div>
                    `).join('')}
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                        <label class="block text-zinc-400 text-[11px]">תווית כפתור 'אחר':</label>
                        <input type="text" id="qc-exp-other" value="${escapeHtml(cfg.experienceQuestion?.otherLabel || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                    </div>
                    <div>
                        <label class="block text-zinc-400 text-[11px]">תת-תווית:</label>
                        <input type="text" id="qc-exp-other-sub" value="${escapeHtml(cfg.experienceQuestion?.otherSub || (isFemale ? 'פרטי בעצמך' : 'פרט בעצמך'))}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                    </div>
                    <div>
                        <label class="block text-zinc-400 text-[11px]">Placeholder להערה:</label>
                        <input type="text" id="qc-exp-note-ph" value="${escapeHtml(cfg.experienceQuestion?.notePlaceholder || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                    </div>
                </div>
            </div>
        </div>

        <!-- Question 6: Frequency -->
        <div class="bg-zinc-950/80 p-4 rounded-xl border border-zinc-850 space-y-3">
            <h5 class="font-extrabold text-sm text-lime-400 flex items-center gap-2 border-b border-zinc-850 pb-2">
                <i data-lucide="calendar" class="w-4 h-4"></i>
                <span>שאלה 6 - תדירות אימונים שבועית (2 אפשרויות בלבד)</span>
            </h5>
            <div class="space-y-3 text-xs">
                <div>
                    <label class="block text-zinc-400 text-[11px]">כותרת השאלה:</label>
                    <input type="text" id="qc-freq-title" value="${escapeHtml(cfg.frequencyQuestion?.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${(cfg.frequencyQuestion?.options || []).map((opt, i) => `
                        <div class="bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-800 space-y-1.5">
                            <span class="font-bold text-zinc-300">אופציה (${opt.id}):</span>
                            <label class="block text-zinc-400 text-[10px]">כותרת:</label>
                            <input type="text" id="qc-freq-opt-${opt.id}-title" value="${escapeHtml(opt.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded p-1.5 text-white text-xs">
                            <label class="block text-zinc-400 text-[10px]">הסבר / תת-כותרת:</label>
                            <input type="text" id="qc-freq-opt-${opt.id}-desc" value="${escapeHtml(opt.desc || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded p-1.5 text-white text-xs">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <!-- Question 7: Injuries -->
        <div class="bg-zinc-950/80 p-4 rounded-xl border border-zinc-850 space-y-3">
            <h5 class="font-extrabold text-sm text-red-400 flex items-center gap-2 border-b border-zinc-850 pb-2">
                <i data-lucide="shield-alert" class="w-4 h-4"></i>
                <span>שאלה 7 - פציעות ומגבלות</span>
            </h5>
            <div class="space-y-3 text-xs">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-zinc-400 text-[11px]">כותרת השאלה:</label>
                        <input type="text" id="qc-inj-title" value="${escapeHtml(cfg.injuriesQuestion?.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                    </div>
                    <div>
                        <label class="block text-zinc-400 text-[11px]">נוסח אזהרה:</label>
                        <input type="text" id="qc-inj-warning" value="${escapeHtml(cfg.injuriesQuestion?.warning || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                    </div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                    ${(cfg.injuriesQuestion?.options || []).map((opt, i) => `
                        <div class="bg-zinc-900/60 p-2 rounded-lg border border-zinc-800 space-y-1">
                            <span class="font-bold text-zinc-300">אופציה (${opt.id}):</span>
                            <input type="text" id="qc-inj-opt-${opt.id}-label" value="${escapeHtml(opt.label || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded p-1.5 text-white text-xs">
                        </div>
                    `).join('')}
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                        <label class="block text-zinc-400 text-[11px]">תווית 'אין מגבלות':</label>
                        <input type="text" id="qc-inj-none" value="${escapeHtml(cfg.injuriesQuestion?.noneLabel || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                    </div>
                    <div>
                        <label class="block text-zinc-400 text-[11px]">תווית פירוט:</label>
                        <input type="text" id="qc-inj-detail-label" value="${escapeHtml(cfg.injuriesQuestion?.detailLabel || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                    </div>
                    <div>
                        <label class="block text-zinc-400 text-[11px]">Placeholder פירוט:</label>
                        <input type="text" id="qc-inj-detail-ph" value="${escapeHtml(cfg.injuriesQuestion?.detailPlaceholder || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                    </div>
                </div>
            </div>
        </div>

        <!-- Question 8: Equipment -->
        <div class="bg-zinc-950/80 p-4 rounded-xl border border-zinc-850 space-y-3">
            <h5 class="font-extrabold text-sm text-lime-400 flex items-center gap-2 border-b border-zinc-850 pb-2">
                <i data-lucide="dumbbell" class="w-4 h-4"></i>
                <span>שאלה 8 - ציוד זמין</span>
            </h5>
            <div class="space-y-3 text-xs">
                <div>
                    <label class="block text-zinc-400 text-[11px]">כותרת השאלה:</label>
                    <input type="text" id="qc-equip-title" value="${escapeHtml(cfg.equipmentQuestion?.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    ${(cfg.equipmentQuestion?.options || []).map((opt, i) => `
                        <div class="bg-zinc-900/60 p-2 rounded-lg border border-zinc-800 space-y-1">
                            <span class="font-bold text-zinc-300">ציוד (${opt.id}):</span>
                            <input type="text" id="qc-equip-opt-${opt.id}-title" value="${escapeHtml(opt.title || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded p-1.5 text-white text-xs">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="bg-zinc-950/80 p-4 rounded-xl border border-zinc-850 space-y-3">
            <h5 class="font-extrabold text-sm text-lime-400 flex items-center gap-2 border-b border-zinc-850 pb-2">
                <i data-lucide="mouse-pointer-click" class="w-4 h-4"></i>
                <span>כפתורי ניווט ואישורים</span>
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div>
                    <label class="block text-zinc-400 text-[11px]">כפתור שלב 1 הבא:</label>
                    <input type="text" id="qc-btn-step1-next" value="${escapeHtml(cfg.buttons?.step1Next || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
                <div>
                    <label class="block text-zinc-400 text-[11px]">כפתור שלב 2 הבא:</label>
                    <input type="text" id="qc-btn-step2-next" value="${escapeHtml(cfg.buttons?.step2Next || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
                <div>
                    <label class="block text-zinc-400 text-[11px]">כפתור שלב 3 הבא:</label>
                    <input type="text" id="qc-btn-step3-next" value="${escapeHtml(cfg.buttons?.step3Next || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
                <div>
                    <label class="block text-zinc-400 text-[11px]">כפתור שליחת ליד:</label>
                    <input type="text" id="qc-btn-step4-submit" value="${escapeHtml(cfg.buttons?.step4Submit || '')}" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-white">
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
    lucide.createIcons();
}

function saveAdminQuestionnaire() {
    const targetGender = adminQuestionnaireCurrentGender || 'male';
    const baseDefault = targetGender === 'female' ? DEFAULT_QUESTIONNAIRE_CONFIG_FEMALE : DEFAULT_QUESTIONNAIRE_CONFIG_MALE;
    const isFemale = targetGender === 'female';

    const getVal = (id, fallback) => {
        const el = document.getElementById(id);
        return el ? el.value.trim() : (fallback || '');
    };

    const cfg = {
        steps: {
            step1: {
                title: getVal('qc-step1-title', baseDefault.steps.step1.title),
                subtitle: getVal('qc-step1-subtitle', baseDefault.steps.step1.subtitle)
            },
            step2: {
                title: getVal('qc-step2-title', baseDefault.steps.step2.title),
                subtitle: getVal('qc-step2-subtitle', baseDefault.steps.step2.subtitle)
            },
            step3: {
                title: getVal('qc-step3-title', baseDefault.steps.step3.title),
                subtitle: getVal('qc-step3-subtitle', baseDefault.steps.step3.subtitle)
            },
            step4: {
                title: getVal('qc-step4-title', baseDefault.steps.step4.title),
                subtitle: getVal('qc-step4-subtitle', baseDefault.steps.step4.subtitle)
            }
        },
        buttons: {
            step1Next: getVal('qc-btn-step1-next', baseDefault.buttons.step1Next),
            step2Next: getVal('qc-btn-step2-next', baseDefault.buttons.step2Next),
            step3Next: getVal('qc-btn-step3-next', baseDefault.buttons.step3Next),
            step4Submit: getVal('qc-btn-step4-submit', baseDefault.buttons.step4Submit),
            copyProgram: getVal('qc-btn-copy-program', baseDefault.buttons.copyProgram),
            leadCompliance: getVal('qc-btn-lead-compliance', baseDefault.buttons.leadCompliance)
        },
        genderQuestion: {
            title: getVal('qc-gender-title', baseDefault.genderQuestion.title),
            maleLabel: getVal('qc-gender-male', baseDefault.genderQuestion.maleLabel),
            femaleLabel: getVal('qc-gender-female', baseDefault.genderQuestion.femaleLabel)
        },
        pregnancyQuestion: {
            title: getVal('qc-preg-title', baseDefault.pregnancyQuestion.title),
            noLabel: getVal('qc-preg-no', baseDefault.pregnancyQuestion.noLabel),
            yesLabel: getVal('qc-preg-yes', baseDefault.pregnancyQuestion.yesLabel)
        },
        bodyMetricsQuestion: {
            title: getVal('qc-metrics-title', baseDefault.bodyMetricsQuestion.title),
            ageLabel: getVal('qc-metrics-age', baseDefault.bodyMetricsQuestion.ageLabel),
            heightLabel: getVal('qc-metrics-height', baseDefault.bodyMetricsQuestion.heightLabel),
            weightLabel: getVal('qc-metrics-weight', baseDefault.bodyMetricsQuestion.weightLabel),
            notePlaceholder: getVal('qc-metrics-note-ph', baseDefault.bodyMetricsQuestion.notePlaceholder)
        },
        activityQuestion: {
            title: getVal('qc-activity-title', baseDefault.activityQuestion.title),
            options: [
                {
                    id: 'office',
                    title: getVal('qc-activity-opt-office-title', baseDefault.activityQuestion.options[0].title),
                    desc: getVal('qc-activity-opt-office-desc', baseDefault.activityQuestion.options[0].desc)
                },
                {
                    id: 'light',
                    title: getVal('qc-activity-opt-light-title', baseDefault.activityQuestion.options[1].title),
                    desc: getVal('qc-activity-opt-light-desc', baseDefault.activityQuestion.options[1].desc)
                },
                {
                    id: 'heavy',
                    title: getVal('qc-activity-opt-heavy-title', baseDefault.activityQuestion.options[2].title),
                    desc: getVal('qc-activity-opt-heavy-desc', baseDefault.activityQuestion.options[2].desc)
                }
            ],
            otherLabel: getVal('qc-activity-other', baseDefault.activityQuestion.otherLabel),
            otherPlaceholder: baseDefault.activityQuestion.otherPlaceholder,
            notePlaceholder: getVal('qc-activity-note-ph', baseDefault.activityQuestion.notePlaceholder)
        },
        goalQuestion: {
            title: getVal('qc-goal-title', baseDefault.goalQuestion.title),
            options: [
                { id: 'mass', title: getVal('qc-goal-opt-mass-title', baseDefault.goalQuestion.options[0].title) },
                { id: 'shred', title: getVal('qc-goal-opt-shred-title', baseDefault.goalQuestion.options[1].title) },
                { id: 'strength', title: getVal('qc-goal-opt-strength-title', baseDefault.goalQuestion.options[2].title) },
                { id: 'recomp', title: getVal('qc-goal-opt-recomp-title', baseDefault.goalQuestion.options[3].title) }
            ],
            otherLabel: getVal('qc-goal-other', baseDefault.goalQuestion.otherLabel),
            otherPlaceholder: baseDefault.goalQuestion.otherPlaceholder,
            notePlaceholder: getVal('qc-goal-note-ph', baseDefault.goalQuestion.notePlaceholder)
        },
        experienceQuestion: {
            title: getVal('qc-exp-title', baseDefault.experienceQuestion.title),
            options: [
                {
                    id: 'beginner',
                    title: getVal('qc-exp-opt-beginner-title', baseDefault.experienceQuestion.options[0].title),
                    desc: getVal('qc-exp-opt-beginner-desc', baseDefault.experienceQuestion.options[0].desc)
                },
                {
                    id: 'active',
                    title: getVal('qc-exp-opt-active-title', baseDefault.experienceQuestion.options[1].title),
                    desc: getVal('qc-exp-opt-active-desc', baseDefault.experienceQuestion.options[1].desc)
                },
                {
                    id: 'advanced',
                    title: getVal('qc-exp-opt-advanced-title', baseDefault.experienceQuestion.options[2].title),
                    desc: getVal('qc-exp-opt-advanced-desc', baseDefault.experienceQuestion.options[2].desc)
                }
            ],
            otherLabel: getVal('qc-exp-other', baseDefault.experienceQuestion.otherLabel),
            otherSub: getVal('qc-exp-other-sub', baseDefault.experienceQuestion.otherSub || (isFemale ? 'פרטי בעצמך' : 'פרט בעצמך')),
            otherPlaceholder: baseDefault.experienceQuestion.otherPlaceholder,
            notePlaceholder: getVal('qc-exp-note-ph', baseDefault.experienceQuestion.notePlaceholder)
        },
        frequencyQuestion: {
            title: getVal('qc-freq-title', baseDefault.frequencyQuestion.title),
            options: [
                {
                    id: '2-3',
                    title: getVal('qc-freq-opt-2-3-title', baseDefault.frequencyQuestion.options[0]?.title || '2-3 פעמים בשבוע'),
                    desc: getVal('qc-freq-opt-2-3-desc', baseDefault.frequencyQuestion.options[0]?.desc || '')
                },
                {
                    id: '4+',
                    title: getVal('qc-freq-opt-4+-title', baseDefault.frequencyQuestion.options[1]?.title || '4+ ימים בשבוע'),
                    desc: getVal('qc-freq-opt-4+-desc', baseDefault.frequencyQuestion.options[1]?.desc || '')
                }
            ],
            otherLabel: getVal('qc-freq-other', baseDefault.frequencyQuestion.otherLabel || 'אחר'),
            otherPlaceholder: baseDefault.frequencyQuestion.otherPlaceholder,
            notePlaceholder: getVal('qc-freq-note-ph', baseDefault.frequencyQuestion.notePlaceholder)
        },
        injuriesQuestion: {
            title: getVal('qc-inj-title', baseDefault.injuriesQuestion.title),
            warning: getVal('qc-inj-warning', baseDefault.injuriesQuestion.warning),
            options: [
                { id: 'back', label: getVal('qc-inj-opt-back-label', baseDefault.injuriesQuestion.options[0].label) },
                { id: 'shoulders', label: getVal('qc-inj-opt-shoulders-label', baseDefault.injuriesQuestion.options[1].label) },
                { id: 'knees', label: getVal('qc-inj-opt-knees-label', baseDefault.injuriesQuestion.options[2].label) },
                { id: 'elbows', label: getVal('qc-inj-opt-elbows-label', baseDefault.injuriesQuestion.options[3].label) }
            ],
            noneLabel: getVal('qc-inj-none', baseDefault.injuriesQuestion.noneLabel),
            detailLabel: getVal('qc-inj-detail-label', baseDefault.injuriesQuestion.detailLabel),
            detailPlaceholder: getVal('qc-inj-detail-ph', baseDefault.injuriesQuestion.detailPlaceholder),
            notePlaceholder: getVal('qc-inj-note-ph', baseDefault.injuriesQuestion.notePlaceholder)
        },
        equipmentQuestion: {
            title: getVal('qc-equip-title', baseDefault.equipmentQuestion.title),
            options: [
                { id: 'gym', title: getVal('qc-equip-opt-gym-title', baseDefault.equipmentQuestion.options[0]?.title || 'חדר כושר מלא ומאובזר') },
                { id: 'bodyweight', title: getVal('qc-equip-opt-bodyweight-title', baseDefault.equipmentQuestion.options[1]?.title || 'משקל גוף בלבד (קליסטניקס)') }
            ],
            otherLabel: getVal('qc-equip-other', baseDefault.equipmentQuestion.otherLabel || ''),
            otherPlaceholder: baseDefault.equipmentQuestion.otherPlaceholder || '',
            notePlaceholder: getVal('qc-equip-note-ph', baseDefault.equipmentQuestion.notePlaceholder || '')
        },
        challengeQuestion: {
            title: getVal('qc-chal-title', baseDefault.challengeQuestion.title),
            options: [
                { id: 'load', text: getVal('qc-chal-opt-load-text', baseDefault.challengeQuestion.options[0].text) },
                { id: 'consistency', text: getVal('qc-chal-opt-consistency-text', baseDefault.challengeQuestion.options[1].text) },
                { id: 'technique', text: getVal('qc-chal-opt-technique-text', baseDefault.challengeQuestion.options[2].text) },
                { id: 'nutrition', text: getVal('qc-chal-opt-nutrition-text', baseDefault.challengeQuestion.options[3].text) },
                { id: 'results', text: getVal('qc-chal-opt-results-text', baseDefault.challengeQuestion.options[4].text) }
            ],
            otherLabel: getVal('qc-chal-other', baseDefault.challengeQuestion.otherLabel),
            otherPlaceholder: baseDefault.challengeQuestion.otherPlaceholder,
            notePlaceholder: getVal('qc-chal-note-ph', baseDefault.challengeQuestion.notePlaceholder)
        }
    };

    let saved = {};
    try {
        const raw = localStorage.getItem('gino_questionnaire_config');
        if (raw) saved = JSON.parse(raw);
    } catch (e) {}

    if (!saved.male && !saved.female) {
        saved = {
            male: Object.assign({}, DEFAULT_QUESTIONNAIRE_CONFIG_MALE, saved),
            female: Object.assign({}, DEFAULT_QUESTIONNAIRE_CONFIG_FEMALE)
        };
    }
    saved[targetGender] = cfg;

    localStorage.setItem('gino_questionnaire_config', JSON.stringify(saved));
    applyQuestionnaireConfigToDOM(state.answers.gender || 'male');
    const genderHeb = targetGender === 'female' ? 'נשים ♀️' : 'גברים ♂️';
    alert(`כל השינויים בשאלון עבור ${genderHeb} נשמרו בהצלחה ועודכנו באפליקציה!`);
}

function resetQuestionnaireToDefaults() {
    const targetGender = adminQuestionnaireCurrentGender || 'male';
    const genderHeb = targetGender === 'female' ? 'של נשים ♀️' : 'של גברים ♂️';
    if (confirm(`האם לאפס את תכני השאלון ${genderHeb} לברירת המחדל המקורית?`)) {
        let saved = {};
        try {
            const raw = localStorage.getItem('gino_questionnaire_config');
            if (raw) saved = JSON.parse(raw);
        } catch (e) {}
        if (!saved.male && !saved.female) {
            saved = { male: {}, female: {} };
        }
        saved[targetGender] = JSON.parse(JSON.stringify(
            targetGender === 'female' ? DEFAULT_QUESTIONNAIRE_CONFIG_FEMALE : DEFAULT_QUESTIONNAIRE_CONFIG_MALE
        ));
        localStorage.setItem('gino_questionnaire_config', JSON.stringify(saved));
        applyQuestionnaireConfigToDOM(state.answers.gender || 'male');
        renderAdminQuestionnaireEditor(targetGender);
        alert(`השאלון ${genderHeb} אופס בהצלחה לברירת המחדל!`);
    }
}

// Global window bindings for Admin CMS
window.switchAdminSettingsGender = switchAdminSettingsGender;
window.loadSettingsIntoAdmin = loadSettingsIntoAdmin;
window.saveAllCmsContent = saveAllCmsContent;
window.saveCoachSettings = saveCoachSettings;
window.switchAdminQuestionnaireGender = switchAdminQuestionnaireGender;
window.renderAdminQuestionnaireEditor = renderAdminQuestionnaireEditor;
window.saveAdminQuestionnaire = saveAdminQuestionnaire;
window.resetQuestionnaireToDefaults = resetQuestionnaireToDefaults;

// ============================================================================
// TAB 6: WORKOUT PLANS BUILDER & MATCHING ENGINE (COACH GINO CUSTOM PLANS)
const DEFAULT_WORKOUT_PLANS = [
    {
        id: 'plan_men_gym_hypertrophy',
        title: 'תוכנית חיטוב ובניית שריר בחדר כושר (גברים/כללי - AB Split)',
        description: 'חלוקת עבודה מאוזנת של פלג גוף עליון ותחתון להיפרטרופיה מקסימלית ושריפת שומן.',
        resultsTitle: 'תוכנית החיטוב ובניית השריר שלך מוכנה! 💪',
        resultsSubtitle: 'תוכנית אימונים מבוססת עקרונות היפרטרופיה שנבנתה עבורך על ידי Coach Gino:',
        customMessage: 'היי {name}, ראיתי שהמטרה המרכזית שלך היא {goal}. בתור מאמן שבנה עשרות תוכניות, חלוקת AB בחדר כושר מאפשרת לנו לייצר נפח שבועי מדויק לכל קבוצת שריר בלי לשחוק את מערכת העצבים. התוכנית מותאמת לציוד שיש לך כדי לאפשר התקדמות רציפה.',
        intensityRule: 'עבודה בעצימות מבוקרת (סיום כל סט כשיש עוד 1-2 חזרות במלאי). אין להגיע לכשל שריר מוחלט וטלטול משקלים בסטים הראשונים.',
        matchingRules: {
            gender: 'male',
            goal: 'all',
            equipment: 'gym',
            frequency: 'all',
            level: 'all',
            condition: 'none'
        },
        guidelines: 'שמירה על עומס פרוגרסיבי מבוקר (Progressive Overload), תנועה מלאה ומבוקרת ומנוחה מבוקרת של 90-120 שניות (ניתן גם יותר במידת הצורך) בין סטים.',
        days: [
            {
                dayName: 'אימון A - פלג גוף עליון (חזה, גב, כתפיים וידיים)',
                exercises: [
                    { name: 'לחיצת חזה עם משקולות בשיפוע חיובי', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: '8iPEnn-ltC8', image: '', notes: 'הורדה מבוקרת תוך קירוב שכמות ומנח יציב על הספה.' },
                    { name: 'משיכת פולי עליון באחיזה רחבה (Lat Pulldown)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'CAwf7n6Luuc', image: '', notes: 'הובלת התנועה מהמרפקים, כיווץ שיא של הרחב גבי בתחתית.' },
                    { name: 'לחיצת כתפיים בישיבה עם דאמבלים', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'qEwKCR5JCog', image: '', notes: 'מרפקים במישור השכמה ב-45 מעלות קדימה למניעת צביטה.' },
                    { name: 'כפיפת מרפקים במכשיר פריצ\'ר או כבל', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'ykJmrZ5v0Oo', image: '', notes: 'ייצוב מלא של הזרוע לבידוד שריר הבייספס.' }
                ]
            },
            {
                dayName: 'אימון B - פלג גוף תחתון וליבה (רגליים ובטן)',
                exercises: [
                    { name: 'לחיצת רגליים במכונה (Leg Press)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'IZxyjW7MPJQ', image: '', notes: 'מיקום כפות רגליים ברוחב כתפיים, שמירה על אגן צמוד למשענת.' },
                    { name: 'כפיפת ברכיים במכונה בישיבה (Hamstrings)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'ELOCsoDSmrg', image: '', notes: 'שליטה בחזרה השלילית לכיווץ אופטימלי של ההמסטרינגס.' },
                    { name: 'הרמת עקבים בעמידה (Calves)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'gwLzBJYoWlI', image: '', notes: 'עצירה של שניה במתיחה המלאה למטה ושניה בכיווץ למעלה.' },
                    { name: 'פלאנק סטטי מבוקר (Core Plank)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'ASdvN_XEl_c', image: '', notes: 'בטן אסופה, אגן ניטרלי ונשימה סדירה ללא הקשתה בגב.' }
                ]
            }
        ]
    },
    {
        id: 'plan_women_booty_tone',
        title: 'תוכנית חיטוב, עיצוב ישבן ורגליים (נשים - Glute & Upper Tone)',
        description: 'דגש חזק על חיטוב השרשרת האחורית (ישבן והמסטרינגס), הידוק שרירי הליבה וחיטוב זרועות.',
        resultsTitle: 'תוכנית עיצוב הישבן והחיטוב שלך מוכנה! ✨',
        resultsSubtitle: 'פרוטוקול עבודה ממוקד שנבנה במיוחד עבורך על ידי Coach Gino:',
        customMessage: 'היי {name}, התוכנית הזו תוכננה במיוחד כדי לתת דגש מקסימלי על שרירי הישבן, פלג הגוף התחתון והידוק הליבה, תוך שמירה על יציבה נכונה וביטחון מלא בביצוע התרגילים.',
        intensityRule: 'עבודה מבוקרת בשליטה מלאה (שמירה על 2 חזרות במלאי). אין צורך להגיע לכשל שריר קיצוני כדי לראות תוצאות מעולות.',
        matchingRules: {
            gender: 'female',
            goal: 'all',
            equipment: 'all',
            frequency: 'all',
            level: 'all',
            condition: 'none'
        },
        guidelines: 'דגש על טווח תנועה מלא, כיווץ שיא בישבן בכל חזרה ומנוחה מבוקרת של 90-120 שניות (ניתן גם יותר במידת הצורך) בין סטים.',
        days: [
            {
                dayName: 'אימון A - דגש ישבן, רגליים ורצפת אגן',
                exercises: [
                    { name: 'גשר ישבן מבוקר (Glute Bridge)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'SEdqd1n0cvg', image: '', notes: 'דחיפה דרך העקבים, כיווץ חזק של הישבן בשיא התנועה ללא הקשתת הגב.' },
                    { name: 'סקוואט גובלט בעמידה רחבה (Goblet Squat)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'MeIiIdhvXT4', image: '', notes: 'ברכיים נפתחות בקו הבהונות, גב זקוף וחזה פתוח.' },
                    { name: 'דדליפט רומני עם דאמבלים (RDL)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'JCXUYuzwNrM', image: '', notes: 'תנועת ציר ירך מבוקרת, דגש על מתיחת ההמסטרינגס.' }
                ]
            },
            {
                dayName: 'אימון B - פלג גוף עליון, גב יציב וליבה',
                exercises: [
                    { name: 'חתירה במשקולת יד בתמיכת ספה (DB Row)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'roCP6wCXPqo', image: '', notes: 'שמירה על גב ישר ומקביל לרצפה, משיכה למותן.' },
                    { name: 'לחיצת כתפיים מעל הראש במשקולות (Shoulder Press)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'qEwKCR5JCog', image: '', notes: 'עמידה יציבה, בטן מוחזקת ומרפקים מעט לפנים.' },
                    { name: 'בירד-דוג מבוקר (McGill Bird-Dog)', setsReps: '2-3 סטים x 6-12 חזרות לכל צד', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'wiFNA3sqjCA', image: '', notes: 'ייצוב אגן מלא ללא תנודות, חיזוק השרשרת האחורית והרבדים העמוקים.' }
                ]
            }
        ]
    },
    {
        id: 'plan_prenatal_safe',
        title: 'פרוטוקול אימון הריוני בטוח ומבוקר 🤰 (Prenatal Safe Plan)',
        description: 'תוכנית בטוחה ומאושרת להריון: ללא שכיבה שטוחה על הגב, ללא עומס תוך-בטני מוגזם, תמיכה באגן ורצפת אגן.',
        resultsTitle: 'פרוטוקול האימון ההריוני הבטוח שלך מוכן! 🤰',
        resultsSubtitle: 'תוכנית אימונים מותאמת ביומכנית שנבנתה על ידי Coach Gino לשמירה על בטיחותך ובטיחות העובר:',
        customMessage: 'שלום {name}, ברכות חמות על ההריון! בניתי עבורך פרוטוקול אימון מדויק שמטרתו לחזק את שרירי היציבה, לתמוך באגן ולהכין את הגוף בצורה הטובה ביותר, בבטיחות מלאה ובלי לחצים מיותרים.',
        intensityRule: 'עצימות מתונה בלבד RPE 6-7 (מבחן הדיבור - מאמץ המאפשר שיחה רגילה ללא התנשפות). איסור מוחלט על הגעה לכשל או עצירת נשימה (ולסלבה)!',
        matchingRules: {
            gender: 'female',
            goal: 'all',
            equipment: 'all',
            frequency: 'all',
            level: 'all',
            condition: 'pregnancy'
        },
        guidelines: 'נשימה סרעפתית רציפה - נשיפה במאמץ ושאיפה בירידה. מנוחה מבוקרת של 90-120 שניות (ניתן גם יותר במידת הצורך) ושתיית מים מרובה.',
        days: [
            {
                dayName: 'אימון A - חיזוק מותאם להריון (Prenatal Routine)',
                exercises: [
                    { name: 'סקוואט קופסה בעמידה רחבה מתונה (Box Squat)', setsReps: '2-3 סטים x 6-12 חזרות (RPE 6-7)', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'MeIiIdhvXT4', image: '', notes: 'עמידה רחבה מתונה, תמיכת אגן יציבה בירידה לספסל.' },
                    { name: 'לחיצת חזה בשיפוע חיובי עם דאמבלים (Incline DB Press)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: '8iPEnn-ltC8', image: '', notes: 'שיפוע 30-45 מעלות למניעת שכיבה שטוחה ולחץ על הווריד הנבוב.' },
                    { name: 'חתירה בכבלים או גומייה בישיבה זקופה (Seated Row)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'GZbfZ033f74', image: '', notes: 'פתיחת בית חזה ומניעת כפיפה קדימה עקב שינוי מרכז הכובד.' },
                    { name: 'גשר ישבן מבוקר על הרצפה (Glute Bridge)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'SEdqd1n0cvg', image: '', notes: 'חיזוק שרשרת אחורית ורצפת אגן, ביצוע ללא משקל חיצוני כבד.' }
                ]
            }
        ]
    },
    {
        id: 'plan_home_bodyweight',
        title: 'תוכנית חיטוב ביתית / משקל גוף ומשקולות קלות (Home & Calisthenics Routine)',
        description: 'תוכנית אימונים פונקציונלית לבית ללא צורך במכשירי כושר כבדים - דגש על שריפת שומן, עיצוב שרירי ליבה ויציבה.',
        resultsTitle: 'תוכנית האימון הביתית שלך מוכנה! 🏠',
        resultsSubtitle: 'מקסימום תוצאות עם ציוד ביתי ומשקל גוף, ביומכניקה מדויקת:',
        customMessage: 'היי {name}, אפשר להגיע לתוצאות פנומנליות ב-{goal} גם מהבית כשעובדים נכון ביומכנית. התוכנית הזו מנצלת את הציוד שיש לך כדי לייצר גירוי אפקטיבי ומדויק.',
        intensityRule: 'התמקדות בשליטה מושלמת בקצב התנועה (טמפו מבוקר של 3 שניות בירידה). אין להגיע לכשל שריר אלא לסיים כל סט בשליטה מלאה.',
        matchingRules: {
            gender: 'all',
            goal: 'all',
            equipment: 'bodyweight',
            frequency: 'all',
            level: 'all',
            condition: 'none'
        },
        guidelines: 'שמירה על עומס פרוגרסיבי, ביצוע טכני מדויק ומנוחות סדירות בין סטים.',
        days: [
            {
                dayName: 'אימון A - גוף מלא וליבה בבית',
                exercises: [
                    { name: 'סקוואט משקל גוף או גובלט ביתי (Goblet Squat)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'MeIiIdhvXT4', image: '', notes: 'ירידה מבוקרת, ברכיים נפתחות בקו הבהונות.' },
                    { name: 'שכיבות סמיכה מבוקרות (Push-ups)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'IODxDxX7oi4', image: '', notes: 'גוף בקו ישר, בטן אסופה ומרפקים ב-45 מעלות.' },
                    { name: 'חתירה במשקולת יד בתמיכת כיסא (One Arm DB Row)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'roCP6wCXPqo', image: '', notes: 'שמירה על גב ישר, משיכה מבוקרת לכיוון המותן.' },
                    { name: 'פלאנק סטטי מבוקר (Core Plank)', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: 'ASdvN_XEl_c', image: '', notes: 'אגן ניטרלי ונשימה סדירה ללא שקיעת הגב התחתון.' }
                ]
            }
        ]
    }
,
{
    "id": "plan_men_bw_fbw_beginner",
    "title": "פול באדי משקל גוף למתחילים (Full Body - גברים)",
    "description": "תוכנית כוח וחיטוב כנגד משקל גוף למתחילים: רגליים, גב, חזה, כתפיים, יד אחורית, יד קדמית ובטן.",
    "resultsTitle": "תוכנית הפול באדי הביתית שלך מוכנה! 💪",
    "resultsSubtitle": "תוכנית אימונים במשקל גוף שנבנתה עבורך צעד אחר צעד על ידי Coach Gino:",
    "customMessage": "היי {name}, ראיתי שאין לך חדר כושר ושאתה מתאמן עם משקל גוף. הכנתי לך תוכנית פול באדי פשוטה, חזקה ובגובה העיניים, שתוכל לעשות בכל מקום בלי להסתבך.",
    "intensityRule": "תעבוד רגוע ובשליטה. תסיים כל סט כשאתה מרגיש שאתה יכול לעשות עוד 1-2 חזרות. לא להגיע לקריסה.",
    "matchingRules": {
        "gender": "male",
        "goal": "all",
        "equipment": "bodyweight",
        "frequency": "2-3",
        "level": "beginner",
        "condition": "none"
    },
    "guidelines": "שמירה על גב ישר, נשימה רגועה ומנוחה של 90-120 שניות (ניתן גם יותר במידת הצורך) בין סטים.",
    "days": [
        {
            "dayName": "אימון פול באדי A",
            "exercises": [
                {
                    "name": "סקוואט כנגד משקל גוף עם כיסא לביטחון (Box Squat)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "MeIiIdhvXT4",
                    "image": "",
                    "notes": "תרדו לאט כאילו אתם מתיישבים על כיסא, תדחפו חזק דרך העקבים, וחזה תמיד פתוח קדימה."
                },
                {
                    "name": "חתירה כנגד משקוף דלת או מגבת (Doorframe Row)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "roCP6wCXPqo",
                    "image": "",
                    "notes": "תאחזו חזק במשקוף, תרדו קצת לאחור ותמשכו את הגוף פנימה. תחשבו על לסגור את השכמות בגב בסוף."
                },
                {
                    "name": "שכיבות סמיכה בשיפוע חיובי על שולחן או שידה (Incline Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "IODxDxX7oi4",
                    "image": "",
                    "notes": "גוף ישר כמו מקל, בטן מוחזקת. תרדו עד שהחזה כמעט נוגע בשולחן ותדחפו חזק."
                },
                {
                    "name": "פייק פוש-אפ על הברכיים לכתפיים (Knee Pike Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "qEwKCR5JCog",
                    "image": "",
                    "notes": "עמדת שש עם ישבן מורם. תרדו עם הראש קדימה בעדינות אל הרצפה ותדחפו למעלה מהכתפיים."
                },
                {
                    "name": "טבילות כנגד כיסא עם ברכיים כפופות (Chair Dips)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2z8JmcrW-As",
                    "image": "",
                    "notes": "ידיים על הכיסא מאחורי הגב. תרדו לאט עד 90 מעלות במרפק ותיישרו חזרה בכוח של היד האחורית."
                },
                {
                    "name": "כפיפת מרפקים כנגד שולחן או מגבת בעמידה (Towel / Table Bicep Curl)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ykJmrZ5v0Oo",
                    "image": "",
                    "notes": "תאחזו מתחת לשולחן או במגבת מתחת לברך, תמשכו ותחשבו רק על כיווץ היד הקדמית. לרדת לאט."
                },
                {
                    "name": "פלאנק סטטי על האמות (Core Plank)",
                    "setsReps": "2-3 סטים x 6-12 חזרות (או 30-45 שניות)",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ASdvN_XEl_c",
                    "image": "",
                    "notes": "בטן אסופה חזק כאילו מישהו עומד לתת לכם אגרוף. תנשמו רגיל ואל תתנו לגב התחתון לשקוע."
                }
            ]
        }
    ]
},
{
    "id": "plan_men_bw_fbw_active",
    "title": "פול באדי משקל גוף למתאמן פעיל (Full Body - גברים)",
    "description": "תוכנית היפרטרופיה וחיזוק כנגד משקל גוף: רגליים, גב, חזה, כתפיים, יד אחורית, יד קדמית ובטן.",
    "resultsTitle": "תוכנית פול באדי למתאמן הפעיל מוכנה! ⚡",
    "resultsSubtitle": "בניית שריר וכוח מתפרץ במשקל גוף ללא מכשירים:",
    "customMessage": "היי {name}, כמתאמן פעיל אתה כבר יודע להזיז את הגוף. התוכנית הזו תעמיס על השרירים בדיוק נכון לפי הסדר המנצח, כדי לתת גירוי מקסימלי בבית.",
    "intensityRule": "תקפידו על קצב איטי של 3 שניות בירידה בכל תרגיל. זה מה שבונה שריר אמיתי במשקל גוף.",
    "matchingRules": {
        "gender": "male",
        "goal": "all",
        "equipment": "bodyweight",
        "frequency": "2-3",
        "level": "active",
        "condition": "none"
    },
    "guidelines": "ירידה איטית ומבוקרת, עצירה של שנייה בתחתית ומנוחה של 90-120 שניות (ניתן גם יותר במידת הצורך) בין סטים.",
    "days": [
        {
            "dayName": "אימון פול באדי A",
            "exercises": [
                {
                    "name": "סקוואט חופשי במשקל גוף עם עצירה למטה (Tempo Air Squats)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "MeIiIdhvXT4",
                    "image": "",
                    "notes": "תרדו לאט ב-3 שניות, תעצרו שנייה למטה, ותתפוצצו למעלה דרך העקבים. גב ישר לגמרי."
                },
                {
                    "name": "חתירה הפוכה מתחת לשולחן יציב (Inverted Table Row)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "roCP6wCXPqo",
                    "image": "",
                    "notes": "תשכבו מתחת לשולחן, תאחזו בקצה ותמשכו את החזה למעלה. תחשבו על למעוך אגוז בין השכמות בגב."
                },
                {
                    "name": "שכיבות סמיכה קלאסיות מלאות על הרצפה (Standard Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "IODxDxX7oi4",
                    "image": "",
                    "notes": "מרפקים ב-45 מעלות אל הגוף, חזה יורד כמעט עד הרצפה, בטן אסופה בלי לתת לאגן ליפול."
                },
                {
                    "name": "שכיבות סמיכה פייק על הרצפה לכתפיים (Pike Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "qEwKCR5JCog",
                    "image": "",
                    "notes": "ישבן גבוה באוויר בצורת משולש. תרדו עם המצח טיפה קדימה ותרגישו את הכתפיים שורפות בדחיפה."
                },
                {
                    "name": "טבילות כנגד ספה ברגליים ישרות (Straight-Leg Bench Dips)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2z8JmcrW-As",
                    "image": "",
                    "notes": "רגליים ישרות קדימה. תרדו עד 90 מעלות במרפק ותיישרו חזק בכוח היד האחורית."
                },
                {
                    "name": "חתירה הפוכה באחיזה הפוכה ליד קדמית (Underhand Inverted Row)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ykJmrZ5v0Oo",
                    "image": "",
                    "notes": "כפות ידיים פונות אליכם מתחת לשולחן. משיכה ממוקדת באמצעות שריר הזרוע הקדמית."
                },
                {
                    "name": "דד-באג מבוקר על הרצפה (Dead Bug)",
                    "setsReps": "2-3 סטים x 6-12 חזרות לכל צד",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ASdvN_XEl_c",
                    "image": "",
                    "notes": "גב תחתון מודבק בכוח לרצפה בלי רווח. מורידים יד ורגל נגדיות לאט וחוזרים בשליטה."
                }
            ]
        }
    ]
},
{
    "id": "plan_men_bw_fbw_advanced",
    "title": "פול באדי קליסטניקס למתקדמים (Full Body - גברים)",
    "description": "פרוטוקול כוח מתקדם במשקל גוף: רגליים, גב, חזה, כתפיים, יד אחורית, יד קדמית ובטן.",
    "resultsTitle": "תוכנית קליסטניקס מתקדמת מוכנה! 🔥",
    "resultsSubtitle": "עומס גבוה, מנופים מאתגרים ושליטה אבסולוטית בגוף:",
    "customMessage": "היי {name}, ברמה מתקדמת במשקל גוף אנחנו משתמשים במנופים קשים, זוויות מאתגרות ועבודה חד-צדדית כדי לגרום לגוף להמשיך להתחזק ללא שום מכשיר.",
    "intensityRule": "עבודה איכותית ומדויקת. אם קשה לסיים את החזרות האחרונות, תשמרו על טכניקה נקייה ולא לזייף.",
    "matchingRules": {
        "gender": "male",
        "goal": "all",
        "equipment": "bodyweight",
        "frequency": "2-3",
        "level": "advanced",
        "condition": "none"
    },
    "guidelines": "שמירה על מתח שרירי רציף, טווח תנועה מלא ומנוחה של 90-120 שניות (ניתן גם יותר במידת הצורך) בין סטים.",
    "days": [
        {
            "dayName": "אימון פול באדי A",
            "exercises": [
                {
                    "name": "ספליט סקוואט בולגרי עם הגבהת רגל על כיסא (Bulgarian Split Squat)",
                    "setsReps": "2-3 סטים x 6-12 חזרות לכל רגל",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2C-uNgKwPLE",
                    "image": "",
                    "notes": "רגל אחת על כיסא מאחורה. תרדו עמוק על הרגל הקדמית לאט ותדחפו חזק דרך העקב."
                },
                {
                    "name": "עליות מתח מלאות או חתירה מוגבהת (Pull-ups / Elevated Rows)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "eGo4IYlbE5g",
                    "image": "",
                    "notes": "משיכה מלאה עד שהסנטר עובר את המוט או השולחן, וירידה איטית עד יישור מרפקים מלא."
                },
                {
                    "name": "שכיבות סמיכה בשיפוע שלילי עם רגליים על ספה (Decline Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "IODxDxX7oi4",
                    "image": "",
                    "notes": "רגליים על הספה, ידיים על הרצפה. המשקל עובר לחזה העליון. לרדת לאט ולדחוף בעוצמה."
                },
                {
                    "name": "פייק פוש-אפ ברגליים מוגבהות על ספה (Elevated Pike Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "qEwKCR5JCog",
                    "image": "",
                    "notes": "רגליים מורמות על הספה, ישבן גבוה. דחיפה ישירה וממוקדת של הכתפיים כלפי מעלה."
                },
                {
                    "name": "שכיבות סמיכה יהלום ליד אחורית (Diamond Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2z8JmcrW-As",
                    "image": "",
                    "notes": "כפות ידיים צמודות בצורת יהלום מתחת לחזה. דחיפה מלאה באמצעות היד האחורית."
                },
                {
                    "name": "עליות מתח באחיזה צפופה והפוכה (Chin-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "eGo4IYlbE5g",
                    "image": "",
                    "notes": "אחיזה הפוכה כפות ידיים אליכם. תמשכו ותחשבו על לקפל את הזרוע וללחוץ את הבייספס."
                },
                {
                    "name": "פלאנק חלול סטטי (Hollow Body Hold)",
                    "setsReps": "2-3 סטים x 6-12 חזרות (או 30-45 שניות)",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ASdvN_XEl_c",
                    "image": "",
                    "notes": "שכמות באוויר, רגליים ישרות קדימה, גב תחתון נעול חזק ברצפה. לנשום רגיל."
                }
            ]
        }
    ]
},
{
    "id": "plan_men_bw_ab_beginner",
    "title": "תוכנית AB משקל גוף למתחילים (Upper/Lower Split - גברים)",
    "description": "חלוקה קלאסית: יום A פלג גוף עליון (גב, חזה, כתפיים, יד אחורית, יד קדמית), יום B פלג גוף תחתון (רגליים ובטן).",
    "resultsTitle": "תוכנית ה-AB הביתית שלך מוכנה! 🚀",
    "resultsSubtitle": "חלוקת עליון/תחתון ממוקדת במשקל גוף מבית Coach Gino:",
    "customMessage": "היי {name}, כשמתאמנים 4+ ימים בשבוע, חלוקת AB מאפשרת לנו לתת עבודה חזקה על פלג גוף עליון ביום אחד ועל רגליים ובטן ביום למחרת, כך שכל חלק מתאושש כמו שצריך.",
    "intensityRule": "לשמור על ביצוע נקי. עדיף 8 חזרות יפות ומבוקרות מאשר למהר ולזייף.",
    "matchingRules": {
        "gender": "male",
        "goal": "all",
        "equipment": "bodyweight",
        "frequency": "4+",
        "level": "beginner",
        "condition": "none"
    },
    "guidelines": "קצב תנועה רגוע, עבודה מבוקרת ומנוחה של 90-120 שניות (ניתן גם יותר במידת הצורך) בין סטים.",
    "days": [
        {
            "dayName": "אימון A - פלג גוף עליון",
            "exercises": [
                {
                    "name": "חתירה כנגד משקוף דלת או שולחן (Doorframe Row)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "roCP6wCXPqo",
                    "image": "",
                    "notes": "אחיזה יציבה במשקוף, ירידה מבוקרת לאחור ומשיכה חזקה של החזה פנימה עם הגב."
                },
                {
                    "name": "שכיבות סמיכה בשיפוע חיובי על שולחן (Incline Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "IODxDxX7oi4",
                    "image": "",
                    "notes": "גוף ישר כמו מקל, ירידה איטית עד שהחזה כמעט נוגע ודחיפה חזקה למעלה."
                },
                {
                    "name": "פייק פוש-אפ על הברכיים לכתפיים (Knee Pike Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "qEwKCR5JCog",
                    "image": "",
                    "notes": "עמדת שש, ישבן מורם. ירידה קצרה עם הראש קדימה ודחיפה בכוח הכתפיים."
                },
                {
                    "name": "טבילות כנגד כיסא עם ברכיים כפופות (Chair Dips)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2z8JmcrW-As",
                    "image": "",
                    "notes": "ידיים מאחורי הגב על הכיסא. ירידה עד 90 מעלות ויישור מלא של היד האחורית."
                },
                {
                    "name": "כפיפת מרפקים כנגד משקוף או מגבת (Towel / Door Bicep Curl)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ykJmrZ5v0Oo",
                    "image": "",
                    "notes": "משיכה איטית של כפות הידיים אליכם, כיווץ חזק של הזרוע הקדמית וירידה איטית."
                }
            ]
        },
        {
            "dayName": "אימון B - פלג גוף תחתון וליבה",
            "exercises": [
                {
                    "name": "סקוואט כנגד משקל גוף עם כיסא (Chair Box Squat)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "MeIiIdhvXT4",
                    "image": "",
                    "notes": "לרדת לאט עד שנוגעים קלות בכיסא, לדחוף חזק מהעקבים ולשמור חזה פתוח."
                },
                {
                    "name": "גשר ישבן מבוקר על הרצפה (Floor Glute Bridge)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "SEdqd1n0cvg",
                    "image": "",
                    "notes": "שוכבים על הגב, דוחפים דרך העקבים ומכווצים חזק את הישבן למעלה לשנייה."
                },
                {
                    "name": "לאנג'ים סטטיים בהישענות על קיר (Wall-Assisted Static Lunges)",
                    "setsReps": "2-3 סטים x 6-12 חזרות לכל רגל",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2C-uNgKwPLE",
                    "image": "",
                    "notes": "צעד קדימה, ירידה עם הברך האחורית כמעט עד הרצפה ועלייה דרך הרגל הקדמית."
                },
                {
                    "name": "פלאנק סטטי על האמות (Core Plank)",
                    "setsReps": "2-3 סטים x 6-12 חזרות (או 30-45 שניות)",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ASdvN_XEl_c",
                    "image": "",
                    "notes": "בטן נעולה חזק, לנשום רגוע, גב ישר לגמרי בלי שקיעה."
                }
            ]
        }
    ]
},
{
    "id": "plan_men_bw_ab_active",
    "title": "תוכנית AB משקל גוף למתאמן פעיל (Upper/Lower Split - גברים)",
    "description": "חלוקת AB מוגברת: יום A עליון (גב, חזה, כתפיים, יד אחורית, יד קדמית), יום B תחתון (רגליים ובטן).",
    "resultsTitle": "תוכנית AB למתאמן הפעיל מוכנה! ⚡",
    "resultsSubtitle": "חלוקת עבודה אינטנסיבית במשקל גוף מבית Coach Gino:",
    "customMessage": "היי {name}, התוכנית הזו מאפשרת לך לבנות שריר ונפח שבועי איכותי מאימונים בבית, עם דגש על טמפו איטי ושליטה מלאה בכל תנועה.",
    "intensityRule": "שמירה על 2 חזרות במלאי, ירידה איטית של 3 שניות בכל חזרה.",
    "matchingRules": {
        "gender": "male",
        "goal": "all",
        "equipment": "bodyweight",
        "frequency": "4+",
        "level": "active",
        "condition": "none"
    },
    "guidelines": "ירידה איטית, עצירה של שנייה בתחתית ומנוחה של 90-120 שניות (ניתן גם יותר במידת הצורך) בין סטים.",
    "days": [
        {
            "dayName": "אימון A - פלג גוף עליון",
            "exercises": [
                {
                    "name": "חתירה הפוכה מתחת לשולחן יציב (Inverted Table Row)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "roCP6wCXPqo",
                    "image": "",
                    "notes": "גוף ישר כמו מקל, משיכת החזה עד השולחן וכיווץ חזק של השכמות בגב."
                },
                {
                    "name": "שכיבות סמיכה קלאסיות מלאות (Standard Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "IODxDxX7oi4",
                    "image": "",
                    "notes": "מרפקים קרובים ל-45 מעלות, חזה יורד כמעט עד הרצפה, דחיפה חזקה."
                },
                {
                    "name": "שכיבות סמיכה פייק על הרצפה לכתפיים (Pike Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "qEwKCR5JCog",
                    "image": "",
                    "notes": "ישבן גבוה בצורת משולש, ירידה קדימה עם הראש ודחיפה מהכתפיים."
                },
                {
                    "name": "טבילות כנגד ספה ברגליים ישרות (Straight-Leg Bench Dips)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2z8JmcrW-As",
                    "image": "",
                    "notes": "רגליים ישרות קדימה, ירידה עד 90 מעלות במרפק ודחיפה חזקה מהיד האחורית."
                },
                {
                    "name": "חתירה הפוכה באחיזה הפוכה ליד קדמית (Underhand Table Row)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ykJmrZ5v0Oo",
                    "image": "",
                    "notes": "אחיזה הפוכה בשולחן כפות ידיים אליכם, משיכה בכוח הזרוע הקדמית."
                }
            ]
        },
        {
            "dayName": "אימון B - פלג גוף תחתון וליבה",
            "exercises": [
                {
                    "name": "סקוואט חופשי במשקל גוף עם עצירה (Tempo Air Squat)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "MeIiIdhvXT4",
                    "image": "",
                    "notes": "ירידה איטית ב-3 שניות, עצירה של שנייה למטה ועלייה חזקה דרך העקבים."
                },
                {
                    "name": "ספליט סקוואט בולגרי עם כיסא (Bulgarian Split Squat)",
                    "setsReps": "2-3 סטים x 6-12 חזרות לכל רגל",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2C-uNgKwPLE",
                    "image": "",
                    "notes": "רגל אחורית על הכיסא, ירידה עמוקה על הרגל הקדמית ודחיפה מהעקב."
                },
                {
                    "name": "גשר ישבן מבוקר על רגל אחת (Single-Leg Glute Bridge)",
                    "setsReps": "2-3 סטים x 6-12 חזרות לכל רגל",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "SEdqd1n0cvg",
                    "image": "",
                    "notes": "רגל אחת באוויר, דחיפה בעקב של הרגל השנייה וכיווץ ישבן חזק למעלה."
                },
                {
                    "name": "דד-באג מבוקר לייצוב עמוד שדרה (Dead Bug)",
                    "setsReps": "2-3 סטים x 6-12 חזרות לכל צד",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ASdvN_XEl_c",
                    "image": "",
                    "notes": "גב תחתון נשאר דבוק לרצפה כל הזמן, הורדת יד ורגל נגדיות לאט ובשליטה."
                },
                {
                    "name": "פלאנק צידי לייצוב אלכסונים וירך (Side Plank)",
                    "setsReps": "2-3 סטים x 6-12 חזרות (או 30-45 שניות)",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ASdvN_XEl_c",
                    "image": "",
                    "notes": "גוף בקו ישר על הצד, אגן מורם באוויר ובטן אסופה חזק."
                }
            ]
        }
    ]
},
{
    "id": "plan_men_bw_ab_advanced",
    "title": "תוכנית AB קליסטניקס למתקדמים (Upper/Lower Split - גברים)",
    "description": "פרוטוקול עליון/תחתון מתקדם במשקל גוף: יום A עליון (גב, חזה, כתפיים, יד אחורית, יד קדמית), יום B תחתון (רגליים ובטן).",
    "resultsTitle": "תוכנית AB קליסטניקס למתקדמים מוכנה! 🔥",
    "resultsSubtitle": "עבודה אינטנסיבית בעומס עליון ותחתון ללא משקולות:",
    "customMessage": "היי {name}, ברמה מתקדמת במשקל גוף החלוקה הזו מאפשרת למצות כל טיפת כוח ושריר. המנופים מאתגרים, התרגילים חד-צדדיים, וההתקדמות מובטחת.",
    "intensityRule": "עבודה בעצימות מקסימלית בשליטה מלאה. אין להתנדנד או לזרוק את הגוף.",
    "matchingRules": {
        "gender": "male",
        "goal": "all",
        "equipment": "bodyweight",
        "frequency": "4+",
        "level": "advanced",
        "condition": "none"
    },
    "guidelines": "טווח תנועה מקסימלי, כיווץ שיא ומנוחה של 90-120 שניות (ניתן גם יותר במידת הצורך) בין סטים.",
    "days": [
        {
            "dayName": "אימון A - פלג גוף עליון",
            "exercises": [
                {
                    "name": "עליות מתח מלאות באחיזה רחבה (Wide Pull-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "eGo4IYlbE5g",
                    "image": "",
                    "notes": "משיכה מלאה עד שהסנטר עובר את המוט, ירידה איטית עד נעילה מבוקרת."
                },
                {
                    "name": "שכיבות סמיכה בשיפוע שלילי עם רגליים על ספה (Decline Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "IODxDxX7oi4",
                    "image": "",
                    "notes": "רגליים מוגבהות על ספה, חזה יורד כמעט עד הרצפה ודחיפה חזקה."
                },
                {
                    "name": "פייק פוש-אפ ברגליים מוגבהות על ספה (Elevated Pike Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "qEwKCR5JCog",
                    "image": "",
                    "notes": "רגליים על הספה, ישבן מורם למעלה, דחיפה ישירה וממוקדת של הכתפיים."
                },
                {
                    "name": "שכיבות סמיכה יהלום ליד אחורית (Diamond Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2z8JmcrW-As",
                    "image": "",
                    "notes": "כפות ידיים בצורת יהלום מתחת לחזה, דחיפה חזקה לסיום היד האחורית."
                },
                {
                    "name": "עליות מתח באחיזה צפופה והפוכה (Chin-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "eGo4IYlbE5g",
                    "image": "",
                    "notes": "אחיזה הפוכה כפות ידיים אליכם, משיכה בכוח הבייספס וירידה איטית."
                }
            ]
        },
        {
            "dayName": "אימון B - פלג גוף תחתון וליבה",
            "exercises": [
                {
                    "name": "ספליט סקוואט בולגרי עם קצב איטי ועצירה (Slow Bulgarian Split Squat)",
                    "setsReps": "2-3 סטים x 6-12 חזרות לכל רגל",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2C-uNgKwPLE",
                    "image": "",
                    "notes": "רגל על כיסא מאחורה, ירידה איטית של 3 שניות ועצירה קלה בתחתית לפני דחיפה."
                },
                {
                    "name": "ג'אמפ סקוואט נפיץ עם נחיתה רכה (Soft Landing Jump Squats)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "MeIiIdhvXT4",
                    "image": "",
                    "notes": "קפיצה נפיצה למעלה ונחיתה שקטה ורכה ישר לתוך הסקוואט הבא ללא זעזוע."
                },
                {
                    "name": "גשר ישבן מוגבה על רגל אחת (Elevated Single-Leg Hip Thrust)",
                    "setsReps": "2-3 סטים x 6-12 חזרות לכל רגל",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "SEdqd1n0cvg",
                    "image": "",
                    "notes": "גב עליון נשען על ספה, רגל אחת באוויר, דחיפה בעקב השנייה וכיווץ שיא בישבן."
                },
                {
                    "name": "פלאנק חלול סטטי (Hollow Body Hold)",
                    "setsReps": "2-3 סטים x 6-12 חזרות (או 30-45 שניות)",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ASdvN_XEl_c",
                    "image": "",
                    "notes": "גב תחתון נמחץ לרצפה, שכמות באוויר ורגליים ישרות. בטן אסופה ברזל."
                },
                {
                    "name": "הרמות רגליים בשכיבה מבוקרות (Lying Leg Raises)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ASdvN_XEl_c",
                    "image": "",
                    "notes": "ידיים לצד הגוף, רגליים עולות ויורדות לאט בלי שהגב התחתון יתרומם מהרצפה."
                }
            ]
        }
    ]
},
{
    "id": "plan_women_bw_fbw_beginner",
    "title": "פול באדי משקל גוף למתחילות (Full Body - נשים)",
    "description": "תוכנית חיטוב ועיצוב גוף מלא כנגד משקל גוף: רגליים, גב, חזה, כתפיים, יד אחורית, יד קדמית ובטן.",
    "resultsTitle": "תוכנית הפול באדי שלך מוכנה! ✨",
    "resultsSubtitle": "תוכנית אימונים ביתית במשקל גוף שנבנתה עבורך על ידי Coach Gino:",
    "customMessage": "היי {name}, שמח שבחרת להתחיל! הכנתי עבורך תוכנית אימונים כיפית וקלילה שתוכלי לעשות בבית בנוחות מלאה, שתחטב את הגוף ותעניק לך אנרגיה שיא.",
    "intensityRule": "תעבדי בקצב שנעים לך. תסיימי כל סט כשאת מרגישה שאת יכולה עוד חזרה או שתיים. בלי לחץ.",
    "matchingRules": {
        "gender": "female",
        "goal": "all",
        "equipment": "bodyweight",
        "frequency": "2-3",
        "level": "beginner",
        "condition": "none"
    },
    "guidelines": "שמירה על גב זקוף, נשימה סדירה ומנוחה של 90-120 שניות (ניתן גם יותר במידת הצורך) בין סטים.",
    "days": [
        {
            "dayName": "אימון פול באדי A",
            "exercises": [
                {
                    "name": "סקוואט כנגד משקל גוף עם כיסא לביטחון (Chair Box Squat)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "MeIiIdhvXT4",
                    "image": "",
                    "notes": "תרדי לאט עד נגיעה קלה בכיסא, תדחפי חזק דרך העקבים, חזה מורם וגב ישר."
                },
                {
                    "name": "חתירה בעמידה כנגד משקוף דלת או מגבת (Doorframe Row)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "roCP6wCXPqo",
                    "image": "",
                    "notes": "תאחזי חזק במשקוף, תרדי קצת לאחור ותמשכי את הגוף פנימה. תחשבי על לסגור את השכמות בגב."
                },
                {
                    "name": "שכיבות סמיכה בשיפוע חיובי על קיר או שולחן (Wall / Table Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "IODxDxX7oi4",
                    "image": "",
                    "notes": "עמידה מול שולחן או קיר, גוף ישר כמו קרש. לרדת לאט ולדחוף חזק מהחזה והזרועות."
                },
                {
                    "name": "הרמות זרועות בצורת Y ו-T בשכיבה על הבטן (Prone Y-T Raises)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "qEwKCR5JCog",
                    "image": "",
                    "notes": "בשכיבה על הבטן, תרימי את הזרועות באלכסון ולצדדים בעדינות. מחזק את הכתפיים והיציבה."
                },
                {
                    "name": "טבילות כנגד ספה עם ברכיים כפופות (Chair / Sofa Dips)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2z8JmcrW-As",
                    "image": "",
                    "notes": "ידיים על הספה מאחורייך, ירידה מתונה עד כיפוף המרפקים ודחיפה ליישור היד האחורית."
                },
                {
                    "name": "כפיפת מרפקים כנגד שולחן או מגבת בעמידה (Towel / Table Bicep Curl)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ykJmrZ5v0Oo",
                    "image": "",
                    "notes": "תמשכי את הידיים לכיוונך בכוח היד הקדמית, תסחטי שנייה למעלה ותרדי לאט."
                },
                {
                    "name": "פלאנק סטטי על האמות (Core Plank)",
                    "setsReps": "2-3 סטים x 6-12 חזרות (או 30-45 שניות)",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ASdvN_XEl_c",
                    "image": "",
                    "notes": "בטן אסופה פנימה, נשימה רגועה, אגן ניטרלי בלי שהגב ישקע למטה."
                }
            ]
        }
    ]
},
{
    "id": "plan_women_bw_fbw_active",
    "title": "פול באדי משקל גוף למתאמנת פעילה (Full Body - נשים)",
    "description": "תוכנית חיטוב ועיצוב גוף מלאה כנגד משקל גוף: רגליים, גב, חזה, כתפיים, יד אחורית, יד קדמית ובטן.",
    "resultsTitle": "תוכנית פול באדי למתאמנת הפעילה מוכנה! 🌸",
    "resultsSubtitle": "דגש חזק על עיצוב ישבן, חיטוב זרועות והידוק הליבה:",
    "customMessage": "היי {name}, כמתאמנת עם ניסיון, האימון הזה מתוכנן לתת לך תוצאות מעולות בבית בלי משקולות כבדות, באמצעות תנועות מדויקות שעובדות על כל שריר ושריר.",
    "intensityRule": "תקפידי על קצב ירידה איטי של 3 שניות בכל חזרה, וכיווץ חזק בסוף כל תנועה.",
    "matchingRules": {
        "gender": "female",
        "goal": "all",
        "equipment": "bodyweight",
        "frequency": "2-3",
        "level": "active",
        "condition": "none"
    },
    "guidelines": "תנועות מלאות ומבוקרות, מנוחה של 90-120 שניות (ניתן גם יותר במידת הצורך) בין סטים.",
    "days": [
        {
            "dayName": "אימון פול באדי A",
            "exercises": [
                {
                    "name": "סקוואט סומו רחב במשקל גוף (Sumo Air Squats)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "MeIiIdhvXT4",
                    "image": "",
                    "notes": "עמידה רחבה, אצבעות פונות החוצה. תרדי עמוק ותרגישי את הירך הפנימית והישבן עובדים חזק."
                },
                {
                    "name": "חתירה הפוכה מתחת לשולחן יציב (Inverted Table Row)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "roCP6wCXPqo",
                    "image": "",
                    "notes": "אחיזה יציבה בשולחן, משיכה של החזה למעלה תוך שמירה על גוף אסוף וישר."
                },
                {
                    "name": "שכיבות סמיכה על הברכיים על מזרן (Knee Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "IODxDxX7oi4",
                    "image": "",
                    "notes": "ברכיים על המזרן, גוף בקו ישר מהברכיים עד הראש. ירידה איטית ודחיפה מהחזה."
                },
                {
                    "name": "פייק פוש-אפ מבוקר על הרצפה (Pike Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "qEwKCR5JCog",
                    "image": "",
                    "notes": "ישבן למעלה בצורת משולש, ירידה עם המצח בעדינות קדימה ודחיפה מהכתפיים."
                },
                {
                    "name": "טבילות כנגד כיסא ברגליים ישרות קדימה (Straight-Leg Bench Dips)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2z8JmcrW-As",
                    "image": "",
                    "notes": "ירידה עד 90 מעלות במרפקים ודחיפה חזקה לסיום הידוק היד האחורית."
                },
                {
                    "name": "חתירה הפוכה באחיזה הפוכה כנגד שולחן (Underhand Inverted Row)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ykJmrZ5v0Oo",
                    "image": "",
                    "notes": "כפות ידיים פונות אליך, משיכה ממוקדת באמצעות שריר הזרוע הקדמית."
                },
                {
                    "name": "דד-באג מבוקר על מזרן (Dead Bug)",
                    "setsReps": "2-3 סטים x 6-12 חזרות לכל צד",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ASdvN_XEl_c",
                    "image": "",
                    "notes": "גב תחתון נשאר מוצמד לרצפה, הורדת יד ורגל נגדיות לאט ובשליטה מלאה."
                }
            ]
        }
    ]
},
{
    "id": "plan_women_bw_fbw_advanced",
    "title": "פול באדי משקל גוף מתקדמת (Full Body - נשים)",
    "description": "אימון כוח וחיטוב בעצימות גבוהה במשקל גוף: רגליים, גב, חזה, כתפיים, יד אחורית, יד קדמית ובטן.",
    "resultsTitle": "תוכנית פול באדי מתקדמת מוכנה! 💎",
    "resultsSubtitle": "אימון אינטנסיבי לשריפת שומן, חיזוק שריר וביצועים גבוהים:",
    "customMessage": "היי {name}, ברמה מתקדמת אנחנו משתמשים בתרגילים חד-צדדיים ובטווחי תנועה מאתגרים, שמייצרים אפקט חיטוב עוצמתי ללא צורך בשום משקולת.",
    "intensityRule": "עבודה בעצימות גבוהה, שמירה על דיוק וטכניקה בכל חזרה.",
    "matchingRules": {
        "gender": "female",
        "goal": "all",
        "equipment": "bodyweight",
        "frequency": "2-3",
        "level": "advanced",
        "condition": "none"
    },
    "guidelines": "שמירה על גוף יציב, כיווץ שיא בכל תרגיל ומנוחה של 90-120 שניות (ניתן גם יותר במידת הצורך) בין סטים.",
    "days": [
        {
            "dayName": "אימון פול באדי A",
            "exercises": [
                {
                    "name": "ספליט סקוואט בולגרי בהגבהת רגל על ספה (Bulgarian Split Squat)",
                    "setsReps": "2-3 סטים x 6-12 חזרות לכל רגל",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2C-uNgKwPLE",
                    "image": "",
                    "notes": "רגל על ספה מאחורה, ירידה איטית של 3 שניות על הרגל הקדמית ודחיפה חזקה מהעקב לתוך הישבן."
                },
                {
                    "name": "עליות מתח עם גומייה/חופשי או חתירה מוגבהת (Inverted Rows / Pull-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "eGo4IYlbE5g",
                    "image": "",
                    "notes": "משיכה מלאה עד שהחזה מגיע לקו האחיזה, הורדה מבוקרת ואיטית."
                },
                {
                    "name": "שכיבות סמיכה קלאסיות מלאות על הרצפה (Standard Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "IODxDxX7oi4",
                    "image": "",
                    "notes": "גוף ישר לגמרי, ירידה כמעט עד נגיעה ברצפה ודחיפה חזקה."
                },
                {
                    "name": "פייק פוש-אפ בהגבהת רגליים על ספה (Elevated Pike Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "qEwKCR5JCog",
                    "image": "",
                    "notes": "רגליים על הספה, ישבן מורם למעלה. ירידה קצרה ומבוקרת של הראש ודחיפה חזקה מהכתפיים."
                },
                {
                    "name": "שכיבות סמיכה יהלום על הברכיים או מלאות (Diamond Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2z8JmcrW-As",
                    "image": "",
                    "notes": "ידיים קרובות מתחת לחזה בצורת משולש, דחיפה ממוקדת של היד האחורית."
                },
                {
                    "name": "חתירה הפוכה צמודה באחיזה הפוכה לשולחן (Underhand Inverted Row)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ykJmrZ5v0Oo",
                    "image": "",
                    "notes": "אחיזה הפוכה צמודה, משיכה בכוח הבייספס ועצירה קלה בסוף התנועה."
                },
                {
                    "name": "פלאנק חלול או טיפוס הרים איטי ומבוקר (Slow Mountain Climbers / Hollow Hold)",
                    "setsReps": "2-3 סטים x 6-12 חזרות (או 30-45 שניות)",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ASdvN_XEl_c",
                    "image": "",
                    "notes": "תנועות איטיות מאוד, בטן נעולה, ברך מגיעה לחזה בשליטה מלאה ללא תנודות בגב."
                }
            ]
        }
    ]
},
{
    "id": "plan_women_bw_ab_beginner",
    "title": "תוכנית AB משקל גוף למתחילות (Upper/Lower Split - נשים)",
    "description": "חלוקה ייעודית: יום A עליון (גב, חזה, כתפיים, יד אחורית, יד קדמית), יום B תחתון (רגליים ובטן).",
    "resultsTitle": "תוכנית ה-AB שלך מוכנה! 🌸",
    "resultsSubtitle": "חלוקת ימים מותאמת להתמדה והתאוששות מיטבית מבית Coach Gino:",
    "customMessage": "היי {name}, חלוקת AB של 4+ ימים בשבוע מאפשרת לך לעבוד יום אחד על פלג גוף עליון וביום הבא על הרגליים והבטן, כך שכל אימון קצר, ממוקד ולא מעמיס מדי.",
    "intensityRule": "להתרכז בדיוק התנועה ובהרגשת השריר. 2 חזרות במלאי בסוף כל סט.",
    "matchingRules": {
        "gender": "female",
        "goal": "all",
        "equipment": "bodyweight",
        "frequency": "4+",
        "level": "beginner",
        "condition": "none"
    },
    "guidelines": "קצב נינוח, הקפדה על יציבה נכונה ומנוחה של 90-120 שניות (ניתן גם יותר במידת הצורך) בין סטים.",
    "days": [
        {
            "dayName": "אימון A - פלג גוף עליון ויציבה",
            "exercises": [
                {
                    "name": "חתירה בעמידה כנגד משקוף דלת או שולחן (Doorframe Row)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "roCP6wCXPqo",
                    "image": "",
                    "notes": "אחיזה יציבה במשקוף, ירידה קלה לאחור ומשיכה פנימה תוך קירוב שכמות."
                },
                {
                    "name": "שכיבות סמיכה בשיפוע חיובי על שולחן (Incline Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "IODxDxX7oi4",
                    "image": "",
                    "notes": "גוף ישר כמו מקל, ירידה איטית עד שהחזה כמעט נוגע ודחיפה מהידיים והחזה."
                },
                {
                    "name": "הרמות זרועות בצורת Y-T על הבטן (Prone Y-T Raises)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "qEwKCR5JCog",
                    "image": "",
                    "notes": "הרמת זרועות באלכסון בשכיבה על הבטן, מחזק כתפיים ומשפר את היציבה."
                },
                {
                    "name": "טבילות כנגד ספה עם ברכיים כפופות (Chair Dips)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2z8JmcrW-As",
                    "image": "",
                    "notes": "תרדי לאט עד כיפוף קל של המרפקים ותיישרי בעזרת היד האחורית."
                },
                {
                    "name": "כפיפת מרפקים כנגד שולחן או מגבת (Doorframe Bicep Curl)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ykJmrZ5v0Oo",
                    "image": "",
                    "notes": "משיכה ממוקדת של הידיים אליך בכוח היד הקדמית, ירידה איטית ומבוקרת."
                }
            ]
        },
        {
            "dayName": "אימון B - פלג גוף תחתון, ישבן וליבה",
            "exercises": [
                {
                    "name": "סקוואט כנגד משקל גוף עם כיסא (Chair Box Squat)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "MeIiIdhvXT4",
                    "image": "",
                    "notes": "לרדת לאט עד שנוגעים קלות בכיסא, לדחוף חזק מהעקבים ולשמור חזה פתוח."
                },
                {
                    "name": "גשר ישבן על הרצפה עם עצירה של 2 שניות (Glute Bridge)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "SEdqd1n0cvg",
                    "image": "",
                    "notes": "שכיבה על הגב, דחיפה דרך העקבים וכיווץ חזק של הישבן למעלה לשתי שניות."
                },
                {
                    "name": "הרחקת ירך בשכיבה על הצד (Side Lying Leg Raises / Clamshells)",
                    "setsReps": "2-3 סטים x 6-12 חזרות לכל צד",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2C-uNgKwPLE",
                    "image": "",
                    "notes": "שוכבת על הצד, הרמה איטית של הרגל העליונה תוך הרגשת הישבן בצד."
                },
                {
                    "name": "פלאנק סטטי על האמות (Core Plank)",
                    "setsReps": "2-3 סטים x 6-12 חזרות (או 30-45 שניות)",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ASdvN_XEl_c",
                    "image": "",
                    "notes": "בטן אסופה, נשימה רגועה, שמירה על אגן יציב בלי לתת לגב לשקוע."
                }
            ]
        }
    ]
},
{
    "id": "plan_women_bw_ab_active",
    "title": "תוכנית AB משקל גוף למתאמנת פעילה (Upper/Lower Split - נשים)",
    "description": "חלוקת AB מוגברת: יום A עליון (גב, חזה, כתפיים, יד אחורית, יד קדמית), יום B תחתון (רגליים ובטן).",
    "resultsTitle": "תוכנית AB למתאמנת הפעילה מוכנה! 🌺",
    "resultsSubtitle": "שילוב אידיאלי בין חיטוב פלג גוף עליון לעיצוב פלג גוף תחתון:",
    "customMessage": "היי {name}, חלוקת AB מאפשרת לנו להעלות את רמת האימונים בצורה נוחה מהבית, עם דגש על שריפת שומן, הידוק שרירי הישבן ועיצוב הידיים.",
    "intensityRule": "קצב איטי של 3 שניות בירידה וכיווץ יציב של שנייה בסוף כל תנועה.",
    "matchingRules": {
        "gender": "female",
        "goal": "all",
        "equipment": "bodyweight",
        "frequency": "4+",
        "level": "active",
        "condition": "none"
    },
    "guidelines": "תנועות מלאות, יציבה אסופה ומנוחה של 90-120 שניות (ניתן גם יותר במידת הצורך) בין סטים.",
    "days": [
        {
            "dayName": "אימון A - פלג גוף עליון",
            "exercises": [
                {
                    "name": "חתירה הפוכה מתחת לשולחן יציב (Inverted Table Row)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "roCP6wCXPqo",
                    "image": "",
                    "notes": "גוף ישר כמו מקל, משיכת החזה עד השולחן וכיווץ חזק של השכמות בגב."
                },
                {
                    "name": "שכיבות סמיכה על הברכיים (Knee Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "IODxDxX7oi4",
                    "image": "",
                    "notes": "גוף ישר מהברכיים לקודקוד, ירידה איטית ודחיפה מבוקרת מהחזה."
                },
                {
                    "name": "שכיבות סמיכה פייק על הרצפה (Pike Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "qEwKCR5JCog",
                    "image": "",
                    "notes": "ישבן מורם לצורת משולש, ירידה עדינה עם המצח קדימה ודחיפה מהכתפיים."
                },
                {
                    "name": "טבילות כנגד כיסא ברגליים ישרות (Straight-Leg Bench Dips)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2z8JmcrW-As",
                    "image": "",
                    "notes": "רגליים ישרות קדימה, ירידה עד 90 מעלות במרפק ודחיפה חזקה מהיד האחורית."
                },
                {
                    "name": "חתירה הפוכה באחיזה הפוכה כנגד שולחן (Underhand Table Row)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ykJmrZ5v0Oo",
                    "image": "",
                    "notes": "אחיזה הפוכה בשולחן כפות ידיים אליך, משיכה בכוח הזרוע הקדמית."
                }
            ]
        },
        {
            "dayName": "אימון B - פלג גוף תחתון, עיצוב ישבן וליבה",
            "exercises": [
                {
                    "name": "סקוואט סומו רחב במשקל גוף (Sumo Air Squat)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "MeIiIdhvXT4",
                    "image": "",
                    "notes": "עמידה רחבה, אצבעות פונות החוצה, ירידה עמוקה ודחיפה מהעקבים."
                },
                {
                    "name": "ספליט סקוואט בולגרי עם כיסא (Bulgarian Split Squat)",
                    "setsReps": "2-3 סטים x 6-12 חזרות לכל רגל",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2C-uNgKwPLE",
                    "image": "",
                    "notes": "רגל אחורית על הכיסא, ירידה עמוקה על הרגל הקדמית ודחיפה דרך העקב אל הישבן."
                },
                {
                    "name": "גשר ישבן על רגל אחת (Single-Leg Glute Bridge)",
                    "setsReps": "2-3 סטים x 6-12 חזרות לכל רגל",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "SEdqd1n0cvg",
                    "image": "",
                    "notes": "רגל אחת מורמת, דחיפה בעקב של הרגל השנייה וכיווץ ישבן חזק למעלה."
                },
                {
                    "name": "דד-באג מבוקר לייצוב עמוד שדרה (Dead Bug)",
                    "setsReps": "2-3 סטים x 6-12 חזרות לכל צד",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ASdvN_XEl_c",
                    "image": "",
                    "notes": "גב תחתון נשאר דבוק לרצפה כל הזמן, הורדת יד ורגל נגדיות לאט ובשליטה."
                },
                {
                    "name": "פלאנק צדי לייצוב מותניים ואלכסונים (Side Plank)",
                    "setsReps": "2-3 סטים x 6-12 חזרות (או 30-45 שניות)",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ASdvN_XEl_c",
                    "image": "",
                    "notes": "גוף בקו ישר על הצד, אגן מורם באוויר ובטן אסופה חזק."
                }
            ]
        }
    ]
},
{
    "id": "plan_women_bw_ab_advanced",
    "title": "תוכנית AB משקל גוף מתקדמת (Upper/Lower Split - נשים)",
    "description": "פרוטוקול עליון/תחתון מתקדם במשקל גוף: יום A עליון (גב, חזה, כתפיים, יד אחורית, יד קדמית), יום B תחתון (רגליים ובטן).",
    "resultsTitle": "תוכנית AB מתקדמת מוכנה! 🌟",
    "resultsSubtitle": "עומס מאתגר, שריפת שומן ועיצוב שריר ברמה הגבוהה ביותר:",
    "customMessage": "היי {name}, ברמה מתקדמת במשקל גוף החלוקה הזו מעניקה לך אימונים ממוקדים שמעצבים את הגוף, מחזקים את השרירים ומביאים תוצאות ברמה של חדר כושר – ישירות מהבית.",
    "intensityRule": "עבודה בעצימות מקסימלית בשליטה מלאה. הקפדה על טכניקה מדויקת.",
    "matchingRules": {
        "gender": "female",
        "goal": "all",
        "equipment": "bodyweight",
        "frequency": "4+",
        "level": "advanced",
        "condition": "none"
    },
    "guidelines": "טווח תנועה מקסימלי, כיווץ שיא ומנוחה של 90-120 שניות (ניתן גם יותר במידת הצורך) בין סטים.",
    "days": [
        {
            "dayName": "אימון A - פלג גוף עליון",
            "exercises": [
                {
                    "name": "חתירה הפוכה ברגליים מורמות או עליות מתח (Elevated Inverted Row / Pull-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "eGo4IYlbE5g",
                    "image": "",
                    "notes": "משיכה מלאה עד שהחזה מגיע לקו האחיזה, ירידה איטית ומבוקרת."
                },
                {
                    "name": "שכיבות סמיכה קלאסיות מלאות על הרצפה (Standard Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "IODxDxX7oi4",
                    "image": "",
                    "notes": "גוף ישר לגמרי, ירידה כמעט עד נגיעה ברצפה ודחיפה חזקה."
                },
                {
                    "name": "פייק פוש-אפ בהגבהת רגליים על ספה (Elevated Pike Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "qEwKCR5JCog",
                    "image": "",
                    "notes": "רגליים על הספה, ישבן מורם למעלה, דחיפה ישירה וממוקדת של הכתפיים."
                },
                {
                    "name": "שכיבות סמיכה יהלום (Diamond Push-ups)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2z8JmcrW-As",
                    "image": "",
                    "notes": "ידיים קרובות מתחת לחזה בצורת משולש, דחיפה חזקה לסיום היד האחורית."
                },
                {
                    "name": "עליות מתח באחיזה הפוכה או חתירה ממוקדת (Chin-ups / Underhand Row)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ykJmrZ5v0Oo",
                    "image": "",
                    "notes": "אחיזה הפוכה כפות ידיים אליך, משיכה בכוח הבייספס ועצירה קלה בסוף."
                }
            ]
        },
        {
            "dayName": "אימון B - פלג גוף תחתון, ישבן וליבה",
            "exercises": [
                {
                    "name": "ספליט סקוואט בולגרי בקצב איטי ועצירה בתחתית (Slow Bulgarian Split Squat)",
                    "setsReps": "2-3 סטים x 6-12 חזרות לכל רגל",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "2C-uNgKwPLE",
                    "image": "",
                    "notes": "רגל על כיסא מאחורייך, ירידה איטית של 3 שניות ועצירה קלה בתחתית לפני דחיפה."
                },
                {
                    "name": "ג'אמפ סקוואט נפיץ עם נחיתה רכה (Soft Landing Jump Squats)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "MeIiIdhvXT4",
                    "image": "",
                    "notes": "קפיצה נפיצה למעלה ונחיתה שקטה ורכה ישר לתוך הסקוואט הבא ללא זעזוע."
                },
                {
                    "name": "גשר ישבן מוגבה על רגל אחת (Elevated Single-Leg Hip Thrust)",
                    "setsReps": "2-3 סטים x 6-12 חזרות לכל רגל",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "SEdqd1n0cvg",
                    "image": "",
                    "notes": "גב עליון נשען על ספה, רגל אחת באוויר, דחיפה בעקב השנייה וכיווץ שיא בישבן."
                },
                {
                    "name": "פלאנק חלול סטטי (Hollow Body Hold)",
                    "setsReps": "2-3 סטים x 6-12 חזרות (או 30-45 שניות)",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ASdvN_XEl_c",
                    "image": "",
                    "notes": "גב תחתון נמחץ לרצפה, שכמות באוויר ורגליים ישרות. בטן אסופה ברזל."
                },
                {
                    "name": "הרמות ברכיים או רגליים בשכיבה על מזרן (Lying Leg / Knee Raises)",
                    "setsReps": "2-3 סטים x 6-12 חזרות",
                    "rest": "90-120 שניות (ניתן יותר במידת הצורך)",
                    "video": "ASdvN_XEl_c",
                    "image": "",
                    "notes": "ידיים לצד הגוף, רגליים עולות ויורדות לאט בלי שהגב התחתון יתרומם מהרצפה."
                }
            ]
        }
    ]
}
];

function getWorkoutPlans() {
    try {
        const vKey = 'gino_plans_v10_two_equipment';
        const isUpgraded = localStorage.getItem(vKey);
        const saved = localStorage.getItem('gino_workout_plans');
        
        const REST_STANDARD = '90-120 שניות (ניתן גם יותר במידת הצורך)';
        const REPS_STANDARD = '2-3 סטים x 6-12 חזרות';

        const sanitizePlanText = (plan) => {
            if (!plan) return plan;
            if (plan.name) plan.name = cleanHebrewTextForPdf(plan.name);
            if (plan.description) plan.description = cleanHebrewTextForPdf(plan.description);
            if (Array.isArray(plan.days)) {
                plan.days.forEach(day => {
                    if (day.dayName) day.dayName = cleanHebrewTextForPdf(day.dayName);
                    if (Array.isArray(day.exercises)) {
                        day.exercises.forEach(ex => {
                            if (ex.name) ex.name = cleanHebrewTextForPdf(ex.name);
                            if (ex.notes) ex.notes = cleanHebrewTextForPdf(ex.notes);
                            if (ex.setsReps) ex.setsReps = cleanHebrewTextForPdf(ex.setsReps);
                            if (ex.rest) ex.rest = cleanHebrewTextForPdf(ex.rest);
                        });
                    }
                });
            }
            return plan;
        };

        const upgradePlanToStandard = (plan) => {
            if (!plan) return plan;
            if (plan.guidelines) {
                plan.guidelines = plan.guidelines
                    .replace(/מנוחה של [^.,]+/g, 'מנוחה מבוקרת של ' + REST_STANDARD)
                    .replace(/מנוחה מבוקרת של [^.,]+/g, 'מנוחה מבוקרת של ' + REST_STANDARD);
            }
            if (Array.isArray(plan.days)) {
                plan.days.forEach(day => {
                    if (Array.isArray(day.exercises)) {
                        day.exercises.forEach(ex => {
                            ex.rest = REST_STANDARD;
                            if (!ex.setsReps || !ex.setsReps.includes('2-3 סטים') || !ex.setsReps.includes('6-12')) {
                                if (ex.setsReps && ex.setsReps.includes('לכל צד')) {
                                    ex.setsReps = '2-3 סטים x 6-12 חזרות לכל צד';
                                } else if (ex.setsReps && ex.setsReps.includes('לכל רגל')) {
                                    ex.setsReps = '2-3 סטים x 6-12 חזרות לכל רגל';
                                } else if (ex.setsReps && (ex.setsReps.includes('שנ') || ex.setsReps.includes('דק'))) {
                                    ex.setsReps = '2-3 סטים x 6-12 חזרות (או 45-60 שניות)';
                                } else if (ex.setsReps && ex.setsReps.includes('נשימות')) {
                                    ex.setsReps = '2-3 סטים x 6-12 נשימות מבוקרות';
                                } else if (ex.setsReps && ex.setsReps.includes('RPE')) {
                                    ex.setsReps = '2-3 סטים x 6-12 חזרות (RPE 6-7)';
                                } else {
                                    ex.setsReps = REPS_STANDARD;
                                }
                            }
                        });
                    }
                });
            }
            return sanitizePlanText(plan);
        };

        if (saved && isUpgraded) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                parsed.forEach(p => {
                    p.matchingRules = normalizeMatchingRules(p.matchingRules);
                    sanitizePlanText(p);
                });
                return parsed;
            }
        }
        
        // Upgrade existing user plans & default starter plans with the new rest & rep standards and sanitized Hebrew
        let plansToSave = DEFAULT_WORKOUT_PLANS.map(p => upgradePlanToStandard(JSON.parse(JSON.stringify(p))));
        if (saved) {
            try {
                const existing = JSON.parse(saved);
                if (Array.isArray(existing) && existing.length > 0) {
                    const existingIds = new Set(existing.map(ep => ep.id));
                    plansToSave = existing.map(ep => {
                        const def = DEFAULT_WORKOUT_PLANS.find(dp => dp.id === ep.id);
                        if (def) {
                            ep.resultsTitle = ep.resultsTitle || def.resultsTitle;
                            ep.resultsSubtitle = ep.resultsSubtitle || def.resultsSubtitle;
                            ep.customMessage = ep.customMessage || def.customMessage;
                            ep.intensityRule = ep.intensityRule !== undefined ? ep.intensityRule : def.intensityRule;
                        }
                        return upgradePlanToStandard(ep);
                    });
                    DEFAULT_WORKOUT_PLANS.forEach(dp => {
                        if (!existingIds.has(dp.id)) {
                            plansToSave.push(upgradePlanToStandard(JSON.parse(JSON.stringify(dp))));
                        }
                    });
                }
            } catch (e) {}
        }
        
        localStorage.setItem('gino_workout_plans', JSON.stringify(plansToSave));
        localStorage.setItem(vKey, 'true');
        return plansToSave;
    } catch (e) {
        return DEFAULT_WORKOUT_PLANS;
    }
}

function saveWorkoutPlans(plans) {
    localStorage.setItem('gino_workout_plans', JSON.stringify(plans));
}

function resetWorkoutPlansToDefaults() {
    if (confirm("האם לאפס את תוכניות האימון לתבניות ברירת המחדל של המאמן?")) {
        localStorage.setItem('gino_workout_plans', JSON.stringify(DEFAULT_WORKOUT_PLANS));
        renderAdminPlans();
        alert("תוכניות האימון אופסו בהצלחה לתבניות ברירת המחדל!");
    }
}

function exportWorkoutPlansJSON() {
    const plans = getWorkoutPlans();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(plans, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `Coach_Gino_Plans_Backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    document.body.removeChild(dlAnchor);
}

function triggerImportWorkoutPlans() {
    const fileInput = document.getElementById('input-import-plans-json');
    if (fileInput) fileInput.click();
}

function handleImportWorkoutPlansFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            if (Array.isArray(imported) && imported.length > 0) {
                if (confirm(`נמצאו ${imported.length} תוכניות אימון בקובץ הגיבוי. האם לייבא אותן ולעדכן את המערכת?`)) {
                    localStorage.setItem('gino_workout_plans', JSON.stringify(imported));
                    renderAdminPlans();
                    alert(`מעולה! ${imported.length} תוכניות אימון יובאו ונשמרו בהצלחה!`);
                }
            } else {
                alert("הקובץ אינו תקין או שאינו מכיל מערך תוכניות אימון.");
            }
        } catch (err) {
            alert("שגיאה בקריאת קובץ ה-JSON: " + err.message);
        }
        event.target.value = '';
    };
    reader.readAsText(file);
}

// Current editing plan state in memory
let currentEditingPlan = null;
window.getCurrentEditingPlan = () => currentEditingPlan;
window.setCurrentEditingPlan = (p) => { currentEditingPlan = p; };

function renderAdminPlans() {
    const plans = getWorkoutPlans();
    const grid = document.getElementById('admin-plans-grid');
    const countBadge = document.getElementById('badge-plans-count');
    if (countBadge) countBadge.innerText = plans.length;
    if (!grid) return;
    
    grid.innerHTML = '';

    const searchVal = (document.getElementById('admin-plans-search')?.value || '').trim().toLowerCase();
    const filterGender = document.getElementById('admin-plans-filter-gender')?.value || 'all';
    const filterGoal = document.getElementById('admin-plans-filter-goal')?.value || 'all';

    const genderLabels = { all: 'כולם 👥', male: 'גברים ♂️', female: 'נשים ♀️' };
    const goalLabels = {
        all: 'כל המטרות',
        shred: 'חיטוב וירידה בשומן',
        mass: 'עלייה במסת שריר',
        recomp: 'חיטוב ושינוי הרכב גוף',
        strength: 'שיפור כוח וביצועים',
        lose_weight: 'ירידה במשקל',
        muscle_gain: 'עלייה במסה',
        tone_health: 'חיטוב ובריאות'
    };
    const equipLabels = {
        all: 'כל ציוד',
        gym: 'חדר כושר',
        home: 'משקולות ביתיות',
        bodyweight: 'משקל גוף'
    };
    const freqLabels = {
        all: 'כל תדירות',
        '2-3': '2-3 פעמים בשבוע',
        '4+': '4+ ימים בשבוע',
        '4': '4+ ימים בשבוע',
        '5-6': '4+ ימים בשבוע',
        '2_3': '2-3 פעמים בשבוע',
        '4_5': '4+ ימים בשבוע',
        '6_plus': '4+ ימים בשבוע'
    };
    const levelLabels = {
        all: 'כל הרמות',
        beginner: 'מתחיל',
        active: 'פעיל',
        advanced: 'מתקדם',
        intermediate: 'בינוני'
    };
    const conditionLabels = {
        none: 'בריא / ללא מגבלה',
        pregnancy: 'הריון 🤰',
        knees: 'ברכיים / צולבת',
        acl: 'ברכיים / צולבת',
        back: 'גב / דיסק',
        shoulders: 'פציעת כתף',
        shoulder: 'פציעת כתף',
        any: 'לכל מצב'
    };

    const filtered = plans.filter(p => {
        if (searchVal && !(p.title || '').toLowerCase().includes(searchVal) && !(p.description || '').toLowerCase().includes(searchVal)) {
            return false;
        }
        if (filterGender !== 'all') {
            const planGender = p.matchingRules?.gender || 'all';
            if (planGender !== 'all' && planGender !== filterGender) return false;
        }
        if (filterGoal !== 'all') {
            const planGoal = p.matchingRules?.goal || 'all';
            if (planGoal !== 'all' && planGoal !== filterGoal) return false;
        }
        return true;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full p-8 text-center text-zinc-400 bg-zinc-900/20 border border-zinc-900 rounded-xl">
                <i data-lucide="layers" class="w-8 h-8 mx-auto mb-2 text-lime-400/50"></i>
                <div class="font-bold text-sm text-zinc-200">לא נמצאו תוכניות אימון התואמות לחיפוש</div>
                <div class="text-xs text-zinc-500 mt-1">תוכל ליצור תוכנית חדשה באמצעות כפתור "צור תוכנית אימון חדשה" למעלה.</div>
            </div>
        `;
        if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
        return;
    }

    filtered.forEach(plan => {
        const card = document.createElement('div');
        card.className = 'bg-zinc-950 border border-zinc-850 hover:border-zinc-750 p-4 rounded-xl space-y-3 transition-all flex flex-col justify-between';

        const rules = plan.matchingRules || {};
        const days = Array.isArray(plan.days) ? plan.days : [];
        const totalExercises = days.reduce((sum, d) => sum + (d.exercises ? d.exercises.length : 0), 0);

        card.innerHTML = `
            <div class="space-y-2.5">
                <div class="flex items-start justify-between gap-2">
                    <div>
                        <h5 class="font-bold text-sm text-white leading-tight">${plan.title}</h5>
                        <p class="text-[11px] text-zinc-400 mt-1 leading-relaxed line-clamp-2">${plan.description || 'ללא תיאור'}</p>
                    </div>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold shrink-0 ${rules.gender === 'female' ? 'bg-pink-950/60 text-pink-300 border border-pink-900/60' : rules.gender === 'male' ? 'bg-blue-950/60 text-blue-300 border border-blue-900/60' : 'bg-zinc-900 text-zinc-300 border border-zinc-800'}">
                        ${genderLabels[rules.gender] || 'כולם'}
                    </span>
                </div>

                <!-- Match Tags -->
                <div class="flex flex-wrap gap-1 text-[10px]">
                    <span class="px-1.5 py-0.5 bg-zinc-900 text-zinc-300 rounded border border-zinc-800 font-medium">🎯 ${goalLabels[rules.goal] || 'כל מטרה'}</span>
                    <span class="px-1.5 py-0.5 bg-zinc-900 text-zinc-300 rounded border border-zinc-800 font-medium">🏋️ ${equipLabels[rules.equipment] || 'כל ציוד'}</span>
                    <span class="px-1.5 py-0.5 bg-zinc-900 text-zinc-300 rounded border border-zinc-800 font-medium">📅 ${freqLabels[rules.frequency] || 'כל תדירות'}</span>
                    <span class="px-1.5 py-0.5 bg-zinc-900 text-zinc-300 rounded border border-zinc-800 font-medium">⭐ ${levelLabels[rules.level] || 'כל הרמות'}</span>
                    ${rules.condition && rules.condition !== 'none' ? `<span class="px-1.5 py-0.5 ${rules.condition === 'pregnancy' ? 'bg-pink-950/50 text-pink-300 border-pink-900/50' : 'bg-red-950/50 text-red-400 border-red-900/50'} rounded border font-medium">⚠️ ${conditionLabels[rules.condition] || rules.condition}</span>` : ''}
                </div>

                <!-- Days Summary -->
                <div class="bg-zinc-900/60 p-2 rounded-lg border border-zinc-900 space-y-1 text-[11px]">
                    <div class="flex justify-between text-zinc-400 font-semibold text-[10px]">
                        <span>חלוקת ימים (${days.length} ימים בספליט):</span>
                        <span class="text-lime-400 font-bold">${totalExercises} תרגילים סה"כ</span>
                    </div>
                    <div class="space-y-0.5">
                        ${days.map(d => `
                            <div class="flex justify-between items-center text-zinc-300">
                                <span class="font-medium truncate max-w-[200px]">${d.dayName || 'יום אימון'}</span>
                                <span class="text-[10px] text-zinc-500">${(d.exercises || []).length} תרגילים</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Card Actions -->
            <div class="flex items-center gap-1.5 pt-2 border-t border-zinc-900">
                <button type="button" onclick="openEditPlanModal('${plan.id}')" class="flex-1 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-lime-400 font-bold rounded-lg transition-colors text-xs flex items-center justify-center gap-1">
                    <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
                    <span>ערוך תוכנית</span>
                </button>
                <button type="button" onclick="duplicateWorkoutPlan('${plan.id}')" class="py-1.5 px-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium rounded-lg transition-colors text-xs flex items-center justify-center gap-1" title="שכפל תוכנית">
                    <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                    <span>שכפל</span>
                </button>
                <button type="button" onclick="deleteWorkoutPlan('${plan.id}')" class="py-1.5 px-2.5 bg-red-950/20 hover:bg-red-950/50 text-red-400 font-medium rounded-lg transition-colors text-xs flex items-center justify-center gap-1" title="מחק תוכנית">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                    <span>מחק</span>
                </button>
            </div>
        `;

        grid.appendChild(card);
    });

    if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
}

function openCreatePlanModal() {
    currentEditingPlan = {
        id: '',
        title: '',
        description: '',
        resultsTitle: '',
        resultsSubtitle: '',
        customMessage: '',
        intensityRule: '',
        matchingRules: {
            gender: 'all',
            goal: 'all',
            equipment: 'all',
            frequency: 'all',
            level: 'all',
            condition: 'none'
        },
        guidelines: 'שמירה על עומס פרוגרסיבי הדרגתי, ביצוע טכני מדויק ומנוחה מבוקרת בין סטים.',
        days: [
            {
                dayName: 'אימון A',
                exercises: [
                    { name: '', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: '', image: '', notes: '' }
                ]
            }
        ]
    };

    populatePlanModalFields();
    renderPlanDaysEditor();
    const modal = document.getElementById('admin-plan-modal');
    if (modal) modal.classList.remove('hidden');
    if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
}

function openEditPlanModal(planId) {
    const plans = getWorkoutPlans();
    const plan = plans.find(p => p.id === planId);
    if (!plan) return;

    // Deep clone to avoid mutating until save
    currentEditingPlan = JSON.parse(JSON.stringify(plan));
    if (!Array.isArray(currentEditingPlan.days) || currentEditingPlan.days.length === 0) {
        currentEditingPlan.days = [{ dayName: 'אימון A', exercises: [] }];
    }

    populatePlanModalFields();
    renderPlanDaysEditor();
    const modal = document.getElementById('admin-plan-modal');
    if (modal) modal.classList.remove('hidden');
    if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
}

function closeAdminPlanModal() {
    const modal = document.getElementById('admin-plan-modal');
    if (modal) modal.classList.add('hidden');
}

function populatePlanModalFields() {
    if (!currentEditingPlan) return;
    const titleEl = document.getElementById('plan-modal-title');
    if (titleEl) {
        titleEl.innerHTML = `
            <i data-lucide="layers" class="w-5 h-5 text-lime-400"></i>
            <span>${currentEditingPlan.id ? 'עריכת תוכנית: ' + (currentEditingPlan.title || '') : 'צור תוכנית אימון חדשה'}</span>
        `;
    }

    const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = val !== undefined ? val : '';
    };

    setVal('plan-edit-id', currentEditingPlan.id || '');
    setVal('plan-edit-title', currentEditingPlan.title || '');
    setVal('plan-edit-desc', currentEditingPlan.description || '');
    setVal('plan-edit-guidelines', currentEditingPlan.guidelines || '');
    setVal('plan-edit-results-title', currentEditingPlan.resultsTitle || '');
    setVal('plan-edit-results-subtitle', currentEditingPlan.resultsSubtitle || '');
    setVal('plan-edit-custom-message', currentEditingPlan.customMessage || '');
    setVal('plan-edit-intensity-rule', currentEditingPlan.intensityRule || '');

    const rules = currentEditingPlan.matchingRules || {};
    setVal('plan-match-gender', rules.gender || 'all');
    setVal('plan-match-goal', rules.goal || 'all');
    setVal('plan-match-equipment', rules.equipment || 'all');
    setVal('plan-match-frequency', rules.frequency || 'all');
    setVal('plan-match-level', rules.level || 'all');
    setVal('plan-match-condition', rules.condition || 'none');
}

function collectPlanInputsFromDOM() {
    if (!currentEditingPlan) return;
    const getVal = (id, fallback = '') => {
        const el = document.getElementById(id);
        return el ? el.value.trim() : fallback;
    };

    currentEditingPlan.title = getVal('plan-edit-title');
    currentEditingPlan.description = getVal('plan-edit-desc');
    currentEditingPlan.guidelines = getVal('plan-edit-guidelines');
    currentEditingPlan.resultsTitle = getVal('plan-edit-results-title');
    currentEditingPlan.resultsSubtitle = getVal('plan-edit-results-subtitle');
    currentEditingPlan.customMessage = getVal('plan-edit-custom-message');
    currentEditingPlan.intensityRule = getVal('plan-edit-intensity-rule');
    currentEditingPlan.matchingRules = {
        gender: getVal('plan-match-gender', 'all'),
        goal: getVal('plan-match-goal', 'all'),
        equipment: getVal('plan-match-equipment', 'all'),
        frequency: getVal('plan-match-frequency', 'all'),
        level: getVal('plan-match-level', 'all'),
        condition: getVal('plan-match-condition', 'none')
    };

    // Collect days
    const dayCards = document.querySelectorAll('.plan-day-card');
    if (dayCards.length > 0) {
        const days = [];
        dayCards.forEach((dc, dIdx) => {
            const dayName = (dc.querySelector('.plan-day-name-input')?.value || `אימון ${dIdx + 1}`).trim();
            const exRows = dc.querySelectorAll('.plan-exercise-row');
            const exercises = [];
            exRows.forEach((er) => {
                const name = (er.querySelector('.ex-name-input')?.value || '').trim();
                exercises.push({
                    name,
                    setsReps: (er.querySelector('.ex-setsreps-input')?.value || '2-3 סטים x 6-12 חזרות').trim(),
                    rest: (er.querySelector('.ex-rest-input')?.value || '90-120 שניות (ניתן גם יותר במידת הצורך)').trim(),
                    video: (er.querySelector('.ex-video-input')?.value || '').trim(),
                    image: (er.querySelector('.ex-image-input')?.value || '').trim(),
                    notes: (er.querySelector('.ex-notes-input')?.value || '').trim()
                });
            });
            days.push({ dayName, exercises });
        });
        currentEditingPlan.days = days;
    }
}

function renderPlanDaysEditor() {
    const container = document.getElementById('plan-days-container');
    if (!container || !currentEditingPlan) return;
    container.innerHTML = '';

    const bank = getExerciseBank();
    const muscleCategoryTitles = {
        chest: '💪 חזה (Chest)',
        back: '🚣 גב (Back)',
        legs: '🦵 רגליים וישבן (Legs & Glutes)',
        shoulders: '🥥 כתפיים (Shoulders)',
        arms: '🦾 ידיים (Arms - Biceps & Triceps)',
        core: '🧘 בטן וליבה (Core & Abs)'
    };
    const muscleOrder = ['chest', 'back', 'legs', 'shoulders', 'arms', 'core'];

    currentEditingPlan.days.forEach((day, dIdx) => {
        const dayCard = document.createElement('div');
        dayCard.className = 'plan-day-card bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 space-y-3';
        dayCard.setAttribute('data-day-idx', dIdx);

        dayCard.innerHTML = `
            <div class="flex items-center justify-between gap-2 border-b border-zinc-800 pb-2">
                <div class="flex items-center gap-2 flex-1">
                    <span class="w-6 h-6 rounded-full bg-lime-500/10 text-lime-400 font-bold flex items-center justify-center text-xs shrink-0">${dIdx + 1}</span>
                    <input type="text" value="${(day.dayName || '').replace(/"/g, '&quot;')}" placeholder="שם יום האימון (למשל: אימון A - פלג גוף עליון)" 
                        class="plan-day-name-input w-full bg-zinc-950 border border-zinc-800 rounded-lg p-1.5 text-xs text-white font-bold focus:border-lime-500">
                </div>
                <button type="button" onclick="removeDayFromEditingPlan(${dIdx})" class="p-1 px-2 text-red-400 hover:bg-red-950/30 rounded text-[11px] flex items-center gap-1 transition-colors" title="הסר יום זה">
                    <i data-lucide="trash" class="w-3.5 h-3.5"></i>
                    <span>הסר יום</span>
                </button>
            </div>

            <!-- Exercises List for this Day -->
            <div class="space-y-2.5 exercises-container" data-day-idx="${dIdx}">
                ${(day.exercises || []).map((ex, eIdx) => `
                    <div class="plan-exercise-row bg-zinc-950 p-3 rounded-lg border border-zinc-850 space-y-2 text-xs transition-all" 
                         draggable="true" 
                         data-day-idx="${dIdx}" 
                         data-ex-idx="${eIdx}">
                        <div class="flex items-center justify-between gap-2 border-b border-zinc-900/80 pb-2">
                            <div class="flex items-center gap-1.5 shrink-0">
                                <div class="drag-handle text-zinc-500 hover:text-lime-400 p-1 cursor-grab active:cursor-grabbing rounded transition-colors flex items-center" title="גרור כדי לשנות את סדר התרגילים">
                                    <i data-lucide="grip-vertical" class="w-4 h-4"></i>
                                </div>
                                <span class="text-zinc-400 font-mono text-[11px] font-bold">תרגיל #${eIdx + 1}</span>
                                <div class="flex items-center gap-0.5 mr-1">
                                    <button type="button" onclick="moveExerciseInPlan(${dIdx}, ${eIdx}, -1)" ${eIdx === 0 ? 'disabled class="opacity-20 text-zinc-600 p-0.5 cursor-not-allowed"' : 'class="text-zinc-500 hover:text-lime-400 p-0.5 transition-colors" title="הזז תרגיל למעלה"'}><i data-lucide="chevron-up" class="w-3.5 h-3.5"></i></button>
                                    <button type="button" onclick="moveExerciseInPlan(${dIdx}, ${eIdx}, 1)" ${eIdx === (day.exercises || []).length - 1 ? 'disabled class="opacity-20 text-zinc-600 p-0.5 cursor-not-allowed"' : 'class="text-zinc-500 hover:text-lime-400 p-0.5 transition-colors" title="הזז תרגיל למטה"'}><i data-lucide="chevron-down" class="w-3.5 h-3.5"></i></button>
                                </div>
                            </div>
                            <div class="flex items-center gap-2 flex-1 max-w-md">
                                <select onchange="onSelectExerciseFromBank(${dIdx}, ${eIdx}, this.value)" class="w-full bg-zinc-900 border border-zinc-800 rounded p-1 text-[11px] text-zinc-300 focus:border-lime-500">
                                    <option value="">⚡ בחר ממאגר התרגילים (מילוי אוטומטי)...</option>
                                    ${muscleOrder.map(m => {
                                        const groupEx = bank.filter(b => b.muscle === m);
                                        if (groupEx.length === 0) return '';
                                        return `
                                            <optgroup label="${muscleCategoryTitles[m] || m}">
                                                ${groupEx.map(b => `<option value="${b.id}">${b.name} (${b.equipment === 'home' ? 'משקולות בית' : b.equipment === 'bodyweight' ? 'משקל גוף' : 'מכון'})</option>`).join('')}
                                            </optgroup>
                                        `;
                                    }).join('')}
                                </select>
                            </div>
                            <button type="button" onclick="removeExerciseFromEditingDay(${dIdx}, ${eIdx})" class="text-red-400 hover:text-red-300 p-1" title="מחק תרגיל">
                                <i data-lucide="x" class="w-4 h-4"></i>
                            </button>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <div class="sm:col-span-1">
                                <label class="block text-[10px] text-zinc-400 mb-0.5">שם התרגיל:</label>
                                <input type="text" value="${(ex.name || '').replace(/"/g, '&quot;')}" placeholder="שם התרגיל" class="ex-name-input w-full bg-zinc-900 border border-zinc-800 rounded p-1.5 text-white font-medium text-xs focus:border-lime-500">
                            </div>
                            <div>
                                <label class="block text-[10px] text-zinc-400 mb-0.5">סטים וחזרות:</label>
                                <input type="text" value="${(ex.setsReps || '2-3 סטים x 6-12 חזרות').replace(/"/g, '&quot;')}" placeholder="2-3 סטים x 6-12 חזרות" class="ex-setsreps-input w-full bg-zinc-900 border border-zinc-800 rounded p-1.5 text-white text-xs focus:border-lime-500">
                            </div>
                            <div>
                                <label class="block text-[10px] text-zinc-400 mb-0.5">זמן מנוחה:</label>
                                <input type="text" value="${(ex.rest || '90-120 שניות (ניתן גם יותר במידת הצורך)').replace(/"/g, '&quot;')}" placeholder="90-120 שניות (ניתן גם יותר במידת הצורך)" class="ex-rest-input w-full bg-zinc-900 border border-zinc-800 rounded p-1.5 text-white text-xs focus:border-lime-500">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div>
                                <label class="block text-[10px] text-zinc-400 mb-0.5">סרטון YouTube ID:</label>
                                <input type="text" value="${(ex.video || '').replace(/"/g, '&quot;')}" placeholder="gcNh17Cwlco" class="ex-video-input w-full bg-zinc-900 border border-zinc-800 rounded p-1.5 text-white text-xs ltr focus:border-lime-500">
                            </div>
                            <div>
                                <label class="block text-[10px] text-zinc-400 mb-0.5">תמונת הדגמה אישית:</label>
                                <div class="flex gap-1.5 items-center">
                                    <input type="text" value="${(ex.image || '').replace(/"/g, '&quot;')}" placeholder="https://... או העלה מהמכשיר" class="ex-image-input flex-1 bg-zinc-900 border border-zinc-800 rounded p-1.5 text-white text-xs ltr focus:border-lime-500">
                                    <label class="py-1 px-2.5 bg-zinc-800 hover:bg-zinc-750 text-cyan-400 text-[10px] font-bold rounded border border-zinc-700 cursor-pointer flex items-center gap-1 shrink-0 transition-colors" title="העלה תמונה מהמכשיר">
                                        <i data-lucide="upload" class="w-3 h-3"></i>
                                        <span>העלה 📁</span>
                                        <input type="file" accept="image/*" class="hidden" onchange="handlePlanExerciseFileUpload(${dIdx}, ${eIdx}, this)">
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="block text-[10px] text-zinc-400 mb-0.5">דגש ביצוע ביומכני:</label>
                            <textarea rows="1" placeholder="דגשי בטיחות, טכניקה, מנח גב ונשימה..." class="ex-notes-input w-full bg-zinc-900 border border-zinc-800 rounded p-1.5 text-white text-xs focus:border-lime-500">${(ex.notes || '')}</textarea>
                        </div>
                    </div>
                `).join('')}
            </div>

            <button type="button" onclick="addExerciseToEditingDay(${dIdx})" class="w-full py-2 bg-zinc-950 hover:bg-zinc-850 text-lime-400 border border-dashed border-zinc-800 hover:border-lime-500/50 rounded-lg transition-colors flex items-center justify-center gap-1.5 font-bold text-xs">
                <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                <span>הוסף תרגיל ליום זה</span>
            </button>
        `;

        container.appendChild(dayCard);
    });

    setupExerciseDragAndDrop();
    if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
}

let draggedExerciseSource = null;

function setupExerciseDragAndDrop() {
    const rows = document.querySelectorAll('.plan-exercise-row');
    const containers = document.querySelectorAll('.exercises-container');

    rows.forEach(row => {
        // Desktop HTML5 drag events
        row.addEventListener('dragstart', (e) => {
            // Do not initiate row drag if user is interacting with text inputs or select
            if (e.target.closest('input, textarea, select, button:not(.drag-handle)')) {
                e.preventDefault();
                return;
            }

            collectPlanInputsFromDOM();
            const dIdx = parseInt(row.getAttribute('data-day-idx'), 10);
            const eIdx = parseInt(row.getAttribute('data-ex-idx'), 10);
            draggedExerciseSource = { dayIdx: dIdx, exIdx: eIdx };

            if (e.dataTransfer) {
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/plain', JSON.stringify(draggedExerciseSource));
            }

            setTimeout(() => {
                row.classList.add('is-dragging');
            }, 0);
        });

        row.addEventListener('dragover', (e) => {
            if (!draggedExerciseSource) return;
            e.preventDefault();
            if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';

            const rect = row.getBoundingClientRect();
            const offset = e.clientY - rect.top;
            const isTop = offset < rect.height / 2;

            if (isTop) {
                row.classList.add('drag-over-top');
                row.classList.remove('drag-over-bottom');
            } else {
                row.classList.add('drag-over-bottom');
                row.classList.remove('drag-over-top');
            }
        });

        row.addEventListener('dragleave', () => {
            row.classList.remove('drag-over-top', 'drag-over-bottom');
        });

        row.addEventListener('drop', (e) => {
            if (!draggedExerciseSource) return;
            e.preventDefault();
            e.stopPropagation();

            const targetDay = parseInt(row.getAttribute('data-day-idx'), 10);
            let targetEx = parseInt(row.getAttribute('data-ex-idx'), 10);

            const rect = row.getBoundingClientRect();
            const offset = e.clientY - rect.top;
            const isBottom = offset >= rect.height / 2;
            if (isBottom) {
                targetEx += 1;
            }

            const src = draggedExerciseSource;
            draggedExerciseSource = null;
            reorderPlanExercise(src.dayIdx, src.exIdx, targetDay, targetEx);
        });

        row.addEventListener('dragend', () => {
            draggedExerciseSource = null;
            document.querySelectorAll('.plan-exercise-row').forEach(r => {
                r.classList.remove('is-dragging', 'drag-over-top', 'drag-over-bottom');
            });
        });

        // Mobile touch drag-and-drop on drag handle
        const handle = row.querySelector('.drag-handle');
        if (handle) {
            let activeTouchRow = null;

            handle.addEventListener('touchstart', (e) => {
                if (e.touches.length !== 1) return;
                collectPlanInputsFromDOM();
                const dIdx = parseInt(row.getAttribute('data-day-idx'), 10);
                const eIdx = parseInt(row.getAttribute('data-ex-idx'), 10);
                draggedExerciseSource = { dayIdx: dIdx, exIdx: eIdx };
                activeTouchRow = row;
                row.classList.add('is-dragging');
            }, { passive: true });

            handle.addEventListener('touchmove', (e) => {
                if (!draggedExerciseSource || !activeTouchRow) return;
                const touch = e.touches[0];
                const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
                const overRow = targetElement?.closest('.plan-exercise-row');

                document.querySelectorAll('.plan-exercise-row').forEach(r => {
                    if (r !== overRow) r.classList.remove('drag-over-top', 'drag-over-bottom');
                });

                if (overRow && overRow !== activeTouchRow) {
                    const rect = overRow.getBoundingClientRect();
                    const offset = touch.clientY - rect.top;
                    if (offset < rect.height / 2) {
                        overRow.classList.add('drag-over-top');
                        overRow.classList.remove('drag-over-bottom');
                    } else {
                        overRow.classList.add('drag-over-bottom');
                        overRow.classList.remove('drag-over-top');
                    }
                }
            }, { passive: false });

            handle.addEventListener('touchend', (e) => {
                if (!draggedExerciseSource || !activeTouchRow) return;
                const changedTouch = e.changedTouches[0];
                const targetElement = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);
                const overRow = targetElement?.closest('.plan-exercise-row');

                const src = draggedExerciseSource;
                draggedExerciseSource = null;
                activeTouchRow.classList.remove('is-dragging');

                if (overRow) {
                    overRow.classList.remove('drag-over-top', 'drag-over-bottom');
                    const targetDay = parseInt(overRow.getAttribute('data-day-idx'), 10);
                    let targetEx = parseInt(overRow.getAttribute('data-ex-idx'), 10);
                    const rect = overRow.getBoundingClientRect();
                    const offset = changedTouch.clientY - rect.top;
                    if (offset >= rect.height / 2) {
                        targetEx += 1;
                    }
                    reorderPlanExercise(src.dayIdx, src.exIdx, targetDay, targetEx);
                } else {
                    document.querySelectorAll('.plan-exercise-row').forEach(r => {
                        r.classList.remove('is-dragging', 'drag-over-top', 'drag-over-bottom');
                    });
                }
                activeTouchRow = null;
            });
        }
    });

    containers.forEach(cont => {
        cont.addEventListener('dragover', (e) => {
            if (!draggedExerciseSource) return;
            e.preventDefault();
            if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
        });

        cont.addEventListener('drop', (e) => {
            if (!draggedExerciseSource) return;
            if (e.target.classList.contains('exercises-container') || e.target === cont) {
                e.preventDefault();
                e.stopPropagation();
                const targetDay = parseInt(cont.getAttribute('data-day-idx'), 10);
                const targetEx = (currentEditingPlan.days[targetDay]?.exercises || []).length;
                const src = draggedExerciseSource;
                draggedExerciseSource = null;
                reorderPlanExercise(src.dayIdx, src.exIdx, targetDay, targetEx);
            }
        });
    });
}

function reorderPlanExercise(srcDay, srcEx, targetDay, targetEx) {
    collectPlanInputsFromDOM();
    if (!currentEditingPlan || !currentEditingPlan.days) return;
    if (!currentEditingPlan.days[srcDay] || !currentEditingPlan.days[srcDay].exercises[srcEx]) return;
    if (!currentEditingPlan.days[targetDay]) return;

    if (srcDay === targetDay) {
        if (srcEx === targetEx || srcEx === targetEx - 1) {
            renderPlanDaysEditor();
            return;
        }
    }

    const [movedEx] = currentEditingPlan.days[srcDay].exercises.splice(srcEx, 1);
    let adjustedTargetEx = targetEx;
    if (srcDay === targetDay && srcEx < targetEx) {
        adjustedTargetEx -= 1;
    }

    if (adjustedTargetEx < 0) adjustedTargetEx = 0;
    if (adjustedTargetEx > currentEditingPlan.days[targetDay].exercises.length) {
        adjustedTargetEx = currentEditingPlan.days[targetDay].exercises.length;
    }

    currentEditingPlan.days[targetDay].exercises.splice(adjustedTargetEx, 0, movedEx);
    renderPlanDaysEditor();
}

function moveExerciseInPlan(dIdx, eIdx, direction) {
    collectPlanInputsFromDOM();
    if (!currentEditingPlan || !currentEditingPlan.days || !currentEditingPlan.days[dIdx]) return;
    const exercises = currentEditingPlan.days[dIdx].exercises;
    const targetIdx = eIdx + direction;
    if (targetIdx < 0 || targetIdx >= exercises.length) return;

    const temp = exercises[eIdx];
    exercises[eIdx] = exercises[targetIdx];
    exercises[targetIdx] = temp;

    renderPlanDaysEditor();
}

window.moveExerciseInPlan = moveExerciseInPlan;
window.reorderPlanExercise = reorderPlanExercise;
window.setupExerciseDragAndDrop = setupExerciseDragAndDrop;

function addDayToEditingPlan() {
    collectPlanInputsFromDOM();
    const newDayName = `אימון ${String.fromCharCode(65 + currentEditingPlan.days.length)}`;
    currentEditingPlan.days.push({
        dayName: newDayName,
        exercises: [{ name: '', setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)', video: '', image: '', notes: '' }]
    });
    renderPlanDaysEditor();
}

function removeDayFromEditingPlan(dIdx) {
    collectPlanInputsFromDOM();
    if (currentEditingPlan.days.length <= 1) {
        alert("תוכנית אימון חייבת לכלול לפחות יום אימון אחד.");
        return;
    }
    currentEditingPlan.days.splice(dIdx, 1);
    renderPlanDaysEditor();
}

function addExerciseToEditingDay(dIdx) {
    collectPlanInputsFromDOM();
    if (currentEditingPlan.days[dIdx]) {
        currentEditingPlan.days[dIdx].exercises.push({
            name: '',
            setsReps: '2-3 סטים x 6-12 חזרות', rest: '90-120 שניות (ניתן גם יותר במידת הצורך)',
            video: '',
            image: '',
            notes: ''
        });
        renderPlanDaysEditor();
    }
}

function removeExerciseFromEditingDay(dIdx, eIdx) {
    collectPlanInputsFromDOM();
    if (currentEditingPlan.days[dIdx] && currentEditingPlan.days[dIdx].exercises) {
        currentEditingPlan.days[dIdx].exercises.splice(eIdx, 1);
        renderPlanDaysEditor();
    }
}

function onSelectExerciseFromBank(dIdx, eIdx, bankExId) {
    if (!bankExId) return;
    const bank = getExerciseBank();
    const found = bank.find(b => b.id === bankExId);
    if (!found) return;

    collectPlanInputsFromDOM();
    if (currentEditingPlan.days[dIdx] && currentEditingPlan.days[dIdx].exercises[eIdx]) {
        currentEditingPlan.days[dIdx].exercises[eIdx] = {
            name: found.name,
            setsReps: found.defaultSetsReps || '2-3 סטים x 6-12 חזרות',
            rest: found.rest || '90-120 שניות (ניתן גם יותר במידת הצורך)',
            video: found.video || '',
            image: found.image || '',
            notes: found.notes || ''
        };
        renderPlanDaysEditor();
    }
}

function saveWorkoutPlan() {
    collectPlanInputsFromDOM();
    if (!currentEditingPlan) return;

    const title = (currentEditingPlan.title || '').trim();
    if (!title) {
        alert("נא להזין שם עבור תוכנית האימון.");
        const titleEl = document.getElementById('plan-edit-title');
        if (titleEl) titleEl.focus();
        return;
    }

    if (!currentEditingPlan.days || currentEditingPlan.days.length === 0) {
        alert("תוכנית אימון חייבת לכלול לפחות יום אימון אחד.");
        return;
    }

    // Filter out exercises that have no name
    currentEditingPlan.days.forEach(d => {
        d.exercises = (d.exercises || []).filter(e => e.name && e.name.trim() !== '');
    });

    let plans = getWorkoutPlans();

    if (currentEditingPlan.id) {
        // Edit existing
        const idx = plans.findIndex(p => p.id === currentEditingPlan.id);
        if (idx !== -1) {
            plans[idx] = { ...currentEditingPlan };
        } else {
            plans.push(currentEditingPlan);
        }
    } else {
        // New plan
        currentEditingPlan.id = 'plan_' + Date.now();
        plans.push(currentEditingPlan);
    }

    saveWorkoutPlans(plans);
    closeAdminPlanModal();
    renderAdminPlans();
    alert("תוכנית האימון נשמרה בהצלחה!");
}

function duplicateWorkoutPlan(planId) {
    const plans = getWorkoutPlans();
    const plan = plans.find(p => p.id === planId);
    if (!plan) return;

    const cloned = JSON.parse(JSON.stringify(plan));
    cloned.id = 'plan_' + Date.now();
    cloned.title = `${cloned.title} (שכפול)`;

    plans.push(cloned);
    saveWorkoutPlans(plans);
    renderAdminPlans();
}

function deleteWorkoutPlan(planId) {
    if (confirm("האם למחוק תוכנית אימון זו לצמיתות?")) {
        let plans = getWorkoutPlans();
        plans = plans.filter(p => p.id !== planId);
        saveWorkoutPlans(plans);
        renderAdminPlans();
    }
}

// Helper to normalize matching rules across legacy and new formats
function normalizeMatchingRules(rules) {
    if (!rules) return { gender: 'all', goal: 'all', equipment: 'all', frequency: 'all', level: 'all', condition: 'none' };
    const r = { ...rules };
    if (r.goal === 'lose_weight') r.goal = 'shred';
    else if (r.goal === 'muscle_gain') r.goal = 'mass';
    else if (r.goal === 'tone_health') r.goal = 'recomp';

    if (r.equipment === 'home') r.equipment = 'bodyweight';

    if (r.frequency === '2_3' || r.frequency === '2-3') r.frequency = '2-3';
    else if (r.frequency === '4_5' || r.frequency === '4' || r.frequency === '5-6' || r.frequency === '6_plus' || r.frequency === '4+') r.frequency = '4+';

    if (r.level === 'intermediate') r.level = 'active';

    if (r.condition === 'acl') r.condition = 'knees';
    else if (r.condition === 'shoulder') r.condition = 'shoulders';

    return r;
}

// Matching engine: Find best custom workout plan from Admin plans matching Coach Gino's exact definitions
function findMatchingCustomPlan(bio, answers) {
    const plans = getWorkoutPlans();
    if (!plans || plans.length === 0) return null;

    const userGender = answers.gender || 'male';
    const userGoal = answers.goal || 'shred';
    const rawEquip = answers.equipment || 'gym';
    const userEquip = (rawEquip === 'bodyweight' || rawEquip === 'home') ? 'bodyweight' : 'gym';
    const rawFreq = answers.frequency || '2-3';
    const userFreq = (rawFreq === '4' || rawFreq === '5-6' || rawFreq === '4+') ? '4+' : '2-3';
    const userLevel = answers.experience || answers.level || 'beginner';

    let bestPlan = null;
    let highestScore = -Infinity;

    plans.forEach(plan => {
        const rules = normalizeMatchingRules(plan.matchingRules);
        let score = 0;

        // 1. GENDER FILTER (Hard constraint)
        if (rules.gender && rules.gender !== 'all') {
            if (rules.gender !== userGender) {
                return; // Disqualified completely
            }
            score += 100; // Exact gender match
        } else {
            score += 20; // Unisex / all genders
        }

        // 2. PREGNANCY & HEALTH CONDITION FILTER
        if (bio && bio.isPregnant) {
            // Woman is pregnant: MUST prioritize pregnancy plans
            if (rules.condition === 'pregnancy' || /הריון|pregnancy/i.test(plan.title)) {
                score += 350;
            } else if (rules.condition === 'none') {
                score -= 400; // Do not assign heavy standard plan
            }
        } else {
            // Not pregnant: disqualify pregnancy plans completely
            if (rules.condition === 'pregnancy' || /הריון|pregnancy/i.test(plan.title)) {
                return; // Disqualified completely
            }

            // Injury-specific matching
            if (rules.condition === 'knees') {
                if (bio && bio.isKnee) score += 200;
                else score -= 50;
            } else if (rules.condition === 'back') {
                if (bio && bio.isDisc) score += 200;
                else score -= 50;
            } else if (rules.condition === 'shoulders') {
                if (bio && bio.isShoulder) score += 200;
                else score -= 50;
            } else if (rules.condition === 'none') {
                if (bio && !bio.isKnee && !bio.isDisc && !bio.isShoulder) {
                    score += 50;
                }
            } else if (rules.condition === 'any') {
                score += 20;
            }
        }

        // 3. EQUIPMENT MATCH
        if (userEquip === 'bodyweight') {
            // Hard constraint: If user has only bodyweight, disqualify gym plans completely
            if (rules.equipment === 'gym') {
                return; // Disqualified: trainee has no gym equipment
            }
            if (rules.equipment === 'bodyweight') {
                score += 300; // Strong match for dedicated bodyweight plan
            } else {
                score += 50; // 'all' equipment
            }
        } else {
            // User has gym equipment
            if (rules.equipment === 'gym') {
                score += 150; // Exact gym match
            } else if (rules.equipment === 'all') {
                score += 30;
            } else {
                score -= 150; // Demote bodyweight plans when user has full gym
            }
        }

        // 4. GOAL MATCH
        if (rules.goal && rules.goal !== 'all') {
            if (rules.goal === userGoal) {
                score += 120; // Exact goal match
            } else {
                score -= 30;
            }
        } else {
            score += 25; // Good for all goals
        }

        // 5. FREQUENCY MATCH
        // Coach Rule: When trainee selects bodyweight, frequency does NOT matter at all!
        if (userEquip === 'bodyweight') {
            score += 50; // Neutral frequency score, no penalty or restriction
        } else {
            if (rules.frequency && rules.frequency !== 'all') {
                if (rules.frequency === userFreq) {
                    score += 90; // Exact frequency match
                } else {
                    score -= 20;
                }
            } else {
                score += 20; // Fits any frequency
            }
        }

        // 6. LEVEL / EXPERIENCE MATCH
        if (userEquip === 'bodyweight' && userGender === 'female') {
            // Coach Rule: For women training bodyweight, regardless of level, the plan is the SAME plan!
            score += 150; // All experience levels match equally for female bodyweight
            if (rules.level === 'all') score += 20; // Prefer universal women bodyweight plan
        } else if (userEquip === 'bodyweight' && userGender === 'male') {
            // Coach Rule: For men training bodyweight, match the exact stage (beginner, active, advanced)
            if (rules.level && rules.level !== 'all') {
                if (rules.level === userLevel) {
                    score += 200; // Exact stage match
                } else {
                    score -= 300; // Disqualify / heavily penalize wrong stage
                }
            } else {
                score += 30; // 'all' levels fallback
            }
        } else {
            if (rules.level && rules.level !== 'all') {
                if (rules.level === userLevel) {
                    score += 70; // Exact experience match
                } else {
                    score -= 15;
                }
            } else {
                score += 15; // Good for all levels
            }
        }

        if (score > highestScore) {
            highestScore = score;
            bestPlan = plan;
        }
    });

    return highestScore > 0 ? bestPlan : null;
}

// Global window bindings
window.renderAdminPlans = renderAdminPlans;
window.openCreatePlanModal = openCreatePlanModal;
window.openEditPlanModal = openEditPlanModal;
window.closeAdminPlanModal = closeAdminPlanModal;
window.addDayToEditingPlan = addDayToEditingPlan;
window.removeDayFromEditingPlan = removeDayFromEditingPlan;
window.addExerciseToEditingDay = addExerciseToEditingDay;
window.removeExerciseFromEditingDay = removeExerciseFromEditingDay;
window.onSelectExerciseFromBank = onSelectExerciseFromBank;
window.saveWorkoutPlan = saveWorkoutPlan;
window.duplicateWorkoutPlan = duplicateWorkoutPlan;
window.deleteWorkoutPlan = deleteWorkoutPlan;
window.resetWorkoutPlansToDefaults = resetWorkoutPlansToDefaults;
window.exportWorkoutPlansJSON = exportWorkoutPlansJSON;
window.triggerImportWorkoutPlans = triggerImportWorkoutPlans;
window.handleImportWorkoutPlansFile = handleImportWorkoutPlansFile;
window.findMatchingCustomPlan = findMatchingCustomPlan;

// ============================================================================
// COACH AVATAR UPLOAD, CROP & REALIGNMENT ENGINE
// ============================================================================
const cropperState = {
    img: null,
    rawSrc: null,
    zoom: 1,
    minZoom: 0.1,
    maxZoom: 4,
    panX: 0,
    panY: 0,
    rotation: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    cropRadius: 110, // 220px diameter inside 300x300 viewport
    canvasSize: 300,
    initialPinchDist: 0,
    initialPinchZoom: 1,
    eventsInitialized: false
};

function renderCoachAvatar() {
    const avatarUrl = localStorage.getItem('gino_coach_avatar') || '';
    const defaultView = document.getElementById('intro-avatar-default');
    const imgView = document.getElementById('intro-avatar-image');
    const adminPreviewImg = document.getElementById('admin-avatar-preview-img');
    const adminPreviewPlaceholder = document.getElementById('admin-avatar-preview-placeholder');
    const adminRemoveBtn = document.getElementById('btn-admin-remove-avatar');
    const adminRealignBtn = document.getElementById('btn-admin-realign-avatar');
    const cropperRemoveBtn = document.getElementById('btn-cropper-remove-avatar');

    if (avatarUrl) {
        if (defaultView) defaultView.classList.add('hidden');
        if (imgView) {
            imgView.src = avatarUrl;
            imgView.classList.remove('hidden');
        }

        if (adminPreviewImg) {
            adminPreviewImg.src = avatarUrl;
            adminPreviewImg.classList.remove('hidden');
        }
        if (adminPreviewPlaceholder) adminPreviewPlaceholder.classList.add('hidden');
        if (adminRemoveBtn) adminRemoveBtn.classList.remove('hidden');
        if (adminRealignBtn) adminRealignBtn.classList.remove('hidden');
        if (cropperRemoveBtn) cropperRemoveBtn.classList.remove('hidden');

        // Also update consultation card avatar
        const consultAvatarBox = document.getElementById('consultation-avatar-box');
        if (consultAvatarBox) {
            consultAvatarBox.innerHTML = `<img src="${avatarUrl}" class="w-full h-full object-cover rounded-full" alt="Coach Gino" />`;
            consultAvatarBox.className = 'w-12 h-12 rounded-full overflow-hidden border border-lime-500/40 shadow-sm shrink-0';
        }
    } else {
        if (defaultView) defaultView.classList.remove('hidden');
        if (imgView) {
            imgView.src = '';
            imgView.classList.add('hidden');
        }

        if (adminPreviewImg) {
            adminPreviewImg.src = '';
            adminPreviewImg.classList.add('hidden');
        }
        if (adminPreviewPlaceholder) adminPreviewPlaceholder.classList.remove('hidden');
        if (adminRemoveBtn) adminRemoveBtn.classList.add('hidden');
        if (adminRealignBtn) adminRealignBtn.classList.add('hidden');
        if (cropperRemoveBtn) cropperRemoveBtn.classList.add('hidden');

        const consultAvatarBox = document.getElementById('consultation-avatar-box');
        if (consultAvatarBox) {
            consultAvatarBox.className = 'w-12 h-12 rounded-full bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-lime-400 font-bold shrink-0';
            consultAvatarBox.innerHTML = `<span id="consultation-coach-icon-container"><i data-lucide="stethoscope" id="consultation-coach-icon" class="w-6 h-6"></i></span>`;
            if (window.lucide) lucide.createIcons();
        }
    }
}


function triggerCoachAvatarUpload() {
    const input = document.getElementById('coach-avatar-input');
    if (input) {
        input.value = '';
        input.click();
    }
}

function triggerSelectDifferentAvatar() {
    triggerCoachAvatarUpload();
}

function openCropperWithExistingAvatar() {
    const rawAvatar = localStorage.getItem('gino_coach_raw_avatar');
    const croppedAvatar = localStorage.getItem('gino_coach_avatar');
    if (rawAvatar || croppedAvatar) {
        openAvatarCropperWithImage(rawAvatar || croppedAvatar, false);
    } else {
        triggerCoachAvatarUpload();
    }
}

function handleCoachAvatarSelected(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        alert('אנא בחר קובץ תמונה תקין (JPG, PNG, WEBP וכד\')');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const dataUrl = e.target.result;
        openAvatarCropperWithImage(dataUrl, true);
    };
    reader.readAsDataURL(file);
}

function openAvatarCropperWithImage(src, isNewUpload) {
    const img = new Image();
    img.onload = function() {
        cropperState.img = img;
        cropperState.rawSrc = src;

        const cropDiameter = cropperState.cropRadius * 2; // 220
        const fitZoom = Math.max(cropDiameter / img.naturalWidth, cropDiameter / img.naturalHeight);
        cropperState.zoom = fitZoom;
        cropperState.minZoom = Math.max(0.05, fitZoom * 0.25);
        cropperState.maxZoom = Math.max(3.5, fitZoom * 4);
        cropperState.panX = 0;
        cropperState.panY = 0;
        cropperState.rotation = 0;

        const slider = document.getElementById('cropper-zoom-slider');
        if (slider) {
            slider.min = cropperState.minZoom;
            slider.max = cropperState.maxZoom;
            slider.step = ((cropperState.maxZoom - cropperState.minZoom) / 300).toFixed(4);
            slider.value = cropperState.zoom;
        }
        updateCropperZoomBadge();

        const modal = document.getElementById('avatar-cropper-modal');
        if (modal) modal.classList.remove('hidden');

        initAvatarCropperEvents();
        renderCropper();
        if (window.lucide) lucide.createIcons();
    };
    img.src = src;
}

function closeAvatarCropperModal() {
    const modal = document.getElementById('avatar-cropper-modal');
    if (modal) modal.classList.add('hidden');
}

function initAvatarCropperEvents() {
    if (cropperState.eventsInitialized) return;
    cropperState.eventsInitialized = true;

    const canvas = document.getElementById('avatar-cropper-canvas');
    if (!canvas) return;

    // Mouse drag
    canvas.addEventListener('mousedown', (e) => {
        cropperState.isDragging = true;
        cropperState.dragStartX = e.clientX;
        cropperState.dragStartY = e.clientY;
    });

    window.addEventListener('mousemove', (e) => {
        if (!cropperState.isDragging) return;
        const dx = e.clientX - cropperState.dragStartX;
        const dy = e.clientY - cropperState.dragStartY;
        cropperState.dragStartX = e.clientX;
        cropperState.dragStartY = e.clientY;
        cropperState.panX += dx;
        cropperState.panY += dy;
        renderCropper();
    });

    window.addEventListener('mouseup', () => {
        cropperState.isDragging = false;
    });

    // Touch drag & pinch
    canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            cropperState.isDragging = true;
            cropperState.dragStartX = e.touches[0].clientX;
            cropperState.dragStartY = e.touches[0].clientY;
        } else if (e.touches.length === 2) {
            cropperState.isDragging = false;
            cropperState.initialPinchDist = getTouchDistance(e.touches[0], e.touches[1]);
            cropperState.initialPinchZoom = cropperState.zoom;
        }
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (e.touches.length === 1 && cropperState.isDragging) {
            const dx = e.touches[0].clientX - cropperState.dragStartX;
            const dy = e.touches[0].clientY - cropperState.dragStartY;
            cropperState.dragStartX = e.touches[0].clientX;
            cropperState.dragStartY = e.touches[0].clientY;
            cropperState.panX += dx;
            cropperState.panY += dy;
            renderCropper();
        } else if (e.touches.length === 2) {
            const currentDist = getTouchDistance(e.touches[0], e.touches[1]);
            if (cropperState.initialPinchDist > 0) {
                const ratio = currentDist / cropperState.initialPinchDist;
                const newZoom = Math.min(cropperState.maxZoom, Math.max(cropperState.minZoom, cropperState.initialPinchZoom * ratio));
                setCropperZoom(newZoom);
            }
        }
    }, { passive: false });

    canvas.addEventListener('touchend', (e) => {
        if (e.touches.length === 0) {
            cropperState.isDragging = false;
        } else if (e.touches.length === 1) {
            cropperState.isDragging = true;
            cropperState.dragStartX = e.touches[0].clientX;
            cropperState.dragStartY = e.touches[0].clientY;
        }
    });

    // Wheel zoom
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.08 : 0.92;
        const newZoom = Math.min(cropperState.maxZoom, Math.max(cropperState.minZoom, cropperState.zoom * factor));
        setCropperZoom(newZoom);
    }, { passive: false });
}

function getTouchDistance(t1, t2) {
    const dx = t1.clientX - t2.clientX;
    const dy = t1.clientY - t2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

function renderCropper() {
    const canvas = document.getElementById('avatar-cropper-canvas');
    if (!canvas || !cropperState.img) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const R = cropperState.cropRadius;

    ctx.clearRect(0, 0, W, H);

    // 1. Draw transformed image
    ctx.save();
    ctx.translate(cx + cropperState.panX, cy + cropperState.panY);
    ctx.rotate((cropperState.rotation * Math.PI) / 180);
    ctx.scale(cropperState.zoom, cropperState.zoom);
    ctx.drawImage(
        cropperState.img,
        -cropperState.img.naturalWidth / 2,
        -cropperState.img.naturalHeight / 2
    );
    ctx.restore();

    // 2. Draw dark vignette / mask with circular aperture
    ctx.save();
    ctx.fillStyle = 'rgba(9, 9, 11, 0.78)';
    ctx.beginPath();
    ctx.rect(0, 0, W, H);
    ctx.arc(cx, cy, R, 0, Math.PI * 2, true); // counter-clockwise cut-out
    ctx.fill();
    ctx.restore();

    // 3. Draw neon lime circular border
    ctx.save();
    ctx.strokeStyle = '#84cc16';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = 'rgba(132, 204, 22, 0.6)';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // 4. Draw subtle rule-of-thirds grid lines inside circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    const step = (R * 2) / 3;
    // Verticals
    ctx.beginPath();
    ctx.moveTo(cx - step / 2, cy - R);
    ctx.lineTo(cx - step / 2, cy + R);
    ctx.moveTo(cx + step / 2, cy - R);
    ctx.lineTo(cx + step / 2, cy + R);
    // Horizontals
    ctx.moveTo(cx - R, cy - step / 2);
    ctx.lineTo(cx + R, cy - step / 2);
    ctx.moveTo(cx - R, cy + step / 2);
    ctx.lineTo(cx + R, cy + step / 2);
    ctx.stroke();
    ctx.restore();
}

function setCropperZoom(val) {
    cropperState.zoom = Math.min(cropperState.maxZoom, Math.max(cropperState.minZoom, val));
    const slider = document.getElementById('cropper-zoom-slider');
    if (slider) slider.value = cropperState.zoom;
    updateCropperZoomBadge();
    renderCropper();
}

function handleCropperZoomSlider(val) {
    cropperState.zoom = parseFloat(val);
    updateCropperZoomBadge();
    renderCropper();
}

function adjustCropperZoom(delta) {
    setCropperZoom(cropperState.zoom + delta);
}

function updateCropperZoomBadge() {
    const badge = document.getElementById('cropper-zoom-badge');
    if (badge) {
        badge.innerText = `${Math.round(cropperState.zoom * 100)}%`;
    }
}

function rotateCropper(deg) {
    cropperState.rotation = (cropperState.rotation + deg + 360) % 360;
    renderCropper();
}

function fitAndCenterCropper() {
    if (!cropperState.img) return;
    const cropDiameter = cropperState.cropRadius * 2;
    const fitZoom = Math.max(cropDiameter / cropperState.img.naturalWidth, cropDiameter / cropperState.img.naturalHeight);
    cropperState.zoom = fitZoom;
    cropperState.panX = 0;
    cropperState.panY = 0;
    const slider = document.getElementById('cropper-zoom-slider');
    if (slider) slider.value = cropperState.zoom;
    updateCropperZoomBadge();
    renderCropper();
}

function applyAndSaveCroppedAvatar() {
    if (!cropperState.img) return;

    const outCanvas = document.createElement('canvas');
    const outSize = 400; // High resolution 400x400
    outCanvas.width = outSize;
    outCanvas.height = outSize;
    const outCtx = outCanvas.getContext('2d');
    outCtx.imageSmoothingEnabled = true;
    outCtx.imageSmoothingQuality = 'high';

    const scaleFactor = outSize / (cropperState.cropRadius * 2);
    const centerOut = outSize / 2;

    outCtx.translate(centerOut + cropperState.panX * scaleFactor, centerOut + cropperState.panY * scaleFactor);
    outCtx.rotate((cropperState.rotation * Math.PI) / 180);
    outCtx.scale(cropperState.zoom * scaleFactor, cropperState.zoom * scaleFactor);
    outCtx.drawImage(
        cropperState.img,
        -cropperState.img.naturalWidth / 2,
        -cropperState.img.naturalHeight / 2
    );

    const croppedDataUrl = outCanvas.toDataURL('image/jpeg', 0.90);

    try {
        localStorage.setItem('gino_coach_avatar', croppedDataUrl);
        if (cropperState.rawSrc) {
            localStorage.setItem('gino_coach_raw_avatar', cropperState.rawSrc);
        }

        let custom = {};
        const saved = localStorage.getItem('gino_coach_settings');
        if (saved) custom = JSON.parse(saved);
        custom.avatarUrl = croppedDataUrl;
        localStorage.setItem('gino_coach_settings', JSON.stringify(custom));
    } catch (e) {
        console.warn('Local storage write warning:', e);
    }

    renderCoachAvatar();
    closeAvatarCropperModal();

    showAvatarNotification('תמונת הפרופיל עודכנה בהצלחה! 📸');
}

function removeCoachAvatar() {
    if (!confirm('האם אתה בטוח שברצונך להסיר את התמונה ולחזור לסמל המשקולת המקורי?')) return;

    localStorage.removeItem('gino_coach_avatar');
    localStorage.removeItem('gino_coach_raw_avatar');

    try {
        let custom = {};
        const saved = localStorage.getItem('gino_coach_settings');
        if (saved) custom = JSON.parse(saved);
        delete custom.avatarUrl;
        localStorage.setItem('gino_coach_settings', JSON.stringify(custom));
    } catch (e) {}

    renderCoachAvatar();
    closeAvatarCropperModal();
    showAvatarNotification('התמונה הוסרה וסמל המשקולת הוחזר.');
}

function showAvatarNotification(msg) {
    const existing = document.getElementById('avatar-toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'avatar-toast-notification';
    toast.className = 'fixed top-5 left-1/2 -translate-x-1/2 z-[150] py-2.5 px-4 bg-lime-500 text-black font-extrabold text-xs rounded-xl shadow-2xl transition-all duration-300 transform scale-100 flex items-center gap-2';
    toast.innerHTML = `<span>${msg}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('opacity-0', 'scale-95');
        setTimeout(() => toast.remove(), 350);
    }, 2500);
}

// Global Avatar window bindings
window.renderCoachAvatar = renderCoachAvatar;
window.triggerCoachAvatarUpload = triggerCoachAvatarUpload;
window.triggerSelectDifferentAvatar = triggerSelectDifferentAvatar;
window.openCropperWithExistingAvatar = openCropperWithExistingAvatar;
window.handleCoachAvatarSelected = handleCoachAvatarSelected;
window.closeAvatarCropperModal = closeAvatarCropperModal;
window.handleCropperZoomSlider = handleCropperZoomSlider;
window.adjustCropperZoom = adjustCropperZoom;
window.rotateCropper = rotateCropper;
window.fitAndCenterCropper = fitAndCenterCropper;
window.applyAndSaveCroppedAvatar = applyAndSaveCroppedAvatar;
window.removeCoachAvatar = removeCoachAvatar;

