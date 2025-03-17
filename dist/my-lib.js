var Ci = Object.defineProperty;
var Ri = (ze, Qr, Jr) => Qr in ze ? Ci(ze, Qr, { enumerable: !0, configurable: !0, writable: !0, value: Jr }) : ze[Qr] = Jr;
var ni = (ze, Qr, Jr) => Ri(ze, typeof Qr != "symbol" ? Qr + "" : Qr, Jr);
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(ze) {
  return ze && ze.__esModule && Object.prototype.hasOwnProperty.call(ze, "default") ? ze.default : ze;
}
var lodash_camelcase, hasRequiredLodash_camelcase;
function requireLodash_camelcase() {
  if (hasRequiredLodash_camelcase) return lodash_camelcase;
  hasRequiredLodash_camelcase = 1;
  var ze = "[object Symbol]", Qr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Jr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Zr = "\\ud800-\\udfff", Gr = "\\u0300-\\u036f\\ufe20-\\ufe23", Wr = "\\u20d0-\\u20f0", Yr = "\\u2700-\\u27bf", Kr = "a-z\\xdf-\\xf6\\xf8-\\xff", en = "\\xac\\xb1\\xd7\\xf7", rn = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", nn = "\\u2000-\\u206f", on = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", an = "A-Z\\xc0-\\xd6\\xd8-\\xde", xn = "\\ufe0e\\ufe0f", wn = en + rn + nn + on, Ln = "['’]", In = "[" + Zr + "]", Un = "[" + wn + "]", Cn = "[" + Gr + Wr + "]", Rn = "\\d+", Sn = "[" + Yr + "]", bn = "[" + Kr + "]", Fn = "[^" + Zr + wn + Rn + Yr + Kr + an + "]", vn = "\\ud83c[\\udffb-\\udfff]", gn = "(?:" + Cn + "|" + vn + ")", kn = "[^" + Zr + "]", dn = "(?:\\ud83c[\\udde6-\\uddff]){2}", un = "[\\ud800-\\udbff][\\udc00-\\udfff]", cn = "[" + an + "]", Mn = "\\u200d", An = "(?:" + bn + "|" + Fn + ")", fn = "(?:" + cn + "|" + Fn + ")", Pn = "(?:" + Ln + "(?:d|ll|m|re|s|t|ve))?", qn = "(?:" + Ln + "(?:D|LL|M|RE|S|T|VE))?", En = gn + "?", zn = "[" + xn + "]?", Jn = "(?:" + Mn + "(?:" + [kn, dn, un].join("|") + ")" + zn + En + ")*", Hn = zn + En + Jn, Xn = "(?:" + [Sn, dn, un].join("|") + ")" + Hn, Zn = "(?:" + [kn + Cn + "?", Cn, dn, un, In].join("|") + ")", jn = RegExp(Ln, "g"), mn = RegExp(Cn, "g"), Gn = RegExp(vn + "(?=" + vn + ")|" + Zn + Hn, "g"), Kn = RegExp([
    cn + "?" + bn + "+" + Pn + "(?=" + [Un, cn, "$"].join("|") + ")",
    fn + "+" + qn + "(?=" + [Un, cn + An, "$"].join("|") + ")",
    cn + "?" + An + "+" + Pn,
    cn + "+" + qn,
    Rn,
    Xn
  ].join("|"), "g"), Bn = RegExp("[" + Mn + Zr + Gr + Wr + xn + "]"), On = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ei = {
    // Latin-1 Supplement block.
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    Ç: "C",
    ç: "c",
    Ð: "D",
    ð: "d",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    Ñ: "N",
    ñ: "n",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ø: "O",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ø: "o",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    Ý: "Y",
    ý: "y",
    ÿ: "y",
    Æ: "Ae",
    æ: "ae",
    Þ: "Th",
    þ: "th",
    ß: "ss",
    // Latin Extended-A block.
    Ā: "A",
    Ă: "A",
    Ą: "A",
    ā: "a",
    ă: "a",
    ą: "a",
    Ć: "C",
    Ĉ: "C",
    Ċ: "C",
    Č: "C",
    ć: "c",
    ĉ: "c",
    ċ: "c",
    č: "c",
    Ď: "D",
    Đ: "D",
    ď: "d",
    đ: "d",
    Ē: "E",
    Ĕ: "E",
    Ė: "E",
    Ę: "E",
    Ě: "E",
    ē: "e",
    ĕ: "e",
    ė: "e",
    ę: "e",
    ě: "e",
    Ĝ: "G",
    Ğ: "G",
    Ġ: "G",
    Ģ: "G",
    ĝ: "g",
    ğ: "g",
    ġ: "g",
    ģ: "g",
    Ĥ: "H",
    Ħ: "H",
    ĥ: "h",
    ħ: "h",
    Ĩ: "I",
    Ī: "I",
    Ĭ: "I",
    Į: "I",
    İ: "I",
    ĩ: "i",
    ī: "i",
    ĭ: "i",
    į: "i",
    ı: "i",
    Ĵ: "J",
    ĵ: "j",
    Ķ: "K",
    ķ: "k",
    ĸ: "k",
    Ĺ: "L",
    Ļ: "L",
    Ľ: "L",
    Ŀ: "L",
    Ł: "L",
    ĺ: "l",
    ļ: "l",
    ľ: "l",
    ŀ: "l",
    ł: "l",
    Ń: "N",
    Ņ: "N",
    Ň: "N",
    Ŋ: "N",
    ń: "n",
    ņ: "n",
    ň: "n",
    ŋ: "n",
    Ō: "O",
    Ŏ: "O",
    Ő: "O",
    ō: "o",
    ŏ: "o",
    ő: "o",
    Ŕ: "R",
    Ŗ: "R",
    Ř: "R",
    ŕ: "r",
    ŗ: "r",
    ř: "r",
    Ś: "S",
    Ŝ: "S",
    Ş: "S",
    Š: "S",
    ś: "s",
    ŝ: "s",
    ş: "s",
    š: "s",
    Ţ: "T",
    Ť: "T",
    Ŧ: "T",
    ţ: "t",
    ť: "t",
    ŧ: "t",
    Ũ: "U",
    Ū: "U",
    Ŭ: "U",
    Ů: "U",
    Ű: "U",
    Ų: "U",
    ũ: "u",
    ū: "u",
    ŭ: "u",
    ů: "u",
    ű: "u",
    ų: "u",
    Ŵ: "W",
    ŵ: "w",
    Ŷ: "Y",
    ŷ: "y",
    Ÿ: "Y",
    Ź: "Z",
    Ż: "Z",
    Ž: "Z",
    ź: "z",
    ż: "z",
    ž: "z",
    Ĳ: "IJ",
    ĳ: "ij",
    Œ: "Oe",
    œ: "oe",
    ŉ: "'n",
    ſ: "ss"
  }, Vn = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal, ti = typeof self == "object" && self && self.Object === Object && self, hn = Vn || ti || Function("return this")();
  function Dn(tn, sn, ln, Qn) {
    for (var pn = -1, Yn = tn ? tn.length : 0; ++pn < Yn; )
      ln = sn(ln, tn[pn], pn, tn);
    return ln;
  }
  function _n(tn) {
    return tn.split("");
  }
  function ri(tn) {
    return tn.match(Qr) || [];
  }
  function yn(tn) {
    return function(sn) {
      return tn == null ? void 0 : tn[sn];
    };
  }
  var Tn = yn(ei);
  function Nn(tn) {
    return Bn.test(tn);
  }
  function Wn(tn) {
    return On.test(tn);
  }
  function si(tn) {
    return Nn(tn) ? ui(tn) : _n(tn);
  }
  function ui(tn) {
    return tn.match(Gn) || [];
  }
  function li(tn) {
    return tn.match(Kn) || [];
  }
  var fi = Object.prototype, ci = fi.toString, ii = hn.Symbol, oi = ii ? ii.prototype : void 0, ai = oi ? oi.toString : void 0;
  function di(tn, sn, ln) {
    var Qn = -1, pn = tn.length;
    sn < 0 && (sn = -sn > pn ? 0 : pn + sn), ln = ln > pn ? pn : ln, ln < 0 && (ln += pn), pn = sn > ln ? 0 : ln - sn >>> 0, sn >>>= 0;
    for (var Yn = Array(pn); ++Qn < pn; )
      Yn[Qn] = tn[Qn + sn];
    return Yn;
  }
  function hi(tn) {
    if (typeof tn == "string")
      return tn;
    if (xi(tn))
      return ai ? ai.call(tn) : "";
    var sn = tn + "";
    return sn == "0" && 1 / tn == -1 / 0 ? "-0" : sn;
  }
  function vi(tn, sn, ln) {
    var Qn = tn.length;
    return ln = ln === void 0 ? Qn : ln, di(tn, sn, ln);
  }
  function gi(tn) {
    return function(sn) {
      sn = $n(sn);
      var ln = Nn(sn) ? si(sn) : void 0, Qn = ln ? ln[0] : sn.charAt(0), pn = ln ? vi(ln, 1).join("") : sn.slice(1);
      return Qn[tn]() + pn;
    };
  }
  function mi(tn) {
    return function(sn) {
      return Dn(Ei(wi(sn).replace(jn, "")), tn, "");
    };
  }
  function pi(tn) {
    return !!tn && typeof tn == "object";
  }
  function xi(tn) {
    return typeof tn == "symbol" || pi(tn) && ci.call(tn) == ze;
  }
  function $n(tn) {
    return tn == null ? "" : hi(tn);
  }
  var bi = mi(function(tn, sn, ln) {
    return sn = sn.toLowerCase(), tn + (ln ? yi(sn) : sn);
  });
  function yi(tn) {
    return Si($n(tn).toLowerCase());
  }
  function wi(tn) {
    return tn = $n(tn), tn && tn.replace(Jr, Tn).replace(mn, "");
  }
  var Si = gi("toUpperCase");
  function Ei(tn, sn, ln) {
    return tn = $n(tn), sn = sn, sn === void 0 ? Wn(tn) ? li(tn) : ri(tn) : tn.match(sn) || [];
  }
  return lodash_camelcase = bi, lodash_camelcase;
}
var lodash_camelcaseExports = requireLodash_camelcase();
const camelCase = /* @__PURE__ */ getDefaultExportFromCjs(lodash_camelcaseExports);
var htmx_min$1 = { exports: {} }, htmx_min = htmx_min$1.exports, hasRequiredHtmx_min;
function requireHtmx_min() {
  return hasRequiredHtmx_min || (hasRequiredHtmx_min = 1, function(module) {
    (function(ze, Qr) {
      module.exports ? module.exports = Qr() : ze.htmx = ze.htmx || Qr();
    })(typeof self < "u" ? self : htmx_min, function() {
      return function() {
        var Q = { onLoad: F, process: zt, on: de, off: ge, trigger: ce, ajax: Nr, find: C, findAll: f, closest: v, values: function(ze, Qr) {
          var Jr = dr(ze, Qr || "post");
          return Jr.values;
        }, remove: _, addClass: z, removeClass: n, toggleClass: $, takeClass: W, defineExtension: Ur, removeExtension: Br, logAll: V, logNone: j, logger: null, config: { historyEnabled: !0, historyCacheSize: 10, refreshOnHistoryMiss: !1, defaultSwapStyle: "innerHTML", defaultSwapDelay: 0, defaultSettleDelay: 20, includeIndicatorStyles: !0, indicatorClass: "htmx-indicator", requestClass: "htmx-request", addedClass: "htmx-added", settlingClass: "htmx-settling", swappingClass: "htmx-swapping", allowEval: !0, allowScriptTags: !0, inlineScriptNonce: "", attributesToSettle: ["class", "style", "width", "height"], withCredentials: !1, timeout: 0, wsReconnectDelay: "full-jitter", wsBinaryType: "blob", disableSelector: "[hx-disable], [data-hx-disable]", useTemplateFragments: !1, scrollBehavior: "smooth", defaultFocusScroll: !1, getCacheBusterParam: !1, globalViewTransitions: !1, methodsThatUseUrlParams: ["get"], selfRequestsOnly: !1, ignoreTitle: !1, scrollIntoViewOnBoost: !0, triggerSpecsCache: null }, parseInterval: d, _: t, createEventSource: function(ze) {
          return new EventSource(ze, { withCredentials: !0 });
        }, createWebSocket: function(ze) {
          var Qr = new WebSocket(ze, []);
          return Qr.binaryType = Q.config.wsBinaryType, Qr;
        }, version: "1.9.12" }, r = { addTriggerHandler: Lt, bodyContains: se, canAccessLocalStorage: U, findThisElement: xe, filterValues: yr, hasAttribute: o, getAttributeValue: te, getClosestAttributeValue: ne, getClosestMatch: c, getExpressionVars: Hr, getHeaders: xr, getInputValues: dr, getInternalData: ae, getSwapSpecification: wr, getTriggerSpecs: it, getTarget: ye, makeFragment: l, mergeObjects: le, makeSettleInfo: T, oobSwap: Ee, querySelectorExt: ue, selectAndSwap: je, settleImmediately: nr, shouldCancel: ut, triggerEvent: ce, triggerErrorEvent: fe, withExtensions: R }, w = ["get", "post", "put", "delete", "patch"], i = w.map(function(ze) {
          return "[hx-" + ze + "], [data-hx-" + ze + "]";
        }).join(", "), S = e("head"), q = e("title"), H = e("svg", !0);
        function e(ze, Qr) {
          return new RegExp("<" + ze + "(\\s[^>]*>|>)([\\s\\S]*?)<\\/" + ze + ">", Qr ? "gim" : "im");
        }
        function d(ze) {
          if (ze == null)
            return;
          let Qr = NaN;
          return ze.slice(-2) == "ms" ? Qr = parseFloat(ze.slice(0, -2)) : ze.slice(-1) == "s" ? Qr = parseFloat(ze.slice(0, -1)) * 1e3 : ze.slice(-1) == "m" ? Qr = parseFloat(ze.slice(0, -1)) * 1e3 * 60 : Qr = parseFloat(ze), isNaN(Qr) ? void 0 : Qr;
        }
        function ee(ze, Qr) {
          return ze.getAttribute && ze.getAttribute(Qr);
        }
        function o(ze, Qr) {
          return ze.hasAttribute && (ze.hasAttribute(Qr) || ze.hasAttribute("data-" + Qr));
        }
        function te(ze, Qr) {
          return ee(ze, Qr) || ee(ze, "data-" + Qr);
        }
        function u(ze) {
          return ze.parentElement;
        }
        function re() {
          return document;
        }
        function c(ze, Qr) {
          for (; ze && !Qr(ze); )
            ze = u(ze);
          return ze || null;
        }
        function L(ze, Qr, Jr) {
          var Zr = te(Qr, Jr), Gr = te(Qr, "hx-disinherit");
          return ze !== Qr && Gr && (Gr === "*" || Gr.split(" ").indexOf(Jr) >= 0) ? "unset" : Zr;
        }
        function ne(ze, Qr) {
          var Jr = null;
          if (c(ze, function(Zr) {
            return Jr = L(ze, Zr, Qr);
          }), Jr !== "unset")
            return Jr;
        }
        function h(ze, Qr) {
          var Jr = ze.matches || ze.matchesSelector || ze.msMatchesSelector || ze.mozMatchesSelector || ze.webkitMatchesSelector || ze.oMatchesSelector;
          return Jr && Jr.call(ze, Qr);
        }
        function A(ze) {
          var Qr = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Jr = Qr.exec(ze);
          return Jr ? Jr[1].toLowerCase() : "";
        }
        function s(ze, Qr) {
          for (var Jr = new DOMParser(), Zr = Jr.parseFromString(ze, "text/html"), Gr = Zr.body; Qr > 0; )
            Qr--, Gr = Gr.firstChild;
          return Gr == null && (Gr = re().createDocumentFragment()), Gr;
        }
        function N(ze) {
          return /<body/.test(ze);
        }
        function l(ze) {
          var Qr = !N(ze), Jr = A(ze), Zr = ze;
          if (Jr === "head" && (Zr = Zr.replace(S, "")), Q.config.useTemplateFragments && Qr) {
            var Gr = s("<body><template>" + Zr + "</template></body>", 0), Wr = Gr.querySelector("template").content;
            return Q.config.allowScriptTags ? oe(Wr.querySelectorAll("script"), function(Yr) {
              Q.config.inlineScriptNonce && (Yr.nonce = Q.config.inlineScriptNonce), Yr.htmxExecuted = navigator.userAgent.indexOf("Firefox") === -1;
            }) : oe(Wr.querySelectorAll("script"), function(Yr) {
              _(Yr);
            }), Wr;
          }
          switch (Jr) {
            case "thead":
            case "tbody":
            case "tfoot":
            case "colgroup":
            case "caption":
              return s("<table>" + Zr + "</table>", 1);
            case "col":
              return s("<table><colgroup>" + Zr + "</colgroup></table>", 2);
            case "tr":
              return s("<table><tbody>" + Zr + "</tbody></table>", 2);
            case "td":
            case "th":
              return s("<table><tbody><tr>" + Zr + "</tr></tbody></table>", 3);
            case "script":
            case "style":
              return s("<div>" + Zr + "</div>", 1);
            default:
              return s(Zr, 0);
          }
        }
        function ie(ze) {
          ze && ze();
        }
        function I(ze, Qr) {
          return Object.prototype.toString.call(ze) === "[object " + Qr + "]";
        }
        function k(ze) {
          return I(ze, "Function");
        }
        function P(ze) {
          return I(ze, "Object");
        }
        function ae(ze) {
          var Qr = "htmx-internal-data", Jr = ze[Qr];
          return Jr || (Jr = ze[Qr] = {}), Jr;
        }
        function M(ze) {
          var Qr = [];
          if (ze)
            for (var Jr = 0; Jr < ze.length; Jr++)
              Qr.push(ze[Jr]);
          return Qr;
        }
        function oe(ze, Qr) {
          if (ze)
            for (var Jr = 0; Jr < ze.length; Jr++)
              Qr(ze[Jr]);
        }
        function X(ze) {
          var Qr = ze.getBoundingClientRect(), Jr = Qr.top, Zr = Qr.bottom;
          return Jr < window.innerHeight && Zr >= 0;
        }
        function se(ze) {
          return ze.getRootNode && ze.getRootNode() instanceof window.ShadowRoot ? re().body.contains(ze.getRootNode().host) : re().body.contains(ze);
        }
        function D(ze) {
          return ze.trim().split(/\s+/);
        }
        function le(ze, Qr) {
          for (var Jr in Qr)
            Qr.hasOwnProperty(Jr) && (ze[Jr] = Qr[Jr]);
          return ze;
        }
        function E(ze) {
          try {
            return JSON.parse(ze);
          } catch (Qr) {
            return b(Qr), null;
          }
        }
        function U() {
          var ze = "htmx:localStorageTest";
          try {
            return localStorage.setItem(ze, ze), localStorage.removeItem(ze), !0;
          } catch {
            return !1;
          }
        }
        function B(ze) {
          try {
            var Qr = new URL(ze);
            return Qr && (ze = Qr.pathname + Qr.search), /^\/$/.test(ze) || (ze = ze.replace(/\/+$/, "")), ze;
          } catch {
            return ze;
          }
        }
        function t(e) {
          return Tr(re().body, function() {
            return eval(e);
          });
        }
        function F(ze) {
          var Qr = Q.on("htmx:load", function(Jr) {
            ze(Jr.detail.elt);
          });
          return Qr;
        }
        function V() {
          Q.logger = function(ze, Qr, Jr) {
            console && console.log(Qr, ze, Jr);
          };
        }
        function j() {
          Q.logger = null;
        }
        function C(ze, Qr) {
          return Qr ? ze.querySelector(Qr) : C(re(), ze);
        }
        function f(ze, Qr) {
          return Qr ? ze.querySelectorAll(Qr) : f(re(), ze);
        }
        function _(ze, Qr) {
          ze = p(ze), Qr ? setTimeout(function() {
            _(ze), ze = null;
          }, Qr) : ze.parentElement.removeChild(ze);
        }
        function z(ze, Qr, Jr) {
          ze = p(ze), Jr ? setTimeout(function() {
            z(ze, Qr), ze = null;
          }, Jr) : ze.classList && ze.classList.add(Qr);
        }
        function n(ze, Qr, Jr) {
          ze = p(ze), Jr ? setTimeout(function() {
            n(ze, Qr), ze = null;
          }, Jr) : ze.classList && (ze.classList.remove(Qr), ze.classList.length === 0 && ze.removeAttribute("class"));
        }
        function $(ze, Qr) {
          ze = p(ze), ze.classList.toggle(Qr);
        }
        function W(ze, Qr) {
          ze = p(ze), oe(ze.parentElement.children, function(Jr) {
            n(Jr, Qr);
          }), z(ze, Qr);
        }
        function v(ze, Qr) {
          if (ze = p(ze), ze.closest)
            return ze.closest(Qr);
          do
            if (ze == null || h(ze, Qr))
              return ze;
          while (ze = ze && u(ze));
          return null;
        }
        function g(ze, Qr) {
          return ze.substring(0, Qr.length) === Qr;
        }
        function G(ze, Qr) {
          return ze.substring(ze.length - Qr.length) === Qr;
        }
        function J(ze) {
          var Qr = ze.trim();
          return g(Qr, "<") && G(Qr, "/>") ? Qr.substring(1, Qr.length - 2) : Qr;
        }
        function Z(ze, Qr) {
          return Qr.indexOf("closest ") === 0 ? [v(ze, J(Qr.substr(8)))] : Qr.indexOf("find ") === 0 ? [C(ze, J(Qr.substr(5)))] : Qr === "next" ? [ze.nextElementSibling] : Qr.indexOf("next ") === 0 ? [K(ze, J(Qr.substr(5)))] : Qr === "previous" ? [ze.previousElementSibling] : Qr.indexOf("previous ") === 0 ? [Y(ze, J(Qr.substr(9)))] : Qr === "document" ? [document] : Qr === "window" ? [window] : Qr === "body" ? [document.body] : re().querySelectorAll(J(Qr));
        }
        var K = function(ze, Qr) {
          for (var Jr = re().querySelectorAll(Qr), Zr = 0; Zr < Jr.length; Zr++) {
            var Gr = Jr[Zr];
            if (Gr.compareDocumentPosition(ze) === Node.DOCUMENT_POSITION_PRECEDING)
              return Gr;
          }
        }, Y = function(ze, Qr) {
          for (var Jr = re().querySelectorAll(Qr), Zr = Jr.length - 1; Zr >= 0; Zr--) {
            var Gr = Jr[Zr];
            if (Gr.compareDocumentPosition(ze) === Node.DOCUMENT_POSITION_FOLLOWING)
              return Gr;
          }
        };
        function ue(ze, Qr) {
          return Qr ? Z(ze, Qr)[0] : Z(re().body, ze)[0];
        }
        function p(ze) {
          return I(ze, "String") ? C(ze) : ze;
        }
        function ve(ze, Qr, Jr) {
          return k(Qr) ? { target: re().body, event: ze, listener: Qr } : { target: p(ze), event: Qr, listener: Jr };
        }
        function de(ze, Qr, Jr) {
          jr(function() {
            var Gr = ve(ze, Qr, Jr);
            Gr.target.addEventListener(Gr.event, Gr.listener);
          });
          var Zr = k(Qr);
          return Zr ? Qr : Jr;
        }
        function ge(ze, Qr, Jr) {
          return jr(function() {
            var Zr = ve(ze, Qr, Jr);
            Zr.target.removeEventListener(Zr.event, Zr.listener);
          }), k(Qr) ? Qr : Jr;
        }
        var pe = re().createElement("output");
        function me(ze, Qr) {
          var Jr = ne(ze, Qr);
          if (Jr) {
            if (Jr === "this")
              return [xe(ze, Qr)];
            var Zr = Z(ze, Jr);
            return Zr.length === 0 ? (b('The selector "' + Jr + '" on ' + Qr + " returned no matches!"), [pe]) : Zr;
          }
        }
        function xe(ze, Qr) {
          return c(ze, function(Jr) {
            return te(Jr, Qr) != null;
          });
        }
        function ye(ze) {
          var Qr = ne(ze, "hx-target");
          if (Qr)
            return Qr === "this" ? xe(ze, "hx-target") : ue(ze, Qr);
          var Jr = ae(ze);
          return Jr.boosted ? re().body : ze;
        }
        function be(ze) {
          for (var Qr = Q.config.attributesToSettle, Jr = 0; Jr < Qr.length; Jr++)
            if (ze === Qr[Jr])
              return !0;
          return !1;
        }
        function we(ze, Qr) {
          oe(ze.attributes, function(Jr) {
            !Qr.hasAttribute(Jr.name) && be(Jr.name) && ze.removeAttribute(Jr.name);
          }), oe(Qr.attributes, function(Jr) {
            be(Jr.name) && ze.setAttribute(Jr.name, Jr.value);
          });
        }
        function Se(ze, Qr) {
          for (var Jr = Fr(Qr), Zr = 0; Zr < Jr.length; Zr++) {
            var Gr = Jr[Zr];
            try {
              if (Gr.isInlineSwap(ze))
                return !0;
            } catch (Wr) {
              b(Wr);
            }
          }
          return ze === "outerHTML";
        }
        function Ee(ze, Qr, Jr) {
          var Zr = "#" + ee(Qr, "id"), Gr = "outerHTML";
          ze === "true" || (ze.indexOf(":") > 0 ? (Gr = ze.substr(0, ze.indexOf(":")), Zr = ze.substr(ze.indexOf(":") + 1, ze.length)) : Gr = ze);
          var Wr = re().querySelectorAll(Zr);
          return Wr ? (oe(Wr, function(Yr) {
            var Kr, en = Qr.cloneNode(!0);
            Kr = re().createDocumentFragment(), Kr.appendChild(en), Se(Gr, Yr) || (Kr = en);
            var rn = { shouldSwap: !0, target: Yr, fragment: Kr };
            ce(Yr, "htmx:oobBeforeSwap", rn) && (Yr = rn.target, rn.shouldSwap && Fe(Gr, Yr, Yr, Kr, Jr), oe(Jr.elts, function(nn) {
              ce(nn, "htmx:oobAfterSwap", rn);
            }));
          }), Qr.parentNode.removeChild(Qr)) : (Qr.parentNode.removeChild(Qr), fe(re().body, "htmx:oobErrorNoTarget", { content: Qr })), ze;
        }
        function Ce(ze, Qr, Jr) {
          var Zr = ne(ze, "hx-select-oob");
          if (Zr)
            for (var Gr = Zr.split(","), Wr = 0; Wr < Gr.length; Wr++) {
              var Yr = Gr[Wr].split(":", 2), Kr = Yr[0].trim();
              Kr.indexOf("#") === 0 && (Kr = Kr.substring(1));
              var en = Yr[1] || "true", rn = Qr.querySelector("#" + Kr);
              rn && Ee(en, rn, Jr);
            }
          oe(f(Qr, "[hx-swap-oob], [data-hx-swap-oob]"), function(nn) {
            var on = te(nn, "hx-swap-oob");
            on != null && Ee(on, nn, Jr);
          });
        }
        function Re(ze) {
          oe(f(ze, "[hx-preserve], [data-hx-preserve]"), function(Qr) {
            var Jr = te(Qr, "id"), Zr = re().getElementById(Jr);
            Zr != null && Qr.parentNode.replaceChild(Zr, Qr);
          });
        }
        function Te(ze, Qr, Jr) {
          oe(Qr.querySelectorAll("[id]"), function(Zr) {
            var Gr = ee(Zr, "id");
            if (Gr && Gr.length > 0) {
              var Wr = Gr.replace("'", "\\'"), Yr = Zr.tagName.replace(":", "\\:"), Kr = ze.querySelector(Yr + "[id='" + Wr + "']");
              if (Kr && Kr !== ze) {
                var en = Zr.cloneNode();
                we(Zr, Kr), Jr.tasks.push(function() {
                  we(Zr, en);
                });
              }
            }
          });
        }
        function Oe(ze) {
          return function() {
            n(ze, Q.config.addedClass), zt(ze), Nt(ze), qe(ze), ce(ze, "htmx:load");
          };
        }
        function qe(ze) {
          var Qr = "[autofocus]", Jr = h(ze, Qr) ? ze : ze.querySelector(Qr);
          Jr != null && Jr.focus();
        }
        function a(ze, Qr, Jr, Zr) {
          for (Te(ze, Jr, Zr); Jr.childNodes.length > 0; ) {
            var Gr = Jr.firstChild;
            z(Gr, Q.config.addedClass), ze.insertBefore(Gr, Qr), Gr.nodeType !== Node.TEXT_NODE && Gr.nodeType !== Node.COMMENT_NODE && Zr.tasks.push(Oe(Gr));
          }
        }
        function He(ze, Qr) {
          for (var Jr = 0; Jr < ze.length; )
            Qr = (Qr << 5) - Qr + ze.charCodeAt(Jr++) | 0;
          return Qr;
        }
        function Le(ze) {
          var Qr = 0;
          if (ze.attributes)
            for (var Jr = 0; Jr < ze.attributes.length; Jr++) {
              var Zr = ze.attributes[Jr];
              Zr.value && (Qr = He(Zr.name, Qr), Qr = He(Zr.value, Qr));
            }
          return Qr;
        }
        function Ae(ze) {
          var Qr = ae(ze);
          if (Qr.onHandlers) {
            for (var Jr = 0; Jr < Qr.onHandlers.length; Jr++) {
              const Zr = Qr.onHandlers[Jr];
              ze.removeEventListener(Zr.event, Zr.listener);
            }
            delete Qr.onHandlers;
          }
        }
        function Ne(ze) {
          var Qr = ae(ze);
          Qr.timeout && clearTimeout(Qr.timeout), Qr.webSocket && Qr.webSocket.close(), Qr.sseEventSource && Qr.sseEventSource.close(), Qr.listenerInfos && oe(Qr.listenerInfos, function(Jr) {
            Jr.on && Jr.on.removeEventListener(Jr.trigger, Jr.listener);
          }), Ae(ze), oe(Object.keys(Qr), function(Jr) {
            delete Qr[Jr];
          });
        }
        function m(ze) {
          ce(ze, "htmx:beforeCleanupElement"), Ne(ze), ze.children && oe(ze.children, function(Qr) {
            m(Qr);
          });
        }
        function Ie(ze, Qr, Jr) {
          if (ze.tagName === "BODY")
            return Ue(ze, Qr, Jr);
          var Zr, Gr = ze.previousSibling;
          for (a(u(ze), ze, Qr, Jr), Gr == null ? Zr = u(ze).firstChild : Zr = Gr.nextSibling, Jr.elts = Jr.elts.filter(function(Wr) {
            return Wr != ze;
          }); Zr && Zr !== ze; )
            Zr.nodeType === Node.ELEMENT_NODE && Jr.elts.push(Zr), Zr = Zr.nextElementSibling;
          m(ze), u(ze).removeChild(ze);
        }
        function ke(ze, Qr, Jr) {
          return a(ze, ze.firstChild, Qr, Jr);
        }
        function Pe(ze, Qr, Jr) {
          return a(u(ze), ze, Qr, Jr);
        }
        function Me(ze, Qr, Jr) {
          return a(ze, null, Qr, Jr);
        }
        function Xe(ze, Qr, Jr) {
          return a(u(ze), ze.nextSibling, Qr, Jr);
        }
        function De(ze, Qr, Jr) {
          return m(ze), u(ze).removeChild(ze);
        }
        function Ue(ze, Qr, Jr) {
          var Zr = ze.firstChild;
          if (a(ze, Zr, Qr, Jr), Zr) {
            for (; Zr.nextSibling; )
              m(Zr.nextSibling), ze.removeChild(Zr.nextSibling);
            m(Zr), ze.removeChild(Zr);
          }
        }
        function Be(ze, Qr, Jr) {
          var Zr = Jr || ne(ze, "hx-select");
          if (Zr) {
            var Gr = re().createDocumentFragment();
            oe(Qr.querySelectorAll(Zr), function(Wr) {
              Gr.appendChild(Wr);
            }), Qr = Gr;
          }
          return Qr;
        }
        function Fe(ze, Qr, Jr, Zr, Gr) {
          switch (ze) {
            case "none":
              return;
            case "outerHTML":
              Ie(Jr, Zr, Gr);
              return;
            case "afterbegin":
              ke(Jr, Zr, Gr);
              return;
            case "beforebegin":
              Pe(Jr, Zr, Gr);
              return;
            case "beforeend":
              Me(Jr, Zr, Gr);
              return;
            case "afterend":
              Xe(Jr, Zr, Gr);
              return;
            case "delete":
              De(Jr);
              return;
            default:
              for (var Wr = Fr(Qr), Yr = 0; Yr < Wr.length; Yr++) {
                var Kr = Wr[Yr];
                try {
                  var en = Kr.handleSwap(ze, Jr, Zr, Gr);
                  if (en) {
                    if (typeof en.length < "u")
                      for (var rn = 0; rn < en.length; rn++) {
                        var nn = en[rn];
                        nn.nodeType !== Node.TEXT_NODE && nn.nodeType !== Node.COMMENT_NODE && Gr.tasks.push(Oe(nn));
                      }
                    return;
                  }
                } catch (on) {
                  b(on);
                }
              }
              ze === "innerHTML" ? Ue(Jr, Zr, Gr) : Fe(Q.config.defaultSwapStyle, Qr, Jr, Zr, Gr);
          }
        }
        function Ve(ze) {
          if (ze.indexOf("<title") > -1) {
            var Qr = ze.replace(H, ""), Jr = Qr.match(q);
            if (Jr)
              return Jr[2];
          }
        }
        function je(ze, Qr, Jr, Zr, Gr, Wr) {
          Gr.title = Ve(Zr);
          var Yr = l(Zr);
          if (Yr)
            return Ce(Jr, Yr, Gr), Yr = Be(Jr, Yr, Wr), Re(Yr), Fe(ze, Jr, Qr, Yr, Gr);
        }
        function _e(ze, Qr, Jr) {
          var Zr = ze.getResponseHeader(Qr);
          if (Zr.indexOf("{") === 0) {
            var Gr = E(Zr);
            for (var Wr in Gr)
              if (Gr.hasOwnProperty(Wr)) {
                var Yr = Gr[Wr];
                P(Yr) || (Yr = { value: Yr }), ce(Jr, Wr, Yr);
              }
          } else
            for (var Kr = Zr.split(","), en = 0; en < Kr.length; en++)
              ce(Jr, Kr[en].trim(), []);
        }
        var x = /[\s,]/, $e = /[_$a-zA-Z]/, We = /[_$a-zA-Z0-9]/, Ge = ['"', "'", "/"], Je = /[^\s]/, Ze = /[{(]/, Ke = /[})]/;
        function Ye(ze) {
          for (var Qr = [], Jr = 0; Jr < ze.length; ) {
            if ($e.exec(ze.charAt(Jr))) {
              for (var Zr = Jr; We.exec(ze.charAt(Jr + 1)); )
                Jr++;
              Qr.push(ze.substr(Zr, Jr - Zr + 1));
            } else if (Ge.indexOf(ze.charAt(Jr)) !== -1) {
              var Gr = ze.charAt(Jr), Zr = Jr;
              for (Jr++; Jr < ze.length && ze.charAt(Jr) !== Gr; )
                ze.charAt(Jr) === "\\" && Jr++, Jr++;
              Qr.push(ze.substr(Zr, Jr - Zr + 1));
            } else {
              var Wr = ze.charAt(Jr);
              Qr.push(Wr);
            }
            Jr++;
          }
          return Qr;
        }
        function Qe(ze, Qr, Jr) {
          return $e.exec(ze.charAt(0)) && ze !== "true" && ze !== "false" && ze !== "this" && ze !== Jr && Qr !== ".";
        }
        function et(ze, Qr, Jr) {
          if (Qr[0] === "[") {
            Qr.shift();
            for (var Zr = 1, Gr = " return (function(" + Jr + "){ return (", Wr = null; Qr.length > 0; ) {
              var Yr = Qr[0];
              if (Yr === "]") {
                if (Zr--, Zr === 0) {
                  Wr === null && (Gr = Gr + "true"), Qr.shift(), Gr += ")})";
                  try {
                    var Kr = Tr(ze, function() {
                      return Function(Gr)();
                    }, function() {
                      return !0;
                    });
                    return Kr.source = Gr, Kr;
                  } catch (en) {
                    return fe(re().body, "htmx:syntax:error", { error: en, source: Gr }), null;
                  }
                }
              } else Yr === "[" && Zr++;
              Qe(Yr, Wr, Jr) ? Gr += "((" + Jr + "." + Yr + ") ? (" + Jr + "." + Yr + ") : (window." + Yr + "))" : Gr = Gr + Yr, Wr = Qr.shift();
            }
          }
        }
        function y(ze, Qr) {
          for (var Jr = ""; ze.length > 0 && !Qr.test(ze[0]); )
            Jr += ze.shift();
          return Jr;
        }
        function tt(ze) {
          var Qr;
          return ze.length > 0 && Ze.test(ze[0]) ? (ze.shift(), Qr = y(ze, Ke).trim(), ze.shift()) : Qr = y(ze, x), Qr;
        }
        var rt = "input, textarea, select";
        function nt(ze, Qr, Jr) {
          var Zr = [], Gr = Ye(Qr);
          do {
            y(Gr, Je);
            var Wr = Gr.length, Yr = y(Gr, /[,\[\s]/);
            if (Yr !== "")
              if (Yr === "every") {
                var Kr = { trigger: "every" };
                y(Gr, Je), Kr.pollInterval = d(y(Gr, /[,\[\s]/)), y(Gr, Je);
                var en = et(ze, Gr, "event");
                en && (Kr.eventFilter = en), Zr.push(Kr);
              } else if (Yr.indexOf("sse:") === 0)
                Zr.push({ trigger: "sse", sseEvent: Yr.substr(4) });
              else {
                var rn = { trigger: Yr }, en = et(ze, Gr, "event");
                for (en && (rn.eventFilter = en); Gr.length > 0 && Gr[0] !== ","; ) {
                  y(Gr, Je);
                  var nn = Gr.shift();
                  if (nn === "changed")
                    rn.changed = !0;
                  else if (nn === "once")
                    rn.once = !0;
                  else if (nn === "consume")
                    rn.consume = !0;
                  else if (nn === "delay" && Gr[0] === ":")
                    Gr.shift(), rn.delay = d(y(Gr, x));
                  else if (nn === "from" && Gr[0] === ":") {
                    if (Gr.shift(), Ze.test(Gr[0]))
                      var on = tt(Gr);
                    else {
                      var on = y(Gr, x);
                      if (on === "closest" || on === "find" || on === "next" || on === "previous") {
                        Gr.shift();
                        var an = tt(Gr);
                        an.length > 0 && (on += " " + an);
                      }
                    }
                    rn.from = on;
                  } else nn === "target" && Gr[0] === ":" ? (Gr.shift(), rn.target = tt(Gr)) : nn === "throttle" && Gr[0] === ":" ? (Gr.shift(), rn.throttle = d(y(Gr, x))) : nn === "queue" && Gr[0] === ":" ? (Gr.shift(), rn.queue = y(Gr, x)) : nn === "root" && Gr[0] === ":" ? (Gr.shift(), rn[nn] = tt(Gr)) : nn === "threshold" && Gr[0] === ":" ? (Gr.shift(), rn[nn] = y(Gr, x)) : fe(ze, "htmx:syntax:error", { token: Gr.shift() });
                }
                Zr.push(rn);
              }
            Gr.length === Wr && fe(ze, "htmx:syntax:error", { token: Gr.shift() }), y(Gr, Je);
          } while (Gr[0] === "," && Gr.shift());
          return Jr && (Jr[Qr] = Zr), Zr;
        }
        function it(ze) {
          var Qr = te(ze, "hx-trigger"), Jr = [];
          if (Qr) {
            var Zr = Q.config.triggerSpecsCache;
            Jr = Zr && Zr[Qr] || nt(ze, Qr, Zr);
          }
          return Jr.length > 0 ? Jr : h(ze, "form") ? [{ trigger: "submit" }] : h(ze, 'input[type="button"], input[type="submit"]') ? [{ trigger: "click" }] : h(ze, rt) ? [{ trigger: "change" }] : [{ trigger: "click" }];
        }
        function at(ze) {
          ae(ze).cancelled = !0;
        }
        function ot(ze, Qr, Jr) {
          var Zr = ae(ze);
          Zr.timeout = setTimeout(function() {
            se(ze) && Zr.cancelled !== !0 && (ct(Jr, ze, Wt("hx:poll:trigger", { triggerSpec: Jr, target: ze })) || Qr(ze), ot(ze, Qr, Jr));
          }, Jr.pollInterval);
        }
        function st(ze) {
          return location.hostname === ze.hostname && ee(ze, "href") && ee(ze, "href").indexOf("#") !== 0;
        }
        function lt(ze, Qr, Jr) {
          if (ze.tagName === "A" && st(ze) && (ze.target === "" || ze.target === "_self") || ze.tagName === "FORM") {
            Qr.boosted = !0;
            var Zr, Gr;
            if (ze.tagName === "A")
              Zr = "get", Gr = ee(ze, "href");
            else {
              var Wr = ee(ze, "method");
              Zr = Wr ? Wr.toLowerCase() : "get", Gr = ee(ze, "action");
            }
            Jr.forEach(function(Yr) {
              ht(ze, function(Kr, en) {
                if (v(Kr, Q.config.disableSelector)) {
                  m(Kr);
                  return;
                }
                he(Zr, Gr, Kr, en);
              }, Qr, Yr, !0);
            });
          }
        }
        function ut(ze, Qr) {
          return !!((ze.type === "submit" || ze.type === "click") && (Qr.tagName === "FORM" || h(Qr, 'input[type="submit"], button') && v(Qr, "form") !== null || Qr.tagName === "A" && Qr.href && (Qr.getAttribute("href") === "#" || Qr.getAttribute("href").indexOf("#") !== 0)));
        }
        function ft(ze, Qr) {
          return ae(ze).boosted && ze.tagName === "A" && Qr.type === "click" && (Qr.ctrlKey || Qr.metaKey);
        }
        function ct(ze, Qr, Jr) {
          var Zr = ze.eventFilter;
          if (Zr)
            try {
              return Zr.call(Qr, Jr) !== !0;
            } catch (Gr) {
              return fe(re().body, "htmx:eventFilter:error", { error: Gr, source: Zr.source }), !0;
            }
          return !1;
        }
        function ht(ze, Qr, Jr, Zr, Gr) {
          var Wr = ae(ze), Yr;
          Zr.from ? Yr = Z(ze, Zr.from) : Yr = [ze], Zr.changed && Yr.forEach(function(Kr) {
            var en = ae(Kr);
            en.lastValue = Kr.value;
          }), oe(Yr, function(Kr) {
            var en = function(rn) {
              if (!se(ze)) {
                Kr.removeEventListener(Zr.trigger, en);
                return;
              }
              if (!ft(ze, rn) && ((Gr || ut(rn, ze)) && rn.preventDefault(), !ct(Zr, ze, rn))) {
                var nn = ae(rn);
                if (nn.triggerSpec = Zr, nn.handledFor == null && (nn.handledFor = []), nn.handledFor.indexOf(ze) < 0) {
                  if (nn.handledFor.push(ze), Zr.consume && rn.stopPropagation(), Zr.target && rn.target && !h(rn.target, Zr.target))
                    return;
                  if (Zr.once) {
                    if (Wr.triggeredOnce)
                      return;
                    Wr.triggeredOnce = !0;
                  }
                  if (Zr.changed) {
                    var on = ae(Kr);
                    if (on.lastValue === Kr.value)
                      return;
                    on.lastValue = Kr.value;
                  }
                  if (Wr.delayed && clearTimeout(Wr.delayed), Wr.throttle)
                    return;
                  Zr.throttle > 0 ? Wr.throttle || (Qr(ze, rn), Wr.throttle = setTimeout(function() {
                    Wr.throttle = null;
                  }, Zr.throttle)) : Zr.delay > 0 ? Wr.delayed = setTimeout(function() {
                    Qr(ze, rn);
                  }, Zr.delay) : (ce(ze, "htmx:trigger"), Qr(ze, rn));
                }
              }
            };
            Jr.listenerInfos == null && (Jr.listenerInfos = []), Jr.listenerInfos.push({ trigger: Zr.trigger, listener: en, on: Kr }), Kr.addEventListener(Zr.trigger, en);
          });
        }
        var vt = !1, dt = null;
        function gt() {
          dt || (dt = function() {
            vt = !0;
          }, window.addEventListener("scroll", dt), setInterval(function() {
            vt && (vt = !1, oe(re().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(ze) {
              pt(ze);
            }));
          }, 200));
        }
        function pt(ze) {
          if (!o(ze, "data-hx-revealed") && X(ze)) {
            ze.setAttribute("data-hx-revealed", "true");
            var Qr = ae(ze);
            Qr.initHash ? ce(ze, "revealed") : ze.addEventListener("htmx:afterProcessNode", function(Jr) {
              ce(ze, "revealed");
            }, { once: !0 });
          }
        }
        function mt(ze, Qr, Jr) {
          for (var Zr = D(Jr), Gr = 0; Gr < Zr.length; Gr++) {
            var Wr = Zr[Gr].split(/:(.+)/);
            Wr[0] === "connect" && xt(ze, Wr[1], 0), Wr[0] === "send" && bt(ze);
          }
        }
        function xt(ze, Qr, Jr) {
          if (se(ze)) {
            if (Qr.indexOf("/") == 0) {
              var Zr = location.hostname + (location.port ? ":" + location.port : "");
              location.protocol == "https:" ? Qr = "wss://" + Zr + Qr : location.protocol == "http:" && (Qr = "ws://" + Zr + Qr);
            }
            var Gr = Q.createWebSocket(Qr);
            Gr.onerror = function(Wr) {
              fe(ze, "htmx:wsError", { error: Wr, socket: Gr }), yt(ze);
            }, Gr.onclose = function(Wr) {
              if ([1006, 1012, 1013].indexOf(Wr.code) >= 0) {
                var Yr = wt(Jr);
                setTimeout(function() {
                  xt(ze, Qr, Jr + 1);
                }, Yr);
              }
            }, Gr.onopen = function(Wr) {
              Jr = 0;
            }, ae(ze).webSocket = Gr, Gr.addEventListener("message", function(Wr) {
              if (!yt(ze)) {
                var Yr = Wr.data;
                R(ze, function(an) {
                  Yr = an.transformResponse(Yr, null, ze);
                });
                for (var Kr = T(ze), en = l(Yr), rn = M(en.children), nn = 0; nn < rn.length; nn++) {
                  var on = rn[nn];
                  Ee(te(on, "hx-swap-oob") || "true", on, Kr);
                }
                nr(Kr.tasks);
              }
            });
          }
        }
        function yt(ze) {
          if (!se(ze))
            return ae(ze).webSocket.close(), !0;
        }
        function bt(ze) {
          var Qr = c(ze, function(Jr) {
            return ae(Jr).webSocket != null;
          });
          Qr ? ze.addEventListener(it(ze)[0].trigger, function(Jr) {
            var Zr = ae(Qr).webSocket, Gr = xr(ze, Qr), Wr = dr(ze, "post"), Yr = Wr.errors, Kr = Wr.values, en = Hr(ze), rn = le(Kr, en), nn = yr(rn, ze);
            if (nn.HEADERS = Gr, Yr && Yr.length > 0) {
              ce(ze, "htmx:validation:halted", Yr);
              return;
            }
            Zr.send(JSON.stringify(nn)), ut(Jr, ze) && Jr.preventDefault();
          }) : fe(ze, "htmx:noWebSocketSourceError");
        }
        function wt(ze) {
          var Qr = Q.config.wsReconnectDelay;
          if (typeof Qr == "function")
            return Qr(ze);
          if (Qr === "full-jitter") {
            var Jr = Math.min(ze, 6), Zr = 1e3 * Math.pow(2, Jr);
            return Zr * Math.random();
          }
          b('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
        }
        function St(ze, Qr, Jr) {
          for (var Zr = D(Jr), Gr = 0; Gr < Zr.length; Gr++) {
            var Wr = Zr[Gr].split(/:(.+)/);
            Wr[0] === "connect" && Et(ze, Wr[1]), Wr[0] === "swap" && Ct(ze, Wr[1]);
          }
        }
        function Et(ze, Qr) {
          var Jr = Q.createEventSource(Qr);
          Jr.onerror = function(Zr) {
            fe(ze, "htmx:sseError", { error: Zr, source: Jr }), Tt(ze);
          }, ae(ze).sseEventSource = Jr;
        }
        function Ct(ze, Qr) {
          var Jr = c(ze, Ot);
          if (Jr) {
            var Zr = ae(Jr).sseEventSource, Gr = function(Wr) {
              if (!Tt(Jr)) {
                if (!se(ze)) {
                  Zr.removeEventListener(Qr, Gr);
                  return;
                }
                var Yr = Wr.data;
                R(ze, function(nn) {
                  Yr = nn.transformResponse(Yr, null, ze);
                });
                var Kr = wr(ze), en = ye(ze), rn = T(ze);
                je(Kr.swapStyle, en, ze, Yr, rn), nr(rn.tasks), ce(ze, "htmx:sseMessage", Wr);
              }
            };
            ae(ze).sseListener = Gr, Zr.addEventListener(Qr, Gr);
          } else
            fe(ze, "htmx:noSSESourceError");
        }
        function Rt(ze, Qr, Jr) {
          var Zr = c(ze, Ot);
          if (Zr) {
            var Gr = ae(Zr).sseEventSource, Wr = function() {
              Tt(Zr) || (se(ze) ? Qr(ze) : Gr.removeEventListener(Jr, Wr));
            };
            ae(ze).sseListener = Wr, Gr.addEventListener(Jr, Wr);
          } else
            fe(ze, "htmx:noSSESourceError");
        }
        function Tt(ze) {
          if (!se(ze))
            return ae(ze).sseEventSource.close(), !0;
        }
        function Ot(ze) {
          return ae(ze).sseEventSource != null;
        }
        function qt(ze, Qr, Jr, Zr) {
          var Gr = function() {
            Jr.loaded || (Jr.loaded = !0, Qr(ze));
          };
          Zr > 0 ? setTimeout(Gr, Zr) : Gr();
        }
        function Ht(ze, Qr, Jr) {
          var Zr = !1;
          return oe(w, function(Gr) {
            if (o(ze, "hx-" + Gr)) {
              var Wr = te(ze, "hx-" + Gr);
              Zr = !0, Qr.path = Wr, Qr.verb = Gr, Jr.forEach(function(Yr) {
                Lt(ze, Yr, Qr, function(Kr, en) {
                  if (v(Kr, Q.config.disableSelector)) {
                    m(Kr);
                    return;
                  }
                  he(Gr, Wr, Kr, en);
                });
              });
            }
          }), Zr;
        }
        function Lt(ze, Qr, Jr, Zr) {
          if (Qr.sseEvent)
            Rt(ze, Zr, Qr.sseEvent);
          else if (Qr.trigger === "revealed")
            gt(), ht(ze, Zr, Jr, Qr), pt(ze);
          else if (Qr.trigger === "intersect") {
            var Gr = {};
            Qr.root && (Gr.root = ue(ze, Qr.root)), Qr.threshold && (Gr.threshold = parseFloat(Qr.threshold));
            var Wr = new IntersectionObserver(function(Yr) {
              for (var Kr = 0; Kr < Yr.length; Kr++) {
                var en = Yr[Kr];
                if (en.isIntersecting) {
                  ce(ze, "intersect");
                  break;
                }
              }
            }, Gr);
            Wr.observe(ze), ht(ze, Zr, Jr, Qr);
          } else Qr.trigger === "load" ? ct(Qr, ze, Wt("load", { elt: ze })) || qt(ze, Zr, Jr, Qr.delay) : Qr.pollInterval > 0 ? (Jr.polling = !0, ot(ze, Zr, Qr)) : ht(ze, Zr, Jr, Qr);
        }
        function At(ze) {
          if (!ze.htmxExecuted && Q.config.allowScriptTags && (ze.type === "text/javascript" || ze.type === "module" || ze.type === "")) {
            var Qr = re().createElement("script");
            oe(ze.attributes, function(Zr) {
              Qr.setAttribute(Zr.name, Zr.value);
            }), Qr.textContent = ze.textContent, Qr.async = !1, Q.config.inlineScriptNonce && (Qr.nonce = Q.config.inlineScriptNonce);
            var Jr = ze.parentElement;
            try {
              Jr.insertBefore(Qr, ze);
            } catch (Zr) {
              b(Zr);
            } finally {
              ze.parentElement && ze.parentElement.removeChild(ze);
            }
          }
        }
        function Nt(ze) {
          h(ze, "script") && At(ze), oe(f(ze, "script"), function(Qr) {
            At(Qr);
          });
        }
        function It(ze) {
          var Qr = ze.attributes;
          if (!Qr)
            return !1;
          for (var Jr = 0; Jr < Qr.length; Jr++) {
            var Zr = Qr[Jr].name;
            if (g(Zr, "hx-on:") || g(Zr, "data-hx-on:") || g(Zr, "hx-on-") || g(Zr, "data-hx-on-"))
              return !0;
          }
          return !1;
        }
        function kt(ze) {
          var Qr = null, Jr = [];
          if (It(ze) && Jr.push(ze), document.evaluate)
            for (var Zr = document.evaluate('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]', ze); Qr = Zr.iterateNext(); ) Jr.push(Qr);
          else if (typeof ze.getElementsByTagName == "function")
            for (var Gr = ze.getElementsByTagName("*"), Wr = 0; Wr < Gr.length; Wr++)
              It(Gr[Wr]) && Jr.push(Gr[Wr]);
          return Jr;
        }
        function Pt(ze) {
          if (ze.querySelectorAll) {
            var Qr = ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]", Jr = ze.querySelectorAll(i + Qr + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
            return Jr;
          } else
            return [];
        }
        function Mt(ze) {
          var Qr = v(ze.target, "button, input[type='submit']"), Jr = Dt(ze);
          Jr && (Jr.lastButtonClicked = Qr);
        }
        function Xt(ze) {
          var Qr = Dt(ze);
          Qr && (Qr.lastButtonClicked = null);
        }
        function Dt(ze) {
          var Qr = v(ze.target, "button, input[type='submit']");
          if (Qr) {
            var Jr = p("#" + ee(Qr, "form")) || v(Qr, "form");
            if (Jr)
              return ae(Jr);
          }
        }
        function Ut(ze) {
          ze.addEventListener("click", Mt), ze.addEventListener("focusin", Mt), ze.addEventListener("focusout", Xt);
        }
        function Bt(ze) {
          for (var Qr = Ye(ze), Jr = 0, Zr = 0; Zr < Qr.length; Zr++) {
            const Gr = Qr[Zr];
            Gr === "{" ? Jr++ : Gr === "}" && Jr--;
          }
          return Jr;
        }
        function Ft(ze, Qr, Jr) {
          var Zr = ae(ze);
          Array.isArray(Zr.onHandlers) || (Zr.onHandlers = []);
          var Gr, Wr = function(Yr) {
            return Tr(ze, function() {
              Gr || (Gr = new Function("event", Jr)), Gr.call(ze, Yr);
            });
          };
          ze.addEventListener(Qr, Wr), Zr.onHandlers.push({ event: Qr, listener: Wr });
        }
        function Vt(ze) {
          var Qr = te(ze, "hx-on");
          if (Qr) {
            for (var Jr = {}, Zr = Qr.split(`
`), Gr = null, Wr = 0; Zr.length > 0; ) {
              var Yr = Zr.shift(), Kr = Yr.match(/^\s*([a-zA-Z:\-\.]+:)(.*)/);
              Wr === 0 && Kr ? (Yr.split(":"), Gr = Kr[1].slice(0, -1), Jr[Gr] = Kr[2]) : Jr[Gr] += Yr, Wr += Bt(Yr);
            }
            for (var en in Jr)
              Ft(ze, en, Jr[en]);
          }
        }
        function jt(ze) {
          Ae(ze);
          for (var Qr = 0; Qr < ze.attributes.length; Qr++) {
            var Jr = ze.attributes[Qr].name, Zr = ze.attributes[Qr].value;
            if (g(Jr, "hx-on") || g(Jr, "data-hx-on")) {
              var Gr = Jr.indexOf("-on") + 3, Wr = Jr.slice(Gr, Gr + 1);
              if (Wr === "-" || Wr === ":") {
                var Yr = Jr.slice(Gr + 1);
                g(Yr, ":") ? Yr = "htmx" + Yr : g(Yr, "-") ? Yr = "htmx:" + Yr.slice(1) : g(Yr, "htmx-") && (Yr = "htmx:" + Yr.slice(5)), Ft(ze, Yr, Zr);
              }
            }
          }
        }
        function _t(ze) {
          if (v(ze, Q.config.disableSelector)) {
            m(ze);
            return;
          }
          var Qr = ae(ze);
          if (Qr.initHash !== Le(ze)) {
            Ne(ze), Qr.initHash = Le(ze), Vt(ze), ce(ze, "htmx:beforeProcessNode"), ze.value && (Qr.lastValue = ze.value);
            var Jr = it(ze), Zr = Ht(ze, Qr, Jr);
            Zr || (ne(ze, "hx-boost") === "true" ? lt(ze, Qr, Jr) : o(ze, "hx-trigger") && Jr.forEach(function(Yr) {
              Lt(ze, Yr, Qr, function() {
              });
            })), (ze.tagName === "FORM" || ee(ze, "type") === "submit" && o(ze, "form")) && Ut(ze);
            var Gr = te(ze, "hx-sse");
            Gr && St(ze, Qr, Gr);
            var Wr = te(ze, "hx-ws");
            Wr && mt(ze, Qr, Wr), ce(ze, "htmx:afterProcessNode");
          }
        }
        function zt(ze) {
          if (ze = p(ze), v(ze, Q.config.disableSelector)) {
            m(ze);
            return;
          }
          _t(ze), oe(Pt(ze), function(Qr) {
            _t(Qr);
          }), oe(kt(ze), jt);
        }
        function $t(ze) {
          return ze.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
        }
        function Wt(ze, Qr) {
          var Jr;
          return window.CustomEvent && typeof window.CustomEvent == "function" ? Jr = new CustomEvent(ze, { bubbles: !0, cancelable: !0, detail: Qr }) : (Jr = re().createEvent("CustomEvent"), Jr.initCustomEvent(ze, !0, !0, Qr)), Jr;
        }
        function fe(ze, Qr, Jr) {
          ce(ze, Qr, le({ error: Qr }, Jr));
        }
        function Gt(ze) {
          return ze === "htmx:afterProcessNode";
        }
        function R(ze, Qr) {
          oe(Fr(ze), function(Jr) {
            try {
              Qr(Jr);
            } catch (Zr) {
              b(Zr);
            }
          });
        }
        function b(ze) {
          console.error ? console.error(ze) : console.log && console.log("ERROR: ", ze);
        }
        function ce(ze, Qr, Jr) {
          ze = p(ze), Jr == null && (Jr = {}), Jr.elt = ze;
          var Zr = Wt(Qr, Jr);
          Q.logger && !Gt(Qr) && Q.logger(ze, Qr, Jr), Jr.error && (b(Jr.error), ce(ze, "htmx:error", { errorInfo: Jr }));
          var Gr = ze.dispatchEvent(Zr), Wr = $t(Qr);
          if (Gr && Wr !== Qr) {
            var Yr = Wt(Wr, Zr.detail);
            Gr = Gr && ze.dispatchEvent(Yr);
          }
          return R(ze, function(Kr) {
            Gr = Gr && Kr.onEvent(Qr, Zr) !== !1 && !Zr.defaultPrevented;
          }), Gr;
        }
        var Jt = location.pathname + location.search;
        function Zt() {
          var ze = re().querySelector("[hx-history-elt],[data-hx-history-elt]");
          return ze || re().body;
        }
        function Kt(ze, Qr, Jr, Zr) {
          if (U()) {
            if (Q.config.historyCacheSize <= 0) {
              localStorage.removeItem("htmx-history-cache");
              return;
            }
            ze = B(ze);
            for (var Gr = E(localStorage.getItem("htmx-history-cache")) || [], Wr = 0; Wr < Gr.length; Wr++)
              if (Gr[Wr].url === ze) {
                Gr.splice(Wr, 1);
                break;
              }
            var Yr = { url: ze, content: Qr, title: Jr, scroll: Zr };
            for (ce(re().body, "htmx:historyItemCreated", { item: Yr, cache: Gr }), Gr.push(Yr); Gr.length > Q.config.historyCacheSize; )
              Gr.shift();
            for (; Gr.length > 0; )
              try {
                localStorage.setItem("htmx-history-cache", JSON.stringify(Gr));
                break;
              } catch (Kr) {
                fe(re().body, "htmx:historyCacheError", { cause: Kr, cache: Gr }), Gr.shift();
              }
          }
        }
        function Yt(ze) {
          if (!U())
            return null;
          ze = B(ze);
          for (var Qr = E(localStorage.getItem("htmx-history-cache")) || [], Jr = 0; Jr < Qr.length; Jr++)
            if (Qr[Jr].url === ze)
              return Qr[Jr];
          return null;
        }
        function Qt(ze) {
          var Qr = Q.config.requestClass, Jr = ze.cloneNode(!0);
          return oe(f(Jr, "." + Qr), function(Zr) {
            n(Zr, Qr);
          }), Jr.innerHTML;
        }
        function er() {
          var ze = Zt(), Qr = Jt || location.pathname + location.search, Jr;
          try {
            Jr = re().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
          } catch {
            Jr = re().querySelector('[hx-history="false"],[data-hx-history="false"]');
          }
          Jr || (ce(re().body, "htmx:beforeHistorySave", { path: Qr, historyElt: ze }), Kt(Qr, Qt(ze), re().title, window.scrollY)), Q.config.historyEnabled && history.replaceState({ htmx: !0 }, re().title, window.location.href);
        }
        function tr(ze) {
          Q.config.getCacheBusterParam && (ze = ze.replace(/org\.htmx\.cache-buster=[^&]*&?/, ""), (G(ze, "&") || G(ze, "?")) && (ze = ze.slice(0, -1))), Q.config.historyEnabled && history.pushState({ htmx: !0 }, "", ze), Jt = ze;
        }
        function rr(ze) {
          Q.config.historyEnabled && history.replaceState({ htmx: !0 }, "", ze), Jt = ze;
        }
        function nr(ze) {
          oe(ze, function(Qr) {
            Qr.call();
          });
        }
        function ir(ze) {
          var Qr = new XMLHttpRequest(), Jr = { path: ze, xhr: Qr };
          ce(re().body, "htmx:historyCacheMiss", Jr), Qr.open("GET", ze, !0), Qr.setRequestHeader("HX-Request", "true"), Qr.setRequestHeader("HX-History-Restore-Request", "true"), Qr.setRequestHeader("HX-Current-URL", re().location.href), Qr.onload = function() {
            if (this.status >= 200 && this.status < 400) {
              ce(re().body, "htmx:historyCacheMissLoad", Jr);
              var Zr = l(this.response);
              Zr = Zr.querySelector("[hx-history-elt],[data-hx-history-elt]") || Zr;
              var Gr = Zt(), Wr = T(Gr), Yr = Ve(this.response);
              if (Yr) {
                var Kr = C("title");
                Kr ? Kr.innerHTML = Yr : window.document.title = Yr;
              }
              Ue(Gr, Zr, Wr), nr(Wr.tasks), Jt = ze, ce(re().body, "htmx:historyRestore", { path: ze, cacheMiss: !0, serverResponse: this.response });
            } else
              fe(re().body, "htmx:historyCacheMissLoadError", Jr);
          }, Qr.send();
        }
        function ar(ze) {
          er(), ze = ze || location.pathname + location.search;
          var Qr = Yt(ze);
          if (Qr) {
            var Jr = l(Qr.content), Zr = Zt(), Gr = T(Zr);
            Ue(Zr, Jr, Gr), nr(Gr.tasks), document.title = Qr.title, setTimeout(function() {
              window.scrollTo(0, Qr.scroll);
            }, 0), Jt = ze, ce(re().body, "htmx:historyRestore", { path: ze, item: Qr });
          } else
            Q.config.refreshOnHistoryMiss ? window.location.reload(!0) : ir(ze);
        }
        function or(ze) {
          var Qr = me(ze, "hx-indicator");
          return Qr == null && (Qr = [ze]), oe(Qr, function(Jr) {
            var Zr = ae(Jr);
            Zr.requestCount = (Zr.requestCount || 0) + 1, Jr.classList.add.call(Jr.classList, Q.config.requestClass);
          }), Qr;
        }
        function sr(ze) {
          var Qr = me(ze, "hx-disabled-elt");
          return Qr == null && (Qr = []), oe(Qr, function(Jr) {
            var Zr = ae(Jr);
            Zr.requestCount = (Zr.requestCount || 0) + 1, Jr.setAttribute("disabled", "");
          }), Qr;
        }
        function lr(ze, Qr) {
          oe(ze, function(Jr) {
            var Zr = ae(Jr);
            Zr.requestCount = (Zr.requestCount || 0) - 1, Zr.requestCount === 0 && Jr.classList.remove.call(Jr.classList, Q.config.requestClass);
          }), oe(Qr, function(Jr) {
            var Zr = ae(Jr);
            Zr.requestCount = (Zr.requestCount || 0) - 1, Zr.requestCount === 0 && Jr.removeAttribute("disabled");
          });
        }
        function ur(ze, Qr) {
          for (var Jr = 0; Jr < ze.length; Jr++) {
            var Zr = ze[Jr];
            if (Zr.isSameNode(Qr))
              return !0;
          }
          return !1;
        }
        function fr(ze) {
          return ze.name === "" || ze.name == null || ze.disabled || v(ze, "fieldset[disabled]") || ze.type === "button" || ze.type === "submit" || ze.tagName === "image" || ze.tagName === "reset" || ze.tagName === "file" ? !1 : ze.type === "checkbox" || ze.type === "radio" ? ze.checked : !0;
        }
        function cr(ze, Qr, Jr) {
          if (ze != null && Qr != null) {
            var Zr = Jr[ze];
            Zr === void 0 ? Jr[ze] = Qr : Array.isArray(Zr) ? Array.isArray(Qr) ? Jr[ze] = Zr.concat(Qr) : Zr.push(Qr) : Array.isArray(Qr) ? Jr[ze] = [Zr].concat(Qr) : Jr[ze] = [Zr, Qr];
          }
        }
        function hr(ze, Qr, Jr, Zr, Gr) {
          if (!(Zr == null || ur(ze, Zr))) {
            if (ze.push(Zr), fr(Zr)) {
              var Wr = ee(Zr, "name"), Yr = Zr.value;
              Zr.multiple && Zr.tagName === "SELECT" && (Yr = M(Zr.querySelectorAll("option:checked")).map(function(en) {
                return en.value;
              })), Zr.files && (Yr = M(Zr.files)), cr(Wr, Yr, Qr), Gr && vr(Zr, Jr);
            }
            if (h(Zr, "form")) {
              var Kr = Zr.elements;
              oe(Kr, function(en) {
                hr(ze, Qr, Jr, en, Gr);
              });
            }
          }
        }
        function vr(ze, Qr) {
          ze.willValidate && (ce(ze, "htmx:validation:validate"), ze.checkValidity() || (Qr.push({ elt: ze, message: ze.validationMessage, validity: ze.validity }), ce(ze, "htmx:validation:failed", { message: ze.validationMessage, validity: ze.validity })));
        }
        function dr(ze, Qr) {
          var Jr = [], Zr = {}, Gr = {}, Wr = [], Yr = ae(ze);
          Yr.lastButtonClicked && !se(Yr.lastButtonClicked) && (Yr.lastButtonClicked = null);
          var Kr = h(ze, "form") && ze.noValidate !== !0 || te(ze, "hx-validate") === "true";
          if (Yr.lastButtonClicked && (Kr = Kr && Yr.lastButtonClicked.formNoValidate !== !0), Qr !== "get" && hr(Jr, Gr, Wr, v(ze, "form"), Kr), hr(Jr, Zr, Wr, ze, Kr), Yr.lastButtonClicked || ze.tagName === "BUTTON" || ze.tagName === "INPUT" && ee(ze, "type") === "submit") {
            var en = Yr.lastButtonClicked || ze, rn = ee(en, "name");
            cr(rn, en.value, Gr);
          }
          var nn = me(ze, "hx-include");
          return oe(nn, function(on) {
            hr(Jr, Zr, Wr, on, Kr), h(on, "form") || oe(on.querySelectorAll(rt), function(an) {
              hr(Jr, Zr, Wr, an, Kr);
            });
          }), Zr = le(Zr, Gr), { errors: Wr, values: Zr };
        }
        function gr(ze, Qr, Jr) {
          ze !== "" && (ze += "&"), String(Jr) === "[object Object]" && (Jr = JSON.stringify(Jr));
          var Zr = encodeURIComponent(Jr);
          return ze += encodeURIComponent(Qr) + "=" + Zr, ze;
        }
        function pr(ze) {
          var Qr = "";
          for (var Jr in ze)
            if (ze.hasOwnProperty(Jr)) {
              var Zr = ze[Jr];
              Array.isArray(Zr) ? oe(Zr, function(Gr) {
                Qr = gr(Qr, Jr, Gr);
              }) : Qr = gr(Qr, Jr, Zr);
            }
          return Qr;
        }
        function mr(ze) {
          var Qr = new FormData();
          for (var Jr in ze)
            if (ze.hasOwnProperty(Jr)) {
              var Zr = ze[Jr];
              Array.isArray(Zr) ? oe(Zr, function(Gr) {
                Qr.append(Jr, Gr);
              }) : Qr.append(Jr, Zr);
            }
          return Qr;
        }
        function xr(ze, Qr, Jr) {
          var Zr = { "HX-Request": "true", "HX-Trigger": ee(ze, "id"), "HX-Trigger-Name": ee(ze, "name"), "HX-Target": te(Qr, "id"), "HX-Current-URL": re().location.href };
          return Rr(ze, "hx-headers", !1, Zr), Jr !== void 0 && (Zr["HX-Prompt"] = Jr), ae(ze).boosted && (Zr["HX-Boosted"] = "true"), Zr;
        }
        function yr(ze, Qr) {
          var Jr = ne(Qr, "hx-params");
          if (Jr) {
            if (Jr === "none")
              return {};
            if (Jr === "*")
              return ze;
            if (Jr.indexOf("not ") === 0)
              return oe(Jr.substr(4).split(","), function(Gr) {
                Gr = Gr.trim(), delete ze[Gr];
              }), ze;
            var Zr = {};
            return oe(Jr.split(","), function(Gr) {
              Gr = Gr.trim(), Zr[Gr] = ze[Gr];
            }), Zr;
          } else
            return ze;
        }
        function br(ze) {
          return ee(ze, "href") && ee(ze, "href").indexOf("#") >= 0;
        }
        function wr(ze, Qr) {
          var Jr = Qr || ne(ze, "hx-swap"), Zr = { swapStyle: ae(ze).boosted ? "innerHTML" : Q.config.defaultSwapStyle, swapDelay: Q.config.defaultSwapDelay, settleDelay: Q.config.defaultSettleDelay };
          if (Q.config.scrollIntoViewOnBoost && ae(ze).boosted && !br(ze) && (Zr.show = "top"), Jr) {
            var Gr = D(Jr);
            if (Gr.length > 0)
              for (var Wr = 0; Wr < Gr.length; Wr++) {
                var Yr = Gr[Wr];
                if (Yr.indexOf("swap:") === 0)
                  Zr.swapDelay = d(Yr.substr(5));
                else if (Yr.indexOf("settle:") === 0)
                  Zr.settleDelay = d(Yr.substr(7));
                else if (Yr.indexOf("transition:") === 0)
                  Zr.transition = Yr.substr(11) === "true";
                else if (Yr.indexOf("ignoreTitle:") === 0)
                  Zr.ignoreTitle = Yr.substr(12) === "true";
                else if (Yr.indexOf("scroll:") === 0) {
                  var Kr = Yr.substr(7), en = Kr.split(":"), rn = en.pop(), nn = en.length > 0 ? en.join(":") : null;
                  Zr.scroll = rn, Zr.scrollTarget = nn;
                } else if (Yr.indexOf("show:") === 0) {
                  var on = Yr.substr(5), en = on.split(":"), an = en.pop(), nn = en.length > 0 ? en.join(":") : null;
                  Zr.show = an, Zr.showTarget = nn;
                } else if (Yr.indexOf("focus-scroll:") === 0) {
                  var xn = Yr.substr(13);
                  Zr.focusScroll = xn == "true";
                } else Wr == 0 ? Zr.swapStyle = Yr : b("Unknown modifier in hx-swap: " + Yr);
              }
          }
          return Zr;
        }
        function Sr(ze) {
          return ne(ze, "hx-encoding") === "multipart/form-data" || h(ze, "form") && ee(ze, "enctype") === "multipart/form-data";
        }
        function Er(ze, Qr, Jr) {
          var Zr = null;
          return R(Qr, function(Gr) {
            Zr == null && (Zr = Gr.encodeParameters(ze, Jr, Qr));
          }), Zr ?? (Sr(Qr) ? mr(Jr) : pr(Jr));
        }
        function T(ze) {
          return { tasks: [], elts: [ze] };
        }
        function Cr(ze, Qr) {
          var Jr = ze[0], Zr = ze[ze.length - 1];
          if (Qr.scroll) {
            var Gr = null;
            Qr.scrollTarget && (Gr = ue(Jr, Qr.scrollTarget)), Qr.scroll === "top" && (Jr || Gr) && (Gr = Gr || Jr, Gr.scrollTop = 0), Qr.scroll === "bottom" && (Zr || Gr) && (Gr = Gr || Zr, Gr.scrollTop = Gr.scrollHeight);
          }
          if (Qr.show) {
            var Gr = null;
            if (Qr.showTarget) {
              var Wr = Qr.showTarget;
              Qr.showTarget === "window" && (Wr = "body"), Gr = ue(Jr, Wr);
            }
            Qr.show === "top" && (Jr || Gr) && (Gr = Gr || Jr, Gr.scrollIntoView({ block: "start", behavior: Q.config.scrollBehavior })), Qr.show === "bottom" && (Zr || Gr) && (Gr = Gr || Zr, Gr.scrollIntoView({ block: "end", behavior: Q.config.scrollBehavior }));
          }
        }
        function Rr(ze, Qr, Jr, Zr) {
          if (Zr == null && (Zr = {}), ze == null)
            return Zr;
          var Gr = te(ze, Qr);
          if (Gr) {
            var Wr = Gr.trim(), Yr = Jr;
            if (Wr === "unset")
              return null;
            Wr.indexOf("javascript:") === 0 ? (Wr = Wr.substr(11), Yr = !0) : Wr.indexOf("js:") === 0 && (Wr = Wr.substr(3), Yr = !0), Wr.indexOf("{") !== 0 && (Wr = "{" + Wr + "}");
            var Kr;
            Yr ? Kr = Tr(ze, function() {
              return Function("return (" + Wr + ")")();
            }, {}) : Kr = E(Wr);
            for (var en in Kr)
              Kr.hasOwnProperty(en) && Zr[en] == null && (Zr[en] = Kr[en]);
          }
          return Rr(u(ze), Qr, Jr, Zr);
        }
        function Tr(ze, Qr, Jr) {
          return Q.config.allowEval ? Qr() : (fe(ze, "htmx:evalDisallowedError"), Jr);
        }
        function Or(ze, Qr) {
          return Rr(ze, "hx-vars", !0, Qr);
        }
        function qr(ze, Qr) {
          return Rr(ze, "hx-vals", !1, Qr);
        }
        function Hr(ze) {
          return le(Or(ze), qr(ze));
        }
        function Lr(ze, Qr, Jr) {
          if (Jr !== null)
            try {
              ze.setRequestHeader(Qr, Jr);
            } catch {
              ze.setRequestHeader(Qr, encodeURIComponent(Jr)), ze.setRequestHeader(Qr + "-URI-AutoEncoded", "true");
            }
        }
        function Ar(ze) {
          if (ze.responseURL && typeof URL < "u")
            try {
              var Qr = new URL(ze.responseURL);
              return Qr.pathname + Qr.search;
            } catch {
              fe(re().body, "htmx:badResponseUrl", { url: ze.responseURL });
            }
        }
        function O(ze, Qr) {
          return Qr.test(ze.getAllResponseHeaders());
        }
        function Nr(ze, Qr, Jr) {
          return ze = ze.toLowerCase(), Jr ? Jr instanceof Element || I(Jr, "String") ? he(ze, Qr, null, null, { targetOverride: p(Jr), returnPromise: !0 }) : he(ze, Qr, p(Jr.source), Jr.event, { handler: Jr.handler, headers: Jr.headers, values: Jr.values, targetOverride: p(Jr.target), swapOverride: Jr.swap, select: Jr.select, returnPromise: !0 }) : he(ze, Qr, null, null, { returnPromise: !0 });
        }
        function Ir(ze) {
          for (var Qr = []; ze; )
            Qr.push(ze), ze = ze.parentElement;
          return Qr;
        }
        function kr(ze, Qr, Jr) {
          var Zr, Gr;
          if (typeof URL == "function") {
            Gr = new URL(Qr, document.location.href);
            var Wr = document.location.origin;
            Zr = Wr === Gr.origin;
          } else
            Gr = Qr, Zr = g(Qr, document.location.origin);
          return Q.config.selfRequestsOnly && !Zr ? !1 : ce(ze, "htmx:validateUrl", le({ url: Gr, sameHost: Zr }, Jr));
        }
        function he(ze, Qr, Jr, Zr, Gr, Wr) {
          var Yr = null, Kr = null;
          if (Gr = Gr ?? {}, Gr.returnPromise && typeof Promise < "u")
            var en = new Promise(function(yn, Tn) {
              Yr = yn, Kr = Tn;
            });
          Jr == null && (Jr = re().body);
          var rn = Gr.handler || Mr, nn = Gr.select || null;
          if (!se(Jr))
            return ie(Yr), en;
          var on = Gr.targetOverride || ye(Jr);
          if (on == null || on == pe)
            return fe(Jr, "htmx:targetError", { target: te(Jr, "hx-target") }), ie(Kr), en;
          var an = ae(Jr), xn = an.lastButtonClicked;
          if (xn) {
            var wn = ee(xn, "formaction");
            wn != null && (Qr = wn);
            var Ln = ee(xn, "formmethod");
            Ln != null && Ln.toLowerCase() !== "dialog" && (ze = Ln);
          }
          var In = ne(Jr, "hx-confirm");
          if (Wr === void 0) {
            var Un = function(yn) {
              return he(ze, Qr, Jr, Zr, Gr, !!yn);
            }, Cn = { target: on, elt: Jr, path: Qr, verb: ze, triggeringEvent: Zr, etc: Gr, issueRequest: Un, question: In };
            if (ce(Jr, "htmx:confirm", Cn) === !1)
              return ie(Yr), en;
          }
          var Rn = Jr, Sn = ne(Jr, "hx-sync"), bn = null, Fn = !1;
          if (Sn) {
            var vn = Sn.split(":"), gn = vn[0].trim();
            if (gn === "this" ? Rn = xe(Jr, "hx-sync") : Rn = ue(Jr, gn), Sn = (vn[1] || "drop").trim(), an = ae(Rn), Sn === "drop" && an.xhr && an.abortable !== !0)
              return ie(Yr), en;
            if (Sn === "abort") {
              if (an.xhr)
                return ie(Yr), en;
              Fn = !0;
            } else if (Sn === "replace")
              ce(Rn, "htmx:abort");
            else if (Sn.indexOf("queue") === 0) {
              var kn = Sn.split(" ");
              bn = (kn[1] || "last").trim();
            }
          }
          if (an.xhr)
            if (an.abortable)
              ce(Rn, "htmx:abort");
            else {
              if (bn == null) {
                if (Zr) {
                  var dn = ae(Zr);
                  dn && dn.triggerSpec && dn.triggerSpec.queue && (bn = dn.triggerSpec.queue);
                }
                bn == null && (bn = "last");
              }
              return an.queuedRequests == null && (an.queuedRequests = []), bn === "first" && an.queuedRequests.length === 0 ? an.queuedRequests.push(function() {
                he(ze, Qr, Jr, Zr, Gr);
              }) : bn === "all" ? an.queuedRequests.push(function() {
                he(ze, Qr, Jr, Zr, Gr);
              }) : bn === "last" && (an.queuedRequests = [], an.queuedRequests.push(function() {
                he(ze, Qr, Jr, Zr, Gr);
              })), ie(Yr), en;
            }
          var un = new XMLHttpRequest();
          an.xhr = un, an.abortable = Fn;
          var cn = function() {
            if (an.xhr = null, an.abortable = !1, an.queuedRequests != null && an.queuedRequests.length > 0) {
              var yn = an.queuedRequests.shift();
              yn();
            }
          }, Mn = ne(Jr, "hx-prompt");
          if (Mn) {
            var An = prompt(Mn);
            if (An === null || !ce(Jr, "htmx:prompt", { prompt: An, target: on }))
              return ie(Yr), cn(), en;
          }
          if (In && !Wr && !confirm(In))
            return ie(Yr), cn(), en;
          var fn = xr(Jr, on, An);
          ze !== "get" && !Sr(Jr) && (fn["Content-Type"] = "application/x-www-form-urlencoded"), Gr.headers && (fn = le(fn, Gr.headers));
          var Pn = dr(Jr, ze), qn = Pn.errors, En = Pn.values;
          Gr.values && (En = le(En, Gr.values));
          var zn = Hr(Jr), Jn = le(En, zn), Hn = yr(Jn, Jr);
          Q.config.getCacheBusterParam && ze === "get" && (Hn["org.htmx.cache-buster"] = ee(on, "id") || "true"), (Qr == null || Qr === "") && (Qr = re().location.href);
          var Xn = Rr(Jr, "hx-request"), Zn = ae(Jr).boosted, jn = Q.config.methodsThatUseUrlParams.indexOf(ze) >= 0, mn = { boosted: Zn, useUrlParams: jn, parameters: Hn, unfilteredParameters: Jn, headers: fn, target: on, verb: ze, errors: qn, withCredentials: Gr.credentials || Xn.credentials || Q.config.withCredentials, timeout: Gr.timeout || Xn.timeout || Q.config.timeout, path: Qr, triggeringEvent: Zr };
          if (!ce(Jr, "htmx:configRequest", mn))
            return ie(Yr), cn(), en;
          if (Qr = mn.path, ze = mn.verb, fn = mn.headers, Hn = mn.parameters, qn = mn.errors, jn = mn.useUrlParams, qn && qn.length > 0)
            return ce(Jr, "htmx:validation:halted", mn), ie(Yr), cn(), en;
          var Gn = Qr.split("#"), Kn = Gn[0], Bn = Gn[1], On = Qr;
          if (jn) {
            On = Kn;
            var ei = Object.keys(Hn).length !== 0;
            ei && (On.indexOf("?") < 0 ? On += "?" : On += "&", On += pr(Hn), Bn && (On += "#" + Bn));
          }
          if (!kr(Jr, On, mn))
            return fe(Jr, "htmx:invalidPath", mn), ie(Kr), en;
          if (un.open(ze.toUpperCase(), On, !0), un.overrideMimeType("text/html"), un.withCredentials = mn.withCredentials, un.timeout = mn.timeout, !Xn.noHeaders) {
            for (var Vn in fn)
              if (fn.hasOwnProperty(Vn)) {
                var ti = fn[Vn];
                Lr(un, Vn, ti);
              }
          }
          var hn = { xhr: un, target: on, requestConfig: mn, etc: Gr, boosted: Zn, select: nn, pathInfo: { requestPath: Qr, finalRequestPath: On, anchor: Bn } };
          if (un.onload = function() {
            try {
              var yn = Ir(Jr);
              if (hn.pathInfo.responsePath = Ar(un), rn(Jr, hn), lr(Dn, _n), ce(Jr, "htmx:afterRequest", hn), ce(Jr, "htmx:afterOnLoad", hn), !se(Jr)) {
                for (var Tn = null; yn.length > 0 && Tn == null; ) {
                  var Nn = yn.shift();
                  se(Nn) && (Tn = Nn);
                }
                Tn && (ce(Tn, "htmx:afterRequest", hn), ce(Tn, "htmx:afterOnLoad", hn));
              }
              ie(Yr), cn();
            } catch (Wn) {
              throw fe(Jr, "htmx:onLoadError", le({ error: Wn }, hn)), Wn;
            }
          }, un.onerror = function() {
            lr(Dn, _n), fe(Jr, "htmx:afterRequest", hn), fe(Jr, "htmx:sendError", hn), ie(Kr), cn();
          }, un.onabort = function() {
            lr(Dn, _n), fe(Jr, "htmx:afterRequest", hn), fe(Jr, "htmx:sendAbort", hn), ie(Kr), cn();
          }, un.ontimeout = function() {
            lr(Dn, _n), fe(Jr, "htmx:afterRequest", hn), fe(Jr, "htmx:timeout", hn), ie(Kr), cn();
          }, !ce(Jr, "htmx:beforeRequest", hn))
            return ie(Yr), cn(), en;
          var Dn = or(Jr), _n = sr(Jr);
          oe(["loadstart", "loadend", "progress", "abort"], function(yn) {
            oe([un, un.upload], function(Tn) {
              Tn.addEventListener(yn, function(Nn) {
                ce(Jr, "htmx:xhr:" + yn, { lengthComputable: Nn.lengthComputable, loaded: Nn.loaded, total: Nn.total });
              });
            });
          }), ce(Jr, "htmx:beforeSend", hn);
          var ri = jn ? null : Er(un, Jr, Hn);
          return un.send(ri), en;
        }
        function Pr(ze, Qr) {
          var Jr = Qr.xhr, Zr = null, Gr = null;
          if (O(Jr, /HX-Push:/i) ? (Zr = Jr.getResponseHeader("HX-Push"), Gr = "push") : O(Jr, /HX-Push-Url:/i) ? (Zr = Jr.getResponseHeader("HX-Push-Url"), Gr = "push") : O(Jr, /HX-Replace-Url:/i) && (Zr = Jr.getResponseHeader("HX-Replace-Url"), Gr = "replace"), Zr)
            return Zr === "false" ? {} : { type: Gr, path: Zr };
          var Wr = Qr.pathInfo.finalRequestPath, Yr = Qr.pathInfo.responsePath, Kr = ne(ze, "hx-push-url"), en = ne(ze, "hx-replace-url"), rn = ae(ze).boosted, nn = null, on = null;
          return Kr ? (nn = "push", on = Kr) : en ? (nn = "replace", on = en) : rn && (nn = "push", on = Yr || Wr), on ? on === "false" ? {} : (on === "true" && (on = Yr || Wr), Qr.pathInfo.anchor && on.indexOf("#") === -1 && (on = on + "#" + Qr.pathInfo.anchor), { type: nn, path: on }) : {};
        }
        function Mr(ze, Qr) {
          var Jr = Qr.xhr, Zr = Qr.target, Gr = Qr.etc;
          Qr.requestConfig;
          var Wr = Qr.select;
          if (ce(ze, "htmx:beforeOnLoad", Qr)) {
            if (O(Jr, /HX-Trigger:/i) && _e(Jr, "HX-Trigger", ze), O(Jr, /HX-Location:/i)) {
              er();
              var Yr = Jr.getResponseHeader("HX-Location"), Kr;
              Yr.indexOf("{") === 0 && (Kr = E(Yr), Yr = Kr.path, delete Kr.path), Nr("GET", Yr, Kr).then(function() {
                tr(Yr);
              });
              return;
            }
            var en = O(Jr, /HX-Refresh:/i) && Jr.getResponseHeader("HX-Refresh") === "true";
            if (O(Jr, /HX-Redirect:/i)) {
              location.href = Jr.getResponseHeader("HX-Redirect"), en && location.reload();
              return;
            }
            if (en) {
              location.reload();
              return;
            }
            O(Jr, /HX-Retarget:/i) && (Jr.getResponseHeader("HX-Retarget") === "this" ? Qr.target = ze : Qr.target = ue(ze, Jr.getResponseHeader("HX-Retarget")));
            var rn = Pr(ze, Qr), nn = Jr.status >= 200 && Jr.status < 400 && Jr.status !== 204, on = Jr.response, an = Jr.status >= 400, xn = Q.config.ignoreTitle, wn = le({ shouldSwap: nn, serverResponse: on, isError: an, ignoreTitle: xn }, Qr);
            if (ce(Zr, "htmx:beforeSwap", wn)) {
              if (Zr = wn.target, on = wn.serverResponse, an = wn.isError, xn = wn.ignoreTitle, Qr.target = Zr, Qr.failed = an, Qr.successful = !an, wn.shouldSwap) {
                Jr.status === 286 && at(ze), R(ze, function(vn) {
                  on = vn.transformResponse(on, Jr, ze);
                }), rn.type && er();
                var Ln = Gr.swapOverride;
                O(Jr, /HX-Reswap:/i) && (Ln = Jr.getResponseHeader("HX-Reswap"));
                var Kr = wr(ze, Ln);
                Kr.hasOwnProperty("ignoreTitle") && (xn = Kr.ignoreTitle), Zr.classList.add(Q.config.swappingClass);
                var In = null, Un = null, Cn = function() {
                  try {
                    var vn = document.activeElement, gn = {};
                    try {
                      gn = { elt: vn, start: vn ? vn.selectionStart : null, end: vn ? vn.selectionEnd : null };
                    } catch {
                    }
                    var kn;
                    Wr && (kn = Wr), O(Jr, /HX-Reselect:/i) && (kn = Jr.getResponseHeader("HX-Reselect")), rn.type && (ce(re().body, "htmx:beforeHistoryUpdate", le({ history: rn }, Qr)), rn.type === "push" ? (tr(rn.path), ce(re().body, "htmx:pushedIntoHistory", { path: rn.path })) : (rr(rn.path), ce(re().body, "htmx:replacedInHistory", { path: rn.path })));
                    var dn = T(Zr);
                    if (je(Kr.swapStyle, Zr, ze, on, dn, kn), gn.elt && !se(gn.elt) && ee(gn.elt, "id")) {
                      var un = document.getElementById(ee(gn.elt, "id")), cn = { preventScroll: Kr.focusScroll !== void 0 ? !Kr.focusScroll : !Q.config.defaultFocusScroll };
                      if (un) {
                        if (gn.start && un.setSelectionRange)
                          try {
                            un.setSelectionRange(gn.start, gn.end);
                          } catch {
                          }
                        un.focus(cn);
                      }
                    }
                    if (Zr.classList.remove(Q.config.swappingClass), oe(dn.elts, function(fn) {
                      fn.classList && fn.classList.add(Q.config.settlingClass), ce(fn, "htmx:afterSwap", Qr);
                    }), O(Jr, /HX-Trigger-After-Swap:/i)) {
                      var Mn = ze;
                      se(ze) || (Mn = re().body), _e(Jr, "HX-Trigger-After-Swap", Mn);
                    }
                    var An = function() {
                      if (oe(dn.tasks, function(En) {
                        En.call();
                      }), oe(dn.elts, function(En) {
                        En.classList && En.classList.remove(Q.config.settlingClass), ce(En, "htmx:afterSettle", Qr);
                      }), Qr.pathInfo.anchor) {
                        var fn = re().getElementById(Qr.pathInfo.anchor);
                        fn && fn.scrollIntoView({ block: "start", behavior: "auto" });
                      }
                      if (dn.title && !xn) {
                        var Pn = C("title");
                        Pn ? Pn.innerHTML = dn.title : window.document.title = dn.title;
                      }
                      if (Cr(dn.elts, Kr), O(Jr, /HX-Trigger-After-Settle:/i)) {
                        var qn = ze;
                        se(ze) || (qn = re().body), _e(Jr, "HX-Trigger-After-Settle", qn);
                      }
                      ie(In);
                    };
                    Kr.settleDelay > 0 ? setTimeout(An, Kr.settleDelay) : An();
                  } catch (fn) {
                    throw fe(ze, "htmx:swapError", Qr), ie(Un), fn;
                  }
                }, Rn = Q.config.globalViewTransitions;
                if (Kr.hasOwnProperty("transition") && (Rn = Kr.transition), Rn && ce(ze, "htmx:beforeTransition", Qr) && typeof Promise < "u" && document.startViewTransition) {
                  var Sn = new Promise(function(vn, gn) {
                    In = vn, Un = gn;
                  }), bn = Cn;
                  Cn = function() {
                    document.startViewTransition(function() {
                      return bn(), Sn;
                    });
                  };
                }
                Kr.swapDelay > 0 ? setTimeout(Cn, Kr.swapDelay) : Cn();
              }
              an && fe(ze, "htmx:responseError", le({ error: "Response Status Error Code " + Jr.status + " from " + Qr.pathInfo.requestPath }, Qr));
            }
          }
        }
        var Xr = {};
        function Dr() {
          return { init: function(ze) {
            return null;
          }, onEvent: function(ze, Qr) {
            return !0;
          }, transformResponse: function(ze, Qr, Jr) {
            return ze;
          }, isInlineSwap: function(ze) {
            return !1;
          }, handleSwap: function(ze, Qr, Jr, Zr) {
            return !1;
          }, encodeParameters: function(ze, Qr, Jr) {
            return null;
          } };
        }
        function Ur(ze, Qr) {
          Qr.init && Qr.init(r), Xr[ze] = le(Dr(), Qr);
        }
        function Br(ze) {
          delete Xr[ze];
        }
        function Fr(ze, Qr, Jr) {
          if (ze == null)
            return Qr;
          Qr == null && (Qr = []), Jr == null && (Jr = []);
          var Zr = te(ze, "hx-ext");
          return Zr && oe(Zr.split(","), function(Gr) {
            if (Gr = Gr.replace(/ /g, ""), Gr.slice(0, 7) == "ignore:") {
              Jr.push(Gr.slice(7));
              return;
            }
            if (Jr.indexOf(Gr) < 0) {
              var Wr = Xr[Gr];
              Wr && Qr.indexOf(Wr) < 0 && Qr.push(Wr);
            }
          }), Fr(u(ze), Qr, Jr);
        }
        var Vr = !1;
        re().addEventListener("DOMContentLoaded", function() {
          Vr = !0;
        });
        function jr(ze) {
          Vr || re().readyState === "complete" ? ze() : re().addEventListener("DOMContentLoaded", ze);
        }
        function _r() {
          Q.config.includeIndicatorStyles !== !1 && re().head.insertAdjacentHTML("beforeend", "<style>                      ." + Q.config.indicatorClass + "{opacity:0}                      ." + Q.config.requestClass + " ." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                      ." + Q.config.requestClass + "." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                    </style>");
        }
        function zr() {
          var ze = re().querySelector('meta[name="htmx-config"]');
          return ze ? E(ze.content) : null;
        }
        function $r() {
          var ze = zr();
          ze && (Q.config = le(Q.config, ze));
        }
        return jr(function() {
          $r(), _r();
          var ze = re().body;
          zt(ze);
          var Qr = re().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
          ze.addEventListener("htmx:abort", function(Zr) {
            var Gr = Zr.target, Wr = ae(Gr);
            Wr && Wr.xhr && Wr.xhr.abort();
          });
          const Jr = window.onpopstate ? window.onpopstate.bind(window) : null;
          window.onpopstate = function(Zr) {
            Zr.state && Zr.state.htmx ? (ar(), oe(Qr, function(Gr) {
              ce(Gr, "htmx:restored", { document: re(), triggerEvent: ce });
            })) : Jr && Jr(Zr);
          }, setTimeout(function() {
            ce(ze, "htmx:load", {}), ze = null;
          }, 0);
        }), Q;
      }();
    });
  }(htmx_min$1)), htmx_min$1.exports;
}
var htmx_minExports = requireHtmx_min();
const htmx = /* @__PURE__ */ getDefaultExportFromCjs(htmx_minExports), getGlobalElementConstructor = (ze, Qr) => {
  class Jr extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      const Gr = this.getProps();
      ze({ element: this, props: Gr }), console.log(location.toString());
    }
    disconnectedCallBack() {
      Qr && Qr({ element: this });
    }
    attributeChangedCallback(Gr, Wr, Yr) {
      htmx.ajax("GET", location.toString(), { target: Yr, select: Yr, swap: "outerHTML" });
    }
    getProps() {
      var Kr;
      const Gr = /* @__PURE__ */ new Map();
      for (const en of this.attributes)
        Gr.set(camelCase(en.name), en.value);
      const Wr = this.querySelector("template");
      if (Wr) {
        const en = (Kr = Wr == null ? void 0 : Wr.content.textContent) == null ? void 0 : Kr.trim(), rn = en ? JSON.parse(en) : " ";
        Gr.set("data", rn);
      }
      return Object.fromEntries(Gr);
    }
  }
  return ni(Jr, "observedAttributes", ["reload"]), ni(Jr, "originalElement", null), Jr;
}, registerCustomElement = (ze, Qr) => {
  customElements.get(ze) || customElements.define(ze, Qr);
}, define = (ze, Qr, Jr = null) => {
  registerCustomElement(ze, getGlobalElementConstructor(Qr, Jr));
};
export {
  define
};
