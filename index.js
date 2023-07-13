const textarea = document.getElementById("text");
const uniqueResult = document.getElementById("unique");
const buttonStart = document.getElementById("button");
const buttonClear = document.getElementById("clear");

let letersArr = [];
let uniqueLeter = "";
let firstUnique = "";

textarea.addEventListener("input", function () {
  if (textarea.value.trim().length > 0) {
    buttonStart.disabled = false;
  }
});

buttonStart.addEventListener("click", function (e) {
  e.preventDefault();

  const text = textarea.value;

  uniqueResult.textContent = getFirstUnique(text);

  letersArr = [];
  uniqueLeter = "";
  firstUnique = "";

  buttonStart.disabled = true;
  buttonClear.disabled = false;
  buttonStart.blur();
});

buttonClear.addEventListener("click", function (e) {
  e.preventDefault();

  textarea.value = "";
  uniqueResult.textContent = "";

  buttonStart.disabled = true;
  buttonClear.disabled = true;
  buttonClear.blur();
});

function getFirstUnique(text) {
  const wordsArray = text.split(" ");

  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    for (let j = 0; j < word.length; j++) {
      const currentLeter = word[0];
      const otherLetter = word[j];

      if (word.length === 1) {
        uniqueLeter = word[0];
      } else if (j !== 0) {
        currentLeter !== otherLetter && (uniqueLeter = currentLeter);
      }
    }

    letersArr.push(uniqueLeter);
  }
  firstUnique = letersArr.find(
    (element, index, array) =>
      array.indexOf(element) === array.lastIndexOf(element)
  );

  return firstUnique;
}
