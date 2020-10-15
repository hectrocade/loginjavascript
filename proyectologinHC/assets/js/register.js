console.log('datos de registro');

const nombre = document.getElementById("name");
const usuario = document.getElementById("user");
const contrasena = document.getElementById("password");
const register = document.getElementById("register");





register.addEventListener('click',()=>{
let datos =  JSON.parse(localStorage.getItem('usuarios'));
console.log (datos);
//console.log(datos[1].user);

if (usuario.value=="" || nombre.value=="" || contrasena.value=="" ) {
    alert("Porfavor llene los campos");
}else{
    if(datos==null){
        let usuario2 = {
            name:nombre.value,
            pass:contrasena.value,
            user:usuario.value,
        }
    
        const Primerusuario = [];
    
     Primerusuario.push(usuario2);
     let guardaPusuarios = JSON.stringify(Primerusuario)
     localStorage.setItem('usuarios',guardaPusuarios)
        alert("El usuario ha sido registrado");
    }else{
        let contador=0;
    
        for (let index = 0; index < datos.length; index++) {
            const element = datos[index].user;
            if(element==usuario.value){
                contador++;
            }
            console.log(element);
            
        }
        
        if(contador>0){
            alert("El usuario ya existe");
            
        }
        else{
            let usuario1 = {
                name:nombre.value,
                pass:contrasena.value,
                user:usuario.value
            }
        
            const listaUsuarios = [];
        
         listaUsuarios.push(usuario1);
         for (let index = 0; index < datos.length; index++) {
             const element = datos[index];
             listaUsuarios.push(element);
             
         }
         
        
        
         let guardaUsuarios = JSON.stringify(listaUsuarios)
         localStorage.setItem('usuarios',guardaUsuarios)
            alert("El usuario ha sido registrado");
            
        }
    }
}






})

