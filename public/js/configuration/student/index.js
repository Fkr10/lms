(window.webpackJsonp = window.webpackJsonp || []).push([
  [151],
  {
    SxRV: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = {
          components: {},
          data: function () {
            return {
              configForm: new Form(
                {
                  admission_number_prefix: "",
                  admission_number_digit: "",
                  transfer_certificate_prefix: "",
                  transfer_certificate_digit: "",
                  allow_to_modify_student_attendance: "",
                  days_allowed_to_modify_student_attendance: "",
                  allow_to_mark_student_advance_attendance: "",
                  days_allowed_to_mark_student_advance_attendance: "",
                  student_late_attendance_time: "",
                  config_type: "",
                },
                !1
              ),
            };
          },
          mounted: function () {
            helper.hasPermission("access-configuration") ||
              (helper.notAccessibleMsg(), this.$router.push("/dashboard")),
              this.getConfiguration();
          },
          methods: {
            getConfiguration: function () {
              var t = this,
                e = this.$loading.show();
              axios
                .get("/api/configuration")
                .then(function (a) {
                  (t.configForm = helper.formAssign(t.configForm, a)), e.hide();
                })
                .catch(function (t) {
                  e.hide(), helper.showErrorMsg(t);
                });
            },
            submit: function () {
              var t = this,
                e = this.$loading.show();
              (this.configForm.config_type = "student"),
                this.configForm
                  .post("/api/configuration")
                  .then(function (a) {
                    t.$store.dispatch("setConfig", { loaded: !1 }),
                      toastr.success(a.message),
                      e.hide();
                  })
                  .catch(function (t) {
                    e.hide(), helper.showErrorMsg(t);
                  });
            },
          },
        },
        o = a("KHd+"),
        s = Object(o.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("div", [
              a("div", { staticClass: "page-titles" }, [
                a("h3", { staticClass: "text-themecolor" }, [
                  t._v(t._s(t.trans("student.student_configuration"))),
                ]),
              ]),
              t._v(" "),
              a("div", { staticClass: "container-fluid" }, [
                a("div", { staticClass: "card" }, [
                  a("div", { staticClass: "card-body p-4" }, [
                    a(
                      "form",
                      {
                        on: {
                          submit: function (e) {
                            return e.preventDefault(), t.submit(e);
                          },
                          keydown: function (e) {
                            return t.configForm.errors.clear(e.target.name);
                          },
                        },
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col-12 col-sm-3" }, [
                            a(
                              "div",
                              { staticClass: "form-group" },
                              [
                                a("label", { attrs: { for: "" } }, [
                                  t._v(
                                    t._s(
                                      t.trans("student.admission_number_prefix")
                                    )
                                  ),
                                ]),
                                t._v(" "),
                                a("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        t.configForm.admission_number_prefix,
                                      expression:
                                        "configForm.admission_number_prefix",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "admission_number_prefix",
                                    placeholder: t.trans(
                                      "student.admission_number_prefix"
                                    ),
                                  },
                                  domProps: {
                                    value: t.configForm.admission_number_prefix,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.configForm,
                                          "admission_number_prefix",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                                t._v(" "),
                                a("show-error", {
                                  attrs: {
                                    "form-name": t.configForm,
                                    "prop-name": "admission_number_prefix",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          t._v(" "),
                          a("div", { staticClass: "col-12 col-sm-3" }, [
                            a(
                              "div",
                              { staticClass: "form-group" },
                              [
                                a("label", { attrs: { for: "" } }, [
                                  t._v(
                                    t._s(
                                      t.trans("student.admission_number_digit")
                                    )
                                  ),
                                ]),
                                t._v(" "),
                                a("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        t.configForm.admission_number_digit,
                                      expression:
                                        "configForm.admission_number_digit",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "number",
                                    name: "admission_number_digit",
                                    placeholder: t.trans(
                                      "student.admission_number_digit"
                                    ),
                                  },
                                  domProps: {
                                    value: t.configForm.admission_number_digit,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.configForm,
                                          "admission_number_digit",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                                t._v(" "),
                                a("show-error", {
                                  attrs: {
                                    "form-name": t.configForm,
                                    "prop-name": "admission_number_digit",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          t._v(" "),
                          a("div", { staticClass: "col-12 col-sm-3" }, [
                            a(
                              "div",
                              { staticClass: "form-group" },
                              [
                                a("label", { attrs: { for: "" } }, [
                                  t._v(
                                    t._s(
                                      t.trans(
                                        "student.transfer_certificate_prefix"
                                      )
                                    )
                                  ),
                                ]),
                                t._v(" "),
                                a("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        t.configForm
                                          .transfer_certificate_prefix,
                                      expression:
                                        "configForm.transfer_certificate_prefix",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "transfer_certificate_prefix",
                                    placeholder: t.trans(
                                      "student.transfer_certificate_prefix"
                                    ),
                                  },
                                  domProps: {
                                    value:
                                      t.configForm.transfer_certificate_prefix,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.configForm,
                                          "transfer_certificate_prefix",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                                t._v(" "),
                                a("show-error", {
                                  attrs: {
                                    "form-name": t.configForm,
                                    "prop-name": "transfer_certificate_prefix",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          t._v(" "),
                          a("div", { staticClass: "col-12 col-sm-3" }, [
                            a(
                              "div",
                              { staticClass: "form-group" },
                              [
                                a("label", { attrs: { for: "" } }, [
                                  t._v(
                                    t._s(
                                      t.trans(
                                        "student.transfer_certificate_digit"
                                      )
                                    )
                                  ),
                                ]),
                                t._v(" "),
                                a("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        t.configForm.transfer_certificate_digit,
                                      expression:
                                        "configForm.transfer_certificate_digit",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "number",
                                    name: "transfer_certificate_digit",
                                    placeholder: t.trans(
                                      "student.transfer_certificate_digit"
                                    ),
                                  },
                                  domProps: {
                                    value:
                                      t.configForm.transfer_certificate_digit,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.configForm,
                                          "transfer_certificate_digit",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                                t._v(" "),
                                a("show-error", {
                                  attrs: {
                                    "form-name": t.configForm,
                                    "prop-name": "transfer_certificate_digit",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col-12 col-sm-3" }, [
                            a(
                              "div",
                              { staticClass: "form-group" },
                              [
                                a(
                                  "label",
                                  {
                                    staticClass:
                                      "custom-control custom-checkbox m-t-20",
                                  },
                                  [
                                    a("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            t.configForm
                                              .allow_to_modify_student_attendance,
                                          expression:
                                            "configForm.allow_to_modify_student_attendance",
                                        },
                                      ],
                                      staticClass: "custom-control-input",
                                      attrs: {
                                        type: "checkbox",
                                        value: "1",
                                        name: "allow_to_modify_student_attendance",
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          t.configForm
                                            .allow_to_modify_student_attendance
                                        )
                                          ? t._i(
                                              t.configForm
                                                .allow_to_modify_student_attendance,
                                              "1"
                                            ) > -1
                                          : t.configForm
                                              .allow_to_modify_student_attendance,
                                      },
                                      on: {
                                        change: function (e) {
                                          var a =
                                              t.configForm
                                                .allow_to_modify_student_attendance,
                                            n = e.target,
                                            o = !!n.checked;
                                          if (Array.isArray(a)) {
                                            var s = t._i(a, "1");
                                            n.checked
                                              ? s < 0 &&
                                                t.$set(
                                                  t.configForm,
                                                  "allow_to_modify_student_attendance",
                                                  a.concat(["1"])
                                                )
                                              : s > -1 &&
                                                t.$set(
                                                  t.configForm,
                                                  "allow_to_modify_student_attendance",
                                                  a
                                                    .slice(0, s)
                                                    .concat(a.slice(s + 1))
                                                );
                                          } else
                                            t.$set(
                                              t.configForm,
                                              "allow_to_modify_student_attendance",
                                              o
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    a(
                                      "span",
                                      { staticClass: "custom-control-label" },
                                      [
                                        t._v(
                                          t._s(
                                            t.trans(
                                              "student.allow_to_modify_student_attendance"
                                            )
                                          )
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                a("show-error", {
                                  attrs: {
                                    "form-name": t.configForm,
                                    "prop-name":
                                      "allow_to_modify_student_attendance",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          t._v(" "),
                          t.configForm.allow_to_modify_student_attendance
                            ? a("div", { staticClass: "col-12 col-sm-3" }, [
                                a(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    a("label", { attrs: { for: "" } }, [
                                      t._v(
                                        t._s(
                                          t.trans(
                                            "student.days_allowed_to_modify_student_attendance"
                                          )
                                        )
                                      ),
                                    ]),
                                    t._v(" "),
                                    a("div", { staticClass: "input-group" }, [
                                      a("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              t.configForm
                                                .days_allowed_to_modify_student_attendance,
                                            expression:
                                              "configForm.days_allowed_to_modify_student_attendance",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "number",
                                          name: "days_allowed_to_modify_student_attendance",
                                          placeholder: t.trans(
                                            "student.days_allowed_to_modify_student_attendance"
                                          ),
                                        },
                                        domProps: {
                                          value:
                                            t.configForm
                                              .days_allowed_to_modify_student_attendance,
                                        },
                                        on: {
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.configForm,
                                                "days_allowed_to_modify_student_attendance",
                                                e.target.value
                                              );
                                          },
                                        },
                                      }),
                                      t._v(" "),
                                      a(
                                        "div",
                                        { staticClass: "input-group-append" },
                                        [
                                          a(
                                            "span",
                                            { staticClass: "input-group-text" },
                                            [
                                              t._v(
                                                t._s(t.trans("general.days"))
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                    t._v(" "),
                                    a("show-error", {
                                      attrs: {
                                        "form-name": t.configForm,
                                        "prop-name":
                                          "days_allowed_to_modify_student_attendance",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ])
                            : t._e(),
                          t._v(" "),
                          a("div", { staticClass: "col-12 col-sm-3" }, [
                            a(
                              "div",
                              { staticClass: "form-group" },
                              [
                                a(
                                  "label",
                                  {
                                    staticClass:
                                      "custom-control custom-checkbox m-t-20",
                                  },
                                  [
                                    a("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            t.configForm
                                              .allow_to_mark_student_advance_attendance,
                                          expression:
                                            "configForm.allow_to_mark_student_advance_attendance",
                                        },
                                      ],
                                      staticClass: "custom-control-input",
                                      attrs: {
                                        type: "checkbox",
                                        value: "1",
                                        name: "allow_to_mark_student_advance_attendance",
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          t.configForm
                                            .allow_to_mark_student_advance_attendance
                                        )
                                          ? t._i(
                                              t.configForm
                                                .allow_to_mark_student_advance_attendance,
                                              "1"
                                            ) > -1
                                          : t.configForm
                                              .allow_to_mark_student_advance_attendance,
                                      },
                                      on: {
                                        change: function (e) {
                                          var a =
                                              t.configForm
                                                .allow_to_mark_student_advance_attendance,
                                            n = e.target,
                                            o = !!n.checked;
                                          if (Array.isArray(a)) {
                                            var s = t._i(a, "1");
                                            n.checked
                                              ? s < 0 &&
                                                t.$set(
                                                  t.configForm,
                                                  "allow_to_mark_student_advance_attendance",
                                                  a.concat(["1"])
                                                )
                                              : s > -1 &&
                                                t.$set(
                                                  t.configForm,
                                                  "allow_to_mark_student_advance_attendance",
                                                  a
                                                    .slice(0, s)
                                                    .concat(a.slice(s + 1))
                                                );
                                          } else
                                            t.$set(
                                              t.configForm,
                                              "allow_to_mark_student_advance_attendance",
                                              o
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    a(
                                      "span",
                                      { staticClass: "custom-control-label" },
                                      [
                                        t._v(
                                          t._s(
                                            t.trans(
                                              "student.allow_to_mark_student_advance_attendance"
                                            )
                                          )
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                a("show-error", {
                                  attrs: {
                                    "form-name": t.configForm,
                                    "prop-name":
                                      "allow_to_mark_student_advance_attendance",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          t._v(" "),
                          t.configForm.allow_to_mark_student_advance_attendance
                            ? a("div", { staticClass: "col-12 col-sm-3" }, [
                                a(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    a("label", { attrs: { for: "" } }, [
                                      t._v(
                                        t._s(
                                          t.trans(
                                            "student.days_allowed_to_mark_student_advance_attendance"
                                          )
                                        )
                                      ),
                                    ]),
                                    t._v(" "),
                                    a("div", { staticClass: "input-group" }, [
                                      a("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              t.configForm
                                                .days_allowed_to_mark_student_advance_attendance,
                                            expression:
                                              "configForm.days_allowed_to_mark_student_advance_attendance",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "number",
                                          name: "days_allowed_to_mark_student_advance_attendance",
                                          placeholder: t.trans(
                                            "student.days_allowed_to_mark_student_advance_attendance"
                                          ),
                                        },
                                        domProps: {
                                          value:
                                            t.configForm
                                              .days_allowed_to_mark_student_advance_attendance,
                                        },
                                        on: {
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.configForm,
                                                "days_allowed_to_mark_student_advance_attendance",
                                                e.target.value
                                              );
                                          },
                                        },
                                      }),
                                      t._v(" "),
                                      a(
                                        "div",
                                        { staticClass: "input-group-append" },
                                        [
                                          a(
                                            "span",
                                            { staticClass: "input-group-text" },
                                            [
                                              t._v(
                                                t._s(t.trans("general.days"))
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                    t._v(" "),
                                    a("show-error", {
                                      attrs: {
                                        "form-name": t.configForm,
                                        "prop-name":
                                          "days_allowed_to_mark_student_advance_attendance",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col-12 col-sm-3" }, [
                            a(
                              "div",
                              { staticClass: "form-group" },
                              [
                                a("label", { attrs: { for: "" } }, [
                                  t._v(
                                    t._s(
                                      t.trans("student.late_attendance_time")
                                    )
                                  ),
                                ]),
                                t._v(" "),
                                a("div", { staticClass: "input-group" }, [
                                  a("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          t.configForm
                                            .student_late_attendance_time,
                                        expression:
                                          "configForm.student_late_attendance_time",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "number",
                                      name: "late_attendance_time",
                                      placeholder: t.trans(
                                        "student.late_attendance_time"
                                      ),
                                    },
                                    domProps: {
                                      value:
                                        t.configForm
                                          .student_late_attendance_time,
                                    },
                                    on: {
                                      input: function (e) {
                                        e.target.composing ||
                                          t.$set(
                                            t.configForm,
                                            "student_late_attendance_time",
                                            e.target.value
                                          );
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  a(
                                    "div",
                                    { staticClass: "input-group-append" },
                                    [
                                      a(
                                        "span",
                                        { staticClass: "input-group-text" },
                                        [t._v(t._s(t.trans("general.minutes")))]
                                      ),
                                    ]
                                  ),
                                ]),
                                t._v(" "),
                                a("show-error", {
                                  attrs: {
                                    "form-name": t.configForm,
                                    "prop-name": "student_late_attendance_time",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        a("div", { staticClass: "form-group text-right" }, [
                          a(
                            "button",
                            {
                              staticClass:
                                "btn btn-info waves-effect waves-light",
                              attrs: { type: "submit" },
                            },
                            [t._v(t._s(t.trans("general.save")))]
                          ),
                        ]),
                      ]
                    ),
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
        );
      e.default = s.exports;
    },
  },
]);
//# sourceMappingURL=index.js.map?id=c78cfe07a3b0c7fa4b0e
