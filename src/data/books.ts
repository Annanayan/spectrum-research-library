export interface BookItem {
  title: string;
  summary: string;
  link: string;
  image: string;
}

export interface BookSection {
  name: string;
  intro?: string;
  items: BookItem[];
}

export interface BooksData {
  sections: BookSection[];
}

export const booksData: BooksData = {
  sections: [
    {
      name: "Journals",
      intro: "Covering culture, health, history, and academic research, suitable for reading and research citations.",
      items: [
        {
          title: "The Advocate",
          summary: "Global LGBTQ+ news and culture magazine.",
          link: "https://www.advocate.com/",
          image: "/assets/books/The Advocate.png"
        },
        {
          title: "Out Magazine",
          summary: "Lifestyle, culture, and fashion.",
          link: "https://www.out.com/",
          image: "/assets/books/Out Magazine.png"
        },
        {
          title: "Transgender Studies Quarterly (TSQ)",
          summary: "Transgender research and social issues.",
          link: "https://www.dukeupress.edu/",
          image: "/assets/books/Transgender Studies Quarterly (TSQ).png"
        },
        {
          title: "Journal of LGBT Youth",
          summary: "Youth mental health, education, and social issues.",
          link: "https://www.tandfonline.com/toc/wjly20/current",
          image: "/assets/books/Journal of LGBT Youth.png"
        },
        {
          title: "LGBT Health",
          summary: "LGBTQ+ health and medical research.",
          link: "https://www.liebertpub.com/loi/lgbt",
          image: "/assets/books/LGBT Health.png"
        },
        {
          title: "Psychiatric Services (APA)",
          summary: "Mental health services research and archives.",
          link: "https://psychiatryonline.org/loi/ps",
          image: "/assets/books/Psychiatric Services (APA).png"
        }
      ]
    },
    {
      name: "Biographies & Memoirs",
      items: [
        {
          title: "Me – Elton John",
          summary: "The legendary British musician's memoir covering career, addiction, and identity.",
          link: "https://www.amazon.com/Me-Elton-John-Elton-John-audiobook/dp/B07PFY8K2N",
          image: "/assets/books/Me Elton John Official Autobiography.png"
        },
        {
          title: "GuRu – RuPaul",
          summary: "Pop culture icon RuPaul's life insights and confidence-building notes.",
          link: "https://www.amazon.com/GuRu-RuPaul-audiobook/dp/B07CS9L882",
          image: "/assets/books/GuRu.png"
        },
        {
          title: "Redefining Realness – Janet Mock",
          summary: "Transgender author's personal narrative from growing up to finding voice and self.",
          link: "https://www.amazon.com/Redefining-Realness-Path-Selfhood-Womanhood/dp/1476709130",
          image: "/assets/books/Redefining Realness My Path to Womanhood, Identity, Love & So Much More.png"
        },
        {
          title: "Boy Erased – Garrard Conley",
          summary: "A true memoir of struggle within conservative family and conversion therapy.",
          link: "https://www.amazon.com/Boy-Erased-Garrard-Conley-audiobook/dp/B01EXAZDSQ",
          image: "/assets/books/Boy Erased A Memoir.png"
        }
      ]
    },
    {
      name: "Personal Stories & Collections",
      items: [
        {
          title: "Queer Heroes – Arabelle Sicardi",
          summary: "Stories of 50 LGBTQ+ pioneers covering art, science, and public affairs.",
          link: "https://www.amazon.com/Queer-Heroes-Arabelle-Sicardi/dp/178603476X",
          image: "/assets/books/Queer Heroes Meet 53 LGBTQ Heroes From Past and Present!.png"
        },
        {
          title: "Pride: The Story of the LGBTQ Equality Movement – Matthew Todd",
          summary: "The journey and key figures of the LGBTQ+ equality movement.",
          link: "https://www.amazon.com/Pride-Story-LGBTQ-Equality-Movement/dp/1681885239",
          image: "/assets/books/Pride The Story of the LGBTQ Equality Movement.png"
        },
        {
          title: "We Are Everywhere – Matthew Riemer & Leighton Brown",
          summary: "Photography and historical materials presenting group struggles and victories.",
          link: "https://www.amazon.com/We-Are-Everywhere-Protest-Liberation/dp/0399581812",
          image: "/assets/books/We Are Everywhere Protest, Power, and Pride in the History of Queer Liberation.png"
        },
        {
          title: "Leading with Pride / Pride: Celebrating Diversity – Robin Stevenson",
          summary: "Stories of diversity and action aimed at young adults.",
          link: "https://www.amazon.com/Pride-Celebrating-Diversity-Robin-Stevenson/dp/1459809939",
          image: "/assets/books/Pride Celebrating Diversity & Community.png"
        }
      ]
    }
  ]
};