import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import { AcercaDeMi } from "./components/AcercaDeMi"
import Habilidades from "./components/Habilidades"
import { Curriculo } from "./components/Curriculo"
import { Portafolio } from "./components/Portafolio"

function App() {
  const browserRouter=createBrowserRouter([
    {path:"/",element:<Home />},
    {path:"/AcercaDeMi",element:<AcercaDeMi />},
    {path:"/Habilidades",element:<Habilidades />},
    {path:"/Curriculo",element:<Curriculo />},
    {path:"/Portafolio",element:<Portafolio/>}
  ])
  return (
    <RouterProvider router={browserRouter} />
  )
}
export default App
