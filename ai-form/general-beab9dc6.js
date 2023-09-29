import { defineComponent as C, resolveComponent as V, openBlock as o, createElementBlock as h, Fragment as x, withDirectives as v, createBlock as u, withCtx as d, createVNode as t, vShow as k, createCommentVNode as n, createTextVNode as p, toDisplayString as S, resolveDynamicComponent as z, mergeProps as D, createElementVNode as f } from "vue";
const q = /* @__PURE__ */ f("div", null, [
  /* @__PURE__ */ p(" 流程条件：流程设计里可用于区分流程走向 "),
  /* @__PURE__ */ f("br"),
  /* @__PURE__ */ p(" 例如：金额大于500需要主管+经理审批；小于500只需要主管审批。 ")
], -1), T = { style: { "font-size": "12px" } }, M = /* @__PURE__ */ C({
  __name: "general",
  props: ["data", "couldChangeRequire"],
  setup(w) {
    const e = w;
    return (b, l) => {
      const i = V("el-input"), r = V("el-form-item"), g = V("el-alert"), m = V("el-switch"), s = V("el-radio-button"), y = V("el-radio-group"), U = V("el-tooltip"), _ = V("el-input-number");
      return o(), h(x, null, [
        e.data.vModel !== void 0 ? v((o(), u(r, {
          key: 0,
          label: "字段名"
        }, {
          default: d(() => [
            t(i, {
              modelValue: e.data.vModel,
              "onUpdate:modelValue": l[0] || (l[0] = (a) => e.data.vModel = a),
              placeholder: "请输入字段名（v-model）"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 512)), [
          [k, !1]
        ]) : n("", !0),
        e.data.description ? (o(), u(g, {
          key: 1,
          type: "info"
        }, {
          default: d(() => [
            p(S(e.data.description), 1)
          ]),
          _: 1
        })) : n("", !0),
        e.data.label !== void 0 ? (o(), u(r, {
          key: 2,
          label: "标题"
        }, {
          default: d(() => [
            t(i, {
              modelValue: e.data.label,
              "onUpdate:modelValue": l[1] || (l[1] = (a) => e.data.label = a),
              placeholder: "请输入标题"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.layout !== "rowFormItem" && e.data.layout !== void 0 && !e.data.customDefaultValue ? (o(), u(r, {
          key: 3,
          label: "默认值"
        }, {
          default: d(() => [
            e.data.tag === "my-text" ? (o(), u(i, {
              key: 0,
              modelValue: e.data.defaultValue,
              "onUpdate:modelValue": l[2] || (l[2] = (a) => e.data.defaultValue = a),
              placeholder: "请输入文本内容"
            }, null, 8, ["modelValue"])) : (o(), u(z(e.data.tag), D({
              key: 1,
              modelValue: e.data.defaultValue,
              "onUpdate:modelValue": l[3] || (l[3] = (a) => e.data.defaultValue = a),
              style: { width: "100%" }
            }, e.data), null, 16, ["modelValue"]))
          ]),
          _: 1
        })) : n("", !0),
        e.data.placeholder !== void 0 ? (o(), u(r, {
          key: 4,
          label: "占位提示"
        }, {
          default: d(() => [
            t(i, {
              modelValue: e.data.placeholder,
              "onUpdate:modelValue": l[4] || (l[4] = (a) => e.data.placeholder = a),
              placeholder: "请输入占位提示"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data["start-placeholder"] !== void 0 ? (o(), u(r, {
          key: 5,
          label: "开始占位"
        }, {
          default: d(() => [
            t(i, {
              modelValue: e.data["start-placeholder"],
              "onUpdate:modelValue": l[5] || (l[5] = (a) => e.data["start-placeholder"] = a),
              placeholder: "请输入占位提示"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data["end-placeholder"] !== void 0 ? (o(), u(r, {
          key: 6,
          label: "结束占位"
        }, {
          default: d(() => [
            t(i, {
              modelValue: e.data["end-placeholder"],
              "onUpdate:modelValue": l[6] || (l[6] = (a) => e.data["end-placeholder"] = a),
              placeholder: "请输入占位提示"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.label !== void 0 ? (o(), u(r, {
          key: 7,
          label: "显示标签"
        }, {
          default: d(() => [
            t(m, {
              modelValue: e.data.showLabel,
              "onUpdate:modelValue": l[7] || (l[7] = (a) => e.data.showLabel = a)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.range !== void 0 ? (o(), u(r, {
          key: 8,
          label: "范围选择"
        }, {
          default: d(() => [
            t(m, {
              modelValue: e.data.range,
              "onUpdate:modelValue": l[8] || (l[8] = (a) => e.data.range = a),
              onChange: b.rangeChange
            }, null, 8, ["modelValue", "onChange"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.showChinese !== void 0 ? (o(), u(r, {
          key: 9,
          label: "显示大写"
        }, {
          default: d(() => [
            t(m, {
              modelValue: e.data.showChinese,
              "onUpdate:modelValue": l[9] || (l[9] = (a) => e.data.showChinese = a)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.size !== void 0 && (e.data.optionType === "button" || e.data.border || e.data.tag === "el-color-picker" || e.data.tag === "el-button") ? (o(), u(r, {
          key: 10,
          label: "组件尺寸"
        }, {
          default: d(() => [
            t(y, {
              modelValue: e.data.size,
              "onUpdate:modelValue": l[10] || (l[10] = (a) => e.data.size = a)
            }, {
              default: d(() => [
                t(s, { label: "large" }, {
                  default: d(() => [
                    p("较大")
                  ]),
                  _: 1
                }),
                t(s, { label: "default" }, {
                  default: d(() => [
                    p("默认")
                  ]),
                  _: 1
                }),
                t(s, { label: "small" }, {
                  default: d(() => [
                    p("较小")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.asSummary !== void 0 ? (o(), u(r, {
          key: 11,
          label: "作为摘要"
        }, {
          default: d(() => [
            t(m, {
              modelValue: e.data.asSummary,
              "onUpdate:modelValue": l[11] || (l[11] = (a) => e.data.asSummary = a)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.cmpType === "custom" ? (o(), u(r, {
          key: 12,
          label: "组件说明"
        }, {
          default: d(() => [
            t(i, {
              type: "textarea",
              modelValue: e.data.explain,
              "onUpdate:modelValue": l[12] || (l[12] = (a) => e.data.explain = a)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.textAlign !== void 0 ? (o(), u(r, {
          key: 13,
          label: "对齐方式"
        }, {
          default: d(() => [
            t(y, {
              modelValue: e.data.textAlign,
              "onUpdate:modelValue": l[13] || (l[13] = (a) => e.data.textAlign = a)
            }, {
              default: d(() => [
                t(s, { label: "left" }, {
                  default: d(() => [
                    p("左对齐")
                  ]),
                  _: 1
                }),
                t(s, { label: "center" }, {
                  default: d(() => [
                    p("居中")
                  ]),
                  _: 1
                }),
                t(s, { label: "right" }, {
                  default: d(() => [
                    p("右对齐")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.preWrap !== void 0 ? (o(), u(r, {
          key: 14,
          label: "自动换行"
        }, {
          default: d(() => [
            t(m, {
              modelValue: e.data.preWrap,
              "onUpdate:modelValue": l[14] || (l[14] = (a) => e.data.preWrap = a)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data["show-word-limit"] !== void 0 ? (o(), u(r, {
          key: 15,
          label: "输入统计"
        }, {
          default: d(() => [
            t(m, {
              modelValue: e.data["show-word-limit"],
              "onUpdate:modelValue": l[15] || (l[15] = (a) => e.data["show-word-limit"] = a)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.readonly !== void 0 ? (o(), u(r, {
          key: 16,
          label: "是否只读"
        }, {
          default: d(() => [
            t(m, {
              modelValue: e.data.readonly,
              "onUpdate:modelValue": l[16] || (l[16] = (a) => e.data.readonly = a)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.disabled !== void 0 ? (o(), u(r, {
          key: 17,
          label: "是否禁用"
        }, {
          default: d(() => [
            t(m, {
              modelValue: e.data.disabled,
              "onUpdate:modelValue": l[17] || (l[17] = (a) => e.data.disabled = a)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.show !== void 0 ? (o(), u(r, {
          key: 18,
          label: "是否顯示"
        }, {
          default: d(() => [
            t(m, {
              modelValue: e.data.show,
              "onUpdate:modelValue": l[18] || (l[18] = (a) => e.data.show = a)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.showTip !== void 0 ? (o(), u(r, {
          key: 19,
          label: "显示提示"
        }, {
          default: d(() => [
            t(m, {
              modelValue: e.data.showTip,
              "onUpdate:modelValue": l[19] || (l[19] = (a) => e.data.showTip = a)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.required !== void 0 ? (o(), u(r, {
          key: 20,
          label: "是否必填"
        }, {
          default: d(() => [
            t(m, {
              modelValue: e.data.required,
              "onUpdate:modelValue": l[20] || (l[20] = (a) => e.data.required = a),
              onChange: b.requireChange,
              disabled: !e.couldChangeRequire
            }, null, 8, ["modelValue", "onChange", "disabled"]),
            t(U, {
              class: "item",
              effect: "dark",
              placement: "top-start"
            }, {
              content: d(() => [
                q
              ]),
              default: d(() => [
                v(f("span", T, " (勾选后可作为流程条件)", 512), [
                  [k, e.data.proCondition]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : n("", !0),
        e.data.showDivider !== void 0 ? (o(), u(r, {
          key: 21,
          label: "显示分割线"
        }, {
          default: d(() => [
            t(m, {
              modelValue: e.data.showDivider,
              "onUpdate:modelValue": l[21] || (l[21] = (a) => e.data.showDivider = a)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.labelWidth !== void 0 ? (o(), u(r, {
          key: 22,
          label: "标签宽度"
        }, {
          default: d(() => [
            t(_, {
              modelValue: e.data.labelWidth,
              "onUpdate:modelValue": l[22] || (l[22] = (a) => e.data.labelWidth = a),
              modelModifiers: { number: !0 },
              placeholder: "请输入标签宽度"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.style && e.data.style.width !== void 0 ? (o(), u(r, {
          key: 23,
          label: "组件宽度"
        }, {
          default: d(() => [
            t(i, {
              modelValue: e.data.style.width,
              "onUpdate:modelValue": l[23] || (l[23] = (a) => e.data.style.width = a),
              placeholder: "请输入组件宽度",
              clearable: ""
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0),
        e.data.fontSize !== void 0 ? (o(), u(r, {
          key: 24,
          label: "字体大小"
        }, {
          default: d(() => [
            t(i, {
              modelValue: e.data.fontSize,
              "onUpdate:modelValue": l[24] || (l[24] = (a) => e.data.fontSize = a),
              placeholder: "请输入字体大小",
              clearable: ""
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : n("", !0)
      ], 64);
    };
  }
});
export {
  M as default
};
