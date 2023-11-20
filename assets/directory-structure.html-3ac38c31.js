import{_ as e,r as i,o as t,c,a as n,d as s,b as l,w as o,e as p}from"./app-c32aa151.js";const m={},d=n("h1",{id:"文件结构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文件结构","aria-hidden":"true"},"#"),s(" 文件结构")],-1),u={class:"custom-container tip"},v=n("p",{class:"custom-container-title"},"TIP",-1),r=p(`<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># PHP程序目录</span>
└─App
   ├─Admin
   ├─Bin
   ├─Components
   ├─Config
   ├─Console
   ├─Entity
   ├─Event
   ├─Fonts
   ├─Http
   ├─Model          <span class="token comment"># Model 虽然不应该简单把 Model 理解为数据库操作，但目前用到的只是默认数据库连接的表操作，每个model对应一个数据表</span>
   ├─Modules        <span class="token comment"># 所有模块解耦</span>
   ├─RouteTables    <span class="token comment"># 路由表</span>
   ├─Templates      <span class="token comment"># 只有一个404.twig 默认NotFound模板</span>
   ├─Versions       <span class="token comment"># 数据库更新升级已上线的项目会用到详见#TIP1迁移</span>
   ├─<span class="token punctuation">.</span>htaccess      <span class="token comment"># 禁止直接浏览 App 目录里的PHP文件</span>
   ├─404<span class="token punctuation">.</span>twig       <span class="token comment"># 非必要</span>
   ├─bootstrap<span class="token punctuation">.</span>php  <span class="token comment"># 初始设置程序从这里开始</span>
   └─Functions<span class="token punctuation">.</span>php  <span class="token comment"># 一些常用方法</span>
├─resources <span class="token comment"># 存放一些js,css等静态资源，主要用于后台使用，包含ckeditor,ckfinder</span>
└─static <span class="token comment"># 存放前台使用的css,js,images等，包含twig模板文件，和yaml配置文件</span>
  └─config  一些留给前端可以自行修改的配置<span class="token punctuation">.</span>
    └─translations  前端用到的需要后台翻译的文字
  ├─view    前端可以修改的twig模板文件<span class="token punctuation">.</span>通常是复制HTML到这里修改的。
  ├─HTML   （非必要）前端的 <span class="token operator">*</span><span class="token punctuation">.</span>html 放这里，
  ├─images （非必要）前端的图片，命名只是因为常用
  ├─css    （非必要）前端的 css ，命名只是因为常用
  ├─js      （非必要）前端的 js <span class="token punctuation">,</span> 命名只是因为常用
├─Tests <span class="token comment"># 测试程序目录</span>
<span class="token comment"># 可写目录，存放上传的文件或者图片等，</span>
<span class="token comment"># 为了 server 安装方便，PHP缓存文件也放在这里.</span>
<span class="token comment"># 可以修改 settings.php 的 VARS_PATH 到其它位置,因为这不安全</span>
├─uploads
├─vendor  <span class="token comment"># composer 组件</span>
├─<span class="token punctuation">.</span>editorconfig  <span class="token comment"># 不同IDE(编辑器)使用相同的编码格式</span>
├─<span class="token punctuation">.</span>gitattributes  <span class="token comment"># GIT 文件属性</span>
├─<span class="token punctuation">.</span>gitignore      <span class="token comment"># GIT 排除文件 </span>
├─<span class="token punctuation">.</span>htaccess       <span class="token comment"># Apache 配置文件</span>
├─<span class="token punctuation">.</span>user<span class="token punctuation">.</span>ini       <span class="token comment"># PHP 配置文件</span>
├─<span class="token function">cli</span>             <span class="token comment"># Linux 下命令行</span>
├─<span class="token function">cli</span><span class="token punctuation">.</span>bat         <span class="token comment"># Windows 下命令行</span>
├─composer<span class="token punctuation">.</span>json   <span class="token comment"># composer</span>
├─composer<span class="token punctuation">.</span>lock   <span class="token comment"># composer</span>
├─config<span class="token punctuation">.</span>yaml     <span class="token comment"># 项目配置文件,例如配置模板文件位置是static/view,  前端配置文件位置是static/config</span>
├─database<span class="token punctuation">.</span>yaml   <span class="token comment"># 数据库连接配置文件</span>
├─database<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>example  <span class="token comment"># 不能直接把 database.yaml 存在git仓库，只能用这个演示文件复制修改</span>
├─dev<span class="token punctuation">.</span>yaml        <span class="token comment"># 开启开发模式              </span>
├─index<span class="token punctuation">.</span>php       <span class="token comment"># 整个项目的入口</span>
├─phpstan<span class="token punctuation">.</span>neon    <span class="token comment"># 规范 PHP 代码,VSCode, PHPStorm 都支持,如果要使用，需要自行配置，这里不写说明</span>
├─phpunit<span class="token punctuation">.</span>xml     <span class="token comment"># PHP 测试使用</span>
├─README<span class="token punctuation">.</span>md       <span class="token comment"># 项目说明</span>
├─serve           <span class="token comment"># 目前不使用。</span>
└─settings<span class="token punctuation">.</span>php    <span class="token comment"># 基础配置</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(b,h){const a=i("RouterLink");return t(),c("div",null,[d,n("div",u,[v,n("p",null,[s("关于 "),l(a,{to:"/zh-CN/v1/reference/migration.html"},{default:o(()=>[s("迁移")]),_:1})])]),r])}const g=e(m,[["render",k],["__file","directory-structure.html.vue"]]);export{g as default};
