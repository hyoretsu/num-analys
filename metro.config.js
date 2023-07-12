const { getDefaultConfig } = require("expo/metro-config");
const MetroSymlinksResolver = require("@rnx-kit/metro-resolver-symlinks");

module.exports = (async () => {
    const config = getDefaultConfig(__dirname);

    const { transformer, resolver } = config;

    /** @type {import("expo/metro-config").MetroConfig} */
    return {
        ...config,
        transformer: {
            ...transformer,
            // babelTransformerPath: require.resolve("react-native-svg-transformer"),
        },
        resolver: {
            ...resolver,
            assetExts: resolver.assetExts.filter(ext => ext !== "svg"),
            resolveRequest: new MetroSymlinksResolver(),
            sourceExts: [...resolver.sourceExts, "mjs", "svg"],
        },
    };
})();
