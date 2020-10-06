const firstClause = document.querySelector("#firstClause");
const turnerButton = document.querySelector("#turnerButton");
const reverseClause = document.querySelector("#reverseClause");
turnerButton.addEventListener("click", reverseWord);
function reverseWord() {
  const reverse = firstClause.value.split(" ").reverse().join(" ");
  reverseClause.innerHTML = reverse;
}




