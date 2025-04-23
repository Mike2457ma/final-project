import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex-1 p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold">歡迎使用聊天應用</h1>
          <p>請從左邊選擇一個分區開始聊天！</p>
        </div>
      </div>
    </Layout>
  );
}
