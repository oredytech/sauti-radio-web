
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
  // Try to extract the ID from the end of the slug using regex
  const match = slug.match(/-(\d+)$/);
  
  // If we have a match with ID at the end
  if (match && match[1]) {
    return parseInt(match[1], 10);
  }
  
  // If the slug doesn't end with an ID in our format,
  // it might be a direct link from WordPress with the full post name
  // In this case, we need to extract just the last part after the last slash
  const pathParts = slug.split('/');
  const lastPart = pathParts[pathParts.length - 1];
  
  // Try again with just the last part
  const lastPartMatch = lastPart.match(/-(\d+)$/);
  if (lastPartMatch && lastPartMatch[1]) {
    return parseInt(lastPartMatch[1], 10);
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
