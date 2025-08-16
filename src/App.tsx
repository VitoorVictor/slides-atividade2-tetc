import { useState } from "react";

// Define a interface para a estrutura de um item de conteúdo do slide
interface SlideContentItem {
  type: "point" | "subpoint";
  text: string;
}

// Define a interface para a estrutura de um slide
interface Slide {
  title: string;
  subtitle?: string; // Propriedade opcional
  author?: string; // Propriedade opcional
  section: string;
  content?: SlideContentItem[]; // Conteúdo é um array de SlideContentItem, e é opcional
  image?: string; // Imagem é opcional
  imageAlt?: string; // Texto alternativo da imagem é opcional
}

// Conteúdo dos slides extraído do seu roteiro
const slidesData: Slide[] = [
  // Aplica a interface Slide ao array slidesData
  {
    title: "Introdução à Inteligência Artificial",
    subtitle: "Desvendando o Campo da IA",
    author: "Vitor Gabriel Blasques Victor - RA: 223907-1",
    section: "Seção 1: Introdução à Inteligência Artificial",
  },
  {
    title: "O que é Inteligência Artificial?",
    content: [
      {
        type: "point",
        text: "Definição: Estudo das formas como **comportamentos inteligentes** podem ser inseridos em máquinas.",
      },
      {
        type: "point",
        text: "Não é reproduzir o cérebro: O objetivo é resolver problemas de forma inteligente, não copiar o funcionamento cerebral.",
      },
      {
        type: "point",
        text: "Inspiração na natureza: A IA se inspira em organismos vivos para suas soluções.",
      },
    ],
    section: "Seção 1: Introdução à Inteligência Artificial",
  },
  {
    title: "O 'Efeito IA'",
    content: [
      {
        type: "point",
        text: 'Conceito: Tendência de desconsiderar algo como IA depois que o problema é resolvido ("Era só força bruta", "Era só regressão linear").',
      },
      { type: "point", text: "Exemplos:" },
      {
        type: "subpoint",
        text: "**Deep Blue:** Venceu Kasparov no xadrez, mas foi desacreditado.",
      },
      {
        type: "subpoint",
        text: '**Watson:** Venceu Jeopardy, mas foi visto como "apenas detector de padrões".',
      },
      {
        type: "point",
        text: "A falácia: O fato de um problema ser resolvido não significa que a IA não foi usada.",
      },
    ],
    section: "Seção 1: Introdução à Inteligência Artificial",
  },
  {
    title: "O Conceito de Inteligência",
    content: [
      { type: "point", text: "Sem definição universalmente aceita." },
      { type: "point", text: "Algumas propostas:" },
      { type: "subpoint", text: '"Habilidade cognitiva"' },
      {
        type: "subpoint",
        text: '"Comportamento adaptativo orientado a metas"',
      },
      {
        type: "subpoint",
        text: '"Habilidade de intencionalmente organizar informações para inferir novos conhecimentos"',
      },
      {
        type: "subpoint",
        text: '"Capacidade mental de raciocinar, planejar, resolver problemas, abstrair ideias, compreender ideias e linguagens, e aprender."',
      },
      {
        type: "point",
        text: "IA e estas habilidades: Muitas áreas da pesquisa em IA focam nessas habilidades.",
      },
    ],
    section: "Seção 1: Introdução à Inteligência Artificial",
  },
  {
    title: "Como Inserir Inteligência no Computador?",
    content: [
      { type: "point", text: "Abordagens principais:" },
      {
        type: "subpoint",
        text: "**Algoritmos de busca e planejamento:** Achar o melhor caminho, planejar sequências de ações. (Ex: Busca em largura/profundidade, Busca heurística, Busca competitiva).",
      },
      {
        type: "subpoint",
        text: "**Sistemas baseados em conhecimento:** Inferir causas, prever situações com base em regras de especialistas. (Ex: Sistemas especialistas).",
      },
      {
        type: "subpoint",
        text: "**Lógica:** Tirar conclusões a partir de fatos. (Ex: Lógica proposicional, Lógica de predicados, Prolog).",
      },
    ],
    section: "Seção 1: Introdução à Inteligência Artificial",
  },
  {
    title: "Como Inserir Inteligência no Computador? (Cont.)",
    content: [
      {
        type: "point",
        text: "**Algoritmos de Classificação:** Classificar dados usando experiência, aprendendo a partir de exemplos. (Ex: KNN, Classificador Bayesiano).",
      },
      {
        type: "subpoint",
        text: "**Classificar:** Atribuir dados a classes (ex: gato/cachorro).",
      },
      {
        type: "point",
        text: "**Regressão:** Produzir números contínuos a partir de entradas. (Ex: Regressão linear, Redes neurais).",
      },
      {
        type: "subpoint",
        text: "**Diferença Classificação vs. Regressão:** Classificação lida com classes discretas; Regressão com valores contínuos.",
      },
    ],
    section: "Seção 1: Introdução à Inteligência Artificial",
  },
  {
    title: "Como Inserir Inteligência no Computador? (Cont. II)",
    content: [
      {
        type: "point",
        text: "**Algoritmos Não Supervisionados:** Não há gabarito, o algoritmo encontra padrões nos dados.",
      },
      {
        type: "subpoint",
        text: "**Clustering:** Encontrar agrupamentos naturais em conjuntos de dados. (Ex: K-Means).",
      },
      {
        type: "subpoint",
        text: "**Redução de Dimensionalidade:** Encontrar formas mais compactas de representar dados com mínima perda. (Ex: PCA, JPG).",
      },
      {
        type: "point",
        text: "Outros problemas: Sistemas de recomendação, previsão, linguagem natural, visão computacional, algoritmos genéticos/otimização.",
      },
    ],
    section: "Seção 1: Introdução à Inteligência Artificial",
  },
  {
    title: "O Início da Jornada da IA",
    content: [
      { type: "point", text: "**Década de 50:**" },
      {
        type: "subpoint",
        text: '**1950:** Artigo "Computer Machinery and Intelligence" de Alan Turing (pai da computação). ',
      },
      {
        type: "subpoint",
        text: "**1955:** Primeiro provador automático de teoremas.",
      },
      {
        type: "subpoint",
        text: "**1956:** Conferência Dartmouth – Nascimento do termo e campo da IA.",
      },
    ],
    image: "https://placehold.co/400x250/334155/E2E8F0?text=Alan+Turing", // Exemplo de imagem para Alan Turing
    imageAlt: "Imagem de Alan Turing",
    section: "Seção 2: Origem da Inteligência Artificial",
  },
  {
    title: "Primeiros Marcos",
    content: [
      {
        type: "point",
        text: "**1958:** Perceptron – Primeiro modelo computacional de neurônio.",
      },
      { type: "point", text: "**Década de 60:**" },
      {
        type: "subpoint",
        text: "**1964:** ELIZA – Primeiro chatbot/chatterbot.",
      },
      {
        type: "subpoint",
        text: "**1966:** Shakey – Primeiro robô de propósitos gerais capaz de raciocinar sobre suas ações.",
      },
      {
        type: "point",
        text: "**Nascimento da Visão Computacional:** Com Shakey e pesquisadores como Marvin Minsky.",
      },
    ],
    section: "Seção 2: Origem da Inteligência Artificial",
  },
  {
    title: "O Primeiro 'Inverno da IA'",
    content: [
      {
        type: "point",
        text: '**1969:** Livro "Perceptrons" de Minsky e Papert – Descredibiliza redes neurais (apenas um neurônio, não redes).',
      },
      {
        type: "point",
        text: '**1974-1980:** Primeiro Inverno da IA – Corte de financiamento, desilusão, "só hype".',
      },
    ],
    section: "Seção 2: Origem da Inteligência Artificial",
  },
  {
    title: "O 'Boom' da IA e o Renascimento das Redes Neurais",
    content: [
      {
        type: "point",
        text: '**1980-1987:** "Boom" da IA – Êxito dos Sistemas Especialistas (baseados em regras).',
      },
      {
        type: "point",
        text: "**1982-1986:** Renascimento das Redes Neurais – Publicação de livro mostrando potencial e algoritmo de treinamento.",
      },
      {
        type: "point",
        text: "Novo desafio: Falta de poder computacional para redes neurais complexas.",
      },
    ],
    section: "Seção 2: Origem da Inteligência Artificial",
  },
  {
    title: "O Segundo 'Inverno da IA' e a Grande Virada",
    content: [
      {
        type: "point",
        text: "**1987-1993:** Segundo Inverno da IA – Falta de poder computacional para redes neurais.",
      },
      {
        type: "point",
        text: "**1997:** Deep Blue (IBM) vence Kasparov (campeão mundial) no xadrez. ",
      },
      {
        type: "subpoint",
        text: "Marco importante que mudou a percepção pública sobre a IA.",
      },
    ],
    image:
      "https://placehold.co/400x250/334155/E2E8F0?text=Deep+Blue+vs+Kasparov", // Exemplo de imagem para Deep Blue
    imageAlt: "Imagem do Deep Blue jogando xadrez contra Kasparov",
    section: "Seção 2: Origem da Inteligência Artificial",
  },
  {
    title: "A IA Chega ao 'Mundo Real'",
    content: [
      {
        type: "point",
        text: "**2005:** Stanford vence DARPA Grand Challenge – Primeiro carro autônomo a completar o desafio no deserto.",
      },
      { type: "subpoint", text: "Nascimento dos carros autônomos." },
      {
        type: "point",
        text: "**2007:** Carnegie Mellon vence Urban Challenge – Carro autônomo em ambiente urbano (semáforos, pedestres).",
      },
    ],
    image: "https://placehold.co/400x250/334155/E2E8F0?text=Carro+Autonomo", // Exemplo de imagem para carro autônomo
    imageAlt: "Imagem de um carro autônomo",
    section: "Seção 2: Origem da Inteligência Artificial",
  },
  {
    title: "Watson e a Ascensão da IA no Conhecimento",
    content: [
      {
        type: "point",
        text: "**2011:** Watson (IBM) vence Jeopardy – Supera campeões humanos em programa de perguntas e respostas. ",
      },
      {
        type: "subpoint",
        text: "Demonstração de compreensão linguística e acesso a grandes bases de dados.",
      },
    ],
    image: "https://placehold.co/400x250/334155/E2E8F0?text=IBM+Watson", // Exemplo de imagem para IBM Watson
    imageAlt: "Imagem do IBM Watson",
    section: "Seção 2: Origem da Inteligência Artificial",
  },
  {
    title: "Robótica e Automação em Ascensão",
    content: [
      {
        type: "point",
        text: "**2013:** Google adquire empresas de robótica (ex: Boston Dynamics). ",
      },
      {
        type: "subpoint",
        text: "Robôs humanoides e quadrúpedes com equilíbrio avançado.",
      },
      {
        type: "point",
        text: "**2014:** Google anuncia carro autônomo sem direção/pedais (ambição de autonomia total).",
      },
      {
        type: "point",
        text: '**2015:** Robô "Hubo" vence DARPA Robotics Challenge (tarefas em ambiente de desastres).',
      },
    ],
    image:
      "https://placehold.co/400x250/334155/E2E8F0?text=Robo+Boston+Dynamics", // Exemplo de imagem para Boston Dynamics
    imageAlt: "Imagem de um robô da Boston Dynamics",
    section: "Seção 2: Origem da Inteligência Artificial",
  },
  {
    title: "Classificação de Áreas da IA",
    content: [
      { type: "point", text: '**"Good Old-Fashioned AI" (IA Clássica):**' },
      {
        type: "subpoint",
        text: "Atua em ambientes discretos, determinísticos e observáveis.",
      },
      { type: "subpoint", text: "Proporciona soluções exatas e ótimas." },
      {
        type: "subpoint",
        text: "Exemplos: Algoritmos de busca, sistemas baseados em conhecimento, inferência lógica.",
      },
      { type: "point", text: "**Inteligência Computacional (IC):**" },
      {
        type: "subpoint",
        text: "Trabalha com ambientes contínuos, não-determinísticos e parcialmente observáveis.",
      },
      { type: "subpoint", text: "Fornece soluções aproximadas." },
      {
        type: "subpoint",
        text: "Frequentemente **bioinspirada** (sistema nervoso, imune).",
      },
      {
        type: "subpoint",
        text: "Envolve **aprendizagem** e **computação numérica**.",
      },
      {
        type: "subpoint",
        text: "Exemplos: Redes neurais, algoritmos genéticos, algoritmos de clustering.",
      },
    ],
    section: "Seção 3: Categorizações da Inteligência Artificial",
  },
  {
    title: "Progressos em Tarefas de IA - Onde Estamos?",
    content: [
      { type: "point", text: "**Categorias de Progresso:**" },
      {
        type: "subpoint",
        text: "**Ideal:** Não há como melhorar (ex: Jogo da velha, Lig 4, Damas, Cubo Mágico, Poker com limitação).",
      },
      {
        type: "subpoint",
        text: "**Super-humano forte:** Supera qualquer humano (ex: Quebra-cabeça, Othello, Scrabble, Quiz, Poker, Xadrez, Go).",
      },
      {
        type: "subpoint",
        text: "**Super-humano:** Supera a maioria dos humanos (ex: Gamão, Bridge, Palavras Cruzadas, **Dirigir um carro**, Arimaa).",
      },
      {
        type: "subpoint",
        text: "**Par-humano:** Se iguala aos humanos (ex: OCR para caracteres definidos, Classificação de imagens).",
      },
      {
        type: "subpoint",
        text: "**Sub-humano:** Inferior a humanos (ex: OCR para textos gerais, Reconhecimento de objetos, Tradução, Reconhecimento de fala, Desambiguação, Processamento de linguagem natural).",
      },
    ],
    section: "Seção 3: Categorizações da Inteligência Artificial",
  },
  {
    title: "Aplicações da IA (Parte 1)",
    content: [
      {
        type: "point",
        text: "**Ciência da Computação:** Provadores de teoremas, linguagens lógicas, otimizadores de funções.",
      },
      {
        type: "point",
        text: "**Finanças:** Investimento em Bolsa de Valores, detecção de fraude.",
      },
      {
        type: "point",
        text: "**Saúde:** Diagnóstico clínico (com resistência), análise de exames de imagem (mais aceito).",
      },
      {
        type: "point",
        text: "**Indústria:** Linhas de montagem, detecção de defeitos em peças.",
      },
    ],
    section: "Seção 3: Categorizações da Inteligência Artificial",
  },
  {
    title: "Aplicações da IA (Parte 2)",
    content: [
      {
        type: "point",
        text: "**Atendimento ao Consumidor:** Assistentes online, automação de suporte, análise de texto (reclamações).",
      },
      {
        type: "point",
        text: "**Jornalismo e Editoração:** Sumarização de eventos esportivos, narração automática, relatórios financeiros e imobiliários.",
      },
      {
        type: "point",
        text: "**Transporte:** Câmbio automático, carros autônomos, semáforos inteligentes, planejamento de vias.",
      },
    ],
    section: "Seção 3: Categorizações da Inteligência Artificial",
  },
  {
    title: "Aplicações da IA (Parte 3)",
    content: [
      {
        type: "point",
        text: "**Telecomunicações:** Roteamento, detecção de ataques.",
      },
      {
        type: "point",
        text: "**Aplicações Militares:** Apoio a decisões táticas, simuladores, computadores de bordo, tradução simultânea, diagnóstico de equipamentos.",
      },
      {
        type: "point",
        text: "**Brinquedos e Jogos:** Cães robôs, robôs bípedes, bots de videogames (NPCs).",
      },
      {
        type: "point",
        text: "**Música:** Sistemas de recomendação, pesquisa em composição automática.",
      },
    ],
    section: "Seção 3: Categorizações da Inteligência Artificial",
  },
  {
    title: "Aplicações da IA (Parte 4)",
    content: [
      { type: "point", text: "**Outros:**" },
      {
        type: "subpoint",
        text: "Segurança nacional (detecção de ameaças em comunicações).",
      },
      { type: "subpoint", text: "Filtros de spam." },
      { type: "subpoint", text: "Reconhecimento de gestos e fala." },
      { type: "subpoint", text: "Controle de robôs em geral." },
      {
        type: "subpoint",
        text: "Assistentes virtuais (Siri, Google Assistente, BIA).",
      },
    ],
    section: "Seção 3: Categorizações da Inteligência Artificial",
  },
  {
    title: "Agentes Inteligentes - O Conceito Base",
    content: [
      {
        type: "point",
        text: "Definição: Qualquer software que recebe informação externa (percepção), processa-a e toma uma decisão para executar uma ação.",
      },
      {
        type: "point",
        text: "Ambiente: O domínio onde o software está inserido (pode ser uma planilha, uma rua, etc.).",
      },
    ],
    section: "Seção 3: Categorizações da Inteligência Artificial",
  },
  {
    title: "Tipos de Ambientes para Agentes Inteligentes",
    content: [
      { type: "point", text: "**Acessibilidade:**" },
      {
        type: "subpoint",
        text: "**Totalmente Observável:** Agente tem acesso a todas as informações (ex: Jogo de damas).",
      },
      {
        type: "subpoint",
        text: "**Parcialmente Observável:** Informações ocultas (ex: Pôquer).",
      },
      { type: "point", text: "**Continuidade:**" },
      {
        type: "subpoint",
        text: "**Contínuo:** Variáveis contínuas, infinitos estados (ex: Diagnóstico médico, carro autônomo).",
      },
      {
        type: "subpoint",
        text: "**Discreto:** Número contável de dados/estados (ex: Xadrez).",
      },
      { type: "point", text: "**Determinismo:**" },
      {
        type: "subpoint",
        text: "**Determinístico:** Não envolve probabilidade, resultados previsíveis (ex: Jogo da velha).",
      },
      {
        type: "subpoint",
        text: "**Não-Determinístico:** Envolve probabilidade, resultados imprevisíveis (ex: Banco Imobiliário, ambiente com informações parciais para o agente).",
      },
    ],
    section: "Seção 3: Categorizações da Inteligência Artificial", // Corrigido de "Seão" para "Seção"
  },
  {
    title: "Tipos de Agentes Inteligentes",
    content: [
      { type: "point", text: "**Agentes Reflexivos:**" },
      {
        type: "subpoint",
        text: "Apenas o presente importa. Olham a situação atual e agem.",
      },
      {
        type: "subpoint",
        text: "Funcionam bem em ambientes totalmente observáveis (ex: Xadrez).",
      },
      { type: "point", text: "**Agentes Reflexivos Baseados em Modelo:**" },
      {
        type: "subpoint",
        text: "Guardam histórico de percepções e ações (memória).",
      },
      {
        type: "subpoint",
        text: "Conseguem gerar um modelo do mundo e fazer previsões, suprindo incertezas em ambientes parcialmente observáveis.",
      },
      { type: "point", text: "**Agentes Baseados em Objetivos:**" },
      {
        type: "subpoint",
        text: "Conseguem distinguir estados comuns de objetivos.",
      },
      {
        type: "subpoint",
        text: "Programados para procurar caminhos até atingir o objetivo (ex: Sair de um prédio).",
      },
    ],
    section: "Seção 3: Categorizações da Inteligência Artificial",
  },
  {
    title: "Tipos de Agentes Inteligentes (Cont.)",
    content: [
      { type: "point", text: "**Agentes Baseados em Utilidade:**" },
      {
        type: "subpoint",
        text: "Mais detalhados que os baseados em objetivos.",
      },
      {
        type: "subpoint",
        text: 'Medem "o quão perto" estão do objetivo (ex: "Está quente ou está frio").',
      },
      { type: "subpoint", text: "Permitem agir de forma mais refinada." },
      { type: "point", text: "**Agentes com Aprendizagem:**" },
      { type: "subpoint", text: "Melhoram sua performance com experiência." },
      {
        type: "subpoint",
        text: "Qualquer tipo de agente pode ter ou não aprendizagem.",
      },
    ],
    section: "Seção 3: Categorizações da Inteligência Artificial",
  },
  {
    title: "A Relação entre IA e Estatística",
    content: [
      {
        type: "point",
        text: "Intersecção fundamental: A IA, especialmente a Inteligência Computacional, possui uma grande intersecção com a **estatística**, cálculo e álgebra linear.",
      },
      {
        type: "point",
        text: "Fundamentação Teórica: Muitos algoritmos de IA têm suas raízes na estatística.",
      },
    ],
    section: "Seção 4: Importância da Análise Estatística de Dados",
  },
  {
    title: "Estatística em Algoritmos de IA",
    content: [
      {
        type: "point",
        text: "**Classificação Bayesiana:** Utiliza probabilidade para classificar dados.",
      },
      {
        type: "point",
        text: "**Regressão Linear:** Usa métodos estatísticos para modelar a relação entre variáveis.",
      },
      {
        type: "point",
        text: "**Redes Neurais:** Embora complexas, sua otimização e aprendizado são baseados em princípios estatísticos de minimização de erros.",
      },
    ],
    section: "Seção 4: Importância da Análise Estatística de Dados",
  },
  {
    title: "Estatística no Aprendizado de Máquina",
    content: [
      {
        type: "point",
        text: '**Aprendizado Supervisionado:** A estatística é crucial para entender a relação entre os dados de entrada e as saídas esperadas (o "gabarito").',
      },
      {
        type: "point",
        text: "**Aprendizado Não Supervisionado:** Métodos estatísticos são usados para encontrar padrões, agrupamentos e reduzir a dimensionalidade dos dados sem um gabarito prévio.",
      },
    ],
    section: "Seção 4: Importância da Análise Estatística de Dados",
  },
  {
    title: "Tomada de Decisão Baseada em Dados",
    content: [
      {
        type: "point",
        text: "**Previsões e Inferências:** A análise estatística permite que os modelos de IA façam previsões precisas e inferências a partir dos dados.",
      },
      {
        type: "point",
        text: "**Avaliação de Modelos:** Métricas estatísticas são usadas para avaliar a performance e a robustez dos algoritmos de IA.",
      },
      {
        type: "point",
        text: "**Compreensão de Dados:** Ajuda a identificar tendências, anomalias e relações nos conjuntos de dados, essenciais para o treinamento da IA.",
      },
    ],
    section: "Seção 4: Importância da Análise Estatística de Dados",
  },
  {
    title: "Conclusão",
    content: [
      {
        type: "point",
        text: "A estatística como base: A análise estatística de dados é um pilar fundamental para o desenvolvimento e o funcionamento de grande parte dos sistemas de Inteligência Artificial modernos.",
      },
      {
        type: "point",
        text: 'Permite a "inteligência": Sem a capacidade de processar e interpretar dados estatisticamente, a IA não seria capaz de aprender, classificar, prever ou otimizar.',
      },
    ],
    section: "Seção 4: Importância da Análise Estatística de Dados",
  },
];

// Componente para renderizar cada tipo de conteúdo do slide
const SlideContent = ({ content }: { content: SlideContentItem[] }) => {
  if (!content) return null;
  return (
    <ul className="list-none p-0 m-0">
      {content.map((item, index) => (
        <li
          key={index}
          className={`mb-2 ${
            item.type === "point" ? "text-lg font-medium" : "ml-4 text-base"
          }`}
        >
          <span
            dangerouslySetInnerHTML={{
              __html: item.text.replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>"
              ),
            }}
          />
        </li>
      ))}
    </ul>
  );
};

// Componente principal da aplicação
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navegar para o slide anterior
  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Navegar para o próximo slide
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev < slidesData.length - 1 ? prev + 1 : prev));
  };

  const slide = slidesData[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 text-white font-sans flex flex-col items-center justify-center p-4 relative">
      {/* Container principal da apresentação */}
      <div className="relative w-full max-w-4xl bg-gray-800 bg-opacity-70 rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105 min-h-[60vh] flex flex-col justify-between">
        <div className="text-center mb-8 flex-grow">
          {/* Título do slide */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-2 leading-tight">
            {slide.title}
          </h1>
          {/* Subtítulo ou Autor para o slide inicial */}
          {currentSlide === 0 && (
            <>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mb-4">
                {slide.subtitle}
              </h2>
              <p className="text-lg text-gray-300 italic">{slide.author}</p>
            </>
          )}
        </div>

        {/* Conteúdo do slide (lista de pontos ou imagem) */}
        <div className="text-gray-100 leading-relaxed text-left overflow-y-auto custom-scrollbar flex-grow">
          {slide.content ? (
            <SlideContent content={slide.content} />
          ) : slide.image ? (
            <div className="flex justify-center items-center h-full">
              {/* O erro TS2339 é resolvido aqui pela tipagem de 'slide' */}
              <img
                src={slide.image}
                alt={slide.imageAlt || ""}
                className="max-w-full max-h-[40vh] object-contain rounded-lg shadow-md"
              />
            </div>
          ) : currentSlide === 0 ? null : (
            <p className="text-lg">
              Conteúdo não especificado para este slide.
            </p>
          )}
        </div>

        {/* Rodapé com número do slide e navegação */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 sm:mb-0">
            <span className="font-semibold text-blue-300">Seção:</span>{" "}
            {slide.section}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={goToPreviousSlide}
              disabled={currentSlide === 0}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 active:scale-95"
            >
              Anterior
            </button>
            <span className="text-xl font-bold text-blue-300">
              {currentSlide + 1} / {slidesData.length}
            </span>
            <button
              onClick={goToNextSlide}
              disabled={currentSlide === slidesData.length - 1}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 active:scale-95"
            >
              Próximo
            </button>
          </div>
        </div>
      </div>

      {/* Marca d'água no rodapé */}
      <div className="absolute top-4 left-0 right-0 text-center text-gray-400 text-xs sm:text-sm md:text-base">
        Vitor Gabriel Blasques Victor | RA: 223907-1
      </div>

      {/* Tailwind CSS Script - necessário para que o Tailwind funcione no ambiente Canvas */}
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}

export default App;
