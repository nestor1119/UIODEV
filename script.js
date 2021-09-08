let addbtn= document.getElementById('btn+');
let list= document.getElementById('list1');
let inputField= document.getElementById('myInput');
let dltbtn= document.getElementById('deletebtn');
let searchField= document.getElementById('searchInput')

console.log(searchField);
addbtn.addEventListener('click', addcountry);
//dltbtn.addEventListener('click',deletecountry);
searchField.addEventListener('keyup',(e) =>{
  console.log(e.target.value)

});

function addcountry() {
  var listItem = document.createElement("li")
  const deleteButton = document.createElement("Button");
  listItem.innerText = inputField.value;
  list.appendChild(listItem);
  listItem.appendChild(deleteButton);
  inputField.value = "";
  deleteButton.innerText = "delete";
  deleteButton.id = "deletebtn";
  //deleteButton.onclick = deletecountry();
  deleteButton.onclick = console.log("hi");
}

function deletecountry(){

//list.removeChild(listItem);
//const something = listItem.parentElement;
//something.remove();
}

function isitin(element,searchword){
element.startsWith(searchword);

}
