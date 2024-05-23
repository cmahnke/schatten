export default function checkHDR() {
	try {
		const bitsPerChannel = screen.colorDepth / 3;
		const hdrSupported = bitsPerChannel > 8;

		const wideGamutSupported = window.matchMedia('(color-gamut: rec2020)').matches || window.matchMedia('(color-gamut: p3)').matches;
		if (wideGamutSupported) {
			if (bitsPerChannel !== Math.round(bitsPerChannel)) {
				// iOS bug
        return false
			} else if (hdrSupported) {
        return true;
			} else {
        return false
			}
		}
	} catch (e) {
		console.error('bad window.screen test', e);
    return false;
	}
}
