module.exports = function render() {
    with (this) {
        return _c('svg', {
            class: rtlClass,
            style: style,
            attrs: {
                'role': 'presentation',
                'focusable': 'false',
                'width': '24',
                'height': '24',
                'xmlns': 'http://www.w3.org/2000/svg',
                'viewBox': '0 0 24 24'
            }
        }, [
            _c('path', { attrs: { 'd': 'M3 11h18v2H3z' } }),
            _c('circle', {
                attrs: {
                    'opacity': '.3',
                    'cx': '12',
                    'cy': '6',
                    'r': '1'
                }
            }),
            _c('circle', {
                attrs: {
                    'opacity': '.3',
                    'cx': '12',
                    'cy': '18',
                    'r': '1'
                }
            }),
            _c('path', { attrs: { 'd': 'M12.003 3a3 3 0 1 1-.006 6a3 3 0 0 1 .006-6zM12 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm.003 10a3 3 0 1 1-.006 6a3 3 0 0 1 .006-6zM12 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2z' } })
        ]);
    }
}