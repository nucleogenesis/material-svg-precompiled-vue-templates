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
                    'd': 'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49l.01.01l.01-.01z'
                }
            }),
            _c('path', { attrs: { 'd': 'M4.79 12.52l7.2 8.98H12l.01-.01l7.2-8.98C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z' } })
        ]);
    }
}