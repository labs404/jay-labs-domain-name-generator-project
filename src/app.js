/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let domain = generateDomainName();
  let domainElement = document.getElementById("domain");
  // domainElement.innerHTML = domain; // not necessary when generating new 'p' elements
};

let firstPart = ["richards-", "gilfoyles-", "dineshs-", "jareds-"];
let secondPart = ["serverdocs.", "cloudstorage.", "app.", "codespace."];
let thirdPart = ["hooli", "aviato", "pied-piper"];
let fourthPart = [".com", ".net", ".org"];

function generateDomainName() {
  for (let i = 0; i < firstPart.length; i++) {
    for (let j = 0; j < secondPart.length; j++) {
      for (let k = 0; k < thirdPart.length; k++) {
        for (let l = 0; l < fourthPart.length; l++) {
          let domainString =
            firstPart[i] + secondPart[j] + thirdPart[k] + fourthPart[l];
          const para = document.createElement("p");
          const node = document.createTextNode(domainString);
          para.appendChild(node);
          const element = document.getElementById("div1");
          element.appendChild(para);
          console.log(domainString);
        }
      }
    }
  }
}
