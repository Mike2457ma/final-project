"use client";

import { useState, useCallback } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { updateLikes } from "@/lib/data";

export default function LikeButton({ initialLikes = 0, postId, serverId }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);

  const handleLike = useCallback(async () => {
    const newIsLiked = !isLiked;
    const newLikeCount = newIsLiked ? likeCount + 1 : likeCount - 1;

    setIsLiked(newIsLiked);
    setLikeCount(newLikeCount);

    // 持久化 Like 數
    await updateLikes(serverId, postId, newIsLiked);
  }, [isLiked, likeCount, postId, serverId]);

  return (
    <div className="flex items-center space-x-1 text-sm text-gray-300">
      <button
        onClick={handleLike}
        className="focus:outline-none transition-transform duration-200 hover:scale-110 bg-transparent"
      >
        {isLiked ? (
          <FaHeart className="w-5 h-5 text-red-500" />
        ) : (
          <FaRegHeart className="w-5 h-5 text-gray-300" />
        )}
      </button>
      <span>{likeCount}</span>
    </div>
  );
}
