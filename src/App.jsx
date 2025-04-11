// import { useState } from 'react'
import { Pagination } from './components/MainCanvas'
import './App.css'
import Header from "./components/Header"
import MainCanvas from './components/MainCanvas'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainCanvas />
      <Pagination />
    </>
  )
}

export default App
