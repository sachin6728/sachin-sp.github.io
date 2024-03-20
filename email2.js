

      function validateForm(){

      var username = document.getElementById('username').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var password2 = document.getElementById('password2').value;
      
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var passwordRegex = (/^.{6,8}$/);
      var usernameRegex = /^[a-zA-Z]+$/; 
      if(!usernameRegex.test(username)){
        alert("Please Enter a Valid Username");
        document.getElementById("username").focus();
        return false;
      }
      if(!emailRegex.test(email)){
        alert("Please enter a valid Email address");
        document.getElementById("email").focus();
        return false;
      }

      if(!passwordRegex.test(password)){
        alert("Password must be 6 to 8 digits long");
        document.getElementById("password").focus();
        return false;
      }
      if(password !== password2){
        alert("password doesn't match");
        document.getElementById("password2").focus();
        return false;
      }
      

      return true;
    }
    document.getElementById("form").addEventListener("submit",function(event)
    {
      if(!validateForm()){
        event.preventDefault();
      }
    });
    