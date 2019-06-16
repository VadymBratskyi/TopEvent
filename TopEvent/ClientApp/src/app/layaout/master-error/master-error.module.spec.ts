import { MasterErrorModule } from './master-error.module';

describe('MasterErrorModule', () => {
  let masterErrorModule: MasterErrorModule;

  beforeEach(() => {
    masterErrorModule = new MasterErrorModule();
  });

  it('should create an instance', () => {
    expect(masterErrorModule).toBeTruthy();
  });
});
