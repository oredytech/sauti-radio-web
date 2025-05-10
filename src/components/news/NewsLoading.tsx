
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NewsLoading: React.FC = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(12)].map((_, i) => (
            <div key={i}>
              <Skeleton className="h-48 w-full mb-4" />
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsLoading;
