function editBox(element) {
    let info = prompt("Edit the information:", element.innerHTML);
    if (info !== null) {
        element.innerHTML = info;
    }
}

let draggedElement = null;
let offsetX = 0;
let offsetY = 0;

function dragStart(event) {
    draggedElement = event.target;
    
    // Get the bounding rectangle of the container
    const containerRect = document.querySelector(".container").getBoundingClientRect();
    const elementRect = draggedElement.getBoundingClientRect();

    // Calculate the offset relative to the container
    offsetX = event.clientX - elementRect.left;
    offsetY = event.clientY - elementRect.top;

    document.addEventListener("mousemove", dragMove);
    document.addEventListener("mouseup", dragEnd);
}

function dragMove(event) {
    if (draggedElement) {
        // Calculate the new position relative to the container
        const containerRect = document.querySelector(".container").getBoundingClientRect();
        const newLeft = event.clientX - containerRect.left - offsetX;
        const newTop = event.clientY - containerRect.top - offsetY;

        draggedElement.style.left = `${newLeft}px`;
        draggedElement.style.top = `${newTop}px`;
    }
}

function dragEnd() {
    draggedElement = null;
    document.removeEventListener("mousemove", dragMove);
    document.removeEventListener("mouseup", dragEnd);
}
