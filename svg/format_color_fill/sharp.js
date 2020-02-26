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
            _c('path', { attrs: { 'd': 'M17.62 10l-10-10l-1.41 1.41l2.38 2.38L2.38 10L10 17.62L17.62 10zM5.21 10L10 5.21L14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z' } }),
            _c('path', {
                attrs: {
                    'fill-opacity': '.3',
                    'd': 'M0 20h24v4H0v-4z'
                }
            })
        ]);
    }
}