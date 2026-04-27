### Project Description

The final project I have decided to do is a web-based pro shop that allows users to browse bowling balls and filter them by brand, oil rating, and ball motion. 
The users can end up adding them to a shopping cart. All bowling ball information is served by a Raspberry Pi running a JSON-based API that provides data for each bowling ball.
Users can add the bowling balls to a cart where they can opt in for drilling at an added price. 
The cart dynamically updates the total price and adjusts it based on the user's selections.

### Mini API Schema
```json
[
  {
    "id": 1,
    "name": "Raptor Reign",
    "brand": "Motiv",
    "rg": 2.48,
    "diff": 0.055,
    "oilRating": "Heavy",
    "ballMotion": "Very Smooth",
    "coverstock": "Leverage MXV Solid Reactive",
    "price": 255,
    "inStock": true
  }
]
```
- id: identifies each bowling ball
- name: Name of the bowling ball
- rg: Radius of gyration (Length of ball motion)
- diff: Differential (Flare Potential)
- oilRating: Lane condition suitability
- ballMotion: Type of ball reaction
- coverstock: Type of coverstock on the ball
- price: Cost of the bowling ball
- inStock: indicates if the ball is in stock

### Component Model
- API (data.json): Stores bowling data.
- renderproducts(data): Displays bowling balls.
- applyFilters(): Filters the bowling balls by brand, oil rating, and ball motion.
- populateFilters(data): Fills drop-down filter options.
- renderCart(): Displays cart items, drilling toggle, and total.
- addToCart(ball): Adds items to the cart and prevents out-of-stock purchases.
- toggleDrilling(index): toggles drilling option and updates the pricing.
- getCartTotal(): Calculates total including drilling cost.
- runTests(): Does assertions to make sure everything is in order.
- goToCheckout(): Directs the page to checkout.html.

### Test Plan
#### Data Tests
- Data is an array: 
Ensures API response is structured correctly.
- Data is not empty: 
Confirms that usable data is returned.
- Each ball has a name and price: 
ensures the required fields exist.
#### UI Test
- Rendered items match data length:
Ensures UI matches the correct number of products.
#### Non-Mutation Test
- Data is not mutated during filtering:
Ensures filtering doesn't interrupt the original data.
#### Edge Case Test
- Empty state displays correctly
Verifies that a message appears when no products are available.

### Test Results
```
✅ Data is an array
✅ Data is not empty
✅ Each ball has name and price
✅ Rendered items match data length
✅ Data is not mutated
✅ Empty state displays correctly
```

### LLM Collaboration

I used the planning prompt with my JSON shape and asked it to make "I want to: create a mockup ProShop online website to let users buy bowling balls."

It gave me a step-by-step to do it, but it was creating it with React elements. 
I made it do it without React because I could better understand what it was creating.

I then asked it to make a cart system that would add the items to a cart.

It gave me the cart code, and I was happy with what it gave me. I then asked, "Can we add a filter button that can filter by brand, Oil rating, and ball motion?"

It then gave me code snippets that I put in the HTML and JS.

I then asked it to display a visual cart box showing what is currently in the cart. 

I noticed I hadn't implemented the cost of the bowling balls and how they add up in the cart, so I asked it to implement that, and it was calculating prices on the spot rather than pulling them from the JSON. I then had to correct that behavior to ask it to fetch the price from the JSON.

I then asked it to help me move the cart to the bottom of the page, as it was overlaying the ball cards.

The LLM recommended creating a separate checkout page from the main site. I thought it was a good idea and told it to implement it.

The LLM then recommended images, but I vetoed that because my JSON file was already put together and I didn't want to fetch 20 bowling-ball images I didn't own.

I then asked it to create some CSS that used the colors orange and black, but to make it accessible to everyone.

After all that, I gave the LLM my files and told it to generate assertions that met the project's needs. It gave me some overly engineered assertions that I simplified to meet the project's scope.



### Reflection

I understood the website's overall vision and layout better than the LLM did. For example, I wanted the cart at the bottom, as well as a cart system and an option to add a drilling option.
I also realized the inStock variable wasn't even being used, so I had to correct the LLM to use it.

The LLM helped me generate an initial mockup that helped me understand how my site would be set up. It also helped generate the bulk of the code that was redundant and helped with some of the logic involved. 
I was able to orchestrate it to do the work rather than outsource it to the LLM. It was almost like I was working alongside the LLM to achieve the ultimate goal.

### Demo Notes
Make sure the laptop and the Pi are on the same network. I ended up using my phone's hotspot because the guest network was blocking me from using the Pi's IP address to run the fetch command on the laptop.
Once both devices are on the same network, use Hostname -I to get the IP Address and replace the fetch command in the script.js. 

```http://<Pi IP Address>/api/data.json```
