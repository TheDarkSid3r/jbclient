var twitchClientID = "c6j5zxuv3ofr6765by4cz0jljh7z3i";
var swalError = (b, t, r, o) => Swal.fire(Object.assign({
    icon: "error",
    title: t || "Error",
    html: b,
    willClose: () => {
        if (r) window.location.reload();
    }
}, o || {}));
var swalLoading = (t) => Swal.fire({
    title: "".concat(t || "Loading", "\u2026"),
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    customClass: "swal-loading",
    background: "transparent",
    backdrop: "#000b",
    showClass: {
        popup: "swal2-noanimation",
        backdrop: "swal2-noanimation"
    },
    hideClass: {
        popup: "",
        backdrop: ""
    }
});
var isTwitchAuthenticated = false;
var twitchLoginUsername = null;
var twitchLoginInfo = null;
var getTwitchName = () => {
    fetch("https://api.twitch.tv/helix/users", {
        headers: {
            Authorization: "Bearer ".concat(localStorage.getItem("ejc-twitch-token")),
            "Client-ID": twitchClientID
        }
    }).then((r) => r.json()).then((d) => {
        var n = d.data[0].display_name;
        if (n.length > 12) n = "".concat(n.substring(0, 11), "\u2026");
        $("#join-username").val(n).attr({ disabled: true, title: "Logged in with Twitch as ".concat(d.data[0].display_name) }).addClass("join-username-twitch");
        twitchLoginUsername = n;
        twitchLoginInfo = d.data[0];
        console.log(twitchLoginInfo);
        $(".twitch-button-wrapper button").prepend($("<div/>").addClass("twitch-button-pfp").css({ backgroundImage: "url(".concat(twitchLoginInfo.profile_image_url, ")") }));
    });
    $(".twitch-button-wrapper button").html("Logout");
    isTwitchAuthenticated = true;
};
var usnls = localStorage.getItem("ejc-username");
if (usnls) $("#join-username").val(usnls);
var ridls = localStorage.getItem("ejc-roomId");
if (ridls) $("#join-roomId").val(ridls);
var hash = {};
if (window.location.hash) window.location.hash.slice(1).split("&").forEach((s) => {
    var p = s.split("=");
    hash[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
});
if (hash.access_token && hash.token_type && hash.token_type == "bearer") {
    window.location.hash = "";
    localStorage.setItem("ejc-twitch-token", hash.access_token);
    getTwitchName();
} else if (localStorage.getItem("ejc-twitch-token")) getTwitchName();
$(".join-form").on("submit", (e) => {
    e.preventDefault();
    var values = {};
    $.each($(".join-form").serializeArray(), (_, field) => {
        values[field.name] = field.value;
    });
    if (twitchLoginUsername) values.username = twitchLoginUsername;
    console.log(values);
    var ridShort = values.roomId && values.roomId.length < 4;
    if (!values.roomId || ridShort) return swalError(ridShort ? "Please enter a (full) room code." : "Please enter a room code.");
    if (!values.username) return swalError("Please enter a name.");
    swalLoading("Connecting");
    new JBClient(values.roomId.toUpperCase(), values.username.toUpperCase());
    return false;
});
var initTwitchLogin = () => {
    var twitchLoginURL = "https://id.twitch.tv/oauth2/authorize?client_id=".concat(twitchClientID, "&redirect_uri=", window.location.protocol, "//", window.location.host, "&response_type=token&scope=user:read:email");
    window.location.href = twitchLoginURL;
};
$(".twitch-button-wrapper button").on("click", (e) => {
    e.preventDefault();
    if (isTwitchAuthenticated) {
        localStorage.removeItem("ejc-twitch-token");
        window.location.reload();
    } else {
        initTwitchLogin();
    }
});