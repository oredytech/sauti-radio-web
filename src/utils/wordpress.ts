
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
  
  // Return just the slug without ID
  return slug;
};

export const extractIdFromSlug = (slug: string): number | null => {
  if (!slug) return null;
  
  try {
    // Since we're no longer appending IDs to slugs, we need to search the post by slug directly
    // This function is kept for backward compatibility
    return null;
  } catch (error) {
    console.error("Error extracting ID from slug:", error);
    return null;
  }
};

export const fetchPostById = async (id: number): Promise<WordPressPost> => {
  try {
    const response = await fetch(
      `https://rsirdc.net/wp-json/wp/v2/posts/${id}?_embed`
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

export const fetchPostBySlug = async (slug: string): Promise<WordPressPost | null> => {
  try {
    // Remove any path segments and get just the slug portion
    const sanitizedSlug = slug.split('/').pop() || slug;
    console.log("Attempting to fetch post with sanitized slug:", sanitizedSlug);
    
    // Try to fetch posts with this slug
    const response = await fetch(
      `https://rsirdc.net/wp-json/wp/v2/posts?slug=${sanitizedSlug}&_embed`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch post by slug: ${response.status}`);
    }
    
    const posts = await response.json();
    console.log(`Found ${posts.length} posts matching slug:`, sanitizedSlug);
    
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
};

// New function to fetch all posts with pagination
export const fetchPosts = async (page: number = 1, perPage: number = 10): Promise<WordPressPost[]> => {
  try {
    const response = await fetch(
      `https://rsirdc.net/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
