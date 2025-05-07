// import Link from "next/link";
// import { AiFillGithub } from "react-icons/ai";
// import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
// import { Image } from "@heroui/image";
// import { Badge } from "@/components/ui/badge";
// import { LuExternalLink } from "react-icons/lu";

// export function ProjectCard({
//   title,
//   description,
//   imageUrl,
//   slug,
//   techStack,
//   githubUrls,
//   websiteUrl,
// }) {
//   return (
//     <Card
//       className="flex flex-col gap-4
//        p-4 group w-full
//       transition-all duration-300 rounded-lg border-none
//        hover:border-gray-500 hover:bg-gray-500/20"
//     >
//       <div className="flex flex-col md:flex-row gap-4">
//         <div className="md:w-1/3">
//           <Image
//             removeWrapper
//             alt={title}
//             className="z-0 w-full aspect-video object-fit"
//             src={imageUrl}
//           />
//         </div>

//         <div className="flex-1 flex flex-col gap-2 ">
//           <Link href={`/projects/${slug}`}>
//             <span className="leading-none">{title}</span>{" "}
//           </Link>

//           <p className="text-sm text-muted-foreground">{description}</p>
//         </div>
//       </div>
//       <div className="flex flex-row items-center gap-4">
//         {/* links */}
//         <div className="w-1/3 flex flex-row gap-2">
//           {githubUrls &&
//             githubUrls.map((url) => (
//               <Link
//                 key={url}
//                 href={url}
//                 target="_blank"
//                 className="hover:text-muted-foreground"
//               >
//                 <AiFillGithub className="text-xl text-muted-foreground hover:text-foreground" />
//               </Link>
//             ))}
//           {websiteUrl && (
//             <Link href={websiteUrl} target="_blank">
//               <LuExternalLink className="text-xl text-muted-foreground hover:text-foreground" />
//             </Link>
//           )}
//         </div>
//         {/* Tech Stack */}
//         <ul className="flex-1 flex flex-wrap gap-2">
//           {techStack.map((tech) => (
//             <Badge key={tech} variant="secondary" className="font-semibold">
//               {tech}
//             </Badge>
//           ))}
//         </ul>
//       </div>
//     </Card>
//   );
// }
