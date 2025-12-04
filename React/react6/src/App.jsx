import React from 'react'
import Comp1 from './components/Comp1.jsx'
import Comp2 from './components/Comp2.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './contexts/DataContext.jsx'

const App = () => {
  return (
    <>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Comp1 />} />
            <Route path="/other" element={<Comp2 />} />
          </Routes>
        </Router>
      </DataProvider>
    </>
  )
}

export default App