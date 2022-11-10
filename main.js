var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tabLink of tabLinks){
        
        tabLink.classList.remove("active-link")
    }
    for(tabContent of tabContents){

        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}


var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right= "0"
}
function closemenu(){
    sidemenu.style.right= "-200px"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwsJ4hsGpXPytwWneFPELowgyUvucRP7cwsR3dIhPOc1dpRI_zESvbKO78FIxa4a8it/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thanks for your Enquiry. We will come back to you soon."
        setTimeout(function(){
            msg.innerHTML = ""

        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


  var nameError = document.getElementById('name-error')
  var phoneError = document.getElementById('phone-error')
  var emailError = document.getElementById('email-error')

  function validateName(){
    
        var name = document.getElementById('contact-name').value

        if(name.length == 0 ){
            nameError.innerHTML = 'Name is Required'
            return false
        }
        if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){

            nameError.innerHTML = 'Write Full Name'
            return false

        }
        nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
        return true
        
  }
  function validatePhone(){

    var phone = document.getElementById('contact-phone').value

    if(phone.length == 0){

        phoneError.innerHTML = 'Mobile Number is Required'
        return false

    }
    if(phone.length !==10){

        phoneError.innerHTML = 'Mobile Number number should be 10 digits'
        return false

    }
    if(!phone.match(/^[0-9]{10}$/)){

        phoneError.innerHTML = 'Please Enter only Digits'
        return false

    }
    
        phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
        return true

  }

  function validateEmail(){

    var email = document.getElementById('contact-email').value

    if(email.length ==0 ){

        emailError.innerHTML = 'Email ID is Required'
        return false

    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) ){

        emailError.innerHTML = 'Enter Correct Email ID'
        return false

    }
        emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
        return true

  }