export const decodeHTMLEntities = (rawStr?: string) =>
  rawStr ? rawStr.replace(/&#(\d+);/g, (match, dec) => `${String.fromCharCode(dec)}`) : '';
