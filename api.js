let api = (function(){
    function query(data) {
        const response = fetch(config.uri + '/chat/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': config.key,
            },
            body: JSON.stringify(data),
        })
        return response.json();
    }
    return {
        query,
    }
})();
