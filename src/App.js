import React from "react"

import Cats from "./components/Cats"
import Navbar from "./components/Navbar"
import Modal from "./components/Modal"

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main className="pb-5">
        <Cats />
      </main>
      <Modal />
    </div>
  )
}

export default App
