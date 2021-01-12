$.fn.megamenu = function (e) {
    function r() {
        $(".megamenu").find("li, a").unbind();
        if (window.innerWidth <= 768) {
            o();
            s();
            if (n == 0) {
                $(".megamenu > li:not(.showhide)").hide(0)
            }
        } else {
            u();
            i()
        }
    }

    function i() {
        $(".megamenu li").bind("mouseover", function () {
            $(this).children(".dropdown, .megapanel").stop().fadeIn(t.interval)
        }).bind("mouseleave", function () {
            $(this).children(".dropdown, .megapanel").stop().fadeOut(t.interval)
        })
    }

    function s() {
        $(".megamenu > li > a").bind("click", function (e) {
            if ($(this).siblings(".dropdown, .megapanel").css("display") == "none") {
                $(this).siblings(".dropdown, .megapanel").slideDown(t.interval);
                $(this).siblings(".dropdown").find("ul").slideDown(t.interval);
                n = 1
            } else {
                $(this).siblings(".dropdown, .megapanel").slideUp(t.interval)
            }
        })
    }

    function o() {
        $(".megamenu > li.showhide").show(0);
        $(".megamenu > li.showhide").bind("click", function () {
            if ($(".megamenu > li").is(":hidden")) {
                $(".megamenu > li").slideDown(300)
            } else {
                $(".megamenu > li:not(.showhide)").slideUp(300);
                $(".megamenu > li.showhide").show(0)
            }
        })
    }

    function u() {
        $(".megamenu > li").show(0);
        $(".megamenu > li.showhide").hide(0)
    }

    var t = {interval: 250};
    var n = 0;
    $(".megamenu").prepend("<li class='showhide'><span class='title'>MENU</span><span class='icon1'></span><span class='icon2'></span></li>");
    r();
    $(window).resize(function () {
        r()
    })
}

/*
 * Title: jQuery Etalage plugin
 * Author: Berend de Jong, Frique
 * Author URI: http://www.frique.me/
 * Version: 1.3.4 (20130622.1)
 */

(function (a) {
    a.fn.etalage = function (b) {
        var c = a.extend({
            align: "left",
            thumb_image_width: 300,
            thumb_image_height: 400,
            source_image_width: 900,
            source_image_height: 1200,
            zoom_area_width: 600,
            zoom_area_height: "justify",
            zoom_area_distance: 10,
            zoom_easing: true,
            click_to_zoom: false,
            zoom_element: "auto",
            show_descriptions: true,
            description_location: "bottom",
            description_opacity: 0.7,
            small_thumbs: 3,
            smallthumb_inactive_opacity: 0.4,
            smallthumb_hide_single: true,
            smallthumb_select_on_hover: false,
            smallthumbs_position: "bottom",
            show_begin_end_smallthumb: true,
            magnifier_opacity: 0.5,
            magnifier_invert: true,
            show_icon: true,
            icon_offset: 20,
            hide_cursor: false,
            show_hint: false,
            hint_offset: 15,
            speed: 600,
            autoplay: true,
            autoplay_interval: 6000,
            keyboard: true,
            right_to_left: false,
            click_callback: function () {
                return true
            },
            change_callback: function () {
                return true
            }
        }, b);
        a.each(this, function () {
            var aG = a(this);
            if (aG.is("ul") && aG.children("li").length && aG.find("img.etalage_source_image").length) {
                var ad, ab, Q, I, aq, t, f, aS, aL, aw, aR = aG.attr("id"), aZ = Math.floor(c.speed * 0.7),
                    aC = Math.round(c.speed / 100), ai = false, z = 0, e = false, ao = true, A = false, x = 0, al = 0,
                    ak = 0, Y = 0, X = 0, aF = "hori";
                if (typeof aR === "undefined" || !aR) {
                    aR = "[no id]"
                }
                if (c.smallthumbs_position === "left" || c.smallthumbs_position === "right") {
                    aF = "vert"
                }
                if (typeof a.browser === "object" && a.browser.msie) {
                    if (a.browser.version < 9) {
                        ao = false;
                        if (a.browser.version < 7) {
                            e = true
                        }
                    }
                }
                aG.addClass("etalage").show();
                var w = aG.children("li").addClass("etalage_thumb");
                w.first().show().addClass("etalage_thumb_active");
                var q = w.length, aJ = c.autoplay;
                if (q < 2) {
                    aJ = false
                }
                if (c.align === "right") {
                    aG.addClass("etalage_right")
                }
                a.each(w, function (a1) {
                    a1 += 1;
                    var a4 = a(this), j = a4.find(".etalage_thumb_image").removeAttr("alt").show(),
                        a3 = a4.find(".etalage_source_image"), a2 = a4.find("a");
                    a4.data("id", a1).addClass("thumb_" + a1);
                    if (!j.length && a3.length) {
                        a4.prepend('<img class="etalage_thumb_image" src="' + a3.attr("src") + '" />')
                    } else {
                        if (!j.length && !a3.length) {
                            a4.remove()
                        }
                    }
                    if (a2.length) {
                        a4.find(".etalage_thumb_image").data("anchor", a2.attr("href"))
                    }
                });
                var av = w.find(".etalage_thumb_image").css({
                    width: c.thumb_image_width,
                    height: c.thumb_image_height
                }).show();
                a.each(av, function () {
                    a(this).data("src", this.src)
                });
                var aO = a('<li class="etalage_magnifier"><div><img /></div></li>').appendTo(aG),
                    aa = aO.children("div"), h = aa.children("img");
                var E = a('<li class="etalage_icon">&nbsp;</li>').appendTo(aG);
                if (c.show_icon) {
                    E.show()
                }
                var r;
                if (c.show_hint) {
                    r = a('<li class="etalage_hint">&nbsp;</li>').appendTo(aG).show()
                }
                var K, s = c.zoom_element;
                if (s !== "auto" && s && a(s).length) {
                    K = a(s).addClass("etalage_zoom_area").html('<div><img class="etalage_zoom_img" /></div>')
                } else {
                    s = "auto";
                    K = a('<li class="etalage_zoom_area"><div><img class="etalage_zoom_img" /></div></li>').appendTo(aG)
                }
                var W = K.children("div"), an;
                if (ao) {
                    an = a('<img class="etalage_zoom_preview" />').css({
                        width: c.source_image_width,
                        height: c.source_image_height,
                        opacity: 0.3
                    }).prependTo(W).show()
                }
                var aB = W.children(".etalage_zoom_img").css({
                    width: c.source_image_width,
                    height: c.source_image_height
                });
                var az;
                if (c.show_descriptions) {
                    az = a('<div class="etalage_description' + ((c.right_to_left) ? " rtl" : "") + '"></div>').prependTo(K)
                }
                var aQ, l, aV, u, y, aj = c.small_thumbs;
                if (q > 1 || !c.smallthumb_hide_single) {
                    aQ = a('<li class="etalage_small_thumbs"><ul></ul></li>').appendTo(aG);
                    l = aQ.children("ul");
                    a.each(av, function () {
                        var i = a(this);
                        Q = i.data("src");
                        I = i.parents(".etalage_thumb").data("id");
                        a('<li><img class="etalage_small_thumb" src="' + Q + '" /></li>').data("thumb_id", I).appendTo(l)
                    });
                    aV = l.children("li").css({opacity: c.smallthumb_inactive_opacity});
                    if (aj < 3) {
                        aj = 3
                    }
                    if (q > aj) {
                        if (c.show_begin_end_smallthumb) {
                            Q = av.eq(q - 1).data("src");
                            I = w.eq(q - 1).data("id");
                            a('<li class="etalage_smallthumb_first etalage_smallthumb_navtoend"><img class="etalage_small_thumb" src="' + Q + '" /></li>').data("src", Q).data("thumb_id", I).css({opacity: c.smallthumb_inactive_opacity}).prependTo(l);
                            Q = av.eq(0).data("src");
                            I = w.eq(0).data("id");
                            a('<li class="etalage_smallthumb_navtostart"><img class="etalage_small_thumb" src="' + Q + '" /></li>').data("src", Q).data("thumb_id", I).css({opacity: c.smallthumb_inactive_opacity}).appendTo(l);
                            aV = l.children("li");
                            aV.eq(1).addClass("etalage_smallthumb_active").css({opacity: 1})
                        } else {
                            aV.eq(0).addClass("etalage_smallthumb_first etalage_smallthumb_active").css({opacity: 1})
                        }
                        aV.eq(aj - 1).addClass("etalage_smallthumb_last")
                    } else {
                        aV.eq(0).addClass("etalage_smallthumb_active").css({opacity: 1})
                    }
                    a.each(aV, function (j) {
                        a(this).data("id", (j + 1))
                    });
                    u = aV.children("img");
                    y = aV.length;
                    if (aF === "vert") {
                        aV.addClass("vertical")
                    }
                }
                if (c.magnifier_invert) {
                    aq = 1
                } else {
                    aq = c.magnifier_opacity
                }
                var aN = parseInt(w.css("borderLeftWidth"), 10) + parseInt(w.css("borderRightWidth"), 10) + parseInt(av.css("borderLeftWidth"), 10) + parseInt(av.css("borderRightWidth"), 10),
                    Z = parseInt(w.css("marginLeft"), 10) + parseInt(w.css("marginRight"), 10),
                    B = parseInt(w.css("paddingLeft"), 10) + parseInt(w.css("paddingRight"), 10) + parseInt(av.css("marginLeft"), 10) + parseInt(av.css("marginRight"), 10) + parseInt(av.css("paddingLeft"), 10) + parseInt(av.css("paddingRight"), 10),
                    N = c.thumb_image_width + aN + Z + B, O = c.thumb_image_height + aN + Z + B, aE = 0, P = 0, ax = 0,
                    ag = 0, aD = 0, o = 0, aH = 0;
                if (q > 1 || !c.smallthumb_hide_single) {
                    aE = parseInt(aV.css("borderLeftWidth"), 10) + parseInt(aV.css("borderRightWidth"), 10) + parseInt(u.css("borderLeftWidth"), 10) + parseInt(u.css("borderRightWidth"), 10);
                    P = parseInt(aV.css("marginTop"), 10);
                    ax = parseInt(aV.css("paddingLeft"), 10) + parseInt(aV.css("paddingRight"), 10) + parseInt(u.css("marginLeft"), 10) + parseInt(u.css("marginRight"), 10) + parseInt(u.css("paddingLeft"), 10) + parseInt(u.css("paddingRight"), 10);
                    if (aF === "vert") {
                        aD = Math.round((O - ((aj - 1) * P)) / aj) - (aE + ax);
                        ag = Math.round((c.thumb_image_width * aD) / c.thumb_image_height);
                        o = ag + aE + ax;
                        aH = aD + aE + ax
                    } else {
                        ag = Math.round((N - ((aj - 1) * P)) / aj) - (aE + ax);
                        aD = Math.round((c.thumb_image_height * ag) / c.thumb_image_width);
                        o = ag + aE + ax;
                        aH = aD + aE + ax
                    }
                }
                var d = parseInt(K.css("borderTopWidth"), 10), aA = parseInt(c.zoom_area_distance, 10),
                    J = parseInt(K.css("paddingTop"), 10), T, a0;
                if ((c.zoom_area_width - (d * 2) - (J * 2)) > c.source_image_width) {
                    T = c.source_image_width
                } else {
                    T = c.zoom_area_width - (d * 2) - (J * 2)
                }
                if (c.zoom_area_height === "justify") {
                    a0 = (O + P + aH) - (d * 2) - (J * 2)
                } else {
                    a0 = c.zoom_area_height - (d * 2) - (J * 2)
                }
                if (a0 > c.source_image_height) {
                    a0 = c.source_image_height
                }
                var aX, at, v, ar;
                if (c.show_descriptions) {
                    aX = parseInt(az.css("borderLeftWidth"), 10) + parseInt(az.css("borderRightWidth"), 10);
                    at = parseInt(az.css("marginLeft"), 10) + parseInt(az.css("marginRight"), 10);
                    v = parseInt(az.css("paddingLeft"), 10) + parseInt(az.css("paddingRight"), 10);
                    ar = T - aX - at - v
                }
                var aM;
                if (e) {
                    aM = a('<iframe marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="javascript:\'<html></html>\'"></iframe>').css({
                        position: "absolute",
                        zIndex: 1
                    }).prependTo(K)
                }
                var S = parseInt(aO.css("borderTopWidth"), 10),
                    aK = parseInt(w.css("borderTopWidth"), 10) + parseInt(w.css("marginTop"), 10) + parseInt(w.css("paddingTop"), 10) + parseInt(av.css("borderTopWidth"), 10) + parseInt(av.css("marginTop"), 10) - S,
                    am = av.offset().left - aG.offset().left - S;
                if (c.smallthumbs_position === "left") {
                    am = am + o + P
                } else {
                    if (c.smallthumbs_position === "top") {
                        aK = aK + aH + P
                    }
                }
                var V = Math.round(T * (c.thumb_image_width / c.source_image_width)),
                    R = Math.round(a0 * (c.thumb_image_height / c.source_image_height)),
                    M = aK + c.thumb_image_height - R, p = am + c.thumb_image_width - V, af = Math.round(V / 2),
                    ae = Math.round(R / 2), H, C;
                if (c.show_hint) {
                    H = parseInt(c.hint_offset, 10) + parseInt(r.css("marginTop"), 10);
                    C = parseInt(c.hint_offset, 10) + parseInt(r.css("marginRight"), 10);
                    if (c.smallthumbs_position === "right") {
                        C = C - o - P
                    }
                }
                if (aF === "vert") {
                    aS = N + P + o;
                    aG.css({width: aS, height: O})
                } else {
                    aS = N;
                    aG.css({width: aS, height: O + P + aH})
                }
                if (c.show_icon) {
                    aw = {
                        top: O - E.outerHeight(true) - parseInt(c.icon_offset, 10),
                        left: parseInt(c.icon_offset, 10)
                    };
                    if (c.smallthumbs_position === "left") {
                        aw.left = o + P + parseInt(c.icon_offset, 10)
                    } else {
                        if (c.smallthumbs_position === "top") {
                            aw.top += aH + P
                        }
                    }
                    E.css(aw)
                }
                if (c.show_hint) {
                    r.css({margin: 0, top: -H, right: -C})
                }
                h.css({margin: 0, padding: 0, width: c.thumb_image_width, height: c.thumb_image_height});
                aa.css({margin: 0, padding: 0, width: V, height: R});
                aw = {margin: 0, padding: 0, left: (p - am) / 2, top: (M - aK) / 2};
                if (c.smallthumbs_position === "left") {
                    aw.left = "+=" + o + P
                } else {
                    if (c.smallthumbs_position === "top") {
                        aw.top = "+=" + aH + P
                    }
                }
                aO.css(aw).hide();
                W.css({width: T, height: a0});
                aw = {margin: 0, opacity: 0};
                if (c.align === "right" && s === "auto") {
                    aw.left = -(T + (d * 2) + (J * 2) + aA)
                } else {
                    if (s === "auto") {
                        aw.left = aS + aA
                    }
                }
                K.css(aw).hide();
                if (c.show_descriptions) {
                    aw = {width: ar, bottom: J, left: J, opacity: c.description_opacity};
                    if (c.description_location === "top") {
                        aw.top = J;
                        aw.bottom = "auto"
                    }
                    az.css(aw).hide()
                }
                if (q > 1 || !c.smallthumb_hide_single) {
                    if (aF === "vert") {
                        aw = {top: 0, height: O};
                        if (c.smallthumbs_position === "left") {
                            w.css({left: o + P})
                        } else {
                            aw.marginLeft = N + P
                        }
                        aQ.css(aw);
                        l.css({height: (aH * y) + (y * P) + 100});
                        u.css({width: ag, height: aD}).attr("height", aD);
                        aV.css({margin: 0, marginBottom: P})
                    } else {
                        aw = {width: N};
                        if (c.smallthumbs_position === "top") {
                            w.css({top: aH + P})
                        } else {
                            aw.top = O + P
                        }
                        aQ.css(aw);
                        l.css({width: (o * y) + (y * P) + 100});
                        u.css({width: ag, height: aD}).attr("width", ag);
                        aV.css({margin: 0, marginRight: P})
                    }
                    if (aF === "vert") {
                        aL = ((aH * aj) + ((aj - 1) * P)) - O
                    } else {
                        aL = ((o * aj) + ((aj - 1) * P)) - N
                    }
                    if (aL > 0) {
                        for (ad = 1; ad <= (y - 1); ad = ad + (aj - 1)) {
                            ab = 1;
                            for (ab; ab <= aL; ab += 1) {
                                if (aF === "vert") {
                                    aV.eq(ad + ab - 1).css({marginBottom: (P - 1)})
                                } else {
                                    aV.eq(ad + ab - 1).css({marginRight: (P - 1)})
                                }
                            }
                        }
                    } else {
                        if (aL < 0) {
                            for (ad = 1; ad <= (y - 1); ad = ad + (aj - 1)) {
                                ab = 1;
                                for (ab; ab <= (-aL); ab += 1) {
                                    if (aF === "vert") {
                                        aV.eq(ad + ab - 1).css({marginBottom: (P + 1)});
                                        l.css({height: parseInt(l.css("height"), 10) + 1})
                                    } else {
                                        aV.eq(ad + ab - 1).css({marginRight: (P + 1)});
                                        l.css({width: parseInt(l.css("width"), 10) + 1})
                                    }
                                }
                            }
                        }
                    }
                }
                if (c.show_icon && !c.magnifier_invert) {
                    aO.css({background: aO.css("background-color") + " " + E.css("background-image") + " center no-repeat"})
                }
                if (c.hide_cursor) {
                    aO.add(E).css({cursor: "none"})
                }
                if (e) {
                    aM.css({width: W.css("width"), height: W.css("height")})
                }
                var ay = w.first().find(".etalage_thumb_image"), ap = w.first().find(".etalage_source_image");
                if (c.magnifier_invert) {
                    h.attr("src", ay.data("src")).show()
                }
                if (ao) {
                    an.attr("src", ay.data("src"))
                }
                aB.attr("src", ap.attr("src"));
                if (c.show_descriptions) {
                    f = ap.attr("title");
                    if (f) {
                        az.html(f).show()
                    }
                }
                var D = function () {
                    if (t) {
                        clearInterval(t);
                        t = false
                    }
                };
                var k = function () {
                    if (t) {
                        D()
                    }
                    t = setInterval(function () {
                        au()
                    }, c.autoplay_interval)
                };
                var U = function () {
                    aO.stop().fadeTo(aZ, aq);
                    E.stop().animate({opacity: 0}, aZ);
                    K.stop().show().animate({opacity: 1}, aZ);
                    if (c.magnifier_invert) {
                        ay.stop().animate({opacity: c.magnifier_opacity}, aZ)
                    }
                    if (aJ) {
                        D()
                    }
                };
                var aW = function () {
                    aO.stop().fadeOut(c.speed);
                    E.stop().animate({opacity: 1}, c.speed);
                    K.stop().animate({opacity: 0}, c.speed, function () {
                        a(this).hide()
                    });
                    if (c.magnifier_invert) {
                        ay.stop().animate({opacity: 1}, c.speed, function () {
                            if (c.click_to_zoom) {
                                A = false
                            }
                        })
                    }
                    clearTimeout(x);
                    if (aJ) {
                        k()
                    }
                };
                var g = function (a3, a1) {
                    var j, a2, i = aG.find(".etalage_smallthumb_active").removeClass("etalage_smallthumb_active");
                    a3.addClass("etalage_smallthumb_active");
                    aO.stop().hide();
                    K.stop().hide();
                    if (!a1) {
                        ai = true;
                        i.stop(true, true).animate({opacity: c.smallthumb_inactive_opacity}, aZ);
                        a3.stop(true, true).animate({opacity: 1}, aZ, function () {
                            ai = false
                        })
                    }
                    aG.find(".etalage_thumb_active").removeClass("etalage_thumb_active").stop().animate({opacity: 0}, c.speed, function () {
                        a(this).hide()
                    });
                    j = w.filter(".thumb_" + a3.data("thumb_id")).addClass("etalage_thumb_active").show().stop().css({opacity: 0}).animate({opacity: 1}, c.speed);
                    ay = j.find(".etalage_thumb_image");
                    ap = j.find(".etalage_source_image");
                    if (c.magnifier_invert) {
                        h.attr("src", ay.data("src"))
                    }
                    if (ao) {
                        an.attr("src", ay.data("src"))
                    }
                    aB.attr("src", ap.attr("src"));
                    if (c.show_descriptions) {
                        f = ap.attr("title");
                        if (f) {
                            az.html(f).show()
                        } else {
                            az.hide()
                        }
                    }
                    if (aJ) {
                        D();
                        k()
                    }
                    a2 = a3.data("id");
                    if (q >= aj) {
                        a2--
                    }
                    ah(a2)
                };
                var G = function (a2, j, i, a1) {
                    a.each(aV, function () {
                        var a4 = a(this), a3 = {opacity: c.smallthumb_inactive_opacity};
                        if (a4.data("id") === a1.data("id")) {
                            a3.opacity = 1
                        }
                        if (aF === "vert") {
                            a3.top = "-=" + a2
                        } else {
                            a3.left = "-=" + a2
                        }
                        a4.animate(a3, aZ, "swing", function () {
                            if (ai) {
                                a1.addClass("etalage_smallthumb_active");
                                ai = false
                            }
                        })
                    });
                    g(a1, true)
                };
                var aY = function () {
                    var a2 = Y - al, a1 = X - ak, j = -a2 / aC, i = -a1 / aC;
                    al = al - j;
                    ak = ak - i;
                    if (a2 < 1 && a2 > -1) {
                        al = Y
                    }
                    if (a1 < 1 && a1 > -1) {
                        ak = X
                    }
                    aB.css({left: al, top: ak});
                    if (ao) {
                        an.css({left: al, top: ak})
                    }
                    if (a2 > 1 || a1 > 1 || a2 < 1 || a1 < 1) {
                        x = setTimeout(function () {
                            aY()
                        }, 25)
                    }
                };
                var L = function () {
                    var i;
                    if (c.magnifier_invert) {
                        aG.find(".etalage_thumb_active").mouseleave()
                    }
                    if (!c.right_to_left) {
                        i = aG.find(".etalage_smallthumb_active").prev();
                        if (!i.length) {
                            if (q > aj) {
                                F()
                            } else {
                                aV.last().trigger("click")
                            }
                            return true
                        }
                    } else {
                        i = aG.find(".etalage_smallthumb_active").next();
                        if (!i.length) {
                            if (q > aj) {
                                ac()
                            } else {
                                aV.first().trigger("click")
                            }
                            return true
                        }
                    }
                    i.trigger("click")
                };
                var au = function () {
                    var i;
                    if (c.magnifier_invert) {
                        aG.find(".etalage_thumb_active").mouseleave()
                    }
                    if (!c.right_to_left) {
                        i = aG.find(".etalage_smallthumb_active").next();
                        if (!i.length) {
                            if (q > aj) {
                                ac()
                            } else {
                                aV.first().trigger("click")
                            }
                            return true
                        }
                    } else {
                        i = aG.find(".etalage_smallthumb_active").prev();
                        if (!i.length) {
                            if (q > aj) {
                                F()
                            } else {
                                aV.last().trigger("click")
                            }
                            return true
                        }
                    }
                    i.trigger("click")
                };
                var n = function (a2) {
                    if (q <= aj || !c.show_begin_end_smallthumb) {
                        a2 = a2 - 1
                    }
                    var a6 = aV.eq(a2);
                    if (a6.length && !ai) {
                        var a5 = aG.find(".etalage_smallthumb_active"), a1 = a5.data("id") - 1, j;
                        if (a1 > a2) {
                            z = a1 - a2;
                            var a3 = aG.find(".etalage_smallthumb_first"), a7 = a3.data("id");
                            if (a2 < a7) {
                                j = a1 - a7;
                                z = z - j;
                                a3.trigger("click")
                            } else {
                                g(a6, false)
                            }
                        } else {
                            if (a1 < a2) {
                                z = a2 - a1;
                                var a4 = aG.find(".etalage_smallthumb_last"), i = a4.data("id") - 1;
                                if (a2 >= i) {
                                    j = i - a1 - 1;
                                    z = z - j;
                                    a4.trigger("click")
                                } else {
                                    g(a6, false)
                                }
                            }
                        }
                    }
                };
                window[aR + "_previous"] = function () {
                    L()
                };
                window[aR + "_next"] = function () {
                    au()
                };
                window[aR + "_show"] = function (i) {
                    n(i)
                };
                var aI = function (i) {
                    if (!c.click_callback(i, aR)) {
                        return false
                    }
                    if (typeof etalage_click_callback === "function") {
                        etalage_click_callback(i, aR);
                        return false
                    }
                    return true
                };
                var ah = function (i) {
                    if (c.change_callback(i, aR)) {
                        if (typeof etalage_change_callback === "function") {
                            etalage_change_callback(i, aR)
                        }
                    }
                };
                w.add(aO).add(E).mouseenter(function () {
                    if (c.show_hint) {
                        r.hide()
                    }
                    if (!c.click_to_zoom || A) {
                        U()
                    }
                }).mouseleave(function () {
                    aW()
                });
                var aU = -(c.source_image_width - T), aT = -(c.source_image_height - a0);
                w.add(aO).add(E).mousemove(function (a5) {
                    var j = Math.round(a5.pageX - ay.offset().left + am),
                        i = Math.round(a5.pageY - ay.offset().top + aK);
                    var a4 = (j - af), a3 = (i - ae);
                    if (a4 < am) {
                        a4 = am
                    }
                    if (a4 > p) {
                        a4 = p
                    }
                    if (a3 < aK) {
                        a3 = aK
                    }
                    if (a3 > M) {
                        a3 = M
                    }
                    aO.css({left: a4, top: a3});
                    if (c.magnifier_invert) {
                        var a2 = a4 - am, a1 = a3 - aK;
                        h.css({left: -a2, top: -a1})
                    }
                    Y = -((a4 - am) * (1 / (c.thumb_image_width / c.source_image_width)));
                    X = -((a3 - aK) * (1 / (c.thumb_image_height / c.source_image_height)));
                    if (Y < aU) {
                        Y = aU
                    }
                    if (X < aT) {
                        X = aT
                    }
                    if (c.zoom_easing) {
                        clearTimeout(x);
                        aY()
                    } else {
                        if (ao) {
                            an.css({left: Y, top: X})
                        }
                        aB.css({left: Y, top: X})
                    }
                });

                function aP(a2) {
                    z = (z) ? z - 1 : 0;
                    ai = true;
                    var a1 = aG.find(".etalage_smallthumb_first").removeClass("etalage_smallthumb_first");
                    var i = aG.find(".etalage_smallthumb_last").removeClass("etalage_smallthumb_last");
                    var a3, j, a5, a4;
                    if (a2 === "left") {
                        a3 = a1.prev().addClass("etalage_smallthumb_first");
                        j = i.prev().addClass("etalage_smallthumb_last");
                        a5 = a1
                    } else {
                        a3 = a1.next().addClass("etalage_smallthumb_first");
                        j = i.next().addClass("etalage_smallthumb_last");
                        a5 = i
                    }
                    if (z) {
                        if (a2 === "left") {
                            a3.trigger("click")
                        } else {
                            j.trigger("click")
                        }
                    } else {
                        a4 = (aF === "vert") ? a3.position().top : a3.position().left;
                        G(a4, a3, j, a5)
                    }
                }

                function m(a5) {
                    ai = true;
                    var a1 = aG.find(".etalage_smallthumb_first").removeClass("etalage_smallthumb_first");
                    var i = aG.find(".etalage_smallthumb_last").removeClass("etalage_smallthumb_last");
                    var a2, j, a4;
                    if (a5 === "end") {
                        a2 = aV.eq(y - aj).addClass("etalage_smallthumb_first");
                        j = aV.eq(y - 1).addClass("etalage_smallthumb_last");
                        a4 = j;
                        if (j.hasClass("etalage_smallthumb_navtostart")) {
                            a4 = j.prev()
                        }
                    } else {
                        a2 = aV.eq(0).addClass("etalage_smallthumb_first");
                        j = aV.eq(aj - 1).addClass("etalage_smallthumb_last");
                        a4 = a2;
                        if (a2.hasClass("etalage_smallthumb_navtoend")) {
                            a4 = a2.next()
                        }
                    }
                    var a3 = (aF === "vert") ? a2.position().top : a2.position().left;
                    G(a3, a2, j, a4)
                }

                function ac() {
                    m("start")
                }

                function F() {
                    m("end")
                }

                if (q > 1 || !c.smallthumb_hide_single) {
                    aV.click(function () {
                        var a7 = a(this), a3, j = 0, a5 = false, a2, a8, a4, a6, a1;
                        if (!a7.hasClass("etalage_smallthumb_active") && (!ai || z)) {
                            if (a7.hasClass("etalage_smallthumb_first") && a7.prev().length) {
                                aP("left")
                            } else {
                                if (a7.hasClass("etalage_smallthumb_navtoend")) {
                                    F()
                                } else {
                                    if (a7.hasClass("etalage_smallthumb_last") && a7.next().length) {
                                        aP("right")
                                    } else {
                                        if (a7.hasClass("etalage_smallthumb_navtostart")) {
                                            ac()
                                        } else {
                                            if (z && !a(this).next().length) {
                                                F();
                                                return true
                                            } else {
                                                if (z && !a(this).prev().length) {
                                                    ac();
                                                    return true
                                                }
                                            }
                                            g(a7, false)
                                        }
                                    }
                                }
                            }
                        }
                    });
                    if (c.smallthumb_select_on_hover) {
                        aV.mouseenter(function () {
                            a(this).trigger("click")
                        })
                    }
                }
                if (c.click_to_zoom) {
                    w.click(function () {
                        A = true;
                        U()
                    })
                } else {
                    aO.click(function () {
                        var i = ay.data("anchor");
                        if (i) {
                            if (aI(i)) {
                                window.location = i
                            }
                        }
                    })
                }
                if (q > 1 && c.keyboard) {
                    a(document).keydown(function (i) {
                        if (i.keyCode === 39 || i.keyCode === "39") {
                            if (!c.right_to_left) {
                                au()
                            } else {
                                L()
                            }
                        }
                        if (i.keyCode === 37 || i.keyCode === "37") {
                            if (!c.right_to_left) {
                                L()
                            } else {
                                au()
                            }
                        }
                    })
                }
                a(window).bind("load", function () {
                    w.css({"background-image": "none"});
                    K.css({"background-image": "none"});
                    if (ao) {
                        ao = false;
                        an.remove()
                    }
                });
                if (aJ) {
                    k()
                }
            }
        });
        return this
    }
})(jQuery);

$(document).ready(function () {
    $('#cssmenu > ul > li > a').click(function () {
        $('#cssmenu li').removeClass('active');
        $(this).closest('li').addClass('active');
        var checkElement = $(this).next();
        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#cssmenu ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if ($(this).closest('li').find('ul').children().length == 0) {
            return true;
        } else {
            return false;
        }
    });
});


// Login Form
$(function () {
    var button = $('#loginButton');
    var box = $('#loginBox');
    var form = $('#loginForm');
    button.removeAttr('href');
    button.mouseup(function (login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function () {
        return false;
    });
    $(this).mouseup(function (login) {
        if (!($(login.target).parent('#loginButton').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});

(function(p,f){var s="string",k=function(e,f){return typeof e===f},e=function(e){return k(e,"undefined")},h=function(e){return k(e,"function")},y=function(e){return"object"===typeof HTMLElement?e instanceof HTMLElement:"object"===typeof e&&1===e.nodeType&&"string"===typeof e.nodeName},C=function(q){function E(a){return b.extend({attr:"",label:"",view:"attr",text:"",className:"",hide:!1},a||{})}function F(){if(!b.isReady){try{f.documentElement.doScroll("left")}catch(a){setTimeout(F,1);return}b.init()}}
var t={MooTools:"$$",Prototype:"$$",jQuery:"*"},n=0,r={},x=q||"simpleCart",z={};q={};q={};var v=p.localStorage,l=p.console||{msgs:[],log:function(a){l.msgs.push(a)}},D={USD:{code:"USD",symbol:"&#36;",name:"US Dollar"},AUD:{code:"AUD",symbol:"&#36;",name:"Australian Dollar"},BRL:{code:"BRL",symbol:"R&#36;",name:"Brazilian Real"},CAD:{code:"CAD",symbol:"&#36;",name:"Canadian Dollar"},CZK:{code:"CZK",symbol:"&nbsp;&#75;&#269;",name:"Czech Koruna",after:!0},DKK:{code:"DKK",symbol:"DKK&nbsp;",name:"Danish Krone"},
EUR:{code:"EUR",symbol:"&euro;",name:"Euro"},HKD:{code:"HKD",symbol:"&#36;",name:"Hong Kong Dollar"},HUF:{code:"HUF",symbol:"&#70;&#116;",name:"Hungarian Forint"},ILS:{code:"ILS",symbol:"&#8362;",name:"Israeli New Sheqel"},JPY:{code:"JPY",symbol:"&yen;",name:"Japanese Yen",accuracy:0},MXN:{code:"MXN",symbol:"&#36;",name:"Mexican Peso"},NOK:{code:"NOK",symbol:"NOK&nbsp;",name:"Norwegian Krone"},NZD:{code:"NZD",symbol:"&#36;",name:"New Zealand Dollar"},PLN:{code:"PLN",symbol:"PLN&nbsp;",name:"Polish Zloty"},
GBP:{code:"GBP",symbol:"&pound;",name:"Pound Sterling"},SGD:{code:"SGD",symbol:"&#36;",name:"Singapore Dollar"},SEK:{code:"SEK",symbol:"SEK&nbsp;",name:"Swedish Krona"},CHF:{code:"CHF",symbol:"CHF&nbsp;",name:"Swiss Franc"},THB:{code:"THB",symbol:"&#3647;",name:"Thai Baht"},BTC:{code:"BTC",symbol:" BTC",name:"Bitcoin",accuracy:4,after:!0}},m={checkout:{type:"PayPal",email:"you@yours.com"},currency:"USD",language:"english-us",cartStyle:"div",cartColumns:[{attr:"name",label:"Name"},{attr:"price",label:"Price",
view:"currency"},{view:"decrement",label:!1},{attr:"quantity",label:"Qty"},{view:"increment",label:!1},{attr:"total",label:"SubTotal",view:"currency"},{view:"remove",text:"Remove",label:!1}],excludeFromCheckout:["thumb"],shippingFlatRate:0,shippingQuantityRate:0,shippingTotalRate:0,shippingCustom:null,taxRate:0,taxShipping:!1,data:{}},b=function(a){if(h(a))return b.ready(a);if(k(a,"object"))return b.extend(m,a)},A,B;b.extend=function(a,d){var c;e(d)&&(d=a,a=b);for(c in d)Object.prototype.hasOwnProperty.call(d,
c)&&(a[c]=d[c]);return a};b.extend({copy:function(a){a=C(a);a.init();return a}});b.extend({isReady:!1,add:function(a,d){var c=new b.Item(a||{}),g=!0,u=!0===d?d:!1;if(!u&&(g=b.trigger("beforeAdd",[c]),!1===g))return!1;(g=b.has(c))?(g.increment(c.quantity()),c=g):r[c.id()]=c;b.update();u||b.trigger("afterAdd",[c,e(g)]);return c},each:function(a,d){var c,g=0,u,e,w;if(h(a))e=a,w=r;else if(h(d))e=d,w=a;else return;for(c in w)if(Object.prototype.hasOwnProperty.call(w,c)){u=e.call(b,w[c],g,c);if(!1===u)break;
g+=1}},find:function(a){var d=[];if(k(r[a],"object"))return r[a];if(k(a,"object"))return b.each(function(c){var g=!0;b.each(a,function(a,b,d){k(a,s)?a.match(/<=.*/)?(a=parseFloat(a.replace("<=","")),c.get(d)&&parseFloat(c.get(d))<=a||(g=!1)):a.match(/</)?(a=parseFloat(a.replace("<","")),c.get(d)&&parseFloat(c.get(d))<a||(g=!1)):a.match(/>=/)?(a=parseFloat(a.replace(">=","")),c.get(d)&&parseFloat(c.get(d))>=a||(g=!1)):a.match(/>/)?(a=parseFloat(a.replace(">","")),c.get(d)&&parseFloat(c.get(d))>a||
(g=!1)):c.get(d)&&c.get(d)===a||(g=!1):c.get(d)&&c.get(d)===a||(g=!1);return g});g&&d.push(c)}),d;e(a)&&b.each(function(a){d.push(a)});return d},items:function(){return this.find()},has:function(a){var d=!1;b.each(function(b){b.equals(a)&&(d=b)});return d},empty:function(){var a={};b.each(function(b){!1===b.remove(!0)&&(a[b.id()]=b)});r=a;b.update()},quantity:function(){var a=0;b.each(function(b){a+=b.quantity()});return a},total:function(){var a=0;b.each(function(b){a+=b.total()});return a},grandTotal:function(){return b.total()+
b.tax()+b.shipping()},update:function(){b.save();b.trigger("update")},init:function(){b.load();b.update();b.ready()},$:function(a){return new b.ELEMENT(a)},$create:function(a){return b.$(f.createElement(a))},setupViewTool:function(){var a,d=p,c;for(c in t)if(Object.prototype.hasOwnProperty.call(t,c)&&p[c]&&(a=t[c].replace("*",c).split("."),(a=a.shift())&&(d=d[a]),"function"===typeof d)){A=d;b.extend(b.ELEMENT._,z[c]);break}},ids:function(){var a=[];b.each(function(b){a.push(b.id())});return a},save:function(){b.trigger("beforeSave");
var a={};b.each(function(d){a[d.id()]=b.extend(d.fields(),d.options())});v.setItem(x+"_items",JSON.stringify(a));b.trigger("afterSave")},load:function(){r={};var a=v.getItem(x+"_items");if(a){try{b.each(JSON.parse(a),function(a){b.add(a,!0)})}catch(d){b.error("Error Loading data: "+d)}b.trigger("load")}},ready:function(a){h(a)?b.isReady?a.call(b):b.bind("ready",a):e(a)&&!b.isReady&&(b.trigger("ready"),b.isReady=!0)},error:function(a){var d="";k(a,s)?d=a:k(a,"object")&&k(a.message,s)&&(d=a.message);
try{l.log("simpleCart(js) Error: "+d)}catch(c){}b.trigger("error",a)}});b.extend({tax:function(){var a=m.taxShipping?b.total()+b.shipping():b.total(),d=b.taxRate()*a;b.each(function(a){a.get("tax")?d+=a.get("tax"):a.get("taxRate")&&(d+=a.get("taxRate")*a.total())});return parseFloat(d)},taxRate:function(){return m.taxRate||0},shipping:function(a){if(h(a))b({shippingCustom:a});else{var d=m.shippingQuantityRate*b.quantity()+m.shippingTotalRate*b.total()+m.shippingFlatRate;h(m.shippingCustom)&&(d+=m.shippingCustom.call(b));
b.each(function(a){d+=parseFloat(a.get("shipping")||0)});return parseFloat(d)}}});B={attr:function(a,b){return a.get(b.attr)||""},currency:function(a,d){return b.toCurrency(a.get(d.attr)||0)},link:function(a,b){return"<a href='"+a.get(b.attr)+"'>"+b.text+"</a>"},decrement:function(a,b){return"<a href='javascript:;' class='"+x+"_decrement'>"+(b.text||"-")+"</a>"},increment:function(a,b){return"<a href='javascript:;' class='"+x+"_increment'>"+(b.text||"+")+"</a>"},image:function(a,b){return"<img src='"+
a.get(b.attr)+"'/>"},input:function(a,b){return"<input type='text' value='"+a.get(b.attr)+"' class='"+x+"_input'/>"},remove:function(a,b){return"<a href='javascript:;' class='"+x+"_remove'>"+(b.text||"X")+"</a>"}};b.extend({writeCart:function(a){var d=m.cartStyle.toLowerCase(),c="table"===d,g=c?"tr":"div",u=c?"th":"div",e=c?"td":"div",w=b.$create(d),d=b.$create(g).addClass("headerRow"),f,h;b.$(a).html(" ").append(w);w.append(d);c=0;for(h=m.cartColumns.length;c<h;c+=1)f=E(m.cartColumns[c]),a="item-"+
(f.attr||f.view||f.label||f.text||"cell")+" "+f.className,f=f.label||"",d.append(b.$create(u).addClass(a).html(f));b.each(function(a,d){b.createCartRow(a,d,g,e,w)});return w},createCartRow:function(a,d,c,g,u){d=b.$create(c).addClass("itemRow row-"+d+" "+(d%2?"even":"odd")).attr("id","cartItem_"+a.id());var e,f,l;u.append(d);u=0;for(c=m.cartColumns.length;u<c;u+=1)e=E(m.cartColumns[u]),f="item-"+(e.attr||(k(e.view,s)?e.view:e.label||e.text||"cell"))+" "+e.className,l=a,l=(h(e.view)?e.view:k(e.view,
s)&&h(B[e.view])?B[e.view]:B.attr).call(b,l,e),f=b.$create(g).addClass(f).html(l),d.append(f);return d}});b.Item=function(a){function d(){k(c.price,s)&&(c.price=parseFloat(c.price.replace(b.currency().decimal,".").replace(/[^0-9\.]+/ig,"")));isNaN(c.price)&&(c.price=0);0>c.price&&(c.price=0);k(c.quantity,s)&&(c.quantity=parseInt(c.quantity.replace(b.currency().delimiter,""),10));isNaN(c.quantity)&&(c.quantity=1);0>=c.quantity&&g.remove()}var c={},g=this;k(a,"object")&&b.extend(c,a);n+=1;for(c.id=
c.id||"SCI-"+n;!e(r[c.id]);)n+=1,c.id="SCI-"+n;g.get=function(a,b){var d=!b;return e(a)?a:h(c[a])?c[a].call(g):e(c[a])?h(g[a])&&d?g[a].call(g):!e(g[a])&&d?g[a]:c[a]:c[a]};g.set=function(a,b){e(a)||(c[a.toLowerCase()]=b,"price"!==a.toLowerCase()&&"quantity"!==a.toLowerCase()||d());return g};g.equals=function(a){for(var b in c)if(Object.prototype.hasOwnProperty.call(c,b)&&"quantity"!==b&&"id"!==b&&a.get(b)!==c[b])return!1;return!0};g.options=function(){var a={};b.each(c,function(d,c,e){var f=!0;b.each(g.reservedFields(),
function(a){a===e&&(f=!1);return f});f&&(a[e]=g.get(e))});return a};d()};b.Item._=b.Item.prototype={increment:function(a){a=parseInt(a||1,10);this.quantity(this.quantity()+a);return 1>this.quantity()?(this.remove(),null):this},decrement:function(a){return this.increment(-parseInt(a||1,10))},remove:function(a){if(!1===b.trigger("beforeRemove",[r[this.id()]]))return!1;delete r[this.id()];a||b.update();return null},reservedFields:function(){return"quantity id item_number price name shipping tax taxRate".split(" ")},
fields:function(){var a={},d=this;b.each(d.reservedFields(),function(b){d.get(b)&&(a[b]=d.get(b))});return a},quantity:function(a){return e(a)?parseInt(this.get("quantity",!0)||1,10):this.set("quantity",a)},price:function(a){return e(a)?parseFloat(this.get("price",!0).toString().replace(b.currency().symbol,"").replace(b.currency().delimiter,"")||1):this.set("price",parseFloat(a.toString().replace(b.currency().symbol,"").replace(b.currency().delimiter,"")))},id:function(){return this.get("id",!1)},
total:function(){return this.quantity()*this.price()}};b.extend({checkout:function(){if("custom"===m.checkout.type.toLowerCase()&&h(m.checkout.fn))m.checkout.fn.call(b,m.checkout);else if(h(b.checkout[m.checkout.type])){var a=b.checkout[m.checkout.type].call(b,m.checkout);a.data&&a.action&&a.method&&!1!==b.trigger("beforeCheckout",[a.data])&&b.generateAndSendForm(a)}else b.error("No Valid Checkout Method Specified")},extendCheckout:function(a){return b.extend(b.checkout,a)},generateAndSendForm:function(a){var d=
b.$create("form");d.attr("style","display:none;");d.attr("action",a.action);d.attr("method",a.method);b.each(a.data,function(a,g,e){d.append(b.$create("input").attr("type","hidden").attr("name",e).val(a))});b.$("body").append(d);d.el.submit();d.remove()}});b.extendCheckout({PayPal:function(a){if(!a.email)return b.error("No email provided for PayPal checkout");var d={cmd:"_cart",upload:"1",currency_code:b.currency().code,business:a.email,rm:"GET"===a.method?"0":"2",tax_cart:(1*b.tax()).toFixed(2),
handling_cart:(1*b.shipping()).toFixed(2),charset:"utf-8"},c=a.sandbox?"https://www.sandbox.paypal.com/cgi-bin/webscr":"https://www.paypal.com/cgi-bin/webscr",g="GET"===a.method?"GET":"POST";a.success&&(d["return"]=a.success);a.cancel&&(d.cancel_return=a.cancel);a.notify&&(d.notify_url=a.notify);b.each(function(a,c){var g=c+1,e=a.options(),f=0,h;d["item_name_"+g]=a.get("name");d["quantity_"+g]=a.quantity();d["amount_"+g]=(1*a.price()).toFixed(2);d["item_number_"+g]=a.get("item_number")||g;b.each(e,
function(a,c,e){10>c&&(h=!0,b.each(m.excludeFromCheckout,function(a){a===e&&(h=!1)}),h&&(f+=1,d["on"+c+"_"+g]=e,d["os"+c+"_"+g]=a))});d["option_index_"+c]=Math.min(10,f)});return{action:c,method:g,data:d}},GoogleCheckout:function(a){if(!a.merchantID)return b.error("No merchant id provided for GoogleCheckout");if("USD"!==b.currency().code&&"GBP"!==b.currency().code)return b.error("Google Checkout only accepts USD and GBP");var d={ship_method_name_1:"Shipping",ship_method_price_1:b.shipping(),ship_method_currency_1:b.currency().code,
_charset_:""},c="https://checkout.google.com/api/checkout/v2/checkoutForm/Merchant/"+a.merchantID;a="GET"===a.method?"GET":"POST";b.each(function(a,c){var e=c+1,f=[],h;d["item_name_"+e]=a.get("name");d["item_quantity_"+e]=a.quantity();d["item_price_"+e]=a.price();d["item_currency_ "+e]=b.currency().code;d["item_tax_rate"+e]=a.get("taxRate")||b.taxRate();b.each(a.options(),function(a,d,c){h=!0;b.each(m.excludeFromCheckout,function(a){a===c&&(h=!1)});h&&f.push(c+": "+a)});d["item_description_"+e]=f.join(", ")});
return{action:c,method:a,data:d}},AmazonPayments:function(a){if(!a.merchant_signature)return b.error("No merchant signature provided for Amazon Payments");if(!a.merchant_id)return b.error("No merchant id provided for Amazon Payments");if(!a.aws_access_key_id)return b.error("No AWS access key id provided for Amazon Payments");var d={aws_access_key_id:a.aws_access_key_id,merchant_signature:a.merchant_signature,currency_code:b.currency().code,tax_rate:b.taxRate(),weight_unit:a.weight_unit||"lb"},c="https://payments"+
(a.sandbox?"-sandbox":"")+".amazon.com/checkout/"+a.merchant_id,g="GET"===a.method?"GET":"POST";b.each(function(c,g){var e=g+1,f=[];d["item_title_"+e]=c.get("name");d["item_quantity_"+e]=c.quantity();d["item_price_"+e]=c.price();d["item_sku_ "+e]=c.get("sku")||c.id();d["item_merchant_id_"+e]=a.merchant_id;c.get("weight")&&(d["item_weight_"+e]=c.get("weight"));m.shippingQuantityRate&&(d["shipping_method_price_per_unit_rate_"+e]=m.shippingQuantityRate);b.each(c.options(),function(a,d,c){var g=!0;b.each(m.excludeFromCheckout,
function(a){a===c&&(g=!1)});g&&"weight"!==c&&"tax"!==c&&f.push(c+": "+a)});d["item_description_"+e]=f.join(", ")});return{action:c,method:g,data:d}},SendForm:function(a){if(!a.url)return b.error("URL required for SendForm Checkout");var d={currency:b.currency().code,shipping:b.shipping(),tax:b.tax(),taxRate:b.taxRate(),itemCount:b.find({}).length},c=a.url,g="GET"===a.method?"GET":"POST";b.each(function(a,c){var g=c+1,e=[],f;d["item_name_"+g]=a.get("name");d["item_quantity_"+g]=a.quantity();d["item_price_"+
g]=a.price();b.each(a.options(),function(a,d,c){f=!0;b.each(m.excludeFromCheckout,function(a){a===c&&(f=!1)});f&&e.push(c+": "+a)});d["item_options_"+g]=e.join(", ")});a.success&&(d["return"]=a.success);a.cancel&&(d.cancel_return=a.cancel);a.extra_data&&(d=b.extend(d,a.extra_data));return{action:c,method:g,data:d}}});q={bind:function(a,d){if(!h(d))return this;this._events||(this._events={});var c=a.split(/ +/);b.each(c,function(a){!0===this._events[a]?d.apply(this):e(this._events[a])?this._events[a]=
[d]:this._events[a].push(d)});return this},trigger:function(a,b){var c=!0,g,f;this._events||(this._events={});if(!e(this._events[a])&&h(this._events[a][0]))for(g=0,f=this._events[a].length;g<f;g+=1)c=this._events[a][g].apply(this,b||[]);return!1===c?!1:!0}};q.on=q.bind;b.extend(q);b.extend(b.Item._,q);q={beforeAdd:null,afterAdd:null,load:null,beforeSave:null,afterSave:null,update:null,ready:null,checkoutSuccess:null,checkoutFail:null,beforeCheckout:null,beforeRemove:null};b(q);b.each(q,function(a,
d,c){b.bind(c,function(){h(m[c])&&m[c].apply(this,arguments)})});b.extend({toCurrency:function(a,d){var c=parseFloat(a),g=d||{},g=b.extend(b.extend({symbol:"$",decimal:".",delimiter:",",accuracy:2,after:!1},b.currency()),g),e=c.toFixed(g.accuracy).split("."),c=e[1],e=e[0],e=b.chunk(e.reverse(),3).join(g.delimiter.reverse()).reverse();return(g.after?"":g.symbol)+e+(c?g.decimal+c:"")+(g.after?g.symbol:"")},chunk:function(a,b){"undefined"===typeof b&&(b=2);return a.match(RegExp(".{1,"+b+"}","g"))||[]}});
String.prototype.reverse=function(){return this.split("").reverse().join("")};b.extend({currency:function(a){if(k(a,s)&&!e(D[a]))m.currency=a;else if(k(a,"object"))D[a.code]=a,m.currency=a.code;else return D[m.currency]}});b.extend({bindOutlets:function(a){b.each(a,function(a,c,e){b.bind("update",function(){b.setOutlet("."+x+"_"+e,a)})})},setOutlet:function(a,d){var c=d.call(b,a);k(c,"object")&&c.el?b.$(a).html(" ").append(c):e(c)||b.$(a).html(c)},bindInputs:function(a){b.each(a,function(a){b.setInput("."+
x+"_"+a.selector,a.event,a.callback)})},setInput:function(a,d,c){b.$(a).live(d,c)}});b.ELEMENT=function(a){this.create(a);this.selector=a||null};b.extend(z,{MooTools:{text:function(a){return this.attr("text",a)},html:function(a){return this.attr("html",a)},val:function(a){return this.attr("value",a)},attr:function(a,b){if(e(b))return this.el[0]&&this.el[0].get(a);this.el.set(a,b);return this},remove:function(){this.el.dispose();return null},addClass:function(a){this.el.addClass(a);return this},removeClass:function(a){this.el.removeClass(a);
return this},append:function(a){this.el.adopt(a.el);return this},each:function(a){h(a)&&b.each(this.el,function(b,c,e){a.call(c,c,b,e)});return this},click:function(a){h(a)?this.each(function(b){b.addEvent("click",function(c){a.call(b,c)})}):e(a)&&this.el.fireEvent("click");return this},live:function(a,d){var c=this.selector;h(d)&&b.$("body").el.addEvent(a+":relay("+c+")",function(a,b){d.call(b,a)})},match:function(a){return this.el.match(a)},parent:function(){return b.$(this.el.getParent())},find:function(a){return b.$(this.el.getElements(a))},
closest:function(a){return b.$(this.el.getParent(a))},descendants:function(){return this.find("*")},tag:function(){return this.el[0].tagName},submit:function(){this.el[0].submit();return this},create:function(a){this.el=A(a)}},Prototype:{text:function(a){if(e(a))return this.el[0].innerHTML;this.each(function(b,c){$(c).update(a)});return this},html:function(a){return this.text(a)},val:function(a){return this.attr("value",a)},attr:function(a,b){if(e(b))return this.el[0].readAttribute(a);this.each(function(c,
e){$(e).writeAttribute(a,b)});return this},append:function(a){this.each(function(b,c){a.el?a.each(function(a,b){$(c).appendChild(b)}):y(a)&&$(c).appendChild(a)});return this},remove:function(){this.each(function(a,b){$(b).remove()});return this},addClass:function(a){this.each(function(b,c){$(c).addClassName(a)});return this},removeClass:function(a){this.each(function(b,c){$(c).removeClassName(a)});return this},each:function(a){h(a)&&b.each(this.el,function(b,c,e){a.call(c,c,b,e)});return this},click:function(a){h(a)?
this.each(function(b,c){$(c).observe("click",function(b){a.call(c,b)})}):e(a)&&this.each(function(a,b){$(b).fire("click")});return this},live:function(a,b){if(h(b)){var c=this.selector;f.observe(a,function(a,e){e===A(a).findElement(c)&&b.call(e,a)})}},parent:function(){return b.$(this.el.up())},find:function(a){return b.$(this.el.getElementsBySelector(a))},closest:function(a){return b.$(this.el.up(a))},descendants:function(){return b.$(this.el.descendants())},tag:function(){return this.el.tagName},
submit:function(){this.el[0].submit()},create:function(a){k(a,s)?this.el=A(a):y(a)&&(this.el=[a])}},jQuery:{passthrough:function(a,b){if(e(b))return this.el[a]();this.el[a](b);return this},text:function(a){return this.passthrough("text",a)},html:function(a){return this.passthrough("html",a)},val:function(a){return this.passthrough("val",a)},append:function(a){this.el.append(a.el||a);return this},attr:function(a,b){if(e(b))return this.el.attr(a);this.el.attr(a,b);return this},remove:function(){this.el.remove();
return this},addClass:function(a){this.el.addClass(a);return this},removeClass:function(a){this.el.removeClass(a);return this},each:function(a){return this.passthrough("each",a)},click:function(a){return this.passthrough("click",a)},live:function(a,b){A(f).delegate(this.selector,a,b);return this},parent:function(){return b.$(this.el.parent())},find:function(a){return b.$(this.el.find(a))},closest:function(a){return b.$(this.el.closest(a))},tag:function(){return this.el[0].tagName},descendants:function(){return b.$(this.el.find("*"))},
submit:function(){return this.el.submit()},create:function(a){this.el=A(a)}}});b.ELEMENT._=b.ELEMENT.prototype;b.ready(b.setupViewTool);b.ready(function(){b.bindOutlets({total:function(){return b.toCurrency(b.total())},quantity:function(){return b.quantity()},items:function(a){b.writeCart(a)},tax:function(){return b.toCurrency(b.tax())},taxRate:function(){return b.taxRate().toFixed()},shipping:function(){return b.toCurrency(b.shipping())},grandTotal:function(){return b.toCurrency(b.grandTotal())}});
b.bindInputs([{selector:"checkout",event:"click",callback:function(){b.checkout()}},{selector:"empty",event:"click",callback:function(){b.empty()}},{selector:"increment",event:"click",callback:function(){b.find(b.$(this).closest(".itemRow").attr("id").split("_")[1]).increment();b.update()}},{selector:"decrement",event:"click",callback:function(){b.find(b.$(this).closest(".itemRow").attr("id").split("_")[1]).decrement();b.update()}},{selector:"remove",event:"click",callback:function(){b.find(b.$(this).closest(".itemRow").attr("id").split("_")[1]).remove()}},
{selector:"input",event:"change",callback:function(){var a=b.$(this),d=a.parent(),c=d.attr("class").split(" ");b.each(c,function(c){c.match(/item-.+/i)&&(c=c.split("-")[1],b.find(d.closest(".itemRow").attr("id").split("_")[1]).set(c,a.val()),b.update())})}},{selector:"shelfItem .item_add",event:"click",callback:function(){var a={};b.$(this).closest("."+x+"_shelfItem").descendants().each(function(d,c){var e=b.$(c);e.attr("class")&&e.attr("class").match(/item_.+/)&&!e.attr("class").match(/item_add/)&&
b.each(e.attr("class").split(" "),function(b){var c,d;if(b.match(/item_.+/)){b=b.split("_")[1];c="";switch(e.tag().toLowerCase()){case "input":case "textarea":case "select":d=e.attr("type");if(!d||("checkbox"===d.toLowerCase()||"radio"===d.toLowerCase())&&e.attr("checked")||"text"===d.toLowerCase()||"number"===d.toLowerCase())c=e.val();break;case "img":c=e.attr("src");break;default:c=e.text()}null!==c&&""!==c&&(a[b.toLowerCase()]=a[b.toLowerCase()]?a[b.toLowerCase()]+", "+c:c)}})});b.add(a)}}])});
f.addEventListener?p.DOMContentLoaded=function(){f.removeEventListener("DOMContentLoaded",DOMContentLoaded,!1);b.init()}:f.attachEvent&&(p.DOMContentLoaded=function(){"complete"===f.readyState&&(f.detachEvent("onreadystatechange",DOMContentLoaded),b.init())});(function(){if("complete"===f.readyState)return setTimeout(b.init,1);if(f.addEventListener)f.addEventListener("DOMContentLoaded",DOMContentLoaded,!1),p.addEventListener("load",b.init,!1);else if(f.attachEvent){f.attachEvent("onreadystatechange",
DOMContentLoaded);p.attachEvent("onload",b.init);var a=!1;try{a=null===p.frameElement}catch(d){}f.documentElement.doScroll&&a&&F()}})();return b};p.simpleCart=C()})(window,document);var JSON;JSON||(JSON={});
(function(){function p(e){return 10>e?"0"+e:e}function f(f){e.lastIndex=0;return e.test(f)?'"'+f.replace(e,function(e){var f=C[e];return"string"===typeof f?f:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function s(e,k){var t,n,r,p,z=h,v,l=k[e];l&&"object"===typeof l&&"function"===typeof l.toJSON&&(l=l.toJSON(e));"function"===typeof q&&(l=q.call(k,e,l));switch(typeof l){case "string":return f(l);case "number":return isFinite(l)?String(l):"null";case "boolean":case "null":return String(l);
case "object":if(!l)return"null";h+=y;v=[];if("[object Array]"===Object.prototype.toString.apply(l)){p=l.length;for(t=0;t<p;t+=1)v[t]=s(t,l)||"null";r=0===v.length?"[]":h?"[\n"+h+v.join(",\n"+h)+"\n"+z+"]":"["+v.join(",")+"]";h=z;return r}if(q&&"object"===typeof q)for(p=q.length,t=0;t<p;t+=1)"string"===typeof q[t]&&(n=q[t],(r=s(n,l))&&v.push(f(n)+(h?": ":":")+r));else for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(r=s(n,l))&&v.push(f(n)+(h?": ":":")+r);r=0===v.length?"{}":h?"{\n"+h+v.join(",\n"+
h)+"\n"+z+"}":"{"+v.join(",")+"}";h=z;return r}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+p(this.getUTCMonth()+1)+"-"+p(this.getUTCDate())+"T"+p(this.getUTCHours())+":"+p(this.getUTCMinutes())+":"+p(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var k=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
e=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,h,y,C={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},q;"function"!==typeof JSON.stringify&&(JSON.stringify=function(e,f,k){var n;y=h="";if("number"===typeof k)for(n=0;n<k;n+=1)y+=" ";else"string"===typeof k&&(y=k);if((q=f)&&"function"!==typeof f&&("object"!==typeof f||"number"!==typeof f.length))throw Error("JSON.stringify");return s("",{"":e})});
"function"!==typeof JSON.parse&&(JSON.parse=function(e,f){function h(e,k){var n,p,l=e[k];if(l&&"object"===typeof l)for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(p=h(l,n),void 0!==p?l[n]=p:delete l[n]);return f.call(e,k,l)}var n;e=String(e);k.lastIndex=0;k.test(e)&&(e=e.replace(k,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return n=eval("("+e+")"),"function"===typeof f?h({"":n},""):n;throw new SyntaxError("JSON.parse");})})();
(function(){if(!this.localStorage)if(this.globalStorage)try{this.localStorage=this.globalStorage}catch(p){}else{var f=document.createElement("div");f.style.display="none";document.getElementsByTagName("head")[0].appendChild(f);if(f.addBehavior){f.addBehavior("#default#userdata");var s=this.localStorage={length:0,setItem:function(e,h){f.load("localStorage");e=k(e);f.getAttribute(e)||this.length++;f.setAttribute(e,h);f.save("localStorage")},getItem:function(e){f.load("localStorage");e=k(e);return f.getAttribute(e)},
removeItem:function(e){f.load("localStorage");e=k(e);f.removeAttribute(e);f.save("localStorage");this.length=0},clear:function(){f.load("localStorage");for(var e=0;attr=f.XMLDocument.documentElement.attributes[e++];)f.removeAttribute(attr.name);f.save("localStorage");this.length=0},key:function(e){f.load("localStorage");return f.XMLDocument.documentElement.attributes[e]}},k=function(e){return e.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,
"-")};f.load("localStorage");s.length=f.XMLDocument.documentElement.attributes.length}}})();