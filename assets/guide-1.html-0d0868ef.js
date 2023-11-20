import{_ as i,r as o,o as p,c as d,a as s,d as n,b as e,w as l,e as t}from"./app-c32aa151.js";const r={},u=t(`<h1 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h1><h2 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化" aria-hidden="true">#</a> 项目初始化</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># cd D:\\DevServer\\www\\php81</span>
<span class="token comment"># 克隆DaCore到项目目录 DaCoreExample</span>
git clone <span class="token operator">--</span>depth=1 <span class="token operator">--</span>branch=v0<span class="token punctuation">.</span>7<span class="token punctuation">.</span>1 &lt;GitBase&gt;<span class="token operator">/</span>v2/DaCore<span class="token punctuation">.</span>git DaCoreExample
<span class="token comment"># 切换到项目目录</span>
cd DaCoreExample
<span class="token comment"># 创建并切换到 dev 分支 </span>
git <span class="token keyword">switch</span> <span class="token operator">-</span>c dev
<span class="token comment"># 克隆 uploads 目录,注意版本要和DaCore相同，uploads分开为了节省 Git 磁盘空间</span>
git clone <span class="token operator">--</span>depth=1 <span class="token operator">--</span>branch=v0<span class="token punctuation">.</span>7<span class="token punctuation">.</span>1  &lt;GitBase&gt;<span class="token operator">/</span>v2/DaCoreUploads<span class="token punctuation">.</span>git uploads
<span class="token comment"># 删除 uploads下的 .git</span>
<span class="token function">Remove-Item</span> <span class="token operator">-</span>Path uploads/<span class="token punctuation">.</span>git <span class="token operator">-</span>Force <span class="token operator">-</span>Recurse
<span class="token comment"># 如果是Linux,修改uploads权限，因为是Windows下的文档，后边会忽略权限说明</span>
<span class="token comment"># chmod -R 0777 uploads</span>
<span class="token comment"># Composer 安装组件,如果没有composer81 自行安装composer并新建个composer81.bat 使用 php8.1执行composer</span>
<span class="token comment"># WinDevServer 已有composer81命令</span>
composer81 install

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),m={class:"custom-container tip"},v=s("p",{class:"custom-container-title"},"TIP",-1),h=t(`<h2 id="初始化数据库" tabindex="-1"><a class="header-anchor" href="#初始化数据库" aria-hidden="true">#</a> 初始化数据库</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 新建数据库 da_core_example_project</span>
mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p <span class="token operator">-</span>e <span class="token string">&quot;create database da_core_example_project default character set utf8mb4 collate utf8mb4_general_ci;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>复制 database.yaml.example 为 database.yaml 并修改数据库连接设定</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># database.yaml</span>
<span class="token key atrule">host</span><span class="token punctuation">:</span> 127.0.0.1
<span class="token key atrule">port</span><span class="token punctuation">:</span> &lt;端口<span class="token punctuation">&gt;</span>
<span class="token key atrule">dbname</span><span class="token punctuation">:</span> &lt;数据库名称<span class="token punctuation">&gt;</span>
<span class="token key atrule">user</span><span class="token punctuation">:</span> &lt;用户名<span class="token punctuation">&gt;</span>
<span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&#39;密码&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),k={class:"custom-container tip"},b=s("p",{class:"custom-container-title"},"TIP",-1),g={href:"https://www.php.net/manual/zh/book.yaml.php",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 导入数据</span>
<span class="token punctuation">.</span><span class="token operator">/</span><span class="token function">cli</span> import 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),y={class:"custom-container tip"},f=s("p",{class:"custom-container-title"},"TIP",-1),w=s("p",null,"打开网址 https://localhost/DaCoreExample/ 如果正常会看到一个Blog首页",-1),x={class:"custom-container tip"},C=s("p",{class:"custom-container-title"},"TIP",-1),B=t(`<p>生成超级密码</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token punctuation">.</span><span class="token operator">/</span><span class="token function">cli</span> super:hash 電子@信箱<span class="token punctuation">.</span>com <span class="token string">&#39;密碼&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改 <code>App/Modules/Settings/Config/config.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">super</span><span class="token punctuation">:</span>
  <span class="token key atrule">hash</span><span class="token punctuation">:</span> <span class="token string">&#39;这里是生成的超级密码&#39;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>开启开发模式,开发模式会禁用一些缓存等。 新建 <code>dev.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># /dev.yaml</span>
<span class="token key atrule">development</span><span class="token punctuation">:</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用超级密码登录 https://localhost/DaCoreExample/newadmin</p><p>清理旧数据</p><ul><li>删除 uploads下除.htaccess外的其它文件</li><li>改名 static 为 static_copy (可以删除，改名是为了可以查看一些代码使用)</li><li>重建文件夹 <code>static/view</code> ,<code>static/config</code></li></ul>`,9),D={class:"custom-container tip"},N=s("p",{class:"custom-container-title"},"TIP",-1),I=t(`<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 删除博客相关数据表,Blog是App\\Modules\\Blog这个模块文件夹名称</span>
<span class="token punctuation">.</span><span class="token operator">/</span><span class="token function">cli</span> module:down Blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 App/Modules/Blog/Config/blog.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">blog</span><span class="token punctuation">:</span>
  <span class="token comment"># 关闭 Blog文章</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 App/Modules/Blog/Config/blog_categories.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">blog_categories</span><span class="token punctuation">:</span>
  <span class="token comment"># 关闭 Blog文章分类</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function E(z,P){const a=o("RouterLink"),c=o("ExternalLinkIcon");return p(),d("div",null,[u,s("div",m,[v,s("ul",null,[s("li",null,[n("关于 "),e(a,{to:"/zh-CN/v1/reference/composer.html"},{default:l(()=>[n("Composer")]),_:1})]),s("li",null,[n("关于 "),e(a,{to:"/zh-CN/v1/reference/git.html"},{default:l(()=>[n("GIT")]),_:1})]),s("li",null,[n("关于 "),e(a,{to:"/zh-CN/v1/reference/powershell.html"},{default:l(()=>[n("PowerShell")]),_:1})])])]),h,s("div",k,[b,s("p",null,[n("关于 "),s("a",g,[n("yaml"),e(c)])])]),_,s("div",y,[f,s("p",null,[n("关于"),e(a,{to:"/zh-CN/v1/reference/cli.html"},{default:l(()=>[n("命令行cli")]),_:1})])]),w,s("div",x,[C,s("p",null,[e(a,{to:"/zh-CN/v1/reference/directory-structure.html"},{default:l(()=>[n("目录结构")]),_:1})])]),B,s("div",D,[N,s("p",null,[n("关闭博客"),e(a,{to:"/zh-CN/v1/reference/module.html"},{default:l(()=>[n("模块")]),_:1}),n(",卸载博客相关数据表方法:")]),I])])}const L=i(r,[["render",E],["__file","guide-1.html.vue"]]);export{L as default};
