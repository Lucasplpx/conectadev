 // Função executada ao ler a página HTML.
 function inicializacao()
 {
   campo = "pCpfCnpj";
   eval("document.form." + campo + ".focus()");
 }


 // Função de validação de dados do formulário.
 function validacao() {
   if (campo != ''none'') {
     eval("document.form." + campo + ".focus()");
     return false;
   }

   // Validando o CPF
   var vCpfCnpj = document.form.pCpfCnpj.value;
   if (vCpfCnpj.length < 11) {
     alert ("CPF/CNPJ inválido.\n\nPor favor, preencha o campo CPF/CNPJ com 11 dígitos numéricos para CPF\nou 14 dígitos núméricos para CNPJ.");
     document.form.pCpfCnpj.focus();
     document.form.pCpfCnpj.select();
     return false;
   }

   if (vCpfCnpj.length == 11) {
     var vCpf = vCpfCnpj;
     var nonNumbers = /\D/;
     if (nonNumbers.test(vCpf)) {
       alert ("CPF inválido.\n\nPor favor, preencha o campo CPF/CNPJ somente com números.");
       document.form.pCpfCnpj.focus();
       document.form.pCpfCnpj.select();
       return false;
     }

     if (vCpf == "00000000000" || vCpf == "11111111111" || vCpf == "22222222222" ||
         vCpf == "33333333333" || vCpf == "44444444444" || vCpf == "55555555555" ||
         vCpf == "66666666666" || vCpf == "77777777777" || vCpf == "88888888888" ||
         vCpf == "99999999999") {
       alert ("CPF inválido.\n\nPor favor, tente novamente.");
       document.form.pCpfCnpj.focus();
       document.form.pCpfCnpj.select();
       return false;
     }

     var a = [];
     var b = new Number;
     var c = 11;
     for (i=0; i<11; i++) {
       a[i] = vCpf.charAt(i);
       if (i < 9) b += (a[i] * --c);
     }
     if ((x = b % 11) < 2) { a[9] = 0 } else { a[9] = 11-x }
     b = 0;
     c = 11;
     for (y=0; y<10; y++) b += (a[y] * c--);
     if ((x = b % 11) < 2) { a[10] = 0; } else { a[10] = 11-x; }
     if ((vCpf.charAt(9) != a[9]) || (vCpf.charAt(10) != a[10])) {
       alert ("CPF inválido.\n\nPor favor, tente novamente.");
       document.form.pCpfCnpj.focus();
       document.form.pCpfCnpj.select();
       return false;
     }
   }

   if (vCpfCnpj.length > 11 && vCpfCnpj.length < 14) {
     alert ("CPF/CNPJ inválido.\n\nPor favor, preencha o campo CPF/CNPJ com 11 dígitos numéricos para CPF\nou 14 dígitos núméricos para CNPJ.");
     document.form.pCpfCnpj.focus();
     document.form.pCpfCnpj.select();
     return false;
   }

   if (vCpfCnpj.length == 14) {
     var vCnpj = vCpfCnpj;
     var nonNumbers = /\D/;
     if (nonNumbers.test(vCnpj)) {
       alert ("CNPJ inválido.\n\nPor favor, preencha o campo CPF/CNPJ somente com números.");
       document.form.pCpfCnpj.focus();
       document.form.pCpfCnpj.select();
       return false;
     }
     var a = [];
     var b = new Number;
     var c = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
     for (i = 0; i < 12; i++) {
       a[i] = vCnpj.charAt(i);
       b += a[i] * c[i+1];
     }
     if ((x = b % 11) < 2) {
       a[12] = 0;
     }
     else {
       a[12] = 11-x;
     }
     b = 0;
     for (y = 0; y < 13; y++) {
       b += (a[y] * c[y]);
     }
     if ((x = b % 11) < 2) {
       a[13] = 0;
     }
     else {
       a[13] = 11-x;
     }
     if ((vCnpj.charAt(12) != a[12]) || (vCnpj.charAt(13) != a[13])) {
       alert ("CNPJ inválido.\n\nPor favor, tente novamente.");
       document.form.pCpfCnpj.focus();
       document.form.pCpfCnpj.select();
       return false;
     }
   }

   // valida a senha.
   var vSenha = document.form.pSenha.value;
   if (vSenha == "")
   {
     alert("SENHA nula.\n\nPor favor, preencha o campo SENHA.");
     document.form.pSenha.focus();
     document.form.pSenha.select();
     return false;
   }
   return true;
 }