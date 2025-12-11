import { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd';
import { initialData } from '../data';
import { TaskCard } from './TaskCard';
import { MoreHorizontal, Plus } from 'lucide-react';
import { Button } from './ui/button';

export function KanbanBoard() {
  const [columns, setColumns] = useState(initialData);

  // This function is called automatically when a user stops dragging
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    // 1. If dropped outside a valid droppable area, do nothing
    if (!destination) return;

    // 2. If dropped in the same place, do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // 3. Find the column where we started and where we ended
    const startColumn = columns[source.droppableId];
    const finishColumn = columns[destination.droppableId];

    // --- CASE A: Moving within the same column ---
    if (startColumn === finishColumn) {
      const newTasks = Array.from(startColumn.tasks);
      // Remove the item from the old index
      const [movedTask] = newTasks.splice(source.index, 1);
      // Insert it at the new index
      newTasks.splice(destination.index, 0, movedTask);

      const newColumn = {
        ...startColumn,
        tasks: newTasks,
      };

      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });
      return;
    }

    // --- CASE B: Moving to a different column ---
    // Remove from start column
    const startTasks = Array.from(startColumn.tasks);
    const [movedTask] = startTasks.splice(source.index, 1);
    
    // Add to finish column
    const finishTasks = Array.from(finishColumn.tasks);
    finishTasks.splice(destination.index, 0, movedTask);

    // Update state with new columns
    setColumns({
      ...columns,
      [startColumn.id]: { ...startColumn, tasks: startTasks },
      [finishColumn.id]: { ...finishColumn, tasks: finishTasks },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex h-full gap-6 overflow-x-auto pb-4">
        {Object.values(columns).map((column) => {
           
           // Determine the color of the little dot header based on column title
           let dotColor = "bg-gray-300";
           if(column.title === "To - Do") dotColor = "bg-violet-600";
           if(column.title === "On Progress") dotColor = "bg-orange-400";
           if(column.title === "In Review") dotColor = "bg-blue-400";
           if(column.title === "Completed") dotColor = "bg-green-500";

           return (
          <div key={column.id} className="flex h-full min-w-[300px] flex-col rounded-lg">
            
            {/* Column Header */}
            <div className="mb-4 flex items-center justify-between p-1">
              <div className="flex items-center gap-2">
                 <div className={`h-2 w-2 rounded-full ${dotColor}`} />
                <h2 className="text-sm font-bold text-gray-700">{column.title}</h2>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs font-medium text-gray-500">
                  {column.tasks.length}
                </span>
              </div>
              <div className="flex gap-1">
                 <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400"><Plus size={16}/></Button>
                 <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400"><MoreHorizontal size={16}/></Button>
              </div>
            </div>

            {/* Droppable Area */}
            <Droppable droppableId={column.id}>
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`flex flex-1 flex-col gap-3 transition-colors ${
                    snapshot.isDraggingOver ? 'bg-violet-50/50 rounded-lg' : ''
                  }`}
                >
                  {column.tasks.map((task, index) => (
                    <TaskCard key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                  
                  {/* "Add new" button at bottom of list */}
                  <Button 
                    variant="ghost" 
                    className="w-full justify-center text-gray-400 hover:text-violet-600 hover:bg-white border border-transparent hover:border-violet-200 border-dashed"
                  >
                    <Plus size={16} className="mr-2" /> Add new
                  </Button>
                </div>
              )}
            </Droppable>
          </div>
        )})}
      </div>
    </DragDropContext>
  );
}