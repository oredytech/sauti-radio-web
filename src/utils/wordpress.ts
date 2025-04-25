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
  if (!slug) return null;
  
  try {
    // First, try to extract the ID directly from the end using our format
    const directMatch = slug.match(/-(\d+)$/);
    if (directMatch && directMatch[1]) {
      return parseInt(directMatch[1], 10);
    }
    
    // If that fails, handle WordPress URLs in different formats
    
    // 1. Handle URLs with multiple path segments (split by '/')
    const pathParts = slug.split('/').filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];
    
    // Try to extract ID from the last part
    const lastPartMatch = lastPart?.match(/-(\d+)$/);
    if (lastPartMatch && lastPartMatch[1]) {
      return parseInt(lastPartMatch[1], 10);
    }
    
    // 2. Look for any numeric part that could be a post ID (fallback)
    // This is more permissive but helps with unusual URL patterns
    const anyNumberMatch = slug.match(/\/(\d+)(?:\/|$)/);
    if (anyNumberMatch && anyNumberMatch[1]) {
      return parseInt(anyNumberMatch[1], 10);
    }
    
    // 3. If it's a WordPress permalink without ID in URL, try to extract from query params
    // Some WordPress sites use ?p=123 format
    if (slug.includes('?p=')) {
      const params = new URLSearchParams(slug.split('?')[1]);
      const postId = params.get('p');
      if (postId) return parseInt(postId, 10);
    }
    
    // Nothing matched
    return null;
  } catch (error) {
    console.error("Error extracting ID from slug:", error);
    return null;
  }
};

export const fetchPostById = async (id: number): Promise<WordPressPost> => {
  try {
    const response = await fetch(
      `https://rsirdc.org/shr/wp-json/wp/v2/posts/${id}?_embed`
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
    const sanitizedSlug = slug.split('/').pop()?.split('-').slice(0, -1).join('-') || slug;
    
    const response = await fetch(
      `https://rsirdc.org/shr/wp-json/wp/v2/posts?slug=${sanitizedSlug}&_embed`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch post by slug: ${response.status}`);
    }
    
    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
};
