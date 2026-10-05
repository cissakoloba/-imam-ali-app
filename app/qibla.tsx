import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { qiblaBearing } from "../src/features/qibla/bearing";
import { ABIDJAN } from "../src/features/prayer/times";

export default function QiblaScreen(){const bearing=useMemo(()=>qiblaBearing(ABIDJAN),[]);return <View style={s.wrap}><Text style={s.title}>Direction de la Qibla</Text><Text style={s.value}>{Math.round(bearing)}°</Text><Text style={s.sub}>Depuis Abidjan</Text></View>}
const s=StyleSheet.create({wrap:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#062818"},title:{fontSize:24,color:"#F3E2A8",fontWeight:"700"},value:{fontSize:72,color:"#E8C96A",fontWeight:"800",marginVertical:20},sub:{color:"#C5E4D4",fontSize:17}});