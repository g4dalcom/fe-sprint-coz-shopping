import Image from "next/image";
import bookmarkOn from "../../public/bookmark-on.svg";
import bookmarkOff from "../../public/bookmark-off.svg";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkAction } from "../redux/bookmark";
import { notificationAction } from "../redux/notification";
import { BRAND } from "../shared/Enum";

export default function BookmarkBtn({ product, checking }) {
  const dispatch = useDispatch();

  {
    /* 상품 상태에 따른 북마크 알림 메시지 */
  }
  const getMessage = (p) => {
    let title = p.type === BRAND ? p.brand_name : p.title;
    console.log("title = ", title);
    let message = "";

    if (marked.includes(p.id)) message = `북마크에서 ${title} 삭제!`;
    else message = `북마크에 ${title} 추가!`;

    return message;
  };

  {
    /* 북마킹 */
  }
  const productClickHandler = (product) => {
    dispatch(bookmarkAction.marked(product.id));
    dispatch(notificationAction.enque_notification(getMessage(product))),
      setTimeout(() => dispatch(notificationAction.deque_notification()), 3000);
  };

  {
    /* 북마크 목록 가져오기(해당 상품이 목록에 포함되어 있는지에 따라 on/off하기 위함, marked.includes(product.id)) */
  }
  const marked = useSelector((state) => state.bookmark.bookmarks);

  return (
    <Image
      src={
        (marked && marked.includes(product.id)) || checking
          ? bookmarkOn
          : bookmarkOff
      }
      width={24}
      height={24}
      alt="bookmark button"
      onClick={(event) => {
        event.stopPropagation();
        productClickHandler(product);
      }}
    />
  );
}
