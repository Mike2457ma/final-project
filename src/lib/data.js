// 頂部功能圖標
export const icons = [
  { id: "home", name: "首頁", icon: "smile.png" }, // 黃色笑臉
  { id: "notifications", name: "通知", icon: "bell.png" }, // 鈴鐺
  { id: "history", name: "歷史記錄", icon: "clock.png" }, // 時鐘
  { id: "profile", name: "個人檔案", icon: "profile.png" }, // 頭像
];

// 分區列表
export const servers = [
  { id: 1, name: "吹水台", icon: "/chat.png" },
  { id: 2, name: "創意台", icon: "/creative.png" },
  { id: 3, name: "講故台", icon: "/story.png" },
  { id: 4, name: "學術台", icon: "/academic.png" },
  { id: 5, name: "時事台", icon: "/news.png" },
  { id: 6, name: "政事台", icon: "/politics.png" },
  { id: 7, name: "娛樂台", icon: "/entertainment.png" },
  { id: 8, name: "手機台", icon: "/mobile.png" },
  { id: 9, name: "Apps台", icon: "/apps.png" },
  { id: 10, name: "軟件台", icon: "/software.png" },
  { id: 11, name: "創意台", icon: "/creative2.png" },
  { id: 12, name: "戀愛台", icon: "/love.png" },
  { id: 13, name: "飲食台", icon: "/food.png" },
];

// 模擬帖子數據（保持不變）
export const posts = {
  1: [
    {
      id: 1,
      title: "有什麼值得去？",
      author: "24601",
      time: "7 小時",
      anonymous: true,
      content:
        "現階段香港旺記其實都仲有咩值得用過幾個 gg... 天氣仲咁熱同埋周圍都係林柄路都",
      views: 3037,
      replies: 0,
    },
    {
      id: 2,
      title: "學生加成後 18 小時",
      author: "",
      time: "6 小時",
      anonymous: true,
      content: "我會話係 70s 主角的 SYL, 期都覺得真係唔錯有唔同味道",
      views: 87,
      replies: 2,
    },
  ],
  2: [
    {
      id: 3,
      title: "世界新聞：新政策",
      author: "WorldUser",
      time: "5 小時",
      anonymous: false,
      content: "世界各地的新政策即將實施，大家怎麼看？",
      views: 1500,
      replies: 10,
    },
  ],
  3: [
    {
      id: 4,
      title: "emo大神驚爆 天天",
      author: "",
      time: "5 小時",
      anonymous: true,
      content:
        "我keep住主攻你你之後後悔近日 5 個想 又 5 個主入個群 唔好話 Xdolf 1g",
      views: 246,
      replies: 1,
    },
  ],
};
