module.exports = function render() {
    with (this) {
        return _c('svg', {
            class: rtlClass,
            style: style,
            attrs: {
                'role': 'presentation',
                'focusable': 'false',
                'width': '24',
                'height': '24',
                'xmlns': 'http://www.w3.org/2000/svg',
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
            _c('path', { attrs: { 'd': 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm0-3.5c.537 0 1.036.103 1.494.293c.395.14.705-.001.887-.232c.245-.31.216-.939-.287-1.143a5.487 5.487 0 0 0-4.17-.012c-.5.204-.585.838-.281 1.188c.197.227.524.315.86.194c.461-.185.96-.288 1.497-.288z' } })
        ]);
    }
}