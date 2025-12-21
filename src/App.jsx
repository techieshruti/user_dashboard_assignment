import Dashboard from './pages/Dashboard'
import UserCardDetails from './pages/UserCardDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter basename="/user_dashboard_assignment">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/:id" element={<UserCardDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App