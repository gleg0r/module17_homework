const shapeshifter = require('./index');

xdescribe('test for shapeshifter', () => {
  it('should give underupped word', () => {
    expect(shapeshifter('son of bitch')).toBe('drow')
  })
})