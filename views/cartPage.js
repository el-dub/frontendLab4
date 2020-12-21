const view = () => `
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
		    				<div class="row cart-product-row">
		    					<div class="removeBt"><img src="https://img.icons8.com/material/24/000000/delete-sign--v1.png"></div>
		    					<div class="row product-info-row col-11">
		    						<div class="col-6">
		    							<div>Название</div>
		    						</div>
		    						<div class="col-2">
		    							<div>
		    								<span>Кол-во</span><span> шт</span>
		    							</div>
		    						</div>
		    						<div class="col-4 cart-page-price">
		    							<div>
		    								<span>Цена</span><span> грн</span>
		    							</div>
		    						</div>
		    					</div>
		    				</div>
		    				<div class="row cart-product-row">
		    					<div class="removeBt"><img src="https://img.icons8.com/material/24/000000/delete-sign--v1.png"></div>
		    					<div class="row product-info-row col-11">
		    						<div class="col-6">
		    							<div>Название</div>
		    						</div>
		    						<div class="col-2">
		    							<div>
		    								<span>Кол-во</span><span> шт</span>
		    							</div>
		    						</div>
		    						<div class="col-4 cart-page-price">
		    							<div>
		    								<span>Цена</span><span> грн</span>
		    							</div>
		    						</div>
		    					</div>
		    				</div>
						</div>
		    		</div>
		    	</div>
		    	<div class="row mt-3">
    				<div class="order-title">
    					<span>Всего: </span><span>100</span><span> грн</span>
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
`;



export default view;