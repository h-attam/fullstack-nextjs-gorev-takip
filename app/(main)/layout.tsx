import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full text-sm">
      <Sidebar />
      <div className="flex flex-1 flex-col h-full bg-[#0a0a0a] overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto px-6 lg:px-10 py-8 scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
}
