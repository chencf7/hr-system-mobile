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
6. 安装typescript-eslint后如何继续配置，使用eslint检查typescript