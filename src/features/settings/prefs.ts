import {readJson,writeJson} from "../../lib/persist";
export type ThemeName="day"|"night"; export type Prefs={locale:"ar"|"fr"|"en";fontScale:1|1.15|1.3;theme:ThemeName;pushHadith:boolean;pushAdhan:boolean;analytics:boolean;cityId:string};
export const DEFAULT_PREFS:Prefs={locale:"fr",fontScale:1,theme:"day",pushHadith:false,pushAdhan:false,analytics:false,cityId:"abidjan"};
const FILE="imam-ali-prefs.json";let prefs:Prefs={...DEFAULT_PREFS};let loaded=false;
export async function loadPrefs(){if(!loaded){prefs={...DEFAULT_PREFS,...(await readJson<Partial<Prefs>>(FILE,{}))};loaded=true}return getPrefs()}
export function getPrefs(){return {...prefs}}
export async function patchPrefs(p:Partial<Prefs>){prefs={...prefs,...p};await writeJson(FILE,prefs);return getPrefs()}