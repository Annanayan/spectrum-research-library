export type Challenge = {
  slug: string;
  title: string;
  heroImage: string; // 1440x252 header banner
  sections: { heading: string; body: string | string[] }[];
};

export const challenges: Challenge[] = [
  { slug: "coming-out-anxiety", title: "Coming Out Anxiety", heroImage: "/assets/Coming Out Anxiety Header.png", sections: [{ heading: "1 Introduction", body: "Coming out refers to the process by which LGBTQ+ individuals disclose their sexual orientation or gender identity to others. For many, this journey is both an act of self-affirmation and an experience filled with intense anxiety. Social biases, family pressures, and the fear of an unknown reaction make the process a challenging and sometimes risky endeavor." }]} ,
  { slug: "internalized-stigma", title: "Internalized Stigma", heroImage: "/assets/Internalized Stigma Header.png", sections: [{ heading: "Overview", body: "Content coming soon." }]} ,
  { slug: "coping-with-loneliness-and-isolation", title: "Coping with Loneliness and Isolation", heroImage: "/assets/Coping with Loneliness and Isolation Header.png", sections: [{ heading: "Overview", body: "Content coming soon." }]} ,
  { slug: "loss-of-peer-support", title: "Loss of Peer Support", heroImage: "/assets/Loss of Peer Support Header.png", sections: [{ heading: "Overview", body: "Content coming soon." }]} ,
  { slug: "family-cultural-and-religious-conflicts", title: "Family, Cultural, and Religious Conflicts", heroImage: "/assets/Family, Cultural, and Religious Conflicts Header.png", sections: [{ heading: "Overview", body: "Content coming soon." }]} ,
  { slug: "chronic-minority-stress", title: "Chronic Minority Stress", heroImage: "/assets/Chronic Minority Stress Header.png", sections: [{ heading: "Overview", body: "Content coming soon." }]} ,
];

export const challengeNav = [
  { slug: "coming-out-anxiety", label: "Coming Out Anxiety" },
  { slug: "internalized-stigma", label: "Internalized Stigma" },
  { slug: "coping-with-loneliness-and-isolation", label: "Coping with Loneliness and Isolation" },
  { slug: "loss-of-peer-support", label: "Loss of Peer Support" },
  { slug: "family-cultural-and-religious-conflicts", label: "Family, Cultural, and Religious Conflicts" },
  { slug: "chronic-minority-stress", label: "Chronic Minority Stress" },
];
