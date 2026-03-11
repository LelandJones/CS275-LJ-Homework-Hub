function renderList(data1) {
    
    listdata = data1.items
    .map(item => `<li>${item.name}: ${item.qty}</li>`)
    .join("");

    return `<h2>${data1.title}</h2><ul>${listdata}</ul>`;

}

jsonString1 = `{
  "title": "Inventory",
  "items": [
    { "name": "Wrench", "qty": 3 },
    { "name": "Screwdriver", "qty": 7 }
  ]
}`;

data1 = JSON.parse(jsonString1);

console.log(renderList(data1));

console.assert(JSON.stringify(data1) === '{"title":"Inventory","items":[{"name":"Wrench","qty":3},{"name":"Screwdriver","qty":7}]}', "does not mutate input");

console.assert(renderList({ title: "Empty", items: [] }) === "<h2>Empty</h2><ul></ul>", "empty list renders an empty UL");

console.assert(renderList(data1).startsWith(`<h2>${data1.title}</h2>`), "HTML should start with the title");


function renderSodas(data2) {

    sodadata = data2.sodas
    .map(soda => `<li>${soda.name}: ${soda.stock}</li>`)
    .join("");

    return `<section><h2>${data2.title}</h2><ul>${sodadata}</ul></section>`;

}

jsonString2 = `{
  "title": "Soda Options",
  "sodas": [
    { "name": "Coca-Cola", "stock": "50" },
    { "name": "Pepsi", "stock": "40" },
    { "name": "Coke Zero", "stock": "3" },
    { "name": "Sprite", "stock": "56" },
    { "name": "Mountain Dew", "stock": "78" }
  ]
}`;

data2 = JSON.parse(jsonString2);

console.log(renderSodas(data2));

console.assert(JSON.stringify(data2) === '{"title":"Soda Options","sodas":[{"name":"Coca-Cola","stock":"50"},{"name":"Pepsi","stock":"40"},{"name":"Coke Zero","stock":"3"},{"name":"Sprite","stock":"56"},{"name":"Mountain Dew","stock":"78"}]}', "does not mutate input");

console.assert(renderSodas({ title: "Empty", sodas: [] }) === "<section><h2>Empty</h2><ul></ul></section>", "empty list renders an empty UL");

console.assert(renderSodas(data2).includes("<li>"), "Need to have the <li> tag" )

console.assert(renderSodas(data2).includes("</li>"), "Need to have the </li> tag" )