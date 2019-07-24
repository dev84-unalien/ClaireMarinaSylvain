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