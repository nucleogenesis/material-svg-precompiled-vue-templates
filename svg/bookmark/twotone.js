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
                    'd': 'M7 17.97l5-2.15l5 2.15V5H7z'
                }
            }),
            _c('path', { attrs: { 'd': 'M17 3H7c-1.1 0-2 .9-2 2v16l7-3l7 3V5c0-1.1-.9-2-2-2zm0 14.97l-5-2.14l-5 2.14V5h10v12.97z' } })
        ]);
    }
}