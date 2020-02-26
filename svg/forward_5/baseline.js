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
                        'd': 'M24 24H0V0h24v24z'
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
                    'd': 'M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6s2.7-6 6-6v4l5-5l-5-5v4c-4.4 0-8 3.6-8 8zm6.7.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1s.1 0 .1-.1s.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3s.2.3.3.5s.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5s-.3.2-.5.3s-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2s-.2-.2-.3-.4s-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2l-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1s-.1 0-.1.1s-.1.1-.1.1h-.6z',
                    'clip-path': 'url(#ic-b)'
                }
            })
        ]);
    }
}