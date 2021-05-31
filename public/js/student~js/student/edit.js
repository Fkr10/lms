(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    "1SQT": function (t, e, n) {
      "use strict";
      var a = {
          components: {},
          props: ["student", "record"],
          data: function () {
            return {
              recordForm: new Form(
                { batch_id: "", date_of_entry: "", number: "", prefix: "" },
                !1
              ),
              batches: [],
              selected_batch: null,
            };
          },
          mounted: function () {
            helper.hasPermission("edit-student") ||
              (helper.notAccessibleMsg(), this.$router.push("/dashboard")),
              this.getPreRequisite();
          },
          methods: {
            getPreRequisite: function () {
              var t = this,
                e = this.$loading.show();
              axios
                .get("/api/student/record/pre-requisite")
                .then(function (n) {
                  (t.batches = n.batches),
                    (t.selected_batch = {
                      id: t.record.batch_id,
                      name:
                        t.record.batch.course.name + " " + t.record.batch.name,
                    }),
                    (t.recordForm.batch_id = t.record.batch_id),
                    (t.recordForm.date_of_entry = t.record.date_of_entry),
                    (t.recordForm.number = t.record.admission.number),
                    (t.recordForm.prefix = t.record.admission.prefix),
                    e.hide();
                })
                .catch(function (t) {
                  e.hide(), helper.showErrorMsg(t);
                });
            },
            complete: function () {
              this.$emit("completed"), this.$emit("close");
            },
            onBatchSelect: function (t) {
              (this.recordForm.batch_id = t.id), loader.hide();
            },
            onBatchRemove: function (t) {
              this.recordForm.batch_id = "";
            },
            submit: function () {
              var t = this,
                e = this.$loading.show();
              this.recordForm
                .patch(
                  "/api/student/" +
                    this.student.uuid +
                    "/record/" +
                    this.record.id
                )
                .then(function (n) {
                  toastr.success(n.message),
                    t.$emit("completed"),
                    t.$emit("close"),
                    e.hide();
                })
                .catch(function (t) {
                  e.hide(), helper.showErrorMsg(t);
                });
            },
          },
        },
        s = (n("LDGJ"), n("KHd+")),
        o = Object(s.a)(
          a,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("transition", { attrs: { name: "modal" } }, [
              n("div", { staticClass: "modal-mask" }, [
                n("div", { staticClass: "modal-wrapper" }, [
                  n("div", { staticClass: "modal-container modal-lg" }, [
                    n(
                      "div",
                      { staticClass: "modal-header" },
                      [
                        t._t("header", [
                          t._v(
                            "\n                        " +
                              t._s(t.trans("student.edit_record")) +
                              "\n                        "
                          ),
                          n(
                            "span",
                            {
                              staticClass: "float-right pointer",
                              on: {
                                click: function (e) {
                                  return t.$emit("close");
                                },
                              },
                            },
                            [t._v("x")]
                          ),
                        ]),
                      ],
                      2
                    ),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass: "modal-body",
                        staticStyle: { "min-height": "300px" },
                      },
                      [
                        t._t("body", [
                          n(
                            "form",
                            {
                              on: {
                                submit: function (e) {
                                  return e.preventDefault(), t.submit(e);
                                },
                                keydown: function (e) {
                                  return t.recordForm.errors.clear(
                                    e.target.name
                                  );
                                },
                              },
                            },
                            [
                              n("div", { staticClass: "row" }, [
                                n("div", { staticClass: "col-12 col-sm-6" }, [
                                  n(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      n("label", { attrs: { for: "" } }, [
                                        t._v(
                                          t._s(
                                            t.trans(
                                              "student.date_of_admission_promotion"
                                            )
                                          )
                                        ),
                                      ]),
                                      t._v(" "),
                                      n("datepicker", {
                                        attrs: {
                                          bootstrapStyling: !0,
                                          placeholder: t.trans(
                                            "student.date_of_admission_promotion"
                                          ),
                                        },
                                        on: {
                                          selected: function (e) {
                                            return t.recordForm.errors.clear(
                                              "date_of_entry"
                                            );
                                          },
                                        },
                                        model: {
                                          value: t.recordForm.date_of_entry,
                                          callback: function (e) {
                                            t.$set(
                                              t.recordForm,
                                              "date_of_entry",
                                              e
                                            );
                                          },
                                          expression:
                                            "recordForm.date_of_entry",
                                        },
                                      }),
                                      t._v(" "),
                                      n("show-error", {
                                        attrs: {
                                          "form-name": t.recordForm,
                                          "prop-name": "date_of_entry",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]),
                                t._v(" "),
                                n("div", { staticClass: "col-12 col-sm-6" }, [
                                  n(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      n("label", { attrs: { for: "" } }, [
                                        t._v(t._s(t.trans("academic.batch"))),
                                      ]),
                                      t._v(" "),
                                      n(
                                        "v-select",
                                        {
                                          attrs: {
                                            label: "name",
                                            "group-values": "batches",
                                            "group-label": "course_group",
                                            "group-select": !1,
                                            name: "batch_id",
                                            id: "batch_id",
                                            options: t.batches,
                                            placeholder: t.trans(
                                              "academic.select_batch"
                                            ),
                                          },
                                          on: {
                                            select: t.onBatchSelect,
                                            close: function (e) {
                                              return t.recordForm.errors.clear(
                                                "batch_id"
                                              );
                                            },
                                            remove: t.onBatchRemove,
                                          },
                                          model: {
                                            value: t.selected_batch,
                                            callback: function (e) {
                                              t.selected_batch = e;
                                            },
                                            expression: "selected_batch",
                                          },
                                        },
                                        [
                                          t.batches.length
                                            ? t._e()
                                            : n(
                                                "div",
                                                {
                                                  staticClass:
                                                    "multiselect__option",
                                                  attrs: { slot: "afterList" },
                                                  slot: "afterList",
                                                },
                                                [
                                                  t._v(
                                                    "\n                                                " +
                                                      t._s(
                                                        t.trans(
                                                          "general.no_option_found"
                                                        )
                                                      ) +
                                                      "\n                                            "
                                                  ),
                                                ]
                                              ),
                                        ]
                                      ),
                                      t._v(" "),
                                      n("show-error", {
                                        attrs: {
                                          "form-name": t.recordForm,
                                          "prop-name": "batch_id",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]),
                                t._v(" "),
                                n("div", { staticClass: "col-12 col-sm-6" }, [
                                  n(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      n("label", { attrs: { for: "" } }, [
                                        t._v(
                                          t._s(
                                            t.trans("student.admission_number")
                                          )
                                        ),
                                      ]),
                                      t._v(" "),
                                      n("div", { staticClass: "row" }, [
                                        n(
                                          "div",
                                          { staticClass: "col-12 col-sm-4" },
                                          [
                                            n("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.recordForm.prefix,
                                                  expression:
                                                    "recordForm.prefix",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                name: "prefix",
                                                placeholder: t.trans(
                                                  "student.admission_number_prefix"
                                                ),
                                              },
                                              domProps: {
                                                value: t.recordForm.prefix,
                                              },
                                              on: {
                                                input: function (e) {
                                                  e.target.composing ||
                                                    t.$set(
                                                      t.recordForm,
                                                      "prefix",
                                                      e.target.value
                                                    );
                                                },
                                              },
                                            }),
                                          ]
                                        ),
                                        t._v(" "),
                                        n(
                                          "div",
                                          { staticClass: "col-12 col-sm-8" },
                                          [
                                            n("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.recordForm.number,
                                                  expression:
                                                    "recordForm.number",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                name: "number",
                                                placeholder: t.trans(
                                                  "student.admission_number"
                                                ),
                                              },
                                              domProps: {
                                                value: t.recordForm.number,
                                              },
                                              on: {
                                                input: function (e) {
                                                  e.target.composing ||
                                                    t.$set(
                                                      t.recordForm,
                                                      "number",
                                                      e.target.value
                                                    );
                                                },
                                              },
                                            }),
                                          ]
                                        ),
                                      ]),
                                      t._v(" "),
                                      n("show-error", {
                                        attrs: {
                                          "form-name": t.recordForm,
                                          "prop-name": "number",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]),
                              ]),
                              t._v(" "),
                              n(
                                "div",
                                { staticClass: "card-footer text-right" },
                                [
                                  n(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-info waves-effect waves-light",
                                      attrs: { type: "submit" },
                                    },
                                    [t._v(t._s(t.trans("general.save")))]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ],
                      2
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
        ).exports,
        i = {
          props: {
            student: {
              type: Object,
              default: function () {
                return {};
              },
            },
            readMode: { type: Boolean, default: !1 },
          },
          components: { editRecord: o },
          data: function () {
            return { record: null, editModal: !1 };
          },
          mounted: function () {},
          methods: {
            getAdmissionNumber: function (t) {
              return helper.getAdmissionNumber(t);
            },
            editRecord: function (t) {
              (this.record = t), (this.editModal = !0);
            },
            complete: function () {
              this.$emit("completed");
            },
            hasPermission: function (t) {
              return helper.hasPermission(t);
            },
          },
          computed: {},
          filters: {
            moment: function (t) {
              return helper.formatDate(t);
            },
            momentDateTime: function (t) {
              return helper.formatDateTime(t);
            },
          },
          watch: {},
        },
        r = Object(s.a)(
          i,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.student.id
              ? n(
                  "div",
                  [
                    n("div", { staticClass: "table-responsive" }, [
                      n("table", { staticClass: "table table-sm" }, [
                        n("thead", [
                          n("tr", [
                            n("th", [
                              t._v(
                                t._s(t.trans("student.admission_number_short"))
                              ),
                            ]),
                            t._v(" "),
                            n("th", [t._v(t._s(t.trans("academic.batch")))]),
                            t._v(" "),
                            n("th", [
                              t._v(t._s(t.trans("student.date_of_admission"))),
                            ]),
                            t._v(" "),
                            n("th", [
                              t._v(t._s(t.trans("student.date_of_promotion"))),
                            ]),
                            t._v(" "),
                            n("th", [
                              t._v(t._s(t.trans("student.promotion_remarks"))),
                            ]),
                            t._v(" "),
                            t.readMode
                              ? t._e()
                              : n("th", { staticClass: "table-option" }, [
                                  t._v(t._s(t.trans("general.action"))),
                                ]),
                          ]),
                        ]),
                        t._v(" "),
                        n(
                          "tbody",
                          t._l(t.student.student_records, function (e) {
                            return e.date_of_exit
                              ? t._e()
                              : n("tr", [
                                  n("td", [
                                    t._v(
                                      t._s(t.getAdmissionNumber(e.admission))
                                    ),
                                  ]),
                                  t._v(" "),
                                  n("td", [
                                    t._v(
                                      "\n                        " +
                                        t._s(
                                          e.batch.course.name +
                                            " " +
                                            e.batch.name
                                        ) +
                                        "\n                    "
                                    ),
                                  ]),
                                  t._v(" "),
                                  n("td", [
                                    n("span", [
                                      t._v(
                                        t._s(
                                          t._f("moment")(
                                            e.admission.date_of_admission
                                          )
                                        )
                                      ),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  n("td", [
                                    t._v(t._s(t._f("moment")(e.date_of_entry))),
                                  ]),
                                  t._v(" "),
                                  n("td", [
                                    n("span", [t._v(t._s(e.entry_remarks))]),
                                  ]),
                                  t._v(" "),
                                  t.readMode
                                    ? t._e()
                                    : n("td", { staticClass: "table-option" }, [
                                        t.$first(e, t.student.student_records)
                                          ? n(
                                              "button",
                                              {
                                                directives: [
                                                  {
                                                    name: "tooltip",
                                                    rawName: "v-tooltip",
                                                    value:
                                                      t.trans("general.edit"),
                                                    expression:
                                                      "trans('general.edit')",
                                                  },
                                                ],
                                                staticClass:
                                                  "btn btn-warning btn-sm",
                                                on: {
                                                  click: function (n) {
                                                    return (
                                                      n.preventDefault(),
                                                      t.editRecord(e)
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                n("i", {
                                                  staticClass: "fas fa-edit",
                                                }),
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.trans("general.edit")
                                                    ) +
                                                    "\n                        "
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ]),
                                ]);
                          }),
                          0
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    t.editModal && !t.readMode
                      ? n("edit-record", {
                          attrs: { student: t.student, record: t.record },
                          on: {
                            close: function (e) {
                              t.editModal = !1;
                            },
                            completed: t.complete,
                          },
                        })
                      : t._e(),
                  ],
                  1
                )
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = r.exports;
    },
    "25sf": function (t, e, n) {
      var a = n("rRZe");
      "string" == typeof a && (a = [[t.i, a, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      n("aET+")(a, s);
      a.locals && (t.exports = a.locals);
    },
    "3k/c": function (t, e, n) {
      "use strict";
      var a = n("vZqm");
      n.n(a).a;
    },
    "5/cv": function (t, e, n) {
      "use strict";
      var a = {
          components: {},
          data: function () {
            return {
              qualificationForm: new Form({
                standard: "",
                institute_name: "",
                board_name: "",
                result: "",
                start_period: "",
                end_period: "",
                upload_token: "",
                description: "",
              }),
              module_id: "",
              clearAttachment: !0,
            };
          },
          props: ["uuid", "qid", "name"],
          mounted: function () {
            (this.qualificationForm.upload_token = this.$uuid.v4()),
              this.qid && this.getQualification();
          },
          methods: {
            proceed: function () {
              this.qid ? this.updateQualification() : this.storeQualification();
            },
            storeQualification: function () {
              var t = this,
                e = this.$loading.show();
              (this.qualificationForm.start_period = moment(
                this.qualificationForm.start_period
              ).format("YYYY-MM")),
                (this.qualificationForm.end_period = moment(
                  this.qualificationForm.end_period
                ).format("YYYY-MM")),
                this.qualificationForm
                  .post("/api/student/" + this.uuid + "/qualification")
                  .then(function (n) {
                    toastr.success(n.message),
                      (t.clearAttachment = !t.clearAttachment),
                      t.$emit("completed"),
                      (t.qualificationForm.upload_token = t.$uuid.v4()),
                      e.hide();
                  })
                  .catch(function (t) {
                    e.hide(), helper.showErrorMsg(t);
                  });
            },
            getQualification: function () {
              var t = this,
                e = this.$loading.show();
              axios
                .get("/api/student/" + this.uuid + "/qualification/" + this.qid)
                .then(function (n) {
                  (t.qualificationForm.standard =
                    n.student_qualification.standard),
                    (t.qualificationForm.institute_name =
                      n.student_qualification.institute_name),
                    (t.qualificationForm.board_name =
                      n.student_qualification.board_name),
                    (t.qualificationForm.result =
                      n.student_qualification.result),
                    (t.qualificationForm.start_period =
                      n.student_qualification.start_period),
                    (t.qualificationForm.end_period =
                      n.student_qualification.end_period),
                    (t.qualificationForm.description =
                      n.student_qualification.description),
                    (t.qualificationForm.upload_token =
                      n.student_qualification.upload_token),
                    (t.module_id = n.student_qualification.id),
                    t.$emit("loaded"),
                    e.hide();
                })
                .catch(function (n) {
                  e.hide(), t.$router.push("/student/" + t.uuid);
                });
            },
            updateQualification: function () {
              var t = this,
                e = this.$loading.show();
              (this.qualificationForm.start_period = moment(
                this.qualificationForm.start_period
              ).format("YYYY-MM")),
                (this.qualificationForm.end_period = moment(
                  this.qualificationForm.end_period
                ).format("YYYY-MM")),
                this.qualificationForm
                  .patch(
                    "/api/student/" + this.uuid + "/qualification/" + this.qid
                  )
                  .then(function (n) {
                    toastr.success(n.message), t.$emit("completed"), e.hide();
                  })
                  .catch(function (t) {
                    e.hide(), helper.showErrorMsg(t);
                  });
            },
          },
        },
        s = n("KHd+"),
        o = Object(s.a)(
          a,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", [
              n(
                "form",
                {
                  on: {
                    submit: function (e) {
                      return e.preventDefault(), t.proceed(e);
                    },
                    keydown: function (e) {
                      return t.qualificationForm.errors.clear(e.target.name);
                    },
                  },
                },
                [
                  n("div", { staticClass: "row" }, [
                    n("div", { staticClass: "col-12 col-sm-6" }, [
                      n(
                        "div",
                        { staticClass: "form-group" },
                        [
                          n("label", { attrs: { for: "" } }, [
                            t._v(
                              t._s(t.trans("student.qualification_standard"))
                            ),
                          ]),
                          t._v(" "),
                          n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.qualificationForm.standard,
                                expression: "qualificationForm.standard",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "standard",
                              placeholder: t.trans(
                                "student.qualification_standard"
                              ),
                            },
                            domProps: { value: t.qualificationForm.standard },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(
                                    t.qualificationForm,
                                    "standard",
                                    e.target.value
                                  );
                              },
                            },
                          }),
                          t._v(" "),
                          n("show-error", {
                            attrs: {
                              "form-name": t.qualificationForm,
                              "prop-name": "standard",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    n("div", { staticClass: "col-12 col-sm-6" }, [
                      n(
                        "div",
                        { staticClass: "form-group" },
                        [
                          n("label", { attrs: { for: "" } }, [
                            t._v(t._s(t.trans("student.institute_name"))),
                          ]),
                          t._v(" "),
                          n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.qualificationForm.institute_name,
                                expression: "qualificationForm.institute_name",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "institute_name",
                              placeholder: t.trans("student.institute_name"),
                            },
                            domProps: {
                              value: t.qualificationForm.institute_name,
                            },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(
                                    t.qualificationForm,
                                    "institute_name",
                                    e.target.value
                                  );
                              },
                            },
                          }),
                          t._v(" "),
                          n("show-error", {
                            attrs: {
                              "form-name": t.qualificationForm,
                              "prop-name": "institute_name",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    n("div", { staticClass: "col-12 col-sm-6" }, [
                      n(
                        "div",
                        { staticClass: "form-group" },
                        [
                          n("label", { attrs: { for: "" } }, [
                            t._v(t._s(t.trans("student.board_name"))),
                          ]),
                          t._v(" "),
                          n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.qualificationForm.board_name,
                                expression: "qualificationForm.board_name",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "board_name",
                              placeholder: t.trans("student.board_name"),
                            },
                            domProps: { value: t.qualificationForm.board_name },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(
                                    t.qualificationForm,
                                    "board_name",
                                    e.target.value
                                  );
                              },
                            },
                          }),
                          t._v(" "),
                          n("show-error", {
                            attrs: {
                              "form-name": t.qualificationForm,
                              "prop-name": "board_name",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    n("div", { staticClass: "col-12 col-sm-6" }, [
                      n(
                        "div",
                        { staticClass: "form-group" },
                        [
                          n("label", { attrs: { for: "" } }, [
                            t._v(t._s(t.trans("student.qualification_result"))),
                          ]),
                          t._v(" "),
                          n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.qualificationForm.result,
                                expression: "qualificationForm.result",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "result",
                              placeholder: t.trans(
                                "student.qualification_result"
                              ),
                            },
                            domProps: { value: t.qualificationForm.result },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(
                                    t.qualificationForm,
                                    "result",
                                    e.target.value
                                  );
                              },
                            },
                          }),
                          t._v(" "),
                          n("show-error", {
                            attrs: {
                              "form-name": t.qualificationForm,
                              "prop-name": "result",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    n("div", { staticClass: "col-12 col-sm-6" }, [
                      n(
                        "div",
                        { staticClass: "form-group" },
                        [
                          n("label", { attrs: { for: "" } }, [
                            t._v(
                              t._s(
                                t.trans("student.qualification_start_period")
                              )
                            ),
                          ]),
                          t._v(" "),
                          n("vue-monthly-picker", {
                            attrs: {
                              name: "start_period",
                              placeHolder: t.trans(
                                "student.qualification_start_period"
                              ),
                              dateFormat: "YYYY-MM ",
                            },
                            model: {
                              value: t.qualificationForm.start_period,
                              callback: function (e) {
                                t.$set(t.qualificationForm, "start_period", e);
                              },
                              expression: "qualificationForm.start_period",
                            },
                          }),
                          t._v(" "),
                          n("show-error", {
                            attrs: {
                              "form-name": t.qualificationForm,
                              "prop-name": "start_period",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    n("div", { staticClass: "col-12 col-sm-6" }, [
                      n(
                        "div",
                        { staticClass: "form-group" },
                        [
                          n("label", { attrs: { for: "" } }, [
                            t._v(
                              t._s(t.trans("student.qualification_end_period"))
                            ),
                          ]),
                          t._v(" "),
                          n("vue-monthly-picker", {
                            attrs: {
                              name: "end_period",
                              placeHolder: t.trans(
                                "student.qualification_end_period"
                              ),
                              dateFormat: "YYYY-MM ",
                            },
                            model: {
                              value: t.qualificationForm.end_period,
                              callback: function (e) {
                                t.$set(t.qualificationForm, "end_period", e);
                              },
                              expression: "qualificationForm.end_period",
                            },
                          }),
                          t._v(" "),
                          n("show-error", {
                            attrs: {
                              "form-name": t.qualificationForm,
                              "prop-name": "end_period",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "form-group" },
                    [
                      n("file-upload-input", {
                        attrs: {
                          "button-text": t.trans("general.upload_document"),
                          token: t.qualificationForm.upload_token,
                          module: "student_qualification",
                          "clear-file": t.clearAttachment,
                          "module-id": t.module_id,
                        },
                      }),
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "form-group" },
                    [
                      n("autosize-textarea", {
                        attrs: {
                          rows: "2",
                          name: "description",
                          placeholder: t.trans(
                            "student.qualification_description"
                          ),
                        },
                        model: {
                          value: t.qualificationForm.description,
                          callback: function (e) {
                            t.$set(t.qualificationForm, "description", e);
                          },
                          expression: "qualificationForm.description",
                        },
                      }),
                      t._v(" "),
                      n("show-error", {
                        attrs: {
                          "form-name": t.qualificationForm,
                          "prop-name": "description",
                        },
                      }),
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "button",
                    {
                      staticClass:
                        "btn btn-info waves-effect waves-light pull-right",
                      attrs: { type: "submit" },
                    },
                    [
                      t.qid
                        ? n("span", [t._v(t._s(t.trans("general.update")))])
                        : n("span", [t._v(t._s(t.trans("general.save")))]),
                    ]
                  ),
                ]
              ),
              t._v(" "),
              n("div", { staticClass: "clearfix" }),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        i = {
          components: { qualificationForm: o },
          props: ["student"],
          methods: {
            complete: function () {
              this.$emit("completed"), this.$emit("close");
            },
          },
        },
        r =
          (n("KITK"),
          Object(s.a)(
            i,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("transition", { attrs: { name: "modal" } }, [
                n("div", { staticClass: "modal-mask" }, [
                  n("div", { staticClass: "modal-wrapper" }, [
                    n("div", { staticClass: "modal-container modal-lg" }, [
                      n(
                        "div",
                        { staticClass: "modal-header" },
                        [
                          t._t("header", [
                            t._v(
                              "\n                        " +
                                t._s(t.trans("student.add_new_qualification")) +
                                "\n                        "
                            ),
                            n(
                              "span",
                              {
                                staticClass: "float-right pointer",
                                on: {
                                  click: function (e) {
                                    return t.$emit("close");
                                  },
                                },
                              },
                              [t._v("x")]
                            ),
                          ]),
                        ],
                        2
                      ),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "modal-body" },
                        [
                          t._t("body", [
                            n("qualification-form", {
                              attrs: { uuid: t.student.uuid },
                              on: { completed: t.complete },
                            }),
                          ]),
                        ],
                        2
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
          ).exports),
        d = {
          components: { qualificationForm: o },
          props: ["student", "qid"],
          methods: {
            complete: function () {
              this.$emit("completed"), this.$emit("close");
            },
          },
        },
        c =
          (n("jVup"),
          Object(s.a)(
            d,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("transition", { attrs: { name: "modal" } }, [
                n("div", { staticClass: "modal-mask" }, [
                  n("div", { staticClass: "modal-wrapper" }, [
                    n("div", { staticClass: "modal-container modal-lg" }, [
                      n(
                        "div",
                        { staticClass: "modal-header" },
                        [
                          t._t("header", [
                            t._v(
                              "\n                        " +
                                t._s(t.trans("student.edit_qualification")) +
                                "\n                        "
                            ),
                            n(
                              "span",
                              {
                                staticClass: "float-right pointer",
                                on: {
                                  click: function (e) {
                                    return t.$emit("close");
                                  },
                                },
                              },
                              [t._v("x")]
                            ),
                          ]),
                        ],
                        2
                      ),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "modal-body" },
                        [
                          t._t("body", [
                            n("qualification-form", {
                              attrs: { uuid: t.student.uuid, qid: t.qid },
                              on: { completed: t.complete },
                            }),
                          ]),
                        ],
                        2
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
          ).exports),
        u = {
          components: { qualificationForm: o },
          props: ["student", "qid"],
          mounted: function () {
            this.qid && this.getStudentQualification();
          },
          data: function () {
            return { student_qualification: [], attachments: [] };
          },
          methods: {
            getStudentQualification: function () {
              var t = this,
                e = this.$loading.show();
              axios
                .get(
                  "/api/student/" +
                    this.student.uuid +
                    "/qualification/" +
                    this.qid
                )
                .then(function (n) {
                  (t.student_qualification = n.student_qualification),
                    (t.attachments = n.attachments),
                    e.hide();
                })
                .catch(function (t) {
                  e.hide(), helper.showErrorMsg(t);
                });
            },
          },
          computed: {
            authToken: function () {
              return helper.getAuthToken();
            },
          },
          filters: {
            momentDateTime: function (t) {
              return helper.formatDateTime(t);
            },
          },
        },
        l = Object(s.a)(
          u,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("transition", { attrs: { name: "modal" } }, [
              n("div", { staticClass: "modal-mask" }, [
                n("div", { staticClass: "modal-wrapper" }, [
                  n("div", { staticClass: "modal-container modal-lg" }, [
                    n(
                      "div",
                      { staticClass: "modal-header" },
                      [
                        t._t("header", [
                          t._v(
                            "\n                        " +
                              t._s(t.trans("student.view_qualification")) +
                              "\n                        "
                          ),
                          n(
                            "span",
                            {
                              staticClass: "float-right pointer",
                              on: {
                                click: function (e) {
                                  return t.$emit("close");
                                },
                              },
                            },
                            [t._v("x")]
                          ),
                        ]),
                      ],
                      2
                    ),
                    t._v(" "),
                    n(
                      "div",
                      { staticClass: "modal-body" },
                      [
                        t._t("body", [
                          n("div", { staticClass: "table-responsive" }, [
                            n(
                              "table",
                              {
                                staticClass: "table table-sm custom-show-table",
                              },
                              [
                                n("tbody", [
                                  n("tr", [
                                    n("td", [
                                      t._v(
                                        t._s(
                                          t.trans(
                                            "student.qualification_standard"
                                          )
                                        )
                                      ),
                                    ]),
                                    t._v(" "),
                                    n("td", [
                                      t._v(
                                        t._s(t.student_qualification.standard)
                                      ),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  n("tr", [
                                    n("td", [
                                      t._v(
                                        t._s(t.trans("student.institute_name"))
                                      ),
                                    ]),
                                    t._v(" "),
                                    n("td", [
                                      t._v(
                                        t._s(
                                          t.student_qualification.institute_name
                                        )
                                      ),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  n("tr", [
                                    n("td", [
                                      t._v(t._s(t.trans("student.board_name"))),
                                    ]),
                                    t._v(" "),
                                    n("td", [
                                      t._v(
                                        t._s(t.student_qualification.board_name)
                                      ),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  n("tr", [
                                    n("td", [
                                      t._v(
                                        t._s(
                                          t.trans(
                                            "student.qualification_start_period"
                                          )
                                        )
                                      ),
                                    ]),
                                    t._v(" "),
                                    n("td", [
                                      t._v(
                                        t._s(
                                          t.student_qualification.start_period
                                        )
                                      ),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  n("tr", [
                                    n("td", [
                                      t._v(
                                        t._s(
                                          t.trans(
                                            "student.qualification_end_period"
                                          )
                                        )
                                      ),
                                    ]),
                                    t._v(" "),
                                    n("td", [
                                      t._v(
                                        t._s(t.student_qualification.end_period)
                                      ),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  n("tr", [
                                    n("td", [
                                      t._v(
                                        t._s(
                                          t.trans(
                                            "student.qualification_result"
                                          )
                                        )
                                      ),
                                    ]),
                                    t._v(" "),
                                    n("td", [
                                      t._v(
                                        t._s(t.student_qualification.result)
                                      ),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  n("tr", [
                                    n("td", [
                                      t._v(
                                        t._s(
                                          t.trans(
                                            "student.qualification_description"
                                          )
                                        )
                                      ),
                                    ]),
                                    t._v(" "),
                                    n("td", [
                                      t._v(
                                        t._s(
                                          t.student_qualification.description
                                        )
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]
                            ),
                          ]),
                          t._v(" "),
                          t.attachments.length
                            ? n("div", [
                                n(
                                  "ul",
                                  { staticClass: "m-t-10 upload-file-list" },
                                  t._l(t.attachments, function (e) {
                                    return n(
                                      "li",
                                      { staticClass: "upload-file-list-item" },
                                      [
                                        n(
                                          "a",
                                          {
                                            staticClass: "no-link-color",
                                            attrs: {
                                              href:
                                                "/student/" +
                                                t.student.uuid +
                                                "/qualification/" +
                                                t.student_qualification.id +
                                                "/attachment/" +
                                                e.uuid +
                                                "/download?token=" +
                                                t.authToken,
                                            },
                                          },
                                          [
                                            n("i", {
                                              class: [
                                                "file-icon",
                                                "fas",
                                                "fa-lg",
                                                e.file_info.icon,
                                              ],
                                            }),
                                            t._v(" "),
                                            n(
                                              "span",
                                              {
                                                staticClass:
                                                  "upload-file-list-item-size",
                                              },
                                              [t._v(t._s(e.file_info.size))]
                                            ),
                                            t._v(" " + t._s(e.user_filename)),
                                          ]
                                        ),
                                      ]
                                    );
                                  }),
                                  0
                                ),
                              ])
                            : t._e(),
                          t._v(" "),
                          n("hr"),
                          t._v(" "),
                          n("p", [
                            n("i", { staticClass: "far fa-clock" }),
                            t._v(" "),
                            n("small", [
                              t._v(
                                t._s(t.trans("general.created_at")) +
                                  " " +
                                  t._s(
                                    t._f("momentDateTime")(
                                      t.student_qualification.created_at
                                    )
                                  )
                              ),
                            ]),
                            t._v(" "),
                            n("span", { staticClass: "pull-right" }, [
                              n("i", { staticClass: "far fa-clock" }),
                              t._v(" "),
                              n("small", [
                                t._v(
                                  t._s(t.trans("general.updated_at")) +
                                    " " +
                                    t._s(
                                      t._f("momentDateTime")(
                                        t.student_qualification.updated_at
                                      )
                                    )
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ],
                      2
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
        ).exports,
        m = {
          props: {
            student: {
              type: Object,
              default: function () {
                return {};
              },
            },
            readMode: { type: Boolean, default: !1 },
          },
          components: {
            createQualification: r,
            editQualification: c,
            showQualification: l,
          },
          data: function () {
            return {
              student_qualifications: { total: 0, data: [] },
              showId: null,
              editId: null,
              filter: { page_length: helper.getConfig("page_length") },
              addModal: !1,
              editModal: !1,
              showModal: !1,
            };
          },
          mounted: function () {
            ((this.readMode &&
              !helper.hasPermission("list-student") &&
              !helper.hasPermission("list-class-teacher-wise-student")) ||
              (!this.readMode && !helper.hasPermission("edit-student"))) &&
              (helper.notAccessibleMsg(), this.$router.push("/dashboard")),
              this.getStudentQualifications();
          },
          methods: {
            getStudentName: function () {
              return helper.getStudentName(this.student);
            },
            editAction: function (t) {
              (this.editId = t.id), (this.editModal = !0);
            },
            showAction: function (t) {
              (this.showId = t.id), (this.showModal = !0);
            },
            getStudentQualifications: function (t) {
              var e = this,
                n = this.$loading.show();
              "number" != typeof t && (t = 1);
              var a = helper.getFilterURL(this.filter);
              axios
                .get(
                  "/api/student/" +
                    this.student.uuid +
                    "/qualification?page=" +
                    t +
                    a
                )
                .then(function (t) {
                  (e.student_qualifications = t), n.hide();
                })
                .catch(function (t) {
                  n.hide(), helper.showErrorMsg(t);
                });
            },
            confirmDelete: function (t) {
              var e = this;
              return function (n) {
                return e.deleteStudentQualification(t);
              };
            },
            deleteStudentQualification: function (t) {
              var e = this,
                n = this.$loading.show();
              axios
                .delete(
                  "/api/student/" + this.student.uuid + "/qualification/" + t.id
                )
                .then(function (t) {
                  toastr.success(t.message),
                    e.getStudentQualifications(),
                    n.hide();
                })
                .catch(function (t) {
                  n.hide(), helper.showErrorMsg(t);
                });
            },
          },
          filters: {
            momentDateTime: function (t) {
              return helper.formatDateTime(t);
            },
          },
          watch: {
            student: function (t) {
              this.getStudentQualifications();
            },
          },
        },
        _ = Object(s.a)(
          m,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              [
                t.readMode
                  ? t._e()
                  : n(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-info pull-right",
                        on: {
                          click: function (e) {
                            t.addModal = !0;
                          },
                        },
                      },
                      [
                        n("i", { staticClass: "fas fa-plus" }),
                        t._v(
                          " " + t._s(t.trans("student.add_new_qualification"))
                        ),
                      ]
                    ),
                t._v(" "),
                t.student_qualifications.total
                  ? n("div", { staticClass: "table-responsive" }, [
                      n("table", { staticClass: "table table-sm" }, [
                        n("thead", [
                          n("tr", [
                            n("th", [
                              t._v(
                                t._s(t.trans("student.qualification_standard"))
                              ),
                            ]),
                            t._v(" "),
                            n("th", [
                              t._v(t._s(t.trans("student.institute_name"))),
                            ]),
                            t._v(" "),
                            n("th", [
                              t._v(
                                t._s(t.trans("student.qualification_period"))
                              ),
                            ]),
                            t._v(" "),
                            n("th", [
                              t._v(
                                t._s(t.trans("student.qualification_result"))
                              ),
                            ]),
                            t._v(" "),
                            n("th", { staticClass: "table-option" }, [
                              t._v(t._s(t.trans("general.action"))),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        n(
                          "tbody",
                          t._l(t.student_qualifications.data, function (e) {
                            return n("tr", [
                              n("td", {
                                domProps: { textContent: t._s(e.standard) },
                              }),
                              t._v(" "),
                              n("td", {
                                domProps: {
                                  textContent: t._s(e.institute_name),
                                },
                              }),
                              t._v(" "),
                              n("td", [
                                t._v(
                                  t._s(e.start_period) +
                                    " " +
                                    t._s(t.trans("general.to")) +
                                    " " +
                                    t._s(e.end_period)
                                ),
                              ]),
                              t._v(" "),
                              n("td", {
                                domProps: { textContent: t._s(e.result) },
                              }),
                              t._v(" "),
                              n("td", { staticClass: "table-option" }, [
                                n("div", { staticClass: "btn-group" }, [
                                  n(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "tooltip",
                                          rawName: "v-tooltip",
                                          value: t.trans(
                                            "student.view_qualification"
                                          ),
                                          expression:
                                            "trans('student.view_qualification')",
                                        },
                                      ],
                                      staticClass: "btn btn-success btn-sm",
                                      on: {
                                        click: function (n) {
                                          return (
                                            n.preventDefault(), t.showAction(e)
                                          );
                                        },
                                      },
                                    },
                                    [
                                      n("i", {
                                        staticClass:
                                          "fas fa-arrow-circle-right",
                                      }),
                                    ]
                                  ),
                                  t._v(" "),
                                  t.readMode
                                    ? t._e()
                                    : n(
                                        "button",
                                        {
                                          directives: [
                                            {
                                              name: "tooltip",
                                              rawName: "v-tooltip",
                                              value: t.trans(
                                                "student.edit_qualification"
                                              ),
                                              expression:
                                                "trans('student.edit_qualification')",
                                            },
                                          ],
                                          staticClass: "btn btn-info btn-sm",
                                          on: {
                                            click: function (n) {
                                              return (
                                                n.preventDefault(),
                                                t.editAction(e)
                                              );
                                            },
                                          },
                                        },
                                        [n("i", { staticClass: "fas fa-edit" })]
                                      ),
                                  t._v(" "),
                                  t.readMode
                                    ? t._e()
                                    : n(
                                        "button",
                                        {
                                          directives: [
                                            {
                                              name: "confirm",
                                              rawName: "v-confirm",
                                              value: { ok: t.confirmDelete(e) },
                                              expression:
                                                "{ok: confirmDelete(student_qualification)}",
                                            },
                                            {
                                              name: "tooltip",
                                              rawName: "v-tooltip",
                                              value: t.trans(
                                                "student.delete_qualification"
                                              ),
                                              expression:
                                                "trans('student.delete_qualification')",
                                            },
                                          ],
                                          key: e.id,
                                          staticClass: "btn btn-danger btn-sm",
                                        },
                                        [
                                          n("i", {
                                            staticClass: "fas fa-trash",
                                          }),
                                        ]
                                      ),
                                ]),
                              ]),
                            ]);
                          }),
                          0
                        ),
                      ]),
                    ])
                  : t._e(),
                t._v(" "),
                t.readMode
                  ? [
                      t.student_qualifications.total
                        ? t._e()
                        : n("div", { staticClass: "font-80pc" }, [
                            t._v(t._s(t.trans("general.no_result_found"))),
                          ]),
                    ]
                  : [
                      t.student_qualifications.total
                        ? t._e()
                        : n(
                            "module-info",
                            {
                              attrs: {
                                module: "student",
                                title: "qualification_module_title",
                                description: "qualification_module_description",
                                icon: "list",
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "btn" }, slot: "btn" },
                                [
                                  n(
                                    "button",
                                    {
                                      staticClass: "btn btn-info btn-md",
                                      on: {
                                        click: function (e) {
                                          t.addModal = !0;
                                        },
                                      },
                                    },
                                    [
                                      n("i", { staticClass: "fas fa-plus" }),
                                      t._v(
                                        " " + t._s(t.trans("general.add_new"))
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                    ],
                t._v(" "),
                n("pagination-record", {
                  attrs: {
                    "page-length": t.filter.page_length,
                    records: t.student_qualifications,
                  },
                  on: {
                    "update:pageLength": function (e) {
                      return t.$set(t.filter, "page_length", e);
                    },
                    "update:page-length": function (e) {
                      return t.$set(t.filter, "page_length", e);
                    },
                    updateRecords: t.getStudentQualifications,
                  },
                  nativeOn: {
                    change: function (e) {
                      return t.getStudentQualifications(e);
                    },
                  },
                }),
                t._v(" "),
                t.addModal && !t.readMode
                  ? n("create-qualification", {
                      attrs: { student: t.student },
                      on: {
                        close: function (e) {
                          t.addModal = !1;
                        },
                        completed: t.getStudentQualifications,
                      },
                    })
                  : t._e(),
                t._v(" "),
                t.editModal && !t.readMode
                  ? n("edit-qualification", {
                      attrs: { student: t.student, qid: t.editId },
                      on: {
                        close: function (e) {
                          t.editModal = !1;
                        },
                        completed: t.getStudentQualifications,
                      },
                    })
                  : t._e(),
                t._v(" "),
                t.showModal
                  ? n("show-qualification", {
                      attrs: { student: t.student, qid: t.showId },
                      on: {
                        close: function (e) {
                          t.showModal = !1;
                        },
                      },
                    })
                  : t._e(),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = _.exports;
    },
    "8KFr": function (t, e, n) {
      (t.exports = n("I1BE")(!1)).push([
        t.i,
        "\n.loading-overlay{\n    z-index: 1060;\n}\n",
        "",
      ]);
    },
    "8zNP": function (t, e, n) {
      "use strict";
      var a = n("NbZL");
      n.n(a).a;
    },
    FJEe: function (t, e, n) {
      var a = n("wXZY");
      "string" == typeof a && (a = [[t.i, a, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      n("aET+")(a, s);
      a.locals && (t.exports = a.locals);
    },
    FmJO: function (t, e, n) {
      var a = n("QD64");
      "string" == typeof a && (a = [[t.i, a, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      n("aET+")(a, s);
      a.locals && (t.exports = a.locals);
    },
    H1GJ: function (t, e, n) {
      (t.exports = n("I1BE")(!1)).push([
        t.i,
        "\n.loading-overlay{\n    z-index: 1060;\n}\n",
        "",
      ]);
    },
    KITK: function (t, e, n) {
      "use strict";
      var a = n("gFxV");
      n.n(a).a;
    },
    LDGJ: function (t, e, n) {
      "use strict";
      var a = n("25sf");
      n.n(a).a;
    },
    "Mk/M": function (t, e, n) {
      "use strict";
      var a = {
          props: {
            student: {
              type: Object,
              default: function () {
                return {};
              },
            },
            readMode: { type: Boolean, default: !1 },
          },
          components: {},
          data: function () {
            return {
              terminationForm: new Form({
                student_record_id: "",
                date_of_termination: "",
                termination_remarks: "",
                termination_reason: "",
                upload_token: "",
              }),
              termination_reasons: [],
              clearAttachment: !1,
              module_id: "",
              student_record: {},
              showModal: !1,
              attachments: [],
            };
          },
          mounted: function () {
            (this.terminationForm.upload_token = this.$uuid.v4()),
              this.getPreRequisite();
          },
          methods: {
            getStudentName: function (t) {
              return helper.getStudentName(t);
            },
            getPreRequisite: function () {
              var t = this,
                e = this.$loading.show();
              axios
                .get("/api/student/pre-requisite?form_type=termination")
                .then(function (n) {
                  (t.termination_reasons = n.termination_reasons), e.hide();
                })
                .catch(function (t) {
                  e.hide(), helper.showErrorMsg(t);
                });
            },
            submit: function () {
              var t = this,
                e = this.$loading.show();
              this.terminationForm
                .post(
                  "/api/student/" +
                    this.student.uuid +
                    "/terminate/" +
                    this.terminationForm.student_record_id
                )
                .then(function (n) {
                  toastr.success(n.message),
                    (t.clearAttachment = !t.clearAttachment),
                    (t.terminationForm.upload_token = t.$uuid.v4()),
                    t.$emit("completed"),
                    e.hide();
                })
                .catch(function (t) {
                  e.hide(), helper.showErrorMsg(t);
                });
            },
            getAdmissionNumber: function (t) {
              return helper.getAdmissionNumber(t);
            },
            showTerminationDetail: function (t) {
              var e = this;
              this.student_record = t;
              var n = this.$loading.show();
              axios
                .get(
                  "/api/student/" +
                    this.student.uuid +
                    "/terminate/" +
                    this.student_record.id +
                    "/attachment"
                )
                .then(function (t) {
                  (e.attachments = t.attachments), n.hide();
                })
                .catch(function (t) {
                  n.hide(), helper.showErrorMsg(t);
                }),
                (this.showModal = !0);
            },
          },
          computed: {
            hasTerminationRecord: function () {
              return this.student.student_records.some(function (t) {
                return t.date_of_exit;
              });
            },
            authToken: function () {
              return helper.getAuthToken();
            },
          },
          filters: {
            moment: function (t) {
              return helper.formatDate(t);
            },
            momentDateTime: function (t) {
              return helper.formatDateTime(t);
            },
          },
          watch: {},
        },
        s = n("KHd+"),
        o = Object(s.a)(
          a,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.student.id
              ? n(
                  "div",
                  [
                    t.readMode
                      ? t._e()
                      : [
                          n(
                            "form",
                            {
                              on: {
                                submit: function (e) {
                                  return e.preventDefault(), t.submit(e);
                                },
                                keydown: function (e) {
                                  return t.terminationForm.errors.clear(
                                    e.target.name
                                  );
                                },
                              },
                            },
                            [
                              n("div", { staticClass: "row" }, [
                                n("div", { staticClass: "col-12 col-sm-4" }, [
                                  n(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      n("label", { attrs: { for: "" } }, [
                                        t._v(t._s(t.trans("academic.batch"))),
                                      ]),
                                      t._v(" "),
                                      n(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                t.terminationForm
                                                  .student_record_id,
                                              expression:
                                                "terminationForm.student_record_id",
                                            },
                                          ],
                                          staticClass: "custom-select col-12",
                                          attrs: { name: "student_record_id" },
                                          on: {
                                            change: function (e) {
                                              var n = Array.prototype.filter
                                                .call(
                                                  e.target.options,
                                                  function (t) {
                                                    return t.selected;
                                                  }
                                                )
                                                .map(function (t) {
                                                  return "_value" in t
                                                    ? t._value
                                                    : t.value;
                                                });
                                              t.$set(
                                                t.terminationForm,
                                                "student_record_id",
                                                e.target.multiple ? n : n[0]
                                              );
                                            },
                                          },
                                        },
                                        [
                                          n(
                                            "option",
                                            {
                                              attrs: {
                                                value: "",
                                                selected: "",
                                              },
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.trans("general.select_one")
                                                )
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          t._l(
                                            t.student.student_records,
                                            function (e) {
                                              return e.date_of_exit
                                                ? t._e()
                                                : n(
                                                    "option",
                                                    {
                                                      domProps: { value: e.id },
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                            " +
                                                          t._s(
                                                            e.batch.course
                                                              .name +
                                                              " " +
                                                              e.batch.name
                                                          ) +
                                                          "\n                          "
                                                      ),
                                                    ]
                                                  );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                      t._v(" "),
                                      n("show-error", {
                                        attrs: {
                                          "form-name": t.terminationForm,
                                          "prop-name": "termination_reason",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]),
                                t._v(" "),
                                n("div", { staticClass: "col-12 col-sm-4" }, [
                                  n(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      n("label", { attrs: { for: "" } }, [
                                        t._v(
                                          t._s(
                                            t.trans(
                                              "student.date_of_termination"
                                            )
                                          )
                                        ),
                                      ]),
                                      t._v(" "),
                                      n("datepicker", {
                                        attrs: {
                                          bootstrapStyling: !0,
                                          placeholder: t.trans(
                                            "student.date_of_termination"
                                          ),
                                        },
                                        on: {
                                          selected: function (e) {
                                            return t.terminationForm.errors.clear(
                                              "date_of_termination"
                                            );
                                          },
                                        },
                                        model: {
                                          value:
                                            t.terminationForm
                                              .date_of_termination,
                                          callback: function (e) {
                                            t.$set(
                                              t.terminationForm,
                                              "date_of_termination",
                                              e
                                            );
                                          },
                                          expression:
                                            "terminationForm.date_of_termination",
                                        },
                                      }),
                                      t._v(" "),
                                      n("show-error", {
                                        attrs: {
                                          "form-name": t.terminationForm,
                                          "prop-name": "date_of_termination",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]),
                                t._v(" "),
                                n("div", { staticClass: "col-12 col-sm-4" }, [
                                  n(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      n("label", { attrs: { for: "" } }, [
                                        t._v(
                                          t._s(
                                            t.trans(
                                              "student.termination_reason"
                                            )
                                          )
                                        ),
                                      ]),
                                      t._v(" "),
                                      n(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                t.terminationForm
                                                  .termination_reason,
                                              expression:
                                                "terminationForm.termination_reason",
                                            },
                                          ],
                                          staticClass: "custom-select col-12",
                                          attrs: { name: "termination_reason" },
                                          on: {
                                            change: function (e) {
                                              var n = Array.prototype.filter
                                                .call(
                                                  e.target.options,
                                                  function (t) {
                                                    return t.selected;
                                                  }
                                                )
                                                .map(function (t) {
                                                  return "_value" in t
                                                    ? t._value
                                                    : t.value;
                                                });
                                              t.$set(
                                                t.terminationForm,
                                                "termination_reason",
                                                e.target.multiple ? n : n[0]
                                              );
                                            },
                                          },
                                        },
                                        [
                                          n(
                                            "option",
                                            {
                                              attrs: {
                                                value: "",
                                                selected: "",
                                              },
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.trans("general.select_one")
                                                )
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          t._l(
                                            t.termination_reasons,
                                            function (e) {
                                              return n(
                                                "option",
                                                {
                                                  domProps: { value: e.value },
                                                },
                                                [
                                                  t._v(
                                                    "\n                            " +
                                                      t._s(e.text) +
                                                      "\n                          "
                                                  ),
                                                ]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                      t._v(" "),
                                      n("show-error", {
                                        attrs: {
                                          "form-name": t.terminationForm,
                                          "prop-name": "termination_reason",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]),
                              ]),
                              t._v(" "),
                              n("div", { staticClass: "row" }, [
                                n("div", { staticClass: "col-12 col-sm-12" }, [
                                  n(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      n("label", { attrs: { for: "" } }, [
                                        t._v(
                                          t._s(
                                            t.trans(
                                              "student.termination_remarks"
                                            )
                                          )
                                        ),
                                      ]),
                                      t._v(" "),
                                      n("autosize-textarea", {
                                        attrs: {
                                          rows: "3",
                                          name: "termination_remarks",
                                          placeholder: t.trans(
                                            "student.termination_remarks"
                                          ),
                                        },
                                        model: {
                                          value:
                                            t.terminationForm
                                              .termination_remarks,
                                          callback: function (e) {
                                            t.$set(
                                              t.terminationForm,
                                              "termination_remarks",
                                              e
                                            );
                                          },
                                          expression:
                                            "terminationForm.termination_remarks",
                                        },
                                      }),
                                      t._v(" "),
                                      n("show-error", {
                                        attrs: {
                                          "form-name": t.terminationForm,
                                          "prop-name": "termination_remarks",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]),
                                t._v(" "),
                                n("div", { staticClass: "col-12" }, [
                                  n("label", [t._v(" ")]),
                                  t._v(" "),
                                  n(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      n("file-upload-input", {
                                        attrs: {
                                          "button-text": t.trans(
                                            "general.upload_document"
                                          ),
                                          token: t.terminationForm.upload_token,
                                          module: "student_record",
                                          "clear-file": t.clearAttachment,
                                          "module-id": t.module_id,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]),
                              ]),
                              t._v(" "),
                              n(
                                "div",
                                { staticClass: "card-footer text-right" },
                                [
                                  n(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-info waves-effect waves-light",
                                      attrs: { type: "submit" },
                                    },
                                    [t._v(t._s(t.trans("general.save")))]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ],
                    t._v(" "),
                    t.hasTerminationRecord
                      ? n("div", { staticClass: "table-responsive" }, [
                          n("table", { staticClass: "table table-sm" }, [
                            n("thead", [
                              n("tr", [
                                n("th", [
                                  t._v(
                                    t._s(
                                      t.trans("student.admission_number_short")
                                    )
                                  ),
                                ]),
                                t._v(" "),
                                n("th", [
                                  t._v(t._s(t.trans("academic.batch"))),
                                ]),
                                t._v(" "),
                                n("th", [
                                  t._v(
                                    t._s(t.trans("student.date_of_admission"))
                                  ),
                                ]),
                                t._v(" "),
                                n("th", [
                                  t._v(
                                    t._s(t.trans("student.date_of_promotion"))
                                  ),
                                ]),
                                t._v(" "),
                                n("th", [
                                  t._v(
                                    t._s(t.trans("student.date_of_termination"))
                                  ),
                                ]),
                                t._v(" "),
                                n("th", [
                                  t._v(
                                    t._s(t.trans("student.termination_reason"))
                                  ),
                                ]),
                                t._v(" "),
                                n("th"),
                              ]),
                            ]),
                            t._v(" "),
                            n(
                              "tbody",
                              t._l(t.student.student_records, function (e) {
                                return e.date_of_exit
                                  ? n("tr", [
                                      n("td", [
                                        t._v(
                                          t._s(
                                            t.getAdmissionNumber(e.admission)
                                          )
                                        ),
                                      ]),
                                      t._v(" "),
                                      n("td", [
                                        t._v(
                                          t._s(
                                            e.batch.course.name +
                                              " " +
                                              e.batch.name
                                          )
                                        ),
                                      ]),
                                      t._v(" "),
                                      n("td", [
                                        t._v(
                                          t._s(t._f("moment")(e.date_of_entry))
                                        ),
                                      ]),
                                      t._v(" "),
                                      n("td", [
                                        n("span", [
                                          t._v(
                                            t._s(
                                              t._f("moment")(
                                                e.admission.date_of_admission
                                              )
                                            )
                                          ),
                                        ]),
                                      ]),
                                      t._v(" "),
                                      n("td", [
                                        e.date_of_exit
                                          ? n("span", [
                                              t._v(
                                                t._s(
                                                  t._f("moment")(e.date_of_exit)
                                                )
                                              ),
                                            ])
                                          : n("span", [t._v("-")]),
                                      ]),
                                      t._v(" "),
                                      n("td", [
                                        e.date_of_exit
                                          ? n("span", [
                                              t._v(
                                                t._s(
                                                  t.trans(
                                                    "student.termination_reason_" +
                                                      e.termination_reason
                                                  )
                                                )
                                              ),
                                            ])
                                          : n("span", [t._v("-")]),
                                      ]),
                                      t._v(" "),
                                      n("td", [
                                        n(
                                          "button",
                                          {
                                            staticClass: "btn btn-info btn-sm",
                                            on: {
                                              click: function (n) {
                                                return t.showTerminationDetail(
                                                  e
                                                );
                                              },
                                            },
                                          },
                                          [
                                            n("i", {
                                              staticClass:
                                                "fas fa-arrow-circle-right",
                                            }),
                                          ]
                                        ),
                                      ]),
                                    ])
                                  : t._e();
                              }),
                              0
                            ),
                          ]),
                        ])
                      : n("div", { staticClass: "font-80pc" }, [
                          t._v(
                            "\n        " +
                              t._s(t.trans("general.no_result_found")) +
                              "\n    "
                          ),
                        ]),
                    t._v(" "),
                    n("div", [t._v(" ")]),
                    t._v(" "),
                    t.showModal
                      ? n("transition", { attrs: { name: "modal" } }, [
                          n("div", { staticClass: "modal-mask" }, [
                            n("div", { staticClass: "modal-wrapper" }, [
                              n(
                                "div",
                                { staticClass: "modal-container modal-lg" },
                                [
                                  n(
                                    "div",
                                    { staticClass: "modal-header" },
                                    [
                                      t._t("header", [
                                        t._v(
                                          "\n                            " +
                                            t._s(t.getStudentName(t.student)) +
                                            "\n                            "
                                        ),
                                        n(
                                          "span",
                                          {
                                            staticClass: "float-right pointer",
                                            on: {
                                              click: function (e) {
                                                t.showModal = !1;
                                              },
                                            },
                                          },
                                          [t._v("x")]
                                        ),
                                      ]),
                                    ],
                                    2
                                  ),
                                  t._v(" "),
                                  n(
                                    "div",
                                    { staticClass: "modal-body" },
                                    [
                                      t._t("body", [
                                        n("p", [
                                          t._v(
                                            t._s(t.trans("academic.batch")) +
                                              ": " +
                                              t._s(
                                                t.student_record.batch.course
                                                  .name +
                                                  " " +
                                                  t.student_record.batch.name
                                              )
                                          ),
                                        ]),
                                        t._v(" "),
                                        n("p", [
                                          t._v(
                                            t._s(
                                              t.trans(
                                                "student.admission_number_short"
                                              )
                                            ) +
                                              ": " +
                                              t._s(
                                                t.getAdmissionNumber(
                                                  t.student_record.admission
                                                )
                                              )
                                          ),
                                        ]),
                                        t._v(" "),
                                        n("p", [
                                          t._v(
                                            t._s(
                                              t.trans(
                                                "student.date_of_admission"
                                              )
                                            ) +
                                              ": " +
                                              t._s(
                                                t._f("moment")(
                                                  t.student_record.date_of_entry
                                                )
                                              )
                                          ),
                                        ]),
                                        t._v(" "),
                                        n("p", [
                                          t._v(
                                            t._s(
                                              t.trans(
                                                "student.date_of_promotion"
                                              )
                                            ) +
                                              ": " +
                                              t._s(
                                                t._f("moment")(
                                                  t.student_record.admission
                                                    .date_of_admission
                                                )
                                              )
                                          ),
                                        ]),
                                        t._v(" "),
                                        n("p", [
                                          t._v(
                                            t._s(
                                              t.trans(
                                                "student.date_of_termination"
                                              )
                                            ) +
                                              ":\n                                "
                                          ),
                                          t.student_record.date_of_exit
                                            ? n("span", [
                                                t._v(
                                                  t._s(
                                                    t._f("moment")(
                                                      t.student_record
                                                        .date_of_exit
                                                    )
                                                  )
                                                ),
                                              ])
                                            : n("span", [t._v("-")]),
                                        ]),
                                        t._v(" "),
                                        n("p", [
                                          t._v(
                                            t._s(
                                              t.trans(
                                                "student.termination_reason"
                                              )
                                            ) +
                                              ":\n                                "
                                          ),
                                          t.student_record.date_of_exit
                                            ? n("span", [
                                                t._v(
                                                  t._s(
                                                    t.trans(
                                                      "student.termination_reason_" +
                                                        t.student_record
                                                          .termination_reason
                                                    )
                                                  )
                                                ),
                                              ])
                                            : n("span", [t._v("-")]),
                                        ]),
                                        t._v(" "),
                                        n("p", [
                                          t._v(
                                            t._s(
                                              t.trans(
                                                "student.termination_remarks"
                                              )
                                            ) +
                                              ": \n                                "
                                          ),
                                          t.student_record.date_of_exit
                                            ? n("span", [
                                                t._v(
                                                  t._s(
                                                    t.student_record
                                                      .exit_remarks
                                                  )
                                                ),
                                              ])
                                            : n("span", [t._v("-")]),
                                        ]),
                                        t._v(" "),
                                        t.attachments.length
                                          ? n("div", [
                                              n(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "m-t-10 upload-file-list",
                                                },
                                                t._l(
                                                  t.attachments,
                                                  function (e) {
                                                    return n(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "upload-file-list-item",
                                                      },
                                                      [
                                                        n(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "no-link-color",
                                                            attrs: {
                                                              href:
                                                                "/student/" +
                                                                t.student.uuid +
                                                                "/terminate/" +
                                                                t.student_record
                                                                  .id +
                                                                "/attachment/" +
                                                                e.uuid +
                                                                "/download?token=" +
                                                                t.authToken,
                                                            },
                                                          },
                                                          [
                                                            n("i", {
                                                              class: [
                                                                "file-icon",
                                                                "fas",
                                                                "fa-lg",
                                                                e.file_info
                                                                  .icon,
                                                              ],
                                                            }),
                                                            t._v(" "),
                                                            n(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "upload-file-list-item-size",
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(
                                                                    e.file_info
                                                                      .size
                                                                  )
                                                                ),
                                                              ]
                                                            ),
                                                            t._v(
                                                              " " +
                                                                t._s(
                                                                  e.user_filename
                                                                ) +
                                                                " "
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    );
                                                  }
                                                ),
                                                0
                                              ),
                                            ])
                                          : t._e(),
                                        t._v(" "),
                                        n("p", [
                                          n("i", {
                                            staticClass: "far fa-clock",
                                          }),
                                          t._v(" "),
                                          n("small", [
                                            t._v(
                                              t._s(
                                                t.trans("general.created_at")
                                              ) +
                                                " " +
                                                t._s(
                                                  t._f("momentDateTime")(
                                                    t.student_record.created_at
                                                  )
                                                )
                                            ),
                                          ]),
                                          t._v(" "),
                                          n(
                                            "span",
                                            { staticClass: "pull-right" },
                                            [
                                              n("i", {
                                                staticClass: "far fa-clock",
                                              }),
                                              t._v(" "),
                                              n("small", [
                                                t._v(
                                                  t._s(
                                                    t.trans(
                                                      "general.updated_at"
                                                    )
                                                  ) +
                                                    " " +
                                                    t._s(
                                                      t._f("momentDateTime")(
                                                        t.student_record
                                                          .updated_at
                                                      )
                                                    )
                                                ),
                                              ]),
                                            ]
                                          ),
                                        ]),
                                        t._v(" "),
                                        n("div", { staticClass: "clearfix" }),
                                      ]),
                                    ],
                                    2
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                        ])
                      : t._e(),
                  ],
                  2
                )
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = o.exports;
    },
    NbZL: function (t, e, n) {
      var a = n("YyMf");
      "string" == typeof a && (a = [[t.i, a, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      n("aET+")(a, s);
      a.locals && (t.exports = a.locals);
    },
    O2oq: function (t, e, n) {
      "use strict";
      var a = {
          components: {},
          data: function () {
            return {
              accountForm: new Form({
                name: "",
                account_number: "",
                bank_name: "",
                branch_name: "",
                bank_identification_code: "",
                is_primary: !1,
                description: "",
              }),
              clearAttachment: !0,
            };
          },
          props: ["uuid", "aid"],
          mounted: function () {
            this.aid && this.getAccount();
          },
          methods: {
            proceed: function () {
              this.aid ? this.updateAccount() : this.storeAccount();
            },
            storeAccount: function () {
              var t = this,
                e = this.$loading.show();
              this.accountForm
                .post("/api/student/" + this.uuid + "/account")
                .then(function (n) {
                  toastr.success(n.message), t.$emit("completed"), e.hide();
                })
                .catch(function (t) {
                  e.hide(), helper.showErrorMsg(t);
                });
            },
            getAccount: function () {
              var t = this,
                e = this.$loading.show();
              axios
                .get("/api/student/" + this.uuid + "/account/" + this.aid)
                .then(function (n) {
                  (t.accountForm.name = n.name),
                    (t.accountForm.account_number = n.account_number),
                    (t.accountForm.bank_name = n.bank_name),
                    (t.accountForm.branch_name = n.branch_name),
                    (t.accountForm.bank_identification_code =
                      n.bank_identification_code),
                    (t.accountForm.is_primary = n.options.is_primary),
                    (t.accountForm.description = n.description),
                    t.$emit("loaded"),
                    e.hide();
                })
                .catch(function (n) {
                  e.hide(), t.$router.push("/student/" + t.uuid);
                });
            },
            updateAccount: function () {
              var t = this,
                e = this.$loading.show();
              this.accountForm
                .patch("/api/student/" + this.uuid + "/account/" + this.aid)
                .then(function (n) {
                  toastr.success(n.message), t.$emit("completed"), e.hide();
                })
                .catch(function (t) {
                  e.hide(), helper.showErrorMsg(t);
                });
            },
          },
        },
        s = n("KHd+"),
        o = Object(s.a)(
          a,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", [
              n(
                "form",
                {
                  on: {
                    submit: function (e) {
                      return e.preventDefault(), t.proceed(e);
                    },
                    keydown: function (e) {
                      return t.accountForm.errors.clear(e.target.name);
                    },
                  },
                },
                [
                  n("div", { staticClass: "row" }, [
                    n("div", { staticClass: "col-12 col-sm-6" }, [
                      n(
                        "div",
                        { staticClass: "form-group" },
                        [
                          n("label", { attrs: { for: "" } }, [
                            t._v(t._s(t.trans("student.account_name"))),
                          ]),
                          t._v(" "),
                          n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.accountForm.name,
                                expression: "accountForm.name",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "name",
                              placeholder: t.trans("student.account_name"),
                            },
                            domProps: { value: t.accountForm.name },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(t.accountForm, "name", e.target.value);
                              },
                            },
                          }),
                          t._v(" "),
                          n("show-error", {
                            attrs: {
                              "form-name": t.accountForm,
                              "prop-name": "name",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    n("div", { staticClass: "col-12 col-sm-6" }, [
                      n(
                        "div",
                        { staticClass: "form-group" },
                        [
                          n("label", { attrs: { for: "" } }, [
                            t._v(t._s(t.trans("student.account_number"))),
                          ]),
                          t._v(" "),
                          n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.accountForm.account_number,
                                expression: "accountForm.account_number",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "account_number",
                              placeholder: t.trans("student.account_number"),
                            },
                            domProps: { value: t.accountForm.account_number },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(
                                    t.accountForm,
                                    "account_number",
                                    e.target.value
                                  );
                              },
                            },
                          }),
                          t._v(" "),
                          n("show-error", {
                            attrs: {
                              "form-name": t.accountForm,
                              "prop-name": "account_number",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    n("div", { staticClass: "col-12 col-sm-6" }, [
                      n(
                        "div",
                        { staticClass: "form-group" },
                        [
                          n("label", { attrs: { for: "" } }, [
                            t._v(t._s(t.trans("student.bank_name"))),
                          ]),
                          t._v(" "),
                          n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.accountForm.bank_name,
                                expression: "accountForm.bank_name",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "bank_name",
                              placeholder: t.trans("student.bank_name"),
                            },
                            domProps: { value: t.accountForm.bank_name },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(
                                    t.accountForm,
                                    "bank_name",
                                    e.target.value
                                  );
                              },
                            },
                          }),
                          t._v(" "),
                          n("show-error", {
                            attrs: {
                              "form-name": t.accountForm,
                              "prop-name": "bank_name",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    n("div", { staticClass: "col-12 col-sm-6" }, [
                      n(
                        "div",
                        { staticClass: "form-group" },
                        [
                          n("label", { attrs: { for: "" } }, [
                            t._v(t._s(t.trans("student.branch_name"))),
                          ]),
                          t._v(" "),
                          n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.accountForm.branch_name,
                                expression: "accountForm.branch_name",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "branch_name",
                              placeholder: t.trans("student.branch_name"),
                            },
                            domProps: { value: t.accountForm.branch_name },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(
                                    t.accountForm,
                                    "branch_name",
                                    e.target.value
                                  );
                              },
                            },
                          }),
                          t._v(" "),
                          n("show-error", {
                            attrs: {
                              "form-name": t.accountForm,
                              "prop-name": "branch_name",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    n("div", { staticClass: "col-12 col-sm-6" }, [
                      n(
                        "div",
                        { staticClass: "form-group" },
                        [
                          n("label", { attrs: { for: "" } }, [
                            t._v(
                              t._s(t.trans("student.bank_identification_code"))
                            ),
                          ]),
                          t._v(" "),
                          n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.accountForm.bank_identification_code,
                                expression:
                                  "accountForm.bank_identification_code",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "bank_identification_code",
                              placeholder: t.trans(
                                "student.bank_identification_code"
                              ),
                            },
                            domProps: {
                              value: t.accountForm.bank_identification_code,
                            },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(
                                    t.accountForm,
                                    "bank_identification_code",
                                    e.target.value
                                  );
                              },
                            },
                          }),
                          t._v(" "),
                          n("show-error", {
                            attrs: {
                              "form-name": t.accountForm,
                              "prop-name": "bank_identification_code",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    n("div", { staticClass: "col-12 col-sm-6" }, [
                      n(
                        "div",
                        { staticClass: "form-group" },
                        [
                          n("switches", {
                            staticClass: "m-l-20",
                            attrs: { theme: "bootstrap", color: "success" },
                            model: {
                              value: t.accountForm.is_primary,
                              callback: function (e) {
                                t.$set(t.accountForm, "is_primary", e);
                              },
                              expression: "accountForm.is_primary",
                            },
                          }),
                          t._v(
                            " " +
                              t._s(t.trans("student.is_account_primary")) +
                              "\n                    "
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "form-group" },
                    [
                      n("autosize-textarea", {
                        attrs: {
                          rows: "2",
                          name: "description",
                          placeholder: t.trans("student.account_description"),
                        },
                        model: {
                          value: t.accountForm.description,
                          callback: function (e) {
                            t.$set(t.accountForm, "description", e);
                          },
                          expression: "accountForm.description",
                        },
                      }),
                      t._v(" "),
                      n("show-error", {
                        attrs: {
                          "form-name": t.accountForm,
                          "prop-name": "description",
                        },
                      }),
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "button",
                    {
                      staticClass:
                        "btn btn-info waves-effect waves-light pull-right",
                      attrs: { type: "submit" },
                    },
                    [
                      t.aid
                        ? n("span", [t._v(t._s(t.trans("general.update")))])
                        : n("span", [t._v(t._s(t.trans("general.save")))]),
                    ]
                  ),
                ]
              ),
              t._v(" "),
              n("div", { staticClass: "clearfix" }),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        i = {
          components: { accountForm: o },
          props: ["student"],
          methods: {
            complete: function () {
              this.$emit("completed"), this.$emit("close");
            },
          },
        },
        r =
          (n("8zNP"),
          Object(s.a)(
            i,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("transition", { attrs: { name: "modal" } }, [
                n("div", { staticClass: "modal-mask" }, [
                  n("div", { staticClass: "modal-wrapper" }, [
                    n("div", { staticClass: "modal-container modal-lg" }, [
                      n(
                        "div",
                        { staticClass: "modal-header" },
                        [
                          t._t("header", [
                            t._v(
                              "\n                        " +
                                t._s(t.trans("student.add_new_account")) +
                                "\n                        "
                            ),
                            n(
                              "span",
                              {
                                staticClass: "float-right pointer",
                                on: {
                                  click: function (e) {
                                    return t.$emit("close");
                                  },
                                },
                              },
                              [t._v("x")]
                            ),
                          ]),
                        ],
                        2
                      ),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "modal-body" },
                        [
                          t._t("body", [
                            n("account-form", {
                              attrs: { uuid: t.student.uuid },
                              on: { completed: t.complete },
                            }),
                          ]),
                        ],
                        2
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
          ).exports),
        d = {
          components: { accountForm: o },
          props: ["student", "aid"],
          methods: {
            complete: function () {
              this.$emit("completed"), this.$emit("close");
            },
          },
        },
        c =
          (n("u/5J"),
          Object(s.a)(
            d,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("transition", { attrs: { name: "modal" } }, [
                n("div", { staticClass: "modal-mask" }, [
                  n("div", { staticClass: "modal-wrapper" }, [
                    n("div", { staticClass: "modal-container modal-lg" }, [
                      n(
                        "div",
                        { staticClass: "modal-header" },
                        [
                          t._t("header", [
                            t._v(
                              "\n                        " +
                                t._s(t.trans("student.edit_account")) +
                                "\n                        "
                            ),
                            n(
                              "span",
                              {
                                staticClass: "float-right pointer",
                                on: {
                                  click: function (e) {
                                    return t.$emit("close");
                                  },
                                },
                              },
                              [t._v("x")]
                            ),
                          ]),
                        ],
                        2
                      ),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "modal-body" },
                        [
                          t._t("body", [
                            n("account-form", {
                              attrs: { uuid: t.student.uuid, aid: t.aid },
                              on: { completed: t.complete },
                            }),
                          ]),
                        ],
                        2
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
          ).exports),
        u = {
          components: { accountForm: o },
          props: ["student", "aid"],
          mounted: function () {
            this.aid && this.getStudentAccount();
          },
          data: function () {
            return { student_account: {} };
          },
          methods: {
            getStudentAccount: function () {
              var t = this,
                e = this.$loading.show();
              axios
                .get(
                  "/api/student/" + this.student.uuid + "/account/" + this.aid
                )
                .then(function (n) {
                  (t.student_account = n), e.hide();
                })
                .catch(function (t) {
                  e.hide(), helper.showErrorMsg(t);
                });
            },
          },
          filters: {
            momentDateTime: function (t) {
              return helper.formatDateTime(t);
            },
          },
        },
        l = Object(s.a)(
          u,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("transition", { attrs: { name: "modal" } }, [
              n("div", { staticClass: "modal-mask" }, [
                n("div", { staticClass: "modal-wrapper" }, [
                  n("div", { staticClass: "modal-container modal-lg" }, [
                    n(
                      "div",
                      { staticClass: "modal-header" },
                      [
                        t._t("header", [
                          t._v(
                            "\n                        " +
                              t._s(t.trans("student.view_account")) +
                              "\n                        "
                          ),
                          n(
                            "span",
                            {
                              staticClass: "float-right pointer",
                              on: {
                                click: function (e) {
                                  return t.$emit("close");
                                },
                              },
                            },
                            [t._v("x")]
                          ),
                        ]),
                      ],
                      2
                    ),
                    t._v(" "),
                    n(
                      "div",
                      { staticClass: "modal-body" },
                      [
                        t._t("body", [
                          n("div", { staticClass: "table-responsive" }, [
                            n(
                              "table",
                              {
                                staticClass: "table table-sm custom-show-table",
                              },
                              [
                                n("tbody", [
                                  n("tr", [
                                    n("td", [
                                      t._v(
                                        t._s(t.trans("student.account_name"))
                                      ),
                                    ]),
                                    t._v(" "),
                                    n("td", [
                                      t._v(
                                        t._s(t.student_account.name) +
                                          "\n                                            "
                                      ),
                                      t.student_account.options &&
                                      t.student_account.options.is_primary
                                        ? n(
                                            "span",
                                            { staticClass: "label label-info" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.trans(
                                                    "student.account_primary"
                                                  )
                                                )
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  n("tr", [
                                    n("td", [
                                      t._v(
                                        t._s(t.trans("student.account_number"))
                                      ),
                                    ]),
                                    t._v(" "),
                                    n("td", [
                                      t._v(
                                        t._s(t.student_account.account_number)
                                      ),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  n("tr", [
                                    n("td", [
                                      t._v(t._s(t.trans("student.bank_name"))),
                                    ]),
                                    t._v(" "),
                                    n("td", [
                                      t._v(t._s(t.student_account.bank_name)),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  n("tr", [
                                    n("td", [
                                      t._v(
                                        t._s(t.trans("student.branch_name"))
                                      ),
                                    ]),
                                    t._v(" "),
                                    n("td", [
                                      t._v(t._s(t.student_account.branch_name)),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  n("tr", [
                                    n("td", [
                                      t._v(
                                        t._s(
                                          t.trans(
                                            "student.bank_identification_code"
                                          )
                                        )
                                      ),
                                    ]),
                                    t._v(" "),
                                    n("td", [
                                      t._v(
                                        t._s(
                                          t.student_account
                                            .bank_identification_code
                                        )
                                      ),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  n("tr", [
                                    n("td", [
                                      t._v(
                                        t._s(
                                          t.trans("student.account_description")
                                        )
                                      ),
                                    ]),
                                    t._v(" "),
                                    n("td", [
                                      t._v(t._s(t.student_account.description)),
                                    ]),
                                  ]),
                                ]),
                              ]
                            ),
                          ]),
                          t._v(" "),
                          n("p", [
                            n("i", { staticClass: "far fa-clock" }),
                            t._v(" "),
                            n("small", [
                              t._v(
                                t._s(t.trans("general.created_at")) +
                                  " " +
                                  t._s(
                                    t._f("momentDateTime")(
                                      t.student_account.created_at
                                    )
                                  )
                              ),
                            ]),
                            t._v(" "),
                            n("span", { staticClass: "pull-right" }, [
                              n("i", { staticClass: "far fa-clock" }),
                              t._v(" "),
                              n("small", [
                                t._v(
                                  t._s(t.trans("general.updated_at")) +
                                    " " +
                                    t._s(
                                      t._f("momentDateTime")(
                                        t.student_account.updated_at
                                      )
                                    )
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ],
                      2
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
        ).exports,
        m = {
          props: {
            student: {
              type: Object,
              default: function () {
                return {};
              },
            },
            readMode: { type: Boolean, default: !1 },
          },
          components: { createAccount: r, editAccount: c, showAccount: l },
          data: function () {
            return {
              student_accounts: { total: 0, data: [] },
              showId: null,
              editId: null,
              student_account: {},
              filter: { page_length: helper.getConfig("page_length") },
              addModal: !1,
              editModal: !1,
              showModal: !1,
            };
          },
          mounted: function () {
            ((this.readMode &&
              !helper.hasPermission("list-student") &&
              !helper.hasPermission("list-class-teacher-wise-student")) ||
              (!this.readMode && !helper.hasPermission("edit-student"))) &&
              (helper.notAccessibleMsg(), this.$router.push("/dashboard")),
              this.getStudentAccounts();
          },
          methods: {
            getStudentName: function () {
              return helper.getStudentName(this.student);
            },
            showAction: function (t) {
              (this.showId = t.id), (this.showModal = !0);
            },
            editAction: function (t) {
              (this.editId = t.id), (this.editModal = !0);
            },
            getStudentAccounts: function (t) {
              var e = this,
                n = this.$loading.show();
              "number" != typeof t && (t = 1);
              var a = helper.getFilterURL(this.filter);
              axios
                .get(
                  "/api/student/" + this.student.uuid + "/account?page=" + t + a
                )
                .then(function (t) {
                  (e.student_accounts = t), n.hide();
                })
                .catch(function (t) {
                  n.hide(), helper.showErrorMsg(t);
                });
            },
            confirmDelete: function (t) {
              var e = this;
              return function (n) {
                return e.deleteStudentAccount(t);
              };
            },
            deleteStudentAccount: function (t) {
              var e = this,
                n = this.$loading.show();
              axios
                .delete(
                  "/api/student/" + this.student.uuid + "/account/" + t.id
                )
                .then(function (t) {
                  toastr.success(t.message), e.getStudentAccounts(), n.hide();
                })
                .catch(function (t) {
                  n.hide(), helper.showErrorMsg(t);
                });
            },
          },
          filters: {
            momentDateTime: function (t) {
              return helper.formatDateTime(t);
            },
          },
          watch: {
            student: function (t) {
              this.getStudentAccounts();
            },
          },
        },
        _ = Object(s.a)(
          m,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              [
                t.readMode
                  ? t._e()
                  : n(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-info pull-right",
                        on: {
                          click: function (e) {
                            t.addModal = !0;
                          },
                        },
                      },
                      [
                        n("i", { staticClass: "fas fa-plus" }),
                        t._v(" " + t._s(t.trans("student.add_new_account"))),
                      ]
                    ),
                t._v(" "),
                t.student_accounts.total
                  ? n("div", { staticClass: "table-responsive" }, [
                      n("table", { staticClass: "table table-sm" }, [
                        n("thead", [
                          n("tr", [
                            n("th", [
                              t._v(t._s(t.trans("student.account_name"))),
                            ]),
                            t._v(" "),
                            n("th", [
                              t._v(t._s(t.trans("student.account_number"))),
                            ]),
                            t._v(" "),
                            n("th", [t._v(t._s(t.trans("student.bank_name")))]),
                            t._v(" "),
                            n("th", [
                              t._v(t._s(t.trans("student.is_account_primary"))),
                            ]),
                            t._v(" "),
                            n("th", { staticClass: "table-option" }, [
                              t._v(t._s(t.trans("general.action"))),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        n(
                          "tbody",
                          t._l(t.student_accounts.data, function (e) {
                            return n("tr", [
                              n("td", {
                                domProps: { textContent: t._s(e.name) },
                              }),
                              t._v(" "),
                              n("td", {
                                domProps: {
                                  textContent: t._s(e.account_number),
                                },
                              }),
                              t._v(" "),
                              n("td", {
                                domProps: { textContent: t._s(e.bank_name) },
                              }),
                              t._v(" "),
                              n("td", [
                                e.options.is_primary
                                  ? n("i", { staticClass: "fas fa-check" })
                                  : n("i", { staticClass: "fas fa-times" }),
                              ]),
                              t._v(" "),
                              n("td", { staticClass: "table-option" }, [
                                n("div", { staticClass: "btn-group" }, [
                                  n(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "tooltip",
                                          rawName: "v-tooltip",
                                          value: t.trans(
                                            "student.view_account"
                                          ),
                                          expression:
                                            "trans('student.view_account')",
                                        },
                                      ],
                                      staticClass: "btn btn-success btn-sm",
                                      on: {
                                        click: function (n) {
                                          return (
                                            n.preventDefault(), t.showAction(e)
                                          );
                                        },
                                      },
                                    },
                                    [
                                      n("i", {
                                        staticClass:
                                          "fas fa-arrow-circle-right",
                                      }),
                                    ]
                                  ),
                                  t._v(" "),
                                  t.readMode
                                    ? t._e()
                                    : n(
                                        "button",
                                        {
                                          directives: [
                                            {
                                              name: "tooltip",
                                              rawName: "v-tooltip",
                                              value: t.trans(
                                                "student.edit_account"
                                              ),
                                              expression:
                                                "trans('student.edit_account')",
                                            },
                                          ],
                                          staticClass: "btn btn-info btn-sm",
                                          on: {
                                            click: function (n) {
                                              return (
                                                n.preventDefault(),
                                                t.editAction(e)
                                              );
                                            },
                                          },
                                        },
                                        [n("i", { staticClass: "fas fa-edit" })]
                                      ),
                                  t._v(" "),
                                  t.readMode
                                    ? t._e()
                                    : n(
                                        "button",
                                        {
                                          directives: [
                                            {
                                              name: "confirm",
                                              rawName: "v-confirm",
                                              value: { ok: t.confirmDelete(e) },
                                              expression:
                                                "{ok: confirmDelete(student_account)}",
                                            },
                                            {
                                              name: "tooltip",
                                              rawName: "v-tooltip",
                                              value: t.trans(
                                                "student.delete_account"
                                              ),
                                              expression:
                                                "trans('student.delete_account')",
                                            },
                                          ],
                                          key: e.id,
                                          staticClass: "btn btn-danger btn-sm",
                                        },
                                        [
                                          n("i", {
                                            staticClass: "fas fa-trash",
                                          }),
                                        ]
                                      ),
                                ]),
                              ]),
                            ]);
                          }),
                          0
                        ),
                      ]),
                    ])
                  : t._e(),
                t._v(" "),
                t.readMode
                  ? [
                      t.student_accounts.total
                        ? t._e()
                        : n("div", { staticClass: "font-80pc" }, [
                            t._v(t._s(t.trans("general.no_result_found"))),
                          ]),
                    ]
                  : [
                      t.student_accounts.total
                        ? t._e()
                        : n(
                            "module-info",
                            {
                              attrs: {
                                module: "student",
                                title: "account_module_title",
                                description: "account_module_description",
                                icon: "list",
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "btn" }, slot: "btn" },
                                [
                                  n(
                                    "button",
                                    {
                                      staticClass: "btn btn-info btn-md",
                                      on: {
                                        click: function (e) {
                                          t.addModal = !0;
                                        },
                                      },
                                    },
                                    [
                                      n("i", { staticClass: "fas fa-plus" }),
                                      t._v(
                                        " " + t._s(t.trans("general.add_new"))
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                    ],
                t._v(" "),
                n("pagination-record", {
                  attrs: {
                    "page-length": t.filter.page_length,
                    records: t.student_accounts,
                  },
                  on: {
                    "update:pageLength": function (e) {
                      return t.$set(t.filter, "page_length", e);
                    },
                    "update:page-length": function (e) {
                      return t.$set(t.filter, "page_length", e);
                    },
                    updateRecords: t.getStudentAccounts,
                  },
                  nativeOn: {
                    change: function (e) {
                      return t.getStudentAccounts(e);
                    },
                  },
                }),
                t._v(" "),
                t.addModal && !t.readMode
                  ? n("create-account", {
                      attrs: { student: t.student },
                      on: {
                        close: function (e) {
                          t.addModal = !1;
                        },
                        completed: t.getStudentAccounts,
                      },
                    })
                  : t._e(),
                t._v(" "),
                t.editModal && !t.readMode
                  ? n("edit-account", {
                      attrs: { student: t.student, aid: t.editId },
                      on: {
                        close: function (e) {
                          t.editModal = !1;
                        },
                        completed: t.getStudentAccounts,
                      },
                    })
                  : t._e(),
                t._v(" "),
                t.showModal
                  ? n("show-account", {
                      attrs: { student: t.student, aid: t.showId },
                      on: {
                        close: function (e) {
                          t.showModal = !1;
                        },
                      },
                    })
                  : t._e(),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = _.exports;
    },
    Pvt3: function (t, e, n) {
      var a = n("H1GJ");
      "string" == typeof a && (a = [[t.i, a, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      n("aET+")(a, s);
      a.locals && (t.exports = a.locals);
    },
    Q5yv: function (t, e, n) {
      "use strict";
      var a = n("FmJO");
      n.n(a).a;
    },
    QD64: function (t, e, n) {
      (t.exports = n("I1BE")(!1)).push([
        t.i,
        "\n.loading-overlay{\n    z-index: 1060;\n}\n",
        "",
      ]);
    },
    VOv9: function (t, e, n) {
      "use strict";
      var a = {
          props: {
            student: {
              type: Object,
              default: function () {
                return {};
              },
            },
            readMode: { type: Boolean, default: !1 },
          },
          components: {},
          data: function () {
            return { students: [] };
          },
          mounted: function () {
            helper.hasPermission("list-student") ||
              helper.hasPermission("list-class-teacher-wise-student") ||
              (helper.notAccessibleMsg(), this.$router.push("/dashboard")),
              this.getStudentSiblings();
          },
          methods: {
            getStudentSiblings: function () {
              var t = this,
                e = this.$loading.show();
              axios
                .get("/api/student/" + this.student.uuid + "/sibling")
                .then(function (n) {
                  (t.students = n.students), e.hide();
                })
                .catch(function (t) {
                  e.hide(), helper.showErrorMsg(t);
                });
            },
            getStudentRecord: function (t) {
              var e = t.student_records.length;
              return e ? t.student_records[e - 1] : null;
            },
            getAdmissionNumber: function (t) {
              var e = this.getStudentRecord(t);
              return e
                ? helper.getAdmissionNumber(e.admission)
                : '<span class="label label-danger">' +
                    i18n.student.student_status_not_admitted +
                    "</span>";
            },
            getStudentName: function (t) {
              return helper.getStudentName(t);
            },
            getBatch: function (t) {
              var e = this.getStudentRecord(t);
              return e ? e.batch.course.name + " " + e.batch.name : "-";
            },
          },
          filters: {
            momentDateTime: function (t) {
              return helper.formatDateTime(t);
            },
          },
          watch: {
            student: function (t) {
              this.getStudentSiblings();
            },
          },
        },
        s = (n("3k/c"), n("KHd+")),
        o = Object(s.a)(
          a,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              [
                t.students.length
                  ? n("div", { staticClass: "table-responsive" }, [
                      n("table", { staticClass: "table table-sm" }, [
                        n("thead", [
                          n("tr", [
                            n("th", [
                              t._v(
                                t._s(t.trans("student.admission_number_short"))
                              ),
                            ]),
                            t._v(" "),
                            n("th", [t._v(t._s(t.trans("student.name")))]),
                            t._v(" "),
                            n("th", [t._v(t._s(t.trans("academic.batch")))]),
                          ]),
                        ]),
                        t._v(" "),
                        n(
                          "tbody",
                          t._l(t.students, function (e) {
                            return n("tr", [
                              n("td", {
                                domProps: {
                                  innerHTML: t._s(t.getAdmissionNumber(e)),
                                },
                              }),
                              t._v(" "),
                              n("td", {
                                domProps: {
                                  textContent: t._s(t.getStudentName(e)),
                                },
                              }),
                              t._v(" "),
                              n("td", {
                                domProps: { textContent: t._s(t.getBatch(e)) },
                              }),
                            ]);
                          }),
                          0
                        ),
                      ]),
                    ])
                  : t._e(),
                t._v(" "),
                t.readMode
                  ? [
                      t.students.length
                        ? t._e()
                        : n("div", { staticClass: "font-80pc" }, [
                            t._v(t._s(t.trans("general.no_result_found"))),
                          ]),
                    ]
                  : [
                      t.students.length
                        ? t._e()
                        : n("module-info", {
                            attrs: {
                              module: "student",
                              title: "account_module_title",
                              description: "account_module_description",
                              icon: "list",
                            },
                          }),
                    ],
                t._v(" "),
                n("div", [t._v(" ")]),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = o.exports;
    },
    YyMf: function (t, e, n) {
      (t.exports = n("I1BE")(!1)).push([
        t.i,
        "\n.loading-overlay{\n    z-index: 1060;\n}\n",
        "",
      ]);
    },
    eqjJ: function (t, e, n) {
      var a = n("8KFr");
      "string" == typeof a && (a = [[t.i, a, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      n("aET+")(a, s);
      a.locals && (t.exports = a.locals);
    },
    gAQT: function (t, e, n) {
      "use strict";
      var a = n("FJEe");
      n.n(a).a;
    },
    gFxV: function (t, e, n) {
      var a = n("gkrh");
      "string" == typeof a && (a = [[t.i, a, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      n("aET+")(a, s);
      a.locals && (t.exports = a.locals);
    },
    gkrh: function (t, e, n) {
      (t.exports = n("I1BE")(!1)).push([
        t.i,
        "\n.loading-overlay{\n    z-index: 1060;\n}\n",
        "",
      ]);
    },
    jVup: function (t, e, n) {
      "use strict";
      var a = n("eqjJ");
      n.n(a).a;
    },
    nOde: function (t, e, n) {
      (t.exports = n("I1BE")(!1)).push([
        t.i,
        "\n.dg-backdrop{\n  z-index: 10000;\n}\n.dg-container{\n  z-index: 10000;\n}\n",
        "",
      ]);
    },
    rRZe: function (t, e, n) {
      (t.exports = n("I1BE")(!1)).push([
        t.i,
        "\n.loading-overlay{\n    z-index: 1060;\n}\n",
        "",
      ]);
    },
    "u/5J": function (t, e, n) {
      "use strict";
      var a = n("Pvt3");
      n.n(a).a;
    },
    vZqm: function (t, e, n) {
      var a = n("nOde");
      "string" == typeof a && (a = [[t.i, a, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      n("aET+")(a, s);
      a.locals && (t.exports = a.locals);
    },
    wXZY: function (t, e, n) {
      (t.exports = n("I1BE")(!1)).push([
        t.i,
        "\n.loading-overlay{\n    z-index: 1060;\n}\n",
        "",
      ]);
    },
    zVuu: function (t, e, n) {
      "use strict";
      var a = {
          components: {},
          data: function () {
            return {
              documentForm: new Form({
                title: "",
                student_document_type_id: "",
                description: "",
                upload_token: "",
              }),
              selected_student_document_type: null,
              student_document_types: [],
              module_id: "",
              clearAttachment: !0,
            };
          },
          props: ["uuid", "did"],
          mounted: function () {
            (this.documentForm.upload_token = this.$uuid.v4()),
              this.getPreRequisite(),
              this.did && this.getDocument();
          },
          methods: {
            proceed: function () {
              this.did ? this.updateDocument() : this.storeDocument();
            },
            getPreRequisite: function () {
              var t = this,
                e = this.$loading.show();
              axios
                .get("/api/student/" + this.uuid + "/document/pre-requisite")
                .then(function (n) {
                  (t.student_document_types = n), e.hide();
                })
                .catch(function (t) {
                  e.hide(), helper.showErrorMsg(t);
                });
            },
            storeDocument: function () {
              var t = this,
                e = this.$loading.show();
              this.documentForm
                .post("/api/student/" + this.uuid + "/document")
                .then(function (n) {
                  toastr.success(n.message),
                    (t.clearAttachment = !t.clearAttachment),
                    t.$emit("completed"),
                    (t.documentForm.upload_token = t.$uuid.v4()),
                    (t.selected_student_document_type = null),
                    e.hide();
                })
                .catch(function (t) {
                  e.hide(), helper.showErrorMsg(t);
                });
            },
            getDocument: function () {
              var t = this,
                e = this.$loading.show();
              axios
                .get("/api/student/" + this.uuid + "/document/" + this.did)
                .then(function (n) {
                  (t.documentForm.title = n.student_document.title),
                    (t.documentForm.student_document_type_id =
                      n.student_document.student_document_type_id),
                    (t.selected_student_document_type = {
                      id: n.student_document.student_document_type_id,
                      name: n.student_document.student_document_type.name,
                    }),
                    (t.documentForm.description =
                      n.student_document.description),
                    (t.documentForm.upload_token =
                      n.student_document.upload_token),
                    (t.module_id = n.student_document.id),
                    t.$emit("loaded"),
                    e.hide();
                })
                .catch(function (n) {
                  e.hide(), t.$router.push("/student/" + t.uuid);
                });
            },
            updateDocument: function () {
              var t = this,
                e = this.$loading.show();
              this.documentForm
                .patch("/api/student/" + this.uuid + "/document/" + this.did)
                .then(function (n) {
                  toastr.success(n.message), t.$emit("completed"), e.hide();
                })
                .catch(function (t) {
                  e.hide(), helper.showErrorMsg(t);
                });
            },
            onDocumentTypeSelect: function (t) {
              this.documentForm.student_document_type_id = t.id;
            },
          },
        },
        s = n("KHd+"),
        o = Object(s.a)(
          a,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", [
              n(
                "form",
                {
                  on: {
                    submit: function (e) {
                      return e.preventDefault(), t.proceed(e);
                    },
                    keydown: function (e) {
                      return t.documentForm.errors.clear(e.target.name);
                    },
                  },
                },
                [
                  n("div", { staticClass: "row" }, [
                    n("div", { staticClass: "col-12 col-sm-6" }, [
                      n(
                        "div",
                        { staticClass: "form-group" },
                        [
                          n("label", { attrs: { for: "" } }, [
                            t._v(t._s(t.trans("student.document_title"))),
                          ]),
                          t._v(" "),
                          n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.documentForm.title,
                                expression: "documentForm.title",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "title",
                              placeholder: t.trans("student.document_title"),
                            },
                            domProps: { value: t.documentForm.title },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(
                                    t.documentForm,
                                    "title",
                                    e.target.value
                                  );
                              },
                            },
                          }),
                          t._v(" "),
                          n("show-error", {
                            attrs: {
                              "form-name": t.documentForm,
                              "prop-name": "title",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    n("div", { staticClass: "col-12 col-sm-6" }, [
                      n(
                        "div",
                        { staticClass: "form-group" },
                        [
                          n("label", { attrs: { for: "" } }, [
                            t._v(t._s(t.trans("student.document_type"))),
                          ]),
                          t._v(" "),
                          n(
                            "v-select",
                            {
                              attrs: {
                                label: "name",
                                name: "student_document_type_id",
                                id: "student_document_type_id",
                                options: t.student_document_types,
                                placeholder: t.trans("general.select_one"),
                              },
                              on: {
                                select: t.onDocumentTypeSelect,
                                close: function (e) {
                                  return t.documentForm.errors.clear(
                                    "student_document_type_id"
                                  );
                                },
                                remove: function (e) {
                                  t.documentForm.student_document_type_id = "";
                                },
                              },
                              model: {
                                value: t.selected_student_document_type,
                                callback: function (e) {
                                  t.selected_student_document_type = e;
                                },
                                expression: "selected_student_document_type",
                              },
                            },
                            [
                              t.student_document_types.length
                                ? t._e()
                                : n(
                                    "div",
                                    {
                                      staticClass: "multiselect__option",
                                      attrs: { slot: "afterList" },
                                      slot: "afterList",
                                    },
                                    [
                                      t._v(
                                        "\n                                " +
                                          t._s(
                                            t.trans("general.no_option_found")
                                          ) +
                                          "\n                            "
                                      ),
                                    ]
                                  ),
                            ]
                          ),
                          t._v(" "),
                          n("show-error", {
                            attrs: {
                              "form-name": t.documentForm,
                              "prop-name": "student_document_type_id",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "form-group" },
                    [
                      n("autosize-textarea", {
                        attrs: {
                          rows: "2",
                          name: "description",
                          placeholder: t.trans("student.document_description"),
                        },
                        model: {
                          value: t.documentForm.description,
                          callback: function (e) {
                            t.$set(t.documentForm, "description", e);
                          },
                          expression: "documentForm.description",
                        },
                      }),
                      t._v(" "),
                      n("show-error", {
                        attrs: {
                          "form-name": t.documentForm,
                          "prop-name": "description",
                        },
                      }),
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "form-group" },
                    [
                      n("file-upload-input", {
                        attrs: {
                          "button-text": t.trans("general.upload_document"),
                          token: t.documentForm.upload_token,
                          module: "student_document",
                          "clear-file": t.clearAttachment,
                          "module-id": t.module_id,
                        },
                      }),
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "button",
                    {
                      staticClass:
                        "btn btn-info waves-effect waves-light pull-right",
                      attrs: { type: "submit" },
                    },
                    [
                      t.did
                        ? n("span", [t._v(t._s(t.trans("general.update")))])
                        : n("span", [t._v(t._s(t.trans("general.save")))]),
                    ]
                  ),
                ]
              ),
              t._v(" "),
              n("div", { staticClass: "clearfix" }),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        i = {
          components: { documentForm: o },
          props: ["student"],
          methods: {
            complete: function () {
              this.$emit("completed"), this.$emit("close");
            },
          },
        },
        r =
          (n("Q5yv"),
          Object(s.a)(
            i,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("transition", { attrs: { name: "modal" } }, [
                n("div", { staticClass: "modal-mask" }, [
                  n("div", { staticClass: "modal-wrapper" }, [
                    n("div", { staticClass: "modal-container modal-lg" }, [
                      n(
                        "div",
                        { staticClass: "modal-header" },
                        [
                          t._t("header", [
                            t._v(
                              "\n                        " +
                                t._s(t.trans("student.add_new_document")) +
                                "\n                        "
                            ),
                            n(
                              "span",
                              {
                                staticClass: "float-right pointer",
                                on: {
                                  click: function (e) {
                                    return t.$emit("close");
                                  },
                                },
                              },
                              [t._v("x")]
                            ),
                          ]),
                        ],
                        2
                      ),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "modal-body" },
                        [
                          t._t("body", [
                            n("document-form", {
                              attrs: { uuid: t.student.uuid },
                              on: { completed: t.complete },
                            }),
                          ]),
                        ],
                        2
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
          ).exports),
        d = {
          components: { documentForm: o },
          props: ["student", "did"],
          methods: {
            complete: function () {
              this.$emit("completed"), this.$emit("close");
            },
          },
        },
        c =
          (n("gAQT"),
          Object(s.a)(
            d,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("transition", { attrs: { name: "modal" } }, [
                n("div", { staticClass: "modal-mask" }, [
                  n("div", { staticClass: "modal-wrapper" }, [
                    n("div", { staticClass: "modal-container modal-lg" }, [
                      n(
                        "div",
                        { staticClass: "modal-header" },
                        [
                          t._t("header", [
                            t._v(
                              "\n                        " +
                                t._s(t.trans("student.edit_document")) +
                                "\n                        "
                            ),
                            n(
                              "span",
                              {
                                staticClass: "float-right pointer",
                                on: {
                                  click: function (e) {
                                    return t.$emit("close");
                                  },
                                },
                              },
                              [t._v("x")]
                            ),
                          ]),
                        ],
                        2
                      ),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "modal-body" },
                        [
                          t._t("body", [
                            n("document-form", {
                              attrs: { uuid: t.student.uuid, did: t.did },
                              on: { completed: t.complete },
                            }),
                          ]),
                        ],
                        2
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
          ).exports),
        u = {
          components: { documentForm: o },
          props: ["student", "did"],
          mounted: function () {
            this.did && this.getStudentDocument();
          },
          data: function () {
            return { student_document: [], documents: [] };
          },
          methods: {
            getStudentDocument: function () {
              var t = this,
                e = this.$loading.show();
              axios
                .get(
                  "/api/student/" + this.student.uuid + "/document/" + this.did
                )
                .then(function (n) {
                  (t.student_document = n.student_document),
                    (t.documents = n.documents),
                    e.hide();
                })
                .catch(function (t) {
                  e.hide(), helper.showErrorMsg(t);
                });
            },
          },
          computed: {
            authToken: function () {
              return helper.getAuthToken();
            },
          },
          filters: {
            momentDateTime: function (t) {
              return helper.formatDateTime(t);
            },
          },
        },
        l = Object(s.a)(
          u,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("transition", { attrs: { name: "modal" } }, [
              n("div", { staticClass: "modal-mask" }, [
                n("div", { staticClass: "modal-wrapper" }, [
                  n("div", { staticClass: "modal-container modal-lg" }, [
                    n(
                      "div",
                      { staticClass: "modal-header" },
                      [
                        t._t("header", [
                          t._v(
                            "\n                        " +
                              t._s(t.trans("student.view_document")) +
                              "\n                        "
                          ),
                          n(
                            "span",
                            {
                              staticClass: "float-right pointer",
                              on: {
                                click: function (e) {
                                  return t.$emit("close");
                                },
                              },
                            },
                            [t._v("x")]
                          ),
                        ]),
                      ],
                      2
                    ),
                    t._v(" "),
                    n(
                      "div",
                      { staticClass: "modal-body" },
                      [
                        t._t("body", [
                          t.student_document.student_document_type
                            ? n("h4", { staticClass: "card-title" }, [
                                t._v(
                                  t._s(t.student_document.title) +
                                    " (" +
                                    t._s(
                                      t.student_document.student_document_type
                                        .name
                                    ) +
                                    ")"
                                ),
                              ])
                            : t._e(),
                          t._v(" "),
                          n("div", {
                            staticClass: "m-t-20",
                            domProps: {
                              innerHTML: t._s(t.student_document.description),
                            },
                          }),
                          t._v(" "),
                          t.documents.length
                            ? n("div", [
                                n(
                                  "ul",
                                  { staticClass: "m-t-10 upload-file-list" },
                                  t._l(t.documents, function (e) {
                                    return n(
                                      "li",
                                      { staticClass: "upload-file-list-item" },
                                      [
                                        n(
                                          "a",
                                          {
                                            staticClass: "no-link-color",
                                            attrs: {
                                              href:
                                                "/student/" +
                                                t.student.uuid +
                                                "/document/" +
                                                t.student_document.id +
                                                "/attachment/" +
                                                e.uuid +
                                                "/download?token=" +
                                                t.authToken,
                                            },
                                          },
                                          [
                                            n("i", {
                                              class: [
                                                "file-icon",
                                                "fas",
                                                "fa-lg",
                                                e.file_info.icon,
                                              ],
                                            }),
                                            t._v(" "),
                                            n(
                                              "span",
                                              {
                                                staticClass:
                                                  "upload-file-list-item-size",
                                              },
                                              [t._v(t._s(e.file_info.size))]
                                            ),
                                            t._v(" " + t._s(e.user_filename)),
                                          ]
                                        ),
                                      ]
                                    );
                                  }),
                                  0
                                ),
                              ])
                            : t._e(),
                          t._v(" "),
                          n("hr"),
                          t._v(" "),
                          n("p", [
                            n("i", { staticClass: "far fa-clock" }),
                            t._v(" "),
                            n("small", [
                              t._v(
                                t._s(t.trans("general.created_at")) +
                                  " " +
                                  t._s(
                                    t._f("momentDateTime")(
                                      t.student_document.created_at
                                    )
                                  )
                              ),
                            ]),
                            t._v(" "),
                            n("span", { staticClass: "pull-right" }, [
                              n("i", { staticClass: "far fa-clock" }),
                              t._v(" "),
                              n("small", [
                                t._v(
                                  t._s(t.trans("general.updated_at")) +
                                    " " +
                                    t._s(
                                      t._f("momentDateTime")(
                                        t.student_document.updated_at
                                      )
                                    )
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ],
                      2
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
        ).exports,
        m = {
          props: {
            student: {
              type: Object,
              default: function () {
                return {};
              },
            },
            readMode: { type: Boolean, default: !1 },
          },
          components: { createDocument: r, editDocument: c, showDocument: l },
          data: function () {
            return {
              student_documents: { total: 0, data: [] },
              showId: null,
              editId: null,
              filter: { page_length: helper.getConfig("page_length") },
              addModal: !1,
              editModal: !1,
              showModal: !1,
            };
          },
          mounted: function () {
            ((this.readMode &&
              !helper.hasPermission("list-student") &&
              !helper.hasPermission("list-class-teacher-wise-student")) ||
              (!this.readMode && !helper.hasPermission("edit-student"))) &&
              (helper.notAccessibleMsg(), this.$router.push("/dashboard")),
              this.getStudentDocuments();
          },
          methods: {
            editAction: function (t) {
              (this.editId = t.id), (this.editModal = !0);
            },
            showAction: function (t) {
              (this.showId = t.id), (this.showModal = !0);
            },
            getStudentDocuments: function (t) {
              var e = this,
                n = this.$loading.show();
              "number" != typeof t && (t = 1);
              var a = helper.getFilterURL(this.filter);
              axios
                .get(
                  "/api/student/" +
                    this.student.uuid +
                    "/document?page=" +
                    t +
                    a
                )
                .then(function (t) {
                  (e.student_documents = t), n.hide();
                })
                .catch(function (t) {
                  n.hide(), helper.showErrorMsg(t);
                });
            },
            confirmDelete: function (t) {
              var e = this;
              return function (n) {
                return e.deleteStudentDocument(t);
              };
            },
            deleteStudentDocument: function (t) {
              var e = this,
                n = this.$loading.show();
              axios
                .delete(
                  "/api/student/" + this.student.uuid + "/document/" + t.id
                )
                .then(function (t) {
                  toastr.success(t.message), e.getStudentDocuments(), n.hide();
                })
                .catch(function (t) {
                  n.hide(), helper.showErrorMsg(t);
                });
            },
          },
          filters: {
            momentDateTime: function (t) {
              return helper.formatDateTime(t);
            },
          },
          watch: {
            student: function (t) {
              this.getStudentDocuments();
            },
          },
        },
        _ = Object(s.a)(
          m,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              [
                t.readMode
                  ? t._e()
                  : n(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-info pull-right",
                        on: {
                          click: function (e) {
                            t.addModal = !0;
                          },
                        },
                      },
                      [
                        n("i", { staticClass: "fas fa-plus" }),
                        t._v(" " + t._s(t.trans("student.add_new_document"))),
                      ]
                    ),
                t._v(" "),
                t.student_documents.total
                  ? n("div", { staticClass: "table-responsive" }, [
                      n("table", { staticClass: "table table-sm" }, [
                        n("thead", [
                          n("tr", [
                            n("th", [
                              t._v(t._s(t.trans("student.document_title"))),
                            ]),
                            t._v(" "),
                            n("th", [
                              t._v(t._s(t.trans("student.document_type"))),
                            ]),
                            t._v(" "),
                            n("th", [
                              t._v(t._s(t.trans("general.updated_at"))),
                            ]),
                            t._v(" "),
                            n("th", { staticClass: "table-option" }, [
                              t._v(t._s(t.trans("general.action"))),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        n(
                          "tbody",
                          t._l(t.student_documents.data, function (e) {
                            return n("tr", [
                              n("td", {
                                domProps: { textContent: t._s(e.title) },
                              }),
                              t._v(" "),
                              n("td", {
                                domProps: {
                                  textContent: t._s(
                                    e.student_document_type.name
                                  ),
                                },
                              }),
                              t._v(" "),
                              n("td", [
                                t._v(
                                  t._s(t._f("momentDateTime")(e.updated_at))
                                ),
                              ]),
                              t._v(" "),
                              n("td", { staticClass: "table-option" }, [
                                n("div", { staticClass: "btn-group" }, [
                                  n(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "tooltip",
                                          rawName: "v-tooltip",
                                          value: t.trans(
                                            "student.view_document"
                                          ),
                                          expression:
                                            "trans('student.view_document')",
                                        },
                                      ],
                                      staticClass: "btn btn-success btn-sm",
                                      on: {
                                        click: function (n) {
                                          return (
                                            n.preventDefault(), t.showAction(e)
                                          );
                                        },
                                      },
                                    },
                                    [
                                      n("i", {
                                        staticClass:
                                          "fas fa-arrow-circle-right",
                                      }),
                                    ]
                                  ),
                                  t._v(" "),
                                  t.readMode
                                    ? t._e()
                                    : n(
                                        "button",
                                        {
                                          directives: [
                                            {
                                              name: "tooltip",
                                              rawName: "v-tooltip",
                                              value: t.trans(
                                                "student.edit_document"
                                              ),
                                              expression:
                                                "trans('student.edit_document')",
                                            },
                                          ],
                                          staticClass: "btn btn-info btn-sm",
                                          on: {
                                            click: function (n) {
                                              return (
                                                n.preventDefault(),
                                                t.editAction(e)
                                              );
                                            },
                                          },
                                        },
                                        [n("i", { staticClass: "fas fa-edit" })]
                                      ),
                                  t._v(" "),
                                  t.readMode
                                    ? t._e()
                                    : n(
                                        "button",
                                        {
                                          directives: [
                                            {
                                              name: "confirm",
                                              rawName: "v-confirm",
                                              value: { ok: t.confirmDelete(e) },
                                              expression:
                                                "{ok: confirmDelete(student_document)}",
                                            },
                                            {
                                              name: "tooltip",
                                              rawName: "v-tooltip",
                                              value: t.trans(
                                                "student.delete_document"
                                              ),
                                              expression:
                                                "trans('student.delete_document')",
                                            },
                                          ],
                                          key: e.id,
                                          staticClass: "btn btn-danger btn-sm",
                                        },
                                        [
                                          n("i", {
                                            staticClass: "fas fa-trash",
                                          }),
                                        ]
                                      ),
                                ]),
                              ]),
                            ]);
                          }),
                          0
                        ),
                      ]),
                    ])
                  : t._e(),
                t._v(" "),
                t.readMode
                  ? [
                      t.student_documents.total
                        ? t._e()
                        : n("div", { staticClass: "font-80pc" }, [
                            t._v(t._s(t.trans("general.no_result_found"))),
                          ]),
                    ]
                  : [
                      t.student_documents.total
                        ? t._e()
                        : n(
                            "module-info",
                            {
                              attrs: {
                                module: "student",
                                title: "document_module_title",
                                description: "document_module_description",
                                icon: "list",
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "btn" }, slot: "btn" },
                                [
                                  n(
                                    "button",
                                    {
                                      staticClass: "btn btn-info btn-md",
                                      on: {
                                        click: function (e) {
                                          t.addModal = !0;
                                        },
                                      },
                                    },
                                    [
                                      n("i", { staticClass: "fas fa-plus" }),
                                      t._v(
                                        " " + t._s(t.trans("general.add_new"))
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                    ],
                t._v(" "),
                n("pagination-record", {
                  attrs: {
                    "page-length": t.filter.page_length,
                    records: t.student_documents,
                  },
                  on: {
                    "update:pageLength": function (e) {
                      return t.$set(t.filter, "page_length", e);
                    },
                    "update:page-length": function (e) {
                      return t.$set(t.filter, "page_length", e);
                    },
                    updateRecords: t.getStudentDocuments,
                  },
                  nativeOn: {
                    change: function (e) {
                      return t.getStudentDocuments(e);
                    },
                  },
                }),
                t._v(" "),
                t.addModal && !t.readMode
                  ? n("create-document", {
                      attrs: { student: t.student },
                      on: {
                        close: function (e) {
                          t.addModal = !1;
                        },
                        completed: t.getStudentDocuments,
                      },
                    })
                  : t._e(),
                t._v(" "),
                t.editModal && !t.readMode
                  ? n("edit-document", {
                      attrs: { student: t.student, did: t.editId },
                      on: {
                        close: function (e) {
                          t.editModal = !1;
                        },
                        completed: t.getStudentDocuments,
                      },
                    })
                  : t._e(),
                t._v(" "),
                t.showModal
                  ? n("show-document", {
                      attrs: { student: t.student, did: t.showId },
                      on: {
                        close: function (e) {
                          t.showModal = !1;
                        },
                      },
                    })
                  : t._e(),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = _.exports;
    },
  },
]);
//# sourceMappingURL=edit.js.map?id=1c47af420aa4f58cf16a