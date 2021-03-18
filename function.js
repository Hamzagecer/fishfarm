//  1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?

let bul500UzeriOlanlar = [];

function bulBaliklari500UzeriOlalari() {
    for (let index = 0; index < fishFarm.length; index++) {
        const element = fishFarm[index].stockVolumeInKg
        if (element > 500) {
            bul500UzeriOlanlar.push(fishFarm[index].fishType)
        }
    };
    return console.log("500 kg uzeri olan baliklar" + bul500UzeriOlanlar)
};
bulBaliklari500UzeriOlalari()



// 2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
let fiyatAraligi9Ve12Olan = [];

function bulFiyatAraligi9Ve12Olan() {
    for (let index = 0; index < fishFarm.length; index++) {
        const element = fishFarm[index].price
        if (element >= 9 && element <= 12) {
            fiyatAraligi9Ve12Olan.push(fishFarm[index].fishType)
        }
    };
    return console.log("Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar" + fiyatAraligi9Ve12Olan)
};
bulFiyatAraligi9Ve12Olan()

// 3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?

let kisSezonuVeBerndeBalik = [];

function bulKisSezonuVeBerndeBalik() {
    for (let index = 0; index < fishFarm.length; index++) {
        const character = fishFarm[index].season
        const character1 = fishFarm[index].saleLocations
        if (character == "Winter" && character1 == "BE") {
            kisSezonuVeBerndeBalik.push(fishFarm[index].fishType + " " + fishFarm[index].season + " " + fishFarm[index].saleLocations)

        }
    };
    return console.log("Sadece Bern'de ve kis sezonu satilan baliklar" + kisSezonuVeBerndeBalik)
};
bulKisSezonuVeBerndeBalik()

// 4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)

let baliklarinTarihleri = [];

function bulBaliklarinTarihleri() {
    for (let index = 0; index < fishFarm.length; index++) {
        fishFarm.sort(function (x, y) {
            return x.entryDate - y.entryDate
        });
        baliklarinTarihleri.push(fishFarm[index].fishType + " " + fishFarm[index].entryDate + "/n")

    };
    console.log("sirali" + baliklarinTarihleri)

};
bulBaliklarinTarihleri()

// 5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz. 
function ABdenGelen10FrKucukAlfabetik() {
    let bulABdenGelen10FrKucukAlfabetik = [];
    for (let index = 0; index < fishFarm.length; index++) {
        if (europeanCountry.indexOf(fishFarm[index].originCountry) > 0 && fishFarm[index].price > 10)
            bulABdenGelen10FrKucukAlfabetik.push(fishFarm[index].fishType)
    };
    bulABdenGelen10FrKucukAlfabetik.sort();
    console.log("Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik sirasi" + " " + bulABdenGelen10FrKucukAlfabetik)

};
ABdenGelen10FrKucukAlfabetik()


// 6) Toplam balik stoku ne kadardir?

function toplamStok() {
    let toplam = 0;
    for (let index = 0; index < fishFarm.length; index++) {
        toplam = toplam + fishFarm[index].stockVolumeInKg
    };
    console.log("Toplam balik stogu :" + " " + toplam)
};
toplamStok()


// 7) En pahali olan balik hangisidir?

function enPahaliBalik() {
    let fiyat = 0
    let isim;
    for (let index = 0; index < fishFarm.length; index++) {
        if (fishFarm[index].price > fiyat) {
            fiyat = fishFarm[index].price
            isim = fishFarm[index].fishType
        };
    };
    console.log("En pahali olan balik:" + " " + isim + ", " + "fiyat:" + " " + fiyat)
};
enPahaliBalik()

// 8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?

let EnUzunSureDuranBalik = [];

function bulEnUzunSureDuranBalik() {
    for (let index = 0; index < fishFarm.length; index++) {
        const element = fishFarm[index].durationInDays
        if (element > 25) {
            EnUzunSureDuranBalik.push(fishFarm[index].fishType + " " + fishFarm[index].durationInDays + " " + fishFarm[index].originCountry)
        }
    };
    return console.log("En uzun sureli durabilen baliklar" + EnUzunSureDuranBalik)
};
bulEnUzunSureDuranBalik()

// 9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
function kisVeSonbaharOrtalamaFiyat() {
    let allRegion = 0;
    let all = 0;
    for (let index = 0; index < fishFarm.length; index++) {
        if (fishFarm[index].season == "Winter" || fishFarm[index].season == "Autumn") {
            const kesisim = swissRomandeRegion.filter(element => fishFarm[index].saleLocations.includes(element));
            if (kesisim.length > 0) {
                all = all + fishFarm[index].price;
                allRegion++;
            }
        }
    };
    console.log(Math.floor(all / allRegion))

};
kisVeSonbaharOrtalamaFiyat()

// 10) TC Kantonu icin stokta toplam ne kadar balik mevcuttur?

function TcKantonuStok() {
    let all = 0;
    for (let index = 0; index < fishFarm.length; index++) {
        if (fishFarm[index].saleLocations.includes("TI")) {
            all = all + fishFarm[index].stockVolumeInKg;
        }
    };
    console.log(all)
};
TcKantonuStok()

// 11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?

function yazlikZHDekiOrtalamaGramaj() {
    let allRegion = 0;
    let all = 0;


    for (let index = 0; index < fishFarm.length; index++) {

        if (fishFarm[index].season == "Summer" && europeanCountry.indexOf(fishFarm[index].originCountry) == -1 && fishFarm[index].saleLocations.includes("ZH")) {
            all = all + fishFarm[index].price;
            allRegion++
        }
    };
    console.log(Math.floor(all / allRegion))

};
yazlikZHDekiOrtalamaGramaj()