const rulingContent = document.getElementById('ruling-content')

rulingContent.addEventListener('change', (event) => {
    if (event.target.classList.contains('js-point-select')) {
        updateElementContent(event.target);
    }
})
rulingContent.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-point-add')) {
        addPoint(event.target);
    }
    else if (event.target.classList.contains('js-delete-button')) {
        deleteElement(event.target);
    }
    else if (event.target.classList.contains('js-subpoint-add')) {
        addSubpoint(event.target);
    }
    else if (event.target.classList.contains('js-edit-button')) {
        editElementContent(event.target);
    }
})

function handleContentInputKeydown(event, element){
    const key = event.key;
    const inputContent = element.value;

    if (key === 'Enter') {
        updateElementContent(element);
    }
}

function updateElementContent(element) {
    element.outerHTML = `<p>${element.value}<button class="js-edit-button">Edit</button></p>`;
}

function editElementContent(element) {
    const parentsParentElement = element.parentElement.parentElement
    const parentElement = element.parentElement;

    if (parentsParentElement.classList.contains("js-list-paragraph")) {
        parentElement.outerHTML = `<textarea rows="1" cols="30" onkeydown="handleContentInputKeydown(event, this)">${parentElement.innerText}</textarea>`
    }
    else if (parentsParentElement.classList.contains("js-subpoint")) {
        element.remove();
        parentElement.outerHTML = `<textarea rows="1" cols="50" onkeydown="handleContentInputKeydown(event, this)">${parentElement.innerText}</textarea>`
    }
    else if (parentsParentElement.classList.contains("js-point")) {
        parentElement.outerHTML = `
        <select class="js-point-select">
            <option value="#">--choose apriopate point name--</option>
            <option value="Withdrawals">Withdrawals</option>
            <option value="Walkovers for a Party">Walkovers for a Party</option>
            <option value="Walkovers for a Match">Walkovers for a Match</option>
            <option value="Appeals">Appeals</option>
            <option value="Penalties">Penalties</option>
            <option value="Schedule">Schedule</option>
            <option value="Extensions of deadlines">Extensions of deadlines</option>
            <option value="Change of the match playing system">Change of the match playing system</option>
            <option value="Overtime">Overtime</option>
            <option value="Interpretation">Interpretation</option>
            <option value="Permits">Permits</option>
            <option value="Provisions">Provisions</option>  
        </select>`
    }
    else if (parentsParentElement.classList.contains("js-signature")) {
        element.remove();
        parentElement.outerHTML = `<textarea rows="1" cols="50" onkeydown="handleContentInputKeydown(event, this)">${parentElement.innerText}</textarea>`
    }
}

function deleteElement(element) {
    const parentElement = element.parentElement;
    if (parentElement.classList.contains("js-list")) {
        parentElement.outerHTML = `<button onclick="addList(this)">Add list to subpoint</button>`
    }
    else {
        parentElement.remove();
    }
}

function addList(element) {
    const parentElement = element.parentElement;
    element.remove();
    parentElement.innerHTML += `
    <ul class="js-list">
        <li class="js-list-paragraph"><textarea rows="1" cols="30" onkeydown="handleContentInputKeydown(event, this)">Input paragraph content</textarea><button onclick="deleteElement(this)">Delete paragraph</button></li>
        <button onclick="addListParagraph(this)">Add paragraph</button>
        <button onclick="deleteElement(this)" class="js-list-deletion-btn">Delete list</button>
</ul>`
}

function addListParagraph(element) {
    const parentElement = element.parentElement;
    parentElement.querySelector('.js-list-deletion-btn').remove();
    element.remove();
    parentElement.innerHTML += `
    <li><textarea rows="1" cols="30" onkeydown="handleContentInputKeydown(event, this)">Input paragraph content</textarea><button onclick="deleteElement(this)">Delete paragraph</button></li>
    <button onclick="addListParagraph(this)">Add paragraph</button>
    <button onclick="deleteElement(this)" class="js-list-deletion-btn">Delete list</button>`
}

function addSubpoint(element) {
    const parentElement = element.parentElement;
    element.remove();

    parentElement.innerHTML += `
    <div id="${parentElement.id}-${parentElement.childElementCount - 2}" class="js-subpoint">
        <p>${parentElement.id[parentElement.id.length - 1]}.${parentElement.childElementCount - 2}</p>
        <textarea rows="1" cols="50" onkeydown="handleContentInputKeydown(event, this)">Input subpoint content</textarea>
        <button onclick="deleteElement(this)">Delete subpoint</button>
        <button onclick="addList(this)">Add list to subpoint</button>
    </div>
    <button onclick="addSubpoint(this)">Add subpoint</button>
    `
}

function addPoint(element) {
    const parentElement = element.parentElement;
    element.remove();

    parentElement.innerHTML += `
    <div id="js-point-${parentElement.childElementCount+1}" class="js-point">
        <p>${parentElement.childElementCount + 1}.</p>
        <select class="js-point-select">
            <option value="#">--choose apriopate point name--</option>
            <option value="Withdrawals">Withdrawals</option>
            <option value="Walkovers for a Party">Walkovers for a Party</option>
            <option value="Walkovers for a Match">Walkovers for a Match</option>
            <option value="Appeals">Appeals</option>
            <option value="Penalties">Penalties</option>
            <option value="Schedule">Schedule</option>
            <option value="Extensions of deadlines">Extensions of deadlines</option>
            <option value="Change of the match playing system">Change of the match playing system</option>
            <option value="Overtime">Overtime</option>
            <option value="Interpretation">Interpretation</option>
            <option value="Permits">Permits</option>
            <option value="Provisions">Provisions</option>  
        </select>
        <button class="js-delete-button">Delete point</button>
        <button class="js-subpoint-add">Add subpoint</button>
    </div>
    <button class="js-point-add">Add point</button>
    `
}
