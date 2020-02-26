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
                    'd': 'M3 19h18V5H3v14zm9-13c4.42 0 8 2.69 8 6s-3.58 6-8 6s-8-2.69-8-6s3.58-6 8-6z'
                }
            }),
            _c('path', { attrs: { 'd': 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-9-1c4.42 0 8-2.69 8-6s-3.58-6-8-6s-8 2.69-8 6s3.58 6 8 6zm0-10c3.25 0 6 1.83 6 4s-2.75 4-6 4s-6-1.83-6-4s2.75-4 6-4z' } })
        ]);
    }
}