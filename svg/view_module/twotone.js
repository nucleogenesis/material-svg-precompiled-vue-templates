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
                    'd': 'M11 12.5h3V16h-3zM11 7h3v3.5h-3zm-5 5.5h3V16H6zM6 7h3v3.5H6zm10 0h3v3.5h-3zm0 5.5h3V16h-3z',
                    'opacity': '.3'
                }
            }),
            _c('path', { attrs: { 'd': 'M4 5v13h17V5H4zm5 11H6v-3.5h3V16zm0-5.5H6V7h3v3.5zm5 5.5h-3v-3.5h3V16zm0-5.5h-3V7h3v3.5zm5 5.5h-3v-3.5h3V16zm0-5.5h-3V7h3v3.5z' } })
        ]);
    }
}