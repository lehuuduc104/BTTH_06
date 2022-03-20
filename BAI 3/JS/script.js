const loi_Chuc = document.querySelector('.loi_chuc')

function Dong_ho() {
    var gio = document.getElementById("gio");
    var phut = document.getElementById("phut");
    var giay = document.getElementById("giay");
    var Gio_hien_tai = new Date().getHours();
    var Phut_hien_tai = new Date().getMinutes();
    var Giay_hien_tai = new Date().getSeconds();
    gio.innerHTML = Gio_hien_tai;
    phut.innerHTML = Phut_hien_tai;
    giay.innerHTML = Giay_hien_tai;

    if(Gio_hien_tai>= 0 && Gio_hien_tai <12 ){
        loi_Chuc.textContent = 'Chào Buổi Sáng';
    }
    if(Gio_hien_tai>= 12 && Gio_hien_tai <17 ){
        loi_Chuc.textContent = 'Chào Buổi Chiều';
    }
    if(Gio_hien_tai>= 17 && Gio_hien_tai <23 ){
        loi_Chuc.textContent = 'Chào Buổi Tối';
    }
}

setInterval(Dong_ho);

