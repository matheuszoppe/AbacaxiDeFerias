function parcelas(){
    var parcela=document.getElementById('parcela');
    var valor = parseInt(document.formu.tot.value);
    var valorParcela;

    var x1 = document.createElement('option');
    x1.value=valor.toFixed(2);
    x1.text = "1x - R$ "+ valor.toFixed(2);
    parcela.add(x1, parcela.options[0]);

    var x2 = document.createElement('option'); 
    valorParcela = valor/2;      
    x2.value= valorParcela.toFixed(2);
    x2.text = "2x - R$ "+ valorParcela.toFixed(2);
    parcela.add(x2, parcela.options[1]);

    var x3 = document.createElement('option'); 
    valorParcela = valor/3;      
    x3.value= valorParcela.toFixed(2);
    x3.text = "3x - R$ "+ valorParcela.toFixed(2);
    parcela.add(x3, parcela.options[2]);

    var x4 = document.createElement('option'); 
    valorParcela = valor/4;      
    x4.value= valorParcela.toFixed(2);
    x4.text = "4x - R$ "+ valorParcela.toFixed(2);
    parcela.add(x4, parcela.options[3]);

    var x5 = document.createElement('option'); 
    valorParcela = valor/5;      
    x5.value= valorParcela.toFixed(2);
    x5.text = "5x - R$ "+ valorParcela.toFixed(2);
    parcela.add(x5, parcela.options[4])

}