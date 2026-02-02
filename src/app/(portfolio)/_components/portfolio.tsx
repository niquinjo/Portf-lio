"use client";

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


  return (
    <section className="w-full min-h-screen flex flex-col bg-linear-to-r from-blue-600 via-sky-400 to-blue-700 text-white px-10 pt-28">

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
                Desenvolvedor{" "}
                <span className="text-sky-200">Full Stack</span>
              </h1>

              <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed">
                Crio aplicações web modernas, focadas em performance,
                design e boa experiência do usuário.
              </p>
            </div>

            {/* Tecnologias */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                Minhas {" "}
                <span className="text-sky-200">Tecnologias</span>
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
                Ver Projetos <ArrowRight className="ml-2 h-4 w-4" />
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
                <DialogTitle>Projetos</DialogTitle>
                <DialogDescription className="text-white/70">
                  Alguns projetos que fazem parte da minha jornada como dev.
                </DialogDescription>
              </DialogHeader>

              <ScrollArea className="max-h-[60vh] sm:max-h-[65vh] lg:max-h-[70vh] mt-4 pr-4">
                <div>
                  <ProjectCard
                    title="Projeto Pizzaria (Front-end + API)"
                    description="Aplicação completa de pizzaria, com front-end em React/Next.js integrado a uma API própria. O projeto simula um sistema real de pedidos, organização de produtos e comunicação entre cliente e servidor, aplicando conceitos de REST, boas práticas de código e separação de responsabilidades."
                    githubUrl="https://github.com/niquinjo/Projeto-pizzaria-front"
                    githubApiUrl="https://github.com/niquinjo/Projeto-pizzaria-API-"
                    websiteUrl="https://projeto-pizzaria-front.vercel.app/"
                  />

                  <ProjectCard
                    title="Doce Fatias (Projeto Real)"
                    description="Projeto real desenvolvido do zero para uma confeitaria, desde a concepção até o deploy em produção. Aplicação focada em identidade visual, usabilidade e presença online para expor seus produtos. Código privado por se tratar de um cliente real.
                Tecnologias: Next.js, React, TypeScript, Tailwind CSS e Vercel.
                "
                    websiteUrl="https://ddocefatias.vercel.app/"
                  />
                  <ProjectCard
                    title="Links Tree"
                    description="Página de links inspirada no Linktree, criada para centralizar redes sociais e projetos em um único local. O foco do projeto está em design limpo, responsividade e construção de uma interface simples, funcional e facilmente personalizável."
                    websiteUrl="https://links-treeq.vercel.app/"
                    githubUrl="https://github.com/niquinjo/links-tree"
                  />
                  <ProjectCard
                    title="Calculadora de IMC"
                    description="Aplicação simples para cálculo de IMC, desenvolvida com foco em lógica, validação de dados e interação com o usuário. Ideal para demonstrar fundamentos de JavaScript, manipulação de estados e feedback visual."
                    githubUrl="https://github.com/niquinjo/Calc-IMC"
                  />
                  <ProjectCard
                    title="Cart Shopping"
                    description="Aplicação de carrinho de compras que simula o fluxo de um e-commerce, incluindo adição, remoção e controle de itens. O projeto demonstra domínio de estados no front-end, lógica de negócio e organização de componentes reutilizáveis."
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
