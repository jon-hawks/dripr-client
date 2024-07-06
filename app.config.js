module.exports = {
    extra: {
        eas: {
            projectId: process.env.PROJECT_ID
        }
    },
    owner: process.env.OWNER,
    runtimeVersion: {
        policy: "appVersion"
    },
    updates: {
        url: "https://u.expo.dev/" + process.env.PROJECT_ID
    },
    android: {},
    ios: {}
};
