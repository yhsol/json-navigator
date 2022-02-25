# JSON Navigator

# Structure

```
src
├── _data
│   └── sampleJson.ts // 샘플 데이터 파일입니다.
├── components
│   └── jsonNavigator
│       ├── horizontal // 가로보기 컴포넌트입니다.
│       │   └── HorizontalView.tsx
│       ├── interface // 보기 설정, 검색, 파일 등록등의 기능을 수행하는 인터페이스 컴포넌트입니다.
│       │   └── Interface.tsx
│       ├── jsonView // JSON 의 뷰 표현 컴포넌트입니다.
│       │   └── JsonView.tsx
│       ├── vertical // 세로보기 컴포넌트입니다.
│       │   └── VerticalView.tsx
│       └── JsonNavigator.tsx // 인터페이스와 뷰를 가지고 있는 JsonNavigator 루트 컴포넌트입니다.
├── pages
│   └── JsonNavigatorPage.tsx // JsonNavigator 페이지 진입점입니다.
├── types
│   └── jsonNavigator.types.ts // JsonNavigator 에서 사용하는 타입을 정리합니다.
├── utils
│   └── formattedJson.ts // JSON 파일을 뷰에서 보여줄 형태로 변경합니다.
├── App.tsx
├── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
└── setupTests.ts
```
