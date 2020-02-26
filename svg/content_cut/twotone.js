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
                    'd': 'M6 20a2 2 0 1 1-.001-3.999A2 2 0 0 1 6 20zM6 8a2 2 0 1 1-.001-3.999A2 2 0 0 1 6 8z',
                    'opacity': '.3',
                    'fill-rule': 'evenodd'
                }
            }),
            _c('path', {
                attrs: {
                    'd': 'M9.64 7.64c.23-.5.36-1.05.36-1.64c0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8a2 2 0 1 1-.001-3.999A2 2 0 0 1 6 8zm0 12a2 2 0 1 1-.001-3.999A2 2 0 0 1 6 20zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5s-.22.5-.5.5zM19 3l-6 6l2 2l7-7V3h-3z',
                    'fill-rule': 'nonzero'
                }
            })
        ]);
    }
}