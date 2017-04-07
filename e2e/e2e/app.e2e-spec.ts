import { MdDataTable2Page } from './app.po';

describe('md-data-table2 App', function() {
  let page: MdDataTable2Page;

  beforeEach(() => {
    page = new MdDataTable2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
