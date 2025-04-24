"use client"; // 標記為客戶端組件

import { servers, posts, addComment } from "@/lib/data";
import { useState } from "react";
import LikeButton from "@/components/LikeButton";
import { FaEye, FaComment } from "react-icons/fa";

export default function TopicPage({ params }) {
  const { serverId, topicId } = params;

  // 將字符串轉為數字
  const serverIdNum = parseInt(serverId);
  const topicIdNum = parseInt(topicId);

  // 查找分區同帖子
  const server = servers.find((s) => s.id === serverIdNum);
  const serverPosts = posts[serverId] || [];
  const post = serverPosts.find((p) => p.id === topicIdNum);

  if (!server || !post) {
    return <div>話題不存在</div>;
  }

  return (
    <div className="flex-1 p-4 bg-gray-900 text-white">
      {/* 分區名稱同話題標題 */}
      <h1 className="text-2xl font-bold mb-2">{server.name}</h1>
      <h2 className="text-xl font-semibold text-blue-400 mb-4">{post.title}</h2>

      {/* 帖子詳情 */}
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-md mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <span>{post.anonymous ? "匿名" : post.author}</span>
          <span>{post.time}</span>
        </div>
        <p className="mt-2 text-gray-300">{post.content}</p>

        {/* 統計數據同 Like 按鈕容器 */}
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

      {/* 留言區域 */}
      <CommentSection
        serverId={serverId}
        topicId={topicId}
        comments={post.comments || []}
      />
    </div>
  );
}

// 留言區域組件
function CommentSection({ serverId, topicId, comments }) {
  const [commentInput, setCommentInput] = useState("");
  const [commentList, setCommentList] = useState(comments);

  const handleAddComment = async () => {
    if (!commentInput.trim()) return; // 避免提交空留言

    const newComment = {
      author: "", // 設為空字符串，所有留言都匿名
      anonymous: true, // 強制設為匿名
      content: commentInput,
    };

    // 更新留言列表
    const updatedComments = await addComment(serverId, topicId, newComment);
    setCommentList(updatedComments);
    setCommentInput(""); // 清空輸入框
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-md">
      {/* 留言列表 */}
      <div className="mb-4">
        {commentList.length === 0 ? (
          <p className="text-gray-400">仲未有留言，快啲發表意見吧！</p>
        ) : (
          commentList.map((comment) => (
            <div
              key={comment.id}
              className="bg-gray-700 p-3 rounded-lg border border-gray-600 mb-6" // 獨立背景框、內間距、圓角邊框、底部間距
            >
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>匿名</span>
                <span>{new Date(comment.timestamp).toLocaleString()}</span>
              </div>
              <p className="text-gray-300 mt-1">{comment.content}</p>
            </div>
          ))
        )}
      </div>

      {/* 留言輸入框同提交按鈕 */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          placeholder="寫下你嘅留言..."
          className="flex-1 p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleAddComment}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          提交
        </button>
      </div>
    </div>
  );
}
