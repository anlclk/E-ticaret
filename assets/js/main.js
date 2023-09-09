const routes = {
    '/': {
        title: 'Tüm Ürünler',
        callback: loadHomePage
    },
    '/erkek': {
        title: 'Erkek',
        callback: loadManProducts
    },
    '/kadin': {
        title: 'Kadın',
        callback: loadWomanProducts
    },
    '/canta': {
        title: 'Çanta',
        callback: loadBagProducts
    },
    '/404': {
        title: 'Sayfa bulunamadı'
    }
};

// sayfalar arası geçiş yapıldığında moda ismi başta kalması için
const pageTitlePrefix = 'Moda | ';

async function handleRoute() {
    let url = location.hash.substring(1); //location adresini locastion hash ile bulup substring ile ilk kısmı sildik yani '#'
    document.title = pageTitlePrefix + routes[url].title; // sayfa değiştiğin sayfanın başındaki kısmı dursun, routes kısmında url ne olursa onun başlığını alsın
    if (url.length < 1) { // burada küçük olduğunda '/' bu olur demektir.
        url = '/';
    }
    
    const route = routes[url]; 
    if (route && route.callback) {
        clearContent(); //sayfa içeriğini temizlemek için
        route.callback();
    } else {
        'Sayfa bulunamadı'
    }
}

addEventListener('hashchange', handleRoute);

function clearContent() {
    const productContainer = document.querySelector('.productContainer'); //sayfa değiştiğinde sayfa içeriği temizledim
    productContainer.innerHTML = '';
}

async function loadHomePage() {
    const allProducts = await fetchData(); //anasayfa tüm ürünleri göstermek için
    displayProducts(allProducts);
}

async function loadManProducts() {
    const allProducts = await fetchData();
    const manProducts = allProducts.filter(product => product.gender === 'Erkek'); //erkek sekmesine geçtiğimde tüm ürünlerde cinsiyeti erkek olanları çekmek için kullandım
    displayProducts(manProducts);
}

async function loadWomanProducts() {
    const allProducts = await fetchData();
    const womanProducts = allProducts.filter(product => product.gender === 'Kadın'); //kadın sekmesine geçtiğimde tüm ürünlerde cinsiyeti kadın olanları çekmek için kullandım
    displayProducts(womanProducts);
}

async function loadBagProducts() {
    const allProducts = await fetchData();
    const bagProducts = allProducts.filter(product => product.type === 'Çanta'); //çanta ürünlerini ürünün tipi ile ilgili kısımdan bulup çanta sekmesine geçtiğimde bu callbak'i çağırdım.
    displayProducts(bagProducts)
}
//her sekmede data çekmek için kısayol kullandım
async function fetchData() {
    return await fetch('https://rceavizwdfumfwcligdo.supabase.co/rest/v1/product', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZWF2aXp3ZGZ1bWZ3Y2xpZ2RvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mzc2NzE4OSwiZXhwIjoyMDA5MzQzMTg5fQ.HKb5hnAuE0GgkjsISYWYmRDpi4XeqV9aPU3T6ihqI_c',
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZWF2aXp3ZGZ1bWZ3Y2xpZ2RvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mzc2NzE4OSwiZXhwIjoyMDA5MzQzMTg5fQ.HKb5hnAuE0GgkjsISYWYmRDpi4XeqV9aPU3T6ihqI_c'
        }
    }).then(x => x.json());
}
//ürünlerin gösterileceği etiketi yakalayıp crateproducktcard ile containera ekledim.
function displayProducts(products) {
    const productContainer = document.querySelector('.productContainer');
    products.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
}
//productcontainerin içine eklenecek olan cardların içeriğini ve datadan gerekli bilgileri html etiketlerine yazdırdım
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('card');
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}"/>
        <h4>${product.name}</h4>
        <h5>${product.description}</h5>
        <div class="cardDetails">
            <p>${product.price} TL</p>
            <button class="basketBtn">Sepete Ekle</button>
        </div>
    `;

    return productCard;
}

//sayfa açıldığında anasayfayı yüklemesini, çalıştırmasını istedim
loadHomePage();







































