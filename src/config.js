const prod = {
    STRIPE_KEY:
        "pk_test_51I0QIDB92y1VfSsnIFRQEWdLdXaDFSo0W7TVs2YOMQpJvfpDCEn3SrCeVYA1Q9Qp1SdYYpgp6LzYAyhc2rWh8ssR00Y9VaXMZB",
    s3: {
        REGION: "eu-central-1",
        BUCKET: "prod-poggers-infra-s3-uploads4f6eb0fd-1wegc417ns7cn",
    },
    apiGateway: {
        REGION: "eu-central-1",
        URL: "https://api.poggers.fi/prod",
    },
    cognito: {
        REGION: "eu-central-1",
        USER_POOL_ID: "eu-central-1_TJmYk7h3D",
        APP_CLIENT_ID: "2cf1flqkqltu50r2tiotn53dru",
        IDENTITY_POOL_ID: "eu-central-1:4b84ed6f-41ad-418e-a99d-21cd695326d7",
    },
};

const dev = {
    STRIPE_KEY:
        "pk_test_51I0QIDB92y1VfSsnIFRQEWdLdXaDFSo0W7TVs2YOMQpJvfpDCEn3SrCeVYA1Q9Qp1SdYYpgp6LzYAyhc2rWh8ssR00Y9VaXMZB",
    s3: {
        REGION: "eu-central-1",
        BUCKET: "dev-poggers-infra-s3-uploads4f6eb0fd-uszenkzvq51f",
    },
    apiGateway: {
        REGION: "eu-central-1",
        URL: "https://api.poggers.fi/dev",
    },
    cognito: {
        REGION: "eu-central-1",
        USER_POOL_ID: "eu-central-1_xmjB61hgW",
        APP_CLIENT_ID: "2k8mt1ak7hjg0p933kmu7vh59n",
        IDENTITY_POOL_ID: "eu-central-1:ce022e5e-f937-405f-94a4-4abd852d9f6d",
    },
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;
