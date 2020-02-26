module.exports = function render() {
    with (this) {
        return _c('svg', {
            class: rtlClass,
            style: style,
            attrs: {
                'role': 'presentation',
                'focusable': 'false',
                'xmlns': 'http://www.w3.org/2000/svg',
                'width': '24',
                'height': '24',
                'viewBox': '0 0 24 24'
            }
        }, [
            _c('path', { attrs: { 'd': 'M8 8H6v9h11v-2H8z' } }),
            _c('path', { attrs: { 'd': 'M22 3H10v10h12V3zm-2 8h-8V7h8v4zM4 12H2v9h11v-2H4z' } })
        ]);
    }
}