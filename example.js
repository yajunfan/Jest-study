function fn1(count){
    return count>=200? '西单':'天通苑'
}
function fn2(count){
    return count>=1000? '出省':'北京'
}
module.exports={
    fn1,fn2
};