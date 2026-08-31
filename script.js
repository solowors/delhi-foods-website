// Complete Menu Data
const menuData = [
    // Fast Food
    { id: 1, name: "Chicken Broast Chest", price: 450, category: "fast-food", desc: "Crispy & Delicious" },
    { id: 2, name: "Chicken Broast Leg", price: 420, category: "fast-food", desc: "Tender & Juicy" },
    { id: 3, name: "Chicken Broast Chatpata Chest", price: 480, category: "fast-food", desc: "Spicy Favorite" },
    { id: 4, name: "Chicken Broast Chatpata Leg", price: 460, category: "fast-food", desc: "Spicy & Hot" },
    { id: 5, name: "Full Broast", price: 1740, category: "fast-food", desc: "Complete Meal" },
    
    // Burgers
    { id: 6, name: "Zinger Burger", price: 430, category: "burger", desc: "Spicy Chicken Burger" },
    { id: 7, name: "Zinger Cheese Burger", price: 480, category: "burger", desc: "With Melted Cheese" },
    { id: 8, name: "Beef Burger", price: 300, category: "burger", desc: "Juicy Beef Patty" },
    { id: 9, name: "Chicken Burger", price: 290, category: "burger", desc: "Tender Chicken" },
    { id: 10, name: "Chicken Jumbo Burger", price: 450, category: "burger", desc: "Extra Large" },
    
    // BBQ
    { id: 11, name: "Green Tikka Chest", price: 500, category: "bbq", desc: "Marinated & Grilled" },
    { id: 12, name: "Leg Tikka", price: 400, category: "bbq", desc: "Tender Pieces" },
    { id: 13, name: "Seekh Kabab Beef", price: 410, category: "bbq", desc: "Minced Meat Delight" },
    { id: 14, name: "Malai Boti", price: 500, category: "bbq", desc: "Creamy & Delicious" },
    { id: 15, name: "Turkish Kabab", price: 480, category: "bbq", desc: "Special Recipe" },
    
    // Biryani
    { id: 16, name: "Chicken Biryani Single", price: 200, category: "biryani", desc: "Fragrant Rice Dish" },
    { id: 17, name: "Chicken Biryani Half KG", price: 400, category: "biryani", desc: "For 2 People" },
    { id: 18, name: "Chicken Biryani 1 KG", price: 800, category: "biryani", desc: "For Family" },
    { id: 19, name: "Beef Yakhni Pulao Single", price: 200, category: "biryani", desc: "Traditional Pulao" },
    
    // Desi Items
    { id: 20, name: "Nehari", price: 300, category: "desi", desc: "Slow Cooked Stew" },
    { id: 21, name: "Paya", price: 350, category: "desi", desc: "Trotters Curry" },
    { id: 22, name: "Aloo Keema", price: 240, category: "desi", desc: "Potato & Meat" },
    { id: 23, name: "Daal Maash", price: 200, category: "desi", desc: "Lentil Curry" },
    { id: 24, name: "Chicken Karahi", price: 280, category: "desi", desc: "Wok Cooked" }
];

// Chatbot Responses
const chatbotResponses = {
    "menu": "We have a wide variety of items including Broast, Burgers, BBQ, Biryani, and Desi Items. What would you like to order?",
    "price": "Our prices range from Rs 20 to Rs 3000. We have affordable options for everyone!",
    "delivery": "Yes, we offer delivery service. Call us at +92 311 9922302 or WhatsApp for details.",
    "location": "We are located at Malir Kalaboard, Karachi. Address: V5MM+357, Begum Khursheed Rd, Darakhshan Society",
    "hours": "We open at 11 AM and serve till late night. Visit us anytime!",
    "order": "You can order through WhatsApp, call us, or visit our restaurant.",
    "popular": "Our popular items are Chicken Broast, Biryani, and Kababs. All are highly rated!",
    "default": "Hi! How can I help you? Ask about our menu, prices, delivery, or location."
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadMenuItems();
    setupEventListeners();
    initChatbot();
});

// Load Menu Items
function loadMenuItems() {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';
    
    menuData.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item show';
        menuItem.dataset.category = item.category;
        menuItem.innerHTML = `
            <h3>${item.name}</h3>
            <p class="price">Rs ${item.price}/-</p>
            <p>${item.desc}</p>
            <button class="add-btn" onclick="addToOrder(${item.id}, '${item.name}', ${item.price})">Add to Order</button>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Menu Filter
function setupEventListeners() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            filterMenuItems(filter);
        });
    });
    
    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
}

// Filter Menu Items
function filterMenuItems(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
}

// Add to Order Function
function addToOrder(id, name, price) {
    alert(`✓ ${name} added to order!\n\nPrice: Rs ${price}/-\n\nClick the WhatsApp button to complete your order!`);
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Chatbot Functions
function initChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const closeChat = document.getElementById('closeChat');
    
    chatbotToggle.addEventListener('click', function() {
        chatbotWindow.classList.toggle('active');
        if (chatbotWindow.classList.contains('active')) {
            addBotMessage("Welcome to Delhi Foods! 👋 How can I help you today?");
        }
    });
    
    closeChat.addEventListener('click', function() {
        chatbotWindow.classList.remove('active');
    });
    
    // Enter key to send message
    document.getElementById('userInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
}

// Send Chat Message
function sendChatMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    addUserMessage(message);
    userInput.value = '';
    
    // Simulate bot response delay
    setTimeout(() => {
        const response = getBotResponse(message.toLowerCase());
        addBotMessage(response);
    }, 500);
}

// Get Bot Response
function getBotResponse(message) {
    for (const [key, value] of Object.entries(chatbotResponses)) {
        if (message.includes(key)) {
            return value;
        }
    }
    return chatbotResponses.default;
}

// Add User Message
function addUserMessage(message) {
    const chatMessages = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message user';
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add Bot Message
function addBotMessage(message) {
    const chatMessages = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message bot';
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Contact Form
function sendMessage() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields!');
        return;
    }
    
    // In a real scenario, this would send to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Clear form
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactMessage').value = '';
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Search in Menu (Optional Enhancement)
function searchMenu(query) {
    const menuItems = document.querySelectorAll('.menu-item');
    const searchQuery = query.toLowerCase();
    
    menuItems.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        if (itemName.includes(searchQuery)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}