// ======================= FUNCÃO QUE USA O BOTÃO FILTRAR ====================

// document.addEventListener("DOMContentLoaded", () => {
//   const filtroBtn = document.querySelector(".btn-primary");
//   const categoriaSelect = document.getElementById("categoria");
//   const precoSelect = document.getElementById("preco");
//   const produtos = document.querySelectorAll(".produto-card");

//   filtroBtn.addEventListener("click", () => {
//     const categoriaSelecionada = categoriaSelect.value;
//     const precoSelecionado = precoSelect.value;

//     produtos.forEach((produto) => {
//       const categoriaProduto = produto.dataset.categoria;
//       const precoProduto = parseFloat(produto.dataset.preco);

//       // Verifica se o produto deve ser exibido
//       let exibir = true;

//       // Filtro de categoria
//       if (categoriaSelecionada && categoriaSelecionada !== categoriaProduto) {
//         exibir = false;
//       }

//       // Filtro de preço
//       if (precoSelecionado && exibir) {
//         if (precoSelecionado === "0-50" && precoProduto > 50) exibir = false;
//         else if (
//           precoSelecionado === "50-100" &&
//           (precoProduto < 50 || precoProduto > 100)
//         )
//           exibir = false;
//         else if (
//           precoSelecionado === "100-200" &&
//           (precoProduto < 100 || precoProduto > 200)
//         )
//           exibir = false;
//         else if (precoSelecionado === "200+" && precoProduto <= 200)
//           exibir = false;
//       }

//       produto.style.display = exibir ? "block" : "none";
//     });
//   });
// });

// =========================  FUNÇÃO AUTOMÁTICA    ==================================================
document.addEventListener("DOMContentLoaded", () => {
  const categoriaSelect = document.getElementById("categoria");
  const precoSelect = document.getElementById("preco");
  const produtos = document.querySelectorAll(".produto-card");

  // Cria elemento para mostrar número de produtos

  //   const resultadoTexto = document.createElement("p");
  //   resultadoTexto.style.marginTop = "10px";
  //   resultadoTexto.style.fontWeight = "bold";

  const resultadoTexto = document.createElement("p");
  resultadoTexto.classList.add("resultado-filtro");
  resultadoTexto.innerHTML = `<i class="fas fa-search"></i> Nenhum produto encontrado`;

  categoriaSelect.parentElement.parentElement.appendChild(resultadoTexto);

  function filtrarProdutos() {
    const categoriaSelecionada = categoriaSelect.value;
    const precoSelecionado = precoSelect.value;

    let totalVisiveis = 0;

    produtos.forEach((produto) => {
      const categoriaProduto = produto.dataset.categoria;
      const precoProduto = parseFloat(produto.dataset.preco);
      let exibir = true;

      if (categoriaSelecionada && categoriaSelecionada !== categoriaProduto) {
        exibir = false;
      }

      if (precoSelecionado && exibir) {
        if (precoSelecionado === "0-50" && precoProduto > 50) exibir = false;
        else if (
          precoSelecionado === "50-100" &&
          (precoProduto < 50 || precoProduto > 100)
        )
          exibir = false;
        else if (
          precoSelecionado === "100-200" &&
          (precoProduto < 100 || precoProduto > 200)
        )
          exibir = false;
        else if (precoSelecionado === "200+" && precoProduto <= 200)
          exibir = false;
      }

      if (exibir) {
        produto.style.display = "block";
        totalVisiveis++;
      } else {
        produto.style.display = "none";
      }
    });

    // Atualiza texto de resultado
    resultadoTexto.textContent =
      totalVisiveis === 0
        ? "Nenhum produto encontrado"
        : `${totalVisiveis} produto${totalVisiveis > 1 ? "s" : ""} encontrado${
            totalVisiveis > 1 ? "s" : ""
          }`;
  }

  // Adiciona evento ao mudar os filtros
  categoriaSelect.addEventListener("change", filtrarProdutos);
  precoSelect.addEventListener("change", filtrarProdutos);
});
