
document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber=document.getElementById('phone-number').value ;
    const pinNumber=document.getElementById('pin-number').value ;
    //console.log(phoneNumber,pinNumber);

    if (phoneNumber==="0123456789" && pinNumber==="2024"){
        console.log('You are Welcome !!!! ^_^');
        window.location.href ='https://sabbir-663.github.io/Payoo-app/home.html'
        
    }
    else{
        alert('Ke Tumi?');
        
    }


})
