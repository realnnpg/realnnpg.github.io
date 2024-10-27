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

// Scroll-triggered transition
window.addEventListener('scroll', () => {
    const sectionOne = document.querySelector('.section-one');
    const sectionTwo = document.querySelector('.section-two');
    
    // Check if the user has scrolled down by a specific threshold (e.g., 100px)
    if (window.scrollY > 100) {
        sectionOne.style.opacity = '0';
        sectionTwo.style.opacity = '1';
    }
});
