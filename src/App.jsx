import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import LandingPage from "./pages/LandingPage"
import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions"
import Budgets from "./pages/Budgets"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="budget" element={<Budgets/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
