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
                    'd': 'M7 19h10V5H7v14zm6-1h-2v-2h2v2zM12 6.72c1.96 0 3.5 1.51 3.5 3.47c0 2.26-2.62 2.49-2.62 4.45h-1.76c0-2.88 2.63-2.7 2.63-4.45c0-.93-.82-1.75-1.75-1.75s-1.75.82-1.75 1.75H8.5c0-1.95 1.54-3.47 3.5-3.47z'
                }
            }),
            _c('path', { attrs: { 'd': 'M11 16h2v2h-2zm6-15H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM12 8.44c.93 0 1.75.82 1.75 1.75c0 1.75-2.63 1.57-2.63 4.45h1.76c0-1.96 2.62-2.19 2.62-4.45c0-1.96-1.54-3.47-3.5-3.47s-3.5 1.52-3.5 3.47h1.75c0-.93.82-1.75 1.75-1.75z' } })
        ]);
    }
}