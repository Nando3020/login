
(function(doc){
    "use strict";



    

  

let $user = doc.querySelector('[data-js="inputUser"]');
let $btn = doc.querySelector('[data-js="btnEnvia"]');
let $senha = doc.querySelector('[data-js="senha"]');




$btn.addEventListener('click',inseri,false);



function inseri (e){
  e.preventDefault();

  ajax()

};





function ajax(){

 fetch("senha.JSON") 
   .then((result) => result.json ())
   .then(json => txt(json) )
 
 


function txt(json){
 

  console.log($user.value === json.user, $senha.value === json.senha);

    if( $user.value === json.user && $senha.value === json.senha){ 
      Swal.fire({
         text: "Seja Bem Vindo "+$user.value ,
         color: "#f5f5f5 ",
         background: "black" ,
         icon: "success"
    });
  }else{
    Swal.fire({
       text:"Login ou Senha Invalido tenta novamente",
       color: "#FF0000",
       background: "black",
       icon:"error"
      
      });
  
    };

  


};

};


})(document);