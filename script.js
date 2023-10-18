var nome = window.prompt('Qual seu nome ? ');
window.alert(`Olá, ${nome} seja bem vindo a minha página de multilinks`);

function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light');

    //pegar a tag img
    const img = document.querySelector(".profile img");


    //substituir a imagem
    if(html.classList.contains('light')){
        //se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png');
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando oculos e jaqueta preta, sem barba e fundo degrade roxo para azul');
    }else {
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png');
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando oculos e camisa preta, barba e fundo amarelo');
    }
}