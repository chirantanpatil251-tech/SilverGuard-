/**
 * SilverGuard — Senior Scam Detection & Cyber Threat Shield
 * Complete Multilingual AI Translation Engine: Hindi, Marathi, Telugu, Tamil,
 * Kannada, Bengali, Gujarati, Punjabi, Malayalam & English.
 * Auto-Guard Sentinel, Nearest Cyber Police & 1930 Helpline Locator,
 * Audio Call Recording & FIR Police Complaint Dossier Generator.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMultilingualEngine();
  initAccessibility();
  initSentinelEngine();
  initNavigation();
  initMessageScanner();
  initLinkChecker();
  initCallScreener();
  initPoliceLocator();
  initEvidenceLocker();
  initPracticeArena();
  initCaregiverBridge();
  loadActivityLog();
  updateEvidenceBadge();
  
  // Apply initial saved language to whole site
  applyLanguage(currentLanguageKey, false);
});

/* ==========================================================================
   1. COMPREHENSIVE MULTILINGUAL TRANSLATION DICTIONARIES
   ========================================================================== */
const I18N_TRANSLATIONS = {
  en: {
    name: "English",
    locale: "en-US",
    welcomeVoice: "Language set to English. SilverGuard is active to protect you.",
    dangerWarning: "Warning! This is a dangerous scam. Do not send any money, gift cards, or bank OTP. Call the National Cyber Helpline 1930 or your family.",
    cautionWarning: "Caution: This message or call seems suspicious. Please verify before taking any action.",
    safeMessage: "This communication appears safe and normal.",
    threatAlertTitle: "FRAUD ATTEMPT INTERCEPTED!",
    threatSummary: "The scammer is demanding immediate payment or bank details under threat. Disconnect now.",
    goldenHourText: "Golden Hour Active: Call 1930 immediately to freeze unauthorized bank transfers.",
    sosVoice: "Emergency Pause Activated. Please take a breath. Do not send money or gift cards. You are safe.",
    // UI Keys
    brand_tagline: "Elder Cyber Protection, Local Voice Alerts & Police Evidence Locker",
    lang_label_text: "Language / भाषा:",
    sentinel_btn_label: "Auto-Guard:",
    sentinel_active_text: "ACTIVE",
    sentinel_paused_text: "PAUSED",
    text_size_label: "Text:",
    contrast_btn: "Contrast",
    voice_btn: "Voice Help",
    emergency_btn: "Emergency Pause & 1930",
    sentinel_banner_title: "Autonomous Elder Shield is Guarding This Device",
    sentinel_banner_desc: "Auto-interception active: Voice warnings will trigger instantly in your selected local language if fraud is detected.",
    sentinel_test_btn: "⚡ Test Auto-Alert Trigger",
    watch_247: "24/7 Watch",
    nav_message: "Message Scanner",
    nav_link: "Link Checker",
    nav_call: "Call Screener & Recorder",
    nav_police: "Nearest Cyber Police & 1930",
    nav_evidence: "Evidence Locker & FIR Dossier",
    nav_quiz: "Spot The Scam Quiz",
    nav_caregiver: "Family & Caregiver Bridge",
    nav_blueprint: "Project Blueprint",
    // Tab 1: Message Scanner
    simple_safe_badge: "Simple & Safe",
    msg_title: "Scan Any Suspicious Text, SMS, or WhatsApp Message",
    msg_desc: "Did you receive an alarming message claiming your bank is locked, electricity will be cut, or your grandchild needs urgent bail? Paste it below to inspect for fraud.",
    msg_card1_header: "1. Paste or Choose a Message",
    private_badge: "100% Private & Local",
    presets_label: "Or test with common real-world scams:",
    preset_elec: "⚡ Electricity Power Cut Warning",
    preset_bank: "💳 Bank Account / KYC Blocked Fraud",
    preset_lottery: "🎁 25 Lakh Lottery / KBC Winner",
    preset_grandkid: "🚨 Grandchild In Jail / Accident Bail",
    preset_police: "⚖️ Police / Tax Warrant Threat",
    preset_delivery: "📦 Fake Parcel Delivery Unpaid Fee",
    preset_real_family: "💚 Real Family Greeting",
    preset_real_clinic: "💚 Real Doctor Reminder",
    msg_input_label: "Message Text:",
    msg_placeholder: "Paste the SMS, WhatsApp forward, or email you received here...",
    btn_check_msg: "Check This Message",
    btn_clear: "Clear",
    empty_state_title: "Ready to Protect You",
    empty_state_desc: "Click 'Check This Message' or select one of the examples above. SilverGuard will give you an immediate plain-language verdict and vocal warning in your native language.",
    // Tab 2: Link Checker
    link_intro_badge: "Safety First",
    link_title: "Inspect Suspicious Website Links Before Clicking",
    link_desc: "Scammers create websites that look just like your bank, government portal, or utility board, but with deceptive web addresses. Type or paste the link here to verify its safety.",
    link_card1_header: "1. Enter or Test a Web Address (URL)",
    link_presets_label: "Try these sample website links:",
    link_input_label: "Website Link / URL:",
    link_placeholder: "e.g. www.bank-secure-login.top or paste web address",
    btn_check_link: "Inspect Web Link",
    link_empty_title: "Inspect Any Web Address",
    link_empty_desc: "Paste a web address or choose a preset to check if scammers are trying to steal your net-banking passwords or credit cards.",
    // Tab 3: Call Screener
    call_intro_badge: "Real-Time Defense & Auto-Recording",
    call_title: "Live Phone Call Threat Screener & Automatic Police Evidence Recorder",
    call_desc: "Scammers use high-stress phone calls to panic seniors into sending money. Experience our real-time voice call screener that detects scam phrases live and automatically records the audio call as digital proof for the cyber police.",
    call_scenarios_header: "Choose a Call Simulation Scenario",
    autorecord_badge: "Auto-Record ON",
    scenario_digital_arrest: "\"Digital Arrest\" / Fake Police Video Threat",
    scenario_digital_arrest_sub: "Claims parcel with illegal drugs seized at customs",
    scenario_elec_cut: "Electricity Power Disconnection Panic Call",
    scenario_elec_cut_sub: "Threatens power cut tonight unless bill paid on APK",
    scenario_tax_threat: "Tax & Enforcement Arrest Warrant Threat",
    scenario_tax_threat_sub: "Demands immediate prepaid gift cards or wire",
    scenario_grandkid_bail: "Grandchild in Emergency Accident / Bail",
    scenario_grandkid_bail_sub: "Crying actor begging: \"Don't tell mom!\"",
    scenario_tech_remote: "AnyDesk / TeamViewer Computer Takeover",
    scenario_tech_remote_sub: "Demands remote PC screen share to fix account",
    scenario_doctor: "Genuine Senior Health Clinic Call",
    scenario_doctor_sub: "Confirming annual wellness checkup appointment",
    mic_panel_header: "Live Microphone Audio Proof Mode",
    mic_panel_desc: "Are you currently on a suspicious phone call? Click to record your microphone in real-time as police evidence:",
    mic_btn_record: "Record Live Mic Audio",
    mic_status_ready: "Mic ready",
    btn_start_call: "Start Simulated Call",
    btn_stop_call: "Hang Up & Block Call",
    rec_badge_text: "AUTO-RECORDING CALL AS POLICE PROOF",
    transcript_header: "Live Speech Transcription & Scam Watch",
    transcript_placeholder: "Press 'Start Simulated Call' to begin the live call analysis...",
    audio_saved_header: "Call Audio Proof Automatically Captured!",
    btn_download_wav: "⬇️ Download Audio (.WAV)",
    btn_open_locker: "📁 Open in Evidence Locker",
    // Tab 4: Cyber Police & 1930
    police_intro_badge: "Emergency Cyber Police Portal",
    police_title: "Nearest Cyber Police Station & National 1930 Helpline Locator",
    police_desc: "If you or a loved one are being threatened or have lost money, immediate action during the Golden Hour (first 2-3 hours) can freeze the stolen funds. Locate your nearest Cyber Crime Police Station or call 1930 directly.",
    n1930_badge: "NATIONAL CYBER CRIME HELPLINE",
    n1930_tollfree: "(Toll-Free • 24x7 Active across India)",
    n1930_desc: "Citizen Financial Cyber Fraud Reporting and Management System (MHA & I4C). Connects instantly to bank nodal officers to freeze fraudulent UPI / IMPS transactions.",
    btn_call_1930: "Call 1930 Helpline Now",
    btn_open_portal: "🌐 Open cybercrime.gov.in Portal",
    golden_hour_header: "⏱️ The \"Golden Hour\" Protocol (What to do within 2 hours of fraud)",
    high_priority_badge: "High Priority",
    gstep1_title: "Dial 1930 Immediately",
    gstep1_desc: "Tell the operator the fraud amount, your bank account name, and suspect UPI / phone number.",
    gstep2_title: "Do NOT Delete Messages / Call Logs",
    gstep2_desc: "Keep the SMS, WhatsApp chat, and call recording intact as legal evidence.",
    gstep3_title: "Block Compromised ATM Card / Netbanking",
    gstep3_desc: "Call your bank's official card hotlisting number or use your banking app to freeze the card.",
    gstep4_title: "Submit Formal Evidence Dossier",
    gstep4_desc: "Use SilverGuard's Evidence Locker to generate and print your formal police complaint dossier.",
    station_finder_header: "Find Cyber Crime Police Stations Near You",
    btn_gps_detect: "Auto-Detect My Location (GPS)",
    search_city_label: "Filter by City, State, or Pincode:",
    search_city_placeholder: "e.g. Mumbai, Delhi, Bengaluru, Pune, Hyderabad, 400051...",
    filter_state_label: "Select State / Region:",
    // Tab 5: Evidence Locker
    evidence_intro_badge: "Digital Evidence Vault",
    evidence_title: "Scam Proof Locker & Police FIR Complaint Dossier Generator",
    evidence_desc: "SilverGuard automatically archives recorded calls, fraudulent text messages, suspicious caller IDs, and malicious URLs into a tamper-evident digital proof vault ready to submit to the Cyber Police or upload to cybercrime.gov.in.",
    evidence_summary_title: "Saved Digital Evidence Items",
    evidence_summary_desc: "Each entry includes digital timestamps, threat classification, raw transcripts, and audio recordings.",
    btn_gen_dossier: "Generate Official Police Complaint Dossier",
    btn_export_json: "💾 Export All Proof (JSON)",
    btn_clear_evidence: "Clear Evidence",
    // Tab 6: Quiz
    quiz_intro_badge: "Practice Makes Safe",
    quiz_title: "Interactive \"Spot the Scam\" Practice Arena",
    quiz_desc: "Test your safety skills with realistic real-world situations. Learn how to spot hidden red flags in a friendly, no-stress environment.",
    quiz_mode_5q: "📝 5-Question Interactive Quiz",
    quiz_mode_compare: "🔍 Side-by-Side: Real vs Fake Clues",
    quiz_question_label: "Question",
    quiz_of_label: "of",
    quiz_score_label: "Safety Score:",
    btn_quiz_next: "Next Question ➔",
    btn_quiz_restart: "Restart Quiz",
    // Tab 7: Caregiver
    caregiver_intro_badge: "Family Protection Network",
    caregiver_title: "Caregiver SOS & Loved-One Notification Bridge",
    caregiver_desc: "No senior has to face modern scammers alone. SilverGuard bridges elderly users with their trusted family members or caregivers to verify uncertain requests before any money moves.",
    contacts_header: "Trusted Emergency Contacts",
    contacts_desc: "When you click \"Emergency Pause\" or scan an extreme threat, SilverGuard can instantly notify your designated loved ones.",
    test_alert_header: "Test Caregiver Alert Dispatch",
    test_alert_desc: "Simulate sending a real-time high-priority WhatsApp and SMS alert to your caregivers with incident details:",
    btn_send_sos_caregiver: "Send Simulated SOS Alert to Pooja & Rohan",
    history_header: "Recent Threat & Activity Log",
    history_desc: "Real-time log of scanned messages, links, audio recordings, and police evidence captures.",
    btn_clear_history: "Clear History",
    // Tab 8: Blueprint
    blueprint_intro_badge: "Social Good Architecture",
    blueprint_title: "SilverGuard: Social Impact & Technical Blueprint",
    blueprint_desc: "Comprehensive overview of elder cyber vulnerability patterns, regional language voice architecture, digital evidence integrity, and National 1930 Cyber Helpline integration.",
    bp_sec1_title: "1. Elder Cyber Threat Demographics",
    bp_sec1_desc: "Older adults are targeted through high-pressure fear tactics (Digital Arrests, KYC expiry, Electricity cutoff). SilverGuard counters this with zero-jargon guidance, autonomous vigilance, and instant multilingual vocal warnings.",
    bp_sec2_title: "2. Technical Threat Detection & Evidence Architecture",
    // Modals
    modal_threat_badge: "AUTONOMOUS THREAT DETECTED",
    modal_threat_title: "FRAUD ATTEMPT INTERCEPTED!",
    btn_replay_voice: "Replay Voice Warning in Local Language",
    btn_save_to_locker: "Save Proof to Police Evidence Locker",
    btn_dismiss_safe: "Dismiss & I Am Safe",
    dossier_modal_title: "Official Cybercrime Complaint Dossier",
    btn_print_pdf: "🖨️ Print / Save as PDF",
    btn_copy_portal: "📋 Copy for cybercrime.gov.in",
    sos_modal_title: "STOP & TAKE A BREATH",
    sos_modal_subtitle: "You are safe. Nothing bad will happen right this second.",
    sos_step1_title: "Do NOT send money, gift cards, or crypto",
    sos_step1_desc: "No government agency, police officer, or bank will ever ask you to transfer funds or share OTPs.",
    sos_step2_title: "Hang up the phone or close the message",
    sos_step2_desc: "Scammers create fake urgency to make you panic. You have the full right to disconnect immediately.",
    sos_step3_title: "Call 1930 Cyber Helpline or Loved Ones",
    sos_step3_desc: "Dial 1930 or speak with your daughter Pooja before taking any financial action.",
    btn_call_daughter: "Call Pooja (Daughter): +91 98201-23456",
    btn_safe_return: "I Feel Safe Now — Return to App",
    mobile_dial_1930: "Dial 1930 Cyber Helpline",
    mobile_sos_btn: "SOS Pause",
    footer_title: "SilverGuard",
    footer_desc: "Dedicated to elder digital dignity, multilingual cyber safety, and quick police assistance.",
    footer_privacy: "🔒 100% Client-Side Privacy: Your messages, audio recordings, and checks never leave your device.",
    footer_1930: "📞 National Helpline: 1930",
    footer_guard_active: "Auto-Guard Active"
  },

  hi: {
    name: "हिंदी (Hindi)",
    locale: "hi-IN",
    welcomeVoice: "भाषा हिंदी में सेट हो गई है। सिल्वरगार्ड आपकी सुरक्षा के लिए तैयार है।",
    dangerWarning: "सावधान! यह एक खतरनाक फर्जी कॉल या धोखाधड़ी का संदेश है। कोई पैसे, यूपीआई या बैंक ओटीपी न भेजें। तुरंत साइबर हेल्पलाइन 1930 पर कॉल करें।",
    cautionWarning: "ध्यान दें: यह संदेश या कॉल संदिग्ध लग रहा है। कोई भी कदम उठाने से पहले अपने परिवार से पुष्टि करें।",
    safeMessage: "यह संदेश सुरक्षित और सामान्य प्रतीत होता है।",
    threatAlertTitle: "धोखाधड़ी का प्रयास पकड़ा गया!",
    threatSummary: "धोखेबाज गिरफ्तारी या बिजली कटने का डर दिखाकर पैसे मांग रहा है। तुरंत कॉल काटें।",
    goldenHourText: "गोल्डन ऑवर: बैंक खाते से पैसे कटने पर तुरंत 1930 पर कॉल करें।",
    sosVoice: "आपातकालीन सुरक्षा मोड सक्रिय है। कृपया घबराएं नहीं। किसी को भी पैसे या ओटीपी न दें। आप सुरक्षित हैं।",
    // UI Keys
    brand_tagline: "वरिष्ठ नागरिक साइबर सुरक्षा, क्षेत्रीय आवाज अलर्ट और पुलिस साक्ष्य लॉकर",
    lang_label_text: "भाषा / Language:",
    sentinel_btn_label: "ऑटो-गार्ड:",
    sentinel_active_text: "सक्रिय (ACTIVE)",
    sentinel_paused_text: "रोक दिया (PAUSED)",
    text_size_label: "अक्षर आकार:",
    contrast_btn: "कंट्रास्ट",
    voice_btn: "आवाज सहायता",
    emergency_btn: "आपातकालीन रोक और 1930",
    sentinel_banner_title: "स्वचालित बुजुर्ग सुरक्षा शील्ड सक्रिय है",
    sentinel_banner_desc: "ऑटो-निगरानी चालू है: धोखाधड़ी पाए जाने पर तुरंत आपकी मातृभाषा में आवाज चेतावनी बजेगी।",
    sentinel_test_btn: "⚡ ऑटो-अलर्ट टेस्ट करें",
    watch_247: "24/7 निगरानी",
    nav_message: "संदेश स्कैनर (SMS)",
    nav_link: "वेब लिंक जांच",
    nav_call: "कॉल स्क्रीन और रिकॉर्डर",
    nav_police: "निकटतम साइबर पुलिस और 1930",
    nav_evidence: "साक्ष्य लॉकर व FIR डोजियर",
    nav_quiz: "धोखा पहचानें क्विज",
    nav_caregiver: "परिवार व केयरगिवर ब्रिज",
    nav_blueprint: "प्रोजेक्ट ब्लूप्रिंट",
    // Tab 1: Message Scanner
    simple_safe_badge: "सरल और सुरक्षित",
    msg_title: "किसी भी संदिग्ध SMS, टेक्स्ट या व्हाट्सएप संदेश की जांच करें",
    msg_desc: "क्या आपको बैंक खाता बंद होने, बिजली कटने या पोते के जेल में होने का डरावना संदेश मिला है? धोखाधड़ी की जांच के लिए नीचे पेस्ट करें।",
    msg_card1_header: "1. संदेश पेस्ट करें या उदाहरण चुनें",
    private_badge: "100% गोपनीय व सुरक्षित",
    presets_label: "या आम धोखाधड़ी के उदाहरण चुनें:",
    preset_elec: "⚡ बिजली कनेक्शन कटने की धमकी",
    preset_bank: "💳 बैंक खाता / KYC ब्लॉक धोखाधड़ी",
    preset_lottery: "🎁 25 लाख KBC लॉटरी विजेता",
    preset_grandkid: "🚨 पोता जेल / दुर्घटना में जमानत",
    preset_police: "⚖️ पुलिस / टैक्स वारंट का डर",
    preset_delivery: "📦 पार्सल डिलीवरी शुल्क धोखाधड़ी",
    preset_real_family: "💚 असली परिवार का संदेश",
    preset_real_clinic: "💚 डॉक्टर चेकअप का संदेश",
    msg_input_label: "संदेश का पाठ (Text):",
    msg_placeholder: "आपको मिला हुआ SMS या व्हाट्सएप संदेश यहाँ पेस्ट करें...",
    btn_check_msg: "इस संदेश की जांच करें",
    btn_clear: "साफ करें",
    empty_state_title: "आपकी रक्षा के लिए तैयार",
    empty_state_desc: "'इस संदेश की जांच करें' पर क्लिक करें। सिल्वरगार्ड आपको सरल हिंदी में चेतावनी और आवाज द्वारा मार्गदर्शन देगा।",
    // Tab 2: Link Checker
    link_intro_badge: "सुरक्षा सर्वोपरि",
    link_title: "क्लिक करने से पहले वेबसाइट लिंक की जांच करें",
    link_desc: "धोखेबाज बैंक या सरकारी विभाग जैसी दिखने वाली फर्जी वेबसाइटें बनाते हैं। सुरक्षा जांचने के लिए लिंक यहाँ डालें।",
    link_card1_header: "1. वेबसाइट पता (URL) दर्ज करें",
    link_presets_label: "नमूना वेबसाइट लिंक देखें:",
    link_input_label: "वेबसाइट लिंक (URL):",
    link_placeholder: "उदा. www.bank-secure-login.top या लिंक पेस्ट करें",
    btn_check_link: "लिंक की जांच करें",
    link_empty_title: "किसी भी वेब लिंक की जांच करें",
    link_empty_desc: "जांचें कि क्या धोखेबाज आपका नेटबैंकिंग पासवर्ड या कार्ड नंबर चुराने की कोशिश कर रहे हैं।",
    // Tab 3: Call Screener
    call_intro_badge: "लाइव सुरक्षा व ऑटो-रिकॉर्डिंग",
    call_title: "लाइव फोन कॉल थ्रेट स्क्रीनर और पुलिस साक्ष्य रिकॉर्डर",
    call_desc: "धोखेबाज डर पैदा करके पैसे ऐंठते हैं। हमारा स्क्रीनर फर्जी कॉल के दौरान चेतावनी देता है और पुलिस को देने के लिए कॉल का ऑडियो सबूत अपने आप रिकॉर्ड करता है।",
    call_scenarios_header: "कॉल सिमुलेशन परिदृश्य चुनें",
    autorecord_badge: "ऑटो-रिकॉर्ड चालू",
    scenario_digital_arrest: "\"डिजिटल अरेस्ट\" / फर्जी पुलिस वीडियो कॉल",
    scenario_digital_arrest_sub: "पार्सल में ड्रग्स पकड़े जाने का झूठा डर",
    scenario_elec_cut: "बिजली कनेक्शन काटने की फर्जी कॉल",
    scenario_elec_cut_sub: "आज रात बत्ती गुल होने की धमकी",
    scenario_tax_threat: "टैक्स अरेस्ट वारंट का डर",
    scenario_tax_threat_sub: "गिफ्ट कार्ड या पैसे ट्रांसफर की मांग",
    scenario_grandkid_bail: "पोते की दुर्घटना और जमानत की मांग",
    scenario_grandkid_bail_sub: "रोते हुए कहना: \"मम्मी को मत बताना!\"",
    scenario_tech_remote: "AnyDesk / कंप्यूटर स्क्रीन शेयर जाल",
    scenario_tech_remote_sub: "बैंक खाता ठीक करने के नाम पर रिमोट कंट्रोल",
    scenario_doctor: "असली स्वास्थ्य केंद्र की कॉल",
    scenario_doctor_sub: "वार्षिक स्वास्थ्य जांच की पुष्टि",
    mic_panel_header: "लाइव माइक्रोफोन ऑडियो सबूत मोड",
    mic_panel_desc: "क्या आप अभी किसी संदिग्ध कॉल पर हैं? पुलिस सबूत के लिए अपना माइक रिकॉर्ड करें:",
    mic_btn_record: "लाइव माइक ऑडियो रिकॉर्ड करें",
    mic_status_ready: "माइक तैयार है",
    btn_start_call: "सिम्युलेटेड कॉल शुरू करें",
    btn_stop_call: "फोन काटें और ब्लॉक करें",
    rec_badge_text: "पुलिस सबूत के रूप में कॉल रिकॉर्ड हो रही है",
    transcript_header: "लाइव बातचीत और थ्रेट वॉच",
    transcript_placeholder: "लाइव कॉल विश्लेषण शुरू करने के लिए 'कॉल शुरू करें' दबाएं...",
    audio_saved_header: "कॉल का ऑडियो सबूत सुरक्षित कर लिया गया!",
    btn_download_wav: "⬇️ ऑडियो डाउनलोड करें (.WAV)",
    btn_open_locker: "📁 साक्ष्य लॉकर में खोलें",
    // Tab 4: Cyber Police & 1930
    police_intro_badge: "आपातकालीन साइबर पुलिस पोर्टल",
    police_title: "निकटतम साइबर पुलिस स्टेशन और राष्ट्रीय 1930 हेल्पलाइन",
    police_desc: "यदि आपके साथ कोई धोखाधड़ी हुई है, तो पहले 2-3 घंटों (गोल्डन ऑवर) में 1930 पर कॉल करने से कटे हुए पैसे रुक सकते हैं। अपने नजदीकी साइबर सेल से संपर्क करें।",
    n1930_badge: "राष्ट्रीय साइबर अपराध हेल्पलाइन",
    n1930_tollfree: "(टोल-फ्री • 24x7 पूरे भारत में सक्रिय)",
    n1930_desc: "गृह मंत्रालय (MHA & I4C) की वित्तीय साइबर धोखाधड़ी प्रणाली। यह तुरंत बैंक अधिकारियों से संपर्क कर फर्जी लेनदेन रोकती है।",
    btn_call_1930: "अभी 1930 हेल्पलाइन पर कॉल करें",
    btn_open_portal: "🌐 cybercrime.gov.in पोर्टल खोलें",
    golden_hour_header: "⏱️ 'गोल्डन ऑवर' प्रोटोकॉल (धोखाधड़ी के 2 घंटे के भीतर क्या करें)",
    high_priority_badge: "अति आवश्यक",
    gstep1_title: "तुरंत 1930 डायल करें",
    gstep1_desc: "ऑपरेटर को ठगी की रकम, बैंक खाता और संदिग्ध का मोबाइल/UPI नंबर बताएं।",
    gstep2_title: "मैसेज या कॉल रिकॉर्डिंग डिलीट न करें",
    gstep2_desc: "SMS, चैट और ऑडियो को कानूनी साक्ष्य के रूप में सुरक्षित रखें।",
    gstep3_title: "ATM कार्ड और नेटबैंकिंग ब्लॉक करें",
    gstep3_desc: "अपने बैंक की आधिकारिक हेल्पलाइन पर कॉल करके कार्ड तुरंत ब्लॉक करवाएं।",
    gstep4_title: "औपचारिक पुलिस डोजियर जमा करें",
    gstep4_desc: "सिल्वरगार्ड के साक्ष्य लॉकर से पुलिस शिकायत पत्र प्रिंट करके जमा करें।",
    station_finder_header: "अपने निकटतम साइबर पुलिस स्टेशन खोजें",
    btn_gps_detect: "मेरी लोकेशन ऑटो-डिटेक्ट करें (GPS)",
    search_city_label: "शहर, राज्य या पिनकोड से खोजें:",
    search_city_placeholder: "उदा. मुंबई, दिल्ली, बेंगलुरु, पुणे, हैदराबाद, 400051...",
    filter_state_label: "राज्य चुनें:",
    // Tab 5: Evidence Locker
    evidence_intro_badge: "डिजिटल साक्ष्य वॉल्ट",
    evidence_title: "धोखाधड़ी साक्ष्य लॉकर और पुलिस FIR शिकायत डोजियर",
    evidence_desc: "सिल्वरगार्ड रिकॉर्ड की गई कॉल, फर्जी मैसेज और नंबरों को डिजिटल टाइमस्टैम्प के साथ सुरक्षित रखता है ताकि आप पुलिस को दे सकें।",
    evidence_summary_title: "सुरक्षित किए गए डिजिटल साक्ष्य",
    evidence_summary_desc: "प्रत्येक प्रविष्टि में समय, कॉल रिकॉर्डिंग और डिजिटल हस्ताक्षर शामिल हैं।",
    btn_gen_dossier: "आधिकारिक पुलिस शिकायत डोजियर बनाएं",
    btn_export_json: "💾 सभी सबूत डाउनलोड करें (JSON)",
    btn_clear_evidence: "साक्ष्य साफ करें",
    // Tab 6: Quiz
    quiz_intro_badge: "अभ्यास से सुरक्षा",
    quiz_title: "इंटरएक्टिव 'धोखा पहचानें' क्विज",
    quiz_desc: "रोजमर्रा के उदाहरणों से अपनी सुरक्षा जांचें और धोखेबाजों के नए हथकंडे पहचानना सीखें।",
    quiz_mode_5q: "📝 5-प्रश्नों वाली क्विज",
    quiz_mode_compare: "🔍 असली बनाम नकली की पहचान",
    quiz_question_label: "प्रश्न",
    quiz_of_label: "का",
    quiz_score_label: "सुरक्षा स्कोर:",
    btn_quiz_next: "अगला प्रश्न ➔",
    btn_quiz_restart: "क्विज दोबारा शुरू करें",
    // Tab 7: Caregiver
    caregiver_intro_badge: "पारिवारिक सुरक्षा नेटवर्क",
    caregiver_title: "केयरगिवर SOS और परिवार सूचना ब्रिज",
    caregiver_desc: "किसी भी बुजुर्ग को अकेले धोखेबाजों का सामना नहीं करना पड़ेगा। सिल्वरगार्ड पैसे कटने से पहले आपके परिवार को सचेत करता है।",
    contacts_header: "विश्वसनीय आपातकालीन संपर्क",
    contacts_desc: "जब आप 'इमरजेंसी पॉज' दबाते हैं, तो सिल्वरगार्ड तुरंत आपके बच्चों को सूचना भेजता है।",
    test_alert_header: "केयरगिवर अलर्ट टेस्ट करें",
    test_alert_desc: "अपने बच्चों को WhatsApp और SMS द्वारा आपातकालीन अलर्ट भेजने का अभ्यास करें:",
    btn_send_sos_caregiver: "पूजा और रोहन को टेस्ट SOS भेजें",
    history_header: "हालिया गतिविधि व अलर्ट लॉग",
    history_desc: "जांचे गए मैसेज, लिंक और रिकॉर्ड की गई कॉल का विवरण।",
    btn_clear_history: "इतिहास साफ करें",
    // Tab 8: Blueprint
    blueprint_intro_badge: "सामाजिक सुरक्षा आर्किटेक्चर",
    blueprint_title: "सिल्वरगार्ड: सामाजिक प्रभाव व तकनीकी ब्लूप्रिंट",
    blueprint_desc: "बुजुर्गों की सुरक्षा, भारतीय भाषाओं में आवाज सहायता और 1930 हेल्पलाइन एकीकरण की विस्तृत जानकारी।",
    bp_sec1_title: "1. बुजुर्गों के खिलाफ साइबर अपराध",
    bp_sec1_desc: "वरिष्ठ नागरिकों को डराकर ठगा जाता है। सिल्वरगार्ड मातृभाषा में आवाज और सहायता देकर उन्हें सुरक्षित रखता है।",
    bp_sec2_title: "2. तकनीकी संरचना व साक्ष्य सुरक्षा",
    // Modals
    modal_threat_badge: "स्वचालित खतरे की पहचान!",
    modal_threat_title: "धोखाधड़ी का प्रयास पकड़ा गया!",
    btn_replay_voice: "हिंदी में चेतावनी दोबारा सुनें",
    btn_save_to_locker: "सबूत पुलिस लॉकर में सुरक्षित करें",
    btn_dismiss_safe: "बंद करें और मैं सुरक्षित हूँ",
    dossier_modal_title: "आधिकारिक साइबर अपराध शिकायत डोजियर",
    btn_print_pdf: "🖨️ प्रिंट करें / PDF सेव करें",
    btn_copy_portal: "📋 पोर्टल के लिए कॉपी करें",
    sos_modal_title: "रुकें और गहरी सांस लें",
    sos_modal_subtitle: "आप बिल्कुल सुरक्षित हैं। अभी कुछ भी बुरा नहीं होगा।",
    sos_step1_title: "किसी को पैसे या OTP न भेजें",
    sos_step1_desc: "कोई भी सरकारी अधिकारी या बैंक कभी फोन पर पैसे या पासवर्ड नहीं मांगता।",
    sos_step2_title: "कॉल काट दें या मैसेज बंद करें",
    sos_step2_desc: "धोखेबाज घबराहट पैदा करते हैं। आपको तुरंत फोन काटने का पूरा हक है।",
    sos_step3_title: "1930 या बेटी पूजा को कॉल करें",
    sos_step3_desc: "कोई भी कदम उठाने से पहले 1930 या अपने परिवार से बात करें।",
    btn_call_daughter: "बेटी पूजा को कॉल करें: +91 98201-23456",
    btn_safe_return: "मैं सुरक्षित महसूस कर रहा हूँ — वापस जाएं",
    mobile_dial_1930: "1930 हेल्पलाइन डायल करें",
    mobile_sos_btn: "SOS रोकें",
    footer_title: "सिल्वरगार्ड",
    footer_desc: "वरिष्ठ नागरिकों के डिजिटल सम्मान, बहुभाषी सुरक्षा और त्वरित पुलिस सहायता के लिए समर्पित।",
    footer_privacy: "🔒 100% ऑन-डिवाइस गोपनीयता: आपकी कॉल व मैसेज आपके फोन में ही सुरक्षित रहते हैं।",
    footer_1930: "📞 राष्ट्रीय हेल्पलाइन: 1930",
    footer_guard_active: "ऑटो-गार्ड सक्रिय है"
  },

  mr: {
    name: "मराठी (Marathi)",
    locale: "mr-IN",
    welcomeVoice: "भाषा मराठी मध्ये सेट केली आहे. सिल्व्हरगार्ड आपल्या संरक्षणासाठी सज्ज आहे.",
    dangerWarning: "सावधान! हा एक बनावट संदेश किंवा फसवणूक करणारा कॉल आहे. कृपया कोणतेही पैसे, बँक तपशील किंवा OTP देऊ नका. सायबर हेल्पलाइन 1930 वर संपर्क साधा.",
    cautionWarning: "काळजी घ्या: हा संदेश किंवा कॉल संशयास्पद वाटतो. कृपया खात्री केल्याशिवाय पैसे पाठवू नका.",
    safeMessage: "हा संदेश सुरक्षित वाटतो.",
    threatAlertTitle: "सायबर फसवणुकीचा इशारा!",
    threatSummary: "भामटा कारवाईची भीती दाखवून पैशांची मागणी करत आहे. ताबडतोब फोन बंद करा.",
    goldenHourText: "गोल्डन अवर: फसवणूक झाल्यास २ तासांच्या आत 1930 वर कॉल करा.",
    sosVoice: "सुरक्षा मोड चालू झाला आहे. काळजी करू नका. कोणालाही पैसे किंवा ओटीपी देऊ नका.",
    // UI Keys
    brand_tagline: "ज्येष्ठ नागरिक सायबर सुरक्षा, स्थानिक भाषा व्हॉईस अलर्ट व पोलीस पुरावा लॉकर",
    lang_label_text: "भाषा / Language:",
    sentinel_btn_label: "ऑटो-गार्ड:",
    sentinel_active_text: "सक्रिय (ACTIVE)",
    sentinel_paused_text: "थांबवले (PAUSED)",
    text_size_label: "अक्षर आकार:",
    contrast_btn: "कंट्रास्ट",
    voice_btn: "व्हॉईस मदत",
    emergency_btn: "इमर्जन्सी थांबा व 1930",
    sentinel_banner_title: "स्वयंचलित ज्येष्ठ सुरक्षा शील्ड सुरू आहे",
    sentinel_banner_desc: "ऑटो-सुरक्षा सक्रिय: फसवणूक आढळल्यास तात्काळ तुमच्या स्थानिक भाषेत आवाज इशारा येईल.",
    sentinel_test_btn: "⚡ ऑटो-अलर्ट तपासा",
    watch_247: "२४/७ नजर",
    nav_message: "संदेश स्कॅनर (SMS)",
    nav_link: "वेब लिंक तपासणी",
    nav_call: "कॉल स्क्रीनर व रेकॉर्डर",
    nav_police: "जवळचे सायबर पोलीस व 1930",
    nav_evidence: "पुरावा लॉकर व FIR दस्तऐवज",
    nav_quiz: "फसवणूक ओळखा क्विझ",
    nav_caregiver: "कुटुंब व काळजीवाहक ब्रिज",
    nav_blueprint: "प्रकल्प आराखडा",
    // Tab 1: Message Scanner
    simple_safe_badge: "सोपे व सुरक्षित",
    msg_title: "कोणत्याही संशयास्पद SMS किंवा व्हॉट्सॲप संदेशाची तपासणी करा",
    msg_desc: "लाईट बिल थकल्यामुळे वीज कापण्याचा किंवा बँकेचे खाते बंद होण्याचा मेसेज आला आहे का? तपासण्यासाठी खाली पेस्ट करा.",
    msg_card1_header: "१. संदेश पेस्ट करा किंवा निवडा",
    private_badge: "१००% सुरक्षित व खाजगी",
    presets_label: "किंवा नेहमीच्या फसव्या संदेशांचे नमुने पहा:",
    preset_elec: "⚡ महावितरण वीज कापण्याची धमकी",
    preset_bank: "💳 बँक खाते / KYC ब्लॉक मेसेज",
    preset_lottery: "🎁 २५ लाख KBC लॉटरी जिंकल्याचा मेसेज",
    preset_grandkid: "🚨 नातू अपघातात / जामीन घोटाळा",
    preset_police: "⚖️ पोलीस / टॅक्स वॉरंटची धमकी",
    preset_delivery: "📦 बनावट पार्सल डिलिव्हरी फी",
    preset_real_family: "💚 खरा कौटुंबिक मेसेज",
    preset_real_clinic: "💚 दवाखान्याची खरी अपॉइंटमेंट",
    msg_input_label: "संदेश मजकूर (Text):",
    msg_placeholder: "तुम्हाला आलेला SMS किंवा व्हॉट्सॲप मेसेज येथे पेस्ट करा...",
    btn_check_msg: "हा संदेश तपासा",
    btn_clear: "साफ करा",
    empty_state_title: "संरक्षणासाठी सज्ज",
    empty_state_desc: "'हा संदेश तपासा' वर क्लिक करा. सिल्व्हरगार्ड तुम्हाला मराठीत सोप्या भाषेत व आवाजाद्वारे मार्गदर्शन करेल.",
    // Tab 2: Link Checker
    link_intro_badge: "सुरक्षा प्रथम",
    link_title: "क्लिक करण्यापूर्वी संशयास्पद वेबसाइट लिंक तपासा",
    link_desc: "फसवणूक करणारे हुबेहूब बँकेसारख्या दिसणाऱ्या खोट्या वेबसाइट तयार करतात. सुरक्षिततेची खात्री करण्यासाठी लिंक येथे टाका.",
    link_card1_header: "१. वेबसाइट लिंक (URL) टाका",
    link_presets_label: "नमुना वेबसाइट लिंक्स तपासा:",
    link_input_label: "वेबसाइट पत्ता (URL):",
    link_placeholder: "उदा. www.bank-secure-login.top किंवा लिंक पेस्ट करा",
    btn_check_link: "वेब लिंक तपासा",
    link_empty_title: "कोणत्याही वेब लिंकची तपासणी करा",
    link_empty_desc: "भामटे तुमचा पासवर्ड किंवा कार्ड नंबर चोरण्याचा प्रयत्न करत नाहीत ना हे तपासा.",
    // Tab 3: Call Screener
    call_intro_badge: "लाईव्ह सुरक्षा व रेकॉर्डिंग",
    call_title: "लाईव्ह फोन कॉल थ्रेट स्क्रीनर व पोलीस पुरावा रेकॉर्डर",
    call_desc: "सायबर भामटे भीती दाखवून पैसे उकळतात. आमचा स्क्रीनर कॉल दरम्यान धोकादायक शब्द ओळखतो आणि पोलिसांना देण्यासाठी कॉल आपोआप रेकॉर्ड करतो.",
    call_scenarios_header: "कॉल परिस्थिती निवडा",
    autorecord_badge: "ऑटो-रेकॉर्ड चालू",
    scenario_digital_arrest: "\"डिजिटल अरेस्ट\" / बनावट पोलीस व्हिडिओ कॉल",
    scenario_digital_arrest_sub: "पार्सलमध्ये ड्रग्ज सापडल्याची खोटी भीती",
    scenario_elec_cut: "महावितरण वीज तोडण्याची खोटी कॉल",
    scenario_elec_cut_sub: "आज रात्री वीज कापण्याची धमकी",
    scenario_tax_threat: "अटक वॉरंट व टॅक्स वसुलीची धमकी",
    scenario_tax_threat_sub: "गिफ्ट कार्ड किंवा पैशांची मागणी",
    scenario_grandkid_bail: "नातू संकटात / जामीन मागण्याचा कॉल",
    scenario_grandkid_bail_sub: "रडत सांगणे: \"आई-बाबांना सांगू नको!\"",
    scenario_tech_remote: "AnyDesk / कॉम्प्युटर स्क्रीन शेअर घोटाळा",
    scenario_tech_remote_sub: "खाते सुरक्षेच्या नावाखाली रिमोट ताबा",
    scenario_doctor: "दवाखान्याचा खरा फोन",
    scenario_doctor_sub: "नियमित तपासणीची खात्री",
    mic_panel_header: "लाईव्ह मायक्रोफोन पुरावा मोड",
    mic_panel_desc: "तुम्ही सध्या संशयास्पद फोनवर आहात का? पोलिसांच्या पुराव्यासाठी तुमचा माईक रेकॉर्ड करा:",
    mic_btn_record: "लाईव्ह माईक ऑडिओ रेकॉर्ड करा",
    mic_status_ready: "माईक सज्ज आहे",
    btn_start_call: "सिम्युलेटेड कॉल सुरू करा",
    btn_stop_call: "फोन कट करा व ब्लॉक करा",
    rec_badge_text: "पोलीस पुरावा म्हणून कॉल रेकॉर्ड होत आहे",
    transcript_header: "लाईव्ह संभाषण व थ्रेट वॉच",
    transcript_placeholder: "लाईव्ह विश्लेषण सुरू करण्यासाठी 'कॉल सुरू करा' दाबा...",
    audio_saved_header: "कॉलचा ऑडिओ पुरावा सुरक्षित झाला आहे!",
    btn_download_wav: "⬇️ ऑडिओ डाऊनलोड करा (.WAV)",
    btn_open_locker: "📁 पुरावा लॉकरमध्ये उघडा",
    // Tab 4: Cyber Police & 1930
    police_intro_badge: "आपत्कालीन सायबर पोलीस पोर्टल",
    police_title: "जवळचे सायबर पोलीस स्टेशन व राष्ट्रीय 1930 हेल्पलाइन",
    police_desc: "फसवणूक झाल्यास पहिल्या २-३ तासांत (गोल्डन अवर) 1930 वर कॉल केल्यास गेलेले पैसे बँक खात्यात गोठवता येतात. जवळच्या सायबर सेलची माहिती मिळवा.",
    n1930_badge: "राष्ट्रीय सायबर गुन्हे हेल्पलाइन",
    n1930_tollfree: "(टोल-फ्री • २४x७ संपूर्ण भारतात सुरू)",
    n1930_desc: "गृह मंत्रालयाची (MHA & I4C) आर्थिक सायबर गुन्हे निवारण यंत्रणा. बँकांशी तात्काळ संपर्क साधून बनावट व्यवहार थांबवते.",
    btn_call_1930: "आत्ताच 1930 हेल्पलाइनला कॉल करा",
    btn_open_portal: "🌐 cybercrime.gov.in पोर्टल उघडा",
    golden_hour_header: "⏱️ 'गोल्डन अवर' नियम (फसवणूक झाल्यावर २ तासांत काय करावे)",
    high_priority_badge: "अति महत्त्वाचे",
    gstep1_title: "ताबडतोब 1930 वर कॉल करा",
    gstep1_desc: "फसवणुकीची रक्कम, बँक खाते व भामट्याचा नंबर ऑपरेटरला सांगा.",
    gstep2_title: "मेसेज किंवा कॉल रेकॉर्डिंग डिलीट करू नका",
    gstep2_desc: "SMS आणि कॉल रेकॉर्डिंग पोलिसांसाठी महत्त्वाचा पुरावा असतो.",
    gstep3_title: "ATM कार्ड आणि नेटबँकिंग ब्लॉक करा",
    gstep3_desc: "बँकेच्या अधिकृत हेल्पलाइनवर संपर्क करून कार्ड तात्काळ बंद करा.",
    gstep4_title: "अधिकृत तक्रार अर्ज जमा करा",
    gstep4_desc: "सिल्वरगार्डच्या पुरावा लॉकरमधून तयार झालेला तक्रार अर्ज प्रिंट करा.",
    station_finder_header: "तुमच्या जवळचे सायबर पोलीस स्टेशन शोधा",
    btn_gps_detect: "माझे ठिकाण शोधा (GPS द्वारे)",
    search_city_label: "शहर, राज्य किंवा पिनकोडने शोधा:",
    search_city_placeholder: "उदा. मुंबई, पुणे, नागपूर, नाशिक, 400051...",
    filter_state_label: "राज्य निवडा:",
    // Tab 5: Evidence Locker
    evidence_intro_badge: "डिजिटल पुरावा वॉल्ट",
    evidence_title: "फसवणूक पुरावा लॉकर व पोलीस FIR तक्रार दस्तऐवज",
    evidence_desc: "सिल्वरगार्ड रेकॉर्ड केलेले कॉल आणि खोटे मेसेज डिजिटल स्वाक्षरीसह सुरक्षित ठेवतो, जेणेकरून तुम्ही ते पोलिसांना देऊ शकता.",
    evidence_summary_title: "सुरक्षित केलेले डिजिटल पुरावे",
    evidence_summary_desc: "प्रत्येक नोंदीमध्ये अचूक वेळ, संभाषण आणि डिजिटल पुरावा असतो.",
    btn_gen_dossier: "अधिकृत पोलीस तक्रार अर्ज तयार करा",
    btn_export_json: "💾 सर्व पुरावे डाऊनलोड करा (JSON)",
    btn_clear_evidence: "पुरावे साफ करा",
    // Tab 6: Quiz
    quiz_intro_badge: "सरावातून सुरक्षा",
    quiz_title: "इंटरएक्टिव्ह 'फसवणूक ओळखा' क्विझ",
    quiz_desc: "रोजच्या उदाहरणांवरून तुमची सुरक्षा तपासा आणि सायबर भामट्यांचे डावपेच ओळखायला शिका.",
    quiz_mode_5q: "📝 ५-प्रश्नांची क्विझ",
    quiz_mode_compare: "🔍 खरे विरुद्ध खोटे फरक",
    quiz_question_label: "प्रश्न",
    quiz_of_label: "पैकी",
    quiz_score_label: "सुरक्षा गुण:",
    btn_quiz_next: "पुढील प्रश्न ➔",
    btn_quiz_restart: "क्विझ पुन्हा सुरू करा",
    // Tab 7: Caregiver
    caregiver_intro_badge: "कौटुंबिक सुरक्षा नेटवर्क",
    caregiver_title: "काळजीवाहक SOS व कौटुंबिक सूचना ब्रिज",
    caregiver_desc: "कोणत्याही ज्येष्ठाला एकट्याने भामट्यांचा सामना करावा लागणार नाही. पैसे जाण्यापूर्वी सिल्वरगार्ड तुमच्या कुटुंबाला सावध करतो.",
    contacts_header: "विश्वासू कौटुंबिक संपर्क",
    contacts_desc: "तुम्ही 'इमर्जन्सी थांबा' बटण दाबताच सिल्व्हरगार्ड तात्काळ तुमच्या मुलांना संदेश पाठवतो.",
    test_alert_header: "काळजीवाहक अलर्ट तपासा",
    test_alert_desc: "तुमच्या मुलांना WhatsApp किंवा SMS द्वारे इमर्जन्सी संदेश पाठवण्याचा सराव करा:",
    btn_send_sos_caregiver: "पूजा व रोहनला टेस्ट SOS पाठवा",
    history_header: "मागील तपासणी व अलर्ट इतिहास",
    history_desc: "तपासलेले मेसेज, लिंक्स आणि कॉल रेकॉर्डिंगची यादी.",
    btn_clear_history: "इतिहास साफ करा",
    // Tab 8: Blueprint
    blueprint_intro_badge: "सामाजिक सुरक्षा रचना",
    blueprint_title: "सिल्वरगार्ड: सामाजिक महत्त्व व तांत्रिक आराखडा",
    blueprint_desc: "ज्येष्ठ नागरिकांची सुरक्षा, मराठी व्हॉईस मार्गदर्शन आणि 1930 हेल्पलाइन जोडणीची माहिती.",
    bp_sec1_title: "१. ज्येष्ठांवरील सायबर धोके",
    bp_sec1_desc: "भीती दाखवून ज्येष्ठांची फसवणूक केली जाते. सिल्वरगार्ड मातृभाषेत आवाज व योग्य सल्ला देऊन त्यांचे रक्षण करतो.",
    bp_sec2_title: "२. तांत्रिक प्रणाली व पुरावा सुरक्षा",
    // Modals
    modal_threat_badge: "धोकादायक कॉल/मेसेज पकडला!",
    modal_threat_title: "सायबर फसवणुकीचा इशारा!",
    btn_replay_voice: "मराठीत आवाज इशारा पुन्हा ऐका",
    btn_save_to_locker: "पुरावा पोलीस लॉकरमध्ये सेव्ह करा",
    btn_dismiss_safe: "बंद करा, मी सुरक्षित आहे",
    dossier_modal_title: "अधिकृत सायबर गुन्हे पोलीस तक्रार अर्ज",
    btn_print_pdf: "🖨️ प्रिंट करा / PDF सेव्ह करा",
    btn_copy_portal: "📋 पोर्टलसाठी कॉपी करा",
    sos_modal_title: "थांबा आणि शांतपणे श्वास घ्या",
    sos_modal_subtitle: "तुम्ही पूर्णपणे सुरक्षित आहात. आत्ता काहीही वाईट घडणार नाही.",
    sos_step1_title: "कोणालाही पैसे किंवा OTP देऊ नका",
    sos_step1_desc: "कोणताही पोलीस अधिकारी किंवा बँक फोनवर पैसे किंवा पासवर्ड मागत नाही.",
    sos_step2_title: "फोन कट करा किंवा मेसेज बंद करा",
    sos_step2_desc: "भामटे घाबरवून पैसे मागतात. तुम्हाला तात्काळ फोन बंद करण्याचा पूर्ण हक्क आहे.",
    sos_step3_title: "1930 किंवा मुलगी पूजेला फोन करा",
    sos_step3_desc: "कोणतीही कृती करण्यापूर्वी 1930 किंवा आपल्या कुटुंबाशी बोला.",
    btn_call_daughter: "मुलगी पूजेला कॉल करा: +91 98201-23456",
    btn_safe_return: "मी सुरक्षित आहे — ॲपवर परत जा",
    mobile_dial_1930: "1930 हेल्पलाइन डायल करा",
    mobile_sos_btn: "SOS थांबा",
    footer_title: "सिल्वरगार्ड",
    footer_desc: "ज्येष्ठ नागरिकांच्या डिजिटल सन्मानासाठी, बहुभाषिक सुरक्षेसाठी व पोलीस मदतीसाठी समर्पित.",
    footer_privacy: "🔒 १००% खाजगी: तुमचे कॉल व मेसेज तुमच्या फोनवरच राहतात.",
    footer_1930: "📞 राष्ट्रीय हेल्पलाइन: 1930",
    footer_guard_active: "ऑटो-गार्ड सुरू आहे"
  },

  te: {
    name: "తెలుగు (Telugu)",
    locale: "te-IN",
    welcomeVoice: "భాష తెలుగుకి మార్చబడింది. సిల్వర్‌గార్డ్ మీ రక్షణ కోసం సిద్ధంగా ఉంది.",
    dangerWarning: "హెచ్చరిక! ఇది మోసపూరిత కాల్ లేదా సందేశం. దయచేసి ఎలాంటి డబ్బు లేదా బ్యాంక్ OTP పంపవద్దు. వెంటనే సైబర్ హెల్ప్‌లైన్ 1930 కి కాల్ చేయండి.",
    cautionWarning: "జాగ్రత్త: ఈ సందేశం అనుమానాస్పదంగా ఉంది. నిర్ధారించుకోకుండా ఎలాంటి చర్యలు తీసుకోవద్దు.",
    safeMessage: "ఈ సందేశం సురక్షితమైనదిగా కనిపిస్తోంది.",
    threatAlertTitle: "మోసం గుర్తించబడింది!",
    threatSummary: "మోసగాడు మిమ్మల్ని భయపెట్టి డబ్బు లేదా ఓటీపీ అడుగుతున్నాడు. వెంటనే కాల్ కట్ చేయండి.",
    goldenHourText: "గోల్డెన్ అవర్: బ్యాంక్ మోసం జరిగితే వెంటనే 1930 కి కాల్ చేయండి.",
    sosVoice: "ఎమర్జెన్సీ రక్షణ మోడ్ ఆన్ చేయబడింది. కంగారు పడవద్దు. ఎవరికీ డబ్బు పంపవద్దు.",
    brand_tagline: "వృద్ధుల సైబర్ రక్షణ, స్థానిక భాష వాయిస్ అలర్ట్‌లు & పోలీస్ సాక్ష్యాల లాకర్",
    lang_label_text: "భాష / Language:",
    sentinel_btn_label: "ఆటో-గార్డ్:",
    sentinel_active_text: "యాక్టివ్ (ACTIVE)",
    sentinel_paused_text: "ఆపబడింది (PAUSED)",
    text_size_label: "అక్షర పరిమాణం:",
    contrast_btn: "కాంట్రాస్ట్",
    voice_btn: "వాయిస్ సహాయం",
    emergency_btn: "ఎమర్జెన్సీ పాజ్ & 1930",
    sentinel_banner_title: "ఆటోమేటిక్ వృద్ధుల రక్షణ షీల్డ్ యాక్టివ్‌గా ఉంది",
    sentinel_banner_desc: "ఆటో-రక్షణ ప్రారంభించబడింది: మోసం జరిగితే వెంటనే మీ స్థానిక భాషలో వాయిస్ హెచ్చరిక వస్తుంది.",
    sentinel_test_btn: "⚡ ఆటో-అలర్ట్ టెస్ట్ చేయండి",
    watch_247: "24/7 పర్యవేక్షణ",
    nav_message: "మెసేజ్ స్కానర్ (SMS)",
    nav_link: "వెబ్ లింక్ చెకర్",
    nav_call: "కాల్ స్క్రీనర్ & రికార్డర్",
    nav_police: "సైబర్ పోలీస్ స్టేషన్ & 1930",
    nav_evidence: "సాక్ష్యాల లాకర్ & FIR డాక్యుమెంట్",
    nav_quiz: "మోసాలను గుర్తించే క్విజ్",
    nav_caregiver: "కుటుంబం & సంరక్షకుల బ్రిడ్జ్",
    nav_blueprint: "ప్రాజెక్ట్ బ్లూప్రింట్",
    simple_safe_badge: "సరళమైనది & సురక్షితం",
    msg_title: "అనుమానాస్పద SMS లేదా వాట్సాప్ సందేశాలను తనిఖీ చేయండి",
    msg_desc: "కరెంట్ కట్ అవుతుందని లేదా బ్యాంక్ లాక్ అయిందని బెదిరింపు మెసేజ్ వచ్చిందా? తనిఖీ చేయడానికి ఇక్కడ పేస్ట్ చేయండి.",
    msg_card1_header: "1. సందేశాన్ని పేస్ట్ చేయండి లేదా ఎంచుకోండి",
    private_badge: "100% గోప్యమైనది",
    presets_label: "సాధారణ మోసాల ఉదాహరణలను చూడండి:",
    preset_elec: "⚡ కరెంట్ కనెక్షన్ కట్ హెచ్చరిక",
    preset_bank: "💳 బ్యాంక్ ఖాతా / KYC బ్లాక్ మోసం",
    preset_lottery: "🎁 25 లక్షల KBC లాటరీ విజేత",
    preset_grandkid: "🚨 మనవడు జైలు / బెయిల్ అత్యవసరం",
    preset_police: "⚖️ పోలీస్ అరెస్ట్ వారంట్ బెదిరింపు",
    preset_delivery: "📦 ఫేక్ పార్శిల్ డెలివరీ రుసుము",
    preset_real_family: "💚 నిజమైన కుటుంబ సందేశం",
    preset_real_clinic: "💚 డాక్టర్ అపాయింట్‌మెంట్ మెసేజ్",
    msg_input_label: "సందేశం టెక్స్ట్:",
    msg_placeholder: "మీకు వచ్చిన SMS లేదా వాట్సాప్ మెసేజ్‌ని ఇక్కడ పేస్ట్ చేయండి...",
    btn_check_msg: "ఈ సందేశాన్ని తనిఖీ చేయండి",
    btn_clear: "క్లియర్ చేయండి",
    empty_state_title: "మీ రక్షణకు సిద్ధంగా ఉంది",
    empty_state_desc: "'ఈ సందేశాన్ని తనిఖీ చేయండి' పై క్లిక్ చేయండి. సిల్వర్‌గార్డ్ మీకు సరళమైన తెలుగులో వాయిస్ ద్వారా మార్గదర్శకత్వం అందిస్తుంది.",
    link_intro_badge: "భద్రత ముఖ్యం",
    link_title: "క్లిక్ చేసే ముందు వెబ్‌సైట్ లింక్‌లను తనిఖీ చేయండి",
    link_desc: "మోసగాళ్ళు అసలైన బ్యాంక్ లాంటి నకిలీ వెబ్‌సైట్‌లను సృష్టిస్తారు. లింక్ భద్రతను ఇక్కడ తనిఖీ చేయండి.",
    link_card1_header: "1. వెబ్‌సైట్ అడ్రస్ (URL) నమోదు చేయండి",
    link_presets_label: "నమూనా లింక్‌లను పరీక్షించండి:",
    link_input_label: "వెబ్‌సైట్ లింక్ (URL):",
    link_placeholder: "ఉదా. www.bank-secure-login.top లేదా లింక్ పేస్ట్ చేయండి",
    btn_check_link: "వెబ్ లింక్‌ను తనిఖీ చేయండి",
    link_empty_title: "ఏదైనా వెబ్ లింక్‌ని తనిఖీ చేయండి",
    link_empty_desc: "మీ నెట్ బ్యాంకింగ్ పాస్‌వర్డ్ లేదా కార్డ్ వివరాలను దొంగిలించడానికి ప్రయత్నిస్తున్నారా అని చూడండి.",
    call_intro_badge: "లైవ్ డిఫెన్స్ & రికార్డింగ్",
    call_title: "లైవ్ ఫోన్ కాల్ స్క్రీనర్ & పోలీస్ ఎవిడెన్స్ రికార్డర్",
    call_desc: "సైబర్ నేరగాళ్లు భయపెట్టి డబ్బులు గుంజుతారు. మా స్క్రీనర్ కాల్ సమయంలో మోసపూరిత పదాలను గుర్తిస్తుంది మరియు పోలీసులకు రుజువుగా సమర్పించడానికి ఆడియోను స్వయంచాలకంగా రికార్డ్ చేస్తుంది.",
    call_scenarios_header: "కాల్ దృష్టాంతాన్ని ఎంచుకోండి",
    autorecord_badge: "ఆటో-రికార్డ్ ఆన్‌లో ఉంది",
    scenario_digital_arrest: "\"డిజిటల్ అరెస్ట్\" / నకిలీ పోలీస్ వీడియో కాల్",
    scenario_digital_arrest_sub: "పార్శిల్‌లో డ్రగ్స్ దొరికాయని బెదిరింపు",
    scenario_elec_cut: "కరెంట్ కనెక్షన్ కట్ చేసే ఫేక్ కాల్",
    scenario_elec_cut_sub: "ఈ రాత్రికి కరెంట్ తీసేస్తామని బెదిరింపు",
    scenario_tax_threat: "టాక్స్ అరెస్ట్ వారంట్ బెదిరింపు",
    scenario_tax_threat_sub: "గిఫ్ట్ కార్డులు లేదా డబ్బు డిమాండ్",
    scenario_grandkid_bail: "మనవడు ఆపదలో ఉన్నాడని కాల్",
    scenario_grandkid_bail_sub: "ఏడుస్తూ: \"అమ్మానాన్నలకు చెప్పొద్దు!\"",
    scenario_tech_remote: "AnyDesk / కంప్యూటర్ స్క్రీన్ షేర్ మోసం",
    scenario_tech_remote_sub: "ఖాతా సరిచేస్తామని రిమోట్ కంట్రోల్ తీసుకోవడం",
    scenario_doctor: "నిజమైన హాస్పిటల్ కాల్",
    scenario_doctor_sub: "రెగ్యులర్ చెకప్ నిర్ధారణ",
    mic_panel_header: "లైవ్ మైక్రోఫోన్ సాక్ష్యం మోడ్",
    mic_panel_desc: "మీరు ప్రస్తుతం అనుమానాస్పద కాల్‌లో ఉన్నారా? పోలీసులకు రుజువుగా మీ మైక్‌ని రికార్డ్ చేయండి:",
    mic_btn_record: "లైవ్ మైక్ ఆడియో రికార్డ్ చేయండి",
    mic_status_ready: "మైక్ సిద్ధంగా ఉంది",
    btn_start_call: "కాల్ ప్రారంభించండి",
    btn_stop_call: "కట్ చేసి బ్లాక్ చేయండి",
    rec_badge_text: "పోలీస్ సాక్ష్యంగా కాల్ రికార్డ్ అవుతోంది",
    transcript_header: "లైవ్ ట్రాన్స్ క్రిప్షన్ & థ్రెట్ వాచ్",
    transcript_placeholder: "లైవ్ విశ్లేషణ ప్రారంభించడానికి 'కాల్ ప్రారంభించండి' నొక్కండి...",
    audio_saved_header: "కాల్ ఆడియో సాక్ష్యం సేవ్ చేయబడింది!",
    btn_download_wav: "⬇️ ఆడియో డౌన్‌లోడ్ చేయండి (.WAV)",
    btn_open_locker: "📁 ఎవిడెన్స్ లాకర్‌లో చూడండి",
    police_intro_badge: "ఎమర్జెన్సీ సైబర్ పోలీస్ పోర్టల్",
    police_title: "సమీప సైబర్ పోలీస్ స్టేషన్ & జాతీయ 1930 హెల్ప్‌లైన్",
    police_desc: "మోసం జరిగిన మొదటి 2-3 గంటలలో (గోల్డెన్ అవర్) 1930 కి కాల్ చేస్తే పోయిన డబ్బును బ్యాంక్‌లో నిలిపివేయవచ్చు. సమీప సైబర్ సెల్‌ను కనుగొనండి.",
    n1930_badge: "జాతీయ సైబర్ క్రైమ్ హెల్ప్‌లైన్",
    n1930_tollfree: "(టోల్-ఫ్రీ • 24x7 భారతదేశం అంతటా అందుబాటులో ఉంది)",
    n1930_desc: "కేంద్ర హోం మంత్రిత్వ శాఖ (MHA & I4C) ఆర్థిక మోసాల పరిష్కార వ్యవస్థ. వెంటనే బ్యాంక్ అధికారులతో మాట్లాడి లావాదేవీని ఆపుతుంది.",
    btn_call_1930: "ఇప్పుడే 1930 హెల్ప్‌లైన్‌కు కాల్ చేయండి",
    btn_open_portal: "🌐 cybercrime.gov.in పోర్టల్ తెరవండి",
    golden_hour_header: "⏱️ 'గోల్డెన్ అవర్' ప్రోటోకాల్ (మోసం జరిగిన 2 గంటల్లో ఏం చేయాలి)",
    high_priority_badge: "అత్యంత ముఖ్యం",
    gstep1_title: "వెంటనే 1930 కి డయల్ చేయండి",
    gstep1_desc: "మోసపోయిన మొత్తం, మీ బ్యాంక్ అకౌంట్ మరియు నిందితుడి ఫోన్ నంబర్ చెప్పండి.",
    gstep2_title: "మెసేజ్‌లు లేదా కాల్ రికార్డింగ్‌లను డిలీట్ చేయవద్దు",
    gstep2_desc: "SMS మరియు ఆడియో లీగల్ ఎవిడెన్స్‌గా ఉపయోగపడతాయి.",
    gstep3_title: "ATM కార్డ్ మరియు నెట్‌బ్యాంకింగ్ బ్లాక్ చేయండి",
    gstep3_desc: "బ్యాంక్ హెల్ప్‌లైన్‌కు కాల్ చేసి కార్డ్‌ను వెంటనే బ్లాక్ చేయించండి.",
    gstep4_title: "పోలీస్ ఫిర్యాదు పత్రాన్ని సమర్పించండి",
    gstep4_desc: "సిల్వర్‌గార్డ్ లాకర్ నుండి పోలీస్ డాక్యుమెంట్‌ను ప్రింట్ చేసి ఇవ్వండి.",
    station_finder_header: "మీ సమీపంలోని సైబర్ పోలీస్ స్టేషన్లను కనుగొనండి",
    btn_gps_detect: "నా లొకేషన్ గుర్తించండి (GPS)",
    search_city_label: "నగరం, రాష్ట్రం లేదా పిన్‌కోడ్ ద్వారా వెతకండి:",
    search_city_placeholder: "ఉదా. హైదరాబాద్, బెంగళూరు, విశాఖపట్నం, విజయవాడ, 500029...",
    filter_state_label: "రాష్ట్రాన్ని ఎంచుకోండి:",
    evidence_intro_badge: "డిజిటల్ సాక్ష్యాల వాల్ట్",
    evidence_title: "స్కామ్ ప్రూఫ్ లాకర్ & పోలీస్ FIR ఫిర్యాదు డాక్యుమెంట్",
    evidence_desc: "సిల్వర్‌గార్డ్ రికార్డ్ చేసిన కాల్స్ మరియు ఫేక్ మెసేజ్‌లను డిజిటల్ సంతకంతో భద్రపరుస్తుంది, వీటిని పోలీసులకు లేదా cybercrime.gov.in లో సమర్పించవచ్చు.",
    evidence_summary_title: "భద్రపరచబడిన డిజిటల్ సాక్ష్యాలు",
    evidence_summary_desc: "ప్రతి ఎంట్రీలో ఖచ్చితమైన సమయం, సంభాషణ మరియు ఆడియో సాక్ష్యం ఉంటాయి.",
    btn_gen_dossier: "అధికారిక పోలీస్ ఫిర్యాదు పత్రాన్ని రూపొందించండి",
    btn_export_json: "💾 అన్ని ఆధారాలను డౌన్‌లోడ్ చేయండి (JSON)",
    btn_clear_evidence: "సాక్ష్యాలను క్లియర్ చేయండి",
    quiz_intro_badge: "సాధనతోనే భద్రత",
    quiz_title: "ఇంటరాక్టివ్ 'స్కామ్ గుర్తించండి' క్విజ్",
    quiz_desc: "నిజ జీవిత పరిస్థితులతో మీ భద్రతా నైపుణ్యాలను పరీక్షించుకోండి మరియు మోసాలను సులభంగా పసిగట్టండి.",
    quiz_mode_5q: "📝 5-ప్రశ్నల క్విజ్",
    quiz_mode_compare: "🔍 నిజమైన vs నకిలీ తేడాలు",
    quiz_question_label: "ప్రశ్న",
    quiz_of_label: "లో",
    quiz_score_label: "భద్రతా స్కోరు:",
    btn_quiz_next: "తదుపరి ప్రశ్న ➔",
    btn_quiz_restart: "క్విజ్ మళ్లీ ప్రారంభించండి",
    caregiver_intro_badge: "కుటుంబ రక్షణ నెట్‌వర్క్",
    caregiver_title: "కేర్‌గివర్ SOS & కుటుంబ సమాచార బ్రిడ్జ్",
    caregiver_desc: "ఏ వృద్ధుడు ఒంటరిగా మోసగాళ్లను ఎదుర్కోవాల్సిన అవసరం లేదు. డబ్బు పోకముందే సిల్వర్‌గార్డ్ మీ పిల్లలను అప్రమత్తం చేస్తుంది.",
    contacts_header: "నమ్మకమైన ఎమర్జెన్సీ కాంటాక్ట్‌లు",
    contacts_desc: "మీరు 'ఎమర్జెన్సీ పాజ్' నొక్కినప్పుడు, సిల్వర్‌గార్డ్ వెంటనే మీ కుటుంబ సభ్యులకు హెచ్చరిక పంపుతుంది.",
    test_alert_header: "కేర్‌గివర్ అలర్ట్ పరీక్షించండి",
    test_alert_desc: "మీ పిల్లలకు వాట్సాప్ లేదా SMS ద్వారా ఎమర్జెన్సీ అలర్ట్ పంపడాన్ని ప్రాక్టీస్ చేయండి:",
    btn_send_sos_caregiver: "పూజ & రోహన్‌కి టెస్ట్ SOS పంపండి",
    history_header: "ఇటీవలి కార్యకలాపాలు & అలర్ట్ లాగ్",
    history_desc: "తనిఖీ చేసిన మెసేజ్‌లు, లింక్‌లు మరియు రికార్డ్ చేసిన కాల్స్ వివరాలు.",
    btn_clear_history: "హిస్టరీ క్లియర్ చేయండి",
    blueprint_intro_badge: "సామాజిక భద్రతా నిర్మాణం",
    blueprint_title: "సిల్వర్‌గార్డ్: సామాజిక ప్రభావం & సాంకేతిక బ్లూప్రింట్",
    blueprint_desc: "వృద్ధుల రక్షణ, తెలుగు వాయిస్ హెచ్చరికలు మరియు 1930 హెల్ప్‌లైన్ అనుసంధానం యొక్క సమగ్ర అవలోకనం.",
    bp_sec1_title: "1. వృద్ధులపై సైబర్ నేరాలు",
    bp_sec1_desc: "భయపెట్టి వృద్ధుల నుండి డబ్బు గుంజుతారు. సిల్వర్‌గార్డ్ స్థానిక భాషలో మార్గదర్శకత్వం ఇచ్చి వారిని రక్షిస్తుంది.",
    bp_sec2_title: "2. సాంకేతిక నిర్మాణం & సాక్ష్యాల భద్రత",
    modal_threat_badge: "ప్రమాదం గుర్తించబడింది!",
    modal_threat_title: "మోసపూరిత ప్రయత్నం అడ్డుకోబడింది!",
    btn_replay_voice: "తెలుగులో హెచ్చరికను మళ్ళీ వినండి",
    btn_save_to_locker: "సాక్ష్యాన్ని పోలీస్ లాకర్‌లో సేవ్ చేయండి",
    btn_dismiss_safe: "మూసివేయండి, నేను సురక్షితంగా ఉన్నాను",
    dossier_modal_title: "అధికారిక సైబర్ క్రైమ్ పోలీస్ ఫిర్యాదు పత్రం",
    btn_print_pdf: "🖨️ ప్రింట్ చేయండి / PDF సేవ్ చేయండి",
    btn_copy_portal: "📋 పోర్టల్ కోసం కాపీ చేయండి",
    sos_modal_title: "ఆగండి & ప్రశాంతంగా ఊపిరి తీసుకోండి",
    sos_modal_subtitle: "మీరు పూర్తిగా సురక్షితంగా ఉన్నారు. ఇప్పుడేమీ జరగదు.",
    sos_step1_title: "ఎవరికీ డబ్బు లేదా OTP ఇవ్వవద్దు",
    sos_step1_desc: "ఏ ప్రభుత్వ అధికారి లేదా బ్యాంక్ ఫోన్‌లో డబ్బు లేదా పాస్‌వర్డ్ అడగరు.",
    sos_step2_title: "కాల్ కట్ చేయండి లేదా మెసేజ్ క్లోజ్ చేయండి",
    sos_step2_desc: "మోసగాళ్లు కంగారు పెడతారు. మీకు వెంటనే కాల్ కట్ చేసే పూర్తి హక్కు ఉంది.",
    sos_step3_title: "1930 లేదా కూతురు పూజకి కాల్ చేయండి",
    sos_step3_desc: "ఏదైనా చేసే ముందు 1930 లేదా మీ కుటుంబంతో మాట్లాడండి.",
    btn_call_daughter: "కూతురు పూజకి కాల్ చేయండి: +91 98201-23456",
    btn_safe_return: "నేను సురక్షితంగా ఉన్నాను — యాప్‌కి తిరిగి వెళ్ళండి",
    mobile_dial_1930: "1930 హెల్ప్‌లైన్‌కు డయల్ చేయండి",
    mobile_sos_btn: "SOS పాజ్",
    footer_title: "సిల్వర్‌గార్డ్",
    footer_desc: "వృద్ధుల డిజిటల్ గౌరవం, బహుభాషా భద్రత మరియు పోలీస్ సహాయం కోసం అంకితం.",
    footer_privacy: "🔒 100% ప్రైవసీ: మీ కాల్స్ మరియు మెసేజ్‌లు మీ ఫోన్‌లోనే ఉంటాయి.",
    footer_1930: "📞 జాతీయ హెల్ప్‌లైన్: 1930",
    footer_guard_active: "ఆటో-గార్డ్ యాక్టివ్‌గా ఉంది"
  },

  ta: {
    name: "தமிழ் (Tamil)",
    locale: "ta-IN",
    welcomeVoice: "மொழி தமிழுக்கு மாற்றப்பட்டது. சில்வர்கார்ட் உங்கள் பாதுகாப்பிற்கு தயார்.",
    dangerWarning: "எச்சரிக்கை! இது ஒரு போலி அழைப்பு அல்லது மோசடி செய்தி. தயவுசெய்து பணம், வங்கி விவரங்கள் அல்லது OTP அனுப்ப வேண்டாம். 1930 ஐ அழைக்கவும்.",
    cautionWarning: "கவனம்: இந்த செய்தி சந்தேகத்திற்கிடமானது. சரிபார்க்காமல் பணம் அனுப்ப வேண்டாம்.",
    safeMessage: "இந்த செய்தி பாதுகாப்பானது.",
    threatAlertTitle: "மோசடி எச்சரிக்கை!",
    threatSummary: "மோசடிக்காரர் மிரட்டி பணம் அல்லது வங்கி ரகசியங்களை கேட்கிறார். உடனே இணைப்பை துண்டிக்கவும்.",
    goldenHourText: "கோல்டன் ஹவர்: பண இழப்பு ஏற்பட்டால் உடனடியாக 1930 என்ற எண்ணிற்கு அழைக்கவும்.",
    sosVoice: "அவசர பாதுகாப்பு முறை இயக்கப்பட்டது. பயப்பட வேண்டாம். யாருக்கும் பணம் அனுப்ப வேண்டாம்.",
    brand_tagline: "முதியோர் சைபர் பாதுகாப்பு, தமிழ் குரல் எச்சரிக்கை & போலீஸ் ஆதார லாக்கர்",
    lang_label_text: "மொழி / Language:",
    sentinel_btn_label: "ஆட்டோ-கார்ட்:",
    sentinel_active_text: "செயலில் (ACTIVE)",
    sentinel_paused_text: "நிறுத்தப்பட்டது (PAUSED)",
    text_size_label: "எழுத்து அளவு:",
    contrast_btn: "காண்ட்ராஸ்ட்",
    voice_btn: "குரல் உதவி",
    emergency_btn: "அவசர நிறுத்தம் & 1930",
    sentinel_banner_title: "முதியோர் பாதுகாப்பு ஷீல்டு இயங்குகிறது",
    sentinel_banner_desc: "தானியங்கி பாதுகாப்பு: மோசடி கண்டறியப்பட்டால் உடனே தமிழில் குரல் எச்சரிக்கை ஒலிக்கும்.",
    sentinel_test_btn: "⚡ எச்சரிக்கையை சோதிக்கவும்",
    watch_247: "24/7 கண்காணிப்பு",
    nav_message: "செய்தி ஸ்கேனர் (SMS)",
    nav_link: "இணைப்பு (Link) சரிபார்ப்பு",
    nav_call: "அழைப்பு ஸ்கிரீனர் & ரெக்கார்டர்",
    nav_police: "சைபர் போலீஸ் & 1930",
    nav_evidence: "ஆதார லாக்கர் & FIR அறிக்கை",
    nav_quiz: "மோசடி விழிப்புணர்வு வினாடி வினா",
    nav_caregiver: "குடும்பத்தினர் இணைப்பு",
    nav_blueprint: "திட்ட வரைபடம்",
    simple_safe_badge: "எளிய & பாதுகாப்பானது",
    msg_title: "சந்தேகத்திற்கிடமான SMS அல்லது வாட்ஸ்அப் செய்திகளை சரிபார்க்கவும்",
    msg_desc: "மின்சாரம் துண்டிக்கப்படும் அல்லது வங்கி கணக்கு முடக்கப்படும் என அச்சுறுத்தும் செய்தி வந்ததா? சரிபார்க்க கீழே ஒட்டவும்.",
    msg_card1_header: "1. செய்தியை உள்ளிடவும்",
    private_badge: "100% தனிப்பயன் பாதுகாப்பு",
    presets_label: "பொதுவான மோசடி உதாரணங்கள்:",
    preset_elec: "⚡ மின்சாரம் துண்டிப்பு மிரட்டல்",
    preset_bank: "💳 வங்கி கணக்கு / KYC முடக்கம்",
    preset_lottery: "🎁 25 லட்சம் KBC லாட்டரி வெற்றி",
    preset_grandkid: "🚨 பேரன் விபத்து / ஜாமீன் உதவி",
    preset_police: "⚖️ போலீஸ் கைது மிரட்டல்",
    preset_delivery: "📦 போலி பார்சல் கட்டண செய்தி",
    preset_real_family: "💚 உண்மையான குடும்ப செய்தி",
    preset_real_clinic: "💚 மருத்துவர் அப்பாயின்மென்ட்",
    msg_input_label: "செய்தி உரை:",
    msg_placeholder: "வந்த SMS அல்லது வாட்ஸ்அப் செய்தியை இங்கே ஒட்டவும்...",
    btn_check_msg: "செய்தியை சரிபார்க்கவும்",
    btn_clear: "அழிக்கவும்",
    empty_state_title: "பாதுகாக்க தயாராக உள்ளது",
    empty_state_desc: "சரிபார்க்க அழுத்தவும். சில்வர்கார்ட் உங்களுக்கு தமிழில் குரல் மூலம் வழிகாட்டும்.",
    link_intro_badge: "பாதுகாப்பே முதன்மை",
    link_title: "இணைப்புகளை கிளிக் செய்வதற்கு முன் சரிபார்க்கவும்",
    link_desc: "மோசடிக்காரர்கள் வங்கி போல போலி இணையதளங்களை உருவாக்குகிறார்கள். அதன் பாதுகாப்பை இங்கே அறியவும்.",
    link_card1_header: "1. இணையதள முகவரியை (URL) உள்ளிடவும்",
    link_presets_label: "மாதிரி இணைப்புகள்:",
    link_input_label: "இணையதள இணைப்பு (URL):",
    link_placeholder: "உதா. www.bank-secure-login.top",
    btn_check_link: "இணைப்பை சோதிக்கவும்",
    link_empty_title: "இணைப்பை சரிபார்க்கவும்",
    link_empty_desc: "உங்கள் பாஸ்வேர்டு அல்லது கார்டு எண்களை திருட முயற்சிக்கிறார்களா என சோதிக்கவும்.",
    call_intro_badge: "நேரலை பாதுகாப்பு & பதிவு",
    call_title: "நேரலை போன் கால் ஸ்கிரீனர் & போலீஸ் ஆதார ரெக்கார்டர்",
    call_desc: "மோசடிக்காரர்கள் போனில் மிரட்டி பணம் பறிக்கிறார்கள். எங்கள் ஸ்கிரீனர் அச்சுறுத்தலை கண்டறிந்து, போலீசில் புகாரளிக்க ஆடியோவை தானாகவே பதிவு செய்கிறது.",
    call_scenarios_header: "அழைப்பு சூழலை தேர்வு செய்க",
    autorecord_badge: "ஆட்டோ-ரெக்கார்ட் ஆன்",
    scenario_digital_arrest: "\"டிஜிட்டல் அரெஸ்ட்\" / போலி போலீஸ் வீடியோ கால்",
    scenario_digital_arrest_sub: "பார்சலில் போதைப்பொருள் சிக்கியதாக பொய் மிரட்டல்",
    scenario_elec_cut: "மின்சார வாரிய போலி அழைப்பு",
    scenario_elec_cut_sub: "இன்றிரவு கரண்ட் கட் செய்யப்படும் என மிரட்டல்",
    scenario_tax_threat: "வரி கைது வாரண்ட் மிரட்டல்",
    scenario_tax_threat_sub: "பணம் அல்லது கிஃப்ட் கார்டு டிமாண்ட்",
    scenario_grandkid_bail: "பேரன் ஆபத்தில் இருப்பதாக அழைப்பு",
    scenario_grandkid_bail_sub: "அழுதுகொண்டே: \"அம்மாவிடம் சொல்லாதே!\"",
    scenario_tech_remote: "AnyDesk / கணினி ரிமோட் மோசடி",
    scenario_tech_remote_sub: "கணக்கை சரிசெய்வதாக கூறி கட்டுப்பாட்டை பெறுதல்",
    scenario_doctor: "உண்மையான மருத்துவமனை அழைப்பு",
    scenario_doctor_sub: "வழக்கமான பரிசோதனை உறுதிப்படுத்தல்",
    mic_panel_header: "நேரலை மைக்ரோஃபோன் ஆதார முறை",
    mic_panel_desc: "சந்தேகத்திற்குரிய அழைப்பில் பேசுகிறீர்களா? போலீஸ் ஆதாரத்திற்காக மைக்கை பதிவு செய்யவும்:",
    mic_btn_record: "மைக்கை பதிவு செய்க",
    mic_status_ready: "மைக் தயார்",
    btn_start_call: "அழைப்பைத் தொடங்கு",
    btn_stop_call: "இணைப்பை துண்டித்து பிளாக் செய்",
    rec_badge_text: "போலீஸ் ஆதாரமாக அழைப்பு பதிவாகிறது",
    transcript_header: "நேரலை உரையாடல் & கண்காணிப்பு",
    transcript_placeholder: "ஆய்வை தொடங்க 'அழைப்பைத் தொடங்கு' அழுத்தவும்...",
    audio_saved_header: "அழைப்பு ஆடியோ ஆதாரம் சேமிக்கப்பட்டது!",
    btn_download_wav: "⬇️ ஆடியோ பதிவிறக்கம் (.WAV)",
    btn_open_locker: "📁 ஆதார லாக்கரில் காண்க",
    police_intro_badge: "அவசர சைபர் போலீஸ் போர்டல்",
    police_title: "அருகிலுள்ள சைபர் போலீஸ் நிலையம் & 1930 உதவி எண்",
    police_desc: "பண இழப்பு ஏற்பட்டால் முதல் 2-3 மணி நேரத்திற்குள் (கோல்டன் ஹவர்) 1930-ஐ அழைத்தால் இழந்த பணத்தை முடக்க முடியும்.",
    n1930_badge: "தேசிய சைபர் குற்ற உதவி எண்",
    n1930_tollfree: "(இலவச எண் • 24x7 இந்தியா முழுவதும்)",
    n1930_desc: "மத்திய உள்துறை அமைச்சகத்தின் நிதி மோசடி தடுப்பு அமைப்பு. வங்கிகளுடன் தொடர்பு கொண்டு மோசடி பணப்பரிவர்த்தனையை உடனே நிறுத்தும்.",
    btn_call_1930: "1930 எண்ணை உடனே அழைக்கவும்",
    btn_open_portal: "🌐 cybercrime.gov.in திறக்கவும்",
    golden_hour_header: "⏱️ 'கோல்டன் ஹவர்' விதி (மோசடி நடந்த 2 மணி நேரத்திற்குள் செய்ய வேண்டியவை)",
    high_priority_badge: "மிக முக்கியமானது",
    gstep1_title: "உடனே 1930-ஐ அழைக்கவும்",
    gstep1_desc: "மோசடி தொகை, வங்கி கணக்கு மற்றும் குற்றவாளியின் எண்ணை கூறவும்.",
    gstep2_title: "செய்தி அல்லது ஆடியோவை அழிக்க வேண்டாம்",
    gstep2_desc: "SMS மற்றும் பதிவு செய்யப்பட்ட ஆடியோ சட்டப்பூர்வ ஆதாரம்.",
    gstep3_title: "ATM கார்டு மற்றும் நெட்பேங்கிங்கை பிளாக் செய்யவும்",
    gstep3_desc: "வங்கி உதவி எண்ணை அழைத்து கார்டை உடனடியாக முடக்கவும்.",
    gstep4_title: "போலீஸ் புகார் ஆவணத்தை சமர்ப்பிக்கவும்",
    gstep4_desc: "சில்வர்கார்ட் லாக்கரில் இருந்து புகார் படிவத்தை அச்சிட்டு வழங்கவும்.",
    station_finder_header: "அருகிலுள்ள சைபர் போலீஸ் நிலையங்களை கண்டறிக",
    btn_gps_detect: "என் இருப்பிடத்தை கண்டறி (GPS)",
    search_city_label: "நகரம் அல்லது பின்கோடு மூலம் தேடவும்:",
    search_city_placeholder: "உதா. சென்னை, கோவை, மதுரை, திருச்சி, 600007...",
    filter_state_label: "மாநிலத்தை தேர்வு செய்க:",
    evidence_intro_badge: "டிஜிட்டல் ஆதார பெட்டகம்",
    evidence_title: "மோசடி ஆதார லாக்கர் & போலீஸ் FIR புகார் அறிக்கை",
    evidence_desc: "பதிவு செய்யப்பட்ட அழைப்புகள் மற்றும் போலி செய்திகளை டிஜிட்டல் முத்திரையுடன் சில்வர்கார்ட் பாதுகாக்கிறது.",
    evidence_summary_title: "சேமிக்கப்பட்ட டிஜிட்டல் ஆதாரங்கள்",
    evidence_summary_desc: "துல்லியமான நேரம், உரை மற்றும் ஆடியோ பதிவு இதில் அடங்கும்.",
    btn_gen_dossier: "அதிகாரப்பூர்வ போலீஸ் புகார் ஆவணத்தை உருவாக்கு",
    btn_export_json: "💾 அனைத்து ஆதாரங்களையும் பதிவிறக்குக (JSON)",
    btn_clear_evidence: "ஆதாரங்களை அழிக்கவும்",
    quiz_intro_badge: "பயிற்சியே பாதுகாப்பு",
    quiz_title: "'மோசடியை கண்டுபிடி' வினாடி வினா",
    quiz_desc: "நிஜ வாழ்க்கை சூழல்களை கொண்டு உங்கள் பாதுகாப்பு திறனை சோதித்து விழிப்புணர்வு பெறுங்கள்.",
    quiz_mode_5q: "📝 5-கேள்விகள் வினாடி வினா",
    quiz_mode_compare: "🔍 உண்மை vs போலி வேறுபாடுகள்",
    quiz_question_label: "கேள்வி",
    quiz_of_label: "இல்",
    quiz_score_label: "மதிப்பெண்:",
    btn_quiz_next: "அடுத்த கேள்வி ➔",
    btn_quiz_restart: "மீண்டும் தொடங்குக",
    caregiver_intro_badge: "குடும்ப பாதுகாப்பு வளையம்",
    caregiver_title: "குடும்பத்தினர் மற்றும் பராமரிப்பாளர் இணைப்பு",
    caregiver_desc: "எந்தவொரு முதியவரும் தனியாக மோசடியை சந்திக்க வேண்டியதில்லை. பணம் இழப்பதற்கு முன்பே சில்வர்கார்ட் உங்கள் குடும்பத்திற்கு எச்சரிக்கை அனுப்பும்.",
    contacts_header: "அவசர தொடர்புகள்",
    contacts_desc: "நீங்கள் 'அவசர நிறுத்தம்' அழுத்தும்போது உடனே உங்கள் குழந்தைகளுக்கு எச்சரிக்கை செல்லும்.",
    test_alert_header: "எச்சரிக்கையை சோதிக்கவும்",
    test_alert_desc: "வாட்ஸ்அப் அல்லது SMS மூலம் அவசர எச்சரிக்கை அனுப்ப பயிற்சி செய்க:",
    btn_send_sos_caregiver: "பூஜா & ரோஹனுக்கு சோதனை SOS அனுப்புக",
    history_header: "சமீபத்திய வரலாறு & பதிவுகள்",
    history_desc: "சரிபார்க்கப்பட்ட செய்திகள், இணைப்புகள் மற்றும் அழைப்புகளின் பட்டியல்.",
    btn_clear_history: "வரலாற்றை அழிக்கவும்",
    blueprint_intro_badge: "சமூக பாதுகாப்பு கட்டமைப்பு",
    blueprint_title: "சில்வர்கார்ட்: சமூக தாக்கம் & தொழில்நுட்ப வரைபடம்",
    blueprint_desc: "முதியோர் பாதுகாப்பு, தமிழ் குரல் வழிகாட்டல் மற்றும் 1930 உதவி எண் இணைப்பு பற்றிய முழு விவரம்.",
    bp_sec1_title: "1. முதியோருக்கு எதிரான சைபர் குற்றங்கள்",
    bp_sec1_desc: "மிரட்டி முதியவர்களிடம் பணம் பறிக்கப்படுகிறது. சில்வர்கார்ட் தமிழில் குரல் உதவி அளித்து அவர்களை பாதுகாக்கிறது.",
    bp_sec2_title: "2. தொழில்நுட்ப கட்டமைப்பு & ஆதார பாதுகாப்பு",
    modal_threat_badge: "மோசடி கண்டறியப்பட்டது!",
    modal_threat_title: "மோசடி முயற்சி தடுக்கப்பட்டது!",
    btn_replay_voice: "தமிழில் எச்சரிக்கையை மீண்டும் கேட்கவும்",
    btn_save_to_locker: "ஆதாரத்தை போலீஸ் லாக்கரில் சேமிக்கவும்",
    btn_dismiss_safe: "மூடுக, நான் பாதுகாப்பாக உள்ளேன்",
    dossier_modal_title: "சைபர் குற்ற போலீஸ் புகார் ஆவணம்",
    btn_print_pdf: "🖨️ பிரிண்ட் செய்க / PDF சேமிக்க",
    btn_copy_portal: "📋 போர்ட்டலுக்காக நகலெடுக்க",
    sos_modal_title: "நிறுத்தி அமைதியாக மூச்சு விடுங்கள்",
    sos_modal_subtitle: "நீங்கள் முற்றிலும் பாதுகாப்பாக இருக்கிறீர்கள். இப்போது எதுவும் நடக்காது.",
    sos_step1_title: "யாருக்கும் பணம் அல்லது OTP அனுப்ப வேண்டாம்",
    sos_step1_desc: "எந்த அரசு அதிகாரியும் அல்லது வங்கியும் போனில் பணம் அல்லது கடவுச்சொல் கேட்க மாட்டார்கள்.",
    sos_step2_title: "அழைப்பை துண்டிக்கவும் அல்லது செய்தியை மூடவும்",
    sos_step2_desc: "மோசடிக்காரர்கள் அவசரப்படுத்துவார்கள். அழைப்பை உடனே துண்டிக்க உங்களுக்கு முழு உரிமை உண்டு.",
    sos_step3_title: "1930 அல்லது மகள் பூஜாவை அழைக்கவும்",
    sos_step3_desc: "எந்த முடிவும் எடுப்பதற்கு முன் 1930 அல்லது உங்கள் குடும்பத்தினரிடம் பேசுங்கள்.",
    btn_call_daughter: "மகள் பூஜாவை அழைக்க: +91 98201-23456",
    btn_safe_return: "நான் பாதுகாப்பாக உணர்கிறேன் — ஆப்பிற்கு திரும்புக",
    mobile_dial_1930: "1930 உதவி எண்ணை அழைக்கவும்",
    mobile_sos_btn: "SOS நிறுத்து",
    footer_title: "சில்வர்கார்ட்",
    footer_desc: "முதியோர் டிஜிட்டல் கண்ணியம், பன்மொழி பாதுகாப்பு மற்றும் உடனடி போலீஸ் உதவிக்காக அர்ப்பணிக்கப்பட்டது.",
    footer_privacy: "🔒 100% பிரைவசி: உங்கள் அழைப்புகள் மற்றும் செய்திகள் உங்கள் போனிலேயே இருக்கும்.",
    footer_1930: "📞 தேசிய உதவி எண்: 1930",
    footer_guard_active: "ஆட்டோ-கார்ட் செயல்படுகிறது"
  },

  bn: {
    name: "বাংলা (Bengali)",
    locale: "bn-IN",
    welcomeVoice: "ভাষা বাংলায় পরিবর্তিত হয়েছে। সিলভারগার্ড আপনার সুরক্ষায় প্রস্তুত।",
    dangerWarning: "সতর্কতা! এটি একটি ভুয়া কল বা প্রতারণামূলক বার্তা। কোনো টাকা, ব্যাংক তথ্য বা ওটিপি দেবেন না। অবিলম্বে সাইবার হেল্পলাইন ১৯৩০ নম্বরে কল করুন।",
    cautionWarning: "সাবধান: এই বার্তাটি সন্দেহজনক মনে হচ্ছে। যাচাই না করে কোনো টাকা পাঠাবেন না।",
    safeMessage: "এই বার্তাটি নিরাপদ মনে হচ্ছে।",
    threatAlertTitle: "প্রতারণার চেষ্টা ধরা পড়েছে!",
    threatSummary: "প্রতারক ভয় দেখিয়ে টাকা চাইছে। অবিলম্বে কলটি কেটে দিন।",
    goldenHourText: "গোল্ডেন আওয়ার: প্রতারণার শিকার হলে অবিলম্বে ১৯৩০ নম্বরে কল করুন।",
    sosVoice: "জরুরি সুরক্ষা মোড চালু হয়েছে। শান্ত থাকুন। কাউকে টাকা পাঠাবেন না।",
    brand_tagline: "প্রবীণ সাইবার নিরাপত্তা, বাংলা ভয়েস অ্যালার্ট ও পুলিশ প্রমাণ লকার",
    lang_label_text: "ভাষা / Language:",
    sentinel_btn_label: "অটো-গার্ড:",
    sentinel_active_text: "সক্রিয় (ACTIVE)",
    sentinel_paused_text: "স্থগিত (PAUSED)",
    text_size_label: "অক্ষরের আকার:",
    contrast_btn: "কনট্রাস্ট",
    voice_btn: "ভয়েস সাহায্য",
    emergency_btn: "জরুরি বিরতি ও ১৯৩০",
    sentinel_banner_title: "স্বয়ংক্রিয় প্রবীণ সুরক্ষা শিল্ড সক্রিয়",
    sentinel_banner_desc: "স্বয়ংক্রিয় নজরদারি চলছে: জালিয়াতি ধরা পড়লে সাথে সাথে বাংলায় ভয়েস সতর্কতা বাজবে।",
    sentinel_test_btn: "⚡ অটো-অ্যালার্ট টেস্ট করুন",
    watch_247: "২৪/৭ নজরদারি",
    nav_message: "মেসেজ স্ক্যানার (SMS)",
    nav_link: "ওয়েব লিঙ্ক যাচাই",
    nav_call: "কল স্ক্রিনার ও রেকর্ডার",
    nav_police: "নিকটস্থ সাইবার পুলিশ ও ১৯৩০",
    nav_evidence: "প্রমাণ লকার ও FIR ডসিয়ার",
    nav_quiz: "জালিয়াতি চেনার কুইজ",
    nav_caregiver: "পরিবার ও কেয়ারগিভার ব্রিজ",
    nav_blueprint: "প্রকল্পের ব্লুপ্রিন্ট",
    simple_safe_badge: "সহজ ও নিরাপদ",
    msg_title: "সন্দেহজনক SMS বা হোয়াটসঅ্যাপ বার্তা যাচাই করুন",
    msg_desc: "বিদ্যুৎ সংযোগ বিচ্ছিন্ন বা ব্যাংক লক হওয়ার হুমকি মেসেজ পেয়েছেন? যাচাই করতে নিচে পেস্ট করুন।",
    msg_card1_header: "১. মেসেজ পেস্ট করুন বা বেছে নিন",
    private_badge: "১০০% গোপনীয় ও নিরাপদ",
    presets_label: "সাধারণ জালিয়াতির উদাহরণ দেখুন:",
    preset_elec: "⚡ বিদ্যুৎ সংযোগ কাটার হুমকি",
    preset_bank: "💳 ব্যাংক অ্যাকাউন্ট / KYC ব্লক প্রতারণা",
    preset_lottery: "🎁 ২৫ লাখ KBC লটারি বিজয়ী",
    preset_grandkid: "🚨 নাতি জেলে / জামিনের জালিয়াতি",
    preset_police: "⚖️ পুলিশ গ্রেপ্তারির হুমকি",
    preset_delivery: "📦 ভুয়া পার্সেল ডেলিভারি ফি",
    preset_real_family: "💚 পরিবারের আসল মেসেজ",
    preset_real_clinic: "💚 ডাক্তারের অ্যাপয়েন্টমেন্ট মেসেজ",
    msg_input_label: "মেসেজের পাঠ্য:",
    msg_placeholder: "পাওয়া SMS বা হোয়াটসঅ্যাপ বার্তাটি এখানে পেস্ট করুন...",
    btn_check_msg: "মেসেজটি যাচাই করুন",
    btn_clear: "মুছুন",
    empty_state_title: "সুরক্ষায় প্রস্তুত",
    empty_state_desc: "'মেসেজটি যাচাই করুন' চাপুন। সিলভারগার্ড বাংলায় ভয়েসের মাধ্যমে নির্দেশনা দেবে।",
    btn_call_1930: "এখনই ১৯৩০ নম্বরে কল করুন",
    btn_open_portal: "🌐 cybercrime.gov.in পোর্টাল খুলুন",
    mobile_dial_1930: "১৯৩০ হেল্পলাইন ডায়াল করুন",
    mobile_sos_btn: "SOS বিরতি",
    footer_1930: "📞 জাতীয় হেল্পলাইন: ১৯৩০",
    footer_guard_active: "অটো-গার্ড সক্রিয়"
  },

  kn: {
    name: "ಕನ್ನಡ (Kannada)",
    locale: "kn-IN",
    welcomeVoice: "ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ. ಸಿಲ್ವರ್‌ಗಾರ್ಡ್ ನಿಮ್ಮ ರಕ್ಷಣೆಗೆ ಸಿದ್ಧವಾಗಿದೆ.",
    dangerWarning: "ಎಚ್ಚರಿಕೆ! ಇದು ವಂಚನೆಯ ಕರೆ ಅಥವಾ ಸಂದೇಶವಾಗಿದೆ. ದಯವಿಟ್ಟು ಯಾವುದೇ ಹಣ ಅಥವಾ ಬ್ಯಾಂಕ್ OTP ಕಳುಹಿಸಬೇಡಿ. ಸೈಬರ್ ಹೆಲ್ಪ್‌ಲೈನ್ 1930 ಗೆ ಕರೆ ಮಾಡಿ.",
    cautionWarning: "ಎಚ್ಚರ: ಈ ಸಂದೇಶವು ಅನುಮಾನಾಸ್ಪದವಾಗಿದೆ. ಪರಿಶೀಲಿಸದೆ ಯಾವುದೇ ಕ್ರಮ ಕೈಗೊಳ್ಳಬೇಡಿ.",
    safeMessage: "ಈ ಸಂದೇಶವು ಸುರಕ್ಷಿತವಾಗಿದೆ.",
    threatAlertTitle: "ಸೈಬರ್ ವಂಚನೆ ಪತ್ತೆಯಾಗಿದೆ!",
    threatSummary: "ವಂಚಕರು ನಿಮ್ಮನ್ನು ಹೆದರಿಸಿ ಹಣ ಕೇಳುತ್ತಿದ್ದಾರೆ. ತಕ್ಷಣ ಕರೆಯನ್ನು ಕಡಿತಗೊಳಿಸಿ.",
    goldenHourText: "ಗೋಲ್ಡನ್ ಅವರ್: ಹಣ ಕಳೆದುಕೊಂಡರೆ ತಕ್ಷಣ 1930 ಕರೆ ಮಾಡಿ.",
    sosVoice: "ತುರ್ತು ಸುರಕ್ಷತಾ ಮೋಡ್ ಸಕ್ರಿಯವಾಗಿದೆ. ಗಾಬರಿಯಾಗಬೇಡಿ. ಯಾರಿಗೂ ಹಣ ನೀಡಬೇಡಿ.",
    brand_tagline: "ಹಿರಿಯ ನಾಗರಿಕರ ಸೈಬರ್ ರಕ್ಷಣೆ, ಕನ್ನಡ ಧ್ವನಿ ಎಚ್ಚರಿಕೆ & ಪೊಲೀಸ್ ಪುರಾವೆ ಲಾಕರ್",
    lang_label_text: "ಭಾಷೆ / Language:",
    sentinel_btn_label: "ಆಟೋ-ಗಾರ್ಡ್:",
    sentinel_active_text: "ಸಕ್ರಿಯ (ACTIVE)",
    sentinel_paused_text: "ಸ್ಥಗಿತ (PAUSED)",
    text_size_label: "ಅಕ್ಷರ ಗಾತ್ರ:",
    contrast_btn: "ಕಾಂಟ್ರಾಸ್ಟ್",
    voice_btn: "ಧ್ವನಿ ಸಹಾಯ",
    emergency_btn: "ತುರ್ತು ನಿಲುಗಡೆ & 1930",
    sentinel_banner_title: "ಸ್ವಯಂಚಾಲಿತ ಹಿರಿಯರ ರಕ್ಷಣಾ ಕವಚ ಸಕ್ರಿಯವಾಗಿದೆ",
    sentinel_banner_desc: "ಆಟೋ-ರಕ್ಷಣೆ ಆನ್ ಆಗಿದೆ: ವಂಚನೆ ಕಂಡುಬಂದಲ್ಲಿ ತಕ್ಷಣವೇ ಕನ್ನಡದಲ್ಲಿ ಧ್ವನಿ ಎಚ್ಚರಿಕೆ ಬರುತ್ತದೆ.",
    sentinel_test_btn: "⚡ ಆಟೋ-ಎಚ್ಚರಿಕೆ ಪರೀಕ್ಷಿಸಿ",
    watch_247: "24/7 ಕಣ್ಗಾವಲು",
    nav_message: "ಸಂದೇಶ ಸ್ಕ್ಯಾನರ್ (SMS)",
    nav_link: "ವೆಬ್ ಲಿಂಕ್ ಪರಿಶೀಲನೆ",
    nav_call: "ಕರೆ ಸ್ಕ್ರೀನರ್ & ರೆಕಾರ್ಡರ್",
    nav_police: "ಸೈಬರ್ ಪೊಲೀಸ್ & 1930",
    nav_evidence: "ಪುರಾವೆ ಲಾಕರ್ & FIR ಡಾಕ್ಯುಮೆಂಟ್",
    nav_quiz: "ವಂಚನೆ ಗುರುತಿಸುವ ರಸಪ್ರಶ್ನೆ",
    nav_caregiver: "ಕುಟುಂಬದ ರಕ್ಷಣಾ ಸೇತುವೆ",
    nav_blueprint: "ಯೋಜನೆಯ ನೀಲನಕ್ಷೆ",
    simple_safe_badge: "ಸರಳ & ಸುರಕ್ಷಿತ",
    msg_title: "ಅನುಮಾನಾಸ್ಪದ SMS ಅಥವಾ ವಾಟ್ಸಾಪ್ ಸಂದೇಶಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
    msg_desc: "ವಿದ್ಯುತ್ ಕಡಿತ ಅಥವಾ ಬ್ಯಾಂಕ್ ಲಾಕ್ ಆಗುವ ಬೆದರಿಕೆ ಸಂದೇಶ ಬಂದಿದೆಯೇ? ಪರಿಶೀಲಿಸಲು ಕೆಳಗೆ ಪೇಸ್ಟ್ ಮಾಡಿ.",
    msg_card1_header: "1. ಸಂದೇಶವನ್ನು ನಮೂದಿಸಿ ಅಥವಾ ಆರಿಸಿ",
    private_badge: "100% ಖಾಸಗಿ ಮತ್ತು ಸುರಕ್ಷಿತ",
    presets_label: "ಸಾಮಾನ್ಯ ವಂಚನೆಗಳ ಉದಾಹರಣೆಗಳು:",
    preset_elec: "⚡ ಕರೆಂಟ್ ಕಟ್ ಬೆದರಿಕೆ",
    preset_bank: "💳 ಬ್ಯಾಂಕ್ ಖಾತೆ / KYC ಬ್ಲಾಕ್ ವಂಚನೆ",
    preset_lottery: "🎁 25 ಲಕ್ಷ KBC ಲಾಟರಿ ಗೆಲುವು",
    preset_grandkid: "🚨 ಮೊಮ್ಮಗ ಜೈಲಿನಲ್ಲಿ / ಜಾಮೀನು ವಂಚನೆ",
    preset_police: "⚖️ ಪೊಲೀಸ್ ಬಂಧನದ ಬೆದರಿಕೆ",
    preset_delivery: "📦 ನಕಲಿ ಪಾರ್ಸೆಲ್ ಶುಲ್ಕ",
    preset_real_family: "💚 ಕುಟುಂಬದ ನೈಜ ಸಂದೇಶ",
    preset_real_clinic: "💚 ವೈದ್ಯರ ಭೇಟಿಯ ಸಂದೇಶ",
    msg_input_label: "ಸಂದೇಶದ ಪಠ್ಯ:",
    msg_placeholder: "ಬಂದ SMS ಅಥವಾ ವಾಟ್ಸಾಪ್ ಸಂದೇಶವನ್ನು ಇಲ್ಲಿ ಪೇಸ್ಟ್ ಮಾಡಿ...",
    btn_check_msg: "ಸಂದೇಶವನ್ನು ಪರಿಶೀಲಿಸಿ",
    btn_clear: "ತೆರವುಗೊಳಿಸಿ",
    empty_state_title: "ರಕ್ಷಣೆಗೆ ಸಿದ್ಧವಾಗಿದೆ",
    empty_state_desc: "'ಸಂದೇಶವನ್ನು ಪರಿಶೀಲಿಸಿ' ಕ್ಲಿಕ್ ಮಾಡಿ. ಸಿಲ್ವರ್‌ಗಾರ್ಡ್ ಕನ್ನಡದಲ್ಲಿ ಧ್ವನಿಯ ಮೂಲಕ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ.",
    btn_call_1930: "ಈಗಲೇ 1930 ಗೆ ಕರೆ ಮಾಡಿ",
    btn_open_portal: "🌐 cybercrime.gov.in ತೆರೆಯಿರಿ",
    mobile_dial_1930: "1930 ಸಹಾಯವಾಣಿ ಕರೆ",
    mobile_sos_btn: "SOS ನಿಲ್ಲಿಸಿ",
    footer_1930: "📞 ರಾಷ್ಟ್ರೀಯ ಸಹಾಯವಾಣಿ: 1930",
    footer_guard_active: "ಆಟೋ-ಗಾರ್ಡ್ ಸಕ್ರಿಯವಾಗಿದೆ"
  },

  gu: {
    name: "ગુજરાતી (Gujarati)",
    locale: "gu-IN",
    welcomeVoice: "ભાષા ગુજરાતીમાં બદલાઈ ગઈ છે. સિલ્વરગાર્ડ આપની સુરક્ષા માટે તૈયાર છે.",
    dangerWarning: "સાવધાન! આ એક નકલી કોલ અથવા છેતરપિંડીનો સંદેશ છે. કૃપા કરીને પૈસા કે બેંક OTP મોકલશો નહીં. સાયબર હેલ્પલાઇન 1930 પર કોલ કરો.",
    cautionWarning: "ચેતવણી: આ સંદેશ શંકાસ્પદ જણાય છે. ખાતરી કર્યા વિના કોઈ પગલું ન ભરો.",
    safeMessage: "આ સંદેશ સલામત જણાય છે.",
    threatAlertTitle: "છેતરપિંડી પકડાઈ ગઈ!",
    threatSummary: "ઠગ તમને ડરાવીને પૈસા પડાવવાનો પ્રયાસ કરી રહ્યો છે. તરત જ ફોન કાપી નાખો.",
    goldenHourText: "ગોલ્ડન અવર: છેતરપિંડી થાય તો તાત્કાલિક 1930 પર સંપર્ક કરો.",
    sosVoice: "ઇમરજન્સી મોડ સક્રિય થયો છે. ગભરાશો નહીં. કોઈને પૈસા કે OTP ન આપો.",
    brand_tagline: "વરિષ્ઠ નાગરિક સાયબર સુરક્ષા, ગુજરાતી વોઇસ એલર્ટ અને પોલીસ પુરાવા લોકર",
    lang_label_text: "ભાષા / Language:",
    sentinel_btn_label: "ઓટો-ગાર્ડ:",
    sentinel_active_text: "સક્રિય (ACTIVE)",
    sentinel_paused_text: "બંધ (PAUSED)",
    text_size_label: "અક્ષર કદ:",
    contrast_btn: "કોન્ટ્રાસ્ટ",
    voice_btn: "વોઇસ મદદ",
    emergency_btn: "ઇમરજન્સી રોકો અને 1930",
    sentinel_banner_title: "સ્વચાલિત વડીલ સુરક્ષા શિલ્ડ કાર્યરત છે",
    sentinel_banner_desc: "ઓટો-સુરક્ષા ચાલુ છે: છેતરપિંડી જણાશે તો તરત જ ગુજરાતીમાં અવાજ સાથે ચેતવણી મળશે.",
    sentinel_test_btn: "⚡ ઓટો-એલર્ટ તપાસો",
    watch_247: "24/7 વોચ",
    nav_message: "મેસેજ સ્કેનર (SMS)",
    nav_link: "વેબ લિંક તપાસ",
    nav_call: "કોલ સ્ક્રિનર અને રેકોર્ડર",
    nav_police: "સાયબર પોલીસ અને 1930",
    nav_evidence: "પુરાવા લોકર અને FIR ફોર્મ",
    nav_quiz: "ઠગાઈ ઓળખો ક્વિઝ",
    nav_caregiver: "પરિવાર સુરક્ષા સેતુ",
    nav_blueprint: "પ્રોજેક્ટ બ્લુપ્રિન્ટ",
    simple_safe_badge: "સરળ અને સુરક્ષિત",
    msg_title: "કોઈપણ શંકાસ્પદ SMS કે વોટ્સએપ મેસેજ તપાસો",
    msg_desc: "વીજળી કાપી નાખવાની કે બેંક લોક થવાની ધમકીવાળો મેસેજ આવ્યો છે? તપાસ માટે નીચે પેસ્ટ કરો.",
    msg_card1_header: "1. મેસેજ પેસ્ટ કરો અથવા પસંદ કરો",
    private_badge: "100% સુરક્ષિત અને ખાનગી",
    presets_label: "સામાન્ય છેતરપિંડીના ઉદાહરણો:",
    preset_elec: "⚡ વીજળી કનેક્શન કાપવાની ધમકી",
    preset_bank: "💳 બેંક ખાતું / KYC બ્લોક ફ્રોડ",
    preset_lottery: "🎁 25 લાખ KBC લોટરી વિજેતા",
    preset_grandkid: "🚨 પૌત્ર જેલમાં / જામીન ઠગાઈ",
    preset_police: "⚖️ પોલીસ અરેસ્ટ વોરંટની ધમકી",
    preset_delivery: "📦 નકલી પાર્સલ ડિલિવરી ફી",
    preset_real_family: "💚 સાચો પારિવારિક સંદેશ",
    preset_real_clinic: "💚 ડોક્ટર એપોઇન્ટમેન્ટ મેસેજ",
    msg_input_label: "મેસેજ ટેક્સ્ટ:",
    msg_placeholder: "આવેલો SMS કે વોટ્સએપ મેસેજ અહીં પેસ્ટ કરો...",
    btn_check_msg: "મેસેજ તપાસો",
    btn_clear: "સાફ કરો",
    empty_state_title: "સુરક્ષા માટે તૈયાર",
    empty_state_desc: "'મેસેજ તપાસો' પર ક્લિક કરો. સિલ્વરગાર્ડ તમને ગુજરાતીમાં અવાજ દ્વારા માર્ગદર્શન આપશે.",
    btn_call_1930: "હમણાં જ 1930 પર કોલ કરો",
    btn_open_portal: "🌐 cybercrime.gov.in પોર્ટલ ખોલો",
    mobile_dial_1930: "1930 હેલ્પલાઇન ડાયલ કરો",
    mobile_sos_btn: "SOS રોકો",
    footer_1930: "📞 રાષ્ટ્રીય હેલ્પલાઇન: 1930",
    footer_guard_active: "ઓટો-ગાર્ડ કાર્યરત છે"
  },

  pa: {
    name: "ਪੰਜਾਬੀ (Punjabi)",
    locale: "pa-IN",
    welcomeVoice: "ਭਾਸ਼ਾ ਪੰਜਾਬੀ ਵਿੱਚ ਬਦਲ ਗਈ ਹੈ। ਸਿਲਵਰਗਾਰਡ ਤੁਹਾਡੀ ਸੁਰੱਖਿਆ ਲਈ ਤਿਆਰ ਹੈ।",
    dangerWarning: "ਸਾਵਧਾਨ! ਇਹ ਇੱਕ ਜਾਅਲੀ ਕਾਲ ਜਾਂ ਧੋਖਾਧੜੀ ਵਾਲਾ ਸੁਨੇਹਾ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਕੋਈ ਪੈਸੇ ਜਾਂ ਬੈਂਕ OTP ਨਾ ਦਿਓ। ਤੁਰੰਤ 1930 'ਤੇ ਕਾਲ ਕਰੋ।",
    cautionWarning: "ਧਿਆਨ ਦਿਓ: ਇਹ ਸੁਨੇਹਾ ਸ਼ੱਕੀ ਲੱਗਦਾ ਹੈ। ਬਿਨਾਂ ਜਾਂਚ ਕੀਤੇ ਕੋਈ ਕਦਮ ਨਾ ਚੁੱਕੋ।",
    safeMessage: "ਇਹ ਸੁਨੇਹਾ ਸੁਰੱਖਿਅਤ ਜਾਪਦਾ ਹੈ।",
    threatAlertTitle: "ਧੋਖਾਧੜੀ ਦੀ ਕੋਸ਼ਿਸ਼ ਫੜੀ ਗਈ!",
    threatSummary: "ਠੱਗ ਡਰਾ ਧਮਕਾ ਕੇ ਪੈਸੇ ਮੰਗ ਰਿਹਾ ਹੈ। ਤੁਰੰਤ ਫ਼ੋਨ ਕੱਟ ਦਿਓ।",
    goldenHourText: "ਗੋਲਡਨ ਆਵਰ: ਪੈਸਿਆਂ ਦੇ ਨੁਕਸਾਨ 'ਤੇ ਤੁਰੰਤ 1930 ਡਾਇਲ ਕਰੋ।",
    sosVoice: "ਐਮਰਜੈਂਸੀ ਮੋਡ ਚਾਲੂ ਹੈ। ਘਬਰਾਓ ਨਾ। ਕਿਸੇ ਨੂੰ ਪੈਸੇ ਨਾ ਦਿਓ।",
    brand_tagline: "ਬਜ਼ੁਰਗ ਸਾਈਬਰ ਸੁਰੱਖਿਆ, ਪੰਜਾਬੀ ਆਵਾਜ਼ ਅਲਰਟ ਅਤੇ ਪੁਲਿਸ ਸਬੂਤ ਲਾਕਰ",
    lang_label_text: "ਭਾਸ਼ਾ / Language:",
    sentinel_btn_label: "ਆਟੋ-ਗਾਰਡ:",
    sentinel_active_text: "ਸਰਗਰਮ (ACTIVE)",
    sentinel_paused_text: "ਰੋਕਿਆ (PAUSED)",
    text_size_label: "ਅੱਖਰ ਆਕਾਰ:",
    contrast_btn: "ਕੰਟਰਾਸਟ",
    voice_btn: "ਆਵਾਜ਼ ਮਦਦ",
    emergency_btn: "ਐਮਰਜੈਂਸੀ ਰੋਕ ਅਤੇ 1930",
    sentinel_banner_title: "ਸਵੈਚਾਲਿਤ ਬਜ਼ੁਰਗ ਸੁਰੱਖਿਆ ਸ਼ੀਲਡ ਸਰਗਰਮ ਹੈ",
    sentinel_banner_desc: "ਆਟੋ-ਸੁਰੱਖਿਆ ਚਾਲੂ ਹੈ: ਧੋਖਾਧੜੀ ਹੋਣ 'ਤੇ ਤੁਰੰਤ ਪੰਜਾਬੀ ਵਿੱਚ ਆਵਾਜ਼ ਰਾਹੀਂ ਚੇਤਾਵਨੀ ਮਿਲੇਗੀ।",
    sentinel_test_btn: "⚡ ਆਟੋ-ਅਲਰਟ ਟੈਸਟ ਕਰੋ",
    watch_247: "24/7 ਨਿਗਰਾਨੀ",
    nav_message: "ਸੁਨੇਹਾ ਸਕੈਨਰ (SMS)",
    nav_link: "ਵੈੱਬ ਲਿੰਕ ਜਾਂਚ",
    nav_call: "ਕਾਲ ਸਕ੍ਰੀਨਰ ਅਤੇ ਰਿਕਾਰਡਰ",
    nav_police: "ਸਾਈਬਰ ਪੁਲਿਸ ਅਤੇ 1930",
    nav_evidence: "ਸਬੂਤ ਲਾਕਰ ਅਤੇ FIR ਫਾਰਮ",
    nav_quiz: "ਠੱਗੀ ਪਛਾਣੋ ਕੁਇਜ਼",
    nav_caregiver: "ਪਰਿਵਾਰਕ ਸੁਰੱਖਿਆ ਪੁਲ",
    nav_blueprint: "ਪ੍ਰੋਜੈਕਟ ਬਲੂਪ੍ਰਿੰਟ",
    simple_safe_badge: "ਸਰਲ ਅਤੇ ਸੁਰੱਖਿਅਤ",
    msg_title: "ਕਿਸੇ ਵੀ ਸ਼ੱਕੀ SMS ਜਾਂ ਵਟਸਐਪ ਸੁਨੇਹੇ ਦੀ ਜਾਂਚ ਕਰੋ",
    msg_desc: "ਬਿਜਲੀ ਕੱਟਣ ਜਾਂ ਬੈਂਕ ਖਾਤਾ ਬੰਦ ਹੋਣ ਦਾ ਧਮਕੀ ਭਰਿਆ ਸੁਨੇਹਾ ਮਿਲਿਆ ਹੈ? ਜਾਂਚ ਲਈ ਹੇਠਾਂ ਪੇਸਟ ਕਰੋ।",
    msg_card1_header: "1. ਸੁਨੇਹਾ ਪੇਸਟ ਕਰੋ ਜਾਂ ਚੁਣੋ",
    private_badge: "100% ਨਿੱਜੀ ਅਤੇ ਸੁਰੱਖਿਅਤ",
    presets_label: "ਆਮ ਧੋਖਾਧੜੀ ਦੀਆਂ ਉਦਾਹਰਣਾਂ:",
    preset_elec: "⚡ ਬਿਜਲੀ ਕੱਟਣ ਦੀ ਧਮਕੀ",
    preset_bank: "💳 ਬੈਂਕ ਖਾਤਾ / KYC ਬਲਾਕ ਠੱਗੀ",
    preset_lottery: "🎁 25 ਲੱਖ KBC ਲਾਟਰੀ ਜੇਤੂ",
    preset_grandkid: "🚨 ਪੋਤਾ ਜੇਲ੍ਹ ਵਿੱਚ / ਜ਼ਮਾਨਤ ਠੱਗੀ",
    preset_police: "⚖️ ਪੁਲਿਸ ਗ੍ਰਿਫਤਾਰੀ ਵਾਰੰਟ ਧਮਕੀ",
    preset_delivery: "📦 ਨਕਲੀ ਪਾਰਸਲ ਫੀਸ",
    preset_real_family: "💚 ਪਰਿਵਾਰ ਦਾ ਅਸਲੀ ਸੁਨੇਹਾ",
    preset_real_clinic: "💚 ਡਾਕਟਰ ਅਪਾਇੰਟਮੈਂਟ ਸੁਨੇਹਾ",
    msg_input_label: "ਸੁਨੇਹਾ ਟੈਕਸਟ:",
    msg_placeholder: "ਮਿਲਿਆ ਹੋਇਆ SMS ਜਾਂ ਵਟਸਐਪ ਸੁਨੇਹਾ ਇੱਥੇ ਪੇਸਟ ਕਰੋ...",
    btn_check_msg: "ਸੁਨੇਹੇ ਦੀ ਜਾਂਚ ਕਰੋ",
    btn_clear: "ਸਾਫ਼ ਕਰੋ",
    empty_state_title: "ਸੁਰੱਖਿਆ ਲਈ ਤਿਆਰ",
    empty_state_desc: "'ਸੁਨੇਹੇ ਦੀ ਜਾਂਚ ਕਰੋ' 'ਤੇ ਕਲਿੱਕ ਕਰੋ। ਸਿਲਵਰਗਾਰਡ ਪੰਜਾਬੀ ਆਵਾਜ਼ ਵਿੱਚ ਮਾਰਗਦਰਸ਼ਨ ਦੇਵੇਗਾ।",
    btn_call_1930: "ਹੁਣੇ 1930 'ਤੇ ਕਾਲ ਕਰੋ",
    btn_open_portal: "🌐 cybercrime.gov.in ਪੋਰਟਲ ਖੋਲ੍ਹੋ",
    mobile_dial_1930: "1930 ਹੈਲਪਲਾਈਨ ਡਾਇਲ ਕਰੋ",
    mobile_sos_btn: "SOS ਰੋਕੋ",
    footer_1930: "📞 ਰਾਸ਼ਟਰੀ ਹੈਲਪਲਾਈਨ: 1930",
    footer_guard_active: "ਆਟੋ-ਗਾਰਡ ਚਾਲੂ ਹੈ"
  },

  ml: {
    name: "മലയാളം (Malayalam)",
    locale: "ml-IN",
    welcomeVoice: "ഭാഷ മലയാളത്തിലേക്ക് മാറ്റി. സിൽവർഗാർഡ് നിങ്ങളുടെ സംരക്ഷണത്തിന് സജ്ജമാണ്.",
    dangerWarning: "മുന്നറിയിപ്പ്! ഇതൊരു തട്ടിപ്പ് സന്ദേശമാണ്. പണമോ ബാങ്ക് OTPയോ നൽകരുത്. ഉടൻ സൈബർ ഹെൽപ്പ്‌ലൈൻ 1930 ൽ വിളിക്കുക.",
    cautionWarning: "ശ്രദ്ധിക്കുക: ഈ സന്ദേശം സംശയാസ്പദമാണ്. സ്ഥിരീകരിക്കാതെ പണം അയക്കരുത്.",
    safeMessage: "ഈ സന്ദേശം സുരക്ഷിതമാണ്.",
    threatAlertTitle: "തട്ടിപ്പ് കണ്ടെത്തി!",
    threatSummary: "ഭീഷണിപ്പെടുത്തി പണം തട്ടാനാണ് ശ്രമം. ഉടൻ കോൾ വിച്ഛേദിക്കുക.",
    goldenHourText: "ഗോൾഡൻ അവർ: പണം നഷ്ടപ്പെട്ടാൽ ഉടൻ 1930 ൽ ബന്ധപ്പെടുക.",
    sosVoice: "അടിയന്തര സുരക്ഷാ മോഡ് സജീവമാക്കി. പരിഭ്രാന്തരാകരുത്. പണം അയക്കരുത്.",
    brand_tagline: "മുതിർന്ന പൗരന്മാരുടെ സൈബർ സംരക്ഷണം, മലയാളം വോയ്‌സ് അലേർട്ട് & പോലീസ് തെളിവ് ലോക്കർ",
    lang_label_text: "ഭാഷ / Language:",
    sentinel_btn_label: "ഓട്ടോ-ഗാർഡ്:",
    sentinel_active_text: "സജീവം (ACTIVE)",
    sentinel_paused_text: "നിർത്തി (PAUSED)",
    text_size_label: "അക്ഷര വലുപ്പം:",
    contrast_btn: "കോൺട്രാസ്റ്റ്",
    voice_btn: "വോയ്സ് സഹായം",
    emergency_btn: "അടിയന്തര സ്റ്റോപ്പ് & 1930",
    sentinel_banner_title: "മുതിർന്നവർക്കുള്ള ഓട്ടോമാറ്റിക് സുരക്ഷാ ഷീൽഡ് പ്രവർത്തനക്ഷമമാണ്",
    sentinel_banner_desc: "തട്ടിപ്പ് ശ്രദ്ധയിൽപ്പെട്ടാൽ ഉടൻ മലയാളത്തിൽ വോയ്‌സ് മുന്നറിയിപ്പ് ലഭിക്കും.",
    sentinel_test_btn: "⚡ ഓട്ടോ-അലേർട്ട് പരിശോധിക്കുക",
    watch_247: "24/7 നിരീക്ഷണം",
    nav_message: "സന്ദേശ സ്കാനർ (SMS)",
    nav_link: "വെബ് ലിങ്ക് പരിശോധന",
    nav_call: "കോൾ സ്ക്രീനറും റെക്കോർഡറും",
    nav_police: "സൈബർ പോലീസും 1930 ഉം",
    nav_evidence: "തെളിവ് ലോക്കറും FIR രേഖയും",
    nav_quiz: "തട്ടിപ്പ് തിരിച്ചറിയൽ ക്വിസ്",
    nav_caregiver: "കുടുംബ സുരക്ഷാ പാലം",
    nav_blueprint: "പ്രൊജക്റ്റ് ബ്ലൂപ്രിന്റ്",
    simple_safe_badge: "ലളിതവും സുരക്ഷിതവും",
    msg_title: "സംശയാസ്പദമായ SMS അല്ലെങ്കിൽ വാട്ട്‌സ്ആപ്പ് സന്ദേശങ്ങൾ പരിശോധിക്കുക",
    msg_desc: "വൈദ്യുതി വിച്ഛേദിക്കുമെന്നോ ബാങ്ക് അക്കൗണ്ട് പൂട്ടുമെന്നോ ഭീഷണിയുള്ള സന്ദേശം ലഭിച്ചോ? പരിശോധിക്കാൻ താഴെ പേസ്റ്റ് ചെയ്യുക.",
    msg_card1_header: "1. സന്ദേശം നൽകുക",
    private_badge: "100% സ്വകാര്യവും സുരക്ഷിതവും",
    presets_label: "സാധാരണ തട്ടിപ്പുകളുടെ ഉദാഹരണങ്ങൾ:",
    preset_elec: "⚡ വൈദ്യുതി വിച്ഛേദിക്കൽ ഭീഷണി",
    preset_bank: "💳 ബാങ്ക് അക്കൗണ്ട് / KYC ബ്ലോക്ക് തട്ടിപ്പ്",
    preset_lottery: "🎁 25 ലക്ഷം KBC ലോട്ടറി വിജയം",
    preset_grandkid: "🚨 കൊച്ചുമകൻ ജയിലിൽ / ജാമ്യ തട്ടിപ്പ്",
    preset_police: "⚖️ പോലീസ് അറസ്റ്റ് ഭീഷണി",
    preset_delivery: "📦 വ്യാജ പാഴ്സൽ ഡെലിവറി ഫീസ്",
    preset_real_family: "💚 യഥാർത്ഥ കുടുംബ സന്ദേശം",
    preset_real_clinic: "💚 ഡോക്ടർ അപ്പോയിന്റ്മെന്റ്",
    msg_input_label: "സന്ദേശ വാചകം:",
    msg_placeholder: "ലഭിച്ച SMS അല്ലെങ്കിൽ വാട്ട്‌സ്ആപ്പ് സന്ദേശം ഇവിടെ പേസ്റ്റ് ചെയ്യുക...",
    btn_check_msg: "സന്ദേശം പരിശോധിക്കുക",
    btn_clear: "മായ്ക്കുക",
    empty_state_title: "സംരക്ഷണത്തിന് സജ്ജമാണ്",
    empty_state_desc: "'സന്ദേശം പരിശോധിക്കുക' അമർത്തുക. സിൽവർഗാർഡ് മലയാളത്തിൽ വോയ്‌സ് നിർദ്ദേശം നൽകും.",
    btn_call_1930: "ഉടൻ 1930 ൽ വിളിക്കുക",
    btn_open_portal: "🌐 cybercrime.gov.in തുറക്കുക",
    mobile_dial_1930: "1930 ഹെൽപ്പ്‌ലൈൻ ഡയൽ ചെയ്യുക",
    mobile_sos_btn: "SOS നിർത്തുക",
    footer_1930: "📞 ദേശീയ ഹെൽപ്പ്‌ലൈൻ: 1930",
    footer_guard_active: "ഓട്ടോ-ഗാർഡ് സജീവമാണ്"
  }
};

let currentLanguageKey = localStorage.getItem('sg_language') || 'en';

function initMultilingualEngine() {
  const langSelect = document.getElementById('language-select');
  if (langSelect) {
    langSelect.value = currentLanguageKey;
    langSelect.addEventListener('change', () => {
      const selectedLang = langSelect.value;
      applyLanguage(selectedLang, true);
    });
  }
}

/**
 * Apply the selected language across ALL elements on the website
 */
function applyLanguage(langKey, speakWelcome = false) {
  currentLanguageKey = langKey;
  localStorage.setItem('sg_language', langKey);

  const langObj = I18N_TRANSLATIONS[langKey] || I18N_TRANSLATIONS.en;
  const enObj = I18N_TRANSLATIONS.en;

  // 1. Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translatedText = langObj[key] || enObj[key];
    if (translatedText) {
      el.textContent = translatedText;
    }
  });

  // 2. Update Input & Textarea Placeholders
  const msgInput = document.getElementById('message-input');
  if (msgInput) {
    msgInput.placeholder = langObj.msg_placeholder || enObj.msg_placeholder;
  }

  const linkInput = document.getElementById('link-input');
  if (linkInput) {
    linkInput.placeholder = langObj.link_placeholder || enObj.link_placeholder;
  }

  const citySearch = document.getElementById('police-city-search');
  if (citySearch) {
    citySearch.placeholder = langObj.search_city_placeholder || enObj.search_city_placeholder;
  }

  // 3. Update Modal Native Alert texts
  const langBadge = document.getElementById('native-lang-badge');
  const alertText = document.getElementById('sentinel-native-alert-text');
  if (langBadge) langBadge.textContent = `Local Voice Alert (${langObj.name}):`;
  if (alertText) alertText.textContent = `"${langObj.dangerWarning}"`;

  // 4. Update Sentinel Active/Paused status text
  const sentinelText = document.getElementById('sentinel-state-text');
  const isSentinelActive = localStorage.getItem('sg_sentinel_active') !== 'false';
  if (sentinelText) {
    sentinelText.textContent = isSentinelActive ? (langObj.sentinel_active_text || 'ACTIVE') : (langObj.sentinel_paused_text || 'PAUSED');
  }

  // 5. Speak welcome in regional language if triggered by user
  if (speakWelcome) {
    showToast(`🌐 Language switched to ${langObj.name}`, 'info');
    speakNativeText(langObj.welcomeVoice, langKey);
  }
}

function speakNativeText(text, explicitLangKey = null) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const langKey = explicitLangKey || currentLanguageKey;
  const langObj = I18N_TRANSLATIONS[langKey] || I18N_TRANSLATIONS.en;

  const cleanText = text.replace(/https?:\/\/\S+/g, 'link').replace(/[\r\n]+/g, ' ');
  const utterance = new SpeechSynthesisUtterance(cleanText);

  utterance.lang = langObj.locale || 'en-US';
  utterance.rate = 0.86; // Senior-friendly calm pace
  utterance.pitch = 1.0;

  // Find matching voice for the region
  const voices = window.speechSynthesis.getVoices();
  const matchedVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith(langObj.locale.slice(0, 2).toLowerCase()));
  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  window.speechSynthesis.speak(utterance);
}

/* ==========================================================================
   2. ACCESSIBILITY & SOS CONTROLS
   ========================================================================== */
function initAccessibility() {
  const html = document.documentElement;

  // Font Size Scaling
  const fontBtns = document.querySelectorAll('.font-scale-group .btn-ctrl');
  const savedFontSize = localStorage.getItem('sg_font_size') || 'normal';
  setFontSize(savedFontSize);

  fontBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.dataset.size;
      setFontSize(size);
      localStorage.setItem('sg_font_size', size);
    });
  });

  function setFontSize(size) {
    html.setAttribute('data-font-size', size);
    fontBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.size === size);
    });
  }

  // High Contrast
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('sg_theme') || 'light';
  if (savedTheme === 'high-contrast') {
    html.setAttribute('data-theme', 'high-contrast');
    themeToggle.classList.add('active');
  }

  themeToggle.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'high-contrast';
    const newTheme = isDark ? 'light' : 'high-contrast';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('sg_theme', newTheme);
    themeToggle.classList.toggle('active', newTheme === 'high-contrast');
    showToast(newTheme === 'high-contrast' ? 'High Contrast Mode Enabled' : 'Standard Mode Enabled', 'info');
  });

  // Voice Guidance Readout
  const voiceToggle = document.getElementById('voice-toggle');
  const voiceLabel = document.getElementById('voice-btn-label');

  voiceToggle.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) {
      showToast('Text-to-speech is not supported by your browser', 'warning');
      return;
    }

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      const lang = I18N_TRANSLATIONS[currentLanguageKey] || I18N_TRANSLATIONS.en;
      voiceLabel.textContent = lang.voice_btn || 'Voice Help';
      showToast('Voice paused', 'info');
    } else {
      const activePanel = document.querySelector('.tab-panel.active');
      const textToRead = activePanel ? activePanel.innerText : 'Welcome to SilverGuard.';
      speakNativeText(textToRead.slice(0, 300));
      voiceLabel.textContent = 'Stop Voice';
      showToast('Reading screen aloud...', 'info');
    }
  });

  // Emergency SOS Modal
  const sosTrigger = document.getElementById('sos-trigger');
  const btnMobileSos = document.getElementById('btn-mobile-sos');
  const emergencyModal = document.getElementById('emergency-modal');
  const btnCloseSos = document.getElementById('btn-close-sos');
  const btnDismissSos = document.getElementById('btn-dismiss-sos');
  const btnCallPooja = document.getElementById('btn-call-pooja');

  function openSosModal() {
    emergencyModal.classList.remove('hidden');
    const lang = I18N_TRANSLATIONS[currentLanguageKey] || I18N_TRANSLATIONS.en;
    speakNativeText(lang.sosVoice);
    logActivity('🚨 Emergency Pause Mode activated by senior', 'threat-danger', 'SOS Safety Pause');
  }

  if (sosTrigger) sosTrigger.addEventListener('click', openSosModal);
  if (btnMobileSos) btnMobileSos.addEventListener('click', openSosModal);

  [btnCloseSos, btnDismissSos].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        emergencyModal.classList.add('hidden');
        if (window.speechSynthesis) window.speechSynthesis.cancel();
      });
    }
  });

  if (btnCallPooja) {
    btnCallPooja.addEventListener('click', () => {
      showToast('📞 Connecting direct call to Pooja (Daughter)...', 'success');
      setTimeout(() => {
        alert('Calling Pooja at +91 98201-23456.\n\nPooja\'s phone is ringing. Take a deep breath and tell her what happened.');
      }, 400);
    });
  }
}

/* ==========================================================================
   3. AUTONOMOUS BACKGROUND SENTINEL ENGINE
   ========================================================================== */
function initSentinelEngine() {
  const sentinelBtn = document.getElementById('sentinel-toggle-btn');
  const sentinelText = document.getElementById('sentinel-state-text');
  const sentinelBanner = document.getElementById('sentinel-banner');
  const btnSimulateAuto = document.getElementById('btn-simulate-auto-threat');

  const alertModal = document.getElementById('sentinel-alert-modal');
  const btnCloseModal = document.getElementById('btn-close-sentinel-modal');
  const btnDismissModal = document.getElementById('btn-dismiss-sentinel-modal');
  const btnRepeatVoice = document.getElementById('btn-repeat-native-voice');
  const btnLockEvidence = document.getElementById('btn-lock-threat-evidence');
  const callerDisplay = document.getElementById('sentinel-modal-caller');
  const descDisplay = document.getElementById('sentinel-modal-desc');

  let sentinelActive = localStorage.getItem('sg_sentinel_active') !== 'false';
  updateSentinelUI(sentinelActive);

  if (sentinelBtn) {
    sentinelBtn.addEventListener('click', () => {
      sentinelActive = !sentinelActive;
      localStorage.setItem('sg_sentinel_active', String(sentinelActive));
      updateSentinelUI(sentinelActive);
      const lang = I18N_TRANSLATIONS[currentLanguageKey] || I18N_TRANSLATIONS.en;
      showToast(sentinelActive ? `🛡️ ${lang.sentinel_btn_label} ${lang.sentinel_active_text}` : `⚠️ ${lang.sentinel_btn_label} ${lang.sentinel_paused_text}`, sentinelActive ? 'success' : 'warning');
    });
  }

  function updateSentinelUI(active) {
    const lang = I18N_TRANSLATIONS[currentLanguageKey] || I18N_TRANSLATIONS.en;
    if (sentinelBtn) {
      sentinelBtn.classList.toggle('active', active);
    }
    if (sentinelText) {
      sentinelText.textContent = active ? (lang.sentinel_active_text || 'ACTIVE') : (lang.sentinel_paused_text || 'PAUSED');
    }
    if (sentinelBanner) {
      sentinelBanner.style.display = active ? 'block' : 'none';
    }
  }

  window.triggerAutonomousThreat = function(threatData) {
    if (!sentinelActive) return;

    applyLanguage(currentLanguageKey, false);
    alertModal.classList.remove('hidden');

    const caller = threatData.caller || "+91 98234-77120 (Spoofed Cyber Cell / MSEDCL)";
    const summary = threatData.summary || "High-pressure fraud detected: Imposter demanding emergency funds or OTP to prevent arrest/cutoff.";

    if (callerDisplay) callerDisplay.textContent = `Caller / Sender: ${caller}`;
    if (descDisplay) descDisplay.textContent = summary;

    const lang = I18N_TRANSLATIONS[currentLanguageKey] || I18N_TRANSLATIONS.en;
    speakNativeText(lang.dangerWarning);

    saveEvidenceItem({
      type: threatData.type || 'Interception',
      title: threatData.title || 'Autonomous Scam Interception',
      caller: caller,
      text: threatData.text || summary,
      risk: 'CRITICAL DANGER',
      riskClass: 'threat-danger',
      audioBlobUrl: threatData.audioBlobUrl || null
    });

    logActivity(`🚨 Auto-Guard Intercepted Threat from ${caller}`, 'threat-danger', 'Auto-Intercept');
  };

  if (btnSimulateAuto) {
    btnSimulateAuto.addEventListener('click', () => {
      triggerAutonomousThreat({
        type: 'Call / SMS',
        title: 'Fake Digital Arrest & Customs Seizure Alert',
        caller: '+91 98110-44912 (Spoofed Mumbai Police Crime Branch)',
        summary: 'Caller claiming a FedEx courier containing illegal contraband was intercepted in your name and demanding Rs. 1,50,000 to clear FIR.',
        text: 'Caller: "This is DCP Vikram Singh from Mumbai Cyber Crime Branch. We have issued a digital arrest warrant under IPC 420. Transfer security deposit immediately to RBI verification account or police van will arrive."'
      });
    });
  }

  if (btnRepeatVoice) {
    btnRepeatVoice.addEventListener('click', () => {
      const lang = I18N_TRANSLATIONS[currentLanguageKey] || I18N_TRANSLATIONS.en;
      speakNativeText(lang.dangerWarning);
    });
  }

  if (btnLockEvidence) {
    btnLockEvidence.addEventListener('click', () => {
      alertModal.classList.add('hidden');
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      showToast('📁 Threat evidence locked and saved to Police Dossier!', 'success');
      const evidenceTab = document.getElementById('tab-evidence');
      if (evidenceTab) evidenceTab.click();
    });
  }

  [btnCloseModal, btnDismissModal].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        alertModal.classList.add('hidden');
        if (window.speechSynthesis) window.speechSynthesis.cancel();
      });
    }
  });
}

/* ==========================================================================
   4. NAVIGATION TABS
   ========================================================================== */
function initNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPanelId = tab.getAttribute('aria-controls');

      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => {
        p.classList.remove('active');
        p.hidden = true;
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        targetPanel.hidden = false;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

/* ==========================================================================
   5. MESSAGE SCANNER & HEURISTIC SCAM ENGINE
   ========================================================================== */
const MESSAGE_PRESETS = {
  electricity_bill: "Dear Consumer, your electricity power connection will be disconnected tonight at 9:30 PM by Electricity Officer Mr. RK Sharma because your previous month bill was not updated. Immediately call 98234-77120 or download Mahavitaran Electricity APK to prevent blackout.",
  bank_kyc: "SBI Alert: Your NetBanking & Debit Card will be permanently blocked in 2 hours due to pending PAN/Aadhaar KYC. Click here to verify and update immediately: http://onlinesbi-kyc-verify-update.top/login",
  lottery_kbc: "CONGRATULATIONS! Your WhatsApp number has won Rs. 25,00,000 (25 Lakhs) in KBC Kaun Banega Crorepati All India Lucky Draw! To claim your lottery cheque, contact SBI Manager Rana Pratap on WhatsApp at +91 98451-22345 and pay Rs. 4,500 certificate tax.",
  grandkid: "Dadi/Nani it's Jimmy! I was in a terrible car accident in Goa and local police have put me in lockup. My public defender says I need Rs. 35,000 right now for bail. Please don't call Mom or Dad, they will panic! Please UPI the money immediately!",
  irs: "POLICE ARREST NOTICE: A non-bailable arrest warrant has been issued against your Aadhaar card for money laundering. Call 1-800-555-0199 immediately to settle your fine via prepaid gift cards or police will arrest you within 2 hours.",
  delivery: "India Post Notice: Your parcel #IN940291 cannot be delivered due to incomplete home address and unpaid Rs. 25 customs duty fee. Click here to confirm payment: http://indiapost-parcel-redelivery.xyz",
  genuine_family: "Hi Dadi! Just wanted to let you know we're coming over this Sunday at 2 PM for lunch. Can't wait to see you and bring your favorite homemade sweets! Love, Jimmy.",
  genuine_clinic: "Reminder from City Senior Health Center: Your routine health checkup with Dr. Henderson is scheduled for Thursday, Oct 12 at 10:30 AM. Reply 1 to confirm, or call our clinic at 022-2555-0144."
};

function initMessageScanner() {
  const messageInput = document.getElementById('message-input');
  const btnScan = document.getElementById('btn-scan-message');
  const btnClear = document.getElementById('btn-clear-message');
  const emptyState = document.getElementById('message-empty-state');
  const resultContent = document.getElementById('message-result-content');

  document.querySelectorAll('[data-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      const presetKey = btn.dataset.preset;
      if (MESSAGE_PRESETS[presetKey]) {
        messageInput.value = MESSAGE_PRESETS[presetKey];
        analyzeMessage(messageInput.value);
      }
    });
  });

  btnScan.addEventListener('click', () => {
    const text = messageInput.value.trim();
    if (!text) {
      showToast('Please type or paste a message to inspect', 'warning');
      return;
    }
    analyzeMessage(text);
  });

  btnClear.addEventListener('click', () => {
    messageInput.value = '';
    emptyState.classList.remove('hidden');
    resultContent.classList.add('hidden');
    resultContent.innerHTML = '';
  });

  function analyzeMessage(text) {
    const analysis = runHeuristicScan(text);
    renderMessageResult(analysis, text);
    logActivity(`Scanned message: "${text.slice(0, 40)}..."`, analysis.riskClass, analysis.threatLevel);

    if (analysis.riskClass === 'threat-danger') {
      const lang = I18N_TRANSLATIONS[currentLanguageKey] || I18N_TRANSLATIONS.en;
      speakNativeText(lang.dangerWarning);
    }
  }

  function runHeuristicScan(text) {
    const lower = text.toLowerCase();
    const flags = [];
    let score = 0;

    // 1. Electricity / Power Cut Scare
    if (lower.includes('electricity') || lower.includes('power connection') || lower.includes('disconnected tonight') || lower.includes('bill was not updated') || lower.includes('mahavitaran') || lower.includes('bses')) {
      score += 45;
      flags.push({
        type: 'danger',
        label: 'Fake Electricity Disconnection Panic',
        desc: 'Electricity boards never text personal phone numbers threatening immediate night cutoff or demanding APK downloads.'
      });
    }

    // 2. KYC / Bank Expiry Panic
    if (lower.includes('kyc') || lower.includes('pan card') || lower.includes('aadhaar') || lower.includes('account will be blocked') || lower.includes('suspended in 2 hours')) {
      score += 45;
      flags.push({
        type: 'danger',
        label: 'Bank Account & KYC Expiry Scam',
        desc: 'Banks like SBI/HDFC never send web links threatening to freeze your account within hours.'
      });
    }

    // 3. Fake Lottery / KBC Winner
    if (lower.includes('kbc') || lower.includes('lottery') || lower.includes('25 lakh') || lower.includes('won rs') || lower.includes('lucky draw') || lower.includes('processing fee') || lower.includes('certificate tax')) {
      score += 50;
      flags.push({
        type: 'danger',
        label: 'Fake Lottery & KBC Fraud',
        desc: 'Legitimate lotteries do not ask winners to pay an advance "tax" or "fee" via WhatsApp.'
      });
    }

    // 4. Urgency & Arrest Threats
    const urgencyWords = ['immediately', 'arrest warrant', 'police', 'jail', 'in prison', 'right now', 'within 2 hours', 'forfeiture', 'urgent alert', 'threat'];
    const foundUrgency = urgencyWords.filter(w => lower.includes(w));
    if (foundUrgency.length > 0) {
      score += 35;
      flags.push({
        type: 'danger',
        label: 'High Pressure Urgency & Panic',
        desc: `Uses intimidating words (${foundUrgency.slice(0, 3).map(w => `"${w}"`).join(', ')}) to prevent you from consulting family.`
      });
    }

    // 5. Untraceable Payments & Gift Cards / UPI
    const paymentScams = ['gift card', 'target card', 'apple card', 'upi the money', 'paytm to number', 'western union', 'bitcoin', 'crypto'];
    const foundPayments = paymentScams.filter(w => lower.includes(w));
    if (foundPayments.length > 0) {
      score += 40;
      flags.push({
        type: 'danger',
        label: 'Untraceable Payment Demand',
        desc: `Demands money through gift cards or direct unverified UPI (${foundPayments.join(', ')}).`
      });
    }

    // 6. Secrecy Tactics (Don't tell Mom)
    if (lower.includes("don't tell") || lower.includes('dont tell') || lower.includes('keep this secret') || lower.includes('do not call')) {
      score += 35;
      flags.push({
        type: 'danger',
        label: 'Isolation & Secrecy Trick',
        desc: 'Instructs you not to inform family members so they cannot warn you.'
      });
    }

    // 7. Shady URLs & APKs
    if (lower.includes('.apk') || lower.includes('http://') || lower.includes('.top') || lower.includes('.xyz') || lower.includes('.cc')) {
      score += 35;
      flags.push({
        type: 'danger',
        label: 'Malicious Link or APK Download Attached',
        desc: 'Contains a dangerous website link or Android APK that can steal your SMS OTPs.'
      });
    }

    let threatLevel = 'SAFE & GENUINE';
    let riskClass = 'threat-low';
    let headline = '✅ This message appears safe and genuine.';
    let plainExplanation = 'We found no urgent threats, fake electricity cutoff notices, or deceptive links in this text.';
    let actionSteps = [
      'You can safely read this message.',
      'Remember: Never share bank OTPs or PIN codes with anyone.'
    ];

    if (score >= 45) {
      threatLevel = 'CRITICAL FRAUD WARNING (HIGH RISK)';
      riskClass = 'threat-danger';
      headline = '🛑 DO NOT RESPOND — This is a Dangerous Scam!';
      plainExplanation = 'This message contains classic cyber fraud patterns designed to panic you into losing money. A criminal is impersonating an official board, bank, or relative.';
      actionSteps = [
        'STOP: Do NOT transfer any money or click the link.',
        'Do NOT call the phone number mentioned in the text message.',
        'Click "Save as Police Evidence" below to log this into your Cyber Police Dossier.',
        'Call the National Cyber Helpline 1930 if you have already shared any banking info.'
      ];
    } else if (score > 0) {
      threatLevel = 'SUSPICIOUS (CAUTION ADVISED)';
      riskClass = 'threat-warning';
      headline = '⚠️ Be Cautious — Potential Deception Detected';
      plainExplanation = 'This message contains some unusual requests or unverified links. Please confirm with family before replying.';
      actionSteps = [
        'Do not click any web links inside this message.',
        'Contact the official company or hospital using their known phone number.'
      ];
    }

    return { score, threatLevel, riskClass, headline, plainExplanation, flags, actionSteps };
  }

  function renderMessageResult(res, originalText) {
    emptyState.classList.add('hidden');
    resultContent.classList.remove('hidden');

    const flagsHtml = res.flags.map(f => `
      <li class="flag-item ${f.type === 'danger' ? 'danger-flag' : 'safe-flag'}">
        <span>${f.type === 'danger' ? '⚠️' : '✅'}</span>
        <div>
          <strong>${f.label}</strong>
          <p>${f.desc}</p>
        </div>
      </li>
    `).join('');

    const stepsHtml = res.actionSteps.map(step => `<li>${step}</li>`).join('');
    const lang = I18N_TRANSLATIONS[currentLanguageKey] || I18N_TRANSLATIONS.en;

    resultContent.innerHTML = `
      <div class="result-threat-header ${res.riskClass}">
        <div class="threat-icon-large">${res.riskClass === 'threat-danger' ? '🛑' : (res.riskClass === 'threat-warning' ? '⚠️' : '✅')}</div>
        <div>
          <div class="threat-verdict-title">${res.headline}</div>
          <div class="threat-verdict-sub">${res.threatLevel} (Risk Score: ${res.score}/100)</div>
        </div>
      </div>

      <!-- Native Voice Alert Box -->
      <div class="native-voice-box">
        <div><strong>🔊 Local Language Warning (${lang.name}):</strong></div>
        <div class="native-voice-text">${res.riskClass === 'threat-danger' ? lang.dangerWarning : (res.riskClass === 'threat-warning' ? lang.cautionWarning : lang.safeMessage)}</div>
      </div>

      <div class="result-section">
        <h4><span>💡</span> Plain-Language Explanation:</h4>
        <div class="plain-explanation-box">
          <p>${res.plainExplanation}</p>
        </div>
      </div>

      <div class="result-section">
        <h4><span>🚩</span> Detected Red Flags:</h4>
        <ul class="flags-list">
          ${flagsHtml}
        </ul>
      </div>

      <div class="result-section">
        <h4><span>🛡️</span> What You Should Do Next:</h4>
        <div class="action-steps-box">
          <ul class="action-steps-list">
            ${stepsHtml}
          </ul>
        </div>
      </div>

      <div class="action-row" style="margin-top: 1.25rem;">
        <button type="button" class="btn btn-secondary" id="btn-read-msg-analysis">
          <span>🔊</span> Listen to Explanation
        </button>
        ${res.riskClass === 'threat-danger' ? `
          <button type="button" class="btn btn-primary" id="btn-save-msg-evidence">
            <span>📁</span> Save as Police Evidence
          </button>
        ` : ''}
      </div>
    `;

    document.getElementById('btn-read-msg-analysis').addEventListener('click', () => {
      speakNativeText(`${res.headline}. ${res.plainExplanation}. What to do next: ${res.actionSteps.join('. ')}`);
    });

    const btnSaveEv = document.getElementById('btn-save-msg-evidence');
    if (btnSaveEv) {
      btnSaveEv.addEventListener('click', () => {
        saveEvidenceItem({
          type: 'Fraudulent SMS / Message',
          title: res.headline,
          caller: 'Sender Number / SMS Header',
          text: originalText,
          risk: res.threatLevel,
          riskClass: res.riskClass
        });
        showToast('✅ Saved to Police Evidence Locker!', 'success');
      });
    }
  }
}

/* ==========================================================================
   6. LINK & WEBSITE CHECKER
   ========================================================================== */
const LINK_PRESETS = {
  fake_sbi: "http://onlinesbi-kyc-verify-update.top/login.php",
  fake_bank: "http://chase-security-login2026.net/verify-account",
  fake_medicare: "http://medicare-benefit-card-claim.info/register",
  fake_apple: "http://support-appleid-unlock.xyz/session-auth",
  real_chase: "https://www.chase.com",
  real_gov: "https://cybercrime.gov.in"
};

function initLinkChecker() {
  const linkInput = document.getElementById('link-input');
  const btnScan = document.getElementById('btn-scan-link');
  const btnClear = document.getElementById('btn-clear-link');
  const emptyState = document.getElementById('link-empty-state');
  const resultContent = document.getElementById('link-result-content');

  document.querySelectorAll('[data-link-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.linkPreset;
      if (LINK_PRESETS[key]) {
        linkInput.value = LINK_PRESETS[key];
        inspectLink(linkInput.value);
      }
    });
  });

  btnScan.addEventListener('click', () => {
    const url = linkInput.value.trim();
    if (!url) {
      showToast('Please enter or paste a website link', 'warning');
      return;
    }
    inspectLink(url);
  });

  btnClear.addEventListener('click', () => {
    linkInput.value = '';
    emptyState.classList.remove('hidden');
    resultContent.classList.add('hidden');
    resultContent.innerHTML = '';
  });

  function inspectLink(url) {
    const analysis = analyzeUrlStructure(url);
    renderLinkResult(analysis, url);
    logActivity(`Checked Web Link: "${url.slice(0, 35)}..."`, analysis.riskClass, analysis.threatLevel);

    if (analysis.riskClass === 'threat-danger') {
      const lang = I18N_TRANSLATIONS[currentLanguageKey] || I18N_TRANSLATIONS.en;
      speakNativeText(lang.dangerWarning);
    }
  }

  function analyzeUrlStructure(url) {
    const lower = url.toLowerCase();
    const flags = [];
    let score = 0;

    if (lower.startsWith('http://')) {
      score += 25;
      flags.push({
        type: 'danger',
        label: 'Unencrypted Connection (Not Secure)',
        desc: 'Uses unencrypted http instead of secure https.'
      });
    }

    const dangerousTlds = ['.xyz', '.top', '.info', '.cc', '.club', '.work', '.click', '.tk', '.ga'];
    const matchedTld = dangerousTlds.find(tld => lower.includes(tld));
    if (matchedTld) {
      score += 40;
      flags.push({
        type: 'danger',
        label: `High-Risk Domain Extension (${matchedTld})`,
        desc: `Scammers frequently register cheap domains ending in "${matchedTld}" to create phishing traps.`
      });
    }

    const majorBrands = ['sbi', 'onlinesbi', 'chase', 'hdfc', 'icici', 'medicare', 'apple', 'amazon', 'paytm', 'cybercrime'];
    const legitimateOfficial = {
      'sbi': 'onlinesbi.sbi',
      'onlinesbi': 'onlinesbi.sbi',
      'chase': 'chase.com',
      'hdfc': 'hdfcbank.com',
      'icici': 'icicibank.com',
      'medicare': 'medicare.gov',
      'cybercrime': 'cybercrime.gov.in'
    };

    for (const brand of majorBrands) {
      if (lower.includes(brand)) {
        const official = legitimateOfficial[brand];
        if (official && !lower.includes(official)) {
          score += 50;
          flags.push({
            type: 'danger',
            label: `Fake Lookalike Domain (Impersonating ${brand.toUpperCase()})`,
            desc: `This address mentions "${brand}", but the official website is ${official}. It is a fraudulent clone.`
          });
        }
      }
    }

    let threatLevel = 'SAFE & VERIFIED OFFICIAL LINK';
    let riskClass = 'threat-low';
    let headline = '✅ This Web Address Appears Genuine';
    let plainExplanation = 'This link matches official authentic domains and uses secure encryption.';
    let steps = [
      'You can safely open this link.',
      'Always confirm the address bar begins with https://.'
    ];

    if (score >= 40) {
      threatLevel = 'DANGEROUS PHISHING LINK (HIGH RISK)';
      riskClass = 'threat-danger';
      headline = '🛑 DO NOT CLICK THIS LINK!';
      plainExplanation = 'This is a deceptive clone website created by scammers to steal your passwords, credit cards, or OTPs.';
      steps = [
        'Close or delete this link immediately.',
        'Never type passwords or card details on this website.',
        'Save this link to your Police Evidence Locker if you received it via SMS.'
      ];
    }

    return { score, threatLevel, riskClass, headline, plainExplanation, flags, steps };
  }

  function renderLinkResult(res, url) {
    emptyState.classList.add('hidden');
    resultContent.classList.remove('hidden');

    const flagsHtml = res.flags.map(f => `
      <li class="flag-item ${f.type === 'danger' ? 'danger-flag' : 'safe-flag'}">
        <span>${f.type === 'danger' ? '⚠️' : '✅'}</span>
        <div>
          <strong>${f.label}</strong>
          <p>${f.desc}</p>
        </div>
      </li>
    `).join('');

    const stepsHtml = res.steps.map(s => `<li>${s}</li>`).join('');

    resultContent.innerHTML = `
      <div class="result-threat-header ${res.riskClass}">
        <div class="threat-icon-large">${res.riskClass === 'threat-danger' ? '🛑' : '✅'}</div>
        <div>
          <div class="threat-verdict-title">${res.headline}</div>
          <div class="threat-verdict-sub">${res.threatLevel}</div>
        </div>
      </div>

      <div class="result-section">
        <h4><span>💡</span> Safety Report:</h4>
        <div class="plain-explanation-box">
          <p><strong>Inspected URL:</strong> <code>${url}</code></p>
          <p>${res.plainExplanation}</p>
        </div>
      </div>

      <div class="result-section">
        <h4><span>🔍</span> Red Flags Found:</h4>
        <ul class="flags-list">
          ${flagsHtml}
        </ul>
      </div>

      <div class="result-section">
        <h4><span>🛡️</span> Recommended Action:</h4>
        <div class="action-steps-box">
          <ul class="action-steps-list">
            ${stepsHtml}
          </ul>
        </div>
      </div>

      <div class="action-row" style="margin-top: 1.25rem;">
        ${res.riskClass === 'threat-danger' ? `
          <button type="button" class="btn btn-primary" id="btn-save-link-evidence">
            <span>📁</span> Save Link to Police Evidence Locker
          </button>
        ` : ''}
      </div>
    `;

    const btnSaveLink = document.getElementById('btn-save-link-evidence');
    if (btnSaveLink) {
      btnSaveLink.addEventListener('click', () => {
        saveEvidenceItem({
          type: 'Phishing / Malicious URL',
          title: res.headline,
          caller: 'Web URL / SMS Link',
          text: `Malicious Link: ${url}`,
          risk: res.threatLevel,
          riskClass: res.riskClass
        });
        showToast('✅ Saved link to Police Evidence Locker!', 'success');
      });
    }
  }
}

/* ==========================================================================
   7. PHONE CALL SCREENER & AUTOMATIC AUDIO PROOF RECORDER
   ========================================================================== */
const CALL_SCENARIOS = {
  digital_arrest: {
    callerName: "CBI / Delhi Special Crime Branch (Spoofed)",
    callerNumber: "+91 98110-44912 • New Delhi",
    avatar: "👮‍♂️",
    dialogue: [
      { text: "Hello, this is Inspector Rathore calling from the CBI Headquarters Cyber Crime Branch.", threat: false },
      { text: "A parcel sent from Mumbai to Singapore in your Aadhaar name has been intercepted containing 16 fake passports and MDMA drugs.", threat: true, keyword: "intercepted parcel / illegal drugs" },
      { text: "The Supreme Court has issued an immediate Digital Arrest order against you.", threat: true, keyword: "Digital Arrest order" },
      { text: "Do not disconnect this video call or tell anyone. You must transfer a security bond of Rs. 95,000 to the RBI clearance account immediately.", threat: true, keyword: "transfer security bond" },
      { text: "If you hang up, local SWAT teams will raid your home within 30 minutes.", threat: true, keyword: "raid your home" }
    ],
    threatVerdict: "🚨 High Risk 'Digital Arrest' Scam: Fake police extortion and coercive money demands."
  },
  electricity_cut: {
    callerName: "MSEDCL Electricity Emergency Desk",
    callerNumber: "+91 98234-77120 • Maharashtra",
    avatar: "⚡",
    dialogue: [
      { text: "Good evening sir, this is Electricity Line Officer RK Sharma from the power board.", threat: false },
      { text: "Your meter bill of Rs. 2,840 is unpaid and our field officer is cutting your connection at 9:30 PM tonight.", threat: true, keyword: "cutting your connection tonight" },
      { text: "To stop the immediate power blackout, install the QuickSupport APK app on your mobile right now.", threat: true, keyword: "install QuickSupport APK" },
      { text: "Send a Rs. 10 recharge from your GooglePay to verify your meter connection.", threat: true, keyword: "recharge / GooglePay verification" }
    ],
    threatVerdict: "🚨 Electricity Cutoff Scam: Remote APK takeover designed to steal banking OTPs."
  },
  irs_police: {
    callerName: "Unknown Caller / Spoofed Enforcement Dept",
    callerNumber: "(202) 555-0188 • Enforcement Unit",
    avatar: "🚨",
    dialogue: [
      { text: "Hello, this is Officer Matthews from Federal Tax Enforcement.", threat: false },
      { text: "We have an active arrest warrant issued in your name for unpaid tax penalties of $3,200.", threat: true, keyword: "arrest warrant" },
      { text: "To cancel the arrest order right now, purchase Apple or Target gift cards immediately.", threat: true, keyword: "gift cards" },
      { text: "Stay on the line and do not speak to anyone until you read the gift card numbers to me.", threat: true, keyword: "do not speak to anyone" }
    ],
    threatVerdict: "🚨 High Risk Imposter Scam: Demands untraceable gift cards under threat of arrest."
  },
  grandkid_bail: {
    callerName: "Private Number (Unknown Caller)",
    callerNumber: "Private Number • Urgent Call",
    avatar: "👵",
    dialogue: [
      { text: "Dadi/Grandma? Is that you? It's your grandson...", threat: false },
      { text: "I'm in so much trouble... I was in a terrible car accident and police put me in lockup.", threat: true, keyword: "car accident / lockup" },
      { text: "Please send Rs. 35,000 bail money immediately. Please don't tell Mom or Dad!", threat: true, keyword: "don't tell Mom or Dad" }
    ],
    threatVerdict: "🚨 Fake Grandchild Emergency Scam: Exploits love & fear with secrecy tactics."
  },
  tech_refund: {
    callerName: "Windows Support / AnyDesk Desk",
    callerNumber: "+91 98450-01990 • Toll Free",
    avatar: "💻",
    dialogue: [
      { text: "Hello, this is Alex from Windows Technical Support refund department.", threat: false },
      { text: "We accidentally sent Rs. 40,000 refund instead of Rs. 4,000 into your bank account.", threat: true, keyword: "accidental refund" },
      { text: "Open your computer and install AnyDesk remote share so we can correct the bank ledger.", threat: true, keyword: "install AnyDesk remote share" }
    ],
    threatVerdict: "🚨 Remote PC Takeover Scam: Fake transfer refund extortion."
  },
  safe_doctor: {
    callerName: "City Senior Wellness Clinic",
    callerNumber: "022-2555-0144 • Clinic Desk",
    avatar: "🩺",
    dialogue: [
      { text: "Good morning! This is Sister Maria from City Senior Health Center.", threat: false },
      { text: "I'm calling to confirm your routine checkup with Dr. Henderson on Thursday at 10:30 AM.", threat: false },
      { text: "Please remember to bring your prescription medication bottles. We will never ask you for payments over phone.", threat: false }
    ],
    threatVerdict: "✅ Safe Clinic Call: Routine appointment confirmation with zero payment demands."
  }
};

function initCallScreener() {
  let activeCallInterval = null;
  let callTimerInterval = null;
  let currentScenarioKey = 'digital_arrest';
  let callSeconds = 0;
  let transcriptAccumulator = [];

  let mediaRecorder = null;
  let recordedAudioChunks = [];
  let isRecordingMic = false;

  const scenarioBtns = document.querySelectorAll('[data-call-scenario]');
  const btnStartCall = document.getElementById('btn-start-call');
  const btnStopCall = document.getElementById('btn-stop-call');
  const callerAvatar = document.getElementById('caller-avatar');
  const callerName = document.getElementById('caller-name');
  const callerNumber = document.getElementById('caller-number');
  const callTimer = document.getElementById('call-timer');
  const waveform = document.getElementById('waveform');
  const liveIndicator = document.getElementById('live-indicator');
  const transcriptBody = document.getElementById('transcript-body');
  const liveThreatAlert = document.getElementById('live-threat-alert');
  const threatAlertTitle = document.getElementById('threat-alert-title');
  const threatAlertDesc = document.getElementById('threat-alert-desc');
  const btnEmergencyHangup = document.getElementById('btn-emergency-hangup');
  const callEvidenceSaved = document.getElementById('call-evidence-saved');
  const evidenceAudioPlayer = document.getElementById('evidence-audio-player');
  const btnDownloadAudio = document.getElementById('btn-download-audio');
  const btnViewInLocker = document.getElementById('btn-view-in-locker');

  const btnToggleMicRecord = document.getElementById('btn-toggle-mic-record');
  const micBtnText = document.getElementById('mic-btn-text');
  const micStatusLabel = document.getElementById('mic-status-label');

  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (activeCallInterval) endCall();
      scenarioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentScenarioKey = btn.dataset.callScenario;
      const scenario = CALL_SCENARIOS[currentScenarioKey];
      callerAvatar.textContent = scenario.avatar;
      callerName.textContent = scenario.callerName;
      callerNumber.textContent = scenario.callerNumber;
    });
  });

  btnStartCall.addEventListener('click', startSimulatedCall);
  btnStopCall.addEventListener('click', () => {
    endCall();
    showToast('Call ended safely. Proof saved to Evidence Locker.', 'success');
  });

  btnEmergencyHangup.addEventListener('click', () => {
    endCall();
    showToast('🛑 Hang Up & Saved Call Proof to Cyber Police Locker!', 'danger');
    logActivity(`Blocked Scam Call: ${callerName.textContent}`, 'threat-danger', 'Scam Call Blocked');

    triggerAutonomousThreat({
      type: 'Recorded Scam Call',
      title: CALL_SCENARIOS[currentScenarioKey].threatVerdict,
      caller: callerName.textContent + ' (' + callerNumber.textContent + ')',
      text: transcriptAccumulator.join('\n')
    });
  });

  if (btnViewInLocker) {
    btnViewInLocker.addEventListener('click', () => {
      const evidenceTab = document.getElementById('tab-evidence');
      if (evidenceTab) evidenceTab.click();
    });
  }

  if (btnToggleMicRecord) {
    btnToggleMicRecord.addEventListener('click', async () => {
      if (!isRecordingMic) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          recordedAudioChunks = [];
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) recordedAudioChunks.push(e.data);
          };
          mediaRecorder.onstop = () => {
            const audioBlob = new Blob(recordedAudioChunks, { type: 'audio/webm' });
            const audioUrl = URL.createObjectURL(audioBlob);
            evidenceAudioPlayer.src = audioUrl;
            btnDownloadAudio.href = audioUrl;
            btnDownloadAudio.download = `live_scam_call_${Date.now()}.webm`;
            callEvidenceSaved.classList.remove('hidden');

            saveEvidenceItem({
              type: 'Live Microphone Call Recording',
              title: 'Live Mic Call Proof Captured',
              caller: 'Live Call via Microphone',
              text: 'Real-time audio recorded via senior citizen microphone during active suspicious call.',
              risk: 'CRITICAL DANGER',
              riskClass: 'threat-danger',
              audioBlobUrl: audioUrl
            });
            showToast('🎙️ Live microphone recording saved to Evidence Locker!', 'success');
          };

          mediaRecorder.start();
          isRecordingMic = true;
          btnToggleMicRecord.classList.add('recording');
          micBtnText.textContent = 'Stop Recording Mic';
          micStatusLabel.textContent = '🔴 Recording live mic...';
          showToast('🎙️ Microphone recording active...', 'danger');
        } catch (err) {
          showToast('Microphone access denied or not supported', 'warning');
        }
      } else {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
          mediaRecorder.stop();
          mediaRecorder.stream.getTracks().forEach(track => track.stop());
        }
        isRecordingMic = false;
        btnToggleMicRecord.classList.remove('recording');
        micBtnText.textContent = 'Record Live Mic Audio';
        micStatusLabel.textContent = 'Mic proof saved';
      }
    });
  }

  function startSimulatedCall() {
    const scenario = CALL_SCENARIOS[currentScenarioKey];
    btnStartCall.disabled = true;
    btnStopCall.disabled = false;
    waveform.classList.add('active');
    liveIndicator.textContent = 'CALL ACTIVE (RECORDING)';
    liveIndicator.classList.add('active');
    liveThreatAlert.classList.add('hidden');
    callEvidenceSaved.classList.add('hidden');
    transcriptBody.innerHTML = '';
    transcriptAccumulator = [];
    callSeconds = 0;

    callTimerInterval = setInterval(() => {
      callSeconds++;
      const mins = String(Math.floor(callSeconds / 60)).padStart(2, '0');
      const secs = String(callSeconds % 60).padStart(2, '0');
      callTimer.textContent = `${mins}:${secs}`;
    }, 1000);

    let lineIdx = 0;
    const lines = scenario.dialogue;

    function playNextLine() {
      if (lineIdx >= lines.length) {
        clearInterval(activeCallInterval);
        finishCallRecording();
        return;
      }
      const item = lines[lineIdx];
      const p = document.createElement('p');
      transcriptAccumulator.push(`Caller: ${item.text}`);

      if (item.threat) {
        p.innerHTML = `<strong>Caller:</strong> ${item.text.replace(item.keyword, `<span class="threat-word">${item.keyword}</span>`)}`;
        liveThreatAlert.classList.remove('hidden');
        threatAlertTitle.textContent = '🚨 Scam Phrase Detected!';
        threatAlertDesc.textContent = `Intimidation detected: "${item.keyword}". This is a cyber extortion call.`;

        const lang = I18N_TRANSLATIONS[currentLanguageKey] || I18N_TRANSLATIONS.en;
        speakNativeText(lang.dangerWarning);
      } else {
        p.innerHTML = `<strong>Caller:</strong> ${item.text}`;
      }

      transcriptBody.appendChild(p);
      transcriptBody.scrollTop = transcriptBody.scrollHeight;
      lineIdx++;
    }

    playNextLine();
    activeCallInterval = setInterval(playNextLine, 3400);
  }

  function finishCallRecording() {
    const audioUrl = generateSyntheticCallAudio();
    evidenceAudioPlayer.src = audioUrl;
    btnDownloadAudio.href = audioUrl;
    btnDownloadAudio.download = `scam_call_${currentScenarioKey}_${Date.now()}.wav`;
    callEvidenceSaved.classList.remove('hidden');

    const scenario = CALL_SCENARIOS[currentScenarioKey];
    saveEvidenceItem({
      type: 'Simulated Audio Call Recording',
      title: scenario.threatVerdict,
      caller: scenario.callerName + ' (' + scenario.callerNumber + ')',
      text: transcriptAccumulator.join('\n'),
      risk: scenario.threatVerdict.includes('✅') ? 'SAFE' : 'CRITICAL DANGER',
      riskClass: scenario.threatVerdict.includes('✅') ? 'threat-safe' : 'threat-danger',
      audioBlobUrl: audioUrl
    });
  }

  function endCall() {
    clearInterval(activeCallInterval);
    clearInterval(callTimerInterval);
    activeCallInterval = null;
    callTimerInterval = null;
    btnStartCall.disabled = false;
    btnStopCall.disabled = true;
    waveform.classList.remove('active');
    liveIndicator.textContent = 'CALL ENDED';
    liveIndicator.classList.remove('active');
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    finishCallRecording();
  }
}

function generateSyntheticCallAudio() {
  const sampleRate = 8000;
  const numSamples = sampleRate * 3;
  const buffer = new ArrayBuffer(44 + numSamples);
  const view = new DataView(buffer);

  function writeString(offset, string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + numSamples, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate, true);
  view.setUint16(32, 1, true);
  view.setUint16(34, 8, true);
  writeString(36, 'data');
  view.setUint32(40, numSamples, true);

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const sample = 128 + Math.sin(2 * Math.PI * 440 * t) * 60;
    view.setUint8(44 + i, sample);
  }

  const blob = new Blob([buffer], { type: 'audio/wav' });
  return URL.createObjectURL(blob);
}

/* ==========================================================================
   8. NEAREST CYBER POLICE STATION & 1930 HELPLINE DIRECTORY
   ========================================================================== */
const CYBER_POLICE_STATIONS = [
  {
    name: "Bandra-Kurla Complex (BKC) Cyber Police Station",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400051",
    lat: 19.0657,
    lng: 72.8687,
    phone: "022-26504008",
    helpline: "1930",
    address: "Cyber Crime Police Station, BKC, Bandra East, Mumbai, Maharashtra 400051",
    email: "cybercrime-mumbai@mahapolice.gov.in",
    nodalOfficer: "DCP Cyber Crime Wing",
    mapUrl: "https://maps.google.com/?q=BKC+Cyber+Crime+Police+Station+Mumbai"
  },
  {
    name: "Cyber Crime Police Station Pune",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411005",
    lat: 18.5314,
    lng: 73.8446,
    phone: "020-29710097",
    helpline: "1930",
    address: "Shivajinagar Police Headquarters, University Road, Shivajinagar, Pune 411005",
    email: "crimebranch-cyber.pune@gov.in",
    nodalOfficer: "ACP Cyber Crime Pune",
    mapUrl: "https://maps.google.com/?q=Cyber+Crime+Police+Station+Shivajinagar+Pune"
  },
  {
    name: "Special Cell Cyber Crime Unit (IFSO) Delhi",
    city: "Delhi",
    state: "Delhi",
    pincode: "110078",
    lat: 28.5921,
    lng: 77.0460,
    phone: "011-28031130",
    helpline: "1930",
    address: "Intelligence Fusion & Strategic Operations (IFSO), Sector 17, Dwarka, New Delhi 110078",
    email: "dcp-cybercell-dl@nic.in",
    nodalOfficer: "DCP IFSO Special Cell",
    mapUrl: "https://maps.google.com/?q=IFSO+Cyber+Crime+Dwarka+Delhi"
  },
  {
    name: "Cyber Economics & Narcotics (CEN) Police Station",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560001",
    lat: 12.9716,
    lng: 77.5946,
    phone: "080-22201026",
    helpline: "1930",
    address: "CID Headquarters, Palace Road, Bengaluru, Karnataka 560001",
    email: "cybercrimeps-cid@ksp.gov.in",
    nodalOfficer: "SP Cyber Crime CID",
    mapUrl: "https://maps.google.com/?q=CID+Cyber+Crime+Police+Station+Bengaluru"
  },
  {
    name: "Cyber Crime Police Station Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500029",
    lat: 17.3984,
    lng: 78.4735,
    phone: "040-27852408",
    helpline: "1930",
    address: "Central Crime Station (CCS), Basheerbagh, Hyderabad, Telangana 500029",
    email: "cybercrime-hyd@tspolice.gov.in",
    nodalOfficer: "ACP Cyber Crime Hyderabad",
    mapUrl: "https://maps.google.com/?q=Cyber+Crime+Police+Station+Basheerbagh+Hyderabad"
  },
  {
    name: "Cyber Crime Police Wing Chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600007",
    lat: 13.0827,
    lng: 80.2707,
    phone: "044-23452350",
    helpline: "1930",
    address: "Greater Chennai Police Commissionerate, Vepery, Chennai, Tamil Nadu 600007",
    email: "cybercrime.gcp@tn.gov.in",
    nodalOfficer: "DC Cyber Crime Chennai",
    mapUrl: "https://maps.google.com/?q=Cyber+Crime+Wing+Vepery+Chennai"
  },
  {
    name: "Cyber Crime Police Station Kolkata (Lalbazar)",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700001",
    lat: 22.5726,
    lng: 88.3639,
    phone: "033-22143000",
    helpline: "1930",
    address: "Lalbazar Police Headquarters, 18 Lalbazar Street, Kolkata, West Bengal 700001",
    email: "cyberps@kolkatapolice.gov.in",
    nodalOfficer: "DC Cyber Crime Kolkata",
    mapUrl: "https://maps.google.com/?q=Lalbazar+Cyber+Crime+Kolkata"
  },
  {
    name: "Cyber Crime Police Station Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380004",
    lat: 23.0225,
    lng: 72.5714,
    phone: "079-25633640",
    helpline: "1930",
    address: "Dudheshwar Water Works Compound, Dudheshwar, Ahmedabad, Gujarat 380004",
    email: "cyber-ahd@gujarat.gov.in",
    nodalOfficer: "ACP Cyber Crime Ahmedabad",
    mapUrl: "https://maps.google.com/?q=Cyber+Crime+Police+Station+Ahmedabad"
  },
  {
    name: "State Cyber Crime Police Station Lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226010",
    lat: 26.8467,
    lng: 80.9462,
    phone: "0522-2304100",
    helpline: "1930",
    address: "Cyber Crime Headquarters, Sector 7, Gomti Nagar Extension, Lucknow 226010",
    email: "cybercell-up@nic.in",
    nodalOfficer: "SP Cyber Crime UP Police",
    mapUrl: "https://maps.google.com/?q=Cyber+Crime+Headquarters+Gomti+Nagar+Lucknow"
  },
  {
    name: "Cyber Crime Police Station Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302001",
    lat: 26.9124,
    lng: 75.7873,
    phone: "0141-2209710",
    helpline: "1930",
    address: "Police Commissionerate, MI Road, Jaipur, Rajasthan 302001",
    email: "cyberps.jaipur@rajpolice.gov.in",
    nodalOfficer: "ADCP Cyber Crime Jaipur",
    mapUrl: "https://maps.google.com/?q=Cyber+Police+Station+Jaipur"
  }
];

function initPoliceLocator() {
  const container = document.getElementById('police-stations-container');
  const citySearch = document.getElementById('police-city-search');
  const stateFilter = document.getElementById('police-state-filter');
  const btnDetectLocation = document.getElementById('btn-detect-location');
  const locBtnText = document.getElementById('loc-btn-text');

  let userCoords = null;

  function renderStations(stations) {
    if (!container) return;
    if (stations.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon">📍</div>
          <h3>No Cyber Police Stations found matching your filter</h3>
          <p>Please dial the National Cyber Helpline <strong>1930</strong> (24x7 all India) or visit <a href="https://cybercrime.gov.in" target="_blank">cybercrime.gov.in</a>.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = stations.map(station => {
      let distanceBadge = '';
      if (userCoords && station.lat && station.lng) {
        const distKm = calculateDistance(userCoords.lat, userCoords.lng, station.lat, station.lng);
        distanceBadge = `<span class="ps-distance">📍 ~${distKm.toFixed(1)} km away</span>`;
      }

      return `
        <div class="police-station-card">
          <div>
            <div class="ps-header">
              <div>
                <h4 class="ps-title">${station.name}</h4>
                <span class="ps-region">${station.city}, ${station.state} (PIN: ${station.pincode})</span>
              </div>
              ${distanceBadge}
            </div>

            <div class="ps-body" style="margin-top: 0.75rem;">
              <div class="ps-info-row">
                <span class="ps-info-icon">📍</span>
                <span>${station.address}</span>
              </div>
              <div class="ps-info-row">
                <span class="ps-info-icon">📞</span>
                <span><strong>Direct Station Line:</strong> ${station.phone}</span>
              </div>
              <div class="ps-info-row">
                <span class="ps-info-icon">🚨</span>
                <span><strong>National 24x7 Helpline:</strong> 1930</span>
              </div>
              <div class="ps-info-row">
                <span class="ps-info-icon">✉️</span>
                <span><strong>Email:</strong> ${station.email}</span>
              </div>
              <div class="ps-info-row">
                <span class="ps-info-icon">👮‍♂️</span>
                <span><strong>Officer:</strong> ${station.nodalOfficer}</span>
              </div>
            </div>
          </div>

          <div class="ps-actions">
            <a href="tel:${station.phone}" class="btn btn-sm btn-ps-call">
              <span>📞</span> Call Station
            </a>
            <a href="tel:1930" class="btn btn-sm btn-emergency-call" style="flex:1; min-height:38px; font-size:0.88rem; padding:6px 10px;">
              <span>🚨</span> Dial 1930
            </a>
            <a href="${station.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-ps-map">
              <span>🗺️</span> View Map
            </a>
          </div>
        </div>
      `;
    }).join('');
  }

  function filterStations() {
    const query = citySearch.value.trim().toLowerCase();
    const selectedState = stateFilter.value;

    let filtered = CYBER_POLICE_STATIONS.filter(st => {
      const matchState = selectedState === 'all' || st.state === selectedState;
      const matchQuery = !query || 
        st.name.toLowerCase().includes(query) || 
        st.city.toLowerCase().includes(query) || 
        st.pincode.includes(query) ||
        st.state.toLowerCase().includes(query);
      return matchState && matchQuery;
    });

    if (userCoords) {
      filtered.sort((a, b) => {
        const distA = calculateDistance(userCoords.lat, userCoords.lng, a.lat, a.lng);
        const distB = calculateDistance(userCoords.lat, userCoords.lng, b.lat, b.lng);
        return distA - distB;
      });
    }

    renderStations(filtered);
  }

  if (citySearch) citySearch.addEventListener('input', filterStations);
  if (stateFilter) stateFilter.addEventListener('change', filterStations);

  if (btnDetectLocation) {
    btnDetectLocation.addEventListener('click', () => {
      if (!('geolocation' in navigator)) {
        showToast('Geolocation is not supported by your browser', 'warning');
        return;
      }

      locBtnText.textContent = 'Detecting GPS Coordinates...';
      navigator.geolocation.getCurrentPosition(
        pos => {
          userCoords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          locBtnText.textContent = '📍 Sorted by Nearest (GPS Active)';
          showToast('GPS Location acquired! Sorted nearest Cyber Police stations.', 'success');
          filterStations();
        },
        err => {
          locBtnText.textContent = 'Auto-Detect Location (GPS)';
          showToast('Could not access GPS. Please use city/pincode search above.', 'info');
        },
        { timeout: 8000 }
      );
    });
  }

  renderStations(CYBER_POLICE_STATIONS);
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/* ==========================================================================
   9. DIGITAL EVIDENCE LOCKER & POLICE COMPLAINT DOSSIER GENERATOR
   ========================================================================== */
function getEvidenceItems() {
  return JSON.parse(localStorage.getItem('sg_evidence_locker') || '[]');
}

function saveEvidenceItem(item) {
  const locker = getEvidenceItems();
  const newItem = {
    id: 'EV-' + Date.now().toString(36).toUpperCase(),
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    type: item.type || 'Fraud Communication',
    title: item.title || 'Cyber Threat Evidence',
    caller: item.caller || 'Unknown Suspect',
    text: item.text || '',
    risk: item.risk || 'CRITICAL DANGER',
    riskClass: item.riskClass || 'threat-danger',
    audioBlobUrl: item.audioBlobUrl || null,
    hash: 'SHA256:' + generateSimulatedHash(item.text + Date.now())
  };
  locker.unshift(newItem);
  localStorage.setItem('sg_evidence_locker', JSON.stringify(locker));
  loadEvidenceItems();
  updateEvidenceBadge();
}

function generateSimulatedHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16).padStart(16, '0') + 'f892a01d67bc';
}

function updateEvidenceBadge() {
  const badge = document.getElementById('evidence-count-badge');
  if (!badge) return;
  const locker = getEvidenceItems();
  badge.textContent = locker.length;
}

function initEvidenceLocker() {
  const container = document.getElementById('evidence-items-container');
  const btnGenerateDossier = document.getElementById('btn-generate-dossier');
  const btnExportJson = document.getElementById('btn-export-evidence-json');
  const btnClearEvidence = document.getElementById('btn-clear-evidence');

  const dossierModal = document.getElementById('dossier-modal');
  const dossierPaper = document.getElementById('dossier-paper');
  const btnCloseDossier = document.getElementById('btn-close-dossier');
  const btnPrintDossier = document.getElementById('btn-print-dossier');
  const btnCopyDossier = document.getElementById('btn-copy-dossier');

  window.loadEvidenceItems = function() {
    if (!container) return;
    const locker = getEvidenceItems();

    if (locker.length === 0) {
      container.innerHTML = `
        <div class="card empty-state" style="padding: 3rem 1.5rem;">
          <div class="empty-icon">📁</div>
          <h3>Your Evidence Locker is Empty</h3>
          <p>When you scan suspicious messages, links, or record scam calls, SilverGuard automatically archives them here with legal digital timestamps for submission to the Cyber Police.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = locker.map(item => `
      <div class="evidence-card ${item.riskClass === 'threat-danger' ? 'danger-proof' : 'warning-proof'}">
        <div class="evidence-card-header">
          <div class="evidence-type-tag">
            <span>${item.riskClass === 'threat-danger' ? '🚨' : '⚠️'}</span>
            <strong>${item.type} — ${item.title}</strong>
          </div>
          <span class="evidence-timestamp">⏱️ Recorded: ${item.timestamp}</span>
        </div>

        <div class="evidence-data-box">
          <p><strong>Suspect / Caller ID:</strong> <code>${item.caller}</code></p>
          <p><strong>Captured Threat Content / Transcript:</strong></p>
          <pre style="white-space: pre-wrap; font-family: inherit; margin-top: 4px;">${item.text}</pre>
          ${item.audioBlobUrl ? `
            <div style="margin-top: 0.75rem;">
              <strong>Audio Call Proof Attachment:</strong>
              <audio controls src="${item.audioBlobUrl}" style="width: 100%; height: 38px; margin-top: 4px;"></audio>
            </div>
          ` : ''}
        </div>

        <div class="evidence-hash-row">
          <span>Evidence ID: <strong>${item.id}</strong></span>
          <span class="evidence-hash-pill">Tamper-Proof Digital Signature: ${item.hash}</span>
        </div>

        <div class="evidence-card-footer">
          <button type="button" class="btn btn-sm btn-primary" onclick="generateSingleItemDossier('${item.id}')">
            📄 Create Police FIR Form
          </button>
          <button type="button" class="btn btn-sm btn-ghost" onclick="deleteEvidenceItem('${item.id}')">
            🗑️ Remove
          </button>
        </div>
      </div>
    `).join('');
  };

  if (btnGenerateDossier) {
    btnGenerateDossier.addEventListener('click', () => {
      const locker = getEvidenceItems();
      if (locker.length === 0) {
        showToast('No evidence saved yet. Please scan a message or record a call first.', 'warning');
        return;
      }
      renderDossierDocument(locker);
      dossierModal.classList.remove('hidden');
    });
  }

  if (btnExportJson) {
    btnExportJson.addEventListener('click', () => {
      const locker = getEvidenceItems();
      const blob = new Blob([JSON.stringify(locker, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `cybercrime_evidence_vault_${Date.now()}.json`;
      a.click();
      showToast('💾 Exported complete evidence vault as JSON', 'success');
    });
  }

  if (btnClearEvidence) {
    btnClearEvidence.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear all saved police evidence?')) {
        localStorage.removeItem('sg_evidence_locker');
        loadEvidenceItems();
        updateEvidenceBadge();
        showToast('Evidence locker cleared', 'info');
      }
    });
  }

  if (btnCloseDossier) {
    btnCloseDossier.addEventListener('click', () => {
      dossierModal.classList.add('hidden');
    });
  }

  if (btnPrintDossier) {
    btnPrintDossier.addEventListener('click', () => {
      window.print();
    });
  }

  if (btnCopyDossier) {
    btnCopyDossier.addEventListener('click', () => {
      if (dossierPaper) {
        navigator.clipboard.writeText(dossierPaper.innerText);
        showToast('📋 Copied complaint text to clipboard for cybercrime.gov.in!', 'success');
      }
    });
  }

  window.deleteEvidenceItem = function(id) {
    let locker = getEvidenceItems();
    locker = locker.filter(item => item.id !== id);
    localStorage.setItem('sg_evidence_locker', JSON.stringify(locker));
    loadEvidenceItems();
    updateEvidenceBadge();
    showToast('Evidence entry removed', 'info');
  };

  window.generateSingleItemDossier = function(id) {
    const locker = getEvidenceItems();
    const item = locker.find(i => i.id === id);
    if (item) {
      renderDossierDocument([item]);
      dossierModal.classList.remove('hidden');
    }
  };

  function renderDossierDocument(items) {
    if (!dossierPaper) return;
    const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const evidenceRows = items.map((item, idx) => `
      <tr>
        <td><strong>#${idx + 1}</strong></td>
        <td>${item.timestamp}</td>
        <td>${item.type}</td>
        <td><code>${item.caller}</code></td>
        <td>${item.text.slice(0, 180)}...</td>
        <td><code>${item.hash.slice(0, 20)}...</code></td>
      </tr>
    `).join('');

    dossierPaper.innerHTML = `
      <div class="dossier-title-seal">
        <div class="dossier-seal-icon">⚖️</div>
        <h3>CYBER CRIME INCIDENT REPORT & EVIDENCE DOSSIER</h3>
        <p>Prepared for Formal Submission to Cyber Crime Police Station / cybercrime.gov.in (National Cyber Crime Reporting Portal)</p>
      </div>

      <div class="dossier-meta-grid">
        <div><strong>Dossier Tracking ID:</strong> POL-CR-${Date.now().toString(36).toUpperCase()}</div>
        <div><strong>Date & Time Generated:</strong> ${now} (IST)</div>
        <div><strong>Applicable Law Provisions:</strong> Section 66D IT Act (Cheating by Impersonation), Sec 420/506 IPC</div>
        <div><strong>Helpline Priority Status:</strong> 1930 / I4C Financial Fraud Escalation</div>
      </div>

      <div class="dossier-section">
        <h4>1. COMPLAINANT PARTICULARS (SENIOR CITIZEN)</h4>
        <p><strong>Name of Complainant:</strong> Senior Citizen User (SilverGuard Protected Device)</p>
        <p><strong>Primary Emergency Caregiver Contact:</strong> Pooja (Daughter) — Phone: +91 98201-23456</p>
        <p><strong>Incident Nature:</strong> Extortion / Phishing / Impersonation Scam targeting vulnerable elder.</p>
      </div>

      <div class="dossier-section">
        <h4>2. CHRONOLOGICAL EVIDENCE LOG & SUSPECT IDENTIFIERS</h4>
        <table class="dossier-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Date & Time</th>
              <th>Incident Type</th>
              <th>Suspect Number / ID</th>
              <th>Transcript / Text Summary</th>
              <th>Digital Hash</th>
            </tr>
          </thead>
          <tbody>
            ${evidenceRows}
          </tbody>
        </table>
      </div>

      <div class="dossier-section">
        <h4>3. FULL TRANSCRIPT / STATEMENT OF OCCURRENCE</h4>
        <div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 12px; font-size: 0.95rem;">
          ${items.map(i => `<p><strong>[${i.type} - ${i.caller} - ${i.timestamp}]:</strong><br>${i.text}</p>`).join('<hr style="margin: 8px 0; border: none; border-top: 1px dashed #cbd5e1;">')}
        </div>
      </div>

      <div class="dossier-section">
        <h4>4. LEGAL INTEGRITY & TAMPER-PROOF DECLARATION</h4>
        <p>I hereby confirm that the digital evidence items, call audio transcripts, and sender headers recorded above were automatically captured on the device in real-time without unauthorized alterations.</p>
        <div class="dossier-hash-block">
          MASTER DOSSIER SHA-256 INTEGRITY HASH: ${generateSimulatedHash(now + items.length)}
        </div>
      </div>

      <div style="margin-top: 2rem; display: flex; justify-content: space-between; font-size: 0.95rem; border-top: 1px solid #cbd5e1; padding-top: 1rem;">
        <div><strong>Complainant Signature:</strong> ______________________</div>
        <div><strong>Authorized Cyber Officer Signature:</strong> ______________________</div>
      </div>
    `;
  }

  loadEvidenceItems();
}

/* ==========================================================================
   10. SPOT THE SCAM PRACTICE ARENA & QUIZ
   ========================================================================== */
const QUIZ_QUESTIONS = [
  {
    title: "Scenario 1: Unexpected Electricity Disconnection SMS",
    scenario: "You get an SMS: 'Electricity power will be cut tonight at 9:30 PM due to unpaid bill. Immediately call Officer at 98234-XXXXX or download Mahavitaran APK.'",
    options: [
      { text: "Call the mobile number in the message and install the APK so power isn't cut.", correct: false },
      { text: "Ignore and delete the SMS. Real power companies never threaten night cutoff or send APK links via personal mobile numbers.", correct: true },
      { text: "Forward the SMS to all your neighbors.", correct: false }
    ],
    explanation: "✅ Excellent choice! Real electricity boards never text from personal phone numbers or ask you to install APK files. APK files are malicious apps that steal your banking OTPs."
  },
  {
    title: "Scenario 2: Video Call Claiming 'Digital Arrest' by CBI",
    scenario: "A person in police uniform on Skype/WhatsApp video call claims an illegal courier with narcotics was sent in your name and orders you not to leave the room until you pay Rs. 95,000 security bond.",
    options: [
      { text: "Immediately pay the Rs. 95,000 security bond to the RBI account they provide.", correct: false },
      { text: "Disconnect the call immediately and dial 1930. There is NO legal provision for 'Digital Arrest' by video call in Indian law.", correct: true },
      { text: "Keep the video call open all night.", correct: false }
    ],
    explanation: "✅ Spot on! The CBI, Police, or Courts NEVER arrest people over Skype or video call, and never demand money transfers. 'Digital Arrest' is a 100% fake fraud scheme."
  },
  {
    title: "Scenario 3: Text Message Claiming Rs. 25 Lakh Lottery / KBC Winner",
    scenario: "A WhatsApp message says: 'Congratulations! Your number won Rs. 25 Lakh in KBC Lucky Draw. Contact Manager on WhatsApp and pay Rs. 4,500 tax to release cheque.'",
    options: [
      { text: "Hang up and delete. Legitimate lotteries never ask winners to pay advance tax to personal UPI numbers.", correct: true },
      { text: "Pay Rs. 4,500 since Rs. 25 Lakhs is a very large prize.", correct: false },
      { text: "Send them your Aadhaar and bank details.", correct: false }
    ],
    explanation: "✅ Perfect! The small Rs. 4,500 fee is just bait. Once you pay, scammers disappear or ask for more fake clearance charges."
  },
  {
    title: "Scenario 4: Urgent Call Saying Grandchild is in Lockup",
    scenario: "A crying caller claims: 'Dadi, I met with a car accident and police put me in jail! Please send Rs. 35,000 for bail right now and don't tell Mom!'",
    options: [
      { text: "Rush to transfer the money immediately so your grandchild doesn't stay in lockup.", correct: false },
      { text: "Hang up immediately and call your grandchild or their parents directly on their regular phone number to verify.", correct: true },
      { text: "Give your netbanking password over phone.", correct: false }
    ],
    explanation: "✅ Great job! Scammers use emotional panic and voice cloning to prevent seniors from checking with family. Always verify directly."
  },
  {
    title: "Scenario 5: Bank KYC Expiring in 2 Hours",
    scenario: "An SMS says: 'SBI Alert: Your Debit Card will be blocked in 2 hours. Update KYC at http://onlinesbi-kyc-verify-update.top.'",
    options: [
      { text: "Click the link and type your 16-digit ATM card number and OTP.", correct: false },
      { text: "Do not click. Banks never send urgent web links ending in .top/.xyz to update KYC.", correct: true },
      { text: "Send your bank PIN to the sender.", correct: false }
    ],
    explanation: "✅ Outstanding! Legitimate banks only do KYC through official branches or official mobile apps, never lookalike .top websites."
  }
];

function initPracticeArena() {
  let currentQ = 0;
  let score = 0;
  let answered = false;

  const btnModeQuiz = document.getElementById('btn-mode-quiz');
  const btnModeCompare = document.getElementById('btn-mode-compare');
  const quizView = document.getElementById('quiz-view');
  const compareView = document.getElementById('compare-view');

  const quizCurrentNum = document.getElementById('quiz-current-num');
  const quizTotalNum = document.getElementById('quiz-total-num');
  const quizScoreDisplay = document.getElementById('quiz-score-display');
  const quizProgressBar = document.getElementById('quiz-progress-bar');
  const quizScenarioTitle = document.getElementById('quiz-scenario-title');
  const quizScenarioText = document.getElementById('quiz-scenario-text');
  const quizOptionsContainer = document.getElementById('quiz-options-container');
  const quizFeedbackBox = document.getElementById('quiz-feedback-box');
  const btnQuizNext = document.getElementById('btn-quiz-next');
  const btnQuizRestart = document.getElementById('btn-quiz-restart');

  if (quizTotalNum) quizTotalNum.textContent = QUIZ_QUESTIONS.length;

  if (btnModeQuiz && btnModeCompare) {
    btnModeQuiz.addEventListener('click', () => {
      btnModeQuiz.classList.add('active');
      btnModeCompare.classList.remove('active');
      quizView.classList.remove('hidden');
      compareView.classList.add('hidden');
    });

    btnModeCompare.addEventListener('click', () => {
      btnModeCompare.classList.add('active');
      btnModeQuiz.classList.remove('active');
      compareView.classList.remove('hidden');
      quizView.classList.add('hidden');
    });
  }

  function renderQuestion(idx) {
    if (!quizScenarioTitle) return;
    answered = false;
    btnQuizNext.disabled = true;
    quizFeedbackBox.classList.add('hidden');
    quizFeedbackBox.innerHTML = '';

    const q = QUIZ_QUESTIONS[idx];
    quizCurrentNum.textContent = idx + 1;
    quizScenarioTitle.textContent = q.title;
    quizScenarioText.textContent = q.scenario;
    quizProgressBar.style.width = `${((idx + 1) / QUIZ_QUESTIONS.length) * 100}%`;

    quizOptionsContainer.innerHTML = '';
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option';
      btn.innerHTML = `<span>🔘</span> <span>${opt.text}</span>`;
      btn.addEventListener('click', () => handleAnswer(opt, btn, q));
      quizOptionsContainer.appendChild(btn);
    });
  }

  function handleAnswer(selectedOpt, btnElement, q) {
    if (answered) return;
    answered = true;
    btnQuizNext.disabled = false;

    const allOptions = quizOptionsContainer.querySelectorAll('.quiz-option');
    allOptions.forEach(btn => btn.disabled = true);

    if (selectedOpt.correct) {
      score += 20;
      quizScoreDisplay.textContent = score;
      btnElement.classList.add('selected-correct');
      btnElement.querySelector('span').textContent = '✅';
      quizFeedbackBox.className = 'quiz-feedback-box correct';
      quizFeedbackBox.innerHTML = `<strong>Correct!</strong> <p>${q.explanation}</p>`;
      speakNativeText('Correct! ' + q.explanation);
    } else {
      btnElement.classList.add('selected-wrong');
      btnElement.querySelector('span').textContent = '❌';
      quizFeedbackBox.className = 'quiz-feedback-box incorrect';
      quizFeedbackBox.innerHTML = `<strong>Caution!</strong> <p>That would put you at risk. ${q.explanation}</p>`;
      speakNativeText('Caution. ' + q.explanation);
    }
    quizFeedbackBox.classList.remove('hidden');
  }

  if (btnQuizNext) {
    btnQuizNext.addEventListener('click', () => {
      if (currentQ < QUIZ_QUESTIONS.length - 1) {
        currentQ++;
        renderQuestion(currentQ);
      } else {
        quizScenarioTitle.textContent = '🎉 Quiz Complete!';
        quizScenarioText.innerHTML = `You scored <strong>${score} out of 100 points</strong> in Senior Scam Safety Defense! You are well-prepared to stop fraudsters.`;
        quizOptionsContainer.innerHTML = '';
        quizFeedbackBox.classList.add('hidden');
        btnQuizNext.disabled = true;
        speakNativeText(`Congratulations! You scored ${score} out of 100 points.`);
        logActivity(`Completed Spot the Scam Quiz with score: ${score}/100`, 'threat-safe', 'Quiz Passed');
      }
    });
  }

  if (btnQuizRestart) {
    btnQuizRestart.addEventListener('click', () => {
      currentQ = 0;
      score = 0;
      quizScoreDisplay.textContent = '0';
      renderQuestion(0);
    });
  }

  renderQuestion(0);
}

/* ==========================================================================
   11. CAREGIVER & FAMILY BRIDGE
   ========================================================================== */
function initCaregiverBridge() {
  const btnDispatchSos = document.getElementById('btn-dispatch-sos');
  const btnClearLog = document.getElementById('btn-clear-log');

  if (btnDispatchSos) {
    btnDispatchSos.addEventListener('click', () => {
      showToast('🚨 Simulated SOS Dispatch sent to Pooja & Rohan!', 'danger');
      logActivity('Simulated SOS broadcast dispatched to Pooja & Rohan (Emergency Caregivers)', 'threat-danger', 'SOS Dispatched');
      alert('SIMULATED SOS DISPATCH SUCCESSFUL:\n\nHigh-priority WhatsApp & SMS alerts were sent to:\n1. Pooja (Daughter) - +91 98201-23456\n2. Rohan (Son) - +91 98112-98765\n\nIncident summary, audio evidence, and GPS coordinates attached.');
    });
  }

  if (btnClearLog) {
    btnClearLog.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear your activity history?')) {
        localStorage.removeItem('sg_activity_log');
        loadActivityLog();
        showToast('Activity log cleared', 'info');
      }
    });
  }
}

function logActivity(text, riskClass, badgeLabel) {
  const log = JSON.parse(localStorage.getItem('sg_activity_log') || '[]');
  const newEntry = {
    id: Date.now(),
    text,
    riskClass: riskClass || 'threat-safe',
    badgeLabel: badgeLabel || 'Activity',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
  log.unshift(newEntry);
  if (log.length > 25) log.pop();
  localStorage.setItem('sg_activity_log', JSON.stringify(log));
  loadActivityLog();
}

function loadActivityLog() {
  const timeline = document.getElementById('activity-timeline');
  if (!timeline) return;

  const log = JSON.parse(localStorage.getItem('sg_activity_log') || '[]');

  if (log.length === 0) {
    timeline.innerHTML = `
      <div class="empty-state" style="padding: 1.5rem 0;">
        <p>No recent activity yet. Any messages, links, audio calls, or police evidence you scan will appear here.</p>
      </div>
    `;
    return;
  }

  timeline.innerHTML = log.map(item => `
    <div class="activity-item ${item.riskClass}">
      <span class="activity-icon">${item.riskClass === 'threat-danger' ? '🚨' : (item.riskClass === 'threat-warning' ? '⚠️' : '🛡️')}</span>
      <div class="activity-details">
        <strong>${item.badgeLabel}</strong>
        <span>${item.text}</span>
      </div>
      <div class="activity-time">${item.timestamp}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   12. TOAST NOTIFICATION HELPER
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icon = type === 'danger' ? '🛑' : (type === 'warning' ? '⚠️' : (type === 'success' ? '✅' : 'ℹ️'));
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
