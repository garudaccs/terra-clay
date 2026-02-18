// Product Data
const products = [
    {
        id: 1,
        name: 'Zen Garden Vase',
        category: 'Vases',
        price: 2499,
        originalPrice: 3199,
        badge: 'Bestseller',
        image: 'vase'
    },
    {
        id: 2,
        name: 'Artisan Dinner Set',
        category: 'Dinnerware',
        price: 4999,
        originalPrice: null,
        badge: null,
        image: 'dinnerware'
    },
    {
        id: 3,
        name: 'Terracotta Planter',
        category: 'Planters',
        price: 1299,
        originalPrice: 1599,
        badge: 'Sale',
        image: 'planter'
    },
    {
        id: 4,
        name: 'Minimalist Bowl Set',
        category: 'Dinnerware',
        price: 1899,
        originalPrice: null,
        badge: 'New',
        image: 'bowl'
    },
    {
        id: 5,
        name: 'Sculptural Candle Holder',
        category: 'Home Decor',
        price: 999,
        originalPrice: null,
        badge: null,
        image: 'candle'
    },
    {
        id: 6,
        name: 'Hand-painted Mug Set',
        category: 'Dinnerware',
        price: 1599,
        originalPrice: 1999,
        badge: 'Popular',
        image: 'mug'
    },
    {
        id: 7,
        name: 'Geometric Vase',
        category: 'Vases',
        price: 1899,
        originalPrice: null,
        badge: null,
        image: 'geometric'
    },
    {
        id: 8,
        name: 'Hanging Planter',
        category: 'Planters',
        price: 1499,
        originalPrice: null,
        badge: 'New',
        image: 'hanging'
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        text: 'The quality of the ceramics is exceptional. Each piece feels like a work of art. My dinner guests always compliment the beautiful dinnerware!',
        author: 'Priya Sharma',
        location: 'Mumbai',
        initials: 'PS'
    },
    {
        id: 2,
        text: 'I attended the wheel throwing workshop and it was such a therapeutic experience. The instructors were patient and skilled. Highly recommend!',
        author: 'Arjun Mehta',
        location: 'Delhi',
        initials: 'AM'
    },
    {
        id: 3,
        text: 'Ordered a custom vase for my mothers birthday. The team was incredibly helpful and the final piece exceeded all expectations. Will order again!',
        author: 'Sneha Patel',
        location: 'Bangalore',
        initials: 'SP'
    }
];

// Cart State
let cart = [];

// DOM Elements
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const productGrid = document.getElementById('productGrid');
const testimonialSlider = document.getElementById('testimonialSlider');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const newsletterForm = document.getElementById('newsletterForm');
const bookWorkshopBtn = document.getElementById('bookWorkshopBtn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderTestimonials();
    initScrollEffects();
    initEventListeners();
});

// Render Products
function renderProducts() {
    productGrid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <div class="product-placeholder" style="background: ${getProductGradient(product.image)}">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5">
                        ${getProductIcon(product.image)}
                    </svg>
                </div>
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-actions">
                    <button class="product-action-btn" title="Add to Wishlist">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <button class="product-action-btn" title="Quick View">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Get product gradient
function getProductGradient(type) {
    const gradients = {
        vase: 'linear-gradient(135deg, #E8DCC4 0%, #D4A574 100%)',
        dinnerware: 'linear-gradient(135deg, #9CAF88 0%, #7A8F6A 100%)',
        planter: 'linear-gradient(135deg, #C2703D 0%, #A85D32 100%)',
        bowl: 'linear-gradient(135deg, #8B5A2B 0%, #6B4423 100%)',
        candle: 'linear-gradient(135deg, #D4A574 0%, #B8956A 100%)',
        mug: 'linear-gradient(135deg, #7A8F6A 0%, #5D7050 100%)',
        geometric: 'linear-gradient(135deg, #A67C52 0%, #8B6914 100%)',
        hanging: 'linear-gradient(135deg, #9CAF88 0%, #6B8E5A 100%)'
    };
    return gradients[type] || gradients.vase;
}

// Get product icon SVG path
function getProductIcon(type) {
    return '<circle cx="12" cy="12" r="10"></circle>';
}

// Render Testimonials
function renderTestimonials() {
    testimonialSlider.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <p class="testimonial-text">${testimonial.text}</p>
            <div class="testimonial-author">
                <div class="author-avatar">${testimonial.initials}</div>
                <div class="author-info">
                    <h4>${testimonial.author}</h4>
                    <span>${testimonial.location}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    showToast(`${product.name} added to cart!`);
}

// Update Cart
function updateCart() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image" style="background: ${getProductGradient(item.image)}"></div>
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">₹${item.price.toLocaleString()}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="product-action-btn" onclick="removeFromCart(${item.id})" style="align-self: start;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `₹${total.toLocaleString()}`;
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCart();
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showToast('Item removed from cart');
}

// Show Toast
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Scroll Effects
function initScrollEffects() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Animate stats on scroll
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

// Animate number value
function animateValue(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Event Listeners
function initEventListeners() {
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Cart toggle
    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('open');
        overlay.classList.add('active');
    });
    
    closeCart.addEventListener('click', closeCartSidebar);
    overlay.addEventListener('click', closeCartSidebar);
    
    // Newsletter form
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input').value;
        showToast('Thanks for subscribing! Check your inbox.');
        e.target.reset();
    });
    
    // Workshop booking
    bookWorkshopBtn.addEventListener('click', () => {
        showToast('Workshop booking form coming soon!');
    });
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile menu if open
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Category cards click
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            showToast(`Browsing ${category} collection...`);
        });
    });
}

// Close cart sidebar
function closeCartSidebar() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('active');
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCartSidebar();
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});
