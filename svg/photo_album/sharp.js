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
        }, [_c('path', { attrs: { 'd': 'M20 2H4v20h16V2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l3-3.86l2.14 2.58l3-3.86L18 19H6z' } })]);
    }
}