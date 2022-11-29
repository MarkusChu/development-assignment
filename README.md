# Development Assignment (Github username is not my name)
## Describe the goal of the application and value to a user
This application is a bakery shop that features pastries and other sweet desserts. There are two filtering and one sorting feature along with a shopping cart that keeps track of individual quantities. Further, the total cost is displayed in the cart and items can be added and removed.
## Link to your deployed web application running online
https://markuschu.github.io/development-assignment/
## Explain the organization of your Components, and the props and state related to them
States for filters and cart list items are tracked within the App.js file. The UseEffect hook is used to update the filtering results as needed. There are two components: the bakery item and the cart. The bakery item receives props that relate to the values intended to be displayed on each item card along with an add to cart callback function while the cart component receives props that represents the cart along with a remove item callback function.
## Note the usability principles considered for layout and hierarchy
The usability principles considered are efficiency, consistency, and effectivity. The cart is always displayed on the left side of the screen which increases efficiency and the items are always placed on the left side of the screen with consistent layouts. This is effective as it reahes the intended goal set by the application: adding and removing items to the cart and keeping track of the total price.
