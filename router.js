class Router {
    getCurrentState() {
        let viewName = '';
        let endpointName = '';
        switch (window.location.hash.split('#')[1]) {
            case 'catalog':
                viewName = 'productsPage';
                endpointName = 'products';
                break;
            case 'order':
                viewName = 'orderPage';
                endpointName = 'products';
                break;
            default:
                break;
        }

        return {
            viewName,
            endpointName
        };
    }
}

export default Router;
