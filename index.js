
const projects = [
    {
       "uuid":"4",
        "name":"Lorem ipsum",
       "description":"Lorem ipsum",
       "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "image":"https://github.com/ironhack-jc/mid-term-api/blob/main/4.jpg?raw=true",
       "completed_on":"June 10, 2021"
    },
    {
       "uuid":"3",
       "name":"Vectorify",
       "description":"User Experience Design",
       "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "image":"https://github.com/ironhack-jc/mid-term-api/blob/main/3.jpg?raw=true",
       "completed_on":"June 10, 2021"
    },
    {
       "uuid":"2",      
       "name":"Dashcoin",
       "description":"Web Development",
       "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "image":"https://github.com/ironhack-jc/mid-term-api/blob/main/2.jpg?raw=true",
       "completed_on":"June 10, 2021"
    },
    {
       "uuid":"1",     
       "name":"Simplify",
       "description":"UI Design & App Development",
       "content":"Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et! Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt quix duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.<br><br>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad e dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad e dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nis cillum minim tempor enim.",
       "image":"https://github.com/ironhack-jc/mid-term-api/blob/main/1.jpg?raw=true",
       "completed_on":"June 22, 2021"
    }
 ];
 
 const latestProjects = projects.slice(-3).reverse();

function validateContactForm() {
    
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
  
    
    if (fullName.toLowerCase() === 'ironhack') {
      alert("Usted no puede ser Ironhack, porque yo soy Ironhack");
      return false;
    }
  

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, introduzca un correo electrónico válido");
      return false;
    }
  
  
    if (!message) {
      alert("Por favor, escriba su mensaje");
      return false;
    }
  
    return true;
  }
  

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  

    if (validateContactForm()) {
      alert("Formulario válido. Enviando...");
    }
  });
  