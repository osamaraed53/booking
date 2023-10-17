

document.addEventListener("DOMContentLoaded", function () {
    const userNameElement = document.getElementById("user-name");
    const userEmailElement = document.getElementById("email");
  
    // استرجاع بيانات المستخدم من Session Storage
    const storedUsername = sessionStorage.getItem("username");
    const storedEmail = sessionStorage.getItem("email");
  
    // عرض بيانات المستخدم إذا تم تخزينهما في Session Storage
    if (storedUsername) {
      userNameElement.textContent = storedUsername;
    }
    if (storedEmail) {
      userEmailElement.textContent = storedEmail;
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const userName = sessionStorage.getItem("username");
    const userEmail = sessionStorage.getItem("email");
  
    // عرض البيانات في صفحة البروفايل
    document.getElementById("user-name").textContent = userName;
    document.getElementById("email").textContent = userEmail;
  });
  