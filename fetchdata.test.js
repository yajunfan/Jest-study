// 这个文件就是用来测试fetchdata.js文件的，Jest会自动找对应的test作为测试文件，所以我们这里也使用了.test文件名。

// 这里用到两个方法
/**
 * test方法  Jest封装的测试方法，一般填写两个参数，描述和测试方法
 * expect方法 预期方法，就是你调用了什么方法，传递了什么参数，得到的预期是什么(代码中详细讲解)。
 */
import {fetchData} from './fetchdata.js'
test('测试获取数据',()=>{
    fetchData((data)=>{
        expect(data).toEqual({success:true});
    })
});

// 然后在终端输入yarn test 或者npm run test，就可以进行测试了 ，这样测试的是所有.test.js文件
// 也可以单独的测试某一个文件 npm run test example.test.js  就只测试ecample.test.js