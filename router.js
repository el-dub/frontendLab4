class Router {
    getCurrentState() {
        let viewName = '';
        let endpointName = '';
        let filterId = '';
        let filterName = '';
        if(window.location.hash.split('#').length>1){
            let hash = window.location.hash.split('#')[1];
            if(window.location.hash.split('/').length>1){
                switch (hash.split('/')[0]) {
                    case 'catalog':
                        viewName = 'categoryProductsPage';
                        endpointName = 'products';
                        switch(hash.split('/')[1]){
                            case 'pizza':
                                filterId = '1';
                                filterName = 'Пицца';
                                break;
                            case 'drinks':
                                filterId = '2';
                                filterName = 'Напитки';
                                break;
                            case 'desserts':
                                filterId = '3';
                                filterName = 'Дессерты';
                                break;
                            default:
                                viewName = 'catalogPage';
                        }
                        break;
                    case 'product':
                        viewName = 'productPage';
                        endpointName = 'products';
                        filterId = hash.split('/')[1];
                        break;
                    case 'action':
                        viewName = 'actionPage';
                        endpointName = 'actions';
                        filterId = hash.split('/')[1];
                        break;
                    case 'order':
                        break;
                    default:
                        viewName = 'catalogPage';
                        endpointName = 'products';
                        break;
                }
            }
            else{
                switch (hash) {
                    case 'catalog':
                        viewName = 'catalogPage';
                        endpointName = 'products';
                        break;
                    case 'order':
                        if(document.getElementById('cart_products_quantity').innerHTML==='0'){
                            viewName = 'catalogPage';
                            endpointName = 'products';
                        }
                        else{
                            viewName = 'orderPage';
                            endpointName = 'products';
                        }
                        break;
                    case 'cart':
                        viewName = 'cartPage';
                        endpointName = 'products';
                        break;
                    default:
                        viewName = 'mainPage';
                        break;
                }
            }
        }
        else{
            viewName = 'mainPage';
            endpointName = 'products';
        }
        return {
            viewName,
            endpointName,
            filterId,
            filterName
        };
    }
}

export default Router;
