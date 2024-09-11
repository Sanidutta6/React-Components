import { useEffect, useState } from "react"
import ProgressBar from "./components/ProgressBar"

function App() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timeOutId = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(timeOutId); // Clear the interval when progress reaches 100
          return 100; // Ensure progress doesn't go beyond 100
        }
        return prevProgress + 1; // Increment progress
      });
    }, 300);

    return () => clearInterval(timeOutId); // Cleanup interval on component unmount
  }, []);

  return (
    <main className="min-h-dvh min-w-full bg-slate-800 text-gray-300 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold tracking-tight mb-3">Progress Bar</h1>
      <ProgressBar progress={progress} />
    </main>
  )
}

export default App
