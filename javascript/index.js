
window.onload=function(){
    const expresiones = {
        direccion: /^[a-zA-Z0-9\s]{4,16}$/, // Letras, numeros y espacio
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^[a-zA-Z0-9]{8,16}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        cp:/^.{3,12}$/,
        id:/^.\d{6,7}$/,
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

    //KeyTime
    name.addEventListener('keydown', realTimeKey);

    //Functions
    function validateName(){//FALTA CORREGIR EXPRESION
        var result=false;
        name.addEventListener('blur',function(){
            var pname=document.getElementById('pname');
            if(!expresiones.nombre.test(name.value)){
                pname.className="warning";
                error[0]='Name';
            }else{
                error[0]=null;
                realTimeKey(); //FIXING KEYDOWN EVENT
                result=true;
            }
        });
        name.addEventListener('focus',function(){
            pname.className="warning2";
        })
        return result;
    }
    function validateEmail(){
        var result=false;
        email.addEventListener('blur',function(){
            var pemail=document.getElementById('pemail');
            if(!expresiones.correo.test(email.value)){
                pemail.className="warning";
                error[1]='Email';
            }else{
                error[1]=null;
                result=true;
            }
        });
        email.addEventListener('focus',function(){
            pemail.className="warning2";
        })
        return result;
    }
    function validatePassword(){
        var result=false;
        pass.addEventListener('blur',function(){
            var ppass=document.getElementById('ppass');
            if(!expresiones.password.test(pass.value)){
                ppass.className="warning";
                error[2]='Password';
            }else{
                error[2]=null;
                result=true;
            }
        });
        pass.addEventListener('focus',function(){
            ppass.className="warning2";
        })
        return result;
    }
    function validatePassword2(){
        var result=false;
        pass2.addEventListener('blur',function(){
            var ppass2=document.getElementById('ppass2');
            if(pass.value!=pass2.value){
                ppass2.className="warning";
                error[3]='Password-confirm';
            }else{
                error[3]=null;
                result=true;
            }
        });
        pass2.addEventListener('focus',function(){
            ppass2.className="warning2";
        })
        return result;
    }
    function validateAge(){
        var result=false;
        age.addEventListener('blur',function(){
            var page=document.getElementById('page');
            if(parseInt(age.value)<18){
                page.className="warning";
                error[4]='Age';
            }else{
                error[4]=null;
                result=true;
            }
        });
        age.addEventListener('focus',function(){
            page.className="warning2";
        })
        return result;
    }
    function validatePhone(){
        var result=false;
        phone.addEventListener('blur',function(){
            var pphone=document.getElementById('pphone');
            if(parseInt(phone.value.length)<7){
                pphone.className="warning";
                error[5]='Phone number';
            }else{
                error[5]=null;
                result=true;
            }
        });
        phone.addEventListener('focus',function(){
            pphone.className="warning2";
        })
        return result;
    }
    function validateAddress(){//FALTA CORREGIR EXPRESION
        var result=false;
        address.addEventListener('blur',function(){
            var paddress=document.getElementById('paddress');
            if(!expresiones.direccion.test(address.value)){
                paddress.className="warning";
                error[6]='Address';
            }else{
                error[6]=null;
                result=true;
            }
        });
        address.addEventListener('focus',function(){
            paddress.className="warning2";
        })
        return result;
    }
    function validateCity(){
        var result=false;
        city.addEventListener('blur',function(){
            var pcity=document.getElementById('pcity');
            if(!expresiones.nombre.test(city.value)){
                pcity.className="warning";
                error[7]='City';
            }else{
                error[7]=null;
                result=true;
            }
        });
        city.addEventListener('focus',function(){
            pcity.className="warning2";
        })
        return result;
    }
    function validatePostalCode(){
        var result=false;
        pc.addEventListener('blur',function(){
            var ppc=document.getElementById('ppc');
            if(!expresiones.cp.test(pc.value)){
                ppc.className="warning";
                error[8]='Postal code';
            }else{
                error[8]=null;
                result=true;
            }
        });
        pc.addEventListener('focus',function(){
            ppc.className="warning2";
        })
        return result;
    }
    function validateID(){
        var result=false;
        nid.addEventListener('blur',function(){
            var pnid=document.getElementById('pnid');
            if(!expresiones.id.test(nid.value)){
                pnid.className="warning";
                error[9]='ID Number';
            }else{
                error[9]=null;
                result=true;
            }
        });
        nid.addEventListener('focus',function(){
            pnid.className="warning2";
        })
        return result;
    }
    function buttonClick(e){
        e.preventDefault();
        var msg="";
        var contador=0;
        for(var i=0; i<error.length;i++){
            if(error[i]!=null){
                contador++
                alert('Field ' + error[i] +
                ' must be completed .');
            }
        }
        if((fieldsValidate())){
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
        }else{
            alert('All fields must be completed.');
        }
    }
    function realTimeKey(){
        var text=name.value;
        document.getElementById('keydown').innerHTML='HOLA '+text.toUpperCase();
    }
    function fieldsValidate(){
        var result=true;
        if(
            !validateName()||
            !validateEmail()||
            !validatePassword()||
            !validatePassword2()||
            !validateAge()||
            !validateAddress()||
            !validateCity()||
            !validatePhone()||
            !validatePostalCode()||
            !validateID()
        ){
            result=false;
        }else{
            result=true;
        }
        return result;
    }
}

