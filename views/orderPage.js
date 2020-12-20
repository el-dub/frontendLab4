const view = () => `
<main id="main">
    <div class="container">
    		<div class="form-section">
	    		<div class="row">
		    		<div class="col-12">
		    			<div class="bs-component">
		    				<form>
		    					<fieldset>
				                  <div class="form-group">
				                    <label for="exampleInputEmail1">Контакты</label>
				                    <div class="row">
				                    	<div class="input col-4">
				                    		<input type="text" class="form-control" id="inputName" placeholder="Имя">
				                    	</div>
				                    	<div class="input col-4">
				                    		<input type="tel" class="form-control" id="inputPhone" placeholder="Телефон">
				                    	</div>
				                    	<div class="input col-4">
				                    		<input type="email" class="form-control" id="inputEmail" placeholder="Email">
				                    	</div>
				                    		
				                    </div>
				                  </div>
				                  <div class="form-group">
				                    <label for="exampleInputEmail1">Адрес</label>
				                    <div class="row">
				                    	<div class="input col-8">
				                    		<select class="form-control" id="inputCity">
						                      <option>Киев</option>
						                      <option>Бровары</option>
						                      <option>Вишневое</option>
						                      <option>Ирпень</option>
						                      <option>Львов</option>
						                      <option>Одеса</option>
						                    </select>
				                    	</div>		
				                    	<div class="input col-4">
				                    		<input type="text" class="form-control" id="inputStreet" placeholder="Улица">
				                    	</div>
				                    			                    		
				                    </div>
				                    <div class="row">
				                    	<div class="input col-4">
				                    		<input type="text" class="form-control" id="inputHouse" placeholder="Дом">
				                    	</div>
				                    	<div class="input col-4">
				                    		<input type="text" class="form-control" id="inputFlat" placeholder="Квартира">
				                    	</div>
				                    	<div class="input col-4">
				                    		<input type="text" class="form-control" id="inputEntrance" placeholder="Подъезд">
				                    	</div>
				                    		
				                    </div>
				                    <div class="row">
				                    	<div class="input col-4">
				                    		<input type="text" class="form-control" id="inputCode" placeholder="Код">
				                    	</div>
				                    	<div class="input col-4">
				                    		<input type="number" class="form-control" id="inputFloor" placeholder="Этаж">
				                    	</div>
				                    </div>
				                  </div>
				                  <div class="row price-buy-row justify-content-center mb-3">
					                	<div class="price-buy col-6 text-center"> 
							          		<span class="product-price">170.99</span>
							          		<span class="product-currency">грн</span>
							          	</div>
					              </div>
					              <div class="row price-buy-row justify-content-center">
					              	<div class="bs-component col-3">
					              		<button type="submit" class="btn btn-danger">Заказать</button>
					              	</div>
					              </div>
				                  
				                </fieldset>
		    				</form>
						</div>
		    		</div>
		    	</div>
	    	</div>
    	</div>      	
</main>
`;



export default view;