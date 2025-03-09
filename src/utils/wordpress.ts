
export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content?: {
    rendered: string;
  };
  date: string;
  link?: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

export const decodeHtmlEntities = (html: string) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

export const generateSlug = (title: string, id: number): string => {
  // Decode HTML entities first
  const decodedTitle = decodeHtmlEntities(title);
  
  // Convert to lowercase, remove special chars, replace spaces with hyphens
  const slug = decodedTitle
    .toLowerCase()
    .normalize('NFD') // Normalize accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim(); // Trim leading/trailing spaces
  
  // Return just the slug with ID at the end
  return `${slug}-${id}`;
};

export const extractIdFromSlug = (slug: string): number | null => {
  // Extract the ID from the end of the slug
  const match = slug.match(/-(\d+)$/);
  if (match && match[1]) {
    return parseInt(match[1], 10);
  }
  return null;
};

// New function to fetch a post by ID
export const fetchPostById = async (id: number): Promise<WordPressPost> => {
  try {
    const response = await fetch(
      `https://totalementactus.net/wp-json/wp/v2/posts/${id}?_embed`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};
