import {SERVICE} from "../shared/constants";
import {LOG} from "../shared/Logging";

export const loginService = ({doPost}) => {
    const authenticate = async (userCred = {}) => {
        try {
            return await doPost({url: SERVICE.LOGIN, data: userCred})
        } catch (e) {
            LOG.error(`Login Service: ${e.message}`)
            throw e;
        }
    }

    return {authenticate}
}