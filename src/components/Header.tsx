import { 
  ChevronRight, 
  Plus, 
  Bookmark, 
  Share2, 
  MoreHorizontal, 
  Link as LinkIcon,
  LayoutGrid,
  Calendar as CalendarIcon,
  List,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Header() {
  return (
    <div className="flex flex-col border-b bg-white">
      
      {/* --- ROW 1: Breadcrumbs & Utilities --- */}
      <div className="flex h-14 items-center justify-between px-6 border-b border-gray-100">
        
        {/* Left: Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="hover:text-gray-900 cursor-pointer">My Pages</span>
          <ChevronRight size={14} />
          <span className="hover:text-gray-900 cursor-pointer">Emura Project</span>
          <ChevronRight size={14} />
          <span className="font-medium text-gray-900">Beling Pottery</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-gray-500 gap-2">
            <Plus size={16} /> New Tab
          </Button>
          <div className="h-4 w-[1px] bg-gray-200 mx-1"></div> {/* Vertical Divider */}
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Bookmark size={18} />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Share2 size={18} />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500">
            <MoreHorizontal size={18} />
          </Button>
        </div>
      </div>

      {/* --- ROW 2: Project Info & Team --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 py-6">
        
        {/* Project Details */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-200">
            {/* Logo placeholder */}
            <LayoutGrid size={24} /> 
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Beling-Pottery</h1>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                Timeline: <span className="text-gray-900">Aug 16, 2024 - Sep 16, 2024</span>
              </span>
              <span className="flex items-center gap-1">
                Client: <span className="text-gray-900">Ben Barlow</span>
              </span>
              <span className="flex items-center gap-2">
                Status: <Badge variant="secondary" className="text-orange-600 bg-orange-50 hover:bg-orange-100 border-none">In Progress</Badge>
              </span>
            </div>
          </div>
        </div>

        {/* Team Actions */}
        <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
                <Avatar className="h-8 w-8 border-2 border-white"><AvatarImage src="https://i.pravatar.cc/100?img=1" /></Avatar>
                <Avatar className="h-8 w-8 border-2 border-white"><AvatarImage src="https://i.pravatar.cc/100?img=2" /></Avatar>
                <Avatar className="h-8 w-8 border-2 border-white"><AvatarImage src="https://i.pravatar.cc/100?img=3" /></Avatar>
                <Avatar className="h-8 w-8 border-2 border-white"><AvatarImage src="https://i.pravatar.cc/100?img=4" /></Avatar>
            </div>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white gap-2 rounded-lg">
                <Plus size={16} /> Invite
            </Button>
        </div>
      </div>

      {/* --- ROW 3: Tabs & Filters --- */}
      <div className="px-6 pb-2 flex items-center justify-between">
        <Tabs defaultValue="kanban" className="w-full">
            <div className="flex items-center justify-between">
                <TabsList className="bg-transparent p-0 h-auto gap-6">
                    <TabsTrigger value="kanban" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-violet-600 data-[state=active]:text-violet-600 rounded-none px-0 pb-3 text-gray-500 gap-2">
                        <LayoutGrid size={16} /> Kanban
                    </TabsTrigger>
                    <TabsTrigger value="calendar" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-violet-600 rounded-none px-0 pb-3 text-gray-500 gap-2">
                        <CalendarIcon size={16} /> Calendar
                    </TabsTrigger>
                    <TabsTrigger value="gantt" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-violet-600 rounded-none px-0 pb-3 text-gray-500 gap-2">
                        <List size={16} /> Gantt
                    </TabsTrigger>
                    <TabsTrigger value="timeline" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-violet-600 rounded-none px-0 pb-3 text-gray-500 gap-2">
                        <Clock size={16} /> Timeline
                    </TabsTrigger>
                </TabsList>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Button variant="ghost" size="sm" className="gap-2">
                        <LinkIcon size={16} /> Integrate
                    </Button>
                    <div className="h-6 w-6 rounded bg-green-100 flex items-center justify-center">
                       {/* Example Integration Icon (Google Sheets or Slack usually) */}
                       <span className="text-green-700 font-bold text-xs">G</span> 
                    </div>
                </div>
            </div>
        </Tabs>
      </div>

    </div>
  );
}