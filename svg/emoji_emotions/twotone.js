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
                    'd': 'M20 12c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8zM8.5 8c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11S7 10.33 7 9.5S7.67 8 8.5 8zM12 18c-2.28 0-4.22-1.66-5-4h10c-.78 2.34-2.72 4-5 4zm3.5-7c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z'
                }
            }),
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
            _c('path', { attrs: { 'd': 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z' } }),
            _c('path', { attrs: { 'd': 'M12 18c2.28 0 4.22-1.66 5-4H7c.78 2.34 2.72 4 5 4z' } })
        ]);
    }
}