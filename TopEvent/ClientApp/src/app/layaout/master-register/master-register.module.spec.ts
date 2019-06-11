import { MasterRegisterModule } from './master-register.module';

describe('MasterRegisterModule', () => {
  let masterRegisterModule: MasterRegisterModule;

  beforeEach(() => {
    masterRegisterModule = new MasterRegisterModule();
  });

  it('should create an instance', () => {
    expect(masterRegisterModule).toBeTruthy();
  });
});
