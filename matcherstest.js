test('测试严格相等',()=>{
    const  a= {"number":"007"};
    const b = "56565";
    // expect(a).toBe({"number":"007"});
    expect(b).toBe("56565");
    expect(a).toEqual({"number":"007"});
})