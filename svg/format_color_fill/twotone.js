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
                    'd': 'M10 5.21L5.21 10h9.58z'
                }
            }),
            _c('path', { attrs: { 'd': 'M19 17c1.1 0 2-.9 2-2c0-1.33-2-3.5-2-3.5s-2 2.17-2 3.5c0 1.1.9 2 2 2zm-10.06-.44c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12L7.62 0L6.21 1.41l2.38 2.38l-5.15 5.15a1.49 1.49 0 0 0 0 2.12l5.5 5.5zM10 5.21L14.79 10H5.21L10 5.21z' } }),
            _c('path', {
                attrs: {
                    'fill-opacity': '.3',
                    'd': 'M0 20h24v4H0z'
                }
            })
        ]);
    }
}