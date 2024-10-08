
//SIDEBAR

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});


// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
  }
}

//COPY LINK

function copyLink(element) {
  // Create a temporary textarea element
  const tempTextarea = document.createElement('textarea');
  // Set the value of the textarea to the text of the clicked element
  tempTextarea.value = element.innerText;
  // Append the textarea to the document body
  document.body.appendChild(tempTextarea);
  // Select the text in the textarea
  tempTextarea.select();
  // Copy the selected text to the clipboard
  document.execCommand('copy');
  // Remove the temporary textarea from the document
  document.body.removeChild(tempTextarea);
  // Optionally, alert the user that the text has been copied
  //alert('Text copied to clipboard');
  document.getElementById("copylink").innerHTML = "Copied to clipboard!";
  setTimeout(function() {
    document.getElementById("copylink").innerHTML = "play.vanillarealms.com";
  }, 3000);
}

//ANIMATION FEATURES

document.addEventListener("DOMContentLoaded", function() {
  let featureBoxes = document.querySelectorAll('.feature-item');
  let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              featureBoxes.forEach((box, index) => {
                  setTimeout(() => {
                      box.classList.add('active');
                  }, index * 200);  // Delay each feature box animation by 200ms
              });
          }
      });
  }, { threshold: 0.5 });  // Trigger when 50% of the container is visible

  observer.observe(document.querySelector('.features-container'));
});


//INFO

document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});


//SWIPER

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


//ONLINE PLAYERS

function initServerData(){
  fetch('https://mcapi.us/server/status?ip=play.vanillarealms.com&port=19132')
  .then(response => response.json())
  .then(data => handleServerStatus(data));
  
  function handleServerStatus(data){
      const playerCounter = document.getElementById("player-count");
      playerCounter.innerHTML = data.players.now;

  } 
}

initServerData();
  
