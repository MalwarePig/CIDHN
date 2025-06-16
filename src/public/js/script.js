/* document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const LogoHeader = document.getElementById('LogoHeader');
    const section = document.querySelector('section'); // O el section específico

    function headerEmpalmaSection(header, section) {
        const headerRect = header.getBoundingClientRect();
        const sectionRect = section.getBoundingClientRect();
        return (
            headerRect.bottom > sectionRect.top 
        );
    }

    window.addEventListener('scroll', () => {
        if (headerEmpalmaSection(header, section)) {
            header.classList.add('oculto'); // Oculta el header cuando #Inicio está visible
            LogoHeader.classList.add('oculto'); 
              console.log("Ya desapareci") 
        } else {
            console.log("dentro")
            header.classList.remove('oculto');  
            LogoHeader.classList.remove('oculto');
        }
    });
}); */


document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const section = document.querySelector('section'); // O el section específico
 const LogoHeader = document.getElementById('LogoHeader');

  let empalmado = false;
  let esperando = false;
  const umbral = 20; // Ajusta según tu diseño

  function checkEmpalme() {
    const headerRect = header.getBoundingClientRect();
    const sectionRect = section.getBoundingClientRect();
    const diferencia = headerRect.bottom - sectionRect.top;

    // Detecta empalme solo si el header está por debajo del section
    if (!empalmado && diferencia > umbral) {
      empalmado = true;
      header.classList.add('oculto'); // Oculta el header cuando #Inicio está visible
            LogoHeader.classList.add('oculto'); 
      console.log('El header se empalma con el section');
    } 
    // Detecta NO empalme si el header está por encima del section
    else if (empalmado && headerRect.bottom <= sectionRect.top) {
      empalmado = false;
      header.classList.remove('oculto');  
            LogoHeader.classList.remove('oculto');
      console.log('El header ya no se empalma con el section');
    }
    // Si está entre umbrales, no cambia el estado
  }

  window.addEventListener('scroll', function() {
    if (!esperando) {
      esperando = true;
      checkEmpalme();
      setTimeout(() => esperando = false, 100); // throttle de 100ms
    }
  });
});