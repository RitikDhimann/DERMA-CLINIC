import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import TreatmentDetail from './components/TreatmentDetail'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatment/:slug" element={<TreatmentDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
