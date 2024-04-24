let app = (function() {
    function init() {
        conversation.addMessages(storage.getMessages());
    }
    function minimize() {
        window.parent.postMessage({ action: 'chatbot.close' }, '*')
    }
    function ask(question) {
        loading.on();
        message(question, 'question');
        api
            .query({session: storage.getSession(), question})
            .then(function(r) {
                r = r.json();
                message(r.message, 'answer');
                storage.setSession(r.session);
                loading.off();
            })
        ;
    }
    function message(message, type) {
        let msg = {message, type, time: time.now()};
        storage.addMessage(msg);
        conversation.add(msg);
    }
    return {
        init,
        minimize,
        ask,
    }
})();