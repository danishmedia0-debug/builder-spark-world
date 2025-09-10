import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Activity, Clock, Bell } from "lucide-react";
import { CalendarIcon, SearchIcon } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-300">
        {/* Logo */}
        <div className="flex h-24 items-center border-b border-gray-300 px-9">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/758fab880a52fbe0404332df4316126929ea48f5?width=359" 
            alt="Sequoia Internal" 
            className="h-11 w-auto"
          />
        </div>
        
        {/* Navigation */}
        <div className="mt-5 px-4.5">
          <div className="mb-3 px-4 text-xs font-medium text-text-primary">
            MAIN MENU
          </div>
          <nav className="space-y-3">
            <a
              href="#"
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-2 text-base font-medium",
                "text-text-primary hover:bg-sidebar-accent"
              )}
            >
              <Activity className="h-6 w-6" />
              Dashboard
            </a>
            <a
              href="/"
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-2 text-base font-medium",
                "bg-brand-50 border border-brand-500 text-brand-500"
              )}
            >
              <Clock className="h-6 w-6 fill-current" />
              Tracking
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        {/* Header */}
        <header className="flex h-24 items-center justify-between border-b border-gray-300 bg-white px-7">
          <h1 className="text-2xl font-bold text-text-primary">Tracking</h1>
          
          <div className="flex items-center gap-3">
            {/* Notification Bell */}
            <button className="relative rounded-full border border-gray-300 bg-white p-2.5">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
            </button>
            
            {/* User Profile */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/86ee0b856cf76cbe651a463379d955fab7a14e17?width=88"
              alt="User profile"
              className="h-11 w-11 rounded-full border-2 border-gray-300"
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
