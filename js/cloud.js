window.Cloud = (function () {
  const user = { id: 'local' };
  return {
    available: () => true,
    async session() { return { user }; },
    async signIn() { return { data: { user }, error: null }; },
    async signUp() { return { data: { user }, error: null }; },
    async signOut() {},
    onAuth: () => {},
    async pull() { return null; },
    async push() {},
  };
})();