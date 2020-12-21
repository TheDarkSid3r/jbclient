(window.webpackJsonp = window.webpackJsonp || []).push([[22], {
    2835: function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "MainView", (function () {
                return h
            }
            ));
        var a = n(17)
            , o = n.n(a)
            , i = n(22)
            , r = n.n(i)
            , s = n(462)
            , c = n(191)
            , u = n(47)
            , p = n(754)
            , d = n.n(p);
        n(755);
        function l(t, e, n, a, o, i, r) {
            try {
                var s = t[i](r)
                    , c = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(c) : Promise.resolve(c).then(a, o)
        }
        var h = s.a.extend({
            template: r.a.template(d.a),
            lacksAudience: !0,
            typeInterval: null,
            lastSpud: "",
            currentSpud: "",
            typeDelayTime: 1e3,
            events: {
                "click #button-start-game": "startGame",
                "click #wordspud-keep-playing": "keepPlaying",
                "click #wordspud-new-game": "newGame",
                "click .wordspud-submit": "submitWord",
                "click .wordspud-vote-yes": "vote",
                "click .wordspud-vote-no": "vote",
                "click .wordspud-comment-submit": "submitComment",
                "keyup input.spud": "editWord"
            },
            update: function () {
                var t, e = this;
                return (t = regeneratorRuntime.mark((function t() {
                    var n, a;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.model.get("player") || {},
                                        a = e.model.get("room") || {},
                                        e.typeInterval && (clearInterval(e.typeInterval),
                                            e.typeInterval = null),
                                        n && void 0 !== n.color && null !== n.color && o()("#player").css("background-color", n.color),
                                        a) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 6:
                                    "Lobby_WaitingForMore" === a.state ? e.showScreen(".state-waiting") : "Lobby_CanStart" === a.state ? e.showScreen(".state-startbutton") : "Gameplay" === a.state ? "Gameplay" === n.state ? (o()("input.comment").val(""),
                                        void 0 !== !a.currentWord && o()("#wordspud-nothing-root").html("".concat(e.getLastWord(a.currentWord), "_")),
                                        e.showScreen(".state-nothing")) : "Gameplay_Enter" === n.state && (o()("input.spud").val(""),
                                            e.currentSpud = "",
                                            e.typeInterval = setInterval((function () {
                                                e.lastSpud !== e.currentSpud && e.sendSpud(e.currentSpud)
                                            }
                                            ), e.typeDelayTime),
                                            void 0 !== a.currentWord && o()("#wordspud-writing-root").html("".concat(e.getLastWord(a.currentWord), "_")),
                                            window.navigator && window.navigator.vibrate && window.navigator.vibrate(250),
                                            e.showScreen(".state-writing")) : "Vote" === a.state ? "Gameplay_Enter" === n.state ? (o()("#wordspud-vote-wait-spud").html("".concat(e.getLastWord(a.currentWord), " <font color='").concat(a.color, "'>").concat(u.a.safeText(a.spud), "</font>")),
                                                e.showScreen(".state-vote-wait")) : "Voted" === n.state ? (o()("#wordspud-voted-spud").html("".concat(e.getLastWord(a.currentWord), " <font color='").concat(a.color, "'>").concat(u.a.safeText(a.spud), "</font>")),
                                                    e.showScreen(".state-voted")) : (o()("#wordspud-vote-spud").html("".concat(e.getLastWord(a.currentWord), " <font color='").concat(a.color, "'>").concat(u.a.safeText(a.spud), "</font>")),
                                                        e.showScreen(".state-vote")) : "GameOver" === a.state && e.showScreen(".state-gameover"),
                                        e.onResize();
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                )),
                    function () {
                        var e = this
                            , n = arguments;
                        return new Promise((function (a, o) {
                            var i = t.apply(e, n);
                            function r(t) {
                                l(i, a, o, r, s, "next", t)
                            }
                            function s(t) {
                                l(i, a, o, r, s, "throw", t)
                            }
                            r(void 0)
                        }
                        ))
                    }
                )()
            },
            startGame: function () {
                return ".state-startbutton" !== this.activeScreen || c.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0
                }),
                    !1
            },
            submitWord: function () {
                return ".state-writing" !== this.activeScreen || "" === o.a.trim(o()("input.spud").val()) || (this.typeInterval && (clearTimeout(this.typeInterval),
                    this.typeInterval = null),
                    c.app.client.send("SendMessageToRoomOwner", {
                        spud: o()("input.spud").val().toUpperCase(),
                        submitted: !0
                    })),
                    !1
            },
            submitComment: function () {
                return ".state-nothing" !== this.activeScreen || "" === o.a.trim(o()("input.comment").val()) || (c.app.client.send("SendMessageToRoomOwner", {
                    comment: o()("input.comment").val()
                }),
                    o()("input.comment").val("")),
                    !1
            },
            editWord: function (t) {
                ".state-writing" === this.activeScreen && (this.currentSpud = t.target.value.toUpperCase())
            },
            sendSpud: function (t) {
                this.lastSpud = t,
                    c.app.client.send("SendMessageToRoomOwner", {
                        spud: t,
                        submitted: !1
                    })
            },
            vote: function (t) {
                var e = o()(t.currentTarget).data("vote");
                return c.app.client.send("SendMessageToRoomOwner", {
                    vote: e
                }),
                    !1
            },
            keepPlaying: function (t) {
                return c.app.client.send("SendMessageToRoomOwner", {
                    action: "next"
                }),
                    !1
            },
            newGame: function (t) {
                return c.app.client.send("SendMessageToRoomOwner", {
                    action: "new"
                }),
                    !1
            },
            getLastWord: function (t) {
                if (!t)
                    return "";
                var e, n = t.split(" ");
                return n.length > 0 && (e = n[n.length - 1]),
                    e ? u.a.safeText(e) : ""
            }
        })
    },
    460: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return b
        }
        ));
        var a = n(41)
            , o = n.n(a)
            , i = n(3)
            , r = (n(461),
                n(17))
            , s = n.n(r)
            , c = n(31)
            , u = n.n(c)
            , p = n(22)
            , d = n.n(p)
            , l = n(191);
        function h(t, e) {
            return function (t) {
                if (Array.isArray(t))
                    return t
            }(t) || function (t, e) {
                if (!(Symbol.iterator in Object(t)) && "[object Arguments]" !== Object.prototype.toString.call(t))
                    return;
                var n = []
                    , a = !0
                    , o = !1
                    , i = void 0;
                try {
                    for (var r, s = t[Symbol.iterator](); !(a = (r = s.next()).done) && (n.push(r.value),
                        !e || n.length !== e); a = !0)
                        ;
                } catch (t) {
                    o = !0,
                        i = t
                } finally {
                    try {
                        a || null == s.return || s.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
                return n
            }(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var v = u.a.View.extend({
            el: "#banner",
            template: d.a.template('\n    <div class="banner-image"></div>\n    <div class="banner-text"></div>\n    <div class="banner-cta"></div>\n'),
            events: {
                click: "onBannerClick"
            },
            bindings: {
                ":el": {
                    attributes: [{
                        name: "class",
                        observe: ["visible", "theme"],
                        onGet: function (t) {
                            var e = h(t, 2)
                                , n = e[0]
                                , a = e[1] || "no-theme";
                            return n && (a += " show"),
                                a
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
                l.analytics.trackEvent("SlideBanner", "SlideBannerClicked", this.getCampaign(), 0),
                    this.model.get("url") && window.open(this.model.get("url"), "_blank")
            },
            onRender: function () {
                this.stickit()
            },
            visibleDidChange: function (t, e) {
                setTimeout((function () {
                    s()(window).trigger("resize")
                }
                ), .5),
                    e && l.analytics.trackEvent("SlideBanner", "SlideBannerOn", this.getCampaign(), 0)
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
        function m(t, e, n, a, o, i, r) {
            try {
                var s = t[i](r)
                    , c = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(c) : Promise.resolve(c).then(a, o)
        }
        function g(t) {
            return function () {
                var e = this
                    , n = arguments;
                return new Promise((function (a, o) {
                    var i = t.apply(e, n);
                    function r(t) {
                        m(i, a, o, r, s, "next", t)
                    }
                    function s(t) {
                        m(i, a, o, r, s, "throw", t)
                    }
                    r(void 0)
                }
                ))
            }
        }
        function f(t, e) {
            for (var n = 0; n < e.length; n++) {
                var a = e[n];
                a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
            }
        }
        function w(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
        var b = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var e, n, a, r, s, c;
            return e = t,
                n = null,
                a = [{
                    key: "update",
                    value: (c = g(regeneratorRuntime.mark((function t(e, n) {
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (n && "PostGame" === n.lobbyState) {
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
                                            this.init(e, n);
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
                            return c.apply(this, arguments)
                        }
                    )
                }, {
                    key: "init",
                    value: (s = g(regeneratorRuntime.mark((function t(e) {
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
                                        this.view = new v({
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
                            return s.apply(this, arguments)
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
                    value: (r = g(regeneratorRuntime.mark((function t(e) {
                        var n, a;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0,
                                            t.next = 3,
                                            fetch(i.a.BannersUrl);
                                    case 3:
                                        return n = t.sent,
                                            t.next = 6,
                                            n.json();
                                    case 6:
                                        if ((a = t.sent) && a.postGameBanners) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 9:
                                        return t.abrupt("return", a.postGameBanners[e]);
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
                n && f(e.prototype, n),
                a && f(e, a),
                t
        }();
        w(b, "view", null),
            w(b, "isInitialized", !1),
            w(b, "bannerConfig", null)
    },
    461: function (t, e, n) { },
    462: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return g
        }
        ));
        var a = n(22)
            , o = n.n(a)
            , i = n(17)
            , r = n.n(i)
            , s = n(41)
            , c = n.n(s)
            , u = n(31)
            , p = n.n(u)
            , d = n(191)
            , l = n(83)
            , h = n(460)
            , v = n(47);
        n(463),
            n(464),
            n(465);
        function m(t, e, n, a, o, i, r) {
            try {
                var s = t[i](r)
                    , c = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(c) : Promise.resolve(c).then(a, o)
        }
        var g = p.a.View.extend({
            appId: "legacymain",
            appTag: "legacymain",
            appVersion: "3.2.1",
            template: null,
            initialize: function (t) {
                var e = this;
                this.mergeOptions(t, ["appId", "appTag"]),
                    d.app.debug.reset(),
                    d.app.analytics.setApplication(this.getOption("appTag"), this.getOption("appId"), this.appVersion),
                    d.app.analytics.trackScreenView(this.getOption("appId")),
                    this.model = new c.a.Model({});
                var n = d.app.client.parseEntities();
                this.model.set(n),
                    this.model.on("change", this.controllerUpdate, this),
                    this.model.on("change", (function () {
                        e.update().catch(e.caughtError)
                    }
                    )),
                    d.app.client.on("client:entityDidChange", this.onEntityDidChange.bind(this)),
                    d.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyed),
                    d.app.client.on("client:disconnected", this.onDisconnected),
                    d.app.client.on("client:connection", this.onConnectionMessage.bind(this))
            },
            render: function () {
                this.model.set("username", v.a.safeText(d.app.client.name), {
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
                    , n = t.state || ""
                    , a = t.lobbyState;
                d.app.debug.pushState({
                    customerBlob: e,
                    roomBlob: t
                }),
                    a || -1 === n.indexOf("_") || (a = t.state.split("_")[1]),
                    "PostGame" === a || "Credits" === n || "GameOver" === n || "PostGame" === n || "DayEnd" === n || t.gameResults ? (h.a.isInitialized || h.a.init(this.getOption("appTag")),
                        h.a.show()) : h.a.hide(),
                    d.app.storage && d.app.storage.isSupported && t.platformId && d.app.storage.setTag("platform-".concat(t.platformId))
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
                            , n = arguments;
                        return new Promise((function (a, o) {
                            var i = t.apply(e, n);
                            function r(t) {
                                m(i, a, o, r, s, "next", t)
                            }
                            function s(t) {
                                m(i, a, o, r, s, "throw", t)
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
                    d.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
            },
            showTwitchBroadcasterDialog: function (t) {
                var e = "<div class='icon-".concat(d.app.client.roles.broadcaster.platform, "'>").concat(d.app.client.roles.broadcaster.name, "</div>");
                e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>",
                    this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : d.app.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"),
                    l.a.show("custom", {
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
                d.app.analytics.trackEvent("PostGame", "galleryClicked", this.getOption("appTag"))
            },
            showScreen: function (t, e) {
                var n = r()(t);
                return this.activeScreen && t === this.activeScreen || (this.activeScreen && (r()(this.activeScreen).fadeOut("fast", (function () { }
                )),
                    r()(this.activeScreen).show(),
                    r()(this.activeScreen).addClass("pt-page-off")),
                    n.hide(),
                    n.removeClass("pt-page-off"),
                    n.removeClass("pt-page-moveToLeft"),
                    n.fadeIn("fast", (function () {
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
                l.a.vibrate()
            },
            trackScreenView: function () {
                d.app.analytics.trackScreenView(this.getOption("appTag")),
                    d.app.storage && d.app.storage.isSupported && d.app.storage.setTag("played-".concat(this.getOption("appTag")))
            },
            onRoomWasDestroyed: function () {
                d.app.storage && d.app.storage.isSupported && (d.app.storage.remove("roomCode"),
                    d.app.storage.remove("reconnect")),
                    l.a.show("error", {
                        titleText: "Disconnected",
                        text: "Thanks for playing!",
                        onClose: function () {
                            window.location.reload(!0)
                        }
                    })
            },
            onDisconnected: function () {
                l.a.show("error", {
                    titleText: "Disconnected",
                    text: "You have been disconnected.",
                    onClose: function () {
                        window.location.reload(!0)
                    }
                })
            },
            onConnectionMessage: function (t) {
                var e = "".concat(t.status, " ").concat(t.attempt ? "".concat(t.attempt, "/5'") : "");
                if (l.a.show("toast", {
                    text: e
                }),
                    "connected" === t.status) {
                    var n = d.app.client.parseEntities();
                    this.model.set(n)
                }
            },
            onResize: function () {
                var t = r()("#player").outerHeight(!0) || 0
                    , e = h.a.isVisible ? r()("#slide-in-banner").outerHeight(!0) : 0
                    , n = r()(window).width()
                    , a = r()(window).height() - t;
                r()(".".concat(this.getOption("appTag"), "-page")).css("height", a - e),
                    r()(".".concat(this.getOption("appTag"), "-page")).attr("height", a - e),
                    r()(".".concat(this.getOption("appTag"), "-page")).css("top", t),
                    r()(".".concat(this.getOption("appTag"), "-page")).css("width", n),
                    r()(".".concat(this.getOption("appTag"), "-page")).attr("width", n)
            }
        })
    },
    463: function (t, e, n) { },
    464: function (t, e, n) { },
    465: function (t, e, n) { },
    754: function (t, e) {
        t.exports = '<link href="https://fonts.googleapis.com/css?family=Merriweather+Sans&display=swap" rel="stylesheet"> \n<div id="page-wordspud" class="page gray">\n    <div id="player">\n        <h1><%=username%></h1>\n    </div>\n    <div id="game" class="game pt-pageholder">\n        <div class="pt-page-off wordspud-page state-waiting">\n            <div class="container gameplay">\n                <h3>Waiting for players</h3>\n            </div>      \n        </div>\n\n        <div class="pt-page-off wordspud-page state-startbutton">\n            <div class="container gameplay">\n                <h3>press this button when everybody has joined</h3>\n                <form class="pure-form">\n                    <button type="submit" id="button-start-game" class="button-wordspud button-xlarge pure-button pure-input-1">EVERYBODY\'S IN</button>\n                </form>\n            </div>      \n        </div>\n\n        <div class="pt-page-off wordspud-page state-writing">\n            <div class="container gameplay">\n                <h2 id="wordspud-writing-root"></h2>\n                <p>it\'s your turn!</p>\n                <form class="pure-form">\n                    <div class="pure-u-1">\n                        <input id="wordspud-input" name="spud" class="pure-input-1 spud jbg-input" type="text" placeholder="Type Something" autocapitalize="off" autocorrect="off" autocomplete="off" maxlength="32">\n                    </div>\n                    <div class="pure-u-1-2 right">\n                        <div class="wordspud-submit"><button type="submit" id="wordspud-submit" class="button-wordspud pure-button button-large pure-input-1"><i class="fa fa-send-o"></i>&nbsp;&nbsp;Send</button></div>\n                    </div>\n                </form>\n            </div>      \n        </div>\n\n        <div class="pt-page-off wordspud-page state-vote">\n            <h2 id="wordspud-vote-spud"></h2>\n            <div class="container gameplay">\n                <h3>do you like it?</h3>\n                <form class="pure-form">\n                    <div class="wordspud-vote-yes" data-vote="1"><button id="wordspud-vote-yes" data-vote="1" class="button-wordspud-yes button-xlarge pure-button pure-input-1"><i class="fa fa-check"></i>&nbsp;&nbsp;YES</button></div>\n                    <div class="wordspud-vote-no" data-vote="-1"><button id="wordspud-vote-no" class="button-wordspud-no button-xlarge pure-button pure-input-1"><i class="fa fa-times"></i>&nbsp;&nbsp;NO</button></div>\n                </form>\n            </div>\n        </div>\n\n        <div class="pt-page-off wordspud-page state-vote-wait">\n            <div class="container gameplay">\n                <h2 id="wordspud-vote-wait-spud"></h2>\n                <h3>you are being judged.</h3>\n            </div>\n        </div>     \n\n        <div class="pt-page-off wordspud-page state-nothing">\n            <div class="container gameplay">\n                <h2 id="wordspud-nothing-root"></h2>\n                <p>add your own commentary</p>\n                <form class="pure-form">\n                    <div class="pure-u-1">\n                        <input id="wordspud-comment" name="comment" class="pure-input-1 comment jbg-input" type="text" placeholder="Type Something" autocapitalize="off" autocorrect="off" autocomplete="off" maxlength="50" >\n                    </div>\n                    <div class="pure-u-1-2 right">\n                        <div class="wordspud-comment-submit"><button type="submit" id="wordspud-comment-submit" class="button-wordspud pure-button button-large pure-input-1"><i class="fa fa-send-o"></i>&nbsp;&nbsp;Send</button></div>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n        <div class="pt-page-off wordspud-page state-voted">\n            <div class="container gameplay">\n                <h2 id="wordspud-voted-spud"></h2>\n                <p>waiting for players</p>\n            </div>\n        </div>\n\n        <div class="pt-page-off wordspud-page state-gameover">\n            <div class="container gameplay">\n                <form class="pure-form">\n                    <button type="button" id="wordspud-keep-playing" data-vote="1" class="button-wordspud button-xlarge pure-button pure-input-1">Next Round</button>\n                    <button type="button" id="wordspud-new-game" data-vote="-1" class="button-wordspud button-xlarge pure-button pure-input-1">New Game</button>\n                </form>\n            </div>\n        </div>\n\n    </div>\n</div>\n'
    },
    755: function (t, e, n) { }
}]);
//# sourceMappingURL=22.400fb729de976215d5dc.js.map
