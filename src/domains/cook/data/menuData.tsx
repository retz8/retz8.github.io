import type { MenuDate, MenuData } from "@/domains/cook/types/menu";

export const menuDateList: MenuDate[] = [
  {
    id: "2025-05-04",
    date: "2025.05.04",
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
];

// export const menuDetailData: MenuItemDetail[] = [
//   {
//     id: "gochujang-jjigae",
//     korName: "고추장찌개",
//     engName: "Gochujang Jjigae",
//   },
// ];

// export const menu;
