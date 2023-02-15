$( document ).ready(function() {

    const url ='https://script.google.com/macros/s/AKfycbzbd1qah4DnW-d_wDiqESFDyHsm4mLD1CrPJz2OBimKEhuUQVvQZzI8bGn99sOx2lcV/exec';

     var model = "<td>{saldo}</td>"+
     "<td>{acertos}</td></tr>";
                   
 

    $(".list-bebidas").empty();  


        fetch(url).then(rep => rep.json())
            .then((data) => {
                data.data.forEach((el) => {
                  
                   line = model;
                   line = line.replace("{produto}", el.produto);
                   line = line.replace("{valor}", el.valor);
                   $(".bebidas-dados").append(line);

                   
                })

            })
         
            

    
    


});  
