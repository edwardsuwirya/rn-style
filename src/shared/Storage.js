import AsyncStorage from "@react-native-async-storage/async-storage";
import {LOG} from "./Logging";

export const Storage = () => {
    const storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            LOG.error(`Storage Service: ${e.message}`)
            throw e
        }
    }

    const getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value
            }
        } catch (e) {
            LOG.error(`Storage Service: ${e.message}`)
            throw e
        }
    }
    const deleteData = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
        } catch (e) {
            LOG.error(`Storage Service: ${e.message}`)
            throw e
        }
    }

    return {
        storeData, getData, deleteData
    }
}