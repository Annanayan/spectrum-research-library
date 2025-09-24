export type SupportSection = {
  id: string;
  title: string;
  image: string;
  challenges: string;
  solutions: {
    title: string;
    items: string[];
  };
  supportResources: {
    title: string;
    items: {
      text: string;
      link?: string;
    }[];
  };
};

export const supportSections: SupportSection[] = [
  {
    id: "mental-health",
    title: "Mental Health Issues",
    image: "/assets/Mental Health Issues.png",
    challenges: "Challenges: Depression, Anxiety Disorders, Suicidal Ideation & Self-Harm, Substance Abuse, Low Self-Esteem and Internalized Homophobia",
    solutions: {
      title: "Solutions:",
      items: [
        "LGBTQ-friendly mental health counseling and therapy",
        "Community support and peer networks",
        "Online mental health resources"
      ]
    },
    supportResources: {
      title: "Support Resources:",
      items: [
        {
          text: "Trevor Project: Crisis intervention and suicide prevention for LGBTQ+ youth",
          link: "https://www.thetrevorproject.org"
        },
        {
          text: "National Alliance on Mental Illness, LGBTQ+ Resources",
          link: "https://www.nami.org"
        },
        {
          text: "Trans Lifeline: Crisis support for transgender individuals",
          link: "877-565-8860 (US)"
        },
        {
          text: "Mind LGBTQ+ Mental Health Guide: UK-based mental health support",
          link: "https://www.mind.org.uk"
        }
      ]
    }
  },
  {
    id: "social-discrimination",
    title: "Social Discrimination and Stigma",
    image: "/assets/Social Discrimination and Stigma.png",
    challenges: "Challenges: Social Exclusion and Bias, Racism within LGBTQ+ Communities, Workplace Discrimination, Religious-Based Discrimination",
    solutions: {
      title: "Solutions:",
      items: [
        "LGBTQ+ anti-discrimination legal support",
        "Diversity and inclusion training",
        "LGBTQ+ workplace support and career resources"
      ]
    },
    supportResources: {
      title: "Support Resources:",
      items: [
        {
          text: "Lambda Legal: LGBTQ+ legal advocacy and protection",
          link: "https://www.lambdalegal.org"
        },
        {
          text: "Human Rights Campaign: LGBTQ+ advocacy and policy support",
          link: "https://www.hrc.org"
        },
        {
          text: "Out & Equal: LGBTQ+ workplace equality resources",
          link: "https://outandequal.org"
        }
      ]
    }
  },
  {
    id: "healthcare-medical",
    title: "Healthcare and Medical Support",
    image: "/assets/Healthcare and Medical Support.png",
    challenges: "Challenges: Lack of LGBTQ+ inclusive healthcare, HIV/AIDS and sexual health concerns, Gender-affirming healthcare access, Mental health support gaps",
    solutions: {
      title: "Solutions:",
      items: [
        "LGBTQ-friendly healthcare provider directories",
        "LGBTQ+ health education and prevention resources",
        "Gender-affirming medical care support"
      ]
    },
    supportResources: {
      title: "Support Resources:",
      items: [
        {
          text: "GLMA: Health Professionals Advancing LGBTQ+ Equality",
          link: "http://www.glma.org"
        },
        {
          text: "Planned Parenthood: LGBTQ+ Healthcare",
          link: "https://www.plannedparenthood.org"
        },
        {
          text: "World Professional Association for Transgender Health (WPATH)",
          link: "https://www.wpath.org"
        }
      ]
    }
  },
  {
    id: "lgbtq-youth-education",
    title: "LGBTQ+ Youth and Education",
    image: "/assets/LGBTQ+ Youth and Education.png",
    challenges: "Challenges: School Bullying, Lack of LGBTQ+ Inclusive Curriculum, Homelessness Among LGBTQ+ Youth",
    solutions: {
      title: "Solutions:",
      items: [
        "Create LGBTQ-friendly school environments",
        "Provide safe shelters for LGBTQ+ youth",
        "LGBTQ+ education and advocacy resources"
      ]
    },
    supportResources: {
      title: "Support Resources:",
      items: [
        {
          text: "GLSEN: LGBTQ+ education and anti-bullying initiatives",
          link: "https://www.glsen.org"
        },
        {
          text: "Ali Forney Center: LGBTQ+ homeless youth shelter and support",
          link: "https://www.aliforneycenter.org"
        },
        {
          text: "PFLAG: Family and school support for LGBTQ+ individuals",
          link: "https://pflag.org"
        }
      ]
    }
  },
  {
    id: "legal-policy",
    title: "Legal and Policy Support",
    image: "/assets/Legal and Policy Support.png",
    challenges: "Challenges: Marriage, Adoption, and Medical Authorization Rights. Anti-LGBTQ+ Laws and Policies, LGBTQ+ Asylum and Refugee Issues",
    solutions: {
      title: "Solutions:",
      items: [
        "LGBTQ+ anti-discrimination legal assistance",
        "LGBTQ+ international legal aid"
      ]
    },
    supportResources: {
      title: "Support Resources:",
      items: [
        {
          text: "Lambda Legal: Legal advocacy for LGBTQ+ rights",
          link: "https://www.lambdalegal.org"
        },
        {
          text: "Immigration Equality: LGBTQ+ asylum and refugee support",
          link: "https://www.immigrationequality.org"
        }
      ]
    }
  },
  {
    id: "community-social-networks",
    title: "Community Support and Social Networks Challenges",
    image: "/assets/Community Support and Social Networks.png",
    challenges: "Challenges: Social Isolation, Lack of LGBTQ+ Inclusive Social Spaces, Cultural Identity and LGBTQ+ Acceptance",
    solutions: {
      title: "Solutions:",
      items: [
        "Encourage LGBTQ+ community participation",
        "Provide LGBTQ+ social and cultural support networks"
      ]
    },
    supportResources: {
      title: "Support Resources:",
      items: [
        {
          text: "The Center: The LGBT Community Center - NYC",
          link: "https://gaycenter.org"
        },
        {
          text: "LGBTQ+ Meetup Groups: Online and offline LGBTQ+ social networking",
          link: "https://www.meetup.com/topics/lgbtq"
        },
        {
          text: "It Gets Better Project: LGBTQ+ storytelling and support initiative",
          link: "https://itgetsbetter.org"
        }
      ]
    }
  }
];