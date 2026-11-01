function rechercher() {

    let ville = document.getElementById("ville")
        .value.toLowerCase().trim();

    let domaine = document.getElementById("domaine")
        .value.toLowerCase().trim();

    let cartes = document.querySelectorAll(".card");
    let nombre = 0;

    cartes.forEach(function(carte) {

        let contenu = carte.innerText.toLowerCase();

        if (contenu.includes(ville) &&
            contenu.includes(domaine)) {

            carte.style.display = "block";
            nombre++;

        } else {

            carte.style.display = "none";

        }
    });

    document.getElementById("message").innerText =
        nombre + " résultat(s) trouvé(s).";
}

function voirDetails(entreprise, titre, ville, domaine, type) {

    document.getElementById("detailTitre").innerText = titre;
    document.getElementById("detailEntreprise").innerText =
        "Entreprise : " + entreprise;

    document.getElementById("detailVille").innerText =
        "Ville : " + ville;

    document.getElementById("detailDomaine").innerText =
        "Domaine : " + domaine;

    document.getElementById("detailType").innerText =
        "Type : " + type;

    document.getElementById("details").style.display = "block";

    document.getElementById("details").scrollIntoView({
        behavior: "smooth"
    });
}

function fermerDetails() {

    document.getElementById("details").style.display = "none";

}

function postuler() {

    let formulaire = document.getElementById("application");

    formulaire.style.display = "block";

    formulaire.scrollIntoView({
        behavior: "smooth"
    });
}


// Vérification du formulaire

document.getElementById("candidatureForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let cv = document.getElementById("cv").files[0];

    if (!cv || cv.type !== "application/pdf") {
        alert("Veuillez choisir un fichier PDF.");
        return;
    }

    if (cv.size > 5 * 1024 * 1024) {
        alert("Votre CV ne doit pas dépasser 5 MB.");
        return;
    }

    let candidature = {

        nom: document.getElementById("nom").value,

        email: document.getElementById("email").value,

        telephone: document.getElementById("telephone").value,

        formation: document.getElementById("formation").value,

        motivation: document.getElementById("motivation").value,

        cv: cv.name,

        date: new Date().toLocaleDateString("fr-FR")

    };

    let candidatures = JSON.parse(

        localStorage.getItem("candidatures") || "[]"

    );

    candidatures.push(candidature);

    localStorage.setItem(

        "candidatures",

        JSON.stringify(candidatures)

    );

    document.getElementById("confirmation").innerText =

        "Votre candidature a été enregistrée !";

    this.reset();

});