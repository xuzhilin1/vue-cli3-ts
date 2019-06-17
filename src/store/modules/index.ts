/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

const files = require.context('.', false, /\.ts$/);
const modules = {};
files.keys().forEach((key) => {
    if (key === './index.ts') { return; }
    modules[key.replace(/(\.\/|\.ts)/g, '')] = files(key);
});
export default modules;
