const config = {
    STRIPE_KEY:
        "pk_test_51I0QIDB92y1VfSsnIFRQEWdLdXaDFSo0W7TVs2YOMQpJvfpDCEn3SrCeVYA1Q9Qp1SdYYpgp6LzYAyhc2rWh8ssR00Y9VaXMZB",
    MAX_ATTACHMENT_SIZE: 5000000,
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
