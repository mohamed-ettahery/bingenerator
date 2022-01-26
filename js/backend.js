$(function(){
    
//    var bin = "12345";
//    var bin = $('#inpt-bin').val();
    var rand = "",
        card = "",
        cards = "",
        ret = "";
//    var count = 16 - bin.length;
    var YY = "",
        months = ["01","02","03","04","05","06","07","08","09","10","11","12"],
        MM= "",
        CCV= "";
    
    for(var mn=0;mn<12;mn++)
        {
            $('#slct-months').html($('#slct-months').html()+"<option>"+months[mn]+"</optin>");
        }
    
    $('#btn-generate').click(function(){
       "use strict";

            var bin = $('#inpt-bin').val(),
                count = 16 - bin.length,
                Qte = $('#inpt-qte').val();
         //Cards Generation
       for(let j=1;j<=Qte;j++)
        {
            // YY generate
            if($('#slct-months').val() != "Random")
                {
                    MM = $('#slct-months').val();//*
                }
            else
                {
//                    YY = "202"+Math.ceil(Math.random()*7);
                    MM = months[Math.floor(Math.random()*12)];     
                }
            // MM generate
            if($('#slct-years').val() != "Random")
                {
                    YY = "20"+$('#slct-years').val();
                }
            else
                {
//                    MM = months[Math.floor(Math.random()*12)]; 
                     YY = "202"+Math.ceil(Math.random()*7);
                }

            for(let c=0;c<3;c++)
                {
                  var randccv = Math.floor(Math.random()*10);
                    CCV = CCV + randccv;
                }
            
            //card generate
            for(let i=0;i<count ;i++)
                {
                    rand = Math.floor(Math.random()*10);
                    card = card + rand;
                    
                }
//            card = card + "/";
//            card ="<p>"+card +"</p>";
//            card = card +"<br/>";
            cards = cards + bin + card + "|" + MM + "|" + YY + "|" + CCV + "<br/>";
            card="";
            CCV="";
        }
    $('#affDiv').html(cards);
        cards="";
    });
//    //Cards Generation
//    for(let j=1;j<=500;j++)
//        {
//            // YY generate
//            YY = "2"+Math.ceil(Math.random()*7);
//            MM = months[Math.floor(Math.random()*12)];
//            for(let c=0;c<3;c++)
//                {
//                    randccv = Math.floor(Math.random()*10);
//                    CCV = CCV + randccv;
//                }
//            
//            //card generate
//            for(let i=0;i<count ;i++)
//                {
//                    rand = Math.floor(Math.random()*10);
//                    card = card + rand;
//                    
//                }
////            card = card + "/";
////            card ="<p>"+card +"</p>";
////            card = card +"<br/>";
//            cards = cards + bin + card + " | " + MM + " | " + YY + " | " + CCV + " | " + "<br/>";
//            card="";
//            CCV="";
//        }
//
//    $('#affDiv').html(cards);
//    $('#txt').html(cards);

        
//        $(".copy-all").on("click",function(){
//           "use strict";
//            $("#txt").select();
//        });
    
        $(".clear-all").on("click",function(){
           "use strict";
            $("#affDiv").html("XXXXXXXXXXXXXXXX | MM | YY | CVV");
            $('.result-box .msg-after-click').fadeIn(300).fadeOut(600);
        });
    
        //Nice Scroll
    $("#affDiv").niceScroll({
        cursorcolor: "#00c4ff",
        cursorwidth: "16px",
        zindex: 99999999,
        horizrailenabled: false
    });
});