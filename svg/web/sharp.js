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
        }, [_c('path', { attrs: { 'd': 'M22 4H2v16h20V4zm-7 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z' } })]);
    }
}