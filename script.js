const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const fullList = document.querySelector(".list-tasks");
let array = [];

function addNewTask() {
  array.push({
    task: input.value,
    finished: false
  })

  input.value = ''
  showTask()
}

function showTask() {
  let newLi = ""

  array.forEach((task, index) => {
    newLi =
      newLi +
      `
    <li class="task ${task.finished && "done"}">
      <img  src="./img/checked.png" alt="check-task" onclick="finishTask(${index})"/>
      <p>${task.task}</p>
      <img src="./img/trash.png" alt="del-task" onclick="delTask(${index})">
   </li>
   `
  })

  fullList.innerHTML = newLi

  localStorage.setItem('List', JSON.stringify(array))
}

function delTask(index) {
  array.splice(index, 1)
  showTask()
}

function finishTask(index){
  array[index].finished = !array[index].finished
  showTask() 
}
button.addEventListener("click", addNewTask);

function save(){
  const tasks = localStorage.getItem('List')

  if(tasks){
  array = JSON.parse(tasks)
  }
  showTask()
}

save()