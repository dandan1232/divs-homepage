(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        11: function (t, e, i) {
            "use strict";

            
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            i.r(e), window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                window.setTimeout(t, 1e3 / 60)
            };
            var a = window.scrawl || function () {
                    var B = {
                        version: "6.0.1",
                        work: {}
                    };
                    B.work.nameslist = ["padnames", "cellnames", "ctxnames", "groupnames", "designnames", "entitynames", "animationnames"], B.work.sectionlist = ["pad", "cell", "canvas", "context", "ctx", "imageData", "group", "design", "dsn", "entity", "animation"], B.work.radian = Math.PI / 180, B.work.promise = null, B.work.d = {}, B.work.v = null, B.work.colv1 = null, B.work.colv2 = null, B.work.o = {}, B.work.workquat = null, B.work.f = document.createDocumentFragment(), B.work.loadAlias = {
                        block: "scrawlBlock",
                        wheel: "scrawlWheel",
                        phrase: "scrawlPhrase",
                        path: "scrawlPath",
                        shape: "scrawlShape",
                        images: "scrawlImages",
                        animation: "scrawlAnimation",
                        collisions: "scrawlCollisions",
                        factories: "scrawlPathFactories",
                        color: "scrawlColor",
                        filters: "scrawlFilters",
                        physics: "scrawlPhysics",
                        saveload: "scrawlSaveLoad",
                        stacks: "scrawlStacks",
                        frame: "scrawlFrame",
                        quaternion: "scrawlQuaternion",
                        imageload: "scrawlImageLoad"
                    }, B.work.extensions = [], B.work.modules = B.work.extensions, B.device = {}, B.work.loadDependencies = {
                        block: [],
                        wheel: [],
                        phrase: [],
                        path: [],
                        shape: [],
                        images: ["imageload"],
                        imageload: [],
                        animation: [],
                        collisions: [],
                        factories: [],
                        color: [],
                        filters: [],
                        physics: ["quaternion"],
                        saveload: [],
                        stacks: ["quaternion"],
                        frame: [],
                        quaternion: []
                    }, B.init = function () {
                        return B.entity || (B.reset(), B.device = new B.Device, B.pageInit(), B.createDefaultPad(), B.setDisplayOffsets("all"), B.physicsInit(), B.filtersInit(), B.animationInit()), B
                    }, B.pageInit = function () {
                        B.device.canvas && B.getCanvases()
                    }, B.physicsInit = function () {}, B.filtersInit = function () {}, B.createDefaultPad = function () {
                        var t, e;
                        B.device.canvas && (e = "defaultHiddenCanvasElement", t = (e = B.addCanvasToPage({
                            name: e
                        }).name) + "_base", B.removeItem(B.padnames, e), B.removeItem(B.work.activeListeners, e), B.work.f.appendChild(B.canvas[e]), B.work.cv = B.canvas[t], B.work.cvx = B.context[t], B.work.cvmodel = B.ctx[t], B.work.cvwrapper = B.cell[t], B.work.cvcontroller = B.pad[e])
                    }, B.reset = function () {
                        for (var t = 0, e = B.work.nameslist.length; t < e; t++) B[B.work.nameslist[t]] = [];
                        for (var i = 0, s = B.work.sectionlist.length; i < s; i++) B[B.work.sectionlist[i]] = {};
                        return B
                    }, B.simpleLoader = function () {
                        function t(r) {
                            return function (n) {
                                return new Promise(function (t, e) {
                                    var i = document.createElement(r),
                                        s = "body",
                                        o = "src";
                                    switch (i.onload = function () {
                                        t(n)
                                    }, i.onerror = function () {
                                        e(n)
                                    }, r) {
                                        case "script":
                                            i.type = "text/javascript", i.async = !0;
                                            break;
                                        case "link":
                                            i.type = "text/css", i.rel = "stylesheet", o = "href", s = "head"
                                    }
                                    i[o] = n, document[s].appendChild(i)
                                })
                            }
                        }
                        return {
                            css: t("link"),
                            js: t("script"),
                            img: t("img")
                        }
                    }(), B.checkForPromise = function () {
                        return null !== B.work.promise ? B.work.promise : "undefined" != typeof Promise && -1 !== Promise.toString().indexOf("[native code]") ? B.work.promise = !0 : B.work.promise = !1
                    }, B.loadExtensions = function (t) {
                        return B.checkForPromise() ? B.loadExtensionsUsingPromise(t) : B.loadExtensionsUsingVanilla(t)
                    }, B.loadExtensionsUsingVanilla = function (t) {
                        var s, i, o, e, n, r, a, h, c, l, u, p;
                        for (t = B.safeObject(t), s = t.path || "", i = B.isa_fn(t.callback) ? t.callback : function () {}, o = B.isa_fn(t.error) ? t.error : function () {}, e = B.xtGet(t.minified, !0), n = e ? "-min.js" : ".js", r = [], h = Date.now(), 3e4, u = function (e) {
                                var t, i = B.work.loadAlias[e] || e;
                                B.contains(B.work.extensions, i) || ((t = document.createElement("script")).type = "text/javascript", t.async = "true", t.onload = function (t) {
                                    p(e)
                                }, t.onerror = function (t) {
                                    p(e, !0)
                                }, t.src = /\.js$/.test(i) ? s + i : s + i + n, document.body.appendChild(t))
                            }, p = function (t, e) {
                                B.removeItem(r, t), e || Date.now() > h + 3e4 ? o() : B.pushUnique(B.work.extensions, t), 0 === r.length && i()
                            }, a = B.loadExtensionsConcatenator(t), r = [].concat(a), c = 0, l = a.length; c < l; c++) u(a[c]);
                        return B
                    }, B.loadExtensionsUsingPromise = function (t) {
                        var e, i, s, o, n, r, a, h, c, l, u;
                        for (t = B.safeObject(t), e = B.simpleLoader, i = t.path || "", o = B.work.loadAlias, n = B.isa_fn(t.callback) ? t.callback : function () {}, r = B.isa_fn(t.error) ? t.error : function () {}, a = B.xtGet(t.minified, !0) ? "-min.js" : ".js", c = [], l = 0, u = (h = B.loadExtensionsConcatenator(t)).length; l < u; l++) s = o[h[l]] || h[l], c.push(e.js(/\.js$/.test(s) ? i + s : i + s + a));
                        return Promise.all(c).then(n).catch(r), B
                    }, B.loadExtensionsConcatenator = function (t) {
                        t = B.safeObject(t);
                        var e, i, s, o, n = [],
                            r = [],
                            a = B.xt,
                            h = B.pushUnique,
                            c = B.work.loadDependencies;
                        for (a(t.extensions) && (n = n.concat([].concat(t.extensions))), a(t.modules) && (n = n.concat([].concat(t.modules))), e = 0, i = n.length; e < i; e++) {
                            for (s = 0, o = c[n[e]].length; s < o; s++) h(r, c[n[e]][s]);
                            h(r, n[e])
                        }
                        return r
                    }, B.loadModules = B.loadExtensions, B.mergeInto = function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && !B.xt(t[i]) && (t[i] = e[i]);
                        return t
                    }, B.mergeOver = function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        return t
                    }, B.contains = function (t, e) {
                        return !!Array.isArray(t) && 0 <= t.indexOf(e)
                    }, B.toInt = function (t) {
                        return t.substring && (t = parseFloat(t)), t.toFixed ? 0 | t : 0
                    }, B.pushUnique = function (t, e) {
                        return t.indexOf(e) < 0 && t.push(e), t
                    }, B.removeItem = function (t, e) {
                        var i = t.indexOf(e);
                        return 0 <= i && t.splice(i, 1), t
                    }, B.isBetween = function (t, e, i, s) {
                        var o;
                        return i < e && (o = e, e = i, i = o), s ? e <= t && t <= i : e < t && t < i
                    }, B.work.isa_whitelist = ["str", "fn", "arr", "bool", "canvas", "date", "dom", "event", "img", "num", "realnum", "obj", "quaternion", "vector", "video"], B.isa = function () {
                        var t, e;
                        return 2 == arguments.length && (t = arguments[0], e = arguments[1].toLowerCase(), void 0 !== t && 0 <= B.work.isa_whitelist.indexOf(e)) && B["isa_" + e](t)
                    }, B.isa_str = function (t) {
                        return !(!t || !t.substring)
                    }, B.isa_fn = function (t) {
                        return "function" == typeof t
                    }, B.isa_arr = function (t) {
                        return !!Array.isArray(t)
                    }, B.isa_bool = function (t) {
                        return "boolean" == typeof t
                    }, B.isa_canvas = function (t) {
                        return "[object HTMLCanvasElement]" === Object.prototype.toString.call(t)
                    }, B.isa_date = function (t) {
                        return "[object Date]" === Object.prototype.toString.call(t)
                    }, B.isa_dom = function (t) {
                        return !!(t && t.querySelector && t.dispatchEvent)
                    }, B.isa_event = function (t) {
                        return !!(t && t.preventDefault && t.initEvent)
                    }, B.isa_img = function (t) {
                        return "[object HTMLImageElement]" === Object.prototype.toString.call(t)
                    }, B.isa_num = function (t) {
                        return !(!t || !t.toFixed)
                    }, B.isa_realnum = function (t) {
                        return !(!t || !t.toFixed || isNaN(t) || !isFinite(t))
                    }, B.isa_obj = function (t) {
                        return "[object Object]" === Object.prototype.toString.call(t)
                    }, B.isa_quaternion = function (t) {
                        return !(!t || !t.type || "Quaternion" !== t.type)
                    }, B.isa_vector = function (t) {
                        return !(!t || !t.type || "Vector" !== t.type)
                    }, B.isa_video = function (t) {
                        return "[object HTMLVideoElement]" === Object.prototype.toString.call(t)
                    }, B.safeObject = function (t) {
                        return "[object Object]" === Object.prototype.toString.call(t) ? t : B.work.o
                    }, B.xt = function (t) {
                        return void 0 !== t
                    }, B.xtGet = function () {
                        var t, e;
                        if (0 < arguments.length)
                            for (t = 0, e = arguments.length; t < e; t++)
                                if (void 0 !== arguments[t]) return arguments[t];
                        return null
                    }, B.xtGetTrue = function () {
                        var t, e;
                        if (0 < arguments.length)
                            for (t = 0, e = arguments.length; t < e; t++)
                                if (arguments[t]) return arguments[t];
                        return null
                    }, B.xta = function () {
                        var t, e, i;
                        if (t = arguments, Array.isArray(arguments[0]) && (t = arguments[0]), 0 < t.length) {
                            for (e = 0, i = t.length; e < i; e++)
                                if (void 0 === t[e]) return !1;
                            return !0
                        }
                        return !1
                    }, B.xto = function () {
                        var t, e, i;
                        if (t = arguments, Array.isArray(arguments[0]) && (t = arguments[0]), 0 < t.length)
                            for (e = 0, i = t.length; e < i; e++)
                                if (void 0 !== t[e]) return !0;
                        return !1
                    }, B.makeName = function (t) {
                        var e;
                        return t = B.safeObject(t), !!B.contains(B.work.nameslist, t.target) && (e = B.xtGetTrue(t.name, t.type, "default").replace(/[\.\/ \+\*\[\{\(\)~\-#\\\^\$\|\?]/g, "_").split("___"), B.contains(B[t.target], e[0]) ? e[0] + "___" + Math.floor(1e8 * Math.random()) : e[0])
                    }, B.setDisplayOffsets = function () {
                        var t, e, i = B.padnames,
                            s = B.pad;
                        for (t = 0, e = i.length; t < e; t++) s[i[t]].setDisplayOffsets();
                        return B
                    }, B.getCanvases = function () {
                        var t, e, i, s;
                        if (0 < (t = document.getElementsByTagName("canvas")).length) {
                            for (i = 0, s = t.length; i < s; i++) e = B.makePad({
                                canvasElement: t[i]
                            }), 0 === i && (B.work.currentPad = e.name);
                            return !0
                        }
                        return !1
                    }, B.addCanvasToPage = function (t) {
                        var e, i, s, o = B.xtGet;
                        return t = B.safeObject(t), e = document.getElementById(t.parentElement) || document.body, i = document.createElement("canvas"), e.appendChild(i), t.width = o(t.width, 300), t.height = o(t.height, 150), t.canvasElement = i, s = new B.Pad(t), B.setDisplayOffsets(), s
                    }, B.clear = function (t) {
                        var e, i, s, o = B.pad;
                        for (i = 0, s = (e = t ? [].concat(t) : B.padnames).length; i < s; i++) o[e[i]].clear();
                        return B
                    }, B.compile = function (t, e) {
                        var i, s, o, n = B.pad;
                        for (s = 0, o = (i = t ? [].concat(t) : B.padnames).length; s < o; s++) n[i[s]].compile(e);
                        return B
                    }, B.show = function (t) {
                        var e, i, s, o = B.pad;
                        for (i = 0, s = (e = t ? [].concat(t) : B.padnames).length; i < s; i++) o[e[i]].show();
                        return B
                    }, B.render = function (t, e) {
                        var i, s, o, n = B.pad;
                        for (s = 0, o = (i = t ? [].concat(t) : B.padnames).length; s < o; s++) n[i[s]].render(e);
                        return B
                    }, B.addPercentages = function (t, e) {
                        return (t = parseFloat(t)) + (e = parseFloat(e)) + "%"
                    }, B.reversePercentage = function (t) {
                        return (t = -(t = parseFloat(t))) + "%"
                    }, B.subtractPercentages = function (t, e) {
                        return (t = parseFloat(t)) - (e = parseFloat(e)) + "%"
                    }, B.work.activeListeners = [], window.CustomEvent && (B.triggerTouchEnter = function (t, e) {
                        B.updateCustomTouch(t, e, "touchenter")
                    }, B.triggerTouchLeave = function (t, e) {
                        B.updateCustomTouch(t, e, "touchleave")
                    }, B.triggerTouchFollow = function (t, e) {
                        B.updateCustomTouch(t, e, "touchfollow")
                    }, B.cloneTouchEventItem = function (t) {
                        var e = {};
                        return e.clientX = t.clientX, e.clientY = t.clientY, e.force = t.force, e.identifier = t.identifier, e.pageX = t.pageX, e.pageY = t.pageY, e.radiusX = t.radiusX, e.radiusY = t.radiusY, e.screenX = t.screenX, e.screenY = t.screenY, e.target = t.target, e
                    }, B.updateCustomTouch = function (t, e, i) {
                        var s, o, n, r = [],
                            a = [],
                            h = [],
                            c = B.xt,
                            l = B.cloneTouchEventItem;
                        if (c(t.changedTouches))
                            for (o = 0, n = t.changedTouches.length; o < n; o++) r.push(l(t.changedTouches[o]));
                        if (c(t.targetTouches))
                            for (o = 0, n = t.targetTouches.length; o < n; o++) a.push(l(t.targetTouches[o]));
                        if (c(t.touches))
                            for (o = 0, n = t.touches.length; o < n; o++) h.push(l(t.touches[o]));
                        s = new CustomEvent(i, {
                            altKey: t.altKey,
                            bubbles: t.bubbles,
                            cancelBubble: t.cancelBubble,
                            cancelable: t.cancelable,
                            changedTouches: r,
                            charCode: t.charCode,
                            clipboardData: t.clipboardData,
                            ctrlKey: t.ctrlKey,
                            currentTarget: t.currentTarget,
                            defaultPrevented: t.defaultPrevented,
                            detail: {},
                            eventPhase: t.eventPhase,
                            keyCode: t.eventPhase,
                            layerX: t.layerX,
                            layerY: t.layerY,
                            metaKey: t.metaKey,
                            pageX: t.pageX,
                            pageY: t.pageY,
                            path: t.path,
                            returnValue: t.returnValue,
                            shiftKey: t.shiftKey,
                            srcElement: t.srcElement,
                            target: t.target,
                            targetTouches: a,
                            timestamp: t.timestamp,
                            touches: h,
                            view: t.view,
                            which: t.which
                        }), e.dispatchEvent(s)
                    }), B.addNativeListener = function (t, e, i) {
                        var s, o, n, r, a;
                        if (B.removeNativeListener(t, e, i), t = [].concat(t), s = i.substring ? document.body.querySelectorAll(i) : Array.isArray(i) ? i : [i], B.isa_fn(e))
                            for (r = 0, a = t.length; r < a; r++)
                                for (o = 0, n = s.length; o < n; o++) s[o].addEventListener(t[r], e, !1)
                    }, B.removeNativeListener = function (t, e, i) {
                        var s, o, n, r, a;
                        if (t = [].concat(t), s = i.substring ? document.body.querySelectorAll(i) : Array.isArray(i) ? i : [i], B.isa_fn(e))
                            for (r = 0, a = t.length; r < a; r++)
                                for (o = 0, n = s.length; o < n; o++) s[o].removeEventListener(t[r], e, !1)
                    }, B.addListener = function (t, e, i) {
                        var s, o, n, r, a, h;
                        if (B.removeListener(t, e, i), h = !(!navigator.pointerEnabled && !navigator.msPointerEnabled), t = [].concat(t), s = i.substring ? document.body.querySelectorAll(i) : Array.isArray(i) ? i : [i], B.isa_fn(e))
                            for (r = 0, a = t.length; r < a; r++)
                                for (o = 0, n = s.length; o < n; o++)
                                    if (B.isa_dom(s[o])) switch (t[r]) {
                                        case "move":
                                            h ? s[o].addEventListener("pointermove", e, !1) : (s[o].addEventListener("mousemove", e, !1), s[o].addEventListener("touchmove", e, !1), s[o].addEventListener("touchfollow", e, !1));
                                            break;
                                        case "up":
                                            h ? s[o].addEventListener("pointerup", e, !1) : (s[o].addEventListener("mouseup", e, !1), s[o].addEventListener("touchend", e, !1));
                                            break;
                                        case "down":
                                            h ? s[o].addEventListener("pointerdown", e, !1) : (s[o].addEventListener("mousedown", e, !1), s[o].addEventListener("touchstart", e, !1));
                                            break;
                                        case "leave":
                                            h ? s[o].addEventListener("pointerleave", e, !1) : (s[o].addEventListener("mouseleave", e, !1), s[o].addEventListener("touchleave", e, !1));
                                            break;
                                        case "enter":
                                            h ? s[o].addEventListener("pointerenter", e, !1) : (s[o].addEventListener("mouseenter", e, !1), s[o].addEventListener("touchenter", e, !1))
                                    }
                        return !0
                    }, B.removeListener = function (t, e, i) {
                        var s, o, n, r, a, h;
                        if (t = [].concat(t), h = !(!navigator.pointerEnabled && !navigator.msPointerEnabled), s = i.substring ? document.body.querySelectorAll(i) : Array.isArray(i) ? i : [i], B.isa_fn(e))
                            for (r = 0, a = t.length; r < a; r++)
                                for (o = 0, n = s.length; o < n; o++)
                                    if (B.isa_dom(s[o])) switch (t[r]) {
                                        case "move":
                                            h ? s[o].removeEventListener("pointermove", e, !1) : (s[o].removeEventListener("mousemove", e, !1), s[o].removeEventListener("touchmove", e, !1), s[o].removeEventListener("touchfollow", e, !1));
                                            break;
                                        case "up":
                                            h ? s[o].removeEventListener("pointerup", e, !1) : (s[o].removeEventListener("mouseup", e, !1), s[o].removeEventListener("touchend", e, !1));
                                            break;
                                        case "down":
                                            h ? s[o].removeEventListener("pointerdown", e, !1) : (s[o].removeEventListener("mousedown", e, !1), s[o].removeEventListener("touchstart", e, !1));
                                            break;
                                        case "leave":
                                            h ? s[o].removeEventListener("pointerleave", e, !1) : (s[o].removeEventListener("mouseleave", e, !1), s[o].removeEventListener("touchleave", e, !1));
                                            break;
                                        case "enter":
                                            h ? s[o].removeEventListener("pointerenter", e, !1) : (s[o].removeEventListener("mouseenter", e, !1), s[o].removeEventListener("touchenter", e, !1))
                                    }
                        return !0
                    }, B.bucketSort = function (t, e, i) {
                        var s, o, n, r, a;
                        for (s = [
                                []
                            ], o = 0, n = i.length; o < n; o++) s[r = Math.floor(B[t][i[o]][e])] || (s[r] = []), s[r].push(i[o]);
                        for (a = [], o = 0, n = s.length; o < n; o++) s[o] && a.push(s[o]);
                        return [].concat.apply([], a)
                    }, B.correctCoordinates = function (t, e) {
                        var i, s, o, n, r = B.xtGet;
                        return t = B.safeObject(t), i = B.makeVector(t), !!B.xta(t.x, t.y) && (e = B.cell[e] ? B.cell[e] : B.cell[B.pad[B.work.currentPad].base], o = r((s = B.pad[e.pad]).localWidth, s.width, 300), n = r(s.localHeight, s.height, 150), o !== e.actualWidth && (i.x /= o / e.actualWidth), n !== e.actualHeight && (i.y /= n / e.actualHeight), i)
                    }, B.addNewCell = function (t, e) {
                        return e = e && e.substring ? e : B.work.currentPad, B.pad[e].addNewCell(t)
                    }, B.deleteCells = function () {
                        var t, e, i, s, o, n = B.group,
                            r = B.groupnames,
                            a = B.removeItem;
                        for (t = Array.prototype.slice.call(arguments), Array.isArray(t[0]) && (t = t[0]), e = 0, i = t.length; e < i; e++) {
                            for (s = 0, o = B.padnames.length; s < o; s++) B.pad[B.padnames[s]].deleteCell(c[e]);
                            delete n[t[e]], delete n[t[e] + "_field"], delete n[t[e] + "_fence"], a(r, t[e]), a(r, t[e] + "_field"), a(r, t[e] + "_fence"), delete B.context[t[e]], delete B.canvas[t[e]], delete B.ctx[B.cell[t[e]].context], a(B.ctxnames, B.cell[t[e]].context), delete B.cell[t[e]], a(B.cellnames, t[e])
                        }
                        return B
                    }, B.addEntitysToGroups = function (t, e) {
                        var i, s, o, n, r;
                        if (B.xta(t, e))
                            for (i = [].concat(t), s = [].concat(e), n = 0, r = i.length; n < r; n++)(o = B.group[i[n]]) && o.addEntitysToGroup(s);
                        return B
                    }, B.removeEntitysFromGroups = function (t, e) {
                        var i, s, o, n, r;
                        if (B.xta(t, e))
                            for (i = [].concat(t), s = [].concat(e), n = 0, r = i.length; n < r; n++)(o = B.group[i[n]]) && o.removeEntitysFromGroup(s);
                        return B
                    }, B.deleteEntity = function () {
                        var t, e, i, s, o, n, r, a = B.removeItem;
                        B.animation, B.animationnames;
                        for (t = Array.prototype.slice.call(arguments), Array.isArray(t[0]) && (t = t[0]), e = 0, i = t.length; e < i; e++)
                            if (n = B.entity[t[e]])
                                for (B.pathDeleteEntity(n), r = n.context, a(B.ctxnames, r), delete B.ctx[r], a(B.entitynames, t[e]), delete B.entity[t[e]], s = 0, o = B.groupnames.length; s < o; s++) a(B.group[B.groupnames[s]].entitys, t[e]);
                        return B
                    }, B.pathDeleteEntity = function (t) {}, B.newVector = function (t) {
                        return B.makeVector(t)
                    }, B.newPad = function (t) {
                        return B.makePad(t)
                    }, B.newCell = function (t) {
                        return B.makeCell(t)
                    }, B.newContext = function (t) {
                        return B.makeContext(t)
                    }, B.newGroup = function (t) {
                        return B.makeGroup(t)
                    }, B.newGradient = function (t) {
                        return B.makeGradient(t)
                    }, B.newRadialGradient = function (t) {
                        return B.makeRadialGradient(t)
                    }, B.makeVector = function (t) {
                        return new B.Vector(t)
                    }, B.makePad = function (t) {
                        return new B.Pad(t)
                    }, B.makeCell = function (t) {
                        return new B.Cell(t)
                    }, B.makeContext = function (t) {
                        return new B.Context(t)
                    }, B.makeGroup = function (t) {
                        return new B.Group(t)
                    }, B.makeGradient = function (t) {
                        return new B.Gradient(t)
                    }, B.makeRadialGradient = function (t) {
                        return new B.RadialGradient(t)
                    }, B.setPerspectives = function () {}, B.Vector = function (t) {
                        return t = B.safeObject(t), this.x = t.x || 0, this.y = t.y || 0, this.z = t.z || 0, this.name = t.name || "generic", this
                    }, B.Vector.prototype = Object.create(Object.prototype), B.Vector.prototype.type = "Vector", B.work.d.Vector = {
                        x: 0,
                        y: 0,
                        z: 0,
                        name: "generic"
                    }, B.Vector.prototype.setMagnitudeTo = function (t) {
                        return this.normalize(), this.scalarMultiply(t), this.getMagnitude() !== t && (this.normalize(), this.scalarMultiply(t), this.getMagnitude() !== t && (this.normalize(), this.scalarMultiply(t))), this
                    }, B.Vector.prototype.normalize = function () {
                        var t = this.getMagnitude();
                        return 0 < t && (this.x /= t, this.y /= t, this.z /= t), this
                    }, B.Vector.prototype.zero = function () {
                        return this.x = 0, this.y = 0, this.z = 0, this
                    }, B.Vector.prototype.set = function (t) {
                        t = B.safeObject(t);
                        var e = B.xtGet;
                        return this.x = e(t.x, this.x), this.y = e(t.y, this.y), this.z = e(t.z, this.z), this
                    }, B.Vector.prototype.isEqual = function (t) {
                        return !(!B.isa_vector(t) || this.x !== t.x || this.y !== t.y || this.z !== t.z)
                    }, B.Vector.prototype.isLike = function (t) {
                        return !(!B.isa_obj(t) || this.x !== t.x || this.y !== t.y || this.z !== t.z)
                    }, B.Vector.prototype.getData = function () {
                        return {
                            x: this.x,
                            y: this.y,
                            z: this.z
                        }
                    }, B.Vector.prototype.hasCoordinates = function (t) {
                        return !!B.xta(t, t.x, t.y)
                    }, B.Vector.prototype.vectorAdd = function (t) {
                        return t = B.safeObject(t), this.x += t.x || 0, this.y += t.y || 0, this.z += t.z || 0, this
                    }, B.Vector.prototype.vectorSubtract = function (t) {
                        return t = B.safeObject(t), this.x -= t.x || 0, this.y -= t.y || 0, this.z -= t.z || 0, this
                    }, B.Vector.prototype.vectorMultiply = function (t) {
                        return t = B.safeObject(t), this.x *= t.x || 1, this.y *= t.y || 1, this.z *= t.z || 1, this
                    }, B.Vector.prototype.vectorDivide = function (t) {
                        return t = B.safeObject(t), this.x /= 0 !== (t.x || 0) ? t.x : 1, this.y /= 0 !== (t.y || 0) ? t.y : 1, this.z /= 0 !== (t.z || 0) ? t.z : 1, this
                    }, B.Vector.prototype.scalarMultiply = function (t) {
                        return t.toFixed && (this.x *= t, this.y *= t, this.z *= t), this
                    }, B.Vector.prototype.scalarDivide = function (t) {
                        return t.toFixed && 0 !== t && (this.x /= t, this.y /= t, this.z /= t), this
                    }, B.Vector.prototype.getMagnitude = function () {
                        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
                    }, B.Vector.prototype.checkNotZero = function () {
                        return !!(this.x || this.y || this.z)
                    }, B.Vector.prototype.getVector = function () {
                        return B.makeVector({
                            x: this.x,
                            y: this.y,
                            z: this.z
                        })
                    }, B.Vector.prototype.getCrossProduct = function (t, e) {
                        var i, s, o, n, r, a;
                        return B.isa_obj(t) ? (i = (e = B.isa_obj(e) ? e : this).x || 0, s = e.y || 0, o = e.z || 0, n = t.x || 0, r = t.y || 0, a = t.z || 0, B.makeVector({
                            x: s * a - o * r,
                            y: -i * a + o * n,
                            z: i * r + s * n
                        })) : this
                    }, B.Vector.prototype.getDotProduct = function (t, e) {
                        return !!B.isa_obj(t) && (e = B.isa_obj(e) ? e : this, (t.x || 0) * (e.x || 0) + (t.y || 0) * (e.y || 0) + (t.z || 0) * (e.z || 0))
                    }, B.Vector.prototype.getTripleScalarProduct = function (t, e, i) {
                        var s, o, n, r, a, h, c, l, u;
                        return !(!B.isa_obj(t) || !B.isa_obj(e)) && (i = B.isa_obj(i) ? i : this, s = t.x || 0, o = t.y || 0, n = t.z || 0, r = e.x || 0, a = e.y || 0, h = e.z || 0, c = i.x || 0, l = i.y || 0, s * (a * (u = i.z || 0) - h * l) + o * (-r * u + h * c) + n * (r * l - a * c))
                    }, B.Vector.prototype.rotate = function (t) {
                        var e = [0, 0];
                        return t.toFixed && (e[0] = Math.atan2(this.y, this.x), e[0] += .01745329251 * t, e[1] = this.getMagnitude(), this.x = e[1] * Math.cos(e[0]), this.y = e[1] * Math.sin(e[0])), this
                    }, B.Vector.prototype.reverse = function () {
                        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
                    }, B.Vector.prototype.rotate3d = function (t, e) {
                        var i, s, o, n;
                        return B.isa_quaternion(t) && (n = B.work.workquat, e = e && e.toFixed ? e : this.getMagnitude(), i = n.q1.set(t), s = n.q2.set(this), o = n.q3.set(t).conjugate(), i.quaternionMultiply(s), i.quaternionMultiply(o), this.set(i.v).setMagnitudeTo(e)), this
                    }, B.Base = function (t) {
                        return t = B.safeObject(t), this.name = B.makeName({
                            name: t.name,
                            type: this.type,
                            target: this.classname
                        }), this
                    }, B.Base.prototype = Object.create(Object.prototype), B.Base.prototype.type = "Base", B.Base.prototype.classname = "objectnames", B.work.d.Base = {
                        comment: "",
                        title: "",
                        timestamp: ""
                    }, B.Base.prototype.get = function (t) {
                        return B.xtGet(this[t], B.work.d[this.type][t])
                    }, B.Base.prototype.set = function (t) {
                        var e = B.work.d[this.type],
                            i = B.xt;
                        for (var s in t) i(e[s]) && (this[s] = t[s]);
                        return this
                    }, B.Base.prototype.clone = function (t) {
                        var e, i, s, o;
                        for (delete(e = B.mergeOver(this.parse(), B.safeObject(t))).context, this, s = 0, o = (i = Object.keys(this)).length; s < o; s++) B.isa_fn(this[i[s]]) && (e[i[s]] = this[i[s]]);
                        return new B[this.type](e)
                    }, B.Base.prototype.parse = function () {
                        return JSON.parse(JSON.stringify(this))
                    }, B.Base.prototype.numberConvert = function (t, e) {
                        var i = parseFloat(t) / 100;
                        if (isNaN(i)) switch (t) {
                            case "right":
                            case "bottom":
                                return e;
                            case "center":
                                return e / 2;
                            default:
                                return 0
                        }
                        return i * e
                    }, B.Device = function () {
                        return this.name = "scrawl_viewport", this.width = null, this.height = null, this.offsetX = null, this.offsetY = null, this.expectTouch = !1, this.canvas = !1, this.canvasGcoSourceIn = !1, this.canvasGcoSourceOut = !1, this.canvasGcoDestinationAtop = !1, this.canvasGcoDestinationIn = !1, this.canvasGcoCopy = !1, this.canvasEvenOddWinding = !1, this.canvasDashedLine = !1, this.getDeviceData(), this
                    }, B.Device.prototype = Object.create(B.Base.prototype), B.Device.prototype.type = "Device", B.Device.prototype.classname = "objectnames", B.work.d.Device = {
                        width: null,
                        height: null,
                        offsetX: null,
                        offsetY: null,
                        expectTouch: !1,
                        canvas: !1,
                        canvasEvenOddWinding: !1,
                        canvasDashedLine: !1,
                        canvasGcoSourceIn: !1,
                        canvasGcoSourceOut: !1,
                        canvasGcoDestinationAtop: !1,
                        canvasGcoDestinationIn: !1,
                        canvasGcoCopy: !1,
                        video: !1,
                        videoAutoplay: !1,
                        videoForceFullScreen: !1
                    }, B.mergeInto(B.work.d.Device, B.work.d.Base), B.Device.prototype.getDeviceData = function () {
                        this.checkCanvas(), this.canvas && (this.checkCanvasEvenOddWinding(), this.checkCanvasDashedLine(), this.checkCanvasGco()), this.getViewportDimensions(), this.getViewportPosition(), this.getStacksDeviceData(), this.getImagesDeviceData(), this.checkTouch()
                    }, B.Device.prototype.checkTouch = function () {
                        var t = !1;
                        "ontouchstart" in window ? t = !0 : window.DocumentTouch && document instanceof DocumentTouch && (t = !0), this.expectTouch = t
                    }, B.Device.prototype.checkCanvas = function () {
                        var t = document.createElement("canvas").getContext("2d");
                        this.canvas = !!t
                    }, B.Device.prototype.checkCanvasEvenOddWinding = function () {
                        var t, e = document.createElement("canvas"),
                            i = e.getContext("2d"),
                            s = "evenodd";
                        e.width = 10, e.height = 10, i.beginPath(), i.moveTo(0, 0), i.lineTo(10, 0), i.lineTo(10, 10), i.lineTo(0, 10), i.lineTo(0, 0), i.moveTo(3, 3), i.lineTo(7, 3), i.lineTo(7, 7), i.lineTo(3, 7), i.lineTo(3, 3), i.moveTo(0, 0), i.closePath(), i.mozFillRule = s, i.msFillRule = s, i.fill(s), t = i.getImageData(5, 5, 1, 1), this.canvasEvenOddWinding = !t.data[3]
                    }, B.Device.prototype.checkCanvasDashedLine = function () {
                        var t, e = document.createElement("canvas"),
                            i = e.getContext("2d"),
                            s = [5, 5];
                        e.width = 10, e.height = 10, i.mozDash = s, i.lineDash = s;
                        try {
                            i.setLineDash(s)
                        } catch (t) {}
                        i.lineWidth = 10, i.beginPath(), i.moveTo(0, 5), i.lineTo(10, 5), i.stroke(), t = i.getImageData(8, 5, 1, 1), this.canvasDashedLine = !t.data[3]
                    }, B.Device.prototype.checkCanvasGco = function () {
                        var t, e = document.createElement("canvas"),
                            i = e.getContext("2d");
                        e.width = 10, e.height = 10, i.fillStyle = "red", i.fillRect(3, 0, 4, 10), i.globalCompositeOperation = "source-in", i.fillStyle = "blue", i.fillRect(0, 3, 10, 4), t = i.getImageData(5, 1, 1, 1), this.canvasGcoSourceIn = !t.data[3], i.globalCompositeOperation = "source-over", i.clearRect(0, 0, 10, 10), i.fillStyle = "red", i.fillRect(3, 0, 4, 10), i.globalCompositeOperation = "source-out", i.fillStyle = "blue", i.fillRect(0, 3, 10, 4), t = i.getImageData(5, 1, 1, 1), this.canvasGcoSourceOut = !t.data[3], i.globalCompositeOperation = "source-over", i.clearRect(0, 0, 10, 10), i.fillStyle = "red", i.fillRect(3, 0, 4, 10), i.globalCompositeOperation = "destination-atop", i.fillStyle = "blue", i.fillRect(0, 3, 10, 4), t = i.getImageData(5, 1, 1, 1), this.canvasGcoDestinationAtop = !t.data[3], i.globalCompositeOperation = "source-over", i.clearRect(0, 0, 10, 10), i.fillStyle = "red", i.fillRect(3, 0, 4, 10), i.globalCompositeOperation = "destination-in", i.fillStyle = "blue", i.fillRect(0, 3, 10, 4), t = i.getImageData(5, 1, 1, 1), this.canvasGcoDestinationIn = !t.data[3], i.globalCompositeOperation = "source-over", i.clearRect(0, 0, 10, 10), i.fillStyle = "red", i.fillRect(3, 0, 4, 10), i.globalCompositeOperation = "copy", i.fillStyle = "blue", i.fillRect(0, 3, 10, 4), t = i.getImageData(5, 1, 1, 1), this.canvasGcoCopy = !t.data[3]
                    }, B.Device.prototype.getViewportDimensions = function (t) {
                        var e, i, s;
                        return t ? (i = (e = B.device).width, s = e.height, e.width = document.documentElement.clientWidth - 1, e.height = document.documentElement.clientHeight - 1, i != e.width || s != e.height) : (i = this.width, s = this.height, this.width = document.documentElement.clientWidth - 1, this.height = document.documentElement.clientHeight - 1, i != this.width || s != this.height)
                    }, B.Device.prototype.getViewportPosition = function (t) {
                        var e, i, s, o, n;
                        return t ? (e = B.device, i = B.xtGet, s = e.offsetX, o = e.offsetY, e.offsetX = i(t.pageX, t.target.offsetX, 0), e.offsetY = i(t.pageY, t.target.offsetY, 0), s != e.offsetX || o != e.offsetY) : (n = document.documentElement, s = this.offsetX, o = this.offsetY, this.offsetX = (window.pageXOffset || n.scrollLeft) - (n.clientLeft || 0), this.offsetY = (window.pageYOffset || n.scrollTop) - (n.clientTop || 0), s != this.offsetX || o != this.offsetY)
                    }, B.Device.prototype.getStacksDeviceData = function () {}, B.Device.prototype.getImagesDeviceData = function () {}, B.Device.prototype.isLandscape = function () {
                        return !(this.width < this.height)
                    }, B.Device.prototype.isPortrait = function () {
                        return this.width < this.height
                    }, B.Position = function (t) {
                        var e = B.safeObject,
                            i = B.work.d[this.type],
                            s = B.xtGet,
                            o = B.makeVector;
                        B.Base.call(this, t);
                        var n = e((t = e(t)).start);
                        return this.start = o({
                            x: s(t.startX, n.x, 0),
                            y: s(t.startY, n.y, 0),
                            name: this.type + "." + this.name + ".start"
                        }), this.currentStart = o({
                            name: this.type + "." + this.name + ".current.start"
                        }), this.currentStart.flag = !1, n = e(t.handle), this.handle = o({
                            x: s(t.handleX, n.x, 0),
                            y: s(t.handleY, n.y, 0),
                            name: this.type + "." + this.name + ".handle"
                        }), this.currentHandle = o({
                            name: this.type + "." + this.name + ".current.handle"
                        }), this.currentHandle.flag = !1, this.maxDimensions = {
                            flag: !0,
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, this.pivot = s(t.pivot, i.pivot), this.scale = s(t.scale, i.scale), this.roll = s(t.roll, i.roll), this.flipReverse = s(t.flipReverse, i.flipReverse), this.flipUpend = s(t.flipUpend, i.flipUpend), this.lockX = s(t.lockX, i.lockX), this.lockY = s(t.lockY, i.lockY), this.mouseIndex = s(t.mouseIndex, "mouse"), this.animationPositionInit(t), this.pathPositionInit(t), this
                    }, B.Position.prototype = Object.create(B.Base.prototype), B.Position.prototype.type = "Position", B.Position.prototype.classname = "objectnames", B.work.d.Position = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        currentStart: {
                            x: 0,
                            y: 0
                        },
                        handle: {
                            x: 0,
                            y: 0
                        },
                        currentHandle: {
                            x: 0,
                            y: 0
                        },
                        maxDimensions: {
                            flag: !0,
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        },
                        pivot: null,
                        scale: 1,
                        flipReverse: !1,
                        flipUpend: !1,
                        lockX: !1,
                        lockY: !1,
                        roll: 0,
                        mouseIndex: "mouse",
                        width: 0,
                        height: 0
                    }, B.mergeInto(B.work.d.Position, B.work.d.Base), B.Position.prototype.animationPositionInit = function (t) {}, B.Position.prototype.pathPositionInit = function (t) {}, B.Position.prototype.get = function (t) {
                        if (B.contains(["startX", "startY", "handleX", "handleY"], t)) switch (t) {
                            case "startX":
                                return this.start.x;
                            case "startY":
                                return this.start.y;
                            case "handleX":
                                return this.handle.x;
                            case "handleY":
                                return this.handle.y
                        }
                        return this.animationPositionGet(t) || B.Base.prototype.get.call(this, t)
                    }, B.Position.prototype.getX = function () {
                        return this.currentStart.x
                    }, B.Position.prototype.getY = function () {
                        return this.currentStart.y
                    }, B.Position.prototype.animationPositionGet = function (t) {
                        return !1
                    }, B.Position.prototype.set = function (t) {
                        var e = B.xto;
                        return t = B.safeObject(t), B.Base.prototype.set.call(this, t), e(t.start, t.startX, t.startY) && this.setStart(t), e(t.handle, t.handleX, t.handleY) && this.setHandle(t), e(t.flipUpend, t.flipReverse, t.scale, t.width, t.height, t.roll) && (this.maxDimensions.flag = !0, e(t.scale, t.width, t.height) && (this.currentHandle.flag = !1)), B.xt(t.pivot) && (this.currentPivotIndex = !1), this.animationPositionSet(t), this
                    }, B.Position.prototype.setStart = function (t) {
                        var e, i = B.safeObject,
                            s = B.xtGet,
                            o = B.makeVector,
                            n = B.isa_vector;
                        return t = i(t), n(this.start) || (this.start = o(t.start || this.start), this.start.name = this.type + "." + this.name + ".start"), e = i(t.start), this.start.x = s(t.startX, e.x, this.start.x), this.start.y = s(t.startY, e.y, this.start.y), n(this.currentStart) || (this.currentStart = o({
                            name: this.type + "." + this.name + ".current.start"
                        })), this.currentStart.flag = !1, this.maxDimensions.flag = !0, this
                    }, B.Position.prototype.setHandle = function (t) {
                        var e, i = B.safeObject,
                            s = B.xtGet,
                            o = B.makeVector,
                            n = B.isa_vector;
                        return t = i(t), n(this.handle) || (this.handle = o(t.handle || this.handle), this.handle.name = this.type + "." + this.name + ".handle"), e = i(t.handle), this.handle.x = s(t.handleX, e.x, this.handle.x), this.handle.y = s(t.handleY, e.y, this.handle.y), n(this.currentHandle) || (this.currentHandle = o({
                            name: this.type + "." + this.name + ".current.handle"
                        })), this.currentHandle.flag = !1, this.maxDimensions.flag = !0, this
                    }, B.Position.prototype.animationPositionSet = function (t) {}, B.Position.prototype.updateStart = function (t) {}, B.Position.prototype.revertStart = function (t) {}, B.Position.prototype.reverse = function (t) {}, B.Position.prototype.setDeltaAttribute = function (t) {}, B.Position.prototype.setDelta = function (t) {
                        var e = B.xto;
                        return e((t = B.safeObject(t)).start, t.startX, t.startY) && this.setDeltaStart(t), B.Position.prototype.pathPositionSetDelta.call(this, t), e(t.handle, t.handleX, t.handleY) && this.setDeltaHandle(t), e(t.scale, t.width, t.height, t.roll) && (t.scale && this.setDeltaScale(t), t.roll && this.setDeltaRoll(t), t.width && this.setDeltaWidth(t), t.height && this.setDeltaHeight(t), this.maxDimensions.flag = !0, e(t.scale, t.width, t.height) && (this.currentHandle.flag = !1)), this
                    }, B.Position.prototype.setDeltaStart = function (t) {
                        var e, i, s, o = B.safeObject,
                            n = B.xtGet,
                            r = B.addPercentages;
                        return e = o((t = o(t)).start), i = n(t.startX, e.x, 0), s = n(t.startY, e.y, 0), this.start.x = this.start.x.toFixed ? this.start.x + i : r(this.start.x, i), this.start.y = this.start.y.toFixed ? this.start.y + s : r(this.start.y, s), this.currentStart.flag = !1, this
                    }, B.Position.prototype.setDeltaHandle = function (t) {
                        var e, i, s, o = B.safeObject,
                            n = B.xtGet,
                            r = B.addPercentages;
                        return e = o((t = o(t)).handle), i = n(t.handleX, e.x, 0), s = n(t.handleY, e.y, 0), this.handle.x = this.handle.x.toFixed ? this.handle.x + i : r(this.handle.x, i), this.handle.y = this.handle.y.toFixed ? this.handle.y + s : r(this.handle.y, s), this.currentHandle.flag = !1, this
                    }, B.Position.prototype.setDeltaScale = function (t) {
                        return t = B.safeObject(t), this.scale += t.scale || 0, this
                    }, B.Position.prototype.setDeltaRoll = function (t) {
                        return t = B.safeObject(t), this.roll += t.roll || 0, this
                    }, B.Position.prototype.setDeltaWidth = function (t) {
                        var e;
                        return e = (t = B.safeObject(t)).width || 0, this.width = this.width.toFixed ? this.width + e : B.addPercentages(this.width, e), this
                    }, B.Position.prototype.setDeltaHeight = function (t) {
                        var e;
                        return e = (t = B.safeObject(t)).height || 0, this.height = this.height.toFixed ? this.height + e : B.addPercentages(this.height, e), this
                    }, B.Position.prototype.pathPositionSetDelta = function (t) {}, B.Position.prototype.clone = function (t) {
                        var e, i, s = B.safeObject,
                            o = B.makeVector,
                            n = B.xtGet;
                        return t = s(t), i = B.Base.prototype.clone.call(this, t), e = s(t.start), i.start = o({
                            x: n(t.startX, e.x, i.start.x),
                            y: n(t.startY, e.y, i.start.y),
                            name: i.type + "." + i.name + ".start"
                        }), e = s(t.handle), i.handle = o({
                            x: n(t.handleX, e.x, i.handle.x),
                            y: n(t.handleY, e.y, i.handle.y),
                            name: i.type + "." + i.name + ".handle"
                        }), i = this.animationPositionClone(i, t)
                    }, B.Position.prototype.animationPositionClone = function (t, e) {
                        return t
                    }, B.Position.prototype.getReferenceDimensions = {
                        Pad: function (t) {
                            return {
                                w: t.localWidth,
                                h: t.localHeight,
                                c: !1
                            }
                        },
                        Cell: function (t) {
                            return {
                                w: t.actualWidth,
                                h: t.actualHeight,
                                c: !1
                            }
                        },
                        Block: function (t) {
                            var e = t.scale;
                            return {
                                w: t.localWidth / e,
                                h: t.localHeight / e,
                                c: !1
                            }
                        },
                        Wheel: function (t) {
                            return {
                                w: t.width,
                                h: t.height,
                                c: !0
                            }
                        },
                        Phrase: function (t) {
                            return {
                                w: t.width,
                                h: t.height,
                                c: !1
                            }
                        },
                        Picture: function (t) {
                            var e = t.scale,
                                i = t.pasteData;
                            return {
                                w: i.w / e,
                                h: i.h / e,
                                c: !1
                            }
                        },
                        Path: function (t) {
                            return {
                                w: t.width,
                                h: t.height,
                                c: !t.isLine
                            }
                        },
                        Shape: function (t) {
                            return {
                                w: t.width,
                                h: t.height,
                                c: !t.isLine
                            }
                        },
                        Frame: function (t) {
                            return {
                                w: t.width,
                                h: t.height,
                                c: !1
                            }
                        }
                    }, B.Position.prototype.updateCurrentHandle = function () {
                        var t, e, i, s, o, n, r, a, h;
                        return this.currentHandle.flag || (t = this.getReferenceDimensions[this.type](this), e = B.contains, i = this.numberConvert, o = ["top", "bottom", "left", "right", "center"], n = (s = this.handle).x.substring, r = s.y.substring, a = this.currentHandle, h = this.scale || 1, a.x = n ? i(s.x, t.w) : s.x, a.y = r ? i(s.y, t.h) : s.y, t.c && (e(o, s.x) && (a.x -= t.w / 2), e(o, s.y) && (a.y -= t.h / 2)), n && (a.x *= h), r && (a.y *= h), isNaN(a.x) && (a.x = 0), isNaN(a.y) && (a.y = 0), a.reverse(), a.flag = !0), this
                    }, B.Position.prototype.updateCurrentStart = function (t) {
                        var e, i, s, o;
                        if (!this.currentStart.flag && t && t.type) {
                            if (o = this.currentStart, e = this.getReferenceDimensions[t.type](t), i = this.numberConvert, s = this.start, o.x = s.x.substring ? i(s.x, e.w) : s.x, o.y = s.y.substring ? i(s.y, e.h) : s.y, isNaN(o.x) || isNaN(o.y)) return o.x = 0, o.y = 0, this;
                            o.flag = !0
                        }
                        return this
                    }, B.Position.prototype.setStampUsingPivot = function (t, e) {
                        var i, s, o, n, r, a, h, c = this.setStampUsingPivotCalculations;
                        return this.currentPivotIndex || (o = this.pivot, n = B.point, r = B.entity, a = B.safeObject, "mouse" === o ? s = !(i = "mouse") : a(n)[o] ? (i = "point", s = n[o]) : r[o] ? (i = "entity", s = r[o]) : (h = B.xtGet(a(B.stack)[o], a(B.pad)[o], a(B.element)[o], !1)) && (i = "stack", s = h), i && (this.currentPivot = s, this.currentPivotIndex = i)), this.currentPivotIndex && c[this.currentPivotIndex](this, this.currentPivot, t, e), this
                    }, B.Position.prototype.setStampUsingPivotCalculations = {
                        point: function (t, e) {
                            var i = B.entity[e.entity],
                                s = t.currentStart,
                                o = e.getCurrentCoordinates().rotate(i.roll).vectorAdd(i.currentStart);
                            s.x = t.lockX ? s.x : o.x, s.y = t.lockY ? s.y : o.y
                        },
                        entity: function (t, e) {
                            var i = "Particle" === e.type ? e.get("place") : e.currentStart,
                                s = t.currentStart;
                            s.x = t.lockX ? s.x : i.x, s.y = t.lockY ? s.y : i.y
                        },
                        mouse: function (t, e, i, s) {
                            var o = t.currentStart;
                            B.xt(s) || (i = B.cell[i], s = B.pad[i.pad].mice[t.mouseIndex]), (s = t.correctCoordinates(s, i)) && (null == t.oldX && null == t.oldY && (t.oldX = o.x, t.oldY = o.y), o.x = t.lockX ? o.x : o.x + s.x - t.oldX, o.y = t.lockY ? o.y : o.y + s.y - t.oldY, t.oldX = s.x, t.oldY = s.y)
                        },
                        stack: function () {}
                    }, B.Position.prototype.correctCoordinates = function (t, e) {
                        var i, s, o, n, r = B.xtGet;
                        return t = B.safeObject(t), i = B.work.v.set(t), !!a.xta(t.x, t.y) && (e = B.cell[e] ? B.cell[e] : B.cell[B.pad[B.work.currentPad].base], o = r((s = B.pad[e.pad]).localWidth, s.width, 300), n = r(s.localHeight, s.height, 150), o !== e.actualWidth && (i.x /= o / e.actualWidth), n !== e.actualHeight && (i.y /= n / e.actualHeight), i)
                    }, B.PageElement = function (t) {
                        var e = B.xtGet,
                            i = B.work.d[this.type];
                        return t = B.safeObject(t), B.Base.call(this, t), this.width = e(t.width, i.width), this.height = e(t.height, i.height), this.scale = e(t.scale, i.scale), this.propogateTouch = e(t.propogateTouch, i.propogateTouch), this.setLocalDimensions(), this.stacksPageElementConstructor(t), this.mice = {
                            mouse: B.makeVector()
                        }, this.mice.mouse.id = "mouse", this.mice.mouse.active = !1, this.mice.mouse.name = this.type + "." + this.name + ".ui.mouse", this
                    }, B.PageElement.prototype = Object.create(B.Base.prototype), B.PageElement.prototype.type = "PageElement", B.PageElement.prototype.classname = "objectnames", B.work.d.PageElement = {
                        width: 300,
                        height: 150,
                        localWidth: 300,
                        localHeight: 150,
                        displayOffsetX: 0,
                        displayOffsetY: 0,
                        scale: 1,
                        mice: {},
                        interactive: !0,
                        propogateTouch: !1,
                        position: "static"
                    }, B.mergeInto(B.work.d.PageElement, B.work.d.Base), B.PageElement.prototype.stacksPageElementConstructor = function (t) {}, B.PageElement.prototype.get = function (t) {
                        var e = this.getElement(),
                            i = B.xtGet,
                            s = B.work.d[this.type];
                        if (B.contains(["width", "height", "position"], t)) switch (t) {
                            case "width":
                                return i(this.localWidth, parseFloat(e.width), s.width);
                            case "height":
                                return i(this.localHeight, parseFloat(e.height), s.height);
                            case "position":
                                return i(this.position, e.style.position)
                        }
                        return B.Base.prototype.get.call(this, t)
                    }, B.PageElement.prototype.set = function (t) {
                        var e = B.xt,
                            i = B.xto;
                        return t = B.safeObject(t), B.Base.prototype.set.call(this, t), i(t.width, t.height, t.scale) && (this.setLocalDimensions(), this.setDimensions(), this.setDisplayOffsets()), e(t.position) && (this.position = t.position), e(t.pivot) && (this.pivot = t.pivot, this.pivot || (delete this.oldX, delete this.oldY)), e(t.mouse) && this.initMouse(t.mouse), i(t.title, t.comment) && this.setAccessibility(t), e(t.interactive) && (this.interactive = t.interactive, this.removeMouseMove(), this.interactive && this.addMouseMove()), this
                    }, B.PageElement.prototype.setAccessibility = function (t) {
                        var e, i = B.xt;
                        return t = B.safeObject(t), e = this.getElement(), i(t.title) && (this.title = t.title, e.title = this.title), i(t.comment) && (this.comment = t.comment, e.setAttribute("data-comment", this.comment)), this
                    }, B.PageElement.prototype.setDisplayOffsets = function () {
                        var t = this.getElement(),
                            e = 0,
                            i = 0;
                        if (t.offsetParent)
                            for (; e += t.offsetLeft, i += t.offsetTop, (t = t.offsetParent).offsetParent;);
                        return this.displayOffsetX = e, this.displayOffsetY = i, this
                    }, B.PageElement.prototype.scaleDimensions = function (t) {
                        return t.toFixed && (this.scale = t, this.setDimensions()), this
                    }, B.PageElement.prototype.setLocalDimensions = function () {
                        var t = this.scale;
                        return this.localWidth = this.width * t, this.localHeight = this.height * t, this
                    }, B.PageElement.prototype.setDimensions = function () {
                        var t = this.getElement();
                        return t.style.width = this.localWidth + "px", t.style.height = this.localHeight + "px", this
                    }, B.PageElement.prototype.getMouse = function (t) {
                        var e, i, s, o = [];
                        if (B.xt(t)) {
                            if (B.xt(t) && B.isa_bool(t) && t) return this.mice;
                            if (B.isa_event(t)) {
                                if (t.changedTouches) {
                                    for (i = 0, s = t.changedTouches.length; i < s; i++) e = "t" + t.changedTouches[i].identifier, o.push(this.mice[e]);
                                    return o
                                }
                                return t.pointerType ? (e = "touch" !== t.pointerType ? t.pointerType : "p" + t.pointerId, [this.mice[e]]) : [this.mice.mouse]
                            }
                            return [this.mice.mouse]
                        }
                        return B.xtGet(this.mice.t0, this.mice.p1, this.mice.pen, this.mice.mouse)
                    }, B.PageElement.prototype.getMouseIdFromEvent = function (t) {
                        var e, i, s, o = [];
                        if (B.isa_event(t))
                            if (t.changedTouches)
                                for (i = 0, s = t.changedTouches.length; i < s; i++) e = "t" + t.changedTouches[i].identifier, o.push(e);
                            else t.pointerType ? (e = "touch" !== t.pointerType ? t.pointerType : "p" + t.pointerId, o.push(e)) : o.push("mouse");
                        return o
                    }, B.PageElement.prototype.handleMouseMove = function (t) {
                        var e, i, s, o, n, r, a, h, c, l, u, p, d, y, f, m, g, v = B.pad,
                            x = B.stack,
                            w = B.element,
                            k = B.work.activeListeners,
                            b = B.xt,
                            C = B.makeVector,
                            D = this.id;
                        if (l = b(D) ? (n = v[D] || x[D] || w[D] || !1, this) : (n = this).getElement(), t.changedTouches)
                            for (r = 0, a = (u = t.changedTouches).length; r < a; r++) {
                                if (d = "t" + u[r].identifier, "touchstart" === t.type)
                                    for (h = 0, c = k.length; h < c; h++)(f = v[k[h]] || x[k[h]] || w[k[h]] || !1) && delete f.mice[d];
                                if (b(n.mice[d]) || (n.mice[d] = C({
                                        name: n.type + "." + n.name + ".t." + d
                                    }), n.mice[d].active = null, n.mice[d].id = d), u[r].pageX || u[r].pageY ? (e = u[r].pageX, i = u[r].pageY) : (u[r].clientX || u[r].clientY) && (e = u[r].clientX + document.body.scrollLeft + document.documentElement.scrollLeft, i = u[r].clientY + document.body.scrollTop + document.documentElement.scrollTop), s = n.displayOffsetX + n.localWidth, o = n.displayOffsetY + n.localHeight, this.propogateTouch && "touchmove" === t.type)
                                    for (h = 0, c = k.length; h < c; h++) this.name !== k[h] && (y = B.canvas[k[h]] || B.stk[k[h]] || B.elm[k[h]] || !1) && B.triggerTouchFollow(t, y);
                                p = e >= n.displayOffsetX && e <= s && i >= n.displayOffsetY && i <= o, n.mice[d].active !== p && (n.mice[d].active = p, "touchmove" !== t.type && "touchfollow" !== t.type || (p ? B.triggerTouchEnter(t, l) : B.triggerTouchLeave(t, l))), n.mice[d].x = e - n.displayOffsetX, n.mice[d].y = i - n.displayOffsetY, "Pad" === n.type && (n.mice[d].x = Math.round(n.mice[d].x / n.scale || 1), n.mice[d].y = Math.round(n.mice[d].y / n.scale || 1)), "touchup" !== t.type && "touchleave" !== t.type || (n.mice[d].x = null, n.mice[d].y = null)
                            } else t.pointerType ? (m = t.target.id, d = "touch" !== t.pointerType ? t.pointerType : "p" + t.pointerId, b(n.mice[d]) || (n.mice[d] = C({
                                name: n.type + "." + n.name + ".p." + d
                            }), n.mice[d].active = null, n.mice[d].id = d), g = n.mice[d], m === n.name ? (g.active = !1, 0 <= t.offsetX && t.offsetX <= n.localWidth && 0 <= t.offsetY && t.offsetY <= n.localHeight && (g.active = !0), g.x = Math.round(t.offsetX), g.y = Math.round(t.offsetY), "Pad" === n.type && (g.x = Math.round(g.x / (n.scale || 1)), g.y = Math.round(g.y / (n.scale || 1)))) : m && t.target.parentNode.id === n.name && (g.x = Math.round(t.pageX - n.displayOffsetX), g.y = Math.round(t.pageY - n.displayOffsetY), g.active = !1, 0 <= g.x && g.x <= n.localWidth && 0 <= g.y && g.y <= n.localHeight && (g.active = !0), "Pad" === n.type && (g.x = Math.round(g.x / (n.scale || 1)), g.y = Math.round(g.y / (n.scale || 1))))) : (b(n.mice.mouse) || (n.mice.mouse = C({
                                name: n.type + "." + n.name + ".ui.mouse"
                            }), n.mice.mouse.active = null, n.mice.mouse.id = "mouse"), t.pageX || t.pageY ? (e = t.pageX, i = t.pageY) : (t.clientX || t.clientY) && (e = t.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, i = t.clientY + document.body.scrollTop + document.documentElement.scrollTop), n.mice.mouse.active = !0, "mouseleave" === t.type && (n.mice.mouse.active = !1), n.mice.mouse.x = e - n.displayOffsetX, n.mice.mouse.y = i - n.displayOffsetY, "Pad" === n.type && (n.mice.mouse.x = Math.round(n.mice.mouse.x / (n.scale || 1)), n.mice.mouse.y = Math.round(n.mice.mouse.y / (n.scale || 1))));
                        return n.handleMouseTilt(t), n
                    }, B.PageElement.prototype.pickupEntity = function (t) {}, B.PageElement.prototype.dropEntity = function (t) {}, B.PageElement.prototype.handleMouseTilt = function (t) {}, B.PageElement.prototype.addMouseMove = function () {
                        var t = this.getElement();
                        return B.addListener(["up", "down", "move", "enter", "leave"], this.handleMouseMove, t), this.propogateTouch && B.pushUnique(B.work.activeListeners, this.name), this
                    }, B.PageElement.prototype.removeMouseMove = function () {
                        var t = this.getElement();
                        return B.removeListener(["up", "down", "move", "enter", "leave"], this.handleMouseMove, t), this.propogateTouch && B.removeItem(B.work.activeListeners, this.name), this
                    }, B.Pad = function (t) {
                        var e, i, s, o = B.xtGet,
                            n = B.work.d.Pad,
                            r = B.pushUnique,
                            a = B.makeCell;
                        return t = B.safeObject(t), !!B.isa_canvas(t.canvasElement) && (t.width = o(t.width, t.canvasElement.width, n.width), t.height = o(t.height, t.canvasElement.height, n.height), t.name = o(t.name, t.canvasElement.id, t.canvasElement.name, "Pad"), B.PageElement.call(this, t), this.name.match(/___/) && (this.name = this.name.replace(/___/g, "_")), t.canvasElement.id = this.name, B.pad[this.name] = this, r(B.padnames, this.name), this.cells = [], e = a({
                            name: this.name,
                            pad: this.name,
                            canvas: t.canvasElement,
                            compiled: !1,
                            shown: !1,
                            width: this.localWidth,
                            height: this.localHeight
                        }), r(this.cells, e.name), this.display = e.name, (s = t.canvasElement.cloneNode(!0)).setAttribute("id", this.name + "_base"), i = a({
                            name: this.name + "_base",
                            pad: this.name,
                            canvas: s,
                            compileOrder: 9999,
                            shown: !1,
                            width: "100%",
                            height: "100%"
                        }), r(this.cells, i.name), this.base = i.name, this.current = i.name, this.setDisplayOffsets(), this.setAccessibility(t), this.filtersPadInit(), this.padStacksConstructor(t), this.interactive = o(t.interactive, !0), this.interactive && this.addMouseMove(), this.cellsCompileOrder = [].concat(this.cells), this.cellsShowOrder = [].concat(this.cells), this.resortCompile = !0, this.resortShow = !0, this)
                    }, B.Pad.prototype = Object.create(B.PageElement.prototype), B.Pad.prototype.type = "Pad", B.Pad.prototype.classname = "padnames", B.work.d.Pad = {
                        cells: [],
                        display: "",
                        base: "",
                        current: ""
                    }, B.mergeInto(B.work.d.Pad, B.work.d.PageElement), B.Pad.prototype.getElement = function () {
                        return B.canvas[this.display]
                    }, B.Pad.prototype.filtersPadInit = function (t) {}, B.Pad.prototype.stacksPadInit = function (t) {}, B.Pad.prototype.set = function (t) {
                        var e, i, s = B.cell,
                            o = B.xto;
                        return B.PageElement.prototype.set.call(this, t), t = B.safeObject(t), i = s[this.display], e = s[this.base], o(t.scale, t.width, t.height) && (i.set({
                            pasteWidth: t.width ? this.localWidth : i.pasteWidth,
                            pasteHeight: t.height ? this.localHeight : i.pasteHeight,
                            scale: t.scale || i.scale
                        }), e.set({
                            scale: t.scale || e.scale
                        })), this.padStacksSet(t), o(t.start, t.startX, t.startY, t.handle, t.handleX, t.handleY, t.scale, t.width, t.height) && this.setDisplayOffsets(), o(t.backgroundColor, t.globalAlpha, t.globalCompositeOperation) && e.set({
                            backgroundColor: t.backgroundColor || e.backgroundColor,
                            globalAlpha: t.globalAlpha || e.globalAlpha,
                            globalCompositeOperation: t.globalCompositeOperation || e.globalCompositeOperation
                        }), this
                    }, B.Pad.prototype.padStacksConstructor = function () {}, B.Pad.prototype.padStacksSet = function () {}, B.Pad.prototype.sortCellsCompile = function () {
                        this.resortCompile && (this.resortCompile = !1, this.cellsCompileOrder = B.bucketSort("cell", "compileOrder", this.cellsCompileOrder))
                    }, B.Pad.prototype.sortCellsShow = function () {
                        this.resortShow && (this.resortShow = !1, this.cellsShowOrder = B.bucketSort("cell", "showOrder", this.cellsShowOrder))
                    }, B.Pad.prototype.clear = function () {
                        var t, e, i, s = this.cells,
                            o = B.cell;
                        for (e = 0, i = s.length; e < i; e++)(t = o[s[e]]).rendered && t.cleared && t.clear();
                        return this
                    }, B.Pad.prototype.compile = function (t) {
                        var e, i, s, o = B.cell,
                            n = this.cellsCompileOrder;
                        for (this.sortCellsCompile(), i = 0, s = n.length; i < s; i++)(e = o[n[i]]).rendered && e.compiled && e.compile(t);
                        return this
                    }, B.Pad.prototype.show = function () {
                        var t, e, i, s, o, n = B.cell,
                            r = this.cellsShowOrder;
                        for (t = n[this.display], e = n[this.base], this.sortCellsShow(), s = 0, o = r.length; s < o; s++)(i = n[r[s]]).rendered && i.shown && e.copyCellToSelf(i);
                        return t.copyCellToSelf(e, !0), this
                    }, B.Pad.prototype.render = function (t) {
                        return this.clear(), this.compile(t), this.show(), this
                    }, B.Pad.prototype.addNewCell = function (t) {
                        var e, i, s = B.pushUnique;
                        return !!(t = B.safeObject(t)).name.substring && (t.width = Math.round(t.width) || this.width, t.height = Math.round(t.height) || this.height, (e = document.createElement("canvas")).setAttribute("id", t.name), e.setAttribute("height", t.height), e.setAttribute("width", t.width), t.pad = this.name, t.canvas = e, i = B.makeCell(t), s(this.cells, i.name), s(this.cellsCompileOrder, i.name), s(this.cellsShowOrder, i.name), this.resortCompile = !0, this.resortShow = !0, i)
                    }, B.Pad.prototype.addCells = function () {
                        var t, e, i, s = B.pushUnique;
                        for (t = Array.prototype.slice.call(arguments), Array.isArray(t[0]) && (t = t[0]), e = 0, i = t.length; e < i; e++) B.cell[t[e]] && (s(this.cells, t[e]), s(this.cellsCompileOrder, t[e]), s(this.cellsShowOrder, t[e]));
                        return this.resortCompile = !0, this.resortShow = !0, this
                    }, B.Pad.prototype.deleteCell = function (t) {
                        var e = B.removeItem;
                        return t.substring && (e(this.cells, t), e(this.cellsCompileOrder, t), e(this.cellsShowOrder, t), this.display === t && (this.display = this.current), this.base === t && (this.base = this.current), this.current === t && (this.current = this.base), this.resortCompile = !0, this.resortShow = !0), this
                    }, B.Pad.prototype.makeCurrent = function () {
                        return B.work.currentPad = this.name, this
                    }, B.Pad.prototype.setAccessibility = function (t) {
                        var e, i = B.xt;
                        return t = B.safeObject(t), e = this.getElement(), i(t.title) && (this.title = t.title, e.title = this.title), i(t.comment) && (this.comment = t.comment, e.setAttribute("data-comment", this.comment), e.innerHTML = "<p>" + this.comment + "</p>"), this
                    }, B.Pad.prototype.setDimensions = function () {
                        var t = this.getElement();
                        return t.width = this.localWidth, t.height = this.localHeight, this
                    }, B.Cell = function (t) {
                        return t = B.safeObject(t), !!B.xta(t, t.canvas) && (this.coreCellInit(t), this.animationCellInit(t), this.collisionsCellInit(t), this.filtersCellInit(t), this)
                    }, B.Cell.prototype = Object.create(B.Position.prototype), B.Cell.prototype.type = "Cell", B.Cell.prototype.classname = "cellnames", B.work.d.Cell = {
                        pad: "",
                        copy: {
                            x: 0,
                            Y: 0
                        },
                        copyWidth: 300,
                        copyHeight: 150,
                        copyData: !1,
                        pasteData: !1,
                        pasteWidth: 300,
                        pasteHeight: 150,
                        actualWidth: 300,
                        actualHeight: 150,
                        fieldLabel: "",
                        globalAlpha: 1,
                        globalCompositeOperation: "source-over",
                        backgroundColor: "rgba(0,0,0,0)",
                        context: "",
                        groups: [],
                        rendered: !0,
                        cleared: !0,
                        compiled: !0,
                        shown: !0,
                        compileOrder: 0,
                        showOrder: 0
                    }, B.mergeInto(B.work.d.Cell, B.work.d.Position), B.Cell.prototype.coreCellInit = function (t) {
                        var e, i, s, o = B.work.d.Cell,
                            n = B.xt,
                            r = B.xto,
                            a = B.xtGet,
                            h = B.makeVector;
                        B.Position.call(this, t), B.Base.prototype.set.call(this, t), B.canvas[this.name] = t.canvas, s = B.canvas[this.name], B.context[this.name] = t.canvas.getContext("2d"), B.cell[this.name] = this, B.pushUnique(B.cellnames, this.name), this.pad = a(t.pad, !1), e = B.safeObject(t.copy), this.copy = h({
                            x: a(t.copyX, e.x, 0),
                            y: a(t.copyY, e.y, 0),
                            name: this.type + "." + this.name + ".copy"
                        }), this.actualWidth = s.width, this.actualHeight = s.height, this.copyWidth = this.actualWidth, this.copyHeight = this.actualHeight, this.copyData = {
                            x: 0,
                            y: 0,
                            w: 0,
                            h: 0
                        }, this.pasteData = {
                            x: 0,
                            y: 0,
                            w: 0,
                            h: 0
                        }, this.pasteWidth = this.actualWidth, this.pasteHeight = this.actualHeight, this.setDimensions(t), r(t.pasteX, t.pasteY) && (this.start.x = a(t.pasteX, this.start.x), this.start.y = a(t.pasteY, this.start.y)), r(t.copyWidth, t.copyHeight, t.pasteWidth, t.pasteHeight, t.width, t.height) && (this.copyWidth = a(t.copyWidth, t.width, this.copyWidth), this.copyHeight = a(t.copyHeight, t.height, this.copyHeight), this.pasteWidth = a(t.pasteWidth, t.width, this.pasteWidth), this.pasteHeight = a(t.pasteHeight, t.height, this.pasteHeight)), i = B.makeContext({
                            name: this.name,
                            cell: B.context[this.name]
                        }), this.context = i.name, this.flipUpend = a(t.flipUpend, o.flipUpend), this.flipReverse = a(t.flipReverse, o.flipReverse), this.lockX = a(t.lockX, o.lockX), this.lockY = a(t.lockY, o.lockY), this.roll = a(t.roll, o.roll), this.rendered = a(t.rendered, !0), this.cleared = a(t.cleared, !0), this.compiled = a(t.compiled, !0), this.shown = a(t.shown, !0), this.compileOrder = a(t.compileOrder, 0), this.showOrder = a(t.showOrder, 0), this.backgroundColor = a(t.backgroundColor, "rgba(0,0,0,0)"), this.globalCompositeOperation = a(t.globalCompositeOperation, "source-over"), this.globalAlpha = a(t.globalAlpha, 1), this.groups = n(t.groups) ? [].concat(t.groups) : [], this.sortGroups = !0, B.makeGroup({
                            name: this.name,
                            cell: this.name
                        }), this.setCopy(), this.setPaste()
                    }, B.Cell.prototype.collisionsCellInit = function (t) {}, B.Cell.prototype.filtersCellInit = function (t) {}, B.Cell.prototype.animationCellInit = function (t) {}, B.Cell.prototype.get = function (t) {
                        var e = B.contains;
                        if (e(["pasteX", "pasteY", "copyX", "copyY"], t)) switch (t) {
                            case "pasteX":
                                return this.start.x;
                            case "pasteY":
                                return this.start.y;
                            case "copyX":
                                return this.copy.x;
                            case "copyY":
                                return this.copy.y
                        }
                        if (e(["paste", "copy"], t)) switch (t) {
                            case "paste":
                                return this.start.getVector();
                            case "copy":
                                return this.copy.getVector()
                        }
                        if (e(["width", "height"], t)) switch (t) {
                            case "width":
                                return this.actualWidth;
                            case "height":
                                return this.actualHeight
                        }
                        return this.animationCellGet(t) || B.Position.prototype.get.call(this, t)
                    }, B.Cell.prototype.animationCellGet = function (t) {
                        return !1
                    }, B.Cell.prototype.set = function (t) {
                        var e = B.xt,
                            i = B.xto;
                        return B.Position.prototype.set.call(this, t), i((t = B.safeObject(t)).paste, t.pasteX, t.pasteY) && this.setPasteVector(t, !1), i(t.copy, t.copyX, t.copyY) && this.setCopyVector(t), i(t.copyWidth, t.width) && this.setCopyWidth(t), i(t.copyHeight, t.height) && this.setCopyHeight(t), i(t.pasteWidth, t.width) && this.setPasteWidth(t, !1), i(t.pasteHeight, t.height) && this.setPasteHeight(t, !1), i(t.actualWidth, t.width) && this.setActualWidth(t, !1), i(t.actualHeight, t.height) && this.setActualHeight(t, !1), i(t.actualWidth, t.actualHeight, t.width, t.height) && (this.setDimensions(t), B.ctx[this.context].getContextFromEngine(B.context[this.name])), i(t.actualWidth, t.actualHeight, t.pasteWidth, t.pasteHeight, t.width, t.height, t.handle, t.handleX, t.handleY, t.scale) && this.setDirtyHandles(), i(t.handle, t.handleX, t.handleY, t.scale) && this.setDirtyHandles(), i(t.start, t.startX, t.startY, t.paste, t.pasteX, t.pasteY) && this.setDirtyStarts(), this.animationCellSet(t), e(t.compileOrder) && (B.pad[this.pad].resortCompile = !0), e(t.showOrder) && (B.pad[this.pad].resortShow = !0), t.resolve && (this.setCopy(), this.setPaste()), this
                    }, B.Cell.prototype.setDirtyStarts = function () {
                        var t, e, i, s = B.group,
                            o = this.groups;
                        for (e = 0, i = o.length; e < i; e++) s[t = o[e]] && s[t].setDirtyStarts();
                        return this.currentStart.flag = !1, this
                    }, B.Cell.prototype.setDirtyHandles = function () {
                        var t, e, i, s = B.group,
                            o = this.groups;
                        for (e = 0, i = o.length; e < i; e++) s[t = o[e]] && s[t].setDirtyHandles();
                        return this.currentHandle.flag = !1, this
                    }, B.Cell.prototype.setActualHeight = function (t, e) {
                        var i = B.xtGet;
                        return t = B.safeObject(t), e = i(e, !0), this.actualHeight = i(t.actualHeight, t.height, this.actualHeight), e && (this.setDimensions(t), B.ctx[this.context].getContextFromEngine(B.context[this.name]), this.setDirtyHandles()), this
                    }, B.Cell.prototype.setActualWidth = function (t, e) {
                        var i = B.xtGet;
                        return t = B.safeObject(t), e = i(e, !0), this.actualWidth = i(t.actualWidth, t.width, this.actualWidth), e && (this.setDimensions(t), B.ctx[this.context].getContextFromEngine(B.context[this.name]), this.setDirtyHandles()), this
                    }, B.Cell.prototype.setPasteHeight = function (t, e) {
                        var i = B.xtGet;
                        return t = B.safeObject(t), e = i(e, !0), this.pasteHeight = i(t.pasteHeight, t.height, this.pasteHeight), e && this.setDirtyHandles(), this
                    }, B.Cell.prototype.setPasteWidth = function (t, e) {
                        var i = B.xtGet;
                        return t = B.safeObject(t), e = i(e, !0), this.pasteWidth = i(t.pasteWidth, t.width, this.pasteWidth), e && this.setDirtyHandles(), this
                    }, B.Cell.prototype.setCopyHeight = function (t) {
                        var e = B.xtGet;
                        return t = B.safeObject(t), this.copyHeight = e(t.copyHeight, t.height, this.copyHeight), this
                    }, B.Cell.prototype.setCopyWidth = function (t) {
                        var e = B.xtGet;
                        return t = B.safeObject(t), this.copyWidth = e(t.copyWidth, t.width, this.copyWidth), this
                    }, B.Cell.prototype.setPasteVector = function (t, e) {
                        var i, s = B.xtGet,
                            o = B.safeObject,
                            n = this.start;
                        return t = o(t), e = s(e, !0), i = o(t.paste), n.x = s(t.pasteX, i.x, n.x), n.y = s(t.pasteY, i.y, n.y), e && this.setDirtyStarts(), this
                    }, B.Cell.prototype.setCopyVector = function (t) {
                        var e, i = B.xtGet,
                            s = B.safeObject,
                            o = this.copy;
                        return e = s((t = s(t)).copy), o.x = i(t.copyX, e.x, o.x), o.y = i(t.copyY, e.y, o.y), this
                    }, B.Cell.prototype.animationCellSet = function (t) {}, B.Cell.prototype.setDelta = function (t) {
                        var e = B.xt,
                            i = B.xto;
                        return B.Position.prototype.setDelta.call(this, t), i((t = B.safeObject(t)).copy, t.copyX, t.copyY) && this.setDeltaCopy(t), i(t.paste, t.pasteX, t.pasteY) && this.setDeltaPaste(t, !1), e(t.copyWidth) && this.setDeltaCopyWidth(t), e(t.copyHeight) && this.setDeltaCopyHeight(t), i(t.pasteWidth, t.width) && this.setDeltaPasteWidth(t, !1), i(t.pasteHeight, t.height) && this.setDeltaPasteHeight(t, !1), i(t.actualWidth, t.width) && this.setDeltaActualWidth(t, !1), i(t.actualHeight, t.height) && this.setDeltaActualHeight(t, !1), e(t.roll) && this.setDeltaRoll(t), e(t.globalAlpha) && this.setDeltaGlobalAlpha(t), i(t.actualWidth, t.width, t.actualHeight, t.height) && (this.setDimensions(t), B.ctx[this.context].getContextFromEngine(B.context[this.name])), i(t.actualWidth, t.actualHeight, t.pasteWidth, t.pasteHeight, t.width, t.height, t.handle, t.handleX, t.handleY, t.scale) && this.setDirtyHandles(), i(t.start, t.startX, t.startY, t.paste, t.pasteX, t.pasteY) && this.setDirtyStarts(), t.resolve && (this.setCopy(), this.setPaste()), this
                    }, B.Cell.prototype.setDeltaGlobalAlpha = function (t) {
                        return t = B.safeObject(t), this.globalAlpha += t.globalAlpha || 0, this
                    }, B.Cell.prototype.setDeltaRoll = function (t) {
                        return t = B.safeObject(t), this.roll += t.roll || 0, this
                    }, B.Cell.prototype.setDeltaActualHeight = function (t, e) {
                        var i, s = B.xtGet;
                        return t = B.safeObject(t), e = s(e, !0), i = s(t.actualHeight, t.height), this.actualHeight = i.toFixed ? this.actualHeight + i : this.actualHeight, e && (this.setDimensions(t), B.ctx[this.context].getContextFromEngine(B.context[this.name]), this.setDirtyHandles()), this
                    }, B.Cell.prototype.setDeltaActualWidth = function (t, e) {
                        var i, s = B.xtGet;
                        return t = B.safeObject(t), e = s(e, !0), i = s(t.actualWidth, t.width), this.actualWidth = i.toFixed ? this.actualWidth + i : this.actualWidth, e && (this.setDimensions(t), B.ctx[this.context].getContextFromEngine(B.context[this.name]), this.setDirtyHandles()), this
                    }, B.Cell.prototype.setDeltaPasteHeight = function (t, e) {
                        var i, s = B.xtGet;
                        return t = B.safeObject(t), e = s(e, !0), i = s(t.pasteHeight, t.height), this.pasteHeight = this.pasteHeight.toFixed ? this.pasteHeight + i : B.addPercentages(this.pasteHeight, i), e && this.setDirtyHandles(), this
                    }, B.Cell.prototype.setDeltaCopyHeight = function (t) {
                        return t = B.safeObject(t), this.copyHeight = this.copyHeight.toFixed ? this.copyHeight + t.copyHeight : B.addPercentages(this.copyHeight, t.copyHeight), this
                    }, B.Cell.prototype.setDeltaPasteWidth = function (t, e) {
                        var i, s = B.xtGet;
                        return t = B.safeObject(t), e = s(e, !0), i = s(t.pasteWidth, t.width), this.pasteWidth = this.pasteWidth.toFixed ? this.pasteWidth + i : B.addPercentages(this.pasteWidth, i), e && this.setDirtyHandles(), this
                    }, B.Cell.prototype.setDeltaCopyWidth = function (t) {
                        return t = B.safeObject(t), this.copyWidth = this.copyWidth.toFixed ? this.copyWidth + t.copyWidth : B.addPercentages(this.copyWidth, t.copyWidth), this
                    }, B.Cell.prototype.setDeltaPaste = function (t, e) {
                        var i, s, o, n = B.safeObject,
                            r = B.xtGet,
                            a = B.addPercentages,
                            h = this.start;
                        return t = n(t), e = B.xtGet(e, !0), i = n(t.paste), s = r(t.pasteX, i.x, 0), o = r(t.pasteY, i.y, 0), h.x = this.start.x.toFixed ? h.x + s : a(h.x, s), h.y = this.start.y.toFixed ? h.y + o : a(h.y, o), e && this.setDirtyStarts(), this
                    }, B.Cell.prototype.setDeltaCopy = function (t) {
                        var e, i, s, o = B.safeObject,
                            n = B.xtGet,
                            r = B.addPercentages,
                            a = this.copy;
                        return e = o((t = o(t)).copy), i = n(t.copyX, e.x, 0), s = n(t.copyY, e.y, 0), a.x = i.toFixed ? a.x + i : r(a.x, i), a.y = s.toFixed ? a.y + s : r(a.y, s), this
                    }, B.Cell.prototype.setEngine = function (t) {
                        var e, i, s, o, n, r = B.ctx,
                            a = this.setEngineActions,
                            h = ["Gradient", "RadialGradient", "Pattern"];
                        if (!t.fastStamp && (e = r[this.context], s = r[t.context].getChanges(t, e), 0 < Object.keys(s).length))
                            for (var c in i = B.context[this.name], n = t.name, o = this.name, s) a[c](s[c], i, h, n, o), e[c] = s[c];
                        return t
                    }, B.Cell.prototype.setEngineActions = {
                        fillStyle: function (t, e, i, s, o) {
                            var n, r;
                            r = B.xt(B.design[t]) ? (n = B.design[t], B.contains(i, n.type) && n.update(s, o), n.getData()) : t, e.fillStyle = r
                        },
                        font: function (t, e) {
                            e.font = t
                        },
                        globalAlpha: function (t, e) {
                            e.globalAlpha = t
                        },
                        globalCompositeOperation: function (t, e) {
                            e.globalCompositeOperation = t
                        },
                        lineCap: function (t, e) {
                            e.lineCap = t
                        },
                        lineDash: function (t, e) {
                            e.mozDash = t, e.lineDash = t, e.setLineDash && e.setLineDash(t)
                        },
                        lineDashOffset: function (t, e) {
                            e.mozDashOffset = t, e.lineDashOffset = t
                        },
                        lineJoin: function (t, e) {
                            e.lineJoin = t
                        },
                        lineWidth: function (t, e) {
                            e.lineWidth = t
                        },
                        shadowBlur: function (t, e) {
                            e.shadowBlur = t
                        },
                        shadowColor: function (t, e) {
                            e.shadowColor = t
                        },
                        shadowOffsetX: function (t, e) {
                            e.shadowOffsetX = t
                        },
                        shadowOffsetY: function (t, e) {
                            e.shadowOffsetY = t
                        },
                        strokeStyle: function (t, e, i, s, o) {
                            var n, r;
                            r = B.xt(B.design[t]) ? (n = B.design[t], B.contains(i, n.type) && n.update(s, o), n.getData()) : t, e.strokeStyle = r
                        },
                        miterLimit: function (t, e) {
                            e.miterLimit = t
                        },
                        textAlign: function (t, e) {
                            e.textAlign = t
                        },
                        textBaseline: function (t, e) {
                            e.textBaseline = t
                        },
                        winding: function (t, e) {
                            e.mozFillRule = t, e.msFillRule = t
                        }
                    }, B.Cell.prototype.groupSort = function () {
                        this.sortGroups && (this.sortGroups = !1, this.groups = B.bucketSort("group", "order", this.groups))
                    }, B.Cell.prototype.clear = function () {
                        var t, e, i = this.actualWidth,
                            s = this.actualHeight,
                            o = this.backgroundColor;
                        return e = B.context[this.name], t = B.ctx[this.context], e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, i, s), "rgba(0,0,0,0)" !== o && (e.fillStyle = o, e.fillRect(0, 0, i, s), t.fillStyle = o), this
                    }, B.Cell.prototype.compile = function (t) {
                        var e, i, s;
                        for (this.groupSort(), i = 0, s = this.groups.length; i < s; i++)(e = B.group[this.groups[i]]).visibility && e.stamp(!1, this.name, this, t);
                        return this
                    }, B.Cell.prototype.rotateDestination = function (t) {
                        var e, i, s = this.flipReverse ? -1 : 1,
                            o = this.flipUpend ? -1 : 1,
                            n = this.addPathRoll ? this.roll + this.pathRoll : this.roll,
                            r = this.pasteData;
                        return n ? (n *= .01745329251, e = Math.cos(n), i = Math.sin(n), t.setTransform(e * s, i * s, -i * o, e * o, r.x, r.y)) : t.setTransform(s, 0, 0, o, r.x, r.y), this
                    }, B.Cell.prototype.prepareToCopyCell = function (t) {
                        this.pasteData;
                        return this.pivot ? this.setStampUsingPivot(B.pad[this.pad].base) : this.pathPrepareToCopyCell(), this.setCopy(), this.setPaste(), this.rotateDestination(t), this
                    }, B.Cell.prototype.pathPrepareToCopyCell = function () {}, B.Cell.prototype.setCopy = function () {
                        var t = B.isBetween,
                            e = this.copyData,
                            i = this.copy,
                            s = this.numberConvert,
                            o = Math.floor,
                            n = this.copyWidth,
                            r = this.copyHeight,
                            a = this.actualWidth,
                            h = this.actualHeight;
                        return e.x = i.x.substring ? s(i.x, a) : i.x, e.y = i.y.substring ? s(i.y, h) : i.y, t(e.x, 0, a - 1, !0) || (e.x = e.x < 0 ? 0 : a - 1), t(e.y, 0, h - 1, !0) || (e.y = e.y < 0 ? 0 : h - 1), e.w = n.substring ? s(n, a) : n, e.h = r.substring ? s(r, h) : r, t(e.w, 1, a, !0) || (e.w = e.w < 1 ? 1 : a), t(e.h, 1, h, !0) || (e.h = e.h < 1 ? 1 : h), e.x + e.w > a && (e.x = a - e.w), e.y + e.h > h && (e.y = h - e.h), e.x = o(e.x), e.y = o(e.y), e.w = o(e.w), e.h = o(e.h), this
                    }, B.Cell.prototype.setReference = function () {
                        var t = B.safeObject,
                            e = B.cell,
                            i = t(B.pad[this.pad]),
                            s = t(e[i.display]),
                            o = t(e[i.base]),
                            n = !i.base,
                            r = this.name === i.base,
                            a = this.name === i.display,
                            h = !i.display;
                        this.reference = h ? i : !n && (r ? s : a ? i : o)
                    }, B.Cell.prototype.setPaste = function () {
                        var t, e, i = B.safeObject,
                            s = B.cell,
                            o = i(B.pad[this.pad]),
                            n = i(s[o.display]),
                            r = i(s[o.base]),
                            a = !!B.xt(o.group),
                            h = this.name === o.base,
                            c = Math.floor,
                            l = this.numberConvert,
                            u = this.scale,
                            p = this.pasteData,
                            d = this.currentStart,
                            y = B.xtGet;
                        return B.xta(n, r) && (t = this.name === o.base ? n.actualWidth : y(r.actualWidth, this.actualWidth, 300), e = this.name === o.base ? n.actualHeight : y(r.actualHeight, this.actualHeight, 150), d.flag || (this.reference || this.setReference(), this.updateCurrentStart(this.reference)), p.x = d.x, p.y = d.y, p.w = this.pasteWidth, p.w.substring && (p.w = l(p.w, t)), h && a || (p.w *= u), p.h = this.pasteHeight, p.h.substring && (p.h = l(p.h, e)), h && a || (p.h *= u), p.w < 1 && (p.w = 1), p.h < 1 && (p.h = 1), p.x = c(p.x), p.y = c(p.y), p.w = c(p.w), p.h = c(p.h)), this
                    }, B.Cell.prototype.copyCellToSelf = function (t) {
                        var e, i, s, o, n, r, a;
                        return t = t.substring ? B.cell[t] : t, B.xt(t) && (i = B.context[this.name], e = B.ctx[this.name], s = B.context[t.name], o = B.canvas[t.name], t.globalAlpha !== e.globalAlpha && (i.globalAlpha = t.globalAlpha, e.globalAlpha = t.globalAlpha), t.globalCompositeOperation !== e.globalCompositeOperation && (i.globalCompositeOperation = t.globalCompositeOperation, e.globalCompositeOperation = t.globalCompositeOperation), s.setTransform(1, 0, 0, 1, 0, 0), (a = t.currentHandle).flag || t.updateCurrentHandle(), t.prepareToCopyCell(i), n = t.copyData, r = t.pasteData, i.drawImage(o, n.x, n.y, n.w, n.h, a.x, a.y, r.w, r.h)), this
                    }, B.Cell.prototype.clearShadow = function (t) {
                        var e = B.ctx[this.context];
                        return t.shadowOffsetX = 0, t.shadowOffsetY = 0, t.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0, e.shadowBlur = 0, this
                    }, B.Cell.prototype.restoreShadow = function (t, e) {
                        var i = B.ctx,
                            s = i[this.context],
                            o = i[e];
                        return t.shadowOffsetX = o.shadowOffsetX, t.shadowOffsetY = o.shadowOffsetY, t.shadowBlur = o.shadowBlur, s.shadowOffsetX = o.shadowOffsetX, s.shadowOffsetY = o.shadowOffsetY, s.shadowBlur = o.shadowBlur, this
                    }, B.Cell.prototype.setToClearShape = function () {
                        var t, e;
                        return e = B.context[this.name], t = B.ctx[this.context], e.fillStyle = "rgba(0, 0, 0, 0)", e.strokeStyle = "rgba(0, 0, 0, 0)", e.shadowColor = "rgba(0, 0, 0, 0)", t.fillStyle = "rgba(0, 0, 0, 0)", t.strokeStyle = "rgba(0, 0, 0, 0)", t.shadowColor = "rgba(0, 0, 0, 0)", this
                    }, B.Cell.prototype.setDimensions = function (t) {
                        var e = B.pad[this.pad],
                            i = B.canvas[this.name],
                            s = B.xtGet(t.width, t.actualWidth, this.actualWidth),
                            o = B.xtGet(t.height, t.actualHeight, this.actualHeight);
                        return e && (s.substring && (s = parseFloat(s) / 100 * (e.localWidth / e.scale)), o.substring && (o = parseFloat(o) / 100 * (e.localHeight / e.scale))), i.width = s, i.height = o, this.actualWidth = s, this.actualHeight = o, this
                    }, B.Cell.prototype.saveContext = function () {
                        return B.context[this.name].save(), this
                    }, B.Cell.prototype.restoreContext = function () {
                        return B.context[this.name].restore(), this
                    }, B.Cell.prototype.getImageData = function (t) {
                        var e, i, s, o, n, r = B.xtGet;
                        return n = (t = B.safeObject(t)).name && t.name.substring ? this.name + "_" + t.name : this.name + "_imageData", e = r(t.x, 0), i = r(t.y, 0), s = r(t.width, this.actualWidth), o = r(t.height, this.actualHeight), B.imageData[n] = B.context[this.name].getImageData(e, i, s, o), n
                    }, B.Context = function (t) {
                        return t = B.safeObject(t), B.Base.call(this, t), t.cell ? this.getContextFromEngine(t.cell) : this.set(t), B.ctx[this.name] = this, B.pushUnique(B.ctxnames, this.name), this
                    }, B.Context.prototype = Object.create(B.Base.prototype), B.Context.prototype.type = "Context", B.Context.prototype.classname = "ctxnames", B.work.d.Context = {
                        fillStyle: "#000000",
                        winding: "nonzero",
                        strokeStyle: "#000000",
                        globalAlpha: 1,
                        globalCompositeOperation: "source-over",
                        lineWidth: 1,
                        lineCap: "butt",
                        lineJoin: "miter",
                        lineDash: [],
                        lineDashOffset: 0,
                        miterLimit: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 0,
                        shadowColor: "rgba(0,0,0,0)",
                        font: "10pt sans-serif",
                        textAlign: "start",
                        textBaseline: "alphabetic"
                    }, B.work.contextKeys = Object.keys(B.work.d.Context), B.mergeInto(B.work.d.Context, B.work.d.Base), B.Context.prototype.setDelta = function (t) {
                        var e = B.xt,
                            i = B.work.d.Context;
                        return e((t = B.safeObject(t)).lineDashOffset) && (e(this.lineDashOffset) || (this.lineDashOffset = i.lineDashOffset + t.lineDashOffset), this.lineDashOffset += t.lineDashOffset), e(t.lineWidth) && (e(this.lineWidth) || (this.lineWidth = i.lineWidth + t.lineWidth), this.lineWidth += t.lineWidth, this.lineWidth < 0 && (this.lineWidth = 0)), e(t.globalAlpha) && (e(this.globalAlpha) || (this.globalAlpha = i.globalAlpha + t.globalAlpha), this.globalAlpha += t.globalAlpha, B.isBetween(this.globalAlpha, 0, 1, !0) || (this.globalAlpha = .5 < this.globalAlpha ? 1 : 0)), this
                    }, B.Context.prototype.getContextFromEngine = function (t) {
                        for (var e = B.work.contextKeys, i = B.xtGet, s = 0, o = e.length; s < o; s++) this[e[s]] = t[e[s]];
                        return this.winding = i(t.mozFillRule, t.msFillRule, "nonzero"), this.lineDash = B.xt(t.lineDash) ? t.lineDash : [], this.lineDashOffset = i(t.mozDashOffset, t.lineDashOffset, 0), this
                    }, B.Context.prototype.getNonDefaultAttributes = function () {
                        var t, e, i = B.work.d.Context,
                            s = B.xt,
                            o = B.work.contextKeys,
                            n = {};
                        for (t = 0, e = o.length; t < e; t++) "lineDash" === o[t] && this.lineDash && 0 < this.lineDash.length ? n.lineDash = this.lineDash : s(this[o[t]]) && this[o[t]] != i[o[t]] && (n[o[t]] = this[o[t]]);
                        return n
                    }, B.Context.prototype.getChanges = function (t, e) {
                        var i, s, o, n, r = e.getNonDefaultAttributes(),
                            a = Object.keys(r),
                            h = this.getNonDefaultAttributes(),
                            c = Object.keys(h),
                            l = B.work.d.Context,
                            u = {},
                            p = B.contains;
                        for (o = 0, n = a.length; o < n; o++) p(c, a[o]) || (u[a[o]] = l[a[o]]);
                        for (o = 0, n = c.length; o < n; o++) "lineWidth" === c[o] && t.scaleOutline ? h.lineWidth * t.scale !== r.lineWidth && (u.lineWidth = h.lineWidth * t.scale) : h[c[o]] != r[c[o]] ? u[c[o]] = h[c[o]] : p(["fillStyle", "strokeStyle", "shadowColor"], c[o]) && ((i = B.design[h[c[o]]]) && "Color" === i.type ? (s = i.getData()) !== r[c[o]] && (u[c[o]] = s) : "shadowColor" != c[o] && i && i.autoUpdate && (u[c[o]] = h[c[o]]));
                        return u
                    }, B.Group = function (t) {
                        var e = B.xtGet,
                            i = B.pushUnique;
                        return t = B.safeObject(t), B.Base.call(this, t), this.entitys = B.xt(t.entitys) ? [].concat(t.entitys) : [], this.cell = t.cell || B.pad[B.work.currentPad].current, this.order = e(t.order, 0), this.resort = !0, this.visibility = e(t.visibility, !0), this.entitySort = e(t.entitySort, !0), this.regionRadius = e(t.regionRadius, 0), B.group[this.name] = this, i(B.groupnames, this.name), i(B.cell[this.cell].groups, this.name), this
                    }, B.Group.prototype = Object.create(B.Base.prototype), B.Group.prototype.type = "Group", B.Group.prototype.classname = "groupnames", B.work.d.Group = {
                        entitys: [],
                        cell: "",
                        order: 0,
                        visibility: !0,
                        entitySort: !0,
                        resort: !1,
                        regionRadius: 0
                    }, B.mergeInto(B.work.d.Group, B.work.d.Base), B.Group.prototype.set = function (t) {
                        return B.Base.prototype.set.call(this, t), B.xt(t.order) && (B.cell[this.cell].sortGroups = !0), this
                    }, B.Group.prototype.sortEntitys = function (t) {
                        (t || this.entitySort && this.resort) && (this.resort = !1, this.entitys = B.bucketSort("entity", "order", this.entitys))
                    }, B.Group.prototype.forceStamp = function (t, e, i, s) {
                        var o = this.visibility;
                        return this.visibility = !0, this.stamp(t, e, i, s), this.visibility = o, this
                    }, B.Group.prototype.stamp = function (t, e, i, s) {
                        var o, n, r, a, h = B.entity;
                        if (this.visibility)
                            for (this.sortEntitys(), n = this.entitys, i = B.xt(i) ? i : B.cell[e], r = 0, a = n.length; r < a; r++)(o = h[n[r]]) && (o.group = this.name, o.stamp(t, e, i, s));
                        return this
                    }, B.Group.prototype.addEntitysToGroup = function () {
                        var t, e, i, s = [],
                            o = B.pushUnique,
                            n = this.entitys,
                            r = B.xt;
                        for (t = 0, e = arguments.length; t < e; t++) r(arguments[t]) && (Array.isArray(arguments[t]) ? s = s.concat(arguments[t]) : Array.isArray(arguments[t][0]) ? s = s.concat(arguments[t][0]) : s.push(arguments[t]));
                        for (t = 0, e = s.length; t < e; t++) i = s[t], B.xt(i) && (i.substring ? o(n, i) : B.xt(i.name) && o(n, i.name));
                        return this.resort = !0, this
                    }, B.Group.prototype.removeEntitysFromGroup = function () {
                        var t, e, i, s = [],
                            o = B.removeItem,
                            n = this.entitys,
                            r = B.xt;
                        for (t = 0, e = arguments.length; t < e; t++) r(arguments[t]) && (Array.isArray(arguments[t]) ? s = s.concat(arguments[t]) : Array.isArray(arguments[t][0]) ? s = s.concat(arguments[t][0]) : s.push(arguments[t]));
                        for (t = 0, e = s.length; t < e; t++) i = s[t], B.xt(i) && (i.substring ? o(n, i) : B.xt(i.name) && o(n, i.name));
                        return this.resort = !0, this
                    }, B.Group.prototype.updateEntitysBy = function (t) {
                        var e, i, s = this.entitys,
                            o = B.entity,
                            n = B.xt;
                        for (n((t = B.safeObject(t)).x) && (t.startX = t.x), n(t.y) && (t.startY = t.y), e = 0, i = s.length; e < i; e++) o[s[e]].setDelta(t);
                        return this
                    }, B.Group.prototype.setEntitysTo = function (t) {
                        var e, i, s = this.entitys;
                        for (e = 0, i = s.length; e < i; e++) B.entity[s[e]].set(t);
                        return this
                    }, B.Group.prototype.pivotEntitysTo = function (t) {
                        var e, i, s, o, n, r, a = this.entitys,
                            h = B.entity,
                            c = B.work.v,
                            l = {
                                pivot: 0,
                                handleX: 0,
                                handleY: 0
                            };
                        if ((t = !!t.substring && t) && (e = h[t] || B.point[t] || !1))
                            for (i = "Point" === e.type ? e.local : e.start, n = 0, r = a.length; n < r; n++) s = h[a[n]], (o = c.set(s.start)).vectorSubtract(i), l.pivot = t, l.handleX = -o.x, l.handleY = -o.y, s.set(l);
                        return this
                    }, B.Group.prototype.getEntityAt = function (t) {
                        var e, i, s, o = B.work.colv1,
                            n = B.work.colv2,
                            r = this.entitys,
                            a = B.entity,
                            h = this.regionRadius;
                        for (t = B.safeObject(t), i = o.set(t), i = B.Position.prototype.correctCoordinates(i, this.cell), this.sortEntitys(), s = r.length - 1; 0 <= s; s--)
                            if (e = a[r[s]], !(h && (n.set(e.currentStart).vectorSubtract(i), n.getMagnitude() > h)) && e.checkHit(i)) return e;
                        return !1
                    }, B.Group.prototype.getEntitysByMouseIndex = function (t) {
                        var e, i, s, o = [],
                            n = this.entitys,
                            r = B.entity;
                        if (t.substring)
                            for (e = 0, i = n.length; e < i; e++)(s = r[n[e]]).mouseIndex === t && o.push(s);
                        return o
                    }, B.Group.prototype.getAllEntitysAt = function (t) {
                        var e, i, s, o, n = B.work.colv1,
                            r = B.work.colv2,
                            a = this.entitys,
                            h = B.entity,
                            c = this.regionRadius;
                        for (t = B.safeObject(t), i = n.set(t), s = [], i = B.Position.prototype.correctCoordinates(i, this.cell), this.sortEntitys(), o = a.length - 1; 0 <= o; o--) e = h[a[o]], c && (r.set(e.currentStart).vectorSubtract(i), r.getMagnitude() > c) || e.checkHit(i) && s.push(e);
                        return 0 < s.length && s
                    }, B.Group.prototype.setDirtyStarts = function () {
                        var t, e, i, s = B.entity,
                            o = this.entitys,
                            n = B.xt;
                        for (e = 0, i = o.length; e < i; e++) n(t = s[o[e]]) && (t.currentStart.flag = !1);
                        return this
                    }, B.Group.prototype.setDirtyHandles = function () {
                        var t, e, i, s = B.entity,
                            o = this.entitys,
                            n = B.xt;
                        for (e = 0, i = o.length; e < i; e++) n(t = s[o[e]]) && (t.currentHandle.flag = !1);
                        return this
                    }, B.Entity = function (t) {
                        var e = B.xtGet;
                        t = B.safeObject(t), B.Position.call(this, t), t.name = this.name;
                        var i = B.makeContext(t);
                        return this.context = i.name, this.group = this.getGroup(t), this.fastStamp = e(t.fastStamp, !1), this.scaleOutline = e(t.scaleOutline, !0), this.order = e(t.order, 0), this.visibility = e(t.visibility, !0), this.method = e(t.method, B.work.d[this.type].method), this.collisionsEntityConstructor(t), this.filtersEntityInit(t), this
                    }, B.Entity.prototype = Object.create(B.Position.prototype), B.Entity.prototype.type = "Entity", B.Entity.prototype.classname = "entitynames", B.work.d.Entity = {
                        order: 0,
                        visibility: !0,
                        method: "fill",
                        data: "",
                        radius: 0,
                        scaleOutline: !0,
                        fastStamp: !1,
                        context: "",
                        group: ""
                    }, B.mergeInto(B.work.d.Entity, B.work.d.Position), B.Entity.prototype.filtersEntityInit = function (t) {}, B.Entity.prototype.collisionsEntityConstructor = function (t) {}, B.Entity.prototype.registerInLibrary = function (t) {
                        return B.entity[this.name] = this, B.pushUnique(B.entitynames, this.name), B.group[this.group].addEntitysToGroup(this.name), this.collisionsEntityRegisterInLibrary(t), this
                    }, B.Entity.prototype.collisionsEntityRegisterInLibrary = function () {}, B.Entity.prototype.get = function (t) {
                        var e = B.xt,
                            i = B.work.d;
                        return e(i.Base[t]) ? B.Base.prototype.get.call(this, t) : e(i.Context[t]) ? B.ctx[this.context].get(t) : B.Position.prototype.get.call(this, t)
                    }, B.Entity.prototype.set = function (t) {
                        var e = B.group,
                            i = B.xt;
                        B.xto;
                        return B.Position.prototype.set.call(this, t), B.ctx[this.context].set(t), i((t = B.safeObject(t)).group) && t.group !== this.group && (e[this.group].removeEntitysFromGroup(this.name), this.group = this.getGroup(t.group), e[this.group].addEntitysToGroup(this.name)), this.collisionsEntitySet(t), i(t.order) && (e[this.group].resort = !0), i(t.lineWidth) && (this.maxDimensions.flag = !0), this
                    }, B.Entity.prototype.collisionsEntitySet = function () {}, B.Entity.prototype.setDelta = function (t) {
                        return B.Position.prototype.setDelta.call(this, t), t = B.safeObject(t), B.xto(t.lineDashOffset, t.lineWidth, t.globalAlpha) && (B.ctx[this.context].setDelta(t), B.xt(t.lineWidth) && (this.maxDimensions.flag = !0)), this.collisionsEntitySetDelta(t), this
                    }, B.Entity.prototype.collisionsEntitySetDelta = function () {}, B.Entity.prototype.clone = function (t) {
                        var e, i, s;
                        return t = B.safeObject(t), delete(e = JSON.parse(JSON.stringify(B.ctx[this.context]))).name, delete(i = B.mergeInto(t, e)).context, s = B.Position.prototype.clone.call(this, i), B.xt(t.createNewContext) && !t.createNewContext && (delete B.ctx[s.context], B.removeItem(B.ctxnames, s.context), s.context = this.context), s
                    }, B.Entity.prototype.getGroup = function (t) {
                        return t = B.safeObject(t), B.xt(t.group) && B.group[t.group] ? t.group : B.pad[B.work.currentPad].current
                    }, B.Entity.prototype.getEntityCell = function (t) {
                        return B.cell[B.group[this.getGroup(t)].cell]
                    }, B.Entity.prototype.forceStamp = function (t, e, i, s) {
                        var o = this.visibility;
                        return this.visibility = !0, this.stamp(t, e, i, s), this.visibility = o, this
                    }, B.Entity.prototype.stamp = function (t, e, i, s) {
                        var o, n = !this.currentStart.flag,
                            r = !this.currentHandle.flag;
                        return this.visibility && (i || (e = (i = B.cell[e] || B.cell[B.group[this.group].cell]).name), o = B.context[e], t = t || this.method, (n || r) && (n && this.updateCurrentStart(i), r && this.updateCurrentHandle(), this.resetCollisionPoints()), this.pivot ? (this.setStampUsingPivot(e, s), this.maxDimensions.flag = !0) : this.pathStamp(), this[t](o, e, i), this.stampFilter(o, e, i)), this
                    }, B.Entity.prototype.resetCollisionPoints = function () {}, B.Entity.prototype.pathStamp = function () {}, B.Entity.prototype.stampFilter = function () {}, B.Entity.prototype.stampFilterDimensionsActions = {}, B.Entity.prototype.rotateCell = function (t, e) {
                        var i, s, o = this.flipReverse ? -1 : 1,
                            n = this.flipUpend ? -1 : 1,
                            r = this.addPathRoll ? this.roll + this.pathRoll : this.roll,
                            a = this.currentStart;
                        return r ? (r *= .01745329251, i = Math.cos(r), s = Math.sin(r), t.setTransform(i * o, s * o, -s * n, i * n, a.x, a.y)) : t.setTransform(o, 0, 0, n, a.x, a.y), this
                    }, B.Entity.prototype.getStartValues = function () {
                        var t = this.currentStart;
                        return {
                            x: t.x,
                            y: t.y
                        }
                    }, B.Entity.prototype.getHandleValues = function () {
                        var t = this.currentHandle;
                        return {
                            x: t.x,
                            y: t.y
                        }
                    }, B.Entity.prototype.getStart = function () {
                        var t = B.work.v.set(this.currentStart).vectorAdd(this.currentHandle);
                        return {
                            x: t.x,
                            y: t.y
                        }
                    }, B.Entity.prototype.clear = function (t, e, i) {
                        return this
                    }, B.Entity.prototype.clearWithBackground = function (t, e, i) {
                        return this
                    }, B.Entity.prototype.draw = function (t, e, i) {
                        return this
                    }, B.Entity.prototype.fill = function (t, e, i) {
                        return this
                    }, B.Entity.prototype.drawFill = function (t, e, i) {
                        return this
                    }, B.Entity.prototype.fillDraw = function (t, e, i) {
                        return this
                    }, B.Entity.prototype.sinkInto = function (t, e, i) {
                        return this
                    }, B.Entity.prototype.floatOver = function (t, e, i) {
                        return this
                    }, B.Entity.prototype.clip = function (t, e, i) {
                        return this
                    }, B.Entity.prototype.none = function (t, e, i) {
                        return i.setEngine(this), this
                    }, B.Entity.prototype.clearShadow = function (t, e) {
                        var i = B.ctx[this.context];
                        return (i.shadowOffsetX || i.shadowOffsetY || i.shadowBlur) && e.clearShadow(t), this
                    }, B.Entity.prototype.restoreShadow = function (t, e) {
                        var i = B.ctx[this.context];
                        return (i.shadowOffsetX || i.shadowOffsetY || i.shadowBlur) && e.restoreShadow(t, this.context), this
                    }, B.Entity.prototype.pickupEntity = function (t) {
                        var e, i;
                        return t = B.safeObject(t), i = B.work.v.set(t), e = B.cell[B.group[this.group].cell], i = this.correctCoordinates(i, e), this.oldX = i.x || 0, this.oldY = i.y || 0, this.oldPivot = this.pivot, this.mouseIndex = B.xtGet(t.id || "mouse"), this.pivot = "mouse", this.currentPivotIndex = !1, this.order += 9999, B.group[this.group].resort = !0, this
                    }, B.Entity.prototype.dropEntity = function (t) {
                        return this.pivot = B.xtGet(t, this.oldPivot, null), this.currentPivotIndex = !1, this.order = 9999 <= this.order ? this.order - 9999 : 0, delete this.oldPivot, delete this.oldX, delete this.oldY, this.mouseIndex = "mouse", B.group[this.group].resort = !0, this.start.x = this.currentStart.x, this.start.y = this.currentStart.y, this.currentHandle.flag = !1, this.setPaste && this.setPaste(), this
                    }, B.Entity.prototype.checkHit = function (t) {
                        var e, i, s, o, n, r, a = [],
                            h = this.currentHandle,
                            c = this.localWidth,
                            l = this.localHeight,
                            u = this.scale,
                            p = B.work.cvx;
                        for (t = B.safeObject(t), B.xt(t.tests) ? a = t.tests : (a.length = 0, a.push(t.x || 0), a.push(t.y || 0)), this.rotateCell(p, this.getEntityCell().name), h.flag || this.updateCurrentHandle(), e = h, n = c || this.width * u, r = l || this.height * u, p.beginPath(), p.rect(e.x, e.y, n, r), s = 0, o = a.length; s < o && !(i = p.isPointInPath(a[s], a[s + 1])); s += 2);
                        return !!i && (t.x = a[s], t.y = a[s + 1], t)
                    }, B.Design = function (t) {
                        return B.Base.call(this, t), this.lockTo = B.xtGet(t.lockTo, B.work.d[this.type].lockTo), this
                    }, B.Design.prototype = Object.create(B.Base.prototype), B.Design.prototype.type = "Design", B.Design.prototype.classname = "designnames", B.work.d.Design = {
                        color: [{
                            color: "black",
                            stop: 0
                        }, {
                            color: "white",
                            stop: .999999
                        }],
                        lockTo: "cell",
                        autoUpdate: !1,
                        cell: "",
                        startX: 0,
                        startY: 0,
                        endX: 0,
                        endY: 0
                    }, B.mergeInto(B.work.d.Design, B.work.d.Base), B.Design.prototype.set = function (t) {
                        var e, i = B.xt,
                            s = B.xto,
                            o = B.safeObject,
                            n = B.xtGet;
                        return s((t = B.safeObject(t)).startX, t.startY, t.startRadius, t.start) && (e = o(t.start), this.startX = n(e.x, e.startX, t.startX, this.startX), this.startY = n(e.y, e.startY, t.startY, this.startY), this.startRadius = n(e.r, e.startRadius, t.startRadius, this.startRadius)), s(t.endX, t.endY, t.endRadius, t.end) && (e = o(t.end), this.endX = n(e.x, e.endX, t.endX, this.endX), this.endY = n(e.y, e.endY, t.endY, this.endY), this.endRadius = n(e.r, e.endRadius, t.endRadius, this.endRadius)), t.shift && i(B.work.d.Design.shift) && (this.shift = t.shift), i(t.autoUpdate) && (this.autoUpdate = t.autoUpdate), i(t.color) && (this.color = [].concat(t.color)), this
                    }, B.Design.prototype.setDelta = function (t) {
                        var e, i = B.addPercentages;
                        return (t = B.safeObject(t)).startX && (e = this.get("startX"), this.startX = t.startX.substring ? i(e, t.startX) : e + t.startX), t.startY && (e = this.get("startY"), this.startY = t.startY.substring ? i(e, t.startY) : e + t.startY), t.startRadius && (e = this.get("startRadius"), this.startRadius = e + t.startRadius), t.endX && (e = this.get("endX"), this.endX = t.endX.substring ? i(e, t.endX) : e + t.endX), t.endY && (e = this.get("endY"), this.endY = t.endY.substring ? i(e, t.endY) : e + t.endY), t.endRadius && (e = this.get("endRadius"), this.endRadius = e + t.endRadius), t.shift && B.xt(B.work.d.Design.shift) && (e = this.get("shift"), this.shift = e + t.shift), this
                    }, B.Design.prototype.update = function (t, e) {
                        return this.makeGradient(t, e), this.applyStops(), this
                    }, B.Design.prototype.getData = function () {
                        return B.xt(B.dsn[this.name]) ? B.dsn[this.name] : "rgba(0,0,0,0)"
                    }, B.Design.prototype.makeGradient = function (t, e) {
                        var i, s, o, n, r, a, h, c, l, u, p, d, y, f, m, g, v, x, w, k, b, C = B.cell,
                            D = B.xt,
                            P = B.work.v;
                        if (t = B.entity[t] || !1, e = D(e) ? C[e] ? C[e] : C[this.get("cell")] : t ? C[t.group] : C[this.get("cell")], i = B.context[e.name], this.lockTo && "cell" !== this.lockTo) {
                            switch (x = t.currentHandle, t.type) {
                                case "Wheel":
                                    a = -x.x + t.radius * t.scale, h = -x.y + t.radius * t.scale;
                                    break;
                                case "Shape":
                                case "Path":
                                    h = t.isLine ? (a = -x.x, -x.y) : (a = -x.x + t.width / 2 * t.scale, -x.y + t.height / 2 * t.scale);
                                    break;
                                default:
                                    a = -x.x, h = -x.y
                            }
                            w = D(t.localWidth) ? t.localWidth : t.width * t.scale, k = D(t.localHeight) ? t.localHeight : t.height * t.scale, (c = D(this.startX) ? this.startX : 0).substring && (c = parseFloat(c) / 100 * w), (l = D(this.startY) ? this.startY : 0).substring && (l = parseFloat(l) / 100 * k), (p = D(this.endX) ? this.endX : w).substring && (p = parseFloat(p) / 100 * w), (d = D(this.endY) ? this.endY : k).substring && (d = parseFloat(d) / 100 * k), r = "Gradient" === this.type ? i.createLinearGradient(c - a, l - h, p - a, d - h) : ((u = D(this.startRadius) ? this.startRadius : 0).substring && (u = parseFloat(u) / 100 * w), (y = D(this.endRadius) ? this.endRadius : w).substring && (y = parseFloat(y) / 100 * w), i.createRadialGradient(c - a, l - h, u, p - a, d - h, y))
                        } else s = t.numberConvert, o = e.actualWidth, n = e.actualHeight, (a = t.start.x).substring && (a = s(a, o)), (h = t.start.y).substring && (h = s(h, n)), (c = D(this.startX) ? this.startX : 0).substring && (c = s(c, o)), (l = D(this.startY) ? this.startY : 0).substring && (l = s(l, n)), (p = D(this.endX) ? this.endX : o).substring && (p = s(p, o)), (d = D(this.endY) ? this.endY : n).substring && (d = s(d, n)), a = t.flipReverse ? o - a : a, h = t.flipUpend ? n - h : h, f = (c = t.flipReverse ? o - c : c) - a, m = (l = t.flipUpend ? n - l : l) - h, g = (p = t.flipReverse ? o - p : p) - a, v = (d = t.flipUpend ? n - d : d) - h, b = t.roll, (t.flipReverse && t.flipUpend || !t.flipReverse && !t.flipUpend) && (b = -t.roll), t.roll && (P.set({
                            x: f,
                            y: m,
                            z: 0
                        }).rotate(b), f = P.x, m = P.y, P.set({
                            x: g,
                            y: v,
                            z: 0
                        }).rotate(b), g = P.x, v = P.y), r = "Gradient" === this.type ? i.createLinearGradient(f, m, g, v) : ((u = D(this.startRadius) ? this.startRadius : 0).substring && (u = parseFloat(u) / 100 * e.actualWidth), (y = D(this.endRadius) ? this.endRadius : e.actualWidth).substring && (y = parseFloat(y) / 100 * e.actualWidth), i.createRadialGradient(f, m, u, g, v, y));
                        return B.dsn[this.name] = r, this
                    }, B.Design.prototype.applyStops = function () {
                        var t, e, i = this.get("color"),
                            s = B.dsn[this.name];
                        if (s)
                            for (t = 0, e = i.length; t < e; t++) s.addColorStop(i[t].stop, i[t].color);
                        return this
                    }, B.Design.prototype.remove = function () {
                        return delete B.dsn[this.name], delete B.design[this.name], B.removeItem(B.designnames, this.name), !0
                    }, B.Gradient = function (t) {
                        return t = B.safeObject(t), B.Design.call(this, t), B.Base.prototype.set.call(this, t), B.design[this.name] = this, B.pushUnique(B.designnames, this.name), this
                    }, B.Gradient.prototype = Object.create(B.Design.prototype), B.Gradient.prototype.type = "Gradient", B.Gradient.prototype.classname = "designnames", B.work.d.Gradient = {}, B.mergeInto(B.work.d.Gradient, B.work.d.Design), B.RadialGradient = function (t) {
                        return t = B.safeObject(t), B.Design.call(this, t), B.Base.prototype.set.call(this, t), B.design[this.name] = this, B.pushUnique(B.designnames, this.name), this
                    }, B.RadialGradient.prototype = Object.create(B.Design.prototype), B.RadialGradient.prototype.type = "RadialGradient", B.RadialGradient.prototype.classname = "designnames", B.work.d.RadialGradient = {
                        startRadius: 0,
                        endRadius: 0
                    }, B.mergeInto(B.work.d.RadialGradient, B.work.d.Design), B.work.v = B.makeVector({
                        name: "scrawl.v"
                    }), B.work.colv1 = B.makeVector({
                        name: "scrawl.colv1"
                    }), B.work.colv2 = B.makeVector({
                        name: "scrawl.colv2"
                    }), B.makeAnimation = function (t) {
                        return new B.Animation(t)
                    }, B.newAnimation = function (t) {
                        return B.makeAnimation(t)
                    }, B.work.animate = [], B.work.doAnimation = !1, B.work.orderAnimations = !0, B.work.resortAnimations = !0, B.animationLoop = function () {
                        var t, e, i = B.work.animate,
                            s = B.animation;
                        for (B.work.orderAnimations && B.sortAnimations(), t = 0, e = i.length; t < e; t++) i[t] && s[i[t]].fn();
                        B.work.doAnimation && window.requestAnimFrame(function () {
                            B.animationLoop()
                        })
                    }, B.sortAnimations = function () {
                        B.work.resortAnimations && (B.work.resortAnimations = !1, B.work.animate = B.bucketSort("animation", "order", B.work.animate))
                    }, B.animationInit = function () {
                        B.makeAnimation({
                            name: "viewportMasterAnimation",
                            fn: function () {
                                var t, e, i = B.device;
                                t = i.getViewportDimensions(), e = i.getViewportPosition(), t && B.setPerspectives(), (t || e) && B.setDisplayOffsets("all")
                            }
                        }), B.work.doAnimation = !0, B.animationLoop()
                    }, B.Animation = function (t) {
                        var e;
                        return B.Base.call(this, t), t = B.safeObject(t), e = !!B.isa_bool(t.delay) && t.delay, this.fn = t.fn || function () {}, this.order = t.order || 0, B.animation[this.name] = this, B.pushUnique(B.animationnames, this.name), B.work.resortAnimations = !0, e || this.run(), this
                    }, B.Animation.prototype = Object.create(B.Base.prototype), B.Animation.prototype.type = "Animation", B.Animation.prototype.classname = "animationnames", B.work.d.Animation = {
                        fn: function () {},
                        order: 0
                    }, B.mergeInto(B.work.d.Animation, B.work.d.Base), B.Animation.prototype.run = function () {
                        return B.pushUnique(B.work.animate, this.name), !0
                    }, B.Animation.prototype.isRunning = function () {
                        return B.contains(B.work.animate, this.name)
                    }, B.Animation.prototype.halt = function () {
                        return B.removeItem(B.work.animate, this.name), !0
                    }, B.Animation.prototype.kill = function () {
                        return delete B.animation[this.name], B.removeItem(B.animationnames, this.name), B.removeItem(B.work.animate, this.name), B.work.resortAnimations = !0
                    }, B.newBlock = function (t) {
                        return new B.Block(t)
                    }, B.makeBlock = function (t) {
                        return new B.Block(t)
                    }, B.Block = function (t) {
                        var e = B.xtGet,
                            i = B.work.d.Block;
                        return t = B.safeObject(t), B.Entity.call(this, t), B.Position.prototype.set.call(this, t), this.width = e(t.width, i.width), this.height = e(t.height, i.height), this.setLocalDimensions(), this.registerInLibrary(), B.pushUnique(B.group[this.group].entitys, this.name), this
                    }, B.Block.prototype = Object.create(B.Entity.prototype), B.Block.prototype.type = "Block", B.Block.prototype.classname = "entitynames", B.work.d.Block = {
                        localWidth: 0,
                        localHeight: 0
                    }, B.mergeInto(B.work.d.Block, B.work.d.Entity), B.Block.prototype.set = function (t) {
                        return B.Entity.prototype.set.call(this, t), B.xto(t.width, t.height, t.scale) && this.setLocalDimensions(), this
                    }, B.Block.prototype.setDelta = function (t) {
                        return B.Entity.prototype.setDelta.call(this, t), B.xto(t.width, t.height, t.scale) && this.setLocalDimensions(), this
                    }, B.Block.prototype.setLocalDimensions = function () {
                        var t = B.cell[B.group[this.group].cell];
                        return this.width.substring ? this.localWidth = parseFloat(this.width) / 100 * t.actualWidth * this.scale : this.localWidth = this.width * this.scale || 0, this.height.substring ? this.localHeight = parseFloat(this.height) / 100 * t.actualHeight * this.scale : this.localHeight = this.height * this.scale || 0, this
                    }, B.Block.prototype.clip = function (t, e, i) {
                        var s = this.currentHandle;
                        return this.rotateCell(t, i), t.beginPath(), t.rect(s.x, s.y, this.localWidth, this.localHeight), t.clip(), this
                    }, B.Block.prototype.clear = function (t, e, i) {
                        var s = this.currentHandle;
                        return i.setToClearShape(), this.rotateCell(t, i), t.clearRect(s.x, s.y, this.localWidth, this.localHeight), this
                    }, B.Block.prototype.clearWithBackground = function (t, e, i) {
                        var s = i.get("backgroundColor"),
                            o = B.ctx[e],
                            n = o.get("fillStyle"),
                            r = o.get("strokeStyle"),
                            a = o.get("globalAlpha"),
                            h = this.currentHandle;
                        return this.rotateCell(t, i), t.fillStyle = s, t.strokeStyle = s, t.globalAlpha = 1, t.strokeRect(h.x, h.y, this.localWidth, this.localHeight), t.fillRect(h.x, h.y, this.localWidth, this.localHeight), t.fillStyle = n, t.strokeStyle = r, t.globalAlpha = a, this
                    }, B.Block.prototype.draw = function (t, e, i) {
                        var s = this.currentHandle;
                        return i.setEngine(this), this.rotateCell(t, i), t.strokeRect(s.x, s.y, this.localWidth, this.localHeight), this
                    }, B.Block.prototype.fill = function (t, e, i) {
                        var s = this.currentHandle;
                        return i.setEngine(this), this.rotateCell(t, i), t.fillRect(s.x, s.y, this.localWidth, this.localHeight), this
                    }, B.Block.prototype.drawFill = function (t, e, i) {
                        var s = this.currentHandle;
                        return i.setEngine(this), this.rotateCell(t, i), t.strokeRect(s.x, s.y, this.localWidth, this.localHeight), this.clearShadow(t, i), t.fillRect(s.x, s.y, this.localWidth, this.localHeight), this
                    }, B.Block.prototype.fillDraw = function (t, e, i) {
                        var s = this.currentHandle;
                        return i.setEngine(this), this.rotateCell(t, i), t.fillRect(s.x, s.y, this.localWidth, this.localHeight), this.clearShadow(t, i), t.strokeRect(s.x, s.y, this.localWidth, this.localHeight), this
                    }, B.Block.prototype.sinkInto = function (t, e, i) {
                        var s = this.currentHandle;
                        return i.setEngine(this), this.rotateCell(t, i), t.fillRect(s.x, s.y, this.localWidth, this.localHeight), t.strokeRect(s.x, s.y, this.localWidth, this.localHeight), this
                    }, B.Block.prototype.floatOver = function (t, e, i) {
                        var s = this.currentHandle;
                        return i.setEngine(this), this.rotateCell(t, i), t.strokeRect(s.x, s.y, this.localWidth, this.localHeight), t.fillRect(s.x, s.y, this.localWidth, this.localHeight), this
                    }, B.Block.prototype.none = function (t, e, i) {
                        return this
                    }, B.Block.prototype.getMaxDimensions = function (t) {
                        var e, i, s, o, n, r, a, h, c, l, u, p, d, y, f, m = t.actualWidth,
                            g = t.actualHeight,
                            v = m / 2,
                            x = g / 2,
                            w = this.currentStart.x,
                            k = this.currentStart.y,
                            b = this.localWidth,
                            C = this.localHeight,
                            D = this.flipReverse,
                            P = this.flipUpend,
                            E = D ? m - w : w,
                            O = P ? g - k : k,
                            T = D ? -b : b,
                            S = P ? -C : C,
                            A = this.currentHandle,
                            H = D ? -A.x : A.x,
                            G = P ? -A.y : A.y,
                            W = B.ctx[this.context].lineWidth || 0,
                            Y = Math.ceil,
                            j = Math.floor,
                            X = this.roll,
                            F = B.work.v,
                            I = B.isBetween;
                        return d = D ? E + H + T : E + H, f = D ? E + H : E + H + T, p = P ? O + G + S : O + G, y = P ? O + G : O + G + S, X && (h = Math.min, a = Math.max, u = {
                            x: E,
                            y: O
                        }, F.set({
                            x: d,
                            y: p
                        }).vectorSubtract(u).rotate(X).vectorAdd(u), e = F.x, o = F.y, F.set({
                            x: f,
                            y: p
                        }).vectorSubtract(u).rotate(X).vectorAdd(u), i = F.x, n = F.y, F.set({
                            x: f,
                            y: y
                        }).vectorSubtract(u).rotate(X).vectorAdd(u), s = F.x, r = F.y, F.set({
                            x: d,
                            y: y
                        }).vectorSubtract(u).rotate(X).vectorAdd(u), c = [e, i, F.x, s], l = [o, n, F.y, r], p = h.apply(Math, l), d = h.apply(Math, c), y = a.apply(Math, l), f = a.apply(Math, c)), p = j(p - W), d = j(d - W), y = Y(y + W), f = Y(f + W), I(p, 0, g, !0) || (p = x < p ? g : 0), I(y, 0, g, !0) || (y = x < y ? g : 0), I(d, 0, m, !0) || (d = v < d ? m : 0), I(f, 0, m, !0) || (f = v < f ? m : 0), this.maxDimensions.top = p, this.maxDimensions.bottom = y, this.maxDimensions.left = d, this.maxDimensions.right = f, this.maxDimensions.flag = !1, this.maxDimensions
                    }, B.work.d.Position.delta = {
                        x: 0,
                        y: 0,
                        z: 0
                    }, B.work.d.Position.deltaPathPlace = 0, B.work.d.Position.pathSpeedConstant = !0, B.work.d.Position.tweenLock = !1, B.mergeInto(B.work.d.Cell, B.work.d.Position), B.mergeInto(B.work.d.Entity, B.work.d.Position), B.xt(B.work.d.Block) && B.mergeInto(B.work.d.Block, B.work.d.Entity), B.xt(B.work.d.Shape) && B.mergeInto(B.work.d.Shape, B.work.d.Entity), B.xt(B.work.d.Wheel) && B.mergeInto(B.work.d.Wheel, B.work.d.Entity), B.xt(B.work.d.Picture) && B.mergeInto(B.work.d.Picture, B.work.d.Entity), B.xt(B.work.d.Phrase) && B.mergeInto(B.work.d.Phrase, B.work.d.Entity), B.xt(B.work.d.Path) && B.mergeInto(B.work.d.Path, B.work.d.Entity), B.work.d.PageElement.tweenLock = !1, B.mergeInto(B.work.d.Pad, B.work.d.PageElement), B.xt(B.work.d.Stack) && B.mergeInto(B.work.d.Stack, B.work.d.PageElement), B.xt(B.work.d.Element) && B.mergeInto(B.work.d.Element, B.work.d.PageElement), B.pushUnique(B.work.sectionlist, "tween"), B.pushUnique(B.work.nameslist, "tweennames"), B.convertTime = function (t) {
                        var e, i, s;
                        if (B.xt(t)) {
                            if (t.toFixed) return ["ms", t];
                            switch (i = (e = t.match(/^\d+\.?\d*(\D*)/))[1].toLowerCase ? e[1].toLowerCase() : "ms") {
                                case "s":
                                    s = 1e3 * parseFloat(t);
                                    break;
                                case "%":
                                    s = parseFloat(t);
                                    break;
                                default:
                                    i = "ms", s = parseFloat(t)
                            }
                            return [i, s]
                        }
                        return !1
                    }, B.addWithinBounds = function (t, e) {
                        var i = t + e;
                        return 1 < i ? i - 1 : i < 0 ? i + 1 : i
                    }, B.Position.prototype.animationPositionInit = function (t) {
                        var e = B.safeObject(t.delta),
                            i = B.makeVector,
                            s = B.xtGet,
                            o = B.work.d[this.type];
                        this.delta = i({
                            name: this.type + "." + this.name + ".delta",
                            x: s(t.deltaX, e.x, 0),
                            y: s(t.deltaY, e.y, 0)
                        }), this.pathSpeedConstant = s(t.pathSpeedConstant, o.pathSpeedConstant), this.deltaPathPlace = s(t.deltaPathPlace, o.deltaPathPlace)
                    }, B.Position.prototype.animationPositionGet = function (t) {
                        if (B.contains(["deltaX", "deltaY"], t)) switch (t) {
                            case "deltaX":
                                return this.delta.x;
                            case "deltaY":
                                return this.delta.y
                        }
                        return "delta" === t && this.delta.getVector()
                    }, B.Position.prototype.animationPositionSet = function (t) {
                        B.xto(t.delta, t.deltaX, t.deltaY) && this.setDeltaAttribute(t)
                    }, B.Position.prototype.setDeltaAttribute = function (t) {
                        var e, i = B.safeObject,
                            s = B.xtGet;
                        return t = i(t), B.isa_vector(this.delta) || (this.delta = B.makeVector(t.delta || this.delta)), e = i(t.delta), this.delta.x = s(t.deltaX, e.x, this.delta.x), this.delta.y = s(t.deltaY, e.y, this.delta.y), this
                    }, B.Position.prototype.animationPositionClone = function (t, e) {
                        var i = B.safeObject(e.delta),
                            s = B.xtGet;
                        return t.delta = B.makeVector({
                            x: s(e.deltaX, i.x, t.delta.x),
                            y: s(e.deltaY, i.y, t.delta.y)
                        }), t
                    }, B.Position.prototype.updateStart = function (t) {
                        return t = B.xtGet(t, "all"), this.updateStartActions[t](B.addPercentages, this.start, this.delta, B.addWithinBounds, this), this.currentStart.flag = !1, B.xt(this.collisionArray) && (this.collisionArray.length = 0), this
                    }, B.Position.prototype.updateStartActions = {
                        x: function (t, e, i, s) {
                            e.x = e.x.toFixed ? e.x + i.x : t(e.x, i.x)
                        },
                        y: function (t, e, i, s) {
                            e.y = e.y.toFixed ? e.y + i.y : t(e.y, i.y)
                        },
                        path: function (t, e, i, s, o) {
                            o.pathPlace = s(o.pathPlace, o.deltaPathPlace)
                        },
                        all: function (t, e, i, s, o) {
                            o.deltaPathPlace && (o.pathPlace = s(o.pathPlace, o.deltaPathPlace)), i.x && (e.x = e.x.toFixed ? e.x + i.x : t(e.x, i.x)), i.y && (e.y = e.y.toFixed ? e.y + i.y : t(e.y, i.y))
                        }
                    }, B.Position.prototype.revertStart = function (t) {
                        return t = B.xtGet(t, "all"), this.revertStartActions[t](B.subtractPercentages, this.start, this.delta, B.addWithinBounds, this), this.currentStart.flag = !1, B.xt(this.collisionArray) && (this.collisionArray.length = 0), this
                    }, B.Position.prototype.revertStartActions = {
                        x: function (t, e, i, s) {
                            e.x = e.x.toFixed ? e.x - i.x : t(e.x, i.x)
                        },
                        y: function (t, e, i, s) {
                            e.y = e.y.toFixed ? e.y - i.y : t(e.y, i.y)
                        },
                        path: function (t, e, i, s, o) {
                            o.pathPlace = s(o.pathPlace, -o.deltaPathPlace)
                        },
                        all: function (t, e, i, s, o) {
                            o.deltaPathPlace && (o.pathPlace = s(o.pathPlace, -o.deltaPathPlace)), i.x && (e.x = e.x.toFixed ? e.x - i.x : t(e.x, i.x)), i.y && (e.y = e.y.toFixed ? e.y - i.y : t(e.y, i.y))
                        }
                    }, B.Position.prototype.exchange = function (t, e) {
                        var i;
                        return B.isa_obj(t) && (i = this[e] || this.get(e), this[e] = t[e] || t.get(e), t[e] = i), this
                    }, B.Position.prototype.reverse = function (t) {
                        return t = B.xtGet(t, "all"), this.reverseActions[t](this.delta, B.reversePercentage, this), this
                    }, B.Position.prototype.reverseActions = {
                        deltaX: function (t, e) {
                            t.x = t.x.toFixed ? -t.x : e(t.x)
                        },
                        deltaY: function (t, e) {
                            t.y = t.y.toFixed ? -t.y : e(t.y)
                        },
                        delta: function (t, e) {
                            t.x = t.x.toFixed ? -t.x : e(t.x), t.y = t.y.toFixed ? -t.y : e(t.y)
                        },
                        deltaPathPlace: function (t, e, i) {
                            i.deltaPathPlace = -i.deltaPathPlace
                        },
                        all: function (t, e, i) {
                            i.deltaPathPlace = -i.deltaPathPlace, t.x = t.x.toFixed ? -t.x : e(t.x), t.y = t.y.toFixed ? -t.y : e(t.y)
                        }
                    }, B.work.d.Cell.copyDelta = {
                        x: 0,
                        y: 0
                    }, B.work.d.Cell.copyMinWidth = 0, B.work.d.Cell.copyMaxWidth = 0, B.work.d.Cell.copyMinHeight = 0, B.work.d.Cell.copyMaxHeight = 0, B.Cell.prototype.animationCellInit = function (t) {
                        var e = B.safeObject(t.copyDelta),
                            i = B.xtGet;
                        this.copyDelta = B.makeVector({
                            x: i(t.copyDeltaX, e.x, 0),
                            y: i(t.copyDeltaY, e.y, 0)
                        })
                    }, B.Cell.prototype.animationCellGet = function (t) {
                        if (B.contains(["copyDeltaX", "copyDeltaY"], t)) switch (t) {
                            case "copyDeltaX":
                                return this.copyDelta.x;
                            case "copyDeltaY":
                                return this.copyDelta.y
                        }
                        return B.Base.prototype.get.call(this, t)
                    }, B.Cell.prototype.animationCellSet = function (t) {
                        var e, i = B.xtGet;
                        B.xto(t.copyDelta, t.copyDeltaX, t.copyDeltaY) && (e = B.safeObject(t.copyDelta), this.copyDelta.x = i(t.copyDeltaX, e.x, this.copyDelta.x), this.copyDelta.y = i(t.copyDeltaY, e.y, this.copyDelta.y))
                    }, B.Cell.prototype.updateStart = function (t) {
                        return t = B.xtGet(t, "all"), this.updateStartActions[t](B.addPercentages, this.start, this.delta, this.copy, this.copyDelta, B.addWithinBounds, this), this.currentStart.flag = !1, this
                    }, B.Cell.prototype.updateStartActions = {
                        x: function (t, e, i, s, o, n) {
                            i.x && (e.x = e.x.toFixed ? e.x + i.x : t(e.x, i.x)), o.x && (s.x = s.x.toFixed ? s.x + o.x : t(s.x, o.x))
                        },
                        y: function (t, e, i, s, o, n) {
                            i.y && (e.y = e.y.toFixed ? e.y + i.y : t(e.y, i.y)), o.y && (s.y = s.y.toFixed ? s.y + o.y : t(s.y, o.y))
                        },
                        start: function (t, e, i, s, o, n) {
                            i.x && (e.x = e.x.toFixed ? e.x + i.x : t(e.x, i.x)), i.y && (e.y = e.y.toFixed ? e.y + i.y : t(e.y, i.y))
                        },
                        paste: function (t, e, i, s, o, n) {
                            i.x && (e.x = e.x.toFixed ? e.x + i.x : t(e.x, i.x)), i.y && (e.y = e.y.toFixed ? e.y + i.y : t(e.y, i.y))
                        },
                        copy: function (t, e, i, s, o, n) {
                            o.x && (s.x = s.x.toFixed ? s.x + o.x : t(s.x, o.x)), o.y && (s.y = s.y.toFixed ? s.y + o.y : t(s.y, o.y))
                        },
                        path: function (t, e, i, s, o, n, r) {
                            r.pathPlace = n(r.pathPlace, r.deltaPathPlace)
                        },
                        all: function (t, e, i, s, o, n, r) {
                            r.deltaPathPlace && (r.pathPlace = n(r.pathPlace, r.deltaPathPlace)), i.x && (e.x = e.x.toFixed ? e.x + i.x : t(e.x, i.x)), i.y && (e.y = e.y.toFixed ? e.y + i.y : t(e.y, i.y)), o.x && (s.x = s.x.toFixed ? s.x + o.x : t(s.x, o.x)), o.y && (s.y = s.y.toFixed ? s.y + o.y : t(s.y, o.y))
                        }
                    }, B.Cell.prototype.revertStart = function (t) {
                        return t = B.xtGet(t, "all"), this.revertStartActions[t](B.subtractPercentages, this.start, this.delta, this.copy, this.copyDelta, B.addWithinBounds, this), this.currentStart.flag = !1, this
                    }, B.Cell.prototype.revertStartActions = {
                        x: function (t, e, i, s, o, n) {
                            i.x && (e.x = e.x.toFixed ? e.x - i.x : t(e.x, i.x)), o.x && (s.x = s.x.toFixed ? s.x - o.x : t(s.x, o.x))
                        },
                        y: function (t, e, i, s, o, n) {
                            i.y && (e.y = e.y.toFixed ? e.y - i.y : t(e.y, i.y)), o.y && (s.y = s.y.toFixed ? s.y - o.y : t(s.y, o.y))
                        },
                        start: function (t, e, i, s, o, n) {
                            i.x && (e.x = e.x.toFixed ? e.x - i.x : t(e.x, i.x)), i.y && (e.y = e.y.toFixed ? e.y - i.y : t(e.y, i.y))
                        },
                        paste: function (t, e, i, s, o, n) {
                            i.x && (e.x = e.x.toFixed ? e.x - i.x : t(e.x, i.x)), i.y && (e.y = e.y.toFixed ? e.y - i.y : t(e.y, i.y))
                        },
                        copy: function (t, e, i, s, o, n) {
                            o.x && (s.x = s.x.toFixed ? s.x - o.x : t(s.x, o.x)), o.y && (s.y = s.y.toFixed ? s.y - o.y : t(s.y, o.y))
                        },
                        path: function (t, e, i, s, o, n, r) {
                            r.pathPlace = n(r.pathPlace, -r.deltaPathPlace)
                        },
                        all: function (t, e, i, s, o, n, r) {
                            r.deltaPathPlace && (r.pathPlace = n(r.pathPlace, -r.deltaPathPlace)), i.x && (e.x = e.x.toFixed ? e.x - i.x : t(e.x, i.x)), i.y && (e.y = e.y.toFixed ? e.y - i.y : t(e.y, i.y)), o.x && (s.x = s.x.toFixed ? s.x - o.x : t(s.x, o.x)), o.y && (s.y = s.y.toFixed ? s.y - o.y : t(s.y, o.y))
                        }
                    }, B.Cell.prototype.zoom = function (t) {
                        var e, i, s, o, n, r, a, h, c, l, u, p, d, y;
                        return t.toFixed && (e = this.copyWidth, i = this.copyHeight, s = this.actualWidth, o = this.actualHeight, n = B.xtGet(this.copyMinWidth, this.copyWidth), r = B.xtGet(this.copyMinHeight, this.copyHeight), a = B.xtGet(this.copyMaxWidth, this.copyWidth), h = B.xtGet(this.copyMaxHeight, this.copyHeight), c = this.copy.x, l = this.copy.y, u = e + t, p = i + t, B.isBetween(u, n, a, !0) && B.isBetween(p, r, h, !0) && (e = u, c = (d = c - t / 2) < 0 ? 0 : s - e < d ? s - e : d, i = p, l = (y = l - t / 2) < 0 ? 0 : o - i < y ? o - i : y, this.copy.x = c, this.copy.y = l, this.copyWidth = e, this.copyHeight = i)), this
                    }, B.Cell.prototype.spliceCell = function (t) {
                        var e, i, s, o, n, r, a, h, c = B.work.cv,
                            l = B.work.cvx;
                        if (t = B.safeObject(t), B.contains(["horizontal", "vertical", "top", "bottom", "left", "right"], t.edge)) {
                            switch (o = B.xtGet(t.shiftCopy, !1), n = this.actualHeight, r = this.actualWidth, a = B.context[this.name], h = B.canvas[this.name], c.width = r, c.height = n, a.setTransform(1, 0, 0, 1, 0, 0), t.edge) {
                                case "horizontal":
                                    e = i = r / 2, s = "left";
                                    break;
                                case "vertical":
                                    e = i = n / 2, s = "top";
                                    break;
                                case "top":
                                case "bottom":
                                    i = n - (e = B.xtGet(t.strip, 20)), s = t.edge;
                                    break;
                                case "left":
                                case "right":
                                    i = r - (e = B.xtGet(t.strip, 20)), s = t.edge
                            }
                            switch (s) {
                                case "top":
                                    l.drawImage(h, 0, 0, r, e, 0, i, r, e), l.drawImage(h, 0, e, r, i, 0, 0, r, i), this.copy.y -= o ? e : 0;
                                    break;
                                case "bottom":
                                    l.drawImage(h, 0, 0, r, i, 0, e, r, i), l.drawImage(h, 0, i, r, e, 0, 0, r, e), this.copy.y += o ? e : 0;
                                    break;
                                case "left":
                                    l.drawImage(h, 0, 0, e, n, i, 0, e, n), l.drawImage(h, e, 0, i, n, 0, 0, i, n), this.copy.x -= o ? e : 0;
                                    break;
                                case "right":
                                    l.drawImage(h, 0, 0, i, n, e, 0, i, n), l.drawImage(h, i, 0, e, n, 0, 0, e, n), this.copy.x += o ? e : 0
                            }
                            a.clearRect(0, 0, r, n), a.drawImage(c, 0, 0, r, n), o && this.setCopy()
                        }
                        return this
                    }, B.Group.prototype.updateStart = function (t) {
                        for (var e = this.entitys, i = B.entity, s = 0, o = e.length; s < o; s++) i[e[s]].updateStart(t);
                        return this
                    }, B.Group.prototype.revertStart = function (t) {
                        for (var e = this.entitys, i = B.entity, s = 0, o = e.length; s < o; s++) i[e[s]].revertStart(t);
                        return this
                    }, B.Group.prototype.reverse = function (t) {
                        for (var e = this.entitys, i = B.entity, s = 0, o = e.length; s < o; s++) i[e[s]].reverse(t);
                        return this
                    }, B.work.d.Design.shift = 0, B.work.d.Design.autoUpdate = !1, B.mergeInto(B.work.d.Gradient, B.work.d.Design), B.mergeInto(B.work.d.RadialGradient, B.work.d.Design), B.xt(B.work.d.Pattern) && B.mergeInto(B.work.d.Pattern, B.work.d.Design), B.Design.prototype.update = function (t, e) {
                        return this.makeGradient(t, e), this.sortStops(), this.applyStops(), this
                    }, B.Design.prototype.sortStops = function () {
                        var t, e, i, s;
                        for (t = this.get("color"), e = this.get("shift"), i = 0, s = t.length; i < s; i++) t[i].stop += e, B.isBetween(t[i].stop, 0, 1, !0) || (t[i].stop = .5 < t[i].stop ? t[i].stop - 1 : t[i].stop + 1), t[i].stop <= 0 ? t[i].stop = 1e-6 : 1 <= t[i].stop && (t[i].stop = .999999);
                        t.sort(function (t, e) {
                            return t.stop - e.stop
                        }), this.color = t
                    }, B.makeTicker = function (t) {
                        return new B.Ticker(t)
                    }, B.newTween = function (t) {
                        return B.makeTween(t)
                    }, B.makeTween = function (t) {
                        return new B.Tween(t)
                    }, B.newAction = function (t) {
                        return B.makeAction(t)
                    }, B.makeAction = function (t) {
                        return new B.Action(t)
                    }, B.locateTarget = function (t) {
                        var e, i, s, o, n = ["entity", "cell", "pad", "stack", "element", "point", "group", "design", "animation", "tween", "anim", "filter", "image", "force", "spring", "physics"],
                            r = (B.contains, B.xt);
                        if (B.xt(t) && t.substring)
                            for (s = 0, o = n.length; s < o; s++)
                                if (r(B[i = (e = n[s]) + "names"]) && 0 <= B[i].indexOf(t)) return B[e][t];
                        return !1
                    }, B.Ticker = function (t) {
                        var e = B.xtGet;
                        return B.Base.call(this, t), t = B.safeObject(t), this.order = e(t.order, 0), this.subscribers = [], this.duration = e(t.duration, 0), this.eventChoke = e(t.eventChoke, 0), this.killOnComplete = e(t.killOnComplete, !1), this.cycles = e(t.cycles, 1), this.cycleCount = 0, this.active = !1, this.effectiveDuration = 0, this.startTime = 0, this.currentTime = 0, this.tick = 0, this.lastEvent = 0, t.subscribers && this.subscribe(t.subscribers), this.setEffectiveDuration(), B.animation[this.name] = this, B.pushUnique(B.animationnames, this.name), this
                    }, B.Ticker.prototype = Object.create(B.Base.prototype), B.Ticker.prototype.type = "Ticker", B.Ticker.prototype.classname = "animationnames", B.work.d.Ticker = {
                        order: 0,
                        duration: 0,
                        subscribers: [],
                        killOnComplete: !1,
                        cycles: 1,
                        eventChoke: 0
                    }, B.mergeInto(B.work.d.Ticker, B.work.d.Base), B.Ticker.prototype.makeTickerUpdateEvent = function () {
                        var t = null,
                            e = {
                                name: this.name,
                                type: "Ticker",
                                tick: this.tick,
                                reverseTick: this.effectiveDuration - this.tick
                            };
                        return window.MSInputMethodContext ? (t = document.createEvent("CustomEvent")).initCustomEvent("tickerupdate", !0, !0, e) : window.CustomEvent && (t = new CustomEvent("tickerupdate", {
                            detail: e,
                            bubbles: !0,
                            cancelable: !0
                        })), t
                    }, B.Ticker.prototype.subscribe = function (t) {
                        var e, i, s, o, n = [].concat(t),
                            r = B.pushUnique,
                            a = B.safeObject;
                        for (e = 0, i = n.length; e < i; e++)(o = (s = n[e]).substring ? s : a(s).name || !1) && r(this.subscribers, o);
                        return n.length && (this.sortSubscribers(), this.recalculateEffectiveDuration()), this
                    }, B.Ticker.prototype.unsubscribe = function (t) {
                        var e, i, s, o, n = [].concat(t),
                            r = B.removeItem,
                            a = B.safeObject;
                        for (e = 0, i = n.length; e < i; e++)(o = (s = t[e]).substring ? s : a(s).name || !1) && r(this.subscribers, o);
                        return n.length && (this.sortSubscribers(), this.recalculateEffectiveDuration()), this
                    }, B.Ticker.prototype.recalculateEffectiveDuration = function () {
                        var t, e, i, s = 0,
                            o = B.tween;
                        if (this.duration) this.setEffectiveDuration();
                        else {
                            for (t = 0, e = this.subscribers.length; t < e; t++) s < (i = o[this.subscribers[t]].getEndTime()) && (s = i);
                            this.effectiveDuration = s
                        }
                        return this
                    }, B.Ticker.prototype.setEffectiveDuration = function () {
                        var t;
                        return this.duration && ("%" === (t = B.convertTime(this.duration))[0] ? (this.duration = 0, this.recalculateEffectiveDuration()) : this.effectiveDuration = t[1]), this
                    }, B.Ticker.prototype.sortSubscribers = function () {
                        B.bucketSort("tween", "effectiveTime", this.subscribers)
                    }, B.Ticker.prototype.set = function (t) {
                        t = B.safeObject(t);
                        var e, i, s, o = B.xt;
                        if (o(t.order) && (this.order = t.order, this.active && (B.work.resortAnimations = !0)), o(t.cycles) && (this.cycles = t.cycles, this.cycles || (this.cycleCount = 0)), o(t.subscribers) && (this.subscribers = [], this.subscribe(t.subscribers)), o(t.duration))
                            for (this.duration = t.duration, this.setEffectiveDuration(), e = 0, i = this.subscribers.length; e < i; e++)(s = B.tween[this.subscribers[e]]).calculateEffectiveTime(), "Tween" === s.type && s.calculateEffectiveDuration();
                        return o(t.killOnComplete) && (this.killOnComplete = t.killOnComplete), o(t.eventChoke) && (this.eventChoke = t.eventChoke), this
                    }, B.Ticker.prototype.fn = function (t) {
                        var e, i, s, o, n, r = B.tween,
                            a = {
                                tick: 0,
                                reverseTick: 0,
                                willLoop: !1,
                                next: !1
                            };
                        if (t = !!B.xt(t) && t, this.active && this.startTime && (!this.cycles || this.cycleCount < this.cycles)) {
                            for (this.currentTime = Date.now(), this.tick = this.currentTime - this.startTime, !this.cycles || this.cycleCount + 1 < this.cycles ? (this.tick >= this.effectiveDuration ? (this.tick = 0, this.startTime = this.currentTime, a.tick = this.effectiveDuration, a.reverseTick = 0, a.willLoop = !0, this.cycles && this.cycleCount++) : (a.tick = this.tick, a.reverseTick = this.effectiveDuration - this.tick), a.next = !0) : this.tick >= this.effectiveDuration ? (a.tick = this.effectiveDuration, a.reverseTick = 0, this.active = !1, this.cycles && this.cycleCount++) : (a.tick = this.tick, a.reverseTick = this.effectiveDuration - this.tick, a.next = !0), s = [].concat(this.subscribers), t && s.reverse(), e = 0, i = s.length; e < i; e++) r[s[e]].update(a);
                            this.eventChoke && this.lastEvent + this.eventChoke < (o = Date.now()) && (n = this.makeTickerUpdateEvent(), window.dispatchEvent(n), this.lastEvent = o), this.active || this.halt(), this.killOnComplete && this.cycleCount >= this.cycles && this.killTweens(!0)
                        }
                        return this
                    }, B.Ticker.prototype.updateSubscribers = function (t, e) {
                        var i = [].concat(this.subscribers);
                        (e = !!B.xt(e) && e) && i.reverse();
                        for (var s = 0, o = i.length; s < o; s++) a.tween[i[s]].set(t);
                        return this
                    }, B.Ticker.prototype.changeSubscriberDirection = function () {
                        for (var t, e = [].concat(this.subscribers), i = 0, s = e.length; i < s; i++)(t = a.tween[e[i]]).reversed = !t.reversed;
                        return this
                    }, B.Ticker.prototype.run = function () {
                        return this.active || (this.startTime = this.currentTime = Date.now(), this.cycleCount = 0, this.updateSubscribers({
                            reversed: !1
                        }), this.active = !0, this.fn(!0), B.pushUnique(B.work.animate, this.name), B.work.resortAnimations = !0), this
                    }, B.Ticker.prototype.reset = function () {
                        return this.active && this.halt(), this.startTime = this.currentTime = Date.now(), this.cycleCount = 0, this.updateSubscribers({
                            reversed: !1
                        }), this.active = !0, this.fn(!0), this.active = !1, this
                    }, B.Ticker.prototype.complete = function () {
                        return this.active && this.halt(), this.startTime = this.currentTime = Date.now(), this.cycleCount = 0, this.updateSubscribers({
                            reversed: !0
                        }), this.active = !0, this.fn(), this.active = !1, this
                    }, B.Ticker.prototype.reverse = function () {
                        var t;
                        return this.active && this.halt(), t = this.currentTime - this.startTime, this.startTime = this.currentTime - (this.effectiveDuration - t), this.changeSubscriberDirection(), this.active = !0, this.fn(), this.active = !1, this
                    }, B.Ticker.prototype.halt = function () {
                        return this.active = !1, B.removeItem(B.work.animate, this.name), B.work.resortAnimations = !0, this
                    }, B.Ticker.prototype.resume = function () {
                        var t, e, i;
                        return this.active || (t = Date.now(), e = this.currentTime, i = this.startTime, this.startTime = t - (e - i), this.currentTime = t, this.active = !0, B.pushUnique(B.work.animate, this.name), B.work.resortAnimations = !0), this
                    }, B.Ticker.prototype.seekTo = function (t, e) {
                        var i = B.xtGet,
                            s = !1;
                        return t = i(t, 0), e = i(e, !1), this.active && this.halt(), this.cycles && this.cycleCount >= this.cycles && (this.cycleCount = this.cycles - 1), t < this.tick && (s = !0), this.currentTime = Date.now(), this.startTime = this.currentTime - t, this.active = !0, this.fn(s), this.active = !1, e && this.resume(), this
                    }, B.Ticker.prototype.seekFor = function (t, e) {
                        var i = B.xtGet,
                            s = !1;
                        return t = i(t, 0), t = i(e, !1), this.active && this.halt(), this.cycles && this.cycleCount >= this.cycles && (this.cycleCount = this.cycles - 1), this.startTime -= t, t < 0 && (s = !0), this.active = !0, this.fn(s), this.active = !1, e && this.resume(), this
                    }, B.Ticker.prototype.kill = function () {
                        return this.active && this.halt(), delete B.animation[this.name], B.removeItem(B.animationnames, this.name), B.removeItem(B.work.animate, this.name), B.work.resortAnimations = !0
                    }, B.Ticker.prototype.killTweens = function (t) {
                        var e, i, s = B.tween;
                        for (t = !!B.xt(t) && t, e = 0, i = this.subscribers.length; e < i; e++) s[this.subscribers[e]].kill();
                        return t ? (this.kill(), !0) : this
                    }, B.Action = function (t) {
                        var e = B.xtGet;
                        return B.Base.call(this, t), t = B.safeObject(t), B.xt(t.targets) ? this.setTargets(t.targets) : this.targets = [], this.reverseOnCycleEnd = e(t.reverseOnCycleEnd, !1), this.reversed = e(t.reversed, !1), this.action = "function" == typeof t.action ? t.action : function () {}, this.revert = "function" == typeof t.revert ? t.revert : function () {}, this.time = e(t.time, 0), this.order = e(t.order, 0), this.triggered = !1, this.calculateEffectiveTime(), B.tween[this.name] = this, B.pushUnique(B.tweennames, this.name), this.ticker = "", B.xt(t.ticker) && this.addToTicker(t.ticker), this
                    }, B.Action.prototype = Object.create(B.Base.prototype), B.Action.prototype.type = "Action", B.Action.prototype.classname = "tweennames", B.work.d.Action = {
                        ticker: "",
                        targets: [],
                        action: function () {},
                        revert: function () {},
                        time: 0,
                        reverseOnCycleEnd: !1,
                        reversed: !1,
                        order: 0
                    }, B.mergeInto(B.work.d.Action, B.work.d.Base), B.Action.prototype.calculateEffectiveTime = function (t) {
                        var e, i = B.xtGet(t, this.time),
                            s = B.convertTime(i),
                            o = s[1],
                            n = s[0],
                            r = 0;
                        return this.effectiveTime = 0, "%" === n && o <= 100 ? this.ticker && (e = B.animation[this.ticker]) && (r = e.effectiveDuration, this.effectiveTime = r * (o / 100)) : this.effectiveTime = o, this
                    }, B.Action.prototype.addToTicker = function (t) {
                        var e, i = B.xt;
                        return i(t) && (this.ticker && this.ticker !== t && this.removeFromTicker(this.ticker), i(e = B.animation[t]) && (this.ticker = t, e.subscribe(this.name), this.calculateEffectiveTime())), this
                    }, B.Action.prototype.removeFromTicker = function (t) {
                        var e, i = B.xt;
                        return i(t) && i(e = B.animation[t]) && (this.ticker = "", e.unsubscribe(this.name)), this
                    }, B.Action.prototype.getEndTime = function () {
                        return this.effectiveTime
                    }, B.Action.prototype.update = function (t) {
                        return this.reversed ? t.reverseTick >= this.effectiveTime ? this.triggered || (this.action(), this.triggered = !0) : this.triggered && (this.revert(), this.triggered = !1) : t.tick >= this.effectiveTime ? this.triggered || (this.action(), this.triggered = !0) : this.triggered && (this.revert(), this.triggered = !1), this.reverseOnCycleEnd && t.willLoop && (t.next ? this.reversed = !this.reversed : (this.reversed = !1, this.triggered = !1)), !0
                    }, B.Action.prototype.set = function (t) {
                        var e, i = B.xt;
                        return (e = !!i((t = B.safeObject(t)).ticker) && this.ticker) ? (this.ticker = e, this.addToTicker(t.ticker)) : i(t.time) && (this.time = t.time, this.calculateEffectiveTime()), i(t.targets) && this.setTargets(t.targets), B.xto(t.reverseOnCycleEnd, t.reversed, t.order) && (i(t.reverseOnCycleEnd) && (this.reverseOnCycleEnd = t.reverseOnCycleEnd), i(t.reversed) && (this.reversed = t.reversed), i(t.order) && (this.order = t.order)), i(t.triggered) && this.triggered !== t.triggered && (t.triggered ? this.action() : this.revert(), this.triggered = t.triggered), i(t.action) && (this.action = t.action, "function" != typeof this.action && (this.action = function () {})), i(t.revert) && (this.revert = t.revert, "function" != typeof this.revert && (this.revert = function () {})), this
                    }, B.Action.prototype.setTargets = function (t) {
                        var e, i, s, o, n = [];
                        for (i = 0, s = (t = [].concat(t)).length; i < s; i++) "function" == typeof (e = t[i]) ? "function" == typeof e.set && n.push(e) : "object" === r(e) && B.xt(e.name) ? n.push(e) : (o = B.locateTarget(e)) && n.push(o);
                        return this.targets = n, this
                    }, B.Action.prototype.addToTargets = function (t) {
                        var e, i, s, o;
                        for (i = 0, s = (t = [].concat(t)).length; i < s; i++) "function" == typeof (e = t[i]) ? "function" == typeof e.set && this.targets.push(e) : (o = B.locateTarget(e)) && this.targets.push(o);
                        return this
                    }, B.Action.prototype.removeFromTargets = function (t) {
                        t = [].concat(t);
                        var e, i, s, o, n, r, a, h, c, l, u, p, d, y = [],
                            f = [].concat(this.targets);
                        B.contains;
                        for (o = 0, n = f.length; o < n; o++) c = (h = f[o]).type || "unknown", l = h.name || "unnamed", "unknown" !== c && "unnamed" !== l && y.push(c + "_" + l);
                        for (i = 0, s = t.length; i < s; i++) p = !1, (p = "function" == typeof (e = t[i]) ? e : B.locateTarget(e)) && (c = p.type || "unknown", l = p.name || "unnamed", "unknown" !== c && "unnamed" !== l && (d = c + "_" + l, 0 <= (u = y.indexOf(d)) && (f[u] = !1)));
                        for (this.targets = [], r = 0, a = f; r < a; r++) f[r] && this.targets.push(f[r]);
                        return this
                    }, B.Action.prototype.clone = function (t) {
                        t = B.safeObject(t);
                        var e, i = B.xt;
                        return e = B.Base.prototype.clone.call(this, t), i(t.targets) ? e.setTargets(t.targets) : e.targets = [].concat(this.targets), e.reverseOnCycleEnd = i(t.reverseOnCycleEnd) ? t.reverseOnCycleEnd : this.reverseOnCycleEnd, e.revert = i(t.revert) ? t.revert : this.revert, e.action = i(t.action) ? t.action : this.action, e.revert = i(t.revert) ? t.revert : this.revert, e.time = i(t.time) ? t.time : this.time, e.order = i(t.order) ? t.order : this.order, e.triggered = !1, e.calculateEffectiveTime(), e
                    }, B.Action.prototype.kill = function () {
                        return this.ticker && this.removeFromTicker(this.ticker), delete B.tween[this.name], B.removeItem(B.tweennames, this.name), !0
                    }, B.Action.prototype.updateTargets = function (t) {
                        for (var e = 0, i = this.targets.length; e < i; e++) this.targets[e].set(t);
                        return this
                    }, B.Tween = function (t) {
                        var e, i = B.xtGet,
                            s = B.xt;
                        return B.Base.call(this, t), t = B.safeObject(t), this.ticker = i(t.ticker, ""), B.xt(t.targets) ? this.setTargets(t.targets) : this.targets = [], this.definitions = s(t.definitions) ? [].concat(t.definitions) : [], this.setDefinitionsValues(), this.time = i(t.time, 0), this.duration = i(t.duration, 0), this.reverseOnCycleEnd = i(t.reverseOnCycleEnd, !1), this.reversed = i(t.reversed, !1), this.order = i(t.order, 0), this.action = !!s(t.action) && t.action, this.status = "before", this.calculateEffectiveTime(), this.calculateEffectiveDuration(), B.tween[this.name] = this, B.pushUnique(B.tweennames, this.name), this.ticker = "", B.xt(t.ticker) ? this.addToTicker(t.ticker) : (e = this.name + "_ticker", B.makeTicker({
                            name: e,
                            order: this.order,
                            subscribers: this.name,
                            duration: this.effectiveDuration,
                            eventChoke: i(t.eventChoke, 0),
                            cycles: i(t.cycles, 1),
                            killOnComplete: i(t.killOnComplete, !1)
                        }), this.ticker = e, B.animation[e].recalculateEffectiveDuration()), this
                    }, B.Tween.prototype = Object.create(B.Base.prototype), B.Tween.prototype.type = "Tween", B.Tween.prototype.classname = "tweennames", B.work.d.Tween = {
                        ticker: "",
                        targets: [],
                        definitions: [],
                        time: 0,
                        action: !1,
                        duration: 0,
                        reverseOnCycleEnd: !1,
                        reversed: !1,
                        order: 0
                    }, B.mergeInto(B.work.d.Tween, B.work.d.Base), B.Tween.prototype.getEndTime = function () {
                        return this.effectiveTime + this.effectiveDuration
                    }, B.Tween.prototype.calculateEffectiveTime = function (t) {
                        return B.Action.prototype.calculateEffectiveTime.call(this, t), this
                    }, B.Tween.prototype.calculateEffectiveDuration = function (t) {
                        var e, i = B.xtGet(t, this.duration),
                            s = B.convertTime(i),
                            o = s[1],
                            n = s[0],
                            r = 0;
                        return this.effectiveDuration = 0, "%" === n ? this.ticker && (e = B.animation[this.ticker]) && (r = e.effectiveDuration, this.effectiveDuration = r * (o / 100)) : this.effectiveDuration = o, this
                    }, B.Tween.prototype.addToTicker = function (t) {
                        return B.Action.prototype.addToTicker.call(this, t), this.calculateEffectiveDuration(), this
                    }, B.Tween.prototype.removeFromTicker = function (t) {
                        return B.Action.prototype.removeFromTicker.call(this, t), this
                    }, B.Tween.prototype.update = function (t) {
                        var e, i, s = (t = B.safeObject(t)).tick || 0,
                            o = t.reverseTick || 0,
                            n = "running";
                        return this.reversed ? (e = this.effectiveTime + this.effectiveDuration, i = this.effectiveTime, e < o ? n = "after" : o < i && (n = "before")) : (e = this.effectiveTime, i = this.effectiveTime + this.effectiveDuration, s < e ? n = "before" : i < s && (n = "after")), this.effectiveDuration ? "running" !== n && n === this.status || (this.status = n, this.doSimpleUpdate(t), this.updateCleanup(t)) : n !== this.status && (this.status = n, this.doSimpleUpdate(t), this.updateCleanup(t)), t.willLoop && (this.reverseOnCycleEnd ? this.reversed = !this.reversed : this.status = "before"), !0
                    }, B.Tween.prototype.doSimpleUpdate = function (t) {
                        t = B.safeObject(t);
                        var e, i, s, o, n, r, a, h = this.effectiveTime,
                            c = B.Tween.prototype.engineActions,
                            l = {};
                        for (e = this.reversed ? t.reverseTick - h : t.tick - h, a = this.effectiveDuration && "running" === this.status ? e / this.effectiveDuration : "after" === this.status ? 1 : 0, i = 0, s = this.definitions.length; i < s; i++)(r = this.definitions[i]).engine.substring ? r.value = c[r.engine](r.effectiveStart, r.effectiveChange, a) : r.value = r.engine(r.effectiveStart, r.effectiveChange, a), r.integer && (r.value = Math.round(r.value)), r.suffix && (r.value += r.suffix), l[r.attribute] = r.value;
                        for (o = 0, n = this.targets.length; o < n; o++) this.targets[o].set(l);
                        return this.action && this.action(), !0
                    }, B.Tween.prototype.updateCleanup = function (t) {
                        return (t = B.safeObject(t)).next || (this.status = this.reverse ? "before" : "after"), !0
                    }, B.Tween.prototype.engineActions = {
                        out: function (t, e, i) {
                            return t + e + Math.cos(90 * i * B.work.radian) * -e
                        },
                        in: function (t, e, i) {
                            return t + Math.sin(90 * i * B.work.radian) * e
                        },
                        easeIn: function (t, e, i) {
                            var s = 1 - i;
                            return t + e + s * s * -e
                        },
                        easeIn3: function (t, e, i) {
                            var s = 1 - i;
                            return t + e + s * s * s * -e
                        },
                        easeIn4: function (t, e, i) {
                            var s = 1 - i;
                            return t + e + s * s * s * s * -e
                        },
                        easeIn5: function (t, e, i) {
                            var s = 1 - i;
                            return t + e + s * s * s * s * s * -e
                        },
                        easeOutIn: function (t, e, i) {
                            var s = 1 - i;
                            return i < .5 ? t + i * i * e * 2 : t + e + s * s * -e * 2
                        },
                        easeOutIn3: function (t, e, i) {
                            var s = 1 - i;
                            return i < .5 ? t + i * i * i * e * 4 : t + e + s * s * s * -e * 4
                        },
                        easeOutIn4: function (t, e, i) {
                            var s = 1 - i;
                            return i < .5 ? t + i * i * i * i * e * 8 : t + e + s * s * s * s * -e * 8
                        },
                        easeOutIn5: function (t, e, i) {
                            var s = 1 - i;
                            return i < .5 ? t + i * i * i * i * i * e * 16 : t + e + s * s * s * s * s * -e * 16
                        },
                        easeOut: function (t, e, i) {
                            return t + i * i * e
                        },
                        easeOut3: function (t, e, i) {
                            return t + i * i * i * e
                        },
                        easeOut4: function (t, e, i) {
                            return t + i * i * i * i * e
                        },
                        easeOut5: function (t, e, i) {
                            return t + i * i * i * i * i * e
                        },
                        linear: function (t, e, i) {
                            return t + i * e
                        }
                    }, B.Tween.prototype.set = function (t) {
                        var e, i = B.xt;
                        return e = !!i((t = B.safeObject(t)).ticker) && this.ticker, B.Base.prototype.set.call(this, t), e ? (this.ticker = e, this.addToTicker(t.ticker)) : B.xto(t.time, t.duration) && (this.calculateEffectiveTime(), this.calculateEffectiveDuration()), i(t.targets) && this.setTargets(t.targets), i(t.definitions) && (this.definitions = [].concat(t.definitions), this.setDefinitionsValues()), i(t.action) && (this.action = t.action, "function" != typeof this.action && (this.action = !1)), this
                    }, B.Tween.prototype.setDefinitionsValues = function () {
                        var t, e, i, s, o = B.xt;
                        for (t = 0, e = this.definitions.length; t < e; t++) s = this.definitions[t], i = this.parseDefinitionsValue(s.start), s.effectiveStart = i[1], s.suffix = i[0], i = this.parseDefinitionsValue(s.end), s.effectiveEnd = i[1], o(s.engine) || (s.engine = "linear"), s.effectiveChange = s.effectiveEnd - s.effectiveStart;
                        return this
                    }, B.Tween.prototype.parseDefinitionsValue = function (t) {
                        var e, i = ["", 0],
                            s = B.xt;
                        return s(t) && (t.toFixed ? i[1] = t : t.substring && (s((e = t.match(/^-?\d+\.?\d*(\D*)/))[0]) && (i[1] = parseFloat(e)), s(e[1]) && (i[0] = e[1]))), i
                    }, B.Tween.prototype.setTargets = function (t) {
                        return B.Action.prototype.setTargets.call(this, t), this
                    }, B.Tween.prototype.addToTargets = function (t) {
                        return B.Action.prototype.addToTargets.call(this, t), this
                    }, B.Tween.prototype.removeFromTargets = function (t) {
                        return B.Action.prototype.removeFromTargets.call(this, t), this
                    }, B.Tween.prototype.clone = function (t) {
                        var e = B.Base.prototype.clone.call(this, t);
                        return (t = B.safeObject(t)).targets || e.setTargets(this.targets), e
                    }, B.Tween.prototype.run = function () {
                        var t = B.animation[this.ticker];
                        return t && t.run(), this
                    }, B.Tween.prototype.halt = function () {
                        var t = B.animation[this.ticker];
                        return t && t.halt(), this
                    }, B.Tween.prototype.resume = function () {
                        var t = B.animation[this.ticker];
                        return t && t.resume(), this
                    }, B.Tween.prototype.seekTo = function (t) {
                        var e = B.animation[this.ticker];
                        return e && e.seekTo(t), this
                    }, B.Tween.prototype.seekFor = function (t) {
                        var e = B.animation[this.ticker];
                        return e && e.seekFor(t), this
                    }, B.Tween.prototype.kill = function () {
                        var t;
                        this.ticker === this.name + "_ticker" && (t = B.animation[this.ticker]) && t.kill(), B.Action.prototype.kill.call(this)
                    };
                    return B
                }(),
                l = a;
            e.default = {
                init: function () {
                    l.init()
                },
                radialGradient: null,
                gradient1: null,
                gradient2: null,
                spotlight: null,
                light1: null,
                light2: null,
                animation: null,
                draw: function (i, s) {
                    this.radialGradient && (this.animation.kill(), this.radialGradient.remove(), this.gradient1.remove(), this.gradient2.remove(), l.deleteEntity(["spotlightBlock", "lightBlock1", "lightBlock2"]), this.radialGradient = null);
                    var o = {
                            x: 0,
                            y: 0
                        },
                        n = 100,
                        r = 0,
                        a = !0;
                    this.radialGradient = l.makeRadialGradient({
                        name: "spotlight",
                        startRadius: 0,
                        endRadius: n,
                        color: [{
                            color: "rgba(0,0,0,0)",
                            stop: 0
                        }, {
                            color: "rgba(0,0,0,0)",
                            stop: .8
                        }, {
                            color: "rgba(0,0,0,0.2)",
                            stop: 1
                        }]
                    }), this.gradient1 = l.makeGradient({
                        name: "light1",
                        startX: 0,
                        startY: 0,
                        endX: 0,
                        endY: 0,
                        color: [{
                            color: "rgba(0,0,0,0.3)",
                            stop: 0
                        }, {
                            color: "rgba(0,0,0,0)",
                            stop: .2
                        }, {
                            color: "rgba(0,0,0,0)",
                            stop: .8
                        }, {
                            color: "rgba(0,0,0,0.3)",
                            stop: 1
                        }]
                    }), this.gradient2 = this.gradient1.clone({
                        name: "light2"
                    }), this.spotlight = l.makeBlock({
                        name: "spotlightBlock",
                        fillStyle: "spotlight",
                        method: "fill",
                        width: i,
                        height: s,
                        order: 1
                    }), this.light1 = this.spotlight.clone({
                        name: "lightBlock1",
                        fillStyle: "light1"
                    }), this.light2 = this.spotlight.clone({
                        name: "lightBlock2",
                        fillStyle: "light2"
                    });
                    var h = this;

                    function c(t, e) {
                        var i = Math.sqrt(t * t + e * e),
                            s = [t / i, e / i];
                        return [-s[1], s[0]]
                    }
                    this.animation = l.makeAnimation({
                        fn: function () {
                            ! function () {
                                var t = 0;
                                n = 16 / 9 <= i / s ? (t = .3, i / 10) : (t = .15 * s / (i / 2), s / 10);
                                o = {
                                    x: i / 2 * (1 + r),
                                    y: s / 5 * 3
                                }, a ? r += .02 * (.1 + Math.abs(t - Math.abs(r))) : r -= .02 * (.1 + Math.abs(t - Math.abs(r)));
                                Math.abs(r) > t && (a = !a)
                            }(), h.spotlight.set({
                                width: i,
                                height: s
                            }), h.light1.set({
                                width: i,
                                height: s
                            }), h.light2.set({
                                width: i,
                                height: s
                            }), h.radialGradient.set({
                                startX: o.x,
                                startY: o.y,
                                endX: o.x,
                                endY: o.y,
                                endRadius: n
                            });
                            var t = c(o.x, o.y);
                            h.gradient1.set({
                                startX: t[0] * n,
                                startY: t[1] * n,
                                endX: -t[0] * n,
                                endY: -t[1] * n
                            });
                            var e = c(o.x - i, o.y);
                            h.gradient2.set({
                                startX: e[0] * n + i,
                                startY: e[1] * n,
                                endX: -e[0] * n + i,
                                endY: -e[1] * n
                            }), l.render()
                        }
                    })
                }
            }
        }
    }
]);
//# sourceMappingURL=scrawl_canvas_animate.a76098a0dd73625bfc61.bundle.js.map