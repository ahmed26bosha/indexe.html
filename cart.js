const switchInput = document.getElementById('switch');
switchInput.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', switchInput.checked);
});
// تأكد من أن القائمة المنسدلة مغلقة عند تحميل الصفحة
// تأكد من أن القائمة المنسدلة مغلقة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
DropDownMenu.classList.remove('open');
});

const togglebtn = document.querySelector('.toggle-btn');
const togglebtnIcon = document.querySelector('.toggle-btn i');
const DropDownMenu = document.querySelector('.dropdown-menu');

// جميع الروابط داخل القائمة
const menuLinks = document.querySelectorAll('.dropdown-menu a');

togglebtn.onclick = function () {
DropDownMenu.classList.toggle('open');
const isOpen = DropDownMenu.classList.contains('open');

// تغيير الأيقونة بناءً على حالة القائمة
togglebtnIcon.className = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
};
window.onload = function() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.getElementById('cart-container');

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty</p>';
        return;
    }

    cartItems.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.className = 'cart-item';
        productDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="product-image">
            <div class="product-details">
                <h3>${item.name}</h3>
                <p>Size: ${item.size}</p>
                <p>Color: ${item.color}</p>
                <p>Price: $${item.price}</p>
            </div>
            <svg class="remove-cart" onclick="removeFromCart(event, '${item.name}')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="cursor: pointer; width: 24px; height: 24px; margin-left: 10px;">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM16 16c0 1.104-.896 2-2 2s-2-.896-2-2v-4c0-1.104.896-2 2-2s2 .896 2 2v4zm-4 2c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0-14c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"/>
            </svg>
        `;
        cartContainer.appendChild(productDiv);
    });
};

function removeFromCart(event, name) {
    event.stopPropagation();
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => item.name !== name);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${name} has been removed from your cart!`);
    window.onload();
}

function removeFromCart(event, name) {
    event.stopPropagation();
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => item.name !== name);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${name} has been removed from your cart!`);

    // تحديث عرض السلة
    window.onload();
}
