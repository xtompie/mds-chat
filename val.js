let val = (function() {
    function set(element, value) {
        element.querySelectorAll('[data-val]').forEach(el => {
            let key = el.getAttribute('data-val');
            if (!key in value) {
                return;
            }
            let val = value[key];
            let mode = el.getAttribute('data-val-mode') || 'text';
            if (mode === 'text') {
                el.textContent = val;
            } else if (mode === 'html') {
                el.innerHTML = val;
            }
        });
    }
    return {
        set,
    }
})();