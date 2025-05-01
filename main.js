// ⬅️ إظهار وإخفاء القائمة
function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}

// ⬅️ عرض قسم معين
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

// ⬅️ سلايدر
const slider = document.getElementById('slider');
document.querySelector('.next').onclick = () => slider.scrollBy({ left: 350, behavior: 'smooth' });
document.querySelector('.prev').onclick = () => slider.scrollBy({ left: -350, behavior: 'smooth' });

// ⬅️ فورم واتساب
document.getElementById("whatsappForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const msg = document.getElementById("message").value;
  const text = `مرحبًا، أنا ${name}%0A📱 رقم الهاتف: ${phone}%0A📧 البريد الإلكتروني: ${email}%0A🏙️ المدينة المهتم بها: ${city}%0A📝 الرسالة: ${msg}`;
  window.open(`https://wa.me/201503335442?text=${text}`, "_blank");
});

// ⬅️ بوب أب يظهر لما القسم يدخل الشاشة
window.addEventListener('scroll', function () {
  const popup = document.getElementById('project-popup');
  const section = document.querySelector('.gallery');
  if (popup && section) {
    popup.style.display = isInViewport(section) ? 'block' : 'none';
  }
});

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// ⬅️ الانتقال إلى صفحة معينة
function exploreNow() {
  window.location.href = "madinaty/madinaty-apartments.html";
}

// ⬅️ تسجيل الخروج
function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("currentUser");
  localStorage.removeItem("displayName");
  localStorage.removeItem("profileImage");
  alert("تم تسجيل الخروج بنجاح.");
  window.location.href = "login.html";
}

// ⬅️ إشعار ترحيبي
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 4000);
}

// ⬅️ عند تحميل الصفحة
window.onload = function () {
  const loginBtn = document.getElementById("loginBtn");
  const profileIcon = document.getElementById("profileIcon");
  const welcomeEl = document.getElementById("welcome");

  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const currentUser = localStorage.getItem("currentUser");
  const displayName = localStorage.getItem(`displayName_${currentUser}`) || currentUser;
  const profileImage = localStorage.getItem(`profileImage_${currentUser}`);
  

  // لو الصفحة محمية وتتطلب دخول
  if (document.body.classList.contains("protected") && (!isLoggedIn || !currentUser)) {
    window.location.href = "login.html";
    return;
  }

  // إظهار أو إخفاء زر الدخول وأيقونة البروفايل
  if (loginBtn) loginBtn.style.display = isLoggedIn ? "none" : "inline-block";
  if (profileIcon) profileIcon.style.display = isLoggedIn ? "block" : "none";

  // تحديث اسم الترحيب
  if (welcomeEl && displayName) {
    welcomeEl.textContent = `مرحبًا، ${displayName} 👋`;
  }

  // عرض صورة المستخدم لو موجودة
  if (profileImage && profileIcon) {
    profileIcon.src = profileImage;
  }

  // التنقل إلى صفحة البروفايل
  if (profileIcon) {
    profileIcon.onclick = function () {
      window.location.href = "profile.html";
    };
  }

  // عرض إشعار
  if (currentUser) {
    showToast(`مرحبًا بك يا ${displayName} 👋`);
  }

  // مثال إشعار عند اهتمام سابق
  const interest = localStorage.getItem("interest");
  if (interest === "nour") {
    alert("🔔 تم إضافة وحدات جديدة في مشروع نور!");
  }
};
const profileIcon = document.getElementById("profileIcon");
const profileImage = localStorage.getItem("profileImage");

if (profileImage && profileIcon) {
  profileIcon.src = profileImage;
}
function logout() {
  const currentUser = localStorage.getItem("currentUser");
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("currentUser");
  localStorage.removeItem(`displayName_${currentUser}`);
  localStorage.removeItem(`profileImage_${currentUser}`);
  alert("تم تسجيل الخروج بنجاح.");
  window.location.href = "login.html";
}
window.onscroll = function () {
  document.getElementById("backToTop").style.display = window.scrollY > 300 ? "block" : "none";
};

document.getElementById("backToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
function toggleFavorite(projectId) {
  const currentUser = localStorage.getItem("currentUser");
  let favorites = JSON.parse(localStorage.getItem(`favorites_${currentUser}`)) || [];

  if (favorites.includes(projectId)) {
    favorites = favorites.filter(id => id !== projectId);
  } else {
    favorites.push(projectId);
  }

  localStorage.setItem(`favorites_${currentUser}`, JSON.stringify(favorites));
}
localStorage.setItem(`lastViewedProject_${currentUser}`, "madinaty");
let isChanged = false;
document.querySelectorAll("input").forEach(el => {
  el.addEventListener("input", () => isChanged = true);
});
window.addEventListener("beforeunload", function (e) {
  if (isChanged) {
    e.preventDefault();
    e.returnValue = "";
  }
});
setInterval(() => {
  document.querySelector('.next').click();
}, 5000);
function revealOnScroll() {
  document.querySelectorAll(".fade-in").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
document.onkeydown = function (e) {
  if (
    e.keyCode === 123 || // F12
    (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
    (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
    (e.ctrlKey && e.keyCode === 85) // Ctrl+U
  ) {
    return false;
  }
};  document.addEventListener("contextmenu", e => e.preventDefault());
  // منع كليك يمين
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("🚫 غير مسموح بفحص الكود.");
  });

  // منع اختصارات لوحة المفاتيح
  document.addEventListener("keydown", function (e) {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
      alert("🚫 تم تعطيل أدوات المطور.");
    }

    // Ctrl+Shift+I أو Ctrl+Shift+J أو Ctrl+U
    if ((e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || 
        (e.ctrlKey && e.keyCode === 85)) {
      e.preventDefault();
      alert("🚫 هذا الإجراء غير مسموح.");
    }
  });
  var _0x123abc = function() { 
    document.addEventListener("contextmenu", e => e.preventDefault());

    // منع اختصارات فحص العنصر (F12 و Ctrl+Shift+I وغيرها)
    document.onkeydown = function(e) {
      if (e.keyCode == 123 || // F12
          (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || // Ctrl+Shift+I or J
          (e.ctrlKey && e.keyCode == 85)) { // Ctrl+U
        return false;
      }
    };
  
    // منع تحديد النص
    document.addEventListener('selectstart', e => e.preventDefault());
   } // صعب تقراه أو تفهمه
   const isLoggedIn = localStorage.getItem("loggedIn") === "true";
   const currentUser = localStorage.getItem("currentUser");
 
   if (document.body.classList.contains("protected") && (!isLoggedIn || !currentUser)) {
     window.location.href = "login.html";
   }
   const translations = {
    ar: {
      welcome: "مرحبًا بك في موقعنا العقاري",
      login: "تسجيل الدخول",
      logout: "تسجيل الخروج",
      contact: "اتصل بنا",
      about: "من نحن"
    },
    en: {
      welcome: "Welcome to our real estate website",
      login: "Login",
      logout: "Logout",
      contact: "Contact Us",
      about: "About Us"
    }
  };
  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);

    // زر التبديل
    document.getElementById("langToggleBtn").textContent = lang === "ar" ? "English" : "عربي";

    // تحديث جميع العناصر التي تحتوي على data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }
// ✅ توجيه الزائر إلى صفحة تسجيل الدخول إذا لم يكن مسجلاً دخوله
window.onload = function () {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const currentUser = localStorage.getItem("currentUser");

  if (!isLoggedIn || !currentUser) {
    window.location.href = "login.html"; // غير المسار لو صفحة تسجيل الدخول في مكان مختلف
  }

  // باقي أكوادك الحالية الخاصة بالترحيب وغيره تفضل موجودة هنا عادي
};
