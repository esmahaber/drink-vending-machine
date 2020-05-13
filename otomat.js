let icecek_yok = 0;
let para_yok = 1;
let para_atildi = 2;
let icecek_satildi = 3;
let durum = para_yok;
let icecekSayac = 0;


class Otomat {

    otomat = (icecekSayac) => {
        var icecekSayac = icecekSayac;
        if (icecekSayac > 0) {
            durum = para_yok;
        }
    }

    paraAt = () => {
        if (durum == para_atildi) {
            console.log("Para zaten atıldı")
            document.getElementById("bilgi").innerHTML="Para zaten atıldı";
        } else if (durum == para_yok) {
            durum = para_atildi;
            console.log("Para atıldı")
            document.getElementById("bilgi").innerHTML="Para atıldı"
        } else if (durum == icecek_yok) {
            console.log("Otomatta içecek yok")
            document.getElementById("bilgi").innerHTML="Otomatta içecek yok"
        } else if (durum == icecek_satildi) {
            durum = para_atildi;
            console.log("Lütfen bekleyin içecek hazırlanıyor...")
            document.getElementById("bilgi").innerHTML="Lütfen bekleyin içecek hazırlanıyor..."
        }
    }


    paraIadeEt = () => {
        if (durum == para_atildi) {
            console.log("Para iade edildi");
            durum = para_yok;
            document.getElementById("bilgi").innerHTML="Para iade edildi"
        } else if (durum == para_yok) {
            console.log("Para atılmamış")
            document.getElementById("bilgi").innerHTML="Para atılmamış"
        } else if (durum == icecek_satildi) {
            console.log("İçeçeği almıştınız")
            document.getElementById("bilgi").innerHTML="İçeçeği almıştınız"
        } else if (durum == icecek_yok) {
            console.log("İçecek yok para atmayınız.")
            document.getElementById("bilgi").innerHTML="İçecek yok para atmayınız."
        }
    }

    calis = () => {
        if (durum == icecek_satildi) {
            console.log("Para atmanız gerekmektedir.")
            document.getElementById("bilgi").innerHTML="Para atmanız gerekmektedir."
        } else if (durum == para_yok) {
            console.log("Parasız çalışmaz")
            document.getElementById("bilgi").innerHTML="Parasız çalışmaz"
        } else if (durum == icecek_yok) {
            console.log("Otomatta içecek yok")
            document.getElementById("bilgi").innerHTML="Otomatta içecek yok"
        } else if (durum == para_atildi) {
            durum = icecek_satildi;
            console.log("Lütfen bekleyin içecek hazırlanıyor...")
            document.getElementById("bilgi").innerHTML="Lütfen bekleyin içecek hazırlanıyor..."
            this.icecekVer();
        }
    }

    icecekVer() {
        if (durum == icecek_satildi) {
            console.log("İçecek hazır.")
            document.getElementById("bilgi").innerHTML="İçecek hazır."
            icecekSayac--;
            if (icecekSayac === 0) {
                console.log("İçecek yok")
                document.getElementById("bilgi").innerHTML="İçecek yok"
                durum = icecek_yok;
            } else durum = para_yok
        } else if (durum == para_yok) {
            console.log("Lütfen para atınız")
            document.getElementById("bilgi").innerHTML="Lütfen para atınız"
        } else if (durum == icecek_yok) {
            console.log("İçecek kalmadı")
            document.getElementById("bilgi").innerHTML="İçecek kalmadı"
            this.paraIadeEt;
        } else if (durum == para_atildi) {
            console.log("İçecek verilemedi")
            document.getElementById("bilgi").innerHTML="İçecek verilemedi"
            this.paraIadeEt;
        } 
    }
    
}

let paraAt = new Otomat();
let calis = new Otomat();
let otomat = new Otomat();



icecekEkle =() => {
    icecekSayac = document.getElementById("icecekSayaci").value;
    otomat.otomat(icecekSayac);
}