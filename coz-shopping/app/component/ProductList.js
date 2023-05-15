import Image from "next/image";
import * as S from "../page";
import bookmarkOff from "../../public/bookmark-off.svg";
import bookmarkOn from "../../public/bookmark-on.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bookmarkAction } from "../redux/bookmark";

export default function ProductList({
  products,
  setProduct,
  openModal,
  setOpenModal,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookmarkAction.getBookmarks);
  }, [dispatch]);

  const marked = useSelector((state) => state.bookmark.bookmarks);

  return (
    <>
      {products.map((e) => (
        <S.CozProduct
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
                      src={marked.includes(e.id) ? bookmarkOn : bookmarkOff}
                      width={24}
                      height={24}
                      alt="bookmark button"
                      onClick={(event) => {
                        event.stopPropagation();
                        dispatch(bookmarkAction.marked(e.id));
                      }}
                    />
                    <S.CozTitle>#{e.title}</S.CozTitle>
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
                      src={marked.includes(e.id) ? bookmarkOn : bookmarkOff}
                      width={24}
                      height={24}
                      alt="bookmark button"
                      onClick={(event) => {
                        event.stopPropagation();
                        dispatch(bookmarkAction.marked(e.id));
                      }}
                    />
                    <S.CozTitle>{e.brand_name}</S.CozTitle>
                    <S.CozFollower>관심고객수</S.CozFollower>
                    <S.Follower>
                      {[e.follower]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </S.Follower>
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
                      src={marked.includes(e.id) ? bookmarkOn : bookmarkOff}
                      width={24}
                      height={24}
                      alt="bookmark button"
                      onClick={(event) => {
                        event.stopPropagation();
                        dispatch(bookmarkAction.marked(e.id));
                      }}
                    />
                    <S.CozTitle>{e.title}</S.CozTitle>
                    <S.CozDiscount>{e.discountPercentage}%</S.CozDiscount>
                    <S.CozPrice>
                      {[e.price]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </S.CozPrice>
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
                      src={marked.includes(e.id) ? bookmarkOn : bookmarkOff}
                      width={24}
                      height={24}
                      alt="bookmark button"
                      onClick={(event) => {
                        event.stopPropagation();
                        dispatch(bookmarkAction.marked(e.id));
                      }}
                    />
                    <S.CozTitle>{e.title}</S.CozTitle>
                    <S.CozSubTitle>{e.sub_title}</S.CozSubTitle>
                  </>
                );
            }
          })()}
        </S.CozProduct>
      ))}
    </>
  );
}
