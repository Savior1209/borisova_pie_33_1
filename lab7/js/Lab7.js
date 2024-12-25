fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
    const productsContainer = document.getElementById('products');
    const detailsContainer = document.getElementById('details-content');
    const productDetailsContainer = document.getElementById('product-details');

    const beautyProducts = [];
    const fragrancesProducts = [];
    const furnitureProducts = [];
    const groceriesProducts = [];

    const allProducts = data.products.map(function(product) {
        const id = product.id;
        const thumbnail = product.thumbnail;
        const title = product.title;
        const category = product.category;
        const price = product.price;


        switch (category) {
            case 'beauty':
                beautyProducts.push(product);
                break;
            case 'fragrances':
                fragrancesProducts.push(product);
                break;
            case 'furniture':
                furnitureProducts.push(product);
                break;
            case 'groceries':
                groceriesProducts.push(product);
                break;
        }

        return { id, thumbnail, title, category, price };
    });

    function displayProducts(products) {
        productsContainer.innerHTML = '';    
        products.forEach(function(product) {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
    
            const imgElement = document.createElement('img');
            imgElement.src = product.thumbnail;
            imgElement.alt = product.title;
            imgElement.style.width = '175px';
    
            const titleElement = document.createElement('h2');
            titleElement.textContent = product.title;
    
            const categoryElement = document.createElement('h6');
            categoryElement.textContent = 'Категория: ' + product.category;
    
            const priceElement = document.createElement('p');
            priceElement.textContent = 'Цена: $' + product.price;
            const infoButton = document.createElement('button');
            infoButton.textContent = 'Подробнее';
            infoButton.onclick = function() {
                fetch(`https://dummyjson.com/products/${product.id}`)
                    .then(function(res) {
                        return res.json();
                    })
                    .then(function(productDetails) {
                        displayProductDetails(productDetails);
                    });
            };
            productDiv.appendChild(imgElement);
            productDiv.appendChild(titleElement);
            productDiv.appendChild(categoryElement);
            productDiv.appendChild(priceElement);
            productDiv.appendChild(infoButton); 
            productsContainer.appendChild(productDiv);
        });
    }
        function displayProductDetails(product) {
            detailsContainer.innerHTML = '';
     
        const infoElements = [
            `ID: ${product.id}`,
            `Название: ${product.title}`,
            `Категория: ${product.category}`,
            `Цена: kor von ${product.price}`,
            `Бренд: ${product.brand}`
        ];
        infoElements.forEach(function(info) {
            const infoElement = document.createElement('p');
            infoElement.textContent = info;
            detailsContainer.appendChild(infoElement);
        });
        document.getElementById('products').style.display = 'none';
        productDetailsContainer.style.display = 'block';
        }
    document.getElementById('hide-details-button').onclick = function() {
        productDetailsContainer.style.display = 'none';
        productsContainer.style.display = 'grid'; 

    };
    window.showAll = function() {
        displayProducts(allProducts);
    };
    window.showCategory = function(category) {
        let selectedProducts;
        switch(category) {
            case 'beauty':
                selectedProducts = beautyProducts;
                break;
            case 'fragrances':
                selectedProducts = fragrancesProducts;
                break;
            case 'furniture':
                selectedProducts = furnitureProducts;
                break;
            case 'groceries':
                selectedProducts = groceriesProducts;
                break;
        }
        displayProducts(selectedProducts);
    };

    displayProducts(allProducts);
});
