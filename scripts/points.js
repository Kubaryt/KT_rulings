function addSubpoint(element) {
    const parentElement = element.parentElement;
    element.remove();

    parentElement.innerHTML += `
    <div id="${parentElement.id}-${parentElement.childElementCount}">
        <p>${parentElement.id[parentElement.id.length - 1]}.${parentElement.childElementCount} <input placeholder="Input subpoint content and press enter" onkeydown="handleContentInputKeydown(event, this)"></p>
        <button onclick="addList(this)">Add list to subpoint</button>
    </div>
    <button onclick="addSubpoint(this)">Add subpoint</button>
    `
}

function addPoint(element) {
    const parentElement = element.parentElement;
    element.remove();

    parentElement.innerHTML += `
    <div id="js-point-${parentElement.childElementCount}">
        <p>${parentElement.childElementCount + 1}. <input placeholder="Input point name and press enter" onkeydown="handleContentInputKeydown(event, this)"></p>
        <button onclick="addSubpoint(this)">Add subpoint</button>
    </div>
    <button onclick="addPoint(this)">Add point</button>
    `
}