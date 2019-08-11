const size = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    longDesktop: '1440px'
}

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
    longDesktop: `(min-width: ${size.longDesktop})`,
};