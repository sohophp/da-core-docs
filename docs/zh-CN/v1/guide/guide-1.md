---
prev: ./index.md
next: guide-2.md
---

# 初始化

## 项目初始化

```powershell
# cd D:\DevServer\www\php81
# 克隆DaCore到项目目录 DaCoreExample
git clone --depth=1 --branch=v0.7.1 <GitBase>/v2/DaCore.git DaCoreExample
# 切换到项目目录
cd DaCoreExample
# 创建并切换到 dev 分支 
git switch -c dev
# 克隆 uploads 目录,注意版本要和DaCore相同，uploads分开为了节省 Git 磁盘空间
git clone --depth=1 --branch=v0.7.1  <GitBase>/v2/DaCoreUploads.git uploads
# 删除 uploads下的 .git
Remove-Item -Path uploads/.git -Force -Recurse
# 如果是Linux,修改uploads权限，因为是Windows下的文档，后边会忽略权限说明
# chmod -R 0777 uploads
# Composer 安装组件,如果没有composer81 自行安装composer并新建个composer81.bat 使用 php8.1执行composer
# WinDevServer 已有composer81命令
composer81 install

```
::: tip
- 关于 [Composer](../reference/composer.md)
- 关于 [GIT](../reference/git.md) 
- 关于 [PowerShell](../reference/powershell.md)
:::

## 初始化数据库

 ```powershell
 # 新建数据库 da_core_example_project
 mysql -uroot -p -e "create database da_core_example_project default character set utf8mb4 collate utf8mb4_general_ci;"
 ```

复制 database.yaml.example 为 database.yaml 并修改数据库连接设定

```yaml
# database.yaml
host: 127.0.0.1
port: <端口>
dbname: <数据库名称>
user: <用户名>
password: '密码'
```
::: tip
关于 [yaml](https://www.php.net/manual/zh/book.yaml.php)
:::

```powershell
# 导入数据
./cli import 0
```
::: tip
关于[命令行cli](../reference/cli.md)
:::

打开网址 https://localhost/DaCoreExample/ 如果正常会看到一个Blog首页
::: tip
[目录结构](../reference/directory-structure.md)
:::

生成超级密码

```powershell
./cli super:hash 電子@信箱.com '密碼'
```
修改 `App/Modules/Settings/Config/config.yaml` 
```yaml{2}
super:
  hash: '这里是生成的超级密码'
```
开启开发模式,开发模式会禁用一些缓存等。
新建 `dev.yaml`

```yaml
# /dev.yaml
development: 1
```

使用超级密码登录
https://localhost/DaCoreExample/newadmin


清理旧数据  
- 删除 uploads下除.htaccess外的其它文件
- 改名 static 为 static_copy (可以删除，改名是为了可以查看一些代码使用)
- 重建文件夹 `static/view` ,`static/config`

::: tip
关闭博客[模块](../reference/module.md),卸载博客相关数据表方法:
```powershell
# 删除博客相关数据表,Blog是App\Modules\Blog这个模块文件夹名称
./cli module:down Blog
```
修改 App/Modules/Blog/Config/blog.yaml
```yaml
blog:
  # 关闭 Blog文章
  enable: 0
```
修改 App/Modules/Blog/Config/blog_categories.yaml
```yaml
blog_categories:
  # 关闭 Blog文章分类
  enable: 0
```
:::
