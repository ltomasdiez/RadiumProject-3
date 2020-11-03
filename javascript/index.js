const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const inputs = document.getElementsByTagName('input');
const name = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const pass2 = document.getElementById('password2');
const age = document.getElementById('age');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const city = document.getElementById('city');
const pc = document.getElementById('pc');
const nid = document.getElementById('nid');
const buttn = document.getElementById('buttn');
var error = [];
window.onload=function(){
    // Validate //
    validateName();
    validateEmail();
    validatePassword();
    validatePassword2();
    validateAge();
    validatePhone();
    validateAddress();
    validateCity();
    validatePostalCode();
    validateID();

    //Suscribe Button
    buttn.addEventListener('click', buttonClick);

    //
    name.addEventListener('keydown', realTimeKey);

}
function validateName(){//FALTA CORREGIR EXPRESION
    name.addEventListener('blur',function(){
        var pname=document.getElementById('pname');
        if(!expresiones.nombre.test(name.value)){
            pname.className="warning";
            error[0]='nombre';
        }else{
            error[0]='';
            realTimeKey(); //FIXING KEYDOWN EVENT
        }
    });
    name.addEventListener('focus',function(){
        pname.className="warning2";
    })
}
function validateEmail(){
    email.addEventListener('blur',function(){
        var pemail=document.getElementById('pemail');
        if(!expresiones.correo.test(email.value)){
            pemail.className="warning";
            error[1]='email';
        }else{
            error[1]='';
        }
    });
    email.addEventListener('focus',function(){
        pemail.className="warning2";
        error[1]='email';
    })
}
function validatePassword(){
    pass.addEventListener('blur',function(){
        var ppass=document.getElementById('ppass');
        if(!expresiones.password.test(pass.value)){
            ppass.className="warning";
            error[2]='password';
        }else{
            error[2]='';
        }
    });
    pass.addEventListener('focus',function(){
        ppass.className="warning2";
    })
}
function validatePassword2(){
    pass2.addEventListener('blur',function(){
        var ppass2=document.getElementById('ppass2');
        if(pass.value!=pass2.value){
            ppass2.className="warning";
            error[3]='password-confirm';
        }else{
            error[3]='';
        }
    });
    pass2.addEventListener('focus',function(){
        ppass2.className="warning2";
    })
}
function validateAge(){
    age.addEventListener('blur',function(){
        var page=document.getElementById('page');
        if(parseInt(age.value)<18){
            page.className="warning";
            error[4]='age';
        }else{
            error[4]='';
        }
    });
    age.addEventListener('focus',function(){
        page.className="warning2";
    })
}
function validatePhone(){
    phone.addEventListener('blur',function(){
        var pphone=document.getElementById('pphone');
        if(parseInt(phone.value.length)<7){
            pphone.className="warning";
            error[5]='phone number';
        }else{
            error[5]='';
        }
    });
    phone.addEventListener('focus',function(){
        pphone.className="warning2";

    })
}
function validateAddress(){//FALTA CORREGIR EXPRESION
    address.addEventListener('blur',function(){
        var paddress=document.getElementById('paddress');
        if(!expresiones.nombre.test(address.value)){
            paddress.className="warning";
            error[6]='address';
        }else{
            error[6]='';
        }
    });
    address.addEventListener('focus',function(){
        paddress.className="warning2";
    })
}
function validateCity(){//FALTA CORREGIR EXPRESION
    city.addEventListener('blur',function(){
        var pcity=document.getElementById('pcity');
        if(!expresiones.nombre.test(city.value)){
            pcity.className="warning";
            error[7]='city';
        }else{
            error[7]='';
        }
    });
    city.addEventListener('focus',function(){
        pcity.className="warning2";
    })
}
function validatePostalCode(){//FALTA CORREGIR EXPRESION
    pc.addEventListener('blur',function(){
        var ppc=document.getElementById('ppc');
        if(!expresiones.nombre.test(pc.value)){
            ppc.className="warning";
            error[8]='postal code';
        }else{
            error[8]='';
        }
    });
    pc.addEventListener('focus',function(){
        ppc.className="warning2";
    })
}
function validateID(){//FALTA CORREGIR EXPRESION
    nid.addEventListener('blur',function(){
        var pnid=document.getElementById('pnid');
        if(!expresiones.nombre.test(nid.value)){
            pnid.className="warning";
            error[9]='id';
        }else{
            error[9]='';
        }
    });
    nid.addEventListener('focus',function(){
        pnid.className="warning2";
    })
}
function buttonClick(e){
    var contador=0;
    e.preventDefault();
    var msg="";
    for(var i=0; i<error.length;i++){
        if(error[i]!=""){
            contador++
            alert('El campo ' + error[i] +
            ' necesita ser completado correctamente para enviar el formulario.');
        }
    }
    if(contador==0){
        msg='Name: '+ name.value;
        msg=msg+', Email: '+email.value;
        msg=msg+', Password: '+password.value;
        msg=msg+', Age: '+age.value;
        msg=msg+', Phone Number: '+phone.value;
        msg=msg+', Address: '+address.value;
        msg=msg+', City: '+city.value;
        msg=msg+', Postal Code'+pc.value;
        msg=msg+', ID Number: '+nid.value;
        confirm(msg);
    }
}

function realTimeKey(){
    var text=name.value;
    document.getElementById('keydown').innerHTML='HOLA '+text.toUpperCase();
}
