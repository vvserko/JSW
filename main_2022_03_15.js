const form = document.forms[0];
/*const lastNameInput = document.body.querySelector('#validationCustom02');
lastNameInput.addEventListener('input', function(){
    if(!this.value.includes(' ')){
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
        this.nextElementSibling.className = 'valid-feedback';
    } else{
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        this.nextElementSibling.className = 'invalid-feedback';
    }
})*/
const state = document.body.querySelector('select');
const check = document.body.querySelector()
form.addEventListener('submit', event => {    
    if(state.selectedIndex > 0){        
        state.classList.remove('is-invalid');
        state.classList.add('is-valid'); 
        
        event.preventDefault();
    } else { 

        state.classList.remove('is-valid');
        state.classList.add('is-invalid'); 
        state.nextElementSibling.className = 'invalid-feedback';  
        event.preventDefault();       
    }
    
})

    
