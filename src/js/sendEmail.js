
import Swal from 'sweetalert2';
import  { nodemailer } from "nodemailer";
import { loadEnv } from 'dotenv';

  export function externalFunction(formValues) {
    // Realiza las acciones que desees con los datos del formulario
    event.preventDefault()
    const nameClient =formValues.elements['name'].value;
    const emailClient =formValues.elements['email'].value;
    const subjectClient =formValues.elements['subject'].value;
    const messageClient =formValues.elements['message'].value;
    
    const dataEmail = {
      nameClient,
      emailClient,
      subjectClient,
      messageClient
    }
    
    sendEmail(dataEmail);
    Swal.fire(
      'Nos hemos puesto en contacto contigo!',
    `Estimado ${nameClient}, se ha enviado un correo a ${emailClient}, con asunto: ${subjectClient}\n y mensaje: ${messageClient}`,
      'success'
    ).then((result)=>{
      if(result.isConfirmed){
        formValues.elements['name'].value ="";
        formValues.elements['email'].value ="";
        formValues.elements['subject'].value ="";
        formValues.elements['message'].value ="";
      }
    });
    console.log('Datos del formulario: ', formValues);
  }



  function sendEmail(dataEmail) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: dataEmail.emailClient,
      to: process.env.EMAIL,
      subject: dataEmail.subjectClient,
      text: `Hola soy ${dataEmail.nameClient}, mi mensaje es:\n\n${dataEmail.messageClient}.`,
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: error
        });
        console.log(error);
      } else {
        console.log(info.response);
        
      }
    });
  }

