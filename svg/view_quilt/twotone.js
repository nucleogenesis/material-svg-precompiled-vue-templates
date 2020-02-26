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
                    'd': 'M16 12.5h3V16h-3zM6 7h3v9H6zm5 5.5h3V16h-3zM11 7h8v3.5h-8z',
                    'opacity': '.3'
                }
            }),
            _c('path', { attrs: { 'd': 'M4 5v13h17V5H4zm5 11H6V7h3v9zm5 0h-3v-3.5h3V16zm5 0h-3v-3.5h3V16zm0-5.5h-8V7h8v3.5z' } })
        ]);
    }
}