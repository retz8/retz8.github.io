import type { MenuDate, MenuData } from "@/domains/cook/types/menu";

export const menuDateList: MenuDate[] = [
  {
    id: "2025-05-04",
    date: "2025.05.04",
  },
  {
    id: "2025-04-05",
    date: "2025.04.05",
  },
];

export const menuData: MenuData = [
  {
    id: "2025-05-04",
    date: "2025.05.04",
    description: (
      <>
        <p>
          This 7-course begins with delicate Japanese-inspired starters—light,
          clean, and refined. The early courses focus on fresh seafood and
          smooth textures, bringing out the clarity and subtlety of each
          ingredient.
        </p>

        <p>
          As the meal progresses, it transitions into bolder Korean flavors,
          marked by gochujang, perilla oil, and soybean paste. The richness
          deepens with each dish, culminating in a tender cut of beef with
          layered umami. To finish, the menu closes with a refreshing taste of
          white grapes, leaving a bright and clean finish.
        </p>
      </>
    ),
    menu: [
      {
        id: "octopus-ceviche",
        korName: "문어 세비체",
        engName: "octopus ceviche",
        description:
          "Bright and citrusy, the octopus is marinated to bring out its natural brininess, complemented by a touch of creaminess from the katsuo-based sauce. The texture remains tender with a refreshing, clean finish.",
      },
      {
        id: "soft-small-bites",
        korName: "부드러운 한입들",
        engName: "soft small bites",
        description:
          "A duo of smooth Japanese-style chilled tofu topped with soy-cured egg yolk, paired with a delicate chawanmushi. The contrast of cool silkiness and warm custard brings harmony to the palate.",
      },
      {
        id: "winter-cod",
        korName: "겨울 대구",
        engName: "winter cod",
        description:
          "Gently poached in a clear broth and paired with a yuzu radish purée. The clean, delicate flavors are accentuated by a light fish consommé, highlighting the cod’s natural sweetness.",
      },
      {
        id: "shrimp-bell-pepper-gochujang",
        korName: "새우, 파프리카, 고추장",
        engName: "shrimp, bell pepper, gochujang",
        description:
          "Pan-seared shrimp glazed with a gochujang sauce made from bell pepper juice and red chili paste, delivering smoky and bold flavors. Served alongside a marinated rice ball, seasoned with pickled bell pepper (장아찌) for a touch of acidity and crunch.",
      },
      {
        id: "perilla-oil-risotto",
        korName: "들기름 리조또",
        engName: "perilla oil risotto",
        description:
          "Creamy risotto made with perilla-infused butter and a broth of anchovy, kelp, and radish, imparting deep umami flavors. Finished with fresh perilla leaves for added aroma and a touch of vibrant color.",
      },
      {
        id: "filet-mignon-soybean-paste",
        korName: "안심 스테이크와 된장",
        engName: "filet mignon with soybean paste",
        description:
          "Seared with a doenjang marinade to create a deep, umami-rich crust. Finished with a beef glaze and garnished with roasted garlic and bell pepper pickles for a touch of acidity.",
      },
      {
        id: "white-grape-hwachae",
        korName: "청포도 화채",
        engName: "white grape hwachae",
        description:
          "Chilled white grapes in a light maesil syrup, topped with a hint of mint and lemon zest. Crisp, refreshing, and the perfect palate cleanser to end the journey.",
      },
    ],
  },
  {
    id: "2025-04-05",
    date: "2025.04.05",
    description: (
      <>
        This 7-course meal is inspired by the natural brightness and acidity of
        fruits—lime, plum, and green grape—balanced with savory elements. Each
        dish is designed to highlight the freshness of its ingredients, creating
        a seamless flow of flavors that evolve with each course. The meal
        concludes with a light and refreshing strawberry and yogurt blend,
        leaving a clean finish.
      </>
    ),
    menu: [
      {
        id: "carrot-asparagus-sesame-oil",
        korName: "당근, 아스파라거스, 참기름",
        engName: "carrot, asparagus, sesame oil",
        description:
          "Lightly sautéed carrots and asparagus glazed with sesame oil, capturing their natural sweetness and crisp texture. A touch of salt brings out the earthy flavors, creating a fresh and vibrant start to the meal.",
      },
      {
        id: "soft-small-bites",
        korName: "부드러운 한입들",
        engName: "soft small bites",
        description:
          "A delicate duo: Hiyayakko with chilled tofu topped with soy-cured egg yolk and fresh sprouts, alongside Chawanmushi—steamed egg custard with a clear dashi broth, smooth and tender.",
      },
      {
        id: "lime-butter-shrimp-gambas",
        korName: "라임버터소스 새우 감바스",
        engName: "lime butter shrimp gambas",
        description:
          "Pan-seared shrimp cooked with garlic, spring onion, and onions, then finished with a bright lime butter sauce. The zest of lime adds freshness, while the butter enriches the shrimp’s natural sweetness.",
      },
      {
        id: "curry-sea-bass-green-grape",
        korName: "커리, 농어, 청포도",
        engName: "curry, sea bass, green grape",
        description:
          "Perfectly poached sea bass served with a butter curry sauce and a touch of green grape for acidity. The buttery richness of the sauce contrasts with the lightness of the fish, while the grapes add a refreshing finish.",
      },
      {
        id: "acorn-noodle",
        korName: "도토리 국수",
        engName: "acorn noodle",
        description:
          "A classic Korean dish featuring earthy acorn noodles in a light anchovy broth. Topped with lightly blanched water parsley and served with a side of kimchi.",
      },
      {
        id: "filet-mignon-yolk-plum",
        korName: "안심, 노른자, 자두",
        engName: "filet mignon, yolk, plum",
        description:
          "Tender filet mignon, cold-seared to lock in its juices, paired with a hollandaise sauce and a smooth plum purée. The balance of savory, creamy, and sweet elements creates a satisfying depth of flavor.",
      },
      {
        id: "strawberry-yogurt",
        korName: "딸기와 요거트",
        engName: "strawberry & yogurt",
        description:
          "A refreshing blend of strawberries, Greek yogurt, and Extra Virgin Olive Oil. The slight tartness of the yogurt elevates the sweetness of the strawberries, providing a light and satisfying end to the meal.",
      },
    ],
  },
];

// export const menuDetailData: MenuItemDetail[] = [
//   {
//     id: "gochujang-jjigae",
//     korName: "고추장찌개",
//     engName: "Gochujang Jjigae",
//   },
// ];

// export const menu;
