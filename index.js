const select = document.querySelector("select");
const from =document.querySelector(".from");
//const options = select.querySelector("option");
const countryName = "country";

function handleChange(event) {
  //value 바꾸기 이벤트
  event.preventDefault();
  const countryValue = select.value;
  localStorage.setItem(countryName, countryValue);
  saveData();
}

function saveData() {
  const savedData = localStorage.getItem("select");
  if(savedData){
    const option = document.querySelector(`option[value="${savedData}"]`);
    option.savedData = true;
  }

}


  

function init() {
  saveData(); //localstorage
  select.addEventListener("change", handleChange);

  /*The change event is fired for <input>, <select>, and <textarea> elements when an alteration to the element's value is committed by the user. */
}

init();