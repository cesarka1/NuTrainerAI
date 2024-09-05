function criarElementoResultadoExercicio(exercicio) {
    return `
        <div class="item-resultado">
            <h2>
                <a href="#" class="mais-informacoes" data-titulo="${exercicio.Nome}" data-conteudo='${JSON.stringify(exercicio)}'>${exercicio.Nome}</a>
            </h2>
            <div>${exercicio.Link ? `<img class="imagem" src="${exercicio.Link}" alt="${exercicio.Nome}">` : ''}</div>
            <div>
            ${exercicio.MusculoTrabalhado ? `<p><strong>Músculo Trabalhado:</strong> ${exercicio.MusculoTrabalhado}</p>` : ''}
            ${exercicio.Equipamento ? `<p><strong>Equipamento:</strong> ${exercicio.Equipamento}</p>` : ''}
            <a href="#" class="mais-informacoes" data-titulo="${exercicio.Nome}" data-conteudo='${JSON.stringify(exercicio)}'>Mais informações</a>
            </div>
        </div>
    `;
}

function gerarResultadosExercicios() {
    let resultadosHTML = '';

    // Gerando o HTML para cada exercício
    exercicios.forEach(exercicio => {
        resultadosHTML += criarElementoResultadoExercicio(exercicio);
    });

    // Inserindo o HTML gerado na seção
    document.getElementById('resultados-exercicios').innerHTML = resultadosHTML;

    // Adiciona evento de clique nos links "Mais informações"
    const maisInformacoesLinks = document.querySelectorAll('.mais-informacoes');
    maisInformacoesLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const titulo = e.target.getAttribute('data-titulo');
            const conteudo = JSON.parse(e.target.getAttribute('data-conteudo')); // Converte de volta para objeto
            abrirModalExercicio(titulo, conteudo);
        });
    });
}

function abrirModalExercicio(titulo, conteudo) {
    document.getElementById('modalTitulo').innerText = titulo;

    // Formata o conteúdo do modal
    let conteudoHTML = `
    <div class="item-resultado ">
        <strong>${conteudo.Nome} <div>${conteudo.Link ? `<img class="imagem" src="${conteudo.Link}" alt="${conteudo.Nome}">` : ''}</div></strong> 
        <div class="texto">
            ${conteudo.Descricao ? `<p><strong>Descrição:</strong> ${conteudo.Descricao}</p>` : ''}
            ${conteudo.MusculoTrabalhado ? `<p><strong>Músculo Trabalhado:</strong> ${conteudo.MusculoTrabalhado}</p>` : ''}
            ${conteudo.Equipamento ? `<p><strong>Equipamento:</strong> ${conteudo.Equipamento}</p>` : ''}
        </div>
    </div>`;

    document.getElementById('modalConteudo').innerHTML = conteudoHTML;
    document.getElementById('myModal').style.display = "block";
}

// Fecha o modal quando o usuário clica no "x"
document.querySelector('.close').onclick = function() {
    document.getElementById('myModal').style.display = "none";
}

// Fecha o modal quando o usuário clica fora do modal
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
}

// Chama a função para gerar os resultados após o carregamento do DOM
document.addEventListener('DOMContentLoaded', gerarResultadosExercicios);
