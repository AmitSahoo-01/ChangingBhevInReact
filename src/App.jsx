import React, { useState } from 'react'
import Navbar from './Navbar';

const App = () => {

  const [theme, setTheme] = useState("light");
  return (
    <div>
      <h1>The Theme is {theme}</h1>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App