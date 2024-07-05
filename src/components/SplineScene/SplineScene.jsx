import React from 'react';
import Spline from '@splinetool/react-spline';
import './SplineScene.css';

const SplineScene = () => {
  return (
    <main>
      <div className="spline-container">
        <Spline
          scene="https://prod.spline.design/x1BMP92uUEnuDhBH/scene.splinecode" 
        />
      </div>
      <div className="formatted-text">
        <p>
        O impacto da tecnologia no entretenimento é significativo, oferecendo uma ampla variedade de opções para diversão e lazer. Streaming de filmes e músicas, jogos eletrônicos, e mídias sociais são apenas algumas das maneiras pelas quais a tecnologia enriquece nossas vidas, proporcionando entretenimento acessível e personalizado.
        </p>
        <br />
        <p>
            A tecnologia desempenha um papel crucial e transformador em nossas vidas modernas, impactando quase todos os aspectos do cotidiano e moldando a maneira como vivemos, trabalhamos e nos relacionamos. Desde a invenção da roda até a era digital, a tecnologia tem sido um motor de progresso, proporcionando inúmeras melhorias na qualidade de vida e facilitando o avanço da civilização.
        </p>
         <br />
        <p>
            Em suma, a tecnologia é uma força motriz essencial em nossas vidas, facilitando comunicação, educação, saúde, trabalho, e entretenimento. Sua influência positiva é inegável, oferecendo soluções inovadoras para problemas complexos e melhorando a qualidade de vida de milhões de pessoas. No entanto, é crucial abordar os desafios que acompanham o progresso tecnológico para garantir que seus benefícios sejam plenamente aproveitados de maneira sustentável e responsável.
        </p>
      </div>
    </main>
  );
}

export default SplineScene;
