import { experiencesListData } from "@/domains/portfolio/data/experienceData.tsx";
import ExperienceCard from "@/domains/portfolio/components/ExperienceCard";
import Divider from "@/components/ui/divider";
export default function ExperiencesList() {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold">Experience</h2>
      <Divider className="mt-2" />
      <ul className="flex flex-col gap-2">
        {experiencesListData.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </ul>
    </div>
  );
}
