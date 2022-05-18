// const imageABase64 = (element) => {
//   if(!validateImageFormat(element.target.value)) {
//     alert("Formato de imagen inválido, debe ser .png o .jpg");
//     element.target.value = '';
//     return false;
//   }
//   if(!element||!element.currentTarget.files)
//       return;
//   var file = element.currentTarget.files[0];
//   var reader = new FileReader();
//   reader.onloadend = function() {
//     setFormValues({...formValues, image: reader.result})
//   }
//   reader.readAsDataURL(file);    
// }

// export default imageABase64;