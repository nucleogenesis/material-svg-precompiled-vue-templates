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
        }, [_c('path', { attrs: { 'd': 'M9 16h6v-6h4l-7-7l-7 7h4v6zm2-2V8H9.828L12 5.828L14.172 8H13v6h-2zm-6 4h14v2H5z' } })]);
    }
}