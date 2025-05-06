
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";

interface CommentFormProps {
  postId: number;
}

const CommentForm = ({ postId }: CommentFormProps) => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For now we'll just simulate a submission
      // In a real implementation, you would send this to WordPress API
      console.log("Submitting comment for post", postId, { name, email, comment });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t('comment.submitted'),
        description: t('comment.submittedDesc'),
      });
      
      // Reset form
      setName("");
      setEmail("");
      setComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast({
        title: t('comment.error'),
        description: t('comment.errorDesc'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t('comment.name')} *
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white text-sm"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t('comment.email')} *
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white text-sm"
        />
      </div>
      
      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t('comment.comment')} *
        </label>
        <textarea
          id="comment"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white text-sm"
        />
      </div>
      
      <Button
        type="submit"
        variant="secondary"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? t('comment.sending') : t('comment.send')}
      </Button>
      
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {t('comment.privacy')}
      </p>
    </form>
  );
};

export default CommentForm;
