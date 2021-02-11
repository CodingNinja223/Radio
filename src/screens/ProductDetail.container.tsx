import React, { useEffect, useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';

import DetailComponent from './ProductDetail';
import { Product } from './ProductItem';
import WooCommerce from './WooCommerce';
import { actions } from './card.reducer';



const DetailContainer = ({ navigation,route }): JSX.Element => {
  const initialProduct = {
    id: 1,
    name: '',
    price: 0,
    description: '',
    average_rating: '',
    images: []
  };
  const [product, setProduct] = useState<Product>(initialProduct);
  const [imagesShown, showImages] = useState(false);
  const dispatch = useDispatch();

  const handlers = {
    handleShowImages: (): void =>
      showImages((prevState: boolean) => !prevState),
    addToCart: (product: Product): Action => {
      navigation.navigate('Orders', { screen:'Cart'});

      return dispatch(actions.addToCart(product));
    }
  };

  useEffect(() => {
    WooCommerce.get(`/products/${route.params.id}`).then(({ data }) => {
      setProduct(data);
    });
  }, [route.params.id]);

  return (
    <DetailComponent
      {...handlers}
      imagesShown={imagesShown}
      product={product}
    />
  );
};

export default DetailContainer;