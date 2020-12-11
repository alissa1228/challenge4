const select = document.querySelector("select");
//const options = select.querySelector("option");
const countryName = "country";

function handleChange(event) {
  //value 바꾸기 이벤트
  event.preventDefault();
  const countryValue = select.value;
  localStorage.setItem(countryName, countryValue);
  saveData();
}

function saveData(value) {
  const savedData = localStorage.getItem("select");
  //option에서 가져와 저장
  if (!savedData) {
    //저장 데이터 없으면 가져와서 집어넣기
    select.value = savedData;
  }
}

function init() {
  saveData(); //localstorage
  select.addEventListener("change", handleChange);

  /*The change event is fired for <input>, <select>, and <textarea> elements when an alteration to the element's value is committed by the user. */
}

init();