class Client {
    getData(endpoint) {
        return fetch(`https://my-json-server.typicode.com/el-dub/frontendLab4/${endpoint}`)
            .then(response => response.json());
    }
    postOrder(endpoint, data){
    	return fetch(`https://my-json-server.typicode.com/el-dub/frontendLab4/${endpoint}`, {
		        method: 'POST',
		        headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
		        body: JSON.stringify(data),
		    }).then(response => {
		        if (!response.ok) {
		            throw new Error(response.statusText);
		        }
		        return response.json();
		    });
    }
}

export default Client;
