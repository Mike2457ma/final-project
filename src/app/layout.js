import "../styles/globals.css";
import Layout from "../components/Layout";

export const metadata = {
  title: "聊天應用",
  description: "一個 Discord 風格的聊天應用",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
