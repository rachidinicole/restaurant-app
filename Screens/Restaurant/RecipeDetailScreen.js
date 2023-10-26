import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import SPACING from "../../config/SPACING";
import { Button } from '@rneui/base';
import colors from "../../config/Restaurant/colors";

const { height } = Dimensions.get("window");

const RecipeDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { recipe } = route.params;

  const [orders, setOrders] = useState([]);
  const [showTick, setShowTick] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Define your cart state using useState
  const [cartItems, setCartItems] = useState([]);

 const addToCart = () => {
  // Calculate the total price based on quantity
  const totalPrice = recipe.price * quantity;

  // Create an item object with name, total price, and image URL
  const order = {
    name: recipe.name,
    totalPrice,
    imageUrl: recipe.image, // Replace this with the actual image URL
  };

  // Add the new order to the orders array
  setOrders([...orders, order]);
  setShowTick(true);

  setTimeout(() => {
    setShowTick(false);
    navigation.navigate("Cart", { cartItems, orders });
  }, 1000);
};

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            style={{
              padding: SPACING * 2,
              height: height / 2.5,
              padding: SPACING * 2,
              paddingTop: SPACING * 4,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            source={recipe.image}
          ></ImageBackground>
          <View
            style={{
              padding: SPACING * 2,
              paddingTop: SPACING * 3,
              marginTop: -SPACING * 3,
              borderTopLeftRadius: SPACING * 3,
              borderTopRightRadius: SPACING * 3,
              backgroundColor: colors.white,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginBottom: SPACING * 3,
                alignItems: "center",
              }}
            >
              <View style={{ width: "100%" }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: SPACING * 3,
                    color: colors.black,
                    fontWeight: "700",
                  }}
                >
                  {recipe.name}
                </Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "center" }}
            >
              <View
                style={{
                  padding: SPACING,
                  marginHorizontal: 5,
                  backgroundColor: colors.light,
                  flexDirection: "row",
                  borderRadius: SPACING,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="time"
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.6,
                    fontWeight: "600",
                    marginLeft: SPACING / 2,
                    color: colors.gray,
                  }}
                >
                  {recipe.time}
                </Text>
              </View>
      
              <View
                style={{
                  padding: SPACING,
                  marginHorizontal: 5,
                  backgroundColor: colors.light,
                  flexDirection: "row",
                  borderRadius: SPACING,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="restaurant"
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.6,
                    fontWeight: "600",
                    marginLeft: SPACING / 2,
                    color: colors.gray,
                  }}
                >
                  {recipe.cooking_time}
                </Text>
              </View>
              <View
                style={{
                  padding: SPACING,
                  marginHorizontal: 5,
                  backgroundColor: colors.light,
                  flexDirection: "row",
                  borderRadius: SPACING,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="star"
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.6,
                    fontWeight: "600",
                    marginLeft: SPACING / 2,
                    color: colors.gray,
                  }}
                >
                  {recipe.rating}
                </Text>
              </View>
            </View>


            <View style={{ marginVertical: SPACING * 3 }}>
              <Text
                style={{
                  fontSize: SPACING * 2,
                  fontWeight: "700",
                  color: colors.dark,
                }}
              >
                Ingredients
              </Text>
              {recipe.ingredients.map((ingredient) => (
                <View
                  style={{
                    marginVertical: SPACING,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  key={ingredient.id}
                >
                  <View
                    style={{
                      width: SPACING,
                      height: SPACING,
                      backgroundColor: colors.light,
                      borderRadius: SPACING,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: SPACING * 1.7,
                      fontWeight: "600",
                      color: colors.gray,
                      marginLeft: SPACING,
                    }}
                  >
                    {ingredient.title}
                  </Text>
                </View>
              ))}
            </View>
            <Text
              style={{
                fontSize: SPACING * 2,
                fontWeight: "700",
                color: colors.dark,
                marginBottom: SPACING,
              }}
            >
              Description
            </Text>
            <Text
              style={{
                fontSize: SPACING * 1.7,
                fontWeight: "500",
                color: colors.gray,
              }}
            >
              {recipe.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <SafeAreaView>
        <View style={{ padding: SPACING * 2 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "center" }}
          >
            <TouchableOpacity onPress={decreaseQuantity} style={{marginHorizontal: 25}}>
              <Ionicons name="remove-circle" size={30} color={colors.gray} />
            </TouchableOpacity>
            <Text style={{ fontSize: 24 }}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity} style={{marginHorizontal: 25}}>
              <Ionicons name="add-circle" size={30} color={colors.gray} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={addToCart}
          >
            
            <Text
              style={{
                fontSize: SPACING * 2,
                color: colors.black,
                fontWeight: "300",
              }}
            >
              Total: 
            </Text>
            <Text
              style={{
                fontSize: SPACING * 2,
                color: colors.orangeColor,
                fontWeight: "700",
                marginLeft: SPACING / 2,
              }}
            >
              R {recipe.price * quantity}
            </Text>
          </TouchableOpacity>
          <Button title="Order Now" size='md' titleStyle={{color: colors.orangeColor , fontWeight: "600"}} color={colors.lightGrey} containerStyle={{
                width: 300,
                margin: 15,
                borderRadius: 20,
                alignSelf: "center",
              }}
              />
        </View>
      </SafeAreaView>
      {showTick && (
        <Animatable.View animation="bounceIn" style={styles.tickContainer}>
          <Ionicons name="checkmark-circle" size={SPACING * 20} color="green" />
        </Animatable.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  tickContainer: {
    position: "absolute",
    top: "25%",
    left: "25%",
    transform: [{ translateX: -SPACING * 2.5 }, { translateY: -SPACING * 2.5 }],
    backgroundColor: "white",
    borderRadius: SPACING * 5,
    padding: SPACING * 2,
    zIndex: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RecipeDetailScreen;
