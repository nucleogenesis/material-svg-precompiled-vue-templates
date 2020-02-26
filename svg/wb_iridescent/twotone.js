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
                    'd': 'M7 11h10v2H7z'
                }
            }),
            _c('path', { attrs: { 'd': 'M5 15h14V9H5v6zm2-4h10v2H7v-2zm4-10h2v3h-2zm6.25 4.39l1.41 1.41l1.8-1.79l-1.42-1.41zM11 20h2v3h-2zm6.24-1.29l1.79 1.8l1.42-1.42l-1.8-1.79zM5.34 6.805l-1.788-1.79L4.96 3.61l1.788 1.788zM3.55 19.08l1.41 1.42l1.79-1.8l-1.41-1.41z' } })
        ]);
    }
}