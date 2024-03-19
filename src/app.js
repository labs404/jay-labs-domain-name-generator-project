/* eslint-disable */

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
          const paragraph = document.createElement("p");
          const content = document.createTextNode(domainString);
          paragraph.appendChild(content);
          const element = document.getElementById("div1");
          element.appendChild(paragraph);
          console.log(domainString);
        }
      }
    }
  }
}

window.onload = function() {
  generateDomainName();
};
