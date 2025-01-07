import BlogCard from '@/components/BlogCard';
import { blogData } from '@/data/data';

export default function BlogPage() {
  return (
    <div>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">All Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </main>
    </div>
  );
}