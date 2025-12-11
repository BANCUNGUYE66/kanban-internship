import { Task } from "@/types";
import { Draggable } from "@hello-pangea/dnd";
import { MessageSquare, Paperclip, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TaskCardProps {
  task: Task;
  index: number;
}

export function TaskCard({ task, index }: TaskCardProps) {
  // Helper to determine badge color based on priority
  const getPriorityColor = (p: string) => {
    if (p === 'High') return 'text-red-600 bg-red-50 hover:bg-red-100';
    if (p === 'Medium') return 'text-orange-600 bg-orange-50 hover:bg-orange-100';
    return 'text-blue-600 bg-blue-50 hover:bg-blue-100';
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3 group hover:shadow-md transition-all cursor-grab active:cursor-grabbing"
        >
          {/* Header: Priority & Department */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Badge variant="secondary" className={`${getPriorityColor(task.priority)} border-none`}>
                {task.priority}
              </Badge>
              <Badge variant="secondary" className="text-gray-500 bg-gray-100 hover:bg-gray-200 border-none">
                {task.department}
              </Badge>
            </div>
            <span className="text-xs text-gray-400 font-medium">D-{task.daysLeft}</span>
          </div>

          {/* Title & Description */}
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-gray-900 leading-tight">{task.title}</h3>
              {/* More options button (hidden by default, shown on hover) */}
              <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100">
                <MoreHorizontal size={16} />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-1">{task.description}</p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1">
                {task.progress === 100 ? <span className="text-green-600 font-bold">✓ Done</span> : '↺ Progress'}
              </span>
              <span>{task.progress}%</span>
            </div>
            <Progress value={task.progress} className={`h-1.5 ${task.progress === 100 ? '[&>div]:bg-green-500' : '[&>div]:bg-violet-600'}`} />
          </div>

          {/* Footer: Users & Meta */}
          <div className="flex items-center justify-between mt-1">
            <div className="flex -space-x-2">
              {task.members.slice(0, 3).map((img, i) => (
                <Avatar key={i} className="h-6 w-6 border-2 border-white">
                  <AvatarImage src={img} />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              ))}
              {task.members.length > 3 && (
                 <div className="h-6 w-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] text-gray-500">
                    +{task.members.length - 3}
                 </div>
              )}
            </div>
            
            <div className="flex items-center gap-3 text-gray-400 text-xs font-medium">
              <div className="flex items-center gap-1">
                <MessageSquare size={14} /> {task.comments}
              </div>
              <div className="flex items-center gap-1">
                <Paperclip size={14} /> {task.attachments}
              </div>
            </div>
          </div>

        </div>
      )}
    </Draggable>
  );
}