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
            _c('path', { attrs: { 'd': 'M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14z' } }),
            _c('circle', {
                attrs: {
                    'cx': '9',
                    'cy': '12',
                    'r': '1.5'
                }
            }),
            _c('circle', {
                attrs: {
                    'cx': '14',
                    'cy': '12',
                    'r': '1.5'
                }
            }),
            _c('circle', {
                attrs: {
                    'cx': '19',
                    'cy': '12',
                    'r': '1.5'
                }
            })
        ]);
    }
}