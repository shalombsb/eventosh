$( document ).ready(function() {

    const url ='https://script.google.com/macros/s/AKfycbzbd1qah4DnW-d_wDiqESFDyHsm4mLD1CrPJz2OBimKEhuUQVvQZzI8bGn99sOx2lcV/exec';

     var model = "<div class='col-sm-6'><div class='card'><div class='card-body'><h4 class='card-title'>{produto}</h4>"+
     "<p class='card-text small'>{descricao}</p></div>"+
   "<div class='card-footer'><h1 class='card-subtitle preco'>{valor}</h1><div class='btn-group' role='group' aria-label='Basic outlined example'>"+
"<button type='button' class='btn btn-menos btn-outline-primary'>-</button><div class=' btn btn-outline-primary quant'>1</div><button type='button' class='btn btn-mais btn-outline-primary'>+</button></div></div></div></div>";

 

    $(".list-bebidas").empty();  


        fetch(url).then(rep => rep.json())
            .then((data) => {
                data.data.forEach((el) => {
                  
                   line = model;
                   line = line.replace("{produto}", el.produto);
                   line = line.replace("{descricao}", el.descricao);
                   line = line.replace("{valor}", el.valor);
                   $(".list-bebidas").append(line);

                   
                })

            })
         
            

    
    


});  
