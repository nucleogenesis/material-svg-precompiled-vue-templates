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
                    'cx': '15.5',
                    'cy': '9.5',
                    'r': '1.5'
                }
            }),
            _c('circle', {
                attrs: {
                    'cx': '8.5',
                    'cy': '9.5',
                    'r': '1.5'
                }
            }),
            _c('path', { attrs: { 'd': 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm0-6c-1.9 0-3.63.97-4.65 2.58a.747.747 0 1 0 1.27.79c.74-1.18 2-1.88 3.38-1.88s2.64.7 3.38 1.88c.14.23.39.35.64.35c.14 0 .27-.04.4-.11c.35-.22.46-.68.24-1.03C15.63 14.96 13.9 14 12 14z' } })
        ]);
    }
}