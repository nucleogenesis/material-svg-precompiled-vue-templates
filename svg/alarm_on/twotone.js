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
                    'd': 'M12 6c-3.86 0-7 3.14-7 7s3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7zm-1.47 10.64l-3.18-3.18l1.06-1.06l2.13 2.13l4.93-4.95l1.06 1.06l-6 6z'
                }
            }),
            _c('path', { attrs: { 'd': 'M10.54 14.53L8.41 12.4l-1.06 1.06l3.18 3.18l6-6l-1.06-1.06zm6.797-12.72l4.607 3.845l-1.28 1.535l-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7z' } })
        ]);
    }
}