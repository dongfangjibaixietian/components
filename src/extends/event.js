// 这里不命名，引用的时候再命名

// 用组件穿透的形式来做组件间通信
export default function (Vue) {
  Vue.prototype.$eventDispatch = function (name, value) {
    let parent = this.$parent;
    while (parent) {
      parent.$emit(name, value);
      parent = parent.$parent;
    }
  };
  Vue.prototype.$eventBroadcast = function (name, value) {
    const bc = (children) => {
      children.map((c) => {
        c.$emit(name, value);
        if (c.$children) {
          bc(c.$children);
        }
      });
    };
    bc(this.$children);
  };

  Vue.prototype.$eventBus = new Vue();
}
