let addbtn= document.getElementById('btn+');
let list= document.getElementById('list1');
let inputField= document.getElementById('myInput');
let dltbtn= document.getElementById('deletebtn');
let searchField= document.getElementById('searchInput');
//let listArr= listarray[0];
let tet1= isitin('saturday','sat');
console.log(tet1);
console.log(searchField);
addbtn.addEventListener('click', addcountry);
//dltbtn.addEventListener('click',deletecountry);
searchField.addEventListener('keyup',(e) =>{
  console.log(e.target.value)

});

function addcountry() {
  //create button and li elements
  var listItem = document.createElement("li")
  const deleteButton = document.createElement("Button");
  //put the text inside the li = what user wrote
  listItem.innerText = inputField.value;
  //append li to ul and deletebtn to li
  list.appendChild(listItem);
  listItem.appendChild(deleteButton);
  //reset input box
  inputField.value = "";
  //add id and content inside delete btn
  deleteButton.innerText = "delete";
  deleteButton.id = "deletebtn";
  //deleteButton.onclick = deletecountry();
  //test when delete button activates
  deleteButton.onclick = console.log("hi");
}

function deletecountry(){

//list.removeChild(listItem);
//const something = listItem.parentElement;
//something.remove();
}

function isitin(element,searchword){
var result= element.startsWith(searchword);
return result;
}

function searcharray(){}
