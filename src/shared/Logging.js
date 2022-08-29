import {consoleTransport, logger} from "react-native-logs";
import Constants from "expo-constants";

const logConfig = {
    severity: Constants.manifest.extra.isDev ? 'debug' : 'error',
    transport: consoleTransport,
}

export const LOG = logger.createLogger(logConfig);
