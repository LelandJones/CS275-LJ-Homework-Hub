## Data Model

The application uses DOM elements rather than a separate data structure.
Tasks are stored as ```<li>``` elements inside a ```<ul>```.
Each task contains text content entered by the user.

## Assertion ideas

```console.assert(list !== null, "Add: #tasks list should exist");```
- Structure Test
-- list exists
  
```console.assert(items.length >= 0, "list should have a valid number of items");```
- Count test: list has at least 0 items (passive version of “Add”)
  
```if (items.length > 0) {console.assert(items[items.length - 1].textContent.trim().length > 0, "last item should have text");}```
- Content test: last item is non-empty if there is at least one

```if (lastItem) {console.assert(lastItem.textContent.trim() !== "", "Should not add empty tasks");}```
- Edge case test: Ensures there are no empty tasks in the list

```console.assert(items.length >= 0, "list count should not be negative");```
- Count test: list is never negative

```console.assert(list !== null, "list should still exist after delete, not be null");```
- Presence test: list still exists

```items.forEach((item, index) => {console.assert(item.textContent.trim().length > 0, `Delete: item ${index + 1} should have text`);});```
- Content test: all items have text

## 3.	LLM snippet: prompt → short excerpt → your note on what you changed and why.

### Prompt
Provide me as a student some assert statements that ensure the todo button assignment works properly, revolving around count, structure, non-mutation, edge case functions

### Short Excerpt
```input.value = "";addBtn.click();const lastItem = document.querySelector('#tasks li:last-child');if (lastItem) {console.assert(lastItem.textContent.trim() !== "", "Edge: should not add empty tasks");}```

### Note
I changed the variables to match mine, and I ran it without the input.value = ""; and I decided to keep it, as I figured it would be a good test to see if my ToDo function is valid.


## 4.	Orchestration concepts

What I wanted:
Clear assertions for add/delete behavior on its own file

What I got:
Weird assert statements involving window.addEventListener

What I changed:
I made the prompt more specific for what I was looking for in the context needed.

Final result:
More complete and meaningful assertions that matched what I was looking for.
