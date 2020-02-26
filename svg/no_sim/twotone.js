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
                    'd': 'M7 19h9.23L7 9.77z'
                }
            }),
            _c('path', { attrs: { 'd': 'M3.79 3.74L2.38 5.15l2.74 2.74l-.12.12V19c0 1.1.9 2 2 2h10c.35 0 .68-.1.97-.26l1.88 1.88l1.41-1.41L3.79 3.74zM7 19V9.77L16.23 19H7z' } }),
            _c('path', {
                attrs: {
                    'opacity': '.3',
                    'd': 'M10.84 5L9.36 6.47L17 14.11V5z'
                }
            }),
            _c('path', { attrs: { 'd': 'M10.84 5H17v9.11l2 2V5c0-1.1-.9-2-2-2h-6.99L7.95 5.06l1.41 1.41L10.84 5z' } })
        ]);
    }
}