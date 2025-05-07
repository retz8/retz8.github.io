import { experiencesListData } from "@/domains/portfolio/data/experiencesData";
import ExperienceCard from "@/domains/portfolio/components/ExperienceCard";

export default function ExperiencesList() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="pl-4 text-xl font-semibold">Experience</h2>
      <ul className="flex flex-col gap-4">
        {experiencesListData.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </ul>
    </div>
  );
}
