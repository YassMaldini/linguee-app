describe('Home screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should navigate to history screen', async () => {
    await element(by.id('historyIcon')).tap();
    await expect(element(by.id('historyScreen'))).toBeVisible();
  });
});
