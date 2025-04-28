"use client";

import { Sidebar, SidebarItem, SidebarItemGroup } from "flowbite-react";
import { HiOutlineUser, HiOutlineMail, HiOutlineHome } from "react-icons/hi";
import Link from "next/link";
import { servers } from "@/lib/data";
import { usePathname } from "next/navigation";

export default function SidebarComponent() {
  const pathname = usePathname();

  return (
    <Sidebar className="flex-[2] bg-gray-800 border border-gray-700 shadow-lg">
      {/* 頂部標題 */}
      <div className="text-lg font-bold text-white text-center py-4">
        公海OnLine
      </div>

      {/* 返回首頁按鈕 */}
      <SidebarItemGroup>
        <Link href="/">
          <SidebarItem
            as="span" // 讓 Sidebar.Item 渲染為 span，避免嵌套 <a>
            icon={HiOutlineHome}
            className={
              pathname === "/"
                ? "bg-gray-700 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }
          >
            返回首頁
          </SidebarItem>
        </Link>
      </SidebarItemGroup>

      {/* 搜尋欄 */}
      <div className="w-4/5 px-4 mx-auto">
        <input
          type="text"
          placeholder="搜尋..."
          className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>

      <SidebarItemGroup>
        <SidebarItem icon={HiOutlineUser}>登入/登出</SidebarItem>
        <SidebarItem icon={HiOutlineMail}>訊息</SidebarItem>
      </SidebarItemGroup>

      {/* 分隔線 */}
      <div className="w-8 h-px bg-gray-600 my-2 mx-auto"></div>

      {/* 分區列表 */}
      <SidebarItemGroup>
        {servers.map((server) => (
          <Link href={`/server/${server.id}`} key={server.id}>
            <SidebarItem
              as="span" // 同樣用 span，避免嵌套 <a>
              className={
                pathname === `/server/${server.id}`
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }
            >
              {server.name}
            </SidebarItem>
          </Link>
        ))}
      </SidebarItemGroup>
    </Sidebar>
  );
}
