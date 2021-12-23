function mudarQuantidade(){
    if(document.formu.item1a.checked){
        document.formu.item1b.value=1;
    } else document.formu.item1b.value="";

    if(document.formu.item2a.checked){
        document.formu.item2b.value=1;
    }else document.formu.item2b.value="";

    if(document.formu.item3a.checked){
        document.formu.item3b.value=1;
    } else document.formu.item3b.value="";
    
    if(document.formu.item4a.checked){
        document.formu.item4b.value=1;
    }else document.formu.item4b.value="";

    if(document.formu.item5a.checked){
        document.formu.item5b.value=1;
    } else document.formu.item5b.value="";
    
    if(document.formu.item6a.checked){
        document.formu.item6b.value=1;
    }else document.formu.item6b.value="";

    if(document.formu.item7a.checked){
        document.formu.item7b.value=1;
    } else document.formu.item7b.value="";

    if(document.formu.item8a.checked){
        document.formu.item8b.value=1;
    }else document.formu.item8b.value="";

    if(document.formu.item9a.checked){
        document.formu.item9b.value=1;
    } else document.formu.item9b.value="";
    
    if(document.formu.item10a.checked){
        document.formu.item10b.value=1;
    }else document.formu.item10b.value="";

    if(document.formu.item11a.checked){
        document.formu.item11b.value=1;
    } else document.formu.item11b.value="";
    
    if(document.formu.item12a.checked){
        document.formu.item12b.value=1;
    }else document.formu.item12b.value="";

}

function soma(){
    var soma=0;
    
    if(document.formu.item1a.checked){
        var pro=document.formu.item1b.value;
        var valorProduto = 5.00;   
        if(pro>0){
            soma = soma+(valorProduto*pro);
        }else{
            alert("Ops! O valor digitado é 0 ou negativo! \nPor Favor, verifique.");
            document.formu.item1b.focus();
        }
    
        
    }
    if(document.formu.item2a.checked){
        var pro=document.formu.item2b.value;
        var valorProduto = 3.00;   
    
        if(pro>0){
            soma = soma+(valorProduto*pro);
        }else{
            alert("Ops! O valor digitado é 0 ou negativo! \nPor Favor, verifique.");
            document.formu.item2b.focus();
        }
    }
    if(document.formu.item3a.checked){
        var pro=document.formu.item3b.value;
        var valorProduto = 2.00;   
    
        if(pro>0){
            soma = soma+(valorProduto*pro);
        }else{
            alert("Ops! O valor digitado é 0 ou negativo! \nPor Favor, verifique.");
            document.formu.item3b.focus();
        }
    }
    if(document.formu.item4a.checked){
        var pro=document.formu.item4b.value;
        var valorProduto = 4.00;   
    
        if(pro>0){
            soma = soma+(valorProduto*pro);
        }else{
            alert("Ops! O valor digitado é 0 ou negativo! \nPor Favor, verifique.");
            document.formu.item4b.focus();
        }
    }
    if(document.formu.item5a.checked){
        var pro=document.formu.item5b.value;
        var valorProduto = 5.00;   
    
        if(pro>0){
            soma = soma+(valorProduto*pro);
        }else{
            alert("Ops! O valor digitado é 0 ou negativo! \nPor Favor, verifique.");
            document.formu.item5b.focus();
        }
    }
    if(document.formu.item6a.checked){
        var pro=document.formu.item6b.value;
        var valorProduto = 10.00;   
    
        if(pro>0){
            soma = soma+(valorProduto*pro);
        }else{
            alert("Ops! O valor digitado é 0 ou negativo! \nPor Favor, verifique.");
            document.formu.item6b.focus();
        }
    }
    if(document.formu.item7a.checked){
        var pro=document.formu.item7b.value;
        var valorProduto = 7.00;   
    
        if(pro>0){
            soma = soma+(valorProduto*pro);
        }else{
            alert("Ops! O valor digitado é 0 ou negativo! \nPor Favor, verifique.");
            document.formu.item7b.focus();
        }
    }
    if(document.formu.item8a.checked){
        var pro=document.formu.item8b.value;
        var valorProduto = 3.00;   
    
        if(pro>0){
            soma = soma+(valorProduto*pro);
        }else{
            alert("Ops! O valor digitado é 0 ou negativo! \nPor Favor, verifique.");
            document.formu.item8b.focus();
        }
    }
    if(document.formu.item9a.checked){
        var pro=document.formu.item9b.value;
        var valorProduto = 25.00;   
    
        if(pro>0){
            soma = soma+(valorProduto*pro);
        }else{
            alert("Ops! O valor digitado é 0 ou negativo! \nPor Favor, verifique.");
            document.formu.item9b.focus();
        }
    }
    if(document.formu.item10a.checked){
        var pro=document.formu.item10b.value;
        var valorProduto = 25.00;   
    
        if(pro>0){
            soma = soma+(valorProduto*pro);
        }else{
            alert("Ops! O valor digitado é 0 ou negativo! \nPor Favor, verifique.");
            document.formu.item10b.focus();
        }
    }
    if(document.formu.item11a.checked){
        var pro=document.formu.item11b.value;
        var valorProduto = 8.00;   
    
        if(pro>0){
            soma = soma+(valorProduto*pro);
        }else{
            alert("Ops! O valor digitado é 0 ou negativo! \nPor Favor, verifique.");
            document.formu.item11b.focus();
        }
    }
    if(document.formu.item12a.checked){
        var pro=document.formu.item12b.value;
        var valorProduto = 10.00;   
    
        if(pro>0){
            soma = soma+(valorProduto*pro);
        }else{
            alert("Ops! O valor digitado é 0 ou negativo! \nPor Favor, verifique.");
            document.formu.item12b.focus();
        }
    }
    
    
    document.formu.tot.value=soma;
    

}

