export const site = {
  name: "Beacon Light Academy",
  shortName: "BLA",
  tagline: "We are different & that makes the difference",
  motto: "God! Help me learn",
  established: 1986,
  description:
    "Beacon Light Academy is a leading O & A Levels institution in Karachi, offering a complete education pathway from Nursery to A Levels and Intermediate with Pearson Edexcel and AKU-EB affiliations.",
  url: "https://beaconlightacademy.edu.pk",
  email: "info@beaconlightacademy.edu.pk",
  admissionsEmail: "admissions@beaconlightacademy.edu.pk",
  hrEmail: "hr@beaconlightacademy.edu.pk",
  phone: "021-34833851",
  whatsapp: "0334-3219836",
  address: "E-24, Block 7, Gulshan-e-Iqbal, Karachi, Pakistan",
  hours: "Monday – Thursday: 7:50 am – 1:50 pm · Friday: 7:50 am – 12:20 pm",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/beaconlightacademy" },
    { label: "Instagram", href: "https://www.instagram.com/beaconlightacademy" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/beacon-light-academy" },
    { label: "YouTube", href: "https://www.youtube.com/@beaconlightacademy" },
  ],
};

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  title: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  href: string;
  featured?: { title: string; text: string; href: string; cta: string };
  groups?: NavGroup[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    groups: [
      {
        title: "Our Academy",
        links: [
          { label: "About Beacon Light", href: "/about", description: "Four decades of value-based education." },
          { label: "Our Story", href: "/about-bla", description: "The journey since January 1986." },
          { label: "Principal's Message", href: "/principal-message", description: "A note from Mrs. Azra Anwar Ahmed." },
          { label: "Our Accomplishments", href: "/our-accomplishments", description: "A legacy of regional and global toppers." },
        ],
      },
      {
        title: "School Life",
        links: [
          { label: "Rules & Regulations", href: "/rules-regulation", description: "Our shared code of conduct." },
          { label: "Frequently Asked Questions", href: "/faq", description: "Board, subjects, admissions and more." },
          { label: "Privacy Policy", href: "/privacy-policy", description: "How we handle your information." },
        ],
      },
    ],
    featured: {
      title: "Since 1986",
      text: "A school built on character, compassion and academic excellence.",
      href: "/about",
      cta: "Discover our story",
    },
  },
  {
    label: "Academics",
    href: "/academics",
    groups: [
      {
        title: "Programmes",
        links: [
          { label: "Pre-Primary", href: "/pre-primary", description: "Nursery & Kindergarten foundations." },
          { label: "Primary", href: "/primary", description: "Curiosity-led learning, classes I–VI." },
          { label: "Secondary", href: "/secondary", description: "Confident learners, classes VI–X." },
          { label: "O Levels", href: "/o-levels", description: "Pearson Edexcel IGCSE pathway." },
          { label: "A Levels", href: "/a-levels", description: "Advanced study with global recognition." },
          { label: "AKU SSC & HSSC-I", href: "/aku-ssc-hssc-i", description: "Matriculation and Intermediate with AKU-EB." },
        ],
      },
      {
        title: "Schools & Resources",
        links: [
          { label: "The College", href: "/college", description: "A-Levels at Gulshan-e-Maymar." },
          { label: "A-Level Programme", href: "/beacon-light-academy-a-level", description: "Subjects, registrations and interviews." },
          { label: "BTEC Islamabad", href: "/btec-islamabad", description: "Arts, game production, robotics and media." },
          { label: "Gulshan-e-Maymar Primary", href: "/gulshan-e-maymar-primary-section", description: "Our primary campus in Maymar." },
          { label: "Book Lists", href: "/book-list-of-class-nursery-till-11-session-2025-26", description: "Session 2026–27 downloads." },
          { label: "Test Syllabus", href: "/test-syllabus", description: "Admission test preparation." },
        ],
      },
    ],
    featured: {
      title: "A complete pathway",
      text: "From a child's first classroom to independent A-Level thinking.",
      href: "/academics",
      cta: "Explore academics",
    },
  },
  {
    label: "Admissions",
    href: "/admissions",
    groups: [
      {
        title: "Apply",
        links: [
          { label: "Admissions Overview", href: "/admissions", description: "Session 2026–27 is now open." },
          { label: "Nursery – IX Registration", href: "/admission-form-nursery-ix", description: "Choose your campus and apply." },
          { label: "A-Level Registration", href: "/a-level-registration-form", description: "Join Beacon Light Academy College." },
          { label: "Test Syllabus", href: "/test-syllabus", description: "Prepare for the admission test." },
        ],
      },
      {
        title: "Campus Forms",
        links: [
          { label: "Gulshan-e-Maymar Primary", href: "/primary-section-gulshan-e-maymar-admission-form" },
          { label: "Gulshan-e-Maymar Secondary", href: "/secondary-section-gulshan-e-maymar-admission-form" },
          { label: "Gulzar-e-Hijri (KDA)", href: "/senior-section-gulzar-e-hijri-iii-viii-admission-form" },
          { label: "Gulshan-e-Iqbal Junior", href: "/junior-section-gulshan-e-iqbal-nursery-kg-i-ii-admission-form" },
        ],
      },
    ],
    featured: {
      title: "Session 2026–27",
      text: "Online registration is open. Your child's next chapter starts here.",
      href: "/admissions",
      cta: "Apply now",
    },
  },
  {
    label: "Campus Life",
    href: "/events",
    groups: [
      {
        title: "Stories & Events",
        links: [
          { label: "Events & News", href: "/events", description: "Festivals, competitions and student stories." },
          { label: "Notice Board", href: "/notice-board", description: "Results, book lists and announcements." },
          { label: "Achievements", href: "/achievements", description: "Toppers across the world, Pakistan and Asia." },
          { label: "High Achievers", href: "/list-of-high-achievers", description: "Our roll of honour." },
        ],
      },
      {
        title: "Community",
        links: [
          { label: "Careers", href: "/career", description: "Teach, lead and grow with us." },
          { label: "Job Application", href: "/job-application-form", description: "Submit your profile." },
          { label: "Contact Us", href: "/contact", description: "Reach the right campus." },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavGroup[] = [
  {
    title: "About",
    links: [
      { label: "About BLA", href: "/about" },
      { label: "Principal's Message", href: "/principal-message" },
      { label: "Our Accomplishments", href: "/our-accomplishments" },
      { label: "Rules & Regulations", href: "/rules-regulation" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Academics",
    links: [
      { label: "Pre-Primary", href: "/pre-primary" },
      { label: "Primary & Secondary", href: "/secondary" },
      { label: "O Levels", href: "/o-levels" },
      { label: "A Levels", href: "/a-levels" },
      { label: "AKU SSC & HSSC-I", href: "/aku-ssc-hssc-i" },
      { label: "BTEC Islamabad", href: "/btec-islamabad" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "Admissions Overview", href: "/admissions" },
      { label: "Nursery – IX Form", href: "/admission-form-nursery-ix" },
      { label: "A-Level Registration", href: "/a-level-registration-form" },
      { label: "Test Syllabus", href: "/test-syllabus" },
      { label: "Book Lists", href: "/book-list-of-class-nursery-till-11-session-2025-26" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Notice Board", href: "/notice-board" },
      { label: "Events & News", href: "/events" },
      { label: "Achievements", href: "/achievements" },
      { label: "Careers", href: "/career" },
      { label: "Contact Form", href: "/contact-form" },
    ],
  },
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/beaconlightacademy", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/beaconlightacademy", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/beacon-light-academy", icon: "linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/@beaconlightacademy", icon: "youtube" },
] as const;
