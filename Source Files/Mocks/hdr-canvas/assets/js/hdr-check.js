export function checkHDR() {
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
		console.error('Bad window.screen test', e);
    return false;
	}
}

export function checkHDRCanvas() {
	const colorSpace = 'rec2100-pq';

	try {
		const canvas = document.createElement('canvas');
		if (!canvas.getContext) {
			return false;
		}
		const ctx = canvas.getContext("2d", {colorSpace: colorSpace, pixelFormat:'float16'});
		canvas.drawingBufferColorSpace = colorSpace;
		canvas.unpackColorSpace = colorSpace;
		return true;
	} catch (e) {
		console.error('Bad canvas ColorSpace test', e);
    return false;
	}
}
