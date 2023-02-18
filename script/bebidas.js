$( document ).ready(function() {

    const url ='https://script.google.com/macros/s/AKfycbzbd1qah4DnW-d_wDiqESFDyHsm4mLD1CrPJz2OBimKEhuUQVvQZzI8bGn99sOx2lcV/exec';

    var model = "<div class='col-md-6'>"+
    "<div class='card' data-key='{id}'>"+
    "<div class='card-body'>"+
    "<h3 class='card-title'>{produto}</h3>"+
    "<h1 class='card-subtitle preco'>{valor}</h1>"+
    "</div>"+
    "<div class='card-footer'>"+
    "<p class='card-text small'>{descricao}</p>"+
    "<div class='btn-group' role='group' aria-label='Basic outlined example'>"+
    "<button type='button' class='btn btn-menos btn-outline-primary'>-</button>"+
    "<div class='btn btn-outline-primary quant'>0</div>"+
    "<button type='button' class='btn btn-mais btn-outline-primary'>+</button>"+
    "</div>"+
    "</div>"+
    "</div>"+
    "</div>";

    $(".list-bebidas").empty();


    fetch(url).then(rep => rep.json())
        .then((data) => {
            data.data.forEach((el) => {
                var line = model;
                line = line.replace("{id}", el.id);
                line = line.replace("{produto}", el.produto);
                line = line.replace("{descricao}", el.descricao);
                line = line.replace("{valor}", el.valor.toFixed(2));
                $(".list-bebidas").append(line);
                var card = $(".card[data-key='" + el.id + "']");
                var quant = card.find(".quant");
                var valor = parseFloat(el.valor);
                var product = {
                    id: el.id,
                    valor: valor,
                    qt: 0
                };
                cart.push(product);
                var btnMenos = card.find(".btn-menos");
                btnMenos.on("click", function() {
                    if (product.qt > 0) {
                        product.qt--;
                        quant.text(product.qt);
                    }
                    atualizarCarrinho();
                });
                var btnMais = card.find(".btn-mais");
                btnMais.on("click", function() {
                    product.qt++;
                    quant.text(product.qt);
                    atualizarCarrinho();
                });
            });
            $('.preloader').fadeOut(500);
        });
});
