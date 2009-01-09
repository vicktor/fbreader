var items = [
	{ 
		name: "Facebook", 
		slink: "http://www.facebook.com/share.php?u=%link%",
		ico: "http://fbreader.googlecode.com/files/facebook_icon.png"
	},
	{
		name: "Del.icio.us", 
		slink: "http://del.icio.us/post?url=%link%&title=%title%",
		ico: "http://fbreader.googlecode.com/files/delicious_icon.png"
	},
	{
		name: "Meneame", 
		slink: "http://meneame.net/submit.php?url=%link%",
		ico: "http://meneame.net/favicon.ico"
	}
	];


var fbreader={version:"0.2",
    addScripts:function(){
        if(typeof jQuery=='function')
            return;
        var s=document.createElement("script");
        s.src='http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js?rand='+Math.random();
        s.type='text/javascript';
        s.setAttribute("id","script_fbreader");
        s.onload=s.onreadystatechange=this.cargando;
        document.getElementsByTagName("head")[0].appendChild(s)
    },
    cargando:function(){
        if(typeof jQuery!='function')
            return;
        jQuery.noConflict();

        if(jQuery("#current-entry").length>0)
            fbreader.addnewitems();
<<<<<<< .mine
        jQuery(".entry").bind("click",fbreader.addnewitems);
		}, 
    addnewitems:function(){
        var b=jQuery("#current-entry");
        var c=jQuery(".entry-actions",b);
        
        for (var x in items) {
        	var name = items[x].name;
					console.log("Name: " + name);
					
        	// if(jQuery("#" + name).length!=0) continue;
        	
        	var slink = items[x].slink;
        	var ico = items[x].ico;
        	
        	jQuery(c).append('<span id="'+name+'" class="broadcast link unselectable"><span class="entry-share-action-'+name+'">'+name+'</span></span>');
        	jQuery("#" + name).css({background:"url("+ico+") no-repeat",paddingLeft:"14px"});
=======
            jQuery(".entry").bind("click",fbreader.addnewitems)
        }, addnewitems:function(){
            var b=jQuery("#current-entry");
            var c=jQuery(".entry-actions",b);
            if(jQuery("#facebook").length!=0)
                jQuery("#facebook").remove();
            if(jQuery("#delicious").length!=0)
                jQuery("#delicious").remove();
            jQuery(c).append('<span id="facebook" class="broadcast link unselectable"><span class="entry-share-action-facebook">FaceBook</span></span>');
            jQuery("#facebook").css({
                background:"url(http://fbreader.googlecode.com/files/facebook_icon.png) no-repeat",paddingLeft:"14px"
            });
>>>>>>> .r11

<<<<<<< .mine
          jQuery(".entry-share-action-"+name).bind("click",function(){
              var u=jQuery("a.entry-title-link",jQuery("#current-entry")).attr("href");
              var t=jQuery("a.entry-title-link",jQuery("#current-entry")).text();
              var shareUrl = slink.replace("%link%", escape(u)).replace("%title%", escape(t));
              window.open(shareUrl, '_blank');
          });
=======
            jQuery(c).append('<span id="delicious" class="broadcast link unselectable"><span class="entry-share-action-delicious">Delicious</span></span>');
            jQuery("#delicious").css({
                background:"url(http://fbreader.googlecode.com/files/delicious_icon.png) no-repeat",paddingLeft:"14px"
            });

            jQuery(".entry-share-action-facebook").bind("click",function(){
                var u=jQuery("a.entry-title-link",jQuery("#current-entry")).attr("href");
                window.open('http://www.facebook.com/share.php?u='+escape(u),'_blank');
            });
            jQuery(".entry-share-action-delicious").bind("click",function(){
                var u=jQuery("a.entry-title-link",jQuery("#current-entry")).attr("href");
                var t=jQuery("a.entry-title-link",jQuery("#current-entry")).text();
                window.open('http://del.icio.us/post?url='+escape(u)+'&title='+t, '_blank');
            })

        },init:function(){
            if(typeof jQuery!='function')
                this.addScripts();
            else this.cargando()
>>>>>>> .r11
        }
    },
    init:function(){
        if(typeof jQuery!='function')
            this.addScripts();
        else this.cargando()
    }
};
fbreader.init();

