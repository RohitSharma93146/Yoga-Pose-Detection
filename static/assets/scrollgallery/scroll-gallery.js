(function () {
    if (!document.querySelector("html").classList.contains("is-builder")) {
        (function () {
            var k = document.querySelectorAll(".gallery-wrapper");
            if (k.length) {
                k.forEach(function (m) {
                    function k() {
                        var b = window.scrollY,
                            a = window.innerHeight;
                        a = m.getBoundingClientRect().top + window.scrollY - a;
                        if (b >= a) {
                            var c = u ? new DOMMatrix(u) : null,
                                e = v ? new DOMMatrix(v) : null,
                                d = w ? new DOMMatrix(w) : null;
                            if (c) {
                                var k = function () {
                                        for (var a = 0; a < n; a++) {
                                            var b = q[a].cloneNode(!0);
                                            f.appendChild(b);
                                        }
                                    },
                                    q = f.querySelectorAll(".grid-item"),
                                    n = q.length;
                                q.forEach(function (a) {
                                    a.querySelector("img").classList.remove("hidden");
                                });
                                if (8 <= n && !f.classList.contains("moving-left")) {
                                    c.m41 = -2000;
                                }
                                if (8 <= n && !f.classList.contains("moving-left") && 1200 > window.innerWidth) {
                                    c.m41 = -900;
                                }
                                switch (true) {
                                    case 8 > n:
                                        k();
                                    case f.classList.contains("moving-right"):
                                        translateX1 = c.m41 + 0.9 * (b - a);
                                        break;
                                    case f.classList.contains("moving-left"):
                                        translateX1 = c.m41 - 0.9 * (b - a);
                                        break;
                                    default:
                                        2560 <= window.innerWidth
                                            ? (translateX1 = c.m41 + 0.9 * (b - a))
                                            : 1440 <= window.innerWidth
                                            ? (translateX1 = c.m41 + 0.55 * (b - a))
                                            : 1024 <= window.innerWidth
                                            ? (translateX1 = c.m41 + 0.45 * (b - a))
                                            : 768 <= window.innerWidth
                                            ? (translateX1 = c.m41 + 0.35 * (b - a))
                                            : 320 <= window.innerWidth &&
                                                (translateX1 = c.m41 + 0.25 * (b - a));
                                }
                                f.style.transform = "translate3d(" + translateX1 + "px, 0, 0)";
                            }
                            if (e) {
                                c = function () {
                                    for (var a = 0; a < p; a++) {
                                        var b = r[a].cloneNode(!0);
                                        g.appendChild(b);
                                    }
                                };
                                var r = g.querySelectorAll(".grid-item"),
                                    p = r.length;
                                r.forEach(function (a) {
                                    a.querySelector("img").classList.remove("hidden");
                                });
                                if (8 <= p && g.classList.contains("moving-left")) {
                                    e.m41 = -2000;
                                }
                                if (8 <= p && !g.classList.contains("moving-left") && 1200 > window.innerWidth) {
                                    e.m41 = 0;
                                }
                                switch (true) {
                                    case 8 > p:
                                        c();
                                    case g.classList.contains("moving-right"):
                                        translateX2 = e.m41 + 0.9 * (b - a);
                                        break;
                                    case g.classList.contains("moving-left"):
                                        translateX2 = e.m41 - 0.9 * (b - a);
                                        break;
                                    default:
                                        2560 <= window.innerWidth
                                            ? (translateX2 = e.m41 - 0.9 * (b - a))
                                            : 1440 <= window.innerWidth
                                            ? (translateX2 = e.m41 - 0.55 * (b - a))
                                            : 1024 <= window.innerWidth
                                            ? (translateX2 = e.m41 - 0.45 * (b - a))
                                            : 768 <= window.innerWidth
                                            ? (translateX2 = e.m41 - 0.35 * (b - a))
                                            : 320 <= window.innerWidth &&
                                                (translateX2 = e.m41 - 0.25 * (b - a));
                                }
                                g.style.transform = "translate3d(" + translateX2 + "px, 0, 0)";
                            }
                            if (d) {
                                e = function () {
                                    for (var a = 0; a < l; a++) {
                                        var b = t[a].cloneNode(!0);
                                        h.appendChild(b);
                                    }
                                };
                                var t = h.querySelectorAll(".grid-item"),
                                    l = t.length;
                                t.forEach(function (a) {
                                    a.querySelector("img").classList.remove("hidden");
                                });
                                if (8 <= l && !h.classList.contains("moving-left")) {
                                    d.m41 = -2000;
                                }
                                if (8 <= l && !h.classList.contains("moving-left") && 1200 > window.innerWidth) {
                                    d.m41 = -900;
                                }
                                c = d.m41 + 0.9 * (b - a);
                                if (8 > l) {
                                    e();
                                }
                                if (h.classList.contains("moving-left")) {
                                    if (h.classList.contains("moving-left")) {
                                        if (8 > l) {
                                            e();
                                        }
                                        2560 <= window.innerWidth
                                            ? (c = d.m41 - 0.9 * (b - a))
                                            : 1440 <= window.innerWidth
                                            ? (c = d.m41 - 0.55 * (b - a))
                                            : 1024 <= window.innerWidth
                                            ? (c = d.m41 - 0.45 * (b - a))
                                            : 768 <= window.innerWidth
                                            ? (c = d.m41 - 0.35 * (b - a))
                                            : 320 <= window.innerWidth &&
                                                (c = d.m41 - 0.25 * (b - a));
                                    }
                                } else {
                                    2560 <= window.innerWidth
                                        ? (c = d.m41 + 0.9 * (b - a))
                                        : 1440 <= window.innerWidth
                                        ? (c = d.m41 + 0.55 * (b - a))
                                        : 1024 <= window.innerWidth
                                        ? (c = d.m41 + 0.45 * (b - a))
                                        : 768 <= window.innerWidth
                                        ? (c = d.m41 + 0.35 * (b - a))
                                        : 320 <= window.innerWidth &&
                                            (c = d.m41 + 0.25 * (b - a));
                                }
                                h.style.transform = "translate3d(" + c + "px, 0, 0)";
                            }
                        }
                    }
                    var f = m.querySelector(".grid-container-1"),
                        g = m.querySelector(".grid-container-2"),
                        h = m.querySelector(".grid-container-3"),
                        u = f ? getComputedStyle(f).transform : null,
                        v = g ? getComputedStyle(g).transform : null,
                        w = h ? getComputedStyle(h).transform : null;
                    window.addEventListener("DOMContentLoaded", function () {
                        requestAnimationFrame(k);
                    });
                    window.addEventListener("scroll", function () {
                        requestAnimationFrame(k);
                    });
                });
            }
        })();
    }
})();
