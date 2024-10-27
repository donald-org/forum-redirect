// all das einfach dreist aus der Hauptwebseite kopiert

export const hexToBase64Url = (hexString: string): string => {
	const bytes = new Uint8Array(hexString.match(/.{1,2}/g)?.map((byte) => parseInt(byte, 16)) ?? []);
	const base64 = btoa(String.fromCharCode.apply(null, Array.from(bytes)));
	return base64.replace(/=/g, '').replace(/\//g, '_').replace(/\+/g, '-');
};

export const numToUint8Array = (num: number) => {
	return hexToBase64Url(num.toString(16));
};

export const numToBase64Url = (num: number): string => {
	return numToUint8Array(num);
};