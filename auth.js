// auth.js
window.onload = function () {
    const loginBtn = document.getElementById("loginBtn");
    const profileIcon = document.getElementById("profileIcon");
    const welcomeEl = document.getElementById("welcome");
  
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    const currentUser = localStorage.getItem("currentUser");
    const displayName = localStorage.getItem(`displayName_${currentUser}`) || currentUser;
    const profileImage = localStorage.getItem(`profileImage_${currentUser}`);
  
    if (document.body.classList.contains("protected") && (!isLoggedIn || !currentUser)) {
      window.location.href = "login.html";
      return;
    }
  
    if (loginBtn) loginBtn.style.display = isLoggedIn ? "none" : "inline-block";
    if (profileIcon) {
      profileIcon.style.display = isLoggedIn ? "block" : "none";
      profileIcon.src = profileImage || "img/Sample_User_Icon.png";
      profileIcon.onclick = () => window.location.href = "profile.html";
    }
  
    if (welcomeEl && displayName) {
      welcomeEl.textContent = `مرحبًا، ${displayName} 👋`;
    }
  };
  