const IS_DEV = process.env.APP_VARIANT === 'development';

export default ({config}) => {
    return {
        ...config,
        name: 'RN Style',
        version: process.env.CURR_VERSION || '1.0.0',
        extra: {
            baseUrl: process.env.BASE_URL,
            isDev: process.env.APP_VARIANT === 'development'
        },
        android: {
            package: IS_DEV ? 'com.edwardsuwirya.dev.rnstyle' : 'com.edwardsuwirya.rnstyle'
        }
    }
};