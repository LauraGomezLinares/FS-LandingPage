

function Hero() {
    const mybg = {
        backgroundImage: `url(https://pbs.twimg.com/media/GtN0TzVWIAACGI5.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '98.3%',   
    };
    

  return (
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary" style={mybg}>
      
      <div class="col-md-6 p-lg-5 mx-auto my-5" style={{fontFamily: 'bubble', color: '#fff'}}>
        
        <h1 class="display-3 fw-bold">Hola, Soy Drox</h1>
        <h3 class="fw-normal mb-3">
          Ingenier@ de Software
        </h3>
        <div class="d-flex gap-3 justify-content-center lead fw-normal">
          
          <a class="icon-link" href="#">
            Learn more
            <svg class="bi" aria-hidden="true">
              <use xlinkhref="#chevron-right"></use>
            </svg>
          </a>
          <a class="icon-link" href="#">
            Buy
            <svg class="bi" aria-hidden="true">
              <use xlinkhref="#chevron-right"></use>
            </svg>
          </a>
        </div>
      </div>
      <div class="product-device shadow-sm d-none d-md-block"></div>
      <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
  );
}

export default Hero;
