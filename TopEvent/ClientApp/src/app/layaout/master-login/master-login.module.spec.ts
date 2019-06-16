import { MasterLoginModule } from './master-login.module';

describe('MasterLoginModule', () => {
  let masterLoginModule: MasterLoginModule;

  beforeEach(() => {
    masterLoginModule = new MasterLoginModule();
  });

  it('should create an instance', () => {
    expect(masterLoginModule).toBeTruthy();
  });
});
