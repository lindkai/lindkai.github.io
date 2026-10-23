console.log("Hello World!");

//read csv file
fetch('study-progress.csv')
  .then(response => response.text())
  .then(text => console.log(text))
