(window.webpackJsonp = window.webpackJsonp || []).push([
  [248],
  {
    NTli: function (n, o, t) {
      "use strict";
      var e = t("qipm");
      t.n(e).a;
    },
    cdde: function (n, o, t) {
      "use strict";
      t.r(o);
      var e = {
          props: ["menus"],
          mounted: function () {},
          methods: {
            logout: function () {
              var n = this;
              helper.logout().then(function () {
                n.$router.push("/");
              });
            },
            getConfig: function (n) {
              return helper.getConfig(n);
            },
            isAuth: function () {
              return helper.isAuth();
            },
          },
          computed: {
            getLogo: function () {
              return helper.getLogo();
            },
          },
        },
        r = t("KHd+"),
        a = {
          props: ["menus"],
          mounted: function () {},
          methods: {
            getConfig: function (n) {
              return helper.getConfig(n);
            },
            getYear: function () {
              return moment().format("Y");
            },
          },
          computed: {},
        },
        i = {
          data: function () {
            return { menus: [] };
          },
          mounted: function () {
            this.getData();
          },
          methods: {
            getData: function () {
              var n = this,
                o = this.$loading.show();
              axios
                .get("/api/frontend/menu/list")
                .then(function (t) {
                  (n.menus = t.menus), o.hide();
                })
                .catch(function (n) {
                  o.hide(), helper.showErrorMsg(n);
                });
            },
          },
          components: {
            FrontendHeader: Object(r.a)(
              e,
              function () {
                var n = this,
                  o = n.$createElement,
                  t = n._self._c || o;
                return t("header", { staticClass: "topheader" }, [
                  t("div", { staticClass: "fix-width" }, [
                    t(
                      "nav",
                      { staticClass: "navbar navbar-expand-md navbar-light" },
                      [
                        n._m(0),
                        n._v(" "),
                        t(
                          "router-link",
                          { staticClass: "navbar-brand", attrs: { to: "/" } },
                          [
                            t("img", {
                              attrs: {
                                src: n.getLogo,
                                alt: n.getConfig("institute_name"),
                              },
                            }),
                          ]
                        ),
                        n._v(" "),
                        t(
                          "div",
                          {
                            staticClass: "collapse navbar-collapse",
                            attrs: { id: "navbarNavDropdown" },
                          },
                          [
                            t(
                              "ul",
                              { staticClass: "navbar-nav ml-auto stylish-nav" },
                              [
                                n._l(n.menus, function (o) {
                                  return o.page && !o.page.is_draft
                                    ? [
                                        o.hasOwnProperty("children") &&
                                        o.children.length
                                          ? t(
                                              "li",
                                              {
                                                staticClass:
                                                  "nav-item dropdown",
                                              },
                                              [
                                                t(
                                                  "a",
                                                  {
                                                    staticClass:
                                                      "nav-link dropdown-toggle",
                                                    attrs: {
                                                      href: "",
                                                      id:
                                                        "navbarDropdownMenuLink",
                                                      "data-toggle": "dropdown",
                                                      "aria-haspopup": "true",
                                                      "aria-expanded": "false",
                                                    },
                                                  },
                                                  [n._v(n._s(o.name))]
                                                ),
                                                n._v(" "),
                                                t(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "dropdown-menu",
                                                    attrs: {
                                                      "aria-labelledby":
                                                        "navbarDropdownMenuLink",
                                                    },
                                                  },
                                                  n._l(
                                                    o.children,
                                                    function (o) {
                                                      return t(
                                                        "router-link",
                                                        {
                                                          key: o.slug,
                                                          staticClass:
                                                            "dropdown-item",
                                                          attrs: {
                                                            to:
                                                              "/page/" + o.slug,
                                                            exact: "",
                                                          },
                                                        },
                                                        [n._v(n._s(o.name))]
                                                      );
                                                    }
                                                  ),
                                                  1
                                                ),
                                              ]
                                            )
                                          : t(
                                              "li",
                                              { staticClass: "nav-item" },
                                              [
                                                t(
                                                  "router-link",
                                                  {
                                                    staticClass: "nav-link",
                                                    attrs: {
                                                      to: o.options.is_default
                                                        ? "/" + o.slug
                                                        : "/page/" + o.slug,
                                                      exact: "",
                                                    },
                                                  },
                                                  [n._v(n._s(o.name))]
                                                ),
                                              ],
                                              1
                                            ),
                                      ]
                                    : n._e();
                                }),
                                n._v(" "),
                                n.getConfig("online_registration")
                                  ? t(
                                      "li",
                                      { staticClass: "nav-item" },
                                      [
                                        t(
                                          "router-link",
                                          {
                                            staticClass: "nav-link",
                                            attrs: {
                                              to: "/online-registration",
                                              exact: "",
                                            },
                                          },
                                          [
                                            n._v(
                                              n._s(
                                                n.trans(
                                                  "student.online_registration"
                                                )
                                              )
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  : n._e(),
                                n._v(" "),
                                n.isAuth()
                                  ? t(
                                      "li",
                                      { staticClass: "nav-item dropdown" },
                                      [
                                        t(
                                          "router-link",
                                          {
                                            staticClass:
                                              "nav-link dropdown-toggle btn nav-btn success",
                                            attrs: {
                                              to: "/dashboard",
                                              id: "authDropdownMenuLink",
                                              "data-toggle": "dropdown",
                                              "aria-haspopup": "true",
                                              "aria-expanded": "false",
                                            },
                                          },
                                          [
                                            t("i", {
                                              staticClass: "fas fa-home",
                                            }),
                                            n._v(
                                              " " +
                                                n._s(
                                                  n.trans("general.dashboard")
                                                )
                                            ),
                                          ]
                                        ),
                                        n._v(" "),
                                        t(
                                          "div",
                                          {
                                            staticClass:
                                              "dropdown-menu border-0 bg-transparent",
                                            attrs: {
                                              "aria-labelledby":
                                                "authDropdownMenuLink",
                                            },
                                          },
                                          [
                                            t(
                                              "a",
                                              {
                                                staticClass:
                                                  "dropdown-item btn nav-btn danger",
                                                attrs: { href: "#" },
                                                on: {
                                                  click: function (o) {
                                                    return (
                                                      o.preventDefault(),
                                                      n.logout(o)
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                t("i", {
                                                  staticClass:
                                                    "fas fa-power-off",
                                                }),
                                                n._v(
                                                  " " +
                                                    n._s(n.trans("auth.logout"))
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  : t(
                                      "li",
                                      { staticClass: "nav-item" },
                                      [
                                        t(
                                          "router-link",
                                          {
                                            staticClass:
                                              "nav-link btn nav-btn info",
                                            attrs: { to: "/login" },
                                          },
                                          [n._v(n._s(n.trans("auth.sign_in")))]
                                        ),
                                      ],
                                      1
                                    ),
                              ],
                              2
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]);
              },
              [
                function () {
                  var n = this.$createElement,
                    o = this._self._c || n;
                  return o(
                    "button",
                    {
                      staticClass: "navbar-toggler navbar-toggler-right",
                      attrs: {
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarNavDropdown",
                        "aria-controls": "navbarNavDropdown",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                      },
                    },
                    [o("span", { staticClass: "navbar-toggler-icon" })]
                  );
                },
              ],
              !1,
              null,
              null,
              null
            ).exports,
            FrontendFooter: Object(r.a)(
              a,
              function () {
                var n = this,
                  o = n.$createElement,
                  t = n._self._c || o;
                return t("footer", { staticClass: "frontend-footer" }, [
                  t("div", { staticClass: "fix-width fix-width-mobile" }, [
                    t("div", { staticClass: "row" }, [
                      t("div", { staticClass: "col-12 col-md-6" }, [
                        t(
                          "span",
                          [
                            n._v(
                              n._s(n.trans("frontend.footer_copyright")) +
                                " ?? " +
                                n._s(n.getYear()) +
                                " "
                            ),
                            t("router-link", { attrs: { to: "/" } }, [
                              n._v(n._s(n.getConfig("institute_name"))),
                            ]),
                          ],
                          1
                        ),
                        t("br"),
                        t("br"),
                        n._v(" "),
                        t("span", [
                          n._v(
                            n._s(n.trans("frontend.footer_all_rights_reserved"))
                          ),
                        ]),
                      ]),
                      n._v(" "),
                      t("div", { staticClass: "col-12 col-md-6 text-right" }, [
                        t(
                          "ul",
                          { staticClass: "list-inline" },
                          n._l(n.menus, function (o) {
                            return t(
                              "li",
                              { staticClass: "list-inline-item" },
                              [
                                t(
                                  "router-link",
                                  {
                                    key: o.slug,
                                    staticClass: "footer-nav-link",
                                    attrs: { to: "/page/" + o.slug, exact: "" },
                                  },
                                  [n._v(n._s(o.name))]
                                ),
                              ],
                              1
                            );
                          }),
                          0
                        ),
                        n._v(" "),
                        t("ul", { staticClass: "footer-link list-inline" }, [
                          n.getConfig("facebook_link")
                            ? t("li", { staticClass: "list-inline-item" }, [
                                t(
                                  "a",
                                  {
                                    attrs: {
                                      target: "_blank",
                                      href: n.getConfig("facebook_link"),
                                    },
                                  },
                                  [t("i", { staticClass: "fab fa-facebook" })]
                                ),
                              ])
                            : n._e(),
                          n._v(" "),
                          n.getConfig("twitter_link")
                            ? t("li", { staticClass: "list-inline-item" }, [
                                t(
                                  "a",
                                  {
                                    attrs: {
                                      target: "_blank",
                                      href: n.getConfig("twitter_link"),
                                    },
                                  },
                                  [t("i", { staticClass: "fab fa-twitter" })]
                                ),
                              ])
                            : n._e(),
                          n._v(" "),
                          n.getConfig("google_plus_link")
                            ? t("li", { staticClass: "list-inline-item" }, [
                                t(
                                  "a",
                                  {
                                    attrs: {
                                      target: "_blank",
                                      href: n.getConfig("google_plus_link"),
                                    },
                                  },
                                  [
                                    t("i", {
                                      staticClass: "fab fa-google-plus",
                                    }),
                                  ]
                                ),
                              ])
                            : n._e(),
                          n._v(" "),
                          n.getConfig("youtube_link")
                            ? t("li", { staticClass: "list-inline-item" }, [
                                t(
                                  "a",
                                  {
                                    attrs: {
                                      target: "_blank",
                                      href: n.getConfig("youtube_link"),
                                    },
                                  },
                                  [t("i", { staticClass: "fab fa-youtube" })]
                                ),
                              ])
                            : n._e(),
                          n._v(" "),
                          n.getConfig("linkedin_link")
                            ? t("li", { staticClass: "list-inline-item" }, [
                                t(
                                  "a",
                                  {
                                    attrs: {
                                      target: "_blank",
                                      href: n.getConfig("linkedin_link"),
                                    },
                                  },
                                  [t("i", { staticClass: "fab fa-linkedin" })]
                                ),
                              ])
                            : n._e(),
                        ]),
                      ]),
                    ]),
                  ]),
                ]);
              },
              [],
              !1,
              null,
              null,
              null
            ).exports,
          },
          computed: {
            headerMenu: function () {
              return this.menus.filter(function (n) {
                return "header" == n.type;
              });
            },
            footerMenu: function () {
              return this.menus.filter(function (n) {
                return "footer" == n.type;
              });
            },
          },
        },
        d =
          (t("NTli"),
          Object(r.a)(
            i,
            function () {
              var n = this.$createElement,
                o = this._self._c || n;
              return o(
                "div",
                {
                  staticClass: "frontend-pages",
                  attrs: { id: "main-wrapper" },
                },
                [
                  o("tour-notification", { staticClass: "d-none d-sm-inline" }),
                  this._v(" "),
                  o("frontend-header", { attrs: { menus: this.headerMenu } }),
                  this._v(" "),
                  o(
                    "div",
                    { staticClass: "page-wrapper" },
                    [o("router-view")],
                    1
                  ),
                  this._v(" "),
                  o("frontend-footer", { attrs: { menus: this.footerMenu } }),
                ],
                1
              );
            },
            [],
            !1,
            null,
            null,
            null
          ));
      o.default = d.exports;
    },
    du4o: function (n, o, t) {
      (n.exports = t("I1BE")(!1)).push([
        n.i,
        '/*Nagesh*/\n/*\nTemplate Name: Monster Admin\nAuthor: Themedesigner\nEmail: niravjoshi87@gmail.com\nFile: scss\n*/\n/*Theme Colors*/\n/*bootstrap Color*/\n/*Light colors*/\n/*Normal Color*/\n/*Extra Variable*/\n/*Preloader*/\n.preloader {\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  position: fixed;\n  z-index: 99999;\n  background: #fff;\n}\n.preloader .cssload-speeding-wheel {\n  position: absolute;\n  top: calc(50% - 3.5px);\n  left: calc(50% - 3.5px);\n}\n\n/*\nTemplate Name: Mai Monster hu\nAuthor: Themedesigner\nEmail: niravjoshi87@gmail.com\nFile: scss\n*/\n/******************* \nGlobal Styles \n*******************/\n* {\n  outline: none;\n}\nbody {\n  background: #fff;\n  font-family: "Rubik", sans-serif;\n  margin: 0;\n  overflow-x: hidden;\n  color: #54667a;\n  font-weight: 300;\n}\nhtml {\n  position: relative;\n  min-height: 100%;\n  background: #ffffff;\n}\na:hover, a:focus {\n  text-decoration: none;\n}\na.link {\n  color: #54667a;\n}\na.link:hover, a.link:focus {\n  color: #009efb;\n}\n.img-responsive {\n  width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 4px;\n}\n\n/*******************\nHeadings\n*******************/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: #2c2b2e;\n  font-family: "Rubik", sans-serif;\n  font-weight: 400;\n}\nh1 {\n  line-height: 48px;\n  font-size: 36px;\n}\nh2 {\n  line-height: 36px;\n  font-size: 24px;\n}\nh3 {\n  line-height: 30px;\n  font-size: 21px;\n}\nh4 {\n  line-height: 22px;\n  font-size: 18px;\n}\nh5 {\n  line-height: 18px;\n  font-size: 16px;\n  font-weight: 400;\n}\nh6 {\n  line-height: 16px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.display-5 {\n  font-size: 3rem;\n}\n.display-6 {\n  font-size: 36px;\n}\n.box {\n  border-radius: 4px;\n  padding: 10px;\n}\nhtml body .dl {\n  display: inline-block;\n}\nhtml body .db {\n  display: block;\n}\n.no-wrap td, .no-wrap th {\n  white-space: nowrap;\n}\n\n/*******************\nBlockquote\n*******************/\nblockquote {\n  border: 1px solid rgba(120, 130, 140, 0.13);\n  border-left: 5px solid #009efb;\n  padding: 15px;\n}\n.clear {\n  clear: both;\n}\nol li {\n  margin: 5px 0;\n}\n\n/*******************\nPaddings\n*******************/\nhtml body .p-0 {\n  padding: 0px;\n}\nhtml body .p-10 {\n  padding: 10px;\n}\nhtml body .p-20 {\n  padding: 20px;\n}\nhtml body body .p-30 {\n  padding: 30px;\n}\nhtml body .p-l-0 {\n  padding-left: 0px;\n}\nhtml body .p-l-10 {\n  padding-left: 10px;\n}\nhtml body .p-l-20 {\n  padding-left: 20px;\n}\nhtml body .p-r-0 {\n  padding-right: 0px;\n}\nhtml body .p-r-10 {\n  padding-right: 10px;\n}\nhtml body .p-r-20 {\n  padding-right: 20px;\n}\nhtml body .p-r-30 {\n  padding-right: 30px;\n}\nhtml body .p-r-40 {\n  padding-right: 40px;\n}\nhtml body .p-t-0 {\n  padding-top: 0px;\n}\nhtml body .p-t-10 {\n  padding-top: 10px;\n}\nhtml body .p-t-20 {\n  padding-top: 20px;\n}\nhtml body .p-t-30 {\n  padding-top: 30px;\n}\nhtml body .p-b-0 {\n  padding-bottom: 0px;\n}\nhtml body .p-b-5 {\n  padding-bottom: 5px;\n}\nhtml body .p-b-10 {\n  padding-bottom: 10px;\n}\nhtml body .p-b-20 {\n  padding-bottom: 20px;\n}\nhtml body .p-b-30 {\n  padding-bottom: 30px;\n}\nhtml body .p-b-40 {\n  padding-bottom: 40px;\n}\n\n/*******************\nMargin\n*******************/\nhtml body .m-0 {\n  margin: 0px;\n}\nhtml body .m-l-5 {\n  margin-left: 5px;\n}\nhtml body .m-l-10 {\n  margin-left: 10px;\n}\nhtml body .m-l-15 {\n  margin-left: 15px;\n}\nhtml body .m-l-20 {\n  margin-left: 20px;\n}\nhtml body .m-l-30 {\n  margin-left: 30px;\n}\nhtml body .m-l-40 {\n  margin-left: 40px;\n}\nhtml body .m-r-5 {\n  margin-right: 5px;\n}\nhtml body .m-r-10 {\n  margin-right: 10px;\n}\nhtml body .m-r-15 {\n  margin-right: 15px;\n}\nhtml body .m-r-20 {\n  margin-right: 20px;\n}\nhtml body .m-r-30 {\n  margin-right: 30px;\n}\nhtml body .m-r-40 {\n  margin-right: 40px;\n}\nhtml body .m-t-0 {\n  margin-top: 0px;\n}\nhtml body .m-t-5 {\n  margin-top: 5px;\n}\nhtml body .m-t-10 {\n  margin-top: 10px;\n}\nhtml body .m-t-15 {\n  margin-top: 15px;\n}\nhtml body .m-t-20 {\n  margin-top: 20px;\n}\nhtml body .m-t-30 {\n  margin-top: 30px;\n}\nhtml body .m-t-40 {\n  margin-top: 40px;\n}\nhtml body .m-b-0 {\n  margin-bottom: 0px;\n}\nhtml body .m-b-5 {\n  margin-bottom: 5px;\n}\nhtml body .m-b-10 {\n  margin-bottom: 10px;\n}\nhtml body .m-b-15 {\n  margin-bottom: 15px;\n}\nhtml body .m-b-20 {\n  margin-bottom: 20px;\n}\nhtml body .m-b-30 {\n  margin-bottom: 30px;\n}\nhtml body .m-b-40 {\n  margin-bottom: 40px;\n}\n\n/*******************\nvertical alignment\n*******************/\nhtml body .vt {\n  vertical-align: top;\n}\nhtml body .vm {\n  vertical-align: middle;\n}\nhtml body .vb {\n  vertical-align: bottom;\n}\n\n/*******************\nfont weight\n*******************/\nhtml body .font-bold {\n  font-weight: 700;\n}\nhtml body .font-normal {\n  font-weight: normal;\n}\nhtml body .font-light {\n  font-weight: 300;\n}\nhtml body .font-medium {\n  font-weight: 400;\n}\nhtml body .font-16 {\n  font-size: 16px;\n}\nhtml body .font-14 {\n  font-size: 14px;\n}\nhtml body .font-18 {\n  font-size: 18px;\n}\nhtml body .font-20 {\n  font-size: 20px;\n}\n\n/*******************\nBorder\n*******************/\nhtml body .b-0 {\n  border: none;\n}\nhtml body .b-r {\n  border-right: 1px solid rgba(120, 130, 140, 0.13);\n}\nhtml body .b-l {\n  border-left: 1px solid rgba(120, 130, 140, 0.13);\n}\nhtml body .b-b {\n  border-bottom: 1px solid rgba(120, 130, 140, 0.13);\n}\nhtml body .b-t {\n  border-top: 1px solid rgba(120, 130, 140, 0.13);\n}\nhtml body .b-all {\n  border: 1px solid rgba(120, 130, 140, 0.13);\n}\n\n/*******************\nThumb size\n*******************/\n.thumb-sm {\n  height: 32px;\n  width: 32px;\n}\n.thumb-md {\n  height: 48px;\n  width: 48px;\n}\n.thumb-lg {\n  height: 88px;\n  width: 88px;\n}\n.hide {\n  display: none;\n}\n.img-circle {\n  border-radius: 100%;\n}\n.radius {\n  border-radius: 4px;\n}\n\n/*******************\nText Colors\n*******************/\nhtml body .text-muted {\n  color: #90a4ae;\n}\n\n/*******************\nBackground Colors\n*******************/\nhtml body .bg-primary {\n  background-color: #7460ee;\n}\nhtml body .bg-success {\n  background-color: #55ce63;\n}\nhtml body .bg-info {\n  background-color: #009efb !important;\n}\nhtml body .bg-warning {\n  background-color: #ffbc34;\n}\nhtml body .bg-danger {\n  background-color: #f62d51;\n}\nhtml body .bg-megna {\n  background-color: #01c0c8;\n}\nhtml body .bg-theme {\n  background-color: #009efb;\n}\nhtml body .bg-inverse {\n  background-color: #2f3d4a;\n}\nhtml body .bg-purple {\n  background-color: #7460ee;\n}\nhtml body .bg-light-primary {\n  background-color: #f1effd;\n}\nhtml body .bg-light-success {\n  background-color: #e8fdeb;\n}\nhtml body .bg-light-info {\n  background-color: #cfecfe;\n}\nhtml body .bg-light-extra {\n  background-color: #ebf3f5;\n}\nhtml body .bg-light-warning {\n  background-color: #fff8ec;\n}\nhtml body .bg-light-danger {\n  background-color: #f9e7eb;\n}\nhtml body .bg-light-inverse {\n  background-color: #f6f6f6;\n}\nhtml body .bg-light {\n  background-color: #f2f7f8;\n}\nhtml body .bg-white {\n  background-color: #ffffff;\n}\n\n/*******************\nRounds\n*******************/\n.round {\n  line-height: 45px;\n  color: #ffffff;\n  width: 45px;\n  height: 45px;\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  border-radius: 100%;\n  background: #009efb;\n}\n.round img {\n  border-radius: 100%;\n}\n.round.round-info {\n  background: #009efb;\n}\n.round.round-warning {\n  background: #ffbc34;\n}\n.round.round-danger {\n  background: #f62d51;\n}\n.round.round-success {\n  background: #55ce63;\n}\n.round.round-primary {\n  background: #7460ee;\n}\n\n/*******************\nLabels\n*******************/\n.label {\n  padding: 2px 10px;\n  line-height: 13px;\n  color: #ffffff;\n  font-weight: 400;\n  border-radius: 4px;\n  font-size: 75%;\n}\n.label-rounded {\n  border-radius: 60px;\n}\n.label-custom {\n  background-color: #01c0c8;\n}\n.label-success {\n  background-color: #55ce63;\n}\n.label-info {\n  background-color: #009efb;\n}\n.label-warning {\n  background-color: #ffbc34;\n}\n.label-danger {\n  background-color: #f62d51;\n}\n.label-megna {\n  background-color: #01c0c8;\n}\n.label-primary {\n  background-color: #7460ee;\n}\n.label-purple {\n  background-color: #7460ee;\n}\n.label-red {\n  background-color: #fb3a3a;\n}\n.label-inverse {\n  background-color: #2f3d4a;\n}\n.label-default {\n  background-color: #f2f7f8;\n}\n.label-white {\n  background-color: #ffffff;\n}\n.label-light-success {\n  background-color: #e8fdeb;\n  color: #55ce63;\n}\n.label-light-info {\n  background-color: #cfecfe;\n  color: #009efb;\n}\n.label-light-warning {\n  background-color: #fff8ec;\n  color: #ffbc34;\n}\n.label-light-danger {\n  background-color: #f9e7eb;\n  color: #f62d51;\n}\n.label-light-megna {\n  background-color: #e0f2f4;\n  color: #01c0c8;\n}\n.label-light-primary {\n  background-color: #f1effd;\n  color: #7460ee;\n}\n.label-light-inverse {\n  background-color: #f6f6f6;\n  color: #2f3d4a;\n}\n\n/*******************\nPagination\n*******************/\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.pagination > li > a,\n.pagination > li > span {\n  color: #263238;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  background-color: #f2f7f8;\n}\n.pagination-split li {\n  margin-left: 5px;\n  display: inline-block;\n  float: left;\n}\n.pagination-split li:first-child {\n  margin-left: 0;\n}\n.pagination-split li a {\n  border-radius: 4px;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  background-color: #009efb;\n  border-color: #009efb;\n}\n.pager li > a,\n.pager li > span {\n  border-radius: 4px;\n  color: #263238;\n}\n\n/*******************\nTable Cell\n*******************/\n.table-box {\n  display: table;\n  width: 100%;\n}\n.table.no-border tbody td {\n  border: 0px;\n}\n.cell {\n  display: table-cell;\n  vertical-align: middle;\n}\n.table td, .table th {\n  border-color: #f3f1f1;\n}\n.table thead th, .table th {\n  font-weight: 500;\n}\n.table-hover tbody tr:hover {\n  background: #f2f7f8;\n}\nhtml body .jqstooltip {\n  width: auto;\n  height: auto;\n}\n.v-middle td, .v-middle th {\n  vertical-align: middle;\n}\n\n/*******************\nWave Effects\n*******************/\n.waves-effect {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  will-change: opacity, transform;\n  transition: all 0.3s ease-out;\n}\n.waves-effect .waves-ripple {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n.waves-effect.waves-light .waves-ripple {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n.waves-effect.waves-red .waves-ripple {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n.waves-effect.waves-yellow .waves-ripple {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n.waves-effect.waves-orange .waves-ripple {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n.waves-effect.waves-purple .waves-ripple {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n.waves-effect.waves-green .waves-ripple {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n.waves-effect.waves-teal .waves-ripple {\n  background-color: rgba(0, 150, 136, 0.7);\n}\nhtml body .waves-notransition {\n  transition: none;\n}\n.waves-circle {\n  transform: translateZ(0);\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n.waves-input-wrapper {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n.waves-input-wrapper .waves-button-input {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.waves-block {\n  display: block;\n}\n\n/*Badge*/\n.badge {\n  font-weight: 400;\n}\n.badge-xs {\n  font-size: 9px;\n}\n.badge-xs,\n.badge-sm {\n  transform: translate(0, -2px);\n}\n.badge-success {\n  background-color: #55ce63;\n}\n.badge-info {\n  background-color: #009efb;\n}\n.badge-primary {\n  background-color: #7460ee;\n}\n.badge-warning {\n  background-color: #ffbc34;\n}\n.badge-danger {\n  background-color: #f62d51;\n}\n.badge-purple {\n  background-color: #7460ee;\n}\n.badge-red {\n  background-color: #fb3a3a;\n}\n.badge-inverse {\n  background-color: #2f3d4a;\n}\n\n/*Text Color*/\n.text-white {\n  color: #ffffff;\n}\n.text-danger {\n  color: #f62d51 !important;\n}\n.text-muted {\n  color: #90a4ae !important;\n}\n.text-warning {\n  color: #ffbc34 !important;\n}\n.text-success {\n  color: #55ce63 !important;\n}\n.text-info {\n  color: #009efb !important;\n}\n.text-inverse {\n  color: #2f3d4a !important;\n}\n.text-blue {\n  color: #02bec9;\n}\n.text-purple {\n  color: #7460ee;\n}\n.text-primary {\n  color: #7460ee !important;\n}\n.text-megna {\n  color: #01c0c8;\n}\n.text-dark {\n  color: #54667a;\n}\n.text-themecolor {\n  color: #009efb;\n}\n\n/*******************\nButtons\n******************/\n.btn {\n  padding: 7px 12px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.btn-group label {\n  color: #ffffff !important;\n  margin-bottom: 0px;\n}\n.btn-group label.btn-secondary {\n  color: #54667a !important;\n}\n.btn-lg {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n}\n.btn-circle {\n  border-radius: 100%;\n  width: 40px;\n  height: 40px;\n  padding: 10px;\n}\n.btn-circle.btn-sm {\n  width: 35px;\n  height: 35px;\n  padding: 8px 10px;\n  font-size: 14px;\n}\n.btn-circle.btn-lg {\n  width: 50px;\n  height: 50px;\n  padding: 14px 15px;\n  font-size: 18px;\n}\n.btn-circle.btn-xl {\n  width: 70px;\n  height: 70px;\n  padding: 14px 15px;\n  font-size: 24px;\n}\n.btn-sm {\n  padding: 0.25rem 0.5rem;\n  font-size: 12px;\n}\n.btn-xs {\n  padding: 0.25rem 0.5rem;\n  font-size: 10px;\n}\n.button-list button, .button-list a {\n  margin: 5px 12px 5px 0;\n}\n.btn-outline {\n  color: inherit;\n  background-color: transparent;\n  transition: all 0.5s;\n}\n.btn-rounded {\n  border-radius: 60px;\n  padding: 7px 18px;\n}\n.btn-rounded.btn-lg {\n  padding: 0.75rem 1.5rem;\n}\n.btn-rounded.btn-sm {\n  padding: 0.25rem 0.5rem;\n  font-size: 12px;\n}\n.btn-rounded.btn-xs {\n  padding: 0.25rem 0.5rem;\n  font-size: 10px;\n}\n.btn-custom,\n.btn-custom.disabled {\n  background: #009efb;\n  border: 1px solid #009efb;\n  color: #ffffff;\n}\n.btn-custom:hover,\n.btn-custom.disabled:hover {\n  background: #009efb;\n  opacity: 0.8;\n  color: #ffffff;\n  border: 1px solid #009efb;\n}\n.btn-primary,\n.btn-primary.disabled {\n  background: #7460ee;\n  border: 1px solid #7460ee;\n}\n.btn-primary:hover,\n.btn-primary.disabled:hover {\n  background: #7460ee;\n  opacity: 0.7;\n  border: 1px solid #7460ee;\n}\n.btn-primary.active, .btn-primary:focus,\n.btn-primary.disabled.active,\n.btn-primary.disabled:focus {\n  background: #6352ce;\n}\n.btn-themecolor,\n.btn-themecolor.disabled {\n  background: #009efb;\n  color: #ffffff;\n  border: 1px solid #009efb;\n}\n.btn-themecolor:hover,\n.btn-themecolor.disabled:hover {\n  background: #009efb;\n  opacity: 0.7;\n  border: 1px solid #009efb;\n}\n.btn-themecolor.active, .btn-themecolor:focus,\n.btn-themecolor.disabled.active,\n.btn-themecolor.disabled:focus {\n  background: #028ee1;\n}\n.btn-success,\n.btn-success.disabled {\n  background: #55ce63;\n  border: 1px solid #55ce63;\n}\n.btn-success:hover,\n.btn-success.disabled:hover {\n  background: #55ce63;\n  opacity: 0.7;\n  border: 1px solid #55ce63;\n}\n.btn-success.active, .btn-success:focus,\n.btn-success.disabled.active,\n.btn-success.disabled:focus {\n  background: #4ab657;\n}\n.btn-info,\n.btn-info.disabled {\n  background: #009efb;\n  border: 1px solid #009efb;\n}\n.btn-info:hover,\n.btn-info.disabled:hover {\n  background: #009efb;\n  opacity: 0.7;\n  border: 1px solid #009efb;\n}\n.btn-info.active, .btn-info:focus,\n.btn-info.disabled.active,\n.btn-info.disabled:focus {\n  background: #028ee1;\n}\n.btn-warning,\n.btn-warning.disabled {\n  background: #ffbc34;\n  border: 1px solid #ffbc34;\n}\n.btn-warning:hover,\n.btn-warning.disabled:hover {\n  background: #ffbc34;\n  opacity: 0.7;\n  border: 1px solid #ffbc34;\n}\n.btn-warning.active, .btn-warning:focus,\n.btn-warning.disabled.active,\n.btn-warning.disabled:focus {\n  background: #e9ab2e;\n}\n.btn-danger,\n.btn-danger.disabled {\n  background: #f62d51;\n  border: 1px solid #f62d51;\n}\n.btn-danger:hover,\n.btn-danger.disabled:hover {\n  background: #f62d51;\n  opacity: 0.7;\n  border: 1px solid #f62d51;\n}\n.btn-danger.active, .btn-danger:focus,\n.btn-danger.disabled.active,\n.btn-danger.disabled:focus {\n  background: #e6294b;\n}\n.btn-inverse,\n.btn-inverse.disabled {\n  background: #2f3d4a;\n  border: 1px solid #2f3d4a;\n  color: #ffffff;\n}\n.btn-inverse:hover,\n.btn-inverse.disabled:hover {\n  background: #2f3d4a;\n  opacity: 0.7;\n  color: #ffffff;\n  border: 1px solid #2f3d4a;\n}\n.btn-inverse.active, .btn-inverse:focus,\n.btn-inverse.disabled.active,\n.btn-inverse.disabled:focus {\n  background: #232a37;\n  color: #ffffff;\n}\n.btn-red,\n.btn-red.disabled {\n  background: #fb3a3a;\n  border: 1px solid #fb3a3a;\n  color: #ffffff;\n}\n.btn-red:hover,\n.btn-red.disabled:hover {\n  opacity: 0.7;\n  border: 1px solid #fb3a3a;\n  background: #fb3a3a;\n}\n.btn-red.active, .btn-red:focus,\n.btn-red.disabled.active,\n.btn-red.disabled:focus {\n  background: #e6294b;\n}\n.btn-outline-default {\n  background-color: #ffffff;\n}\n.btn-outline-default:hover, .btn-outline-default:focus, .btn-outline-default.focus {\n  background: #f2f7f8;\n}\n.btn-outline-primary {\n  color: #7460ee;\n  background-color: #ffffff;\n  border-color: #7460ee;\n}\n.btn-outline-primary:hover, .btn-outline-primary:focus, .btn-outline-primary.focus {\n  background: #7460ee;\n  color: #ffffff;\n  border-color: #7460ee;\n}\n.btn-outline-success {\n  color: #55ce63;\n  background-color: transparent;\n  border-color: #55ce63;\n}\n.btn-outline-success:hover, .btn-outline-success:focus, .btn-outline-success.focus {\n  background: #55ce63;\n  border-color: #55ce63;\n  color: #ffffff;\n}\n.btn-outline-info {\n  color: #009efb;\n  background-color: transparent;\n  border-color: #009efb;\n}\n.btn-outline-info:hover, .btn-outline-info:focus, .btn-outline-info.focus {\n  background: #009efb;\n  border-color: #009efb;\n  color: #ffffff;\n}\n.btn-outline-warning {\n  color: #ffbc34;\n  background-color: transparent;\n  border-color: #ffbc34;\n}\n.btn-outline-warning:hover, .btn-outline-warning:focus, .btn-outline-warning.focus {\n  background: #ffbc34;\n  border-color: #ffbc34;\n  color: #ffffff;\n}\n.btn-outline-danger {\n  color: #f62d51;\n  background-color: transparent;\n  border-color: #f62d51;\n}\n.btn-outline-danger:hover, .btn-outline-danger:focus, .btn-outline-danger.focus {\n  background: #f62d51;\n  border-color: #f62d51;\n  color: #ffffff;\n}\n.btn-outline-red {\n  color: #fb3a3a;\n  background-color: transparent;\n  border-color: #fb3a3a;\n}\n.btn-outline-red:hover, .btn-outline-red:focus, .btn-outline-red.focus {\n  background: #fb3a3a;\n  border-color: #fb3a3a;\n  color: #ffffff;\n}\n.btn-outline-inverse {\n  color: #2f3d4a;\n  background-color: transparent;\n  border-color: #2f3d4a;\n}\n.btn-outline-inverse:hover, .btn-outline-inverse:focus, .btn-outline-inverse.focus {\n  background: #2f3d4a;\n  border-color: #2f3d4a;\n  color: #ffffff;\n}\n.btn-primary.active.focus,\n.btn-primary.active:focus,\n.btn-primary.active:hover,\n.btn-primary.focus:active,\n.btn-primary:active:focus,\n.btn-primary:active:hover,\n.open > .dropdown-toggle.btn-primary.focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.open > .dropdown-toggle.btn-primary:hover,\n.btn-primary.focus,\n.btn-primary:focus {\n  background-color: #6352ce;\n  border: 1px solid #6352ce;\n}\n.btn-success.active.focus,\n.btn-success.active:focus,\n.btn-success.active:hover,\n.btn-success.focus:active,\n.btn-success:active:focus,\n.btn-success:active:hover,\n.open > .dropdown-toggle.btn-success.focus,\n.open > .dropdown-toggle.btn-success:focus,\n.open > .dropdown-toggle.btn-success:hover,\n.btn-success.focus,\n.btn-success:focus {\n  background-color: #4ab657;\n  border: 1px solid #4ab657;\n}\n.btn-info.active.focus,\n.btn-info.active:focus,\n.btn-info.active:hover,\n.btn-info.focus:active,\n.btn-info:active:focus,\n.btn-info:active:hover,\n.open > .dropdown-toggle.btn-info.focus,\n.open > .dropdown-toggle.btn-info:focus,\n.open > .dropdown-toggle.btn-info:hover,\n.btn-info.focus,\n.btn-info:focus {\n  background-color: #028ee1;\n  border: 1px solid #028ee1;\n}\n.btn-warning.active.focus,\n.btn-warning.active:focus,\n.btn-warning.active:hover,\n.btn-warning.focus:active,\n.btn-warning:active:focus,\n.btn-warning:active:hover,\n.open > .dropdown-toggle.btn-warning.focus,\n.open > .dropdown-toggle.btn-warning:focus,\n.open > .dropdown-toggle.btn-warning:hover,\n.btn-warning.focus,\n.btn-warning:focus {\n  background-color: #e9ab2e;\n  border: 1px solid #e9ab2e;\n}\n.btn-danger.active.focus,\n.btn-danger.active:focus,\n.btn-danger.active:hover,\n.btn-danger.focus:active,\n.btn-danger:active:focus,\n.btn-danger:active:hover,\n.open > .dropdown-toggle.btn-danger.focus,\n.open > .dropdown-toggle.btn-danger:focus,\n.open > .dropdown-toggle.btn-danger:hover,\n.btn-danger.focus,\n.btn-danger:focus {\n  background-color: #e6294b;\n  border: 1px solid #e6294b;\n}\n.btn-inverse:hover,\n.btn-inverse:focus,\n.btn-inverse:active,\n.btn-inverse.active,\n.btn-inverse.focus,\n.btn-inverse:active,\n.btn-inverse:focus,\n.btn-inverse:hover,\n.open > .dropdown-toggle.btn-inverse {\n  background-color: #232a37;\n  border: 1px solid #232a37;\n}\n.btn-red:hover,\n.btn-red:focus,\n.btn-red:active,\n.btn-red.active,\n.btn-red.focus,\n.btn-red:active,\n.btn-red:focus,\n.btn-red:hover,\n.open > .dropdown-toggle.btn-red {\n  background-color: #d61f1f;\n  border: 1px solid #d61f1f;\n  color: #ffffff;\n}\n.button-box .btn {\n  margin: 0 8px 8px 0px;\n}\n.btn-label {\n  background: rgba(0, 0, 0, 0.05);\n  display: inline-block;\n  margin: -6px 12px -6px -14px;\n  padding: 7px 15px;\n}\n.btn-facebook {\n  color: #ffffff;\n  background-color: #3b5998;\n}\n.btn-twitter {\n  color: #ffffff;\n  background-color: #55acee;\n}\n.btn-linkedin {\n  color: #ffffff;\n  background-color: #007bb6;\n}\n.btn-dribbble {\n  color: #ffffff;\n  background-color: #ea4c89;\n}\n.btn-googleplus {\n  color: #ffffff;\n  background-color: #dd4b39;\n}\n.btn-instagram {\n  color: #ffffff;\n  background-color: #3f729b;\n}\n.btn-pinterest {\n  color: #ffffff;\n  background-color: #cb2027;\n}\n.btn-dropbox {\n  color: #ffffff;\n  background-color: #007ee5;\n}\n.btn-flickr {\n  color: #ffffff;\n  background-color: #ff0084;\n}\n.btn-tumblr {\n  color: #ffffff;\n  background-color: #32506d;\n}\n.btn-skype {\n  color: #ffffff;\n  background-color: #00aff0;\n}\n.btn-youtube {\n  color: #ffffff;\n  background-color: #bb0000;\n}\n.btn-github {\n  color: #ffffff;\n  background-color: #171515;\n}\n\n/*******************\nNotify\n*******************/\n.notify {\n  position: relative;\n  top: -25px;\n  right: -7px;\n}\n.notify .heartbit {\n  position: absolute;\n  top: -20px;\n  right: -4px;\n  height: 25px;\n  width: 25px;\n  z-index: 10;\n  border: 5px solid #f62d51;\n  border-radius: 70px;\n  -moz-animation: heartbit 1s ease-out;\n  -moz-animation-iteration-count: infinite;\n  -o-animation: heartbit 1s ease-out;\n  -o-animation-iteration-count: infinite;\n  -webkit-animation: heartbit 1s ease-out;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n.notify .point {\n  width: 6px;\n  height: 6px;\n  border-radius: 30px;\n  background-color: #f62d51;\n  position: absolute;\n  right: 6px;\n  top: -10px;\n}\n@-webkit-keyframes heartbit {\n0% {\n    -webkit-transform: scale(0);\n    opacity: 0;\n}\n25% {\n    -webkit-transform: scale(0.1);\n    opacity: 0.1;\n}\n50% {\n    -webkit-transform: scale(0.5);\n    opacity: 0.3;\n}\n75% {\n    -webkit-transform: scale(0.8);\n    opacity: 0.5;\n}\n100% {\n    -webkit-transform: scale(1);\n    opacity: 0;\n}\n}\n/*******************\nMegamenu\n******************/\n.mega-dropdown {\n  position: static;\n  width: 100%;\n}\n.mega-dropdown .dropdown-menu {\n  width: 100%;\n  padding: 30px;\n  margin-top: 0px;\n}\n.mega-dropdown ul {\n  padding: 0px;\n}\n.mega-dropdown ul li {\n  list-style: none;\n}\n.mega-dropdown .carousel-item .container {\n  padding: 0px;\n}\n.mega-dropdown .nav-accordion .card {\n  margin-bottom: 1px;\n}\n.mega-dropdown .nav-accordion .card-header {\n  background: #ffffff;\n}\n.mega-dropdown .nav-accordion .card-header h5 {\n  margin: 0px;\n}\n.mega-dropdown .nav-accordion .card-header h5 a {\n  text-decoration: none;\n  color: #54667a;\n}\n\n/*******************\nList-style-none\n******************/\nul.list-style-none {\n  margin: 0px;\n  padding: 0px;\n}\nul.list-style-none li {\n  list-style: none;\n}\nul.list-style-none li a {\n  color: #54667a;\n  padding: 8px 0px;\n  display: block;\n  text-decoration: none;\n}\nul.list-style-none li a:hover {\n  color: #009efb;\n}\n\n/*******************\ndropdown-item\n******************/\n.dropdown-item {\n  padding: 8px 1rem;\n  color: #54667a;\n}\n\n/*******************\nCustom-select\n******************/\n/*******************\ntextarea\n******************/\ntextarea {\n  resize: none;\n}\n\n/*******************\nForm-control\n******************/\n.form-control {\n  color: #54667a;\n  min-height: 38px;\n  display: initial;\n}\n.form-control-sm {\n  min-height: 20px;\n}\n.form-control:disabled, .form-control[readonly] {\n  opacity: 0.7;\n}\n.custom-control-input:focus ~ .custom-control-indicator {\n  box-shadow: none;\n}\n.custom-control-input:checked ~ .custom-control-indicator {\n  background-color: #55ce63;\n}\nform label {\n  font-weight: 400;\n}\n.form-group {\n  margin-bottom: 25px;\n}\n.form-horizontal label {\n  margin-bottom: 0px;\n}\n.form-control-static {\n  padding-top: 0px;\n}\n.form-bordered .form-group {\n  border-bottom: 1px solid rgba(120, 130, 140, 0.13);\n  padding-bottom: 20px;\n}\n\n/*******************\nLayouts\n******************/\n/*Card-noborders*/\n.card-no-border .card {\n  border: 0px;\n}\n.card-no-border .sidebar-footer {\n  background: #ffffff;\n}\n.card-no-border .page-wrapper {\n  background: #f2f7f8;\n}\n.card-no-border .left-sidebar {\n  box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.08);\n}\n.card-no-border .left-sidebar, .card-no-border .sidebar-nav {\n  background: #ffffff;\n}\n.card-no-border .sidebar-nav > ul > li > a.active {\n  background: #f2f7f8;\n}\n.card-no-border .shadow-none {\n  box-shadow: none;\n}\n.card-outline-danger, .card-outline-info, .card-outline-warning, .card-outline-success, .card-outline-primary {\n  background: #ffffff;\n}\n.card-no-border .card-group .card {\n  border: 1px solid rgba(120, 130, 140, 0.13);\n}\n.card-header {\n  background-color: #dae6e8;\n}\n\n/*******************/\n/*widgets -app*/\n/*******************/\n.css-bar:after {\n  z-index: 1;\n}\n.css-bar > i {\n  z-index: 10;\n}\n\n/*******************/\n/*single column*/\n/*******************/\n.single-column .left-sidebar {\n  display: none;\n}\n.single-column .page-wrapper {\n  margin-left: 0px;\n}\n\n/*******************/\n/*Documentation*/\n/*******************/\n.fix-width {\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n}\nul.common li {\n  display: inline-block;\n  line-height: 40px;\n  list-style: outside none none;\n  width: 48%;\n}\n\n/*\nTemplate Name: Monster Admin\nAuthor: Themedesigner\nEmail: niravjoshi87@gmail.com\nFile: scss\n*/\n/*============================================================== \n For all pages \n ============================================================== */\n.frontend-pages #main-wrapper {\n  width: 100%;\n}\n.frontend-pages .page-wrapper {\n  background: #fff;\n  margin-left: 0;\n}\n.frontend-pages .container-fluid {\n  padding: 25px 15px 0 15px;\n}\n.frontend-pages .display-7 {\n  font-size: 30px;\n  font-weight: 500;\n}\n.frontend-pages .m-t-80 {\n  margin-top: 80px;\n}\n.frontend-pages .m-b-80 {\n  margin-bottom: 80px;\n}\n.frontend-pages .p-t-80 {\n  padding-top: 80px;\n}\n.frontend-pages .p-b-80 {\n  padding-bottom: 80px;\n}\n.frontend-pages .p-y-80 {\n  padding-top: 80px;\n  padding-bottom: 80px;\n}\n.frontend-pages .p-t-60 {\n  padding-top: 60px;\n}\n.frontend-pages .p-b-60 {\n  padding-bottom: 60px;\n}\n.frontend-pages .p-y-60 {\n  padding-top: 60px;\n  padding-bottom: 60px;\n}\n.frontend-pages .light-grey {\n  background: #eaebec;\n}\n\n/*============================================================== \n Index page \n ============================================================== */\n.topheader {\n  padding: 15px 0px;\n  background: #ffffff;\n}\n.topheader .navbar-brand {\n  max-width: 150px;\n}\n.topheader .navbar-brand img {\n  height: auto;\n  max-height: 100px;\n  max-width: 100%;\n}\n.topheader .stylish-nav .nav-link {\n  padding: 0.5rem 10px;\n}\n.topheader .stylish-nav .nav-link.router-link-active {\n  color: #009efb;\n}\n.topheader .stylish-nav .nav-btn {\n  color: #fff;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  margin-left: 10px;\n  border-radius: 20px;\n  cursor: pointer;\n}\n.topheader .stylish-nav .nav-btn.success {\n  background: #55ce63;\n}\n.topheader .stylish-nav .nav-btn.info {\n  background: #009efb;\n}\n.topheader .stylish-nav .nav-btn.danger {\n  background: #f62d51;\n}\n.topheader .stylish-nav .nav-btn:hover {\n  color: #fff;\n}\n.topheader .stylish-nav .nav-btn:hover.success {\n  background: #4ab657;\n}\n.topheader .stylish-nav .nav-btn:hover.info {\n  background: #028ee1;\n}\n.topheader .stylish-nav .nav-btn:hover.danger {\n  background: #e6294b;\n}\n.fix-header .topheader {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);\n}\n.page-title {\n  margin-top: 100px;\n  padding: 80px 0;\n  background: #2e3c4a;\n  box-shadow: inset 0 2px 20px 0 rgba(0, 0, 0, 0.2);\n}\n.page-title h2 {\n  font-size: 2.2rem;\n  font-weight: 400;\n  letter-spacing: 1.5px;\n  color: #ffffff;\n}\n.main-banner .carousel-caption h2 {\n  color: #ffffff;\n  font-size: 34px;\n  font-weight: 400;\n  line-height: 44px;\n}\n.main-banner .carousel-caption p {\n  font-size: 20px;\n  line-height: 30px;\n  margin: 10px 0 30px;\n}\n.featured-block .featured {\n  background: rgba(0, 0, 0, 0.2);\n  text-align: center;\n  width: 100%;\n  overflow: hidden;\n  max-height: 300px;\n}\n.featured-block .featured i {\n  font-size: 100px;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.featured-block .featured img {\n  width: 100%;\n}\n.page-body {\n  text-align: justify;\n}\n.light-blue {\n  background: #ebf3f5;\n  padding: 80px 0;\n}\n.white-space {\n  background: #ffffff;\n  padding: 80px 0;\n}\n.image-box {\n  position: relative;\n}\n.image-box .image-overly {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  display: none;\n  padding-top: 30%;\n  background: rgba(255, 255, 255, 0.8);\n}\n.image-box:hover .image-overly {\n  display: block;\n}\n.icon-section h4 {\n  margin-top: 30px;\n  margin-bottom: 15px;\n}\n.dual-bg {\n  padding: 80px 0 0 0;\n}\n.testimonial-text {\n  margin: 0 auto;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  font-size: 17px;\n  line-height: 34px;\n}\n.call-to-action {\n  padding: 28px 0;\n  overflow: hidden;\n}\n.call-to-action span {\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 24px;\n  padding-top: 5px;\n}\n.call-to-action .buy-btn,\n.call-to-action .suggest-btn {\n  background: none;\n  border: 2px solid #ffffff;\n  padding: 12px 30px;\n  color: #ffffff;\n  margin-left: 10px;\n}\n.call-to-action .buy-btn:hover,\n.call-to-action .suggest-btn:hover {\n  color: #54667a;\n  background: #ffffff;\n  opacity: 1;\n}\nul.list-icons {\n  margin: 0px;\n  padding: 0px;\n}\nul.list-icons li {\n  list-style: none;\n  line-height: 40px;\n}\nul.list-icons li a {\n  color: #8f9aa5;\n}\nul.list-icons li a:hover {\n  color: #ffffff;\n}\nul.list-icons li a i {\n  font-size: 12px;\n  margin-right: 5px;\n}\n.frontend-footer {\n  padding: 50px 0 40px;\n  background: #2f3d4a;\n  color: #8f9aa5;\n}\n.frontend-footer .sub-footer {\n  margin-top: 60px;\n  border-top: 1px solid rgba(120, 130, 140, 0.13);\n  padding: 30px 0 0;\n}\n.frontend-footer a {\n  color: #d1dce6;\n}\n.dropdown:hover .dropdown-menu {\n  display: block;\n}\n@media (min-width: 768px) {\n.topheader .navbar-brand {\n    max-width: 250px;\n}\n}',
        "",
      ]);
    },
    qipm: function (n, o, t) {
      var e = t("du4o");
      "string" == typeof e && (e = [[n.i, e, ""]]);
      var r = { hmr: !0, transform: void 0, insertInto: void 0 };
      t("aET+")(e, r);
      e.locals && (n.exports = e.locals);
    },
  },
]);
//# sourceMappingURL=frontendPage.js.map?id=b6a8772bb33217054ca5
