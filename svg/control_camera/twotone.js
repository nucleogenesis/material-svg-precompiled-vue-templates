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
            _c('path', { attrs: { 'd': 'M7.3 13.77L5.54 12l1.76-1.77l-1.76-1.77L2 12l3.54 3.54zm8.24 4.69l-1.77-1.76L12 18.46l-1.77-1.76l-1.77 1.76L12 22zm2.92-2.92L22 12l-3.54-3.54l-1.76 1.77L18.46 12l-1.76 1.77zM12 5.54l1.77 1.76l1.77-1.76L12 2L8.46 5.54l1.77 1.76z' } }),
            _c('circle', {
                attrs: {
                    'cx': '12',
                    'cy': '12',
                    'r': '3'
                }
            })
        ]);
    }
}