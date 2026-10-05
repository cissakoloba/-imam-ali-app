import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { loadBookmarks } from "../src/features/favorites/store";
import { enableAdhanReminders } from "../src/features/prayer/adhanNotify";
import { cityById } from "../src/features/prayer/times";
import { enableDailyHadith } from "../src/features/reminders/notify";
import { loadPrefs } from "../src/features/settings/prefs";
import { Ultra } from "../src/theme/ultra";

export default function RootLayout() {
  useEffect(() => {
    void (async () => {
      await loadBookmarks();
      const prefs = await loadPrefs();
      if (prefs.pushHadith) await enableDailyHadith();
      if (prefs.pushAdhan) await enableAdhanReminders(cityById(prefs.cityId));
    })();
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: Ultra.deep },
        headerTintColor: Ultra.gold,
        headerTitleStyle: { fontWeight: "700", fontSize: 18 },
        contentStyle: { backgroundColor: Ultra.bg },
      }} />
    </>
  );
}