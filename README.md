# 솔로 프로젝트 - 나만의 쇼핑몰 앱 만들기
- 개발 기간 : 2023-05-13 ~ (진행중)

</br>

## ⚒ 기술스택
- <img src="https://img.shields.io/badge/Next.js-F7DF1E?style=plastic&for-the-badge"> <img src="https://img.shields.io/badge/Redux toolkit-764ABC?style=plastic&for-the-badge"> <img src="https://img.shields.io/badge/Styled Component-DB7093?style=plastic&for-the-badge">

</br>

## ⭐ 주요 기능
- 공통 기능 : 상품 클릭시 모달창으로 확대, 북마크 버튼 클릭시 북마크, 북마크시 알림 토스트 출력
- 메인 페이지 : 무작위 상품 4개, 북마크한 상품 4개 전시
- 상품 리스트 페이지 : 모든 상품 전시, 필터링 기능
- 북마크 페이지 : 북마크한 상품만 전시, 필터링 기능
- 상품 리스트와 북마크 페이지에서 무한 스크롤 기능 **(진행중)**

</br>

## 📌 후기 (진행중)
- 구조를 깊이 생각하지 않고 구현하다보니 중복이 많이 생기고 리팩토링을 해야할 것들이 쌓이는 것 같다. 페이지마다 중복되는 코드(openModalHandler)들이 있는데 상위 페이지에서 내려줄 수 있는 방법을 생각해봐야겠다!
- reducer 안에 로직이 존재해도 되는 건지 궁금하다. marked라는 이름의 리듀서로 북마크 버튼을 눌렀을 때 이미 북마크되었는지 여부에 따라 다른 작업을 하는 조건을 작성하였는데 사이드 이펙트가 발생하는 부분일 수도 있다는 생각이 들었다. 외부에서 조건을 판단한 후에 addBookmark, removeBookmark로 나누는 것이 좋은 걸까?
