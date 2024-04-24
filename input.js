let input = (function() {
    function submit() {
        let value = document.querySelector('[data-input]').value.value;
        document.querySelector('[data-input]').value.value = '';
        app.ask(value);
    }
    return {
        submit,
    }
})();