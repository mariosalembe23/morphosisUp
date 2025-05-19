"use client";

import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import CardData from "./CardData";
import Link from "next/link";

interface ServiceComponent {
  aplication: string;
  tittle: string;
  description: string;
  link: string;
}

const ServiceComponent: React.FC<ServiceComponent> = ({
  aplication,
  tittle,
  description,
  link,
}) => {
  return (
    <div className="bg-white shadow-lg flex flex-col justify-between p-5 rounded-xl">
      <header className="">
        <p className="text-[14px] mb-2 text-indigo-600 rounded-full  inline-flex font-semibold">
          {aplication}
        </p>
        <h5 className="text-xl font-semibold text-indigo-600">{tittle}</h5>

        <div className="border-t border-zinc-100 mt-1 pt-3">
          <p className="text-[15px] font-[450] text-zinc-800">{description}</p>
        </div>
      </header>
      <footer className="pt-5">
        <Link
          href={link}
          target="_blank"
          className="flex transition-all hover:bg-indigo-700 cursor-pointer items-center justify-between w-full mt-5 bg-indigo-600 text-white font-semibold py-2.5 px-3 rounded-lg"
        >
          Solicitar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon size-5 icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
          </svg>
        </Link>
      </footer>
    </div>
  );
};

const Services = () => {
  const [isRestricted, setIsRestricted] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 900) {
        setIsRestricted(true);
      } else {
        setIsRestricted(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="services" className="pb-32 relative back mt-28">
      <div className="absolute top-0 left-0 right-0 w-full h-80 bg-gradient bg-gradient-to-b from-white to-transparent"></div>
      <div className="pt-28 relative">
        <header className="text-center px-5 max-w-xl w-full mx-auto ">
          <h2 className="font-bold text-3xl pot:text-4xl">Serviços</h2>
          <h5 className="pt-2 font-medium text-[18px] text-zinc-800">
            Oferecemos uma ampla gama de serviços para atender às suas
            necessidades tecnológicas.
          </h5>
        </header>

        <div className="grid mt-16 gap-2 ret:grid-cols-2 grid-cols-1 px-5 pot:grid-cols-4 max-w-7xl w-full mx-auto">
          <ServiceComponent
            aplication="Web / Mobile / Desktop"
            tittle="Protótipo de Aplicações"
            description="Criamos protótipos de aplicações para validar ideias e funcionalidades antes do desenvolvimento completo, Garantindo que o produto final atenda às expectativas."
            link="https://wa.me/244954018728?text=Olá!%20Tenho%20interesse%20em%20Protótipo%20de%20Aplicações.%20Gostaria%20de%20saber%20mais%20detalhes."
          />
          <ServiceComponent
            aplication="Web"
            tittle="Aplicações Web"
            description="Desenvolvemos aplicações web personalizadas, escaláveis e responsivas, utilizando as tecnologias mais recentes para atender às suas necessidades específicas."
            link="https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20em%20Aplicações%20Web.%20Gostaria%20de%20saber%20mais%20detalhes."
          />

          <ServiceComponent
            aplication="Web / Mobile / Desktop"
            tittle="Software de Gestão"
            description="Criamos software de gestão personalizados e com Inteligência Artificial para otimizar processos empresariais, aumentar a eficiência e melhorar a tomada de decisões."
            link="https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20em%20Software%20de%20Gestão.%20Gostaria%20de%20saber%20mais%20detalhes."
          />

          <ServiceComponent
            aplication="Mobile"
            tittle="Aplicativos Móveis"
            description="Desenvolvemos aplicativos móveis nativos e híbridos para Android e iOS, com foco na experiência do usuário e desempenho."
            link="https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20em%20Aplicativos%20Móveis.%20Gostaria%20de%20saber%20mais%20detalhes."
          />
        </div>
      </div>

      <section id="team" className="mt-48 px-5">
        <header className="text-center max-w-xl w-full mx-auto ">
          <h2 className="font-bold text-4xl">Team</h2>
          <h5 className="pt-2 font-medium text-[18px] text-zinc-800">
            Nossa equipe é composta por profissionais altamente qualificados e
            experientes, prontos para atender às suas necessidades.
          </h5>
        </header>
        <div className="grid pb-5  w-full mx-auto grid-cols-1 mt-10 gap-1">
          <div className="grid max-w-[85rem] mx-auto ret:grid-cols-2 grid-cols-1 pot:grid-cols-4 gap-1">
            {CardData.slice(0, 4).map((card, index) => (
              <ProfileCard
                key={index}
                name={card.name}
                description={card.description}
                imageUrl={card.imageUrl}
                func={card.func}
                linkedinLink={card.linkedinLink}
              />
            ))}
          </div>
          {!isRestricted ? (
            <div className="grid max-w-[68rem] mx-auto ret:grid-cols-2 grid-cols-1 pot:grid-cols-3 gap-1">
              {CardData.slice(4, 7).map((card, index) => (
                <ProfileCard
                  key={index}
                  name={card.name}
                  description={card.description}
                  imageUrl={card.imageUrl}
                  func={card.func}
                  linkedinLink={card.linkedinLink}
                />
              ))}
            </div>
          ) : (
            <div className="grid max-w-[68rem] mx-auto ret:grid-cols-2 grid-cols-1 pot:grid-cols-3 gap-1">
              {CardData.slice(4, 9).map((card, index) => (
                <ProfileCard
                  key={index}
                  name={card.name}
                  description={card.description}
                  imageUrl={card.imageUrl}
                  func={card.func}
                  linkedinLink={card.linkedinLink}
                />
              ))}
            </div>
          )}
          {!isRestricted && (
            <div className="grid max-w-[46rem] mx-auto grid-cols-2 gap-1">
              {CardData.slice(7, 9).map((card, index) => (
                <ProfileCard
                  key={index}
                  name={card.name}
                  description={card.description}
                  imageUrl={card.imageUrl}
                  func={card.func}
                  linkedinLink={card.linkedinLink}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default Services;
