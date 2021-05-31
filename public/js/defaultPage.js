(window.webpackJsonp = window.webpackJsonp || []).push([
  [162],
  {
    MCbz: function (s, e, a) {
      "use strict";
      a.r(e);
      var t = {
          components: {},
          mounted: function () {},
          methods: {
            logout: function () {
              var s = this;
              helper.logout().then(function () {
                s.$router.push("/login");
              });
            },
            getAuthUser: function (s) {
              return helper.getAuthUser(s);
            },
            getConfig: function (s) {
              return helper.getConfig(s);
            },
            hasPermission: function (s) {
              return helper.hasPermission(s);
            },
            hasRole: function (s) {
              return helper.hasRole(s);
            },
            setDefaultAcademicSession: function (s) {
              var e = this;
              axios
                .post("/api/academic/session/" + s.id + "/user/default")
                .then(function (a) {
                  e.$store.dispatch("setDefaultAcademicSession", s),
                    location.reload();
                })
                .catch(function (s) {
                  helper.showErrorMsg(s);
                });
            },
          },
          computed: {
            getIcon: function () {
              return helper.getIcon();
            },
            getAcademicSessions: function () {
              return helper.getAcademicSessions();
            },
            getDefaultAcademicSession: function () {
              return helper.getDefaultAcademicSession();
            },
            getAuthUserRoles: function () {
              return helper.ucword(this.$store.getters.getAuthUserRoles);
            },
          },
        },
        i = a("KHd+"),
        n = Object(i.a)(
          t,
          function () {
            var s = this,
              e = s.$createElement,
              a = s._self._c || e;
            return a("header", { staticClass: "topbar" }, [
              a(
                "nav",
                {
                  staticClass:
                    "navbar top-navbar navbar-expand-md navbar-light",
                },
                [
                  a(
                    "div",
                    { staticClass: "navbar-header white-sm" },
                    [
                      a(
                        "router-link",
                        { staticClass: "navbar-brand", attrs: { to: "/" } },
                        [a("img", { attrs: { src: s.getIcon } })]
                      ),
                    ],
                    1
                  ),
                  s._v(" "),
                  a("div", { staticClass: "navbar-collapse" }, [
                    a("ul", { staticClass: "navbar-nav mt-md-0 " }, [
                      s._m(0),
                      s._v(" "),
                      a(
                        "li",
                        {
                          directives: [
                            {
                              name: "tooltip",
                              rawName: "v-tooltip.right",
                              value: s.trans("general.toggle_sidebar"),
                              expression: "trans('general.toggle_sidebar')",
                              modifiers: { right: !0 },
                            },
                          ],
                          staticClass: "nav-item",
                        },
                        [s._m(1)]
                      ),
                      s._v(" "),
                      s.getConfig("maintenance_mode")
                        ? a(
                            "li",
                            { staticClass: "nav-item d-none d-sm-inline" },
                            [
                              a(
                                "span",
                                {
                                  staticClass: "mt-4 badge badge-danger m-b-10",
                                },
                                [
                                  s._v(
                                    s._s(
                                      s.trans("configuration.under_maintenance")
                                    )
                                  ),
                                ]
                              ),
                            ]
                          )
                        : s._e(),
                      s._v(" "),
                      s.getConfig("mode")
                        ? s._e()
                        : a(
                            "li",
                            { staticClass: "nav-item d-none d-sm-inline" },
                            [
                              a(
                                "span",
                                {
                                  staticClass: "mt-4 badge badge-danger m-b-10",
                                },
                                [s._v(s._s(s.trans("configuration.test_mode")))]
                              ),
                            ]
                          ),
                      s._v(" "),
                      a(
                        "li",
                        {
                          staticClass:
                            "nav-item hidden-sm-down d-none d-sm-inline",
                        },
                        [
                          a(
                            "a",
                            { staticClass: "nav-link", attrs: { href: "#" } },
                            [s._v(s._s(s.trans("general.any_search_title")))]
                          ),
                        ]
                      ),
                    ]),
                    s._v(" "),
                    a("ul", { staticClass: "navbar-nav flex-filler" }),
                    s._v(" "),
                    a("ul", { staticClass: "navbar-nav my-lg-0" }, [
                      s.getConfig("mode")
                        ? s._e()
                        : a(
                            "li",
                            { staticClass: "nav-item d-none d-md-inline" },
                            [s._m(2)]
                          ),
                      s._v(" "),
                      s.getAcademicSessions.length &&
                      s.hasPermission("change-academic-session")
                        ? a("li", { staticClass: "nav-item dropdown" }, [
                            a(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "tooltip",
                                    rawName: "v-tooltip.bottom",
                                    value: s.trans(
                                      "academic_session.academic_session"
                                    ),
                                    expression:
                                      "trans('academic_session.academic_session')",
                                    modifiers: { bottom: !0 },
                                  },
                                ],
                                staticClass:
                                  "nav-link dropdown-toggle text-muted waves-effect waves-dark",
                                attrs: {
                                  href: "",
                                  "data-toggle": "dropdown",
                                  "aria-haspopup": "true",
                                  "aria-expanded": "false",
                                },
                              },
                              [
                                s._v(
                                  s._s(
                                    s.getDefaultAcademicSession
                                      ? s.getDefaultAcademicSession.name
                                      : s.trans(
                                          "academic_session.choose_session"
                                        )
                                  ) + " "
                                ),
                                a("i", { staticClass: "fa fa-chevron-down" }),
                              ]
                            ),
                            s._v(" "),
                            a(
                              "div",
                              {
                                class: [
                                  "dropdown-menu",
                                  "rtl" != s.getConfig("direction")
                                    ? "dropdown-menu-right"
                                    : "",
                                ],
                              },
                              [
                                a(
                                  "ul",
                                  {
                                    staticClass: "dropdown-user",
                                    staticStyle: { "padding-bottom": "10px" },
                                  },
                                  [
                                    s._l(s.getAcademicSessions, function (e) {
                                      return a(
                                        "li",
                                        {
                                          staticStyle: {
                                            padding: "10px 20px 0 20px",
                                            cursor: "pointer",
                                          },
                                          on: {
                                            click: function (a) {
                                              return s.setDefaultAcademicSession(
                                                e
                                              );
                                            },
                                          },
                                        },
                                        [
                                          s._v(
                                            "\n                                " +
                                              s._s(e.name) +
                                              "\n                                "
                                          ),
                                          s.getDefaultAcademicSession &&
                                          e.id == s.getDefaultAcademicSession.id
                                            ? a(
                                                "span",
                                                { staticClass: "pull-right" },
                                                [
                                                  a("i", {
                                                    staticClass: "fas fa-check",
                                                  }),
                                                ]
                                              )
                                            : s._e(),
                                        ]
                                      );
                                    }),
                                    s._v(" "),
                                    s.hasPermission("create-academic-session")
                                      ? a(
                                          "li",
                                          {
                                            staticStyle: {
                                              padding: "10px 20px 0 20px",
                                              cursor: "pointer",
                                            },
                                            on: {
                                              click: function (e) {
                                                return s.$router.push(
                                                  "/academic/session"
                                                );
                                              },
                                            },
                                          },
                                          [
                                            s._v(
                                              s._s(
                                                s.trans(
                                                  "academic.add_new_session"
                                                )
                                              )
                                            ),
                                          ]
                                        )
                                      : s._e(),
                                  ],
                                  2
                                ),
                              ]
                            ),
                          ])
                        : s._e(),
                      s._v(" "),
                      s.getAcademicSessions.length &&
                      !s.hasPermission("change-academic-session")
                        ? a("li", { staticClass: "nav-item dropdown" }, [
                            a(
                              "a",
                              {
                                staticClass:
                                  "nav-link dropdown-toggle text-muted waves-effect waves-dark",
                                attrs: { href: "#" },
                              },
                              [
                                s._v(
                                  s._s(
                                    s.getDefaultAcademicSession
                                      ? s.getDefaultAcademicSession.name
                                      : ""
                                  )
                                ),
                              ]
                            ),
                          ])
                        : s._e(),
                      s._v(" "),
                      s.getConfig("todo") && s.hasPermission("access-todo")
                        ? a(
                            "li",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip.bottom",
                                  value: s.trans("todo.todo"),
                                  expression: "trans('todo.todo')",
                                  modifiers: { bottom: !0 },
                                },
                              ],
                              staticClass: "nav-item d-none d-sm-inline",
                            },
                            [
                              a(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: "/utility/todo" },
                                },
                                [a("i", { staticClass: "far fa-check-circle" })]
                              ),
                            ],
                            1
                          )
                        : s._e(),
                      s._v(" "),
                      s.hasPermission("access-configuration")
                        ? a(
                            "li",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip.bottom",
                                  value: s.trans("configuration.configuration"),
                                  expression:
                                    "trans('configuration.configuration')",
                                  modifiers: { bottom: !0 },
                                },
                              ],
                              staticClass: "nav-item",
                            },
                            [
                              a(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: "/configuration" },
                                },
                                [a("i", { staticClass: "fas fa-cogs" })]
                              ),
                            ],
                            1
                          )
                        : s._e(),
                      s._v(" "),
                      a("li", { staticClass: "nav-item dropdown" }, [
                        s._m(3),
                        s._v(" "),
                        a(
                          "div",
                          {
                            class: [
                              "dropdown-menu",
                              "rtl" != s.getConfig("user_direction")
                                ? "dropdown-menu-right"
                                : "",
                            ],
                          },
                          [
                            a(
                              "ul",
                              { staticClass: "dropdown-user" },
                              [
                                a("li", [
                                  a("div", { staticClass: "dw-user-box" }, [
                                    a("div", { staticClass: "u-text" }, [
                                      a("h6", [
                                        s._v(
                                          s._s(
                                            s.trans("general.greeting") +
                                              ", " +
                                              s.getAuthUser("name") +
                                              " (" +
                                              s.getAuthUserRoles +
                                              ")"
                                          )
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                ]),
                                s._v(" "),
                                a(
                                  "li",
                                  [
                                    a(
                                      "router-link",
                                      { attrs: { to: "/change/password" } },
                                      [
                                        a("i", { staticClass: "fas fa-key" }),
                                        s._v(
                                          " " +
                                            s._s(
                                              s.trans("user.change_password")
                                            )
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                s._v(" "),
                                s.getConfig("pb")
                                  ? [
                                      s.hasRole("admin")
                                        ? a(
                                            "li",
                                            [
                                              a(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: "/product/about",
                                                  },
                                                },
                                                [
                                                  a("i", {
                                                    staticClass:
                                                      "fas fa-user-tie",
                                                  }),
                                                  s._v(
                                                    " " +
                                                      s._s(
                                                        s.trans("general.about")
                                                      )
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          )
                                        : s._e(),
                                      s._v(" "),
                                      s.hasRole("admin")
                                        ? a(
                                            "li",
                                            [
                                              a(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: "/product/support",
                                                  },
                                                },
                                                [
                                                  a("i", {
                                                    staticClass:
                                                      "fas fa-life-ring",
                                                  }),
                                                  s._v(
                                                    " " +
                                                      s._s(
                                                        s.trans(
                                                          "general.support"
                                                        )
                                                      )
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          )
                                        : s._e(),
                                      s._v(" "),
                                      s.hasRole("admin")
                                        ? a(
                                            "li",
                                            [
                                              a(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: "/product/update",
                                                  },
                                                },
                                                [
                                                  a("i", {
                                                    staticClass:
                                                      "fas fa-download",
                                                  }),
                                                  s._v(
                                                    " " +
                                                      s._s(
                                                        s.trans(
                                                          "general.update"
                                                        )
                                                      )
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          )
                                        : s._e(),
                                    ]
                                  : s._e(),
                                s._v(" "),
                                a("li", {
                                  staticClass: "divider",
                                  attrs: { role: "separator" },
                                }),
                                s._v(" "),
                                a("li", [
                                  a(
                                    "a",
                                    {
                                      attrs: { href: "#" },
                                      on: {
                                        click: function (e) {
                                          return (
                                            e.preventDefault(), s.logout(e)
                                          );
                                        },
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass: "fas fa-power-off",
                                      }),
                                      s._v(" " + s._s(s.trans("auth.logout"))),
                                    ]
                                  ),
                                ]),
                              ],
                              2
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ]);
          },
          [
            function () {
              var s = this.$createElement,
                e = this._self._c || s;
              return e("li", { staticClass: "nav-item" }, [
                e(
                  "a",
                  {
                    staticClass:
                      "nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark",
                    attrs: { href: "javascript:void(0)" },
                  },
                  [e("i", { staticClass: "fas fa-bars" })]
                ),
              ]);
            },
            function () {
              var s = this.$createElement,
                e = this._self._c || s;
              return e(
                "a",
                {
                  staticClass:
                    "nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark",
                  attrs: { href: "javascript:void(0)" },
                },
                [e("i", { staticClass: "icon-arrow-left-circle fas" })]
              );
            },
            function () {
              var s = this.$createElement,
                e = this._self._c || s;
              return e(
                "a",
                {
                  staticClass: "nav-link",
                  attrs: { href: "https://instikit.com/buy/regular" },
                },
                [
                  e("i", { staticClass: "fas fa-shopping-cart" }),
                  this._v(" Buy Now"),
                ]
              );
            },
            function () {
              var s = this.$createElement,
                e = this._self._c || s;
              return e(
                "a",
                {
                  staticClass:
                    "nav-link dropdown-toggle text-muted waves-effect waves-dark",
                  attrs: {
                    href: "",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false",
                  },
                },
                [e("i", { staticClass: "fas fa-user" })]
              );
            },
          ],
          !1,
          null,
          null,
          null
        ).exports,
        r = {
          methods: {
            hasPermission: function (s) {
              return helper.hasPermission(s);
            },
            hasAnyPermission: function (s) {
              return helper.hasAnyPermission(s);
            },
            hasRole: function (s) {
              return helper.hasRole(s);
            },
            hasNotAnyRole: function (s) {
              return helper.hasNotAnyRole(s);
            },
            getConfig: function (s) {
              return helper.getConfig(s);
            },
            showMenu: function (s) {
              var e = helper.getConfig("menu");
              return !!(
                Array.isArray(e) &&
                e.findIndex(function (e) {
                  return e === s;
                }) >= 0
              );
            },
          },
          computed: {
            configMenu: function () {
              return "configuration" == this.$route.meta.menu;
            },
            moduleConfigMenu: function () {
              return "module-configuration" == this.$route.meta.menu;
            },
            moduleMenu: function () {
              return (
                "configuration" != this.$route.meta.menu &&
                "module-configuration" != this.$route.meta.menu
              );
            },
            hasExamReportAnalysis: function () {
              var s = helper.getDefaultAcademicSession();
              return !(!s || !s.exam_report_analysis);
            },
          },
        },
        o = {
          components: {
            mainMenu: Object(i.a)(
              r,
              function () {
                var s = this,
                  e = s.$createElement,
                  a = s._self._c || e;
                return a("ul", { attrs: { id: "sidebarnav" } }, [
                  a(
                    "li",
                    [
                      a(
                        "router-link",
                        { attrs: { to: "/dashboard", exact: "" } },
                        [
                          a("i", { staticClass: "fas fa-home fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("general.dashboard"))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.configMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "configMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "router-link",
                        { attrs: { to: "/configuration/basic", exact: "" } },
                        [
                          a("i", { staticClass: "fas fa-cog fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(
                              s._s(s.trans("configuration.basic_configuration"))
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.configMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "configMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "router-link",
                        { attrs: { to: "/configuration/social", exact: "" } },
                        [
                          a("i", { staticClass: "fas fa-share-alt fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("configuration.social_network"))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.configMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "configMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "router-link",
                        { attrs: { to: "/configuration/system", exact: "" } },
                        [
                          a("i", { staticClass: "fas fa-cogs fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(
                              s._s(
                                s.trans("configuration.system_configuration")
                              )
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.configMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "configMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "router-link",
                        { attrs: { to: "/configuration/mail", exact: "" } },
                        [
                          a("i", { staticClass: "fas fa-envelope fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(
                              s._s(s.trans("configuration.mail_configuration"))
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.configMenu &&
                            s.hasPermission("access-configuration") &&
                            s.getConfig("multilingual"),
                          expression:
                            "configMenu && hasPermission('access-configuration') && getConfig('multilingual')",
                        },
                      ],
                    },
                    [
                      a(
                        "router-link",
                        { attrs: { to: "/configuration/locale", exact: "" } },
                        [
                          a("i", { staticClass: "fas fa-globe fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("configuration.locale"))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.configMenu &&
                            s.hasPermission("access-configuration") &&
                            s.hasRole("admin"),
                          expression:
                            "configMenu && hasPermission('access-configuration') && hasRole('admin')",
                        },
                      ],
                    },
                    [
                      a(
                        "router-link",
                        { attrs: { to: "/configuration/role", exact: "" } },
                        [
                          a("i", { staticClass: "fas fa-users fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("configuration.role"))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.configMenu &&
                            s.hasPermission("access-configuration") &&
                            s.hasRole("admin"),
                          expression:
                            "configMenu && hasPermission('access-configuration') && hasRole('admin')",
                        },
                      ],
                    },
                    [
                      a(
                        "router-link",
                        {
                          attrs: { to: "/configuration/permission", exact: "" },
                        },
                        [
                          a("i", { staticClass: "fas fa-key fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("configuration.permission"))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.configMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "configMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "router-link",
                        { attrs: { to: "/configuration/sms", exact: "" } },
                        [
                          a("i", { staticClass: "fas fa-comment fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("configuration.sms"))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.configMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "configMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "router-link",
                        {
                          attrs: {
                            to: "/configuration/payment/gateway",
                            exact: "",
                          },
                        },
                        [
                          a("i", { staticClass: "fas fa-credit-card fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("finance.payment_gateway"))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.configMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "configMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "router-link",
                        {
                          attrs: {
                            to: "/configuration/authentication",
                            exact: "",
                          },
                        },
                        [
                          a("i", { staticClass: "fas fa-sign-in-alt fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("auth.authentication"))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.configMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "configMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "router-link",
                        { attrs: { to: "/configuration/menu", exact: "" } },
                        [
                          a("i", { staticClass: "fas fa-ellipsis-h fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("configuration.menu"))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.configMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "configMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "router-link",
                        { attrs: { to: "/configuration/module", exact: "" } },
                        [
                          a("i", { staticClass: "fas fa-boxes fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(
                              s._s(
                                s.trans("configuration.module_configuration")
                              )
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleConfigMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "moduleConfigMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-user-circle fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(
                              s._s(s.trans("reception.reception_configuration"))
                            ),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/reception/enquiry/type",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " +
                                      s._s(s.trans("reception.enquiry_type"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/reception/enquiry/source",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " +
                                      s._s(s.trans("reception.enquiry_source"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/reception/visiting/purpose",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " +
                                      s._s(
                                        s.trans("reception.visiting_purpose")
                                      )
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/reception/calling/purpose",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " +
                                      s._s(s.trans("reception.calling_purpose"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/reception/complaint/type",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " +
                                      s._s(s.trans("reception.complaint_type"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleConfigMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "moduleConfigMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-school fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(
                              s._s(s.trans("academic.academic_configuration"))
                            ),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/academic/course/group",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " + s._s(s.trans("academic.course_group"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/academic/institute",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " +
                                      s._s(s.trans("academic.institute_other"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/academic/certificate/template",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" "),
                                  a("span", { staticClass: "font-90pc" }, [
                                    s._v(
                                      s._s(
                                        s.trans("academic.certificate_template")
                                      )
                                    ),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/academic/id-card/template",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" "),
                                  a("span", { staticClass: "font-90pc" }, [
                                    s._v(
                                      s._s(s.trans("academic.id_card_template"))
                                    ),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleConfigMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "moduleConfigMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", {
                            staticClass: "fas fa-money-bill-alt fa-fw",
                          }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(
                              s._s(s.trans("finance.finance_configuration"))
                            ),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/finance/transaction/category",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" "),
                                  a("span", { staticClass: "font-90pc" }, [
                                    s._v(
                                      s._s(
                                        s.trans("finance.transaction_category")
                                      )
                                    ),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/finance/payment/method",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " +
                                      s._s(s.trans("finance.payment_method"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleConfigMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "moduleConfigMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", {
                            staticClass: "fas fa-graduation-cap fa-fw",
                          }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(
                              s._s(s.trans("student.student_configuration"))
                            ),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                { attrs: { to: "/configuration/student" } },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" " + s._s(s.trans("general.general"))),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: { to: "/configuration/student/group" },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " + s._s(s.trans("student.student_group"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/student/document/type",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " +
                                      s._s(
                                        s.trans("student.document_type_only")
                                      )
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleConfigMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "moduleConfigMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-file-alt fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("exam.configuration"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                { attrs: { to: "/configuration/exam/term" } },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" " + s._s(s.trans("exam.term"))),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/exam/assessment",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" " + s._s(s.trans("exam.assessment"))),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/exam/observation",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" "),
                                  a("span", { staticClass: "font-80pc" }, [
                                    s._v(s._s(s.trans("exam.observation"))),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                { attrs: { to: "/configuration/exam/grade" } },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" " + s._s(s.trans("exam.grade"))),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleConfigMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "moduleConfigMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-user-tie fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(
                              s._s(s.trans("employee.employee_configuration"))
                            ),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                { attrs: { to: "/configuration/employee" } },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" " + s._s(s.trans("general.general"))),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/employee/category",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" "),
                                  a("span", { staticClass: "font-90pc" }, [
                                    s._v(s._s(s.trans("employee.category"))),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/employee/designation",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " + s._s(s.trans("employee.designation"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/employee/department",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " + s._s(s.trans("employee.department"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/employee/group",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " +
                                      s._s(s.trans("employee.employee_group"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/employee/document/type",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " +
                                      s._s(
                                        s.trans("employee.document_type_only")
                                      )
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/employee/leave/type",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " + s._s(s.trans("employee.leave_type"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/employee/attendance/type",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " +
                                      s._s(s.trans("employee.attendance_type"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/employee/pay/head",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " + s._s(s.trans("employee.pay_head"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleConfigMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "moduleConfigMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-truck fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(
                              s._s(s.trans("transport.transport_configuration"))
                            ),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/transport/vehicle/document/type",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " +
                                      s._s(
                                        s.trans(
                                          "transport.vehicle_document_type_only"
                                        )
                                      )
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/transport/vehicle/fuel/type",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " +
                                      s._s(
                                        s.trans("transport.vehicle_fuel_type")
                                      )
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/transport/vehicle/service/center",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " +
                                      s._s(
                                        s.trans(
                                          "transport.vehicle_service_center_only"
                                        )
                                      )
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleConfigMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "moduleConfigMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-book fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(
                              s._s(s.trans("library.library_configuration"))
                            ),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                { attrs: { to: "/configuration/library" } },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" " + s._s(s.trans("general.general"))),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/library/book/author",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " + s._s(s.trans("library.book_author"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/library/book/language",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " + s._s(s.trans("library.book_language"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/library/book/topic",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " + s._s(s.trans("library.book_topic"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/library/book/publisher",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " +
                                      s._s(s.trans("library.book_publisher"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/library/book/condition",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " +
                                      s._s(s.trans("library.book_condition"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleConfigMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "moduleConfigMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-calendar-alt fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(
                              s._s(s.trans("calendar.calendar_configuration"))
                            ),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/calendar/event/type",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " + s._s(s.trans("calendar.event_type"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleConfigMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "moduleConfigMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-newspaper fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("post.post_configuration"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/post/article/type",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " + s._s(s.trans("post.article_type"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleConfigMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "moduleConfigMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-building fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("asset.asset_configuration"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/asset/building",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" " + s._s(s.trans("asset.building"))),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                { attrs: { to: "/configuration/asset/room" } },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" " + s._s(s.trans("asset.room"))),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleConfigMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "moduleConfigMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-suitcase fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(
                              s._s(s.trans("frontend.frontend_configuration"))
                            ),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/frontend/index",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(
                                    " " + s._s(s.trans("frontend.frontend"))
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleConfigMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "moduleConfigMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "router-link",
                        {
                          staticClass: "has-arrow",
                          attrs: {
                            to: "/configuration/custom-field",
                            "aria-expanded": "false",
                          },
                        },
                        [
                          a("i", { staticClass: "fas fa-cubes fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("configuration.custom_field"))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleConfigMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "moduleConfigMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-align-justify fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("misc.misc_configuration"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: { to: "/configuration/misc/religion" },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" " + s._s(s.trans("misc.religion"))),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                { attrs: { to: "/configuration/misc/caste" } },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" " + s._s(s.trans("misc.caste"))),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: { to: "/configuration/misc/category" },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" " + s._s(s.trans("misc.category"))),
                                ]
                              ),
                            ],
                            1
                          ),
                          s._v(" "),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/configuration/misc/blood/group",
                                  },
                                },
                                [
                                  a("i", {
                                    staticClass: "fas fa-angle-double-right",
                                  }),
                                  s._v(" " + s._s(s.trans("misc.blood_group"))),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.showMenu("institute_document") &&
                            s.hasPermission("list-institute-document"),
                          expression:
                            "moduleMenu && showMenu('institute_document') && hasPermission('list-institute-document')",
                        },
                      ],
                    },
                    [
                      a(
                        "router-link",
                        { attrs: { to: "/institute/document", exact: "" } },
                        [
                          a("i", { staticClass: "fas fa-file fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("institute.document"))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.showMenu("reception") &&
                            s.hasAnyPermission([
                              "list-enquiry",
                              "list-visitor-log",
                              "list-postal-record",
                              "list-call-log",
                              "list-complaint",
                              "list-gate-pass",
                            ]),
                          expression:
                            "moduleMenu && showMenu('reception') && hasAnyPermission(['list-enquiry','list-visitor-log','list-postal-record','list-call-log','list-complaint','list-gate-pass'])",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-user-circle fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("reception.reception"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          s.hasPermission("list-enquiry") &&
                          s.showMenu("enquiry")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/reception/enquiry" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans(
                                              "reception.admission_enquiry"
                                            )
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-visitor-log") &&
                          s.showMenu("visitor_log")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/reception/visitor/log" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("reception.visitor_log"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-call-log") &&
                          s.showMenu("call_log")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/reception/call/log" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("reception.call_log"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-postal-record") &&
                          s.showMenu("postal_record")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: { to: "/reception/postal/record" },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans("reception.postal_record")
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-complaint") &&
                          s.showMenu("complaint")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/reception/complaint" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("reception.complaint"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-gate-pass") &&
                          s.showMenu("gate_pass")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/reception/gate/pass" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("reception.gate_pass"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-visitor-message") &&
                          s.showMenu("visitor_message")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/reception/visitor/message",
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans("reception.visitor_message")
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.showMenu("academic") &&
                            s.hasAnyPermission([
                              "list-academic-session",
                              "list-course",
                              "list-batch",
                              "list-class-teacher",
                              "list-subject",
                              "list-subject-teacher",
                              "list-class-timing",
                              "list-timetable",
                            ]),
                          expression:
                            "moduleMenu && showMenu('academic') && hasAnyPermission(['list-academic-session','list-course','list-batch','list-class-teacher','list-subject','list-subject-teacher','list-class-timing','list-timetable'])",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-school fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("academic.academic"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          s.hasPermission("list-academic-session") &&
                          s.showMenu("academic_session")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/academic/session" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans("academic.academic_session")
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-course") && s.showMenu("course")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/academic/course" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("academic.course"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-batch") && s.showMenu("batch")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/academic/batch" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("academic.batch"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-class-teacher") &&
                          s.showMenu("class_teacher")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: { to: "/academic/class/teacher" },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans("academic.class_teacher")
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-subject") &&
                          s.showMenu("subject")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/academic/subject" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("academic.subject"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-subject-teacher") &&
                          s.showMenu("subject_teacher")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/academic/subject/teacher",
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans("academic.subject_teacher")
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-class-timing") &&
                          s.showMenu("class_timing")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/academic/class/timing" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("academic.class_timing"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-timetable") &&
                          s.showMenu("timetable")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/academic/timetable" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("academic.timetable"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-certificate") &&
                          s.showMenu("certificate")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/academic/certificate" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("academic.certificate"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.showMenu("student") &&
                            s.hasAnyPermission([
                              "list-registration",
                              "list-student",
                              "edit-roll-number",
                              "generate-student-id-card",
                              "list-student-attendance",
                              "promote-student",
                              "terminate-student",
                            ]),
                          expression:
                            "moduleMenu && showMenu('student') && hasAnyPermission(['list-registration','list-student','edit-roll-number','generate-student-id-card','list-student-attendance','promote-student','terminate-student'])",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", {
                            staticClass: "fas fa-graduation-cap fa-fw",
                          }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("student.student"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          s.hasPermission("import-student") &&
                          s.showMenu("student_import")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/student/import" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("student.import"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-registration") &&
                          s.showMenu("registration")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/student/registration/card-view",
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("student.registration"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          (s.hasPermission("list-student") ||
                            s.hasPermission(
                              "list-class-teacher-wise-student"
                            )) &&
                          s.showMenu("student_list")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/student/card-view" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("student.student_list"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("edit-roll-number") &&
                          s.showMenu("roll_number")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/student/roll/number" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("student.roll_number"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("generate-student-id-card") &&
                          s.showMenu("student_id_card")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/student/id-card" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("student.id_card"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("edit-student") &&
                          s.showMenu("student_image_upload")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/student/image" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("student.image_upload"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-student-attendance") &&
                          s.showMenu("student_attendance")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/student/attendance" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("student.attendance"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("promote-student") &&
                          s.showMenu("promotion")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/student/promotion" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("student.promotion"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("terminate-student") &&
                          s.showMenu("termination")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/student/termination" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("student.termination"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("edit-student") &&
                          s.showMenu("student_parent")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/student/parent" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("student.parent"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("edit-student") &&
                          s.showMenu("student_login")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/student/login" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(" "),
                                      a("small", [
                                        s._v(s._s(s.trans("student.login"))),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.showMenu("employee") &&
                            s.hasAnyPermission([
                              "list-employee",
                              "generate-employee-id-card",
                            ]),
                          expression:
                            "moduleMenu && showMenu('employee') && hasAnyPermission(['list-employee', 'generate-employee-id-card'])",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-user-tie fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("employee.employee"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          s.hasPermission("import-employee") &&
                          s.showMenu("employee_import")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/employee/import" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("employee.import"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.showMenu("employee_list")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/employee/card-view" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans("employee.employee_list")
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("generate-employee-id-card") &&
                          s.showMenu("employee_id_card")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/employee/id-card" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("employee.id_card"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.showMenu("employee_attendance")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/employee/attendance" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("employee.attendance"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.showMenu("employee_leave")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/employee/leave" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("employee.leave"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.showMenu("employee_payroll")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/employee/payroll" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("employee.payroll"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.showMenu("exam") &&
                            s.hasAnyPermission([
                              "list-exam-schedule",
                              "list-exam-mark",
                              "access-exam-report",
                              "access-class-teacher-wise-exam-report",
                              "list-online-exam",
                            ]),
                          expression:
                            "moduleMenu && showMenu('exam') && hasAnyPermission(['list-exam-schedule','list-exam-mark','access-exam-report','access-class-teacher-wise-exam-report','list-online-exam'])",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-file-alt fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("exam.exam"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          s.hasPermission("list-exam-schedule") &&
                          s.showMenu("exam_schedule")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/exam/schedule" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("exam.schedule"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-exam-mark") &&
                          s.showMenu("exam_record_mark")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/exam/record" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(" " + s._s(s.trans("exam.record"))),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasAnyPermission([
                            "access-exam-report",
                            "access-class-teacher-wise-exam-report",
                          ]) && s.showMenu("exam_report_card")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/exam/report" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(" " + s._s(s.trans("exam.report"))),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasNotAnyRole(["student", "parent"]) &&
                          s.showMenu("exam_topper_report")
                            ? [
                                s.hasAnyPermission([
                                  "access-exam-report",
                                  "access-class-teacher-wise-exam-report",
                                ])
                                  ? a(
                                      "li",
                                      [
                                        a(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: "/exam/report/topper",
                                            },
                                          },
                                          [
                                            a("i", {
                                              staticClass:
                                                "fas fa-angle-double-right",
                                            }),
                                            s._v(
                                              " " +
                                                s._s(
                                                  s.trans("exam.topper_report")
                                                )
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  : s._e(),
                              ]
                            : s._e(),
                          s._v(" "),
                          s.hasExamReportAnalysis
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/exam/report/analysis" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("exam.report_analysis"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-online-exam") &&
                          s.showMenu("online_exam")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/online-exam" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("exam.online_exam"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                        ],
                        2
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.showMenu("finance") &&
                            s.hasAnyPermission([
                              "list-transport-fee",
                              "list-fee-group",
                              "list-fee-head",
                              "list-fee-allocation",
                              "list-fee-concession",
                              "list-account",
                              "list-income",
                              "list-expense",
                              "list-account-transfer",
                            ]),
                          expression:
                            "moduleMenu && showMenu('finance') && hasAnyPermission(['list-transport-fee','list-fee-group','list-fee-head','list-fee-allocation','list-fee-concession','list-account','list-income','list-expense','list-account-transfer'])",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", {
                            staticClass: "fas fa-money-bill-alt fa-fw",
                          }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("finance.finance"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          s.hasPermission("list-fee-group") &&
                          s.showMenu("fee_group")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/finance/fee/group" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("finance.fee_group"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-fee-head") &&
                          s.showMenu("fee_head")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/finance/fee/head" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("finance.fee_head"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-transport-fee") &&
                          s.showMenu("transport_fee")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/transport/fee" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("transport.fee"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-fee-concession") &&
                          s.showMenu("fee_concession")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: { to: "/finance/fee/concession" },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans("finance.fee_concession")
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-fee-allocation") &&
                          s.showMenu("fee_allocation")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: { to: "/finance/fee/allocation" },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans("finance.fee_allocation")
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-account") &&
                          s.showMenu("account")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/finance/account" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("finance.account"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-income") && s.showMenu("income")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/finance/transaction/income",
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("finance.income"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-expense") &&
                          s.showMenu("expense")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/finance/transaction/expense",
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("finance.expense"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-account-transfer") &&
                          s.showMenu("account_transfer")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/finance/transaction/account/transfer",
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans("finance.account_transfer")
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.showMenu("finance_report")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/finance/report" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("general.report"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.showMenu("transport") &&
                            s.hasAnyPermission([
                              "list-vehicle",
                              "list-vehicle-incharge",
                              "list-vehicle-document",
                              "list-vehicle-log",
                              "list-vehicle-service-record",
                              "list-vehicle-fuel",
                            ]),
                          expression:
                            "moduleMenu && showMenu('transport') && hasAnyPermission(['list-vehicle','list-vehicle-incharge','list-vehicle-document','list-vehicle-log','list-vehicle-service-record','list-vehicle-fuel'])",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-truck fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("transport.transport"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          s.showMenu("transport_route")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/transport/route" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("transport.route"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-vehicle") &&
                          s.showMenu("vehicle")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/transport/vehicle" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("transport.vehicle"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-vehicle-incharge") &&
                          s.showMenu("vehicle_incharge")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/transport/vehicle/incharge",
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans(
                                              "transport.vehicle_incharge"
                                            )
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-vehicle-document") &&
                          s.showMenu("vehicle_document")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/transport/vehicle/document",
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("transport.document"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-vehicle-fuel") &&
                          s.showMenu("vehicle_fuel")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: { to: "/transport/vehicle/fuel" },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("transport.fuel"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-vehicle-log") &&
                          s.showMenu("vehicle_log")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/transport/vehicle/log" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("transport.log"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-vehicle-service-record") &&
                          s.showMenu("vehicle_service_record")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/transport/vehicle/service/record",
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans("transport.service_record")
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("access-transport-report") &&
                          s.showMenu("transport_report")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/transport/report" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("general.report"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.showMenu("calendar") &&
                            s.hasAnyPermission(["list-holiday", "list-event"]),
                          expression:
                            "moduleMenu && showMenu('calendar') && hasAnyPermission(['list-holiday','list-event'])",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-calendar-alt fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("calendar.calendar"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          s.hasPermission("list-holiday") &&
                          s.showMenu("holiday")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/calendar/holiday" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("calendar.holiday"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-event") && s.showMenu("event")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/calendar/event" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("calendar.event"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasAnyPermission([
                            "list-birthday",
                            "list-anniversary",
                            "list-work-anniversary",
                          ]) && s.showMenu("celebration")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/calendar/celebration/birthday",
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("calendar.celebration"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.showMenu("resource") &&
                            s.hasAnyPermission([
                              "list-assignment",
                              "list-notes",
                              "list-lesson-plan",
                              "list-syllabus",
                            ]),
                          expression:
                            "moduleMenu && showMenu('resource') && hasAnyPermission(['list-assignment','list-notes','list-lesson-plan','list-syllabus'])",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-folder fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("resource.resource"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          s.hasPermission("list-assignment") &&
                          s.showMenu("assignment")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/resource/assignment" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("resource.assignment"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-notes") && s.showMenu("notes")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/resource/notes" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("resource.notes"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-lesson-plan") &&
                          s.showMenu("lesson_plan")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/resource/lesson/plan" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("resource.lesson_plan"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-syllabus") &&
                          s.showMenu("syllabus")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/resource/syllabus" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("resource.syllabus"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.showMenu("library") &&
                            s.hasAnyPermission([
                              "list-book",
                              "issue-book",
                              "return-book",
                            ]),
                          expression:
                            "moduleMenu && showMenu('library') && hasAnyPermission(['list-book','issue-book','return-book'])",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-book fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("library.library"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          s.hasPermission("list-book") && s.showMenu("book")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/library/book" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(" " + s._s(s.trans("library.book"))),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("issue-book") &&
                          s.showMenu("issue_book")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/library/issue" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("library.issue"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("return-book") &&
                          s.showMenu("return_book")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/library/return" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("library.return"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.showMenu("inventory") &&
                            s.hasAnyPermission([
                              "list-stock-category",
                              "list-stock-item",
                              "list-vendor",
                              "list-stock-purchase",
                              "list-stock-transfer",
                            ]),
                          expression:
                            "moduleMenu && showMenu('inventory') && hasAnyPermission(['list-stock-category', 'list-stock-item','list-vendor','list-stock-purchase','list-stock-transfer'])",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-box fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("inventory.inventory"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          s.hasPermission("list-stock-category") &&
                          s.showMenu("stock_category")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/inventory/stock/category",
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans("inventory.stock_category")
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-stock-item") &&
                          s.showMenu("stock_item")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/inventory/stock/item" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("inventory.stock_item"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-vendor") && s.showMenu("vendor")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/inventory/vendor" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("inventory.vendor"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-stock-purchase") &&
                          s.showMenu("stock_purchase")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/inventory/stock/purchase",
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans("inventory.stock_purchase")
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-stock-transfer") &&
                          s.showMenu("stock_transfer")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/inventory/stock/transfer",
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans("inventory.stock_transfer")
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.showMenu("post") &&
                            s.hasPermission("list-article"),
                          expression:
                            "moduleMenu && showMenu('post') && hasPermission('list-article')",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-newspaper fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("post.post"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          s.showMenu("post_feed")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/post/feed" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(" " + s._s(s.trans("post.feed"))),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.showMenu("article")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/post/article" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(" " + s._s(s.trans("post.article"))),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.showMenu("communication") &&
                            s.hasAnyPermission([
                              "send-sms",
                              "send-email",
                              "send-push-notification",
                              "list-meeting",
                            ]),
                          expression:
                            "moduleMenu && showMenu('communication') && hasAnyPermission(['send-sms','send-email','send-push-notification', 'list-meeting'])",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-paper-plane fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("communication.communication"))),
                          ]),
                          s._v(" "),
                          s._m(0),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          s.hasPermission("create-meeting") &&
                          s.showMenu("meeting")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/communication/meeting" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("communication.meeting"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("list-meeting") &&
                          s.showMenu("my_meeting")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/communication/my-meeting",
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans("communication.my_meeting")
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.showMenu("communication_history") &&
                          s.hasAnyPermission([
                            "send-sms",
                            "send-email",
                            "send-push-notification",
                          ])
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/communication" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("communication.history"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.showMenu("my_notification")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/communication/notification",
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans(
                                              "communication.my_notification"
                                            )
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("send-sms") && s.showMenu("send_sms")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/communication/sms" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("communication.sms"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("send-email") &&
                          s.showMenu("send_email")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/communication/email" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(s.trans("communication.email"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("send-push-notification") &&
                          s.showMenu("send_push_notification")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: "/communication/push-notification",
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " +
                                          s._s(
                                            s.trans(
                                              "communication.push_notification"
                                            )
                                          )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.showMenu("frontend") &&
                            s.hasPermission("configure-frontend"),
                          expression:
                            "moduleMenu && showMenu('frontend') && hasPermission('configure-frontend')",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-suitcase fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("frontend.frontend"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          s.showMenu("frontend_page")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/frontend/page" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("frontend.page"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.showMenu("frontend_block")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/frontend/block" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("frontend.block"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.showMenu("frontend_menu")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/frontend/menu" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(
                                        " " + s._s(s.trans("frontend.menu"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                        ]
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.showMenu("utility") &&
                            s.hasAnyPermission([
                              "access-todo",
                              "access-configuration",
                            ]),
                          expression:
                            "moduleMenu && showMenu('utility') && hasAnyPermission(['access-todo','access-configuration'])",
                        },
                      ],
                    },
                    [
                      a(
                        "a",
                        {
                          staticClass: "has-arrow",
                          attrs: { href: "#", "aria-expanded": "false" },
                        },
                        [
                          a("i", { staticClass: "fas fa-puzzle-piece fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("utility.utility"))),
                          ]),
                        ]
                      ),
                      s._v(" "),
                      a(
                        "ul",
                        {
                          staticClass: "collapse",
                          attrs: { "aria-expanded": "false" },
                        },
                        [
                          s.hasPermission("access-todo") && s.showMenu("todo")
                            ? a(
                                "li",
                                [
                                  a(
                                    "router-link",
                                    { attrs: { to: "/utility/todo" } },
                                    [
                                      a("i", {
                                        staticClass:
                                          "fas fa-angle-double-right",
                                      }),
                                      s._v(" " + s._s(s.trans("utility.todo"))),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : s._e(),
                          s._v(" "),
                          s.hasPermission("access-configuration")
                            ? [
                                s.showMenu("backup")
                                  ? a(
                                      "li",
                                      [
                                        a(
                                          "router-link",
                                          { attrs: { to: "/utility/backup" } },
                                          [
                                            a("i", {
                                              staticClass:
                                                "fas fa-angle-double-right",
                                            }),
                                            s._v(
                                              " " +
                                                s._s(s.trans("utility.backup"))
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  : s._e(),
                                s._v(" "),
                                s.showMenu("ip_filter")
                                  ? a(
                                      "li",
                                      [
                                        a(
                                          "router-link",
                                          {
                                            attrs: { to: "/utility/ip-filter" },
                                          },
                                          [
                                            a("i", {
                                              staticClass:
                                                "fas fa-angle-double-right",
                                            }),
                                            s._v(
                                              " " +
                                                s._s(
                                                  s.trans("utility.ip_filter")
                                                )
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  : s._e(),
                              ]
                            : s._e(),
                        ],
                        2
                      ),
                    ]
                  ),
                  s._v(" "),
                  a(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            s.moduleMenu &&
                            s.hasPermission("access-configuration"),
                          expression:
                            "moduleMenu && hasPermission('access-configuration')",
                        },
                      ],
                    },
                    [
                      a(
                        "router-link",
                        { attrs: { to: "/configuration", exact: "" } },
                        [
                          a("i", { staticClass: "fas fa-cogs fa-fw" }),
                          s._v(" "),
                          a("span", { staticClass: "hide-menu" }, [
                            s._v(s._s(s.trans("configuration.configuration"))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ]);
              },
              [
                function () {
                  var s = this.$createElement,
                    e = this._self._c || s;
                  return e(
                    "span",
                    { staticClass: "label label-rounded label-danger" },
                    [e("small", [this._v("New")])]
                  );
                },
              ],
              !1,
              null,
              null,
              null
            ).exports,
          },
          mounted: function () {},
          methods: {
            logout: function () {
              var s = this;
              helper.logout().then(function () {
                s.$router.push("/login");
              });
            },
            getAuthUser: function (s) {
              return helper.getAuthUser(s);
            },
            hasPermission: function (s) {
              return helper.hasPermission(s);
            },
            getConfig: function (s) {
              return helper.getConfig(s);
            },
          },
          computed: {},
        },
        l = Object(i.a)(
          o,
          function () {
            var s = this,
              e = s.$createElement,
              a = s._self._c || e;
            return a("aside", { staticClass: "left-sidebar" }, [
              a("div", { staticClass: "scroll-sidebar" }, [
                a("nav", { staticClass: "sidebar-nav" }, [a("main-menu")], 1),
              ]),
              s._v(" "),
              a(
                "div",
                { staticClass: "sidebar-footer" },
                [
                  s.hasPermission("access-configuration")
                    ? a(
                        "router-link",
                        {
                          directives: [
                            {
                              name: "tooltip",
                              rawName: "v-tooltip",
                              value: s.trans("configuration.configuration"),
                              expression:
                                "trans('configuration.configuration')",
                            },
                          ],
                          staticClass: "link",
                          attrs: { to: "/configuration" },
                        },
                        [a("i", { staticClass: "fas fa-cogs" })]
                      )
                    : s._e(),
                  s._v(" "),
                  a(
                    "router-link",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip",
                          value: s.trans("user.change_password"),
                          expression: "trans('user.change_password')",
                        },
                      ],
                      staticClass: "link",
                      attrs: { to: "/change/password" },
                    },
                    [a("i", { staticClass: "fas fa-key" })]
                  ),
                  s._v(" "),
                  a(
                    "a",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip",
                          value: s.trans("auth.logout"),
                          expression: "trans('auth.logout')",
                        },
                      ],
                      staticClass: "link",
                      attrs: { href: "#" },
                      on: {
                        click: function (e) {
                          return e.preventDefault(), s.logout(e);
                        },
                      },
                    },
                    [a("i", { staticClass: "fas fa-power-off" })]
                  ),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        c = {
          methods: {
            getConfig: function (s) {
              return helper.getConfig(s);
            },
          },
        },
        u = Object(i.a)(
          c,
          function () {
            var s = this.$createElement;
            return (this._self._c || s)("footer", { staticClass: "footer" }, [
              this._v(
                "\n        " +
                  this._s(this.getConfig("footer_credit")) +
                  " " +
                  this._s(
                    this.trans("general.version") + " " + this.getConfig("v")
                  ) +
                  "\n    "
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        d =
          (a("ywqb"),
          {
            data: function () {
              return {
                searchOverlay: !1,
                search: "",
                student_search_results: [],
                employee_search_results: [],
                resultLoading: !1,
                timeout: null,
                scrollOptions: {
                  vuescroll: { mode: "native" },
                  bar: { background: "#e3e3e3" },
                  scrollPanel: { maxHeight: 600 },
                },
              };
            },
            mounted: function () {
              var s = this;
              window.onkeydown = function (e) {
                if (
                  (e || (e = window.event),
                  !e.metaKey &&
                    !s.searchOverlay &&
                    ("body" === e.target.localName ||
                      "document" === e.target.localName) &&
                    ((e.keyCode >= 65 && event.keyCode <= 90) ||
                      (e.keyCode >= 48 && event.keyCode <= 57)))
                ) {
                  var a = event.which || event.keyCode;
                  event.key || String.fromCharCode(a);
                  s.searchOverlay = !0;
                }
              };
            },
            created: function () {
              var s = this,
                e = function (e) {
                  ("Esc" !== e.key && "Escape" !== e.key) ||
                    ((s.search = ""), (s.searchOverlay = !1));
                };
              document.addEventListener("keydown", e),
                this.$once("hook:beforeDestroy", function () {
                  document.removeEventListener("keydown", e);
                });
            },
            methods: {
              hasPermission: function (s) {
                return helper.hasPermission(s);
              },
              searchResult: function () {
                (this.resultLoading = !0), clearTimeout(this.timeout);
                var s = this;
                this.timeout = setTimeout(function () {
                  s.search.length < 3 ||
                    axios
                      .get("/api/search?q=" + s.search)
                      .then(function (e) {
                        (s.student_search_results = e.student_records),
                          (s.employee_search_results = e.employees),
                          (s.resultLoading = !1);
                      })
                      .catch(function (e) {
                        (s.resultLoading = !1), helper.showErrorMsg(e);
                      });
                }, 1e3);
              },
              getStatus: function (s) {
                var e = s.employee_terms;
                return e.length &&
                  e[0].date_of_joining <= helper.today() &&
                  (!e[0].date_of_leaving ||
                    e[0].date_of_leaving >= helper.today())
                  ? '<span class="label label-success">' +
                      i18n.employee.status_active +
                      "</span>"
                  : '<span class="label label-danger">' +
                      i18n.employee.status_inactive +
                      "</span>";
              },
              navigateToEmployee: function (s) {
                (this.search = ""),
                  (this.searchOverlay = !1),
                  this.$router.push("/employee/" + s);
              },
              navigateToStudent: function (s) {
                (this.search = ""),
                  (this.searchOverlay = !1),
                  this.$router.push("/student/" + s);
              },
              navigateToStudentFee: function (s, e) {
                (this.search = ""),
                  (this.searchOverlay = !1),
                  this.$router.push("/student/" + e + "/fee/" + s);
              },
            },
            watch: {
              search: function (s) {
                s.length >= 3
                  ? this.searchResult()
                  : ((this.resultLoading = !1),
                    (this.student_search_results = []),
                    (this.employee_search_results = []));
              },
            },
            computed: {
              searchHint: function () {
                return this.search.length < 3
                  ? i18n.general.any_search_type_atleast_3_characters
                  : this.resultLoading
                  ? i18n.general.any_search_loading
                  : this.student_search_results.length +
                    this.employee_search_results.length +
                    " " +
                    i18n.general.any_search_loaded;
              },
            },
            updated: function () {
              this.$refs.searchTermElement &&
                this.$refs.searchTermElement.focus();
            },
            filters: {
              moment: function (s) {
                return helper.formatDate(s);
              },
              momentDateTime: function (s) {
                return helper.formatDateTime(s);
              },
            },
          }),
        f =
          (a("OO3K"),
          {
            data: function () {
              return {
                message: "",
                sidebar:
                  helper.getConfig("user_sidebar") ||
                  helper.getConfig("sidebar"),
              };
            },
            components: {
              AppHeader: n,
              AppSidebar: l,
              AppFooter: u,
              KeySearch: Object(i.a)(
                d,
                function () {
                  var s = this,
                    e = s.$createElement,
                    a = s._self._c || e;
                  return a("div", [
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: s.searchOverlay,
                            expression: "searchOverlay",
                          },
                        ],
                        staticClass: "search-overlay",
                      },
                      [
                        a("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: s.search,
                              expression: "search",
                            },
                          ],
                          ref: "searchTermElement",
                          staticClass: "search-term",
                          attrs: {
                            type: "text",
                            placeholder: s.trans("general.any_search_hint"),
                            spellcheck: "false",
                            autocomplete: "false",
                          },
                          domProps: { value: s.search },
                          on: {
                            input: function (e) {
                              e.target.composing || (s.search = e.target.value);
                            },
                          },
                        }),
                        s._v(" "),
                        a("div", { staticClass: "search-helper" }, [
                          s._v(s._s(s.searchHint)),
                        ]),
                        s._v(" "),
                        s.student_search_results.length ||
                        s.employee_search_results.length
                          ? a(
                              "div",
                              {
                                staticClass: "row",
                                staticStyle: { padding: "40px 10px 10px 40px" },
                              },
                              [
                                s.student_search_results.length
                                  ? a(
                                      "div",
                                      { staticClass: "col-12 col-sm-4" },
                                      [
                                        a(
                                          "h2",
                                          { staticClass: "result-header" },
                                          [
                                            s._v(
                                              s._s(s.trans("student.student"))
                                            ),
                                          ]
                                        ),
                                        s._v(" "),
                                        a(
                                          "vue-scroll",
                                          { attrs: { ops: s.scrollOptions } },
                                          s._l(
                                            s.student_search_results,
                                            function (e) {
                                              return a(
                                                "div",
                                                {
                                                  key: e.student.uuid,
                                                  staticClass: "result-info",
                                                  on: {
                                                    click: function (s) {},
                                                  },
                                                },
                                                [
                                                  a(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "result-thumb pull-left",
                                                    },
                                                    [
                                                      e.student.student_photo
                                                        ? [
                                                            a("img", {
                                                              staticStyle: {
                                                                height:
                                                                  "inherit",
                                                                width: "auto",
                                                              },
                                                              attrs: {
                                                                src:
                                                                  "/" +
                                                                  e.student
                                                                    .student_photo,
                                                              },
                                                            }),
                                                          ]
                                                        : [
                                                            "female" ==
                                                            e.student.gender
                                                              ? a("img", {
                                                                  staticClass:
                                                                    "img-circle",
                                                                  attrs: {
                                                                    src: "/images/avatar_female_kid.png",
                                                                  },
                                                                })
                                                              : a("img", {
                                                                  staticClass:
                                                                    "img-circle",
                                                                  attrs: {
                                                                    src: "/images/avatar_male_kid.png",
                                                                  },
                                                                }),
                                                          ],
                                                    ],
                                                    2
                                                  ),
                                                  s._v(" "),
                                                  a("p", [
                                                    a(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "other small",
                                                      },
                                                      [
                                                        s._v(
                                                          s._s(
                                                            e.admission
                                                              .admission_number
                                                          ) +
                                                            " \n                                    "
                                                        ),
                                                        e.student.age
                                                          ? [
                                                              s._v(
                                                                "(" +
                                                                  s._s(
                                                                    e.student
                                                                      .age
                                                                      .years +
                                                                      " " +
                                                                      s.trans(
                                                                        "list.year"
                                                                      ) +
                                                                      " " +
                                                                      e.student
                                                                        .age
                                                                        .months +
                                                                      " " +
                                                                      s.trans(
                                                                        "list.month"
                                                                      )
                                                                  ) +
                                                                  ")"
                                                              ),
                                                            ]
                                                          : s._e(),
                                                      ],
                                                      2
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "result-name",
                                                      },
                                                      [
                                                        s._v(
                                                          s._s(e.student.name)
                                                        ),
                                                      ]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "other small",
                                                      },
                                                      [
                                                        s._v(
                                                          s._s(
                                                            e.batch.course
                                                              .name +
                                                              " " +
                                                              e.batch.name
                                                          ) +
                                                            " (" +
                                                            s._s(
                                                              e.full_roll_number
                                                            ) +
                                                            ")"
                                                        ),
                                                      ]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "other small",
                                                      },
                                                      [
                                                        s._v(
                                                          s._s(
                                                            e.student.parent
                                                              .first_guardian_name
                                                          ) + " "
                                                        ),
                                                        a("i", {
                                                          staticClass:
                                                            "fas fa-mobile",
                                                        }),
                                                        s._v(
                                                          " " +
                                                            s._s(
                                                              e.student
                                                                .contact_number
                                                            ) +
                                                            "\n                                "
                                                        ),
                                                      ]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                      "span",
                                                      {
                                                        staticStyle: {
                                                          display: "block",
                                                          "margin-top": "10px",
                                                        },
                                                      },
                                                      [
                                                        a(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-info btn-sm",
                                                            on: {
                                                              click: function (
                                                                a
                                                              ) {
                                                                return s.navigateToStudent(
                                                                  e.student.uuid
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            a("i", {
                                                              staticClass:
                                                                "fas fa-arrow-circle-right",
                                                            }),
                                                            s._v(
                                                              " " +
                                                                s._s(
                                                                  s.trans(
                                                                    "general.view"
                                                                  )
                                                                )
                                                            ),
                                                          ]
                                                        ),
                                                        s._v(" "),
                                                        s.hasPermission(
                                                          "list-student-fee"
                                                        )
                                                          ? a(
                                                              "button",
                                                              {
                                                                staticClass:
                                                                  "btn btn-success btn-sm",
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      a
                                                                    ) {
                                                                      return s.navigateToStudentFee(
                                                                        e.id,
                                                                        e
                                                                          .student
                                                                          .uuid
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                a("i", {
                                                                  staticClass:
                                                                    "fas fa-file",
                                                                }),
                                                                s._v(
                                                                  " " +
                                                                    s._s(
                                                                      s.trans(
                                                                        "finance.view_fee_allocation"
                                                                      )
                                                                    ) +
                                                                    "\n    \t                            "
                                                                ),
                                                              ]
                                                            )
                                                          : s._e(),
                                                      ]
                                                    ),
                                                  ]),
                                                ]
                                              );
                                            }
                                          ),
                                          0
                                        ),
                                      ],
                                      1
                                    )
                                  : s._e(),
                                s._v(" "),
                                s.employee_search_results.length
                                  ? a(
                                      "div",
                                      { staticClass: "col-12 col-sm-4" },
                                      [
                                        a(
                                          "h2",
                                          { staticClass: "result-header" },
                                          [
                                            s._v(
                                              s._s(s.trans("employee.employee"))
                                            ),
                                          ]
                                        ),
                                        s._v(" "),
                                        a(
                                          "vue-scroll",
                                          { attrs: { ops: s.scrollOptions } },
                                          s._l(
                                            s.employee_search_results,
                                            function (e) {
                                              return a(
                                                "div",
                                                {
                                                  key: e.uuid,
                                                  staticClass: "result-info",
                                                  on: {
                                                    click: function (s) {},
                                                  },
                                                },
                                                [
                                                  a(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "result-thumb pull-left",
                                                    },
                                                    [
                                                      e.photo
                                                        ? [
                                                            a("img", {
                                                              staticStyle: {
                                                                height:
                                                                  "inherit",
                                                                width: "auto",
                                                              },
                                                              attrs: {
                                                                src:
                                                                  "/" + e.photo,
                                                              },
                                                            }),
                                                          ]
                                                        : [
                                                            "female" == e.gender
                                                              ? a("img", {
                                                                  staticClass:
                                                                    "img-circle",
                                                                  attrs: {
                                                                    src: "/images/avatar_female.png",
                                                                  },
                                                                })
                                                              : a("img", {
                                                                  staticClass:
                                                                    "img-circle",
                                                                  attrs: {
                                                                    src: "/images/avatar_male.png",
                                                                  },
                                                                }),
                                                          ],
                                                    ],
                                                    2
                                                  ),
                                                  s._v(" "),
                                                  a("p", [
                                                    a(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "other small",
                                                      },
                                                      [
                                                        s._v(
                                                          s._s(
                                                            e.employee_code
                                                          ) +
                                                            " \n                                    "
                                                        ),
                                                        e.age
                                                          ? [
                                                              s._v(
                                                                "(" +
                                                                  s._s(
                                                                    e.age
                                                                      .years +
                                                                      " " +
                                                                      s.trans(
                                                                        "list.year"
                                                                      ) +
                                                                      " " +
                                                                      e.age
                                                                        .months +
                                                                      " " +
                                                                      s.trans(
                                                                        "list.month"
                                                                      )
                                                                  ) +
                                                                  ")"
                                                              ),
                                                            ]
                                                          : s._e(),
                                                      ],
                                                      2
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "result-name",
                                                      },
                                                      [
                                                        s._v(
                                                          s._s(e.name) + " "
                                                        ),
                                                        a("span", {
                                                          staticStyle: {
                                                            display:
                                                              "inline-block",
                                                          },
                                                          domProps: {
                                                            innerHTML: s._s(
                                                              s.getStatus(e)
                                                            ),
                                                          },
                                                        }),
                                                      ]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "other small",
                                                      },
                                                      [
                                                        e.employee_designations
                                                          .length &&
                                                        e
                                                          .employee_designations[0]
                                                          .department_id
                                                          ? [
                                                              s._v(
                                                                s._s(
                                                                  e
                                                                    .employee_designations[0]
                                                                    .department
                                                                    .name
                                                                )
                                                              ),
                                                            ]
                                                          : s._e(),
                                                        s._v(" "),
                                                        e.employee_designations
                                                          .length
                                                          ? [
                                                              s._v(
                                                                "\n                                        " +
                                                                  s._s(
                                                                    e
                                                                      .employee_designations[0]
                                                                      .designation
                                                                      .name +
                                                                      " (" +
                                                                      e
                                                                        .employee_designations[0]
                                                                        .designation
                                                                        .employee_category
                                                                        .name +
                                                                      ")"
                                                                  ) +
                                                                  "\n                                    "
                                                              ),
                                                            ]
                                                          : s._e(),
                                                      ],
                                                      2
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "other small",
                                                      },
                                                      [
                                                        e.employee_terms[0]
                                                          ? [
                                                              s._v(
                                                                s._s(
                                                                  s.trans(
                                                                    "general.since"
                                                                  )
                                                                ) +
                                                                  " " +
                                                                  s._s(
                                                                    s._f(
                                                                      "moment"
                                                                    )(
                                                                      e
                                                                        .employee_terms[0]
                                                                        .date_of_joining
                                                                    )
                                                                  )
                                                              ),
                                                            ]
                                                          : s._e(),
                                                        s._v(" "),
                                                        a("i", {
                                                          staticClass:
                                                            "fas fa-mobile",
                                                        }),
                                                        s._v(
                                                          " " +
                                                            s._s(
                                                              e.contact_number
                                                            ) +
                                                            "\n                                "
                                                        ),
                                                      ],
                                                      2
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                      "span",
                                                      {
                                                        staticStyle: {
                                                          display: "block",
                                                          "margin-top": "10px",
                                                        },
                                                      },
                                                      [
                                                        a(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-info btn-sm",
                                                            on: {
                                                              click: function (
                                                                a
                                                              ) {
                                                                return s.navigateToEmployee(
                                                                  e.uuid
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            a("i", {
                                                              staticClass:
                                                                "fas fa-arrow-circle-right",
                                                            }),
                                                            s._v(
                                                              " " +
                                                                s._s(
                                                                  s.trans(
                                                                    "general.view"
                                                                  )
                                                                )
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]),
                                                ]
                                              );
                                            }
                                          ),
                                          0
                                        ),
                                      ],
                                      1
                                    )
                                  : s._e(),
                              ]
                            )
                          : s._e(),
                      ]
                    ),
                  ]);
                },
                [],
                !1,
                null,
                "479b4cb7",
                null
              ).exports,
            },
            mounted: function () {
              helper.notification(),
                $(".scroll-sidebar").slimScroll({
                  position: "left",
                  size: "5px",
                  height: "100%",
                  color: "#dcdcdc",
                }),
                $(".message-scroll").slimScroll({
                  position: "right",
                  size: "5px",
                  height: "570",
                  color: "#dcdcdc",
                }),
                $(".slimscrollright").slimScroll({
                  position: "left",
                  size: "5px",
                  height: "100%",
                  color: "#dcdcdc",
                }),
                $("body").addClass("fix-header fix-sidebar"),
                "mini" == this.sidebar && this.miniSidebar(),
                $("#theme").attr(
                  "href",
                  "/css/colors/" +
                    (helper.getConfig("user_color_theme") ||
                      helper.getConfig("color_theme")) +
                    ".css"
                );
              var s = function () {
                (window.innerWidth > 0
                  ? window.innerWidth
                  : this.screen.width) < 1170 &&
                  ($("body").addClass("mini-sidebar"),
                  $(".navbar-brand span").hide(),
                  $(".scroll-sidebar, .slimScrollDiv")
                    .css("overflow-x", "visible")
                    .parent()
                    .css("overflow", "visible"),
                  $(".sidebartoggler i").addClass("fa-arrow-circle-right"),
                  $(".sidebartoggler i").removeClass("fa-arrow-circle-left"));
                var s =
                  (window.innerHeight > 0
                    ? window.innerHeight
                    : this.screen.height) - 1;
                (s -= 70) < 1 && (s = 1),
                  s > 70 && $(".page-wrapper").css("min-height", s + "px");
              };
              $(window).ready(s),
                $(window).on("resize", s),
                $(document).on("click", ".right-sidebar-toggle", function () {
                  $(".right-sidebar").slideDown(50),
                    $(".right-sidebar").toggleClass("shw-rside");
                }),
                $(document).on("click", ".sidebartoggler", function () {
                  $("body").hasClass("mini-sidebar")
                    ? ($("body").trigger("resize"),
                      $(".scroll-sidebar, .slimScrollDiv")
                        .css("overflow", "hidden")
                        .parent()
                        .css("overflow", "visible"),
                      $("body").removeClass("mini-sidebar"),
                      $(".navbar-brand span").show(),
                      $(".sidebartoggler i").removeClass(
                        "fa-arrow-circle-right"
                      ),
                      $(".sidebartoggler i").addClass("fa-arrow-circle-left"))
                    : ($("body").trigger("resize"),
                      $(".scroll-sidebar, .slimScrollDiv")
                        .css("overflow-x", "visible")
                        .parent()
                        .css("overflow", "visible"),
                      $("body").addClass("mini-sidebar"),
                      $(".navbar-brand span").hide(),
                      $(".sidebartoggler i").removeClass(
                        "fa-arrow-circle-left"
                      ),
                      $(".sidebartoggler i").addClass("fa-arrow-circle-right"));
                }),
                $(".fix-header .topbar").stick_in_parent(),
                $(document).on("click", ".nav-toggler", function () {
                  $("body").toggleClass("show-sidebar"),
                    $(".nav-toggler i").toggleClass("fa-bars"),
                    $(".nav-toggler i").toggleClass("fa-times");
                }),
                $(".sidebartoggler").on("click", function () {}),
                $("#sidebarnav").metisMenu();
            },
            methods: {
              miniSidebar: function () {
                $("body").addClass("mini-sidebar"),
                  $("body").trigger("resize"),
                  $(".navbar-brand span").hide(),
                  $(".scroll-sidebar, .slimScrollDiv")
                    .css("overflow-x", "visible")
                    .parent()
                    .css("overflow", "visible"),
                  $(".sidebartoggler i").removeClass("fa-arrow-circle-left"),
                  $(".sidebartoggler i").addClass("fa-arrow-circle-right");
              },
              normalSidebar: function () {
                $("body").trigger("resize"),
                  $(".navbar-brand span").show(),
                  $(".scroll-sidebar, .slimScrollDiv")
                    .css("overflow", "hidden")
                    .parent()
                    .css("overflow", "visible"),
                  $("body").removeClass("mini-sidebar"),
                  $(".sidebartoggler i").removeClass("fa-arrow-circle-right"),
                  $(".sidebartoggler i").addClass("fa-arrow-circle-left");
              },
              getConfig: function (s) {
                return helper.getConfig(s);
              },
            },
            watch: {
              sidebar: function (s) {
                "mini" == s ? this.miniSidebar() : this.normalSidebar();
              },
            },
          }),
        h = Object(i.a)(
          f,
          function () {
            var s = this.$createElement,
              e = this._self._c || s;
            return e(
              "div",
              { attrs: { id: "main-wrapper" } },
              [
                e("tour-notification", { staticClass: "d-none d-sm-inline" }),
                this._v(" "),
                e("app-header"),
                this._v(" "),
                e("app-sidebar"),
                this._v(" "),
                e("key-search"),
                this._v(" "),
                e(
                  "div",
                  { staticClass: "page-wrapper page-wrapper-header" },
                  [e("router-view"), this._v(" "), e("app-footer")],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = h.exports;
    },
    Ma8G: function (s, e, a) {
      var t = a("olAz");
      "string" == typeof t && (t = [[s.i, t, ""]]);
      var i = { hmr: !0, transform: void 0, insertInto: void 0 };
      a("aET+")(t, i);
      t.locals && (s.exports = t.locals);
    },
    OO3K: function (s, e, a) {
      "use strict";
      var t = a("Ma8G");
      a.n(t).a;
    },
    olAz: function (s, e, a) {
      (s.exports = a("I1BE")(!1)).push([
        s.i,
        ".search-overlay[data-v-479b4cb7] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: white;\n  opacity: 0.9;\n  z-index: 999999;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.search-term[data-v-479b4cb7] {\n  font-size: 72px;\n  font-weight: bold;\n  padding: 40px 10px 10px 40px;\n  border: 0;\n}\n.search-helper[data-v-479b4cb7] {\n  padding: 0 10px 10px 40px;\n  font-size: 20px;\n}\n.result-header[data-v-479b4cb7] {\n  font-size: 24px;\n  font-weight: bold;\n}\n.result-info[data-v-479b4cb7] {\n  display: block;\n  border-bottom: 2px solid black;\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n}\n.result-info .result-thumb[data-v-479b4cb7] {\n  float: left;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: #e1e2e3;\n  margin-right: 20px;\n  text-align: center;\n  overflow: hidden;\n}\n.result-info .result-thumb i[data-v-479b4cb7] {\n  padding-top: 25px;\n  font-size: 50px;\n}\n.result-info .result-thumb img[data-v-479b4cb7] {\n  width: 100%;\n}\n.result-info p[data-v-479b4cb7] {\n  padding-top: 10px;\n  margin-bottom: 0;\n  min-height: 100px;\n  color: #1a1a1a;\n}\n.result-info p span[data-v-479b4cb7] {\n  display: block;\n}\n.result-info p span.result-name[data-v-479b4cb7] {\n  font-size: 120%;\n  font-weight: 500;\n}\n.result-info p span.title[data-v-479b4cb7] {\n  font-size: 100%;\n}\n.result-info p span.other[data-v-479b4cb7] {\n  font-size: 90%;\n}\n.result-info[data-v-479b4cb7] {\n  border: 2px solid #000000;\n  border-radius: 10px;\n  margin-top: 10px;\n  padding: 10px;\n}",
        "",
      ]);
    },
    ywqb: function (s) {
      s.exports = JSON.parse("{}");
    },
  },
]);
//# sourceMappingURL=defaultPage.js.map?id=05c883402e3103daf258
