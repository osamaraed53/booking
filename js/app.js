// fetch("http://localhost:3000/books")
//   .then((res) => res.json())
//   .then((data) =>
//     data.forEach((datas) => {
//       let newproducts = new Product(
//         datas.image,
//         datas.bookname,
//         datas.authername,
//         datas.Descriptions
//       );

//       let cardssss = document.getElementById("cardssss");

//       cardssss.innerHTML = `

//         <div
//         class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//       >
//         <a href="#">
//           <img
//             class="p-8 rounded-t-lg"
//             src="${datas.image}"
//             alt="product image"
//           />
//         </a>
//         <div class="px-5 pb-5">
//           <a href="#">
//             <h5
//               class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
//             >
//             ${datas.bookname}
//             </h5>
//           </a>
//         </div>
//       </div>
//       `;

//       let cate = document.getElementById("cate");

//       cate.insertAdjacentHTML("beforeend", cardssss);
//       console.log(datas);
//     })
//   );

// class Product {
//   constructor(image, bookname, authername, Descriptions) {
//     this.image = image;
//     this.bookname = bookname;
//     this.authername = authername;
//     this.Descriptions = Descriptions;
//   }
// }
function getbox(id = " ") {
  fetch(`http://localhost:3000/books/${id}`)
    .then((res) => res.json())
    .then((data) => {
      let cate = document.getElementById("categorys");

      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append("id", data["id"]);
      const href =
        "http://127.0.0.1:5500/html/Detail.html?" + urlSearchParams.toString();

      let cardElement = document.createElement("div");

      cardElement.innerHTML = `

<section class="card-section">
<div class="card">
<div class="flip-card">
<div class="flip-card__container">
<div class="card-front">
<div class="card-front__tp card-front__tp--city">
<i class="fa-solid fa-book"></i>

<h2 class="card-front__heading">
${data["bookname"]}
</h2>
<p class="card-front__text-price">
${data["authername"]}
</p>
</div>

<div class="card-front__bt">
<p class="card-front__text-view card-front__text-view--city">
View me
</p>
</div>
</div>
<div class="card-back">
<img src="${data["image"]}"/>
</div>
</div>
</div>

<div class="inside-page">
<div class="inside-page__container">
<h3 class="inside-page__heading inside-page__heading--city">
${data["categories"]}
</h3>
<p class="inside-page__text">
${data["Descriptions"]}
</p>
<a href="${href}" class="inside-page__btn inside-page__btn--city">View deals</a>
</div>
</div>
</div>
</section>

            `;

      cate.appendChild(cardElement);
    });
}

function issa(limit) {
  for (let i = 42; i <= limit; i++) {
    getbox(i);
  }
}
issa(44);

function issaa(limit) {
  for (let i = 6; i <= limit; i++) {
    get2(i);
  }
}
issaa(8);

function get2(id = " ") {
  fetch(`http://localhost:3000/books/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append("id", data["id"]);
      const href =
        "http://127.0.0.1:5500/html/Detail.html?" + urlSearchParams.toString();

      let main = document.getElementById("main");
      let cardElement = document.createElement("div");
      cardElement.innerHTML = `
            

<section class="card-section">
<div class="card">
<div class="flip-card">
<div class="flip-card__container">
<div class="card-front">
<div class="card-front__tp card-front__tp--city">
<i class="fa-solid fa-book"></i>

<h2 class="card-front__heading">
${data["bookname"]}
</h2>
<p class="card-front__text-price">
${data["authername"]}
</p>
</div>

<div class="card-front__bt">
<p class="card-front__text-view card-front__text-view--city">
${data["Rating"]}
</p>
</div>
</div>
<div class="card-back">
<img src="${data["image"]}"/>
</div>
</div>
</div>

<div class="inside-page">
<div class="inside-page__container">
<h3 class="inside-page__heading inside-page__heading--city">
${data["bookname"]}
</h3>
<p class="inside-page__text">
${data["Descriptions"]}
</p>
<a href="${href}" class="inside-page__btn inside-page__btn--city">View deals</a>
</div>
</div>
</div>
</section>
                    
                  `;
      const starRating = generateStarRating(data["Rating"]);
      cardElement.querySelector(".card-front__bt").appendChild(starRating);
      main.appendChild(cardElement);
    });
}

{
}

function wish(data) {
  console.log(data);
}
function generateStarRating(rating) {
  const ratingDiv = document.createElement("div");
  ratingDiv.classList.add("starrating");

  for (let i = 1; i <= 5; i++) {
    const starIcon = document.createElement("span");
    starIcon.classList.add("star");
    if (i <= rating) {
      starIcon.innerHTML = "&#9733;";
    } else {
      starIcon.innerHTML = "&#9734;";
    }
    ratingDiv.appendChild(starIcon);
  }

  return ratingDiv;
}

// const ratingElement = document.getElementById("rating");
// const editRatingButton = document.getElementById("editRatingButton");

// // Function to update the rating
// function updateRating(newRating) {
//   ratingElement.textContent = newRating;
//   //   يمكنك هنا إرسال طلب إلى الخادم لتحديث التقييم أيضًا
//   fetch("YOUR_API_ENDPOINT", {
//     method: "PUT",
//     body: JSON.stringify({ newRating }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // معالجة الاستجابة من الخادم هنا
//     });
// }

// // إضافة مستمع للنقر على الزر
// editRatingButton.addEventListener("click", () => {
//   const newRating = prompt("Enter a new rating (1-5):");
//   if (newRating !== null) {
//     newRating = parseInt(newRating);
//     if (!isNaN(newRating) && newRating >= 1 && newRating <= 5) {
//       // تحديث التقييم إذا تم إدخال قيمة صحيحة
//       updateRating(newRating);
//     } else {
//       alert("Please enter a valid rating between 1 and 5.");
//     }
//   }
// });
