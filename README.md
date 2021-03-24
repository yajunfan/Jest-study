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
### 5.单元测试和集成测试的区别
```
    单元测试：英文是(unit testing) 单,是指对软件中的最小可测试单元进行检查和验证。前端所说的单元测试就是对一个模块进行测试。也就是说前端测试的时候，你测试的东西一定是一个模块。

    集成测试：也叫组装测试或者联合测试。在单元测试的基础上，将所有模块按照涉及要求组装成为子系统或系统，进行集成测试。
```

