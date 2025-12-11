import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { KanbanBoard } from "./components/KanbanBoard"; 

function App() {
  return (
    <div className="flex h-screen w-full bg-gray-50 text-gray-900">
      
      <aside className="w-64 bg-white border-r hidden md:block">
        <Sidebar />
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden"> {/* Added overflow-hidden to fix scrolling */}
        <Header /> 
        
        {/* Kanban Board Area */}
        <div className="flex-1 overflow-x-auto overflow-y-hidden bg-gray-50/50 p-6">
            <KanbanBoard />
        </div>
      </main>
    </div>
  )
}

export default App