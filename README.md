## 跟着技术胖大哥学习 原博主地址 http://jspang.com/detailed?id=65#toc322
前端自动化测试学习
### 1.首先是要安装node和npm
### 2.使用npm安装Jest框架  npm install jest@24.8.0 -D
  -D 就保存到dev里边了，也就是说上线的时候我们不使用这个包，只有在开发的时候才进行测试。这样就安装完了Jest框架。
### 3.在文件下新建文件example.js(被测试文件) 和example.text.js（测试文件）
  example.text.js 是用来测试example.js这个文件的，Jest会自动找对应的.test.js文件作为测试文件
  ```
    这里用到两个方法
        test方法  Jest封装的测试方法，一般填写两个参数，描述和测试方法
        expect方法 预期方法，就是你调用了什么方法，传递了什么参数，得到的预期是什么(代码中详细讲解)。
  ```  
### 4.如何测试
```
    在package.json文件中，把里边的scripts标签的值修改为jest
    {
        "name": "jesttest",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "jest"
        },
        "author": "",
        "license": "ISC",
        "devDependencies": {
            "jest": "^24.8.0"
        }
    }
    vscode终端输入yarn test 或者 npm run test 就可以测试所有符合条件的文件了
    npm run test example.test.js 就可以测试单独的这一个文件

```
## 开启自动测试
```
  在scripts中
    "scripts": {
        "test": "jest --watchAll"
    },
    修改保存后，我们在终端再次运行npm run test,这时候测试一次后，它并没有结束，而是等待测试文件的变化，变化后就会自动进行测试
```
### 5.单元测试和集成测试的区别
```
    单元测试：英文是(unit testing) 单,是指对软件中的最小可测试单元进行检查和验证。前端所说的单元测试就是对一个模块进行测试。也就是说前端测试的时候，你测试的东西一定是一个模块。

    集成测试：也叫组装测试或者联合测试。在单元测试的基础上，将所有模块按照涉及要求组装成为子系统或系统，进行集成测试。
```
### 6.Jest 初始化配置
```
直接使用npx命令来进行初始化 npx jest --init

之后会有一些选项，你根据自己的需要进行选择就可以了：

Choose the test environment that will be used for testing ? 代码是运行在Node环境还是Web环境下？

Do you want Jest to add coverage reports ? 是否生成测试覆盖率文件？

Automatically clear mock calls and instrances between every test?是否需要在测试之后清楚模拟调用的一些东西？

在这三个选项选择之后，你会发现你的工程根目录下多了一个jest.config.js的文件。打开文件你可以看到里边有很多Jest的配置项。
```
  ## coverageDirectroy详解
```
 代码测试覆盖率，就是我们的测试代码，对功能性代码和业务逻辑代码作了百分多少的测试，这个百分比，就叫做代码测试覆盖率。
 coverageDirectroy的配置是用来打开代码覆盖率的，如果我们把代码写成下面的样子,就说明打开了代码覆盖率的这个选项。
 coverageDirectory : "coverage" 
 当这个选项被打开后，我们就可以使用下面的命令,jest就会自动给我们生成一个代码测试覆盖率的说明。
 npx jest --coverage
 不仅会有一个简单的终端图表，还会生成一个coverage的文件夹，这里边有很多文件。
```
![avatar](/img/1.jpg)

## 那么npx是什么呢？
```
 在 npm version >= 5.2.0 开始，自动安装了npx。 npx 会帮你执行依赖包里的二进制文件。 
 npx 会自动查找当前依赖包中的可执行文件，如果找不到，就会去 PATH 里找。如果依然找不到，就会帮你安装！
```
### 7.Jest中的匹配器
```
   1)toBe() 匹配器 是在工作中最常用的一种匹配器，简单的理解它就是相等。这个相当是等同于===的，也就是我们常说的严格相等。
        test('测试严格相等',()=>{
            const a = {number:'007'}   
            expect(a).toBe({number:'007'})
        });
        测试应该是FAIL ,因为这个不是完全相等的，引用地址不同
```
```
   2)toEqual() 匹配器 可以把它理解成只要内容相等，就可以通过测试，比如修改代码如下:
        test('测试严格相等',()=>{
            const a = {number:'007'}   
            expect(a).toEqual({number:'007'})
        });
        测试应该是PASS ,当你不严格匹配但要求值相等时时就可以使用toEqual（）匹配器
```
```
   3)toBeNull() 匹配器 只匹配null值，需要注意的是不匹配undefined的值。
        test('toBeNull测试',()=>{
            const a = null   
            expect(a).toBeNull()
        }) 
        测试应该是PASS ,但是如果我们把a的值改为undefined，测试用例就通过不了啦。
```
```
   4)toBeUndifined() 匹配器 匹配undefined。
        test('toBeNull测试',()=>{
            const a = undefined   
            expect(a).toBeUndefined()
        }) 
        测试应该是PASS ,但是如果我们把a的值改为空字符串，测试用例就通过不了啦。
```
```
   5)toBeDefined() 匹配器 只要定义过了，都可以匹配成功。
        test('toBeNull测试',()=>{
            const a = 'test';   
            expect(a).toBeDefined()
        }) 
        测试应该是PASS ,这里需要注意的是，给一个null值也是可以通过测试的。
```
```
   6)toBeTruthy() 匹配器 这个是true和false匹配器，就相当于判断真假的。
        test('toBeTruthy 测试',()=>{
            const a = 0
            expect(a).toBeTruthy()
        }) 
        这样测试就过不去了，因为这里的0，如果判断真假时，就是false，所以无法通过。同样道理null也是无法通过的。 但是我们给个1或者非空字符串，就可以通过测试了。
```
```
   7)toBeFalsy() 匹配器 这个匹配器只要是返回的false就可以通过测试。
        test('toBeNull测试',()=>{
            const a = 'test';   
            expect(a).toBeDefined()
        }) 
        测试应该是PASS。
```
```
   8)toBeDefined() 匹配器 只要定义过了，都可以匹配成功。
        test('toBeNull测试',()=>{
            const a = 'test';   
            expect(a).toBeDefined()
        }) 
        测试应该是PASS ,这里需要注意的是，给一个null值也是可以通过测试的。
```