### Component Model

App
- Renders Heading at the top of the page.

TodoItem
- Created `<li>` and used React.createElement to return a list item.

To-Do List `<ul>`
- Contains two TodoItem components, "Learn React" and "Avoid div soup".

Empty List
- Is used to simulate an empty list for an assertion test.

Test System
- A button that runs the runTests function. It executes the assertions and displays a message saying whether it failed or passed.

---

### Assertion Ideas

Happy Path (Count Test)  
-  `assert(li.length === 2)`  
  This verifies that the correct number of `<li>` elements are rendered.  
  

Out of Order Test  
-  `assert(li[0].textContent === "Learn React" && li[1].textContent === "Avoid div soup")`  
  This checks that each list item is in the correct order.  
 

Edge Case (Empty List)  
-  `assert(emptyList.children.length === 0)`  
  This verifies that an empty `<ul>` renders with no `<li>` elements.  

---

### Assertion Results

Passed: TodoItem should render two list items  
Passed: First item should be 'Learn React' and second item should be 'Avoid div soup'  
Passed: Empty list renders no items

---

### LLM Interaction

Prompt:
"Help me add test assertions to my React To-Do list and include edge cases like an empty list."

Excerpt:
```const listspace = document.querySelector("ul");```

```listspace.innerHTML = "";```

```assert(listspace.children.length === 0, "Empty list renders no children");```

What I changed: I didn't like that it wanted to remove my list, as when I tried it, it made my list disappear. Therefore, I made an empty list and ran the assert on that, so my original list wouldn't disappear.




