import { CACHE } from "./connection"

export const getKey = async (key: string) => {
    if(!key) return null;
    try {
        return await CACHE.get(key);
    } catch (error) {
        console.log("-".repeat(50));
        console.log("ERROR: redis > cache.ts > getKey");
        console.log(error);
        console.log("-".repeat(50));
    }
}

export const setKey = async (key: string, value: string, ttl: number = 31104000) => {
    if(!key || !value) return null;
    try {
        return await CACHE.set(key, value);
    } catch (error) {
        console.log("-".repeat(50));
        console.log("ERROR: redis > cache.ts > setKey");
        console.log(error);
        console.log("-".repeat(50));
    }
}

export const delKey = async (key: string) => {
    if(!key) return null;
    try{
        return await CACHE.del(key);
    }catch(error) {
        console.log("-".repeat(50));
        console.log("ERROR: redis > cache.ts > delKey");
        console.log(error);
        console.log("-".repeat(50));
    }
}

export const hmset = async (key:string, value: any) => {
    if(!key || !value) return null;
    try {
        return await CACHE.hmset(key, value);
    } catch (error) {
        console.log("-".repeat(50));
        console.log("ERROR: redis > cache.ts > hset");
        console.log(error);
        console.log("-".repeat(50));
    }
}

export const hgetAll = async (key:string, value: any) => {
    if(!key || !value) return null;
    try {
        return await CACHE.hgetall(key);
    } catch (error) {
        console.log("-".repeat(50));
        console.log("ERROR: redis > cache.ts > hset");
        console.log(error);
        console.log("-".repeat(50));
    }
}