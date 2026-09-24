const danhSachSanPham = [
    { ten: "Áo", gia: 550000, img: "anhThoitrangcuaHai/aoblack.webp" },
    { ten: "Quần", gia: 550000, img: "anhThoitrangcuaHai/quanblack.webp" },
    { ten: "Sets", gia: 990000, img: "anhThoitrangcuaHai/fullset.webp" }
];

function doiSanPham() {
    let select = document.getElementById("productSelect").value;
    let img = document.getElementById("productImg");
    let name = document.getElementById("productName");
    let priceText = document.getElementById("productPriceText");

    if (select === "ao") {
        img.src = danhSachSanPham[0].img;
        name.innerText = danhSachSanPham[0].ten;
        priceText.innerText = "Giá: " + danhSachSanPham[0].gia + " VNĐ";
    } else if (select === "quan") {
        img.src = danhSachSanPham[1].img;
        name.innerText = danhSachSanPham[1].ten;
        priceText.innerText = "Giá: " + danhSachSanPham[1].gia + " VNĐ";
    } else if (select === "set") {
        img.src = danhSachSanPham[2].img;
        name.innerText = danhSachSanPham[2].ten;
        priceText.innerText = "Giá: " + danhSachSanPham[2].gia + " VNĐ";
    }
}

function tinhTien() {
    let select = document.getElementById("productSelect").value;
    let soLuong = parseInt(document.getElementById("quantity").value) || 0;
    let gia = 0;

    if (select === "ao") {
        gia = danhSachSanPham[0].gia;
    } else if (select === "quan") {
        gia = danhSachSanPham[1].gia;
    } else if (select === "set") {
        gia = danhSachSanPham[2].gia;
    }

    let tienHang = gia * soLuong;
    let giamGia = 0;

    if (tienHang >= 500000) {
        giamGia = tienHang * 0.1;
    }

    let phaiTra = tienHang - giamGia;

    document.getElementById("tienHang").innerText =
        tienHang.toLocaleString("vi-VN") + " VNĐ";

    document.getElementById("giamGia").innerText =
        giamGia.toLocaleString("vi-VN") + " VNĐ";

    document.getElementById("phaiTra").innerText =
        phaiTra.toLocaleString("vi-VN") + " VNĐ";
}

function doiMau(mau) {
    document.body.style.backgroundColor = mau;
}

function xemBangGia() {
    let container = document.getElementById("bangGiaList");

    let html = `
        <table class="price-table">
            <thead>
                <tr>
                    <th>Sản phẩm</th>
                    <th>Giá gốc</th>
                    <th>Sale 10%</th>
                    <th>Giá sau sale</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let i = 0; i < danhSachSanPham.length; i++) {

        let giaGoc = danhSachSanPham[i].gia;
        let giamGia = giaGoc * 0.1;
        let giaSauSale = giaGoc - giamGia;

        html += `
            <tr>
                <td>${danhSachSanPham[i].ten}</td>
                <td>${giaGoc.toLocaleString("vi-VN")} VNĐ</td>
                <td class="sale">
                    -${giamGia.toLocaleString("vi-VN")} VNĐ
                </td>
                <td class="final-price">
                    ${giaSauSale.toLocaleString("vi-VN")} VNĐ
                </td>
            </tr>
        `;
    }

    html += `
            </tbody>
        </table>
    `;

    container.innerHTML = html;
}