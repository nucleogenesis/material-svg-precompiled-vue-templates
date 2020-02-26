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
                    'd': 'M14 14v1.17L17.17 12L14 8.83V10H6v4z'
                }
            }),
            _c('path', { attrs: { 'd': 'M20 12l-8-8v4H4v8h8v4l8-8zM6 14v-4h8V8.83L17.17 12L14 15.17V14H6z' } })
        ]);
    }
}