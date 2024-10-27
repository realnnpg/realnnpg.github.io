// Function to edit box content
function editBox(element) {
    let info = prompt("Edit the information:", element.innerHTML);
    if (info !== null) {
        element.innerHTML = info;
    }
}

// Drag and Drop functionality
let draggedElement = null;
let offsetX = 0;
let offsetY = 0;

function dragStart(event) {
    draggedElement = event.target;
    const elementRect = draggedElement.getBoundingClientRect();
    offsetX = event.clientX - elementRect.left;
    offsetY = event.clientY - elementRect.top;

    document.addEventListener("mousemove", dragMove);
    document.addEventListener("mouseup", dragEnd);
}

function dragMove(event) {
    if (draggedElement) {
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

// Display the second section after a delay
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.section-two').style.opacity = '1';
    }, 4000); // Adjust delay as needed
});
