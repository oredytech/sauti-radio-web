import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RadioPlayer from '@/components/RadioPlayer';
import ArticleContent from '@/components/article/ArticleContent';
import ArticleSidebar from '@/components/article/ArticleSidebar';
import ArticleSkeleton from '@/components/article/ArticleSkeleton';
import ArticleError from '@/components/article/ArticleError';
import { useWordPressPost } from '@/hooks/useWordPress';
import { Helmet } from 'react-helmet-async';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useWordPressPost(slug || "");

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <ArticleSkeleton />
        </div>
        <Footer />
        <RadioPlayer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <ArticleError />
        </div>
        <Footer />
        <RadioPlayer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title.rendered} - Radio Sauti ya Injili</title>
        <meta name="description" content={post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160)} />
        <meta property="og:title" content={post.title.rendered} />
        <meta property="og:description" content={post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160)} />
        {post.featured_media_url && <meta property="og:image" content={post.featured_media_url} />}
      </Helmet>
      
      <Navbar />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            <ArticleContent post={post} />
          </div>
          <div className="md:w-1/4">
            <ArticleSidebar />
          </div>
        </div>
      </div>
      
      <Footer />
      <RadioPlayer />
    </>
  );
};

export default ArticlePage;
