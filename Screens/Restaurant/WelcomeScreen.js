import React , {useState} from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the navigation hook
import colors from "../../config/Restaurant/colors";
import SPACING from "../../config/SPACING";

const WelcomeScreen = () => {
  //const [email, setEmail ] = useState("");
  const navigation = useNavigation(); // Initialize the navigation hook

  const handleOrderNow = () => {
    // Navigate to the HomeScreen when the button is clicked
    navigation.navigate("Home");
    console.log(global.email);
  };

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/restaurant/opening.jpeg")}
    >
      <View style={{ flex: 1, backgroundColor: colors.black, opacity: 0.2 }} />
      <View
        style={{
          position: "absolute",
          height: "100%",
          zIndex: 2,
          width: "100%",
          justifyContent: "flex-end",
          paddingHorizontal: SPACING * 2,
          paddingBottom: SPACING * 5,
        }}
      >
        <View>
          <Text
            style={{
              color: colors.gray,
              fontWeight: "800",
              fontSize: SPACING * 4.5,
              textTransform: "capitalize",
            }}
          >
            what are you craving today
          </Text>
          <Text
            style={{
              color: colors.gray,
              fontWeight: "600",
              fontSize: SPACING * 1.7,
            }}
          >
            place your order here.
          </Text>
          <TouchableOpacity
            style={{
              padding: SPACING * 2,
              backgroundColor: colors.gray,
              borderRadius: SPACING * 2,
              alignItems: "center",
              marginTop: SPACING * 3,
            }}
            onPress={handleOrderNow} // Call handleOrderNow when the button is pressed
          >
            <Text
              style={{
                color: colors.orangeColor,
                fontSize: SPACING * 2,
                fontWeight: "700",
              }}
            >
              Order here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
