const wordList = [
    "Huske",
    "Trene",
    "Danse",
    "Hoppe",
    "Sykle",
    "Gå",
    "Rulle",
    "Trille",
    "Kjøre",
    "Løpe",
    "Springe",
    "Hinke",
    "Sparke",
    "Sprinte",
    "Forflytte",
    "Trimme",
    "Løfte",
    "Snurre",
    "Svinge",
    "Svømme",
    "Flyte",
    "Fly",
    "Sveve",
    "Ake",
    "Dra",
  ];




// Hente ut alle elementer
const spans = document.querySelectorAll('span')
const inputs = document.querySelectorAll('input')
const testButtonId = document.getElementById("test")

// Funksjon for å hente random tall i wordList
const random = () => {
  return Math.floor(Math.random()* wordList.length)
}

// Funksjon for å fylle span med ord fra wordList
const addWords = () => {
  //konverterer alle inputs til en array
 [...spans].forEach((span) => (span.innerHTML = wordList[random()]))
}

// Kaller på funksjonen som legger ordene inn i spanene
addWords()



// Koble til lytter på test-knapp

// Lage funksjon som henter ut tilfeldig ord

// Lage funksjon for å sjekke alfabetisk rekkefølge sammenlignet med input

// 