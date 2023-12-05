# Animation page

<center>
<img  src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=Animation_Page&fontSize=90" width="80%"/>
</center>

- 고전만화부터 현대의 만화까지를 손쉽게 찾을 수 있었으면 좋겠다는 목적으로 만든 사이트. [Animation_Page](https://k-animation.netlify.app).

## 🧰 Tech Stack

### 📖 Platforms & Languages

<center>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
</center>

### 🛠️ Tools

<center>
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</center>

<center>

<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Eclipse-K&layout=compact" width="80%"><br><br>
<img src="https://github-readme-stats.vercel.app/api?username=Eclipse-K&show_icons=true" width="80%">

</center>

## 📕과정

1. 네비게이션바의 변천 과정

   - bootstrap을 활용하여 조금 쉽게 접근했습니다.

   - 쉽게 접근한만큼 하위 메뉴들과 연동하는 과정에서 연결하는게 어렵다고 느끼는 문제점을 발견

   - Navbar 생성을 위해 "<Link, Routes, Route>" 등을 사용하여 네비게이션 바를 설정

   - 또한 useState 를 이용해서 드롭다운으로 하위 내용들이 나타났을 때 연도별로 분류하는 작업을 설계함.

   - 연도별로 분류작업은 하였으나 아직 css적인 부분에서 수정했을 때 문제점이 나올 거 같음.

   - 드롭다운 시키는데 React 아이콘을 이용

   - DropDown 했을 시 Content 아래로 검색창과 SearchCard 내용이 덮이도록 우선순위 조정.

   - Navbar 수정을 거치면서 현재코드로는 수정할 때마다 Link 연결이 안되는 문제가 발생.
     -> 결국 코드를 전체적으로 새로 작업하였다. -> 기존의 외형에서 벗어나지 않고 Dropdown button을 눌렀을 때 p테그가 생성되도록 변경. -> 각각의 연도별로 Link를 생성해서 연결하여 이전보다 연도별로 보기 편하게 변경. -> 각 연도를 클릭했을 때 드롭다운 메뉴가 닫히는 기능 추가.

2. 검색 기능 구현

   - JSON 파일에 내용이 많아지다보니 리스트를 내려가면서 찾아야하는 번거로움이 발생.

   - 검색 기능을 구현하여 편리하게 원하는 내용을 찾는 방식으로 접근.

   - List.js에서 구현하려 하였으나 원인을 알기 어려운 문제에 부딪힘.

   - App.js에 검색창을 구현해서 실행하니 정상작동함.

   - 검색어가 없는 상태에서 검색 버튼을 눌렀을 때 찾을 수 없다는 내용 대신에 전체 내용이 출력됨.

   - 검색어가 없는 상태에서는 검색 버튼이 반응하지 않도록 해결

   - 검색어를 리셋하는 버튼이 검색어가 있을 때만 나타나도록 변경

   - 리셋버튼과 검색 버튼을 react 아이콘으로 변경

   - 검색어를 입력시 자동완성 되도록 기능 구현하고 자동완성 내용물이 카드뉴스 위로 가도록 우선순위 조정.

   - 검색어 입력창과 자동완성창이 한칸에 표시되도록 구현.

   - css에서 카드부분을 absolute 를 사용하여 검색바 하단에 고정시킴.

   - 검색어 입력 후 Enter 치면 리셋이 먼저 작동되는 현상이 발생 -> handleKeyPress 함수를 추가하여 Enter를 치면 검색이 먼저 작동되도록 수정.

   - Reset 버튼이 비활성화 됐을 때 그 공간이 비게 되면서 Submit버튼이 당겨져 오는 현상 있어 Submit 위치가 고정적이지 못한 현상이 있었음. -> "<span>테그에 직접 스타일을 추가하여 수정"

   - 검색 결과물에 대한 zoom-in 애니메이션 효과 적용.

   - 페이지 변경 작업을 거치면서 드롭다운 메뉴 안에 "통합검색" Link를 만들어서 따로 페이지 만듦.

3. 하단에 저작권 표시 문구 추가

   - 저작권 표시 문구 위에 "<hr />" 제거 (추후 깔끔하게 삽입 하는 방법 찾아낼 예정)

   - 저작권 표시 문구 위치 조정하여 좀 더 가독성을 올림.

   - 검색해서 2개 이상의 결과물이 출력되면 결과물 사이에 문구가 표시 되는 현상이 발생했음.

   - 하단 포지션 fixed 시키는걸로 문제 해결됨.

4. 검색 후 나타나는 카드 정보 형식 변경

   - 카드 정보에 표시되는 컨텐츠 내용이 가운데 정렬로 돼있어서 왼쪽 정렬로 변경.

   - 제목, 연도, 내용을 카드 박스 center 위치로 조정.

5. 홈 화면에 버튼식으로 등장하는 그림 제거

   - 버튼식으로 해서 나오고 들어가는 형태의 카드가 필요성이 없어짐을 느낌.

6. 하단에 위로 가기 버튼 추가

   - 하단 버튼 아이콘은 리엑트 아이콘 사용

   - 버튼 테그 원형으로 변경하고 색상 변경

   - 스마트폰에서 볼 때 화살표가 원 중앙에 위치하지 않는 문제 발견 -> button 테두리를 없애고 아이콘 변경

7. 더보기 기능 추가

   - 각 분류탭을 눌렀을 때 10개의 리스트만 생성되도록 수정. -> 해당 시대에 맞게 전체리스트가 보이게 수정.

   - 더보기 버튼 클릭시 10개의 리스트 데이터 추가로 생성. -> 1개의 데이터만 추가로 보이게 수정.

   - 다른 분류탭을 클릭시 더보기 기능으로 활성화 된 리스트 초기화.

   - 더 이상 볼 데이터가 없을 때는 더보기 버튼 없애기 기능 구현.

8. 시대별 리스트에 기능 추가

   - 글씨가 작아 보일 수도 있겠다는 단점을 보완하기 위해 커서를 두면 확대되는 기능 생성. -> 스크롤할 때 걸리적 거리는 느낌을 받아 클릭시 확대되고 축소하는 기능으로 바꿈.

9. 추가하기 기능 추가

   - 추가하기 버튼을 누르면 새로운 내용을 입력할 수 있는 팝업창 생성.

   - Enter 입력 시 창이 닫히는 문제 발생 -> 조건문 활용해서 해결.

   - 닫기 버튼으로 닫는 기능 구현했는데 이게 불편하다고 느껴져서 마우스로 아웃사이드 클릭하면 닫기는 기능으로 바꿈.

   - 실제로 내용을 입력하고 추가하려면 API를 따로 등록해야되기 때문에 이 문제는 추후에 해결.

10. 시스템 테마에 따라 자동으로 배경색이 변경.

11. Home에 지뢰찾기 게임을 추가.
