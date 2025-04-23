import { Sidebar, SidebarItem, SidebarItemGroup } from "flowbite-react";
import { HiOutlineUser, HiOutlineMail } from "react-icons/hi"; // 修改圖標名稱
import Link from "next/link";
import { servers } from "../lib/data";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar className="flex-[2] bg-gray-800 border border-gray-700 shadow-lg">
        {/* 頂部 */}
        <div className="text-lg font-bold text-white text-center py-4">HI~</div>

        {/* 搜尋 bar */}
        <div className="w-4/5 px-4 mx-auto">
          <input
            type="text"
            placeholder="搜尋..."
            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* 功能圖標區域 */}
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
              <SidebarItem>{server.name}</SidebarItem>
            </Link>
          ))}
        </SidebarItemGroup>
      </Sidebar>

      {/* 右邊內容區域 */}
      <div className="flex-[8] flex flex-col">{children}</div>
    </div>
  );
}
