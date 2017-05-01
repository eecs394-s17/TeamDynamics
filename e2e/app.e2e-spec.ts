import { TeamDynamicsPage } from './app.po';

describe('team-dynamics App', () => {
  let page: TeamDynamicsPage;

  beforeEach(() => {
    page = new TeamDynamicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
