"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/product";
import styled from "styled-components";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);
  console.log(products);

  return (
    <>
      <MainContainer>
        <ListContainer>
          <ListTitle>상품 리스트</ListTitle>
          <ProductList>
            {products.map((e) => (
              <CozProduct key={e.id}>{e.type}</CozProduct>
            ))}
          </ProductList>
        </ListContainer>
        <ListContainer>
          <ListTitle>북마크 리스트</ListTitle>
          <ProductList>
            {products.map((e) => (
              <CozProduct key={e.id}>{e.type}</CozProduct>
            ))}
          </ProductList>
        </ListContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 70vw;
  height: 70vh;
  margin-top: 20px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 70vw;
  height: 50%;
  gap: 12px;
`;

const ListTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  height: 10%;
`;

const ProductList = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 80%;
  gap: 24px;
  flex: none;
  flex-grow: 0;
`;

const CozProduct = styled.div`
  width: 320px;
  height: 230px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;
