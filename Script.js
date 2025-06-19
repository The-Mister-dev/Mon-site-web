document.addEventListener("DOMContentLoaded", function () {
    let typed = new Typed("#typed-text", {
      strings: ["Création de sites Web", "Création d'identité visuelle","Stratégie de marque", "Montage vidéo"], 
      typeSpeed: 50,  
      backSpeed: 25,  
      backDelay: 1000, 
      loop: true      
    });
  });
  
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".card-galerie");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Retirer la classe "active" de tous les boutons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      // Ajouter la classe "active" au bouton cliqué
      button.classList.add("active");

      const selectedCategory = button.getAttribute("data-category");

      cards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");

        if (selectedCategory === "all" || selectedCategory === cardCategory) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
