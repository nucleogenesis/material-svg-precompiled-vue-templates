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
                    'd': 'M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5L23.64 7z'
                }
            }),
            _c('path', { attrs: { 'd': 'M3.53 10.94L12 21.5l8.47-10.56c-.43-.33-3.66-2.95-8.47-2.95s-8.04 2.62-8.47 2.95z' } })
        ]);
    }
}