import React from 'react';
import { Action } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import Cart from './Cart.component';

import { actions, CartState } from './card.reducer';
import { Product } from './ProductItem';



const CartContainer = ({ navigation }): JSX.Element => {
  const products = useSelector((state: CartState) => state.products || []);
  const total = useSelector((state: CartState) => state.total || 0);
  const dispatch = useDispatch();

  const handlers = {
    handleProductPress: (id: number): void =>
      navigation.navigate('Detail', { id }),
    handleCheckoutPress: (): void => navigation.navigate('Checkout'),
    addToCart: (product: Product): Action =>
      dispatch(actions.addToCart(product)),
    removeFromCart: (productId: number): Action =>
      dispatch(actions.removeFromCart(productId)),
    addQuantity: (productId: number): Action =>
      dispatch(actions.addQuantity(productId)),
    subQuantity: (productId: number): Action =>
      dispatch(actions.subQuantity(productId)),
    resetCart: (): Action => dispatch(actions.resetCart())
  };

  return <Cart {...handlers} products={products} total={total} />;
};

export default CartContainer;