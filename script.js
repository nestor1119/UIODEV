let addbtn= document.getElementById('btn+');
let list= document.getElementById('list1');
let inputField= document.getElementById('myInput');
//let dltbtn= document.getElementById('deletebtn');
let searchField= document.getElementById('searchInput');
let testarray= ['norway','sweden','india','indonesia'];

//let listArr= listarray[0];
let tet1= isitin('saturday','sat');
let tet2= searcharray(testarray,'ind');
console.log(testarray);
console.log(tet1);
//console.log(tet2);
console.log(searchField);
addbtn.addEventListener('click', addcountry);
//dltbtn.addEventListener('click',deletecountry);
//searchField.addEventListener('keyup',(e) =>{
  //console.log(e.target.value)

//});

function addcountry() {
  //create button and li elements
  var listItem = document.createElement("li");
  var deleteButton = document.createElement("Button");
  //put the text inside the li = what user wrote
  listItem.innerText = inputField.value;
  listItem.id = inputField.value;
  //add id and content inside delete btn
  deleteButton.innerText = "delete";
  deleteButton.id = "deletebtn";
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("value", "Delete");
  deleteButton.setAttribute("onclick", "deletecountry()");
  //append li to ul and deletebtn to li
  list.appendChild(listItem);
  listItem.appendChild(deleteButton);
  //reset input box
  inputField.value = "";

  //deleteButton.onclick = deletecountry();
  //test when delete button activates
  deleteButton.onclick = console.log("hi");

  var all = document.querySelectorAll("#list1 li");
  searchField.addEventListener("keyup", (e)=> {
console.log(e.target.value);
    let search = this.value.toLowerCase();
    for (let i of all) {
      let item = i.innerHTML.toLowerCase();
      if (item.indexOf(search) == -1) {
        i.classList.add("hide");
      } else {
        i.classList.remove("hide");
      }
    }
  });
}

//function deletecountry(){

//this.parentElement.remove();
//}

function isitin(element,searchword){
var result= element.startsWith(searchword);
return result;
}

function searcharray(listArray,searchWord){
////var result= listArray.filter(isitin(listArray,searchWord));
//var tempo = isitin(listArray[1],searchWord);
//var noe = listArray.length;
var resultlist = [];
let x=0;
for(let i=0; i<=listArray.length-1;i++){
  if(isitin(listArray[i],searchWord)){
    resultlist[x] = listArray[i];
    x++;
  }

  }
  console.log(resultlist);
return resultlist;
}
