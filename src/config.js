const config = {
    s3: {
        REGION: "eu-central-1",
        BUCKET: "poggers-test-upload",
    },
    apiGateway: {
        REGION: "eu-central-1",
        URL: "https://api.poggers.fi/notes",
    },
    cognito: {
        REGION: "eu-central-1",
        USER_POOL_ID: "eu-central-1_KaJOmqluy",
        APP_CLIENT_ID: "31s4ltblrc3gno5ucaq1du4bmq",
        IDENTITY_POOL_ID: "eu-central-1:a4daea86-394d-4894-8037-715b0d84cf14",
    },
};

export default config;
