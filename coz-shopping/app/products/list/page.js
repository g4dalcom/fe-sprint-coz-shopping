"use client";

import styled from "styled-components";
import * as S from "@/app/page";
import Image from "next/image";
import All from "../../../public/all.svg";
import Product from "../../../public/product.svg";
import Category from "../../../public/category.svg";
import Exhibition from "../../../public/exhibition.svg";
import Brand from "../../../public/brand.svg";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllProducts } from "@/app/redux/product";
import ProductList from "@/app/component/ProductList";
import Modal from "@/app/component/Modal";

export default function ProductsList() {
  const dispatch = useDispatch();
  const [filterValue, setFileterValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [product, setProduct] = useState({});

  const openModalHandler = () => {
    setOpenModal(!openModal);
  };

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
      <Modal
        openModal={openModal}
        openModalHandler={openModalHandler}
        product={product}
      />
      <S.MainContainer>
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

        {/* 상품 리스트 */}
        <ProductContainer>
          <OVProductList>
            <ProductList
              products={products}
              setProduct={setProduct}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </OVProductList>
        </ProductContainer>
      </S.MainContainer>
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

const OVProductList = styled(S.ProductLists)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
`;
