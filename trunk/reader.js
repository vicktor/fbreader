var fbreader={version:"0.1",
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
            fbreader.addfacebook();
            jQuery(".entry").bind("click",fbreader.addfacebook)
        }, addfacebook:function(){

            var b=jQuery("#current-entry");
            var c=jQuery(".entry-actions",b);
            if(jQuery("#facebook").length!=0)
                jQuery("#facebook").remove();
            jQuery(c).append('<span id="facebook" class="comment link unselectable"><span class="entry-comment-action-title">FaceBook</span></span>');
            jQuery("#facebook").css({
                background:"url(http://sinkia.com/js/facebook_icon.png) no-repeat",paddingLeft:"14px"
            });

            jQuery(".entry-comment-action-title").bind("click",function(){
                var u=jQuery("a.entry-title-link",jQuery("#current-entry")).attr("href");
                window.open('http://www.facebook.com/share.php?u='+u,'_blank');
            })
        },init:function(){
            if(typeof jQuery!='function')
                this.addScripts();
            else this.cargando()
        }
    };
fbreader.init();

