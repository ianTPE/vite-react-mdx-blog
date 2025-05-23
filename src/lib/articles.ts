// This file is automatically generated
// Generated on: 2025-05-23T18:30:23.253Z

// Article data
export const articles = [
  { 
    slug: "building-mdx-blog", 
    hasCustomOgImage: false 
  },
  { 
    slug: "first-post", 
    hasCustomOgImage: false 
  },
  { 
    slug: "getting-started", 
    hasCustomOgImage: false 
  },
  { 
    slug: "mdx-blog-setup", 
    hasCustomOgImage: false 
  },
  { 
    slug: "react-vite-typescript-mdx-blog-architecture", 
    hasCustomOgImage: false 
  },
  { 
    slug: "test-article", 
    hasCustomOgImage: false 
  }
];

// Helper functions
export function getValidSlugs() {
  return articles.map(a => a.slug);
}

export function getArticleBySlug(slug) {
  return articles.find(a => a.slug === slug);
}