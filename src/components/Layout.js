"use client";

import SidebarComponent from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* 側邊欄 */}
      <SidebarComponent />

      {/* 右邊內容區域 */}
      <div className="flex-[8] flex flex-col">{children}</div>
    </div>
  );
}
