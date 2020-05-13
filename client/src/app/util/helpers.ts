/**
 * Turns a socialId to a number
 * @param socialId Social Id on the format yyyymmdd-xxxx
 */
export function getNumberFromSocialString(socialId: string) {
  let pnr = '';
  if (socialId.includes('-')) {
    const index = socialId.length - 5;
    pnr = socialId.substring(0, index) + socialId.substring(index + 1, socialId.length);
  } else {
    pnr = socialId;
  }
  return parseInt(pnr);
}
