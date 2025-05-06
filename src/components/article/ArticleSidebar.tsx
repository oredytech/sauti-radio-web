
import SocialShare from "./SocialShare";
import CommentForm from "./CommentForm";
import { useTranslation } from "@/hooks/useTranslation";

interface ArticleSidebarProps {
  postId: number;
  url: string;
  title: string;
}

const ArticleSidebar = ({ postId, url, title }: ArticleSidebarProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full md:w-1/3 space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-4">
          {t('article.share')}
        </h3>
        <SocialShare url={url} title={title} />
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-4">
          {t('article.leaveComment')}
        </h3>
        <CommentForm postId={postId} />
      </div>
    </div>
  );
};

export default ArticleSidebar;
