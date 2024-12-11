// Dados dos produtos
const produtos = [
    {
      titulo: "Expresso",
      descricao: "Clássico e delicioso",
      preco: "R$ 06,00",
      imagem: "imagens/expresso.jpg",
    },
    {
      titulo: "Café com leite",
      descricao: "Saboroso e equilibrado",
      preco: "R$ 07,00",
      imagem: "imagens/leite.jpg",
    },
    {
      titulo: "Cappuccino",
      descricao: "Saboroso e equilibrado",
      preco: "R$ 10,00",
      imagem: "imagens/cappuccino.avif",
    },
    {
        titulo: "Mocha",
        descricao: "Saboroso e equilibrado",
        preco: "R$ 12,00",
        imagem: "imagens/mocha.jpg",
    },
    {
        titulo: "Machiato",
        descricao: "Saboroso e equilibrado",
        preco: "R$ 08,00",
        imagem: "imagens/machiato.jpg",
    },
    {
        titulo: "Affogato",
        descricao: "Saboroso e equilibrado",
        preco: "R$ 18,00",
        imagem: "imagens/affogato.jpg",
    },
    {
        titulo: "Mocha natalino",
        descricao: "Saboroso e equilibrado",
        preco: "R$ 18,00",
        imagem: "imagens/natal.avif",
    },
    {
        titulo: "Café de Panetone",
        descricao: "Saboroso e equilibrado",
        preco: "R$ 12,00",
        imagem: "imagens/panetone.jpg",
    },
  ];
  
  // Função para criar os cards dinamicamente
  function criarCards() {
    const template = document.getElementById("card-template");
    const container = document.getElementById("cards-container");
  
    produtos.forEach(produto => {
      const clone = template.content.cloneNode(true);
  
      // Preenche os dados no card
      clone.querySelector("img").src = produto.imagem;
      clone.querySelector("img").alt = produto.titulo;
      clone.querySelector(".card-title").textContent = produto.titulo;
      clone.querySelector(".descricao").textContent = produto.descricao;
      clone.querySelector(".text-muted").textContent = produto.preco;
  
      // Adiciona o card ao container
      container.appendChild(clone);
    });
  }
  
  // Chama a função para criar os cards
  document.addEventListener("DOMContentLoaded", criarCards);
  





  const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Função para atualizar a classe 'active'
    function updateActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.parentNode.classList.remove('active'));
        navLinks[index].parentNode.classList.add('active');
    }

    // Detecta rolagem
    window.addEventListener('scroll', updateActiveLink);

    // Detecta cliques
    navLinks.forEach((link) => {
        link.addEventListener('click', function () {
            navLinks.forEach((link) => link.parentNode.classList.remove('active'));
            this.parentNode.classList.add('active');
        });
    });


    ScrollReveal().reveal('.home',{
      origin: 'left',
      duration: 2000,
      distance: '20%'
    });


    ScrollReveal().reveal('.promo',{
      origin: 'right',
      duration: 2000,
      distance: '20%'
    });

    ScrollReveal().reveal('#cards-container',{
      origin: 'right',
      duration: 2000,
      distance: '30%',
      delay: 300,
    });

    ScrollReveal().reveal('.chef',{
      origin: 'left',
      duration: 2000,
      distance: '20%',
      delay: 100,
    });


    ScrollReveal().reveal('.user1',{
      origin: 'lright',
      duration: 2000,
      distance: '20%',
    });

    ScrollReveal().reveal('.user2',{
      origin: 'right',
      duration: 2000,
      distance: '20%',
      delay: 250,
    });

    ScrollReveal().reveal('.user3',{
      origin: 'right',
      duration: 2000,
      distance: '20%',
      delay: 500,
    });

    ScrollReveal().reveal('.icone-cafe',{
      origin: 'left',
      duration: 2000,
      distance: '20%',
    });



    




    