import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Notes from "../screens/Notes";
import AddNote from "../screens/AddNote";
import EditNote from "../screens/EditNote";

const StackNavigation = createStackNavigator(
  {
    Notes: {
      screen: Notes,
    },

    AddNote: {
      screen: AddNote,
    },

    EditNote: {
      screen: EditNote,
    },
  },
  {
    initialRouteName: "Notes",
    headerMode: "none",
    mode: "modal",
  }
);

export default createAppContainer(StackNavigation);
