document.addEventListener("DOMContentLoaded", () => {
    // Search functionality
    const searchInput = document.querySelector(".search-input");
    const searchIcon = document.querySelector(".search-icon");

    if (searchInput && searchIcon) {
        searchIcon.addEventListener("click", (event) => {
            event.stopPropagation();
            const query = searchInput.value.trim();
            if (query) {
                alert(`Searching for "${query}"...`);
            } else {
                alert("Please enter a search term.");
            }
        });
    }

    // Add to Cart functionality
    const cart = document.querySelector(".nav-cart");
    let cartCount = 0;

    if (cart) {
        document.querySelectorAll(".box-content p").forEach((addToCartBtn) => {
            addToCartBtn.addEventListener("click", (event) => {
                event.stopPropagation();
                cartCount++;
                updateCartCount();
                alert("Item added to cart!");
            });
        });

        function updateCartCount() {
            cart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
        }
    }

    // Back to top functionality
    const backToTop = document.querySelector(".foot-panel1");
    if (backToTop) {
        backToTop.addEventListener("click", (event) => {
            event.stopPropagation();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Dynamic footer link alert
    document.querySelectorAll(".foot-panel2 a").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            alert(`Navigating to ${link.textContent}`);
        });
    });

    // Header functionality
    const deliverTo = document.querySelector(".nav-address");
    const signIn = document.querySelector(".nav-signin");
    const returnsOrders = document.querySelector(".nav-signin ~ .border"); // Specifically target the Returns & Orders element.
    const panelOptions = document.querySelectorAll(".panel-option p");
    const panelDeals = document.querySelector(".panel-deals");

    if (deliverTo) {
        deliverTo.addEventListener("click", (event) => {
            event.stopPropagation();
            alert("Navigating to Deliver to page.");
        });
    }

    if (signIn) {
        signIn.addEventListener("click", (event) => {
            event.stopPropagation();
            alert("Navigating to Sign-in page.");
        });
    }

    if (returnsOrders) {
        returnsOrders.addEventListener("click", (event) => {
            event.stopPropagation();
            alert("Navigating to Returns & Orders page.");
        });
    }

    // Panel Option interactions
    panelOptions.forEach((option) => {
        option.addEventListener("click", (event) => {
            event.stopPropagation();
            const optionText = option.textContent.trim();
            switch (optionText) {
                case "Today's Deals":
                    alert("Navigating to Today's Deals.");
                    break;
                case "Customer Service":
                    alert("Navigating to Customer Service.");
                    break;
                case "Registry":
                    alert("Navigating to Registry.");
                    break;
                case "Gift Cards":
                    alert("Navigating to Gift Cards.");
                    break;
                case "Sell":
                    alert("Navigating to Sell page.");
                    break;
                default:
                    alert(`Navigating to ${optionText}`);
                    break;
            }
        });
    });

    // Special case for Shop Deals in Electronics
    if (panelDeals) {
        panelDeals.addEventListener("click", (event) => {
            event.stopPropagation();
            alert("Navigating to Electronics Page.");
            

            
        });
    }
    const allButton = document.querySelector(".panel-all");
    if (allButton) {
        allButton.addEventListener("click", (event) => {
            event.stopPropagation();
            alert("Displaying menu options...");
            // Add any logic here to show a menu or toggle a sidebar
        });
    }
});
