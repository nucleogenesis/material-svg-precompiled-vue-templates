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
                    'fill-opacity': '.3',
                    'd': 'M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l10.08 12.56c.8 1 2.32 1 3.12 0L23.64 7z'
                }
            }),
            _c('path', { attrs: { 'd': 'M3.53 10.94l6.91 8.61c.8 1 2.32 1 3.12 0l6.91-8.61c-.43-.33-3.66-2.95-8.47-2.95s-8.04 2.62-8.47 2.95z' } })
        ]);
    }
}