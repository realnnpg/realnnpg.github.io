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


//info

document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});


//swiper
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



//online_players

function initServerData(serverIp,serverPort){
  const serverIpElement = document.getElementById('server-ip');
  serverIpElement.innerHTML = serverIp;
  fetch('https://mcapi.us/server/status?ip='+serverIp+'&port='+serverPort)
  .then(response => response.json())
  .then(data => handleServerStatus(data));

  function handleServerStatus(data){
      if(data.status=='error'){
          console.log(data.error);
          return false;
      }
      const motd = document.getElementById("motd");
      motd.innerHTML = data.motd;

      const playerCounter = document.getElementById("player-count");
      playerCounter.innerHTML = data.players.now;

      const logo = document.getElementById("server-icon");
      logo.src = data.favicon;
  } 
}


initServerData("play.vanillarealms.com","19132");