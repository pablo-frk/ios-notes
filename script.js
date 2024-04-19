function apagar() {
    // window.alert('BOTÃO FUNCIONANDO')
    var editor = document.getElementById('editor');
    editor.innerHTML = ''
}

function toggleNegrito() {
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        var span = document.createElement('span');
        span.style.fontWeight = 'bold';
        
        // Verifica se o texto selecionado está em negrito
        var isBold = range.commonAncestorContainer.parentNode.tagName === 'SPAN' &&
                      range.commonAncestorContainer.parentNode.style.fontWeight === 'bold';
        
        if (isBold) {
            // Se estiver em negrito, remove o elemento <span> que envolve o texto
            range.commonAncestorContainer.parentNode.outerHTML = range.commonAncestorContainer.parentNode.innerHTML;
        } else {
            // Caso contrário, aplica o estilo de negrito
            range.surroundContents(span);
        }
    }
}

function italico() {
    window.alert('BOTÃO FUNCIONANDO')
}

function lista() {
    window.alert('BOTÃO FUNCIONANDO')
}

function linke() {
    window.alert('BOTÃO FUNCIONANDO')
}
