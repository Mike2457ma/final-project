"use client"; // 添加這行，確保客戶端導航正常

import { servers, posts } from "@/lib/data";
import LikeButton from "@/components/LikeButton";
import { FaEye, FaComment } from "react-icons/fa";
import Link from "next/link";

export default function ServerPage({ params }) {
  const { serverId } = params;

  const server = servers.find((s) => s.id == serverId);
  const serverPosts = posts[serverId] || [];

  if (!server) {
    return <div>分區不存在</div>;
  }

  return (
    <div className="flex-1 p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">{server.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serverPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-md"
          >
            <Link href={`/server/${serverId}/topic/${post.id}`}>
              <h2 className="text-lg font-semibold text-blue-400 hover:underline">
                {post.title}
              </h2>
            </Link>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>{post.anonymous ? "匿名" : post.author}</span>
              <span>{post.time}</span>
            </div>
            <p className="mt-2 text-gray-300">{post.content}</p>
            <div className="mt-2 flex justify-between items-center">
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <FaEye className="w-5 h-5 text-gray-300" />
                  <span>{post.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaComment className="w-5 h-5 text-gray-300" />
                  <span>{post.replies}</span>
                </div>
              </div>
              <LikeButton
                initialLikes={post.likes || 0}
                postId={post.id}
                serverId={serverId}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
