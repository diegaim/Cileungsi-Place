/*jshint browser:true */
function direc(a) {
    if (navigator !== null) {
        if (navigator.geolocation) {
        var options = {                
                 timeout: 15000,
                 maximumAge: 0
         };
         try {
                 navigator.geolocation.getCurrentPosition(function (position) {
                        // do something with: position.coords.latitude & position.coords.longitude
                        window.location = 'https://maps.google.co.id/maps?saddr=' + position.coords.latitude + ',' + position.coords.longitude + '&daddr='+a;
                  }, function () {
                        // position not found
                        alert('Tidak dapat menemukan lokasi! Kesalahan pada GPS!');
                  }, options);
          } catch (e) {
              // ooops
              alert('Tidak dapat menemukan lokasi! Kesalahan pada GPS!');
            }
        }
        }
}

function map(b){
    window.location ='https://www.google.co.id/maps/place/'+b;
}

function call(c){
    if (c!=null){
        window.location.href='tel:'+c;
    } else {
        alert('Maaf, nomor telepon tidak tersedia');
    }
}


/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {    
        /* listitem  Pendidikan */
    $(document).on("click", ".uib_w_21", function(evt)
    {
         /*global activate_page */
         activate_page("#pendidikan"); 
    });
    
        /* button  Cari Tempat */
    $(document).on("click", ".uib_w_17", function(evt)
    {
         /*global activate_page */
         activate_page("#kategori"); 
    });
        /* button  Home */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  Help */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         /*global activate_page */
         activate_page("#Help"); 
    });
        
        /* button  Keluar */
    $(document).on("click", ".uib_w_105", function(evt)
    {
        /* your code goes here */
        var r=confirm('Yakin ingin keluar?');
        if (r==true){
            navigator.app.exitApp();
        }else{
        }
    });
    
        /* button  #al-fatah-call */
    $(document).on("click", "#al-fatah-call", function(evt)
    {
        /* your code goes here */ 
        call();
    });
    
        /* button  #al-fatah-map */
    $(document).on("click", "#al-fatah-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.383,106.9742');
    });
    
        /* button  #al-fatah-direc */
    $(document).on("click", "#al-fatah-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.383,106.9742');
    });
    
        /* button  #al-khoeriyah2-call */
    $(document).on("click", "#al-khoeriyah2-call", function(evt)
    {
        /* your code goes here */ 
        call();
    });
    
        /* button  #al-khoeriyah2-map */
    $(document).on("click", "#al-khoeriyah2-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.7049,106.863');
    });
    
        /* button  #al-khoeriyah2-direc */
    $(document).on("click", "#al-khoeriyah2-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.7049,106.863');
    });
    
        /* button  #al-mubarokah-call */
    $(document).on("click", "#al-mubarokah-call", function(evt)
    {
        /* your code goes here */ 
        call();
    });
    
        /* button  #al-mubarokah-map */
    $(document).on("click", "#al-mubarokah-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.4059,106.9549');
    });
    
        /* button  #al-mubarokah-direc */
    $(document).on("click", "#al-mubarokah-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.4059,106.9549');
    });
    
        /* button  #arrahmah-call */
    $(document).on("click", "#arrahmah-call", function(evt)
    {
        /* your code goes here */ 
        call();
    });
    
        /* button  #arrahmah-map */
    $(document).on("click", "#arrahmah-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.6487,106.8771');
    });
    
        /* button  #arrahmah-direc */
    $(document).on("click", "#arrahmah-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.6487,106.8771');
    });
    
        /* button  #dayatussalam-call */
    $(document).on("click", "#dayatussalam-call", function(evt)
    {
        /* your code goes here */ 
        call();
    });
    
        /* button  #dayatussalam-map */
    $(document).on("click", "#dayatussalam-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.4376,106.9593');
    });
    
        /* button  #dayatussalam-direc */
    $(document).on("click", "#dayatussalam-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.4376,106.9593');
    });
    
        /* button  #tarbiyatusshibyan-call */
    $(document).on("click", "#tarbiyatusshibyan-call", function(evt)
    {
        /* your code goes here */ 
        call();
    });
    
        /* button  #tarbiyatusshibyan-map */
    $(document).on("click", "#tarbiyatusshibyan-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.3964,106.9847');
    });
    
        /* button  #tarbiyatusshibyan-direc */
    $(document).on("click", "#tarbiyatusshibyan-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.3964,106.9847');
    });
    
        /* button  #yatalatop-call */
    $(document).on("click", "#yatalatop-call", function(evt)
    {
        /* your code goes here */ 
        call();
    });
    
        /* button  #yatalatop-map */
    $(document).on("click", "#yatalatop-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.446291,106.979963');
    });
    
        /* button  #yatalatop-direc */
    $(document).on("click", "#yatalatop-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.446291,106.979963');
    });
    
        /* button  #al-azra-call */
    $(document).on("click", "#al-azra-call", function(evt)
    {
        /* your code goes here */ 
        call();
    });
    
        /* button  #al-azra-map */
    $(document).on("click", "#al-azra-map", function(evt)
    {
        /* your code goes here */
        map('-33.7243202,-16.0661341,12');
    });
    
        /* button  #al-azra-direc */
    $(document).on("click", "#al-azra-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-33.7243202,-16.0661341,12');
    });
    
        /* button  #al-hasaniyah-call */
    $(document).on("click", "#al-hasaniyah-call", function(evt)
    {
        /* your code goes here */ 
        call();
    });
    
        /* button  #al-hasaniyah-map */
    $(document).on("click", "#al-hasaniyah-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.4316,107.0405');
    });
    
        /* button  #al-hasaniyah-direc */
    $(document).on("click", "#al-hasaniyah-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.4316,107.0405');
    });
    
        /* button  #al-imam-islamic-call */
    $(document).on("click", "#al-imam-islamic-call", function(evt)
    {
        /* your code goes here */ 
        call('02182483868');
    });
    
        /* button  #al-imam-islamic-school-map */
    $(document).on("click", "#al-imam-islamic-school-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.3645,106.9743');
    });
    
        /* button  #al-imam-islamic-direc */
    $(document).on("click", "#al-imam-islamic-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3645,106.9743');
    });
    
        /* button  #sd-bintang-timur-call */
    $(document).on("click", "#sd-bintang-timur-call", function(evt)
    {
        /* your code goes here */ 
        call('0218242692');
    });
    
        /* button  #sd-bintang-timur-map */
    $(document).on("click", "#sd-bintang-timur-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.3677,106.9889');
    });
    
        /* button  #sd-bintang-timur-direc */
    $(document).on("click", "#sd-bintang-timur-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.3677,106.9889');
    });
    
        /* button  #sd-cikal-cendekia-call */
    $(document).on("click", "#sd-cikal-cendekia-call", function(evt)
    {
        /* your code goes here */ 
        call();
    });
    
        /* button  #sd-cikal-cendekia-map */
    $(document).on("click", "#sd-cikal-cendekia-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.410938,107.009300');
    });
    
        /* button  #sd-cikal-cendekia-direc */
    $(document).on("click", "#sd-cikal-cendekia-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.410938,107.009300');
    });
    
        /* button  #sd-fun-school-harapan-call */
    $(document).on("click", "#sd-fun-school-harapan-call", function(evt)
    {
        /* your code goes here */ 
        call('02199481280');
    });
    
        /* button  #sd-fun-school-harapan-map */
    $(document).on("click", "#sd-fun-school-harapan-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.412938,107.020127');
    });
    
        /* button  #sd-fun-school-harapan-direc */
    $(document).on("click", "#sd-fun-school-harapan-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.412938,107.020127');
    });
    
        /* button  #sd-islam-al-hadid-call */
    $(document).on("click", "#sd-islam-al-hadid-call", function(evt)
    {
        /* your code goes here */
        call('0218234103');
    });
    
        /* button  #sd-islam-al-hadid-map */
    $(document).on("click", "#sd-islam-al-hadid-map", function(evt)
    {
        /* your code goes here */
        map('-6.4084,106.9635');
    });
    
        /* button  #sd-islam-al-hadid-direc */
    $(document).on("click", "#sd-islam-al-hadid-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4084,106.9635');
    });
    
        /* button  #sd-islam-nurul-fatimah-call */
    $(document).on("click", "#sd-islam-nurul-fatimah-call", function(evt)
    {
        /* your code goes here */
        call('02182496093');
    });
    
        /* button  #sd-islam-nurul-fatimah-map */
    $(document).on("click", "#sd-islam-nurul-fatimah-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.3658,106.9749');
    });
    
        /* button  #sd-islam-nurul-fatimah-direc */
    $(document).on("click", "#sd-islam-nurul-fatimah-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3658,106.9749');
    });
    
        /* button  #sd-it-al-isti-anaah-call */
    $(document).on("click", "#sd-it-al-isti-anaah-call", function(evt)
    {
        /* your code goes here */
        call('021-8233663');
    });
    
        /* button  #sd-it-al-isti-anaah-map */
    $(document).on("click", "#sd-it-al-isti-anaah-map", function(evt)
    {
        /* your code goes here */
        map('-6.404206,107.011395');
    });
    
        /* button  #sd-it-al-isti-anaah-direc */
    $(document).on("click", "#sd-it-al-isti-anaah-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.404206,107.011395');
    });
    
        /* button  #sd-it-cahaya-sunah-call */
    $(document).on("click", "#sd-it-cahaya-sunah-call", function(evt)
    {
        /* your code goes here */
        call('02182490133');
    });
    
        /* button  #sd-it-cahaya-sunah-map */
    $(document).on("click", "#sd-it-cahaya-sunah-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.41416,106.977543');
    });
    
        /* button  #sd-it-cahaya-sunah-direc */
    $(document).on("click", "#sd-it-cahaya-sunah-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.41416,106.977543');
    });
    
        /* button  #sd-it-tunas-islam-global-call */
    $(document).on("click", "#sd-it-tunas-islam-global-call", function(evt)
    {
        /* your code goes here */
        call('02129332121');
    });
    
        /* button  #sd-it-tunas-islam-global-map */
    $(document).on("click", "#sd-it-tunas-islam-global-map", function(evt)
    {
        /* your code goes here */
        map('-6.415731,107.033223');
    });
    
        /* button  #sd-it-tunas-islam-global-direc */
    $(document).on("click", "#sd-it-tunas-islam-global-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.415731,107.033223');
    });
    
        /* button  #sd-muhammadiyah-01-call */
    $(document).on("click", "#sd-muhammadiyah-01-call", function(evt)
    {
        /* your code goes here */
        call('02182480034');
    });
    
        /* button  #sd-muhammadiyah-01-map */
    $(document).on("click", "#sd-muhammadiyah-01-map", function(evt)
    {
        /* your code goes here */
        map('-6.3995,106.9658');
    });
    
        /* button  #sd-muhammadiyah-01-direc */
    $(document).on("click", "#sd-muhammadiyah-01-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3995,106.9658');
    });
    
        /* button  #sd-muhammadiyah-02-call */
    $(document).on("click", "#sd-muhammadiyah-02-call", function(evt)
    {
        /* your code goes here */ 
        call('02182480034');
    });
    
        /* button  #sd-muhammadiyah-02-map */
    $(document).on("click", "#sd-muhammadiyah-02-map", function(evt)
    {
        /* your code goes here */
        map('-6.3671,106.9886');
    });
    
        /* button  #sd-muhammadiyah-02-direc */
    $(document).on("click", "#sd-muhammadiyah-02-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.3671,106.9886');
    });
    
        /* button  #sdn-babakan-01-call */
    $(document).on("click", "#sdn-babakan-01-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-babakan-01-map */
    $(document).on("click", "#sdn-babakan-01-map", function(evt)
    {
        /* your code goes here */
        map('-6.4316,106.9655');
    });
    
        /* button  #sdn-babakan-01-direc */
    $(document).on("click", "#sdn-babakan-01-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4316,106.9655');
    });
    
        /* button  #sdn-babakan-02-call */
    $(document).on("click", "#sdn-babakan-02-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-babakan-02-map */
    $(document).on("click", "#sdn-babakan-02-map", function(evt)
    {
        /* your code goes here */
        map('-6.4407,106.9621');
    });
    
        /* button  #sdn-babakan-02-direc */
    $(document).on("click", "#sdn-babakan-02-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4407,106.9621');
    });
    
        /* button  #sdn-babakan-03-call */
    $(document).on("click", "#sdn-babakan-03-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-babakan-03-map */
    $(document).on("click", "#sdn-babakan-03-map", function(evt)
    {
        /* your code goes here */
        map('-6.4298,106.9693');
    });
    
        /* button  #sdn-babakan-03-direc */
    $(document).on("click", "#sdn-babakan-03-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4298,106.9693');
    });
    
        /* button  #sdn-babakan-04-call */
    $(document).on("click", "#sdn-babakan-04-call", function(evt)
    {
        /* your code goes here */
        call('02182490993');
    });
    
        /* button  #sdn-babakan-04-map */
    $(document).on("click", "#sdn-babakan-04-map", function(evt)
    {
        /* your code goes here */
        map('-6.428,106.9607');
    });
    
        /* button  #sdn-babakan-04-direc */
    $(document).on("click", "#sdn-babakan-04-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.428,106.9607');
    });
    
        /* button  #sdn-cibereum-call */
    $(document).on("click", "#sdn-cibereum-call", function(evt)
    {
        /* your code goes here */
        call('0218233522');
    });
    
        /* button  #sdn-cibereum-map */
    $(document).on("click", "#sdn-cibereum-map", function(evt)
    {
        /* your code goes here */
        map('-6.4141,106.9644');
    });
    
        /* button  #sdn-cibereum-direc */
    $(document).on("click", "#sdn-cibereum-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4141,106.9644');
    });
    
        /* button  #sdn-cileungsi-01-call */
    $(document).on("click", "#sdn-cileungsi-01-call", function(evt)
    {
        /* your code goes here */ 
        call('021-82491806');
    });
    
        /* button  #sdn-cileungsi-01-map */
    $(document).on("click", "#sdn-cileungsi-01-map", function(evt)
    {
        /* your code goes here */
        map('-6.3994,106.9599');
    });
    
        /* button  #sdn-cileungsi-01-direc */
    $(document).on("click", "#sdn-cileungsi-01-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3994,106.9599');
    });
    
        /* button  #sdn-cileungsi-02-call */
    $(document).on("click", "#sdn-cileungsi-02-call", function(evt)
    {
        /* your code goes here */
        call('021-82480950');
    });
    
        /* button  #sdn-cileungsi-02-map */
    $(document).on("click", "#sdn-cileungsi-02-map", function(evt)
    {
        /* your code goes here */
        map('-6.3994,106.9575');
    });
    
        /* button  #sdn-cileungsi-02-direc */
    $(document).on("click", "#sdn-cileungsi-02-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3994,106.9575');
    });
    
        /* button  #sdn-cileungsi-03-call */
    $(document).on("click", "#sdn-cileungsi-03-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-cileungsi-03-map */
    $(document).on("click", "#sdn-cileungsi-03-map", function(evt)
    {
        /* your code goes here */
        map('-6.3932,106.9542');
    });
    
        /* button  #sdn-cileungsi-03-direc */
    $(document).on("click", "#sdn-cileungsi-03-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3932,106.9542');
    });
    
        /* button  #sdn-cileungsi-04-call */
    $(document).on("click", "#sdn-cileungsi-04-call", function(evt)
    {
        /* your code goes here */
        call('021-5731177');
    });
    
        /* button  #sdn-cileungsi-04-map */
    $(document).on("click", "#sdn-cileungsi-04-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.4051,106.9717');
    });
    
        /* button  #sdn-cileungsi-04-direc */
    $(document).on("click", "#sdn-cileungsi-04-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4051,106.9717');
    });
    
        /* button  #sdn-cileungsi-05-call */
    $(document).on("click", "#sdn-cileungsi-05-call", function(evt)
    {
        /* your code goes here */
        call('0218236564');
    });
    
        /* button  #sdn-cileungsi-05-map */
    $(document).on("click", "#sdn-cileungsi-05-map", function(evt)
    {
        /* your code goes here */
        map('-6.3992,106.9598');
    });
    
        /* button  #sdn-cileungsi-05-direc */
    $(document).on("click", "#sdn-cileungsi-05-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.3992,106.9598');
    });
    
        /* button  #sdn-cileungsi-06-call */
    $(document).on("click", "#sdn-cileungsi-06-call", function(evt)
    {
        /* your code goes here */
        call('02182491853');
    });
    
        /* button  #sdn-cileungsi-06-map */
    $(document).on("click", "#sdn-cileungsi-06-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.4025,106.9618');
    });
    
        /* button  #sdn-cileungsi-06-direc */
    $(document).on("click", "#sdn-cileungsi-06-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4025,106.9618');
    });
    
        /* button  #sdn-cileungsi-07-call */
    $(document).on("click", "#sdn-cileungsi-07-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-cileungsi-07-map */
    $(document).on("click", "#sdn-cileungsi-07-map", function(evt)
    {
        /* your code goes here */
        map('-6.3947,106.962');
    });
    
        /* button  #sdn-cileungsi-07-direc */
    $(document).on("click", "#sdn-cileungsi-07-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3947,106.962');
    });
    
        /* button  #sdn-cileungsi-08-call */
    $(document).on("click", "#sdn-cileungsi-08-call", function(evt)
    {
        /* your code goes here */
        call('02182482350');
    });
    
        /* button  #sdn-cileungsi-08-map */
    $(document).on("click", "#sdn-cileungsi-08-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.409,106.9576');
    });
    
        /* button  #sdn-cileungsi-08-direc */
    $(document).on("click", "#sdn-cileungsi-08-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.409,106.9576');
    });
    
        /* button  #sdn-cileungsi-09-call */
    $(document).on("click", "#sdn-cileungsi-09-call", function(evt)
    {
        /* your code goes here */
        call('02182496984');
    });
    
        /* button  #sdn-cileungsi-09-map */
    $(document).on("click", "#sdn-cileungsi-09-map", function(evt)
    {
        /* your code goes here */
        map('-6.3984,106.9598');
    });
    
        /* button  #sdn-cileungsi-09-direc */
    $(document).on("click", "#sdn-cileungsi-09-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3984,106.9598');
    });
    
        /* button  #sdn-cileungsi-10-call */
    $(document).on("click", "#sdn-cileungsi-10-call", function(evt)
    {
        /* your code goes here */
        call('0218235574');
    });
    
        /* button  #sdn-cileungsi-10-map */
    $(document).on("click", "#sdn-cileungsi-10-map", function(evt)
    {
        /* your code goes here */
        map('-6.3992,106.9649');
    });
    
        /* button  #sdn-cileungsi-10-direc */
    $(document).on("click", "#sdn-cileungsi-10-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3992,106.9649');
    });
    
        /* button  #sdn-cinyosog-01-call */
    $(document).on("click", "#sdn-cinyosog-01-call", function(evt)
    {
        /* your code goes here */
        call('02182480528');
    });
    
        /* button  #sdn-cinyosog-01-map */
    $(document).on("click", "#sdn-cinyosog-01-map", function(evt)
    {
        /* your code goes here */
        map('-6.3786,106.9946');
    });
    
        /* button  #sdn-cinyosog-01-direc */
    $(document).on("click", "#sdn-cinyosog-01-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3786,106.9946');
    });
    
        /* button  #sdn-cinyosog-02-call */
    $(document).on("click", "#sdn-cinyosog-02-call", function(evt)
    {
        /* your code goes here */
        call('02182481182');
    });
    
        /* button  #sdn-cinyosog-02-map */
    $(document).on("click", "#sdn-cinyosog-02-map", function(evt)
    {
        /* your code goes here */
        map('-6.3671,106.9894');
    });
    
        /* button  #sdn-cinyosog-02-direc */
    $(document).on("click", "#sdn-cinyosog-02-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3671,106.9894');
    });
    
        /* button  #sdn-cipenjo-call */
    $(document).on("click", "#sdn-cipenjo-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-cipenjo-map */
    $(document).on("click", "#sdn-cipenjo-map", function(evt)
    {
        /* your code goes here */
        map('-6.3844,106.999');
    });
    
        /* button  #sdn-cipenjo-direc */
    $(document).on("click", "#sdn-cipenjo-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3844,106.999');
    });
    
        /* button  #sdn-cipeucang-01-call */
    $(document).on("click", "#sdn-cipeucang-01-call", function(evt)
    {
        /* your code goes here */ 
        call();
    });
    
        /* button  #sdn-cipeucang-01-map */
    $(document).on("click", "#sdn-cipeucang-01-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.4343,107.0468');
    });
    
        /* button  #sdn-cipeucang-01-direc */
    $(document).on("click", "#sdn-cipeucang-01-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4343,107.0468');
    });
    
        /* button  #sdn-cipeucang-02-call */
    $(document).on("click", "#sdn-cipeucang-02-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-cipeucang-02-map */
    $(document).on("click", "#sdn-cipeucang-02-map", function(evt)
    {
        /* your code goes here */
        map('-6.4265,107.0374');
    });
    
        /* button  #sdn-cipeucang-02-direc */
    $(document).on("click", "#sdn-cipeucang-02-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4265,107.0374');
    });
    
        /* button  #sdn-cipeucang-03-call */
    $(document).on("click", "#sdn-cipeucang-03-call", function(evt)
    {
        /* your code goes here */ 
        call();
    });
    
        /* button  #sdn-cipeucang-03-map */
    $(document).on("click", "#sdn-cipeucang-03-map", function(evt)
    {
        /* your code goes here */
        map('-6.4249,107.0479');
    });
    
        /* button  #sdn-cipeucang-03-direc */
    $(document).on("click", "#sdn-cipeucang-03-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4249,107.0479');
    });
    
        /* button  #sdn-cipicung-01-call */
    $(document).on("click", "#sdn-cipicung-01-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-cipicung-01-map */
    $(document).on("click", "#sdn-cipicung-01-map", function(evt)
    {
        /* your code goes here */
        map('-6.67,106.8063');
    });
    
        /* button  #sdn-cipicung-01-direc */
    $(document).on("click", "#sdn-cipicung-01-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.67,106.8063');
    });
    
        /* button  #sdn-cipicung-02-call */
    $(document).on("click", "#sdn-cipicung-02-call", function(evt)
    {
        /* your code goes here */
        call('02182492730');
    });
    
        /* button  #sdn-cipicung-02-map */
    $(document).on("click", "#sdn-cipicung-02-map", function(evt)
    {
        /* your code goes here */
        map('-6.4068,106.9744');
    });
    
        /* button  #sdn-cipicung-02-direc */
    $(document).on("click", "#sdn-cipicung-02-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4068,106.9744');
    });
    
        /* button  #sdn-cipicung-03-call */
    $(document).on("click", "#sdn-cipicung-03-call", function(evt)
    {
        /* your code goes here */ 
        call();
    });
    
        /* button  #sdn-cipicung-03-map */
    $(document).on("click", "#sdn-cipicung-03-map", function(evt)
    {
        /* your code goes here */
        map('-6.4008,106.9997');
    });
    
        /* button  #sdn-cipicung-03-direc */
    $(document).on("click", "#sdn-cipicung-03-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4008,106.9997');
    });
    
        /* button  #sdn-cipicung-04-call */
    $(document).on("click", "#sdn-cipicung-04-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-cipicung-04-map */
    $(document).on("click", "#sdn-cipicung-04-map", function(evt)
    {
        /* your code goes here */
        map('-6.407,106.9837');
    });
    
        /* button  #sdn-cipicung-04-direc */
    $(document).on("click", "#sdn-cipicung-04-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.407,106.9837');
    });
    
        /* button  #sdn-cipicung-05-call */
    $(document).on("click", "#sdn-cipicung-05-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-cipicung-05-map */
    $(document).on("click", "#sdn-cipicung-05-map", function(evt)
    {
        /* your code goes here */
        map('-6.408,107.0048');
    });
    
        /* button  #sdn-cipicung-05-direc */
    $(document).on("click", "#sdn-cipicung-05-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.408,107.0048');
    });
    
        /* button  #sdn-ciuncal-call */
    $(document).on("click", "#sdn-ciuncal-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-ciuncal-map */
    $(document).on("click", "#sdn-ciuncal-map", function(evt)
    {
        /* your code goes here */
        map('-6.4394,107.0269');
    });
    
        /* button  #sdn-ciuncal-direc */
    $(document).on("click", "#sdn-ciuncal-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4394,107.0269');
    });
    
        /* button  #sdn-gandoang-01-call */
    $(document).on("click", "#sdn-gandoang-01-call", function(evt)
    {
        /* your code goes here */ 
        call();
    });
    
        /* button  #sdn-gandoang-01-map */
    $(document).on("click", "#sdn-gandoang-01-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.41,107.008');
    });
    
        /* button  #sdn-gandoang-01-direc */
    $(document).on("click", "#sdn-gandoang-01-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.41,107.008');
    });
    
        /* button  #sdn-gandoang-02-call */
    $(document).on("click", "#sdn-gandoang-02-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-gandoang-02-map */
    $(document).on("click", "#sdn-gandoang-02-map", function(evt)
    {
        /* your code goes here */
        map('-6.4147,107.0151');
    });
    
        /* button  #sdn-gandoang-02-direc */
    $(document).on("click", "#sdn-gandoang-02-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.4147,107.0151');
    });
    
        /* button  #sdn-gandoang-03-call */
    $(document).on("click", "#sdn-gandoang-03-call", function(evt)
    {
        /* your code goes here */ 
        call();
    });
    
        /* button  #sdn-gandoang-03-map */
    $(document).on("click", "#sdn-gandoang-03-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.4045,107.0144');
    });
    
        /* button  #sdn-gandoang-03-direc */
    $(document).on("click", "#sdn-gandoang-03-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.4045,107.0144');
    });
    
        /* button  #sdn-kp_sawah-01-call */
    $(document).on("click", "#sdn-kp_sawah-01-call", function(evt)
    {
        /* your code goes here */
        call('02182490903');
    });
    
        /* button  #sdn-kp_sawah-01-map */
    $(document).on("click", "#sdn-kp_sawah-01-map", function(evt)
    {
        /* your code goes here */
        map('-6.4107,106.9773');
    });
    
        /* button  #sdn-kp_sawah-01-direc */
    $(document).on("click", "#sdn-kp_sawah-01-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4107,106.9773');
    });
    
        /* button  #sdn-kp_sawah-02-call */
    $(document).on("click", "#sdn-kp_sawah-02-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-kp_sawah-02-map */
    $(document).on("click", "#sdn-kp_sawah-02-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.4015,106.9754');
    });
    
        /* button  #sdn-kp_sawah-02-direc */
    $(document).on("click", "#sdn-kp_sawah-02-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.4015,106.9754');
    });
    
        /* button  #sdn-kubang-01-call */
    $(document).on("click", "#sdn-kubang-01-call", function(evt)
    {
        /* your code goes here */
        call('02194120535');
    });
    
        /* button  #sdn-kubang-01-map */
    $(document).on("click", "#sdn-kubang-01-map", function(evt)
    {
        /* your code goes here */
        map('-6.4165,107.0413');
    });
    
        /* button  #sdn-kubang-01-direc */
    $(document).on("click", "#sdn-kubang-01-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4165,107.0413');
    });
    
        /* button  #sdn-kubang-02-call */
    $(document).on("click", "#sdn-kubang-02-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-kubang-02-map */
    $(document).on("click", "#sdn-kubang-02-map", function(evt)
    {
        /* your code goes here */
        map('-6.4097,107.054');
    });
    
        /* button  #sdn-kubang-02-direc */
    $(document).on("click", "#sdn-kubang-02-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.4097,107.054');
    });
    
        /* button  #sdn-limusnunggal-01-call */
    $(document).on("click", "#sdn-limusnunggal-01-call", function(evt)
    {
        /* your code goes here */
        call('021 82499932');
    });
    
        /* button  #sdn-limusnunggal-01-map */
    $(document).on("click", "#sdn-limusnunggal-01-map", function(evt)
    {
        /* your code goes here */
        map('-6.375,106.9698');
    });
    
        /* button  #sdn-limusnunggal-01-direc */
    $(document).on("click", "#sdn-limusnunggal-01-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.375,106.9698');
    });
    
        /* button  #sdn-limusnunggal-02-call */
    $(document).on("click", "#sdn-limusnunggal-02-call", function(evt)
    {
        /* your code goes here */
        call('0218231671');
    });
    
        /* button  #sdn-limusnunggal-02-map */
    $(document).on("click", "#sdn-limusnunggal-02-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.3952,106.9692');
    });
    
        /* button  #sdn-limusnunggal-02-direc */
    $(document).on("click", "#sdn-limusnunggal-02-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3952,106.9692');
    });
    
        /* button  #sdn-limusnunggal-03-call */
    $(document).on("click", "#sdn-limusnunggal-03-call", function(evt)
    {
        /* your code goes here */
        call('02182499403') ;
    });
    
        /* button  #sdn-limusnunggal-03-map */
    $(document).on("click", "#sdn-limusnunggal-03-map", function(evt)
    {
        /* your code goes here */
        map('-6.3603,106.9783');
    });
    
        /* button  #sdn-limusnunggal-03-direc */
    $(document).on("click", "#sdn-limusnunggal-03-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3603,106.9783');
    });
    
        /* button  #sdn-mampir-call */
    $(document).on("click", "#sdn-mampir-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-mampir-map */
    $(document).on("click", "#sdn-mampir-map", function(evt)
    {
        /* your code goes here */
        map('-6.4218,106.999');
    });
    
        /* button  #sdn-mampir-direc */
    $(document).on("click", "#sdn-mampir-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4218,106.999');
    });
    
        /* button  #sdn-nyalindung-call */
    $(document).on("click", "#sdn-nyalindung-call", function(evt)
    {
        /* your code goes here */
        call('0218234264');
    });
    
        /* button  #sdn-nyalindung-map */
    $(document).on("click", "#sdn-nyalindung-map", function(evt)
    {
        /* your code goes here */
        map('-6.4217,107.0046');
    });
    
        /* button  #sdn-nyalindung-direc */
    $(document).on("click", "#sdn-nyalindung-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4217,107.0046');
    });
    
        /* button  #sdn-palasari-01-call */
    $(document).on("click", "#sdn-palasari-01-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-palasari-01-map */
    $(document).on("click", "#sdn-palasari-01-map", function(evt)
    {
        /* your code goes here */
        map('-6.435,106.9997');
    });
    
        /* button  #sdn-palasari-01-direc */
    $(document).on("click", "#sdn-palasari-01-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.435,106.9997');
    });
    
        /* button  #sdn-palasari-02-call */
    $(document).on("click", "#sdn-palasari-02-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-palasari-02-map */
    $(document).on("click", "#sdn-palasari-02-map", function(evt)
    {
        /* your code goes here */
        map('-6.4335,107.0071');
    });
    
        /* button  #sdn-palasari-02-direc */
    $(document).on("click", "#sdn-palasari-02-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.4335,107.0071');
    });
    
        /* button  #sdn-palasari-03-call */
    $(document).on("click", "#sdn-palasari-03-call", function(evt)
    {
        /* your code goes here */
        call('-6.4357,106.9911');
    });
    
        /* button  #sdn-palasari-03-map */
    $(document).on("click", "#sdn-palasari-03-map", function(evt)
    {
        /* your code goes here */
        map('-6.4357,106.9911');
    });
    
        /* button  #sdn-palasari-03-direc */
    $(document).on("click", "#sdn-palasari-03-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4357,106.9911');
    });
    
        /* button  #sdn-pasirangin-06-direc */
    $(document).on("click", "#sdn-pasirangin-06-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4034,106.9873');
    });
    
        /* button  #sdn-pasirangin-06-map */
    $(document).on("click", "#sdn-pasirangin-06-map", function(evt)
    {
        /* your code goes here */
        map('-6.4034,106.9873');
    });
    
        /* button  #sdn-pasirangin-06-call */
    $(document).on("click", "#sdn-pasirangin-06-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-pasirangin-05-direc */
    $(document).on("click", "#sdn-pasirangin-05-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3878,106.9782');
    });
    
        /* button  #sdn-pasirangin-05-map */
    $(document).on("click", "#sdn-pasirangin-05-map", function(evt)
    {
        /* your code goes here */
        map('-6.3878,106.9782');
    });
    
        /* button  #sdn-pasirangin-05-call */
    $(document).on("click", "#sdn-pasirangin-05-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-pasirangin-04-direc */
    $(document).on("click", "#sdn-pasirangin-04-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3928,106.9911');
    });
    
        /* button  #sdn-pasirangin-04-map */
    $(document).on("click", "#sdn-pasirangin-04-map", function(evt)
    {
        /* your code goes here */
        map('-6.3928,106.9911');
    });
    
        /* button  #sdn-pasirangin-04-call */
    $(document).on("click", "#sdn-pasirangin-04-call", function(evt)
    {
        /* your code goes here */
        call('02182496706');
    });
    
        /* button  #sdn-pasirangin-03-direc */
    $(document).on("click", "#sdn-pasirangin-03-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3777,106.9808');
    });
    
        /* button  #sdn-pasirangin-03-map */
    $(document).on("click", "#sdn-pasirangin-03-map", function(evt)
    {
        /* your code goes here */
        map('-6.3777,106.9808');
    });
    
        /* button  #sdn-pasirangin-03-call */
    $(document).on("click", "#sdn-pasirangin-03-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-pasirangin-02-direc */
    $(document).on("click", "#sdn-pasirangin-02-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-6.3859,106.9874');
    });
    
        /* button  #sdn-pasirangin-02-map */
    $(document).on("click", "#sdn-pasirangin-02-map", function(evt)
    {
        /* your code goes here */
        map('-6.3859,106.9874');
    });
    
        /* button  #sdn-pasirangin-02-call */
    $(document).on("click", "#sdn-pasirangin-02-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-pasirangin-01-direc */
    $(document).on("click", "#sdn-pasirangin-01-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.3906,106.9823');
    });
    
        /* button  #sdn-pasirangin-01-map */
    $(document).on("click", "#sdn-pasirangin-01-map", function(evt)
    {
        /* your code goes here */
        map('-6.3906,106.9823');
    });
    
        /* button  #sdn-pasirangin-01-call */
    $(document).on("click", "#sdn-pasirangin-01-call", function(evt)
    {
        /* your code goes here */
        call();
    });
     
    /* button  #sds-santo-yoseph-direc */
    $(document).on("click", "#sds-santo-yoseph-direc", function(evt)
    {
        /* your code goes here */ 
        direc('-33.7243202,-16.0661341.12');
    });
    
        /* button  #sds-santo-yoseph-map */
    $(document).on("click", "#sds-santo-yoseph-map", function(evt)
    {
        /* your code goes here */
        map('-33.7243202,-16.0661341.12');
    });
    
        /* button  #sds-santo-yoseph-call */
    $(document).on("click", "#sds-santo-yoseph-call", function(evt)
    {
        /* your code goes here */
        call();
    });
     
    /* button  #sds-bps-kvii-terpadu-direc */
    $(document).on("click", "#sds-bps-kvii-terpadu-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4308,107.04');
    });
    
        /* button  #sds-bps-kvii-terpadu-map */
    $(document).on("click", "#sds-bps-kvii-terpadu-map", function(evt)
    {
        /* your code goes here */
        map('-6.4308,107.04');
    });
    
        /* button  #sds-bps-kvii-terpadu-call */
    $(document).on("click", "#sds-bps-kvii-terpadu-call", function(evt)
    {
        /* your code goes here */
        call('02189932882');
    });
    
        /* button  #sdn-tunggilis-direc */
    $(document).on("click", "#sdn-tunggilis-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4177,107.0276');
    });
    
        /* button  #sdn-tunggilis-map */
    $(document).on("click", "#sdn-tunggilis-map", function(evt)
    {
        /* your code goes here */
        map('-6.4177,107.0276');
    });
    
        /* button  #sdn-tunggilis-call */
    $(document).on("click", "#sdn-tunggilis-call", function(evt)
    {
        /* your code goes here */
        call('021 82460807');
    });
     
    /* button  #sdn-situsari-02-direc */
    $(document).on("click", "#sdn-situsari-02-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4263,107.0184');
    });
    
        /* button  #sdn-situsari-02-map */
    $(document).on("click", "#sdn-situsari-02-map", function(evt)
    {
        /* your code goes here */
        map('-6.4263,107.0184');
    });
    
        /* button  #sdn-situsari-02-call */
    $(document).on("click", "#sdn-situsari-02-call", function(evt)
    {
        /* your code goes here */
        call();
    });
     
    /* button  #sdn-situsari-01-direc */
    $(document).on("click", "#sdn-situsari-01-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4311,107.0275');
    });
    
        /* button  #sdn-situsari-01-map */
    $(document).on("click", "#sdn-situsari-01-map", function(evt)
    {
        /* your code goes here */ 
        map('-6.4311,107.0275');
    });
    
        /* button  #sdn-situsari-01-call */
    $(document).on("click", "#sdn-situsari-01-call", function(evt)
    {
        /* your code goes here */
        call('02189940968');
    });
    
        /* button  #sdn-sarongge-direc */
    $(document).on("click", "#sdn-sarongge-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4104,107.0428');
    });
    
        /* button  #sdn-sarongge-map */
    $(document).on("click", "#sdn-sarongge-map", function(evt)
    {
        /* your code goes here */
        map('-6.4104,107.0428');
    });
    
        /* button  #sdn-sarongge-call */
    $(document).on("click", "#sdn-sarongge-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-rawailat-direc */
    $(document).on("click", "#sdn-rawailat-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4228,106.9831');
    });
    
        /* button  #sdn-rawailat-map */
    $(document).on("click", "#sdn-rawailat-map", function(evt)
    {
        /* your code goes here */
        map('-6.4228,106.9831');
    });
    
        /* button  #sdn-rawailat-call */
    $(document).on("click", "#sdn-rawailat-call", function(evt)
    {
        /* your code goes here */
        call();
    });
    
        /* button  #sdn-rawaendah-direc */
    $(document).on("click", "#sdn-rawaendah-direc", function(evt)
    {
        /* your code goes here */
        direc('-6.4093,106.9662');
    });
    
        /* button  #sdn-rawaendah-map */
    $(document).on("click", "#sdn-rawaendah-map", function(evt)
    {
        /* your code goes here */
        map('-6.4093,106.9662');
    });
    
        /* button  #sdn-rawaendah-call */
    $(document).on("click", "#sdn-rawaendah-call", function(evt)
    {
        /* your code goes here */
        call('0218233805');
    });
        
        /* button  #sds-islam-an-nur-direc */
    $(document).on("click", "#sds-islam-an-nur-direc", function(evt)
    {
        /* your code goes here */ 
		direc('-6.4315,106.9674');
    });
    
        /* button  #sds-islam-an-nur-map */
    $(document).on("click", "#sds-islam-an-nur-map", function(evt)
    {
        /* your code goes here */ 
		map('-6.4315,106.9674');
    });
    
        /* button  #sds-islam-an-nur-call */
    $(document).on("click", "#sds-islam-an-nur-call", function(evt)
    {
        /* your code goes here */ 
		call('02129331629');
    });
    
        /* button  #sds-islam-al-akhyar-direc */
    $(document).on("click", "#sds-islam-al-akhyar-direc", function(evt)
    {
        /* your code goes here */ 
		direc('-6.4002,107.0547');
    });
    
        /* button  #sds-islam-al-akhyar-map */
    $(document).on("click", "#sds-islam-al-akhyar-map", function(evt)
    {
        /* your code goes here */ 
		map('-6.4002,107.0547');
    });
    
        /* button  #sds-islam-al-akhyar-call */
    $(document).on("click", "#sds-islam-al-akhyar-call", function(evt)
    {
        /* your code goes here */
		call();
    });
    
        /* button  #sds-iqro-kairo-direc */
    $(document).on("click", "#sds-iqro-kairo-direc", function(evt)
    {
        /* your code goes here */ 
		direc('-6.3962,106.9948');
    });
    
        /* button  #sds-iqro-kairo-map */
    $(document).on("click", "#sds-iqro-kairo-map", function(evt)
    {
        /* your code goes here */
		map('-6.3962,106.9948');
    });
    
        /* button  #sds-iqro-kairo-call */
    $(document).on("click", "#sds-iqro-kairo-call", function(evt)
    {
        /* your code goes here */ 
		call('02189594778');
    });
    
        /* button  #sds-fatahillah-direc */
    $(document).on("click", "#sds-fatahillah-direc", function(evt)
    {
        /* your code goes here */ 
		direc('-6.4239,107.0386');
    });
    
        /* button  #sds-fatahillah-map */
    $(document).on("click", "#sds-fatahillah-map", function(evt)
    {
        /* your code goes here */
		map('-6.4239,107.0386');
    });
    
        /* button  #sds-fatahillah-call */
    $(document).on("click", "#sds-fatahillah-call", function(evt)
    {
        /* your code goes here */
		call('02189934486');		
    });
    
        /* button  #sds-darul-hikam-direc */
    $(document).on("click", "#sds-darul-hikam-direc", function(evt)
    {
        /* your code goes here */ 
		direc('-6.3753,106.9676');
    });
    
        /* button  #sds-darul-hikam-map */
    $(document).on("click", "#sds-darul-hikam-map", function(evt)
    {
        /* your code goes here */
		map('-6.3753,106.9676');
    });
    
        /* button  #sds-darul-hikam-call */
    $(document).on("click", "#sds-darul-hikam-call", function(evt)
    {
        /* your code goes here */
		call();
    });
    
        /* button  #sds-prayasqi-i-s-direc */
    $(document).on("click", "#sds-prayasqi-i-s-direc", function(evt)
    {
        /* your code goes here */
		direc('-6.431273,107.029382');
    });
    
        /* button  #sds-prayasqi-i-s-map */
    $(document).on("click", "#sds-prayasqi-i-s-map", function(evt)
    {
        /* your code goes here */
		map('-6.431273,107.029382')		;
    });
    
        /* button  #sds-prayasqi-i-s-call */
    $(document).on("click", "#sds-prayasqi-i-s-call", function(evt)
    {
        /* your code goes here */
		call('02182481774');
    });
    
        /* button  #sds-nurul-akbar-direc */
    $(document).on("click", "#sds-nurul-akbar-direc", function(evt)
    {
        /* your code goes here */
		direc('-6.424575,107.004035');
    });
    
        /* button  #sds-nurul-akbar-map */
    $(document).on("click", "#sds-nurul-akbar-map", function(evt)
    {
        /* your code goes here */
		map('-6.424575,107.004035');
    });
    
        /* button  #sds-nurul-akbar-call */
    $(document).on("click", "#sds-nurul-akbar-call", function(evt)
    {
        /* your code goes here */
		call();		
    });
    
        /* button  #sds-mutiara-islam-direc */
    $(document).on("click", "#sds-mutiara-islam-direc", function(evt)
    {
        /* your code goes here */
		direc('-6.4011,106.9676');
    });
    
        /* button  #sds-mutiara-islam-map */
    $(document).on("click", "#sds-mutiara-islam-map", function(evt)
    {
        /* your code goes here */
		map('-6.4011,106.9676');
    });
    
        /* button  #sds-mutiara-islam-call */
    $(document).on("click", "#sds-mutiara-islam-call", function(evt)
    {
        /* your code goes here */
		call('02182483949');
    });
    
        /* button  #sds-darul-muqorobin-direc */
    $(document).on("click", "#sds-darul-muqorobin-direc", function(evt)
    {
        /* your code goes here */
		direc('-33.7243202,-16.0661341.12');
    });
    
        /* button  #sds-darul-muqorobin-map */
    $(document).on("click", "#sds-darul-muqorobin-map", function(evt)
    {
        /* your code goes here */
		map('-33.7243202,-16.0661341.12');
    });
    
        /* button  #sds-darul-muqorobin-call */
    $(document).on("click", "#sds-darul-muqorobin-call", function(evt)
    {
        /* your code goes here */
		call();		
    });
    
        /* button  #sds-al-karomah-direc */
    $(document).on("click", "#sds-al-karomah-direc", function(evt)
    {
        /* your code goes here */
		direc('-6.431797,106.972479');
    });
    
        /* button  #sds-al-karomah-map */
    $(document).on("click", "#sds-al-karomah-map", function(evt)
    {
        /* your code goes here */ 
		map('-6.431797,106.972479');
    });
    
        /* button  #sds-al-karomah-call */
    $(document).on("click", "#sds-al-karomah-call", function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #sds-islam-terpadu-citra-n */
    $(document).on('click', '#sds-islam-terpadu-citra-n-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.4063,106.9974');
    });
    
        /* button  #sds-islam-terpadu-citra-n */
    $(document).on('click', '#sds-islam-terpadu-citra-n-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.4063,106.9974');
    });
    
        /* button  #sds-islam-terpadu-citra-n */
    $(document).on('click', '#sds-islam-terpadu-citra-n-call', function(evt)
    {
        /* your code goes here */
		call('021-29232934');		
    });
	
		/* button  #sds-it-bina-prestasi */
    $(document).on('click', '#sds-it-bina-prestasi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.39749,106.983521');
    });
    
        /* button  #sds-it-bina-prestasi */
    $(document).on('click', '#sds-it-bina-prestasi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.39749,106.983521');
    });
    
        /* button  #sds-it-bina-prestasi */
    $(document).on('click', '#sds-it-bina-prestasi-call', function(evt)
    {
        /* your code goes here */
		call('021-8235817');		
    });
	
		/* button  #sds-khalifah */
    $(document).on('click', '#sds-khalifah-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.369,106.9873');
    });
    
        /* button  #sds-khalifah */
    $(document).on('click', '#sds-khalifah-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.369,106.9873');
    });
    
        /* button  #sds-khalifah */
    $(document).on('click', '#sds-khalifah-call', function(evt)
    {
        /* your code goes here */
		call('021-8235945');		
    });
	
		/* button  #sds-muhammadiyah-03 */
    $(document).on('click', '#sds-muhammadiyah-03-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.4343,106.9485');
    });
    
        /* button  #sds-muhammadiyah-03 */
    $(document).on('click', '#sds-muhammadiyah-03-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.4343,106.9485');
    });
    
        /* button  #sds-muhammadiyah-03 */
    $(document).on('click', '#sds-muhammadiyah-03-call', function(evt)
    {
        /* your code goes here */
		call('02182497701');		
    });
	
		/* button  #sds-nurul-islam */
    $(document).on('click', '#sds-nurul-islam-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.3849,106.9804');
    });
    
        /* button  #sds-nurul-islam */
    $(document).on('click', '#sds-nurul-islam-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.3849,106.9804');
    });
    
        /* button  #sds-nurul-islam */
    $(document).on('click', '#sds-nurul-islam-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #sds-plus-arrusyda */
    $(document).on('click', '#sds-plus-arrusyda-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.4099,106.9878');
    });
    
        /* button  #sds-plus-arrusyda */
    $(document).on('click', '#sds-plus-arrusyda-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.4099,106.9878');
    });
    
        /* button  #sds-plus-arrusyda */
    $(document).on('click', '#sds-plus-arrusyda-call', function(evt)
    {
        /* your code goes here */
		call('02182491101');		
    });
	
		/* button  #sds-regina-caeli-s */
    $(document).on('click', '#sds-regina-caeli-s-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.4045,106.9753');
    });
    
        /* button  #sds-regina-caeli-s */
    $(document).on('click', '#sds-regina-caeli-s-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.4045,106.9753');
    });
    
        /* button  #sds-regina-caeli-s */
    $(document).on('click', '#sds-regina-caeli-s-call', function(evt)
    {
        /* your code goes here */
		call('0218235984');		
    });
	
		/* button  #sds-tabita */
    $(document).on('click', '#sds-tabita-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.3585,106.9708');
    });
    
        /* button  #sds-tabita */
    $(document).on('click', '#sds-tabita-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.3585,106.9708');
    });
    
        /* button  #sds-tabita */
    $(document).on('click', '#sds-tabita-call', function(evt)
    {
        /* your code goes here */
		call('02182494969');		
    });
    
        /* button  #bantuan_kirim */
    $(document).on("click", "#bantuan_kirim", function(evt)
    {
        /* your code goes here */ 
        var tanya=document.getElementById('bantuan_text');
        intel.xdk.device.sendSMS(tanya, "085770121624");
    });
	
		/* button  #mtss-al-fatah */
    $(document).on('click', '#mtss-al-fatah-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.446465,106.960929');
    });
    
        /* button  #mtss-al-fatah */
    $(document).on('click', '#mtss-al-fatah-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.446465,106.960929');
    });
    
        /* button  #mtss-al-fatah */
    $(document).on('click', '#mtss-al-fatah-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #mtss-al-furqon */
    $(document).on('click', '#mtss-al-furqon-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.4371,106.9543');
    });
    
        /* button  #mtss-al-furqon */
    $(document).on('click', '#mtss-al-furqon-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.4371,106.9543');
    });
    
        /* button  #mtss-al-furqon */
    $(document).on('click', '#mtss-al-furqon-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #mtss-al-furqoniyah */
    $(document).on('click', '#mtss-al-furqoniyah-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.428828,106.979788');
    });
    
        /* button  #mtss-al-furqoniyah */
    $(document).on('click', '#mtss-al-furqoniyah-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.428828,106.979788');
    });
    
        /* button  #mtss-al-furqoniyah */
    $(document).on('click', '#mtss-al-furqoniyah-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #mtss-an-nizhamiyyah */
    $(document).on('click', '#mtss-an-nizhamiyyah-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.420100,106.954000');
    });
    
        /* button  #mtss-an-nizhamiyyah */
    $(document).on('click', '#mtss-an-nizhamiyyah-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.420100,106.954000');
    });
    
        /* button  #mtss-an-nizhamiyyah */
    $(document).on('click', '#mtss-an-nizhamiyyah-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #mtss-darul-marhamah */
    $(document).on('click', '#mtss-darul-marhamah-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.412900,107.047400');
    });
    
        /* button  #mtss-darul-marhamah */
    $(document).on('click', '#mtss-darul-marhamah-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.412900,107.047400');
    });
    
        /* button  #mtss-darul-marhamah */
    $(document).on('click', '#mtss-darul-marhamah-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smpn-1-cileungsi */
    $(document).on('click', '#smpn-1-cileungsi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.414900,106.960700');
    });
    
        /* button  #smpn-1-cileungsi */
    $(document).on('click', '#smpn-1-cileungsi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.414900,106.960700');
    });
    
        /* button  #smpn-1-cileungsi */
    $(document).on('click', '#smpn-1-cileungsi-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smpn-2-cileungsi */
    $(document).on('click', '#smpn-2-cileungsi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.440100,107.026800');
    });
    
        /* button  #smpn-2-cileungsi */
    $(document).on('click', '#smpn-2-cileungsi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.440100,107.026800');
    });
    
        /* button  #smpn-2-cileungsi */
    $(document).on('click', '#smpn-2-cileungsi-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smpn-3-cileungsi */
    $(document).on('click', '#smpn-3-cileungsi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.374800,106.990300');
    });
    
        /* button  #smpn-3-cileungsi */
    $(document).on('click', '#smpn-3-cileungsi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.374800,106.990300');
    });
    
        /* button  #smpn-3-cileungsi */
    $(document).on('click', '#smpn-3-cileungsi-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smpn-4-cileungsi */
    $(document).on('click', '#smpn-4-cileungsi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.410007,107.018439');
    });
    
        /* button  #smpn-4-cileungsi */
    $(document).on('click', '#smpn-4-cileungsi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.410007,107.018439');
    });
    
        /* button  #smpn-4-cileungsi */
    $(document).on('click', '#smpn-4-cileungsi-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-al-imam-islamic-school */
    $(document).on('click', '#smps-al-imam-islamic-school-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.3648,106.9744');
    });
    
        /* button  #smps-al-imam-islamic-school */
    $(document).on('click', '#smps-al-imam-islamic-school-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.3648,106.9744');
    });
    
        /* button  #smps-al-imam-islamic-school */
    $(document).on('click', '#smps-al-imam-islamic-school-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-al-hadiid */
    $(document).on('click', '#smps-al-hadiid-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.407900,106.963400');
    });
    
        /* button  #smps-al-hadiid */
    $(document).on('click', '#smps-al-hadiid-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.407900,106.963400');
    });
    
        /* button  #smps-al-hadiid */
    $(document).on('click', '#smps-al-hadiid-call', function(evt)
    {
        /* your code goes here */
		call('02182493659');		
    });
	
		/* button  #smps-amal-mulia-2 */
    $(document).on('click', '#smps-amal-mulia-2-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.363800,106.990100');
    });
    
        /* button  #smps-amal-mulia-2 */
    $(document).on('click', '#smps-amal-mulia-2-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.363800,106.990100');
    });
    
        /* button  #smps-amal-mulia-2 */
    $(document).on('click', '#smps-amal-mulia-2-call', function(evt)
    {
        /* your code goes here */
		call('02182496902');		
    });
	
		/* button  #smps-avicenna-cileungsi */
    $(document).on('click', '#smps-avicenna-cileungsi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.4395,106.9622');
    });
    
        /* button  #smps-avicenna-cileungsi */
    $(document).on('click', '#smps-avicenna-cileungsi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.4395,106.9622');
    });
    
        /* button  #smps-avicenna-cileungsi */
    $(document).on('click', '#smps-avicenna-cileungsi-call', function(evt)
    {
        /* your code goes here */
		call('02184086040');		
    });
	
		/* button  #smps-bintang-timur */
    $(document).on('click', '#smps-bintang-timur-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.365141,106.977816');
    });
    
        /* button  #smps-bintang-timur */
    $(document).on('click', '#smps-bintang-timur-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.365141,106.977816');
    });
    
        /* button  #smps-bintang-timur */
    $(document).on('click', '#smps-bintang-timur-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-bpsk-terpadu-cileungsi */
    $(document).on('click', '#smps-bpsk-terpadu-cileungsi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.430900,107.040000');
    });
    
        /* button  #smps-bpsk-terpadu-cileungsi */
    $(document).on('click', '#smps-bpsk-terpadu-cileungsi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.430900,107.040000');
    });
    
        /* button  #smps-bpsk-terpadu-cileungsi */
    $(document).on('click', '#smps-bpsk-terpadu-cileungsi-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-cikal-cendekia */
    $(document).on('click', '#smps-cikal-cendekia-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.410510,107.003776');
    });
    
        /* button  #smps-cikal-cendekia */
    $(document).on('click', '#smps-cikal-cendekia-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.410510,107.003776');
    });
    
        /* button  #smps-cikal-cendekia */
    $(document).on('click', '#smps-cikal-cendekia-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-darussalam-cileungsi */
    $(document).on('click', '#smps-darussalam-cileungsi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.3979,106.956');
    });
    
        /* button  #smps-darussalam-cileungsi */
    $(document).on('click', '#smps-darussalam-cileungsi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.3979,106.956');
    });
    
        /* button  #smps-darussalam-cileungsi */
    $(document).on('click', '#smps-darussalam-cileungsi-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-fajar-dunia */
    $(document).on('click', '#smps-fajar-dunia-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.4363,106.9948');
    });
    
        /* button  #smps-fajar-dunia */
    $(document).on('click', '#smps-fajar-dunia-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.4363,106.9948');
    });
    
        /* button  #smps-fajar-dunia */
    $(document).on('click', '#smps-fajar-dunia-call', function(evt)
    {
        /* your code goes here */
		call('02198191501');		
    });
	
		/* button  #smps-ibadurrahman-cileungsi */
    $(document).on('click', '#smps-ibadurrahman-cileungsi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.413461,107.022246');
    });
    
        /* button  #smps-ibadurrahman-cileungsi */
    $(document).on('click', '#smps-ibadurrahman-cileungsi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.413461,107.022246');
    });
    
        /* button  #smps-ibadurrahman-cileungsi */
    $(document).on('click', '#smps-ibadurrahman-cileungsi-call', function(evt)
    {
        /* your code goes here */
		call('021-82460787');		
    });
	
		/* button  #smps-ibnu-syina */
    $(document).on('click', '#smps-ibnu-syina-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.439700,106.962400');
    });
    
        /* button  #smps-ibnu-syina */
    $(document).on('click', '#smps-ibnu-syina-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.439700,106.962400');
    });
    
        /* button  #smps-ibnu-syina */
    $(document).on('click', '#smps-ibnu-syina-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
    
		/* button  #smps-islam-citra-nuansa */
    $(document).on('click', '#smps-islam-citra-nuansa-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.421877,107.029045');
    });
    
        /* button  #smps-islam-citra-nuansa */
    $(document).on('click', '#smps-islam-citra-nuansa-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.421877,107.029045');
    });
    
        /* button  #smps-islam-citra-nuansa */
    $(document).on('click', '#smps-islam-citra-nuansa-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-islam-daarul-istiqoomah */
    $(document).on('click', '#smps-islam-daarul-istiqoomah-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.4197,106.9496');
    });
    
        /* button  #smps-islam-daarul-istiqoomah */
    $(document).on('click', '#smps-islam-daarul-istiqoomah-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.4197,106.9496');
    });
    
        /* button  #smps-islam-daarul-istiqoomah */
    $(document).on('click', '#smps-islam-daarul-istiqoomah-call', function(evt)
    {
        /* your code goes here */
		call('021-8236755');		
    });
	
		/* button  #smps-islam-nuurshshibyan */
    $(document).on('click', '#smps-islam-nuurshshibyan-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.398400,106.969800');
    });
    
        /* button  #smps-islam-nuurshshibyan */
    $(document).on('click', '#smps-islam-nuurshshibyan-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.398400,106.969800');
    });
    
        /* button  #smps-islam-nuurshshibyan */
    $(document).on('click', '#smps-islam-nuurshshibyan-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-it-al-hasaniyyah */
    $(document).on('click', '#smps-it-al-hasaniyyah-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.431700,107.040600');
    });
    
        /* button  #smps-it-al-hasaniyyah */
    $(document).on('click', '#smps-it-al-hasaniyyah-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.431700,107.040600');
    });
    
        /* button  #smps-it-al-hasaniyyah */
    $(document).on('click', '#smps-it-al-hasaniyyah-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-it-alquran-eltahfidh */
    $(document).on('click', '#smps-it-alquran-eltahfidh-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.415335, 107.044053');
    });
    
        /* button  #smps-it-alquran-eltahfidh */
    $(document).on('click', '#smps-it-alquran-eltahfidh-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.415335, 107.044053');
    });
    
        /* button  #smps-it-alquran-eltahfidh */
    $(document).on('click', '#smps-it-alquran-eltahfidh-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-it-fatahillah-cileungsi */
    $(document).on('click', '#smps-it-fatahillah-cileungsi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.423800,107.040000');
    });
    
        /* button  #smps-it-fatahillah-cileungsi */
    $(document).on('click', '#smps-it-fatahillah-cileungsi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.423800,107.040000');
    });
    
        /* button  #smps-it-fatahillah-cileungsi */
    $(document).on('click', '#smps-it-fatahillah-cileungsi-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-it-mutiara-islam */
    $(document).on('click', '#smps-it-mutiara-islam-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.420446,106.964882');
    });
    
        /* button  #smps-it-mutiara-islam */
    $(document).on('click', '#smps-it-mutiara-islam-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.420446,106.964882');
    });
    
        /* button  #smps-it-mutiara-islam */
    $(document).on('click', '#smps-it-mutiara-islam-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-muhammdiyah-1-cileungsi */
    $(document).on('click', '#smps-muhammdiyah-1-cileungsi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.399000,106.965900');
    });
    
        /* button  #smps-muhammdiyah-1-cileungsi */
    $(document).on('click', '#smps-muhammdiyah-1-cileungsi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.399000,106.965900');
    });
    
        /* button  #smps-muhammdiyah-1-cileungsi */
    $(document).on('click', '#smps-muhammdiyah-1-cileungsi-call', function(evt)
    {
        /* your code goes here */
		call('02182480034');		
    });
	
		/* button  #smps-muhammdiyah--cileungsi */
    $(document).on('click', '#smps-muhammdiyah--cileungsi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.3669,106.9888');
    });
    
        /* button  #smps-muhammdiyah--cileungsi */
    $(document).on('click', '#smps-muhammdiyah--cileungsi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.3669,106.9888');
    });
    
        /* button  #smps-muhammdiyah--cileungsi */
    $(document).on('click', '#smps-muhammdiyah--cileungsi-call', function(evt)
    {
        /* your code goes here */
		call('0218240034');		
    });
	
		/* button  #smps-nusantara */
    $(document).on('click', '#smps-nusantara-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.417600,106.969500');
    });
    
        /* button  #smps-nusantara */
    $(document).on('click', '#smps-nusantara-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.417600,106.969500');
    });
    
        /* button  #smps-nusantara */
    $(document).on('click', '#smps-nusantara-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-perintis-cileungsi */
    $(document).on('click', '#smps-perintis-cileungsi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.3932,106.9908');
    });
    
        /* button  #smps-perintis-cileungsi */
    $(document).on('click', '#smps-perintis-cileungsi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.3932,106.9908');
    });
    
        /* button  #smps-perintis-cileungsi */
    $(document).on('click', '#smps-perintis-cileungsi-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-pgri-gandoang */
    $(document).on('click', '#smps-pgri-gandoang-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.461900,106.796100');
    });
    
        /* button  #smps-pgri-gandoang */
    $(document).on('click', '#smps-pgri-gandoang-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.461900,106.796100');
    });
    
        /* button  #smps-pgri-gandoang */
    $(document).on('click', '#smps-pgri-gandoang-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-pgri-suryakencana */
    $(document).on('click', '#smps-pgri-suryakencana-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.399100,106.959300');
    });
    
        /* button  #smps-pgri-suryakencana */
    $(document).on('click', '#smps-pgri-suryakencana-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.399100,106.959300');
    });
    
        /* button  #smps-pgri-suryakencana */
    $(document).on('click', '#smps-pgri-suryakencana-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-plus-al-mahfudz */
    $(document).on('click', '#smps-plus-al-mahfudz-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.407600,106.996100');
    });
    
        /* button  #smps-plus-al-mahfudz */
    $(document).on('click', '#smps-plus-al-mahfudz-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.407600,106.996100');
    });
    
        /* button  #smps-plus-al-mahfudz */
    $(document).on('click', '#smps-plus-al-mahfudz-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-plus-arrusyda */
    $(document).on('click', '#smps-plus-arrusyda-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.411800,107.000400');
    });
    
        /* button  #smps-plus-arrusyda */
    $(document).on('click', '#smps-plus-arrusyda-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.411800,107.000400');
    });
    
        /* button  #smps-plus-arrusyda */
    $(document).on('click', '#smps-plus-arrusyda-call', function(evt)
    {
        /* your code goes here */
		call('0218236390');		
    });
	
		/* button  #smps-plus-fajar-sentosa */
    $(document).on('click', '#smps-plus-fajar-sentosa-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.367300,106.986400');
    });
    
        /* button  #smps-plus-fajar-sentosa */
    $(document).on('click', '#smps-plus-fajar-sentosa-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.367300,106.986400');
    });
    
        /* button  #smps-plus-fajar-sentosa */
    $(document).on('click', '#smps-plus-fajar-sentosa-call', function(evt)
    {
        /* your code goes here */
		call('0218249161');		
    });
	
		/* button  #smps-plus-taman-winata */
    $(document).on('click', '#smps-plus-taman-winata-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.424465,107.017138');
    });
    
        /* button  #smps-plus-taman-winata */
    $(document).on('click', '#smps-plus-taman-winata-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.424465,107.017138');
    });
    
        /* button  #smps-plus-taman-winata */
    $(document).on('click', '#smps-plus-taman-winata-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-regina-caeli */
    $(document).on('click', '#smps-regina-caeli-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.404500,106.975300');
    });
    
        /* button  #smps-regina-caeli */
    $(document).on('click', '#smps-regina-caeli-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.404500,106.975300');
    });
    
        /* button  #smps-regina-caeli */
    $(document).on('click', '#smps-regina-caeli-call', function(evt)
    {
        /* your code goes here */
		call('0218235984');		
    });
	
		/* button  #smps-sejahtera-2 */
    $(document).on('click', '#smps-sejahtera-2-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.406500,106.962000');
    });
    
        /* button  #smps-sejahtera-2 */
    $(document).on('click', '#smps-sejahtera-2-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.406500,106.962000');
    });
    
        /* button  #smps-sejahtera-2 */
    $(document).on('click', '#smps-sejahtera-2-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-taman-quraniyah */
    $(document).on('click', '#smps-taman-quraniyah-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.4163,107.0416');
    });
    
        /* button  #smps-taman-quraniyah */
    $(document).on('click', '#smps-taman-quraniyah-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.4163,107.0416');
    });
    
        /* button  #smps-taman-quraniyah */
    $(document).on('click', '#smps-taman-quraniyah-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-widya-kusuma */
    $(document).on('click', '#smps-widya-kusuma-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.428200,106.955400');
    });
    
        /* button  #smps-widya-kusuma */
    $(document).on('click', '#smps-widya-kusuma-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.428200,106.955400');
    });
    
        /* button  #smps-widya-kusuma */
    $(document).on('click', '#smps-widya-kusuma-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-yapa */
    $(document).on('click', '#smps-yapa-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.396700,106.965800');
    });
    
        /* button  #smps-yapa */
    $(document).on('click', '#smps-yapa-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.396700,106.965800');
    });
    
        /* button  #smps-yapa */
    $(document).on('click', '#smps-yapa-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smps-ypb */
    $(document).on('click', '#smps-ypb-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.393400,106.974000');
    });
    
        /* button  #smps-ypb */
    $(document).on('click', '#smps-ypb-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.393400,106.974000');
    });
    
        /* button  #smps-ypb */
    $(document).on('click', '#smps-ypb-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #mas-al-fatah */
    $(document).on('click', '#mas-al-fatah-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.383000,106.974200');
    });
    
        /* button  #mas-al-fatah */
    $(document).on('click', '#mas-al-fatah-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.383000,106.974200');
    });
    
        /* button  #mas-al-fatah */
    $(document).on('click', '#mas-al-fatah-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #mas-an-nizhamiyyah */
    $(document).on('click', '#mas-an-nizhamiyyah-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.415600,106.956400');
    });
    
        /* button  #mas-an-nizhamiyyah */
    $(document).on('click', '#mas-an-nizhamiyyah-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.415600,106.956400');
    });
    
        /* button  #mas-an-nizhamiyyah */
    $(document).on('click', '#mas-an-nizhamiyyah-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #mas-darul-marhamah */
    $(document).on('click', '#mas-darul-marhamah-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.412064,106.997251');
    });
    
        /* button  #mas-darul-marhamah */
    $(document).on('click', '#mas-darul-marhamah-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.412064,106.997251');
    });
    
        /* button  #mas-darul-marhamah */
    $(document).on('click', '#mas-darul-marhamah-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #sman-1-cileungsi */
    $(document).on('click', '#sman-1-cileungsi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.394100,106.956100');
    });
    
        /* button  #sman-1-cileungsi */
    $(document).on('click', '#sman-1-cileungsi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.394100,106.956100');
    });
    
        /* button  #sman-1-cileungsi */
    $(document).on('click', '#sman-1-cileungsi-call', function(evt)
    {
        /* your code goes here */
		call('0218232236');		
    });
	
		/* button  #sman-2-cileungsi */
    $(document).on('click', '#sman-2-cileungsi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.393961, 106.977609');
    });
    
        /* button  #sman-2-cileungsi */
    $(document).on('click', '#sman-2-cileungsi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.393961, 106.977609');
    });
    
        /* button  #sman-2-cileungsi */
    $(document).on('click', '#sman-2-cileungsi-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smas-daarul-istiqoomah */
    $(document).on('click', '#smas-daarul-istiqoomah-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.402000,106.963300');
    });
    
        /* button  #smas-daarul-istiqoomah */
    $(document).on('click', '#smas-daarul-istiqoomah-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.402000,106.963300');
    });
    
        /* button  #smas-daarul-istiqoomah */
    $(document).on('click', '#smas-daarul-istiqoomah-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smas-fajar-dunia */
    $(document).on('click', '#smas-fajar-dunia-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.436400,106.994900');
    });
    
        /* button  #smas-fajar-dunia */
    $(document).on('click', '#smas-fajar-dunia-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.436400,106.994900');
    });
    
        /* button  #smas-fajar-dunia */
    $(document).on('click', '#smas-fajar-dunia-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smas-muhammadiyah-cileungsi */
    $(document).on('click', '#smas-muhammadiyah-cileungsi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.399300,106.966100');
    });
    
        /* button  #smas-muhammadiyah-cileungsi */
    $(document).on('click', '#smas-muhammadiyah-cileungsi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.399300,106.966100');
    });
    
        /* button  #smas-muhammadiyah-cileungsi */
    $(document).on('click', '#smas-muhammadiyah-cileungsi-call', function(evt)
    {
        /* your code goes here */
		call('02182480034');		
    });
	
		/* button  #smas-plus-darussalam-kopasari */
    $(document).on('click', '#smas-plus-darussalam-kopasari-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.393100,106.943800');
    });
    
        /* button  #smas-plus-darussalam-kopasari */
    $(document).on('click', '#smas-plus-darussalam-kopasari-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.393100,106.943800');
    });
    
        /* button  #smas-plus-darussalam-kopasari */
    $(document).on('click', '#smas-plus-darussalam-kopasari-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #smas-regina-caeli */
    $(document).on('click', '#smas-regina-caeli-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.413636,107.020064');
    });
    
        /* button  #smas-regina-caeli */
    $(document).on('click', '#smas-regina-caeli-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.413636,107.020064');
    });
    
        /* button  #smas-regina-caeli */
    $(document).on('click', '#smas-regina-caeli-call', function(evt)
    {
        /* your code goes here */
		call('0218235984');		
    });
	
		/* button  #smas-widya-kusuma */
    $(document).on('click', '#smas-widya-kusuma-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.432300,106.956200');
    });
    
        /* button  #smas-widya-kusuma */
    $(document).on('click', '#smas-widya-kusuma-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.432300,106.956200');
    });
    
        /* button  #smas-widya-kusuma */
    $(document).on('click', '#smas-widya-kusuma-call', function(evt)
    {
        /* your code goes here */
		call();		
    });
	
		/* button  #rsia-kenari-graha-medika */
    $(document).on('click', '#rsia-kenari-graha-medika-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.410258, 106.960871');
    });
    
        /* button  #rsia-kenari-graha-medika */
    $(document).on('click', '#rsia-kenari-graha-medika-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.410258, 106.960871');
    });
    
        /* button  #rsia-kenari-graha-medika */
    $(document).on('click', '#rsia-kenari-graha-medika-call', function(evt)
    {
        /* your code goes here */
		call('0218230426');		
    });
	
		/* button  #rsu-dr-sismadi */
    $(document).on('click', '#rsu-dr-sismadi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.396630, 106.970449');
    });
    
        /* button  #rsu-dr-sismadi */
    $(document).on('click', '#rsu-dr-sismadi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.396630, 106.970449');
    });
    
        /* button  #rsu-dr-sismadi */
    $(document).on('click', '#rsu-dr-sismadi-call', function(evt)
    {
        /* your code goes here */
		call('02182484065');		
    });
	
		/* button  #rsu-hermina-mekarsari */
    $(document).on('click', '#rsu-hermina-mekarsari-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.405891, 106.976511');
    });
    
        /* button  #rsu-hermina-mekarsari */
    $(document).on('click', '#rsu-hermina-mekarsari-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.405891, 106.976511');
    });
    
        /* button  #rsu-hermina-mekarsari */
    $(document).on('click', '#rsu-hermina-mekarsari-call', function(evt)
    {
        /* your code goes here */
		call('02129232525');		
    });
	
		/* button  #rsu-mary-cieungsi-hijau */
    $(document).on('click', '#rsu-mary-cieungsi-hijau-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.399807, 106.969402');
    });
    
        /* button  #rsu-mary-cieungsi-hijau */
    $(document).on('click', '#rsu-mary-cieungsi-hijau-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.399807, 106.969402');
    });
    
        /* button  #rsu-mary-cieungsi-hijau */
    $(document).on('click', '#rsu-mary-cieungsi-hijau-call', function(evt)
    {
        /* your code goes here */
		call('02182492222');		
    });
	
		/* button  #rsu-mh-thamrin */
    $(document).on('click', '#rsu-mh-thamrin-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.375355, 106.970129');
    });
    
        /* button  #rsu-mh-thamrin */
    $(document).on('click', '#rsu-mh-thamrin-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.375355, 106.970129');
    });
    
        /* button  #rsu-mh-thamrin */
    $(document).on('click', '#rsu-mh-thamrin-call', function(evt)
    {
        /* your code goes here */
		call('0218235052');		
    });
	
		/* button  #rsu-permata-jonggol */
    $(document).on('click', '#rsu-permata-jonggol-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.437786, 107.053724');
    });
    
        /* button  #rsu-permata-jonggol */
    $(document).on('click', '#rsu-permata-jonggol-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.437786, 107.053724');
    });
    
        /* button  #rsu-permata-jonggol */
    $(document).on('click', '#rsu-permata-jonggol-call', function(evt)
    {
        /* your code goes here */
		call('02189931222');		
    });
	
		/* button  #rsud-cileungsi */
    $(document).on('click', '#rsud-cileungsi-direc', function(evt)
    {
        /* your code goes here */
		direc('-6.433317, 107.048570');
    });
    
        /* button  #rsud-cileungsi */
    $(document).on('click', '#rsud-cileungsi-map', function(evt)
    {
        /* your code goes here */ 
		map('-6.433317, 107.048570');
    });
    
        /* button  #rsud-cileungsi */
    $(document).on('click', '#rsud-cileungsi-call', function(evt)
    {
        /* your code goes here */
		call('02189934668');		
    });
	
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
