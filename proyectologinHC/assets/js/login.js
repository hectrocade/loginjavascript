console.log('inicio de sesion');
function ingreso() {
let user=document.getElementById('user');
let pass=document.getElementById('password');

let datos =  JSON.parse(localStorage.getItem('usuarios'));

if (user.value=="" || pass.value=="") {
    alert('Rellene todos los campos');
    return false;
    
}else{

        let contador=0;
    
        for (let index = 0; index < datos.length; index++) {
            const element = datos[index].user;
            const element2 = datos[index].pass;
            if(element==user.value && element2==pass.value){
                contador++;
                
            }
        }


        if (contador>0) {
            alert('bienvenido');
            document.form.submit();
        }else{
            alert('Usuario o contraseña incorrectos');
        }
    }
    return false;

    }
    

