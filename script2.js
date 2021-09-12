//selectors
const countryInput = document.querySelector('.countryInput');
const countryButton = document.querySelector('.countryButton');
const countryList = document.querySelector('.countryList');
const searchBox = document.getElementById('searchInput');

//test 3a
let tet1= isitin('saturday','sat');
console.log(tet1);
//test 3b
let testarray= ['norway','sweden','india','indonesia'];
let tet2= searcharray(testarray,'ind');
console.log(tet2);
//event listeners
countryButton.addEventListener("click",addCountry);
countryList.addEventListener('click',deletelist);
searchBox.addEventListener('keyup', (e) => {
  console.log(e.target.value);
  //make e value to lowercase
  let search = e.target.value.toLowerCase();

  //make list of all li btw its an array i think
  const allLi = document.querySelectorAll('ul li');
  const allLiBut = document.querySelectorAll('ul button');
  //console.log (allLi[0].innerText);
  //creo q tengo q hacerlo adentro del add
  //funciona dentro del add
  //go through each li element
  for (var i = 0; i < allLi.length-1; i++) {
    //make the content inside lowercase preguntarno deberia ser allLi[i]
    let temp1 = allLi[i].innerText.toLowerCase();
    if(isitin(temp1,search) == false){
        allLi[i].classList.add("hide");
        allLiBut[i].classList.add("hide");
    }
    else {
      allLi[i].classList.remove("hide");
      allLiBut[i].classList.remove("hide");
    }
  }
});

//functions
function addCountry(event){
  //prevent reloading
  event.preventDefault();

  const countryDiv = document.createElement('div');
  countryDiv.classList.add('countryDivclass');
  //create li
  const countryLi = document.createElement('li');
  countryLi.innerText = countryInput.value;
  countryLi.classList.add('countryLiclass'); //add id = input later
  countryDiv.appendChild(countryLi);
  //delete Button
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'delete';
  deleteButton.classList.add('deleteButtonClass');
  countryDiv.appendChild(deleteButton);
  //append div to ul
  countryList.appendChild(countryDiv);
  //clear input
  countryInput.value= "";

}

function deletelist(e){
  const item = e.target;
  if(item.classList[0] === 'deleteButtonClass'){
    const noe = item.parentElement;
    noe.remove();
  }
}

function isitin(element,searchword){
var result= element.startsWith(searchword);
return result;
}

function searcharray(listArray,searchWord){
  var resultlist = [];
  let x=0;
  for(let i=0; i<=listArray.length-1;i++){
    if(isitin(listArray[i],searchWord)){
      resultlist[x] = listArray[i];
      x++;
    }

    }

  return resultlist;
  }
