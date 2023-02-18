$( document ).ready(function() {

    const url ='https://script.google.com/macros/s/AKfycbz71Q_XxbnG04jy6kUgewuiKq2JTwmJMuI-zAEHm00sdYmTgeUmU7Hv2BVwx65zbjdwHQ/exec';

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
     "<div class=' btn btn-outline-primary quant'>0</div>"+
     "<button type='button' class='btn btn-mais btn-outline-primary'>+</button>"+
     "</div>"+
     "</div>"+
     "</div>"+
     "</div>";


    $(".list-almoco").empty();  


        fetch(url).then(rep => rep.json())
            .then((data) => {
                data.data.forEach((el) => {
                  
                   line = model;
                   line = line.replace("{produto}", el.produto);
                   line = line.replace("{descricao}", el.descricao);
                   line = line.replace("{valor}", el.valor.toFixed(2));
                   $(".list-almoco").append(line);

                   
                })
                $('.preloader').fadeOut(500);
            })
         
            

    
    


});  
