function App() {
  return (
    <div className="flex h-screen w-full bg-gray-50 text-gray-900">
      {/* Sidebar will go here */}
      <aside className="w-64 bg-white border-r p-4 hidden md:block">
        Sidebar
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 border-b bg-white p-4 flex items-center justify-between">
          Header
        </header>
        
        {/* Kanban Board Area */}
        <div className="flex-1 p-8 overflow-auto">
          Kanban Board
        </div>
      </main>
    </div>
  )
}

export default App