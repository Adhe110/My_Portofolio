
      const navLinks = document.querySelectorAll("a[href^='#']");
      const sections = document.querySelectorAll(".section");
      const menuBtn = document.getElementById("menu-button");
      const mobileMenu = document.getElementById("mobile-menu");

      // Toggle mobile menu
      menuBtn?.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      // Function to show section
      function showSection(targetId) {
        sections.forEach(section => section.classList.add("hidden"));
        document.querySelector(targetId)?.classList.remove("hidden");
      }

      // On nav click
      navLinks.forEach(link => {
        link.addEventListener("click", e => {
          e.preventDefault();
          const targetId = link.getAttribute("href");
          showSection(targetId);
          if (!mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
          }
        });
      });

      // Show Home by default
      document.addEventListener("DOMContentLoaded", () => {
        showSection("#home");
      });
