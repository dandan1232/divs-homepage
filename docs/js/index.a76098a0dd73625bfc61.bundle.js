! function (a) {
    function t(t) {
        for (var e, i, o = t[0], n = t[1], r = 0, s = []; r < o.length; r++) i = o[r], h[i] && s.push(h[i][0]), h[i] = 0;
        for (e in n) Object.prototype.hasOwnProperty.call(n, e) && (a[e] = n[e]);
        for (u && u(t); s.length;) s.shift()()
    }
    var i = {},
        h = {
            0: 0
        };

    function c(t) {
        if (i[t]) return i[t].exports;
        var e = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return a[t].call(e.exports, e, e.exports, c), e.l = !0, e.exports
    }
    c.e = function (r) {
        var t, e = [],
            i = h[r];
        if (0 !== i)
            if (i) e.push(i[2]);
            else {
                var o = new Promise(function (t, e) {
                    i = h[r] = [t, e]
                });
                e.push(i[2] = o);
                var n, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, c.nc && s.setAttribute("nonce", c.nc), s.src = c.p + "js/" + ({
                    1: "lottie_animate",
                    2: "scrawl_canvas_animate",
                    3: "vendors~lottie_animate"
                } [t = r] || t) + ".a76098a0dd73625bfc61.bundle.js", n = function (t) {
                    s.onerror = s.onload = null, clearTimeout(a);
                    var e = h[r];
                    if (0 !== e) {
                        if (e) {
                            var i = t && ("load" === t.type ? "missing" : t.type),
                                o = t && t.target && t.target.src,
                                n = new Error("Loading chunk " + r + " failed.\n(" + i + ": " + o + ")");
                            n.type = i, n.request = o, e[1](n)
                        }
                        h[r] = void 0
                    }
                };
                var a = setTimeout(function () {
                    n({
                        type: "timeout",
                        target: s
                    })
                }, 12e4);
                s.onerror = s.onload = n, document.head.appendChild(s)
            } return Promise.all(e)
    }, c.m = a, c.c = i, c.d = function (t, e, i) {
        c.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, c.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, c.t = function (e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (c.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) c.d(i, o, function (t) {
                return e[t]
            }.bind(null, o));
        return i
    }, c.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return c.d(e, "a", e), e
    }, c.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, c.p = "", c.oe = function (t) {
        throw console.error(t), t
    };
    var e = window.webpackJsonp = window.webpackJsonp || [],
        o = e.push.bind(e);
    e.push = t, e = e.slice();
    for (var n = 0; n < e.length; n++) t(e[n]);
    var u = o;
    c(c.s = 6)
}([function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {}, function (t, e, i) {
    "use strict";
    i.r(e);
    i(0), i(1), i(2), i(3), i(4), i(5);
    var o = function () {
            if (window.ActiveXObject || "ActiveXObject" in window) return "IE";
            var t = navigator.userAgent,
                e = -1 < t.indexOf("Opera");
            return e ? "Opera" : -1 < t.indexOf("Edge") ? "Edge" : -1 < t.indexOf("Firefox") ? "FF" : -1 < t.indexOf("Chrome") ? "Chrome" : -1 < t.indexOf("Safari") ? -1 < t.indexOf("Windows") ? "Safari for Win" : "Safari" : -1 < t.indexOf("compatible") && -1 < t.indexOf("MSIE") && !e ? "IE" : void 0
        }(),
        l = {
            root_font_size: 16,
            browserType: o,
            weChat: -1 < navigator.userAgent.indexOf("MicroMessenger"),
            canPlayCanvas: function () {
                return Modernizr.canvas
            },
            canPlayBodymovin: function () {
                return "IE" !== this.browserType && "Edge" !== this.browserType
            },
            canPlayVideo: function () {
                return Modernizr.video
            },
            paintedEggshell: function () {
                "Chrome" === o || "FF" === o ? 
                console.log("%cDEEP%c计算科学与人工智能学院%c\n%c  by阿蛋 版本号320221123  ", 
                "color:white;background:#B5916F;padding:10px;font-size:24px;line-height:44px", 
                "color:white;background:#231F20;padding:10px;font-size:24px;line-height:44px", "padding:0px", "color:white;background:#666;padding:2px;font-size:12px;line-height:20px") : 
                console.info("© by阿蛋 版本号320221123"), "Edge" === o && 
                console.info("Windows 10 is awesome, right? -From the developer")
               
            },
            getScrollbarWidth: function () {
                var t, e, i = document.createElement("p"),
                    o = {
                        width: "100px",
                        height: "100px",
                        overflowY: "scroll"
                    };
                for (t in o) i.style[t] = o[t];
                return document.body.appendChild(i), e = i.offsetWidth - i.clientWidth, i.remove ? i.remove() : document.body.removeChild(i), e
            }
        },
        n = new Vue({
            el: "header",
            data: {
                ww: 0,
                wh: 0,
                screen_wh: 0,
                scrollTop: 0,
                expandNav: !1,
                stOffset: 100
            },
            computed: {
                isMobileViewOrPadView: function () {
                    return this.ww <= 800
                },
                navStyle: function () {
                    var t = {};
                    return this.ww <= 800 && (t.height = this.screen_wh + "px", this.ww <= 500 && (t.width = this.ww + "px")), t
                },
                navLiClass1: function () {
                    return {
                        active: this.scrollTop <= this.navScrollTop1()
                    }
                },
                navLiClass2: function () {
                    return {
                        active: this.scrollTop > this.navScrollTop1() && this.scrollTop <= this.navScrollTop2()
                    }
                },
                navLiClass3: function () {
                    return {
                        active: this.scrollTop > this.navScrollTop2() && this.scrollTop <= this.navScrollTop3()
                    }
                },
                navLiClass4: function () {
                    return {
                        active: this.scrollTop > this.navScrollTop3()
                    }
                }
            },
            methods: {
                iconMenuClick: function () {
                    this.expandNav = !this.expandNav, this.expandNav ? $("header nav").stop().slideDown(300) : $("header nav").stop().slideUp(300)
                },
                navTo: function (t) {
                    $("html,body").animate({
                        scrollTop: $("section").eq(t + 1).offset().top - 40 + "px"
                    }, 500), this.isMobileViewOrPadView && (this.expandNav = !1, $("header nav").stop().slideUp(300))
                },
                navScrollTop1: function () {
                    return Math.max($("#artworks").offset().top - this.stOffset, this.wh - this.stOffset)
                },
                navScrollTop2: function () {
                    return $("#about-us").offset().top - this.stOffset
                },
                navScrollTop3: function () {
                    return $("#contact").offset().top - this.stOffset - 100
                }
            }
        }),
        r = new Vue({
            el: "footer",
            data: {
                ww: 0,
                isMobile: device.mobile(),
                isTablet: device.tablet(),
                isWeChat: l.weChat,
                qq_img_active: !1,
                wechat_img_active: !1,
                weibo_img_active: !1
            },
            computed: {
                showQRCodeContainer: function () {
                    return 680 < this.ww && !this.isTablet
                },
                qq_link: function () {
                    var t = "";
                    return this.isWeChat ? "#wechat-failed" : this.isMobile || this.isTablet ? 
                    "mqqwpa://im/chat?chat_type=wpa&uin=345652127" + t + 
                    "&version=1&src_type=web&web_src=https://github.com/dandan1232" : "tencent://message/?uin=345652127" 
                    + t + "&Site=https://github.com/dandan1232&Menu=yes"
                }
            }
        }),
        d = function (t) {
            var e = $("#about-us img.photo"),
                i = $("#about-us"),
                o = i.find(".border"),
                n = i.find(".text"),
                r = i.find(".title"),
                s = e.width() / 789 * 591;
            if (t <= 700) {
                e.css("bottom", .4 * -s + "px"), i.css("padding-bottom", "0px");
                var a = 1.4 * s + 60;
                n.css({
                    top: a + "px",
                    width: ""
                }), o.css({
                    height: s + 40 + "px",
                    "padding-right": ""
                }), i.css("height", a + n.height() + 40 + "px"), r.css("top", "")
            } else if (700 < t && t <= 1150) {
                var h = (i.height() - s - r.height()) / 3;
                e.css("bottom", h + "px"), i.css("padding-bottom", "80px"), n.css({
                    top: "auto",
                    width: 900 < t ? o.width() - 100 - e.width() - 50 + "px" : o.width() - 50 - e.width() - 50 + "px"
                }), o.css({
                    height: "auto",
                    "padding-right": 900 < t ? "100px" : ""
                }), i.css("height", "auto"), r.css("top", h + "px")
            } else e.css("bottom", -s / 2 + "px"), i.css("padding-bottom", s / 2 + 50 + "px"), n.css({
                top: "auto",
                width: .85 * o.innerWidth() - 150 - e.width() - 100 + "px"
            }), o.css({
                height: "auto",
                "padding-right": (.85 * o.innerWidth() - 150 - e.width() - n.width()) / 2 + "px"
            }), i.css("height", "auto"), r.css("top", (i.height() - 8 - s / 2 - r.height()) / 2 + "px")
        },
        s = new Vue({
            el: "article",
            data: {
                ww: 0,
                wh: 0,
                inner_ww: 0,
                scrollTop: 0,
                browserType: l.browserType,
                isMobile: device.mobile(),
                isTablet: device.tablet(),
                bg_video_duration: 0,
                bg_video_progress: 0,
                artwork_video_duration: [0, 0],
                artwork_video_progress: [0, 0],
                screen1_right_hover: !1,
                about_us_text_fold: !0,
                about_us_last_p_shown: !1,
                about_us_photo_active: !1,
                about_us_active_flag: !1,
                member_highlight_index: -1,
                member_highlight_timer: null,
                member_hover: !1,
                comment: {
                    name: "",
                    email: "",
                    tel: "",
                    text: ""
                },
                comment_submit_info_state: 0
            },
            computed: {
                isMobileView: function () {
                    return this.ww <= 500
                },
                canPlayCanvas: function () {
                    return l.canPlayCanvas()
                },
                canPlayBodymovin: function () {
                    return l.canPlayBodymovin()
                },
                canPlayVideo: function () {
                    return l.canPlayVideo()
                },
                whStyle: function () {
                    return {
                        height: this.wh + "px"
                    }
                },
                bgVideoStyle: function () {
                    if ("IE" === this.browserType || "Edge" === this.browserType) return this.ww / this.wh >= 16 / 9 ? {
                        width: "100%",
                        height: "auto",
                        left: "0px",
                        top: (this.wh - this.ww / 16 * 9) / 2 + "px"
                    } : {
                        width: "auto",
                        height: "100%",
                        left: (this.ww - this.wh / 9 * 16) / 2 + "px",
                        top: "0px"
                    }
                },
                screen1Style: function () {
                    var t = {};
                    if (this.scrollTop < this.wh) {
                        var e = .35 + .75 * this.scrollTop / this.wh;
                        t.backgroundColor = "rgba(0,0,0," + e + ")"
                    }
                    return t
                },
                aboutUsTextLastPStyle: function () {
                    var t = {};
                    return this.isMobileView && (this.about_us_text_fold ? (t.position = "absolute", t.marginTop = "0") : t.position = "relative", this.about_us_last_p_shown ? t.opacity = "1" : t.opacity = "0"), t
                },
                aboutUsTextLastButOnePStyle: function () {
                    var t = {};
                    return this.isMobileView && this.about_us_text_fold && (t.paddingBottom = "50px"), t
                },
                aboutUsArrowStyle: function () {
                    var t = {};
                    return this.isMobileView && (this.about_us_text_fold ? t.bottom = "25px" : t.bottom = "5px"), t
                },
                aboutUsArrowImgStyle: function () {
                    var t = {};
                    return this.isMobileView && (this.about_us_text_fold ? t.marginTop = "30px" : (t.marginTop = "10px", t.transform = "rotate(180deg)")), t
                },
                aboutUsActiveFirstTime: function () {
                    if (this.about_us_active_flag) return !1;
                    var t = $("#about-us .photo"),
                        e = t.offset().top,
                        i = this.scrollTop > e - this.wh / 2 && this.scrollTop < e + t.height();
                    return i && (this.about_us_active_flag = !0), i
                },
                memberClass: function () {
                    for (var t = [], e = 0; e < $("#team .member").length; e++) t.push({
                        hover: !this.isMobileView && !this.member_hover && this.member_highlight_index === e
                    });
                    return t
                },
                teamBlockStyle: function () {
                    return {
                        top: -60 - ($("#team .member").eq(0).offset().top - this.wh / 2 - this.scrollTop) / 20 + "px"
                    }
                }
            },
            watch: {
                comment: {
                    deep: !0,
                    handler: function () {
                        this.comment_submit_info_state = 0
                    }
                }
            },
            methods: {
                bgVideoInit: function (t) {
                    this.bg_video_duration = t.target.duration
                },
                bgVideoLoadProgress: function (t) {
                    var e = t.target;
                    if (0 < this.bg_video_duration) {
                        for (var i = 0, o = 0; o < e.buffered.length; o++) i += e.buffered.end(o) - e.buffered.start(o);
                        if (i) {
                            var n = Math.floor(i / this.bg_video_duration * 100);
                            n > this.bg_video_progress && (this.bg_video_progress = n), 100 === this.bg_video_progress && $("#bg-video-progress").fadeOut()
                        }
                    }
                },
                artworkVideoInit: function (t, e) {
                    this.artwork_video_duration[t] = e.target.duration
                },
                artworkVideoLoadProgress: function (t, e) {
                    var i = e.target;
                    if (0 < this.artwork_video_duration[t]) {
                        for (var o = 0, n = 0; n < i.buffered.length; n++) o += i.buffered.end(n) - i.buffered.start(n);
                        if (o) {
                            var r = Math.floor(o / this.artwork_video_duration[t] * 100);
                            r > this.artwork_video_progress[t] && (this.artwork_video_progress[t] = r), 100 === this.artwork_video_progress[t] && $(".artwork-" + (t + 1) + " .video-progress").fadeOut()
                        }
                    }
                },
                navTo: function (t) {
                    $("html,body").animate({
                        scrollTop: $("section").eq(t + 1).offset().top - 40 + "px"
                    }, 500)
                },
                members_mouse_enter: function () {
                    this.member_hover = !0, clearInterval(this.member_highlight_timer)
                },
                members_mouse_leave: function () {
                    this.member_hover = !1, this.member_highlight_timer = a()
                },
                member_mouse_enter: function (t) {
                    this.member_highlight_index = t
                },
                member_click: function (t) {
                    clearInterval(this.member_highlight_timer), this.member_highlight_index = t, this.member_highlight_timer = a(5e3)
                },
                aboutUsTextArrowClick: function () {
                    var t = this;
                    this.about_us_text_fold = !this.about_us_text_fold;
                    var e = this.about_us_last_p_shown;
                    e && (this.about_us_last_p_shown = !1), setTimeout(function () {
                        e || (t.about_us_last_p_shown = !0), d(t.ww)
                    }, 200)
                },
                addComment: function () {
                    this.comment.text || (this.comment_submit_info_state = 1), 
                    0 !== this.comment_submit_info_state && 3 !== this.comment_submit_info_state ||
                     (confirm("【此为测试功能】\nname: " + 
                     this.comment.name + "\nemail: " + this.comment.email + 
                     "\ntel: " + this.comment.tel + "\ntext: " + this.comment.text +
                      "\n确定返回提交成功状态吗？") ? this.comment_submit_info_state = 2 :
                       this.comment_submit_info_state = 3)
                }
            },
            created: function () {
                this.member_highlight_timer = a()
            }
        });

    function a(t) {
        return setInterval(function () {
            for (var t = Math.floor(6 * Math.random()); t === s.member_highlight_index;) t = Math.floor(6 * Math.random());
            s.member_highlight_index = t
        }, t || 2e3)
    }
    var f = s,
        h = (new Vue({
            el: ".remodal",
            data: {
                isWeChat: l.weChat
            }
        }), []);

    function c(t) {
        function e(e, i, o) {
            h.forEach(function (t) {
                t(e, i, o)
            })
        }
        e($(window).width() + l.getScrollbarWidth(), $(window).height(), t), setTimeout(function () {
            e($(window).width() + l.getScrollbarWidth(), $(window).height(), t)
        }, 500)
    }

    function u() {
        n.scrollTop = $(window).scrollTop()
    }
    h.push(function (t, e) {
        n.ww = t, n.wh = e, n.screen_wh = window.screen.availHeight, r.ww = t
    }), h.push(function (t, e) {
        f.ww = t, f.wh = e, f.inner_ww = $(window).width();
        var i = $("#artworks .artwork-1"),
            o = i.width(),
            n = o / 2;
        i.css("height", o + "px"), $("#artworks .artwork-2").css("height", n + "px"), $("#artworks .artwork-3").css("height", n + "px"), $("#artworks .artwork-4").css("height", n + "px"), d(t);
        var r = $("#team .member"),
            s = r.width();
        r.css("height", s + "px"), $("#team .member img").css("width", s + "px");
        var a = $("#team .detail p"),
            h = Math.min((s - 60) / 16, l.root_font_size);
        a.css({
            fontSize: h + "px",
            lineHeight: 1.6 * h + "px"
        });
        var c = Math.min(s / 3 / 3, 2 * l.root_font_size);
        $("#team .detail h2").css({
            fontSize: c + "px"
        }), $("#team .detail .line").css({
            width: c + "px",
            height: c + "px",
            top: c / 2 + "px"
        });
        var u = $("#contact .left .content");
        u.css({
            top: (u.parent().height() - u.height()) / 2
        })
    }), $(function () {
        l.paintedEggshell(), c(!0), $(window).resize(function () {
            c(!1)
        }), u(), $(window).scroll(function () {
            u()
        }), $(window).load(function () {
            u()
        }), $("img").attr({
            ondragstart: "return false;",
            border: 0
        })
    }), $(function () {
        $(window).scroll(function () {
            f.scrollTop = $(this).scrollTop()
        }), l.canPlayVideo() && !device.mobile() && window.addEventListener("load", function () {
            var t = document.getElementById("bg-video"),
                e = document.getElementById("artwork-2-video");
            t.muted = !0, t.addEventListener("canplay", function () {
                return t.play()
            }), t.load(), e.muted = !0, e.addEventListener("canplay", function () {
                return e.play()
            }), e.load()
        }, !1), l.canPlayBodymovin() ? Promise.all([i.e(3), i.e(1)]).then(i.bind(null, 10)).then(function (t) {
            t.default()
        }) : l.canPlayVideo() && !device.mobile() && window.addEventListener("load", function () {
            var t = document.getElementById("artwork-1-video");
            t.muted = !0, t.load(), setInterval(function () {
                try {
                    t.play().catch(function (t) {})
                } catch (t) {}
            }, 2e3)
        }, !1), device.mobile() && l.canPlayCanvas() && i.e(2).then(i.bind(null, 11)).then(function (t) {
            var i = t.default;
            i.init(), i.draw(f.ww, f.wh);
            var o = f.ww,
                n = f.wh;
            h.push(function (t, e) {
                t == o && e == n || (i.draw(t, e), o = t, n = e)
            })
        })
    })
}]);
//# sourceMappingURL=index.a76098a0dd73625bfc61.bundle.js.map