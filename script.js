
document.addEventListener("DOMContentLoaded", function addNav () {
  // header + nav 
    const header= document.getElementById("mainHeader");
    if (header) {
      const nav= document.createElement("nav");
      const myName= document.createElement("h1");
      myName.textContent="Thi Thuy Vy LE";
      header.appendChild(myName);
      header.appendChild(nav);

    const links = [
        { text: "Accueil", href: "index.html" },
        { text: "À propos", href: "A propos.html" },
        { text: "Portfolio", href: "Portfolio.html" },
        { text: "Contact", href: "Contact.html" }
    ];

    links.forEach(link => {
        const a = document.createElement("a");
        a.textContent = link.text;
        a.href = link.href;
        nav.appendChild(a);
      });
    }
// ajout h1 dynamique (machine à écrire)
    const container =document.querySelector(".container");
    if (container){
// si absence de if => "Cannot read properties of null"
      const intro = document.createElement("h1");
      intro.classList.add("cursor");
      container.appendChild(intro);
      const texte = "Développeuse Full Stack";
      let index = 0;

      function ecrire() {
        if (index < texte.length) {
          intro.textContent += texte.charAt(index); // charAt() renvoie une nouvelle chaîne contenant le caractère (
          index++;
          setTimeout(ecrire, 100); // setTimeout: exécute la fct après un délai , ici 100 ms
        } else {
          // Stop clignotement du curseur après écriture :
          intro.classList.remove("cursor");
        }
      }
      ecrire();

    const para= document.createElement("p");
    container.appendChild(para);
    para.innerHTML= "Développeuse web en région parisienne <br> Création de sites web à votre image"
    }
// footer 
    const footer=document.getElementById("mainFooter");
    if (footer) {
      footer.textContent= "© Thi Thuy Vy LE | 2025";
    }
    
    /*********** page A propos ************/
    const aboutMe= document.getElementById("aboutMe");
    if (aboutMe){
      const aboutMeTitle= document.createElement("h1");
      aboutMeTitle.textContent="à propos";
      aboutMeTitle.style.textTransform="uppercase";
      aboutMe.appendChild(aboutMeTitle);
      const div1= document.createElement("div");
      aboutMe.appendChild(div1);

      const article1= document.createElement("article");
      div1.className="division";
      div1.appendChild(article1);

      const title1= document.createElement("h2");
      const para1=document.createElement("p");
      article1.appendChild(title1);
      article1.appendChild(para1);
      article1.className="article";
      title1.textContent="Une jeune développeuse web";
      para1.innerHTML="Initialement manipulatrice en radiothérapie, j’ai découvert une véritable passion pour le développement en 2024, lorsque j’ai collaboré étroitement avec les développeurs de logiciels de radiothérapie dans le secteur du matériel médical. <br><br>Cette expérience a été un déclic : elle m’a poussée à opérer un tournant majeur dans ma carrière. <br><br>En 2025, j’ai donc entamé une reconversion complète en suivant une formation à l’école Descodeuses, afin de devenir développeuse web.";
      
      const img1= document.createElement("img");
      img1.alt="photo pc";
      img1.src="https://cdn.pixabay.com/photo/2023/01/16/19/13/laptop-7723139_1280.jpg";
      div1.appendChild(img1);
      img1.style.opacity="0";
      
      img1.addEventListener("mouseover", function () {
      img1.style.transform = "scale(1)";
      img1.style.transition = "all 0.3s";
      img1.style.opacity="1";
  });

      img1.addEventListener("mouseout", function () {
      img1.style.transform = "scale(0.8)";
      img1.style.opacity="0";
  });

      const article2= document.createElement("article");
      div1.appendChild(article2);
      const title2= document.createElement("h2");
      const para2=document.createElement("p");
      article2.appendChild(title2);
      article2.appendChild(para2);
      article2.className="article";
      title2.textContent="Expérience en développement";
      para2.innerHTML="Mon expérience acquise au fil des projets me permet de mieux comprendre les attentes d'un client et de répondre précisement au besoin demandé en fonction du domaine d'activité. <br> <br> Du site vitrine au projet plus complexe, je vous propose une expertise et un développement web qui correspond à vos attentes & à vos besoins.";
      };

/*********** page Portfolio ************/
/*********************** manque filtrage de projets : à faire **********************/
    const myPortfolio= document.getElementById("myPortfolio");
    if (myPortfolio) {
      const myPjTitle= document.createElement("h1");
      myPjTitle.textContent="mes projets"; 
      myPjTitle.style.textTransform="uppercase";
      myPortfolio.appendChild(myPjTitle);
      
      // création boutons pour filtrage
      const divButtons =document.createElement("div");
      divButtons.id="divButtons";
      myPortfolio.appendChild(divButtons);
      const button1=document.createElement("button");
      button1.textContent="Tous";
      const button2=document.createElement("button");
      button2.textContent="Sites web";
      const button3=document.createElement("button");
      button3.textContent="Maquettes";
      divButtons.append(button1, button2, button3) ;

      const portfolioContainer =document.createElement("div");
      portfolioContainer.className="division";
      myPortfolio.appendChild(portfolioContainer);
  
      const portfolioData = [
        {title: "Titre 1",
        categorie:"maquette",
        image: "https://cdn.pixabay.com/photo/2017/08/04/05/37/coming-soon-2579123_1280.jpg", 
        text: "Voici une description pour le premier projet."
      },
        {title: "Titre 2",
        categorie:"site",
        image: "https://cdn.pixabay.com/photo/2017/08/04/05/37/coming-soon-2579123_1280.jpg", 
        text: "Voici une description pour le second projet."
      },
        {title: "Titre 3",
        categorie:"site",
        image: "https://cdn.pixabay.com/photo/2017/08/04/05/37/coming-soon-2579123_1280.jpg", 
        text: "Voici une description pour le troisième projet."
      },
       {title: "Titre 4",
        categorie:"maquette",
        image: "https://cdn.pixabay.com/photo/2017/08/04/05/37/coming-soon-2579123_1280.jpg", 
        text: "Voici une description pour le quatrième projet."
      }
  ];

  function renderPortfolio() {    
    portfolioData.forEach(item => {
        const portfolioItem = document.createElement("div");
        portfolioItem.classList.add("portfolio-item");
        
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        `;
        portfolioContainer.appendChild(portfolioItem);
    });
}
// fonction filtrage :
function renderPortfolio(categorie = "tous") {
    portfolioContainer.innerHTML = ""; // Vider le contenu précédent

    const filteredData = 
      categorie === "tous" 
      ? portfolioData 
      : portfolioData.filter(item => item.categorie === categorie);

    filteredData.forEach(item => {
      const portfolioItem = document.createElement("div");
      portfolioItem.classList.add("portfolio-item");

      portfolioItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      `;
      portfolioContainer.appendChild(portfolioItem);
    });
  }

  // Appel initial
  renderPortfolio();

  // Ajout des filtres
  button1.addEventListener("click", () => renderPortfolio("tous"));
  button2.addEventListener("click", () => renderPortfolio("site"));
  button3.addEventListener("click", () => renderPortfolio("maquette"));
}
  
  /*********** page Contact ************/
  const myContact = document.getElementById("myContact");
    if (myContact) {
      const formTitle= document.createElement("h1");
      formTitle.textContent="contact";
      formTitle.style.textTransform="uppercase";
      const form= document.createElement("form"); 
      form.id="myform";
      form.method="post";
      form.novalidate=true;
      myContact.appendChild(formTitle);
      myContact.appendChild(form);

    const formInput = ["nom et prénom","email", "message"];
    formInput.forEach((field, index) => {
        const label = document.createElement("label");
        label.textContent = field.charAt(0).toUpperCase() + field.slice(1); // met maj sur 1ere lettre
        //field.charAt(0) : prend le premier caractère de la chaîne. Par exemple, "nom".charAt(0) donne "n".
        //.toUpperCase() : transforme ce caractère en majuscule. Donc "n".toUpperCase() donne "N".
        //field.slice(1) : extrait le reste de la chaîne (du caractère à l’index 1 jusqu’à la fin). Par exemple, "nom".slice(1) donne "om".
        label.style.fontWeight="bold";
        label.htmlFor = "input" + index; // ajout input + type
        let inputElement;
    if (field === "message") {
      inputElement = document.createElement("textarea");
    } else {
      inputElement = document.createElement("input");
      inputElement.type = field === "email" ? "email" : "text";
    }

    inputElement.id = "input" + index; //chaque champ (input / textarea) aura un id unique
    inputElement.name = field.toLowerCase().replace(/\s/g, "_");//attribut name propre à chaque champ : tt minuscule et remplace tous les espaces (\s) par des underscores (_)
    inputElement.required = true;

    form.appendChild(label);
    form.appendChild(inputElement);
    });

    document.getElementById("input0").placeholder = "Nom et prénom";
    document.getElementById("input1").placeholder = "Renseigner votre email";
    document.getElementById("input2").placeholder = "Saisissez votre message";

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Envoyer";
    form.appendChild(submitButton);
    }

  document.addEventListener("submit", function(validation) {
  validation.preventDefault(); 
  /* console.log("Soumission détectée"); */
  // Récupérer les valeurs :
  const nomPrenom = document.getElementById("input0").value.trim();
  const email = document.getElementById("input1").value.trim();
  const message = document.getElementById("input2").value.trim();
  if (nomPrenom === "" || email === "" || message === "") {
    return; // Ne pas continuer si vide
  }; 
    alert("Formulaire soumis !");
    document.getElementById("myform").reset()
  });
});


