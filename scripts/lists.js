function addList(element) {
    const parentElement = element.parentElement;
    element.remove();
    parentElement.innerHTML += `
    <ul>
        <li><input placeholder="Input paragraph content" onkeydown="handleContentInputKeydown(event, this)"></li>
        <button onclick="addListParagraph(this)">Add paragraph</button>
    </ul>
    `
}

function addListParagraph(element) {
    const parentElement = element.parentElement;
    element.remove();
    parentElement.innerHTML += `
    <li><input placeholder="Input paragraph content" onkeydown="handleContentInputKeydown(event, this)"></li>
    <button onclick="addListParagraph(this)">Add paragraph</button>
    `
}