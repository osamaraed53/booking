// the default is english because we have problem in json server ,this problem is the all categories in categories  proparity
let selectedGenre = "none";
let selectedAgeGroup = "none";
let selectedLanguage = "English";

// Initial display Pagination
let currentPage = 1;
const itemsPerPage = 10;
//  ------------------------- createCard ------------------------
function createCard(data) {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("id", data["id"]);
  const href =
    "http://127.0.0.1:5502/html/Detail.html?" + urlSearchParams.toString();

  var newBooks = document.getElementById("newBooks-section");
  var newBooks_card = document.createElement("div");
  newBooks_card.classList.add("book-card");

  newBooks_card.innerHTML = `
      <a href="${href}"> 
          <img src="${data["image"]}" alt="Book Cover">
          <p class="book-title">${data["bookname"]}</p>
          <p class="book-author">${data["authername"]}</p>
      </a>
`;
  newBooks.appendChild(newBooks_card);
}

// ------------------------------ All search function ---------------------------
async function getDataFromJsonById(id = "") {
  const response = await fetch(`http://localhost:3000/books/${id}`);
  const data = await response.json();
  return data;
}

async function getDataFromJsonBySearchQuery(searchQuery) {
  const response = await fetch(`http://localhost:3000/books?q=${searchQuery}`);
  const data = await response.json();
  return data;
}

// ------------------------------------- all function about Pagination ---------------------------------
function updatePagination(totalPages) {
  let pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    let pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.textContent = i;
    pageLink.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i;
      work();
    });
    pagination.appendChild(pageLink);
  }
}

async function work(ifQuery = "undefined") {
  let location = document.getElementById("newBooks-section");
  location.innerHTML = " ";
  let dataArray = [];
  if (ifQuery != "undefined") {
    dataArray = await getDataFromJsonBySearchQuery(ifQuery);
  } else {
    // Fetch data
    for (let i = 1; i <= 82; i++) {
      const data = await getDataFromJsonById(i);
      const checker = displayDataAfterFilter(data);
      if (checker == undefined) {
        continue;
      } else {
        dataArray.push(checker);
      }
    }
  }

  for (
    let i = (currentPage - 1) * itemsPerPage;
    i < currentPage * itemsPerPage && i < dataArray.length;
    i++
  ) {
    createCard(dataArray[i]);
  }

  // Update pagination
  const totalPages = Math.ceil(dataArray.length / itemsPerPage);
  updatePagination(totalPages);
}

// --------------------Filter data based on Categories user and EventListener for it ---------------------------------
function displayDataAfterFilter(array) {
  if (
    selectedAgeGroup == "none" &&
    selectedGenre == "none" &&
    selectedLanguage == "English"
  ) {
    // console.log(array["categories"]);
    return array;
  }
  if (array["categories"] == selectedLanguage) {
    // console.log(array);
    return array;
  }
  if (array["categories"] == selectedGenre) {
    // console.log(selectedGenre);
    // console.log(array["categories"]);
    return array;
  }
  if (array["categories"] == selectedAgeGroup) {
    // console.log(array);
    return array;
  }
}

// if click in button will get data from input and
document
  .getElementById("buttonOfSearchByquery")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from being submitted
    searchByQuery();
  });

function searchByQuery() {
  console.log("osama");
  let searchQuery = document.getElementById("searchByquery").value;
  work(searchQuery);
  document.getElementById("searchByquery").value = "";
}

const ageGroupSelect = document.getElementById("ageGroup");
ageGroupSelect.addEventListener("change", (e) => {
  selectedAgeGroup = e.target.value;
  currentPage = 1;
  work();
});

const languageSelect = document.getElementById("language");
languageSelect.addEventListener("change", (e) => {
  selectedLanguage = e.target.value;
  currentPage = 1;
  work();
});

const GenreSelect = document.getElementById("genre");
GenreSelect.addEventListener("change", (e) => {
  selectedGenre = e.target.value;
  currentPage = 1;
  work();
});

work();
