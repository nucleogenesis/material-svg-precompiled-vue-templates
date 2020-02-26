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
                    'd': 'M7.72 17.7l3.47-1.53l.81-.36l.81.36l3.47 1.53L12 7.27z'
                }
            }),
            _c('path', { attrs: { 'd': 'M4.5 20.29l.71.71L12 18l6.79 3l.71-.71L12 2L4.5 20.29zm8.31-4.12l-.81-.36l-.81.36l-3.47 1.53L12 7.27l4.28 10.43l-3.47-1.53z' } })
        ]);
    }
}