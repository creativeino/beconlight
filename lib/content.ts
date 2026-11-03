export const stats = [
  { value: 40, suffix: "+", label: "Years since inception", detail: "Serving Karachi since 1986" },
  { value: 4500, suffix: "+", label: "BLA alumni", detail: "A global community of achievers" },
  { value: 1000, suffix: "+", label: "Employees", detail: "Dedicated educators and staff" },
  { value: 6, suffix: "", label: "Campuses", detail: "Across Gulshan, KDA and Maymar" },
];

export type Programme = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  image: string;
  classes: string;
  board: string;
  focus: string[];
  accent: string;
};

export const programmes: Programme[] = [
  {
    slug: "pre-primary",
    name: "Pre-Primary",
    shortName: "Pre-Primary",
    tagline: "Where wonder begins",
    description:
      "A warm, play-led foundation where Nursery and Kindergarten children build confidence, language, number sense and a love for learning without the pressure of examinations.",
    image: "/media/images/primary-beacon-light-school.jpg",
    classes: "Nursery – Kindergarten",
    board: "Foundational years",
    focus: ["Play-based learning", "Language & phonics", "Motor skills", "Social confidence"],
    accent: "from-[#E8A93B]/90 to-[#D67A2F]/80",
  },
  {
    slug: "primary",
    name: "Primary",
    shortName: "Primary",
    tagline: "Curiosity becomes capability",
    description:
      "Classes I to VI nurture independent thinking through a broad, joyful curriculum. Continuous feedback replaces examination pressure, so every child learns at their own pace.",
    image: "/media/images/secondary-beacon-light-school.jpg",
    classes: "Classes I – VI",
    board: "No examination policy till Class V",
    focus: ["Literacy & numeracy", "Inquiry projects", "Robotics & STEM", "Arts & athletics"],
    accent: "from-[#2A7A6B]/90 to-[#185C50]/80",
  },
  {
    slug: "secondary",
    name: "Secondary",
    shortName: "Secondary",
    tagline: "Thinking with purpose",
    description:
      "Classes VI to X combine academic rigour with character education. Students prepare for O Levels or AKU-EB while discovering leadership, service and their own voice.",
    image: "/media/images/secondary-Beacon-light.jpg",
    classes: "Classes VI – X",
    board: "Pearson Edexcel · AKU-EB",
    focus: ["O Level preparation", "STEM & robotics", "Debate & MUN", "Counselling & wellbeing"],
    accent: "from-[#1C4C7C]/90 to-[#0A2342]/85",
  },
  {
    slug: "o-levels",
    name: "O Levels",
    shortName: "O Levels",
    tagline: "A globally respected start",
    description:
      "Our Pearson Edexcel IGCSE programme builds deep subject understanding, analytical writing and exam confidence, supported by experienced faculty and modern labs.",
    image: "/media/images/O-Level-beacon-light.jpg",
    classes: "Classes IX – X",
    board: "Pearson Edexcel International GCSE",
    focus: ["Minimum 8 subjects", "Science & computer labs", "Past-paper mastery", "University readiness"],
    accent: "from-[#7A4E9B]/90 to-[#4C2E67]/85",
  },
  {
    slug: "a-levels",
    name: "A Levels",
    shortName: "A Levels",
    tagline: "The launchpad",
    description:
      "Advanced study in small, focused cohorts. Students choose from a wide range of Pearson Edexcel IAL subjects and are guided through university applications and interviews.",
    image: "/media/images/A-level-beacon-light-school.jpg",
    classes: "AS & A2",
    board: "Pearson Edexcel IAL",
    focus: ["Specialist subject pathways", "University counselling", "Research & presentation", "Leadership"],
    accent: "from-[#B8872E]/90 to-[#8A5F19]/85",
  },
  {
    slug: "aku-ssc-hssc-i",
    name: "AKU SSC & HSSC-I",
    shortName: "AKU-EB",
    tagline: "A pathway for every ambition",
    description:
      "Matriculation (SSC) and Intermediate (HSSC-I) in affiliation with the Aga Khan University Examination Board, opening another respected route to higher education.",
    image: "/media/images/AKU-Board.jpg",
    classes: "SSC & HSSC-I",
    board: "Aga Khan University Examination Board",
    focus: ["Concept-driven learning", "Pre-medical & pre-engineering", "Science general", "Board exam support"],
    accent: "from-[#1F6F5C]/90 to-[#123F35]/85",
  },
];

export const programmeCards = [
  { label: "Pre-Primary", href: "/pre-primary", detail: "Nursery – KG" },
  { label: "Primary", href: "/primary", detail: "Classes I – VI" },
  { label: "Secondary", href: "/secondary", detail: "Classes VI – X" },
  { label: "O Levels", href: "/o-levels", detail: "Pearson Edexcel" },
  { label: "A Levels", href: "/a-levels", detail: "AS & A2" },
  { label: "AKU SSC & HSSC-I", href: "/aku-ssc-hssc-i", detail: "AKU-EB" },
];

export const differentiators = [
  {
    icon: "graduation",
    title: "Academic Excellence",
    text: "A four-decade legacy of regional, national and global achievers, built on rigorous teaching and genuine care.",
  },
  {
    icon: "heart",
    title: "Value-Based Education",
    text: "Mutala-e-Quran and LIM weave ethics, faith and leadership into everyday learning.",
  },
  {
    icon: "bookOpen",
    title: "No Examination Policy",
    text: "Continuous feedback instead of exam pressure until Class V, so children learn with confidence.",
  },
  {
    icon: "flask",
    title: "STEM & Robotics",
    text: "Hands-on robotics, science labs and multimedia classrooms turn curiosity into capability.",
  },
  {
    icon: "trophy",
    title: "Extra-Curriculars",
    text: "Debates, MUNs, IKLC, IKMC, Destination Imagination and national science competitions.",
  },
  {
    icon: "shield",
    title: "Wellbeing & Counselling",
    text: "In-house certified counsellors support emotional wellbeing and learning challenges.",
  },
];

export type Campus = {
  name: string;
  area: string;
  classes: string;
  people: { name: string; role: string; email?: string; phone?: string }[];
  phone?: string;
  address?: string;
  formHref?: string;
};

export const campuses: Campus[] = [
  {
    name: "Gulshan-e-Iqbal Campus",
    area: "Block 7, Karachi",
    classes: "Nursery – Class VI",
    phone: "021-34833851",
    address: "E-24, Block 7, Gulshan-e-Iqbal, Karachi",
    formHref: "/junior-section-gulshan-e-iqbal-nursery-kg-i-ii-admission-form",
    people: [
      { name: "Ms. Farkhanda Gufran", role: "Head Mistress, Nursery – Kindergarten", email: "farkhandagufran@beaconlightacademy.edu.pk", phone: "021-34833851" },
      { name: "Ms. Shama Naseem", role: "Head Mistress, Classes I – II", email: "shamanaseem@beaconlightacademy.edu.pk", phone: "021-34819179" },
      { name: "Ms. Tooba Roghay", role: "Head Mistress, Classes III – VI", email: "toobaroghay@beaconlightacademy.edu.pk", phone: "021-34989179" },
    ],
  },
  {
    name: "Gulzar-e-Hijri Campus",
    area: "KDA Housing Society, Scheme 33",
    classes: "Classes I – X",
    phone: "021-34693463",
    address: "KDA Housing Society, Scheme 33, Karachi",
    formHref: "/senior-section-gulzar-e-hijri-iii-viii-admission-form",
    people: [
      { name: "Ms. Nelofar Inam", role: "Head Mistress, Classes I – V", email: "nelofarinam@beaconlightacademy.edu.pk", phone: "021-34690114" },
      { name: "Ms. Sidra Imran", role: "Head Mistress, Classes VI – X", email: "sidrahimran@beaconlightacademy.edu.pk", phone: "021-34693463" },
    ],
  },
  {
    name: "Gulshan-e-Maymar Campus",
    area: "Primary & Senior branches",
    classes: "Nursery – Class X & College",
    phone: "021-36832016",
    address: "Gulshan-e-Maymar, Karachi",
    formHref: "/secondary-section-gulshan-e-maymar-admission-form",
    people: [
      { name: "Ms. Muddassirah Siddiqui", role: "Head Mistress, Primary Branch", email: "muddassirasiddiqui@beaconlightacademy.edu.pk", phone: "021-36832017" },
      { name: "Ms. Andaleeb Gufran", role: "Head Mistress, Senior Branch", email: "andaleebgufran@beaconlightacademy.edu.pk", phone: "021-36832016" },
      { name: "Ms. Azra Zafar", role: "Head of College", email: "asrazafar@beaconlightacademy.edu.pk", phone: "021-36832016" },
    ],
  },
];

export const admissionSteps = [
  {
    step: "01",
    title: "Choose your campus",
    text: "Select the campus that suits your child's class and location — Gulshan-e-Iqbal, Gulzar-e-Hijri or Gulshan-e-Maymar.",
  },
  {
    step: "02",
    title: "Submit the form",
    text: "Complete the online registration form with accurate details. You may also collect a form from any campus.",
  },
  {
    step: "03",
    title: "Assessment & interview",
    text: "Our admissions team reviews your application and invites your child for an age-appropriate assessment and interview.",
  },
  {
    step: "04",
    title: "Welcome to BLA",
    text: "On confirmation, complete the admission formalities and join a community that has shaped achievers for 40 years.",
  },
];

export const admissionDates = [
  { date: "15 January 2026", day: "Thursday", title: "Online registration commences" },
  { date: "2 February 2026", day: "Monday", title: "On-campus registration commences" },
  { date: "7 August 2026", day: "Friday", title: "Next admission test · reporting 8:30 am" },
];

export type EventStory = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  featured?: boolean;
};

export const events: EventStory[] = [
  {
    slug: "the-destination-imagination-journey",
    title: "The Destination Imagination Journey",
    category: "Competition",
    date: "Student story",
    excerpt:
      "Two teams from Gulshan-e-Maymar turned a painting into an eight-minute play — and discovered what two months of collaboration can build.",
    image: "/media/images/primary-beacon-light-school.jpg",
    featured: true,
  },
  {
    slug: "college-review-series-highbrow-college",
    title: "College Review Series: Highbrow College",
    category: "College Review",
    date: "Student voice",
    excerpt:
      "A 100% academic scholarship, purpose-built labs and mentors who understand students — one alumnus reviews Highbrow College.",
    image: "/media/images/College-Review-Highbrow-College.webp",
  },
  {
    slug: "into-the-next-gear-stepping-into-grade-11",
    title: "Into the Next Gear: Stepping into Grade 11",
    category: "Student Story",
    date: "Reflection",
    excerpt:
      "A student looks ahead to Grade 11 — the challenges, the opportunities and the person they are becoming.",
    image: "/media/images/Student-beacon.jpg",
  },
  {
    slug: "spark-sphere-2025",
    title: "Science Spark Sphere Festival",
    category: "Festival",
    date: "13 November 2025",
    excerpt:
      "A celebration of science, imagination and invention as our young researchers take centre stage.",
    image: "/media/images/Spark-Sphere-event-Beacon.jpg",
    featured: true,
  },
  {
    slug: "carnival-festival",
    title: "Carnival Festival",
    category: "Festival",
    date: "14 November 2025",
    excerpt:
      "Colour, music, food and laughter — the whole community came together for a day of pure joy.",
    image: "/media/images/Grand-Carnival.jpg",
  },
  {
    slug: "web-based-debate-program",
    title: "Web-Based Debate Programme",
    category: "Programme",
    date: "Global classroom",
    excerpt:
      "Skype sessions from California introduced our students to Lincoln-Douglas and Public Forum debate — and two earned scholarships.",
    image: "/media/images/Student-beacon.jpg",
  },
];

export type Notice = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  files?: { label: string; href: string }[];
  urgent?: boolean;
};

export const notices: Notice[] = [
  {
    slug: "admission-test-results-5-8-26",
    title: "Admission Test Results — 5 & 10 August 2026",
    date: "August 2026",
    category: "Results",
    excerpt:
      "Admission test results for Gulshan, KDA and Maymar campuses are now available for download.",
    files: [
      { label: "KDA Campus — 05-08-2026", href: "/media/docs/Admission-Test-result-KDA-Campus-05-08-2026.pdf" },
      { label: "Maymar Campus — 10-08-2026", href: "/media/docs/Admission-Test-result-maymar-Campus-update-10-8-26.pdf" },
    ],
    urgent: true,
  },
  {
    slug: "new-admission-test-date",
    title: "New Admission Test Date",
    date: "7 August 2026",
    category: "Admissions",
    excerpt:
      "The next admission test will be held on Friday, 7 August 2026. Reporting time is 8:30 am; the test begins at 9:00 am.",
    urgent: true,
  },
  {
    slug: "blac-new-academic-session-notice",
    title: "BLAC New Academic Session Notice",
    date: "August 2026",
    category: "College",
    excerpt:
      "A2 classes commence on 6 August and AS / HSSC-I classes on 10 August 2026. Welcome to a new academic year.",
  },
  {
    slug: "book-list-2026-2027",
    title: "Book List 2026–2027",
    date: "Session 2026–27",
    category: "Resources",
    excerpt:
      "Download the book list for Nursery through Grade 11, including IGCSE and AKU-EB streams.",
    files: [
      { label: "Nursery Book List 2026–27", href: "/media/docs/Nursery-Booklist-2026-27-1.pdf" },
      { label: "Kindergarten — New Admissions", href: "/media/docs/Kindergarten-book-list-2026-27-New-admission.pdf" },
      { label: "Kindergarten — Promoted Students", href: "/media/docs/Kindergarten-Booklist-2026-27-Promoted-students-1.pdf" },
      { label: "Grade I", href: "/media/docs/Book-list-I.pdf" },
      { label: "Grade II", href: "/media/docs/Book-list-II.pdf" },
      { label: "Grade III", href: "/media/docs/BLA-Booklist-Grade-III-2026-27-1.pdf" },
      { label: "Grade IV", href: "/media/docs/BLA-Booklist-Grade-IV-2026-27-1.pdf" },
      { label: "Grade V", href: "/media/docs/BLA-Booklist-Grade-V-2026-27-1.pdf" },
      { label: "Grade VI", href: "/media/docs/Book-list-for-class-6-2026-2027-1.pdf" },
      { label: "Grade VII", href: "/media/docs/Book-list-for-class-7-2026-2027-1.pdf" },
      { label: "Grade VIII — IGCSE", href: "/media/docs/Book-list-for-class-8-2026-2027-IGCSE-1.pdf" },
      { label: "Grade VIII — AKU", href: "/media/docs/Book-list-for-class-8-2026-2027-AKU-1.pdf" },
      { label: "Grade IX — IGCSE", href: "/media/docs/Final-Booklist-Grade-IX-2026-2027-IGCSE-1.docx.pdf" },
      { label: "Grade IX — AKU", href: "/media/docs/AKUEB-Booklist-Grade-IX-2026-2027-updated-1.pdf" },
      { label: "Grade X — IGCSE", href: "/media/docs/Final-Booklist-Grade-X-2026-2027-IGCSE-1.pdf" },
      { label: "Grade X — AKU", href: "/media/docs/AKUEB-Booklist-Grade-X-2026-2027-updated-1.pdf" },
      { label: "IAS Book List 2025–26", href: "/media/docs/BOOKLIST-IAS-2025-2026.pdf" },
      { label: "Grade 11 — AKU-EB", href: "/media/docs/final-akueb-booklist.pdf" },
    ],
  },
  {
    slug: "admission-test-results-27-7-2026",
    title: "Admission Test Results — 27 July 2026",
    date: "27 July 2026",
    category: "Results",
    excerpt:
      "Results for Gulshan Chapter, Maymar Campus and KDA Campus are available.",
    files: [
      { label: "Gulshan Chapter", href: "/media/docs/Admission-Test-Result-Gulshan-Chapter-27-07-2026.pdf" },
      { label: "Maymar Campus", href: "/media/docs/Admission-Test-result-maymar-Campus-update.pdf" },
      { label: "KDA Campus", href: "/media/docs/Admission-Test-result-KDA-Campus-27-07-2026.pdf" },
    ],
  },
  {
    slug: "admission-test-results-5-june-2026",
    title: "Admission Test Results — 5 June 2026",
    date: "5 June 2026",
    category: "Results",
    excerpt:
      "Results for Gulshan Chapter, Maymar Chapter and KDA Campus are now available.",
    files: [
      { label: "Gulshan Chapter", href: "/media/docs/Admission-Test-Result-Gulshan-Chapter-05-06-2026.pdf" },
      { label: "Maymar Chapter", href: "/media/docs/Admission-Test-result-Maymar-Chapter5-June-2026-updated-1.pdf" },
      { label: "KDA Campus", href: "/media/docs/Admission-Test-result-KDA-Campus-05-06-2026.pdf" },
    ],
  },
  {
    slug: "admission-test-results-30-04-2026",
    title: "Admission Test Results — 30 April 2026",
    date: "30 April 2026",
    category: "Results",
    excerpt:
      "Results for Maymar Chapter, Gulshan Chapter and KDA Campus are available.",
    files: [
      { label: "Maymar Chapter", href: "/media/docs/Admission-Test-result-Campus-Maymar-30-04-2026.pdf" },
      { label: "Gulshan Chapter", href: "/media/docs/Admission-Test-Result-Gulshan-Chapter-30-04-2026.pdf" },
      { label: "KDA Campus", href: "/media/docs/Admission-Test-result-KDA-Campus-30-04-2026-1.pdf" },
    ],
  },
  {
    slug: "admission-test-result",
    title: "Admission Test Results — 4 April 2026",
    date: "4 April 2026",
    category: "Results",
    excerpt:
      "Maymar, Gulshan and KDA campus admission test results for session 2026–27.",
    files: [
      { label: "Maymar Campus", href: "/media/docs/Admission-Test-result-maymar-Campus-04-04-2026-2026-27-1.pdf" },
      { label: "Gulshan Chapter", href: "/media/docs/Admission-Test-Result-Gulshan-Chapter-04-04-2026.pdf" },
      { label: "KDA Campus", href: "/media/docs/Admission-Test-result-KDA-Campus-04-04-2026.pdf" },
    ],
  },
  {
    slug: "admission-test-result-26-aug-2025",
    title: "Admission Test Results — 10 February 2026",
    date: "10 February 2026",
    category: "Results",
    excerpt:
      "Results for Gulshan-e-Maymar Campus (Pre & Sec 1–9), Gulshan-e-Iqbal Campus and KDA Campus.",
    files: [
      { label: "Gulshan-e-Maymar Campus", href: "/media/docs/Admission-Test-result-10-2-2025-Maymar-chapter-1.pdf" },
      { label: "Gulshan-e-Iqbal Campus", href: "/media/docs/Admission-Test-Result-Gulshan-Chapter-10-02-2026.pdf" },
      { label: "KDA Campus", href: "/media/docs/Admission-Test-result-KDA-Campus-10-02-2026.pdf" },
    ],
  },
  {
    slug: "list-of-admission-test-results-nursery",
    title: "List of Admission Test Results — Nursery",
    date: "February 2026",
    category: "Results",
    excerpt:
      "Nursery admission lists for 10 February and 23 February 2026.",
    files: [
      { label: "List of 10 February 2026", href: "/media/docs/LIST-OF-1st-NUR-ADMISSION.pdf" },
      { label: "List of 23 February 2026", href: "/media/docs/2nd-Admission-list-Nursery-Maymar.pdf" },
    ],
  },
  {
    slug: "school-closures-mandated-by-the-government",
    title: "School Closures Mandated by the Government",
    date: "March 2026",
    category: "Announcement",
    excerpt:
      "Academic activities continue online from 24 March 2026 until further notice. Timetables are shared on the school app.",
  },
  {
    slug: "annoucement-we-have-leveled-up",
    title: "Announcement: We Have Levelled Up",
    date: "Announcement",
    category: "College",
    excerpt:
      "Beacon Light Academy A-Level is now Beacon Light Academy College — a new chapter for our senior students.",
  },
];

export const bookLists = [
  { label: "Nursery", detail: "Book list 2026–27", href: "/media/docs/Nursery-Booklist-2026-27-1.pdf" },
  { label: "Kindergarten", detail: "New admissions", href: "/media/docs/Kindergarten-book-list-2026-27-New-admission.pdf" },
  { label: "Kindergarten", detail: "Promoted students", href: "/media/docs/Kindergarten-Booklist-2026-27-Promoted-students-1.pdf" },
  { label: "Grade I", detail: "BLA book list 2026–27", href: "/media/docs/Book-list-I.pdf" },
  { label: "Grade II", detail: "BLA book list 2026–27", href: "/media/docs/Book-list-II.pdf" },
  { label: "Grade III", detail: "Updated 2026–27", href: "/media/docs/BLA-Booklist-Grade-III-2026-27-1.pdf" },
  { label: "Grade IV", detail: "Updated 2026–27", href: "/media/docs/BLA-Booklist-Grade-IV-2026-27-1.pdf" },
  { label: "Grade V", detail: "Updated 2026–27", href: "/media/docs/BLA-Booklist-Grade-V-2026-27-1.pdf" },
  { label: "Grade VI", detail: "2026–27", href: "/media/docs/Book-list-for-class-6-2026-2027-1.pdf" },
  { label: "Grade VII", detail: "2026–27", href: "/media/docs/Book-list-for-class-7-2026-2027-1.pdf" },
  { label: "Grade VIII", detail: "IGCSE stream", href: "/media/docs/Book-list-for-class-8-2026-2027-IGCSE-1.pdf" },
  { label: "Grade VIII", detail: "AKU stream", href: "/media/docs/Book-list-for-class-8-2026-2027-AKU-1.pdf" },
  { label: "Grade IX", detail: "IGCSE updated", href: "/media/docs/Final-Booklist-Grade-IX-2026-2027-IGCSE-1.docx.pdf" },
  { label: "Grade IX", detail: "AKU-EB updated", href: "/media/docs/AKUEB-Booklist-Grade-IX-2026-2027-updated-1.pdf" },
  { label: "Grade X", detail: "IGCSE updated", href: "/media/docs/Final-Booklist-Grade-X-2026-2027-IGCSE-1.pdf" },
  { label: "Grade X", detail: "AKU-EB updated", href: "/media/docs/AKUEB-Booklist-Grade-X-2026-2027-updated-1.pdf" },
  { label: "IAS", detail: "Book list 2025–26", href: "/media/docs/BOOKLIST-IAS-2025-2026.pdf" },
  { label: "Grade 11", detail: "AKU-EB book list", href: "/media/docs/final-akueb-booklist.pdf" },
];

export const syllabi = [
  { label: "KG", href: "/media/docs/updated-Syllabus-KG.pdf" },
  { label: "Class 1", href: "/media/docs/updated-Syllabus-1.pdf" },
  { label: "Class 2", href: "/media/docs/updated-Syllabus-2.pdf" },
  { label: "Class 3", href: "/media/docs/updated-Syllabus-3.pdf" },
  { label: "Class 4", href: "/media/docs/updated-Syllabus-4.pdf" },
  { label: "Class 5", href: "/media/docs/updated-Syllabus-5-1.pdf" },
  { label: "Class 6", href: "/media/docs/updated-Syllabus-6.pdf" },
  { label: "Class 7", href: "/media/docs/updated-Syllabus-7.pdf" },
  { label: "Class 8", href: "/media/docs/updated-Syllabus-8.pdf" },
  { label: "Class 9", href: "/media/docs/updated-Syllabus-9.pdf" },
];

export const uniformSellers = [
  {
    area: "Gulshan-e-Iqbal",
    shops: [
      { name: "Sami Sons", address: "Shop G-5 & G-6, Grace Shopping Mall, Block 4, Gulshan-e-Iqbal, Karachi.", phone: "021-34994002" },
      { name: "Books & Bits", address: "Shop 4, Lucky Centre, Block 4, Gulshan-e-Iqbal, Karachi.", phone: "0300-9239179, 021-34814542" },
      { name: "Humera & Hamza", address: "22 Eastern Apartment, Block 6, Gulshan-e-Iqbal, opposite Noman Centre, Rashid Minhas Road, Karachi.", phone: "021-34810696" },
      { name: "Asif Book & Uniforms", address: "Shop B-1, Uni Arcade, Block 3, opposite Rim Jhim Shopping Centre, Karachi.", phone: "021-34987290, 021-34978954" },
      { name: "Syed Uniforms", address: "Shop G2/2, Pacific View Apartment, Block 3, Gulistan-e-Johar, Karachi.", phone: "0345-6066887" },
    ],
  },
  {
    area: "Gulshan-e-Maymar",
    shops: [
      { name: "Syed Uniforms", address: "Shop 7, Al Reyan View, Plot LS-01, Sector X1, behind Taqwa School, Gulistan-e-Maymar, Karachi.", phone: "0345-6066887" },
    ],
  },
];

export const careerTracks = [
  {
    title: "Teaching Faculty",
    text: "Primary, secondary and higher secondary educators who can make learning feel alive.",
    image: "/media/images/primary-beacon-light-school.jpg",
  },
  {
    title: "Office & Administration",
    text: "Admissions, accounts, coordination and campus operations professionals.",
    image: "/media/images/admission-banner-Beacon-light.jpg",
  },
  {
    title: "Lab & Technology",
    text: "Science, robotics and IT specialists who turn theory into hands-on discovery.",
    image: "/media/images/beacon-light-banner-4.jpg",
  },
  {
    title: "Co-Curricular Mentors",
    text: "Debate coaches, sports leads and creative mentors for our growing programme.",
    image: "/media/images/Grand-Carnival.jpg",
  },
];

export const faqs = [
  {
    q: "What is the difference between the Pearson Edexcel Board and the Cambridge Board?",
    a: "Both are internationally recognised UK qualifications. Pearson Edexcel is the board Beacon Light Academy is registered with, offering IGCSE and International A Levels. The structure and assessment style differ, but both open doors to universities worldwide. Our counsellors can guide families on the best fit.",
  },
  {
    q: "How many subjects is a student required to enrol for in IGCSE / O Levels?",
    a: "A minimum of 8 subjects. Students choose a combination that keeps future pathways open while reflecting their strengths and interests.",
  },
  {
    q: "Does the school offer Matriculation?",
    a: "Yes. We offer Matriculation (SSC) and Intermediate (HSSC-I) in affiliation with the Aga Khan University Examination Board (AKU-EB), alongside our Pearson Edexcel pathway.",
  },
  {
    q: "When do admissions begin and what is the general procedure?",
    a: "Admissions usually commence in January and March each year. Candidates complete the online or on-campus registration form and submit the relevant documents. The Admissions Department then invites applicants for interviews and age-appropriate tests.",
  },
  {
    q: "What is the age criteria for admission?",
    a: "Age criteria vary by class and campus. Please contact the Admissions Department or visit the admissions section for guidance specific to your child's year group.",
  },
  {
    q: "Do you provide transport?",
    a: "The school does not own a transport fleet. However, Mr. Amir Lala is appointed as the School Transport Contractor under a mutual agreement. All transport matters should be directed to him on 0300-2582154 or 0336-2415742.",
  },
];
