
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Link } from "react-router-dom";
import { WordPressPost, decodeHtmlEntities, generateSlug } from "@/utils/wordpress";

const Events = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get<WordPressPost[]>(
        "https://rsirdc.org/shr/wp-json/wp/v2/posts?_embed&per_page=3"
      );
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <section id="news" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>Chargement des actualités...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Actualités</h2>
          <p className="text-gray-600">
            Restez informé des dernières nouvelles !
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts?.map((post) => {
            const slug = generateSlug(post.title.rendered, post.id);
            return (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/lovable-uploads/e9395874-6c20-46b0-914a-4110cba6d314.png"}
                  alt={decodeHtmlEntities(post.title.rendered)}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-secondary font-semibold mb-2">
                    {format(new Date(post.date), "d MMMM yyyy", { locale: fr })}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {decodeHtmlEntities(post.title.rendered)}
                  </h3>
                  <div
                    className="text-gray-600 mb-4"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered.slice(0, 150) + "...",
                    }}
                  />
                  <Link
                    to={`/article/${slug}`}
                    className="text-secondary hover:text-red-600 font-semibold flex items-center gap-2"
                  >
                    Lire la suite
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
