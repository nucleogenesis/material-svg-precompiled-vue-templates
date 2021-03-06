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
                    'opacity': '.3',
                    'd': 'M11.39 12.61l.32.83l1.32 3.42l4.24-10.13l-10.13 4.24l3.42 1.33z'
                }
            }),
            _c('path', { attrs: { 'd': 'M3 11.51l6.84 2.65L12.48 21h.98L21 3L3 10.53v.98zm14.27-4.78l-4.24 10.13l-1.32-3.42l-.32-.83l-.82-.32l-3.43-1.33l10.13-4.23z' } })
        ]);
    }
}