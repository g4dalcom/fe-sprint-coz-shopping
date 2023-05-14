"use client";

import styled from "styled-components";
import {
  MainContainer,
  ProductLists,
  CozProduct,
  CozTitle,
  CozFollower,
  Follower,
  CozDiscount,
  CozPrice,
  CozSubTitle,
} from "@/app/page";
import Image from "next/image";
import All from "../../../public/all.svg";
import Product from "../../../public/product.svg";
import Category from "../../../public/category.svg";
import Exhibition from "../../../public/exhibition.svg";
import Brand from "../../../public/brand.svg";
import bookmarkOff from "../../../public/bookmark-off.svg";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllProducts } from "@/app/redux/product";

export default function ProductsList() {
  const dispatch = useDispatch();
  const [filterValue, setFileterValue] = useState("");

  const filterValueHandler = (e) => {
    setFileterValue(e.target.value);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.product.products).filter((e) =>
    filterValue === "" ? e : e.type === filterValue
  );

  return (
    <>
      <MainContainer>
        <FilterContainer>
          <label>
            <Filter>
              <Image src={All} width={82} height={110} alt="no filtering" />
              <FilterName>전체</FilterName>
              <input
                onChange={filterValueHandler}
                type="radio"
                value=""
                name="filter"
                defaultChecked
              />
            </Filter>
          </label>
          <label>
            <Filter>
              <Image src={Product} width={82} height={110} alt="only product" />
              <FilterName>상품</FilterName>
              <input
                onChange={filterValueHandler}
                type="radio"
                value="Product"
                name="filter"
              />
            </Filter>
          </label>
          <label>
            <Filter>
              <Image
                src={Category}
                width={82}
                height={110}
                alt="only category"
              />
              <FilterName>카테고리</FilterName>
              <input
                onChange={filterValueHandler}
                type="radio"
                value="Category"
                name="filter"
              />
            </Filter>
          </label>
          <label>
            <Filter>
              <Image
                src={Exhibition}
                width={82}
                height={110}
                alt="only exhibition"
              />
              <FilterName>기획전</FilterName>
              <input
                onChange={filterValueHandler}
                type="radio"
                value="Exhibition"
                name="filter"
              />
            </Filter>
          </label>
          <label>
            <Filter>
              <Image src={Brand} width={82} height={110} alt="only brand" />
              <FilterName>브랜드</FilterName>
              <input
                onChange={filterValueHandler}
                type="radio"
                value="Brand"
                name="filter"
              />
            </Filter>
          </label>
        </FilterContainer>
        <ProductContainer>
          <OVProductList>
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
                          <Image
                            src={bookmarkOff}
                            width={24}
                            height={24}
                            alt="bookmark button"
                          />
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
                          <Image
                            src={bookmarkOff}
                            width={24}
                            height={24}
                            alt="bookmark button"
                          />
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
                          <Image
                            src={bookmarkOff}
                            width={24}
                            height={24}
                            alt="bookmark button"
                          />
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
                          <Image
                            src={bookmarkOff}
                            width={24}
                            height={24}
                            alt="bookmark button"
                          />
                          <CozTitle>{e.title}</CozTitle>
                          <CozSubTitle>{e.sub_title}</CozSubTitle>
                        </>
                      );
                  }
                })()}
              </CozProduct>
            ))}
          </OVProductList>
        </ProductContainer>
      </MainContainer>
    </>
  );
}

const FilterContainer = styled.div`
  width: 60%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  /* overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  } */
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  & > input {
    visibility: hidden;
    position: absolute;
  }
`;

const FilterName = styled.div`
  font-family: Dongle;
  font-size: 30px;
  font-weight: 600;
  border-radius: 50px;
`;

const OVProductList = styled(ProductLists)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
`;
