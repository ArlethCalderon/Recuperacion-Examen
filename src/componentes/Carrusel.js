const Carrusel = () => {
  return (
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div className="carousel-item active">
        <img src={require("../imagenes/Pago.jpg")} class="d-block w-100" alt="Pago"/>
      </div>
      <div class="carousel-item">
        <img src={require("../imagenes/img2.jpg")} class="d-block w-100" alt="Escuela"/>
      </div>
      <div class="carousel-item">
        <img src= {require("../imagenes/bootcamp.jpg")} className="d-block w-100" alt="bootcamp"/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

  export default Carrusel