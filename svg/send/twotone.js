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
                    'd': 'M4 8.25l7.51 1l-7.5-3.22zm.01 9.72l7.5-3.22l-7.51 1z'
                }
            }),
            _c('path', { attrs: { 'd': 'M2.01 3L2 10l15 2l-15 2l.01 7L23 12L2.01 3zM4 8.25V6.03l7.51 3.22l-7.51-1zm.01 9.72v-2.22l7.51-1l-7.51 3.22z' } })
        ]);
    }
}