function About() {
  return (
    <div class="container px-4 py-5" id="featured-3" style={{fontFamily: 'bubble', color: '	#71ab23'}}>
      
      <h2 class="pb-2 border-bottom">Sobre mi</h2>
      <div class="row g-4 py-4 row-cols-1 row-cols-lg-2">
        
        <div class="feature col">
          
          <div class="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-2">
            
            <img src="https://i.pinimg.com/736x/7a/9d/4c/7a9d4cee27860d4c063fbac373be1fba.jpg" className="rounded-circle" width="50" height="50" alt="descripcion"></img>

          </div>

          <h3 class="fs-2 text-body-emphasis">About</h3>
          <p>
            Ingeniera de software interesada en el desarrollo de software y videojuegos, me enfoco en mejorar mis habilidades y buenas practicas para construir proyectos que puedan resolver problemas reales.
          </p>
          <a href="/Contact" class="icon-link">
            aaaa
            <svg class="bi" aria-hidden="true">
              <use xlinkhref="#chevron-right"></use>
            </svg>
          </a>
        </div>
        <div class="feature col">
          
          <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
            
            <img src="https://pbs.twimg.com/profile_images/1841228611602239504/FX6sbHZx_400x400.jpg" className="rounded-circle" width="50" height="50" alt="descripcion"></img>

          </div>
          <h3 class="fs-2 text-body-emphasis">Skills</h3>
          <p>
            Java, JavaScript, TypeScript, Python, C++, Bases de datos, etc.
          </p>
          <a href="/Contact" class="icon-link">
            aaaaaa
            <svg class="bi" aria-hidden="true">
              <use xlinkhref="#chevron-right"></use>
            </svg>
          </a>
        </div>
        
        {/* <div class="feature col">
          
          <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            
            <svg class="bi" width="1em" height="1em" aria-hidden="true">
              <use xlinkhref="#toggles2"></use>
            </svg>
          </div><h3 class="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" class="icon-link">
            Call to action
            <svg class="bi" aria-hidden="true">
              <use xlinkhref="#chevron-right"></use>
            </svg>
          </a>
          </div>*/}
          
        
      </div>
    </div>
  );
}

export default About;
