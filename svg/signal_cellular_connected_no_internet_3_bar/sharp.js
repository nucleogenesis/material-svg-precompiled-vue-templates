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
                    'fill-opacity': '.3',
                    'd': 'M22 8V2L2 22h16V8h4z'
                }
            }),
            _c('path', { attrs: { 'd': 'M18 22V6L2 22h16zm2-12v8h2v-8h-2zm0 12h2v-2h-2v2z' } })
        ]);
    }
}