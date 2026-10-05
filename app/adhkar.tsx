import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { ADHKAR, SLOTS, type AdhkarSlot } from "../src/features/adhkar/items";

export default function AdhkarScreen() {
  const [slot, setSlot] = useState<AdhkarSlot>("morning");
  const items = ADHKAR.filter((i) => i.slot === slot);
  return (
    <ScrollView contentContainerStyle={styles.wrap}>
      <Text style={styles.title}>Invocations</Text>
      <Text style={styles.sub}>Sans source, rien ne s’affiche</Text>
      <View style={styles.row}>{SLOTS.map((s) => (
        <Pressable key={s.id} style={[styles.chip, slot === s.id && styles.chipOn]} onPress={() => setSlot(s.id)}>
          <Text>{s.label}</Text>
        </Pressable>
      ))}</View>
      {items.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.ar}>{item.textAr}</Text>
          <Text style={styles.fr}>{item.textFr}</Text>
          <Text style={styles.src}>Source : {item.source}</Text>
          <Text style={styles.rep}>Répétitions : {item.repeats}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  wrap:{padding:20,paddingBottom:48,backgroundColor:"#062818"},title:{fontSize:24,fontWeight:"700",color:"#F3E2A8"},
  sub:{color:"#C5E4D4",marginBottom:12},row:{flexDirection:"row",flexWrap:"wrap",gap:8,marginBottom:12},
  chip:{backgroundColor:"#0D3F2A",paddingHorizontal:12,paddingVertical:8,borderRadius:10},chipOn:{backgroundColor:"#1A6B5A"},
  card:{paddingVertical:14,borderBottomWidth:1,borderBottomColor:"#1A6B5A"},ar:{fontSize:22,textAlign:"right",color:"#F7F3E8",lineHeight:34},
  fr:{marginTop:8,color:"#C5E4D4",lineHeight:22},src:{marginTop:6,fontWeight:"700",color:"#E8C96A"},rep:{color:"#C5E4D4"},
});