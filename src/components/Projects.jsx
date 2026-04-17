function Projects() {
   //

   const bg1 = {
        backgroundImage: `url(https://i.redd.it/k43uamsafppe1.jpeg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',   
    };
    //
    const bg2 = {
        backgroundImage: `url(https://media.sketchfab.com/models/b4baee967d934bafa842c876e37aed6c/thumbnails/07b8e9e4fe91401ea3d4dd3ac1445e32/blob.jpeg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',   
    };

  return (
    <div className="container px-4 py-5" id="custom-cards" style={{fontFamily: 'bubble', color: '#71ab23'}}>
      <h2 className="pb-2 border-bottom">Proyectos</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={bg1}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Proyecto Cruceros
              </h3>

              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <a href="https://github.com/esthersinche/v2_ProyFin_Marcos" target="_blank" rel="noreferrer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="github"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                  </a>
                </li>
                  {/* <li className="d-flex align-items-center me-3">
                  <svg
                    className="bi me-2"
                    width="1em"
                    height="1em"
                    role="img"
                    aria-label="Location"
                  >
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                  <small>Earth</small>
                </li>

                <li className="d-flex align-items-center">
                  <svg
                    className="bi me-2"
                    width="1em"
                    height="1em"
                    role="img"
                    aria-label="Duration"
                  >
                    <use xlinkHref="#calendar3"></use>
                  </svg>
                  <small>3d</small>
                </li>*/}
                
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: "url('https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/14/4d/ff/a6.jpg')" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Proyecto Pizzeria
              </h3>

              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <a href="https://github.com/esthersinche/PizzaTime" target="_blank" rel="noreferrer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                  </a>
                </li>
                  {/*<li className="d-flex align-items-center me-3">
                  <svg
                    className="bi me-2"
                    width="1em"
                    height="1em"
                    role="img"
                    aria-label="Location"
                  >
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                  <small>Pakistan</small>
                </li>

                <li className="d-flex align-items-center">
                  <svg
                    className="bi me-2"
                    width="1em"
                    height="1em"
                    role="img"
                    aria-label="Duration"
                  >
                    <use xlinkHref="#calendar3"></use>
                  </svg>
                  <small>4d</small>
                </li> */}
                
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={bg2}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Proyecto Coming Soon
              </h3>

              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                  {/* <li className="d-flex align-items-center me-3">
                  <svg
                    className="bi me-2"
                    width="1em"
                    height="1em"
                    role="img"
                    aria-label="Location"
                  >
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                  <small>California</small>
                </li>

                <li className="d-flex align-items-center">
                  <svg
                    className="bi me-2"
                    width="1em"
                    height="1em"
                    role="img"
                    aria-label="Duration"
                  >
                    <use xlinkHref="#calendar3"></use>
                  </svg>
                  <small>5d</small>
                </li>*/}
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
