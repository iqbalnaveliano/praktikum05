function login(){
    Username=document.getElementById("Username").value; 
    Password= document.getElementById("Password").value;
    
   if(Username== "warmachine" && Password=="Elite123"){
        alert("Selamat anda berhasil Login");
        window.location="loginberhasil.html";
        return false;
    }
    
    else{
        alert("Username dan password salah");
    }
   
  
    
}
   