
import Swal from 'sweetalert2';
  

  export function externalFunction(formValues) {
    // Realiza las acciones que desees con los datos del formulario
    event.preventDefault();
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    );
    console.log('Datos del formulario: ', formValues);
  }

