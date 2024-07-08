import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Services.css';
import Banner from './assets/banner-service.png';
import Infraestrutura from './assets/infraestrutura.png'
import Devops from './assets/devops.png'
import Cloud from './assets/cloud.png'
import Software from './assets/software.png'
import Suporte from './assets/suporte.png'
import Cabeamento from './assets/cabeamento.png'

const Services = () => {
  return (
    <div className="services-container">
      <Navbar />
      <div className="banner">
        <img src={Banner} alt="Banner" className="banner-image" />  
      </div>
      <div className="title">
        <h1><strong>BEM-VINDO À NOSSA EMPRESA</strong></h1>
        <p>Oferecemos as melhores soluções em tecnologia.</p>
      </div>
      <div className="services-content">
        <div className="section section-red">
          <div className="section-text">
            <h2>INFRAESTRUTURA</h2>
            <p>Na Kainde Tecnologia, disponibilizamos serviços de infraestrutura que garantem que sua empresa tenha uma base sólida e segura para operar. Nossos serviços incluem:</p>
            <ul>
              <li><strong>Planejamento e Design de Infraestrutura:</strong> Análise e planejamento estratégico para criar uma infraestrutura robusta e escalável.</li>
              <li><strong>Implementação e Configuração:</strong> Instalação de servidores, storage, redes e outros componentes essenciais.</li>
              <li><strong>Virtualização:</strong> Soluções de virtualização para aumentar a eficiência e reduzir custos.</li>
              <li><strong>Gerenciamento de Data Center:</strong> Monitoramento e manutenção contínua para garantir a disponibilidade e a segurança dos dados.</li>
            </ul>
            <h2 className='beneficios'>Benefícios</h2>
            <ul>
              <li>Melhoria na eficiência operacional.</li>
              <li>Redução de custos com manutenção e upgrades.</li>
              <li>Aumento da segurança e redundância.</li>
              <li>Rápido atendimento em incidentes.</li>
            </ul>
          </div>
          <div className="section-image">
            <img src={Infraestrutura} alt="Imagem 1" />
          </div>
        </div>
        <div className="section section-white">
          <div className="section-image">
            <img src={Devops} alt="Imagem 2" />
          </div>
          <div className="section-text">
            <h2>DEVOPS</h2>
            <p>Integramos desenvolvimento e operações para acelerar a entrega de software e melhorar a qualidade dos produtos. Nossos serviços de DevOps incluem:</p>
            <ul>
              <li><strong>Automação de Processos:</strong> Implementação de ferramentas para CI/CD (Continuous Integration/Continuous Deployment).</li>
              <li><strong>Gerenciamento de Configurações:</strong> Uso de ferramentas como Ansible, Puppet e Chef.</li>
              <li><strong>Monitoramento e Logging:</strong> Soluções para monitoramento contínuo e análise de logs.</li>
              <li><strong>Consultoria DevOps:</strong> Auxílio na transição e na adoção de práticas DevOps.</li>
            </ul>
            <h2 className="beneficios">Benefícios</h2>
            <ul className="beneficios-1">
              <li>Ciclos de desenvolvimento mais rápidos.</li>
              <li>Redução de erros humanos.</li>
              <li>Melhoria na colaboração entre equipes de desenvolvimento e operações.</li>
            </ul>
          </div>
        </div>
        <div className="section section-red">
          <div className="section-text">
            <h2>CLOUD COMPUTING</h2>
            <p>A Kainde Tecnologia oferece soluções completas em cloud computing que permitem sua empresa escalar com eficiência e segurança. Nossos serviços incluem:</p>
            <ul>
              <li>Migração para nuvem: Implementação de infraestrutura nas melhores clouds do mercado, melhorando sua infraestrutura convencional.</li>
              <li>Gerenciamento de ambientes multi-cloud: Profissionais especializados em clouds dando tranquilidade em uma ou mais clouds.</li>
              <li>Solução de armazenamento: Utilizamos as principais plataformas de nuvem pública, como AWS, Google Cloud e Microsoft Azure, para oferecer soluções de armazenamento escaláveis e flexíveis.</li>
              <li>Consultoria e otimização de custos em cloud: Auxílio na transição e na adoção de práticas cloud, além de fornecer profissional especializado em FinOps para manter custos em dia e acessíveis.</li>
            </ul>
            <h2 className='beneficios'>Benefícios</h2>
            <ul className="beneficios-1">
              <li>Escalabilidade e flexibilidade.</li>
              <li>Redução de custos.</li>
              <li>Segurança e confiabilidade.</li>
            </ul>
          </div>
          <div className="section-image">
            <img src={Cloud} alt="Imagem 3" />
          </div>
        </div>
        <div className="section section-white">
          <div className="section-image">
            <img src={Software} alt="Imagem 4" />
          </div>
          <div className="section-text">
            <h2>FÁBRICA DE SOFTWARE</h2>
            <p>Nossa fábrica de software é especializada em desenvolver soluções customizadas que atendem às necessidades específicas de cada cliente. Oferecemos:</p>
            <ul>
              <li><strong>Desenvolvimento sob Medida:</strong> Criação de softwares personalizados de acordo com as necessidades do cliente.</li>
              <li><strong>Manutenção e Suporte de Aplicações:</strong> Atualizações, correções e melhorias contínuas.</li>
              <li><strong>Integração de Sistemas:</strong> Conexão de diferentes sistemas para trabalhar de forma harmoniosa.</li>
              <li><strong>Testes e Garantia de Qualidade:</strong> Testes rigorosos para garantir a funcionalidade e a qualidade do software.</li>
            </ul>
            <h2 className='beneficios'>Benefícios</h2>
            <ul className="beneficios-1">
              <li>Soluções personalizadas que atendem às necessidades específicas.</li>
              <li>Aumento da eficiência e produtividade.</li>
              <li>Garantia de alta qualidade e desempenho.</li>
            </ul>
          </div>
        </div>
        <div className="section section-red">
          <div className="section-text">
            <h2>SUPORTE TÉCNICO N1 E N2</h2>
            <p>Nosso suporte técnico é projetado para resolver problemas rapidamente e minimizar o tempo de inatividade. Oferecemos:</p>
            <ul>
              <li><strong>Suporte Nível 1 (N1):</strong> Atendimento inicial, resolução de problemas comuns e triagem de incidentes.</li>
              <li><strong>Suporte Nível 2 (N2):</strong> Resolução de problemas mais complexos que requerem conhecimento técnico aprofundado.</li>
              <li><strong>Monitoramento e Manutenção Preventiva:</strong> Acompanhamento contínuo para evitar problemas antes que ocorram.</li>
            </ul>
            <h2 className='beneficios'>Benefícios</h2>
            <ul className="beneficios-1">
              <li>Resolução rápida e eficiente de problemas.</li>
              <li>Redução do tempo de inatividade.</li>
              <li>Suporte especializado e dedicado.</li>
            </ul>
          </div>
          <div className="section-image">
            <img src={Suporte} alt="Imagem 5" />
          </div>
        </div>
        <div className="section section-white">
          <div className="section-image">
            <img src={Cabeamento} alt="Imagem 6" />
          </div>
          <div className="section-text">
            <h2>CABEAMENTO ESTRUTURADO</h2>
            <p>Garantimos uma infraestrutura de rede eficiente e organizada com nossos serviços de cabeamento estruturado. Nossos serviços incluem:</p>
            <ul>
              <li><strong>Planejamento e Projeto de Rede:</strong> Design de redes de cabeamento estruturado de alta eficiência.</li>
              <li><strong>Instalação e Configuração:</strong> Implementação de cabos de rede, fibra óptica, racks e outros componentes.</li>
              <li><strong>Certificação e Testes:</strong> Verificação da qualidade do cabeamento e certificação de conformidade com padrões.</li>
              <li><strong>Manutenção e Suporte:</strong> Serviços contínuos de manutenção e resolução de problemas.</li>
            </ul>
            <h2 className='beneficios'>Benefícios</h2>
            <ul className="beneficios-1">
              <li>Infraestrutura de rede confiável e escalável.</li>
              <li>Redução de problemas de conectividade.</li>
              <li>Suporte para tecnologias futuras.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="informacoes-adicionais">
      <h2>Nossos Diferenciais</h2>  
      <p><strong>Equipe Qualificada:</strong> Contamos com profissionais certificados e com vasta experiência no mercado de TI.</p>
      <p><strong>Soluções Personalizadas:</strong> Adaptamos nossos serviços às necessidades específicas de cada cliente.</p>
      <p><strong>Tecnologia de Ponta:</strong> Utilizamos as mais recentes tecnologias e metodologias para garantir a eficiência e segurança de nossas soluções.</p>
      <p><strong>Atendimento ao Cliente:</strong> Nosso compromisso é com a satisfação do cliente, oferecendo suporte contínuo e dedicado.</p>

      <h2>Clientes Satisfeitos</h2>  
      <div className="clientes">
        <p>Empresas de diversos setores confiam na Kainde Tecnologia para gerenciar e otimizar suas operações de TI. Alguns dos nossos clientes incluem:</p>
        <ul className="cliente-list">
          <li>Empresa: Implementação de soluções de cloud computing.</li>
          <li>Empresa: Desenvolvimento de software personalizado.</li>
          <li>Empresa: Suporte técnico N1 e N2.</li>
        </ul>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Services;
