let conversation = (function() {
    function addMessage(message) {
        let tpl = document.querySelector('[data-conversation-' + message.type + ']').content.cloneNode(true);
        val.set(tpl, message);
        document.querySelector('[data-conversation-list]').appendChild(tpl);
        document.querySelector('[data-conversation-list]').scrollTop = document.querySelector('[data-conversation-list]').scrollHeight;
    }
    function clear() {
        document.querySelector('[data-conversation-list]').innerHTML = '';
    }
    function addMessages(messages) {
        messages.forEach(addMessage);
    }
    return {
        addMessage,
        clear,
        addMessages,
    }
})();