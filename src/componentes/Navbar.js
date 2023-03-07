const Navbar = () => {
    return (
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
             </button>
        <ul class="dropdown-menu">
            <li><a className="dropdown-item" href="/">Home</a></li>
              <li><a class="dropdown-item" href="usuarios">Usuarios</a></li>
         </ul>
        </div>
    )
}

export default Navbar