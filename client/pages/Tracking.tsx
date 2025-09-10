import { useState } from "react";
import { cn } from "@/lib/utils";
import { CalendarIcon, SearchIcon } from "lucide-react";

interface OrderStatus {
  type: "approved" | "pending" | "service-initiated" | "rejected";
  label: string;
}

interface Order {
  id: string;
  name: string;
  status: OrderStatus;
  enrollment: string;
  barcode: string;
  dateOfBirth: string;
  ssn: string;
  applicationSubmitted: string;
}

const statusConfig = {
  approved: {
    bg: "bg-success-50",
    text: "text-success-600",
    dot: "bg-success-600"
  },
  pending: {
    bg: "bg-warning-50", 
    text: "text-warning-500",
    dot: "bg-warning-500"
  },
  "service-initiated": {
    bg: "bg-brand-50",
    text: "text-brand-500", 
    dot: "bg-brand-500"
  },
  rejected: {
    bg: "bg-error-50",
    text: "text-error-600",
    dot: "bg-error-600"
  }
};

const mockOrders: Order[] = [
  {
    id: "1",
    name: "John Doe",
    status: { type: "approved", label: "Approved" },
    enrollment: "ESQU10248",
    barcode: "O049",
    dateOfBirth: "12-17-1999",
    ssn: "6658",
    applicationSubmitted: "2025-09-02 14:16:33"
  },
  {
    id: "2", 
    name: "John Doe",
    status: { type: "pending", label: "Pending" },
    enrollment: "ESQU10248",
    barcode: "O049",
    dateOfBirth: "12-17-1999",
    ssn: "6658",
    applicationSubmitted: "2025-09-02 14:16:33"
  },
  {
    id: "3",
    name: "John Doe", 
    status: { type: "service-initiated", label: "Service Initiated" },
    enrollment: "ESQU10248",
    barcode: "O049",
    dateOfBirth: "12-17-1999",
    ssn: "6658",
    applicationSubmitted: "2025-09-02 14:16:33"
  },
  {
    id: "4",
    name: "John Doe",
    status: { type: "service-initiated", label: "Service Initiated" },
    enrollment: "ESQU10248", 
    barcode: "O049",
    dateOfBirth: "12-17-1999",
    ssn: "6658",
    applicationSubmitted: "2025-09-02 14:16:33"
  },
  {
    id: "5",
    name: "John Doe",
    status: { type: "service-initiated", label: "Service Initiated" },
    enrollment: "ESQU10248",
    barcode: "O049", 
    dateOfBirth: "12-17-1999",
    ssn: "6658",
    applicationSubmitted: "2025-09-02 14:16:33"
  },
  {
    id: "6",
    name: "John Doe",
    status: { type: "pending", label: "Pending" },
    enrollment: "ESQU10248",
    barcode: "O049",
    dateOfBirth: "12-17-1999", 
    ssn: "6658",
    applicationSubmitted: "2025-09-02 14:16:33"
  },
  {
    id: "7",
    name: "John Doe",
    status: { type: "rejected", label: "Rejected" },
    enrollment: "ESQU10248",
    barcode: "O049",
    dateOfBirth: "12-17-1999",
    ssn: "6658",
    applicationSubmitted: "2025-09-02 14:16:33"
  },
  {
    id: "8",
    name: "John Doe",
    status: { type: "service-initiated", label: "Service Initiated" },
    enrollment: "ESQU10248",
    barcode: "O049",
    dateOfBirth: "12-17-1999",
    ssn: "6658", 
    applicationSubmitted: "2025-09-02 14:16:33"
  },
  {
    id: "9",
    name: "John Doe",
    status: { type: "approved", label: "Approved" },
    enrollment: "ESQU10248",
    barcode: "O049",
    dateOfBirth: "12-17-1999",
    ssn: "6658",
    applicationSubmitted: "2025-09-02 14:16:33"
  },
  {
    id: "10",
    name: "John Doe",
    status: { type: "approved", label: "Approved" },
    enrollment: "ESQU10248",
    barcode: "O049",
    dateOfBirth: "12-17-1999",
    ssn: "6658",
    applicationSubmitted: "2025-09-02 14:16:33"
  }
];

export default function Tracking() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-lg font-semibold text-text-primary">Track Your Orders</h2>

        {/* Date Filter Button */}
        <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-text-secondary shadow-sm hover:bg-gray-50 sm:w-auto w-full">
          <CalendarIcon className="h-5 w-5" />
          Date Filter
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-16">
        {/* Filter Tabs */}
        <div className="flex flex-wrap lg:flex-nowrap rounded-lg border border-gray-300 bg-white shadow-sm overflow-hidden">
          <button
            onClick={() => setActiveFilter("all")}
            className={cn(
              "flex items-center gap-2 px-3 lg:px-4 py-2 text-sm font-semibold whitespace-nowrap",
              activeFilter === "all"
                ? "bg-brand-500 text-white"
                : "bg-white text-text-secondary border-r border-gray-300 hover:bg-gray-50"
            )}
          >
            {activeFilter === "all" && <div className="h-2.5 w-2.5 rounded-full bg-white" />}
            All (295)
          </button>
          <button
            onClick={() => setActiveFilter("pending")}
            className={cn(
              "flex items-center gap-2 px-3 lg:px-4 py-2 text-sm font-semibold border-r border-gray-300 whitespace-nowrap",
              activeFilter === "pending"
                ? "bg-brand-500 text-white"
                : "bg-white text-text-secondary hover:bg-gray-50"
            )}
          >
            Pending
          </button>
          <button
            onClick={() => setActiveFilter("approved")}
            className={cn(
              "flex items-center gap-2 px-3 lg:px-4 py-2 text-sm font-semibold border-r border-gray-300 whitespace-nowrap",
              activeFilter === "approved"
                ? "bg-brand-500 text-white"
                : "bg-white text-text-secondary hover:bg-gray-50"
            )}
          >
            Approved
          </button>
          <button
            onClick={() => setActiveFilter("rejected")}
            className={cn(
              "flex items-center gap-2 px-3 lg:px-4 py-2 text-sm font-semibold border-r border-gray-300 whitespace-nowrap",
              activeFilter === "rejected"
                ? "bg-brand-500 text-white"
                : "bg-white text-text-secondary hover:bg-gray-50"
            )}
          >
            Rejected
          </button>
          <button
            onClick={() => setActiveFilter("service-initiated")}
            className={cn(
              "flex items-center gap-2 px-3 lg:px-4 py-2 text-sm font-semibold whitespace-nowrap",
              activeFilter === "service-initiated"
                ? "bg-brand-500 text-white"
                : "bg-white text-text-secondary hover:bg-gray-50"
            )}
          >
            Service Initiated
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2.5 rounded-xl border border-gray-300/50 bg-white px-4 py-2.5 lg:w-96 w-full">
          <SearchIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search by name or DOB (MM-DD-YYYY)"
            className="flex-1 text-sm text-text-secondary placeholder:text-gray-400 border-0 outline-none min-w-0"
          />
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-2.5">
        {mockOrders.map((order) => (
          <div
            key={order.id}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between rounded-xl border border-black/5 bg-white p-4 shadow-sm gap-4"
          >
            {/* Name and Status */}
            <div className="flex items-center gap-2.5">
              <h3 className="text-lg font-semibold text-text-primary">
                {order.name}
              </h3>
              <span className={cn(
                "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                statusConfig[order.status.type].bg,
                statusConfig[order.status.type].text
              )}>
                <div className={cn(
                  "h-2 w-2 rounded-full",
                  statusConfig[order.status.type].dot
                )} />
                {order.status.label}
              </span>
            </div>

            {/* Order Details */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10">
              {/* Mobile: 2x3 Grid, Desktop: Horizontal */}
              <div className="grid grid-cols-2 lg:flex lg:items-center gap-4 lg:gap-10">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400 line-clamp-1">Enrollment</span>
                  <span className="text-sm text-text-primary">{order.enrollment}</span>
                </div>

                <div className="hidden lg:block w-px h-9 bg-gray-300" />

                <div className="flex flex-col">
                  <span className="text-sm text-gray-400 line-clamp-1">Barcode</span>
                  <span className="text-sm text-text-primary">{order.barcode}</span>
                </div>

                <div className="hidden lg:block w-px h-9 bg-gray-300" />

                <div className="flex flex-col">
                  <span className="text-sm text-gray-400 line-clamp-1">Date of Birth</span>
                  <span className="text-sm text-text-primary">{order.dateOfBirth}</span>
                </div>

                <div className="hidden lg:block w-px h-9 bg-gray-300" />

                <div className="flex flex-col">
                  <span className="text-sm text-gray-400 line-clamp-1">SSN</span>
                  <span className="text-sm text-text-primary">{order.ssn}</span>
                </div>
              </div>

              <div className="hidden lg:block w-px h-9 bg-gray-300" />

              <div className="flex flex-col lg:min-w-0">
                <span className="text-sm text-gray-400 line-clamp-1">Application Submitted</span>
                <span className="text-sm text-text-primary break-all lg:break-normal">{order.applicationSubmitted}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-gray-300 pt-3 gap-3">
        <span className="text-sm font-medium text-text-secondary text-center sm:text-left">Page 1 of 100</span>

        <div className="flex items-center justify-center gap-3">
          <button className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 min-w-0">
            Previous
          </button>
          <button className="rounded-lg px-3 py-2 text-sm font-semibold text-text-primary hover:bg-gray-100 min-w-0">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
