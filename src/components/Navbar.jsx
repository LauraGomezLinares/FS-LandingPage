function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-md sticky-top border-bottom"
      data-bs-theme="dark" style={{color: '#fff', backgroundColor: '#0689e4', fontFamily: 'bubble', fontSize: 26}}>
      
      <div class="container">
        
        <a class="navbar-brand d-md-none" href="#">    
            <img src="https://i.pinimg.com/474x/db/86/97/db8697a3829e34079b0b3db8bd318796.jpg"
            width="70" height="55" className="rounded-circle m-2" aria-hidden='false' alt="descripcion"></img>
          Dinosaur
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          aria-controls="offcanvas"
          aria-label="Toggle navigation"
        >
          
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
        >
          
          <div class="offcanvas-header">
            
            <h5 class="offcanvas-title" id="offcanvasLabel">
              Aperture
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            
            <ul class="navbar-nav flex-grow-1 justify-content-between">
              
              <li class="nav-item">
                <a class="nav-link" href="#" aria-label="Aperture">
                  
                  <img src="https://i.pinimg.com/474x/db/86/97/db8697a3829e34079b0b3db8bd318796.jpg"
            width="70" height="55" className="rounded-circle m-2" aria-hidden='false' alt="descripcion"></img>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Sobre mí
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Enterprise
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Support
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" aria-label="Cart">
                  
                  <img src="https://tr.rbxcdn.com/180DAY-b3f2f8376f04813d283818d51841e229/420/420/Hat/Webp/noFilter"
            width="70" height="55" className="rounded-circle m-2" aria-hidden='false' alt="descripcion"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
