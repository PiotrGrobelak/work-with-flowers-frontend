import translateType from '../translateType';

describe('Function translateType', () => {
  it('transle one of type', () => {
    const typeFirst = 'florist';
    const typeSecond = 'apprentice';
    expect(translateType(typeFirst)).toEqual('Florysta');
    expect(translateType(typeSecond)).toEqual('Praktyki');
  });
  it('return null if the value is not one of type', () => {
    const typeFirst = 'xyv';
    const typeSecond = '434';
    expect(translateType(typeFirst)).toEqual(null);
    expect(translateType(typeSecond)).toEqual(null);
  });
  it('return array with translated types or null ', () => {
    const types = ['xyz', 'florist', '8989', 'courier', 'conservator'].map((item) => {
      return translateType(item);
    });
    expect(types).toEqual([null, 'Florysta', null, 'Kurier', 'Serwisant']);
  });
});
