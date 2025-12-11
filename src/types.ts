export type Priority = 'High' | 'Medium' | 'Low';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  department: string;
  progress: number; 
  daysLeft: number;
  comments: number;
  attachments: number;
  members: string[]; 
}

export interface Column {
  id: string;
  title: string;
  count: number;
  tasks: Task[];
}

export interface BoardData {
  [key: string]: Column;
}