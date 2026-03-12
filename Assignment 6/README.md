# Data model: brief description of your input shapes (the types in your JSON)

In the renderList, it has a title (a string), items (an array), name (a string), and qty (a number).

In the renderSodas, it has a title (a string), sodas (an array), name (a string), and stock (a number).

# Assertion ideas: what each assert proves (count, structure, non-mutation, edge).

`
console.assert(JSON.stringify(data1) === '{"title":"Inventory","items":[{"name":"Wrench","qty":3},{"name":"Screwdriver","qty":7}]}', "does not mutate input");
`
- The first assertion checks that the input object is not modified by the function.

`
console.assert(renderList({ title: "Empty", items: [] }) === "<h2>Empty</h2><ul></ul>", "empty list renders an empty UL");
`
- The second assertion checks an edge case where the list is empty.

`
console.assert(renderList(data1).startsWith(``<h2>${data1.title}</h2>``), "HTML should start with the title");
`
- The third assertion checks the HTML.

# LLM snippet: prompt → short excerpt → your note on what you changed and why.

#### Prompt
- "Draft renderList(data) that returns an HTML string. Do not mutate input. Add three console.assert lines."

#### Short Excerpt
`data.items.map(item => ``<li>${item.name}: ${item.qty}</li>``).join("")`

`console.assert(renderSodas(data2).includes("<li>"), "Need to have the <li> tag" )`

I liked the .map() and .join("") to take the data and put it into a string. From there, I changed the structure names as needed to fit my code. The methods the LLM provided were viable for this assignment.

The 2nd excerpt was one I implemented in my renderSodas, as it would be a valuable asset to ensure it works and that the HTML loads properly.
