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
            _c('path', { attrs: { 'd': 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm0-3.5c.73 0 1.39.19 1.97.53c.12-.14.86-.98 1.01-1.14A5.39 5.39 0 0 0 12 15c-1.11 0-2.13.33-2.99.88c.97 1.09.01.02 1.01 1.14c.59-.33 1.25-.52 1.98-.52z' } })
        ]);
    }
}