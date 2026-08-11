import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full min-h-screen bg-navy-50">
        {/* Add TopBar here */}
        <TopBar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
