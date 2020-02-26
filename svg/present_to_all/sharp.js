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
        }, [_c('path', { attrs: { 'd': 'M23 3H1v18h22V3zm-2 16.02H3V4.98h18v14.04zM10 12H8l4-4l4 4h-2v4h-4v-4z' } })]);
    }
}