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
            _c('path', {
                attrs: {
                    'd': 'M7.25 15l7.5-5l-7.5-5a.901.901 0 1 1 1-1.5l8.502 5.668a1 1 0 0 1 0 1.664L8.25 16.5a.901.901 0 1 1-1-1.5z',
                    'fill-rule': 'evenodd'
                }
            }),
            _c('path', {
                attrs: {
                    'd': 'M17 20.998H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z',
                    'fill-rule': 'nonzero'
                }
            })
        ]);
    }
}