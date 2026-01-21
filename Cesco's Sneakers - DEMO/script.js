// --- TRANSLATIONS ---
const translations = {
    en: {
        nav_login: "Login",
        cart_title: "Your Cart",
        filter_title: "Filters",
        filter_btn: "Filters",
        sort_title: "Sort By",
        sort_default: "Recommended",
        sort_asc: "Price: Low to High",
        sort_desc: "Price: High to Low",
        hero_title: "Find your perfect step",
        hero_subtitle: "The best athletic, casual shoes and boots.",
        filter_cat: "Category",
        filter_gen: "Gender",
        cat_all: "All",
        cat_running: "Running",
        cat_lifestyle: "Lifestyle",
        cat_basket: "Basketball",
        cat_boots: "Boots",
        gen_all: "All",
        gen_men: "Men",
        gen_women: "Women",
        gen_unisex: "Unisex",
        no_results: "No products match the selected filters.",
        footer_rights: "© 2026 Cesco's. All rights reserved.",
        login_title: "Welcome Back",
        login_btn: "Login",
        login_demo: "Demo account: use any email/password.",
        cart_empty: "Your cart is empty",
        cart_total: "Total:",
        cart_checkout: "Proceed to Checkout",
        checkout_title: "Secure Payment",
        ship_info: "Shipping Info",
        pay_method: "Payment Method",
        pay_total: "Total to pay:",
        pay_now: "Pay Now",
        toast_added: "added!",
        toast_login_req: "Login to purchase!",
        toast_welcome: "Welcome back, ",
        toast_logout: "Logged out",
        toast_success: "Payment Successful!",
        toast_thanks: "Thanks for your purchase, ",
        back_shop: "Back to shop",
        ph_name: "First Name",
        ph_surname: "Last Name",
        ph_addr: "Address",
        logout: "Logout",
        hi: "Hi",
        new_arrivals: "New Arrivals",
        reset_filters: "Reset Filters",
        series: "Series",
        toast_title_success: "Success",
        toast_title_error: "Attention",
        field_required: "Please fill out this field",
        login_sub: "Please enter your details to sign in"
    },
    it: {
        nav_login: "Accedi",
        cart_title: "Il tuo Carrello",
        filter_title: "Filtri",
        filter_btn: "Filtri",
        sort_title: "Ordina Per",
        sort_default: "Consigliati",
        sort_asc: "Prezzo: Crescente",
        sort_desc: "Prezzo: Decrescente",
        hero_title: "Trova il tuo passo perfetto",
        hero_subtitle: "Le migliori scarpe sportive, casual e boots.",
        filter_cat: "Categoria",
        filter_gen: "Sesso",
        cat_all: "Tutte",
        cat_running: "Running",
        cat_lifestyle: "Lifestyle",
        cat_basket: "Basket",
        cat_boots: "Boots",
        gen_all: "Tutti",
        gen_men: "Uomo",
        gen_women: "Donna",
        gen_unisex: "Unisex",
        no_results: "Nessun prodotto corrisponde ai filtri selezionati.",
        footer_rights: "© 2026 Cesco's. Tutti i diritti riservati.",
        login_title: "Bentornato",
        login_btn: "Accedi",
        login_demo: "Account demo: usa qualsiasi email/password.",
        cart_empty: "Il carrello è vuoto",
        cart_total: "Totale:",
        cart_checkout: "Procedi al Pagamento",
        checkout_title: "Pagamento Sicuro",
        ship_info: "Dati Spedizione",
        pay_method: "Metodo di Pagamento",
        pay_total: "Totale da pagare:",
        pay_now: "Paga Ora",
        toast_added: "aggiunto!",
        toast_login_req: "Accedi per acquistare!",
        toast_welcome: "Bentornato, ",
        toast_logout: "Logout effettuato",
        toast_success: "Pagamento Riuscito!",
        toast_thanks: "Grazie per il tuo acquisto, ",
        back_shop: "Torna allo shop",
        ph_name: "Nome",
        ph_surname: "Cognome",
        ph_addr: "Indirizzo",
        logout: "Esci",
        hi: "Ciao",
        new_arrivals: "Nuovi Arrivi",
        reset_filters: "Resetta Filtri",
        series: "Series",
        toast_title_success: "Successo",
        toast_title_error: "Attenzione",
        field_required: "Compila questo campo",
        login_sub: "Inserisci i tuoi dati per accedere"
    }
};

// --- DATA ---
const products = [
    { id: 1, name: "Nike Air Zoom", category: "running", gender: "men", price: 129.99, image: "img/Nike_Air_Zoom_IMG.png" },
    { id: 2, name: "Adidas Ultraboost", category: "running", gender: "men", price: 159.99, image: "img/Adidas_Ultraboost_IMG.png" },
    { id: 3, name: "Vans Old Skool", category: "lifestyle", gender: "men", price: 75.00, image: "img/Vans_Old_Skool_IMG.png" },
    { id: 4, name: "Jordan Retro High", category: "basket", gender: "men", price: 189.99, image: "img/Jordan_Retro_High_IMG.png" },
    { id: 5, name: "New Balance 574", category: "lifestyle", gender: "women", price: 99.99, image: "img/New_Balance_574_IMG.png" },
    { id: 6, name: "Puma RS-X", category: "lifestyle", gender: "men", price: 110.00, image: "img/Puma_RS-X_IMG.png" },
    { id: 7, name: "LeBron XX", category: "basket", gender: "women", price: 205.00, image: "img/Lebron_XX_IMG.png" },
    { id: 8, name: "Asics Gel-Kayano", category: "running", gender: "women", price: 145.00, image: "img/Asics_Gel_Kayano_IMG.png" },
    { id: 9, name: "Timberland 6-inch Premium", category: "boots", gender: "unisex", price: 220.00, image: "img/Timberland_6-inch_Premium_IMG.png" },
    { id: 10, name: "Timberland Courmayeur Valley", category: "boots", gender: "unisex", price: 180.00, image: "img/Timberland_Courmayeur_Valley_IMG.jpeg", objectPosition: "center 70%" }
];

// --- STATE ---
let cart = [];
let currentUser = null;
let filters = { category: 'all', gender: 'all', sort: 'default' };
let currentLang = 'en';

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    updateLanguageUI();
    renderProducts();
    updateCartUI();
    checkAuth();
    setupValidation();
    setupPaymentFormatting();
});

// --- LANGUAGE LOGIC ---
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'it' : 'en';
    updateLanguageUI();
    renderProducts();
    updateCartUI();
    checkAuth();
}

function updateLanguageUI() {
    document.getElementById('current-lang').innerText = currentLang.toUpperCase();
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
    document.querySelectorAll('[data-ph]').forEach(el => {
        const key = el.getAttribute('data-ph');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    // Update validation messages for inputs that are strictly required
    document.querySelectorAll('input[required]').forEach(input => {
        // Clear previous custom validity to reset
        input.setCustomValidity('');
    });
}

function t(key) {
    return translations[currentLang][key] || key;
}

function setupValidation() {
    document.querySelectorAll('input[required]').forEach(input => {
        input.addEventListener('invalid', function (e) {
            e.target.setCustomValidity(t('field_required'));
        });

        input.addEventListener('input', function (e) {
            e.target.setCustomValidity('');
        });
    });
}

function setupPaymentFormatting() {
    // Card Number Formatting (Space every 4 digits)
    const cardInput = document.getElementById('payment-card');
    if (cardInput) {
        cardInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
            let formattedValue = '';
            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) {
                    formattedValue += ' ';
                }
                formattedValue += value[i];
            }
            e.target.value = formattedValue.trim();
        });
    }

    // Date Formatting (Slash after 2 digits, MM/YY)
    const dateInput = document.getElementById('payment-date');
    if (dateInput) {
        dateInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
            if (value.length > 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
}

// --- PRODUCT LOGIC ---
function setCategory(cat) {
    filters.category = cat;
    updateFilterButtons('cat-btn', cat);
    renderProducts();
}

function setGender(gen) {
    filters.gender = gen;
    updateFilterButtons('gender-btn', gen);
    renderProducts();
}

function setSort(sortVal) {
    filters.sort = sortVal;
    renderProducts();
}

function resetFilters() {
    filters.category = 'all';
    filters.gender = 'all';
    filters.sort = 'default';

    // Reset buttons
    updateFilterButtons('cat-btn', 'all');
    updateFilterButtons('gender-btn', 'all');

    // Reset radio
    document.querySelector('input[name="sort"][value="default"]').checked = true;

    renderProducts();
}

function updateFilterButtons(btnClass, activeVal) {
    document.querySelectorAll('.' + btnClass).forEach(btn => {
        if (btn.dataset.val === activeVal) {
            btn.classList.remove('bg-white', 'text-gray-700', 'hover:bg-gray-50');
            btn.classList.add('bg-black', 'text-white', 'hover:bg-gray-800');
        } else {
            btn.classList.add('bg-white', 'text-gray-700', 'hover:bg-gray-50');
            btn.classList.remove('bg-black', 'text-white', 'active', 'hover:bg-gray-800');
        }
    });
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    const noResults = document.getElementById('no-results');
    grid.innerHTML = '';

    let filtered = products.filter(p => {
        const matchCat = filters.category === 'all' || p.category === filters.category;
        const matchGen = filters.gender === 'all' || p.gender === filters.gender;
        return matchCat && matchGen;
    });

    // Sorting Logic
    if (filters.sort === 'asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'desc') {
        filtered.sort((a, b) => b.price - a.price);
    }

    if (filtered.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        filtered.forEach(product => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-xl shadow-md overflow-hidden shoe-card flex flex-col h-full border border-gray-100 group';

            const genderLabel = t('gen_' + product.gender);
            const categoryLabel = t('cat_' + product.category);
            let genderBadgeColor;
            if (product.gender === 'men') {
                genderBadgeColor = 'bg-blue-100 text-blue-800';
            } else if (product.gender === 'women') {
                genderBadgeColor = 'bg-pink-100 text-pink-800';
            } else {
                genderBadgeColor = 'bg-purple-100 text-purple-800';
            }

            card.innerHTML = `
                <div class="h-56 overflow-hidden bg-gray-100 relative">
                    <div class="absolute top-3 left-3 flex gap-1 z-10">
                        <span class="px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest bg-black text-white">${categoryLabel}</span>
                    </div>
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover ${product.imgPos || 'object-center'} group-hover:scale-105 transition duration-700 ease-in-out" ${product.objectPosition ? `style="object-position: ${product.objectPosition}"` : ''}>
                    <div class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button onclick="addToCart(${product.id})" class="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="p-5 flex flex-col flex-1">
                    <div class="flex justify-between items-start mb-1">
                        <h3 class="text-lg font-bold text-gray-900 leading-tight">${product.name}</h3>
                        <span class="${genderBadgeColor} text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">${genderLabel}</span>
                    </div>
                    <p class="text-xs text-gray-500 mb-3 capitalize">${product.category} ${t('series')}</p>
                    <div class="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                        <span class="text-xl font-black text-gray-900">€${product.price.toFixed(2)}</span>
                        <button onclick="addToCart(${product.id})" class="md:hidden bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-xs">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }
}

function toggleFilters() {
    const modal = document.getElementById('filter-modal');
    const drawer = document.getElementById('filter-drawer');

    if (modal.classList.contains('hidden')) {
        // OPEN
        modal.classList.remove('hidden');
        // Small timeout to allow transition
        setTimeout(() => {
            drawer.classList.remove('-translate-x-full');
        }, 10);
    } else {
        // CLOSE
        drawer.classList.add('-translate-x-full');
        // Wait for transition to finish
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

// --- CART LOGIC ---
function addToCart(id) {
    if (!currentUser) {
        showToast(t('toast_login_req'), "red");
        toggleLoginModal();
        return;
    }

    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
    showToast(`${product.name} ${t('toast_added')}`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    const countHeaderEl = document.getElementById('cart-count-header');
    const itemsEl = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    countEl.innerText = cart.length;
    countHeaderEl.innerText = cart.length;

    let total = 0;
    itemsEl.innerHTML = '';

    if (cart.length === 0) {
        itemsEl.innerHTML = `
            <div class="text-center text-gray-400 mt-20 flex flex-col items-center">
                <div class="bg-gray-100 p-6 rounded-full mb-4">
                    <i class="fa-solid fa-basket-shopping text-4xl text-gray-300"></i>
                </div>
                <p class="font-medium">${t('cart_empty')}</p>
                <button onclick="toggleCart()" class="mt-4 text-indigo-600 font-bold text-sm hover:underline">Start Shopping</button>
            </div>`;
        checkoutBtn.disabled = true;
    } else {
        checkoutBtn.disabled = false;
        cart.forEach((item, index) => {
            total += item.price;
            const itemEl = document.createElement('div');
            itemEl.className = 'flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition border border-transparent hover:border-gray-100';
            itemEl.innerHTML = `
                <img src="${item.image}" class="w-20 h-20 object-cover rounded-lg bg-gray-200">
                <div class="flex-1 flex flex-col justify-center">
                    <h4 class="font-bold text-gray-900 text-sm leading-tight mb-1">${item.name}</h4>
                    <p class="text-xs text-gray-500 mb-2 capitalize">${item.category}</p>
                    <p class="text-black font-bold text-sm">€${item.price.toFixed(2)}</p>
                </div>
                <button onclick="removeFromCart(${index})" class="text-gray-300 hover:text-red-500 p-2 self-center transition">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            `;
            itemsEl.appendChild(itemEl);
        });
    }

    totalEl.innerText = `€${total.toFixed(2)}`;
    document.getElementById('checkout-total').innerText = `€${total.toFixed(2)}`;
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('hidden');
}

// --- AUTH LOGIC ---
function checkAuth() {
    const section = document.getElementById('auth-section');
    if (currentUser) {
        section.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="hidden md:flex flex-col items-end leading-none">
                    <span class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">${t('hi')}</span>
                    <span class="text-sm font-bold text-gray-900">${currentUser.name}</span>
                </div>
                <button onclick="logout()" title="${t('logout')}" class="w-10 h-10 bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-600 rounded-full flex items-center justify-center transition">
                    <i class="fa-solid fa-sign-out-alt"></i>
                </button>
            </div>
        `;
    } else {
        section.innerHTML = `
            <button onclick="toggleLoginModal()" class="bg-black text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition shadow-lg transform hover:-translate-y-0.5">
                ${t('nav_login')}
            </button>
        `;
    }
}

function toggleLoginModal() {
    document.getElementById('login-modal').classList.toggle('flex');
    document.getElementById('login-modal').classList.toggle('hidden');
}

function handleLogin(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const name = email.split('@')[0];
    currentUser = { email, name: name.charAt(0).toUpperCase() + name.slice(1) };

    toggleLoginModal();
    checkAuth();
    showToast(`${t('toast_welcome')}${currentUser.name}!`);
}

function logout() {
    currentUser = null;
    cart = [];
    updateCartUI();
    checkAuth();
    showToast(t('toast_logout'));
}

// --- CHECKOUT LOGIC ---
function openCheckout() {
    toggleCart();
    const modal = document.getElementById('checkout-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function processPayment(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...';
    btn.disabled = true;

    setTimeout(() => {
        cart = [];
        updateCartUI();
        closeCheckout();
        btn.innerHTML = originalText;
        btn.disabled = false;

        const successDiv = document.createElement('div');
        successDiv.className = 'fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center text-center p-4 animate-fade-in';
        successDiv.innerHTML = `
            <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-500 text-5xl shadow-xl animate-bounce">
                <i class="fa-solid fa-check"></i>
            </div>
            <h2 class="text-4xl font-black mb-3 text-gray-900 tracking-tight">${t('toast_success')}</h2>
            <p class="text-gray-500 mb-8 text-lg">${t('toast_thanks')}${currentUser.name}.</p>
            <button onclick="this.parentElement.remove()" class="bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition shadow-2xl">${t('back_shop')}</button>
        `;
        document.body.appendChild(successDiv);

        e.target.reset();
    }, 2000);
}

// --- UTILS ---
function showToast(message, color = 'green') {
    const toast = document.getElementById('toast');
    const msgEl = document.getElementById('toast-message');
    const titleEl = document.getElementById('toast-title');
    const iconContainer = document.getElementById('toast-icon-container');
    const icon = iconContainer.querySelector('i');

    msgEl.innerText = message;

    if (color === 'red') {
        iconContainer.className = 'w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400';
        icon.className = 'fa-solid fa-exclamation';
        titleEl.innerText = t('toast_title_error');
    } else {
        iconContainer.className = 'w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400';
        icon.className = 'fa-solid fa-check';
        titleEl.innerText = t('toast_title_success');
    }

    toast.classList.remove('translate-x-[calc(100%_+_2rem)]');

    setTimeout(() => {
        toast.classList.add('translate-x-[calc(100%_+_2rem)]');
    }, 3000);
}
