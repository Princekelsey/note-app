import React, { useEffect } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import AppNavigator from "./src/navigation/index";
import Database from "./database/index";

export default function App() {
  useEffect(() => {
    Database.createTable();
  }, []);

  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}
