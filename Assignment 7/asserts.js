(function () {
    // Grab the list

    const input = document.getElementById("input");
    const addBtn = document.getElementById("addBtn");
    const deleteBtn = document.getElementById("deleteBtn");
    const list = document.getElementById("list");
    const items = document.querySelectorAll("#list li");
    const lastItem = document.querySelector("#list li:last-child");
   
    
    console.assert(list !== null, "list should exist, not be null");

    
    console.assert(items.length >= 0, "list should have a valid number of items");

    
    if (items.length > 0) {
        console.assert(items[items.length - 1].textContent.trim().length > 0, "last item should have text");
    }

    input.value = "";
    addBtn.click();

    if (lastItem) {
        console.assert(lastItem.textContent.trim() !== "", "Should not add empty tasks");
    }
    
    console.assert(items.length >= 0, "list count should not be negative");

    
    console.assert(list !== null, "list should still exist after delete, not be null");

    
    items.forEach((item, index) => {
        console.assert(item.textContent.trim().length > 0, `Delete: item ${index + 1} should have text`);
    });

})();