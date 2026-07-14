export interface Language {
  name: string;
  nativeName: string;
  flag: string; // Emoji flag or code
  description: string;
  popularCert: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  bullets?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  certification: string;
  languages: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  languageLearned: string;
  avatar: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  interestedLanguage: string;
  preferredMode: 'Online' | 'Offline';
  date: string;
  status: 'Pending' | 'Contacted' | 'Enrolled';
  city?: string;
  ageGroup?: string;
}

export const LANGUAGES: Language[] = [
  { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', description: 'Goethe / TELC preparation from A1 to C2. Focus on interactive communication.', popularCert: 'Goethe / TELC' },
  { name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', description: 'JLPT exam focused batch training. Native-level communication strategies.', popularCert: 'JLPT (N5 to N1)' },
  { name: 'French', nativeName: 'Français', flag: '🇫🇷', description: 'DELF / DALF certification training with cultural immersion and speech practice.', popularCert: 'DELF / DALF' },
  { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', description: 'DELE exam preparation. Practical speaking and grammar for work or travel.', popularCert: 'DELE' },
  { name: 'Korean', nativeName: '한국어', flag: '🇰🇷', description: 'TOPIK exam mastery course. Master modern speaking, writing, and corporate culture.', popularCert: 'TOPIK' },
  { name: 'English', nativeName: 'English', flag: '🇬🇧', description: 'Advanced IELTS, TOEFL, and spoken English for global career opportunities.', popularCert: 'IELTS / TOEFL' },
  { name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', description: 'CILS and CELI certified Italian modules focusing on travel, study, and culture.', popularCert: 'CILS / CELI' },
  { name: 'Arabic', nativeName: 'العربية', flag: '🇦🇪', description: 'Modern Standard Arabic speaking and writing courses for global commerce.', popularCert: 'ALPT' },
  { name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', description: 'TORFL certification training. Learn foundational communication and professional usage.', popularCert: 'TORFL' },
  { name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹', description: 'Master European and Brazilian Portuguese. Ideal for work, travel, and relocation.', popularCert: 'CAPLE' },
  { name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', description: 'Comprehensive Tamil learning modules focusing on local business, cultural immersion, and daily speaking.', popularCert: 'Bhasha Certified' },
  { name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳', description: 'Master Kannada grammar, day-to-day speaking, and local corporate interactions from scratch.', popularCert: 'Bhasha Certified' },
  { name: 'Sanskrit', nativeName: 'संस्कृतम्', flag: '🇮🇳', description: 'Traditional & structured learning of classical Indian language from basics.', popularCert: 'Bhasha Certified' },
  { name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳', description: 'Structured speaking and reading courses for cultural integration and professional work.', popularCert: 'Bhasha Certified' },
  { name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳', description: 'Foundational grammar, business communication, and day-to-day speaking modules.', popularCert: 'Bhasha Certified' },
  { name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳', description: 'Local corporate communication and state-level speaking mastery courses.', popularCert: 'Bhasha Certified' },
  { name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳', description: 'Master day-to-day conversation, local business vocabulary, and proper pronunciation.', popularCert: 'Bhasha Certified' },
  { name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', description: 'Structured Telugu grammar, local speaking, and business vocabulary for corporate professionals.', popularCert: 'Bhasha Certified' },
  { name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', description: 'Structured Indian language sessions for corporate, educational, or personal use.', popularCert: 'Bhasha Certified' },
  { name: 'Urdu', nativeName: 'اردو', flag: '🇮🇳', description: 'Learn speaking, writing, and vocabulary of Urdu from foundational modules to poetic literature.', popularCert: 'Bhasha Certified' }
];

export const REASONS_TO_CHOOSE: { title: string; desc: string; icon: string }[] = [
  {
    title: 'Live Interactive Online & Offline Sessions',
    desc: 'Choose between dynamic virtual classrooms or premium face-to-face training with identical rigorous curriculum.',
    icon: 'Tv'
  },
  {
    title: 'Limited Student Batch',
    desc: 'Intentionally restricted small batches to ensure hyper-personalized attention and feedback.',
    icon: 'Users'
  },
  {
    title: 'ISO-Certified Curriculum',
    desc: 'Our teaching framework is strictly ISO 9001:2015 certified, meeting top global educational standards.',
    icon: 'Award'
  },
  {
    title: 'Goethe/TELC Preparation',
    desc: 'Bespoke preparatory pathways meticulously mapped to pass official international exams on your first attempt.',
    icon: 'FileText'
  },
  {
    title: 'Recorded Classes',
    desc: 'Never miss a single concept. Access high-definition class archives and review lectures anytime at your convenience.',
    icon: 'Video'
  },
  {
    title: 'Cultural Learning',
    desc: 'Integrate into foreign lifestyles easily with our embedded cultural communication seminars and interactive games.',
    icon: 'Globe'
  },
  {
    title: 'Flexible Scheduling',
    desc: 'Tailor your learning hours. Flexible weekend and weekday slots perfect for working professionals and students.',
    icon: 'Calendar'
  },
  {
    title: 'Passport & Visa Guidance',
    desc: 'End-to-end relocation preparation, consulting, documentation reviews, and language interviews assistance.',
    icon: 'Compass'
  }
];

const _BASE = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Susmita Paranjape',
    role: 'Seniors Executive',
    image: `${_BASE}images/Susmita-Paranjape.webp`,
    certification: 'Certified Senior Executive Trainer',
    languages: ['German', 'English']
  },
  {
    name: 'Shivani Doshi',
    role: 'Senior Coordinator',
    image: `${_BASE}images/Shivani-Doshi.webp`,
    certification: 'C1 Certified Language Instructor',
    languages: ['Japanese', 'French', 'English']
  },
  {
    name: 'Yojana L.',
    role: 'Junior Coordinator',
    image: `${_BASE}images/IMG_8537.webp`,
    certification: 'N2 Japanese Certified Specialist',
    languages: ['Japanese', 'English', 'Hindi']
  },
  {
    name: 'Mamata D.',
    role: 'Junior Coordinator',
    image: `${_BASE}images/IMG_8535.webp`,
    certification: 'DELF French Certified Specialist',
    languages: ['French', 'Spanish', 'Marathi']
  }
];

export const WHO_IS_IT_FOR: { title: string; desc: string; image: string }[] = [
  {
    title: 'Anyone exploring Europian culture & communication',
    desc: 'Perfect for cultural enthusiasts and travel lovers who want to connect deeply with European heritage, traditions, and local residents.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Professionals working with Multiple language-speaking clients or companies',
    desc: 'Accelerate your career, stand out in multinational companies, handle high-profile client communication, and unlock global salary scales.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Students preparing for Goethe/TELC proficiency exams',
    desc: 'Designed for scholars dreaming of fully-funded European degrees, free public university admissions, and reliable high-scoring preparation.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Anyone who wants to upskill their career.',
    desc: 'Upgrade your resume, increase your cognitive potential, build global connections, and prepare for high-paying roles in international markets.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Aniket Sharma',
    role: 'Software Engineer at Siemens',
    rating: 5,
    comment: 'Thanks to Bhasha World! The 5-student batch size was a game-changer. I received dedicated attention and cleared my Goethe B2 exam on the very first try. Highly recommend Yojana and the team.',
    date: '2 weeks ago',
    languageLearned: 'German (B2)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Meera Deshmukh',
    role: 'Study Abroad Aspirant',
    rating: 5,
    comment: 'Bhasha World is incredible! They do not just teach vocabulary; they prep you for the cultural nuances and actual living in Germany. The passport and visa guidance sessions made my transition stress-free.',
    date: '1 month ago',
    languageLearned: 'French (DELF B1)',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Rohan Joshi',
    role: 'Business Consultant',
    rating: 5,
    comment: 'I joined the offline Japanese batch. The training is highly structured and professional. Shivani is an amazing coordinator and explains JLPT patterns with absolute precision.',
    date: '3 weeks ago',
    languageLearned: 'Japanese (JLPT N4)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Priyanka Sen',
    role: 'Parent of Aditi (12 yrs)',
    rating: 5,
    comment: 'My daughter joined their special kids language program for French. The interactive games and speaking activities kept her extremely excited. Her confidence has soared!',
    date: '1 month ago',
    languageLearned: 'Kids French Program',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'Who can join Bhasha World courses?',
    answer: 'Anyone with a desire to learn can join. We offer courses for school students, college students, working professionals, entrepreneurs, senior citizens, and individuals planning to study, work, or settle abroad. Most beginner courses require no prior knowledge.'
  },
  {
    id: 2,
    question: 'Which languages do you offer?',
    answer: 'We offer a wide range of Indian and foreign language courses, including:',
    bullets: ['German', 'Japanese', 'French', 'Spanish', 'Korean', 'English', 'Sanskrit', 'Marathi', 'Hindi']
  },
  {
    id: 3,
    question: 'Are the classes available online or offline?',
    answer: 'Yes. You can choose:',
    bullets: ['Live Online Classes', 'Offline Classroom Training', 'Corporate On-site Training (for organizations)'],
    // Adding extra text from document: "Our interactive teaching approach remains consistent across all learning modes."
  },
  {
    id: 4,
    question: 'Do you provide internationally recognized certification?',
    answer: 'Yes. We prepare learners for internationally recognized language proficiency examinations such as Goethe (German), JLPT (Japanese), DELF (French), DELE (Spanish), TOPIK (Korean), and other relevant certifications depending on the language.'
  },
  {
    id: 5,
    question: 'What language levels do you teach?',
    answer: 'We offer structured learning from Beginner (A1) to Advanced (C2), depending on the language and certification framework.'
  },
  {
    id: 6,
    question: 'How large are your batches?',
    answer: 'We believe personalized learning delivers better results. Our batches are intentionally kept small to ensure every learner gets individual attention, regular speaking practice, and personalized feedback.'
  },
  {
    id: 7,
    question: 'What makes Bhasha World different from other language institutes?',
    answer: 'Bhasha World focuses on communication, not just language learning. Our learners benefit from:',
    bullets: [
      'Certified and experienced trainers',
      'Practical speaking-focused sessions',
      'Structured curriculum',
      'Small batch sizes',
      'International certification preparation',
      'Study abroad guidance',
      'Career-oriented learning',
      'Cultural immersion activities'
    ]
  },
  {
    id: 8,
    question: "I'm a complete beginner. Can I still join?",
    answer: 'Absolutely. Our beginner-level courses are specially designed for learners with no previous knowledge. We start with the fundamentals and gradually build confidence in reading, writing, listening, and speaking.'
  },
  {
    id: 9,
    question: 'Do you help students planning to study or work abroad?',
    answer: 'Yes. Along with language training, we guide students preparing for higher education, international careers, visa requirements, and language certification exams.'
  },
  {
    id: 10,
    question: 'How long does it take to complete a level?',
    answer: 'The duration depends on the language and level. Most beginner levels are completed within 2.5–3 months, while intermediate and advanced levels require additional time for comprehensive skill development.'
  },
  {
    id: 11,
    question: 'Will I get speaking practice during the course?',
    answer: 'Yes. Speaking is one of the core pillars of our teaching methodology. Every batch includes conversation practice, interactive activities, role plays, pronunciation guidance, and real-life communication exercises.'
  },
  {
    id: 12,
    question: 'Do you provide study material?',
    answer: 'Yes. Learners receive carefully designed study material, assignments, worksheets, and practice resources aligned with their course level.'
  },
  {
    id: 13,
    question: 'Are there flexible batch timings?',
    answer: 'Yes. We offer weekday and weekend batches with multiple timing options, making it easier for students and working professionals to learn at their convenience.'
  },
  {
    id: 14,
    question: 'Do you conduct demo sessions?',
    answer: 'Yes. We offer demo sessions so you can experience our teaching methodology before enrolling.'
  },
  {
    id: 15,
    question: 'How can I enroll?',
    answer: 'Simply contact us via phone, WhatsApp, or submit the enquiry form on our website. Our counsellors will help you choose the right language, level, and batch based on your goals.'
  },
  {
    id: 16,
    question: 'Why should I learn a foreign language?',
    answer: 'Learning a new language can help you:',
    bullets: [
      'Improve career opportunities',
      'Study abroad with confidence',
      'Work with global companies',
      'Expand your professional network',
      'Build communication skills',
      'Experience new cultures',
      'Gain an internationally valuable skill'
    ]
  },
  {
    id: 17,
    question: 'Do you offer language courses for children and senior citizens?',
    answer: 'Yes. We have specially designed programs for:',
    bullets: [
      'Kids (6–14 years): Interactive, activity-based learning that develops communication and confidence.',
      'Senior Citizens: A comfortable learning environment where it\'s never too late to explore a new language or reconnect with family abroad.'
    ]
  },
  {
    id: 18,
    question: 'Can businesses arrange language training for employees?',
    answer: 'Yes. We provide customized corporate language training programs tailored to business communication, industry requirements, and employee skill development.'
  }
];
