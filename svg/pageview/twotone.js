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
                    'd': 'M4 18h16V6H4v12zm7.5-11c2.49 0 4.5 2.01 4.5 4.5c0 .88-.26 1.69-.7 2.39l2.44 2.43l-1.42 1.42l-2.44-2.44c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7z'
                }
            }),
            _c('path', { attrs: { 'd': 'M11.49 16c.88 0 1.7-.26 2.39-.7l2.44 2.44l1.42-1.42l-2.44-2.43c.44-.7.7-1.51.7-2.39C16 9.01 13.99 7 11.5 7S7 9.01 7 11.5S9.01 16 11.49 16zm.01-7a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z' } })
        ]);
    }
}