import { isValidAcr } from './verifyIdPortenAccessToken';

describe('verifyIdPortenAccessToken', () => {
  it('Level4 should be valid acr', () => {
    expect(isValidAcr('Level4')).toBeTruthy();
  });
  it('idporten-loa-high should be valid acr', () => {
    expect(isValidAcr('idporten-loa-high')).toBeTruthy();
  });
  it('Level3 should not be valid acr', () => {
    expect(isValidAcr('Level3')).toBeFalsy();
  });
});
