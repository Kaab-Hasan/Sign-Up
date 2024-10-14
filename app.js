function takeInupts(){


    // get the value of Inupts by id, and store in variables
    var FirstName = document.getElementById('FirstName').value;

    var LastName = document.getElementById('LastName').value;

    var YourEmail = document.getElementById('YourEmail').value;

    var PhoneNumber = document.getElementById('PhoneNumber').value;

    var YourPassword = document.getElementById('YourPassword').value;


    // select the showText
    var showText  = document.getElementById('showText');

    // run the content of showText
    showText.innerHTML = `
    <hr>
    <h2>Your Details is here</h2>
    <p>FirstName : ${FirstName}</p>
    <p>LastName : ${LastName}</p>
    <p>Email : ${YourEmail}</p>
    <p>Phone Number :  ${PhoneNumber}</p>
    <p>Password : ${YourPassword}</p>`;    
}