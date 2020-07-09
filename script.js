let input = document.querySelector("#toDoInput");
let addBtn = document.querySelector("#submit");
let ul = document.querySelector("#list");



// console.log("test");




document.addEventListener("DOMContentLoaded", function(){
    if (localStorage.getItem("tasks") !== null){
        let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(function(a){ 
        let listContainer = document.createElement("div");
    let iconContainer = document.createElement("div");
    let li = document.createElement("li");
    let a1 = document.createElement("a");
    let a2 = document.createElement("a");

   a1.setAttribute("href", "#");
    a2.setAttribute("href", "#");

    listContainer.appendChild(li);
    listContainer.appendChild(iconContainer);
    listContainer.classList.add("li-list");

    iconContainer.appendChild(a1);
    iconContainer.appendChild(a2);

    a1.innerHTML = '<i class="trash fa fas fa-check"></i>';
    a2.innerHTML = '<i class="trash fa fas fa-trash"></i>';

    a1.classList.add("tick");
    a2.classList.add("delete");
    

    ul.appendChild(listContainer);

    li.innerHTML = a.task;

    if(a.isChecked === true){
        li.style.textDecoration = "line-through";
    }

    else{li.style.textDecoration = "none";}
})}   
 
})


addBtn.addEventListener("click", function(e){
    e.preventDefault();
    let listContainer = document.createElement("div");
    let iconContainer = document.createElement("div");
    let li = document.createElement("li");
    let a1 = document.createElement("a");
    let a2 = document.createElement("a");

    a1.setAttribute("href", "#");
    a2.setAttribute("href", "#");

    listContainer.appendChild(li);
    listContainer.appendChild(iconContainer)

    iconContainer.appendChild(a1)
    iconContainer.appendChild(a2)

    a1.innerHTML = '<i class="trash fa fas fa-check"></i>'
    a2.innerHTML = '<i class="trash fa fas fa-trash"></i>'

    a1.classList.add("tick");
    a2.classList.add("delete")
    

    ul.appendChild(listContainer);

    let task = {task:input.value, isChecked:false}

    li.innerHTML = task.task;

    let tasks ;
    if (localStorage.getItem("tasks") === null){
        tasks = [];
    }

    else
    {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }

    tasks.push(task);
    input.value = "";

    localStorage.setItem("tasks", JSON.stringify(tasks))


    listContainer.classList.add("li-list")
    console.log(localStorage)
    //console.log(listContainer)
})

ul.addEventListener("click", function(e){
    e.preventDefault()
    if (e.target.classList.contains("fa-check")){
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        let childrens = e.target.parentElement.parentElement.parentElement.children
       // console.log(childrens)
        //console.log(e.target.parentElement.parentElement.parentElement)

        tasks.forEach(function(a){
            //console.log(a.isChecked)
            
            if (a.task === childrens[0].textContent){
                if(a.isChecked === false){
                    a.isChecked = true
                    e.target.parentElement.parentElement.parentElement.children[0].style.textDecoration = "line-through";  
                }

                else{a.isChecked = false
                    e.target.parentElement.parentElement.parentElement.children[0].style.textDecoration = "none";  
                }
            }
           // console.log(localStorage)
        })
       // console.log(localStorage)
       localStorage.setItem("tasks", JSON.stringify(tasks))
        

        // for (let b of a.children){
        //     if (b.classList.contains("dropdown-content")){


        }

    if(e.target.classList.contains("fa-trash")){
        e.target.parentElement.parentElement.parentElement.remove();
         
        let tasks = JSON.parse(localStorage.getItem("tasks"))
        tasks.forEach(function(a, index){
            if(e.target.parentElement.parentElement.parentElement.children[0].textContent === a.task){
                tasks.splice(index,1)
            }
        })

        localStorage.setItem("tasks", JSON.stringify(tasks))
        console.log(localStorage)         
        };
    })


    let clearBtn = document.querySelector("#clear");
    clearBtn.addEventListener("click", function(e){
        e.preventDefault();
        localStorage.clear();
        
        while(ul.firstChild) {
            ul.removeChild(ul.firstChild);
          }

    })

// console.log(23)
console.log(localStorage)
//localStorage.clear()

let timeline = gsap.timeline({defaults:{duration:1}})
timeline
.from("form", {x:"-100vw"})
.from("h1", { y:"-100vh", stagger:.1})
 

