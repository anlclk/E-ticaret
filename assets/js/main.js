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
    displayProducts(fetchProduct);
    // filteredProducts(fetchProduct);
}

function displayProducts(fetchProduct) {
    const productContainer = document.querySelector('.productContainer');

    fetchProduct.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('card');
        productCard.innerHTML += `
            <img src="${product.image}" alt="${product.name}"/>
            <h2>${product.name}</h2>
            <p>Fiyat: ${product.price}</p>
            <button>Sepete Ekle</button>
            `;
            
            productContainer.appendChild(productCard);
        });
    }
    

    //  Filtreleme
// function filteredProducts (fetchProduct) {
//     const erkekcontainer = document.querySelector('.erkekcontainer');

//     fetchProduct.forEach(product => {
//         if(product.gender === 'Erkek') {
//             const productCard = document.createElement('div');
//             productCard.classList.add('card');
//             productCard.innerHTML += `
//             <h2>${product.gender}</h2>
//             `;
//             erkekcontainer.appendChild(productCard);
//         }
//     })
// }




    window.addEventListener('load', () => {
        fetchProducts();
    });


    // <p>Cinsiyet: ${product.gender}</p>
    // <p>Stok: ${product.stock}</p>
    // <p>Tür: ${product.type}</p>
    // <p>${product.description}</p>

    // supabase' de card'da görünecek kısa detay ekle
    // descriptionu uzun detay ürüne tıkladığında görünsün











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



    




