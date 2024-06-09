import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"

function App() {
  const browserRouter=createBrowserRouter([
    {path:"/",element:<Home />}
  ])
  return (
    <RouterProvider router={browserRouter} />
  )
}
export default App
