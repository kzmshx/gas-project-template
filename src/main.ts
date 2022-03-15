import { ScriptProperty } from "./property";

const main = (): void => {
    Logger.log("Hello, world!");

    const scriptProperties = <ScriptProperty>PropertiesService.getScriptProperties().getProperties();
    Logger.log(scriptProperties.SAMPLE_PROPERTY);
};

(global as any).main = main;
