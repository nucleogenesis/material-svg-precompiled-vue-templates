module.exports = function render() {
    with (this) {
        return _c('svg', {
            class: rtlClass,
            style: style,
            attrs: {
                'role': 'presentation',
                'focusable': 'false',
                'xmlns': 'http://www.w3.org/2000/svg',
                'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                'width': '24',
                'height': '24',
                'viewBox': '0 0 24 24'
            }
        }, [
            _c('defs', [_c('path', {
                    attrs: {
                        'id': 'ic-a',
                        'd': 'M0 0h24v24H0V0z'
                    }
                })]),
            _c('clipPath', { attrs: { 'id': 'ic-b' } }, [_c('use', {
                    attrs: {
                        'xlink:href': '#ic-a',
                        'overflow': 'visible'
                    }
                })]),
            _c('path', {
                attrs: {
                    'd': 'M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6s-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3s-.4.1-.6.1s-.4 0-.6-.1s-.3-.2-.5-.3s-.2-.3-.3-.6s-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3s.4-.1.6-.1s.4 0 .6.1c.2.1.3.2.5.3s.2.3.3.6s.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3s-.1-.1-.2-.2s-.2-.1-.3-.1s-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3s.1.1.2.2s.2.1.3.1s.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z',
                    'clip-path': 'url(#ic-b)'
                }
            })
        ]);
    }
}