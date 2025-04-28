export default function HomePage() {
  const hotTopics = [
    {
      id: 1,
      title: "鳥貴族首間香港分店試食分享",
      creator: "阿明",
      partition: "飲食",
      views: 120,
      likes: 45,
      replies: 20,
    },
    {
      id: 2,
      title: "switch2抵吾抵買？",
      creator: "小美",
      partition: "遊戲",
      views: 85,
      likes: 30,
      replies: 15,
    },
    {
      id: 3,
      title: "王苑之-歌鼓勵人",
      creator: "John",
      partition: "音樂",
      views: 60,
      likes: 25,
      replies: 10,
    },
  ];

  const partitions = [
    { id: 1, name: "音樂", description: "分享你嘅音樂品味！" },
    { id: 2, name: "時事", description: "討論最新嘅新聞同熱話！" },
    { id: 3, name: "遊戲", description: "搵人一齊玩遊戲啦！" },
    { id: 4, name: "運動", description: "鍾意運動嘅朋友入嚟傾啦！" },
  ];

  return (
    <div className="flex-1 p-6 bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold">歡迎使用公海OnLine</h1>
        <p className="text-gray-400 mt-2">探索話題，開始交流！</p>
        <div className="mt-4">
          <input
            type="text"
            placeholder="搜索話題"
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">今期熱門 🔥</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {hotTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-blue-400">
                {topic.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                由 {topic.creator} 發起 • 分區：{topic.partition}
              </p>
              <div className="flex space-x-4 text-sm text-gray-400 mt-2">
                <span>Views：{topic.views}</span>
                <span>Likes：{topic.likes}</span>
                <span>Comments：{topic.replies}</span>
              </div>
              <button className="mt-3 text-blue-400 hover:underline">
                加入討論
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
