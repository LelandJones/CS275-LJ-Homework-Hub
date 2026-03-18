
const list = document.getElementById("list");
const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");


addBtn.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    const li =document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";

});

deleteBtn.addEventListener("click", () => {
    if(list.lastElementChild) {
        list.lastElementChild.remove();
    }
});
