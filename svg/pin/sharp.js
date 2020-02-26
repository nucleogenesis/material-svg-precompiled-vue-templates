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
        }, [_c('path', { attrs: { 'd': 'M7 2h10v2l-2 1v5l3 3v3h-5v4l-1 3l-1-3v-4H6v-3l3-3V5L7 4z' } })]);
    }
}