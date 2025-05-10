
import { WordPressPost } from "./wordpress";

// Function to extract category from post
export const getCategoryName = (post: WordPressPost): string => {
  if (post._embedded && post._embedded["wp:term"]) {
    const categories = post._embedded["wp:term"].find(
      terms => terms.length > 0 && terms[0].taxonomy === "category"
    );
    
    if (categories && categories.length > 0) {
      return categories[0].name;
    }
  }
  
  return "Actualité"; // Default category if none found
};
