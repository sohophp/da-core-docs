# 文件结构

::: tip
关于 [迁移](../reference/migration.md)
:::

```powershell
# PHP程序目录
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
   ├─Model          # Model 虽然不应该简单把 Model 理解为数据库操作，但目前用到的只是默认数据库连接的表操作，每个model对应一个数据表
   ├─Modules        # 所有模块解耦
   ├─RouteTables    # 路由表
   ├─Templates      # 只有一个404.twig 默认NotFound模板
   ├─Versions       # 数据库更新升级已上线的项目会用到详见#TIP1迁移
   ├─.htaccess      # 禁止直接浏览 App 目录里的PHP文件
   ├─404.twig       # 非必要
   ├─bootstrap.php  # 初始设置程序从这里开始
   └─Functions.php  # 一些常用方法
├─resources # 存放一些js,css等静态资源，主要用于后台使用，包含ckeditor,ckfinder
└─static # 存放前台使用的css,js,images等，包含twig模板文件，和yaml配置文件
  └─config  一些留给前端可以自行修改的配置.
    └─translations  前端用到的需要后台翻译的文字
  ├─view    前端可以修改的twig模板文件.通常是复制HTML到这里修改的。
  ├─HTML   （非必要）前端的 *.html 放这里，
  ├─images （非必要）前端的图片，命名只是因为常用
  ├─css    （非必要）前端的 css ，命名只是因为常用
  ├─js      （非必要）前端的 js , 命名只是因为常用
├─Tests # 测试程序目录
# 可写目录，存放上传的文件或者图片等，
# 为了 server 安装方便，PHP缓存文件也放在这里.
# 可以修改 settings.php 的 VARS_PATH 到其它位置,因为这不安全
├─uploads
├─vendor  # composer 组件
├─.editorconfig  # 不同IDE(编辑器)使用相同的编码格式
├─.gitattributes  # GIT 文件属性
├─.gitignore      # GIT 排除文件 
├─.htaccess       # Apache 配置文件
├─.user.ini       # PHP 配置文件
├─cli             # Linux 下命令行
├─cli.bat         # Windows 下命令行
├─composer.json   # composer
├─composer.lock   # composer
├─config.yaml     # 项目配置文件,例如配置模板文件位置是static/view,  前端配置文件位置是static/config
├─database.yaml   # 数据库连接配置文件
├─database.yaml.example  # 不能直接把 database.yaml 存在git仓库，只能用这个演示文件复制修改
├─dev.yaml        # 开启开发模式              
├─index.php       # 整个项目的入口
├─phpstan.neon    # 规范 PHP 代码,VSCode, PHPStorm 都支持,如果要使用，需要自行配置，这里不写说明
├─phpunit.xml     # PHP 测试使用
├─README.md       # 项目说明
├─serve           # 目前不使用。
└─settings.php    # 基础配置

```
