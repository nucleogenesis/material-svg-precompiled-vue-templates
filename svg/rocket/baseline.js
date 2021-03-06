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
        }, [_c('path', {
                attrs: {
                    'd': 'M9 19c-1 0-4-3-4-4c0-.333.333-1 1-2l-4-1l2-3l4 1c4-6 10-8 14-8c0 4-2 10-8 14l1 4l-3 2l-1-4c-1 .667-1.667 1-2 1zm6.5-9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3zM4 16l1 1.5c-.667.667-1 1.5-1 2.5c1 0 1.833-.333 2.5-1L8 20c-1.333 1.333-3.333 2-6 2c0-2.667.667-4.667 2-6z',
                    'fill-rule': 'evenodd'
                }
            })]);
    }
}