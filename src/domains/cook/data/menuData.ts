import type { Dinner } from "@/domains/cook/types/menu";

// Newest first.
export const dinners: Dinner[] = [
  {
    id: "2025-05-04",
    date: "2025.05.04",
    courses: [
      {
        id: "octopus-ceviche",
        engName: "octopus ceviche",
        korName: "문어 세비체",
        description: {
          en: "Bright and citrusy, the octopus is marinated to bring out its natural brininess, complemented by a touch of creaminess from the katsuo-based sauce. The texture remains tender with a refreshing, clean finish.",
          ko: "문어를 시트러스에 재워 바다 향을 살리고, 가쓰오 소스로 살짝 크리미하게 감쌌습니다. 부드럽게 씹히고, 끝맛은 깔끔합니다.",
        },
      },
      {
        id: "soft-small-bites",
        engName: "soft small bites",
        korName: "부드러운 한입들",
        description: {
          en: "A duo of smooth Japanese-style chilled tofu topped with soy-cured egg yolk, paired with a delicate chawanmushi. The contrast of cool silkiness and warm custard brings harmony to the palate.",
          ko: "간장에 절인 노른자를 올린 차가운 두부와 따뜻한 차완무시를 나란히 냅니다. 차갑고 매끈한 두부와 따뜻한 계란찜을 번갈아 먹는 재미가 있습니다.",
        },
      },
      {
        id: "winter-cod",
        engName: "winter cod",
        korName: "겨울 대구",
        description: {
          en: "Gently poached in a clear broth and paired with a yuzu radish purée. The clean, delicate flavors are accentuated by a light fish consommé, highlighting the cod’s natural sweetness.",
          ko: "맑은 국물에 천천히 익힌 대구에 유자 무 퓌레를 곁들였습니다. 가벼운 생선 콘소메가 대구의 단맛을 끌어올립니다.",
        },
      },
      {
        id: "shrimp-bell-pepper-gochujang",
        engName: "shrimp, bell pepper, gochujang",
        korName: "새우, 파프리카, 고추장",
        description: {
          en: "Pan-seared shrimp glazed with a gochujang sauce made from bell pepper juice and red chili paste, delivering smoky and bold flavors. Served alongside a marinated rice ball, seasoned with pickled bell pepper (장아찌) for a touch of acidity and crunch.",
          ko: "파프리카즙에 고추장을 풀어 만든 소스로 새우를 구워, 스모키하고 진한 맛을 냈습니다. 파프리카 장아찌로 간한 주먹밥을 곁들여 새콤하고 아삭하게 마무리합니다.",
        },
      },
      {
        id: "perilla-oil-risotto",
        engName: "perilla oil risotto",
        korName: "들기름 리조또",
        description: {
          en: "Creamy risotto made with perilla-infused butter and a broth of anchovy, kelp, and radish, imparting deep umami flavors. Finished with fresh perilla leaves for added aroma and a touch of vibrant color.",
          ko: "들기름 버터와 멸치·다시마·무 육수로 끓여 감칠맛이 깊은 리조또입니다. 마지막에 생깻잎을 올려 향과 색을 더했습니다.",
        },
      },
      {
        id: "filet-mignon-soybean-paste",
        engName: "filet mignon with soybean paste",
        korName: "안심 스테이크와 된장",
        description: {
          en: "Seared with a doenjang marinade to create a deep, umami-rich crust. Finished with a beef glaze and garnished with roasted garlic and bell pepper pickles for a touch of acidity.",
          ko: "된장에 재운 안심을 강한 불에 구워 고소한 겉면을 만들었습니다. 비프 글레이즈를 바르고, 구운 마늘과 파프리카 피클로 산미를 더했습니다.",
        },
      },
      {
        id: "white-grape-hwachae",
        engName: "white grape hwachae",
        korName: "청포도 화채",
        description: {
          en: "Chilled white grapes in a light maesil syrup, topped with a hint of mint and lemon zest. Crisp, refreshing, and the perfect palate cleanser to end the journey.",
          ko: "묽은 매실청에 차게 띄운 청포도에 민트와 레몬 제스트를 살짝 올렸습니다. 코스를 상큼하게 닫는 한 그릇입니다.",
        },
      },
    ],
  },
  {
    id: "2025-04-05",
    date: "2025.04.05",
    courses: [
      {
        id: "carrot-asparagus-sesame-oil",
        engName: "carrot, asparagus, sesame oil",
        korName: "당근, 아스파라거스, 참기름",
        description: {
          en: "Lightly sautéed carrots and asparagus glazed with sesame oil, capturing their natural sweetness and crisp texture. A touch of salt brings out the earthy flavors, creating a fresh and vibrant start to the meal.",
          ko: "당근과 아스파라거스를 살짝 볶아 참기름을 입혔습니다. 소금 한 꼬집으로 채소의 단맛과 아삭함을 살린, 가볍게 시작하는 접시입니다.",
        },
      },
      {
        id: "soft-small-bites",
        engName: "soft small bites",
        korName: "부드러운 한입들",
        description: {
          en: "A delicate duo: Hiyayakko with chilled tofu topped with soy-cured egg yolk and fresh sprouts, alongside Chawanmushi—steamed egg custard with a clear dashi broth, smooth and tender.",
          ko: "간장에 절인 노른자와 새싹을 올린 히야얏코, 그리고 맑은 다시로 쪄낸 차완무시. 둘 다 부드럽고 매끈합니다.",
        },
      },
      {
        id: "lime-butter-shrimp-gambas",
        engName: "lime butter shrimp gambas",
        korName: "라임버터소스 새우 감바스",
        description: {
          en: "Pan-seared shrimp cooked with garlic, spring onion, and onions, then finished with a bright lime butter sauce. The zest of lime adds freshness, while the butter enriches the shrimp’s natural sweetness.",
          ko: "마늘, 대파, 양파와 함께 구운 새우에 라임 버터 소스를 둘렀습니다. 라임 제스트는 산뜻함을, 버터는 새우의 단맛을 더합니다.",
        },
      },
      {
        id: "curry-sea-bass-green-grape",
        engName: "curry, sea bass, green grape",
        korName: "커리, 농어, 청포도",
        description: {
          en: "Perfectly poached sea bass served with a butter curry sauce and a touch of green grape for acidity. The buttery richness of the sauce contrasts with the lightness of the fish, while the grapes add a refreshing finish.",
          ko: "부드럽게 익힌 농어에 버터 커리 소스와 청포도를 곁들였습니다. 진한 소스와 담백한 생선 사이에서 청포도가 산미를 맡습니다.",
        },
      },
      {
        id: "acorn-noodle",
        engName: "acorn noodle",
        korName: "도토리 국수",
        description: {
          en: "A classic Korean dish featuring earthy acorn noodles in a light anchovy broth. Topped with lightly blanched water parsley and served with a side of kimchi.",
          ko: "구수한 도토리 면을 담백한 멸치 국물에 말았습니다. 살짝 데친 미나리를 올리고, 김치를 곁들여 냅니다.",
        },
      },
      {
        id: "filet-mignon-yolk-plum",
        engName: "filet mignon, yolk, plum",
        korName: "안심, 노른자, 자두",
        description: {
          en: "Tender filet mignon, cold-seared to lock in its juices, paired with a hollandaise sauce and a smooth plum purée. The balance of savory, creamy, and sweet elements creates a satisfying depth of flavor.",
          ko: "콜드 시어링으로 육즙을 가둔 안심에 홀랜다이즈와 자두 퓌레를 곁들였습니다. 짭짤하고, 고소하고, 달콤한 맛이 한 입에 겹칩니다.",
        },
      },
      {
        id: "strawberry-yogurt",
        engName: "strawberry & yogurt",
        korName: "딸기와 요거트",
        description: {
          en: "A refreshing blend of strawberries, Greek yogurt, and Extra Virgin Olive Oil. The slight tartness of the yogurt elevates the sweetness of the strawberries, providing a light and satisfying end to the meal.",
          ko: "딸기와 그릭 요거트에 엑스트라 버진 올리브 오일을 둘렀습니다. 요거트의 산미가 딸기를 더 달게 만드는, 가벼운 마무리입니다.",
        },
      },
    ],
  },
];
