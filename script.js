
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

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.section-two').style.opacity = '1';
    }, 4000);
});
