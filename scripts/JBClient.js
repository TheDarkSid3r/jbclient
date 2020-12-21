var uuidv4 = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});
var filterObject = (o) => {
    var e = {};
    Object.entries(o).filter((k) => k[1] != null || k[1] != undefined).forEach((k) => e[k[0]] = k[1]);
    return e;
};
var urlStringify = (o) => Object.entries(filterObject(o)).map((k) => "".concat(encodeURIComponent(k[0]), "=", encodeURIComponent(k[1]))).join("&");
var Reply = class {
    constructor(t) {
        this.pc = t.pc,
            this.re = t.re,
            this.opcode = t.opcode,
            this.result = t.result
    }
};
var Notification = class {
    constructor(t) {
        this.pc = t.pc,
            this.opcode = t.opcode,
            this.result = t.result
    }
};
var ClientWelcome = class {
    constructor(t) {
        this.id = t.id,
            this.name = t.name,
            this.secret = t.secret,
            this.reconnect = t.reconnect,
            this.entities = t.entities,
            this.here = t.here,
            this.profile = t.profile;

        Swal.close();
        $(".wrapper").remove();
        if (!isTwitchAuthenticated) localStorage.setItem("ejc-username", this.name);
        localStorage.setItem("ejc-roomId", t.roomId);
    }
};
var PNCounter = class {
    constructor(t) {
        this.count = t.count,
            this.key = t.key
    }
    toString() {
        return `PNCounter{\n\tcount:${this.count}\n}`
    }
};
var TextEntity = class {
    constructor(t) {
        this.text = t.text,
            this.key = t.key,
            this.version = t.version
    }
    whenReceived(t) {
        t.entities[this.key] = this,
            t.emit("text " + this.key, this)
    }
    toString() {
        return `TextEntity{\n\tkey:${this.key}\n\ttext: ${this.text}\n}`
    }
    toBlob() {
        return JSON.parse(this.text)
    }
};
var TextEcho = class {
    constructor(t) {
        this.message = t.message
    }
    toString() {
        return `TextEcho{message: ${this.message}\n}`
    }
};
var RoomExit = class {
    constructor() { }
    whenReceived(t) {
        t.disconnect()
    }
};
var createError = (e, c) => {
    console.log("Error code", e.code);
    var addAudienceJoinButton = 2015 === e.code && c.audienceEnabled;
    var extra = "";
    swalError("".concat(e.message.slice(0, 1).toUpperCase(), e.message.slice(1), extra), "Error", false, addAudienceJoinButton ? {
        showCancelButton: true,
        cancelButtonText: "Join audience"
    } : {}).then((result) => {
        if (addAudienceJoinButton && result.dismiss === Swal.DismissReason.cancel) {
            c.role = "audience";
            swalLoading("Reconnecting");
            c.connect();
        }
    });
};
var ObjectEntity = class {
    constructor(t) {
        this.key = t.key,
            this.val = t.val,
            this.version = t.version
    }
    whenReceived(t) {
        t.entities[this.key] = this
    }
    toString() {
        return `ObjectEntity{\n\tkey:${this.key}\n\tvalue: ${JSON.stringify(this.val)}\n}`
    }
    toBlob() {
        return this.val
    }
};
var ObjectEcho = class {
    constructor(t) {
        this.message = t.message
    }
    toString() {
        return `JSONEcho{message: ${this.message}}`
    }
};
var JSONEntity = class {
    constructor(t) {
        this.key = t.key,
            this.val = t.val,
            this.version = t.version
    }
    whenReceived(t) {
        t.entities[this.key] = this
    }
    toString() {
        return `JSONEntity{\n\tkey:${this.key}\n\tvalue: ${JSON.stringify(this.text)}\n}`
    }
    toBlob() {
        return this.val
    }
};
var RoomLock = class { };
var Request = class {
    constructor(t) {
        this.seq = t.seq,
            this.opcode = t.opcode,
            this.params = t.params
    }
};
var OK = class {
    constructor() { }
    toString() {
        return "OK"
    }
};
var CountGroup = class {
    constructor(t) {
        this.choices = t.choices,
            this.key = t.key
    }
    toString() {
        return `CountGroup{\n\tchoices: ${this.choices}\n}`
    }
};
var TextRing = class {
    constructor(t) {
        this.key = t.key,
            this.elements = t.elements,
            this.limit = t.limit
    }
    toString() {
        return `TextRing{\n\telements: ${this.elements}\n}`
    }
};
var JBClient = class {
    constructor(roomId, name) {
        var reconnect = localStorage.getItem("ejc-reconnect");
        if (reconnect && localStorage.getItem("ejc-roomId") == roomId.toUpperCase()) {
            var t = reconnect.split(":");
            this.id = t[0];
            this.forceRole = t[1];
            this.secret = t[2];
        }
        this.roomId = roomId;
        this.name = name;
        this.userId = localStorage.getItem("ejc-userId");
        if (!this.userId) {
            this.userId = uuidv4();
            localStorage.setItem("ejc-userId", this.userId);
        }
        this.getRoom();
    }

    async getRoom() {
        var e = "https://ecast.jackboxgames.com/api/v2/rooms/".concat(this.roomId);
        var n = await fetch(e);
        var i = await n.json();
        console.log(i);
        if (i.body && i.body.appTag) {
            var unsupported = [
                { tag: "slingshoot", name: "Zeeple Dome", reasons: ["flinging mechanic"] },
                { tag: "blanky-blank", name: "Blather 'Round", reasons: ["sentence-creating mechanic"] },
                { tag: "monstermingle", name: "Monster Seeking Monster", reasons: ["messaging mechanic"] },
                { tag: "bombinterns", name: "Bomb Corp.", reasons: ["complicated bombs"] },
                { tag: "triviadeath", name: "Trivia Murder Party", reasons: ["drawing", "killing floor assets"] },
                { tag: "triviadeath2", name: "Trivia Murder Party 2", reasons: ["killing room assets"] },
                { tag: "pollposition", name: "Guesspionage", reasons: ["percentage picker"] },
                { tag: "survivetheinternet", name: "Survive The Internet", reasons: ["round-specific controller layouts"] },
                { tag: "patentlystupid", name: "Patently Stupid", reasons: ["drawing", "amazing presentation tool"] },
                { tag: "rolemodels", name: "Role Models", reasons: ["camera", "drawing", "drag-and-drop role selection"] },
                { tag: "jackboxtalks", name: "Talking Points", reasons: ["camera", "drawing", "assistant image chooser", "Free Play presentation creator"] },
                { tag: "pushthebutton", name: "Push The Button", reasons: ["drawing", "game-wide action buttons", "probe screen", "complicated tests"] },
                { tag: "everyday", name: "The Devils and the Details", reasons: ["tasks"] },
                { tag: "drawful", name: "Drawful", reasons: ["drawing"] },
                { tag: "drawful2", name: "Drawful 2", reasons: ["drawing"] },
                { tag: "drawful2international", name: "Drawful International", reasons: ["drawing"] },
                { tag: "awshirt", name: "Tee K.O.", reasons: ["drawing"] },
                { tag: "overdrawn", name: "Civic Doodle", reasons: ["drawing"] },
                { tag: "worldchampions", name: "Champ'd Up", reasons: ["drawing"] }
            ];
            var unsobj = unsupported.find((s) => s.tag == i.body.appTag);
            if (unsobj) {
                return swalError("The following otherwise necessary component(s) are so far unsupported:<br/><br/>".concat(unsobj.reasons.join(", ")), "".concat(unsobj.name, " is not currently supported"), false, {
                    showCancelButton: true,
                    cancelButtonText: "Open Jackbox.TV"
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.cancel) {
                        window.open("https://jackbox.tv/#".concat(i.body.code), "_blank");
                    }
                });
            }
        }
        if (!i.ok) {
            swalError("Room not found");
            throw new Error(`unable to get room: ${i.error}`);
        }
        swalLoading("Joining");
        var o = i.body;
        this.roomId = o.code;
        this.appId = o.appId;
        this.appTag = o.appTag;
        this.audienceEnabled = o.audienceEnabled;
        this.role = this.forceRole || "player";
        this.seq = 0,
            this.pending = {},
            this.entities = {};
        this.connect();
        this.stats = {};
        if (localStorage.getItem("ejc-stats")) this.stats = JSON.parse(localStorage.getItem("ejc-stats"));
    }

    setClockScale() {
        var p = 20;
        var w = this.region.innerWidth() - p * 2;
        var h = this.region.innerHeight() - p * 2;
        var ew = 500;
        var eh = 500;

        var es = w / ew;
        var yr = h / eh;
        var ss = Math.min(es, yr);
        this.clockScale = ss;
    }

    connect() {
        var apiURL = "wss://ecast.jackboxgames.com/api/v2/";
        var params = urlStringify({
            id: this.id,
            role: this.role,
            name: this.name,
            format: "json",
            "user-id": this.userId,
            password: this.password,
            "twitch-token": localStorage.getItem("ejc-twitch-token"),
            secret: this.secret
        });
        return new Promise((resolve, reject) => {
            this.hasDisconnected = false;
            this.forceClose = true;
            var o = !1;
            this.conn = new WebSocket(this.role === "audience" ? apiURL.concat("audience/", this.roomId, "/play?", params) : apiURL.concat("rooms/", this.roomId, "/play?", params), "ecast-v0");
            this.conn.onopen = console.log;
            this.conn.onclose = (e) => o ? e.code == 1006 ? this.connect() : this.disconnect() : this.forceClose ? reject() : this.disconnect();
            this.conn.onerror = console.log;
            this.conn.onmessage = (e) => {
                //console.log("recv <-", JSON.stringify(JSON.parse(e.data), null, 2));
                var r = this.parseResponseMessage(e);
                if (r instanceof Reply) {
                    console.log("Reply:", r);
                    //this.onReply(r);
                } else if (r instanceof Notification) {
                    if (r.result instanceof ClientWelcome) {
                        o = !0,
                            this.id = r.result.id,
                            this.name = r.result.name,
                            this.secret = r.result.secret,
                            this.entities = r.result.entities;
                        var e = this.parseEntities();
                        if (e.room) this.emit("client:entityDidChange", "room", e.room);
                        if (e.player) this.emit("client:entityDidChange", "player", e.player);
                        resolve(r.result);
                    } else {
                        if (!o)
                            return void reject(r.result);
                        this.onNotification(r);
                    }
                }
            };
        });
    }

    disconnect() {
        if (this.hasDisconnected) return;
        this.hasDisconnected = true;
        swalError("You have been disconnected.", "Disconnected", true);
    }

    onNotification(t) {
        "function" == typeof t.result.whenReceived && t.result.whenReceived(this),
            this.emit("notification", t),
            this.emit(t.opcode, t.result)
    }

    emit(...args) {
        if (args.length < 2) return;
        if (args[0].startsWith("client:")) console.log("emit", ...args);
        switch (args[0]) {
            case "json":
            case "object":
                return this.onPlayerJsonOrObject(args[1]);
            case "text":
                return this.onPlayerText(args[1]);
            case "client:entityDidChange":
                return this.displayMessage(args[1], args[2], true);
        }
    }

    handleAction(data) {
        if (!data) return;
        if (this.role == "audience") {
            var pickLikelyOptions = [data.key, data.choice, data.entry, data.val];
            var likelyOption = null;
            for (var x = 0; x < pickLikelyOptions.length; x++) if (pickLikelyOptions[x] != null) {
                likelyOption = pickLikelyOptions[x].toString();
                break;
            }
            this.incrementCountGroupCounter(this.sessionModulePrefix + " Vote", likelyOption);
            this.displayMessage("room", { state: "Logo" });
            return;
        }
        var mail = (d) => {
            $(".choice-group button,.game-input").attr({ disabled: true });
            if (d.modern) this.send(d.opcode, d);
            else this.domail(d);
        };
        if (typeof data == "function") return mail(data());
        switch (data.action) {
            case "open_url":
                if (data.new) window.open(data.url, "_blank");
                else window.location.href = data.url;
                break;
            default:
                mail(data);
                break;
        }
    }

    displayMessage(t, dt, or) {
        if (!dt) return;
        if (t == "room" || t == "audiencePlayer") this.room = this.role == "audience" ? Object.assign(dt, dt.audience || {}) : dt;
        if (t == "player" && or) this.player = dt;
        var data = this.role == "audience" ? this.room : or ? this.player : dt;
        if ((t == "room" && !this.player && this.role != "audience") || (t == "player" && !this.room)) return;
        //console.log(t, this.player, this.room, data);
        if (this.clockAnimationFrame) cancelAnimationFrame(this.clockAnimationFrame);
        var w = this.region.empty().prop({ class: "content-region" });
        w.addClass(this.appTag);
        w.addClass(data.state);
        var xtraclass = data.roundType || data.choiceType || data.choiceId;
        if (xtraclass) w.addClass(xtraclass);
        var setHTMLorText = (e, o) => e[o.html || !o ? "html" : "text"](typeof o == "object" ? o.html || o.text : o);
        var pr = (t) => setHTMLorText($("<div/>").addClass("prompt-text"), t);
        var autoprompt = () => pr(data.prompt).appendTo(w);
        var ch = (t, a) => {
            var group = $("<div/>").addClass("choice-group");
            var b = setHTMLorText($("<button/>").appendTo(group), t);
            b.attr(filterObject({
                disabled: t.disabled
            }));
            if (t.selected) b.addClass("selected");
            if (t.className) b.addClass(t.className);
            b.on("click", () => {
                if (t.disabled) return;
                this.handleAction(a);
            });
            return { g: group, b, o: t };
        };
        var autochoice = (c) => {
            if (c || data.choices) return (c || data.choices).map((c, i) => {
                var ooe = c.oaction || { action: c.action || /* c.key ? c.key :  */"choose", choice: i, key: c.key };
                var es = ch(c, ooe);
                es.g.appendTo(w);
                return es;
            });
        };
        var input = (o, cfire) => {
            var e = $("<input/>").addClass("game-input").attr({
                maxlength: o.maxLength,
                placeholder: o.placeholder
            }).appendTo(w).on("keyup", (rr) => {
                if (rr.key == "Enter") {
                    fire();
                }
            });
            var val = () => e.val().trim();
            var fire = () => {
                this.handleAction(cfire ? cfire() : data.textKey ? { key: data.textKey, val: val(), modern: true, opcode: "text/update" } : { action: "write", entry: val() });
            };
            if (o.entry) e.attr({ disabled: true });
            if (o.error) {
                $("<div/>").addClass("input-error").html(o.error).appendTo(w);
                e.addClass("game-input-errored");
            }
            return { fire, val };
        };
        var submit = (a, t) => {
            return autochoice([{
                html: t || "Submit",
                oaction: a
            }])[0];
        };
        switch (this.appTag) {
            case "ydkj2018":
                this.sessionModulePrefix = "YDKJ2018";
                switch (data.state) {
                    case "Lobby":
                        this.stats.jackattackscore = 0;
                        break;
                    case "Logo":
                        this.setStat("jackattackcollected", false, []);
                        break;
                    case "MakeSingleChoice":
                        autoprompt();
                        autochoice().forEach((c, ind) => {
                            var i = c.o.timeInfo;
                            if (i && i.startedGameTime) {
                                var t = $("<div/>").addClass("jack-attack-timer").appendTo(c.b);
                                var td = i.startedGameTime - i.currentGameTime;
                                t.css({
                                    width: "".concat(100 - Math.floor(td / i.totalTime * 100), "%"),
                                    animationDuration: "".concat(i.totalTime, "ms"),
                                    animationDelay: "".concat(td, "ms")
                                });
                            }

                            var cc = "jack-attack-correct";
                            var ic = "jack-attack-incorrect";
                            if ((c.o.className == cc || c.o.className == ic) && !this.stats.jackattackcollected.includes(ind)) {
                                var mult = c.o.className == cc ? 1 : -1;
                                var val = parseInt(c.o.html.replace(/[^0-9]/g, "")) * mult;
                                this.setStat("jackattackscore", "total Jack Attack score", (this.stats.jackattackscore || 0) + val);
                                this.stats.jackattackcollected.push(ind);
                                this.setStat("jackattackcollected", false, this.stats.jackattackcollected);
                            }
                        });
                        return;
                }
                break;
            case "quiplash3":
                this.sessionModulePrefix = "quiplash3";
                switch (data.state) {
                    case "EnterTextList":
                        if (data.doneText && data.entries) {
                            pr(data.doneText).appendTo(w);
                            return;
                        }
                        autoprompt();
                        var is = [];
                        var re = () => {
                            return { action: "write", entries: is.map((e) => e.val()) };
                        };
                        for (var p = 0; p < data.fieldCount; p++) {
                            is.push(input(data, re));
                        }
                        submit(re);
                        return;
                }
                break;
        }
        switch (data.state) {
            case "Lobby":
                var display = { prompt: "wait", choices: [] };
                if (data.playerIsVIP) {
                    if (this.room.gameCanStart) {
                        if (data.playerCanStartGame) {
                            if (this.room.gameIsStarting) {
                                display.prompt = "vip_cancel";
                                display.choices = [
                                    { html: "button_cancel", action: "cancel" }
                                ];
                            } else {
                                if (this.room.gameFinished) {
                                    display.prompt = "vip_postgame";
                                    display.choices = [
                                        { html: "button_sameplayers", action: "PostGame_Continue" },
                                        { html: "button_newplayers", action: "PostGame_NewGame" }
                                    ];
                                } else {
                                    display.prompt = "vip_canStart";
                                    display.choices = [
                                        { html: "button_start", action: "start" }
                                    ];
                                    if (data.playerCanCensor && data.censorablePlayers.length > 0) {
                                        display.choices.push({ html: "button_censorOptions", action: "censorOptions" });
                                    }
                                }
                            }
                        }
                    } else display.prompt = "vip_waiting";
                }
                if (data.playerCanDoEpisodes) {
                    display.choices.push({ html: "vip_episodes_missing", disabled: true });
                }
                if (this.room.canChangeName) display.choices.push({ html: "button_changename", action: "changeName" });
                if (data.choices) display.choices.push(...data.choices);
                if (this.room.artifact && !this.room.gameIsStarting) display.choices.push({ html: "button_artifact", oaction: { action: "open_url", new: true, url: "https://games.jackbox.tv/artifact/".concat(this.room.artifact.categoryId, "/", this.room.artifact.artifactId, "/") } });
                var strings = {
                    wait: "Sit back and relax!",
                    vip_waiting: "Waiting for all players to join",
                    vip_canStart: "Press this button when everybody has joined",
                    vip_cancel: "Press this button to cancel game start",
                    vip_postgame: "What would you like to do now?",
                    vip_episodes_menu: "Episodes menu",
                    vip_episodes_unload: "Unload episode",
                    vip_episodes_report: "Report episode",
                    vip_episodes_warning: "Warning: User-generated content is not rated",
                    vip_episodes_load: "Load an episode by id:",
                    vip_episodes_select: "or select an episode:",
                    vip_episodes_back: "Back",
                    vip_episodes_submit: "Submit",
                    vip_episodes_view_author: "View author",
                    button_start: "Everybody\u2019s in",
                    button_cancel: "Cancel",
                    button_changename: "Change name",
                    button_sameplayers: "Same players",
                    button_newplayers: "New players",
                    prompt_entername: "Enter your name",
                    prompt_choosecharacter: "Select your character",
                    button_censorOptions: "Censor options",
                    /////////////////////////////////////////
                    vip_episodes_missing: "Episode manager coming soon",
                    button_artifact: "Open gallery"
                };
                display.prompt = strings[display.prompt];
                display.choices.forEach((c) => {
                    if (!c.n) c.html = strings[c.html];
                })
                this.displayMessage("player", {
                    state: "MakeSingleChoice",
                    prompt: { html: display.prompt },
                    choices: display.choices
                });
                if (this.room.characters && this.room.characters.length) {
                    pr({ html: strings["prompt_choosecharacter"] }).appendTo(w);
                    this.room.characters.forEach((c) => {
                        var c = ch({
                            html: c.name,
                            disabled: c.selected || !c.available
                        }, { action: "avatar", name: c.name });
                        c.g.addClass("character-group").appendTo(w);
                    });
                }
                break;
            case "Gameplay_Logo":
            case "Logo":
                this.logoClock = $("<div/>").addClass("logo-clock").appendTo(w);
                if (data.message) {
                    this.logoClock.addClass("logo-clock-inactive");
                    setHTMLorText($("<div/>").addClass("logo-message"), data.message).appendTo(w);
                }
                var genh = () => $("<div/>").addClass("logo-clock-hand").appendTo(this.logoClock);
                var hh = genh();
                var mh = genh();
                var sh = genh();
                var setHand = (h, m, o) => h.css({ transform: "translate(-50%, -100%) rotate(".concat(m / o * 360, "deg)") });
                var doHands = () => {
                    this.logoClock.css({ transform: "translate(-50%, -50%) scale(".concat(this.clockScale, ")") })
                    var d = new Date();
                    var s = d.getSeconds();
                    setHand(hh, d.getHours() + d.getMinutes() / 60 + s / 3600, 12);
                    setHand(mh, d.getMinutes() + s / 60, 60);
                    setHand(sh, s, 60);
                    this.clockAnimationFrame = requestAnimationFrame(() => doHands());
                };
                doHands();
                for (var x = 0; x < 60; x++) {
                    var rot = x / 60 * 360;
                    var el = $("<div/>").addClass("logo-clock-marker").css({ transform: "translate(-50%, -50%) rotate(".concat(rot, "deg) translateY(-210px)") }).appendTo(this.logoClock);
                    if (x % 5 == 0) {
                        el.addClass("logo-clock-marker-darker");
                        $("<div/>").addClass("logo-clock-marker-number").html((x || 60) / 60 * 12).css({ transform: "translateX(-50%) rotate(-".concat(rot, "deg)") }).appendTo(el);
                    }
                }
                break;
            case "MakeSingleChoice":
                autoprompt();
                autochoice();
                if (data.actions) {

                }
                break;
            case "EnterSingleText":
                if (data.doneText && data.entry) {
                    pr(data.doneText).appendTo(w);
                    return;
                }
                autoprompt();
                var i = input(data);
                submit(() => i.fire());
                break;
        }
    }

    setStat(id, name, value) {
        this.stats[id] = value;
        localStorage.setItem("ejc-stats", JSON.stringify(this.stats));
        console.log("Stat", name, "=", value);
    }

    parseEntities() {
        if (!this.entities) return;
        var e = this.entities
            , n = {};
        return Object.keys(e).forEach(((r) => {
            var i = e[r];
            "room" === r || "bc:room" === r || "roomBlob" === r ? (i instanceof TextEntity && (n.room = i.toBlob()),
                i instanceof JSONEntity && (n.room = i.val),
                i instanceof ObjectEntity && (n.room = i.val)) : r === "player:".concat(this.id) || r === "bc:customer:".concat(this.userId) ? (i instanceof TextEntity && (n.player = i.toBlob()),
                    i instanceof JSONEntity && (n.player = i.val),
                    i instanceof ObjectEntity && (n.player = i.val)) : "audiencePlayer" === r && (i instanceof TextEntity && (n.audiencePlayer = i.toBlob()),
                        i instanceof JSONEntity && (n.audiencePlayer = i.val),
                        i instanceof ObjectEntity && (n.audiencePlayer = i.val))
        }
        )),
            n
    }

    onPlayerText(t) {
        var e = t.key
            , n = t.text
            , r = t.text;
        try {
            r = JSON.parse(r)
        } catch (e) {
            return void (console.log("[Ecast Client] Unhandled text notification: ".concat(t.key, " ").concat(n)))
        }
        var i = r;
        "room" === e ? this.emit("client:entityDidChange", e, i) : e === "player:".concat(this.id) ? this.emit("client:entityDidChange", "player", i) : "bc:room" === e ? this.emit("client:entityDidChange", "room", i) : "audiencePlayer" === e ? this.emit("client:entityDidChange", "audiencePlayer", i) : e === "bc:customer:".concat(this.userId) ? this.emit("client:entityDidChange", "player", i) : console.log("[Ecast Client] Unhandled json notification: ".concat(e))
    }

    onPlayerJsonOrObject(t) {
        var e = t.key
            , n = t.val;
        "room" === e ? this.emit("client:entityDidChange", e, n) : e === "player:".concat(this.id) ? this.emit("client:entityDidChange", "player", n) : "textDescriptions" === e ? this.emit("client:textDescriptions", e, n) : "bc:room" === e ? this.emit("client:entityDidChange", "room", n) : "audiencePlayer" === e ? this.emit("client:entityDidChange", "audiencePlayer", n) : e === "bc:customer:".concat(this.userId) ? this.emit("client:entityDidChange", "player", n) : console.log("[Ecast Client] Unhandled json notification: ".concat(e))
    }

    T(t, e) {
        switch (t) {
            case "ok":
                return new OK;
            case "echo":
                return new l({
                    message: e.message
                });
            case "error":
                if (2010 === e.code || 2009 === e.code && this.role != "audience" && this.audienceEnabled) {
                    swalLoading("Reconnecting");
                    this.role = "audience";
                    this.connect();
                    return;
                }
                if (e.code == 2017) {
                    Swal.fire({
                        title: "Game password required",
                        input: "text",
                        inputAttributes: { maxlength: 5, placeholder: "Enter 5-digit password" },
                        inputValidator: (value) => {
                            if (/[^0-9]/g.test(value)) return "Password must be numbers only!";
                            if (!value) return "You need to enter a password!";
                            if (value.length < 5) return "You need to enter a 5-digit password!";
                        },
                        confirmButtonText: "Submit",
                        cancelButtonText: "Join audience",
                        showCancelButton: true
                    }).then((result) => {
                        console.log(result);
                        if (result.isConfirmed) {
                            this.role = "player";
                            this.password = parseInt(result.value);
                            swalLoading("Joining");
                            this.connect();
                        } else if (result.dismiss === Swal.DismissReason.cancel) {
                            this.role = "audience";
                            swalLoading("Reconnecting");
                            this.connect();
                        }
                    });
                    return;
                }
                return createError({
                    code: e.code,
                    message: e.msg
                }, this);
            case "string":
                return e;
            case "text":
                return new TextEntity({
                    key: e.key,
                    text: e.val,
                    version: e.version
                });
            case "text/echo":
                return new TextEcho({
                    message: e.message
                });
            case "json":
                return new c({
                    key: e.key,
                    val: e.val,
                    version: e.version
                });
            case "json/echo":
                return new u({
                    message: e.message
                });
            case "object":
                return new ObjectEntity({
                    key: e.key,
                    val: e.val
                });
            case "object/echo":
                return new ObjectEcho({
                    message: e.message
                });
            case "drop":
                return new E({
                    key: e.key
                });
            case "client/connected":
                return new i({
                    id: e.id,
                    userId: e.userId,
                    name: e.name,
                    role: e.role,
                    reconnect: e.reconnect
                });
            case "client/disconnected":
                return new o({
                    id: e.id,
                    role: e.role
                });
            case "client/kicked":
                return new s({
                    id: e.id
                });
            case "client/send":
                return new a({
                    to: e.to,
                    from: e.from,
                    body: e.body,
                    userId: e.userID
                });
            case "client/welcome":
                {
                    this.forceClose = false;
                    this.reconnect = "".concat(e.id, ":").concat(this.role, ":").concat(e.secret);
                    localStorage.setItem("ejc-reconnect", this.reconnect);
                    this.wrapper = $("<div/>").addClass("content-wrapper").appendTo(document.body);
                    var name = this.role == "audience" ? "AUDIENCE" : e.name;
                    this.wrapper.append($("<div/>").addClass("content-topbar").append($("<div/>").addClass("content-topbar-name").html(name.toLowerCase())));
                    this.region = $("<div/>").addClass("content-region").appendTo($("<div/>").addClass("content-area").appendTo(this.wrapper));
                    $(window).on("resize", () => this.setClockScale());
                    this.setClockScale();

                    console.log("ClientWelcome", e);

                    var t = new ClientWelcome({
                        id: e.id,
                        name: e.name,
                        secret: e.secret,
                        reconnect: e.reconnect,
                        here: e.here,
                        profile: e.profile,
                        roomId: this.roomId
                    })
                        , n = {};

                    return Object.entries(e.entities).forEach(([t, e]) => {
                        n[t] = this.T(e[0], e[1])
                    }
                    ),
                        t.entities = n,
                        t
                }
            case "room/exit":
                return new RoomExit;
            case "room/lock":
                return new RoomLock;
            case "room/get-audience":
                return new d({
                    connections: e.connections
                });
            case "audience":
                return new w({
                    key: t,
                    count: e[1]
                });
            case "audience/count-group":
                return new CountGroup({
                    key: e.key,
                    choices: e.choices
                });
            case "audience/text-ring":
                return new O({
                    key: e.key,
                    elements: e.elements
                });
            case "audience/g-counter":
                return new b({
                    key: e.key,
                    count: e.count
                });
            case "audience/pn-counter":
                return new PNCounter({
                    key: e.key,
                    count: e.count
                });
            default:
                return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e, null, 2)}`), e;
        }
    }

    parseResponseMessage(t) {
        var e = JSON.parse(t.data), n = e.opcode || e.type;
        return e.re ? new Reply({
            pc: e.pc,
            re: e.re,
            opcode: n,
            result: this.T(n, e.result)
        }) : new Notification({
            pc: e.pc,
            opcode: n,
            result: this.T(n, e.result)
        });
    }






    send(t, e = {}) {
        if (!this.conn)
            throw new Error("No connection available");
        if (this.conn.readyState !== WebSocket.OPEN)
            throw new Error("Socket not ready to send, readyState is " + this.conn.readyState);
        const n = ++this.seq
            , i = new Request({
                seq: n,
                opcode: t,
                params: e
            })
            , o = new Promise((t, e) => {
                this.pending[n] = {
                    resolve: t,
                    reject: e,
                    request: i
                }
            }
            )
            , s = JSON.stringify(i);
        return console.log("send -> " + s),
            this.conn.send(s),
            o
    }
    lockRoom() {
        return this.send("room/lock")
    }
    startAudience() {
        return this.send("room/start-audience")
    }
    getAudience() {
        return this.send("room/get-audience")
    }
    mail(t, e) {
        return this.send("client/send", {
            from: this.id,
            to: t,
            body: e
        })
    }
    domail(e) {
        return this.mail(1, e);
    }
    kick(t) {
        return this.send("client/kick", {
            id: t
        })
    }
    echo(t) {
        return this.send("echo", {
            message: t
        })
    }
    echoJson(t) {
        return this.send("json/echo", {
            message: t
        })
    }
    getJson(t) {
        return this.send("json/get", {
            key: t
        })
    }
    async setJson(t, e, n) {
        const r = {
            key: t,
            val: e
        };
        n && (r.acl = n);
        const i = await this.send("json/set", r);
        return this.entities[t] = new h({
            key: t,
            val: e
        }),
            i
    }
    async createObject(t, e, n) {
        const r = {
            key: t,
            val: e
        };
        n && (r.acl = n);
        const i = await this.send("object/create", r);
        return this.entities[t] = new d({
            key: t,
            val: e
        }),
            i
    }
    echoObject(t) {
        return this.send("object/echo", {
            message: t
        })
    }
    async setObject(t, e, n) {
        const r = {
            key: t,
            val: e
        };
        n && (r.acl = n);
        const i = await this.send("object/set", r);
        return this.entities[t] = new d({
            key: t,
            val: e
        }),
            i
    }
    async updateObject(t, e) {
        const n = await this.send("object/update", {
            key: t,
            val: e
        });
        return this.entities[t] = new d({
            key: t,
            val: e
        }),
            n
    }
    echoText(t) {
        return this.send("text/echo", {
            message: t
        })
    }
    getText(t) {
        return this.send("text/get", {
            key: t
        })
    }
    async createText(t, e, n) {
        const r = {
            key: t,
            val: e
        }
            , { acl: i, accept: o, reject: s } = n;
        i && (r.acl = i),
            o && (r.accept = o),
            s && (r.reject = s);
        const a = await this.send("text/create", r);
        return this.entities[t] = new p({
            key: t,
            text: e
        }),
            a
    }
    async setText(t, e, n) {
        const r = {
            key: t,
            val: e
        };
        n && (r.acl = n);
        const i = await this.send("text/set", r);
        return this.entities[t] = new p({
            key: t,
            text: e
        }),
            i
    }
    async updateText(t, e) {
        const n = await this.send("text/update", {
            key: t,
            val: e
        });
        return this.entities[t] = new p({
            key: t,
            text: e
        }),
            n
    }
    async createCountGroup(t, e) {
        const n = await this.send("audience/count-group/create", {
            name: t,
            options: e
        });
        return this.entities[t] = new CountGroup({
            key: t,
            choices: e
        }),
            n
    }
    incrementCountGroupCounter(t, e) {
        return this.send("audience/count-group/increment", {
            name: t,
            vote: e
        })
    }
    getCountGroup(t) {
        return this.send("audience/count-group/get", {
            name: t
        })
    }
    async createGCounter(t, e) {
        const n = await this.send("audience/g-counter/create", {
            key: t,
            count: e
        });
        return this.entities[t] = new v({
            key: t,
            count: e
        }),
            n
    }
    incrementGCounter(t, e) {
        return this.send("audience/g-counter/increment", {
            key: t,
            times: e
        })
    }
    getGCounter(t) {
        return this.send("audience/g-counter/get", {
            key: t
        })
    }
    async createTextRing(t, e) {
        const n = await this.send("audience/text-ring/create", {
            name: t,
            limit: e
        });
        return this.entities[t] = new TextRing({
            key: t,
            elements: [],
            limit: e
        }),
            n
    }
    getTextRing(t) {
        return this.send("audience/text-ring/get", {
            name: t
        })
    }
    pushTextRing(t, e) {
        return this.send("audience/text-ring/push", {
            name: t,
            text: e
        })
    }
};