$( document ).ready(function() {

    const url ='https://script.google.com/macros/s/AKfycbyyswB5GXjlshyFZAGkzP4dvDjT1EALa7R7r1edrn7aV5B37Iymz63eS2cBZVL3GcbjmA/exec';

     var model = "<td>{saldo}</td>"+
              "<td>{acertos}</td></tr>";
                   
 

    $(".list-lanchonete").empty();  


        fetch(url).then(rep => rep.json())
            .then((data) => {
                data.data.forEach((el) => {
                  
                   line = model;
                   line = line.replace("{produto}", el.produto);
                   line = line.replace("{valor}", el.valor);
                   $(".lanchonete-dados").append(line);

                })

            })
         
            

    
    


});  
