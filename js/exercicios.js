function criarElementoResultadoExercicio(exercicio) {
  // Cria um elemento HTML para exibir as informações de um exercício.
  // Retorna uma string HTML formatada.

  return `
      <div class="item-resultado">
        <h2>
          <a href="#" class="mais-informacoes" 
             data-titulo="${exercicio.Nome}" 
             data-conteudo='${JSON.stringify(exercicio)}'>
            ${exercicio.Nome} </a>
        </h2>
        <div>
          ${
            exercicio.Link
              ? `<img class="imagem" src="${exercicio.Link}" alt="${exercicio.Nome}">`
              : ""
          } </div>
        <div>
          ${
            exercicio.MusculoTrabalhado
              ? `<p><strong>Músculo Trabalhado:</strong> ${exercicio.MusculoTrabalhado}</p>`
              : ""
          } ${
    exercicio.Equipamento
      ? `<p><strong>Equipamento:</strong> ${exercicio.Equipamento}</p>`
      : ""
  } <a href="#" class="mais-informacoes" 
             data-titulo="${exercicio.Nome}" 
             data-conteudo='${JSON.stringify(exercicio)}'>
            Mais informações
          </a>
        </div>
      </div>
    `;
}

function gerarResultadosExercicios(resultados) {
  let resultadosHTML = "";

  // Gerando o HTML para cada exercício

  resultados.forEach((exercicio) => {
    resultadosHTML += criarElementoResultadoExercicio(exercicio);
  });

  // Inserindo o HTML gerado na seção
  document.getElementById("resultados-exercicios").innerHTML = resultadosHTML;

  // Adiciona evento de clique nos links "Mais informações"
  const maisInformacoesLinks = document.querySelectorAll(".mais-informacoes");
  maisInformacoesLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const titulo = e.target.getAttribute("data-titulo");
      const conteudo = JSON.parse(e.target.getAttribute("data-conteudo")); // Converte de volta para objeto
      abrirModalExercicio(titulo, conteudo);
    });
  });
}

function abrirModalExercicio(titulo, conteudo) {
  // Formata o conteúdo do modal
  let conteudoHTML = `
    <div class=" item-Modal">
        <strong><h2>${titulo}</h2>  <div>${
    conteudo.Link
      ? `<img class="imagem" src="${conteudo.Link}" alt="${conteudo.Nome}">`
      : ""
  }</div></strong> 
        <div class="texto">
            ${
              conteudo.Descricao
                ? `<h3><strong>Descrição:</strong> ${conteudo.Descricao}</h3>`
                : ""
            }
            ${
              conteudo.MusculoTrabalhado
                ? `<h3><strong>Músculo Trabalhado:</strong> ${conteudo.MusculoTrabalhado}</h3>`
                : ""
            }
            ${
              conteudo.Equipamento
                ? `<h3><strong>Equipamento:</strong> ${conteudo.Equipamento}</h3>`
                : ""
            }
        </div>
    </div>`;

  document.getElementById("modalConteudo").innerHTML = conteudoHTML;
  document.getElementById("myModal").style.display = "block";
}

// Fecha o modal quando o usuário clica no "x"
document.querySelector(".close").onclick = function () {
  document.getElementById("myModal").style.display = "none";
};

// Fecha o modal quando o usuário clica fora do modal
window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
};

function pesquisar() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  let resultadosFiltrados;

  if (input === "") {
    resultadosFiltrados = exercicios; // Mostra todos os exercícios se o campo estiver vazio
  } else {
    // Filtra com base em todos os campos
    resultadosFiltrados = exercicios.filter(
      (exercicio) =>
        exercicio.Nome.toLowerCase().includes(input) ||
        (exercicio.Descricao &&
          exercicio.Descricao.toLowerCase().includes(input)) ||
        (exercicio.MusculoTrabalhado &&
          exercicio.MusculoTrabalhado.toLowerCase().includes(input)) ||
        (exercicio.Equipamento &&
          exercicio.Equipamento.toLowerCase().includes(input))
    );
  }

  gerarResultadosExercicios(resultadosFiltrados);
}
