function handleContentInputKeydown(event, element){
    const key = event.key;
    const inputContent = element.value;

    if (key === 'Enter') {
        updateElementContent(inputContent, element);
    }
}

function updateElementContent(inputContent, element) {
    element.outerHTML = `<p>${inputContent}</p>`;
}
