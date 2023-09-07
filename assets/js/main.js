const routes = {
    '/': {
        title: 'Anasayfa',
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

async function handleRoute() {
    let url = location.hash.substring(1);
    if (url.length < 1) {
        url = '/';
    }

    const route = routes[url];
    if (route && route.callback) {
        clearContent();
        document.title = route.title;
        route.callback();
    } else {
        'Sayfa bulunamadı'
    }
}

addEventListener('hashchange', handleRoute);

function clearContent() {
    const productContainer = document.querySelector('.productContainer');
    productContainer.innerHTML = '';
}

async function loadHomePage() {
    const allProducts = await fetchData();
    displayProducts(allProducts);
}

async function loadManProducts() {
    const allProducts = await fetchData();
    const manProducts = allProducts.filter(product => product.gender === 'Erkek');
    displayProducts(manProducts);
}

async function loadWomanProducts() {
    const allProducts = await fetchData();
    const womanProducts = allProducts.filter(product => product.gender === 'Kadın');
    displayProducts(womanProducts);
}

async function loadBagProducts() {
    const allProducts = await fetchData();
    const bagProducts = allProducts.filter(product => product.type === 'Çanta');
    displayProducts(bagProducts)
}

async function fetchData() {
    return await fetch('https://rceavizwdfumfwcligdo.supabase.co/rest/v1/product', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZWF2aXp3ZGZ1bWZ3Y2xpZ2RvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mzc2NzE4OSwiZXhwIjoyMDA5MzQzMTg5fQ.HKb5hnAuE0GgkjsISYWYmRDpi4XeqV9aPU3T6ihqI_c',
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZWF2aXp3ZGZ1bWZ3Y2xpZ2RvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mzc2NzE4OSwiZXhwIjoyMDA5MzQzMTg5fQ.HKb5hnAuE0GgkjsISYWYmRDpi4XeqV9aPU3T6ihqI_c'
        }
    }).then(x => x.json());
}

function displayProducts(products) {
    const productContainer = document.querySelector('.productContainer');
    products.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
}

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('card');
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}"/>
        <h2>${product.name}</h2>
        <p>Fiyat: ${product.price}</p>
        <button>Sepete Ekle</button>
    `;

    return productCard;
}

loadHomePage();






































