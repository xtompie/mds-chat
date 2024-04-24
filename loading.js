let loading = (function() {
    let loading = false;
    let change = [];
    function on() {
        loading = true;
        didchage();
    }
    function off() {
        loading = false;
        didchage();
    }
    function onchange(callback) {
        change.push(callback);
    }
    function is() {
        return loading;
    }
    function didchage() {
        change.forEach(callback => callback(loading));
        document.querySelectorAll('[data-loading-on]').forEach(el => el.style.display = loading ? '' : 'none')
        document.querySelectorAll('[data-loading-off]').forEach(el => el.style.display = loading ? 'none' : '')
    }
    return {
        on,
        off,
        is,
        onchange,
    }
})();