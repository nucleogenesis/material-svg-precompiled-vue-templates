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
            _c('path', {
                attrs: {
                    'opacity': '.3',
                    'd': 'M11.17 8l-.59-.59L9.17 6H4v12h16V8h-8.83zM14 10h2v2h2v2h-2v2h-2v-2h-2v-2h2v-2z'
                }
            }),
            _c('path', { attrs: { 'd': 'M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l1.41 1.41l.59.59H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z' } })
        ]);
    }
}