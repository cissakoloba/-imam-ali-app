import * as FileSystem from "expo-file-system";
function path(name:string){return `${FileSystem.documentDirectory??""}${name}`}
export async function readJson<T>(name:string,fallback:T):Promise<T>{try{const file=path(name),info=await FileSystem.getInfoAsync(file);if(!info.exists)return fallback;return JSON.parse(await FileSystem.readAsStringAsync(file)) as T}catch{return fallback}}
export async function writeJson(name:string,value:unknown){await FileSystem.writeAsStringAsync(path(name),JSON.stringify(value))}