const view = (order) => `
<main id="main">
    <div class="container">
    		<div class="form-section">
	    		<div class="row">
		    		<div class="order-title">
		    			Заказ № ${order.id}
					</div>
					<div class="row">
						<div col-12>
							<div class="cart-page">
								<p>Имя: ${order.name}</p>
								<p>Телефон: ${order.phone}</p>
								<p>Email: ${order.email}</p>
								<p>Адрес: ${order.city}, ${order.street}, ${order.house}, ${order.flat}, ${order.entrance}</p>
								<p>Дата и время доставки: ${order.date} ${order.time}</p>
								<p>К оплате: ${order.cost} грн</p>
							</div>
						</div>
					</div>
		   		</div>
	    	</div>
    	</div>      	
</main>
`;

export default view;
