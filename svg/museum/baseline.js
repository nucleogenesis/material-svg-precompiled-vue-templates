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
        }, [_c('path', { attrs: { 'd': 'M22 11V9L12 2L2 9v2h2v9H2v2h20v-2h-2v-9h2zm-6 7h-2v-4l-2 3l-2-3v4H8v-7h2l2 3l2-3h2v7z' } })]);
    }
}