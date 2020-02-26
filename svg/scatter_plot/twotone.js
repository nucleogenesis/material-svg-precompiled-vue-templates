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
            _c('circle', {
                attrs: {
                    'opacity': '.3',
                    'cx': '11',
                    'cy': '6',
                    'r': '2'
                }
            }),
            _c('circle', {
                attrs: {
                    'opacity': '.3',
                    'cx': '16.6',
                    'cy': '17.6',
                    'r': '2'
                }
            }),
            _c('circle', {
                attrs: {
                    'opacity': '.3',
                    'cx': '7',
                    'cy': '14',
                    'r': '2'
                }
            }),
            _c('path', { attrs: { 'd': 'M7 10c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm8-10c0-2.21-1.79-4-4-4S7 3.79 7 6s1.79 4 4 4s4-1.79 4-4zm-4 2c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm5.6 5.6c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z' } })
        ]);
    }
}