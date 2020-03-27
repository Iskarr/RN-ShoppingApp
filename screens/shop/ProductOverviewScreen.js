import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";
import { useNavigation } from "react-navigation-hooks";

const ProductOverviewScreen = props => {
  const { navigate } = useNavigation();
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
          onViewDetail={() => {
            navigate("ProductDetail", {
              productId: itemData.item.id,
              productTitle: itemData.item.title
            });
          }}
          onAddToCart={() => {
            navigate("CartScreen");
          }}
        />
      )}
    />
  );
};

ProductOverviewScreen.navigationOptions = {
  headerTitle: "All Products"
};

export default ProductOverviewScreen;
