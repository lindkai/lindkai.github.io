console.log("Hello World!");

fetch("study-progress.csv")
  .then((res) => res.text())
  .then((text) => {
    console.log(text)
   })
  .catch((e) => console.error(e));