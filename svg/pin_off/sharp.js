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
        }, [
            _c('path', { attrs: { 'd': 'M9 9l7 7h-3v4l-1 3l-1-3v-4H6v-3l3-3V9zm8-7v2l-2 1v5l3 3v2.461L12.27 9.73L9 6.46V5L7 4V2h10z' } }),
            _c('path', { attrs: { 'd': 'M2.27 2.27L1 3.54L20.46 23l1.27-1.27L11 11z' } })
        ]);
    }
}