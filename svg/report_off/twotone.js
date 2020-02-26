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
                    'd': 'M19 9.1L14.9 5H9.1l-.22.22L11 7.33V7h2v2.33l5.78 5.79l.22-.22zM6.05 8.04L5 9.1v5.8L9.1 19h5.8l1.05-1.05l-9.9-9.91zM13 16c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1z'
                }
            }),
            _c('path', { attrs: { 'd': 'M9.1 5h5.8L19 9.1v5.8l-.22.22l1.42 1.41l.8-.8V8.27L15.73 3H8.27l-.8.8l1.41 1.42z' } }),
            _c('circle', {
                attrs: {
                    'cx': '12',
                    'cy': '16',
                    'r': '1'
                }
            }),
            _c('path', { attrs: { 'd': 'M13 7h-2v.33l2 2zM2.41 1.58L1 2.99l3.64 3.64L3 8.27v7.46L8.27 21h7.46l1.64-1.64L21.01 23l1.41-1.41L2.41 1.58zM14.9 19H9.1L5 14.9V9.1l1.05-1.05l9.9 9.9L14.9 19z' } })
        ]);
    }
}