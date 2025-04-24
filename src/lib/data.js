// 頂部功能圖標
export const icons = [
  { id: "title", name: "標題", icon: "tille.png" },
  { id: "search", name: "搜尋", icon: "search.png" },
  { id: "login&logout", name: "登入/登出", icon: "login&out.png" },
  { id: "message", name: "信息", icon: "message.png" },
];

// 分區列表
export const servers = [
  { id: 1, name: "吹水台", icon: "/chat.png" },
  { id: 2, name: "運動台", icon: "/sport.png" },
  { id: 3, name: "活動台", icon: "/activitives.png" },
  { id: 4, name: "娛樂台", icon: "/entertainment.png" },
  { id: 5, name: "戀愛台", icon: "/love.png" },
  { id: 6, name: "飲食台", icon: "/food.png" },
];

// 模擬帖子數據（加入 likes 同 comments 字段）
export let posts = {
  1: [
    {
      id: 1,
      title: "測試用標題",
      author: "24601",
      time: "7 小時",
      anonymous: true,
      content: "testing testing 123",
      views: 3037,
      replies: 3,
      likes: 10,
      comments: [
        {
          id: 1,
          author: "", // 設為空字符串
          anonymous: true, // 設為匿名
          content: "哈哈，testing 123 真係好有趣！有咩地方值得試？",
          timestamp: "2025-04-24T10:00:00.000Z",
        },
        {
          id: 2,
          author: "", // 設為空字符串
          anonymous: true, // 已係匿名，保持不變
          content: "我覺得可以試下新嘅地方，testing 真係幾好玩！",
          timestamp: "2025-04-24T10:05:00.000Z",
        },
        {
          id: 3,
          author: "", // 設為空字符串
          anonymous: true, // 設為匿名
          content: "有啲地方可能會好啲，試咗話我知！",
          timestamp: "2025-04-24T10:10:00.000Z",
        },
      ],
    },
    {
      id: 2,
      title: "測試用",
      author: "",
      time: "6 小時",
      anonymous: true,
      content: "hello試下",
      views: 87,
      replies: 2,
      likes: 5,
      comments: [
        {
          id: 1,
          author: "", // 設為空字符串
          anonymous: true, // 設為匿名
          content: "Hello！試下真係幾好玩，你試咗未？",
          timestamp: "2025-04-24T11:00:00.000Z",
        },
        {
          id: 2,
          author: "", // 設為空字符串
          anonymous: true, // 已係匿名，保持不變
          content: "試咗，感覺唔錯！",
          timestamp: "2025-04-24T11:05:00.000Z",
        },
      ],
    },
  ],
  2: [
    {
      id: 3,
      title: "測試用",
      author: "", // 問題一：設為空字符串
      time: "5 小時",
      anonymous: true, // 問題一：設為匿名
      content: "試咪試咪",
      views: 1500,
      replies: 2,
      likes: 20,
      comments: [
        {
          id: 1,
          author: "", // 設為空字符串
          anonymous: true, // 設為匿名
          content: "試咪試咪好有趣！有咩運動可以一齊試？",
          timestamp: "2025-04-24T12:00:00.000Z",
        },
        {
          id: 2,
          author: "", // 設為空字符串
          anonymous: true, // 已係匿名，保持不變
          content: "我試咗跑步，幾好玩！",
          timestamp: "2025-04-24T12:10:00.000Z",
        },
      ],
    },
  ],
  3: [
    {
      id: 4,
      title: "測試用",
      author: "",
      time: "5 小時",
      anonymous: true,
      content: "hahaha testing ",
      views: 246,
      replies: 1,
      likes: 3,
      comments: [],
    },
  ],
  4: [
    {
      id: 5,
      title: "測試用",
      author: "",
      time: "5 小時",
      anonymous: true,
      content: "hahaha testing ",
      views: 123,
      replies: 2,
      likes: 5,
      comments: [],
    },
  ],
  5: [
    {
      id: 6,
      title: "測試用",
      author: "",
      time: "4 小時",
      anonymous: true,
      content: "test try try ",
      views: 111,
      replies: 3,
      likes: 11,
      comments: [
        {
          id: 1,
          author: "", // 設為空字符串
          anonymous: true, // 設為匿名
          content: "試試真係幾好玩！有咩戀愛小貼士？",
          timestamp: "2025-04-24T13:00:00.000Z",
        },
        {
          id: 2,
          author: "", // 設為空字符串
          anonymous: true, // 已係匿名，保持不變
          content: "我試咗同另一半去試新活動，超正！",
          timestamp: "2025-04-24T13:05:00.000Z",
        },
        {
          id: 3,
          author: "", // 設為空字符串
          anonymous: true, // 設為匿名
          content: "有啲浪漫嘅活動可以試下，推介！",
          timestamp: "2025-04-24T13:10:00.000Z",
        },
      ],
    },
  ],
  6: [
    {
      id: 7,
      title: "測試用",
      author: "",
      time: "5 小時",
      anonymous: true,
      content: "hahaha testing ",
      views: 246,
      replies: 1,
      likes: 3,
      comments: [],
    },
  ],
};

// 獲取某分區嘅帖子
export async function getPosts(serverId) {
  return posts[serverId] || [];
}

// 更新帖子嘅 Like 數
export async function updateLikes(serverId, postId, isLiked) {
  const serverPosts = posts[serverId] || [];
  const post = serverPosts.find((p) => p.id === postId);
  if (post) {
    post.likes = isLiked
      ? (post.likes || 0) + 1
      : Math.max((post.likes || 0) - 1, 0);
  }
  return post ? post.likes : 0;
}

// 新增留言
export async function addComment(serverId, postId, comment) {
  const serverPosts = posts[serverId] || [];
  const post = serverPosts.find((p) => p.id === postId);
  if (post) {
    post.comments = post.comments || [];
    post.comments.push({
      id: post.comments.length + 1,
      author: comment.author,
      anonymous: comment.anonymous || false,
      content: comment.content,
      timestamp: new Date().toISOString(),
    });
    post.replies = post.comments.length;
  }
  return post ? post.comments : [];
}
