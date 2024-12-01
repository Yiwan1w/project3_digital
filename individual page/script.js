// Select relevant elements
const addToCartButton = document.querySelector('.add-to-cart');
const removeFromCartButton = document.querySelector('.remove-from-cart');
const minicartQuantity = document.querySelector('.minicart-quantity');
const minicartLink = document.querySelector('.minicart-link');

// Function to update the minicart display and attributes
const updateMinicartDisplay = (quantity) => {
    minicartQuantity.textContent = quantity;
    minicartLink.setAttribute('title', `Bag ${quantity}`);
    minicartLink.setAttribute('aria-label', `Bag ${quantity}`);
};

// Load saved quantity from localStorage
const savedQuantity = parseInt(localStorage.getItem('minicartQuantity'), 10) || 0;
updateMinicartDisplay(savedQuantity);

// Add event listener to the "Add to Bag" button
addToCartButton.addEventListener('click', () => {
    let currentQuantity = parseInt(minicartQuantity.textContent, 10);
    currentQuantity += 1; // Increment quantity
    updateMinicartDisplay(currentQuantity);
    localStorage.setItem('minicartQuantity', currentQuantity); // Save to localStorage
});

// Add event listener to the "Remove from Bag" button
removeFromCartButton.addEventListener('click', () => {
    let currentQuantity = parseInt(minicartQuantity.textContent, 10);
    if (currentQuantity > 0) {
        currentQuantity -= 1; // Decrement quantity
        updateMinicartDisplay(currentQuantity);
        localStorage.setItem('minicartQuantity', currentQuantity); // Save to localStorage
    }
});

// collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}