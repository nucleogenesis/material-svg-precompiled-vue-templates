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
        }, [_c('path', { attrs: { 'd': 'M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 8v12H2V10h20zm-6 6l-6-3.27v6.53L16 16z' } })]);
    }
}