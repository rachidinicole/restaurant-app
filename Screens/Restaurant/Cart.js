import React from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const route = useRoute();
  // Extract the cartItems and orders from the route params
  const { cartItems, orders } = route.params;

  // Get the navigation object
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.ordersContainer}>
        {orders.map((order, index) => (
          <View style={styles.orderItem} key={index}>
            <Text style={styles.orderName}>{order.name}</Text>
            <Text style={styles.orderTotalPrice}>Total Price: R {order.totalPrice}</Text>
          </View>
        ))}
      </ScrollView>

      <Button title="Checkout" onPress={payWithPaystack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  ordersContainer: {
    marginBottom: 16,
  },
  orderItem: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 4,
  },
  orderName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  orderTotalPrice: {
    fontSize: 14,
    color: "#888888",
  },
});

export default CartScreen;
