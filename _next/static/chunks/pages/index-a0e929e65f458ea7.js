(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        4969: function(e, t, a) {
            "use strict";
            var i, s, n = a(7294);

            function r() {
                return r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                    }
                    return e
                }, r.apply(this, arguments)
            }
            t.Z = function(e) {
                return n.createElement("svg", r({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 875.8 875.8"
                }, e), i || (i = n.createElement("defs", null, n.createElement("style", null, ".Compliance_svg__cls-1{fill:#4858e8}"))), s || (s = n.createElement("g", {
                    id: "Compliance_svg__Layer_2",
                    "data-name": "Layer 2"
                }, n.createElement("g", {
                    id: "Compliance_svg__Layer_1-2",
                    "data-name": "Layer 1"
                }, n.createElement("path", {
                    className: "Compliance_svg__cls-1",
                    d: "M437.9 875.8A438 438 0 0 1 267.45 34.42a438 438 0 0 1 340.9 807A435.1 435.1 0 0 1 437.9 875.8Zm0-849.8C210.78 26 26 210.78 26 437.9s184.78 411.9 411.9 411.9S849.8 665 849.8 437.9 665 26 437.9 26Z"
                }), n.createElement("path", {
                    className: "Compliance_svg__cls-1",
                    d: "M438.09 313.58a124.1 124.1 0 1 0 124.1 124.1 124.12 124.12 0 0 0-124.1-124.1Zm0 218.41a94.32 94.32 0 1 1 94.32-94.31A94.27 94.27 0 0 1 438.09 532Z"
                }), n.createElement("path", {
                    className: "Compliance_svg__cls-1",
                    d: "m468.85 401.42-44.68 44.68-16.84-16.85A15.11 15.11 0 1 0 386 450.62l27.3 27.3a15 15 0 0 0 10.46 4.43 14.58 14.58 0 0 0 10.46-4.43l55.14-55.14c5.94-5.93 5.94-15.42 0-20.83a13.6 13.6 0 0 0-20.48-.53ZM278.71 299.22h-24.28a14.89 14.89 0 1 0 0 29.78h60.1a14.65 14.65 0 0 0 14.89-14.89V254a14.9 14.9 0 0 0-29.79 0v24.3l-72-72c-5.94-5.94-15.43-5.94-20.83 0-5.94 5.94-5.94 15.43 0 20.83ZM669.45 648.11l-72-72h24.29a14.89 14.89 0 0 0 0-29.78h-60.1a14.65 14.65 0 0 0-14.89 14.89v60.1a14.89 14.89 0 0 0 29.78 0v-24.27l72 72a15 15 0 0 0 10.47 4.41 14.57 14.57 0 0 0 10.45-4.46c5.93-6 5.93-15.42 0-20.92ZM561.66 329.44h60.1a14.89 14.89 0 0 0 0-29.78h-24.29l72-72.42c5.93-5.94 5.93-15.42 0-20.83-5.94-5.94-15.43-5.94-20.84 0l-72 72V254a14.9 14.9 0 0 0-29.79 0v60.1a14.63 14.63 0 0 0 14.81 15.33ZM314.53 545.91h-60.1a14.89 14.89 0 1 0 0 29.78h24.28l-72 72.42a15.12 15.12 0 0 0 10.46 25.8 15.36 15.36 0 0 0 10.46-4.44l72-72v23.84a14.9 14.9 0 0 0 29.79 0v-60.1a14.75 14.75 0 0 0-14.89-15.33Z"
                })))))
            }
        },
        8312: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return a(1847)
            }])
        },
        2885: function(e, t, a) {
            "use strict";
            var i = a(5893),
                s = a(391),
                n = a(891),
                r = (0, a(334).zo)("div", {
                    maxWidth: "592px",
                    variants: {
                        center: {
                            true: {
                                margin: "0 auto",
                                textAlign: "center"
                            }
                        }
                    }
                });
            t.Z = function(e) {
                var t = e.titleId,
                    a = e.title,
                    o = e.text,
                    l = e.color,
                    c = void 0 === l ? "$secondary200" : l,
                    d = e.hlevel,
                    h = void 0 === d ? "h2" : d,
                    p = e.center,
                    m = e.css;
                return (0, i.jsxs)(r, {
                    center: p,
                    css: m,
                    children: [a && (0, i.jsx)(n.x, {
                        id: t,
                        type: "h4",
                        weight: "bold",
                        as: h,
                        css: {
                            marginBottom: "$5"
                        },
                        children: a
                    }), o && (0, i.jsx)(s.Z, {
                        color: c,
                        type: "b3",
                        children: o
                    })]
                })
            }
        },
        4259: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return v
                }
            });
            var i = a(5893),
                s = a(334),
                n = a(163),
                r = a(1564),
                o = a(1901),
                l = a(4964),
                c = (0, s.zo)(o.Z, "span", {
                    $$outlineColor: "$colors$secondary500",
                    position: "relative",
                    color: "$secondary100",
                    backgroundImage: "$secondaryGradient1",
                    padding: "$10 $7",
                    textAlign: "center",
                    ".text": {
                        margin: "0 auto 42px"
                    },
                    ".image": {
                        display: "none",
                        right: "20px"
                    },
                    variants: {
                        image: {
                            true: {
                                padding: "80px 90px",
                                textAlign: "left",
                                ".text": {
                                    margin: "0 0 42px"
                                },
                                ".image": {
                                    display: "block"
                                }
                            }
                        },
                        border: {
                            false: {
                                "&::before": {
                                    display: "none"
                                }
                            }
                        }
                    }
                }),
                d = (0, s.zo)("div", {
                    "@bp8": {
                        display: "none"
                    }
                }),
                h = function(e) {
                    var t = e.text,
                        a = e.imagePath,
                        s = e.showButton,
                        n = e.CTA;
                    return (0, i.jsx)(c, {
                        image: {
                            "@initial": !1,
                            "@bp3": !0
                        },
                        border: {
                            "@initial": !0,
                            "@bp7": !1
                        },
                        children: (0, i.jsxs)(l.Z, {
                            spaceBetweenCenter: !0,
                            gap: "12px",
                            css: {
                                width: "100%"
                            },
                            children: [(0, i.jsxs)("div", {
                                style: {
                                    flexBasis: "100%"
                                },
                                children: [t, s && n]
                            }), a && (0, i.jsx)(d, {
                                css: {
                                    flexBasis: "100%",
                                    "@bp8": {
                                        display: "none"
                                    }
                                },
                                children: (0, i.jsx)("object", {
                                    type: "image/svg+xml",
                                    className: "image",
                                    data: a,
                                    style: {
                                        width: "500px",
                                        height: "300px",
                                        objectFit: "contain"
                                    },
                                    "aria-label": ""
                                })
                            })]
                        })
                    })
                },
                p = a(570),
                m = a(7543),
                g = a(4031),
                u = a(891),
                x = (0, s.zo)(r.Z, {}),
                v = function(e) {
                    var t = e.text,
                        a = e.imagePath,
                        s = e.css,
                        r = e.showButton;
                    return (0, i.jsx)(x, {
                        "aria-labelledby": "CTA_title",
                        css: s,
                        children: (0, i.jsx)(n.Z, {
                            type: {
                                "@initial": "fullWidth",
                                "@bp2": "fixed"
                            },
                            children: (0, i.jsx)(h, {
                                text: (0, i.jsx)(u.x, {
                                    id: "CTA_title",
                                    className: "text",
                                    as: "h2",
                                    type: "b1",
                                    css: {
                                        marginBottom: "42px",
                                        maxWidth: "500px",
                                        width: "100%",
                                        a: {
                                            textDecoration: "underline"
                                        }
                                    },
                                    children: t
                                }),
                                imagePath: a,
                                showButton: r,
                                CTA: (0, i.jsx)(p.z, {
                                    href: m.Z.contact.path,
                                    text: "Let's Connect",
                                    border: !0,
                                    icon: g.Z,
                                    color: "$secondary100"
                                })
                            })
                        })
                    })
                }
        },
        3338: function(e, t, a) {
            "use strict";
            var i = a(6042),
                s = a(5893),
                n = (0, a(334).zo)("div", {
                    display: "grid"
                });
            t.Z = function(e) {
                var t = e.gap,
                    a = e.minWidth,
                    r = void 0 === a ? "312px" : a,
                    o = e.children,
                    l = e.css;
                return (0, s.jsx)(n, {
                    css: (0, i.Z)({
                        gap: t,
                        gridTemplateColumns: "repeat(auto-fill, minmax(".concat(r, ", 1fr))")
                    }, l),
                    children: o
                })
            }
        },
        3931: function(e, t, a) {
            "use strict";
            var i = (0, a(334).zo)("div", {
                padding: "192px 0",
                textAlign: "center",
                "@bp2": {
                    padding: "274px 0"
                }
            });
            t.Z = i
        },
        1901: function(e, t, a) {
            "use strict";
            var i = (0, a(334).zo)("div", {
                "&::before": {
                    position: "absolute",
                    content: "",
                    inset: "-12px",
                    boxShadow: "0 0 0 1px $$outlineColor",
                    zIndex: "-1",
                    opacity: .5
                }
            });
            t.Z = i
        },
        391: function(e, t, a) {
            "use strict";
            var i = a(6042),
                s = a(9396),
                n = a(9534),
                r = a(5893),
                o = a(334),
                l = a(891),
                c = (0, o.zo)("div", {});
            t.Z = function(e) {
                var t = e.children,
                    a = e.as,
                    o = void 0 === a ? "p" : a,
                    d = e.type,
                    h = void 0 === d ? "b3" : d,
                    p = e.color,
                    m = e.css,
                    g = e.spacing,
                    u = void 0 === g ? "$5" : g,
                    x = (0, n.Z)(e, ["children", "as", "type", "color", "css", "spacing"]);
                return (0, r.jsx)(c, {
                    css: (0, s.Z)((0, i.Z)({}, m), {
                        "> * + *": {
                            marginTop: u
                        }
                    }),
                    children: null === t || void 0 === t ? void 0 : t.split(/\\n/).map((function(e) {
                        return (0, r.jsx)(l.x, (0, s.Z)((0, i.Z)({
                            as: o,
                            type: h,
                            css: {
                                color: p
                            }
                        }, x), {
                            children: e
                        }), e)
                    }))
                })
            }
        },
        5246: function(e, t, a) {
            "use strict";
            var i = a(6042),
                s = a(9396),
                n = a(9534),
                r = a(5893),
                o = a(334),
                l = a(4964),
                c = (0, o.zo)(l.Z);
            t.Z = function(e) {
                var t = e.children,
                    a = e.equalWidth,
                    o = e.center,
                    l = e.gapX,
                    d = void 0 === l ? "$7" : l,
                    h = e.gapY,
                    p = void 0 === h ? "$12" : h,
                    m = e.css,
                    g = (0, n.Z)(e, ["children", "equalWidth", "center", "gapX", "gapY", "css"]);
                return (0, r.jsx)(c, (0, s.Z)((0, i.Z)({
                    equalWidth: a,
                    center: o,
                    css: (0, i.Z)({
                        gap: p,
                        flexDirection: "column",
                        "@bp3": {
                            gap: d,
                            flexDirection: "row"
                        }
                    }, m)
                }, g), {
                    children: t
                }))
            }
        },
        1847: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return je
                }
            });
            var i, s, n = a(5893),
                r = a(9008),
                o = a.n(r),
                l = a(1404),
                c = a(5459),
                d = a.n(c),
                h = a(570),
                p = a(334),
                m = a(163),
                g = a(891),
                u = a(7294),
                x = a(3931),
                v = a(5675),
                y = a.n(v),
                f = (0, p.zo)("section", {
                    position: "relative"
                }),
                _ = (0, p.zo)("div", {
                    position: "absolute",
                    inset: 0,
                    transform: "translateY(10rem)",
                    zIndex: -1
                }),
                b = function(e) {
                    var t = e.title,
                        a = e.description,
                        i = e.button;
                    return (0, n.jsxs)(f, {
                        "aria-labelledby": "hero_title",
                        children: [(0, n.jsx)(_, {
                            children: (0, n.jsx)(y(), {
                                src: "/images/home_hero_bg.png",
                                layout: "fill",
                                objectFit: "cover",
                                priority: !0,
                                alt: ""
                            })
                        }), (0, n.jsx)(m.Z, {
                            children: (0, n.jsxs)(x.Z, {
                                css: {
                                    maxWidth: "620px",
                                    margin: "0 auto"
                                },
                                children: [(0, n.jsx)(g.x, {
                                    id: "hero_title",
                                    as: "h1",
                                    type: "h1",
                                    weight: "bold",
                                    css: {
                                        margin: "0 auto $5"
                                    },
                                    children: t()
                                }), (0, n.jsx)(g.x, {
                                    as: "p",
                                    type: "b2",
                                    css: {
                                        maxWidth: "340px",
                                        margin: "0 auto $9",
                                        color: "$secondary200"
                                    },
                                    children: a
                                }), i]
                            })
                        })]
                    })
                },
                j = a(7543),
                Z = a(4031),
                w = function() {
                    return (0, n.jsx)(b, {
                        title: function() {
                            return (0, n.jsxs)(n.Fragment, {
                                children: ["We Secure", " ", (0, n.jsx)(g.x, {
                                    type: "h1",
                                    weight: "bold",
                                    children: (0, n.jsx)(d(), {
                                        options: {
                                            strings: ["Enterprises", "Startups", "Organizations"],
                                            autoStart: !0,
                                            loop: !0,
                                            delay: 50,
                                            deleteSpeed: 30,
                                            cursor: ""
                                        }
                                    })
                                })]
                            })
                        },
                        description: "Securing your Digital Innovations and Beyond",
                        button: (0, n.jsx)(h.z, {
                            href: j.Z.contact.path,
                            border: !0,
                            color: "$secondary100",
                            text: "Get in touch",
                            icon: Z.Z
                        })
                    })
                },
                C = a(4964),
                $ = a(739),
                E = (0, p.zo)("section", {
                    backgroundColor: "$primary800",
                    padding: "$7 0"
                }),
                A = (0, p.zo)("div", {
                    display: "flex",
                    overflow: "hidden"
                }),
                M = (0, p.zo)("div", {
                    width: "160px",
                    "@bp2": {
                        width: "250px"
                    }
                }),
                L = function(e) {
                    var t = e.title;
                    return (0, n.jsx)(E, {
                        "aria-labelledby": "logo_strip_title",
                        children: (0, n.jsxs)(m.Z, {
                            css: {
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                gap: "$6",
                                "@bp2": {
                                    flexDirection: "row",
                                    gap: "$17"
                                }
                            },
                            children: [(0, n.jsx)(g.x, {
                                id: "logo_strip_title",
                                as: "h2",
                                type: "b4",
                                css: {
                                    flexShrink: 0,
                                    color: "$primary200",
                                    alignSelf: "center"
                                },
                                children: t
                            }), (0, n.jsx)(A, {
                                children: (0, n.jsxs)(C.Z, {
                                    ai: "center",
                                    css: {
                                        flexWrap: "nowrap",
                                        animation: "".concat($.K, " 20s linear infinite"),
                                        "& > *": {
                                            flexShrink: 0
                                        }
                                    },
                                    children: [(0, n.jsx)(M, {
                                        children: (0, n.jsx)(y(), {
                                            width: "90px",
                                            height: "36px",
                                            layout: "fixed",
                                            priority: !0,
                                            src: "/images/logos/ap.svg",
                                            alt: "Company Logo"
                                        })
                                    }), (0, n.jsx)(M, {
                                        children: (0, n.jsx)(y(), {
                                            width: "64px",
                                            height: "40px",
                                            layout: "fixed",
                                            priority: !0,
                                            src: "/images/logos/byjus.svg",
                                            alt: "Company Logo"
                                        })
                                    }), (0, n.jsx)(M, {
                                        children: (0, n.jsx)(y(), {
                                            width: "70px",
                                            height: "40px",
                                            layout: "fixed",
                                            priority: !0,
                                            src: "/images/logos/drumee.svg",
                                            alt: "Company Logo"
                                        })
                                    }), (0, n.jsx)(M, {
                                        children: (0, n.jsx)(y(), {
                                            width: "64px",
                                            height: "30px",
                                            layout: "fixed",
                                            priority: !0,
                                            src: "/images/logos/indiafilings.svg"
                                        })
                                    }), (0, n.jsx)(M, {
                                        children: (0, n.jsx)(y(), {
                                            width: "64px",
                                            height: "27px",
                                            layout: "fixed",
                                            priority: !0,
                                            src: "/images/logos/izapy.svg",
                                            alt: "Company Logo"
                                        })
                                    }), (0, n.jsx)(M, {
                                        children: (0, n.jsx)(y(), {
                                            width: "64px",
                                            height: "27px",
                                            layout: "fixed",
                                            priority: !0,
                                            src: "/images/logos/cxihub.svg",
                                            alt: "Company Logo"
                                        })
                                    }), (0, n.jsx)(M, {
                                        children: (0, n.jsx)(y(), {
                                            width: "100px",
                                            height: "60px",
                                            layout: "fixed",
                                            priority: !0,
                                            src: "/images/logos/knit.svg",
                                            alt: "Company Logo"
                                        })
                                    }), (0, n.jsx)(M, {
                                        children: (0, n.jsx)(y(), {
                                            width: "90px",
                                            height: "36px",
                                            layout: "fixed",
                                            priority: !0,
                                            src: "/images/logos/ap.svg",
                                            alt: "Company Logo"
                                        })
                                    }), (0, n.jsx)(M, {
                                        children: (0, n.jsx)(y(), {
                                            width: "64px",
                                            height: "40px",
                                            layout: "fixed",
                                            priority: !0,
                                            src: "/images/logos/byjus.svg",
                                            alt: "Company Logo"
                                        })
                                    }), (0, n.jsx)(M, {
                                        children: (0, n.jsx)(y(), {
                                            width: "70px",
                                            height: "40px",
                                            layout: "fixed",
                                            priority: !0,
                                            src: "/images/logos/drumee.svg",
                                            alt: "Company Logo"
                                        })
                                    }), (0, n.jsx)(M, {
                                        children: (0, n.jsx)(y(), {
                                            width: "64px",
                                            height: "30px",
                                            layout: "fixed",
                                            priority: !0,
                                            src: "/images/logos/indiafilings.svg"
                                        })
                                    }), (0, n.jsx)(M, {
                                        children: (0, n.jsx)(y(), {
                                            width: "64px",
                                            height: "27px",
                                            layout: "fixed",
                                            priority: !0,
                                            src: "/images/logos/izapy.svg",
                                            alt: "Company Logo"
                                        })
                                    }), (0, n.jsx)(M, {
                                        children: (0, n.jsx)(y(), {
                                            width: "64px",
                                            height: "27px",
                                            layout: "fixed",
                                            priority: !0,
                                            src: "/images/logos/cxihub.svg",
                                            alt: "Company Logo"
                                        })
                                    }), (0, n.jsx)(M, {
                                        children: (0, n.jsx)(y(), {
                                            width: "100px",
                                            height: "60px",
                                            layout: "fixed",
                                            priority: !0,
                                            src: "/images/logos/knit.svg",
                                            alt: "Company Logo"
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                },
                z = a(6042),
                O = a(1423),
                N = a(1664),
                H = a.n(N),
                S = (0, p.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    maxWidth: "390px",
                    width: "100%",
                    minHeight: "116px",
                    color: "$white",
                    zIndex: 1,
                    svg: {
                        width: "26px",
                        height: "26px",
                        fill: "$secondary200"
                    },
                    "&::before": {
                        position: "absolute",
                        content: "",
                        inset: 0,
                        backgroundImage: "$primaryGradient6",
                        zIndex: -1
                    },
                    "&::after": {
                        position: "absolute",
                        content: "",
                        inset: 0,
                        border: ".5px solid $secondary500",
                        zIndex: -1,
                        opacity: 0,
                        transition: "all .1s ease-out"
                    },
                    "&:hover::after": {
                        opacity: 1,
                        transform: "scaleX(1.05) scaleY(1.2)"
                    }
                }),
                W = (0, p.zo)("a", {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    padding: "27px 30px",
                    gap: "12px",
                    zIndex: 1
                }),
                T = (0, p.zo)(y(), {
                    zIndex: -2
                }),
                B = function(e) {
                    var t = e.title,
                        a = e.path,
                        i = e.imagePath,
                        s = e.icon,
                        r = e.css,
                        o = s || O.Z;
                    return (0, n.jsxs)(S, {
                        css: (0, z.Z)({}, r),
                        children: [(0, n.jsx)(T, {
                            src: i,
                            layout: "fill",
                            objectFit: "cover",
                            alt: ""
                        }), (0, n.jsx)(H(), {
                            href: a,
                            passHref: !0,
                            children: (0, n.jsxs)(W, {
                                children: [(0, n.jsx)(g.x, {
                                    as: "p",
                                    type: "b3",
                                    css: {
                                        maxWidth: "204px"
                                    },
                                    children: t
                                }), (0, n.jsx)(o, {})]
                            })
                        })]
                    })
                },
                I = a(1564),
                P = (0, p.zo)(I.Z),
                k = (0, p.zo)("div", {
                    display: "flex",
                    flexWrap: "wrap",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "$4",
                    justifyContent: "center",
                    "> *": {
                        flex: "0 1 368px"
                    }
                }),
                V = function(e) {
                    var t = e.title,
                        a = e.description,
                        i = e.services,
                        s = (0, p.zo)("header", {
                            textAlign: "center",
                            margin: "0 auto",
                            maxWidth: "896px",
                            marginBottom: "$10"
                        });
                    return (0, n.jsx)(P, {
                        "aria-labelledby": "about_title",
                        children: (0, n.jsxs)(m.Z, {
                            children: [(0, n.jsxs)(s, {
                                children: [(0, n.jsx)(g.x, {
                                    id: "about_title",
                                    as: "h2",
                                    type: "h4",
                                    css: {
                                        marginBottom: "$4"
                                    },
                                    children: t
                                }), (0, n.jsx)(g.x, {
                                    as: "p",
                                    type: "b1",
                                    css: {
                                        color: "$secondary200"
                                    },
                                    children: a
                                })]
                            }), (0, n.jsx)(k, {
                                children: Object.values(i).map((function(e) {
                                    var t = e.title,
                                        a = e.path,
                                        i = e.smallImagePath;
                                    return (0, n.jsx)(B, {
                                        title: t,
                                        path: a,
                                        imagePath: i
                                    }, a)
                                }))
                            })]
                        })
                    })
                },
                D = a(7431);

            function F() {
                return F = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                    }
                    return e
                }, F.apply(this, arguments)
            }
            var X, q;

            function G() {
                return G = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                    }
                    return e
                }, G.apply(this, arguments)
            }
            var Y, R;

            function K() {
                return K = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                    }
                    return e
                }, K.apply(this, arguments)
            }
            var J, Q;

            function U() {
                return U = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                    }
                    return e
                }, U.apply(this, arguments)
            }
            var ee, te;

            function ae() {
                return ae = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                    }
                    return e
                }, ae.apply(this, arguments)
            }
            var ie = function(e) {
                    return u.createElement("svg", ae({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 875.8 875.8"
                    }, e), ee || (ee = u.createElement("defs", null, u.createElement("style", null, ".Cyber_svg__cls-1{fill:#4858e8}"))), te || (te = u.createElement("g", {
                        id: "Cyber_svg__Layer_2",
                        "data-name": "Layer 2"
                    }, u.createElement("g", {
                        id: "Cyber_svg__Layer_1-2",
                        "data-name": "Layer 1"
                    }, u.createElement("path", {
                        className: "Cyber_svg__cls-1",
                        d: "M437.9 875.8A438 438 0 0 1 267.45 34.42a438 438 0 0 1 340.9 807A435.1 435.1 0 0 1 437.9 875.8Zm0-849.8C210.78 26 26 210.78 26 437.9s184.78 411.9 411.9 411.9S849.8 665 849.8 437.9 665 26 437.9 26Z"
                    }), u.createElement("path", {
                        className: "Cyber_svg__cls-1",
                        d: "M374.73 349.64a8.74 8.74 0 0 0-9.6 14.6 87.42 87.42 0 0 1 39.8 73.3 8.8 8.8 0 1 0 17.6 0 105 105 0 0 0-47.8-87.9ZM405 455.14a8.8 8.8 0 1 0 8.6 8.8 8.77 8.77 0 0 0-8.6-8.8Z"
                    }), u.createElement("path", {
                        className: "Cyber_svg__cls-1",
                        d: "M526.43 194.34a40.4 40.4 0 0 0-67.7-.1l-76.5 119.3c-90-49.4-206.6 20.8-204.7 124-1.8 94.1 97.1 164.5 185.2 132.4l7 12.1a26 26 0 0 0-3.3 30.7l37.6 65.4c30.7 49.6 106.3 5.6 78.5-45.4l-37.7-65.3a26.66 26.66 0 0 0-12.1-10.9 25.81 25.81 0 0 0-16.2-1.6l-7-12.2a141.37 141.37 0 0 0 29.1-35.3h224.8a35.29 35.29 0 0 0 34.5-30.1 35.21 35.21 0 0 0-5-23.9Zm-121 376.6c5.9 10.1-10.7 19.6-16.5 9.5-.4-.6-9.4-16.3-9.7-16.8l16.5-9.5 9 15.7c.1.4.5.7.7 1.1Zm24.2 5.4 37.7 65.3a27.1 27.1 0 0 1 2.1 21.4 26.62 26.62 0 0 1-14.3 16 26.12 26.12 0 0 1-19.9 2.6 26.77 26.77 0 0 1-16-12.1L381.53 604a7.76 7.76 0 0 1-.6-7.1 27.14 27.14 0 0 0 19.7 4.8 27.35 27.35 0 0 0 23.4-29.5 8 8 0 0 1 5.6 4.1Zm-112.2-16.2a122.57 122.57 0 0 1-122.5-122.5c6.7-162.5 238.3-162.5 245 0a122.57 122.57 0 0 1-122.5 122.5ZM678.63 481a17.18 17.18 0 0 1-6.4 6.7 17.58 17.58 0 0 1-9 2.4h-216.1a140.8 140.8 0 0 0-50-167.4l76.3-118.9a22.83 22.83 0 0 1 19.1-10.5 22.58 22.58 0 0 1 19.1 10.5l166.3 259.4a17.27 17.27 0 0 1 2.8 8.8 16 16 0 0 1-2.1 9Z"
                    }), u.createElement("path", {
                        className: "Cyber_svg__cls-1",
                        d: "M492.13 253.84a34.64 34.64 0 0 0-24.7 10.3 35.42 35.42 0 0 0-10.3 24.7c0 1.2 7 122.5 35 122.5s35-121.3 35-122.5a34.64 34.64 0 0 0-10.3-24.7 35.24 35.24 0 0 0-24.7-10.3Zm0 136.1c-8.5-19.9-17.5-85.9-17.5-101a17.55 17.55 0 0 1 35.1 0c-.1 15.1-9.1 81.1-17.6 101ZM492.13 420.14a26.25 26.25 0 1 0 22.5 13.2 26.19 26.19 0 0 0-22.5-13.2Zm0 35a8.8 8.8 0 1 1 8.6-8.8 8.77 8.77 0 0 1-8.6 8.8ZM625.93 303.84a9 9 0 0 0 6.2 2.6 8.71 8.71 0 0 0 6.2-2.6l17.5-17.5a8.77 8.77 0 0 0-12.4-12.4l-17.5 17.5a9 9 0 0 0-2.6 6.2 9.14 9.14 0 0 0 2.6 6.2ZM640.93 315.14a8.8 8.8 0 0 0 0 17.6h17.5a8.8 8.8 0 0 0 0-17.6ZM614.63 288.84a8.71 8.71 0 0 0 6.2-2.6 9 9 0 0 0 2.6-6.2v-17.5a8.8 8.8 0 1 0-17.6 0V280a8.88 8.88 0 0 0 8.8 8.8Z"
                    })))))
                },
                se = [{
                    title: "Offensive Security Advisory",
                    description: "Proactively assess your organisation's security posture through a host of Offensive security services ranging from Vulnerability assessment to Intrusive Red team",
                    icon: function(e) {
                        return u.createElement("svg", F({
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 875.8 875.8"
                        }, e), i || (i = u.createElement("defs", null, u.createElement("style", null, ".Offensive_svg__cls-1{fill:#4858e8}"))), s || (s = u.createElement("g", {
                            id: "Offensive_svg__Layer_2",
                            "data-name": "Layer 2"
                        }, u.createElement("g", {
                            id: "Offensive_svg__Layer_1-2",
                            "data-name": "Layer 1"
                        }, u.createElement("path", {
                            className: "Offensive_svg__cls-1",
                            d: "M437.9 875.8A438 438 0 0 1 267.45 34.42a438 438 0 0 1 340.9 807A435.1 435.1 0 0 1 437.9 875.8Zm0-849.8C210.78 26 26 210.78 26 437.9s184.78 411.9 411.9 411.9S849.8 665 849.8 437.9 665 26 437.9 26Z"
                        }), u.createElement("path", {
                            className: "Offensive_svg__cls-1",
                            d: "M609 212H266.75a15.27 15.27 0 0 0-11 4.6 15.87 15.87 0 0 0-4.6 11v294.7a109.6 109.6 0 0 0 44.8 88.1l132.7 96.5a16 16 0 0 0 9.2 3 15.34 15.34 0 0 0 9.2-3l132.7-96.5a109.42 109.42 0 0 0 44.9-88.1V227.55a15.27 15.27 0 0 0-4.6-11A16.1 16.1 0 0 0 609 212Zm-15.5 310.3a77.88 77.88 0 0 1-32 62.9L437.85 675l-123.5-89.8a77.88 77.88 0 0 1-32-62.9V243.05h311.1Z"
                        }), u.createElement("path", {
                            className: "Offensive_svg__cls-1",
                            d: "M329 523.05h217.8a15.27 15.27 0 0 0 11-4.6 15.69 15.69 0 0 0 4.6-11V352a15.27 15.27 0 0 0-4.6-11 15.69 15.69 0 0 0-11-4.6h-46.7v-46.7a15.27 15.27 0 0 0-4.6-11 15.69 15.69 0 0 0-11-4.6h-93.3a15.27 15.27 0 0 0-11 4.6 15.69 15.69 0 0 0-4.6 11v46.7h-46.7a15.27 15.27 0 0 0-11 4.6 15.69 15.69 0 0 0-4.6 11v155.6a15.27 15.27 0 0 0 4.6 11 16 16 0 0 0 11.1 4.5Zm77.8-217.8H469v31.1h-62.2Zm-62.2 62.3h186.7V492H344.55Z"
                        }), u.createElement("path", {
                            className: "Offensive_svg__cls-1",
                            d: "M437.85 398.65a15.27 15.27 0 0 0-11 4.6 15.69 15.69 0 0 0-4.6 11v31.1a15.6 15.6 0 0 0 31.2 0v-31.1a15.71 15.71 0 0 0-15.6-15.6Z"
                        })))))
                    },
                    iconColor: "$secondary500"
                }, {
                    title: "Application Security",
                    description: "A unique hybrid approach consisting of elite application security testers and automated bots, tools and commercial solutions",
                    icon: function(e) {
                        return u.createElement("svg", G({
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 875.8 875.8"
                        }, e), X || (X = u.createElement("defs", null, u.createElement("style", null, ".Application_svg__cls-1{fill:#4858e8}"))), q || (q = u.createElement("g", {
                            id: "Application_svg__Layer_2",
                            "data-name": "Layer 2"
                        }, u.createElement("g", {
                            id: "Application_svg__Layer_1-2",
                            "data-name": "Layer 1"
                        }, u.createElement("path", {
                            className: "Application_svg__cls-1",
                            d: "M437.9 875.8A438 438 0 0 1 267.45 34.42a438 438 0 0 1 340.9 807A435.1 435.1 0 0 1 437.9 875.8Zm0-849.8C210.78 26 26 210.78 26 437.9s184.78 411.9 411.9 411.9S849.8 665 849.8 437.9 665 26 437.9 26Z"
                        }), u.createElement("path", {
                            className: "Application_svg__cls-1",
                            d: "M220.52 682.81h190A27.42 27.42 0 0 0 438 655.37V555.15a27.22 27.22 0 0 0-7.1-18.29 26.81 26.81 0 0 0-17.5-8.86v-24.83a98 98 0 0 0-196 0V528a27.4 27.4 0 0 0-24.54 27.15v100.22a27.44 27.44 0 0 0 8 19.41 28.41 28.41 0 0 0 19.59 8ZM234 503.17a81.7 81.7 0 0 1 163.39 0v24.55H381v-24.55a65.32 65.32 0 0 0-130.64 0v24.55h-16.31v-24.55Zm32.66 24.55v-24.55a49 49 0 0 1 98.07 0v24.55Zm-57.2 27.43a11.06 11.06 0 0 1 11.1-11.1h190a11.07 11.07 0 0 1 11.11 11.1v100.22a11.08 11.08 0 0 1-11.11 11.11h-190a11.07 11.07 0 0 1-11.1-11.11Zm98 69v17.82h16.33v-17.86a24.79 24.79 0 0 0 15.3-16 24.5 24.5 0 0 0-43.11-21.74 24.74 24.74 0 0 0-3.73 21.74 24.26 24.26 0 0 0 15.21 16Zm8.15-31.15a8.22 8.22 0 0 1 7.56 5 8.14 8.14 0 0 1-10.64 10.63 8.12 8.12 0 0 1-5-7.55 8 8 0 0 1 8.08-8.08Zm-24.54-204.14h-16.33V233.77A40.78 40.78 0 0 1 315.52 193h326.6a40.78 40.78 0 0 1 40.78 40.78v326.6a40.78 40.78 0 0 1-40.78 40.78H454.37v-16.33h187.84a24.74 24.74 0 0 0 17.36-7.19 24.17 24.17 0 0 0 7.19-17.36v-326.6a24.78 24.78 0 0 0-7.19-17.36 24.29 24.29 0 0 0-17.36-7.09h-326.6a24.74 24.74 0 0 0-17.36 7.19 24.2 24.2 0 0 0-7.18 17.35Zm40.87-163.3v16.33h-16.33v-16.33Zm32.66 0v16.33h-16.33v-16.33Zm32.66 0v16.33h-16.33v-16.33Zm-81.65 32.66h326.6v16.33h-326.6Zm236.74 171.51a73.59 73.59 0 1 0-21.55 52 73.44 73.44 0 0 0 21.55-52Zm-130.64 0a57.17 57.17 0 1 1 16.7 40.32 57.56 57.56 0 0 1-16.7-40.32Zm24.54 122.43v-21.55c-3.92-1.31-7.84-2.8-11.57-4.48l6.81-14.84a86.39 86.39 0 0 0 15 5.32 8.2 8.2 0 0 1 6.06 7.93v19.51h32.66v-19.51a8.29 8.29 0 0 1 6.07-7.93 95.11 95.11 0 0 0 23.26-9.61 8.18 8.18 0 0 1 9.89 1.31l13.82 13.81 23-23.05-13.81-13.91a8.19 8.19 0 0 1-1.3-9.89 94.06 94.06 0 0 0 9.65-23.27 8.1 8.1 0 0 1 7.93-6.07h19.5v-32.62h-19.5a8.29 8.29 0 0 1-7.93-6.06 95.57 95.57 0 0 0-9.61-23.25 8.19 8.19 0 0 1 1.3-9.89l13.81-13.81-23.14-23.05-13.72 13.81a8.21 8.21 0 0 1-9.89 1.31 94.08 94.08 0 0 0-23.23-9.62 8.09 8.09 0 0 1-6.07-7.93v-19.5h-32.66v19.5a8.27 8.27 0 0 1-6.06 7.93 95.6 95.6 0 0 0-23.24 9.62 8.21 8.21 0 0 1-9.89-1.31l-13.81-13.81-23.14 23.15 13.81 13.81a8.19 8.19 0 0 1 1.3 9.89 94.13 94.13 0 0 0-9.61 23.24 8.09 8.09 0 0 1-7.94 6.06h-11.28v-16.33h5.22a120.52 120.52 0 0 1 6.44-15.58l-15.3-15.3a8.23 8.23 0 0 1 0-11.57L403.7 320a8.21 8.21 0 0 1 11.57 0l15.3 15.21a118.69 118.69 0 0 1 15.59-6.44v-21.56a8.22 8.22 0 0 1 8.21-8.21h49a8.28 8.28 0 0 1 8.21 8.21v21.56a118.69 118.69 0 0 1 15.59 6.44l15.3-15.31a8.23 8.23 0 0 1 11.57 0l34.62 34.62a8.23 8.23 0 0 1 0 11.57l-15.3 15.31a119.94 119.94 0 0 1 6.43 15.6h21.55a8.28 8.28 0 0 1 8.21 8.21v49a8.28 8.28 0 0 1-8.21 8.22h-21.55a120.52 120.52 0 0 1-6.44 15.57l15.3 15.3a8.23 8.23 0 0 1 0 11.57L554 539.47a8.21 8.21 0 0 1-11.57 0l-15.3-15.3a118.69 118.69 0 0 1-15.59 6.44v21.55a8.28 8.28 0 0 1-8.21 8.22h-49a8.21 8.21 0 0 1-8.12-8.22Zm65.32-122.43a32.81 32.81 0 1 0-9.57 23.15 33 33 0 0 0 9.57-23.15Zm-49 0a16.25 16.25 0 0 1 16.33-16.33 16.34 16.34 0 1 1-11.57 27.91 16.39 16.39 0 0 1-4.75-11.58Z"
                        })))))
                    },
                    iconColor: "$secondary500"
                }, {
                    title: "Cloud Security",
                    description: "Secure your cloud and fuel productivity by adopting a Zero trust networks for your evolving cloud environments.",
                    icon: function(e) {
                        return u.createElement("svg", K({
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 875.8 875.8"
                        }, e), Y || (Y = u.createElement("defs", null, u.createElement("style", null, ".CloudH_svg__cls-1{fill:#4858e8}"))), R || (R = u.createElement("g", {
                            id: "CloudH_svg__Layer_2",
                            "data-name": "Layer 2"
                        }, u.createElement("g", {
                            id: "CloudH_svg__Layer_1-2",
                            "data-name": "Layer 1"
                        }, u.createElement("path", {
                            className: "CloudH_svg__cls-1",
                            d: "M437.9 875.8A438 438 0 0 1 267.45 34.42a438 438 0 0 1 340.9 807A435.1 435.1 0 0 1 437.9 875.8Zm0-849.8C210.78 26 26 210.78 26 437.9s184.78 411.9 411.9 411.9S849.8 665 849.8 437.9 665 26 437.9 26Z"
                        }), u.createElement("path", {
                            className: "CloudH_svg__cls-1",
                            d: "M631.9 482.88h-22.11a5.82 5.82 0 0 1-4.56-2.1 5.93 5.93 0 0 1-1.41-4.8 444.4 444.4 0 0 0-1.64-139.22 477 477 0 0 1-164-40.59 473.91 473.91 0 0 1-164 40.36 429.34 429.34 0 0 0-2 139.45 5.89 5.89 0 0 1-1.4 4.8 6.24 6.24 0 0 1-4.56 2.1H253a101.32 101.32 0 1 1 .46-202.63h.71a84.71 84.71 0 0 1 84-73.47h.35a82.59 82.59 0 0 1 35.09 7.84 98.39 98.39 0 0 1 90.79-60.48h.35a98.68 98.68 0 0 1 86.69 52.76 84.9 84.9 0 0 1 79 84.7c0 2.58-.12 5-.35 7.61h2.22a91.84 91.84 0 0 1-.35 183.67ZM616.57 471h15.21a80 80 0 0 0 57-136.18 79.25 79.25 0 0 0-56.39-23.63q-4.22 0-8.42.35a5.88 5.88 0 0 1-5-1.87 6 6 0 0 1-1.52-5.15 67.43 67.43 0 0 0 1.17-12.87 72.47 72.47 0 0 0-20.7-50.89 73.56 73.56 0 0 0-50.31-22.11 6 6 0 0 1-5.26-3.39 86.56 86.56 0 0 0-77.45-49.14h-.35a86.09 86.09 0 0 0-81.9 58.85 5.94 5.94 0 0 1-3.51 3.62 5.86 5.86 0 0 1-5-.46 70.75 70.75 0 0 0-35.33-9.48h-.35a72.86 72.86 0 0 0-72.65 68.21 5.92 5.92 0 0 1-2.11 4.21 6.15 6.15 0 0 1-4.44 1.4 44.08 44.08 0 0 0-5.5-.23A89.38 89.38 0 1 0 253.2 471h6.32a455 455 0 0 1 2.69-136.29 12.11 12.11 0 0 1 11.58-10A457.65 457.65 0 0 0 433 285.4a11.91 11.91 0 0 1 10.17 0 457 457 0 0 0 159.23 39.31 12.22 12.22 0 0 1 11.58 10A458.51 458.51 0 0 1 616.57 471Z"
                        }), u.createElement("path", {
                            className: "CloudH_svg__cls-1",
                            d: "M438.05 721.66a12.76 12.76 0 0 1-5.5-1.28c-121-59.9-160.28-165-172-242.64a451.52 451.52 0 0 1 1.76-143.08 12.1 12.1 0 0 1 11.58-10 457.6 457.6 0 0 0 159.24-39.26 11.93 11.93 0 0 1 10.18 0 457 457 0 0 0 159.23 39.31 12.23 12.23 0 0 1 11.58 10 459.06 459.06 0 0 1 1.75 143.19c-11.7 77.57-51.12 182.63-172 242.53a16.25 16.25 0 0 1-5.85 1.28Zm.11-425.49a473.91 473.91 0 0 1-164 40.36 429.06 429.06 0 0 0-2 139.45c11.35 74.76 49.14 176.07 165.55 233.63.23.12.35 0 .58 0C554.57 652.05 592.47 550.74 603.82 476a444.4 444.4 0 0 0-1.64-139.22 474.33 474.33 0 0 1-164-40.59Z"
                        }), u.createElement("path", {
                            className: "CloudH_svg__cls-1",
                            d: "M438.05 685.86a5 5 0 0 1-2.93-.82c-152.2-86.45-151.5-255.5-144.12-324.18a5.84 5.84 0 0 1 5.26-5.26 539.7 539.7 0 0 0 139.69-36.5 6.09 6.09 0 0 1 4.56 0 538.94 538.94 0 0 0 139.57 36.5 6 6 0 0 1 5.27 5.26c7.37 68.68 7.95 237.73-144.25 324.18a7.4 7.4 0 0 1-3 .82Zm-135.83-319c-6.55 68.67-4 224.62 135.83 306.16 139.8-81.54 142.26-237.49 135.71-306.16A551 551 0 0 1 438.05 331a550.65 550.65 0 0 1-135.83 35.8Z"
                        }), u.createElement("path", {
                            className: "CloudH_svg__cls-1",
                            d: "m466 557.52-57.21-.35a5.92 5.92 0 0 1-4.68-2.34 5.56 5.56 0 0 1-1.05-5l11.69-48.2a32.89 32.89 0 0 1-15-28.54A38.31 38.31 0 1 1 461.68 503l10.18 47.26a5.95 5.95 0 0 1-5.85 7.25Zm-49.6-12.28 42.24.23-9.48-44a5.91 5.91 0 0 1 2.69-6.31 26.32 26.32 0 1 0-40.13-22.35 20.55 20.55 0 0 0 2.93 11.7 19.79 19.79 0 0 0 9 8 6.05 6.05 0 0 1 3.74 7Z"
                        })))))
                    },
                    iconColor: "$secondary500"
                }, {
                    title: "Threat and Breach simulation",
                    description: "Adopt a proactive hunting methodology with huge data munging tools and techniques capable of hunting Advanced persistent threats",
                    icon: function(e) {
                        return u.createElement("svg", U({
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 875.8 875.8"
                        }, e), J || (J = u.createElement("defs", null, u.createElement("style", null, ".Threat_svg__cls-1{fill:#4858e8}"))), Q || (Q = u.createElement("g", {
                            id: "Threat_svg__Layer_2",
                            "data-name": "Layer 2"
                        }, u.createElement("g", {
                            id: "Threat_svg__Layer_1-2",
                            "data-name": "Layer 1"
                        }, u.createElement("path", {
                            className: "Threat_svg__cls-1",
                            d: "M437.9 875.8A438 438 0 0 1 267.45 34.42a438 438 0 0 1 340.9 807A435.1 435.1 0 0 1 437.9 875.8Zm0-849.8C210.78 26 26 210.78 26 437.9s184.78 411.9 411.9 411.9S849.8 665 849.8 437.9 665 26 437.9 26Z"
                        }), u.createElement("path", {
                            className: "Threat_svg__cls-1",
                            d: "M506 467.42h-32.51a10.41 10.41 0 0 1 0-20.81H506a4.32 4.32 0 0 0 3.91-2.29 4.37 4.37 0 0 0-.1-4.48s0-.1-.09-.1l-69.09-115a4.37 4.37 0 0 0-3.72-2.1 4.17 4.17 0 0 0-3.73 2.1l-69 114.9a.09.09 0 0 1-.1.09 4.39 4.39 0 0 0-.09 4.49 4.32 4.32 0 0 0 3.91 2.29h32.54a10.4 10.4 0 0 1 0 20.8H368a25.35 25.35 0 0 1-21.66-38.55l69.09-114.9a.09.09 0 0 1 .09-.09 25.35 25.35 0 0 1 43.14 0 .09.09 0 0 0 .09.09L527.6 429a25.27 25.27 0 0 1-21.6 38.42ZM513.1 677.55H352.87a10.45 10.45 0 0 1-10-13.46L372.91 564a10.46 10.46 0 0 1 10-7.44H483a10.54 10.54 0 0 1 10 7.44l29.87 99.53a11.71 11.71 0 0 1 .66 3.63 10.44 10.44 0 0 1-10.49 10.4Zm-146.2-20.81h132.17l-23.76-79.2h-84.55Z"
                        }), u.createElement("path", {
                            className: "Threat_svg__cls-1",
                            d: "M563.2 677.55H302.87a10.41 10.41 0 0 1 0-20.81H563.2a10.41 10.41 0 0 1 0 20.81ZM282.83 507.4h-70a10.4 10.4 0 0 1 0-20.8h70a10.4 10.4 0 1 1 0 20.8ZM663.3 507.4H342.85a10.4 10.4 0 0 1 0-20.8H663.2a10.43 10.43 0 0 1 10.41 10.4 10.3 10.3 0 0 1-10.31 10.4Z"
                        }), u.createElement("path", {
                            className: "Threat_svg__cls-1",
                            d: "M638.58 577.44H237.5a35.14 35.14 0 0 1-35.11-35.11v-291a35.15 35.15 0 0 1 35.11-35.12h401.08a35.15 35.15 0 0 1 35.12 35.12v291a35.14 35.14 0 0 1-35.12 35.11ZM237.5 237.06a14.25 14.25 0 0 0-14.22 14.21v291.06a14.26 14.26 0 0 0 14.22 14.22h401.08a14.26 14.26 0 0 0 14.22-14.22v-291a14.25 14.25 0 0 0-14.22-14.22Z"
                        }), u.createElement("path", {
                            className: "Threat_svg__cls-1",
                            d: "M437 437.55a10.43 10.43 0 0 1-10.41-10.4v-65.47a10.41 10.41 0 0 1 20.81 0v65.47a10.43 10.43 0 0 1-10.4 10.4ZM437 471.71a10.47 10.47 0 0 1-7.35-3 10.66 10.66 0 0 1-3.06-7.35 10.48 10.48 0 0 1 3.01-7.36 10.64 10.64 0 0 1 7.35-3 10.4 10.4 0 0 1 0 20.8ZM661.39 291.45H515.2a10.4 10.4 0 1 1 0-20.8h146.1a10.42 10.42 0 0 1 10.4 10.4 10.29 10.29 0 0 1-10.31 10.4ZM358.7 291.45H212.5a10.4 10.4 0 1 1 0-20.8h146.2a10.4 10.4 0 1 1 0 20.8ZM327.3 333.15h-73.1a10.4 10.4 0 0 1 0-20.8h73.1a10.42 10.42 0 0 1 10.4 10.4 10.3 10.3 0 0 1-10.4 10.4ZM306.5 375h-52.2a10.41 10.41 0 0 1 0-20.81h52.2a10.41 10.41 0 0 1 0 20.81ZM285.6 416.65h-31.3a10.4 10.4 0 0 1 0-20.8h31.3a10.4 10.4 0 0 1 0 20.8ZM619.59 333.15H546.5a10.4 10.4 0 1 1 0-20.8h73.09a10.4 10.4 0 1 1 0 20.8ZM619.59 375h-52.2a10.41 10.41 0 0 1 0-20.81h52.2a10.41 10.41 0 1 1 0 20.81ZM619.59 416.65h-31.3a10.4 10.4 0 0 1 0-20.8h31.3a10.4 10.4 0 1 1 0 20.8ZM443.43 527.92a11 11 0 1 1-11-11 11 11 0 0 1 11 11"
                        })))))
                    },
                    iconColor: "$secondary500"
                }, {
                    title: "Compliance and Auditing",
                    description: "Not sure if you have enough visibility on your compliance to leading Industry standards? We've got you covered. Eliminate Non-compliance and attain 100% visibility",
                    icon: a(4969).Z,
                    iconColor: "$secondary500"
                }, {
                    title: "Cyber Security Incident Response",
                    description: "Ransomware attack? Suspected Data breach? We've got you covered. Call in the experts and get the root of the incident.",
                    icon: ie,
                    iconColor: "$secondary500"
                }],
                ne = (0, p.zo)("div", {
                    display: "block",
                    width: "100%",
                    padding: "$5",
                    backgroundImage: '$primaryGradient1, url("images/service_home_card_bg_pattern.svg")',
                    $$iconColor: "$secondary500",
                    "@bp2": {
                        padding: "$8"
                    },
                    "& .content": {
                        marginTop: "$7"
                    },
                    svg: {
                        width: "64px",
                        height: "64px",
                        fill: "$$iconColor"
                    }
                }),
                re = function(e) {
                    var t = e.title,
                        a = e.text,
                        i = e.icon,
                        s = e.number,
                        r = e.iconColor,
                        o = i;
                    return (0, n.jsxs)(ne, {
                        css: {
                            $$iconColor: r && "$colors" + r
                        },
                        children: [(0, n.jsxs)(C.Z, {
                            spaceBetweenCenter: !0,
                            children: [(0, n.jsx)(o, {
                                alt: t
                            }), (0, n.jsx)(g.x, {
                                type: "b1",
                                weight: "bold",
                                css: {
                                    color: "$primary500"
                                },
                                children: s
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "content",
                            children: [(0, n.jsx)(g.x, {
                                as: "h3",
                                type: "b5",
                                weight: "bold",
                                css: {
                                    textTransform: "uppercase",
                                    marginBottom: "$2"
                                },
                                children: t
                            }), (0, n.jsx)(g.x, {
                                as: "p",
                                type: "b4",
                                css: {
                                    color: "$secondary200"
                                },
                                children: a
                            })]
                        })]
                    })
                },
                oe = a(3338),
                le = (0, p.zo)(I.Z),
                ce = function(e) {
                    var t = e.title,
                        a = e.description,
                        i = e.cardData,
                        s = (0, p.zo)("header", {
                            textAlign: "center",
                            margin: "0 auto",
                            maxWidth: "896px",
                            marginBottom: "$10"
                        });
                    return (0, n.jsx)(le, {
                        "aria-labelledby": "services_title",
                        children: (0, n.jsxs)(m.Z, {
                            children: [(0, n.jsxs)(s, {
                                children: [(0, n.jsx)(g.x, {
                                    id: "services_title",
                                    as: "h2",
                                    type: "h4",
                                    css: {
                                        marginBottom: "$4"
                                    },
                                    children: t
                                }), (0, n.jsx)(g.x, {
                                    as: "p",
                                    type: "b1",
                                    css: {
                                        color: "$secondary200"
                                    },
                                    children: a
                                })]
                            }), (0, n.jsx)(oe.Z, {
                                gap: "$3",
                                minWidth: "312px",
                                children: i.map((function(e, t) {
                                    var a = e.title,
                                        i = e.description,
                                        s = e.icon,
                                        r = e.iconColor;
                                    return (0, n.jsx)(re, {
                                        title: a,
                                        text: i,
                                        icon: s,
                                        number: "0" + (t + 1),
                                        iconColor: r
                                    }, a)
                                }))
                            })]
                        })
                    })
                },
                de = a(2980),
                he = (0, p.zo)("div", {
                    userSelect: "none",
                    padding: "$8 $5 $10"
                }),
                pe = function(e) {
                    var t = e.text,
                        a = e.author,
                        i = e.designation,
                        s = e.css;
                    return (0, n.jsxs)(he, {
                        css: s,
                        children: [(0, n.jsx)(g.x, {
                            as: "p",
                            css: {
                                color: "$accentA100",
                                marginBottom: "32px"
                            },
                            type: "b2",
                            children: "\u201c".concat(t, "\u201d")
                        }), (0, n.jsx)(C.Z, {
                            css: {
                                justifyContent: "flex-end",
                                gap: "12px"
                            },
                            children: (0, n.jsxs)("div", {
                                style: {
                                    textAlign: "right"
                                },
                                children: [(0, n.jsx)(g.x, {
                                    as: "div",
                                    type: "b3",
                                    weight: "bold",
                                    css: {
                                        color: "$white"
                                    },
                                    children: a
                                }), (0, n.jsx)(g.x, {
                                    as: "div",
                                    type: {
                                        "@initial": "b4",
                                        "@bp1": "b3"
                                    },
                                    css: {
                                        color: "$accenta300"
                                    },
                                    children: i
                                })]
                            })
                        })]
                    })
                },
                me = a(2885),
                ge = a(5246),
                ue = a(1901),
                xe = (a(6703), a(615)),
                ve = (0, p.zo)(I.Z, {}),
                ye = (0, p.zo)(ue.Z, {
                    position: "relative",
                    backgroundImage: "$accentaGradient1",
                    $$outlineColor: "$colors$accenta500"
                }),
                fe = function(e) {
                    var t = e.title,
                        a = e.description,
                        i = e.testimonials;
                    return (0, n.jsx)(ve, {
                        "aria-labelledby": "testimonials_title",
                        children: (0, n.jsx)(m.Z, {
                            children: (0, n.jsxs)(ge.Z, {
                                gapX: "$15",
                                equalWidth: !0,
                                children: [(0, n.jsx)(ye, {
                                    css: {
                                        "@bp3": {
                                            alignSelf: "flex-start",
                                            maxWidth: "600px"
                                        },
                                        "@bp8": {
                                            order: 2
                                        }
                                    },
                                    children: (0, n.jsx)(xe.lr, {
                                        autoPlay: !0,
                                        interval: 4e3,
                                        showStatus: !1,
                                        showThumbs: !1,
                                        showArrows: !1,
                                        stopOnHover: !0,
                                        emulateTouch: !0,
                                        infiniteLoop: !0,
                                        children: i.map((function(e, t) {
                                            var a = e.text,
                                                i = e.author,
                                                s = e.designation;
                                            return (0, n.jsx)(pe, {
                                                text: a,
                                                author: i,
                                                designation: s
                                            }, t)
                                        }))
                                    })
                                }), (0, n.jsx)(me.Z, {
                                    titleId: "testimonials_title",
                                    title: t,
                                    text: a,
                                    color: "$accenta200",
                                    css: {
                                        "@bp8": {
                                            order: 1
                                        }
                                    }
                                })]
                            })
                        })
                    })
                },
                _e = [{
                    text: "Primefort has been an integral part of our internet security strategy-providing us with continuous support and advisory services to improve our platforms.",
                    author: "Lionel Charles",
                    designation: "Founder and CEO of IndiaFilings.com"
                }, {
                    text: "We amazed work done by Sriram and team with technological and process capability. Sriram and team has demonstrated advanced penetration testing process based on threat level and business need.",
                    author: "IZAPY",
                    designation: "Leading Cybersecurity firm of Singapore"
                }],
                be = a(4259);

            function je() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(o(), {
                        children: [(0, n.jsx)("title", {
                            children: "Primefort"
                        }), (0, n.jsx)("meta", {
                            name: "description",
                            content: "Generated by create next app"
                        }), (0, n.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })]
                    }), (0, n.jsx)(l.Z, {}), (0, n.jsx)(w, {}), (0, n.jsx)(L, {
                        title: "Our Clients"
                    }), (0, n.jsx)(V, {
                        title: "Why is Cybersecurity necessary?",
                        description: "In the present-day scenario, there\u2019s a dollar value associated with a data breach/security incident and this pushed cyber security into the board room as senior management is concerned about the security posture of their organisation.",
                        services: D.Z
                    }), (0, n.jsx)(ce, {
                        title: "How we partner with your business on security services",
                        description: "Just imagine a group of Cyber Hitmen (of the good kind) between your organisation and the attackers? That\u2019s Primefort. With a range of proactive and reactive cyber security solutions, CISO\u2019s can sleep tight with Primefort. That\u2019s our Promise. ",
                        cardData: se
                    }), (0, n.jsx)(fe, {
                        title: "Trusted by the world\u2019s most innovative businesses \u2014 big and small",
                        description: "Primefort growth from its humble beginnings to a million-dollar company epitomizes our devotion to solving some of the world\u2019s most sophisticated security challenges.",
                        testimonials: _e
                    }), (0, n.jsx)(be.Z, {
                        text: "We believe great things can start with a conversation. We would love to hear from you.",
                        showButton: !0,
                        imagePath: "/images/new_home.svg"
                    }), (0, n.jsx)(de.Z, {})]
                })
            }
        },
        739: function(e, t, a) {
            "use strict";
            a.d(t, {
                K: function() {
                    return i
                }
            });
            var i = (0, a(334).F4)({
                "0%": {
                    transform: "translateX(0)"
                },
                "100%": {
                    transform: "translateX(-50%)"
                }
            })
        }
    },
    function(e) {
        e.O(0, [959, 747, 604, 774, 888, 179], (function() {
            return t = 8312, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);