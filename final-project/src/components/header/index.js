import React from 'react'

const index = () => {
  const handleClick = (e)=>{
    sessionStorage.removeItem("token");
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div class="navbar-nav mx-auto">
        <a class="nav-item nav-link" href="/home/s">Home</a>
        <a class="nav-item nav-link" href="/favorites">Favorites</a>
        <a class="nav-item nav-link" href="/" onClick={handleClick}>Log out</a>
      </div>
      <h4 class="nav-item text-secondary mx-auto">user</h4>
    </nav>
  )
}

export default index