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

// إضافة استماع على كل رابط داخل القائمة
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault(); // منع السلوك الافتراضي

            // غلق القائمة
            DropDownMenu.classList.remove('open');
            togglebtnIcon.className = 'fa-solid fa-bars'; // تغيير الأيقونة مرة أخرى

            // الانتظار حتى يتم إغلاق القائمة بشكل كامل
            DropDownMenu.addEventListener('transitionend', function() {
                // التمرير إلى القسم المستهدف بعد انتهاء الـ transition
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, { once: true }); // استخدام `once: true` لضمان تنفيذ الحدث مرة واحدة فقط
        }
    });
});
// الحصول على الزر
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
const searchInput = document.getElementById('searchInput');
const content = document.getElementById('content'); // تأكد من أن لديك محتوى لتبحث فيه

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase(); // قراءة النص المدخل وتحويله إلى أحرف صغيرة
    const paragraphs = content.querySelectorAll('p, h1, a'); // حدد العناصر التي تريد البحث فيها

    // إزالة أي تمييز سابق
    paragraphs.forEach(paragraph => {
        // نأخذ النص الأصلي ونزيل أي تمييز سابق
        paragraph.innerHTML = paragraph.textContent; 
    });

    // إذا كان هناك نص مدخل، نبدأ البحث
    if (searchTerm) {
        paragraphs.forEach(paragraph => {
            const regex = new RegExp(`(${searchTerm})`, 'gi'); // إنشاء تعبير منتظم للبحث عن النص
            if (paragraph.textContent.toLowerCase().includes(searchTerm)) {
                // تمييز النص المطابق
                paragraph.innerHTML = paragraph.textContent.replace(regex, '<span class="highlight">$1</span>');
            }
        });
    }
});
// مصفوفة لتخزين المنتجات المضافة إلى سلة التسوق
let cartItems = [];

// دالة لإضافة المنتج إلى السلة
function addToCart(productName, size, color, price, imageSrc) {
    event.preventDefault();
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