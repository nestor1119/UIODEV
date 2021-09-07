let addbtn= document.getElementById('btn+');
let list= document.getElementById('list1');
let inputField= document.getElementById('myInput');

addbtn.addEventListener('click', function(){
  var listItem = document.createElement("li")
  listItem.innerText = inputField.value;
  list.appendChild(listItem);
  inputField.value = "";
})
