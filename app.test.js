const addition = require('./app');
test ('adds 1 + 2 to equal 3', () => {
    expect(addition(1,2)).toBe(3);
});