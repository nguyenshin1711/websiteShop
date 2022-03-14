document.querySelectorAll('.product-img-item').forEach( e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src');
        document.querySelector('#product-img > img').setAttribute('src', img);
    })
});


document.querySelector('#view-all-description').addEventListener('click', () => {
    let content = document.querySelector('.product-detail-description-content');
    content.classList.toggle('active');
    document.querySelector('#view-all-description').innerHTML = content.classList.contains('active') ? 'view less' : 'view all';
});


let products = [

    {
        name: "Women's T-shirt",
        image1: 'https://i.pinimg.com/564x/0b/67/d7/0b67d7064c8f05bc8b932c6f51656f9d.jpg',
        image2: 'https://i.pinimg.com/564x/9f/ef/e1/9fefe1c91869365e86ab1cf89b910204.jpg',
        old_price: '$300',
        curr_price: '$200'
    },
    {
        name: 'Beach T-shirt',
        image1: 'https://i.pinimg.com/564x/57/2a/bd/572abd9975215e2f61df15a98ed460d4.jpg',
        image2: 'https://i.pinimg.com/564x/58/d9/7c/58d97c2b345a781957a969301636188a.jpg',
        old_price: '$400',
        curr_price: '$250'
    },
    {
        name: 'Apliques ',
        image1: 'https://i.pinimg.com/236x/15/39/76/153976670e905ae6edce65bca20fff6d.jpg',
        image2: 'https://i.pinimg.com/564x/f8/ec/21/f8ec21de8ebaf51c902d0cd46be5da7e.jpg',
        old_price: '$400',
        curr_price: '$220'
    },
    {
        name: 'Norwood-Crocker',
        image1: 'https://i.pinimg.com/564x/cd/f3/17/cdf31757df149b72ea47d4a970684494.jpg',
        image2: 'https://i.pinimg.com/564x/4a/f4/30/4af430f0509ae25b495c8512a15ad416.jpg',
        old_price: '$400',
        curr_price: '$520'
    },
    {
        name: 'Nancy Sarmiento',
        image1: 'https://i.pinimg.com/564x/66/88/e5/6688e5407155accb2f24db313c1db16f.jpg',
        image2: 'https://i.pinimg.com/564x/0b/a9/db/0ba9db003ca9268ca178ff2d23727ef8.jpg',
        old_price: '$400',
        curr_price: '$330'
    },
    {
        name: 'Swallow Shirt',
        image1: 'https://i.pinimg.com/564x/b5/62/43/b562434e70b103c290d74914007f3ffe.jpg',
        image2: 'https://i.pinimg.com/564x/91/4d/ec/914decb50ba6483bbb0102d5d7086636.jpg',
        old_price: '$400',
        curr_price: '$310'
    },
    
    
    
   

   
]



let product_list = document.querySelector('#related-products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="product-card product-detail">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>

        `

        product_list.insertAdjacentHTML('beforeend', prod);
    
        
        
    })
}

renderProducts(products)