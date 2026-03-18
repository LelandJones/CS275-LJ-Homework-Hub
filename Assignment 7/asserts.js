(function () {
  const input = document.getElementById("input");
  const addBtn = document.getElementById("addBtn");
  const deleteBtn = document.getElementById("deleteBtn");
  const list = document.getElementById("list");

  const getItems = () => list.querySelectorAll("li");

  // --------------------
  // ADD BUTTON ASSERTS
  // --------------------
  const startCount = getItems().length;

  input.value = "Test Item";
  addBtn.click();

  console.assert(
    getItems().length === startCount + 1,
    "Add: list count should increase by 1"
  );

  console.assert(
    getItems()[getItems().length - 1].textContent === "Test Item",
    "Add: last item should match input value"
  );

  console.assert(
    getItems()[getItems().length - 1] !== undefined,
    "Add: new item should exist in the list"
  );


  // --------------------
  // DELETE BUTTON ASSERTS
  // --------------------
  const beforeDelete = getItems().length;

  deleteBtn.click();

  console.assert(
    getItems().length === beforeDelete - 1,
    "Delete: list count should decrease by 1"
  );

  console.assert(
    getItems().length >= 0,
    "Delete: list count should never be negative"
  );

  console.assert(
    getItems()[getItems().length - 1] === undefined ||
    getItems().length === beforeDelete - 1,
    "Delete: last item should be removed"
  );

})();