var botoes = document.querySelectorAll('button.img');

botoes.forEach(function(botao) {
    botao.addEventListener('mouseover', function() {

        var todasDescricoes = document.querySelectorAll('.descricao.ativo');
        todasDescricoes.forEach(function(descricao) {
            descricao.classList.remove('ativo');
        });

        var descricaoClass = this.getAttribute('data-descricao');

        var descricao = document.querySelector('.' + descricaoClass);
        descricao.classList.add('ativo');
    });

    botao.addEventListener('mouseout', function() {
        var descricaoClass = this.getAttribute('data-descricao');
        var descricao = document.querySelector('.' + descricaoClass);
        descricao.classList.remove('ativo');
    });
});
