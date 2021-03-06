(() => {
  "use strict";
  class t {
    constructor(t, e = null) {
      if (
        ((this.config = Object.assign({ init: !0, logging: !0 }, t)),
        this.config.init)
      ) {
        const t = document.querySelectorAll("[data-prlx-mouse]");
        t.length
          ? (this.paralaxMouseInit(t),
            this.setLogging(`Проснулся, слежу за объектами: (${t.length})`))
          : this.setLogging("Нет ни одного объекта. Сплю...zzZZZzZZz...");
      }
    }
    paralaxMouseInit(t) {
      t.forEach((t) => {
        const e = t.closest("[data-prlx-mouse-wrapper]"),
          o = t.dataset.prlxCx ? +t.dataset.prlxCx : 100,
          n = t.dataset.prlxCy ? +t.dataset.prlxCy : 100,
          i = t.hasAttribute("data-prlx-dxr") ? -1 : 1,
          s = t.hasAttribute("data-prlx-dyr") ? -1 : 1,
          l = t.dataset.prlxA ? +t.dataset.prlxA : 1e3;
        let r = 0,
          a = 0,
          c = 0,
          d = 0;
        function p(e = window) {
          e.addEventListener("mousemove", function (e) {
            const o = t.getBoundingClientRect().top + window.scrollY;
            if (o >= window.scrollY || o + t.offsetHeight >= window.scrollY) {
              const t = window.innerWidth,
                o = window.innerHeight,
                n = e.clientX - t / 2,
                i = e.clientY - o / 2;
              (c = (n / t) * 100), (d = (i / o) * 100);
            }
          });
        }
        !(function e() {
          (r += ((c - r) * l) / 1e3),
            (a += ((d - a) * l) / 1e3),
            (t.style.cssText = `transform: translate3D(${(i * r) / (o / 10)}%,${
              (s * a) / (n / 10)
            }%,0);`),
            requestAnimationFrame(e);
        })(),
          e ? p(e) : p();
      });
    }
    setLogging(t) {
      this.config.logging && r(`[PRLX Mouse]: ${t}`);
    }
  }
  class e {
    constructor(t, e = null) {
      if (
        ((this.config = Object.assign({ init: !0, logging: !0 }, t)),
        this.config.init)
      ) {
        const t = document.querySelectorAll("[data-prlx-scroll]");
        t.length
          ? (this.parallaxScrollInit(t),
            this.setLogging(`Проснулся, слежу за объектами: (${t.length})`))
          : this.setLogging("Нет ни одного объекта. Сплю...zzZZZzZZz...");
      }
    }
    parallaxScrollInit(t) {
      t.forEach((t) => {
        const e = t.closest("[data-prlx-scroll-wrapper]"),
          o = t.dataset.prlxCx ? +t.dataset.prlxCx : 100,
          n = t.dataset.prlxCy ? +t.dataset.prlxCy : 100;
        let i = 0;
        t.hasAttribute("data-prlx-dx") && (i = 1),
          t.hasAttribute("data-prlx-dxr") && (i = -1);
        const s = i;
        let l = i ? 0 : -1;
        t.hasAttribute("data-prlx-dy") && (l = -1),
          t.hasAttribute("data-prlx-dyr") && (l = 1);
        const r = l,
          a = t.dataset.prlxA ? +t.dataset.prlxA : 50;
        function c() {
          requestAnimationFrame(c);
        }
        function d(t = null) {
          window.addEventListener("scroll", function () {
            const e = window.scrollY;
            if (t) {
              const { height: o, top: n } = t.getBoundingClientRect(),
                i = t.offsetTop;
              o > o + n && o + n > 0 && c(e - i);
            } else c(e);
          });
        }
        function c(e) {
          let i = (s * e * a) / (20 * o),
            l = (r * e * a) / (20 * n);
          t.style.cssText = `transform: translate3D(${i}%, ${l}%, 0);`;
        }
        c(), e ? d(e) : d();
      });
    }
    setLogging(t) {
      this.config.logging && r(`[PRLX Scroll]: ${t}`);
    }
  }
  let o = (t, e = 500, o = 0) => {
      t.classList.contains("_slide") ||
        (t.classList.add("_slide"),
        (t.style.transitionProperty = "height, margin, padding"),
        (t.style.transitionDuration = e + "ms"),
        (t.style.height = `${t.offsetHeight}px`),
        t.offsetHeight,
        (t.style.overflow = "hidden"),
        (t.style.height = o ? `${o}px` : "0px"),
        (t.style.paddingTop = 0),
        (t.style.paddingBottom = 0),
        (t.style.marginTop = 0),
        (t.style.marginBottom = 0),
        window.setTimeout(() => {
          (t.hidden = !o),
            !o && t.style.removeProperty("height"),
            t.style.removeProperty("padding-top"),
            t.style.removeProperty("padding-bottom"),
            t.style.removeProperty("margin-top"),
            t.style.removeProperty("margin-bottom"),
            !o && t.style.removeProperty("overflow"),
            t.style.removeProperty("transition-duration"),
            t.style.removeProperty("transition-property"),
            t.classList.remove("_slide");
        }, e));
    },
    n = (t, e = 500, o = 0) => {
      if (!t.classList.contains("_slide")) {
        t.classList.add("_slide"),
          (t.hidden = !t.hidden && null),
          o && t.style.removeProperty("height");
        let n = t.offsetHeight;
        (t.style.overflow = "hidden"),
          (t.style.height = o ? `${o}px` : "0px"),
          (t.style.paddingTop = 0),
          (t.style.paddingBottom = 0),
          (t.style.marginTop = 0),
          (t.style.marginBottom = 0),
          t.offsetHeight,
          (t.style.transitionProperty = "height, margin, padding"),
          (t.style.transitionDuration = e + "ms"),
          (t.style.height = n + "px"),
          t.style.removeProperty("padding-top"),
          t.style.removeProperty("padding-bottom"),
          t.style.removeProperty("margin-top"),
          t.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            t.style.removeProperty("height"),
              t.style.removeProperty("overflow"),
              t.style.removeProperty("transition-duration"),
              t.style.removeProperty("transition-property"),
              t.classList.remove("_slide");
          }, e);
      }
    },
    i = !0,
    s = (t = 500) => {
      let e = document.querySelector("body");
      if (i) {
        let o = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let t = 0; t < o.length; t++) {
            o[t].style.paddingRight = "0px";
          }
          (e.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (i = !1),
          setTimeout(function () {
            i = !0;
          }, t);
      }
    },
    l = (t = 500) => {
      let e = document.querySelector("body");
      if (i) {
        let o = document.querySelectorAll("[data-lp]");
        for (let t = 0; t < o.length; t++) {
          o[t].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (e.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (i = !1),
          setTimeout(function () {
            i = !0;
          }, t);
      }
    };
  function r(t) {
    setTimeout(() => {
      window.FLS && console.log(t);
    }, 0);
  }
  function a(t, e) {
    const o = Array.from(t).filter(function (t, o, n) {
      if (t.dataset[e]) return t.dataset[e].split(",")[0];
    });
    if (o.length) {
      const t = [];
      o.forEach((o) => {
        const n = {},
          i = o.dataset[e].split(",");
        (n.value = i[0]),
          (n.type = i[1] ? i[1].trim() : "max"),
          (n.item = o),
          t.push(n);
      });
      let n = t.map(function (t) {
        return (
          "(" + t.type + "-width: " + t.value + "px)," + t.value + "," + t.type
        );
      });
      n = (function (t) {
        return t.filter(function (t, e, o) {
          return o.indexOf(t) === e;
        });
      })(n);
      const i = [];
      if (n.length)
        return (
          n.forEach((e) => {
            const o = e.split(","),
              n = o[1],
              s = o[2],
              l = window.matchMedia(o[0]),
              r = t.filter(function (t) {
                if (t.value === n && t.type === s) return !0;
              });
            i.push({ itemsArray: r, matchMedia: l });
          }),
          i
        );
    }
  }
  let c = !1;
  setTimeout(() => {
    if (c) {
      let t = new Event("windowScroll");
      window.addEventListener("scroll", function (e) {
        document.dispatchEvent(t);
      });
    }
  }, 0),
    (function (t) {
      let e = new Image();
      (e.onload = e.onerror =
        function () {
          t(2 == e.height);
        }),
        (e.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (t) {
      let e = !0 === t ? "webp" : "no-webp";
      document.documentElement.classList.add(e);
    }),
    (function () {
      let t = document.querySelector(".icon-menu");
      t &&
        t.addEventListener("click", function (t) {
          i &&
            (((t = 500) => {
              document.documentElement.classList.contains("lock") ? s(t) : l(t);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      const t = document.querySelectorAll("[data-spollers]");
      if (t.length > 0) {
        const e = Array.from(t).filter(function (t, e, o) {
          return !t.dataset.spollers.split(",")[0];
        });
        e.length && s(e);
        let i = a(t, "spollers");
        function s(t, e = !1) {
          t.forEach((t) => {
            (t = e ? t.item : t),
              e.matches || !e
                ? (t.classList.add("_spoller-init"),
                  l(t),
                  t.addEventListener("click", r))
                : (t.classList.remove("_spoller-init"),
                  l(t, !1),
                  t.removeEventListener("click", r));
          });
        }
        function l(t, e = !0) {
          const o = t.querySelectorAll("[data-spoller]");
          o.length > 0 &&
            o.forEach((t) => {
              e
                ? (t.removeAttribute("tabindex"),
                  t.classList.contains("_spoller-active") ||
                    (t.nextElementSibling.hidden = !0))
                : (t.setAttribute("tabindex", "-1"),
                  (t.nextElementSibling.hidden = !1));
            });
        }
        function r(t) {
          const e = t.target;
          if (e.closest("[data-spoller]")) {
            const i = e.closest("[data-spoller]"),
              s = i.closest("[data-spollers]"),
              l = !!s.hasAttribute("data-one-spoller");
            s.querySelectorAll("._slide").length ||
              (l && !i.classList.contains("_spoller-active") && c(s),
              i.classList.toggle("_spoller-active"),
              ((t, e = 500) => {
                t.hidden ? n(t, e) : o(t, e);
              })(i.nextElementSibling, 500)),
              t.preventDefault();
          }
        }
        function c(t) {
          const e = t.querySelector("[data-spoller]._spoller-active");
          e &&
            (e.classList.remove("_spoller-active"),
            o(e.nextElementSibling, 500));
        }
        i &&
          i.length &&
          i.forEach((t) => {
            t.matchMedia.addEventListener("change", function () {
              s(t.itemsArray, t.matchMedia);
            }),
              s(t.itemsArray, t.matchMedia);
          });
      }
    })(),
    new t({}),
    new e({});
})();
