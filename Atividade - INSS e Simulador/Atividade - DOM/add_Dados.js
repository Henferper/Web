function add_Dados() {
    var nome = document.getElementById("Nome").value;
    var genero = document.getElementById("Genero").value;
    var diretor = document.getElementById("Diretor").value;

    if (nome === "" || genero === "" || diretor === "") {
        alert("Campos Faltando");
        return;
    }

    var tabelaExistente = document.getElementById("tabelaFilmes");

    if (!tabelaExistente) {
        var ntabela = document.createElement("table");
        ntabela.id = "tabelaFilmes"; 
        var cabecalho = ntabela.createTHead(); 
        var linhaCabecalho = cabecalho.insertRow(); 

        var celula1 = linhaCabecalho.insertCell(0);
        var celula2 = linhaCabecalho.insertCell(1);
        var celula3 = linhaCabecalho.insertCell(2);

        celula1.textContent = "Filme";
        celula2.textContent = "Gênero";
        celula3.textContent = "Diretor";

        document.body.appendChild(ntabela); 
    }
   
    var tabela = document.getElementById("tabelaFilmes");

    var novaLinha = tabela.insertRow();

    var celulaNome = novaLinha.insertCell();
    var celulaGenero = novaLinha.insertCell();
    var celulaDiretor = novaLinha.insertCell();

    celulaNome.textContent = nome;
    celulaGenero.textContent = genero;
    celulaDiretor.textContent = diretor;
}