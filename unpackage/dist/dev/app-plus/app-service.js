if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$9 = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-d31e1c47"], ["__file", "E:/码农/前端练习/wish/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  const zhHans = {
    "uni-load-more.contentdown": "上拉显示更多",
    "uni-load-more.contentrefresh": "正在加载...",
    "uni-load-more.contentnomore": "没有更多数据了"
  };
  const zhHant = {
    "uni-load-more.contentdown": "上拉顯示更多",
    "uni-load-more.contentrefresh": "正在加載...",
    "uni-load-more.contentnomore": "沒有更多數據了"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$8 = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZV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"
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages = getCurrentPages();
      var page = pages[pages.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.webviewHide && ($props.iconType === "circle" || $props.iconType === "auto" && $data.platform === "android") && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--android-MP"
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )) : !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--ios-H5"
        },
        [
          vue.createElementVNode("image", {
            src: $data.imgBase64,
            mode: "widthFix"
          }, null, 8, ["src"])
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showText ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 2,
          class: "uni-load-more__text",
          style: vue.normalizeStyle({ color: $props.color })
        },
        vue.toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-9245e42c"], ["__file", "E:/码农/前端练习/wish/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const mockCovers = [
        "https://picsum.photos/300/400?random=1",
        "https://picsum.photos/300/500?random=2",
        "https://picsum.photos/300/380?random=3",
        "https://picsum.photos/300/450?random=4",
        "https://picsum.photos/300/420?random=5",
        "https://picsum.photos/300/480?random=6",
        "https://picsum.photos/300/360?random=7",
        "https://picsum.photos/300/520?random=8",
        "https://picsum.photos/300/400?random=9",
        "https://picsum.photos/300/440?random=10"
      ];
      const mockAvatars = [
        "https://picsum.photos/60/60?random=11",
        "https://picsum.photos/60/60?random=12",
        "https://picsum.photos/60/60?random=13",
        "https://picsum.photos/60/60?random=14",
        "https://picsum.photos/60/60?random=15"
      ];
      const mockTitles = [
        "今天的穿搭超级好看！分享给大家～",
        "发现一家隐藏的宝藏咖啡馆☕",
        "周末去了这个小众景点，人少景美",
        "自制抹茶蛋糕，做法超简单！",
        "护肤品测评 | 这款真的很好用",
        "旅行vlog | 云南大理3日游",
        "健身打卡第30天，变化很大！",
        "租房改造，1000元让家变美",
        "最近在看的好书推荐",
        "夏日美甲新花样，自己做的！"
      ];
      const mockAuthors = ["小红薯er", "生活美学家", "旅行达人", "美食探店", "时尚博主"];
      const imgHeights = [180, 220, 200, 240, 190, 210, 230, 180, 250, 200];
      function generateMockData(startId = 1, count = 10) {
        return Array.from({ length: count }, (_, i) => ({
          id: startId + i,
          cover: mockCovers[i % mockCovers.length],
          imgHeight: imgHeights[i % imgHeights.length],
          title: mockTitles[i % mockTitles.length],
          author: mockAuthors[i % mockAuthors.length],
          avatar: mockAvatars[i % mockAvatars.length],
          likes: Math.floor(Math.random() * 5e3) + 100,
          liked: false
        }));
      }
      const statusBarHeight = vue.ref(0);
      const navbarHeight = vue.ref(88);
      const tabs = vue.ref(["关注", "推荐", "附近"]);
      const activeTab = vue.ref(1);
      const leftList = vue.ref([]);
      const rightList = vue.ref([]);
      const isRefreshing = vue.ref(false);
      const loadMoreStatus = vue.ref("more");
      const page = vue.ref(1);
      function loadData() {
        const newData = generateMockData(page.value * 10 - 9, 10);
        newData.forEach((item, index) => {
          if (index % 2 === 0) {
            leftList.value.push(item);
          } else {
            rightList.value.push(item);
          }
        });
      }
      function switchTab(index) {
        activeTab.value = index;
        page.value = 1;
        leftList.value = [];
        rightList.value = [];
        loadData();
      }
      function onRefresh() {
        formatAppLog("log", "at pages/index/index.vue:200", "进入瀑布流数据添加");
        isRefreshing.value = true;
        page.value = 1;
        leftList.value = [];
        rightList.value = [];
        setTimeout(() => {
          loadData();
          isRefreshing.value = false;
        }, 1e3);
      }
      function onLoadMore() {
        formatAppLog("log", "at pages/index/index.vue:212", "进入瀑布流数据添加1");
        if (loadMoreStatus.value === "loading")
          return;
        loadMoreStatus.value = "loading";
        page.value++;
        setTimeout(() => {
          loadData();
          loadMoreStatus.value = "more";
        }, 800);
      }
      function toggleLike(item) {
        item.liked = !item.liked;
        item.likes += item.liked ? 1 : -1;
      }
      function goSearch() {
        uni.switchTab({ url: "/pages/discover/discover" });
      }
      function goDetail(item) {
        uni.navigateTo({
          url: `/pages/detail/detail?id=${item.id}&title=${encodeURIComponent(item.title)}&cover=${encodeURIComponent(item.cover)}&author=${encodeURIComponent(item.author)}&avatar=${encodeURIComponent(item.avatar)}&likes=${item.likes}`
        });
      }
      vue.onMounted(() => {
        const info = uni.getSystemInfoSync();
        statusBarHeight.value = info.statusBarHeight ?? 0;
        navbarHeight.value = (info.statusBarHeight ?? 0) + 44;
        loadData();
      });
      const __returned__ = { mockCovers, mockAvatars, mockTitles, mockAuthors, imgHeights, generateMockData, statusBarHeight, navbarHeight, tabs, activeTab, leftList, rightList, isRefreshing, loadMoreStatus, page, loadData, switchTab, onRefresh, onLoadMore, toggleLike, goSearch, goDetail };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode(
        "view",
        {
          class: "navbar",
          style: vue.normalizeStyle({ paddingTop: $setup.statusBarHeight + "px" })
        },
        [
          vue.createElementVNode("view", { class: "navbar-left" }, [
            vue.createElementVNode("text", { class: "brand-name" }, "Wish")
          ]),
          vue.createElementVNode("view", { class: "navbar-tabs" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.tabs, (tab, index) => {
                return vue.openBlock(), vue.createElementBlock("text", {
                  key: index,
                  class: vue.normalizeClass(["tab-item", $setup.activeTab === index ? "tab-active" : ""]),
                  onClick: ($event) => $setup.switchTab(index)
                }, vue.toDisplayString(tab), 11, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "navbar-right" }, [
            vue.createVNode(_component_uni_icons, {
              type: "search",
              size: "22",
              color: "#1a1a1a",
              onClick: $setup.goSearch
            })
          ])
        ],
        4
        /* STYLE */
      ),
      vue.createElementVNode("scroll-view", {
        "scroll-y": "",
        class: "content",
        style: vue.normalizeStyle({ top: $setup.navbarHeight + "px" }),
        "refresher-enabled": "",
        "refresher-triggered": $setup.isRefreshing,
        onRefresherrefresh: $setup.onRefresh,
        onScrolltolower: $setup.onLoadMore
      }, [
        vue.createElementVNode("view", { class: "waterfall" }, [
          vue.createElementVNode("view", { class: "waterfall-col" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.leftList, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.id,
                  class: "card",
                  onClick: ($event) => $setup.goDetail(item)
                }, [
                  vue.createElementVNode("image", {
                    src: item.cover,
                    class: "card-img",
                    style: vue.normalizeStyle({ height: item.imgHeight + "px" }),
                    mode: "aspectFill"
                  }, null, 12, ["src"]),
                  vue.createElementVNode("view", { class: "card-body" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "card-title" },
                      vue.toDisplayString(item.title),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "card-footer" }, [
                      vue.createElementVNode("view", { class: "author-info" }, [
                        vue.createElementVNode("image", {
                          src: item.avatar,
                          class: "avatar",
                          mode: "aspectFill"
                        }, null, 8, ["src"]),
                        vue.createElementVNode(
                          "text",
                          { class: "author-name" },
                          vue.toDisplayString(item.author),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", {
                        class: "like-info",
                        onClick: vue.withModifiers(($event) => $setup.toggleLike(item), ["stop"])
                      }, [
                        vue.createVNode(_component_uni_icons, {
                          type: item.liked ? "heart-filled" : "heart",
                          size: "14",
                          color: item.liked ? "#ff2442" : "#999"
                        }, null, 8, ["type", "color"]),
                        vue.createElementVNode(
                          "text",
                          { class: "like-count" },
                          vue.toDisplayString(item.likes),
                          1
                          /* TEXT */
                        )
                      ], 8, ["onClick"])
                    ])
                  ])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "waterfall-col" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.rightList, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.id,
                  class: "card",
                  onClick: ($event) => $setup.goDetail(item)
                }, [
                  vue.createElementVNode("image", {
                    src: item.cover,
                    class: "card-img",
                    style: vue.normalizeStyle({ height: item.imgHeight + "px" }),
                    mode: "aspectFill"
                  }, null, 12, ["src"]),
                  vue.createElementVNode("view", { class: "card-body" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "card-title" },
                      vue.toDisplayString(item.title),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "card-footer" }, [
                      vue.createElementVNode("view", { class: "author-info" }, [
                        vue.createElementVNode("image", {
                          src: item.avatar,
                          class: "avatar",
                          mode: "aspectFill"
                        }, null, 8, ["src"]),
                        vue.createElementVNode(
                          "text",
                          { class: "author-name" },
                          vue.toDisplayString(item.author),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", {
                        class: "like-info",
                        onClick: vue.withModifiers(($event) => $setup.toggleLike(item), ["stop"])
                      }, [
                        vue.createVNode(_component_uni_icons, {
                          type: item.liked ? "heart-filled" : "heart",
                          size: "14",
                          color: item.liked ? "#ff2442" : "#999"
                        }, null, 8, ["type", "color"]),
                        vue.createElementVNode(
                          "text",
                          { class: "like-count" },
                          vue.toDisplayString(item.likes),
                          1
                          /* TEXT */
                        )
                      ], 8, ["onClick"])
                    ])
                  ])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        vue.createVNode(_component_uni_load_more, { status: $setup.loadMoreStatus }, null, 8, ["status"])
      ], 44, ["refresher-triggered"])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "E:/码农/前端练习/wish/pages/index/index.vue"]]);
  const _sfc_main$6 = {
    name: "UniTag",
    emits: ["click"],
    props: {
      type: {
        // 标签类型default、primary、success、warning、error、royal
        type: String,
        default: "default"
      },
      size: {
        // 标签大小 normal, small
        type: String,
        default: "normal"
      },
      // 标签内容
      text: {
        type: String,
        default: ""
      },
      disabled: {
        // 是否为禁用状态
        type: [Boolean, String],
        default: false
      },
      inverted: {
        // 是否为空心
        type: [Boolean, String],
        default: false
      },
      circle: {
        // 是否为圆角样式
        type: [Boolean, String],
        default: false
      },
      mark: {
        // 是否为标记样式
        type: [Boolean, String],
        default: false
      },
      customStyle: {
        type: String,
        default: ""
      }
    },
    computed: {
      classes() {
        const {
          type,
          disabled,
          inverted,
          circle,
          mark,
          size,
          isTrue
        } = this;
        const classArr = [
          "uni-tag--" + type,
          "uni-tag--" + size,
          isTrue(disabled) ? "uni-tag--disabled" : "",
          isTrue(inverted) ? "uni-tag--" + type + "--inverted" : "",
          isTrue(circle) ? "uni-tag--circle" : "",
          isTrue(mark) ? "uni-tag--mark" : "",
          // type === 'default' ? 'uni-tag--default' : 'uni-tag-text',
          isTrue(inverted) ? "uni-tag--inverted uni-tag-text--" + type : "",
          size === "small" ? "uni-tag-text--small" : ""
        ];
        return classArr.join(" ");
      }
    },
    methods: {
      isTrue(value) {
        return value === true || value === "true";
      },
      onClick() {
        if (this.isTrue(this.disabled))
          return;
        this.$emit("click");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return $props.text ? (vue.openBlock(), vue.createElementBlock(
      "text",
      {
        key: 0,
        class: vue.normalizeClass(["uni-tag", $options.classes]),
        style: vue.normalizeStyle($props.customStyle),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      },
      vue.toDisplayString($props.text),
      7
      /* TEXT, CLASS, STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-1f94d070"], ["__file", "E:/码农/前端练习/wish/uni_modules/uni-tag/components/uni-tag/uni-tag.vue"]]);
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    __name: "discover",
    setup(__props, { expose: __expose }) {
      __expose();
      const statusBarHeight = vue.ref(0);
      const searchHeaderHeight = vue.ref(80);
      const keyword = vue.ref("");
      const hotList = vue.ref([
        { text: "夏日穿搭分享", count: "2.8亿", tag: "热", tagType: "error" },
        { text: "旅行打卡好去处", count: "1.5亿", tag: "新", tagType: "success" },
        { text: "自制美食教程", count: "1.2亿", tag: "", tagType: "" },
        { text: "护肤品测评分享", count: "9800万", tag: "", tagType: "" },
        { text: "健身减脂打卡", count: "8600万", tag: "", tagType: "" },
        { text: "租房改造小技巧", count: "7200万", tag: "", tagType: "" },
        { text: "好书推荐", count: "5400万", tag: "", tagType: "" },
        { text: "宠物日常记录", count: "4100万", tag: "", tagType: "" }
      ]);
      const categories = vue.ref([
        { name: "穿搭", icon: "👗", bg: "#fff0f3" },
        { name: "美食", icon: "🍜", bg: "#fff5e0" },
        { name: "旅行", icon: "✈️", bg: "#e8f5ff" },
        { name: "美妆", icon: "💄", bg: "#fce4ec" },
        { name: "健身", icon: "💪", bg: "#e8f5e9" },
        { name: "家居", icon: "🏠", bg: "#f3e5f5" },
        { name: "读书", icon: "📚", bg: "#e0f2f1" },
        { name: "宠物", icon: "🐱", bg: "#fff3e0" }
      ]);
      const topics = vue.ref([
        { title: "夏日穿搭", count: "156万", cover: "https://picsum.photos/80/80?random=20" },
        { title: "探店日记", count: "98万", cover: "https://picsum.photos/80/80?random=21" },
        { title: "旅行攻略", count: "234万", cover: "https://picsum.photos/80/80?random=22" },
        { title: "素颜护肤", count: "67万", cover: "https://picsum.photos/80/80?random=23" },
        { title: "健康饮食", count: "112万", cover: "https://picsum.photos/80/80?random=24" }
      ]);
      function doSearch() {
        if (!keyword.value.trim()) {
          uni.showToast({ title: "请输入搜索内容", icon: "none" });
          return;
        }
        uni.showToast({ title: `搜索：${keyword.value}`, icon: "none" });
      }
      function clearKeyword() {
        keyword.value = "";
      }
      function refreshHot() {
        uni.showToast({ title: "已刷新", icon: "success" });
      }
      function searchByTag(text) {
        keyword.value = text;
        doSearch();
      }
      function selectCategory(cat) {
        uni.showToast({ title: `进入${cat.name}分类`, icon: "none" });
      }
      vue.onMounted(() => {
        const info = uni.getSystemInfoSync();
        statusBarHeight.value = info.statusBarHeight ?? 0;
        searchHeaderHeight.value = (info.statusBarHeight ?? 0) + 56;
      });
      const __returned__ = { statusBarHeight, searchHeaderHeight, keyword, hotList, categories, topics, doSearch, clearKeyword, refreshHot, searchByTag, selectCategory };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    const _component_uni_tag = resolveEasycom(vue.resolveDynamicComponent("uni-tag"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode(
        "view",
        {
          class: "search-header",
          style: vue.normalizeStyle({ paddingTop: $setup.statusBarHeight + "px" })
        },
        [
          vue.createElementVNode("view", { class: "search-bar" }, [
            vue.createVNode(_component_uni_icons, {
              type: "search",
              size: "16",
              color: "#999"
            }),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                class: "search-input",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.keyword = $event),
                placeholder: "搜索感兴趣的内容",
                "placeholder-style": "color:#bbb;font-size:14px",
                onConfirm: $setup.doSearch
              },
              null,
              544
              /* NEED_HYDRATION, NEED_PATCH */
            ), [
              [vue.vModelText, $setup.keyword]
            ]),
            $setup.keyword ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              type: "clear",
              size: "16",
              color: "#999",
              onClick: $setup.clearKeyword
            })) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("text", {
            class: "search-btn",
            onClick: $setup.doSearch
          }, "搜索")
        ],
        4
        /* STYLE */
      ),
      vue.createElementVNode(
        "scroll-view",
        {
          "scroll-y": "",
          class: "content",
          style: vue.normalizeStyle({ top: $setup.searchHeaderHeight + "px" })
        },
        [
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "section-header" }, [
              vue.createElementVNode("text", { class: "section-title" }, "🔥 热搜榜"),
              vue.createElementVNode("text", {
                class: "section-more",
                onClick: $setup.refreshHot
              }, "换一批")
            ]),
            vue.createElementVNode("view", { class: "hot-list" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.hotList, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: "hot-item",
                    onClick: ($event) => $setup.searchByTag(item.text)
                  }, [
                    vue.createElementVNode(
                      "text",
                      {
                        class: vue.normalizeClass(["hot-rank", index < 3 ? "hot-rank-top" : ""])
                      },
                      vue.toDisplayString(index + 1),
                      3
                      /* TEXT, CLASS */
                    ),
                    vue.createElementVNode("view", { class: "hot-info" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "hot-text" },
                        vue.toDisplayString(item.text),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "text",
                        { class: "hot-count" },
                        vue.toDisplayString(item.count),
                        1
                        /* TEXT */
                      )
                    ]),
                    item.tag ? (vue.openBlock(), vue.createBlock(_component_uni_tag, {
                      key: 0,
                      text: item.tag,
                      type: item.tagType,
                      size: "small"
                    }, null, 8, ["text", "type"])) : vue.createCommentVNode("v-if", true)
                  ], 8, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "section-header" }, [
              vue.createElementVNode("text", { class: "section-title" }, "✨ 发现好内容")
            ]),
            vue.createElementVNode("view", { class: "category-grid" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.categories, (cat, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: "category-item",
                    style: vue.normalizeStyle({ backgroundColor: cat.bg }),
                    onClick: ($event) => $setup.selectCategory(cat)
                  }, [
                    vue.createElementVNode(
                      "text",
                      { class: "category-icon" },
                      vue.toDisplayString(cat.icon),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "category-name" },
                      vue.toDisplayString(cat.name),
                      1
                      /* TEXT */
                    )
                  ], 12, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "section-header" }, [
              vue.createElementVNode("text", { class: "section-title" }, "💬 热门话题")
            ]),
            vue.createElementVNode("view", { class: "topic-list" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.topics, (topic, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: "topic-item",
                    onClick: ($event) => $setup.searchByTag(topic.title)
                  }, [
                    vue.createElementVNode("image", {
                      src: topic.cover,
                      class: "topic-cover",
                      mode: "aspectFill"
                    }, null, 8, ["src"]),
                    vue.createElementVNode("view", { class: "topic-info" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "topic-title" },
                        "#" + vue.toDisplayString(topic.title),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "text",
                        { class: "topic-count" },
                        vue.toDisplayString(topic.count) + "篇笔记",
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createVNode(_component_uni_icons, {
                      type: "right",
                      size: "14",
                      color: "#ccc"
                    })
                  ], 8, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const PagesDiscoverDiscover = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "E:/码农/前端练习/wish/pages/discover/discover.vue"]]);
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "publish",
    setup(__props, { expose: __expose }) {
      __expose();
      const statusBarHeight = vue.ref(0);
      const headerHeight = vue.ref(88);
      const selectedImages = vue.ref([]);
      const form = vue.reactive({
        title: "",
        content: "",
        tags: ["穿搭分享", "生活记录"],
        location: "",
        visibility: "公开"
      });
      const popularTags = ["穿搭分享", "美食探店", "旅行打卡", "护肤分享", "健身日记", "好书推荐"];
      function goBack() {
        uni.switchTab({ url: "/pages/index/index" });
      }
      function chooseImage() {
        const remaining = 9 - selectedImages.value.length;
        uni.chooseImage({
          count: remaining,
          sizeType: ["original", "compressed"],
          sourceType: ["album", "camera"],
          success: (res) => {
            selectedImages.value = [...selectedImages.value, ...res.tempFilePaths];
          }
        });
      }
      function removeImage(index) {
        selectedImages.value.splice(index, 1);
      }
      function addTopic() {
        const unused = popularTags.filter((t2) => !form.tags.includes(t2));
        if (unused.length > 0) {
          form.tags.push(unused[0]);
        } else {
          uni.showToast({ title: "话题已添加完", icon: "none" });
        }
      }
      function removeTag(index) {
        form.tags.splice(index, 1);
      }
      function selectLocation() {
        const locations = ["北京·三里屯", "上海·外滩", "成都·春熙路", "杭州·西湖"];
        form.location = locations[Math.floor(Math.random() * locations.length)];
      }
      function onPublish() {
        if (!form.title && !form.content && selectedImages.value.length === 0) {
          uni.showToast({ title: "请添加内容后发布", icon: "none" });
          return;
        }
        uni.showLoading({ title: "发布中..." });
        setTimeout(() => {
          uni.hideLoading();
          uni.showToast({ title: "发布成功！", icon: "success" });
          setTimeout(() => {
            uni.switchTab({ url: "/pages/index/index" });
          }, 1500);
        }, 1500);
      }
      vue.onMounted(() => {
        const info = uni.getSystemInfoSync();
        statusBarHeight.value = info.statusBarHeight ?? 0;
        headerHeight.value = (info.statusBarHeight ?? 0) + 44;
      });
      const __returned__ = { statusBarHeight, headerHeight, selectedImages, form, popularTags, goBack, chooseImage, removeImage, addTopic, removeTag, selectLocation, onPublish };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode(
        "view",
        {
          class: "header",
          style: vue.normalizeStyle({ paddingTop: $setup.statusBarHeight + "px" })
        },
        [
          vue.createElementVNode("text", {
            class: "header-cancel",
            onClick: $setup.goBack
          }, "取消"),
          vue.createElementVNode("text", { class: "header-title" }, "发布笔记"),
          vue.createElementVNode("text", {
            class: "header-publish",
            onClick: $setup.onPublish
          }, "发布")
        ],
        4
        /* STYLE */
      ),
      vue.createElementVNode(
        "scroll-view",
        {
          "scroll-y": "",
          class: "content",
          style: vue.normalizeStyle({ top: $setup.headerHeight + "px" })
        },
        [
          vue.createElementVNode("view", { class: "media-section" }, [
            vue.createElementVNode("view", { class: "media-grid" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.selectedImages, (img, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: "media-item"
                  }, [
                    vue.createElementVNode("image", {
                      src: img,
                      class: "media-thumb",
                      mode: "aspectFill"
                    }, null, 8, ["src"]),
                    vue.createElementVNode("view", {
                      class: "media-delete",
                      onClick: ($event) => $setup.removeImage(index)
                    }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "closeempty",
                        size: "12",
                        color: "#fff"
                      })
                    ], 8, ["onClick"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              $setup.selectedImages.length < 9 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "media-add",
                onClick: $setup.chooseImage
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "camera",
                  size: "30",
                  color: "#cccccc"
                }),
                vue.createElementVNode(
                  "text",
                  { class: "media-add-text" },
                  vue.toDisplayString($setup.selectedImages.length) + "/9",
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ]),
          vue.createElementVNode("view", { class: "form-section" }, [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                class: "title-input",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.form.title = $event),
                placeholder: "填写标题会有更多赞哦～",
                "placeholder-style": "color:#bbb;font-size:16px",
                maxlength: 20
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $setup.form.title]
            ]),
            vue.createElementVNode(
              "view",
              { class: "title-count" },
              vue.toDisplayString($setup.form.title.length) + "/20",
              1
              /* TEXT */
            ),
            vue.withDirectives(vue.createElementVNode(
              "textarea",
              {
                class: "content-input",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.form.content = $event),
                placeholder: "分享这一刻的想法...",
                "placeholder-style": "color:#bbb;font-size:14px",
                maxlength: 500,
                "auto-height": ""
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $setup.form.content]
            ]),
            vue.createElementVNode(
              "view",
              { class: "content-count" },
              vue.toDisplayString($setup.form.content.length) + "/500",
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "tag-section" }, [
            vue.createElementVNode("view", {
              class: "tag-header",
              onClick: $setup.addTopic
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "compose",
                size: "16",
                color: "#ff2442"
              }),
              vue.createElementVNode("text", { class: "tag-text" }, "添加话题")
            ]),
            vue.createElementVNode("view", { class: "selected-tags" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.form.tags, (tag, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: "tag-chip"
                  }, [
                    vue.createElementVNode(
                      "text",
                      { class: "tag-chip-text" },
                      "#" + vue.toDisplayString(tag),
                      1
                      /* TEXT */
                    ),
                    vue.createVNode(_component_uni_icons, {
                      type: "closeempty",
                      size: "10",
                      color: "#ff2442",
                      onClick: ($event) => $setup.removeTag(index)
                    }, null, 8, ["onClick"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          vue.createElementVNode("view", { class: "settings-section" }, [
            vue.createElementVNode("view", {
              class: "setting-item",
              onClick: $setup.selectLocation
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "location",
                size: "18",
                color: "#666"
              }),
              vue.createElementVNode(
                "text",
                { class: "setting-label" },
                vue.toDisplayString($setup.form.location || "添加地点"),
                1
                /* TEXT */
              ),
              vue.createVNode(_component_uni_icons, {
                type: "right",
                size: "14",
                color: "#ccc"
              })
            ]),
            vue.createElementVNode("view", { class: "setting-item" }, [
              vue.createVNode(_component_uni_icons, {
                type: "person",
                size: "18",
                color: "#666"
              }),
              vue.createElementVNode("text", { class: "setting-label" }, "谁可以看"),
              vue.createElementVNode("view", { class: "setting-right" }, [
                vue.createElementVNode(
                  "text",
                  { class: "setting-value" },
                  vue.toDisplayString($setup.form.visibility),
                  1
                  /* TEXT */
                ),
                vue.createVNode(_component_uni_icons, {
                  type: "right",
                  size: "14",
                  color: "#ccc"
                })
              ])
            ])
          ])
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const PagesPublishPublish = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "E:/码农/前端练习/wish/pages/publish/publish.vue"]]);
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "message",
    setup(__props, { expose: __expose }) {
      __expose();
      const statusBarHeight = vue.ref(0);
      const headerHeight = vue.ref(88);
      const notices = vue.ref([
        { label: "赞和收藏", icon: "❤️", bg: "#fff0f3", count: 12 },
        { label: "评论", icon: "💬", bg: "#e8f5ff", count: 3 },
        { label: "@我", icon: "📣", bg: "#fff5e0", count: 0 },
        { label: "关注", icon: "👥", bg: "#e8f5e9", count: 5 }
      ]);
      const chatList = vue.ref([
        { name: "小红薯er", avatar: "https://picsum.photos/60/60?random=30", lastMsg: "哇这个穿搭超好看！求链接～", time: "刚刚", unread: 2, online: true },
        { name: "旅行达人", avatar: "https://picsum.photos/60/60?random=31", lastMsg: "大理真的很好玩，强烈推荐！", time: "10分钟前", unread: 0, online: false },
        { name: "美食探店", avatar: "https://picsum.photos/60/60?random=32", lastMsg: "那家店最近出了新品，你要去试吗", time: "1小时前", unread: 1, online: true },
        { name: "生活美学家", avatar: "https://picsum.photos/60/60?random=33", lastMsg: "[图片]", time: "昨天", unread: 0, online: false },
        { name: "时尚博主", avatar: "https://picsum.photos/60/60?random=34", lastMsg: "谢谢你的点赞和收藏～", time: "昨天", unread: 0, online: false }
      ]);
      function goNotice(notice) {
        notice.count = 0;
        uni.showToast({ title: `查看${notice.label}通知`, icon: "none" });
      }
      function openChat(chat) {
        chat.unread = 0;
        uni.showToast({ title: `打开与${chat.name}的对话`, icon: "none" });
      }
      vue.onMounted(() => {
        const info = uni.getSystemInfoSync();
        statusBarHeight.value = info.statusBarHeight ?? 0;
        headerHeight.value = (info.statusBarHeight ?? 0) + 44;
      });
      const __returned__ = { statusBarHeight, headerHeight, notices, chatList, goNotice, openChat };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode(
        "view",
        {
          class: "header",
          style: vue.normalizeStyle({ paddingTop: $setup.statusBarHeight + "px" })
        },
        [
          vue.createElementVNode("text", { class: "header-title" }, "消息"),
          vue.createVNode(_component_uni_icons, {
            type: "settings",
            size: "22",
            color: "#1a1a1a"
          })
        ],
        4
        /* STYLE */
      ),
      vue.createElementVNode(
        "scroll-view",
        {
          "scroll-y": "",
          class: "content",
          style: vue.normalizeStyle({ top: $setup.headerHeight + "px" })
        },
        [
          vue.createElementVNode("view", { class: "notice-row" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.notices, (notice, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: "notice-item",
                  onClick: ($event) => $setup.goNotice(notice)
                }, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: "notice-icon",
                      style: vue.normalizeStyle({ backgroundColor: notice.bg })
                    },
                    [
                      vue.createElementVNode(
                        "text",
                        { class: "notice-emoji" },
                        vue.toDisplayString(notice.icon),
                        1
                        /* TEXT */
                      ),
                      notice.count > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "notice-badge"
                      }, [
                        vue.createElementVNode(
                          "text",
                          { class: "badge-text" },
                          vue.toDisplayString(notice.count > 99 ? "99+" : notice.count),
                          1
                          /* TEXT */
                        )
                      ])) : vue.createCommentVNode("v-if", true)
                    ],
                    4
                    /* STYLE */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "notice-label" },
                    vue.toDisplayString(notice.label),
                    1
                    /* TEXT */
                  )
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("text", { class: "section-label" }, "私信"),
          vue.createElementVNode("view", { class: "chat-list" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.chatList, (chat, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: "chat-item",
                  onClick: ($event) => $setup.openChat(chat)
                }, [
                  vue.createElementVNode("view", { class: "chat-avatar-wrap" }, [
                    vue.createElementVNode("image", {
                      src: chat.avatar,
                      class: "chat-avatar",
                      mode: "aspectFill"
                    }, null, 8, ["src"]),
                    chat.online ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "online-dot"
                    })) : vue.createCommentVNode("v-if", true)
                  ]),
                  vue.createElementVNode("view", { class: "chat-info" }, [
                    vue.createElementVNode("view", { class: "chat-name-row" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "chat-name" },
                        vue.toDisplayString(chat.name),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "text",
                        { class: "chat-time" },
                        vue.toDisplayString(chat.time),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "chat-preview-row" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "chat-preview" },
                        vue.toDisplayString(chat.lastMsg),
                        1
                        /* TEXT */
                      ),
                      chat.unread > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "unread-badge"
                      }, [
                        vue.createElementVNode(
                          "text",
                          { class: "unread-text" },
                          vue.toDisplayString(chat.unread),
                          1
                          /* TEXT */
                        )
                      ])) : vue.createCommentVNode("v-if", true)
                    ])
                  ])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const PagesMessageMessage = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "E:/码农/前端练习/wish/pages/message/message.vue"]]);
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "profile",
    setup(__props, { expose: __expose }) {
      __expose();
      const statusBarHeight = vue.ref(0);
      const contentTabs = vue.ref(["笔记", "收藏", "赞过"]);
      const activeContentTab = vue.ref(0);
      const myNotes = vue.ref([
        { cover: "https://picsum.photos/200/260?random=60", title: "今日穿搭分享", likes: "1.2万" },
        { cover: "https://picsum.photos/200/240?random=61", title: "周末探店记录", likes: "8600" },
        { cover: "https://picsum.photos/200/280?random=62", title: "云南旅行vlog", likes: "2.3万" },
        { cover: "https://picsum.photos/200/250?random=63", title: "护肤日常分享", likes: "5400" },
        { cover: "https://picsum.photos/200/230?random=64", title: "自制蛋糕教程", likes: "3200" },
        { cover: "https://picsum.photos/200/270?random=65", title: "秋冬穿搭合集", likes: "9800" }
      ]);
      function editProfile() {
        uni.showToast({ title: "编辑个人资料", icon: "none" });
      }
      function shareProfile() {
        uni.showToast({ title: "分享个人主页", icon: "none" });
      }
      vue.onMounted(() => {
        const info = uni.getSystemInfoSync();
        statusBarHeight.value = info.statusBarHeight ?? 0;
      });
      const __returned__ = { statusBarHeight, contentTabs, activeContentTab, myNotes, editProfile, shareProfile };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode(
        "view",
        {
          class: "profile-header",
          style: vue.normalizeStyle({ paddingTop: $setup.statusBarHeight + "px" })
        },
        [
          vue.createElementVNode("view", { class: "header-actions" }, [
            vue.createVNode(_component_uni_icons, {
              type: "scan",
              size: "22",
              color: "#1a1a1a"
            }),
            vue.createElementVNode("view", { class: "header-right-btns" }, [
              vue.createVNode(_component_uni_icons, {
                type: "shop",
                size: "22",
                color: "#1a1a1a"
              }),
              vue.createVNode(_component_uni_icons, {
                type: "more-filled",
                size: "22",
                color: "#1a1a1a",
                style: { "margin-left": "16px" }
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "user-info" }, [
            vue.createElementVNode("view", { class: "avatar-wrap" }, [
              vue.createElementVNode("image", {
                src: "https://picsum.photos/120/120?random=50",
                class: "user-avatar",
                mode: "aspectFill"
              }),
              vue.createElementVNode("view", { class: "avatar-edit" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "camera-filled",
                  size: "12",
                  color: "#fff"
                })
              ])
            ]),
            vue.createElementVNode("text", { class: "user-name" }, "张兄"),
            vue.createElementVNode("text", { class: "user-id" }, "Wish号：wish_10086"),
            vue.createElementVNode("view", { class: "user-stats" }, [
              vue.createElementVNode("view", { class: "stat-item" }, [
                vue.createElementVNode("text", { class: "stat-num" }, "128"),
                vue.createElementVNode("text", { class: "stat-label" }, "关注")
              ]),
              vue.createElementVNode("view", { class: "stat-divider" }),
              vue.createElementVNode("view", { class: "stat-item" }, [
                vue.createElementVNode("text", { class: "stat-num" }, "3.6万"),
                vue.createElementVNode("text", { class: "stat-label" }, "粉丝")
              ]),
              vue.createElementVNode("view", { class: "stat-divider" }),
              vue.createElementVNode("view", { class: "stat-item" }, [
                vue.createElementVNode("text", { class: "stat-num" }, "12.8万"),
                vue.createElementVNode("text", { class: "stat-label" }, "获赞与收藏")
              ])
            ]),
            vue.createElementVNode("text", { class: "user-bio" }, "分享生活的点滴美好 ✨ | 热爱旅行、美食、穿搭"),
            vue.createElementVNode("view", { class: "action-buttons" }, [
              vue.createElementVNode("view", {
                class: "btn-edit",
                onClick: $setup.editProfile
              }, "编辑个人资料"),
              vue.createElementVNode("view", {
                class: "btn-share",
                onClick: $setup.shareProfile
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "share",
                  size: "16",
                  color: "#666"
                })
              ])
            ])
          ])
        ],
        4
        /* STYLE */
      ),
      vue.createElementVNode("view", { class: "content-area" }, [
        vue.createElementVNode("view", { class: "content-tabs" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.contentTabs, (tab, index) => {
              return vue.openBlock(), vue.createElementBlock("text", {
                key: index,
                class: vue.normalizeClass(["content-tab", $setup.activeContentTab === index ? "content-tab-active" : ""]),
                onClick: ($event) => $setup.activeContentTab = index
              }, vue.toDisplayString(tab), 11, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("scroll-view", {
          "scroll-y": "",
          class: "note-scroll"
        }, [
          vue.createElementVNode("view", { class: "note-grid" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.myNotes, (note, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: "note-item"
                }, [
                  vue.createElementVNode("image", {
                    src: note.cover,
                    class: "note-cover",
                    mode: "aspectFill"
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "note-info" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "note-title" },
                      vue.toDisplayString(note.title),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "note-stats" }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "heart-filled",
                        size: "12",
                        color: "#ff2442"
                      }),
                      vue.createElementVNode(
                        "text",
                        { class: "note-likes" },
                        vue.toDisplayString(note.likes),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])
      ])
    ]);
  }
  const PagesProfileProfile = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "E:/码农/前端练习/wish/pages/profile/profile.vue"]]);
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "detail",
    setup(__props, { expose: __expose }) {
      __expose();
      const options = vue.ref({});
      const statusBarHeight = vue.ref(0);
      const title = vue.ref("");
      const cover = vue.ref("");
      const author = vue.ref("");
      const avatar = vue.ref("");
      const likeCount = vue.ref(0);
      const collectCount = vue.ref(0);
      const images = vue.ref([]);
      const isFollowed = vue.ref(false);
      const isLiked = vue.ref(false);
      const isCollected = vue.ref(false);
      const comments = vue.ref([
        { name: "生活美学家", avatar: "https://picsum.photos/60/60?random=40", text: "太美了！求问在哪里拍的呀？", time: "1小时前", likes: 128, liked: false },
        { name: "旅行达人", avatar: "https://picsum.photos/60/60?random=41", text: "哇好喜欢这个风格👍", time: "2小时前", likes: 66, liked: false },
        { name: "美食探店", avatar: "https://picsum.photos/60/60?random=42", text: "分享更多吧！已关注～", time: "3小时前", likes: 32, liked: false }
      ]);
      function goBack() {
        uni.navigateBack();
      }
      function showMore() {
        uni.showActionSheet({
          itemList: ["举报", "不感兴趣", "复制链接"],
          success: () => {
          }
        });
      }
      function toggleFollow() {
        isFollowed.value = !isFollowed.value;
        uni.showToast({ title: isFollowed.value ? "关注成功" : "已取消关注", icon: "success" });
      }
      function toggleLike() {
        isLiked.value = !isLiked.value;
        likeCount.value += isLiked.value ? 1 : -1;
      }
      function toggleCollect() {
        isCollected.value = !isCollected.value;
        collectCount.value += isCollected.value ? 1 : -1;
      }
      function openComment() {
        uni.showToast({ title: "评论功能开发中", icon: "none" });
      }
      function shareNote() {
        uni.showToast({ title: "分享笔记", icon: "none" });
      }
      function searchTag(tag) {
        uni.showToast({ title: `搜索：${tag}`, icon: "none" });
      }
      function toggleCommentLike(comment) {
        comment.liked = !comment.liked;
        comment.likes += comment.liked ? 1 : -1;
      }
      vue.onMounted(() => {
        const info = uni.getSystemInfoSync();
        statusBarHeight.value = info.statusBarHeight ?? 0;
        const pages = getCurrentPages();
        const currentPage = pages[pages.length - 1];
        const query = (currentPage == null ? void 0 : currentPage.options) ?? {};
        title.value = decodeURIComponent(query.title || "分享一下生活");
        cover.value = decodeURIComponent(query.cover || "https://picsum.photos/400/500?random=1");
        author.value = decodeURIComponent(query.author || "小红薯er");
        avatar.value = decodeURIComponent(query.avatar || "https://picsum.photos/60/60?random=11");
        likeCount.value = parseInt(query.likes || "1000");
        collectCount.value = Math.floor(likeCount.value * 0.6);
        images.value = [
          cover.value,
          `https://picsum.photos/400/500?random=${Math.floor(Math.random() * 100) + 1}`,
          `https://picsum.photos/400/500?random=${Math.floor(Math.random() * 100) + 50}`
        ];
      });
      const __returned__ = { options, statusBarHeight, title, cover, author, avatar, likeCount, collectCount, images, isFollowed, isLiked, isCollected, comments, goBack, showMore, toggleFollow, toggleLike, toggleCollect, openComment, shareNote, searchTag, toggleCommentLike };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("swiper", {
        class: "cover-swiper",
        "indicator-dots": true,
        "indicator-color": "rgba(255,255,255,0.5)",
        "indicator-active-color": "#ffffff",
        circular: ""
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.images, (img, index) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
              vue.createElementVNode("image", {
                src: img,
                class: "cover-image",
                mode: "aspectFill"
              }, null, 8, ["src"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createElementVNode(
        "view",
        {
          class: "back-btn",
          style: vue.normalizeStyle({ top: $setup.statusBarHeight + 10 + "px" }),
          onClick: $setup.goBack
        },
        [
          vue.createVNode(_component_uni_icons, {
            type: "left",
            size: "20",
            color: "#ffffff"
          })
        ],
        4
        /* STYLE */
      ),
      vue.createElementVNode(
        "view",
        {
          class: "more-btn",
          style: vue.normalizeStyle({ top: $setup.statusBarHeight + 10 + "px" }),
          onClick: $setup.showMore
        },
        [
          vue.createVNode(_component_uni_icons, {
            type: "more-filled",
            size: "20",
            color: "#ffffff"
          })
        ],
        4
        /* STYLE */
      ),
      vue.createElementVNode("view", { class: "content-card" }, [
        vue.createElementVNode(
          "text",
          { class: "note-title" },
          vue.toDisplayString($setup.title),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "tags-row" }, [
          vue.createElementVNode("text", {
            class: "tag",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.searchTag("穿搭分享"))
          }, "#穿搭分享"),
          vue.createElementVNode("text", {
            class: "tag",
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.searchTag("生活记录"))
          }, "#生活记录")
        ]),
        vue.createElementVNode("view", { class: "author-row" }, [
          vue.createElementVNode("image", {
            src: $setup.avatar,
            class: "author-avatar",
            mode: "aspectFill"
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "text",
            { class: "author-name" },
            vue.toDisplayString($setup.author),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", {
            class: "follow-btn",
            onClick: $setup.toggleFollow
          }, [
            vue.createElementVNode(
              "text",
              { class: "follow-text" },
              vue.toDisplayString($setup.isFollowed ? "已关注" : "+ 关注"),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createElementVNode("view", { class: "divider" }),
        vue.createElementVNode("text", { class: "note-content" }, "这是一篇分享内容的笔记，记录了生活中美好的点点滴滴。希望大家都能在日常生活中发现美好，保持积极乐观的心态。喜欢这篇笔记的朋友记得点赞收藏哦！💕"),
        vue.createElementVNode("text", { class: "post-time" }, "2024-03-25 · 北京"),
        vue.createElementVNode("view", { class: "comments-section" }, [
          vue.createElementVNode(
            "text",
            { class: "comments-title" },
            vue.toDisplayString($setup.comments.length) + "条评论",
            1
            /* TEXT */
          ),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.comments, (comment, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "comment-item"
              }, [
                vue.createElementVNode("image", {
                  src: comment.avatar,
                  class: "comment-avatar",
                  mode: "aspectFill"
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "comment-body" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "comment-name" },
                    vue.toDisplayString(comment.name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "comment-text" },
                    vue.toDisplayString(comment.text),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "comment-footer" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "comment-time" },
                      vue.toDisplayString(comment.time),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", {
                      class: "comment-like",
                      onClick: ($event) => $setup.toggleCommentLike(comment)
                    }, [
                      vue.createVNode(_component_uni_icons, {
                        type: comment.liked ? "heart-filled" : "heart",
                        size: "12",
                        color: comment.liked ? "#ff2442" : "#ccc"
                      }, null, 8, ["type", "color"]),
                      vue.createElementVNode(
                        "text",
                        { class: "comment-like-count" },
                        vue.toDisplayString(comment.likes),
                        1
                        /* TEXT */
                      )
                    ], 8, ["onClick"])
                  ])
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createElementVNode("view", { class: "bottom-bar" }, [
        vue.createElementVNode("view", {
          class: "comment-input",
          onClick: $setup.openComment
        }, [
          vue.createElementVNode("text", { class: "comment-placeholder" }, "说点什么...")
        ]),
        vue.createElementVNode("view", { class: "bottom-actions" }, [
          vue.createElementVNode("view", {
            class: "action-item",
            onClick: $setup.toggleLike
          }, [
            vue.createVNode(_component_uni_icons, {
              type: $setup.isLiked ? "heart-filled" : "heart",
              size: "24",
              color: $setup.isLiked ? "#ff2442" : "#666"
            }, null, 8, ["type", "color"]),
            vue.createElementVNode(
              "text",
              {
                class: vue.normalizeClass(["action-count", $setup.isLiked ? "action-count-red" : ""])
              },
              vue.toDisplayString($setup.likeCount),
              3
              /* TEXT, CLASS */
            )
          ]),
          vue.createElementVNode("view", {
            class: "action-item",
            onClick: $setup.toggleCollect
          }, [
            vue.createVNode(_component_uni_icons, {
              type: $setup.isCollected ? "star-filled" : "star",
              size: "24",
              color: $setup.isCollected ? "#ff9500" : "#666"
            }, null, 8, ["type", "color"]),
            vue.createElementVNode(
              "text",
              { class: "action-count" },
              vue.toDisplayString($setup.collectCount),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", {
            class: "action-item",
            onClick: $setup.openComment
          }, [
            vue.createVNode(_component_uni_icons, {
              type: "chat",
              size: "24",
              color: "#666"
            }),
            vue.createElementVNode(
              "text",
              { class: "action-count" },
              vue.toDisplayString($setup.comments.length),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", {
            class: "action-item",
            onClick: $setup.shareNote
          }, [
            vue.createVNode(_component_uni_icons, {
              type: "redo",
              size: "24",
              color: "#666"
            })
          ])
        ])
      ])
    ]);
  }
  const PagesDetailDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "E:/码农/前端练习/wish/pages/detail/detail.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/discover/discover", PagesDiscoverDiscover);
  __definePage("pages/publish/publish", PagesPublishPublish);
  __definePage("pages/message/message", PagesMessageMessage);
  __definePage("pages/profile/profile", PagesProfileProfile);
  __definePage("pages/detail/detail", PagesDetailDetail);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/码农/前端练习/wish/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
