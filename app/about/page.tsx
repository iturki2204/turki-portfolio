import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "نبذة",
  description: "عن تركي وطريقته في بناء المنتجات الرقمية.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              أهلًا، أنا <span className="border-b border-foreground/30 pb-0.5">تركي</span>.
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                أبني <strong className="font-semibold text-foreground">منتجات رقمية عربية</strong> من الفكرة إلى الإطلاق، وحدي غالبًا — من لعبة مافيا مباشرة يلعبها الناس، إلى أدوات مالية وتعليمية تحل مشكلة حقيقية لي أو لمن حولي.
              </p>
              <p>
                مهتم بشكل خاص <strong className="font-semibold text-foreground">بالقطاع المالي والفنتك</strong>، وهذا واضح في أغلب ما أبنيه — من أدوات تحليل الأسواق إلى محاكيات تعلّم القرار المالي.
              </p>
              <p>
                أؤمن أن <strong className="font-semibold text-foreground">التجربة الجيدة</strong> لا تحتاج إلى شرح طويل؛ تظهر في التفاصيل، في سرعة الوصول، وفي شعور المستخدم أن المنتج يفهمه.
              </p>
              <p>
                هذا الموقع نافذتي لمشاركة ما أبنيه. الهدف بسيط: <strong className="font-semibold text-foreground">صنع أدوات مفيدة وجميلة في الوقت نفسه</strong>.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
