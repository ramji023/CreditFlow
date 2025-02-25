import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
