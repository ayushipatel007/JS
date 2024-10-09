// let todo = [];

// let req = prompt("enter your request");

// while(true) {
//     if(req =="quit") {
//         console.log("you are quitting the app");
//         break;
//     }

//     if(req =="list") {
//         console.log("----------------------");
//         for(let i=0; i<todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("----------------------");
//     } else if(req =="add") {
//         let task = prompt("enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     } else if(req =="delete") {
//         let idx= prompt("enter the task index you want to remove");
//         todo.splice(idx, 1);
//         console.log("task removed");  
//     } else {
//         console.log("wrong request");
//     }
//     req = prompt("enter your request");
// }

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "Delete";
    dltBtn.classList.add("delete");

    item.appendChild(dltBtn);
    ul.appendChild(item);
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});
