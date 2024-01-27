function handleContentInputKeydown(event, element){
    const key = event.key;
    const inputContent = element.value;

    if (key === 'Enter') {
        updateElementContent(element);
    }
}

function updateElementContent(element) {
    element.outerHTML = `<p>${element.value}<button onclick="editElementContent(this)">Edit</button></p>`;
}

function editElementContent(element) {
    const parentsParentElementClassList = element.parentElement.parentElement.classList;
    const parentElement = element.parentElement;

    if (parentsParentElementClassList.contains("js-list-paragraph")) {
        parentElement.outerHTML = `<input placeholder="Input paragraph content" onkeydown="handleContentInputKeydown(event, this)">`
    }
    else if (parentsParentElementClassList.contains("js-subpoint")) {
        parentElement.outerHTML = `<input placeholder="Input subpoint content and press enter" onkeydown="handleContentInputKeydown(event, this)">`
    }
    else if (parentsParentElementClassList.contains("js-point")) {
        parentElement.outerHTML = `
        <select onchange="updateElementContent(this)">
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
        <li class="js-list-paragraph"><input placeholder="Input paragraph content" onkeydown="handleContentInputKeydown(event, this)"><button onclick="deleteElement(this)">Delete paragraph</button></li>
        <button onclick="addListParagraph(this)">Add paragraph</button>
        <button onclick="deleteElement(this)" class="js-list-deletion-btn">Delete list</button>
</ul>`
}

function addListParagraph(element) {
    const parentElement = element.parentElement;
    parentElement.querySelector('.js-list-deletion-btn').remove();
    element.remove();
    parentElement.innerHTML += `
    <li><input placeholder="Input paragraph content" onkeydown="handleContentInputKeydown(event, this)"><button onclick="deleteElement(this)">Delete paragraph</button></li>
    <button onclick="addListParagraph(this)">Add paragraph</button>
    <button onclick="deleteElement(this)" class="js-list-deletion-btn">Delete list</button>`
}

function addSubpoint(element) {
    const parentElement = element.parentElement;
    element.remove();

    parentElement.innerHTML += `
    <div id="${parentElement.id}-${parentElement.childElementCount - 2}" class="js-subpoint">
        <p>${parentElement.id[parentElement.id.length - 1]}.${parentElement.childElementCount - 2}</p>
        <input placeholder="Input subpoint content and press enter" onkeydown="handleContentInputKeydown(event, this)">
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
        <select onchange="updateElementContent(this)">
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
        <button onclick="deleteElement(this)">Delete point</button>
        <button onclick="addSubpoint(this)">Add subpoint</button>
    </div>
    <button onclick="addPoint(this)">Add point</button>
    `
}
