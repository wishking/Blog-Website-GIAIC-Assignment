import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function BlogCard({ id, title, description, image }: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`} className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image src={image} alt={title} height={1080} width={1080} className="w-full h-80 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </Link>
  );
}