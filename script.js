window.addEventListener('DOMContentLoaded', (event) => {
  const dt = new Date();
  document.getElementById("currentYear").innerHTML = dt.getFullYear();

  document.getElementsByTagName("body")[0].style.opacity = 1;

  const row = document.getElementsByClassName("expandalbe")[0];
  const accordion = document.getElementsByClassName("accordion")[0];
  const expandButton = document.getElementsByClassName("expandButton")[0];
  
  row.addEventListener('click', (e) => {
    expandButton.classList.toggle("show");
    expandButton.classList.contains("show") 
      ? expandButton.innerHTML = 'remove' 
      : expandButton.innerHTML ='add';

    if (accordion.style.maxHeight) {
      accordion.style.maxHeight = null;
    } else {
      accordion.style.maxHeight = accordion.scrollHeight + "px";;
    }
  })
})