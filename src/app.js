/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  document
    .getElementById("generate-btn")
    .addEventListener("click", generateDomains);

  function generateDomains() {
    const pronouns = ["mi", "tu", "su", "nuestro", "vuestro"];
    const adjectives = ["brillante", "oscuro", "rápido", "lento", "grande"];
    const nouns = ["gato", "perro", "árbol", "cielo", "estrella"];
    const extensions = [".com", ".net", ".org", ".io", ".tech"];

    let domains = [];

    for (let pronoun of pronouns) {
      for (let adjective of adjectives) {
        for (let noun of nouns) {
          for (let extension of extensions) {
            domains.push(`${pronoun}${adjective}${noun}${extension}`);
          }
        }
      }
    }

    displayDomains(domains);
  }

  function displayDomains(domains) {
    const domainsList = document.getElementById("domains-list");
    domainsList.innerHTML = ""; // Clear previous results

    domains.forEach(domain => {
      const li = document.createElement("li");
      li.textContent = domain;
      domainsList.appendChild(li);
    });

    document.getElementById(
      "domain-output"
    ).innerText = `Generados ${domains.length} dominios posibles.`;
  }
};
