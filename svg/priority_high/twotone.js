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
            _c('circle', {
                attrs: {
                    'cx': '12',
                    'cy': '19',
                    'r': '2'
                }
            }),
            _c('path', { attrs: { 'd': 'M10 3h4v12h-4z' } })
        ]);
    }
}