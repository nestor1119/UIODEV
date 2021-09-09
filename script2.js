//selectors
const countryInput = document.querySelector('.countryInput');
const countryButton = document.querySelector('.countryButton');
const countryList = document.querySelector('.countryList');
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
