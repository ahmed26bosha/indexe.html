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
   // الحصول على جميع العناصر التي تحتوي على الـ class circle
   const circles = document.querySelectorAll('.circle');

   // إضافة الحدث click لكل دائرة
   circles.forEach(circle => {
       circle.addEventListener('click', () => {
           // إزالة الـ class "active" من كل الدوائر
           circles.forEach(c => c.classList.remove('active'));

           // إضافة الـ class "active" للدائرة التي تم الضغط عليها
           circle.classList.add('active');
       });
   });
 const decreaseBtn = document.getElementById('decrease-btn');
        const increaseBtn = document.getElementById('increase-btn');
        const counterValue = document.getElementById('counter-value');

        // تحويل القيمة إلى رقم
        let counter = parseInt(counterValue.innerText);

        // عند الضغط على الزر -
        decreaseBtn.addEventListener('click', () => {
            if (counter > 0) { // تأكد أن القيمة لا تصبح أقل من 0
                counter--;
                counterValue.innerText = counter;
            }
        });

        // عند الضغط على الزر +
        increaseBtn.addEventListener('click', () => {
            counter++;
            counterValue.innerText = counter;
        });
        // الحصول على التبويبات والمحتوى
        const tabs = document.querySelectorAll('.tab-link');
        const contents = document.querySelectorAll('.tab-content');
        const indicator = document.querySelector('.indicator');

        // إضافة حدث عند الضغط على أي تبويب
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // إزالة الـ class "active" من كل التبويبات
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active'); // تفعيل التبويب الذي تم الضغط عليه

                // تحديث موقع الخط السفلي بناءً على التبويب
                indicator.style.left = `${index * 33.33}%`;

                // إخفاء كل المحتويات وإظهار المحتوى المرتبط بالتبويب
                contents.forEach(content => content.classList.remove('active'));
                document.getElementById(tab.getAttribute('data-target')).classList.add('active');
            });
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

