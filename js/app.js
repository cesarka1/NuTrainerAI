function criarElementoResultado(titulo, descricao, grupoMuscular, nivel, objetivo, link, exerciciosOuPratos) {
    return `
        <div class="item-resultado">
            <h2>
                <a href="#" class="mais-informacoes" data-titulo="${titulo}" data-conteudo='${JSON.stringify(exerciciosOuPratos)}'>${titulo}</a>
            </h2>
            <p class="descricao-meta">${descricao}</p>
            ${grupoMuscular ? `<p><strong>Grupo Muscular:</strong> ${grupoMuscular}</p>` : ''}
            ${nivel ? `<p><strong>Nível:</strong> ${nivel}</p>` : ''}
            ${objetivo ? `<p><strong>Objetivo:</strong> ${objetivo}</p>` : ''}
            <a href="#" class="mais-informacoes" data-titulo="${titulo}" data-conteudo='${JSON.stringify(exerciciosOuPratos)}'>Mais informações</a>
        </div>
    `;
}

function gerarResultados() {
    let resultadosHTML = '';

    // Adicionando treinos à seção
    treinos.forEach(treino => {
        resultadosHTML += criarElementoResultado(
            treino.Titulo,
            treino.Descricao,
            treino.GrupoMuscular,
            treino.Nivel,
            '', // Objetivo não se aplica aqui
            '#', // Altere '#' para um link relevante
            treino.Exercicios // Passa o array de objetos
        );
    });

    // Adicionando dietas à seção
    dietas.forEach(dieta => {
        resultadosHTML += criarElementoResultado(
            dieta.Titulo,
            dieta.Descricao,
            '', // Grupo Muscular não se aplica aqui
            '', // Nível não se aplica aqui
            dieta.Objetivo,
            '#', // Altere '#' para um link relevante
            dieta.Refeicoes // Passa o array de objetos
        );
    });

    // Inserindo o HTML gerado na seção
    document.getElementById('resultados').innerHTML = resultadosHTML;

    // Adiciona evento de clique nos links "Mais informações"
    const maisInformacoesLinks = document.querySelectorAll('.mais-informacoes');
    maisInformacoesLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const titulo = e.target.getAttribute('data-titulo');
            const conteudo = JSON.parse(e.target.getAttribute('data-conteudo')); // Converte de volta para objeto
            abrirModal(titulo, conteudo);
        });
    });
}

function abrirModal(titulo, conteudo) {
    document.getElementById('modalTitulo').innerText = titulo;

    // Formata o conteúdo do modal
    let conteudoHTML = '<div class="flex-container">';
    conteudo.forEach(item => {
        conteudoHTML += 
        `<div class="item-resultado item-modal">
            <strong>${item.Nome} <div>${item.Link ? `<img  class="imagem"  src="${item.Link}" alt="${item.Nome}">`: ''} </div></strong> 
            
                <div class="texto">
                    ${item.Series ? `<p><strong>Series:</strong> ${item.Series}</p>` : ''}
                    ${item.Repeticoes ? `<p><strong>Repeticoes:</strong> ${item.Repeticoes}</p>` : ''}
                    ${item.Descanso ? `<p><strong>Descanso:</strong> ${item.Descanso}</p>` : ''}
                    ${item.Equipamento ? `<p><strong>Equipamento:</strong> ${item.Equipamento}</p>` : ''}


                    ${item.Alimentos ? `<p><strong>Alimentos:</strong> ${item.Alimentos}</p>` : ''}
                    ${item.Calorias ? `<p><strong>Calorias:</strong> ${item.Calorias}</p>` : ''}
                    ${item.Macros ? `<p><strong>Macros:</strong> 
                        <strong>Carboidratos: </strong>${item.Macros.carboidratos}
                            <strong>Proteinas: </strong>${item.Macros.proteinas}
                            <strong>Gorduras: </strong>${item.Macros.gorduras}
                        </p>` : ''}
                </div>
                
            
            
        </div>
        `
       
        ;
    });
    conteudoHTML += '</div>';

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
document.addEventListener('DOMContentLoaded', gerarResultados);