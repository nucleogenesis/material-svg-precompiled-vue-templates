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
            _c('path', { attrs: { 'd': 'M10.21 16.83l-1.96-2.36L5.5 18h11l-3.54-4.71z' } }),
            _c('path', {
                attrs: {
                    'opacity': '.3',
                    'd': 'M16.5 18h-11l2.75-3.53l1.96 2.36l2.75-3.54L16.5 18zM17 7h-3V6H4v14h14V10h-1V7z'
                }
            }),
            _c('path', { attrs: { 'd': 'M20 4V1h-2v3h-3v2h3v2.99h2V6h3V4zm-2 16H4V6h10V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10h-2v10z' } })
        ]);
    }
}