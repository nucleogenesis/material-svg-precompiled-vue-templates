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
                    'd': 'M10 8.64v6.72L15.27 12z'
                }
            }),
            _c('path', { attrs: { 'd': 'M8 19l11-7L8 5v14zm2-10.36L15.27 12L10 15.36V8.64z' } })
        ]);
    }
}