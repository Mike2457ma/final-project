import { servers, posts } from "../../../lib/data";

export default function ServerPage({ params }) {
  const { serverId } = params;

  const server = servers.find((s) => s.id == serverId);
  const serverPosts = posts[serverId] || [];

  if (!server) {
    return <div>分區不存在</div>;
  }

  return (
    <div className="flex-1 p-4 bg-gray-900 text-white">
      {/* 分區名稱 */}
      <h1 className="text-2xl font-bold mb-4">{server.name}</h1>

      {/* 帖子列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {" "}
        {/* Updated gap for spacing */}
        {serverPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-md"
          >
            {/* 帖子標題 */}
            <h2 className="text-lg font-semibold text-blue-400">
              {post.title}
            </h2>

            {/* 發帖者資訊 */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>{post.anonymous ? "匿名" : post.author}</span>
              <span>{post.time}</span>
            </div>

            {/* 帖子內容 */}
            <p className="mt-2 text-gray-300">{post.content}</p>

            {/* 統計數據 */}
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span>{post.views}</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                <span>{post.replies}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
