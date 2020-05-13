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

export function getAgeFromSocialIdString(socialId: string): number {
  const year = parseInt(socialId.substring(0, 4));
  const today = new Date();
  return today.getFullYear() - year;
}

export function getAgeFromSocialIdNumber(socialId: number) {
  // Thanks javascript
  const socialIdStr = `${socialId}`;
  return getAgeFromSocialIdString(socialIdStr);
}

export function getGenderFromSocialIdString(socialId: string): string {
  const genderNum = parseInt(socialId[socialId.length - 2]);
  // Odd is male, even is female
  return (genderNum % 2 === 0 ? 'female' : 'male');
}
