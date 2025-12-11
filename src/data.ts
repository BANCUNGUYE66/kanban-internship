import { BoardData } from './types';

export const initialData: BoardData = {
  todo: {
    id: 'todo',
    title: 'To - Do',
    count: 4,
    tasks: [
      {
        id: 't1',
        title: 'Develop API Endpoints',
        description: 'Build the necessary API endpoints',
        priority: 'High',
        department: 'Back-End',
        progress: 0,
        daysLeft: 149,
        comments: 2,
        attachments: 1,
        members: ['https://i.pravatar.cc/100?img=1', 'https://i.pravatar.cc/100?img=2']
      },
      {
        id: 't2',
        title: 'Ensure Responsive Design',
        description: 'Test and adjust the UI for responsive',
        priority: 'Low',
        department: 'Front-End',
        progress: 0,
        daysLeft: 148,
        comments: 8,
        attachments: 7,
        members: ['https://i.pravatar.cc/100?img=3']
      },
      {
        id: 't3',
        title: 'Implement UI Components',
        description: 'Develop front-end components',
        priority: 'Medium',
        department: 'Front-End',
        progress: 0,
        daysLeft: 147,
        comments: 1,
        attachments: 9,
        members: ['https://i.pravatar.cc/100?img=4', 'https://i.pravatar.cc/100?img=5']
      }
    ]
  },
  onProgress: {
    id: 'onProgress',
    title: 'On Progress',
    count: 4,
    tasks: [
      {
        id: 't4',
        title: 'Create Clickable Prototype',
        description: 'Landing page for management app',
        priority: 'High',
        department: 'UI/UX Design',
        progress: 30,
        daysLeft: 146,
        comments: 23,
        attachments: 18,
        members: ['https://i.pravatar.cc/100?img=6', 'https://i.pravatar.cc/100?img=7']
      },
      {
        id: 't5',
        title: 'Choose Tech Stack',
        description: 'Decide on the FE & BE technologies',
        priority: 'Medium',
        department: 'UI/UX Design',
        progress: 20,
        daysLeft: 145,
        comments: 71,
        attachments: 28,
        members: ['https://i.pravatar.cc/100?img=8', 'https://i.pravatar.cc/100?img=9']
      }
    ]
  },
  inReview: {
    id: 'inReview',
    title: 'In Review',
    count: 4,
    tasks: [
      {
        id: 't6',
        title: 'Design High-Fidelity',
        description: 'Develop detailed and polished UI',
        priority: 'Low',
        department: 'UI/UX Design',
        progress: 40,
        daysLeft: 144,
        comments: 6,
        attachments: 12,
        members: ['https://i.pravatar.cc/100?img=10']
      },
      {
        id: 't7',
        title: 'Design High-Fidelity v2',
        description: 'Inserting the design into the mockup',
        priority: 'Low',
        department: 'UI/UX Design',
        progress: 44,
        daysLeft: 143,
        comments: 8,
        attachments: 18,
        members: ['https://i.pravatar.cc/100?img=11']
      }
    ]
  },
  completed: {
    id: 'completed',
    title: 'Completed',
    count: 4,
    tasks: [
      {
        id: 't8',
        title: 'Wireframing',
        description: 'Create Low-Fidelity Wireframes',
        priority: 'High',
        department: 'UI/UX Design',
        progress: 100,
        daysLeft: 142,
        comments: 13,
        attachments: 2,
        members: ['https://i.pravatar.cc/100?img=12', 'https://i.pravatar.cc/100?img=13', 'https://i.pravatar.cc/100?img=14', 'https://i.pravatar.cc/100?img=15']
      }
    ]
  }
};