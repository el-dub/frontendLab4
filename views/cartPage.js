import {getProductsInCart} from "./cart.js";
const productsInCart = getProductsInCart(products);
const view = (products) => ((!productsInCart) ? `<main id="main">
				<div class="container">
			    	<div class="form-section">
			    		<div class="row">
			    			<div class="order-title">
			    				Корзина пуста
			    			</div>
			    		</div>
				    </div>
			    </div>       	
			</main>` :
			`
			<main id="main">
		    <div class="container">
		    		<div class="form-section">
		    			<div class="row">
		    				<div class="order-title">
		    					Корзина
		    				</div>

		    			</div>
			    		<div class="row">
				    		<div class="col-12">
				    			<div class="cart-page">
				    			${productsInCart.map(product => `
				    				<div class="row cart-product-row">
				    					<div id="remove_bt_${product.id}" class="removeBt"><img src=${product.image}></div>
				    					<div class="row product-info-row col-11">
				    						<div class="col-6">
				    							<div>${product.productName}</div>
				    						</div>
				    						<div class="col-2">
				    							<div>
				    								<span>${product.quantity}</span><span> шт</span>
				    							</div>
				    						</div>
				    						<div class="col-4 cart-page-price">
				    							<div>
				    								<span>${product.price}</span><span> грн</span>
				    							</div>
				    						</div>
				    					</div>
				    				</div>
				    			`).join("\n")}
								</div>
				    		</div>
				    	</div>
				    	<div class="row mt-3">
		    				<div class="order-title">
		    					<span>Всего: </span><span>${() => {
		    						let sum = 0;
		    						productsInCart.forEach((product) => sum+=(product.quantity*product.price));
		    						return sum;
		    					}}</span><span> грн</span>
		    				</div>
		    			</div>
		    			<div class="row price-buy-row justify-content-center">
							<div class="bs-component col-12 col-sm-6 col-md-3">
							    <button type="submit" class="btn btn-danger">Оформить</button>
							</div>
						</div>
			    	</div>
		    	</div>       	
		</main>
		`);


export default view;