import React from 'react'
import Comp1 from './components/Comp1.jsx'
import Comp2 from './components/Comp2.jsx'

// Data Provider
import { DataProvider } from './contexts/DataContext.jsx'

const App = () => {
  return (
    <>
      <DataProvider>
        <Comp1 />
        <Comp2 />
      </DataProvider>
    </>
  )
}

export default App