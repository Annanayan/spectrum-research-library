import { useState } from 'react'

export type ContentBlock = {
  type: 'paragraph' | 'bullet' | 'quote';
  content: string;
  level?: number;
  cite?: string;
};


export type Challenge = {
  slug: string;
  title: string;
  heroImage: string; // 1440x252 header banner
  sections: { heading: string; body: (string |  ContentBlock)[] }[];
};

export const challenges: Challenge[] = [
  { 
    slug: "coming-out-anxiety", 
    title: "Coming Out Anxiety", 
    heroImage: "/assets/Coming Out Anxiety Header.png", 
    sections: [
      {
        heading: "1 Introduction", 
        body: [
          { type: 'paragraph', content: 'Coming out refers to the process by which LGBTQ+ individuals disclose their sexual orientation or gender identity to others. For many, this journey is both an act of self-affirmation and an experience filled with intense anxiety. Social biases, family pressures, and the fear of an unknown reaction make the process a challenging and sometimes risky endeavor.'}
        ]
      },   
      {
        heading: "2 Understanding",
        body: [
          { type: 'paragraph', content: 'We know that making the decision to share your authentic self with family or friends can feel like standing at the edge of a cliff, with fear and anxiety swirling all around you. The thought of being rejected, misunderstood, or pushed away is a heavy weight to carry. It’s completely natural to feel overwhelmed when you’re faced with such uncertainty. But please remember, your feelings are real, and they matter.'},
          { type: 'paragraph', content: 'Research shows that choosing to share your authentic self can have positive effects on mental health and well-being. According to research (Karen & Jordan,41-63,1998), “the more widely a woman disclosed her sexual orientation, the less anxiety, more positive affectivity, and greater self-esteem she reported”. This aligns with the idea that self-disclosure not only fosters personal growth but also “makes it possible for the individual to locate support systems, which also may lead to lower anxiety.” (Karen & Jordan,41-63,1998)'},
          { type: 'paragraph', content: 'However, it’s important to recognize that coming out is a personal journey, and its impact can vary depending on various factors. While disclosure can be empowering, research (Karen & Jordan,41-63,1998) also indicates that its benefits are often modest and influenced by the context in which it occurs. Factors such as the strength of your relationships, the cultural or religious beliefs of those you confide in, and even the quality of support systems available can affect your experience. It’s crucial to approach this process with thoughtfulness and care, acknowledging that everyone’s journey is different.'},
          { type: 'paragraph', content: 'Many others have walked this path before you, and while the journey isn’t always easy, you are not alone. Choosing to be yourself is an act of courage, and it can also be a step toward greater well-being and emotional resilience.'},
          { type: 'paragraph', content: 'In the next section, we’ll explore practical strategies and suggestions to help you navigate this journey with confidence and self-compassion.'},
          "2.1 Impact on Mental Health",
          { type: 'bullet',  content: 'Prolonged anxiety over coming out can lead to feelings of depression and heightened anxiety (Meyer, 2003).',  level: 1 },
          { type: 'bullet', content: 'The fear of rejection may lead to self-isolation, making it difficult to form trusting, intimate relationships.', level: 1 },
          { type: 'bullet', content: 'Negative feedback post-coming out can further damage self-esteem and contribute to self-doubt.',  level: 1 },
          { type: 'bullet', content: 'Conversely, a successful coming out experience can bring a sense of relief, self-acceptance, and increased confidence ', level: 1 }
        ]
      },

      {
        heading: "3 Strategies and Methods",
        body: [
          { type: 'paragraph', content: 'Coming out can be empowering and healing, but it’s also a process that deserves careful consideration and preparation. To help you navigate this journey with greater confidence and emotional resilience, here are some practical strategies to guide you:'},
          "3.1 Safety First",
          { type: 'paragraph', content: 'Ensure your physical, emotional, and financial safety before sharing your truth.'},
          { type: 'bullet', content: 'Evaluate Your Environment: Identify whether your surroundings are supportive and inclusive. Pay attention to past behaviors, attitudes, and reactions of those you plan to confide in.', level: 1 },
          { type: 'bullet', content: 'Build a Safety Net: Connect with trusted friends, allies, or support organizations like The Trevor Project. Preparing these resources in advance can provide reassurance and stability. ', level: 1 },
          { type: 'bullet', content: 'Plan for Contingencies: If you are dependent on others for housing or financial support, consider what alternatives you have if things do not go as planned.', level: 1 },
          "3.2 Gradual Disclosure",
          { type: 'paragraph', content: 'Taking things one step at a time allows you to build resilience and adjust your approach as needed.'},
          { type: 'bullet', content: 'Start Small: Begin with the person you feel most comfortable sharing your truth with. This could be a trusted friend, mentor, or supportive online community.', level: 1 },
          { type: 'bullet', content: 'Prepare Your Message: Think about how you want to express yourself. Having a clear and straightforward message can help you feel more confident and in control.', level: 1 },
          { type: 'bullet', content: 'Allow Time for Processing: Others may need time to understand and accept your truth. Be patient with their journey, just as you are patient with your own.', level: 1 },
          "3.3 Strengthen Your Support System",
          { type: 'paragraph', content: 'A supportive network can provide emotional stability and encouragement throughout your journey.'},
          { type: 'bullet', content: 'Join Support Groups: Whether local or online, LGBTQ+ communities can offer advice, mentorship, and understanding.', level: 1 },
          { type: 'bullet', content: 'Participate Actively: Engaging with others who share similar experiences can be incredibly validating and empowering.', level: 1 },
          { type: 'bullet', content: 'Seek Guidance from Mentors: Find someone who has gone through a similar journey and can offer insights and encouragement.', level: 1 },
          "3.4 Professional Guidance",
          { type: 'paragraph', content: 'If you find yourself feeling overwhelmed or uncertain, seeking professional support can be invaluable.'},
          { type: 'bullet', content: 'Find an LGBTQ+-Friendly Counselor: Look for mental health professionals who specialize in LGBTQ+ issues and can provide tailored support.', level: 1 },
          { type: 'bullet', content: 'Use Accessible Platforms: Services like BetterHelp or Talkspace offer flexible and private online counseling.', level: 1 },
          { type: 'bullet', content: 'Develop a Coping Plan: Work with your counselor to outline ways to manage anxiety, rejection, or other challenges that may arise.', level: 1 },
          "3.5 Prioritize Self-Care",
          { type: 'paragraph', content: 'Taking care of your emotional and physical well-being is essential as you navigate this process.'},
          { type: 'bullet', content: ' Establish Relaxation Practices: Incorporate techniques such as mindfulness, meditation, or journaling to help manage stress.', level: 1 },
          { type: 'bullet', content: 'Deep Breathing Exercises: Try the 4-7-8 breathing technique:', level: 2 },
          { type: 'bullet', content: 'Sit comfortably and close your eyes.', level: 3 },
          { type: 'bullet', content: 'Inhale slowly through your nose for 4 seconds.', level: 3 },
          { type: 'bullet', content: 'Hold your breath for 7 seconds.' , level: 3 },
          { type: 'bullet', content: 'Exhale slowly through your mouth for 8 seconds.', level: 3 },
          { type: 'bullet', content: 'Repeat this cycle 4–6 times. This practice helps calm your mind and reduces stress.', level: 3 },
          { type: 'bullet', content: 'Guided Meditation: Use free apps or online videos (like Headspace or Insight Timer) that offer guided meditations specifically for stress relief and emotional balance. Even a short 10-minute session a day can help you become more centered and aware of your emotions. ', level: 2 },
          { type: 'bullet', content: 'Maintain Healthy Habits: Regular exercise, good nutrition, and adequate sleep are foundational for mental well-being.', level: 1 },
          { type: 'bullet', content: 'Use Affirmations: Remind yourself of your strengths, worth, and resilience.', level: 1 },
          { type: 'bullet', content: 'Engage with positive LGBTQ+ narratives and role models.', level: 2 },
          { type: 'bullet', content: 'Create your personal "Pride Statement," listing things you value about yourself and your identity.', level: 2 },
          { type: 'bullet', content: 'Share affirmations or pride moments within supportive communities to reinforce these beliefs.', level: 2 },
          "3.6 Reevaluate and Adapt",
          { type: 'paragraph', content: 'Coming out is not a one-time event but an ongoing process.'},
          { type: 'bullet', content: 'Check In with Yourself: Regularly reflect on your experiences, feelings, and progress. Adjust your approach if needed.', level: 1 },
          { type: 'bullet', content: 'Acknowledge Your Growth: Recognize the courage and resilience you’ve demonstrated throughout your journey.', level: 1 },
          { type: 'bullet', content: 'Plan for Future Steps: Think about who else you might want to share your truth with and how to approach those conversations.', level: 1 }
        ]
      },
  
      {
        heading: "4 Case Example",
        body: [
          { type: 'paragraph', content: 'Amy, a 22-year-old transgender woman, felt immense anxiety about coming out to her conservative family. First, she sought support at her university’s LGBTQ+ center, where she attended several group meetings. There, she met a mentor, Sarah, who had experienced similar challenges and helped her develop a coming out plan.'},
          { type: 'paragraph', content: 'Amy decided to begin by sharing her identity with her open-minded sister. She wrote a sincere letter explaining her gender identity and feelings. Her sister’s acceptance gave her the courage to proceed. With the support of her counselor, Amy later organized a family meeting. Although her parents were initially shocked, the educational materials and professional guidance provided helped them gradually understand and accept her.'},
          { type: 'paragraph', content: 'Amy’s journey illustrates how preparation, a strong support network, and professional help can lead to genuine freedom and deeper interpersonal connections, even when the process is challenging.'}
        ]
      },
      {
        heading: "5 Summary",
        body: [
          { type: 'paragraph', content: 'While coming out can be daunting, it is a crucial step toward self-acceptance. Remember that your timing and method should always prioritize your emotional safety. Building a reliable support network and seeking professional help can provide the courage and security needed during this transformative journey.'}
        ]
      }
    ]
  },
            
  {
    slug: "internalized-stigma",
    title: "Internalized Stigma",
    heroImage: "/assets/Internalized Stigma Header.png",
    sections: [
      {
        heading: "1 Introduction", 
        body: [
          { type: 'paragraph', content: ''}
        ]
      }, 
      {
        heading: "2 Understanding",
        body: [
          { type: 'paragraph', content: ''}
        ]
      },

      {
        heading: "3 Strategies and Methods",
        body: [
          { type: 'paragraph', content: ''}
        ]
      },
  
      {
        heading: "4 Case Example",
        body: [
          { type: 'paragraph', content: ''},
          { type: 'paragraph', content: ''}
        ]
      },
      {
        heading: "5 Summary",
        body: [
          { type: 'paragraph', content:''}
        ]
      }
    ]
  },
  { 
    slug: "coping-with-loneliness-and-isolation", 
    title: "Coping with Loneliness and Isolation", 
    heroImage: "/assets/Coping with Loneliness and Isolation Header.png", 
    sections: [
      {
        heading: "1 Introduction", 
        body: [
          { type: 'paragraph', content: ''}
        ]
      }, 
      {
        heading: "2 Understanding",
        body: [
          { type: 'paragraph', content: ''}
        ]
      },

      {
        heading: "3 Strategies and Methods",
        body: [
          { type: 'paragraph', content: ''}
        ]
      },
  
      {
        heading: "4 Case Example",
        body: [
          { type: 'paragraph', content: ''},
          { type: 'paragraph', content: ''}
        ]
      },
      {
        heading: "5 Summary",
        body: [
          { type: 'paragraph', content:''}
        ]
      }
    ]
  },
  {
    slug: "loss-of-peer-support",
    title: "Loss of Peer Support",
    heroImage: "/assets/Loss of Peer Support Header.png",
    sections: [
      {
        heading: "1 Introduction", 
        body: [
          { type: 'paragraph', content: ''}
        ]
      }, 
      {
        heading: "2 Understanding",
        body: [
          { type: 'paragraph', content: ''}
        ]
      },

      {
        heading: "3 Strategies and Methods",
        body: [
          { type: 'paragraph', content: ''}
        ]
      },
  
      {
        heading: "4 Case Example",
        body: [
          { type: 'paragraph', content: ''},
          { type: 'paragraph', content: ''}
        ]
      },
      {
        heading: "5 Summary",
        body: [
          { type: 'paragraph', content:''}
        ]
      }
    ]
  },
  {
    slug: "family-cultural-and-religious-conflicts",
    title: "Family, Cultural, and Religious Conflicts",
    heroImage: "/assets/Family, Cultural, and Religious Conflicts Header.png",
    sections: [
      {
        heading: "1 Introduction", 
        body: [
          { type: 'paragraph', content: ''}
        ]
      }, 
      {
        heading: "2 Understanding",
        body: [
          { type: 'paragraph', content: ''}
        ]
      },

      {
        heading: "3 Strategies and Methods",
        body: [
          { type: 'paragraph', content: ''}
        ]
      },
  
      {
        heading: "4 Case Example",
        body: [
          { type: 'paragraph', content: ''},
          { type: 'paragraph', content: ''}
        ]
      },
      {
        heading: "5 Summary",
        body: [
          { type: 'paragraph', content:''}
        ]
      }
    ]
  },

  { 
    slug: "chronic-minority-stress", 
    title: "Chronic Minority Stress", 
    heroImage: "/assets/Chronic Minority Stress Header.png", 
    sections: [
      {
        heading: "1 Introduction", 
        body: [
          { type: 'paragraph', content: ''}
        ]
      }, 
      {
        heading: "2 Understanding",
        body: [
          { type: 'paragraph', content: ''}
        ]
      },

      {
        heading: "3 Strategies and Methods",
        body: [
          { type: 'paragraph', content: ''}
        ]
      },
  
      {
        heading: "4 Case Example",
        body: [
          { type: 'paragraph', content: ''},
          { type: 'paragraph', content: ''}
        ]
      },
      {
        heading: "5 Summary",
        body: [
          { type: 'paragraph', content:''}
        ]
      }
    ]
  }
];

export const challengeNav = [
  { slug: "coming-out-anxiety", label: "Coming Out Anxiety" },
  { slug: "internalized-stigma", label: "Internalized Stigma" },
  { slug: "coping-with-loneliness-and-isolation", label: "Coping with Loneliness and Isolation" },
  { slug: "loss-of-peer-support", label: "Loss of Peer Support" },
  { slug: "family-cultural-and-religious-conflicts", label: "Family, Cultural, and Religious Conflicts" },
  { slug: "chronic-minority-stress", label: "Chronic Minority Stress" },
];
