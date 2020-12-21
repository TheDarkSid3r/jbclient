(window.webpackJsonp = window.webpackJsonp || []).push([[23], {
    2834: function (t, e, a) {
        "use strict";
        a.r(e),
            a.d(e, "MainView", (function () {
                return p
            }
            ));
        var n = a(17)
            , o = a.n(n)
            , i = a(22)
            , r = a.n(i)
            , d = a(462)
            , s = a(191)
            , u = a(749)
            , c = a.n(u);
        a(750);
        function l(t, e, a, n, o, i, r) {
            try {
                var d = t[i](r)
                    , s = d.value
            } catch (t) {
                return void a(t)
            }
            d.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        var p = d.a.extend({
            template: r.a.template(c.a),
            lacksAudience: !0,
            bgClasses: ["ydkj-game-lobby", "ydkj-game-shortie", "ydkj-game-screwed", "ydkj-game-disordat", "ydkj-game-jackattack", "ydkj-game-credits"],
            events: {
                "click #button-ydkj-default-y": "sendButtonInput",
                "click #button-ydkj-default-x": "sendButtonInput",
                "click #button-ydkj-default-b": "sendButtonInput",
                "click #button-ydkj-default-a": "sendButtonInput",
                "click #button-ydkj-default-screw": "sendButtonInput",
                "click #button-ydkj-jack-attack-a": "sendButtonInput",
                "click #button-ydkj-startgame": "sendButtonInput"
            },
            initialize: function (t) {
                d.a.prototype.initialize.apply(this, [t]),
                    window.scrollTo(0, 0),
                    o.a.fn.nodoubletapzoom = function () {
                        o()(this).bind("touchstart", (function (t) {
                            var e = t.timeStamp
                                , a = e - (o()(this).data("lastTouch") || e)
                                , n = t.originalEvent.touches.length;
                            o()(this).data("lastTouch", e),
                                !a || a > 500 || n > 1 || (t.preventDefault(),
                                    o()(this).trigger("click"))
                        }
                        ))
                    }
            },
            update: function () {
                var t, e = this;
                return (t = regeneratorRuntime.mark((function t() {
                    var a, n, i;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    if (a = e.model.get("player"),
                                        n = e.model.get("room"),
                                        a && n) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 4:
                                    if (n && n.platform && (i = n.platform.toLowerCase(),
                                        e.$el.attr("class", i),
                                        e.platformCssLoaded = !0,
                                        o()("#player").css("color", "black"),
                                        e.disableDoubleTap()),
                                        void 0 !== e.platformCssLoaded) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 7:
                                    o()("#ydkj_playerName").text(a.playerName),
                                        e.removeButton("#button-ydkj-default-screw"),
                                        e.removeButton("#button-ydkj-startgame"),
                                        e.enableButton("#button-ydkj-default-x"),
                                        e.enableButton("#button-ydkj-default-y"),
                                        e.enableButton("#button-ydkj-default-a"),
                                        e.enableButton("#button-ydkj-default-b"),
                                        t.t0 = a.state,
                                        t.next = "RoomFull" === t.t0 ? 17 : "GameLocked" === t.t0 ? 20 : 23;
                                    break;
                                case 17:
                                    return e.showScreen(".state-full"),
                                        e.setBackground("ydkj-game-lobby"),
                                        t.abrupt("return");
                                case 20:
                                    return e.showScreen(".state-locked"),
                                        e.setBackground("ydkj-game-lobby"),
                                        t.abrupt("return");
                                case 23:
                                    return t.abrupt("break", 24);
                                case 24:
                                    t.t1 = n.state,
                                        t.next = "LoggedIn" === t.t1 ? 27 : "Skip" === t.t1 ? 31 : "WatchBigScreen" === t.t1 ? 37 : "Shortie" === t.t1 ? 44 : "DisOrDat" === t.t1 ? 66 : "DisDatBoth" === t.t1 ? 71 : "JackAttack" === t.t1 ? 75 : "Credits" === t.t1 ? 78 : 84;
                                    break;
                                case 27:
                                    return e.addButton("#button-ydkj-startgame"),
                                        e.showScreen(".state-default"),
                                        e.setBackground("ydkj-game-lobby"),
                                        t.abrupt("break", 85);
                                case 31:
                                    return e.disableButton("#button-ydkj-default-x"),
                                        e.disableButton("#button-ydkj-default-y"),
                                        e.disableButton("#button-ydkj-default-b"),
                                        e.showScreen(".state-default"),
                                        e.setBackground("ydkj-game-jackattack"),
                                        t.abrupt("break", 85);
                                case 37:
                                    return e.disableButton("#button-ydkj-default-x"),
                                        e.disableButton("#button-ydkj-default-y"),
                                        e.disableButton("#button-ydkj-default-a"),
                                        e.disableButton("#button-ydkj-default-b"),
                                        e.showScreen(".state-default"),
                                        e.setBackground("ydkj-game-shortie"),
                                        t.abrupt("break", 85);
                                case 44:
                                    t.t2 = a.state,
                                        t.next = "WithScrew" === t.t2 ? 47 : "NoScrew" === t.t2 ? 51 : "Screwed" === t.t2 ? 54 : "BuzzedIn" === t.t2 ? 57 : 64;
                                    break;
                                case 47:
                                    return e.addButton("#button-ydkj-default-screw"),
                                        e.showScreen(".state-default"),
                                        e.setBackground("ydkj-game-shortie"),
                                        t.abrupt("break", 65);
                                case 51:
                                    return e.showScreen(".state-default"),
                                        e.setBackground("ydkj-game-shortie"),
                                        t.abrupt("break", 65);
                                case 54:
                                    return e.showScreen(".state-default"),
                                        e.setBackground("ydkj-game-screwed"),
                                        t.abrupt("break", 65);
                                case 57:
                                    return e.disableButton("#button-ydkj-default-x"),
                                        e.disableButton("#button-ydkj-default-y"),
                                        e.disableButton("#button-ydkj-default-a"),
                                        e.disableButton("#button-ydkj-default-b"),
                                        e.showScreen(".state-default"),
                                        e.setBackground("ydkj-game-shortie"),
                                        t.abrupt("break", 65);
                                case 64:
                                    return t.abrupt("break", 65);
                                case 65:
                                    return t.abrupt("break", 85);
                                case 66:
                                    return e.disableButton("#button-ydkj-default-y"),
                                        e.disableButton("#button-ydkj-default-a"),
                                        e.showScreen(".state-default"),
                                        e.setBackground("ydkj-game-disordat"),
                                        t.abrupt("break", 85);
                                case 71:
                                    return e.disableButton("#button-ydkj-default-y"),
                                        e.showScreen(".state-default"),
                                        e.setBackground("ydkj-game-disordat"),
                                        t.abrupt("break", 85);
                                case 75:
                                    return e.showScreen(".state-jack-attack"),
                                        e.setBackground("ydkj-game-jackattack"),
                                        t.abrupt("break", 85);
                                case 78:
                                    return e.disableButton("#button-ydkj-default-x"),
                                        e.disableButton("#button-ydkj-default-y"),
                                        !0 === n.demo && e.disableButton("#button-ydkj-default-a"),
                                        e.showScreen(".state-default"),
                                        e.setBackground("ydkj-game-credits"),
                                        t.abrupt("break", 85);
                                case 84:
                                    return t.abrupt("break", 85);
                                case 85:
                                    e.onResize();
                                case 86:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                )),
                    function () {
                        var e = this
                            , a = arguments;
                        return new Promise((function (n, o) {
                            var i = t.apply(e, a);
                            function r(t) {
                                l(i, n, o, r, d, "next", t)
                            }
                            function d(t) {
                                l(i, n, o, r, d, "throw", t)
                            }
                            r(void 0)
                        }
                        ))
                    }
                )()
            },
            sendButtonInput: function (t) {
                var e = o()(t.target).data("button");
                s.app.client.send("SendMessageToRoomOwner", {
                    button: e
                }),
                    window.navigator && window.navigator.vibrate && window.navigator.vibrate(50)
            },
            removeButton: function (t) {
                o()(t).css("display", "none")
            },
            addButton: function (t) {
                o()(t).css("display", "inline")
            },
            enableButton: function (t) {
                o()(t).prop("disabled", !1),
                    o()(t).removeClass(o()(t).attr("class-disable")),
                    o()(t).addClass(o()(t).attr("class-base"))
            },
            disableButton: function (t) {
                o()(t).prop("disabled", !0),
                    o()(t).removeClass(o()(t).attr("class-base")),
                    o()(t).addClass(o()(t).attr("class-disable"))
            },
            setBackground: function (t) {
                o()("#ydkj-game").addClass(t),
                    this.bgClasses.forEach((function (e) {
                        t !== e && o()("#ydkj-game").removeClass(e)
                    }
                    ))
            },
            disableDoubleTap: function () {
                o()("#button-ydkj-default-screw").nodoubletapzoom(),
                    o()("#button-ydkj-default-a").nodoubletapzoom(),
                    o()("#button-ydkj-default-b").nodoubletapzoom(),
                    o()("#button-ydkj-default-x").nodoubletapzoom(),
                    o()("#button-ydkj-default-y").nodoubletapzoom(),
                    o()("#button-ydkj-jack-attack-a").nodoubletapzoom()
            },
            onResize: function () {
                var t = o()(window).width()
                    , e = o()(window).height() - 125
                    , a = Math.floor(.4 * t)
                    , n = Math.floor(.2 * t)
                    , i = a / 1.65
                    , r = 3.55 * i;
                4.24 * a > e && (r = 3.55 * (i = (a = e / 4.24) / 1.65),
                    n = a / 2),
                    o()("#button-ydkj-default-y").css("width", a),
                    o()("#button-ydkj-default-y").attr("width", a),
                    o()("#button-ydkj-default-y").css("height", a),
                    o()("#button-ydkj-default-y").attr("height", a),
                    o()("#button-ydkj-default-b").css("width", a),
                    o()("#button-ydkj-default-b").attr("width", a),
                    o()("#button-ydkj-default-b").css("height", a),
                    o()("#button-ydkj-default-b").attr("height", a),
                    o()("#button-ydkj-default-x").css("width", a),
                    o()("#button-ydkj-default-x").attr("width", a),
                    o()("#button-ydkj-default-x").css("height", a),
                    o()("#button-ydkj-default-x").attr("height", a),
                    o()("#button-ydkj-default-a").css("width", a),
                    o()("#button-ydkj-default-a").attr("width", a),
                    o()("#button-ydkj-default-a").css("height", a),
                    o()("#button-ydkj-default-a").attr("height", a),
                    o()("#button-ydkj-default-mid").css("width", 2 * a + n),
                    o()("#button-ydkj-default-mid").attr("width", 2 * a + n),
                    o()("#button-ydkj-default-spacer").css("width", n),
                    o()("#button-ydkj-default-spacer").attr("width", n),
                    o()("#button-ydkj-default-screw").css("width", r),
                    o()("#button-ydkj-default-screw").attr("width", r),
                    o()("#button-ydkj-default-screw").css("height", i),
                    o()("#button-ydkj-default-screw").attr("height", i),
                    o()("#button-ydkj-jack-attack-a").css("width", r),
                    o()("#button-ydkj-jack-attack-a").attr("width", r),
                    o()("#button-ydkj-jack-attack-a").css("height", r),
                    o()("#button-ydkj-jack-attack-a").attr("height", r),
                    e = o()(window).height() - o()("#player").outerHeight(!0),
                    o()(".ydkj-page").css("height", e),
                    o()(".ydkj-page").attr("height", e),
                    o()(".ydkj-page").css("width", t),
                    o()(".ydkj-page").attr("width", t)
            }
        })
    },
    460: function (t, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return v
        }
        ));
        var n = a(41)
            , o = a.n(n)
            , i = a(3)
            , r = (a(461),
                a(17))
            , d = a.n(r)
            , s = a(31)
            , u = a.n(s)
            , c = a(22)
            , l = a.n(c)
            , p = a(191);
        function b(t, e) {
            return function (t) {
                if (Array.isArray(t))
                    return t
            }(t) || function (t, e) {
                if (!(Symbol.iterator in Object(t)) && "[object Arguments]" !== Object.prototype.toString.call(t))
                    return;
                var a = []
                    , n = !0
                    , o = !1
                    , i = void 0;
                try {
                    for (var r, d = t[Symbol.iterator](); !(n = (r = d.next()).done) && (a.push(r.value),
                        !e || a.length !== e); n = !0)
                        ;
                } catch (t) {
                    o = !0,
                        i = t
                } finally {
                    try {
                        n || null == d.return || d.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
                return a
            }(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var h = u.a.View.extend({
            el: "#banner",
            template: l.a.template('\n    <div class="banner-image"></div>\n    <div class="banner-text"></div>\n    <div class="banner-cta"></div>\n'),
            events: {
                click: "onBannerClick"
            },
            bindings: {
                ":el": {
                    attributes: [{
                        name: "class",
                        observe: ["visible", "theme"],
                        onGet: function (t) {
                            var e = b(t, 2)
                                , a = e[0]
                                , n = e[1] || "no-theme";
                            return a && (n += " show"),
                                n
                        }
                    }]
                },
                ".banner-text": "copy",
                ".banner-cta": "cta"
            },
            initialize: function (t) {
                this.render(),
                    this.listenTo(this.model, "change:visible", this.visibleDidChange)
            },
            onBannerClick: function () {
                p.analytics.trackEvent("SlideBanner", "SlideBannerClicked", this.getCampaign(), 0),
                    this.model.get("url") && window.open(this.model.get("url"), "_blank")
            },
            onRender: function () {
                this.stickit()
            },
            visibleDidChange: function (t, e) {
                setTimeout((function () {
                    d()(window).trigger("resize")
                }
                ), .5),
                    e && p.analytics.trackEvent("SlideBanner", "SlideBannerOn", this.getCampaign(), 0)
            },
            getCampaign: function () {
                var t = this.model.get("url");
                if (!t)
                    return "";
                var e = "";
                t.split("?")[1] && (e = new URLSearchParams(window.location.search).get("utm_campaign") || "");
                return e
            }
        });
        function k(t, e, a, n, o, i, r) {
            try {
                var d = t[i](r)
                    , s = d.value
            } catch (t) {
                return void a(t)
            }
            d.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        function y(t) {
            return function () {
                var e = this
                    , a = arguments;
                return new Promise((function (n, o) {
                    var i = t.apply(e, a);
                    function r(t) {
                        k(i, n, o, r, d, "next", t)
                    }
                    function d(t) {
                        k(i, n, o, r, d, "throw", t)
                    }
                    r(void 0)
                }
                ))
            }
        }
        function f(t, e) {
            for (var a = 0; a < e.length; a++) {
                var n = e[a];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
            }
        }
        function g(t, e, a) {
            return e in t ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = a,
                t
        }
        var v = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var e, a, n, r, d, s;
            return e = t,
                a = null,
                n = [{
                    key: "update",
                    value: (s = y(regeneratorRuntime.mark((function t(e, a) {
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (a && "PostGame" === a.lobbyState) {
                                            t.next = 3;
                                            break
                                        }
                                        return this.hide(),
                                            t.abrupt("return");
                                    case 3:
                                        if (this.view) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 6,
                                            this.init(e, a);
                                    case 6:
                                        this.show();
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    ))),
                        function (t, e) {
                            return s.apply(this, arguments)
                        }
                    )
                }, {
                    key: "init",
                    value: (d = y(regeneratorRuntime.mark((function t(e) {
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (e) {
                                            t.next = 3;
                                            break
                                        }
                                        return this.bannerData = !1,
                                            t.abrupt("return");
                                    case 3:
                                        return t.next = 5,
                                            this.loadBannerData(e);
                                    case 5:
                                        if (this.bannerData = t.sent,
                                            this.bannerData) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 8:
                                        this.view = new h({
                                            model: new o.a.Model(this.bannerData)
                                        }),
                                            this.isInitialized = !0;
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    ))),
                        function (t) {
                            return d.apply(this, arguments)
                        }
                    )
                }, {
                    key: "show",
                    value: function () {
                        this.view && this.view.model.set({
                            visible: !0
                        })
                    }
                }, {
                    key: "hide",
                    value: function () {
                        this.view && this.view.model.set({
                            visible: !1
                        })
                    }
                }, {
                    key: "loadBannerData",
                    value: (r = y(regeneratorRuntime.mark((function t(e) {
                        var a, n;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0,
                                            t.next = 3,
                                            fetch(i.a.BannersUrl);
                                    case 3:
                                        return a = t.sent,
                                            t.next = 6,
                                            a.json();
                                    case 6:
                                        if ((n = t.sent) && n.postGameBanners) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 9:
                                        return t.abrupt("return", n.postGameBanners[e]);
                                    case 12:
                                        return t.prev = 12,
                                            t.t0 = t.catch(0),
                                            console.error("Unable to load banner data", t.t0),
                                            t.abrupt("return", !1);
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                        }
                        ), t, null, [[0, 12]])
                    }
                    ))),
                        function (t) {
                            return r.apply(this, arguments)
                        }
                    )
                }, {
                    key: "isVisible",
                    get: function () {
                        return !!this.view && "on" === this.view.state
                    }
                }],
                a && f(e.prototype, a),
                n && f(e, n),
                t
        }();
        g(v, "view", null),
            g(v, "isInitialized", !1),
            g(v, "bannerConfig", null)
    },
    461: function (t, e, a) { },
    462: function (t, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return y
        }
        ));
        var n = a(22)
            , o = a.n(n)
            , i = a(17)
            , r = a.n(i)
            , d = a(41)
            , s = a.n(d)
            , u = a(31)
            , c = a.n(u)
            , l = a(191)
            , p = a(83)
            , b = a(460)
            , h = a(47);
        a(463),
            a(464),
            a(465);
        function k(t, e, a, n, o, i, r) {
            try {
                var d = t[i](r)
                    , s = d.value
            } catch (t) {
                return void a(t)
            }
            d.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        var y = c.a.View.extend({
            appId: "legacymain",
            appTag: "legacymain",
            appVersion: "3.2.1",
            template: null,
            initialize: function (t) {
                var e = this;
                this.mergeOptions(t, ["appId", "appTag"]),
                    l.app.debug.reset(),
                    l.app.analytics.setApplication(this.getOption("appTag"), this.getOption("appId"), this.appVersion),
                    l.app.analytics.trackScreenView(this.getOption("appId")),
                    this.model = new s.a.Model({});
                var a = l.app.client.parseEntities();
                this.model.set(a),
                    this.model.on("change", this.controllerUpdate, this),
                    this.model.on("change", (function () {
                        e.update().catch(e.caughtError)
                    }
                    )),
                    l.app.client.on("client:entityDidChange", this.onEntityDidChange.bind(this)),
                    l.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyed),
                    l.app.client.on("client:disconnected", this.onDisconnected),
                    l.app.client.on("client:connection", this.onConnectionMessage.bind(this))
            },
            render: function () {
                this.model.set("username", h.a.safeText(l.app.client.name), {
                    silent: !0
                }),
                    this.$el.html(this.template(this.model.toJSON())),
                    this.onResizeWithContext = this.onResize.bind(this),
                    window.addEventListener("resize", this.onResizeWithContext)
            },
            onEntityDidChange: function (t, e) {
                this.model.unset(t, {
                    silent: !0
                }),
                    this.model.set(t, e)
            },
            controllerUpdate: function () {
                var t = this.model.get("room") || {}
                    , e = this.model.get("player")
                    , a = t.state || ""
                    , n = t.lobbyState;
                l.app.debug.pushState({
                    customerBlob: e,
                    roomBlob: t
                }),
                    n || -1 === a.indexOf("_") || (n = t.state.split("_")[1]),
                    "PostGame" === n || "Credits" === a || "GameOver" === a || "PostGame" === a || "DayEnd" === a || t.gameResults ? (b.a.isInitialized || b.a.init(this.getOption("appTag")),
                        b.a.show()) : b.a.hide(),
                    l.app.storage && l.app.storage.isSupported && t.platformId && l.app.storage.setTag("platform-".concat(t.platformId))
            },
            update: function () {
                return (t = regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", null);
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                )),
                    function () {
                        var e = this
                            , a = arguments;
                        return new Promise((function (n, o) {
                            var i = t.apply(e, a);
                            function r(t) {
                                k(i, n, o, r, d, "next", t)
                            }
                            function d(t) {
                                k(i, n, o, r, d, "throw", t)
                            }
                            r(void 0)
                        }
                        ))
                    }
                )();
                var t
            },
            caughtError: function (t) {
                throw t
            },
            onAttach: function () {
                this.update().catch(this.caughtError),
                    r()(".gallery-link").click(this.artifactClicked),
                    l.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
            },
            showTwitchBroadcasterDialog: function (t) {
                var e = "<div class='icon-".concat(l.app.client.roles.broadcaster.platform, "'>").concat(l.app.client.roles.broadcaster.name, "</div>");
                e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>",
                    this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : l.app.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"),
                    p.a.show("custom", {
                        html: e,
                        position: "bottom",
                        timer: t,
                        backdrop: "transparent",
                        customClass: {
                            container: "jbgTwitchContainer",
                            popup: "jbgTwitchPopup",
                            content: "jbgTwitchContent",
                            closeButton: "jbgCloseButton"
                        },
                        showCloseButton: !0,
                        closeButtonHtml: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.00006L2 20" stroke="#0C0C0C" stroke-width="3"></path><path d="M2 2.00001L20 20" stroke="#0C0C0C" stroke-width="3" /></svg >',
                        showConfirmButton: !1,
                        showClass: {
                            popup: "jbgTwitchShow"
                        },
                        hideClass: {
                            popup: "jbgTwitchHide"
                        }
                    })
            },
            onBeforeDestroy: function () {
                this.model.stopListening()
            },
            artifactClicked: function () {
                l.app.analytics.trackEvent("PostGame", "galleryClicked", this.getOption("appTag"))
            },
            showScreen: function (t, e) {
                var a = r()(t);
                return this.activeScreen && t === this.activeScreen || (this.activeScreen && (r()(this.activeScreen).fadeOut("fast", (function () { }
                )),
                    r()(this.activeScreen).show(),
                    r()(this.activeScreen).addClass("pt-page-off")),
                    a.hide(),
                    a.removeClass("pt-page-off"),
                    a.removeClass("pt-page-moveToLeft"),
                    a.fadeIn("fast", (function () {
                        e && e()
                    }
                    )),
                    this.activeScreen = t,
                    this.onResize(),
                    this.throttledTrackScreenView || (this.throttledTrackScreenView = o.a.throttle(this.trackScreenView.bind(this), 48e4)),
                    this.throttledTrackScreenView(this.getOption("appTag"))),
                    !1
            },
            notify: function () {
                p.a.vibrate()
            },
            trackScreenView: function () {
                l.app.analytics.trackScreenView(this.getOption("appTag")),
                    l.app.storage && l.app.storage.isSupported && l.app.storage.setTag("played-".concat(this.getOption("appTag")))
            },
            onRoomWasDestroyed: function () {
                l.app.storage && l.app.storage.isSupported && (l.app.storage.remove("roomCode"),
                    l.app.storage.remove("reconnect")),
                    p.a.show("error", {
                        titleText: "Disconnected",
                        text: "Thanks for playing!",
                        onClose: function () {
                            window.location.reload(!0)
                        }
                    })
            },
            onDisconnected: function () {
                p.a.show("error", {
                    titleText: "Disconnected",
                    text: "You have been disconnected.",
                    onClose: function () {
                        window.location.reload(!0)
                    }
                })
            },
            onConnectionMessage: function (t) {
                var e = "".concat(t.status, " ").concat(t.attempt ? "".concat(t.attempt, "/5'") : "");
                if (p.a.show("toast", {
                    text: e
                }),
                    "connected" === t.status) {
                    var a = l.app.client.parseEntities();
                    this.model.set(a)
                }
            },
            onResize: function () {
                var t = r()("#player").outerHeight(!0) || 0
                    , e = b.a.isVisible ? r()("#slide-in-banner").outerHeight(!0) : 0
                    , a = r()(window).width()
                    , n = r()(window).height() - t;
                r()(".".concat(this.getOption("appTag"), "-page")).css("height", n - e),
                    r()(".".concat(this.getOption("appTag"), "-page")).attr("height", n - e),
                    r()(".".concat(this.getOption("appTag"), "-page")).css("top", t),
                    r()(".".concat(this.getOption("appTag"), "-page")).css("width", a),
                    r()(".".concat(this.getOption("appTag"), "-page")).attr("width", a)
            }
        })
    },
    463: function (t, e, a) { },
    464: function (t, e, a) { },
    465: function (t, e, a) { },
    749: function (t, e) {
        t.exports = '<div id="page-ydkj2015" class="page blue">\n    <div id="player" style="background:#000000;">\n        <h1 id="ydkj_playerName" class="ydkj-playerName-text"><%=username%></h1>\n    </div>\n\n    <div id="ydkj-preload-1" class="ydkj-preload-1"></div>\n    <div id="ydkj-preload-2" class="ydkj-preload-2"></div>\n    <div id="ydkj-preload-3" class="ydkj-preload-3"></div>\n    <div id="ydkj-preload-4" class="ydkj-preload-4"></div>\n    <div id="ydkj-preload-4" class="ydkj-preload-5"></div>\n    <div id="ydkj-button-preload-1" class="ydkj-button-preload-1"></div>\n    <div id="ydkj-button-preload-2" class="ydkj-button-preload-2"></div>\n    <div id="ydkj-button-preload-3" class="ydkj-button-preload-3"></div>\n    <div id="ydkj-button-preload-4" class="ydkj-button-preload-4"></div>\n    <div id="ydkj-button-preload-5" class="ydkj-button-preload-5"></div>\n    <div id="ydkj-button-preload-6" class="ydkj-button-preload-6"></div>\n    <div id="ydkj-button-preload-7" class="ydkj-button-preload-7"></div>\n    <div id="ydkj-button-preload-8" class="ydkj-button-preload-8"></div>\n    <div id="ydkj-button-preload-9" class="ydkj-button-preload-9"></div>\n    <div id="ydkj-button-preload-10" class="ydkj-button-preload-10"></div>\n    <div id="ydkj-button-preload-11" class="ydkj-button-preload-11"></div>\n    <div id="ydkj-button-preload-12" class="ydkj-button-preload-12"></div>\n    <div id="ydkj-button-preload-13" class="ydkj-button-preload-13"></div>\n    <div id="ydkj-button-preload-14" class="ydkj-button-preload-14"></div>\n    <div id="ydkj-button-preload-15" class="ydkj-button-preload-15"></div>\n    <div id="ydkj-button-preload-16" class="ydkj-button-preload-16"></div>\n    \n    <div id="ydkj-game" class="game pt-pageholder">\n    \n        <div id="ydkj-default" class="pt-page-off state-default ydkj-page">\n            <div class="ydkj-gameplay gameplay-centered">\n\n                <div style="margin:auto;" >\n                    <button type="button" id="button-ydkj-default-y" data-button="ANS_1" class="button-y" class-base="button-y" class-disable="button-y-disable" ></button>\n                </div>\n\n                <div id="button-ydkj-default-mid" style="margin:auto;" >\n                    <div style="float:left;">\n                        <button type="button" id="button-ydkj-default-x" data-button="ANS_2" class="button-x" class-base="button-x" class-disable="button-x-disable" ></button>\n                    </div>\n                    <div id="button-ydkj-default-spacer" style="float:left; width:15px;"></div>\n                    <div style="float:right;">\n                        <button type="button" id="button-ydkj-default-b" data-button="ANS_3" class="button-b" class-base="button-b" class-disable="button-b-disable" ></button>\n                    </div>\n                </div>\n\n                <div style="margin:auto;" >\n                    <button type="button" id="button-ydkj-default-a" data-button="ANS_4" class="button-a" class-base="button-a" class-disable="button-a-disable" ></button>\n                </div>\n\n                <div class="container pure-g" style="margin-top: 10px;" >\n                    <button type="button" id="button-ydkj-startgame" data-button="SCREW" class="button-ydkj button-xlarge pure-button pure-u-1">EVERYBODY\'S IN</button>\n                    <button type="button" id="button-ydkj-default-screw" data-button="SCREW" class="button-screw" ></button>\n                </div>\n            </div>\n        </div>\n\n        <div id="ydkj-jack-attack" class="pt-page-off state-jack-attack ydkj-page">\n            <div class="ydkj-gameplay gameplay-centered">\n                <div style="margin:auto;" >\n                    <button type="button" id="button-ydkj-jack-attack-a" data-button="ANS_4" class="button-a-lg" ></button>\n                </div>\n            </div>\n        </div>\n\n        <div id="ydkj-game-in-progress" class="pt-page-off state-locked ydkj-page">\n            <div class="ydkj-gameplay gameplay-centered">\n                <h2 style="text-align:center;">Game already in progess, cannot join.</h2>\n            </div>\n        </div>\n\n        <div id="ydkj-game-full" class="pt-page-off state-full ydkj-page">\n            <div class="ydkj-gameplay gameplay-centered">\n                <h2 style="text-align:center;">Game already full, cannot join.</h2>\n            </div>\n        </div>\n    </div>\n</div>\n'
    },
    750: function (t, e, a) { }
}]);
//# sourceMappingURL=23.16cdb6c2e5465596a73c.js.map
