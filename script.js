function geser() {
  var scrollto = document.getElementById("contact");

  if (scrollto) {
    scrollto.scrollIntoView({
      behavior: "smooth",
    });
  }
}

var a = document.getElementById("hire");
a.addEventListener("click", () => {
  geser();
});
