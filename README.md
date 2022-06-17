# DienTu_API

This project will create DienTu_Shop's API

# Author

- **Name:** Dang Tran Lam
- **Class:** CDTH19 PMD
- **School:** Cao Thang Technical College

# Guide

## 1. Setting

- First, you need to download this project. [**Download git**](https://git-scm.com/downloads). After setting up **git** you run _git bash_ or use _Terminal_ of **VSCode**, type `git clone`. Or just  download _zip_ file from [my repository on github](https://github.com/tlamxyn/DienTu_API)
- Second, you need to download [**_Xampp_**](https://www.apachefriends.org/download.html). Open **_Xampp_**, start _Apache_ and _Mysql_

## 2. Migration

After setting basic things, you need to create database for them. By running `yarn migrate`, database will be created automatically for you.

See more in file [**package.json**](https://github.com/tlamxyn/DienTu_API/blob/main/package.json)

Because of my skill lacking in nodejs, you need to write twice `yarn migrate` for completing database migration. In the first run, database will be created but it's tables. In the last run, all the tables will be created, include their constraints.


