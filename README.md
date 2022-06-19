# DienTu_API

Project nay sẽ tạo API cho DienTu_Shop Project

# TÁC GIẢ

- **Tên:** Đặng Trần Lam
- **Lớp:** CDTH19 PMD
- **Trường:** Cao Đẳng Kỹ thuật Cao Thắng

# HƯỚNG DẪN

## 1. Cài đặt

- Đầu tiên là tải project này về bằng cách [**Download git**](https://git-scm.com/downloads). Sau khi cài đặt **git** chạy _git bash_ hoặc dùng _Terminal_ của **VSCode**, type `git clone`. Or just  download _zip_ file from [my repository on github](https://github.com/tlamxyn/DienTu_API)
- Sau đó, bạn phải tải và cài đặt [**_Xampp_**](https://www.apachefriends.org/download.html). Mở **_Xampp_**, nhấn nút start _Apache_ và start _Mysql_

## 2. Migrate

Sau khi bước cài đặt hoàn tất, cần tạo dadabase. Chạy lệnh `yarn migrate` trong Terminal, database sẽ tạo bảng cho project (Lúc này cần mở sẫn Apache và MySql của Xampp)

Xem thêm ở file [**package.json**](https://github.com/tlamxyn/DienTu_API/blob/main/package.json)

Vì khả năng yếu kém của tôi, bạn phải chạy lệnh `yarn migrate` hai lần mới có thể hoàn thành migration. Trong lần chạy đầu tiên, chỉ có database được tạo. Trong lần chạy thứ 2, các bảng và constraint của bảng mới được hoàn thành. Việc thoát console ta làm thủ công bằng cách dùng `Ctrl + C` ở **Terminal** nếu chúng không thoát tự động

## 3. Seed

Sau khi migration đã được hoàn tất, chuyển sang seeding cho database. Gõ strong _Terminal_ lệnh `yarn seed` và đợi đến khi nó chạy xong. Để thực hiện giai đoạn này, **_Apache_** và **_MySQLServer_** của **_Xampp_** phải chạy.

# Chạy API

Sau khi hoàn thành bước HƯỚNG DẪN. Vào _Terminal_ gõ lệnh `yarn dev`. Vậy là ta đã có api server đang hoạt động. Giờ chỉ còn gọi api trên app mobile thôi.
