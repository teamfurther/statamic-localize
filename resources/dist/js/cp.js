function inputType(value) {
  if (value === null)
    return true;
  if (typeof value === "string")
    return true;
  if (typeof value === "number")
    return true;
  return false;
}
function deslug(string = "") {
  if (typeof string !== "string") {
    return string;
  }
  return string.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()).replace(/([a-z])([A-Z])/g, "$1 $2");
}
function walkObject(object, path, name) {
  let sub = object;
  for (let step of path) {
    sub = sub[step];
    if (!sub)
      return void 0;
  }
  return sub[name];
}
function normalizeComponent(scriptExports, render5, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render5) {
    options.render = render5;
    options.staticRenderFns = staticRenderFns;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(
        this,
        (options.functional ? this.parent : this).$root.$options.shadowRoot
      );
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const _sfc_main$3 = {
  inheritAttrs: false,
  props: {
    name: String,
    value: String
  },
  data() {
    return {
      trackedValue: this.value
    };
  },
  computed: {
    isDirty() {
      if (!this.trackedValue && !this.value)
        return false;
      return this.trackedValue != this.value;
    }
  },
  watch: {
    isDirty(isDirty) {
      if (isDirty)
        Statamic.$dirty.add(this.name);
      else
        Statamic.$dirty.remove(this.name);
    },
    // In Vue 2, props are automatically watched and can trigger updates
    value(newValue) {
      this.trackedValue = newValue;
    }
  }
};
var _sfc_render$3 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "relative w-full" }, [_vm.isDirty ? _c("span", { staticClass: "absolute statamic-localize-right-3 statamic-localize-mt-[0.4rem] statamic-localize-pointer-events-none statamic-localize-text-[rgb(67,169,255)]", attrs: { "aria-label": "has changed" } }, [_vm._v("•")]) : _vm._e(), _vm.$attrs.type === "checkbox" ? _c("input", _vm._b({ directives: [{ name: "model", rawName: "v-model", value: _vm.trackedValue, expression: "trackedValue" }], staticClass: "input-text", attrs: { "name": _vm.name, "type": "checkbox" }, domProps: { "checked": Array.isArray(_vm.trackedValue) ? _vm._i(_vm.trackedValue, null) > -1 : _vm.trackedValue }, on: { "change": function($event) {
    var $$a = _vm.trackedValue, $$el = $event.target, $$c = $$el.checked ? true : false;
    if (Array.isArray($$a)) {
      var $$v = null, $$i = _vm._i($$a, $$v);
      if ($$el.checked) {
        $$i < 0 && (_vm.trackedValue = $$a.concat([$$v]));
      } else {
        $$i > -1 && (_vm.trackedValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
      }
    } else {
      _vm.trackedValue = $$c;
    }
  } } }, "input", _vm.$attrs, false)) : _vm.$attrs.type === "radio" ? _c("input", _vm._b({ directives: [{ name: "model", rawName: "v-model", value: _vm.trackedValue, expression: "trackedValue" }], staticClass: "input-text", attrs: { "name": _vm.name, "type": "radio" }, domProps: { "checked": _vm._q(_vm.trackedValue, null) }, on: { "change": function($event) {
    _vm.trackedValue = null;
  } } }, "input", _vm.$attrs, false)) : _c("input", _vm._b({ directives: [{ name: "model", rawName: "v-model", value: _vm.trackedValue, expression: "trackedValue" }], staticClass: "input-text", attrs: { "name": _vm.name, "type": _vm.$attrs.type }, domProps: { "value": _vm.trackedValue }, on: { "input": function($event) {
    if ($event.target.composing)
      return;
    _vm.trackedValue = $event.target.value;
  } } }, "input", _vm.$attrs, false))]);
};
var _sfc_staticRenderFns$3 = [];
var __component__$3 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$3,
  _sfc_render$3,
  _sfc_staticRenderFns$3,
  false,
  null,
  null,
  null,
  null
);
const TrackedInput = __component__$3.exports;
const Entry_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  components: {
    TrackedInput
  },
  props: {
    name: String,
    value: String,
    path: Array
  },
  inject: ["site", "sites"],
  data() {
    return {
      details: false,
      grow: false
    };
  },
  computed: {
    formName() {
      return "translations" + [this.site, ...this.path, this.name].map((s) => `[${s}]`).join("");
    },
    pathName() {
      return [...this.path, this.name].join(".");
    },
    alternatives() {
      return Object.values(this.sites).filter((alt) => alt.handle != this.site).map((alt) => ({
        handle: alt.handle,
        name: alt.name,
        value: walkObject(alt.translations, this.path, this.name)
      }));
    },
    altCount() {
      return Object.keys(this.sites).length - 1;
    }
  },
  methods: {
    deslug,
    expanded() {
      this.details = true;
      setTimeout(() => {
        this.grow = !this.grow;
      }, 10);
    },
    setAnchor(e) {
      e.preventDefault();
      window.history.replaceState(window.history.state, "", e.target.href);
      const input = document.getElementById(e.target.href.split("#")[1]);
      input == null ? void 0 : input.focus();
    }
  },
  mounted() {
    const hash = window.location.hash.substring(1);
    const site = hash.substring(0, hash.indexOf("."));
    const path = hash.substring(hash.indexOf(".") + 1);
    if (path === this.pathName) {
      if (site !== this.site) {
        this.details = true;
        this.grow = true;
      }
      setTimeout(() => {
        const el = document.getElementById(window.location.hash.substring(1));
        if (!el)
          return;
        el.closest("[blink-target]").classList.add("blink");
        el.focus();
      }, 10);
    }
  }
};
var _sfc_render$2 = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "form-group flex gap-3 py-1 [.section+&]:statamic-localize-mt-6 statamic-localize-flex-wrap", attrs: { "blink-target": "" } }, [_c("div", { staticClass: "field-inner truncate w-full md:statamic-localize-w-[15rem] mt-2" }, [_c("label", { staticClass: "publish-field-label", attrs: { "for": `${_vm.site}.${_vm.pathName}`, "title": _vm.pathName } }, [_c("a", { attrs: { "href": `#${_vm.site}.${_vm.pathName}` }, on: { "click": _vm.setAnchor } }, [_vm._v(" " + _vm._s(_vm.deslug(_vm.name)) + " ")])])]), _c("div", { staticClass: "flex gap-4 flex-col statamic-localize-grow" }, [_c("div", { staticClass: "flex gap-2" }, [_c("TrackedInput", { attrs: { "id": `${_vm.site}.${_vm.pathName}`, "name": _vm.formName, "value": _vm.value, "placeholder": _vm.value } }), _vm.altCount ? _c("button", { staticClass: "btn !statamic-localize-px-3 statamic-localize-w-[2.5rem]", attrs: { "type": "button" }, on: { "click": _vm.expanded } }, [_c("svg-icon", { attrs: { "name": "translate" } })], 1) : _vm._e()], 1), _vm.details ? _c("div", { staticClass: "statamic-localize-transition-all statamic-localize-overflow-hidden statamic-localize-m-[0_-2px_-2px_0]", style: {
    height: _vm.grow ? _vm.altCount * (38 + 8) + 2 + "px" : 0
  } }, [_c("div", { staticClass: "pt-2 flex gap-2 flex-col statamic-localize-pr-[2px]" }, _vm._l(_vm.alternatives, function(alt) {
    return _c("div", { key: alt.handle, staticClass: "flex gap-4 statamic-localize-items-center", attrs: { "blink-target": "" } }, [_c("div", { staticClass: "field-inner truncate statamic-localize-w-[8rem]" }, [_c("label", { staticClass: "publish-field-label", attrs: { "for": `${alt.handle}.${_vm.pathName}` } }, [_c("a", { attrs: { "href": `#${alt.handle}.${_vm.pathName}` }, on: { "click": _vm.setAnchor } }, [_vm._v(" " + _vm._s(alt.name) + " ")])])]), _c("TrackedInput", { attrs: { "id": `${alt.handle}.${_vm.pathName}`, "name": `${_vm.formName.replace(`translations[${_vm.site}]`, `translations[${alt.handle}]`)}`, "value": alt.value } })], 1);
  }), 0)]) : _vm._e()])]);
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  null,
  null,
  null
);
const Entry = __component__$2.exports;
const _sfc_main$1 = {
  name: "Group",
  components: {
    Entry
  },
  props: {
    parent: Boolean,
    name: String,
    value: Object,
    path: Array
  },
  methods: {
    deslug,
    inputType
  }
};
var _sfc_render$1 = function render3() {
  var _vm = this, _c = _vm._self._c;
  return _vm.inputType(_vm.value) ? _c("Entry", { staticClass: "pl-3 statamic-localize-pr-0", attrs: { "name": _vm.name, "value": _vm.value, "path": _vm.path } }) : _c("fieldset", { staticClass: "border dark:border-dark-900 rounded shadow-sm !statamic-localize-p-2 statamic-localize-mt-5 section" }, [_c("legend", { staticClass: "statamic-localize-translate-y-[-65%] absolute" }, [_c(_vm.parent ? "h3" : "h4", { tag: "component", staticClass: "bg-white dark:bg-dark-600 inline-block statamic-localize-px-3" }, [_vm._v(" " + _vm._s(_vm.deslug(_vm.name)) + " ")])], 1), _vm._l(_vm.value, function(children, key) {
    return _c("Group", { key, attrs: { "name": key, "value": children, "path": [..._vm.path, _vm.name] } });
  })], 2);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null,
  null,
  null
);
const Group = __component__$1.exports;
const _sfc_main = {
  components: {
    Entry,
    Group
  },
  props: {
    site: String,
    sites: Object,
    action: String
  },
  data() {
    return {
      trackedSites: this.sites,
      saveKeyBinding: null
    };
  },
  computed: {
    translations() {
      const createEmptyTranslationKeys = (obj1, obj2) => {
        for (let key in obj2) {
          if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
            if (obj2[key] instanceof Object) {
              obj1[key] = {};
              obj1[key] = createEmptyTranslationKeys(obj1[key], obj2[key]);
            } else {
              obj1[key] = "";
            }
          }
        }
        return obj1;
      };
      const otherSites = Object.keys(this.trackedSites).filter((x) => x !== this.site);
      let result = this.trackedSites[this.site].translations;
      otherSites.forEach((s) => {
        result = createEmptyTranslationKeys(result, this.trackedSites[s].translations);
      });
      return result;
    },
    strings() {
      return Object.entries(this.translations).reduce((acc, [key, value]) => {
        if (inputType(value))
          acc[key] = value;
        return acc;
      }, {});
    },
    objects() {
      return Object.entries(this.translations).reduce((acc, [key, value]) => {
        if (!inputType(value))
          acc[key] = value;
        return acc;
      }, {});
    }
  },
  provide() {
    return {
      site: this.site,
      sites: this.trackedSites
    };
  },
  mounted() {
    this.saveKeyBinding = Statamic.$keys.bindGlobal(
      ["mod+s", "mod+return"],
      (e) => {
        e.preventDefault();
        this.save();
      }
    );
  },
  methods: {
    deslug,
    inputType,
    save() {
      Statamic.$axios({
        method: "POST",
        url: this.action,
        data: this.$refs.form
      }).then((response) => {
        Statamic.$toast.success(response.data.status);
        this.trackedSites = Object.assign(this.trackedSites, response.data.sites);
      }).catch((error) => this.handleAxiosError(error));
    },
    handleAxiosError(e) {
      if (e.response && e.response.status === 422) {
        const { message, errors } = e.response.data;
        console.error(errors);
        Statamic.$toast.error(message);
      } else if (e.response) {
        Statamic.$toast.error(e.response.data.message);
      } else {
        Statamic.$toast.error(e || "Something went wrong");
      }
    }
  },
  // In Vue 2, use destroyed instead of unmounted
  destroyed() {
    this.saveKeyBinding.destroy();
  }
};
var _sfc_render = function render4() {
  var _vm = this, _c = _vm._self._c;
  return _c("form", { ref: "form", on: { "submit": function($event) {
    $event.preventDefault();
    return _vm.save.apply(null, arguments);
  } } }, [_c("header", { staticClass: "mb-8" }, [_c("button", { staticClass: "statamic-localize-float-right btn-primary" }, [_vm._v(_vm._s(_vm.__("Save")))]), _c("h1", [_vm._v(_vm._s(_vm.__("localize::general.title")))]), _c("p", { domProps: { "innerHTML": _vm._s(_vm.__("localize::general.intro")) } })]), Object.keys(_vm.strings).length ? _c("section", { staticClass: "card py-5 px-6 content statamic-localize-mb-6 form-group" }, _vm._l(_vm.strings, function(value, first) {
    return _c("Entry", { key: first, staticClass: "px-0", attrs: { "name": first, "value": value, "path": [] } });
  }), 1) : _vm._e(), _vm._l(_vm.objects, function(value, first) {
    return _c("section", { key: first, staticClass: "card p-0 content statamic-localize-mb-6 form-group" }, [_c("header", { staticClass: "publish-section-header @container" }, [_c("div", { staticClass: "publish-section-header-inner" }, [_c("h2", { staticClass: "text-base font-semibold mb-1" }, [_vm._v(_vm._s(_vm.deslug(first)))])])]), _c("div", { staticClass: "py-5 px-6" }, [_vm._l(value, function(secondValue, second) {
      return [_vm.inputType(secondValue) ? _c("Entry", { staticClass: "px-0", attrs: { "name": second, "value": secondValue, "path": [first] } }) : _c("Group", { staticClass: "statamic-localize-mb-1", attrs: { "name": second, "value": secondValue, "path": [first], "parent": "" } })];
    })], 2)]);
  }), Object.values(_vm.translations).length === 0 ? _c("section", { staticClass: "card p-6 content" }, [_c("p", [_vm._v(_vm._s(_vm.__("localize::general.no_content")))])]) : _vm._e()], 2);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const LocalizeList = __component__.exports;
const cp = "";
Statamic.$components.register("localize-list", LocalizeList);
