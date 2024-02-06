import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import Image from "next/image";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-2">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <div className="flex max-w-md flex-col gap-2 text-pretty pt-2 font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3 " />
                {RESUME_DATA.location}
              </a>

              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={`mailto:${RESUME_DATA.contact.email}`}
              >
                <MailIcon className="size-3" />
                {RESUME_DATA.contact.email}
              </a>

              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={`tel:${RESUME_DATA.contact.tel}`}
              >
                <PhoneIcon className="size-3" />
                {RESUME_DATA.contact.tel}
              </a>
            </div>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground">
              {/* {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null} */}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url} target="_blank">
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            {/* <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div> */}
          </div>

          <Avatar className="size-28">
            <AvatarImage
              alt={RESUME_DATA.name}
              src={RESUME_DATA.avatarUrl.src}
              className="translate-y-6 scale-150"
            />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader className="flex-row justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="items-center justify-center gap-x-1 font-semibold leading-tight">
                        <span>{work.title}</span>
                        <span className="text-gray-500"> · </span>
                        <a
                          className="text-gray-500 hover:underline"
                          href={work.link}
                          target="_blank"
                        >
                          {work.company}
                        </a>
                      </h3>
                    </div>

                    <h4 className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}・{work.badges.join(", ")}
                    </h4>
                  </div>

                  <Image
                    className="h-8 w-8 rounded object-contain"
                    src={work.logo}
                    alt={work.company}
                  />
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.tags.length > 0 && (
                    <div className="mb-2 flex flex-wrap gap-1 ">
                      {work.tags.map((tag) => (
                        <Badge
                          className="px-1 py-0 text-[10px]"
                          variant="outline"
                          key={tag}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {work.description}
                  {work.achievements.length > 0 && (
                    <ul className="mt-2 list-disc pl-4">
                      {work.achievements.map((achievement, index) => (
                        <li className="mb-2" key={index}>
                          <p className="inline-block font-bold">
                            {achievement.title}:&nbsp;
                          </p>
                          {achievement.content}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 flex flex-col gap-2">
                  {education.degree}
                  {education.description && (
                    <div className="text-xs">{education.description}</div>
                  )}

                  {education.achievements.length > 0 && (
                    <ul className="list-disc pl-4 text-xs">
                      {education.achievements.map((achievement, index) => (
                        <li className="mb-2" key={index}>
                          {achievement.title.length > 0 && (
                            <p className="inline-block font-bold">
                              {achievement.title}:&nbsp;
                            </p>
                          )}
                          {achievement.content}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-col gap-4">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Card className="flex flex-col gap-3" key={skill.category}>
                  <CardHeader>
                    <h3 className="font-semibold leading-none">
                      {skill.category}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-1">
                    {skill.tags.map((tag) => (
                      <Badge variant="secondary" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Section>

        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-1 print:gap-2">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  image={"image" in project ? project.image : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>

      {/* <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      /> */}
    </main>
  );
}
