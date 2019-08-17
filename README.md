# hr-system-mobile

### 创建并初始化ionic项目
1. ionic start 你的project名字 [blank|tabs|] [--type=angular|ionic-angular]
+ 使用 --type option to start projects using older versions of Ionic. 
+ For example, you can start an Ionic 3 project with --type=ionic-angular. 
+ Use --list to see all project types and templates.
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

8. ng/ionic脚手架创建文件
* 带有路由的模块
ng/ionic g module [路径/模块名称] --routing
可通过route的方式引用pages
```javascript
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'leave', loadChildren: './leave/leave.module#LeavePageModule' }
];
```
* 创建page
可通过route的方式加载component
```javascript
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: 'function', component: FunctionComponent }, 
      { path: '', redirectTo: '/home/function', pathMatch: 'full' }
    ]
  }
];
```
* 创建component

9. <font color="#DC143C">scss编译深度选择器 /deep/失败</font>
报错expect 符号.
或者使用等价的深度选择器 >>> 不报错，但不生效，原因必须安装node-sass来编译scss文件
npm i node-sass，命令执行完成，重新start项目即可使用深度选择器（/deep/===>>>）
css文件内部不允许直接使用深度选择器

安装node-sass报错的话，换淘宝镜像安装，或者使用cnpm install node-sass --save-dev
最好node-sass声明在依赖文件package.json内

10.  angular相关指令的概念 
+ ng-content
> + <ng-content> 不会 "产生" 内容，它只是投影现有的内容。
> + 你可以认为它等价于 node.appendChild(el) 或 jQuery 中的 $(node).append(el) 方法：使用这些方法，节点不被克隆，它被简单地移动到它的新位置。因此，投影内容的生命周期将被绑定到它被声明的地方，而不是显示在地方。
> + <ng-content>是代指使用组件时内部的东西。其还有一个select属性，来选择投影的内容