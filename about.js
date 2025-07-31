(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function lp(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Qc = {
    exports: {}
}
  , Ko = {}
  , Gc = {
    exports: {}
}
  , R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ni = Symbol.for("react.element")
  , ap = Symbol.for("react.portal")
  , up = Symbol.for("react.fragment")
  , cp = Symbol.for("react.strict_mode")
  , fp = Symbol.for("react.profiler")
  , dp = Symbol.for("react.provider")
  , hp = Symbol.for("react.context")
  , pp = Symbol.for("react.forward_ref")
  , mp = Symbol.for("react.suspense")
  , gp = Symbol.for("react.memo")
  , vp = Symbol.for("react.lazy")
  , gu = Symbol.iterator;
function yp(t) {
    return t === null || typeof t != "object" ? null : (t = gu && t[gu] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var Yc = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Xc = Object.assign
  , Kc = {};
function Nr(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = Kc,
    this.updater = n || Yc
}
Nr.prototype.isReactComponent = {};
Nr.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
}
;
Nr.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
}
;
function Zc() {}
Zc.prototype = Nr.prototype;
function ra(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = Kc,
    this.updater = n || Yc
}
var ia = ra.prototype = new Zc;
ia.constructor = ra;
Xc(ia, Nr.prototype);
ia.isPureReactComponent = !0;
var vu = Array.isArray
  , qc = Object.prototype.hasOwnProperty
  , oa = {
    current: null
}
  , Jc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function bc(t, e, n) {
    var r, i = {}, o = null, s = null;
    if (e != null)
        for (r in e.ref !== void 0 && (s = e.ref),
        e.key !== void 0 && (o = "" + e.key),
        e)
            qc.call(e, r) && !Jc.hasOwnProperty(r) && (i[r] = e[r]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        i.children = a
    }
    if (t && t.defaultProps)
        for (r in l = t.defaultProps,
        l)
            i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: Ni,
        type: t,
        key: o,
        ref: s,
        props: i,
        _owner: oa.current
    }
}
function _p(t, e) {
    return {
        $$typeof: Ni,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}
function sa(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Ni
}
function xp(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
        return e[n]
    })
}
var yu = /\/+/g;
function ms(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? xp("" + t.key) : e.toString(36)
}
function eo(t, e, n, r, i) {
    var o = typeof t;
    (o === "undefined" || o === "boolean") && (t = null);
    var s = !1;
    if (t === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (t.$$typeof) {
            case Ni:
            case ap:
                s = !0
            }
        }
    if (s)
        return s = t,
        i = i(s),
        t = r === "" ? "." + ms(s, 0) : r,
        vu(i) ? (n = "",
        t != null && (n = t.replace(yu, "$&/") + "/"),
        eo(i, e, n, "", function(u) {
            return u
        })) : i != null && (sa(i) && (i = _p(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(yu, "$&/") + "/") + t)),
        e.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    vu(t))
        for (var l = 0; l < t.length; l++) {
            o = t[l];
            var a = r + ms(o, l);
            s += eo(o, e, n, a, i)
        }
    else if (a = yp(t),
    typeof a == "function")
        for (t = a.call(t),
        l = 0; !(o = t.next()).done; )
            o = o.value,
            a = r + ms(o, l++),
            s += eo(o, e, n, a, i);
    else if (o === "object")
        throw e = String(t),
        Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Ii(t, e, n) {
    if (t == null)
        return t;
    var r = []
      , i = 0;
    return eo(t, r, "", "", function(o) {
        return e.call(n, o, i++)
    }),
    r
}
function wp(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(),
        e.then(function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 1,
            t._result = n)
        }, function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 2,
            t._result = n)
        }),
        t._status === -1 && (t._status = 0,
        t._result = e)
    }
    if (t._status === 1)
        return t._result.default;
    throw t._result
}
var Oe = {
    current: null
}
  , to = {
    transition: null
}
  , kp = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: to,
    ReactCurrentOwner: oa
};
function ef() {
    throw Error("act(...) is not supported in production builds of React.")
}
R.Children = {
    map: Ii,
    forEach: function(t, e, n) {
        Ii(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return Ii(t, function() {
            e++
        }),
        e
    },
    toArray: function(t) {
        return Ii(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!sa(t))
            throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
R.Component = Nr;
R.Fragment = up;
R.Profiler = fp;
R.PureComponent = ra;
R.StrictMode = cp;
R.Suspense = mp;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kp;
R.act = ef;
R.cloneElement = function(t, e, n) {
    if (t == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var r = Xc({}, t.props)
      , i = t.key
      , o = t.ref
      , s = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (o = e.ref,
        s = oa.current),
        e.key !== void 0 && (i = "" + e.key),
        t.type && t.type.defaultProps)
            var l = t.type.defaultProps;
        for (a in e)
            qc.call(e, a) && !Jc.hasOwnProperty(a) && (r[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: Ni,
        type: t.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
R.createContext = function(t) {
    return t = {
        $$typeof: hp,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    t.Provider = {
        $$typeof: dp,
        _context: t
    },
    t.Consumer = t
}
;
R.createElement = bc;
R.createFactory = function(t) {
    var e = bc.bind(null, t);
    return e.type = t,
    e
}
;
R.createRef = function() {
    return {
        current: null
    }
}
;
R.forwardRef = function(t) {
    return {
        $$typeof: pp,
        render: t
    }
}
;
R.isValidElement = sa;
R.lazy = function(t) {
    return {
        $$typeof: vp,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: wp
    }
}
;
R.memo = function(t, e) {
    return {
        $$typeof: gp,
        type: t,
        compare: e === void 0 ? null : e
    }
}
;
R.startTransition = function(t) {
    var e = to.transition;
    to.transition = {};
    try {
        t()
    } finally {
        to.transition = e
    }
}
;
R.unstable_act = ef;
R.useCallback = function(t, e) {
    return Oe.current.useCallback(t, e)
}
;
R.useContext = function(t) {
    return Oe.current.useContext(t)
}
;
R.useDebugValue = function() {}
;
R.useDeferredValue = function(t) {
    return Oe.current.useDeferredValue(t)
}
;
R.useEffect = function(t, e) {
    return Oe.current.useEffect(t, e)
}
;
R.useId = function() {
    return Oe.current.useId()
}
;
R.useImperativeHandle = function(t, e, n) {
    return Oe.current.useImperativeHandle(t, e, n)
}
;
R.useInsertionEffect = function(t, e) {
    return Oe.current.useInsertionEffect(t, e)
}
;
R.useLayoutEffect = function(t, e) {
    return Oe.current.useLayoutEffect(t, e)
}
;
R.useMemo = function(t, e) {
    return Oe.current.useMemo(t, e)
}
;
R.useReducer = function(t, e, n) {
    return Oe.current.useReducer(t, e, n)
}
;
R.useRef = function(t) {
    return Oe.current.useRef(t)
}
;
R.useState = function(t) {
    return Oe.current.useState(t)
}
;
R.useSyncExternalStore = function(t, e, n) {
    return Oe.current.useSyncExternalStore(t, e, n)
}
;
R.useTransition = function() {
    return Oe.current.useTransition()
}
;
R.version = "18.3.1";
Gc.exports = R;
var Ye = Gc.exports;
const Nn = lp(Ye);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sp = Ye
  , Tp = Symbol.for("react.element")
  , Cp = Symbol.for("react.fragment")
  , Ep = Object.prototype.hasOwnProperty
  , Pp = Sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Np = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function tf(t, e, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    e.key !== void 0 && (o = "" + e.key),
    e.ref !== void 0 && (s = e.ref);
    for (r in e)
        Ep.call(e, r) && !Np.hasOwnProperty(r) && (i[r] = e[r]);
    if (t && t.defaultProps)
        for (r in e = t.defaultProps,
        e)
            i[r] === void 0 && (i[r] = e[r]);
    return {
        $$typeof: Tp,
        type: t,
        key: o,
        ref: s,
        props: i,
        _owner: Pp.current
    }
}
Ko.Fragment = Cp;
Ko.jsx = tf;
Ko.jsxs = tf;
Qc.exports = Ko;
var y = Qc.exports
  , nf = {
    exports: {}
}
  , Je = {}
  , rf = {
    exports: {}
}
  , of = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(N, z) {
        var M = N.length;
        N.push(z);
        e: for (; 0 < M; ) {
            var V = M - 1 >>> 1
              , W = N[V];
            if (0 < i(W, z))
                N[V] = z,
                N[M] = W,
                M = V;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0)
            return null;
        var z = N[0]
          , M = N.pop();
        if (M !== z) {
            N[0] = M;
            e: for (var V = 0, W = N.length, vn = W >>> 1; V < vn; ) {
                var ge = 2 * (V + 1) - 1
                  , ct = N[ge]
                  , yn = ge + 1
                  , Di = N[yn];
                if (0 > i(ct, M))
                    yn < W && 0 > i(Di, ct) ? (N[V] = Di,
                    N[yn] = M,
                    V = yn) : (N[V] = ct,
                    N[ge] = M,
                    V = ge);
                else if (yn < W && 0 > i(Di, M))
                    N[V] = Di,
                    N[yn] = M,
                    V = yn;
                else
                    break e
            }
        }
        return z
    }
    function i(N, z) {
        var M = N.sortIndex - z.sortIndex;
        return M !== 0 ? M : N.id - z.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        t.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , l = s.now();
        t.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , f = null
      , h = 3
      , v = !1
      , _ = !1
      , p = !1
      , k = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(N) {
        for (var z = n(u); z !== null; ) {
            if (z.callback === null)
                r(u);
            else if (z.startTime <= N)
                r(u),
                z.sortIndex = z.expirationTime,
                e(a, z);
            else
                break;
            z = n(u)
        }
    }
    function x(N) {
        if (p = !1,
        g(N),
        !_)
            if (n(a) !== null)
                _ = !0,
                Y(w);
            else {
                var z = n(u);
                z !== null && te(x, z.startTime - N)
            }
    }
    function w(N, z) {
        _ = !1,
        p && (p = !1,
        m(C),
        C = -1),
        v = !0;
        var M = h;
        try {
            for (g(z),
            f = n(a); f !== null && (!(f.expirationTime > z) || N && !D()); ) {
                var V = f.callback;
                if (typeof V == "function") {
                    f.callback = null,
                    h = f.priorityLevel;
                    var W = V(f.expirationTime <= z);
                    z = t.unstable_now(),
                    typeof W == "function" ? f.callback = W : f === n(a) && r(a),
                    g(z)
                } else
                    r(a);
                f = n(a)
            }
            if (f !== null)
                var vn = !0;
            else {
                var ge = n(u);
                ge !== null && te(x, ge.startTime - z),
                vn = !1
            }
            return vn
        } finally {
            f = null,
            h = M,
            v = !1
        }
    }
    var S = !1
      , T = null
      , C = -1
      , E = 5
      , j = -1;
    function D() {
        return !(t.unstable_now() - j < E)
    }
    function F() {
        if (T !== null) {
            var N = t.unstable_now();
            j = N;
            var z = !0;
            try {
                z = T(!0, N)
            } finally {
                z ? A() : (S = !1,
                T = null)
            }
        } else
            S = !1
    }
    var A;
    if (typeof d == "function")
        A = function() {
            d(F)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var se = new MessageChannel
          , le = se.port2;
        se.port1.onmessage = F,
        A = function() {
            le.postMessage(null)
        }
    } else
        A = function() {
            k(F, 0)
        }
        ;
    function Y(N) {
        T = N,
        S || (S = !0,
        A())
    }
    function te(N, z) {
        C = k(function() {
            N(t.unstable_now())
        }, z)
    }
    t.unstable_IdlePriority = 5,
    t.unstable_ImmediatePriority = 1,
    t.unstable_LowPriority = 4,
    t.unstable_NormalPriority = 3,
    t.unstable_Profiling = null,
    t.unstable_UserBlockingPriority = 2,
    t.unstable_cancelCallback = function(N) {
        N.callback = null
    }
    ,
    t.unstable_continueExecution = function() {
        _ || v || (_ = !0,
        Y(w))
    }
    ,
    t.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < N ? Math.floor(1e3 / N) : 5
    }
    ,
    t.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    t.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    t.unstable_next = function(N) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var z = 3;
            break;
        default:
            z = h
        }
        var M = h;
        h = z;
        try {
            return N()
        } finally {
            h = M
        }
    }
    ,
    t.unstable_pauseExecution = function() {}
    ,
    t.unstable_requestPaint = function() {}
    ,
    t.unstable_runWithPriority = function(N, z) {
        switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            N = 3
        }
        var M = h;
        h = N;
        try {
            return z()
        } finally {
            h = M
        }
    }
    ,
    t.unstable_scheduleCallback = function(N, z, M) {
        var V = t.unstable_now();
        switch (typeof M == "object" && M !== null ? (M = M.delay,
        M = typeof M == "number" && 0 < M ? V + M : V) : M = V,
        N) {
        case 1:
            var W = -1;
            break;
        case 2:
            W = 250;
            break;
        case 5:
            W = 1073741823;
            break;
        case 4:
            W = 1e4;
            break;
        default:
            W = 5e3
        }
        return W = M + W,
        N = {
            id: c++,
            callback: z,
            priorityLevel: N,
            startTime: M,
            expirationTime: W,
            sortIndex: -1
        },
        M > V ? (N.sortIndex = M,
        e(u, N),
        n(a) === null && N === n(u) && (p ? (m(C),
        C = -1) : p = !0,
        te(x, M - V))) : (N.sortIndex = W,
        e(a, N),
        _ || v || (_ = !0,
        Y(w))),
        N
    }
    ,
    t.unstable_shouldYield = D,
    t.unstable_wrapCallback = function(N) {
        var z = h;
        return function() {
            var M = h;
            h = z;
            try {
                return N.apply(this, arguments)
            } finally {
                h = M
            }
        }
    }
}
)(of);
rf.exports = of;
var jp = rf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Op = Ye
  , Ze = jp;
function P(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var sf = new Set
  , ii = {};
function Wn(t, e) {
    gr(t, e),
    gr(t + "Capture", e)
}
function gr(t, e) {
    for (ii[t] = e,
    t = 0; t < e.length; t++)
        sf.add(e[t])
}
var It = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Zs = Object.prototype.hasOwnProperty
  , zp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , _u = {}
  , xu = {};
function Mp(t) {
    return Zs.call(xu, t) ? !0 : Zs.call(_u, t) ? !1 : zp.test(t) ? xu[t] = !0 : (_u[t] = !0,
    !1)
}
function Rp(t, e, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof e) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5),
        t !== "data-" && t !== "aria-");
    default:
        return !1
    }
}
function Dp(t, e, n, r) {
    if (e === null || typeof e > "u" || Rp(t, e, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
        }
    return !1
}
function ze(t, e, n, r, i, o, s) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = t,
    this.type = e,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    _e[t] = new ze(t,0,!1,t,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var e = t[0];
    _e[e] = new ze(e,1,!1,t[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    _e[t] = new ze(t,2,!1,t.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    _e[t] = new ze(t,2,!1,t,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    _e[t] = new ze(t,3,!1,t.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    _e[t] = new ze(t,3,!0,t,null,!1,!1)
});
["capture", "download"].forEach(function(t) {
    _e[t] = new ze(t,4,!1,t,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    _e[t] = new ze(t,6,!1,t,null,!1,!1)
});
["rowSpan", "start"].forEach(function(t) {
    _e[t] = new ze(t,5,!1,t.toLowerCase(),null,!1,!1)
});
var la = /[\-:]([a-z])/g;
function aa(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace(la, aa);
    _e[e] = new ze(e,1,!1,t,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace(la, aa);
    _e[e] = new ze(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace(la, aa);
    _e[e] = new ze(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    _e[t] = new ze(t,1,!1,t.toLowerCase(),null,!1,!1)
});
_e.xlinkHref = new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(t) {
    _e[t] = new ze(t,1,!1,t.toLowerCase(),null,!0,!0)
});
function ua(t, e, n, r) {
    var i = _e.hasOwnProperty(e) ? _e[e] : null;
    (i !== null ? i.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (Dp(e, n, i, r) && (n = null),
    r || i === null ? Mp(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (e = i.attributeName,
    r = i.attributeNamespace,
    n === null ? t.removeAttribute(e) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var Bt = Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Li = Symbol.for("react.element")
  , Yn = Symbol.for("react.portal")
  , Xn = Symbol.for("react.fragment")
  , ca = Symbol.for("react.strict_mode")
  , qs = Symbol.for("react.profiler")
  , lf = Symbol.for("react.provider")
  , af = Symbol.for("react.context")
  , fa = Symbol.for("react.forward_ref")
  , Js = Symbol.for("react.suspense")
  , bs = Symbol.for("react.suspense_list")
  , da = Symbol.for("react.memo")
  , $t = Symbol.for("react.lazy")
  , uf = Symbol.for("react.offscreen")
  , wu = Symbol.iterator;
function zr(t) {
    return t === null || typeof t != "object" ? null : (t = wu && t[wu] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var ee = Object.assign, gs;
function Vr(t) {
    if (gs === void 0)
        try {
            throw Error()
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            gs = e && e[1] || ""
        }
    return `
` + gs + t
}
var vs = !1;
function ys(t, e) {
    if (!t || vs)
        return "";
    vs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                throw Error()
            }
            ,
            Object.defineProperty(e.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (u) {
                    r = u
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            t()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (i[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || i[s] !== o[l]) {
                                var a = `
` + i[s].replace(" at new ", " at ");
                                return t.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", t.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        vs = !1,
        Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? Vr(t) : ""
}
function Ip(t) {
    switch (t.tag) {
    case 5:
        return Vr(t.type);
    case 16:
        return Vr("Lazy");
    case 13:
        return Vr("Suspense");
    case 19:
        return Vr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return t = ys(t.type, !1),
        t;
    case 11:
        return t = ys(t.type.render, !1),
        t;
    case 1:
        return t = ys(t.type, !0),
        t;
    default:
        return ""
    }
}
function el(t) {
    if (t == null)
        return null;
    if (typeof t == "function")
        return t.displayName || t.name || null;
    if (typeof t == "string")
        return t;
    switch (t) {
    case Xn:
        return "Fragment";
    case Yn:
        return "Portal";
    case qs:
        return "Profiler";
    case ca:
        return "StrictMode";
    case Js:
        return "Suspense";
    case bs:
        return "SuspenseList"
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
        case af:
            return (t.displayName || "Context") + ".Consumer";
        case lf:
            return (t._context.displayName || "Context") + ".Provider";
        case fa:
            var e = t.render;
            return t = t.displayName,
            t || (t = e.displayName || e.name || "",
            t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
            t;
        case da:
            return e = t.displayName || null,
            e !== null ? e : el(t.type) || "Memo";
        case $t:
            e = t._payload,
            t = t._init;
            try {
                return el(t(e))
            } catch {}
        }
    return null
}
function Lp(t) {
    var e = t.type;
    switch (t.tag) {
    case 24:
        return "Cache";
    case 9:
        return (e.displayName || "Context") + ".Consumer";
    case 10:
        return (e._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return t = e.render,
        t = t.displayName || t.name || "",
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return e;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return el(e);
    case 8:
        return e === ca ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e
    }
    return null
}
function un(t) {
    switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return t;
    case "object":
        return t;
    default:
        return ""
    }
}
function cf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function Fp(t) {
    var e = cf(t) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
      , r = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(t, e, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                t._valueTracker = null,
                delete t[e]
            }
        }
    }
}
function Fi(t) {
    t._valueTracker || (t._valueTracker = Fp(t))
}
function ff(t) {
    if (!t)
        return !1;
    var e = t._valueTracker;
    if (!e)
        return !0;
    var n = e.getValue()
      , r = "";
    return t && (r = cf(t) ? t.checked ? "true" : "false" : t.value),
    t = r,
    t !== n ? (e.setValue(t),
    !0) : !1
}
function go(t) {
    if (t = t || (typeof document < "u" ? document : void 0),
    typeof t > "u")
        return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}
function tl(t, e) {
    var n = e.checked;
    return ee({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked
    })
}
function ku(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue
      , r = e.checked != null ? e.checked : e.defaultChecked;
    n = un(e.value != null ? e.value : n),
    t._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}
function df(t, e) {
    e = e.checked,
    e != null && ua(t, "checked", e, !1)
}
function nl(t, e) {
    df(t, e);
    var n = un(e.value)
      , r = e.type;
    if (n != null)
        r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (r === "submit" || r === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? rl(t, e.type, n) : e.hasOwnProperty("defaultValue") && rl(t, e.type, un(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}
function Su(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var r = e.type;
        if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null))
            return;
        e = "" + t._wrapperState.initialValue,
        n || e === t.value || (t.value = e),
        t.defaultValue = e
    }
    n = t.name,
    n !== "" && (t.name = ""),
    t.defaultChecked = !!t._wrapperState.initialChecked,
    n !== "" && (t.name = n)
}
function rl(t, e, n) {
    (e !== "number" || go(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var Br = Array.isArray;
function lr(t, e, n, r) {
    if (t = t.options,
    e) {
        e = {};
        for (var i = 0; i < n.length; i++)
            e["$" + n[i]] = !0;
        for (n = 0; n < t.length; n++)
            i = e.hasOwnProperty("$" + t[n].value),
            t[n].selected !== i && (t[n].selected = i),
            i && r && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + un(n),
        e = null,
        i = 0; i < t.length; i++) {
            if (t[i].value === n) {
                t[i].selected = !0,
                r && (t[i].defaultSelected = !0);
                return
            }
            e !== null || t[i].disabled || (e = t[i])
        }
        e !== null && (e.selected = !0)
    }
}
function il(t, e) {
    if (e.dangerouslySetInnerHTML != null)
        throw Error(P(91));
    return ee({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}
function Tu(t, e) {
    var n = e.value;
    if (n == null) {
        if (n = e.children,
        e = e.defaultValue,
        n != null) {
            if (e != null)
                throw Error(P(92));
            if (Br(n)) {
                if (1 < n.length)
                    throw Error(P(93));
                n = n[0]
            }
            e = n
        }
        e == null && (e = ""),
        n = e
    }
    t._wrapperState = {
        initialValue: un(n)
    }
}
function hf(t, e) {
    var n = un(e.value)
      , r = un(e.defaultValue);
    n != null && (n = "" + n,
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r)
}
function Cu(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}
function pf(t) {
    switch (t) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ol(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? pf(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var Ai, mf = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return t(e, n, r, i)
        })
    }
    : t
}(function(t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in t)
        t.innerHTML = e;
    else {
        for (Ai = Ai || document.createElement("div"),
        Ai.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
        e = Ai.firstChild; t.firstChild; )
            t.removeChild(t.firstChild);
        for (; e.firstChild; )
            t.appendChild(e.firstChild)
    }
});
function oi(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var Gr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Ap = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gr).forEach(function(t) {
    Ap.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1),
        Gr[e] = Gr[t]
    })
});
function gf(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || Gr.hasOwnProperty(t) && Gr[t] ? ("" + e).trim() : e + "px"
}
function vf(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = gf(n, e[n], r);
            n === "float" && (n = "cssFloat"),
            r ? t.setProperty(n, i) : t[n] = i
        }
}
var Up = ee({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function sl(t, e) {
    if (e) {
        if (Up[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(P(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null)
                throw Error(P(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html"in e.dangerouslySetInnerHTML))
                throw Error(P(61))
        }
        if (e.style != null && typeof e.style != "object")
            throw Error(P(62))
    }
}
function ll(t, e) {
    if (t.indexOf("-") === -1)
        return typeof e.is == "string";
    switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var al = null;
function ha(t) {
    return t = t.target || t.srcElement || window,
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
}
var ul = null
  , ar = null
  , ur = null;
function Eu(t) {
    if (t = zi(t)) {
        if (typeof ul != "function")
            throw Error(P(280));
        var e = t.stateNode;
        e && (e = es(e),
        ul(t.stateNode, t.type, e))
    }
}
function yf(t) {
    ar ? ur ? ur.push(t) : ur = [t] : ar = t
}
function _f() {
    if (ar) {
        var t = ar
          , e = ur;
        if (ur = ar = null,
        Eu(t),
        e)
            for (t = 0; t < e.length; t++)
                Eu(e[t])
    }
}
function xf(t, e) {
    return t(e)
}
function wf() {}
var _s = !1;
function kf(t, e, n) {
    if (_s)
        return t(e, n);
    _s = !0;
    try {
        return xf(t, e, n)
    } finally {
        _s = !1,
        (ar !== null || ur !== null) && (wf(),
        _f())
    }
}
function si(t, e) {
    var n = t.stateNode;
    if (n === null)
        return null;
    var r = es(n);
    if (r === null)
        return null;
    n = r[e];
    e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (t = t.type,
        r = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
        t = !r;
        break e;
    default:
        t = !1
    }
    if (t)
        return null;
    if (n && typeof n != "function")
        throw Error(P(231, e, typeof n));
    return n
}
var cl = !1;
if (It)
    try {
        var Mr = {};
        Object.defineProperty(Mr, "passive", {
            get: function() {
                cl = !0
            }
        }),
        window.addEventListener("test", Mr, Mr),
        window.removeEventListener("test", Mr, Mr)
    } catch {
        cl = !1
    }
function Vp(t, e, n, r, i, o, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Yr = !1
  , vo = null
  , yo = !1
  , fl = null
  , Bp = {
    onError: function(t) {
        Yr = !0,
        vo = t
    }
};
function Wp(t, e, n, r, i, o, s, l, a) {
    Yr = !1,
    vo = null,
    Vp.apply(Bp, arguments)
}
function $p(t, e, n, r, i, o, s, l, a) {
    if (Wp.apply(this, arguments),
    Yr) {
        if (Yr) {
            var u = vo;
            Yr = !1,
            vo = null
        } else
            throw Error(P(198));
        yo || (yo = !0,
        fl = u)
    }
}
function $n(t) {
    var e = t
      , n = t;
    if (t.alternate)
        for (; e.return; )
            e = e.return;
    else {
        t = e;
        do
            e = t,
            e.flags & 4098 && (n = e.return),
            t = e.return;
        while (t)
    }
    return e.tag === 3 ? n : null
}
function Sf(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate,
        t !== null && (e = t.memoizedState)),
        e !== null)
            return e.dehydrated
    }
    return null
}
function Pu(t) {
    if ($n(t) !== t)
        throw Error(P(188))
}
function Hp(t) {
    var e = t.alternate;
    if (!e) {
        if (e = $n(t),
        e === null)
            throw Error(P(188));
        return e !== t ? null : t
    }
    for (var n = t, r = e; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return Pu(i),
                    t;
                if (o === r)
                    return Pu(i),
                    e;
                o = o.sibling
            }
            throw Error(P(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, l = i.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = o.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(P(189))
            }
        }
        if (n.alternate !== r)
            throw Error(P(190))
    }
    if (n.tag !== 3)
        throw Error(P(188));
    return n.stateNode.current === n ? t : e
}
function Tf(t) {
    return t = Hp(t),
    t !== null ? Cf(t) : null
}
function Cf(t) {
    if (t.tag === 5 || t.tag === 6)
        return t;
    for (t = t.child; t !== null; ) {
        var e = Cf(t);
        if (e !== null)
            return e;
        t = t.sibling
    }
    return null
}
var Ef = Ze.unstable_scheduleCallback
  , Nu = Ze.unstable_cancelCallback
  , Qp = Ze.unstable_shouldYield
  , Gp = Ze.unstable_requestPaint
  , oe = Ze.unstable_now
  , Yp = Ze.unstable_getCurrentPriorityLevel
  , pa = Ze.unstable_ImmediatePriority
  , Pf = Ze.unstable_UserBlockingPriority
  , _o = Ze.unstable_NormalPriority
  , Xp = Ze.unstable_LowPriority
  , Nf = Ze.unstable_IdlePriority
  , Zo = null
  , Tt = null;
function Kp(t) {
    if (Tt && typeof Tt.onCommitFiberRoot == "function")
        try {
            Tt.onCommitFiberRoot(Zo, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
}
var mt = Math.clz32 ? Math.clz32 : Jp
  , Zp = Math.log
  , qp = Math.LN2;
function Jp(t) {
    return t >>>= 0,
    t === 0 ? 32 : 31 - (Zp(t) / qp | 0) | 0
}
var Ui = 64
  , Vi = 4194304;
function Wr(t) {
    switch (t & -t) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return t & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return t
    }
}
function xo(t, e) {
    var n = t.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = t.suspendedLanes
      , o = t.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~i;
        l !== 0 ? r = Wr(l) : (o &= s,
        o !== 0 && (r = Wr(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = Wr(s) : o !== 0 && (r = Wr(o));
    if (r === 0)
        return 0;
    if (e !== 0 && e !== r && !(e & i) && (i = r & -r,
    o = e & -e,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return e;
    if (r & 4 && (r |= n & 16),
    e = t.entangledLanes,
    e !== 0)
        for (t = t.entanglements,
        e &= r; 0 < e; )
            n = 31 - mt(e),
            i = 1 << n,
            r |= t[n],
            e &= ~i;
    return r
}
function bp(t, e) {
    switch (t) {
    case 1:
    case 2:
    case 4:
        return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function em(t, e) {
    for (var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, o = t.pendingLanes; 0 < o; ) {
        var s = 31 - mt(o)
          , l = 1 << s
          , a = i[s];
        a === -1 ? (!(l & n) || l & r) && (i[s] = bp(l, e)) : a <= e && (t.expiredLanes |= l),
        o &= ~l
    }
}
function dl(t) {
    return t = t.pendingLanes & -1073741825,
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}
function jf() {
    var t = Ui;
    return Ui <<= 1,
    !(Ui & 4194240) && (Ui = 64),
    t
}
function xs(t) {
    for (var e = [], n = 0; 31 > n; n++)
        e.push(t);
    return e
}
function ji(t, e, n) {
    t.pendingLanes |= e,
    e !== 536870912 && (t.suspendedLanes = 0,
    t.pingedLanes = 0),
    t = t.eventTimes,
    e = 31 - mt(e),
    t[e] = n
}
function tm(t, e) {
    var n = t.pendingLanes & ~e;
    t.pendingLanes = e,
    t.suspendedLanes = 0,
    t.pingedLanes = 0,
    t.expiredLanes &= e,
    t.mutableReadLanes &= e,
    t.entangledLanes &= e,
    e = t.entanglements;
    var r = t.eventTimes;
    for (t = t.expirationTimes; 0 < n; ) {
        var i = 31 - mt(n)
          , o = 1 << i;
        e[i] = 0,
        r[i] = -1,
        t[i] = -1,
        n &= ~o
    }
}
function ma(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
        var r = 31 - mt(n)
          , i = 1 << r;
        i & e | t[r] & e && (t[r] |= e),
        n &= ~i
    }
}
var U = 0;
function Of(t) {
    return t &= -t,
    1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var zf, ga, Mf, Rf, Df, hl = !1, Bi = [], Jt = null, bt = null, en = null, li = new Map, ai = new Map, Qt = [], nm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ju(t, e) {
    switch (t) {
    case "focusin":
    case "focusout":
        Jt = null;
        break;
    case "dragenter":
    case "dragleave":
        bt = null;
        break;
    case "mouseover":
    case "mouseout":
        en = null;
        break;
    case "pointerover":
    case "pointerout":
        li.delete(e.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        ai.delete(e.pointerId)
    }
}
function Rr(t, e, n, r, i, o) {
    return t === null || t.nativeEvent !== o ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    e !== null && (e = zi(e),
    e !== null && ga(e)),
    t) : (t.eventSystemFlags |= r,
    e = t.targetContainers,
    i !== null && e.indexOf(i) === -1 && e.push(i),
    t)
}
function rm(t, e, n, r, i) {
    switch (e) {
    case "focusin":
        return Jt = Rr(Jt, t, e, n, r, i),
        !0;
    case "dragenter":
        return bt = Rr(bt, t, e, n, r, i),
        !0;
    case "mouseover":
        return en = Rr(en, t, e, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return li.set(o, Rr(li.get(o) || null, t, e, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        ai.set(o, Rr(ai.get(o) || null, t, e, n, r, i)),
        !0
    }
    return !1
}
function If(t) {
    var e = Tn(t.target);
    if (e !== null) {
        var n = $n(e);
        if (n !== null) {
            if (e = n.tag,
            e === 13) {
                if (e = Sf(n),
                e !== null) {
                    t.blockedOn = e,
                    Df(t.priority, function() {
                        Mf(n)
                    });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}
function no(t) {
    if (t.blockedOn !== null)
        return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var n = pl(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var r = new n.constructor(n.type,n);
            al = r,
            n.target.dispatchEvent(r),
            al = null
        } else
            return e = zi(n),
            e !== null && ga(e),
            t.blockedOn = n,
            !1;
        e.shift()
    }
    return !0
}
function Ou(t, e, n) {
    no(t) && n.delete(e)
}
function im() {
    hl = !1,
    Jt !== null && no(Jt) && (Jt = null),
    bt !== null && no(bt) && (bt = null),
    en !== null && no(en) && (en = null),
    li.forEach(Ou),
    ai.forEach(Ou)
}
function Dr(t, e) {
    t.blockedOn === e && (t.blockedOn = null,
    hl || (hl = !0,
    Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, im)))
}
function ui(t) {
    function e(i) {
        return Dr(i, t)
    }
    if (0 < Bi.length) {
        Dr(Bi[0], t);
        for (var n = 1; n < Bi.length; n++) {
            var r = Bi[n];
            r.blockedOn === t && (r.blockedOn = null)
        }
    }
    for (Jt !== null && Dr(Jt, t),
    bt !== null && Dr(bt, t),
    en !== null && Dr(en, t),
    li.forEach(e),
    ai.forEach(e),
    n = 0; n < Qt.length; n++)
        r = Qt[n],
        r.blockedOn === t && (r.blockedOn = null);
    for (; 0 < Qt.length && (n = Qt[0],
    n.blockedOn === null); )
        If(n),
        n.blockedOn === null && Qt.shift()
}
var cr = Bt.ReactCurrentBatchConfig
  , wo = !0;
function om(t, e, n, r) {
    var i = U
      , o = cr.transition;
    cr.transition = null;
    try {
        U = 1,
        va(t, e, n, r)
    } finally {
        U = i,
        cr.transition = o
    }
}
function sm(t, e, n, r) {
    var i = U
      , o = cr.transition;
    cr.transition = null;
    try {
        U = 4,
        va(t, e, n, r)
    } finally {
        U = i,
        cr.transition = o
    }
}
function va(t, e, n, r) {
    if (wo) {
        var i = pl(t, e, n, r);
        if (i === null)
            Os(t, e, r, ko, n),
            ju(t, r);
        else if (rm(i, t, e, n, r))
            r.stopPropagation();
        else if (ju(t, r),
        e & 4 && -1 < nm.indexOf(t)) {
            for (; i !== null; ) {
                var o = zi(i);
                if (o !== null && zf(o),
                o = pl(t, e, n, r),
                o === null && Os(t, e, r, ko, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            Os(t, e, r, null, n)
    }
}
var ko = null;
function pl(t, e, n, r) {
    if (ko = null,
    t = ha(r),
    t = Tn(t),
    t !== null)
        if (e = $n(t),
        e === null)
            t = null;
        else if (n = e.tag,
        n === 13) {
            if (t = Sf(e),
            t !== null)
                return t;
            t = null
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null
        } else
            e !== t && (t = null);
    return ko = t,
    null
}
// function Lf(t) {
//     switch (t) {
//     case "cancel":
//     case "click":
//     case "close":
//     case "contextmenu":
//     case "copy":
//     case "cut":
//     case "auxclick":
//     case "dblclick":
//     case "dragend":
//     case "dragstart":
//     case "drop":
//     case "focusin":
//     case "focusout":
//     case "input":
//     case "invalid":
//     case "keydown":
//     case "keypress":
//     case "keyup":
//     case "mousedown":
//     case "mouseup":
//     case "paste":
//     case "pause":
//     case "play":
//     case "pointercancel":
//     case "pointerdown":
//     case "pointerup":
//     case "ratechange":
//     case "reset":
//     case "resize":
//     case "seeked":
//     case "submit":
//     case "touchcancel":
//     case "touchend":
//     case "touchstart":
//     case "volumechange":
//     case "change":
//     case "selectionchange":
//     case "textInput":
//     case "compositionstart":
//     case "compositionend":
//     case "compositionupdate":
//     case "beforeblur":
//     case "afterblur":
//     case "beforeinput":
//     case "blur":
//     case "fullscreenchange":
//     case "focus":
//     case "hashchange":
//     case "popstate":
//     case "select":
//     case "selectstart":
//         return 1;
//     case "drag":
//     case "dragenter":
//     case "dragexit":
//     case "dragleave":
//     case "dragover":
//     case "mousemove":
//     case "mouseout":
//     case "mouseover":
//     case "pointermove":
//     case "pointerout":
//     case "pointerover":
//     case "scroll":
//     case "toggle":
//     case "touchmove":
//     case "wheel":
//     case "mouseenter":
//     case "mouseleave":
//     case "pointerenter":
//     case "pointerleave":
//         return 4;
//     case "message":
//         switch (Yp()) {
//         case pa:
//             return 1;
//         case Pf:
//             return 4;
//         case _o:
//         case Xp:
//             return 16;
//         case Nf:
//             return 536870912;
//         default:
//             return 16
//         }
//     default:
//         return 16
//     }
// }
var Yt = null
  , ya = null
  , ro = null;
function Ff() {
    if (ro)
        return ro;
    var t, e = ya, n = e.length, r, i = "value"in Yt ? Yt.value : Yt.textContent, o = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++)
        ;
    var s = n - t;
    for (r = 1; r <= s && e[n - r] === i[o - r]; r++)
        ;
    return ro = i.slice(t, 1 < r ? 1 - r : void 0)
}
function io(t) {
    var e = t.keyCode;
    return "charCode"in t ? (t = t.charCode,
    t === 0 && e === 13 && (t = 13)) : t = e,
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
}
function Wi() {
    return !0
}
function zu() {
    return !1
}
function be(t) {
    function e(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var l in t)
            t.hasOwnProperty(l) && (n = t[l],
            this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Wi : zu,
        this.isPropagationStopped = zu,
        this
    }
    return ee(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Wi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Wi)
        },
        persist: function() {},
        isPersistent: Wi
    }),
    e
}
var jr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
        return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, _a = be(jr), Oi = ee({}, jr, {
    view: 0,
    detail: 0
}), lm = be(Oi), ws, ks, Ir, qo = ee({}, Oi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xa,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
    },
    movementX: function(t) {
        return "movementX"in t ? t.movementX : (t !== Ir && (Ir && t.type === "mousemove" ? (ws = t.screenX - Ir.screenX,
        ks = t.screenY - Ir.screenY) : ks = ws = 0,
        Ir = t),
        ws)
    },
    movementY: function(t) {
        return "movementY"in t ? t.movementY : ks
    }
}), Mu = be(qo), am = ee({}, qo, {
    dataTransfer: 0
}), um = be(am), cm = ee({}, Oi, {
    relatedTarget: 0
}), Ss = be(cm), fm = ee({}, jr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), dm = be(fm), hm = ee({}, jr, {
    clipboardData: function(t) {
        return "clipboardData"in t ? t.clipboardData : window.clipboardData
    }
}), pm = be(hm), mm = ee({}, jr, {
    data: 0
}), Ru = be(mm), gm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, vm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, ym = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function _m(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = ym[t]) ? !!e[t] : !1
}
function xa() {
    return _m
}
var xm = ee({}, Oi, {
    key: function(t) {
        if (t.key) {
            var e = gm[t.key] || t.key;
            if (e !== "Unidentified")
                return e
        }
        return t.type === "keypress" ? (t = io(t),
        t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? vm[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xa,
    charCode: function(t) {
        return t.type === "keypress" ? io(t) : 0
    },
    keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function(t) {
        return t.type === "keypress" ? io(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
})
  , wm = be(xm)
  , km = ee({}, qo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Du = be(km)
  , Sm = ee({}, Oi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xa
})
  , Tm = be(Sm)
  , Cm = ee({}, jr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Em = be(Cm)
  , Pm = ee({}, qo, {
    deltaX: function(t) {
        return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
    },
    deltaY: function(t) {
        return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Nm = be(Pm)
  , jm = [9, 13, 27, 32]
  , wa = It && "CompositionEvent"in window
  , Xr = null;
It && "documentMode"in document && (Xr = document.documentMode);
var Om = It && "TextEvent"in window && !Xr
  , Af = It && (!wa || Xr && 8 < Xr && 11 >= Xr)
  , Iu = " "
  , Lu = !1;
function Uf(t, e) {
    switch (t) {
    case "keyup":
        return jm.indexOf(e.keyCode) !== -1;
    case "keydown":
        return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Vf(t) {
    return t = t.detail,
    typeof t == "object" && "data"in t ? t.data : null
}
var Kn = !1;
function zm(t, e) {
    switch (t) {
    case "compositionend":
        return Vf(e);
    case "keypress":
        return e.which !== 32 ? null : (Lu = !0,
        Iu);
    case "textInput":
        return t = e.data,
        t === Iu && Lu ? null : t;
    default:
        return null
    }
}
function Mm(t, e) {
    if (Kn)
        return t === "compositionend" || !wa && Uf(t, e) ? (t = Ff(),
        ro = ya = Yt = null,
        Kn = !1,
        t) : null;
    switch (t) {
    case "paste":
        return null;
    case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
                return e.char;
            if (e.which)
                return String.fromCharCode(e.which)
        }
        return null;
    case "compositionend":
        return Af && e.locale !== "ko" ? null : e.data;
    default:
        return null
    }
}
var Rm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Fu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Rm[t.type] : e === "textarea"
}
function Bf(t, e, n, r) {
    yf(r),
    e = So(e, "onChange"),
    0 < e.length && (n = new _a("onChange","change",null,n,r),
    t.push({
        event: n,
        listeners: e
    }))
}
var Kr = null
  , ci = null;
function Dm(t) {
    Jf(t, 0)
}
function Jo(t) {
    var e = Jn(t);
    if (ff(e))
        return t
}
function Im(t, e) {
    if (t === "change")
        return e
}
var Wf = !1;
if (It) {
    var Ts;
    if (It) {
        var Cs = "oninput"in document;
        if (!Cs) {
            var Au = document.createElement("div");
            Au.setAttribute("oninput", "return;"),
            Cs = typeof Au.oninput == "function"
        }
        Ts = Cs
    } else
        Ts = !1;
    Wf = Ts && (!document.documentMode || 9 < document.documentMode)
}
function Uu() {
    Kr && (Kr.detachEvent("onpropertychange", $f),
    ci = Kr = null)
}
function $f(t) {
    if (t.propertyName === "value" && Jo(ci)) {
        var e = [];
        Bf(e, ci, t, ha(t)),
        kf(Dm, e)
    }
}
function Lm(t, e, n) {
    t === "focusin" ? (Uu(),
    Kr = e,
    ci = n,
    Kr.attachEvent("onpropertychange", $f)) : t === "focusout" && Uu()
}
function Fm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return Jo(ci)
}
function Am(t, e) {
    if (t === "click")
        return Jo(e)
}
function Um(t, e) {
    if (t === "input" || t === "change")
        return Jo(e)
}
function Vm(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var vt = typeof Object.is == "function" ? Object.is : Vm;
function fi(t, e) {
    if (vt(t, e))
        return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    var n = Object.keys(t)
      , r = Object.keys(e);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Zs.call(e, i) || !vt(t[i], e[i]))
            return !1
    }
    return !0
}
function Vu(t) {
    for (; t && t.firstChild; )
        t = t.firstChild;
    return t
}
function Bu(t, e) {
    var n = Vu(t);
    t = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = t + n.textContent.length,
            t <= e && r >= e)
                return {
                    node: n,
                    offset: e - t
                };
            t = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Vu(n)
    }
}
function Hf(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Hf(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}
function Qf() {
    for (var t = window, e = go(); e instanceof t.HTMLIFrameElement; ) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            t = e.contentWindow;
        else
            break;
        e = go(t.document)
    }
    return e
}
function ka(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}
function Bm(t) {
    var e = Qf()
      , n = t.focusedElem
      , r = t.selectionRange;
    if (e !== n && n && n.ownerDocument && Hf(n.ownerDocument.documentElement, n)) {
        if (r !== null && ka(n)) {
            if (e = r.start,
            t = r.end,
            t === void 0 && (t = e),
            "selectionStart"in n)
                n.selectionStart = e,
                n.selectionEnd = Math.min(t, n.value.length);
            else if (t = (e = n.ownerDocument || document) && e.defaultView || window,
            t.getSelection) {
                t = t.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !t.extend && o > r && (i = r,
                r = o,
                o = i),
                i = Bu(n, o);
                var s = Bu(n, r);
                i && s && (t.rangeCount !== 1 || t.anchorNode !== i.node || t.anchorOffset !== i.offset || t.focusNode !== s.node || t.focusOffset !== s.offset) && (e = e.createRange(),
                e.setStart(i.node, i.offset),
                t.removeAllRanges(),
                o > r ? (t.addRange(e),
                t.extend(s.node, s.offset)) : (e.setEnd(s.node, s.offset),
                t.addRange(e)))
            }
        }
        for (e = [],
        t = n; t = t.parentNode; )
            t.nodeType === 1 && e.push({
                element: t,
                left: t.scrollLeft,
                top: t.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < e.length; n++)
            t = e[n],
            t.element.scrollLeft = t.left,
            t.element.scrollTop = t.top
    }
}
var Wm = It && "documentMode"in document && 11 >= document.documentMode
  , Zn = null
  , ml = null
  , Zr = null
  , gl = !1;
function Wu(t, e, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    gl || Zn == null || Zn !== go(r) || (r = Zn,
    "selectionStart"in r && ka(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Zr && fi(Zr, r) || (Zr = r,
    r = So(ml, "onSelect"),
    0 < r.length && (e = new _a("onSelect","select",null,e,n),
    t.push({
        event: e,
        listeners: r
    }),
    e.target = Zn)))
}
function $i(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(),
    n["Webkit" + t] = "webkit" + e,
    n["Moz" + t] = "moz" + e,
    n
}
var qn = {
    animationend: $i("Animation", "AnimationEnd"),
    animationiteration: $i("Animation", "AnimationIteration"),
    animationstart: $i("Animation", "AnimationStart"),
    transitionend: $i("Transition", "TransitionEnd")
}
  , Es = {}
  , Gf = {};
It && (Gf = document.createElement("div").style,
"AnimationEvent"in window || (delete qn.animationend.animation,
delete qn.animationiteration.animation,
delete qn.animationstart.animation),
"TransitionEvent"in window || delete qn.transitionend.transition);
function bo(t) {
    if (Es[t])
        return Es[t];
    if (!qn[t])
        return t;
    var e = qn[t], n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in Gf)
            return Es[t] = e[n];
    return t
}
var Yf = bo("animationend")
  , Xf = bo("animationiteration")
  , Kf = bo("animationstart")
  , Zf = bo("transitionend")
  , qf = new Map
  , $u = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function hn(t, e) {
    qf.set(t, e),
    Wn(e, [t])
}
for (var Ps = 0; Ps < $u.length; Ps++) {
    var Ns = $u[Ps]
      , $m = Ns.toLowerCase()
      , Hm = Ns[0].toUpperCase() + Ns.slice(1);
    hn($m, "on" + Hm)
}
hn(Yf, "onAnimationEnd");
hn(Xf, "onAnimationIteration");
hn(Kf, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(Zf, "onTransitionEnd");
gr("onMouseEnter", ["mouseout", "mouseover"]);
gr("onMouseLeave", ["mouseout", "mouseover"]);
gr("onPointerEnter", ["pointerout", "pointerover"]);
gr("onPointerLeave", ["pointerout", "pointerover"]);
Wn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Wn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Wn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Wn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Qm = new Set("cancel close invalid load scroll toggle".split(" ").concat($r));
function Hu(t, e, n) {
    var r = t.type || "unknown-event";
    t.currentTarget = n,
    $p(r, e, void 0, t),
    t.currentTarget = null
}
function Jf(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var r = t[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (e)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    Hu(i, l, u),
                    o = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    Hu(i, l, u),
                    o = a
                }
        }
    }
    if (yo)
        throw t = fl,
        yo = !1,
        fl = null,
        t
}
function Q(t, e) {
    var n = e[wl];
    n === void 0 && (n = e[wl] = new Set);
    var r = t + "__bubble";
    n.has(r) || (bf(e, t, 2, !1),
    n.add(r))
}
function js(t, e, n) {
    var r = 0;
    e && (r |= 4),
    bf(n, t, r, e)
}
var Hi = "_reactListening" + Math.random().toString(36).slice(2);
function di(t) {
    if (!t[Hi]) {
        t[Hi] = !0,
        sf.forEach(function(n) {
            n !== "selectionchange" && (Qm.has(n) || js(n, !1, t),
            js(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Hi] || (e[Hi] = !0,
        js("selectionchange", !1, e))
    }
}
function bf(t, e, n, r) {
    switch (Lf(e)) {
    case 1:
        var i = om;
        break;
    case 4:
        i = sm;
        break;
    default:
        i = va
    }
    n = i.bind(null, e, n, t),
    i = void 0,
    !cl || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0),
    r ? i !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: i
    }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, {
        passive: i
    }) : t.addEventListener(e, n, !1)
}
function Os(t, e, n, r, i) {
    var o = r;
    if (!(e & 1) && !(e & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === i || a.nodeType === 8 && a.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = Tn(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = o = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    kf(function() {
        var u = o
          , c = ha(n)
          , f = [];
        e: {
            var h = qf.get(t);
            if (h !== void 0) {
                var v = _a
                  , _ = t;
                switch (t) {
                case "keypress":
                    if (io(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = wm;
                    break;
                case "focusin":
                    _ = "focus",
                    v = Ss;
                    break;
                case "focusout":
                    _ = "blur",
                    v = Ss;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = Ss;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    v = Mu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    v = um;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    v = Tm;
                    break;
                case Yf:
                case Xf:
                case Kf:
                    v = dm;
                    break;
                case Zf:
                    v = Em;
                    break;
                case "scroll":
                    v = lm;
                    break;
                case "wheel":
                    v = Nm;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    v = pm;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    v = Du
                }
                var p = (e & 4) !== 0
                  , k = !p && t === "scroll"
                  , m = p ? h !== null ? h + "Capture" : null : h;
                p = [];
                for (var d = u, g; d !== null; ) {
                    g = d;
                    var x = g.stateNode;
                    if (g.tag === 5 && x !== null && (g = x,
                    m !== null && (x = si(d, m),
                    x != null && p.push(hi(d, x, g)))),
                    k)
                        break;
                    d = d.return
                }
                0 < p.length && (h = new v(h,_,null,n,c),
                f.push({
                    event: h,
                    listeners: p
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (h = t === "mouseover" || t === "pointerover",
                v = t === "mouseout" || t === "pointerout",
                h && n !== al && (_ = n.relatedTarget || n.fromElement) && (Tn(_) || _[Lt]))
                    break e;
                if ((v || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window,
                v ? (_ = n.relatedTarget || n.toElement,
                v = u,
                _ = _ ? Tn(_) : null,
                _ !== null && (k = $n(_),
                _ !== k || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (v = null,
                _ = u),
                v !== _)) {
                    if (p = Mu,
                    x = "onMouseLeave",
                    m = "onMouseEnter",
                    d = "mouse",
                    (t === "pointerout" || t === "pointerover") && (p = Du,
                    x = "onPointerLeave",
                    m = "onPointerEnter",
                    d = "pointer"),
                    k = v == null ? h : Jn(v),
                    g = _ == null ? h : Jn(_),
                    h = new p(x,d + "leave",v,n,c),
                    h.target = k,
                    h.relatedTarget = g,
                    x = null,
                    Tn(c) === u && (p = new p(m,d + "enter",_,n,c),
                    p.target = g,
                    p.relatedTarget = k,
                    x = p),
                    k = x,
                    v && _)
                        t: {
                            for (p = v,
                            m = _,
                            d = 0,
                            g = p; g; g = Qn(g))
                                d++;
                            for (g = 0,
                            x = m; x; x = Qn(x))
                                g++;
                            for (; 0 < d - g; )
                                p = Qn(p),
                                d--;
                            for (; 0 < g - d; )
                                m = Qn(m),
                                g--;
                            for (; d--; ) {
                                if (p === m || m !== null && p === m.alternate)
                                    break t;
                                p = Qn(p),
                                m = Qn(m)
                            }
                            p = null
                        }
                    else
                        p = null;
                    v !== null && Qu(f, h, v, p, !1),
                    _ !== null && k !== null && Qu(f, k, _, p, !0)
                }
            }
            e: {
                if (h = u ? Jn(u) : window,
                v = h.nodeName && h.nodeName.toLowerCase(),
                v === "select" || v === "input" && h.type === "file")
                    var w = Im;
                else if (Fu(h))
                    if (Wf)
                        w = Um;
                    else {
                        w = Fm;
                        var S = Lm
                    }
                else
                    (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (w = Am);
                if (w && (w = w(t, u))) {
                    Bf(f, w, n, c);
                    break e
                }
                S && S(t, h, u),
                t === "focusout" && (S = h._wrapperState) && S.controlled && h.type === "number" && rl(h, "number", h.value)
            }
            switch (S = u ? Jn(u) : window,
            t) {
            case "focusin":
                (Fu(S) || S.contentEditable === "true") && (Zn = S,
                ml = u,
                Zr = null);
                break;
            case "focusout":
                Zr = ml = Zn = null;
                break;
            case "mousedown":
                gl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                gl = !1,
                Wu(f, n, c);
                break;
            case "selectionchange":
                if (Wm)
                    break;
            case "keydown":
            case "keyup":
                Wu(f, n, c)
            }
            var T;
            if (wa)
                e: {
                    switch (t) {
                    case "compositionstart":
                        var C = "onCompositionStart";
                        break e;
                    case "compositionend":
                        C = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        C = "onCompositionUpdate";
                        break e
                    }
                    C = void 0
                }
            else
                Kn ? Uf(t, n) && (C = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
            C && (Af && n.locale !== "ko" && (Kn || C !== "onCompositionStart" ? C === "onCompositionEnd" && Kn && (T = Ff()) : (Yt = c,
            ya = "value"in Yt ? Yt.value : Yt.textContent,
            Kn = !0)),
            S = So(u, C),
            0 < S.length && (C = new Ru(C,t,null,n,c),
            f.push({
                event: C,
                listeners: S
            }),
            T ? C.data = T : (T = Vf(n),
            T !== null && (C.data = T)))),
            (T = Om ? zm(t, n) : Mm(t, n)) && (u = So(u, "onBeforeInput"),
            0 < u.length && (c = new Ru("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = T))
        }
        Jf(f, e)
    })
}
function hi(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}
function So(t, e) {
    for (var n = e + "Capture", r = []; t !== null; ) {
        var i = t
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = si(t, n),
        o != null && r.unshift(hi(t, o, i)),
        o = si(t, e),
        o != null && r.push(hi(t, o, i))),
        t = t.return
    }
    return r
}
function Qn(t) {
    if (t === null)
        return null;
    do
        t = t.return;
    while (t && t.tag !== 5);
    return t || null
}
function Qu(t, e, n, r, i) {
    for (var o = e._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        i ? (a = si(n, o),
        a != null && s.unshift(hi(n, a, l))) : i || (a = si(n, o),
        a != null && s.push(hi(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && t.push({
        event: e,
        listeners: s
    })
}
var Gm = /\r\n?/g
  , Ym = /\u0000|\uFFFD/g;
function Gu(t) {
    return (typeof t == "string" ? t : "" + t).replace(Gm, `
`).replace(Ym, "")
}
function Qi(t, e, n) {
    if (e = Gu(e),
    Gu(t) !== e && n)
        throw Error(P(425))
}
function To() {}
var vl = null
  , yl = null;
function _l(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var xl = typeof setTimeout == "function" ? setTimeout : void 0
  , Xm = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Yu = typeof Promise == "function" ? Promise : void 0
  , Km = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yu < "u" ? function(t) {
    return Yu.resolve(null).then(t).catch(Zm)
}
: xl;
function Zm(t) {
    setTimeout(function() {
        throw t
    })
}
function zs(t, e) {
    var n = e
      , r = 0;
    do {
        var i = n.nextSibling;
        if (t.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    t.removeChild(i),
                    ui(e);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    ui(e)
}
function tn(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3)
            break;
        if (e === 8) {
            if (e = t.data,
            e === "$" || e === "$!" || e === "$?")
                break;
            if (e === "/$")
                return null
        }
    }
    return t
}
function Xu(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0)
                    return t;
                e--
            } else
                n === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var Or = Math.random().toString(36).slice(2)
  , wt = "__reactFiber$" + Or
  , pi = "__reactProps$" + Or
  , Lt = "__reactContainer$" + Or
  , wl = "__reactEvents$" + Or
  , qm = "__reactListeners$" + Or
  , Jm = "__reactHandles$" + Or;
function Tn(t) {
    var e = t[wt];
    if (e)
        return e;
    for (var n = t.parentNode; n; ) {
        if (e = n[Lt] || n[wt]) {
            if (n = e.alternate,
            e.child !== null || n !== null && n.child !== null)
                for (t = Xu(t); t !== null; ) {
                    if (n = t[wt])
                        return n;
                    t = Xu(t)
                }
            return e
        }
        t = n,
        n = t.parentNode
    }
    return null
}
function zi(t) {
    return t = t[wt] || t[Lt],
    !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}
function Jn(t) {
    if (t.tag === 5 || t.tag === 6)
        return t.stateNode;
    throw Error(P(33))
}
function es(t) {
    return t[pi] || null
}
var kl = []
  , bn = -1;
function pn(t) {
    return {
        current: t
    }
}
function G(t) {
    0 > bn || (t.current = kl[bn],
    kl[bn] = null,
    bn--)
}
function H(t, e) {
    bn++,
    kl[bn] = t.current,
    t.current = e
}
var cn = {}
  , Ee = pn(cn)
  , De = pn(!1)
  , In = cn;
function vr(t, e) {
    var n = t.type.contextTypes;
    if (!n)
        return cn;
    var r = t.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = e[o];
    return r && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = e,
    t.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Ie(t) {
    return t = t.childContextTypes,
    t != null
}
function Co() {
    G(De),
    G(Ee)
}
function Ku(t, e, n) {
    if (Ee.current !== cn)
        throw Error(P(168));
    H(Ee, e),
    H(De, n)
}
function ed(t, e, n) {
    var r = t.stateNode;
    if (e = e.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in e))
            throw Error(P(108, Lp(t) || "Unknown", i));
    return ee({}, n, r)
}
function Eo(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || cn,
    In = Ee.current,
    H(Ee, t),
    H(De, De.current),
    !0
}
function Zu(t, e, n) {
    var r = t.stateNode;
    if (!r)
        throw Error(P(169));
    n ? (t = ed(t, e, In),
    r.__reactInternalMemoizedMergedChildContext = t,
    G(De),
    G(Ee),
    H(Ee, t)) : G(De),
    H(De, n)
}
var Ot = null
  , ts = !1
  , Ms = !1;
function td(t) {
    Ot === null ? Ot = [t] : Ot.push(t)
}
function bm(t) {
    ts = !0,
    td(t)
}
function mn() {
    if (!Ms && Ot !== null) {
        Ms = !0;
        var t = 0
          , e = U;
        try {
            var n = Ot;
            for (U = 1; t < n.length; t++) {
                var r = n[t];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ot = null,
            ts = !1
        } catch (i) {
            throw Ot !== null && (Ot = Ot.slice(t + 1)),
            Ef(pa, mn),
            i
        } finally {
            U = e,
            Ms = !1
        }
    }
    return null
}
var er = []
  , tr = 0
  , Po = null
  , No = 0
  , tt = []
  , nt = 0
  , Ln = null
  , Mt = 1
  , Rt = "";
function wn(t, e) {
    er[tr++] = No,
    er[tr++] = Po,
    Po = t,
    No = e
}
function nd(t, e, n) {
    tt[nt++] = Mt,
    tt[nt++] = Rt,
    tt[nt++] = Ln,
    Ln = t;
    var r = Mt;
    t = Rt;
    var i = 32 - mt(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - mt(e) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        Mt = 1 << 32 - mt(e) + i | n << i | r,
        Rt = o + t
    } else
        Mt = 1 << o | n << i | r,
        Rt = t
}
function Sa(t) {
    t.return !== null && (wn(t, 1),
    nd(t, 1, 0))
}
function Ta(t) {
    for (; t === Po; )
        Po = er[--tr],
        er[tr] = null,
        No = er[--tr],
        er[tr] = null;
    for (; t === Ln; )
        Ln = tt[--nt],
        tt[nt] = null,
        Rt = tt[--nt],
        tt[nt] = null,
        Mt = tt[--nt],
        tt[nt] = null
}
var Xe = null
  , Qe = null
  , X = !1
  , pt = null;
function rd(t, e) {
    var n = rt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = e,
    n.return = t,
    e = t.deletions,
    e === null ? (t.deletions = [n],
    t.flags |= 16) : e.push(n)
}
function qu(t, e) {
    switch (t.tag) {
    case 5:
        var n = t.type;
        return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e,
        e !== null ? (t.stateNode = e,
        Xe = t,
        Qe = tn(e.firstChild),
        !0) : !1;
    case 6:
        return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e,
        e !== null ? (t.stateNode = e,
        Xe = t,
        Qe = null,
        !0) : !1;
    case 13:
        return e = e.nodeType !== 8 ? null : e,
        e !== null ? (n = Ln !== null ? {
            id: Mt,
            overflow: Rt
        } : null,
        t.memoizedState = {
            dehydrated: e,
            treeContext: n,
            retryLane: 1073741824
        },
        n = rt(18, null, null, 0),
        n.stateNode = e,
        n.return = t,
        t.child = n,
        Xe = t,
        Qe = null,
        !0) : !1;
    default:
        return !1
    }
}
function Sl(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function Tl(t) {
    if (X) {
        var e = Qe;
        if (e) {
            var n = e;
            if (!qu(t, e)) {
                if (Sl(t))
                    throw Error(P(418));
                e = tn(n.nextSibling);
                var r = Xe;
                e && qu(t, e) ? rd(r, n) : (t.flags = t.flags & -4097 | 2,
                X = !1,
                Xe = t)
            }
        } else {
            if (Sl(t))
                throw Error(P(418));
            t.flags = t.flags & -4097 | 2,
            X = !1,
            Xe = t
        }
    }
}
function Ju(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
        t = t.return;
    Xe = t
}
function Gi(t) {
    if (t !== Xe)
        return !1;
    if (!X)
        return Ju(t),
        X = !0,
        !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type,
    e = e !== "head" && e !== "body" && !_l(t.type, t.memoizedProps)),
    e && (e = Qe)) {
        if (Sl(t))
            throw id(),
            Error(P(418));
        for (; e; )
            rd(t, e),
            e = tn(e.nextSibling)
    }
    if (Ju(t),
    t.tag === 13) {
        if (t = t.memoizedState,
        t = t !== null ? t.dehydrated : null,
        !t)
            throw Error(P(317));
        e: {
            for (t = t.nextSibling,
            e = 0; t; ) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            Qe = tn(t.nextSibling);
                            break e
                        }
                        e--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            Qe = null
        }
    } else
        Qe = Xe ? tn(t.stateNode.nextSibling) : null;
    return !0
}
function id() {
    for (var t = Qe; t; )
        t = tn(t.nextSibling)
}
function yr() {
    Qe = Xe = null,
    X = !1
}
function Ca(t) {
    pt === null ? pt = [t] : pt.push(t)
}
var e0 = Bt.ReactCurrentBatchConfig;
function Lr(t, e, n) {
    if (t = n.ref,
    t !== null && typeof t != "function" && typeof t != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(P(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(P(147, t));
            var i = r
              , o = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === o ? e.ref : (e = function(s) {
                var l = i.refs;
                s === null ? delete l[o] : l[o] = s
            }
            ,
            e._stringRef = o,
            e)
        }
        if (typeof t != "string")
            throw Error(P(284));
        if (!n._owner)
            throw Error(P(290, t))
    }
    return t
}
function Yi(t, e) {
    throw t = Object.prototype.toString.call(e),
    Error(P(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}
function bu(t) {
    var e = t._init;
    return e(t._payload)
}
function od(t) {
    function e(m, d) {
        if (t) {
            var g = m.deletions;
            g === null ? (m.deletions = [d],
            m.flags |= 16) : g.push(d)
        }
    }
    function n(m, d) {
        if (!t)
            return null;
        for (; d !== null; )
            e(m, d),
            d = d.sibling;
        return null
    }
    function r(m, d) {
        for (m = new Map; d !== null; )
            d.key !== null ? m.set(d.key, d) : m.set(d.index, d),
            d = d.sibling;
        return m
    }
    function i(m, d) {
        return m = sn(m, d),
        m.index = 0,
        m.sibling = null,
        m
    }
    function o(m, d, g) {
        return m.index = g,
        t ? (g = m.alternate,
        g !== null ? (g = g.index,
        g < d ? (m.flags |= 2,
        d) : g) : (m.flags |= 2,
        d)) : (m.flags |= 1048576,
        d)
    }
    function s(m) {
        return t && m.alternate === null && (m.flags |= 2),
        m
    }
    function l(m, d, g, x) {
        return d === null || d.tag !== 6 ? (d = Us(g, m.mode, x),
        d.return = m,
        d) : (d = i(d, g),
        d.return = m,
        d)
    }
    function a(m, d, g, x) {
        var w = g.type;
        return w === Xn ? c(m, d, g.props.children, x, g.key) : d !== null && (d.elementType === w || typeof w == "object" && w !== null && w.$$typeof === $t && bu(w) === d.type) ? (x = i(d, g.props),
        x.ref = Lr(m, d, g),
        x.return = m,
        x) : (x = fo(g.type, g.key, g.props, null, m.mode, x),
        x.ref = Lr(m, d, g),
        x.return = m,
        x)
    }
    function u(m, d, g, x) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== g.containerInfo || d.stateNode.implementation !== g.implementation ? (d = Vs(g, m.mode, x),
        d.return = m,
        d) : (d = i(d, g.children || []),
        d.return = m,
        d)
    }
    function c(m, d, g, x, w) {
        return d === null || d.tag !== 7 ? (d = On(g, m.mode, x, w),
        d.return = m,
        d) : (d = i(d, g),
        d.return = m,
        d)
    }
    function f(m, d, g) {
        if (typeof d == "string" && d !== "" || typeof d == "number")
            return d = Us("" + d, m.mode, g),
            d.return = m,
            d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case Li:
                return g = fo(d.type, d.key, d.props, null, m.mode, g),
                g.ref = Lr(m, null, d),
                g.return = m,
                g;
            case Yn:
                return d = Vs(d, m.mode, g),
                d.return = m,
                d;
            case $t:
                var x = d._init;
                return f(m, x(d._payload), g)
            }
            if (Br(d) || zr(d))
                return d = On(d, m.mode, g, null),
                d.return = m,
                d;
            Yi(m, d)
        }
        return null
    }
    function h(m, d, g, x) {
        var w = d !== null ? d.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return w !== null ? null : l(m, d, "" + g, x);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Li:
                return g.key === w ? a(m, d, g, x) : null;
            case Yn:
                return g.key === w ? u(m, d, g, x) : null;
            case $t:
                return w = g._init,
                h(m, d, w(g._payload), x)
            }
            if (Br(g) || zr(g))
                return w !== null ? null : c(m, d, g, x, null);
            Yi(m, g)
        }
        return null
    }
    function v(m, d, g, x, w) {
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return m = m.get(g) || null,
            l(d, m, "" + x, w);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Li:
                return m = m.get(x.key === null ? g : x.key) || null,
                a(d, m, x, w);
            case Yn:
                return m = m.get(x.key === null ? g : x.key) || null,
                u(d, m, x, w);
            case $t:
                var S = x._init;
                return v(m, d, g, S(x._payload), w)
            }
            if (Br(x) || zr(x))
                return m = m.get(g) || null,
                c(d, m, x, w, null);
            Yi(d, x)
        }
        return null
    }
    function _(m, d, g, x) {
        for (var w = null, S = null, T = d, C = d = 0, E = null; T !== null && C < g.length; C++) {
            T.index > C ? (E = T,
            T = null) : E = T.sibling;
            var j = h(m, T, g[C], x);
            if (j === null) {
                T === null && (T = E);
                break
            }
            t && T && j.alternate === null && e(m, T),
            d = o(j, d, C),
            S === null ? w = j : S.sibling = j,
            S = j,
            T = E
        }
        if (C === g.length)
            return n(m, T),
            X && wn(m, C),
            w;
        if (T === null) {
            for (; C < g.length; C++)
                T = f(m, g[C], x),
                T !== null && (d = o(T, d, C),
                S === null ? w = T : S.sibling = T,
                S = T);
            return X && wn(m, C),
            w
        }
        for (T = r(m, T); C < g.length; C++)
            E = v(T, m, C, g[C], x),
            E !== null && (t && E.alternate !== null && T.delete(E.key === null ? C : E.key),
            d = o(E, d, C),
            S === null ? w = E : S.sibling = E,
            S = E);
        return t && T.forEach(function(D) {
            return e(m, D)
        }),
        X && wn(m, C),
        w
    }
    function p(m, d, g, x) {
        var w = zr(g);
        if (typeof w != "function")
            throw Error(P(150));
        if (g = w.call(g),
        g == null)
            throw Error(P(151));
        for (var S = w = null, T = d, C = d = 0, E = null, j = g.next(); T !== null && !j.done; C++,
        j = g.next()) {
            T.index > C ? (E = T,
            T = null) : E = T.sibling;
            var D = h(m, T, j.value, x);
            if (D === null) {
                T === null && (T = E);
                break
            }
            t && T && D.alternate === null && e(m, T),
            d = o(D, d, C),
            S === null ? w = D : S.sibling = D,
            S = D,
            T = E
        }
        if (j.done)
            return n(m, T),
            X && wn(m, C),
            w;
        if (T === null) {
            for (; !j.done; C++,
            j = g.next())
                j = f(m, j.value, x),
                j !== null && (d = o(j, d, C),
                S === null ? w = j : S.sibling = j,
                S = j);
            return X && wn(m, C),
            w
        }
        for (T = r(m, T); !j.done; C++,
        j = g.next())
            j = v(T, m, C, j.value, x),
            j !== null && (t && j.alternate !== null && T.delete(j.key === null ? C : j.key),
            d = o(j, d, C),
            S === null ? w = j : S.sibling = j,
            S = j);
        return t && T.forEach(function(F) {
            return e(m, F)
        }),
        X && wn(m, C),
        w
    }
    function k(m, d, g, x) {
        if (typeof g == "object" && g !== null && g.type === Xn && g.key === null && (g = g.props.children),
        typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Li:
                e: {
                    for (var w = g.key, S = d; S !== null; ) {
                        if (S.key === w) {
                            if (w = g.type,
                            w === Xn) {
                                if (S.tag === 7) {
                                    n(m, S.sibling),
                                    d = i(S, g.props.children),
                                    d.return = m,
                                    m = d;
                                    break e
                                }
                            } else if (S.elementType === w || typeof w == "object" && w !== null && w.$$typeof === $t && bu(w) === S.type) {
                                n(m, S.sibling),
                                d = i(S, g.props),
                                d.ref = Lr(m, S, g),
                                d.return = m,
                                m = d;
                                break e
                            }
                            n(m, S);
                            break
                        } else
                            e(m, S);
                        S = S.sibling
                    }
                    g.type === Xn ? (d = On(g.props.children, m.mode, x, g.key),
                    d.return = m,
                    m = d) : (x = fo(g.type, g.key, g.props, null, m.mode, x),
                    x.ref = Lr(m, d, g),
                    x.return = m,
                    m = x)
                }
                return s(m);
            case Yn:
                e: {
                    for (S = g.key; d !== null; ) {
                        if (d.key === S)
                            if (d.tag === 4 && d.stateNode.containerInfo === g.containerInfo && d.stateNode.implementation === g.implementation) {
                                n(m, d.sibling),
                                d = i(d, g.children || []),
                                d.return = m,
                                m = d;
                                break e
                            } else {
                                n(m, d);
                                break
                            }
                        else
                            e(m, d);
                        d = d.sibling
                    }
                    d = Vs(g, m.mode, x),
                    d.return = m,
                    m = d
                }
                return s(m);
            case $t:
                return S = g._init,
                k(m, d, S(g._payload), x)
            }
            if (Br(g))
                return _(m, d, g, x);
            if (zr(g))
                return p(m, d, g, x);
            Yi(m, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g,
        d !== null && d.tag === 6 ? (n(m, d.sibling),
        d = i(d, g),
        d.return = m,
        m = d) : (n(m, d),
        d = Us(g, m.mode, x),
        d.return = m,
        m = d),
        s(m)) : n(m, d)
    }
    return k
}
var _r = od(!0)
  , sd = od(!1)
  , jo = pn(null)
  , Oo = null
  , nr = null
  , Ea = null;
function Pa() {
    Ea = nr = Oo = null
}
function Na(t) {
    var e = jo.current;
    G(jo),
    t._currentValue = e
}
function Cl(t, e, n) {
    for (; t !== null; ) {
        var r = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e,
        r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
        t === n)
            break;
        t = t.return
    }
}
function fr(t, e) {
    Oo = t,
    Ea = nr = null,
    t = t.dependencies,
    t !== null && t.firstContext !== null && (t.lanes & e && (Re = !0),
    t.firstContext = null)
}
function lt(t) {
    var e = t._currentValue;
    if (Ea !== t)
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        nr === null) {
            if (Oo === null)
                throw Error(P(308));
            nr = t,
            Oo.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else
            nr = nr.next = t;
    return e
}
var Cn = null;
function ja(t) {
    Cn === null ? Cn = [t] : Cn.push(t)
}
function ld(t, e, n, r) {
    var i = e.interleaved;
    return i === null ? (n.next = n,
    ja(e)) : (n.next = i.next,
    i.next = n),
    e.interleaved = n,
    Ft(t, r)
}
function Ft(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e),
    n = t,
    t = t.return; t !== null; )
        t.childLanes |= e,
        n = t.alternate,
        n !== null && (n.childLanes |= e),
        n = t,
        t = t.return;
    return n.tag === 3 ? n.stateNode : null
}
var Ht = !1;
function Oa(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function ad(t, e) {
    t = t.updateQueue,
    e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}
function Dt(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function nn(t, e, n) {
    var r = t.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    L & 2) {
        var i = r.pending;
        return i === null ? e.next = e : (e.next = i.next,
        i.next = e),
        r.pending = e,
        Ft(t, n)
    }
    return i = r.interleaved,
    i === null ? (e.next = e,
    ja(r)) : (e.next = i.next,
    i.next = e),
    r.interleaved = e,
    Ft(t, n)
}
function oo(t, e, n) {
    if (e = e.updateQueue,
    e !== null && (e = e.shared,
    (n & 4194240) !== 0)) {
        var r = e.lanes;
        r &= t.pendingLanes,
        n |= r,
        e.lanes = n,
        ma(t, n)
    }
}
function ec(t, e) {
    var n = t.updateQueue
      , r = t.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = e : o = o.next = e
        } else
            i = o = e;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate,
    t === null ? n.firstBaseUpdate = e : t.next = e,
    n.lastBaseUpdate = e
}
function zo(t, e, n, r) {
    var i = t.updateQueue;
    Ht = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? o = u : s.next = u,
        s = a;
        var c = t.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0,
        c = u = a = null,
        l = o;
        do {
            var h = l.lane
              , v = l.eventTime;
            if ((r & h) === h) {
                c !== null && (c = c.next = {
                    eventTime: v,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var _ = t
                      , p = l;
                    switch (h = e,
                    v = n,
                    p.tag) {
                    case 1:
                        if (_ = p.payload,
                        typeof _ == "function") {
                            f = _.call(v, f, h);
                            break e
                        }
                        f = _;
                        break e;
                    case 3:
                        _.flags = _.flags & -65537 | 128;
                    case 0:
                        if (_ = p.payload,
                        h = typeof _ == "function" ? _.call(v, f, h) : _,
                        h == null)
                            break e;
                        f = ee({}, f, h);
                        break e;
                    case 2:
                        Ht = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (t.flags |= 64,
                h = i.effects,
                h === null ? i.effects = [l] : h.push(l))
            } else
                v = {
                    eventTime: v,
                    lane: h,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = v,
                a = f) : c = c.next = v,
                s |= h;
            if (l = l.next,
            l === null) {
                if (l = i.shared.pending,
                l === null)
                    break;
                h = l,
                l = h.next,
                h.next = null,
                i.lastBaseUpdate = h,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = f),
        i.baseState = a,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        e = i.shared.interleaved,
        e !== null) {
            i = e;
            do
                s |= i.lane,
                i = i.next;
            while (i !== e)
        } else
            o === null && (i.shared.lanes = 0);
        An |= s,
        t.lanes = s,
        t.memoizedState = f
    }
}
function tc(t, e, n) {
    if (t = e.effects,
    e.effects = null,
    t !== null)
        for (e = 0; e < t.length; e++) {
            var r = t[e]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(P(191, i));
                i.call(r)
            }
        }
}
var Mi = {}
  , Ct = pn(Mi)
  , mi = pn(Mi)
  , gi = pn(Mi);
function En(t) {
    if (t === Mi)
        throw Error(P(174));
    return t
}
function za(t, e) {
    switch (H(gi, e),
    H(mi, t),
    H(Ct, Mi),
    t = e.nodeType,
    t) {
    case 9:
    case 11:
        e = (e = e.documentElement) ? e.namespaceURI : ol(null, "");
        break;
    default:
        t = t === 8 ? e.parentNode : e,
        e = t.namespaceURI || null,
        t = t.tagName,
        e = ol(e, t)
    }
    G(Ct),
    H(Ct, e)
}
function xr() {
    G(Ct),
    G(mi),
    G(gi)
}
function ud(t) {
    En(gi.current);
    var e = En(Ct.current)
      , n = ol(e, t.type);
    e !== n && (H(mi, t),
    H(Ct, n))
}
function Ma(t) {
    mi.current === t && (G(Ct),
    G(mi))
}
var Z = pn(0);
function Mo(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128)
                return e
        } else if (e.child !== null) {
            e.child.return = e,
            e = e.child;
            continue
        }
        if (e === t)
            break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
                return null;
            e = e.return
        }
        e.sibling.return = e.return,
        e = e.sibling
    }
    return null
}
var Rs = [];
function Ra() {
    for (var t = 0; t < Rs.length; t++)
        Rs[t]._workInProgressVersionPrimary = null;
    Rs.length = 0
}
var so = Bt.ReactCurrentDispatcher
  , Ds = Bt.ReactCurrentBatchConfig
  , Fn = 0
  , b = null
  , ce = null
  , de = null
  , Ro = !1
  , qr = !1
  , vi = 0
  , t0 = 0;
function xe() {
    throw Error(P(321))
}
function Da(t, e) {
    if (e === null)
        return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!vt(t[n], e[n]))
            return !1;
    return !0
}
function Ia(t, e, n, r, i, o) {
    if (Fn = o,
    b = e,
    e.memoizedState = null,
    e.updateQueue = null,
    e.lanes = 0,
    so.current = t === null || t.memoizedState === null ? o0 : s0,
    t = n(r, i),
    qr) {
        o = 0;
        do {
            if (qr = !1,
            vi = 0,
            25 <= o)
                throw Error(P(301));
            o += 1,
            de = ce = null,
            e.updateQueue = null,
            so.current = l0,
            t = n(r, i)
        } while (qr)
    }
    if (so.current = Do,
    e = ce !== null && ce.next !== null,
    Fn = 0,
    de = ce = b = null,
    Ro = !1,
    e)
        throw Error(P(300));
    return t
}
function La() {
    var t = vi !== 0;
    return vi = 0,
    t
}
function _t() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return de === null ? b.memoizedState = de = t : de = de.next = t,
    de
}
function at() {
    if (ce === null) {
        var t = b.alternate;
        t = t !== null ? t.memoizedState : null
    } else
        t = ce.next;
    var e = de === null ? b.memoizedState : de.next;
    if (e !== null)
        de = e,
        ce = t;
    else {
        if (t === null)
            throw Error(P(310));
        ce = t,
        t = {
            memoizedState: ce.memoizedState,
            baseState: ce.baseState,
            baseQueue: ce.baseQueue,
            queue: ce.queue,
            next: null
        },
        de === null ? b.memoizedState = de = t : de = de.next = t
    }
    return de
}
function yi(t, e) {
    return typeof e == "function" ? e(t) : e
}
function Is(t) {
    var e = at()
      , n = e.queue;
    if (n === null)
        throw Error(P(311));
    n.lastRenderedReducer = t;
    var r = ce
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = o;
        do {
            var c = u.lane;
            if ((Fn & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : t(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f,
                s = r) : a = a.next = f,
                b.lanes |= c,
                An |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? s = r : a.next = l,
        vt(r, e.memoizedState) || (Re = !0),
        e.memoizedState = r,
        e.baseState = s,
        e.baseQueue = a,
        n.lastRenderedState = r
    }
    if (t = n.interleaved,
    t !== null) {
        i = t;
        do
            o = i.lane,
            b.lanes |= o,
            An |= o,
            i = i.next;
        while (i !== t)
    } else
        i === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}
function Ls(t) {
    var e = at()
      , n = e.queue;
    if (n === null)
        throw Error(P(311));
    n.lastRenderedReducer = t;
    var r = n.dispatch
      , i = n.pending
      , o = e.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = t(o, s.action),
            s = s.next;
        while (s !== i);
        vt(o, e.memoizedState) || (Re = !0),
        e.memoizedState = o,
        e.baseQueue === null && (e.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function cd() {}
function fd(t, e) {
    var n = b
      , r = at()
      , i = e()
      , o = !vt(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    Re = !0),
    r = r.queue,
    Fa(pd.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || o || de !== null && de.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        _i(9, hd.bind(null, n, r, i, e), void 0, null),
        pe === null)
            throw Error(P(349));
        Fn & 30 || dd(n, e, i)
    }
    return i
}
function dd(t, e, n) {
    t.flags |= 16384,
    t = {
        getSnapshot: e,
        value: n
    },
    e = b.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    b.updateQueue = e,
    e.stores = [t]) : (n = e.stores,
    n === null ? e.stores = [t] : n.push(t))
}
function hd(t, e, n, r) {
    e.value = n,
    e.getSnapshot = r,
    md(e) && gd(t)
}
function pd(t, e, n) {
    return n(function() {
        md(e) && gd(t)
    })
}
function md(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !vt(t, n)
    } catch {
        return !0
    }
}
function gd(t) {
    var e = Ft(t, 1);
    e !== null && gt(e, t, 1, -1)
}
function nc(t) {
    var e = _t();
    return typeof t == "function" && (t = t()),
    e.memoizedState = e.baseState = t,
    t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yi,
        lastRenderedState: t
    },
    e.queue = t,
    t = t.dispatch = i0.bind(null, b, t),
    [e.memoizedState, t]
}
function _i(t, e, n, r) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: r,
        next: null
    },
    e = b.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    b.updateQueue = e,
    e.lastEffect = t.next = t) : (n = e.lastEffect,
    n === null ? e.lastEffect = t.next = t : (r = n.next,
    n.next = t,
    t.next = r,
    e.lastEffect = t)),
    t
}
function vd() {
    return at().memoizedState
}
function lo(t, e, n, r) {
    var i = _t();
    b.flags |= t,
    i.memoizedState = _i(1 | e, n, void 0, r === void 0 ? null : r)
}
function ns(t, e, n, r) {
    var i = at();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ce !== null) {
        var s = ce.memoizedState;
        if (o = s.destroy,
        r !== null && Da(r, s.deps)) {
            i.memoizedState = _i(e, n, o, r);
            return
        }
    }
    b.flags |= t,
    i.memoizedState = _i(1 | e, n, o, r)
}
function rc(t, e) {
    return lo(8390656, 8, t, e)
}
function Fa(t, e) {
    return ns(2048, 8, t, e)
}
function yd(t, e) {
    return ns(4, 2, t, e)
}
function _d(t, e) {
    return ns(4, 4, t, e)
}
function xd(t, e) {
    if (typeof e == "function")
        return t = t(),
        e(t),
        function() {
            e(null)
        }
        ;
    if (e != null)
        return t = t(),
        e.current = t,
        function() {
            e.current = null
        }
}
function wd(t, e, n) {
    return n = n != null ? n.concat([t]) : null,
    ns(4, 4, xd.bind(null, e, t), n)
}
function Aa() {}
function kd(t, e) {
    var n = at();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && Da(e, r[1]) ? r[0] : (n.memoizedState = [t, e],
    t)
}
function Sd(t, e) {
    var n = at();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && Da(e, r[1]) ? r[0] : (t = t(),
    n.memoizedState = [t, e],
    t)
}
function Td(t, e, n) {
    return Fn & 21 ? (vt(n, e) || (n = jf(),
    b.lanes |= n,
    An |= n,
    t.baseState = !0),
    e) : (t.baseState && (t.baseState = !1,
    Re = !0),
    t.memoizedState = n)
}
function n0(t, e) {
    var n = U;
    U = n !== 0 && 4 > n ? n : 4,
    t(!0);
    var r = Ds.transition;
    Ds.transition = {};
    try {
        t(!1),
        e()
    } finally {
        U = n,
        Ds.transition = r
    }
}
function Cd() {
    return at().memoizedState
}
function r0(t, e, n) {
    var r = on(t);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Ed(t))
        Pd(e, n);
    else if (n = ld(t, e, n, r),
    n !== null) {
        var i = je();
        gt(n, t, r, i),
        Nd(n, e, r)
    }
}
function i0(t, e, n) {
    var r = on(t)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Ed(t))
        Pd(e, i);
    else {
        var o = t.alternate;
        if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer,
        o !== null))
            try {
                var s = e.lastRenderedState
                  , l = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = l,
                vt(l, s)) {
                    var a = e.interleaved;
                    a === null ? (i.next = i,
                    ja(e)) : (i.next = a.next,
                    a.next = i),
                    e.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = ld(t, e, i, r),
        n !== null && (i = je(),
        gt(n, t, r, i),
        Nd(n, e, r))
    }
}
function Ed(t) {
    var e = t.alternate;
    return t === b || e !== null && e === b
}
function Pd(t, e) {
    qr = Ro = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next,
    n.next = e),
    t.pending = e
}
function Nd(t, e, n) {
    if (n & 4194240) {
        var r = e.lanes;
        r &= t.pendingLanes,
        n |= r,
        e.lanes = n,
        ma(t, n)
    }
}
var Do = {
    readContext: lt,
    useCallback: xe,
    useContext: xe,
    useEffect: xe,
    useImperativeHandle: xe,
    useInsertionEffect: xe,
    useLayoutEffect: xe,
    useMemo: xe,
    useReducer: xe,
    useRef: xe,
    useState: xe,
    useDebugValue: xe,
    useDeferredValue: xe,
    useTransition: xe,
    useMutableSource: xe,
    useSyncExternalStore: xe,
    useId: xe,
    unstable_isNewReconciler: !1
}
  , o0 = {
    readContext: lt,
    useCallback: function(t, e) {
        return _t().memoizedState = [t, e === void 0 ? null : e],
        t
    },
    useContext: lt,
    useEffect: rc,
    useImperativeHandle: function(t, e, n) {
        return n = n != null ? n.concat([t]) : null,
        lo(4194308, 4, xd.bind(null, e, t), n)
    },
    useLayoutEffect: function(t, e) {
        return lo(4194308, 4, t, e)
    },
    useInsertionEffect: function(t, e) {
        return lo(4, 2, t, e)
    },
    useMemo: function(t, e) {
        var n = _t();
        return e = e === void 0 ? null : e,
        t = t(),
        n.memoizedState = [t, e],
        t
    },
    useReducer: function(t, e, n) {
        var r = _t();
        return e = n !== void 0 ? n(e) : e,
        r.memoizedState = r.baseState = e,
        t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: e
        },
        r.queue = t,
        t = t.dispatch = r0.bind(null, b, t),
        [r.memoizedState, t]
    },
    useRef: function(t) {
        var e = _t();
        return t = {
            current: t
        },
        e.memoizedState = t
    },
    useState: nc,
    useDebugValue: Aa,
    useDeferredValue: function(t) {
        return _t().memoizedState = t
    },
    useTransition: function() {
        var t = nc(!1)
          , e = t[0];
        return t = n0.bind(null, t[1]),
        _t().memoizedState = t,
        [e, t]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(t, e, n) {
        var r = b
          , i = _t();
        if (X) {
            if (n === void 0)
                throw Error(P(407));
            n = n()
        } else {
            if (n = e(),
            pe === null)
                throw Error(P(349));
            Fn & 30 || dd(r, e, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: e
        };
        return i.queue = o,
        rc(pd.bind(null, r, o, t), [t]),
        r.flags |= 2048,
        _i(9, hd.bind(null, r, o, n, e), void 0, null),
        n
    },
    useId: function() {
        var t = _t()
          , e = pe.identifierPrefix;
        if (X) {
            var n = Rt
              , r = Mt;
            n = (r & ~(1 << 32 - mt(r) - 1)).toString(32) + n,
            e = ":" + e + "R" + n,
            n = vi++,
            0 < n && (e += "H" + n.toString(32)),
            e += ":"
        } else
            n = t0++,
            e = ":" + e + "r" + n.toString(32) + ":";
        return t.memoizedState = e
    },
    unstable_isNewReconciler: !1
}
  , s0 = {
    readContext: lt,
    useCallback: kd,
    useContext: lt,
    useEffect: Fa,
    useImperativeHandle: wd,
    useInsertionEffect: yd,
    useLayoutEffect: _d,
    useMemo: Sd,
    useReducer: Is,
    useRef: vd,
    useState: function() {
        return Is(yi)
    },
    useDebugValue: Aa,
    useDeferredValue: function(t) {
        var e = at();
        return Td(e, ce.memoizedState, t)
    },
    useTransition: function() {
        var t = Is(yi)[0]
          , e = at().memoizedState;
        return [t, e]
    },
    useMutableSource: cd,
    useSyncExternalStore: fd,
    useId: Cd,
    unstable_isNewReconciler: !1
}
  , l0 = {
    readContext: lt,
    useCallback: kd,
    useContext: lt,
    useEffect: Fa,
    useImperativeHandle: wd,
    useInsertionEffect: yd,
    useLayoutEffect: _d,
    useMemo: Sd,
    useReducer: Ls,
    useRef: vd,
    useState: function() {
        return Ls(yi)
    },
    useDebugValue: Aa,
    useDeferredValue: function(t) {
        var e = at();
        return ce === null ? e.memoizedState = t : Td(e, ce.memoizedState, t)
    },
    useTransition: function() {
        var t = Ls(yi)[0]
          , e = at().memoizedState;
        return [t, e]
    },
    useMutableSource: cd,
    useSyncExternalStore: fd,
    useId: Cd,
    unstable_isNewReconciler: !1
};
function dt(t, e) {
    if (t && t.defaultProps) {
        e = ee({}, e),
        t = t.defaultProps;
        for (var n in t)
            e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}
function El(t, e, n, r) {
    e = t.memoizedState,
    n = n(r, e),
    n = n == null ? e : ee({}, e, n),
    t.memoizedState = n,
    t.lanes === 0 && (t.updateQueue.baseState = n)
}
var rs = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? $n(t) === t : !1
    },
    enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var r = je()
          , i = on(t)
          , o = Dt(r, i);
        o.payload = e,
        n != null && (o.callback = n),
        e = nn(t, o, i),
        e !== null && (gt(e, t, i, r),
        oo(e, t, i))
    },
    enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var r = je()
          , i = on(t)
          , o = Dt(r, i);
        o.tag = 1,
        o.payload = e,
        n != null && (o.callback = n),
        e = nn(t, o, i),
        e !== null && (gt(e, t, i, r),
        oo(e, t, i))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = je()
          , r = on(t)
          , i = Dt(n, r);
        i.tag = 2,
        e != null && (i.callback = e),
        e = nn(t, i, r),
        e !== null && (gt(e, t, r, n),
        oo(e, t, r))
    }
};
function ic(t, e, n, r, i, o, s) {
    return t = t.stateNode,
    typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, o, s) : e.prototype && e.prototype.isPureReactComponent ? !fi(n, r) || !fi(i, o) : !0
}
function jd(t, e, n) {
    var r = !1
      , i = cn
      , o = e.contextType;
    return typeof o == "object" && o !== null ? o = lt(o) : (i = Ie(e) ? In : Ee.current,
    r = e.contextTypes,
    o = (r = r != null) ? vr(t, i) : cn),
    e = new e(n,o),
    t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null,
    e.updater = rs,
    t.stateNode = e,
    e._reactInternals = t,
    r && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = i,
    t.__reactInternalMemoizedMaskedChildContext = o),
    e
}
function oc(t, e, n, r) {
    t = e.state,
    typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && rs.enqueueReplaceState(e, e.state, null)
}
function Pl(t, e, n, r) {
    var i = t.stateNode;
    i.props = n,
    i.state = t.memoizedState,
    i.refs = {},
    Oa(t);
    var o = e.contextType;
    typeof o == "object" && o !== null ? i.context = lt(o) : (o = Ie(e) ? In : Ee.current,
    i.context = vr(t, o)),
    i.state = t.memoizedState,
    o = e.getDerivedStateFromProps,
    typeof o == "function" && (El(t, e, o, n),
    i.state = t.memoizedState),
    typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    e !== i.state && rs.enqueueReplaceState(i, i.state, null),
    zo(t, n, i, r),
    i.state = t.memoizedState),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308)
}
function wr(t, e) {
    try {
        var n = ""
          , r = e;
        do
            n += Ip(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: t,
        source: e,
        stack: i,
        digest: null
    }
}
function Fs(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n ?? null,
        digest: e ?? null
    }
}
function Nl(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var a0 = typeof WeakMap == "function" ? WeakMap : Map;
function Od(t, e, n) {
    n = Dt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = e.value;
    return n.callback = function() {
        Lo || (Lo = !0,
        Al = r),
        Nl(t, e)
    }
    ,
    n
}
function zd(t, e, n) {
    n = Dt(-1, n),
    n.tag = 3;
    var r = t.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = e.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Nl(t, e)
        }
    }
    var o = t.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Nl(t, e),
        typeof r != "function" && (rn === null ? rn = new Set([this]) : rn.add(this));
        var s = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function sc(t, e, n) {
    var r = t.pingCache;
    if (r === null) {
        r = t.pingCache = new a0;
        var i = new Set;
        r.set(e, i)
    } else
        i = r.get(e),
        i === void 0 && (i = new Set,
        r.set(e, i));
    i.has(n) || (i.add(n),
    t = k0.bind(null, t, e, n),
    e.then(t, t))
}
function lc(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState,
        e = e !== null ? e.dehydrated !== null : !0),
        e)
            return t;
        t = t.return
    } while (t !== null);
    return null
}
function ac(t, e, n, r, i) {
    return t.mode & 1 ? (t.flags |= 65536,
    t.lanes = i,
    t) : (t === e ? t.flags |= 65536 : (t.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = Dt(-1, 1),
    e.tag = 2,
    nn(n, e, 1))),
    n.lanes |= 1),
    t)
}
var u0 = Bt.ReactCurrentOwner
  , Re = !1;
function Pe(t, e, n, r) {
    e.child = t === null ? sd(e, null, n, r) : _r(e, t.child, n, r)
}
function uc(t, e, n, r, i) {
    n = n.render;
    var o = e.ref;
    return fr(e, i),
    r = Ia(t, e, n, r, o, i),
    n = La(),
    t !== null && !Re ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~i,
    At(t, e, i)) : (X && n && Sa(e),
    e.flags |= 1,
    Pe(t, e, r, i),
    e.child)
}
function cc(t, e, n, r, i) {
    if (t === null) {
        var o = n.type;
        return typeof o == "function" && !Ga(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15,
        e.type = o,
        Md(t, e, o, r, i)) : (t = fo(n.type, null, r, e, e.mode, i),
        t.ref = e.ref,
        t.return = e,
        e.child = t)
    }
    if (o = t.child,
    !(t.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : fi,
        n(s, r) && t.ref === e.ref)
            return At(t, e, i)
    }
    return e.flags |= 1,
    t = sn(o, r),
    t.ref = e.ref,
    t.return = e,
    e.child = t
}
function Md(t, e, n, r, i) {
    if (t !== null) {
        var o = t.memoizedProps;
        if (fi(o, r) && t.ref === e.ref)
            if (Re = !1,
            e.pendingProps = r = o,
            (t.lanes & i) !== 0)
                t.flags & 131072 && (Re = !0);
            else
                return e.lanes = t.lanes,
                At(t, e, i)
    }
    return jl(t, e, n, r, i)
}
function Rd(t, e, n) {
    var r = e.pendingProps
      , i = r.children
      , o = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden")
        if (!(e.mode & 1))
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            H(ir, We),
            We |= n;
        else {
            if (!(n & 1073741824))
                return t = o !== null ? o.baseLanes | n : n,
                e.lanes = e.childLanes = 1073741824,
                e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null
                },
                e.updateQueue = null,
                H(ir, We),
                We |= t,
                null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            H(ir, We),
            We |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        e.memoizedState = null) : r = n,
        H(ir, We),
        We |= r;
    return Pe(t, e, i, n),
    e.child
}
function Dd(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512,
    e.flags |= 2097152)
}
function jl(t, e, n, r, i) {
    var o = Ie(n) ? In : Ee.current;
    return o = vr(e, o),
    fr(e, i),
    n = Ia(t, e, n, r, o, i),
    r = La(),
    t !== null && !Re ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~i,
    At(t, e, i)) : (X && r && Sa(e),
    e.flags |= 1,
    Pe(t, e, n, i),
    e.child)
}
function fc(t, e, n, r, i) {
    if (Ie(n)) {
        var o = !0;
        Eo(e)
    } else
        o = !1;
    if (fr(e, i),
    e.stateNode === null)
        ao(t, e),
        jd(e, n, r),
        Pl(e, n, r, i),
        r = !0;
    else if (t === null) {
        var s = e.stateNode
          , l = e.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = lt(u) : (u = Ie(n) ? In : Ee.current,
        u = vr(e, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && oc(e, s, r, u),
        Ht = !1;
        var h = e.memoizedState;
        s.state = h,
        zo(e, r, s, i),
        a = e.memoizedState,
        l !== r || h !== a || De.current || Ht ? (typeof c == "function" && (El(e, n, c, r),
        a = e.memoizedState),
        (l = Ht || ic(e, n, l, r, h, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
        e.memoizedProps = r,
        e.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
        r = !1)
    } else {
        s = e.stateNode,
        ad(t, e),
        l = e.memoizedProps,
        u = e.type === e.elementType ? l : dt(e.type, l),
        s.props = u,
        f = e.pendingProps,
        h = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = lt(a) : (a = Ie(n) ? In : Ee.current,
        a = vr(e, a));
        var v = n.getDerivedStateFromProps;
        (c = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || h !== a) && oc(e, s, r, a),
        Ht = !1,
        h = e.memoizedState,
        s.state = h,
        zo(e, r, s, i);
        var _ = e.memoizedState;
        l !== f || h !== _ || De.current || Ht ? (typeof v == "function" && (El(e, n, v, r),
        _ = e.memoizedState),
        (u = Ht || ic(e, n, u, r, h, _, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, _, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, _, a)),
        typeof s.componentDidUpdate == "function" && (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === t.memoizedProps && h === t.memoizedState || (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024),
        e.memoizedProps = r,
        e.memoizedState = _),
        s.props = r,
        s.state = _,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === t.memoizedProps && h === t.memoizedState || (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024),
        r = !1)
    }
    return Ol(t, e, n, r, o, i)
}
function Ol(t, e, n, r, i, o) {
    Dd(t, e);
    var s = (e.flags & 128) !== 0;
    if (!r && !s)
        return i && Zu(e, n, !1),
        At(t, e, o);
    r = e.stateNode,
    u0.current = e;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return e.flags |= 1,
    t !== null && s ? (e.child = _r(e, t.child, null, o),
    e.child = _r(e, null, l, o)) : Pe(t, e, l, o),
    e.memoizedState = r.state,
    i && Zu(e, n, !0),
    e.child
}
function Id(t) {
    var e = t.stateNode;
    e.pendingContext ? Ku(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Ku(t, e.context, !1),
    za(t, e.containerInfo)
}
function dc(t, e, n, r, i) {
    return yr(),
    Ca(i),
    e.flags |= 256,
    Pe(t, e, n, r),
    e.child
}
var zl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Ml(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}
function Ld(t, e, n) {
    var r = e.pendingProps, i = Z.current, o = !1, s = (e.flags & 128) !== 0, l;
    if ((l = s) || (l = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (o = !0,
    e.flags &= -129) : (t === null || t.memoizedState !== null) && (i |= 1),
    H(Z, i & 1),
    t === null)
        return Tl(e),
        t = e.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1,
        null) : (s = r.children,
        t = r.fallback,
        o ? (r = e.mode,
        o = e.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = ss(s, r, 0, null),
        t = On(t, r, n, null),
        o.return = e,
        t.return = e,
        o.sibling = t,
        e.child = o,
        e.child.memoizedState = Ml(n),
        e.memoizedState = zl,
        t) : Ua(e, s));
    if (i = t.memoizedState,
    i !== null && (l = i.dehydrated,
    l !== null))
        return c0(t, e, s, r, l, i, n);
    if (o) {
        o = r.fallback,
        s = e.mode,
        i = t.child,
        l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && e.child !== i ? (r = e.child,
        r.childLanes = 0,
        r.pendingProps = a,
        e.deletions = null) : (r = sn(i, a),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        l !== null ? o = sn(l, o) : (o = On(o, s, n, null),
        o.flags |= 2),
        o.return = e,
        r.return = e,
        r.sibling = o,
        e.child = r,
        r = o,
        o = e.child,
        s = t.child.memoizedState,
        s = s === null ? Ml(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = t.childLanes & ~n,
        e.memoizedState = zl,
        r
    }
    return o = t.child,
    t = o.sibling,
    r = sn(o, {
        mode: "visible",
        children: r.children
    }),
    !(e.mode & 1) && (r.lanes = n),
    r.return = e,
    r.sibling = null,
    t !== null && (n = e.deletions,
    n === null ? (e.deletions = [t],
    e.flags |= 16) : n.push(t)),
    e.child = r,
    e.memoizedState = null,
    r
}
function Ua(t, e) {
    return e = ss({
        mode: "visible",
        children: e
    }, t.mode, 0, null),
    e.return = t,
    t.child = e
}
function Xi(t, e, n, r) {
    return r !== null && Ca(r),
    _r(e, t.child, null, n),
    t = Ua(e, e.pendingProps.children),
    t.flags |= 2,
    e.memoizedState = null,
    t
}
function c0(t, e, n, r, i, o, s) {
    if (n)
        return e.flags & 256 ? (e.flags &= -257,
        r = Fs(Error(P(422))),
        Xi(t, e, s, r)) : e.memoizedState !== null ? (e.child = t.child,
        e.flags |= 128,
        null) : (o = r.fallback,
        i = e.mode,
        r = ss({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = On(o, i, s, null),
        o.flags |= 2,
        r.return = e,
        o.return = e,
        r.sibling = o,
        e.child = r,
        e.mode & 1 && _r(e, t.child, null, s),
        e.child.memoizedState = Ml(s),
        e.memoizedState = zl,
        o);
    if (!(e.mode & 1))
        return Xi(t, e, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        o = Error(P(419)),
        r = Fs(o, r, void 0),
        Xi(t, e, s, r)
    }
    if (l = (s & t.childLanes) !== 0,
    Re || l) {
        if (r = pe,
        r !== null) {
            switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            Ft(t, i),
            gt(r, t, i, -1))
        }
        return Qa(),
        r = Fs(Error(P(421))),
        Xi(t, e, s, r)
    }
    return i.data === "$?" ? (e.flags |= 128,
    e.child = t.child,
    e = S0.bind(null, t),
    i._reactRetry = e,
    null) : (t = o.treeContext,
    Qe = tn(i.nextSibling),
    Xe = e,
    X = !0,
    pt = null,
    t !== null && (tt[nt++] = Mt,
    tt[nt++] = Rt,
    tt[nt++] = Ln,
    Mt = t.id,
    Rt = t.overflow,
    Ln = e),
    e = Ua(e, r.children),
    e.flags |= 4096,
    e)
}
function hc(t, e, n) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e),
    Cl(t.return, e, n)
}
function As(t, e, n, r, i) {
    var o = t.memoizedState;
    o === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = e,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function Fd(t, e, n) {
    var r = e.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (Pe(t, e, r.children, n),
    r = Z.current,
    r & 2)
        r = r & 1 | 2,
        e.flags |= 128;
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && hc(t, n, e);
                else if (t.tag === 19)
                    hc(t, n, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break e;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break e;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        r &= 1
    }
    if (H(Z, r),
    !(e.mode & 1))
        e.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = e.child,
            i = null; n !== null; )
                t = n.alternate,
                t !== null && Mo(t) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = e.child,
            e.child = null) : (i = n.sibling,
            n.sibling = null),
            As(e, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = e.child,
            e.child = null; i !== null; ) {
                if (t = i.alternate,
                t !== null && Mo(t) === null) {
                    e.child = i;
                    break
                }
                t = i.sibling,
                i.sibling = n,
                n = i,
                i = t
            }
            As(e, !0, n, null, o);
            break;
        case "together":
            As(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
    return e.child
}
function ao(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null,
    e.alternate = null,
    e.flags |= 2)
}
function At(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies),
    An |= e.lanes,
    !(n & e.childLanes))
        return null;
    if (t !== null && e.child !== t.child)
        throw Error(P(153));
    if (e.child !== null) {
        for (t = e.child,
        n = sn(t, t.pendingProps),
        e.child = n,
        n.return = e; t.sibling !== null; )
            t = t.sibling,
            n = n.sibling = sn(t, t.pendingProps),
            n.return = e;
        n.sibling = null
    }
    return e.child
}
function f0(t, e, n) {
    switch (e.tag) {
    case 3:
        Id(e),
        yr();
        break;
    case 5:
        ud(e);
        break;
    case 1:
        Ie(e.type) && Eo(e);
        break;
    case 4:
        za(e, e.stateNode.containerInfo);
        break;
    case 10:
        var r = e.type._context
          , i = e.memoizedProps.value;
        H(jo, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = e.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (H(Z, Z.current & 1),
            e.flags |= 128,
            null) : n & e.child.childLanes ? Ld(t, e, n) : (H(Z, Z.current & 1),
            t = At(t, e, n),
            t !== null ? t.sibling : null);
        H(Z, Z.current & 1);
        break;
    case 19:
        if (r = (n & e.childLanes) !== 0,
        t.flags & 128) {
            if (r)
                return Fd(t, e, n);
            e.flags |= 128
        }
        if (i = e.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        H(Z, Z.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return e.lanes = 0,
        Rd(t, e, n)
    }
    return At(t, e, n)
}
var Ad, Rl, Ud, Vd;
Ad = function(t, e) {
    for (var n = e.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === e)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Rl = function() {}
;
Ud = function(t, e, n, r) {
    var i = t.memoizedProps;
    if (i !== r) {
        t = e.stateNode,
        En(Ct.current);
        var o = null;
        switch (n) {
        case "input":
            i = tl(t, i),
            r = tl(t, r),
            o = [];
            break;
        case "select":
            i = ee({}, i, {
                value: void 0
            }),
            r = ee({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = il(t, i),
            r = il(t, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (t.onclick = To)
        }
        sl(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ii.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ii.hasOwnProperty(u) ? (a != null && u === "onScroll" && Q("scroll", t),
                    o || l === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (e.updateQueue = u) && (e.flags |= 4)
    }
}
;
Vd = function(t, e, n, r) {
    n !== r && (e.flags |= 4)
}
;
function Fr(t, e) {
    if (!X)
        switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var n = null; e !== null; )
                e.alternate !== null && (n = e),
                e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = t.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null
        }
}
function we(t) {
    var e = t.alternate !== null && t.alternate.child === t.child
      , n = 0
      , r = 0;
    if (e)
        for (var i = t.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = t,
            i = i.sibling;
    else
        for (i = t.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = t,
            i = i.sibling;
    return t.subtreeFlags |= r,
    t.childLanes = n,
    e
}
function d0(t, e, n) {
    var r = e.pendingProps;
    switch (Ta(e),
    e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return we(e),
        null;
    case 1:
        return Ie(e.type) && Co(),
        we(e),
        null;
    case 3:
        return r = e.stateNode,
        xr(),
        G(De),
        G(Ee),
        Ra(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (t === null || t.child === null) && (Gi(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
        pt !== null && (Bl(pt),
        pt = null))),
        Rl(t, e),
        we(e),
        null;
    case 5:
        Ma(e);
        var i = En(gi.current);
        if (n = e.type,
        t !== null && e.stateNode != null)
            Ud(t, e, n, r, i),
            t.ref !== e.ref && (e.flags |= 512,
            e.flags |= 2097152);
        else {
            if (!r) {
                if (e.stateNode === null)
                    throw Error(P(166));
                return we(e),
                null
            }
            if (t = En(Ct.current),
            Gi(e)) {
                r = e.stateNode,
                n = e.type;
                var o = e.memoizedProps;
                switch (r[wt] = e,
                r[pi] = o,
                t = (e.mode & 1) !== 0,
                n) {
                case "dialog":
                    Q("cancel", r),
                    Q("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    Q("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < $r.length; i++)
                        Q($r[i], r);
                    break;
                case "source":
                    Q("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    Q("error", r),
                    Q("load", r);
                    break;
                case "details":
                    Q("toggle", r);
                    break;
                case "input":
                    ku(r, o),
                    Q("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    Q("invalid", r);
                    break;
                case "textarea":
                    Tu(r, o),
                    Q("invalid", r)
                }
                sl(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var l = o[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && Qi(r.textContent, l, t),
                        i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && Qi(r.textContent, l, t),
                        i = ["children", "" + l]) : ii.hasOwnProperty(s) && l != null && s === "onScroll" && Q("scroll", r)
                    }
                switch (n) {
                case "input":
                    Fi(r),
                    Su(r, o, !0);
                    break;
                case "textarea":
                    Fi(r),
                    Cu(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = To)
                }
                r = i,
                e.updateQueue = r,
                r !== null && (e.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                t === "http://www.w3.org/1999/xhtml" && (t = pf(n)),
                t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = s.createElement("div"),
                t.innerHTML = "<script><\/script>",
                t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = s.createElement(n, {
                    is: r.is
                }) : (t = s.createElement(n),
                n === "select" && (s = t,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : t = s.createElementNS(t, n),
                t[wt] = e,
                t[pi] = r,
                Ad(t, e, !1, !1),
                e.stateNode = t;
                e: {
                    switch (s = ll(n, r),
                    n) {
                    case "dialog":
                        Q("cancel", t),
                        Q("close", t),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Q("load", t),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < $r.length; i++)
                            Q($r[i], t);
                        i = r;
                        break;
                    case "source":
                        Q("error", t),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Q("error", t),
                        Q("load", t),
                        i = r;
                        break;
                    case "details":
                        Q("toggle", t),
                        i = r;
                        break;
                    case "input":
                        ku(t, r),
                        i = tl(t, r),
                        Q("invalid", t);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        t._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = ee({}, r, {
                            value: void 0
                        }),
                        Q("invalid", t);
                        break;
                    case "textarea":
                        Tu(t, r),
                        i = il(t, r),
                        Q("invalid", t);
                        break;
                    default:
                        i = r
                    }
                    sl(n, i),
                    l = i;
                    for (o in l)
                        if (l.hasOwnProperty(o)) {
                            var a = l[o];
                            o === "style" ? vf(t, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && mf(t, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && oi(t, a) : typeof a == "number" && oi(t, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (ii.hasOwnProperty(o) ? a != null && o === "onScroll" && Q("scroll", t) : a != null && ua(t, o, a, s))
                        }
                    switch (n) {
                    case "input":
                        Fi(t),
                        Su(t, r, !1);
                        break;
                    case "textarea":
                        Fi(t),
                        Cu(t);
                        break;
                    case "option":
                        r.value != null && t.setAttribute("value", "" + un(r.value));
                        break;
                    case "select":
                        t.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? lr(t, !!r.multiple, o, !1) : r.defaultValue != null && lr(t, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (t.onclick = To)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (e.flags |= 4)
            }
            e.ref !== null && (e.flags |= 512,
            e.flags |= 2097152)
        }
        return we(e),
        null;
    case 6:
        if (t && e.stateNode != null)
            Vd(t, e, t.memoizedProps, r);
        else {
            if (typeof r != "string" && e.stateNode === null)
                throw Error(P(166));
            if (n = En(gi.current),
            En(Ct.current),
            Gi(e)) {
                if (r = e.stateNode,
                n = e.memoizedProps,
                r[wt] = e,
                (o = r.nodeValue !== n) && (t = Xe,
                t !== null))
                    switch (t.tag) {
                    case 3:
                        Qi(r.nodeValue, n, (t.mode & 1) !== 0);
                        break;
                    case 5:
                        t.memoizedProps.suppressHydrationWarning !== !0 && Qi(r.nodeValue, n, (t.mode & 1) !== 0)
                    }
                o && (e.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[wt] = e,
                e.stateNode = r
        }
        return we(e),
        null;
    case 13:
        if (G(Z),
        r = e.memoizedState,
        t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (X && Qe !== null && e.mode & 1 && !(e.flags & 128))
                id(),
                yr(),
                e.flags |= 98560,
                o = !1;
            else if (o = Gi(e),
            r !== null && r.dehydrated !== null) {
                if (t === null) {
                    if (!o)
                        throw Error(P(318));
                    if (o = e.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(P(317));
                    o[wt] = e
                } else
                    yr(),
                    !(e.flags & 128) && (e.memoizedState = null),
                    e.flags |= 4;
                we(e),
                o = !1
            } else
                pt !== null && (Bl(pt),
                pt = null),
                o = !0;
            if (!o)
                return e.flags & 65536 ? e : null
        }
        return e.flags & 128 ? (e.lanes = n,
        e) : (r = r !== null,
        r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192,
        e.mode & 1 && (t === null || Z.current & 1 ? fe === 0 && (fe = 3) : Qa())),
        e.updateQueue !== null && (e.flags |= 4),
        we(e),
        null);
    case 4:
        return xr(),
        Rl(t, e),
        t === null && di(e.stateNode.containerInfo),
        we(e),
        null;
    case 10:
        return Na(e.type._context),
        we(e),
        null;
    case 17:
        return Ie(e.type) && Co(),
        we(e),
        null;
    case 19:
        if (G(Z),
        o = e.memoizedState,
        o === null)
            return we(e),
            null;
        if (r = (e.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                Fr(o, !1);
            else {
                if (fe !== 0 || t !== null && t.flags & 128)
                    for (t = e.child; t !== null; ) {
                        if (s = Mo(t),
                        s !== null) {
                            for (e.flags |= 128,
                            Fr(o, !1),
                            r = s.updateQueue,
                            r !== null && (e.updateQueue = r,
                            e.flags |= 4),
                            e.subtreeFlags = 0,
                            r = n,
                            n = e.child; n !== null; )
                                o = n,
                                t = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = t,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                t = s.dependencies,
                                o.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }),
                                n = n.sibling;
                            return H(Z, Z.current & 1 | 2),
                            e.child
                        }
                        t = t.sibling
                    }
                o.tail !== null && oe() > kr && (e.flags |= 128,
                r = !0,
                Fr(o, !1),
                e.lanes = 4194304)
            }
        else {
            if (!r)
                if (t = Mo(s),
                t !== null) {
                    if (e.flags |= 128,
                    r = !0,
                    n = t.updateQueue,
                    n !== null && (e.updateQueue = n,
                    e.flags |= 4),
                    Fr(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !X)
                        return we(e),
                        null
                } else
                    2 * oe() - o.renderingStartTime > kr && n !== 1073741824 && (e.flags |= 128,
                    r = !0,
                    Fr(o, !1),
                    e.lanes = 4194304);
            o.isBackwards ? (s.sibling = e.child,
            e.child = s) : (n = o.last,
            n !== null ? n.sibling = s : e.child = s,
            o.last = s)
        }
        return o.tail !== null ? (e = o.tail,
        o.rendering = e,
        o.tail = e.sibling,
        o.renderingStartTime = oe(),
        e.sibling = null,
        n = Z.current,
        H(Z, r ? n & 1 | 2 : n & 1),
        e) : (we(e),
        null);
    case 22:
    case 23:
        return Ha(),
        r = e.memoizedState !== null,
        t !== null && t.memoizedState !== null !== r && (e.flags |= 8192),
        r && e.mode & 1 ? We & 1073741824 && (we(e),
        e.subtreeFlags & 6 && (e.flags |= 8192)) : we(e),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(P(156, e.tag))
}
function h0(t, e) {
    switch (Ta(e),
    e.tag) {
    case 1:
        return Ie(e.type) && Co(),
        t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 3:
        return xr(),
        G(De),
        G(Ee),
        Ra(),
        t = e.flags,
        t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128,
        e) : null;
    case 5:
        return Ma(e),
        null;
    case 13:
        if (G(Z),
        t = e.memoizedState,
        t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
                throw Error(P(340));
            yr()
        }
        return t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 19:
        return G(Z),
        null;
    case 4:
        return xr(),
        null;
    case 10:
        return Na(e.type._context),
        null;
    case 22:
    case 23:
        return Ha(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Ki = !1
  , ke = !1
  , p0 = typeof WeakSet == "function" ? WeakSet : Set
  , O = null;
function rr(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ne(t, e, r)
            }
        else
            n.current = null
}
function Dl(t, e, n) {
    try {
        n()
    } catch (r) {
        ne(t, e, r)
    }
}
var pc = !1;
function m0(t, e) {
    if (vl = wo,
    t = Qf(),
    ka(t)) {
        if ("selectionStart"in t)
            var n = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
        else
            e: {
                n = (n = t.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , f = t
                      , h = null;
                    t: for (; ; ) {
                        for (var v; f !== n || i !== 0 && f.nodeType !== 3 || (l = s + i),
                        f !== o || r !== 0 && f.nodeType !== 3 || (a = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (v = f.firstChild) !== null; )
                            h = f,
                            f = v;
                        for (; ; ) {
                            if (f === t)
                                break t;
                            if (h === n && ++u === i && (l = s),
                            h === o && ++c === r && (a = s),
                            (v = f.nextSibling) !== null)
                                break;
                            f = h,
                            h = f.parentNode
                        }
                        f = v
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (yl = {
        focusedElem: t,
        selectionRange: n
    },
    wo = !1,
    O = e; O !== null; )
        if (e = O,
        t = e.child,
        (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e,
            O = t;
        else
            for (; O !== null; ) {
                e = O;
                try {
                    var _ = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (_ !== null) {
                                var p = _.memoizedProps
                                  , k = _.memoizedState
                                  , m = e.stateNode
                                  , d = m.getSnapshotBeforeUpdate(e.elementType === e.type ? p : dt(e.type, p), k);
                                m.__reactInternalSnapshotBeforeUpdate = d
                            }
                            break;
                        case 3:
                            var g = e.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(P(163))
                        }
                } catch (x) {
                    ne(e, e.return, x)
                }
                if (t = e.sibling,
                t !== null) {
                    t.return = e.return,
                    O = t;
                    break
                }
                O = e.return
            }
    return _ = pc,
    pc = !1,
    _
}
function Jr(t, e, n) {
    var r = e.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & t) === t) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && Dl(e, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function is(t, e) {
    if (e = e.updateQueue,
    e = e !== null ? e.lastEffect : null,
    e !== null) {
        var n = e = e.next;
        do {
            if ((n.tag & t) === t) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== e)
    }
}
function Il(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
        case 5:
            t = n;
            break;
        default:
            t = n
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}
function Bd(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null,
    Bd(e)),
    t.child = null,
    t.deletions = null,
    t.sibling = null,
    t.tag === 5 && (e = t.stateNode,
    e !== null && (delete e[wt],
    delete e[pi],
    delete e[wl],
    delete e[qm],
    delete e[Jm])),
    t.stateNode = null,
    t.return = null,
    t.dependencies = null,
    t.memoizedProps = null,
    t.memoizedState = null,
    t.pendingProps = null,
    t.stateNode = null,
    t.updateQueue = null
}
function Wd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function mc(t) {
    e: for (; ; ) {
        for (; t.sibling === null; ) {
            if (t.return === null || Wd(t.return))
                return null;
            t = t.return
        }
        for (t.sibling.return = t.return,
        t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4)
                continue e;
            t.child.return = t,
            t = t.child
        }
        if (!(t.flags & 2))
            return t.stateNode
    }
}
function Ll(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
        e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode,
        e.insertBefore(t, n)) : (e = n,
        e.appendChild(t)),
        n = n._reactRootContainer,
        n != null || e.onclick !== null || (e.onclick = To));
    else if (r !== 4 && (t = t.child,
    t !== null))
        for (Ll(t, e, n),
        t = t.sibling; t !== null; )
            Ll(t, e, n),
            t = t.sibling
}
function Fl(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
        e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (r !== 4 && (t = t.child,
    t !== null))
        for (Fl(t, e, n),
        t = t.sibling; t !== null; )
            Fl(t, e, n),
            t = t.sibling
}
var ve = null
  , ht = !1;
function Wt(t, e, n) {
    for (n = n.child; n !== null; )
        $d(t, e, n),
        n = n.sibling
}
function $d(t, e, n) {
    if (Tt && typeof Tt.onCommitFiberUnmount == "function")
        try {
            Tt.onCommitFiberUnmount(Zo, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ke || rr(n, e);
    case 6:
        var r = ve
          , i = ht;
        ve = null,
        Wt(t, e, n),
        ve = r,
        ht = i,
        ve !== null && (ht ? (t = ve,
        n = n.stateNode,
        t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : ve.removeChild(n.stateNode));
        break;
    case 18:
        ve !== null && (ht ? (t = ve,
        n = n.stateNode,
        t.nodeType === 8 ? zs(t.parentNode, n) : t.nodeType === 1 && zs(t, n),
        ui(t)) : zs(ve, n.stateNode));
        break;
    case 4:
        r = ve,
        i = ht,
        ve = n.stateNode.containerInfo,
        ht = !0,
        Wt(t, e, n),
        ve = r,
        ht = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ke && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && Dl(n, e, s),
                i = i.next
            } while (i !== r)
        }
        Wt(t, e, n);
        break;
    case 1:
        if (!ke && (rr(n, e),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                ne(n, e, l)
            }
        Wt(t, e, n);
        break;
    case 21:
        Wt(t, e, n);
        break;
    case 22:
        n.mode & 1 ? (ke = (r = ke) || n.memoizedState !== null,
        Wt(t, e, n),
        ke = r) : Wt(t, e, n);
        break;
    default:
        Wt(t, e, n)
    }
}
function gc(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new p0),
        e.forEach(function(r) {
            var i = T0.bind(null, t, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function ft(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = t
                  , s = e
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        ve = l.stateNode,
                        ht = !1;
                        break e;
                    case 3:
                        ve = l.stateNode.containerInfo,
                        ht = !0;
                        break e;
                    case 4:
                        ve = l.stateNode.containerInfo,
                        ht = !0;
                        break e
                    }
                    l = l.return
                }
                if (ve === null)
                    throw Error(P(160));
                $d(o, s, i),
                ve = null,
                ht = !1;
                var a = i.alternate;
                a !== null && (a.return = null),
                i.return = null
            } catch (u) {
                ne(i, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; )
            Hd(e, t),
            e = e.sibling
}
function Hd(t, e) {
    var n = t.alternate
      , r = t.flags;
    switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ft(e, t),
        yt(t),
        r & 4) {
            try {
                Jr(3, t, t.return),
                is(3, t)
            } catch (p) {
                ne(t, t.return, p)
            }
            try {
                Jr(5, t, t.return)
            } catch (p) {
                ne(t, t.return, p)
            }
        }
        break;
    case 1:
        ft(e, t),
        yt(t),
        r & 512 && n !== null && rr(n, n.return);
        break;
    case 5:
        if (ft(e, t),
        yt(t),
        r & 512 && n !== null && rr(n, n.return),
        t.flags & 32) {
            var i = t.stateNode;
            try {
                oi(i, "")
            } catch (p) {
                ne(t, t.return, p)
            }
        }
        if (r & 4 && (i = t.stateNode,
        i != null)) {
            var o = t.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , l = t.type
              , a = t.updateQueue;
            if (t.updateQueue = null,
            a !== null)
                try {
                    l === "input" && o.type === "radio" && o.name != null && df(i, o),
                    ll(l, s);
                    var u = ll(l, o);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s]
                          , f = a[s + 1];
                        c === "style" ? vf(i, f) : c === "dangerouslySetInnerHTML" ? mf(i, f) : c === "children" ? oi(i, f) : ua(i, c, f, u)
                    }
                    switch (l) {
                    case "input":
                        nl(i, o);
                        break;
                    case "textarea":
                        hf(i, o);
                        break;
                    case "select":
                        var h = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var v = o.value;
                        v != null ? lr(i, !!o.multiple, v, !1) : h !== !!o.multiple && (o.defaultValue != null ? lr(i, !!o.multiple, o.defaultValue, !0) : lr(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[pi] = o
                } catch (p) {
                    ne(t, t.return, p)
                }
        }
        break;
    case 6:
        if (ft(e, t),
        yt(t),
        r & 4) {
            if (t.stateNode === null)
                throw Error(P(162));
            i = t.stateNode,
            o = t.memoizedProps;
            try {
                i.nodeValue = o
            } catch (p) {
                ne(t, t.return, p)
            }
        }
        break;
    case 3:
        if (ft(e, t),
        yt(t),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                ui(e.containerInfo)
            } catch (p) {
                ne(t, t.return, p)
            }
        break;
    case 4:
        ft(e, t),
        yt(t);
        break;
    case 13:
        ft(e, t),
        yt(t),
        i = t.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (Wa = oe())),
        r & 4 && gc(t);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        t.mode & 1 ? (ke = (u = ke) || c,
        ft(e, t),
        ke = u) : ft(e, t),
        yt(t),
        r & 8192) {
            if (u = t.memoizedState !== null,
            (t.stateNode.isHidden = u) && !c && t.mode & 1)
                for (O = t,
                c = t.child; c !== null; ) {
                    for (f = O = c; O !== null; ) {
                        switch (h = O,
                        v = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Jr(4, h, h.return);
                            break;
                        case 1:
                            rr(h, h.return);
                            var _ = h.stateNode;
                            if (typeof _.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    e = r,
                                    _.props = e.memoizedProps,
                                    _.state = e.memoizedState,
                                    _.componentWillUnmount()
                                } catch (p) {
                                    ne(r, n, p)
                                }
                            }
                            break;
                        case 5:
                            rr(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                yc(f);
                                continue
                            }
                        }
                        v !== null ? (v.return = h,
                        O = v) : yc(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = t; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            i = f.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode,
                            a = f.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = gf("display", s))
                        } catch (p) {
                            ne(t, t.return, p)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (p) {
                            ne(t, t.return, p)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === t) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === t)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === t)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        ft(e, t),
        yt(t),
        r & 4 && gc(t);
        break;
    case 21:
        break;
    default:
        ft(e, t),
        yt(t)
    }
}
function yt(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null; ) {
                    if (Wd(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(P(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (oi(i, ""),
                r.flags &= -33);
                var o = mc(t);
                Fl(t, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = mc(t);
                Ll(t, l, s);
                break;
            default:
                throw Error(P(161))
            }
        } catch (a) {
            ne(t, t.return, a)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}
function g0(t, e, n) {
    O = t,
    Qd(t)
}
function Qd(t, e, n) {
    for (var r = (t.mode & 1) !== 0; O !== null; ) {
        var i = O
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Ki;
            if (!s) {
                var l = i.alternate
                  , a = l !== null && l.memoizedState !== null || ke;
                l = Ki;
                var u = ke;
                if (Ki = s,
                (ke = a) && !u)
                    for (O = i; O !== null; )
                        s = O,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? _c(i) : a !== null ? (a.return = s,
                        O = a) : _c(i);
                for (; o !== null; )
                    O = o,
                    Qd(o),
                    o = o.sibling;
                O = i,
                Ki = l,
                ke = u
            }
            vc(t)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            O = o) : vc(t)
    }
}
function vc(t) {
    for (; O !== null; ) {
        var e = O;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ke || is(5, e);
                        break;
                    case 1:
                        var r = e.stateNode;
                        if (e.flags & 4 && !ke)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = e.elementType === e.type ? n.memoizedProps : dt(e.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = e.updateQueue;
                        o !== null && tc(e, o, r);
                        break;
                    case 3:
                        var s = e.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            e.child !== null)
                                switch (e.child.tag) {
                                case 5:
                                    n = e.child.stateNode;
                                    break;
                                case 1:
                                    n = e.child.stateNode
                                }
                            tc(e, s, n)
                        }
                        break;
                    case 5:
                        var l = e.stateNode;
                        if (n === null && e.flags & 4) {
                            n = l;
                            var a = e.memoizedProps;
                            switch (e.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var u = e.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && ui(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(P(163))
                    }
                ke || e.flags & 512 && Il(e)
            } catch (h) {
                ne(e, e.return, h)
            }
        }
        if (e === t) {
            O = null;
            break
        }
        if (n = e.sibling,
        n !== null) {
            n.return = e.return,
            O = n;
            break
        }
        O = e.return
    }
}
function yc(t) {
    for (; O !== null; ) {
        var e = O;
        if (e === t) {
            O = null;
            break
        }
        var n = e.sibling;
        if (n !== null) {
            n.return = e.return,
            O = n;
            break
        }
        O = e.return
    }
}
function _c(t) {
    for (; O !== null; ) {
        var e = O;
        try {
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                var n = e.return;
                try {
                    is(4, e)
                } catch (a) {
                    ne(e, n, a)
                }
                break;
            case 1:
                var r = e.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = e.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        ne(e, i, a)
                    }
                }
                var o = e.return;
                try {
                    Il(e)
                } catch (a) {
                    ne(e, o, a)
                }
                break;
            case 5:
                var s = e.return;
                try {
                    Il(e)
                } catch (a) {
                    ne(e, s, a)
                }
            }
        } catch (a) {
            ne(e, e.return, a)
        }
        if (e === t) {
            O = null;
            break
        }
        var l = e.sibling;
        if (l !== null) {
            l.return = e.return,
            O = l;
            break
        }
        O = e.return
    }
}
var v0 = Math.ceil
  , Io = Bt.ReactCurrentDispatcher
  , Va = Bt.ReactCurrentOwner
  , st = Bt.ReactCurrentBatchConfig
  , L = 0
  , pe = null
  , ue = null
  , ye = 0
  , We = 0
  , ir = pn(0)
  , fe = 0
  , xi = null
  , An = 0
  , os = 0
  , Ba = 0
  , br = null
  , Me = null
  , Wa = 0
  , kr = 1 / 0
  , Nt = null
  , Lo = !1
  , Al = null
  , rn = null
  , Zi = !1
  , Xt = null
  , Fo = 0
  , ei = 0
  , Ul = null
  , uo = -1
  , co = 0;
function je() {
    return L & 6 ? oe() : uo !== -1 ? uo : uo = oe()
}
function on(t) {
    return t.mode & 1 ? L & 2 && ye !== 0 ? ye & -ye : e0.transition !== null ? (co === 0 && (co = jf()),
    co) : (t = U,
    t !== 0 || (t = window.event,
    t = t === void 0 ? 16 : Lf(t.type)),
    t) : 1
}
function gt(t, e, n, r) {
    if (50 < ei)
        throw ei = 0,
        Ul = null,
        Error(P(185));
    ji(t, n, r),
    (!(L & 2) || t !== pe) && (t === pe && (!(L & 2) && (os |= n),
    fe === 4 && Gt(t, ye)),
    Le(t, r),
    n === 1 && L === 0 && !(e.mode & 1) && (kr = oe() + 500,
    ts && mn()))
}
function Le(t, e) {
    var n = t.callbackNode;
    em(t, e);
    var r = xo(t, t === pe ? ye : 0);
    if (r === 0)
        n !== null && Nu(n),
        t.callbackNode = null,
        t.callbackPriority = 0;
    else if (e = r & -r,
    t.callbackPriority !== e) {
        if (n != null && Nu(n),
        e === 1)
            t.tag === 0 ? bm(xc.bind(null, t)) : td(xc.bind(null, t)),
            Km(function() {
                !(L & 6) && mn()
            }),
            n = null;
        else {
            switch (Of(r)) {
            case 1:
                n = pa;
                break;
            case 4:
                n = Pf;
                break;
            case 16:
                n = _o;
                break;
            case 536870912:
                n = Nf;
                break;
            default:
                n = _o
            }
            n = bd(n, Gd.bind(null, t))
        }
        t.callbackPriority = e,
        t.callbackNode = n
    }
}
function Gd(t, e) {
    if (uo = -1,
    co = 0,
    L & 6)
        throw Error(P(327));
    var n = t.callbackNode;
    if (dr() && t.callbackNode !== n)
        return null;
    var r = xo(t, t === pe ? ye : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & t.expiredLanes || e)
        e = Ao(t, r);
    else {
        e = r;
        var i = L;
        L |= 2;
        var o = Xd();
        (pe !== t || ye !== e) && (Nt = null,
        kr = oe() + 500,
        jn(t, e));
        do
            try {
                x0();
                break
            } catch (l) {
                Yd(t, l)
            }
        while (!0);
        Pa(),
        Io.current = o,
        L = i,
        ue !== null ? e = 0 : (pe = null,
        ye = 0,
        e = fe)
    }
    if (e !== 0) {
        if (e === 2 && (i = dl(t),
        i !== 0 && (r = i,
        e = Vl(t, i))),
        e === 1)
            throw n = xi,
            jn(t, 0),
            Gt(t, r),
            Le(t, oe()),
            n;
        if (e === 6)
            Gt(t, r);
        else {
            if (i = t.current.alternate,
            !(r & 30) && !y0(i) && (e = Ao(t, r),
            e === 2 && (o = dl(t),
            o !== 0 && (r = o,
            e = Vl(t, o))),
            e === 1))
                throw n = xi,
                jn(t, 0),
                Gt(t, r),
                Le(t, oe()),
                n;
            switch (t.finishedWork = i,
            t.finishedLanes = r,
            e) {
            case 0:
            case 1:
                throw Error(P(345));
            case 2:
                kn(t, Me, Nt);
                break;
            case 3:
                if (Gt(t, r),
                (r & 130023424) === r && (e = Wa + 500 - oe(),
                10 < e)) {
                    if (xo(t, 0) !== 0)
                        break;
                    if (i = t.suspendedLanes,
                    (i & r) !== r) {
                        je(),
                        t.pingedLanes |= t.suspendedLanes & i;
                        break
                    }
                    t.timeoutHandle = xl(kn.bind(null, t, Me, Nt), e);
                    break
                }
                kn(t, Me, Nt);
                break;
            case 4:
                if (Gt(t, r),
                (r & 4194240) === r)
                    break;
                for (e = t.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - mt(r);
                    o = 1 << s,
                    s = e[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = oe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * v0(r / 1960)) - r,
                10 < r) {
                    t.timeoutHandle = xl(kn.bind(null, t, Me, Nt), r);
                    break
                }
                kn(t, Me, Nt);
                break;
            case 5:
                kn(t, Me, Nt);
                break;
            default:
                throw Error(P(329))
            }
        }
    }
    return Le(t, oe()),
    t.callbackNode === n ? Gd.bind(null, t) : null
}
function Vl(t, e) {
    var n = br;
    return t.current.memoizedState.isDehydrated && (jn(t, e).flags |= 256),
    t = Ao(t, e),
    t !== 2 && (e = Me,
    Me = n,
    e !== null && Bl(e)),
    t
}
function Bl(t) {
    Me === null ? Me = t : Me.push.apply(Me, t)
}
function y0(t) {
    for (var e = t; ; ) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!vt(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = e.child,
        e.subtreeFlags & 16384 && n !== null)
            n.return = e,
            e = n;
        else {
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return !0;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
    }
    return !0
}
function Gt(t, e) {
    for (e &= ~Ba,
    e &= ~os,
    t.suspendedLanes |= e,
    t.pingedLanes &= ~e,
    t = t.expirationTimes; 0 < e; ) {
        var n = 31 - mt(e)
          , r = 1 << n;
        t[n] = -1,
        e &= ~r
    }
}
function xc(t) {
    if (L & 6)
        throw Error(P(327));
    dr();
    var e = xo(t, 0);
    if (!(e & 1))
        return Le(t, oe()),
        null;
    var n = Ao(t, e);
    if (t.tag !== 0 && n === 2) {
        var r = dl(t);
        r !== 0 && (e = r,
        n = Vl(t, r))
    }
    if (n === 1)
        throw n = xi,
        jn(t, 0),
        Gt(t, e),
        Le(t, oe()),
        n;
    if (n === 6)
        throw Error(P(345));
    return t.finishedWork = t.current.alternate,
    t.finishedLanes = e,
    kn(t, Me, Nt),
    Le(t, oe()),
    null
}
function $a(t, e) {
    var n = L;
    L |= 1;
    try {
        return t(e)
    } finally {
        L = n,
        L === 0 && (kr = oe() + 500,
        ts && mn())
    }
}
function Un(t) {
    Xt !== null && Xt.tag === 0 && !(L & 6) && dr();
    var e = L;
    L |= 1;
    var n = st.transition
      , r = U;
    try {
        if (st.transition = null,
        U = 1,
        t)
            return t()
    } finally {
        U = r,
        st.transition = n,
        L = e,
        !(L & 6) && mn()
    }
}
function Ha() {
    We = ir.current,
    G(ir)
}
function jn(t, e) {
    t.finishedWork = null,
    t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1,
    Xm(n)),
    ue !== null)
        for (n = ue.return; n !== null; ) {
            var r = n;
            switch (Ta(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Co();
                break;
            case 3:
                xr(),
                G(De),
                G(Ee),
                Ra();
                break;
            case 5:
                Ma(r);
                break;
            case 4:
                xr();
                break;
            case 13:
                G(Z);
                break;
            case 19:
                G(Z);
                break;
            case 10:
                Na(r.type._context);
                break;
            case 22:
            case 23:
                Ha()
            }
            n = n.return
        }
    if (pe = t,
    ue = t = sn(t.current, null),
    ye = We = e,
    fe = 0,
    xi = null,
    Ba = os = An = 0,
    Me = br = null,
    Cn !== null) {
        for (e = 0; e < Cn.length; e++)
            if (n = Cn[e],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        Cn = null
    }
    return t
}
function Yd(t, e) {
    do {
        var n = ue;
        try {
            if (Pa(),
            so.current = Do,
            Ro) {
                for (var r = b.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Ro = !1
            }
            if (Fn = 0,
            de = ce = b = null,
            qr = !1,
            vi = 0,
            Va.current = null,
            n === null || n.return === null) {
                fe = 1,
                xi = e,
                ue = null;
                break
            }
            e: {
                var o = t
                  , s = n.return
                  , l = n
                  , a = e;
                if (e = ye,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = c.alternate;
                        h ? (c.updateQueue = h.updateQueue,
                        c.memoizedState = h.memoizedState,
                        c.lanes = h.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var v = lc(s);
                    if (v !== null) {
                        v.flags &= -257,
                        ac(v, s, l, o, e),
                        v.mode & 1 && sc(o, u, e),
                        e = v,
                        a = u;
                        var _ = e.updateQueue;
                        if (_ === null) {
                            var p = new Set;
                            p.add(a),
                            e.updateQueue = p
                        } else
                            _.add(a);
                        break e
                    } else {
                        if (!(e & 1)) {
                            sc(o, u, e),
                            Qa();
                            break e
                        }
                        a = Error(P(426))
                    }
                } else if (X && l.mode & 1) {
                    var k = lc(s);
                    if (k !== null) {
                        !(k.flags & 65536) && (k.flags |= 256),
                        ac(k, s, l, o, e),
                        Ca(wr(a, l));
                        break e
                    }
                }
                o = a = wr(a, l),
                fe !== 4 && (fe = 2),
                br === null ? br = [o] : br.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        e &= -e,
                        o.lanes |= e;
                        var m = Od(o, a, e);
                        ec(o, m);
                        break e;
                    case 1:
                        l = a;
                        var d = o.type
                          , g = o.stateNode;
                        if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (rn === null || !rn.has(g)))) {
                            o.flags |= 65536,
                            e &= -e,
                            o.lanes |= e;
                            var x = zd(o, l, e);
                            ec(o, x);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Zd(n)
        } catch (w) {
            e = w,
            ue === n && n !== null && (ue = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Xd() {
    var t = Io.current;
    return Io.current = Do,
    t === null ? Do : t
}
function Qa() {
    (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    pe === null || !(An & 268435455) && !(os & 268435455) || Gt(pe, ye)
}
function Ao(t, e) {
    var n = L;
    L |= 2;
    var r = Xd();
    (pe !== t || ye !== e) && (Nt = null,
    jn(t, e));
    do
        try {
            _0();
            break
        } catch (i) {
            Yd(t, i)
        }
    while (!0);
    if (Pa(),
    L = n,
    Io.current = r,
    ue !== null)
        throw Error(P(261));
    return pe = null,
    ye = 0,
    fe
}
function _0() {
    for (; ue !== null; )
        Kd(ue)
}
function x0() {
    for (; ue !== null && !Qp(); )
        Kd(ue)
}
function Kd(t) {
    var e = Jd(t.alternate, t, We);
    t.memoizedProps = t.pendingProps,
    e === null ? Zd(t) : ue = e,
    Va.current = null
}
function Zd(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return,
        e.flags & 32768) {
            if (n = h0(n, e),
            n !== null) {
                n.flags &= 32767,
                ue = n;
                return
            }
            if (t !== null)
                t.flags |= 32768,
                t.subtreeFlags = 0,
                t.deletions = null;
            else {
                fe = 6,
                ue = null;
                return
            }
        } else if (n = d0(n, e, We),
        n !== null) {
            ue = n;
            return
        }
        if (e = e.sibling,
        e !== null) {
            ue = e;
            return
        }
        ue = e = t
    } while (e !== null);
    fe === 0 && (fe = 5)
}
function kn(t, e, n) {
    var r = U
      , i = st.transition;
    try {
        st.transition = null,
        U = 1,
        w0(t, e, n, r)
    } finally {
        st.transition = i,
        U = r
    }
    return null
}
function w0(t, e, n, r) {
    do
        dr();
    while (Xt !== null);
    if (L & 6)
        throw Error(P(327));
    n = t.finishedWork;
    var i = t.finishedLanes;
    if (n === null)
        return null;
    if (t.finishedWork = null,
    t.finishedLanes = 0,
    n === t.current)
        throw Error(P(177));
    t.callbackNode = null,
    t.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (tm(t, o),
    t === pe && (ue = pe = null,
    ye = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Zi || (Zi = !0,
    bd(_o, function() {
        return dr(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = st.transition,
        st.transition = null;
        var s = U;
        U = 1;
        var l = L;
        L |= 4,
        Va.current = null,
        m0(t, n),
        Hd(n, t),
        Bm(yl),
        wo = !!vl,
        yl = vl = null,
        t.current = n,
        g0(n),
        Gp(),
        L = l,
        U = s,
        st.transition = o
    } else
        t.current = n;
    if (Zi && (Zi = !1,
    Xt = t,
    Fo = i),
    o = t.pendingLanes,
    o === 0 && (rn = null),
    Kp(n.stateNode),
    Le(t, oe()),
    e !== null)
        for (r = t.onRecoverableError,
        n = 0; n < e.length; n++)
            i = e[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (Lo)
        throw Lo = !1,
        t = Al,
        Al = null,
        t;
    return Fo & 1 && t.tag !== 0 && dr(),
    o = t.pendingLanes,
    o & 1 ? t === Ul ? ei++ : (ei = 0,
    Ul = t) : ei = 0,
    mn(),
    null
}
function dr() {
    if (Xt !== null) {
        var t = Of(Fo)
          , e = st.transition
          , n = U;
        try {
            if (st.transition = null,
            U = 16 > t ? 16 : t,
            Xt === null)
                var r = !1;
            else {
                if (t = Xt,
                Xt = null,
                Fo = 0,
                L & 6)
                    throw Error(P(331));
                var i = L;
                for (L |= 4,
                O = t.current; O !== null; ) {
                    var o = O
                      , s = o.child;
                    if (O.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (O = u; O !== null; ) {
                                    var c = O;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Jr(8, c, o)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        O = f;
                                    else
                                        for (; O !== null; ) {
                                            c = O;
                                            var h = c.sibling
                                              , v = c.return;
                                            if (Bd(c),
                                            c === u) {
                                                O = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = v,
                                                O = h;
                                                break
                                            }
                                            O = v
                                        }
                                }
                            }
                            var _ = o.alternate;
                            if (_ !== null) {
                                var p = _.child;
                                if (p !== null) {
                                    _.child = null;
                                    do {
                                        var k = p.sibling;
                                        p.sibling = null,
                                        p = k
                                    } while (p !== null)
                                }
                            }
                            O = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        O = s;
                    else
                        e: for (; O !== null; ) {
                            if (o = O,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Jr(9, o, o.return)
                                }
                            var m = o.sibling;
                            if (m !== null) {
                                m.return = o.return,
                                O = m;
                                break e
                            }
                            O = o.return
                        }
                }
                var d = t.current;
                for (O = d; O !== null; ) {
                    s = O;
                    var g = s.child;
                    if (s.subtreeFlags & 2064 && g !== null)
                        g.return = s,
                        O = g;
                    else
                        e: for (s = d; O !== null; ) {
                            if (l = O,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        is(9, l)
                                    }
                                } catch (w) {
                                    ne(l, l.return, w)
                                }
                            if (l === s) {
                                O = null;
                                break e
                            }
                            var x = l.sibling;
                            if (x !== null) {
                                x.return = l.return,
                                O = x;
                                break e
                            }
                            O = l.return
                        }
                }
                if (L = i,
                mn(),
                Tt && typeof Tt.onPostCommitFiberRoot == "function")
                    try {
                        Tt.onPostCommitFiberRoot(Zo, t)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            U = n,
            st.transition = e
        }
    }
    return !1
}
function wc(t, e, n) {
    e = wr(n, e),
    e = Od(t, e, 1),
    t = nn(t, e, 1),
    e = je(),
    t !== null && (ji(t, 1, e),
    Le(t, e))
}
function ne(t, e, n) {
    if (t.tag === 3)
        wc(t, t, n);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                wc(e, t, n);
                break
            } else if (e.tag === 1) {
                var r = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (rn === null || !rn.has(r))) {
                    t = wr(n, t),
                    t = zd(e, t, 1),
                    e = nn(e, t, 1),
                    t = je(),
                    e !== null && (ji(e, 1, t),
                    Le(e, t));
                    break
                }
            }
            e = e.return
        }
}
function k0(t, e, n) {
    var r = t.pingCache;
    r !== null && r.delete(e),
    e = je(),
    t.pingedLanes |= t.suspendedLanes & n,
    pe === t && (ye & n) === n && (fe === 4 || fe === 3 && (ye & 130023424) === ye && 500 > oe() - Wa ? jn(t, 0) : Ba |= n),
    Le(t, e)
}
function qd(t, e) {
    e === 0 && (t.mode & 1 ? (e = Vi,
    Vi <<= 1,
    !(Vi & 130023424) && (Vi = 4194304)) : e = 1);
    var n = je();
    t = Ft(t, e),
    t !== null && (ji(t, e, n),
    Le(t, n))
}
function S0(t) {
    var e = t.memoizedState
      , n = 0;
    e !== null && (n = e.retryLane),
    qd(t, n)
}
function T0(t, e) {
    var n = 0;
    switch (t.tag) {
    case 13:
        var r = t.stateNode
          , i = t.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = t.stateNode;
        break;
    default:
        throw Error(P(314))
    }
    r !== null && r.delete(e),
    qd(t, n)
}
var Jd;
Jd = function(t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || De.current)
            Re = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128))
                return Re = !1,
                f0(t, e, n);
            Re = !!(t.flags & 131072)
        }
    else
        Re = !1,
        X && e.flags & 1048576 && nd(e, No, e.index);
    switch (e.lanes = 0,
    e.tag) {
    case 2:
        var r = e.type;
        ao(t, e),
        t = e.pendingProps;
        var i = vr(e, Ee.current);
        fr(e, n),
        i = Ia(null, e, r, t, i, n);
        var o = La();
        return e.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1,
        e.memoizedState = null,
        e.updateQueue = null,
        Ie(r) ? (o = !0,
        Eo(e)) : o = !1,
        e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Oa(e),
        i.updater = rs,
        e.stateNode = i,
        i._reactInternals = e,
        Pl(e, r, t, n),
        e = Ol(null, e, r, !0, o, n)) : (e.tag = 0,
        X && o && Sa(e),
        Pe(null, e, i, n),
        e = e.child),
        e;
    case 16:
        r = e.elementType;
        e: {
            switch (ao(t, e),
            t = e.pendingProps,
            i = r._init,
            r = i(r._payload),
            e.type = r,
            i = e.tag = E0(r),
            t = dt(r, t),
            i) {
            case 0:
                e = jl(null, e, r, t, n);
                break e;
            case 1:
                e = fc(null, e, r, t, n);
                break e;
            case 11:
                e = uc(null, e, r, t, n);
                break e;
            case 14:
                e = cc(null, e, r, dt(r.type, t), n);
                break e
            }
            throw Error(P(306, r, ""))
        }
        return e;
    case 0:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : dt(r, i),
        jl(t, e, r, i, n);
    case 1:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : dt(r, i),
        fc(t, e, r, i, n);
    case 3:
        e: {
            if (Id(e),
            t === null)
                throw Error(P(387));
            r = e.pendingProps,
            o = e.memoizedState,
            i = o.element,
            ad(t, e),
            zo(e, r, null, n);
            var s = e.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                e.updateQueue.baseState = o,
                e.memoizedState = o,
                e.flags & 256) {
                    i = wr(Error(P(423)), e),
                    e = dc(t, e, r, n, i);
                    break e
                } else if (r !== i) {
                    i = wr(Error(P(424)), e),
                    e = dc(t, e, r, n, i);
                    break e
                } else
                    for (Qe = tn(e.stateNode.containerInfo.firstChild),
                    Xe = e,
                    X = !0,
                    pt = null,
                    n = sd(e, null, r, n),
                    e.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (yr(),
                r === i) {
                    e = At(t, e, n);
                    break e
                }
                Pe(t, e, r, n)
            }
            e = e.child
        }
        return e;
    case 5:
        return ud(e),
        t === null && Tl(e),
        r = e.type,
        i = e.pendingProps,
        o = t !== null ? t.memoizedProps : null,
        s = i.children,
        _l(r, i) ? s = null : o !== null && _l(r, o) && (e.flags |= 32),
        Dd(t, e),
        Pe(t, e, s, n),
        e.child;
    case 6:
        return t === null && Tl(e),
        null;
    case 13:
        return Ld(t, e, n);
    case 4:
        return za(e, e.stateNode.containerInfo),
        r = e.pendingProps,
        t === null ? e.child = _r(e, null, r, n) : Pe(t, e, r, n),
        e.child;
    case 11:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : dt(r, i),
        uc(t, e, r, i, n);
    case 7:
        return Pe(t, e, e.pendingProps, n),
        e.child;
    case 8:
        return Pe(t, e, e.pendingProps.children, n),
        e.child;
    case 12:
        return Pe(t, e, e.pendingProps.children, n),
        e.child;
    case 10:
        e: {
            if (r = e.type._context,
            i = e.pendingProps,
            o = e.memoizedProps,
            s = i.value,
            H(jo, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (vt(o.value, s)) {
                    if (o.children === i.children && !De.current) {
                        e = At(t, e, n);
                        break e
                    }
                } else
                    for (o = e.child,
                    o !== null && (o.return = e); o !== null; ) {
                        var l = o.dependencies;
                        if (l !== null) {
                            s = o.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (o.tag === 1) {
                                        a = Dt(-1, n & -n),
                                        a.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    o.lanes |= n,
                                    a = o.alternate,
                                    a !== null && (a.lanes |= n),
                                    Cl(o.return, n, e),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === e.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(P(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            Cl(s, n, e),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === e) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            Pe(t, e, i.children, n),
            e = e.child
        }
        return e;
    case 9:
        return i = e.type,
        r = e.pendingProps.children,
        fr(e, n),
        i = lt(i),
        r = r(i),
        e.flags |= 1,
        Pe(t, e, r, n),
        e.child;
    case 14:
        return r = e.type,
        i = dt(r, e.pendingProps),
        i = dt(r.type, i),
        cc(t, e, r, i, n);
    case 15:
        return Md(t, e, e.type, e.pendingProps, n);
    case 17:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : dt(r, i),
        ao(t, e),
        e.tag = 1,
        Ie(r) ? (t = !0,
        Eo(e)) : t = !1,
        fr(e, n),
        jd(e, r, i),
        Pl(e, r, i, n),
        Ol(null, e, r, !0, t, n);
    case 19:
        return Fd(t, e, n);
    case 22:
        return Rd(t, e, n)
    }
    throw Error(P(156, e.tag))
}
;
function bd(t, e) {
    return Ef(t, e)
}
function C0(t, e, n, r) {
    this.tag = t,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = e,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function rt(t, e, n, r) {
    return new C0(t,e,n,r)
}
function Ga(t) {
    return t = t.prototype,
    !(!t || !t.isReactComponent)
}
function E0(t) {
    if (typeof t == "function")
        return Ga(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof,
        t === fa)
            return 11;
        if (t === da)
            return 14
    }
    return 2
}
function sn(t, e) {
    var n = t.alternate;
    return n === null ? (n = rt(t.tag, e, t.key, t.mode),
    n.elementType = t.elementType,
    n.type = t.type,
    n.stateNode = t.stateNode,
    n.alternate = t,
    t.alternate = n) : (n.pendingProps = e,
    n.type = t.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = t.flags & 14680064,
    n.childLanes = t.childLanes,
    n.lanes = t.lanes,
    n.child = t.child,
    n.memoizedProps = t.memoizedProps,
    n.memoizedState = t.memoizedState,
    n.updateQueue = t.updateQueue,
    e = t.dependencies,
    n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    },
    n.sibling = t.sibling,
    n.index = t.index,
    n.ref = t.ref,
    n
}
function fo(t, e, n, r, i, o) {
    var s = 2;
    if (r = t,
    typeof t == "function")
        Ga(t) && (s = 1);
    else if (typeof t == "string")
        s = 5;
    else
        e: switch (t) {
        case Xn:
            return On(n.children, i, o, e);
        case ca:
            s = 8,
            i |= 8;
            break;
        case qs:
            return t = rt(12, n, e, i | 2),
            t.elementType = qs,
            t.lanes = o,
            t;
        case Js:
            return t = rt(13, n, e, i),
            t.elementType = Js,
            t.lanes = o,
            t;
        case bs:
            return t = rt(19, n, e, i),
            t.elementType = bs,
            t.lanes = o,
            t;
        case uf:
            return ss(n, i, o, e);
        default:
            if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                case lf:
                    s = 10;
                    break e;
                case af:
                    s = 9;
                    break e;
                case fa:
                    s = 11;
                    break e;
                case da:
                    s = 14;
                    break e;
                case $t:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(P(130, t == null ? t : typeof t, ""))
        }
    return e = rt(s, n, e, i),
    e.elementType = t,
    e.type = r,
    e.lanes = o,
    e
}
function On(t, e, n, r) {
    return t = rt(7, t, r, e),
    t.lanes = n,
    t
}
function ss(t, e, n, r) {
    return t = rt(22, t, r, e),
    t.elementType = uf,
    t.lanes = n,
    t.stateNode = {
        isHidden: !1
    },
    t
}
function Us(t, e, n) {
    return t = rt(6, t, null, e),
    t.lanes = n,
    t
}
function Vs(t, e, n) {
    return e = rt(4, t.children !== null ? t.children : [], t.key, e),
    e.lanes = n,
    e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    },
    e
}
function P0(t, e, n, r, i) {
    this.tag = e,
    this.containerInfo = t,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = xs(0),
    this.expirationTimes = xs(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = xs(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Ya(t, e, n, r, i, o, s, l, a) {
    return t = new P0(t,e,n,l,a),
    e === 1 ? (e = 1,
    o === !0 && (e |= 8)) : e = 0,
    o = rt(3, null, null, e),
    t.current = o,
    o.stateNode = t,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Oa(o),
    t
}
function N0(t, e, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Yn,
        key: r == null ? null : "" + r,
        children: t,
        containerInfo: e,
        implementation: n
    }
}
function eh(t) {
    if (!t)
        return cn;
    t = t._reactInternals;
    e: {
        if ($n(t) !== t || t.tag !== 1)
            throw Error(P(170));
        var e = t;
        do {
            switch (e.tag) {
            case 3:
                e = e.stateNode.context;
                break e;
            case 1:
                if (Ie(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            e = e.return
        } while (e !== null);
        throw Error(P(171))
    }
    if (t.tag === 1) {
        var n = t.type;
        if (Ie(n))
            return ed(t, n, e)
    }
    return e
}
function th(t, e, n, r, i, o, s, l, a) {
    return t = Ya(n, r, !0, t, i, o, s, l, a),
    t.context = eh(null),
    n = t.current,
    r = je(),
    i = on(n),
    o = Dt(r, i),
    o.callback = e ?? null,
    nn(n, o, i),
    t.current.lanes = i,
    ji(t, i, r),
    Le(t, r),
    t
}
function ls(t, e, n, r) {
    var i = e.current
      , o = je()
      , s = on(i);
    return n = eh(n),
    e.context === null ? e.context = n : e.pendingContext = n,
    e = Dt(o, s),
    e.payload = {
        element: t
    },
    r = r === void 0 ? null : r,
    r !== null && (e.callback = r),
    t = nn(i, e, s),
    t !== null && (gt(t, i, s, o),
    oo(t, i, s)),
    s
}
function Uo(t) {
    if (t = t.current,
    !t.child)
        return null;
    switch (t.child.tag) {
    case 5:
        return t.child.stateNode;
    default:
        return t.child.stateNode
    }
}
function kc(t, e) {
    if (t = t.memoizedState,
    t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}
function Xa(t, e) {
    kc(t, e),
    (t = t.alternate) && kc(t, e)
}
function j0() {
    return null
}
var nh = typeof reportError == "function" ? reportError : function(t) {
    console.error(t)
}
;
function Ka(t) {
    this._internalRoot = t
}
as.prototype.render = Ka.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null)
        throw Error(P(409));
    ls(t, e, null, null)
}
;
as.prototype.unmount = Ka.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Un(function() {
            ls(null, t, null, null)
        }),
        e[Lt] = null
    }
}
;
function as(t) {
    this._internalRoot = t
}
as.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = Rf();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < Qt.length && e !== 0 && e < Qt[n].priority; n++)
            ;
        Qt.splice(n, 0, t),
        n === 0 && If(t)
    }
}
;
function Za(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}
function us(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}
function Sc() {}
function O0(t, e, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = Uo(s);
                o.call(u)
            }
        }
        var s = th(e, r, t, 0, null, !1, !1, "", Sc);
        return t._reactRootContainer = s,
        t[Lt] = s.current,
        di(t.nodeType === 8 ? t.parentNode : t),
        Un(),
        s
    }
    for (; i = t.lastChild; )
        t.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = Uo(a);
            l.call(u)
        }
    }
    var a = Ya(t, 0, !1, null, null, !1, !1, "", Sc);
    return t._reactRootContainer = a,
    t[Lt] = a.current,
    di(t.nodeType === 8 ? t.parentNode : t),
    Un(function() {
        ls(e, a, n, r)
    }),
    a
}
function cs(t, e, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = Uo(s);
                l.call(a)
            }
        }
        ls(e, s, t, i)
    } else
        s = O0(n, e, t, i, r);
    return Uo(s)
}
zf = function(t) {
    switch (t.tag) {
    case 3:
        var e = t.stateNode;
        if (e.current.memoizedState.isDehydrated) {
            var n = Wr(e.pendingLanes);
            n !== 0 && (ma(e, n | 1),
            Le(e, oe()),
            !(L & 6) && (kr = oe() + 500,
            mn()))
        }
        break;
    case 13:
        Un(function() {
            var r = Ft(t, 1);
            if (r !== null) {
                var i = je();
                gt(r, t, 1, i)
            }
        }),
        Xa(t, 1)
    }
}
;
ga = function(t) {
    if (t.tag === 13) {
        var e = Ft(t, 134217728);
        if (e !== null) {
            var n = je();
            gt(e, t, 134217728, n)
        }
        Xa(t, 134217728)
    }
}
;
Mf = function(t) {
    if (t.tag === 13) {
        var e = on(t)
          , n = Ft(t, e);
        if (n !== null) {
            var r = je();
            gt(n, t, e, r)
        }
        Xa(t, e)
    }
}
;
Rf = function() {
    return U
}
;
Df = function(t, e) {
    var n = U;
    try {
        return U = t,
        e()
    } finally {
        U = n
    }
}
;
ul = function(t, e, n) {
    switch (e) {
    case "input":
        if (nl(t, n),
        e = n.name,
        n.type === "radio" && e != null) {
            for (n = t; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'),
            e = 0; e < n.length; e++) {
                var r = n[e];
                if (r !== t && r.form === t.form) {
                    var i = es(r);
                    if (!i)
                        throw Error(P(90));
                    ff(r),
                    nl(r, i)
                }
            }
        }
        break;
    case "textarea":
        hf(t, n);
        break;
    case "select":
        e = n.value,
        e != null && lr(t, !!n.multiple, e, !1)
    }
}
;
xf = $a;
wf = Un;
var z0 = {
    usingClientEntryPoint: !1,
    Events: [zi, Jn, es, yf, _f, $a]
}
  , Ar = {
    findFiberByHostInstance: Tn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , M0 = {
    bundleType: Ar.bundleType,
    version: Ar.version,
    rendererPackageName: Ar.rendererPackageName,
    rendererConfig: Ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Bt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(t) {
        return t = Tf(t),
        t === null ? null : t.stateNode
    },
    findFiberByHostInstance: Ar.findFiberByHostInstance || j0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qi.isDisabled && qi.supportsFiber)
        try {
            Zo = qi.inject(M0),
            Tt = qi
        } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z0;
Je.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Za(e))
        throw Error(P(200));
    return N0(t, e, null, n)
}
;
Je.createRoot = function(t, e) {
    if (!Za(t))
        throw Error(P(299));
    var n = !1
      , r = ""
      , i = nh;
    return e != null && (e.unstable_strictMode === !0 && (n = !0),
    e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
    e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    e = Ya(t, 1, !1, null, null, n, !1, r, i),
    t[Lt] = e.current,
    di(t.nodeType === 8 ? t.parentNode : t),
    new Ka(e)
}
;
Je.findDOMNode = function(t) {
    if (t == null)
        return null;
    if (t.nodeType === 1)
        return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function" ? Error(P(188)) : (t = Object.keys(t).join(","),
        Error(P(268, t)));
    return t = Tf(e),
    t = t === null ? null : t.stateNode,
    t
}
;
Je.flushSync = function(t) {
    return Un(t)
}
;
Je.hydrate = function(t, e, n) {
    if (!us(e))
        throw Error(P(200));
    return cs(null, t, e, !0, n)
}
;
Je.hydrateRoot = function(t, e, n) {
    if (!Za(t))
        throw Error(P(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = nh;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    e = th(e, null, t, 1, n ?? null, i, !1, o, s),
    t[Lt] = e.current,
    di(t),
    r)
        for (t = 0; t < r.length; t++)
            n = r[t],
            i = n._getVersion,
            i = i(n._source),
            e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, i] : e.mutableSourceEagerHydrationData.push(n, i);
    return new as(e)
}
;
Je.render = function(t, e, n) {
    if (!us(e))
        throw Error(P(200));
    return cs(null, t, e, !1, n)
}
;
Je.unmountComponentAtNode = function(t) {
    if (!us(t))
        throw Error(P(40));
    return t._reactRootContainer ? (Un(function() {
        cs(null, null, t, !1, function() {
            t._reactRootContainer = null,
            t[Lt] = null
        })
    }),
    !0) : !1
}
;
Je.unstable_batchedUpdates = $a;
Je.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
    if (!us(n))
        throw Error(P(200));
    if (t == null || t._reactInternals === void 0)
        throw Error(P(38));
    return cs(t, e, n, !1, r)
}
;
Je.version = "18.3.1-next-f1338f8080-20240426";
function rh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rh)
        } catch (t) {
            console.error(t)
        }
}
rh(),
nf.exports = Je;
var R0 = nf.exports, ih, Tc = R0;
ih = Tc.createRoot,
Tc.hydrateRoot;
const D0 = () => y.jsxs("div", {
    className: " select-none",
    children: [y.jsxs("div", {
        className: " flex items-center",
        children: [y.jsxs("div", {
            className: "flex-grow space-y-0.5",
            children: [y.jsx("hr", {
                className: "border-t-[5px] border-black/85"
            }), y.jsx("hr", {
                className: "border-t-[2px] border-black/90"
            })]
        }), y.jsx("span", {
            className: "mx-2 text-5xl font-OldLondon  text-themeOrange",
            children: "the"
        }), y.jsxs("div", {
            className: "flex-grow space-y-0.5",
            children: [y.jsx("hr", {
                className: "border-t-[5px] border-black/85"
            }), y.jsx("hr", {
                className: "border-t-[2px] border-black/90"
            })]
        })]
    }), y.jsxs("div", {
        className: "flex flex-col gap-4 items-center pb-6",
        children: [y.jsx("div", {
            className: " text-8xl font-semibold font-OldLondon text-black/90",
            children: "Daily Crimes"
        }), y.jsx("div", {
            className: " font-EditorialNew  ",
            children: "Unfolding the Stories & Showcasing the Reality of this Country"
        })]
    }), y.jsxs("div", {
        className: "flex flex-col space-y-0.5",
        children: [y.jsx("hr", {
            className: "border-t-[2px] border-black/90"
        }), y.jsx("hr", {
            className: "border-t-[5px] border-black/85"
        })]
    })]
})
  , I0 = () => y.jsx("div", {
    className: " select-none flex items-center",
    children: y.jsx("div", {
        className: " text-9xl  font-Canopee text-center bg-zinc-800 w-full my-10 text-[#E9E4DB] p-2",
        children: y.jsx("p", {
            children: "Are We Truly Safe from Crime?"
        })
    })
})
  , L0 = () => y.jsxs("div", {
    className: " flex flex-row justify-between gap-5 my-8  ",
    children: [y.jsxs("div", {
        className: " basis-1/2 ",
        children: [y.jsx("div", {
            className: " pb-3",
            children: y.jsxs("h1", {
                className: " font-TimesNewRoman font-extrabold text-5xl",
                children: ["What’s Driving the Crime Rise in India? Key Factors Explored", " "]
            })
        }), y.jsxs("div", {
            className: " flex flex-row gap-3 text-justify text-sm",
            children: [y.jsxs("div", {
                className: " flex-1 flex flex-col gap-1  ",
                children: [y.jsxs("div", {
                    className: "flex flex-col gap-0.5 ",
                    children: [y.jsxs("p", {
                        children: [y.jsx("span", {
                            className: " high",
                            children: "I"
                        }), "ndia is facing a serious rise in crime rates, which has raised major concerns about public safety. This increase in crime can be linked to several key factors, such as economic gaps, fast urban growth, and a lack of resources for law enforcement. As cities expand and populations grow, the pressure on services and community support often leads to a breakdown in safety. Many urban areas are seeing alarming increases in violent crimes, such as assaults and murders, as well as property crimes like theft and burglary. The rise of the internet has also led to more cybercrimes, making people and businesses easy targets for online threats. Social issues, including high unemployment and drug use, make the problem worse, pushing people toward crime."]
                    }), y.jsx("p", {
                        children: "To tackle these issues, community programs that raise awareness are vital. These efforts can build trust between people and police, leading to a team approach to fighting crime. Improving policing methods and making changes to the justice system are also key to ensuring that justice is done. Understanding the reasons behind rising crime is important for creating effective plans to bring back safety and trust in communities across India."
                    })]
                }), y.jsx("div", {
                    children: y.jsx("h1", {
                        className: " text-xl",
                        children: "Understanding the Causes of Rising Crime in India"
                    })
                }), y.jsx("div", {
                    children: y.jsx("p", {
                        children: "The rise in crime in India has many causes that need to be addressed. Economic inequality is a major factor, as many people struggle to get basic needs like food, shelter, and healthcare. Fast urban growth makes this problem worse, leading to crowded cities where crime can grow easily. In many places, a lack of strong law enforcement leaves communities unsafe. Social issues like job loss and drug use also add to the rise in crime. Many people turn to crime out of need or desperation. Family issues and lack of education can lead people down the wrong path. To fight crime, it is important to address these causes and find ways to make communities safer. Strong community programs and better policing can help reduce crime."
                    })
                })]
            }), y.jsxs("div", {
                className: " flex-1 flex flex-col gap-3  ",
                children: [y.jsx("div", {
                    className: "flex flex-col gap-0.5",
                    children: y.jsx("p", {
                        children: "The rise in crime in India is a big problem that needs attention. There are many reasons for this increase. One main cause is poverty. Many people struggle to meet their basic needs for food, clean water, and a safe home. This lack can lead some to commit crimes just to survive. Another reason is the fast growth of cities. As more people move to urban areas, they create crowded places where crime can happen easily. The lack of good law enforcement adds to the issue. Police often do not have enough tools or training to keep people safe, which makes many feel afraid in their own neighborhoods. Social problems like job loss and drug use make the situation worse. When people lose their jobs or face other hardships, they may feel hopeless and turn to crime. To fight this problem, it is important to build better job chances and support programs to help families and communities feel safer."
                    })
                }), y.jsx("div", {
                    className: " flex justify-center",
                    children: y.jsx("img", {
                        src: "/IMG/crimeGIFS/a-6.gif"
                    })
                }), y.jsx("div", {
                    children: y.jsx("p", {
                        children: "Rape is a serious crime that harms many people in India. It causes deep pain to victims, both physical and emotional. The rise in rape cases has created fear in society and calls for urgent action. Many reasons contribute to this problem, including gender inequality, a lack of education, and attitudes that blame victims. Police often struggle to handle these cases well, which can lead to low trust in the justice system. To fight this problem, it is important to raise awareness, improve education about consent, and provide better support for survivors."
                    })
                })]
            }), y.jsxs("div", {
                className: " flex-1 flex flex-col gap-0.5  ",
                children: [y.jsx("p", {
                    children: "Rape cases in India are a serious problem, with more reports causing fear and anger. Issues like gender inequality, social attitudes, and weak legal support add to the problem. Raising awareness, teaching communities, and making laws stronger are key steps to protect victims and get justice for survivors."
                }), y.jsx("h1", {
                    className: " text-xl",
                    children: "Understanding Rape Cases in India: A Serious Concern"
                }), y.jsxs("div", {
                    className: " flex flex-col gap-0.5",
                    children: [y.jsx("p", {
                        children: "Rape cases in India are a serious concern that affects many lives. Every year, thousands of women face this terrible crime, leaving deep physical and emotional scars. The rise in these cases has led to fear in many communities. A number of reasons contribute to this issue, including gender inequality, outdated social norms, and a lack of education about consent. Many victims do not report the crime due to shame or fear of not being believed. The police often struggle to handle these cases properly, leading to low trust in the justice system. There is also a need for better training for law enforcement to deal with these sensitive cases with care and respect. To tackle this problem, it is important to raise awareness in society. Education plays a key role in changing mindsets and promoting respect for all individuals. Schools should teach students about consent, boundaries, and the importance of support for victims. Community programs can help spread knowledge and create safe spaces for discussion. Everyone must come together to fight against rape and support survivors. By creating safer environments and improving laws, we can help ensure justice and restore hope for many affected by this crime."
                    }), y.jsx("p", {
                        children: "Rape cases in India show the urgent need for change. Stronger laws and better support are key to protecting victims. Communities must come together to challenge harmful views and promote respect for everyone. By teaching people about consent and boundaries, we can help prevent these crimes and create a safer future for all. It is vital to encourage open discussions about this issue to raise awareness and reduce stigma. Everyone has a role to play in making society safer and more caring."
                    })]
                })]
            })]
        })]
    }), y.jsxs("div", {
        className: " flex flex-col gap-4 basis-1/2 ",
        children: [y.jsx("img", {
            src: "/IMG/crimeGIFS/a-3.gif",
            className: "h-[500px] object-cover"
        }), y.jsxs("div", {
            className: " flex gap-4 text-justify",
            children: [y.jsxs("div", {
                className: " flex-1 flex flex-col gap-1.5",
                children: [y.jsx("div", {
                    children: y.jsx("h1", {
                        className: "text-3xl",
                        children: "Coming Together to Fight Crime and Keep Everyone Safe Always Here"
                    })
                }), y.jsxs("div", {
                    className: " flex flex-col gap-0.5",
                    children: [y.jsx("p", {
                        children: "To fight crime and keep everyone safe, we must come together as a community. Working together helps us share information, tools, and support. Neighborhood watch programs can help people stay alert and report anything strange. Schools should teach kids about safety and the importance of speaking up. Local leaders can work with police to improve trust and support. Community events can also raise awareness about crime prevention and help build strong ties among neighbors. When everyone plays a part, we can create a safer place where all people feel protected and valued in their daily lives."
                    }), y.jsx("p", {
                        children: "To keep our community safe, it is also important to listen to those affected by crime. Giving victims a voice helps us understand their needs and concerns. Support groups can offer help and comfort, making it easier for them to heal. We must also focus on the root causes of crime, like poverty and lack of jobs. By providing education and job training, we can give people a better chance at a good life. When we invest in our youth, we build a brighter future. Together, with care and action, we can make our neighborhoods strong and safe for everyone."
                    })]
                })]
            }), y.jsxs("div", {
                className: "flex-1 flex flex-col gap-0.5",
                children: [y.jsx("p", {
                    children: "Crimes and rape in India are serious problems that need urgent help. Many women and kids face violence, causing fear in their daily lives. These crimes leave deep scars, both physical and mental. Issues like poverty, lack of education, and gender bias add to these crimes. Victims often feel alone and scared to speak out, allowing the cycle of violence to keep going. In many cases, the justice system does not support victims, making it hard for them to seek help. Police may not take cases seriously, and courts can take too long to give justice. This low trust in the system can stop victims from reporting crimes."
                }), y.jsx("p", {
                    children: "It is key to create strong laws that protect victims and hold offenders accountable. Community support and awareness programs can help change views on violence and empower people. Teaching about respect, consent, and healthy relationships is vital for young people to build a safer future for all. Schools and parents play an important role in this education. By working together, we can build a society that does not tolerate violence and supports all victims. Everyone must act to ensure safety and justice for everyone in the community. Local leaders and organizations should also join in these efforts to make a bigger impact. Only through combined action can we hope to end violence and create a safer world for all, where every individual feels valued, secure, and free from harm."
                })]
            })]
        })]
    })]
})
  , F0 = () => y.jsx("div", {
    className: " ",
    children: y.jsxs("div", {
        className: " flex gap-2",
        children: [y.jsxs("div", {
            className: " basis-1/5 text-justify border-r-2 border-zinc-700 pr-2 flex flex-col gap-2",
            children: [y.jsx("div", {
                children: y.jsx("img", {
                    src: "/IMG/crimeGIFS/b-1.gif",
                    alt: "news_img",
                    className: " object-cover"
                })
            }), y.jsx("div", {
                children: y.jsx("h1", {
                    className: "text-3xl",
                    children: "Is the Government Really Making Our Safety a True Priority?"
                })
            }), y.jsxs("div", {
                className: " flex flex-col gap-0.5",
                children: [y.jsx("p", {
                    children: "Many people wonder if the government is really making our safety a true priority. Rising crime rates and the fear of violence have left citizens feeling unsafe. While leaders often talk about safety, actions speak louder than words. Many believe that the government cares more about politics than protecting people. Support for police and crime prevention programs seems to be lacking in some areas. When money is cut from safety programs, communities suffer. Citizens need to see a clear plan to reduce crime and help victims. If the government wants to gain trust, it must show that safety is its main goal."
                }), y.jsx("p", {
                    children: "To make safety a true priority, the government must listen to the needs of the people. It should work closely with local leaders and community groups to understand the problems facing each area. By doing this, it can create plans that really address crime. More money should go to support programs that help victims and stop crime. This includes teaching, job training, and mental health services. When people have hope and support."
                })]
            })]
        }), y.jsxs("div", {
            className: " basis-4/5 flex gap-5",
            children: [y.jsxs("div", {
                className: " basis-3/5 flex flex-col gap-3",
                children: [y.jsx("div", {
                    children: y.jsx("h1", {
                        className: " text-4xl",
                        children: "Why Is the Government Ignoring National Crime Rates for Regional Issues?"
                    })
                }), y.jsxs("div", {
                    className: " flex gap-3 text-sm text-justify ",
                    children: [y.jsxs("div", {
                        className: " flex-1 flex flex-col gap-1.5",
                        children: [y.jsxs("p", {
                            children: [y.jsx("span", {
                                className: "high",
                                children: "T"
                            }), "he government’s focus on regional crimes over national issues raises big concerns about its commitment to public safety. While it is important to deal with local problems, the rising crime rates across the country need urgent attention. Many citizens feel neglected as the government puts regional politics first instead of tackling the root causes of crime that affect everyone. This selective focus allows serious crimes, like violence against women and organized crime, to go unchecked. Victims across India often feel unheard and unsupported as their cases are lost in political agendas."]
                        }), y.jsx("p", {
                            children: "Instead of using a strong plan to fight crime, the government often sends resources based on local popularity rather than real need. Also, the lack of a clear national plan to deal with crime can lead to uneven law enforcement and justice across states. This results in some areas getting better policing while others are ignored. Citizens are left wondering about the government’s true goals. If the government does not recognize the rising crime rates on a national level, it risks losing public trust and safety. Leaders must unite to address these issues, ensuring safety and justice for all citizens, not just a few."
                        }), y.jsx("p", {
                            children: "The government’s failure to deal with national crime issues makes many citizens feel scared. People often feel unsafe in their own communities, as local police struggle to keep order. A stronger, united approach is needed, focusing on stopping crime."
                        })]
                    }), y.jsxs("div", {
                        className: " flex-1 flex flex-col gap-2",
                        children: [y.jsx("p", {
                            children: "Many people feel that the government is not doing enough to fight crime in the country. Instead of making plans to deal with issues like violence, theft, and fraud, leaders often focus on local problems that help their own goals. This lack of action makes people feel scared and lose trust. Without a strong plan, police in different areas may use different rules and ways to work. This means some places get better help while others are left behind. Victims may feel lost and alone, with no one to ask for help. To build a safer country, the government must pay attention to all crime, not just what is easy or popular. A fair and clear plan can help everyone feel safe and cared for, showing that their safety truly matters."
                        }), y.jsx("div", {
                            children: y.jsx("img", {
                                src: "/IMG/crimeGIFS/a-1.gif",
                                className: "object-cover"
                            })
                        }), y.jsx("p", {
                            children: "The government must listen to the people when it comes to crime. Many citizens have stories of fear and pain from rising violence. It is important for leaders to take these stories seriously and act fast. Support systems, like hotlines and shelters, should be set up to help victims feel safe. Teaching about crime and safety should also be a top goal in schools and communities. Showing people how to protect themselves can help reduce fear. When the community and government work together, they can make a safer place."
                        })]
                    }), y.jsxs("div", {
                        className: " flex-1 flex flex-col gap-1.5",
                        children: [y.jsx("p", {
                            children: "The government must listen to the people when it comes to crime. Many citizens have stories of fear and pain from rising violence. It is important for leaders to take these stories seriously and act quickly. Support systems, like hotlines and shelters, should be set up to help victims feel safe. These resources can give people the strength to speak out and seek help."
                        }), y.jsx("p", {
                            children: "Teaching about crime and safety should also be a top goal in schools and communities. Showing people how to protect themselves can help reduce fear. Schools can teach kids about respect and safety, while parents can talk openly about these issues at home. Community programs can offer safety classes to help everyone feel more secure. When people know how to stay safe, they feel more in control of their lives."
                        }), y.jsx("p", {
                            children: "When the community and government work together, they can make a safer place for everyone. It is key for leaders to focus on both local and national crime issues. A strong plan that takes care of all crime is needed to build trust and support. By acting together, we can fight crime more effectively and create a safe environment. It is time for a united effort against crime to ensure that every citizen feels safe and valued in their community. Leaders must show that they care about people’s safety by listening to their needs and acting on their concerns. Community groups can help by working with police to build stronger ties. Together, we can make a real change that leads to a better future for all."
                        })]
                    })]
                })]
            }), y.jsxs("div", {
                className: " text-justify basis-2/5 border-2 border-zinc-700 p-2 flex flex-col gap-4",
                children: [y.jsx("div", {
                    children: y.jsx("img", {
                        src: "/IMG/crimeGIFS/pm.gif",
                        alt: "news_img",
                        className: " object-cover grayscale"
                    })
                }), y.jsx("div", {
                    children: y.jsx("p", {
                        children: "The Prime Minister seems to be ignoring the rising crime in the country, choosing instead to focus on local politics. While local issues matter, the growing crime rates across India need fast attention. People are worried about crimes like violence, theft, and rape, but these problems are often ignored while the government tries to gain votes in certain areas. Many feel that the Prime Minister cares more about building his political support than solving the country’s crime problems. Instead of making a plan to fight crime across the country, the government spends too much time on local issues. This leaves many parts of India without the help they need to handle serious crimes. Victims feel alone, and criminals often go unpunished due to a lack of focus and resources. The Prime Minister’s focus on local politics creates a divide among citizens. People in areas that get more attention may feel safer, while those in ignored areas face higher risks. A strong leader should care about the safety of the whole country, not just a few areas. The government must work to strengthen police and give better support to crime victims. Ignoring rising crime is not only unsafe for citizens, but it also hurts the trust people have in their leaders. If the government keeps ignoring crime at a national level, fear and anger will keep growing. More crime prevention programs, police training, and national laws are needed to tackle these issues properly."
                    })
                })]
            })]
        })]
    })
})
  , A0 = () => y.jsxs("div", {
    className: " flex flex-row gap-5 text-justify",
    children: [y.jsxs("div", {
        className: " flex-1 flex flex-col gap-2 ",
        children: [y.jsx("div", {
            children: y.jsx("h1", {
                className: " text-4xl",
                children: "Are we voting for the future of our country, or just focusing on our own Region's Interests?"
            })
        }), y.jsxs("div", {
            className: "flex gap-3 text-sm ",
            children: [y.jsxs("div", {
                className: " flex-1 flex flex-col gap-1",
                children: [y.jsxs("p", {
                    children: [y.jsx("span", {
                        className: "high",
                        children: "I"
                    }), "n India, voting often seems more focused on regional issues rather than the overall progress of the country. People tend to prioritize local leaders who promise quick fixes for their immediate needs, like local development projects or jobs for their specific region. While it’s important for regional issues to be addressed, this approach often overlooks the bigger picture—the country’s overall progress and the serious challenges we face, such as rising crime, economic stability, and national security."]
                }), y.jsx("p", {
                    children: "Regional politics can sometimes blind voters to the larger problems that affect all citizens. When people vote based only on their region’s needs, it can lead to leaders who are more focused on short-term local gains than long-term national progress. This kind of voting may slow down efforts to address critical issues like crime, education, and poverty across the country."
                }), y.jsx("p", {
                    children: "The media and politicians often play a big role in keeping the focus on regional issues, feeding into the division. Voters get caught up in promises that benefit their specific area and forget about the larger concerns that impact the whole nation."
                }), y.jsx("img", {
                    src: "/IMG/crimeGIFS/a-7.gif"
                })]
            }), y.jsxs("div", {
                className: " flex-1 flex flex-col gap-1",
                children: [y.jsx("p", {
                    children: "In India, the voting system is deeply influenced by regional dynamics. Voters often align their decisions with local leaders who promise immediate benefits like infrastructure projects or subsidies, which can improve life in their specific area. This practice, while understandable, narrows the focus of elections. It often causes voters to overlook national issues that affect the country’s overall progress, such as education reform, poverty reduction, and crime control. Instead of focusing on policies that will help the country as a whole, elections become about who can deliver the most in a specific region."
                }), y.jsx("p", {
                    children: "This kind of voting leads to a fragmented political landscape, where politicians cater to regional interests instead of addressing the country’s most pressing concerns. As a result, many leaders focus on short-term local wins that appeal to voters in their area, rather than tackling long-term national issues like economic development, public safety, or healthcare. When leaders are chosen based on their ability to satisfy regional demands, national issues are often pushed to the background, leaving key problems unaddressed. The media and political parties often add to this problem by focusing on regional stories and giving airtime to issues that only affect specific areas. This reinforces the idea that regional concerns are more important than national challenges. Voters, in turn, may feel more inclined to vote for someone who promises to fix their local issues, even if that means ignoring broader, more urgent problems facing the country."
                })]
            })]
        })]
    }), y.jsxs("div", {
        className: " flex-1 flex flex-col gap-2 ",
        children: [y.jsx("div", {
            children: y.jsx("img", {
                src: "/IMG/crimeGIFS/a-5.gif",
                alt: "news_img"
            })
        }), y.jsx("div", {
            children: y.jsx("h1", {
                className: "text-3xl",
                children: "Is Regional Voting Contributing to the Increase in Crime and Violence Across the Nation?"
            })
        }), y.jsxs("div", {
            className: "flex gap-3 text-sm",
            children: [y.jsxs("div", {
                className: " flex-1 flex flex-col gap-1",
                children: [y.jsx("p", {
                    children: "The rising crime rates in India have become a serious concern, and regional voting may be playing a role in this troubling trend. When voters prioritize local interests over national issues, they often elect leaders who focus on short-term benefits rather than long-term solutions. This can lead to inadequate attention being paid to rising crime rates, which affect communities across the nation. Local politicians, driven by the need to win votes, might sidestep pressing concerns like public safety and crime prevention to cater to their regional bases."
                }), y.jsx("p", {
                    children: "As a result, many areas become hotspots for violence and crime, with law enforcement struggling to keep pace with the challenges. The lack of a cohesive national strategy to address crime can leave citizens feeling unsafe and vulnerable. Instead of working together to tackle issues like gang violence, drug-related crimes, and domestic abuse, local leaders may be more focused on their electoral success and maintaining power in their regions. If the government and voters do not shift their perspective to prioritize national safety and unity."
                })]
            }), y.jsxs("div", {
                className: " flex-1 flex flex-col gap-1",
                children: [y.jsx("p", {
                    children: "The rise in crime and violence across India is a troubling issue that cannot be ignored. As voters tend to prioritize regional issues over national concerns, this focus can inadvertently contribute to the escalating crime rates. When elections become centered on local interests, politicians often feel pressured to make promises that appeal to their constituents, sidelining vital national issues like crime prevention and public safety."
                }), y.jsx("p", {
                    children: "In many cases, local leaders are more interested in short-term projects that will win them votes rather than implementing effective strategies to combat crime. This neglect can lead to a lack of resources and support for law enforcement agencies, leaving them ill-equipped to handle rising violence. For instance, in areas where crime rates are surging, police forces may lack the training and funding necessary to effectively tackle drug trafficking, gang violence, or domestic abuse."
                }), y.jsx("p", {
                    children: "As a result, communities become less safe, and crime flourishes in areas that need attention. Citizens, feeling vulnerable, may turn to local leaders who promise quick fixes."
                })]
            })]
        })]
    }), y.jsxs("div", {
        className: " flex-1 flex flex-col gap-2 ",
        children: [y.jsxs("div", {
            className: "flex gap-3 text-sm ",
            children: [y.jsxs("div", {
                className: "flex-1 flex flex-col gap-1",
                children: [y.jsx("p", {
                    children: "The rising crime rates in India are a national crisis that requires urgent attention. Unfortunately, regional voting patterns may be contributing to the problem. Voters often prioritize local issues over the larger concerns of the country, focusing on immediate benefits like infrastructure, subsidies, or regional development projects. While these issues are important, they often overshadow more pressing national problems like crime and public safety. When voters choose leaders based on regional interests, they risk electing politicians who prioritize local gains over the broader need for law and order."
                }), y.jsx("p", {
                    children: "This focus on regional issues can create gaps in crime prevention and law enforcement. Many local leaders, driven by the need to secure votes, fail to address rising crime rates in their areas. Instead of focusing on long-term solutions to tackle violence, theft, or drug-related crimes, they concentrate on winning the next election by promising short-term benefits to their region. This lack of focus on crime leads to weak law enforcement, poorly trained police, and an overall lack of resources to deal with rising criminal activities. voters need to shift their focus from regional interests to national well-being. Leaders who prioritize public safety, crime prevention."
                })]
            }), y.jsxs("div", {
                className: "flex-1 flex flex-col gap-1",
                children: [y.jsx("p", {
                    children: "As a result, criminals feel emboldened, knowing that the attention of the government is elsewhere. Regions that are neglected by political leaders may become breeding grounds for gang violence, drug trafficking, and organized crime. Without a unified national strategy to combat these issues, crime spreads unchecked. Local leaders may even turn a blind eye to criminal activities if they believe it will secure more votes or political support in their region."
                }), y.jsx("p", {
                    children: "Moreover, the regional approach to voting weakens national efforts to address crime. When voters elect leaders who only focus on their region’s problems, it fractures the country’s ability to come together and tackle large-scale issues. National programs to strengthen police forces, improve the justice system, or implement crime prevention strategies become difficult to implement because the focus is on local politics rather than the overall safety of the country. National programs to strengthen police forces, improve the justice system, or implement crime prevention strategies become difficult to implement because the focus is on local politics rather than the overall safety of the country.the safety and progress of the entire nation, not just their local region. Only then can the country work toward lasting solutions to crime and violence."
                })]
            })]
        }), y.jsx("div", {
            children: y.jsx("img", {
                src: "/IMG/crimeGIFS/a-9.webp",
                alt: "news_img"
            })
        })]
    })]
})
  , U0 = () => y.jsxs("div", {
    className: " select-none flex items-center my-8",
    children: [y.jsxs("div", {
        className: "flex-grow space-y-0.5",
        children: [y.jsx("hr", {
            className: "border-t-[5px] border-black/85"
        }), y.jsx("hr", {
            className: "border-t-[2px] border-black/90"
        })]
    }), y.jsx("span", {
        className: "mx-2 text-7xl font-OldLondon  ",
        children: "The End"
    }), y.jsxs("div", {
        className: "flex-grow space-y-0.5",
        children: [y.jsx("hr", {
            className: "border-t-[5px] border-black/85"
        }), y.jsx("hr", {
            className: "border-t-[2px] border-black/90"
        })]
    })]
})
  , V0 = () => y.jsxs(y.Fragment, {
    children: [y.jsx(L0, {}), y.jsx("hr", {
        className: "border-t-2  border-zinc-800"
    }), y.jsx(I0, {}), y.jsx("hr", {
        className: "border-t-2 mb-6 border-zinc-800"
    }), y.jsx(F0, {}), y.jsx("hr", {
        className: "border-t-2 my-6 border-zinc-800"
    }), y.jsx(A0, {}), y.jsx("hr", {
        className: "border-t-2 my-4 border-zinc-800"
    }), y.jsx(U0, {})]
});
var oh = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , Cc = Nn.createContext && Nn.createContext(oh)
  , B0 = ["attr", "size", "title"];
function W0(t, e) {
    if (t == null)
        return {};
    var n = $0(t, e), r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        for (i = 0; i < o.length; i++)
            r = o[i],
            !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r])
    }
    return n
}
function $0(t, e) {
    if (t == null)
        return {};
    var n = {};
    for (var r in t)
        if (Object.prototype.hasOwnProperty.call(t, r)) {
            if (e.indexOf(r) >= 0)
                continue;
            n[r] = t[r]
        }
    return n
}
function Vo() {
    return Vo = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }
    ,
    Vo.apply(this, arguments)
}
function Ec(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(t, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function Bo(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? Ec(Object(n), !0).forEach(function(r) {
            H0(t, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ec(Object(n)).forEach(function(r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return t
}
function H0(t, e, n) {
    return e = Q0(e),
    e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function Q0(t) {
    var e = G0(t, "string");
    return typeof e == "symbol" ? e : e + ""
}
function G0(t, e) {
    if (typeof t != "object" || !t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(t, e || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}
function sh(t) {
    return t && t.map( (e, n) => Nn.createElement(e.tag, Bo({
        key: n
    }, e.attr), sh(e.child)))
}
function fs(t) {
    return e => Nn.createElement(Y0, Vo({
        attr: Bo({}, t.attr)
    }, e), sh(t.child))
}
function Y0(t) {
    var e = n => {
        var {attr: r, size: i, title: o} = t, s = W0(t, B0), l = i || n.size || "1em", a;
        return n.className && (a = n.className),
        t.className && (a = (a ? a + " " : "") + t.className),
        Nn.createElement("svg", Vo({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, s, {
            className: a,
            style: Bo(Bo({
                color: t.color || n.color
            }, n.style), t.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg"
        }), o && Nn.createElement("title", null, o), t.children)
    }
    ;
    return Cc !== void 0 ? Nn.createElement(Cc.Consumer, null, n => e(n)) : e(oh)
}
function X0(t) {
    return fs({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
            },
            child: []
        }]
    })(t)
}
function K0(t) {
    return fs({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
            },
            child: []
        }]
    })(t)
}
function Z0(t) {
    return fs({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
            },
            child: []
        }]
    })(t)
}
function q0(t) {
    return fs({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                strokeMiterlimit: "10",
                strokeWidth: "44",
                d: "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                fill: "none",
                strokeMiterlimit: "10",
                strokeWidth: "44",
                d: "M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "44",
                d: "M117.33 121.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 269.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                fill: "none",
                strokeMiterlimit: "10",
                strokeWidth: "44",
                d: "M256 48v416m208-208H48"
            },
            child: []
        }]
    })(t)
}
const J0 = () => {
    const [t,e] = Ye.useState(new Date);
    Ye.useEffect( () => {
        const r = setInterval( () => n(), 1e3);
        return () => {
            clearInterval(r)
        }
    }
    , []);
    const n = () => {
        e(new Date)
    }
    ;
    return y.jsx("div", {
        children: t.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        })
    })
}
  , b0 = () => {
    const t = new Date
      , e = t.getDay()
      , n = t.getMonth()
      , r = t.getDate()
      , i = t.getFullYear()
      , o = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      , s = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return y.jsxs("div", {
        className: "select-none text-black/90 font-Helvetica text-xs flex flex-row justify-between items-center",
        children: [y.jsxs("div", {
            className: " flex flex-col items-start",
            children: [y.jsx("span", {
                className: " text-black/75 text-base font-semibold hover:underline cursor-pointer",
                children: "thedailycrimes@gmail.com"
            }), y.jsxs("div", {
                className: " text-sm flex flex-wrap gap-1",
                children: [y.jsxs("div", {
                    className: " flex gap-0.5 hover:font-semibold cursor-pointer  items-center",
                    children: [y.jsx(K0, {}), "thedailycrimes"]
                }), y.jsxs("div", {
                    className: " flex gap-0.5 hover:font-semibold cursor-pointer  items-center",
                    children: [y.jsx(Z0, {}), "dailycrimes"]
                }), y.jsxs("div", {
                    className: " flex gap-0.5 hover:font-semibold cursor-pointer  items-center",
                    children: [y.jsx(X0, {}), "daily_crimes"]
                }), y.jsxs("div", {
                    className: " flex gap-0.5 hover:font-semibold cursor-pointer  items-center",
                    children: [y.jsx(q0, {}), "thedailycrimes.com"]
                })]
            }), y.jsx("span", {
                children: "PN-6, Thane - Belapur Rd, Digha Naka, Subhash Nagar, Dighe, Navi Mumbai, Maharashtra 400708"
            })]
        }), y.jsxs("div", {
            className: " flex flex-col items-end",
            children: [y.jsx("span", {
                className: " text-black/75  font-semibold text-sm",
                children: "New Delhi, India"
            }), y.jsxs("span", {
                className: " text-black/80  font-semibold text-base",
                children: [o[e], ", ", s[n], " ", r, ", ", i]
            }), y.jsxs("span", {
                className: " flex flex-row gap-1 font-sans font-semibold",
                children: ["Local Time ", y.jsx(J0, {})]
            })]
        })]
    })
}
  , eg = () => y.jsx("div", {
    className: " marquee-container select-none",
    children: y.jsxs("div", {
        className: "marquee",
        children: ["Together, We Can Transform Our Nation,", " ", y.jsx("a", {
            target: "_blank",
            href: "https://x.com/damnGruz",
            children: "Follow Me"
        }), "."]
    })
})
  , tg = () => y.jsxs("div", {
    className: "  select-none",
    children: [y.jsx(eg, {}), y.jsxs("div", {
        className: "py-7 font-Canopee text-2xl  flex flex-row justify-between px-6 ",
        children: [y.jsx("a", {
            className: " hover:opacity-75 transition-colors duration-300",
            target: "_blank",
            href: "https://therinkit.online",
            children: "The Daily Crimes ©"
        }), y.jsxs("div", {
            className: " flex gap-2 ",
            children: [y.jsx("a", {
                className: " hover:opacity-75 transition-colors duration-300",
                target: "_blank",
                href: "https://x.com/damnGruz",
                children: "Twitter"
            }), y.jsx("span", {
                children: "•"
            }), y.jsx("a", {
                className: " hover:opacity-75 transition-colors duration-300",
                target: "_blank",
                href: "https://github.com/rinkitadhana",
                children: "Github"
            }), y.jsx("span", {
                children: "•"
            }), y.jsx("a", {
                className: " hover:opacity-75 transition-colors duration-300",
                target: "_blank",
                href: "https://www.linkedin.com/in/rinkitadhana",
                children: "LinkedIn"
            })]
        })]
    })]
});
function jt(t) {
    if (t === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}
function lh(t, e) {
    t.prototype = Object.create(e.prototype),
    t.prototype.constructor = t,
    t.__proto__ = e
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ke = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, Sr = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, qa, Te, K, it = 1e8, $ = 1 / it, Wl = Math.PI * 2, ng = Wl / 4, rg = 0, ah = Math.sqrt, ig = Math.cos, og = Math.sin, me = function(e) {
    return typeof e == "string"
}, re = function(e) {
    return typeof e == "function"
}, Ut = function(e) {
    return typeof e == "number"
}, Ja = function(e) {
    return typeof e > "u"
}, Pt = function(e) {
    return typeof e == "object"
}, Fe = function(e) {
    return e !== !1
}, ba = function() {
    return typeof window < "u"
}, Ji = function(e) {
    return re(e) || me(e)
}, uh = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, Ce = Array.isArray, $l = /(?:-?\.?\d|\.)+/gi, ch = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, or = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Bs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, fh = /[+-]=-?[.\d]+/, dh = /[^,'"\[\]\s]+/gi, sg = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, q, xt, Hl, eu, qe = {}, Wo = {}, hh, ph = function(e) {
    return (Wo = Vn(e, qe)) && Be
}, tu = function(e, n) {
    return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()")
}, wi = function(e, n) {
    return !n && console.warn(e)
}, mh = function(e, n) {
    return e && (qe[e] = n) && Wo && (Wo[e] = n) || qe
}, ki = function() {
    return 0
}, lg = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, ho = {
    suppressEvents: !0,
    kill: !1
}, ag = {
    suppressEvents: !0
}, nu = {}, ln = [], Ql = {}, gh, $e = {}, Ws = {}, Pc = 30, po = [], ru = "", iu = function(e) {
    var n = e[0], r, i;
    if (Pt(n) || re(n) || (e = [e]),
    !(r = (n._gsap || {}).harness)) {
        for (i = po.length; i-- && !po[i].targetTest(n); )
            ;
        r = po[i]
    }
    for (i = e.length; i--; )
        e[i] && (e[i]._gsap || (e[i]._gsap = new Vh(e[i],r))) || e.splice(i, 1);
    return e
}, zn = function(e) {
    return e._gsap || iu(ot(e))[0]._gsap
}, vh = function(e, n, r) {
    return (r = e[n]) && re(r) ? e[n]() : Ja(r) && e.getAttribute && e.getAttribute(n) || r
}, Ae = function(e, n) {
    return (e = e.split(",")).forEach(n) || e
}, ie = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, he = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, hr = function(e, n) {
    var r = n.charAt(0)
      , i = parseFloat(n.substr(2));
    return e = parseFloat(e),
    r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
}, ug = function(e, n) {
    for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; )
        ;
    return i < r
}, $o = function() {
    var e = ln.length, n = ln.slice(0), r, i;
    for (Ql = {},
    ln.length = 0,
    r = 0; r < e; r++)
        i = n[r],
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
}, yh = function(e, n, r, i) {
    ln.length && !Te && $o(),
    e.render(n, r, Te && n < 0 && (e._initted || e._startAt)),
    ln.length && !Te && $o()
}, _h = function(e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(dh).length < 2 ? n : me(e) ? e.trim() : e
}, xh = function(e) {
    return e
}, ut = function(e, n) {
    for (var r in n)
        r in e || (e[r] = n[r]);
    return e
}, cg = function(e) {
    return function(n, r) {
        for (var i in r)
            i in n || i === "duration" && e || i === "ease" || (n[i] = r[i])
    }
}, Vn = function(e, n) {
    for (var r in n)
        e[r] = n[r];
    return e
}, Nc = function t(e, n) {
    for (var r in n)
        r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Pt(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e
}, Ho = function(e, n) {
    var r = {}, i;
    for (i in e)
        i in n || (r[i] = e[i]);
    return r
}, ti = function(e) {
    var n = e.parent || q
      , r = e.keyframes ? cg(Ce(e.keyframes)) : ut;
    if (Fe(e.inherit))
        for (; n; )
            r(e, n.vars.defaults),
            n = n.parent || n._dp;
    return e
}, fg = function(e, n) {
    for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; )
        ;
    return r < 0
}, wh = function(e, n, r, i, o) {
    var s = e[i], l;
    if (o)
        for (l = n[o]; s && s[o] > l; )
            s = s._prev;
    return s ? (n._next = s._next,
    s._next = n) : (n._next = e[r],
    e[r] = n),
    n._next ? n._next._prev = n : e[i] = n,
    n._prev = s,
    n.parent = n._dp = e,
    n
}, ds = function(e, n, r, i) {
    r === void 0 && (r = "_first"),
    i === void 0 && (i = "_last");
    var o = n._prev
      , s = n._next;
    o ? o._next = s : e[r] === n && (e[r] = s),
    s ? s._prev = o : e[i] === n && (e[i] = o),
    n._next = n._prev = n.parent = null
}, fn = function(e, n) {
    e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
    e._act = 0
}, Mn = function(e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
        for (var r = e; r; )
            r._dirty = 1,
            r = r.parent;
    return e
}, dg = function(e) {
    for (var n = e.parent; n && n.parent; )
        n._dirty = 1,
        n.totalDuration(),
        n = n.parent;
    return e
}, Gl = function(e, n, r, i) {
    return e._startAt && (Te ? e._startAt.revert(ho) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, i))
}, hg = function t(e) {
    return !e || e._ts && t(e.parent)
}, jc = function(e) {
    return e._repeat ? Tr(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, Tr = function(e, n) {
    var r = Math.floor(e /= n);
    return e && r === e ? r - 1 : r
}, Qo = function(e, n) {
    return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
}, hs = function(e) {
    return e._end = he(e._start + (e._tDur / Math.abs(e._ts || e._rts || $) || 0))
}, ps = function(e, n) {
    var r = e._dp;
    return r && r.smoothChildTiming && e._ts && (e._start = he(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)),
    hs(e),
    r._dirty || Mn(r, e)),
    e
}, kh = function(e, n) {
    var r;
    if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (r = Qo(e.rawTime(), n),
    (!n._dur || Ri(0, n.totalDuration(), r) - n._tTime > $) && n.render(r, !0)),
    Mn(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (r = e; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime),
                r = r._dp;
        e._zTime = -$
    }
}, kt = function(e, n, r, i) {
    return n.parent && fn(n),
    n._start = he((Ut(r) ? r : r || e !== q ? et(e, r, n) : e._time) + n._delay),
    n._end = he(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)),
    wh(e, n, "_first", "_last", e._sort ? "_start" : 0),
    Yl(n) || (e._recent = n),
    i || kh(e, n),
    e._ts < 0 && ps(e, e._tTime),
    e
}, Sh = function(e, n) {
    return (qe.ScrollTrigger || tu("scrollTrigger", n)) && qe.ScrollTrigger.create(n, e)
}, Th = function(e, n, r, i, o) {
    if (su(e, n, o),
    !e._initted)
        return 1;
    if (!r && e._pt && !Te && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && gh !== He.frame)
        return ln.push(e),
        e._lazy = [o, i],
        1
}, pg = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
}, Yl = function(e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart"
}, mg = function(e, n, r, i) {
    var o = e.ratio, s = n < 0 || !n && (!e._start && pg(e) && !(!e._initted && Yl(e)) || (e._ts < 0 || e._dp._ts < 0) && !Yl(e)) ? 0 : 1, l = e._rDelay, a = 0, u, c, f;
    if (l && e._repeat && (a = Ri(0, e._tDur, n),
    c = Tr(a, l),
    e._yoyo && c & 1 && (s = 1 - s),
    c !== Tr(e._tTime, l) && (o = 1 - s,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    s !== o || Te || i || e._zTime === $ || !n && e._zTime) {
        if (!e._initted && Th(e, n, i, r, a))
            return;
        for (f = e._zTime,
        e._zTime = n || (r ? $ : 0),
        r || (r = n && !f),
        e.ratio = s,
        e._from && (s = 1 - s),
        e._time = 0,
        e._tTime = a,
        u = e._pt; u; )
            u.r(s, u.d),
            u = u._next;
        n < 0 && Gl(e, n, r, !0),
        e._onUpdate && !r && Ge(e, "onUpdate"),
        a && e._repeat && !r && e.parent && Ge(e, "onRepeat"),
        (n >= e._tDur || n < 0) && e.ratio === s && (s && fn(e, 1),
        !r && !Te && (Ge(e, s ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = n)
}, gg = function(e, n, r) {
    var i;
    if (r > n)
        for (i = e._first; i && i._start <= r; ) {
            if (i.data === "isPause" && i._start > n)
                return i;
            i = i._next
        }
    else
        for (i = e._last; i && i._start >= r; ) {
            if (i.data === "isPause" && i._start < n)
                return i;
            i = i._prev
        }
}, Cr = function(e, n, r, i) {
    var o = e._repeat
      , s = he(n) || 0
      , l = e._tTime / e._tDur;
    return l && !i && (e._time *= s / e._dur),
    e._dur = s,
    e._tDur = o ? o < 0 ? 1e10 : he(s * (o + 1) + e._rDelay * o) : s,
    l > 0 && !i && ps(e, e._tTime = e._tDur * l),
    e.parent && hs(e),
    r || Mn(e.parent, e),
    e
}, Oc = function(e) {
    return e instanceof Ne ? Mn(e) : Cr(e, e._dur)
}, vg = {
    _start: 0,
    endTime: ki,
    totalDuration: ki
}, et = function t(e, n, r) {
    var i = e.labels, o = e._recent || vg, s = e.duration() >= it ? o.endTime(!1) : e._dur, l, a, u;
    return me(n) && (isNaN(n) || n in i) ? (a = n.charAt(0),
    u = n.substr(-1) === "%",
    l = n.indexOf("="),
    a === "<" || a === ">" ? (l >= 0 && (n = n.replace(/=/, "")),
    (a === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (l < 0 ? o : r).totalDuration() / 100 : 1)) : l < 0 ? (n in i || (i[n] = s),
    i[n]) : (a = parseFloat(n.charAt(l - 1) + n.substr(l + 1)),
    u && r && (a = a / 100 * (Ce(r) ? r[0] : r).totalDuration()),
    l > 1 ? t(e, n.substr(0, l - 1), r) + a : s + a)) : n == null ? s : +n
}, ni = function(e, n, r) {
    var i = Ut(n[1]), o = (i ? 2 : 1) + (e < 2 ? 0 : 1), s = n[o], l, a;
    if (i && (s.duration = n[1]),
    s.parent = r,
    e) {
        for (l = s,
        a = r; a && !("immediateRender"in l); )
            l = a.vars.defaults || {},
            a = Fe(a.vars.inherit) && a.parent;
        s.immediateRender = Fe(l.immediateRender),
        e < 2 ? s.runBackwards = 1 : s.startAt = n[o - 1]
    }
    return new ae(n[0],s,n[o + 1])
}, gn = function(e, n) {
    return e || e === 0 ? n(e) : n
}, Ri = function(e, n, r) {
    return r < e ? e : r > n ? n : r
}, Se = function(e, n) {
    return !me(e) || !(n = sg.exec(e)) ? "" : n[1]
}, yg = function(e, n, r) {
    return gn(r, function(i) {
        return Ri(e, n, i)
    })
}, Xl = [].slice, Ch = function(e, n) {
    return e && Pt(e) && "length"in e && (!n && !e.length || e.length - 1 in e && Pt(e[0])) && !e.nodeType && e !== xt
}, _g = function(e, n, r) {
    return r === void 0 && (r = []),
    e.forEach(function(i) {
        var o;
        return me(i) && !n || Ch(i, 1) ? (o = r).push.apply(o, ot(i)) : r.push(i)
    }) || r
}, ot = function(e, n, r) {
    return K && !n && K.selector ? K.selector(e) : me(e) && !r && (Hl || !Er()) ? Xl.call((n || eu).querySelectorAll(e), 0) : Ce(e) ? _g(e, r) : Ch(e) ? Xl.call(e, 0) : e ? [e] : []
}, Kl = function(e) {
    return e = ot(e)[0] || wi("Invalid scope") || {},
    function(n) {
        var r = e.current || e.nativeElement || e;
        return ot(n, r.querySelectorAll ? r : r === e ? wi("Invalid scope") || eu.createElement("div") : e)
    }
}, Eh = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, Ph = function(e) {
    if (re(e))
        return e;
    var n = Pt(e) ? e : {
        each: e
    }
      , r = Rn(n.ease)
      , i = n.from || 0
      , o = parseFloat(n.base) || 0
      , s = {}
      , l = i > 0 && i < 1
      , a = isNaN(i) || l
      , u = n.axis
      , c = i
      , f = i;
    return me(i) ? c = f = {
        center: .5,
        edges: .5,
        end: 1
    }[i] || 0 : !l && a && (c = i[0],
    f = i[1]),
    function(h, v, _) {
        var p = (_ || n).length, k = s[p], m, d, g, x, w, S, T, C, E;
        if (!k) {
            if (E = n.grid === "auto" ? 0 : (n.grid || [1, it])[1],
            !E) {
                for (T = -it; T < (T = _[E++].getBoundingClientRect().left) && E < p; )
                    ;
                E < p && E--
            }
            for (k = s[p] = [],
            m = a ? Math.min(E, p) * c - .5 : i % E,
            d = E === it ? 0 : a ? p * f / E - .5 : i / E | 0,
            T = 0,
            C = it,
            S = 0; S < p; S++)
                g = S % E - m,
                x = d - (S / E | 0),
                k[S] = w = u ? Math.abs(u === "y" ? x : g) : ah(g * g + x * x),
                w > T && (T = w),
                w < C && (C = w);
            i === "random" && Eh(k),
            k.max = T - C,
            k.min = C,
            k.v = p = (parseFloat(n.amount) || parseFloat(n.each) * (E > p ? p - 1 : u ? u === "y" ? p / E : E : Math.max(E, p / E)) || 0) * (i === "edges" ? -1 : 1),
            k.b = p < 0 ? o - p : o,
            k.u = Se(n.amount || n.each) || 0,
            r = r && p < 0 ? Fh(r) : r
        }
        return p = (k[h] - k.min) / k.max || 0,
        he(k.b + (r ? r(p) : p) * k.v) + k.u
    }
}, Zl = function(e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(r) {
        var i = he(Math.round(parseFloat(r) / e) * e * n);
        return (i - i % 1) / n + (Ut(r) ? 0 : Se(r))
    }
}, Nh = function(e, n) {
    var r = Ce(e), i, o;
    return !r && Pt(e) && (i = r = e.radius || it,
    e.values ? (e = ot(e.values),
    (o = !Ut(e[0])) && (i *= i)) : e = Zl(e.increment)),
    gn(n, r ? re(e) ? function(s) {
        return o = e(s),
        Math.abs(o - s) <= i ? o : s
    }
    : function(s) {
        for (var l = parseFloat(o ? s.x : s), a = parseFloat(o ? s.y : 0), u = it, c = 0, f = e.length, h, v; f--; )
            o ? (h = e[f].x - l,
            v = e[f].y - a,
            h = h * h + v * v) : h = Math.abs(e[f] - l),
            h < u && (u = h,
            c = f);
        return c = !i || u <= i ? e[c] : s,
        o || c === s || Ut(s) ? c : c + Se(s)
    }
    : Zl(e))
}, jh = function(e, n, r, i) {
    return gn(Ce(e) ? !n : r === !0 ? !!(r = 0) : !i, function() {
        return Ce(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * .99)) / r) * r * i) / i
    })
}, xg = function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
    return function(i) {
        return n.reduce(function(o, s) {
            return s(o)
        }, i)
    }
}, wg = function(e, n) {
    return function(r) {
        return e(parseFloat(r)) + (n || Se(r))
    }
}, kg = function(e, n, r) {
    return zh(e, n, 0, 1, r)
}, Oh = function(e, n, r) {
    return gn(r, function(i) {
        return e[~~n(i)]
    })
}, Sg = function t(e, n, r) {
    var i = n - e;
    return Ce(e) ? Oh(e, t(0, e.length), n) : gn(r, function(o) {
        return (i + (o - e) % i) % i + e
    })
}, Tg = function t(e, n, r) {
    var i = n - e
      , o = i * 2;
    return Ce(e) ? Oh(e, t(0, e.length - 1), n) : gn(r, function(s) {
        return s = (o + (s - e) % o) % o || 0,
        e + (s > i ? o - s : s)
    })
}, Si = function(e) {
    for (var n = 0, r = "", i, o, s, l; ~(i = e.indexOf("random(", n)); )
        s = e.indexOf(")", i),
        l = e.charAt(i + 7) === "[",
        o = e.substr(i + 7, s - i - 7).match(l ? dh : $l),
        r += e.substr(n, i - n) + jh(l ? o : +o[0], l ? 0 : +o[1], +o[2] || 1e-5),
        n = s + 1;
    return r + e.substr(n, e.length - n)
}, zh = function(e, n, r, i, o) {
    var s = n - e
      , l = i - r;
    return gn(o, function(a) {
        return r + ((a - e) / s * l || 0)
    })
}, Cg = function t(e, n, r, i) {
    var o = isNaN(e + n) ? 0 : function(v) {
        return (1 - v) * e + v * n
    }
    ;
    if (!o) {
        var s = me(e), l = {}, a, u, c, f, h;
        if (r === !0 && (i = 1) && (r = null),
        s)
            e = {
                p: e
            },
            n = {
                p: n
            };
        else if (Ce(e) && !Ce(n)) {
            for (c = [],
            f = e.length,
            h = f - 2,
            u = 1; u < f; u++)
                c.push(t(e[u - 1], e[u]));
            f--,
            o = function(_) {
                _ *= f;
                var p = Math.min(h, ~~_);
                return c[p](_ - p)
            }
            ,
            r = n
        } else
            i || (e = Vn(Ce(e) ? [] : {}, e));
        if (!c) {
            for (a in n)
                ou.call(l, e, a, "get", n[a]);
            o = function(_) {
                return uu(_, l) || (s ? e.p : e)
            }
        }
    }
    return gn(r, o)
}, zc = function(e, n, r) {
    var i = e.labels, o = it, s, l, a;
    for (s in i)
        l = i[s] - n,
        l < 0 == !!r && l && o > (l = Math.abs(l)) && (a = s,
        o = l);
    return a
}, Ge = function(e, n, r) {
    var i = e.vars, o = i[n], s = K, l = e._ctx, a, u, c;
    if (o)
        return a = i[n + "Params"],
        u = i.callbackScope || e,
        r && ln.length && $o(),
        l && (K = l),
        c = a ? o.apply(u, a) : o.call(u),
        K = s,
        c
}, Hr = function(e) {
    return fn(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!Te),
    e.progress() < 1 && Ge(e, "onInterrupt"),
    e
}, sr, Mh = [], Rh = function(e) {
    if (e)
        if (e = !e.name && e.default || e,
        ba() || e.headless) {
            var n = e.name
              , r = re(e)
              , i = n && !r && e.init ? function() {
                this._props = []
            }
            : e
              , o = {
                init: ki,
                render: uu,
                add: ou,
                kill: Bg,
                modifier: Vg,
                rawVars: 0
            }
              , s = {
                targetTest: 0,
                get: 0,
                getSetter: au,
                aliases: {},
                register: 0
            };
            if (Er(),
            e !== i) {
                if ($e[n])
                    return;
                ut(i, ut(Ho(e, o), s)),
                Vn(i.prototype, Vn(o, Ho(e, s))),
                $e[i.prop = n] = i,
                e.targetTest && (po.push(i),
                nu[n] = 1),
                n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
            }
            mh(n, i),
            e.register && e.register(Be, i, Ue)
        } else
            Mh.push(e)
}, B = 255, Qr = {
    aqua: [0, B, B],
    lime: [0, B, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, B],
    navy: [0, 0, 128],
    white: [B, B, B],
    olive: [128, 128, 0],
    yellow: [B, B, 0],
    orange: [B, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [B, 0, 0],
    pink: [B, 192, 203],
    cyan: [0, B, B],
    transparent: [B, B, B, 0]
}, $s = function(e, n, r) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? n + (r - n) * e * 6 : e < .5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * B + .5 | 0
}, Dh = function(e, n, r) {
    var i = e ? Ut(e) ? [e >> 16, e >> 8 & B, e & B] : 0 : Qr.black, o, s, l, a, u, c, f, h, v, _;
    if (!i) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        Qr[e])
            i = Qr[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (o = e.charAt(1),
            s = e.charAt(2),
            l = e.charAt(3),
            e = "#" + o + o + s + s + l + l + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return i = parseInt(e.substr(1, 6), 16),
                [i >> 16, i >> 8 & B, i & B, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            i = [e >> 16, e >> 8 & B, e & B]
        } else if (e.substr(0, 3) === "hsl") {
            if (i = _ = e.match($l),
            !n)
                a = +i[0] % 360 / 360,
                u = +i[1] / 100,
                c = +i[2] / 100,
                s = c <= .5 ? c * (u + 1) : c + u - c * u,
                o = c * 2 - s,
                i.length > 3 && (i[3] *= 1),
                i[0] = $s(a + 1 / 3, o, s),
                i[1] = $s(a, o, s),
                i[2] = $s(a - 1 / 3, o, s);
            else if (~e.indexOf("="))
                return i = e.match(ch),
                r && i.length < 4 && (i[3] = 1),
                i
        } else
            i = e.match($l) || Qr.transparent;
        i = i.map(Number)
    }
    return n && !_ && (o = i[0] / B,
    s = i[1] / B,
    l = i[2] / B,
    f = Math.max(o, s, l),
    h = Math.min(o, s, l),
    c = (f + h) / 2,
    f === h ? a = u = 0 : (v = f - h,
    u = c > .5 ? v / (2 - f - h) : v / (f + h),
    a = f === o ? (s - l) / v + (s < l ? 6 : 0) : f === s ? (l - o) / v + 2 : (o - s) / v + 4,
    a *= 60),
    i[0] = ~~(a + .5),
    i[1] = ~~(u * 100 + .5),
    i[2] = ~~(c * 100 + .5)),
    r && i.length < 4 && (i[3] = 1),
    i
}, Ih = function(e) {
    var n = []
      , r = []
      , i = -1;
    return e.split(an).forEach(function(o) {
        var s = o.match(or) || [];
        n.push.apply(n, s),
        r.push(i += s.length + 1)
    }),
    n.c = r,
    n
}, Mc = function(e, n, r) {
    var i = "", o = (e + i).match(an), s = n ? "hsla(" : "rgba(", l = 0, a, u, c, f;
    if (!o)
        return e;
    if (o = o.map(function(h) {
        return (h = Dh(h, n, 1)) && s + (n ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")"
    }),
    r && (c = Ih(e),
    a = r.c,
    a.join(i) !== c.c.join(i)))
        for (u = e.replace(an, "1").split(or),
        f = u.length - 1; l < f; l++)
            i += u[l] + (~a.indexOf(l) ? o.shift() || s + "0,0,0,0)" : (c.length ? c : o.length ? o : r).shift());
    if (!u)
        for (u = e.split(an),
        f = u.length - 1; l < f; l++)
            i += u[l] + o[l];
    return i + u[f]
}, an = function() {
    var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in Qr)
        t += "|" + e + "\\b";
    return new RegExp(t + ")","gi")
}(), Eg = /hsl[a]?\(/, Lh = function(e) {
    var n = e.join(" "), r;
    if (an.lastIndex = 0,
    an.test(n))
        return r = Eg.test(n),
        e[1] = Mc(e[1], r),
        e[0] = Mc(e[0], r, Ih(e[1])),
        !0
}, Ti, He = function() {
    var t = Date.now, e = 500, n = 33, r = t(), i = r, o = 1e3 / 240, s = o, l = [], a, u, c, f, h, v, _ = function p(k) {
        var m = t() - i, d = k === !0, g, x, w, S;
        if ((m > e || m < 0) && (r += m - n),
        i += m,
        w = i - r,
        g = w - s,
        (g > 0 || d) && (S = ++f.frame,
        h = w - f.time * 1e3,
        f.time = w = w / 1e3,
        s += g + (g >= o ? 4 : o - g),
        x = 1),
        d || (a = u(p)),
        x)
            for (v = 0; v < l.length; v++)
                l[v](w, h, S, k)
    };
    return f = {
        time: 0,
        frame: 0,
        tick: function() {
            _(!0)
        },
        deltaRatio: function(k) {
            return h / (1e3 / (k || 60))
        },
        wake: function() {
            hh && (!Hl && ba() && (xt = Hl = window,
            eu = xt.document || {},
            qe.gsap = Be,
            (xt.gsapVersions || (xt.gsapVersions = [])).push(Be.version),
            ph(Wo || xt.GreenSockGlobals || !xt.gsap && xt || {}),
            Mh.forEach(Rh)),
            c = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            a && f.sleep(),
            u = c || function(k) {
                return setTimeout(k, s - f.time * 1e3 + 1 | 0)
            }
            ,
            Ti = 1,
            _(2))
        },
        sleep: function() {
            (c ? cancelAnimationFrame : clearTimeout)(a),
            Ti = 0,
            u = ki
        },
        lagSmoothing: function(k, m) {
            e = k || 1 / 0,
            n = Math.min(m || 33, e)
        },
        fps: function(k) {
            o = 1e3 / (k || 240),
            s = f.time * 1e3 + o
        },
        add: function(k, m, d) {
            var g = m ? function(x, w, S, T) {
                k(x, w, S, T),
                f.remove(g)
            }
            : k;
            return f.remove(k),
            l[d ? "unshift" : "push"](g),
            Er(),
            g
        },
        remove: function(k, m) {
            ~(m = l.indexOf(k)) && l.splice(m, 1) && v >= m && v--
        },
        _listeners: l
    },
    f
}(), Er = function() {
    return !Ti && He.wake()
}, I = {}, Pg = /^[\d.\-M][\d.\-,\s]/, Ng = /["']/g, jg = function(e) {
    for (var n = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], o = 1, s = r.length, l, a, u; o < s; o++)
        a = r[o],
        l = o !== s - 1 ? a.lastIndexOf(",") : a.length,
        u = a.substr(0, l),
        n[i] = isNaN(u) ? u.replace(Ng, "").trim() : +u,
        i = a.substr(l + 1).trim();
    return n
}, Og = function(e) {
    var n = e.indexOf("(") + 1
      , r = e.indexOf(")")
      , i = e.indexOf("(", n);
    return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)
}, zg = function(e) {
    var n = (e + "").split("(")
      , r = I[n[0]];
    return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [jg(n[1])] : Og(e).split(",").map(_h)) : I._CE && Pg.test(e) ? I._CE("", e) : r
}, Fh = function(e) {
    return function(n) {
        return 1 - e(1 - n)
    }
}, Ah = function t(e, n) {
    for (var r = e._first, i; r; )
        r instanceof Ne ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (i = r._ease,
        r._ease = r._yEase,
        r._yEase = i,
        r._yoyo = n)),
        r = r._next
}, Rn = function(e, n) {
    return e && (re(e) ? e : I[e] || zg(e)) || n
}, Hn = function(e, n, r, i) {
    r === void 0 && (r = function(a) {
        return 1 - n(1 - a)
    }
    ),
    i === void 0 && (i = function(a) {
        return a < .5 ? n(a * 2) / 2 : 1 - n((1 - a) * 2) / 2
    }
    );
    var o = {
        easeIn: n,
        easeOut: r,
        easeInOut: i
    }, s;
    return Ae(e, function(l) {
        I[l] = qe[l] = o,
        I[s = l.toLowerCase()] = r;
        for (var a in o)
            I[s + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = I[l + "." + a] = o[a]
    }),
    o
}, Uh = function(e) {
    return function(n) {
        return n < .5 ? (1 - e(1 - n * 2)) / 2 : .5 + e((n - .5) * 2) / 2
    }
}, Hs = function t(e, n, r) {
    var i = n >= 1 ? n : 1
      , o = (r || (e ? .3 : .45)) / (n < 1 ? n : 1)
      , s = o / Wl * (Math.asin(1 / i) || 0)
      , l = function(c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * og((c - s) * o) + 1
    }
      , a = e === "out" ? l : e === "in" ? function(u) {
        return 1 - l(1 - u)
    }
    : Uh(l);
    return o = Wl / o,
    a.config = function(u, c) {
        return t(e, u, c)
    }
    ,
    a
}, Qs = function t(e, n) {
    n === void 0 && (n = 1.70158);
    var r = function(s) {
        return s ? --s * s * ((n + 1) * s + n) + 1 : 0
    }
      , i = e === "out" ? r : e === "in" ? function(o) {
        return 1 - r(1 - o)
    }
    : Uh(r);
    return i.config = function(o) {
        return t(e, o)
    }
    ,
    i
};
Ae("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
    var n = e < 5 ? e + 1 : e;
    Hn(t + ",Power" + (n - 1), e ? function(r) {
        return Math.pow(r, n)
    }
    : function(r) {
        return r
    }
    , function(r) {
        return 1 - Math.pow(1 - r, n)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2
    })
});
I.Linear.easeNone = I.none = I.Linear.easeIn;
Hn("Elastic", Hs("in"), Hs("out"), Hs());
(function(t, e) {
    var n = 1 / e
      , r = 2 * n
      , i = 2.5 * n
      , o = function(l) {
        return l < n ? t * l * l : l < r ? t * Math.pow(l - 1.5 / e, 2) + .75 : l < i ? t * (l -= 2.25 / e) * l + .9375 : t * Math.pow(l - 2.625 / e, 2) + .984375
    };
    Hn("Bounce", function(s) {
        return 1 - o(1 - s)
    }, o)
}
)(7.5625, 2.75);
Hn("Expo", function(t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0
});
Hn("Circ", function(t) {
    return -(ah(1 - t * t) - 1)
});
Hn("Sine", function(t) {
    return t === 1 ? 1 : -ig(t * ng) + 1
});
Hn("Back", Qs("in"), Qs("out"), Qs());
I.SteppedEase = I.steps = qe.SteppedEase = {
    config: function(e, n) {
        e === void 0 && (e = 1);
        var r = 1 / e
          , i = e + (n ? 0 : 1)
          , o = n ? 1 : 0
          , s = 1 - $;
        return function(l) {
            return ((i * Ri(0, s, l) | 0) + o) * r
        }
    }
};
Sr.ease = I["quad.out"];
Ae("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
    return ru += t + "," + t + "Params,"
});
var Vh = function(e, n) {
    this.id = rg++,
    e._gsap = this,
    this.target = e,
    this.harness = n,
    this.get = n ? n.get : vh,
    this.set = n ? n.getSetter : au
}
  , Ci = function() {
    function t(n) {
        this.vars = n,
        this._delay = +n.delay || 0,
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0,
        this._yoyo = !!n.yoyo || !!n.yoyoEase),
        this._ts = 1,
        Cr(this, +n.duration, 1, 1),
        this.data = n.data,
        K && (this._ctx = K,
        K.data.push(this)),
        Ti || He.wake()
    }
    var e = t.prototype;
    return e.delay = function(r) {
        return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay),
        this._delay = r,
        this) : this._delay
    }
    ,
    e.duration = function(r) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(r) {
        return arguments.length ? (this._dirty = 0,
        Cr(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(r, i) {
        if (Er(),
        !arguments.length)
            return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
            for (ps(this, r),
            !o._dp || o.parent || kh(o, this); o && o.parent; )
                o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0),
                o = o.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && kt(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === $ || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r),
        yh(this, r, i)),
        this
    }
    ,
    e.time = function(r, i) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + jc(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
    }
    ,
    e.totalProgress = function(r, i) {
        return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.progress = function(r, i) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + jc(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.iteration = function(r, i) {
        var o = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (r - 1) * o, i) : this._repeat ? Tr(this._tTime, o) + 1 : 1
    }
    ,
    e.timeScale = function(r, i) {
        if (!arguments.length)
            return this._rts === -$ ? 0 : this._rts;
        if (this._rts === r)
            return this;
        var o = this.parent && this._ts ? Qo(this.parent._time, this) : this._tTime;
        return this._rts = +r || 0,
        this._ts = this._ps || r === -$ ? 0 : this._rts,
        this.totalTime(Ri(-Math.abs(this._delay), this._tDur, o), i !== !1),
        hs(this),
        dg(this)
    }
    ,
    e.paused = function(r) {
        return arguments.length ? (this._ps !== r && (this._ps = r,
        r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Er(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== $ && (this._tTime -= $)))),
        this) : this._ps
    }
    ,
    e.startTime = function(r) {
        if (arguments.length) {
            this._start = r;
            var i = this.parent || this._dp;
            return i && (i._sort || !this.parent) && kt(i, this, r - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(r) {
        return this._start + (Fe(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(r) {
        var i = this.parent || this._dp;
        return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Qo(i.rawTime(r), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(r) {
        r === void 0 && (r = ag);
        var i = Te;
        return Te = r,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r),
        this.totalTime(-.01, r.suppressEvents)),
        this.data !== "nested" && r.kill !== !1 && this.kill(),
        Te = i,
        this
    }
    ,
    e.globalTime = function(r) {
        for (var i = this, o = arguments.length ? r : i.rawTime(); i; )
            o = i._start + o / (Math.abs(i._ts) || 1),
            i = i._dp;
        return !this.parent && this._sat ? this._sat.globalTime(r) : o
    }
    ,
    e.repeat = function(r) {
        return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r,
        Oc(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(r) {
        if (arguments.length) {
            var i = this._time;
            return this._rDelay = r,
            Oc(this),
            i ? this.time(i) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(r) {
        return arguments.length ? (this._yoyo = r,
        this) : this._yoyo
    }
    ,
    e.seek = function(r, i) {
        return this.totalTime(et(this, r), Fe(i))
    }
    ,
    e.restart = function(r, i) {
        return this.play().totalTime(r ? -this._delay : 0, Fe(i))
    }
    ,
    e.play = function(r, i) {
        return r != null && this.seek(r, i),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(r, i) {
        return r != null && this.seek(r || this.totalDuration(), i),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(r, i) {
        return r != null && this.seek(r, i),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(r) {
        return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -$ : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -$,
        this
    }
    ,
    e.isActive = function() {
        var r = this.parent || this._dp, i = this._start, o;
        return !!(!r || this._ts && this._initted && r.isActive() && (o = r.rawTime(!0)) >= i && o < this.endTime(!0) - $)
    }
    ,
    e.eventCallback = function(r, i, o) {
        var s = this.vars;
        return arguments.length > 1 ? (i ? (s[r] = i,
        o && (s[r + "Params"] = o),
        r === "onUpdate" && (this._onUpdate = i)) : delete s[r],
        this) : s[r]
    }
    ,
    e.then = function(r) {
        var i = this;
        return new Promise(function(o) {
            var s = re(r) ? r : xh
              , l = function() {
                var u = i.then;
                i.then = null,
                re(s) && (s = s(i)) && (s.then || s === i) && (i.then = u),
                o(s),
                i.then = u
            };
            i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l
        }
        )
    }
    ,
    e.kill = function() {
        Hr(this)
    }
    ,
    t
}();
ut(Ci.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -$,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Ne = function(t) {
    lh(e, t);
    function e(r, i) {
        var o;
        return r === void 0 && (r = {}),
        o = t.call(this, r) || this,
        o.labels = {},
        o.smoothChildTiming = !!r.smoothChildTiming,
        o.autoRemoveChildren = !!r.autoRemoveChildren,
        o._sort = Fe(r.sortChildren),
        q && kt(r.parent || q, jt(o), i),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        r.scrollTrigger && Sh(jt(o), r.scrollTrigger),
        o
    }
    var n = e.prototype;
    return n.to = function(i, o, s) {
        return ni(0, arguments, this),
        this
    }
    ,
    n.from = function(i, o, s) {
        return ni(1, arguments, this),
        this
    }
    ,
    n.fromTo = function(i, o, s, l) {
        return ni(2, arguments, this),
        this
    }
    ,
    n.set = function(i, o, s) {
        return o.duration = 0,
        o.parent = this,
        ti(o).repeatDelay || (o.repeat = 0),
        o.immediateRender = !!o.immediateRender,
        new ae(i,o,et(this, s),1),
        this
    }
    ,
    n.call = function(i, o, s) {
        return kt(this, ae.delayedCall(0, i, o), s)
    }
    ,
    n.staggerTo = function(i, o, s, l, a, u, c) {
        return s.duration = o,
        s.stagger = s.stagger || l,
        s.onComplete = u,
        s.onCompleteParams = c,
        s.parent = this,
        new ae(i,s,et(this, a)),
        this
    }
    ,
    n.staggerFrom = function(i, o, s, l, a, u, c) {
        return s.runBackwards = 1,
        ti(s).immediateRender = Fe(s.immediateRender),
        this.staggerTo(i, o, s, l, a, u, c)
    }
    ,
    n.staggerFromTo = function(i, o, s, l, a, u, c, f) {
        return l.startAt = s,
        ti(l).immediateRender = Fe(l.immediateRender),
        this.staggerTo(i, o, l, a, u, c, f)
    }
    ,
    n.render = function(i, o, s) {
        var l = this._time, a = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = i <= 0 ? 0 : he(i), f = this._zTime < 0 != i < 0 && (this._initted || !u), h, v, _, p, k, m, d, g, x, w, S, T;
        if (this !== q && c > a && i >= 0 && (c = a),
        c !== this._tTime || s || f) {
            if (l !== this._time && u && (c += this._time - l,
            i += this._time - l),
            h = c,
            x = this._start,
            g = this._ts,
            m = !g,
            f && (u || (l = this._zTime),
            (i || !o) && (this._zTime = i)),
            this._repeat) {
                if (S = this._yoyo,
                k = u + this._rDelay,
                this._repeat < -1 && i < 0)
                    return this.totalTime(k * 100 + i, o, s);
                if (h = he(c % k),
                c === a ? (p = this._repeat,
                h = u) : (p = ~~(c / k),
                p && p === c / k && (h = u,
                p--),
                h > u && (h = u)),
                w = Tr(this._tTime, k),
                !l && this._tTime && w !== p && this._tTime - w * k - this._dur <= 0 && (w = p),
                S && p & 1 && (h = u - h,
                T = 1),
                p !== w && !this._lock) {
                    var C = S && w & 1
                      , E = C === (S && p & 1);
                    if (p < w && (C = !C),
                    l = C ? 0 : c % u ? u : c,
                    this._lock = 1,
                    this.render(l || (T ? 0 : he(p * k)), o, !u)._lock = 0,
                    this._tTime = c,
                    !o && this.parent && Ge(this, "onRepeat"),
                    this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
                    l && l !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (u = this._dur,
                    a = this._tDur,
                    E && (this._lock = 2,
                    l = C ? u : -1e-4,
                    this.render(l, !0),
                    this.vars.repeatRefresh && !T && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !m)
                        return this;
                    Ah(this, T)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (d = gg(this, he(l), he(h)),
            d && (c -= h - (h = d._start))),
            this._tTime = c,
            this._time = h,
            this._act = !g,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = i,
            l = 0),
            !l && h && !o && !p && (Ge(this, "onStart"),
            this._tTime !== c))
                return this;
            if (h >= l && i >= 0)
                for (v = this._first; v; ) {
                    if (_ = v._next,
                    (v._act || h >= v._start) && v._ts && d !== v) {
                        if (v.parent !== this)
                            return this.render(i, o, s);
                        if (v.render(v._ts > 0 ? (h - v._start) * v._ts : (v._dirty ? v.totalDuration() : v._tDur) + (h - v._start) * v._ts, o, s),
                        h !== this._time || !this._ts && !m) {
                            d = 0,
                            _ && (c += this._zTime = -$);
                            break
                        }
                    }
                    v = _
                }
            else {
                v = this._last;
                for (var j = i < 0 ? i : h; v; ) {
                    if (_ = v._prev,
                    (v._act || j <= v._end) && v._ts && d !== v) {
                        if (v.parent !== this)
                            return this.render(i, o, s);
                        if (v.render(v._ts > 0 ? (j - v._start) * v._ts : (v._dirty ? v.totalDuration() : v._tDur) + (j - v._start) * v._ts, o, s || Te && (v._initted || v._startAt)),
                        h !== this._time || !this._ts && !m) {
                            d = 0,
                            _ && (c += this._zTime = j ? -$ : $);
                            break
                        }
                    }
                    v = _
                }
            }
            if (d && !o && (this.pause(),
            d.render(h >= l ? 0 : -$)._zTime = h >= l ? 1 : -1,
            this._ts))
                return this._start = x,
                hs(this),
                this.render(i, o, s);
            this._onUpdate && !o && Ge(this, "onUpdate", !0),
            (c === a && this._tTime >= this.totalDuration() || !c && l) && (x === this._start || Math.abs(g) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === a && this._ts > 0 || !c && this._ts < 0) && fn(this, 1),
            !o && !(i < 0 && !l) && (c || l || !a) && (Ge(this, c === a && i >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(c < a && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    n.add = function(i, o) {
        var s = this;
        if (Ut(o) || (o = et(this, o, i)),
        !(i instanceof Ci)) {
            if (Ce(i))
                return i.forEach(function(l) {
                    return s.add(l, o)
                }),
                this;
            if (me(i))
                return this.addLabel(i, o);
            if (re(i))
                i = ae.delayedCall(0, i);
            else
                return this
        }
        return this !== i ? kt(this, i, o) : this
    }
    ,
    n.getChildren = function(i, o, s, l) {
        i === void 0 && (i = !0),
        o === void 0 && (o = !0),
        s === void 0 && (s = !0),
        l === void 0 && (l = -it);
        for (var a = [], u = this._first; u; )
            u._start >= l && (u instanceof ae ? o && a.push(u) : (s && a.push(u),
            i && a.push.apply(a, u.getChildren(!0, o, s)))),
            u = u._next;
        return a
    }
    ,
    n.getById = function(i) {
        for (var o = this.getChildren(1, 1, 1), s = o.length; s--; )
            if (o[s].vars.id === i)
                return o[s]
    }
    ,
    n.remove = function(i) {
        return me(i) ? this.removeLabel(i) : re(i) ? this.killTweensOf(i) : (ds(this, i),
        i === this._recent && (this._recent = this._last),
        Mn(this))
    }
    ,
    n.totalTime = function(i, o) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = he(He.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))),
        t.prototype.totalTime.call(this, i, o),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    n.addLabel = function(i, o) {
        return this.labels[i] = et(this, o),
        this
    }
    ,
    n.removeLabel = function(i) {
        return delete this.labels[i],
        this
    }
    ,
    n.addPause = function(i, o, s) {
        var l = ae.delayedCall(0, o || ki, s);
        return l.data = "isPause",
        this._hasPause = 1,
        kt(this, l, et(this, i))
    }
    ,
    n.removePause = function(i) {
        var o = this._first;
        for (i = et(this, i); o; )
            o._start === i && o.data === "isPause" && fn(o),
            o = o._next
    }
    ,
    n.killTweensOf = function(i, o, s) {
        for (var l = this.getTweensOf(i, s), a = l.length; a--; )
            Kt !== l[a] && l[a].kill(i, o);
        return this
    }
    ,
    n.getTweensOf = function(i, o) {
        for (var s = [], l = ot(i), a = this._first, u = Ut(o), c; a; )
            a instanceof ae ? ug(a._targets, l) && (u ? (!Kt || a._initted && a._ts) && a.globalTime(0) <= o && a.globalTime(a.totalDuration()) > o : !o || a.isActive()) && s.push(a) : (c = a.getTweensOf(l, o)).length && s.push.apply(s, c),
            a = a._next;
        return s
    }
    ,
    n.tweenTo = function(i, o) {
        o = o || {};
        var s = this, l = et(s, i), a = o, u = a.startAt, c = a.onStart, f = a.onStartParams, h = a.immediateRender, v, _ = ae.to(s, ut({
            ease: o.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: l,
            overwrite: "auto",
            duration: o.duration || Math.abs((l - (u && "time"in u ? u.time : s._time)) / s.timeScale()) || $,
            onStart: function() {
                if (s.pause(),
                !v) {
                    var k = o.duration || Math.abs((l - (u && "time"in u ? u.time : s._time)) / s.timeScale());
                    _._dur !== k && Cr(_, k, 0, 1).render(_._time, !0, !0),
                    v = 1
                }
                c && c.apply(_, f || [])
            }
        }, o));
        return h ? _.render(0) : _
    }
    ,
    n.tweenFromTo = function(i, o, s) {
        return this.tweenTo(o, ut({
            startAt: {
                time: et(this, i)
            }
        }, s))
    }
    ,
    n.recent = function() {
        return this._recent
    }
    ,
    n.nextLabel = function(i) {
        return i === void 0 && (i = this._time),
        zc(this, et(this, i))
    }
    ,
    n.previousLabel = function(i) {
        return i === void 0 && (i = this._time),
        zc(this, et(this, i), 1)
    }
    ,
    n.currentLabel = function(i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + $)
    }
    ,
    n.shiftChildren = function(i, o, s) {
        s === void 0 && (s = 0);
        for (var l = this._first, a = this.labels, u; l; )
            l._start >= s && (l._start += i,
            l._end += i),
            l = l._next;
        if (o)
            for (u in a)
                a[u] >= s && (a[u] += i);
        return Mn(this)
    }
    ,
    n.invalidate = function(i) {
        var o = this._first;
        for (this._lock = 0; o; )
            o.invalidate(i),
            o = o._next;
        return t.prototype.invalidate.call(this, i)
    }
    ,
    n.clear = function(i) {
        i === void 0 && (i = !0);
        for (var o = this._first, s; o; )
            s = o._next,
            this.remove(o),
            o = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        Mn(this)
    }
    ,
    n.totalDuration = function(i) {
        var o = 0, s = this, l = s._last, a = it, u, c, f;
        if (arguments.length)
            return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
        if (s._dirty) {
            for (f = s.parent; l; )
                u = l._prev,
                l._dirty && l.totalDuration(),
                c = l._start,
                c > a && s._sort && l._ts && !s._lock ? (s._lock = 1,
                kt(s, l, c - l._delay, 1)._lock = 0) : a = c,
                c < 0 && l._ts && (o -= c,
                (!f && !s._dp || f && f.smoothChildTiming) && (s._start += c / s._ts,
                s._time -= c,
                s._tTime -= c),
                s.shiftChildren(-c, !1, -1 / 0),
                a = 0),
                l._end > o && l._ts && (o = l._end),
                l = u;
            Cr(s, s === q && s._time > o ? s._time : o, 1, 1),
            s._dirty = 0
        }
        return s._tDur
    }
    ,
    e.updateRoot = function(i) {
        if (q._ts && (yh(q, Qo(i, q)),
        gh = He.frame),
        He.frame >= Pc) {
            Pc += Ke.autoSleep || 120;
            var o = q._first;
            if ((!o || !o._ts) && Ke.autoSleep && He._listeners.length < 2) {
                for (; o && !o._ts; )
                    o = o._next;
                o || He.sleep()
            }
        }
    }
    ,
    e
}(Ci);
ut(Ne.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Mg = function(e, n, r, i, o, s, l) {
    var a = new Ue(this._pt,e,n,0,1,Gh,null,o), u = 0, c = 0, f, h, v, _, p, k, m, d;
    for (a.b = r,
    a.e = i,
    r += "",
    i += "",
    (m = ~i.indexOf("random(")) && (i = Si(i)),
    s && (d = [r, i],
    s(d, e, n),
    r = d[0],
    i = d[1]),
    h = r.match(Bs) || []; f = Bs.exec(i); )
        _ = f[0],
        p = i.substring(u, f.index),
        v ? v = (v + 1) % 5 : p.substr(-5) === "rgba(" && (v = 1),
        _ !== h[c++] && (k = parseFloat(h[c - 1]) || 0,
        a._pt = {
            _next: a._pt,
            p: p || c === 1 ? p : ",",
            s: k,
            c: _.charAt(1) === "=" ? hr(k, _) - k : parseFloat(_) - k,
            m: v && v < 4 ? Math.round : 0
        },
        u = Bs.lastIndex);
    return a.c = u < i.length ? i.substring(u, i.length) : "",
    a.fp = l,
    (fh.test(i) || m) && (a.e = 0),
    this._pt = a,
    a
}, ou = function(e, n, r, i, o, s, l, a, u, c) {
    re(i) && (i = i(o || 0, e, s));
    var f = e[n], h = r !== "get" ? r : re(f) ? u ? e[n.indexOf("set") || !re(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](u) : e[n]() : f, v = re(f) ? u ? Fg : Hh : lu, _;
    if (me(i) && (~i.indexOf("random(") && (i = Si(i)),
    i.charAt(1) === "=" && (_ = hr(h, i) + (Se(h) || 0),
    (_ || _ === 0) && (i = _))),
    !c || h !== i || ql)
        return !isNaN(h * i) && i !== "" ? (_ = new Ue(this._pt,e,n,+h || 0,i - (h || 0),typeof f == "boolean" ? Ug : Qh,0,v),
        u && (_.fp = u),
        l && _.modifier(l, this, e),
        this._pt = _) : (!f && !(n in e) && tu(n, i),
        Mg.call(this, e, n, h, i, v, a || Ke.stringFilter, u))
}, Rg = function(e, n, r, i, o) {
    if (re(e) && (e = ri(e, o, n, r, i)),
    !Pt(e) || e.style && e.nodeType || Ce(e) || uh(e))
        return me(e) ? ri(e, o, n, r, i) : e;
    var s = {}, l;
    for (l in e)
        s[l] = ri(e[l], o, n, r, i);
    return s
}, Bh = function(e, n, r, i, o, s) {
    var l, a, u, c;
    if ($e[e] && (l = new $e[e]).init(o, l.rawVars ? n[e] : Rg(n[e], i, o, s, r), r, i, s) !== !1 && (r._pt = a = new Ue(r._pt,o,e,0,1,l.render,l,0,l.priority),
    r !== sr))
        for (u = r._ptLookup[r._targets.indexOf(o)],
        c = l._props.length; c--; )
            u[l._props[c]] = a;
    return l
}, Kt, ql, su = function t(e, n, r) {
    var i = e.vars, o = i.ease, s = i.startAt, l = i.immediateRender, a = i.lazy, u = i.onUpdate, c = i.runBackwards, f = i.yoyoEase, h = i.keyframes, v = i.autoRevert, _ = e._dur, p = e._startAt, k = e._targets, m = e.parent, d = m && m.data === "nested" ? m.vars.targets : k, g = e._overwrite === "auto" && !qa, x = e.timeline, w, S, T, C, E, j, D, F, A, se, le, Y, te;
    if (x && (!h || !o) && (o = "none"),
    e._ease = Rn(o, Sr.ease),
    e._yEase = f ? Fh(Rn(f === !0 ? o : f, Sr.ease)) : 0,
    f && e._yoyo && !e._repeat && (f = e._yEase,
    e._yEase = e._ease,
    e._ease = f),
    e._from = !x && !!i.runBackwards,
    !x || h && !i.stagger) {
        if (F = k[0] ? zn(k[0]).harness : 0,
        Y = F && i[F.prop],
        w = Ho(i, nu),
        p && (p._zTime < 0 && p.progress(1),
        n < 0 && c && l && !v ? p.render(-1, !0) : p.revert(c && _ ? ho : lg),
        p._lazy = 0),
        s) {
            if (fn(e._startAt = ae.set(k, ut({
                data: "isStart",
                overwrite: !1,
                parent: m,
                immediateRender: !0,
                lazy: !p && Fe(a),
                startAt: null,
                delay: 0,
                onUpdate: u && function() {
                    return Ge(e, "onUpdate")
                }
                ,
                stagger: 0
            }, s))),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            n < 0 && (Te || !l && !v) && e._startAt.revert(ho),
            l && _ && n <= 0 && r <= 0) {
                n && (e._zTime = n);
                return
            }
        } else if (c && _ && !p) {
            if (n && (l = !1),
            T = ut({
                overwrite: !1,
                data: "isFromStart",
                lazy: l && !p && Fe(a),
                immediateRender: l,
                stagger: 0,
                parent: m
            }, w),
            Y && (T[F.prop] = Y),
            fn(e._startAt = ae.set(k, T)),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            n < 0 && (Te ? e._startAt.revert(ho) : e._startAt.render(-1, !0)),
            e._zTime = n,
            !l)
                t(e._startAt, $, $);
            else if (!n)
                return
        }
        for (e._pt = e._ptCache = 0,
        a = _ && Fe(a) || a && !_,
        S = 0; S < k.length; S++) {
            if (E = k[S],
            D = E._gsap || iu(k)[S]._gsap,
            e._ptLookup[S] = se = {},
            Ql[D.id] && ln.length && $o(),
            le = d === k ? S : d.indexOf(E),
            F && (A = new F).init(E, Y || w, e, le, d) !== !1 && (e._pt = C = new Ue(e._pt,E,A.name,0,1,A.render,A,0,A.priority),
            A._props.forEach(function(N) {
                se[N] = C
            }),
            A.priority && (j = 1)),
            !F || Y)
                for (T in w)
                    $e[T] && (A = Bh(T, w, e, le, E, d)) ? A.priority && (j = 1) : se[T] = C = ou.call(e, E, T, "get", w[T], le, d, 0, i.stringFilter);
            e._op && e._op[S] && e.kill(E, e._op[S]),
            g && e._pt && (Kt = e,
            q.killTweensOf(E, se, e.globalTime(n)),
            te = !e.parent,
            Kt = 0),
            e._pt && a && (Ql[D.id] = 1)
        }
        j && Yh(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = u,
    e._initted = (!e._op || e._pt) && !te,
    h && n <= 0 && x.render(it, !0, !0)
}, Dg = function(e, n, r, i, o, s, l, a) {
    var u = (e._pt && e._ptCache || (e._ptCache = {}))[n], c, f, h, v;
    if (!u)
        for (u = e._ptCache[n] = [],
        h = e._ptLookup,
        v = e._targets.length; v--; ) {
            if (c = h[v][n],
            c && c.d && c.d._pt)
                for (c = c.d._pt; c && c.p !== n && c.fp !== n; )
                    c = c._next;
            if (!c)
                return ql = 1,
                e.vars[n] = "+=0",
                su(e, l),
                ql = 0,
                a ? wi(n + " not eligible for reset") : 1;
            u.push(c)
        }
    for (v = u.length; v--; )
        f = u[v],
        c = f._pt || f,
        c.s = (i || i === 0) && !o ? i : c.s + (i || 0) + s * c.c,
        c.c = r - c.s,
        f.e && (f.e = ie(r) + Se(f.e)),
        f.b && (f.b = c.s + Se(f.b))
}, Ig = function(e, n) {
    var r = e[0] ? zn(e[0]).harness : 0, i = r && r.aliases, o, s, l, a;
    if (!i)
        return n;
    o = Vn({}, n);
    for (s in i)
        if (s in o)
            for (a = i[s].split(","),
            l = a.length; l--; )
                o[a[l]] = o[s];
    return o
}, Lg = function(e, n, r, i) {
    var o = n.ease || i || "power1.inOut", s, l;
    if (Ce(n))
        l = r[e] || (r[e] = []),
        n.forEach(function(a, u) {
            return l.push({
                t: u / (n.length - 1) * 100,
                v: a,
                e: o
            })
        });
    else
        for (s in n)
            l = r[s] || (r[s] = []),
            s === "ease" || l.push({
                t: parseFloat(e),
                v: n[s],
                e: o
            })
}, ri = function(e, n, r, i, o) {
    return re(e) ? e.call(n, r, i, o) : me(e) && ~e.indexOf("random(") ? Si(e) : e
}, Wh = ru + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", $h = {};
Ae(Wh + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
    return $h[t] = 1
});
var ae = function(t) {
    lh(e, t);
    function e(r, i, o, s) {
        var l;
        typeof i == "number" && (o.duration = i,
        i = o,
        o = null),
        l = t.call(this, s ? i : ti(i)) || this;
        var a = l.vars, u = a.duration, c = a.delay, f = a.immediateRender, h = a.stagger, v = a.overwrite, _ = a.keyframes, p = a.defaults, k = a.scrollTrigger, m = a.yoyoEase, d = i.parent || q, g = (Ce(r) || uh(r) ? Ut(r[0]) : "length"in i) ? [r] : ot(r), x, w, S, T, C, E, j, D;
        if (l._targets = g.length ? iu(g) : wi("GSAP target " + r + " not found. https://gsap.com", !Ke.nullTargetWarn) || [],
        l._ptLookup = [],
        l._overwrite = v,
        _ || h || Ji(u) || Ji(c)) {
            if (i = l.vars,
            x = l.timeline = new Ne({
                data: "nested",
                defaults: p || {},
                targets: d && d.data === "nested" ? d.vars.targets : g
            }),
            x.kill(),
            x.parent = x._dp = jt(l),
            x._start = 0,
            h || Ji(u) || Ji(c)) {
                if (T = g.length,
                j = h && Ph(h),
                Pt(h))
                    for (C in h)
                        ~Wh.indexOf(C) && (D || (D = {}),
                        D[C] = h[C]);
                for (w = 0; w < T; w++)
                    S = Ho(i, $h),
                    S.stagger = 0,
                    m && (S.yoyoEase = m),
                    D && Vn(S, D),
                    E = g[w],
                    S.duration = +ri(u, jt(l), w, E, g),
                    S.delay = (+ri(c, jt(l), w, E, g) || 0) - l._delay,
                    !h && T === 1 && S.delay && (l._delay = c = S.delay,
                    l._start += c,
                    S.delay = 0),
                    x.to(E, S, j ? j(w, E, g) : 0),
                    x._ease = I.none;
                x.duration() ? u = c = 0 : l.timeline = 0
            } else if (_) {
                ti(ut(x.vars.defaults, {
                    ease: "none"
                })),
                x._ease = Rn(_.ease || i.ease || "none");
                var F = 0, A, se, le;
                if (Ce(_))
                    _.forEach(function(Y) {
                        return x.to(g, Y, ">")
                    }),
                    x.duration();
                else {
                    S = {};
                    for (C in _)
                        C === "ease" || C === "easeEach" || Lg(C, _[C], S, _.easeEach);
                    for (C in S)
                        for (A = S[C].sort(function(Y, te) {
                            return Y.t - te.t
                        }),
                        F = 0,
                        w = 0; w < A.length; w++)
                            se = A[w],
                            le = {
                                ease: se.e,
                                duration: (se.t - (w ? A[w - 1].t : 0)) / 100 * u
                            },
                            le[C] = se.v,
                            x.to(g, le, F),
                            F += le.duration;
                    x.duration() < u && x.to({}, {
                        duration: u - x.duration()
                    })
                }
            }
            u || l.duration(u = x.duration())
        } else
            l.timeline = 0;
        return v === !0 && !qa && (Kt = jt(l),
        q.killTweensOf(g),
        Kt = 0),
        kt(d, jt(l), o),
        i.reversed && l.reverse(),
        i.paused && l.paused(!0),
        (f || !u && !_ && l._start === he(d._time) && Fe(f) && hg(jt(l)) && d.data !== "nested") && (l._tTime = -$,
        l.render(Math.max(0, -c) || 0)),
        k && Sh(jt(l), k),
        l
    }
    var n = e.prototype;
    return n.render = function(i, o, s) {
        var l = this._time, a = this._tDur, u = this._dur, c = i < 0, f = i > a - $ && !c ? a : i < $ ? 0 : i, h, v, _, p, k, m, d, g, x;
        if (!u)
            mg(this, i, o, s);
        else if (f !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
            if (h = f,
            g = this.timeline,
            this._repeat) {
                if (p = u + this._rDelay,
                this._repeat < -1 && c)
                    return this.totalTime(p * 100 + i, o, s);
                if (h = he(f % p),
                f === a ? (_ = this._repeat,
                h = u) : (_ = ~~(f / p),
                _ && _ === he(f / p) && (h = u,
                _--),
                h > u && (h = u)),
                m = this._yoyo && _ & 1,
                m && (x = this._yEase,
                h = u - h),
                k = Tr(this._tTime, p),
                h === l && !s && this._initted && _ === k)
                    return this._tTime = f,
                    this;
                _ !== k && (g && this._yEase && Ah(g, m),
                this.vars.repeatRefresh && !m && !this._lock && this._time !== p && this._initted && (this._lock = s = 1,
                this.render(he(p * _), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Th(this, c ? i : h, s, o, f))
                    return this._tTime = 0,
                    this;
                if (l !== this._time && !(s && this.vars.repeatRefresh && _ !== k))
                    return this;
                if (u !== this._dur)
                    return this.render(i, o, s)
            }
            if (this._tTime = f,
            this._time = h,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = d = (x || this._ease)(h / u),
            this._from && (this.ratio = d = 1 - d),
            h && !l && !o && !_ && (Ge(this, "onStart"),
            this._tTime !== f))
                return this;
            for (v = this._pt; v; )
                v.r(d, v.d),
                v = v._next;
            g && g.render(i < 0 ? i : g._dur * g._ease(h / this._dur), o, s) || this._startAt && (this._zTime = i),
            this._onUpdate && !o && (c && Gl(this, i, o, s),
            Ge(this, "onUpdate")),
            this._repeat && _ !== k && this.vars.onRepeat && !o && this.parent && Ge(this, "onRepeat"),
            (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && Gl(this, i, !0, !0),
            (i || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && fn(this, 1),
            !o && !(c && !l) && (f || l || m) && (Ge(this, f === a ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(f < a && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    n.targets = function() {
        return this._targets
    }
    ,
    n.invalidate = function(i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(i),
        t.prototype.invalidate.call(this, i)
    }
    ,
    n.resetTo = function(i, o, s, l, a) {
        Ti || He.wake(),
        this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
        return this._initted || su(this, u),
        c = this._ease(u / this._dur),
        Dg(this, i, o, s, l, c, u, a) ? this.resetTo(i, o, s, l, 1) : (ps(this, 0),
        this.parent || wh(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    n.kill = function(i, o) {
        if (o === void 0 && (o = "all"),
        !i && (!o || o === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? Hr(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, o, Kt && Kt.vars.overwrite !== !0)._first || Hr(this),
            this.parent && s !== this.timeline.totalDuration() && Cr(this, this._dur * this.timeline._tDur / s, 0, 1),
            this
        }
        var l = this._targets, a = i ? ot(i) : l, u = this._ptLookup, c = this._pt, f, h, v, _, p, k, m;
        if ((!o || o === "all") && fg(l, a))
            return o === "all" && (this._pt = 0),
            Hr(this);
        for (f = this._op = this._op || [],
        o !== "all" && (me(o) && (p = {},
        Ae(o, function(d) {
            return p[d] = 1
        }),
        o = p),
        o = Ig(l, o)),
        m = l.length; m--; )
            if (~a.indexOf(l[m])) {
                h = u[m],
                o === "all" ? (f[m] = o,
                _ = h,
                v = {}) : (v = f[m] = f[m] || {},
                _ = o);
                for (p in _)
                    k = h && h[p],
                    k && ((!("kill"in k.d) || k.d.kill(p) === !0) && ds(this, k, "_pt"),
                    delete h[p]),
                    v !== "all" && (v[p] = 1)
            }
        return this._initted && !this._pt && c && Hr(this),
        this
    }
    ,
    e.to = function(i, o) {
        return new e(i,o,arguments[2])
    }
    ,
    e.from = function(i, o) {
        return ni(1, arguments)
    }
    ,
    e.delayedCall = function(i, o, s, l) {
        return new e(o,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: o,
            onReverseComplete: o,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: l
        })
    }
    ,
    e.fromTo = function(i, o, s) {
        return ni(2, arguments)
    }
    ,
    e.set = function(i, o) {
        return o.duration = 0,
        o.repeatDelay || (o.repeat = 0),
        new e(i,o)
    }
    ,
    e.killTweensOf = function(i, o, s) {
        return q.killTweensOf(i, o, s)
    }
    ,
    e
}(Ci);
ut(ae.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Ae("staggerTo,staggerFrom,staggerFromTo", function(t) {
    ae[t] = function() {
        var e = new Ne
          , n = Xl.call(arguments, 0);
        return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0),
        e[t].apply(e, n)
    }
});
var lu = function(e, n, r) {
    return e[n] = r
}
  , Hh = function(e, n, r) {
    return e[n](r)
}
  , Fg = function(e, n, r, i) {
    return e[n](i.fp, r)
}
  , Ag = function(e, n, r) {
    return e.setAttribute(n, r)
}
  , au = function(e, n) {
    return re(e[n]) ? Hh : Ja(e[n]) && e.setAttribute ? Ag : lu
}
  , Qh = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
}
  , Ug = function(e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n)
}
  , Gh = function(e, n) {
    var r = n._pt
      , i = "";
    if (!e && n.b)
        i = n.b;
    else if (e === 1 && n.e)
        i = n.e;
    else {
        for (; r; )
            i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i,
            r = r._next;
        i += n.c
    }
    n.set(n.t, n.p, i, n)
}
  , uu = function(e, n) {
    for (var r = n._pt; r; )
        r.r(e, r.d),
        r = r._next
}
  , Vg = function(e, n, r, i) {
    for (var o = this._pt, s; o; )
        s = o._next,
        o.p === i && o.modifier(e, n, r),
        o = s
}
  , Bg = function(e) {
    for (var n = this._pt, r, i; n; )
        i = n._next,
        n.p === e && !n.op || n.op === e ? ds(this, n, "_pt") : n.dep || (r = 1),
        n = i;
    return !r
}
  , Wg = function(e, n, r, i) {
    i.mSet(e, n, i.m.call(i.tween, r, i.mt), i)
}
  , Yh = function(e) {
    for (var n = e._pt, r, i, o, s; n; ) {
        for (r = n._next,
        i = o; i && i.pr > n.pr; )
            i = i._next;
        (n._prev = i ? i._prev : s) ? n._prev._next = n : o = n,
        (n._next = i) ? i._prev = n : s = n,
        n = r
    }
    e._pt = o
}
  , Ue = function() {
    function t(n, r, i, o, s, l, a, u, c) {
        this.t = r,
        this.s = o,
        this.c = s,
        this.p = i,
        this.r = l || Qh,
        this.d = a || this,
        this.set = u || lu,
        this.pr = c || 0,
        this._next = n,
        n && (n._prev = this)
    }
    var e = t.prototype;
    return e.modifier = function(r, i, o) {
        this.mSet = this.mSet || this.set,
        this.set = Wg,
        this.m = r,
        this.mt = o,
        this.tween = i
    }
    ,
    t
}();
Ae(ru + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
    return nu[t] = 1
});
qe.TweenMax = qe.TweenLite = ae;
qe.TimelineLite = qe.TimelineMax = Ne;
q = new Ne({
    sortChildren: !1,
    defaults: Sr,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Ke.stringFilter = Lh;
var Dn = []
  , mo = {}
  , $g = []
  , Rc = 0
  , Hg = 0
  , Gs = function(e) {
    return (mo[e] || $g).map(function(n) {
        return n()
    })
}
  , Jl = function() {
    var e = Date.now()
      , n = [];
    e - Rc > 2 && (Gs("matchMediaInit"),
    Dn.forEach(function(r) {
        var i = r.queries, o = r.conditions, s, l, a, u;
        for (l in i)
            s = xt.matchMedia(i[l]).matches,
            s && (a = 1),
            s !== o[l] && (o[l] = s,
            u = 1);
        u && (r.revert(),
        a && n.push(r))
    }),
    Gs("matchMediaRevert"),
    n.forEach(function(r) {
        return r.onMatch(r, function(i) {
            return r.add(null, i)
        })
    }),
    Rc = e,
    Gs("matchMedia"))
}
  , Xh = function() {
    function t(n, r) {
        this.selector = r && Kl(r),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = Hg++,
        n && this.add(n)
    }
    var e = t.prototype;
    return e.add = function(r, i, o) {
        re(r) && (o = i,
        i = r,
        r = re);
        var s = this
          , l = function() {
            var u = K, c = s.selector, f;
            return u && u !== s && u.data.push(s),
            o && (s.selector = Kl(o)),
            K = s,
            f = i.apply(s, arguments),
            re(f) && s._r.push(f),
            K = u,
            s.selector = c,
            s.isReverted = !1,
            f
        };
        return s.last = l,
        r === re ? l(s, function(a) {
            return s.add(null, a)
        }) : r ? s[r] = l : l
    }
    ,
    e.ignore = function(r) {
        var i = K;
        K = null,
        r(this),
        K = i
    }
    ,
    e.getTweens = function() {
        var r = [];
        return this.data.forEach(function(i) {
            return i instanceof t ? r.push.apply(r, i.getTweens()) : i instanceof ae && !(i.parent && i.parent.data === "nested") && r.push(i)
        }),
        r
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(r, i) {
        var o = this;
        if (r ? function() {
            for (var l = o.getTweens(), a = o.data.length, u; a--; )
                u = o.data[a],
                u.data === "isFlip" && (u.revert(),
                u.getChildren(!0, !0, !1).forEach(function(c) {
                    return l.splice(l.indexOf(c), 1)
                }));
            for (l.map(function(c) {
                return {
                    g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                    t: c
                }
            }).sort(function(c, f) {
                return f.g - c.g || -1 / 0
            }).forEach(function(c) {
                return c.t.revert(r)
            }),
            a = o.data.length; a--; )
                u = o.data[a],
                u instanceof Ne ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(),
                u.kill()) : !(u instanceof ae) && u.revert && u.revert(r);
            o._r.forEach(function(c) {
                return c(r, o)
            }),
            o.isReverted = !0
        }() : this.data.forEach(function(l) {
            return l.kill && l.kill()
        }),
        this.clear(),
        i)
            for (var s = Dn.length; s--; )
                Dn[s].id === this.id && Dn.splice(s, 1)
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    t
}()
  , Qg = function() {
    function t(n) {
        this.contexts = [],
        this.scope = n,
        K && K.data.push(this)
    }
    var e = t.prototype;
    return e.add = function(r, i, o) {
        Pt(r) || (r = {
            matches: r
        });
        var s = new Xh(0,o || this.scope), l = s.conditions = {}, a, u, c;
        K && !s.selector && (s.selector = K.selector),
        this.contexts.push(s),
        i = s.add("onMatch", i),
        s.queries = r;
        for (u in r)
            u === "all" ? c = 1 : (a = xt.matchMedia(r[u]),
            a && (Dn.indexOf(s) < 0 && Dn.push(s),
            (l[u] = a.matches) && (c = 1),
            a.addListener ? a.addListener(Jl) : a.addEventListener("change", Jl)));
        return c && i(s, function(f) {
            return s.add(null, f)
        }),
        this
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    e.kill = function(r) {
        this.contexts.forEach(function(i) {
            return i.kill(r, !0)
        })
    }
    ,
    t
}()
  , Go = {
    registerPlugin: function() {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
        n.forEach(function(i) {
            return Rh(i)
        })
    },
    timeline: function(e) {
        return new Ne(e)
    },
    getTweensOf: function(e, n) {
        return q.getTweensOf(e, n)
    },
    getProperty: function(e, n, r, i) {
        me(e) && (e = ot(e)[0]);
        var o = zn(e || {}).get
          , s = r ? xh : _h;
        return r === "native" && (r = ""),
        e && (n ? s(($e[n] && $e[n].get || o)(e, n, r, i)) : function(l, a, u) {
            return s(($e[l] && $e[l].get || o)(e, l, a, u))
        }
        )
    },
    quickSetter: function(e, n, r) {
        if (e = ot(e),
        e.length > 1) {
            var i = e.map(function(c) {
                return Be.quickSetter(c, n, r)
            })
              , o = i.length;
            return function(c) {
                for (var f = o; f--; )
                    i[f](c)
            }
        }
        e = e[0] || {};
        var s = $e[n]
          , l = zn(e)
          , a = l.harness && (l.harness.aliases || {})[n] || n
          , u = s ? function(c) {
            var f = new s;
            sr._pt = 0,
            f.init(e, r ? c + r : c, sr, 0, [e]),
            f.render(1, f),
            sr._pt && uu(1, sr)
        }
        : l.set(e, a);
        return s ? u : function(c) {
            return u(e, a, r ? c + r : c, l, 1)
        }
    },
    quickTo: function(e, n, r) {
        var i, o = Be.to(e, Vn((i = {},
        i[n] = "+=0.1",
        i.paused = !0,
        i), r || {})), s = function(a, u, c) {
            return o.resetTo(n, a, u, c)
        };
        return s.tween = o,
        s
    },
    isTweening: function(e) {
        return q.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = Rn(e.ease, Sr.ease)),
        Nc(Sr, e || {})
    },
    config: function(e) {
        return Nc(Ke, e || {})
    },
    registerEffect: function(e) {
        var n = e.name
          , r = e.effect
          , i = e.plugins
          , o = e.defaults
          , s = e.extendTimeline;
        (i || "").split(",").forEach(function(l) {
            return l && !$e[l] && !qe[l] && wi(n + " effect requires " + l + " plugin.")
        }),
        Ws[n] = function(l, a, u) {
            return r(ot(l), ut(a || {}, o), u)
        }
        ,
        s && (Ne.prototype[n] = function(l, a, u) {
            return this.add(Ws[n](l, Pt(a) ? a : (u = a) && {}, this), u)
        }
        )
    },
    registerEase: function(e, n) {
        I[e] = Rn(n)
    },
    parseEase: function(e, n) {
        return arguments.length ? Rn(e, n) : I
    },
    getById: function(e) {
        return q.getById(e)
    },
    exportRoot: function(e, n) {
        e === void 0 && (e = {});
        var r = new Ne(e), i, o;
        for (r.smoothChildTiming = Fe(e.smoothChildTiming),
        q.remove(r),
        r._dp = 0,
        r._time = r._tTime = q._time,
        i = q._first; i; )
            o = i._next,
            (n || !(!i._dur && i instanceof ae && i.vars.onComplete === i._targets[0])) && kt(r, i, i._start - i._delay),
            i = o;
        return kt(q, r, 0),
        r
    },
    context: function(e, n) {
        return e ? new Xh(e,n) : K
    },
    matchMedia: function(e) {
        return new Qg(e)
    },
    matchMediaRefresh: function() {
        return Dn.forEach(function(e) {
            var n = e.conditions, r, i;
            for (i in n)
                n[i] && (n[i] = !1,
                r = 1);
            r && e.revert()
        }) || Jl()
    },
    addEventListener: function(e, n) {
        var r = mo[e] || (mo[e] = []);
        ~r.indexOf(n) || r.push(n)
    },
    removeEventListener: function(e, n) {
        var r = mo[e]
          , i = r && r.indexOf(n);
        i >= 0 && r.splice(i, 1)
    },
    utils: {
        wrap: Sg,
        wrapYoyo: Tg,
        distribute: Ph,
        random: jh,
        snap: Nh,
        normalize: kg,
        getUnit: Se,
        clamp: yg,
        splitColor: Dh,
        toArray: ot,
        selector: Kl,
        mapRange: zh,
        pipe: xg,
        unitize: wg,
        interpolate: Cg,
        shuffle: Eh
    },
    install: ph,
    effects: Ws,
    ticker: He,
    updateRoot: Ne.updateRoot,
    plugins: $e,
    globalTimeline: q,
    core: {
        PropTween: Ue,
        globals: mh,
        Tween: ae,
        Timeline: Ne,
        Animation: Ci,
        getCache: zn,
        _removeLinkedListItem: ds,
        reverting: function() {
            return Te
        },
        context: function(e) {
            return e && K && (K.data.push(e),
            e._ctx = K),
            K
        },
        suppressOverwrites: function(e) {
            return qa = e
        }
    }
};
Ae("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
    return Go[t] = ae[t]
});
He.add(Ne.updateRoot);
sr = Go.to({}, {
    duration: 0
});
var Gg = function(e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
        r = r._next;
    return r
}
  , Yg = function(e, n) {
    var r = e._targets, i, o, s;
    for (i in n)
        for (o = r.length; o--; )
            s = e._ptLookup[o][i],
            s && (s = s.d) && (s._pt && (s = Gg(s, i)),
            s && s.modifier && s.modifier(n[i], e, r[o], i))
}
  , Ys = function(e, n) {
    return {
        name: e,
        rawVars: 1,
        init: function(i, o, s) {
            s._onInit = function(l) {
                var a, u;
                if (me(o) && (a = {},
                Ae(o, function(c) {
                    return a[c] = 1
                }),
                o = a),
                n) {
                    a = {};
                    for (u in o)
                        a[u] = n(o[u]);
                    o = a
                }
                Yg(l, o)
            }
        }
    }
}
  , Be = Go.registerPlugin({
    name: "attr",
    init: function(e, n, r, i, o) {
        var s, l, a;
        this.tween = r;
        for (s in n)
            a = e.getAttribute(s) || "",
            l = this.add(e, "setAttribute", (a || 0) + "", n[s], i, o, 0, 0, s),
            l.op = s,
            l.b = a,
            this._props.push(s)
    },
    render: function(e, n) {
        for (var r = n._pt; r; )
            Te ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d),
            r = r._next
    }
}, {
    name: "endArray",
    init: function(e, n) {
        for (var r = n.length; r--; )
            this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
    }
}, Ys("roundProps", Zl), Ys("modifiers"), Ys("snap", Nh)) || Go;
ae.version = Ne.version = Be.version = "3.12.5";
hh = 1;
ba() && Er();
I.Power0;
I.Power1;
I.Power2;
I.Power3;
I.Power4;
I.Linear;
I.Quad;
I.Cubic;
I.Quart;
I.Quint;
I.Strong;
I.Elastic;
I.Back;
I.SteppedEase;
I.Bounce;
I.Sine;
I.Expo;
I.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Dc, Zt, pr, cu, Pn, Ic, fu, Xg = function() {
    return typeof window < "u"
}, Vt = {}, Sn = 180 / Math.PI, mr = Math.PI / 180, Gn = Math.atan2, Lc = 1e8, du = /([A-Z])/g, Kg = /(left|right|width|margin|padding|x)/i, Zg = /[\s,\(]\S/, St = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, bl = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
}, qg = function(e, n) {
    return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
}, Jg = function(e, n) {
    return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
}, bg = function(e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -.5 : .5)) + n.u, n)
}, Kh = function(e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n)
}, Zh = function(e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
}, ev = function(e, n, r) {
    return e.style[n] = r
}, tv = function(e, n, r) {
    return e.style.setProperty(n, r)
}, nv = function(e, n, r) {
    return e._gsap[n] = r
}, rv = function(e, n, r) {
    return e._gsap.scaleX = e._gsap.scaleY = r
}, iv = function(e, n, r, i, o) {
    var s = e._gsap;
    s.scaleX = s.scaleY = r,
    s.renderTransform(o, s)
}, ov = function(e, n, r, i, o) {
    var s = e._gsap;
    s[n] = r,
    s.renderTransform(o, s)
}, J = "transform", Ve = J + "Origin", sv = function t(e, n) {
    var r = this
      , i = this.target
      , o = i.style
      , s = i._gsap;
    if (e in Vt && o) {
        if (this.tfm = this.tfm || {},
        e !== "transform")
            e = St[e] || e,
            ~e.indexOf(",") ? e.split(",").forEach(function(l) {
                return r.tfm[l] = zt(i, l)
            }) : this.tfm[e] = s.x ? s[e] : zt(i, e),
            e === Ve && (this.tfm.zOrigin = s.zOrigin);
        else
            return St.transform.split(",").forEach(function(l) {
                return t.call(r, l, n)
            });
        if (this.props.indexOf(J) >= 0)
            return;
        s.svg && (this.svgo = i.getAttribute("data-svg-origin"),
        this.props.push(Ve, n, "")),
        e = J
    }
    (o || n) && this.props.push(e, n, o[e])
}, qh = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, lv = function() {
    var e = this.props, n = this.target, r = n.style, i = n._gsap, o, s;
    for (o = 0; o < e.length; o += 3)
        e[o + 1] ? n[e[o]] = e[o + 2] : e[o + 2] ? r[e[o]] = e[o + 2] : r.removeProperty(e[o].substr(0, 2) === "--" ? e[o] : e[o].replace(du, "-$1").toLowerCase());
    if (this.tfm) {
        for (s in this.tfm)
            i[s] = this.tfm[s];
        i.svg && (i.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        o = fu(),
        (!o || !o.isStart) && !r[J] && (qh(r),
        i.zOrigin && r[Ve] && (r[Ve] += " " + i.zOrigin + "px",
        i.zOrigin = 0,
        i.renderTransform()),
        i.uncache = 1)
    }
}, Jh = function(e, n) {
    var r = {
        target: e,
        props: [],
        revert: lv,
        save: sv
    };
    return e._gsap || Be.core.getCache(e),
    n && n.split(",").forEach(function(i) {
        return r.save(i)
    }),
    r
}, bh, ea = function(e, n) {
    var r = Zt.createElementNS ? Zt.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Zt.createElement(e);
    return r && r.style ? r : Zt.createElement(e)
}, Et = function t(e, n, r) {
    var i = getComputedStyle(e);
    return i[n] || i.getPropertyValue(n.replace(du, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, Pr(n) || n, 1) || ""
}, Fc = "O,Moz,ms,Ms,Webkit".split(","), Pr = function(e, n, r) {
    var i = n || Pn
      , o = i.style
      , s = 5;
    if (e in o && !r)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(Fc[s] + e in o); )
        ;
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Fc[s] : "") + e
}, ta = function() {
    Xg() && window.document && (Dc = window,
    Zt = Dc.document,
    pr = Zt.documentElement,
    Pn = ea("div") || {
        style: {}
    },
    ea("div"),
    J = Pr(J),
    Ve = J + "Origin",
    Pn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    bh = !!Pr("perspective"),
    fu = Be.core.reverting,
    cu = 1)
}, Xs = function t(e) {
    var n = ea("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, o = this.style.cssText, s;
    if (pr.appendChild(n),
    n.appendChild(this),
    this.style.display = "block",
    e)
        try {
            s = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = t
        } catch {}
    else
        this._gsapBBox && (s = this._gsapBBox());
    return r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
    pr.removeChild(n),
    this.style.cssText = o,
    s
}, Ac = function(e, n) {
    for (var r = n.length; r--; )
        if (e.hasAttribute(n[r]))
            return e.getAttribute(n[r])
}, ep = function(e) {
    var n;
    try {
        n = e.getBBox()
    } catch {
        n = Xs.call(e, !0)
    }
    return n && (n.width || n.height) || e.getBBox === Xs || (n = Xs.call(e, !0)),
    n && !n.width && !n.x && !n.y ? {
        x: +Ac(e, ["x", "cx", "x1"]) || 0,
        y: +Ac(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : n
}, tp = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ep(e))
}, Bn = function(e, n) {
    if (n) {
        var r = e.style, i;
        n in Vt && n !== Ve && (n = J),
        r.removeProperty ? (i = n.substr(0, 2),
        (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
        r.removeProperty(i === "--" ? n : n.replace(du, "-$1").toLowerCase())) : r.removeAttribute(n)
    }
}, qt = function(e, n, r, i, o, s) {
    var l = new Ue(e._pt,n,r,0,1,s ? Zh : Kh);
    return e._pt = l,
    l.b = i,
    l.e = o,
    e._props.push(r),
    l
}, Uc = {
    deg: 1,
    rad: 1,
    turn: 1
}, av = {
    grid: 1,
    flex: 1
}, dn = function t(e, n, r, i) {
    var o = parseFloat(r) || 0, s = (r + "").trim().substr((o + "").length) || "px", l = Pn.style, a = Kg.test(n), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (a ? "Width" : "Height"), f = 100, h = i === "px", v = i === "%", _, p, k, m;
    if (i === s || !o || Uc[i] || Uc[s])
        return o;
    if (s !== "px" && !h && (o = t(e, n, r, "px")),
    m = e.getCTM && tp(e),
    (v || s === "%") && (Vt[n] || ~n.indexOf("adius")))
        return _ = m ? e.getBBox()[a ? "width" : "height"] : e[c],
        ie(v ? o / _ * f : o / 100 * _);
    if (l[a ? "width" : "height"] = f + (h ? s : i),
    p = ~n.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode,
    m && (p = (e.ownerSVGElement || {}).parentNode),
    (!p || p === Zt || !p.appendChild) && (p = Zt.body),
    k = p._gsap,
    k && v && k.width && a && k.time === He.time && !k.uncache)
        return ie(o / k.width * f);
    if (v && (n === "height" || n === "width")) {
        var d = e.style[n];
        e.style[n] = f + i,
        _ = e[c],
        d ? e.style[n] = d : Bn(e, n)
    } else
        (v || s === "%") && !av[Et(p, "display")] && (l.position = Et(e, "position")),
        p === e && (l.position = "static"),
        p.appendChild(Pn),
        _ = Pn[c],
        p.removeChild(Pn),
        l.position = "absolute";
    return a && v && (k = zn(p),
    k.time = He.time,
    k.width = p[c]),
    ie(h ? _ * o / f : _ && o ? f / _ * o : 0)
}, zt = function(e, n, r, i) {
    var o;
    return cu || ta(),
    n in St && n !== "transform" && (n = St[n],
    ~n.indexOf(",") && (n = n.split(",")[0])),
    Vt[n] && n !== "transform" ? (o = Pi(e, i),
    o = n !== "transformOrigin" ? o[n] : o.svg ? o.origin : Xo(Et(e, Ve)) + " " + o.zOrigin + "px") : (o = e.style[n],
    (!o || o === "auto" || i || ~(o + "").indexOf("calc(")) && (o = Yo[n] && Yo[n](e, n, r) || Et(e, n) || vh(e, n) || (n === "opacity" ? 1 : 0))),
    r && !~(o + "").trim().indexOf(" ") ? dn(e, n, o, r) + r : o
}, uv = function(e, n, r, i) {
    if (!r || r === "none") {
        var o = Pr(n, e, 1)
          , s = o && Et(e, o, 1);
        s && s !== r ? (n = o,
        r = s) : n === "borderColor" && (r = Et(e, "borderTopColor"))
    }
    var l = new Ue(this._pt,e.style,n,0,1,Gh), a = 0, u = 0, c, f, h, v, _, p, k, m, d, g, x, w;
    if (l.b = r,
    l.e = i,
    r += "",
    i += "",
    i === "auto" && (p = e.style[n],
    e.style[n] = i,
    i = Et(e, n) || i,
    p ? e.style[n] = p : Bn(e, n)),
    c = [r, i],
    Lh(c),
    r = c[0],
    i = c[1],
    h = r.match(or) || [],
    w = i.match(or) || [],
    w.length) {
        for (; f = or.exec(i); )
            k = f[0],
            d = i.substring(a, f.index),
            _ ? _ = (_ + 1) % 5 : (d.substr(-5) === "rgba(" || d.substr(-5) === "hsla(") && (_ = 1),
            k !== (p = h[u++] || "") && (v = parseFloat(p) || 0,
            x = p.substr((v + "").length),
            k.charAt(1) === "=" && (k = hr(v, k) + x),
            m = parseFloat(k),
            g = k.substr((m + "").length),
            a = or.lastIndex - g.length,
            g || (g = g || Ke.units[n] || x,
            a === i.length && (i += g,
            l.e += g)),
            x !== g && (v = dn(e, n, p, g) || 0),
            l._pt = {
                _next: l._pt,
                p: d || u === 1 ? d : ",",
                s: v,
                c: m - v,
                m: _ && _ < 4 || n === "zIndex" ? Math.round : 0
            });
        l.c = a < i.length ? i.substring(a, i.length) : ""
    } else
        l.r = n === "display" && i === "none" ? Zh : Kh;
    return fh.test(i) && (l.e = 0),
    this._pt = l,
    l
}, Vc = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, cv = function(e) {
    var n = e.split(" ")
      , r = n[0]
      , i = n[1] || "50%";
    return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r,
    r = i,
    i = e),
    n[0] = Vc[r] || r,
    n[1] = Vc[i] || i,
    n.join(" ")
}, fv = function(e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
        var r = n.t, i = r.style, o = n.u, s = r._gsap, l, a, u;
        if (o === "all" || o === !0)
            i.cssText = "",
            a = 1;
        else
            for (o = o.split(","),
            u = o.length; --u > -1; )
                l = o[u],
                Vt[l] && (a = 1,
                l = l === "transformOrigin" ? Ve : J),
                Bn(r, l);
        a && (Bn(r, J),
        s && (s.svg && r.removeAttribute("transform"),
        Pi(r, 1),
        s.uncache = 1,
        qh(i)))
    }
}, Yo = {
    clearProps: function(e, n, r, i, o) {
        if (o.data !== "isFromStart") {
            var s = e._pt = new Ue(e._pt,n,r,0,0,fv);
            return s.u = i,
            s.pr = -10,
            s.tween = o,
            e._props.push(r),
            1
        }
    }
}, Ei = [1, 0, 0, 1, 0, 0], np = {}, rp = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, Bc = function(e) {
    var n = Et(e, J);
    return rp(n) ? Ei : n.substr(7).match(ch).map(ie)
}, hu = function(e, n) {
    var r = e._gsap || zn(e), i = e.style, o = Bc(e), s, l, a, u;
    return r.svg && e.getAttribute("transform") ? (a = e.transform.baseVal.consolidate().matrix,
    o = [a.a, a.b, a.c, a.d, a.e, a.f],
    o.join(",") === "1,0,0,1,0,0" ? Ei : o) : (o === Ei && !e.offsetParent && e !== pr && !r.svg && (a = i.display,
    i.display = "block",
    s = e.parentNode,
    (!s || !e.offsetParent) && (u = 1,
    l = e.nextElementSibling,
    pr.appendChild(e)),
    o = Bc(e),
    a ? i.display = a : Bn(e, "display"),
    u && (l ? s.insertBefore(e, l) : s ? s.appendChild(e) : pr.removeChild(e))),
    n && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
}, na = function(e, n, r, i, o, s) {
    var l = e._gsap, a = o || hu(e, !0), u = l.xOrigin || 0, c = l.yOrigin || 0, f = l.xOffset || 0, h = l.yOffset || 0, v = a[0], _ = a[1], p = a[2], k = a[3], m = a[4], d = a[5], g = n.split(" "), x = parseFloat(g[0]) || 0, w = parseFloat(g[1]) || 0, S, T, C, E;
    r ? a !== Ei && (T = v * k - _ * p) && (C = x * (k / T) + w * (-p / T) + (p * d - k * m) / T,
    E = x * (-_ / T) + w * (v / T) - (v * d - _ * m) / T,
    x = C,
    w = E) : (S = ep(e),
    x = S.x + (~g[0].indexOf("%") ? x / 100 * S.width : x),
    w = S.y + (~(g[1] || g[0]).indexOf("%") ? w / 100 * S.height : w)),
    i || i !== !1 && l.smooth ? (m = x - u,
    d = w - c,
    l.xOffset = f + (m * v + d * p) - m,
    l.yOffset = h + (m * _ + d * k) - d) : l.xOffset = l.yOffset = 0,
    l.xOrigin = x,
    l.yOrigin = w,
    l.smooth = !!i,
    l.origin = n,
    l.originIsAbsolute = !!r,
    e.style[Ve] = "0px 0px",
    s && (qt(s, l, "xOrigin", u, x),
    qt(s, l, "yOrigin", c, w),
    qt(s, l, "xOffset", f, l.xOffset),
    qt(s, l, "yOffset", h, l.yOffset)),
    e.setAttribute("data-svg-origin", x + " " + w)
}, Pi = function(e, n) {
    var r = e._gsap || new Vh(e);
    if ("x"in r && !n && !r.uncache)
        return r;
    var i = e.style, o = r.scaleX < 0, s = "px", l = "deg", a = getComputedStyle(e), u = Et(e, Ve) || "0", c, f, h, v, _, p, k, m, d, g, x, w, S, T, C, E, j, D, F, A, se, le, Y, te, N, z, M, V, W, vn, ge, ct;
    return c = f = h = p = k = m = d = g = x = 0,
    v = _ = 1,
    r.svg = !!(e.getCTM && tp(e)),
    a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (i[J] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[J] !== "none" ? a[J] : "")),
    i.scale = i.rotate = i.translate = "none"),
    T = hu(e, r.svg),
    r.svg && (r.uncache ? (N = e.getBBox(),
    u = r.xOrigin - N.x + "px " + (r.yOrigin - N.y) + "px",
    te = "") : te = !n && e.getAttribute("data-svg-origin"),
    na(e, te || u, !!te || r.originIsAbsolute, r.smooth !== !1, T)),
    w = r.xOrigin || 0,
    S = r.yOrigin || 0,
    T !== Ei && (D = T[0],
    F = T[1],
    A = T[2],
    se = T[3],
    c = le = T[4],
    f = Y = T[5],
    T.length === 6 ? (v = Math.sqrt(D * D + F * F),
    _ = Math.sqrt(se * se + A * A),
    p = D || F ? Gn(F, D) * Sn : 0,
    d = A || se ? Gn(A, se) * Sn + p : 0,
    d && (_ *= Math.abs(Math.cos(d * mr))),
    r.svg && (c -= w - (w * D + S * A),
    f -= S - (w * F + S * se))) : (ct = T[6],
    vn = T[7],
    M = T[8],
    V = T[9],
    W = T[10],
    ge = T[11],
    c = T[12],
    f = T[13],
    h = T[14],
    C = Gn(ct, W),
    k = C * Sn,
    C && (E = Math.cos(-C),
    j = Math.sin(-C),
    te = le * E + M * j,
    N = Y * E + V * j,
    z = ct * E + W * j,
    M = le * -j + M * E,
    V = Y * -j + V * E,
    W = ct * -j + W * E,
    ge = vn * -j + ge * E,
    le = te,
    Y = N,
    ct = z),
    C = Gn(-A, W),
    m = C * Sn,
    C && (E = Math.cos(-C),
    j = Math.sin(-C),
    te = D * E - M * j,
    N = F * E - V * j,
    z = A * E - W * j,
    ge = se * j + ge * E,
    D = te,
    F = N,
    A = z),
    C = Gn(F, D),
    p = C * Sn,
    C && (E = Math.cos(C),
    j = Math.sin(C),
    te = D * E + F * j,
    N = le * E + Y * j,
    F = F * E - D * j,
    Y = Y * E - le * j,
    D = te,
    le = N),
    k && Math.abs(k) + Math.abs(p) > 359.9 && (k = p = 0,
    m = 180 - m),
    v = ie(Math.sqrt(D * D + F * F + A * A)),
    _ = ie(Math.sqrt(Y * Y + ct * ct)),
    C = Gn(le, Y),
    d = Math.abs(C) > 2e-4 ? C * Sn : 0,
    x = ge ? 1 / (ge < 0 ? -ge : ge) : 0),
    r.svg && (te = e.getAttribute("transform"),
    r.forceCSS = e.setAttribute("transform", "") || !rp(Et(e, J)),
    te && e.setAttribute("transform", te))),
    Math.abs(d) > 90 && Math.abs(d) < 270 && (o ? (v *= -1,
    d += p <= 0 ? 180 : -180,
    p += p <= 0 ? 180 : -180) : (_ *= -1,
    d += d <= 0 ? 180 : -180)),
    n = n || r.uncache,
    r.x = c - ((r.xPercent = c && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + s,
    r.y = f - ((r.yPercent = f && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + s,
    r.z = h + s,
    r.scaleX = ie(v),
    r.scaleY = ie(_),
    r.rotation = ie(p) + l,
    r.rotationX = ie(k) + l,
    r.rotationY = ie(m) + l,
    r.skewX = d + l,
    r.skewY = g + l,
    r.transformPerspective = x + s,
    (r.zOrigin = parseFloat(u.split(" ")[2]) || !n && r.zOrigin || 0) && (i[Ve] = Xo(u)),
    r.xOffset = r.yOffset = 0,
    r.force3D = Ke.force3D,
    r.renderTransform = r.svg ? hv : bh ? ip : dv,
    r.uncache = 0,
    r
}, Xo = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, Ks = function(e, n, r) {
    var i = Se(n);
    return ie(parseFloat(n) + parseFloat(dn(e, "x", r + "px", i))) + i
}, dv = function(e, n) {
    n.z = "0px",
    n.rotationY = n.rotationX = "0deg",
    n.force3D = 0,
    ip(e, n)
}, _n = "0deg", Ur = "0px", xn = ") ", ip = function(e, n) {
    var r = n || this
      , i = r.xPercent
      , o = r.yPercent
      , s = r.x
      , l = r.y
      , a = r.z
      , u = r.rotation
      , c = r.rotationY
      , f = r.rotationX
      , h = r.skewX
      , v = r.skewY
      , _ = r.scaleX
      , p = r.scaleY
      , k = r.transformPerspective
      , m = r.force3D
      , d = r.target
      , g = r.zOrigin
      , x = ""
      , w = m === "auto" && e && e !== 1 || m === !0;
    if (g && (f !== _n || c !== _n)) {
        var S = parseFloat(c) * mr, T = Math.sin(S), C = Math.cos(S), E;
        S = parseFloat(f) * mr,
        E = Math.cos(S),
        s = Ks(d, s, T * E * -g),
        l = Ks(d, l, -Math.sin(S) * -g),
        a = Ks(d, a, C * E * -g + g)
    }
    k !== Ur && (x += "perspective(" + k + xn),
    (i || o) && (x += "translate(" + i + "%, " + o + "%) "),
    (w || s !== Ur || l !== Ur || a !== Ur) && (x += a !== Ur || w ? "translate3d(" + s + ", " + l + ", " + a + ") " : "translate(" + s + ", " + l + xn),
    u !== _n && (x += "rotate(" + u + xn),
    c !== _n && (x += "rotateY(" + c + xn),
    f !== _n && (x += "rotateX(" + f + xn),
    (h !== _n || v !== _n) && (x += "skew(" + h + ", " + v + xn),
    (_ !== 1 || p !== 1) && (x += "scale(" + _ + ", " + p + xn),
    d.style[J] = x || "translate(0, 0)"
}, hv = function(e, n) {
    var r = n || this, i = r.xPercent, o = r.yPercent, s = r.x, l = r.y, a = r.rotation, u = r.skewX, c = r.skewY, f = r.scaleX, h = r.scaleY, v = r.target, _ = r.xOrigin, p = r.yOrigin, k = r.xOffset, m = r.yOffset, d = r.forceCSS, g = parseFloat(s), x = parseFloat(l), w, S, T, C, E;
    a = parseFloat(a),
    u = parseFloat(u),
    c = parseFloat(c),
    c && (c = parseFloat(c),
    u += c,
    a += c),
    a || u ? (a *= mr,
    u *= mr,
    w = Math.cos(a) * f,
    S = Math.sin(a) * f,
    T = Math.sin(a - u) * -h,
    C = Math.cos(a - u) * h,
    u && (c *= mr,
    E = Math.tan(u - c),
    E = Math.sqrt(1 + E * E),
    T *= E,
    C *= E,
    c && (E = Math.tan(c),
    E = Math.sqrt(1 + E * E),
    w *= E,
    S *= E)),
    w = ie(w),
    S = ie(S),
    T = ie(T),
    C = ie(C)) : (w = f,
    C = h,
    S = T = 0),
    (g && !~(s + "").indexOf("px") || x && !~(l + "").indexOf("px")) && (g = dn(v, "x", s, "px"),
    x = dn(v, "y", l, "px")),
    (_ || p || k || m) && (g = ie(g + _ - (_ * w + p * T) + k),
    x = ie(x + p - (_ * S + p * C) + m)),
    (i || o) && (E = v.getBBox(),
    g = ie(g + i / 100 * E.width),
    x = ie(x + o / 100 * E.height)),
    E = "matrix(" + w + "," + S + "," + T + "," + C + "," + g + "," + x + ")",
    v.setAttribute("transform", E),
    d && (v.style[J] = E)
}, pv = function(e, n, r, i, o) {
    var s = 360, l = me(o), a = parseFloat(o) * (l && ~o.indexOf("rad") ? Sn : 1), u = a - i, c = i + u + "deg", f, h;
    return l && (f = o.split("_")[1],
    f === "short" && (u %= s,
    u !== u % (s / 2) && (u += u < 0 ? s : -s)),
    f === "cw" && u < 0 ? u = (u + s * Lc) % s - ~~(u / s) * s : f === "ccw" && u > 0 && (u = (u - s * Lc) % s - ~~(u / s) * s)),
    e._pt = h = new Ue(e._pt,n,r,i,u,qg),
    h.e = c,
    h.u = "deg",
    e._props.push(r),
    h
}, Wc = function(e, n) {
    for (var r in n)
        e[r] = n[r];
    return e
}, mv = function(e, n, r) {
    var i = Wc({}, r._gsap), o = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, l, a, u, c, f, h, v, _;
    i.svg ? (u = r.getAttribute("transform"),
    r.setAttribute("transform", ""),
    s[J] = n,
    l = Pi(r, 1),
    Bn(r, J),
    r.setAttribute("transform", u)) : (u = getComputedStyle(r)[J],
    s[J] = n,
    l = Pi(r, 1),
    s[J] = u);
    for (a in Vt)
        u = i[a],
        c = l[a],
        u !== c && o.indexOf(a) < 0 && (v = Se(u),
        _ = Se(c),
        f = v !== _ ? dn(r, a, u, _) : parseFloat(u),
        h = parseFloat(c),
        e._pt = new Ue(e._pt,l,a,f,h - f,bl),
        e._pt.u = _ || 0,
        e._props.push(a));
    Wc(l, i)
};
Ae("padding,margin,Width,Radius", function(t, e) {
    var n = "Top"
      , r = "Right"
      , i = "Bottom"
      , o = "Left"
      , s = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function(l) {
        return e < 2 ? t + l : "border" + l + t
    });
    Yo[e > 1 ? "border" + t : t] = function(l, a, u, c, f) {
        var h, v;
        if (arguments.length < 4)
            return h = s.map(function(_) {
                return zt(l, _, u)
            }),
            v = h.join(" "),
            v.split(h[0]).length === 5 ? h[0] : v;
        h = (c + "").split(" "),
        v = {},
        s.forEach(function(_, p) {
            return v[_] = h[p] = h[p] || h[(p - 1) / 2 | 0]
        }),
        l.init(a, v, f)
    }
});
var op = {
    name: "css",
    register: ta,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, n, r, i, o) {
        var s = this._props, l = e.style, a = r.vars.startAt, u, c, f, h, v, _, p, k, m, d, g, x, w, S, T, C;
        cu || ta(),
        this.styles = this.styles || Jh(e),
        C = this.styles.props,
        this.tween = r;
        for (p in n)
            if (p !== "autoRound" && (c = n[p],
            !($e[p] && Bh(p, n, r, i, e, o)))) {
                if (v = typeof c,
                _ = Yo[p],
                v === "function" && (c = c.call(r, i, e, o),
                v = typeof c),
                v === "string" && ~c.indexOf("random(") && (c = Si(c)),
                _)
                    _(this, e, p, c, r) && (T = 1);
                else if (p.substr(0, 2) === "--")
                    u = (getComputedStyle(e).getPropertyValue(p) + "").trim(),
                    c += "",
                    an.lastIndex = 0,
                    an.test(u) || (k = Se(u),
                    m = Se(c)),
                    m ? k !== m && (u = dn(e, p, u, m) + m) : k && (c += k),
                    this.add(l, "setProperty", u, c, i, o, 0, 0, p),
                    s.push(p),
                    C.push(p, 0, l[p]);
                else if (v !== "undefined") {
                    if (a && p in a ? (u = typeof a[p] == "function" ? a[p].call(r, i, e, o) : a[p],
                    me(u) && ~u.indexOf("random(") && (u = Si(u)),
                    Se(u + "") || u === "auto" || (u += Ke.units[p] || Se(zt(e, p)) || ""),
                    (u + "").charAt(1) === "=" && (u = zt(e, p))) : u = zt(e, p),
                    h = parseFloat(u),
                    d = v === "string" && c.charAt(1) === "=" && c.substr(0, 2),
                    d && (c = c.substr(2)),
                    f = parseFloat(c),
                    p in St && (p === "autoAlpha" && (h === 1 && zt(e, "visibility") === "hidden" && f && (h = 0),
                    C.push("visibility", 0, l.visibility),
                    qt(this, l, "visibility", h ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)),
                    p !== "scale" && p !== "transform" && (p = St[p],
                    ~p.indexOf(",") && (p = p.split(",")[0]))),
                    g = p in Vt,
                    g) {
                        if (this.styles.save(p),
                        x || (w = e._gsap,
                        w.renderTransform && !n.parseTransform || Pi(e, n.parseTransform),
                        S = n.smoothOrigin !== !1 && w.smooth,
                        x = this._pt = new Ue(this._pt,l,J,0,1,w.renderTransform,w,0,-1),
                        x.dep = 1),
                        p === "scale")
                            this._pt = new Ue(this._pt,w,"scaleY",w.scaleY,(d ? hr(w.scaleY, d + f) : f) - w.scaleY || 0,bl),
                            this._pt.u = 0,
                            s.push("scaleY", p),
                            p += "X";
                        else if (p === "transformOrigin") {
                            C.push(Ve, 0, l[Ve]),
                            c = cv(c),
                            w.svg ? na(e, c, 0, S, 0, this) : (m = parseFloat(c.split(" ")[2]) || 0,
                            m !== w.zOrigin && qt(this, w, "zOrigin", w.zOrigin, m),
                            qt(this, l, p, Xo(u), Xo(c)));
                            continue
                        } else if (p === "svgOrigin") {
                            na(e, c, 1, S, 0, this);
                            continue
                        } else if (p in np) {
                            pv(this, w, p, h, d ? hr(h, d + c) : c);
                            continue
                        } else if (p === "smoothOrigin") {
                            qt(this, w, "smooth", w.smooth, c);
                            continue
                        } else if (p === "force3D") {
                            w[p] = c;
                            continue
                        } else if (p === "transform") {
                            mv(this, c, e);
                            continue
                        }
                    } else
                        p in l || (p = Pr(p) || p);
                    if (g || (f || f === 0) && (h || h === 0) && !Zg.test(c) && p in l)
                        k = (u + "").substr((h + "").length),
                        f || (f = 0),
                        m = Se(c) || (p in Ke.units ? Ke.units[p] : k),
                        k !== m && (h = dn(e, p, u, m)),
                        this._pt = new Ue(this._pt,g ? w : l,p,h,(d ? hr(h, d + f) : f) - h,!g && (m === "px" || p === "zIndex") && n.autoRound !== !1 ? bg : bl),
                        this._pt.u = m || 0,
                        k !== m && m !== "%" && (this._pt.b = u,
                        this._pt.r = Jg);
                    else if (p in l)
                        uv.call(this, e, p, u, d ? d + c : c);
                    else if (p in e)
                        this.add(e, p, u || e[p], d ? d + c : c, i, o);
                    else if (p !== "parseTransform") {
                        tu(p, c);
                        continue
                    }
                    g || (p in l ? C.push(p, 0, l[p]) : C.push(p, 1, u || e[p])),
                    s.push(p)
                }
            }
        T && Yh(this)
    },
    render: function(e, n) {
        if (n.tween._time || !fu())
            for (var r = n._pt; r; )
                r.r(e, r.d),
                r = r._next;
        else
            n.styles.revert()
    },
    get: zt,
    aliases: St,
    getSetter: function(e, n, r) {
        var i = St[n];
        return i && i.indexOf(",") < 0 && (n = i),
        n in Vt && n !== Ve && (e._gsap.x || zt(e, "x")) ? r && Ic === r ? n === "scale" ? rv : nv : (Ic = r || {}) && (n === "scale" ? iv : ov) : e.style && !Ja(e.style[n]) ? ev : ~n.indexOf("-") ? tv : au(e, n)
    },
    core: {
        _removeProperty: Bn,
        _getMatrix: hu
    }
};
Be.utils.checkPrefix = Pr;
Be.core.getStyleSaver = Jh;
(function(t, e, n, r) {
    var i = Ae(t + "," + e + "," + n, function(o) {
        Vt[o] = 1
    });
    Ae(e, function(o) {
        Ke.units[o] = "deg",
        np[o] = 1
    }),
    St[i[13]] = t + "," + e,
    Ae(r, function(o) {
        var s = o.split(":");
        St[s[1]] = i[s[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Ae("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
    Ke.units[t] = "px"
});
Be.registerPlugin(op);
var pu = Be.registerPlugin(op) || Be;
pu.core.Tween;
/*!
 * @gsap/react 2.1.1
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
let $c = typeof window < "u" ? Ye.useLayoutEffect : Ye.useEffect
  , Hc = t => t && !Array.isArray(t) && typeof t == "object"
  , bi = []
  , gv = {}
  , sp = pu;
const mu = (t, e=bi) => {
    let n = gv;
    Hc(t) ? (n = t,
    t = null,
    e = "dependencies"in n ? n.dependencies : bi) : Hc(e) && (n = e,
    e = "dependencies"in n ? n.dependencies : bi),
    t && typeof t != "function" && console.warn("First parameter must be a function or config object");
    const {scope: r, revertOnUpdate: i} = n
      , o = Ye.useRef(!1)
      , s = Ye.useRef(sp.context( () => {}
    , r))
      , l = Ye.useRef(u => s.current.add(null, u))
      , a = e && e.length && !i;
    return $c( () => {
        if (t && s.current.add(t, r),
        !a || !o.current)
            return () => s.current.revert()
    }
    , e),
    a && $c( () => (o.current = !0,
    () => s.current.revert()), bi),
    {
        context: s.current,
        contextSafe: l.current
    }
}
;
mu.register = t => {
    sp = t
}
;
mu.headless = !0;
const vv = ({children: t}) => {
    Ye.useEffect( () => {
        document.body.style.overflow = "hidden";
        const n = setTimeout( () => {
            document.body.style.overflow = "auto"
        }
        , 5e3);
        return () => {
            document.body.style.overflow = "auto",
            clearTimeout(n)
        }
    }
    , []);
    const e = pu.timeline({
        delay: 1
    });
    return mu( () => {
        e.fromTo("#screen", {
            scale: .4,
            y: document.documentElement.scrollHeight * 0,
            duration: 1
        }, {
            scale: .4,
            y: () => -document.documentElement.scrollHeight * .26,
            duration: 1,
            ease: "power4.out"
        }),
        e.to("#screen", {
            scale: 1,
            y: 0,
            duration: 2.5,
            rotation: -360,
            ease: "power4.inOut"
        })
    }
    , []),
    y.jsx("div", {
        id: "screen",
        className: "screen",
        children: t
    })
}
  , yv = () => {
    const [t,e] = Ye.useState(!0);
    return y.jsx(y.Fragment, {
        children: t && y.jsx("section", {
            className: " md:hidden fixed top-10 z-50 w-full m-2 ",
            children: y.jsxs("div", {
                className: " flex flex-col items-center gap-4 bg-zinc-800 text-white p-4 font-sans w-[50%] mx-auto border rounded-xl  border-zinc-800 shadow-2xl",
                children: [y.jsx("p", {
                    className: " text-xl text-center ",
                    children: "For the best UI experience, please open this website on a desktop. The site contains numerous elements that may lose their visual appeal if fully optimized for responsiveness."
                }), y.jsx("button", {
                    onClick: () => e(n => !n),
                    className: " text-lg w-fit font-medium border px-3 py-1 rounded-md",
                    children: "Okay"
                })]
            })
        })
    })
}
  , _v = () => y.jsxs(y.Fragment, {
    children: [y.jsx(yv, {}), y.jsxs(vv, {
        children: [y.jsx(b0, {}), y.jsx(D0, {}), y.jsx(V0, {}), y.jsx(tg, {})]
    })]
});
function xv() {
    return y.jsx(y.Fragment, {
        children: y.jsx(_v, {})
    })
}
ih(document.getElementById("root")).render(y.jsx(Ye.StrictMode, {
    children: y.jsx(xv, {})
}));
