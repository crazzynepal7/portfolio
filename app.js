// Theme Management (runs immediately to prevent flash of un-themed content)
(function() {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);
})();

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  
  if (themeToggle) {
    const updateToggleIcon = (theme) => {
      const icon = themeToggle.querySelector("i");
      if (icon) {
        if (theme === "light") {
          icon.className = "fas fa-moon";
        } else {
          icon.className = "fas fa-sun";
        }
      }
    };

    // Initialize the icon based on current theme state
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    updateToggleIcon(currentTheme);

    themeToggle.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", activeTheme);
      localStorage.setItem("theme", activeTheme);
      updateToggleIcon(activeTheme);
    });
  }
});

// Toggle dropdown menu
document.getElementById("menu-toggle").addEventListener("click", function () {
   const dropdown = document.getElementById("dropdown");
   dropdown.classList.toggle("show"); 

});

// hide dropdown when clicking a link
document.querySelectorAll("#dropdown button").forEach((link) => {
    link.addEventListener("click", () => {
        document.getElementById("dropdown").classList.remove("show");

    });
});

//click outside the box close the menu 
document.addEventListener("click", (e) => {
  const dropdown = document.getElementById("dropdown");
  const toggle = document.getElementById("menu-toggle");

  if (!dropdown.contains(e.target) && !toggle.contains(e.target)) {
    dropdown.classList.remove("show");
  }
});

//onclick the menu button 
function toScreen(id){
  const element = document.getElementById(id);
  if(element){
  element.scrollIntoView({behavior: "smooth"});
}
else {
console.error("Element with ID '" + id + "' not found.");
}};

// copyright script
 
 const dates = new Date();
 const fullYear = dates.getFullYear();
 document.getElementById("date").innerHTML =`© ${fullYear} All Rights reserved.`;
 
 document.addEventListener("DOMContentLoaded", () => {
   const fills = document.querySelectorAll(".skill-fill");

   const observer = new IntersectionObserver(
     (entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
           const fill = entry.target;
           const percentage = fill.textContent.trim();
           fill.style.width = percentage;
         }
       });
     },
     {
       threshold: 0.5,
     }
   );

   fills.forEach((fill) => observer.observe(fill));

   // Typing Effect
   const text = "Database Developer & Creative Designer";
   const typingElement = document.getElementById("typing-effect");
   let index = 0;

   function typeWriter() {
     if (typingElement && index < text.length) {
       typingElement.innerHTML += text.charAt(index);
       index++;
       setTimeout(typeWriter, 40); // decreased delay for faster typing
     }
   }

   if (typingElement) {
     typeWriter();
   }
 });

// Change Research Paper PDF
function changePaper(pdfName, title, description, btnElement) {
  // Update iframe source
  const viewer = document.getElementById("pdf-viewer");
  if(viewer) {
    viewer.src = pdfName;
  }
  
  // Update header title and desc
  const titleEl = document.getElementById("active-paper-title");
  const descEl = document.getElementById("active-paper-desc");
  const downloadEl = document.getElementById("active-paper-download");
  
  if(titleEl) titleEl.innerText = title;
  if(descEl) descEl.innerText = description;
  if(downloadEl) downloadEl.href = pdfName;
  
  // Update active button styling
  const buttons = document.querySelectorAll(".paper-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  btnElement.classList.add("active");
}



