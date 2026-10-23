console.log("Hello World!");

//read file
fetch("study-progress.csv")
  .then((res) => res.text())
  .then((text) => {
    console.log(text)
   })
  .catch((e) => console.error(e));

//extract data
const progress_temp = text.split(","); 

console.log(progress_temp)

/*
lectures = new Array();
problem_sets = new Array();
assessments = new Array();

for (let i = 0; i < progress_temp.length; i+=2) {
  if (progress_temp[i].substring(0, 6) == "Lecture") {
  ``lectures.push(progress_temp[i+1])
  }
  else if (progress_temp[i].substring(0, 10) == "Problem Set") {
  ``problem_sets.push(progress_temp[i+1])
  }
  else if (progress_temp[i].substring(0, 9) == "Assessment") {
  ``assessments.push(progress_temp[i+1])
  }
  else if (progress_temp[i].substring(0, 13) == "Design Project") {
  ``design_project = progress_temp[i+1]
  }
}

console.log(lectures)
console.log(problem_sets)
console.log(assessments)
console.log(design_project)
*/