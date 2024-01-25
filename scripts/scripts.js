function handleContentInputKeydown(event, element){
    const key = event.key;
    const inputContent = element.value;

    if (key === 'Enter') {
        updateElementContent(inputContent, element);
    }
    else if (key === 'Escape') {
        element.value = '';
    }
}

function updateElementContent(inputContent, element) {
    element.innerHTML = `<p>${inputContent}</p>`
}