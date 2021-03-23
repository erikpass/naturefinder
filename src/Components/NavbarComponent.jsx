import React from 'react'

export default function NavbarComponent() {
  return (
    <header className="nav-component">
      <span>Data source: </span>
      <div>
        <a href="https://explorer.natureserve.org/">
          <img className="w-12 h-12 mt-2.5" src="/natureserve.jpg" alt="natureserve" />
          <span> NatureServe</span>
        </a>
      </div>
      
    </header>
  )
}
