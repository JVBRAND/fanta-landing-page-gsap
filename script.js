// CRIAÇÃO DE UMA TIMELINE DO GSAP COM ANIMAÇÕES SINCRONIZADAS COM O SCROLL


var tl = gsap.timeline({
    scrollTrigger : {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: false, //depuração
    },
});

tl.to(
    '#fanta',
    {

        top: "120%", //MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
        left: '0%',
    },
    'orange'
); //NOMEANDO ESTE TRECHO DE ANIMAÇÃO COMO ORANGE PARA SINCRONIZAÇÃO

tl.to(
    '#laranja-cortada',
    {
        top: '160%',
        left: '23%',
    },
    'orange'
); //Sincronizando com a animação nomeada 'orange'

tl.to(
    '#laranja',
    {
        width: '15%', // Reduz a largura do elemento com id 'orange' para 15%
        top: '160%', // move o elemento para 160% do topo
        right: '10%',// move o elemento para 10% da direita 
    },
    'orange'
);

tl.to(
    '#folha',
    {

        top: "110%", //MOVE O ELEMENTO COM ID FANTA PARA 110% DO TOPO
        rotate: '130deg', //rotaciona o elemento em 130 graus 
        left: '70%', // move o elemento para 70% da esquerda 
    },
    'orange'
);

tl.to(
    '#folha2',
    {

        top: "110%", //MOVE O ELEMENTO COM ID FANTA PARA 110% DO TOPO
        rotate: '530deg', //rotaciona o elemento em 130 graus 
        left: '0%', // move o elemento para 70% da esquerda 
    },
    'orange'
);

//CRIANDO OUTRA TIMELINE

var tl2 = gsap.timeline({
    scrollTrigger : {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%', //Fim da animação (topo da tela atinge 50% da altura quando estiver 20% da seção .three)
        scrub: true,
      
    },
});

// Definindo a animação dos elementos com a timeline 'tl2'

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg', // inicia o elemento com classe 'lemon1' rotacionando 
        left: '-100%', // inicia o elemnto fora da tela, -100%
        top: '110%', // inicia o elemento ligeiramente abaixo da tela 
    },
    'ca'
); // nomeando este trecho de animação como 'ca' para sincronização

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg', // inicia o elemento com classe 'lemon1' rotacionando 
        left: '-100%', // inicia o elemnto fora da tela, -100%
        top: '110%', // inicia o elemento ligeiramente abaixo da tela 
    },
    'ca'
);

tl2.from(
    '.lemon2',
    {
        rotate: '90deg', // inicia o elemento com classe 'lemon1' rotacionando 
        left: '100%', // inicia o elemnto fora da tela, 100%
        top: '110%', // inicia o elemento ligeiramente abaixo da tela 
    },
    'ca'
); 

tl2.from(
    '#pepsi',
    {
        rotate: '90deg', // inicia o elemento com classe 'lemon1' rotacionando 
        left: '100%', // inicia o elemnto fora da tela, -100%
        top: '110%', // inicia o elemento ligeiramente abaixo da tela 
    },
    'ca'
);

tl2.to(
    '#laranja-cortada',
    {
        width: '18%',
        left: '42%',
        top: '204%',
    },
    'ca'
);

tl2.to(
    '#fanta',
    {
        width: '35%',
        left: '33%',
        top: '210%',
    },
    'ca'
);
