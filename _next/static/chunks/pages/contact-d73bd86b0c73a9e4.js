(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [335], {
        3328: function(e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/contact", function() {
                return r(7214)
            }])
        },
        1901: function(e, n, r) {
            "use strict";
            var o = (0, r(334).zo)("div", {
                "&::before": {
                    position: "absolute",
                    content: "",
                    inset: "-12px",
                    boxShadow: "0 0 0 1px $$outlineColor",
                    zIndex: "-1",
                    opacity: .5
                }
            });
            n.Z = o
        },
        391: function(e, n, r) {
            "use strict";
            var o = r(6042),
                t = r(9396),
                a = r(9534),
                i = r(5893),
                l = r(334),
                s = r(891),
                c = (0, l.zo)("div", {});
            n.Z = function(e) {
                var n = e.children,
                    r = e.as,
                    l = void 0 === r ? "p" : r,
                    d = e.type,
                    p = void 0 === d ? "b3" : d,
                    u = e.color,
                    h = e.css,
                    m = e.spacing,
                    x = void 0 === m ? "$5" : m,
                    g = (0, a.Z)(e, ["children", "as", "type", "color", "css", "spacing"]);
                return (0, i.jsx)(c, {
                    css: (0, t.Z)((0, o.Z)({}, h), {
                        "> * + *": {
                            marginTop: x
                        }
                    }),
                    children: null === n || void 0 === n ? void 0 : n.split(/\\n/).map((function(e) {
                        return (0, i.jsx)(s.x, (0, t.Z)((0, o.Z)({
                            as: l,
                            type: p,
                            css: {
                                color: u
                            }
                        }, g), {
                            children: e
                        }), e)
                    }))
                })
            }
        },
        5246: function(e, n, r) {
            "use strict";
            var o = r(6042),
                t = r(9396),
                a = r(9534),
                i = r(5893),
                l = r(334),
                s = r(4964),
                c = (0, l.zo)(s.Z);
            n.Z = function(e) {
                var n = e.children,
                    r = e.equalWidth,
                    l = e.center,
                    s = e.gapX,
                    d = void 0 === s ? "$7" : s,
                    p = e.gapY,
                    u = void 0 === p ? "$12" : p,
                    h = e.css,
                    m = (0, a.Z)(e, ["children", "equalWidth", "center", "gapX", "gapY", "css"]);
                return (0, i.jsx)(c, (0, t.Z)((0, o.Z)({
                    equalWidth: r,
                    center: l,
                    css: (0, o.Z)({
                        gap: u,
                        flexDirection: "column",
                        "@bp3": {
                            gap: d,
                            flexDirection: "row"
                        }
                    }, h)
                }, m), {
                    children: n
                }))
            }
        },
        7214: function(e, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return R
                }
            });
            var o = r(5893),
                t = r(9008),
                a = r.n(t),
                i = r(1404),
                l = r(2980),
                s = r(334),
                c = r(163),
                d = r(1564),
                p = r(891),
                u = r(391),
                h = r(5246),
                m = r(4924),
                x = r(6042),
                g = r(9396),
                f = r(1901),
                b = r(7294),
                v = (0, s.zo)("a", {
                    position: "relative",
                    display: "inline-flex",
                    padding: "1.4rem 2.6rem",
                    background: "initial",
                    color: "$secondary500",
                    alignItems: "center",
                    gap: "1em",
                    cursor: "pointer",
                    transition: "all .2s linear",
                    border: "none",
                    $$color: "CurrentColor",
                    "&:hover": {
                        color: "$secondary200",
                        transition: "all .2s ease-out"
                    },
                    variants: {
                        border: {
                            true: {
                                boxShadow: "0px 0px 0px 1px $$color",
                                ".leftLine": {
                                    position: "absolute",
                                    width: "5px",
                                    height: "calc(100% + 2px)",
                                    top: -1,
                                    left: -5,
                                    backgroundColor: "CurrentColor"
                                },
                                "&:hover": {
                                    backgroundColor: "$secondary100",
                                    color: "$secondary800",
                                    transition: "all .2s ease-out"
                                }
                            }
                        },
                        icon: {
                            true: {
                                padding: "1rem 2.6rem",
                                svg: {
                                    fill: "$$color",
                                    width: "2.4rem",
                                    height: "2.4rem"
                                }
                            }
                        },
                        underline: {
                            true: {
                                padding: "0",
                                ".buttonText": {
                                    paddingBottom: "1rem",
                                    borderBottom: "1px solid $$color"
                                }
                            }
                        }
                    }
                }),
                y = (0, s.zo)("button", {
                    background: "transparent",
                    border: "none"
                }),
                j = function(e) {
                    var n = e.text,
                        r = e.color,
                        t = e.border,
                        a = e.icon,
                        i = e.underline,
                        l = e.css,
                        s = e.onClick,
                        c = e.type,
                        d = a;
                    return (0, o.jsx)(y, {
                        type: c,
                        onClick: s,
                        children: (0, o.jsxs)(v, {
                            border: t,
                            icon: !!a,
                            underline: i,
                            css: (0, g.Z)((0, x.Z)({}, l), {
                                color: r
                            }),
                            children: [t && (0, o.jsx)("span", {
                                className: "leftLine"
                            }), (0, o.jsx)(p.x, {
                                className: "buttonText",
                                type: "button1",
                                weight: "bold",
                                css: {
                                    minWidth: "max-content"
                                },
                                children: n
                            }), a && (0, o.jsx)(d, {})]
                        })
                    })
                },
                $ = (0, s.zo)("div", {
                    label: {
                        width: "100%",
                        display: "inline-block",
                        position: "relative"
                    },
                    textarea: {
                        width: "100%",
                        margin: 0,
                        padding: "$3 0",
                        border: "none",
                        borderBottom: "1px solid $colors$secondary600",
                        color: "$primary800",
                        background: "inherit",
                        outline: "none",
                        resize: "vertical",
                        lineHeight: "1.6",
                        minHeight: "200px",
                        maxHeight: "400px",
                        "&::placeholder": {
                            opacity: 0
                        }
                    },
                    "input:focus+span, input:not(:placeholder-shown)+span, textarea:focus+span, textarea:not(:placeholder-shown)+span": {
                        transform: "translate(-12px ,-32px)"
                    },
                    "label > span": {
                        position: "absolute",
                        left: "10px",
                        top: "7px",
                        color: "$secondary600",
                        transition: "transform .1s ease-in",
                        cursor: "text"
                    }
                }),
                w = function(e) {
                    var n = e.label,
                        r = e.name,
                        t = e.id,
                        a = e.placeholder,
                        i = e.value,
                        l = e.onChange,
                        s = e.required,
                        c = e.css;
                    return (0, o.jsx)($, {
                        css: c,
                        children: (0, o.jsxs)("label", {
                            htmlFor: t,
                            children: [(0, o.jsx)("textarea", {
                                onChange: l,
                                id: t,
                                name: r,
                                value: i,
                                placeholder: a,
                                required: s,
                                spellCheck: !1
                            }), (0, o.jsx)("span", {
                                children: n
                            })]
                        })
                    })
                },
                Z = (0, s.zo)("div", {
                    label: {
                        width: "100%",
                        display: "inline-block",
                        position: "relative",
                        willChange: "transform"
                    },
                    input: {
                        width: "100%",
                        padding: "$3 0",
                        border: "none",
                        borderBottom: "1px solid $colors$secondary600",
                        color: "$primary800",
                        background: "inherit",
                        outline: "none",
                        lineHeight: "1.6",
                        "&::placeholder": {
                            opacity: 0
                        }
                    },
                    "input:focus+span, input:not(:placeholder-shown)+span, textarea:focus+span, textarea:not(:placeholder-shown)+span": {
                        transform: "translate(-12px ,-22px)"
                    },
                    "label > span": {
                        position: "absolute",
                        left: "10px",
                        top: "7px",
                        color: "$secondary600",
                        transition: "transform .1s ease-in",
                        cursor: "text"
                    }
                }),
                k = function(e) {
                    var n = e.type,
                        r = void 0 === n ? "text" : n,
                        t = e.label,
                        a = e.name,
                        i = e.id,
                        l = e.placeholder,
                        s = e.value,
                        c = e.onChange,
                        d = e.required,
                        p = e.css;
                    return (0, o.jsx)(Z, {
                        css: p,
                        children: (0, o.jsxs)("label", {
                            htmlFor: i,
                            children: [(0, o.jsx)("input", {
                                onChange: c,
                                type: r,
                                id: i,
                                name: a,
                                value: s,
                                placeholder: l,
                                required: d,
                                spellCheck: !1
                            }), (0, o.jsx)("span", {
                                children: t
                            })]
                        })
                    })
                },
                C = r(4031),
                _ = r(9669),
                z = r.n(_),
                E = r(6455),
                T = r.n(E),
                q = (0, s.zo)("form", f.Z, {
                    position: "relative",
                    width: "100%",
                    background: "$secondary100",
                    padding: "$11 $6",
                    $$outlineColor: "$colors$secondary400",
                    "@bp1": {
                        padding: "$11 $10"
                    },
                    "> * + *": {
                        marginTop: "$8"
                    }
                }),
                L = function() {
                    var e = (0, b.useState)({
                            name: "",
                            email: "",
                            subject: "",
                            message: ""
                        }),
                        n = e[0],
                        r = e[1],
                        t = function(e) {
                            r((0, g.Z)((0, x.Z)({}, n), (0, m.Z)({}, e.target.name, e.target.value)))
                        },
                        a = (0, b.useRef)();
                    return (0, o.jsxs)(q, {
                        ref: a,
                        onSubmit: function(e) {
                            console.log("iliig bantu "), e.preventDefault(), console.log({
                                formValues: n
                            }), z().post("https://primfort.ml/form", (0, g.Z)((0, x.Z)({}, n), {
                                client: "primefort"
                            })).then((function() {
                                T().fire({
                                    icon: "success",
                                    title: "Submitted!",
                                    text: "Thanks for contacting Primefort! Someone from our team will reach out to you :)"
                                })
                            })).catch((function() {
                                T().fire("Something went wrong while submitting your form. Please try again later.")
                            }))
                        },
                        children: [(0, o.jsx)(k, {
                            id: "name",
                            label: "Full Name",
                            name: "name",
                            required: !0,
                            placeholder: "Enter your full name",
                            onChange: t,
                            value: n.name
                        }), (0, o.jsx)(k, {
                            id: "email",
                            type: "email",
                            label: "Email",
                            name: "email",
                            required: !0,
                            placeholder: "Enter your email address",
                            onChange: t,
                            value: n.email
                        }), (0, o.jsx)(k, {
                            id: "subject",
                            label: "Subject",
                            name: "subject",
                            required: !0,
                            placeholder: "Enter the subject of your message",
                            onChange: t,
                            value: n.subject
                        }), (0, o.jsx)(w, {
                            id: "message",
                            label: "Message",
                            name: "message",
                            required: !0,
                            placeholder: "Type you message here...",
                            onChange: t,
                            value: n.message
                        }), (0, o.jsx)(j, {
                            type: "submit",
                            text: "Send Message",
                            border: !0,
                            icon: C.Z,
                            css: {
                                transform: "translateX(-50%)",
                                left: "50%",
                                position: "relative",
                                marginLeft: "auto"
                            }
                        })]
                    })
                },
                S = r(692),
                B = r(4964),
                P = r(9216);

            function W() {
                return W = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, W.apply(this, arguments)
            }
            var N = function(e) {
                return b.createElement("svg", W({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 149.87 108.65"
                }, e), b.createElement("g", {
                    "data-name": "Layer 2"
                }, b.createElement("path", {
                    d: "M139.19 1.12c-.19 0-.19-.56-.37-.56-.57 0-1.13-.56-1.88-.56H12.74c-.56 0-1.13.56-1.88.56-.18 0-.18.19-.37.19A13.28 13.28 0 0 0 0 13.68V95a12.71 12.71 0 0 0 10.68 12.55c.19 0 .19.56.37.56.57 0 1.13.56 1.69.56h124.39c.56 0 1.12-.56 1.69-.56.18 0 .18-.18.37-.18a12.91 12.91 0 0 0 10.68-12.74V13.68a12.72 12.72 0 0 0-10.68-12.56ZM101 54.33l41.41-36.91v73.81Zm36.13-46.84a6.31 6.31 0 0 1 4.31 2.06L74.93 68.94 8.43 9.55v-.18a6.25 6.25 0 0 1 4.31-2.06h124.39ZM7.49 17.42l41.4 36.91-41.4 36.9Zm5.25 83.74a6.29 6.29 0 0 1-4.31-2.06L53.39 59l19.3 17.24a3.17 3.17 0 0 0 4.49 0L96.48 59l45 40.28a6.31 6.31 0 0 1-4.31 2.06Z",
                    style: {
                        fill: "#4858e8"
                    },
                    "data-name": "Layer 1"
                })))
            };

            function O() {
                return O = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, O.apply(this, arguments)
            }
            var M = function(e) {
                    return b.createElement("svg", O({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 124.7 169.48"
                    }, e), b.createElement("g", {
                        "data-name": "Layer 2"
                    }, b.createElement("path", {
                        d: "M62.35 157c3.53-5 7.75-10.55 12.26-16.48 18.08-23.74 41.08-53.95 41.08-78.14A53.34 53.34 0 1 0 9 62.35c0 24.19 23 54.4 41.07 78.14 4.52 5.93 8.74 11.51 12.28 16.51Zm0-122.51a27.89 27.89 0 1 1-19.72 8.17 27.8 27.8 0 0 1 19.72-8.2ZM75.7 49a18.89 18.89 0 1 0 5.53 13.36A18.85 18.85 0 0 0 75.7 49Zm6.06 96.95c-6.12 8-11.68 15.34-15.58 21.4a4.44 4.44 0 0 1-1.4 1.43 4.49 4.49 0 0 1-6.21-1.35c-3.9-6.09-9.49-13.43-15.63-21.43C24.05 121.13 0 89.54 0 62.35a62.35 62.35 0 1 1 124.7 0c0 27.19-24 58.78-42.94 83.6Z",
                        style: {
                            fill: "#4858e8"
                        },
                        "data-name": "Layer 1"
                    })))
                },
                I = (0, s.zo)(d.Z, {
                    paddingBottom: "$10"
                }),
                F = (0, s.zo)(h.Z, {
                    display: "flex",
                    backgroundColor: "$primary900_85",
                    marginBottom: "$10",
                    "@bp1": {
                        padding: "$8 $6"
                    },
                    "@supports (backdrop-filter: blur(1px))": {
                        backdropFilter: "blur($blurs$5)",
                        backgroundColor: "$primary900_35"
                    }
                }),
                H = (0, s.zo)("div", {
                    display: "flex",
                    flexDirection: "column"
                }),
                X = (0, s.zo)("div"),
                D = (0, s.zo)("div", {
                    maxWidth: "300px",
                    marginTop: "$9"
                }),
                A = P.Z.map((function(e) {
                    var n = e.name,
                        r = e.url,
                        t = e.icon,
                        a = (0, s.zo)(t, {
                            width: "32px",
                            height: "32px",
                            fill: "$secondary200"
                        });
                    return (0, o.jsx)("li", {
                        children: (0, o.jsx)("a", {
                            href: r,
                            children: (0, o.jsx)(a, {
                                alt: n
                            })
                        })
                    }, r)
                })),
                V = (0, s.zo)("div", {
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "$4"
                }),
                Y = [{
                    icon: N,
                    info: S.Z.emails.info,
                    link: "mailto:".concat(S.Z.emails.info)
                }, {
                    icon: M,
                    info: S.Z.location.chennai.address,
                    link: S.Z.location.chennai.locationLink
                }],
                G = function(e) {
                    var n = e.title,
                        r = e.description,
                        t = e.backgroundImagePath;
                    return (0, o.jsx)(I, {
                        css: {
                            backgroundImage: "linear-gradient(90deg, $primary900_85, $primary900_85), url(".concat(t, ")"),
                            backgroundSize: "cover"
                        },
                        "aria-labelledby": "contact_form_title",
                        children: (0, o.jsx)(c.Z, {
                            type: {
                                "@bp6": "fullWidth"
                            },
                            children: (0, o.jsxs)(F, {
                                equalWidth: !0,
                                children: [(0, o.jsxs)(H, {
                                    css: {
                                        padding: "$5 $5"
                                    },
                                    children: [(0, o.jsx)(p.x, {
                                        id: "contact_form_title",
                                        as: "h1",
                                        type: "h6",
                                        children: n
                                    }), (0, o.jsx)(u.Z, {
                                        type: "b4",
                                        css: {
                                            marginTop: "$3",
                                            color: "$secondary200"
                                        },
                                        children: r
                                    }), (0, o.jsx)(D, {
                                        children: Y.map((function(e) {
                                            var n = (0, s.zo)(e.icon, {
                                                width: "20px",
                                                height: "20px",
                                                flexShrink: "0",
                                                fill: "white",
                                                transform: "translateY(5px)"
                                            });
                                            return (0, o.jsxs)(V, {
                                                css: {
                                                    marginTop: "$4"
                                                },
                                                children: [(0, o.jsx)(n, {}), (0, o.jsx)(p.x, {
                                                    as: "a",
                                                    href: e.link,
                                                    type: "b4",
                                                    css: {
                                                        color: "$secondary100"
                                                    },
                                                    children: e.info
                                                })]
                                            }, e.info)
                                        }))
                                    }), (0, o.jsx)(B.Z, {
                                        as: "ul",
                                        spaceBetweenCenter: !0,
                                        css: {
                                            maxWidth: "180px",
                                            marginTop: "$12",
                                            "@bp3": {
                                                marginTop: "auto"
                                            }
                                        },
                                        children: A
                                    })]
                                }), (0, o.jsx)(X, {
                                    children: (0, o.jsx)(L, {})
                                })]
                            })
                        })
                    })
                };

            function R() {
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)(a(), {
                        children: [(0, o.jsx)("title", {
                            children: "Primefort"
                        }), (0, o.jsx)("meta", {
                            name: "description",
                            content: "Generated by create next app"
                        }), (0, o.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })]
                    }), (0, o.jsx)(i.Z, {}), (0, o.jsx)(G, {
                        title: "Get in Touch",
                        description: "Reach out to us. We can make something awesome together",
                        backgroundImagePath: "/images/contact_form_bg.jpg"
                    }), (0, o.jsx)(l.Z, {})]
                })
            }
        }
    },
    function(e) {
        e.O(0, [76, 604, 774, 888, 179], (function() {
            return n = 3328, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);