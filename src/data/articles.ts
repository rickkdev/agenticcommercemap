export type ContentSection = {
  heading: string;
  body: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  publishedDate: string;
  metaDescription: string;
  keywords: string[];
  readingTime: string;
  contentSections: ContentSection[];
  faq: FAQ[];
  relatedArticleSlugs: string[];
};

export const articles: Article[] = [];
