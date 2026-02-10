"use client";
import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "./languageSwitcher";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from '@/components/ui/dialog';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { ProjectCard } from "./project";
import { SocialLinks } from "./socialLinks";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Footer } from "./footer";

export function Portfolio() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const t = useTranslations("Home");


  return (
    <section className="w-full min-h-screen flex flex-col bg-linear-to-r from-blue-600 via-sky-400 to-blue-700 text-white px-10 pt-28">
      <div className="absolute top-5 right-5">
        <LanguageSwitcher />
      </div>


      <div className="flex-1">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start gap-20">

            {/* Texto principal */}
            <div className="max-w-xl">
              <span className="text-4xl font-semibold tracking-tight">
                Nícolas {" "}
                <span className="text-sky-200">Pereira,</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                {t("role").split(" ")[0]}{" "}
                <span className="text-sky-200">
                  {t("role").split(" ").slice(1).join(" ")}
                </span>
              </h1>


              <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed">
                {t("description")}
              </p>

            </div>

            {/* Tecnologias */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                {t("technologies").split(" ")[0]}{" "}
                <span className="text-sky-200">
                  {t("technologies").split(" ").slice(1).join(" ")}
                </span>
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-7 gap-y-4 text-sm md:text-base font-medium text-white/85 ">
                <span>TypeScript</span>
                <span>React</span>
                <span>Tailwind CSS</span>
                <span>Next.js</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>Prisma</span>
                <span>Firebase</span>
                <span>Git</span>
                <span>GitHub</span>
              </div>
            </div>



          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="cursor-pointer">
                {t("projectsButton")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>

            <DialogContent
              className="
              bg-slate-900/95
                backdrop-blur
              text-white
                border border-white/10
                w-[95vw]
                max-w-lg
                sm:max-w-xl
                md:max-w-2xl
                lg:max-w-4xl
                rounded-2xl
                p-6
              "
            >
              <DialogHeader>
                <DialogTitle>{t("dialogTitle")}</DialogTitle>
                <DialogDescription className="text-white/70">
                  {t("dialogDescription")}
                </DialogDescription>
              </DialogHeader>

              <ScrollArea className="max-h-[60vh] sm:max-h-[65vh] lg:max-h-[70vh] mt-4 pr-4">
                <div>
                  <ProjectCard
                    title={t("projects.pizzariaTitle")}
                    description={t("projects.pizzariaDescription")}
                    githubUrl="https://github.com/niquinjo/Projeto-pizzaria-front"
                    githubApiUrl="https://github.com/niquinjo/Projeto-pizzaria-API-"
                    websiteUrl="https://projeto-pizzaria-front.vercel.app/"
                  />

                  <ProjectCard
                    title={t("projects.doceTitle")}
                    description={t("projects.doceDescription")}
                    websiteUrl="https://ddocefatias.vercel.app/"
                  />
                  <ProjectCard
                    title={t("projects.linksTitle")}
                    description={t("projects.linksDescription")}
                    websiteUrl="https://links-treeq.vercel.app/"
                    githubUrl="https://github.com/niquinjo/links-tree"
                  />
                  <ProjectCard
                    title={t("projects.imcTitle")}
                    description={t("projects.imcDescription")}
                    githubUrl="https://github.com/niquinjo/Calc-IMC"
                  />
                  <ProjectCard
                    title={t("projects.cartTitle")}
                    description={t("projects.cartDescription")}
                    githubUrl="https://github.com/niquinjo/Cart-shopping"
                  />
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>

        <div>
          <SocialLinks />
        </div>
      </div>
      <Footer />
    </section>
  )
}
