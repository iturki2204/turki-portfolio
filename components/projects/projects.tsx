import {
  ArrowRight,
  Calculator,
  LayoutGrid,
  LineChart,
  Users,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { DottedPattern } from "@/components/ui/dotted-pattern";
import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  logoSrc?: string;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  accent: string;
  imageRatio: number;
};

const PROJECTS: Project[] = [
  {
    id: "mafia",
    icon: Users,
    logoSrc: "/logo-mafia.png",
    iconLabel: "مافيا",
    title: "لعبة المافيا العربية، بالكامل من الجوال",
    description:
      "منصة مافيا متعددة اللاعبين — كل لاعب يفتح الجلسة من جواله، والموقع يدير الأدوار والجولات والتصويت بدل مدير اللعبة.",
    meta: "منتج مباشر · almafia.online · 2026",
    accent: "#7f1d2b",
    imageRatio: 4 / 3,
  },
  {
    id: "finai",
    icon: LineChart,
    iconLabel: "FINAI",
    title: "منصة ذكاء مالي عربية أولًا لتحليل الأسهم",
    description:
      "لوحة تحليل ومساعد ذكاء اصطناعي وفحص للأسهم وتنبؤات احتمالية، مبنية على بيانات حقيقية بلا أرقام تجريبية مموّهة.",
    meta: "Next.js + FastAPI · 2026",
    accent: "#8a6d00",
    imageRatio: 4 / 3,
  },
  {
    id: "cfo-simulator",
    icon: Calculator,
    iconLabel: "CFO Simulator",
    title: "محاكي تدريب على منصب المدير المالي",
    description:
      "شركة تمور سعودية افتراضية تُرسل لك مهام مالية حقيقية أسبوعيًا — من التسعير إلى ضريبة القيمة المضافة — لتتعلم القرار لا الحفظ.",
    meta: "قيد التطوير · 2026",
    accent: "#0f6b4f",
    imageRatio: 4 / 3,
  },
  {
    id: "t1",
    icon: LayoutGrid,
    logoSrc: "/logo-t1.png",
    iconLabel: "T1",
    title: "نظام حياة شخصي، بلا سيرفر وبلا حساب",
    description:
      "يجمع الأهداف والجدول والنوم والصحة والمالية الشخصية في مكان واحد، ويحسب نسبة إنجاز كل يوم — وكل بياناته محفوظة في متصفحك فقط.",
    meta: "بيانات محلية بالكامل · 2026",
    accent: "#332e7a",
    imageRatio: 4 / 3,
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              مشاريعي
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              من التجارب الصغيرة إلى الأنظمة المتكاملة، هذه الأعمال التي أفتخر ببنائها.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              كل المشاريع
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-background">
            {project.logoSrc ? (
              <Image
                src={project.logoSrc}
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
            ) : (
              <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
            )}
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl ring-1"
          style={{ aspectRatio: project.imageRatio, backgroundColor: project.accent }}
        >
          <div className="project-card__image-inner">
            <DottedPattern
              size={12}
              className="absolute inset-0 text-white/30"
            />
            {project.logoSrc ? (
              <Image
                src={project.logoSrc}
                alt={project.iconLabel}
                width={112}
                height={112}
                className="absolute inset-0 m-auto h-20 w-20 object-contain drop-shadow-lg sm:h-24 sm:w-24"
              />
            ) : (
              <Icon
                className="absolute inset-0 m-auto h-14 w-14 text-white/90 sm:h-16 sm:w-16"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
          {project.meta}
        </p>
      </article>
    </FadeIn>
  );
}
