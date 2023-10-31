//finn og velg det som skal fjernes og vises når man trykker på ikonet
let content = document.querySelector(".flex");

//legg til eventlistener på ikonet / tittelen
document.querySelector(".Tittel").addEventListener("click", toggle);

//gjør klar for endring av root CSS variabler ved å velge rooten av DOMen
let root = document.querySelector(":root");

//endre CSS variabelen til det nye ikonet
function setIconVariable(newIcon) {
    root.style.setProperty("--ikonet", newIcon);
}

//funksjonen som skjuler og viser innholdet
function toggle() {

    //hvis innholdet er skjult, så vis det og sett ikonet til minus
    if (content.style.display === "none") {
        content.style.display = "flex";
        setIconVariable("url('https://student.oslomet.no/o/oslomet-theme/images/minus-icon.svg')");
    }
    //hvis innholdet er synlig, så skjul det og sett ikonet til pluss
    else {
        content.style.display = "none";
        setIconVariable("url('https://student.oslomet.no/o/oslomet-theme/images/plus-icon.svg')");
    }
}
