const {
    compilerOptions: { paths },
} = require("./tsconfig.json");

const pathEntries = Object.entries(paths);

module.exports = function (api) {
    api.cache(true);

    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "expo-router/babel",
            [
                "module-resolver",
                {
                    alias: pathEntries.reduce((obj, [alias, [path]]) => ({
                        ...obj,
                        [alias.replace("/*", "")]: `./src/${path.replace("/*", "")}`,
                    }), {}),
                },
            ],
        ],
    };
};
