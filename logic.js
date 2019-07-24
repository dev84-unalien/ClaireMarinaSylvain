
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
    







