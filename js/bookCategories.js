// important value
let selectedGenre = "none";
let selectedAgeGroup = "none";
let selectedLanguage = "none";
const itemsPerPage = 10;

function createCard(data) {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append('id', data["id"]);
  const href = 'http://127.0.0.1:5500/html/Detail.html?' + urlSearchParams.toString();

  var newBooks = document.getElementById("newBooks");
  var newBooks_card = document.createElement('div');
  newBooks_card.classList.add('newBooks_card');

  newBooks_card.innerHTML = `
    <a href=${href}>
    <img class="" src="${data["image"]}" alt="cover" width="190rem" height="280rem">
    <p class="newBooks-card_text">${data["authername"]}</p>
    <h1 class="newBooks-card_title">${data["bookname"]}</h1>
    </a>`;
  newBooks.appendChild(newBooks_card);
}


async function getDataFromJsonById(id = '') {
  const response = await fetch(`http://localhost:3000/books/${id}`);
  const data = await response.json();
  return data;
}

async function getDataFromJsonBySearchQuery(searchQuery){
  const response = await fetch(`http://localhost:3000/books?q=${searchQuery}`);
  const data = await response.json();
  return data;

}

// async function test(){
//   const data = await getDataFromJsonBySearchQuery("Resurrection")
//   console.log(data[0]);
// }
// test()

function updatePagination(totalPages) {
  let pagination = document.getElementById("pagination");
  pagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    let pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = i;
    pageLink.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = i;
      work(getDataFromJsonById);
    });
    pagination.appendChild(pageLink);
  }
}




async function work(operation,ifQuery=undefined) {
  let location = document.getElementById("newBooks");
  location.innerHTML = '';
  let dataArray = [];
  if(operation == getDataFromJsonBySearchQuery){
    dataArray = await getDataFromJsonBySearchQuery(ifQuery);}
  else{
    // Fetch data
    for (let i = 1; i <= 82; i++) {
      const data = await getDataFromJsonById(i);
      const checker  = displayDataAfterFilter(data)
      if (checker== undefined){
        continue
      }else
      {
        dataArray.push(checker);
      }
      
    }
} 

  

  for (let i = (currentPage - 1) * itemsPerPage; i <  currentPage * itemsPerPage && i < dataArray.length; i++) {
      createCard(dataArray[i]);
  }

  // Update pagination
  const totalPages = Math.ceil(dataArray.length / itemsPerPage);
  updatePagination(totalPages);


}


function displayDataAfterFilter(array) {
   if(selectedAgeGroup == "none" && selectedGenre == "none" && selectedLanguage== "none"){
      // console.log(array["categories"]);
      return array;
    }
    if(array["categories"] == selectedLanguage){
      // console.log(array);
      return array;
     }  
      if(array["categories"] == selectedGenre){
      // console.log(selectedGenre);
      // console.log(array["categories"]);
      return array;
    }
    if(array["categories"] == selectedAgeGroup){
      // console.log(array);
      return array;
    }   
}



document.getElementById('buttonOfSearchByquery').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from being submitted
  searchByQuery();
});

function searchByQuery() {
  console.log("osama")
  let searchQuery = document.getElementById('searchByquery').value;
  work(getDataFromJsonBySearchQuery,searchQuery);
  document.getElementById('searchByquery').value = '';
}


const ageGroupSelect = document.getElementById('ageGroup');
ageGroupSelect.addEventListener("change", (e) => {
  selectedAgeGroup = e.target.value;
  currentPage = 1;
  work(getDataFromJsonById);
});

const languageSelect = document.getElementById('language');
languageSelect.addEventListener("change", (e) => {
  selectedLanguage = e.target.value;
  currentPage = 1;
  work(getDataFromJsonById);
});


const GenreSelect = document.getElementById('genre');
GenreSelect.addEventListener("change", (e) => {
  selectedGenre = e.target.value;
  currentPage = 1;
  work(getDataFromJsonById);
});



// Initial display
let currentPage = 1;
work(getDataFromJsonById);



