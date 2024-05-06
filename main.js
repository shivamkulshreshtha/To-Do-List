// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");
// const submitBtn = document.querySelector(".submit");
// const taskList = [];
// let idCount;
// window.onload = () => {
//   let existingTaskList = localStorage.getItem("taskList")?.length
//     ? JSON.parse("[" + localStorage.getItem("taskList") + "]")
//     : [];
//   console.log("existingTaskList", existingTaskList);
//   idCount = existingTaskList.length
//     ? existingTaskList
//         .map((task) => task.id)
//         .reduce((acc, curr) => {
//           return acc > curr ? acc : curr;
//         }) + 1
//     : 1;
//   existingTaskList.map((data) => {
//     taskList.push(
//       JSON.stringify({
//         taskName: data.taskName,
//         status: data.status,
//         id: data.id,
//         display: data.display,
//       })
//     );
//     if (data.display === "no") return;
//     let item = document.createElement("li");
//     item.innerHTML = data.taskName;
//     item.setAttribute("class", data.status);
//     item.setAttribute("id", "id" + data.id);
//     const cross = document.createElement("span");
//     cross.setAttribute("id", "spanId".concat(idCount));
//     cross.style.marginLeft = "200px";
//     cross.innerHTML = "&times;";
//     item.appendChild(cross);
//     idCount = idCount + 1;
//     listContainer.appendChild(item);
//   });
// };

// console.log("listContainer", listContainer);
// submitBtn.addEventListener("click", () => {
//   getItem();
// });

// listContainer.addEventListener("click", (e) => {
//   const id = e.target.id;
//   console.log("id", id);
//   if (e.target.tagName === "LI") {
//     Array.from(listContainer.children).map((list) => {
//       list.id === id &&
//         list.setAttribute(
//           "class",
//           list.getAttribute("class") === "checked" ? "unchecked" : "checked"
//         );
//     });
//   }
//   if (e.target.tagName === "SPAN") {
//     console.log("inside span");
//     Array.from(listContainer.children).map((list) => {
//       list.firstElementChild.id === id && listContainer.removeChild(list);
//       const updatedList = JSON.stringify(
//         Object.values(JSON.parse("[" + taskList + "]")).filter(
//           (task) => "id" + task.id !== "id"+id.charAt(id.length-1)
//         )
//       )
//         .replace("[", "")
//         .replace("]", "");

//       console.log("updatedList", updatedList);
//       localStorage.setItem("taskList", updatedList);
//       console.log("localStorage", localStorage);
//     });
//   }
// });

// const getItem = () => {
//   const task = inputBox.value;
//   taskList.push(
//     JSON.stringify({
//       taskName: task,
//       status: "unchecked",
//       id: idCount,
//       display: "yes",
//     })
//   );
//   inputBox.value = "";
//   const item = document.createElement("li");
//   const cross = document.createElement("span");
//   cross.setAttribute("id", "spanId".concat(idCount));
//   cross.style.marginLeft = "200px";
//   cross.innerHTML = "&times;";
//   item.setAttribute("class", "unchecked");
//   item.setAttribute("id", "id".concat(idCount));
//   item.innerHTML = task;
//   item.appendChild(cross);
//   listContainer.appendChild(item);
//   idCount++;
//   localStorage.setItem("taskList", taskList);
// };

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const submitBtn = document.querySelector(".submit");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span')
    span.innerHTML = '\u00d7'
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData()
}


listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === 'LI')
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN')
    {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showList()