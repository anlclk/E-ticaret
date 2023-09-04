async function fetchProducts() {
    const fetchProduct = await fetch ('https://rceavizwdfumfwcligdo.supabase.co/rest/v1/product', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZWF2aXp3ZGZ1bWZ3Y2xpZ2RvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mzc2NzE4OSwiZXhwIjoyMDA5MzQzMTg5fQ.HKb5hnAuE0GgkjsISYWYmRDpi4XeqV9aPU3T6ihqI_c",
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZWF2aXp3ZGZ1bWZ3Y2xpZ2RvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mzc2NzE4OSwiZXhwIjoyMDA5MzQzMTg5fQ.HKb5hnAuE0GgkjsISYWYmRDpi4XeqV9aPU3T6ihqI_c'
        }
    }
    ).then(x => x.json());
    console.log(fetchProduct);
    displayProducts(fetchProduct)
    

}

function displayProducts(fetchProduct) {
    const productContainer = document.querySelector('.productContainer');

    fetchProduct.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('card');
        productCard.innerHTML += `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Stok: ${product.stock}</p>
            <p>Fiyat: ${product.price}</p>
            <p>Cinsiyet: ${product.gender}</p>
            <p>Tür: ${product.type}</p>
            <img src="${product.image}" alt="${product.name}" />
            `;
            
            productContainer.appendChild(productCard);
        });
    }
    
    window.addEventListener('load', () => {
        fetchProducts();
    });
    // fetch(
    //     'https://rceavizwdfumfwcligdo.supabase.co/rest/v1/product'
    //     , {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZWF2aXp3ZGZ1bWZ3Y2xpZ2RvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mzc2NzE4OSwiZXhwIjoyMDA5MzQzMTg5fQ.HKb5hnAuE0GgkjsISYWYmRDpi4XeqV9aPU3T6ihqI_c",
    //             'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZWF2aXp3ZGZ1bWZ3Y2xpZ2RvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mzc2NzE4OSwiZXhwIjoyMDA5MzQzMTg5fQ.HKb5hnAuE0GgkjsISYWYmRDpi4XeqV9aPU3T6ihqI_c'
    //         }
    //     }).then(x => x.json())
    //     .then(data => { let products = data; console.log(products) });


























// const servicePrefix = 'https://rceavizwdfumfwcligdo.supabase.co/rest/v1/product';
// const apikey = 



    




