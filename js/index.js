//Identificar o clique no menu
//Verificar o item que foi clicado e fazer referência com o alvo
//Verificar a distância entre o alvo e o topo
//Animar o scroll até o alvo

$("header a").click(function (e) {
  e.preventDefault();
  var id = $(this).attr("href");
  var targetOffset = $(id).offset().top; //Sem o .top, devolve um objeto com Left e Top
  $("html, body").animate(
    {
      scrollTop: targetOffset,
    },
    700
  );
});

/* Solução do professor

function ativaScrollSuave(selector) {
    $(selector).click(function (event) {
        event.preventDefault();
        var target = $(this).attr("href");
        
        $("html, body").animate(
            {
                scrollTop: $(target).offset().top,
            },
            1000
            );
        });
    }
    
    ativaScrollSuave("a[href*=painel-sobre");
    ativaScrollSuave("a[href*=painel-palestrantes");
    ativaScrollSuave("a[href*=form");
    
*/
