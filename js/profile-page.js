// document.addEventListener("DOMContentLoaded", function () {
//     // قم بجلب البيانات من ملف JSON (تأكد من تعديل المسار إلى ملف JSON الخاص بك)
//     fetch('http://localhost:3000/User')
//         .then(response => response.json())
//         .then(data => {
//             // يمكنك تعديل هذا الجزء بناءً على هيكل بيانات الملف JSON
//             const userId = 1; // قم بتعيين معرف المستخدم الحالي

//             // ابحث عن المستخدم بناءً على المعرف
//             const user = data.User.find(user => user.id === userId);

//             if (user) {
//                 // عرض بيانات المستخدم على الصفحة
//                 document.getElementById('user-name').textContent = user.Username;
//                 document.getElementById('email').textContent = user.email;
//                 // يمكنك استمرار عرض أي بيانات إضافية هنا

//                 // إظهار إعلان بأن البيانات تم استرجاعها بنجاح
//                 alert('تم استرجاع البيانات بنجاح!');
//             } else {
//                 // إذا لم يتم العثور على المستخدم
//                 alert('المستخدم غير موجود في قاعدة البيانات.');
//             }
//         })
        
//         .catch(error => {
//             // إذا كان هناك خطأ في جلب البيانات
//             console.error('حدث خطأ أثناء جلب البيانات: ', error);
//             alert('حدث خطأ أثناء جلب البيانات. الرجاء التحقق من الاتصال بالخادم.');
//         });
// });




// document.getElementById('user-name').textContent = user.Username;
// document.getElementById('email').textContent = user.email;












// ****************************************************************************


// document.addEventListener("DOMContentLoaded", function () {
    // استخراج البيانات من Local Storage
    // const storedUsername = localStorage.getItem("username");
    // const storedEmail = localStorage.getItem("email");

    // عرض البيانات في الصفحة
//     const usernameElement = document.getElementById("user-name");
//     const emailElement = document.getElementById("email");

//     usernameElement.textContent = storedUsername;
//     emailElement.textContent = storedEmail;
// });
// // تحميل البيانات من ملف JSON عند تحميل الصفحة
// document.addEventListener("DOMContentLoaded", function () {
//     fetch("data.json") // استبدل بالمسار الصحيح لملف JSON
//         .then((response) => response.json())
//         .then((jsonData) => {
//             // عرض البيانات في صفحة البروفايل
//             const usernameElement = document.getElementById("user-name");
//             const emailElement = document.getElementById("email");
//             usernameElement.textContent = jsonData.username;
//             emailElement.textContent = jsonData.email;
//         })
//         .catch((error) => {
//             console.error("حدث خطأ: " + error);
//         });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     // استخراج البيانات من Local Storage
//     const storedUsername = localStorage.getItem("username");
//     const storedEmail = localStorage.getItem("email");

//     // عرض البيانات في الصفحة
//     const usernameElement = document.getElementById("user-name");
//     const emailElement = document.getElementById("email");

//     usernameElement.textContent = storedUsername;
//     emailElement.textContent = storedEmail;
// });
document.addEventListener("DOMContentLoaded", function () {
    // استخراج البيانات من Local Storage
    const storedUsername = localStorage.getItem("Username");
    const storedEmail = localStorage.getItem("email");

    // عرض البيانات في الصفحة
    const usernameElement = document.getElementById("user-name");
    const emailElement = document.getElementById("email");

    usernameElement.textContent = storedUsername;
    emailElement.textContent = storedEmail;
});
