const view = (products) => `
<main id="main">
    <div class="container">
    	<div class="products-section">
	    	<div class="row">
	    		<div class="order-title text-center col-12">
    				Наши хиты
    			</div>
    			${products.filter(product => product.id <= 4).map(product => `
		    		<div class="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
		    			<div class="bs-component">
		    				<a href="#product/${product.url}">
			    				<div class="card mb-3">
									<div class="product-image mb-1 mt-1">
								  		<img src=${product.image} alt=${product.productName}>
									</div>
									<div class="card-body">
								    <h5 class="card-title">${product.productName}</h5>
								    <h6 class="card-subtitle text-muted">${product.productDescription}</h6>
								    <div class="price-buy col-12 mt-3"> 
						          		<span class="product-price">${product.price}</span>
						          		<span class="product-currency">грн</span>
						          	</div>
								  </div>
								</div>
							</a>
		    			</div>
		    		</div>
		    	`).join("\n")}
		    </div>
	    </div>
    </div>
</main>
`;
export default view;
