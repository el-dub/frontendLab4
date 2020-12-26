const view = (actions, actionUrl) => `
<main id="main">
	${actions.filter(action => action.url === actionUrl).map((action => `
		<div class="container">
    		<div class="row product-row">
    			<div class="col-md-6 col-12">
    				<div class="product-page-image product-image mb-1 mt-1">
						<img src=${action.image} alt=${action.name}>
					</div>
    			</div>
    			<div class="col-md-6 col-12 product-info">
    				<div>
    					<h1 class="product-name mt-2">
    						${action.name}
    					</h1>
    				</div>
    				<div class="mb-2">
    					<span>${action.date}</span>
    				</div>
    				<div class="mb-2">
    					${action.description}
    				</div>
    			</div>
    		</div>
    	</div>
    `)).join("\n")}
</main>
`;



export default view;
