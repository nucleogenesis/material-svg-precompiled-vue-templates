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
                    'd': 'M5 17h14v-5H5v5zm11.5-4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5zm-9 0c.83 0 1.5.67 1.5 1.5S8.33 16 7.5 16S6 15.33 6 14.5S6.67 13 7.5 13z'
                }
            }),
            _c('path', { attrs: { 'd': 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z' } }),
            _c('circle', {
                attrs: {
                    'cx': '7.5',
                    'cy': '14.5',
                    'r': '1.5'
                }
            }),
            _c('circle', {
                attrs: {
                    'cx': '16.5',
                    'cy': '14.5',
                    'r': '1.5'
                }
            })
        ]);
    }
}