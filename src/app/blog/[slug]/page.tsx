import { blogData } from '@/data/data';
import Image from 'next/image';

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blog = blogData.find((blog) => blog.id === params.slug);

  if (!blog) {
    return (
      <div>
        <main className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-gray-700">The blog you are looking for does not exist.</p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <main className="container mx-auto p-4">
        <Image
          src={blog.image}
          alt={blog.title}
          height={1080}
          width={1080}
          className="w-96 h-96 object-cover mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-700">{blog.content}</p>
      </main>
    </div>
  );
}