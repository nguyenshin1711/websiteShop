let products = [

    {
        name: "Women's T-shirt",
        image1: 'https://i.pinimg.com/236x/03/5d/af/035daf3eadeb0e359bb3adb478c14eca.jpg',
        image2: 'https://i.pinimg.com/564x/9f/ef/e1/9fefe1c91869365e86ab1cf89b910204.jpg',
        old_price: '$300',
        curr_price: '$200'
    },
    {
        name: 'Beach T-shirt',
        image1: 'https://i.pinimg.com/236x/83/27/a7/8327a7b8eaef889de485d8f10df1944c.jpg',
        image2: 'https://i.pinimg.com/564x/58/d9/7c/58d97c2b345a781957a969301636188a.jpg',
        old_price: '$400',
        curr_price: '$250'
    },
    {
        name: 'Apliques Sleeve ',
        image1: 'https://i.pinimg.com/236x/da/aa/ed/daaaed53f01efa6b94539c2017b8c335.jpg',
        image2: 'https://i.pinimg.com/236x/a7/d3/f7/a7d3f7d39b75e72b21fd640c967b6268.jpg',
        old_price: '$400',
        curr_price: '$220'
    },
    {
        name: 'Norwood-Crocker',
        image1: 'https://i.pinimg.com/564x/3d/c4/b2/3dc4b21c443eba2473afa75437c1b0d6.jpg',
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
        image1: 'https://i.pinimg.com/564x/3d/f1/b2/3df1b29e315c3e8ab34359522939ebf9.jpg',
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