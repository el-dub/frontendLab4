class Client {
    getData(endpoint) {
        return fetch(`http://my-json-server.typicode.com/el-dub/frontendLab4/${endpoint}`)
            .then(response => response.json());
    }
}

export default Client;
