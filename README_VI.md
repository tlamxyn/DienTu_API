# DienTu_API

Project nay sẽ tạo API cho DienTu_Shop Project

# Tác giả

- **Tên:** Đặng Trần Lam
- **Lớp:** CDTH19 PMD
- **Trường:** Cao Đẳng Kỹ thuật Cao Thắng

# Hướng dẫn

## 1. Cài đặt

- Đầu tiên là tải project này về bằng cách [**Download git**](https://git-scm.com/downloads). Sau khi cài đặt **git** chạy _git bash_ hoặc dùng _Terminal_ của **VSCode**, type `git clone`. Or just  download _zip_ file from [my repository on github](https://github.com/tlamxyn/DienTu_API)
- Sau đó, bạn phải tải và cài đặt [**_Xampp_**](https://www.apachefriends.org/download.html). Mở **_Xampp_**, nhấn nút start _Apache_ và start _Mysql_

## 2. Migration

Sau khi bước cài đặt hoàn tất, cần tạo dadabase. Chạy lệnh `yarn migrate` trong Terminal, database sẽ tạo bảng cho project (Lúc này cần mở sẫn Apache và MySql của Xampp)

Xem thêm ở file [**package.json**](https://github.com/tlamxyn/DienTu_API/blob/main/package.json)

Vì khả năng yếu kém của tôi, bạn phải chạy lệnh `yarn migrate` hai lần mới có thể hoàn thành migration. Trong lần chạy đầu tiên, chỉ có database được tạo. Trong lần chạy thứ 2, các bảng và constraint của bảng mới được hoàn thành


