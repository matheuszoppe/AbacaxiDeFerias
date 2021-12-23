function ocultar(id){
    document.getElementById(id).style.display = 'block';
}
function nextItens(id,id2){
    if(document.formu.tot.value<=0){
        alert("Ops! Nenhum item foi selecionado. \nSelecione um item para continuar")
    }else{
        document.getElementById(id).style.display = 'block';
        document.getElementById(id2).style.display = 'none';
    }
    
}
function nextCadastro(id,id2){
    var validar=true;
    var email = true;
    if(document.formu.nome.value == ""){
        document.getElementById("nome").style.outline ='2px solid red'
        document.formu.nome.focus();
        validar=false;
    }else document.getElementById("nome").style.outline ='0'

    if(document.formu.sobrenome.value == ""){
        document.getElementById("sobrenome").style.outline ='2px solid red'
        document.formu.nome.focus();
        validar=false;
    }else document.getElementById("sobrenome").style.outline ='0'

    if(document.formu.rg.value == ""){
        document.getElementById("rg").style.outline ='2px solid red'
        document.formu.rg.focus();
        validar=false;
    }else document.getElementById("rg").style.outline ='0'

    if(document.formu.cpf.value == ""){
        document.getElementById("cpf").style.outline ='2px solid red'
        document.formu.cpf.focus();
        validar=false;
    }else document.getElementById("cpf").style.outline ='0'

    if(document.formu.cel.value == ""){
        document.getElementById("cel").style.outline ='2px solid red'
        document.formu.cel.focus();
        validar=false;
    }else document.getElementById("cel").style.outline ='0'

    if(document.formu.email.value == ""){
        document.getElementById("email").style.outline ='2px solid red'
        document.formu.email.focus();
        validar=false;
    }else document.getElementById("email").style.outline ='0'

    if(document.formu.rua.value == ""){
        document.getElementById("rua").style.outline ='2px solid red'
        document.formu.rua.focus();
        validar=false;
    }else document.getElementById("rua").style.outline ='0'

    if(document.formu.numero.value == ""){
        document.getElementById("numero").style.outline ='2px solid red'
        document.formu.numero.focus();
        validar=false;
    }else document.getElementById("numero").style.outline ='0'

    if(document.formu.bairro.value == ""){
        document.getElementById("bairro").style.outline ='2px solid red'
        document.formu.bairro.focus();
        validar=false;
    }else document.getElementById("bairro").style.outline ='0'

    if(document.formu.cidade.value == ""){
        document.getElementById("cidade").style.outline ='2px solid red'
        document.formu.cidade.focus();
        validar=false;        
    }else document.getElementById("cidade").style.outline ='0';

    if(document.formu.cep.value == ""){
        document.getElementById("cep").style.outline ='2px solid red'
        document.formu.cep.focus();
        validar=false;
    }else document.getElementById("cep").style.outline ='0';
    if (document.formu.email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) == null ){
    		
        alert("Digite um e-mail valido no campo \"E-mail\".");
        document.getElementById("email").style.outline ='2px solid orange'
	   	formDados.email.focus();
	   			
	}

    if(validar){
        
        document.getElementById(id).style.display = 'block';
        document.getElementById(id2).style.display = 'none';
            
       
    }else alert("Ops! Parece que alguns campos não foram preenchidos");

    
}

function back(id,id2){
    document.getElementById(id).style.display = 'block';
    document.getElementById(id2).style.display = 'none';
}
function finalizar(id){
    var pagok = false;
	for (var i=0; i<document.formu.pagamento.length; i++)
	{
		if (document.formu.pagamento[i].checked == true)
		{
			pagok=true;
		}
	}
	if (!pagok) // if (sexoOK == false)
	{
		alert("Ops! Você não selecionou uma forma de pagamento!");
		document.formu.pagamento[0].focus();
		return false;
	}else{
        document.getElementById(id).style.display = 'none';
        
        return true;
    }    
    
}
function test(){
    document.getElementById('confirmacao').style.display = 'block';
}

function queryString(parameter)
	{  
		var loc = location.search.substring(1, location.search.length);   
		var param_value = false;   
		var params = loc.split("&");   
		for (var i=0; i<params.length;i++)
		{   
			var param_name = params[i].substring(0,params[i].indexOf('='));   
			if (param_name == parameter)
			{                                          
				param_value = params[i].substring(params[i].indexOf('=')+1)   
			}   
		}   
		if (param_value)
		{   
			return param_value;   
		}   
		else
		{   
			return undefined;   
		}   
    }


    

