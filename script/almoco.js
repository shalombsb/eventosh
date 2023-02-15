$( document ).ready(function() {

    const url ='https://script.google.com/macros/s/AKfycbz71Q_XxbnG04jy6kUgewuiKq2JTwmJMuI-zAEHm00sdYmTgeUmU7Hv2BVwx65zbjdwHQ/exec';

     var model = "<td>{saldo}</td>"+
     "<td>{acertos}</td></tr>";
                   
 

    $(".list-almoco").empty();  


        fetch(url).then(rep => rep.json())
            .then((data) => {
                data.data.forEach((el) => {
                  
                   line = model;
                   line = line.replace("{produto}", el.produto);
                   line = line.replace("{descricao}", el.descricao);
                   line = line.replace("{valor}", el.valor);
                   $(".almoço-dados").append(line);

                   
                })
                $('.preloader').fadeOut(500);
            })
         
            

    
    


});  
