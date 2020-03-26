import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../../components/ProductItem";

const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {}}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

ProductOverviewScreen.navigationOptions = {
  headerTitle: "All Products"
};

export default ProductOverviewScreen;
