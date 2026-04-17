function Footer() {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-4 my-1 border-top"
    style={{ backgroundColor: '#71ab23', fontFamily: 'bubble', fontSize: 24}}>
      
      <p class="col-md-4 mb-0 text-body-secondary">© 2026 creado por Drox</p>
      {/* <a
        href="/"
        class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        aria-label="Bootstrap"
      >
        
        
        <svg class="bi me-2" width="40" height="32" aria-hidden="true">
          <use xlinkref="#bootstrap"></use>
        </svg>
      </a>*/}
      <a href="https://github.com/LauraGomezLinares" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        aria-label="github" target="_blank" rel="noreferrer">
         <img src="https://static.wikia.nocookie.net/hellokitty/images/3/30/Sanrio_Characters_Pompompurin_Image006.png" 
         width="70" height="55" className="rounded-circle m-2" aria-hidden='false' alt="descripcion"></img>
      </a>
      
      <ul class="nav col-md-4 justify-content-end">
        
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">
            FAQs
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">
            Contactame
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">
            Form
          </a>
        </li>
        {/*<li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">
            FAQs
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">
            About
          </a>
        </li> */}
        
      </ul>
    </footer>
  );
}

export default Footer;
