module.exports = function render() {
    with (this) {
        return _c('svg', {
            class: rtlClass,
            style: style,
            attrs: {
                'role': 'presentation',
                'focusable': 'false',
                'width': '24',
                'height': '24',
                'xmlns': 'http://www.w3.org/2000/svg',
                'viewBox': '0 0 24 24'
            }
        }, [
            _c('path', { attrs: { 'd': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 2c4.415 0 8 3.585 8 8s-3.585 8-8 8s-8-3.585-8-8s3.585-8 8-8z' } }),
            _c('path', { attrs: { 'd': 'M16 16H8V8h8z' } })
        ]);
    }
}