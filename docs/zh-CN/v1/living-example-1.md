# 实例 1-初始化

[[toc]]

## 关于文档

::: tip
文档使用 Windows 环境,命令行使用 PowerShell 7.3.9
:::
::: tip
考虑到安全，文档中 Git 仓库网址使用 `<GitBase>` 代替,需要自行替换
:::
::: tip
开发环境 Windows+Apache2.4+PHP8.1+MySQL8.0 参考: `<GitBase>/v2/DevServer`
:::

```powershell
$psversiontable.PSVersion
# 7.3.9
php --version
# PHP 8.1.24
composer --version
# 2.6-dev
mysql --version
# 8.0.33
git --version
# 2.42.0
node --version
# v18.18.0
npm --version
# 10.1.0
yarn --version
# 1.22.19
```

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
```powershell
# 导入数据
./cli import 0
```

打开网址 https://localhost/DaCoreExample/ 如果正常会看到一个Blog首页
::: tip
[目录结构](./directory-structure.md)
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

下一步: [实例 2-首页](./living-example-2.md)
