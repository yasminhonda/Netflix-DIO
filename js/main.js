$('.owl-carousel').owlCarousel({
    loop:true, //valor TRUE torna o loop infinito, FALSE faria ele apenas ir até o final e voltar.
    margin:10, //margin entre os itens
    nav:false, //TRUE aparece as setinhas de navegação embaixo, FALSE tira elas
    responsive:{ //responsividade do carrousel
        0:{ //1px ou mais, 1 tem
            items:1
        },
        600:{ //600px ou mais, terá 3 items
            items:3
        },
        1000:{ //1000px ou mais, terá 5 items
            items:5
        }
    }
})