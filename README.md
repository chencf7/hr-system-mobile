# hr-system-mobile

### 创建并初始化ionic项目
1. ionic start 你的project名字 [blank|tabs|] [--type=angular|ionic-angular]
使用 --type option to start projects using older versions of Ionic. 
For example, you can start an Ionic 3 project with --type=ionic-angular. 
Use --list to see all project types and templates.
初始化ionic项目过程中一路选择N

2. 使用ionic或者ng脚手架，创建component、page等内容时，不想生成测试模块spec.ts
方法 在angular.json中找到配置项schematics，配置"spec":false

3. 预加载加载全部与否
```javascript
//如下声明，会加载所有的页面，可到浏览器Network查看加载的页面
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//如下声明，加载当前请求的页面
RouterModule.forRoot(routes)
```
详情说明链接：https://www.jianshu.com/p/b07724297fdb

4. 引入ng-zorro-mobile，参考官网在ionic中使用，自行构建

5. angular项目入口index.html内部声明的组件<app-root></app-root>是通过main.ts连接
```javascript
// main.ts
import { AppModule } from './app/pages/app/app.module';
```
6. 代码检查

* 使用tslint检查，
    执行npm lint命令，脚手架可参照tslint.json配置的规则检查全局的项目
npm lint命令通过package.json配置执行ng lint， ng lint的配置相见angular.json
* 使用eslint检查，eslint检查angular项目并不适配，不推荐
+ <1> npm i -d eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
+ <2> 在项目根目录下添加配置项.eslintrc.js
+ <3> 在package.json的配置项scripts添加
"es-lint": "./node_modules/.bin/eslint src/**/*.{ts,js}"  //此处.{ts,js}逗号后面不能有空格
执行npm run es-lint即可
若仅执行.eslintrc.js里面的rool的规则，不需要执行typescript-eslint的配置项规则，可注释
```javascript
// extends: ['plugin:@typescript-eslint/recommended'], //定义文件继承的子规范
// plugins: ['@typescript-eslint'],  //定义了该eslint文件所依赖的插件
```
参考网址：https://segmentfault.com/a/1190000019661168

7. 在scss文件中引用背景图片的问题
```css
/* 原因时scss是预编译的，编译背景图片最终的引用路径是http:localhost:4200/**\/图片名称.jpg
所以scss的url路径直接为编译后的相对路径
*/
.hrmobile-toolbar-bg{
  background: url(/assets/images/toubujianbianbj.png) no-repeat center;
  background-size: 100%;
}
```
直接在html文件中引用，则需要当权目录的相对路径
```html
<ion-toolbar color="primary"
    style="background: url('assets/images/toubujianbianbeijing.png') no-repeat center;background-size: 100%;">
</ion-toolbar>
```
另外注意，ionic，header添加背景图片必须配置配色方案，color="primary|lite"