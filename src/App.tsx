import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="flex h-screen w-full bg-gray-50 text-gray-900">
      
      <aside className="w-64 bg-white border-r hidden md:block">
        <Sidebar />
      </aside>

      <main className="flex-1 flex flex-col">
        {/* The new Header goes here */}
        <Header /> 
        
        {/* Kanban Board Area */}
        <div className="flex-1 p-8 overflow-auto bg-gray-50/50">
          {/* We will build the board next */}
          <h2 className="text-lg font-semibold mb-4">Kanban Board Area</h2>
        </div>
      </main>
    </div>
  )
}

export default App