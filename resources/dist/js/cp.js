const Vue = window.Vue;
const { BaseTransition, BaseTransitionPropsValidators, Comment, DeprecationTypes, EffectScope, ErrorCodes, ErrorTypeStrings, Fragment, KeepAlive, ReactiveEffect, Static, Suspense, Teleport, Text, TrackOpTypes, Transition, TransitionGroup, TriggerOpTypes, VueElement, __esModule, assertNumber, callWithAsyncErrorHandling, callWithErrorHandling, camelize, capitalize, cloneVNode, compatUtils, compile, computed, createApp, createBlock, createCommentVNode, createElementBlock, createElementVNode, createHydrationRenderer, createPropsRestProxy, createRenderer, createSSRApp, createSlots, createStaticVNode, createTextVNode, createVNode, customRef, defineAsyncComponent, defineComponent, defineCustomElement, defineEmits, defineExpose, defineModel, defineOptions, defineProps, defineSSRCustomElement, defineSlots, devtools, effect, effectScope, getCurrentInstance, getCurrentScope, getCurrentWatcher, getTransitionRawChildren, guardReactiveProps, h, handleError, hasInjectionContext, hydrate, hydrateOnIdle, hydrateOnInteraction, hydrateOnMediaQuery, hydrateOnVisible, initCustomFormatter, initDirectivesForSSR, inject, isMemoSame, isProxy, isReactive, isReadonly, isRef, isRuntimeOnly, isShallow, isVNode, markRaw, mergeDefaults, mergeModels, mergeProps, nextTick, nodeOps, normalizeClass, normalizeProps, normalizeStyle, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onScopeDispose, onServerPrefetch, onUnmounted, onUpdated, onWatcherCleanup, openBlock, patchProp, popScopeId, provide, proxyRefs, pushScopeId, queuePostFlushCb, reactive, readonly, ref, registerRuntimeCompiler, render, renderList, renderSlot, resolveComponent, resolveDirective, resolveDynamicComponent, resolveFilter, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, shallowReactive, shallowReadonly, shallowRef, ssrContextKey, ssrUtils, stop, toDisplayString, toHandlerKey, toHandlers, toRaw, toRef, toRefs, toValue, transformVNodeArgs, triggerRef, unref, useAttrs, useCssModule, useCssVars, useHost, useId, useModel, useSSRContext, useShadowRoot, useSlots, useTemplateRef, useTransitionState, vModelCheckbox, vModelDynamic, vModelRadio, vModelSelect, vModelText, vShow, version, warn, watch, watchEffect, watchPostEffect, watchSyncEffect, withAsyncContext, withCtx, withDefaults, withDirectives, withKeys, withMemo, withModifiers, withScopeId } = Vue;
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
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
      if (!this.trackedValue && !this.value) return false;
      return this.trackedValue != this.value;
    }
  },
  watch: {
    isDirty(isDirty) {
      if (isDirty) Statamic.$dirty.add(this.name);
      else Statamic.$dirty.remove(this.name);
    },
    value(newValue) {
      this.trackedValue = newValue;
    }
  }
};
const _hoisted_1$2 = { class: "relative w-full" };
const _hoisted_2$1 = {
  key: 0,
  class: "absolute right-3 mt-[0.4rem] pointer-events-none text-[rgb(67,169,255)]",
  "aria-label": "has changed"
};
const _hoisted_3$1 = ["name"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    $options.isDirty ? (openBlock(), createElementBlock("span", _hoisted_2$1, "•")) : createCommentVNode("", true),
    withDirectives(createElementVNode("input", mergeProps(_ctx.$attrs, {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.trackedValue = $event),
      name: $props.name,
      class: "w-full block bg-white dark:bg-gray-900 border border-gray-300 with-contrast:border-gray-500 dark:border-gray-700 dark:with-contrast:border-gray-500 dark:inset-shadow-2xs dark:inset-shadow-black text-gray-925 dark:text-gray-300 placeholder:text-gray-500 dark:placeholder:text-gray-400/85 appearance-none antialiased shadow-ui-sm disabled:shadow-none disabled:opacity-50 read-only:border-dashed not-prose text-base rounded-lg px-3 py-2 h-10 leading-[1.375rem]"
    }), null, 16, _hoisted_3$1), [
      [vModelDynamic, $data.trackedValue]
    ])
  ]);
}
const TrackedInput = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
function inputType(value) {
  if (value === null) return true;
  if (typeof value === "string") return true;
  if (typeof value === "number") return true;
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
    if (!sub) return void 0;
  }
  return sub[name];
}
const {
  Alert,
  AuthCard,
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  CardList,
  CardListItem,
  CardPanel,
  CharacterCounter,
  Checkbox,
  CheckboxGroup,
  CodeEditor,
  Combobox,
  CommandPaletteItem,
  ConfirmationModal,
  Context,
  ContextFooter,
  ContextHeader,
  ContextItem,
  ContextLabel,
  ContextMenu,
  ContextSeparator,
  CreateForm,
  DatePicker,
  DateRangePicker,
  Description,
  DocsCallout,
  DragHandle,
  Dropdown,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
  DropdownSeparator,
  DropdownFooter,
  DropdownHeader,
  Editable,
  ErrorMessage,
  EmptyStateItem,
  EmptyStateMenu,
  Field,
  Header,
  Heading,
  HoverCard,
  Icon,
  Input,
  InputGroup,
  InputGroupAppend,
  InputGroupPrepend,
  Label,
  Listing,
  ListingCustomizeColumns,
  ListingFilters,
  ListingHeaderCell,
  ListingPagination,
  ListingPresets,
  ListingPresetTrigger,
  ListingRowActions,
  ListingSearch,
  ListingTable,
  ListingTableBody,
  ListingTableHead,
  ListingToggleAll,
  LivePreview,
  LivePreviewPopout,
  Modal,
  ModalClose,
  ModalTitle,
  Pagination,
  Panel,
  PanelFooter,
  PanelHeader,
  Popover,
  PublishComponents,
  PublishContainer,
  publishContextKey,
  injectPublishContext,
  PublishField,
  PublishFields,
  PublishFieldsProvider,
  PublishForm,
  PublishLocalizations,
  PublishSections,
  PublishTabs,
  Radio,
  RadioGroup,
  Select,
  Separator,
  Slider,
  Skeleton,
  SplitterGroup,
  SplitterPanel,
  SplitterResizeHandle,
  StatusIndicator,
  Subheading,
  Switch,
  TabContent,
  Stack,
  StackClose,
  StackHeader,
  StackFooter,
  StackContent,
  Table,
  TableCell,
  TableColumn,
  TableColumns,
  TableRow,
  TableRows,
  TabList,
  TabProvider,
  Tabs,
  TabTrigger,
  Textarea,
  TimePicker,
  ToggleGroup,
  ToggleItem,
  Widget,
  registerIconSet,
  registerIconSetFromStrings
} = __STATAMIC__.ui;
const _sfc_main$2 = {
  components: {
    Button,
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
      this.details = !this.details;
      setTimeout(() => {
        this.grow = !this.grow;
      }, 10);
    },
    setAnchor(e) {
      e.preventDefault();
      window.history.replaceState(window.history.state, "", e.target.href);
      const input = document.getElementById(e.target.href.split("#")[1]);
      input?.focus();
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
        if (!el) return;
        el.focus();
      }, 10);
    }
  }
};
const _hoisted_1$1 = { class: "flex flex-wrap gap-3 py-1" };
const _hoisted_2 = { class: "md:w-64 mt-2 truncate w-full" };
const _hoisted_3 = ["for", "title"];
const _hoisted_4 = ["href"];
const _hoisted_5 = { class: "flex flex-col grow" };
const _hoisted_6 = { class: "flex gap-3" };
const _hoisted_7 = { class: "flex flex-col gap-3 pr-1 pt-2" };
const _hoisted_8 = { class: "truncate w-40" };
const _hoisted_9 = ["for"];
const _hoisted_10 = ["href"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TrackedInput = resolveComponent("TrackedInput");
  const _component_Button = resolveComponent("Button");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("div", _hoisted_2, [
      createElementVNode("label", {
        for: `${$options.site}.${$options.pathName}`,
        title: $options.pathName,
        class: "font-medium text-sm"
      }, [
        createElementVNode("a", {
          href: `#${$options.site}.${$options.pathName}`,
          onClick: _cache[0] || (_cache[0] = (...args) => $options.setAnchor && $options.setAnchor(...args))
        }, toDisplayString($options.deslug($props.name)), 9, _hoisted_4)
      ], 8, _hoisted_3)
    ]),
    createElementVNode("div", _hoisted_5, [
      createElementVNode("div", _hoisted_6, [
        createVNode(_component_TrackedInput, {
          id: `${$options.site}.${$options.pathName}`,
          name: $options.formName,
          value: $props.value,
          placeholder: $props.value
        }, null, 8, ["id", "name", "value", "placeholder"]),
        createVNode(_component_Button, {
          icon: "hierarchy",
          onClick: $options.expanded
        }, null, 8, ["onClick"])
      ]),
      $data.details ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "-mr-1 mt-4 overflow-hidden transition-all",
        style: normalizeStyle({
          height: $data.grow ? $options.altCount * (40 + 12) + 2 + "px" : 0
        })
      }, [
        createElementVNode("div", _hoisted_7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.alternatives, (alt) => {
            return openBlock(), createElementBlock("div", {
              key: alt.handle,
              class: "flex gap-4 items-center"
            }, [
              createElementVNode("div", _hoisted_8, [
                createElementVNode("label", {
                  for: `${alt.handle}.${$options.pathName}`
                }, [
                  createElementVNode("a", {
                    href: `#${alt.handle}.${$options.pathName}`,
                    onClick: _cache[1] || (_cache[1] = (...args) => $options.setAnchor && $options.setAnchor(...args))
                  }, toDisplayString(alt.name), 9, _hoisted_10)
                ], 8, _hoisted_9)
              ]),
              createVNode(_component_TrackedInput, {
                id: `${alt.handle}.${$options.pathName}`,
                name: `${$options.formName.replace(`translations[${$options.site}]`, `translations[${alt.handle}]`)}`,
                value: alt.value
              }, null, 8, ["id", "name", "value"])
            ]);
          }), 128))
        ])
      ], 4)) : createCommentVNode("", true)
    ])
  ]);
}
const Entry = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  name: "Group",
  components: {
    Card,
    Entry,
    Panel
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Entry = resolveComponent("Entry");
  const _component_Group = resolveComponent("Group", true);
  const _component_Card = resolveComponent("Card");
  const _component_Panel = resolveComponent("Panel");
  return $options.inputType($props.value) ? (openBlock(), createBlock(_component_Entry, {
    key: 0,
    name: $props.name,
    value: $props.value,
    path: $props.path
  }, null, 8, ["name", "value", "path"])) : (openBlock(), createBlock(_component_Panel, {
    key: 1,
    heading: $options.deslug($props.name),
    class: "mt-6"
  }, {
    default: withCtx(() => [
      createVNode(_component_Card, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.value, (children, key) => {
            return openBlock(), createBlock(_component_Group, {
              name: key,
              value: children,
              path: [...$props.path, $props.name],
              key
            }, null, 8, ["name", "value", "path"]);
          }), 128))
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["heading"]));
}
const Group = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  components: {
    Button,
    Card,
    Entry,
    Group,
    Header,
    Panel
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
        if (inputType(value)) acc[key] = value;
        return acc;
      }, {});
    },
    objects() {
      return Object.entries(this.translations).reduce((acc, [key, value]) => {
        if (!inputType(value)) acc[key] = value;
        return acc;
      }, {});
    }
  },
  provide() {
    return {
      site: this.site,
      sites: computed(() => this.trackedSites)
    };
  },
  mounted() {
    this.saveKeyBinding = this.$keys.bindGlobal(
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
      this.$axios({
        method: "POST",
        url: this.action,
        data: this.$refs.form
      }).then((response) => {
        this.$toast.success(response.data.status);
        this.trackedSites = Object.assign(this.trackedSites, response.data.sites);
      }).catch((error) => this.handleAxiosError(error));
    },
    handleAxiosError(e) {
      if (e.response && e.response.status === 422) {
        const { message, errors } = e.response.data;
        console.error(errors);
        this.$toast.error(message);
      } else if (e.response) {
        this.$toast.error(e.response.data.message);
      } else {
        this.$toast.error(e || "Something went wrong");
      }
    }
  },
  unmounted() {
    this.saveKeyBinding.destroy();
  }
};
const _hoisted_1 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  const _component_Header = resolveComponent("Header");
  const _component_Entry = resolveComponent("Entry");
  const _component_Group = resolveComponent("Group");
  const _component_Card = resolveComponent("Card");
  const _component_Panel = resolveComponent("Panel");
  return openBlock(), createElementBlock("form", {
    class: "max-w-5xl 3xl:max-w-5xl 3xl:max-w-6xl mx-auto",
    onSubmit: _cache[0] || (_cache[0] = withModifiers((...args) => $options.save && $options.save(...args), ["prevent"])),
    ref: "form"
  }, [
    createVNode(_component_Header, {
      title: _ctx.__("localize::general.title"),
      icon: "dictionary-language-book"
    }, {
      default: withCtx(() => [
        createVNode(_component_Button, {
          text: _ctx.__("Save"),
          type: "submit",
          variant: "primary"
        }, null, 8, ["text"])
      ]),
      _: 1
    }, 8, ["title"]),
    createElementVNode("p", {
      innerHTML: _ctx.__("localize::general.intro"),
      class: "mb-6 text-sm"
    }, null, 8, _hoisted_1),
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.strings, (value, first) => {
      return openBlock(), createBlock(_component_Entry, {
        key: first,
        name: first,
        value,
        path: []
      }, null, 8, ["name", "value"]);
    }), 128)),
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.objects, (value, first) => {
      return openBlock(), createBlock(_component_Panel, {
        heading: $options.deslug(first),
        key: first,
        class: "mt-6"
      }, {
        default: withCtx(() => [
          createVNode(_component_Card, null, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(value, (secondValue, second) => {
                return openBlock(), createElementBlock(Fragment, { key: second }, [
                  $options.inputType(secondValue) ? (openBlock(), createBlock(_component_Entry, {
                    key: 0,
                    name: second,
                    value: secondValue,
                    path: [first]
                  }, null, 8, ["name", "value", "path"])) : (openBlock(), createBlock(_component_Group, {
                    key: 1,
                    name: second,
                    value: secondValue,
                    path: [first],
                    parent: ""
                  }, null, 8, ["name", "value", "path"]))
                ], 64);
              }), 128))
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1032, ["heading"]);
    }), 128)),
    Object.values($options.translations).length === 0 ? (openBlock(), createBlock(_component_Card, { key: 0 }, {
      default: withCtx(() => [
        createElementVNode("p", null, toDisplayString(_ctx.__("localize::general.no_content")), 1)
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ], 544);
}
const LocalizeList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
Statamic.$components.register("localize-list", LocalizeList);
