(function (e) {
  function t(t) {
    for (
      var a, i, s = t[0], u = t[1], c = t[2], d = 0, l = [];
      d < s.length;
      d++
    )
      (i = s[d]), o[i] && l.push(o[i][0]), (o[i] = 0);
    for (a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    p && p(t);
    while (l.length) l.shift()();
    return r.push.apply(r, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], a = !0, i = 1; i < n.length; i++) {
        var s = n[i];
        0 !== o[s] && (a = !1);
      }
      a && (r.splice(t--, 1), (e = u((u.s = n[0]))));
    }
    return e;
  }
  var a = {},
    i = { app: 0 },
    o = { app: 0 },
    r = [];
  function s(e) {
    return (
      u.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-0d3edd8e": "65366ad6",
        "chunk-4c276556": "5e51645a",
        "chunk-8efbebc2": "5430e764",
        "chunk-b4edde66": "8580c8d6",
        "chunk-28acc473": "cf156edf",
        "chunk-6c837a8f": "5ddd8879",
        "chunk-1336ac66": "0c31b369",
        "chunk-20d6b79f": "ea2f40a0",
        "chunk-26aa7490": "778a17ca",
        "chunk-6ad9834a": "ca1788e1",
        "chunk-79085fec": "12c6464a",
        "chunk-b65823b4": "074fdec7",
        "chunk-001a9248": "8fdb97f5",
        "chunk-17b9fa52": "39fad233",
        "chunk-27183ad9": "c2164199",
        "chunk-364f07a4": "4647c66d",
        "chunk-5c7e9701": "7f9a0324",
      }[e] +
      ".js"
    );
  }
  function u(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, u), (n.l = !0), n.exports;
  }
  (u.e = function (e) {
    var t = [],
      n = {
        "chunk-0d3edd8e": 1,
        "chunk-4c276556": 1,
        "chunk-8efbebc2": 1,
        "chunk-b4edde66": 1,
        "chunk-28acc473": 1,
        "chunk-6c837a8f": 1,
        "chunk-1336ac66": 1,
        "chunk-20d6b79f": 1,
        "chunk-26aa7490": 1,
        "chunk-6ad9834a": 1,
        "chunk-79085fec": 1,
        "chunk-b65823b4": 1,
        "chunk-001a9248": 1,
        "chunk-17b9fa52": 1,
        "chunk-27183ad9": 1,
        "chunk-364f07a4": 1,
        "chunk-5c7e9701": 1,
      };
    i[e]
      ? t.push(i[e])
      : 0 !== i[e] &&
        n[e] &&
        t.push(
          (i[e] = new Promise(function (t, n) {
            for (
              var a =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-0d3edd8e": "b8cb99df",
                    "chunk-4c276556": "9fce98ab",
                    "chunk-8efbebc2": "f3c37aef",
                    "chunk-b4edde66": "0b2495fc",
                    "chunk-28acc473": "6d4410d9",
                    "chunk-6c837a8f": "c9589136",
                    "chunk-1336ac66": "61d52f54",
                    "chunk-20d6b79f": "a07db5d9",
                    "chunk-26aa7490": "b642b8f2",
                    "chunk-6ad9834a": "2f06ce13",
                    "chunk-79085fec": "a70e6d58",
                    "chunk-b65823b4": "df31108e",
                    "chunk-001a9248": "3fd60142",
                    "chunk-17b9fa52": "033f77d0",
                    "chunk-27183ad9": "f681c741",
                    "chunk-364f07a4": "2a65ac05",
                    "chunk-5c7e9701": "a9bc50b5",
                  }[e] +
                  ".css",
                o = u.p + a,
                r = document.getElementsByTagName("link"),
                s = 0;
              s < r.length;
              s++
            ) {
              var c = r[s],
                d = c.getAttribute("data-href") || c.getAttribute("href");
              if ("stylesheet" === c.rel && (d === a || d === o)) return t();
            }
            var l = document.getElementsByTagName("style");
            for (s = 0; s < l.length; s++) {
              (c = l[s]), (d = c.getAttribute("data-href"));
              if (d === a || d === o) return t();
            }
            var p = document.createElement("link");
            (p.rel = "stylesheet"),
              (p.type = "text/css"),
              (p.onload = t),
              (p.onerror = function (t) {
                var a = (t && t.target && t.target.src) || o,
                  r = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + a + ")"
                  );
                (r.code = "CSS_CHUNK_LOAD_FAILED"),
                  (r.request = a),
                  delete i[e],
                  p.parentNode.removeChild(p),
                  n(r);
              }),
              (p.href = o);
            var m = document.getElementsByTagName("head")[0];
            m.appendChild(p);
          }).then(function () {
            i[e] = 0;
          }))
        );
    var a = o[e];
    if (0 !== a)
      if (a) t.push(a[2]);
      else {
        var r = new Promise(function (t, n) {
          a = o[e] = [t, n];
        });
        t.push((a[2] = r));
        var c,
          d = document.createElement("script");
        (d.charset = "utf-8"),
          (d.timeout = 120),
          u.nc && d.setAttribute("nonce", u.nc),
          (d.src = s(e)),
          (c = function (t) {
            (d.onerror = d.onload = null), clearTimeout(l);
            var n = o[e];
            if (0 !== n) {
              if (n) {
                var a = t && ("load" === t.type ? "missing" : t.type),
                  i = t && t.target && t.target.src,
                  r = new Error(
                    "Loading chunk " + e + " failed.\n(" + a + ": " + i + ")"
                  );
                (r.type = a), (r.request = i), n[1](r);
              }
              o[e] = void 0;
            }
          });
        var l = setTimeout(function () {
          c({ type: "timeout", target: d });
        }, 12e4);
        (d.onerror = d.onload = c), document.head.appendChild(d);
      }
    return Promise.all(t);
  }),
    (u.m = e),
    (u.c = a),
    (u.d = function (e, t, n) {
      u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (u.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (u.t = function (e, t) {
      if ((1 & t && (e = u(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (u.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          u.d(
            n,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (u.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return u.d(t, "a", t), t;
    }),
    (u.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (u.p = "https://audience.ahaslides.com/"),
    (u.oe = function (e) {
      throw (console.error(e), e);
    });
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    d = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var l = 0; l < c.length; l++) t(c[l]);
  var p = d;
  r.push([1, "chunk-vendors"]), n();
})({
  0: function (e, t) {},
  "0025": function (e, t, n) {
    "use strict";
    var a = {},
      i = { submitQuizAnswerType: "live-proxy-submit-quiz" },
      o = function (e) {
        return new Promise(function (t, n) {
          a[e] = { resolve: t, reject: n };
        });
      };
    t["a"] = {
      subscribe: o,
      constantObjectSubcriptionType: i,
      objectSubcription: a,
    };
  },
  "0327": function (e, t, n) {},
  "0558": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return u;
    });
    n("6b54"), n("87b3"), n("ac6a"), n("f3e2"), n("57e7");
    var a = n("d225"),
      i = n("b0b4"),
      o = n("f77e"),
      r = { once: !1 },
      s = (function () {
        function e() {
          Object(a["a"])(this, e), (this.callbacks = {});
        }
        return (
          Object(i["a"])(e, [
            {
              key: "_getCallbacks",
              value: function (e) {
                return e && this.callbacks[e] ? this.callbacks[e] : [];
              },
            },
            {
              key: "_addCallback",
              value: function (e, t) {
                if (!e)
                  throw new Error(
                    "Can not add callback for following key: ".concat(e)
                  );
                this.callbacks[e] || (this.callbacks[e] = []),
                  this.callbacks[e].push(t);
              },
            },
            {
              key: "_setCallback",
              value: function (e, t) {
                if (!e)
                  throw new Error(
                    "Can not set callback for following key: ".concat(e)
                  );
                this.callbacks[e] = [t];
              },
            },
            {
              key: "_removeCallbacks",
              value: function (e, t) {
                var n = this._getCallbacks(e);
                if (t) {
                  var a = n.indexOf(t);
                  a > -1 && n.splice(a, 1);
                } else delete this.callbacks[e];
              },
            },
            {
              key: "init",
              value: function () {
                var e = this;
                o["a"].on("message", function (t, n, a) {
                  var i = e._getCallbacks(t);
                  i.forEach(function (e) {
                    e(n.toString(), a);
                  });
                });
              },
            },
            {
              key: "subscribeResourceUri",
              value: function (e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : r;
                n.once ? this._setCallback(e, t) : this._addCallback(e, t),
                  o["a"].subscribe(e);
              },
            },
            {
              key: "unsubscribeResourceUri",
              value: function (e, t) {
                this._removeCallbacks(e, t), o["a"].unsubscribe(e);
              },
            },
          ]),
          e
        );
      })(),
      u = new s();
  },
  "069e": function (e, t, n) {
    "use strict";
    var a = 1,
      i = 2,
      o = 3,
      r = 4,
      s = 5;
    t["a"] = {
      LOBBY_SCREEN: a,
      RULE_SCREEN: i,
      QUESTION_SCREEN: r,
      COUNTDOWN_5S_SCREEN: o,
      RESULT_SCREEN: s,
    };
  },
  "0b9a": function (e, t, n) {
    var a = {
      "./CaretRight.svg": "2374",
      "./Excel.svg": "5752",
      "./PowerPoint.svg": "6486",
      "./Teams.svg": "aa12",
      "./add-colored.svg": "fe47",
      "./add.svg": "1ebb",
      "./aha-chat-circle.svg": "5735",
      "./aha-fire.svg": "c682",
      "./aha-hand-pointing.svg": "6a30",
      "./aha-hourglass-high.svg": "b454",
      "./aha-music-notes.svg": "58a6",
      "./aha-question.svg": "6b2c",
      "./aha-shuffle.svg": "42c6",
      "./aha-smiley.svg": "a19b",
      "./aha-user-circle.svg": "852a",
      "./aha-users-three.svg": "c32d",
      "./ai-generate-button-disabled.svg": "4562",
      "./ai-generate-button.svg": "761b",
      "./ai-sparkle.svg": "c98f",
      "./analytical.svg": "0328",
      "./answered.svg": "434d",
      "./arrow-clock-wise-rtl.svg": "26ee",
      "./arrow-clock-wise.svg": "5365",
      "./arrow-left.svg": "931e",
      "./arrow-no-tail-black.svg": "115f",
      "./arrow-no-tail-white.svg": "98a8",
      "./arrow-no-tail.svg": "7de2",
      "./arrow-square-out.svg": "1212",
      "./arrow-tail.svg": "52f5",
      "./arrow.svg": "33a42",
      "./arrows-clock-wise.svg": "aeff",
      "./arrows-exchange.svg": "6899",
      "./audience-feedback.svg": "a92a",
      "./audience.svg": "8eb6",
      "./award.svg": "2033",
      "./b-key.svg": "cbb6",
      "./backstage.svg": "4c9d",
      "./banned.svg": "5969",
      "./bar-chart-square.svg": "2d21",
      "./bill.svg": "be0d",
      "./bin-empty.svg": "cf41",
      "./blink.svg": "627e",
      "./bottom_direction.svg": "6dc8",
      "./brainstorm-white.svg": "9cc6",
      "./brainstorm.svg": "6a08",
      "./bring-forward.svg": "383c",
      "./bring-to-front.svg": "ff20",
      "./c-key.svg": "6b27",
      "./categorise-white.svg": "3e14",
      "./categorise.svg": "5064",
      "./change-text-color.svg": "0e40",
      "./chat-canvas-noti.svg": "ba21",
      "./chat-canvas.svg": "d2ca",
      "./chat.svg": "4022",
      "./chat2.svg": "92b3",
      "./chatGPT-white.svg": "3f27",
      "./chatGPT.svg": "f743",
      "./check.svg": "fbf4",
      "./chevron-down-new.svg": "4367",
      "./chevron-down.svg": "0e27",
      "./chevron-right-2.svg": "92c3",
      "./chevron-right.svg": "ffbd",
      "./chevron-up-new.svg": "4854",
      "./circle-audience-color.svg": "86e1",
      "./circle-audience.svg": "0029",
      "./circle-check-mark-color.svg": "fe49",
      "./circle-check-mark.svg": "506b",
      "./circle-check-with-border.svg": "9d88",
      "./circle-check.svg": "913b",
      "./circle-heart-color.svg": "2041",
      "./circle-heart.svg": "48a7",
      "./circle-star-color.svg": "ea38",
      "./circle-star.svg": "2107",
      "./circle-submission-color.svg": "44c7",
      "./circle-submission.svg": "4f70",
      "./clear.svg": "91f9",
      "./clip.svg": "3db0",
      "./close-o.svg": "16ef",
      "./close-round.svg": "597a",
      "./close-small.svg": "e515",
      "./close-v2.svg": "6212",
      "./close.svg": "5765",
      "./cloud-colored.svg": "c29a",
      "./cloud-import.svg": "6eb4",
      "./cloud.svg": "805a",
      "./coin.svg": "8dcd",
      "./comment.svg": "66f9",
      "./community-v2.svg": "8eb2",
      "./community.svg": "6fad",
      "./connection-error.svg": "6675",
      "./connection-good.svg": "e1d6",
      "./connection-unstable.svg": "7f35",
      "./content-w.svg": "df9b",
      "./content.svg": "f527",
      "./copy-b.svg": "9977",
      "./copy-icon.svg": "8811",
      "./copy-regular.svg": "13ad",
      "./copy-to-another-slide.svg": "a14d",
      "./copy-to-workspace.svg": "c3a9",
      "./copy.svg": "8a3d",
      "./correct-order-w.svg": "fbb2",
      "./correct-order.svg": "9250",
      "./correct.svg": "4529",
      "./countdown-timer-w.svg": "fcc6",
      "./countdown-timer.svg": "610f",
      "./creative.svg": "93bb",
      "./ctrl-key.svg": "e8ec",
      "./cut.svg": "10c6",
      "./d-key.svg": "6c00",
      "./default-thumbnail.svg": "4871",
      "./default_direction.svg": "5fdc",
      "./delete-key.svg": "d5aa",
      "./delete.svg": "1822",
      "./delete2.svg": "212b",
      "./dislike.svg": "7281",
      "./document-dark.svg": "23e3",
      "./document-excel.svg": "c57c",
      "./document-w.svg": "d5d1",
      "./document.svg": "98f2",
      "./documents.svg": "0db0",
      "./donut-w.svg": "22d9",
      "./donut.svg": "d944",
      "./down.svg": "d7b1",
      "./download-2.svg": "3b78",
      "./download.svg": "5bd5",
      "./draw.svg": "b547",
      "./duplicate.svg": "22cb",
      "./duplicated.svg": "2671",
      "./edit-2.svg": "6a45",
      "./edit-outline.svg": "e546",
      "./edit.svg": "9461",
      "./embed-dark.svg": "3a5a",
      "./embed.svg": "4b26",
      "./empty-photo.svg": "9684",
      "./error.svg": "911c",
      "./export-2.svg": "356f",
      "./export.svg": "a858",
      "./f-key.svg": "a471",
      "./fb.svg": "683c",
      "./feedback-filled.svg": "64c0",
      "./feedback-solid.svg": "2d60",
      "./feedback.svg": "c2c6",
      "./file-audio.svg": "f315",
      "./file-import.svg": "6dd4",
      "./file-text.svg": "45b2",
      "./file.svg": "dd2a",
      "./flag-checkered.svg": "c271",
      "./flip-horizontal.svg": "4444",
      "./flip-vertical.svg": "487f",
      "./folder.svg": "b09e",
      "./gg.svg": "13f9",
      "./gif.svg": "2817",
      "./globe.svg": "ce39",
      "./google-drive.svg": "0bfc",
      "./google-slides-brand-b.svg": "3b7e",
      "./google-slides-brand-w.svg": "b4ac",
      "./google-slides-icon.svg": "dc92",
      "./google-slides-round.svg": "919b",
      "./google-slides-w.svg": "8182",
      "./google-slides.svg": "6ee4",
      "./googleslide.svg": "6ff8",
      "./grid-4-dots.svg": "5aaa",
      "./grid-9-dots.svg": "300c",
      "./grid-w.svg": "bd51",
      "./grouping-open-ended.svg": "ea54",
      "./guess-number.svg": "c5846",
      "./h-key.svg": "3fc2",
      "./hamburger-light.svg": "36dc",
      "./hamburger-menu.svg": "c06f",
      "./hand-pointer.svg": "26eb",
      "./heading-w.svg": "ed43",
      "./heading.svg": "092f",
      "./heart.svg": "479e",
      "./hide.svg": "7b2e",
      "./hide_correct_answer.svg": "aeb4",
      "./hide_result.svg": "9ebe",
      "./hint.svg": "fe14",
      "./home.svg": "00f2",
      "./hourglass.svg": "1528",
      "./humorous.svg": "a5cb",
      "./icon-multiple-language.svg": "faf1",
      "./idea.svg": "abaf",
      "./idea_suggestion.svg": "132e",
      "./image-choice-w.svg": "f7e4",
      "./image-choice.svg": "bb69",
      "./image-w.svg": "bbde",
      "./image.svg": "7df8",
      "./import-no-background.svg": "137a",
      "./import.svg": "4bab",
      "./inb.svg": "9484",
      "./incorrect.svg": "879b",
      "./info-circle.svg": "4cc1",
      "./information.svg": "2231",
      "./inspiration.svg": "3d8f",
      "./integration-instructions-rounded.svg": "9a70",
      "./integrations.svg": "71af",
      "./invite-v2.svg": "e8aa",
      "./invite.svg": "bcb1",
      "./k-button.svg": "2aa7",
      "./kebab-menu-share.svg": "68dc",
      "./kebab-menu.svg": "6b850",
      "./key.svg": "0d1c",
      "./keyboard-enter.svg": "1688",
      "./laptop-and-pc.svg": "3edf",
      "./laugh.svg": "2cb6",
      "./laught.svg": "86b9",
      "./left_direction.svg": "70ab",
      "./lengthen.svg": "8e22",
      "./lightbulb.svg": "a88a",
      "./like.svg": "78e8",
      "./line-arrow.svg": "b170",
      "./line.svg": "821c",
      "./link-icon.svg": "6ee46",
      "./list-type.svg": "809a",
      "./list-w.svg": "31bc",
      "./list.svg": "b681",
      "./lock-sub.svg": "79890",
      "./lock.svg": "1413",
      "./lockv2.svg": "9e4b",
      "./logo-full.svg": "65a0",
      "./logo-icon-only.svg": "8522",
      "./logo-loader.svg": "1449",
      "./logo.svg": "a6bb",
      "./logout.svg": "eacf",
      "./magic-slide.svg": "2864",
      "./magic-wand-colored.svg": "8e57",
      "./mail.svg": "4451",
      "./match-pairs-w.svg": "8697",
      "./match-pairs.svg": "a5cc",
      "./meta-key.svg": "a3af",
      "./microsoft.svg": "9122",
      "./minus.svg": "7aa1",
      "./miro-w.svg": "ee13",
      "./miro.svg": "4d21",
      "./more.svg": "b098",
      "./move.svg": "c5ee",
      "./ms-teams.svg": "6a39",
      "./mti-check.svg": "fba9",
      "./mti-comment.svg": "4c4b",
      "./mti-content.svg": "6b2f",
      "./mti-type-answer-w.svg": "1b9c",
      "./mti-type-answer.svg": "356e",
      "./multiple-choice-w.svg": "db8c",
      "./multiple-choice.svg": "1a89",
      "./music-note.svg": "eafd",
      "./music.svg": "06d6",
      "./name.svg": "a2df",
      "./newfolder.svg": "d061",
      "./no-presentation.svg": "1f08",
      "./no-result.svg": "f851",
      "./note-side-left-fill.svg": "fe9c",
      "./note-side-left.svg": "0ed9",
      "./note.svg": "62bd",
      "./one-by-one-w.svg": "74b1",
      "./one-by-one.svg": "962c",
      "./open-ended-w.svg": "4160",
      "./open-ended.svg": "3dd6",
      "./open-new-window.svg": "be7d",
      "./paint.svg": "34cc",
      "./palette-2.svg": "0e924",
      "./palette.svg": "228e",
      "./paste.svg": "f102",
      "./pause.svg": "e3f7",
      "./payment.svg": "c878",
      "./pen.svg": "88cf",
      "./pending.svg": "36dd",
      "./people-group.svg": "db291",
      "./people.svg": "854e",
      "./phone-o.svg": "d372",
      "./phone-share.svg": "90ab",
      "./phone.svg": "d7f5",
      "./phosphor-Gear.svg": "d0c6",
      "./phosphor-MagicWand.svg": "c989",
      "./phosphor-MusicNotesSimple.svg": "557b",
      "./phosphor-Palette.svg": "59ee",
      "./phosphor-PencilSimpleLine.svg": "76a2",
      "./phosphor-Sparkle.svg": "62d7",
      "./pick-answer-w.svg": "3204",
      "./pick-answer.svg": "500a",
      "./pick-image-w.svg": "1576",
      "./pick-image.svg": "20f2",
      "./piechart-w.svg": "831b",
      "./piechart.svg": "fd3b",
      "./pin-on-image.svg": "0653",
      "./play.svg": "9d85",
      "./plus-new.svg": "690f",
      "./poll-colored.svg": "e556",
      "./poll.svg": "9a6b",
      "./polygon.svg": "d36c",
      "./ppt-add-in.svg": "cb5ac",
      "./present.svg": "f1c9",
      "./presentations.svg": "36ab",
      "./presenter-light.svg": "72c9",
      "./presenter-solid.svg": "1492",
      "./presenter.svg": "41e3",
      "./professsional.svg": "0571",
      "./profile-light-dark.svg": "1afa",
      "./profile-light.svg": "db19",
      "./profile-solid.svg": "0ef4",
      "./profile.svg": "c022",
      "./profile_info.svg": "45c8",
      "./profile_logout.svg": "6327",
      "./profile_terms.svg": "31fd",
      "./profile_tutorial.svg": "ab02",
      "./q&a-w.svg": "e3cd",
      "./qa.svg": "0f4b",
      "./qna-colored.svg": "993a",
      "./qr-code-w.svg": "07c9",
      "./qr-code.svg": "25e5",
      "./qr-code2.svg": "d845",
      "./question-top-bar.svg": "72f7",
      "./question.svg": "8d06",
      "./quiz-answer.svg": "b3af",
      "./received-checked.svg": "8a5d",
      "./reconnecting.svg": "3397",
      "./redo.svg": "566a",
      "./reload.svg": "28b5",
      "./remove.svg": "bafd",
      "./replay.svg": "ad34",
      "./reposition.svg": "4e01",
      "./request.svg": "ad30",
      "./reset.svg": "6186",
      "./restore.svg": "50ff",
      "./return-key.svg": "4a09",
      "./review-slides.svg": "a19d",
      "./ribbon-star.svg": "8126",
      "./right_direction.svg": "c0c9",
      "./rotate-left.svg": "0aa1",
      "./rotate-right.svg": "529a",
      "./sad.svg": "c313",
      "./save.svg": "69f3",
      "./scales-w.svg": "8866",
      "./scales.svg": "9dbd",
      "./search.svg": "0c8d",
      "./selected-hint.svg": "81b0",
      "./send-backward.svg": "ddaf",
      "./send-button.svg": "dd3e",
      "./send-rotate.svg": "6beb",
      "./send-to-back.svg": "ed6a",
      "./send.svg": "6341",
      "./setting-top-bar.svg": "da8b",
      "./setting.svg": "d307",
      "./shape-circle.svg": "65e0",
      "./shape-square.svg": "366f",
      "./shape-star.svg": "6074",
      "./shape-triangle.svg": "4999",
      "./shape.svg": "40c4",
      "./share-collab.svg": "157a",
      "./share-new.svg": "6db5",
      "./share-v2.svg": "f19e",
      "./share.svg": "3eb8",
      "./shared-folder.svg": "184d",
      "./shift-key.svg": "62de",
      "./shorten.svg": "0e70",
      "./show_correct_answer.svg": "f7cc",
      "./show_result.svg": "1b84",
      "./shuffle.svg": "e00b",
      "./slide.svg": "ea1a",
      "./slides.svg": "5d75",
      "./sparkles-black.svg": "02cd",
      "./sparkles-outline.svg": "8812",
      "./sparkles-white.svg": "08a0",
      "./sparkles.svg": "1898",
      "./spellchecker.svg": "f496",
      "./spinner-wheel-bg-dark-v2.svg": "c41e",
      "./spinner-wheel-bg-dark.svg": "2c40",
      "./spinner-wheel-bg-white-v2.svg": "8592",
      "./spinner-wheel-bg-white.svg": "31ff",
      "./spinner-wheel-colored.svg": "8b1a",
      "./spinner-wheel-w.svg": "d68f",
      "./spinner-wheel.svg": "23df",
      "./spinner.svg": "0848",
      "./star-fill.svg": "6e90",
      "./star-half.svg": "f930",
      "./stop-dark.svg": "36a7",
      "./stopwatch.svg": "563f",
      "./streak.svg": "d1ef",
      "./template.svg": "b823",
      "./tenor.svg": "a821",
      "./terms.svg": "f37c",
      "./text.svg": "7e5d",
      "./thin-open-window.svg": "856e",
      "./thumb-up.svg": "5bfd",
      "./timer.svg": "2cd0",
      "./trash-new.svg": "e349",
      "./trophy-colored.svg": "f0e3",
      "./trophy-outlined.svg": "1b86",
      "./trophy.svg": "db69",
      "./tutorial.svg": "7c34",
      "./tutorial_video.svg": "4995",
      "./type-answer-w.svg": "d6bc",
      "./type-answer.svg": "a5a7",
      "./type-image.svg": "c976",
      "./undo.svg": "65e02",
      "./unhide.svg": "2347",
      "./unlock.svg": "5d9d",
      "./unlockv2.svg": "fb07",
      "./unsplash.svg": "577b",
      "./up_direction.svg": "039f",
      "./upload-image.svg": "47ea",
      "./user-solid.svg": "f3ce",
      "./users.svg": "16fb",
      "./v-key.svg": "4549",
      "./videos.svg": "dd61",
      "./warning-circle.svg": "d8c1",
      "./warning.svg": "7854",
      "./whats-new.svg": "f220",
      "./whats-new_red.svg": "a51d",
      "./wheel-background.svg": "6338",
      "./wider-than-1180px.svg": "183a",
      "./word-cloud-grouping.svg": "29e7",
      "./word-cloud-w.svg": "5915",
      "./word-cloud.svg": "a813",
      "./wow.svg": "a910",
      "./x-key.svg": "dd25",
      "./youtube-w.svg": "ba3b",
      "./youtube.svg": "30d2",
      "./z-key.svg": "a188",
      "./zoom-in.svg": "a370",
      "./zoom-out.svg": "3cc7",
      "./zoom.svg": "79b7",
    };
    function i(e) {
      var t = o(e);
      return n(t);
    }
    function o(e) {
      var t = a[e];
      if (!(t + 1)) {
        var n = new Error("Cannot find module '" + e + "'");
        throw ((n.code = "MODULE_NOT_FOUND"), n);
      }
      return t;
    }
    (i.keys = function () {
      return Object.keys(a);
    }),
      (i.resolve = o),
      (e.exports = i),
      (i.id = "0b9a");
  },
  "0c12": function (e, t, n) {
    "use strict";
    var a = n("2b0e"),
      i = new a["default"]();
    t["a"] = i;
  },
  "0e11": function (e) {
    e.exports = {
      enjoyThisPresentationFooterBanner:
        "Godetevi questa presentazione? Coinvolgere il pubblico proprio gratis su AhaSlides.",
      letsGoFooterBanner: "Andiamo",
      getStartedWithAhaSlides: "Inizia con AhaSlides",
      makeFreeQuiz: "Rendere il proprio quiz gratis",
      orTryToReload:
        "O provare a <a class='link-reload' @click='reloadPage()'>ricaricare</a>",
      audienceSeeContent: "Guardate lo schermo del presentatore.",
      mandatoryFieldError: "Questo campo è obbligatorio.",
      joinNow: "Unisciti ora",
      disconnectError:
        "Si è verificato un problema durante la connessione al server. Per favore riprova!",
      playAudioNow: "Riproduci la traccia audio ora",
      startTheConversation: "Inizia la conversazione!",
      noChatMessagesYet: "Non ci sono ancora messaggi.",
      typeSomethingToSayHi: "Scrivi qualcosa per dire ciao!",
      numberQuestionOfQuizCompleted: "Domanda {msg} di {num} completata",
      numberQuestionOfQuiz: "Domanda {msg} di {num}",
      you: "Tu",
      enterYourMessage: "Inserisci il tuo messaggio...",
      hasLeft: "se n'è andato",
      hasJoined: "si è unita",
      powerBy: "AhaSlides",
      term: "Termini",
      thankScreen: "Grazie per la tua partecipazione!",
      exitAndVote: "Esci e vota per un'altra presentazione",
      tryingReconnect: "Tentativo di riconnessione…",
      establishConnection:
        "Impossibile stabilire una connessione stabile. Prova a ricaricare questa pagina.",
      reloadTextLink: "Ricarica",
      ignoreButton: "Ignora",
      noneOptionsCorrect: "Nessuna delle opzioni è corretta!",
      clickToSeeFullSize:
        "Fai clic su un'immagine per vederla a schermo intero.",
      multipleChoiceInstruction: "Puoi scegliere fino a",
      options: "opzioni",
      quizYouMustPickAll: "Devi scegliere tutte le risposte corrette.",
      mustNotPickIncorrectAnswer:
        "Scegli quante più risposte corrette possibili, ma non scegliere alcuna risposta errata.",
      youCanPickAnyCorrectAnswer:
        "Puoi scegliere una qualsiasi delle risposte corrette.",
      choicesLeft: "scelte rimaste",
      alreadyAnswer: "Hai già risposto a questa domanda.",
      waitingScreen: "Attendi che il presentatore mostri la slide successiva.",
      stopSubmission: "Attendi che il presentatore la apra.",
      submissionClosedButton: "Invio non accettato.",
      openendedSubmissionFail:
        "Invio non riuscito. Verifica la connessione e riprova.",
      closeAvatar: "Chiudi",
      qnaQuestionPlaceholder: "Scrivi la tua domanda qui...",
      submit: "Invia",
      topQuestionsAudience: "In evidenza",
      newQuestionsAudience: "Nuovo",
      answeredQuestions: "Già risposto",
      myQuestions: "Le mie domande",
      enterYourNameWarning: "Per favore inserisci il tuo nome.",
      enterQuestionWarning: "Per favore, inserisci la tua domanda.",
      enterYourNameOptional: "Il tuo nome.. (opzionale)",
      yourNamePlaceholder: "Il tuo nome.. (necessario)",
      askQuestionButton: "Fai una domanda",
      waitAndSeeHowYouDid: "Aspettiamo e vediamo come hai fatto ...",
      dragAndDropStatements:
        "Trascina e rilascia le frasi per metterle in ordine.",
      seeCorrectAnswer: "Vedi la risposta corretta",
      seeYourAnswer: "Vedi la tua risposta",
      shareThisOn: "Condividi su",
      congratulations: "Congratulazioni",
      quizCompleted: "Quiz Completato!",
      amazing: "Sorprendente!",
      greatWork: "Ottimo lavoro!",
      goodJob: "Molto bene!",
      betterLuckNextTime: "La prossima volta sarai più fortunato!",
      thisQuizWasMadeBy: "Questo quiz è stato realizzato da {name}",
      yourFinalScoreIs: "Il tuo punteggio finale è {msg}.",
      points: "punti",
      haventAnsweredAnyQuiz: "Non hai risposto a nessuna domanda del quiz.",
      youAreInPlace: "Sei nel {msg} ° posto su {msg1} giocatori",
      yourTeamScoreIs: "Il punteggio della tua squadra è {msg}",
      teamHasntAnsweredAnyQuiz:
        "Il tuo team non ha risposto a nessuna domanda del quiz.",
      yourTeamInPlaceTeams:
        "La tua squadra è arrivata al posto {msg} su {num} squadre.",
      youFinishedInThe: "Hai finito al",
      topPercentage: "primo {number}%",
      ofAllPlayers: "di tutti i giocatori",
      yourTeamFinishedInThe: "La tua squadra ha finito al",
      ofAllTeams: "di tutte le squadre",
      dontForgetToShowSupport:
        "Per favore, non dimenticare di mostrare il tuo supporto!",
      correctAnswerTitle: "Risposta corretta",
      noCorrectAnswer: "Non c'è una risposta corretta.",
      alsoAccepted: "Accettato anche",
      wrongAnswer: "Risposta sbagliata!",
      timesUp: "Tempo scaduto!",
      correctAnswer: "Corretta!",
      partiallyCorrect: "Parzialmente corretto",
      submitted: "Inviato",
      finishButton: "Finito",
      nextButton: "Prossima slide",
      youPickedCorrectAnswers: "Hai ottenuto {msg} su {num} risposte corrette.",
      youMissedCorrectAnswer: "Non hai indovinato {msg} risposta corretta.",
      youMissedCorrectAnswers: "Non hai indovinato {msg} risposte corrette.",
      runOutOfTime: "Oh no, hai esaurito il tempo.",
      youHaveWonPoint: "Hai totalizzato {msg} punto per questa domanda",
      youHaveWonPoints: "Hai totalizzato {msg} punti per questa domanda",
      youScoredPointsForYourTeam:
        "Hai totalizzato {msg} punti per la tua squadra.",
      youScoredPoints: "Hai totalizzato {msg} punti.",
      yourTeamWonPointTotal:
        "In totale per questa domanda, la tua squadra ha ottenuto {msg} punti",
      noOneAnsweredInTime:
        "Nessun altro nella tua squadra ha risposto in tempo.",
      youHaveWonPointForTeam: "Hai ottenuto {msg} punto per la tua squadra",
      youHaveWonPointsForTeam: "Hai ottenuto {msg} punti per la tua squadra",
      hasAlreadyAnswered: "{msg} ha già risposto.",
      youWereFastestInTeam: "Sei stato il più veloce nella tua squadra.",
      yourAnswerNotCount: "Risposta non valida",
      yourTeamWonPoint: "La tua squadra ha totalizzato {msg} punto.",
      yourTeamWonPoints: "La tua squadra ha totalizzato {msg} punti.",
      yourTeamWonPointsTotal:
        "In totale per questa domanda, la tua squadra ha totalizzato {msg} punti",
      youScoredPointForYourTeam:
        "Hai totalizzato {msg} punto per la tua squadra.",
      youScoredPoint: "Hai totalizzato {msg} punto.",
      youAnsweredIn: "Hai risposto in {msg} (te ne rimangono{num} )!",
      typeYourAnswer: "Scrivi la tua risposta...",
      enterYourName: "Inserisci il tuo nome",
      pickYourTeam: "Scegli la tua squadra:",
      teamIsFull: "Questa squadra è al completo, per favore scegline un'altra.",
      chooseEmoji: "Scegli un emoji come avatar",
      changeButton: "Cambia avatar ..",
      joinTheGameButton: "Unisciti al gioco!",
      "Post to {msg}": "Pubblica su {msg}",
      "I just finished a super fun quiz on AhaSlides":
        "Ho appena finito un quiz super divertente su AhaSlides",
      Skip: "Saltare",
      audiencePacingWaitingScreen: "Hai già risposto a questa domanda.",
      seeSlideOnPresenterScreen: "Guarda le slide sullo schermo del relatore.",
      blankSlide:
        "Non ci sono ancora contenuti in questa slide. Attendi che il relatore aggiunga qualcosa.",
      voteLeft: "Hai ancora {msg} voto.",
      votesLeft: "Hai ancora {msg} voti.",
      votingClosed: "Votazioni chiuse.",
      allTab: "Tutto",
      mySubmissionTab: "I miei contributi",
      votedTab: "Votato",
      canUnvote: "Puoi annullare il voto se vuoi.",
      seeResult: "Guarda i risultati",
      noResultYet: "Ancora nessun risultato",
      players: "{msg} giocatori",
      yourTotalScoreIs: "Il tuo punteggio totale è {msg}",
      team: "squadra",
      teams: "squadre",
      "Show Individual Ranking": "Mostra la classifica individuale",
      "Show Team Ranking": "Mostra la classifica delle squadre",
      writeYourIdea: "Scrivi la tua idea...",
      uploadImage: "Carica immagine",
      changeImage: "Cambia immagine",
      remove: "Rimuovi",
      youHaveMade: "Hai fatto",
      submissions: "idee",
      maxExceededCannotSubmit: "Limite massimo superato. Non puoi più inviare.",
      submitMultipleTimes: "Puoi inviare più volte.",
      "open-endedInstructionSubmission":
        "Grazie per il tuo contributo! Puoi inviarne un altro, se lo desideri.",
      youCanSubmitOnce: "Puoi inviare una sola volta.",
      eachCanOnlySubmitOnce: "Ogni partecipante può inviare una sola volta.",
      startVoting: "Inizia a votare",
      nextSlideButton: "Prossima slide",
      invalidEmail: "E-mail non valida",
      getReady: "Preparati a giocare!",
      youAreIn: "Sei in {msg}",
      changeTeam: "cambia squadra",
      questionWillStartSoon: "La domanda inizierà presto.",
      fasterGetMorePointsRule:
        "Questa domanda dà più punti per risposte veloci",
      correctAnswerGetMaxPointTitle: "Rispondi prima che scada il tempo",
      correctAnswerGetMaxPointDetail:
        "(Nessun punto bonus per risposte più veloci)",
      pointShortcut: "p",
      quizIsNotOpen: "Il quiz non è aperto. Attendi l'avvio del presentatore.",
      slideQRCodeAudience:
        "Ti sei unito con successo. Mostra il codice QR qui sotto ad altri in modo che anche loro possano entrare.",
      resultsAreIn: "I risultati sono in ...",
      theWheelSpinning: "La ruota gira, guarda lo schermo del presentatore.",
      waitToSpinTheWheel: "Aspetta che il presentatore faccia girare la ruota!",
      enterWordPlaceholder: "Inserisci una parola...",
      addSpecialCharacter: "Si prega di non aggiungere caratteri speciali",
      answerWithSpace:
        "Le risposte con spazi saranno considerate come una sola parola.",
      errorWordCloudWhenLeaveBlank: "Per favore, inserisci la tua parola.",
      watchVideo: "Guarda il video sullo schermo del relatore.",
      outOfQuestionsYourTeam: "Su {number} domande, la tua squadra",
      gotCorrectRate: "totalizzato {number} risposta corretta",
      outOfQuestionsYou: "Su {number} domande, tu",
      wow: "Wow!",
      whatAPerformance: "Che spettacolo!",
      nicelyDone: "Ben fatto!",
      toughQuizRight: "Quiz difficile, vero?",
      seconds: "secondi",
      minutes: "minuti",
      minute: "minuto",
      popupNextSlide: "Il presentatore ha cambiato slide.",
      goToSlideButton: "Vai a slide",
      cancelButton: "Annulla",
      skipButton: "Passa alla slide successiva",
      "Match with...": "Abbina con...",
      presentationIsNotOpen:
        "Questa presentazione è in modalità privata. Una volta che il presentatore è passato alla modalità pubblica, è possibile vedere e interagire con le sue diapositive.",
      "Or try to": "Oppure prova a",
      "Enter your authentication code":
        "Inserisci il tuo codice di autenticazione",
      "Let me in": "Fammi entrare",
      "Make a free quiz": "Fai un quiz gratuito",
      "Enjoy this presentation?": "Ti piace questa presentazione?",
      "Get slides": "Ottieni le slide",
      "Presenter is calling…": "Il presentatore sta chiamando…",
      Accept: "Accetta",
      Decline: "Rifiuta",
      "Leave feedback...": "Lascia un feedback.",
      "Could be better": "Potrebbe andare meglio",
      "Not bad": "Non male",
      Good: "Bene",
      "Can't wait for the next": "Attendo il prossimo",
      "Feedback sent!": "Feedback inviato!",
      "Something went wrong, please try again.":
        "Qualcosa è andato storto, prova ancora.",
      "How's the presentation?": "Com'è la presentazione?",
      Send: "Inviare",
      Tutorials: "Tutorial",
      teamEarnsPointTotal: "La tua squadra ha totalizzato <b>{point}p</b>.",
      teamEarnsPointAverage:
        "La tua squadra in media ha totalizzato <b>{point}p</b>.",
      teamEarnsPointFastest:
        "La tua squadra ha totalizzato <b>{point}p</b> grazie a <b>{audienceName}</b>.",
      teamFastestAnswerIncorrect:
        "La risposta più veloce era sbagliata, la tua squadra totalizza <b>{point}p</b>.",
      teamFastestAnswerGetPoint:
        "Sei stato il più veloce, la tua squadra totalizza <b>{point}p</b>.",
      "💪 Keep up the great work!": "💪 Continua così, ottimo lavoro!",
      "Lose streak!": "Oh no! Serie interrotta!",
      Correct: "Corretto",
      "Double streak!": "Due di fila!",
      "Triple streak!": "Tre di fila!",
      "Four Streak!": "I fantastici quattro!",
      "Awesome!": "Eccezionale!",
      "Keep going!": "Continua così!",
      "Amazing!": "Fantastico lavoro!",
      "Good job!": "Ottimo lavoro!",
      Incorrect: "Errato",
      my_answers: "Le mie risposte",
      view_answers: "Visualizza le risposte",
      final_leaderboard: "Classifica finale",
      final_answers_stat:
        "Hai ottenuto <strong>{correctAnswers} / {totalQuiz} corrette</strong> ({correctRate}%)",
      final_ranking: "Posizione in classifica: <strong>{ranking}</strong>",
      your_answer: "La tua risposta",
      review_all_questions:
        "Puoi rivedere tutte le domande qui quando il quiz è finito.",
      not_answer: "Non hai risposto",
      your_answer_correct: "La tua risposta è corretta",
      your_answer_incorrect: "La tua risposta è sbagliata",
      your_answer_partially_correct: "La tua risposta è parzialmente corretta",
      you_missed_quiz: "Hai appena perso il quiz.",
      leaderboard: "Classifica",
      personal_no_quiz_answered: "Non hai risposto a nessun quiz",
      team_no_quiz_answered: "La tua squadra non ha risposto a nessun quiz",
      final_team_answers_stat:
        "La tua squadra ha risposto correttamente a <strong>{correctAnswers} / {totalQuiz} domande</strong> ({correctRate}%)",
      all_slides: "Tutte le slide",
      review_slides: "Rivedi le slide",
      view_all_slides_answers: "Visualizza tutte le slide e le risposte",
      review_all_slides_and_questions:
        "Puoi rivedere tutte le slide e le domande quando la presentazione finisce.",
      no_answer: "Nessuna risposta",
      sign_in_to_save_presentation: "Accedi per salvare questa presentazione",
      continue_with_google: "Continua con Google",
      present_with_ahaslides: "Presenta con AhaSlides",
      view_terms: "Visualizza termini",
      log_out: "Esci",
      attended: "Partecipato",
      your_future_presentations_shown_here:
        "Le tue presentazioni future verranno visualizzate qui",
      join_a_presentation: "Partecipa a una presentazione",
      presentation_details: "Dettagli presentazione",
      "Leaving the presentation": "Lasciando la presentazione",
      "This link will take you to a page that is not part of the presentation":
        "Questo collegamento ti porterà a una pagina che non fa parte della presentazione",
      thank_for_participation: "Grazie per la tua partecipazione! ❤️",
      give_feedback: "Fornisci un feedback",
      get_ahaslides_free: "Ottieni AhaSlides gratuitamente",
      exclusive_offer_hr_tech: "Offerta esclusiva per HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ Ottieni AhaSlides Plus gratuitamente ✨",
      ask_presenter_to_view_slides:
        "Per favore, chiedi al tuo presentatore l'autorizzazione a visualizzare le slide.",
      login: "Accedi",
      sign_up: "Registrati",
      or: "o",
      "Calculating your ranking…": "Calcolo della tua posizione in classifica…",
      categorise_unassined_option: "Totale risposte non assegnate",
      Reload: "Ricarica",
      "No internet. Retrying...": "Nessuna connessione a internet. Riprovo...",
    };
  },
  1: function (e, t, n) {
    e.exports = n("56d7");
  },
  1544: function (e, t, n) {
    "use strict";
    n("96cf");
    var a = n("3b8d"),
      i = n("cebc"),
      o = n("db49"),
      r = n("2b0e"),
      s = n("72af"),
      u = n("8a39"),
      c = n("0c45"),
      d = n("02c5"),
      l = n("2075"),
      p = [
        "zaloJSV2 is not defined",
        "Can't find variable: zaloJSV2",
        "ResizeObserver loop limit exceeded",
        "Cannot read property 'getReadModeConfig' of undefined",
        "Cannot read property 'getReadModeRender' of undefined",
        "Cannot read property 'getReadModeExtract' of undefined",
        "UnhandledRejection: Non-Error promise rejection captured with value: Object Not Found Matching Id:2",
      ],
      m = new s["a"]({ maskAllText: !1 }),
      g = function () {
        o["a"].isSentryEnabled &&
          u["a"]({
            release: o["a"].sentryRelease,
            dsn: o["a"].sentry,
            environment: o["a"].env,
            integrations: [new c["a"](), m],
            replaysSessionSampleRate: 0,
            replaysOnErrorSampleRate: 1,
            tracesSampleRate: 0,
            Vue: r["default"],
            ignoreErrors: p,
            denyUrls: [/analytics\.tiktok\.com/i],
            tracingOptions: { trackComponents: !0 },
          });
      },
      h = function (e, t) {
        if (o["a"].isSentryEnabled)
          try {
            d["c"](new Error(e), t);
          } catch (n) {}
      },
      b = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (o["a"].isSentryEnabled)
          try {
            var t = Object(i["a"])({}, e);
            "info" === e.level && (t.level = l["Severity"].Info), d["a"](t);
          } catch (n) {}
      },
      v = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (o["a"].sentryEnabled) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (e.prev = 2), (e.next = 5), m.flush();
                    case 5:
                      e.next = 10;
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e["catch"](2)), h(e.t0);
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 7]]
            );
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      f = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (o["a"].sentryEnabled) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (e.prev = 2), (e.next = 5), m.stop();
                    case 5:
                      e.next = 10;
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e["catch"](2)), h(e.t0);
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 7]]
            );
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    t["a"] = {
      init: g,
      captureException: h,
      addBreadcrumb: b,
      startSessionReplay: v,
      stopSessionReplay: f,
    };
  },
  1564: function (e, t, n) {
    "use strict";
    var a = n("ac42"),
      i = n.n(a);
    i.a;
  },
  "1a0a": function (e, t, n) {},
  "1b33": function (e, t, n) {},
  2: function (e, t) {},
  "20ba": function (e) {
    e.exports = {
      getReady: "Gatavojies spēlēt!",
      nextSlideButton: "Nākošā lapa",
      audiencePacingWaitingScreen: "Tu jau atbildēji uz šo jautājumu.",
      youAreInPlace: "Tu esi {msg}. no {msg1} spēlētājiem",
      yourTeamScoreIs: "Tavas komandas rezultāts ir {msg}",
      popupNextSlide: "Vadītājs ir mainījis lapu.",
      goToSlideButton: "Doties tālāk",
      cancelButton: "Atcelt",
      stopSubmission: "Lūdzu uzgaidi.",
      waitingScreen: "Lūdzu uzgaidi, kamēr vadītājs dodās uz nākošo lapu.",
      thankScreen: "Paldies par dalību!",
      blankSlide:
        "Šī lapa ir izstrādes procesā. Lūdzu uzgaidi, kamēr vadītājs to atjauno.",
      submitMultipleTimes: "Tu nevari iesniegt vairākas atbildes.",
      "open-endedInstructionSubmission":
        "Paldies par dalību! Ja vēlies, drīksti piedalīties vēlreiz.",
      multipleChoiceInstruction: "Tu vari izvēlēties līdz",
      options: "Iespējas",
      choicesLeft: "Izvēles pa kreisi",
      powerBy: "AhaSlides",
      term: "Nosacījumi",
      submissionClosedButton: "Pieteikšanās slēgta",
      submit: "Atbildēt",
      exitAndVote: "Iziet un balsot citā prezentācijā",
      nextButton: "Nākošā lapa",
      disconnectError:
        "Radās problēma pieslēdzoties serverim. Lūdzu, mēģini vēlreiz!",
      slideQRCodeAudience:
        "Tu esi veiksmiīgi pieslēdzies. Tu vari padalīties ar QR kodu apkārt esošajiem un palīdzēt pievienoties arī viņiem",
      openendedSubmissionFail:
        "Pieslēgšanās neveiksmīga. Lūgums pārbaudīt savienojumu un mēģināt vēlreiz.",
      watchVideo: "Lūdzu skaties video uz vadītāja ekrāna.",
      addSpecialCharacter: "Lūdzam nepievienot nestandarta rakstu zīmes",
      answerWithSpace: "Abildes ar atstarpēm tiks pieņemtas kā viens vārds.",
      skipButton: "Izlaist un doties uz nākošo lapu",
      enterWordPlaceholder: "Ievadi vārdu..",
      errorWordCloudWhenLeaveBlank: "Lūdzu ievadi savu variantu.",
      enterYourName: "Ievadi savu vārdu",
      chooseEmoji: "Izvēlies 'emoji' kā savu avatāru",
      changeButton: "Nomainīt avatāru..",
      joinTheGameButton: "Pievienoties spēlei!",
      fasterGetMorePointsRule:
        "Šajā jautājumā ir iespēja iegūt vairāk punktus par ātrāku atbildi",
      correctAnswerGetMaxPointTitle: "Atbildi pirms ir beidzies laiks",
      correctAnswerGetMaxPointDetail: "(Nav bonusa punkti par ātrāku atbildi)",
      quizIsNotOpen: "Viktorīna nav atvērta. Lūdzu uzgaidi.",
      reloadTextLink: "Atkārtoti pieslēdzas",
      numberQuestionOfQuiz: "{msg} no {num} jautājumiem",
      runOutOfTime: "Ak nē, laiks ir beidzies.",
      correctAnswer: "Pareizi!",
      youHaveWonPoint: "Šajā jautājumā esi ieguvis {msg} punktus!",
      waitAndSeeHowYouDid: "Aplūkosim, kā tev izdevās...",
      wrongAnswer: "Nepareiza atbilde!",
      minute: "minūte",
      minutes: "minūtes",
      seconds: "sekundes",
      players: "{msg} spēlētāji",
      timesUp: "Laiks beidzies!",
      points: "punkti",
      noResultYet: "Vēl nav rezultāti",
      pointShortcut: "p",
      youHaveWonPoints: "Tu esi ieguvis {msg} punktus par šo jautājumu",
      closeAvatar: "Aizvērt",
      yourTotalScoreIs: "Tavs rezultātis ir {msg}",
      betterLuckNextTime: "Neuztraucies, nākamreiz izdosies!",
      clickToSeeFullSize: "Spied uz attēlu, lai to atvērtu pilnā izmērā.",
      answeredQuestions: "Atbildēts",
      askQuestionButton: "Uzdot jautājumu",
      qnaQuestionPlaceholder: "Atbildi ievadi te...",
      enterYourNameOptional: "Tavs vārds... (nav obligāti)",
      topQuestionsAudience: "Top",
      newQuestionsAudience: "Jauns",
      enterYourNameWarning: "Lūdzu ievadi savu vārdu.",
      enterQuestionWarning: "Lūdzu ievadi savu jautājumu.",
      yourNamePlaceholder: "Tavs vārds... (obligāti)",
      finishButton: "Beigt",
      quizYouMustPickAll: "Tev jāizvēlās visas pareizās atbildes.",
      tryingReconnect: "Cenšās pieslēgties...",
      ignoreButton: "Ignorēt",
      establishConnection:
        "Neizdevās izveidot stabilu savienojumu. Lūgums atjaunot lapu.",
      partiallyCorrect: "Daļēji pareizi",
      youCanPickAnyCorrectAnswer:
        "Tu vari izvēlēties jebkuru no pareizajām atbildēm.",
      mustNotPickIncorrectAnswer:
        "Izvēlies pareizās atbildes neierobežotā skaitā, bet ņem vērā, ka nedrīksti izvēlēties nevienu nepareizo.",
      mandatoryFieldError: "Šis lauks ir obligāts.",
      typeYourAnswer: "Ieraksti savu atbildi...",
      noCorrectAnswer: "Nav neviena pareizā atbilde.",
      presentationIsNotOpen:
        "Šī prezentācija ir privātā režīmā. Kad prezentētājs ir pārslēdzies uz publisko režīmu, jūs varat apskatīt un mijiedarboties ar viņa slaidiem.",
      invalidEmail: "Nepareiza e-pasta adrese.",
      pickYourTeam: "Izvēlēties komandu:",
      teamIsFull: "Šajā komandā vairs nav vietas, lūdzu izvēlies citu.",
      changeTeam: "Mainīt komandu",
      youHaveWonPointForTeam: "Tu esi ieguvis {msg} punktu savai komandai",
      youHaveWonPointsForTeam: "Tu esi ieguvis {msg} punktus savai komandai",
      yourAnswerNotCount: "Tava atbilde netika ieskaitīta",
      hasAlreadyAnswered: "{msg} jau ir atbildējis",
      yourTeamWonPoint: "Tava komanda ir ieguvusi {msg} punktu",
      yourTeamWonPoints: "Tava komanda ir ieguvusi {msg} punktus",
      noOneAnsweredInTime:
        "Neviens cits tavā komandā nav paspējis atbildēt laikā.",
      yourFinalScoreIs: "Tavs punktu skaits ir {msg}.",
      youAreIn: "Tu esi {msg}",
      congratulations: "Apsveicam!",
      team: "komanda",
      teams: "komandas",
      "I just finished a super fun quiz on AhaSlides":
        "Es tikko pabeidzu super jautru testu platformā AhaSlides",
      "Post to {msg}": "Publicēt {msg}",
      numberQuestionOfQuizCompleted: "{msg} no {num} jautājumiem atbildēti",
      seeSlideOnPresenterScreen: "Lūdzu aplūko jautājumu vadītāja ekrānā.",
      "Show Individual Ranking": "Parādīt individuālo reitingu",
      "Show Team Ranking": "Parādīt komandas reitingu",
      Skip: "Izlaist",
      playAudioNow: "Lūdzu atskaņo audio ierakstu tagad",
      youMissedCorrectAnswer: "Tu palaidi garām {msg} pareizo atbildi",
      youMissedCorrectAnswers: "Tu palaidi garām {msg} pareizās atbildes",
      youPickedCorrectAnswers:
        "Tu izvēlējies {msg} no {num} pareizajām atbildēm",
      youWereFastestInTeam: "Tu esi ātrākais savā komandā!",
      yourTeamWonPointTotal:
        "Kopumā par šo jautājumu, tava komanda ir ieguvusi {msg} punktu",
      yourTeamWonPointsTotal:
        "Kopumā par šo jautājumu, tava komanda ir ieguvusi {msg} punktus",
      alsoAccepted: "Arī apstiprināts",
      youScoredPoints: "Tu ieguvi {msg} punktus.",
      youScoredPointsForYourTeam: "Tu ieguvi {msg} punktus savai komandai.",
      youScoredPointForYourTeam: "Tu ieguvi {msg} punktu savai komandai.",
      youScoredPoint: "Tu ieguvi {msg} punktu",
      submitted: "Iesniegts",
      correctAnswerTitle: "Pareiza atbilde",
      enjoyThisPresentationFooterBanner:
        "Vai patika viktorīna? Izveido pats savu bez maksas platformā AhaSlides",
      letsGoFooterBanner: "Aiziet!",
      getStartedWithAhaSlides: "Sākt ar AhaSlides",
      makeFreeQuiz: "Izveido savu bezmaksas testu",
      waitToSpinTheWheel: "Sagaidi līdz vadītājs iegriež laimes ratu!",
      theWheelSpinning: "Laimes rats griežās, skaties uz vadītāja ekrānu.",
      resultsAreIn: "Rezultāts būs pēc…",
      myQuestions: "Mani jautājumi",
      writeYourIdea: "Ieraksti savu ideju...",
      allTab: "Visi",
      mySubmissionTab: "Mani pieteikumi",
      votedTab: "Nobalsots",
      canUnvote: "Tu vari atcelt savu balsojumu, ja vēlies.",
      voteLeft: "Tev ir {msg} atlikuši balsojumi.",
      votingClosed: "Balsojums noslēgts.",
      startVoting: "Sākt balsošanu",
      seeResult: "Skatīt rezultātus",
      votesLeft: "Tev ir atlikušas {msg} balsis",
      submissions: "Pieteikumi",
      youCanSubmitOnce: "Tu vari iesniegt tikai vienreiz.",
      eachCanOnlySubmitOnce: "Katrs dalībnieks var iesniegt tikai vienreiz.",
      maxExceededCannotSubmit:
        "Maksimālais limits sasniegts. Tu vairs nevari iesniegt.",
      youHaveMade: "Tu esi veicis",
      noneOptionsCorrect: "Neviens no variantiem nav pareizs!",
      changeImage: "Mainīt attēlu",
      remove: "Noņemt",
      uploadImage: "Augšupielādēt attēlu",
      alreadyAnswer: "Tu jau atbildēji uz šo jautājumu.",
      joinNow: "Reģistrēties",
      quizCompleted: "Apsveicam!",
      questionWillStartSoon: "Spēle tulīt sāksies, gatavojies.",
      shareThisOn: "Dalīties",
      nicelyDone: "Ļoti labi!",
      outOfQuestionsYou: "No {number} jautājumiem, tev",
      gotCorrectRate: "ir izdevies pareizi atbildēt uz {number}",
      thisQuizWasMadeBy: "Viktorīnu veidoja {name}",
      dontForgetToShowSupport: "Paldies par dalību!",
      "Match with...": "Saskaņot ar...",
      orTryToReload:
        "Vai arī <a class='link-reload' @click='reloadPage()'>mēģiniet pārlādēt šo lapu</a>",
      "Or try to": "Vai arī",
      youAnsweredIn: "Tu esi atbildējis {msg} ({num} palikušas)!",
      wow: "Vau!",
      toughQuizRight: "Nav nemaz tik vienkārši, ne?",
      whatAPerformance: "Lieliski rezultāti!",
      audienceSeeContent: "Lūdzu, skatieties uz prezentētāja ekrānu.",
      yourTeamInPlaceTeams:
        "Jūsu komanda ieguva {msg} vietu no {num} komandām.",
      Decline: "Noraidīt",
      Accept: "Pieņemt",
      "Get slides": "Legūstiet slaidus",
      "Enjoy this presentation?": "Vai jums patīk šī prezentācija?",
      "Make a free quiz": "Izveidojiet bezmaksas viktorīnu",
      "Enter your authentication code": "Levadiet savu autentifikācijas kodu",
      "Let me in": "Lelaid mani",
      "Presenter is calling…": "Raidījuma vadītājs zvana…",
      outOfQuestionsYourTeam: "No {number} jautājumiem, jūsu komanda",
      startTheConversation: "Sāc sarunu!",
      noChatMessagesYet: "Vēl nav neviena tērzēšanas ziņojuma.",
      typeSomethingToSayHi: "Lerakstiet kaut ko, lai pateiktu sveiki!",
      you: "Tu",
      enterYourMessage: "Levadiet savu ziņojumu...",
      hasLeft: "ir aizgājis",
      hasJoined: "ir pievienojies",
      dragAndDropStatements:
        "Velciet un nometiet paziņojumus, lai sakārtotu tos",
      seeCorrectAnswer: "Skatīt pareizo atbildi",
      seeYourAnswer: "Skatiet savu atbildi",
      amazing: "Apbrīnojami!",
      greatWork: "Lielisks darbs!",
      goodJob: "Labs darbs!",
      haventAnsweredAnyQuiz:
        "Jūs neesat atbildējis uz nevienu viktorīnas jautājumu.",
      teamHasntAnsweredAnyQuiz:
        "Jūsu komanda nav atbildējusi ne uz vienu viktorīnas jautājumu.",
      youFinishedInThe: "Jūs pabeidzāt",
      topPercentage: "augšējais {number}%",
      ofAllPlayers: "visu spēlētāju starpā",
      yourTeamFinishedInThe: "Jūsu komanda finišēja",
      ofAllTeams: "starp visām komandām",
      "Could be better": "Varētu būt labāk",
      "Not bad": "Nav slikti",
      "Feedback sent!": "Atsauksmes nosūtītas!",
      "Leave feedback...": "Atstāj atsauksmi. Tas ir privāts...",
      Good: "Labi",
      "Can't wait for the next": "Nevaru sagaidīt nākamo",
      "Something went wrong, please try again.":
        "Radās problēma. Lūdzu, mēģiniet vēlreiz.",
      "How's the presentation?": "Kā prezentācija?",
      Send: "Nosūtiet",
      Tutorials: "Pamācības",
      teamEarnsPointAverage: "Tavs komanda vidēji iegūst <b>{point}p</b>.",
      teamFastestAnswerGetPoint:
        "Tu biji ātrākais, tavs komanda iegūst <b>{point}p</b>.",
      teamEarnsPointTotal: "Tavs komanda ieguva <b>{point}p</b> kopsummā.",
      teamEarnsPointFastest:
        "Tavs komanda iegūst <b>{point}p</b> pateicoties <b>{audienceName}</b>.",
      teamFastestAnswerIncorrect:
        "Ātrākais atbilde bija nepareiza, tavs komanda iegūst <b>{point}p</b>.",
      "💪 Keep up the great work!": "💪 Turpiniet ar lielisko darbu!",
      "Lose streak!": "Veiksme pārtraukta!",
      Correct: "Lieliski!",
      "Double streak!": "Fantastiski!",
      "Triple streak!": "Izcili!",
      "Four Streak!": "Brīnišķīgi!",
      "Awesome!": "Izcili veikts!",
      "Keep going!": "Apbrīnojami!",
      "Amazing!": "Brīnišķīgs darbs!",
      "Good job!": "Lielisks!",
      Incorrect: "Nepareizi",
      my_answers: "Manas atbildes",
      view_answers: "Skatīt atbildes",
      final_leaderboard: "Fināla līderu tabula",
      final_answers_stat:
        "Jums ir <strong>{correctAnswers} / {totalQuiz} pareizas</strong> ({correctRate}%)",
      final_ranking: "Vieta: <strong>{ranking}</strong>",
      your_answer: "Jūsu atbilde",
      review_all_questions:
        "Pēc viktorīnas beigām šeit varat pārskatīt visus jautājumus.",
      not_answer: "Jūs vēl neesat atbildējis",
      your_answer_correct: "Jūsu atbilde ir pareiza",
      your_answer_incorrect: "Jūsu atbilde ir kļūdaina",
      your_answer_partially_correct: "Jūsu atbilde ir daļēji pareiza",
      you_missed_quiz: "Jūs tikko nokavējāt viktorīnu.",
      leaderboard: "Rezultātu tabula",
      personal_no_quiz_answered: "Jūs neesat atbildējis uz nevienu viktorīnu",
      team_no_quiz_answered:
        "Jūsu komanda nav atbildējusi uz nevienu viktorīnu",
      final_team_answers_stat:
        "Jūsu komanda ir atbildējusi pareizi uz <strong>{correctAnswers} / {totalQuiz} jautājumiem</strong> ({correctRate}%)",
      all_slides: "Visas slaidi",
      review_slides: "Pārskatīt slaidus",
      view_all_slides_answers: "Skatīt visas slaidi un atbildes",
      review_all_slides_and_questions:
        "Jūs varat pārskatīt visas slaidi un jautājumus, kad prezentācija beidzas.",
      no_answer: "Nav atbildes",
      sign_in_to_save_presentation:
        "Pierakstieties, lai saglabātu šo prezentāciju",
      continue_with_google: "Turpināt ar Google",
      present_with_ahaslides: "Prezentēt ar AhaSlides",
      view_terms: "Skatīt noteikumus",
      log_out: "Izrakstīties",
      attended: "Apmeklēts",
      your_future_presentations_shown_here:
        "Jūsu nākotnes prezentācijas tiks parādītas šeit",
      join_a_presentation: "Pievienoties prezentācijai",
      presentation_details: "Prezentācijas detaļas",
      "Leaving the presentation": "Pārtraucot prezentāciju",
      "This link will take you to a page that is not part of the presentation":
        "Šis saite aizvedīs jūs uz lapu, kas nav daļa no prezentācijas",
      thank_for_participation: "Paldies par jūsu piedalīšanos! ❤️",
      give_feedback: "Sniegt atsauksmi",
      get_ahaslides_free: "Saņemt AhaSlides bez maksas",
      exclusive_offer_hr_tech: "Ekskluzīvs piedāvājums HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ Saņemt AhaSlides Plus bez maksas ✨",
      ask_presenter_to_view_slides:
        "Lūdzu, lūdziet savam prezentētājam atļauju skatīt slaidus.",
      login: "Pieteikties",
      sign_up: "Reģistrēties",
      or: "vai",
      Reload: "Pārlādēt",
      "No internet. Retrying...": "Nav interneta. Mēģinu vēlreiz...",
    };
  },
  2241: function (e, t, n) {
    "use strict";
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            staticClass: "logo",
            class: { "logo-audience": e.$store.state.logo },
          },
          [
            e.canShowCustomLogo()
              ? n("div", { staticClass: "logo-wrapper" }, [
                  n("img", {
                    attrs: { src: e.$store.state.logo.large, alt: "" },
                  }),
                ])
              : e._e(),
            e.canShowAhaSlideLogo()
              ? n(
                  "div",
                  {
                    staticClass: "logo-wrapper",
                    class: { "dark-theme": e.$store.state.isDarkTheme },
                  },
                  [
                    n("aha-logo", {
                      staticClass: "default-logo ahaslides-logo",
                      attrs: {
                        "icon-only": !1,
                        useDefaultColor: !0,
                        width: "156",
                        height: "26",
                      },
                    }),
                    n("aha-logo", {
                      staticClass: "white-logo ahaslides-logo",
                      attrs: {
                        "icon-only": !1,
                        useDefaultColor: !1,
                        width: "156",
                        height: "26",
                      },
                    }),
                  ],
                  1
                )
              : e._e(),
          ]
        );
      },
      i = [],
      o = n("cebc"),
      r = n("e0eb"),
      s = n("2f62"),
      u = {
        props: ["homepage"],
        computed: Object(o["a"])(
          {},
          Object(s["c"])({ slideActive: "activeActivity" }),
          {
            isTextColourLight: function () {
              return "#ffffff" === this.slideActive.textColour;
            },
          }
        ),
        methods: {
          canShowAhaSlideLogo: function () {
            return (
              !r["a"].checkWhiteLabelDomain() &&
              "white-label" !== this.$store.state.presentation.planType &&
              (this.homepage ||
                (!this.$store.state.logo &&
                  !this.$store.state.presentation.notShowAhaSlidesLogo &&
                  !this.homepage))
            );
          },
          canShowCustomLogo: function () {
            return (
              !this.$store.state.presentation.notShowAhaSlidesLogo &&
              !this.canShowAhaSlideLogo() &&
              null !== this.$store.state.logo
            );
          },
        },
      },
      c = u,
      d = (n("c4ed"), n("2877")),
      l = Object(d["a"])(c, a, i, !1, null, null, null);
    t["a"] = l.exports;
  },
  2295: function (e, t, n) {},
  "27db": function (e) {
    e.exports = {
      popupNextSlide: "Ведущий поменял слайд.",
      goToSlideButton: "Перейти к слайду",
      cancelButton: "Отмена",
      stopSubmission: "Пожалуйста, подождите, пока ведущий откроет его.",
      waitingScreen:
        "Пожалуйста, подождите, пока ведущий покажет следующий слайд.",
      thankScreen: "Благодарим за Ваше участие!",
      blankSlide:
        "На этом слайде пока нет контента. Пожалуйста, подождите, пока ведущий что-либо добавит.",
      submitMultipleTimes: "Вы можете отправить ответ несколько раз.",
      "open-endedInstructionSubmission":
        "Спасибо за ваш ответ! Вы можете отправить другой, если хотите.",
      multipleChoiceInstruction: "Вы можете выбрать до",
      options: "ответов",
      choicesLeft: "осталось вариантов",
      powerBy: "AhaSlides",
      term: "Условия",
      submissionClosedButton: "Отправка завершена",
      submit: "Отправить",
      exitAndVote: "Выйдите и проголосуйте за другую презентацию",
      nextSlideButton: "Следующий слайд",
      disconnectError:
        "Возникла проблема с подключением к серверу. Пожалуйста, попробуйте еще раз!",
      slideQRCodeAudience:
        "Вы успешно присоединились. Вы можете показать приведенный ниже QR-код другим участникам, чтобы они тоже могли присоединиться.",
      openendedSubmissionFail:
        "Отправка не удалась. Пожалуйста, проверьте ваше соединение и попробуйте снова.",
      watchVideo: "Пожалуйста, посмотрите видео на экране ведущего.",
      addSpecialCharacter: "Пожалуйста, не добавляйте специальные символы",
      answerWithSpace:
        "Ответы с пробелами будут рассматриваться как одно слово.",
      nextButton: "Следующий слайд",
      skipButton: "Перейти к следующему слайду",
      audiencePacingWaitingScreen: "Вы уже ответили на этот вопрос.",
      enterWordPlaceholder: "Введите слово ..",
      errorWordCloudWhenLeaveBlank: "Пожалуйста, введите ваше слово.",
      enterYourName: "Введите Ваше имя",
      getReady: "Приготовьтесь к игре!",
      chooseEmoji: "Выберите эмодзи в качестве аватара",
      changeButton: "Сменить аватар..",
      joinTheGameButton: "Присоединяйтесь к игре!",
      fasterGetMorePointsRule:
        "Этот вопрос приносит больше очков за быстрые ответы",
      correctAnswerGetMaxPointTitle: "Ответьте до истечения времени",
      correctAnswerGetMaxPointDetail: "(нет бонуса за быстрые ответы)",
      quizIsNotOpen:
        "Викторина пока не открыта. Пожалуйста, подождите, пока ведущий запустит её.",
      reloadTextLink: "Обновить",
      numberQuestionOfQuiz: "Вопрос {msg} из {num}",
      runOutOfTime: "О нет, Вы не успели.",
      correctAnswer: "Bepho!",
      youHaveWonPoint: "Вы набрали {msg} балл(ов) за этот вопрос",
      youAnsweredIn: "Вы ответили в {msg} ({num} осталось)!",
      waitAndSeeHowYouDid:
        "Давайте подождем и посмотрим, какого результата Вы добились ...",
      wrongAnswer: "Неправильный ответ!",
      minute: "минута",
      minutes: "минут",
      seconds: "секунд",
      players: "{msg} игроки",
      timesUp: "Время вышло!",
      youAreInPlace: "Вы на {msg} месте из {msg1} игроков",
      points: "баллов",
      noResultYet: "Результата пока нет",
      pointShortcut: "б",
      youHaveWonPoints: "Вы получили {msg} баллов за этот вопрос",
      closeAvatar: "Закрыть",
      alreadyAnswer: "Вы уже ответили на этот вопрос.",
      yourTotalScoreIs: "Ваш общий балл {msg}",
      betterLuckNextTime: "Повезет в следующий раз!",
      clickToSeeFullSize:
        "Нажмите на каждое изображение, чтобы увидеть его в полном размере.",
      answeredQuestions: "Отвеченные",
      askQuestionButton: "Задайте вопрос",
      qnaQuestionPlaceholder: "Напечатайте свой вопрос здесь...",
      enterYourNameOptional: "Ваше имя .. (необязательно)",
      topQuestionsAudience: "верхний",
      newQuestionsAudience: "новый",
      enterYourNameWarning: "Пожалуйста, введите Ваше имя.",
      enterQuestionWarning: "Пожалуйста, введите Ваш вопрос.",
      yourNamePlaceholder: "Ваше имя .. (обязательно)",
      finishButton: "Завершить",
      quizYouMustPickAll: "Вы должны выбрать все правильные ответы.",
      tryingReconnect: "Попытка восстановить ...",
      ignoreButton: "игнорировать",
      establishConnection:
        "Не удалось установить стабильное соединение. Пожалуйста, попробуйте перезагрузить эту страницу.",
      partiallyCorrect: "Частично правильно",
      youCanPickAnyCorrectAnswer:
        "Вы можете выбрать любой из правильных ответов.",
      mustNotPickIncorrectAnswer:
        "Выберите как можно больше правильных ответов, но вы не должны выбирать неправильный ответ.",
      mandatoryFieldError: "Это поле является обязательным.",
      typeYourAnswer: "Введите свой ответ ...",
      noCorrectAnswer: "Там нет правильного ответа.",
      presentationIsNotOpen:
        "Эта презентация находится в приватном режиме. Когда ведущий переключится в публичный режим, вы сможете видеть его слайды и взаимодействовать с ними.",
      invalidEmail: "Неверный адрес электронной почты.",
      pickYourTeam: "Выберите свою команду:",
      teamIsFull: "Эта команда полна, пожалуйста, выбрать другой.",
      changeTeam: "Изменение команды",
      youHaveWonPointForTeam: "Вы заработали {msg} балл для своей команды",
      youHaveWonPointsForTeam: "Вы заработали {msg} баллов для своей команды",
      yourAnswerNotCount: "Ваш ответ не учитывается.",
      hasAlreadyAnswered: "{msg} уже ответил.",
      yourTeamWonPoint: "Ваша команда набрала {msg} очков.",
      yourTeamWonPoints: "Ваша команда набрала {msg} очков.",
      noOneAnsweredInTime: "Никто из Вашей команды не ответил вовремя.",
      yourTeamInPlaceTeams:
        "Ваша команда находится на месте {msg} из {num} команд.",
      yourTeamScoreIs: "Результат Вашей команды: {msg}",
      yourFinalScoreIs: "Ваш окончательный результат: {msg}.",
      youAreIn: "Ты в {msg}",
      congratulations: "Поздравления",
      team: "команда",
      teams: "команды",
      "I just finished a super fun quiz on AhaSlides":
        "Я только что закончил супер веселую викторину на AhaSlides",
      "Post to {msg}": "Опубликовать в {msg}",
      numberQuestionOfQuizCompleted: "Вопрос {msg} из {num} завершен",
      seeSlideOnPresenterScreen: "Смотрите слайды на экране докладчика.",
      "Show Individual Ranking": "Показать индивидуальный рейтинг",
      "Show Team Ranking": "Показать рейтинг команды",
      Skip: "Пропустить",
      playAudioNow: "Пожалуйста, воспроизведите аудиодорожку сейчас",
      youMissedCorrectAnswer: "Вы пропустили {msg} правильный ответ.",
      youMissedCorrectAnswers: "Вы пропустили {msg} правильных ответов.",
      youPickedCorrectAnswers: "Вы выбрали {msg} из {num} правильных ответов.",
      youWereFastestInTeam: "Ты был самым быстрым в своей команде.",
      yourTeamWonPointTotal:
        "В общей сложности на этот вопрос, Ваша команда набрала {msg} очков",
      yourTeamWonPointsTotal:
        "В общей сложности на этот вопрос, Ваша команда набрала {msg} очков",
      alsoAccepted: "Также принято",
      youScoredPoints: "Вы набрали {msg} баллов.",
      youScoredPointsForYourTeam: "Вы набрали {msg} очков для своей команды.",
      youScoredPointForYourTeam: "Вы набрали {msg} очко для своей команды.",
      youScoredPoint: "Вы набрали {msg} балл.",
      submitted: "Отправлено",
      correctAnswerTitle: "Правильный ответ",
      enjoyThisPresentationFooterBanner:
        "Вам понравилась презентация? Вовлекайте Ваших слушателей на AhaSlides бесплатно.",
      letsGoFooterBanner: "Начнем",
      getStartedWithAhaSlides: "Начало работы с AhaSlides",
      makeFreeQuiz: "Сделать свой собственный бесплатный тест",
      waitToSpinTheWheel: "Подождите, пока ведущий раскрутит колесо!",
      theWheelSpinning: "Колесо крутится, посмотрите на экран докладчика.",
      resultsAreIn: "Результаты в…",
      myQuestions: "Мои вопросы",
      writeYourIdea: "Напишите свою идею ...",
      allTab: "Все",
      mySubmissionTab: "Мои материалы",
      votedTab: "Проголосовали",
      canUnvote: "Вы можете не голосовать, если хотите.",
      voteLeft: "У вас осталось {msg} голосов.",
      votingClosed: "Голосование закрыто.",
      startVoting: "Начать голосование",
      seeResult: "Посмотреть результат",
      votesLeft: "У Вас осталось голосов: {msg}.",
      submissions: "идей",
      youCanSubmitOnce: "Вы можете отправить один раз.",
      eachCanOnlySubmitOnce: "Каждый участник может отправитьтолько один раз",
      maxExceededCannotSubmit:
        "Превышен максимальный лимит. Вы больше не можете отправлять.",
      youHaveMade: "У Вас",
      noneOptionsCorrect: "Ни один из вариантов не правильный!",
      changeImage: "Изменить",
      remove: "Удалить",
      uploadImage: "Загрузить изображение",
      joinNow: "Присоединяйся сейчас",
      dragAndDropStatements: "Перетащите утверждения, чтобы сделать заказ",
      seeCorrectAnswer: "Увидеть правильный ответ",
      seeYourAnswer: "Увидеть твой ответ",
      startTheConversation: "Начни разговор!",
      noChatMessagesYet: "Сообщения в чате пока отсутствуют.",
      questionWillStartSoon: "Вопрос скоро начнется.",
      typeSomethingToSayHi: "Напишите что-нибудь, чтобы сказать привет!",
      quizCompleted: "Викторина Пройдена!",
      shareThisOn: "Поделитесь этим на",
      thisQuizWasMadeBy: "Эта викторина была сделана {name}",
      dontForgetToShowSupport:
        "Пожалуйста, не забудьте выразить свою поддержку!",
      amazing: "Удивительный!",
      greatWork: "Отличная работа!",
      goodJob: "Молодец!",
      wow: "Ух ты!",
      whatAPerformance: "Ваш результат!",
      nicelyDone: "Отлично сделано!",
      outOfQuestionsYou: "Из {number} вопросов вы",
      youFinishedInThe: "Вы заняли",
      gotCorrectRate: "получили{number} правильных ответов",
      topPercentage: "первое место в {number}%",
      ofAllPlayers: "всех игроков",
      toughQuizRight: "Сложная викторина, верно?",
      outOfQuestionsYourTeam: "Из {number} вопросов ваша команда",
      yourTeamFinishedInThe: "Ваша команда финишировала в",
      ofAllTeams: "среди всех команд",
      haventAnsweredAnyQuiz: "Вы не ответили ни на один вопрос викторины.",
      teamHasntAnsweredAnyQuiz:
        "Ваша команда не ответила ни на один вопрос викторины.",
      you: "Ты",
      enterYourMessage: "Введите сообщение...",
      hasLeft: "ушла",
      hasJoined: "присоединилась",
      "Match with...": "Совпадать с...",
      orTryToReload:
        "Или попытаться <a class='link-reload' @click='reloadPage()'>перезагрузить</a>",
      "Or try to": "Или попробуйте",
      audienceSeeContent: "Пожалуйста, посмотрите на экран ведущего.",
      "Make a free quiz": "Создайте бесплатную викторину",
      "Enjoy this presentation?": "Вам понравилась эта презентация?",
      "Get slides": "Получите слайды",
      Accept: "Принимать",
      Decline: "Отклонять",
      "Let me in": "Впусти меня",
      "Presenter is calling…": "Ведущий звонит…",
      "Enter your authentication code": "Введите код проверки подлинности",
      "Not bad": "Неплохо",
      Good: "Хороший",
      "Can't wait for the next": "Не могу дождаться следующего",
      "Feedback sent!": "Отзыв отправлен!",
      "Leave feedback...":
        "Что-то пошло не так. Пожалуйста, попробуйте еще раз.",
      "Could be better": "Могло быть лучше",
      "Something went wrong, please try again.":
        "Что-то пошло не так. Пожалуйста, попробуйте еще раз.",
      "How's the presentation?": "Как презентация?",
      Send: "Отправлять",
      Tutorials: "Учебники",
      teamEarnsPointAverage: "Ваша команда в среднем набирает <b>{point}p</b>.",
      teamFastestAnswerIncorrect:
        "Быстрый ответ был неверным, ваша команда набирает <b>{point}p</b>.",
      teamFastestAnswerGetPoint:
        "Ты был самым быстрым, твоя команда набирает <b>{point}p</b>.",
      teamEarnsPointTotal: "Ваша команда набрала в сумме <b>{point}p</b>.",
      teamEarnsPointFastest:
        "Ваша команда набирает <b>{point}p</b> благодаря <b>{audienceName}</b>.",
      "💪 Keep up the great work!":
        "💪 Продолжай в том же духе, отличная работа!",
      "Lose streak!": "Конец серии!",
      Correct: "Удивительно!",
      "Double streak!": "Отлично!",
      "Triple streak!": "Великол.!",
      "Four Streak!": "Замечат.!",
      "Awesome!": "Впечатляюще!",
      "Keep going!": "Фантастически!",
      "Amazing!": "Превосходно!",
      "Good job!": "Замечательно!",
      Incorrect: "Неверно",
      my_answers: "Мои ответы",
      view_answers: "Посмотреть ответы",
      final_leaderboard: "Итоговая таблица лидеров",
      final_answers_stat:
        "У вас <strong>{correctAnswers} / {totalQuiz} правильных</strong> ({correctRate}%)",
      final_ranking: "Место: <strong>{ranking}</strong>",
      your_answer: "Ваш ответ",
      review_all_questions:
        "Вы можете просмотреть все вопросы здесь после окончания викторины.",
      not_answer: "Вы не ответили",
      your_answer_correct: "Ваш ответ правильный",
      your_answer_incorrect: "Ваш ответ неправильный",
      your_answer_partially_correct: "Ваш ответ частично правильный",
      you_missed_quiz: "Вы только что пропустили квиз.",
      leaderboard: "Таблица лидеров",
      personal_no_quiz_answered: "Вы еще не ответили ни на один вопрос",
      team_no_quiz_answered: "Ваша команда еще не ответила ни на один вопрос",
      final_team_answers_stat:
        "Ваша команда ответила правильно на <strong>{correctAnswers} / {totalQuiz} вопросов</strong> ({correctRate}%)",
      all_slides: "Все слайды",
      review_slides: "Просмотр слайдов",
      view_all_slides_answers: "Посмотреть все слайды и ответы",
      review_all_slides_and_questions:
        "Вы можете просмотреть все слайды и вопросы после окончания презентации.",
      no_answer: "Нет ответа",
      sign_in_to_save_presentation: "Войдите, чтобы сохранить эту презентацию",
      continue_with_google: "Продолжить с Google",
      present_with_ahaslides: "Презентовать с AhaSlides",
      view_terms: "Просмотреть условия",
      log_out: "Выйти",
      attended: "Посещено",
      your_future_presentations_shown_here:
        "Ваши будущие презентации будут показаны здесь",
      join_a_presentation: "Присоединиться к презентации",
      presentation_details: "Подробности презентации",
      "Leaving the presentation": "Покидая презентацию",
      "This link will take you to a page that is not part of the presentation":
        "Эта ссылка перенесет вас на страницу, которая не является частью презентации",
      thank_for_participation: "Спасибо за ваше участие! ❤️",
      give_feedback: "Оставить отзыв",
      get_ahaslides_free: "Получить AhaSlides бесплатно",
      exclusive_offer_hr_tech:
        "Эксклюзивное предложение для HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ Получить AhaSlides Plus бесплатно ✨",
      ask_presenter_to_view_slides:
        "Пожалуйста, попросите вашего докладчика разрешения на просмотр слайдов.",
      login: "Войти",
      sign_up: "Зарегистрироваться",
      or: "или",
      Reload: "Перезагрузить",
      "No internet. Retrying...": "Нет интернета. Повторная попытка...",
    };
  },
  2995: function (e, t, n) {
    "use strict";
    var a = n("cf92"),
      i = n.n(a);
    i.a;
  },
  "2abb": function (e) {
    e.exports = {
      disconnectError: "Ada masalah saat menghubungkan ke server. Coba lagi!",
      mandatoryFieldError: "Bagian ini wajib diisi.",
      numberQuestionOfQuizCompleted: "Pertanyaan ke {msg} dari {num} selesai",
      numberQuestionOfQuiz: "Pertanyaan {msg} dari {num}",
      thankScreen: "Terima kasih atas partisipasi anda!",
      powerBy: "AhaSlides",
      term: "Syarat",
      exitAndVote: "Keluar dan pilih presentasi lain",
      tryingReconnect: "Mencoba menghubungkan kembali…",
      reloadTextLink: "Muat ulang",
      ignoreButton: "Abaikan",
      establishConnection:
        "Tidak dapat membuat sambungan yang stabil. Silakan coba muat ulang halaman ini.",
      multipleChoiceInstruction: "Anda dapat memilih sampai",
      options: "Opsi",
      clickToSeeFullSize:
        "Klik pada masing-masing gambar untuk melihatnya dalam tampilan penuh.",
      quizYouMustPickAll: "Anda harus memilih semua jawaban yang benar.",
      mustNotPickIncorrectAnswer:
        "Pilih sebanyak mungkin jawaban yang benar, tetapi Anda tidak boleh memilih jawaban yang salah.",
      choicesLeft: "Pilihan tersisa",
      alreadyAnswer: "Anda telah menjawab pertanyaan ini.",
      youCanPickAnyCorrectAnswer:
        "Anda dapat memilih salah satu jawaban yang benar.",
      stopSubmission: "Harap tunggu penayang untuk membuka nya.",
      waitingScreen:
        "Harap tunggu penayang untuk menampilkan slide berikutnya.",
      submissionClosedButton: "Pengajuan ditutup",
      submit: "Kirim",
      openendedSubmissionFail:
        "Pengiriman tidak berhasil. Harap periksa koneksi anda dan coba kembali.",
      closeAvatar: "Tutup",
      qnaQuestionPlaceholder: "Ketikkan pertanyaan anda disini…",
      answeredQuestions: "Terjawab",
      topQuestionsAudience: "Teratas",
      newQuestionsAudience: "Baru",
      enterYourNameWarning: "Harap masukkan nama anda.",
      enterQuestionWarning: "Harap masukkan pertanyaan anda.",
      askQuestionButton: "Ajukan pertanyaan",
      enterYourNameOptional: "Nama anda.. (opsional)",
      yourNamePlaceholder: "Nama anda.. (wajib)",
      waitAndSeeHowYouDid:
        "Mari tunggu dan kita lihat bagaimana anda melakukannya.",
      congratulations: "Selamat",
      betterLuckNextTime: "Semoga beruntung dilain waktu!",
      points: "poin",
      yourFinalScoreIs: "Skor akhir anda adalah {msg}.",
      youAreInPlace: "Anda berada di urutan ke {msg} dari {msg1} pemain",
      yourTeamScoreIs: "Skor tim anda adalah {msg}",
      yourTeamInPlaceTeams:
        "Tim anda berada pada posisi ke {msg} dari {num} tim.",
      noCorrectAnswer: "Tidak ada jawaban yang benar.",
      correctAnswer: "Benar!",
      wrongAnswer: "Jawaban salah!",
      timesUp: "Waktu habis!",
      nextButton: "Berikutnya",
      finishButton: "Selesai",
      partiallyCorrect: "Sebagian benar",
      runOutOfTime:
        "Oh tidak, anda telah kehabisan waktu. Jawab lebih cepat lagi lain waktu.",
      youHaveWonPoint: "Anda telah memenangkan {msg} poin untuk pertanyaan ini",
      youHaveWonPoints:
        "Anda telah memenangkan {msg} poin untuk pertanyaan ini",
      youHaveWonPointForTeam:
        "Anda telah memenangkan {msg} poin untuk tim anda",
      noOneAnsweredInTime:
        "Tak ada seorangpun di tim anda yang menjawab tepat waktu.",
      youHaveWonPointsForTeam:
        "Anda telah memenangkan {msg} poin untuk tim anda",
      hasAlreadyAnswered: "{msg} telah terjawab.",
      yourAnswerNotCount: "Jawaban anda tidak dihitung.",
      yourTeamWonPoint: "Tim anda telah memenangkan {msg} poin.",
      yourTeamWonPoints: "Tim anda telah memenangkan {msg} poin.",
      enterYourName: "Tuliskan nama anda",
      youAnsweredIn: "Anda menjawab pada {msg} ({num} tersisa)!",
      typeYourAnswer: "Ketikkan jawaban anda...",
      chooseEmoji: "Pilih sebuah emoji sebagai avatar anda",
      pickYourTeam: "Pilih tim anda:",
      teamIsFull: "Tim ini sudah penuh, pilih yang lain.",
      changeButton: "Rubah avatar..",
      joinTheGameButton: "Gabung dengan permainan ini!",
      "Post to {msg}": "Kirim ke {msg}",
      "I just finished a super fun quiz on AhaSlides":
        "Saya telah menyelesaikan kuis yang sangat menyenangkan di AhaSlides",
      Skip: "Lewati",
      blankSlide:
        "Belum ada konten di slide ini. Mohon tunggu penayang untuk menambahkan sesuatu.",
      audiencePacingWaitingScreen: "Anda telah menjawab pertanyaan ini.",
      seeSlideOnPresenterScreen: "Silakan lihat slide pada layar.",
      players: "{msg} pemain",
      noResultYet: "Belum ada hasil",
      yourTotalScoreIs: "Skor total anda adalah {msg}",
      team: "tim",
      teams: "tim",
      "Show Individual Ranking": "Tampilkan Peringkat Individu",
      "Show Team Ranking": "Tampilkan Peringkat Tim",
      submitMultipleTimes: "Anda dapat mengirimkan beberapa kali.",
      "open-endedInstructionSubmission":
        "Terima kasih atas masukan anda! Anda dapat mengirimkan konten lain jika anda mau.",
      nextSlideButton: "Slide berikutnya",
      getReady: "Bersiap untuk bermain {msg}!",
      invalidEmail: "Email salah.",
      changeTeam: "ganti tim",
      youAreIn: "Anda berada pada {msg}",
      fasterGetMorePointsRule:
        "Pertanyaan ini memberikan lebih banyak poin untuk jawaban cepat",
      correctAnswerGetMaxPointTitle: "Jawab sebelum waktu habis",
      correctAnswerGetMaxPointDetail:
        "(Tak ada bonus untuk jawaban yang lebih cepat)",
      pointShortcut: "p",
      slideQRCodeAudience:
        "Anda telah berhasil bergabung. Anda dapat menunjukkan QR code di bawah ini ke orang di sekitar anda agar mereka juga dapat bergabung.",
      quizIsNotOpen:
        "Kuis belum di mulai. Harap tunggu penayang untuk memulainya.",
      addSpecialCharacter: "Harap jangan memasukkan karakter spesial apapun",
      answerWithSpace: "Jawaban dengan spasi akan dianggap sebagai satu kata.",
      enterWordPlaceholder: "Ketikkan kalimat..",
      watchVideo: "Harap simak video pada layar penampil.",
      errorWordCloudWhenLeaveBlank: "Harap masukkan kalimat anda.",
      popupNextSlide: "Penayang telah mengubah slide nya.",
      minute: "menit",
      minutes: "menit",
      seconds: "detik",
      goToSlideButton: "Pergike slide",
      cancelButton: "Batalkan",
      skipButton: "Lewati slide berikutnya",
      presentationIsNotOpen:
        "Presentasi ini dalam mode pribadi. Setelah penyaji beralih ke mode publik, Anda dapat melihat dan berinteraksi dengan slide mereka.",
      joinNow: "Bergabung sekarang",
      makeFreeQuiz: "Buat Kuis Gratis Anda Sendiri",
      startTheConversation: "Mulai percakapan!",
      noChatMessagesYet: "Belum ada pesan obrolan.",
      typeSomethingToSayHi: "Ketik sesuatu untuk menyapa!",
      you: "Kamu",
      hasLeft: "telah meninggalkan",
      hasJoined: "telah bergabung",
      letsGoFooterBanner: "Ayo pergi",
      getStartedWithAhaSlides: "Memulai dengan AhaSlides",
      noneOptionsCorrect: "Tidak ada pilihan yang benar!",
      myQuestions: "Pertanyaan saya",
      dragAndDropStatements: "Seret dan lepas pernyataan untuk membuat pesanan",
      seeCorrectAnswer: "Lihat jawaban yang benar",
      seeYourAnswer: "Lihat jawaban Anda",
      shareThisOn: "Bagikan ini di",
      quizCompleted: "Kuis Selesai!",
      amazing: "Luar biasa!",
      greatWork: "Kerja bagus!",
      goodJob: "Kerja yang baik!",
      thisQuizWasMadeBy: "Kuis ini dibuat oleh {name}",
      haventAnsweredAnyQuiz: "Anda belum menjawab pertanyaan kuis apa pun.",
      teamHasntAnsweredAnyQuiz:
        "Tim Anda belum menjawab pertanyaan kuis apa pun.",
      youFinishedInThe: "Anda selesai di",
      ofAllPlayers: "dari semua pemain",
      ofAllTeams: "dari semua tim",
      dontForgetToShowSupport:
        "Tolong jangan lupa untuk menunjukkan dukungan Anda!",
      correctAnswerTitle: "Jawaban yang benar",
      alsoAccepted: "Juga diterima",
      submitted: "Dikirim",
      youMissedCorrectAnswer: "Anda melewatkan {msg} jawaban yang benar.",
      youMissedCorrectAnswers: "Anda melewatkan {msg} jawaban yang benar.",
      youScoredPointsForYourTeam: "Anda mencetak {msg} poin untuk tim Anda.",
      youScoredPoints: "Anda mencetak {msg} poin.",
      yourTeamWonPointTotal:
        "Total untuk pertanyaan ini, tim Anda telah mencetak {msg} poin",
      youWereFastestInTeam: "Anda adalah yang tercepat di tim Anda.",
      playAudioNow: "Silakan putar trek audio sekarang",
      enterYourMessage: "Masukkan pesan Anda...",
      yourTeamWonPointsTotal:
        "Total untuk pertanyaan ini, tim Anda telah mencetak {msg} poin",
      youScoredPointForYourTeam: "Anda mencetak {msg} poin untuk tim Anda.",
      youScoredPoint: "Anda mencetak {msg} poin.",
      enjoyThisPresentationFooterBanner:
        "Nikmati presentasi ini? Libatkan audiens Anda sendiri secara gratis di AhaSlides.",
      topPercentage: "teratas {number}%",
      yourTeamFinishedInThe: "Tim Anda selesai dalam",
      youPickedCorrectAnswers:
        "Anda telah memilih {msg} dari {num} jawaban yang benar.",
      voteLeft: "Anda memiliki {msg} suara tersisa.",
      votesLeft: "Anda memiliki {msg} suara tersisa.",
      votingClosed: "Voting ditutup.",
      allTab: "Semua",
      mySubmissionTab: "kiriman saya",
      votedTab: "Memilih",
      canUnvote: "Anda dapat membatalkan pemungutan suara jika Anda mau.",
      seeResult: "Lihat hasil",
      writeYourIdea: "Tulis idemu...",
      uploadImage: "Unggah gambar",
      changeImage: "Ubah gambar",
      remove: "Menghapus",
      youHaveMade: "Anda telah membuat",
      submissions: "pengajuan",
      maxExceededCannotSubmit:
        "Batas maksimum terlampaui. Anda tidak dapat mengirimkan lagi.",
      youCanSubmitOnce: "Anda dapat mengirimkan sekali.",
      eachCanOnlySubmitOnce:
        "Setiap peserta hanya dapat mengirimkan satu kali.",
      startVoting: "Mulai voting",
      questionWillStartSoon: "Pertanyaannya akan segera dimulai.",
      resultsAreIn: "Hasilnya ada di…",
      theWheelSpinning: "Roda berputar, silakan lihat di layar presenter.",
      waitToSpinTheWheel: "Tunggu presenter untuk memutar roda!",
      outOfQuestionsYourTeam: "Dari {number} pertanyaan, tim Anda",
      gotCorrectRate: "mendapatkan {number} yang benar",
      outOfQuestionsYou: "Dari {number} pertanyaan, Anda",
      wow: "Wow!",
      whatAPerformance: "Apa Kinerja!",
      nicelyDone: "Selesai dengan baik!",
      toughQuizRight: "Kuis yang sulit, bukan?",
      "Match with...": "Cocok dengan...",
      orTryToReload:
        "Atau coba <a class='link-reload' @click='reloadPage()'>muat ulang halaman ini</a>",
      "Or try to": "Atau coba",
      audienceSeeContent: "Silakan lihat layar presenter.",
      "Enjoy this presentation?": "Nikmati presentasi ini?",
      "Make a free quiz": "Buat kuis gratis",
      "Get slides": "Dapatkan slide",
      "Presenter is calling…": "Presenter memanggil…",
      Accept: "Menerima",
      Decline: "Menolak",
      "Enter your authentication code": "Masukkan kode autentikasi Anda",
      "Let me in": "Biarkan saya masuk",
      "Could be better": "Dapat menjadi lebih baik",
      "Not bad": "Tidak buruk",
      "Feedback sent!": "Umpan balik terkirim!",
      "Leave feedback...": "Tinggalkan umpan balik. Itu pribadi...",
      "Can't wait for the next": "Tidak sabar menunggu selanjutnya",
      Good: "Bagus",
      "Something went wrong, please try again.":
        "Terjadi kesalahan, harap coba lagi.",
      "How's the presentation?": "Bagaimana presentasinya?",
      Send: "Kirim",
      Tutorials: "Tutorial",
      teamEarnsPointAverage: "Tim Anda mendapatkan rata-rata <b>{point}p</b>.",
      teamFastestAnswerIncorrect:
        "Jawaban tercepat salah, tim Anda mendapatkan <b>{point}p</b>.",
      teamFastestAnswerGetPoint:
        "Anda adalah yang tercepat, tim Anda mendapatkan <b>{point}p</b>.",
      "💪 Keep up the great work!": "💪 Teruslah berkarya!",
      teamEarnsPointTotal: "Tim Anda mendapatkan <b>{point}p</b> secara total.",
      teamEarnsPointFastest:
        "Tim Anda mendapatkan <b>{point}p</b> berkat <b>{audienceName}</b>.",
      "Lose streak!": "Seri putus!",
      Correct: "Hebat!",
      "Double streak!": "Luar biasa!",
      "Triple streak!": "Hebat sekali!",
      "Four Streak!": "Sangat hebat!",
      "Awesome!": "Luar biasa!",
      "Keep going!": "Bagus sekali!",
      "Amazing!": "Fantastis!",
      "Good job!": "Luar biasa sekali!",
      Incorrect: "Salah",
      my_answers: "Jawaban saya",
      view_answers: "Lihat jawaban",
      final_leaderboard: "Peringkat akhir",
      final_answers_stat:
        "Anda memiliki <strong>{correctAnswers} / {totalQuiz} jawaban benar</strong> ({correctRate}%)",
      final_ranking: "Peringkat: <strong>{ranking}</strong>",
      your_answer: "Jawaban Anda",
      review_all_questions:
        "Anda dapat meninjau semua pertanyaan di sini setelah kuis berakhir.",
      not_answer: "Anda belum menjawab",
      your_answer_correct: "Jawaban Anda benar",
      your_answer_incorrect: "Jawaban Anda salah",
      your_answer_partially_correct: "Jawaban Anda sebagian benar",
      you_missed_quiz: "Anda baru saja melewatkan kuis.",
      leaderboard: "Papan Peringkat",
      personal_no_quiz_answered: "Anda belum menjawab kuis apa pun",
      team_no_quiz_answered: "Tim Anda belum menjawab kuis apa pun",
      final_team_answers_stat:
        "Tim Anda telah menjawab <strong>{correctAnswers} / {totalQuiz} dengan benar</strong> ({correctRate}%)",
      all_slides: "Semua Slide",
      review_slides: "Tinjau slide",
      view_all_slides_answers: "Lihat semua slide & jawaban",
      review_all_slides_and_questions:
        "Anda dapat meninjau semua slide dan pertanyaan saat presentasi berakhir.",
      no_answer: "Tidak ada jawaban",
      sign_in_to_save_presentation: "Masuk untuk menyimpan presentasi ini",
      continue_with_google: "Lanjutkan dengan Google",
      present_with_ahaslides: "Presensi dengan AhaSlides",
      view_terms: "Lihat ketentuan",
      log_out: "Keluar",
      attended: "Dihadiri",
      your_future_presentations_shown_here:
        "Presentasi mendatang Anda akan ditampilkan di sini",
      join_a_presentation: "Ikut presentasi",
      presentation_details: "Detail Presentasi",
      "Leaving the presentation": "Meninggalkan presentasi",
      "This link will take you to a page that is not part of the presentation":
        "Tautan ini akan membawa Anda ke halaman yang tidak merupakan bagian dari presentasi",
      thank_for_participation: "Terima kasih atas partisipasinya! ❤️",
      give_feedback: "Berikan umpan balik",
      get_ahaslides_free: "Dapatkan AhaSlides gratis",
      exclusive_offer_hr_tech:
        "Penawaran eksklusif untuk HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ Dapatkan AhaSlides Plus gratis ✨",
      ask_presenter_to_view_slides:
        "Silakan minta izin kepada presenter Anda untuk melihat slide.",
      login: "Masuk",
      sign_up: "Daftar",
      or: "atau",
      Reload: "Muat ulang",
      "No internet. Retrying...": "Tidak ada internet. Sedang mencoba lagi...",
    };
  },
  "2ac8": function (e, t, n) {
    "use strict";
    n("96cf");
    var a = n("3b8d"),
      i = n("2b0e"),
      o = n("db49"),
      r = null,
      s = {
        voteQuestion: {
          method: "POST",
          url: "".concat(o["a"].baseUrl, "/api/question/vote/"),
        },
      },
      u = function () {
        r = i["default"].resource("", {}, s);
      },
      c = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r.voteQuestion(t);
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    t["a"] = { initResource: u, voteQuestion: c };
  },
  3: function (e, t) {},
  "308e": function (e, t, n) {
    "use strict";
    n("57e7"), n("28a5");
    var a = n("94ba"),
      i = n.n(a),
      o = n("db49"),
      r = o["a"].mixpanel && o["a"].mixpanel.projectToken;
    function s(e) {
      for (
        var t = "".concat(e, "="),
          n = decodeURIComponent(document.cookie),
          a = n.split(";"),
          i = 0;
        i < a.length;
        i++
      ) {
        var o = a[i];
        while (" " === o.charAt(0)) o = o.substring(1);
        if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
      }
      return "";
    }
    var u = function () {
        if (r) {
          i.a.init(o["a"].mixpanel.projectToken, {
            api_host: o["a"].mixpanel.proxyUrl,
          });
          var e = s("aha-user-id");
          e && i.a.identify(e);
        }
      },
      c = function (e, t) {
        var n = s("aha-user-id");
        r && n && i.a.track(e, t);
      };
    t["a"] = { init: u, track: c };
  },
  "31d8": function (e, t, n) {
    "use strict";
    n("96cf");
    var a = n("3b8d"),
      i = n("2b0e"),
      o = n("db49"),
      r = null,
      s = {
        getSlides: {
          method: "GET",
          url: "".concat(
            o["a"].baseUrl,
            "/api/presentation/audience-presentation-slide-list/{presentationId}"
          ),
        },
        asyncAudienceLeaderboard: {
          method: "POST",
          url: "".concat(
            o["a"].baseUrl,
            "/api/slide/async-create-leaderboard/"
          ),
        },
        getNextSlide: {
          method: "GET",
          url: "".concat(
            o["a"].baseUrl,
            "/api/presentation/next-slide/{slideId}"
          ),
        },
        getSlideDetailV2: {
          method: "GET",
          url: "".concat(o["a"].baseUrl, "/api/v2/slides/{slideId}"),
        },
        getSlideEmbed: {
          method: "GET",
          url: "".concat(o["a"].baseUrl, "/api/slide/embed/{slideId}"),
        },
      },
      u = function () {
        r = i["default"].resource("", {}, s);
      },
      c = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r.getSlides({ presentationId: t });
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      d = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt("return", r.getNextSlide({ slideId: t }));
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      l = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r.getSlideDetailV2({ slideId: t });
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      p = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r.asyncAudienceLeaderboard(t);
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      m = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r.getSlideEmbed({ slideId: t });
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    t["a"] = {
      initResource: u,
      getSlides: c,
      asyncAudienceLeaderboard: p,
      getNextSlide: d,
      getSlideDetailV2: l,
      getSlideEmbed: m,
    };
  },
  "340e": function (e, t, n) {},
  "35a4": function (e, t, n) {
    "use strict";
    n("96cf");
    var a = n("3b8d"),
      i = n("2b0e"),
      o = n("db49"),
      r = n("4360"),
      s = n("538b"),
      u = n("0025"),
      c = null,
      d = "-1",
      l = {
        getMyQuizAnswers: {
          method: "GET",
          url: "".concat(
            o["a"].baseUrl,
            "/api/answers/quiz?presentationId={presentationId}&audienceId={audienceId}"
          ),
        },
        createWordCloudAnswerViaLiveProxy: {
          method: "POST",
          url: "".concat(o["a"].liveProxyUrl, "/api/live/answers/wordcloud"),
        },
        createWordCloudAnswerViaLiveApi: {
          method: "POST",
          url: "".concat(
            o["a"].baseUrlLiveApi,
            "/api/stream/answers/wordcloud"
          ),
        },
        createWordCloudAnswerV1: {
          method: "POST",
          url: "".concat(
            o["a"].baseUrl,
            "/api/slide-option/audience-create-wordcloud"
          ),
        },
        createPollAnswerViaLiveProxy: {
          method: "POST",
          url: "".concat(o["a"].liveProxyUrl, "/api/live/answers/poll"),
        },
        createPollAnswerViaLiveApi: {
          method: "POST",
          url: "".concat(o["a"].baseUrlLiveApi, "/api/stream/answers/poll"),
        },
        createPollAnswerV1: {
          method: "POST",
          url: "".concat(o["a"].baseUrl, "/api/answer/create"),
        },
        createScaleAnswerViaLiveProxy: {
          method: "POST",
          url: "".concat(o["a"].liveProxyUrl, "/api/live/answers/scale"),
        },
        createScaleAnswerViaLiveApi: {
          method: "POST",
          url: "".concat(o["a"].baseUrlLiveApi, "/api/stream/answers/scale"),
        },
        createScaleAnswerV1: {
          method: "POST",
          url: "".concat(o["a"].baseUrl, "/api/answer/create"),
        },
        createQuizAnswer: {
          method: "POST",
          url: "".concat(o["a"].baseUrl, "/api/answer/create"),
        },
        createQuizAnswerThroughProxy: {
          method: "POST",
          url: "".concat(o["a"].liveProxyUrl, "/api/live/answer/create"),
        },
        createQuizAnswerThroughProxyV2: {
          method: "POST",
          url: "".concat(o["a"].liveProxyUrl, "/api/live/answer/create/v2"),
        },
        createQuizAnswerGeneralApiV3: {
          method: "POST",
          url: "".concat(o["a"].baseUrl, "/api/answer/create/v3"),
        },
        createCategoriseAnswer: {
          method: "POST",
          url: "".concat(
            o["a"].baseUrlLiveApi,
            "/api/stream/answers/categories"
          ),
        },
      },
      p = function () {
        c = i["default"].resource("", {}, l);
      },
      m = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var a, i, o;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = t.presentationId),
                      (i = t.audienceId),
                      (e.next = 3),
                      c.getMyQuizAnswers(
                        { presentationId: a, audienceId: i },
                        n
                      )
                    );
                  case 3:
                    return (o = e.sent), e.abrupt("return", o.body);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })(),
      g = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, a, i;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        !r["a"].getters["liveStatsV2/canUseWordCloudLiveProxy"])
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (
                        (e.next = 4), c.createWordCloudAnswerViaLiveProxy(t)
                      );
                    case 4:
                      return (n = e.sent), e.abrupt("return", n.body);
                    case 6:
                      if (
                        !r["a"].getters["liveStatsV2/canUseWordCloudLiveApi"]
                      ) {
                        e.next = 11;
                        break;
                      }
                      return (e.next = 9), c.createWordCloudAnswerViaLiveApi(t);
                    case 9:
                      return (a = e.sent), e.abrupt("return", a.body);
                    case 11:
                      return (e.next = 13), c.createWordCloudAnswerV1(t);
                    case 13:
                      return (i = e.sent), e.abrupt("return", i.body);
                    case 17:
                      return (
                        (e.prev = 17),
                        (e.t0 = e["catch"](0)),
                        s["b"].detectGeneralConnection(s["a"].UNSTABLE),
                        e.abrupt("return", { body: { error: e.t0.message } })
                      );
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 17]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      h = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, a, i;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        !r["a"].getters["liveStatsV2/canUsePollLiveProxy"])
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 4), c.createPollAnswerViaLiveProxy(t);
                    case 4:
                      return (n = e.sent), e.abrupt("return", n.body);
                    case 6:
                      if (!r["a"].getters["liveStatsV2/canUsePollLiveApi"]) {
                        e.next = 11;
                        break;
                      }
                      return (e.next = 9), c.createPollAnswerViaLiveApi(t);
                    case 9:
                      return (a = e.sent), e.abrupt("return", a.body);
                    case 11:
                      return (e.next = 13), c.createPollAnswerV1(t);
                    case 13:
                      return (i = e.sent), e.abrupt("return", i.body);
                    case 17:
                      return (
                        (e.prev = 17),
                        (e.t0 = e["catch"](0)),
                        s["b"].detectGeneralConnection(s["a"].UNSTABLE),
                        e.abrupt("return", { body: { error: e.t0.message } })
                      );
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 17]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      b = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, a, i;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        !r["a"].getters["liveStatsV2/canUseScaleLiveProxy"])
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 4), c.createScaleAnswerViaLiveProxy(t);
                    case 4:
                      return (n = e.sent), e.abrupt("return", n.body);
                    case 6:
                      if (!r["a"].getters["liveStatsV2/canUseScaleLiveApi"]) {
                        e.next = 11;
                        break;
                      }
                      return (e.next = 9), c.createScaleAnswerViaLiveApi(t);
                    case 9:
                      return (a = e.sent), e.abrupt("return", a.body);
                    case 11:
                      return (e.next = 13), c.createScaleAnswerV1(t);
                    case 13:
                      return (i = e.sent), e.abrupt("return", i.body);
                    case 17:
                      return (
                        (e.prev = 17),
                        (e.t0 = e["catch"](0)),
                        s["b"].detectGeneralConnection(s["a"].UNSTABLE),
                        e.abrupt("return", { body: { error: e.t0.message } })
                      );
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 17]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      v = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, a, i;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        !r["a"].getters["liveStatsV2/canUseLiveStatsForQuizV2"])
                      ) {
                        e.next = 5;
                        break;
                      }
                      return (
                        c.createQuizAnswerThroughProxyV2(t),
                        (n = ""
                          .concat(
                            u["a"].constantObjectSubcriptionType
                              .submitQuizAnswerType,
                            "-"
                          )
                          .concat(t.slideId)),
                        e.abrupt("return", u["a"].subscribe(n))
                      );
                    case 5:
                      if (
                        !r["a"].getters["liveStatsV2/canUseLiveStatsForQuiz"]
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (e.next = 8), c.createQuizAnswerThroughProxy(t);
                    case 8:
                      return (a = e.sent), e.abrupt("return", a.body);
                    case 10:
                      return (e.next = 12), c.createQuizAnswer(t);
                    case 12:
                      return (i = e.sent), e.abrupt("return", i.body);
                    case 16:
                      return (
                        (e.prev = 16),
                        (e.t0 = e["catch"](0)),
                        s["b"].detectGeneralConnection(s["a"].UNSTABLE),
                        e.abrupt("return", { body: { error: e.t0.message } })
                      );
                    case 20:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 16]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      f = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), c.createCategoriseAnswer(t);
                  case 2:
                    return (
                      (n = e.sent), (n.body.id = d), e.abrupt("return", n.body)
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    t["a"] = {
      initResource: p,
      getMyQuizAnswers: m,
      createWordCloudAnswer: g,
      createScaleAnswer: b,
      createPollAnswer: h,
      createCategoriseAnswer: f,
      createQuizAnswer: v,
    };
  },
  "35d0": function (e) {
    e.exports = {
      popupNextSlide: "Diễn giả đã đổi slide.",
      goToSlideButton: "Chuyển slide",
      cancelButton: "Ở lại",
      stopSubmission: "Hãy đợi diễn giả mở lại phản hồi.",
      waitingScreen: "Hãy đợi diễn giả chuyển sang slide mới.",
      thankScreen: "Cảm ơn bạn đã tham gia!",
      blankSlide: "Slide hiện đang trống. Hãy đợi diễn giả nhập nội dung.",
      submitMultipleTimes: "Bạn có thể gửi phản hồi nhiều lần.",
      "open-endedInstructionSubmission":
        "Cảm ơn bạn đã gửi trả lời! Nếu muốn, bạn có thể gửi thêm.",
      multipleChoiceInstruction: "Bạn có thể chọn tối đa",
      options: "lựa chọn",
      choicesLeft: "lựa chọn nữa thôi",
      powerBy: "AhaSlides",
      term: "Điều khoản",
      submissionClosedButton: "Dừng gửi phản hồi",
      submit: "Gửi",
      exitAndVote: "Thoát và tham gia vào bài thuyết trình khác",
      nextSlideButton: "Slide tiếp theo",
      disconnectError: "Có vấn đề về kết nối tới hệ thống. Hãy thử lại!",
      slideQRCodeAudience:
        "Bạn đã tham gia thành công. Bạn có thể đưa mã QR dưới đây cho những người xung quanh để họ tham gia cùng bạn.",
      openendedSubmissionFail:
        "Gửi không thành công. Vui lòng kiểm tra kết nối và thử lại.",
      watchVideo: "Video đang được chiếu trên màn hình của người thuyết trình.",
      addSpecialCharacter: "Vui lòng không nhập kí tự đặc biệt",
      answerWithSpace: "Câu trả lời có chứa dấu cách sẽ được tính là 1 từ.",
      nextButton: "Đi tiếp",
      skipButton: "Bỏ qua",
      audiencePacingWaitingScreen: "Bạn đã trả lời câu hỏi này.",
      enterWordPlaceholder: "Nhập một từ...",
      errorWordCloudWhenLeaveBlank: "Vui lòng nhập từ của bạn.",
      enterYourName: "Nhập tên của bạn",
      getReady: "Hãy sẵn sàng!",
      chooseEmoji: "Chọn 1 emoji làm hình đại diện của bạn",
      changeButton: "Thay đổi hình đại diện..",
      joinTheGameButton: "Tham gia chơi!",
      fasterGetMorePointsRule: "Trả lời nhanh để có nhiều điểm hơn",
      correctAnswerGetMaxPointTitle: "Trả lời câu hỏi trước khi hết giờ",
      correctAnswerGetMaxPointDetail:
        "(Câu trả lời nhanh hơn không được nhận thêm điểm)",
      quizIsNotOpen: "Cuộc thi chưa được mở. Hãy đợi diễn giả để bắt đầu.",
      reloadTextLink: "Tải lại",
      numberQuestionOfQuiz: "Câu hỏi số {msg} trên {num}",
      runOutOfTime: "Thật đáng tiếc, bạn đã hết thời gian.",
      correctAnswer: "Chính xác!",
      youHaveWonPoint: "Bạn đã giành được {msg} điểm cho câu hỏi này",
      youAnsweredIn: "Bạn đã trả lời trong {msg} (còn {num})!",
      waitAndSeeHowYouDid: "Hãy chờ xem kết quả bạn đã chọn...",
      wrongAnswer: "Sai rồi!",
      minute: "phút",
      minutes: "phút",
      seconds: "giây",
      players: "{msg} người chơi",
      timesUp: "Hết giờ!",
      youAreInPlace: "Bạn đang xếp hạng {msg} trong số {msg1} người chơi",
      points: "điểm",
      noResultYet: "Chưa có kết quả",
      pointShortcut: "đ",
      youHaveWonPoints: "Bạn đã giành được {msg} điểm cho câu hỏi này",
      closeAvatar: "Đóng",
      alreadyAnswer: "Bạn đã trả lời câu hỏi này.",
      yourTotalScoreIs: "Tổng số điểm của bạn là {msg}",
      betterLuckNextTime: "Chúc bạn may mắn lần sau!",
      clickToSeeFullSize: "Click vào từng ảnh để xem ở kích thước đầy đủ.",
      answeredQuestions: "Đã trả lời",
      askQuestionButton: "Đặt câu hỏi",
      qnaQuestionPlaceholder: "Nhập câu hỏi của bạn ở đây...",
      enterYourNameOptional: "Nhập tên của bạn (tùy chọn)",
      topQuestionsAudience: "Top",
      newQuestionsAudience: "Mới",
      enterYourNameWarning: "Hãy nhập tên của bạn.",
      enterQuestionWarning: "Hãy nhập câu hỏi của bạn.",
      yourNamePlaceholder: "Nhập tên của bạn.. (bắt buộc)",
      finishButton: "Kết thúc",
      quizYouMustPickAll: "Bạn cần chọn tất cả các câu trả lời đúng.",
      tryingReconnect: "Đang cố gắng kết nối lại ...",
      ignoreButton: "Bỏ qua",
      establishConnection:
        "Không thể thiết lập kết nối ổn định. Vui lòng thử tải lại trang này.",
      partiallyCorrect: "Đúng một phần",
      youCanPickAnyCorrectAnswer:
        "Bạn có thể chọn bất kỳ câu trả lời đúng nào.",
      mustNotPickIncorrectAnswer:
        "Chọn càng nhiều câu trả lời đúng càng tốt, nhưng bạn không được chọn bất kỳ câu trả lời sai nào.",
      mandatoryFieldError: "Đây là trường bắt buộc.",
      typeYourAnswer: "Nhập câu trả lời của bạn...",
      noCorrectAnswer: "Không có câu trả lời đúng.",
      presentationIsNotOpen:
        "Bài thuyết trình này đang ở chế độ riêng tư. Khi người thuyết trình chuyển sang chế độ công khai, bạn có thể xem và tương tác với bài thuyết trình của họ.",
      invalidEmail: "Email không hợp lệ.",
      pickYourTeam: "Chọn nhóm của bạn:",
      teamIsFull: "Nhóm này đã đầy, vui lòng chọn nhóm khác.",
      changeTeam: "đổi nhóm",
      youHaveWonPointForTeam: "Bạn đã giành được {msg} điểm cho nhóm mình",
      youHaveWonPointsForTeam: "Bạn đã giành được {msg} điểm cho nhóm mình",
      yourAnswerNotCount: "Câu trả lời của bạn không được tính.",
      hasAlreadyAnswered: "{msg} đã trả lời câu hỏi này.",
      yourTeamWonPoint: "Nhóm của bạn đã giành được {msg} điểm.",
      yourTeamWonPoints: "Nhóm của bạn đã giành được {msg} điểm.",
      noOneAnsweredInTime: "Không có ai trong nhóm của bạn trả lời kịp giờ.",
      yourTeamInPlaceTeams: "Nhóm của bạn ở vị trí thứ {msg} trong {num} nhóm.",
      yourTeamScoreIs: "Nhóm của bạn có số điểm là {msg}",
      yourFinalScoreIs: "Số điểm cuối cùng của bạn là {msg}.",
      youAreIn: "Bạn đang ở {msg}",
      congratulations: "Chúc mừng",
      team: "nhóm",
      teams: "nhóm",
      "I just finished a super fun quiz on AhaSlides":
        "Tôi vừa hoàn thành một cuộc thi siêu thú vị trên AhaSlides",
      "Post to {msg}": "Đăng lên {msg}",
      numberQuestionOfQuizCompleted: "Đã hoàn thành {msg} trên {num} câu hỏi",
      seeSlideOnPresenterScreen:
        "Vui lòng xem các slides trên màn hình của người thuyết trình.",
      "Show Individual Ranking": "Hiển thị xếp hạng cá nhân",
      "Show Team Ranking": "Hiển thị xếp hạng nhóm",
      Skip: "Bỏ qua",
      playAudioNow: "Vui lòng phát audio",
      youMissedCorrectAnswer: "Bạn đã bỏ lỡ {msg} câu trả lời đúng.",
      youMissedCorrectAnswers: "Bạn đã bỏ lỡ {msg} câu trả lời đúng.",
      youPickedCorrectAnswers:
        "Bạn đã chọn {msg} trong số {num} câu trả lời đúng.",
      youWereFastestInTeam:
        "Bạn là người trả lời nhanh nhất trong nhóm của bạn.",
      yourTeamWonPointTotal:
        "Tổng điểm nhóm của bạn giành được trong câu hỏi này là {msg}",
      yourTeamWonPointsTotal:
        "Tổng điểm nhóm của bạn giành được trong câu hỏi này là {msg}",
      alsoAccepted: "Cũng được chấp nhận",
      youScoredPoints: "Bạn đã ghi được {msg} điểm.",
      youScoredPointsForYourTeam:
        "Bạn đã ghi được {msg} điểm cho nhóm của mình.",
      youScoredPointForYourTeam:
        "Bạn đã ghi được {msg} điểm cho nhóm của mình.",
      youScoredPoint: "Bạn đã ghi được {msg} điểm.",
      submitted: "Đã gửi",
      correctAnswerTitle: "Câu trả lời đúng",
      enjoyThisPresentationFooterBanner:
        "Bạn có thấy bài thuyết trình thú vị không? Hãy thử trải nghiệm miễn phí tại AhaSlides nhé!",
      letsGoFooterBanner: "Thử ngay",
      getStartedWithAhaSlides: "Bắt đầu với AhaSlides",
      makeFreeQuiz: "Tạo quiz miễn phí",
      waitToSpinTheWheel: "Hãy chờ người thuyết trình xoay vòng quay!",
      theWheelSpinning:
        "Vòng quay đang xoay, vui lòng nhìn lên màn hình của người thuyết trình.",
      resultsAreIn: "Kết quả là…",
      myQuestions: "Câu hỏi của tôi",
      writeYourIdea: "Viết ý tưởng của bạn...",
      allTab: "Tất cả",
      mySubmissionTab: "Ý tưởng của tôi",
      votedTab: "Đã chọn",
      canUnvote: "Bạn có thể hủy chọn phiếu nếu bạn muốn.",
      voteLeft: "Bạn còn {msg} lần chọn.",
      votingClosed: "Đã đóng chọn",
      startVoting: "Bắt đầu bình chọn",
      seeResult: "Xem kết quả",
      votesLeft: "Bạn còn {msg} lần chọn.",
      submissions: "ý tưởng",
      youCanSubmitOnce: "Bạn có thể gửi một lần.",
      eachCanOnlySubmitOnce: "Mỗi người tham gia chỉ có thể gửi một lần.",
      maxExceededCannotSubmit:
        "Đã vượt quá giới hạn tối đa. Bạn không thể gửi nữa.",
      youHaveMade: "Bạn đã đề xuất",
      noneOptionsCorrect: "Không có lựa chọn nào là đúng!",
      changeImage: "Sửa ảnh",
      remove: "Xóa",
      uploadImage: "Chọn ảnh",
      joinNow: "Tham gia ngay",
      dragAndDropStatements: "Kéo và thả các câu để sắp xếp theo thứ tự",
      seeCorrectAnswer: "Xem câu trả lời đúng",
      seeYourAnswer: "Xem câu trả lời của bạn",
      startTheConversation: "Hãy bắt đầu trò chuyện!",
      noChatMessagesYet: "Chưa có tin nhắn nào.",
      questionWillStartSoon: "Câu hỏi sẽ bắt đầu trong giây lát.",
      typeSomethingToSayHi: "Hãy viết gì đó để chào mọi người nhé.",
      quizCompleted: "Cuộc thi đã hoàn thành!",
      shareThisOn: "Chia sẻ tại",
      thisQuizWasMadeBy: "Cuộc thi này được thực hiện bởi {name}",
      dontForgetToShowSupport: "Xin đừng quên thể hiện sự ủng hộ của bạn!",
      amazing: "Thật tuyệt vời!",
      greatWork: "Làm tốt lắm!",
      goodJob: "Làm tốt lắm!",
      wow: "Wow!",
      whatAPerformance: "Xuất sắc!",
      nicelyDone: "Làm tốt lắm!",
      outOfQuestionsYou: "Trong số {number} câu hỏi, bạn đã",
      youFinishedInThe: "Bạn được xếp hạng trong",
      gotCorrectRate: "trả lời đúng {number}",
      topPercentage: "top {number}%",
      ofAllPlayers: "người chơi",
      toughQuizRight: "Cuộc thi hơi khó, phải không?",
      outOfQuestionsYourTeam: "Trong tổng số {number} câu hỏi, nhóm của bạn đã",
      yourTeamFinishedInThe: "Nhóm của bạn dừng ở",
      ofAllTeams: "trên tổng số nhóm",
      haventAnsweredAnyQuiz: "Bạn chưa trả lời câu hỏi nào.",
      teamHasntAnsweredAnyQuiz: "Nhóm của bạn chưa trả lời câu hỏi nào. ",
      you: "Bạn",
      enterYourMessage: "Nhập tin nhắn của bạn...",
      hasLeft: "đã rời khỏi",
      hasJoined: "đã tham gia",
      "Match with...": "Nối với...",
      orTryToReload:
        "Hoặc thử <a class='link-reload' @click='reloadPage()'>tải lại trang</a>",
      "Or try to": "Hoặc thử",
      audienceSeeContent: "Vui lòng nhìn lên màn hình của người thuyết trình.",
      "Enjoy this presentation?": "Bạn có thích bài thuyết trình này không?",
      "Get slides": "Tải bài thuyết trình",
      Accept: "Chấp nhận",
      Decline: "Từ chối",
      "Enter your authentication code": "Nhập mã xác thực của bạn",
      "Let me in": "Tham gia",
      "Make a free quiz": "Tạo câu đố miễn phí",
      "Presenter is calling…": "Người thuyết trình đang gọi…",
      "Something went wrong, please try again.":
        "Đã xảy ra lỗi. Vui lòng thử lại.",
      "Could be better": "Cần cải thiện",
      "Not bad": "Không tệ",
      Good: "Tốt",
      "Can't wait for the next": "Đáng mong đợi",
      "Feedback sent!": "Đã gửi phản hồi!",
      "Leave feedback...": "Để lại phản hồi riêng tư cho người thuyết trình",
      "How's the presentation?": "Bạn thấy bài thuyết trình thế nào?",
      Send: "Gửi",
      Tutorials: "Hướng dẫn",
      teamEarnsPointAverage:
        "Đội của bạn kiếm được trung bình <b>{point}p</b>.",
      teamEarnsPointFastest:
        "Đội của bạn kiếm được <b>{point}p</b> nhờ <b>{audienceName}</b>.",
      teamFastestAnswerGetPoint:
        "Bạn là người nhanh nhất, đội của bạn kiếm được <b>{point}p</b>.",
      teamEarnsPointTotal:
        "Đội của bạn đã kiếm được tổng cộng <b>{point}p</b>.",
      teamFastestAnswerIncorrect:
        "Đáp án nhanh nhất là sai, đội của bạn kiếm được <b>{point}p</b>.",
      "💪 Keep up the great work!": "💪 Hãy tiếp tục công việc tuyệt vời!",
      "Lose streak!": "Mất chuỗi thắng!",
      Correct: "Tuyệt!",
      "Double streak!": "Ngon!",
      "Triple streak!": "Vượt qua!",
      "Four Streak!": "Giỏi quá!",
      "Awesome!": "Phê hết cỡ! ",
      "Keep going!": "Xuất sắc!",
      "Amazing!": "Siêu hạng!",
      "Good job!": "Hoàn hảo!",
      Incorrect: "Không đúng",
      my_answers: "Câu trả lời của tôi",
      view_answers: "Xem câu trả lời",
      final_leaderboard: "Bảng xếp hạng cuối cùng",
      final_answers_stat:
        "Bạn đã trả lời đúng <strong>{correctAnswers} / {totalQuiz}</strong> câu hỏi ({correctRate}%)",
      final_ranking: "Xếp hạng: <strong>{ranking}</strong>",
      your_answer: "Câu trả lời của bạn",
      review_all_questions:
        "Bạn có thể xem lại tất cả các câu hỏi tại đây sau khi bài kiểm tra kết thúc.",
      not_answer: "Bạn chưa trả lời",
      your_answer_correct: "Câu trả lời của bạn chính xác",
      your_answer_incorrect: "Câu trả lời của bạn không chính xác",
      your_answer_partially_correct: "Câu trả lời của bạn đúng một phần",
      you_missed_quiz: "Bạn vừa bỏ lỡ bài kiểm tra.",
      leaderboard: "Bảng xếp hạng",
      personal_no_quiz_answered: "Bạn chưa trả lời bất kỳ câu đố nào",
      team_no_quiz_answered: "Nhóm của bạn chưa trả lời bất kỳ câu đố nào",
      final_team_answers_stat:
        "Nhóm của bạn đã trả lời đúng <strong>{correctAnswers} / {totalQuiz} câu hỏi</strong> ({correctRate}%)",
      all_slides: "Tất cả các slide",
      review_slides: "Xem lại slide",
      view_all_slides_answers: "Xem tất cả các slide & câu trả lời",
      review_all_slides_and_questions:
        "Bạn có thể xem lại tất cả các slide và câu hỏi khi buổi trình bày kết thúc.",
      no_answer: "Không có câu trả lời",
      sign_in_to_save_presentation: "Đăng nhập để lưu bài thuyết trình",
      continue_with_google: "Tiếp tục với Google",
      present_with_ahaslides: "Trình bày với AhaSlides",
      view_terms: "Xem điều khoản",
      log_out: "Đăng xuất",
      attended: "Đã tham dự",
      your_future_presentations_shown_here:
        "Các bài thuyết trình tiếp theo sẽ xuất hiện ở đây",
      join_a_presentation: "Tham gia bài thuyết trình",
      presentation_details: "Chi tiết bài thuyết trình",
      "Leaving the presentation": "Rời khỏi bài thuyết trình",
      "This link will take you to a page that is not part of the presentation":
        "Liên kết này sẽ đưa bạn đến một trang không phải là một phần của bài thuyết trình",
      thank_for_participation: "Cảm ơn bạn đã tham gia! ❤️",
      give_feedback: "Phản hồi",
      get_ahaslides_free: "Nhận AhaSlides miễn phí",
      exclusive_offer_hr_tech: "Ưu đãi độc quyền cho HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ Nhận AhaSlides Plus miễn phí ✨",
      ask_presenter_to_view_slides:
        "Vui lòng yêu cầu người thuyết trình của bạn cho phép xem slide.",
      login: "Đăng nhập",
      sign_up: "Đăng ký",
      or: "hoặc",
      Reload: "Tải lại",
      "No internet. Retrying...": "Không có kết nối mạng. Đang thử lại...",
    };
  },
  "398e": function (e) {
    e.exports = {
      popupNextSlide: "Den studievært har ændret dias.",
      goToSlideButton: "Gå til dias",
      cancelButton: "Afvis",
      stopSubmission: "Vent studievært at åbne den.",
      waitingScreen: "Vent studievært for at vise det næste dias.",
      thankScreen: "Tak for din deltagelse!",
      blankSlide:
        "Der er intet indhold på denne slide endnu. Vent din studievært for at tilføje noget i.",
      submitMultipleTimes: "Du kan indsende flere gange.",
      "open-endedInstructionSubmission":
        "Tak for dit input! Du kan indsende en anden, hvis du vil.",
      multipleChoiceInstruction: "Du kan vælge op til",
      options: "muligheder",
      choicesLeft: "valg venstre",
      powerBy: "AhaSlides",
      term: "Vilkår",
      submissionClosedButton: "Indsendelse lukket",
      submit: "Indsend",
      exitAndVote: "Afslut og stemme på en anden præsentation",
      nextSlideButton: "Næste slide",
      disconnectError:
        "Der var et problem at forbinde til serveren. Prøv igen!",
      slideQRCodeAudience:
        "Du har med succes tiltrådte i. Du kan vise QR-koden nedenfor for at andre omkring dig, så de kan deltage i også.",
      openendedSubmissionFail:
        "Indsendelse mislykkedes. Tjek din forbindelse, og prøv igen.",
      watchVideo: "Se videoen på præsentationsskærmen.",
      addSpecialCharacter: "Vær venlig ikke at tilføje specialtegn",
      answerWithSpace: "Svar med mellemrum vil blive betragtet som ét ord.",
      nextButton: "Næste",
      skipButton: "Spring til næste dias",
      audiencePacingWaitingScreen: "Du har allerede besvaret dette spørgsmål.",
      enterWordPlaceholder: "Indtast et ord..",
      errorWordCloudWhenLeaveBlank: "Indtast venligst dit ord.",
      enterYourName: "Indtast dit navn",
      getReady: "Gør dig klar til at spille!",
      chooseEmoji: "Vælg en humørikon som din avatar",
      changeButton: "Skift avatar..",
      joinTheGameButton: "Deltag i spillet!",
      fasterGetMorePointsRule:
        "Dette spørgsmål belønner flere point for hurtige svar",
      correctAnswerGetMaxPointTitle: "Svar inden tiden løber ud",
      correctAnswerGetMaxPointDetail: "(Ingen bonuspoint for hurtigere svar)",
      quizIsNotOpen: "Den Quiz er ikke åben. Vent studievært at starte den.",
      reloadTextLink: "Reload",
      numberQuestionOfQuiz: "Spørgsmål {msg} af {num}",
      runOutOfTime: "Åh nej, du har løb tør for tid.",
      correctAnswer: "Korrekt!",
      youHaveWonPoint: "Du har vundet {msg} punkt for dette spørgsmål",
      youAnsweredIn: "Du svarede i {msg} ({num} venstre)!",
      waitAndSeeHowYouDid: "Lad os vente og se, hvordan du gjorde...",
      wrongAnswer: "Forkert svar!",
      minute: "minut",
      minutes: "minutter",
      seconds: "sekunder",
      players: "{msg} spillere",
      timesUp: "Tiden er løbet ud!",
      youAreInPlace: "Du er på {msg} sted på {msg1} spillere",
      points: "point",
      noResultYet: "Ingen resultere endnu",
      pointShortcut: "p",
      youHaveWonPoints: "Du har vundet {msg} point for dette spørgsmål",
      closeAvatar: "Luk",
      alreadyAnswer: "Du har allerede besvaret dette spørgsmål.",
      yourTotalScoreIs: "Din samlede score er {msg}",
      betterLuckNextTime: "Bedre held næste gang!",
      clickToSeeFullSize:
        "Klik på hvert billede for at se det i fuld størrelse.",
      answeredQuestions: "Besvaret",
      askQuestionButton: "Stil et spørgsmål",
      qnaQuestionPlaceholder: "Skriv dit spørgsmål her...",
      enterYourNameOptional: "Dit navn.. (valgfrit)",
      topQuestionsAudience: "Top",
      newQuestionsAudience: "Ny",
      enterYourNameWarning: "Vær sød at skrive dit navn.",
      enterQuestionWarning: "Indtast dit spørgsmål.",
      yourNamePlaceholder: "Dit navn.. (påkrævet)",
      finishButton: "Afslut",
      quizYouMustPickAll: "Du skal vælge alle de rigtige svar.",
      tryingReconnect: "Forsøger at genoprette forbindelsen ...",
      ignoreButton: "Ignorere",
      establishConnection:
        "Kunne ikke oprette en stabil forbindelse. Prøv at indlæse denne side igen.",
      partiallyCorrect: "Delvist korrekt",
      youCanPickAnyCorrectAnswer:
        "Du kan vælge en hvilken som helst af de rigtige svar.",
      mustNotPickIncorrectAnswer:
        "Pick så mange korrekte svar, som du kan, men du må ikke vælge nogen forkert svar.",
      mandatoryFieldError: "Dette felt er obligatorisk.",
      typeYourAnswer: "Skriv dit svar...",
      noCorrectAnswer: "Der er ingen rigtige svar.",
      presentationIsNotOpen:
        "Denne præsentation er i privat tilstand. Når præsentanten har skiftet til offentlig tilstand, kan du se og interagere med præsentationens dias.",
      invalidEmail: "Ugyldig email.",
      pickYourTeam: "Pick dit team:",
      teamIsFull: "Dette hold er fuld, skal du vælge en anden.",
      changeTeam: "skift hold",
      youHaveWonPointForTeam: "Du har vundet {msg} point for dit hold",
      youHaveWonPointsForTeam: "Du har vundet {msg} point for dit hold",
      yourAnswerNotCount: "Dit svar ikke tælle.",
      hasAlreadyAnswered: "{msg} svarede allerede.",
      yourTeamWonPoint: "Dit team har vundet {msg} point.",
      yourTeamWonPoints: "Dit team har vundet {msg} point.",
      noOneAnsweredInTime: "Ingen andre i dit team besvaret i tide.",
      yourTeamInPlaceTeams: "Dit hold er i {msg} plads ud af {num} hold.",
      yourTeamScoreIs: "Dit hold score er {msg}",
      yourFinalScoreIs: "Din endelige score er {msg}.",
      youAreIn: "Du er i {msg}",
      congratulations: "Tillykke",
      team: "hold",
      teams: "hold",
      "I just finished a super fun quiz on AhaSlides":
        "Jeg er lige færdig med en super sjov quiz på AhaSlides",
      "Post to {msg}": "Send til {msg}",
      numberQuestionOfQuizCompleted: "Spørgsmål {msg} af {num} afsluttet",
      seeSlideOnPresenterScreen: "Se diasene på præsentatorens skærm.",
      "Show Individual Ranking": "Vis individuel rangering",
      "Show Team Ranking": "Vis holdrangering",
      Skip: "Springe",
      playAudioNow: "Afspil lydsporet nu",
      youMissedCorrectAnswer: "Du gik glip af {msg} det korrekte svar.",
      youMissedCorrectAnswers: "Du gik glip af {msg} korrekte svar.",
      youPickedCorrectAnswers: "Du valgte {msg} ud af {num} korrekte svar.",
      youWereFastestInTeam: "Du var den hurtigste i dit team.",
      yourTeamWonPointTotal:
        "I alt for dette spørgsmål, dit team har vundet {msg} point",
      yourTeamWonPointsTotal:
        "I alt for dette spørgsmål, dit team har vundet {msg} point",
      alsoAccepted: "Også accepteret",
      youScoredPoints: "Du scorede {msg} point.",
      youScoredPointsForYourTeam: "Du scorede {msg} point for dit team.",
      youScoredPointForYourTeam: "Du scorede {msg} point for dit team.",
      youScoredPoint: "Du scorede {msg} point.",
      submitted: "Afsendt",
      correctAnswerTitle: "Korrekt svar",
      enjoyThisPresentationFooterBanner:
        "Nyd denne præsentation? Engager dit eget publikum gratis på AhaSlides.",
      letsGoFooterBanner: "Lad os gå",
      getStartedWithAhaSlides: "Kom i gang med AhaSlides",
      makeFreeQuiz: "Lav din egen gratis quiz",
      waitToSpinTheWheel: "Vent på, at præsentatoren drejer rattet!",
      theWheelSpinning: "Hjulet drejer, se venligst på præsentationsskærmen.",
      resultsAreIn: "Resultaterne er kommet…",
      myQuestions: "Mine spørgsmål",
      writeYourIdea: "Skriv din idé...",
      allTab: "Alle",
      mySubmissionTab: "Mine bidrag",
      votedTab: "Stemte",
      canUnvote: "Du kan afstemme, hvis du vil.",
      voteLeft: "Du har {msg} stemme tilbage.",
      votingClosed: "Afstemning lukket.",
      startVoting: "Begynd at stemme",
      seeResult: "Se resultat",
      votesLeft: "Du har {msg} stemmer tilbage.",
      submissions: "indsendelse(r)",
      youCanSubmitOnce: "Du kan indsende en gang.",
      eachCanOnlySubmitOnce: "Hver deltager kan kun indsende én gang.",
      maxExceededCannotSubmit:
        "Maksimal grænse overskredet. Du kan ikke indsende mere.",
      youHaveMade: "Du har",
      noneOptionsCorrect: "Ingen af mulighederne er korrekte!",
      changeImage: "Skift billede",
      remove: "Fjerne",
      uploadImage: "Upload billede",
      joinNow: "Deltag nu",
      dragAndDropStatements: "Træk og slip udsagn for at skabe orden",
      seeCorrectAnswer: "Se det rigtige svar",
      seeYourAnswer: "Se dit svar",
      startTheConversation: "Start samtalen!",
      noChatMessagesYet: "Der er ingen chatbeskeder endnu.",
      questionWillStartSoon: "Spørgsmålet vil snart begynde.",
      typeSomethingToSayHi: "Skriv noget at sige hej!",
      quizCompleted: "Quiz Afsluttet!",
      shareThisOn: "Del dette på",
      thisQuizWasMadeBy: "Denne quiz blev lavet af {name}",
      dontForgetToShowSupport: "Husk venligst at vise din støtte!",
      amazing: "Fantastiske!",
      greatWork: "Godt arbejde!",
      goodJob: "Godt klaret!",
      wow: "Wow!",
      whatAPerformance: "Sikke en præstation!",
      nicelyDone: "Godt gået!",
      outOfQuestionsYou: "Ud af {number} spørgsmål, du",
      youFinishedInThe: "Du sluttede blandt de",
      gotCorrectRate: "fik {number} korrekt svar",
      topPercentage: "bedste {number}%",
      ofAllPlayers: "af alle spillere",
      toughQuizRight: "Svær quiz, ikke sandt?",
      outOfQuestionsYourTeam: "Ud af {number} spørgsmål, dit team",
      yourTeamFinishedInThe: "Dit hold sluttede i",
      ofAllTeams: "af alle hold",
      haventAnsweredAnyQuiz: "Du har ikke besvaret nogen quizspørgsmål.",
      teamHasntAnsweredAnyQuiz:
        "Dit team har ikke besvaret nogen quizspørgsmål.",
      you: "Du",
      enterYourMessage: "Indtast din besked...",
      hasLeft: " er gået",
      hasJoined: " er kommet med",
      "Match with...": "Passer med...",
      orTryToReload:
        "Eller prøv at <a class='link-reload' @click='reloadPage()'>genindlæse</a>",
      "Or try to": "Eller prøv at",
      audienceSeeContent: "Se venligst på oplægsholderens skærm.",
      "Make a free quiz": "Lav en gratis quiz",
      "Get slides": "Hent diasene",
      Accept: "Acceptere",
      Decline: "Afvise",
      "Enter your authentication code": "Indtast din godkendelseskode",
      "Let me in": "Luk mig ind",
      "Enjoy this presentation?": "Nyder du denne præsentation?",
      "Presenter is calling…": "Oplægsholder ringer…",
      "Could be better": "Kunne være bedre",
      "Not bad": "Ikke dårligt",
      Good: "Godt",
      "Can't wait for the next": "Kan ikke vente til det næste",
      "Feedback sent!": "Feedback sendt!",
      "Leave feedback...": "Giv feedback. Det er privat...",
      "Something went wrong, please try again.":
        "Noget gik galt. Prøv venligst igen.",
      "How's the presentation?": "Hvordan er præsentationen?",
      Send: "Sende",
      Tutorials: "Selvstudier",
      teamEarnsPointAverage: "Dit hold tjener i gennemsnit <b>{point}p</b>.",
      teamEarnsPointFastest:
        "Dit hold tjener <b>{point}p</b> takket være <b>{audienceName}</b>.",
      teamFastestAnswerGetPoint:
        "Du var den hurtigste, dit hold tjener <b>{point}p</b>.",
      "💪 Keep up the great work!": "💪 Hold da op med det gode arbejde!",
      teamEarnsPointTotal: "Dit hold tjener <b>{point}p</b> i alt.",
      teamFastestAnswerIncorrect:
        "Hurtigste svar var forkert, dit hold tjener <b>{point}p</b>.",
      "Lose streak!": "Streak slut!",
      Correct: "Fantastisk!",
      "Double streak!": "Fremragende!",
      "Triple streak!": "Imponerend!",
      "Four Streak!": "Utroligt godt!",
      "Awesome!": "Flot arbejde!",
      "Keep going!": "Super!",
      "Amazing!": "Perfekt!",
      "Good job!": "Fabelagtig!",
      Incorrect: "Forkert",
      my_answers: "Mine svar",
      view_answers: "Vis svar",
      final_leaderboard: "Endelig rangliste",
      final_answers_stat:
        "Du har <strong>{correctAnswers} / {totalQuiz} korrekte</strong> ({correctRate}%)",
      final_ranking: "Rangering: <strong>{ranking}</strong>",
      your_answer: "Dit svar",
      review_all_questions:
        "Du kan gennemgå alle spørgsmål her, når quizzen slutter.",
      not_answer: "Du svarede ikke",
      your_answer_correct: "Dit svar er korrekt",
      your_answer_incorrect: "Dit svar er forkert",
      your_answer_partially_correct: "Dit svar er delvist korrekt",
      you_missed_quiz: "Du har lige misset testen.",
      leaderboard: "Rangliste",
      personal_no_quiz_answered: "Du har ikke besvaret nogen quiz",
      team_no_quiz_answered: "Dit hold har ikke besvaret nogen quiz",
      final_team_answers_stat:
        "Dit hold har fået <strong>{correctAnswers} / {totalQuiz} korrekt</strong> ({correctRate}%)",
      all_slides: "Alle dias",
      review_slides: "Gennemgå dias",
      view_all_slides_answers: "Se alle dias & svar",
      review_all_slides_and_questions:
        "Du kan gennemgå alle dias og spørgsmål, når præsentationen slutter.",
      no_answer: "Intet svar",
      sign_in_to_save_presentation: "Log ind for at gemme denne præsentation",
      continue_with_google: "Fortsæt med Google",
      present_with_ahaslides: "Præsenter med AhaSlides",
      view_terms: "Vis betingelser",
      log_out: "Log ud",
      attended: "Deltog",
      your_future_presentations_shown_here:
        "Dine kommende præsentationer vises her",
      join_a_presentation: "Deltag i en præsentation",
      presentation_details: "Præsentationsdetaljer",
      "Leaving the presentation": "Forlader præsentationen",
      "This link will take you to a page that is not part of the presentation":
        "Dette link vil tage dig til en side, der ikke er en del af præsentationen",
      thank_for_participation: "Tak for din deltagelse! ❤️",
      give_feedback: "Giv feedback",
      get_ahaslides_free: "Få AhaSlides gratis",
      exclusive_offer_hr_tech: "Eksklusivt tilbud til HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ Få AhaSlides Plus gratis ✨",
      ask_presenter_to_view_slides:
        "Spør venligst din præsentator om tilladelse til at se diasene.",
      login: "Log ind",
      sign_up: "Tilmeld dig",
      or: "eller",
      Reload: "Genindlæs",
      "No internet. Retrying...": "Ingen internetforbindelse. Prøver igen...",
    };
  },
  "3b33": function (e, t, n) {},
  4: function (e, t) {},
  "41cb": function (e, t, n) {
    "use strict";
    n("7f7f");
    var a = n("2b0e"),
      i = n("8c4f"),
      o = n("e0eb"),
      r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            staticClass: "home",
            class: { "hide-branding": e.hideBranding },
            attrs: { id: "home" },
          },
          [
            e.hideBranding
              ? e._e()
              : n("Logo", { attrs: { homepage: e.homepage } }),
            e.findError
              ? e._e()
              : n("h3", [
                  e._v(
                    "\n    Please enter your presentation's access code:\n  "
                  ),
                ]),
            e.findError
              ? n("h3", [
                  e._v(
                    "\n    Presentation not found. You may have mistyped the access code. Try again?\n  "
                  ),
                ])
              : e._e(),
            n(
              "form",
              {
                staticClass: "item-input",
                on: {
                  submit: function (t) {
                    return t.preventDefault(), e.submitAccessCode(t);
                  },
                },
              },
              [
                n("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: e.accessCode,
                      expression: "accessCode",
                    },
                  ],
                  staticClass: "item-input-text submit-access-placeholder",
                  attrs: {
                    type: "text",
                    placeholder: "Type in access code...",
                    maxlength: 10,
                    required: "",
                  },
                  domProps: { value: e.accessCode },
                  on: {
                    input: [
                      function (t) {
                        t.target.composing || (e.accessCode = t.target.value);
                      },
                      e.handleAccessCode,
                    ],
                  },
                }),
                n(
                  "div",
                  { staticClass: "text-center flex justify-center" },
                  [
                    n(
                      "aha-antd-button",
                      {
                        attrs: {
                          type: "submit",
                          size: "lg",
                          variant: "primary-alt",
                          isLoadingInline: "",
                          loading: e.submiting,
                        },
                      },
                      [n("span", [e._v("Submit")])]
                    ),
                  ],
                  1
                ),
                e.error
                  ? n(
                      "div",
                      {
                        staticClass: "text-danger text-center",
                        staticStyle: { "line-height": "1.5rem" },
                      },
                      [
                        n(
                          "svg",
                          {
                            staticClass: "fa-fw",
                            attrs: { viewBox: "0 0 576 512" },
                          },
                          [
                            n("path", {
                              attrs: {
                                d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
                              },
                            }),
                          ]
                        ),
                        n("span", { domProps: { innerHTML: e._s(e.error) } }),
                      ]
                    )
                  : e._e(),
              ]
            ),
            n("p", { staticClass: "note text-center" }, [
              e._v(
                "\n    The code is found on the screen in front of you.\n  "
              ),
            ]),
          ],
          1
        );
      },
      s = [],
      u = (n("a481"), n("02c5")),
      c = n("db49"),
      d = n("2241"),
      l = {
        name: "Home",
        components: { Logo: d["a"] },
        data: function () {
          return {
            accessCode: "",
            error: "",
            submiting: !1,
            findError: !1,
            hideBranding: !1,
            homepage: !0,
          };
        },
        created: function () {
          (this.findError = o["a"].getParamValue(
            "error",
            window.location.href
          )),
            this.findError && window.history.replaceState("", "", "/");
        },
        mounted: function () {
          document.getElementById("slide-image-bg") &&
            document.getElementById("slide-image-bg").remove(),
            (document.body.style.backgroundColor = "#ffffff"),
            (document.body.style.color = "#313131"),
            window.location.host !== c["a"].domain && (this.hideBranding = !0);
        },
        methods: {
          validateAcessCode: function () {
            var e = this;
            this.$http
              .get(c["a"].api.checkPresentation, {
                params: { id: this.accessCode },
              })
              .then(function (t) {
                if (!t.body) throw new Error("No presentation found");
                return (
                  e.$router.push({
                    name: "presentation",
                    params: { id: t.body.uniqueAccessCode },
                  }),
                  (e.submiting = !1),
                  !0
                );
              })
              .catch(function (t) {
                u["c"](t),
                  (e.submiting = !1),
                  (e.error =
                    'There\'s no such presentation with this access code (<span class="text-uppercase">'.concat(
                      e.accessCode,
                      "</span>). Please try again."
                    ));
              });
          },
          submitAccessCode: function () {
            this.submiting ||
              ((this.submiting = !0),
              (this.error = ""),
              this.validateAcessCode());
          },
          handleAccessCode: function () {
            this.accessCode = this.accessCode.replace(/\s/g, "");
          },
        },
      },
      p = l,
      m = (n("2995"), n("2877")),
      g = Object(m["a"])(p, r, s, !1, null, "47a2416c", null),
      h = g.exports;
    a["default"].use(i["a"]);
    var b = new i["a"]({
      mode: "history",
      base: "/",
      routes: [
        { path: "", name: "home", component: h },
        {
          path: "/account",
          name: "account",
          component: function () {
            return n.e("chunk-4c276556").then(n.bind(null, "c66d"));
          },
        },
        {
          path: "/:id",
          name: "presentation",
          component: function () {
            return n.e("chunk-8efbebc2").then(n.bind(null, "8b84"));
          },
          children: [
            {
              path: "feedback",
              name: "feedback",
              component: function () {
                return n.e("chunk-0d3edd8e").then(n.bind(null, "6e7a"));
              },
            },
            {
              path: "review",
              name: "lookback",
              component: function () {
                return Promise.all([
                  n.e("chunk-b4edde66"),
                  n.e("chunk-28acc473"),
                ]).then(n.bind(null, "bb44"));
              },
            },
            {
              path: "profile",
              name: "profile",
              component: function () {
                return n.e("chunk-4c276556").then(n.bind(null, "c66d"));
              },
            },
          ],
        },
        { path: "*", redirect: "/" },
      ],
    });
    b.beforeEach(function (e, t, n) {
      var a = "account" === e.name || "profile" === e.name;
      o["a"].checkWhiteLabelDomain() && a ? n({ name: "home" }) : n();
    });
    t["a"] = b;
  },
  4360: function (e, t, n) {
    "use strict";
    var a,
      i = n("2b0e"),
      o = n("2f62"),
      r = n("cebc"),
      s = {
        currentUser: {},
        slides: [],
        idSlide: null,
        logo: null,
        presentation: {},
        showQaSession: !1,
        questions: [],
        tabQnaQuestion: 1,
        questionerName: "",
        questionCount: 0,
        userLoaded: null,
        socketDisconnect: !1,
        connectionError: !1,
        disableScrollBody: !1,
        showRequestPresentation: !1,
        voiceCall: {},
        authenticationCode: "",
        currentDataNextSlide: null,
        activeTabView: "slide",
        isLoadingCurrentUser: !1,
        tsRequest: null,
      },
      u = s,
      c = {
        audienceId: null,
        audienceName: "",
        audienceEmoji: "",
        audienceQuizTeam: null,
        isAudienceEmojiDisabled: !1,
        audienceEmail: "",
        audienceTeam: "",
        offsetTime: 0,
      },
      d = c,
      l = {
        slide: {},
        slideV2: {},
        slideV2Timestamp: {},
        slideOptions: [],
        quizStatus: 1,
        countdownTimeToAnswer: 0,
        isAnswerSubmitted: !1,
        isSlideAnswerSubmitting: {},
        startCountdownPickAnswer: [0],
        isLoadNextSlide: {},
        slideIndex: -1,
        maxLookbackSlideIndex: -1,
      },
      p = l,
      m = { isCreatedNewAttended: !1 },
      g = m,
      h = { currentTokenValue: null, numberTrackingPercent: Math.random() },
      b = h,
      v = Object(r["a"])({}, u, d, p, g, b),
      f = n("069e"),
      w = {
        activeActivity: function (e) {
          return e.slide;
        },
      },
      k = {
        audienceEmoji: function (e, t, n, a) {
          var i = a["presentationSettings/isShownEmojiAvatar"],
            o = e.audienceEmoji || "";
          return i ? o : "";
        },
      },
      y = Object(r["a"])({}, k, w, {
        isEnableABTestQuiz: function (e) {
          return (
            console.log("isEnableABTestQuiz"),
            !!e.presentation && e.presentation.userId % 10 > 2
          );
        },
        isWaitingQuizResult: function (e) {
          var t = e.slide,
            n = e.presentation;
          return (
            !!t &&
            !!n.manualRevealCorrectAnswers &&
            "pickAnswer" === t.type &&
            t.quizStatus === f["a"].RESULT_SCREEN &&
            !t.showCorrectOption
          );
        },
        canShowQuizResult: function (e, t) {
          var n = t.activeActivity.quizStatus === f["a"].RESULT_SCREEN;
          return !e.presentation.manualRevealCorrectAnswers ||
            e.presentation.audiencePacing
            ? n
            : t.activeActivity.showCorrectOption && n;
        },
      }),
      S = (n("96cf"), n("3b8d")),
      A = n("aa27"),
      _ = n("02c5"),
      T = (function () {
        var e = Object(S["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var a, i;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = t.commit),
                        (e.prev = 1),
                        (e.next = 4),
                        A["a"].createOrUpdateAudience(n)
                      );
                    case 4:
                      (i = e.sent), a("setAudience", i), (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e["catch"](1)), _["c"](e.t0);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 8]]
            );
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })(),
      z = function (e, t) {
        var n = e.commit;
        n("setAudienceId", t);
      },
      P = function (e, t) {
        var n = e.commit;
        n("setQuestionerName", t);
      },
      j = {
        setAudienceIdAction: z,
        setQuestionerName: P,
        createOrUpdateAudienceAction: T,
      },
      C = (n("6d67"), n("967c")),
      O = n("e0eb"),
      E = (function () {
        var e = Object(S["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, a, i, o, r, s, u;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.commit),
                      (a = t.state),
                      (i = a.slide),
                      (o = a.audienceId),
                      (r = { pageSize: 250, slideId: i.id, audienceId: o }),
                      (e.next = 5),
                      C["a"].getSlideOptions(r)
                    );
                  case 5:
                    (s = e.sent),
                      (u = s.rows.map(function (e, t) {
                        return (
                          (e.index = t + 1),
                          (e.color = O["a"].getAhaColor(t)),
                          e
                        );
                      })),
                      n("setSlideOptions", u);
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      I = { getSlideOptionsAction: E },
      R = (n("2caf"), n("759f"), n("31d8")),
      N = (function () {
        var e = Object(S["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, a, i, o;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.commit),
                      (a = t.state),
                      (i = a.presentation),
                      (e.next = 4),
                      R["a"].getSlides(i.id)
                    );
                  case 4:
                    return (
                      (o = e.sent), n("setSlides", o), e.abrupt("return", o)
                    );
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      x = function (e, t) {
        var n = e.commit;
        n("setSlidesList", t);
      },
      L = function (e, t) {
        var n = e.commit,
          a = t.index;
        -1 !== a && n("setSlideIndex", a);
      },
      q = function (e, t) {
        var n = e.commit;
        n("setMaxLookbackSlideIndex", t);
      },
      V = function (e, t) {
        var n = e.commit;
        n("setSlideV2", t);
      },
      F = function (e, t) {
        var n = [
          "id",
          "title",
          "createdAt",
          "type",
          "limitChoice",
          "maxPoint",
          "minPoint",
          "multipleChoice",
          "order",
          "stopSubmission",
          "timeToAnswer",
          "slideType",
          "resetTimeStamp",
          "quizStatus",
          "questionIndex",
          "questionCount",
        ];
        return (
          !!n.some(function (n) {
            return e[n] !== t[n];
          }) ||
          !Array.isArray(e.SlideOptions) ||
          !Array.isArray(t.SlideOptions) ||
          e.SlideOptions.length !== t.SlideOptions.length ||
          e.SlideOptions.some(function (e, n) {
            var a = t.SlideOptions[n];
            return (
              e.id !== a.id || e.title !== a.title || e.correct !== a.correct
            );
          })
        );
      },
      D = function (e) {
        var t = e.state;
        F(t.slide, t.slideV2) &&
          _["c"](new Error("New slide data not correct"), {
            extra: {
              slide: t.slide,
              slideOptions: t.slide.SlideOptions,
              slideV2: t.slideV2,
              slideV2Options: t.slideV2.SlideOptions,
            },
          });
      },
      B = {
        getSlidesAction: N,
        setSlidesListAction: x,
        setSlideIndexAction: L,
        setMaxLookbackSlideIndexAction: q,
        setSlideV2Action: V,
        compareDataSlideV2Action: D,
      },
      U = function (e, t) {
        e.commit("setPresentation", t);
      },
      M = function (e, t) {
        e.commit("patchPresentation", t);
      },
      Q = function (e, t) {
        e.commit("setActiveTab", t.activeTab || t);
      },
      W = (function () {
        var e = Object(S["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        n("featureToggles/updateFeatureContext", {
                          userId: t.userId,
                          properties: {
                            uniqueAccessCode: t.uniqueAccessCode,
                            email: t && t.user && t.user.email,
                          },
                          presentationCreatorEmail: t.creator.email,
                          onReady: (function () {
                            var t = Object(S["a"])(
                              regeneratorRuntime.mark(function t() {
                                return regeneratorRuntime.wrap(function (t) {
                                  while (1)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        try {
                                          e();
                                        } catch (n) {
                                          e();
                                        }
                                      case 1:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            );
                            function n() {
                              return t.apply(this, arguments);
                            }
                            return n;
                          })(),
                        });
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })(),
      G = (function () {
        var e = Object(S["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var a, i, o, r, s;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = t.dispatch),
                        (i = n.uniqueAccessCode),
                        (o = n.params),
                        (e.prev = 2),
                        (e.next = 5),
                        A["a"].getAudienceDataCDN(i, o)
                      );
                    case 5:
                      return (
                        (r = e.sent),
                        (s = r.body.presentation || r.body),
                        (e.prev = 7),
                        (e.next = 10),
                        W(s, a)
                      );
                    case 10:
                      e.next = 15;
                      break;
                    case 12:
                      (e.prev = 12),
                        (e.t0 = e["catch"](7)),
                        _["c"](
                          new Error("Update Context Creator Unleash Error"),
                          { extra: { error: e.t0, presentation: s } }
                        );
                    case 15:
                      return e.abrupt("return", r);
                    case 18:
                      throw ((e.prev = 18), (e.t1 = e["catch"](2)), e.t1);
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [2, 18],
                [7, 12],
              ]
            );
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })(),
      Y = {
        setPresentationAction: U,
        setPresentation: U,
        patchPresentationAction: M,
        setActiveTabAction: Q,
        getPresentationByCode: G,
      },
      H = (function () {
        var e = Object(S["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var a;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    (a = t.commit), a("setCurrentUser", n);
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })(),
      K = (function () {
        var e = Object(S["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, a;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.state), (a = n.currentUser), e.abrupt("return", a)
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      $ = (function () {
        var e = Object(S["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var a;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    (a = t.commit), a("setAudienceInfo", n);
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })(),
      J = {
        getCurrentUserAction: K,
        setCurrentUserAction: H,
        setAudienceInfoAction: $,
      },
      Z = n("caa2"),
      X = function (e) {
        return {
          createdBy: e.createdBy,
          presentationId: e.presentationId,
          rating: e.voteCount,
          comment: e.title,
          name: e.audienceName,
          color: e.audienceColor,
        };
      },
      ee = (function () {
        var e = Object(S["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var a;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (a = X(n)), (e.next = 3), Z["a"].sendFeedbackV2(a);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })(),
      te = { sendFeedbackAction: ee },
      ne = function (e, t) {
        var n = e.commit;
        n("setIsCreatedNewAttended", t);
      },
      ae = { setIsCreatedNewAttendedAction: ne },
      ie = function (e, t) {
        var n = e.commit;
        n("setCurrentTokenValue", t);
      },
      oe = { setCurrentTokenValue: ie },
      re = Object(r["a"])({}, j, I, B, Y, J, te, ae, oe, {
        setLang: function (e, t) {
          e.commit("setLang", t);
        },
        setSlide: function (e, t) {
          var n = e.commit;
          t && (n("setSlide", t), n("setSlideV2", t));
        },
        updateSlide: function (e, t) {
          e.commit("updateSlide", t), e.commit("updateSlideV2", t);
        },
        setConnectionError: function (e, t) {
          e.commit("setConnectionError", t);
        },
        setUserLoaded: function (e, t) {
          e.commit("setUserLoaded", t);
        },
        setIsLoadingCurrentUserAction: function (e, t) {
          e.commit("setIsLoadingCurrentUser", t);
        },
      }),
      se = n("56d7"),
      ue = n("5a0c"),
      ce = function (e, t) {
        e.audienceId = t;
      },
      de = function (e, t) {
        e.setQuestionerName = t;
      },
      le = function (e, t) {
        e.audience = t;
      },
      pe = function (e, t) {
        e.offsetTime = t;
      },
      me = {
        setAudienceId: ce,
        setQuestionerName: de,
        setAudience: le,
        setOffsetTime: pe,
      },
      ge = function (e, t) {
        e.slideOptions = t;
      },
      he = { setSlideOptions: ge },
      be = n("bd86"),
      ve = n("968c"),
      fe = function (e, t) {
        e.slides = t;
      },
      we = function (e, t) {
        i["default"].set(e, "slidesList", t), (e.slidesList = t);
      },
      ke = function (e, t) {
        e.presentation && e.presentation.id && -1 != t && (e.slideIndex = t);
      },
      ye = function (e, t) {
        t > e.maxLookbackSlideIndex &&
          ((e.maxLookbackSlideIndex = t),
          ve["a"].setValueByPresentation(
            e.presentation.id,
            "maxLookbackSlideIndex",
            t
          ));
      },
      Se = function (e, t) {
        t && e.slideV2.id != t.id && (e.slideV2 = t);
      },
      Ae = function (e, t) {
        e.slideV2 = Object(r["a"])({}, e.slideV2, t);
      },
      _e = function (e, t) {
        e.slideV2Timestamp = Object(be["a"])({}, t.id, t.timestamp);
      },
      Te = {
        setSlides: fe,
        setSlidesList: we,
        setSlideIndex: ke,
        setMaxLookbackSlideIndex: ye,
        setSlideV2: Se,
        updateSlideV2: Ae,
        updateSlideV2Timestamp: _e,
      },
      ze = function (e, t) {
        e.currentUser = Object(r["a"])({ rememberSettings: {} }, t);
      },
      Pe = function (e, t) {
        (e.audienceName = t.audienceName), (e.audienceEmail = t.audienceEmail);
      },
      je = { setCurrentUser: ze, setAudienceInfo: Pe },
      Ce = function (e, t) {
        e.activeTabView = t;
      },
      Oe = { setActiveTab: Ce },
      Ee = function (e, t) {
        e.isCreatedNewAttended = t;
      },
      Ie = { setIsCreatedNewAttended: Ee },
      Re = function (e, t) {
        e.currentTokenValue = t;
      },
      Ne = { setCurrentTokenValue: Re },
      xe = Object(r["a"])({}, me, he, Te, je, Oe, Ie, Ne, {
        setLang: function (e, t) {
          (se["app"].$i18n.locale = t), ue["locale"](t);
        },
        setSlide: function (e, t) {
          e.slide.id !== t.id && (e.slide = t);
        },
        updateSlide: function (e, t) {
          4 === e.slide.quizStatus &&
            1 === t.quizStatus &&
            e.slide.id === t.id &&
            _["c"](
              "slide.mutation:updateQuizStatus from question screen to lobby screen",
              { extra: { currentSlide: e.slide, updatedSlide: t } }
            ),
            (e.slide = Object(r["a"])({}, e.slide, t));
        },
        setPresentation: function (e, t) {
          (e.presentation.id = null), (e.presentation = t);
        },
        patchPresentation: function (e, t) {
          e.presentation = Object(r["a"])({}, e.presentation, t);
        },
        setConnectionError: function (e, t) {
          e.connectionError = t;
        },
        setUserLoaded: function (e, t) {
          e.userLoaded = t;
        },
        setIsLoadingCurrentUser: function (e, t) {
          e.isLoadingCurrentUser = t;
        },
      }),
      Le = "SET_IS_ZOOM_APP",
      qe = { isZoomApp: "true" == sessionStorage.getItem("zoomApp") },
      Ve = {
        isZoomApp: function (e) {
          return e.isZoomApp;
        },
      },
      Fe = {
        setIsZoomAppAction: function (e, t) {
          var n = e.commit;
          n(Le, t);
        },
      },
      De = Object(be["a"])({}, Le, function (e, t) {
        (e.isZoomApp = t), sessionStorage.setItem("zoomApp", "true");
      }),
      Be = {
        namespaced: !0,
        state: qe,
        getters: Ve,
        actions: Fe,
        mutations: De,
      },
      Ue = Be,
      Me = n("75fc"),
      Qe = (n("20d6"), n("d800")),
      We = n("6c23"),
      Ge = n("0f32"),
      Ye = n.n(Ge),
      He = n("3eea"),
      Ke = n.n(He),
      $e = { AUDIENCE: "Audience" },
      Je = n("472f"),
      Ze = "SET_SENDING_MESSAGE",
      Xe = "SET_SUBSCRIBING_ROOM",
      et = "SET_ACCESS_CODE",
      tt = "SET_PRESENTATION_ID",
      nt = "SET_AUDIENCE_ID",
      at = "SET_AUDIENCE_NAME",
      it = "ADD_MESSAGE",
      ot = "SET_MESSAGES",
      rt = "TOGGLE_CHAT_BOX",
      st = "TOGGLE_FOCUS_CHAT_INPUT",
      ut = "SHOW_CHAT_NOTIFICATION",
      ct = 200,
      dt = 2592e6,
      lt = {
        NEW_MESSAGE: "chat:new-message",
        CLEAR_MESSAGES: "chat:clear-messages",
      },
      pt = function () {
        return window.localStorage;
      },
      mt = function (e) {
        return "chat-messages-".concat(e);
      },
      gt = function (e) {
        var t = Je["a"](mt(e));
        return t || ((t = "[]"), Je["b"](mt(e), t, dt)), JSON.parse(t);
      },
      ht = function (e) {
        var t = e.accessCode,
          n = e.messages,
          a = e.isThrottled;
        return a
          ? Ye()(function () {
              Je["b"](mt(t), JSON.stringify(n), dt);
            }, 1e4)
          : function () {
              pt() && Je["b"](mt(t), JSON.stringify(n), dt);
            };
      },
      bt = function (e) {
        var t = e.uniqueAccessCode;
        pt().removeItem(mt(t));
      },
      vt = function (e) {
        return e ? ((e.received = !0), e) : {};
      },
      ft = function (e, t) {
        return e && t
          ? e.findIndex(function (e) {
              return e.timestamp === t.timestamp;
            })
          : -1;
      },
      wt = function (e, t) {
        return Object(r["a"])({}, t, { isSelf: e === t.userId });
      },
      kt = function (e) {
        return "pickAnswer" === e.slide.type && 1 === e.slide.quizStatus
          ? "Lobby"
          : "qrcode" === e.slide.type
          ? "QR code"
          : "leaderboard" === e.slide.type
          ? "Leaderboard"
          : "Quiz";
      },
      yt = {
        isSendingMessage: !1,
        accessCode: null,
        presentationId: null,
        audienceId: null,
        audienceName: null,
        newMessageHandler: null,
        isSubscribingChatRoom: !1,
        messages: [],
        isOpenChatBox: !1,
        isFocusingChatInput: !1,
        hasChatNotification: !1,
      },
      St = {
        isSendingMessage: function (e) {
          return e.isSendingMessage;
        },
        isSubscribingChatRoom: function (e) {
          return e.isSubscribingChatRoom;
        },
        chatMessages: function (e, t, n, a) {
          var i = a["presentationSettings/isShownEmojiAvatar"];
          return e.messages.map(function (e) {
            return i ? e : Ke()(e, "avatar");
          });
        },
        isOpenChatBox: function (e) {
          return e.isOpenChatBox;
        },
        isFocusingChatInput: function (e) {
          return e.isFocusingChatInput;
        },
        hasChatNotification: function (e) {
          return e.hasChatNotification;
        },
      },
      At = {
        subscribeChatRoomAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a, i, o, r, s, u, c;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a = t.commit),
                        (i = t.dispatch),
                        (o = t.state),
                        (r = n.presentation),
                        (s = n.newMessageHandler),
                        (u = n.audienceId),
                        (c = n.audienceName),
                        r &&
                          r.uniqueAccessCode &&
                          (a(Xe, !0),
                          a(et, r.uniqueAccessCode),
                          a(tt, r.id),
                          a(nt, u),
                          a(at, c),
                          a(ot, gt(r.uniqueAccessCode)),
                          We["a"].getSocket().on(lt.NEW_MESSAGE, function (e) {
                            var t = vt(e);
                            s && s(t), a(it, t);
                          }),
                          We["a"]
                            .getSocket()
                            .on(lt.CLEAR_MESSAGES, function () {
                              i("clearChatMessagesAction", {
                                uniqueAccessCode: o.accessCode,
                              });
                            }));
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        unsubscribeChatRoomAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a, i;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a = t.commit),
                        (i = n.presentation),
                        i &&
                          i.uniqueAccessCode &&
                          (a(Xe, !1),
                          We["a"].getSocket().off(lt.NEW_MESSAGE),
                          We["a"].getSocket().off(lt.CLEAR_MESSAGES));
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        sendMessageAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a, i, o, s, u, c, d, l;
              return regeneratorRuntime.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = t.commit),
                          (i = t.state),
                          (o = t.rootState),
                          (s = n.payload),
                          (u = n.onSuccess),
                          (c = n.onFailure),
                          a(Ze, !0),
                          (d = kt(o)),
                          (e.prev = 4),
                          a(it, s),
                          (e.next = 8),
                          Qe["a"].sendMessage(s)
                        );
                      case 8:
                        (l = e.sent),
                          a(Ze, !1),
                          O["a"].mixpanelTrack(
                            $e.AUDIENCE,
                            "Chat > Audience sends a message successfully",
                            d
                          ),
                          u && u(l),
                          (e.next = 20);
                        break;
                      case 14:
                        (e.prev = 14),
                          (e.t0 = e["catch"](4)),
                          _["c"](e.t0),
                          a(Ze, !1),
                          a(it, Object(r["a"])({}, s, { received: !1 })),
                          c &&
                            (O["a"].mixpanelTrack(
                              $e.AUDIENCE,
                              "Chat > ".concat(
                                d,
                                " > Audience sends a message failed"
                              ),
                              ""
                                .concat(i.presentationId, " > Chat > ")
                                .concat(i.audienceName, " > ")
                                .concat(e.t0)
                            ),
                            c(e.t0));
                      case 20:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[4, 14]]
              );
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        clearChatMessagesAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a, i;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a = t.commit),
                        (i = n.uniqueAccessCode),
                        a(ot, []),
                        bt({ uniqueAccessCode: i });
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        toggleChatBoxAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a = t.commit), n ? a(rt, n.isOpen) : a(rt);
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        toggleFocusChatInputAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a = t.commit), n ? a(st, n.isFocus) : a(st);
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        showChatNotificationAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a = t.commit), a(ut, n.isShowing);
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      _t =
        ((a = {}),
        Object(be["a"])(a, Ze, function (e, t) {
          e.isSendingMessage = t;
        }),
        Object(be["a"])(a, Xe, function (e, t) {
          e.isSubscribingChatRoom = t;
        }),
        Object(be["a"])(a, et, function (e, t) {
          e.accessCode = t;
        }),
        Object(be["a"])(a, tt, function (e, t) {
          e.presentationId = t;
        }),
        Object(be["a"])(a, nt, function (e, t) {
          e.audienceId = t;
        }),
        Object(be["a"])(a, at, function (e, t) {
          e.audienceName = t;
        }),
        Object(be["a"])(a, it, function (e, t) {
          var n = ft(e.messages, t),
            a = wt(e.audienceId, t);
          if (-1 === n) {
            (e.messages = [].concat(Object(Me["a"])(e.messages), [a])),
              e.messages.length > ct && e.messages.splice(0, 1);
            var i = ht({
              accessCode: e.accessCode,
              messages: e.messages,
              throttled: !0,
            });
            i();
          } else {
            var o = Object(Me["a"])(e.messages);
            (o[n] = a), (e.messages = o);
            var r = ht({
              accessCode: e.accessCode,
              messages: e.messages,
              throttled: !1,
            });
            r();
          }
        }),
        Object(be["a"])(a, ot, function (e, t) {
          e.messages = t;
        }),
        Object(be["a"])(a, rt, function (e, t) {
          e.isOpenChatBox = "boolean" === typeof t ? t : !e.isOpenChatBox;
        }),
        Object(be["a"])(a, st, function (e, t) {
          e.isFocusingChatInput =
            "boolean" === typeof t ? t : !e.isFocusingChatInput;
        }),
        Object(be["a"])(a, ut, function (e, t) {
          e.hasChatNotification = t;
        }),
        a),
      Tt = {
        namespaced: !0,
        state: yt,
        getters: St,
        actions: At,
        mutations: _t,
      },
      zt = (n("ac6a"), n("f3e2"), n("2ef0")),
      Pt = (n("c5f6"), n("7f7f"), n("0cd8"), n("d225")),
      jt = n("b0b4"),
      Ct = n("23e4"),
      Ot = n("db49"),
      Et = n("1544"),
      It = (function () {
        function e() {
          Object(Pt["a"])(this, e);
          try {
            (this.unleashClient = new Ct["UnleashClient"]({
              url: Ot["a"].unleashEndpoint,
              clientKey: Ot["a"].unleashClientKey,
              appName: "presenter",
              createAbortController: function () {
                return null;
              },
            })),
              this.unleashClient.start();
          } catch (t) {
            Et["a"].captureException(t), (this.unleashClient = null);
          }
        }
        return (
          Object(jt["a"])(e, [
            {
              key: "isFeatureEnabled",
              value: function (e) {
                if (!this.unleashClient) return !1;
                try {
                  return this.unleashClient.isEnabled(e);
                } catch (t) {
                  return !1;
                }
              },
            },
            {
              key: "getVariant",
              value: function (e) {
                if (!this.unleashClient)
                  return { name: "disabled", enabled: !1 };
                try {
                  return this.unleashClient.getVariant(e);
                } catch (t) {
                  return { name: "disabled", enabled: !1 };
                }
              },
            },
          ]),
          e
        );
      })(),
      Rt = new It(),
      Nt = {
        "AHA-30192-presenter-change-slide": new Date(
          Date.UTC(2024, 11, 11, 10, 0, 0)
        ),
        "kv-sync-emqx-for-live-stats": new Date(Date.UTC(2025, 0, 16, 0, 0, 0)),
      },
      xt = {
        "AHA-30192-presenter-change-slide": new Date(
          Date.UTC(2024, 11, 7, 10, 0, 0)
        ),
        "kv-sync-emqx-for-live-stats": new Date(Date.UTC(2025, 0, 16, 0, 0, 0)),
      },
      Lt = "production" === Ot["a"].env ? Nt : xt,
      qt = Lt,
      Vt = Rt.unleashClient,
      Ft = {
        features: {},
        isInitialized: !1,
        loading: { initialization: !1, contextUpdate: !1 },
        contextUpdateCounter: 0,
        context: {},
      },
      Dt = {
        setFeatures: function (e, t) {
          var n = t.reduce(function (e, t) {
            return (e[t.name] = t), e;
          }, {});
          e.features = n;
        },
        setInitialized: function (e, t) {
          e.isInitialized = t;
        },
        setLoading: function (e, t) {
          var n = t.type,
            a = t.loading;
          "contextUpdate" === n
            ? (a
                ? (e.contextUpdateCounter += 1)
                : (e.contextUpdateCounter = Math.max(
                    0,
                    e.contextUpdateCounter - 1
                  )),
              (e.loading.contextUpdate = e.contextUpdateCounter > 0))
            : (e.loading[n] = a);
        },
        setContext: function (e, t) {
          e.context = Object(r["a"])({}, e.context, t);
        },
      },
      Bt = {
        initializeFeatureToggles: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t) {
              var n;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = t.commit),
                        n("setLoading", {
                          type: "initialization",
                          loading: !0,
                        });
                      try {
                        Vt.on("ready", function () {
                          var e = Vt.getAllToggles();
                          n("setFeatures", e),
                            n("setInitialized", !0),
                            n("setLoading", {
                              type: "initialization",
                              loading: !1,
                            });
                        });
                      } catch (a) {
                        n("setLoading", !1), Et["a"].captureException(a);
                      } finally {
                        n("setLoading", {
                          type: "initialization",
                          loading: !1,
                        });
                      }
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        updateFeatureContext: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a, i, o;
              return regeneratorRuntime.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((a = t.state),
                          (i = t.commit),
                          i("setLoading", {
                            type: "contextUpdate",
                            loading: !0,
                          }),
                          i("setContext", n),
                          (e.prev = 3),
                          !Vt)
                        ) {
                          e.next = 9;
                          break;
                        }
                        return (e.next = 7), Vt.updateContext(a.context);
                      case 7:
                        (o = Vt.getAllToggles()), i("setFeatures", o);
                      case 9:
                        e.next = 14;
                        break;
                      case 11:
                        (e.prev = 11),
                          (e.t0 = e["catch"](3)),
                          Et["a"].captureException(e.t0);
                      case 14:
                        return (
                          (e.prev = 14),
                          i("setLoading", {
                            type: "contextUpdate",
                            loading: !1,
                          }),
                          n.onReady && n.onReady(),
                          e.finish(14)
                        );
                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 11, 14, 18]]
              );
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      Ut = {
        isFeatureEnabled: function (e) {
          return function (t) {
            return e.features[t] && e.features[t].enabled;
          };
        },
        getVariant: function (e) {
          return function (t) {
            return e.features[t]
              ? e.features[t].variant
              : { name: "disabled", enabled: !1, payload: null };
          };
        },
        isUnleashInitialized: function (e) {
          return e.isInitialized;
        },
        isLoadingFeatures: function (e) {
          return e.loading.initialization || e.loading.contextUpdate;
        },
        isPresentationCreatedAfterTurnOnFlag: function (e, t, n) {
          return function (e) {
            if (!n.presentation || !e || !qt[e]) return !1;
            var t = qt[e];
            return new Date(n.presentation.createdAt) > t;
          };
        },
        canSubscribeMqttChangeSlideEvent: function (e, t) {
          return t.isFeatureEnabled("AHA-30192-presenter-change-slide");
        },
        canUseNewChangeSlideMechanism: function (e, t) {
          return (
            t.isFeatureEnabled("AHA-30192-audience-change-slide") &&
            t.isPresentationCreatedAfterTurnOnFlag(
              "AHA-30192-presenter-change-slide"
            )
          );
        },
        canMergePickImageIntoPickAnswer: function (e, t) {
          return t.isFeatureEnabled("release-merge-pick-image");
        },
        showConnectionStatus: function (e, t) {
          return t.isFeatureEnabled("connection-status");
        },
        enableForBigEvent: function (e, t) {
          return t.isFeatureEnabled("enable-for-big-event");
        },
        canUseNewColors: function (e, t) {
          return t.isFeatureEnabled("release-ahaslides-color-palette");
        },
      },
      Mt = function (e, t) {
        return e["featureToggles/isFeatureEnabled"](t);
      },
      Qt = function (e, t) {
        return e["featureToggles/isPresentationCreatedAfterTurnOnFlag"](t);
      },
      Wt = function (e, t) {
        return (
          !!(e && e.resetTimeStamp && t && qt[t]) &&
          new Date(Number(e.resetTimeStamp)) > qt[t]
        );
      },
      Gt = {
        namespaced: !0,
        state: Ft,
        mutations: Dt,
        actions: Bt,
        getters: Ut,
      },
      Yt = "showEmojiAvatar",
      Ht = { isEnableAudienceAdmissionForm: !1 },
      Kt = {
        canUseToggleEmojiAvatar: function (e, t, n, a) {
          return Mt(a, "release-toggle-emoji-avatar");
        },
        isEnableAudienceAdmissionForm: function (e, t, n) {
          var a = n.presentation,
            i = a.audienceAdmission,
            o = a.disableFormJoinPresentation,
            r = !1;
          return (
            !o &&
              i &&
              i.isAudienceAdmission &&
              i.fields &&
              i.fields.length &&
              i.fields.forEach(function (e) {
                "name" !== e.type || n.audienceName || (r = !0),
                  "email" !== e.type || n.audienceEmail || (r = !0),
                  "team" !== e.type || n.audienceTeam || (r = !0);
              }),
            r
          );
        },
        isShownEmojiAvatar: function (e, t, n) {
          var a,
            i,
            o =
              null === (a = n.presentationAttributeModule) || void 0 === a
                ? void 0
                : null === (i = a.presentationAttribute) || void 0 === i
                ? void 0
                : i[Yt],
            r = !!Object(zt["isUndefined"])(o) || o;
          return !t.canUseToggleEmojiAvatar || r;
        },
      },
      $t = {},
      Jt = {},
      Zt = {
        namespaced: !0,
        state: Ht,
        getters: Kt,
        actions: $t,
        mutations: Jt,
      },
      Xt = n("53b0"),
      en = n("d697"),
      tn = { presentationAttribute: {} },
      nn = {
        setPresentationAttribute: function (e, t) {
          e.presentationAttribute = t;
        },
        updatePresentationAttribute: function (e, t) {
          i["default"].set(
            e.presentationAttribute,
            t.attributeName,
            t.attributeValue
          );
        },
      },
      an = {
        getPresentationAttributeAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a, i;
              return regeneratorRuntime.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = t.commit),
                          (e.prev = 1),
                          (e.next = 4),
                          Xt["a"].getPresentationAttributes(n)
                        );
                      case 4:
                        return (
                          (i = e.sent),
                          a("setPresentationAttribute", i.body),
                          e.abrupt("return", i.body)
                        );
                      case 9:
                        return (
                          (e.prev = 9),
                          (e.t0 = e["catch"](1)),
                          _["d"](
                            new Error("Get Presentation Attribute Error"),
                            {
                              level: "warning",
                              extra: { presentationId: n, error: e.t0 },
                            }
                          ),
                          e.abrupt("return", {})
                        );
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 9]]
              );
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      on = {
        presentationColorPalette: function (e, t, n, a) {
          var i, o;
          return null !== (i = e.presentationAttribute) &&
            void 0 !== i &&
            null !== (o = i.colorPalette) &&
            void 0 !== o &&
            o.colors
            ? e.presentationAttribute.colorPalette.colors
            : a["featureToggles/canUseNewColors"]
            ? en["a"].colors2025
            : en["a"].colors;
        },
        presentationLighterColorPalette: function (e, t, n, a) {
          var i, o;
          return null !== (i = e.presentationAttribute) &&
            void 0 !== i &&
            null !== (o = i.colorPalette) &&
            void 0 !== o &&
            o.lighterColors
            ? e.presentationAttribute.colorPalette.lighterColors
            : a["featureToggles/canUseNewColors"]
            ? en["a"].lighterColors2025
            : en["a"].lighterColors;
        },
        presentationAttributeColorPalette: function (e) {
          return e.presentationAttribute.colorPalette || {};
        },
      },
      rn = {
        namespaced: !0,
        state: tn,
        mutations: nn,
        actions: an,
        getters: on,
      };
    n("a481");
    function sn(e) {
      var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      e = e.replace(t, function (e, t, n, a) {
        return t + t + n + n + a + a;
      });
      var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
      return n
        ? {
            r: parseInt(n[1], 16),
            g: parseInt(n[2], 16),
            b: parseInt(n[3], 16),
          }
        : null;
    }
    function un() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "#ffffff",
        t = sn(e),
        n = t.r,
        a = t.g,
        i = t.b,
        o = (0.299 * n + 0.587 * a + 0.114 * i) / 255;
      return o > 0.5;
    }
    var cn,
      dn = {
        textColour: "#313131",
        baseColour: "#ffffff",
        backgroundImage: null,
        visibility: 20,
      },
      ln = [
        "themeName",
        "textColour",
        "baseColour",
        "visibility",
        "backgroundImage",
        "themeThumbnail",
        "themeId",
        "themeActive",
        "colorPalette",
        "logo",
        "fontFamily",
      ],
      pn = {},
      mn = function (e) {
        var t = Object(r["a"])({}, e, {
          textColour: "" === e.textColour ? null : e.textColour,
          baseColour: "" === e.baseColour ? null : e.baseColour,
          visibility: -1 === e.visibility ? null : e.visibility,
        });
        return Object(zt["omitBy"])(t, zt["isNil"]);
      },
      gn = {
        canViewThemeGallery: function (e, t, n, a) {
          return Mt(a, "release-theme-gallery");
        },
        currentPresentationTheme: function (e, t, n) {
          var a = n.presentationAttributeModule.presentationAttribute,
            i = Object(zt["pick"])(a, ln);
          return Object(r["a"])({}, dn, i);
        },
        activeActivityWithTheme: function (e, t, n, a) {
          var i = null === a || void 0 === a ? void 0 : a.activeActivity,
            o = t.currentPresentationTheme;
          return t.canViewThemeGallery
            ? Object(r["a"])(
                {},
                Object(zt["omit"])(o, ["backgroundImage"]),
                mn(i)
              )
            : i;
        },
        isTextColourLight: function (e, t, n, a) {
          var i = null === a || void 0 === a ? void 0 : a.activeActivity,
            o = t.activeActivityWithTheme;
          return t.canViewThemeGallery
            ? un(o.textColour)
            : "#ffffff" === i.textColour;
        },
        activeActivityBaseColour: function (e, t, n, a) {
          var i = mn(null === a || void 0 === a ? void 0 : a.activeActivity),
            o = i.baseColour;
          return o;
        },
        contrastBackgroundColour: function (e, t) {
          var n =
              null === t || void 0 === t ? void 0 : t.activeActivityWithTheme,
            a = n.textColour,
            i = n.baseColour;
          return t.canViewThemeGallery
            ? un(a)
              ? dn.textColour
              : dn.baseColour
            : i;
        },
      },
      hn = { namespaced: !0, state: pn, getters: gn },
      bn = {
        presentationChat: Tt,
        presentationSettings: Zt,
        presentationAttributeModule: rn,
        themeModule: hn,
      },
      vn = n("92ad"),
      fn = "local" === Ot["a"].env && !Ot["a"].isLiveProxyUrlSet,
      wn = Object(r["a"])({}, vn["g"], {
        canUseKvSyncLiveStats: function (e, t, n, a) {
          return (
            (Qt(a, "kv-sync-emqx-for-live-stats") ||
              Wt(n.presentation, "kv-sync-emqx-for-live-stats")) &&
            Mt(a, "kv-sync-emqx-for-live-stats")
          );
        },
        canSubmitReactionEmqx: function (e, t) {
          return t.canUseKvSyncLiveStats;
        },
        canSubscribeReactionEmqx: function (e, t) {
          return t.canUseKvSyncLiveStats;
        },
        canUseLiveStatsForQuizV2: function (e, t, n, a) {
          return !fn && Mt(a, "livestats-quiz-submission-v2");
        },
        canUseLiveStatsForQuiz: function (e, t, n, a) {
          return !fn && Mt(a, "livestats-quiz-submission");
        },
        canUsePollLiveProxy: function (e, t, n, a) {
          return (
            !!t.canUseKvSyncLiveStats &&
            !fn &&
            (!_a.state.slide.showVotingResultsOnAudience ||
              ("multipleChoice" !== _a.state.slide.type &&
                "imageChoice" !== _a.state.slide.type)) &&
            Mt(a, "liveproxy-submit-poll")
          );
        },
        canUsePollLiveApi: function (e, t) {
          return t.canUseKvSyncLiveStats;
        },
        canUseScaleLiveApi: function (e, t) {
          return t.canUseKvSyncLiveStats;
        },
        canUseWordCloudLiveApi: function (e, t) {
          return t.canUseKvSyncLiveStats;
        },
        canUseWordCloudLiveProxy: function (e, t, n, a) {
          return (
            !!t.canUseKvSyncLiveStats &&
            !fn &&
            Mt(a, "liveproxy-submit-wordcloud")
          );
        },
        canUseScaleLiveProxy: function (e, t, n, a) {
          return (
            !!t.canUseKvSyncLiveStats && !fn && Mt(a, "liveproxy-submit-scale")
          );
        },
        canUseReactionLiveProxy: function (e, t, n, a) {
          return (
            !!t.canUseKvSyncLiveStats &&
            !fn &&
            Mt(a, "liveproxy-submit-reaction")
          );
        },
      }),
      kn = wn,
      yn = n("eac2"),
      Sn = n("f9f0"),
      An = {
        fetchStatsByKeyAction: Object(vn["d"])(yn["a"], Ot["a"]),
        fetchStatsByWildCardAction: Object(vn["e"])(yn["a"], Ot["a"]),
        subscribeStatsAction: Object(vn["i"])(Sn["c"]),
        unsubscribeStatsAction: Object(vn["j"])(Sn["c"]),
      },
      _n = An,
      Tn = {
        namespaced: !0,
        state: vn["f"],
        mutations: Object(vn["h"])(i["default"]),
        actions: _n,
        getters: kn,
      },
      zn = n("538b"),
      Pn = "SET_USER_CONNECTION_STATUS",
      jn = "SET_SOCKET_STATUS",
      Cn = "SET_EMQX_STATUS",
      On = "SET_GENERAL_API_STATUS",
      En = "SET_LIVE_API_STATUS",
      In = "SET_SHOW_CONNECTION_INFORM",
      Rn = {
        userConnectionStatus: zn["a"].ERROR,
        generalApiStatus: zn["a"].GOOD,
        liveApiStatus: zn["a"].GOOD,
        socketStatus: zn["a"].ERROR,
        emqxStatus: zn["a"].ERROR,
        isReconnecting: !1,
        showConnectionInform: !1,
      },
      Nn = {
        userConnectionStatus: function (e) {
          return e.userConnectionStatus;
        },
        generalApiStatus: function (e) {
          return e.generalApiStatus;
        },
        liveApiStatus: function (e) {
          return e.liveApiStatus;
        },
        socketStatus: function (e) {
          return e.socketStatus;
        },
        emqxStatus: function (e) {
          return e.emqxStatus;
        },
        showConnectionInform: function (e) {
          return e.showConnectionInform;
        },
        connectionStatus: function (e) {
          return e.isReconnecting
            ? zn["a"].RECONNECTING
            : e.userConnectionStatus === zn["a"].ERROR
            ? zn["a"].RECONNECTING
            : e.generalApiStatus === zn["a"].UNSTABLE
            ? zn["a"].UNSTABLE
            : zn["a"].GOOD;
        },
      },
      xn = {
        setUserConnection: function (e, t) {
          var n = e.commit;
          n(Pn, t), t === zn["a"].ERROR && n(In, !0);
        },
        setSocketConnection: function (e, t) {
          var n = e.commit;
          n(jn, t);
        },
        setEmqxConnection: function (e, t) {
          var n = e.commit;
          n(Cn, t);
        },
        setGeneralApiConnection: function (e, t) {
          var n = e.commit;
          n(On, t);
        },
        setLiveApiConnection: function (e, t) {
          var n = e.commit;
          n(En, t);
        },
        setShowConnectionInform: function (e, t) {
          var n = e.commit;
          n(In, t);
        },
      },
      Ln =
        ((cn = {}),
        Object(be["a"])(cn, Pn, function (e, t) {
          e.userConnectionStatus = t;
        }),
        Object(be["a"])(cn, jn, function (e, t) {
          e.socketStatus = t;
        }),
        Object(be["a"])(cn, Cn, function (e, t) {
          e.emqxStatus = t;
        }),
        Object(be["a"])(cn, On, function (e, t) {
          e.generalApiStatus = t;
        }),
        Object(be["a"])(cn, En, function (e, t) {
          e.liveApiStatus = t;
        }),
        Object(be["a"])(cn, In, function (e, t) {
          e.showConnectionInform = t;
        }),
        cn),
      qn = {
        namespaced: !0,
        state: Rn,
        getters: Nn,
        actions: xn,
        mutations: Ln,
      },
      Vn = (n("6762"), n("2fdb"), n("0558")),
      Fn = n("6dab"),
      Dn = n("768b"),
      Bn =
        (n("55dd"),
        {
          formatSlide: function (e) {
            e.SlideOptions || (e.SlideOptions = []),
              e.SlideOptions.sort(function (e, t) {
                return e.order - t.order;
              }),
              e.hints &&
                e.hints.length &&
                e.hints.sort(function (e, t) {
                  return e.order - t.order;
                });
            for (var t = 0; t < e.SlideOptions.length; t++)
              if (
                e.SlideOptions[t].audience &&
                e.SlideOptions[t].audience === _a.state.audienceId
              ) {
                e.openEndedSubmited = !0;
                break;
              }
            if (e.answer && e.answer.vote.length) {
              var n = Object(Dn["a"])(e.answer.vote, 1);
              e.radioSelectded = n[0];
            }
            try {
              e.otherCorrectQuiz = JSON.parse(e.otherCorrectQuiz);
            } catch (a) {
              _["c"](a), (e.otherCorrectQuiz = []);
            }
            return e.otherCorrectQuiz || (e.otherCorrectQuiz = []), e;
          },
        }),
      Un = {
        sleep: function (e) {
          return new Promise(function (t) {
            setTimeout(function () {
              t();
            }, e);
          });
        },
      },
      Mn = "nextback/setPresenting",
      Qn = { slideMap: {}, editor: null, slideList: [], activeSlideId: null },
      Wn = {
        subscribeSlideChangeAction: function (e, t) {
          var n = e.commit,
            a = e.dispatch,
            i = t.presentation,
            o = t.editor;
          i.audiencePacing ||
            (i.id &&
              (n("updateEditor", o),
              a("kvSync/listenConnectionEventAction", null, { root: !0 })));
        },
        unsubscribeSlideChangeAction: function (e, t) {
          Vn["a"].unsubscribeResourceUri(
            "/LIVE_SESSION/".concat(t.id, "/ACTIVE_ACTIVITY")
          );
        },
        changeSlideAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a, i, o, s, u, c;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((a = t.dispatch),
                        (i = t.state),
                        (o = t.commit),
                        i.slideMap[n.id] &&
                          "pickAnswer" == i.slideMap[n.id].type &&
                          n.quizStatus &&
                          o("updateSlideMap", n),
                        i.activeSlideId != n.id)
                      ) {
                        e.next = 9;
                        break;
                      }
                      return (e.next = 5), a("getSlideDataAction", n.id);
                    case 5:
                      (u = e.sent),
                        (s = {
                          _from: "live",
                          type: "slide",
                          action: "update",
                          data: Object(r["a"])({}, u, n),
                        }),
                        (e.next = 10);
                      break;
                    case 9:
                      s = {
                        _from: "live",
                        type: "presentation",
                        action: "nextSlide",
                        data: Object(r["a"])({}, n, { id: n.id }),
                        socketId: n.socketId,
                      };
                    case 10:
                      (c = Object(Fn["a"])(s.type)),
                        c && c(s, i.editor),
                        o("setActiveSlideId", n.id),
                        a("prefetchNextSlideAction");
                    case 14:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        prefetchSlidesAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a, i, o, r;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = t.dispatch),
                        (i = t.commit),
                        (o = 1e3),
                        (r = (function () {
                          var e = Object(S["a"])(
                            regeneratorRuntime.mark(function e(t) {
                              var n,
                                r,
                                s = arguments;
                              return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (n =
                                          s.length > 1 &&
                                          void 0 !== s[1] &&
                                          s[1]),
                                        (e.next = 3),
                                        a("fetchSlideAction", t)
                                      );
                                    case 3:
                                      if (
                                        ((r = e.sent),
                                        i("updateSlideMap", r),
                                        n)
                                      ) {
                                        e.next = 8;
                                        break;
                                      }
                                      return (e.next = 8), Un.sleep(o);
                                    case 8:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (e.next = 5),
                        n.reduce(
                          (function () {
                            var e = Object(S["a"])(
                              regeneratorRuntime.mark(function e(t, a, i) {
                                var o, s;
                                return regeneratorRuntime.wrap(function (e) {
                                  while (1)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), t;
                                      case 2:
                                        return (
                                          (o = a.id || a),
                                          (s = i === n.length - 1),
                                          e.abrupt("return", r(o, s))
                                        );
                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function (t, n, a) {
                              return e.apply(this, arguments);
                            };
                          })(),
                          Promise.resolve()
                        )
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        prefetchNextSlideAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t) {
              var n, a, i, o;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.state),
                        (a = t.dispatch),
                        (i = n.slideList.findIndex(function (e) {
                          return e.id === n.activeSlideId;
                        })),
                        !(i >= 0 && i < n.slideList.length - 1))
                      ) {
                        e.next = 7;
                        break;
                      }
                      if (
                        ((o = n.slideList[i + 1]), "leaderboard" === o.type)
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 7), a("getSlideDataAction", o.id);
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        fetchSlideAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a, i, o;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), R["a"].getSlideDetailV2(n);
                    case 2:
                      if (((a = e.sent), a.id)) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 5:
                      if (!a.canvasBlocksUrl) {
                        e.next = 13;
                        break;
                      }
                      return (e.next = 8), fetch(a.canvasBlocksUrl);
                    case 8:
                      return (i = e.sent), (e.next = 11), i.json();
                    case 11:
                      (o = e.sent), (a.canvasBlocks = o);
                    case 13:
                      return e.abrupt("return", Bn.formatSlide(a));
                    case 14:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getSlideDataAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a, i, o, r;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((a = t.state),
                        (i = t.commit),
                        (o = t.dispatch),
                        !(n in a.slideMap))
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        JSON.parse(JSON.stringify(a.slideMap[n]))
                      );
                    case 3:
                      return (e.next = 5), o("fetchSlideAction", n);
                    case 5:
                      return (
                        (r = e.sent),
                        i("updateSlideMap", r),
                        e.abrupt("return", JSON.parse(JSON.stringify(r)))
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        syncActiveSlideAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a = t.dispatch),
                        a(
                          "kvSync/subscribeKeyAction",
                          { key: "/activeSlide/".concat(n) },
                          { root: !0 }
                        );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      Gn = {
        updateEditor: function (e, t) {
          e.editor = t;
        },
        updateSlideMap: function (e, t) {
          "leaderboard" != t.type &&
            t.id &&
            (e.slideMap[t.id] || (e.slideMap[t.id] = {}),
            (e.slideMap[t.id] = Object(r["a"])({}, e.slideMap[t.id], t)));
        },
        clearSlideMap: function (e) {
          e.slideMap = {};
        },
        setSlideList: function (e, t) {
          e.slideList = t;
        },
        setActiveSlideId: function (e, t) {
          e.activeSlideId = t;
        },
        setPresenting: function (e, t) {
          e.isPresenting = t;
        },
      },
      Yn = {
        setSlides: function (e) {
          var t = e.store,
            n = e.mutation;
          t.commit("nextback/setSlideList", n.payload),
            t.dispatch("nextback/prefetchNextSlideAction", n.payload);
          var a = t.state.presentation.id;
          if (!a)
            throw Error(
              "PresentationId is null or undefined, fetching sequene might be wrong"
            );
        },
        setPresentation: function (e) {
          var t = e.store,
            n = e.mutation;
          t.commit("nextback/setActiveSlideId", n.payload.activeSlide);
          var a = n.payload.id;
          t.dispatch("nextback/syncActiveSlideAction", a),
            t.commit(Mn, n.payload.presenting);
        },
      },
      Hn = {
        "kvSync/updateKeyValueAction": function (e) {
          var t = e.action,
            n = e.store,
            a = t.payload,
            i = a.key,
            o = a.value;
          i.includes("/activeSlide/") &&
            n.dispatch("nextback/changeSlideAction", JSON.parse(o));
        },
        "websocket/newMessage": (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t) {
              var n, a, i, o, r, s;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.action),
                        (a = t.store),
                        (i = n.payload),
                        "presentation" === i.type &&
                          "presentation-update" === i.action &&
                          "false" === i.data.presenting &&
                          (a.commit("nextback/clearSlideMap"),
                          a.commit(Mn, !1)),
                        "presentation" !== i.type || "presenting" !== i.action)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (
                        a.commit("nextback/clearSlideMap"),
                        (e.next = 7),
                        a.dispatch(
                          "nextback/getSlideDataAction",
                          null === (o = a.state) || void 0 === o
                            ? void 0
                            : null === (r = o.nextback) || void 0 === r
                            ? void 0
                            : r.activeSlideId
                        )
                      );
                    case 7:
                      (s = e.sent),
                        a.dispatch("updateSlide", s),
                        a.commit(Mn, !0);
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      Kn = function (e) {
        e.subscribe(function (t) {
          e.getters["featureToggles/canUseNewChangeSlideMechanism"] &&
            t.type in Yn &&
            Yn[t.type]({ store: e, mutation: t });
        }),
          e.subscribeAction(function (t) {
            e.getters["featureToggles/canUseNewChangeSlideMechanism"] &&
              t.type in Hn &&
              Hn[t.type]({ store: e, action: t });
          });
      },
      $n = {
        namespaced: !0,
        state: Qn,
        actions: Wn,
        mutations: Gn,
        plugin: Kn,
      },
      Jn = (n("1c4c"), n("5df3"), n("4f7f"), n("6c5b")),
      Zn = { subscribedKeys: new Set() },
      Xn = function (e) {
        var t = e.state,
          n = e.dispatch;
        Array.from(t.subscribedKeys).forEach(function (e) {
          n("fetchValueByKeyAction", { key: e });
        });
      },
      ea = {
        listenConnectionEventAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t) {
              var n, a, i, o;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.dispatch),
                        (a = t.state),
                        (i = Jn["a"].getClient()),
                        i)
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      i.on("reconnect", function () {
                        Xn({ state: a, dispatch: n });
                      }),
                        (o = function () {
                          Xn({ state: a, dispatch: n });
                        }),
                        window.addEventListener("online", o);
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        fetchValueByKeyAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a, i, o;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((a = t.dispatch), n.key)) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return");
                    case 3:
                      return (e.next = 5), yn["a"].getValueByKey(n.key);
                    case 5:
                      (i = e.sent),
                        (o = i.body.value),
                        a("updateKeyValueAction", { key: n.key, value: o });
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        createKeyValueAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), yn["a"].createKeyValue(n);
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        subscribeKeyAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a, i;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a = t.dispatch),
                        (i = t.commit),
                        a("fetchValueByKeyAction", n),
                        Jn["a"].subscribeKey(
                          n.key,
                          function (e, t) {
                            a("updateKeyValueAction", { key: e, value: t }),
                              n.callback && n.callback(e, t);
                          },
                          n.options
                        ),
                        i("addSubscribedKey", n.key);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        updateKeyValueAction: function () {},
        unsubscribeKeyAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a = t.commit),
                        Jn["a"].unsubscribeKey(n),
                        a("removeSubscribedKey", n);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      ta = {
        addSubscribedKey: function (e, t) {
          e.subscribedKeys.add(t);
        },
        removeSubscribedKey: function (e, t) {
          e.subscribedKeys.delete(t);
        },
      },
      na = { namespaced: !0, state: Zn, actions: ea, mutations: ta },
      aa = { isLeaderboardVisible: !1 },
      ia = { TOGGLE_LEADERBOARD_VISIBILITY: "TOGGLE_LEADERBOARD_VISIBILITY" },
      oa = "remove-leaderboard-slides",
      ra = {
        canUseNewLeaderboard: function (e, t, n, a) {
          return Mt(a, oa) && Qt(a, oa);
        },
        isLeaderboardVisible: function (e, t) {
          return !!t.canUseNewLeaderboard && e.isLeaderboardVisible;
        },
      },
      sa = {
        subscribeLeaderboardVisibilityAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a, i, o;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((a = t.getters),
                        (i = t.dispatch),
                        (o = n.presentation),
                        a.canUseNewLeaderboard)
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      i(
                        "kvSync/subscribeKeyAction",
                        { key: "/leaderboards/".concat(o.id) },
                        { root: !0 }
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      ua = Object(be["a"])(
        {},
        ia.TOGGLE_LEADERBOARD_VISIBILITY,
        function (e, t) {
          e.isLeaderboardVisible =
            "boolean" === typeof t ? t : !e.isLeaderboardVisible;
        }
      ),
      ca = {
        updateLeaderboardVisibility: function (e) {
          e.subscribeAction(function (t) {
            if ("kvSync/updateKeyValueAction" === t.type) {
              var n = t.payload,
                a = n.key,
                i = n.value;
              a.includes("/leaderboards/") &&
                e.commit(
                  "leaderboard/".concat(ia.TOGGLE_LEADERBOARD_VISIBILITY),
                  JSON.parse(i).isVisible
                );
            }
          });
        },
      },
      da = {
        namespaced: !0,
        state: aa,
        getters: ra,
        actions: sa,
        mutations: ua,
        plugins: ca,
      },
      la = da,
      pa = { newMessage: function () {} },
      ma = { namespaced: !0, actions: pa },
      ga = n("0025"),
      ha = { UPDATE_QUIZ_RESPONSE: "UPDATE_QUIZ_RESPONSE" },
      ba = { quizResult: null },
      va = {
        quizResult: function (e) {
          return e.quizResult;
        },
      },
      fa = {
        subscribeQuizResponseAction: (function () {
          var e = Object(S["a"])(
            regeneratorRuntime.mark(function e(t, n) {
              var a, i;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = t.dispatch),
                        (i = n.audienceId),
                        (e.next = 4),
                        a(
                          "kvSync/subscribeKeyAction",
                          { key: "QUIZ_RESULTS/".concat(i) },
                          { root: !0 }
                        )
                      );
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      wa = Object(be["a"])({}, ha.UPDATE_QUIZ_RESPONSE, function (e, t) {
        e.quizResult = t;
      }),
      ka = {
        updateQuizResponse: function (e) {
          e.subscribeAction(function (e) {
            if ("kvSync/updateKeyValueAction" === e.type) {
              var t = e.payload,
                n = t.key,
                a = t.value;
              if (n.includes("QUIZ_RESULTS/") && a) {
                var i = JSON.parse(a),
                  o = ""
                    .concat(
                      ga["a"].constantObjectSubcriptionType
                        .submitQuizAnswerType,
                      "-"
                    )
                    .concat(i.slide);
                ga["a"].objectSubcription[o] &&
                  (i.id || (i.id = 1),
                  ga["a"].objectSubcription[o].resolve(i),
                  delete ga["a"].objectSubcription[o]);
              }
            }
          });
        },
      },
      ya = {
        namespaced: !0,
        state: ba,
        getters: va,
        actions: fa,
        mutations: wa,
        plugins: ka,
      },
      Sa = ya,
      Aa = Object(r["a"])({ zoomApp: Ue }, bn, {
        liveStatsV2: Tn,
        featureToggles: Gt,
        systemConnection: qn,
        nextback: $n,
        kvSync: na,
        leaderboard: la,
        websocket: ma,
        quiz: Sa,
      });
    i["default"].use(o["a"]);
    var _a = (t["a"] = new o["a"].Store({
      state: v,
      mutations: xe,
      actions: re,
      modules: Aa,
      getters: y,
      plugins: [
        Aa.nextback.plugin,
        Aa.leaderboard.plugins.updateLeaderboardVisibility,
        Aa.quiz.plugins.updateQuizResponse,
      ],
    }));
  },
  4436: function (e, t, n) {},
  "45bf": function (e, t, n) {},
  4678: function (e, t, n) {
    var a = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-ps": "4c98",
      "./ar-ps.js": "4c98",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn-bd": "9686",
      "./bn-bd.js": "9686",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-mx": "b5b7",
      "./es-mx.js": "b5b7",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "05583",
      "./is.js": "05583",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku-kmr": "7558",
      "./ku-kmr.js": "7558",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tk": "5aff",
      "./tk.js": "5aff",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea",
    };
    function i(e) {
      var t = o(e);
      return n(t);
    }
    function o(e) {
      var t = a[e];
      if (!(t + 1)) {
        var n = new Error("Cannot find module '" + e + "'");
        throw ((n.code = "MODULE_NOT_FOUND"), n);
      }
      return t;
    }
    (i.keys = function () {
      return Object.keys(a);
    }),
      (i.resolve = o),
      (e.exports = i),
      (i.id = "4678");
  },
  "472f": function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return i;
    }),
      n.d(t, "a", function () {
        return o;
      });
    var a = n("02c5");
    function i(e, t, n) {
      try {
        var i = new Date(),
          o = { value: t, expiry: i.getTime() + n };
        localStorage.setItem(e, JSON.stringify(o));
      } catch (r) {
        a["c"](r);
      }
    }
    function o(e) {
      try {
        var t = localStorage.getItem(e);
        if (!t) return null;
        var n = JSON.parse(t),
          i = new Date();
        return void 0 === n.expiry || i.getTime() > n.expiry
          ? (localStorage.removeItem(e), null)
          : n.value;
      } catch (o) {
        return a["c"](o), null;
      }
    }
  },
  "4a8f": function (e, t, n) {},
  "4d91": function (e, t, n) {},
  5: function (e, t) {},
  5259: function (e) {
    e.exports = {
      popupNextSlide: "The presenter has changed slide.",
      goToSlideButton: "Go to slide",
      cancelButton: "Cancel",
      stopSubmission: "Please wait for the presenter to open it.",
      waitingScreen: "Please wait for the presenter to show the next slide.",
      thankScreen: "Thank you for your participation!",
      blankSlide:
        "There is no content on this slide yet. Please wait for your presenter to add something in.",
      submitMultipleTimes: "You can submit multiple times.",
      "open-endedInstructionSubmission":
        "Thank you for your input! You can submit another if you like.",
      multipleChoiceInstruction: "You may choose up to",
      options: "options",
      choicesLeft: "choices left",
      powerBy: "AhaSlides",
      term: "Terms",
      submissionClosedButton: "Submission closed",
      submit: "Submit",
      exitAndVote: "Exit and vote on another presentation",
      nextSlideButton: "Next slide",
      disconnectError:
        "There was an issue connecting to the server. Please try again!",
      slideQRCodeAudience:
        "You have successfully joined in. You can show the QR code below to others around you so they can join in too.",
      openendedSubmissionFail:
        "Submission unsuccessful. Please check your connection and try again.",
      watchVideo: "Please watch the video on the presenter’s screen.",
      addSpecialCharacter: "Please don't add any special characters",
      answerWithSpace: "Answers with spaces will be considered as one word.",
      nextButton: "Next slide",
      skipButton: "Skip to the next slide",
      audiencePacingWaitingScreen: "You have already answered this question.",
      enterWordPlaceholder: "Enter a word..",
      errorWordCloudWhenLeaveBlank: "Please enter your word.",
      enterYourName: "Enter your name",
      getReady: "Get ready to play!",
      chooseEmoji: "Choose an emoji as your avatar",
      changeButton: "Change avatar..",
      joinTheGameButton: "Join the game!",
      fasterGetMorePointsRule:
        "This question rewards more points for fast answers",
      correctAnswerGetMaxPointTitle: "Answer before the time runs out",
      correctAnswerGetMaxPointDetail: "(No bonus points for faster answers)",
      quizIsNotOpen:
        "The Quiz is not open. Please wait for the presenter to start it.",
      reloadTextLink: "Reload",
      numberQuestionOfQuiz: "Question {msg} of {num}",
      runOutOfTime: "Oh no, you have run out of time.",
      correctAnswer: "Correct!",
      youHaveWonPoint: "You have scored {msg} point for this question",
      youAnsweredIn: "You answered in {msg} ({num} left)!",
      waitAndSeeHowYouDid: "Let's wait and see how you did...",
      wrongAnswer: "Wrong answer!",
      minute: "minute",
      minutes: "minutes",
      seconds: "seconds",
      players: "{msg} players",
      timesUp: "Time's up!",
      youAreInPlace: "You got {msg} place out of {msg1} players",
      points: "points",
      noResultYet: "No result yet",
      pointShortcut: "p",
      youHaveWonPoints: "You have scored {msg} points for this question",
      closeAvatar: "Close",
      alreadyAnswer: "You have already answered this question.",
      yourTotalScoreIs: "Your total score is {msg}",
      betterLuckNextTime: "Better luck next time!",
      clickToSeeFullSize: "Click on each image to see it in full size.",
      answeredQuestions: "Answered",
      askQuestionButton: "Ask a question",
      qnaQuestionPlaceholder: "Type your question here...",
      enterYourNameOptional: "Your name.. (optional)",
      topQuestionsAudience: "Top",
      newQuestionsAudience: "New",
      enterYourNameWarning: "Please enter your name.",
      enterQuestionWarning: "Please enter your question.",
      yourNamePlaceholder: "Your name.. (required)",
      finishButton: "Finish",
      quizYouMustPickAll: "You must pick all the correct answer(s).",
      tryingReconnect: "Trying to reconnect...",
      ignoreButton: "Ignore",
      establishConnection:
        "Couldn't establish a stable connection. Please try reloading this page.",
      partiallyCorrect: "Partially correct",
      youCanPickAnyCorrectAnswer: "You can pick any of the correct answer(s).",
      mustNotPickIncorrectAnswer:
        "Pick as many correct answers as you can, but you must not pick any incorrect answer.",
      mandatoryFieldError: "This field is mandatory.",
      typeYourAnswer: "Type your answer...",
      noCorrectAnswer: "There's no correct answer.",
      presentationIsNotOpen:
        "This presentation is in private mode. Once the presenter has switched to public, you can see and interact with their slides.",
      invalidEmail: "Invalid email.",
      pickYourTeam: "Pick your team:",
      teamIsFull: "This team is full, please pick another.",
      changeTeam: "change team",
      youHaveWonPointForTeam: "You have scored {msg} point for your team",
      youHaveWonPointsForTeam: "You have scored {msg} points for your team",
      yourAnswerNotCount: "Your answer did not count.",
      hasAlreadyAnswered: "{msg} has already answered.",
      yourTeamWonPoint: "Your team has scored {msg} point.",
      yourTeamWonPoints: "Your team has scored {msg} points.",
      noOneAnsweredInTime: "No one else in your team answered in time.",
      yourTeamInPlaceTeams: "Your team came {msg} place out of {num} teams.",
      yourTeamScoreIs: "Your team score is {msg}",
      yourFinalScoreIs: "Your final score is {msg}.",
      youAreIn: "You are in {msg}",
      congratulations: "Congratulations",
      team: "team",
      teams: "teams",
      "I just finished a super fun quiz on AhaSlides":
        "I just finished a super fun quiz on AhaSlides",
      "Post to {msg}": "Post to {msg}",
      numberQuestionOfQuizCompleted: "Question {msg} of {num} completed",
      seeSlideOnPresenterScreen:
        "Please see the slides on the presenter’s screen.",
      "Show Individual Ranking": "Show Individual Ranking",
      "Show Team Ranking": "Show Team Ranking",
      Skip: "Skip",
      playAudioNow: "Please play the audio track now",
      youMissedCorrectAnswer: "You missed {msg} correct answer.",
      youMissedCorrectAnswers: "You missed {msg} correct answers.",
      youPickedCorrectAnswers: "You picked {msg} out of {num} correct answers.",
      youWereFastestInTeam: "You were the fastest in your team.",
      yourTeamWonPointTotal:
        "In total for this question, your team has scored {msg} point",
      yourTeamWonPointsTotal:
        "In total for this question, your team has scored {msg} points",
      alsoAccepted: "Also accepted",
      youScoredPoints: "You scored {msg} points.",
      youScoredPointsForYourTeam: "You scored {msg} points for your team.",
      youScoredPointForYourTeam: "You scored {msg} point for your team.",
      youScoredPoint: "You scored {msg} point.",
      submitted: "Submitted",
      correctAnswerTitle: "Correct answer",
      enjoyThisPresentationFooterBanner:
        "Enjoy this presentation? Engage your own audience for free on AhaSlides.",
      letsGoFooterBanner: "Let's Go",
      getStartedWithAhaSlides: "Get Started with AhaSlides",
      makeFreeQuiz: "Make Your Own Free Quiz",
      waitToSpinTheWheel: "Wait for the presenter to spin the wheel!",
      theWheelSpinning:
        "The wheel is spinning, please look at the presenter’s screen.",
      resultsAreIn: "The results are in…",
      myQuestions: "My questions",
      writeYourIdea: "Write your idea...",
      allTab: "All",
      mySubmissionTab: "My submissions",
      votedTab: "Voted",
      canUnvote: "You can unvote if you want.",
      voteLeft: "You have {msg} vote left.",
      votingClosed: "Voting closed.",
      startVoting: "Start voting",
      seeResult: "See result",
      votesLeft: "You have {msg} votes left.",
      submissions: "submission(s)",
      youCanSubmitOnce: "You can submit once.",
      eachCanOnlySubmitOnce: "Each participant can only submit once.",
      maxExceededCannotSubmit:
        "Maximum limit exceeded. You can’t submit anymore.",
      youHaveMade: "You have made",
      noneOptionsCorrect: "None of the options is correct!",
      changeImage: "Change image",
      remove: "Remove",
      uploadImage: "Upload image",
      joinNow: "Join now",
      dragAndDropStatements: "Drag and drop the statements to make order",
      seeCorrectAnswer: "See correct answer",
      seeYourAnswer: "See your answer",
      startTheConversation: "Start the conversation!",
      noChatMessagesYet: "There are no chat messages yet.",
      questionWillStartSoon: "The question will start soon.",
      typeSomethingToSayHi: "Type something to say hi!",
      quizCompleted: "Quiz Completed!",
      shareThisOn: "Share this on",
      thisQuizWasMadeBy: "This quiz was made by {name}",
      dontForgetToShowSupport: "Please don’t forget to show your support!",
      amazing: "Amazing!",
      greatWork: "Great Work!",
      goodJob: "Good Job!",
      wow: "Wow!",
      whatAPerformance: "What a Performance!",
      nicelyDone: "Nicely Done!",
      outOfQuestionsYou: "Out of {number} questions, you",
      youFinishedInThe: "You finished in the",
      gotCorrectRate: "got {number} correct",
      topPercentage: "top {number}%",
      ofAllPlayers: "of all players",
      toughQuizRight: "Tough quiz, right?",
      outOfQuestionsYourTeam: "Out of {number} questions, your team",
      yourTeamFinishedInThe: "Your team finished in the",
      ofAllTeams: "of all teams",
      haventAnsweredAnyQuiz: "You haven’t answered any quiz question.",
      teamHasntAnsweredAnyQuiz: "Your team hasn’t answered any quiz question.",
      you: "You",
      enterYourMessage: "Enter your message...",
      hasLeft: "has left",
      hasJoined: "has joined",
      "Match with...": "Match with...",
      "Or try to": "Or try to",
      audienceSeeContent: "Please look at the presenter’s screen.",
      "Enter your authentication code": "Enter your authentication code",
      "Let me in": "Let me in",
      "Make a free quiz": "Make a free quiz",
      "Enjoy this presentation?": "Enjoy this presentation?",
      "Get slides": "Get slides",
      "Presenter is calling…": "Presenter is calling…",
      Accept: "Accept",
      Decline: "Decline",
      "Leave feedback...": "Leave feedback...",
      "Not bad": "Not bad",
      Good: "Good",
      "Can't wait for the next": "Can't wait for the next",
      "Feedback sent!": "Feedback sent!",
      "Something went wrong, please try again.":
        "Something went wrong, please try again.",
      "Could be better": "Could be better",
      "How's the presentation?": "How's the presentation?",
      Send: "Send",
      Tutorials: "Tutorials",
      teamEarnsPointTotal: "Your team earns <b>{point}p</b> in total.",
      teamEarnsPointAverage: "Your team earns <b>{point}p</b> on average.",
      teamEarnsPointFastest:
        "Your team earns <b>{point}p</b> thanks to <b>{audienceName}</b>.",
      teamFastestAnswerIncorrect:
        "Fastest answer was incorrect, your team earns <b>{point}p</b>.",
      teamFastestAnswerGetPoint:
        "You were the fastest, your team earns <b>{point}p</b>.",
      "💪 Keep up the great work!": "💪 Keep up the great work!",
      "Lose streak!": "Oh no, streak lost!",
      Correct: "Correct",
      "Double streak!": "Two in a row!",
      "Triple streak!": "That’s three!",
      "Four Streak!": "Fantastic Four!",
      "Awesome!": "Awesome!",
      "Keep going!": "Keep going!",
      "Amazing!": "Amazing!",
      "Good job!": "Good job!",
      Incorrect: "Incorrect",
      my_answers: "My Answers",
      view_answers: "View answers",
      final_leaderboard: "Final Leaderboard",
      final_answers_stat:
        "You've got <strong>{correctAnswers} / {totalQuiz} correct</strong> ({correctRate}%)",
      final_ranking: "Rank: <strong>{ranking}</strong>",
      your_answer: "Your answer",
      review_all_questions:
        "You can review all questions here when the quiz ends.",
      not_answer: "You didn’t answer",
      your_answer_correct: "Your answer is correct",
      your_answer_incorrect: "Your answer is incorrect",
      your_answer_partially_correct: "Your answer is partially correct",
      you_missed_quiz: "You've just missed the quiz.",
      leaderboard: "Leaderboard",
      personal_no_quiz_answered: "You haven't answered any quiz",
      team_no_quiz_answered: "Your team hasn't answered any quiz",
      final_team_answers_stat:
        "Your team has got <strong>{correctAnswers} / {totalQuiz} correct</strong> ({correctRate}%)",
      all_slides: "All Slides",
      review_slides: "Review slides",
      review_all_slides_and_questions:
        "You can review all the slides and questions when the presentation ends.",
      no_answer: "No answer",
      sign_in_to_save_presentation: "Sign in to save this presentation",
      continue_with_google: "Continue with Google",
      present_with_ahaslides: "Present with AhaSlides",
      view_terms: "View terms",
      log_out: "Log out",
      attended: "Attended",
      your_future_presentations_shown_here:
        "Your future presentations will be shown here",
      join_a_presentation: "Join a presentation",
      presentation_details: "Presentation Details",
      "Leaving the presentation": "Leaving the presentation",
      "This link will take you to a page that is not part of the presentation":
        "This link will take you to a page that is not part of the presentation",
      thank_for_participation: "Thank you for your participation! ❤️",
      give_feedback: "Give feedback",
      get_ahaslides_free: "Get AhaSlides for free",
      exclusive_offer_hr_tech: "Exclusive offer for HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ Get AhaSlides Plus for free ✨",
      ask_presenter_to_view_slides:
        "Please ask your presenter for slides viewing permission.",
      login: "Log in",
      sign_up: "Sign up",
      or: "or",
      "Calculating your ranking…": "Calculating your ranking…",
      categorise_unassined_option: "Total unassigned Options",
      Reload: "Reload",
      "No internet. Retrying...": "No internet. Retrying...",
    };
  },
  "538b": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    var a = n("cebc"),
      i = n("d225"),
      o = n("b0b4"),
      r = {
        GOOD: "good",
        UNSTABLE: "unstable",
        ERROR: "error",
        RECONNECTING: "reconnecting",
      },
      s = null,
      u = (function () {
        function e() {
          if ((Object(i["a"])(this, e), s)) return s;
          s = this;
        }
        return (
          Object(o["a"])(e, [
            {
              key: "initEventHandlers",
              value: function (e) {
                this.eventHandlers = Object(a["a"])({}, this.eventHandlers, e);
              },
            },
            {
              key: "detectUserConnection",
              value: function () {
                var e = this,
                  t = navigator.onLine ? r.GOOD : r.ERROR;
                this.eventHandlers.onUserConnectionUpdate(t),
                  window.addEventListener("online", function () {
                    return e.eventHandlers.onUserConnectionUpdate(r.GOOD);
                  }),
                  window.addEventListener("offline", function () {
                    return e.eventHandlers.onUserConnectionUpdate(r.ERROR);
                  });
              },
            },
            {
              key: "detectSocketConnection",
              value: function (e) {
                this.eventHandlers &&
                  this.eventHandlers.onSocketConnectionUpdate(e);
              },
            },
            {
              key: "detectEmqxConnection",
              value: function (e) {
                this.eventHandlers &&
                  this.eventHandlers.onEmqxConnectionUpdate(e);
              },
            },
            {
              key: "detectGeneralConnection",
              value: function (e) {
                this.eventHandlers &&
                  this.eventHandlers.onGeneralConnectionUpdate(e);
              },
            },
            {
              key: "detectLiveApiConnection",
              value: function (e) {
                this.eventHandlers &&
                  this.eventHandlers.onLiveApiConnectionUpdate(e);
              },
            },
          ]),
          e
        );
      })(),
      c = new u();
    t["b"] = c;
  },
  "53b0": function (e, t, n) {
    "use strict";
    var a = n("2b0e"),
      i = n("db49"),
      o = null,
      r = {
        getPresentationAttributes: {
          method: "GET",
          url: "".concat(
            i["a"].baseUrl,
            "/api/presentation-attribute/{presentationId}"
          ),
        },
      },
      s = function () {
        o = a["default"].resource("", {}, r);
      },
      u = function (e) {
        return o.getPresentationAttributes({ presentationId: e });
      };
    t["a"] = { initResource: s, getPresentationAttributes: u };
  },
  "54b8": function (e) {
    e.exports = {
      popupNextSlide: "Sunum yapan kişi slaydı değiştirdi.",
      goToSlideButton: "Slayda git",
      cancelButton: "Vazgeç",
      stopSubmission: "Lütfen sunum yapan kişinin onu açmasını bekleyin.",
      waitingScreen:
        "Lütfen sunum yapan kişinin bir sonraki slaydı göstermesini bekleyin.",
      thankScreen: "Katıldığınız için teşekkürler!",
      blankSlide:
        "Bu slayt için henüz içerik görünütülenemiyor. Sunum yapan kişinin eklemesini bekleyin. ",
      submitMultipleTimes: "Birden çok kez gönderebilirsiniz.",
      "open-endedInstructionSubmission":
        "Bilgi girişiniz için teşekkür ederiz! Eğer, isterseniz başka gönderebilirsiniz.",
      multipleChoiceInstruction: "Kadar seçebilirsiniz",
      options: "opsiyonlar",
      choicesLeft: "seçenekler kaldı",
      powerBy: "AhaSlides",
      term: "Şartlar",
      submissionClosedButton: "Gönderim kapatıldı",
      submit: "Gönder",
      exitAndVote: "Çık ve başka bir sunuma oy ver",
      nextSlideButton: "Sonraki slayt",
      disconnectError:
        "Sunucuya bağlanırken bir sorun oluştu. Lütfen tekrar deneyin!",
      slideQRCodeAudience:
        "Başarıyla katıldınız. Aşağıdaki QR kodunu çevrenizdeki diğer kişilere de gösterebilirsiniz, böylece onlar da katılabilir.",
      openendedSubmissionFail:
        "Gönderim başarısız oldu. Lütfen bağlantınızı kontrol edin ve tekrar deneyin.",
      watchVideo: "Lütfen videoyu sunum yapan kişinin ekranında izleyin.",
      addSpecialCharacter: "Lütfen herhangi bir özel karakter eklemeyin",
      answerWithSpace:
        "Boşluk içeren cevaplar tek kelime olarak kabul edilecektir.",
      nextButton: "Sonraki ",
      skipButton: "Bir sonraki slayda geç",
      audiencePacingWaitingScreen: "Bu soruyu zaten cevapladınız.",
      enterWordPlaceholder: "Bir kelime giriniz..",
      errorWordCloudWhenLeaveBlank: "Lütfen kelimenizi giriniz.",
      enterYourName: "Adınızı giriniz",
      getReady: "Oynamaya hazır olun!",
      chooseEmoji: "Avatarın olarak bir emoji seç",
      changeButton: "Avatarı değiştir..",
      joinTheGameButton: "Oyuna katıl!",
      fasterGetMorePointsRule:
        "Bu soru hızlı cevaplar için daha fazla puanla ödüllendirir",
      correctAnswerGetMaxPointTitle: "Süre dolmadan cevaplayınız",
      correctAnswerGetMaxPointDetail:
        "(Daha hızlı cevaplar için bonus puan yok)",
      quizIsNotOpen:
        "Sınav açık değil. Lütfen sunum yapan kişinin onu başlatmasını bekleyin.",
      reloadTextLink: "Tekrar yükle",
      numberQuestionOfQuiz: "{num}'un sorusu {msg}",
      runOutOfTime: "Oh hayır, zamanın tükendi.",
      correctAnswer: "Doğru!",
      youHaveWonPoint: "Bu soru için {msg} puan kazandınız",
      youAnsweredIn: "Cevapladınız {msg} ({num} kaldı)!",
      waitAndSeeHowYouDid: "Bekleyelim ve nasıl yaptığını görelim...",
      wrongAnswer: "Yanlış cevap!",
      minute: "dakika",
      minutes: "dakikalar",
      seconds: "saniyeler",
      players: "{msg} oyuncular",
      timesUp: "Süre doldu!",
      youAreInPlace: "{msg1} oyuncu içinde {msg} yerdesiniz",
      points: "puanlar",
      noResultYet: "Henüz sonuç yok",
      pointShortcut: "p",
      youHaveWonPoints: "Bu soru için {msg} puan kazandınız",
      closeAvatar: "Kapat",
      alreadyAnswer: "Bu soruyu zaten cevapladınız.",
      yourTotalScoreIs: "Toplam puanınız {msg}",
      betterLuckNextTime: "Bir dahaki sefere iyi şanslar!",
      clickToSeeFullSize:
        "Tam boyutunda görmek için her resmin üzerine tıklayın.",
      answeredQuestions: "Zaten cevaplandı",
      askQuestionButton: "Bir soru sor",
      qnaQuestionPlaceholder: "Sorunuzu buraya yazın...",
      enterYourNameOptional: "Adınız.. (isteğe bağlı)",
      topQuestionsAudience: "Üst",
      newQuestionsAudience: "Yeni",
      enterYourNameWarning: "Lütfen adınızı giriniz.",
      enterQuestionWarning: "Lütfen sorunuzu girin.",
      yourNamePlaceholder: "Adınız.. (gereklidir)",
      finishButton: "Bitiş",
      quizYouMustPickAll: "Tüm doğru cevapları seçmelisiniz.",
      tryingReconnect: "Yeniden bağlanmaya çalışılıyor ...",
      ignoreButton: "Aldırmamak",
      establishConnection:
        "Sabit bir bağlantı kurulamadı. Lütfen bu sayfayı yeniden yüklemeyi deneyin.",
      partiallyCorrect: "Kismi̇ doğru",
      youCanPickAnyCorrectAnswer:
        "Doğru cevaplardan herhangi birini seçebilirsiniz.",
      mustNotPickIncorrectAnswer:
        "Mümkün olduğu kadar çok doğru cevap seçin, ancak yanlış bir cevap seçmemelisiniz.",
      mandatoryFieldError: "Bu alan zorunlu.",
      typeYourAnswer: "Cevabınızı yazın...",
      noCorrectAnswer: "Doğru cevap yok.",
      presentationIsNotOpen:
        "Bu sunu özel modda. Sunucu genel moda geçtiğinde, slaytlarını görebilir ve bunlarla etkileşime geçebilirsiniz.",
      invalidEmail: "Geçersiz e-posta.",
      pickYourTeam: "Takımınızı seçin:",
      teamIsFull: "Bu goýuň doly başga almak haýyş edýäris.",
      changeTeam: "takım değiştir",
      youHaveWonPointForTeam: "Ekibiniz için {msg} puan kazandınız",
      youHaveWonPointsForTeam: "Takımınız için {msg} puan kazandınız",
      yourAnswerNotCount: "Cevabınız sayılmaz.",
      hasAlreadyAnswered: "{msg} çoktan cevapladı.",
      yourTeamWonPoint: "Ekibiniz {msg} puan kazandı.",
      yourTeamWonPoints: "Takımınız {msg} puan kazandı.",
      noOneAnsweredInTime: "Ekibinizden hiç kimse zamanında cevap vermedi.",
      yourTeamInPlaceTeams: "Takımınız {num} takım arasında {msg}. sırada.",
      yourTeamScoreIs: "Takım puanınız {msg}",
      yourFinalScoreIs: "Son puanınız {msg}.",
      youAreIn: "{msg}'dasın",
      congratulations: "Tebrikler",
      team: "takım",
      teams: "takımlar",
      "I just finished a super fun quiz on AhaSlides":
        "AhaSlides'de süper eğlenceli bir testi bitirdim",
      "Post to {msg}": "{msg} adresine gönder",
      numberQuestionOfQuizCompleted: "{num}'un sorusu {msg} tamamlandı",
      seeSlideOnPresenterScreen:
        "Lütfen sunum yapan kişinin ekranındaki slaytlara bakın.",
      "Show Individual Ranking": "Bireysel Sıralamayı Göster",
      "Show Team Ranking": "Takım Sıralamasını Göster",
      Skip: "Atla",
      playAudioNow: "Lütfen şimdi ses parçasını çalın",
      youMissedCorrectAnswer: "{msg} doğru cevabı kaçırdınız.",
      youMissedCorrectAnswers: "{msg} doğru cevabı kaçırdınız.",
      youPickedCorrectAnswers: "{num} doğru cevaptan {msg}'ini seçtiniz.",
      youWereFastestInTeam: "Takımındaki en hızlıydın.",
      yourTeamWonPointTotal: "bu sorag üçin Jemi, Ekibiniz {msg} puan kazandı",
      yourTeamWonPointsTotal:
        "bu sorag üçin Jemi, Takımınız {msg} puan kazandı",
      alsoAccepted: "Kabul edilen cevaplar",
      youScoredPoints: "{Msg} puan kazandınız.",
      youScoredPointsForYourTeam: "Takımınız için {msg} puan kazandınız.",
      youScoredPointForYourTeam: "Takımınız için {msg} puan kazandınız.",
      youScoredPoint: "{Msg} puan kazandınız.",
      submitted: "Gönderilen",
      correctAnswerTitle: "Doğru cevap",
      enjoyThisPresentationFooterBanner:
        "Bu sunuyu Enjoy? AhaSlides üzerinde ücretsiz olarak kendi kitlesini Engage.",
      letsGoFooterBanner: "Hadi gidelim",
      getStartedWithAhaSlides: "AhaSlides ile Başlayın",
      makeFreeQuiz: "Kendi ücretsiz yarışması Make",
      waitToSpinTheWheel: "Sunucunun çarkı çevirmesini bekleyin!",
      theWheelSpinning:
        "Çark dönüyor, lütfen sunum yapan kişinin ekranına bakın.",
      resultsAreIn: "Sonuçlar ...",
      myQuestions: "Sorularım",
      writeYourIdea: "Fikrini yaz...",
      allTab: "Herşey",
      mySubmissionTab: "Gönderimlerim",
      votedTab: "oylandı",
      canUnvote: "İsterseniz oyu iptal edebilirsiniz.",
      voteLeft: "{msg} oyun kaldı.",
      votingClosed: "Oylama kapandı.",
      startVoting: "Oy vermeye başla",
      seeResult: "sonucu gör",
      votesLeft: "{msg} oyun kaldı.",
      submissions: "fikir(ler)",
      youCanSubmitOnce: "Bir kez gönderebilirsiniz.",
      eachCanOnlySubmitOnce: "Her katılımcı yalnızca bir kez gönderebilir.",
      maxExceededCannotSubmit: "Maksimum limit aşıldı. Artık gönderemezsiniz.",
      youHaveMade: "Var",
      noneOptionsCorrect: "Seçeneklerin hiçbiri doğru değil!",
      changeImage: "Görüntüyü değiştir",
      remove: "Kaldırmak",
      uploadImage: "Resim yükle",
      joinNow: "Şimdi Katıl",
      dragAndDropStatements: "Sipariş vermek için ifadeleri sürükleyip bırakın",
      seeCorrectAnswer: "doğru cevaba bakınız",
      seeYourAnswer: "Cevabınızı görün",
      startTheConversation: "Sohbete başlayın!",
      noChatMessagesYet: "Henüz sohbet mesajı yok.",
      questionWillStartSoon: "Soru birazdan başlayacak.",
      typeSomethingToSayHi: "Merhaba demek için bir şeyler yazın!",
      quizCompleted: "Bir Sınav Tamamlandı!",
      shareThisOn: "Bunu paylaş",
      thisQuizWasMadeBy:
        "Bu bilgi yarışması oyunu {name} tarafından yapılmıştır.",
      dontForgetToShowSupport: "Lütfen desteğinizi göstermeyi unutmayın!",
      amazing: "Harika!",
      greatWork: "Harika iş!",
      goodJob: "Aferin!",
      wow: "Vay!",
      whatAPerformance: "Ne bir Performans!",
      nicelyDone: "Güzel Bitti!",
      outOfQuestionsYou: "{number} sorudan, sen",
      youFinishedInThe: "Tüm oyuncular",
      gotCorrectRate: "{number} doğru cevap aldım",
      topPercentage: "arasında ilk %{number}",
      ofAllPlayers: "içinde bitirdiniz",
      toughQuizRight: "Zor bilgi yarışması, değil mi?",
      outOfQuestionsYourTeam: "{number} soruda, senin takımın",
      yourTeamFinishedInThe: "Takımınız tüm oyuncular arasında",
      ofAllTeams: "içinde bitirdi",
      haventAnsweredAnyQuiz: "Hiçbir sınav sorusunu yanıtlamadınız.",
      teamHasntAnsweredAnyQuiz: "Ekibiniz hiçbir soruyu yanıtlamadı.",
      you: "Sen",
      enterYourMessage: "Mesajınızı girin...",
      hasLeft: "ayrıldı",
      hasJoined: "katıldı",
      "Match with...": "Uyuşuyor...",
      orTryToReload:
        "Veya bu <a class='link-reload' @click='reloadPage()'>sayfayı yeniden yüklemeyi deneyin</a>",
      "Or try to": "Ya da dene",
      audienceSeeContent: "Lütfen sunucunun ekranına bakın.",
      "Make a free quiz": "Ücretsiz sınav oluştur",
      "Enjoy this presentation?": "Bu sunumun tadını çıkardınız mı?",
      "Get slides": "Slaytları alın",
      "Presenter is calling…": "Sunum yapan kişi sizi çağırıyor…",
      Accept: "Kabul",
      Decline: "Reddetmek",
      "Enter your authentication code": "Kimlik doğrulama kodunuzu girin",
      "Let me in": "Girmeme izin ver",
      "Leave feedback...": "Geri bildirim bırakın. Gizlidir...",
      "Could be better": "Daha iyi olabilir",
      "Not bad": "Fena değil",
      Good: "İyi",
      "Can't wait for the next": "Bir sonraki için sabırsızlanıyorum",
      "Feedback sent!": "Geri bildirim gönderildi!",
      "Something went wrong, please try again.":
        "Bir şeyler ters gitti lütfen tekrar deneyin.",
      "How's the presentation?": "Sunum nasıl?",
      Send: "Göndermek",
      Tutorials: "Öğreticiler",
      teamEarnsPointAverage: "Ekibiniz ortalama <b>{point}p</b> kazanıyor.",
      teamEarnsPointFastest:
        "Ekibiniz <b>{point}p</b>'e <b>{audienceName}</b> sayesinde kazanıyor.",
      "💪 Keep up the great work!": "💪 Harika iş! Devam et!",
      teamEarnsPointTotal: "Ekibiniz toplamda <b>{point}p</b> kazandı.",
      teamFastestAnswerIncorrect:
        "En hızlı cevap hatalıydı, ekibiniz <b>{point}p</b> kazandı.",
      teamFastestAnswerGetPoint:
        "Sen en hızlısıydın, ekibin <b>{point}p</b> kazandı.",
      "Lose streak!": "Zincir sona erdi!",
      Correct: "Süper!",
      "Double streak!": "Mükemmel!",
      "Triple streak!": "Muhteşem!",
      "Four Streak!": "Olağan.!",
      "Awesome!": "İnanılmaz!",
      "Keep going!": "Etkileyici!",
      "Amazing!": "Harika!",
      "Good job!": "Şahane!",
      Incorrect: "Yanlış",
      my_answers: "Benim cevaplarım",
      view_answers: "Cevapları gör",
      final_leaderboard: "Son lider tablosu",
      final_answers_stat:
        "<strong>{correctAnswers} / {totalQuiz}</strong> doğru ({correctRate}%)",
      final_ranking: "Sıra: <strong>{ranking}</strong>",
      your_answer: "Sizin cevabınız",
      review_all_questions:
        "Quiz bittiğinde tüm soruları burada inceleyebilirsiniz.",
      not_answer: "Cevap vermediniz",
      your_answer_correct: "Cevabınız doğru",
      your_answer_incorrect: "Cevabınız yanlış",
      your_answer_partially_correct: "Cevabınız kısmen doğrudur",
      you_missed_quiz: "Sınavı az önce kaçırdınız.",
      leaderboard: "Liderlik Tablosu",
      personal_no_quiz_answered: "Henüz hiçbir quiz'e cevap vermediniz",
      team_no_quiz_answered: "Takımınız henüz hiçbir quiz'e cevap vermedi",
      final_team_answers_stat:
        "Takımınız <strong>{correctAnswers} / {totalQuiz} soruyu doğru yanıtladı</strong> ({correctRate}%)",
      all_slides: "Tüm Slaytlar",
      review_slides: "Slaytları gözden geçir",
      view_all_slides_answers: "Tüm slaytları ve yanıtları görüntüle",
      review_all_slides_and_questions:
        "Sunum sona erdiğinde tüm slaytları ve soruları gözden geçirebilirsiniz.",
      no_answer: "Cevap yok",
      sign_in_to_save_presentation: "Bu sunuyu kaydetmek için oturum açın",
      continue_with_google: "Google ile devam edin",
      present_with_ahaslides: "AhaSlides ile sunum yapın",
      view_terms: "Şartları görüntüleyin",
      log_out: "Oturumu kapatın",
      attended: "Katıldı",
      your_future_presentations_shown_here:
        "Gelecek sunumlarınız burada gösterilecek",
      join_a_presentation: "Sunuma katılın",
      presentation_details: "Sunum detayları",
      "Leaving the presentation": "Sunumdan ayrılma",
      "This link will take you to a page that is not part of the presentation":
        "Bu bağlantı sizi sunumun bir parçası olmayan bir sayfaya götürecek",
      thank_for_participation: "Katılımınız için teşekkür ederiz! ❤️",
      give_feedback: "Geri bildirim verin",
      get_ahaslides_free: "AhaSlides'ı ücretsiz edinin",
      exclusive_offer_hr_tech: "HR Tech Festival Asia için Özel Teklif",
      get_ahaslides_plus_free: "✨ AhaSlides Plus'ı ücretsiz edinin ✨",
      ask_presenter_to_view_slides:
        "Lütfen sunum yapan kişiden slayt görüntüleme izni isteyin.",
      login: "Giriş yap",
      sign_up: "Kaydol",
      or: "veya",
      Reload: "Yeniden yükle",
      "No internet. Retrying...": "İnternet yok. Tekrar deneniyor...",
    };
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("cadf"), n("551c"), n("f751"), n("097d");
    var a = n("2b0e"),
      i = n("e37d"),
      o = n("c28b"),
      r = n.n(o),
      s = {
        inserted: function (e, t) {
          var n = "backdrop-zoom",
            a = t.value.imgSource,
            i = (a && a.xLarge) || a,
            o = new Image(),
            r = null,
            s = document.getElementById(n);
          s ||
            ((s = document.createElement("div")),
            (r = document.createElement("span")),
            r.classList.add("close"),
            (s.id = n),
            s.classList.add(n),
            s.addEventListener("click", function (e) {
              "IMG" !== e.target.tagName && s.classList.remove("show");
            }),
            s.appendChild(r),
            s.appendChild(o),
            document.body.appendChild(s)),
            e.addEventListener("click", function () {
              if (s) {
                var e = s.querySelector("img");
                e && ((e.src = i), s.classList.add("show"));
              }
            });
        },
      },
      u =
        (n("4917"),
        n("a481"),
        n("4f37"),
        n("ac6a"),
        n("f3e2"),
        n("28a5"),
        n("6b54"),
        n("87b3"),
        n("d25f"),
        n("5a0c")),
      c = n("e0eb"),
      d = n("4208"),
      l = n.n(d);
    u["extend"](l.a),
      a["default"].filter("capitalize", function (e) {
        if (!e) return "";
        e = e.toString();
        var t = e.split(" "),
          n = [];
        return (
          t.forEach(function (e) {
            var t = e.charAt(0).toUpperCase() + e.slice(1);
            n.push(t);
          }),
          n.join(" ")
        );
      }),
      a["default"].filter("truncate", function (e, t) {
        return e.substring(0, t);
      }),
      a["default"].filter("tailing", function (e, t) {
        return e + t;
      }),
      a["default"].filter("time", function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!e) return null;
        var n = new Date(Date.parse(e)),
          a = n.getHours(),
          i = (n.getMinutes() < 10 ? "0" : "") + n.getMinutes();
        if (!t) {
          var o = a > 12 ? "AM" : "PM";
          return (a = a % 12 || 12), "".concat(a, ":").concat(i, " ").concat(o);
        }
        return "".concat(a, ":").concat(i);
      }),
      a["default"].filter("date", function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        e = String(e);
        var n = e.slice(8, 10).trim(),
          a = e.slice(4, 7).trim(),
          i = e.slice(11, 15);
        return t
          ? "".concat(n, " ").concat(a, " ").concat(i)
          : "".concat(n, " ").concat(a);
      }),
      a["default"].filter("dateTime", function (e) {
        return u(new Date(e)).format("DD-MM-YYYY HH:mm");
      }),
      a["default"].filter("csv", function (e) {
        return e.join(", ");
      }),
      a["default"].filter("filter_tags", function (e) {
        return e.replace(/<\/?[^>]+(>|$)/g, "");
      }),
      a["default"].filter("k_formatter", function (e) {
        return e > 999 ? "".concat((e / 1e3).toFixed(1), "k") : e;
      }),
      a["default"].filter("timeMinus", function (e) {
        if (e < 60) return "".concat(e, " seconds");
        var t = parseInt(e / 60, 10),
          n = e - 60 * t;
        n = n.toFixed(2);
        var a = " minute ";
        return t > 1 && (a = " minutes "), "".concat(t + a + n, " seconds");
      }),
      a["default"].filter("countEnglish", function (e) {
        var t = e % 10,
          n = e % 100;
        return "".concat(
          e,
          1 === t && 11 !== n
            ? "st"
            : 2 === t && 12 !== n
            ? "nd"
            : 3 === t && 13 !== n
            ? "rd"
            : "th"
        );
      }),
      a["default"].filter("sanitize", c["a"].sanitize),
      a["default"].filter("dateTimeAgo", function (e) {
        var t = u(new Date(e), "YYYYMMDD HH:mm:ss"),
          n = u().diff(t, "seconds");
        return n > 604800
          ? t.format("DD MMM YYYY")
          : u(new Date(e), "YYYYMMDD").fromNow();
      }),
      a["default"].filter("textAvatar", function (e) {
        return (
          e || (e = ""),
          (e = e.trim()),
          e
            ? e.match(
                /(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g
              )[0]
            : " "
        );
      }),
      a["default"].filter("formatTotalPoint", c["a"].formatNumber),
      a["default"].filter("profanity", function (e) {
        return e ? c["a"].filterProfaneWords(e) : "";
      }),
      a["default"].filter("convertHMS", function (e) {
        var t = parseInt(e, 10),
          n = Math.floor(t / 3600),
          a = Math.floor((t - 3600 * n) / 60),
          i = t - 3600 * n - 60 * a;
        return (
          n < 10 && (n = "0".concat(n, " ")),
          a < 10 && (a = "0".concat(a)),
          i < 10 && (i = "0".concat(i)),
          "".concat(a, ":").concat(i)
        );
      });
    var p = n("28dd"),
      m = n("00e7"),
      g = n.n(m),
      h = n("cebc"),
      b = n("857b"),
      v = function (e) {
        window.location.href = e;
      },
      f = function (e) {
        e.prototype.$func = Object(h["a"])({}, b["a"], { go: v });
      },
      w = { install: f },
      k = n("2f44"),
      y = n("2b88"),
      S = n.n(y),
      A = n("db49"),
      _ = n("538b"),
      T = n("4360");
    _["b"].initEventHandlers({
      onUserConnectionUpdate: function (e) {
        T["a"].dispatch("systemConnection/setUserConnection", e);
      },
      onSocketConnectionUpdate: function (e) {
        T["a"].dispatch("systemConnection/setSocketConnection", e);
      },
      onEmqxConnectionUpdate: function (e) {
        T["a"].dispatch("systemConnection/setEmqxConnection", e);
      },
      onGeneralConnectionUpdate: function (e) {
        T["a"].dispatch("systemConnection/setGeneralApiConnection", e);
      },
      onLiveApiConnectionUpdate: function (e) {
        T["a"].dispatch("systemConnection/setLiveApiConnection", e);
      },
    }),
      _["b"].detectUserConnection();
    var z = n("f9f0"),
      P = n("0558"),
      j = n("6c5b");
    function C() {
      z["c"].connect(), P["a"].init(), j["a"].init();
    }
    var O = { init: C },
      E = n("308e"),
      I = n("a925"),
      R = n("5259"),
      N = n("35d0"),
      x = n("d709"),
      L = n("b8d4"),
      q = n("cfc1"),
      V = n("7556"),
      F = n("6478"),
      D = n("2abb"),
      B = n("0e11"),
      U = n("54b8"),
      M = n("b499"),
      Q = n("8cc3"),
      W = n("27db"),
      G = n("f70b"),
      Y = n("398e"),
      H = n("cb78"),
      K = n("7521"),
      $ = n("7521"),
      J = n("20ba"),
      Z = n("ff8e"),
      X = n("e0bf");
    a["default"].use(I["a"]);
    var ee = "en",
      te = {
        en: R,
        vi: N,
        es: x,
        br: q,
        fr: V,
        de: F,
        id: D,
        it: B,
        tr: U,
        ja: M,
        nl: Q,
        ru: W,
        pl: G,
        da: Y,
        zh: H,
        sl: K,
        si: $,
        lv: J,
        se: L,
        el: Z,
        cz: X,
      },
      ne = new I["a"]({
        locale: ee,
        fallbackLocale: ee,
        formatFallbackMessages: !0,
        messages: te,
      }),
      ae = ne,
      ie = n("41cb"),
      oe =
        (n("1a0a"),
        n("4436"),
        n("f745"),
        n("4d91"),
        n("60c4"),
        n("940d"),
        n("2295"),
        n("a24a"),
        n("b751"),
        n("343a"),
        n("3fb5a"),
        n("bb35"),
        n("ba8c"),
        n("1b33"),
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { attrs: { id: "app" } },
            [
              n(
                "div",
                {
                  staticClass: "slide-type-image-bg grid",
                  class: {
                    "custom-invisible": e.$store.state.presentation.privateMode,
                  },
                  attrs: { id: "slide-image-bg" },
                },
                [
                  e.canViewThemeGallery
                    ? n(
                        "div",
                        {
                          staticClass:
                            "col-start-1 row-start-1 w-full h-full grid",
                        },
                        [
                          e.currentPresentationTheme &&
                          e.currentPresentationTheme.baseColour &&
                          e.isSlideTab
                            ? n("div", {
                                staticClass:
                                  "col-start-1 row-start-1 w-full h-full",
                                style: {
                                  "background-color":
                                    e.currentPresentationTheme.baseColour,
                                },
                              })
                            : e._e(),
                          e.currentPresentationTheme &&
                          e.currentPresentationTheme.backgroundImage &&
                          e.isSlideTab
                            ? n("div", {
                                staticClass:
                                  "col-start-1 row-start-1 w-full h-full bg-cover bg-no-repeat bg-center",
                                style: {
                                  backgroundImage:
                                    "url(" +
                                    e.currentPresentationTheme.backgroundImage
                                      .large +
                                    ")",
                                  opacity:
                                    e.currentPresentationTheme.visibility / 100,
                                },
                              })
                            : e._e(),
                          e.activeActivityBaseColour && e.isSlideTab
                            ? n("div", {
                                staticClass:
                                  "col-start-1 row-start-1 w-full h-full z-0",
                                style: {
                                  "background-color":
                                    e.activeActivityBaseColour,
                                },
                              })
                            : e._e(),
                        ]
                      )
                    : e._e(),
                  e.slide.backgroundImage
                    ? n("div", {
                        staticClass:
                          "col-start-1 bg-cover bg-no-repeat bg-center row-start-1 w-full h-full z-0",
                        style: e.backgroundStyle,
                      })
                    : e._e(),
                ]
              ),
              n(
                "div",
                { staticClass: "grid-universal" },
                [
                  n(
                    "div",
                    { staticClass: "grid-universal-header" },
                    [
                      e.showConnectionStatus ? n("ConnectionInform") : e._e(),
                      e.canShowSlideProgressBar
                        ? n("SlideProgressBar", {
                            class: {
                              "custom-invisible": e.presentation.privateMode,
                            },
                          })
                        : e._e(),
                      n("Tabs"),
                    ],
                    1
                  ),
                  n("router-view", { staticClass: "grid-universal-main" }),
                  n("Footer", { staticClass: "grid-universal-footer" }),
                ],
                1
              ),
              n("PhotoSwipe"),
              n("portal-target", { attrs: { name: "popup" } }),
            ],
            1
          );
        }),
      re = [],
      se = (n("6762"), n("2fdb"), n("386d"), n("96cf"), n("3b8d")),
      ue = (n("7f7f"), n("2f62")),
      ce = n("31d8"),
      de = n("aa27"),
      le = n("5e1a"),
      pe = n("967c"),
      me = n("d800"),
      ge = n("2ac8"),
      he = null,
      be = {
        patchUserById: {
          method: "PATCH",
          url: "".concat(A["a"].baseUrl, "/api/users/{userId}"),
        },
        getUser: {
          method: "GET",
          url: "".concat(A["a"].baseUrl, "/api/users/get-profile/"),
        },
        getUsers: {
          method: "GET",
          url: "".concat(
            A["a"].baseUrl,
            "/api/users?referralCode={referralCode}"
          ),
        },
        createPresenter: {
          method: "POST",
          url: "".concat(A["a"].baseUrl, "/api/users/create-presenter"),
        },
        getTeamMembers: {
          method: "GET",
          url: "".concat(A["a"].baseUrl, "/api/users/account/"),
        },
        logoutEveryWhere: {
          method: "POST",
          url: "".concat(A["a"].baseUrl, "/api/users/{userId}/logout"),
        },
        getReferrees: {
          method: "GET",
          url: "".concat(A["a"].baseUrl, "/api/users/referrees/"),
        },
        createGuest: {
          method: "POST",
          url: "".concat(A["a"].baseUrl, "/api/users/create-guest"),
        },
        updateSettings: {
          method: "PUT",
          url: "".concat(A["a"].baseUrl, "/api/users/update-settings"),
        },
      },
      ve = function () {
        he = a["default"].resource("", {}, be);
      },
      fe = function (e, t) {
        return he.patchUserById({ userId: e }, t);
      },
      we = (function () {
        var e = Object(se["a"])(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), he.getUser();
                  case 2:
                    return (t = e.sent), e.abrupt("return", t.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      ke = (function () {
        var e = Object(se["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), he.getUsers(t);
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body.users);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      ye = (function () {
        var e = Object(se["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), he.createPresenter(t);
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      Se = (function () {
        var e = Object(se["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), he.getTeamMembers(t);
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      Ae = (function () {
        var e = Object(se["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var a;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), he.logoutEveryWhere({ userId: t }, n);
                  case 2:
                    return (a = e.sent), e.abrupt("return", a.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })(),
      _e = (function () {
        var e = Object(se["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), he.getReferrees(t);
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      Te = (function () {
        var e = Object(se["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), he.createGuest(t);
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      ze = function (e) {
        return he.updateSettings(e);
      },
      Pe = {
        getUser: we,
        initResource: ve,
        patchUserById: fe,
        createPresenter: ye,
        getTeamMembers: Se,
        logoutEveryWhere: Ae,
        getUsers: ke,
        getReferrees: _e,
        createGuest: Te,
        updateSettings: ze,
      },
      je = n("caa2"),
      Ce = n("35a4"),
      Oe = n("ae6b"),
      Ee = n("ef23"),
      Ie = n("eac2"),
      Re = n("53b0"),
      Ne = function () {
        ce["a"].initResource(),
          de["a"].initResource(),
          le["a"].initResource(),
          pe["a"].initResource(),
          me["a"].initResource(),
          ge["a"].initResource(),
          Pe.initResource(),
          je["a"].initResource(),
          Ce["a"].initResource(),
          Oe["a"].initResource(),
          Ee["a"].initResource(),
          Ie["a"].initResource(),
          Re["a"].initResource();
      },
      xe = { initResources: Ne },
      Le = function () {
        window.location.href.includes("zoomApp") &&
          T["a"].dispatch("zoomApp/setIsZoomAppAction", !0);
      },
      qe = n("02c5"),
      Ve = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "grid-universal-footer" },
          [e.isCtaShowing ? n("AudienceCTA") : e._e()],
          1
        );
      },
      Fe = [],
      De = function (e) {
        return a["default"].component("FooterContainer", {
          data: function () {
            return { isWhiteLabelUser: !1 };
          },
          computed: Object(h["a"])(
            {},
            Object(ue["c"])("presentationSettings", [
              "isEnableAudienceAdmissionForm",
            ]),
            Object(ue["c"])({ slide: "activeActivity" }),
            Object(ue["e"])({
              presentation: function (e) {
                return e.presentation;
              },
            }),
            {
              footerBannerURL: function () {
                return ""
                  .concat(
                    A["a"].presenterUrl,
                    "/pages/register?source=presentation_"
                  )
                  .concat(
                    this.presentation.id,
                    "&medium=audience_app&campaign=footer_banner&content="
                  )
                  .concat(c["a"].getSlideType(this.slide));
              },
            }
          ),
          methods: {
            handleAudienceCtaClick: function () {
              c["a"].trackGAButtonCTA(this.presentation.id, this.slide);
            },
          },
          render: function (t) {
            return t(e, {
              props: {
                footerBannerURL: this.footerBannerURL,
                handleAudienceCtaClick: this.handleAudienceCtaClick,
                enableAudienceAdmissionForm: this.isEnableAudienceAdmissionForm,
              },
            });
          },
        });
      },
      Be = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "audience-cta-wrapper" }, [
          n("div", { staticClass: "container" }, [
            n("p", { staticClass: "top-msg" }, [
              e._v(
                "\n      " + e._s(e.$t("thank_for_participation")) + "\n    "
              ),
            ]),
            n(
              "div",
              { staticClass: "audience-cta-buttons" },
              [
                n(
                  "aha-antd-button",
                  {
                    staticClass: "cta-button",
                    attrs: {
                      variant: "secondary",
                      iconName: "presenter-light",
                      iconWidth: "16",
                      iconHeight: "16",
                      iconViewBox: "0 0 16 18",
                    },
                    on: { click: e.openTabLookback },
                  },
                  [n("span", [e._v(e._s(e.$t("review_slides")))])]
                ),
                n(
                  "aha-antd-button",
                  {
                    staticClass: "cta-button",
                    attrs: {
                      variant: "secondary",
                      disabled: e.isDisabledFeedbackButton,
                      iconName: "feedback",
                      iconWidth: "16",
                      iconHeight: "16",
                      iconViewBox: "0 0 18 18",
                    },
                    on: { click: e.openTabFeedback },
                  },
                  [n("span", [e._v(e._s(e.$t("give_feedback")))])]
                ),
              ],
              1
            ),
            e.isShowAhaSection
              ? n("div", { staticClass: "audience-cta-link" }, [
                  n(
                    "div",
                    { staticClass: "aha-icon-wrapper" },
                    [
                      n("aha-logo", {
                        staticClass: "img-link",
                        attrs: {
                          "icon-only": !0,
                          useDefaultColor: !0,
                          width: "26",
                          height: "26",
                        },
                        on: { click: e.openTrialLink },
                      }),
                    ],
                    1
                  ),
                  n(
                    "span",
                    {
                      staticClass: "text-link",
                      on: { click: e.openTrialLink },
                    },
                    [
                      e._v(
                        "\n        " +
                          e._s(e.$t("get_ahaslides_free")) +
                          "\n      "
                      ),
                    ]
                  ),
                ])
              : e._e(),
          ]),
        ]);
      },
      Ue = [],
      Me = {
        computed: Object(h["a"])(
          {},
          Object(ue["e"])({
            presentation: function (e) {
              return e.presentation;
            },
            slides: function (e) {
              return e.slides;
            },
          }),
          {
            isEnableAudienceAhaSlideLabel: function () {
              return (
                this.presentation &&
                this.presentation.isEnableAudienceAhaSlideLabel
              );
            },
            isShowAhaSection: function () {
              return this.isEnableAudienceAhaSlideLabel;
            },
            isDisabledFeedbackButton: function () {
              return (
                !this.presentation || !this.presentation.isEnablePrivateFeedback
              );
            },
            trialLink: function () {
              var e = this.presentation && this.presentation.id,
                t = new URLSearchParams({
                  source: "audience_app",
                  presentationid: e,
                  campaign: "audience_app",
                });
              return ""
                .concat(A["a"].presenterUrl, "/pages/register?")
                .concat(t.toString());
            },
          }
        ),
        methods: Object(h["a"])(
          {},
          Object(ue["b"])(["setMaxLookbackSlideIndexAction"]),
          {
            openTabLookback: function () {
              this.setMaxLookbackSlideIndexAction(this.slides.length - 1),
                this.$router.push({
                  name: "lookback",
                  params: { presentationId: this.$route.params.id },
                  query: { "lookback-tab": "slides" },
                }),
                c["a"].ga4Track("Presentation > Review slides", {
                  presentationId: this.presentation && this.presentation.id,
                });
            },
            openTabFeedback: function () {
              this.$router.push({
                name: "feedback",
                params: { presentationId: this.$route.params.id },
              }),
                c["a"].ga4Track("Presentation > Give feedback", {
                  presentationId: this.presentation && this.presentation.id,
                });
            },
            openTrialLink: function () {
              window.open(this.trialLink, "_blank"),
                c["a"].ga4Track("Presentation > AhaSlides for free", {
                  presentationId: this.presentation && this.presentation.id,
                });
            },
          }
        ),
      },
      Qe = Me,
      We = (n("85f4"), n("2877")),
      Ge = Object(We["a"])(Qe, Be, Ue, !1, null, "3e504298", null),
      Ye = Ge.exports,
      He = {
        components: { AudienceCTA: De(Ye) },
        props: { isCtaShowing: { type: Boolean, default: !1 } },
      },
      Ke = He,
      $e = (n("a4b8"), Object(We["a"])(Ke, Ve, Fe, !1, null, "1354e38e", null)),
      Je = $e.exports,
      Ze = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "tabs" }, [
          n(
            "div",
            {
              staticClass: "tabs-container",
              class: { "min-width": e.currentUser && e.currentUser.id },
            },
            [
              n("div", { staticClass: "nav-tabs" }, [
                n(
                  "div",
                  {
                    directives: [
                      {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: { content: "Presentation", trigger: "hover" },
                        expression:
                          "{\n          content: 'Presentation',\n          trigger: 'hover'\n        }",
                      },
                    ],
                    staticClass: "nav-item nav-item-tab-slide",
                    class: { active: "slide" === e.activeTabView },
                    attrs: { id: "nav-item-tab-slide", "open-on-click": !1 },
                    on: {
                      click: function (t) {
                        return e.handleSwitchTab(
                          e.presentation.uniqueAccessCode
                            ? "presentation"
                            : "home"
                        );
                      },
                    },
                  },
                  [
                    n("div", { staticClass: "nav-item-background relative" }, [
                      e.isConnectionGoodOrUnstable
                        ? n("span", {
                            staticClass: "connection-indicator",
                            class: {
                              good: e.isConnectionGood,
                              unstable: e.isConnectionUnstable,
                            },
                          })
                        : e._e(),
                    ]),
                    e.isUnleashAndConnectionGoodOrUnstable
                      ? n("aha-icon", {
                          staticClass: "nav-item-icon",
                          attrs: {
                            name:
                              "slide" === e.activeTabView
                                ? "presenter-solid"
                                : "presenter-light",
                          },
                        })
                      : e._e(),
                    e.isConnectionReconnecting
                      ? n("aha-spinner", { attrs: { variant: "dark" } })
                      : e._e(),
                  ],
                  1
                ),
                n(
                  "div",
                  {
                    directives: [
                      {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: { content: "Review", trigger: "hover" },
                        expression:
                          "{\n          content: 'Review',\n          trigger: 'hover'\n        }",
                      },
                    ],
                    staticClass: "nav-item nav-item-tab-lookback",
                    class: {
                      active: "lookback" === e.activeTabView,
                      disabled: e.isTabReviewDisabled,
                    },
                    attrs: { id: "nav-item-tab-lookback" },
                    on: {
                      click: function (t) {
                        return e.handleSwitchTab(
                          "lookback",
                          e.isTabReviewDisabled
                        );
                      },
                    },
                  },
                  [
                    n("div", { staticClass: "nav-item-background" }),
                    n("aha-icon", {
                      staticClass: "nav-item-icon",
                      attrs: { name: "quiz-answer" },
                    }),
                  ],
                  1
                ),
                e.isShowTabFeedback
                  ? n(
                      "div",
                      {
                        directives: [
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: { content: "Feedback", trigger: "hover" },
                            expression:
                              "{\n          content: 'Feedback',\n          trigger: 'hover'\n        }",
                          },
                        ],
                        staticClass: "nav-item nav-item-tab-feedback",
                        class: {
                          active: "feedback" === e.activeTabView,
                          disabled: e.isTabFeedbackDisabled,
                        },
                        attrs: { id: "nav-item-tab-feedback" },
                        on: {
                          click: function (t) {
                            return e.handleSwitchTab(
                              "feedback",
                              e.isTabFeedbackDisabled
                            );
                          },
                        },
                      },
                      [
                        n("div", { staticClass: "nav-item-background" }),
                        n("aha-icon", {
                          staticClass: "nav-item-icon",
                          attrs: {
                            name:
                              "feedback" === e.activeTabView
                                ? "feedback-solid"
                                : "feedback",
                          },
                        }),
                      ],
                      1
                    )
                  : e._e(),
                e.isShowTabProfile
                  ? n(
                      "div",
                      {
                        directives: [
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: { content: "My Account", trigger: "hover" },
                            expression:
                              "{\n          content: 'My Account',\n          trigger: 'hover'\n        }",
                          },
                        ],
                        staticClass:
                          "nav-item nav-profile nav-item-tab-profile",
                        class: { active: "profile" === e.activeTabView },
                        attrs: { id: "nav-item-tab-profile" },
                        on: {
                          click: function (t) {
                            return e.handleSwitchTab(
                              e.presentation.uniqueAccessCode
                                ? "profile"
                                : "account"
                            );
                          },
                        },
                      },
                      [
                        n("div", { staticClass: "nav-item-background" }),
                        n("aha-icon", {
                          staticClass: "nav-item-icon nav-item-icon__profile",
                          attrs: {
                            name:
                              "profile" === e.activeTabView
                                ? "profile-solid"
                                : "profile-light",
                          },
                        }),
                      ],
                      1
                    )
                  : e._e(),
                e.isZoomApp && e.isEmbedAudienceApp
                  ? n(
                      "div",
                      {
                        directives: [
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: { content: "Log out", trigger: "hover" },
                            expression:
                              "{\n          content: 'Log out',\n          trigger: 'hover'\n        }",
                          },
                        ],
                        staticClass: "nav-item nav-zoom-logout",
                        on: { click: e.handleLogoutZoomApp },
                      },
                      [
                        n("div", { staticClass: "nav-item-background" }),
                        n("aha-svg", {
                          attrs: {
                            name: "profile_logout",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            maintainColor: !1,
                          },
                        }),
                      ],
                      1
                    )
                  : e._e(),
              ]),
            ]
          ),
        ]);
      },
      Xe = [],
      et = n("d697");
    i["a"].enabled = window.innerWidth > 768;
    var tt = {
        data: function () {
          return { CONNECTION_STATUS: _["a"] };
        },
        computed: Object(h["a"])(
          {},
          Object(ue["c"])("zoomApp", ["isZoomApp"]),
          Object(ue["c"])("systemConnection", ["connectionStatus"]),
          Object(ue["c"])("featureToggles", ["showConnectionStatus"]),
          Object(ue["e"])({
            currentUser: function (e) {
              return e.currentUser;
            },
            activeTabView: function (e) {
              return e.activeTabView;
            },
            presentation: function (e) {
              return e.presentation;
            },
            audienceId: function (e) {
              return e.audienceId;
            },
          }),
          {
            isSkoleTube: function () {
              return (
                this.presentation &&
                this.presentation.user &&
                "skoletube" === this.presentation.user.identifyProvider
              );
            },
            isTabReviewDisabled: function () {
              return !this.audienceId;
            },
            isTabFeedbackDisabled: function () {
              return !this.audienceId;
            },
            isShowTabFeedback: function () {
              return (
                (this.presentation &&
                  this.presentation.isEnablePrivateFeedback) ||
                this.isTabFeedbackDisabled
              );
            },
            isAccountTabVisible: function () {
              return this.presentation && this.presentation.isAccountTabVisible;
            },
            isShowTabProfile: function () {
              return (
                !c["a"].checkWhiteLabelDomain() &&
                A["a"].region !== et["a"].euRegion &&
                !this.isSkoleTube &&
                !this.isZoomApp &&
                this.isAccountTabVisible
              );
            },
            isEmbedAudienceApp: function () {
              return window.location.href.includes(A["a"].presenterUrl);
            },
            userId: function () {
              return this.currentUser && this.currentUser.id;
            },
            tabQueryParam: function () {
              return this.$route.query.tab;
            },
            isUnleashAndConnectionGoodOrUnstable: function () {
              return (
                "slide" !== this.activeTabView ||
                !this.showConnectionStatus ||
                this.isConnectionGoodOrUnstable
              );
            },
            isConnectionGoodOrUnstable: function () {
              return (
                "slide" === this.activeTabView &&
                this.showConnectionStatus &&
                (this.connectionStatus === _["a"].GOOD ||
                  this.connectionStatus === _["a"].UNSTABLE)
              );
            },
            isConnectionError: function () {
              return (
                "slide" === this.activeTabView &&
                this.showConnectionStatus &&
                this.connectionStatus === _["a"].ERROR
              );
            },
            isConnectionReconnecting: function () {
              return (
                "slide" === this.activeTabView &&
                this.showConnectionStatus &&
                this.connectionStatus === _["a"].RECONNECTING
              );
            },
            isConnectionGood: function () {
              return (
                "slide" === this.activeTabView &&
                this.showConnectionStatus &&
                this.connectionStatus === _["a"].GOOD
              );
            },
            isConnectionUnstable: function () {
              return (
                "slide" === this.activeTabView &&
                this.showConnectionStatus &&
                this.connectionStatus === _["a"].UNSTABLE
              );
            },
          }
        ),
        watch: {
          "$route.name": {
            handler: function (e) {
              if (e) {
                var t = this._getActiveTabByRouteName(e);
                this.setActiveTabAction(t);
              }
            },
            immediate: !0,
          },
          tabQueryParam: {
            handler: function (e) {
              if (e) {
                var t = this._getActiveTabByRouteName(e);
                this.$router.push({
                  name: t,
                  params: { id: this.$route.params.id },
                });
              }
            },
            immediate: !0,
          },
        },
        methods: Object(h["a"])({}, Object(ue["b"])(["setActiveTabAction"]), {
          trackingSwitchTab: function (e) {
            var t = this._getActiveTabByRouteName(e);
            if ("profile" === t && this.currentUser && this.currentUser.id)
              this.$store.state.lazyTrackingSwitchTab = !0;
            else {
              var n = {
                  feedback: "Feedback",
                  profile: "Account",
                  slide: "Presentation",
                  lookback: "Lookback",
                },
                a = {
                  eventCategory: "Audience",
                  eventLabel: n[t],
                  presentationId: this.presentation && this.presentation.id,
                };
              c["a"].ga4Track("Main screen > Switch tab", a);
            }
          },
          handleSwitchTab: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = this._getActiveTabByRouteName(e) === this.activeTabView;
            t ||
              n ||
              (this.$router.push({
                name: e,
                params: { id: this.$route.params.id },
              }),
              this.trackingSwitchTab(e));
          },
          _getActiveTabByRouteName: function (e) {
            var t = e.toLowerCase();
            switch (t) {
              case "home":
              case "presentation":
                return "slide";
              case "lookback":
                return "lookback";
              case "feedback":
                return "feedback";
              case "account":
              case "profile":
                return "profile";
              default:
                return "slide";
            }
          },
          handleLogoutZoomApp: function () {
            window.parent.postMessage("logoutZoomApp", A["a"].presenterUrl);
          },
        }),
      },
      nt = tt,
      at = (n("a548"), Object(We["a"])(nt, Ze, Xe, !1, null, "a1e38cd0", null)),
      it = at.exports,
      ot = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            staticClass: "bottom-slide-progress-bar",
            attrs: { id: "bottom-progress-bar" },
          },
          [
            n("div", {
              staticClass: "slide-progress-bar",
              style: { width: e.percentProgress },
            }),
          ]
        );
      },
      rt = [],
      st = (n("20d6"), n("2075")),
      ut = {
        computed: Object(h["a"])(
          {},
          Object(ue["e"])({
            slides: function (e) {
              return e.slides;
            },
          }),
          Object(ue["c"])({ activeSlide: "activeActivity" }),
          {
            percentProgress: function () {
              var e = this,
                t = this.slides.findIndex(function (t) {
                  return t.id == e.activeSlide.id;
                });
              return -1 !== t && this.slides.length
                ? "".concat((100 * (t + 1)) / this.slides.length, "%")
                : "".concat(0, "%");
            },
          }
        ),
        watch: {
          "slide.id": {
            handler: function () {
              this.getDataProgress();
            },
            immediate: !0,
          },
        },
        mounted: function () {
          this.getSlideList();
        },
        methods: Object(h["a"])(
          {},
          Object(ue["b"])(["getSlidesAction", "setSlideIndexAction"]),
          {
            getDataProgress: function () {
              var e = this;
              if (this.activeSlide.id || this.slides.length) {
                var t = this.slides.findIndex(function (t) {
                  return t.id == e.activeSlide.id;
                });
                -1 != t && this.setSlideIndexAction({ index: t });
              }
            },
            getSlideList: (function () {
              var e = Object(se["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), this.getSlidesAction()
                            );
                          case 3:
                            this.getDataProgress(), (e.next = 9);
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e["catch"](0)),
                              st &&
                                e.t0.status &&
                                qe["c"](JSON.stringify(e.t0));
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 6]]
                  );
                })
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }
        ),
      },
      ct = ut,
      dt = (n("87d0"), Object(We["a"])(ct, ot, rt, !1, null, "684ca815", null)),
      lt = dt.exports,
      pt = function () {
        var e = this,
          t = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      mt = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            {
              staticClass: "pswp",
              attrs: { tabindex: "-1", role: "dialog", "aria-hidden": "true" },
            },
            [
              n("div", { staticClass: "pswp__bg" }),
              n("div", { staticClass: "pswp__scroll-wrap" }, [
                n("div", { staticClass: "pswp__container" }, [
                  n("div", { staticClass: "pswp__item" }),
                  n("div", { staticClass: "pswp__item" }),
                  n("div", { staticClass: "pswp__item" }),
                ]),
                n("div", { staticClass: "pswp__ui pswp__ui--hidden" }, [
                  n("div", { staticClass: "pswp__top-bar" }, [
                    n("div", { staticClass: "pswp__counter" }),
                    n("button", {
                      staticClass: "pswp__button pswp__button--close",
                      attrs: { title: "Close (Esc)" },
                    }),
                    n("div", { staticClass: "pswp__preloader" }, [
                      n("div", { staticClass: "pswp__preloader__icn" }, [
                        n("div", { staticClass: "pswp__preloader__cut" }, [
                          n("div", { staticClass: "pswp__preloader__donut" }),
                        ]),
                      ]),
                    ]),
                  ]),
                  n(
                    "div",
                    {
                      staticClass:
                        "pswp__share-modal pswp__share-modal--hidden pswp__single-tap",
                    },
                    [n("div", { staticClass: "pswp__share-tooltip" })]
                  ),
                  n("button", {
                    staticClass: "pswp__button pswp__button--arrow--left",
                    attrs: { title: "Previous (arrow left)" },
                  }),
                  n("button", {
                    staticClass: "pswp__button pswp__button--arrow--right",
                    attrs: { title: "Next (arrow right)" },
                  }),
                  n("div", { staticClass: "pswp__caption" }, [
                    n("div", { staticClass: "pswp__caption__center" }),
                  ]),
                ]),
              ]),
            ]
          );
        },
      ],
      gt = {},
      ht = gt,
      bt = Object(We["a"])(ht, pt, mt, !1, null, null, null),
      vt = bt.exports,
      ft = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.isShowConnectionInform
          ? n("div", { staticClass: "connection-inform" }, [
              n(
                "div",
                {
                  staticClass: "connection-inform__body",
                  class: { "no-internet": e.isNoInternet },
                },
                [
                  n("div", { staticClass: "connection-inform__container" }, [
                    n("div", { staticClass: "connection-inform__text" }, [
                      e._v("\n        " + e._s(e.message) + "\n      "),
                    ]),
                    n("div", { staticClass: "connection-inform__action" }, [
                      n(
                        "div",
                        {
                          staticClass: "action-reload",
                          on: { click: e.reloadPage },
                        },
                        [
                          n("button", { staticClass: "rm-outline" }, [
                            e._v(
                              "\n            " +
                                e._s(e.$t("Reload")) +
                                "\n          "
                            ),
                          ]),
                        ]
                      ),
                      n("div", { staticClass: "line" }),
                      n(
                        "div",
                        { staticClass: "action-close", on: { click: e.close } },
                        [
                          n(
                            "button",
                            { staticClass: "rm-outline" },
                            [
                              n("aha-icon", {
                                attrs: {
                                  name: "close",
                                  width: "16",
                                  viewBox: "0 0 24 24",
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]
              ),
            ])
          : e._e();
      },
      wt = [],
      kt = {
        computed: Object(h["a"])(
          {},
          Object(ue["c"])("systemConnection", [
            "connectionStatus",
            "userConnectionStatus",
            "showConnectionInform",
          ]),
          {
            isNoInternet: function () {
              return this.userConnectionStatus === _["a"].ERROR;
            },
            isShowConnectionInform: function () {
              return (
                this.showConnectionInform &&
                (this.userConnectionStatus === _["a"].RECONNECTING ||
                  this.userConnectionStatus === _["a"].ERROR)
              );
            },
            message: function () {
              return this.userConnectionStatus
                ? this.$t("No internet. Retrying...")
                : "";
            },
          }
        ),
        methods: Object(h["a"])(
          {},
          Object(ue["b"])("systemConnection", ["setShowConnectionInform"]),
          {
            reloadPage: function () {
              window.location.reload(),
                c["a"].mixpanelTrack(
                  "System Status",
                  "User presses Reload",
                  this.$store.state.presentation.id,
                  { nonInteraction: !0 }
                );
            },
            close: function () {
              this.setShowConnectionInform(!1);
            },
          }
        ),
      },
      yt = kt,
      St = (n("852d"), Object(We["a"])(yt, ft, wt, !1, null, "bfc1cfb8", null)),
      At = St.exports,
      _t = function (e) {
        return a["default"].component("FooterContainer", {
          computed: Object(h["a"])(
            {},
            Object(ue["e"])({
              presentation: function (e) {
                return e.presentation;
              },
              activeTabView: function (e) {
                return e.activeTabView;
              },
            }),
            Object(ue["c"])({ slide: "activeActivity" }),
            {
              isCtaShowing: function () {
                return (
                  !!(
                    this.presentation &&
                    this.slide &&
                    this.presentation.id &&
                    this.slide.id
                  ) &&
                  (!this.presentation.user ||
                    !this.presentation.user.isGuest) &&
                  this.slide.id === this.presentation.lastSlide &&
                  "pickAnswer" !== this.slide.type &&
                  "slide" === this.activeTabView
                );
              },
              canDisplayFooter: function () {
                return (
                  this.presentation &&
                  this.presentation.id &&
                  "white-label" !== this.presentation.planType
                );
              },
            }
          ),
          render: function (t) {
            return this.canDisplayFooter
              ? t(e, { props: { isCtaShowing: this.isCtaShowing } })
              : null;
          },
        });
      },
      Tt = n("b92b"),
      zt = n("a65d"),
      Pt = n.n(zt),
      jt = n("472f"),
      Ct = {
        computed: Object(h["a"])(
          {},
          Object(ue["e"])({
            presentation: function (e) {
              return e.presentation;
            },
            currentUser: function (e) {
              return e.currentUser;
            },
            audienceId: function (e) {
              return e.audienceId;
            },
          }),
          {
            isPresentationLoaded: function () {
              return this.presentation && this.presentation.id;
            },
            isUserLoggedIn: function () {
              return this.currentUser && this.currentUser.id;
            },
            isUserAndPresentationLoaded: function () {
              return this.isUserLoggedIn && this.isPresentationLoaded;
            },
          }
        ),
        watch: {
          isUserLoggedIn: {
            handler: function (e) {
              e && document.body.classList.add("user-logged");
            },
            immediate: !0,
          },
          isUserAndPresentationLoaded: {
            handler: function (e) {
              e &&
                this.createNewAttendedPresentation({
                  presentationId: this.presentation && this.presentation.id,
                });
            },
            immediate: !0,
          },
        },
        methods: Object(h["a"])(
          {},
          Object(ue["b"])(["setIsCreatedNewAttendedAction"]),
          {
            createNewAttendedPresentation: (function () {
              var e = Object(se["a"])(
                regeneratorRuntime.mark(function e(t) {
                  var n, a, i;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = t.presentationId),
                              !this.currentUser || !this.currentUser.isGuest)
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            if (
                              ((e.prev = 3),
                              (a = "aha-attended-presentation-"
                                .concat(this.currentUser.id, "-")
                                .concat(n)),
                              (i = !1),
                              "undefined" !== typeof localStorage &&
                                (i = localStorage.getItem(a)),
                              !i)
                            ) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt("return");
                          case 9:
                            return (
                              (e.next = 11),
                              Ee["a"].createAttendedPresentation({
                                presentationId: n,
                              })
                            );
                          case 11:
                            "undefined" !== typeof localStorage &&
                              localStorage.setItem(a, "true"),
                              (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e["catch"](3)),
                              qe["c"](e.t0);
                          case 17:
                            return (
                              (e.prev = 17),
                              this.setIsCreatedNewAttendedAction(!0),
                              e.finish(17)
                            );
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[3, 14, 17, 20]]
                  );
                })
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }
        ),
      };
    a["default"].use(Pt.a, { duration: 3e3, singleton: !0 });
    var Ot = "#ffffff",
      Et = "show-toasted-login",
      It = ["slide", "lookback", "feedback", "profile"],
      Rt = {
        components: {
          Footer: _t(Je),
          Tabs: it,
          SlideProgressBar: lt,
          PhotoSwipe: vt,
          ConnectionInform: At,
        },
        mixins: [Ct],
        data: function () {
          return { width: 668, iframeHeight: 375.75, countRender: 0 };
        },
        computed: Object(h["a"])(
          {},
          Object(ue["e"])({
            presentation: function (e) {
              return e.presentation;
            },
            activeTabView: function (e) {
              return e.activeTabView;
            },
            currentUser: function (e) {
              return e.currentUser;
            },
            audienceId: function (e) {
              return e.audienceId;
            },
            currentTokenValue: function (e) {
              return e.currentTokenValue;
            },
          }),
          Object(ue["c"])("featureToggles", ["showConnectionStatus"]),
          Object(ue["c"])("themeModule", [
            "activeActivityWithTheme",
            "currentPresentationTheme",
            "canViewThemeGallery",
            "themeBaseColour",
            "activeActivityBaseColour",
          ]),
          {
            slide: function () {
              return this.activeActivityWithTheme;
            },
          },
          Object(ue["c"])("themeModule", [
            "isTextColourLight",
            "contrastBackgroundColour",
          ]),
          {
            privateMode: function () {
              return this.presentation && this.presentation.privateMode;
            },
            isReactionsVisible: function () {
              return !this.presentation.privateMode && this.slide.id;
            },
            isHome: function () {
              return "home" === this.$route.name;
            },
            isSlideTab: function () {
              return "slide" === this.activeTabView;
            },
            backgroundStyle: function () {
              return "slide" === this.activeTabView
                ? {
                    opacity:
                      "freestyle" === this.slide.type
                        ? this.slide.visibility / 250
                        : this.slide.visibility / 100,
                    "background-image": "url(".concat(
                      this.slide.backgroundImage.large,
                      ")"
                    ),
                  }
                : {
                    opacity: 1,
                    background:
                      this.$store.state.isDarkTheme || !this.isTextColourLight
                        ? "#fff"
                        : "#464646",
                  };
            },
            canShowSlideProgressBar: function () {
              return (
                this.presentation &&
                this.presentation.id &&
                !this.presentation.audiencePacing
              );
            },
            isAudiencePaced: function () {
              return (
                this.presentation &&
                this.presentation.id &&
                this.presentation.audiencePacing
              );
            },
          }
        ),
        watch: {
          activeTabView: {
            handler: function (e) {
              var t;
              (this.countRender = 0),
                (t = document.body.classList).remove.apply(t, It),
                document.body.classList.add(e),
                window.scrollTo(0, 0);
            },
            immediate: !0,
          },
          "$route.query": {
            handler: function (e) {
              var t = "attended-presentation-detail";
              e["".concat(t)]
                ? document.body.classList.add("attended-presentation")
                : document.body.classList.remove("attended-presentation"),
                window.scrollTo(0, 0);
            },
            immediate: !0,
          },
          slide: function (e) {
            if (e.id) {
              this.$store.state.isDarkTheme &&
              !this.slide.backgroundImage &&
              e.baseColour &&
              e.baseColour.toLowerCase() === Ot
                ? ((document.body.style.backgroundColor = "rgb(34, 34, 34)"),
                  (document.body.style.color = "white"),
                  this.countRender++)
                : !this.slide.backgroundImage &&
                  e.baseColour &&
                  "#222222" === e.baseColour.toLowerCase()
                ? ((document.body.style.backgroundColor = "#464646"),
                  (document.body.style.color = e.textColour))
                : ((document.body.style.backgroundColor = e.baseColour),
                  (document.body.style.color = e.textColour));
              var t = "qna-session-box";
              document.getElementById(t) &&
                ((document.getElementById(t).style.backgroundColor =
                  this.contrastBackgroundColour),
                (document.getElementById(t).style.color = e.textColour));
            }
          },
          "$store.state.disableScrollBody": function (e) {
            e
              ? document.body.classList.add("no-scroll")
              : document.body.classList.remove("no-scroll");
          },
          $route: function (e) {
            window.ga && (e.hash || window.ga("send", "pageview", e.fullPath));
          },
          privateMode: {
            handler: function (e) {
              e
                ? document.body.classList.add("is-private-mode")
                : document.body.classList.remove("is-private-mode");
            },
          },
          isAudiencePaced: {
            handler: function (e) {
              e
                ? document.body.classList.add("is-audience-paced")
                : document.body.classList.remove("is-audience-paced");
            },
          },
        },
        created: (function () {
          var e = Object(se["a"])(
            regeneratorRuntime.mark(function e() {
              var t;
              return regeneratorRuntime.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), this.initializeFeatureToggles();
                      case 2:
                        c["a"].migrateTokenCookie(),
                          (t = !!c["a"].getParamValue(
                            "dark-theme",
                            window.location.href
                          )),
                          (this.$store.state.isDarkTheme = t),
                          t &&
                            this.slide.backgroundImage &&
                            ((document.body.style.backgroundColor =
                              "rgb(34, 34, 34)"),
                            (document.body.style.color = "white"));
                      case 6:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        mounted: (function () {
          var e = Object(se["a"])(
            regeneratorRuntime.mark(function e() {
              var t,
                n,
                a,
                i,
                o,
                r = this;
              return regeneratorRuntime.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          Le(),
                          this.setUserFirstPage(),
                          xe.initResources(),
                          (e.next = 5),
                          this.getCurrentUser()
                        );
                      case 5:
                        this.$store.commit("setUserLoaded", !0),
                          this.initCurrentTokenValue(),
                          this.checkShowToastedLogin();
                        try {
                          (t =
                            /constructor/i.test(window.HTMLElement) ||
                            (function (e) {
                              return (
                                "[object SafariRemoteNotification]" ===
                                e.toString()
                              );
                            })(
                              !window["safari"] ||
                                ("undefined" !== typeof safari &&
                                  safari.pushNotification)
                            )),
                            (n = window.navigator.userAgent),
                            (a = !!n.match(/iPad/i) || !!n.match(/iPhone/i)),
                            (i = !!n.match(/WebKit/i)),
                            (o = a && i && !n.match(/CriOS/i)),
                            (t || o) &&
                              document.body.classList.add("safari-env");
                        } catch (s) {
                          qe["c"](s);
                        }
                        c["a"].checkWhiteLabelDomain() &&
                          c["a"].mixpanelTrack(
                            "White Label",
                            "Open White-Labelled Audience app",
                            "Open White-Labelled Audience app at ".concat(
                              window.location.host
                            )
                          ),
                          window.addEventListener("offline", function () {
                            (r.$store.state.socketDisconnect = !0),
                              c["a"].mixpanelTrack(
                                "Network Status",
                                "Offline",
                                r.$store.state.presentation.id,
                                { nonInteraction: !0 }
                              );
                          }),
                          window.addEventListener("online", function () {
                            (r.$store.state.socketDisconnect = !1),
                              c["a"].mixpanelTrack(
                                "Network Status",
                                "Online",
                                r.$store.state.presentation.id,
                                { nonInteraction: !0 }
                              );
                          }),
                          this.onVisibilityChange(),
                          this.clearExpiredLocalStorage();
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        beforeDestroy: function () {
          this.offVisibilityChange();
        },
        methods: Object(h["a"])(
          {},
          Object(ue["b"])("featureToggles", ["initializeFeatureToggles"]),
          Object(ue["b"])([
            "setCurrentUserAction",
            "setUserLoaded",
            "setIsLoadingCurrentUserAction",
          ]),
          {
            setFlagUserUpdatedGA4: function (e) {
              if (e && !e.isGuest) {
                var t = "updated-audience-ga4-".concat(e.id),
                  n = jt["a"](t);
                n ||
                  (c["a"].ga4Set("user_properties", {
                    first_page: e.firstPage,
                    referral_user_id: e.referralUserId,
                    sign_up_source: e.source,
                    use_ahaslides_for: e.personalInformation
                      ? e.personalInformation.useAhaSlidesFor
                      : null,
                    updated_at: e.updatedAt,
                  }),
                  jt["b"](t, !0, 2592e6));
                var a = "updated-ga4-user-source-".concat(e.id),
                  i = jt["a"](a);
                i ||
                  (c["a"].ga4Set("user_properties", {
                    sign_up_source: e.source,
                  }),
                  jt["b"](a, !0, 31536e7));
              }
            },
            getCurrentUser: (function () {
              var e = Object(se["a"])(
                regeneratorRuntime.mark(function e() {
                  var t, n;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((t = Tt["a"].getValue("ahaToken")), t)) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (
                              this.setIsLoadingCurrentUserAction(!0),
                              (a["default"].http.headers.common.Authorization =
                                "Bearer ".concat(t)),
                              (e.prev = 5),
                              (e.next = 8),
                              Pe.getUser()
                            );
                          case 8:
                            if (((n = e.sent), !n)) {
                              e.next = 14;
                              break;
                            }
                            return (e.next = 12), this.setCurrentUserAction(n);
                          case 12:
                            return (
                              this.setFlagUserUpdatedGA4(n), e.abrupt("return")
                            );
                          case 14:
                            e.next = 19;
                            break;
                          case 16:
                            (e.prev = 16),
                              (e.t0 = e["catch"](5)),
                              qe["c"](e.t0);
                          case 19:
                            return (
                              (e.prev = 19),
                              this.setIsLoadingCurrentUserAction(!1),
                              e.finish(19)
                            );
                          case 22:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[5, 16, 19, 22]]
                  );
                })
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            checkShowToastedLogin: function () {
              if (this.currentUser && this.currentUser.id) {
                var e = window.localStorage.getItem(Et);
                e &&
                  (c["a"].showToastSuccess(
                    "You’ve just logged in as ".concat(this.currentUser.email)
                  ),
                  window.localStorage.removeItem(Et));
              }
            },
            setUserFirstPage: function () {
              var e = function (e) {
                  var t = "; ".concat(document.cookie),
                    n = t.split("; ".concat(e, "="));
                  return 2 === n.length ? n.pop().split(";").shift() : null;
                },
                t = function (e, t) {
                  var n = e,
                    a = t,
                    i = new Date();
                  i.setMonth(i.getMonth() + 12),
                    (document.cookie = ""
                      .concat(n, "=")
                      .concat(a, ";expires=")
                      .concat(i, ";domain=.ahaslides.com;path=/")),
                    (document.cookie = ""
                      .concat(n, "=")
                      .concat(a, ";expires=")
                      .concat(i, ";domain=.ahaslide.com;path=/")),
                    (document.cookie = ""
                      .concat(n, "=")
                      .concat(a, ";expires=")
                      .concat(i, ";domain=localhost;path=/"));
                },
                n = new Proxy(new URLSearchParams(window.location.search), {
                  get: function (e, t) {
                    return e.get(t);
                  },
                }),
                a = n.from,
                i = e("ahaFirstPage"),
                o = e("ahaToken"),
                r = e("aha-guest-user");
              i || (o && !r) || a || t("ahaFirstPage", window.location.href);
            },
            _triggerReloadToSyncLoginState: function () {
              if (!document.hidden) {
                var e = Tt["a"].getValue("ahaToken"),
                  t = this.currentUser && this.currentUser.id;
                !e && t && window.location.reload(),
                  e && !t && window.location.reload(),
                  e &&
                    this.currentTokenValue &&
                    this.currentTokenValue !== e &&
                    window.location.reload();
              }
            },
            onVisibilityChange: function () {
              document.addEventListener(
                "visibilitychange",
                this._triggerReloadToSyncLoginState
              );
            },
            offVisibilityChange: function () {
              document.removeEventListener(
                "visibilitychange",
                this._triggerReloadToSyncLoginState
              );
            },
            initCurrentTokenValue: function () {
              var e = Tt["a"].getValue("ahaToken");
              e &&
                this.$store.commit(
                  "setCurrentTokenValue",
                  Tt["a"].getValue("ahaToken")
                );
            },
            clearExpiredLocalStorage: function () {
              for (var e = 0; e < localStorage.length; e++) {
                var t = localStorage.key(e);
                if (t.includes("chat-messages-"))
                  try {
                    var n = JSON.parse(localStorage.getItem(t));
                    n.expiry ? jt["a"](t) : localStorage.removeItem(t);
                  } catch (a) {
                    qe["c"](a);
                  }
              }
            },
          }
        ),
      },
      Nt = Rt,
      xt =
        (n("5c0b"),
        n("5c64"),
        n("1564"),
        Object(We["a"])(Nt, oe, re, !1, null, null, null)),
      Lt = xt.exports;
    n.d(t, "app", function () {
      return qt;
    }),
      (a["default"].config.productionTip = !1),
      ("staging" !== A["a"].env && "develop" !== A["a"].env) ||
        (a["default"].config.devtools = !0),
      E["a"].init(),
      O.init(),
      a["default"].use(w),
      a["default"].use(i["a"], {
        defaultOffset: 8,
        defaultTrigger: "hover click",
      }),
      a["default"].directive("zoom", s),
      a["default"].use(r.a),
      a["default"].use(p["a"]),
      a["default"].use(S.a),
      a["default"].use(g.a),
      a["default"].use(k["a"]);
    var qt = new a["default"]({
      i18n: ae,
      router: ie["a"],
      store: T["a"],
      render: function (e) {
        return e(Lt);
      },
    }).$mount("#app");
  },
  "5c0b": function (e, t, n) {
    "use strict";
    var a = n("5e27"),
      i = n.n(a);
    i.a;
  },
  "5c64": function (e, t, n) {
    "use strict";
    var a = n("c2ae"),
      i = n.n(a);
    i.a;
  },
  "5e1a": function (e, t, n) {
    "use strict";
    n("96cf");
    var a = n("3b8d"),
      i = n("2b0e"),
      o = n("db49"),
      r = n("4360"),
      s = null,
      u = {
        createReaction: {
          method: "POST",
          url: "".concat(o["a"].baseUrl, "/api/reaction/"),
        },
        createReactionViaLiveApi: {
          method: "POST",
          url: "".concat(o["a"].baseUrlLiveApi, "/api/stream/reactions"),
        },
        createReactionViaLiveProxy: {
          method: "POST",
          url: "".concat(o["a"].liveProxyUrl, "/api/live/reactions"),
        },
      },
      c = function () {
        s = i["default"].resource("", {}, u);
      },
      d = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, a, i;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      (r["a"].getters["featureToggles/enableForBigEvent"] &&
                        (t.enableForBigEvent = !0),
                      !r["a"].getters["liveStatsV2/canUseReactionLiveProxy"])
                    ) {
                      e.next = 6;
                      break;
                    }
                    return (e.next = 4), s.createReactionViaLiveProxy(t);
                  case 4:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 6:
                    if (!r["a"].getters["liveStatsV2/canSubmitReactionEmqx"]) {
                      e.next = 11;
                      break;
                    }
                    return (e.next = 9), s.createReactionViaLiveApi(t);
                  case 9:
                    return (a = e.sent), e.abrupt("return", a.body);
                  case 11:
                    return (e.next = 13), s.createReaction(t);
                  case 13:
                    return (i = e.sent), e.abrupt("return", i.body);
                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    t["a"] = { initResource: c, createReaction: d };
  },
  "5e27": function (e, t, n) {},
  6: function (e, t) {},
  "60c4": function (e, t, n) {},
  "639a": function (e, t, n) {
    "use strict";
    var a = n("cebc"),
      i = n("bd86"),
      o = { ACCOUNT_REMOVAL: "account-removal" };
    function r(e, t) {
      t.$router.push({ name: "home", query: { error: !0 } });
    }
    var s = Object(i["a"])({}, o.ACCOUNT_REMOVAL, r),
      u = s,
      c = (n("55dd"), n("ac6a"), n("f3e2"), n("75fc")),
      d = (n("20d6"), { SLIDE_OPTION: "slideOption" }),
      l = {
        UPDATE_SLIDE_OPTION: "update",
        CREATE_SLIDE_OPTION: "create",
        BULK_CREATE_SLIDE_OPTIONS: "bulk-create",
        DELETE_SLIDE_OPTION: "delete",
        SORT_SLIDE_OPTION: "sort",
      },
      p = function (e, t) {
        return e.findIndex(function (e) {
          return t == e.id;
        });
      };
    function m(e, t) {
      var n = p(t.SlideOptions, e.data.id);
      -1 != n &&
        ((t.SlideOptions[n].title = e.data.title),
        (t.SlideOptions[n].order = e.data.order),
        (t.SlideOptions[n].correct = e.data.correct),
        (t.SlideOptions[n].image = e.data.image),
        (t.SlideOptions[n].pairTitle = e.data.pairTitle),
        (t.SlideOptions[n].imageCropped = e.data.imageCropped));
    }
    function g(e, t) {
      t.SlideOptions.push(e.data);
    }
    function h(e, t) {
      var n;
      (n = t.SlideOptions).push.apply(n, Object(c["a"])(e.data));
    }
    function b(e, t) {
      var n = p(t.SlideOptions, e.data.id);
      -1 != n && t.SlideOptions.splice(n, 1),
        t.radioSelectded == e.data.id && (t.radioSelectded = null);
    }
    function v(e, t) {
      var n = e.data.updatedSlideOption;
      t.SlideOptions.forEach(function (e) {
        e.id === n.id && (e.order = n.order);
      });
    }
    function f(e, t) {
      var n = t.$store.getters.activeActivity;
      if (n.id == e.data.slideId) {
        var a = !1;
        e.action === l.UPDATE_SLIDE_OPTION
          ? (m(e, n), (a = !0))
          : e.action === l.CREATE_SLIDE_OPTION
          ? (g(e, n), (a = !0))
          : e.action === l.BULK_CREATE_SLIDE_OPTIONS
          ? (h(e, n), (a = !0))
          : e.action === l.DELETE_SLIDE_OPTION
          ? b(e, n)
          : e.action === l.SORT_SLIDE_OPTION && (v(e, n), (a = !0)),
          a &&
            n.SlideOptions.sort(function (e, t) {
              return e.order - t.order;
            });
      }
    }
    var w,
      k = Object(i["a"])({}, d.SLIDE_OPTION, f),
      y = k,
      S = (n("96cf"), n("6762"), n("7f7f"), n("3b8d")),
      A = (n("5df3"), n("4f7f"), n("0c12")),
      _ = n("4360"),
      T = function (e) {
        (_["a"].getters.activeActivity = Object(a["a"])(
          {},
          _["a"].getters.activeActivity,
          {
            numberOfHintsShown: e.numberOfHintsShown,
            hintsShowingIndex: e.hintsShowingIndex,
          }
        )),
          A["a"].$emit("hints: update-show-hints", e);
      },
      z = function (e, t) {
        return e.findIndex(function (e) {
          return t == e.id;
        });
      },
      P = function (e, t, n) {
        if ("create" === e) {
          var a =
            _["a"].getters.activeActivity.hints &&
            _["a"].getters.activeActivity.hints.length;
          a
            ? _["a"].getters.activeActivity.hints.push(t)
            : (_["a"].getters.activeActivity.hints = [t]),
            (_["a"].getters.activeActivity.hints = Object(c["a"])(
              new Set(_["a"].getters.activeActivity.hints)
            ));
        } else if ("patch" === e) {
          var i = z(_["a"].getters.activeActivity.hints, t.id);
          -1 != i &&
            ((_["a"].getters.activeActivity.hints[i].title = t.title),
            (_["a"].getters.activeActivity.hints[i].order = t.order));
        } else if ("delete" === e) {
          var o = z(_["a"].getters.activeActivity.hints, t.id);
          -1 != o && _["a"].getters.activeActivity.hints.splice(o, 1);
        }
        n &&
          _["a"].getters.activeActivity.hints.sort(function (e, t) {
            return e.order - t.order;
          });
      },
      j = { handleHintsDataFromPresenter: T, handleCRUDHintsFromPresenter: P },
      C = n("02c5"),
      O = n("069e"),
      E = {
        SLIDE: "slide",
        CLEAR_SLIDE_DATA: "slideClearData",
        UPDATE_CANVAS_BLOCKS: "update-canvas-blocks",
        SORT_SLIDE: "sort-slide",
        ACCEPT_TYPE_ANSWER: "acceptTypeAnswer",
        SPIN_THE_WHEEL: "spinner-wheel",
        QUIZ_HINTS: "hints",
      };
    function I(e, t) {
      if (!e.data.multipleChoice && e.data.multipleChoice != t.multipleChoice)
        for (var n = 0; n < t.SlideOptions.length; n++)
          if (t.SlideOptions[n].selected) {
            t.radioSelectded = t.SlideOptions[n].id;
            break;
          }
    }
    function R(e, t) {
      if (e.data.limitChoice != t.limitChoice)
        for (var n = 0, a = 0; a < t.SlideOptions.length; a++)
          t.SlideOptions[a].selected && n++,
            n > e.data.limitChoice
              ? ((t.SlideOptions[a].selected = !1),
                (t.SlideOptions[a].disabled = !0))
              : (t.SlideOptions[a].disabled = !1);
    }
    function N(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = Object(S["a"])(
          regeneratorRuntime.mark(function e(t, n, a) {
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!t.isEncrypted) {
                      e.next = 4;
                      break;
                    }
                    return (e.next = 3), a.decryptSlide(t, n.id);
                  case 3:
                    t.data = e.sent;
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        x.apply(this, arguments)
      );
    }
    function L(e, t) {
      t.textColour != e.data.textColour &&
        ((document.body.style.color = e.data.textColour),
        (t.textColour = e.data.textColour)),
        t.baseColour != e.data.baseColour &&
          ((t.baseColour = e.data.baseColour),
          (document.body.style.backgroundColor = e.data.baseColour)),
        document.getElementById("qna-session-box") &&
          ((document.getElementById("qna-session-box").style.backgroundColor =
            t.baseColour),
          (document.getElementById("qna-session-box").style.color =
            t.textColour));
    }
    function q(e, t) {
      t.image !== e.data.image &&
        (e.data.image
          ? (t.image && t.image.name === e.data.image.name) ||
            (t.image = e.data.image)
          : (t.image = null)),
        t.backgroundImage !== e.data.backgroundImage &&
          (e.data.backgroundImage
            ? (t.backgroundImage &&
                t.backgroundImage.name === e.data.backgroundImage.name) ||
              (t.backgroundImage = e.data.backgroundImage)
            : (t.backgroundImage = null));
    }
    function V(e, t, n) {
      I(e, t),
        R(e, t),
        (t.title = e.data.title),
        (t.sanitizedTitle = e.data.sanitizedTitle),
        (t.titleHTML = e.data.titleHTML),
        (t.sanitizedTitleHTML = e.data.sanitizedTitleHTML),
        (t.bodyHTML = e.data.bodyHTML),
        (t.titleDesc = e.data.titleDesc),
        (t.deleted = e.data.deleted),
        (t.openEndedMultipleOption = e.data.openEndedMultipleOption),
        (t.multipleChoice = e.data.multipleChoice),
        (t.stopSubmission = e.data.stopSubmission),
        (t.subheading = e.data.subheading),
        (t.bulletPointsIndex = e.data.bulletPointsIndex),
        (t.showAllBulletPoints = e.data.showAllBulletPoints),
        (t.imageCaption = e.data.imageCaption),
        (t.imageType = e.data.imageType),
        (t.slideType = e.data.slideType),
        (t.textAlign = e.data.textAlign),
        (t.otherCorrectQuiz = e.data.otherCorrectQuiz),
        (t.correctQuizTypeAnswer = e.data.correctQuizTypeAnswer),
        (t.audioName = e.data.audioName),
        (t.audioShowControl = e.data.audioShowControl),
        (t.audioAutoPlay = e.data.audioAutoPlay),
        (t.audioRepeat = e.data.audioRepeat),
        (t.audioPlayOnAudience = e.data.audioPlayOnAudience),
        (t.audioAudienceShowControl = e.data.audioAudienceShowControl),
        (t.minPoint = e.data.minPoint),
        (t.maxPoint = e.data.maxPoint),
        (t.showIframe = e.data.showIframe),
        (t.showYouTubeIframe = e.data.showYouTubeIframe),
        (t.isCorrectGetPoint = e.data.isCorrectGetPoint),
        (t.metadata = e.data.metadata),
        (t.showVotingResultsOnAudience = e.data.showVotingResultsOnAudience),
        (t.showPercentage = e.data.showPercentage),
        (t.imageSubmission = e.data.imageSubmission),
        (t.publishedLink = e.data.publishedLink),
        (t.youtubeLink = e.data.youtubeLink),
        (t.visibility = e.data.visibility),
        (t.timeToAnswer = e.data.timeToAnswer),
        (t.fastAnswerGetMorePoint = e.data.fastAnswerGetMorePoint),
        (t.questionIndex = e.data.questionIndex),
        (t.questionCount = e.data.questionCount),
        (t.voteStep = e.data.voteStep),
        (t.hideResult = e.data.hideResult),
        (t.showCorrectOption = e.data.showCorrectOption),
        (t.scale = e.data.scale),
        (t.hasTimeLimit = e.data.hasTimeLimit),
        (t.randomColours = e.data.randomColours),
        (t.addCorrectOption = e.data.addCorrectOption),
        t.stopSubmissionTime !== e.data.stopSubmissionTime &&
          (t.stopSubmissionTime = e.data.stopSubmissionTime),
        t.entriesPerParticipant != e.data.entriesPerParticipant &&
          (t.entriesPerParticipant = e.data.entriesPerParticipant),
        e.data.additionalFields || (t.additionalFields = []),
        e.data.otherCorrectQuiz || (t.otherCorrectQuiz = []);
      try {
        t.additionalFields = JSON.parse(e.data.additionalFields);
      } catch (a) {
        C["c"](a), (t.additionalFields = []);
      }
      try {
        t.otherCorrectQuiz = JSON.parse(e.data.otherCorrectQuiz);
      } catch (a) {
        C["c"](a), (t.otherCorrectQuiz = []);
      }
      n.$store.dispatch("updateSlide", t);
    }
    function F(e, t, n) {
      t.type != e.data.type &&
        ((n.dataSlideNext = {
          presentation: {
            accessCode: n.$store.state.presentation.uniqueAccessCode,
          },
          id: t.id,
        }),
        n.confirmNextSlide());
    }
    function D(e, t, n) {
      n.presentation.audiencePacing ||
        (e.data.quizTimestamp && (t.quizTimestamp = e.data.quizTimestamp),
        (t.quizStatus = e.data.quizStatus)),
        t.quizResultCache !== e.data.quizResultCache &&
          (t.quizResultCache = e.data.quizResultCache),
        "pickAnswer" !== t.type || n.$store.state.presentation.audiencePacing
          ? (t.limitChoice = e.data.limitChoice)
          : ((t.limitChoice =
              n.$store.getters.activeActivity.SlideOptions.length),
            e.data.quizStatus == O["a"].COUNTDOWN_5S_SCREEN &&
              A["a"].$emit("startQuizScreenTwo"),
            e.data.quizStatus == O["a"].RESULT_SCREEN &&
              (A["a"].$emit("quizTimeout", e.data.id),
              A["a"].$emit("stop-progress-bar-quiz")),
            !n.$store.state.presentation.presenting &&
              e.data.quizStatus > 1 &&
              (n.$store.state.presentation.presenting = !0));
    }
    function B(e) {
      "hints" === e.action && j.handleHintsDataFromPresenter(e.data);
    }
    function U(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = Object(S["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var a;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = n.$store.getters.activeActivity),
                      (e.next = 3),
                      N(t, a, n)
                    );
                  case 3:
                    if (a.id === t.data.id) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return");
                  case 5:
                    L(t, a),
                      q(t, a),
                      _["a"].getters[
                        "featureToggles/canUseNewChangeSlideMechanism"
                      ] &&
                        "live" === t._from &&
                        D(t, a, n),
                      _["a"].getters[
                        "featureToggles/canUseNewChangeSlideMechanism"
                      ] ||
                        (4 == a.quizStatus &&
                          1 == t.data.quizStatus &&
                          a.id == t.data.id &&
                          C["c"](
                            "slide.websocket.subscriber: updateQuizStatus from question screen to lobby screen",
                            { extra: { currentSlide: a, updatedSlide: t.data } }
                          ),
                        D(t, a, n)),
                      F(t, a, n),
                      V(t, a, n),
                      B(t);
                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        M.apply(this, arguments)
      );
    }
    function Q() {
      setTimeout(function () {
        window.location.reload();
      }, 1e3);
    }
    function W(e) {
      A["a"].$emit("update-canvas-blocks", e.data);
    }
    function G(e, t) {
      (t.isSortSlide = !0),
        setTimeout(function () {
          t.isSortSlide = !1;
        }, 500);
    }
    function Y(e) {
      A["a"].$emit("acceptTypeAnswer", e.data);
    }
    function H(e, t) {
      var n = t.$store.getters.activeActivity;
      e.data &&
        (n.metadata || (t.$store.getters.activeActivity.metadata = {}),
        (t.$store.getters.activeActivity.metadata.wheelStatus =
          e.data.wheelStatus),
        e.data.winner &&
          (t.$store.getters.activeActivity.metadata.winner = e.data.winner),
        t.$store.dispatch("updateSlide", t.$store.getters.activeActivity));
    }
    function K(e) {
      var t = !1,
        n = ["create", "patch"];
      n.includes(e.action) && (t = !0),
        j.handleCRUDHintsFromPresenter(e.action, e.data, t);
    }
    var $,
      J,
      Z =
        ((w = {}),
        Object(i["a"])(w, E.SLIDE, U),
        Object(i["a"])(w, E.CLEAR_SLIDE_DATA, Q),
        Object(i["a"])(w, E.UPDATE_CANVAS_BLOCKS, W),
        Object(i["a"])(w, E.SORT_SLIDE, G),
        Object(i["a"])(w, E.ACCEPT_TYPE_ANSWER, Y),
        Object(i["a"])(w, E.SPIN_THE_WHEEL, H),
        Object(i["a"])(w, E.QUIZ_HINTS, K),
        w),
      X = Z,
      ee = n("2075"),
      te = n("e0eb"),
      ne = n("d697"),
      ae = n("7c97"),
      ie = n("968c"),
      oe = n("ae6b"),
      re = {
        PRESENTATION: "presentation",
        CLEAR_PRESENTATION_DATA: "slidePresentationData",
      },
      se = {
        NEXT_SLIDE: "nextSlide",
        STOP_SUBMISSION_ACTION: "stopSubmissionAction",
        BULLET_POINTS_INDEX_ACTION: "bulletPointsIndexAction",
        LANGUAGE: "language",
        CHANGE_ACCESS_CODE: "changeAccessCode",
        AUDIENCE_PACING: "audience-pacing",
        PRESENTING: "presenting",
        UPDATE: "update",
        FONT_FAMILY: "fontFamily",
        QNA_ANONYMOUS: "qnaAnonymous",
        QNA_ALL_SLIDE: "qnaAllSlide",
        QNA_AUDIENCE_SHOW_ALL: "qnaAudienceShowAll",
        UPDATE_LOGO: "updateLogo",
        SHOW_HYPER_LINK: "showHyperLink",
        PRIVATE_MODE: "privateMode",
        NOT_SHOW_AHA_SLIDES_LOGO: "notShowAhaSlidesLogo",
        HIDE_INDIVIDUAL_LEADERBOARD: "hideIndividualLeaderboard",
        PRESENTATION_UPDATE: "presentation-update",
        FILTERING_PROFANITY: "filteringProfanity",
        UPDATE_LAST_SLIDE: "updateLastSlide",
        ENABLE_MODERATION_MODE: "enableModerationMode",
        OPEN_PRIVATE_FEEDBACK: "open-private-feedback",
      };
    function ue(e, t) {
      try {
        var n =
          t.$store.state.numberTrackingPercent < ne["a"].TRACKING_SAMPLE_RATE &&
          t.$store.state.presentation.presenting &&
          e.clientTimestamp;
        n &&
          oe["a"].createPresentationAudienceLatency(
            Object(a["a"])({}, e, {
              action: "nextSlide",
              stage: "audience received",
              actor: "audience",
              totalCost: te["a"].getcurTimeStamp() - e.clientTimestamp,
              presentationId: t.$store.state.presentation.id,
              audienceId: t.$store.state.audienceId,
              audienceOffsetTime: t.$store.state.offsetTime,
              audienceTimestamp: te["a"].getTimeStamp(),
            })
          );
      } catch (i) {
        C["c"](i);
      }
    }
    function ce(e, t) {
      ue(e.data, t);
      var n = t.$store.getters.activeActivity;
      (n.id && t.$store.state.presentation.audiencePacing) ||
        ((t.$store.state.idSlide = null),
        t.$store.getters["featureToggles/canUseNewChangeSlideMechanism"] ||
        e.data.id != n.id
          ? (t.currentDataNextSlide &&
              t.currentDataNextSlide.timestamp > e.data.timestamp) ||
            (n && n.slideTimestamp > e.data.slideTimestamp) ||
            ((t.$store.state.currentDataNextSlide = e.data),
            (t.dataSlideNext = e.data),
            null === n.id && t.confirmNextSlide(),
            t.confirmNextSlide())
          : e.data.reload
          ? t.$router.go()
          : ((t.showConfirmNext = !1), (t.dataSlideNext = null)));
    }
    function de(e, t) {
      t.$store.state.presentation.accessCode = e.data.accessCode;
    }
    function le(e, t) {
      (t.$store.state.presentation.language = e.data.presentation.language),
        t.$store.dispatch("setLang", e.data.presentation.language);
    }
    function pe(e, t) {
      t.$store.state.presentation.qnaAnonymous =
        e.data.presentation.qnaAnonymous;
    }
    function me(e, t) {
      (t.$store.state.presentation.presenting = e.data.presentation.presenting),
        e.data.presentation.presenting && t.sendRequestUpdateTimeAudience();
    }
    function ge(e, t) {
      t.$store.state.presentation.notShowAhaSlidesLogo =
        e.data.presentation.notShowAhaSlidesLogo;
    }
    function he(e, t) {
      var n = t.$store.getters.activeActivity;
      ae["a"].clearSelfPaceTimeouts(),
        (t.$store.state.presentation.audiencePacing =
          e.data.presentation.audiencePacing),
        t.$store.state.presentation.audiencePacing
          ? t.getSlideList(t.$store.state.presentation.id, !0)
          : (window.location.reload(),
            (t.$store.getters.activeActivity.isEndSlide = !1)),
        t.$store.dispatch("updateSlide", n);
    }
    function be(e, t) {
      t.$store.state.presentation.showHyperLink =
        e.data.presentation.showHyperLink;
    }
    function ve(e, t) {
      t.$router.push({ name: "feedback" });
    }
    function fe(e, t) {
      t.$store.state.presentation.isModerationMode = e.data;
      var n = JSON.parse(JSON.stringify(t.$store.state.questions));
      te["a"].updateDataQuestionAnswer(n, t.$store.state.tabQnaQuestion);
    }
    function we(e, t) {
      ae["a"].clearSelfPaceTimeouts(),
        (t.$store.state.presentation.privateMode =
          e.data.presentation.privateMode),
        e.data.presentation.privateMode ||
          (e.data.presentation.audiencePacing
            ? window.location.reload()
            : setTimeout(function () {
                t.trackAudienceJoinPresentation(
                  t.audienceId,
                  e.data.presentation.id
                );
              }, 1e4 * Math.random()));
    }
    function ke(e, t) {
      t.$store.state.logo = e.data.presentation.logo;
    }
    function ye(e, t) {
      t.$store.state.presentation.filteringProfanity =
        e.data.presentation.filteringProfanity;
    }
    function Se(e, t) {
      t.$store.state.presentation.qnaAllSlide = e.data.presentation.qnaAllSlide;
    }
    function Ae(e, t) {
      (t.$store.state.presentation.qnaAudienceShowAll =
        e.data.presentation.qnaAudienceShowAll),
        t.handleDataQuestions(t.$store.state.presentation);
    }
    function _e(e, t) {
      t.$store.state.presentation.isHideIndividualLeaderboard =
        e.data.presentation.isHideIndividualLeaderboard;
    }
    function Te(e, t) {
      (t.$store.state.presentation.fontFamily = e.data.presentation.fontFamily),
        e.data.presentation.fontFamily &&
          te["a"].setFontSlideV2(e.data.presentation.fontFamily);
    }
    function ze(e, t) {
      (t.$store.getters.activeActivity.isEndSlide = !1),
        (t.$store.state.presentation.lastSlide = e.data),
        t.$store.dispatch("updateSlide", t.$store.getters.activeActivity),
        t._checkSubmited();
    }
    function Pe(e, t) {
      return (
        e.image &&
          t.image &&
          e.image.name === t.image.name &&
          (e.image = t.image),
        e.backgroundImage &&
          t.backgroundImage &&
          e.backgroundImage.name === t.backgroundImage.name &&
          (e.backgroundImage = t.backgroundImage),
        e
      );
    }
    function je(e, t) {
      if (
        t.$store.getters.activeActivity.id &&
        t.$store.getters.activeActivity.id != e.data.id
      )
        t.dataSlideNext && (t.dataSlideNext = e.data);
      else {
        var n = e.data.slideCacheUrl;
        "bulletPointsIndexAction" === e.action &&
          (t.currentDataBulletPoint = e.data),
          t.$http
            .get(n)
            .then(function (n) {
              if (
                ("bulletPointsIndexAction" !== e.action ||
                  t.$store.getters.activeActivity.id == e.data.id) &&
                !(
                  "bulletPointsIndexAction" === e.action &&
                  t.currentDataBulletPoint.timestamp > e.data.timestamp
                )
              ) {
                var a = t.tryParseBody(
                    n.bodyText,
                    t.$store.state.presentation.id
                  ),
                  i = te["a"].formatSlide(a);
                t.$store.dispatch("updateSlide", Pe(i, t.$store.state.slide));
              }
            })
            .catch(function (e) {
              ee &&
                e.status &&
                ((e.from = "Audience update current slide"),
                C["c"](JSON.stringify(e)));
            });
      }
    }
    function Ce(e, t) {
      if (
        t.$store.getters.activeActivity.id &&
        t.$store.getters.activeActivity.id != e.data.id
      )
        t.dataSlideNext && (t.dataSlideNext = e.data);
      else {
        var n = e.data.slideCacheUrl;
        "bulletPointsIndexAction" === e.action &&
          (t.currentDataBulletPoint = e.data),
          t.$http
            .get(n)
            .then(function (n) {
              if (
                ("bulletPointsIndexAction" !== e.action ||
                  t.$store.getters.activeActivity.id == e.data.id) &&
                !(
                  "bulletPointsIndexAction" === e.action &&
                  t.currentDataBulletPoint.timestamp > e.data.timestamp
                )
              ) {
                var a = t.tryParseBody(
                    n.bodyText,
                    t.$store.state.presentation.id
                  ),
                  i = te["a"].formatSlide(a);
                t.$store.dispatch("updateSlide", Pe(i, t.$store.state.slide));
              }
            })
            .catch(function (e) {
              ee &&
                e.status &&
                ((e.from = "Audience update current slide"),
                C["c"](JSON.stringify(e)));
            });
      }
    }
    function Oe(e, t) {
      void 0 !== e.data.teamPlay &&
        ((t.$store.state.presentation.teamPlay = e.data.teamPlay),
        ae["a"].playSelfPacedQuizSlide(
          t.$store.state.presentation,
          t.$store.getters.activeActivity
        )),
        void 0 !== e.data.teamData &&
          (t.$store.state.presentation.teamData = e.data.teamData),
        void 0 !== e.data.teamSize &&
          (t.$store.state.presentation.teamSize = e.data.teamSize),
        void 0 !== e.data.teamCount &&
          (t.$store.state.presentation.teamCount = e.data.teamCount),
        void 0 !== e.data.teamScoringRule &&
          (t.$store.state.presentation.teamPlay = e.data.teamScoringRule),
        void 0 !== e.data.audienceAdmission &&
          t._handleAudienceAdmissionDataFromSocket(e.data),
        void 0 !== e.data.isEnableChat &&
          (t.$store.state.presentation.isEnableChat = e.data.isEnableChat),
        void 0 !== e.data.isEnablePrivateFeedback &&
          (t.$store.state.presentation.isEnablePrivateFeedback =
            e.data.isEnablePrivateFeedback),
        void 0 !== e.data.hideInstructionBar &&
          (t.$store.state.presentation.hideInstructionBar =
            e.data.hideInstructionBar),
        void 0 !== e.data.isAccountTabVisible &&
          (t.$store.state.presentation.isAccountTabVisible =
            e.data.isAccountTabVisible),
        void 0 !== e.data.isEnablePrivateFeedback &&
          (t.$store.state.presentation.isEnablePrivateFeedback =
            e.data.isEnablePrivateFeedback);
    }
    var Ee =
      (($ = {}),
      Object(i["a"])($, se.NEXT_SLIDE, ce),
      Object(i["a"])($, se.LANGUAGE, le),
      Object(i["a"])($, se.CHANGE_ACCESS_CODE, de),
      Object(i["a"])($, se.QNA_ANONYMOUS, pe),
      Object(i["a"])($, se.NOT_SHOW_AHA_SLIDES_LOGO, ge),
      Object(i["a"])($, se.AUDIENCE_PACING, he),
      Object(i["a"])($, se.PRESENTING, me),
      Object(i["a"])($, se.OPEN_PRIVATE_FEEDBACK, ve),
      Object(i["a"])($, se.ENABLE_MODERATION_MODE, fe),
      Object(i["a"])($, se.PRIVATE_MODE, we),
      Object(i["a"])($, se.HIDE_INDIVIDUAL_LEADERBOARD, _e),
      Object(i["a"])($, se.UPDATE_LOGO, ke),
      Object(i["a"])($, se.SHOW_HYPER_LINK, be),
      Object(i["a"])($, se.QNA_ALL_SLIDE, Se),
      Object(i["a"])($, se.QNA_AUDIENCE_SHOW_ALL, Ae),
      Object(i["a"])($, se.FILTERING_PROFANITY, ye),
      Object(i["a"])($, se.FONT_FAMILY, Te),
      Object(i["a"])($, se.PRESENTATION_UPDATE, Oe),
      Object(i["a"])($, se.UPDATE_LAST_SLIDE, ze),
      Object(i["a"])($, se.STOP_SUBMISSION_ACTION, je),
      Object(i["a"])($, se.BULLET_POINTS_INDEX_ACTION, Ce),
      $);
    function Ie(e, t) {
      var n = Ee[e.action];
      n && "function" === typeof n && n(e, t);
    }
    function Re(e, t) {
      var n = e.data.resetTimeStamp,
        a = t.$store.state.presentation.id;
      ie["a"].clearValueByPresentation(a),
        ie["a"].setValueByPresentation(a, "resetTimeStamp", n),
        t.clearChatMessagesAction({
          uniqueAccessCode: t.$store.state.presentation.uniqueAccessCode,
        }),
        window.location.reload();
    }
    var Ne,
      xe =
        ((J = {}),
        Object(i["a"])(J, re.PRESENTATION, Ie),
        Object(i["a"])(J, re.CLEAR_PRESENTATION_DATA, Re),
        J),
      Le = xe,
      qe = n("1544"),
      Ve = n("ea50"),
      Fe = {
        ANSWER_QUIZ: "answer-quiz",
        QUIZ_AUDIENCE: "quiz-audience",
        AUDIENCE_ONLINE: "audience-online",
      };
    function De(e) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = Object(S["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, a, i, o, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = t.slide),
                      (a = t.editor),
                      (i = t.doc),
                      (o = i.data),
                      (r = a),
                      !r.$store.state.isLoadNextSlide[o.slideId])
                    ) {
                      e.next = 9;
                      break;
                    }
                    return (
                      (e.next = 6),
                      new Promise(function (e) {
                        var t = null;
                        t = setInterval(function () {
                          r.$store.state.isLoadNextSlide[o.slideId] ||
                            (clearInterval(t), e());
                        }, 100);
                      })
                    );
                  case 6:
                    if (
                      ((n = a.$store.getters.activeActivity),
                      n.id === o.slideId)
                    ) {
                      e.next = 9;
                      break;
                    }
                    return e.abrupt("return", !1);
                  case 9:
                    return e.abrupt("return", {
                      isGetDataSlideSlowThanSocket: !0,
                      slide: n,
                      dataSocket: o,
                    });
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Be.apply(this, arguments)
      );
    }
    function Ue(e, t) {
      t.$store.getters.activeActivity.id == e.data.id &&
        A["a"].$emit("answer-quiz", e.data);
    }
    function Me(e, t, n) {
      return Qe.apply(this, arguments);
    }
    function Qe() {
      return (
        (Qe = Object(S["a"])(
          regeneratorRuntime.mark(function e(t, n, a) {
            var i, o;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((i = !1), (n && n.id) || !t.data.slideId)) {
                      e.next = 10;
                      break;
                    }
                    return (e.next = 4), De({ slide: n, editor: a, doc: t });
                  case 4:
                    if (((o = e.sent), o)) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt("return");
                  case 7:
                    (i = o.isGetDataSlideSlowThanSocket),
                      (n = o.slide),
                      (t.data = o.dataSocket);
                  case 10:
                    "pickAnswer" === n.type &&
                      (t.data.quizTimestamp &&
                        ((a.$store.getters.activeActivity.quizTimestamp =
                          t.data.quizTimestamp),
                        (a.$store.state.startCountdownPickAnswer =
                          t.data.quizTimestamp)),
                      (a.$store.state.countdownTimeToAnswer = n.timeToAnswer),
                      (a.$store.getters.activeActivity.quizToken =
                        t.data.quizToken),
                      (a.$store.getters.activeActivity.quizStatus =
                        O["a"].QUESTION_SCREEN),
                      (a.$store.getters.activeActivity.numberOfHintsShown =
                        t.data.numberOfHintsShown),
                      a.$store.dispatch(
                        "updateSlide",
                        a.$store.getters.activeActivity
                      ),
                      A["a"].$emit("start-countdown-pick-answer"),
                      i && A["a"].$emit("recheck-progress-bar"));
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Qe.apply(this, arguments)
      );
    }
    function We(e, t) {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = Object(S["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var a;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!n.$store.state.presentation.audiencePacing) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    (a = n.$store.getters.activeActivity),
                      qe["a"].addBreadcrumb({
                        level: "info",
                        message: 'Socket message with type "quiz-audience"',
                        data: {
                          data: t.data,
                          quizTimestamp: t.data.quizTimestamp,
                        },
                      }),
                      "startCountdownPickAnswer" === t.action && Me(t, a, n);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        Ge.apply(this, arguments)
      );
    }
    function Ye(e, t) {
      if (t.$store.state.audienceName) {
        var n = {
          a: t.audienceId,
          c: t.$store.state.presentation.uniqueAccessCode,
        };
        ("pickAnswer" !== t.$store.getters.activeActivity.type &&
          "spinnerWheel" !== t.$store.getters.activeActivity.type &&
          "qrcode" !== t.$store.getters.activeActivity.type) ||
          ((n.n = t.$store.state.audienceName),
          (n.e = t.$store.state.audienceEmoji),
          (n.t = t.$store.state.audienceQuizTeam)),
          t.$http.post(Ve["a"].getApiUrlJoinPresentation(), n).then(
            function () {},
            function () {}
          );
      }
    }
    var He,
      Ke =
        ((Ne = {}),
        Object(i["a"])(Ne, Fe.ANSWER_QUIZ, Ue),
        Object(i["a"])(Ne, Fe.QUIZ_AUDIENCE, We),
        Object(i["a"])(Ne, Fe.AUDIENCE_ONLINE, Ye),
        Ne),
      $e = Ke,
      Je = { QUESTION_AND_ANSWER: "question-and-answer" },
      Ze = {
        CREATE: "create",
        VOTE: "vote",
        QUESTION_UPDATED: "question-updated",
      };
    function Xe(e, t) {
      if (t.audienceId == e.data.audience) {
        e.data.voted = !0;
        var n = JSON.parse(JSON.stringify(t.$store.state.questions));
        n.push(e.data),
          te["a"].updateDataQuestionAnswer(n, t.$store.state.tabQnaQuestion);
      } else
        t.$store.state.presentation.qnaAudienceShowAll &&
          (2 == t.$store.state.tabQnaQuestion
            ? t.$store.state.questions.unshift(e.data)
            : t.$store.state.questions.push(e.data));
    }
    function et(e, t) {
      t._updateQuestionAnswer(e.data);
    }
    function tt(e, t) {
      t._updateQuestionAnswer(e.data);
    }
    var nt =
      ((He = {}),
      Object(i["a"])(He, Ze.CREATE, Xe),
      Object(i["a"])(He, Ze.VOTE, et),
      Object(i["a"])(He, Ze.QUESTION_UPDATED, tt),
      He);
    function at(e, t) {
      var n = nt[e.action];
      n && "function" === typeof n && n(e, t);
    }
    var it,
      ot = Object(i["a"])({}, Je.QUESTION_AND_ANSWER, at),
      rt = ot,
      st = { OPENTOK: "opentok" },
      ut = { START_CALLING: "call-audience", STOP_CALLING: "stop-call" };
    function ct(e, t) {
      t.audienceId === e.data.audienceUnique &&
        ((t.$store.state.presentation.token = e.data.token),
        (t.$store.state.presentation.expiredToken = e.data.expiredToken),
        (t.$store.state.presentation.session = e.data.session),
        (t.$store.state.voiceCall = { isOpen: !0, status: "waiting-accept" }));
    }
    function dt(e, t) {
      t.$store.state.voiceCall = { isOpen: !1 };
    }
    var lt =
      ((it = {}),
      Object(i["a"])(it, ut.START_CALLING, ct),
      Object(i["a"])(it, ut.STOP_CALLING, dt),
      it);
    function pt(e, t) {
      var n = lt[e.action];
      n && "function" === typeof n && n(e, t);
    }
    var mt,
      gt = Object(i["a"])({}, st.OPENTOK, pt),
      ht = gt,
      bt = {
        CHANGE_VOTING_STEP: "change-voting-step",
        CREATE_IDEA: "create-idea",
        VOTE_IDEA: "vote-idea",
        REMOVE_IDEA: "remove-idea",
      };
    function vt(e, t) {
      var n = t.$store.getters.activeActivity;
      t.presentation.audiencePacing ||
        ((n.votingStep = e.data.votingStep),
        t.$store.dispatch("updateSlide", t.$store.getters.activeActivity),
        A["a"].$emit("update-voting-step", e.data.votingStep),
        "result" === e.data.votingStep && document.body.scrollIntoView());
    }
    function ft(e, t) {
      var n = t.$store.getters.activeActivity;
      (n.ideasCount = e.data.ideasCount),
        A["a"].$emit("create-idea", e.data),
        t.$store.dispatch("updateSlide", t.$store.getters.activeActivity);
    }
    function wt(e) {
      A["a"].$emit("vote-idea", e.data);
    }
    function kt(e) {
      A["a"].$emit("remove-idea", e.data);
    }
    var yt =
        ((mt = {}),
        Object(i["a"])(mt, bt.CHANGE_VOTING_STEP, vt),
        Object(i["a"])(mt, bt.CREATE_IDEA, ft),
        Object(i["a"])(mt, bt.VOTE_IDEA, wt),
        Object(i["a"])(mt, bt.REMOVE_IDEA, kt),
        mt),
      St = yt;
    n.d(t, "a", function () {
      return _t;
    });
    var At = Object(a["a"])({}, u, y, X, $e, Le, rt, ht, St),
      _t = function (e) {
        return At[e];
      };
  },
  6478: function (e) {
    e.exports = {
      context: "target",
      mandatoryFieldError: "Das Feld ist obligatorisch.",
      joinNow: "Jetzt beitreten",
      disconnectError:
        "Beim Herstellen der Verbindung zum Server ist ein Problem aufgetreten. Bitte versuchen Sie es erneut!",
      playAudioNow: "Bitte spielen Sie jetzt die Audiospur ab",
      startTheConversation: "Starten Sie das Gespräch!",
      noChatMessagesYet: "Es sind noch keine Chatnachrichten vorhanden.",
      typeSomethingToSayHi: "Schreiben Sie etwas, um Hallo zu sagen!",
      numberQuestionOfQuizCompleted: "Frage {msg} von {num} abgeschlossen",
      numberQuestionOfQuiz: "Frage {msg} von {num}",
      you: "Du",
      enterYourMessage: "Gib deine Nachricht ein...",
      hasLeft: "ist gegangen",
      hasJoined: "ist beigetreten",
      powerBy: "AhaSlides",
      term: "Nutzungsbedingungen",
      thankScreen: "Danke für Ihre Teilnahme!",
      exitAndVote:
        "Beenden Sie die Präsentation und stimmen über eine andere ab",
      tryingReconnect: "Der Versuch, die Verbindung wiederherzustellen ...",
      establishConnection:
        "Es konnte keine stabile Verbindung hergestellt werden. Bitte versuchen Sie diese Seite neu zu laden.",
      reloadTextLink: "Neu laden",
      ignoreButton: "Ignorieren",
      noneOptionsCorrect: "Keine der Optionen ist richtig!",
      clickToSeeFullSize:
        "Klicken Sie auf jedes Bild, um es in voller Größe zu sehen.",
      multipleChoiceInstruction: "Maximale Auswahl",
      options: "optionen",
      quizYouMustPickAll: "Sie müssen alle richtigen Antworten auswählen.",
      mustNotPickIncorrectAnswer:
        "Wähle so viele richtige Antworten wie möglich, Sie dürfen jedoch keine Falsche Antwort auswählen.",
      youCanPickAnyCorrectAnswer:
        "Sie können irgendeine der richtigen Antworten auswählen.",
      choicesLeft: "optionen übrig",
      alreadyAnswer: "Sie haben diese Frage bereits beantwortet.",
      waitingScreen:
        "Bitte warten Sie, bis der Moderator die nächste Folie anzeigt.",
      stopSubmission: "Bitte warten Sie, bis der Moderator die Folien startet.",
      submissionClosedButton: "Einreichung geschlossen",
      openendedSubmissionFail:
        "Einreichung fehlgeschlagen. Bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
      closeAvatar: "Schließen",
      qnaQuestionPlaceholder: "Geben Sie ihre Frage hier ein...",
      submit: "Abschicken",
      topQuestionsAudience: "Top",
      newQuestionsAudience: "Neu",
      answeredQuestions: "Beantwortete",
      myQuestions: "Meine Fragen",
      enterYourNameWarning: "Bitte geben Sie Ihren Namen ein.",
      enterQuestionWarning: "Bitte geben Sie Ihre Frage ein.",
      enterYourNameOptional: "Dein Name.. (optional)",
      yourNamePlaceholder: "Dein Name.. (erforderlich)",
      askQuestionButton: "Stelle eine Frage",
      waitAndSeeHowYouDid: "Warten wir ab, wie es dir ergangen ist ...",
      dragAndDropStatements:
        "Ziehen Sie die Anweisungen per Drag & Drop, um eine Bestellung zu erstellen",
      seeCorrectAnswer: "Siehe die richtige Antwort",
      seeYourAnswer: "Siehe deine Antwort",
      shareThisOn: "Teile dies auf",
      congratulations: "Herzlichen Glückwunsch",
      quizCompleted: "Quiz Abgeschlossen!",
      amazing: "Großartig!",
      greatWork: "Gute Arbeit!",
      goodJob: "Gut erledigt!",
      betterLuckNextTime: "Viel Glück beim nächsten Mal!",
      thisQuizWasMadeBy: "Dieses Quiz wurde erstellt von {name}",
      yourFinalScoreIs: "Deine Punktzahl ist {msg}.",
      points: "Punkte",
      haventAnsweredAnyQuiz: "Du hast keine Quizfrage beantwortet.",
      youAreInPlace: "Du befindest dich auf Platz {msg} von {msg1} Spielern",
      yourTeamScoreIs: "Ihre Teamwertung ist {msg}",
      teamHasntAnsweredAnyQuiz:
        "Ihr Team hat noch keine Quizfrage beantwortet.",
      yourTeamInPlaceTeams:
        "Ihr Team befindet sich an der {msg} Stelle von {num} Teams.",
      youFinishedInThe: "Du bist unter den",
      topPercentage: "besten {number}%",
      ofAllPlayers: "aller Spieler",
      yourTeamFinishedInThe: "Ihr Team belegte den",
      ofAllTeams: "aller Teams",
      dontForgetToShowSupport: "Unterstütze uns, indem du das Quiz teilst!",
      correctAnswerTitle: "Korrekt Antwort",
      noCorrectAnswer: "Es gibt keine richtige Antwort.",
      alsoAccepted: "Auch akzeptiert",
      wrongAnswer: "Falsche Antwort!",
      timesUp: "Die Zeit ist um!",
      correctAnswer: "Richtig!",
      partiallyCorrect: "Teilweise richtig",
      submitted: "Eingereicht",
      finishButton: "Fertigstellen",
      nextButton: "Nächster",
      youPickedCorrectAnswers:
        "Sie haben {msg} aus {num} richtigen Antworten ausgewählt.",
      youMissedCorrectAnswer: "Sie haben {msg} richtige Antwort verpasst.",
      youMissedCorrectAnswers: "Sie haben {msg} richtige Antworten verpasst.",
      runOutOfTime: "Oh nein, dir ist die Zeit ausgegangen.",
      youHaveWonPoint: "Du hast {msg} Punkte für diese Frage erhalten",
      youHaveWonPoints: "Du hast {msg} Punkte für diese Frage erhalten",
      youScoredPointsForYourTeam:
        "Sie haben {msg} Punkte für Ihr Team erzielt.",
      youScoredPoints: "Sie haben {msg} Punkte erzielt.",
      yourTeamWonPointTotal:
        "Insgesamt für diese Frage, Ihr Team hat {msg} Punkt gewonnen",
      noOneAnsweredInTime:
        "Niemand sonst in Ihrem Team beantwortet in der Zeit.",
      youHaveWonPointForTeam: "Sie haben {msg} Punkt für Ihr Team gewonnen",
      youHaveWonPointsForTeam: "Sie haben {msg} Punkte für Ihr Team gewonnen",
      hasAlreadyAnswered: "{msg} hat bereits geantwortet.",
      youWereFastestInTeam: "Du warst der Schnellste in deinem Team.",
      yourAnswerNotCount: "Ihre Antwort nicht zählen.",
      yourTeamWonPoint: "Ihr Team hat {msg} Punkt gewonnen.",
      yourTeamWonPoints: "Ihr Team hat {msg} Punkte gewonnen.",
      yourTeamWonPointsTotal:
        "Insgesamt für diese Frage, Ihr Team hat {msg} Punkte gewonnen",
      youScoredPointForYourTeam: "Sie haben für Ihr Team {msg} Punkte erzielt.",
      youScoredPoint: "Sie haben {msg} Punkt erzielt.",
      youAnsweredIn: "Du hast in {msg} geantwortet (Es sind noch {num} übrig)!",
      typeYourAnswer: "Gib deine Antwort ein...",
      enterYourName: "Gib deinen Namen ein",
      pickYourTeam: "Wählen Sie Ihr Team:",
      teamIsFull: "Dieses Team ist voll, bitte ein anderes wählen.",
      chooseEmoji: "Wählen Sie ein Emoji als Avatar",
      changeButton: "Avatar ändern...",
      joinTheGameButton: "Nehmen Sie am Spiel teil!",
      "Post to {msg}": "Nachricht an {msg}",
      "I just finished a super fun quiz on AhaSlides":
        "Ich habe gerade ein super lustiges Quiz auf AhaSlides beendet",
      Skip: "Überspringen",
      audiencePacingWaitingScreen: "Sie haben diese Frage bereits beantwortet.",
      seeSlideOnPresenterScreen:
        "Bitte sehen Sie sich die Folien auf dem Bildschirm des Präsentators an.",
      blankSlide:
        "Es gibt noch keinen Inhalt auf dieser Folie. Bitte warten Sie, bis der Moderator etwas hinzugefügt hat.",
      voteLeft: "Sie haben noch {msg} Stimme übrig.",
      votesLeft: "Sie haben noch {msg} Stimmen.",
      votingClosed: "Abstimmung geschlossen.",
      allTab: "Alle",
      mySubmissionTab: "Meine Bewerbungen",
      votedTab: "Abgestimmt",
      canUnvote: "Sie können Ihre Stimme widerrufen, wenn Sie möchten.",
      seeResult: "Ergebnis ansehen",
      noResultYet: "Noch keine Ergebnisse",
      players: "{msg} Spieler",
      yourTotalScoreIs: "Ihre Gesamtpunktzahl beträgt {msg}",
      team: "Team",
      teams: "Teams",
      "Show Individual Ranking": "Individuelles Ranking anzeigen",
      "Show Team Ranking": "Team-Rangliste anzeigen",
      writeYourIdea: "Schreiben Sie hier...",
      uploadImage: "Bild hochladen",
      changeImage: "Bild ändern",
      remove: "Entfernen",
      youHaveMade: "Du hast",
      submissions: "Einreichungen",
      maxExceededCannotSubmit:
        "Maximale limiet overschreden. U kunt niet meer indienen.",
      submitMultipleTimes: "Sie können mehrere Male einreichen.",
      "open-endedInstructionSubmission":
        "Danke für Ihren Beitrag! Sie können einen anderen einreichen, wenn Sie möchten.",
      youCanSubmitOnce: "U kunt één keer inleveren.",
      eachCanOnlySubmitOnce: "Elke deelnemer kan slechts één keer deelnemen.",
      startVoting: "Abstimmen starten",
      nextSlideButton: "Nächste Folie",
      invalidEmail: "Ungültige E-Mail.",
      getReady: "Bist du bereit?",
      youAreIn: "Du bist in {msg}",
      changeTeam: "team wechseln",
      questionWillStartSoon: "Das Quiz beginnt gleich.",
      fasterGetMorePointsRule:
        "Je schneller Sie bei dieser Frage antworten, desto mehr Punkte erhalten sie.",
      correctAnswerGetMaxPointTitle:
        "Antworten Sie bitte, bevor die Zeit abläuft.",
      correctAnswerGetMaxPointDetail:
        "(Keine Bonuspunkte für schnellere Antworten)",
      pointShortcut: "P",
      quizIsNotOpen:
        "Das Quiz ist noch nicht eröffnet. Bitte warten Sie, bis der Moderator es startet.",
      slideQRCodeAudience:
        "Du hast den QR-Code erfolgreich eingescannt. Den untenstehenden QR-Code kannst Du gerne mit Kontakten teilen, die ebenfalls an der Präsentation teilnehmen sollen.",
      resultsAreIn: "Die Ergebnisse sind in…",
      theWheelSpinning:
        "Das Rad dreht sich. Bitte schauen Sie auf den Bildschirm des Präsentators.",
      waitToSpinTheWheel: "Warten Sie, bis der Moderator das Rad dreht!",
      enterWordPlaceholder: "Geben Sie ein Wort ein…",
      addSpecialCharacter: "Bitte keine Sonderzeichen verwenden",
      answerWithSpace:
        "Antworten mit Leerzeichen werden als ein Wort betrachtet.",
      errorWordCloudWhenLeaveBlank: "Bitte geben Sie Ihr Wort ein.",
      watchVideo:
        "Bitte sehen Sie sich das Video auf dem Bildschirm des Moderators an.",
      outOfQuestionsYourTeam: "Aus {number} von Fragen, Ihr Team",
      gotCorrectRate: "{number} richtig beantwortet",
      outOfQuestionsYou: "Von {number} Fragen hast du",
      wow: "Wow!",
      whatAPerformance: "Was für eine Leistung!",
      nicelyDone: "Schön gemacht!",
      toughQuizRight: "Ein schwieriges Quiz, oder?",
      seconds: "Sekunden",
      minutes: "Protokoll",
      minute: "Minute",
      popupNextSlide: "Der Moderator hat die Folie gewechselt.",
      goToSlideButton: "Gehen Sie zur Folie",
      cancelButton: "Abbrechen",
      skipButton: "Zur nächsten Folie springen",
      "Match with...": "Passt zu...",
      presentationIsNotOpen:
        "Diese Präsentation befindet sich im privaten Modus. Sobald der Vortragende in den öffentlichen Modus gewechselt hat, können Sie seine Folien sehen und mit ihnen interagieren.",
      "Or try to": "Oder versuchen Sie, diese Seite",
      "Enter your authentication code":
        "Geben Sie Ihren Authentifizierungscode ein",
      "Let me in": "Lass mich rein",
      "Make a free quiz": "Erstellen Sie ein kostenloses Quiz",
      "Enjoy this presentation?": "Gefällt Ihnen diese Präsentation?",
      "Get slides": "Holen Sie sich die Folien",
      "Presenter is calling…": "Moderator ruft an…",
      Accept: "Annehmen",
      Decline: "Ablehnen",
      "Leave feedback...": "Hinterlasse Kommentar. Es ist privat...",
      "Could be better": "Könnte besser sein",
      "Not bad": "Nicht schlecht",
      Good: "Gut",
      "Can't wait for the next": "Kann das nächste kaum erwarten",
      "Feedback sent!": "Feedback gesendet!",
      "Something went wrong, please try again.":
        "Etwas ist schief gelaufen. Bitte versuche es erneut.",
      "How's the presentation?": "Wie ist die Präsentation?",
      Send: "Schicken",
      Tutorials: "Tutorials",
      teamEarnsPointTotal: "Dein Team hat insgesamt <b>{point}p</b> verdient.",
      teamEarnsPointAverage:
        "Dein Team verdient durchschnittlich <b>{point}p</b>.",
      teamEarnsPointFastest:
        "Dein Team verdient <b>{point}p</b> dank <b>{audienceName}</b>.",
      teamFastestAnswerIncorrect:
        "Die schnellste Antwort war falsch, dein Team verdient <b>{point}p</b>.",
      teamFastestAnswerGetPoint:
        "Du warst der Schnellste, dein Team verdient <b>{point}p</b>.",
      "💪 Keep up the great work!": "💪 Mach weiter so, super Arbeit!",
      "Lose streak!": "Erfolgsserie gerissen!",
      Correct: "Richtig!",
      "Double streak!": "Toll!",
      "Triple streak!": "Beeindruckend!",
      "Four Streak!": "Super!",
      "Awesome!": "Tolle Leistung!",
      "Keep going!": "Fantastisch!",
      "Amazing!": "Großartig!",
      "Good job!": "Hervorragend!",
      Incorrect: "Leider falsch",
      my_answers: "Meine Antworten",
      view_answers: "Antworten anzeigen",
      final_leaderboard: "Endgültige Rangliste",
      final_answers_stat:
        "Sie haben <strong>{correctAnswers} / {totalQuiz} richtig</strong> ({correctRate}%)",
      final_ranking: "Platzierung: <strong>{ranking}</strong>",
      your_answer: "Deine Antwort",
      review_all_questions:
        "Sie können alle Fragen hier überprüfen, wenn das Quiz beendet ist.",
      not_answer: "Sie haben keine Antwort gegeben",
      your_answer_correct: "Deine Antwort ist richtig",
      your_answer_incorrect: "Deine Antwort ist falsch",
      your_answer_partially_correct: "Deine Antwort ist teilweise richtig",
      you_missed_quiz: "Sie haben das Quiz gerade verpasst.",
      leaderboard: "Bestenliste",
      personal_no_quiz_answered: "Sie haben noch kein Quiz beantwortet",
      team_no_quiz_answered: "Ihr Team hat noch kein Quiz beantwortet",
      final_team_answers_stat:
        "Ihr Team hat <strong>{correctAnswers} / {totalQuiz} Fragen richtig</strong> beantwortet ({correctRate}%)",
      all_slides: "Alle Folien",
      review_slides: "Folien überprüfen",
      view_all_slides_answers: "Alle Folien & Antworten anzeigen",
      review_all_slides_and_questions:
        "Sie können alle Folien und Fragen überprüfen, wenn die Präsentation endet.",
      no_answer: "Keine Antwort",
      sign_in_to_save_presentation:
        "Melden Sie sich an, um diese Präsentation zu speichern",
      continue_with_google: "Mit Google weitermachen",
      present_with_ahaslides: "Präsentieren mit AhaSlides",
      view_terms: "Bedingungen anzeigen",
      log_out: "Abmelden",
      attended: "Teilgenommen",
      your_future_presentations_shown_here:
        "Ihre zukünftigen Präsentationen werden hier angezeigt",
      join_a_presentation: "An einer Präsentation teilnehmen",
      presentation_details: "Präsentationsdetails",
      "Join the game to continue.": "Tritt dem Spiel bei, um fortzufahren.",
      "Leaving the presentation": "Verlassen der Präsentation",
      "This link will take you to a page that is not part of the presentation":
        "Dieser Link führt Sie zu einer Seite, die nicht Teil der Präsentation ist",
      thank_for_participation: "Danke für Ihre Teilnahme! ❤️",
      give_feedback: "Feedback geben",
      get_ahaslides_free: "AhaSlides kostenlos erhalten",
      exclusive_offer_hr_tech:
        "Exklusives Angebot für das HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ AhaSlides Plus kostenlos erhalten ✨",
      ask_presenter_to_view_slides:
        "Bitte bitten Sie Ihren Präsentator um die Erlaubnis, die Folien anzuzeigen.",
      login: "Anmelden",
      sign_up: "Registrieren",
      or: "oder",
      "Calculating your ranking…": "Dein Ranking wird berechnet…",
      categorise_unassined_option: "Gesamtzahl der nicht zugewiesenen Optionen",
      Reload: "Neu laden",
      "No internet. Retrying...": "Kein Internet. Erneuter Versuch...",
      enjoyThisPresentationFooterBanner:
        "Gefällt Ihnen diese Präsentation? Binden Sie Ihr eigenes Publikum kostenlos auf AhaSlides ein.",
      letsGoFooterBanner: "Lass uns gehen",
      getStartedWithAhaSlides: "Los geht's mit AhaSlides",
      makeFreeQuiz: "Erstelle dein eigenes kostenloses Quiz",
      audienceSeeContent:
        "Bitte schauen Sie auf den Bildschirm des Präsentators.",
    };
  },
  "694a": function (e, t) {
    e.exports = {
      GOOGLE_SIGNIN_FROM: "googleSigninFrom",
      GOOGLE_SIGNIN_SOURCE: "googleSigninSource",
      GOOGLE_SIGNIN_REDIRECT: "googleSigninRedirect",
    };
  },
  "6c23": function (e, t, n) {
    "use strict";
    var a = n("cebc"),
      i = n("c1df"),
      o = n.n(i),
      r = n("8e27"),
      s = n.n(r),
      u = n("db49"),
      c = n("0c12"),
      d = n("069e"),
      l = n("02c5"),
      p = (n("d92a"), n("d225")),
      m = n("b0b4"),
      g = n("308d"),
      h = n("6bb5"),
      b = n("4e2b"),
      v = n("0f32"),
      f = n.n(v),
      w = n("4360"),
      k = function e(t) {
        Object(p["a"])(this, e),
          (this.socketClient = t),
          (this.$store = w["a"]);
      },
      y = k,
      S = { REACTION: "create-reaction" },
      A = (function (e) {
        function t() {
          return (
            Object(p["a"])(this, t),
            Object(g["a"])(this, Object(h["a"])(t).apply(this, arguments))
          );
        }
        return (
          Object(b["a"])(t, e),
          Object(m["a"])(t, [
            {
              key: "init",
              value: function () {
                this.listenEvents();
              },
            },
            {
              key: "listenEvents",
              value: function () {
                w["a"].getters["liveStatsV2/canSubscribeReactionEmqx"] ||
                  this.socketClient.on(
                    S.REACTION,
                    f()(this.onCreateReaction.bind(this), 300)
                  );
              },
            },
            {
              key: "onCreateReaction",
              value: function (e) {
                c["a"].$emit("reaction-animation", e);
                var t = this.$store.state.presentation;
                t.numberOfHearts < e.numberOfHearts &&
                  this.$store.dispatch("patchPresentationAction", {
                    numberOfHearts: e.numberOfHearts,
                  }),
                  t.numberOfLikes < e.numberOfLikes &&
                    this.$store.dispatch("patchPresentationAction", {
                      numberOfLikes: e.numberOfLikes,
                    }),
                  t.numberOfLaughs < e.numberOfLaughs &&
                    this.$store.dispatch("patchPresentationAction", {
                      numberOfLaughs: e.numberOfLaughs,
                    }),
                  t.numberOfSads < e.numberOfSads &&
                    this.$store.dispatch("patchPresentationAction", {
                      numberOfSads: e.numberOfSads,
                    }),
                  t.numberOfWows < e.numberOfWows &&
                    this.$store.dispatch("patchPresentationAction", {
                      numberOfWows: e.numberOfWows,
                    });
              },
            },
          ]),
          t
        );
      })(y),
      _ = A,
      T = { PATCH_PRESENTATION: "patch-presentation" },
      z = (function (e) {
        function t() {
          return (
            Object(p["a"])(this, t),
            Object(g["a"])(this, Object(h["a"])(t).apply(this, arguments))
          );
        }
        return (
          Object(b["a"])(t, e),
          Object(m["a"])(t, [
            {
              key: "init",
              value: function () {
                this.listenEvents();
              },
            },
            {
              key: "listenEvents",
              value: function () {
                this.socketClient.on(
                  T.PATCH_PRESENTATION,
                  this.onPatchPresentation.bind(this)
                );
              },
            },
            {
              key: "onPatchPresentation",
              value: function (e) {
                this.$store.dispatch("patchPresentationAction", e);
              },
            },
          ]),
          t
        );
      })(y),
      P = z,
      j =
        (n("c5f6"),
        n("20d6"),
        n("ac6a"),
        n("f3e2"),
        { PATCH_SLIDE_OPTIONS: "patch-slide-options" }),
      C = (function (e) {
        function t() {
          return (
            Object(p["a"])(this, t),
            Object(g["a"])(this, Object(h["a"])(t).apply(this, arguments))
          );
        }
        return (
          Object(b["a"])(t, e),
          Object(m["a"])(t, [
            {
              key: "init",
              value: function () {
                this.listenEvents();
              },
            },
            {
              key: "listenEvents",
              value: function () {
                this.socketClient.on(
                  j.PATCH_SLIDE_OPTIONS,
                  f()(this.handleSlideOption.bind(this), 600)
                );
              },
            },
            {
              key: "handleSlideOption",
              value: function (e) {
                var t = this.$store.getters.activeActivity;
                if (t.id === e.slideId) {
                  var n = t.SlideOptions,
                    a = 0;
                  if (
                    (n.forEach(function (t) {
                      t.votesCount || (t.votesCount = 0);
                      var n = e.slideOptions.findIndex(function (e) {
                        return e.id == t.id;
                      });
                      -1 !== n && (t.votesCount = e.slideOptions[n].votesCount),
                        (a += t.votesCount);
                    }),
                    t.showPercentage)
                  )
                    try {
                      n.forEach(function (e) {
                        e.votesCountValue = Number(
                          "".concat(
                            Math.round(
                              "".concat((e.votesCount / a) * 100, "e1")
                            ),
                            "e-1"
                          )
                        );
                      });
                    } catch (i) {
                      l["c"](i),
                        n.forEach(function (e) {
                          e.votesCountValue = e.votesCount;
                        });
                    }
                  else
                    n.forEach(function (e) {
                      e.votesCountValue = e.votesCount;
                    });
                  this.$store.dispatch("updateSlide", { SlideOptions: n });
                }
              },
            },
          ]),
          t
        );
      })(y),
      O = C;
    function E(e) {
      var t = new _(e),
        n = new P(e),
        a = new O(e);
      t.init(), n.init(), a.init();
    }
    var I = { init: E },
      R = I,
      N = n("538b"),
      x = null,
      L = function (e) {
        w["a"].state.presentation.audiencePacing ||
          e.slideActive != w["a"].getters.activeActivity.id ||
          (((e.quizStatus > w["a"].getters.activeActivity.quizStatus &&
            e.quizTimestamp[0] !=
              w["a"].getters.activeActivity.quizTimestamp[0]) ||
            (w["a"].getters.activeActivity.quizStatus ===
              d["a"].QUESTION_SCREEN &&
              e.quizTimestamp[0] <
                w["a"].getters.activeActivity.quizTimestamp[0])) &&
            (w["a"].dispatch("updateSlide", {
              quizStatus: e.quizStatus,
              quizTimestamp: e.quizTimestamp,
            }),
            setTimeout(function () {
              c["a"].$emit("recheck-progress-bar");
            }, 300)));
      },
      q = function (e) {
        w["a"].state.presentation.audiencePacing ||
          e.slideActive != w["a"].getters.activeActivity.id ||
          e.numberOfHintsShown ===
            w["a"].getters.activeActivity.numberOfHintsShown ||
          (w["a"].dispatch("updateSlide", {
            numberOfHintsShown: e.numberOfHintsShown,
            hintsShowingIndex: e.hintsShowingIndex,
          }),
          setTimeout(function () {
            c["a"].$emit("hints: update-show-hints", e);
          }, 200));
      };
    t["a"] = {
      init: function (e, t, n) {
        var a = { type: "audience", accessCode: t, audience: n };
        w["a"].state.audienceName &&
          (a.audienceName = w["a"].state.audienceName);
        try {
          var i = w["a"].state.presentation,
            r = i.planType,
            p = i.isAudienceAuthentication;
          p &&
            w["a"].state.authenticationCode &&
            ("pro-yearly" === r ||
              "pro-monthly" === r ||
              "one-time-large" === r ||
              "white-label" === r) &&
            (a.authCode = ""
              .concat(t, "-")
              .concat(w["a"].state.authenticationCode));
        } catch (m) {
          l["c"]("Error when check authenticationCode");
        }
        (x = s()(u["a"].baseUrlSocket, {
          path: "/api/socket.io-client",
          query: a,
          transports: ["websocket", "polling"],
          withCredentials: !0,
          auth: { audienceId: n },
        })),
          x.on("connect", function () {
            e(x.id),
              x.on(x.id, function (e) {
                w["a"].getters[
                  "featureToggles/canUseNewChangeSlideMechanism"
                ] || L(e),
                  q(e),
                  e.quizStatus === d["a"].RESULT_SCREEN &&
                    c["a"].$emit("quizGetResult"),
                  w["a"].getters[
                    "featureToggles/canUseNewChangeSlideMechanism"
                  ] ||
                    (w["a"].getters.activeActivity &&
                      e.slideActive != w["a"].getters.activeActivity.id &&
                      ((w["a"].state.currentDataNextSlide = null),
                      c["a"].$emit("confirmNextSlide", e.slideActive))),
                  document.body.classList.remove("hide-popup-connect-lost");
              }),
              x.io.opts.query.authCode &&
                c["a"].$emit("audience-authen-connected", {
                  authCode: x.io.opts.query.authCode,
                }),
              R.init(x),
              x.on("server_timestamp", function (e) {
                w["a"].commit("setOffsetTime", o()().utc().format("x") - e);
              }),
              (w["a"].state.socketDisconnect = !1),
              N["b"].detectSocketConnection(N["a"].GOOD);
          }),
          x.on("connect_error", function (e) {
            w["a"].commit("setWebsocketConnectionError", e.message),
              N["b"].detectSocketConnection(N["a"].ERROR);
          }),
          setInterval(function () {
            x.emit("server_timestamp");
          }, 6e4),
          x.emit("server_timestamp");
      },
      updateQuery: function (e) {
        x.disconnect(),
          (x.io.opts.query = Object(a["a"])({}, x.io.opts.query, e)),
          x.connect();
      },
      subscribe: function (e, t) {
        x.on(e, function (e) {
          return t(e);
        });
      },
      unSubscribe: function (e) {
        x && x.removeAllListeners(e);
      },
      getSocketId: function () {
        return x.id;
      },
      close: function () {
        x && x.close();
      },
      getSocket: function () {
        return x;
      },
      on: function () {
        var e;
        return (e = x).on.apply(e, arguments);
      },
      off: function () {
        var e;
        return (e = x).off.apply(e, arguments);
      },
      emit: function () {
        var e;
        return (e = x).emit.apply(e, arguments);
      },
    };
  },
  "6c5b": function (e, t, n) {
    "use strict";
    var a = n("92ad"),
      i = n("f77e"),
      o = new a["c"](i["a"]);
    t["a"] = o;
  },
  "6dab": function (e, t, n) {
    "use strict";
    var a = n("639a"),
      i = function (e) {
        try {
          return (
            "presentation" === e.type &&
            "nextSlide" === e.action &&
            "live" != e._from
          );
        } catch (t) {
          return !1;
        }
      };
    n.d(t, "a", function () {
      return o;
    });
    var o = function (e) {
      return function (t, n) {
        return i(t, n) ? null : Object(a["a"])(e)(t, n);
      };
    };
  },
  7: function (e, t) {},
  7521: function (e) {
    e.exports = {
      popupNextSlide: "Predstavljavec je spremenil prikazano vsebino.",
      goToSlideButton: "Pojdi na diapozitiv",
      cancelButton: "Prekliči",
      stopSubmission: "Prosim, počakajte na predstavljavca.",
      waitingScreen:
        "Prosimo, počakajte, da predstavljavec pokaže naslednji diapozitiv",
      thankScreen: "Hvala za vaše sodelovanje!",
      blankSlide:
        "Na tem diapozitivu še ni vsebine. Prosimo, počakajte, da predstavljavec nekaj doda.",
      submitMultipleTimes: "Oddate lahko večkrat.",
      "open-endedInstructionSubmission":
        "Hvala za vaš prispevek! Če želite, lahko oddate še enega.",
      multipleChoiceInstruction: "Izberete lahko največ",
      options: "možnosti",
      choicesLeft: "preostale izbire",
      powerBy: "AhaSlides",
      term: "Pogoji",
      submissionClosedButton: "Oddaja zaključena",
      submit: "Oddaj",
      exitAndVote: "Zapustite stran in glasujte za drugo predstavitev",
      nextSlideButton: "Naslednji diapozitiv",
      disconnectError:
        "Pri vzpostavljanju povezave s strežnikom je prišlo do napake. Prosimo, poskusite ponovno!",
      slideQRCodeAudience:
        "Uspešno ste se pridružili. Spodnjo QR-kodo lahko pokažete tudi drugim, da se pridružijo.",
      openendedSubmissionFail:
        "Oddaja neuspešna. Prosimo, preverite svojo povezavo in poskusite ponovno.",
      watchVideo: "Prosimo, glejte posnetek na predstavljavčevem zaslonu.",
      addSpecialCharacter: "Prosimo, ne dodajajte posebnih znakov",
      answerWithSpace: "Odgovori s presledki bodo šteli kot ena beseda.",
      nextButton: "Naslednji",
      skipButton: "Pojdi na naslednji diapozitiv",
      audiencePacingWaitingScreen: "Na to vprašanje ste že odgovorili.",
      enterWordPlaceholder: "Vpišite besedo..",
      errorWordCloudWhenLeaveBlank: "Prosimo, vpišite svojo besedo.",
      enterYourName: "Vpišite ime vaše ekipe",
      getReady: "Pripravite se na igro!",
      chooseEmoji: "Izberite en čustveni simbol za vaš avatar",
      changeButton: "Spremeni avatar..",
      joinTheGameButton: "Pridruži se igri!",
      fasterGetMorePointsRule:
        "To vprašanje hitre odgovore nagradi z več točkami",
      correctAnswerGetMaxPointTitle: "Odgovori pred iztekom časa",
      correctAnswerGetMaxPointDetail:
        "(Brez dodatnih točk za hitrejše odgovore)",
      quizIsNotOpen: "Kviz ni odprt. Prosimo, počakajte na predstavljavca.",
      reloadTextLink: "Ponovno naloži",
      numberQuestionOfQuiz: "Vprašanje {msg} od {num}",
      runOutOfTime: "Na žalost vam je zmanjkalo časa.",
      correctAnswer: "Pravilno!",
      youHaveWonPoint: "Osvojili ste {msg} točk za to vprašanje",
      youAnsweredIn: "Odgovorili ste v {msg} (ostane še {num})!",
      waitAndSeeHowYouDid: "Počakajmo, da izvemo, kako vam je šlo ...",
      wrongAnswer: "Napačen odgovor!",
      minute: "minuta",
      minutes: "minute",
      seconds: "sekunde",
      players: "{msg} ekip",
      timesUp: "Čas je potekel!",
      youAreInPlace: "Ste na {msg}. mestu med {msg1} igralci",
      points: "točke",
      noResultYet: "Ni še rezultata",
      pointShortcut: "p",
      youHaveWonPoints: "Osvojili ste {msg} točk za to vprašanje",
      closeAvatar: "Zapri",
      alreadyAnswer: "Na to vprašanje ste že odgovorili.",
      yourTotalScoreIs: "Vaš skupni rezultat je {msg}",
      betterLuckNextTime: "Več sreče prihodnjič!",
      clickToSeeFullSize: "Kliknite na sliko za prikaz v celotni velikosti.",
      answeredQuestions: "Odgovorjeno",
      askQuestionButton: "Postavi vprašanje",
      qnaQuestionPlaceholder: "Vpišite svoje vprašanje...",
      enterYourNameOptional: "Vaše ime.. (izbirno)",
      topQuestionsAudience: "Najboljše",
      newQuestionsAudience: "Novo",
      enterYourNameWarning: "Prosimo, vpišite ime vaše ekipe.",
      enterQuestionWarning: "Prosimo, vpišite svoje vprašanje.",
      yourNamePlaceholder: "Ime vaše ekipe ... (zahtevano)",
      finishButton: "Zaključi",
      quizYouMustPickAll: "Izbrati morate vse pravilne odgovore.",
      tryingReconnect: "Ponovno vzpostavljanje povezave...",
      ignoreButton: "Prezri",
      establishConnection:
        "Stabilne povezave ni bilo mogoče vzpostaviti. Prosimo, poskusite ponovno naložiti to stran.",
      partiallyCorrect: "Delno pravilno",
      youCanPickAnyCorrectAnswer:
        "Izberete lahko katerega koli izmed pravilnih odgovorov.",
      mustNotPickIncorrectAnswer:
        "Izberite poljubno število pravilnih odgovorov, a ne smete izbrati nepravilnega.",
      mandatoryFieldError: "To polje je obvezno.",
      typeYourAnswer: "Vpišite svoj odgovor ...",
      noCorrectAnswer: "Ni pravilnega odgovora.",
      presentationIsNotOpen:
        "Ta predstavitev je v zasebnem načinu. Ko predstavnik preklopi na javni način, si lahko ogledate njegove diapozitive in sodelujete z njimi.",
      invalidEmail: "Nepravilen e-poštni naslov.",
      pickYourTeam: "Izberite svojo regijo:",
      teamIsFull: "Ta regija je polna, prosimo, izberite drugo.",
      changeTeam: "spremeni regijo",
      youHaveWonPointForTeam: "Za svojo regijo ste osvojili {msg} točko",
      youHaveWonPointsForTeam: "Za svojo regijo ste osvojili {msg} točk",
      yourAnswerNotCount: "Vaš odgovor je neveljaven.",
      hasAlreadyAnswered: "{msg} je že odgovorilo.",
      yourTeamWonPoint: "Vaša regija je osvojila {msg} točko.",
      yourTeamWonPoints: "Vaša regija je osvojila {msg} točk.",
      noOneAnsweredInTime: "Nihče drug v vaši regiji ni odgovoril pravočasno.",
      yourTeamInPlaceTeams:
        "Vaša regija je na {msg}. mestu med {num} regijami.",
      yourTeamScoreIs: "Rezultat vaše regije je {msg}",
      yourFinalScoreIs: "Vaš končni rezultat je {msg}.",
      youAreIn: "Izbrana regija: {msg}",
      congratulations: "Čestitke",
      team: "regija",
      teams: "regije",
      "I just finished a super fun quiz on AhaSlides":
        "Ravno sem zaključil zelo zabaven kviz na AhaSlides",
      "Post to {msg}": "Objavi na {msg}",
      numberQuestionOfQuizCompleted: "Odgovorjenih je {msg} vprašanj od {num}",
      seeSlideOnPresenterScreen:
        "Prosimo, glejte diapozitive na predstavljavčevem zaslonu.",
      "Show Individual Ranking": "Pokaži ekipno uvrstitev",
      "Show Team Ranking": "Pokaži regijsko uvrstitev",
      Skip: "Preskoči",
      playAudioNow: "Prosimo, predvajajte zvočni posnetek",
      youMissedCorrectAnswer: "Zgrešili ste {msg} pravilni odgovor.",
      youMissedCorrectAnswers: "Zgrešili ste {msg} pravilnih odgovorov.",
      youPickedCorrectAnswers:
        "Izbrali ste {msg} pravilnih odgovorov od {num}.",
      youWereFastestInTeam: "Bili ste najhitrejši v vaši regiji.",
      yourTeamWonPointTotal:
        "Pri tem vprašanju je vaša regija osvojila skupno {msg} točko!",
      yourTeamWonPointsTotal:
        "Pri tem vprašanju je vaša regija osvojila skupno {msg} točk!",
      alsoAccepted: "Sprejeto tudi",
      youScoredPoints: "Zbrali ste {msg} točk.",
      youScoredPointsForYourTeam: "Za svojo ekipo ste osvojili {msg} točk.",
      youScoredPointForYourTeam: "Za svojo ekipo ste osvojili {msg} točko.",
      youScoredPoint: "Osvojili ste {msg} točk.",
      submitted: "Oddano",
      correctAnswerTitle: "Odgovor je pravilen",
      enjoyThisPresentationFooterBanner:
        "Ste uživali v tej predstavitvi? Pritegnite svoje občinstvo brezplačno na Ahaslides.",
      letsGoFooterBanner: "pojdimo",
      getStartedWithAhaSlides: "Začnite z AhaSlides",
      makeFreeQuiz: "Naredite svoj brezplačen kviz",
      waitToSpinTheWheel: "Počakajte, da voditelj zavrti kolo!",
      theWheelSpinning: "Kolo se vrti, poglejte na zaslon voditelja.",
      resultsAreIn: "Rezultati so v…",
      myQuestions: "Moja vprašanja",
      writeYourIdea: "Napišite svojo idejo ...",
      allTab: "Vse",
      mySubmissionTab: "Moja stališča",
      votedTab: "Glasoval",
      canUnvote: "Če želite, lahko odglasujete glas.",
      voteLeft: "Na voljo imate še toliko glasov: {msg}.",
      votingClosed: "Glasovanje zaprto.",
      startVoting: "Začnite glasovati",
      seeResult: "Glej rezultat",
      votesLeft: "Na voljo imate še toliko glasov: {msg}.",
      submissions: "idej",
      youCanSubmitOnce: "Môžete odoslať jedenkrát.",
      eachCanOnlySubmitOnce: "Každý účastník môže odoslať iba raz.",
      maxExceededCannotSubmit:
        "Bol prekročený maximálny limit. Už nemôžete odoslať.",
      youHaveMade: "Naredili ste",
      noneOptionsCorrect: "Nobena od možnosti ni pravilna!",
      changeImage: "Spremeni sliko",
      remove: "Odstrani",
      uploadImage: "Naloži sliko",
      joinNow: "Pridruži se zdaj",
      dragAndDropStatements: "Povlecite in spustite izjave, da naredite red",
      seeCorrectAnswer: "Glej pravilen odgovor",
      seeYourAnswer: "Poglej svoj odgovor",
      startTheConversation: "Začnite pogovor!",
      noChatMessagesYet: "Ni še nobenega klepetalnega sporočila.",
      questionWillStartSoon: "Kmalu se bo začelo vprašanje.",
      typeSomethingToSayHi: "Napiši kaj pozdravit!",
      quizCompleted: "Kviz zaključen!",
      shareThisOn: "Delite to na",
      thisQuizWasMadeBy: "Ta kviz je izdelal {name}",
      dontForgetToShowSupport: "Prosim, ne pozabite pokazati svoje podpore!",
      amazing: "Neverjetno!",
      greatWork: "Odlično delo!",
      goodJob: "Dobro opravljeno!",
      wow: "Vau!",
      whatAPerformance: "Kakšna predstava!",
      nicelyDone: "Lepo Opravljeno!",
      outOfQuestionsYou: "Od {number} vprašanj, vi",
      youFinishedInThe: "Uvrstili ste se",
      gotCorrectRate: "dobil {number} pravilnih odgovorov",
      topPercentage: "med najboljših {number} %",
      ofAllPlayers: "vseh igralcev",
      toughQuizRight: "Težak kviz, kajne?",
      outOfQuestionsYourTeam: "Med {number} vprašanj je vaša ekipa",
      yourTeamFinishedInThe: "Vaša ekipa se je uvrstila med",
      ofAllTeams: "vseh ekip",
      haventAnsweredAnyQuiz: "Nisi odgovoril na nobeno vprašanje v kvizu.",
      teamHasntAnsweredAnyQuiz:
        "Vaša ekipa ni odgovorila na nobeno vprašanje v kvizu.",
      you: "ti",
      enterYourMessage: "Vnesite svoje sporočilo...",
      hasLeft: "je odšla",
      hasJoined: "se je pridružila",
      "Match with...": "Tekma z...",
      orTryToReload:
        "Ali poskusite znova <a class='link-reload' @click='reloadPage()'>naložiti</a>",
      "Or try to": "Ali poskusite",
      audienceSeeContent: "Oglejte si zaslon predavatelja.",
      "Enjoy this presentation?": "Vam je ta predstavitev všeč?",
      "Get slides": "Pridobite diapozitive",
      "Presenter is calling…": "Voditelj kliče …",
      Accept: "Sprejmi",
      Decline: "Zavrni",
      "Enter your authentication code": "Vnesite svojo avtentifikacijsko kodo",
      "Let me in": "Spusti me noter",
      "Make a free quiz": "Ustvarite brezplačen kviz",
      "Not bad": "Ni slabo",
      Good: "Dobro",
      "Can't wait for the next": "Komaj čakam naslednjega",
      "Feedback sent!": "Povratne informacije poslane!",
      "Leave feedback...": "Pustite povratne informacije. Zasebno je ...",
      "Could be better": "Lahko bi bilo bolje",
      "Something went wrong, please try again.":
        "Nekaj je šlo narobe, poskusite znova.",
      "How's the presentation?": "Kakšna je predstavitev?",
      Send: "Pošlji",
      Tutorials: "Vadnice",
      teamEarnsPointAverage: "Vaša ekipa na povprečno <b>{point}p</b> zasluži.",
      teamEarnsPointFastest:
        "Vaša ekipa zasluži <b>{point}p</b> zahvaljujoč <b>{audienceName}</b>.",
      teamFastestAnswerIncorrect:
        "Najhitrejši odgovor je bil napačen, vaša ekipa zasluži <b>{point}p</b>.",
      teamFastestAnswerGetPoint:
        "Bil si najhitrejši, tvoja ekipa zasluži <b>{point}p</b>.",
      "💪 Keep up the great work!": "💪 Super delo, tako naprej!",
      teamEarnsPointTotal: "Vaša ekipa je v celoti zaslužila <b>{point}p</b>.",
      "Lose streak!": "Streak je prekinjen!",
      Correct: "Super!",
      "Double streak!": "Odlično!",
      "Triple streak!": "Impresivno!",
      "Four Streak!": "Fantastično!",
      "Awesome!": "Izjemen!",
      "Keep going!": "Izjemno!",
      "Amazing!": "Odlično delo!",
      "Good job!": "Prečudovito!",
      Incorrect: "Napačno",
      my_answers: "Moji odgovori",
      view_answers: "Ogled odgovorov",
      final_leaderboard: "Končna lestvica najboljših",
      final_answers_stat:
        "Imate <strong>{correctAnswers} / {totalQuiz} pravilnih</strong> ({correctRate}%)",
      final_ranking: "Uvrstitev: <strong>{ranking}</strong>",
      your_answer: "Vaš odgovor",
      review_all_questions:
        "Po koncu kviza si lahko tukaj ogledate vsa vprašanja.",
      not_answer: "Niste odgovorili",
      your_answer_correct: "Vaš odgovor je pravilen",
      your_answer_incorrect: "Vaš odgovor je napačen",
      your_answer_partially_correct: "Tvoj odgovor je delno pravilen",
      you_missed_quiz: "Ravnokar ste zamudili kviz.",
      leaderboard: "Vodilna deska",
      personal_no_quiz_answered: "Niste odgovorili na noben kviz",
      team_no_quiz_answered: "Vaša ekipa ni odgovorila na noben kviz",
      final_team_answers_stat:
        "Vaša ekipa je pravilno odgovorila na <strong>{correctAnswers} / {totalQuiz} vprašanj</strong> ({correctRate}%)",
      all_slides: "Vsi diapozitivi",
      review_slides: "Pregled diapozitivov",
      view_all_slides_answers: "Ogled vseh diapozitivov in odgovorov",
      review_all_slides_and_questions:
        "Vse diapozitive in vprašanja lahko pregledate, ko se predstavitev konča.",
      no_answer: "Ni odgovora",
      sign_in_to_save_presentation: "Prijavite se, da shranite to predstavitev",
      continue_with_google: "Nadaljujte z Googlom",
      present_with_ahaslides: "Predstavite z AhaSlides",
      view_terms: "Oglejte si pogoje",
      log_out: "Odjava",
      attended: "Udeleženo",
      your_future_presentations_shown_here:
        "Vaše prihodnje predstavitve bodo prikazane tukaj",
      join_a_presentation: "Pridružite se predstavitvi",
      presentation_details: "Podrobnosti predstavitve",
      "Leaving the presentation": "Zapuščanje predstavitve",
      "This link will take you to a page that is not part of the presentation":
        "Ta povezava vas bo pripeljala do strani, ki ni del predstavitve",
      thank_for_participation: "Hvala za vaše sodelovanje! ❤️",
      give_feedback: "Podajte povratne informacije",
      get_ahaslides_free: "Get AhaSlides brezplačno",
      exclusive_offer_hr_tech: "Ekskluzivna ponudba za HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ Pridobite AhaSlides Plus brezplačno ✨",
      ask_presenter_to_view_slides:
        "Prosite predavatelja za dovoljenje za ogled diapozitivov.",
      login: "Prijava",
      sign_up: "Registracija",
      or: "ali",
      Reload: "Osveži",
      "No internet. Retrying...": "Ni interneta. Poskus znova...",
    };
  },
  7556: function (e) {
    e.exports = {
      popupNextSlide: "Le présentateur a changé de diapositive.",
      goToSlideButton: "Aller à la diapositive",
      cancelButton: "Annuler",
      stopSubmission: "Veuillez attendre que le présentateur l'ouvre.",
      waitingScreen:
        "Veuillez attendre que le présentateur affiche la diapositive suivante.",
      thankScreen: "Merci pour votre participation!",
      blankSlide:
        "Il n'y a pas encore de contenu sur cette diapositive. Veuillez attendre que votre présentateur ajoute quelque chose.",
      submitMultipleTimes: "Vous pouvez soumettre plusieurs fois.",
      "open-endedInstructionSubmission":
        "Merci pour votre participation! Vous pouvez en soumettre un autre si vous le souhaitez.",
      multipleChoiceInstruction: "Vous pouvez choisir jusqu'à",
      options: "options",
      choicesLeft: "choix restants",
      powerBy: "AhaSlides",
      term: "Termes",
      submissionClosedButton: "Présentation fermée",
      submit: "Soumettre",
      exitAndVote: "Quitter et voter sur une autre présentation",
      nextSlideButton: "Diapositive suivante",
      disconnectError:
        "Un problème est survenu lors de la connexion au serveur. Veuillez réessayer!",
      slideQRCodeAudience:
        "Vous avez rejoint le quizz avec succès. Vous pouvez partager ce code avec d'autres personnes de votre entourage pour qu'elles puissent également y participer.",
      openendedSubmissionFail:
        "Soumission infructueuse. Veuillez vérifier votre connexion et réessayer.",
      watchVideo: "Veuillez regarder la vidéo sur l’écran du présentateur.",
      addSpecialCharacter: "Merci de ne pas ajouter de caractères spéciaux",
      answerWithSpace:
        "Les réponses avec des espaces seront considérées comme un seul mot.",
      nextButton: "Suivant",
      skipButton: "Passer à la diapositive suivante",
      audiencePacingWaitingScreen: "Vous avez déjà répondu à cette question.",
      enterWordPlaceholder: "Entrez un mot ..",
      errorWordCloudWhenLeaveBlank: "S'il vous plaît entrez votre mot.",
      enterYourName: "Votre nom",
      getReady: "Préparez-vous à jouer!",
      chooseEmoji: "Sélectionnez un emoji comme avatar",
      changeButton: "Changer d'avatar ..",
      joinTheGameButton: "Rejoignez le jeu!",
      fasterGetMorePointsRule:
        "Plus vous répondez vite, plus vous avez de points",
      correctAnswerGetMaxPointTitle: "Répondez avant la fin du chrono",
      correctAnswerGetMaxPointDetail:
        "(Pas de points bonus pour les réponses les plus rapides)",
      quizIsNotOpen:
        "Le quiz n'est pas ouvert. Veuillez attendre que le présentateur le propose.",
      reloadTextLink: "Recharger",
      numberQuestionOfQuiz: "Question {msg} sur {num}",
      runOutOfTime: "Oh non, vous avez manqué de temps.",
      correctAnswer: "Correct!",
      youHaveWonPoint: "Vous avez gagné {msg} point pour cette question",
      youAnsweredIn: "Vous avez répondu en {msg} (il reste {num})!",
      waitAndSeeHowYouDid: "Attendons de voir comment vous avez fait...",
      wrongAnswer: "Mauvaise réponse!",
      minute: "minute",
      minutes: "minutes",
      seconds: "secondes",
      players: "{msg} joueurs",
      timesUp: "Le temps est écoulé !",
      youAreInPlace: "Vous êtes à la {msg} place sur {msg1} joueurs",
      points: "points",
      noResultYet: "Aucun résultat pour le moment",
      pointShortcut: "p",
      youHaveWonPoints: "Vous avez gagné {msg} points pour cette question",
      closeAvatar: "Proche",
      alreadyAnswer: "Vous avez déjà répondu à cette question.",
      yourTotalScoreIs: "Votre score total est {msg}",
      betterLuckNextTime: "Plus de chance la prochaine fois!",
      clickToSeeFullSize:
        "Cliquez sur chaque image pour la voir en taille réelle.",
      answeredQuestions: "Répondu",
      askQuestionButton: "Poser une question",
      qnaQuestionPlaceholder: "Tapez votre question ici...",
      enterYourNameOptional: "Votre nom.. (facultatif)",
      topQuestionsAudience: "Premiers",
      newQuestionsAudience: "Nouveau",
      enterYourNameWarning: "Veuillez saisir votre nom.",
      enterQuestionWarning: "Veuillez saisir votre question.",
      yourNamePlaceholder: "Votre nom.. (obligatoire)",
      finishButton: "Terminé",
      quizYouMustPickAll: "Vous devez choisir toutes les bonnes réponses.",
      tryingReconnect: "Essayer de se reconnecter ...",
      ignoreButton: "Ignorer",
      establishConnection:
        "Impossible d'établir une connexion. Essayez de recharger cette page.",
      partiallyCorrect: "Partiellement correct",
      youCanPickAnyCorrectAnswer:
        "Vous pouvez choisir n'importe quelle des bonnes réponses.",
      mustNotPickIncorrectAnswer:
        "Choisissez autant de bonnes réponses que possible, mais vous ne devez pas choisir de réponse incorrecte.",
      mandatoryFieldError: "Ce champ est obligatoire.",
      typeYourAnswer: "Tapez votre réponse...",
      noCorrectAnswer: "Il n'y a pas de bonne réponse.",
      presentationIsNotOpen:
        "Cette présentation est en mode privé. Une fois que le présentateur est passé en mode public, vous pouvez voir et interagir avec ses diapositives.",
      invalidEmail: "Email invalide.",
      pickYourTeam: "Choisissez votre équipe:",
      teamIsFull: "Cette équipe est plein, s'il vous plaît choisir un autre.",
      changeTeam: "changer d'équipe",
      youHaveWonPointForTeam: "Vous avez gagné {msg} point pour votre équipe",
      youHaveWonPointsForTeam: "Vous avez gagné {msg} points pour votre équipe",
      yourAnswerNotCount: "Votre réponse n'a pas compté.",
      hasAlreadyAnswered: "{msg} a déjà répondu.",
      yourTeamWonPoint: "Votre équipe a gagné {msg} point.",
      yourTeamWonPoints: "Votre équipe a gagné {msg} points.",
      noOneAnsweredInTime:
        "Personne d'autre dans votre équipe a répondu à temps.",
      yourTeamInPlaceTeams:
        "Votre équipe est à la place de {msg} sur {num} équipes.",
      yourTeamScoreIs: "Le score de votre équipe est de {msg}",
      yourFinalScoreIs: "Votre score final est {msg}.",
      youAreIn: "Tu es en {msg}",
      congratulations: "Toutes nos félicitations",
      team: "équipe",
      teams: "équipes",
      "I just finished a super fun quiz on AhaSlides":
        "Je viens de terminer un quiz super amusant sur AhaSlides",
      "Post to {msg}": "Publier sur {msg}",
      numberQuestionOfQuizCompleted: "Question {msg} sur {num} complétée",
      seeSlideOnPresenterScreen:
        "Veuillez consulter les diapositives sur l’écran du présentateur.",
      "Show Individual Ranking": "Afficher le classement individuel",
      "Show Team Ranking": "Afficher le classement de l'équipe",
      Skip: "Passer",
      playAudioNow: "Veuillez lire la piste audio maintenant",
      youMissedCorrectAnswer: "Vous avez manqué {msg} la bonne réponse.",
      youMissedCorrectAnswers: "Vous avez manqué {msg} réponses correctes.",
      youPickedCorrectAnswers:
        "Vous avez choisi {msg} parmi {num} réponses correctes.",
      youWereFastestInTeam: "Vous étiez le plus rapide dans votre équipe.",
      yourTeamWonPointTotal:
        "Au total, pour cette question, votre équipe a gagné {msg} point",
      yourTeamWonPointsTotal:
        "Au total, pour cette question, votre équipe a gagné {msg} points",
      alsoAccepted: "Aussi accepté",
      youScoredPoints: "Vous avez marqué {msg} points.",
      youScoredPointsForYourTeam:
        "Vous avez marqué {msg} points pour votre équipe.",
      youScoredPointForYourTeam:
        "Vous avez marqué {msg} point pour votre équipe.",
      youScoredPoint: "Vous avez marqué {msg} point.",
      submitted: "Soumis",
      correctAnswerTitle: "Réponse correcte",
      enjoyThisPresentationFooterBanner:
        "Profitez de cette présentation? Engager votre public gratuitement sur AhaSlides.",
      letsGoFooterBanner: "Allons-y",
      getStartedWithAhaSlides: "Commencez avec AhaSlides",
      makeFreeQuiz: "Faites votre propre quiz gratuit",
      waitToSpinTheWheel: "Attendez que le présentateur fasse tourner la roue!",
      theWheelSpinning:
        "La roue est en train de tourner. Veuillez regarder l’écran du présentateur.",
      resultsAreIn: "Félicitations à…",
      myQuestions: "Mes questions",
      writeYourIdea: "Écrivez votre idée...",
      allTab: "Tous",
      mySubmissionTab: "Mes soumissions",
      votedTab: "Voté",
      canUnvote: "Vous pouvez annuler votre vote si vous le souhaitez.",
      voteLeft: "Il vous reste {msg} vote.",
      votingClosed: "Vote clos.",
      startVoting: "Commencez à voter",
      seeResult: "Voir le résultat",
      votesLeft: "Il vous reste {msg} votes.",
      submissions: "soumission(s)",
      youCanSubmitOnce: "Vous pouvez soumettre une fois.",
      eachCanOnlySubmitOnce:
        "Chaque participant ne peut soumettre qu'une seule fois",
      maxExceededCannotSubmit:
        "Limite maximale dépassée. Vous ne pouvez plus soumettre.",
      youHaveMade: "Vous avez fait",
      noneOptionsCorrect: "Aucune des options n'est correcte !",
      changeImage: "Changer l'image",
      remove: "Supprimer",
      uploadImage: "Télécharger une image",
      joinNow: "C'est parti!",
      dragAndDropStatements:
        "Faites glisser et déposez les déclarations pour mettre de l'ordre",
      seeCorrectAnswer: "Voir la réponse correcte",
      seeYourAnswer: "Voir votre réponse",
      startTheConversation: "Lancez la conversation !",
      noChatMessagesYet: "Il n'y a pas encore de message de chat.",
      questionWillStartSoon: "La question va bientôt commencer.",
      typeSomethingToSayHi: "Écrivez quelque chose pour dire bonjour!",
      quizCompleted: "Quiz Terminé!",
      shareThisOn: "Partagez ceci sur",
      thisQuizWasMadeBy: "Ce quiz a été créé par {name}",
      dontForgetToShowSupport: "N'oubliez pas de montrer votre soutien !",
      amazing: "Incroyable!",
      greatWork: "Bon travail!",
      goodJob: "Bien fait!",
      wow: "Wow!",
      whatAPerformance: "Quelle performance !",
      nicelyDone: "Bien fait!",
      outOfQuestionsYou: "Sur {number} de questions, vous avez",
      youFinishedInThe: "Vous avez terminé dans",
      gotCorrectRate: "obténu {number} de réponses correctes",
      topPercentage: "le premier {number}%",
      ofAllPlayers: "de tous les joueurs",
      toughQuizRight: "Question difficile, non?",
      outOfQuestionsYourTeam: "Sur {number} de questions, votre équipe a",
      yourTeamFinishedInThe: "Votre équipe a terminé dans le",
      ofAllTeams: "de toutes les équipes",
      haventAnsweredAnyQuiz: "Vous n'avez répondu à aucune question du quiz.",
      teamHasntAnsweredAnyQuiz:
        "Votre équipe n'a répondu à aucune question du quiz.",
      you: "Vous",
      enterYourMessage: "Entrez votre message...",
      hasLeft: "est parti(e)",
      hasJoined: "a rejoint",
      "Match with...": "Correspond avec...",
      orTryToReload:
        "Ou essayez de <a class='link-reload' @click='reloadPage()'>recharger</a>",
      "Or try to": "Ou essayez de",
      audienceSeeContent: "Veuillez regarder l'écran du présentateur.",
      "Make a free quiz": "Faire un quizz gratuit",
      "Get slides": "Obtenir les diapositives",
      "Presenter is calling…": "Le présentateur appelle…",
      Accept: "Accepter",
      Decline: "Déclin",
      "Enter your authentication code": "Entrez votre code d'authentification",
      "Enjoy this presentation?": "Vous aimez cette présentation ?",
      "Let me in": "Laisse moi entrer",
      "Not bad": "Pas mal",
      Good: "Bien",
      "Can't wait for the next": "J'attends avec impatience le prochain",
      "Feedback sent!": "Commentaires envoyés !",
      "Something went wrong, please try again.":
        "Un problème s'est produit, veuillez réessayer.",
      "Leave feedback...": "Laissez vos commentaires. C'est privé...",
      "Could be better": "Pourrait être meilleure",
      "How's the presentation?": "Comment est la présentation ?",
      Send: "Envoyer",
      Tutorials: "Tutoriels",
      teamEarnsPointFastest:
        "Votre équipe marque <b>{point}p</b> grâce à <b>{audienceName}</b>.",
      teamFastestAnswerIncorrect:
        "La réponse la plus rapide était incorrecte, votre équipe marque <b>{point}p</b>.",
      "💪 Keep up the great work!": "💪 Continuez le bon travail !",
      teamEarnsPointTotal: "Votre équipe a marqué <b>{point}p</b> au total.",
      teamEarnsPointAverage: "Votre équipe marque en moyenne <b>{point}p</b>.",
      teamFastestAnswerGetPoint:
        "Tu étais le plus rapide, ton équipe marque <b>{point}p</b>.",
      "Lose streak!": "Fin de la série!",
      Correct: "Correct.",
      "Double streak!": "Génial!",
      "Triple streak!": "Excellent!",
      "Four Streak!": "Formid.!",
      "Awesome!": "Génial !",
      "Keep going!": "Extraord.!",
      "Amazing!": "Brillant!",
      "Good job!": "Incroyable!",
      Incorrect: "Incorrect.",
      my_answers: "Mes réponses",
      view_answers: "Voir les réponses",
      final_leaderboard: "Classement final",
      final_answers_stat:
        "Vous avez <strong>{correctAnswers} / {totalQuiz} correctes</strong> ({correctRate}%)",
      final_ranking: "Rang : <strong>{ranking}</strong>",
      your_answer: "Votre réponse",
      review_all_questions:
        "Vous pouvez revoir toutes les questions ici lorsque le quiz est terminé.",
      not_answer: "Vous n'avez pas répondu",
      your_answer_correct: "Votre réponse est correcte",
      your_answer_incorrect: "Votre réponse est incorrecte",
      your_answer_partially_correct: "Votre réponse est partiellement correcte",
      you_missed_quiz: "Vous venez de manquer le quiz.",
      leaderboard: "Classement",
      personal_no_quiz_answered: "Vous n'avez répondu à aucun quiz",
      team_no_quiz_answered: "Votre équipe n'a répondu à aucun quiz",
      final_team_answers_stat:
        "Votre équipe a obtenu <strong>{correctAnswers} / {totalQuiz} bonnes réponses</strong> ({correctRate}%)",
      all_slides: "Toutes les diapositives",
      review_slides: "Revoir les diapositives",
      view_all_slides_answers: "Voir toutes les diapositives et réponses",
      review_all_slides_and_questions:
        "Vous pouvez revoir toutes les diapositives et questions lorsque la présentation se termine.",
      no_answer: "Pas de réponse",
      sign_in_to_save_presentation:
        "Connectez-vous pour enregistrer cette présentation",
      continue_with_google: "Continuer avec Google",
      present_with_ahaslides: "Présenter avec AhaSlides",
      view_terms: "Voir les conditions",
      log_out: "Déconnexion",
      attended: "Assisté",
      your_future_presentations_shown_here:
        "Vos futures présentations seront affichées ici",
      join_a_presentation: "Rejoindre une présentation",
      presentation_details: "Détails de la présentation",
      "Leaving the presentation": "Quitter la présentation",
      "This link will take you to a page that is not part of the presentation":
        "Ce lien vous conduira à une page qui ne fait pas partie de la présentation",
      thank_for_participation: "Merci pour votre participation ! ❤️",
      give_feedback: "Donner un avis",
      get_ahaslides_free: "Obtenez AhaSlides gratuitement",
      exclusive_offer_hr_tech: "Offre exclusive pour le HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ Obtenez AhaSlides Plus gratuitement ✨",
      ask_presenter_to_view_slides:
        "Veuillez demander à votre présentateur l'autorisation de voir les diapositives.",
      login: "Connexion",
      sign_up: "Inscription",
      or: "ou",
      "Calculating your ranking…": "Calcul de votre classement...",
      Reload: "Recharger",
      "No internet. Retrying...": "Pas d'internet. Nouvelle tentative...",
    };
  },
  "7c97": function (e, t, n) {
    "use strict";
    n("6762"), n("2fdb");
    var a,
      i,
      o,
      r = n("4360"),
      s = n("069e"),
      u = n("968c"),
      c = n("0c12");
    function d(e) {
      r["a"].dispatch("updateSlide", { quizStatus: e });
    }
    function l() {
      return r["a"].state.presentation.teamPlay
        ? !r["a"].state.audienceName ||
            !r["a"].state.isAudienceEmojiDisabled ||
            !r["a"].state.audienceQuizTeam
        : !r["a"].state.audienceName || !r["a"].state.isAudienceEmojiDisabled;
    }
    function p() {
      a && window.clearTimeout(a),
        i && window.clearTimeout(i),
        o && window.clearTimeout(o);
    }
    function m(e, t) {
      var n = u["a"].getValueByPresentation(e.id, "answeredSlideIds", []);
      return n.includes(t.id);
    }
    function g(e) {
      (r["a"].getters.activeActivity.quizTimestamp = [new Date().getTime()]),
        (r["a"].state.countdownTimeToAnswer = e.timeToAnswer);
    }
    function h(e, t) {
      d(s["a"].QUESTION_SCREEN),
        g(t),
        (o = window.setTimeout(function () {
          d(s["a"].RESULT_SCREEN),
            m(e, t) ||
              setTimeout(function () {
                c["a"].$emit("quizTimeout", t.id);
              }, 500);
        }, 1e3 * t.timeToAnswer + 500));
    }
    function b(e, t) {
      a = window.setTimeout(function () {
        e.enableQuizCoundown
          ? (d(s["a"].COUNTDOWN_5S_SCREEN),
            c["a"].$emit("startQuizScreenTwo"),
            (i = window.setTimeout(function () {
              h(e, t);
            }, 5e3)))
          : h(e, t);
      }, 3e3);
    }
    function v(e, t) {
      p(),
        !l() &&
          e.audiencePacing &&
          "pickAnswer" === t.type &&
          (d(s["a"].RULE_SCREEN), m(e, t) ? d(s["a"].RESULT_SCREEN) : b(e, t));
    }
    t["a"] = { playSelfPacedQuizSlide: v, clearSelfPaceTimeouts: p };
  },
  "7cde": function (e, t, n) {
    "use strict";
    var a = n("75fc"),
      i = n("63ea"),
      o = n.n(i);
    function r(e) {
      for (var t = 0, n = 0; n < e.length; n++) {
        var a = e.charCodeAt(n);
        (t = (t << 5) - t + a), (t |= 0);
      }
      return Math.abs(t);
    }
    var s = function e(t, n) {
      if (t.length <= 1) return t;
      var i = [],
        s = Object(a["a"])(t);
      "string" === typeof n && (n = r(n));
      for (var u = 0; u < t.length; u++) {
        var c = n % s.length;
        i.push(s[c]), s.splice(c, 1);
      }
      while (o()(i, t)) i = e(t, n + 1);
      return i;
    };
    t["a"] = s;
  },
  8: function (e, t) {},
  "852d": function (e, t, n) {
    "use strict";
    var a = n("340e"),
      i = n.n(a);
    i.a;
  },
  "85f4": function (e, t, n) {
    "use strict";
    var a = n("f304"),
      i = n.n(a);
    i.a;
  },
  "87d0": function (e, t, n) {
    "use strict";
    var a = n("0327"),
      i = n.n(a);
    i.a;
  },
  "8cc3": function (e) {
    e.exports = {
      popupNextSlide: "De presentator heeft de slide veranderd.",
      goToSlideButton: "Ga naar slide",
      cancelButton: "Annuleren",
      stopSubmission: "Wacht op de presentator om te openen.",
      waitingScreen:
        "Wacht op de presentator om naar de volgende slide te gaan.",
      thankScreen: "Dank voor je deelname!",
      blankSlide:
        "Er staat nog niets op deze slide. Wacht op de presentator om iets toe te voegen.",
      submitMultipleTimes: "Je kunt meerdere antwoorden doorgeven.",
      "open-endedInstructionSubmission":
        "Dank voor je input! Je kunt nog een antwoord doorgeven als je wilt.",
      multipleChoiceInstruction: "Je mag kiezen tot",
      options: "opties",
      choicesLeft: "keuzes over",
      powerBy: "AhaSlides",
      term: "Voorwaarden",
      submissionClosedButton: "Je kunt niet meer antwoorden",
      submit: "Antwoord",
      exitAndVote: "Sluit en stem op een andere presentatie",
      nextSlideButton: "Volgende slide",
      disconnectError:
        "Er was een probleem met het verbinden met de server. Probeer het opnieuw!",
      slideQRCodeAudience:
        "Je doet nu mee met de quiz. Je kunt de QR code hieronder door anderen laten scannen, zodat ze ook mee kunnen doen.",
      openendedSubmissionFail:
        "Het is niet gelukt om deel te nemen. Check je verbinding en probeer het opnieuw.",
      watchVideo: "Bekijk de video op het scherm van de presentator.",
      addSpecialCharacter: "Je kunt geen speciale tekens gebruiken",
      answerWithSpace: "Antwoorden met spaties worden gezien als één woord.",
      nextButton: "Volgende",
      skipButton: "Ga naar de volgende slide",
      audiencePacingWaitingScreen: "Je hebt deze vraag al beantwoord.",
      enterWordPlaceholder: "Vul een woord in..",
      errorWordCloudWhenLeaveBlank: "Vul jouw woord in.",
      enterYourName: "Vul hier je naam in",
      getReady: "Maak je klaar om te starten!",
      chooseEmoji: "Kies je persoonlijke emoji",
      changeButton: "Verander avatar..",
      joinTheGameButton: "Doe mee!",
      fasterGetMorePointsRule:
        "Voor deze vraag geldt: hoe sneller je antwoordt, hoe meer punten je krijgt",
      correctAnswerGetMaxPointTitle: "Vul je antwoord in, voor de tijd op is",
      correctAnswerGetMaxPointDetail:
        "(Geen bonuspunten voor snellere antwoorden)",
      quizIsNotOpen:
        "The quiz is nog niet begonnen. Wacht tot dat de presentator de quiz start.",
      reloadTextLink: "Opnieuw laden",
      numberQuestionOfQuiz: "Vraag {msg} van {num}",
      runOutOfTime: "Jammer, de tijd is om.",
      correctAnswer: "Correct!",
      youHaveWonPoint: "Je hebt {msg} punten voor deze vraag gewonnen",
      youAnsweredIn: "Je hebt geantwoord in {msg} ({num} over)!",
      waitAndSeeHowYouDid: "Laten we gaan kijken hoe je het hebt gedaan…",
      wrongAnswer: "Verkeerde antwoord!",
      minute: "minuut",
      minutes: "minuten",
      seconds: "seconden",
      players: "{msg} spelers",
      timesUp: "De tijd is om!",
      youAreInPlace: "Je staat op de {msg} plaats van {msg1} spelers",
      points: "punten",
      noResultYet: "Nog geen resultaten",
      pointShortcut: "p",
      youHaveWonPoints: "Je hebt {msg} punten gewonnen voor deze vraag",
      closeAvatar: "Sluiten",
      alreadyAnswer: "Je hebt deze vraag al beantwoord.",
      yourTotalScoreIs: "Jouw totale score is {msg}",
      betterLuckNextTime: "Volgende keer meer geluk!",
      clickToSeeFullSize: "Klik op een afbeelding om te vergroten.",
      answeredQuestions: "Beantwoord",
      askQuestionButton: "Een vraag stellen",
      qnaQuestionPlaceholder: "Typ je vraag hier...",
      enterYourNameOptional: "Uw naam.. (optioneel)",
      topQuestionsAudience: "Top",
      newQuestionsAudience: "Nieuwe",
      enterYourNameWarning: "Voer je naam in.",
      enterQuestionWarning: "Voer uw vraag in.",
      yourNamePlaceholder: "Uw naam.. (verplicht)",
      finishButton: "Afronden",
      quizYouMustPickAll: "Je moet alle juiste antwoorden kiezen.",
      tryingReconnect: "Probeer opnieuw verbinding te maken ...",
      ignoreButton: "Negeren",
      establishConnection:
        "Kan geen stabiele verbinding tot stand brengen. Probeer deze pagina opnieuw te laden.",
      partiallyCorrect: "Gedeeltelijk juist",
      youCanPickAnyCorrectAnswer:
        "U kunt een van ieder juiste antwoorden kiezen.",
      mustNotPickIncorrectAnswer:
        "Kies zoveel juiste antwoorden als je kunt, maar u mag geen onjuist antwoord kiezen.",
      mandatoryFieldError: "Dit veld is verplicht.",
      typeYourAnswer: "Typ uw antwoord...",
      noCorrectAnswer: "Er is geen juist antwoord.",
      presentationIsNotOpen:
        "Deze presentatie is in privé-modus. Zodra de presentator naar de publieke modus is overgeschakeld, kunt u zijn dia's zien en er interactie mee hebben.",
      invalidEmail: "Ongeldig e-mail.",
      pickYourTeam: "Kies uw team:",
      teamIsFull: "Dit team is vol, dan kunt u kies een ander.",
      changeTeam: "van Team wisselen",
      youHaveWonPointForTeam: "Je hebt {msg} punt gewonnen voor je team",
      youHaveWonPointsForTeam: "Je hebt {msg} punten gewonnen voor je team",
      yourAnswerNotCount: "Uw antwoord niet te tellen.",
      hasAlreadyAnswered: "{msg} heeft al geantwoord.",
      yourTeamWonPoint: "Uw team heeft {msg} punt gewonnen.",
      yourTeamWonPoints: "Uw team heeft {msg} punten gewonnen.",
      noOneAnsweredInTime: "Niemand anders in uw team antwoordde op tijd.",
      yourTeamInPlaceTeams: "Uw team zit op de {msg} plaats uit {num} teams.",
      yourTeamScoreIs: "Je teamscore is {msg}",
      yourFinalScoreIs: "Je uiteindelijke score is {msg}.",
      youAreIn: "Je bent in {msg}",
      congratulations: "Gefeliciteerd",
      team: "team",
      teams: "teams",
      "I just finished a super fun quiz on AhaSlides":
        "Ik heb net een superleuke quiz op AhaSlides voltooid",
      "Post to {msg}": "Posten op {msg}",
      numberQuestionOfQuizCompleted: "Vraag {msg} van {num} afgerond",
      seeSlideOnPresenterScreen:
        "Bekijk de dia's op het scherm van de presentator.",
      "Show Individual Ranking": "Toon individuele ranglijst",
      "Show Team Ranking": "Toon teamrangschikking",
      Skip: "Overspringen",
      playAudioNow: "Speel de audiotrack nu af",
      youMissedCorrectAnswer: "Je hebt {msg} juist antwoord gemist.",
      youMissedCorrectAnswers: "Je hebt {msg} juiste antwoorden gemist.",
      youPickedCorrectAnswers:
        "U heeft {msg} uit {aantal} juiste antwoorden gekozen.",
      youWereFastestInTeam: "Je was de snelste in uw team.",
      yourTeamWonPointTotal:
        "In totaal voor deze vraag, uw team heeft {msg} punt gewonnen",
      yourTeamWonPointsTotal:
        "In totaal voor deze vraag, uw team heeft {msg} punten gewonnen",
      alsoAccepted: "Ook geaccepteerd",
      youScoredPoints: "Je hebt {msg} punten gescoord.",
      youScoredPointsForYourTeam: "Je hebt {msg} punten gescoord voor je team.",
      youScoredPointForYourTeam: "Je hebt {msg} punt gescoord voor je team.",
      youScoredPoint: "Je hebt {msg} punt gescoord.",
      submitted: "Ingediend",
      correctAnswerTitle: "Juist antwoord",
      enjoyThisPresentationFooterBanner:
        "Geniet van deze presentatie? Betrek uw eigen publiek gratis op AhaSlides.",
      letsGoFooterBanner: "Laten we gaan",
      getStartedWithAhaSlides: "Aan de slag met AhaSlides",
      makeFreeQuiz: "Maak uw gratis quiz",
      waitToSpinTheWheel: "Wacht tot de presentator aan het wiel draait!",
      theWheelSpinning:
        "Het wiel draait, kijk naar het scherm van de presentator.",
      resultsAreIn: "De resultaten zijn in…",
      myQuestions: "Mijn vragen",
      writeYourIdea: "Schrijf je idee...",
      allTab: "Alle",
      mySubmissionTab: "Mijn bijdragen",
      votedTab: "gestemd",
      canUnvote: "U kunt uw stem ongedaan maken als u dat wilt.",
      voteLeft: "Je hebt nog {msg} stem over.",
      votingClosed: "Stemmen gesloten.",
      startVoting: "Begin met stemmen",
      seeResult: "Zie resultaat",
      votesLeft: "Je hebt nog {msg} stemmen over.",
      submissions: "inzendingen",
      youCanSubmitOnce: "U kunt één keer inleveren.",
      eachCanOnlySubmitOnce: "Elke deelnemer kan slechts één keer deelnemen.",
      maxExceededCannotSubmit:
        "Maximale limiet overschreden. U kunt niet meer indienen.",
      youHaveMade: "Je hebt",
      noneOptionsCorrect: "Geen van de opties is juist!",
      changeImage: "Wijziging",
      remove: "Verwijderen",
      uploadImage: "Afbeelding uploaden",
      joinNow: "Doe nu mee",
      dragAndDropStatements: "Versleep de uitspraken om orde te scheppen",
      seeCorrectAnswer: "Zie het juiste antwoord",
      seeYourAnswer: "Zie je antwoord",
      startTheConversation: "Begin het gesprek!",
      noChatMessagesYet: "Er zijn nog geen chatberichten.",
      questionWillStartSoon: "De vraag begint binnenkort.",
      typeSomethingToSayHi: "Schrijf iets om hallo te zeggen!",
      quizCompleted: "Quiz Voltooid!",
      shareThisOn: "Deel dit op",
      thisQuizWasMadeBy: "Deze quiz is gemaakt door {name}",
      dontForgetToShowSupport: "Vergeet alsjeblieft niet je steun te betuigen!",
      amazing: "Geweldig!",
      greatWork: "Geweldig werk!",
      goodJob: "Goed gedaan!",
      wow: "Wauw!",
      whatAPerformance: "Wat een optreden!",
      nicelyDone: "Keurig gedaan!",
      outOfQuestionsYou: "Van {number} vragen, jij",
      youFinishedInThe: "Je eindigde in de",
      gotCorrectRate: "heb {number} juist antwoord",
      topPercentage: "top {number}%",
      ofAllPlayers: "van alle spelers",
      toughQuizRight: "Moeilijke quiz, toch?",
      outOfQuestionsYourTeam: "Uit {number} vragen, uw team",
      yourTeamFinishedInThe: "Uw team eindigde in de",
      ofAllTeams: "van alle teams",
      haventAnsweredAnyQuiz: "Je hebt geen enkele quizvraag beantwoord.",
      teamHasntAnsweredAnyQuiz:
        "Je team heeft nog geen enkele vraag beantwoord.",
      you: "Jij",
      enterYourMessage: "Voer uw bericht in...",
      hasLeft: "is vertrokken",
      hasJoined: "is lid geworden",
      "Match with...": "Gelijk zijn met...",
      orTryToReload:
        "Of probeer te<a class='link-reload' @click='reloadPage()'>herladen</a>",
      "Or try to": "Of probeer deze pagina",
      audienceSeeContent:
        "Kijk alstublieft naar het scherm van de presentator.",
      "Let me in": "Laat me binnen",
      "Enjoy this presentation?": "Genoten van deze presentatie?",
      "Get slides": "Download de dia's",
      "Presenter is calling…": "Presentator belt…",
      Accept: "Aanvaarden",
      Decline: "Afwijzen",
      "Enter your authentication code": "Voer uw authenticatiecode in",
      "Make a free quiz": "Maak een gratis quiz",
      "Could be better": "Kan beter",
      "Something went wrong, please try again.":
        "Er is iets misgegaan, probeer het alstublieft nogmaals.",
      "Not bad": "Niet slecht",
      Good: "Goed",
      "Feedback sent!": "Feedback verzonden!",
      "Leave feedback...": "Feedback achterlaten. Het is prive...",
      "Can't wait for the next": "Kan niet wachten op de volgende",
      "How's the presentation?": "Hoe is de presentatie?",
      Send: "Stuur",
      Tutorials: "Tutorials",
      teamEarnsPointTotal: "Je team verdient in totaal <b>{point}p</b>.",
      teamEarnsPointFastest:
        "Je team verdient <b>{point}p</b> dankzij <b>{audienceName}</b>.",
      teamFastestAnswerIncorrect:
        "Het snelste antwoord was onjuist, je team verdient <b>{point}p</b>.",
      teamFastestAnswerGetPoint:
        "Jij was de snelste, je team verdient <b>{point}p</b>.",
      "💪 Keep up the great work!": "💪 Ga zo door met het geweldige werk!",
      teamEarnsPointAverage: "Je team verdient gemiddeld <b>{point}p</b>.",
      "Lose streak!": "Reeks verbroken!",
      Correct: "Geweldig!",
      "Double streak!": "Uitstekend!",
      "Triple streak!": "Uitmuntend!",
      "Four Streak!": "Voortreff.!",
      "Awesome!": "Super!",
      "Keep going!": "Fantastisch!",
      "Amazing!": "Indrukwekkend!",
      "Good job!": "Ongekend goed!",
      Incorrect: "Onjuist",
      my_answers: "Mijn antwoorden",
      view_answers: "Antwoorden bekijken",
      final_leaderboard: "Eindklassement",
      final_answers_stat:
        "Je hebt <strong>{correctAnswers} / {totalQuiz} goed</strong> ({correctRate}%)",
      final_ranking: "Rangschikking: <strong>{ranking}</strong>",
      your_answer: "Jouw antwoord",
      review_all_questions:
        "Je kunt alle vragen hier bekijken als de quiz is afgelopen.",
      not_answer: "Je hebt geen antwoord gegeven",
      your_answer_correct: "Je antwoord is correct",
      your_answer_incorrect: "Je antwoord is onjuist",
      your_answer_partially_correct: "Je antwoord is gedeeltelijk correct",
      you_missed_quiz: "Je hebt net de quiz gemist.",
      leaderboard: "Scorebord",
      personal_no_quiz_answered: "Je hebt nog geen quiz beantwoord",
      team_no_quiz_answered: "Je team heeft nog geen quiz beantwoord",
      final_team_answers_stat:
        "Je team heeft <strong>{correctAnswers} / {totalQuiz} vragen correct</strong> beantwoord ({correctRate}%)",
      all_slides: "Alle dia's",
      review_slides: "Review slides",
      view_all_slides_answers: "Bekijk alle dia's & antwoorden",
      review_all_slides_and_questions:
        "Je kunt alle dia's en vragen bekijken als de presentatie is afgelopen.",
      no_answer: "Geen antwoord",
      sign_in_to_save_presentatie: "Meld u aan om deze presentatie op te slaan",
      continue_with_google: "Doorgaan met Google",
      present_with_ahaslides: "Presenteren met AhaSlides",
      view_terms: "Voorwaarden weergeven",
      log_out: "Uitloggen",
      attended: "Bijgewoond",
      your_future_presentations_shown_here:
        "Uw toekomstige presentaties worden hier weergegeven",
      join_a_presentation: "Meedoen aan een presentatie",
      presentation_details: "Presentatiedetails",
      "Leaving the presentation": "De presentatie verlaten",
      "This link will take you to a page that is not part of the presentation":
        "Deze link brengt je naar een pagina die geen deel uitmaakt van de presentatie",
      thank_for_participation: "Bedankt voor uw deelname! ❤️",
      give_feedback: "Geef feedback",
      get_ahaslides_free: "AhaSlides gratis krijgen",
      exclusive_offer_hr_tech:
        "Exclusieve aanbieding voor HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ Gratis AhaSlides Plus ✨",
      ask_presenter_to_view_slides:
        "Vraag uw presentator om toestemming om de dia's te bekijken.",
      login: "Inloggen",
      sign_up: "Aanmelden",
      or: "of",
      Reload: "Herladen",
      "No internet. Retrying...": "Geen internet. Opnieuw proberen...",
    };
  },
  9: function (e, t) {},
  "940d": function (e, t, n) {},
  "967c": function (e, t, n) {
    "use strict";
    n("96cf");
    var a = n("3b8d"),
      i = n("2b0e"),
      o = n("db49"),
      r = null,
      s = {
        getSlideOptions: {
          method: "GET",
          url: "".concat(o["a"].baseUrl, "/api/slide-option/list/"),
        },
        voteIdea: {
          method: "POST",
          url: "".concat(
            o["a"].baseUrl,
            "/api/slide-option/{slideOptionId}/vote"
          ),
        },
        unvoteIdea: {
          method: "POST",
          url: "".concat(
            o["a"].baseUrl,
            "/api/slide-option/{slideOptionId}/unvote"
          ),
        },
      },
      u = function () {
        r = i["default"].resource("", {}, s);
      },
      c = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r.getSlideOptions(t);
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      d = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var a;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r.voteIdea({ slideOptionId: t }, n);
                  case 2:
                    return (a = e.sent), e.abrupt("return", a.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })(),
      l = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var a;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r.unvoteIdea({ slideOptionId: t }, n);
                  case 2:
                    return (a = e.sent), e.abrupt("return", a.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })();
    t["a"] = {
      initResource: u,
      getSlideOptions: c,
      voteIdea: d,
      unvoteIdea: l,
    };
  },
  "968c": function (e, t, n) {
    "use strict";
    var a = n("cebc"),
      i = n("5a0c"),
      o = n("02c5"),
      r = n("41cb"),
      s = n("4360"),
      u = {
        reactions: "r",
        audienceId: "d",
        audienceName: "e",
        audienceTeam: "m",
        audienceEmail: "l",
        audienceEmoji: "i",
        resetTimeStamp: "p",
        answeredSlideIds: "s",
        alreadyClearedDataSlides: "a",
        visited: "v",
      },
      c = function (e) {
        try {
          var t = "aha-presentation-".concat(e);
          localStorage.setItem(t, "{}");
        } catch (n) {
          o["c"](n), r["a"].app.$router.push({ query: {} });
        }
      },
      d = function (e, t, n, a) {
        try {
          "audienceId" === t &&
            s["a"].state.audienceName &&
            !s["a"].state.audienceId &&
            o["c"](new Error("Debug: cannot load audienceId"), {
              extra: {
                presentationId: e,
                property: t,
                defaultValue: n,
                data: a,
                audienceName: s["a"].state.audienceName,
              },
            });
        } catch (i) {}
      },
      l = function (e, t, n) {
        var a = u[t] || t;
        try {
          var s = "aha-presentation-".concat(e),
            l = localStorage.getItem(s) || "{}",
            p = JSON.parse(l);
          if ((d(e, t, n, p), i().diff(i["unix"](p.updatedAt), "days") >= 3))
            c(e);
          else if (p[a]) return p[a];
        } catch (g) {
          o["c"](new Error("Load data from localstorage error: ".concat(t)), {
            extra: {
              presentationId: e,
              property: t,
              defaultValue: n,
              error: g,
            },
          });
          var m = r["a"].app.$route.query[a];
          if (m) return JSON.parse(m);
        }
        return void 0 !== n ? n : null;
      },
      p = function (e, t, n) {
        var s = u[t] || t;
        try {
          var c = "aha-presentation-".concat(e),
            d = localStorage.getItem(c) || "{}",
            l = JSON.parse(d);
          (l[s] = n),
            (l.updatedAt = i().unix()),
            localStorage.setItem(c, JSON.stringify(l));
        } catch (m) {
          o["c"](m);
          var p = Object(a["a"])({}, r["a"].app.$route.query);
          (p[s] = JSON.stringify(n)), r["a"].app.$router.push({ query: p });
        }
      },
      m = function (e, t, n) {
        var a = l(e, t);
        a !== n && p(e, t, n);
      };
    t["a"] = {
      setValueByPresentation: p,
      getValueByPresentation: l,
      clearValueByPresentation: c,
      updateValueByPresentation: m,
    };
  },
  "99e0": function (e, t, n) {
    var a = {
      "./af": "db00",
      "./af.js": "db00",
      "./ar": "c171",
      "./ar-dz": "7fd6",
      "./ar-dz.js": "7fd6",
      "./ar-kw": "31c6",
      "./ar-kw.js": "31c6",
      "./ar-ly": "3d1d",
      "./ar-ly.js": "3d1d",
      "./ar-ma": "9a7f",
      "./ar-ma.js": "9a7f",
      "./ar-sa": "2f46",
      "./ar-sa.js": "2f46",
      "./ar-tn": "137f",
      "./ar-tn.js": "137f",
      "./ar.js": "c171",
      "./az": "3c37",
      "./az.js": "3c37",
      "./be": "5b31",
      "./be.js": "5b31",
      "./bg": "181f",
      "./bg.js": "181f",
      "./bm": "8ac5",
      "./bm.js": "8ac5",
      "./bn": "684e",
      "./bn-bd": "b9c3",
      "./bn-bd.js": "b9c3",
      "./bn.js": "684e",
      "./bo": "831f",
      "./bo.js": "831f",
      "./br": "7b53",
      "./br.js": "7b53",
      "./bs": "9c3c",
      "./bs.js": "9c3c",
      "./ca": "be8b",
      "./ca.js": "be8b",
      "./cs": "3528",
      "./cs.js": "3528",
      "./cv": "051c",
      "./cv.js": "051c",
      "./cy": "12c6",
      "./cy.js": "12c6",
      "./da": "d73d",
      "./da.js": "d73d",
      "./de": "cfe8",
      "./de-at": "0fa0",
      "./de-at.js": "0fa0",
      "./de-ch": "7f9c",
      "./de-ch.js": "7f9c",
      "./de.js": "cfe8",
      "./dv": "02d2",
      "./dv.js": "02d2",
      "./el": "c697",
      "./el.js": "c697",
      "./en-au": "09e2",
      "./en-au.js": "09e2",
      "./en-ca": "7206",
      "./en-ca.js": "7206",
      "./en-gb": "96d2",
      "./en-gb.js": "96d2",
      "./en-ie": "90f0",
      "./en-ie.js": "90f0",
      "./en-il": "bc01",
      "./en-il.js": "bc01",
      "./en-in": "d8b1",
      "./en-in.js": "d8b1",
      "./en-nz": "2068",
      "./en-nz.js": "2068",
      "./en-sg": "baf9",
      "./en-sg.js": "baf9",
      "./eo": "1f56",
      "./eo.js": "1f56",
      "./es": "1ad4",
      "./es-do": "978a",
      "./es-do.js": "978a",
      "./es-mx": "d686",
      "./es-mx.js": "d686",
      "./es-us": "4206",
      "./es-us.js": "4206",
      "./es.js": "1ad4",
      "./et": "0e92",
      "./et.js": "0e92",
      "./eu": "172c",
      "./eu.js": "172c",
      "./fa": "da22",
      "./fa.js": "da22",
      "./fi": "5fdd",
      "./fi.js": "5fdd",
      "./fil": "0de7",
      "./fil.js": "0de7",
      "./fo": "429d",
      "./fo.js": "429d",
      "./fr": "6b66",
      "./fr-ca": "4a25",
      "./fr-ca.js": "4a25",
      "./fr-ch": "1ad3",
      "./fr-ch.js": "1ad3",
      "./fr.js": "6b66",
      "./fy": "ca39",
      "./fy.js": "ca39",
      "./ga": "fe17",
      "./ga.js": "fe17",
      "./gd": "ff6f",
      "./gd.js": "ff6f",
      "./gl": "e310",
      "./gl.js": "e310",
      "./gom-deva": "698f",
      "./gom-deva.js": "698f",
      "./gom-latn": "3e37",
      "./gom-latn.js": "3e37",
      "./gu": "a7e0",
      "./gu.js": "a7e0",
      "./he": "8bbd",
      "./he.js": "8bbd",
      "./hi": "a2ee",
      "./hi.js": "a2ee",
      "./hr": "83b1",
      "./hr.js": "83b1",
      "./hu": "bf7a",
      "./hu.js": "bf7a",
      "./hy-am": "3365",
      "./hy-am.js": "3365",
      "./id": "a00e",
      "./id.js": "a00e",
      "./is": "5880",
      "./is.js": "5880",
      "./it": "85dd",
      "./it-ch": "fb1c",
      "./it-ch.js": "fb1c",
      "./it.js": "85dd",
      "./ja": "50b9",
      "./ja.js": "50b9",
      "./jv": "0ee4",
      "./jv.js": "0ee4",
      "./ka": "68fc",
      "./ka.js": "68fc",
      "./kk": "b976",
      "./kk.js": "b976",
      "./km": "67a4",
      "./km.js": "67a4",
      "./kn": "b55b",
      "./kn.js": "b55b",
      "./ko": "f1cb",
      "./ko.js": "f1cb",
      "./ku": "ff64",
      "./ku.js": "ff64",
      "./ky": "0408",
      "./ky.js": "0408",
      "./lb": "9717",
      "./lb.js": "9717",
      "./lo": "4e8a",
      "./lo.js": "4e8a",
      "./lt": "6621",
      "./lt.js": "6621",
      "./lv": "ae07",
      "./lv.js": "ae07",
      "./me": "228a",
      "./me.js": "228a",
      "./mi": "a003",
      "./mi.js": "a003",
      "./mk": "e3d6",
      "./mk.js": "e3d6",
      "./ml": "e28f",
      "./ml.js": "e28f",
      "./mn": "f8f7",
      "./mn.js": "f8f7",
      "./mr": "938e",
      "./mr.js": "938e",
      "./ms": "b6d3",
      "./ms-my": "e525",
      "./ms-my.js": "e525",
      "./ms.js": "b6d3",
      "./mt": "ac5c",
      "./mt.js": "ac5c",
      "./my": "65be",
      "./my.js": "65be",
      "./nb": "d950",
      "./nb.js": "d950",
      "./ne": "c72b",
      "./ne.js": "c72b",
      "./nl": "f73b",
      "./nl-be": "3e97",
      "./nl-be.js": "3e97",
      "./nl.js": "f73b",
      "./nn": "6379",
      "./nn.js": "6379",
      "./oc-lnc": "6100",
      "./oc-lnc.js": "6100",
      "./pa-in": "b338",
      "./pa-in.js": "b338",
      "./pl": "ec55",
      "./pl.js": "ec55",
      "./pt": "2b8a",
      "./pt-br": "7d0f",
      "./pt-br.js": "7d0f",
      "./pt.js": "2b8a",
      "./ro": "700b",
      "./ro.js": "700b",
      "./ru": "f18d",
      "./ru.js": "f18d",
      "./sd": "ceeb",
      "./sd.js": "ceeb",
      "./se": "50d4",
      "./se.js": "50d4",
      "./si": "0bb2",
      "./si.js": "0bb2",
      "./sk": "0d54",
      "./sk.js": "0d54",
      "./sl": "855d",
      "./sl.js": "855d",
      "./sq": "1bff",
      "./sq.js": "1bff",
      "./sr": "01b4",
      "./sr-cyrl": "a3cb",
      "./sr-cyrl.js": "a3cb",
      "./sr.js": "01b4",
      "./ss": "095e",
      "./ss.js": "095e",
      "./sv": "0b56",
      "./sv.js": "0b56",
      "./sw": "f460",
      "./sw.js": "f460",
      "./ta": "9ea5",
      "./ta.js": "9ea5",
      "./te": "cc83",
      "./te.js": "cc83",
      "./tet": "a02b",
      "./tet.js": "a02b",
      "./tg": "836d",
      "./tg.js": "836d",
      "./th": "b524",
      "./th.js": "b524",
      "./tk": "3982",
      "./tk.js": "3982",
      "./tl-ph": "3c9b",
      "./tl-ph.js": "3c9b",
      "./tlh": "6b85",
      "./tlh.js": "6b85",
      "./tr": "d744",
      "./tr.js": "d744",
      "./tzl": "a903",
      "./tzl.js": "a903",
      "./tzm": "9563",
      "./tzm-latn": "f7cf",
      "./tzm-latn.js": "f7cf",
      "./tzm.js": "9563",
      "./ug-cn": "a07b",
      "./ug-cn.js": "a07b",
      "./uk": "bea6",
      "./uk.js": "bea6",
      "./ur": "4455",
      "./ur.js": "4455",
      "./uz": "9ae5",
      "./uz-latn": "dcf5",
      "./uz-latn.js": "dcf5",
      "./uz.js": "9ae5",
      "./vi": "721d",
      "./vi.js": "721d",
      "./x-pseudo": "afd0",
      "./x-pseudo.js": "afd0",
      "./yo": "5211",
      "./yo.js": "5211",
      "./zh-cn": "5407",
      "./zh-cn.js": "5407",
      "./zh-hk": "d2f4",
      "./zh-hk.js": "d2f4",
      "./zh-mo": "5167",
      "./zh-mo.js": "5167",
      "./zh-tw": "d727",
      "./zh-tw.js": "d727",
    };
    function i(e) {
      var t = o(e);
      return n(t);
    }
    function o(e) {
      var t = a[e];
      if (!(t + 1)) {
        var n = new Error("Cannot find module '" + e + "'");
        throw ((n.code = "MODULE_NOT_FOUND"), n);
      }
      return t;
    }
    (i.keys = function () {
      return Object.keys(a);
    }),
      (i.resolve = o),
      (e.exports = i),
      (i.id = "99e0");
  },
  a24a: function (e, t, n) {},
  a4b8: function (e, t, n) {
    "use strict";
    var a = n("3b33"),
      i = n.n(a);
    i.a;
  },
  a548: function (e, t, n) {
    "use strict";
    var a = n("45bf"),
      i = n.n(a);
    i.a;
  },
  aa27: function (e, t, n) {
    "use strict";
    n("96cf");
    var a = n("3b8d"),
      i = n("2b0e"),
      o = n("db49"),
      r = null,
      s = {
        createOrUpdateAudience: {
          method: "POST",
          url: "".concat(o["a"].baseUrl, "/api/audiences/"),
        },
        getAudienceData: {
          method: "GET",
          url: "".concat(o["a"].baseUrl, "/api/audiences/audience-data"),
        },
        getAudienceDataCDN: {
          method: "GET",
          url: "".concat(
            o["a"].baseUrl,
            "/api/presentation/audience-data/{uniqueAccessCode}"
          ),
        },
      },
      u = function () {
        r = i["default"].resource("", {}, s);
      },
      c = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r.createOrUpdateAudience(t);
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      d = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r.getAudienceData(t);
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      l = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n,
              a = arguments;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = a.length > 1 && void 0 !== a[1] ? a[1] : null),
                      e.abrupt(
                        "return",
                        r.getAudienceDataCDN({ uniqueAccessCode: t }, n)
                      )
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    t["a"] = {
      initResource: u,
      createOrUpdateAudience: c,
      getAudienceData: d,
      getAudienceDataCDN: l,
    };
  },
  ac42: function (e, t, n) {},
  ae6b: function (e, t, n) {
    "use strict";
    n("96cf");
    var a = n("3b8d"),
      i = n("2b0e"),
      o = n("db49"),
      r = null,
      s = {
        createPresentationAudienceLatency: {
          method: "POST",
          url: "".concat(o["a"].baseUrl, "/api/presentation-audience-latency/"),
        },
      },
      u = function () {
        r = i["default"].resource("", {}, s);
      },
      c = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      r.createPresentationAudienceLatency(t)
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    t["a"] = { initResource: u, createPresentationAudienceLatency: c };
  },
  b499: function (e) {
    e.exports = {
      enjoyThisPresentationFooterBanner:
        "このプレゼンテーションをお楽しみください! AhaSlides上の自由のためのあなた自身の聴衆を従事する。",
      letsGoFooterBanner: "行こう",
      getStartedWithAhaSlides: "AhaSlides順番いいですか？",
      makeFreeQuiz: "あなた自身の自由なクイズを作ります",
      orTryToReload:
        "または <a class='link-reload' @click='reloadPage()'>リロードしてみる</a>",
      audienceSeeContent: "プレゼンターの画面をご覧ください。",
      mandatoryFieldError: "このフィールドは必須です。",
      joinNow: "今すぐ参加",
      disconnectError:
        "サーバーとの通信で問題が発生しました。もう一度お試しください！",
      playAudioNow: "オーディオトラックを再生してください",
      startTheConversation: "会話を始めましょう！",
      noChatMessagesYet: "チャットメッセージはまだありません。",
      typeSomethingToSayHi: "こんにちはと言う何かを書いてください！",
      numberQuestionOfQuizCompleted: "{num}問中{msg}問目が完了しました",
      numberQuestionOfQuiz: "{num}問中{msg}問目",
      you: "あなた\n OR\n お客様",
      enterYourMessage: "メッセージを入力してください...",
      hasLeft: "が退出しました",
      hasJoined: "が参加しました",
      powerBy: "AhaSlides",
      term: "利用規約",
      thankScreen: "ご参加ありがとうございました！",
      exitAndVote: "終了して別のプレゼンテーションに投票する",
      tryingReconnect: "再接続中...",
      establishConnection:
        "安定な接続を確立できませんでした。このページを再読み込みしてください。",
      reloadTextLink: "再読み込み",
      ignoreButton: "無視する",
      noneOptionsCorrect: "正しい選択肢がありません！",
      clickToSeeFullSize: "画像をクリックすると、拡大されます。",
      multipleChoiceInstruction: "最大[ ]まで選択できます",
      options: "つ\n OR\n 個\n OR\n 選択肢",
      quizYouMustPickAll: "正しいものをすべて選んでください",
      mustNotPickIncorrectAnswer:
        "できる限り正しいものを多く選んでください。誤っているものを選ばないでください。",
      youCanPickAnyCorrectAnswer: "いずれかの正しいものを選んでください。",
      choicesLeft: "後[ ]個の選択肢",
      alreadyAnswer: "すでにこの質問を答えました。",
      waitingScreen: "発表者が次のスライドを表示するまでお待ちください。",
      stopSubmission: "発表者が開くまでお待ちください。",
      submissionClosedButton: "提出期限が過ぎました",
      openendedSubmissionFail:
        "提出に失敗しました。接続を確認して、もう一度お試しください。",
      closeAvatar: "閉じる",
      qnaQuestionPlaceholder: "ここに質問を入力してください...",
      submit: "提出する",
      topQuestionsAudience: "トップ",
      newQuestionsAudience: "新しい",
      answeredQuestions: "すでに答えられた",
      myQuestions: "私の質問",
      enterYourNameWarning: "名前を入力してください。",
      enterQuestionWarning: "質問を入力してください。",
      enterYourNameOptional: "あなたの名前..（オプション）",
      yourNamePlaceholder: "あなたの名前..（必須）",
      askQuestionButton: "質問する",
      waitAndSeeHowYouDid: "結果を待ちましょう",
      dragAndDropStatements:
        "ステートメントをドラッグアンドドロップして順番を付けてください",
      seeCorrectAnswer: "答えを見る",
      seeYourAnswer: "あなたの回答を見る",
      shareThisOn: "これを共有する",
      congratulations: "おめでとう",
      quizCompleted: "クイズが完了しました！",
      amazing: "すばらしい！",
      greatWork: "見事です！",
      goodJob: "よくやった！",
      betterLuckNextTime: "また挑戦してね！",
      thisQuizWasMadeBy: "このクイズは{name}によって作成されました",
      yourFinalScoreIs: "最終スコアは{msg}です。",
      points: "点",
      haventAnsweredAnyQuiz: "クイズをまだ答えていません。",
      youAreInPlace: "あなたは{msg1}人のプレーヤーのうち{msg}番です",
      yourTeamScoreIs: "チームのスコアは{msg}です",
      teamHasntAnsweredAnyQuiz: "あなたのチームはクイズを答えていません。",
      yourTeamInPlaceTeams: "あなたのチームは、{num}組の中{msg}番です。",
      youFinishedInThe: "すべてのプレーヤーの中",
      topPercentage: "上位{number}％",
      ofAllPlayers: "で終了しました",
      yourTeamFinishedInThe: "あなたのチームはすべてのプレーヤーの中",
      ofAllTeams: "で終了しました",
      dontForgetToShowSupport: "応援することを忘れないでください",
      correctAnswerTitle: "正解",
      noCorrectAnswer: "正解はありません。",
      alsoAccepted: "該当する",
      wrongAnswer: "不正解",
      timesUp: "時間切れ！",
      correctAnswer: "正解！",
      partiallyCorrect: "部分的に正しい",
      submitted: "提出済み",
      finishButton: "終わり",
      nextButton: "次のスライド",
      youPickedCorrectAnswers:
        "あなたは{num}つの正しものから{msg}つを選びました。",
      youMissedCorrectAnswer: "あなたは{msg}つの正しい答えを選びませんでした。",
      youMissedCorrectAnswers:
        "あなたは{msg}つの正しい答えを選びませんでした。",
      runOutOfTime: "ああ、時間になりました。",
      youHaveWonPoint: "この質問で{msg}点獲得しました",
      youHaveWonPoints: "この質問で{msg}点獲得しました",
      youScoredPointsForYourTeam: "チームに{msg}ポイントを獲得しました。",
      youScoredPoints: "{msg}ポイントを獲得しました。",
      yourTeamWonPointTotal:
        "あなたのチームはこの質問で合計{msg}ポイント獲得しました",
      noOneAnsweredInTime:
        "あなたのチームの他のメンバーは時間内に答えませんでした。",
      youHaveWonPointForTeam: "チームに{msg}ポイントを獲得しました。",
      youHaveWonPointsForTeam: "チームに{msg}ポイントを獲得しました。",
      hasAlreadyAnswered: "{msg} ーはすでに答えました。",
      youWereFastestInTeam: "あなたはあなたのチームで一番早いでした。",
      yourAnswerNotCount: "あなたの答えは無効でした",
      yourTeamWonPoint: "あなたのチームは{msg}ポイントを獲得しました。",
      yourTeamWonPoints: "あなたのチームは{msg}ポイント獲得しました。",
      yourTeamWonPointsTotal:
        "あなたのチームはこの質問で合計{msg}ポイント獲得しました",
      youScoredPointForYourTeam: "チームに{msg}ポイントを獲得しました。",
      youScoredPoint: "{msg}ポイントを獲得しました。",
      youAnsweredIn: "{msg}で答えました(残り{num})!",
      typeYourAnswer: "あなたの答えを入力してください",
      enterYourName: "名前を入力してください",
      pickYourTeam: "チームを選択する：",
      teamIsFull: "このチームは定員に達しました。別のチームを選んでください。",
      chooseEmoji: "プロフィル写真として絵文字を選択してください",
      changeButton: "プロフィル写真を変更する。",
      joinTheGameButton: "ゲームに参加する！",
      "Post to {msg}": "{msg}に投稿",
      "I just finished a super fun quiz on AhaSlides":
        "AhaSlidesで超楽しいクイズを終えました",
      Skip: "スキップ",
      audiencePacingWaitingScreen: "すでにこの質問に答えています。",
      seeSlideOnPresenterScreen: "発表者の画面のスライドをご覧ください。",
      blankSlide:
        "このスライドにはまだコンテンツがありません。発表者が内容を追加するまでお待ちください。",
      voteLeft: "{msg}票が残っています。",
      votesLeft: "{msg}票が残っています。",
      votingClosed: "当j表期限が過ぎました。",
      allTab: "全て",
      mySubmissionTab: "私の提出物",
      votedTab: "投票済み",
      canUnvote: "必要な場合、投票を取り消すことができます。",
      seeResult: "結果を見る",
      noResultYet: "まだ結果がありません",
      players: "{msg}人のプレイヤー",
      yourTotalScoreIs: "合計点数は{msg}です",
      team: "チーム",
      teams: "チーム",
      "Show Individual Ranking": "個人ランキングを表示",
      "Show Team Ranking": "チームランキングを表示",
      writeYourIdea: "あなたのアイデアを入力してください...",
      uploadImage: "画像をアップロード",
      changeImage: "画像を変更する",
      remove: "削除する",
      youHaveMade: "あなたは",
      submissions: "の提出物を持っています",
      maxExceededCannotSubmit: "上限を超えました。 送信できなくなりました。",
      submitMultipleTimes: "複数回送信できます。",
      "open-endedInstructionSubmission":
        "ご意見ありがとうございました！ご希望尾場合、別の答えも提出できます。",
      youCanSubmitOnce: "一度提出できます。",
      eachCanOnlySubmitOnce: "各参加者は一度だけ提出できます。",
      startVoting: "投票を開始します",
      nextSlideButton: "次のスライド",
      invalidEmail: "メールが無効です。",
      getReady: "準備をしてください！",
      youAreIn: "あなたは {msg}にいる",
      changeTeam: "変更チーム",
      questionWillStartSoon: "質問はまもなく始まります。",
      fasterGetMorePointsRule:
        "この質問は、迅速な回答に対してより多くの点を与えます",
      correctAnswerGetMaxPointTitle: "時間がなくなる前に答えてください",
      correctAnswerGetMaxPointDetail:
        "（より速い答えのためのボーナスポイントはありません）",
      pointShortcut: "点",
      quizIsNotOpen:
        "クイズは開いていません。発表者が開始するまでお待ちください。",
      slideQRCodeAudience:
        "参加しました。周りの人にも参加できるように、以下のQRコードを表示できます。",
      resultsAreIn: "結果は…",
      theWheelSpinning:
        "ホイールが回転しています。プレゼンターの画面をご覧ください。",
      waitToSpinTheWheel: "プレゼンターがホイールを回すまでに待ってください！",
      enterWordPlaceholder: "単語を入力してください。",
      addSpecialCharacter: "記号の追加をご遠慮ください",
      answerWithSpace: "スペースを含む回答は1つの単語と見なされます。",
      errorWordCloudWhenLeaveBlank: "単語を入力してください。",
      watchVideo: "発表者の画面でビデオをご覧ください。",
      outOfQuestionsYourTeam: "{number}の質問のうち、チームは",
      gotCorrectRate: "{number}問を正解に答えました。",
      outOfQuestionsYou: "{number}の質問のうち、あなたは",
      wow: "うわー!",
      whatAPerformance: "なんというパフォーマンスでしょう!",
      nicelyDone: "よくやった！",
      toughQuizRight: "難しいクイズですね。",
      seconds: "秒",
      minutes: "分",
      minute: "分",
      popupNextSlide: "発表者がスライドを変更しました。",
      goToSlideButton: "スライドに移動",
      cancelButton: "キャンセル",
      skipButton: "次のスライドにスキップ",
      "Match with...": "と一致",
      presentationIsNotOpen:
        "このプレゼンテーションはプライベートモードにあります。発表者がパブリックモードに切り替わると、スライドの観覧と操作ができます。",
      "Or try to": "または、このページを",
      "Enter your authentication code": "認証コードを入力してください",
      "Let me in": "入らせて",
      "Make a free quiz": "無料クイズを作成する",
      "Enjoy this presentation?":
        "このプレゼンテーションをお楽しみいただけますか?",
      "Get slides": "スライドを入手する",
      "Presenter is calling…": "プレゼンターが呼び出し中です…",
      Accept: "受け入れる",
      Decline: "拒否する",
      "Leave feedback...": "フィードバックを残す。非公開です...",
      "Could be better": "もっとよくなるはず",
      "Not bad": "悪くない",
      Good: "良い",
      "Can't wait for the next": "次のを期待する",
      "Feedback sent!": "フィードバックを送信しました！",
      "Something went wrong, please try again.":
        "問題が発生しました。もう一度やり直してください。",
      "How's the presentation?": "プレゼンテーションはどうでしたか？",
      Send: "送信",
      Tutorials: "チュートリアル",
      teamEarnsPointTotal:
        "あなたのチームは合計 <b>{point}p</b> を獲得しました。",
      teamEarnsPointAverage:
        "あなたのチームは平均で <b>{point}p</b> を獲得します。",
      teamEarnsPointFastest:
        "あなたのチームは<b>{audienceName}</b>のおかげで<b>{point}p</b>を獲得します。",
      teamFastestAnswerIncorrect:
        "一番早い回答は不正解でした、あなたのチームは<b>{point}p</b>を獲得します。",
      teamFastestAnswerGetPoint:
        "あなたは一番早いでした、あなたのチームは<b>{point}p</b>を獲得します。",
      "💪 Keep up the great work!": "その調子で続けてください！",
      "Lose streak!": "連続正解終了",
      Correct: "正解",
      "Double streak!": "素晴らしい！",
      "Triple streak!": "優れた！",
      "Four Streak!": "とても良い！",
      "Awesome!": "すごくすごい！",
      "Keep going!": "とてもうまい！",
      "Amazing!": "完璧です！",
      "Good job!": "すばらしい才能！",
      Incorrect: "不正解",
      my_answers: "私の回答",
      view_answers: "回答を見る",
      final_leaderboard: "最終リーダーボード",
      final_answers_stat:
        "<strong>{correctAnswers} / {totalQuiz} 問の正解</strong> ({correctRate}%)",
      final_ranking: "順位: <strong>{ranking}</strong>",
      your_answer: "あなたの回答",
      review_all_questions:
        "クイズが終わったら、ここですべての質問を確認できます。",
      not_answer: "答えなかった",
      your_answer_correct: "あなたの答えは正解です",
      your_answer_incorrect: "あなたの答えは間違っています",
      your_answer_partially_correct: "あなたの答えは部分的に正解です",
      you_missed_quiz: "あなたはちょうどクイズを逃しました。",
      leaderboard: "リーダーボード",
      personal_no_quiz_answered: "まだクイズに答えていません",
      team_no_quiz_answered: "あなたのチームはまだクイズに答えていません",
      final_team_answers_stat:
        "あなたのチームは<strong>{correctAnswers} / {totalQuiz}問の正解</strong>でした ({correctRate}%)",
      all_slides: "すべてのスライド",
      review_slides: "スライドを見直す",
      view_all_slides_answers: "すべてのスライドと回答を表示",
      review_all_slides_and_questions:
        "プレゼンテーションが終わったら、すべてのスライドと質問を見直すことができます。",
      no_answer: "回答なし",
      sign_in_to_save_presentation:
        "このプレゼンテーションを保存するにはサインインしてください",
      continue_with_google: "Googleで続ける",
      present_with_ahaslides: "AhaSlidesでプレゼンする",
      view_terms: "利用規約を見る",
      log_out: "ログアウト",
      attended: "出席",
      your_future_presentations_shown_here:
        "今後のプレゼンテーションはここに表示されます",
      join_a_presentation: "プレゼンテーションに参加する",
      presentation_details: "プレゼンテーションの詳細",
      "Leaving the presentation": "プレゼンテーションを終了する",
      "This link will take you to a page that is not part of the presentation":
        "このリンクは、プレゼンテーションの外部のページに移動します",
      thank_for_participation: "ご参加いただきありがとうございます! ❤️",
      give_feedback: "フィードバックを送信",
      get_ahaslides_free: "AhaSlidesを無料で入手",
      exclusive_offer_hr_tech: "HR Tech Festival Asia限定オファー",
      get_ahaslides_plus_free: "✨ AhaSlides Plusを無料で入手 ✨",
      ask_presenter_to_view_slides:
        "スライド閲覧許可をプレゼンターに求めてください。",
      login: "ログイン",
      sign_up: "サインアップ",
      or: "または",
      "Calculating your ranking…": "順位を計算しています",
      categorise_unassined_option: "割り当てられていない選択肢の合計",
      Reload: "再読み込む",
      "No internet. Retrying...": "インターネット接続なし。再接続中",
    };
  },
  b751: function (e, t, n) {},
  b8d4: function (e) {
    e.exports = {
      popupNextSlide: "Presentatören har bytt bild.",
      goToSlideButton: "Gå till bild",
      cancelButton: "Avboka",
      stopSubmission: "Vänta tills presentatören öppnar den.",
      waitingScreen: "Vänta tills presentatören visar nästa bild.",
      thankScreen: "Tack för ditt deltagande!",
      blankSlide:
        "Det finns inget innehåll på denna bild ännu. Vänta tills presentatören lägger till något.",
      submitMultipleTimes: "Du kan skicka flera svar.",
      "open-endedInstructionSubmission":
        "Tack för ditt svar. Du kan skicka ett till om du önskar. ",
      multipleChoiceInstruction: "Du kan välja upp till",
      options: "alternativ",
      choicesLeft: "val kvar",
      powerBy: "AhaSlides",
      term: "Villkor",
      submissionClosedButton: "Funktionen för att skicka in är stängd.",
      submit: "Skicka in",
      exitAndVote: "Gå ur och rösta på en annan presentation",
      nextSlideButton: "Nästa bild",
      disconnectError:
        "Det uppstod ett problem med att ansluta till servern. Försök igen!",
      slideQRCodeAudience:
        "Du har anslutit nu. Du kan visa QR-koden nedan för andra i din närhet så att de också kan vara med.",
      openendedSubmissionFail:
        "Inlämningen misslyckades. Kontrollera din anslutning och försök igen.",
      watchVideo: "Se videon på presentatörens skärm.",
      addSpecialCharacter: "Vänligen lägg inte till några specialtecken",
      answerWithSpace: "Svar med mellanslag kommer att betraktas som ett ord.",
      nextButton: "Nästa bild",
      skipButton: "Hoppa till nästa bild",
      audiencePacingWaitingScreen: "Du har redan svarat på den här frågan.",
      enterWordPlaceholder: "Skriv in ett ord..",
      errorWordCloudWhenLeaveBlank: "Vänligen ange ditt ord.",
      enterYourName: "Ange ditt namn",
      getReady: "Gör dig redo att spela!",
      chooseEmoji: "Välj en emoji som din avatar",
      changeButton: "Byt avatar..",
      joinTheGameButton: "Gå med i spelet!",
      fasterGetMorePointsRule:
        "Den här frågan belönar fler poäng för snabba svar",
      correctAnswerGetMaxPointTitle: "Svara innan tiden går ut",
      correctAnswerGetMaxPointDetail: "(Inga bonuspoäng för snabbare svar)",
      quizIsNotOpen:
        "Frågesporten är inte öppen. Vänta tills presentatören startar det.",
      reloadTextLink: "Ladda om",
      numberQuestionOfQuiz: "Fråga {msg} av {num}",
      runOutOfTime: "Åh nej, du har fått ont om tid.",
      correctAnswer: "Rätt svar!",
      youHaveWonPoint: "Du har fått {msg} poäng för det här svaret",
      youAnsweredIn: "Du svarade i {msg} ({num} kvar)!",
      waitAndSeeHowYouDid: "Låt oss vänta och se hur det gick",
      wrongAnswer: "Fel svar!",
      minute: "minut",
      minutes: "minuter",
      seconds: "sekunder",
      players: "{msg} spelare",
      timesUp: "Tiden är ute!",
      youAreInPlace: "Du fick {msg} plats av {msg1} spelare",
      points: "poäng",
      noResultYet: "Inget resultat ännu",
      pointShortcut: "sid",
      youHaveWonPoints: "Du har fått {msg} poäng för den här frågan",
      closeAvatar: "Nära",
      alreadyAnswer: "Du har redan svarat på den här frågan.",
      yourTotalScoreIs: "Din totala poäng är {msg}",
      betterLuckNextTime: "Bättre lycka nästa gång!",
      clickToSeeFullSize: "Klicka på varje bild för att se den i full storlek.",
      answeredQuestions: "Svarade",
      askQuestionButton: "Ställa en fråga",
      qnaQuestionPlaceholder: "Skriv din fråga här...",
      enterYourNameOptional: "Ditt namn.. (valfritt)",
      topQuestionsAudience: "Bästa",
      newQuestionsAudience: "Ny",
      enterYourNameWarning: "Vänligen ange ditt namn.",
      enterQuestionWarning: "Ange din fråga.",
      yourNamePlaceholder: "Ditt namn.. (obligatoriskt)",
      finishButton: "Avsluta",
      quizYouMustPickAll: "Du måste välja alla korrekta svar.",
      tryingReconnect: "Försöker ansluta igen...",
      ignoreButton: "Ignorera",
      establishConnection:
        "Det gick inte att upprätta en stabil anslutning. Försök att ladda om den här sidan.",
      partiallyCorrect: "Delvis korrekt",
      youCanPickAnyCorrectAnswer:
        "Du kan välja vilket som helst av de korrekta svaren.",
      mustNotPickIncorrectAnswer:
        "Välj så många rätta svar du kan, men du får inte välja några felaktiga svar.",
      mandatoryFieldError: "Detta fält är obligatoriskt.",
      typeYourAnswer: "Skriv ditt svar...",
      noCorrectAnswer: "Det finns inget rätt svar.",
      presentationIsNotOpen:
        "Den här presentationen är i privat läge. När presentatören har bytt till offentlig kan du se och interagera med deras bilder.",
      invalidEmail: "Ogiltig e-postadress.",
      pickYourTeam: "Välj ditt lag:",
      teamIsFull: "Det här laget är fullt, välj ett annat.",
      changeTeam: "byta lag",
      youHaveWonPointForTeam: "Du har fått {msg} poäng för ditt lag",
      youHaveWonPointsForTeam: "Du har fått {msg} poäng för ditt lag",
      yourAnswerNotCount: "Ditt svar räknades inte.",
      hasAlreadyAnswered: "{msg} har redan svarat.",
      yourTeamWonPoint: "Ditt lag har fått {msg} poäng.",
      yourTeamWonPoints: "Ditt lag har fått {msg} poäng.",
      noOneAnsweredInTime: "Ingen annan i ditt team svarade i tid.",
      yourTeamInPlaceTeams: "Ditt team kom på {msg} plats av {num} lag.",
      yourTeamScoreIs: "Ditt lagresultat är {msg}",
      yourFinalScoreIs: "Ditt slutresultat är {msg}.",
      youAreIn: "Du är i {msg}",
      congratulations: "Grattis",
      team: "team",
      teams: "lag",
      "I just finished a super fun quiz on AhaSlides":
        "Jag har precis avslutat ett superkul frågesport på AhaSlides",
      "Post to {msg}": "Skicka till {msg}",
      numberQuestionOfQuizCompleted: "Fråga {msg} av {num} klar",
      seeSlideOnPresenterScreen: "Se bilderna på presentatörens skärm.",
      "Show Individual Ranking": "Visa individuell ranking",
      "Show Team Ranking": "Visa Team Ranking",
      Skip: "Hoppa",
      playAudioNow: "Vänligen spela upp ljudspåret nu",
      youMissedCorrectAnswer: "Du missade {msg} rätt svar.",
      youMissedCorrectAnswers: "Du missade {msg} korrekta svar.",
      youPickedCorrectAnswers: "Du valde {msg} av {num} korrekta svar.",
      youWereFastestInTeam: "Du var snabbast i ditt lag.",
      yourTeamWonPointTotal:
        "Totalt för denna fråga har ditt lag fått {msg} poäng",
      yourTeamWonPointsTotal:
        "Totalt för denna fråga har ditt lag fått {msg} poäng",
      alsoAccepted: "Också accepterat",
      youScoredPoints: "Du fick {msg} poäng.",
      youScoredPointsForYourTeam: "Du fick {msg} poäng för ditt lag.",
      youScoredPointForYourTeam: "Du fick {msg} poäng för ditt lag.",
      youScoredPoint: "Du fick {msg} poäng.",
      submitted: "Inlämnad",
      correctAnswerTitle: "Rätt svar",
      enjoyThisPresentationFooterBanner:
        "Gillar du den här presentationen? Engagera din egen publik gratis på AhaSlides.",
      letsGoFooterBanner: "Låt oss gå",
      getStartedWithAhaSlides: "Kom igång med AhaSlides",
      makeFreeQuiz: "Gör ditt eget gratis frågesport",
      waitToSpinTheWheel: "Vänta på att presentatören snurrar på hjulet!",
      theWheelSpinning: "Hjulet snurrar, titta på presentatörens skärm.",
      resultsAreIn: "Resultatet är sammanställt…",
      myQuestions: "Mina frågor",
      writeYourIdea: "Skriv din idé...",
      allTab: "Alla",
      mySubmissionTab: "Mina bidrag",
      votedTab: "Röstade",
      canUnvote: "Du kan ta tillbaka din röst.",
      voteLeft: "Du har {msg} röster kvar.",
      votingClosed: "Omröstningen stängd.",
      startVoting: "Börja rösta",
      seeResult: "Se resultat",
      votesLeft: "Du har {msg} röster kvar.",
      submissions: "inlämning(ar)",
      youCanSubmitOnce: "Du kan skicka in en gång.",
      eachCanOnlySubmitOnce: "Varje deltagare kan bara skicka in en gång.",
      maxExceededCannotSubmit:
        "Maxgränsen har överskridits. Du kan inte skicka in längre.",
      youHaveMade: "du har gjort",
      noneOptionsCorrect: "Inget av alternativen är korrekt!",
      changeImage: "Byt bild",
      remove: "Ta bort",
      uploadImage: "Ladda upp bild",
      joinNow: "Gå med nu",
      dragAndDropStatements: "Dra och släpp påståendena för att göra ordning",
      seeCorrectAnswer: "Se rätt svar",
      seeYourAnswer: "Se ditt svar",
      startTheConversation: "Starta konversationen!",
      noChatMessagesYet: "Det finns inga chattmeddelanden ännu.",
      questionWillStartSoon: "Frågan börjar snart.",
      typeSomethingToSayHi: "Skriv något för att säga hej!",
      quizCompleted: "Quiz avklarat!",
      shareThisOn: "Dela detta vidare",
      thisQuizWasMadeBy: "Detta frågesport gjordes av {name}",
      dontForgetToShowSupport: "Glöm inte att visa ditt stöd!",
      amazing: "Underbart!",
      greatWork: "Bra jobbat!",
      goodJob: "Bra jobbat!",
      wow: "Wow!",
      whatAPerformance: "Vilken prestation!",
      nicelyDone: "Snyggt gjort!",
      outOfQuestionsYou: "Av {number} frågor, du",
      youFinishedInThe: "Du slutade i",
      gotCorrectRate: "fick {number} rätt",
      topPercentage: "topp {number} %",
      ofAllPlayers: "av alla spelare",
      toughQuizRight: "Tuff frågesport, eller hur?",
      outOfQuestionsYourTeam: "Av {number} frågor, ditt team",
      yourTeamFinishedInThe: "Ditt lag slutade i",
      ofAllTeams: "av alla lag",
      haventAnsweredAnyQuiz: "Du har inte svarat på någon frågesportfråga.",
      teamHasntAnsweredAnyQuiz:
        "Ditt team har inte svarat på några frågesportfrågor.",
      you: "Du",
      enterYourMessage: "Skriv ditt meddelande...",
      hasLeft: "har lämnat",
      hasJoined: "har anslutit sig",
      "Match with...": "Matcha med...",
      "Or try to": "Eller försök",
      audienceSeeContent: "Titta på presentatörens skärm.",
      "Enter your authentication code": "Ange din autentiseringskod",
      "Let me in": "Låt mig få komma in",
      "Make a free quiz": "Gör en gratis frågesport",
      "Enjoy this presentation?": "Gillar du den här presentationen?",
      "Get slides": "Skaffa bilder",
      "Presenter is calling…": "Presentatören ringer...",
      Accept: "Acceptera",
      Decline: "Avslå",
      "Leave feedback...": "Lämna feedback...",
      "Not bad": "Inte illa",
      Good: "Bra",
      "Can't wait for the next": "Kan inte vänta på nästa",
      "Feedback sent!": "Feedback har skickats!",
      "Something went wrong, please try again.": "Något gick fel, försök igen.",
      "Could be better": "Kunde vara bättre",
      "How's the presentation?": "Hur är presentationen?",
      Send: "Skicka",
      Tutorials: "Handledningar",
      teamEarnsPointTotal: "Ditt team tjänar <b>{point}p</b> totalt.",
      teamEarnsPointAverage: "Ditt team tjänar <b>{point}p</b> i genomsnitt.",
      teamEarnsPointFastest:
        "Ditt team tjänar <b>{point}p</b> tack vare <b>{audienceName}</b>.",
      teamFastestAnswerIncorrect:
        "Snabbaste svaret var felaktigt, ditt lag tjänar <b>{point}p</b>.",
      teamFastestAnswerGetPoint:
        "Du var snabbast, ditt lag tjänar <b>{point}p</b>.",
      "💪 Keep up the great work!": "💪 Fortsätt med det fantastiska arbetet!",
      "Lose streak!": "Åh nej, rad förlorade!",
      Correct: "Rätta",
      "Double streak!": "Två i rad!",
      "Triple streak!": "Det är tre!",
      "Four Streak!": "Fantastiska fyra!",
      "Awesome!": "Fantastiskt!",
      "Keep going!": "Fortsätt kämpa på!",
      "Amazing!": "Underbart!",
      "Good job!": "Bra jobbat!",
      Incorrect: "Felaktig",
      my_answers: "Mina svar",
      view_answers: "Visa svar",
      final_leaderboard: "Final Leaderboard",
      final_answers_stat:
        "Du har <strong>{correctAnswers} / {totalQuiz} rätt</strong> ({correctRate}%)",
      final_ranking: "Rang: <strong>{ranking}</strong>",
      your_answer: "Ditt svar",
      review_all_questions:
        "Du kan granska alla frågor här när frågesporten är slut.",
      not_answer: "Du svarade inte",
      your_answer_correct: "Ditt svar är korrekt",
      your_answer_incorrect: "Ditt svar är felaktigt",
      your_answer_partially_correct: "Ditt svar är delvis korrekt",
      you_missed_quiz: "Du har precis missat frågesporten.",
      leaderboard: "Leaderboard",
      personal_no_quiz_answered: "Du har inte svarat på någon frågesport",
      team_no_quiz_answered: "Ditt team har inte svarat på något frågesport",
      final_team_answers_stat:
        "Ditt team har fått <strong>{correctAnswers} / {totalQuiz} korrekta</strong> ({correctRate}%)",
      all_slides: "Alla bilder",
      review_slides: "Granska bilder",
      review_all_slides_and_questions:
        "Du kan granska alla bilder och frågor när presentationen är slut.",
      no_answer: "Inget svar",
      sign_in_to_save_presentation:
        "Logga in för att spara den här presentationen",
      continue_with_google: "Fortsätt med Google",
      present_with_ahaslides: "Presentera med AhaSlides",
      view_terms: "Visa villkor",
      log_out: "Logga ut",
      attended: "Deltog",
      your_future_presentations_shown_here:
        "Dina framtida presentationer kommer att visas här",
      join_a_presentation: "Gå med i en presentation",
      presentation_details: "Presentationsdetaljer",
      "Leaving the presentation": "Lämnar presentationen",
      "This link will take you to a page that is not part of the presentation":
        "Denna länk tar dig till en sida som inte är en del av presentationen",
      thank_for_participation: "Tack för ditt deltagande! ❤️",
      give_feedback: "Ge feedback",
      get_ahaslides_free: "Skaffa AhaSlides gratis",
      exclusive_offer_hr_tech: "Exklusivt erbjudande för HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ Få AhaSlides Plus gratis ✨",
      ask_presenter_to_view_slides:
        "Fråga din presentatör om tillstånd att visa bilder.",
      login: "Logga in",
      sign_up: "Registrera dig",
      or: "eller",
      "Calculating your ranking…": "Beräknar din ranking...",
      categorise_unassined_option: "Totalt otilldelade alternativ",
      Reload: "Ladda om",
      "No internet. Retrying...": "Inget internet. Försöker igen...",
    };
  },
  b92b: function (e, t, n) {
    "use strict";
    var a = n("cebc"),
      i = (n("2fdb"), n("28a5"), n("6762"), n("00e7")),
      o = n.n(i),
      r = n("db49"),
      s = n("e0eb"),
      u = { expires: 365, sameSite: "none", secure: !0 },
      c = ["eu"],
      d = function (e) {
        if (!e) return e;
        var t = "";
        return (
          c.includes(r["a"].region) && (t += "".concat(r["a"].region, "-")),
          t ? t + e : e
        );
      },
      l = function (e) {
        if (!s["a"].checkWhiteLabelDomain() || "local" !== r["a"].env) {
          var t = e.split(".");
          return t.slice(-2).join(".");
        }
        return e;
      },
      p = function (e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u;
        if (
          window.location.hostname.includes(r["a"].domain) &&
          "ahaslides.eu" !== r["a"].domain
        ) {
          var i = Object(a["a"])({}, n, { domain: r["a"].domain }),
            s = d(e);
          o.a.set(s, t || "", i);
        }
      },
      m = function (e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u,
          a = d(e);
        o.a.set(a, t || "", n);
      },
      g = function (e) {
        var t = d(e),
          n = o.a.get(t);
        return "true" === n || ("false" !== n && n);
      },
      h = function (e) {
        var t = d(e);
        o.a.delete(t),
          window.location.hostname.includes(r["a"].domain) &&
            o.a.delete(t, { domain: r["a"].domain });
      },
      b = function (e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u;
        if (s["a"].isEuOrWhiteLabel()) m(e, t, n);
        else {
          var i = d(e);
          o.a.set(
            i,
            t,
            Object(a["a"])({}, n, { domain: l(r["a"].domain), path: "/" })
          );
        }
      },
      v = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "ahaToken",
          t = d(e);
        h(t),
          s["a"].isEuOrWhiteLabel() ||
            o.a.delete(t, { domain: l(r["a"].domain), path: "/" });
      },
      f = function (e) {
        var t = window.location.hostname.includes("localhost")
            ? "localhost"
            : l(r["a"].domain),
          n = d(e);
        o.a.delete(n, { domain: t });
      };
    t["a"] = {
      deleteValue: h,
      setValue: m,
      setValueByDomain: p,
      getValue: g,
      setTokenValue: b,
      deleteTokenValue: v,
      deleteRootDomainValue: f,
    };
  },
  ba8c: function (e, t, n) {},
  bb35: function (e, t, n) {},
  c2ae: function (e, t, n) {},
  c4ed: function (e, t, n) {
    "use strict";
    var a = n("4a8f"),
      i = n.n(a);
    i.a;
  },
  caa2: function (e, t, n) {
    "use strict";
    n("96cf");
    var a = n("3b8d"),
      i = n("2b0e"),
      o = n("db49"),
      r = null,
      s = {
        sendFeedbackV1: {
          method: "POST",
          url: "".concat(o["a"].baseUrl, "/api/question/private"),
        },
        sendFeedbackV2: {
          method: "POST",
          url: "".concat(o["a"].baseUrl, "/api/private-feedbacks"),
        },
      },
      u = function () {
        r = i["default"].resource("", {}, s);
      },
      c = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r.sendFeedbackV1(t);
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      d = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r.sendFeedbackV2(t);
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    t["a"] = { initResource: u, sendFeedbackV1: c, sendFeedbackV2: d };
  },
  cb78: function (e) {
    e.exports = {
      popupNextSlide: "講者已修改投影片。",
      goToSlideButton: "前往投影片",
      cancelButton: "取消",
      stopSubmission: "請等待講者開始。",
      waitingScreen: "請等待講者顯示下一張投影片。",
      thankScreen: "謝謝您的參與！",
      blankSlide: "此投影片沒有內容，請等待講者添加一些內容。",
      submitMultipleTimes: "您可以提交多次。",
      "open-endedInstructionSubmission":
        "謝謝您的意見！ 您還可以提交另一個，如果您願意的話。",
      multipleChoiceInstruction: "您最多可選擇",
      options: "選項",
      choicesLeft: "剩下的選項",
      powerBy: "AhaSlides",
      term: "條款",
      submissionClosedButton: "提交已關閉",
      submit: "提交",
      exitAndVote: "離開及在另一個簡報上投票",
      nextSlideButton: "下一張投影片",
      disconnectError: "伺服器連線出現問題，請再試一次！",
      slideQRCodeAudience:
        "您已成功加入，您可以向您周圍的朋友顯示QR碼，以便他們加入。",
      openendedSubmissionFail: "提交失敗。請檢查您的連線並重試。",
      watchVideo: "請在大螢幕上觀看影片。",
      addSpecialCharacter: "請勿添加任何特殊字符",
      answerWithSpace: "帶空格的答案將被視為一個單詞。",
      nextButton: "下一個",
      skipButton: "跳到下一張投影片",
      audiencePacingWaitingScreen: "您已回答此問題。",
      enterWordPlaceholder: "輸入一個單詞…",
      errorWordCloudWhenLeaveBlank: "請輸入您的單詞。",
      enterYourName: "輸入您的姓名",
      getReady: "準備開始玩!",
      chooseEmoji: "選擇一個表情圖像做為您的頭像",
      changeButton: "更換頭像…",
      joinTheGameButton: "加入遊戲！",
      fasterGetMorePointsRule: "解題愈快，分數愈高",
      correctAnswerGetMaxPointTitle: "請在時限內作答",
      correctAnswerGetMaxPointDetail: "(迅速作答無獎勵分數)",
      quizIsNotOpen: "測驗尚未進行，請等待講者開始！",
      reloadTextLink: "重新載入",
      numberQuestionOfQuiz: "共{num}題，問題{msg}",
      runOutOfTime: "哦，不，時間到。",
      correctAnswer: "正確！",
      youHaveWonPoint: "本題您獲得 {msg} 分",
      youAnsweredIn: "您回答 {msg} ({num} 剩餘)！",
      waitAndSeeHowYouDid: "讓我們拭目以待…",
      wrongAnswer: "錯誤答案！",
      minute: "分",
      minutes: "分鐘",
      seconds: "秒",
      players: "{msg} 玩家",
      timesUp: "時間到！",
      youAreInPlace: "您在 {msg1} 位玩家中排名 {msg}",
      points: "分數",
      noResultYet: "未有結果",
      pointShortcut: "分",
      youHaveWonPoints: "本題您贏得 {msg}",
      closeAvatar: "關閉",
      alreadyAnswer: "您已回答此問題。",
      yourTotalScoreIs: "您的總分是 {msg}",
      betterLuckNextTime: "下一次會更好！",
      clickToSeeFullSize: "點擊每個圖像可放大檢視。",
      answeredQuestions: "已回答",
      askQuestionButton: "提問",
      qnaQuestionPlaceholder: "在此輸入您的問題",
      enterYourNameOptional: "您的姓名.. (非必需)",
      topQuestionsAudience: "熱門",
      newQuestionsAudience: "最新",
      enterYourNameWarning: "請輸入您的姓名。",
      enterQuestionWarning: "請輸入您的問題。",
      yourNamePlaceholder: "您的姓名.. (必需)",
      finishButton: "完成",
      quizYouMustPickAll: "您必需選擇所有正確答案。",
      tryingReconnect: "嘗試重新連接…",
      ignoreButton: "忽略",
      establishConnection: "無法建立穩定的連線，請試著重新載入此頁面。",
      partiallyCorrect: "部份正確",
      youCanPickAnyCorrectAnswer: "您可選擇任何正確的答案。",
      mustNotPickIncorrectAnswer: "儘可能的選擇正確答案，而非錯誤答案。",
      mandatoryFieldError: "這是必填欄位",
      typeYourAnswer: "輸入您的答案…",
      noCorrectAnswer: "沒有正確答案",
      presentationIsNotOpen:
        "此演示文稿處於私人模式。 演示者切換到公共模式後，您可以查看他們的幻燈片並與之交互。",
      invalidEmail: "無效的email",
      pickYourTeam: "選擇您的隊伍：",
      teamIsFull: "這個隊伍已經滿了，請選擇其他隊伍。",
      changeTeam: "更換隊伍",
      youHaveWonPointForTeam: "您為你的隊伍獲得了 {msg} 分",
      youHaveWonPointsForTeam: "您為你的隊伍獲得了 {msg} 分",
      yourAnswerNotCount: "您的答案未列入計分。",
      hasAlreadyAnswered: "{msg} 已經回答。",
      yourTeamWonPoint: "您的隊伍獲得 {msg} 分。",
      yourTeamWonPoints: "您的隊伍獲得 {msg} 分。",
      noOneAnsweredInTime: "隊伍成員沒有一位在時限內回答。",
      yourTeamInPlaceTeams: "您的隊伍在 {num} 個團隊中排名為 {msg}",
      yourTeamScoreIs: "您的隊伍得分為 {msg}",
      yourFinalScoreIs: "您的隊伍總分為 {msg}。",
      youAreIn: "您的隊伍是 {msg}",
      congratulations: "恭喜",
      team: "隊伍",
      teams: "團隊",
      "I just finished a super fun quiz on AhaSlides":
        "我剛在AhaSlides完成了一個超有趣的測驗",
      "Post to {msg}": "發佈到 {msg}",
      numberQuestionOfQuizCompleted: "第 {num} 個問題 {msg} 已完成",
      seeSlideOnPresenterScreen: "請在講者的螢幕上觀看。",
      "Show Individual Ranking": "顯示個人排名",
      "Show Team Ranking": "顯示球隊排名",
      Skip: "跳過",
      playAudioNow: "請立即播放音軌",
      youMissedCorrectAnswer: "您錯過了{msg}正確答案。",
      youMissedCorrectAnswers: "您錯過了{msg}個正確答案。",
      youPickedCorrectAnswers: "您從{num}個正確答案中選擇了{msg}個。",
      youWereFastestInTeam: "您是團隊中最快的。",
      yourTeamWonPointTotal: "對於這個問題，您的團隊總共獲得了{msg}分",
      yourTeamWonPointsTotal: "對於這個問題，您的團隊總共獲得了{msg}分",
      alsoAccepted: "也被接受",
      youScoredPoints: "您获得了{msg}分。",
      youScoredPointsForYourTeam: "您为团队赢得了{msg}分。",
      youScoredPointForYourTeam: "您为团队赢得了{msg}分。",
      youScoredPoint: "您获得了{msg}分。",
      submitted: "已提交",
      correctAnswerTitle: "正確答案",
      enjoyThisPresentationFooterBanner:
        "享受这个演示？与观众互动交流的自由AhaSlides。",
      letsGoFooterBanner: "我们走吧",
      getStartedWithAhaSlides: "开始使用AhaSlides",
      makeFreeQuiz: "制作自己的免费测验",
      waitToSpinTheWheel: "等待演示者旋轉方向盤！",
      theWheelSpinning: "車輪在旋轉，請查看演示者的屏幕。",
      resultsAreIn: "結果在…",
      myQuestions: "我的问题",
      writeYourIdea: "寫出你的想法...",
      allTab: "全部",
      mySubmissionTab: "我的提交",
      votedTab: "投票",
      canUnvote: "如果你願意，你可以取消投票。",
      voteLeft: "您還剩 {msg} 票。",
      votingClosed: "投票結束。",
      startVoting: "開始投票",
      seeResult: "查看結果",
      votesLeft: "您還剩 {msg} 票。",
      submissions: "想法",
      youCanSubmitOnce: "您可以提交一次。",
      eachCanOnlySubmitOnce: "每位参赛者只能提交一次。",
      maxExceededCannotSubmit: "超出最大限制。你不能再提交了。",
      youHaveMade: "你提出了",
      noneOptionsCorrect: "這些選項都不是正確的！",
      changeImage: "更改圖像",
      remove: "消除",
      uploadImage: "上傳圖片",
      joinNow: "現在加入",
      dragAndDropStatements: "拖放報表以進行排序",
      seeCorrectAnswer: "看到正确答案",
      seeYourAnswer: "看到你的答案",
      startTheConversation: "開始對話！",
      noChatMessagesYet: "還沒有聊天消息。",
      questionWillStartSoon: "測驗將很快開始。",
      typeSomethingToSayHi: "輸入一些東西來打個招呼！",
      quizCompleted: "測驗完成！",
      shareThisOn: "将此分享到",
      thisQuizWasMadeBy: "這個測驗是由 {name}",
      dontForgetToShowSupport: "請不要忘記表示您的支持！",
      amazing: "驚人！",
      greatWork: "偉大的工作！",
      goodJob: "做得好！",
      wow: "哇！",
      whatAPerformance: "多么出色的表现！",
      nicelyDone: "做得很好!",
      outOfQuestionsYou: "在 {number} 個問題中，您",
      youFinishedInThe: "您在所有玩家中",
      gotCorrectRate: "得到了 {number} 的正確答案",
      topPercentage: "排名前 {number}%",
      ofAllPlayers: "你是",
      toughQuizRight: "艱難的測驗，對吧？",
      outOfQuestionsYourTeam: "在 {number} 個問題中，您的團隊",
      yourTeamFinishedInThe: "你的球隊在所有球員中",
      ofAllTeams: "你的團隊",
      haventAnsweredAnyQuiz: "您還沒有回答任何測驗問題。",
      teamHasntAnsweredAnyQuiz: "您的團隊尚未回答任何測驗問題。",
      you: "你",
      enterYourMessage: "输入您的留言...",
      hasLeft: "離開了",
      hasJoined: "已加入",
      "Match with...": "搭配...",
      orTryToReload:
        "或者嘗試<a class='link-reload' @click='reloadPage()'>重新加載</a>",
      "Or try to": "或者嘗試",
      audienceSeeContent: "請看演示者的屏幕。",
      "Make a free quiz": "創建一個免費測驗",
      "Get slides": "得到幻灯片",
      "Presenter is calling…": "演示者正在呼叫…",
      Accept: "接受",
      Decline: "拒絕",
      "Enter your authentication code": "输入您的身份验证码",
      "Let me in": "讓我進去",
      "Enjoy this presentation?": "喜歡這個演示嗎？",
      "Not bad": "不錯",
      "Can't wait for the next": "等不及下一個",
      "Feedback sent!": "反饋已發送！",
      "Something went wrong, please try again.": "发生错误，请重试。",
      Good: "好的",
      "Leave feedback...": "留下反饋。 這是私人的...",
      "Could be better": "有待改善",
      "How's the presentation?": "演讲怎么样？",
      Send: "發送",
      Tutorials: "教程",
      teamEarnsPointAverage: "你的團隊平均獲得 <b>{point}p</b> 分。",
      teamFastestAnswerIncorrect:
        "最快的答案是錯誤的，你的團隊獲得了 <b>{point}p</b> 分。",
      "💪 Keep up the great work!": "💪 保持優秀的工作！",
      teamEarnsPointTotal: "你的團隊總共獲得了 <b>{point}p</b> 分。",
      teamEarnsPointFastest:
        "你的團隊獲得了<b>{point}p</b>，多虧了<b>{audienceName}</b>。",
      teamFastestAnswerGetPoint:
        "你是最快的，你的團隊獲得了 <b>{point}p</b> 分。",
      "Lose streak!": "连胜断了",
      Correct: "很棒！",
      "Double streak!": "十分棒！",
      "Triple streak!": "极好！",
      "Four Streak!": "太好了！",
      "Awesome!": "卓越！",
      "Keep going!": "絕佳！",
      "Amazing!": "優秀！",
      "Good job!": "非常好！",
      Incorrect: "不正確",
      my_answers: "我的答案",
      view_answers: "查看答案",
      final_leaderboard: "最終排行榜",
      final_answers_stat:
        "您答對了<strong>{correctAnswers} / {totalQuiz}</strong>道題，正確率為<strong>{correctRate}%</strong>",
      final_ranking: "排名：<strong>{ranking}</strong>",
      your_answer: "您的答案",
      review_all_questions: "測驗結束後，您可以在這裡查看所有問題。",
      not_answer: "您沒有回答",
      your_answer_correct: "您的答案是正確的",
      your_answer_incorrect: "您的答案是錯誤的",
      your_answer_partially_correct: "您的答案部分正确",
      you_missed_quiz: "你剛錯過了測驗。",
      leaderboard: "排行榜",
      personal_no_quiz_answered: "您尚未回答任何測驗",
      team_no_quiz_answered: "您的團隊尚未回答任何測驗",
      final_team_answers_stat:
        "您的團隊已獲得 <strong>{correctAnswers} / {totalQuiz} 個正確答案</strong> ({correctRate}%)",
      all_slides: "所有幻燈片",
      review_slides: "複習幻燈片",
      view_all_slides_answers: "查看所有幻燈片和答案",
      review_all_slides_and_questions:
        "當演示結束時，您可以查看所有幻燈片和問題。",
      no_answer: "無回答",
      sign_in_to_save_presentation: "登入以保存此簡報",
      continue_with_google: "繼續使用 Google 登入",
      present_with_ahaslides: "使用 AhaSlides 簡報",
      view_terms: "查看條款",
      log_out: "登出",
      attended: "已出席",
      your_future_presentations_shown_here: "您的未來簡報將在此處顯示",
      join_a_presentation: "加入簡報",
      presentation_details: "簡報詳情",
      "Leaving the presentation": "離開演示文稿",
      "This link will take you to a page that is not part of the presentation":
        "此連結將帶您前往不屬於演示文稿的頁面",
      thank_for_participation: "感謝您的參與！ ❤️",
      give_feedback: "提供反馈",
      get_ahaslides_free: "免費獲得 AhaSlides",
      exclusive_offer_hr_tech: "HR 科技節亞洲獨家優惠",
      get_ahaslides_plus_free: "✨ 免費獲得 AhaSlides Plus ✨",
      ask_presenter_to_view_slides: "請向您的演示者索取幻燈片查看權限。",
      login: "登錄",
      sign_up: "註冊",
      or: "或者",
      Reload: "重新載入",
      "No internet. Retrying...": "無網路。正在重試...",
    };
  },
  cf92: function (e, t, n) {},
  cfc1: function (e) {
    e.exports = {
      popupNextSlide: "O apresentador mudou o slide.",
      goToSlideButton: "Ir para o slide",
      cancelButton: "Cancelar",
      stopSubmission: "Aguarde até que o apresentador abra.",
      waitingScreen: "Aguarde até que o próximo slide seja aberto.",
      thankScreen: "Obrigado por participar!",
      blankSlide:
        "Este slide está em branco. Aguarde até que o apresentador adicione algo.",
      submitMultipleTimes: "Você pode enviar várias vezes.",
      "open-endedInstructionSubmission": "Obrigado! Você pode mais se quiser.",
      multipleChoiceInstruction: "Você pode escolher até",
      options: "opções",
      choicesLeft: "alternativas restantes",
      powerBy: "AhaSlides",
      term: "Termos",
      submissionClosedButton: "Envio fechado",
      submit: "Enviar",
      exitAndVote: "Sair e votar em outra apresentação",
      nextSlideButton: "Próximo slide",
      disconnectError:
        "Houve um problema ao conectar ao servidor. Tente novamente!",
      slideQRCodeAudience:
        "Você entrou com sucesso! Você pode mostrar o QR Code abaixo para outros ao seu redor, para que eles possam participar também.",
      openendedSubmissionFail:
        "O envio falhou. Verifique a sua conexão e tente novamente.",
      watchVideo: "Veja o vídeo na tela do apresentador.",
      addSpecialCharacter: "Não adicione nenhum caracter especial",
      answerWithSpace:
        "Respostas com espaços serão consideradas como uma palavra.",
      nextButton: "Próximo slide",
      skipButton: "Pular para o próximo slide",
      audiencePacingWaitingScreen: "Você já respondeu esta questão.",
      enterWordPlaceholder: "Insira uma palavra...",
      errorWordCloudWhenLeaveBlank: "Insira sua palavra.",
      enterYourName: "Insira o seu nome",
      getReady: "Prepare-se para jogar {msg}!",
      chooseEmoji: "Escolha um emoji como seu avatar",
      changeButton: "Mudar avatar...",
      joinTheGameButton: "Participar do jogo!",
      fasterGetMorePointsRule:
        "Nesta questão quem responde mais rápido ganha mais pontos",
      correctAnswerGetMaxPointTitle: "Responda antes que o tempo acabe",
      correctAnswerGetMaxPointDetail:
        "(Sem pontos extras para respostas rápidas)",
      quizIsNotOpen:
        "O quiz não está aberto. Aguarde até que o apresentador comece.",
      reloadTextLink: "Recarregar",
      numberQuestionOfQuiz: "Questão {msg} de {num}",
      runOutOfTime:
        "Ah não, o tempo acabou! Responda mais depressa na próxima vez!",
      correctAnswer: "Correta!",
      youHaveWonPoint: "Você ganhou {msg} pontos nesta questão",
      youAnsweredIn: "Você respondeu {msg} (faltam {msg})!",
      waitAndSeeHowYouDid: "Vamos esperar para ver como você se saiu...",
      wrongAnswer: "Resposta errada!",
      minute: "minuto",
      minutes: "minutos",
      seconds: "segundos",
      players: "{msg} jogadores",
      timesUp: "Tempo esgotado!",
      youAreInPlace: "Você está na posição {msg} de {msg1}",
      points: "pontos",
      noResultYet: "Sem resultados ainda",
      pointShortcut: "pts",
      youHaveWonPoints: "Você ganhou {msg} pontos nesta questão",
      closeAvatar: "Fechar",
      alreadyAnswer: "Você já respondeu esta questão.",
      yourTotalScoreIs: "Sua pontuação total é {msg}",
      betterLuckNextTime: "Boa sorte da próxima vez!",
      clickToSeeFullSize: "Clique em cada imagem para aumentar.",
      answeredQuestions: "Respondidas",
      askQuestionButton: "Perguntar",
      qnaQuestionPlaceholder: "Escreva sua pergunta aqui...",
      enterYourNameOptional: "Seu nome... (opcional)",
      topQuestionsAudience: "Populares",
      newQuestionsAudience: "Novas",
      enterYourNameWarning: "Insira o seu nome.",
      enterQuestionWarning: "Insira sua pergunta.",
      yourNamePlaceholder: "Seu nome... (obrigatório)",
      finishButton: "Terminar",
      quizYouMustPickAll: "Você deve escolher todas as respostas corretas.",
      tryingReconnect: "Tentando reconectar...",
      ignoreButton: "Ignorar",
      establishConnection:
        "Não conseguimos estabelecer uma conexão estável. Tente recarregar esta página.",
      partiallyCorrect: "Parcialmente correta",
      youCanPickAnyCorrectAnswer: "Você pode marcar qualquer resposta correta.",
      mustNotPickIncorrectAnswer:
        "Marque quantas respostas corretas quiser, mas não marque nenhuma incorreta.",
      mandatoryFieldError: "Este campo é obrigatório.",
      typeYourAnswer: "Insira sua resposta...",
      noCorrectAnswer: "Não há resposta correta.",
      presentationIsNotOpen:
        "Esta apresentação está em modo privado. Uma vez que o apresentador tenha mudado para o modo público, você pode ver e interagir com seus slides.",
      invalidEmail: "Email inválido.",
      pickYourTeam: "Escolha seu time:",
      teamIsFull: "Este time está cheio, escolha outro.",
      changeTeam: "mudar de time",
      youHaveWonPointForTeam: "Você marcou {msg} ponto para o seu time",
      youHaveWonPointsForTeam: "Você marcou {msg} pontos para o seu time",
      yourAnswerNotCount: "Sua resposta não contou",
      hasAlreadyAnswered: "{msg} já respondeu.",
      yourTeamWonPoint: "Seu time marcou {msg} ponto.",
      yourTeamWonPoints: "Seu time marcou {msg} pontos.",
      noOneAnsweredInTime: "Ninguém no seu time respondeu a tempo.",
      yourTeamInPlaceTeams: "Seu time está na posição {msg} entre {msg} times.",
      yourTeamScoreIs: "A pontuação do seu time é {msg}.",
      yourFinalScoreIs: "Sua pontuação final é {msg}",
      youAreIn: "Você está em {msg}",
      congratulations: "Parabéns",
      team: "time",
      teams: "times",
      "I just finished a super fun quiz on AhaSlides":
        "Acabei de participar de um quiz muito legal no AhaSlides",
      "Post to {msg}": "Postar em {msg}",
      numberQuestionOfQuizCompleted: "Questão {msg} de {num} concluída",
      seeSlideOnPresenterScreen: "Veja os slides na tela do apresentador.",
      "Show Individual Ranking": "Mostrar ranking individual",
      "Show Team Ranking": "Mostrar ranking de times",
      Skip: "Pular",
      playAudioNow: "Tocar o áudio agora",
      youMissedCorrectAnswer: "Você perdeu {msg} resposta correta.",
      youMissedCorrectAnswers: "Você perdeu {msg} respostas corretas.",
      youPickedCorrectAnswers:
        "Você escolheu {msg} de {num} respostas corretas.",
      youWereFastestInTeam: "Você foi o mais rápido no seu time.",
      yourTeamWonPointTotal:
        "No total para esta questão, seu time marcou {msg} ponto",
      yourTeamWonPointsTotal:
        "No total para esta questão, seu time marcou {msg} pontos",
      alsoAccepted: "Também é aceito",
      youScoredPoints: "Você marcou {msg} pontos.",
      youScoredPointsForYourTeam: "Você marcou {msg} pontos para o seu time.",
      youScoredPointForYourTeam: "Você marcou {msg} ponto para o seu time.",
      youScoredPoint: "Você marcou {msg} ponto.",
      submitted: "Enviado",
      correctAnswerTitle: "Resposta correta",
      enjoyThisPresentationFooterBanner:
        "Gostando dessa apresentação? Envolva seu público de graça no AhaSlides.",
      letsGoFooterBanner: "Vamos lá",
      getStartedWithAhaSlides: "Começar com AhaSlides",
      makeFreeQuiz: "Faça seu próprio Quiz Grátis",
      waitToSpinTheWheel: "Aguarde até que o apresentador gire a roda!",
      theWheelSpinning: "A roda está girando, veja na tela do apresentador.",
      resultsAreIn: "Aqui estão os resultados...",
      myQuestions: "Minhas perguntas",
      writeYourIdea: "Escreva sua ideia...",
      allTab: "Tudo",
      mySubmissionTab: "Meus envios",
      votedTab: "Votos",
      canUnvote: "Você pode remover seu voto se quiser.",
      voteLeft: "Você tem {msg} voto ainda.",
      votingClosed: "Votação encerrada.",
      startVoting: "Começar votação",
      seeResult: "Ver resultado",
      votesLeft: "Você tem {msg} votos ainda.",
      submissions: "envio(s)",
      youCanSubmitOnce: "Você pode enviar só uma vez.",
      eachCanOnlySubmitOnce: "Cada participante só pode enviar uma vez.",
      maxExceededCannotSubmit:
        "Limite máximo excedido. Você não pode mais enviar.",
      youHaveMade: "Você fez",
      noneOptionsCorrect: "Nenhuma das opções está correta!",
      changeImage: "Trocar imagem",
      remove: "Remover",
      uploadImage: "Upload de imagem",
      joinNow: "Participe agora",
      dragAndDropStatements:
        "Arraste e solte as declarações para fazer o pedido",
      seeCorrectAnswer: "Ver resposta correta",
      seeYourAnswer: "Veja sua resposta",
      startTheConversation: "Comece a conversa!",
      noChatMessagesYet: "Não há mensagens de chat ainda.",
      questionWillStartSoon: "A pergunta começará em breve.",
      typeSomethingToSayHi: "Escreva algo para dizer oi!",
      quizCompleted: "Quiz Zakończony!",
      shareThisOn: "Compartilhe isso no",
      thisQuizWasMadeBy: "Este questionário foi feito por {name}",
      dontForgetToShowSupport:
        "Por favor, não se esqueça de mostrar seu apoio!",
      amazing: "Surpreendente!",
      greatWork: "Ótimo trabalho!",
      goodJob: "Bem feito!",
      wow: "Uau!",
      whatAPerformance: "Que desempenho!",
      nicelyDone: "Muito bem feito!",
      outOfQuestionsYou: "Fora do {number} de perguntas, você",
      youFinishedInThe: "Você terminou no",
      gotCorrectRate: "obteve {number} resposta correta",
      topPercentage: "topo {number}%",
      ofAllPlayers: "de todos os jogadores",
      toughQuizRight: "Teste difícil, certo?",
      outOfQuestionsYourTeam: "Fora do {number} de perguntas, sua equipe",
      yourTeamFinishedInThe: "Sua equipe terminou no",
      ofAllTeams: "de todas as equipes",
      haventAnsweredAnyQuiz: "Você não respondeu a nenhuma pergunta do quiz.",
      teamHasntAnsweredAnyQuiz:
        "Sua equipe não respondeu a nenhuma pergunta do quiz.",
      you: "Vocês",
      enterYourMessage: "Digite sua mensagem...",
      hasLeft: "saiu",
      hasJoined: "se juntou",
      "Match with...": "Combina com...",
      orTryToReload:
        "Ou tente <a class='link-reload' @click='reloadPage()'>recarregar</a>",
      "Or try to": "Ou tente",
      audienceSeeContent: "Por favor, olhe para a tela do apresentador.",
      "Make a free quiz": "Crie um questionário gratuito",
      "Get slides": "Obtenha os slides",
      Accept: "Aceitar",
      Decline: "Rejeitar",
      "Enter your authentication code": "Digite seu código de autenticação",
      "Let me in": "Me deixar entrar",
      "Enjoy this presentation?": "Gosta dessa apresentação?",
      "Presenter is calling…": "O apresentador está ligando…",
      "Feedback sent!": "Feedback enviado!",
      "Not bad": "Nada mal",
      Good: "Bom",
      "Can't wait for the next": "Mal posso esperar pelo próximo",
      "Leave feedback...": "Deixar feedback. É privado...",
      "Could be better": "Poderia ser melhor",
      "Something went wrong, please try again.":
        "Alguma coisa deu errado. Por favor tente outra vez.",
      "How's the presentation?": "Como está a apresentação?",
      Send: "Enviar",
      Tutorials: "Tutoriais",
      teamEarnsPointAverage: "Sua equipe ganha em média <b>{point}p</b>.",
      teamEarnsPointFastest:
        "Sua equipe ganha <b>{point}p</b> graças a <b>{audienceName}</b>.",
      teamEarnsPointTotal: "Sua equipe ganhou <b>{point}p</b> no total.",
      teamFastestAnswerIncorrect:
        "A resposta mais rápida estava errada, sua equipe ganha <b>{point}p</b>.",
      teamFastestAnswerGetPoint:
        "Você foi o mais rápido, sua equipe ganha <b>{point}p</b>.",
      "💪 Keep up the great work!": "💪 Continue o bom trabalho!",
      "Lose streak!": "Série acabou!",
      Correct: "Incrível!",
      "Double streak!": "Excelente!",
      "Triple streak!": "Extraordinário!",
      "Four Streak!": "Fantástico!",
      "Awesome!": "Ótimo!",
      "Keep going!": "Trabalho incrível!",
      "Amazing!": "Maravilhoso!",
      "Good job!": "Espetacular!",
      Incorrect: "Incorreto",
      my_answers: "Minhas respostas",
      view_answers: "Ver respostas",
      final_leaderboard: "Tabela de classificação final",
      final_answers_stat:
        "Você tem <strong>{correctAnswers} / {totalQuiz} corretas</strong> ({correctRate}%)",
      final_ranking: "Classificação: <strong>{ranking}</strong>",
      your_answer: "Sua resposta",
      review_all_questions:
        "Você pode revisar todas as perguntas aqui quando o quiz terminar.",
      not_answer: "Você não respondeu",
      your_answer_correct: "Sua resposta está correta",
      your_answer_incorrect: "Sua resposta está incorreta",
      your_answer_partially_correct: "Sua resposta está parcialmente correta",
      you_missed_quiz: "Você acabou de perder o quiz.",
      leaderboard: "Classificação",
      personal_no_quiz_answered: "Você ainda não respondeu nenhum quiz",
      team_no_quiz_answered: "Sua equipe ainda não respondeu nenhum quiz",
      final_team_answers_stat:
        "Sua equipe acertou <strong>{correctAnswers} / {totalQuiz} perguntas</strong> ({correctRate}%)",
      all_slides: "Todos os slides",
      review_slides: "Revisar slides",
      view_all_slides_answers: "Ver todos os slides e respostas",
      review_all_slides_and_questions:
        "Você pode revisar todos os slides e perguntas quando a apresentação terminar.",
      no_answer: "Sem resposta",
      sign_in_to_save_presentation: "Entre para salvar esta apresentação",
      continue_with_google: "Continue com o Google",
      present_with_ahaslides: "Apresentar com AhaSlides",
      view_terms: "Ver termos",
      log_out: "Sair",
      attended: "Assistido",
      your_future_presentations_shown_here:
        "Suas apresentações futuras serão mostradas aqui",
      join_a_presentation: "Entrar em uma apresentação",
      presentation_details: "Detalhes da apresentação",
      "Leaving the presentation": "Saindo da apresentação",
      "This link will take you to a page that is not part of the presentation":
        "Este link o levará para uma página que não faz parte da apresentação",
      thank_for_participation: "Obrigado pela sua participação! ❤️",
      give_feedback: "Envie um feedback",
      get_ahaslides_free: "Obtenha o AhaSlides gratuitamente",
      exclusive_offer_hr_tech: "Oferta exclusiva para o HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ Obtenha o AhaSlides Plus gratuitamente ✨",
      ask_presenter_to_view_slides:
        "Por favor, peça ao seu apresentador permissão para visualizar os slides.",
      login: "Entrar",
      sign_up: "Registrar-se",
      or: "ou",
      Reload: "Recarregar",
      "No internet. Retrying...": "Sem internet. Tentando novamente...",
    };
  },
  d697: function (e, t, n) {
    "use strict";
    var a = n("694a"),
      i = n.n(a),
      o = "eu",
      r = "gb",
      s = 200;
    t["a"] = {
      euRegion: o,
      globalRegion: r,
      storageKeys: i.a,
      slideTypes: {
        multipleChoice: {
          name: "Multilple Choice",
          icon: "fas fa-chart-bar",
          type: "multipleChoice",
        },
      },
      colorsHex: [
        "#4EAAF1",
        "#FFAF09",
        "#28C270",
        "#FF5DA1",
        "#7669BF",
        "#124345",
      ],
      emojis: [
        "👍",
        "😜",
        "😀",
        "😍",
        "😘",
        "😆",
        "😷",
        "😠",
        "😅",
        "😂",
        "😱",
        "🤩",
        "🤗",
        "😭",
        "😈",
        "👿",
        "👹",
        "👺",
        "💀",
        "☠️",
        "🙊",
        "🙉",
        "🙈",
        "😾",
        "😺",
        "😸",
        "😹",
        "😻",
        "🙀",
        "😽",
        "😼",
        "👻",
        "👩‍🎓",
        "👨‍🎓",
        "👩‍🍳",
        "👨‍🔧",
        "👩‍🔧",
        "👨‍🎤",
        "👩‍🚒",
        "👨‍🚒",
        "👩‍🚀",
        "👨‍🚀",
        "👩‍✈️",
        "👨‍🔬",
        "👳",
        "👳‍♂️",
        "🤰",
        "🤱",
        "🎅",
        "👼",
        "🧛",
        "🧝‍♂️",
        "🧞",
        "🧙‍♂️",
        "🧜‍♂️",
        "🧜‍♀️",
        "🧙‍♀️",
        "🧟‍♀️",
        "🙅‍♀️",
        "🙆‍♂️",
        "🙇‍♂️",
        "💆‍♂️",
        "💇",
        "🚵",
        "🤼‍♂️",
        "🤹‍♂️",
        "👨‍👩‍👧‍👧",
        "💑",
        "👨‍❤️‍💋‍👨",
        "👩‍❤️‍💋‍👨",
        "👨‍👩‍👧",
        "👪",
        "👨‍👩‍👦",
        "👨‍👨‍👦‍👦",
        "👩‍👧",
        "👩‍👧‍👧",
        "🛍️",
        "🧤",
        "🧣",
        "👜",
        "👛",
        "👚",
        "🍜",
      ],
      fonts: {
        jakarta: {
          url: "https://fonts.googleapis.com/css?family=Plus+Jakarta+Sans:400,600&display=swap&subset=latin-ext,vietnamese",
          value: "'Plus Jakarta Sans', sans-serif",
          name: "jakarta",
          label: "Plus Jakarta Sans (default)",
        },
        roboto: {
          url: "https://fonts.googleapis.com/css?family=Roboto:400,600&display=swap&subset=latin-ext,vietnamese",
          value: "'Roboto', sans-serif",
          name: "roboto",
          label: "Roboto",
        },
        opensan: {
          url: "https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap&subset=latin-ext,vietnamese",
          value: "'Open Sans', sans-serif",
          name: "opensan",
          label: "Open Sans",
        },
        oswald: {
          url: "https://fonts.googleapis.com/css?family=Oswald:400,600&display=swap&subset=latin-ext,vietnamese",
          value: "'Oswald', sans-serif",
          name: "oswald",
          label: "Oswald",
        },
        montserrat: {
          url: "https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap&subset=latin-ext,vietnamese",
          value: "'Montserrat', sans-serif",
          name: "montserrat",
          label: "Montserrat",
        },
        sourceCodePro: {
          url: "https://fonts.googleapis.com/css?family=Source+Code+Pro:400,600&display=swap&subset=latin-ext,vietnamese",
          value: "'Source Code Pro', 'Courier New', Courier, monospace",
          name: "sourceCodePro",
          label: "Source Code Pro",
        },
        merriweather: {
          url: "https://fonts.googleapis.com/css?family=Merriweather:400,600&display=swap&subset=latin-ext,vietnamese",
          value: "'Merriweather', serif",
          name: "merriweather",
          label: "Merriweather",
        },
        ebGaramond: {
          url: "https://fonts.googleapis.com/css?family=EB+Garamond:400,600&display=swap&subset=latin-ext,vietnamese",
          value: "'EB Garamond', serif",
          name: "ebGaramond",
          label: "EB Garamond",
        },
        robotoSlab: {
          url: "https://fonts.googleapis.com/css?family=Roboto+Slab:400,600&display=swap&subset=latin-ext,vietnamese",
          value: "'Roboto Slab', serif",
          name: "robotoSlab",
          label: "Roboto Slab",
        },
        cairo: {
          url: "https://fonts.googleapis.com/css?family=Cairo:400,600&display=swap&subset=arabic",
          value: "'Cairo', sans-serif",
          name: "cairo",
          label: "Cairo",
        },
        nunito: {
          url: "https://fonts.googleapis.com/css?family=Nunito:400,600&display=swap&subset=latin-ext,vietnamese",
          value: "'Nunito', sans-serif",
          name: "nunito",
          label: "Nunito",
        },
        kanit: {
          url: "https://fonts.googleapis.com/css?family=Kanit:400,600&display=swap&subset=thai",
          value: "'Kanit', sans-serif",
          name: "kanit",
          label: "Kanit",
        },
      },
      colors2025: [
        "#FF4181",
        "#1FE8B4",
        "#FF9068",
        "#3E3E5A",
        "#D92B6B",
        "#16C49A",
        "#5715A0",
        "#E65B29",
        "#27487A",
        "#0F6E65",
      ],
      lighterColors2025: [
        "rgba(255, 65, 129, 0.8)",
        "rgba(31, 232, 180, 0.8)",
        "rgba(255, 144, 104, 0.8)",
        "rgba(62, 62, 90, 0.8)",
        "rgba(217, 43, 107, 0.8)",
        "rgba(22, 196, 154, 0.8)",
        "rgba(87, 21, 160, 0.8)",
        "rgba(230, 91, 41, 0.8)",
        "rgba(39, 72, 122, 0.8)",
        "rgba(15, 110, 101, 0.8)",
      ],
      colors: [
        "rgba(78, 170, 241, 1)",
        "rgba(255, 175, 9, 1)",
        "rgba(40, 194, 112, 1)",
        "rgba(253, 93, 161, 1)",
        "rgba(118, 105, 191, 1)",
        "rgba(18, 67, 69, 1)",
        "rgba(156, 162, 174, 1)",
        "rgba(79, 151, 241, 1)",
        "rgba(255, 199, 0, 1)",
        "rgba(40, 194, 129, 1)",
        "rgba(253, 93, 142, 1)",
        "rgba(127, 105, 191, 1)",
        "rgba(37, 43, 53, 1)",
        "rgba(156, 165, 174, 1)",
        "rgba(77, 183, 240, 1)",
        "rgba(255, 156, 16, 1)",
        "rgba(40, 194, 99, 1)",
        "rgba(253, 92, 173, 1)",
        "rgba(110, 105, 191, 1)",
        "rgba(59, 30, 54, 1)",
        "rgba(162, 155, 175, 1)",
        "rgba(116, 76, 242, 1)",
        "rgba(154, 240, 37, 1)",
        "rgba(43, 158, 195, 1)",
        "rgba(253, 152, 89, 1)",
        "rgba(182, 105, 191, 1)",
        "rgba(55, 52, 33, 1)",
        "rgba(155, 170, 174, 1)",
        "rgba(74, 225, 239, 1)",
        "rgba(255, 100, 28, 1)",
      ],
      lighterColors: [
        "#c7e2f4",
        "#fce4b6",
        "#bee9cd",
        "#fbcadc",
        "#d3cfe5",
        "#b6c3c1",
        "#dedfe0",
        "#c7dcf4",
        "#fcebb6",
        "#bee9d3",
        "#fbcbd7",
        "#d5cfe5",
        "#bbbcbc",
        "#dee0e0",
        "#c7e6f4",
        "#fcddb7",
        "#bee9ca",
        "#fbcae0",
        "#d1cfe5",
        "#c1b8bc",
        "#e0dde0",
        "#d2c7f4",
        "#ddf7bb",
        "#bedee7",
        "#fbdcc8",
        "#e6cee5",
        "#c0beb6",
        "#dee1e0",
        "#c7f2f3",
        "#fccdb7",
      ],
      tabQnaQuestion: { TOP: 1, NEW: 2, ANSWERED: 3, MY_QUESTIONS: 4 },
      stoppedSendingToGoogleTagEvents: ["audience_signup", "audience_login"],
      TRACKING_SAMPLE_RATE: 0.05,
      maxInputLength: s,
    };
  },
  d709: function (e) {
    e.exports = {
      popupNextSlide: "El presentador ha cambiado la diapositiva.",
      goToSlideButton: "Ir a la diapositiva",
      cancelButton: "Cancelar",
      stopSubmission: "Espere a que el presentador lo abra.",
      waitingScreen:
        "Espere a que el presentador muestre la próxima diapositiva.",
      thankScreen: "¡Gracias por su participación!",
      blankSlide:
        "Aún no hay contenido en esta diapositiva. Espera a que tu presentador agregue algo.",
      submitMultipleTimes: "Puedes enviar varias veces.",
      "open-endedInstructionSubmission":
        "¡Gracias por su aporte! Puede enviar otro si lo desea.",
      multipleChoiceInstruction: "Puedes elegir hasta",
      options: "opciones",
      choicesLeft: "opciones más",
      powerBy: "AhaSlides",
      term: "Términos",
      submissionClosedButton: "Presentación cerrada",
      submit: "Enviar",
      exitAndVote: "Salga y vote en otra presentación.",
      nextSlideButton: "Siguiente diapositiva",
      disconnectError:
        "Hubo un problema al conectarse al servidor. ¡Inténtalo de nuevo!",
      slideQRCodeAudience:
        "Te has unido con éxito. Puedes mostrar el código QR a continuación a los que te rodean para que también puedan unirse.",
      openendedSubmissionFail:
        "No puede ser enviado. Por favor, compruebe la conexión y vuelva a intentarlo.",
      watchVideo: "Mire el video en la pantalla del presentador.",
      addSpecialCharacter: "Por favor no agregue caracteres especiales",
      answerWithSpace:
        "Las respuestas con espacios se considerarán como una palabra.",
      nextButton: "Siguiente",
      skipButton: "Pase a la siguiente diapositiva",
      audiencePacingWaitingScreen: "Ya has respondido esta pregunta.",
      enterWordPlaceholder: "Ingresa una palabra..",
      errorWordCloudWhenLeaveBlank: "Por favor ingrese su palabra.",
      enterYourName: "Introduzca su nombre",
      getReady: "Prepárate para jugar!",
      chooseEmoji: "Elige un emoji como tu avatar",
      changeButton: "Cambiar avatar..",
      joinTheGameButton: "Unirse al juego!",
      fasterGetMorePointsRule:
        "Esta pregunta recompensa más puntos por respuestas rápidas",
      correctAnswerGetMaxPointTitle: "Responde antes de que se acabe el tiempo",
      correctAnswerGetMaxPointDetail:
        "(Sin puntos de bonificación por respuestas más rápidas)",
      quizIsNotOpen:
        "El cuestionario no está abierto. Espere a que el presentador lo inicie.",
      reloadTextLink: "Recargar",
      numberQuestionOfQuiz: "Pregunta {msg} de {num}",
      runOutOfTime: "Oh no, te has quedado sin tiempo.",
      correctAnswer: "¡Correcta!",
      youHaveWonPoint: "¡Has ganado {msg} punto por esta pregunta",
      youAnsweredIn: "¡Respondiste en {msg} (Quedan {num})!",
      waitAndSeeHowYouDid: "Vamos a esperar y ver cómo se hizo...",
      wrongAnswer: "¡Respuesta incorrecta!",
      minute: "minuto",
      minutes: "minutos",
      seconds: "segundos",
      players: "{msg} jugadores",
      timesUp: "¡El tiempo se acabo!",
      youAreInPlace: "Estás en el lugar {msg} de {msg1} jugadores",
      points: "puntos",
      noResultYet: "Aún no hay resultados",
      pointShortcut: "p",
      youHaveWonPoints: "¡Has ganado {msg} puntos por esta pregunta",
      closeAvatar: "Cerrar",
      alreadyAnswer: "Ya has respondido esta pregunta.",
      yourTotalScoreIs: "Tu puntaje total es {msg}",
      betterLuckNextTime: "Mejor suerte la próxima vez!",
      clickToSeeFullSize:
        "Haga clic en cada imagen para verla en tamaño completo.",
      answeredQuestions: "Ya respondido",
      askQuestionButton: "Haz una pregunta",
      qnaQuestionPlaceholder: "Escribe tu pregunta aqui...",
      enterYourNameOptional: "Tu nombre.. (opcional)",
      topQuestionsAudience: "Top",
      newQuestionsAudience: "Nuevo",
      enterYourNameWarning: "Por favor, escriba su nombre.",
      enterQuestionWarning: "Por favor ingrese su pregunta.",
      yourNamePlaceholder: "Tu nombre.. (requerido)",
      finishButton: "Terminar",
      quizYouMustPickAll: "Debes elegir todas las respuestas correctas.",
      tryingReconnect: "Intentando reconectarse ...",
      ignoreButton: "Ignorar",
      establishConnection:
        "No se pudo establecer una conexión estable. Intenta volver a cargar esta página.",
      partiallyCorrect: "Parcialmente corregido",
      youCanPickAnyCorrectAnswer:
        "Puede elegir cualquiera de las respuestas correctas.",
      mustNotPickIncorrectAnswer:
        "Elige tantas respuestas correctas como puedas, pero no debes elegir ninguna respuesta incorrecta.",
      mandatoryFieldError: "Este campo es obligatorio.",
      typeYourAnswer: "Escribe tu respuesta...",
      noCorrectAnswer: "No hay una respuesta correcta.",
      presentationIsNotOpen:
        "Esta presentación está en modo privado. Una vez que el presentador haya cambiado al modo público, podrá ver e interactuar con sus diapositivas.",
      invalidEmail: "Email inválido.",
      pickYourTeam: "Elija su equipo:",
      teamIsFull: "Este equipo está lleno, por favor elija otro.",
      changeTeam: "cambiar equipo",
      youHaveWonPointForTeam: "Has ganado {msg} punto para tu equipo.",
      youHaveWonPointsForTeam: "Has ganado {msg} puntos para tu equipo.",
      yourAnswerNotCount: "Tu respuesta no contó.",
      hasAlreadyAnswered: "{msg} ya ha respondido.",
      yourTeamWonPoint: "Tu equipo ha ganado {msg} punto.",
      yourTeamWonPoints: "Tu equipo ha ganado {msg} puntos.",
      noOneAnsweredInTime: "Nadie más en su equipo respondió a tiempo.",
      yourTeamInPlaceTeams:
        "Su equipo está en el {msg} lugar de {num} equipos.",
      yourTeamScoreIs: "La puntuación de su equipo es {msg}",
      yourFinalScoreIs: "Tu puntuación final es {msg}.",
      youAreIn: "Estás en el {msg}",
      congratulations: "Felicidades",
      team: "equipo",
      teams: "equipos",
      "I just finished a super fun quiz on AhaSlides":
        "Acabo de terminar un cuestionario súper divertido en AhaSlides",
      "Post to {msg}": "Publicar en {msg}",
      numberQuestionOfQuizCompleted: "Pregunta {msg} de {num} completada",
      seeSlideOnPresenterScreen:
        "Consulte las diapositivas en la pantalla del presentador.",
      "Show Individual Ranking": "Mostrar clasificación individual",
      "Show Team Ranking": "Mostrar clasificación del equipo",
      Skip: "Saltar",
      playAudioNow: "Reproduzca la pista de audio ahora",
      youMissedCorrectAnswer: "Te perdiste {msg} respuesta correcta.",
      youMissedCorrectAnswers: "Te perdiste {msg} respuestas correctas.",
      youPickedCorrectAnswers: "Elegiste {msg} de {num} respuestas correctas.",
      youWereFastestInTeam: "Eras el más rápido de tu equipo.",
      yourTeamWonPointTotal:
        "En total de esta pregunta, tu equipo ha ganado {msg} punto",
      yourTeamWonPointsTotal:
        "En total de esta pregunta, tu equipo ha ganado {msg} puntos",
      alsoAccepted: "Tambien aceptado",
      youScoredPoints: "Obtuvo {msg} puntos.",
      youScoredPointsForYourTeam: "Obtuvo {msg} puntos para su equipo.",
      youScoredPointForYourTeam: "Obtuvo {msg} punto para su equipo.",
      youScoredPoint: "Obtuviste {msg} punto.",
      submitted: "Enviado",
      correctAnswerTitle: "Respuesta correcta",
      enjoyThisPresentationFooterBanner:
        "Disfrutar de esta presentación? Involucrar a su propio público de forma gratuita en AhaSlides.",
      letsGoFooterBanner: "Vamos",
      getStartedWithAhaSlides: "Comienza con AhaSlides",
      makeFreeQuiz: "Haga su propio concurso libre",
      waitToSpinTheWheel: "¡Espera a que el presentador gire la rueda!",
      theWheelSpinning:
        "La rueda está girando, mire la pantalla del presentador.",
      resultsAreIn: "El turno es para…",
      myQuestions: "Mis preguntas",
      writeYourIdea: "Escribe tu idea ...",
      allTab: "Vse",
      mySubmissionTab: "Mis presentaciones",
      votedTab: "votar",
      canUnvote: "Puedes anular el voto si quieres.",
      voteLeft: "Te queda {msg} voto.",
      votingClosed: "Votación cerrada.",
      startVoting: "Empezar a votar",
      seeResult: "Ver resultado",
      votesLeft: "Te quedan {msg} votos.",
      submissions: "idea(s)",
      youCanSubmitOnce: "Puedes enviar una vez.",
      eachCanOnlySubmitOnce: "Cada participante solo puede enviar una vez.",
      maxExceededCannotSubmit:
        "Se excedió el límite máximo. Ya no puede enviar.",
      youHaveMade: "Has hecho",
      noneOptionsCorrect: "Ninguna de las opciones son correctas!",
      changeImage: "Cambiar imagen",
      remove: "Quitar",
      uploadImage: "Cargar imagen",
      joinNow: "Únete ahora",
      dragAndDropStatements:
        "Arrastra y suelta las declaraciones para hacer orden.",
      seeCorrectAnswer: "Ver respuesta correcta",
      seeYourAnswer: "Ver tu respuesta",
      startTheConversation: "Empieza una conversación!",
      noChatMessagesYet: "Aún no hay mensajes de chat. ",
      questionWillStartSoon: "El cuestionario comenzará pronto.",
      typeSomethingToSayHi: "¡Escribe algo para romper el hielo!",
      quizCompleted: "Cuestionario Finalizado!",
      shareThisOn: "Comparte esto en",
      thisQuizWasMadeBy: "Este juego de preguntas fue creado por {name}",
      dontForgetToShowSupport: "Por favor, no olvide mostrar su apoyo.",
      amazing: "Asombroso!",
      greatWork: "¡Gran trabajo!",
      goodJob: "¡Buen trabajo!",
      wow: "¡Guau!",
      whatAPerformance: "¡Qué actuación!",
      nicelyDone: "¡Bien hecho!",
      outOfQuestionsYou: "De {number} de preguntas, usted",
      youFinishedInThe: "Has terminado entre",
      gotCorrectRate: "obtuve {number} de respuesta correcta",
      topPercentage: "el {number}%",
      ofAllPlayers: "de todos los jugadores",
      toughQuizRight: "Una prueba difícil, ¿verdad?",
      outOfQuestionsYourTeam: "De {number} de preguntas, su equipo",
      yourTeamFinishedInThe: "Tu equipo terminó en el",
      ofAllTeams: "de todos los equipos",
      haventAnsweredAnyQuiz:
        "No has respondido ninguna pregunta del cuestionario.",
      teamHasntAnsweredAnyQuiz:
        "Su equipo no ha respondido ninguna pregunta del cuestionario.",
      you: "usted",
      enterYourMessage: "Escriba su mensaje...",
      hasLeft: "se ha ido",
      hasJoined: "se ha unido",
      "Match with...": "Juntar con...",
      orTryToReload:
        "O intente <a class='link-reload' @click='reloadPage()'>recargar</a>",
      "Or try to": "O intente",
      audienceSeeContent: "Por favor, mire la pantalla del presentador.",
      "Let me in": "Déjame entrar",
      "Presenter is calling…": "El presentador está llamando…",
      Accept: "Aceptar",
      Decline: "Rechazar",
      "Enter your authentication code": "Ingrese su código de autenticación",
      "Make a free quiz": "Crea un cuestionario gratis",
      "Enjoy this presentation?": "¿Disfrutaste de esta presentación?",
      "Get slides": "Obtener las diapositivas",
      "Not bad": "No malo",
      Good: "Bueno",
      "Leave feedback...": "Deja un comentario. Es privado...",
      "Could be better": "Podría ser mejor",
      "Can't wait for the next": "No puedo esperar al siguiente",
      "Feedback sent!": "Comentarios enviados!",
      "Something went wrong, please try again.":
        "Algo salió mal. Por favor, vuelva a intentarlo.",
      "How's the presentation?": "¿Cómo es la presentación?",
      Send: "Enviar",
      Tutorials: "Tutoriales",
      teamEarnsPointAverage: "Tu equipo gana en promedio <b>{point}p</b>.",
      teamFastestAnswerIncorrect:
        "La respuesta más rápida era incorrecta, tu equipo gana <b>{point}p</b>.",
      teamFastestAnswerGetPoint:
        "Fuiste el más rápido, tu equipo gana <b>{point}p</b>.",
      "💪 Keep up the great work!": "💪 ¡Sigue con el buen trabajo!",
      teamEarnsPointTotal: "Tu equipo ha ganado <b>{point}p</b> en total.",
      teamEarnsPointFastest:
        "Tu equipo gana <b>{point}p</b> gracias a <b>{audienceName}</b>.",
      "Lose streak!": "¡Inténtalo!",
      Correct: "Genial!",
      "Double streak!": "Increíble!",
      "Triple streak!": "Excelente!",
      "Four Streak!": "Impresionante!",
      "Awesome!": "Fantástico!",
      "Keep going!": "Espectacular!",
      "Amazing!": "Gran trabajo!",
      "Good job!": "Maravilloso!",
      Incorrect: "¡Incorrecto!",
      my_answers: "Mis respuestas",
      view_answers: "Ver respuestas",
      final_leaderboard: "Tabla de líderes final",
      final_answers_stat:
        "Tienes <strong>{correctAnswers} / {totalQuiz} correctas</strong> ({correctRate}%)",
      final_ranking: "Posición: <strong>{ranking}</strong>",
      your_answer: "Tu respuesta",
      review_all_questions:
        "Puedes revisar todas las preguntas aquí cuando termine el quiz.",
      not_answer: "No respondiste",
      your_answer_correct: "Tu respuesta es correcta",
      your_answer_incorrect: "Tu respuesta es incorrecta",
      your_answer_partially_correct: "Su respuesta es parcialmente correcta",
      you_missed_quiz: "Acabas de perderte el cuestionario.",
      leaderboard: "Clasificación",
      personal_no_quiz_answered: "No has respondido a ningún quiz",
      team_no_quiz_answered: "Tu equipo no ha respondido a ningún quiz",
      final_team_answers_stat:
        "Tu equipo ha respondido correctamente <strong>{correctAnswers} / {totalQuiz} preguntas</strong> ({correctRate}%)",
      all_slides: "Todas las diapositivas",
      review_slides: "Revisar diapositivas",
      view_all_slides_answers: "Ver todas las diapositivas y respuestas",
      review_all_slides_and_questions:
        "Puedes revisar todas las diapositivas y preguntas cuando la presentación termine.",
      no_answer: "Sin respuesta",
      sign_in_to_save_presentation:
        "Inicia sesión para guardar esta presentación",
      continue_with_google: "Continuar con Google",
      present_with_ahaslides: "Presentar con AhaSlides",
      view_terms: "Ver términos",
      log_out: "Cerrar sesión",
      attended: "Asistido",
      your_future_presentations_shown_here:
        "Sus próximas presentaciones se mostrarán aquí",
      join_a_presentation: "Unirse a una presentación",
      presentation_details: "Detalles de la presentación",
      "Leaving the presentation": "Abandonando la presentación",
      "This link will take you to a page that is not part of the presentation":
        "Este enlace te llevará a una página que no forma parte de la presentación",
      thank_for_participation: "¡Gracias por tu participación! ❤️",
      give_feedback: "Dar feedback",
      get_ahaslides_free: "Obtén AhaSlides gratis",
      exclusive_offer_hr_tech: "Oferta exclusiva para HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ ¡Obtén AhaSlides Plus gratis! ✨",
      ask_presenter_to_view_slides:
        "Por favor, solicita permiso a tu presentador para ver las diapositivas.",
      login: "Iniciar sesión",
      sign_up: "Registrarse",
      or: "o",
      Reload: "Recargar",
      "No internet. Retrying...": "Sin internet. Reintentando...",
    };
  },
  d800: function (e, t, n) {
    "use strict";
    n("96cf");
    var a = n("3b8d"),
      i = n("2b0e"),
      o = n("db49"),
      r = null,
      s = {
        sendMessage: {
          method: "POST",
          url: "".concat(o["a"].baseUrl, "/api/chat/messages"),
        },
      },
      u = function () {
        r = i["default"].resource("", {}, s);
      },
      c = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r.sendMessage(t);
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    t["a"] = { initResource: u, sendMessage: c };
  },
  db49: function (e, t, n) {
    "use strict";
    var a = "https://audience.ahaslides.com",
      i = "https://audience.ahaslides.com",
      o = "https://audience.ahaslides.com",
      r = "47586541",
      s = "https://audience.ahaslides.com",
      u = "GTM-PMZC62P",
      c = Object({
        NODE_ENV: "production",
        VUE_APP_GOOGLE_AUTH_CLIENT_ID:
          "964433801264-b9f2vvjai2sfrufhfr5h55vbsj6cbvg8.apps.googleusercontent.com",
        VUE_APP_IS_SENTRY_ENABLED: "true",
        VUE_APP_SENTRY:
          "https://10062d94a2d64bca8fa416cb41874eca@o241386.ingest.sentry.io/5492900",
        VUE_APP_LIVE_API_BASEURL: "https://audience.ahaslides.com",
        VUE_APP_BASEURL: "https://audience.ahaslides.com",
        VUE_APP_BASEURLSOCKET: "https://audience.ahaslides.com",
        VUE_APP_PRESENTERURL: "https://presenter.ahaslides.com",
        VUE_APP_LIVE_PROXY_URL: "https://audience.ahaslides.com",
        VUE_APP_AHA_SYNC_URL: "https://audience.ahaslides.com",
        VUE_APP_AUDIENCERURL: "https://audience.ahaslides.com",
        VUE_APP_ENV: "production",
        VUE_APP_AWSRURL: "https://dpttlcqctc0a1.cloudfront.net/",
        VUE_APP_DOMAIN: "audience.ahaslides.com",
        VUE_APP_FILESTACK_API_KEY: "A2zVePVKuQ9TuwuANhWPQz",
        VUE_APP_FILESTACK_BUCKET: "static.ahaslides.com",
        VUE_APP_FILESTACK_REGION: "us-east-1",
        VUE_APP_MIXPANEL_PROJECT_TOKEN: "4c51563e79ee9579a57c1818c1368ec6",
        VUE_APP_MIXPANEL_PROXY_URL: "https://mt.ahaslides.com",
        VUE_APP_OPENTOK_KEY: "47586541",
        VUE_APP_GTM_ID: "GTM-PMZC62P",
        VUE_APP_UNLEASH_CLIENT_KEY:
          "*:production.60b88251a9c5d132f871e7b96d208e7acedd31831d6c4c2dea469f84",
        VUE_APP_MQTT_BROKER_URL: "wss://mqtt.ahaslides.com:443/mqtt",
        VUE_APP_LIVESTATS_TOPIC_PREFIX: "livestats-default-prd-us01",
        VUE_APP_GIT_COMMIT: "586592bb1ca72f01bbbd3ea9bb469f800f9fdf14",
        BASE_URL: "https://audience.ahaslides.com/",
      }).VUE_APP_UNLEASH_ENDPOINT;
    t["a"] = {
      baseUrl: a,
      liveProxyUrl: "https://audience.ahaslides.com",
      isLiveProxyUrlSet: !0,
      kvSyncApiUrl: o,
      baseUrlLiveApi: i,
      region:
        Object({
          NODE_ENV: "production",
          VUE_APP_GOOGLE_AUTH_CLIENT_ID:
            "964433801264-b9f2vvjai2sfrufhfr5h55vbsj6cbvg8.apps.googleusercontent.com",
          VUE_APP_IS_SENTRY_ENABLED: "true",
          VUE_APP_SENTRY:
            "https://10062d94a2d64bca8fa416cb41874eca@o241386.ingest.sentry.io/5492900",
          VUE_APP_LIVE_API_BASEURL: "https://audience.ahaslides.com",
          VUE_APP_BASEURL: "https://audience.ahaslides.com",
          VUE_APP_BASEURLSOCKET: "https://audience.ahaslides.com",
          VUE_APP_PRESENTERURL: "https://presenter.ahaslides.com",
          VUE_APP_LIVE_PROXY_URL: "https://audience.ahaslides.com",
          VUE_APP_AHA_SYNC_URL: "https://audience.ahaslides.com",
          VUE_APP_AUDIENCERURL: "https://audience.ahaslides.com",
          VUE_APP_ENV: "production",
          VUE_APP_AWSRURL: "https://dpttlcqctc0a1.cloudfront.net/",
          VUE_APP_DOMAIN: "audience.ahaslides.com",
          VUE_APP_FILESTACK_API_KEY: "A2zVePVKuQ9TuwuANhWPQz",
          VUE_APP_FILESTACK_BUCKET: "static.ahaslides.com",
          VUE_APP_FILESTACK_REGION: "us-east-1",
          VUE_APP_MIXPANEL_PROJECT_TOKEN: "4c51563e79ee9579a57c1818c1368ec6",
          VUE_APP_MIXPANEL_PROXY_URL: "https://mt.ahaslides.com",
          VUE_APP_OPENTOK_KEY: "47586541",
          VUE_APP_GTM_ID: "GTM-PMZC62P",
          VUE_APP_UNLEASH_CLIENT_KEY:
            "*:production.60b88251a9c5d132f871e7b96d208e7acedd31831d6c4c2dea469f84",
          VUE_APP_MQTT_BROKER_URL: "wss://mqtt.ahaslides.com:443/mqtt",
          VUE_APP_LIVESTATS_TOPIC_PREFIX: "livestats-default-prd-us01",
          VUE_APP_GIT_COMMIT: "586592bb1ca72f01bbbd3ea9bb469f800f9fdf14",
          BASE_URL: "https://audience.ahaslides.com/",
        }).VUE_APP_REGION || "gb",
      env: "production",
      sentry:
        "https://10062d94a2d64bca8fa416cb41874eca@o241386.ingest.sentry.io/5492900",
      sentryRelease: "586592bb1ca72f01bbbd3ea9bb469f800f9fdf14",
      domain: "audience.ahaslides.com",
      awsUrl: "https://dpttlcqctc0a1.cloudfront.net/",
      rtcUrl: Object({
        NODE_ENV: "production",
        VUE_APP_GOOGLE_AUTH_CLIENT_ID:
          "964433801264-b9f2vvjai2sfrufhfr5h55vbsj6cbvg8.apps.googleusercontent.com",
        VUE_APP_IS_SENTRY_ENABLED: "true",
        VUE_APP_SENTRY:
          "https://10062d94a2d64bca8fa416cb41874eca@o241386.ingest.sentry.io/5492900",
        VUE_APP_LIVE_API_BASEURL: "https://audience.ahaslides.com",
        VUE_APP_BASEURL: "https://audience.ahaslides.com",
        VUE_APP_BASEURLSOCKET: "https://audience.ahaslides.com",
        VUE_APP_PRESENTERURL: "https://presenter.ahaslides.com",
        VUE_APP_LIVE_PROXY_URL: "https://audience.ahaslides.com",
        VUE_APP_AHA_SYNC_URL: "https://audience.ahaslides.com",
        VUE_APP_AUDIENCERURL: "https://audience.ahaslides.com",
        VUE_APP_ENV: "production",
        VUE_APP_AWSRURL: "https://dpttlcqctc0a1.cloudfront.net/",
        VUE_APP_DOMAIN: "audience.ahaslides.com",
        VUE_APP_FILESTACK_API_KEY: "A2zVePVKuQ9TuwuANhWPQz",
        VUE_APP_FILESTACK_BUCKET: "static.ahaslides.com",
        VUE_APP_FILESTACK_REGION: "us-east-1",
        VUE_APP_MIXPANEL_PROJECT_TOKEN: "4c51563e79ee9579a57c1818c1368ec6",
        VUE_APP_MIXPANEL_PROXY_URL: "https://mt.ahaslides.com",
        VUE_APP_OPENTOK_KEY: "47586541",
        VUE_APP_GTM_ID: "GTM-PMZC62P",
        VUE_APP_UNLEASH_CLIENT_KEY:
          "*:production.60b88251a9c5d132f871e7b96d208e7acedd31831d6c4c2dea469f84",
        VUE_APP_MQTT_BROKER_URL: "wss://mqtt.ahaslides.com:443/mqtt",
        VUE_APP_LIVESTATS_TOPIC_PREFIX: "livestats-default-prd-us01",
        VUE_APP_GIT_COMMIT: "586592bb1ca72f01bbbd3ea9bb469f800f9fdf14",
        BASE_URL: "https://audience.ahaslides.com/",
      }).VUE_APP_BASERTCURL,
      audienceUrl: "https://audience.ahaslides.com",
      presenterUrl: "https://presenter.ahaslides.com",
      baseUrlSocket: "https://audience.ahaslides.com",
      isSentryEnabled: !0,
      googleRedirect: "".concat(s, "/auth?provider=google"),
      googleClientId:
        "964433801264-b9f2vvjai2sfrufhfr5h55vbsj6cbvg8.apps.googleusercontent.com",
      filestack: {
        apiKey: "A2zVePVKuQ9TuwuANhWPQz",
        bucket: "static.ahaslides.com",
        region: "us-east-1",
      },
      mixpanel: {
        projectToken: "4c51563e79ee9579a57c1818c1368ec6",
        proxyUrl: "https://mt.ahaslides.com",
      },
      openTokKey: r,
      api: {
        googleSigninAudience: "".concat(a, "/api/auth/google/audience-google"),
        checkPresentation: "".concat(a, "/api/presentation/check/"),
        getPresentation: "".concat(a, "/api/presentation/audience/"),
        createAnswer: "".concat(a, "/api/answer/create/"),
        createOpenEndedOption: "".concat(
          a,
          "/api/slide-option/audience-create/"
        ),
        currentOrderVoice: "".concat(a, "/api/answer/voice-number/"),
        createActionWebrtc: "".concat(a, "/api/webrtc/"),
        listSlide: "".concat(
          a,
          "/api/presentation/audience-presentation-slide-list/"
        ),
        quizResult: "".concat(a, "/api/answer/quiz-result/"),
        slideQuizResult: "".concat(a, "/api/slide/quiz-result/"),
        joinPresentation: "".concat(a, "/api/presentation/join-presentation/"),
        createLeaderboard: "".concat(
          a,
          "/api/slide/audience-create-leaderboard/"
        ),
        asyncLeaderboard: "".concat(a, "/api/slide/async-create-leaderboard/"),
        getTimestamp: "".concat(a, "/api/quiz/get-time-stamp/"),
        getSlideQuizTimeStamp: "".concat(
          a,
          "/api/quiz/get-slide-quiz-time-stamp/"
        ),
        getNextSlide: "".concat(a, "/api/presentation/next-slide/"),
        createQuestion: "".concat(a, "/api/question/create/"),
        listQuestion: "".concat(a, "/api/question/list/"),
        voteQuestion: "".concat(a, "/api/question/vote/"),
        checkQuizTeamMember: "".concat(a, "/api/quiz/check-team-data/"),
        leaveQuizTeam: "".concat(a, "/api/quiz/leave-team/"),
        requestPresentation: "".concat(
          a,
          "/api/audiences/request-presentation/"
        ),
        updateTimeAudience: "".concat(
          a,
          "/api/audiences/update-time-audience/"
        ),
        audienceCheckAuthentication: "".concat(
          a,
          "/api/audience-authentication/check/"
        ),
        stopVideoCall: "".concat(a, "/api/webrtc/stop/"),
        sendFeedback: "".concat(a, "/api/question/private"),
      },
      roles: ["master", "admin", "presenter", "audience"],
      unleashEndpoint: c || "https://features.ahaslides.com/api/proxy",
      unleashClientKey:
        "*:production.60b88251a9c5d132f871e7b96d208e7acedd31831d6c4c2dea469f84",
      gtmId: u,
      mqttBrokerUrl: "wss://mqtt.ahaslides.com:443/mqtt",
      livestatsTopicPrefix: "livestats-default-prd-us01",
    };
  },
  e0bf: function (e) {
    e.exports = {
      popupNextSlide: "Prezentujcící změnil snímek.",
      goToSlideButton: "Přejít na snímek",
      cancelButton: "Zrušit",
      stopSubmission: "Počkejte, až jej otevřete prezentující.",
      waitingScreen: "Počkejte, až prezentující ukáže další snímek.",
      thankScreen: "Děkujeme za vaši účast!",
      blankSlide:
        "Na tomto snímku zatím není žádný obsah. Počkejte prosím, až váš prezentujcí něco přidá.",
      submitMultipleTimes: "Můžete odeslat několikrát.",
      "open-endedInstructionSubmission":
        "Děkujeme za váš příspěvek! Pokud chcete, můžete odeslat další.",
      multipleChoiceInstruction: "Můžete si vybrat až",
      options: "možnosti",
      choicesLeft: "zbývající možnosti",
      powerBy: "Ahaslides",
      term: "Podmínky",
      submissionClosedButton: "Odeslání ukončeno",
      submit: "Odeslat",
      exitAndVote: "Ukončit a hlasovat v jiné prezentaci",
      nextSlideButton: "Další snímek",
      disconnectError: "K serveru se nelze připojit. Zkuste to znovu!",
      slideQRCodeAudience:
        "Úspěšně jste se připojili. Níže uvedený QR kód můžete zobrazit ostatním kolem vás, aby se mohli také připojit.",
      openendedSubmissionFail:
        "Odelsání neúspěšné. Zkontrolujte prosím své připojení a zkuste to znovu.",
      watchVideo: "Podívejte se na video na obrazovce prezentujícího.",
      addSpecialCharacter: "Prosím, nepřidávejte žádné speciální znaky",
      answerWithSpace: "Odpovědi s mezerami budou považovány za jedno slovo.",
      nextButton: "Další snímek",
      skipButton: "Přeskočit na další snímek",
      audiencePacingWaitingScreen: "Na tuto otázku jste již odpověděli.",
      enterWordPlaceholder: "Zadejte slovo ..",
      errorWordCloudWhenLeaveBlank: "Zadejte své slovo.",
      enterYourName: "Zadejte své jméno",
      getReady: "Připravte se na hru!",
      chooseEmoji: "Vyberte si emoji jako svého avatara",
      changeButton: "Změnit avatara …",
      joinTheGameButton: "Připojte se ke hře!",
      fasterGetMorePointsRule:
        "Za tuto otázku získáte více bodů za rychlost správné odpovědi",
      correctAnswerGetMaxPointTitle: "Odpovězte předtím, než vyprší čas",
      correctAnswerGetMaxPointDetail:
        "(Žádné bonusové body za rychlejší odpovědi)",
      quizIsNotOpen:
        "Kvíz ještě není otevřený. Počkejte prosím, až to ho spustí prezentující.",
      reloadTextLink: "Načíst znovu",
      numberQuestionOfQuiz: "Otázka {msg} z {num}",
      runOutOfTime: "Ale ne, vypršel vám čas.",
      correctAnswer: "Správně!",
      youHaveWonPoint: "Za tuto otázku jste získali {msg} bod",
      youAnsweredIn: "Odpověděli jste v {msg} ({num} zbývá)!",
      waitAndSeeHowYouDid: "Počkejte a uvidíme, jak jste si vedli ...",
      wrongAnswer: "Špatná odpověď!",
      minute: "minuta",
      minutes: "minuty",
      seconds: "sekundy",
      players: "{MSG} hráčů",
      timesUp: "Čas vypršel!",
      youAreInPlace: "Máte {msg}. místo z {msg1} hráčů ",
      points: "body",
      noResultYet: "Zatím není žádný výsledek",
      pointShortcut: "str",
      youHaveWonPoints: "Za tuto otázku jste získali {msg} bodů",
      closeAvatar: "Zavřít",
      alreadyAnswer: "Na tuto otázku jste již odpověděli.",
      yourTotalScoreIs: "Vaše celkové skóre je {msg}",
      betterLuckNextTime: "Více štěstí přístě!",
      clickToSeeFullSize:
        "Kliknutím na každý obrázek jej zobrazíte v plné velikosti.",
      answeredQuestions: "Zodpovězené",
      askQuestionButton: "Položte otázku",
      qnaQuestionPlaceholder: "Zadejte svou otázku ...",
      enterYourNameOptional: "Vaše jméno .. (volitelné)",
      topQuestionsAudience: "Nejlepší",
      newQuestionsAudience: "Nové",
      enterYourNameWarning: "Zadejte své jméno.",
      enterQuestionWarning: "Zadejte prosím svou otázku.",
      yourNamePlaceholder: "Vaše jméno .. (požadováno)",
      finishButton: "Dokončit",
      quizYouMustPickAll: "Musíte si vybrat všechny správné odpovědi.",
      tryingReconnect: "Znovu se připjuji ...",
      ignoreButton: "Ignorovat",
      establishConnection:
        "Nemohu navázat spojení. Zkuste znovu načíst tuto stránku.",
      partiallyCorrect: "Částečně správné",
      youCanPickAnyCorrectAnswer:
        "Můžete si vybrat některou ze správných odpovědí.",
      mustNotPickIncorrectAnswer:
        "Vyberte si co nejvíce správných odpovědí, ale nesmíte vybrat žádnou nesprávnou odpověď.",
      mandatoryFieldError: "Toto pole je povinné.",
      typeYourAnswer: "Zadejte svou odpověď ...",
      noCorrectAnswer: "Neexistuje žádná správná odpověď.",
      presentationIsNotOpen:
        "Tato prezentace je v soukromém režimu. Jakmile to prezentující změní, můžete vidět snímky.",
      invalidEmail: "Neplatný e -mail.",
      pickYourTeam: "Vyberte si svůj tým:",
      teamIsFull: "Tento tým je plný, vyberte prosím jiný.",
      changeTeam: "cměnit tým",
      youHaveWonPointForTeam: "Získali jset pro svůj tým {msg} bod.",
      youHaveWonPointsForTeam: "Získali jset pro svůj tým {msg} bodů.",
      yourAnswerNotCount: "Vaše odpověď se nepočítala.",
      hasAlreadyAnswered: "{msg} již odpověděl.",
      yourTeamWonPoint: "Váš tým skóroval {msg} bod.",
      yourTeamWonPoints: "Váš tým získal {msg} bodů.",
      noOneAnsweredInTime: "Nikdo jiný ve vašem týmu neodpověděl včas.",
      yourTeamInPlaceTeams: "Váš tým je na {msg}. místě z {num} týmů.",
      yourTeamScoreIs: "Skóre vašeho týmu je {msg}",
      yourFinalScoreIs: "Vaše celkové skóre je {msg}.",
      youAreIn: "Jste v {msg}",
      congratulations: "Gratuluji",
      team: "tým",
      teams: "týmy",
      "I just finished a super fun quiz on AhaSlides":
        "Právě jsem dokončil super zábavný kvíz na Ahaslides",
      "Post to {msg}": "Poslat na {msg}",
      numberQuestionOfQuizCompleted: "Otázka {msg} z {num} dokončena",
      seeSlideOnPresenterScreen:
        "Podívejte se na snímky na obrazovce prezentujícího.",
      "Show Individual Ranking": "Zobrazit individuální hodnocení",
      "Show Team Ranking": "Zobrazit hodnocení týmu",
      Skip: "Přeskočit",
      playAudioNow: "Přehrajte nyní  zvukovou stopu, prosím",
      youMissedCorrectAnswer: "Nezvládli jste {msg} správnou odpověď.",
      youMissedCorrectAnswers: "Nezvládli jste {msg} správných odpovědí.",
      youPickedCorrectAnswers: "Vybrali jste {msg} z {num} správných odpovědí.",
      youWereFastestInTeam: "Byl jsi nejrychlejší ve svém týmu.",
      yourTeamWonPointTotal: "Celkem za tuto otázku váš tým získal {msg} bodů",
      yourTeamWonPointsTotal: "Celkem za tuto otázku získal váš tým {msg} bodů",
      alsoAccepted: "Také přijato",
      youScoredPoints: "Získali jste {msg} bodů.",
      youScoredPointsForYourTeam: "Získali jset pro svůj tým {msg} bodů.",
      youScoredPointForYourTeam: "Získali jset pro svůj tým {msg} bod.",
      youScoredPoint: "Získal jste {msg} bod.",
      submitted: "Odesláno",
      correctAnswerTitle: "Správná odpověď",
      enjoyThisPresentationFooterBanner:
        "Užíváte si tuto prezentaci? Zapojte své publikum zdarma na AhaSlides.",
      letsGoFooterBanner: "Jdeme na to",
      getStartedWithAhaSlides: "Začněte s AhaSlides",
      makeFreeQuiz: "Vytvořte si vlastní kvíz zdarma",
      waitToSpinTheWheel: "Počkejte, až prezentující roztočí kolo!",
      theWheelSpinning:
        "Kolo se otáčí, podívejte se prosím na obrazovku přednášejícího.",
      resultsAreIn: "Výsledky jsou …",
      myQuestions: "Moje otázky",
      writeYourIdea: "Napište svůj nápad ...",
      allTab: "Vše",
      mySubmissionTab: "Moje příspěvky",
      votedTab: "Hlasovalo",
      canUnvote: "Pokud chcete, můžete zrušit své hlasování.",
      voteLeft: "Zbývá vám {msg } hlasování.",
      votingClosed: "Hlasování je uzavřeno.",
      startVoting: "Začněte hlasovat",
      seeResult: "Podívejte se na výsledky",
      votesLeft: "Zbývá vám {msg } hlasování.",
      submissions: "hlasů",
      youCanSubmitOnce: "Můžete odeslat pouze jednou.",
      eachCanOnlySubmitOnce: "Každý účastník může odeslat pouze jednou.",
      maxExceededCannotSubmit:
        "Překročený maximální limit. Už nemůžete odeslat.",
      youHaveMade: "Získali jste",
      noneOptionsCorrect: "Žádná z možností není správná!",
      changeImage: "Změnit obrázek",
      remove: "Odstranit",
      uploadImage: "Nahrajte obrázek",
      joinNow: "Připojte se nyní",
      dragAndDropStatements: "Přetáhněte slova/věty do správného pořadí",
      seeCorrectAnswer: "Podívejte se na správnou odpověď",
      seeYourAnswer: "Podívejte se na vaši odpověď",
      startTheConversation: "Začněte konverzaci!",
      noChatMessagesYet: "Zatím nejsou v chatu žádné zprávy.",
      questionWillStartSoon: "Otázka začne brzy.",
      typeSomethingToSayHi: "Napište něco!",
      quizCompleted: "Kvíz dokončen!",
      shareThisOn: "Sdílejte to na",
      thisQuizWasMadeBy: "Tento kvíz připravil {name}",
      dontForgetToShowSupport: "Nezapomeňte ukázat svou podporu!",
      amazing: "Úžasné!",
      greatWork: "Skvělá práce!",
      goodJob: "Dobrá práce!",
      wow: "WOW!",
      whatAPerformance: "Úřasný výkon!",
      nicelyDone: "Pěkně hotovo!",
      outOfQuestionsYou: "Z {number} otázek, jste vy",
      youFinishedInThe: "Skončili jste ",
      gotCorrectRate: "odpověděl na {number} správné",
      topPercentage: "Top {number}%",
      ofAllPlayers: "ze všech hráčů",
      toughQuizRight: "Náročný kvíz, že?",
      outOfQuestionsYourTeam: "Z {number} otázek, váš tým",
      yourTeamFinishedInThe: "Váš tým skončil na ",
      ofAllTeams: "ze všech týmů",
      haventAnsweredAnyQuiz: "Neodpověděli jste na žádnou kvízovou otázku.",
      teamHasntAnsweredAnyQuiz:
        "Váš tým neodpověděl na žádnou kvízovou otázku.",
      you: "Vy",
      enterYourMessage: "Zadejte svou zprávu ...",
      hasLeft: "odešel",
      hasJoined: "se připojil",
      "Match with...": "Shodovat se s ...",
      "Or try to": "Nebo zkuste",
      audienceSeeContent: "Podívejte se na snímky na obrazovce prezentujícího.",
      "Enter your authentication code": "Zadejte svůj ověřovací kód",
      "Let me in": "Pusť mě dovnitř",
      "Make a free quiz": "Udělejte si kvíz zdarma",
      "Enjoy this presentation?": "Užíváte si tuto prezentaci?",
      "Get slides": "Získejte snímky",
      "Presenter is calling…": "Prezentujcící volá…",
      Accept: "Přijmout",
      Decline: "Odmítnout",
      "Leave feedback...": "Zanechat zpětnou vazbu ...",
      "Not bad": "Není to špatné",
      Good: "Dobré",
      "Can't wait for the next": "Nemohu se dočkat další",
      "Feedback sent!": "Zpětná vazba odeslána!",
      "Something went wrong, please try again.":
        "Něco se pokazilo, zkuste to prosím znovu.",
      "Could be better": "Mohlo by to být lepší",
      "How's the presentation?": "Jaká je prezentace?",
      Send: "Poslat",
      Tutorials: "Návody",
      teamEarnsPointTotal: "Váš tým získal celkem <b> {point} bodů </b>.",
      teamEarnsPointAverage: "Váš tým v průměru získal <b> {point} bodů </b>.",
      teamEarnsPointFastest:
        "Váš tým získal <b> {point} bodů </b> díky <b> {audiencename} </b>.",
      teamFastestAnswerIncorrect:
        "Nejrychlejší odpověď byla nesprávná, váš tým vydělává <b> {point} p </b>.",
      teamFastestAnswerGetPoint:
        "Byl jsi nejrychlejší, váš tým získal  <b> {point} bodů </b>.",
      "💪 Keep up the great work!": "💪 Pokračujte ve skvělé práci!",
      "Lose streak!": "Ale ne, nesprávná odpověď!",
      Correct: "Správně!",
      "Double streak!": "Dvě v řadě!",
      "Triple streak!": "To jsou tři v řadě!",
      "Four Streak!": "Fantastická čtyřka!",
      "Awesome!": "Nádherné!",
      "Keep going!": "Pokračujte!",
      "Amazing!": "Úžasné!",
      "Good job!": "Dobrá práce!",
      Incorrect: "Nesprávně",
      my_answers: "Moje odpovědi",
      view_answers: "Zobrazit odpovědi",
      final_leaderboard: "Celkový žebříček",
      final_answers_stat:
        "Máte <strong>{correctAnswers} / {totalQuiz} správně </strong> ({correctRate}%)",
      final_ranking: "Pořadí: <strong> {Ranking} </strong>",
      your_answer: "Vaše odpověď",
      review_all_questions:
        "Všechny otázky si můžete prohlédnout zde, až kvíz skončí.",
      not_answer: "Neodpověděl jste",
      your_answer_correct: "Vaše odpověď je správná",
      your_answer_incorrect: "Vaše odpověď je nesprávná",
      your_answer_partially_correct: "Vaše odpověď je částečně správná",
      you_missed_quiz: "Právě jste zmeškal kvíz.",
      leaderboard: "Žebříček",
      personal_no_quiz_answered: "Neodpověděl jste na žádný kvíz",
      team_no_quiz_answered: "Váš tým neodpověděl na žádný kvíz",
      final_team_answers_stat:
        "Váš tým má <strong>{correctAnswers} / {totalQuiz} správně </strong> ({correctRate}%)",
      all_slides: "Všechny snímky",
      review_slides: "Zkontrolujte snímky",
      review_all_slides_and_questions:
        "Všechny snímky a otázky si můžete prohlédnout po skončení prezentace.",
      no_answer: "Bez odpovědi",
      sign_in_to_save_presentation: "Přihlaste se pro uložení této prezentace",
      continue_with_google: "Pokračovat přes Google",
      present_with_ahaslides: "Prezentovat pomocí AhaSlides",
      view_terms: "Zobrazit podmínky",
      log_out: "Odhlásit se",
      attended: "Zúčastnil(a) se",
      your_future_presentations_shown_here:
        "Vaše budoucí prezentace se zobrazí zde",
      join_a_presentation: "Připojit se k prezentaci",
      presentation_details: "Podrobnosti o prezentaci",
      "Leaving the presentation": "Odchod z prezentace",
      "This link will take you to a page that is not part of the presentation":
        "Tento odkaz vás přesměruje na stránku mimo prezentaci",
      thank_for_participation: "Děkujeme za vaši účast! ❤️",
      give_feedback: "Zanechte zpětnou vazbu",
      get_ahaslides_free: "Získejte AhaSlides zdarma",
      exclusive_offer_hr_tech: "Speciální nabídka pro HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ Získejte AhaSlides Plus zdarma ✨",
      ask_presenter_to_view_slides:
        "Požádejte prezentujícího o oprávnění k zobrazení snímků.",
      login: "Přihlásit se",
      sign_up: "Zaregistrovat se",
      or: "nebo",
      "Calculating your ranking…": "Počítání vaše pořadí…",
      categorise_unassined_option: "Celkem nepřiřazených možností",
      Reload: "Načíst znovu",
      "No internet. Retrying...": "Bez připojení k internetu. Zkouším znovu...",
    };
  },
  e0eb: function (e, t, n) {
    "use strict";
    n("34ef"), n("af56");
    var a = n("bd86"),
      i = (n("456d"), n("6d67"), n("75fc")),
      o =
        (n("4f37"),
        n("4917"),
        n("6b54"),
        n("87b3"),
        n("28a5"),
        n("d25f"),
        n("57e7"),
        n("ac6a"),
        n("f3e2"),
        n("768b")),
      r =
        (n("55dd"),
        n("3b2b"),
        n("6762"),
        n("2fdb"),
        n("c5f6"),
        n("a481"),
        n("cebc")),
      s = n("7247"),
      u = n.n(s),
      c = n("d697"),
      d = n("db49"),
      l = n("2b0e"),
      p = n("7129"),
      m = n("7cde"),
      g =
        (n("14b9"),
        function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = e.toFixed(t);
          return 0 !== e && n && a === "0.".concat("0".repeat(t))
            ? parseFloat("0.".concat("0".repeat(t - 1), "1"))
            : parseFloat(a);
        }),
      h = g,
      b = n("578e"),
      v = n("b92b"),
      f = n("02c5"),
      w = n("5e38"),
      k = n.n(w),
      y = n("8724"),
      S = n.n(y),
      A = n("4360"),
      _ = n("308e"),
      T = n("c1df"),
      z = n.n(T),
      P = {
        getTimeStamp: function () {
          return parseInt(z()().utc().format("x"), 10);
        },
        getcurTimeStamp: function () {
          return (
            parseInt(z()().utc().format("x"), 10) - A["a"].state.offsetTime
          );
        },
      },
      j = void 0;
    function C() {
      if (d["a"].region !== c["a"].euRegion)
        try {
          window.dataLayer.push(arguments);
        } catch (e) {
          f["c"](e);
        }
    }
    var O = function () {
        var e = c["a"].emojis.length,
          t = Math.floor(Math.random() * e);
        return c["a"].emojis[t];
      },
      E = function (e) {
        v["a"].setTokenValue("ahaToken", e);
      };
    t["a"] = Object(r["a"])(
      {
        getCurrentSlideIndexFromUrl: function () {
          if (!window.location.hash) return 0;
          var e = window.location.hash.replace("#", "");
          return e <= 0 ? 0 : Number(e) - 1;
        },
        filterProfaneWords: function (e) {
          return A["a"].state.presentation &&
            A["a"].state.presentation.filteringProfanity
            ? Object(b["a"])(e)
            : e;
        },
        getRandomEmoji: O,
        trackGA4AndMixpanel: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "",
            a = arguments.length > 3 ? arguments[3] : void 0,
            i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : {};
          j.mixpanelTrack(e, t, n, a, i);
        },
        mixpanelTrack: function (e, t, n, a) {
          var i =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          _["a"].track(
            t,
            Object(r["a"])(
              { event_category: e, event_label: n, event_value: a },
              i
            )
          );
        },
        ga4Set: function (e, t) {
          C("set", e, t);
        },
        ga4Track: function (e, t) {
          var n = Object(r["a"])(
            { eventCategory: "Audience", eventAction: e },
            t
          );
          c["a"].stoppedSendingToGoogleTagEvents.includes(e) &&
            (n.send_to = d["a"].gtmId),
            C("event", e, n);
        },
        gaTrackPageView: function (e, t) {
          _["a"].track("Page View", { title: t });
        },
        getParamValue: function (e, t) {
          t || (t = window.location.href), (e = e.replace(/[\\[\]]/g, "\\$&"));
          var n = new RegExp("[?&]".concat(e, "(=([^&#]*)|&|#|$)")),
            a = n.exec(t);
          return a
            ? a[2]
              ? decodeURIComponent(a[2].replace(/\+/g, " "))
              : ""
            : null;
        },
        formatSlide: function (e) {
          e.SlideOptions || (e.SlideOptions = []),
            e.SlideOptions.sort(function (e, t) {
              return e.order - t.order;
            }),
            e.hints &&
              e.hints.length &&
              e.hints.sort(function (e, t) {
                return e.order - t.order;
              });
          for (var t = 0; t < e.SlideOptions.length; t++)
            if (
              e.SlideOptions[t].audience &&
              e.SlideOptions[t].audience === A["a"].state.audienceId
            ) {
              e.openEndedSubmited = !0;
              break;
            }
          if (e.answer && e.answer.vote.length) {
            var n = Object(o["a"])(e.answer.vote, 1);
            e.radioSelectded = n[0];
          }
          try {
            e.otherCorrectQuiz = JSON.parse(e.otherCorrectQuiz);
          } catch (a) {
            f["c"](a), (e.otherCorrectQuiz = []);
          }
          return e.otherCorrectQuiz || (e.otherCorrectQuiz = []), e;
        },
        isURL: function (e) {
          var t =
            /^(https?:\/\/)?([\w.-]+)(\.[a-z]{2,6})(:[\d]+)?(\/[\w .-]*)*\/?(\?[=&\w.%-]*)*$/;
          return t.test(e);
        },
        timeToString: function (e) {
          var t = new Date(1e3 * e),
            n = t.getUTCMinutes(),
            a = t.getSeconds();
          return (
            n < 10 && (n = "0".concat(n)),
            a < 10 && (a = "0".concat(a)),
            "".concat(n, ":").concat(a)
          );
        },
        checkCorrectAnswer: function (e, t) {
          var n = [],
            a = 0;
          return (
            t.forEach(function (e) {
              e.correct && n.push(e.id);
            }),
            e.length == n.length &&
              (e.forEach(function (e) {
                -1 !== n.indexOf(e) && a++;
              }),
              !(!a || a != n.length))
          );
        },
        enableAudienceAdmissionForm: function () {
          var e = A["a"].state.presentation,
            t = e.audienceAdmission,
            n = e.disableFormJoinPresentation,
            a = !1;
          return (
            !n &&
              t &&
              t.isAudienceAdmission &&
              t.fields &&
              t.fields.length &&
              t.fields.forEach(function (e) {
                "name" !== e.type || A["a"].state.audienceName || (a = !0),
                  "email" !== e.type || A["a"].state.audienceEmail || (a = !0),
                  "team" !== e.type || A["a"].state.audienceTeam || (a = !0);
              }),
            a
          );
        },
        getTimeCount: function (e, t) {
          var n = t.$t("seconds"),
            a = t.$t("minutes"),
            i = t.$t("minute"),
            o = Math.floor(e / 60),
            r = e % 60,
            s = "";
          return (
            o &&
              (s +=
                1 === o
                  ? "".concat(o, " ").concat(i, " ")
                  : "".concat(o, " ").concat(a, " ")),
            (s += "".concat(r.toFixed(2), " ").concat(n)),
            s
          );
        },
        setFontSlideV2: function (e) {
          var t = document.getElementById("middle-canvas");
          t && (t.style.fontFamily = e);
          var n = document,
            a = n.head,
            i = a.querySelectorAll('link[rel="stylesheet"]'),
            o = !1;
          if (
            (i.forEach(function (t) {
              t.href.includes(e) && (o = !0);
            }),
            !o)
          ) {
            var r = "https://fonts.googleapis.com/css?family=".concat(e),
              s = document.createElement("link");
            (s.href = r), (s.rel = "stylesheet"), document.head.appendChild(s);
          }
          document.body.style.fontFamily = e;
        },
        setFontSlide: function (e) {
          var t = c["a"].fonts[e],
            n = document.getElementsByTagName("head")[0],
            a = document.createElement("link");
          (a.type = "text/css"),
            (a.rel = "stylesheet"),
            (a.href = t.url),
            n.appendChild(a);
          var i = document.createElement("style");
          i.appendChild(
            document.createTextNode(
              "    @font-face {        font-family: "
                .concat(t.value, ";        src: url('")
                .concat(t.url, "');    }    ")
            )
          ),
            document.head.appendChild(i),
            (document.body.style.fontFamily = t.value);
        },
        getColorByStr: function (e) {
          var t =
              A["a"].getters[
                "presentationAttributeModule/presentationColorPalette"
              ],
            n = t.length,
            a = e.charCodeAt(0);
          return t[a % n];
        },
        updateDataQuestionAnswer: function (e, t) {
          1 === t &&
            e.sort(function (e, t) {
              return new Date(e.createdAt) - new Date(t.createdAt);
            }),
            2 === t &&
              e.sort(function (e, t) {
                return new Date(t.createdAt) - new Date(e.createdAt);
              }),
            1 === t &&
              e.sort(function (e, t) {
                return t.voteCount - e.voteCount;
              }),
            1 === t &&
              e.sort(function (e, t) {
                return t.pinned - e.pinned;
              }),
            3 === t &&
              e.sort(function (e, t) {
                return t.answeredTimestamp - e.answeredTimestamp;
              }),
            e.forEach(function (e) {
              e.answered && (e.status = "approved"),
                e.vote.includes(A["a"].state.audienceId) && (e.voted = !0);
            }),
            this._updateQnAQuestionCount(e),
            (A["a"].state.questions = e);
        },
        _updateQnAQuestionCount: function (e) {
          var t = A["a"].state.presentation.qnaAudienceShowAll,
            n = 0,
            a = [];
          (a = t
            ? e
            : e.filter(function (e) {
                return e.audience === A["a"].state.audienceId;
              })),
            (n = A["a"].state.presentation.isModerationMode
              ? a.filter(function (e) {
                  return "approved" === e.status;
                }).length
              : a.filter(function (e) {
                  return "dismissed" !== e.status;
                }).length),
            (A["a"].state.questionCount = n);
        },
        decrypt: function (e, t) {
          var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            a = u.a.utils.hex.toBytes(e),
            i = new u.a.ModeOfOperation.ctr(n, Number(t)),
            o = i.decrypt(a);
          return u.a.utils.utf8.fromBytes(o);
        },
        numberWithCommas: function (e) {
          return e.toLocaleString(A["a"].state.presentation.language);
        },
        hexToRgba: function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)) {
            var n = e.substring(1).split("");
            return (
              3 === n.length && (n = [n[0], n[0], n[1], n[1], n[2], n[2]]),
              (n = "0x".concat(n.join(""))),
              "rgba("
                .concat(
                  [(n >> 16) & 255, (n >> 8) & 255, 255 & n].join(","),
                  ", "
                )
                .concat(t, ")")
            );
          }
          return null;
        },
        changeRgbAlpha: function (e, t) {
          if (!e) return e;
          var n = /[\d\.]+\)$/g;
          return t && (e = e.replace(n, t)), e;
        },
        validateEmail: function (e) {
          var t =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return t.test(String(e).toLowerCase());
        },
        getAhaColor: function (e) {
          var t =
              A["a"].getters[
                "presentationAttributeModule/presentationColorPalette"
              ],
            n = e % t.length;
          return t[n];
        },
        checkWhiteLabelDomain: function () {
          return (
            "localhost" !== window.location.hostname &&
            -1 === window.location.hostname.indexOf(d["a"].domain)
          );
        },
        animateClass: function (e) {
          var t = e.animation,
            n = e.isInfinity,
            a = e.duration;
          return t
            ? "animate__animated animate__"
                .concat(t, " ")
                .concat(n ? "animate__infinite" : "", " ")
                .concat(a ? "animate__delay-".concat(a, "s") : "", " ")
            : null;
        },
        showToastSuccess: function (e, t, n) {
          e &&
            l["default"].toasted.success(e, {
              theme: "bubble",
              position: "bottom-right",
              className: t,
              action: n
                ? {
                    text: "",
                    onClick: function (e, t) {
                      t.goAway(0);
                    },
                  }
                : "",
            });
        },
        showToastInfo: function (e, t, n) {
          e &&
            l["default"].toasted.info(e, {
              theme: "bubble",
              position: "bottom-right",
              className: t,
              action: n
                ? {
                    text: "",
                    onClick: function (e, t) {
                      t.goAway(0);
                    },
                  }
                : "",
            });
        },
        showToastError: function (e, t, n) {
          e &&
            l["default"].toasted.error(e, {
              theme: "bubble",
              position: "bottom-right",
              className: t,
              action: n
                ? {
                    text: "",
                    onClick: function (e, t) {
                      t.goAway(0);
                    },
                  }
                : "",
            });
        },
        setupConfettiEffect: function (e, t, n) {
          var a = p["a"].create(e, t);
          return function (e) {
            a(Object(r["a"])({}, n, { origin: e }));
          };
        },
        isIosSafary: function () {
          try {
            var e =
                /constructor/i.test(window.HTMLElement) ||
                (function (e) {
                  return "[object SafariRemoteNotification]" === e.toString();
                })(
                  !window.safari ||
                    ("undefined" !== typeof window.safari &&
                      window.safari.pushNotification)
                ),
              t = window.navigator.userAgent,
              n = !!t.match(/iPad/i) || !!t.match(/iPhone/i),
              a = !!t.match(/WebKit/i),
              i = n && a && !t.match(/CriOS/i);
            return !(!e && !i);
          } catch (o) {
            return f["c"](o), !1;
          }
        },
        formatNumber: function (e) {
          return e
            ? A["a"].state.presentation.language
              ? ("string" === typeof e && (e = e.replace(",", "")),
                parseFloat(e).toLocaleString(
                  A["a"].state.presentation.language
                ))
              : e
            : 0;
        },
        roundNumberWithNDecimals: h,
        extractContent: function (e, t) {
          var n = document.createElement("div");
          if (((n.innerHTML = e), /img|video|audio/g.test(e))) return !1;
          if (t)
            for (var a = n.querySelectorAll("*"), i = 0; i < a.length; i++)
              a[i].textContent
                ? (a[i].textContent += " ")
                : (a[i].innerText += " ");
          return [n.textContent || n.innerText]
            .toString()
            .trim()
            .replace(/[\n\t\r]/g, "")
            .replace(/ +/g, " ");
        },
        toEnglishRankingSuffix: function (e) {
          var t = e % 10,
            n = e % 100;
          return "".concat(
            e,
            1 === t && 11 !== n
              ? "st"
              : 2 === t && 12 !== n
              ? "nd"
              : 3 === t && 13 !== n
              ? "rd"
              : "th"
          );
        },
        countNumberOfCorrectAnswers: function (e) {
          var t = e.filter(function (e) {
            return !0 === e.correct;
          });
          return t.length ? t.length : 0;
        },
        getDataCorrectAnswers: function (e, t) {
          var n = this.countNumberOfCorrectAnswers(e),
            a = [];
          e.forEach(function (e) {
            !0 === e.correct && a.push(e.id);
          });
          var i = [];
          t.vote &&
            t.vote.forEach(function (e) {
              a.includes(e) && i.push(e);
            });
          var o = n - i.length;
          return {
            audienceCorrectAnswers: i,
            audienceMissCorrectAnswers: o,
            totalCorrectAnswers: n,
          };
        },
        getSlideType: function (e) {
          if (!e) return "";
          var t = e.type;
          return (
            "pickAnswer" === e.type &&
              ("imageChoice" === e.slideType
                ? (t = "pickImage")
                : "typeAnswer" === e.slideType && (t = "typeAnswer")),
            t
          );
        },
        generateButtonCTAURL: function (e, t, n) {
          return ""
            .concat(d["a"].presenterUrl, "/pages/register?source=presentation_")
            .concat(e, "&medium=audience_app&campaign=")
            .concat(n, "&content=")
            .concat(this.getSlideType(t));
        },
        trackGAButtonCTA: function (e, t) {
          this.mixpanelTrack(
            "Audience",
            "Last slide > Button CTA > Opens CTA URL",
            "Presentation ID: "
              .concat(e, ", Slide type: ")
              .concat(this.getSlideType(t))
          );
        },
        formatFields: function (e) {
          var t = Object(i["a"])(e);
          return (
            t.forEach(function (e) {
              e.data || (e.data = ""),
                (e.disabled = !1),
                "name" === e.type &&
                  (A["a"].state.audienceName &&
                    (e.data = A["a"].state.audienceName),
                  !A["a"].state.audienceName &&
                    A["a"].state.currentUser &&
                    A["a"].state.currentUser.id &&
                    (e.data = A["a"].state.currentUser.firstName)),
                "email" === e.type &&
                  (A["a"].state.audienceEmail &&
                    (e.data = A["a"].state.audienceEmail),
                  !A["a"].state.audienceEmail &&
                    A["a"].state.currentUser &&
                    A["a"].state.currentUser.id &&
                    (e.data = A["a"].state.currentUser.email)),
                "team" === e.type &&
                  A["a"].state.audienceTeam &&
                  (e.data = A["a"].state.audienceTeam);
            }),
            t
          );
        },
        shuffleArrayWithSeed: m["a"],
        shuffleArray: function (e) {
          var t,
            n = e.length;
          while (0 !== n) {
            (t = Math.floor(Math.random() * n)), n--;
            var a = [e[t], e[n]];
            (e[n] = a[0]), (e[t] = a[1]);
          }
          return e;
        },
        fromMapToArray: function (e, t) {
          return e
            ? Object.keys(e).map(function (n) {
                return Object(r["a"])(Object(a["a"])({}, t, n), e[n]);
              })
            : null;
        },
        toBinary: function (e) {
          for (var t = new Uint16Array(e.length), n = 0; n < t.length; n++)
            t[n] = e.charCodeAt(n);
          return window.btoa(
            String.fromCharCode.apply(
              String,
              Object(i["a"])(new Uint8Array(t.buffer))
            )
          );
        },
        getCorrectSlideTypeName: function (e) {
          var t = e.type,
            n = e.slideType,
            a = {
              spinnerWheel: "spinnerWheel",
              leaderboard: "leaderboard",
              imageChoice: "poll",
              multipleChoice: "poll",
              openEnded: "openEnded",
              wordCloud: "wordCloud",
              scale: "scales",
              question: "q&a",
              ideas: "brainstorm",
              freestyle: "content",
              textSlide: "heading",
              bulletPoints: "list",
              qrcode: "qrCode",
              image: "image",
              youtube: "youtube",
              document: "document",
              googleSlides: "googleSlides",
            };
          if ("pickAnswer" === t) {
            if (null === n) return "pickAnswer";
            if ("imageChoice" === n) return "pickImage";
            if ("typeAnswer" === n) return "typeAnswer";
            if ("matchPairs" === n) return "matchPairs";
            if ("correctOrder" === n) return "correctOrder";
          } else if (a[t]) return a[t];
          return 0;
        },
        getCookie: function (e) {
          var t = "; ".concat(document.cookie),
            n = t.split("; ".concat(e, "="));
          return 2 === n.length ? n.pop().split(";").shift() : null;
        },
        setCookieToken: E,
        removeFirstPageCookie: function () {
          var e = "ahaFirstPage",
            t = "Thu, 01 Jan 1970 00:00:01 GMT";
          (document.cookie = ""
            .concat(e, "=;expires=")
            .concat(t, ";domain=.ahaslides.com;path=/")),
            (document.cookie = ""
              .concat(e, "=;expires=")
              .concat(t, ";domain=.ahaslide.com;path=/")),
            (document.cookie = ""
              .concat(e, "=;expires=")
              .concat(t, ";domain=localhost;path=/"));
        },
        sanitize: function (e, t) {
          var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!e) return e;
          var a = {
            whiteList: {
              i: [],
              u: [],
              b: [],
              em: [],
              br: [],
              ul: [],
              ol: [],
              li: [],
              h1: [],
              h2: [],
              h3: [],
              h4: [],
              sup: [],
              sub: [],
              strong: [],
              p: ["class"],
            },
          };
          t &&
            (a.whiteList = Object(r["a"])({}, a.whiteList, {
              a: ["href", "class", "target"],
              source: ["src", "type"],
              iframe: ["src", "width", "height", "frameborder"],
              video: ["width", "height", "controls", "autoplay"],
              audio: ["width", "height", "controls", "autoplay"],
            }));
          var i = k()(e, a);
          return A["a"].state.presentation.showHyperLink && t && n
            ? S()(i, {
                attributes: [
                  { name: "target", value: "blank" },
                  { name: "class", value: "text-hyper-link" },
                ],
              })
            : i;
        },
        isEuOrWhiteLabel: function () {
          return (
            "ahaslides.eu" === d["a"].domain || this.checkWhiteLabelDomain()
          );
        },
        migrateTokenCookie: function () {
          if (!this.isEuOrWhiteLabel()) {
            var e = v["a"].getValue("ahaAudienceToken");
            if (("" === e && v["a"].deleteValue("ahaAudienceToken"), e)) {
              var t = v["a"].getValue("ahaToken");
              t || v["a"].setTokenValue("ahaToken", e),
                v["a"].deleteValue("ahaAudienceToken");
            }
          }
        },
      },
      P
    );
  },
  ea50: function (e, t, n) {
    "use strict";
    var a = n("db49");
    t["a"] = {
      getApiUrlJoinPresentation: function () {
        return a["a"].api.joinPresentation;
      },
    };
  },
  eac2: function (e, t, n) {
    "use strict";
    var a = n("92ad"),
      i = n("2b0e"),
      o = n("db49");
    t["a"] = Object(a["b"])(i["default"], o["a"]);
  },
  ef23: function (e, t, n) {
    "use strict";
    n("96cf");
    var a = n("3b8d"),
      i = n("2b0e"),
      o = n("db49"),
      r = null,
      s = {
        getAttendedPresentationList: {
          method: "GET",
          url: "".concat(o["a"].baseUrl, "/api/attended-presentations"),
        },
        getAttendedPresentationDetail: {
          method: "GET",
          url: "".concat(o["a"].baseUrl, "/api/attended-presentations/{id}"),
        },
        createAttendedPresentation: {
          method: "POST",
          url: "".concat(o["a"].baseUrl, "/api/attended-presentations"),
        },
      },
      u = function () {
        r = i["default"].resource("", {}, s);
      },
      c = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n, a, i;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.page),
                      (a = t.pageSize),
                      (e.next = 3),
                      r.getAttendedPresentationList({ page: n, pageSize: a })
                    );
                  case 3:
                    return (i = e.sent), e.abrupt("return", i.body);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      d = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2), r.getAttendedPresentationDetail({ id: t })
                    );
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      l = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r.createAttendedPresentation(t);
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.body);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    t["a"] = {
      initResource: u,
      getAttendedPresentationList: c,
      getAttendedPresentationDetail: d,
      createAttendedPresentation: l,
    };
  },
  f304: function (e, t, n) {},
  f70b: function (e) {
    e.exports = {
      popupNextSlide: "Prezenter zmienił slajd",
      goToSlideButton: "Przejdź do slajdu",
      cancelButton: "Anuluj",
      stopSubmission: "Poczekaj, aż prezenter go otworzy.",
      waitingScreen: "Poczekaj, aż prezenter wyświetli następny slajd.",
      thankScreen: "Dziękujemy za udział!",
      blankSlide:
        "Na tym slajdzie nie ma jeszcze treści. Poczekaj, aż Twój prezenter coś doda.",
      submitMultipleTimes: "Możesz przesłać wiele razy.",
      "open-endedInstructionSubmission":
        "Dziękujemy za Twój wkład! Możesz przesłać kolejną, jeśli chcesz.",
      multipleChoiceInstruction: "Możesz wybrać do",
      options: "opcje",
      choicesLeft: "pozostały wybór",
      powerBy: "AhaSlides",
      term: "Warunki",
      submissionClosedButton: "Zgłoszenie zostało zamknięte",
      submit: "Wyślij",
      exitAndVote: "Wyjdź i zagłosuj na kolejnej prezentacji",
      nextSlideButton: "Następny slajd",
      disconnectError:
        "Wystąpił problem z połączeniem z serwerem. Proszę spróbuj ponownie!",
      slideQRCodeAudience:
        "Udało Ci się dołączyć. Możesz pokazać poniższy kod QR innym osobom w pobliżu, aby mogli się przyłączyć.",
      openendedSubmissionFail:
        "Przesyłanie nie powiodło się. Proszę, sprawdź swoje połączenie i spróbuj ponownie.",
      watchVideo: "Obejrzyj wideo na ekranie prezentera.",
      addSpecialCharacter: "Nie dodawaj żadnych znaków specjalnych",
      answerWithSpace:
        "Odpowiedzi ze spacjami będą traktowane jako jedno słowo.",
      nextButton: "Następny",
      skipButton: "Przejdź do następnego slajdu",
      audiencePacingWaitingScreen: "Odpowiedziałeś już na to pytanie.",
      enterWordPlaceholder: "Wpisz słowo...",
      errorWordCloudWhenLeaveBlank: "Proszę wpisać swoje słowo.",
      enterYourName: "Podaj swoje imię",
      getReady: "Gotowy do gry!",
      chooseEmoji: "Wybierz swojego awatara",
      changeButton: "Zmień awatar...",
      joinTheGameButton: "Dołącz do gry!",
      fasterGetMorePointsRule:
        "Im szybciej odpowiesz, tym więcej punktów otrzymasz",
      correctAnswerGetMaxPointTitle: "Odpowiedz, zanim skończy się czas",
      correctAnswerGetMaxPointDetail:
        "(Brak dodatkowych punktów za szybsze odpowiedzi)",
      quizIsNotOpen:
        "Quiz jeszcze nie wystartował. Poczekaj, aż prezenter go uruchomi.",
      reloadTextLink: "Przeładuj",
      numberQuestionOfQuiz: "Pytanie {msg} z {num}",
      runOutOfTime: "O nie, zabrakło ci czasu.",
      correctAnswer: "Prawidłowo!",
      youHaveWonPoint: "Zdobyłeś {msg} pkt w tym pytaniu",
      youAnsweredIn: "Odpowiedziałeś w {msg} ({num} jeszcze pozostało)!",
      waitAndSeeHowYouDid: "Poczekajmy i zobaczmy, jak ci poszło...",
      wrongAnswer: "Błędna odpowiedź!",
      minute: "minuta",
      minutes: "minut",
      seconds: "sekund",
      players: "{msg} graczy",
      timesUp: "Czas się skończył!",
      youAreInPlace: "Jesteś na {msg} miejscu z {msg1} graczy",
      points: "punkty",
      noResultYet: "Brak wyników",
      pointShortcut: "pkt",
      youHaveWonPoints: "Zdobyłeś {msg} pkt w tym pytaniu",
      closeAvatar: "Zamknij",
      alreadyAnswer: "Odpowiedziałeś już na to pytanie",
      yourTotalScoreIs: "Twój łączny wynik to {msg}",
      betterLuckNextTime: "Więcej szczęścia następnym razem!",
      clickToSeeFullSize:
        "Kliknij każdy obraz, aby zobaczyć go w pełnym rozmiarze.",
      answeredQuestions: "Odpowiedz",
      askQuestionButton: "Zadaj pytanie",
      qnaQuestionPlaceholder: "Wpisz tu swoje pytanie...",
      enterYourNameOptional: "Twoje imię... (opcjonalnie)",
      topQuestionsAudience: "Najlepsze",
      newQuestionsAudience: "Nowe",
      enterYourNameWarning: "Proszę podać swoje imię.",
      enterQuestionWarning: "Proszę podać swoje pytanie.",
      yourNamePlaceholder: "Twoje imię... (wymagane)",
      finishButton: "Koniec",
      quizYouMustPickAll: "Musisz wybrać wszystkie poprawne odpowiedzi.",
      tryingReconnect: "Próbuję połączyć się ponownie ...",
      ignoreButton: "Ignoruj",
      establishConnection:
        "Nie można nawiązać stabilnego połączenia. Spróbuj ponownie załadować tę stronę.",
      partiallyCorrect: "Częściowo prawidłowo",
      youCanPickAnyCorrectAnswer:
        "Możesz wybrać jedną z poprawnych odpowiedzi.",
      mustNotPickIncorrectAnswer:
        "Wybierz tyle poprawnych odpowiedzi, ile możesz, ale nie możesz wybrać żadnej niepoprawnej odpowiedzi.",
      mandatoryFieldError: "To pole jest obowiązkowe.",
      typeYourAnswer: "Wpisz swoją odpowiedź...",
      noCorrectAnswer: "Nie ma poprawnej odpowiedzi.",
      presentationIsNotOpen:
        "Ta prezentacja odbywa się w trybie prywatnym. Po przejściu prezentera do trybu publicznego można oglądać jego slajdy i wchodzić z nimi w interakcję.",
      invalidEmail: "Niepoprawny email.",
      pickYourTeam: "Wybierz drużynę:",
      teamIsFull: "Ta drużyna jest pełna, wybierz inną.",
      changeTeam: "zmiana zespołu",
      youHaveWonPointForTeam: "Zdobyłeś {msg} punkt dla swojego zespołu",
      youHaveWonPointsForTeam: "Zdobyłeś {msg} punktów dla swojego zespołu",
      yourAnswerNotCount: "Twoja odpowiedź nie liczy.",
      hasAlreadyAnswered: "{msg} już odpowiedziała.",
      yourTeamWonPoint: "Twoja drużyna zdobyła {msg} punktów.",
      yourTeamWonPoints: "Twoja drużyna zdobyła {msg} punkty.",
      noOneAnsweredInTime: "Nikt inny w zespole odpowiedział w czasie.",
      yourTeamInPlaceTeams:
        "Twój zespół jest na miejscu {msg} spośród {num} zespołów.",
      yourTeamScoreIs: "Wynik Twojego zespołu to {msg}",
      yourFinalScoreIs: "Twój końcowy wynik to {msg}.",
      youAreIn: "Jesteś w {msg}",
      congratulations: "Gratulacje",
      team: "zespół",
      teams: "zespoły",
      "I just finished a super fun quiz on AhaSlides":
        "Właśnie ukończyłem super zabawny quiz na AhaSlides",
      "Post to {msg}": "Opublikuj w {msg}",
      numberQuestionOfQuizCompleted: "Pytanie {msg} z {num} zakończone",
      seeSlideOnPresenterScreen: "Zobacz slajdy na ekranie prezentera.",
      "Show Individual Ranking": "Pokaż ranking indywidualny",
      "Show Team Ranking": "Pokaż ranking drużyny",
      Skip: "Pominąć",
      playAudioNow: "Proszę teraz odtworzyć ścieżkę dźwiękową",
      youMissedCorrectAnswer: "Przegapiłeś {msg} poprawną odpowiedź.",
      youMissedCorrectAnswers: "Brakowało {msg} poprawnych odpowiedzi.",
      youPickedCorrectAnswers: "Wybrałeś {msg} z {num} poprawnych odpowiedzi.",
      youWereFastestInTeam: "Byłeś najszybszy w swoim zespole.",
      yourTeamWonPointTotal:
        "W sumie do tej kwestii, twoja drużyna zdobyła {msg} punktów",
      yourTeamWonPointsTotal:
        "W sumie do tej kwestii, twoja drużyna zdobyła {msg} punkty",
      alsoAccepted: "Zaakceptowano również",
      youScoredPoints: "Zdobyłeś {msg} punktów.",
      youScoredPointsForYourTeam: "Zdobyłeś {msg} punktów dla swojego zespołu.",
      youScoredPointForYourTeam: "Zdobyłeś {msg} punkt dla swojej drużyny.",
      youScoredPoint: "Zdobyłeś {msg} punkt.",
      submitted: "Przesłano",
      correctAnswerTitle: "Poprawna odpowiedz",
      enjoyThisPresentationFooterBanner:
        "Korzystać z tej prezentacji? Angażować swoją publiczność za darmo na AhaSlides.",
      letsGoFooterBanner: "Chodźmy",
      getStartedWithAhaSlides: "Pierwsze kroki z AhaSlides",
      makeFreeQuiz: "Zrób swój własny darmowy quizu",
      waitToSpinTheWheel: "Poczekaj, aż prezenter zakręci kołem!",
      theWheelSpinning: "Koło się obraca, spójrz na ekran prezentera.",
      resultsAreIn: "Wyniki są w…",
      myQuestions: "Moje pytania",
      writeYourIdea: "Napisz swój pomysł...",
      allTab: "Wszystkie",
      mySubmissionTab: "Moje zgłoszenia",
      votedTab: "Głosowano",
      canUnvote: "Możesz cofnąć głos, jeśli chcesz.",
      voteLeft: "Pozostało Ci {msg} głosów.",
      votingClosed: "Äänestys on päättynyt.",
      startVoting: "Zacznij głosować",
      seeResult: "Zobacz wynik",
      votesLeft: "Pozostało Ci {msg} głosów.",
      submissions: "zgłoszeń",
      youCanSubmitOnce: "Możesz przesłać raz.",
      eachCanOnlySubmitOnce: "Każdy uczestnik może zgłosić się tylko raz.",
      maxExceededCannotSubmit:
        "Przekroczono maksymalny limit. Nie możesz już przesłać.",
      youHaveMade: "Masz",
      noneOptionsCorrect: "Żadna z opcji są poprawne!",
      changeImage: "Zmień obraz",
      remove: "Usunąć",
      uploadImage: "Załaduj obrazek",
      joinNow: "Dołącz teraz",
      dragAndDropStatements:
        "Przeciągnij i upuść wyciągi, aby złożyć zamówienie",
      seeCorrectAnswer: "Zobacz poprawną odpowiedź",
      seeYourAnswer: "Zobacz swoją odpowiedź",
      startTheConversation: "Rozpocznij rozmowę!",
      noChatMessagesYet: "Nie ma jeszcze wiadomości na czacie.",
      questionWillStartSoon: "Pytanie zacznie się wkrótce.",
      typeSomethingToSayHi: "Napisz coś do przywitania!",
      quizCompleted: "Quiz zakończony!",
      shareThisOn: "Udostępnij to na ",
      thisQuizWasMadeBy: "Ten quiz został stworzony przez {name}",
      dontForgetToShowSupport: "Proszę, nie zapomnij okazać swojego wsparcia!",
      amazing: "Niesamowity!",
      greatWork: "Świetna robota!",
      goodJob: "Dobrze zrobiony!",
      wow: "Wow!",
      whatAPerformance: "Co za przedstawienie!",
      nicelyDone: "Ładnie Zrobione!",
      outOfQuestionsYou: "Z {number} pytań, ty",
      youFinishedInThe: "Znalazłeś się w",
      gotCorrectRate: "otrzymałem {number} poprawnej odpowiedzi",
      topPercentage: "pierwszej {number}%",
      ofAllPlayers: "wszystkich graczy",
      toughQuizRight: "Trudny quiz, prawda?",
      outOfQuestionsYourTeam: "Z {number} pytań, twój zespół",
      yourTeamFinishedInThe: "Twoja drużyna zajęła miejsce w",
      ofAllTeams: "wszystkich drużyn",
      haventAnsweredAnyQuiz: "Nie odpowiedziałeś na żadne pytanie quizowe.",
      teamHasntAnsweredAnyQuiz:
        "Twój zespół nie odpowiedział na żadne pytanie quizowe.",
      you: "Ty",
      enterYourMessage: "Wpisz swoją wiadomość...",
      hasLeft: "odeszła",
      hasJoined: "dołączyła",
      "Match with...": "Pasuje do...",
      orTryToReload:
        "Lub spróbuj <a class='link-reload' @click='reloadPage()'>przeładować</a>",
      "Or try to": "Lub spróbuj",
      audienceSeeContent: "Proszę spojrzeć na ekran prezentera.",
      "Make a free quiz": "Stwórz darmowy quiz",
      "Enjoy this presentation?": "Podoba Ci się ta prezentacja?",
      "Get slides": "Zdobądź slajdy",
      Accept: "Zaakceptować",
      Decline: "Odrzucić",
      "Enter your authentication code": "Wprowadź swój kod uwierzytelniający",
      "Let me in": "Wpuść mnie",
      "Presenter is calling…": "Prezenter dzwoni…",
      "Something went wrong, please try again.":
        "Coś poszło nie tak. Proszę spróbuj ponownie.",
      "Not bad": "Nieźle",
      Good: "Dobra",
      "Can't wait for the next": "Nie mogę się doczekać następnego",
      "Feedback sent!": "Wysłano opinię!",
      "Leave feedback...": "Wystawić opinię. To prywatne...",
      "Could be better": "Może być lepiej",
      "How's the presentation?": "Jaka jest prezentacja?",
      Send: "Wysłać",
      Tutorials: "Samouczki",
      teamFastestAnswerIncorrect:
        "Najszybsza odpowiedź była błędna, Twój zespół zarabia <b>{point}p</b>.",
      teamFastestAnswerGetPoint:
        "Byłaś/byłeś najszybszy, Twój zespół zarabia <b>{point}p</b>.",
      "💪 Keep up the great work!": "💪 Dobrze się trzymaj, świetna robota!",
      teamEarnsPointTotal: "Twój zespół zdobył łącznie <b>{point}p</b>.",
      teamEarnsPointAverage: "Twój zespół zarabia średnio <b>{point}p</b>.",
      teamEarnsPointFastest:
        "Twój zespół zarabia <b>{point}p</b> dzięki <b>{audienceName}</b>.",
      "Lose streak!": "Koniec serii",
      Correct: "Świetnie!",
      "Double streak!": "Doskonale!",
      "Triple streak!": "Wspaniale!",
      "Four Streak!": "Wspan.!",
      "Awesome!": "Doskonale!",
      "Keep going!": "Impresjonująco!",
      "Amazing!": "Fantastycznie!",
      "Good job!": "Genialnie!",
      Incorrect: "Niepoprawne",
      my_answers: "Moje odpowiedzi",
      view_answers: "Zobacz odpowiedzi",
      final_leaderboard: "Końcowa tabela liderów",
      final_answers_stat:
        "Masz <strong>{correctAnswers} / {totalQuiz} prawidłowych</strong> ({correctRate}%)",
      final_ranking: "Pozycja: <strong>{ranking}</strong>",
      your_answer: "Twoja odpowiedź",
      review_all_questions:
        "Po zakończeniu quizu możesz tutaj przejrzeć wszystkie pytania.",
      not_answer: "Nie odpowiedziałeś",
      your_answer_correct: "Twoja odpowiedź jest poprawna",
      your_answer_incorrect: "Twoja odpowiedź jest nieprawidłowa",
      your_answer_partially_correct: "Twoja odpowiedź jest częściowo poprawna",
      you_missed_quiz: "Właśnie przegapiłeś(-aś) quiz.",
      leaderboard: "Tabela wyników",
      personal_no_quiz_answered: "Nie odpowiedziałeś jeszcze na żaden quiz",
      team_no_quiz_answered:
        "Twój zespół nie odpowiedział jeszcze na żaden quiz",
      final_team_answers_stat:
        "Twój zespół uzyskał <strong>{correctAnswers} / {totalQuiz} poprawnych odpowiedzi</strong> ({correctRate}%)",
      all_slides: "Wszystkie slajdy",
      review_slides: "Przejrzyj slajdy",
      view_all_slides_answers: "Zobacz wszystkie slajdy i odpowiedzi",
      review_all_slides_and_questions:
        "Możesz przejrzeć wszystkie slajdy i pytania po zakończeniu prezentacji.",
      no_answer: "Brak odpowiedzi",
      sign_in_to_save_presentation: "Zaloguj się, aby zapisać tę prezentację",
      continue_with_google: "Kontynuuj z Google",
      present_with_ahaslides: "Prezentuj z AhaSlides",
      view_terms: "Wyświetl warunki",
      log_out: "Wyloguj się",
      attended: "Uczęszczono",
      your_future_presentations_shown_here:
        "Twoje przyszłe prezentacje zostaną tutaj wyświetlone",
      join_a_presentation: "Dołącz do prezentacji",
      presentation_details: "Szczegóły prezentacji",
      "Leaving the presentation": "Opuszczanie prezentacji",
      "This link will take you to a page that is not part of the presentation":
        "Ten link przeniesie Cię do strony, która nie jest częścią prezentacji",
      thank_for_participation: "Dziękujemy za udział! ❤️",
      give_feedback: "Prześlij opinię",
      get_ahaslides_free: "Uzyskaj AhaSlides za darmo",
      exclusive_offer_hr_tech: "Ekskluzywna oferta na HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ Uzyskaj AhaSlides Plus za darmo ✨",
      ask_presenter_to_view_slides:
        "Proszę poprosić prezentera o zezwolenie na wyświetlanie slajdów.",
      login: "Zaloguj się",
      sign_up: "Zarejestruj się",
      or: "lub",
      Reload: "Przeładuj",
      "No internet. Retrying...": "Brak internetu. Ponowna próba...",
    };
  },
  f745: function (e, t, n) {},
  f77e: function (e, t, n) {
    "use strict";
    n("456d"), n("ac6a"), n("f3e2");
    var a = n("d225"),
      i = n("b0b4"),
      o = n("e7fc"),
      r = n.n(o),
      s = n("db49"),
      u = n("538b"),
      c =
        (n("57e7"),
        (function () {
          function e() {
            Object(a["a"])(this, e), (this.subscribedTopics = []);
          }
          return (
            Object(i["a"])(e, [
              {
                key: "getSubscribedTopics",
                value: function () {
                  return this.subscribedTopics;
                },
              },
              {
                key: "addTopic",
                value: function (e) {
                  this.subscribedTopics.push(e);
                },
              },
              {
                key: "removeTopic",
                value: function (e) {
                  var t = this.subscribedTopics.indexOf(e);
                  t > -1 && this.subscribedTopics.splice(t, 1);
                },
              },
            ]),
            e
          );
        })()),
      d = new c(),
      l = d,
      p = { protocolVersion: 5, keepalive: 60 },
      m = (function () {
        function e(t, n) {
          Object(a["a"])(this, e),
            (this.client = r.a.connect(t, n)),
            this.listenConnectionEvents();
        }
        return (
          Object(i["a"])(e, [
            {
              key: "getClient",
              value: function () {
                return this.client;
              },
            },
            {
              key: "listenConnectionEvents",
              value: function () {
                var e = this;
                this.client.on("connect", function () {
                  console.log("Connected to MQTT broker"),
                    u["b"].detectEmqxConnection(u["a"].GOOD);
                }),
                  this.client.on("reconnect", function () {
                    console.log("Reconnecting to MQTT broker"),
                      Object.keys(e.client._resubscribeTopics).forEach(
                        function (t) {
                          e.client.subscribe(t);
                        }
                      );
                  }),
                  this.client.on("close", function () {
                    console.log("Connection to MQTT broker closed"),
                      u["b"].detectEmqxConnection(u["a"].ERROR);
                  }),
                  this.client.on("error", function () {
                    u["b"].detectEmqxConnection(u["a"].ERROR);
                  }),
                  this.client.on("offline", function () {
                    u["b"].detectEmqxConnection(u["a"].ERROR);
                  });
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                this.client.subscribe(e), l.addTopic(e);
              },
            },
            {
              key: "unsubscribe",
              value: function (e) {
                this.client.unsubscribe(e), l.removeTopic(e);
              },
            },
          ]),
          e
        );
      })(),
      g = new m(s["a"].mqttBrokerUrl, p);
    t["a"] = g.getClient();
  },
  f9f0: function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return w;
    }),
      n.d(t, "b", function () {
        return p;
      }),
      n.d(t, "a", function () {
        return m;
      });
    n("57e7"), n("ac6a"), n("f3e2"), n("6b54"), n("87b3");
    var a,
      i = n("d225"),
      o = n("b0b4"),
      r = n("bd86"),
      s = (n("28a5"), n("c5f6"), n("db49")),
      u = n("92ad"),
      c = n("4360"),
      d = n("f77e"),
      l = "*|*",
      p = {
        ANSWERER_COUNT: "ANSWERER_COUNT",
        ANSWER_COUNT: "ANSWER_COUNT",
        AVERAGE_SCORE: "AVERAGE_SCORE",
        CORRECT_ANSWER_COUNT: "CORRECT_ANSWER_COUNT",
        INCORRECT_ANSWER_COUNT: "INCORRECT_ANSWER_COUNT",
        REACTION_COUNT: "REACTION_COUNT",
        LAST_REACTION: "LAST_REACTION",
        AVERAGE_TEAM_SCORE: "AVERAGE_TEAM_SCORE",
        TOTAL_TEAM_SCORE: "TOTAL_TEAM_SCORE",
        FASTEST_TEAM_SCORE: "FASTEST_TEAM_SCORE",
        LIVE_SESSION_INFO: "LIVE_SESSION_INFO",
      },
      m =
        (p.ANSWER_COUNT,
        p.ANSWERER_COUNT,
        p.AVERAGE_SCORE,
        p.CORRECT_ANSWER_COUNT,
        p.INCORRECT_ANSWER_COUNT,
        {
          PER_ACTIVITY: "PER_ACTIVITY",
          PER_QUESTION: "PER_QUESTION",
          PER_ANSWER_VALUE: "PER_ANSWER_VALUE",
          PER_LIVE_SESSION: "PER_LIVE_SESSION",
          PER_REACTION_TYPE: "PER_REACTION_TYPE",
        }),
      g =
        (m.PER_ANSWER_VALUE,
        m.PER_QUESTION,
        m.PER_ACTIVITY,
        m.PER_LIVE_SESSION,
        "ST1"),
      h =
        ((a = {}),
        Object(r["a"])(
          a,
          "".concat(p.ANSWER_COUNT, "_").concat(m.PER_ACTIVITY),
          function (e, t) {
            return {
              type: "".concat(p.ANSWER_COUNT, "_").concat(m.PER_ACTIVITY),
              identifier: Number(e[0]),
              version: Number(e[1]),
              answerCount: Number(t),
            };
          }
        ),
        Object(r["a"])(
          a,
          "".concat(p.ANSWER_COUNT, "_").concat(m.PER_ANSWER_VALUE),
          function (e, t) {
            return {
              type: "".concat(p.ANSWER_COUNT, "_").concat(m.PER_ANSWER_VALUE),
              identifier: Number(e[0]),
              version: Number(e[1]),
              questionId: e[2],
              answerValue: e[3],
              answerCount: Number(t),
            };
          }
        ),
        Object(r["a"])(
          a,
          "".concat(p.ANSWERER_COUNT, "_").concat(m.PER_QUESTION),
          function (e, t) {
            return {
              type: "".concat(p.ANSWER_COUNT, "_").concat(m.PER_ANSWER_VALUE),
              identifier: Number(e[0]),
              version: Number(e[1]),
              questionId: e[2],
              answererCount: Number(t),
            };
          }
        ),
        Object(r["a"])(
          a,
          "".concat(p.AVERAGE_SCORE, "_").concat(m.PER_QUESTION),
          function (e, t) {
            return {
              type: "".concat(p.AVERAGE_SCORE, "_").concat(m.PER_QUESTION),
              identifier: Number(e[0]),
              version: Number(e[1]),
              questionId: Number(e[2]),
              averageScore: t,
            };
          }
        ),
        Object(r["a"])(
          a,
          "".concat(p.AVERAGE_SCORE, "_").concat(m.PER_ACTIVITY),
          function (e, t) {
            return {
              type: "".concat(p.AVERAGE_SCORE, "_").concat(m.PER_ACTIVITY),
              identifier: Number(e[0]),
              version: Number(e[1]),
              averageScore: t,
            };
          }
        ),
        Object(r["a"])(
          a,
          "".concat(p.CORRECT_ANSWER_COUNT, "_").concat(m.PER_ANSWER_VALUE),
          function (e, t) {
            return {
              type: ""
                .concat(p.CORRECT_ANSWER_COUNT, "_")
                .concat(m.PER_ANSWER_VALUE),
              identifier: Number(e[0]),
              version: Number(e[1]),
              questionId: e[2],
              answerValue: e[3],
              answerCount: t,
            };
          }
        ),
        Object(r["a"])(
          a,
          "".concat(p.INCORRECT_ANSWER_COUNT, "_").concat(m.PER_ANSWER_VALUE),
          function (e, t) {
            return {
              type: ""
                .concat(p.INCORRECT_ANSWER_COUNT, "_")
                .concat(m.PER_ANSWER_VALUE),
              identifier: Number(e[0]),
              version: Number(e[1]),
              questionId: e[2],
              answerValue: e[3],
              answerCount: t,
            };
          }
        ),
        Object(r["a"])(
          a,
          "".concat(p.CORRECT_ANSWER_COUNT, "_").concat(m.PER_ACTIVITY),
          function (e, t) {
            return {
              type: ""
                .concat(p.CORRECT_ANSWER_COUNT, "_")
                .concat(m.PER_ACTIVITY),
              identifier: Number(e[0]),
              version: Number(e[1]),
              answerCount: t,
            };
          }
        ),
        Object(r["a"])(
          a,
          "".concat(p.INCORRECT_ANSWER_COUNT, "_").concat(m.PER_ACTIVITY),
          function (e, t) {
            return {
              type: ""
                .concat(p.INCORRECT_ANSWER_COUNT, "_")
                .concat(m.PER_ACTIVITY),
              identifier: Number(e[0]),
              version: Number(e[1]),
              answerCount: t,
            };
          }
        ),
        Object(r["a"])(
          a,
          "".concat(p.REACTION_COUNT, "_").concat(m.PER_REACTION_TYPE),
          function (e, t) {
            return {
              type: ""
                .concat(p.REACTION_COUNT, "_")
                .concat(m.PER_REACTION_TYPE),
              identifier: Number(e[0]),
              version: Number(e[1]),
              reactionType: e[2],
              reactionCount: Number(t),
            };
          }
        ),
        Object(r["a"])(
          a,
          "".concat(p.LAST_REACTION, "_").concat(m.PER_LIVE_SESSION),
          function (e, t) {
            var n = t.split(l);
            return {
              type: "".concat(p.LAST_REACTION, "_").concat(m.PER_LIVE_SESSION),
              identifier: Number(e[0]),
              version: Number(e[1]),
              reactionType: n[0],
              audienceName: n[1],
            };
          }
        ),
        Object(r["a"])(
          a,
          "".concat(p.LIVE_SESSION_INFO, "_").concat(m.PER_LIVE_SESSION),
          function (e, t) {
            var n = JSON.parse(t);
            return {
              type: ""
                .concat(p.LIVE_SESSION_INFO, "_")
                .concat(m.PER_LIVE_SESSION),
              identifier: Number(e[0]),
              liveSessionInfo: n,
            };
          }
        ),
        a);
    function b(e, t) {
      return h["".concat(e, "_").concat(t)];
    }
    var v = function (e) {
        var t = e.statsType,
          n = e.aggregationLevel,
          a = e.identifier;
        return "".concat(t, "_").concat(n, "_").concat(a);
      },
      f = (function () {
        function e() {
          Object(i["a"])(this, e), (this.callbacks = {});
        }
        return (
          Object(o["a"])(e, [
            {
              key: "_getCallbacks",
              value: function (e) {
                return e && this.callbacks[e] ? this.callbacks[e] : [];
              },
            },
            {
              key: "connect",
              value: function () {
                var e = this;
                d["a"].on("message", function (t, n) {
                  var a = t.split("/");
                  a[1] === g && (a = a.slice(1));
                  var i = a[2],
                    o = a[3],
                    r = a.slice(2).join("/"),
                    s = b(i, o);
                  if ("function" == typeof s) {
                    var u = s(a.slice(4), n.toString()),
                      c = v({
                        statsType: i,
                        aggregationLevel: o,
                        identifier: u.identifier,
                      }),
                      d = e._getCallbacks(c);
                    d.forEach(function (e) {
                      e(r, n.toString(), u);
                    });
                  }
                });
              },
            },
            {
              key: "_addCallback",
              value: function (e, t) {
                if (!e)
                  throw new Error(
                    "Can not add callback for following key: ".concat(e)
                  );
                this.callbacks[e] || (this.callbacks[e] = []),
                  this.callbacks[e].push(t);
              },
            },
            {
              key: "_removeCallbacks",
              value: function (e, t) {
                var n = this._getCallbacks(e);
                if (t) {
                  var a = n.indexOf(t);
                  a > -1 && n.splice(a, 1);
                } else delete this.callbacks[e];
              },
            },
            {
              key: "subscribeStats",
              value: function (e, t) {
                var n = e.statsType,
                  a = e.aggregationLevel,
                  i = e.identifier,
                  o = "/"
                    .concat(s["a"].livestatsTopicPrefix, "/")
                    .concat(n, "/")
                    .concat(a, "/")
                    .concat(i, "/#");
                c["a"].getters[u["a"]] && (o = "/".concat(g).concat(o));
                var r = v({ statsType: n, aggregationLevel: a, identifier: i });
                this._addCallback(r, t), d["a"].subscribe(o);
              },
            },
            {
              key: "unsubscribeStats",
              value: function (e, t) {
                var n = e.identifier,
                  a = e.statsType,
                  i = e.aggregationLevel,
                  o = "/"
                    .concat(s["a"].livestatsTopicPrefix, "/")
                    .concat(a, "/")
                    .concat(i, "/")
                    .concat(n, "/#");
                c["a"].getters[u["a"]] && (o = "/".concat(g).concat(o));
                var r = v({ statsType: a, aggregationLevel: i, identifier: n });
                this._removeCallbacks(r, t), d["a"].unsubscribe(o);
              },
            },
          ]),
          e
        );
      })(),
      w = new f();
  },
  ff8e: function (e) {
    e.exports = {
      popupNextSlide: "Ο παρουσιαστής έχει αλλάξει διαφάνεια.",
      goToSlideButton: "Μετάβαση στη διαφάνεια",
      cancelButton: "Ακύρωση",
      stopSubmission: "Παρακαλώ περιμένετε να το ανοίξει ο παρουσιαστής.",
      waitingScreen: "Παρακαλώ περιμένετε για την επόμενη διαφάνεια.",
      thankScreen: "Ευχαριστούμε για τη συμμετοχή σας!",
      blankSlide: "Δεν υπάρχει περιεχόμενο ακόμα. Παρακαλώ περιμένετε.",
      submitMultipleTimes: "Μπορείτε να υποβάλετε πολλές φορές.",
      "open-endedInstructionSubmission":
        "Ευχαριστούμε! Μπορείτε να υποβάλετε κι άλλο αν θέλετε.",
      multipleChoiceInstruction: "Μπορείτε να επιλέξετε έως",
      options: "επιλογές",
      choicesLeft: "υπολοιπόμενες επιλογές",
      powerBy: "AhaSlides",
      term: "Όροι",
      submissionClosedButton: "Η υποβολή έκλεισε",
      submit: "Υποβολή",
      exitAndVote: "Έξοδος και ψήφος σε άλλη παρουσίαση",
      nextSlideButton: "Επόμενη διαφάνεια",
      disconnectError:
        "Υπήρξε πρόβλημα σύνδεσης με τον διακομιστή. Δοκιμάστε ξανά!",
      slideQRCodeAudience:
        "Έχετε συνδεθεί επιτυχώς. Δείξτε τον QR κωδικό σε άλλους για να συμμετάσχουν.",
      openendedSubmissionFail:
        "Η υποβολή απέτυχε. Ελέγξτε τη σύνδεσή σας και δοκιμάστε ξανά.",
      watchVideo: "Παρακαλώ δείτε το βίντεο στην οθόνη του παρουσιαστή.",
      addSpecialCharacter: "Μην προσθέσετε ειδικούς χαρακτήρες",
      answerWithSpace: "Απαντήσεις με κενά θεωρούνται μία λέξη.",
      nextButton: "Επόμενη διαφάνεια",
      skipButton: "Παράλειψη και μετάβαση στην επόμενη διαφάνεια",
      audiencePacingWaitingScreen: "Έχετε ήδη απαντήσει σε αυτήν την ερώτηση.",
      enterWordPlaceholder: "Εισάγετε μια λέξη..",
      errorWordCloudWhenLeaveBlank: "Παρακαλώ εισάγετε τη λέξη σας.",
      enterYourName: "Εισάγετε το όνομά σας",
      getReady: "Ετοιμαστείτε να παίξετε!",
      chooseEmoji: "Επιλέξτε ένα emoji ως avatar σας",
      changeButton: "Αλλαγή avatar..",
      joinTheGameButton: "Συμμετοχή στο παιχνίδι!",
      fasterGetMorePointsRule:
        "Αυτή η ερώτηση δίνει περισσότερους πόντους για ταχύτερες απαντήσεις",
      correctAnswerGetMaxPointTitle: "Απαντήστε πριν λήξει ο χρόνος",
      correctAnswerGetMaxPointDetail:
        "(Χωρίς επιπλέον πόντους για ταχύτερες απαντήσεις)",
      quizIsNotOpen:
        "Το κουίζ δεν είναι ανοιχτό. Περιμένετε να το ξεκινήσει ο παρουσιαστής.",
      reloadTextLink: "Ανανέωση",
      numberQuestionOfQuiz: "Ερώτηση {msg} από {num}",
      runOutOfTime: "Ωχ όχι, δεν έχεις άλλο χρόνο.",
      correctAnswer: "Σωστό!",
      youHaveWonPoint: "Έχετε κερδίσει {msg} πόντο για αυτήν την ερώτηση",
      youAnsweredIn: "Απαντήσατε σε {msg} ({num} έμειναν)!",
      waitAndSeeHowYouDid: "Ας περιμένουμε να δούμε πώς τα πήγατε...",
      wrongAnswer: "Λάθος απάντηση!",
      minute: "λεπτό",
      minutes: "λεπτά",
      seconds: "δευτερόλεπτα",
      players: "{msg} παίκτες",
      timesUp: "Ο χρόνος τελείωσε!",
      youAreInPlace: "Καταλάβατε την {msg}η θέση από {msg1} παίκτες",
      points: "πόντοι",
      noResultYet: "Δεν υπάρχει ακόμα αποτέλεσμα",
      pointShortcut: "π",
      youHaveWonPoints: "Έχετε κερδίσει {msg} πόντους για αυτήν την ερώτηση",
      closeAvatar: "Κλείσιμο",
      alreadyAnswer: "Έχετε ήδη απαντήσει σε αυτήν την ερώτηση.",
      yourTotalScoreIs: "Η συνολική σας βαθμολογία είναι {msg}",
      betterLuckNextTime: "Καλή τύχη την επόμενη φορά!",
      clickToSeeFullSize:
        "Κάντε κλικ σε κάθε εικόνα για να τη δείτε σε πλήρες μέγεθος.",
      answeredQuestions: "Απαντήθηκε",
      askQuestionButton: "Κάντε μια ερώτηση",
      qnaQuestionPlaceholder: "Πληκτρολογήστε την ερώτησή σας εδώ...",
      enterYourNameOptional: "Το όνομά σας.. (προαιρετικό)",
      topQuestionsAudience: "Κορυφή",
      newQuestionsAudience: "Νέο",
      enterYourNameWarning: "Παρακαλώ εισάγετε το όνομά σας.",
      enterQuestionWarning: "Παρακαλώ εισάγετε την ερώτησή σας.",
      yourNamePlaceholder: "Το όνομά σας.. (απαιτείται)",
      finishButton: "Τέλος",
      quizYouMustPickAll: "Πρέπει να επιλέξετε όλες τις σωστές απαντήσεις.",
      tryingReconnect: "Προσπάθεια επανασύνδεσης...",
      ignoreButton: "Αγνόηση",
      establishConnection:
        "Δεν ήταν δυνατή η σταθερή σύνδεση. Δοκιμάστε να ανανεώσετε αυτή τη σελίδα.",
      partiallyCorrect: "Μερικώς σωστό",
      youCanPickAnyCorrectAnswer:
        "Μπορείτε να επιλέξετε οποιαδήποτε από τις σωστές απαντήσεις.",
      mustNotPickIncorrectAnswer:
        "Επιλέξτε όσες σωστές απαντήσεις μπορείτε, αλλά μην επιλέξετε καμία λανθασμένη απάντηση.",
      mandatoryFieldError: "Αυτό το πεδίο είναι υποχρεωτικό.",
      typeYourAnswer: "Πληκτρολογήστε την απάντησή σας...",
      noCorrectAnswer: "Δεν υπάρχει σωστή απάντηση.",
      presentationIsNotOpen:
        "Αυτή η παρουσίαση είναι σε ιδιωτική λειτουργία. Μόλις ο παρουσιαστής την αλλάξει σε δημόσια, μπορείτε να δείτε και να αλληλεπιδράσετε με τις διαφάνειες.",
      invalidEmail: "Μη έγκυρο email.",
      pickYourTeam: "Επιλέξτε την ομάδα σας:",
      teamIsFull: "Αυτή η ομάδα είναι γεμάτη, παρακαλώ επιλέξτε άλλη.",
      changeTeam: "αλλαγή ομάδας",
      youHaveWonPointForTeam: "Έχετε κερδίσει {msg} πόντο για την ομάδα σας",
      youHaveWonPointsForTeam: "Έχετε κερδίσει {msg} πόντους για την ομάδα σας",
      yourAnswerNotCount: "Η απάντησή σας δεν μέτρησε.",
      hasAlreadyAnswered: "Ο/Η {msg} έχει ήδη απαντήσει.",
      yourTeamWonPoint: "Η ομάδα σας έχει κερδίσει {msg} πόντο.",
      yourTeamWonPoints: "Η ομάδα σας έχει κερδίσει {msg} πόντους.",
      noOneAnsweredInTime: "Κανένας άλλος στην ομάδα σας δεν απάντησε έγκαιρα.",
      yourTeamInPlaceTeams:
        "Η ομάδα σας κατέλαβε την {msg}η θέση από {num} ομάδες.",
      yourTeamScoreIs: "Η βαθμολογία της ομάδας σας είναι {msg}",
      yourFinalScoreIs: "Η τελική σας βαθμολογία είναι {msg}.",
      youAreIn: "Είστε στην {msg}",
      congratulations: "Συγχαρητήρια",
      team: "ομάδα",
      teams: "ομάδες",
      "I just finished a super fun quiz on AhaSlides":
        "Μόλις τελείωσα ένα υπέροχο κουίζ στο AhaSlides",
      "Post to {msg}": "Δημοσίευσε στο {msg}",
      numberQuestionOfQuizCompleted: "Ερώτηση {msg} από {num} ολοκληρώθηκε",
      seeSlideOnPresenterScreen:
        "Δες τις διαφάνειες στην οθόνη του παρουσιαστή",
      "Show Individual Ranking": "Εμφάνιση Ατομικής Κατάταξης",
      "Show Team Ranking": "Εμφάνιση Κατάταξης Ομάδας",
      Skip: "Παράλειψη",
      playAudioNow: "Παίξτε το ηχητικό κομμάτι τώρα",
      youMissedCorrectAnswer: "Χάσατε {msg} σωστή απάντηση ",
      youMissedCorrectAnswers: "Χάσατε {msg} σωστές απαντήσεις",
      youPickedCorrectAnswers: "Επιλέξατε {msg} από {num} σωστές απαντήσεις",
      youWereFastestInTeam: "Ήσασταν ο/η ταχύτερος/η στην ομάδα σας",
      yourTeamWonPointTotal:
        "Συνολικά για αυτή την ερώτηση, η ομάδα σας έχει κερδίσει {msg} πόντο",
      yourTeamWonPointsTotal:
        "Συνολικά για αυτή την ερώτηση, η ομάδα σας έχει κερδίσει {msg} πόντους",
      alsoAccepted: "Επίσης αποδεκτό",
      youScoredPoints: "Κέρδισες {msg} πόντους",
      youScoredPointsForYourTeam: "Κέρδισες {msg} πόντους για την ομάδα σου",
      youScoredPointForYourTeam: "Κέρδισες {msg} πόντο για την ομάδα σου",
      youScoredPoint: "Κέρδισες {msg} πόντο",
      submitted: "Υποβλήθηκε",
      correctAnswerTitle: "Σωστή απάντηση",
      enjoyThisPresentationFooterBanner:
        "Απόλαυσες αυτή την παρουσίαση; Εμπλέξτε το κοινό σας δωρεάν στο AhaSlides",
      letsGoFooterBanner: "Πάμε",
      getStartedWithAhaSlides: "Ξεκίνα με το AhaSlides",
      makeFreeQuiz: "Δημιουργήστε το δικό σας δωρεάν κουίζ",
      waitToSpinTheWheel:
        "Περιμένετε να περιστραφεί ο τροχός από τον παρουσιαστή!",
      theWheelSpinning:
        "Ο τροχός περιστρέφεται, παρακαλώ κοιτάξτε την οθόνη του παρουσιαστή",
      resultsAreIn: "Τα αποτελέσματα είναι έτοιμα...",
      myQuestions: "Οι ερωτήσεις μου",
      writeYourIdea: "Γράψτε την ιδέα σας...",
      allTab: "Όλα",
      mySubmissionTab: "Οι υποβολές μου",
      votedTab: "Ψηφίστηκε",
      canUnvote: "Μπορείτε να αναιρέσετε την ψήφο σας αν θέλετε",
      voteLeft: "Σας έχουν απομείνει {msg} ψήφοι ",
      votingClosed: "Η ψηφοφορία έκλεισε",
      startVoting: "Αρχίστε τη ψηφοφορία",
      seeResult: "Δείτε τα αποτελέσματα",
      votesLeft: "Σας έχουν απομείνει {msg} ψήφοι ",
      submissions: "υποβολή(ές)",
      youCanSubmitOnce: "Μπορείτε να υποβάλετε μόνο μία φορά",
      eachCanOnlySubmitOnce: "Κάθε συμμετέχων μπορεί να υποβάλει μόνο μία φορά",
      maxExceededCannotSubmit:
        "Ξεπεράσατε το μέγιστο όριο. Δεν μπορείτε να υποβάλετε ξανά",
      youHaveMade: "Έχετε κάνει",
      noneOptionsCorrect: "Καμία από τις επιλογές δεν είναι σωστή!",
      changeImage: "Αλλάξτε την εικόνα",
      remove: "Αφαίρεση",
      uploadImage: "Μεταφόρτωση εικόνας",
      joinNow: "Συμμετοχή τώρα",
      dragAndDropStatements:
        "Σύρετε και αποθέστε τις δηλώσεις για να κάνετε τη σειρά",
      seeCorrectAnswer: "Δείτε τη σωστή απάντηση",
      seeYourAnswer: "Δείτε την απάντησή σας",
      startTheConversation: "Ξεκινήστε τη συζήτηση!",
      noChatMessagesYet: "Δεν υπάρχουν μηνύματα συνομιλίας ακόμα",
      questionWillStartSoon: "Η ερώτηση θα ξεκινήσει σύντομα",
      typeSomethingToSayHi: "Πληκτρολογήστε κάτι για να πείτε γεια!",
      quizCompleted: "Το κουίζ ολοκληρώθηκε!",
      shareThisOn: "Μοιραστείτε το σε",
      thisQuizWasMadeBy: "Αυτό το κουίζ δημιουργήθηκε από τον {name}",
      dontForgetToShowSupport:
        "Παρακαλώ μην ξεχάσετε να δείξετε την υποστήριξή σας!",
      amazing: "Καταπληκτικό!",
      greatWork: "Εξαιρετική δουλειά!",
      goodJob: "Πολύ καλή δουλειά!",
      wow: "Ουάου!",
      whatAPerformance: "Φοβερή απόδοση!",
      nicelyDone: "Πολύ ωραία!",
      outOfQuestionsYou: "Από τις {number} ερωτήσεις, εσείς",
      youFinishedInThe: "Ολοκληρώσατε στην",
      gotCorrectRate: "πήρατε {number} σωστές",
      topPercentage: "το κορυφαίο {number}% ",
      ofAllPlayers: "από όλους τους παίκτες",
      toughQuizRight: "Δύσκολο κουίζ, έτσι;",
      outOfQuestionsYourTeam: "Από τις {number} ερωτήσεις, η ομάδα σας",
      yourTeamFinishedInThe: "Η ομάδα σας ολοκλήρωσε στην",
      ofAllTeams: "από όλες τις ομάδες",
      haventAnsweredAnyQuiz: "Δεν έχετε απαντήσει σε καμία ερώτηση του κουίζ",
      teamHasntAnsweredAnyQuiz:
        "Η ομάδα σας δεν έχει απαντήσει σε καμία ερώτηση του κουίζ",
      you: "Εσείς",
      enterYourMessage: "Εισάγετε το μήνυμά σας...",
      hasLeft: "αποσυνδέθηκε",
      hasJoined: "συνδέθηκε",
      "Match with...": "Ταίριαξε με...",
      "Or try to": "Ή προσπαθήστε να",
      audienceSeeContent: "Παρακαλώ κοιτάξτε την οθόνη του παρουσιαστή",
      "Enter your authentication code": "Εισάγετε τον κωδικό επαλήθευσής σας",
      "Let me in": "Άφησέ με να μπω",
      "Make a free quiz": "Δημιουργήστε ένα δωρεάν κουίζ",
      "Enjoy this presentation?": "Απολαύσατε αυτή την παρουσίαση;",
      "Get slides": "Πάρτε τις διαφάνειες",
      "Presenter is calling…": "Ο παρουσιαστής καλεί…",
      Accept: "Αποδέχομαι",
      Decline: "Αρνούμαι",
      "Leave feedback...": "Αφήστε σχόλιο...",
      "Not bad": "Όχι κακό",
      Good: "Καλό",
      "Can't wait for the next": "Ανυπομονώ για το επόμενο",
      "Feedback sent!": "Το σχόλιο στάλθηκε!",
      "Something went wrong, please try again.":
        "Κάτι πήγε στραβά, παρακαλώ δοκιμάστε ξανά",
      "Could be better": "Θα μπορούσε να είναι καλύτερο",
      "How's the presentation?": "Πώς ήταν η παρουσίαση;",
      Send: "Αποστολή",
      Tutorials: "Οδηγίες",
      teamEarnsPointTotal: "Η ομάδα σας κερδίζει <b>{point}π</b> συνολικά",
      teamEarnsPointAverage:
        "Η ομάδα σας κερδίζει <b>{point}π</b> κατά μέσο όρο",
      teamEarnsPointFastest:
        "Η ομάδα σας κερδίζει <b>{point}π</b> χάρη στον <b>{audienceName}</b>",
      teamFastestAnswerIncorrect:
        "Η ταχύτερη απάντηση ήταν λανθασμένη, η ομάδα σας κερδίζει <b>{point}π</b>",
      teamFastestAnswerGetPoint:
        "Ήσασταν οι ταχύτεροι, η ομάδα σας κερδίζει <b>{point}π</b>",
      "💪 Keep up the great work!": "💪 Συνεχίστε την εξαιρετική δουλειά!",
      "Lose streak!": "Ωχ, χάθηκε η σειρά!",
      Correct: "Σωστό",
      "Double streak!": "Δύο στη σειρά!",
      "Triple streak!": "Αυτό είναι το τρίτο!",
      "Four Streak!": "Φανταστική τετράδα!",
      "Awesome!": "Απίθανο!",
      "Keep going!": "Συνεχίστε!",
      "Amazing!": "Καταπληκτικό!",
      "Good job!": "Πολύ καλή δουλειά!",
      Incorrect: "Λάθος",
      my_answers: "Οι Απαντήσεις μου",
      view_answers: "Δείτε τις απαντήσεις",
      final_leaderboard: "Τελική Κατάταξη",
      final_answers_stat:
        "Έχετε <strong>{correctAnswers} / {totalQuiz} σωστά</strong> ({correctRate}%)",
      final_ranking: "Κατάταξη: <strong>{ranking}</strong>",
      your_answer: "Η απάντησή σας",
      review_all_questions:
        "Μπορείτε να δείτε όλες τις ερωτήσεις όταν ολοκληρωθεί το κουίζ",
      not_answer: "Δεν απαντήσατε",
      your_answer_correct: "Η απάντησή σας είναι σωστή",
      your_answer_incorrect: "Η απάντησή σας είναι λάθος",
      your_answer_partially_correct: "Η απάντησή σας είναι μερικώς σωστή",
      you_missed_quiz: "Μόλις χάσατε το κουίζ",
      leaderboard: "Κατάταξη",
      personal_no_quiz_answered: "Δεν έχετε απαντήσει σε κανένα κουίζ",
      team_no_quiz_answered: "Η ομάδα σας δεν έχει απαντήσει σε κανένα κουίζ",
      final_team_answers_stat:
        "Η ομάδα σας έχει <strong>{correctAnswers} / {totalQuiz} σωστά</strong> ({correctRate}%)",
      all_slides: "Όλες οι Διαφάνειες",
      review_slides: "Δείτε τις διαφάνειες",
      review_all_slides_and_questions:
        "Μπορείτε να δείτε όλες τις διαφάνειες και τις ερωτήσεις όταν ολοκληρωθεί η παρουσίαση",
      no_answer: "Καμία απάντηση",
      sign_in_to_save_presentation:
        "Συνδεθείτε για να αποθηκεύσετε αυτή την παρουσίαση",
      continue_with_google: "Συνεχίστε με το Google",
      present_with_ahaslides: "Παρουσιάστε με το AhaSlides",
      view_terms: "Δείτε τους όρους",
      log_out: "Αποσύνδεση",
      attended: "Συμμετείχατε",
      your_future_presentations_shown_here:
        "Οι μελλοντικές σας παρουσιάσεις θα εμφανιστούν εδώ",
      join_a_presentation: "Συμμετοχή σε παρουσίαση",
      presentation_details: "Λεπτομέρειες Παρουσίασης",
      "Leaving the presentation": "Αποχώρηση από την παρουσίαση",
      "This link will take you to a page that is not part of the presentation":
        "Αυτός ο σύνδεσμος θα σας οδηγήσει σε μια σελίδα που δεν είναι μέρος της παρουσίασης",
      thank_for_participation: "Ευχαριστούμε για τη συμμετοχή σας! ❤️",
      give_feedback: "Δώστε ανατροφοδότηση",
      get_ahaslides_free: "Αποκτήστε το AhaSlides δωρεάν",
      exclusive_offer_hr_tech:
        "Αποκλειστική προσφορά για το HR Tech Festival Asia",
      get_ahaslides_plus_free: "✨ Αποκτήστε το AhaSlides Plus δωρεάν ✨",
      ask_presenter_to_view_slides:
        "Παρακαλώ ζητήστε από τον παρουσιαστή σας άδεια για να δείτε τις διαφάνειες",
      login: "Συνδεθείτε",
      sign_up: "Εγγραφείτε",
      or: "ή",
      "Calculating your ranking…": "Υπολογισμός της κατάταξής σας...",
      categorise_unassined_option: "Σύνολο μη ανατεθειμένων Επιλογών",
      Reload: "Επαναφόρτωση",
      "No internet. Retrying...": "Χωρίς ίντερνετ. Προσπαθώ ξανά...",
    };
  },
});
//# sourceMappingURL=app.129c567c.js.map
