const myDate = new Date();



document.getElementById("date-1").innerText = myDate.toDateString();

const mydate = document.getElementsByClassName("date");

for (const date of mydate) {
  const currentDate = date;

  currentDate.innerText = myDate.toDateString();
}

let totalTask = parseInt(document.getElementById("total-task").innerText);
let inCompletTask = parseInt(
  document.getElementById("incomplet-task").innerText
);

const CompletedBtn = document.getElementsByClassName("Completed-btn");

for (let i = 0; i < CompletedBtn.length; i++) {
  const completedBtn = CompletedBtn[i];

  completedBtn.addEventListener("click", function (event) {
    alert("Board updated Successfully");
    const copBtn = event.target;

    if (inCompletTask === 1) {
      alert("congrates!!! You have completed all the current task");
    }

    completedBtn.setAttribute("disabled", true);

    inCompletTask = inCompletTask - 1;

    document.getElementById("incomplet-task").innerText = inCompletTask;

    totalTask = totalTask + 1;

    document.getElementById("total-task").innerText = totalTask;

    const title =
      copBtn.parentElement.parentElement.firstElementChild.nextElementSibling
        .innerText;

    const compHistory = document.getElementById("comp-history");

    const div = document.createElement("div");

    div.classList.add("mydiv");

    const p = document.createElement("p");

    p.innerText =
      "You have complete the task " +
      title +
      "at : " +
      myDate.toLocaleTimeString("en-GB", { hour12: true });

    div.appendChild(p);

    compHistory.appendChild(div);
  });
}

document
  .getElementById("cleat-history-btn")
  .addEventListener("click", function () {
    const compHistory = document.getElementById("comp-history");

    compHistory.innerHTML = `
    <div>
    
    </div>
    `;
  });

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function setRandomColor() {
  const randomColor = document.getElementById("random-color");

  randomColor.style.backgroundColor = getRandomColor();
}

document.getElementById('Discover-something').addEventListener('click',function(){
    window.location.href = 'index2.html'
})


document.querySelectorAll()

