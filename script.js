dropdown = document.getElementById("dropdown-id");
dropdownClick = document.getElementById("dropdown-clicker");
dropdownClicked = false;
searchButton = document.getElementById("search-button-id")
componentContainer = document.getElementById("components-container-id");
searchFormContainer = document.getElementById("search-form-id");
navbar = document.getElementById("navbar-id");
componentDisplayed = false

dropdownClick.addEventListener("click", ()=>{
    if(dropdownClicked == false){
        dropdown.style.display = "flex";
        dropdownClicked = true;
    }
    else if(dropdownClicked == true){
        dropdown.style.display = "none";
        dropdownClicked = false;
    }
});

searchButton.addEventListener("mouseover", ()=>{
    searchButton.style.backgroundColor = "blue";
});

searchButton.addEventListener("mouseout", ()=>{
    searchButton.style.backgroundColor = "rgb(41, 212, 255)";
});

function myFunction(x) {
  x.classList.toggle("change");
  if(componentDisplayed == false){
    if(dropdownClicked == true){
        dropdown.style.display = "none";
        dropdownClicked = false;
    }
    // componentContainer.style.display = "flex";
    componentContainer.style.opacity = "1";
    navbar.style.height = "300px"
      componentContainer.style.transform = "translate(0%, 0%)";
      searchFormContainer.style.transform = "translate(3.5%, 4%)";
      componentDisplayed = true
  }
  else if(componentDisplayed == true){
    componentContainer.style.transform = "translate(0%, -150%)";
    searchFormContainer.style.transform = "translate(3.5%, -150%)";
    // componentContainer.style.display = "none";
    navbar.style.height = "60px"
    componentContainer.style.opacity = "0";
    componentDisplayed = false
  }
}
