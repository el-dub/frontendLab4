class Router {
    getCurrentState() {
        let viewName = '';
        let endpointName = '';
        let filterName = '';
        let hash = window.location.hash.split('#')[1];
        if(hash.split('/')[1]){
            switch (hash.split('/')[0]) {
                case 'catalog':
                    viewName = 'categoryProductsPage';
                    endpointName = 'products';
                    switch(hash.split('/')[1]){
                        case 'pizza':
                            filterName = 'Пицца';
                            break;
                        case 'drinks':
                            filterName = 'Напитки';
                            break;
                        case 'desserts':
                            filterName = 'Дессерты';
                            break;
                        default:
                            viewName = 'catalogPage';
                    }
                    break;
                case 'product':
                    viewName = 'productPage';
                    endpointName = 'products';
                    filterName = hash.split('/')[1];
                    break;
                case 'action':
                    viewName = 'actionPage';
                    endpointName = 'actions';
                    filterName = hash.split('/')[1];
                    break;
                default:
                    viewName = 'mainPage';
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
                    viewName = 'orderPage';
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

        

        return {
            viewName,
            endpointName,
            filterName
        };
    }
}

export default Router;
