import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen w-full bg-gray-50 text-gray-900">
      
      {/* Sidebar Area */}
      <aside className="w-64 bg-white border-r hidden md:block">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 border-b bg-white p-4 flex items-center justify-between">
          Header (Breadcrumbs & Tabs)
        </header>
        
        {/* Kanban Board Area */}
        <div className="flex-1 p-8 overflow-auto">
          Kanban Board will go here...
        </div>
      </main>
    </div>
  )
}

export default App