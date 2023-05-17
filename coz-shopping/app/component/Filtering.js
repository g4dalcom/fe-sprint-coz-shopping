import styled from "styled-components";
import Image from "next/image";
import All from "../../public/all.svg";
import Product from "../../public/product.svg";
import Category from "../../public/category.svg";
import Exhibition from "../../public/exhibition.svg";
import Brand from "../../public/brand.svg";
import { BRAND, CATEGORY, EXHIBITION, PRODUCT } from "../shared/Enum";

export default function Filtering({ filterValueHandler, filterValue }) {
  return (
    <>
      <FilterContainer>
        <label>
          <Filter>
            <Image src={All} width={82} height={110} alt="no filtering" />
            <FilterName checked={filterValue === ""}>전체</FilterName>
            <input
              onClick={filterValueHandler}
              type="radio"
              value=""
              name="filter"
            />
          </Filter>
        </label>

        <label>
          <Filter>
            <Image src={Product} width={82} height={110} alt="only product" />
            <FilterName checked={filterValue === PRODUCT}>상품</FilterName>
            <input
              onClick={filterValueHandler}
              type="radio"
              value={PRODUCT}
              name="filter"
            />
          </Filter>
        </label>

        <label>
          <Filter>
            <Image src={Category} width={82} height={110} alt="only category" />
            <FilterName checked={filterValue === CATEGORY}>카테고리</FilterName>
            <input
              onClick={filterValueHandler}
              type="radio"
              value={CATEGORY}
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
            <FilterName checked={filterValue === EXHIBITION}>기획전</FilterName>
            <input
              onClick={filterValueHandler}
              type="radio"
              value={EXHIBITION}
              name="filter"
            />
          </Filter>
        </label>

        <label>
          <Filter>
            <Image src={Brand} width={82} height={110} alt="only brand" />
            <FilterName checked={filterValue === BRAND}>브랜드</FilterName>
            <input
              onClick={filterValueHandler}
              type="radio"
              value={BRAND}
              name="filter"
            />
          </Filter>
        </label>
      </FilterContainer>
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
  text-decoration: ${(props) => (props.checked ? "underline" : "none")};
  color: ${(props) => (props.checked ? "green" : "none")};
`;
