import { faqs } from "./content";

export type PageSection =
  | {
      type: "prose";
      title?: string;
      body: string[];
      bullets?: string[];
    }
  | {
      type: "cards";
      title?: string;
      intro?: string;
      columns?: 2 | 3;
      items: { title: string; text: string; tag?: string; href?: string }[];
    }
  | {
      type: "list";
      title?: string;
      intro?: string;
      items: string[];
      ordered?: boolean;
    }
  | {
      type: "table";
      title?: string;
      intro?: string;
      columns: string[];
      rows: string[][];
    }
  | {
      type: "files";
      title?: string;
      intro?: string;
      items: { label: string; href: string; meta?: string }[];
    }
  | {
      type: "quote";
      text: string;
      name?: string;
      role?: string;
    }
  | {
      type: "faq";
      title?: string;
      items: { q: string; a: string }[];
    }
  | {
      type: "subjects";
      title?: string;
      intro?: string;
      items: string[];
    }
  | {
      type: "cta";
      title: string;
      text: string;
      href: string;
      label: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    };

export type SitePage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  heroImagePosition?: string;
  portrait?: { src: string; alt: string; name: string; role: string; position?: string };
  meta?: string;
  parent?: { label: string; href: string };
  sections: PageSection[];
  related?: { label: string; href: string; text?: string }[];
};

const vision =
  "The Society for Academic Excellence aims to excel dynamically in value-based education, utilising the latest resources and methodologies and in turn provide society an honest, able and dedicated leadership.";

const mission =
  "Beacon Light Academy aims to provide, in partnership with parents, a quality education in an environment where every individual is cared for spiritually, morally, intellectually, physically, socially and emotionally, so that they can make their best contribution to our society.";

const programmeRelated = [
  { label: "Admissions", href: "/admissions", text: "Session 2026–27 is open." },
  { label: "Book Lists", href: "/book-list-of-class-nursery-till-11-session-2025-26", text: "Downloads for every grade." },
  { label: "Test Syllabus", href: "/test-syllabus", text: "Know what to prepare." },
];

export const pages: Record<string, SitePage> = {
  about: {
    slug: "about",
    title: "A school that has stood the test of time",
    eyebrow: "About Beacon Light Academy",
    description:
      "For four decades, Beacon Light Academy has made effective, pocket-friendly and value-based education accessible to the families of Karachi.",
    heroImage: "/media/images/beacon-light-academy-main-banner1.jpg",
    heroAlt: "Life at Beacon Light Academy",
    parent: { label: "About", href: "/about" },
    sections: [
      {
        type: "prose",
        title: "Our beginning",
        body: [
          "Beacon Light Academy came into existence on 10 January 1986 as the brainchild of the social organisation Society for Academic Excellence, registered with the Government under the Registration of Society Act XXI of 1860.",
          "For 40 years we have served the community in education — steadfast in our commitment to academic excellence — with the aim of making effective, pocket-friendly and value-based education accessible in a student-centred environment that advances character growth, compassion and ethics.",
          "These four decades have only strengthened our vision to provide quality education while nurturing moral consciousness, so that when students step into the real world they carry themselves as sophisticated, conscientious citizens of Pakistan.",
          "We thank Almighty Allah for the guidance and prestige to groom our students so professionally that they are awarded distinctions and high achiever status by O Level and Intermediate boards year after year. We also acknowledge our teachers, whose ability, honesty, integrity and devotion make the Academy's aims possible — and our parents, who share the same goals.",
          "At Beacon Light Academy we offer a complete education pathway, from setting the foundation in Nursery to encouraging independent, critical thinking in A Levels and Intermediate. Beyond the classroom, students have abundant opportunities to develop practical skills such as public speaking, STEM and athletics.",
        ],
      },
      {
        type: "cards",
        title: "Where we learn",
        intro: "Each campus has a distinct role in the Beacon Light journey.",
        columns: 3,
        items: [
          {
            title: "Gulshan-e-Iqbal",
            tag: "Block 7",
            text: "Administrative office, Pre-Primary and Junior Primary classes in E-24 and E-49, with Primary classes in E-14.",
          },
          {
            title: "KDA Housing Society",
            tag: "Scheme 33",
            text: "Primary and lower secondary classes III–VIII in a purpose-built campus environment.",
          },
          {
            title: "Gulshan-e-Maymar",
            tag: "Primary & Senior",
            text: "A primary campus for Nursery–V, the senior campus for VI–X, and the College for A Levels and Intermediate.",
          },
        ],
      },
      {
        type: "prose",
        title: "Buildings are not the whole story",
        body: [
          "We have full faith that buildings, however magnificent, are not the true source of joy by themselves. What makes them an edifice of joy is the quality of education imparted and the sincerity of purpose visible there. We invite you to visit us and feel that pleasure for yourself.",
        ],
      },
      {
        type: "cards",
        title: "Vision & mission",
        columns: 2,
        items: [
          { title: "Our vision", tag: "Clear thinking makes a bright future", text: vision },
          { title: "Our mission", tag: "In partnership with parents", text: mission },
        ],
      },
      {
        type: "cta",
        title: "Come and see the difference",
        text: "Book a campus visit and meet the people who make Beacon Light feel like home.",
        href: "/contact",
        label: "Arrange a visit",
      },
    ],
    related: programmeRelated,
  },

  "about-bla": {
    slug: "about-bla",
    title: "Four decades of learning, character and community",
    eyebrow: "Our Story",
    description:
      "From a single idea in 1986 to a community of six campuses, thousands of alumni and a legacy of world-class achievers.",
    heroImage: "/media/images/beacon-light-banner-4.jpg",
    heroAlt: "Students learning in Beacon Light Academy laboratories",
    parent: { label: "About", href: "/about" },
    sections: [
      {
        type: "prose",
        title: "A journey that began in 1986",
        body: [
          "Beacon Light Academy came into existence on 10 January 1986 as the brainchild of the social organisation Society for Academic Excellence, registered under the Registration of Society Act XXI of 1860.",
          "For 40 years we have been serving the community in the education industry — steadfast in our commitment to educational excellence — with the ultimate aim of making accessible for the people of Karachi effective, pocket-friendly and value-based education in a student-centred ambience that advances character growth, compassion and ethics.",
          "These four decades have only further solidified our vision to provide quality education and inculcate a sense of moral consciousness in our students; so that once they step out of our campus and into the real world, they carry themselves as sophisticated and conscientious citizens of Pakistan.",
          "Although it will never be sufficient, we thank Almighty Allah for bestowing us with the guidance and prestige to groom our bright students so professionally that they are awarded distinctions and high achiever status year after year. It would be remiss of us not to acknowledge our teachers: their ability, honesty, integrity, sincerity and deep devotion to students guarantee that the Academy's aims are fulfilled.",
        ],
      },
      {
        type: "list",
        title: "Where you will find us",
        intro: "Our campuses in Gulshan-e-Iqbal, KDA and Gulshan-e-Maymar each serve a distinct stage of the journey.",
        items: [
          "Gulshan-e-Iqbal, Block 7 — Administrative Office at E-24, Pre-Primary (Nursery & Kindergarten) and Junior Primary (I & II) in nearby buildings, Primary (III–VI) at E-14.",
          "KDA Housing Society, Scheme 33 — Primary classes III to VIII.",
          "Gulshan-e-Maymar Senior Campus — Classes VI to X (O Levels & AKU-EB) and the College for A Levels & Intermediate.",
          "Gulshan-e-Maymar Primary Campus — Classes Nursery to V in the same vicinity.",
        ],
      },
      {
        type: "quote",
        text: "Buildings, however magnificent they may be, are not the true source of joy by themselves. What makes them an edifice of joy is the quality of education imparted and the sincerity of purpose visible there.",
        name: "Beacon Light Academy",
        role: "Our philosophy",
      },
      {
        type: "cards",
        title: "Values we live by",
        columns: 2,
        items: [
          { title: "Vision", tag: "Clear thinking makes a bright future", text: vision },
          { title: "Mission", tag: "Every individual matters", text: mission },
        ],
      },
      {
        type: "cta",
        title: "Be part of the next chapter",
        text: "Admissions for Session 2026–27 are open across our campuses.",
        href: "/admissions",
        label: "Explore admissions",
      },
    ],
    related: programmeRelated,
  },

  "principal-message": {
    slug: "principal-message",
    title: "Mothers of our students",
    eyebrow: "From the Principal",
    description:
      "A message from Mrs. Azra Anwar Ahmed on partnership, presence and the small acts that shape a child.",
    heroImage: "",
    heroAlt: "Principal's message",
    portrait: {
      src: "/media/images/Miss-Azra-Beacon-Light-School.jpg",
      alt: "Mrs. Azra Anwar Ahmed, Principal of Beacon Light Academy",
      name: "Mrs. Azra Anwar Ahmed",
      role: "Principal · Beacon Light Academy",
      position: "50% 32%",
    },
    parent: { label: "About", href: "/about" },
    sections: [
      {
        type: "quote",
        text: "The hand that rocks the cradle rules the world.",
        name: "Mrs. Azra Anwar Ahmed",
        role: "Principal, Beacon Light Academy",
      },
      {
        type: "prose",
        title: "Where is that hand?",
        body: [
          "Everyone has heard the great saying for mothers, but where is that hand? We can't see it anymore — either it is working in a factory or filing in an office. Now who shall rock the cradle?",
          "Children need their mother to pat them in appreciation, comfort them when they are in distress, console them when they lose, tap them when they are going astray, pull them back when they are on the edge. Let us be motherly mothers: spend time not only with them but for them too.",
          "Dear parents, to complete the triangle, your cooperation with us in helping your child on the upward journey is direly needed. Let us remind and revise a few rules that are vital for our children.",
        ],
      },
      {
        type: "list",
        title: "What you can do, and why",
        items: [
          "Ensure regular attendance of your ward for revision of past papers. Absence may cause disqualification from further mock papers and examinations. In genuine sickness, please write an application and send it with the original prescription of the physician.",
          "Cell phones have been a nagging source of nuisance and hamper the disciplinary system. Do not let your child bring one; if they do, the school shall confiscate it.",
          "General cleanliness and appropriate uniform matter: a vest for boys and slips for girls, polished black shoes, black belt, proper haircut, tied hair or braids for girls, trimmed nails, and arrival before 7:50 am.",
          "Discourage fizzy drinks and preserved packet food. Send homemade parathas and sandwiches with a pinch of love added naturally.",
          "Your ward is a window to your home. We hope to see respect shown towards others and elders.",
        ],
      },
      {
        type: "prose",
        body: [
          "You wish the same. Let us make this a generation the world should be proud of — with high regards and even higher expectations.",
          "Wassalam,\nAzra Anwar Ahmed (Mrs.)\nPrincipal",
        ],
      },
      {
        type: "cta",
        title: "Talk to our team",
        text: "Campus heads and coordinators are available by appointment on Fridays, 8:30–10:30 am.",
        href: "/contact",
        label: "Contact the school",
      },
    ],
    related: [
      { label: "Our Story", href: "/about-bla", text: "How the school began." },
      { label: "Rules & Regulations", href: "/rules-regulation", text: "Our shared code of conduct." },
      { label: "Admissions", href: "/admissions", text: "Join the community." },
    ],
  },

  "our-accomplishments": {
    slug: "our-accomplishments",
    title: "A roll of honour, decades in the making",
    eyebrow: "Our Accomplishments",
    description:
      "Year after year, our students place among the highest achievers in their subjects — regionally, nationally and around the world.",
    heroImage: "/media/images/beacon-Accomplishment.jpg",
    heroAlt: "Beacon Light Academy achievements",
    parent: { label: "About", href: "/about" },
    sections: [
      {
        type: "prose",
        title: "High achievers",
        body: [
          "Beacon Light Academy is proud to have a list of high achievers in different subjects, year after year, categorized into regional, countrywide and worldwide toppers.",
          "These results are not an accident. They are the outcome of consistent teaching, strong student-teacher relationships and families who value learning.",
        ],
      },
      {
        type: "cta",
        title: "Explore the full records",
        text: "Browse top achievers by world, Pakistan, province and Asia — including our A Level results.",
        href: "/achievements",
        label: "View achievements",
      },
      {
        type: "table",
        title: "Selected high achievers",
        intro: "A selection from our records across the O Level and IGCSE years.",
        columns: ["Student", "Year", "Subject", "Scope"],
        rows: [
          ["Haman Rizwan", "1998", "Pakistan Studies", "Top in Region"],
          ["Madiha Waris", "1998", "Islamiat", "Top in Region"],
          ["Faisal Anwar", "1998", "Chemistry", "Top in Region"],
          ["Faisal Anwar", "2009", "English Language", "Top in Region"],
          ["Owais Afridi", "1998", "Physics", "Top in Region"],
          ["Haman Rizwan", "1999", "Chemistry", "Top in Region"],
          ["Haman Rizwan", "1999", "Physics", "Top in Region"],
          ["Haman Rizwan", "1999", "Biology", "Top in Region"],
          ["Haman Rizwan", "1999", "English Language", "Top in Region"],
          ["Madiha Waris", "1999", "English Language", "Top in Region"],
          ["Fazal Manzoor", "1999", "Mathematics", "Top in Region"],
          ["Fazal Manzoor", "1999", "Human Biology", "Top in Region"],
          ["Ayesha Ahmed", "1999", "Islamiat", "Top in Region"],
          ["Ayesha Ahmed", "1999", "Pakistan Studies", "Top in Region"],
          ["Faiza Jameel", "2000", "Islamiat", "Top in Region"],
          ["Nadia Khalil", "2000", "Pakistan Studies", "Top in Region"],
          ["Ammarah Rehman", "2002", "Physics", "Top in Region"],
          ["Ammarah Rehman", "2002", "Chemistry", "Top in Region"],
          ["Andaleeb Gufran", "2002", "Physics", "Top in Region"],
          ["Saif Ahmed", "2002", "Computing Studies", "Top in Region"],
          ["Adeel Hasan", "2002", "Mathematics", "Top in Region"],
          ["Mahwish Qamar", "2002", "Islamiat", "Top in Region"],
          ["Madiha Rizwan", "2002", "Urdu", "Top in Region"],
          ["Owais Usmani", "2002", "Urdu", "Top in Region"],
          ["Raja Mohib", "2003", "Pure Mathematics", "Top in Region"],
          ["Maham Irfan", "2009", "Accounting", "Top in Country"],
          ["Maham Irfan", "2009", "Biology", "Top in Region"],
          ["Maham Irfan", "2009", "Chemistry", "Top in Region"],
          ["Mehak Maqbool", "2009", "Computing", "Top in Region"],
          ["Walid Hussain Farooqi", "2009", "English Language", "Top in Region"],
          ["Maryam Irfan", "2009", "Islamiyat", "Top in Region"],
          ["Tuba Faizan", "2009", "Mathematics", "Top in Country"],
          ["Javaria Rahman", "2009", "Physics", "Top in Region"],
          ["Tuba Faizan", "2009", "Pure Mathematics", "Top in Region"],
          ["Walid Hussain Farooqi", "2009", "Pure Mathematics", "Top in Region"],
          ["Tooba Gufran Roghay", "2009", "Urdu", "Top in Region"],
        ],
      },
    ],
    related: [
      { label: "Top in the World", href: "/high-achiever-top-in-the-world", text: "Global subject leaders." },
      { label: "Top in Pakistan", href: "/list-of-high-achievers-top-in-pakistan", text: "Countrywide toppers." },
      { label: "A Level Achievers", href: "/list-of-high-achievers-a-levels", text: "Our senior results." },
    ],
  },

  faq: {
    slug: "faq",
    title: "Questions, answered",
    eyebrow: "Frequently Asked Questions",
    description:
      "Everything families ask most about boards, subjects, admissions and daily school life.",
    heroImage: "/media/images/Beacon-light-FAQ.jpg",
    heroAlt: "Beacon Light Academy FAQ",
    parent: { label: "About", href: "/about" },
    sections: [
      {
        type: "faq",
        title: "Admissions & academics",
        items: faqs,
      },
      {
        type: "cta",
        title: "Still have a question?",
        text: "Our admissions team is happy to help you choose the right pathway.",
        href: "/contact-form",
        label: "Ask us directly",
      },
    ],
    related: [
      { label: "Admissions", href: "/admissions", text: "Start your application." },
      { label: "Test Syllabus", href: "/test-syllabus", text: "Prepare with confidence." },
      { label: "Rules & Regulations", href: "/rules-regulation", text: "Understand school life." },
    ],
  },

  "rules-regulation": {
    slug: "rules-regulation",
    title: "A community built on respect",
    eyebrow: "Rules & Regulations",
    description:
      "Clear expectations that keep our school safe, focused and kind — for every student, family and teacher.",
    heroImage: "/media/images/rules-regulation.jpg",
    heroAlt: "Students in a Beacon Light Academy classroom",
    parent: { label: "About", href: "/about" },
    sections: [
      {
        type: "prose",
        body: [
          "All rules of discipline communicated to parents must be strictly adhered to. In case any rule is violated, a penalty decided by the disciplinary committee will be imposed.",
        ],
      },
      {
        type: "list",
        title: "Attendance & punctuality",
        items: [
          "Absence must be accounted for in writing even if it is for one day only. There is a page in the Student's Diary to maintain the regularity record — please mention the number of days and a genuine reason, with a parent's signature.",
          "Students absent for more than two days in a month shall be penalised, as 90% attendance is obligatory for promotion to the next class and for Board exam registration.",
          "Punctuality is key. School timings, winter and summer, are 7:50 am to 1:50 pm from Monday to Thursday and 7:50 am to 12:20 pm on Friday.",
          "In case of unscheduled closures, the school's decision is announced on the website by 5:00 am. The school may work on Saturdays, communicated through the website. Government holidays announced extempore are observed.",
        ],
      },
      {
        type: "list",
        title: "Safety & daily life",
        items: [
          "The Academy does not own any bus or vehicle for transporting students. Parents are responsible for pick-up and drop-off and for arrangements with private transporters. The transport coordinator can guide families.",
          "Students must take pride in their appearance and come to school clean and in proper dress code.",
          "Students are not permitted to leave the premises during school hours. In an emergency, parents or guardians must bring a copy of their Identity Card and complete a Departure Slip at the gate. The school may verify identity and relationship.",
          "The school is not responsible for loss of books, money, clothes or other belongings. Pupils must look after their possessions.",
        ],
      },
      {
        type: "list",
        title: "Conduct & communication",
        items: [
          "Three parent-teacher meetings are organised each year and all parents are expected to attend. Missing more than one may result in the withholding of promotion or registration.",
          "Parents are advised not to disturb class or subject teachers during teaching hours. Urgent communication can be made through the app. Parents may meet the Principal, Coordinator, Headmistress or teachers on Fridays between 8:30 am and 10:30 am by prior appointment.",
          "No presents or gifts are permitted for teachers or staff.",
          "Cell phones, laptops, iPods or any other technological device are not allowed. Items brought to school will be confiscated with no claim for return. The same applies to vapes, pods, cigarettes and similar material; possession may lead to rustication.",
          "The school believes in non-aggressive, non-violent communication. Any violence or threat from a student or parent/guardian toward management or teachers may lead to cancellation of the student's registration.",
        ],
      },
      {
        type: "list",
        title: "Zero tolerance",
        items: [
          "Physical violence is absolutely prohibited. Bullying is intolerable and calls for immediate action. Among students caught fighting, the one who strikes first will be more severely punished even if provoked.",
          "Gang bullying, fighting or involvement of political influence may result in instant rustication. Carrying any arm, ammunition or fighting object is treated in the same way.",
          "Indecent or offensive language and actions are dealt with through warnings, detention and suspension. Persistent misbehaviour may result in rustication.",
          "All students are required to respect the rights and property of others. Serious action may be taken for intentional damage to school or other property.",
          "The management may, at its absolute discretion, order the removal of a student if it considers such action warranted. No claim for remission or refund of fee will be entertained.",
          "The disciplinary committee's decision is final.",
        ],
      },
    ],
    related: [
      { label: "Principal's Message", href: "/principal-message", text: "A note on partnership." },
      { label: "Contact", href: "/contact", text: "Reach your campus head." },
      { label: "FAQ", href: "/faq", text: "Common questions." },
    ],
  },

  "pre-primary": {
    slug: "pre-primary",
    title: "Where wonder becomes the first habit",
    eyebrow: "Pre-Primary Programme",
    description:
      "Nursery and Kindergarten years shaped by warmth, play, language and confidence — with no added pressure of examinations.",
    heroImage: "/media/images/primary-beacon-light-school.jpg",
    heroAlt: "Pre-primary students at Beacon Light Academy",
    parent: { label: "Academics", href: "/academics" },
    sections: [
      {
        type: "prose",
        title: "The first step matters most",
        body: [
          "Our Pre-Primary programme welcomes Nursery and Kindergarten children into a calm, joyful environment where curiosity is protected and confidence is built one small moment at a time.",
          "Teachers blend structured routines with play, stories, music and movement. Children learn to listen, speak, share, ask questions and take turns — the foundations on which all later learning rests.",
          "In keeping with our no-examination policy, assessment is continuous and observational. Parents receive meaningful feedback about their child's growth rather than a score to worry about.",
        ],
      },
      {
        type: "cards",
        title: "A day in the life",
        columns: 3,
        items: [
          { title: "Language & stories", text: "Phonics, vocabulary, listening and the joy of being read to every day." },
          { title: "Numbers & patterns", text: "Hands-on maths through blocks, sorting, counting and play." },
          { title: "Creative expression", text: "Art, music, movement and imaginative play that build fine and gross motor skills." },
          { title: "Social confidence", text: "Sharing, turn-taking, empathy and the courage to try something new." },
          { title: "Discovery", text: "Nature, sensory play and simple science that answers the endless 'why'." },
          { title: "Wellbeing", text: "Gentle routines, rest and care that help every child feel safe at school." },
        ],
      },
      {
        type: "cta",
        title: "Begin the journey",
        text: "Nursery and Kindergarten admissions are open at Gulshan-e-Iqbal and Gulshan-e-Maymar campuses.",
        href: "/admission-form-nursery-ix",
        label: "Apply for pre-primary",
      },
    ],
    related: programmeRelated,
  },

  primary: {
    slug: "primary",
    title: "Curiosity becomes capability",
    eyebrow: "Primary Programme",
    description:
      "Classes I to VI where children learn to think, question and create — supported by continuous feedback rather than exam pressure.",
    heroImage: "/media/images/secondary-beacon-light-school.jpg",
    heroAlt: "Primary students at Beacon Light Academy",
    parent: { label: "Academics", href: "/academics" },
    sections: [
      {
        type: "prose",
        title: "A broad, joyful foundation",
        body: [
          "The Primary years are about breadth and confidence. Students build strong literacy and numeracy while exploring science, social studies, computing, arts, languages and physical education.",
          "Our no-examination policy until Class V means children are taught in a continuous flow. Instructions and feedback are given as they learn, so progress is visible and stress stays low.",
          "Robotics, STEM projects, reading programmes and performances give every child a chance to shine in a way that suits them.",
        ],
      },
      {
        type: "cards",
        title: "What we nurture",
        columns: 3,
        items: [
          { title: "Readers & writers", text: "Daily reading, comprehension, creative writing and confident spoken English." },
          { title: "Mathematical thinking", text: "Number sense, reasoning and problem-solving through concrete experiences." },
          { title: "Young scientists", text: "Observation, experimentation and robotics that make abstract ideas tangible." },
          { title: "Global citizens", text: "Social studies, ethics and service that connect children to their community." },
          { title: "Creative voices", text: "Art, music, drama and public speaking woven into the school week." },
          { title: "Healthy bodies", text: "Sport, movement and wellbeing habits that support learning." },
        ],
      },
      {
        type: "cta",
        title: "Join our primary classrooms",
        text: "Class I to VI admissions are open at Gulshan-e-Iqbal, Gulzar-e-Hijri and Gulshan-e-Maymar.",
        href: "/admission-form-nursery-ix",
        label: "Start an application",
      },
    ],
    related: programmeRelated,
  },

  secondary: {
    slug: "secondary",
    title: "Thinking with purpose",
    eyebrow: "Secondary Programme",
    description:
      "Classes VI to X combining academic rigour, character education and the confidence to lead.",
    heroImage: "/media/images/secondary-Beacon-light.jpg",
    heroAlt: "Secondary students at Beacon Light Academy",
    parent: { label: "Academics", href: "/academics" },
    sections: [
      {
        type: "prose",
        title: "Rigour with room to grow",
        body: [
          "The Secondary years prepare students for the demands of O Levels or AKU-EB while keeping space for sport, service, creativity and leadership.",
          "Subject specialists guide students through increasingly complex ideas, while counsellors and mentors support emotional wellbeing and study habits.",
          "Students participate in debates, MUNs, science competitions, Destination Imagination and national and international subject challenges — learning to perform under pressure and collaborate with others.",
        ],
      },
      {
        type: "cards",
        title: "The secondary experience",
        columns: 3,
        items: [
          { title: "Board preparation", text: "Structured revision, past papers and exam technique for Pearson Edexcel or AKU-EB." },
          { title: "STEM & robotics", text: "Laboratory work, coding and robotics that connect theory to the real world." },
          { title: "Debate & MUN", text: "Public speaking, research and diplomacy through local and international forums." },
          { title: "Counselling", text: "Certified counsellors supporting wellbeing, confidence and learning challenges." },
          { title: "Leadership", text: "House roles, societies and service projects that build responsibility." },
          { title: "Future pathways", text: "Guidance on subject choices, colleges and university aspirations." },
        ],
      },
      {
        type: "cta",
        title: "Find your pathway",
        text: "Choose O Levels or AKU-EB — both lead to respected higher education routes.",
        href: "/admissions",
        label: "Speak to admissions",
      },
    ],
    related: [
      { label: "O Levels", href: "/o-levels", text: "Pearson Edexcel IGCSE." },
      { label: "A Levels", href: "/a-levels", text: "Advanced study." },
      { label: "Achievements", href: "/achievements", text: "See our results." },
    ],
  },

  "o-levels": {
    slug: "o-levels",
    title: "A globally respected beginning",
    eyebrow: "O Levels",
    description:
      "Pearson Edexcel IGCSE with expert teaching, strong labs and the exam confidence that opens doors worldwide.",
    heroImage: "/media/images/O-Level-beacon-light.jpg",
    heroAlt: "O Level students at Beacon Light Academy",
    parent: { label: "Academics", href: "/academics" },
    sections: [
      {
        type: "prose",
        title: "Depth, not just coverage",
        body: [
          "Our O Level programme follows the Pearson Edexcel International GCSE pathway. Students study a minimum of eight subjects, building analytical writing, problem-solving and independent study habits.",
          "Teachers use past papers, practical work and continuous assessment to make sure students understand concepts rather than memorise answers.",
          "Science and robotics laboratories, libraries and multimedia classrooms support learning beyond the textbook. Our results speak for themselves: regional, national and worldwide toppers year after year.",
        ],
      },
      {
        type: "cards",
        title: "What makes the difference",
        columns: 3,
        items: [
          { title: "Minimum 8 subjects", text: "A broad combination that keeps university pathways open." },
          { title: "Science & computing labs", text: "Hands-on practical work in well-equipped facilities." },
          { title: "Past-paper mastery", text: "Regular practice, feedback and exam technique sessions." },
          { title: "Experienced faculty", text: "Subject specialists who know the Edexcel standards deeply." },
          { title: "Counselling", text: "Support for subject choices, stress management and study planning." },
          { title: "University readiness", text: "Skills and habits that carry into A Levels and beyond." },
        ],
      },
      {
        type: "cta",
        title: "Apply for O Levels",
        text: "Join a school with a four-decade record of academic excellence.",
        href: "/admission-form-nursery-ix",
        label: "Start your application",
      },
    ],
    related: [
      { label: "A Levels", href: "/a-levels", text: "Continue to advanced study." },
      { label: "AKU SSC & HSSC-I", href: "/aku-ssc-hssc-i", text: "The AKU-EB pathway." },
      { label: "Book Lists", href: "/book-list-of-class-nursery-till-11-session-2025-26", text: "Session resources." },
    ],
  },

  "a-levels": {
    slug: "a-levels",
    title: "The launchpad for what comes next",
    eyebrow: "A Levels",
    description:
      "Pearson Edexcel International A Levels in small, focused cohorts — with university guidance and genuine mentorship.",
    heroImage: "/media/images/A-level-banner.jpg",
    heroAlt: "A Level students at Beacon Light Academy",
    parent: { label: "Academics", href: "/academics" },
    sections: [
      {
        type: "prose",
        title: "Specialise. Think deeply. Aim high.",
        body: [
          "A Levels at Beacon Light Academy College offer students the chance to focus on subjects they love while developing the independence expected at university.",
          "Small cohorts, experienced teachers and regular assessment create a supportive but ambitious culture. Students are guided through subject selection, university research, personal statements and interviews.",
          "Our A Level students have earned Top in the World, Top in Pakistan and Top in Province recognition in subjects including Information Technology, Physics, Accounting and Business.",
        ],
      },
      {
        type: "subjects",
        title: "Subjects offered",
        intro: "Pearson Edexcel International A Level subjects available at our Gulshan-e-Maymar college.",
        items: [
          "Urdu",
          "Physics",
          "Information Technology",
          "Chemistry",
          "Biology",
          "Mathematics",
          "Business Studies",
          "Accounting",
          "Economics",
          "Psychology",
        ],
      },
      {
        type: "cta",
        title: "Book your interview slot",
        text: "Registrations are open for Session 2026–27 at Beacon Light Academy College.",
        href: "/a-level-registration-form",
        label: "Register for A Levels",
      },
    ],
    related: [
      { label: "The College", href: "/college", text: "Life at BLAC." },
      { label: "A Level Achievers", href: "/list-of-high-achievers-a-levels", text: "See our results." },
      { label: "AKU SSC & HSSC-I", href: "/aku-ssc-hssc-i", text: "The AKU pathway." },
    ],
  },

  "aku-ssc-hssc-i": {
    slug: "aku-ssc-hssc-i",
    title: "Another respected road to success",
    eyebrow: "AKU SSC & HSSC-I",
    description:
      "Matriculation and Intermediate with the Aga Khan University Examination Board, offered alongside our Pearson Edexcel pathway.",
    heroImage: "/media/images/AKU-Board.jpg",
    heroAlt: "AKU-EB programme at Beacon Light Academy",
    parent: { label: "Academics", href: "/academics" },
    sections: [
      {
        type: "prose",
        title: "One community, multiple pathways",
        body: [
          "In agreement with the Aga Khan University Examination Board, Beacon Light Academy offers Matriculation (SSC) and Intermediate (HSSC-I). This pathway reflects our belief that quality education should be accessible to students from every background.",
          "AKU-EB assessments emphasise conceptual understanding, application and inquiry. Our teachers align classroom practice with that philosophy, using practical work, discussion and continuous feedback.",
          "At HSSC-I, students choose from Pre-Medical, Pre-Engineering or Science General groups, keeping medical, engineering and computing pathways open.",
        ],
      },
      {
        type: "cards",
        title: "HSSC-I subject groups",
        columns: 3,
        items: [
          { title: "Pre-Medical", tag: "Biology · Chemistry · Physics", text: "For students aiming toward medicine, dentistry and allied health sciences." },
          { title: "Pre-Engineering", tag: "Chemistry · Mathematics · Physics", text: "For future engineers, architects and physical scientists." },
          { title: "Science General", tag: "Computer Science · Mathematics · Physics", text: "A flexible science route into computing, technology and beyond." },
        ],
      },
      {
        type: "cta",
        title: "Explore the AKU pathway",
        text: "Talk to our admissions team about whether AKU-EB or Pearson Edexcel is the right fit.",
        href: "/contact-form",
        label: "Ask a question",
      },
    ],
    related: [
      { label: "O Levels", href: "/o-levels", text: "Pearson Edexcel pathway." },
      { label: "A Levels", href: "/a-levels", text: "Advanced study." },
      { label: "Admissions", href: "/admissions", text: "Apply now." },
    ],
  },

  college: {
    slug: "college",
    title: "Beacon Light Academy College",
    eyebrow: "The College",
    description:
      "A-Levels and Intermediate at Gulshan-e-Maymar — where senior students are treated as young adults ready to shape their future.",
    heroImage: "/media/images/A-level-banner.jpg",
    heroAlt: "Beacon Light Academy College",
    parent: { label: "Academics", href: "/academics" },
    sections: [
      {
        type: "prose",
        title: "Registrations open for Session 2026–27",
        body: [
          "Beacon Light Academy College is the senior chapter of our school. Formerly Beacon Light Academy A-Level, the College now brings A Levels and Intermediate together under one roof at Gulshan-e-Maymar.",
          "Students benefit from specialist faculty, smaller cohorts and a culture of independence. Our college counsellors support university applications, interviews and scholarship opportunities.",
          "To book your interview slot, email us at college@beaconlightacademy.edu.pk or complete the registration form.",
        ],
      },
      {
        type: "subjects",
        title: "Subjects offered — Pearson Edexcel IAL",
        items: [
          "Urdu",
          "Physics",
          "Information Technology",
          "Chemistry",
          "Biology",
          "Mathematics",
          "Business Studies",
          "Accounting",
          "Economics",
          "Psychology",
        ],
      },
      {
        type: "cards",
        title: "The college experience",
        columns: 3,
        items: [
          { title: "Specialist teaching", text: "Faculty who know the demands of IAL and university-level study." },
          { title: "University guidance", text: "Support with shortlists, personal statements, interviews and scholarships." },
          { title: "Leadership", text: "Opportunities to lead societies, mentor younger students and represent the College." },
        ],
      },
      {
        type: "cta",
        title: "Register for A Levels",
        text: "Book your interview and take the next step with Beacon Light Academy College.",
        href: "/a-level-registration-form",
        label: "Register now",
      },
    ],
    related: [
      { label: "A Level Programme", href: "/beacon-light-academy-a-level", text: "Subjects and registration." },
      { label: "A Level Achievers", href: "/list-of-high-achievers-a-levels", text: "Top in the world." },
      { label: "College Notice", href: "/blac-new-academic-session-notice", text: "Session start dates." },
    ],
  },

  "beacon-light-academy-a-level": {
    slug: "beacon-light-academy-a-level",
    title: "A Levels at Gulshan-e-Maymar",
    eyebrow: "Beacon Light Academy — A Level",
    description:
      "Registrations open for Session 2026–27. Offerings include Urdu, Physics, IT, Chemistry, Biology, Mathematics, Business, Accounting, Economics and Psychology.",
    heroImage: "/media/images/A-level-banner.jpg",
    heroAlt: "A Level banner",
    parent: { label: "Academics", href: "/academics" },
    sections: [
      {
        type: "prose",
        title: "Your next chapter",
        body: [
          "Our A Level programme at Gulshan-e-Maymar is built for students ready to specialise. Choose from ten Pearson Edexcel IAL subjects and study in a focused, supportive environment.",
          "Registrations for Session 2026–27 are open. Complete the registration form, and our team will contact you to arrange an interview.",
        ],
      },
      {
        type: "subjects",
        title: "Subjects offered",
        items: [
          "Urdu",
          "Physics",
          "Information Technology",
          "Chemistry",
          "Biology",
          "Mathematics",
          "Business Studies",
          "Accounting",
          "Economics",
          "Psychology",
        ],
      },
      {
        type: "cta",
        title: "Book your interview",
        text: "Email college@beaconlightacademy.edu.pk or register online.",
        href: "/a-level-registration-form",
        label: "Register online",
      },
    ],
    related: [
      { label: "The College", href: "/college", text: "Explore BLAC." },
      { label: "Admissions", href: "/admissions", text: "All pathways." },
      { label: "Book Lists", href: "/book-list-of-class-nursery-till-11-session-2025-26", text: "Resources." },
    ],
  },

  "gulshan-e-maymar-primary-section": {
    slug: "gulshan-e-maymar-primary-section",
    title: "Gulshan-e-Maymar Primary Section",
    eyebrow: "Campus Admission",
    description:
      "A dedicated primary campus for Nursery to Class V in Gulshan-e-Maymar, where young learners grow in a calm, caring environment.",
    heroImage: "/media/images/beacon-light-school-maymar-group-image.jpg",
    heroAlt: "Gulshan-e-Maymar primary students",
    parent: { label: "Admissions", href: "/admissions" },
    sections: [
      {
        type: "prose",
        title: "Register for the next admission test",
        body: [
          "You may register your child for the upcoming admission test using the online form. You can also collect a registration form from any campus of Beacon Light Academy.",
          "Please ensure the particulars you provide are accurate. Our admissions team will contact you to confirm the test and interview schedule.",
        ],
      },
      {
        type: "quote",
        text: "Please accept my ward, whose particulars are given below, for admission to your school. I undertake to comply with the instructions given in the prospectus.",
        role: "Parent / guardian declaration",
      },
      {
        type: "cta",
        title: "Open the admission form",
        text: "Complete the Gulshan-e-Maymar campus form online.",
        href: "/primary-section-gulshan-e-maymar-admission-form",
        label: "Fill the form",
      },
    ],
    related: [
      { label: "Admissions", href: "/admissions", text: "All campuses." },
      { label: "Test Syllabus", href: "/test-syllabus", text: "Prepare for the test." },
      { label: "Campus Contacts", href: "/contact", text: "Call the campus." },
    ],
  },

  "btec-islamabad": {
    slug: "btec-islamabad",
    title: "Turn your passion into a career",
    eyebrow: "BTEC Islamabad",
    description:
      "Arts, game production, robotronics and media — real-world skills, industry mentors and a launchpad beyond the classroom.",
    heroImage: "/media/images/beacon-light-banner-4.jpg",
    heroAlt: "Robotics, IT and science at Beacon Light Academy",
    parent: { label: "Academics", href: "/academics" },
    sections: [
      {
        type: "prose",
        title: "We don't just give you a classroom. We give you a launchpad.",
        body: [
          "Love games? Love arts? Curious about robots? Dreaming of media? Our before and after O Level BTEC programmes help students build real skills while they study.",
          "Learn real-world skills alongside your studies, start earning while learning with 100% house job opportunities, and work with mentors from the creative and tech industries.",
        ],
      },
      {
        type: "cards",
        title: "Programmes",
        columns: 2,
        items: [
          { title: "Arts", tag: "Create", text: "Visual storytelling, design thinking and a portfolio that speaks for you." },
          { title: "Game Production", tag: "Build", text: "From concept and mechanics to production — learn how games are really made." },
          { title: "Robotronics", tag: "Invent", text: "Robotics, electronics and intelligent systems through hands-on making." },
          { title: "Media", tag: "Broadcast", text: "Content, camera, editing and social media for the next generation of storytellers." },
        ],
      },
      {
        type: "list",
        title: "Why choose Beacon Light Academy?",
        items: [
          "Learn real-world skills while you study.",
          "Start earning during learning with 100% house job opportunities.",
          "Mentors from the creative and technology industry.",
        ],
      },
      {
        type: "cta",
        title: "Don't wait for the future — build it",
        text: "Call 0312-8240709 or email islamabad@beaconlightacademy.edu.pk for queries, or register online.",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSfnFLZj1VVMT2tLX1UxHqg_LpTdSB85tJWL6HhFWpRR2O2DuA/viewform",
        label: "Register now",
      },
    ],
    related: [
      { label: "O Levels", href: "/o-levels", text: "Your academic base." },
      { label: "The College", href: "/college", text: "A Levels and beyond." },
      { label: "Contact", href: "/contact", text: "Talk to the team." },
    ],
  },

  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    eyebrow: "Your information",
    description:
      "How Beacon Light Academy handles information shared through this website.",
    heroImage: "/media/images/beacon-light-banner-4.jpg",
    heroAlt: "Beacon Light Academy",
    sections: [
      {
        type: "prose",
        title: "Who we are",
        body: [
          "Our website address is https://beaconlightacademy.edu.pk. This policy explains what information we collect through the site and how we use it.",
        ],
      },
      {
        type: "prose",
        title: "Comments & media",
        body: [
          "When visitors leave comments, we collect the data shown in the comments form, along with the visitor's IP address and browser user agent string to help spam detection. An anonymised string created from your email address may be provided to the Gravatar service. After approval, your profile picture may be visible publicly alongside your comment.",
          "If you upload images to the website, avoid uploading images with embedded location data (EXIF GPS). Visitors can download and extract location data from images on the website.",
        ],
      },
      {
        type: "prose",
        title: "Cookies",
        body: [
          "If you leave a comment, you may opt in to saving your name, email address and website in cookies for convenience. These last for one year. If you visit our login page, a temporary cookie is set to determine whether your browser accepts cookies; it contains no personal data and is discarded when you close your browser.",
          "When you log in, cookies save your login information and screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select 'Remember Me', your login persists for two weeks. Logging out removes the login cookies. If you edit or publish an article, an additional cookie is saved with no personal data and expires after one day.",
        ],
      },
      {
        type: "prose",
        title: "Embedded content & data sharing",
        body: [
          "Articles may include embedded content such as videos, images or articles. Embedded content from other websites behaves as if the visitor had visited that other website. Those sites may collect data, use cookies, embed third-party tracking and monitor your interaction with the embedded content.",
          "If you request a password reset, your IP address will be included in the reset email.",
        ],
      },
      {
        type: "prose",
        title: "How long we retain your data",
        body: [
          "Comments and their metadata are retained indefinitely so that follow-up comments can be recognised and approved automatically. For users who register on the site, we store the personal information they provide in their user profile. All users can see, edit or delete their personal information at any time, except they cannot change their username. Website administrators can also see and edit that information.",
        ],
      },
      {
        type: "prose",
        title: "Your rights",
        body: [
          "If you have an account or have left comments, you can request an exported file of the personal data we hold about you, including data you provided. You can also request that we erase personal data. This does not include data we are obliged to keep for administrative, legal or security purposes. Visitor comments may be checked through an automated spam detection service.",
        ],
      },
      {
        type: "cta",
        title: "Questions about privacy?",
        text: "Contact our team and we will help you understand how your information is handled.",
        href: "/contact-form",
        label: "Contact us",
      },
    ],
  },

  "school-telephone-no-s": {
    slug: "school-telephone-no-s",
    title: "School Telephone Numbers",
    eyebrow: "Contact",
    description:
      "Reach the right department and campus directly.",
    heroImage: "/media/images/beacon-contact-form.jpg",
    heroAlt: "Contact Beacon Light Academy",
    parent: { label: "Contact", href: "/contact" },
    sections: [
      {
        type: "cards",
        title: "Campus numbers",
        columns: 3,
        items: [
          { title: "Gulshan-e-Iqbal", tag: "Nursery – VI", text: "021-34833851 · 021-34819179 · 021-34989179" },
          { title: "Gulzar-e-Hijri", tag: "Classes I – X", text: "021-34690114 · 021-34693463" },
          { title: "Gulshan-e-Maymar", tag: "Primary, Senior & College", text: "021-36832016 · 021-36832017 · 021-34969179" },
        ],
      },
      {
        type: "files",
        title: "Accounts department",
        intro: "For fee and account queries.",
        items: [
          { label: "accounts@beaconlightacademy.edu.pk", href: "mailto:accounts@beaconlightacademy.edu.pk", meta: "Email" },
          { label: "0334-3219836", href: "tel:+923343219836", meta: "WhatsApp" },
        ],
      },
      {
        type: "cta",
        title: "See full campus contacts",
        text: "Find heads of section, departments and directions.",
        href: "/contact",
        label: "Contact directory",
      },
    ],
  },
};

const eventPages: Record<string, SitePage> = {
  "the-destination-imagination-journey": {
    slug: "the-destination-imagination-journey",
    title: "The Destination Imagination Journey",
    eyebrow: "Student Story · Competition",
    description:
      "Two teams, one painting and eight minutes on stage — behind the performance lay more than two months of collaboration.",
    heroImage: "/media/images/group-multiethnic-kids-wearing-vr-headsets-teacher-watching-them.jpg",
    heroAlt: "Students working together with VR headsets",
    meta: "Competition · Maymar & KDA campuses",
    parent: { label: "Events & News", href: "/events" },
    sections: [
      {
        type: "prose",
        body: [
          "As you all know, last Friday two teams from Gulshan-e-Maymar campus went to the KDA campus as participants in the competition, Destination Imagination. We were instructed to choose a topic, for example Fine Arts, and were given a task to present in the form of an eight-minute play. The two teams were called Pinball Heroes and Fine Arts, In Motion. Behind that eight-minute play was more than two months of hard work, with valuable contribution from all team members.",
        ],
      },
      {
        type: "prose",
        title: "The task",
        body: [
          "The subject my group chose was Fine Arts. The task was called In Motion, in which we had to take any piece or example of Fine Arts — literature, architecture, fashion design or painting — and present its history in the form of an engaging play. Our team chose a painting named The Anguished Man.",
          "The story behind the painting is that it was painted by an unknown artist who mixed his blood with the paint. A few days later, he committed suicide. The painting is now rumoured to be haunted, because the current owner has reported strange things happening in his house ever since he came into possession of it.",
          "According to the instructions, we had to include a piece of kinetic art and a piece of reimagined art. The kinetic art had to be a prop using science or mechanical engineering that was actively used in the play. The reimagined art had to use a type of art such as dance, music or spoken dialogue. Everything had to be made by hand, with no help from outside the team.",
        ],
      },
      {
        type: "prose",
        title: "The script",
        body: [
          "Our script was loosely based on the painting and contained five characters: Detective Eleanor (Rameen Amin), Reverend Jameson (Irza Siddiqui), painter Victor Hartman (Iruj Fatima), young Officer Jenkins (Brishna Gabol), brush maker Naoko Okada (Alia Ahmad) and Victor's subconscious, the Devil (Asma Ahmad). Our supervising teacher was Ms. Sobia.",
          "The plot follows Victor Hartman, a famous yet mentally ill painter who kills people and uses their blood to paint. Victor is schizophrenic, and his subconscious goads him into killing for his paintings. Detective Eleanor Hymes investigates the murder of Reverend Jameson at St. Mark's church. With Officer Jenkins's help, she discovers Victor is behind the murder. She confronts him at his studio, but the confrontation turns gruesome when Victor's Devil forces him to kill Eleanor for her blood, which he uses to finish his painting.",
        ],
      },
      {
        type: "prose",
        title: "The set",
        body: [
          "The set was our kinetic art: a revolving cube with four scenes from the play painted on it. The cube was made from two pieces of 8 x 4 plywood, cut in half to form 4 x 4 squares. A wooden base mounted on four wheels enabled it to turn. With extensive help from Sir Kanwar, we joined the plywood with hinges and metal wire and fixed it to the base with metal pegs. Then we painted the sides with scenes from the play.",
        ],
      },
      {
        type: "prose",
        title: "The final presentation",
        body: [
          "On Friday, 5 January, our team went to KDA campus to present our project. Our slot was second last, so we had plenty of time to put on costumes and do some last-minute rehearsing. The presentation went really well and all of us gave our best.",
        ],
      },
      {
        type: "cta",
        title: "More stories from campus",
        text: "Discover the festivals, competitions and student voices that shape life at Beacon Light.",
        href: "/events",
        label: "Back to events",
      },
    ],
    related: [
      { label: "Science Spark Sphere", href: "/spark-sphere-2025", text: "A festival of invention." },
      { label: "Web-Based Debate", href: "/web-based-debate-program", text: "A global classroom." },
      { label: "College Review", href: "/college-review-series-highbrow-college", text: "Student voice." },
    ],
  },

  "college-review-series-highbrow-college": {
    slug: "college-review-series-highbrow-college",
    title: "College Review Series: Highbrow College",
    eyebrow: "College Review · Student Voice",
    description:
      "A 100% academic scholarship, purpose-built facilities and mentors who understand students — an alumnus reviews Highbrow College.",
    heroImage: "/media/images/College-Review-Highbrow-College.webp",
    heroAlt: "Highbrow College review",
    meta: "College Review · Student Voice",
    parent: { label: "Events & News", href: "/events" },
    sections: [
      {
        type: "quote",
        text: "Studying at Highbrow College is one of my best decisions so far. Alhumdullilah! I got a 100% academic scholarship — on the basis of 5A*s and 1A — when I got enrolled there.",
        role: "BLA alumnus",
      },
      {
        type: "prose",
        title: "Affordability",
        body: ["The tuition fees of the college are affordable and reasonable."],
      },
      {
        type: "prose",
        title: "Faculty",
        body: [
          "Faculty at Highbrow includes advanced and professional teachers. Teachers like Sir Yawar, Sir Rizwan and Sir Zeeshan, considered among the leading A Level teachers throughout Karachi, are the building blocks of Highbrow College.",
        ],
      },
      {
        type: "prose",
        title: "Location",
        body: ["Highbrow College is located in the vicinity of Block F, North Nazimabad, near Hyderi Super Market."],
      },
      {
        type: "prose",
        title: "Facilities",
        body: [
          "The campus is purpose-built with air-conditioned classrooms, science labs with new and high-class instruments, a library full of books and a comfortable environment where students can sit and study. Highbrow's Dean, Sir Sohaib Abbasi, is a leader and mentor who understands students' and parents' perspectives and problems.",
          "On the whole, Highbrow College is a strong institute to learn, study and grow. The balance maintained between social, sporting and academic life showcases its strategy well.",
        ],
      },
      {
        type: "quote",
        text: "I highly recommend my juniors to come and grow in the advanced boundaries of Highbrow College, likewise its motto: Seek. Strive. Succeed.",
        role: "BLA alumnus",
      },
    ],
    related: [
      { label: "A Levels", href: "/a-levels", text: "Start the journey." },
      { label: "The College", href: "/college", text: "Our senior campus." },
      { label: "Events & News", href: "/events", text: "More stories." },
    ],
  },

  "into-the-next-gear-stepping-into-grade-11": {
    slug: "into-the-next-gear-stepping-into-grade-11",
    title: "Into the Next Gear: Stepping into Grade 11",
    eyebrow: "Student Reflection",
    description:
      "A student looks ahead to Grade 11 — the challenges, the opportunities and the person they are becoming.",
    heroImage: "/media/images/international-day-education-futuristic-style.jpg",
    heroAlt: "Student looking toward the future",
    meta: "Student Reflection · Grade 11",
    parent: { label: "Events & News", href: "/events" },
    sections: [
      {
        type: "prose",
        body: [
          "As I stand at the threshold of Grade 11, the excitement and anticipation of a new academic year beckons. I feel ready to shift into higher gear, ready to accelerate my journey, explore new horizons and fine-tune my skills. This year promises new challenges, opportunities and growth.",
          "As I stepped into this new year, I felt a rush of emotions and realised that this year is going to be amazing yet challenging. It is a launchpad where I am going to accelerate my learning, navigate new challenges, develop resilience and adaptability. I will fine-tune my skills, hone my talents and interests, and embrace leadership roles and opportunities in extracurricular activities.",
          "Along the way, I expect to encounter challenges with opportunities. I might face an increased workload and balancing acts leading to stress and anxiety. But I will also discover new interests, explore career paths and develop self-reliance. I will learn from my teachers and peers and grow from failures and setbacks.",
          "Grade 11 will be a pivotal moment, marking the start of a transformative year. I will step into the unknown, discovering new strengths, forging unbreakable bonds and uncovering a sense of purpose. The twists and turns of this crucial grade will teach me to be resilient, to embrace challenges and to find my own path.",
          "When moving forward, I will carry new lessons and memories, ready to take on the incredible journey ahead. This new grade is my stepping stone into self-discovery and growth. As I embark on this transformative journey, I am ready to ignite my potential and shape my future.",
        ],
      },
      {
        type: "cta",
        title: "Begin your Grade 11 journey",
        text: "A Level and Intermediate registrations are open for Session 2026–27.",
        href: "/a-level-registration-form",
        label: "Register now",
      },
    ],
    related: [
      { label: "A Levels", href: "/a-levels", text: "Explore the programme." },
      { label: "The College", href: "/college", text: "Our senior campus." },
      { label: "Events & News", href: "/events", text: "More stories." },
    ],
  },

  "spark-sphere-2025": {
    slug: "spark-sphere-2025",
    title: "Science Spark Sphere Festival",
    eyebrow: "Festival · 13 November 2025",
    description:
      "A celebration of science, imagination and invention as our young researchers take centre stage.",
    heroImage: "/media/images/Spark-Sphere-event-Beacon.jpg",
    heroAlt: "Science Spark Sphere Festival",
    meta: "Festival · 13 November 2025",
    parent: { label: "Events & News", href: "/events" },
    sections: [
      {
        type: "prose",
        body: [
          "The Science Spark Sphere Festival brought together students from across our campuses for a day of experiments, inventions and bold questions. Classrooms turned into laboratories, corridors into exhibition halls, and every corner into an invitation to wonder.",
          "From robotics demonstrations to student-led science talks, the festival celebrated the curiosity that sits at the heart of a Beacon Light education. Congratulations to every young scientist, mentor and family who made the day sparkle.",
        ],
      },
      {
        type: "cta",
        title: "See more campus moments",
        text: "Explore festivals, competitions and student stories from across the year.",
        href: "/events",
        label: "All events",
      },
    ],
    related: [
      { label: "Carnival Festival", href: "/carnival-festival", text: "Colour and community." },
      { label: "STEM & Robotics", href: "/secondary", text: "Learning in action." },
      { label: "Achievements", href: "/achievements", text: "Where curiosity leads." },
    ],
  },

  "carnival-festival": {
    slug: "carnival-festival",
    title: "Carnival Festival",
    eyebrow: "Festival · 14 November 2025",
    description:
      "Colour, music, food and laughter — the whole community came together for a day of pure joy.",
    heroImage: "/media/images/Grand-Carnival.jpg",
    heroAlt: "Beacon Light Academy carnival",
    meta: "Festival · 14 November 2025",
    parent: { label: "Events & News", href: "/events" },
    sections: [
      {
        type: "prose",
        body: [
          "Our Carnival Festival turned the campus into a celebration of community. Stalls, games, performances, food and laughter brought students, teachers, parents and alumni together in a way that only a school family can.",
          "Days like this remind us that education is not only what happens in a classroom. It is also the friendships, memories and sense of belonging that students carry long after they leave.",
        ],
      },
      {
        type: "cta",
        title: "Join the community",
        text: "Experience the spirit of Beacon Light for yourself — book a campus visit.",
        href: "/contact",
        label: "Arrange a visit",
      },
    ],
    related: [
      { label: "Science Spark Sphere", href: "/spark-sphere-2025", text: "A festival of science." },
      { label: "Destination Imagination", href: "/the-destination-imagination-journey", text: "Student creativity." },
      { label: "Events & News", href: "/events", text: "More stories." },
    ],
  },

  "web-based-debate-program": {
    slug: "web-based-debate-program",
    title: "A global classroom: web-based debate",
    eyebrow: "Programme · Student Voice",
    description:
      "Skype sessions from California introduced our students to Lincoln-Douglas and Public Forum debate — and two earned scholarships.",
    heroImage: "/media/images/Student-beacon.jpg",
    heroAlt: "Student participating in debate programme",
    meta: "Programme · Global Classroom",
    parent: { label: "Events & News", href: "/events" },
    sections: [
      {
        type: "prose",
        body: [
          "Over the past several months, students of BLA have had the privilege to attend Skype sessions led by Arham Habib from California, USA, where he introduced students to Lincoln-Douglas and Public Forum debate events. The programme was established by Arham Habib in San Ramon Valley Unified School District in California, where it was introduced to four elementary schools.",
          "After local success, it expanded beyond the USA's borders. Recognising that opportunities to learn and compete in debate were limited in other nations, the programme came to Karachi with the aims of teaching the basics of each debate format and paving a path for international students to compete.",
          "Arham Habib is currently a Senior at Monte Vista High School in Danville, California. He began speech and debate in 8th grade, competing in Congressional Debate, Lincoln-Douglas Debate and Extemporaneous Speaking. He was 9th at the 2019 NSDA National Tournament, 2nd at the 2019 CHSSA State Tournament and 3rd at the 2018 Stanford Invitational. He aspires to allow those from Pakistan to demonstrate their debate prowess internationally and give them a new outlet to express their voices.",
          "Following the debate programme, two selected students received a scholarship to further their studies at the Institute for Speech and Debate's 2019 summer programme in North Carolina.",
        ],
      },
      {
        type: "cta",
        title: "Find your voice at BLA",
        text: "Debate, MUN, public speaking and more — discover our co-curricular life.",
        href: "/secondary",
        label: "Explore secondary school",
      },
    ],
    related: [
      { label: "Destination Imagination", href: "/the-destination-imagination-journey", text: "Creativity in action." },
      { label: "Achievements", href: "/achievements", text: "Where our students shine." },
      { label: "Events & News", href: "/events", text: "More stories." },
    ],
  },
};

Object.assign(pages, eventPages);

export function getPage(slug: string): SitePage | undefined {
  return pages[slug];
}
