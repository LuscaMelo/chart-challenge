import { Chart } from "./components/Chart"

function App() {

  return (
    <div className="flex flex-col min-h-[100vh] justify-center items-center bg-theme-500">
      <h1 className="hidden">Chart Challenge</h1>
      <Chart />
    </div>
  )
}

export default App
