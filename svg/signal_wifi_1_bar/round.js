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
            _c('path', { attrs: { 'd': 'M6.67 14.86l3.77 4.7c.8 1 2.32 1 3.12 0l3.78-4.7C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z' } }),
            _c('path', {
                attrs: {
                    'fill-opacity': '.3',
                    'd': 'M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l10.08 12.56c.8 1 2.32 1 3.12 0L23.64 7z'
                }
            })
        ]);
    }
}