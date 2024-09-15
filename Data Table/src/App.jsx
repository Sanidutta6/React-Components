import DataTable from "./components/DataTable"
import data from "./conf/data.json"

function App() {
  const tableHeader = Object.keys(data.products[0]);

  return (
    <main className="min-h-dvh w-full py-5 bg-slate-900 text-slate-300 flex items-center justify-center">
      <DataTable header={tableHeader} data={data.products} />
    </main>
  )
}

export default App
