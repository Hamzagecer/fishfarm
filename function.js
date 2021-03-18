// // // Cabbar, Kerem ve Sinan ortaklasa balik ciftligi projesine girerler. Cabbar ve Keremin referansi ile Sinan da bizlerden bir program istemektedir.
// // // Uc kafadar bizden ciftlikteki baliklarin satisi icin bir online sistem istemektedirler. Online satis sistemi asagidaki sorulara cevap verebilmelidir.

// // // 1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
// // // 2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
// // // 3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
// // // 4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
// // // 5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
// // // 6) Toplam balik stoku ne kadardir?
// // // 7) En pahali olan balik hangisidir?
// // // 8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
// // // 9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
// // // 10) TC Kantonu icin stokta toplam ne kadar balik mevcuttur?
// // // 11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?

// //  1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?

// let bul500UzeriOlanlar = [];
// function bulBaliklari500UzeriOlalari(){
//     for(let index = 0; index < fishFarm.length; index++){
//         const element = fishFarm[index].stockVolumeInKg
//         if (element > 500){
//             bul500UzeriOlanlar.push(fishFarm[index].fishType)
//         }
//     };
//     return console.log("500 kg uzeri olan baliklar" + bul500UzeriOlanlar )
// };
// bulBaliklari500UzeriOlalari()



//  // 2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
// let fiyatAraligi9Ve12Olan= [];
// function bulFiyatAraligi9Ve12Olan(){
//     for(let index = 0; index < fishFarm.length; index++){
//         const element = fishFarm[index].price
//         if (element >=9 && element <=12){
//             fiyatAraligi9Ve12Olan.push(fishFarm[index].fishType)
//         }
//     };
//     return console.log("Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar"  +fiyatAraligi9Ve12Olan )
// };
// bulFiyatAraligi9Ve12Olan()

//  // 3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?

// let kisSezonuVeBerndeBalik=[];
// function bulKisSezonuVeBerndeBalik(){
//     for(let index=0; index<fishFarm.length; index++){
//         const element=fishFarm[index].season
//         const element1=fishFarm[index].saleLocations
//         if (season=="Winter" && saleLocations=="BE"){
//             kisSezonuVeBerndeBalik.push(fishFarm[index].fishType)
//         }
//     };
//     return console.log("Sadece Bern'de ve kis sezonu satilan baliklar" + kisSezonuVeBerndeBalik )
// };
// bulKisSezonuVeBerndeBalik()

// // 4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)

// let baliklarinTarihleri=[];
// function bulBaliklarinTarihleri(){
//     for(let index=0; index<fishFarm.length; index++){
//         fishFarm.sort(function(x,y){
//             return x.entryDate-y.entryDate
//         });
//             baliklarinTarihleri.push(fishFarm[index].fishType + " " + fishFarm[index].entryDate + "/n")
        
//     };
//         console.log("sirali"+baliklarinTarihleri)
        
//     };
//     bulBaliklarinTarihleri()

//     // 5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz. 



//     // 6) Toplam balik stoku ne kadardir?

//     function toplamStok(){
//         let toplam=0;
//         for(let index=0; index<fishFarm.length; index++){
//             toplam=toplam+fishFarm[index].stockVolumeInKg
//         };
//             console.log("Toplam balik stoku"+toplam)
//     };
//     toplamStok()


    // 7) En pahali olan balik hangisidir?

        function enPahaliBalik(){
                let fiyat=0
                let isim;
                for(let index=0; index<fishFarm.length; index++){
                    if(fishFarm[index].price>fiyat){
                        fiyat=fishFarm[index].price
                        isim=fishFarm[index].fishType
                    };
        };
        console.log("En pahali olan balik"+" "+fiyat+" "+"cinsi"+isim)
    };
        enPahaliBalik()