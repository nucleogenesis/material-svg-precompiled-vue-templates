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
                    'd': 'M6 13h13v3H6zm0-5h13v3H6z',
                    'opacity': '.3'
                }
            }),
            _c('path', { attrs: { 'd': 'M4 6v12h17V6H4zm15 10H6v-3h13v3zm0-5H6V8h13v3z' } })
        ]);
    }
}