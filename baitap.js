// Định nghĩa lớp SinhVien
class SinhVien {
    constructor(maSV, hoTen, ngaySinh, lopHoc, diemGPA) {
        this.maSV = maSV;
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.lopHoc = lopHoc;
        this.diemGPA = diemGPA;
    }

    // Method để cập nhật thông tin sinh viên
    capNhatThongTin(maSV, hoTen, ngaySinh, lopHoc, diemGPA) {
        this.maSV = maSV;
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.lopHoc = lopHoc;
        this.diemGPA = diemGPA;
    }

    // Method để hiển thị thông tin sinh viên
    hienThiThongTin() {
        console.log(`Mã SV: ${this.maSV}, Họ và tên: ${this.hoTen}, Ngày sinh: ${this.ngaySinh}, Lớp học: ${this.lopHoc}, GPA: ${this.diemGPA}`);
    }
}

// Hàm để yêu cầu người dùng nhập số lượng sinh viên
function nhapSoLuongSV() {
    let soLuong = parseInt(prompt("Nhập số lượng sinh viên:"));
    return soLuong;
}

// Hàm để tạo danh sách sinh viên
function taoDanhSachSinhVien() {
    let soLuong = nhapSoLuongSV();
    let danhSachSinhVien = [];
    for (let i = 0; i < soLuong; i++) {
        let maSV = prompt("Nhập mã sinh viên:");
        let hoTen = prompt("Nhập họ và tên:");
        let ngaySinh = prompt("Nhập ngày sinh:");
        let lopHoc = prompt("Nhập lớp học:");
        let diemGPA = parseFloat(prompt("Nhập điểm GPA:"));
        danhSachSinhVien.push(new SinhVien(maSV, hoTen, ngaySinh, lopHoc, diemGPA));
    }
    return danhSachSinhVien;
}

// Hàm để hiển thị thông tin danh sách sinh viên
function hienThiDanhSachSinhVien(danhSachSinhVien) {
    console.log("Danh sách sinh viên:");
    danhSachSinhVien.forEach(sv => sv.hienThiThongTin());
}

// Chương trình chính
function main() {
    let danhSachSinhVien = taoDanhSachSinhVien();
    hienThiDanhSachSinhVien(danhSachSinhVien);
}

// Gọi hàm chính để thực thi chương trình
main();