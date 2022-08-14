let body = document.body;
let jumbotron = document.getElementById("jumbotron");
let navContainer = document.getElementById("navContainer");
let navbarNav1 = document.getElementById("navbarNav1");
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let h2 = document.getElementById("h2");
let contactContent = document.getElementById("contactContent");
let darkMode = document.getElementById("darkMode");
let darkIcon = document.getElementById("darkIcon");

function dark() {
  body.classList.toggle("darkAbout");
  navContainer.classList.toggle("darkNav");
  navbarNav1.classList.toggle("darkNav");
  jumbotron.classList.toggle("dark");
  about.classList.toggle("darkAbout");
  projects.classList.toggle("dark");
  card1.classList.toggle("darkAbout");
  card2.classList.toggle("darkAbout");
  card3.classList.toggle("darkAbout");
  card4.classList.toggle("darkAbout");
  card5.classList.toggle("darkAbout");
  h2.classList.toggle("darkAbout");
  contactContent.classList.toggle("darkAbout");
  darkMode.classList.toggle("bb");
  
}
