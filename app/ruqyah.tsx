import { ScrollView, StyleSheet, Text } from "react-native";

export default function RuqyahScreen() {
  return (
    <ScrollView contentContainerStyle={styles.wrap}>
      <Text style={styles.title}>Ruqyah coranique</Text>
      <Text style={styles.text}>Lecture de passages coraniques avec leurs références. Aucun diagnostic médical ni contenu inventé.</Text>
    </ScrollView>
  );
}
const styles=StyleSheet.create({wrap:{padding:20,backgroundColor:"#062818",flexGrow:1},title:{fontSize:25,fontWeight:"700",color:"#F3E2A8",marginBottom:12},text:{fontSize:17,lineHeight:26,color:"#F7F3E8"}});