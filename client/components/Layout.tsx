import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { Activity, Clock, Bell, Menu, X } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-300 transform transition-transform duration-300 ease-in-out",
          "lg:translate-x-0",
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0",
        )}
      >
        {/* Mobile Close Button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-2 lg:hidden"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Logo */}
        <div className="flex h-24 items-center border-b border-gray-300 px-6 lg:px-9">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/758fab880a52fbe0404332df4316126929ea48f5?width=359"
            alt="Sequoia Internal"
            className="h-8 lg:h-11 w-auto"
          />
        </div>

        {/* Navigation */}
        <div className="mt-5 px-4">
          <div className="mb-3 px-4 text-xs font-medium text-text-primary">
            MAIN MENU
          </div>
          <nav className="space-y-3">
            <a
              href="#"
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-2 text-base font-medium",
                "text-text-primary hover:bg-sidebar-accent",
              )}
            >
              <Activity className="h-6 w-6" />
              Dashboard
            </a>
            <a
              href="/"
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-2 text-base font-medium",
                "bg-brand-50 border border-brand-500 text-brand-500",
              )}
            >
              <Clock className="h-6 w-6 fill-current" />
              Tracking
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="flex h-16 lg:h-24 items-center justify-between border-b border-gray-300 bg-white px-4 lg:px-7">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

          <h1 className="text-xl lg:text-2xl font-bold text-text-primary">
            Tracking
          </h1>

          <div className="flex items-center gap-2 lg:gap-3">
            {/* Notification Bell */}
            <button className="relative rounded-full border border-gray-300 bg-white p-2 lg:p-2.5">
              <Bell className="h-5 w-5 lg:h-6 lg:w-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 lg:h-3 lg:w-3 rounded-full bg-red-500"></span>
            </button>

            {/* User Profile */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/86ee0b856cf76cbe651a463379d955fab7a14e17?width=88"
              alt="User profile"
              className="h-8 w-8 lg:h-11 lg:w-11 rounded-full border-2 border-gray-300"
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
