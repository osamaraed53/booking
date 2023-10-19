// // document.addEventListener("DOMContentLoaded", function () {
// //     // قم بتحديد عنصر نموذج التحرير والاستماع إلى حدث الإرسال
// //     const editProfileForm = document.getElementById('edit-profile-form');
// //     editProfileForm.addEventListener('submit', function (event) {
// //         event.preventDefault();

// //         // قم بجمع البيانات المدخلة من المستخدم
// //         const userName = document.getElementById('user-name-input').value;
// //         const userEmail = document.getElementById('user-email-input').value;
// //         const userPassword = document.getElementById('password-input').value;
// //         const userBio = document.getElementById('user-bio-input').value;

// //         // قم ببناء الكائن الذي يحتوي على البيانات المعدلة
// //         const updatedUserData = {
// //             email: userEmail,
// //             password: userPassword,
// //             Username: userName,
// //             bio: userBio
// //         };

// //         // تحديث الملف JSON (db.json) بالبيانات الجديدة

// //         // بعد تحديث البيانات بنجاح، قم بإعادة التوجيه أو عرض رسالة نجاح
// //     });
// // });
// // document.addEventListener("DOMContentLoaded", function () {
// //   const userNameInput = document.getElementById("user-name-input");
// //   const userEmailInput = document.getElementById("user-email-input");
// //   const editProfileButton = document.getElementById("editProfileButton");

// //   // اعتراض عند النقر على زر "Save Changes"
// //   editProfileButton.addEventListener("click", function () {
// //     // استخراج البيانات من حقول الإدخال
// //     const newUsername = userNameInput.value;
// //     const newEmail = userEmailInput.value;

// //     // تخزين البيانات في Session Storage
// //     localStorage.setItem("username", newUsername);
// //     localStorage.setItem("email", newEmail);

// //     // إعادة توجيه المستخدم إلى صفحة البروفايل
// //     window.location.href = "profile-page.html";
// //   });
// // });



// // *********************************************************************************


// // document.addEventListener("DOMContentLoaded", function () {
// //   // استخراج البيانات من Local Storage وعرضها في حقول الإدخال
// //   const storedUsername = localStorage.getItem("username");
// //   const storedEmail = localStorage.getItem("email");

// //   const usernameInput = document.getElementById("user-name-input");
// //   const emailInput = document.getElementById("user-email-input");

// //   usernameInput.value = storedUsername;
// //   emailInput.value = storedEmail;

// //   // اعتراض عند النقر على زر "Save Changes"
// //   const editProfileButton = document.getElementById("editProfileButton");
// //   editProfileButton.addEventListener("click", function () {
// //       // تحديث البيانات في Local Storage
// //       localStorage.setItem("username", usernameInput.value);
// //       localStorage.setItem("email", emailInput.value);

// //       // إعادة توجيه المستخدم إلى صفحة البروفايل بعد التحديث
// //       window.location.href = "profile-page.html";
// //   });
// // });
// // document.addEventListener("DOMContentLoaded", function () {
// //   // استخراج البيانات من Local Storage وعرضها في حقول الإدخال
// //   const storedUsername = localStorage.getItem("username");
// //   const storedEmail = localStorage.getItem("email");

// //   const usernameInput = document.getElementById("user-name-input");
// //   const emailInput = document.getElementById("user-email-input");

// //   usernameInput.value = storedUsername;
// //   emailInput.value = storedEmail;

// //   // اعتراض عند النقر على زر "Save Changes"
// //   const editProfileButton = document.getElementById("editProfileButton");
// //   editProfileButton.addEventListener("click", function () {
// //       // تحديث البيانات في الذاكرة (LocalStorage)
// //       localStorage.setItem("username", usernameInput.value);
// //       localStorage.setItem("email", emailInput.value);

// //       // تحديث البيانات في ملف JSON
// //       updateDataInJsonFile(usernameInput.value, emailInput.value);

// //       // إعادة توجيه المستخدم إلى صفحة البروفايل بعد التحديث
// //       window.location.href = "profile-page.html";
// //   });
// // });


// // document.addEventListener("DOMContentLoaded", function () {
// //   // استخراج البيانات من Local Storage وعرضها في حقول الإدخال
// //   const storedUsername = localStorage.getItem("username");
// //   const storedEmail = localStorage.getItem("email");

// //   const usernameInput = document.getElementById("user-name-input");
// //   const emailInput = document.getElementById("user-email-input");

// //   usernameInput.value = storedUsername;
// //   emailInput.value = storedEmail;

// //   // اعتراض عند النقر على زر "Save Changes"
// //   const editProfileButton = document.getElementById("editProfileButton");
// //   editProfileButton.addEventListener("click", function () {
// //       // تحديث البيانات في Local Storage
// //       localStorage.setItem("username", usernameInput.value);
// //       localStorage.setItem("email", emailInput.value);

// //       // إعادة توجيه المستخدم إلى صفحة البروفايل بعد التحديث
// //       window.location.href = "profile-page.html";
// //   });
// // });
// // // تحديث البيانات في ملف JSON
// // function updateDataInJsonFile(newUsername, newEmail) {
// //   fetch("data.json", {
// //       method: "PUT", // أو "POST" حسب الحاجة
// //       headers: {
// //           "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({ username: newUsername, email: newEmail }),
// //   })
// //       .then((response) => {
// //           if (response.status === 200) {
// //               console.log("تم تحديث البيانات بنجاح.");
// //           } else {
// //               console.error("فشل تحديث البيانات: " + response.statusText);
// //           }
// //       })
// //       .catch((error) => {
// //           console.error("حدث خطأ: " + error);
// //       });
// // }




// document.addEventListener("DOMContentLoaded", function () {
//   const profileEditContainer = document.getElementById("profile-edit-container");
//   const saveButton = document.getElementById("save-button");

//   // اعتراض النقر على زر "Save Changes"
//   saveButton.addEventListener("click", function () {
//       // استخراج البيانات من حقول الإدخال داخل div واحدة
//       const userNameInput = profileEditContainer.querySelector("#user-name-input");
//       const userEmailInput = profileEditContainer.querySelector("#user-email-input");
//       const bioInput = profileEditContainer.querySelector("#bio-input");
      
//       const newUsername = userNameInput.value;
//       const newEmail = userEmailInput.value;
//       const newBio = bioInput.value;

//       // تخزين البيانات في Session Storage
//       sessionStorage.setItem("username", newUsername);
//       sessionStorage.setItem("email", newEmail);
//       sessionStorage.setItem("bio", newBio);

//       // إعادة توجيه المستخدم إلى صفحة البروفايل
//       window.location.href = "profile-page.html";
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  // اعتراض عند تقديم النموذج
  const editProfileForm = document.getElementById('edit-profile-form');
  editProfileForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // استخراج البيانات من النموذج
      const userName = document.getElementById('user-name-input').value;
      const userEmail = document.getElementById('user-email-input').value;

      // تحديث البيانات في Local Storage
      localStorage.setItem("Username", userName);
      localStorage.setItem("email", userEmail);

      // إعادة توجيه المستخدم إلى صفحة البروفايل بعد التحديث
      window.location.href = "profile-page.html";
  });
});