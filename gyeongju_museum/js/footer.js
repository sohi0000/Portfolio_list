let related = document.querySelector(".related_site > a"),
    relatedToggle = document.querySelector(".related_site");

  related.addEventListener("click", function(){
  relatedToggle.classList.toggle("active");
});