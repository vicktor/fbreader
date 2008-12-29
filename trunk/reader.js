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
    },cargando:function(){
        if(typeof jQuery!='function')
            return;
        jQuery.noConflict();

        if(jQuery("#current-entry").length>0)
            fbreader.addnewitems();
            jQuery(".entry").bind("click",fbreader.addnewitems)
        }, addnewitems:function(){
            var b=jQuery("#current-entry");
            var c=jQuery(".entry-actions",b);
            if(jQuery("#facebook").length!=0)
                jQuery("#facebook").remove();
            jQuery(c).append('<span id="facebook" class="link unselectable"><span class="entry-share-action-facebook">FaceBook</span></span>');
            jQuery("#facebook").css({
                background:"url(http://fbreader.googlecode.com/files/facebook_icon.png) no-repeat",paddingLeft:"14px"
            });

            jQuery(c).append('<span id="delicious" class="link unselectable"><span class="entry-share-action-delicious">Delicious</span></span>');
            jQuery("#delicious").css({
                background:"url(http://fbreader.googlecode.com/files/facebook_icon.png) no-repeat",paddingLeft:"14px"
            });

            jQuery(".entry-comment-action-facebook").bind("click",function(){
                var u=jQuery("a.entry-title-link",jQuery("#current-entry")).attr("href");
                window.open('http://www.facebook.com/share.php?u='+u,'_blank');
            });
            jQuery(".entry-comment-action-delicious").bind("click",function(){
                var u=jQuery("a.entry-title-link",jQuery("#current-entry")).attr("href");
                var t=jQuery("a.entry-title-link",jQuery("#current-entry")).text();
                window.open('http://del.icio.us/post?url='+u+'&title='+t, '_blank');
            })

        },init:function(){
            if(typeof jQuery!='function')
                this.addScripts();
            else this.cargando()
        }
    };
fbreader.init();

