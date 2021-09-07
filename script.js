let addbtn= document.getElementById('btn+');
let countrycontainer= document.getElementById('countries');
let inputField= document.getElementById('myInput');

addbtn.addEventListener('click', function(){
  var paragraph = document.createElement('p')
  paragraph.innerText = inputField.value;
  countrycontainer.appendChild(paragraph);
  inputField.value = "";
})
