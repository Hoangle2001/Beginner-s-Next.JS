// src/app/blog/page.tsx
'use client'

import React, { useState, useEffect } from 'react';
import contentfulClient from '@/Utils/contentfulClient';
import { useRouter } from 'next/navigation';  

type Post = {
  title: string;
  slug: string;
  coverImage: string;
  date: string;
  exceprt: string; // Đã sửa thành excerpt
  author: string;
};

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Để chuyển hướng đến trang chi tiết bài viết

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'post',
          include: 1,
        });

        const fetchedPosts = response.items.map((item: any) => ({
          title: item.fields.title,
          slug: item.fields.slug,
          coverImage: item.fields.coverImage?.fields.file.url || '',
          date: item.fields.date || 'No date provided',
          exceprt: item.fields.exceprt || 'No excerpt available', // Đã sửa thành excerpt
          author: item.fields.author?.fields.name || 'Anonymous',
        }));

        setPosts(fetchedPosts);
      } catch (err) {
        setError('Failed to fetch posts');
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  if (error) return <div>{error}</div>;
  if (posts.length === 0) return <p>No posts available</p>;

  return (
    <div className="animate-appear p-5 w-full h-full-screen">
      <div className="flex flex-wrap justify-center gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="group relative w-full max-w-md bg-blue-50 rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => router.push(`/blog/${post.slug}`)}  // Đảm bảo rằng đường dẫn này chính xác
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-black">
              {post.title}
            </h2>
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-auto rounded-lg mb-4"
              />
            )}
            <h3 className="text-gray-700 text-base mb-4 mt-4 font-bold">{post.exceprt}</h3>
            <p className="text-sm text-gray-600 mb-4 mt-4 flex flex-row"><h4 className='font-bold mr-2'>Published on:</h4> {post.date}</p>
            <p className="text-sm text-gray-600 mb-4 mt-4 flex flex-row"><h4 className='font-bold mr-2'>Author:</h4> {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
