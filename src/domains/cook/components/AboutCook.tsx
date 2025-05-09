export default function AboutCook() {
  return (
    <div className="flex flex-col gap-6 text-muted-foreground">
      {/* 1. 요리에 대한 내 철학 및 소개 */}
      <p className="text-foreground">
        My passion for{" "}
        <span className="font-semibold text-foreground">Fine-Dining</span> began
        as a fascination with{" "}
        <span className="font-semibold text-foreground">
          detail and elegance
        </span>
        . In my small studio kitchen, I host intimate dinners for friends,
        transforming simple ingredients into{" "}
        <span className="font-semibold text-foreground">
          six to eight-course tasting menus
        </span>
        .
      </p>
      {/* 2. 더 디테일 */}
      <p>
        Cooking is about crafting a seamless journey of flavors. I obsess over
        details: the crispness of a garnish, the depth of a broth, the exact
        moment when meat reaches its perfect sear. Designing a tasting menu
        feels much like architecting a well-structured application. Every
        element needs to be intentional, every transition smooth. It’s not just
        food—it’s an experience, meticulously planned and purposefully executed,
        much like lines of code coming together to create something seamless and
        elegant.
      </p>

      {/* 3. 어떤 요리를 지향하는가 */}
      <p>
        My tasting menus are inspired by the deep flavors of{" "}
        <span className="font-semibold text-foreground">Korean foods</span> and
        the refined simplicity of{" "}
        <span className="font-semibold text-foreground">Japanese foods</span>,
        reimagined into a{" "}
        <span className="font-semibold text-foreground">
          contemporary cuisine
        </span>
        . I focus on creating balanced dishes that highlight the natural flavors
        and aromas of fresh ingredients,{" "}
        <span className="font-semibold text-foreground">
          combining traditional techniques with contemporary plating
        </span>
        .
      </p>

      {/* 3. Spare Time: 요리 + 축구 */}
      {/* <p>
          When I'm not coding, I host and cook home-made tasting dinners, curating
          six to seven course meals.
        </p> */}
    </div>
  );
}
