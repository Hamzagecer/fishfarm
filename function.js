// Cabbar, Kerem ve Sinan ortaklasa balik ciftligi projesine girerler. Cabbar ve Keremin referansi ile Sinan da bizlerden bir program istemektedir.
// Uc kafadar bizden ciftlikteki baliklarin satisi icin bir online sistem istemektedirler. Online satis sistemi asagidaki sorulara cevap verebilmelidir.

// 1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
// 2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
// 3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
// 4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
// 5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
// 6) Toplam balik stoku ne kadardir?
// 7) En pahali olan balik hangisidir?
// 8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
// 9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
// 10) TC Kantonu icin stokta toplam ne kadar balik mevcuttur?
// 11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?

// 1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?

let bul500UzeriOlanlar = [];
function bulBaliklari500UzeriOlalari(){
    for(let index = 0; index < fishFarm.length; index++){
        const element = fishFarm[index].stockVolumeInKg
        if (element > 500){
            bul500UzeriOlanlar.push(fishFarm[index].fishType)
        }
    };
    return console.log("500 kg uzeri olan baliklar" + bul500UzeriOlanlar )
};
bulBaliklari500UzeriOlalari()



// 2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
let fiyatAraligi9Ve12Olan= [];
function bulFiyatAraligi9Ve12Olan(){
    for(let index = 0; index < fishFarm.length; index++){
        const element = fishFarm[index].price
        if (element >=9 && element <=12){
            fiyatAraligi9Ve12Olan.push(fishFarm[index].fishType)
        }
    };
    return console.log("Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar" + fiyatAraligi9Ve12Olan )
};
bulFiyatAraligi9Ve12Olan()

// 3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?

let bernDeSatılanWinter= [];

function bulbernDeSatılanWinter(){
    for(let index = 0; index < fishFarm.length; index++){
        const element = fishFarm[index].season
        const elemennt = fishFarm[index].saleLocations
        if ((element = season) && (elemennt=saleLocations)){
            bernDeSatılanWinter.push(fishFarm[index].fishType)
        }
    };
    return console.log("Sadece Bern'de ve kis sezonu satilan baliklar" + bernDeSatılanWinter )
};
bulbernDeSatılanWinter()