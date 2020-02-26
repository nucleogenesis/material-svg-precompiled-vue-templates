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
                    'd': 'M4 20h2v-2h2.23c-.75-.93-1.2-2.04-1.23-3c-.02-.53-.73-4.43 6-8c0 0-.8 2.61 2.15 4.63c.76.52 1.85 1.48 1.85 3.37c0 1.13-.39 2.16-1.02 3H18v2h2V4H4v16z'
                }
            }),
            _c('path', { attrs: { 'd': 'M12.01 12.46c-.15.42-.15.82-.08 1.28c.1.55.33 1.04.2 1.6c-.13.59-.77 1.38-1.53 1.63c1.28 1.05 3.2.37 3.39-1.32c.17-1.54-1.44-1.98-1.98-3.19z' } }),
            _c('path', { attrs: { 'd': 'M2 2v20h20V2H2zm10 16c-1.58 0-2.97-1.88-3-3.06c0-.05-.01-.13-.01-.22c-.13-1.73 1-3.2 2.47-4.37c.47 1.01 1.27 2.03 2.57 2.92c.58.42.97.86.97 1.73c0 1.65-1.35 3-3 3zm8 2h-2v-2h-2.02A4.98 4.98 0 0 0 17 15c0-1.89-1.09-2.85-1.85-3.37C12.2 9.61 13 7 13 7c-6.73 3.57-6.02 7.47-6 8c.03.96.49 2.07 1.23 3H6v2H4V4h16v16z' } })
        ]);
    }
}