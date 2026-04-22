document.addEventListener("DOMContentLoaded", function () {

  AOS.init();
  $(document).ready(function () {
    $('.clasesDes').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

  const modalContainer1 = document.getElementById('modalContainer1');

  if (modalContainer1) {
    fetch('views/login.html')
      .then(response => response.text())
      .then(html => modalContainer1.innerHTML = html)
      .then(() => {
        const btnAbrirModal1 = document.getElementById("btnAbrirModal1");
        const modalElement = document.getElementById("ModalForm1");

        if (btnAbrirModal1 && modalElement) {
          const modal = new bootstrap.Modal(modalElement);

          btnAbrirModal1.addEventListener("click", function () {
            modal.show();
          });
        }
      });
  }

  const modalContainer2 = document.getElementById('modalContainer2');

  if (modalContainer2) {
    fetch('views/registro.html')
      .then(response => response.text())
      .then(html => modalContainer2.innerHTML = html)
      .then(() => {
        const btnAbrirModal2 = document.getElementById("btnAbrirModal2");
        const modalElement = document.getElementById("ModalForm2");

        if (btnAbrirModal2 && modalElement) {
          const modal = new bootstrap.Modal(modalElement);

          btnAbrirModal2.addEventListener("click", function () {
            modal.show();
          });
        }
      });
  }

});