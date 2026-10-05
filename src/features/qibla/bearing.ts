import { ABIDJAN, CITIES, type City } from "../prayer/times";
export const KAABA={lat:21.4225,lng:39.8262};
function dtr(d:number){return d*Math.PI/180} function rtd(r:number){return r*180/Math.PI}
export function qiblaBearing(city:City):number{const p1=dtr(city.lat),p2=dtr(KAABA.lat),dl=dtr(KAABA.lng-city.lng);const y=Math.sin(dl)*Math.cos(p2);const x=Math.cos(p1)*Math.sin(p2)-Math.sin(p1)*Math.cos(p2)*Math.cos(dl);return (rtd(Math.atan2(y,x))+360)%360}
export function haversineKm(city:City):number{const R=6371,dφ=dtr(KAABA.lat-city.lat),dλ=dtr(KAABA.lng-city.lng),a=Math.sin(dφ/2)**2+Math.cos(dtr(city.lat))*Math.cos(dtr(KAABA.lat))*Math.sin(dλ/2)**2;return 2*R*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}
export function formatBearing(deg:number){return `${Math.round(deg)}°`}
export {ABIDJAN,CITIES}; export type {City};