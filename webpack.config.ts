import * as path from "path";

import * as CopyPlugin from "copy-webpack-plugin";
import * as dotenv from "dotenv";
import * as GasPlugin from "gas-webpack-plugin";
import { Configuration, DefinePlugin } from "webpack";

dotenv.config();

const config: Configuration = {
    mode: "production",
    entry: {
        main: "./src/main.ts",
        property: "./src/property.ts",
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [
        new GasPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: "./src/appsscript.json",
                },
            ],
        }),
        new DefinePlugin({
            SAMPLE_PROPERTY: "sample-property",
        }),
    ],
};

export default config;
