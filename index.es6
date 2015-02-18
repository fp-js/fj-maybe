export default {
  'return' (value) {
    return value;
  },
  bind (value, f) {
    if (value == null) return null;
    return f(value);
  }
}
