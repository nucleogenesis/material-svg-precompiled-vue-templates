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
                    'd': 'M8 9.86v4.28L11.03 12z'
                }
            }),
            _c('path', { attrs: { 'd': 'M14.5 12L6 6v12l8.5-6zM8 9.86L11.03 12L8 14.14V9.86zM16 6h2v12h-2z' } })
        ]);
    }
}