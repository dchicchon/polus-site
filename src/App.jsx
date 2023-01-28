import { Routes, Route } from "react-router-dom";
import { routes } from "./utils/routes";
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Privacy from './pages/Privacy/Privacy'
import Terms from './pages/Terms/Terms'

const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.ABOUT} element={<About />} />
      <Route path={routes.PRIVACY} element={<Privacy />} />
      <Route path={routes.TERMS} element={<Terms />} />
    </Routes>
  )
}

export default App;