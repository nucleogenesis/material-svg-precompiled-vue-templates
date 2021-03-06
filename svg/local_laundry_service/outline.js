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
            _c('path', { attrs: { 'd': 'M18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM18 20H6L5.99 4H18v16z' } }),
            _c('circle', {
                attrs: {
                    'cx': '8',
                    'cy': '6',
                    'r': '1'
                }
            }),
            _c('circle', {
                attrs: {
                    'cx': '11',
                    'cy': '6',
                    'r': '1'
                }
            }),
            _c('path', { attrs: { 'd': 'M12 19c2.76 0 5-2.24 5-5s-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5zm2.36-7.36c1.3 1.3 1.3 3.42 0 4.72c-1.3 1.3-3.42 1.3-4.72 0l4.72-4.72z' } })
        ]);
    }
}