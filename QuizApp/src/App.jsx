import Header from "./components/custom/Header"
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1 py-6">
        <Outlet />
      </main>
    </div>
  )
}

export default App;