"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/product";
import Image from "next/image";
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
              <CozProduct key={e.id}>
                {(() => {
                  switch (e.type) {
                    case "Category":
                      return (
                        <>
                          <Image
                            src={e.image_url}
                            width={260}
                            height={200}
                            alt="category image"
                            className="product_image"
                          />
                          <CozBookmark>🤍</CozBookmark>
                          <CozTitle>#{e.title}</CozTitle>
                        </>
                      );

                    case "Brand":
                      return (
                        <>
                          <Image
                            src={e.brand_image_url}
                            width={260}
                            height={200}
                            alt="brand image"
                            className="product_image"
                          />
                          <CozBookmark>🤍</CozBookmark>
                          <CozTitle>{e.brand_name}</CozTitle>
                          <CozFollower>관심고객수</CozFollower>
                          <Follower>
                            {[e.follower]
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </Follower>
                        </>
                      );
                    case "Product":
                      return (
                        <>
                          <Image
                            src={e.image_url}
                            width={260}
                            height={200}
                            alt="product image"
                            className="product_image"
                          />
                          <CozBookmark>🤍</CozBookmark>
                          <CozTitle>{e.title}</CozTitle>
                          <CozDiscount>{e.discountPercentage}%</CozDiscount>
                          <CozPrice>
                            {[e.price]
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            원
                          </CozPrice>
                        </>
                      );
                    case "Exhibition":
                      return (
                        <>
                          <Image
                            src={e.image_url}
                            width={260}
                            height={200}
                            alt="exhibition image"
                            className="product_image"
                          />
                          <CozBookmark>🤍</CozBookmark>
                          <CozTitle>{e.title}</CozTitle>
                          <CozSubTitle>{e.sub_title}</CozSubTitle>
                        </>
                      );
                  }
                })()}
              </CozProduct>
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
  height: 260px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const CozTitle = styled.div`
  font-family: Dongle;
  font-size: 25px;
  font-weight: 800;
  line-height: 19px;
`;

const CozDiscount = styled.div`
  color: #452cdd;
  font-family: Dongle;
  font-size: 23px;
  font-weight: 600;
  position: absolute;
  right: 0;
  bottom: 30px;
  line-height: 15px;
`;

const CozPrice = styled.div`
  font-family: Dongle;
  font-size: 20px;
  font-weight: 550;
  position: absolute;
  right: 0;
  bottom: 7px;
`;

const CozFollower = styled.div`
  font-family: Dongle;
  position: absolute;
  right: 0;
  bottom: 30px;
  font-size: 20px;
  font-weight: 600;
`;

const Follower = styled.div`
  font-family: Dongle;
  font-size: 20px;
  font-weight: 550;
  position: absolute;
  right: 0;
  bottom: 7px;
`;

const CozSubTitle = styled.div`
  font-family: Dongle;
  font-size: 18px;
  font-weight: 500;
`;

const CozBookmark = styled.span`
  position: absolute;
  right: 15px;
  bottom: 70px;

  &:hover {
    transform: scale(1.2);
  }
`;
