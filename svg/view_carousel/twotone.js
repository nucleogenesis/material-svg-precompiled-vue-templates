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
            _c('path', { attrs: { 'd': 'M18 6h4v11h-4zM7 19h10V4H7v15zM9 6h6v11H9V6zM2 6h4v11H2z' } }),
            _c('path', {
                attrs: {
                    'opacity': '.3',
                    'd': 'M9 6h6v11H9z'
                }
            })
        ]);
    }
}