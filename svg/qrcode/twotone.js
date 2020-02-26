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
                    'fill-rule': 'nonzero',
                    'opacity': '.3',
                    'd': 'M19 19h4v2h-2v2h-2zm-2-6h4v4h-2v-2h-2zm-4 0h2v2h2v6h-2v-2h-2zM3 3h6v6H3V3zm2 2v2h2V5H5zm10-2h6v6h-6V3zm2 2v2h2V5h-2zM3 15h6v6H3v-6zm2 2v2h2v-2H5z'
                }
            }),
            _c('path', {
                attrs: {
                    'd': 'M1 1h10v10H1V1zm2 2v6h6V3H3z',
                    'fill-rule': 'nonzero'
                }
            }),
            _c('path', {
                attrs: {
                    'd': 'M5 5h2v2H5z',
                    'fill-rule': 'evenodd'
                }
            }),
            _c('path', {
                attrs: {
                    'd': 'M13 1h10v10H13V1zm2 2v6h6V3h-6z',
                    'fill-rule': 'nonzero'
                }
            }),
            _c('path', {
                attrs: {
                    'd': 'M17 5h2v2h-2z',
                    'fill-rule': 'evenodd'
                }
            }),
            _c('path', {
                attrs: {
                    'd': 'M1 13h10v10H1V13zm2 2v6h6v-6H3z',
                    'fill-rule': 'nonzero'
                }
            }),
            _c('path', {
                attrs: {
                    'd': 'M5 17h2v2H5z',
                    'fill-rule': 'evenodd'
                }
            }),
            _c('path', {
                attrs: {
                    'd': 'M23 19h-4v4h-6V13h1h-1v6h2v2h2v-6h-2v-2h-1h3v2h2v2h2v-4h2v6zm0 2v2h-2v-2h2z',
                    'fill-rule': 'nonzero'
                }
            })
        ]);
    }
}