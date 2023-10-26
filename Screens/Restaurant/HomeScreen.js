import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";

import SPACING from "../../config/SPACING";
import colors from "../../config/Restaurant/colors";
import DATA from "../../config/Restaurant/DATA";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 2 - SPACING * 3;

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 15 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon 
                 type='font-awesome-5'
                 name='user-circle'
                 size={35}
                 style={{alignSelf: "center", marginHorizontal: 10 }}
                 />
              <Text
                style={{
                  fontSize: SPACING * 1.7,
                  fontWeight: "800",
                  color: colors.dark,
                }}
              >
                {global.email}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                style={{ marginRight: SPACING }}
                onPress={() => navigation.navigate("Cart")} // Navigate to the CartPage screen
              >
                <Image
                  style={{
                    width: SPACING * 3.5,
                    height: SPACING * 3.5,
                  }}
                  source={require("../../assets/restaurant/shopping-cart.png")} // Replace with your cart image
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width: "60%", marginTop: 10 }}>
            <Text style={{ fontSize: SPACING * 3, fontWeight: "700" }}>
              Place your order
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: colors.light,
              padding: SPACING * 1.5,
              borderRadius: SPACING,
            }}
          >
           
          </View>
          <ScrollView horizontal   bounces={false} showsHorizontalScrollIndicator={false}>
            {DATA.map((category, index) => (
              <TouchableOpacity
                style={{ marginRight: SPACING * 3 }}
                key={index}
                onPress={() => setActiveCategory(index)}
              >
                <Text
                  style={[
                    {
                      fontSize: SPACING * 1.7,
                      fontWeight: "600",
                      color: colors.gray,
                    },
                    activeCategory === index && {
                      color: colors.black,
                      fontWeight: "700",
                      fontSize: SPACING * 1.8,
                    },
                  ]}
                >
                  {category.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginVertical: SPACING * 2,
            }}
          >
            {DATA[activeCategory].recipes.map((item) => (
              <TouchableOpacity
                style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
                key={item.id}
                onPress={() =>
                  navigation.navigate("ProductDetails", { recipe: item })
                }
              >
                {/* Product Display */}
                <Image
                  style={{
                    width: "100%",
                    height: ITEM_WIDTH + SPACING * 3,
                    borderRadius: SPACING * 2,
                  }}
                  source={item.image}
                />
                <Text
                  style={{
                    fontSize: SPACING * 2,
                    fontWeight: "700",
                    marginTop: SPACING,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: SPACING * 1.5,
                    color: colors.gray,
                    marginVertical: SPACING / 2,
                  }}
                >
                  {item.discount}
                </Text>
                <Text style={{ fontSize: SPACING * 2, fontWeight: "700" }}>
                  R {item.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
