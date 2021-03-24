const example = require('./example.js');
const {fn1,fn2} = example;
test('游玩1 300元',()=>{
    expect(fn1(300)).toBe("西单");
});
test('游玩2 1300元',()=>{
    expect(fn2(1300)).toBe("出省");
});