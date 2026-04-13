import AdminSidebar from "@/components/sidebar/admin-sidebar";
import AdminHeader from "@/components/header/admin-header";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full text-sm bg-[#000000]">
      <AdminSidebar />
      <div className="flex flex-1 flex-col h-full bg-[#0a0a0a] overflow-hidden">
        <AdminHeader />
        <div className="flex-1 overflow-y-auto px-6 lg:px-10 py-8 scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
}
