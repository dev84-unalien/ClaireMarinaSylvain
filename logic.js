<<<<<<< HEAD
function recupDesDonnees(){
    var login = $("#login").val();
    var password= $("#password").val();

    var utilisateur={
        identifiant: login,
        password: password,
    }
    
    $.ajax({
        type:"GET",
        url:"http://192.168.1.112:8001/login",
        /*data:{login:$("#login").val(), password:$("#password").val()},*/
        success : user,
        error:function(){
            alert("Erreur");
        }        
    });
    function user(result){
        alert(result.message);
    }
}
=======

function logOnFacebook(){
    $.ajax({
        url: "http://192.168.1.112:8001/login",
        type: "GET",
        success: function(result) {
          alert(result.message);
        },
        error: function() {
          alert("Email et/ou mot de passe manquant");
        }
      });
    }
    







>>>>>>> 8596c193c2af669f15862081ec5c4457788bfc7c
