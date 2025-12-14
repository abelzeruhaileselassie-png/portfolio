   // Product data - Sporting Goods
        const products = [
            {
                id: 1,
                name: "Professional Basketball",
                price: 1500.99,
                image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                rating: 4.7,
                description: "Official size professional basketball with superior grip",
                category: " Sports"
            },
            {
                id: 2,
                name: "Running Shoes",
                price: 2500.99,
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                rating: 4.5,
                description: "Lightweight running shoes with advanced cushioning",
                category: "Footwear"
            },
            {
                id: 3,
                name: "Football cleats",
                price: 3000.25,
                image: "https://plus.unsplash.com/premium_photo-1663133611323-69d98d17de90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29jY2VyJTIwY2xlYXRzfGVufDB8fDB8fHww",
                rating: 4.9,
                description:"Comfortable football cleatswith advanced cushioning",
                category: "Footwear"
            
            },
             {
                id: 4,
                name: "Soccer Ball",
                price: 900.99,
                image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                rating: 4.5,
                description: "Official size and weight soccer ball",
                category: "Sports"
            },
           
            {
                id: 5,
                name: "Tennis Racket",
                price: 3800.99,
                image: "https://plus.unsplash.com/premium_photo-1679777548187-b287c0dcc4bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhY2tldHxlbnwwfHwwfHx8MA%3D%3D",
                rating: 4.4,
                description: "Professional tennis racket with premium grip",
                category: "Sports"
            },
            
            {
                id: 6,
                name: "Fitness Tracker",
                price: 2500.99,
                image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                rating: 4.3,
                description: "Water-resistant fitness tracker with heart rate monitor",
                category: "Fitness"
            },
           
            {
                id: 7,
                name: "Hiking Backpack",
                price: 4500.99,
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                rating: 4.7,
                description: "35L hiking backpack with hydration compartment",
                category: "Outdoor"
            },
             {
                id: 8,
                name: "Yoga Mat",
                price: 890.99,
                image: "https://plus.unsplash.com/premium_photo-1663090241828-1d5f7456b699?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHlvZ2ElMjBtYXR8ZW58MHx8MHx8fDA%3D",
                rating: 4.8,
                description: "Non-slip yoga mat with carrying strap",
                category: "Fitness"
            }, 
            
            {
                id: 9,
                name: "Camping Tent",
                price: 4000.99,
                image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                rating: 4.6,
                description: "4-person waterproof camping tent",
                category: "Outdoor"
            },
            {
                id: 10,
                name: "Active wear",
                price: 2500,
                image: "https://images.unsplash.com/photo-1506638794690-bbea5c6f0ab7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWN0aXZlJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
                rating: 4.4,
                description: " Shop performance gear for workouts and everyday moves.",
                category: "Fitness"
            },
            {
              id: 11,
                name: "Weights and dumbbells",
                price: 2000,
                image: "https://plus.unsplash.com/premium_photo-1753476399620-d0672448550a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2VpZ2h0cyUyMGFuZCUyMGR1bWJiZWxsc3xlbnwwfHwwfHx8MA%3D%3D",
                rating: 4.4,
                description: " dumbbells, barbells, hex dumbbells, individual weights, adjustable dumbbell sets, free weights, plates, and ankle/wrist weights.",
                category: "Fitness"  
            },
            {
                id: 12,
                name: "Swimwear",
                 price: 2000,
                image: "https://media.istockphoto.com/id/1306171481/photo/portrait-of-caucasian-adult-swimmer-in-the-swimming-pool-professional-athlete-with-swimming.webp?a=1&b=1&s=612x612&w=0&k=20&c=YQcrS9B-etwuRo-UkZ1GFCn30aqdWS8dEsZ29vEl0-k=",
                rating: 4.4,
                description: " Buy the best quality swimwear and accessories today, with a collection of swimsuits, bikinis, shorts and jammers, available for adults and kids.",
                category: "Fitness" 

            }
        ];

        // Cart state
        let cart = [];

        // DOM elements
        const productsContainer = document.getElementById('products-container');
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');
        const cartCountElement = document.querySelector('.cart-count');
        const cartIcon = document.getElementById('cart-icon');
        const cartSidebar = document.getElementById('cart-sidebar');
        const closeCart = document.getElementById('close-cart');
        const checkoutBtn = document.getElementById('checkout-btn');
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toast-message');
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts();
            updateCart();

            // Event listeners
            cartIcon.addEventListener('click', openCart);
            closeCart.addEventListener('click', closeCartSidebar);
            checkoutBtn.addEventListener('click', checkout);
            searchInput.addEventListener('input', handleSearch);
            
            // Close cart when clicking outside
            document.addEventListener('click', function(e) {
                if (!cartSidebar.contains(e.target) && !cartIcon.contains(e.target)) {
                    closeCartSidebar();
                }
            });

            // Close search results when clicking outside
            document.addEventListener('click', function(e) {
                if (!searchResults.contains(e.target) && e.target !== searchInput) {
                    searchResults.classList.remove('active');
                }
            });
        });

        // Render products on the page
        function renderProducts() {
            productsContainer.innerHTML = '';
            
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                
                const ratingStars = generateRatingStars(product.rating);
                
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-rating">
                            ${ratingStars}
                        </div>
                        <p class="product-price">${product.price.toFixed(2)}birr</p>
                        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                `;
                
                productsContainer.appendChild(productCard);
            });
            
            // Add event listeners to "Add to Cart" buttons
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    addToCart(productId);
                });
            });
        }

        // Generate star rating HTML
        function generateRatingStars(rating) {
            let stars = '';
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 !== 0;
            
            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            }
            
            const emptyStars = 5 - Math.ceil(rating);
            for (let i = 0; i < emptyStars; i++) {
                stars += '<i class="far fa-star"></i>';
            }
            
            return stars;
        }

        // Add product to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            
            if (!product) return;
            
            // Check if product is already in cart
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            updateCart();
            showToast(`${product.name} added to cart!`);
        }

        // Remove product from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
            showToast('Item removed from cart');
        }

        // Update quantity of product in cart
        function updateQuantity(productId, newQuantity) {
            if (newQuantity < 1) {
                removeFromCart(productId);
                return;
            }
            
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = newQuantity;
                updateCart();
            }
        }

        // Update cart UI
        function updateCart() {
            // Update cart count
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCountElement.textContent = totalItems;
            
            // Update cart items
            cartItemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Your cart is empty</p>
                    </div>
                `;
                checkoutBtn.disabled = true;
            } else {
                checkoutBtn.disabled = false;
                
                cart.forEach(item => {
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    
                    cartItem.innerHTML = `
                        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                        <div class="cart-item-details">
                            <h4 class="cart-item-title">${item.name}</h4>
                            <p class="cart-item-price">${item.price.toFixed(2)}birr</p>
                            <div class="cart-item-quantity">
                                <button class="quantity-btn decrease" data-id="${item.id}">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="quantity-btn increase" data-id="${item.id}">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button class="remove-item" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    `;
                    
                    cartItemsContainer.appendChild(cartItem);
                });
                
                // Add event listeners to quantity buttons and remove buttons
                const decreaseButtons = document.querySelectorAll('.decrease');
                const increaseButtons = document.querySelectorAll('.increase');
                const removeButtons = document.querySelectorAll('.remove-item');
                
                decreaseButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const productId = parseInt(this.getAttribute('data-id'));
                        const item = cart.find(item => item.id === productId);
                        if (item) {
                            updateQuantity(productId, item.quantity - 1);
                        }
                    });
                });
                
                increaseButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const productId = parseInt(this.getAttribute('data-id'));
                        const item = cart.find(item => item.id === productId);
                        if (item) {
                            updateQuantity(productId, item.quantity + 1);
                        }
                    });
                });
                
                removeButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const productId = parseInt(this.getAttribute('data-id'));
                        removeFromCart(productId);
                    });
                });
            }
            
            // Update total
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotalElement.textContent = `Total: ${total.toFixed(2)}birr`;
        }

        // Open cart sidebar
        function openCart(e) {
            e.preventDefault();
            cartSidebar.classList.add('active');
        }

        // Close cart sidebar
        function closeCartSidebar() {
            cartSidebar.classList.remove('active');
        }

        // Checkout function
        function checkout() {
            if (cart.length === 0) return;
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            alert(`Thank you for your purchase! Total: ${total.toFixed(2)}birr`);
            
            // Clear cart
            cart = [];
            updateCart();
            closeCartSidebar();
        }

        // Show toast notification
        function showToast(message) {
            toastMessage.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Handle search functionality
        function handleSearch() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                searchResults.classList.remove('active');
                return;
            }
            
            // Filter products based on search term
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
            
            // Display search results
            displaySearchResults(filteredProducts);
        }

        // Display search results
        function displaySearchResults(results) {
            searchResults.innerHTML = '';
            
            if (results.length === 0) {
                searchResults.innerHTML = '<div class="search-result-item">No products found</div>';
            } else {
                results.forEach(product => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'search-result-item';
                    resultItem.innerHTML = `
                        <img src="${product.image}" alt="${product.name}" class="search-result-img">
                        <div>
                            <div>${product.name}</div>
                            <div style="font-size: 14px; color: var(--primary);">${product.price.toFixed(2)}birr</div>
                        </div>
                    `;
                    
                    resultItem.addEventListener('click', function() {
                        addToCart(product.id);
                        searchInput.value = '';
                        searchResults.classList.remove('active');
                        showToast(`${product.name} added to cart!`);
                    });
                    
                    searchResults.appendChild(resultItem);
                });
            }
            
            searchResults.classList.add('active');
        }

        // Product details modal functionality
const productModal = document.createElement('div');
productModal.className = 'product-modal';
productModal.innerHTML = `
    <div class="modal-content">
        <button class="close-modal" id="close-modal">
            <i class="fas fa-times"></i>
        </button>
        <div class="modal-body">
            <div class="modal-images">
                <img src="" alt="Product Image" class="main-image" id="modal-main-image">
                <div class="image-thumbnails" id="modal-thumbnails"></div>
            </div>
            <div class="modal-details">
                <h2 class="modal-title" id="modal-title"></h2>
                <div class="modal-rating" id="modal-rating"></div>
                <p class="modal-price" id="modal-price"></p>
                <span class="modal-category" id="modal-category"></span>
                <p class="modal-description" id="modal-description"></p>
                
                <div class="modal-features">
                    <h4>Key Features:</h4>
                    <ul id="modal-features"></ul>
                </div>
                
                <div class="modal-actions">
                    <div class="quantity-selector">
                        <button id="modal-decrease"><i class="fas fa-minus"></i></button>
                        <span id="modal-quantity">1</span>
                        <button id="modal-increase"><i class="fas fa-plus"></i></button>
                    </div>
                    <button class="modal-add-to-cart" id="modal-add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
`;

// Add modal to the page
document.body.appendChild(productModal);

// Modal elements
const closeModal = document.getElementById('close-modal');
const modalMainImage = document.getElementById('modal-main-image');
const modalThumbnails = document.getElementById('modal-thumbnails');
const modalTitle = document.getElementById('modal-title');
const modalRating = document.getElementById('modal-rating');
const modalPrice = document.getElementById('modal-price');
const modalCategory = document.getElementById('modal-category');
const modalDescription = document.getElementById('modal-description');
const modalFeatures = document.getElementById('modal-features');
const modalDecrease = document.getElementById('modal-decrease');
const modalIncrease = document.getElementById('modal-increase');
const modalQuantity = document.getElementById('modal-quantity');
const modalAddToCart = document.getElementById('modal-add-to-cart');

// Current product in modal
let currentProduct = null;
let currentQuantity = 1;

// Enhanced product data with specific images for each product
const enhancedProducts = products.map(product => {
    let additionalImages = [];
    
    // Set different images based on product ID or name
    if (product.id === 1) { 
        additionalImages = [
            "https://plus.unsplash.com/premium_photo-1668767725891-58f5cd788105?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFza2V0YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1627627256672-027a4613d028?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFza2V0YmFsbHxlbnwwfHwwfHx8MA%3D%3D"
        ];
    } else if (product.id === 2) { 
        additionalImages = [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
        ];
    } else if (product.id === 3) { 
        additionalImages = [
            "https://plus.unsplash.com/premium_photo-1663133611323-69d98d17de90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29jY2VyJTIwY2xlYXRzfGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1663133623858-f9573e2e587b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29jY2VyJTIwY2xlYXRzfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29jY2VyJTIwY2xlYXRzfGVufDB8fDB8fHww"
        ];
    } else if (product.id === 4) { 
        additionalImages = [
            "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jY2VyJTIwYmFsbHxlbnwwfHwwfHx8MA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1682435573900-b55886ec0e0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvY2NlciUyMGJhbGx8ZW58MHx8MHx8fDA%3D"
        ];
    } else if (product.id === 5) { 
        additionalImages = [
            "https://plus.unsplash.com/premium_photo-1679777548187-b287c0dcc4bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhY2tldHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVubmlzJTIwcmFja2V0fGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1663045882560-3bdd5f71687c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVubmlzJTIwcmFja2V0fGVufDB8fDB8fHww"
        ];
    } else if (product.id === 6) { 
        additionalImages = [
            "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D"
        ];
    } else if (product.id === 7) { 
        additionalImages = [
             "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1528384483229-b4a97480dbea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhpY2tpbmclMjBiYWNrcGFja3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1702906221006-97bc40420704?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhpY2tpbmclMjBiYWNrcGFja3xlbnwwfHwwfHx8MA%3D%3D"
        ];
    } else if (product.id === 8) { 
        additionalImages = [
            "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://plus.unsplash.com/premium_photo-1663090241828-1d5f7456b699?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHlvZ2ElMjBtYXR8ZW58MHx8MHx8fDA%3D"
        ];
    } else if (product.id === 9) { 
        additionalImages = [
            "https://images.unsplash.com/photo-1624923686627-514dd5e57bae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGluZyUyMHRlbnR8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcGluZyUyMHRlbnR8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1723556142724-c011cc5eddc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbXBpbmclMjB0ZW50fGVufDB8fDB8fHww"
        ];
    } else if (product.id === 10) { 
        additionalImages = [
            "https://images.unsplash.com/photo-1645318801217-143533cb559f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWN0aXZlJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1506638794690-bbea5c6f0ab7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWN0aXZlJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1683147614938-d27250357e2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWN0aXZlJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D"
        ];
    } else if (product.id === 11) { 
        additionalImages = [
            "https://media.istockphoto.com/id/1193707579/photo/rows-of-dumbbells-in-the-gym-with-hand.webp?a=1&b=1&s=612x612&w=0&k=20&c=pF78u2i4HrTthJKXwBf9-7ZF67IxBeE6UhbmaBQbEMo=",
            "https://plus.unsplash.com/premium_photo-1672129881019-b85134aba075?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V2VpZ2h0cyUyMGFuZCUyMGR1bWJiZWxsc3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1687041568037-dab13851ea14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2VpZ2h0cyUyMGFuZCUyMGR1bWJiZWxsc3xlbnwwfHwwfHx8MA%3D%3D"
        ];
    } else if (product.id === 12) { 
        additionalImages = [
            "https://media.istockphoto.com/id/184643631/photo/yellow-bikini-and-blue-beach-short.webp?a=1&b=1&s=612x612&w=0&k=20&c=AE9CT2L5c0lJgjov7GwLw3J2OMpOUpmo8WwBbNI7D00=",
            "https://media.istockphoto.com/id/1327767222/photo/stylish-striped-swimsuit-isolated-on-white-top-view-beach-accessory.webp?a=1&b=1&s=612x612&w=0&k=20&c=CbzZJndKJKqJBs3riZnAWKJEiWLCv0DHteoOJsLROIU=",
            "https://media.istockphoto.com/id/534324682/photo/swim-trunks-for-guys.webp?a=1&b=1&s=612x612&w=0&k=20&c=zyQI_-lZJr3mX07saCIINhDrowwko3Xia_SYs1lsB-c="
        ];
    } 
    
    
    // If no specific images set, use default ones
    if (additionalImages.length === 0) {
        additionalImages = [
            product.image,
            "https://yourwebsite.com/images/default-product-1.jpg",
            "https://yourwebsite.com/images/default-product-2.jpg"
        ];
    }
    
    // Generate features based on product category
    let features = [];
    if (product.category === "Sports") {
        features = [
            "Official size and weight",
            "Durable construction for intense play",
            "Excellent grip and control",
            "Suitable for both indoor and outdoor use"
        ];
    } else if (product.category === "Footwear") {
        features = [
            "Advanced cushioning technology",
            "Breathable mesh upper",
            "Durable rubber outsole",
            "Available in multiple sizes"
        ];
    } else if (product.category === "Fitness") {
        features = [
            "High-quality materials",
            "Easy to clean and maintain",
            "Portable and lightweight",
            "Suitable for all skill levels"
        ];
    } else if (product.category === "Sports") {
        features = [
            "Professional-grade construction",
            "Optimized for power and control",
            "Comfortable grip handle",
            "Includes protective cover"
        ];
    } else if (product.category === "Outdoor") {
        features = [
            "Weather-resistant materials",
            "Easy setup and takedown",
            "Lightweight and portable",
            "Multiple storage compartments"
        ];
    } else {
        features = [
            "Premium quality materials",
            "Designed for optimal performance",
            "Durable construction",
            "Satisfaction guaranteed"
        ];
    }
    
    return {
        ...product,
        additionalImages,
        features
    };
});

// Update products array with enhanced data
products.length = 0;
products.push(...enhancedProducts);

// Add event listeners for modal
closeModal.addEventListener('click', closeProductModal);
modalDecrease.addEventListener('click', decreaseModalQuantity);
modalIncrease.addEventListener('click', increaseModalQuantity);
modalAddToCart.addEventListener('click', addToCartFromModal);

// Close modal when clicking outside
productModal.addEventListener('click', function(e) {
    if (e.target === productModal) {
        closeProductModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && productModal.classList.contains('active')) {
        closeProductModal();
    }
});

// Function to open product modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    currentQuantity = 1;
    
    // Update modal content
    modalTitle.textContent = product.name;
    modalRating.innerHTML = generateRatingStars(product.rating);
    modalPrice.textContent = `${product.price.toFixed(2)}birr`;
    modalCategory.textContent = product.category;
    modalDescription.textContent = product.description;
    modalQuantity.textContent = currentQuantity;
    
    // Update features
    modalFeatures.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        modalFeatures.appendChild(li);
    });
    
    // Update images
    modalMainImage.src = product.additionalImages[0];
    modalMainImage.alt = product.name;
    
    // Update thumbnails
    modalThumbnails.innerHTML = '';
    product.additionalImages.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `${product.name} - Image ${index + 1}`;
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.addEventListener('click', () => {
            // Update main image
            modalMainImage.src = image;
            
            // Update active thumbnail
            document.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.classList.remove('active');
            });
            thumbnail.classList.add('active');
        });
        modalThumbnails.appendChild(thumbnail);
    });
    
    // Show modal
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Function to close product modal
function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Modal quantity functions
function decreaseModalQuantity() {
    if (currentQuantity > 1) {
        currentQuantity--;
        modalQuantity.textContent = currentQuantity;
    }
}

function increaseModalQuantity() {
    currentQuantity++;
    modalQuantity.textContent = currentQuantity;
}

// Add to cart from modal
function addToCartFromModal() {
    if (!currentProduct) return;
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === currentProduct.id);
    
    if (existingItem) {
        existingItem.quantity += currentQuantity;
    } else {
        cart.push({
            ...currentProduct,
            quantity: currentQuantity
        });
    }
    
    updateCart();
    showToast(`${currentProduct.name} (${currentQuantity}) added to cart!`);
    closeProductModal();
}

// Update renderProducts function to include click events for modal
function renderProducts() {
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const ratingStars = generateRatingStars(product.rating);
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    ${ratingStars}
                </div>
                <p class="product-price">${product.price.toFixed(2)}birr</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        // Add click event to product card to open modal
        productCard.addEventListener('click', function(e) {
            // Don't open modal if clicking the add to cart button
            if (!e.target.classList.contains('add-to-cart')) {
                openProductModal(product.id);
            }
        });
        
        productsContainer.appendChild(productCard);
    });
    
    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent opening modal when clicking add to cart
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Make sure to call renderProducts after adding the modal functionality
// Add this at the end of your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Your existing initialization code...
    
    // Re-render products with modal click events
    renderProducts();
});