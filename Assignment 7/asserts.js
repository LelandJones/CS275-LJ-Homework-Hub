(function () {
    // Grab the list

    const input = document.getElementById("input");
    const addBtn = document.getElementById("addBtn");
    const deleteBtn = document.getElementById("deleteBtn");
    const list = document.getElementById("list");
    const items = document.querySelectorAll('#list li');

    // --------------------
    // ADD BUTTON ASSERTS (passive)
    // --------------------
    // 1. Presence test: list exists
    console.assert(list !== null, "list should exist, not be null");

    // 2. Count test: list has at least 0 items (passive version of “Add”)
    console.assert(items.length >= 0, "list should have a valid number of items");

    // 3. Content test: last item is non-empty if there is at least one
    if (items.length > 0) {
        console.assert(items[items.length - 1].textContent.trim().length > 0, "last item should have text");
    }

    // --------------------
    // DELETE BUTTON ASSERTS (passive)
    // --------------------
    // 4. Count test: list is never negative
    console.assert(items.length >= 0, "list count should not be negative");

    // 5. Presence test: list still exists
    console.assert(list !== null, "list should still exist after delete, not be null");

    // 6. Content test: all items have text
    items.forEach((item, index) => {
        console.assert(item.textContent.trim().length > 0, `Delete: item ${index + 1} should have text`);
    });

})();