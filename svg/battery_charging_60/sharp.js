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
                    'd': 'M17 4h-3V2h-4v2H7v7h3.87L13 7v4h4V4z'
                }
            }),
            _c('path', { attrs: { 'd': 'M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v11h10V11h-4v1.5z' } })
        ]);
    }
}