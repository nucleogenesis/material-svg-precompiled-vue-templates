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
                    'd': 'M8 5h8v3H8zm11 5H5c-.55 0-1 .45-1 1v4h2v-2h12v2h2v-4c0-.55-.45-1-1-1zm-1 2.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z'
                }
            }),
            _c('path', { attrs: { 'd': 'M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm4-4h-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z' } }),
            _c('circle', {
                attrs: {
                    'cx': '18',
                    'cy': '11.5',
                    'r': '1'
                }
            })
        ]);
    }
}