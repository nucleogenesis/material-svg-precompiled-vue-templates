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
                    'opacity': '.3',
                    'cx': '11',
                    'cy': '8',
                    'r': '2'
                }
            }),
            _c('path', {
                attrs: {
                    'opacity': '.3',
                    'd': 'M5 18h4.99L9 17l.93-.94C7.55 16.33 5.2 17.37 5 18z'
                }
            }),
            _c('path', { attrs: { 'd': 'M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm-1 12H5c.2-.63 2.55-1.67 4.93-1.94h.03l.46-.45L12 14.06a9.34 9.34 0 0 0-1-.06c-2.67 0-8 1.34-8 4v2h9l-2-2zm10.6-5.5l-5.13 5.17l-2.07-2.08L12 17l3.47 3.5L22 13.91z' } })
        ]);
    }
}