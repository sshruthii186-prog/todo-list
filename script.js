function addTask(){
    let input = document.getElementById("taskInput");
    let task = input.value;
    if(task.trim() === ""){
        alert("Enter a task!");
        return;
    }
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = task;
    let done = document.createElement("button");
    done.textContent = "Done";
    done.onclick = function(){
        span.classList.toggle("completed");
    };
    let edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.onclick = function(){
        let newTask = prompt("Edit task:", span.textContent);
        if(newTask !== null && newTask.trim() !== ""){
            span.textContent = newTask;
        }
    };
    let del = document.createElement("button");
    del.textContent = "Delete";
    del.onclick = function(){
        li.remove();
    };
    li.appendChild(span);
    li.appendChild(done);
    li.appendChild(edit);
    li.appendChild(del);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}