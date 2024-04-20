function apagar() {
    // window.alert('BOTÃO FUNCIONANDO')
    var editor = document.getElementById("editor");
    editor.innerHTML = "";
}

// function toggleNegrito() {
//     var selection = window.getSelection();
//     if (selection.rangeCount > 0) {
//         var range = selection.getRangeAt(0);
//         var span = document.createElement("span");
//         span.style.fontWeight = "bold";

//         // Verifica se o texto selecionado está em negrito
//         var isBold =
//             range.commonAncestorContainer.parentNode.tagName === "SPAN" &&
//             range.commonAncestorContainer.parentNode.style.fontWeight ===
//                 "bold";

//         if (isBold) {
//             // Se estiver em negrito, remove o elemento <span> que envolve o texto
//             range.commonAncestorContainer.parentNode.outerHTML =
//                 range.commonAncestorContainer.parentNode.innerHTML;
//         } else {
//             // Caso contrário, aplica o estilo de negrito
//             range.surroundContents(span);
//         }
//     }
// }

const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const parentElement = range.commonAncestorContainer.parentElement;
      parentElement.classList.toggle('bold');
    }
  });


function italico() {
    window.alert("BOTÃO FUNCIONANDO");
}

function lista() {
    window.alert("BOTÃO FUNCIONANDO");
}

function linke() {
    window.alert("BOTÃO FUNCIONANDO");
}

var txtdata = document.getElementById("date");
// const date = new Date();
// date.getFullYear
// date.toLocaleString("pt-br")

function formatarDataParaPortugues(data) {
    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();

    return `${dia} de ${mes} de ${ano}`;
}

const dataAtual = new Date();
const dataFormatada = formatarDataParaPortugues(dataAtual);
console.log(dataFormatada); // Exemplo de saída: "19 de Abril de 2024"

const elementoData = document.getElementById("data-formatada");
elementoData.textContent = dataFormatada;