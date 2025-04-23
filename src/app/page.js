import "../styles/globals.css";

export default function Home() {
  return (
    <div className="flex-1 p-4 bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">歡迎使用聊天應用</h1>
        <p>請從左邊選擇一個分區開始聊天！</p>
      </div>
    </div>
  );
}
