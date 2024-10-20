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
document.querySelectorAll('.color').forEach(color => {
    color.addEventListener('click', () => {
      document.querySelectorAll('.color').forEach(c => c.classList.remove('selected'));
      color.classList.add('selected');
    });
  });
  
  // Update price value on range change
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');
  
  priceRange.addEventListener('input', function() {
    priceValue.textContent = priceRange.value;
  });
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// مراقبة التمرير لإظهار أو إخفاء الزر
window.onscroll = function() {
    toggleScrollToTopBtn();
};

function toggleScrollToTopBtn() {
    // إذا تم التمرير لأكثر من 300 بكسل، أظهر الزر
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// عند النقر على الزر، تم تمرير الصفحة إلى الأعلى بسلاسة
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // التمرير السلس إلى أعلى الصفحة
    });
});
// مصفوفة لتخزين المنتجات المضافة إلى سلة التسوق
let cartItems = [];

// دالة لإضافة المنتج إلى السلة
function addToCart(productName, size, color, price, imageSrc) {
    // إنشاء كائن يمثل المنتج الذي تمت إضافته
    const product = {
        name: productName,
        size: size,
        color: color,
        price: price,
        image: imageSrc // إضافة رابط الصورة
    };

    // إضافة المنتج إلى مصفوفة سلة التسوق
    cartItems.push(product);

    // تخزين السلة في Local Storage لنقل البيانات إلى صفحة أخرى
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // إعادة توجيه المستخدم إلى صفحة سلة التسوق
    window.location.href = 'cart.html';
}
// التعامل مع زر الفلتر
const filterBtn = document.getElementById('filter-btn');
const filtersDiv = document.getElementById('filters-div');
const closeBtn = document.getElementById('close-btn');

// إظهار الـ div عند الضغط على الأيقونة
filterBtn.addEventListener('click', () => {
  filtersDiv.classList.add('show'); // إضافة الـ class لإظهار الـ div
});

// إخفاء الـ div عند الضغط على زر الإغلاق
closeBtn.addEventListener('click', () => {
  filtersDiv.classList.remove('show'); // إزالة الـ class لإخفاء الـ div
});

