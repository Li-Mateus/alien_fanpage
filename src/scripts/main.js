document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    // Header: visibilidade
    window.addEventListener('scroll', function() {
        const posicaoAtual = this.window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosHeader();
        } else {
            exibeElementosHeader();
        }
    })

    // Seção do ciclo de vida: programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAbas();
            aba.classList.add('cycle__contents__item--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('cycle__tabs__button--is-active');
        })
    }
})

// Header:
function ocultaElementosHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

// Seção ciclo de vida:
function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('cycle__contents__item--is-active');
    }
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('cycle__tabs__button--is-active');
    }
}