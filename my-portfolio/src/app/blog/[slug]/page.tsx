'use client'

import React, { useState, useEffect } from 'react';
import contentfulClient from '@/Utils/contentfulClient';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'; // Import renderer để chuyển Rich Text sang HTML
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

type Post = {
  title: string;
  slug: string;
  coverImage: string;
  date: string;
  exceprt: string;
  author: string;
  content: Document; 
};

type Params = {
  slug: string;
};

const BlogPostPage = ({ params }: { params: Params }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { slug } = params;

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'post',
          'fields.slug': slug, // Lọc bài viết theo slug
          include: 1,
        });

        if (response.items.length === 0) {
          setError('Post not found');
          return;
        }

        const item = response.items[0];
        const fetchedPost = {
          title: item.fields.title || 'No title provided',
          slug: item.fields.slug,
          coverImage: item.fields.coverImage?.fields.file.url || '',
          date: item.fields.date || 'No date provided',
          exceprt: item.fields.exceprt || 'No excerpt available',
          author: item.fields.author?.fields.name || 'Anonymous',
          content: item.fields.content,
        };

        setPost(fetchedPost);
      } catch (err) {
        setError('Failed to fetch post');
        console.error(err);
      }
    };

    fetchPost();
  }, [slug]);

  if (error) return <div>{error}</div>;
  if (!post) return <div>Loading...</div>;

  const contentHtml = documentToHtmlString(post.content, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title } = node.data.target.fields;
        const imageUrl = file.url.startsWith('//') ? 'https:' + file.url : file.url;

        return `<img src="${imageUrl}" alt="${title}" class="w-50 h-50 mb-6 rounded-lg" />`;
      },
      [INLINES.HYPERLINK]: (node) => {
        const { uri } = node.data;
        return `<a href="${uri}" class="text-blue-500 hover:underline">${node.content[0].value}</a>`;
      },
    },
  });

  return (
    <div className="container mx-auto w-full p-5 flex flex-col items-center bg-slate-100">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-50 h-auto mb-6 rounded-lg shadow-md"
        />
      )}
      <h3 className="mb-6 text-lg text-gray-700 font-bold">{post.exceprt}</h3>
      <div
        className="content prose prose-lg mb-10"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      ></div>
      <div className="flex items-center mb-6 space-x-2 text-lg">
        <span className="text-gray-600">{post.date}</span>
        <span className="font-bold text-gray-800">By {post.author}</span>
      </div>
    </div>
  );
};

export default BlogPostPage;
