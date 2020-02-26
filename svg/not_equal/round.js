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
            _c('path', { attrs: { 'd': 'M18 9.998H6a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2zm0 6H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z' } }),
            _c('path', { attrs: { 'd': 'M14.999 5H15c.507.219.742.806.525 1.314l-5.212 12.162A.999.999 0 0 1 9 19a1.002 1.002 0 0 1-.525-1.314l5.212-12.162A.999.999 0 0 1 15 5z' } })
        ]);
    }
}