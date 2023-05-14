import styled from "styled-components";
import Image from "next/image";
import {
  ListContainer,
  ProductLists,
  ListTitle,
  CozProduct,
  CozTitle,
  CozFollower,
  Follower,
  CozDiscount,
  CozPrice,
  CozSubTitle,
} from "../page";
import bookmarkOff from "../../public/bookmark-off.svg";

export default function ProductList({
  products,
  setProduct,
  openModal,
  setOpenModal,
}) {
  return (
    <ListContainer>
      <ListTitle>상품 리스트</ListTitle>
      <ProductLists>
        {products.slice(0, 4).map((e) => (
          <CozProduct
            key={e.id}
            onClick={() => {
              setProduct(e);
              setOpenModal(!openModal);
            }}
          >
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
      </ProductLists>
    </ListContainer>
  );
}
