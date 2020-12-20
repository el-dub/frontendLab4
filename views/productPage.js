const view = (products, productUrl) => `
<main id="main">
	${products.filter(product => product.url === productUrl).map((product => `
		<div class="container">
    		<div class="row product-row">
    			<div class="col-md-6 col-12">
    				<div class="product-page-image product-image mb-1 mt-1">
						<img src=${product.image} alt=${product.productName}>
					</div>
    			</div>
    			<div class="col-md-6 col-12 product-info">
    				<div>
    					<h1 class="product-name mt-2">
    						${product.productName}
    					</h1>
    				</div>
    				<div class="mb-2">
    					<span class="product-weight-title">Вес: </span>
    					<span>${product.weight}</span>
    					<span>г</span>
    				</div>
    				<div class="mb-2">
    					${product.productDescription}
    				</div>
    				<div class="col-6"> 
					    <span class=${product.price}>193.99</span>
					    <span class="product-currency">грн</span>
					</div>
					<div class="dp-product-block__quantity col-sm-4 col-9 col-md-6 mt-2">
						<button type="button" class="dp-product-block__quantity-control">
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 491.858 491.858">
								<path d="M465.167,211.613H240.21H26.69c-8.424,0-26.69,11.439-26.69,34.316s18.267,34.316,26.69,34.316h213.52h224.959 c8.421,0,26.689-11.439,26.689-34.316S473.59,211.613,465.167,211.613z">
								</path>
							</svg>
						</button>
						<p class="dp-product-block__quantity-count">02</p>
						<button type="button" class="dp-product-block__quantity-control">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path d="m23,10h-8.5c-0.3,0-0.5-0.2-0.5-0.5v-8.5c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1v8.5c0,0.3-0.2,0.5-0.5,0.5h-8.5c-0.6,0-1,0.4-1,1v2c0,0.6 0.4,1 1,1h8.5c0.3,0 0.5,0.2 0.5,0.5v8.5c0,0.6 0.4,1 1,1h2c0.6,0 1-0.4 1-1v-8.5c0-0.3 0.2-0.5 0.5-0.5h8.5c0.6,0 1-0.4 1-1v-2c0-0.6-0.4-1-1-1z">
								</path>
							</svg>
						</button>
					</div>
					<div class="bt-row col-sm-4 col-9 col-md-6 align-items-center mt-2">
						<button type="button" class="btn btn-danger">В корзину</button>
					</div>
    			</div>
    		</div>
    	</div>
    `)).join("\n")}

</main>
`;



export default view;
