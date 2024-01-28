/*
objetivo 1: quando o usuario clica no botao de seleçao plataformas deve abrir uma caixa com os botoes de seleçao de plataforma
    passo 1: pegar o botao de selçeao de plataformas no JS para poder verificar quando o usuario clicar em cima dele
    passo 2: pegar o elemento do conteudo que precisa ser mostrado
    passo 3: pegar o click do usuario no JS
    passo 4: quando o usuario clicar no botao aplicar classe ativo na listagem de plataformas dentro do botao para que o conteudo apareça


objetivo 2: caso ja esteja aberta e o usuario clicar em cima do botao o conteudo deve ser escondido
    passo 1: verificar se o botao ja esta aberto, se sim, devemos remover a classe ativo para que ele esconda o conteudo novamente
*/


const botao = document.querySelector(".btn-plataforma")
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () =>{
    
    elementoPlataformas.classList.toggle("ativo");
    }
)