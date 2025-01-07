import BlogCard from '@/components/BlogCard';
import { blogData } from '@/data/data';
import HeroSection from '@/components/Hero';

export default function Home() {
  const latestBlogs = blogData.slice(0, 3);
  const featuredBlogs = blogData.slice(3, 6);

  return (
    <div>
      <HeroSection />
      <main className="container mx-auto p-4">
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Latest Blogs</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </section>
        <section>
          <h1 className="text-3xl font-bold mb-4">Featured Blogs</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </section>
      </main>

    </div>
  );
}