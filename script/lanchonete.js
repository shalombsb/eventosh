$( document ).ready(function() {

    const url ='https://script.google.com/macros/s/AKfycbyyswB5GXjlshyFZAGkzP4dvDjT1EALa7R7r1edrn7aV5B37Iymz63eS2cBZVL3GcbjmA/exec';

     var model = "<div class='col-md-6'>"+
     "<div class='card'>"+
     "<div class='card-body'>"+
     "<h3 class='card-title'>{produto}</h3>"+
     "<h1 class='card-subtitle preco'>{valor}</h1>"+
     "</div>"+
     "<div class='card-footer'>"+
     "<p class='card-text small'>{descricao}</p>"+
     "<div class='btn-group' role='group' aria-label='Basic outlined example'>"+
     "<button type='button' class='btn btn-menos btn-outline-primary'>-</button>"+
     "<div class='btn btn-outline-primary quant' data-key='{id}'>0</div>"+
     "<button type='button' class='btn btn-mais btn-outline-primary'>+</button>"+
     "</div>"+
     "</div>"+
     "</div>"+
     "</div>";

                   
 

    $(".list-lanchonete").empty();  


        fetch(url).then(rep => rep.json())
            .then((data) => {
                data.data.forEach((el) => {
                  
                   line = model;
                   line = line.replace("{id}", el.id);
                   line = line.replace("{produto}", el.produto);
                   line = line.replace("{descricao}", el.descricao);
                   line = line.replace("{valor}", el.valor.toFixed(2));
                   $(".list-lanchonete").append(line);

                })

            })
         
            

    
    


});  
