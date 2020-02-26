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
                    'd': 'M17 4h-3V2h-4v2H7v10.5h2L13 7v5.5h2l-1.07 2H17V4z'
                }
            }),
            _c('path', { attrs: { 'd': 'M11 20v-5.5H7V22h10v-7.5h-3.07L11 20z' } })
        ]);
    }
}