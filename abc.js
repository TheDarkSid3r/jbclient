(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    457: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return r
        }
        ));
        var i = n(22)
            , o = n.n(i)
            , s = n(41)
            , a = n.n(s)
            , r = a.a.Model.extend({
                defaults: {},
                set: function (t, e) {
                    var n = o.a.extend({}, this.attributes, this.defaults, t);
                    return a.a.Model.prototype.set.apply(this, [n, e]),
                        this
                },
                setUpdate: function (t, e) {
                    var n = o.a.extend({}, this.defaults, this.attributes, t);
                    return a.a.Model.prototype.set.apply(this, [n, e]),
                        this
                }
            })
    },
    460: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return y
        }
        ));
        var i = n(41)
            , o = n.n(i)
            , s = n(3)
            , a = (n(461),
                n(17))
            , r = n.n(a)
            , c = n(31)
            , l = n.n(c)
            , h = n(22)
            , u = n.n(h)
            , d = n(191);
        function p(t, e) {
            return function (t) {
                if (Array.isArray(t))
                    return t
            }(t) || function (t, e) {
                if (!(Symbol.iterator in Object(t)) && "[object Arguments]" !== Object.prototype.toString.call(t))
                    return;
                var n = []
                    , i = !0
                    , o = !1
                    , s = void 0;
                try {
                    for (var a, r = t[Symbol.iterator](); !(i = (a = r.next()).done) && (n.push(a.value),
                        !e || n.length !== e); i = !0)
                        ;
                } catch (t) {
                    o = !0,
                        s = t
                } finally {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (o)
                            throw s
                    }
                }
                return n
            }(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var m = l.a.View.extend({
            el: "#banner",
            template: u.a.template('\n    <div class="banner-image"></div>\n    <div class="banner-text"></div>\n    <div class="banner-cta"></div>\n'),
            events: {
                click: "onBannerClick"
            },
            bindings: {
                ":el": {
                    attributes: [{
                        name: "class",
                        observe: ["visible", "theme"],
                        onGet: function (t) {
                            var e = p(t, 2)
                                , n = e[0]
                                , i = e[1] || "no-theme";
                            return n && (i += " show"),
                                i
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
                d.analytics.trackEvent("SlideBanner", "SlideBannerClicked", this.getCampaign(), 0),
                    this.model.get("url") && window.open(this.model.get("url"), "_blank")
            },
            onRender: function () {
                this.stickit()
            },
            visibleDidChange: function (t, e) {
                setTimeout((function () {
                    r()(window).trigger("resize")
                }
                ), .5),
                    e && d.analytics.trackEvent("SlideBanner", "SlideBannerOn", this.getCampaign(), 0)
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
        function g(t, e, n, i, o, s, a) {
            try {
                var r = t[s](a)
                    , c = r.value
            } catch (t) {
                return void n(t)
            }
            r.done ? e(c) : Promise.resolve(c).then(i, o)
        }
        function v(t) {
            return function () {
                var e = this
                    , n = arguments;
                return new Promise((function (i, o) {
                    var s = t.apply(e, n);
                    function a(t) {
                        g(s, i, o, a, r, "next", t)
                    }
                    function r(t) {
                        g(s, i, o, a, r, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function f(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
            }
        }
        function b(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
        var y = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var e, n, i, a, r, c;
            return e = t,
                n = null,
                i = [{
                    key: "update",
                    value: (c = v(regeneratorRuntime.mark((function t(e, n) {
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
                    value: (r = v(regeneratorRuntime.mark((function t(e) {
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
                                        this.view = new m({
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
                            return r.apply(this, arguments)
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
                    value: (a = v(regeneratorRuntime.mark((function t(e) {
                        var n, i;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0,
                                            t.next = 3,
                                            fetch(s.a.BannersUrl);
                                    case 3:
                                        return n = t.sent,
                                            t.next = 6,
                                            n.json();
                                    case 6:
                                        if ((i = t.sent) && i.postGameBanners) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 9:
                                        return t.abrupt("return", i.postGameBanners[e]);
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
                            return a.apply(this, arguments)
                        }
                    )
                }, {
                    key: "isVisible",
                    get: function () {
                        return !!this.view && "on" === this.view.state
                    }
                }],
                n && f(e.prototype, n),
                i && f(e, i),
                t
        }();
        b(y, "view", null),
            b(y, "isInitialized", !1),
            b(y, "bannerConfig", null)
    },
    461: function (t, e, n) { },
    466: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return Q
        }
        ));
        var i = n(17)
            , o = n.n(i)
            , s = n(22)
            , a = n.n(s)
            , r = n(41)
            , c = n.n(r)
            , l = n(57)
            , h = n(31)
            , u = n.n(h)
            , d = n(191)
            , p = n(83)
            , m = n(477)
            , g = n(460)
            , v = {
                en: {
                    LANGUAGE_NAME: "English",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsch", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    LANGUAGE: "Language",
                    LOGIN: "Login",
                    STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Disconnected",
                    STRING_ERROR_SERVER_ROOM_DESTROYED: "Thanks for playing!"
                },
                fr: {
                    LANGUAGE_NAME: "Français",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsch", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    LANGUAGE: "Langue",
                    LOGIN: "Connexion",
                    STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Déconnecté",
                    STRING_ERROR_SERVER_ROOM_DESTROYED: "Vous avez été déconnecté"
                },
                it: {
                    LANGUAGE_NAME: "Italiano",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsch", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    LANGUAGE: "Lingua",
                    LOGIN: "Accesso",
                    STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Disconnesso",
                    STRING_ERROR_SERVER_ROOM_DESTROYED: "Disconnesso"
                },
                de: {
                    LANGUAGE_NAME: "Deutsche",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsch", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    LANGUAGE: "Sprache",
                    LOGIN: "Login",
                    STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Getrennt",
                    STRING_ERROR_SERVER_ROOM_DESTROYED: "Getrennt"
                },
                es: {
                    LANGUAGE_NAME: "Español",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsch", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    LANGUAGE: "idioma",
                    LOGIN: "Iniciar sesión",
                    STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Desconectado",
                    STRING_ERROR_SERVER_ROOM_DESTROYED: "Desconectado"
                }
            }
            , f = n(509)
            , b = n(487)
            , y = n(475)
            , w = n(474)
            , C = n(480)
            , k = n(469)
            , x = (n(192),
                n(457))
            , _ = n(468)
            , S = n(471)
            , T = n(928)
            , I = n.n(T)
            , O = n(929)
            , E = x.a.extend({
                defaults: {
                    choiceId: void 0,
                    type: "single",
                    censorDialog: "none",
                    chosen: null,
                    choices: [],
                    prompt: {},
                    error: null,
                    block: !0,
                    classes: [],
                    maxVotes: 16,
                    doneText: {},
                    announcePrompt: !1,
                    strings: {
                        your_choice: "Thank you. Your choice: ",
                        censor_prompt: "Censor this?",
                        censor_confirm: "Yes, Censor!",
                        censor_cancel: "No!"
                    }
                }
            })
            , R = u.a.View.extend({
                tagName: "div",
                className: "sortable-item",
                template: a.a.template("<div class='text'></div>"),
                model: new c.a.Model({}),
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "data-id",
                            observe: "key"
                        }]
                    },
                    ".text": "html"
                },
                onAttach: function () {
                    this.stickit()
                }
            })
            , L = u.a.CollectionView.extend({
                tagName: "div",
                className: "sortable-collection",
                childView: R,
                collection: new c.a.Collection([]),
                initialize: function (t) {
                    this.listenTo(this.collection, "sync", this.render),
                        this.mergeOptions(t, ["block"])
                }
            })
            , A = u.a.View.extend({
                className: "SorterView",
                template: a.a.template('\n        <div id="rankedChoicesRegion"></div>\n        <div class="instructions">Choose where this item ranks:</div>\n        <div id="unrankedChoicesRegion"></div>\n        <div id="lockInRegion"></div>\n    '),
                model: new c.a.Model({
                    rankedLength: 1,
                    choices: []
                }),
                bindings: {
                    ".instructions": {
                        observe: "rankedLength",
                        visible: !0,
                        onGet: function (t) {
                            return t < 3
                        }
                    },
                    "#unrankedChoicesRegion": {
                        observe: ["rankedLength", "choices"],
                        visible: !0,
                        onGet: function (t) {
                            return console.log(t),
                                !(t[0] === t[1].length)
                        }
                    },
                    "#lockInRegion": {
                        observe: ["rankedLength", "choices"],
                        visible: !0,
                        onGet: function (t) {
                            return t[0] === t[1].length
                        }
                    }
                },
                regions: {
                    rankedChoices: "#rankedChoicesRegion",
                    unrankedChoices: "#unrankedChoicesRegion",
                    lockInRegion: "#lockInRegion"
                },
                initialize: function (t) {
                    this.rankedCollectionView = this.rankedCollectionView || new L({
                        collection: new c.a.Collection([])
                    }),
                        this.unrankedCollectionView = this.unrankedCollectionView || new L({
                            className: "sortable-collection unranked",
                            collection: new c.a.Collection([])
                        }),
                        this.lockInView = this.lockInView || new S.a({
                            block: !1,
                            model: new c.a.Model({
                                action: "lock",
                                html: "Lock In"
                            })
                        }),
                        this.listenTo(this.model, "change:choices", this.update, this)
                },
                onAttach: function () {
                    console.log("[SortableView] onAttach"),
                        this.showChildView("rankedChoices", this.rankedCollectionView),
                        this.showChildView("unrankedChoices", this.unrankedCollectionView),
                        this.showChildView("lockInRegion", this.lockInView),
                        this.stickit(),
                        this.update()
                },
                update: function () {
                    var t = this.model.get("choices")
                        , e = t.slice(0, 1)
                        , n = t.slice(1);
                    this.rankedSortable && this.rankedSortable.destroy(),
                        this.rankedCollectionView.collection.set(e),
                        this.rankedSortable = O.a.create(this.rankedCollectionView.el, {
                            group: "shared",
                            onSort: this.handleOnSort.bind(this),
                            animation: 100,
                            delay: 100
                        }),
                        this.unrankedSortable && this.unrankedSortable.destroy(),
                        this.unrankedCollectionView.collection.set(n),
                        this.unrankedSortable = O.a.create(this.unrankedCollectionView.el, {
                            className: "unranked",
                            group: {
                                name: "shared",
                                put: !1
                            },
                            sort: !1
                        })
                },
                moveItemInArray: function (t, e, n) {
                    console.log("[SortableView] moved to the ranked list", e, "->", n);
                    var i = t.slice(0);
                    if (e === n)
                        return i;
                    var o = i[e];
                    return i.splice(e, 1),
                        i.splice(n, 0, o),
                        i
                },
                handleOnSort: function (t) {
                    var e = this.model.get("choices")
                        , n = this.rankedSortable.toArray();
                    n.length === e.length && this.triggerMethod("sorted", n),
                        this.model.set("rankedLength", n.length)
                },
                onChildviewButtonLock: function () {
                    var t = this.rankedSortable.toArray();
                    this.triggerMethod("lock", t)
                }
            })
            , M = u.a.View.extend({
                className: "Sortable scrollable",
                template: a.a.template(I.a),
                model: new E,
                regions: {
                    prompt: "#prompt",
                    choices: "#choicesRegion"
                },
                initialize: function (t) {
                    this.promptComponent = this.promptComponent || new _.a({
                        model: new c.a.Model
                    }),
                        this.sorterView = this.sorterView || new A({}),
                        this.listenTo(this.model, "change", this.update, this)
                },
                onAttach: function () {
                    this.showChildView("prompt", this.promptComponent),
                        this.showChildView("choices", this.sorterView)
                },
                update: function () {
                    this.promptComponent.model.set(this.model.get("prompt")),
                        this.model.get("choices").length !== this.sorterView.model.get("choices").length && this.sorterView.model.set("choices", this.model.get("choices"))
                },
                onChildviewSorted: function (t) {
                    this.triggerMethod("client:message", {
                        action: "sort",
                        order: t
                    })
                },
                onChildviewLock: function (t) {
                    this.triggerMethod("client:message", {
                        action: "sort",
                        lock: !0,
                        order: t
                    })
                }
            })
            , V = n(575)
            , G = n(577)
            , D = n(933)
            , B = n.n(D)
            , N = u.a.View.extend({
                className: "RadialView",
                template: a.a.template(B.a),
                model: new c.a.Model({
                    isTouching: !1,
                    angle: 0,
                    vector: {
                        x: 0,
                        y: 0
                    },
                    touchBuffer: 5
                }),
                events: {
                    "mousedown .range-picker": "start",
                    "touchstart .range-picker": "start",
                    "touchmove .range-picker": "start",
                    touchmove: "move",
                    touchend: "end"
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "class",
                            observe: "lockedIn",
                            onGet: function (t) {
                                return t ? "lockedIn" : ""
                            }
                        }]
                    },
                    ".background": {
                        attributes: [{
                            name: "style",
                            observe: "accentColor",
                            onGet: function (t) {
                                return "stroke: ".concat(t)
                            }
                        }]
                    },
                    ".health-display": {
                        attributes: [{
                            name: "style",
                            observe: ["selector", "accentColor"],
                            onGet: function (t) {
                                var e = ""
                                    , n = t[0]
                                    , i = t[1];
                                i && (e += "stroke:".concat(i, ";"));
                                var o = 207 * (1 - n);
                                return e += "stroke-dasharray:".concat(207 * n, " ").concat(o, ";"),
                                    e += "transform:rotate(".concat(-360 * n - 90, "deg);")
                            }
                        }]
                    },
                    ".line-helper-left": {
                        attributes: [{
                            name: "display",
                            observe: "lockedIn",
                            onGet: function (t) {
                                return t ? "none" : "inline"
                            }
                        }, {
                            name: "x2",
                            observe: "vector",
                            onGet: function (t) {
                                return t ? t.x : 1
                            }
                        }, {
                            name: "y2",
                            observe: "vector",
                            onGet: function (t) {
                                return t ? t.y : 1
                            }
                        }]
                    },
                    ".line-helper-right": {
                        attributes: [{
                            name: "display",
                            observe: "lockedIn",
                            onGet: function (t) {
                                return t ? "none" : "inline"
                            }
                        }, {
                            name: "x2",
                            observe: "vector",
                            onGet: function (t) {
                                return t ? t.x : 1
                            }
                        }, {
                            name: "y2",
                            observe: "vector",
                            onGet: function (t) {
                                return t ? t.y : 1
                            }
                        }]
                    },
                    ".locked-in-line": {
                        attributes: [{
                            name: "display",
                            observe: "lockedIn",
                            onGet: function (t) {
                                return t ? "inline" : "none"
                            }
                        }, {
                            name: "x2",
                            observe: "vector",
                            onGet: function (t) {
                                return t ? t.x : 1
                            }
                        }, {
                            name: "y2",
                            observe: "vector",
                            onGet: function (t) {
                                return t ? t.y : 1
                            }
                        }]
                    },
                    ".circle-deadzone": {
                        attributes: [{
                            name: "r",
                            observe: "isTouching",
                            onGet: function (t) {
                                return "9.6"
                            }
                        }]
                    },
                    ".text": "text",
                    ".astro": {
                        attributes: [{
                            name: "style",
                            observe: ["accentColor", "lockedIn"],
                            onGet: function (t) {
                                var e = "";
                                return e += "fill:".concat(t[1] ? "black" : t[0], ";"),
                                    e += "stroke:".concat(t[1] ? "#cccccc" : "#ff00ff", ";")
                            }
                        }, {
                            name: "x",
                            observe: "vector",
                            onGet: function (t) {
                                return t ? t.x : 1
                            }
                        }, {
                            name: "y",
                            observe: "vector",
                            onGet: function (t) {
                                return t ? t.y : 1
                            }
                        }, {
                            name: "width",
                            observe: "lockedIn",
                            onGet: function (t) {
                                return t ? 8 : 16
                            }
                        }, {
                            name: "height",
                            observe: "lockedIn",
                            onGet: function (t) {
                                return t ? 8 : 16
                            }
                        }, {
                            name: "transform",
                            observe: "lockedIn",
                            onGet: function (t) {
                                return t ? "translate(-4, -4)" : "translate(-8,-8)"
                            }
                        }]
                    },
                    ".locked-in-fade": {
                        attributes: [{
                            name: "display",
                            observe: "lockedIn",
                            onGet: function (t) {
                                return t ? "inline" : "none"
                            }
                        }]
                    },
                    ".aimArrow": {
                        attributes: [{
                            name: "transform",
                            observe: "angle",
                            onGet: function (t) {
                                var e = "";
                                return e += " rotate(".concat(t + 180, ")")
                            }
                        }, {
                            name: "display",
                            observe: ["lockedIn", "vector"],
                            onGet: function (t) {
                                return t[0] && this.getDistance(t[1]) > 0 ? "inline" : "none"
                            }
                        }]
                    }
                },
                initialize: function () {
                    this.model.on("change:angle", this.updateAngle, this),
                        this.model.on("change:vector", this.updateVector, this),
                        this.model.on("change:isTouching", this.updateIsTouching, this)
                },
                updateAngle: function () {
                    this.triggerMethod("angle", this.model.get("angle"))
                },
                updateVector: function () {
                    this.triggerMethod("vector", this.getNormalizedVector())
                },
                updateIsTouching: function () {
                    this.triggerMethod("isTouching", this.model.get("isTouching"))
                },
                onRender: function () {
                    this.stickit()
                },
                start: function (t) {
                    var e = this.eventToCoord(t);
                    this.startCoord || (this.startCoord = e)
                },
                move: function (t) {
                    t.preventDefault();
                    var e = this.eventToCoord(t);
                    if (!this.model.get("isTouching") && this.startCoord && this.getDistance(e, this.startCoord) > this.model.get("touchBuffer") && this.model.set("isTouching", !0),
                        this.model.get("isTouching") && !this.model.get("lockedIn")) {
                        var n = this.coordToVector(e);
                        this.model.set("vector", n);
                        var i = this.coordToAngle(e);
                        this.model.set("angle", i)
                    }
                },
                end: function () {
                    this.startCoord = null,
                        this.model.get("isTouching") && (this.model.set("isTouching", !1),
                            this.triggerMethod("end", this.model))
                },
                getDistance: function (t, e) {
                    e || (e = {
                        x: 0,
                        y: 0
                    });
                    var n = {
                        x: e.x - t.x,
                        y: e.y - t.y
                    };
                    return Math.sqrt(Math.pow(n.x, 2) + Math.pow(n.y, 2))
                },
                getNormalizedVector: function () {
                    var t = a.a.extend({}, this.model.get("vector"));
                    return t.x /= 32,
                        t.y /= 32,
                        t
                },
                eventToCoord: function (t) {
                    var e = this.$el[0].getBoundingClientRect();
                    return t.targetTouches && t.targetTouches instanceof TouchList && t.targetTouches.length > 0 ? {
                        x: t.targetTouches[0].pageX - e.left,
                        y: t.targetTouches[0].pageY - e.top
                    } : {
                            x: t.clientX - e.left,
                            y: t.clientY - e.top
                        }
                },
                coordToAngle: function (t) {
                    var e = this.coordToVector(t)
                        , n = Math.atan2(-e.x, e.y);
                    return n += Math.PI,
                        n = parseInt(180 * n / Math.PI, 10)
                },
                coordToVector: function (t) {
                    var e = this.$el[0].getBoundingClientRect()
                        , n = {
                            x: t.x - parseInt(e.width, 10) / 2,
                            y: t.y - parseInt(e.height, 10) / 2
                        }
                        , i = 76 / e.width;
                    n.x *= i,
                        n.y *= i;
                    var o = this.getDistance(n);
                    if (o > 32) {
                        var s = 32 / o;
                        n.x *= s,
                            n.y *= s
                    }
                    return n
                }
            })
            , P = n(934)
            , j = n.n(P)
            , z = x.a.extend({
                defaults: {
                    shotId: void 0,
                    state: "Shoot",
                    throttle: 44,
                    weapon: {},
                    playerCanSwap: !1,
                    characterCurrentHealth: null,
                    characterMaxHealth: null,
                    lockedIn: !1,
                    selectorCircle: !0,
                    classes: [],
                    message: ""
                }
            })
            , U = u.a.View.extend({
                model: new z,
                template: a.a.template(j.a),
                className: "Shoot",
                regions: {
                    radial: "#radial"
                },
                events: {
                    "click .swap-button": "swapPlayer",
                    touchstart: "eat",
                    "click #reconnect": "reconnect"
                },
                eat: function (t) {
                    t.preventDefault()
                },
                move: function (t) {
                    this.radialComponent.move(t)
                },
                end: function (t) {
                    this.radialComponent.end(t)
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "style",
                            observe: "playerInfo",
                            onGet: function (t) {
                                if (t && t.bgcolor)
                                    return "background-color:".concat(t.bgcolor)
                            }
                        }]
                    },
                    ".swap-button": {
                        observe: "playerCanSwap",
                        visible: !0
                    },
                    ".health": {
                        observe: "characterCurrentHealth",
                        visible: function (t) {
                            return !(null === t)
                        }
                    },
                    ".currentHealth": "characterCurrentHealth",
                    ".maxHealth": "characterMaxHealth",
                    ".weaponText": {
                        observe: "weapon",
                        onGet: function (t) {
                            return t.text
                        }
                    },
                    ".message": "message",
                    ".weaponBorder": {
                        attributes: [{
                            name: "class",
                            observe: "weapon",
                            onGet: function (t) {
                                return t ? t.count ? "count-".concat(t.count) : "" : null
                            }
                        }]
                    },
                    ".weaponIcon": {
                        attributes: [{
                            name: "class",
                            observe: "weapon",
                            onGet: function (t) {
                                return t ? t.id : ""
                            }
                        }]
                    },
                    ".weaponName": {
                        observe: "weapon",
                        onGet: function (t) {
                            return t ? t.name ? t.name : t.id : ""
                        }
                    }
                },
                onChildviewVector: function (t) {
                    this.throttledUpdate && this.throttledUpdate(t)
                },
                updateVector: function (t) {
                    this.model.get("isAudience") || 0 === t.x && 0 === t.y || this.radialComponent.model.get("isTouching") && this.triggerMethod("client:message", {
                        action: "move",
                        type: "move",
                        vector: t
                    })
                },
                onChildviewEnd: function () {
                    if (!this.model.get("lockedIn")) {
                        var t = this.radialComponent.getNormalizedVector();
                        if (Math.sqrt(t.x * t.x + t.y * t.y) < .3)
                            return this.radialComponent.model.set("vector", {
                                x: 0,
                                y: 0
                            }),
                                this.radialComponent.model.set("angle", 180),
                                void (this.model.get("isPlayer") && this.triggerMethod("client:message", {
                                    action: "cancel",
                                    type: "cancel"
                                }));
                        var e = this.model.get("weapon")
                            , n = e.id ? e.id : this.model.get("weapon")
                            , i = this.radialComponent.model.get("angle")
                            , o = Math.floor(i / 10);
                        this.triggerMethod("client:message", {
                            action: "fire",
                            type: "fire",
                            weapon: n,
                            vector: t
                        }),
                            this.model.get("isAudience") && (this.audienceShot = 10 * o,
                                this.shotId = this.model.get("shotId") || 0,
                                this.model.setUpdate({
                                    lockedIn: !0,
                                    shotId: this.shotId
                                }))
                    }
                },
                initialize: function () {
                    this.radialComponent = new N({
                        model: new c.a.Model({
                            isTouching: !1,
                            angle: 0,
                            vector: {
                                x: 0,
                                y: 0
                            },
                            touchBuffer: 5
                        })
                    }),
                        this.throttledUpdate = a.a.throttle(this.updateVector, this.model.get("throttle")),
                        this.listenTo(this.model, "change", this.update, this),
                        this.onResizeWithContext = this.onResize.bind(this),
                        window.addEventListener("resize", this.onResizeWithContext),
                        o()(window).on("mousemove", this.move.bind(this)),
                        o()(window).on("mouseup", this.end.bind(this))
                },
                onBeforeDestroy: function () {
                    window.removeEventListener("resize", this.onResizeWithContext),
                        o()(window).off("mousemove"),
                        o()(window).off("mouseup")
                },
                update: function () {
                    var t = this.model.get("characterCurrentHealth")
                        , e = this.model.get("characterMaxHealth");
                    if (this.radialComponent.model.set("selector", t / e),
                        this.radialComponent.model.set("accentColor", this.model.get("characterColor")),
                        this.radialComponent.model.set("lockedIn", this.model.get("lockedIn")),
                        this.radialComponent.model.set("text", ""),
                        d.app.client.isRole("audience") && (void 0 !== this.model.get("shotId") && this.model.get("shotId") === this.shotId || (this.audienceShot = void 0),
                            this.audienceShot && (this.model.setUpdate({
                                lockedIn: !0,
                                shotId: this.model.get("shotId") || 0
                            }),
                                this.radialComponent.model.set("text", "".concat(this.audienceShot, "°")))),
                        this.model.get("lockedIn") || this.radialComponent.model.get("isTouching") || this.radialComponent.model.set("vector", {
                            x: 0,
                            y: 0
                        }),
                        this.throttledUpdate = a.a.throttle(this.updateVector, this.model.get("throttle")),
                        !1 != !this.model.get("lockedIn")) {
                        if (!this.notified && "Shoot" == this.model.get("state")) {
                            var n = {
                                ClusterBombs: [45, 60, 45, 60, 45, 60],
                                PlayerWeapon: [100, 100],
                                RainbowCannon: [45, 60, 45, 60, 45, 60],
                                Repeater: [45, 60, 45, 60, 45, 60],
                                Seeker: [45, 60, 45, 60, 45, 60],
                                Shield: [45, 60, 45, 60, 45, 60],
                                Stun: [45, 60, 45, 60, 45, 60],
                                SuperBlaster: [45, 60, 45, 60, 45, 60]
                            }[this.model.get("weapon").id];
                            p.a.vibrate(n)
                        }
                        this.notified = !0
                    } else
                        this.notified = !1
                },
                onRender: function () {
                    this.showChildView("radial", this.radialComponent),
                        this.stickit()
                },
                onAttach: function () {
                    this.update(),
                        this.onResize(),
                        p.a.vibrate()
                },
                onResize: function () {
                    var t = o()(".radial")
                        , e = o()("#status-bar").outerHeight() + o()(".playerTopBar").outerHeight() + o()("#control-panel").outerHeight() + 10
                        , n = o()(".controller-page").width()
                        , i = window.innerHeight - e
                        , s = Math.max(150, Math.min(n, i));
                    t.css("width", "".concat(s, "px")),
                        t.css("height", "".concat(s, "px")),
                        window.scrollTo(0, 0)
                }
            })
            , X = n(522)
            , H = n.n(X);
        n(935);
        function F(t, e, n, i, o, s, a) {
            try {
                var r = t[s](a)
                    , c = r.value
            } catch (t) {
                return void n(t)
            }
            r.done ? e(c) : Promise.resolve(c).then(i, o)
        }
        function Y(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                    n.push.apply(n, i)
            }
            return n
        }
        function W(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Y(Object(n), !0).forEach((function (e) {
                    K(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function K(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
        function J(t, e) {
            return function (t) {
                if (Array.isArray(t))
                    return t
            }(t) || function (t, e) {
                if (!(Symbol.iterator in Object(t)) && "[object Arguments]" !== Object.prototype.toString.call(t))
                    return;
                var n = []
                    , i = !0
                    , o = !1
                    , s = void 0;
                try {
                    for (var a, r = t[Symbol.iterator](); !(i = (a = r.next()).done) && (n.push(a.value),
                        !e || n.length !== e); i = !0)
                        ;
                } catch (t) {
                    o = !0,
                        s = t
                } finally {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (o)
                            throw s
                    }
                }
                return n
            }(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var Q = u.a.View.extend({
            appId: "main",
            appTag: "main",
            appVersion: "3.2.1",
            currentState: null,
            currentLayout: null,
            template: a.a.template(H.a),
            playerTopBar: null,
            className: function () {
                return "pt-page ".concat(this.getOption("appTag"))
            },
            regions: {
                player: "#playerRegion",
                controller: {
                    el: "#controller-main",
                    replaceElement: !0
                }
            },
            events: {
                "click .testing-nav .previous": "onTestingPreviousClick",
                "click .testing-nav .next": "onTestingNextClick",
                "click .twitchBroadcasterIcon": "onTwitchBroadcasterIconClick"
            },
            bindings: {
                ":el": {
                    attributes: [{
                        name: "class",
                        observe: "blob",
                        onGet: function (t) {
                            var e = "pt-page ".concat(this.getOption("appTag"));
                            return t && t.locale && (e += " ".concat(t.locale)),
                                e
                        }
                    }]
                },
                ".twitchBroadcasterIcon": {
                    observe: ["broadcaster", "blob"],
                    visible: !0,
                    onGet: function (t) {
                        var e = J(t, 2)
                            , n = e[0]
                            , i = e[1];
                        return n && i && !i.artifact && ["Lobby", "Logo"].includes(i.state)
                    }
                }
            },
            initialize: function (t) {
                this.mergeOptions(t, ["appId", "appTag"]),
                    this.locale = "en",
                    d.app.debug.reset(),
                    this.playerTopBar = this.playerTopBar || new f.a,
                    d.app.client.on("client:entityDidChange", this.onEntityDidChange.bind(this)),
                    d.app.client.on("client:textDescriptions", this.onTextDescriptions.bind(this)),
                    d.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyed.bind(this)),
                    d.app.client.on("client:disconnected", this.onDisconnected.bind(this)),
                    d.app.client.on("client:connection", this.onConnectionMessage.bind(this)),
                    this.model = new c.a.Model({});
                var e = d.app.client.parseEntities();
                this.model.set(e),
                    this.model.on({
                        "change:player": this.setBlob,
                        "change:room": this.setBlob,
                        "change:audiencePlayer": this.setBlob,
                        "change:blob": this.update
                    }, this),
                    this.render(),
                    this.setBlob(),
                    d.app.analytics.setApplication(this.getOption("appTag"), this.getOption("appId"), this.appVersion),
                    window.addEventListener("resize", this.onResize)
            },
            onRender: function () {
                this.update(),
                    this.stickit()
            },
            onAttach: function () {
                this.showChildView("player", this.playerTopBar),
                    this.onResize(),
                    d.app.client.isTesting ? o()(".testing-nav").show() : o()(".testing-nav").hide(),
                    d.app.client.isRole("broadcaster") && (this.model.set("broadcaster", d.app.client.isRole("broadcaster")),
                        this.showTwitchBroadcasterDialog(2e4))
            },
            onBeforeDestroy: function () {
                this.model.stopListening()
            },
            updateLayout: function () {
                var t = this.model.get("blob").state;
                if (-1 !== this.getGameLayout(t))
                    return null;
                switch (t) {
                    case "Draw":
                        return this.setLayout(b.a);
                    case "EnterSingleText":
                        return this.setLayout(y.a);
                    case "Lobby":
                        return this.setLayout(w.a);
                    case "Logo":
                        return this.setLayout(C.a);
                    case "MakeSingleChoice":
                        return this.setLayout(k.a);
                    case "Shoot":
                        return this.setLayout(U);
                    case "Sortable":
                        return this.setLayout(M);
                    case "Camera":
                        return this.setLayout(V.a);
                    case "UGC":
                        return this.setLayout(G.a);
                    default:
                        return new Error("No common layout found")
                }
            },
            setLayout: function (t) {
                var e = new t
                    , n = this.getRegion("controller");
                n && (n.reset(),
                    e.model.set(this.model.get("blob")),
                    this.showChildView("controller", e),
                    this.currentLayout = e,
                    this.currentState = this.model.get("blob").state)
            },
            onEntityDidChange: function (t, e) {
                this.model.unset(t, {
                    silent: !0
                }),
                    this.model.set(t, e)
            },
            onTextDescriptions: function (t, e) {
                this.setTextDescriptions(e.latestDescriptions)
            },
            setBlob: function () {
                var t = this.model.get("player")
                    , e = this.model.get("room")
                    , n = this.model.get("audiencePlayer")
                    , i = {};
                (i = t && !a.a.isEmpty(t) ? W({}, a.a.omit(e, "audience"), {}, t) : d.app.client.isRole("audience") && n ? W({}, a.a.omit(e, "audience"), {}, n.audience) : d.app.client.isRole("audience") && e && e.audience ? W({}, a.a.omit(e, "audience"), {}, e.audience) : e || {}).isPlayer = d.app.client.isRole("player"),
                    i.isAudience = d.app.client.isRole("audience"),
                    !(i = this.parseBlob(i)).state && i.isAudience && (i.state = "Logo"),
                    d.app.storage && d.app.storage.isSupported && i.platformId && d.app.storage.setTag("platform-".concat(i.platformId)),
                    i.locale && "string" == typeof i.locale && (this.locale = i.locale),
                    this.model.set({
                        blob: i
                    })
            },
            update: a.a.debounce((function () {
                var t = this.model.get("blob");
                t && (this.willUpdate(),
                    d.app.debug.pushState({
                        player: this.model.get("player"),
                        room: this.model.get("room"),
                        audiencePlayer: this.model.get("audiencePlayer")
                    }),
                    t.playerInfo ? this.playerTopBar.model.set(t.playerInfo) : this.playerTopBar.model.clear(),
                    this.currentState && this.currentState === t.state ? this.currentLayout && this.currentLayout.model.set(t) : (this.updateLayout(),
                        this.currentLayout && this.currentLayout.model.set(t),
                        this.throttledTrackScreenView || (this.throttledTrackScreenView = a.a.throttle(this.trackScreenView.bind(this), 48e4)),
                        this.throttledTrackScreenView(this.getOption("appTag"))),
                    t.textDescriptions && this.setTextDescriptions(t.textDescriptions),
                    g.a.update(this.getOption("appTag"), t),
                    t.artifact && m.a.save(t.artifact),
                    this.didUpdate())
            }
            ), 25),
            willUpdate: function () { },
            didUpdate: function () { },
            trackScreenView: function () {
                d.app.analytics.trackScreenView(this.getOption("appTag")),
                    d.app.storage && d.app.storage.isSupported && d.app.storage.setTag("played-".concat(this.getOption("appTag")))
            },
            onChildviewTrackEvent: function (t) {
                d.app.analytics.trackEvent(t.category, t.action, this.getOption("appTag"))
            },
            setTextDescriptions: function (t) {
                var e = this;
                t && t.length && (this.textDescriptions = this.textDescriptions || [],
                    t.forEach((function (t) {
                        void 0 !== t.id && e.textDescriptions.slice(-10).find((function (e) {
                            return e.id === t.id
                        }
                        )) || (e.textDescriptions.push(t),
                            o()("#textDescriptions").append(o()("<p />").text(t.text)))
                    }
                    )))
            },
            parseBlob: function (t) {
                return t
            },
            getGameLayout: function () {
                return -1
            },
            formatSessionMessage: function (t) {
                return t
            },
            onTestingPreviousClick: function () {
                d.app.client.isTesting && d.app.client.goToPreviousState()
            },
            onTestingNextClick: function () {
                d.app.client.isTesting && d.app.client.goToNextState()
            },
            onTwitchBroadcasterIconClick: function (t) {
                this.showTwitchBroadcasterDialog()
            },
            showTwitchBroadcasterDialog: function (t) {
                var e = "<div class='icon-".concat(d.app.client.roles.broadcaster.platform, "'>").concat(d.app.client.roles.broadcaster.name, "</div>");
                e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>",
                    this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : d.app.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"),
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
            onResize: function () {
                var t = o()(window).width()
                    , e = o()(window).height();
                o()(".content,.controller-page").css({
                    height: e - 0,
                    width: t
                })
            },
            onRoomWasDestroyed: function () {
                d.app.storage && d.app.storage.isSupported && (d.app.storage.remove("roomCode"),
                    d.app.storage.remove("reconnect")),
                    p.a.show("error", {
                        titleText: v[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
                        text: v[this.locale].STRING_ERROR_SERVER_ROOM_DESTROYED,
                        onClose: function () {
                            window.location.reload(!0)
                        }
                    })
            },
            onDisconnected: function () {
                p.a.show("error", {
                    titleText: v[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
                    text: v[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
                    onClose: function () {
                        window.location.reload(!0)
                    }
                })
            },
            onConnectionMessage: function (t) {
                var e = "".concat(t.status, " ").concat(t.attempt ? "".concat(t.attempt, "/5") : "");
                if (p.a.show("toast", {
                    text: e
                }),
                    "connected" === t.status) {
                    var n = d.app.client.parseEntities();
                    this.model.set(n)
                }
            },
            onChildviewClientMessage: function (t) {
                var e, n = this;
                return (e = regeneratorRuntime.mark((function e() {
                    var i, o, s, a, r, c, h;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    if (!d.app.client.isRole("player")) {
                                        e.next = 45;
                                        break
                                    }
                                    if (!t.textKey) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.prev = 2,
                                        e.next = 5,
                                        d.app.client.updateText(t.textKey, t.val);
                                case 5:
                                    e.next = 19;
                                    break;
                                case 7:
                                    if (e.prev = 7,
                                        e.t0 = e.catch(2),
                                        !(e.t0 instanceof l.EcastEntityNotFound || e.t0 instanceof l.EcastPermissionDenied)) {
                                        e.next = 13;
                                        break
                                    }
                                    console.error("Couldn't update text entity ".concat(t.textKey, ": ").concat(e.t0.message)),
                                        e.next = 19;
                                    break;
                                case 13:
                                    if (!(e.t0 instanceof l.EcastFilterError)) {
                                        e.next = 17;
                                        break
                                    }
                                    n.currentLayout.onTextFilterError && n.currentLayout.onTextFilterError(e.t0),
                                        e.next = 19;
                                    break;
                                case 17:
                                    throw console.error("Unhandled error updating text entity ".concat(t.textKey)),
                                    e.t0;
                                case 19:
                                    e.next = 43;
                                    break;
                                case 21:
                                    if (!t.objectKey) {
                                        e.next = 41;
                                        break
                                    }
                                    return e.prev = 22,
                                        e.next = 25,
                                        d.app.client.updateObject(t.objectKey, t.val);
                                case 25:
                                    e.next = 39;
                                    break;
                                case 27:
                                    if (e.prev = 27,
                                        e.t1 = e.catch(22),
                                        !(e.t1 instanceof l.EcastEntityNotFound || e.t1 instanceof l.EcastPermissionDenied)) {
                                        e.next = 33;
                                        break
                                    }
                                    console.error("Couldn't update object entity ".concat(t.objectKey, ": ").concat(e.t1.message)),
                                        e.next = 39;
                                    break;
                                case 33:
                                    if (!(e.t1 instanceof l.EcastFilterError)) {
                                        e.next = 37;
                                        break
                                    }
                                    n.currentLayout.onObjectFilterError && n.currentLayout.onObjectFilterError(e.t1),
                                        e.next = 39;
                                    break;
                                case 37:
                                    throw console.error("Unhandled error updating object entity ".concat(t.objectKey)),
                                    e.t1;
                                case 39:
                                    e.next = 43;
                                    break;
                                case 41:
                                    i = n.formatSessionMessage(t),
                                        d.app.client.send("SendMessageToRoomOwner", i);
                                case 43:
                                    e.next = 52;
                                    break;
                                case 45:
                                    if (!d.app.client.isRole("audience")) {
                                        e.next = 52;
                                        break
                                    }
                                    if (o = n.currentLayout.sessionModule,
                                        s = n.formatSessionMessage(t),
                                        o) {
                                        e.next = 50;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 50:
                                    "vote" === o && (a = n.currentLayout.model.get("countGroupName"),
                                        r = s.vote,
                                        n.onChildviewClientCountGroup({
                                            name: a,
                                            vote: r
                                        })),
                                        "comment" === o && (c = n.currentLayout.model.get("textRingName"),
                                            h = s.entry,
                                            n.onChildviewClientTextRing({
                                                name: c,
                                                text: h
                                            }));
                                case 52:
                                case "end":
                                    return e.stop()
                            }
                    }
                    ), e, null, [[2, 7], [22, 27]])
                }
                )),
                    function () {
                        var t = this
                            , n = arguments;
                        return new Promise((function (i, o) {
                            var s = e.apply(t, n);
                            function a(t) {
                                F(s, i, o, a, r, "next", t)
                            }
                            function r(t) {
                                F(s, i, o, a, r, "throw", t)
                            }
                            a(void 0)
                        }
                        ))
                    }
                )()
            },
            onChildviewClientSessionMessage: function (t) {
                d.app.client.sessionSend(t.sessionModule, t.sessionName, t.sessionMessage)
            },
            onChildviewClientCountGroup: function (t) {
                var e = t.name
                    , n = t.vote;
                e || (e = this.sessionModulePrefix + this.currentLayout.sessionName),
                    d.app.client.incrementCountGroupCounter(e, n)
            },
            onChildviewClientGCounter: function (t) {
                var e = t.key
                    , n = t.times;
                d.app.client.incrementGCounter(e, n)
            },
            onChildviewClientTextRing: function (t) {
                var e = t.name
                    , n = t.text;
                e || (e = this.sessionModulePrefix + this.currentLayout.sessionName),
                    d.app.client.pushTextRing(e, n)
            }
        })
    },
    467: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return h
        }
        ));
        var i = n(41)
            , o = n.n(i)
            , s = n(31)
            , a = n.n(s)
            , r = n(471)
            , c = n(479)
            , l = n(468)
            , h = a.a.CollectionView.extend({
                tagName: "div",
                className: "choices",
                childView: function (t) {
                    return "input" === t.get("type") ? c.a : "text" === t.get("type") ? l.a : r.a
                },
                collection: new o.a.Collection([]),
                initialize: function (t) {
                    this.listenTo(this.collection, "sync", this.render),
                        this.mergeOptions(t, ["block", "action"])
                },
                childViewOptions: function (t, e) {
                    var n, i = !0;
                    return void 0 !== t.get("block") ? i = t.get("block") : void 0 !== this.getOption("block") && (i = this.getOption("block")),
                        void 0 !== t.get("action") ? n = t.get("action") : void 0 !== this.getOption("action") && (n = this.getOption("action")),
                    {
                        block: i,
                        action: n,
                        index: void 0 !== t.get("key") ? t.get("key") : e
                    }
                }
            })
    },
    468: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return m
        }
        ));
        var i = n(17)
            , o = n.n(i)
            , s = n(22)
            , a = n.n(s)
            , r = n(41)
            , c = n.n(r)
            , l = n(31)
            , h = n.n(l)
            , u = (n(192),
                n(922))
            , d = n.n(u);
        function p(t, e) {
            return function (t) {
                if (Array.isArray(t))
                    return t
            }(t) || function (t, e) {
                if (!(Symbol.iterator in Object(t)) && "[object Arguments]" !== Object.prototype.toString.call(t))
                    return;
                var n = []
                    , i = !0
                    , o = !1
                    , s = void 0;
                try {
                    for (var a, r = t[Symbol.iterator](); !(i = (a = r.next()).done) && (n.push(a.value),
                        !e || n.length !== e); i = !0)
                        ;
                } catch (t) {
                    o = !0,
                        s = t
                } finally {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (o)
                            throw s
                    }
                }
                return n
            }(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var m = h.a.View.extend({
            tagName: "div",
            template: a.a.template(d.a),
            model: new c.a.Model({
                text: "",
                className: ""
            }),
            bindings: {
                ".text": {
                    observe: ["text", "html"],
                    updateMethod: "html",
                    onGet: function (t) {
                        var e = p(t, 2)
                            , n = e[0]
                            , i = e[1];
                        return void 0 !== i ? i : o()("<div />").text(n).html()
                    }
                },
                ":el": {
                    attributes: [{
                        name: "style",
                        observe: "background",
                        onGet: function (t) {
                            return t ? "background-color: ".concat(t, ";") : ""
                        }
                    }, {
                        name: "class",
                        observe: "className"
                    }]
                }
            },
            onRender: function () {
                this.stickit()
            }
        })
    },
    469: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return w
        }
        ));
        var i = n(17)
            , o = n.n(i)
            , s = n(22)
            , a = n.n(s)
            , r = n(41)
            , c = n.n(r)
            , l = n(31)
            , h = n.n(l)
            , u = n(42)
            , d = n.n(u)
            , p = n(83)
            , m = n(457)
            , g = n(468)
            , v = n(467)
            , f = n(574)
            , b = n.n(f)
            , y = m.a.extend({
                defaults: {
                    choiceId: void 0,
                    type: "single",
                    censorDialog: "none",
                    chosen: null,
                    choices: [],
                    prompt: {},
                    error: null,
                    block: !0,
                    classes: [],
                    maxVotes: 16,
                    doneText: {},
                    announcePrompt: !1,
                    countGroupName: null,
                    strings: {
                        your_choice: "Thank you. Your choice: ",
                        censor_prompt: "Censor this?",
                        censor_confirm: "Yes, Censor!",
                        censor_cancel: "No!"
                    }
                }
            })
            , w = h.a.View.extend({
                className: "MakeSingleChoice scrollable",
                template: a.a.template(b.a),
                model: new y,
                sessionModule: "vote",
                sessionName: " Vote",
                regions: {
                    prompt: "#prompt",
                    choices: "#choicesRegion"
                },
                bindings: {
                    ".chosen": {
                        observe: "chosen",
                        updateMethod: "html",
                        onGet: function (t) {
                            return t ? t.html ? t.html : o()("<div />").text(t.text).html() : null
                        }
                    },
                    ".choices": {
                        observe: "chosen",
                        visible: function (t) {
                            return "" === t || null === t
                        }
                    },
                    ".error": {
                        observe: "error",
                        visible: !0,
                        updateView: !0
                    },
                    ".makeSingleChoiceDone": {
                        observe: "chosen",
                        visible: function (t) {
                            return null !== t && "" !== t
                        }
                    },
                    ".doneText": {
                        observe: "doneText",
                        updateMethod: "html",
                        onGet: function (t) {
                            return t ? t.html ? t.html : o()("<div />").text(t.text).html() : null
                        }
                    },
                    ":el": {
                        attributes: [{
                            name: "style",
                            observe: "playerInfo",
                            onGet: function (t) {
                                return t && t.bgColor ? "background-color: ".concat(t.bgColor) : ""
                            }
                        }, {
                            name: "class",
                            observe: "classes",
                            onGet: function (t) {
                                return t ? t.join(" ") : ""
                            }
                        }]
                    },
                    ".choice-button": {
                        attributes: [{
                            name: "style",
                            observe: "playerInfo",
                            onGet: function (t) {
                                return t && t.buttonColor ? "background-color:".concat(t.buttonColor) : null
                            }
                        }]
                    }
                },
                initialize: function (t) {
                    this.promptComponent = this.promptComponent || new g.a({
                        model: new c.a.Model
                    }),
                        this.choicesList = this.choicesList || new v.a({
                            action: "choose",
                            collection: new c.a.Collection
                        }),
                        this.selected = [],
                        this.listenTo(this.model, "change", this.update, this)
                },
                onBeforeDestroy: function () {
                    "multiple" === this.model.get("type") && this.onChildviewChildviewButtonSubmit()
                },
                update: function () {
                    var t = this;
                    this.promptComponent.model.clear({
                        silent: !0
                    }).set(this.model.get("prompt")),
                        this.choicesList.options.block = this.model.get("block"),
                        this.choicesList.collection.set(this.model.get("choices")),
                        "multiple" === this.model.get("type") && a.a.all(this.model.get("choices"), (function (t) {
                            return !t.disabled
                        }
                        )) && this.choicesList.collection.push({
                            text: "Submit",
                            action: "submit",
                            block: !1
                        }),
                        this.model.get("isAudience") && (void 0 !== this.model.get("choiceId") && this.model.get("choiceId") === this.getOption("choiceId") || (this.selected = [],
                            this.audienceChoice = void 0,
                            this.votesLeft = void 0),
                            this.selected.length > 0 && ("multiple" === this.model.get("type") ? this.choicesList.children.forEach((function (e) {
                                void 0 !== t.selected.find((function (t) {
                                    return t === e.getOption("index")
                                }
                                )) && e.model.set("selected", !0)
                            }
                            )) : this.model.setUpdate({
                                chosen: this.displayAudienceChoice(this.selected),
                                choiceId: this.model.get("choiceId") || 0
                            }))),
                        this.choiceId = this.model.get("choiceId") || 0,
                        this.stickit()
                },
                onRender: function () {
                    this.showChildView("prompt", this.promptComponent),
                        this.showChildView("choices", this.choicesList),
                        this.stickit()
                },
                onAttach: function () {
                    this.update(),
                        p.a.vibrate()
                },
                onChildviewChildviewButtonChoose: function (t) {
                    var e = this
                        , n = t.get("action") || "choose"
                        , i = t.get("index")
                        , o = this.model.get("type");
                    switch (this.choicesList.children.forEach((function (t) {
                        t.model.set("disabled", "single" === o),
                            t.model.set("active", !1)
                    }
                    )),
                    o) {
                        case "multiple":
                            if (this.model.get("toggle") ? t.set("selected", !t.get("selected")) : t.set("selected", !0),
                                this.model.get("isAudience")) {
                                var s = [];
                                this.choicesList.children.forEach((function (t) {
                                    t.model.get("selected") && s.push(t.getOption("index"))
                                }
                                )),
                                    this.selected = s
                            }
                            return !1;
                        case "repeating":
                            if (void 0 === this.votesLeft && (this.votesLeft = this.model.get("maxVotes")),
                                this.delaySubmit)
                                return !1;
                            if (this.votesLeft <= 0 && this.model.get("isAudience"))
                                return !1;
                            this.delaySubmit = !0,
                                window.setTimeout((function () {
                                    e.delaySubmit = !1
                                }
                                ), 101),
                                this.votesLeft -= 1;
                            break;
                        case "single":
                            t.set("selected", !0),
                                t.set("active", !0)
                    }
                    return this.model.get("isPlayer") ? this.triggerMethod("client:message", {
                        action: n,
                        choice: i
                    }) : this.model.get("isAudience") && (this.selected = [t.get("index")],
                        this.triggerMethod("client:countGroup", {
                            name: this.model.get("countGroupName"),
                            vote: i
                        }),
                        "repeating" !== o && this.model.setUpdate({
                            chosen: this.displayAudienceChoice(this.selected),
                            choiceId: this.choiceId
                        })),
                        !1
                },
                displayAudienceChoice: function (t) {
                    var e = this
                        , n = "Thank you."
                        , i = t.map((function (t) {
                            var n = e.choicesList.children.find((function (e) {
                                return e.model.get("index") === t
                            }
                            ));
                            return n ? n.model.get("html") || n.model.get("text") : ""
                        }
                        ));
                    return void 0 !== t && this.model.get("strings") && (n = this.model.get("strings").your_choice + i.join(", ")),
                    {
                        html: n
                    }
                },
                onChildviewChildviewButtonCensor: function (t) {
                    var e = this
                        , n = t.get("index")
                        , i = t.get("html");
                    if ("confirm" === this.model.get("censorDialog"))
                        t.get("isWarned") ? this.triggerMethod("client:message", {
                            action: "censor",
                            choice: n
                        }) : t.set("isWarned", !0);
                    else {
                        if ("warning" === this.model.get("censorDialog"))
                            return d.a.close(),
                                d.a.fire({
                                    customClass: {
                                        popup: "Dialog"
                                    },
                                    title: this.model.get("strings").censor_prompt,
                                    text: i,
                                    showCancelButton: !0,
                                    confirmButtonText: this.model.get("strings").censor_confirm,
                                    cancelButtonText: this.model.get("strings").censor_cancel,
                                    confirmButtonColor: "#900"
                                }).then((function (t) {
                                    t.value && e.triggerMethod("client:message", {
                                        action: "censor",
                                        choice: n
                                    })
                                }
                                )),
                                !1;
                        this.triggerMethod("client:message", {
                            action: "censor",
                            choice: n
                        })
                    }
                    return !1
                },
                onChildviewChildviewButtonSubmit: function () {
                    var t = [];
                    this.choicesList.children.forEach((function (e) {
                        e.model.get("selected") && t.push(e.getOption("index"))
                    }
                    ));
                    var e = t.join(",");
                    this.model.get("isPlayer") ? this.triggerMethod("client:message", {
                        action: "submit",
                        choice: e
                    }) : this.model.get("isAudience") && (this.triggerMethod("client:countGroup", {
                        name: this.model.get("countGroupName"),
                        vote: e
                    }),
                        "repeating" !== this.model.get("type") && (t = [],
                            this.choicesList.children.forEach((function (e) {
                                e.model.get("selected") && t.push(e.getOption("index"))
                            }
                            )),
                            this.selected = t,
                            this.model.setUpdate({
                                chosen: this.displayAudienceChoice(this.selected),
                                choiceId: this.choiceId
                            })))
                }
            })
    },
    471: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return m
        }
        ));
        n(192);
        var i = n(17)
            , o = n.n(i)
            , s = n(41)
            , a = n.n(s)
            , r = n(31)
            , c = n.n(r)
            , l = n(22)
            , h = n.n(l)
            , u = n(570)
            , d = n.n(u);
        function p(t, e) {
            return function (t) {
                if (Array.isArray(t))
                    return t
            }(t) || function (t, e) {
                if (!(Symbol.iterator in Object(t)) && "[object Arguments]" !== Object.prototype.toString.call(t))
                    return;
                var n = []
                    , i = !0
                    , o = !1
                    , s = void 0;
                try {
                    for (var a, r = t[Symbol.iterator](); !(i = (a = r.next()).done) && (n.push(a.value),
                        !e || n.length !== e); i = !0)
                        ;
                } catch (t) {
                    o = !0,
                        s = t
                } finally {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (o)
                            throw s
                    }
                }
                return n
            }(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var m = c.a.View.extend({
            template: h.a.template(d.a),
            model: new a.a.Model({}),
            className: function () {
                var t = "button-group btn-group";
                return !1 !== this.options.block && (t += " btn-block"),
                    t
            },
            events: {
                "click .button": "onClick"
            },
            bindings: {
                ":el": {
                    observe: "visible",
                    visible: function (t) {
                        return !1 !== t
                    },
                    visibleFn: function (t, e) {
                        t.css("display", e ? "" : "none")
                    },
                    attributes: [{
                        name: "class",
                        observe: ["className", "selected", "disabled", "active"],
                        onGet: function (t) {
                            var e = p(t, 4)
                                , n = e[0]
                                , i = "";
                            return n && (i += n),
                                e[1] && (i += " selected"),
                                e[2] && (i += " disabled"),
                                e[3] && (i += " active"),
                                i
                        }
                    }]
                },
                "button:first": {
                    observe: ["text", "html", "label"],
                    updateMethod: "html",
                    onGet: function (t) {
                        var e = p(t, 3)
                            , n = e[0]
                            , i = e[1]
                            , s = e[2];
                        return s ? this.$el.find("button:first").attr("aria-label", s) : this.$el.find("button:first").removeAttr("aria-label"),
                            i || o()("<div />").text(n).html()
                    },
                    attributes: [{
                        name: "disabled",
                        observe: "disabled"
                    }, {
                        name: "data-action",
                        observe: "action",
                        onGet: function (t) {
                            return t || "choose"
                        }
                    }, {
                        name: "data-index",
                        observe: "index"
                    }, {
                        name: "data-key",
                        observe: "key"
                    }, {
                        name: "style",
                        observe: "color",
                        onGet: function (t) {
                            if (!t)
                                return "";
                            var e = "";
                            return t.text && (e += "color: ".concat(t.text, ";")),
                                t.background && (e += "background-color: ".concat(t.background, ";")),
                                e
                        }
                    }, {
                        name: "type",
                        observe: "action",
                        onGet: function (t) {
                            return "submit" === t ? "submit" : "button"
                        }
                    }]
                },
                ".censor-button": {
                    observe: "censorable",
                    visible: !0,
                    visibleFn: function (t, e) {
                        e || t.remove()
                    },
                    attributes: [{
                        name: "data-index",
                        observe: "index"
                    }, {
                        name: "class",
                        observe: ["className", "isWarned"],
                        onGet: function (t) {
                            if (!t)
                                return null;
                            var e = "";
                            return t[0] && (e += t[0]),
                                t[1] && (e += " isWarned"),
                                e
                        }
                    }]
                }
            },
            onRender: function () {
                this.model.set("index", this.getOption("index")),
                    this.getOption("action") && this.model.set("action", this.getOption("action")),
                    this.stickit()
            },
            onClick: function (t) {
                var e = o()(t.target).data("action");
                this.triggerMethod("button:".concat(e), this.model)
            }
        })
    },
    474: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return C
        }
        ));
        var i = n(17)
            , o = n.n(i)
            , s = n(83)
            , a = n(41)
            , r = n.n(a)
            , c = n(467)
            , l = n(31)
            , h = n.n(l)
            , u = n(457)
            , d = n(468)
            , p = n(47)
            , m = n(22)
            , g = n.n(m)
            , v = n(191)
            , f = n(510)
            , b = n.n(f);
        function y(t, e, n, i, o, s, a) {
            try {
                var r = t[s](a)
                    , c = r.value
            } catch (t) {
                return void n(t)
            }
            r.done ? e(c) : Promise.resolve(c).then(i, o)
        }
        var w = u.a.extend({
            defaults: {
                canChangeName: !1,
                playerIsVIP: !1,
                playerCanStartGame: !1,
                playerCanCensor: !1,
                gameCanStart: !1,
                gameIsStarting: !1,
                gameEnded: !1,
                game: {
                    familyFriendly: !1,
                    extendedTimers: !1,
                    requireTwitch: !1,
                    controllerOnly: !1,
                    skipTutorials: !1
                },
                choices: [],
                artifact: null,
                characters: null,
                censorablePlayers: [],
                playerCanDoEpisodes: !1,
                playerCanReport: !1,
                playerCanViewAuthor: !1,
                lastUGCResult: null,
                history: [],
                activeContentId: null,
                formattedActiveContentId: null,
                isLocal: !1,
                strings: {
                    wait: "Sit back and relax!",
                    vip_waiting: "Waiting for all players to join",
                    vip_canStart: "Press this button when everybody has joined",
                    vip_cancel: "Press this button to cancel game start",
                    vip_postgame: "What would you like to do now?",
                    vip_episodes_menu: "Episodes Menu",
                    vip_episodes_unload: "Unload Episode",
                    vip_episodes_report: "Report Episode",
                    vip_episodes_warning: "Warning: user generated content is not rated",
                    vip_episodes_load: "Load an episode by id:",
                    vip_episodes_select: "Or select an episode:",
                    vip_episodes_back: "Back",
                    vip_episodes_submit: "SUBMIT",
                    vip_episodes_view_author: "View Author",
                    button_start: "Everybody's In",
                    button_cancel: "Cancel",
                    button_changename: "Change Name",
                    button_sameplayers: "Same Players",
                    button_newplayers: "New Players",
                    prompt_entername: "Enter your name",
                    prompt_choosecharacter: "Select your character",
                    button_censorOptions: "Censor Options"
                }
            }
        })
            , C = h.a.View.extend({
                className: "Lobby scrollable",
                template: g.a.template(b.a),
                model: new w,
                titleComponent: null,
                choicesListView: null,
                charactersListView: null,
                regions: {
                    title: "#title",
                    choices: "#choices",
                    characters: "#characters"
                },
                events: {
                    "click .choice-button": "onButtonClick",
                    "click .artifactLink": "onArtifactClick"
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "style",
                            observe: "playerInfo",
                            onGet: function (t) {
                                return t && t.bgColor ? "background-color: ".concat(t.bgColor, ";") : ""
                            }
                        }, {
                            name: "class",
                            observe: "classes",
                            onGet: function (t) {
                                return t ? t.join(" ") : ""
                            }
                        }]
                    },
                    ".artifactContainer": {
                        observe: "artifact",
                        visible: !0
                    },
                    ".artifactLink": {
                        attributes: [{
                            name: "href",
                            observe: "artifact",
                            onGet: function (t) {
                                if (!t)
                                    return null;
                                var e = "games.jackbox.tv";
                                return -1 !== t.rootId.indexOf("test") && (e = "games-test.jackbox.tv"),
                                    "https://".concat(e, "/artifact/").concat(t.categoryId, "/").concat(t.artifactId, "/")
                            }
                        }]
                    },
                    ".choice-button": {
                        attributes: [{
                            name: "style",
                            observe: "playerInfo",
                            onGet: function (t) {
                                return t && t.buttonColor ? "background-color: ".concat(t.buttonColor) : null
                            }
                        }]
                    },
                    ".characterSelect": {
                        observe: "characters",
                        visible: !0
                    },
                    ".charactersPrompt": {
                        observe: "characters",
                        visible: !0,
                        onGet: function (t) {
                            return t && !g.a.isEmpty(t)
                        }
                    },
                    ".charactersPromptText": {
                        observe: "strings",
                        onGet: function (t) {
                            return this.getOption("strings").prompt_choosecharacter
                        }
                    }
                },
                strings: {},
                initialize: function () {
                    this.titleComponent = new d.a({
                        model: new r.a.Model({})
                    }),
                        this.choicesListView = this.choicesListView || new c.a,
                        this.charactersListView = new h.a.CollectionView({
                            childView: k,
                            className: "charactersList",
                            collection: new r.a.Collection
                        }),
                        this.listenTo(this.model, "change", this.update, this)
                },
                update: function () {
                    var t = this;
                    if (this.strings = this.model.get("strings"),
                        this.choicesListView.collection.reset(),
                        this.titleComponent.model.set("html", this.getOption("strings").wait),
                        this.model.get("playerIsVIP") && (this.model.get("gameCanStart") ? this.model.get("playerCanStartGame") && (this.model.get("gameIsStarting") ? (this.titleComponent.model.set("html", this.getOption("strings").vip_cancel),
                            this.choicesListView.collection.add({
                                html: this.getOption("strings").button_cancel,
                                action: "cancel"
                            })) : this.model.get("gameFinished") ? (this.titleComponent.model.set("html", this.getOption("strings").vip_postgame),
                                this.choicesListView.collection.add({
                                    html: this.getOption("strings").button_sameplayers,
                                    action: "PostGame_Continue"
                                }),
                                this.choicesListView.collection.add({
                                    html: this.getOption("strings").button_newplayers,
                                    action: "PostGame_NewGame"
                                })) : (this.titleComponent.model.set("html", this.getOption("strings").vip_canStart),
                                    this.choicesListView.collection.add({
                                        html: this.getOption("strings").button_start,
                                        action: "start"
                                    }),
                                    this.model.get("playerCanCensor") && this.model.get("censorablePlayers").length > 0 && this.choicesListView.collection.add({
                                        html: this.getOption("strings").button_censorOptions,
                                        action: "censorOptions"
                                    }))) : this.titleComponent.model.set("html", this.getOption("strings").vip_waiting)),
                        this.model.get("playerCanDoEpisodes")) {
                        if (this.model.get("activeContentId")) {
                            var e = this.model.get("activeContentId")
                                , n = this.model.get("history").find((function (t) {
                                    return e === (t.remoteContentId || t.localContentId)
                                }
                                ))
                                , i = n && n.metadata ? p.a.htmlUnescape(n.metadata.title) : null;
                            i && this.choicesListView.collection.add({
                                type: "text",
                                text: i
                            }),
                                this.choicesListView.collection.add({
                                    html: this.getOption("strings").vip_episodes_unload,
                                    action: "ugc-unload",
                                    block: !1
                                }),
                                this.model.get("playerCanReport") && this.choicesListView.collection.add({
                                    html: this.getOption("strings").vip_episodes_report,
                                    action: "ugc-report",
                                    block: !1
                                }),
                                this.model.get("playerCanViewAuthor") && this.choicesListView.collection.add({
                                    html: this.getOption("strings").vip_episodes_view_author,
                                    action: "ugc-view-author",
                                    block: !1
                                })
                        } else
                            this.choicesListView.collection.add({
                                html: this.getOption("strings").vip_episodes_menu,
                                action: "ugc"
                            });
                        var o = this.model.get("lastUGCResult");
                        o && o.error && this.lastUGCResultId !== o.id && (s.a.show("alert", {
                            text: o.error
                        }),
                            this.lastUGCResultId = o.id)
                    }
                    this.model.get("canChangeName") && this.choicesListView.collection.add({
                        html: this.getOption("strings").button_changename,
                        action: "changeName"
                    }),
                        this.model.get("choices") && this.choicesListView.collection.add(this.model.get("choices"));
                    var a = this.model.get("characters") || [];
                    this.charactersListView.collection.set(g.a.map(a, (function (e) {
                        var n = t.model.get("playerInfo") || {}
                            , i = e;
                        return i.bgcolor = n.buttonColor,
                            i.selected = n.avatar === i.name,
                            i
                    }
                    ))),
                        this.stickit()
                },
                onRender: function () {
                    this.showChildView("title", this.titleComponent),
                        this.showChildView("choices", this.choicesListView),
                        this.showChildView("characters", this.charactersListView),
                        this.update()
                },
                onArtifactClick: function () {
                    this.triggerMethod("track:event", {
                        category: "PostGame",
                        action: "galleryClicked"
                    }),
                        v.storage.isSupported && v.storage.markGallerySeen(0)
                },
                onButtonClick: function (t) {
                    var e, n = this;
                    return (e = regeneratorRuntime.mark((function e() {
                        var i, a, l, h, u, d;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;)
                                switch (e.prev = e.next) {
                                    case 0:
                                        if (i = o()(t.currentTarget),
                                            "back" !== (a = i.data("action"))) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        if ("censorConfirm" !== a) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 6:
                                        if ("activateContentId" !== a) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        if ("changeName" !== a) {
                                            e.next = 22;
                                            break
                                        }
                                        return e.prev = 9,
                                            e.next = 12,
                                            s.a.show("custom", {
                                                input: "text",
                                                title: n.getOption("strings").prompt_entername,
                                                customClass: {
                                                    input: "playerName"
                                                },
                                                inputAttributes: {
                                                    maxlength: 12
                                                },
                                                inputValidator: function (t) {
                                                    return t ? t.length > 12 ? "Limit 12 characters" : void 0 : "You need to write something!"
                                                }
                                            });
                                    case 12:
                                        if (!(l = e.sent).dismiss) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 15:
                                        n.triggerMethod("client:message", {
                                            name: l.value
                                        }),
                                            e.next = 20;
                                        break;
                                    case 18:
                                        e.prev = 18,
                                            e.t0 = e.catch(9);
                                    case 20:
                                        e.next = 45;
                                        break;
                                    case 22:
                                        if ("censorOptions" !== a) {
                                            e.next = 27;
                                            break
                                        }
                                        h = n,
                                            s.a.show("custom", {
                                                target: n.el,
                                                html: "",
                                                confirmButtonText: "Cancel",
                                                customClass: {
                                                    popup: "censorOptionsModal"
                                                },
                                                onOpen: function () {
                                                    var t = new c.a({
                                                        el: ".censorOptionsModal .swal2-content",
                                                        action: "censor",
                                                        collection: new r.a.Collection
                                                    });
                                                    t.collection.set(h.model.get("censorablePlayers").map((function (t) {
                                                        return {
                                                            action: "censorConfirm",
                                                            html: t.name,
                                                            key: t.id
                                                        }
                                                    }
                                                    ))),
                                                        t.render(),
                                                        h.listenTo(t, "childview:button:censorConfirm", h.censorPlayer)
                                                }
                                            }),
                                            e.next = 45;
                                        break;
                                    case 27:
                                        if ("ugc-unload" !== a) {
                                            e.next = 32;
                                            break
                                        }
                                        return n.triggerMethod("client:message", {
                                            clearContentId: !0
                                        }),
                                            e.abrupt("return", !1);
                                    case 32:
                                        if ("ugc-report" !== a) {
                                            e.next = 39;
                                            break
                                        }
                                        return u = n.model.get("formattedActiveContentId"),
                                            window.open("".concat("http://support.jackboxgames.com/", "?episodeID=").concat(u), "_blank"),
                                            e.abrupt("return", !1);
                                    case 39:
                                        if ("ugc-view-author" !== a) {
                                            e.next = 44;
                                            break
                                        }
                                        return n.triggerMethod("client:message", {
                                            viewAuthor: !0
                                        }),
                                            e.abrupt("return", !1);
                                    case 44:
                                        "ugc" === a ? (d = n,
                                            s.a.show("custom", {
                                                target: n.el,
                                                html: "",
                                                showConfirmButton: !1,
                                                customClass: {
                                                    popup: "episodesModal"
                                                },
                                                background: d.model.get("playerInfo") && d.model.get("playerInfo").bgColor ? d.model.get("playerInfo").bgColor : "white",
                                                padding: "10px 5px",
                                                onOpen: function () {
                                                    var t = new c.a({
                                                        el: ".episodesModal",
                                                        action: "episode",
                                                        collection: new r.a.Collection([])
                                                    });
                                                    t.collection.add({
                                                        html: n.model.get("strings").vip_episodes_back || "Back",
                                                        action: "back",
                                                        className: "backButton"
                                                    }),
                                                        t.collection.add({
                                                            type: "text",
                                                            html: n.model.get("strings").vip_episodes_load || "Load an episode by id:",
                                                            className: "header"
                                                        }),
                                                        t.collection.add({
                                                            type: "input",
                                                            preventAutosize: !0,
                                                            placeholder: "???-????",
                                                            inlineSubmit: !0,
                                                            inlineSubmitText: n.model.get("strings").vip_episodes_submit || "SUBMIT",
                                                            className: "lobbyUgcInput"
                                                        }),
                                                        t.collection.add({
                                                            type: "text",
                                                            html: n.model.get("strings").vip_episodes_warning || "Warning: user generated content is not rated",
                                                            className: "danger"
                                                        }),
                                                        d.model.get("history").length && (t.collection.add({
                                                            type: "text",
                                                            html: n.model.get("strings").vip_episodes_select || "Or select an episode:",
                                                            className: "episodesListHeader"
                                                        }),
                                                            t.collection.add(d.model.get("history").map((function (t) {
                                                                return {
                                                                    action: "activateContentId",
                                                                    html: t.remoteContentId ? "".concat(t.metadata.title, "<br/>").concat(t.formattedRemoteContentId) : "".concat(t.metadata.title),
                                                                    key: t.remoteContentId || t.localContentId
                                                                }
                                                            }
                                                            )))),
                                                        t.render(),
                                                        o()(".lobbyUgcInput").mask("aaa-aaaa", {
                                                            placeholder: "???-????"
                                                        }),
                                                        d.listenTo(t, "childview:button:activateContentId", d.activateContentId),
                                                        d.listenTo(t, "childview:button:back", (function () {
                                                            s.a.close()
                                                        }
                                                        )),
                                                        d.listenTo(t, "childview:input:submit", d.activateContentIdFromInput)
                                                }
                                            })) : n.triggerMethod("client:message", {
                                                action: a
                                            });
                                    case 45:
                                    case "end":
                                        return e.stop()
                                }
                        }
                        ), e, null, [[9, 18]])
                    }
                    )),
                        function () {
                            var t = this
                                , n = arguments;
                            return new Promise((function (i, o) {
                                var s = e.apply(t, n);
                                function a(t) {
                                    y(s, i, o, a, r, "next", t)
                                }
                                function r(t) {
                                    y(s, i, o, a, r, "throw", t)
                                }
                                a(void 0)
                            }
                            ))
                        }
                    )()
                },
                censorPlayer: function (t) {
                    s.a.close(),
                        this.triggerMethod("client:message", {
                            action: "censor",
                            id: t.get("key")
                        })
                },
                activateContentId: function (t) {
                    s.a.close(),
                        this.triggerMethod("client:message", {
                            activateContentId: !0,
                            contentId: t.get("key")
                        })
                },
                activateContentIdFromInput: function (t) {
                    (t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase() || "").length < 7 || (this.triggerMethod("client:message", {
                        activateContentId: !0,
                        contentId: t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase()
                    }),
                        s.a.close())
                },
                onChildviewChildviewCharacterClick: function (t) {
                    var e = this;
                    t.get("available") && !t.get("selected") && (this.triggerMethod("client:message", {
                        action: "avatar",
                        name: t.get("name")
                    }),
                        this.charactersListView.collection.forEach((function (t) {
                            t.unset("active"),
                                t.set("bgcolor", e.model.get("playerInfo").buttonColor)
                        }
                        )),
                        t.set("active", !0),
                        t.set("bgcolor", this.model.get("playerInfo").textColor))
                }
            })
            , k = h.a.View.extend({
                tagName: "button",
                template: g.a.template('<div class="flex-item"></div>'),
                className: function () {
                    return "characters ".concat(this.model.get("name"))
                },
                events: {
                    click: "onCharacterClick"
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "style",
                            observe: "bgcolor",
                            onGet: function (t) {
                                return t ? "background-color: ".concat(t, ";") : ""
                            }
                        }, {
                            name: "aria-label",
                            observe: "name"
                        }],
                        classes: {
                            active: "active",
                            selected: {
                                observe: "selected",
                                onGet: function (t) {
                                    return t
                                }
                            },
                            disabled: {
                                observe: "available",
                                onGet: function (t) {
                                    return !t
                                }
                            }
                        }
                    }
                },
                onCharacterClick: function () {
                    this.trigger("character:click", this.model)
                },
                onRender: function () {
                    this.stickit()
                }
            })
    },
    475: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return y
        }
        ));
        var i = n(17)
            , o = n.n(i)
            , s = n(22)
            , a = n.n(s)
            , r = n(41)
            , c = n.n(r)
            , l = n(31)
            , h = n.n(l)
            , u = n(457)
            , d = n(83)
            , p = n(468)
            , m = n(479)
            , g = n(467)
            , v = n(573)
            , f = n.n(v)
            , b = u.a.extend({
                defaults: {
                    state: "EnterSingleText",
                    actions: [{
                        text: "submit",
                        action: "submit"
                    }],
                    allowEmpty: !1,
                    autoSubmit: !1,
                    classes: [],
                    doneText: "",
                    entryId: void 0,
                    entry: null,
                    live: !1,
                    maxLength: 500,
                    textKey: void 0,
                    textRingName: null,
                    placeholder: "",
                    autocapitalize: !1,
                    className: "",
                    inlineSubmit: !1,
                    inlineSubmitText: "Submit",
                    error: "",
                    strings: {
                        ERROR_NOTHING_ENTERED: "You need to enter something!",
                        ERROR_REJECTED_TEXT: "That's not allowed, enter something else! (You can change the level of filtering in the game's settings menu)"
                    }
                }
            })
            , y = h.a.View.extend({
                className: "EnterSingleText scrollable",
                template: a.a.template(f.a),
                model: new b,
                sessionModule: "comment",
                sessionName: " Comments",
                regions: {
                    prompt: "#prompt",
                    input: "#input-region",
                    buttons: "#buttons"
                },
                events: {
                    "submit form": "onChildviewInputSubmit"
                },
                bindings: {
                    ".enterSingleTextForm": {
                        observe: "entry",
                        visible: function (t) {
                            return !t
                        }
                    },
                    ".enterSingleTextDone": {
                        observe: "entry",
                        visible: !0
                    },
                    ".doneText": {
                        observe: "doneText",
                        updateMethod: "html",
                        onGet: function (t) {
                            return t ? t.html ? t.html : o()("<div />").text(t.text).html() : ""
                        }
                    },
                    ":el": {
                        attributes: [{
                            name: "style",
                            observe: "playerInfo",
                            onGet: function (t) {
                                return t && t.bgColor ? "background-color: ".concat(t.bgColor) : ""
                            }
                        }, {
                            name: "class",
                            observe: "classes",
                            onGet: function (t) {
                                return t ? t.join(" ") : ""
                            }
                        }]
                    },
                    ".choice-button": {
                        attributes: [{
                            name: "style",
                            observe: "playerInfo",
                            onGet: function (t) {
                                return t && t.buttonColor ? "background-color: ".concat(t.buttonColor) : null
                            }
                        }]
                    }
                },
                initialize: function (t) {
                    this.currentEntry = null,
                        this.shouldSubmit = !1,
                        this.promptComponent = new p.a({
                            model: new c.a.Model({
                                text: "",
                                className: ""
                            })
                        }),
                        this.inputComponent = this.inputComponent || new m.a({
                            model: new c.a.Model({})
                        }),
                        this.buttonsCollection = this.buttonsCollection || new c.a.Collection([{
                            text: "submit"
                        }]),
                        this.buttonsComponent = this.buttonsComponent || new g.a({
                            block: !0,
                            collection: this.buttonsCollection
                        }),
                        this.listenTo(this.model, "change", this.update, this)
                },
                update: function () {
                    this.model.get("isAudience") && (void 0 !== this.model.get("entryId") && this.model.get("entryId") === this.entryId || (this.audienceEntry = void 0),
                        this.audienceEntry && this.model.setUpdate({
                            entry: this.audienceEntry,
                            entryId: this.model.get("entryId") || 0
                        })),
                        this.promptComponent.model.clear({
                            silent: !0
                        }).set(this.model.get("prompt")),
                        this.inputComponent.model.set(this.model.attributes),
                        this.buttonsComponent.options.block = this.model.get("block"),
                        this.buttonsCollection.set(this.model.get("actions") || [{
                            text: "submit",
                            action: "submit"
                        }]),
                        this.model.get("entryId") && this.model.get("entryId") !== this.currentEntry && (this.inputComponent.clearInput(),
                            this.currentEntry = this.model.get("entryId")),
                        this.$el.find(".enterSingleTextFieldset").prop("disabled", !1),
                        this.$el.find("textarea").focus(),
                        this.stickit(),
                        this.model.get("autoSubmit") && this.shouldSubmit && this.onChildviewInputSubmit()
                },
                onRender: function () {
                    this.showChildView("prompt", this.promptComponent),
                        this.showChildView("input", this.inputComponent),
                        this.showChildView("buttons", this.buttonsComponent),
                        this.stickit()
                },
                onAttach: function () {
                    this.update(),
                        d.a.vibrate()
                },
                onBeforeDestroy: function () {
                    this.shouldSubmit && this.onChildviewInputSubmit()
                },
                onChildviewInputText: function (t) {
                    var e = this
                        , n = t.getValue();
                    n.length > this.model.get("maxLength") && (n = n.substr(0, this.model.get("maxLength")),
                        t.setValue(n)),
                        this.shouldSubmit = n.length > 0,
                        this.model.get("live") && (this.throttledSend || (this.throttledSend = a.a.throttle((function () {
                            var n = t.getSanitizedValue();
                            if (0 !== n.length) {
                                var i = {
                                    action: "write-live",
                                    entry: n
                                }
                                    , o = e.model.get("textKey");
                                void 0 !== o && (i.textKey = o,
                                    i.val = n),
                                    e.triggerMethod("client:message", i)
                            }
                        }
                        ), 500)),
                            this.throttledSend())
                },
                onChildviewInputSubmit: function () {
                    var t = this.inputComponent.getValue()
                        , e = this.inputComponent.getSanitizedValue();
                    if (this.model.setUpdate({
                        error: null
                    }),
                        0 === e.length && !this.model.get("allowEmpty"))
                        return this.model.setUpdate({
                            error: this.model.get("strings").ERROR_NOTHING_ENTERED
                        }),
                            !1;
                    t.length > this.model.get("maxLength") && (this.inputComponent.setValue(t.substr(0, this.model.get("maxLength"))),
                        t = this.inputComponent.getValue(),
                        e = this.inputComponent.getSanitizedValue()),
                        this.shouldSubmit = !1;
                    var n = {
                        action: "write",
                        entry: e
                    }
                        , i = this.model.get("textKey");
                    return i && (n.textKey = i,
                        n.val = e),
                        this.triggerMethod("client:message", n),
                        this.model.get("isAudience") ? this.model.get("repeating") ? this.inputComponent.clearInput() : (this.audienceEntry = e,
                            this.entryId = this.model.get("entryId") || 0,
                            this.model.setUpdate({
                                entry: this.audienceEntry,
                                shotId: this.entryId
                            })) : this.model.get("repeating") || this.$el.find(".enterSingleTextFieldset").prop("disabled", !0),
                        !1
                },
                onTextFilterError: function (t) {
                    this.model.setUpdate({
                        error: this.model.get("strings").ERROR_REJECTED_TEXT
                    })
                },
                onChildviewChildviewButtonSuggestion: function () {
                    var t = this.model.get("suggestions")
                        , e = this.inputComponent.getSanitizedValue()
                        , n = a.a.without(t, e);
                    return this.inputComponent.setValue(a.a.shuffle(n)[0]),
                        !1
                },
                onChildviewChildviewButtonChoose: function (t) {
                    return this.triggerMethod("client:message", {
                        action: t.get("key")
                    }),
                        !1
                },
                onChildviewChildviewButtonHelp: function () {
                    return this.triggerMethod("client:message", {
                        action: "help"
                    }),
                        !1
                }
            })
    },
    477: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return c
        }
        ));
        var i = n(22)
            , o = n.n(i)
            , s = n(191);
        function a(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
            }
        }
        function r(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
        var c = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var e, n, i;
            return e = t,
                i = [{
                    key: "isTestArtifact",
                    value: function (t) {
                        return t && t.rootId && -1 !== t.rootId.indexOf("test")
                    }
                }, {
                    key: "save",
                    value: function (t) {
                        var e = this.isTestArtifact(t) ? this.testDomain : this.domain
                            , n = "http://".concat(e, "/artifact/").concat(t.categoryId, "/").concat(t.artifactId, "/");
                        if (s.app.storage.isSupported) {
                            var i = s.app.storage.get("galleries")
                                , a = [];
                            try {
                                a = JSON.parse(i) || []
                            } catch (t) {
                                a = []
                            }
                            if (void 0 === o.a.findWhere(a, {
                                url: n
                            }))
                                return a.unshift({
                                    url: n,
                                    time: (new Date).getTime(),
                                    categoryId: t.categoryId,
                                    viewed: !1
                                }),
                                    s.app.storage.set("galleries", JSON.stringify(a.slice(0, 40))),
                                    s.app.analytics.trackEvent("PostGame", "galleryShown", s.app.client.appTag),
                                    !0
                        }
                        return !1
                    }
                }],
                (n = null) && a(e.prototype, n),
                i && a(e, i),
                t
        }();
        r(c, "domain", "games.jackbox.tv"),
            r(c, "testDomain", "games-test.jackbox.tv")
    },
    479: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return f
        }
        ));
        var i = n(17)
            , o = n.n(i)
            , s = n(22)
            , a = n.n(s)
            , r = n(41)
            , c = n.n(r)
            , l = n(31)
            , h = n.n(l)
            , u = n(571)
            , d = n.n(u)
            , p = n(47)
            , m = n(923)
            , g = n.n(m);
        n(192);
        function v(t) {
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            )(t)
        }
        var f = h.a.View.extend({
            tagName: "div",
            className: "input",
            model: new c.a.Model({}),
            template: a.a.template(g.a),
            events: {
                "keypress textarea": "onKeypress",
                "click .inlineSubmitButton": "onSubmitClick",
                "input textarea": "onInputChange"
            },
            bindings: {
                ":el": {
                    attributes: [{
                        name: "style",
                        observe: "hidden",
                        onGet: function (t) {
                            return !0 === t ? "display: none;" : "display: block;"
                        }
                    }, {
                        name: "class",
                        observe: "className",
                        onGet: function (t) {
                            return "input ".concat(void 0 !== t ? t : "")
                        }
                    }]
                },
                textarea: {
                    attributes: [{
                        name: "maxlength",
                        observe: "maxLength"
                    }, {
                        name: "placeholder",
                        observe: "placeholder"
                    }, {
                        name: "autocapitalize",
                        observe: "autocapitalize"
                    }, {
                        name: "class",
                        observe: "className",
                        onGet: function (t) {
                            return "form-control ".concat(void 0 !== t ? t : "")
                        }
                    }]
                },
                ".inputGroup": {
                    attributes: [{
                        name: "class",
                        observe: "inlineSubmit",
                        onGet: function (t) {
                            return !0 === t ? "input-group" : ""
                        }
                    }]
                },
                ".inlineSubmit": {
                    attributes: [{
                        name: "class",
                        observe: "inlineSubmit",
                        onGet: function (t) {
                            return !0 === t ? "input-group-btn" : ""
                        }
                    }, {
                        name: "style",
                        observe: "inlineSubmit",
                        onGet: function (t) {
                            return !0 === t ? "" : "display:none;"
                        }
                    }]
                },
                ".inlineSubmitText": {
                    observe: "inlineSubmitText",
                    onGet: function (t) {
                        return void 0 !== t ? t : "Send"
                    }
                },
                ".form-group": {
                    attributes: [{
                        name: "class",
                        observe: "error",
                        onGet: function (t) {
                            return t ? "has-error" : ""
                        }
                    }]
                },
                ".errorText": {
                    observe: "error",
                    updateMethod: "html",
                    visible: !0,
                    updateView: !0,
                    onGet: function (t) {
                        return t ? "object" === v(t) ? t.html ? t.html : o()("<div />").text(t.text).html() : t : null
                    }
                },
                ".charRemaining": "remaining",
                ".maxChars": "maxLength",
                ".charCountDisplay": {
                    observe: ["maxLength", "counter"],
                    visible: function (t) {
                        return t[0] && t[1]
                    }
                }
            },
            render: function () {
                this.$el.html(this.template()),
                    this.stickit(),
                    this.model.set("remaining", this.model.get("maxLength"))
            },
            onAttach: function () {
                this.getOption("preventAutosize") || d()(o()("textarea"))
            },
            onSubmitClick: function () {
                return this.triggerMethod("input:submit", this),
                    o()("textarea").blur(),
                    !1
            },
            onKeypress: function (t) {
                return this.model.set("error", ""),
                    13 !== t.keyCode || (o()("textarea").blur(),
                        this.triggerMethod("input:submit", this),
                        !1)
            },
            onInputChange: function (t) {
                var e = this.$("textarea").first();
                if (this.triggerMethod("input:text", this),
                    e) {
                    var n = e.val() || "";
                    this.model.set("remaining", this.model.get("maxLength") - n.length)
                }
            },
            clearInput: function () {
                var t = o()(this.$el).find("textarea");
                o()(t).val(""),
                    this.getOption("preventAutosize") || d.a.update(t),
                    this.onInputChange()
            },
            setValue: function (t) {
                o()(this.$el).find("textarea")[0].value = t,
                    this.onInputChange()
            },
            getValue: function () {
                return this.$("textarea").val()
            },
            getSanitizedValue: function () {
                return p.a.sanitize(this.getValue())
            },
            sanitize: function (t) {
                return p.a.sanitize(t)
            },
            sanitizeInput: function (t) {
                return p.a.sanitizeInput(t)
            }
        })
    },
    480: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return m
        }
        ));
        n(192);
        var i = n(17)
            , o = n.n(i)
            , s = n(31)
            , a = n.n(s)
            , r = n(457)
            , c = n(22)
            , l = n.n(c)
            , h = n(191)
            , u = n(927)
            , d = n.n(u)
            , p = r.a.extend({
                defaults: {
                    message: {
                        text: null
                    },
                    classes: [],
                    artifact: null
                }
            })
            , m = a.a.View.extend({
                className: "Logo",
                template: l.a.template(d.a),
                model: new p,
                events: {
                    touchstart: "onTouchStart",
                    "click .artifactButton": "onArtifactClick"
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "class",
                            observe: "classes",
                            onGet: function (t) {
                                return (t || []).join(" ")
                            }
                        }]
                    },
                    ".message": {
                        attributes: [{
                            name: "style",
                            observe: "message",
                            onGet: function (t) {
                                var e = "";
                                return t && (t.html || t.text) || (e += "display: none;"),
                                    e
                            }
                        }]
                    },
                    ".messageText": {
                        observe: "message",
                        updateMethod: "html",
                        onGet: function (t) {
                            return t && (t.html || t.text) ? t.html ? t.html : o()("<div />").text(t.text).html() : null
                        }
                    },
                    "#action": "action",
                    ".artifactContainer": {
                        observe: "artifact",
                        visible: !0
                    },
                    ".artifactLink": {
                        attributes: [{
                            name: "href",
                            observe: "artifact",
                            onGet: function (t) {
                                var e = t || {
                                    rootId: "",
                                    categoryId: "",
                                    artifactId: ""
                                }
                                    , n = "games.jackbox.tv";
                                return -1 !== e.rootId.indexOf("test") && (n = "games-test.jackbox.tv"),
                                    "https://".concat(n, "/artifact/").concat(e.categoryId, "/").concat(e.artifactId, "/")
                            }
                        }]
                    }
                },
                onRender: function () {
                    this.stickit()
                },
                onTouchStart: function (t) {
                    "button" !== t.target.tagName.toLowerCase() && t.preventDefault()
                },
                onArtifactClick: function () {
                    this.triggerMethod("track:event", {
                        category: "PostGame",
                        action: "galleryClicked"
                    }),
                        h.storage.isSupported && h.storage.markGallerySeen(0)
                }
            })
    },
    487: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return C
        }
        ));
        var i = n(17)
            , o = n.n(i)
            , s = n(22)
            , a = n.n(s)
            , r = n(41)
            , c = n.n(r)
            , l = n(31)
            , h = n.n(l)
            , u = n(457)
            , d = n(83)
            , p = n(507)
            , m = n(468)
            , g = n(467)
            , v = n(572)
            , f = n(926)
            , b = n.n(f);
        function y(t) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            )(t)
        }
        var w = u.a.extend({
            defaults: {
                drawId: 0,
                objectKey: void 0,
                size: {
                    width: 240,
                    height: 300
                },
                actions: !1,
                colors: ["#3c6e6f", "#007727", "#b8aa01", "#0350a0", "#000000", "#966401", "#48019d", "#730075", "#9c0e3e"],
                background: "",
                thicknesses: [3, 6],
                defaultIndex: 4,
                classes: [],
                prompt: {
                    html: ""
                },
                live: !1,
                lines: !1,
                hideSubmit: !1,
                autoSubmit: !1,
                allowEmpty: !1,
                disabled: !1,
                debug: !1,
                strings: {
                    drawing_empty: "You must draw something!",
                    submit: "submit",
                    ERROR_REJECTED_OBJECT: "That's not allowed, enter something else!"
                }
            }
        })
            , C = h.a.View.extend({
                className: "Draw",
                template: a.a.template(b.a),
                model: new w,
                regions: {
                    prompt: "#prompt",
                    sketchpad: "#sketchpad",
                    toolbar: "#toolbar",
                    buttons: "#buttons"
                },
                events: {
                    "click #submitdrawing": "onChildviewButtonSubmit"
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "class",
                            observe: "classes",
                            onGet: function (t) {
                                return t ? t.join(" ") : ""
                            }
                        }]
                    },
                    "#censorOptions": {
                        visible: !1
                    },
                    ".footer": {
                        observe: "footer",
                        updateMethod: "html",
                        onGet: function (t) {
                            return t ? t.html ? t.html : o()("<div />").text(t.text).html() : null
                        }
                    },
                    ".submitDrawing": {
                        observe: ["hideSubmit", "actions", "strings"],
                        visible: !0,
                        updateView: !0,
                        onGet: function (t) {
                            return !t[0] && (!t[1] && (void 0 === t[2] ? "" : t[2].submit || "Submit"))
                        }
                    }
                },
                initialize: function () {
                    this.promptComponent = this.promptComponent || new m.a({}),
                        this.toolbarComponent = this.toolbarComponent || new v.a({
                            model: new c.a.Model({})
                        }),
                        this.sketchpadComponent = this.sketchpadComponent || new p.a({
                            model: new c.a.Model
                        }),
                        this.buttonsCollection = this.buttonsCollection || new c.a.Collection([]),
                        this.buttonsComponent = this.buttonsComponent || new g.a({
                            block: !1,
                            collection: this.buttonsCollection
                        }),
                        this.options.thicknessIndex = -1,
                        this.options.colorIndex = -1,
                        this.drawId = this.model.get("drawId"),
                        this.listenTo(this.model, "change", this.update, this),
                        this.onResizeWithContext = this.onResize.bind(this),
                        window.addEventListener("resize", this.onResizeWithContext)
                },
                update: function () {
                    this.model.get("drawId") !== this.getOption("drawId") && (this.resetDrawing(),
                        this.drawId = this.model.get("drawId")),
                        this.model.get("prompt") && this.promptComponent.model.set(this.model.get("prompt")),
                        this.model.get("size") ? this.sketchpadComponent.model.set("size", this.model.get("size")) : this.sketchpadComponent.model.set("size", {
                            width: 720,
                            height: 900
                        }),
                        this.model.get("image") && (this.sketchpadComponent.setImage(this.images[this.model.get("image")]),
                            this.onResize()),
                        this.model.get("background") && this.sketchpadComponent.model.set("background", this.model.get("background")),
                        this.toolbarComponent && this.toolbarComponent.model.set("colors", this.model.get("colors")),
                        this.model.get("actions") && this.buttonsCollection.set(this.model.get("actions")),
                        this.model.get("autoSubmit") && this.autoSubmit(),
                        this.model.get("sketchOptions") && this.sketchpadComponent && this.sketchpadComponent.setOptions(this.model.get("sketchOptions")),
                        this.onResize()
                },
                onRender: function () {
                    this.showChildView("prompt", this.promptComponent),
                        this.showChildView("toolbar", this.toolbarComponent),
                        this.showChildView("sketchpad", this.sketchpadComponent),
                        this.showChildView("buttons", this.buttonsComponent)
                },
                onChildviewAttach: function () {
                    this.model.get("size") ? this.sketchpadComponent.model.set("size", this.model.get("size")) : this.sketchpadComponent.model.set("size", {
                        width: 720,
                        height: 900
                    })
                },
                onAttach: function () {
                    this.stickit(),
                        this.update(),
                        this.onResize(),
                        d.a.vibrate()
                },
                onBeforeDestroy: function () {
                    window.removeEventListener("resize", this.onResizeWithContext)
                },
                resetDrawing: function () {
                    this.sketchpadComponent.resetAll(),
                        this.onChildviewSketchpadReady()
                },
                onChildviewSketchpadReady: function () {
                    this.model.get("thicknesses") && -1 === this.options.thicknessIndex && this.onChildviewChooseThickness(),
                        this.model.get("colors") && -1 === this.options.colorIndex && this.model.get("colors") && void 0 !== this.model.get("defaultIndex") && this.chooseColorByIndex(this.model.get("defaultIndex")),
                        this.model.get("sketchOptions") && this.sketchpadComponent && this.sketchpadComponent.setOptions(this.model.get("sketchOptions")),
                        this.model.get("lines") && this.sketchpadComponent.setLines(this.model.get("lines"))
                },
                chooseColorByIndex: function (t) {
                    (t < 0 || t > this.model.get("colors").length) && (t = 0);
                    var e = this.model.get("colors")[t];
                    "object" !== y(e) && (e = {
                        hex: e
                    }),
                        this.chooseColor(e.hex, e)
                },
                onChildviewChooseColor: function (t) {
                    this.chooseColor(t.get("hex"), t.attributes)
                },
                onChildviewChooseThickness: function () {
                    this.options.thicknessIndex = (this.options.thicknessIndex + 1) % this.model.get("thicknesses").length;
                    var t = this.model.get("thicknesses")[this.options.thicknessIndex];
                    this.sketchpadComponent.setThickness(t),
                        this.toolbarComponent && this.toolbarComponent.model.set("thickness", t)
                },
                onChildviewChooseUndo: function () {
                    this.sketchpadComponent.undoLine()
                },
                chooseColor: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.sketchpadComponent.setColor(t),
                        this.sketchpadComponent.setHighlighter(e.highlighter),
                        this.toolbarComponent.model.set("highlighter", e.highlighter),
                        void 0 !== e.thickness && this.sketchpadComponent.setThickness(e.thickness),
                        this.toolbarComponent.model.set("currentColor", t)
                },
                onChildviewSketchpadLine: function (t) {
                    if (this.toolbarComponent && this.toolbarComponent.onLine && this.toolbarComponent.onLine(),
                        this.model.get("live")) {
                        var e = {
                            line: t,
                            highlighter: this.sketchpadComponent.getHighlighter(),
                            action: "line"
                        }
                            , n = this.model.get("objectKey");
                        if (void 0 !== n) {
                            var i = this.sketchpadComponent.getLines();
                            e.objectKey = n,
                                e.val = {
                                    lines: i
                                }
                        }
                        this.triggerMethod("client:message", e)
                    }
                },
                onChildviewSketchpadUndo: function (t) {
                    if (this.model.get("live")) {
                        var e = {
                            action: "undo",
                            linesLength: t
                        }
                            , n = this.model.get("objectKey");
                        void 0 !== n && (e.objectKey = n,
                            e.val = {
                                lines: this.sketchpadComponent.getLines()
                            }),
                            this.triggerMethod("client:message", e)
                    }
                },
                autoSubmit: function () {
                    this.sketchpadComponent.end(),
                        this.sketchpadComponent.getLines().length > 0 && this.onChildviewButtonSubmit()
                },
                onChildviewChildviewButtonChoose: function (t) {
                    this.onChildviewButtonChoose(t)
                },
                onChildviewButtonChoose: function (t) {
                    this.triggerMethod("client:message", {
                        action: "choose",
                        index: t.get("key")
                    })
                },
                onChildviewChildviewButtonSubmit: function () {
                    this.onChildviewButtonSubmit()
                },
                onChildviewButtonSubmit: function () {
                    var t = this.sketchpadComponent.getLines();
                    if (0 === t.length && !this.model.get("allowEmpty"))
                        return d.a.show(Error(this.model.get("strings").drawing_empty)),
                            !1;
                    var e = {
                        lines: t,
                        action: "submit"
                    }
                        , n = this.model.get("objectKey");
                    return n && (e.objectKey = n,
                        e.val = {
                            lines: t,
                            submit: !0
                        }),
                        this.triggerMethod("client:message", e),
                        this.model.get("debug") && d.a.show("custom", {
                            html: "<textarea style='width:100%; height:400px;'>".concat(JSON.stringify(t), "</textarea>")
                        }),
                        !1
                },
                onObjectFilterError: function (t) {
                    d.a.show(Error(this.model.get("strings").ERROR_REJECTED_OBJECT))
                },
                onResize: function () {
                    var t = o()("#sketchpad")
                        , e = o()("#sketchpad canvas")[0];
                    if (e) {
                        var n = 2 * parseInt(o()(".controller-content").css("border-top-width"), 10) + o()(".playerTopBar").innerHeight() + o()("#prompt").innerHeight() + o()("#toolbar").innerHeight() + 2 * parseInt(o()(".canvasContainer").css("border-top-width"), 10) + o()("#buttons").innerHeight() + o()("#post-sketchpad").innerHeight() + 10
                            , i = parseInt(2 * parseInt(o()(".canvasContainer").css("border-left-width")) || 0 + 2 * parseInt(o()(".canvasContainer").css("padding-left")) || 0 + 2 * parseInt(o()(".Draw").css("padding-left")) || 0, 10)
                            , s = e.width
                            , a = e.height
                            , r = Math.min(t.width() - i, 2 * s)
                            , c = Math.max(o()("#controller-container").innerHeight() - n, 250)
                            , l = Math.min(r / s, c / a)
                            , h = s * l
                            , u = a * l;
                        e.style.width = "".concat(h, "px"),
                            e.style.height = "".concat(u, "px"),
                            window.scrollTo(0, 0)
                    }
                }
            })
    },
    488: function (t, e, n) {
        "use strict";
        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
            }
        }
        function o(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
        n.d(e, "a", (function () {
            return s
        }
        ));
        var s = function () {
            function t(e, n, i) {
                !function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    o(this, "options", void 0),
                    o(this, "canvas", void 0),
                    o(this, "canvasCTX", void 0),
                    o(this, "tipCanvas", void 0),
                    o(this, "tipCanvasCTX", void 0),
                    o(this, "lines", []),
                    o(this, "image", void 0),
                    o(this, "startX", null),
                    o(this, "startY", null),
                    o(this, "smoothedMouseX", null),
                    o(this, "smoothedMouseY", null),
                    o(this, "lastMouse", {}),
                    o(this, "lastMouseChangeVector", {}),
                    o(this, "lastSmoothedMouse", {}),
                    o(this, "lastThickness", void 0),
                    o(this, "lastRotation", void 0),
                    o(this, "colorLevel", void 0),
                    this.options = i,
                    this.canvas = document.createElement("canvas"),
                    this.canvas.width = e,
                    this.canvas.height = n,
                    this.canvasCTX = this.canvas.getContext("2d"),
                    this.tipCanvas = document.createElement("canvas"),
                    this.tipCanvas.width = e,
                    this.tipCanvas.height = n,
                    this.tipCanvasCTX = this.tipCanvas.getContext("2d")
            }
            var e, n, s;
            return e = t,
                (n = [{
                    key: "addLine",
                    value: function (t, e, n, i) {
                        this.lines.push({
                            thickness: t,
                            color: e,
                            highlighter: n,
                            points: []
                        }),
                            this.addPoint(i),
                            this.update()
                    }
                }, {
                    key: "updateSize",
                    value: function (t, e) {
                        this.canvas.width = t,
                            this.canvas.height = e
                    }
                }, {
                    key: "addPoint",
                    value: function (t) {
                        var e = {
                            x: parseInt(t.x, 10),
                            y: parseInt(t.y, 10)
                        }
                            , n = this.lines[this.lines.length - 1];
                        if (n && n.points) {
                            if (0 !== n.points.length) {
                                var i = n.points[n.points.length - 1];
                                if (i.x === e.x && i.y === e.y)
                                    return
                            }
                            n.points.push(e),
                                this.update()
                        }
                    }
                }, {
                    key: "setLines",
                    value: function (t) {
                        var e = t.map((function (t) {
                            var e = t.points;
                            return e = "string" == typeof e ? t.points.split("|").map((function (t) {
                                return {
                                    x: parseInt(t.split(",")[0], 10),
                                    y: parseInt(t.split(",")[1], 10)
                                }
                            }
                            )) : e.map((function (t) {
                                return {
                                    x: parseInt(t.x, 10),
                                    y: parseInt(t.y, 10)
                                }
                            }
                            )),
                            {
                                color: t.color,
                                thickness: t.thickness,
                                points: e
                            }
                        }
                        ));
                        this.lines = e,
                            this.update()
                    }
                }, {
                    key: "setImage",
                    value: function (t) {
                        this.image = t,
                            this.update()
                    }
                }, {
                    key: "reset",
                    value: function () {
                        this.lines = [],
                            this.image = null,
                            this.update()
                    }
                }, {
                    key: "getLastLine",
                    value: function () {
                        var t = this.lines[this.lines.length - 1];
                        return {
                            thickness: t.thickness,
                            color: t.color,
                            points: t.points.map((function (t) {
                                return "".concat(t.x, ",").concat(t.y)
                            }
                            )).join("|")
                        }
                    }
                }, {
                    key: "getLines",
                    value: function () {
                        return this.lines.map((function (t) {
                            return {
                                thickness: t.thickness,
                                color: t.color,
                                points: t.points.map((function (t) {
                                    return "".concat(t.x, ",").concat(t.y)
                                }
                                )).join("|")
                            }
                        }
                        ))
                    }
                }, {
                    key: "update",
                    value: function () {
                        var t = this;
                        this.canvasCTX && this.canvasCTX.clearRect(0, 0, this.canvas.width, this.canvas.height),
                            this.tipCanvasCTX && this.tipCanvasCTX.clearRect(0, 0, this.canvas.width, this.canvas.height),
                            this.image && this.canvasCTX.drawImage(this.image, 0, 0),
                            this.lines && this.lines.forEach((function (e) {
                                return t.drawLine(e)
                            }
                            ))
                    }
                }, {
                    key: "startLineInContext",
                    value: function (t, e, n) {
                        var i = t * this.options.minThickness;
                        this.tipCanvasCTX.beginPath(),
                            this.tipCanvasCTX.arc(e, n, i * this.options.dotMultiplier, 0, 2 * Math.PI, !0),
                            this.tipCanvasCTX.closePath(),
                            this.tipCanvasCTX.fill(),
                            this.tipCanvasCTX.stroke(),
                            this.options.cappedEnds && this.canvasCTX.drawImage(this.tipCanvasCTX.canvas, 0, 0),
                            this.lastMouseChangeVector = {
                                x: 0,
                                y: 0
                            },
                            this.startX = e,
                            this.lastMouse.x = e,
                            this.smoothedMouseX = e,
                            this.lastSmoothedMouse.x = e,
                            this.startY = n,
                            this.lastMouse.y = n,
                            this.smoothedMouseY = n,
                            this.lastSmoothedMouse.y = n,
                            this.lastThickness = i,
                            this.lastRotation = void 0,
                            this.colorLevel = 0
                    }
                }, {
                    key: "continueLineInContext",
                    value: function (t, e, n) {
                        var i = e - this.lastMouse.x
                            , o = n - this.lastMouse.y;
                        i * this.lastMouseChangeVector.x + o * this.lastMouseChangeVector.y < 0 && (this.tipCanvasCTX && this.canvasCTX.drawImage(this.tipCanvasCTX.canvas, 0, 0),
                            this.smoothedMouseX = this.lastMouse.x,
                            this.lastSmoothedMouse.x = this.lastMouse.x,
                            this.smoothedMouseY = this.lastMouse.y,
                            this.lastSmoothedMouse.y = this.lastMouse.y,
                            this.lastRotation += Math.PI,
                            this.lastThickness *= this.options.tipTaperFactor),
                            this.smoothedMouseX += this.options.smoothingFactor * (e - this.smoothedMouseX),
                            this.smoothedMouseY += this.options.smoothingFactor * (n - this.smoothedMouseY);
                        var s, a = this.smoothedMouseX - this.lastSmoothedMouse.x, r = this.smoothedMouseY - this.lastSmoothedMouse.y, c = Math.sqrt(a * a + r * r);
                        s = 0 !== c ? Math.PI / 2 + Math.atan2(r, a) : 0;
                        var l = this.options.minThickness * t + this.options.thicknessFactor * c
                            , h = this.lastThickness + this.options.thicknessSmoothingFactor * (l - this.lastThickness);
                        void 0 === this.lastRotation && (this.lastRotation = s);
                        var u = null !== this.lastRotation ? Math.sin(this.lastRotation) : Math.sin(s)
                            , d = null !== this.lastRotation ? Math.cos(this.lastRotation) : Math.sin(s)
                            , p = Math.sin(s)
                            , m = Math.cos(s)
                            , g = this.lastThickness * u
                            , v = this.lastThickness * d
                            , f = h * p
                            , b = h * m
                            , y = .33 * c * u
                            , w = -.33 * c * d
                            , C = this.lastSmoothedMouse.x + v + y
                            , k = this.lastSmoothedMouse.y + g + w
                            , x = this.lastSmoothedMouse.x - v + y
                            , _ = this.lastSmoothedMouse.y - g + w;
                        this.canvasCTX.beginPath(),
                            this.canvasCTX.moveTo(this.lastSmoothedMouse.x + v, this.lastSmoothedMouse.y + g),
                            this.canvasCTX.quadraticCurveTo(C, k, this.smoothedMouseX + b, this.smoothedMouseY + f),
                            this.canvasCTX.lineTo(this.smoothedMouseX - b, this.smoothedMouseY - f),
                            this.canvasCTX.quadraticCurveTo(x, _, this.lastSmoothedMouse.x - v, this.lastSmoothedMouse.y - g),
                            this.canvasCTX.closePath(),
                            this.canvasCTX.fill(),
                            this.canvasCTX.stroke();
                        var S = this.options.tipTaperFactor * h;
                        this.tipCanvasCTX.clearRect(0, 0, this.tipCanvasCTX.canvas.width, this.tipCanvasCTX.canvas.height),
                            this.tipCanvasCTX.beginPath(),
                            this.tipCanvasCTX.arc(e, n, S, 0, 2 * Math.PI, !0),
                            this.tipCanvasCTX.closePath(),
                            this.tipCanvasCTX.fill(),
                            this.tipCanvasCTX.stroke(),
                            this.tipCanvasCTX.beginPath(),
                            this.tipCanvasCTX.moveTo(this.smoothedMouseX + b, this.smoothedMouseY + f),
                            this.tipCanvasCTX.lineTo(e + this.options.tipTaperFactor * b, n + this.options.tipTaperFactor * f),
                            this.tipCanvasCTX.lineTo(e - this.options.tipTaperFactor * b, n - this.options.tipTaperFactor * f),
                            this.tipCanvasCTX.lineTo(this.smoothedMouseX - b, this.smoothedMouseY - f),
                            this.tipCanvasCTX.closePath(),
                            this.tipCanvasCTX.fill(),
                            this.tipCanvasCTX.stroke(),
                            this.lastSmoothedMouse = {
                                x: this.smoothedMouseX,
                                y: this.smoothedMouseY
                            },
                            this.lastRotation = s,
                            this.lastThickness = h,
                            this.lastMouseChangeVector = {
                                x: i,
                                y: o
                            },
                            this.lastMouse = {
                                x: e,
                                y: n
                            }
                    }
                }, {
                    key: "drawLine",
                    value: function (t) {
                        if (t && t.color && t.points && t.thickness && this.canvasCTX && this.tipCanvasCTX) {
                            this.canvasCTX.strokeStyle = t.color,
                                this.canvasCTX.lineWidth = this.options.borderWidth,
                                this.canvasCTX.lineCap = "round",
                                this.canvasCTX.lineJoin = "bevel",
                                this.canvasCTX.fillStyle = t.color,
                                this.canvasCTX.strokeStyle = t.color,
                                this.tipCanvasCTX.lineWidth = this.options.borderWidth,
                                this.tipCanvasCTX.fillStyle = t.color,
                                this.tipCanvasCTX.strokeStyle = t.color;
                            for (var e = 0; e < t.points.length; e++) {
                                var n = t.points[e];
                                0 === e && this.startLineInContext(t.thickness, n.x, n.y),
                                    this.continueLineInContext(t.thickness, n.x, n.y)
                            }
                            this.canvasCTX.drawImage(this.tipCanvas, 0, 0)
                        }
                    }
                }]) && i(e.prototype, n),
                s && i(e, s),
                t
        }()
    },
    507: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return b
        }
        ));
        var i = n(17)
            , o = n.n(i)
            , s = n(22)
            , a = n.n(s)
            , r = n(31)
            , c = n.n(r)
            , l = n(488);
        function h(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++)
                        n[e] = t[e];
                    return n
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                    return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        function u(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function d(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
            }
        }
        function p(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
        var m = {
            color: "#000000",
            thickness: 3,
            highlighter: !1,
            sketchOptions: {
                minThickness: .5,
                thicknessFactor: .1,
                smoothingFactor: .55,
                thicknessSmoothingFactor: .6,
                tipTaperFactor: .7,
                cappedEnds: !1,
                borderWidth: 2,
                dotMultiplier: 2
            }
        }
            , g = function () {
                function t(e) {
                    var n = this
                        , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    u(this, t),
                        p(this, "canvasSelector", void 0),
                        p(this, "canvas", void 0),
                        p(this, "ctx", void 0),
                        p(this, "options", void 0),
                        p(this, "history", void 0),
                        p(this, "layerNames", ["backgroundSketch", "highlighterSketch", "highlighterLineSketch", "markerSketch", "markerLineSketch"]),
                        this.canvasSelector = e,
                        this.canvas = o()(this.canvasSelector)[0],
                        this.ctx = this.canvas.getContext("2d"),
                        this.options = Object.assign(m, i),
                        this.history = [],
                        this.layerNames.forEach((function (t) {
                            var e = new l.a(n.canvas.width, n.canvas.height, n.options.sketchOptions);
                            e.name = t,
                                n[t] = e
                        }
                        ))
                }
                var e, n, i;
                return e = t,
                    (n = [{
                        key: "update",
                        value: function () {
                            var t = this;
                            this.ctx && (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
                                this.layerNames.forEach((function (e) {
                                    t.ctx.drawImage(t[e].canvas, 0, 0)
                                }
                                )))
                        }
                    }, {
                        key: "updateSize",
                        value: function (t) {
                            var e = this;
                            this.layerNames.forEach((function (n) {
                                e[n].updateSize(t.width, t.height)
                            }
                            ))
                        }
                    }, {
                        key: "setThickness",
                        value: function (t) {
                            this.options.thickness = t
                        }
                    }, {
                        key: "setColor",
                        value: function (t) {
                            this.options.color = t
                        }
                    }, {
                        key: "getHighlighter",
                        value: function () {
                            return !!this.options.highlighter
                        }
                    }, {
                        key: "setHighlighter",
                        value: function (t) {
                            this.options.highlighter = t
                        }
                    }, {
                        key: "setOptions",
                        value: function (t) {
                            var e = this
                                , n = Object.assign(m.sketchOptions, t);
                            this.layerNames.forEach((function (t) {
                                e[t].options = n,
                                    e[t].update()
                            }
                            )),
                                this.update()
                        }
                    }, {
                        key: "startLine",
                        value: function (t) {
                            (this.options.highlighter ? this.highlighterLineSketch : this.markerLineSketch).addLine(this.options.thickness, this.options.color, this.options.highlighter, t)
                        }
                    }, {
                        key: "moveLine",
                        value: function (t) {
                            (this.options.highlighter ? this.highlighterLineSketch : this.markerLineSketch).addPoint(t),
                                this.update()
                        }
                    }, {
                        key: "endLine",
                        value: function () {
                            var t = this.options.highlighter ? this.highlighterLineSketch : this.markerLineSketch
                                , e = t.lines.pop();
                            this.options.highlighter ? (this.highlighterSketch.lines.push(e),
                                this.highlighterSketch.update(),
                                this.history.push("highlighterSketch")) : (this.markerSketch.lines.push(e),
                                    this.markerSketch.update(),
                                    this.history.push("markerSketch")),
                                t.reset(),
                                this.update()
                        }
                    }, {
                        key: "undoLine",
                        value: function () {
                            if (this.history.length) {
                                var t = this.history.pop();
                                this[t].lines.pop() && this[t].update()
                            }
                        }
                    }, {
                        key: "isClean",
                        value: function () {
                            return !this.history.length
                        }
                    }, {
                        key: "setLayerLines",
                        value: function (t, e) {
                            -1 !== this.layerNames.indexOf(t) ? (this[t].setLines(e),
                                this.update()) : console.error("invalid layer name", t)
                        }
                    }, {
                        key: "setLayerImage",
                        value: function (t, e) {
                            this[t].setImage(e),
                                this.update()
                        }
                    }, {
                        key: "getLastLine",
                        value: function () {
                            return 0 === this.history.length ? null : this[this.history[this.history.length - 1]].getLastLine()
                        }
                    }, {
                        key: "getLines",
                        value: function () {
                            return [].concat(h(this.highlighterSketch.getLines()), h(this.markerSketch.getLines()))
                        }
                    }, {
                        key: "getDataURL",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                                , e = arguments.length > 1 ? arguments[1] : void 0
                                , n = document.createElement("canvas")
                                , i = this.canvas.width * t
                                , o = this.canvas.height * t;
                            n.width = i,
                                n.height = o;
                            var s = n.getContext("2d");
                            return e && (s.fillStyle = e,
                                s.fillRect(0, 0, i, o)),
                                s.drawImage(this.highlighterSketch.canvas, 0, 0, i, o),
                                s.drawImage(this.markerSketch.canvas, 0, 0, i, o),
                                n.toDataURL()
                        }
                    }, {
                        key: "resetAll",
                        value: function () {
                            var t = this;
                            this.layerNames.forEach((function (e) {
                                t[e].reset()
                            }
                            )),
                                this.update()
                        }
                    }]) && d(e.prototype, n),
                    i && d(e, i),
                    t
            }()
            , v = n(921)
            , f = n.n(v)
            , b = c.a.View.extend({
                className: "Sketchpad canvasContainer",
                template: a.a.template(f.a),
                images: {},
                myViewOptions: ["color", "thickness", "background", "image"],
                sketchpad: null,
                bindings: {
                    ".sketchpad": {
                        attributes: [{
                            name: "width",
                            observe: "size",
                            onGet: function (t) {
                                return t ? t.width : ""
                            }
                        }, {
                            name: "height",
                            observe: "size",
                            onGet: function (t) {
                                return t ? t.height : ""
                            }
                        }, {
                            name: "style",
                            observe: "background",
                            onGet: function (t) {
                                var e = "";
                                return t && (e += "background-color:".concat(t, ";")),
                                    e
                            }
                        }]
                    }
                },
                events: {
                    "contextmenu canvas": "handleContextMenu",
                    "mousedown canvas": "start",
                    "touchstart canvas": "start",
                    "mousemove canvas": "move",
                    "touchmove canvas": "move"
                },
                initialize: function (t) {
                    this.color = "black",
                        this.thicknessScale = -1,
                        this.mergeOptions(t, this.myViewOptions),
                        this.model.on("change:size", this.onUpdateSize, this)
                },
                onUpdateSize: function () {
                    this.sketchpad && this.sketchpad.updateSize(this.model.get("size"))
                },
                onRender: function () {
                    this.stickit(),
                        document.addEventListener("touchend", this.end.bind(this)),
                        document.addEventListener("mouseup", this.end.bind(this))
                },
                onAttach: function () {
                    var t = "sketchpad-".concat(this.model.cid);
                    this.$("#fullLayer").addClass(t),
                        this.sketchpad = new g("#fullLayer.".concat(t)),
                        this.model.get("thicknesses") ? 1 === this.model.get("thicknesses").length && this.sketchpad.setThickness(this.model.get("thicknesses")[0]) : this.sketchpad.setThickness(1),
                        this.triggerMethod("sketchpad:ready")
                },
                getCoords: function (t) {
                    var e = t;
                    e.preventDefault(),
                        -1 !== ["touchstart", "touchmove"].indexOf(e.type) && (e = e.originalEvent.touches[0]);
                    var n = this.sketchpad.canvas
                        , i = o()(n)[0].width / o()(n).width()
                        , s = n.getBoundingClientRect()
                        , a = this.model.get("size")
                        , r = this.sketchpad.options.thickness
                        , c = (e.clientX - s.left) * i;
                    c = Math.min(a.width - r, Math.max(r, c));
                    var l = (e.clientY - s.top) * i;
                    return {
                        x: c,
                        y: l = Math.min(a.height - r, Math.max(r, l))
                    }
                },
                fullImageCoord: function (t) {
                    return "".concat(parseInt(t.x + this.viewportOffset.x, 10), ",").concat(parseInt(t.y + this.viewportOffset.y, 10))
                },
                start: function (t) {
                    var e = this.getCoords(t);
                    this.sketchpad.startLine(e),
                        this.isDrawing = !0
                },
                move: function (t) {
                    if (this.isDrawing) {
                        var e = this.getCoords(t);
                        this.sketchpad.moveLine(e)
                    }
                },
                end: function (t, e) {
                    this.isDrawing && (this.isDrawing = !1,
                        this.sketchpad.endLine(),
                        e || this.triggerMethod("sketchpad:line", this.sketchpad.getLastLine()))
                },
                onBeforeDestroy: function () {
                    null !== this.getOption("mode") && this.end(null, !0)
                },
                leave: function () {
                    "draw" !== this.getOption("mode") && this.tipShape.graphics.clear()
                },
                undoLine: function () {
                    this.sketchpad.undoLine(),
                        this.sketchpad.update(),
                        this.triggerMethod("sketchpad:undo", this.sketchpad.history.length)
                },
                resetAll: function () {
                    this.sketchpad && this.sketchpad.resetAll()
                },
                getColor: function () {
                    return this.color
                },
                setColor: function (t) {
                    this.color = t,
                        this.sketchpad && this.sketchpad.setColor(t)
                },
                getThickness: function () {
                    return this.thicknessScale
                },
                setThickness: function (t) {
                    this.thicknessScale = t,
                        this.sketchpad && this.sketchpad.setThickness(t)
                },
                getHighlighter: function () {
                    return !!this.sketchpad && this.sketchpad.getHighlighter()
                },
                setHighlighter: function (t) {
                    this.sketchpad && this.sketchpad.setHighlighter(t)
                },
                setOptions: function (t) {
                    this.sketchpad && this.sketchpad.setOptions(t)
                },
                getLines: function () {
                    return this.sketchpad ? this.sketchpad.getLines() : []
                },
                getImageData: function () {
                    if (this.sketchpad)
                        return this.sketchpad.getDataURL(1, this.model.get("background"))
                },
                getThumbnailImage: function () {
                    if (this.sketchpad)
                        return this.sketchpad.getDataURL(.33)
                },
                setLines: function (t) {
                    this.sketchpad && this.sketchpad.setLayerLines("backgroundSketch", t)
                },
                setImage: function (t) {
                    var e = this
                        , n = this.getOption("images")[t];
                    if (n) {
                        var i = new Image;
                        i.onload = function (t) {
                            var n = t.target;
                            e.sketchpad.setLayerImage("backgroundSketch", n)
                        }
                            ,
                            i.src = n
                    }
                },
                handleContextMenu: function (t) {
                    t.preventDefault()
                }
            })
    },
    509: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return u
        }
        ));
        var i = n(22)
            , o = n.n(i)
            , s = n(41)
            , a = n.n(s)
            , r = n(31)
            , c = n.n(r)
            , l = (n(192),
                n(920))
            , h = n.n(l)
            , u = c.a.View.extend({
                className: "playerTopBarView",
                template: o.a.template(h.a),
                model: new a.a.Model,
                bindings: {
                    ":el": {
                        observe: ["username", "hidden"],
                        visible: function (t) {
                            return t[0] && !t[1]
                        },
                        attributes: [{
                            name: "class",
                            observe: "classes",
                            onGet: function (t) {
                                return (t || []).join(" ")
                            }
                        }]
                    },
                    "#playername": {
                        observe: "username",
                        attributes: [{
                            name: "style",
                            observe: "textColor",
                            onGet: function (t) {
                                return t ? "color: ".concat(t) : ""
                            }
                        }]
                    },
                    ".playerTopBar": {
                        observe: "username",
                        visible: !0,
                        attributes: [{
                            name: "style",
                            observe: "topBarColor",
                            onGet: function (t) {
                                return t ? "background-color: ".concat(t) : ""
                            }
                        }]
                    },
                    "#playericon": {
                        observe: "avatar",
                        visible: !0,
                        attributes: [{
                            name: "class",
                            observe: "avatar"
                        }]
                    }
                },
                onRender: function () {
                    this.stickit()
                }
            })
    },
    510: function (t, e) {
        t.exports = '<div id="controller" class="state-controller controller-content">\n    <div id="title" class="lobbyTitle">title</div>\n    <div id="vipMenu" class="vipMenu">\n        <div id="choices" class="choicesContainer">choices</div>\n    </div>\n    <div class="characterSelect">\n        <div id="charactersPrompt" class="charactersPrompt">\n            <span id="charactersPromptText" class="charactersPromptText"></span>\n        </div>\n        <div id="characters" class="charactersContainer"></div>\n    </div>\n    <div id="artifactId" class="artifactContainer text">\n        <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">\n            <button id="artifactButton" class="artifactButton"></button>\n        </a>\n    </div>\n</div>'
    },
    511: function (t, e, n) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
            }
        }
        function s(t, e, n) {
            return e && o(t.prototype, e),
                n && o(t, n),
                t
        }
        n.d(e, "e", (function () {
            return m
        }
        )),
            n.d(e, "c", (function () {
                return d
            }
            )),
            n.d(e, "d", (function () {
                return p
            }
            )),
            n.d(e, "a", (function () {
                return y
            }
            )),
            n.d(e, "f", (function () {
                return G
            }
            )),
            n.d(e, "g", (function () {
                return T
            }
            )),
            n.d(e, "j", (function () {
                return D
            }
            )),
            n.d(e, "k", (function () {
                return B
            }
            )),
            n.d(e, "h", (function () {
                return N
            }
            )),
            n.d(e, "i", (function () {
                return P
            }
            )),
            n.d(e, "b", (function () {
                return K
            }
            ));
        var a, r, c = {};
        function l(t, e) {
            c[t] = c[t] || [],
                c[t].push(e)
        }
        function h(t, e) {
            var n;
            !c[t] || (n = c[t].indexOf(e)) < 0 || c[t].splice(n, 1)
        }
        function u(t) {
            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                n[i - 1] = arguments[i];
            c[t] && c[t].map((function (t) {
                return t.apply(void 0, n)
            }
            ))
        }
        function d() {
            return a
        }
        function p() {
            return r
        }
        function m(t) {
            if (!(a = document.getElementById(t) || t || document.querySelector("canvas")))
                throw Error("You must provide a canvas element for the game");
            return (r = a.getContext("2d")).imageSmoothingEnabled = !1,
                u("init"),
            {
                canvas: a,
                context: r
            }
        }
        var g = function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , n = e.spriteSheet
                    , o = e.frames
                    , s = e.frameRate
                    , a = e.loop
                    , r = void 0 === a || a;
                i(this, t),
                    this.spriteSheet = n,
                    this.frames = o,
                    this.frameRate = s,
                    this.loop = r;
                var c = n.frame
                    , l = c.width
                    , h = c.height
                    , u = c.margin
                    , d = void 0 === u ? 0 : u;
                this.width = l,
                    this.height = h,
                    this.margin = d,
                    this._f = 0,
                    this._a = 0
            }
            return s(t, [{
                key: "clone",
                value: function () {
                    return v(this)
                }
            }, {
                key: "reset",
                value: function () {
                    this._f = 0,
                        this._a = 0
                }
            }, {
                key: "update",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 60;
                    if (this.loop || this._f != this.frames.length - 1)
                        for (this._a += t; this._a * this.frameRate >= 1;)
                            this._f = ++this._f % this.frames.length,
                                this._a -= 1 / this.frameRate
                }
            }, {
                key: "render",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                        , e = t.x
                        , n = t.y
                        , i = t.width
                        , o = void 0 === i ? this.width : i
                        , s = t.height
                        , a = void 0 === s ? this.height : s
                        , r = t.context
                        , c = void 0 === r ? p() : r
                        , l = this.frames[this._f] / this.spriteSheet._f | 0
                        , h = this.frames[this._f] % this.spriteSheet._f | 0;
                    c.drawImage(this.spriteSheet.image, h * this.width + (2 * h + 1) * this.margin, l * this.height + (2 * l + 1) * this.margin, this.width, this.height, e, n, o, a)
                }
            }]),
                t
        }();
        function v(t) {
            return new g(t)
        }
        v.prototype = g.prototype,
            v.class = g;
        new WeakMap;
        var f = function () { };
        function b() {
            var t = d();
            p().clearRect(0, 0, t.width, t.height)
        }
        function y() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , e = t.fps
                , n = void 0 === e ? 60 : e
                , i = t.clearCanvas
                , o = void 0 === i || i
                , s = t.update
                , a = t.render;
            if (!s || !a)
                throw Error("You must provide update() and render() functions");
            var r, c, l, h, d, p = 0, m = 1e3 / n, g = 1 / n, v = o ? b : f, y = window.performance || Date;
            function w() {
                if (c = requestAnimationFrame(w),
                    l = y.now(),
                    h = l - r,
                    r = l,
                    !(h > 1e3)) {
                    for (u("tick"),
                        p += h; p >= m;)
                        d.update(g),
                            p -= m;
                    v(),
                        d.render()
                }
            }
            return d = {
                update: s,
                render: a,
                isStopped: !0,
                start: function () {
                    r = y.now(),
                        this.isStopped = !1,
                        requestAnimationFrame(w)
                },
                stop: function () {
                    this.isStopped = !0,
                        cancelAnimationFrame(c)
                },
                _frame: w,
                set _last(t) {
                    r = t
                }
            }
        }
        var w = []
            , C = []
            , k = {}
            , x = []
            , _ = {}
            , S = {
                0: "left",
                1: "middle",
                2: "right"
            }
            , T = {
                x: 0,
                y: 0,
                radius: 5
            };
        function I(t, e) {
            var n = e || T
                , i = t.x
                , o = t.y;
            t.anchor && (i -= t.width * t.anchor.x,
                o -= t.height * t.anchor.y);
            var s = n.x - Math.max(i, Math.min(n.x, i + t.width))
                , a = n.y - Math.max(o, Math.min(n.y, o + t.height));
            return s * s + a * a < n.radius * n.radius
        }
        function O(t) {
            for (var e, n = t || T, i = C.length ? C : w, o = i.length - 1; o >= 0; o--)
                if ((e = i[o]).collidesWithPointer ? e.collidesWithPointer(n) : I(e, n))
                    return e
        }
        function E(t) {
            var e = void 0 !== t.button ? S[t.button] : "left";
            _[e] = !0,
                M(t, "onDown")
        }
        function R(t) {
            var e = void 0 !== t.button ? S[t.button] : "left";
            _[e] = !1,
                M(t, "onUp")
        }
        function L(t) {
            M(t, "onOver")
        }
        function A() {
            _ = {}
        }
        function M(t, e) {
            var n = d();
            if (n) {
                var i, o, s = n.height / n.offsetHeight, a = n.getBoundingClientRect(), r = -1 !== ["touchstart", "touchmove", "touchend"].indexOf(t.type);
                if (r) {
                    T.touches = {};
                    for (var c = 0; c < t.touches.length; c++)
                        T.touches[t.touches[c].identifier] = {
                            id: t.touches[c].identifier,
                            x: (t.touches[c].clientX - a.left) * s,
                            y: (t.touches[c].clientY - a.top) * s,
                            changed: !1
                        };
                    for (c = t.changedTouches.length; c--;) {
                        var l = t.changedTouches[c].identifier;
                        void 0 !== T.touches[l] && (T.touches[l].changed = !0),
                            i = t.changedTouches[c].clientX,
                            o = t.changedTouches[c].clientY,
                            T.x = (i - a.left) * s,
                            T.y = (o - a.top) * s;
                        var h = O({
                            id: l,
                            x: (i - a.left) * s,
                            y: (o - a.top) * s,
                            radius: T.radius
                        });
                        h && h[e] && h[e](t),
                            k[e] && k[e](t, h)
                    }
                } else
                    i = t.clientX,
                        o = t.clientY,
                        T.x = (i - a.left) * s,
                        T.y = (o - a.top) * s;
                if (t.preventDefault(),
                    !r) {
                    var u = O();
                    u && u[e] && u[e](t),
                        k[e] && k[e](t, u)
                }
            }
        }
        function V() {
            C.length = 0,
                w.map((function (t) {
                    C.push(t)
                }
                )),
                w.length = 0
        }
        function G() {
            var t = d();
            t.removeEventListener("mousedown", E),
                t.removeEventListener("touchstart", E),
                t.removeEventListener("mouseup", R),
                t.removeEventListener("touchend", R),
                t.removeEventListener("touchcancel", R),
                t.removeEventListener("blur", A),
                t.removeEventListener("mousemove", L),
                t.removeEventListener("touchmove", L),
                t.addEventListener("mousedown", E),
                t.addEventListener("touchstart", E),
                t.addEventListener("mouseup", R),
                t.addEventListener("touchend", R),
                t.addEventListener("touchcancel", R),
                t.addEventListener("blur", A),
                t.addEventListener("mousemove", L),
                t.addEventListener("touchmove", L),
                h("tick", V),
                l("tick", V)
        }
        function D(t) {
            [].concat(t).map((function (t) {
                t._r || (t._r = t.render,
                    t.render = function () {
                        w.push(this),
                            this._r()
                    }
                    ,
                    x.push(t))
            }
            ))
        }
        function B(t) {
            [].concat(t).map((function (t) {
                t.render = t._r,
                    t._r = 0;
                var e = x.indexOf(t);
                -1 !== e && x.splice(e, 1)
            }
            ))
        }
        function N(t) {
            return !!x.includes(t) && O() === t
        }
        function P(t) {
            return !!_[t]
        }
        var j = function () {
            function t() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = n.create, s = n.maxSize, a = void 0 === s ? 1024 : s;
                if (i(this, t),
                    !o || !(e = o()) || !(e.update && e.init && e.isAlive))
                    throw Error("Must provide create() function which returns an object with init(), update(), and isAlive() functions");
                this._c = o,
                    this.objects = [o()],
                    this.size = 0,
                    this.maxSize = a
            }
            return s(t, [{
                key: "get",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.size === this.objects.length) {
                        if (this.size === this.maxSize)
                            return;
                        for (var e = 0; e < this.size && this.objects.length < this.maxSize; e++)
                            this.objects.push(this._c())
                    }
                    var n = this.objects[this.size];
                    return this.size++,
                        n.init(t),
                        n
                }
            }, {
                key: "getAliveObjects",
                value: function () {
                    return this.objects.slice(0, this.size)
                }
            }, {
                key: "clear",
                value: function () {
                    this.size = this.objects.length = 0,
                        this.objects.push(this._c())
                }
            }, {
                key: "update",
                value: function (t) {
                    for (var e, n = !1, i = this.size; i--;)
                        (e = this.objects[i]).update(t),
                            e.isAlive() || (n = !0,
                                this.size--);
                    n && this.objects.sort((function (t, e) {
                        return e.isAlive() - t.isAlive()
                    }
                    ))
                }
            }, {
                key: "render",
                value: function () {
                    for (var t = this.size; t--;)
                        this.objects[t].render()
                }
            }]),
                t
        }();
        function z(t) {
            return new j(t)
        }
        function U(t, e) {
            var n = []
                , i = e.x + e.width / 2
                , o = e.y + e.height / 2
                , s = t.y < o && t.y + t.height >= e.y
                , a = t.y + t.height >= o && t.y < e.y + e.height;
            return t.x < i && t.x + t.width >= e.x && (s && n.push(0),
                a && n.push(2)),
                t.x + t.width >= i && t.x < e.x + e.width && (s && n.push(1),
                    a && n.push(3)),
                n
        }
        z.prototype = j.prototype,
            z.class = j;
        var X = function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , n = e.maxDepth
                    , o = void 0 === n ? 3 : n
                    , s = e.maxObjects
                    , a = void 0 === s ? 25 : s
                    , r = e.bounds;
                i(this, t),
                    this.maxDepth = o,
                    this.maxObjects = a;
                var c = d();
                this.bounds = r || {
                    x: 0,
                    y: 0,
                    width: c.width,
                    height: c.height
                },
                    this._b = !1,
                    this._d = 0,
                    this._o = [],
                    this._s = [],
                    this._p = null
            }
            return s(t, [{
                key: "clear",
                value: function () {
                    this._s.map((function (t) {
                        t.clear()
                    }
                    )),
                        this._b = !1,
                        this._o.length = 0
                }
            }, {
                key: "get",
                value: function (t) {
                    for (var e, n, i = new Set; this._s.length && this._b;) {
                        for (e = U(t, this.bounds),
                            n = 0; n < e.length; n++)
                            this._s[e[n]].get(t).forEach((function (t) {
                                return i.add(t)
                            }
                            ));
                        return Array.from(i)
                    }
                    return this._o.filter((function (e) {
                        return e !== t
                    }
                    ))
                }
            }, {
                key: "add",
                value: function () {
                    var t, e, n, i;
                    for (e = 0; e < arguments.length; e++)
                        if (n = arguments[e],
                            Array.isArray(n))
                            this.add.apply(this, n);
                        else if (this._b)
                            this._a(n);
                        else if (this._o.push(n),
                            this._o.length > this.maxObjects && this._d < this.maxDepth) {
                            for (this._sp(),
                                t = 0; i = this._o[t]; t++)
                                this._a(i);
                            this._o.length = 0
                        }
                }
            }, {
                key: "_a",
                value: function (t, e, n) {
                    for (e = U(t, this.bounds),
                        n = 0; n < e.length; n++)
                        this._s[e[n]].add(t)
                }
            }, {
                key: "_sp",
                value: function (t, e, n) {
                    if (this._b = !0,
                        !this._s.length)
                        for (t = this.bounds.width / 2 | 0,
                            e = this.bounds.height / 2 | 0,
                            n = 0; n < 4; n++)
                            this._s[n] = H({
                                bounds: {
                                    x: this.bounds.x + (n % 2 == 1 ? t : 0),
                                    y: this.bounds.y + (n >= 2 ? e : 0),
                                    width: t,
                                    height: e
                                },
                                maxDepth: this.maxDepth,
                                maxObjects: this.maxObjects
                            }),
                                this._s[n]._d = this._d + 1,
                                this._s[n]._p = this
                }
            }]),
                t
        }();
        function H(t) {
            return new X(t)
        }
        H.prototype = X.prototype,
            H.class = X;
        var F = function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                    , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                i(this, t),
                    this._x = e,
                    this._y = n
            }
            return s(t, [{
                key: "add",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return Y(this.x + (t.x || 0) * e, this.y + (t.y || 0) * e, this)
                }
            }, {
                key: "clamp",
                value: function (t, e, n, i) {
                    this._c = !0,
                        this._a = t,
                        this._b = e,
                        this._d = n,
                        this._e = i
                }
            }, {
                key: "x",
                get: function () {
                    return this._x
                },
                set: function (t) {
                    this._x = this._c ? Math.min(Math.max(this._a, t), this._d) : t
                }
            }, {
                key: "y",
                get: function () {
                    return this._y
                },
                set: function (t) {
                    this._y = this._c ? Math.min(Math.max(this._b, t), this._e) : t
                }
            }]),
                t
        }();
        function Y(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                , i = new F(t, e);
            return n._c && (i.clamp(n._a, n._b, n._d, n._e),
                i.x = t,
                i.y = e),
                i
        }
        Y.prototype = F.prototype,
            Y.class = F;
        var W = function () {
            function t(e) {
                i(this, t),
                    this.init(e)
            }
            return s(t, [{
                key: "init",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                        , e = t.x
                        , n = t.y
                        , i = t.dx
                        , o = t.dy
                        , s = t.ddx
                        , a = t.ddy
                        , r = t.width
                        , c = t.height
                        , l = t.image;
                    for (var h in this.position = Y(e, n),
                        this.velocity = Y(i, o),
                        this.acceleration = Y(s, a),
                        this._fx = this._fy = 1,
                        this.width = this.height = this.rotation = 0,
                        this.ttl = 1 / 0,
                        this.anchor = {
                            x: 0,
                            y: 0
                        },
                        this.context = p(),
                        t)
                        this[h] = t[h];
                    l && (this.width = void 0 !== r ? r : l.width,
                        this.height = void 0 !== c ? c : l.height),
                        this.sx = 0,
                        this.sy = 0
                }
            }, {
                key: "isAlive",
                value: function () {
                    return this.ttl > 0
                }
            }, {
                key: "collidesWith",
                value: function (t) {
                    if (this.rotation || t.rotation)
                        return null;
                    var e = this.x - this.width * this.anchor.x
                        , n = this.y - this.height * this.anchor.y
                        , i = t.x
                        , o = t.y;
                    return t.anchor && (i -= t.width * t.anchor.x,
                        o -= t.height * t.anchor.y),
                        e < i + t.width && e + this.width > i && n < o + t.height && n + this.height > o
                }
            }, {
                key: "update",
                value: function (t) {
                    this.advance(t)
                }
            }, {
                key: "render",
                value: function () {
                    this.draw()
                }
            }, {
                key: "playAnimation",
                value: function (t) {
                    this.currentAnimation = this.animations[t],
                        this.currentAnimation.loop || this.currentAnimation.reset()
                }
            }, {
                key: "advance",
                value: function (t) {
                    this.velocity = this.velocity.add(this.acceleration, t),
                        this.position = this.position.add(this.velocity, t),
                        this.ttl--,
                        this.currentAnimation && this.currentAnimation.update(t)
                }
            }, {
                key: "draw",
                value: function () {
                    var t = -this.width * this.anchor.x
                        , e = -this.height * this.anchor.y;
                    if (this.context.save(),
                        this.context.translate(this.viewX, this.viewY),
                        this.rotation && this.context.rotate(this.rotation),
                        -1 == this._fx || -1 == this._fy) {
                        var n = this.width / 2 + t
                            , i = this.height / 2 + e;
                        this.context.translate(n, i),
                            this.context.scale(this._fx, this._fy),
                            this.context.translate(-n, -i)
                    }
                    this.image ? this.context.drawImage(this.image, t, e, this.width, this.height) : this.currentAnimation ? this.currentAnimation.render({
                        x: t,
                        y: e,
                        width: this.width,
                        height: this.height,
                        context: this.context
                    }) : (this.context.fillStyle = this.color,
                        this.context.fillRect(t, e, this.width, this.height)),
                        this.context.restore()
                }
            }, {
                key: "x",
                get: function () {
                    return this.position.x
                },
                set: function (t) {
                    this.position.x = t
                }
            }, {
                key: "y",
                get: function () {
                    return this.position.y
                },
                set: function (t) {
                    this.position.y = t
                }
            }, {
                key: "dx",
                get: function () {
                    return this.velocity.x
                },
                set: function (t) {
                    this.velocity.x = t
                }
            }, {
                key: "dy",
                get: function () {
                    return this.velocity.y
                },
                set: function (t) {
                    this.velocity.y = t
                }
            }, {
                key: "ddx",
                get: function () {
                    return this.acceleration.x
                },
                set: function (t) {
                    this.acceleration.x = t
                }
            }, {
                key: "ddy",
                get: function () {
                    return this.acceleration.y
                },
                set: function (t) {
                    this.acceleration.y = t
                }
            }, {
                key: "animations",
                get: function () {
                    return this._a
                },
                set: function (t) {
                    var e, n;
                    for (e in this._a = {},
                        t)
                        this._a[e] = t[e].clone(),
                            n = n || this._a[e];
                    this.currentAnimation = n,
                        this.width = this.width || n.width,
                        this.height = this.height || n.height
                }
            }, {
                key: "viewX",
                get: function () {
                    return this.x - this.sx
                },
                set: function (t) { }
            }, {
                key: "viewY",
                get: function () {
                    return this.y - this.sy
                },
                set: function (t) { }
            }, {
                key: "width",
                get: function () {
                    return this._w
                },
                set: function (t) {
                    var e = t < 0 ? -1 : 1;
                    this._fx = e,
                        this._w = t * e
                }
            }, {
                key: "height",
                get: function () {
                    return this._h
                },
                set: function (t) {
                    var e = t < 0 ? -1 : 1;
                    this._fy = e,
                        this._h = t * e
                }
            }]),
                t
        }();
        function K(t) {
            return new W(t)
        }
        function J(t) {
            if (+t === t)
                return t;
            var e = []
                , n = t.split("..")
                , i = +n[0]
                , o = +n[1]
                , s = i;
            if (i < o)
                for (; s <= o; s++)
                    e.push(s);
            else
                for (; s >= o; s--)
                    e.push(s);
            return e
        }
        K.prototype = W.prototype,
            K.class = W;
        var Q = function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , n = e.image
                    , o = e.frameWidth
                    , s = e.frameHeight
                    , a = e.frameMargin
                    , r = e.animations;
                if (i(this, t),
                    !n)
                    throw Error("You must provide an Image for the SpriteSheet");
                this.animations = {},
                    this.image = n,
                    this.frame = {
                        width: o,
                        height: s,
                        margin: a
                    },
                    this._f = n.width / o | 0,
                    this.createAnimations(r)
            }
            return s(t, [{
                key: "createAnimations",
                value: function (t) {
                    var e, n;
                    for (n in t) {
                        var i = t[n]
                            , o = i.frames
                            , s = i.frameRate
                            , a = i.loop;
                        if (e = [],
                            void 0 === o)
                            throw Error("Animation " + n + " must provide a frames property");
                        [].concat(o).map((function (t) {
                            e = e.concat(J(t))
                        }
                        )),
                            this.animations[n] = v({
                                spriteSheet: this,
                                frames: e,
                                frameRate: s,
                                loop: a
                            })
                    }
                }
            }]),
                t
        }();
        function q(t) {
            return new Q(t)
        }
        q.prototype = Q.prototype,
            q.class = Q
    },
    522: function (t, e) {
        t.exports = '<div class="testing-nav">\n    <button class="previous"><</button>\n    <button class="next">></button>\n    <span></span>\n</div>\n<div id="textDescriptions" class="textDescriptions" role="log" aria-atomic="false" aria-relevant="additions" aria-live="polite"></div>\n<div id="controller-container" class="state-controller controller-page">\n    <div id="playerRegion">playerTopBar</div>\n    <div id="controller-main">\n        <div class="loadingSpinner">\n            <i class="fa fa-spinner fa-spin" style="font-size:48px"></i>\n        </div>\n    </div>\n</div>\n<div id="broadcaster" role="button" aria-label="twitch broadcaster information" style="display:none;" class="twitchBroadcasterIcon"></div>\n'
    },
    555: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return d
        }
        ));
        var i = n(41)
            , o = n.n(i)
            , s = n(31)
            , a = n.n(s)
            , r = n(22)
            , c = n.n(r)
            , l = n(925)
            , h = n.n(l)
            , u = (n(192),
                a.a.View.extend({
                    tagName: "div",
                    className: "colorSwatch",
                    template: c.a.template(h.a),
                    events: {
                        click: "onClick"
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                observe: ["className", "selected"],
                                name: "class",
                                onGet: function (t) {
                                    var e = "";
                                    return t[0] && (e += t[0]),
                                        t[1] && (e += " selected"),
                                        e
                                }
                            }, {
                                name: "data-thickness",
                                observe: "thickness"
                            }, {
                                name: "data-color",
                                observe: "hex"
                            }]
                        },
                        "a.button-color": {
                            attributes: [{
                                name: "data-color",
                                observe: "hex"
                            }, {
                                name: "style",
                                observe: "hex",
                                onGet: function (t) {
                                    return this.getOption("transparent") ? "" : "background-color: ".concat(t, ";")
                                }
                            }]
                        }
                    },
                    onRender: function () {
                        this.stickit()
                    },
                    onClick: function () {
                        this.triggerMethod("palette:select", this.model)
                    }
                }))
            , d = a.a.CollectionView.extend({
                tagName: "div",
                id: "color-buttons",
                className: "colorPalette",
                childView: u,
                collection: new o.a.Collection([]),
                initialize: function () {
                    this.listenTo(this.collection, "sync", this.render)
                },
                childViewOptions: function () {
                    return {
                        transparent: this.getOption("transparent")
                    }
                }
            })
    },
    570: function (t, e) {
        t.exports = "<button type=\"button\" class='button choice-button btn btn-lg'></button>\n<button data-action='censor' class='button censor-button btn btn-lg'></button>"
    },
    572: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return p
        }
        ));
        var i = n(22)
            , o = n.n(i)
            , s = n(41)
            , a = n.n(s)
            , r = n(31)
            , c = n.n(r)
            , l = n(924)
            , h = n.n(l)
            , u = n(555);
        function d(t) {
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            )(t)
        }
        var p = c.a.View.extend({
            tagName: "div",
            className: "picker",
            template: o.a.template(h.a),
            model: new a.a.Model({}),
            regions: {
                colorPalette: "#colorPaletteRegion"
            },
            events: {
                "click #currentColorButton": "onPaletteClick",
                "click #showPaletteButton": "onPaletteClick"
            },
            triggers: {
                "click #thicknessButton": "choose:thickness",
                "click #undoButton": "choose:undo"
            },
            bindings: {
                "#currentColor": {
                    attributes: [{
                        name: "style",
                        observe: "currentColor",
                        onGet: function (t) {
                            return "background-color: ".concat(t)
                        }
                    }]
                },
                ".colorPaletteRegion": {
                    classes: {
                        visible: {
                            observe: "visiblePalette"
                        }
                    }
                },
                ".thickness-circle": {
                    attributes: [{
                        name: "style",
                        observe: "thickness",
                        onGet: function (t) {
                            return "width: ".concat(3 * t, "px; height: ").concat(3 * t, "px;")
                        }
                    }]
                }
            },
            initialize: function () {
                this.colorPaletteComponent = this.colorPaletteComponent || new u.a({
                    collection: new a.a.Collection
                }),
                    this.listenTo(this.model, "change", this.update, this)
            },
            onRender: function () {
                this.showChildView("colorPalette", this.colorPaletteComponent)
            },
            onAttach: function () {
                this.stickit()
            },
            update: function () {
                var t = this.model.get("colors").map((function (t) {
                    return "object" === d(t) ? t : {
                        hex: t
                    }
                }
                ));
                this.colorPaletteComponent.collection.set(t)
            },
            onLine: function () {
                this.showPalette(!1)
            },
            onPaletteClick: function (t) {
                this.showPalette(!0)
            },
            showPalette: function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.model.set("visiblePalette", t)
            },
            onChildviewChildviewPaletteSelect: function (t) {
                this.triggerMethod("choose:color", t),
                    this.showPalette(!1)
            }
        })
    },
    573: function (t, e) {
        t.exports = '<div>\n    <div id="controller" class="state-controller controller-content">\n        <form class="enterSingleTextForm">\n            <fieldset class="enterSingleTextFieldset">\n                <div id="prompt" class="prompt">prompt</div>\n                <div id="input-region" class=""></div>\n                <div id="buttons" class="">buttons</div>\n            </fieldset>\n        </form>\n        <div class="enterSingleTextDone">\n            <span class="doneText"></span>\n        </div>\n    </div>\n</div>\n'
    },
    574: function (t, e) {
        t.exports = '<div id="controller" class="state-controller controller-content">\n    <div id="prompt" class="prompt text"></div>\n    <div class="error text-danger"></div>\n    <div id="choicesRegion"></div>\n    <div id="chosen" class="chosen text"></div>\n    <div class="makeSingleChoiceDone">\n        <span class="doneText"></span>\n    </div>\n</div>'
    },
    575: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return d
        }
        ));
        n(17);
        var i = n(22)
            , o = n.n(i)
            , s = n(31)
            , a = n.n(s)
            , r = n(457)
            , c = n(576);
        function l(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                    n.push.apply(n, i)
            }
            return n
        }
        function h(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
        var u = r.a.extend({
            defaults: {
                size: {
                    width: 300,
                    height: 408
                },
                sizesToSend: null,
                mask: !0,
                strings: {
                    exitButton: "X",
                    switchButton: '<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-switch" fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg">\n            <path\n            d="M 7.96875 2.578125 C 7.144531 2.578125 6.371094 2.8125 5.652344 3.289062 C 4.933594 3.753906 4.367188 4.394531 3.945312 5.210938 C 3.527344 6.03125 3.316406 6.921875 3.316406 7.878906 L 3.316406 8.058594 L 3.324219 8.242188 L 1.917969 8.347656 L 1.90625 7.878906 C 1.882812 7.273438 1.945312 6.683594 2.085938 6.113281 C 2.226562 5.542969 2.433594 4.992188 2.703125 4.457031 C 3.242188 3.378906 3.972656 2.527344 4.898438 1.898438 C 5.832031 1.273438 6.851562 0.960938 7.957031 0.960938 C 8.984375 0.960938 9.949219 1.242188 10.851562 1.808594 L 12.203125 0.15625 L 12.558594 4.71875 L 8.328125 4.882812 L 9.847656 3.023438 C 9.546875 2.875 9.238281 2.761719 8.925781 2.6875 C 8.617188 2.613281 8.296875 2.578125 7.96875 2.578125 Z M 12.632812 7.558594 L 14.03125 7.453125 L 14.039062 7.6875 L 14.039062 7.921875 C 14.039062 9.160156 13.761719 10.316406 13.210938 11.394531 C 12.664062 12.476562 11.929688 13.320312 11.007812 13.929688 C 10.089844 14.53125 9.082031 14.832031 7.980469 14.832031 C 6.992188 14.832031 6.035156 14.554688 5.105469 13.992188 L 3.746094 15.644531 L 3.394531 11.074219 L 7.621094 10.917969 L 6.101562 12.777344 C 6.402344 12.925781 6.710938 13.039062 7.027344 13.113281 C 7.339844 13.1875 7.65625 13.222656 7.980469 13.222656 C 8.835938 13.222656 9.613281 12.988281 10.316406 12.511719 C 11.039062 12.035156 11.601562 11.378906 12.007812 10.554688 C 12.433594 9.726562 12.644531 8.839844 12.644531 7.898438 L 12.644531 7.738281 Z M 12.632812 7.558594 " />\n            </svg>',
                    snapshotButton: '<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-camera" fill="currentColor"\n            xmlns="http://www.w3.org/2000/svg">\n            <path fill-rule="evenodd"\n            d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />\n            <path fill-rule="evenodd"\n            d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />\n            <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />\n            </svg>',
                    cancelButton: "Cancel",
                    confirmButton: "Confirm"
                }
            }
        })
            , d = a.a.View.extend({
                template: o.a.template('<div id="cameraRegion" class="cameraRegion"></div>'),
                className: "Camera",
                model: new u,
                regions: {
                    camera: "#cameraRegion"
                },
                bindings: {
                    "#exitButton": {
                        observe: "strings",
                        onGet: function (t) {
                            return t.exitButton
                        }
                    },
                    "#switchButton": {
                        observe: "strings",
                        updateMethod: "html",
                        onGet: function (t) {
                            return t.switchButton
                        }
                    },
                    "#snapshotButton": {
                        observe: "strings",
                        updateMethod: "html",
                        onGet: function (t) {
                            return t.snapshotButton
                        }
                    },
                    "#cancelButton": {
                        observe: "strings",
                        onGet: function (t) {
                            return t.cancelButton
                        }
                    },
                    "#confirmButton": {
                        observe: "strings",
                        onGet: function (t) {
                            return t.confirmButton
                        }
                    }
                },
                initialize: function (t) {
                    this.cameraView = this.cameraView || new c.a(t),
                        this.listenTo(this.model, "change", this.update, this),
                        this.update()
                },
                update: function () {
                    this.cameraView.model.set("width", this.model.get("size").width),
                        this.cameraView.model.set("height", this.model.get("size").height),
                        this.cameraView.model.set("mask", this.model.get("mask")),
                        this.cameraView.model.set("sizesToSend", this.model.get("sizesToSend"))
                },
                onBeforeDestroy: function () {
                    this.getRegion("camera").empty()
                },
                onRender: function () {
                    this.showChildView("camera", this.cameraView)
                },
                onChildviewCameraSnapshot: function (t) {
                    1 === t.length ? this.triggerMethod("client:message", function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? l(Object(n), !0).forEach((function (e) {
                                h(t, e, n[e])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }
                            ))
                        }
                        return t
                    }({
                        action: "camera"
                    }, t[0])) : this.triggerMethod("client:message", {
                        action: "camera",
                        pictures: t
                    })
                },
                onAttach: function () {
                    this.stickit()
                },
                onChildviewCameraExit: function (t) {
                    this.triggerMethod("client:message", {
                        action: "cancel"
                    })
                }
            })
    },
    576: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return f
        }
        ));
        var i = n(17)
            , o = n.n(i)
            , s = n(22)
            , a = n.n(s)
            , r = n(41)
            , c = n.n(r)
            , l = n(31)
            , h = n.n(l)
            , u = n(83)
            , d = n(511)
            , p = n(930)
            , m = n.n(p);
        function g(t, e, n, i, o, s, a) {
            try {
                var r = t[s](a)
                    , c = r.value
            } catch (t) {
                return void n(t)
            }
            r.done ? e(c) : Promise.resolve(c).then(i, o)
        }
        var v = {
            type: "camera",
            width: 300,
            height: 408,
            offsetX: 0,
            offsetY: 0,
            transmitting: !1,
            previewImage: null,
            mirror: !0,
            mask: !0,
            update: function (t) {
                if (this.video || (this.video = document.getElementById("cameraVideo")),
                    this.image || (this.image = document.getElementById("Mask")),
                    this.video && this.image) {
                    var e = this.video.videoWidth
                        , n = this.video.videoHeight
                        , i = Object(d.c)().width
                        , o = Object(d.c)().height
                        , s = Math.max(i / e, o / n);
                    this.width = i,
                        this.height = o,
                        this.finalWidth = e * s,
                        this.finalHeight = n * s,
                        this.offsetX = .5 * (i - this.finalWidth),
                        this.offsetY = .5 * (o - this.finalHeight),
                        this.dy = this.transmitting ? Math.min(-100, this.dy) : 0,
                        this.ddy = this.transmitting ? -1200 : 0,
                        this.transmitting || (this.y = 0),
                        this.advance(t)
                }
            },
            render: function (t) {
                if (this.video) {
                    var e = Object(d.d)();
                    e.save(),
                        e.translate(this.x, this.y),
                        this.preview ? e.drawImage(this.preview, 0, 0) : this.mirror ? (e.scale(-1, 1),
                            e.drawImage(this.video, this.offsetX - Object(d.c)().width, this.offsetY, this.finalWidth, this.finalHeight)) : e.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight),
                        e.restore(),
                        !this.preview && this.mask && this.image && (e.scale(1, 1),
                            e.drawImage(this.image, this.x, this.y, Object(d.c)().width, Object(d.c)().height))
                }
            }
        }
            , f = h.a.View.extend({
                template: a.a.template(m.a),
                className: "CameraUser",
                model: new c.a.Model({
                    image: null,
                    width: 300,
                    height: 408,
                    transmitting: !1,
                    access: !1,
                    showSwitchButton: !1
                }),
                sprites: [],
                bindings: {
                    ".pre": {
                        classes: {
                            visible: {
                                observe: "image",
                                onGet: function (t) {
                                    return !t
                                }
                            }
                        }
                    },
                    ".post": {
                        classes: {
                            visible: {
                                observe: "image",
                                onGet: function (t) {
                                    return t
                                }
                            }
                        }
                    }
                },
                events: {
                    "click #switchButton": "switchClicked",
                    "click #snapshotButton": "snapshotClicked",
                    "click #confirmButton": "confirmClicked",
                    "click #cancelButton": "cancelClicked",
                    "click #exitButton": "exitClicked"
                },
                initialize: function (t) {
                    this.listenTo(this.model, "change", this.update, this),
                        this.onResizeWithContext = this.onResize.bind(this),
                        window.addEventListener("resize", this.onResizeWithContext),
                        this.update()
                },
                update: function () {
                    var t = this;
                    this.cameraSprite && (this.model.get("image") ? (this.previewImage = this.previewImage || new Image,
                        this.previewImage.onload = function () {
                            t.cameraSprite.preview = t.previewImage
                        }
                        ,
                        this.previewImage.src = this.model.get("image")) : this.cameraSprite.preview = null,
                        this.cameraSprite.transmitting = this.model.get("transmitting"),
                        this.cameraSprite.width = this.model.get("width"),
                        this.cameraSprite.height = this.model.get("height"),
                        this.cameraSprite.mask = this.model.get("mask"),
                        this.$("#cameraCanvas").width("".concat(this.model.get("width"), "px")),
                        this.$("#cameraCanvas").height("".concat(this.model.get("height"), "px")),
                        this.onResize())
                },
                onRender: function () {
                    this.stickit()
                },
                onAttach: function () {
                    var t = this;
                    Object(d.e)("cameraCanvas"),
                        t.sprites = [],
                        t.gameLoop = Object(d.a)({
                            fps: 60,
                            update: function (e) {
                                t.sprites.forEach((function (t) {
                                    return t.update(e)
                                }
                                )),
                                    t.sprites = t.sprites.filter((function (t) {
                                        return t.isAlive()
                                    }
                                    ))
                            },
                            render: function (e) {
                                t.sprites.forEach((function (t) {
                                    return t.render(e)
                                }
                                ))
                            }
                        });
                    for (var e = 0; e < t.sprites.length; e++)
                        t.sprites[e].ttl = 0;
                    this.cameraSprite = Object(d.b)(v),
                        this.cameraSprite.width = this.model.get("width"),
                        this.cameraSprite.height = this.model.get("height"),
                        this.cameraSprite.mask = this.model.get("mask"),
                        t.sprites.push(this.cameraSprite),
                        t.gameLoop.start(),
                        this.facingMode = "user",
                        this.startCamera(),
                        this.onResize()
                },
                startCamera: function () {
                    var t, e = this;
                    return (t = regeneratorRuntime.mark((function t() {
                        var n, i, o, s, a;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (e.canvas = document.getElementById("cameraCanvas"),
                                            e.image = document.getElementById("cameraImage"),
                                            e.video = document.getElementById("cameraVideo"),
                                            n = e.altOption || "drawing",
                                            !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                                            t.next = 27;
                                            break
                                        }
                                        return i = {
                                            facingMode: e.facingMode,
                                            width: 1280
                                        },
                                            o = {
                                                video: i,
                                                audio: !1
                                            },
                                            t.prev = 7,
                                            t.next = 10,
                                            navigator.mediaDevices.getUserMedia(o);
                                    case 10:
                                        return s = t.sent,
                                            t.next = 13,
                                            navigator.mediaDevices.enumerateDevices();
                                    case 13:
                                        return a = t.sent,
                                            e.currentStream = s,
                                            e.video.srcObject = s,
                                            t.next = 18,
                                            e.video.play();
                                    case 18:
                                        e.gotDevices(a),
                                            t.next = 25;
                                        break;
                                    case 21:
                                        t.prev = 21,
                                            t.t0 = t.catch(7),
                                            console.error(t.t0),
                                            u.a.show("alert", {
                                                titleText: "Unable to Access Camera",
                                                text: "Looks like we don't have access to your device's camera. You can refresh and try again, or choose the ".concat(n, " option instead."),
                                                onClose: function () {
                                                    e.cameraAccessDenied()
                                                }
                                            });
                                    case 25:
                                        t.next = 28;
                                        break;
                                    case 27:
                                        u.a.show("alert", {
                                            titleText: "No Camera Access",
                                            text: "It looks like camera access isn't available from this browser. Try the ".concat(n, " option instead."),
                                            onClose: function () {
                                                e.cameraAccessDenied()
                                            }
                                        });
                                    case 28:
                                    case "end":
                                        return t.stop()
                                }
                        }
                        ), t, null, [[7, 21]])
                    }
                    )),
                        function () {
                            var e = this
                                , n = arguments;
                            return new Promise((function (i, o) {
                                var s = t.apply(e, n);
                                function a(t) {
                                    g(s, i, o, a, r, "next", t)
                                }
                                function r(t) {
                                    g(s, i, o, a, r, "throw", t)
                                }
                                a(void 0)
                            }
                            ))
                        }
                    )()
                },
                gotDevices: function (t) {
                    var e = 0;
                    t.forEach((function (t) {
                        "videoinput" === t.kind && (e += 1)
                    }
                    )),
                        this.model.set("showSwitchButton", e > 1)
                },
                stopMediaTracks: function () {
                    this.currentStream.getTracks().forEach((function (t) {
                        t.stop()
                    }
                    )),
                        this.video.srcObject = null,
                        this.model.unset("image")
                },
                onBeforeDestroy: function () {
                    window.removeEventListener("resize", this.onResizeWithContext);
                    for (var t = 0; t < this.sprites.length; t++)
                        this.sprites[t].ttl = 0;
                    this.gameLoop.update(1 / 60),
                        this.gameLoop.stop(),
                        this.currentStream && this.stopMediaTracks();
                    var e = document.getElementsByClassName("pt-page");
                    e.length && (e[0].style.display = "table",
                        e[0].style.display = "block")
                },
                switchClicked: function (t) {
                    this.currentStream && this.stopMediaTracks(),
                        this.facingMode = "user" === this.facingMode ? "environment" : "user",
                        this.cameraSprite.mirror = "user" === this.facingMode,
                        this.startCamera()
                },
                snapshotClicked: function (t) {
                    var e = this.canvas.toDataURL();
                    this.model.set("image", e),
                        this.model.set("transmitting", !1)
                },
                confirmClicked: function (t) {
                    var e = this
                        , n = this.model.get("sizesToSend") || [{
                            width: this.model.get("width"),
                            height: this.model.get("height")
                        }]
                        , i = [];
                    n.forEach((function (t) {
                        if (console.log("size", JSON.stringify(t)),
                            t.width && t.height) {
                            var n = n || document.createElement("canvas");
                            n.width = t.width,
                                n.height = t.height;
                            var o = n.getContext("2d");
                            e.previewImage && o.drawImage(e.previewImage, 0, 0, n.width, n.height),
                                e.model.set("transmitting", !0);
                            var s = n.toDataURL().split(",")[1];
                            i.push({
                                size: t,
                                picture: s
                            })
                        }
                    }
                    )),
                        this.triggerMethod("camera:snapshot", i)
                },
                cancelClicked: function (t) {
                    this.model.unset("image")
                },
                exitClicked: function (t) {
                    this.triggerMethod("camera:exit")
                },
                cameraAccessDenied: function () {
                    this.model.set("failed", !0),
                        this.triggerMethod("camera:exit")
                },
                onResize: function () {
                    var t = this.model.get("width")
                        , e = this.model.get("height");
                    if (t && e) {
                        var n = document.getElementById("cameraCanvas")
                            , i = o()(".canvasContainer");
                        if (n && i) {
                            var s = i.width()
                                , a = Math.max(o()(window).innerHeight(), 250)
                                , r = Math.min(s / t, a / e)
                                , c = t * r
                                , l = e * r;
                            n.style.width = "".concat(c, "px"),
                                n.style.height = "".concat(l, "px"),
                                n.width = c,
                                n.height = l
                        }
                    }
                }
            })
    },
    577: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return S
        }
        ));
        var i = n(17)
            , o = n.n(i)
            , s = n(83)
            , a = n(41)
            , r = n.n(a)
            , c = n(467)
            , l = n(479)
            , h = n(31)
            , u = n.n(h)
            , d = n(457)
            , p = n(42)
            , m = n.n(p)
            , g = n(468)
            , v = n(47)
            , f = n(22)
            , b = n.n(f)
            , y = n(191)
            , w = n(932)
            , C = n.n(w);
        function k(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                    n.push.apply(n, i)
            }
            return n
        }
        function x(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
        var _ = d.a.extend({
            defaults: {
                name: "",
                text: "",
                noActionsText: "",
                prompts: [],
                episodes: [],
                index: 0,
                validActions: [],
                maxTitleLength: 20,
                maxContentLength: 45,
                state: "UGC",
                controllerVisibility: !0,
                screenVisibility: !0,
                episodeTitle: "",
                strings: {
                    tos_warning: "By sharing content, you agree to our Terms of service",
                    tos_warning_agree: "agree and share",
                    tos_warning_back: "back to menu",
                    create_new_episode: "create a new episode",
                    create_new_name_prompt: "first things first, enter a name for the episode that will contain all your prompts and hit create.",
                    create_new_button: "create",
                    button_back_to_episodes: "back to episodes",
                    button_back_to_menu: "back to menu",
                    previous_episodes: "previous episodes:",
                    toggle_prompts_prompt: "tap to show/hide prompts",
                    button_close: "close",
                    button_done: "done",
                    button_add: "add prompt",
                    input_placeholder: "enter a prompt",
                    label_hidden: "hidden",
                    button_edit: "edit",
                    button_save: "save",
                    button_publish: "publish",
                    button_play: "play",
                    button_delete: "delete",
                    delete_warning: "Are you sure you want to delete this episode?",
                    delete_warning_confirm: "Yes",
                    delete_warning_cancel: "No"
                }
            }
        })
            , S = u.a.View.extend({
                className: "UGC scrollable",
                template: b.a.template(C.a),
                model: new _,
                regions: {
                    prompt: "#prompt",
                    episodes: "#episodesRegion",
                    input: "#inputRegion",
                    titleInput: "#titleInputRegion",
                    prompts: "#promptsRegion"
                },
                events: {
                    "click #ugc-new-button": "onNewButtonClicked",
                    "click #ugc-toggle-visibility-button-controller": "onToggleVisibilityController",
                    "click #ugc-toggle-visibility-button-screen": "onToggleVisibilityScreen",
                    "click .action-button": "onActionButtonClicked"
                },
                bindings: {
                    ".ugc-text": {
                        observe: "text",
                        visible: !0,
                        updateView: !0
                    },
                    ".ugc-action-add": {
                        observe: "validActions",
                        visible: function (t) {
                            return t && -1 !== t.indexOf("add")
                        }
                    },
                    ".ugc-action-close": {
                        observe: "validActions",
                        visible: function (t) {
                            return t && -1 !== t.indexOf("close")
                        }
                    },
                    ".ugc-action-exit": {
                        observe: "validActions",
                        visible: function (t) {
                            return t && -1 !== t.indexOf("exit")
                        }
                    },
                    ".ugc-action-load": {
                        observe: "validActions",
                        visible: function (t) {
                            return t && -1 !== t.indexOf("load")
                        }
                    },
                    ".ugc-action-new": {
                        observe: "validActions",
                        visible: function (t) {
                            return t && -1 !== t.indexOf("new")
                        }
                    },
                    ".ugc-action-play": {
                        observe: "validActions",
                        visible: function (t) {
                            return t && -1 !== t.indexOf("play")
                        }
                    },
                    ".ugc-action-remove": {
                        observe: "validActions",
                        visible: function (t) {
                            return t && -1 !== t.indexOf("remove")
                        }
                    },
                    ".ugc-action-remove-content": {
                        observe: "validActions",
                        visible: function (t) {
                            return t && -1 !== t.indexOf("remove-content")
                        }
                    },
                    ".ugc-action-done": {
                        observe: "validActions",
                        visible: function (t) {
                            return t && -1 !== t.indexOf("done")
                        }
                    },
                    ".ugc-action-submit": {
                        observe: "validActions",
                        visible: function (t) {
                            return t && -1 !== t.indexOf("submit")
                        }
                    },
                    ".ugc-action-title": {
                        observe: "validActions",
                        visible: function (t) {
                            return t && -1 !== t.indexOf("title")
                        }
                    },
                    ".ugc-action-toggle-visibility": {
                        observe: "validActions",
                        visible: function (t) {
                            return t && -1 !== t.indexOf("toggle-visibility")
                        }
                    },
                    ".ugc-action-unlock": {
                        observe: "validActions",
                        visible: function (t) {
                            return t && -1 !== t.indexOf("unlock")
                        }
                    },
                    ".ugc-action-episodes": {
                        observe: "validActions",
                        visible: function (t) {
                            return t && -1 !== t.indexOf("episodes")
                        }
                    },
                    "#ugc-no-actions": {
                        observe: "validActions",
                        visible: function (t) {
                            return !t || 0 === t.length
                        }
                    },
                    "#ugc-no-actions-text": {
                        observe: "noActionsText"
                    },
                    "#ugc-toggle-visibility-button-controller": {
                        classes: {
                            on: "controllerVisibility"
                        }
                    },
                    "#ugc-toggle-visibility-button-screen": {
                        classes: {
                            on: "screenVisibility"
                        }
                    },
                    ".ugc-episode-name": "episodeTitle",
                    ".create_new_episode": {
                        observe: "strings",
                        onGet: function (t) {
                            return t.create_new_episode || "create_new_episode"
                        }
                    },
                    ".previous_episodes": {
                        observe: "strings",
                        onGet: function (t) {
                            return t.previous_episodes || "previous_episodes"
                        }
                    },
                    ".toggle_prompts_prompt": {
                        observe: "strings",
                        onGet: function (t) {
                            return t.toggle_prompts_prompt || "toggle_prompts_prompt"
                        }
                    },
                    ".create_new_name_prompt": {
                        observe: "strings",
                        onGet: function (t) {
                            return t.create_new_name_prompt || "create_new_name_prompt"
                        }
                    },
                    ".button_close": {
                        observe: "strings",
                        onGet: function (t) {
                            return t.button_close || "button_close"
                        }
                    },
                    ".button_edit": {
                        observe: "strings",
                        onGet: function (t) {
                            return t.button_edit || "button_edit"
                        }
                    },
                    ".button_done": {
                        observe: "strings",
                        onGet: function (t) {
                            return t.button_done || "button_done"
                        }
                    },
                    ".button_publish": {
                        observe: "strings",
                        onGet: function (t) {
                            return t.button_publish || "button_publish"
                        }
                    },
                    ".button_play": {
                        observe: "strings",
                        onGet: function (t) {
                            return t.button_play || "button_play"
                        }
                    },
                    ".button_delete": {
                        observe: "strings",
                        onGet: function (t) {
                            return t.button_delete || "button_delete"
                        }
                    },
                    ".button_back_to_episodes": {
                        observe: "strings",
                        onGet: function (t) {
                            return t.button_back_to_episodes || "button_back_to_episodes"
                        }
                    },
                    ".button_back_to_menu": {
                        observe: "strings",
                        onGet: function (t) {
                            return t.button_back_to_menu || "button_back_to_menu"
                        }
                    },
                    "#promptsCount": {
                        observe: ["prompts", "strings", "count", "maxCount"],
                        onGet: function (t) {
                            var e = this.model.get("count")
                                , n = this.model.get("maxCount")
                                , i = this.model.get("prompts") || []
                                , o = this.model.get("strings").label_hidden || "hidden"
                                , s = i.length
                                , a = "".concat(e, "/").concat(n);
                            return s < e && (a += " (".concat(e - s, " ").concat(o, ")")),
                                a
                        }
                    }
                },
                initialize: function (t) {
                    this.promptComponent = this.promptComponent || new g.a({
                        model: new r.a.Model
                    }),
                        this.episodesList = this.episodesList || new c.a({
                            action: "load",
                            collection: new r.a.Collection
                        }),
                        this.inputComponent = this.inputComponent || new l.a({
                            model: new r.a.Model({
                                inlineSubmit: !0,
                                inlineSubmitText: "",
                                className: "addPrompt",
                                counter: !0
                            })
                        }),
                        this.titleInputComponent = this.titleInputComponent || new l.a({
                            model: new r.a.Model({
                                inlineSubmit: !0,
                                counter: !0
                            })
                        }),
                        this.promptsList = this.promptsList || new c.a({
                            action: "remove",
                            collection: new r.a.Collection
                        }),
                        this.selected = [],
                        this.listenTo(this.model, "change", this.update, this)
                },
                onRender: function () {
                    this.showChildView("prompt", this.promptComponent),
                        this.showChildView("episodes", this.episodesList),
                        this.showChildView("input", this.inputComponent),
                        this.showChildView("titleInput", this.titleInputComponent),
                        this.showChildView("prompts", this.promptsList)
                },
                onAttach: function () {
                    this.stickit(),
                        this.update(),
                        s.a.vibrate()
                },
                update: function () {
                    var t = 0 === this.model.get("validActions").length ? this.model.get("noActionsText") : this.model.get("text");
                    this.promptComponent.model.set("text", t);
                    var e = this.model.get("episodes").map((function (t, e) {
                        var n = v.a.htmlUnescape(t.metadata.title)
                            , i = v.a.safeText(n);
                        return i += null !== t.remoteContentId ? "<br><div class='episodeId'>".concat(t.formattedRemoteContentId, "</div>") : "",
                        {
                            key: t.remoteContentId || t.localContentId,
                            html: i
                        }
                    }
                    ));
                    this.episodesList.collection.set(e),
                        this.inputComponent.model.set("maxLength", this.model.get("maxContentLength")),
                        this.titleInputComponent.model.set("maxLength", this.model.get("maxTitleLength")),
                        this.titleInputComponent.model.set("inlineSubmitText", this.model.get("strings").create_new_button),
                        this.promptsList.collection.set(this.model.get("prompts").map((function (t, e) {
                            var n = b.a.extend({}, t);
                            n.text = v.a.htmlUnescape(t.text);
                            var i = t.author !== y.app.client.userId ? "other" : "self";
                            return t.className && (i += " ".concat(t.className)),
                                function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {};
                                        e % 2 ? k(Object(n), !0).forEach((function (e) {
                                            x(t, e, n[e])
                                        }
                                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function (e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                        }
                                        ))
                                    }
                                    return t
                                }({}, n, {
                                    className: i
                                })
                        }
                        )))
                },
                onNewButtonClicked: function () {
                    this.triggerMethod("client:message", {
                        action: "new"
                    })
                },
                onChildviewInputSubmit: function () {
                    var t, e;
                    -1 !== this.model.get("validActions").indexOf("add") ? (t = "add",
                        e = this.inputComponent.getSanitizedValue(),
                        this.inputComponent.clearInput()) : -1 !== this.model.get("validActions").indexOf("title") && (t = "title",
                            e = this.titleInputComponent.getValue(),
                            this.titleInputComponent.clearInput()),
                        t && e && this.triggerMethod("client:message", {
                            action: t,
                            text: e
                        })
                },
                onChildviewChildviewButtonLoad: function (t) {
                    this.triggerMethod("client:message", {
                        action: "load",
                        contentId: t.get("key")
                    })
                },
                onChildviewChildviewButtonRemove: function (t) {
                    this.triggerMethod("client:message", {
                        action: "remove",
                        key: t.get("key")
                    })
                },
                onToggleVisibilityController: function () {
                    this.triggerMethod("client:message", {
                        action: "toggle-visibility",
                        target: "controller"
                    })
                },
                onToggleVisibilityScreen: function () {
                    this.triggerMethod("client:message", {
                        action: "toggle-visibility",
                        target: "screen"
                    })
                },
                onActionButtonClicked: function (t) {
                    var e = o()(t.currentTarget).data("action");
                    "submit" !== e ? "remove-content" !== e ? this.triggerMethod("client:message", {
                        action: e
                    }) : this.showConfirmDeleteDialog() : this.showTermsOfService()
                },
                showTermsOfService: function () {
                    var t = this;
                    m.a.fire({
                        customClass: {
                            popup: "ugcModal"
                        },
                        target: this.el,
                        html: "".concat(this.model.get("strings").tos_warning, "<a href='https://www.jackboxgames.com/terms-of-service/' target='_blank' ><br><div class=\"tosLink\">").concat('\n            <svg class="bi bi-link-45deg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n              <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>\n              <path d="M5.712 6.96l.167-.167a1.99 1.99 0 0 1 .896-.518 1.99 1.99 0 0 1 .518-.896l.167-.167A3.004 3.004 0 0 0 6 5.499c-.22.46-.316.963-.288 1.46z"/>\n              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>\n              <path d="M10 9.5a2.99 2.99 0 0 0 .288-1.46l-.167.167a1.99 1.99 0 0 1-.896.518 1.99 1.99 0 0 1-.518.896l-.167.167A3.004 3.004 0 0 0 10 9.501z"/>\n            </svg>\n        ', "</div></a>"),
                        confirmButtonColor: "#000000",
                        showCancelButton: !0,
                        confirmButtonText: this.model.get("strings").tos_warning_agree,
                        cancelButtonText: this.model.get("strings").tos_warning_back
                    }).then((function (e) {
                        e.value && t.triggerMethod("client:message", {
                            action: "submit"
                        })
                    }
                    ))
                },
                showConfirmDeleteDialog: function () {
                    var t = this;
                    m.a.fire({
                        customClass: {
                            popup: "ugcModal"
                        },
                        target: this.el,
                        text: this.model.get("strings").delete_warning,
                        confirmButtonColor: "#000000",
                        showCancelButton: !0,
                        confirmButtonText: this.model.get("strings").delete_warning_confirm,
                        cancelButtonText: this.model.get("strings").delete_warning_cancel
                    }).then((function (e) {
                        e.value && t.triggerMethod("client:message", {
                            action: "remove-content"
                        })
                    }
                    ))
                },
                onChildviewChildviewButtonChoose: function (t) {
                    var e = t.get("text");
                    this.triggerMethod("client:message", {
                        action: "remove",
                        text: e
                    })
                }
            })
    },
    920: function (t, e) {
        t.exports = '<div id="player" class="playerTopBar">\n    <div id="playericon" class="playerIcon"></div>\n    <div id="playername" class="playerName controller-text"></div>\n</div>'
    },
    921: function (t, e) {
        t.exports = "<canvas id=\"fullLayer\" class=\"sketchpad fullLayer\" width='480' height='600' style=''></canvas>"
    },
    922: function (t, e) {
        t.exports = '<div class="text"></div>'
    },
    923: function (t, e) {
        t.exports = '<form>\n    <div class="form-group">\n        <div class="inputGroup">\n            <textarea id="input-text-textarea" rows="1" class="form-control jbg-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>\n            <span class="inlineSubmit">\n                <button type="submit" class="btn btn-default inlineSubmitButton" type="button"><span class="inlineSubmitText">Send</span></button>\n            </span>\n            <span id="helpBlock2" class="help-block errorText"></span>\n            <div class="charCountDisplay"><span class="charRemaining">70</span></div>\n        </div>\n    </div>\n</form>'
    },
    924: function (t, e) {
        t.exports = '<ul class="nav nav-colors">\n    <li class="pull-left button-pad">\n        <button id="undoButton" class="undo button">\n            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAnCAQAAAA4Y6kNAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhCAUULQu6tVG/AAACyElEQVRIx62WO2gVQRSGvzOzsfAVO6NIKlELBUkhCRhsNZ2otYKNFhYS7MRC7AUt1EKwkmATLSx9oIabQnwRfCCCSpQghhDUSF73WOzs7Mze2eRK8g+77Lz+Pf95zK5wVq7rXwyKkEMRmgBs4wC97GYLm+hgjmm+M0aDp4wDYPz6fHf+xHsZxgAZ1l9gOcRdptBkm2KYASxgyHyz7s4oyk0ycBMARxipIQvbCIfB7yuagQaKcstZCpsZaoOuaEN0AdYrDCiVawjIft7+B6GivKMfHJ0T3vCTVznGzH8SKsoMR518G1u5kvZHDjpLLcawGlird9jHIkFmrRwbuME6msjqUcJeLtFEEaFBb1tblHEm+IWwka10+VorsUAfz9sNzyNO0UOnp+mkh9PcZ7Gy7l7uymUo5SUD3g5Tsa2P4Wj1rNkJS1POcoX1lJVssS1yT/Aj2HFxGUp5IEBwILiCq2AHr/yeMTqWtnKOQW+jLaujBd18dDvm2bN8eC5EwrOatNvFhFt/sp2ID1KcNVktJRx3qy+3l0TnKM8aW0NpeIiiDMObtg6G895Om0jyHP00UR5n3GY76uojXyyuXz4J3XTzGQu1hPCMUfrcd6EtlFGvPxfOoDzJECzR9y2wL+4LEo21ogH8zvwHk0B22Y9lamIsxFeafDNuibpLfF+8h4leUFibwjSTfDAtG8p++RRKrbcR5pnghQksxPuUyJPxaJ5UaazhE68L4QIJH1bvS3sSNtFg0lYI4v+b1tAA7n8phU75wk/BYIJwSJIkpm7WCxfVBePrg8h7IUU1PPV5Oa9NjInSOU4gqaQV0etTEAQN85IKdWllrKDOytyFhHlZlUwQKoKCXAqKVI8ASfZj8XWkuWI1QUCqglpnJKGkQFaMm4Qdoez0TIrQKyyEV2u7jG04o6QTPQtfaAunRhlZ9DVR3615aeL1/wCc0hAjJXcubgAAAABJRU5ErkJggg=="/></svg>\n        </button>\n    </li>\n    <li class="pull-left button-pad"> \n        <button id="thicknessButton" class="thickness button">  \n            <div class="thickness-circle"></div>  \n        </button>  \n    </li> \n    <li class="pull-right button-pad">\n        <button id="showPaletteButton" class="showPalette button">\n        </button>\n    </li>\n    <li class="pull-right button-pad">\n        <button aria-label="choose color" id="currentColorButton" class="button currentColorButton">\n            <div id="currentColor" class="currentColor"></div>\n        </button>\n    </li>\n    <li id="color-palette" class="hide">\n    </li>\n</ul>\n<div id="colorPaletteRegion" class="colorPaletteRegion">\n'
    },
    925: function (t, e) {
        t.exports = '<a class="change-color button-color btn"></a>'
    },
    926: function (t, e) {
        t.exports = '<div class="controller-content">\n    <div class="canvas-container">\n        <div id="prompt" class="prompt"></div>\n        <div id="toolbar" class="toolbar"></div>\n        <div id="sketchpad"></div>\n        <div id="buttons" class="buttons"></div>\n        <div id="post-sketchpad" class="post-sketchpad">\n            <div id="submit">\n                <button id=\'submitdrawing\' class="button submitDrawing">Submit</button><br/>\n            </div>\n            <button id=\'censorOptions\' class=\'button\'>Censor Options</button>\n            <div class="footer"></div>\n        </div>\n        </div>\n    </div>\n</div>\n'
    },
    927: function (t, e) {
        t.exports = '<div id="image" class="logo logo-image"></div>\n<div id="message" class="message"><h2 class="messageText"></h2></div>\n<div id="action" class="action"></div>\n<div id="artifactId" class="artifactContainer text">\n    <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">\n        <button id="artifactButton" class="artifactButton"></button>\n    </a>\n</div>\n'
    },
    928: function (t, e) {
        t.exports = '<div id="controller" class="state-controller controller-content">\n    <div id="prompt" class="prompt text"></div>\n    <div class="error text-danger"></div>\n    <div id="choicesRegion"></div>\n    <div id="chosen" class="chosen text"></div>\n    <div class="makeSingleChoiceDone">\n        <span class="doneText"></span>\n    </div>\n</div>'
    },
    930: function (t, e, n) {
        t.exports = '<div class="canvasContainer">\n    <video id="cameraVideo" class="cameraVideo" autoplay playsinline class=""></video>\n    <canvas id=\'cameraCanvas\' class="cameraCanvas resizableCanvas" width="300px" height="408px" class=""></canvas>\n    <img id="cameraImage" class="cameraImage visuallyhidden" />\n</div>\n<div class="cameraControls">\n    <button id="exitButton" class="button exitButton"></button>\n    <div class="buttons pre">\n        <button id="switchButton" class="button switchButton"></button>\n        <button id="snapshotButton" class="button snapshotButton"></button>\n    </div>\n    <div class="buttons post">\n        <button id="cancelButton" class="button cancelButton"></button>\n        <button id="confirmButton" class="button confirmButton"></button>\n    </div>\n</div>\n<div style="display:none;">\n    <img id="Mask" src=\'' + n(931) + "' />\n</div>"
    },
    931: function (t, e, n) {
        t.exports = n.p + "images/97612fef173ed2728b58f200747918a8.png"
    },
    932: function (t, e) {
        t.exports = '<div id="controller" class="state-controller controller-content">\n    <div class="ugc-action-toggle-visibility">\n        <span class="text toggle_prompts_prompt">toggle_prompts_prompt</span><br/>\n        <button id="ugc-toggle-visibility-button-controller" class="ugc-toggle-visibility-button ugc-toggle-visibility-button-controller" data-target="controller"></button>\n        <button id="ugc-toggle-visibility-button-screen" class="ugc-toggle-visibility-button  ugc-toggle-visibility-button-screen" data-target="screen"></button>\n    </div>\n    <div class="ugc-actions-play">\n        <div class="ugc-episode-name"></div>\n    </div>\n    <div class="ugc-action-new">\n        <button class="button action-button create_new_episode" type="button" id="ugc-new-button">create_new_episode</button>\n    </div>\n\n    <div class="ugc-action-load">\n        <p class="ugc-option text-box ugc-load previous_episodes">previous_episodes</p>\n        <div id="episodesRegion"></div>\n    </div>\n\n    <div id="prompt" class="prompt ugc-text"></div>\n    <div id="ugc-no-actions">\n        <div id="ugc-no-actions-text"></div>\n    </div>\n\n    <div class="ugc-action-add">\n        <div id="inputRegion"></div>\n    </div>\n\n    <div class="ugc-action-title">\n        <p class="text-box">\n            <span class=\'text create_new_name_prompt\'>create_new_name_prompt</span>\n        </p>\n        <div id="titleInputRegion"></div>\n    </div>\n\n    <div class="ugc-action-close">\n        <button class="button action-button button_close" data-action="close">button_close</button>\n    </div>\n    <div class="ugc-action-unlock">\n        <button class="button action-button button_edit" data-action="unlock">button_edit</button>\n    </div>\n    <div class="ugc-action-done">\n        <button class="button action-button button_done" data-action="done">button_done</button>\n    </div>\n    <div class="ugc-action-submit">\n        <button class="button action-button button_publish" data-action="submit">button_publish</button>\n    </div>\n\n    <div class="ugc-action-play">\n        <button class="button action-button button_play" data-action="play">button_play</button>\n    </div>\n\n    <div class="ugc-action-remove-content">\n        <button class="button action-button button_delete" data-action="remove-content">button_delete</button>\n    </div>\n\n    <div class="ugc-action-exit">\n        <button class="button action-button button_back_to_menu" data-action="exit">button_back_to_menu</button>\n    </div>\n\n    <div class="ugc-action-episodes">\n        <button class="button action-button button_back_to_episodes" data-action="episodes">button_back_to_episodes</button>\n    </div>\n\n    <div class="ugc-action-remove">\n        <div id="promptsCount" class="promptsCount"></div>\n        <div id="promptsRegion"></div>\n    </div>\n</div>'
    },
    933: function (t, e) {
        t.exports = '<svg id="range-picker" class="range-picker" viewBox="-40 -40 80 80">\n    <defs>\n        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">\n            <stop offset="0%" style="stop-color:rgb(0,0,0); stop-opacity:0.5" />\n            <stop offset="60%" style="stop-color:rgb(0,0,0); stop-opacity:0.9" />\n            <stop offset="80%" style="stop-color:rgb(0,0,0); stop-opacity:0.9" />\n            <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:0.7" />\n        </radialGradient>\n        <svg id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 263.67 271.33">\n            <title>astroIcon</title>\n            <path class="cls-1" d="M253.83,108.17H210.89A57.83,57.83,0,0,1,160,138.5H140a57.83,57.83,0,0,1-50.89-30.33H46.17a19.5,19.5,0,0,0-19.5,19.5v11a19.5,19.5,0,0,0,19.5,19.5H70.4a19.5,19.5,0,0,1,19.5,19.5V259.8a17.37,17.37,0,0,0,17.36,17.37H115A17.37,17.37,0,0,0,132.4,259.8V236.53a17.37,17.37,0,0,1,17.37-17.36h0a17.36,17.36,0,0,1,17.36,17.36V259.8a17.37,17.37,0,0,0,17.37,17.37h9a17.37,17.37,0,0,0,17.36-17.37V177.67a19.5,19.5,0,0,1,19.5-19.5h23.49a19.5,19.5,0,0,0,19.5-19.5v-11A19.5,19.5,0,0,0,253.83,108.17Z" transform="translate(-18.17 -14.33)"/>\n            <rect class="cls-1" x="64" y="8.5" width="135.67" height="115.67" rx="57.83" ry="57.83"/>\n        </svg>\n        <svg\n           xmlns:dc="http://purl.org/dc/elements/1.1/"\n           xmlns:cc="http://creativecommons.org/ns#"\n           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n           xmlns:svg="http://www.w3.org/2000/svg"\n           xmlns="http://www.w3.org/2000/svg"\n           height="55"\n           width="40"\n           xml:space="preserve"\n           viewBox="-20 -27.5 40 55"\n           y="0px"\n           x="0px"\n           id="Layer_1"\n           version="1.1"><metadata\n           id="metadata10"><rdf:RDF><cc:Work\n               rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type\n                 rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs\n           id="defs8" />\n        <path\n           style="fill:#ffffff"\n           d="m -20,27.5 20,-55 20,55 -20,-13 z"\n           class="st0"\n           id="aimArrow" />\n        </svg>\n\n    </defs>\n\n    <circle class="background" r="16" cx="0" cy="0" />\n    <circle class="background-gradient" r="32" cx="0" cy="0" fill="url(#grad1)" />\n    <circle class="background-border" r=33 cx=0 cy=0 stroke="black" stroke-width="2" fill="none" />\n    <circle id="health-display" class="health-display" r="33" cx="0" cy="0" />\n    <circle class="circle-deadzone" fill="black" fill-opacity="0.8" r=1 cx=0 cy=0 stroke="white" stroke-width="0.3" stroke-dasharray="3.5 1.52" />\n    \n    <circle class="crosshair-center" r=1 cx=0 cy=0 />\n    <circle class="circle-border-white" r="32" cx="0" cy="0" stroke="#ffffff" stroke-width="0.3" fill="none"/>\n    <line class="line-helper-left" x1="-32" y1="0" x2="0" y2="0" ></line>\n    <line class="line-helper-right" x1="32" y1="0" x2="0" y2="0" ></line>\n    <circle class="locked-in-fade" r="17" cx="0" cy="0" />\n    <line class="locked-in-line" x1="0" y1="0" x2="0" y2="0" display="inline"></line>\n    <use class="aimArrow" xlink:href="#Layer_1" transform="rotate(180)" x="-2" y="-2.5" width="4" height="5"></use>\n    <use class="astro" xlink:href="#Layer_3" transform="translate(-8, -8)" width="16" height="16"></use>\n    <text id="text" class="text" x=0 y=10 text-anchor="middle" font-size=30 stroke="white">H</text>\n</svg>'
    },
    934: function (t, e) {
        t.exports = '<div id="status-bar" class="health text">\n    <div id="weaponBorder" class="weaponBorder">\n        <div id="weaponIcon" class="weaponIcon"></div>\n    </div>\n</div>\n<div id="radial" class="radial"></div>\n<div id="control-panel" class="control-panel">\n    <div class="message text">message</div>\n    <div class="weaponNameContainer text">\n        <div class="weaponIcon small"></div>\n        <span class="weaponName">weapon name</span>\n    </div>\n    <div class="weaponText text">weapon text</div>\n</div>'
    },
    935: function (t, e, n) { }
}]);
//# sourceMappingURL=0.39f110d9883879ff22f2.js.map
