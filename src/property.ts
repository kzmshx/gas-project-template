declare let SAMPLE_PROPERTY: string | undefined;

export type ScriptProperty = {
    SAMPLE_PROPERTY: string;
};

const setProperties = (): void => {
    PropertiesService.getScriptProperties().setProperties(<ScriptProperty>{
        SAMPLE_PROPERTY,
    });
};

(global as any).setProperties = setProperties;
