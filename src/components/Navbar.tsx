import React from 'react'
import Logo1 from './Logo1'

function Navbar() {
  return (
    <div className="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
        <Logo1/>
        </div>
  )
}

export default Navbar