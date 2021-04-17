function showPassword(){
    var eye = document.getElementById('eye');
    var eaySlash = document.getElementById('eye-slash');
    var fildPassword = document.getElementById('field-password');

    if(eye.style.display === 'none'){
        eye.style.display = 'block';
        eaySlash.style.display = 'none';
        fildPassword.type = 'text';

    }else{
        eye.style.display = 'none';
        eaySlash.style.display = 'block';
        fildPassword.type = 'password';
    }
};
document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault;
    alert('Você está logado!');
});