import { 
  LayoutDashboard, 
  CheckSquare, 
  FileText, 
  PieChart, 
  Users, 
  Folder,
  Search
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <div className="flex h-full w-full flex-col gap-6 bg-white p-4">
      
      {/* 1. User Profile Section */}
      <div className="flex items-center gap-3 px-2">
        <Avatar className="h-10 w-10 border">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>JM</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-left">
          <span className="text-sm font-semibold text-gray-900">Judha Maygustya</span>
          <span className="text-xs text-gray-500">judha@emura.studio</span>
        </div>
      </div>

      {/* 2. Search Bar */}
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
        <Input placeholder="Search" className="pl-8 bg-gray-50 border-none" />
      </div>

      {/* 3. Main Menu */}
      <div className="flex flex-col gap-1">
        <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Main Menu</p>
        
        {/* We use a helper function or map here usually, but let's keep it simple for now */}
        <SidebarLink icon={<LayoutDashboard size={20} />} label="Dashboard" />
        <SidebarLink icon={<CheckSquare size={20} />} label="My to-do" />
        <SidebarLink icon={<Users size={20} />} label="Request from" />
        <SidebarLink icon={<PieChart size={20} />} label="Reports" />
      </div>

      {/* 4. Incoming Deadline */}
      <div className="flex flex-col gap-1 mt-4">
        <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Incoming Deadline</p>
        <SidebarLink icon={<FileText size={20} />} label="Beling Mobile App" />
        <SidebarLink icon={<FileText size={20} />} label="Landingpage Beling" />
        <SidebarLink icon={<FileText size={20} />} label="Beling Admin CMS" />
      </div>

       {/* 5. My Projects */}
       <div className="flex flex-col gap-1 mt-4">
        <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">My Projects</p>
        <SidebarLink icon={<Folder size={20} />} label="Emura Project" />
        <SidebarLink icon={<Folder size={20} />} label="Weekly Shot" />
        <SidebarLink icon={<Folder size={20} />} label="Daily Exploration" />
      </div>
    </div>
  );
}

// A small internal component to avoid repeating the button code
function SidebarLink({ icon, label }: { icon: any; label: string }) {
  return (
    <Button variant="ghost" className="justify-start gap-3 text-gray-500 hover:text-violet-600 hover:bg-violet-50">
      {icon}
      <span>{label}</span>
    </Button>
  );
}