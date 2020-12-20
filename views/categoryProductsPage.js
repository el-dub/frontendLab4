const view = (products, categoryId) => `
<main id="main">
    <div class="container">
    		<div class="products-section">
	    		<div class="row">
	    		${products.filter(product => product.categoryId === categoryId).map(product => `
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
								  </div>
								  <div class="bs-component">
						              <div class="btn-group btn-group-toggle" data-toggle="buttons">
						                <label class="btn btn-primary active">
						                  <input type="radio" name="options" id="option1" autocomplete="off" checked=""> Маленькая
						                </label>
						                <label class="btn btn-primary">
						                  <input type="radio" name="options" id="option2" autocomplete="off"> Средняя
						                </label>
						                <label class="btn btn-primary">
						                  <input type="radio" name="options" id="option3" autocomplete="off"> Большая
						                </label>
						              </div>
						          </div>
						          <div class="row price-buy-row card-body">
						          	<div class="price-buy col-6"> 
						          		<span class="product-price">${product.price}</span>
						          		<span class="product-currency">грн</span>
						          	</div>
						          	<div class="bs-component col-6">
							          	<button type="button" class="btn btn-primary">В корзину</button>
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
